import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InfoSeparator } from '../info/infoSeparator';
import { RadialDonut } from '../donut/radialDonut';
import { IndividualFloorBarChart } from '../bar/IndividualFloorBarChart';

interface TabSwitchProps {
    date: Date;
}
export const TabSwitch = (props: TabSwitchProps) => {
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
                    Further Insights
                </TabsTrigger>
            </TabsList>
            {/** --------------------------------------------------------------------------- */}
            <TabsContent
                value='landingPageView'
                className='flex flex-col items-center'
            >
                <div className='pt-2'>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <RadialDonut date={props.date} />
                        <div className='pr-0 pl-0 sm:pr-2 sm:pl-2 pt-4 sm:pt-0'></div>
                        <IndividualFloorBarChart />
                    </div>
                    <div className='pt-4'></div>
                    <InfoSeparator />
                </div>
            </TabsContent>
            <TabsContent value='detailedView'>
                <h1>🚧 UNDER CONSTRUCTION 🚧</h1>
            </TabsContent>
        </Tabs>
    );
};
