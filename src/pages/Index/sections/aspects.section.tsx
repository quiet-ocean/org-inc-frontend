import type { ElementState } from '../../../common/state/widget/widget-state'
import { CardComponent } from '../../../components/card/card.component'

export const AspectsSection = ({
  aspects,
  show,
}: {
  aspects: ElementState[]
  show: boolean
}) => {
  console.log('aspects=', aspects)
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
      {aspects.map((item: any, key: number) => (
        <div key={key}>
          <CardComponent
            title={item.data[0]}
            subtitle={item.data[1]}
            text={item.data[2]}
            gradient={item.data[3]}
            allowed={show}
          />
        </div>
      ))}
    </div>
  )
}
