// import { ModeToggle } from '@/components/mode-toggle';
import { TabSwitch } from '@/components/pages/TabSwitch';
import { ModeToggle } from '../components/darkMode/mode-toggle';
export const HomePage = () => {
    return (
        <div className='flex flex-col'>
            <TabSwitch />
            <ModeToggle />
        </div>
    );
};
