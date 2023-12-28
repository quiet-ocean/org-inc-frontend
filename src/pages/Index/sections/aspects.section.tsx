import { CardComponent } from '../../../components/card/card.component'

const aspects = [
  [
    30,
    'Improved ROI on ad spend',
    'Media buying helped with these results, since it’s an important way of attracting clients',
    'from-[#97FFDA] to-[#B7EAFF]',
  ],
  [
    50,
    'More engagement compared to previous 3 campaigns',
    'Ads generated significantly more engagement',
    'from-[#EDC1FF] to-[#C2CBFF]',
  ],
  [
    38,
    'Surge in Website Traffic',
    'As a consequence, website visits skyrocketed, boosted by social media engagement',
    'from-[#FFEEEE] to-[#FEC8D5]',
  ],
  [
    42,
    'Surge in Social Channels Traffic',
    'The surge extended to social media, where engagement almost exactly followed website visits',
    'from-[#FEDCDB] to-[#E0F2C8]',
  ],
]

export const AspectsSection = ({ show }: { show?: boolean }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
      {aspects.map((item: any, key: number) => (
        <div key={key}>
          <CardComponent
            title={item[0]}
            subtitle={item[1]}
            text={item[2]}
            gradient={item[3]}
            allowed={show}
          />
        </div>
      ))}
    </div>
  )
}
