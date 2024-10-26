'use client';

import { TrendingUp } from 'lucide-react';
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
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))'
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

export function IndividualFloorBarChart() {
    const occupancyData = useContext(OccupancyContext);
    const chartData = [
      { month: 'L1', desktop: occupancyData.Level1, mobile: 80 },
      { month: 'L2', desktop: occupancyData.Level2e, mobile: 200 },
      { month: 'L3 NSW', desktop: occupancyData.Level3nsw, mobile: 120 },
      { month: 'L3 E', desktop: occupancyData.Level3e, mobile: 190 },
      { month: 'L4 NSW', desktop: occupancyData.Level4nsw, mobile: 130 },
      { month: 'L4 E', desktop: occupancyData.Level4e, mobile: 152 }
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
                            dataKey='desktop'
                            stackId='a'
                            fill='var(--color-desktop)'
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey='mobile'
                            stackId='a'
                            fill='var(--color-mobile)'
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
