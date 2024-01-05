export enum WidgetActionTypes {
  ADD_WIDGET = 'ADD_WIDGET',
}

export const WidgetAddAction = (payload: any) => ({
  type: WidgetActionTypes.ADD_WIDGET,
  payload,
})
