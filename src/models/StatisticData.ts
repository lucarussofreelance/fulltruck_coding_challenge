import { Histogram } from "./Histogram";
import { Kpis } from "./Kpis";
import { Scalars } from "./Scalars";
import { Statistic } from "./Statistic";

export type StatisticData = {
    data_table: Statistic[];
    histograms: Histogram | null;
    kpis: Kpis | null;
    scalars: Scalars | null;
}