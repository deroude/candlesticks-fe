import { DataPoint } from "./data.point";

export interface DataBatch {
    date: Date;
    data: DataPoint[];
    high?: number;
    low?: number;
}