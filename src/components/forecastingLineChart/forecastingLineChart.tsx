import * as React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis
} from 'recharts';

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
    today: {
        label: 'Today',
        color: 'hsl(var(--chart-1))'
    },
    tomorrow: {
        label: 'Tomorrow',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

const currentDate = new Date();
const chartDataToday = [
    { date: new Date(currentDate.setHours(0, 0, 0, 0)), today: 1200 },
    { date: new Date(currentDate.setHours(1, 0, 0, 0)), today: 1300 },
    { date: new Date(currentDate.setHours(2, 0, 0, 0)), today: 1400 },
    { date: new Date(currentDate.setHours(3, 0, 0, 0)), today: 250 },
    { date: new Date(currentDate.setHours(4, 0, 0, 0)), today: 250 },
    { date: new Date(currentDate.setHours(5, 0, 0, 0)), today: 500 },
    { date: new Date(currentDate.setHours(6, 0, 0, 0)), today: 100 },
    { date: new Date(currentDate.setHours(7, 0, 0, 0)), today: 1750 },
    { date: new Date(currentDate.setHours(8, 0, 0, 0)), today: 1600 },
    { date: new Date(currentDate.setHours(9, 0, 0, 0)), today: 1500 },
    { date: new Date(currentDate.setHours(10, 0, 0, 0)), today: 1400 },
    { date: new Date(currentDate.setHours(11, 0, 0, 0)), today: 1300 },
    { date: new Date(currentDate.setHours(12, 0, 0, 0)), today: 1250 },
    { date: new Date(currentDate.setHours(13, 0, 0, 0)), today: 1350 },
    { date: new Date(currentDate.setHours(14, 0, 0, 0)), today: 1450 },
    { date: new Date(currentDate.setHours(15, 0, 0, 0)), today: 1550 },
    { date: new Date(currentDate.setHours(16, 0, 0, 0)), today: 1650 },
    { date: new Date(currentDate.setHours(17, 0, 0, 0)), today: 1750 },
    { date: new Date(currentDate.setHours(18, 0, 0, 0)), today: 1800 },
    { date: new Date(currentDate.setHours(19, 0, 0, 0)), today: 1700 },
    { date: new Date(currentDate.setHours(20, 0, 0, 0)), today: 1600 },
    { date: new Date(currentDate.setHours(21, 0, 0, 0)), today: 1500 },
    { date: new Date(currentDate.setHours(22, 0, 0, 0)), today: 1400 },
    { date: new Date(currentDate.setHours(23, 0, 0, 0)), today: 1300 }
];

const chartDataTomorrow = [
    {
        date: new Date(currentDate.setHours(0, 0, 0, 0)),
        today: 1100,
        tomorrow: 700
    },
    {
        date: new Date(currentDate.setHours(1, 0, 0, 0)),
        today: 1150,
        tomorrow: 750
    },
    {
        date: new Date(currentDate.setHours(2, 0, 0, 0)),
        today: 1200,
        tomorrow: 800
    },
    {
        date: new Date(currentDate.setHours(3, 0, 0, 0)),
        today: 1250,
        tomorrow: 850
    },
    {
        date: new Date(currentDate.setHours(4, 0, 0, 0)),
        today: 1300,
        tomorrow: 900
    },
    {
        date: new Date(currentDate.setHours(5, 0, 0, 0)),
        today: 1350,
        tomorrow: 950
    },
    {
        date: new Date(currentDate.setHours(6, 0, 0, 0)),
        today: 1400,
        tomorrow: 1000
    },
    {
        date: new Date(currentDate.setHours(7, 0, 0, 0)),
        today: 1450,
        tomorrow: 1050
    },
    {
        date: new Date(currentDate.setHours(8, 0, 0, 0)),
        today: 1500,
        tomorrow: 1100
    },
    {
        date: new Date(currentDate.setHours(9, 0, 0, 0)),
        today: 1550,
        tomorrow: 1150
    },
    {
        date: new Date(currentDate.setHours(10, 0, 0, 0)),
        today: 1600,
        tomorrow: 1200
    },
    {
        date: new Date(currentDate.setHours(11, 0, 0, 0)),
        today: 1650,
        tomorrow: 1250
    },
    {
        date: new Date(currentDate.setHours(12, 0, 0, 0)),
        today: 1700,
        tomorrow: 1300
    },
    {
        date: new Date(currentDate.setHours(13, 0, 0, 0)),
        today: 1750,
        tomorrow: 1350
    },
    {
        date: new Date(currentDate.setHours(14, 0, 0, 0)),
        today: 1800,
        tomorrow: 1400
    },
    {
        date: new Date(currentDate.setHours(15, 0, 0, 0)),
        today: 1750,
        tomorrow: 1350
    },
    {
        date: new Date(currentDate.setHours(16, 0, 0, 0)),
        today: 1700,
        tomorrow: 1300
    },
    {
        date: new Date(currentDate.setHours(17, 0, 0, 0)),
        today: 1650,
        tomorrow: 1250
    },
    {
        date: new Date(currentDate.setHours(18, 0, 0, 0)),
        today: 1600,
        tomorrow: 1200
    },
    {
        date: new Date(currentDate.setHours(19, 0, 0, 0)),
        today: 1700,
        tomorrow: 1050
    },
    {
        date: new Date(currentDate.setHours(20, 0, 0, 0)),
        today: 1600,
        tomorrow: 1000
    },
    {
        date: new Date(currentDate.setHours(21, 0, 0, 0)),
        today: 1500,
        tomorrow: 950
    },
    {
        date: new Date(currentDate.setHours(22, 0, 0, 0)),
        today: 1400,
        tomorrow: 900
    },
    {
        date: new Date(currentDate.setHours(23, 0, 0, 0)),
        today: 1300,
        tomorrow: 850
    }
];

export function ForecastingLineChart() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>('today'); // Need to generalise for more predictions options

    const maximumDay = React.useMemo(() => {
        return {
            today: Math.max(...chartDataToday.map((data) => data.today)),
            tomorrow: Math.max(
                ...chartDataTomorrow.map((data) => data.tomorrow)
            )
        };
    }, []);

    const displayedData = React.useMemo(() => {
        return activeChart === 'today' ? chartDataToday : chartDataTomorrow;
    }, [activeChart]);

    return (
        <div className='w-full'>
            <Card>
                <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
                    <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-3 sm:py-5 '>
                        <CardTitle>Future Occupancy</CardTitle>
                        <CardDescription>
                            Forecasting future peak occupancy
                        </CardDescription>
                    </div>
                    <div className='flex'>
                        {(['today', 'tomorrow'] as const).map((key) => {
                            const chart = key as keyof typeof chartConfig;
                            return (
                                <button
                                    key={chart}
                                    data-active={activeChart === chart}
                                    className='flex flex-1 flex-col justify-center items-center gap-1 border-t px-4 py-2 even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-3'
                                    onClick={() => setActiveChart(chart)}
                                >
                                    <span className='text-xs text-muted-foreground'>
                                        {chartConfig[chart].label}
                                        {/*<small>{dateLabel}</small>*/}
                                    </span>
                                    <span className='text-lg font-bold sm:text-3xl'>
                                        {maximumDay[key].toLocaleString()}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </CardHeader>
                <CardContent className='py-4'>
                    <ChartContainer
                        config={chartConfig}
                        className='aspect-auto h-[300px] w-full'
                    >
                        <AreaChart
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
                                    return date.toLocaleTimeString('en-US', {
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        hour12: false
                                    });
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
                                            return date.toLocaleTimeString(
                                                'en-US',
                                                {
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: false,
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                }
                                            );
                                        }}
                                    />
                                }
                            />
                            <Area
                                dataKey={activeChart}
                                type='monotone'
                                stroke={`var(--color-${activeChart})`}
                                strokeWidth={2}
                                fill={`var(--color-${activeChart})`}
                                fillOpacity={0.2} // Adjust opacity as needed
                                dot={false}
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
