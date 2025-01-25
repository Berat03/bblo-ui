interface ChartDataItem { // Didn't use ChartDataInferface because it is too much effort to change the plotting functions too.
    floorLevel: string;
    Occupied: number;
    Empty: number;
}

export const getLeastActiveFloor = (
    chartData: ChartDataItem[],
    MAX_SPACES: Record<string, number>
): string => {
    if (!chartData || chartData.length === 0) {
        console.log("Invalid or empty chart data.");
        return "Collaborative spaces can be found primarily on Level 1";
    }

    let leastActiveFloor = "";
    let leastActivityRatio = Infinity;

    chartData.forEach(({ floorLevel, Occupied, Empty }) => {
        const totalSpaces = Occupied + Empty;

        if (totalSpaces === 0) return; // Avoid division by zero

        const activityRatio = Occupied / totalSpaces;

        if (activityRatio < leastActivityRatio) {
            leastActivityRatio = activityRatio;
            leastActiveFloor = floorLevel; // Use the floor's key as the name
        }
    });

    return leastActiveFloor;
};
