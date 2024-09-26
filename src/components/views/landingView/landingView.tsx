import { MiniBar } from '@/components/bar/miniBar';
import { RadialDonut } from '@/components/donut/radialDonut';
import { InfoSeparator } from '@/components/info/infoSeparator';
export const LandingView = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between'>
                    <RadialDonut />
                <div id="separator" className='pr-0 pl-0 sm:pr-2 sm:pl-2 pt-4 sm:pt-0'>
                </div>
                    <MiniBar />
            </div>
            <InfoSeparator />
        </div>
    );
};
