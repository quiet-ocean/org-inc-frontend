import { combineReducers } from 'redux'

import notification from './state/notification/notification-reducer'
import type { NotificationState } from './state/notification/notification-state'
import widget from './state/widget/widget-reducer'
import type { WidgetState } from './state/widget/widget-state'

export interface RootState {
  notification?: NotificationState
  widget?: WidgetState
}

const rootReducer = combineReducers<any>({
  notification,
  widget,
})

export default rootReducer
