type AggregateBy = 'day' | 'week' | 'month'
type TimeTarget = 'pickup_date' | 'created_at'

type Filters = {
  aggregateBy: AggregateBy
  timeTarget: TimeTarget
  startDate: string | null
  endDate: string | null
}

export type { Filters, AggregateBy, TimeTarget }
