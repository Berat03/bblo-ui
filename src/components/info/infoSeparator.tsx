import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '../darkMode/mode-toggle';
import { Card } from '../ui/card';
import './info.css';

export function InfoSeparator() {
    return (
        <Card>
            <div className='p-5 pt-4'>
                {/*
                    <h4 className='space-y-1text-sm font-medium leading-none'>
                        Further links relating to the library
                    </h4>
                    <Separator className='my-3' />

                */}
                <div className='flex h-4 items-center  justify-between space-x-4 text-sm'>
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
        </Card>
    );
}
