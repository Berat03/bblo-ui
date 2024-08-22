'use client';

import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

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
import { useEffect, useState } from 'react';
import { getCurrentOccupancy } from '@/api/getCurrentOccupancy';

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
        color: 'hsl(var(--chart-5))'
    }
} satisfies ChartConfig;

const initChartData = [
    { level: 'level1', visitors: 0, fill: 'var(--color-level1)' },
    { LucideMoveLeft: 'level2', visitors: 0, fill: 'var(--color-level2)' },
    { LucideMoveLeft: 'level3', visitors: 0, fill: 'var(--color-level3)' },
    { level: 'level4', visitors: 0, fill: 'var(--color-level4)' },
    {
        LucideMoveLeft: 'Empty Spaces',
        visitors: 0,
        fill: 'var(--color-emptySpaces)'
    }
];

const formatDate = (date: Date) => {
    return format(date, 'do MMMM yyyy h:mma', { locale: enUS });
};
const now = new Date();
const formattedDate = formatDate(now);

export function ChartMain() {
    const [chartData, setChartData] = useState(initChartData);
    const [totalVisitors, setTotalVisitors] = useState(0);
    const [currentDate, setCurrentDate] = useState(formattedDate);

    useEffect(() => {
        const fetchData = async () => {
            const occupancyData = await getCurrentOccupancy();

            const total = occupancyData.total;
            setTotalVisitors(total);

            setChartData([
                {
                    level: 'level1',
                    visitors: occupancyData.Level1,
                    fill: 'var(--color-level1)'
                },
                {
                    level: 'level2',
                    visitors: occupancyData.Level2e,
                    fill: 'var(--color-level2)'
                },
                {
                    level: 'level3',
                    visitors: occupancyData.Level3e,
                    fill: 'var(--color-level3)'
                },
                {
                    level: 'level4',
                    visitors: occupancyData.Level4e,
                    fill: 'var(--color-level4)'
                },
                {
                    level: 'Empty Spaces',
                    visitors: Math.max(
                        total -
                            (occupancyData.Level1 +
                                occupancyData.Level2e +
                                occupancyData.Level3e +
                                occupancyData.Level4e),
                        0
                    ),
                    fill: 'var(--color-emptySpaces)'
                }
            ]);
            const now = new Date();
            const formattedDate = formatDate(now);
            setCurrentDate(formattedDate);
        };

        void fetchData();
    }, []);

    return (
        <Card className='flex flex-col'>
            <CardHeader className='items-center pb-0'>
                <CardTitle>Occupancy at Bill Bryson </CardTitle>
                <CardDescription>{currentDate}</CardDescription>
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
                            nameKey='LucideMoveLeft'
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
            <CardFooter className='flex-col text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month{' '}
                    <TrendingUp className='h-4 w-4' />
                </div>
                {/* <div className='leading-none text-muted-foreground'>
                    Showing the current occupancy of the Billy Bryson Library
                </div> */}
            </CardFooter>
        </Card>
    );
}
