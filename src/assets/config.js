import Config from 'react-native-config';

const PATH_DOCTOR_AUTH = Config.PATH_DOCTOR_AUTH;
const PATH_NEOCARE_DOCTOR = Config.PATH_NEOCARE_DOCTOR;
const MOCK_API = Config.MOCK_API;
const CODE_PUSH_KEY = {
  ios: Config.IOS_CODEPUSH_KEY,
  android: Config.ANDROID_CODEPUSH_KEY,
};
const KEY_ONE_SIGNAL = Config.KEY_ONE_SIGNAL;

export {
  PATH_DOCTOR_AUTH,
  PATH_NEOCARE_DOCTOR,
  CODE_PUSH_KEY,
  KEY_ONE_SIGNAL,
  MOCK_API,
};
