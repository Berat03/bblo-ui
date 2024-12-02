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
interface IndividualFloorBarChartProps {
    currentOccupancyData: any;
}

export function IndividualFloorBarChart({
    currentOccupancyData
}: IndividualFloorBarChartProps) {
    const chartConfig = {
        Occupied: {
            label: 'Occupied',
            color: 'hsl(var(--chart-1))'
        },
        Empty: {
            label: 'Empty Spaces',
            color: 'hsl(var(--chart-2))'
        }
    } satisfies ChartConfig;

    const chartData = [
        {
            floorLevel: 'L1',
            Occupied: currentOccupancyData.Level1,
            Empty: 386 - currentOccupancyData.Level1
        },
        {
            floorLevel: 'L2',
            Occupied: currentOccupancyData.Level2e,
            Empty: 172 - currentOccupancyData.Level2e
        },
        {
            floorLevel: 'L3',
            Occupied: currentOccupancyData.Level3nsw,
            Empty: 426 - currentOccupancyData.Level3nsw
        },
        {
            floorLevel: 'L3E',
            Occupied: currentOccupancyData.Level3e,
            Empty: 143 - currentOccupancyData.Level3e
        },
        {
            floorLevel: 'L4',
            Occupied: currentOccupancyData.Level4nsw,
            Empty: 356 - currentOccupancyData.Level4nsw
        },
        {
            floorLevel: 'L4E',
            Occupied: currentOccupancyData.Level4e,
            Empty: 152 - currentOccupancyData.Level4e
        }
    ];
    return (
        <Card>
            <CardHeader>
                <CardTitle>How busy is each level?</CardTitle>
                <CardDescription>
                    Counting free and occupied seats
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='floorLevel'
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
                            dataKey='Occupied'
                            stackId='a'
                            fill='var(--color-Occupied)'
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey='Empty'
                            stackId='a'
                            fill='var(--color-Empty)'
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col items-start gap-2 text-sm'>
                <div className='flex gap-2 font-medium leading-none'>
                    Level 3 East Wing is the quietest area.
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing free spaces by section
                </div>
            </CardFooter>
        </Card>
    );
}
