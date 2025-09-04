import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { COLORS } from '@constant';

import MyListItem from './MyListItem';

export default function MyAccordion({
    title,
    children,
    customExpandIcon,
}: {
    title: string;
    children: React.ReactNode;
    customExpandIcon?: React.ReactNode;
}) {
    return (
        <Accordion
            sx={{
                '&:before': {
                    display: 'none',
                },
            }}
            square
            disableGutters
            elevation={0}
        >
            <AccordionSummary
                sx={{
                    borderRadius: 3,
                    boxShadow: 'none',
                    border: 'none',
                    pl: 0,
                    pr: 3,

                    '&:hover': {
                        backgroundColor: COLORS.GREEN[100],
                    },

                    '&.Mui-expanded': {
                        backgroundColor: COLORS.GREEN[100],
                    },

                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                    },
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        ...(customExpandIcon && {
                            transform: 'none',
                        }),
                    },
                }}
                expandIcon={
                    customExpandIcon ? customExpandIcon : <ExpandMoreIcon />
                }
            >
                <ListItem>
                    <ListItemIcon>{children}</ListItemIcon>
                    <ListItemText primary={title} />
                </ListItem>
            </AccordionSummary>
            {/* Keeping details same for all the components, for now  */}
            <AccordionDetails>
                <MyListItem title="Product List"></MyListItem>
                <MyListItem title="Billing"></MyListItem>
                <MyListItem title="Invoice"></MyListItem>
            </AccordionDetails>
        </Accordion>
    );
}
