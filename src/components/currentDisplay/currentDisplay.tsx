import useSWR from 'swr';
import { RadialDonut } from './donut/radialDonut';
import { IndividualFloorBarChart } from './bar/IndividualFloorBarChart';
import { useEffect } from 'react';

export interface OccupancyData {
    Level1: number;
    Level2e: number;
    Level3e: number;
    Level3nsw: number;
    Level4e: number;
    Level4nsw: number;
    total: number;
}
// const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = async (url: string): Promise<OccupancyData> => {
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

export default function CurrentDisplay() {
    const { data, error } = useSWR<OccupancyData>(
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
    useEffect(() => {
        console.log('123123');
    }, [data]);

    return (
        <>
            <RadialDonut currentOccupancyData={occupancyData} />
            <div className='pr-0 pl-0 sm:pr-2 sm:pl-2 pt-4 sm:pt-0'></div>
            <IndividualFloorBarChart currentOccupancyData={occupancyData} />
        </>
    );
}
