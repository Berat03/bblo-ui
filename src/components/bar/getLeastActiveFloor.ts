export const getLeastActiveFloor = (chartData: any): string => {
    if (!chartData || chartData.length === 0) {
        console.log("Invalid or empty chart data.");
        return "Collaborative spaces can be found primarily on Level 1"
    }
    let leastActiveFloor = "";
    let leastActivityRatio = Infinity;

    chartData.forEach((floor : { floorLevel: string; Occupied: number; Empty: number }) => {
        const totalSpaces = floor.Occupied + floor.Empty;
        if (totalSpaces === 0) return; // Skip if there are no spaces to avoid division by zero

        const activityRatio = floor.Occupied / totalSpaces;

        if (activityRatio < leastActivityRatio) {
            leastActivityRatio = activityRatio;
            leastActiveFloor = floor.floorLevel;
        }
    });

    return leastActiveFloor;
};

