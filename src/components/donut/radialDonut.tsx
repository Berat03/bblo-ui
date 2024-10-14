'use client';

import { ChartConfig } from '@/components/ui/chart';
import { OccupancyData } from '@/api/getCurrentOccupancy';
import { useContext, useEffect, useState } from 'react';
import { RenderRadialDonut } from './renderRadialDonut';
import OccupancyContext from '../context/occupancyContext';

const chartConfig = {
    visitors: {
        label: 'Visitors'
    },
    safari: {
        label: 'Safari',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;
interface RadialDonutProps {
    date: Date
}
export function RadialDonut(props: RadialDonutProps) {
    const currentOccupancyData: OccupancyData = useContext(OccupancyContext);

    const chartData = [
        {
            browser: 'Visitors',
            visitors: currentOccupancyData.total,
            fill: 'var(--color-safari)'
        }
    ];

    const maximumCapacity = 1800;
    const percentageCapacityFull = chartData[0].visitors / maximumCapacity;
    const barAngle = percentageCapacityFull * 360;


    return (
        <RenderRadialDonut
            barAngle={barAngle}
            chartData={chartData}
            chartConfig={chartConfig}
            date={props.date}
        />
    );
}
