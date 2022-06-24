import settingStateTypes from './modules/user/type'
import appStateTypes from './modules/navbar/type'

export default interface RootStateTypes {
  count: Number
  // eslint-disable-next-line semi
}

export interface AllStateTypes extends RootStateTypes {
  settingsModule: settingStateTypes
  appModule: appStateTypes
}
