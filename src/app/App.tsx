import { AverageBarChart } from '@/components/averageBarChart/averageBarChart';
import { IndividualFloorBarChart } from '@/components/bar/IndividualFloorBarChart';
import { ThemeProvider } from '@/components/darkMode/theme-provider';
import { RadialDonut } from '@/components/donut/radialDonut';
import { ForecastingLineChart } from '@/components/forecastingLineChart/forecastingLineChart';
import { Footer } from '@/components/info/footer';
import useSWR from 'swr';

export interface OccupancyDataInterface {
    [key: string]: number;
}
// const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = async (url: string): Promise<OccupancyDataInterface> => {
    const response = await fetch(url);
    const data = await response.json();
    return {
        Level1: data.affluence.Level1.free,
        Level2e: data.affluence.Level2e.free,
        Level3e: data.affluence.Level3e.free,
        Level3nsw: data.affluence.Level3nsw.free,
        Level4e: data.affluence.Level4e.free,
        Level4nsw: data.affluence.Level4nsw.free,
        total: data.telepen.free
    };
};

function App() {
    const { data, error } = useSWR<OccupancyDataInterface>(
        'https://apps.dur.ac.uk/study-spaces/library/bill-bryson/occupancy/display?json&affluence',
        fetcher,
        {
            refreshInterval: 1000,
            dedupingInterval: 0,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (error) {
        console.error('Error fetching occupancy data:', error);
    }

    const occupancyData = data || {
        Level1: 0,
        Level2e: 0,
        Level3e: 0,
        Level3nsw: 0,
        Level4e: 0,
        Level4nsw: 0,
        total: 0
    };

    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            {/* Parent container with max width and horizontal padding */}
            <div className='mx-auto w-full max-w-7xl px-4 flex flex-col'>
                {/* Top row of 3 components: flex-1 ensures each expands to fill available space */}
                <div className='flex flex-col sm:flex-row gap-4 pt-2 w-full'>
                    <div className='flex-1'>
                        <RadialDonut currentOccupancyData={occupancyData} />
                    </div>
                    <div className='flex-1'>
                        <IndividualFloorBarChart
                            currentOccupancyData={occupancyData}
                        />
                    </div>
                    <div className='flex-1'>
                        <AverageBarChart />
                    </div>
                </div>

                {/* Forecasting section will now match the full width of the three combined cards */}
                <div className='w-full py-4'>
                    <ForecastingLineChart />
                </div>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
