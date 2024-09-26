import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LandingView } from '../views/landingView/landingView';
import { AlternateView } from '../views/alternativeView/alternateView';

export const TabSwitch = () => {
    return (
        <Tabs
            defaultValue='landingPageView'
            className='w-screen flex flex-col items-center'
        >
            <TabsList className='flex items-center mt-3'>
                <TabsTrigger value='landingPageView'>
                    Current Occupancy
                </TabsTrigger>
                <TabsTrigger value='detailedView'>
                    Get Further Insights
                </TabsTrigger>
            </TabsList>
            {/** --------------------------------------------------------------------------- */}
            <TabsContent
                value='landingPageView'
                className='flex flex-col items-center'
            >
                <div className='pt-2'>
                    <LandingView />
                </div>
            </TabsContent>
            <TabsContent value='detailedView'>
                <AlternateView />
            </TabsContent>
        </Tabs>
    );
};
