interface ChartDataItem {
    floorLevel: string;
    Occupied: number;
    Empty: number;
}

export const getLeastActiveFloor = (
    chartData: ChartDataItem[],
    MAX_SPACES: Record<string, number>
): string => {
    if (!chartData || chartData.length === 0) {
        console.log('Invalid or empty chart data.');
        return 'Collaborative spaces can be found primarily on Level 1';
    }

    let leastActiveFloor = '';
    let leastActivityRatio = Infinity;

    chartData.forEach(({ floorLevel, Occupied }) => {
        // Map floorLevel back to the corresponding MAX_SPACES key
        const maxSpacesKey = floorLevel
            .replace('L1', 'Level1')
            .replace('L2', 'Level2e')
            .replace('L3', 'Level3nsw')
            .replace('L3E', 'Level3e')
            .replace('L4', 'Level4nsw')
            .replace('L4E', 'Level4e');

        const maxSpaces = MAX_SPACES[maxSpacesKey];

        if (!maxSpaces) {
            console.warn(`Max spaces not found for ${floorLevel}`);
            return;
        }

        const activityRatio = Occupied / maxSpaces; // Relative to maxSpaces

        if (activityRatio < leastActivityRatio) {
            leastActivityRatio = activityRatio;
            leastActiveFloor = floorLevel;
        }
    });

    return leastActiveFloor;
};
