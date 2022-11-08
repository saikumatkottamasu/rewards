import React, {useRef, useContext} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import FloatingButton from '../components/floatingButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RewardContext} from '../context/homeContext';

const CustomModal = props => {
  const [rewardTo, setRewardTo] = React.useState('');
  const [rewardAmount, setRewardAmount] = React.useState('');
  const [rewardMessage, setRewardMessage] = React.useState('');
  const [rewardAmountError, setRewardAmountError] = React.useState(false);
  const [rewardToError, setRewardToError] = React.useState(false);
  const [rewardMessageError, setRewardMessageError] = React.useState(false);
  const amountRef = useRef();
  const messageRef = useRef();
  const [rewardsData, setRewardsData] = useContext(RewardContext);

  const floatingButtonOnclick = () => {
    props.onClick();
  };

  const addReward = () => {
    if (
      rewardTo.length > 0 &&
      rewardAmount.length > 0 &&
      rewardMessage.length > 0
    ) {
      let temp = {
        id: Math.random() * 100 + 100,
        profilePic: 'https://picsum.photos/200/300?random=4',
        message: rewardMessage + ' ( ' + rewardAmount + '$ )',
        name: rewardTo,
        timeStamp: 'Now',
      };
      let feed = rewardsData.feedData;
      feed.unshift(temp);
      setRewardsData({...rewardsData, feedData: feed});
      setRewardAmount('');
      setRewardMessage('');
      setRewardTo('');
      // c;
      Alert.alert('Congrats', 'You have successfully added a reward', [
        {text: 'OK', onPress: () => props.onClick()},
      ]);
    } else {
      if (rewardTo.length <= 0) {
        setRewardToError(true);
      }
      if (rewardAmount.length <= 0) {
        setRewardAmountError(true);
      }
      if (rewardMessage.length <= 0) {
        setRewardMessageError(true);
      }
    }
  };
  const inputs = [
    {
      inputName: 'To',
      id: 1,
      height: 50,
      returnKeyType: 'next',
      ref: null,
      value: rewardTo,
      keyboardType: 'default',
    },
    {
      inputName: 'Amount',
      id: 2,
      height: 60,
      returnKeyType: 'next',
      ref: amountRef,
      value: rewardAmount,
      keyboardType: 'numeric',
    },
    {
      inputName: 'Message',
      id: 3,
      height: 100,
      returnKeyType: 'submit',
      ref: messageRef,
      value: rewardMessage,
      keyboardType: 'default',
    },
  ];

  const onSubmitEditing = id => {
    console.log(id);
    if (id == 1) {
      if (rewardTo.length > 0) {
        setRewardToError(false);
      } else {
        setRewardToError(true);
      }
      amountRef.current.focus();
    } else if (id == 2) {
      if (rewardAmount.length > 0) {
        setRewardAmountError(false);
      } else {
        setRewardAmountError(true);
      }
      messageRef.current.focus();
    } else if (id == 3) {
      if (rewardMessage.length > 0) {
        setRewardMessageError(false);
      } else {
        setRewardMessageError(true);
      }
      addReward();
    }
  };

  const onChangeText = (text, id) => {
    console.log(text);
    if (id == 1) {
      setRewardTo(text);
    } else if (id == 2) {
      setRewardAmount(text);
    } else if (id == 3) {
      setRewardMessage(text);
    }
  };
  const getBorderColor = id => {
    color = '#9c8c7a';
    if (id == 1) {
      if (rewardToError) {
        color = 'red';
      }
    } else if (id == 2) {
      if (rewardAmountError) {
        color = 'red';
      }
    } else if (id == 3) {
      if (rewardMessageError) {
        color = 'red';
      }
    }
    return color;
  };

  const renderInputs = () => {
    return (
      <View style={styles.mainViewMargin}>
        {inputs.map((item, index) => (
          <View style={styles.textInputMargin}>
            <Text style={styles.textMargin}>{item.inputName}</Text>
            <TextInput
              style={[
                {
                  height: item.height,
                  borderColor: getBorderColor(item.id),
                },
                styles.textInput,
              ]}
              value={item.value}
              onChangeText={text => {
                onChangeText(text, item.id);
              }}
              returnKeyType="next"
              onSubmitEditing={() => {
                onSubmitEditing(item.id);
              }}
              ref={item.ref}
              blurOnSubmit={false}
              keyboardType={item.keyboardType}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.onClick();
      }}>
      <KeyboardAwareScrollView>
        <View style={styles.centeredView}>
          <View style={{height: Dimensions.get('window').height}}>
            <View style={styles.modalView}>
              <View style={styles.headingView}>
                <Text style={styles.headingText}>Give Reward</Text>
              </View>
              {renderInputs()}
              <View style={styles.giveView}>
                <TouchableOpacity
                  style={styles.giveButton}
                  onPress={() => {
                    addReward();
                  }}>
                  <Text style={styles.giveText}>Give</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <FloatingButton text={'x'} onClick={floatingButtonOnclick} />
      </KeyboardAwareScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainViewMargin: {
    margin: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    color: '#9c8c7a',
  },
  textMargin: {
    color: '#9c8c7a',
    marginBottom: 5,
  },
  textInputMargin: {
    marginTop: 20,
  },
  headingView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    marginTop: 15,
  },
  giveButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 270,
  },
  giveView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    display: 'flex',
    flex: 1,
    marginTop: 105,
    backgroundColor: '#000000',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  giveText: {
    color: 'black',
    fontWeight: '700',
  },
});

export default CustomModal;
