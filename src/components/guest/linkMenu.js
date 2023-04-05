import {useState} from 'react';
import {Box, Button,Menu, MenuItem, } from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";




export default function LinkMenu({links,title}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ }}>
                <Button
                    onClick={handleClick}
                    sx={{
                        color: '#2E3842',
                        textTransform: 'none',
                        fontSize: '15px',
                        fontWeight: '500',
                        mx: 1
                }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={open ? <ExpandLess sx={{  color: '#2E3842',}}/> :  <ExpandMore sx={{  color: '#2E3842',}}/>}
                >
                    {title}
                </Button>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 2.8,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    links.map(item=>(
                        <MenuItem key={item.title} sx={{padding:0, mt:-1}}>
                            <ListItemButton  sx={{width:'100%', color: '#2E3842',
                                textTransform: 'none',
                                fontSize: '14px',
                                fontWeight: '500',
                                borderTop: '1px solid #f0f0f0',
                                py:1.4,

                            }}>
                                {item.title}
                            </ListItemButton>
                        </MenuItem>
                    ))
                }

            </Menu>
        </>
    );
}
