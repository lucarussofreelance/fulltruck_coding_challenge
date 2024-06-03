export type Kpis = {
    carrier: CarrierClient
    client: CarrierClient
}

type CarrierClient = {
  [key: string]: CarrierClientData
}


type CarrierClientData = {
    label: string
    margin_abs: number
    margin_abs_per_order: number
    margin_abs_perc_on_tot: number
    margin_perc: number
    order_count: number
    order_count_perc_on_tot: number
    revenue: number
    revenue_per_order: number
    revenue_perc_on_tot: number
};
