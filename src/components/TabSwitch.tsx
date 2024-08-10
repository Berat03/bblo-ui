import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Charts } from './Charts';
import { ChartMain } from './ChartMain';

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
            <TabsContent value='landingPageView' className='pt-5'>
                <ChartMain />
            </TabsContent>
            <TabsContent value='detailedView' >
                <Charts />
            </TabsContent>
        </Tabs>
    );
};
