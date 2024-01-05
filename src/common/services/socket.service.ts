import io from 'socket.io-client'

class SocketSingleton {
  public socket: any

  private static instance: SocketSingleton | null = null
  constructor() {
    // this.socket = null
    console.log('socket class constructor')
    this.socket = io('localhost:5000')
  }

  connect(url: string) {
    if (!this.socket) {
      this.socket = io(url)
      console.log('connect socket', url, this.socket)
    }
  }

  disconnect() {
    if (this.socket) {
      // this.socket.close()
      this.socket.disconnect()
      this.socket = null
    }
  }

  send(message: any) {
    console.log('socket send', this.socket)
    // this.socket.emit('notification')
    if (this.socket) {
      // this.socket.send(JSON.stringify(message))
      console.log('socket emit ', message)
      this.socket.emit(message.type, message.data)
    }
  }

  on(eventName: string, callback: any) {
    console.log('socket add event listener ', eventName, this.socket)
    if (this.socket) {
      // this.socket.addEventListener(eventName, callback)
      this.socket.on(eventName, (data: any) => callback(data))
    }
  }

  public static getInstance(): SocketSingleton {
    if (!SocketSingleton.instance) {
      SocketSingleton.instance = new SocketSingleton()
    }

    return SocketSingleton.instance
  }
}

export { SocketSingleton }
