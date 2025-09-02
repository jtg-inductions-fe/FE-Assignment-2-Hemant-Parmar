import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import MainProfileURL from '@assets/images/main-profile-picture.jpg';

export default function MainProfile() {
    const [anchorElement, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorElement);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (open) {
            handleClose();
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    return (
        <IconButton onClick={handleClick}>
            <Avatar src={MainProfileURL} alt="Profile of current user" />
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
                    horizontal: 'center',
                }}
                disableRestoreFocus
            >
                <Box sx={{ padding: 10 }}>
                    <Typography variant="h2">Hemant Parmar</Typography>
                    <Typography variant="body2">
                        Hemant.Parmar@hotmail.com
                    </Typography>
                </Box>
            </Popover>
        </IconButton>
    );
}
