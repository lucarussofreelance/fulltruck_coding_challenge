import { CircularProgress, Container, Divider } from '@mui/material'
import { FC } from 'react'
import { Histogram } from '../models/Histogram';
import StatisticTableFilters from '../components/statisticsTableFilters/StatisticsTableFilters';
import { AggregateBy, TimeTarget } from '../models/Filters';
import HistogramGraph from '../components/histogramGraph/HistogramGraph';

type Props = {
    histogram: Histogram | undefined,
    isLoading: boolean,
    outTimeTarget: (timeTarget: TimeTarget) => void,
    outAggregationType: (aggregationType: AggregateBy) => void,
    outRangeDate: (startDate: string, endDate: string) => void
}

const HistogramPage: FC<Props> = ({ histogram, isLoading, outTimeTarget, outAggregationType, outRangeDate }) => {

  const handleOutTimeTarget = (timeTarget: TimeTarget) => {
    outTimeTarget(timeTarget);
  }

  const handleOutAggrType = (aggrType: AggregateBy) => {
    outAggregationType(aggrType);
  }

  const handleOutRangeDate = (startDate: string, endDate: string) => {
    outRangeDate(startDate, endDate);
  }
  return (
    <Container>
      <StatisticTableFilters outTimeTarget={handleOutTimeTarget} outAggregationType={handleOutAggrType} outRangeDate={handleOutRangeDate}/>
        { isLoading ? 
            <CircularProgress style={{margin: '16px auto'}}/>
            :  
            <>
            <Divider />
            <HistogramGraph histogram={histogram}/>
            <Divider />
            </>
        }
    </Container>
  )
}

export default HistogramPage
