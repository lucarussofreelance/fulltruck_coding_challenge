import { CircularProgress, Container, Divider } from '@mui/material'
import { FC } from 'react'
import { Statistic } from '../models/Statistic';
import StatisticTableFilters from '../components/statisticsTableFilters/StatisticsTableFilters';
import StatisticTable from '../components/statisticsTable/StatisticsTable';
import { AggregateBy, TimeTarget } from '../models/Filters';

type Props = {
    statistics: Array<Statistic>,
    isLoading: boolean,
    outTimeTarget: (timeTarget: TimeTarget) => void,
    outAggregationType: (aggregationType: AggregateBy) => void,
    outRangeDate: (startDate: string, endDate: string) => void
}

const StatisticPage: FC<Props> = ({ statistics, isLoading, outTimeTarget, outAggregationType, outRangeDate }) => {

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
            <StatisticTable statistics={statistics}/>
            <Divider />
            </>
        }
    </Container>
  )
}

export default StatisticPage
