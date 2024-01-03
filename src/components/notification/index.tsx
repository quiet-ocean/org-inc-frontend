import { AnimationWrapper } from '../wrapper'

export const NotificationComponent = ({ open }: { open?: boolean }) => {
  return (
    open && (
      <div className="relative z-10">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full flex-col justify-end items-start p-5">
            <AnimationWrapper
              allowed={true}
              start="opacity-0 translate-y-8"
              end="opacity-1 translate-y-0"
              delay={1000}
            >
              <div className="flex">
                <div
                  className={`relative transform duration-1000 rounded-lg bg-[#E4CCFF] text-left shadow-xl transition-all w-full sm:max-w-[720px] sm:w-full`}
                >
                  <div className="bg-[#E4CCFF] p-4 sm:w-full sm:min-w-xl text-[32px] font-light bg-[#E4CCFF]">
                    <div
                      className={`transition-all duration-500 flex flex-col justify-space`}
                    >
                      <p className="text-[24px] font-medium">
                        What gives you 68% likelihood?
                      </p>
                    </div>
                    {/* <div id="arrow" className="invisible absolute h-4 w-4 bg-inherit before:visible before:absolute before:h-4 before:w-4 before:rotate-45 before:bg-[#E4CCFF] before:content-['']  bg-[#E4CCFF] top-[60px] left-[18px]" data-popper-arrow></div> */}
                    {/* <div id="arrow" className="invisible absolute h-4 w-4 bg-inherit before:visible before:absolute before:h-4 before:w-4 before:bg-[#E4CCFF] before:content-['']  bg-[#E4CCFF] top-[64px] left-[9px] before:opacity-1" data-popper-arrow></div> */}
                    <div className="h-0 w-0 absolute border-l-[24px] border-l-[24px] border-b-[24px] border-x-transparent border-b-[#E4CCFF] rotate-180 -bottom-[24px]" />
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
