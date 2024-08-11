interface OccupancyLevel {
    free: number;
    total: number;
    freePercentage: number;
    usedPercentage: number;
}

interface OccupancyData {
    telepen: OccupancyLevel;
    Level1: OccupancyLevel;
    Level2e: OccupancyLevel;
    Level3e: OccupancyLevel;
    Level3nsw: OccupancyLevel;
    Level4e: OccupancyLevel;
    Level4nsw: OccupancyLevel;
}

const getCurrentOccupancy = async () => {
    try {
        const response = await fetch(
            'https://apps.dur.ac.uk/study-spaces/library/bill-bryson/occupancy/display?json&affluence'
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else if (response.body === null){
            throw new Error(`Error fetching occupancy data: ${response.body}`);
        }
        // Type information doesn't exist at runtime, so it will be any.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: OccupancyData = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching occupancy data:', error);
        throw error; // TODO: might use this to catch error up the call stack.
    }
};

console.log(await getCurrentOccupancy());
