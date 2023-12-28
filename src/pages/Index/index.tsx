import React, { memo, useEffect, useState } from 'react'

import {
  HeaderComponent,
  ModalComponent,
  NavbarComponent,
  AnimationWrapper,
} from '../../components'

import { AspectsSection, GrowthSection, RevenueSection } from './sections'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  const [anime, setAnime] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showAspectContent, setShowAspectContet] = useState(false)
  const [expand, setExpand] = useState(false)

  useEffect(() => {
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
        <AnimationWrapper allowed={anime === 1} start="translate-y-8 opacity-0" end="translate-y-0 opacity-1">
          <RevenueSection />
        </AnimationWrapper>
      </div>
      <AnimationWrapper allowed={expand} start="md:h-0" end="md:h-[320px]" delay={1000} callback={() => setShowAspectContet(true)}>
        <AspectsSection show={showAspectContent} />
      </AnimationWrapper>
      <div className="mb-8">
        <AnimationWrapper allowed={anime === 1} delay={1000} start="translate-y-8 opacity-0" end="translate-y-0 opacity-1" callback={() => setShowModal(true)}>
          <div className="mb-12">
            <GrowthSection />
          </div>
          <AspectsSection />
        </AnimationWrapper>
      </div>
      <ModalComponent show={showModal} handleClose={() => setShowModal(false)} handleExpand={() => setExpand(true)}/>
    </div>
  )
})
Index.displayName = 'Index'

export default Index
