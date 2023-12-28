import { useState, useEffect } from 'react'

import { AnimationWrapper } from '../wrapper'

interface CardComponentProps {
  title?: string | number
  subtitle?: string
  text?: string
  gradient?: string
  delay?: number
  allowed?: boolean
}

const BlankTextComponent = () => {
  return (
    <div
      className={`h-[22px] bg-[#D9E0E5] mb-2`}
      style={{ width: `${60 + Math.random() * 30}%` }}
    />
  )
}
export const CardComponent: React.FC<CardComponentProps> = ({
  title,
  subtitle,
  text,
  gradient,
  allowed,
}) => {
  const [allowMockText, setAllowMockText] = useState(false)

  return (
    <div className="card">
      <div className="min-h-[172px] mb-4">
        <AnimationWrapper
          start="h-0"
          end="h-[172px]"
          allowed={allowed}
          delay={2000}
        >
          <div
            className={`bg-gradient-to-tr ${gradient} mb-4 card-gradient-container h-full`}
          >
            <AnimationWrapper
              start="opacity-0"
              end="opacity-1"
              delay={3000}
              allowed={allowed}
            >
              <div className="p-4">
                <h3 className="text-5xl font-medium mb-2">
                  {title}
                  <span className="text-2xl">%</span>
                </h3>
                <div className="text-[14px] font-normal max-w-[156px]">
                  <p>{subtitle}</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
      </div>
      <div className="relative">
        <AnimationWrapper
          allowed={allowed}
          start="opacity-1"
          end="opacity-0"
          delay={3000}
        >
          <AnimationWrapper
            allowed={allowed}
            start="w-0"
            end="w-full"
            delay={2000}
            callback={() => setAllowMockText(true)}
          >
            <BlankTextComponent />
            <BlankTextComponent />
            <BlankTextComponent />
          </AnimationWrapper>
        </AnimationWrapper>
        <div className="w-full absolute top-0">
          <AnimationWrapper
            allowed={allowed}
            delay={3500}
            start="opacity-0 translate-y-8"
            end="opacity-1 translate-y-0"
          >
            <p className="text-[18px] font-light">{text}</p>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  )
}
