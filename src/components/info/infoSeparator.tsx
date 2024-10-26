import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '../darkMode/mode-toggle';
import { Card } from '../ui/card';

export function InfoSeparator() {
    return (
        <Card >
            <div className='p-5'>
                <h4 className='space-y-1text-sm font-medium leading-none'>
                    Further links relating to the library.
                </h4>

                <Separator className='my-4' />
                
                <div className='flex h-5 items-center space-x-4 text-sm'>
                    <a href='https://libguides.durham.ac.uk/Libraries/billbryson'>
                        Info
                    </a>
                    <Separator orientation='vertical' />
                    <a href='https://apps.dur.ac.uk/bookings/book'>Book</a>
                    <Separator orientation='vertical' />
                    <a href='url' className='text-green-600'>
                        Open
                    </a>
                    <Separator orientation='vertical' />
                    <ModeToggle />
                </div>
            </div>
        </Card>
    );
}
