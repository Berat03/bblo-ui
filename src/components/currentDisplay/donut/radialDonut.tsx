'use client';

import { ChartConfig } from '@/components/ui/chart';
import { RenderRadialDonut } from './radialDonutCanvasCard';

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
    currentOccupancyData: any
}
export function RadialDonut(props: RadialDonutProps) {
    const chartData = [
        {
            browser: 'Visitors',
            visitors: props.currentOccupancyData.total,
            fill: 'var(--color-safari)'
        }
    ];

    const maximumCapacity = 1800;
    const percentageCapacityFull = chartData[0].visitors / maximumCapacity;
    const barAngle = percentageCapacityFull * 360;

    return (         <RenderRadialDonut
        barAngle={barAngle}
        chartData={chartData}
        chartConfig={chartConfig}
    />);
}
