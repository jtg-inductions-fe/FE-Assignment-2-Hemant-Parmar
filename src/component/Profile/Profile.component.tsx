import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { theme } from '@theme';

import { StyledPopoverBox } from './Profile.style';
import { ProfileProps } from './Profile.type';

export const Profile = ({ name, email, imageURL }: ProfileProps) => {
    const [anchorElement, setAnchorEl] = useState<HTMLElement | null>(null);

    const open = Boolean(anchorElement);

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        maxWidth={theme.spacing(100)}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        noWrap
                        maxWidth={theme.spacing(100)}
                    >
                        {email}
                    </Typography>
                </StyledPopoverBox>
            </Popover>
        </IconButton>
    );
};
