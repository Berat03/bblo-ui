import { TrendingUp } from 'lucide-react';
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart
} from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { LiveDateTime } from '../date/liveDateTime';

interface RenderRadialDonutProps {
    barAngle: number;
    chartConfig: any;
    chartData: {
        browser: string;
        visitors: number;
        fill: string;
    }[];
}

export const RenderRadialDonut = (props: RenderRadialDonutProps) => {
    return (
        <Card className='flex flex-col h-[380px]'>
            <CardHeader className='items-center pb-0 mb-0 whitespace-nowrap'>
                <CardTitle> Bill Bryson Occupancy</CardTitle>
                <CardDescription>
                    <LiveDateTime />
                </CardDescription>
            </CardHeader>
            <CardContent className='flex-1 pb-0 '>
                <ChartContainer
                    config={props.chartConfig}
                    className='mx-auto aspect-square max-h-[220px]'
                >
                    <RadialBarChart
                        data={props.chartData}
                        endAngle={props.barAngle}
                        innerRadius={85}
                        outerRadius={150}
                    >
                        <PolarGrid
                            gridType='circle'
                            radialLines={false}
                            stroke='none'
                            className='first:fill-muted last:fill-background'
                            polarRadius={[86, 74]}
                        />
                        <RadialBar dataKey='visitors' background />
                        <PolarRadiusAxis
                            tick={false}
                            tickLine={false}
                            axisLine={false}
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
                                                    {props.chartData[0].visitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className='fill-muted-foreground'
                                                >
                                                    Free Spaces
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none whitespace-nowrap'>
                    Trending up by 16% this month
                    <TrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground whitespace-nowrap'>
                    Displaying total available free spaces
                </div>
            </CardFooter>
        </Card>
    );
};