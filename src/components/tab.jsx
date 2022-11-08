import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Tabs = props => {
  return (
    <>
      {props.tabs.map((item, index) => (
        <TouchableOpacity
          disabled={props.selectedTab == item.id}
          style={[
            styles.button,
            {
              backgroundColor:
                props.selectedTab == item.id ? '#ffffff' : '#e4e2df',
              borderTopLeftRadius: item.id == 1 ? 30 : 0,
              borderTopRightRadius: item.id == 2 ? 30 : 0,
            },
          ]}
          onPress={() => {
            props.onClick(item.id);
          }}>
          <Text
            style={[
              styles.tabName,
              {
                color: props.selectedTab == item.id ? '#c9bcad' : '#000000',
              },
            ]}>
            {item.TabName}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabName: {
    fontWeight: '800',
  },
});
export default Tabs;
