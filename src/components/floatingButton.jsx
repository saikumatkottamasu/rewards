import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const FloatingButton = props => {
  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => {
        props.onClick();
      }}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: '3%',
    right: 20,
    backgroundColor: 'black',
    borderRadius: 120,
    display: 'flex',
  },
  text: {
    color: 'white',
    fontSize: 35,
    paddingBottom: 2,
  },
});

export default FloatingButton;
