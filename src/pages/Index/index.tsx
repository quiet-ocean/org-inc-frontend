import React, { memo, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { io } from 'socket.io-client'

import {
  HeaderComponent,
  ModalComponent,
  NavbarComponent,
  AnimationWrapper,
  // NotificationComponent,
} from '../../components'

import 'react-toastify/dist/ReactToastify.css'

import { AspectsSection, GrowthSection, RevenueSection } from './sections'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  const [anime, setAnime] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showAspectContent, setShowAspectContet] = useState(false)
  const [expand, setExpand] = useState(false)
  const socket = io('localhost:5000')

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnime(1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    console.log('use effect of socket')
    const interval = setInterval(() => {
      if (socket) {
        console.log('emit notification')
        socket.emit('notification')
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function onConnect() {
      console.log('socket connected')
    }
    function onDisconnect() {
      console.log('socket disconnected')
    }
    function onNotify(msg: string) {
      console.log('notify - ', msg)
      notify(msg)
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('notification', onNotify)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('notification', onNotify)
    }
  }, [])
  const notify = (text: string) => {
    console.log('notify')
    toast.success(text, {
      position: toast.POSITION.BOTTOM_LEFT,
      hideProgressBar: true,
      autoClose: 3000,
    })
  }

  return (
    <div className="font-inter">
      <div className="mb-5">
        <div className="py-4">
          <HeaderComponent />
        </div>
        <NavbarComponent />
      </div>
      <div className="mb-8">
        <AnimationWrapper
          allowed={anime === 1}
          start="translate-y-8 opacity-0"
          end="translate-y-0 opacity-1"
        >
          <RevenueSection />
        </AnimationWrapper>
      </div>
      <AnimationWrapper
        allowed={expand}
        start="md:h-0"
        end="md:h-[320px]"
        delay={1000}
        callback={() => setShowAspectContet(true)}
      >
        <AspectsSection show={showAspectContent} />
      </AnimationWrapper>
      <div className="mb-8">
        <AnimationWrapper
          allowed={anime === 1}
          delay={1000}
          start="translate-y-8 opacity-0"
          end="translate-y-0 opacity-1"
          callback={() => setShowModal(true)}
        >
          <div className="mb-12">
            <GrowthSection />
          </div>
          <AspectsSection />
        </AnimationWrapper>
      </div>
      {/* <NotificationComponent open={true} /> */}
      <ModalComponent
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleExpand={() => setExpand(true)}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
})
Index.displayName = 'Index'

export default Index
