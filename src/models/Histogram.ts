export type Histogram = {
    time_margin_perc: MarginPerc;
    time_order_count: OrderCount;
    time_revenue: TimeRevenue;
}

type MarginPerc = {
    data: Array<MarginPercDataType>;
    index_by: string;
}

type MarginPercDataType = {
    date: string;
    margin_perc: number;
}

type OrderCount = {
    data: Array<OrderCountDataType>;
    index_by: string;
}

type OrderCountDataType = {
    date: string;
    order_count: number;
}

type TimeRevenue = {
    data: Array<TimeRevenueDataType>;
    index_by: string;
}

type TimeRevenueDataType = {
    date: string;
    margin_abs: number;
    revenue: number;
}