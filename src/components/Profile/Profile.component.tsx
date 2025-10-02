import { useState } from 'react';

import { Avatar, IconButton, Popover, Typography } from '@mui/material';

import { StyledPopoverBox } from './Profile.styles';
import { ProfileProps } from './Profile.types';

export const Profile = ({ name, email, imageURL }: ProfileProps) => {
    const [anchorElement, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorElement);

    /**
     * Handles the closing event for the profile popover.
     * Setting anchor to null cause the popover to unmount from the button.
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    /**
     * Toggles the opening and closing of the profile popover.
     * Anchors the popover element to the button if not in open state.
     * Removes the anchor if popover is already open.
     * @param event - The click event object.
     */
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (open) {
            handleClose();
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    return (
        <IconButton onClick={handleClick}>
            <Avatar src={imageURL} alt={`Profile of ${name}`} />
            <Popover
                open={open}
                anchorEl={anchorElement}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <StyledPopoverBox>
                    <Typography
                        variant="h2"
                        noWrap
                        sx={(theme) => theme.mixins.lineClamp(1)}
                        maxWidth={(theme) => theme.spacing(100)}
                    >
                        {name}
                    </Typography>
                    {email && (
                        <Typography
                            variant="body2"
                            noWrap
                            sx={(theme) => theme.mixins.lineClamp(1)}
                            maxWidth={(theme) => theme.spacing(100)}
                        >
                            {email}
                        </Typography>
                    )}
                </StyledPopoverBox>
            </Popover>
        </IconButton>
    );
};
