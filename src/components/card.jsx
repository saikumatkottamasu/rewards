import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Card = props => {
  let message = 'by ' + props.rewardedBy;
  if (props.showMyRewards) {
    message = 'rewarded to you';
  }

  return (
    <View style={styles.mainView}>
      <View>
        <Image
          source={{
            uri: props.item.profilePic,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.mainText}>{props.item.message}</Text>
        <Text style={styles.secondaryText}>
          {props.item.name} rewarded {message}
        </Text>
        <Text style={styles.timeText}>{props.item.timeStamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    paddingTop: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  textView: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 100,
  },
  secondaryText: {
    paddingTop: 15,
    color: '#c9bcad',
    fontSize: 12,
  },
  mainText: {
    color: '#0a0a09',
    fontWeight: '600',
  },
  timeText: {
    color: '#c9bcad',
    fontSize: 12,
  },
});
export default Card;
