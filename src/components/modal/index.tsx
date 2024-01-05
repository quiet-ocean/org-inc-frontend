import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import Expand from '../../assets/expand.svg'
import History from '../../assets/history.svg'
import Keyboard from '../../assets/keyboard.svg'
import { useAppDispatch } from '../../hooks/use-appstore'
import { AnimationWrapper } from '../wrapper'

export const ModalComponent = ({
  show,
  handleClose,
}: {
  show: boolean
  handleClose: () => void
}) => {
  const [scale, setScale] = useState('')
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (show) {
      setOpen(true)
      timer = setTimeout(() => setScale('scale-90'), 2000)
    } else {
      timer = setTimeout(() => setOpen(false), 1000)
    }

    return () => clearTimeout(timer)
  }, [show])

  return (
    open && (
      <div className="relative z-10">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end flex-col justify-end text-center sm:items-center sm:p-0">
            <AnimationWrapper
              allowed={show}
              start="opacity-0 translate-y-8"
              end="opacity-1 translate-y-0"
              delay={1000}
              style="w-full"
            >
              <div className="flex justify-center sm:w-full">
                <div
                  className={`relative transform duration-1000 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:max-w-[720px] sm:w-full ${scale}`}
                >
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 sm:w-full sm:min-w-xl text-[32px] font-light">
                    <div
                      className={`transition-all duration-500 flex flex-col justify-space`}
                    >
                      <div className="flex justify-end">
                        <div>
                          <img src={Expand} alt="" />
                        </div>
                      </div>
                      <div className="min-h-[320px] md:w-[640px] pt-5 px-4">
                        {show && (
                          <TypeAnimation
                            style={{ whiteSpace: 'pre-line' }}
                            sequence={[
                              '',
                              4000,
                              'What would you like to know related to the revenue estimate?',
                              1000,
                              `Certainly, here’s some reasoning: \n\n1. there are 4 new clients that combined could bring additional $20,000 by the end of the year`,
                              2000,
                              `2. There is a good chance of Telus signing the new $40,000 contract, first payment tranche is scheduled at September 25th.
                              3. There is a good engagement on the last marketing campaign`,
                              2000,
                              () => {
                                dispatch({ type: 'socket/get-data' })
                              },
                              `Updating the Dashboard... `,
                              5000,
                              `Done.\nShutting down...`,
                              1000,
                              () => {
                                setScale('')
                                setTimeout(() => handleClose(), 1000)
                              },
                            ]}
                            cursor={false}
                            wrapper="span"
                            speed={80}
                            omitDeletionAnimation={true}
                          />
                        )}
                      </div>

                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <div className="flex flex-col justify-center">
                            <img src={History} alt="" />
                          </div>
                          <div>
                            <p className="font-light text-[13px] p-0.5">
                              History
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <div>
                            <p className="font-light text-[13px] p-0.5">
                              I want to type
                            </p>
                          </div>
                          <div className="flex flex-col justify-center">
                            <img src={Keyboard} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    )
  )
}
