import { CircularProgress, Container, SxProps, TextField } from '@mui/material'
import { FC } from 'react'
import { Scalars } from '../models/Scalars';
import { Theme } from '@emotion/react';

type Props = {
    scalars: Scalars | undefined,
    isLoading: boolean
}

const ScalarsPage: FC<Props> = ({ scalars, isLoading }) => {

  const scalarsStyle: SxProps<Theme> = {
    marginTop: '24px'
  }

  const textFieldStyle: SxProps<Theme> = {
    margin: '24px'
  }

  return (
    <>
        { isLoading ? 
            <CircularProgress style={{margin: '16px auto'}}/>
            :  
            <>
              <Container sx={scalarsStyle}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Active carriers"
                  defaultValue={scalars?.active_carriers}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Active clients"
                  defaultValue={scalars?.active_clients}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Average Margin Perc"
                  defaultValue={scalars?.average_margin_perc}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Avg Order Margin Abs"
                  defaultValue={scalars?.avg_order_margin_abs}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Avg Order Revenue"
                  defaultValue={scalars?.avg_order_revenue}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="New carriers"
                  defaultValue={scalars?.new_carriers}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="New clients"
                  defaultValue={scalars?.new_clients}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Total Assigned count"
                  defaultValue={scalars?.total_assigned_count}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Total Margin Abs"
                  defaultValue={scalars?.total_margin_abs}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Total Order Count"
                  defaultValue={scalars?.total_order_count}
                  sx={textFieldStyle}
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Total Revenue"
                  defaultValue={scalars?.total_revenue}
                  sx={textFieldStyle}
                />
              </Container>
            </>
        }
    </>
  )
}

export default ScalarsPage
