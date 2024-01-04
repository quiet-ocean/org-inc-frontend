export enum NotificationActionTypes {
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
}

export const PushNotificationAction = (payload: any) => ({
  payload,
  type: NotificationActionTypes.PUSH_NOTIFICATION,
})
