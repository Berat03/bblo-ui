import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LandingPage } from './landingPage/landingPage';
import { ExtraPage } from './extraPage/extraPage';

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
                    <LandingPage />
                </div>
            </TabsContent>
            <TabsContent value='detailedView'>
                <ExtraPage/>
            </TabsContent>
        </Tabs>
    );
};
