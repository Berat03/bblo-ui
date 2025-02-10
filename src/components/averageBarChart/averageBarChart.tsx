'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from 'recharts';

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

/*
*Average Maximum Daily Occupancy for Each Day of the Week:
0     398
1     567
2     826
3     610
4     733
5    1310
6    1080
Name: Total, dtype: int64
*
**/
const maxOccupancy: number = 1800;
const chartData = [
    { month: 'Mon', visitors: maxOccupancy - 398 },
    { month: 'Tue', visitors: maxOccupancy - 567 },
    { month: 'Wed', visitors: maxOccupancy - 826 },
    { month: 'Thu', visitors: maxOccupancy - 610 },
    { month: 'Fri', visitors: maxOccupancy - 733 },
    { month: 'Sat', visitors: maxOccupancy - 1310 },
    { month: 'Sun', visitors: maxOccupancy - 1080 }
];

const chartConfig = {
    visitors: {
        label: 'Visitors'
    }
} satisfies ChartConfig;

export function AverageBarChart() {
    return (
        <Card className='h-[380px]'>
            <CardHeader>
                <CardTitle className='whitespace-nowrap'>
                    Average Daily Occupancy
                </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent hideLabel hideIndicator />
                            }
                        />
                        <Bar dataKey='visitors'>
                            <LabelList
                                position='top'
                                dataKey='month'
                                fillOpacity={1}
                            />
                            {chartData.map((item) => (
                                <Cell
                                    key={item.month}
                                    fill={
                                        item.visitors > 0
                                            ? 'hsl(var(--chart-1))'
                                            : 'hsl(var(--chart-2))'
                                    }
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none whitespace-nowrap'>
                    Monday is the busiest day of the week{' '}
                    <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground whitespace-nowrap	'>
                    Showing the average maximum daily occupancy.
                </div>
            </CardFooter>
        </Card>
    );
}
