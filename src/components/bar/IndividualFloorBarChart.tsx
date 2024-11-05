'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

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
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart';
import { useContext } from 'react';
import OccupancyContext from '../context/occupancyContext';

export const description = 'A stacked bar chart with a legend';



const chartConfig = {
    current: {
        label: 'Current',
        color: 'hsl(var(--chart-1))'
    },
    maximum: {
        label: 'Maximum',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

export function IndividualFloorBarChart() {
    const occupancyData = useContext(OccupancyContext);
    const chartData = [
      { month: 'L1', current: occupancyData.Level1, maximum: 80 },
      { month: 'L2', current: occupancyData.Level2e, maximum: 200 },
      { month: 'L3', current: occupancyData.Level3nsw, maximum: 120 },
      { month: 'L3E', current: occupancyData.Level3e, maximum: 190 },
      { month: 'L4', current: occupancyData.Level4nsw, maximum: 130 },
      { month: 'L4E', current: occupancyData.Level4e, maximum: 152 }
  ];
    console.log(occupancyData);
    return (
        <Card>
            <CardHeader>
                <CardTitle>How busy is each level?</CardTitle>
                <CardDescription>True values may slightly vary</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey='current'
                            stackId='a'
                            fill='var(--color-current)'
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey='maximum'
                            stackId='a'
                            fill='var(--color-maximum)'
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    Level 4 has been the least busy this week.
                </div>
                <div className='leading-none text-muted-foreground'>
                    Displaying available free spaces for each section
                </div>
            </CardFooter>
        </Card>
    );
}
