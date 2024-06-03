import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper';
import { FC } from 'react'
import { Statistic } from '../../models/Statistic';

type Props = {
  statistics: Statistic[] | null;
}

const StatisticTable: FC<Props> = ({ statistics }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="fulltruck statistics table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Active Carrier</TableCell>
            <TableCell align="right">Active Client</TableCell>
            <TableCell align="right">Aggregate Date</TableCell>
            <TableCell align="right">Assigned Count</TableCell>
            <TableCell align="right">Margin Abs</TableCell>
            <TableCell align="right">Margin Abs Per Order</TableCell>
            <TableCell align="right">Margin %</TableCell>
            <TableCell align="right">New Carriers</TableCell>
            <TableCell align="right">New Clients</TableCell>
            <TableCell align="right">Order Count</TableCell>
            <TableCell align="right">Order Per Period</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Revenue Assigned</TableCell>
            <TableCell align="right">Revenue Per Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics && statistics.length > 0 && statistics?.map((stat, i) => (
            <TableRow
              key={i}>
                <TableCell align="right">{stat.active_carrier}</TableCell>
                <TableCell align="right">{stat.active_client}</TableCell>
                <TableCell align="right">{new Date(stat.aggregate_date).toLocaleDateString()}</TableCell>
                <TableCell align="right">{stat.assigned_count}</TableCell>
                <TableCell align="right">{stat.margin_abs}</TableCell>
                <TableCell align="right">{stat.margin_abs_per_order.toFixed(2)}</TableCell>
                <TableCell align="right">{stat.margin_perc.toFixed(2)}</TableCell>
                <TableCell align="right">{stat.new_carriers}</TableCell>
                <TableCell align="right">{stat.new_clients}</TableCell>
                <TableCell align="right">{stat.order_count}</TableCell>
                <TableCell align="right">{stat.order_per_period}</TableCell>
                <TableCell align="right">{stat.revenue}</TableCell>
                <TableCell align="right">{stat.revenue_assigned}</TableCell>
                <TableCell align="right">{stat.revenue_per_order.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StatisticTable
