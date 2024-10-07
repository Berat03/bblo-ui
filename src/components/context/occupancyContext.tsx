// give total, and indiv lev context

import { OccupancyData } from "@/api/getCurrentOccupancy";
import { createContext } from "react";

const OccupancyContext = createContext<OccupancyData>({
    Level1: 100,
    Level2e: 101,
    Level3e: 102,
    Level3nsw: 103,
    Level4e: 104,
    Level4nsw: 105,
    total: 1800
});

export default OccupancyContext;