import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InfoSeparator } from '../info/infoSeparator';
import { ForecastingLineChart } from '../forecastingLineChart/forecastingLineChart';
import { InfoAccordion } from '../accordian/infoAccordian';
import CurrentDisplay from '../currentDisplay/currentDisplay';

export const TabSwitch = () => {
    return (
        <Tabs
            defaultValue='landingPageView'
            className='w-screen flex flex-col items-center'
        >
            <TabsList className='flex items-center mt-2'>
                <TabsTrigger value='landingPageView'>
                    Current Occupancy
                </TabsTrigger>
                <TabsTrigger value='detailedView'>Further Insights</TabsTrigger>
            </TabsList>
            {/** --------------------------------------------------------------------------- */}
            <TabsContent
                value='landingPageView'
                className='flex flex-col items-center'
            >
                <div className='pt-2'>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <CurrentDisplay />
                    </div>
                    <div className='pt-4'></div>
                    <InfoSeparator />
                </div>
            </TabsContent>
            <TabsContent value='detailedView'>
                <ForecastingLineChart />
                <InfoAccordion />
            </TabsContent>
        </Tabs>
    );
};
