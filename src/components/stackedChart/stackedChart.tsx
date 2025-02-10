"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
  today: {
    label: "Today",
    color: "hsl(var(--chart-1))",
  },
  tomorrow: {
    label: "Tomorrow",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const currentDate = new Date();
const tomorrowDate = new Date(currentDate);
tomorrowDate.setDate(currentDate.getDate() + 1);

const chartData = [
    { date: new Date(currentDate.setHours(0, 0, 0, 0)), today: 1200, tomorrow: 1100 },
    { date: new Date(currentDate.setHours(1, 0, 0, 0)), today: 1300, tomorrow: 1200 },
    { date: new Date(currentDate.setHours(2, 0, 0, 0)), today: 1400, tomorrow: 1300 },
    { date: new Date(currentDate.setHours(3, 0, 0, 0)), today: 250, tomorrow: 300 },
    { date: new Date(currentDate.setHours(4, 0, 0, 0)), today: 250, tomorrow: 280 },
    { date: new Date(currentDate.setHours(5, 0, 0, 0)), today: 500, tomorrow: 450 },
    { date: new Date(currentDate.setHours(6, 0, 0, 0)), today: 100, tomorrow: 150 },
    { date: new Date(currentDate.setHours(7, 0, 0, 0)), today: 1750, tomorrow: 1650 },
    { date: new Date(currentDate.setHours(8, 0, 0, 0)), today: 1600, tomorrow: 1500 },
    { date: new Date(currentDate.setHours(9, 0, 0, 0)), today: 1500, tomorrow: 1400 },
    { date: new Date(currentDate.setHours(10, 0, 0, 0)), today: 1400, tomorrow: 1300 },
    { date: new Date(currentDate.setHours(11, 0, 0, 0)), today: 1300, tomorrow: 1200 },
    { date: new Date(currentDate.setHours(12, 0, 0, 0)), today: 1250, tomorrow: 1150 },
    { date: new Date(currentDate.setHours(13, 0, 0, 0)), today: 1350, tomorrow: 1250 },
    { date: new Date(currentDate.setHours(14, 0, 0, 0)), today: 1450, tomorrow: 1350 },
    { date: new Date(currentDate.setHours(15, 0, 0, 0)), today: 1550, tomorrow: 1450 },
    { date: new Date(currentDate.setHours(16, 0, 0, 0)), today: 1650, tomorrow: 1550 },
    { date: new Date(currentDate.setHours(17, 0, 0, 0)), today: 1750, tomorrow: 1650 },
    { date: new Date(currentDate.setHours(18, 0, 0, 0)), today: 1800, tomorrow: 1700 },
    { date: new Date(currentDate.setHours(19, 0, 0, 0)), today: 1700, tomorrow: 1600 },
    { date: new Date(currentDate.setHours(20, 0, 0, 0)), today: 1600},
    { date: new Date(currentDate.setHours(21, 0, 0, 0)), today: 1500},
    { date: new Date(currentDate.setHours(22, 0, 0, 0)), today: 1400},
    { date: new Date(currentDate.setHours(23, 0, 0, 0)), today: 1300}
];

export function StackedChart() {
  return (
    <Card className=''>
      <CardHeader>
        <CardTitle>Today's Occupancy</CardTitle>
        <CardDescription>
          Showing visitor count throughout the day
        </CardDescription>
      </CardHeader>
      <CardContent className='h-[380px] '>
        <ChartContainer config={chartConfig} className='h-[380px] w-full'>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).getHours() + ':00'}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="tomorrow"
              type="natural"
              fill="var(--color-tomorrow)"
              fillOpacity={0.4}
              stroke="var(--color-tomorrow)"
              stackId="a"
              connectNulls={true}
            />
            <Area
              dataKey="today"
              type="natural"
              fill="var(--color-today)"
              fillOpacity={0.4}
              stroke="var(--color-today)"
              stackId="a"
              connectNulls={true}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% today <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Today's hourly occupancy
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
