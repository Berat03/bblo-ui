'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
    { browser: 'level1', visitors: 275, fill: 'var(--color-level1)' },
    { browser: 'level2', visitors: 200, fill: 'var(--color-level2)' },
    { browser: 'level3', visitors: 287, fill: 'var(--color-level3)' },
    { browser: 'level4', visitors: 173, fill: 'var(--color-level4)' },
    { browser: 'Empty Spaces', visitors: 924, fill: 'var(--color-level4)' },
];

const chartConfig = {
    visitors: {
        label: 'Visitors'
    },
    level1: {
        label: 'level1',
        color: 'hsl(var(--chart-1))'
    },
    level2: {
        label: 'level2',
        color: 'hsl(var(--chart-2))'
    },
    level3: {
        label: 'level3',
        color: 'hsl(var(--chart-3))'
    },
    level4: {
        label: 'level4',
        color: 'hsl(var(--chart-4))'
    },
    emptySpaces: {
        label: 'emptySpaces',
        color: 'hsl(0, 0, 50.2)'
    }
} satisfies ChartConfig;

export function ChartMain() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    }, []);

    return (
        <Card className='flex flex-col'>
            <CardHeader className='items-center pb-0'>
                <CardTitle>Pie Chart - Donut with Text</CardTitle>
                <CardDescription>10th August 2024 11:50am</CardDescription>
            </CardHeader>
            <CardContent className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='mx-auto aspect-square max-h-[400px]'
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey='visitors'
                            nameKey='browser'
                            innerRadius={80}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        'cx' in viewBox &&
                                        'cy' in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor='middle'
                                                dominantBaseline='middle'
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className='fill-foreground text-4xl font-bold'
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 30}
                                                    className='fill-muted-foreground text-lg'
                                                >
                                                    Visitors
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month{' '}
                    <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing the current occupancy of the Billy Bryson Library
                </div>
            </CardFooter>
        </Card>
    );
}
