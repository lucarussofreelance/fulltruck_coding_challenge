import { Box, CircularProgress, Container, Divider, SxProps, Tab, Tabs, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { Kpis } from '../models/Kpis';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Theme } from '@emotion/react';

type Props = {
    kpis: Kpis | undefined,
    isLoading: boolean
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

const KpisPage: FC<Props> = ({ kpis, isLoading }) => {

  const arrayKpisCarrier = Object.values(kpis?.['carrier'] ?? {});
  const arrayKpisClient = Object.values(kpis?.['client'] ?? {});

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const cardsStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Carrier" {...a11yProps(0)} />
          <Tab label="Client" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        { isLoading ? 
          <CircularProgress style={{margin: '16px auto'}}/>
          :
          <Container sx={cardsStyle}>
            {arrayKpisCarrier?.map((kpis, i) =>  
              <Card sx={{width: '30%', margin: '12px'}} key={i}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {kpis.label}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Margin Abs: {kpis.margin_abs}
                    <br />
                    Margin Abs per order: {kpis.margin_abs_per_order}
                    <br />
                    Margin Abs Perc on tot: {kpis.margin_abs_perc_on_tot}
                    <br />
                    Margin Abs Perc: {kpis.margin_perc}
                  </Typography>
                  <Divider />
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    Order count: {kpis.order_count}
                    <br />
                    Order count Perc on tot: {kpis.order_count_perc_on_tot}
                  </Typography>
                  <Divider />
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    Revenue: {kpis.revenue}
                    <br />
                    Revenue per order: {kpis.revenue_per_order}
                    <br />
                    Revenue Perc on tot: {kpis.revenue_perc_on_tot}
                  </Typography>
                </CardContent>
              </Card>
          )}
          </Container>
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        { isLoading ? 
          <CircularProgress style={{margin: '16px auto'}}/>
          :
          <Container sx={cardsStyle}>
            {arrayKpisClient?.map((kpis, i) =>  
              <Card sx={{width: '30%', margin: '12px'}} key={i}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {kpis.label}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Margin Abs: {kpis.margin_abs}
                    <br />
                    Margin Abs per order: {kpis.margin_abs_per_order}
                    <br />
                    Margin Abs Perc on tot: {kpis.margin_abs_perc_on_tot}
                    <br />
                    Margin Abs Perc: {kpis.margin_perc}
                  </Typography>
                  <Divider />
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    Order count: {kpis.order_count}
                    <br />
                    Order count Perc on tot: {kpis.order_count_perc_on_tot}
                  </Typography>
                  <Divider />
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    Revenue: {kpis.revenue}
                    <br />
                    Revenue per order: {kpis.revenue_per_order}
                    <br />
                    Revenue Perc on tot: {kpis.revenue_perc_on_tot}
                  </Typography>
                </CardContent>
              </Card>
          )}
          </Container>
        }
      </CustomTabPanel>
    </>
  )
}

export default KpisPage
