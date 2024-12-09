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

// Helper to add suffix to day number (e.g., 1st, 2nd, 3rd, 4th)
function getDaySuffix(day: number): string {
    const lastDigit = day % 10;
    const lastTwoDigits = day % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return `${day}th`;
    switch (lastDigit) {
        case 1:
            return `${day}st`;
        case 2:
            return `${day}nd`;
        case 3:
            return `${day}rd`;
        default:
            return `${day}th`;
    }
}

// Generate mock data for today (24 hours)
const today = new Date();
today.setHours(0, 0, 0, 0);
const chartDataToday = Array.from({ length: 24 }, (_, i) => {
    const hourDate = new Date(today.getTime());
    hourDate.setHours(i);
    return {
        date: hourDate,
        total: Math.floor(Math.random() * 1000),
        level1: Math.floor(Math.random() * 500),
        level2: Math.floor(Math.random() * 300)
    };
});

// Generate mock data for tomorrow (24 hours)
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);
const chartDataTomorrow = Array.from({ length: 24 }, (_, i) => {
    const hourDate = new Date(tomorrow.getTime());
    hourDate.setHours(i);
    return {
        date: hourDate,
        total: Math.floor(Math.random() * 1000),
        level1: Math.floor(Math.random() * 500),
        level2: Math.floor(Math.random() * 300)
    };
});

// Generate mock data for this week (7 days)
const weekStart = new Date();
weekStart.setHours(0, 0, 0, 0);
const chartDataWeek = Array.from({ length: 7 }, (_, i) => {
    const dayDate = new Date(weekStart.getTime());
    dayDate.setDate(dayDate.getDate() + i);
    return {
        date: dayDate,
        total: Math.floor(Math.random() * 1000),
        level1: Math.floor(Math.random() * 500),
        level2: Math.floor(Math.random() * 300)
    };
});

export function ForecastingLineChart() {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('total');

    // Calculate totals from the weekly dataset just as a placeholder
    // (You can change this logic if needed.)
    const total = React.useMemo(() => {
        return {
            total: chartDataWeek.reduce((acc, curr) => acc + curr.total, 0),
            level1: chartDataWeek.reduce((acc, curr) => acc + curr.level1, 0),
            level2: chartDataWeek.reduce((acc, curr) => acc + curr.level2, 0)
        };
    }, []);

    // Decide which data to show based on the active chart
    const displayedData = React.useMemo(() => {
        if (activeChart === 'total') {
            // Today
            return chartDataToday;
        } else if (activeChart === 'level1') {
            // Tomorrow
            return chartDataTomorrow;
        } else {
            // This Week
            return chartDataWeek;
        }
    }, [activeChart]);

    return (
        <div className='w-full max-w-[1000px] px-3'>
            <Card>
                <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
                    <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-3 sm:py-5 '>
                        <CardTitle>Future Occupancy</CardTitle>
                        <CardDescription className='hidden sm:block'>
                            Forecasting future peak occupancy.
                        </CardDescription>
                    </div>
                    <div className='flex'>
                        {(['total', 'level1', 'level2'] as const).map((key) => {
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
                                        {total[key].toLocaleString()}
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
                            data={displayedData}
                            margin={{
                                left: -20,
                                right: 1
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
                                    if (activeChart === 'total' || activeChart === 'level1') {
                                        // For hours: show "1:00", "2:00", etc.
                                        return date.toLocaleTimeString('en-US', {
                                            hour: 'numeric',
                                            minute: '2-digit',
                                            hour12: false
                                        });
                                    } else {
                                        // Show "Mon 9th", "Tue 10th", etc.
                                        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                                        const dayOfMonth = getDaySuffix(date.getDate());
                                        return `${dayOfWeek} ${dayOfMonth}`;
                                    }
                                }}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                domain={[0, 'dataMax']}
                                tickFormatter={(value) => `${value}`}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        className='w-[150px]'
                                        nameKey='views'
                                        labelFormatter={(value) => {
                                            const date = new Date(value);
                                            if (activeChart === 'total' || activeChart === 'level1') {
                                                // Include day and month for the tooltip
                                                return date.toLocaleTimeString('en-US', {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: false,
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                });
                                            } else {
                                                // Include weekday and suffix
                                                const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
                                                const dayOfMonth = getDaySuffix(date.getDate());
                                                return `${dayOfWeek} ${dayOfMonth}, ${date.getFullYear()}`;
                                            }
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
