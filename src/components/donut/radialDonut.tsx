'use client';

import { ChartConfig } from '@/components/ui/chart';
import { getCurrentOccupancy } from '@/api/getCurrentOccupancy';
import { useEffect, useState } from 'react';
import { RenderRadialDonut } from './renderRadiaDonut';

const initChartData = [
    { browser: 'Visitors', visitors: 1800, fill: 'var(--color-safari)' }
];

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
    const [chartData, setChartData] = useState(initChartData);
    const fetchData = async () => {
        const occupancyData = await getCurrentOccupancy();
        setChartData([
            {
                browser: 'Visitors',
                visitors: occupancyData.total,
                fill: 'var(--color-safari)'
            }
        ]);
    };
    fetchData();

    const maximumCapacity = 1800;
    const percentageCapacityFull = chartData[0].visitors / maximumCapacity;
    const barAngle = percentageCapacityFull * 360;

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60000); // Updates every minute

        return () => clearInterval(timer);
    }, []);
    console.log('Rerender all')
    return (
        <RenderRadialDonut
            barAngle={barAngle}
            chartData={chartData}
            chartConfig={chartConfig}
            date={date}
        />
    );
}
