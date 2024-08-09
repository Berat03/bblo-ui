import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Charts } from "./Charts"
import { ChartMain } from "./ChartMain"

export const TabSwitch = () => {
    return (
        <Tabs defaultValue="account" className="w-screen flex flex-col justify-center">
  <TabsList>
    <TabsTrigger value="landingPageView">Main</TabsTrigger>
    <TabsTrigger value="detailedView">Further Insights</TabsTrigger>
  </TabsList>
  <TabsContent value="landingPageView"><ChartMain/></TabsContent>
  <TabsContent value="detailedView"><Charts/> </TabsContent>
</Tabs>
    )
}