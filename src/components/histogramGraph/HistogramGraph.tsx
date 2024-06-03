import { FC, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { Histogram } from '../../models/Histogram';
import { Box, Tabs, Tab } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  histogram: Histogram | undefined,
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


const HistogramGraph: FC<Props> = ({ histogram }) => {
  const time_margin_perc = histogram?.time_margin_perc;
  const time_order_count = histogram?.time_order_count;
  const time_revenue = histogram?.time_revenue;

  const backgroundColorsMarginPerc = ["#FF5733", "#FFC300", "#DAF7A6"];
  const backgroundColorsOrderCount = ["#53D9D9", "#002B49", "#0067A0"];
  const backgroundColorsTimeRevenue = ["#900C3F", "#C70039", "#FF5733"];

  const dataMarginPerc = {
    labels: time_margin_perc?.data.map(item => dayjs(item.date, 'DD-MM-YYYY').format('YYYY-MM-DD')),
    datasets: [
      {
        label: 'Margin Perc',
        data: time_margin_perc?.data.map(item => item.margin_perc),
        backgroundColor: backgroundColorsMarginPerc,
        borderWidth: 1,
      }
    ]
  };
  const dataOrderCount = {
    labels: time_order_count?.data.map(item => dayjs(item.date, 'DD-MM-YYYY').format('YYYY-MM-DD')),
    datasets: [
      {
        label: 'Order Count',
        data: time_order_count?.data.map(item => item.order_count),
        backgroundColor: backgroundColorsOrderCount,
        borderWidth: 1,
      }
    ]
  };
  const dataTimeRevenue = {
    labels: time_revenue?.data.map(item => dayjs(item.date, 'DD-MM-YYYY').format('YYYY-MM-DD')),
    datasets: [
      {
        label: 'Revenue',
        data: time_revenue?.data.map(item => item.revenue),
        
        backgroundColor: backgroundColorsTimeRevenue,
        borderWidth: 1,
      },
      {
        label: 'Margin Abs',
        data: time_revenue?.data.map(item => item.margin_abs),
        backgroundColor: backgroundColorsTimeRevenue,
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data) {
            return data.formattedValue;
          },
        },
      },
    },
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return <>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" >
        <Tab label="Margin Perc" {...a11yProps(0)} />
        <Tab label="Order Count" {...a11yProps(1)} />
        <Tab label="Time Revenue" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <CustomTabPanel  value={value} index={0}>
      <Bar data={dataMarginPerc} options={options}/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <Bar data={dataOrderCount} options={options}/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      <Bar data={dataTimeRevenue} options={options}/>
    </CustomTabPanel>
  </>;
};

export default HistogramGraph;