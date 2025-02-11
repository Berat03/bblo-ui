"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const generateHourlyData = () => {
  const data = [];
  const now = new Date();
  const currentHour = now.getHours();

  for (let i = 0; i <= 24; i++) {
    const hour = (currentHour + i) % 24;
    data.push({
      hour: `${hour}:00`,
      current: i === 0 ? Math.floor(Math.random() * 300) + 50 : 0, // Only for current hour
      future: i > 0 ? Math.floor(Math.random() * 300) + 50 : 0, // For future hours
    });
  }
  return data;
};


const chartData = generateHourlyData();

const chartConfig = {
  current: {
    label: "Current Hour",
    color: "hsl(var(--chart-1))",
  },
  future: {
    label: "Next 24 Hours",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ForecastingLineChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Forecasted Occupancy</CardTitle>
        <CardDescription>
          Showing total visitors over the next 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[350px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 32, // Increased left margin for Y-axis
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="current"
              type="natural"
              fill="var(--color-current)"
              fillOpacity={0.4}
              stroke="var(--color-current)"
            />
            <Area
              dataKey="future"
              type="natural"
              fill="var(--color-future)"
              fillOpacity={0.4}
              stroke="var(--color-future)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
