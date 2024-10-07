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

export function RadialDonut() {
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

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 10000); // Updates every minute
        console.log('timer');
        return () => clearInterval(timer);
    }, []);
    return (
        <RenderRadialDonut
            barAngle={barAngle}
            chartData={chartData}
            chartConfig={chartConfig}
            date={date}
        />
    );
}
