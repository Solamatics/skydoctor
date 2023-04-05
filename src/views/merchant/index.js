import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import TopBar from "../../components/merchant/topbar";

import {addScript} from "../../hooks/addScript";
import {useEffect, useState} from "react";
import Sidebar from "../../components/merchant/sidebar";
import {Outlet, useLocation} from "react-router-dom";


export default function Index() {

    const {pathname} = useLocation()
    const theme = useTheme()
    const [mobileNav, setNav] = useState(useMediaQuery(theme.breakpoints.up('lg')))
    useEffect(() => {

     /*   addScript('/js/script.js')
        addScript('/plugins/datatables/datatables.min.js')
        addScript('/plugins/datatables/jquery.dataTables.min.js')
        addScript('/js/bootstrap.bundle.min.js')

        addScript('/js/feather.min.js')

        addScript('/plugins/select2/js/select2.min.js')

        addScript('/plugins/slimscroll/jquery.slimscroll.min.js')


        addScript('/js/moment.min.js')
        addScript('/plugins/daterangepicker/daterangepicker.js')*/


    }, [])
    const [screen, setScreen] = useState(useMediaQuery(theme.breakpoints.down('md')))




    useEffect(() => {

        if(screen) {
            setNav(false)
        }



    }, [pathname])
    return (
        <Box sx={{display: 'flex',}}>
            <TopBar setNav={setNav} mobileNav={mobileNav}  />
            <Sidebar path={pathname} mobileNav={mobileNav} toggleNav={setNav}/>
            <Box className={"page-wrapper"} component={'main'} sx={{flexGrow: 1}}>
                <Outlet/>
            </Box>


        </Box>

    )

}