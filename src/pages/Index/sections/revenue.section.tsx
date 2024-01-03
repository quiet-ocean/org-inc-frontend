import Lightening from '../../../assets/lightening.svg'

export const RevenueSection = () => {
  return (
    <div>
      <div className="mb-5">
        <h5 className="text-[32px] font-inter font-light">
          Hello Erica, with a week until end of the month, the company is on a
          way to book sizable revenue
        </h5>
      </div>
      <div className="xs:block md:grid md:grid-cols-4 gap-4">
        <div className="mb-2">
          <p className="uppercase font-medium text-[14px]">Finance</p>
          <h6 className="text-2xl font-light pt-12">
            With 4 new clients signed in last 3 weeks, there is a solid chance
            of reaching this milestone
          </h6>
          <div className="flex pt-3">
            <div>
              <div className="w-5 h-5">
                <img src={Lightening} alt="" width={`100%`} height={`100%`} />
              </div>
            </div>
            <div>
              <p className="text-[14px] font-light pt-0.5">
                From analysis of past financial data and current market
                conditions
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 mb-2">
          <div className="w-full h-full bg-gradient-to-tr from-[#EDC1FF] to-[#C2CBFF] flex flex-col justify-end p-5">
            <div>
              <h3 className="text-[56px] font-medium text-[#5648FF]">
                $142,200
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="md:h-1/2 bg-gradient-to-tr from-[#FEDCDB] to-[#E0F2C8] p-4 mb-4">
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
              With a healthy profit margin, that may end up a second best month
              ever
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
