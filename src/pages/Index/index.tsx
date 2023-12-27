import React, { memo } from 'react'

import Lightening from '../../assets/lightening.svg'
import { HeaderComponent } from '../../components'
import { SectionWrapper } from '../../components/wrapper'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  return (
    <div className="font-inter">
      <div className="mb-5">
        <div className="py-4">
          <HeaderComponent />
        </div>
        <div>
          <div className="border-y py-3 mb-5">
            <nav>
              <a href="/#">Summary</a>
              <a href="/#" className="ml-5">
                Finance
              </a>
            </nav>
          </div>
        </div>
        <div>
          <h5 className="text-[32px] font-inter font-light">
            Hello Erica, with a week until end of the month, the company is on a
            way to book sizable revenue
          </h5>
        </div>
      </div>
      <SectionWrapper>
        <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="uppercase font-medium text-[14px]">Finance</p>
            <h6 className="text-2xl font-light pt-12">
              With 4 new clients signed in last 3 weeks, there is a solid chance
              of reaching this milestone
            </h6>
            <div className="flex gap-1 pt-3">
              <div className="w-6 h-6">
                <img src={Lightening} alt="" className="w-full h-full" />
              </div>
              <p className="text-[14px] font-light pt-1">
                From analysis of past financial data and current market
                conditions
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full h-full bg-gradient-to-tr from-[#EDC1FF] to-[#C2CBFF] flex flex-col justify-end p-5">
              <div>
                <h3 className="text-[56px] font-medium text-[#5648FF]">
                  $142,200
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="h-1/2 bg-gradient-to-tr from-[#FEDCDB] to-[#E0F2C8] p-4 mb-4">
              <h3 className="text-5xl font-medium mb-2">
                31<span className="text-2xl">%</span>
              </h3>
              <div className="text-[14px] font-normal">
                <p>Current Profit</p>
                <p>Margin</p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-light">
                With a healthy profit margin, that may end up a second best
                month ever
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="mb-5">
          <h5 className="text-[32px] font-inter font-light">
            Also, recent company changes show effect, the company is
            experiencing strong growth...
          </h5>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col justify-between">
            <p className="text-[14px] font-medium">SALES</p>
            <div>
              <h6 className="text-2xl font-light pt-12">
                There is sizable increase in number of clients, and at the same
                churn has decreased
              </h6>
              <div className="flex gap-1 pt-3">
                <div className="w-6 h-6">
                  <img src={Lightening} alt="" className="w-full h-full" />
                </div>
                <p className="text-[14px] font-light pt-1">
                  From analysis of 10,430 messages
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full h-full bg-gradient-to-tr from-[#3FD8CF] to-[#5647FF] p-5 text-white grid grid-rows-2">
              <div className="border-b py-2">
                <p className="text-[14px] font-medium">Number of Clients</p>
                <div>
                  <h3 className="text-right text-[56px] font-medium">88</h3>
                </div>
              </div>
              <div className="py-2">
                <p className="text-[14px] font-medium">Churn</p>
                <div>
                  <h3 className="text-right text-[56px] font-medium">
                    8<span className="text-[36px]">%</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-3 gap-2 border-b py-2">
              <div className="col-span-2">
                <h6 className="text-base font-light">
                  AI Helped automate solid part of Salesforce client onboarding
                </h6>
                <div className="flex gap-1 pt-2">
                  <div className="w-6 h-6">
                    <img src={Lightening} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-[13px] font-light pt-1">
                    From analysis of 864 HubSport funnels
                  </p>
                </div>
              </div>
              <div className="bg-[#5648FF] p-2">
                <h3 className="text-[40px] font-medium text-white">
                  18<span className="text-[20px]">%</span>
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="col-span-2">
                <h6 className="text-base font-light">
                  Time to close a client decreased significantly from a month
                  before
                </h6>
              </div>
              <div className="bg-[#40D8CF] p-1">
                <h3 className="text-[28px] font-medium text-white">
                  18.4<span className="text-[20px]">h</span>
                </h3>
                <p className="text-[13px] text-white font-light text-center">
                  Was 22.4h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </SectionWrapper>
    </div>
  )
})
Index.displayName = 'Index'

export default Index
