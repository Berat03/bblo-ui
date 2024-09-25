import { MiniBar } from '@/components/bar/miniBar';
import { RadialDonut } from '@/components/donut/radialDonut';

export const LandingPage = () => {
    return (
        <div className='flex flex-col'>
            <RadialDonut />
            <MiniBar />
        </div>
    );
};
