// import type { StateType } from 'typesafe-actions'

// export type RootState = StateType

export enum ElementType {
  METRIC,
  TEXT,
  GRAPH,
}

export enum ElementDataProps {}

export interface MetricDataProps {
  value?: number
  subtitle?: string
  text?: string
}

export interface TextDataProps {}
export interface GraphDataProps {}
