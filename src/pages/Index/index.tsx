import React, { memo, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import {
  HeaderComponent,
  ModalComponent,
  NavbarComponent,
  AnimationWrapper,
} from '../../components'

import 'react-toastify/dist/ReactToastify.css'

import { useAppDispatch, useAppSelector } from '../../hooks/use-appstore'

import { AspectsSection, GrowthSection, RevenueSection } from './sections'

import type { RootState } from '../../common/reducers'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  const [anime, setAnime] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showAspectContent, setShowAspectContet] = useState(false)
  const dispatch = useAppDispatch()
  const aspects = useAppSelector((state: RootState) =>
    state.widget.elements.filter((item: any) => item.context === 'aspects'),
  )

  useEffect(() => {
    dispatch({ type: 'socket/connect' })
    const timer = setTimeout(() => {
      setAnime(1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
        allowed={aspects && aspects.length > 0}
        start="md:h-0"
        end="md:h-[320px]"
        delay={1000}
        callback={() => setShowAspectContet(true)}
      >
        <AspectsSection aspects={aspects} show={showAspectContent} />
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
        </AnimationWrapper>
      </div>
      <ModalComponent
        show={showModal}
        handleClose={() => setShowModal(false)}
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
