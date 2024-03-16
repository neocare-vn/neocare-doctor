import {user_example} from 'assets/constans';
import Images from 'common/Images/Images';
import {TextNormalSemiBold, TextSemiBold} from 'common/Text/TextFont';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Colors from 'theme/Colors';
import {heightDevice, widthDevice} from '../../assets/constans';
import {asyncStorage} from '../../store';

const Avatar = ({}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = React.useState({id: -1, username: ''});
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);
  async function getUserStorage() {
    const userStore = (await asyncStorage.getUser()) || {id: -1};
    console.log('User store: ', userStore);
    setUser(userStore);
  }

  // getUserStorage();
  useEffect(() => {
    getUserStorage();
    if (refreshing) {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  }, [refreshing]);

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {/* <View style={styles.container}> */}
        <View style={styles.content}>
          <Images source={user_example} style={styles.image} />
        </View>
        <View style={styles.textBalance}>
          <TextSemiBold style={{color: Colors.whiteColor}}>
            {user?.first_name
              ? user?.first_name + ' ' + user?.last_name
              : 'Username'}
          </TextSemiBold>
        </View>
        <View style={styles.wrapperLabelDoctor}>
          <TextNormalSemiBold style={styles.labelPhone}>
            {user?.phone || '0376527002'}
          </TextNormalSemiBold>
          <TextNormalSemiBold style={styles.labelConnect}>
            {'Đã xác thực'}
          </TextNormalSemiBold>
        </View>
      </ScrollView>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  labelConnect: {
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: Colors.active,
    paddingVertical: 5,
    borderRadius: 6,
  },
  labelPhone: {
    paddingHorizontal: 10,
    color: 'white',
    paddingVertical: 5,
    borderRadius: 20,
  },

  containerInfo: {
    width: '50%',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    marginTop: 10,
    width: widthDevice,
    alignItems: 'center',
  },
  content: {
    borderWidth: 1,
    borderColor: '#FFC51B',
    width: 92,
    height: 92,
    borderRadius: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90,
    // color: '#FFC51B',
  },
  wrapperLabelDoctor: {
    // height: 69,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
});
