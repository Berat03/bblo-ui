import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartMain } from './ChartMain';
import { BarMain } from './BarMain';

export const TabSwitch = () => {
    return (
        <Tabs
            defaultValue='landingPageView'
            className='w-screen flex flex-col items-center'
        >
            <TabsList className='flex items-center mx-auto mt-3'>
                <TabsTrigger value='landingPageView'>
                    Current Occupancy
                </TabsTrigger>
                <TabsTrigger value='detailedView'>Further Insights</TabsTrigger>
            </TabsList>
            <TabsContent value='landingPageView' className='flex flex-col items-center pt-5'>
                <ChartMain />
                <BarMain/>
            </TabsContent>
            <TabsContent value='detailedView' >
                <h1> Under Construction!</h1>
            </TabsContent>
        </Tabs>
    );
};
