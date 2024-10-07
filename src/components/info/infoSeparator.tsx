import { Separator } from '@/components/ui/separator';

export function InfoSeparator() {
    return (
        <div className='p-5'>
            <div className='space-y-1'>
                <h4 className='text-sm font-medium leading-none'>
                    Bill Bryson Library
                </h4>
                <p className='text-sm text-muted-foreground'>
                    Further links relating to the library.
                </p>
            </div>
            <Separator className='my-4' />
            <div className='flex h-5 items-center space-x-4 text-sm'>
                <a href="https://libguides.durham.ac.uk/Libraries/billbryson">Info</a>
                <Separator orientation='vertical' />
                <a href="https://apps.dur.ac.uk/bookings/book">Book Spaces</a>
                <Separator orientation='vertical' />
                <a href="url" className='text-green-600'>Status: Open</a>
            </div>
        </div>
    );
}
