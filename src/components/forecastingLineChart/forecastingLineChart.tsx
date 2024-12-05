'use client';

import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
    {
        date: '2024-04-01',
        total: 452,
        level1: 222,
        level2: 150,
        level3: 50,
        level4: 30
    },
    {
        date: '2024-04-02',
        total: 342,
        level1: 97,
        level2: 180,
        level3: 40,
        level4: 25
    },
    {
        date: '2024-04-03',
        total: 367,
        level1: 167,
        level2: 120,
        level3: 60,
        level4: 20
    },
    {
        date: '2024-04-04',
        total: 617,
        level1: 242,
        level2: 260,
        level3: 80,
        level4: 35
    },
    {
        date: '2024-04-05',
        total: 813,
        level1: 373,
        level2: 290,
        level3: 100,
        level4: 50
    },
    {
        date: '2024-04-06',
        total: 801,
        level1: 301,
        level2: 340,
        level3: 120,
        level4: 40
    },
    {
        date: '2024-04-07',
        total: 560,
        level1: 245,
        level2: 180,
        level3: 90,
        level4: 45
    },
    {
        date: '2024-04-08',
        total: 894,
        level1: 409,
        level2: 320,
        level3: 110,
        level4: 55
    },
    {
        date: '2024-04-09',
        total: 219,
        level1: 59,
        level2: 110,
        level3: 30,
        level4: 20
    },
    {
        date: '2024-04-10',
        total: 556,
        level1: 261,
        level2: 190,
        level3: 70,
        level4: 35
    }
];

const chartConfig = {
    total: {
        label: 'Total',
        color: 'hsl(var(--chart-1))'
    },
    level1: {
        label: 'Level 1',
        color: 'hsl(var(--chart-2))'
    },
    level2: {
        label: 'Level 2',
        color: 'hsl(var(--chart-3))'
    },
    level3: {
        label: 'Level 3',
        color: 'hsl(var(--chart-4))'
    },
    level4: {
        label: 'Level 4',
        color: 'hsl(var(--chart-5))'
    }
} satisfies ChartConfig;

export function ForecastingLineChart() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>('total');

    const total = React.useMemo(
        () => ({
            total: chartData.reduce((acc, curr) => acc + curr.total, 0),
            level1: chartData.reduce((acc, curr) => acc + curr.level1, 0),
            level2: chartData.reduce((acc, curr) => acc + curr.level2, 0),
            level3: chartData.reduce((acc, curr) => acc + curr.level3, 0),
            level4: chartData.reduce((acc, curr) => acc + curr.level4, 0)
        }),
        []
    );

    return (
        <Card className=''>
            <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
                <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
                    <CardTitle>Future Occupancy</CardTitle>
                    <CardDescription>
                        Predicted future occupancy

                    </CardDescription>
                </div>
                <div className='flex flex-col sm:flex-row'>
                    <button
                        data-active={activeChart === 'total'}
                        className='flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                        onClick={() => setActiveChart('total')}
                    >
                        <span className='text-xs text-muted-foreground'>
                            {chartConfig['total'].label}
                        </span>
                        <span className='text-lg font-bold leading-none sm:text-3xl'>
                            {total['total'].toLocaleString()}
                        </span>
                    </button>
                    <div className='hidden md:flex'>
                        {['level1', 'level2', 'level3', 'level4'].map((key) => {
                            const chart = key as keyof typeof chartConfig;
                            return (
                                <button
                                    key={chart}
                                    data-active={activeChart === chart}
                                    className='flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                                    onClick={() => setActiveChart(chart)}
                                >
                                    <span className='text-xs text-muted-foreground'>
                                        {chartConfig[chart].label}
                                    </span>
                                    <span className='text-lg font-bold leading-none sm:text-3xl'>
                                        {total[chart].toLocaleString()}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </CardHeader>
            <CardContent className='px-2 sm:p-6'>
                <ChartContainer
                    config={chartConfig}
                    className='aspect-auto h-[250px] w-full'
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='date'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                });
                            }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            domain={[0, 'dataMax + 50']}
                            tickFormatter={(value) => `${value}`}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className='w-[150px]'
                                    nameKey='views'
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value
                                        ).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        });
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart}
                            type='monotone'
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
