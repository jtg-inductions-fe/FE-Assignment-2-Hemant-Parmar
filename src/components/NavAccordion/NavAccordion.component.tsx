import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { CustomListItem } from '@components';

import { StyledAccordionSummary } from './NavAccordion.styles';
import { NavAccordionProps } from './NavAccordion.types';

export const NavAccordion = ({ title, icon, items }: NavAccordionProps) => {
    const Icon = icon; // To differentiate it as React Element
    return (
        <Accordion
            square
            disableGutters
            elevation={0}
            sx={{
                '&:before': {
                    display: 'none',
                },
            }}
        >
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${title}-content`}
                id={`${title}-header`}
            >
                <ListItem>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItem>
            </StyledAccordionSummary>

            <AccordionDetails>
                <List disablePadding>
                    {items &&
                        items.map((item) => (
                            <CustomListItem
                                title={item.title}
                                route={item.route}
                                key={item.title}
                            ></CustomListItem>
                        ))}
                </List>
            </AccordionDetails>
        </Accordion>
    );
};
