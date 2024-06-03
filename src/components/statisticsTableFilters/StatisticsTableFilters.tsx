import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps, Theme } from '@mui/material';
import { FC, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRange, DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { AggregateBy, TimeTarget } from '../../models/Filters';

type Props = {
    outTimeTarget: (timeTarget: TimeTarget) => void;
    outAggregationType: (aggrType: AggregateBy) => void;
    outRangeDate: (startDate: string, endDate: string) => void;
}

const boxFiltersStyle: SxProps<Theme> = {
    margin: '16px 0',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    color: 'rgba(0, 0, 0, 0.87)'
};
const boxRowFilterStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
        flexDirection: 'column',
    },
}
const selectStyle: SxProps<Theme> = {
    width: '100%',
    margin: '16px'
}
const datePickerStyle: SxProps<Theme> = {
    width: '100%',
    margin: '16px'
}

const StatisticTableFilters: FC<Props> = ({outTimeTarget, outAggregationType, outRangeDate}) => {

    const handleChangeDateRange = (value: DateRange<Dayjs>) => {
        if(value[0] && value[1]) {
            outRangeDate(value[0].toString(), value[1].toString());
        }
    }

    const [timeTarget, setTimeTarget] = useState<TimeTarget>('created_at');
    const handleChangeTimeTarget = (event: SelectChangeEvent) => {
        const timeTarget = event.target.value as TimeTarget;
        setTimeTarget(timeTarget);
        outTimeTarget(timeTarget);
    };

    const [aggrType, setAggrType] = useState<AggregateBy>('day');
    const handleChangeAggrType = (event: SelectChangeEvent) => {
        const aggregationType = event.target.value as AggregateBy;
        setAggrType(aggregationType);
        outAggregationType(aggregationType);
    };
  return (
    <Box sx={boxFiltersStyle}>
        <Box sx={boxRowFilterStyle}>
            <FormControl sx={selectStyle}>
                <InputLabel id="selectTimeTargetLabel">Time target</InputLabel>
                <Select
                    labelId="selectTimeTargetLabel"
                    id="selectTimeTarget"
                    label="Time target"
                    value={timeTarget}
                    onChange={handleChangeTimeTarget}>
                    <MenuItem value={'created_at'}>Created At</MenuItem>
                    <MenuItem value={'pickup_date'}>Pickup Date</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker localeText={{ start: 'Start date', end: 'End date' }}
                    sx={datePickerStyle}
                    label="Start date"
                    onChange={(newValue) => handleChangeDateRange(newValue)} />
            </LocalizationProvider>
        </Box>
        <Box sx={boxRowFilterStyle}>
            <FormControl sx={selectStyle}>
                <InputLabel id="selectAggrTypeLabel">Aggregation Type</InputLabel>
                <Select
                    labelId="selectAggrTypeLabel"
                    id="selectAggrType"
                    label="Aggregation Type"
                    value={aggrType}
                    onChange={handleChangeAggrType}>
                    <MenuItem value={'day'}>Day</MenuItem>
                    <MenuItem value={'week'}>Week</MenuItem>
                    <MenuItem value={'month'}>Month</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </Box>
  )
}

export default StatisticTableFilters
