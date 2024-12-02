import { getCurrentOccupancy, OccupancyData } from '@/api/getCurrentOccupancy';
import { useEffect, useState } from 'react';
import { RadialDonut } from './donut/radialDonut';
import { IndividualFloorBarChart } from './bar/IndividualFloorBarChart';

export default function CurrentDisplay() {
    const [currentOccupancyData, setOccupancyData] = useState<OccupancyData>({
        Level1: 0,
        Level2e: 0,
        Level3e: 0,
        Level3nsw: 0,
        Level4e: 0,
        Level4nsw: 0,
        total: 0
    });
    const fetchOccupancyData = async () => {
        try {
            const data = await getCurrentOccupancy();
            if (data) {
                setOccupancyData(data);
            } else {
                console.error('Error fetching occupancy data.');
            }
        } catch (error) {
            console.error('Error fetching occupancy data:', error);
        }
    };

    useEffect(() => {
        fetchOccupancyData();
        const interval = setInterval(() => {
            fetchOccupancyData();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <RadialDonut currentOccupancyData={currentOccupancyData} />
            <div className='pr-0 pl-0 sm:pr-2 sm:pl-2 pt-4 sm:pt-0'></div>
            <IndividualFloorBarChart currentOccupancyData={currentOccupancyData}/>
        </>
    );
}
