import { CustomListItem } from 'component';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { StyledAccordionSummary } from './NavAccordion.style';
import { NavAccordionProps } from './NavAccordion.type';

export const NavAccordion = ({ title, Icon, items }: NavAccordionProps) => (
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
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItem>
                <ListItemIcon>{<Icon />}</ListItemIcon>
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
