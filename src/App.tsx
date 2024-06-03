import { FC, useEffect, useState } from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuFullTruck from './components/menuFullTruck/MenuFullTruck';
import { createTheme } from '@mui/material';
import HistogramPage from './pages/HistogramPage';
import StatisticPage from './pages/StatisticPage';
import KpisPage from './pages/KpisPage';
import ScalarsPage from './pages/ScalarsPage';
import useStatistics from './hook/useStatistics';
import { Kpis } from './models/Kpis';
import { Histogram } from './models/Histogram';
import { Statistic } from './models/Statistic';
import { Scalars } from './models/Scalars';
import { AggregateBy, TimeTarget } from './models/Filters';
import { StatisticData } from './models/StatisticData';

const App: FC = () => {
  const { fetchStatistics } = useStatistics();

  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  const [ statistics, setStatistics ] = useState<Statistic[]>([]);
  const [ histograms, setHistograms ] = useState<Histogram | null>();
  const [ kpis, setKpis ] = useState<Kpis | null>();
  const [ scalars, setScalars ] = useState<Scalars | null>();

  const [aggregatedBy, setAggregatedBy] = useState<AggregateBy>('day');
  const [timeTarget, setTimeTarget] = useState<TimeTarget>('created_at');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const fetchData = () => {
    fetchStatistics({ aggregateBy: aggregatedBy, timeTarget: timeTarget, startDate: startDate, endDate: endDate}).then((prop: StatisticData) => {
      console.log(prop);
      setStatistics(prop.data_table);
      setHistograms(prop.histograms);
      setKpis(prop.kpis);
      setScalars(prop.scalars);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [timeTarget, aggregatedBy, startDate, endDate]);

  const handleOutTimeTarget = (timeTarget: TimeTarget) => {
    setTimeTarget(timeTarget);
  }
  const handleOutAggregationType = (aggrType: AggregateBy) => {
    setAggregatedBy(aggrType);
  }
  const handleOutRangeDate = (startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuFullTruck />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/statistics" element={<StatisticPage statistics={statistics} isLoading={isLoading} outTimeTarget={handleOutTimeTarget} outAggregationType={handleOutAggregationType} outRangeDate={handleOutRangeDate}/>} />
          <Route path="/histograms" element={<HistogramPage histogram={histograms ? histograms : undefined} isLoading={isLoading} outTimeTarget={handleOutTimeTarget} outAggregationType={handleOutAggregationType} outRangeDate={handleOutRangeDate}></HistogramPage>} />
          <Route path="/kpis" element={<KpisPage kpis={kpis ? kpis : undefined} isLoading={isLoading}></KpisPage>} />
          <Route path="/scalars" element={<ScalarsPage scalars={scalars ? scalars : undefined} isLoading={isLoading}></ScalarsPage>} />
        </Routes>
      </Router>
    </ThemeProvider>
    )
}

export default App
