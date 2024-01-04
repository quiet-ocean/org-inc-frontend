import { combineReducers } from 'redux'

import notification from './state/notification/notification-reducer'
import type { NotificationState } from './state/notification/notification-state'

export interface RootState {
  notification?: NotificationState
}

const rootReducer = combineReducers<any>({
  notification,
})

export default rootReducer
