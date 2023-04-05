import {Box, Icon, List, ListItem, ListItemIcon} from "@mui/material";
import {routes} from "./routes";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Link, useMatch, useOutletContext} from "react-router-dom";
import {useContext, useEffect, useState} from "react";



export default function DashboardSideBar() {
    const [sidePath] = useOutletContext()

    return (
        <div className={'doctor-lg-nav-holder'}>
            <Box className={'doctor-lg-nav'}>

                <Box className={'widget-profile'}>
                    <Box className={'booking-doc-img'}>
                        <img src={require('../../assets/img/avatar.jpg')} alt={'profile'}/>
                    </Box>

                    <h5 className={'profile-det-info'}>Dr. Darren Elder</h5>
                    <h5 className={'patient-details'}>BDS, MDS - Oral & Maxillofacial Surgery</h5>
                </Box>
                <Box>
                    <List sx={{fontSize: '11px!important'}}>
                        {
                            routes.map(item => (
                                <ListItem  className={'sidebar-nav-list sidebar-nav'} key={item.title}>
                                    <ListItemButton  component={Link} to={item.route}>
                                        <ListItemIcon className={'sidebar-nav-icon'}>
                                            <Icon sx={{color:item.route === sidePath ?'#0de0fe' :'#757575'}}>{item.icon} </Icon>
                                        </ListItemIcon>
                                        <ListItemText>
                                            <span style={{fontSize: '11px!important', color:item.route === sidePath ?'#0de0fe' :'#757575'}}>
                                                {item.title}
                                            </span>
                                        </ListItemText>
                                    </ListItemButton>


                                </ListItem>
                            ))
                        }
                    </List>
                </Box>

            </Box>
        </div>

    )
}