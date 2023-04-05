import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

export default function Sidebar(props){


    const {window, show, toggleNav, setActiveOption, options, activeOption} = props
    const drawerWidth = 280;

    const handleNavChange = (key) =>{
        setActiveOption(key)
        toggleNav()
    }

    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2, fontWeight:'700', fontSize: '13px'}}>
                Onboarding Process
            </Typography>
            <Divider/>
            <Box sx={{my:1,padding:1}}>
                {
                    (options).map(item =>
                        <Box
                            onClick={() => handleNavChange(item.key)}
                            className={'on-board-cards'}
                            key={item.key}
                        >

                            <div className={'onboarding-progress'} style={{
                                color: item.key <= activeOption ? '#fff' : '#000000',
                                backgroundColor: item.key <= activeOption ? '#10916F' : '#F4F4F4'
                            }}>
                                <span>{item.key}</span>
                            </div>
                            <div>
                                <h6>{item.title}</h6>

                                <p>{item.content}</p>
                            </div>


                        </Box>
                    )
                }
            </Box>

        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={show}
                onClose={() => toggleNav()}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}