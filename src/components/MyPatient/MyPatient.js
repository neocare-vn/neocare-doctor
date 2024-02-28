import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  TextMoneyBold,
  TextNormal,
  TextNormalSemiBold,
  TextSemiBold,
} from '../../common/Text/TextFont';
import Icons from '../../common/Icons/Icons';
import Images from '../../common/Images/Images';
import {empty_logo, heightDevice, widthDevice} from '../../assets/constans';
// import {
//   NAVIGATION_CONNECTION,
//   NAVIGATION_DOCTOR_DETAIL,
// } from '../../navigation/routes';
import LinearGradient from 'react-native-linear-gradient';
import MyModal from '../../common/MyModal/MyModal';
import CustomButton from '../../common/CustomButton/CustomButton';
import PatientItem from './PatientItem';
import HeaderTab from './HeaderTab';
import { NAVIGATION_PACKAGE_DETAILS } from '../../navigation/routes';

const doctors = [
  {
    id: 1,
    name: 'Nguyễn Hữu Nghĩa',
    year: '1969',
    gender: 'Nam',
    disease: 'Huyết áp cao',
    isConnect: true,
  },
  {
    id: 2,
    name: 'Lê Hoàng Bảo',
    year: '1965',
    gender: 'Nam',
    disease: 'Tiểu đuờng',
    isConnect: true,
  },
  {
    id: 3,
    name: 'Phan Kim Phương',
    class: 'TS.BS',
    department: 'Chuyên khoa Tim',
    address: 'Quan 1,TP Ho Chi Minh',
    isConnect: false,
  },
  {
    id: 4,
    name: 'Phan Kim Phương',
    class: 'TS.BS',
    department: 'Chuyên khoa Tim',
    address: 'Quan 1,TP Ho Chi Minh',
    isConnect: false,
  },
  {
    id: 5,
    name: 'Phan Kim Phương',
    class: 'TS.BS',
    department: 'Chuyên khoa Tim',
    address: 'Quan 1,TP Ho Chi Minh',
    isConnect: false,
  },
];

const MyPatient = ({navigation}) => {
  const [listDoctor, setListDoctor] = useState([]);
  const [openOption, setOpenOption] = useState(-1);
  const [tabActive, setTabActive] = useState(1);
  useEffect(() => {
    setListDoctor(doctors);
  }, []);
  const handleSelectPatient = item => {
    if (tabActive !== 3 || !item) {
      return;
    }
    navigation.navigate(NAVIGATION_PACKAGE_DETAILS);
  };
  const renderDoctorItem = ({item, index}) => {
    return (
      <PatientItem
        item={item}
        selectItem={() => handleSelectPatient(item)}
        tabActive={tabActive}
      />
    );
  };
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerSafeArea}>
        <LinearGradient
          colors={['#6D86F9', '#AFB9FF']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={{height: heightDevice * (117 / 844), width: widthDevice}}>
          <View style={styles.wrapperTitle}>
            <TextMoneyBold style={styles.titleText}> Bệnh nhân</TextMoneyBold>
            {listDoctor && (
              <TouchableOpacity onPress={() => setOpenOption(1)}>
                <Icons
                  type={'Feather'}
                  name={'plus-circle'}
                  size={25}
                  style={styles.iconPlus}
                  color={'white'}
                />
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
        <View style={styles.container}>
          <View style={styles.wrapperMydoctor}>
            <HeaderTab
              isSelected={tabActive}
              onPressTab={val => setTabActive(val)}
            />
            {listDoctor && (
              <FlatList
                scrollEnabled={false}
                data={listDoctor.filter(i => i.id <= 2)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop: 10}}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={renderDoctorItem}
              />
            )}
            {!listDoctor && (
              <View style={styles.containerEmpty}>
                <Images
                  resizeMode="contain"
                  style={styles.imageEmpty}
                  source={empty_logo}
                />
                <TextNormalSemiBold style={styles.emptyDoctorText}>
                  Thêm thông tin bệnh nhân có thể giúp bạn liên hệ với họ dễ
                  dàng hơn
                </TextNormalSemiBold>
                <CustomButton
                  label={'Thêm bệnh nhân'}
                  styledButton={styles.addDoctorBtn}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {/* <MyModal
        visible={openOption > 0}
        onPressOutSide={() => setOpenOption(-1)}>
        <View style={styles.removeModal}>
          <TouchableOpacity
            onPress={() => {
              setOpenOption(-1);
              navigation.navigate(NAVIGATION_CONNECTION, {type: 1});
            }}
            style={styles.optionButton}>
            <TextSemiBold style={{color: Colors.blue.blue40}}>
              Nhập mã thủ công
            </TextSemiBold>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpenOption(-1);
              navigation.navigate(NAVIGATION_CONNECTION, {type: 2});
            }}
            style={styles.optionButton}>
            <TextSemiBold style={{color: Colors.blue.blue40}}>
              Quét mã QR
            </TextSemiBold>
          </TouchableOpacity>
        </View>
      </MyModal> */}
    </SafeAreaView>
  );
};

export default MyPatient;
