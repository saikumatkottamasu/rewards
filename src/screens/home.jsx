import React, {useContext, useEffect} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import FloatingButton from '../components/floatingButton';
import Header from '../components/header';
import CustomModal from '../components/modal';
import CustomTabs from '../components/tab';
import Card from '../components/card';
import {DATA1, DATA2} from '../stubs';
import {RewardContext} from '../context/homeContext';

const Home = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(1);
  const [givenAmount, setGivenAmount] = React.useState('$100');
  const [receivedAmount, setReceivedAmount] = React.useState('$250');
  const [name, setName] = React.useState('Sai Kumar');
  const [profilePicUrl, setProfilePicUrl] = React.useState(
    require('../assets/images/sai_image.jpg'),
  );
  const [showMyRewards, setShowMyRewards] = React.useState(false);
  const [rewardsData, setRewardsData] = useContext(RewardContext);
  useEffect(() => {
    setRewardsData({
      feedData: DATA1,
      myRewardsData: DATA2,
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <Card
        key={item.id}
        item={item}
        rewardedBy={name}
        showMyRewards={showMyRewards}
        currentUserPic={profilePicUrl}
      />
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={
          selectedTab == 1 ? rewardsData.feedData : rewardsData.myRewardsData
        }
        renderItem={renderItem}
        key={item => item.id}
        keyExtractor={item => item.id}
      />
    );
  };

  const modalOnClick = () => {
    setModalVisible(!modalVisible);
  };

  const Tabs = [
    {
      TabName: 'Feed',
      id: 1,
    },
    {
      TabName: 'My Rewards',
      id: 2,
    },
  ];

  onClickTab = id => {
    setSelectedTab(id);
    setShowMyRewards(!showMyRewards);
  };

  const floatingButtonOnclick = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <Header
          given={givenAmount}
          received={receivedAmount}
          name={name}
          profileUrl={profilePicUrl}
        />
      </View>
      <CustomModal modalVisible={modalVisible} onClick={modalOnClick} />
      <View style={styles.body}>
        <View style={styles.tabs}>
          <CustomTabs
            tabs={Tabs}
            onClick={onClickTab}
            selectedTab={selectedTab}
          />
        </View>
        <View style={styles.flatList}>{renderFlatList()}</View>
      </View>
      <FloatingButton text={'+'} onClick={floatingButtonOnclick} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {flex: 2, backgroundColor: '#f5f1ee'},
  body: {
    flex: 10,
  },
  tabs: {
    flex: 1,
    backgroundColor: '#f5f1ee',
    flexDirection: 'row',
  },
  flatList: {
    flex: 9,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 30,
  },
});

export default Home;
