import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    List,
    ListItem as MuiListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { ListItem } from '@components';

import { StyledAccordionSummary } from './NavAccordion.styles';
import { NavAccordionProps } from './NavAccordion.types';

export const NavAccordion = ({ title, icon, items }: NavAccordionProps) => (
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
            <MuiListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
            </MuiListItem>
        </StyledAccordionSummary>

        <AccordionDetails>
            <List disablePadding>
                {items &&
                    items.map((item) => (
                        <ListItem
                            title={item.title}
                            route={item.route}
                            key={item.title}
                        ></ListItem>
                    ))}
            </List>
        </AccordionDetails>
    </Accordion>
);
