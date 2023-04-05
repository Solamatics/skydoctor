import GoogleIcon from "@mui/icons-material/Google";
import {Facebook, LinkedIn} from "@mui/icons-material";
import {Box, IconButton} from "@mui/material";


export default  function SocialLinks(){
    const social = [
        {icon: <GoogleIcon/>, link: '', id: 1},
        {icon: <Facebook/>, link: '', id: 2},
        {icon: <LinkedIn/>, link: '', id: 3},
    ]


    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {
                social.map(item => (
                    <IconButton key={item.id} color={'primary'} sx={{
                        border: '1px solid #d4d4d4',
                        borderRadius: '0.25rem',
                        mx: 1
                    }}>
                        {item.icon}
                    </IconButton>
                ))
            }

        </Box>
    )
}