import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default Header = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageView}>
        <Image source={props.profileUrl} style={styles.image} />
      </View>
      <View style={styles.nameAndReward}>
        <Text style={styles.name}>{props.name}</Text>
        <Text>
          GIven
          <Text style={styles.amount}> {props.given}</Text>/ Received{' '}
          <Text style={styles.amount}> {props.received}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 2,
    flexDirection: 'row',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  nameAndReward: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  name: {
    color: '#0a0a09',
    fontWeight: '800',
  },
  amount: {
    fontWeight: '600',
    color: 'black',
  },
});
