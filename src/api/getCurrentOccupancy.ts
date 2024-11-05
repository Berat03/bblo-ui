/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export interface OccupancyData {
    Level1: number;
    Level2e: number;
    Level3e: number;
    Level3nsw: number;
    Level4e: number;
    Level4nsw: number;
    total: number;
}

export const getCurrentOccupancy = async (): Promise<OccupancyData> => {
    const response = await fetch(
        'https://apps.dur.ac.uk/study-spaces/library/bill-bryson/occupancy/display?json&affluence'
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await response.json();
    const result: OccupancyData = {
        Level1: data.affluence.Level1.free,
        Level2e: data.affluence.Level2e.free,
        Level3e: data.affluence.Level3e.free,
        Level3nsw: data.affluence.Level3nsw.free,
        Level4e: data.affluence.Level4e.free,
        Level4nsw: data.affluence.Level4nsw.free,
        total: data.telepen.free
    };
    

    return result;
};

