"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useContext } from "react"
import OccupancyContext from "../context/occupancyContext"

const chartConfig = {
  current: {
    label: "Current Occupancy",
    color: "hsl(var(--chart-1))",
  },
  maximum: {
    label: "Maximum Capacity",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function MiniBar() {
  const occupancyData = useContext(OccupancyContext);
  const chartData = [
    { Level1: "1", current: occupancyData.Level1, maximum: 200 },
    { Level2: "2", current: occupancyData.Level2e, maximum: 300 },
    { Level3: "3", current: occupancyData.Level3e + occupancyData.Level3nsw, maximum: 400 },
    { Level4: "4", current: occupancyData.Level4nsw + occupancyData.Level4e, maximum: 400 },
  ]



  return (
    <Card>
      <CardHeader>
        <CardTitle>How busy is each level?</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="maximum"
              stackId="a"
              fill="var(--color-maximum)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="current"
              stackId="a"
              fill="var(--color-current)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
