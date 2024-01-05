import type { Reducer, AnyAction } from 'redux'

import { WidgetActionTypes } from './widget-action'
import type { WidgetState } from './widget-state'
import { initialWidgetState } from './widget-state'

const widgetReducer: Reducer<WidgetState> = (
  state = initialWidgetState,
  action: AnyAction,
) => {
  console.log('widget reducer', action)
  switch (action.type) {
    case `${WidgetActionTypes.ADD_WIDGET}`:
      console.log('add widget reducer ', action.payload)
      return {
        ...state,
        elements: state.elements
          ? [...state.elements, ...action.payload]
          : action.payload,
        // elements: action.payload
      }

    default:
      return state
  }
}

export default widgetReducer
