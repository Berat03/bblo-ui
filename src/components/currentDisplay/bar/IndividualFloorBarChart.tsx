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

// Dictionary to store maximum values for each floor
const MAX_SPACES = {
    Level1: 386,
    Level2e: 172,
    Level3nsw: 426,
    Level3e: 143,
    Level4nsw: 356,
    Level4e: 152
};

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

    // Generate chart data dynamically using MAX_SPACES
    const chartData = Object.entries(MAX_SPACES).map(([key, maxSpaces]) => {
        const Empty = currentOccupancyData[key] || 0;
        const floorLevel = key
            .replace('Level1', 'L1')
            .replace('Level2e', 'L2')
            .replace('Level3nsw', 'L3')
            .replace('Level3e', 'L3E')
            .replace('Level4nsw', 'L4')
            .replace('Level4e', 'L4E');
        return {
            floorLevel,
            Occupied: maxSpaces - Empty,
            Empty: Empty
        };
    });

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
