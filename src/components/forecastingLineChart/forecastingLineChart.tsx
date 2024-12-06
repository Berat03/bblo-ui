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
    { date: '2024-04-01', total: 100, level1: 222, level2: 150 },
    { date: '2024-04-02', total: 342, level1: 97, level2: 180 },
    { date: '2024-04-03', total: 367, level1: 167, level2: 120 },
    { date: '2024-04-04', total: 617, level1: 242, level2: 260 },
    { date: '2024-04-05', total: 813, level1: 373, level2: 290 },
    { date: '2024-04-06', total: 801, level1: 301, level2: 340 },
    { date: '2024-04-07', total: 560, level1: 245, level2: 180 },
    { date: '2024-04-08', total: 894, level1: 409, level2: 320 }
];
/**
 * Include in the title name, the maximum for that day
 *
 * for today, include the prev 3 hrs
 * for tomorrow,
 * include 00:00-24:00
 * for this week
 * include peak hourly by day
 *
 * hence axis will change.
 *
 *
 *
 *
 */

const chartConfig = {
    total: {
        label: 'Today',
        color: 'hsl(var(--chart-1))'
    },
    level1: {
        label: 'Tomorrow',
        color: 'hsl(var(--chart-2))'
    },
    level2: {
        label: 'This Week',
        color: 'hsl(var(--chart-3))'
    }
} satisfies ChartConfig;

export function ForecastingLineChart() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>('total');
    const total = React.useMemo(
        () => ({
            total: chartData.reduce((acc, curr) => acc + curr.total, 0),
            level1: chartData.reduce((acc, curr) => acc + curr.level1, 0),
            level2: chartData.reduce((acc, curr) => acc + curr.level2, 0)
        }),
        []
    );

    return (
        <div className='w-full max-w-[1000px] px-3'>
            <Card>
                <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
                    <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-3 sm:py-5 '>
                        <CardTitle>Future Occupancy</CardTitle>
                        <CardDescription className='hidden sm:block'>
                            Showing predicted future occupancy
                        </CardDescription>
                    </div>
                    <div className='flex'>
                        {['total', 'level1', 'level2'].map((key) => {
                            const chart = key as keyof typeof chartConfig;
                            return (
                                <button
                                    key={chart}
                                    data-active={activeChart === chart}
                                    className='flex flex-1 flex-col justify-center gap-1 border-t px-4 py-2 even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-3'
                                    onClick={() => setActiveChart(chart)}
                                >
                                    <span className='text-xs text-muted-foreground'>
                                        {chartConfig[chart].label}
                                    </span>
                                    <span className='text-lg font-bold leading-none sm:text-3xl'>
                                        {total[
                                            key as keyof typeof total
                                        ].toLocaleString()}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </CardHeader>
                <CardContent className='py-3'>
                    <ChartContainer
                        config={chartConfig}
                        className='aspect-auto h-[250px] w-full'
                    >
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: -20,
                                right: 1
                            }}
                            className=''
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
                                domain={[0, 'dataMax']} // Adjust the domain to add padding
                                tickFormatter={(value) => `${value}`} // Customize format if needed
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
        </div>
    );
}
