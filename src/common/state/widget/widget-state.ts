import type {
  ElementType,
  GraphDataProps,
  MetricDataProps,
  TextDataProps,
} from '../../models'

export interface ElementState {
  type?: ElementType // graph, metric, text
  data?: MetricDataProps | GraphDataProps | TextDataProps
  context?: string // row or widget
}

export interface WidgetState {
  elements?: ElementState[]
}

export const initialWidgetState = {
  elements: [],
}
