import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '../darkMode/mode-toggle';
import './footer.css';

export function Footer() {
    return (
        <div className='p-2 pb-4'>
            <div className='flex h-4 items-center justify-between space-x-4 text-sm'>
                <div className='flex h-5 items-center space-x-4 text-sm'>
                    <a
                        className='linkButton'
                        href='https://libguides.durham.ac.uk/Libraries/billbryson'
                    >
                        Info
                    </a>

                    <Separator orientation='vertical' />

                    <a
                        className='linkButton'
                        href='https://apps.dur.ac.uk/bookings/book'
                    >
                        Book
                    </a>

                    <Separator orientation='vertical' />

                    <a
                        className='linkButton'
                        href='https://libguides.durham.ac.uk/ld.php?content_id=33980013'
                    >
                        Map
                    </a>
                    <Separator orientation='vertical' />
                    <p className='statusIcon'>Open</p>
                </div>
                <ModeToggle />
            </div>
        </div>
    );
}
