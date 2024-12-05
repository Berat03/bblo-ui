import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

export function InfoAccordion() {
    return (
        <div className='w-screen max-w-[1000px] px-3'>
        <Accordion type='single' collapsible >
            <AccordionItem value='item-1'>
                <AccordionTrigger>
                    How does our model work?
                </AccordionTrigger>
                <AccordionContent>Not too sure myself.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
                <AccordionTrigger>
                    Where does our data come from?
                </AccordionTrigger>
                <AccordionContent>
                    I've been calling and recording the api for almost 2 years.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
                <AccordionTrigger>
                    Have you got any suggestions?
                </AccordionTrigger>
                <AccordionContent>
                    Please send, I'm so indecisive sometimes.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    );

}
