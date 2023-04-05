import {Box} from "@mui/material";
import General from "./general";
import {useEffect, useState} from "react";
import Localization from "./localization";
import Payment from "./payment";
import Email from "./email";
import SocialMedia from "./socialMedia";
import SocialLinks from "./socialLinks";
import Seo from "./seo";
import Others from "./others";
import {Link} from "react-router-dom";

export default function Settings(){
    const settingList = [
        {title:'General Settings', value:'general'},
        {title:'Localization', value:'localization'},
        {title:'Payment Settings', value:'payment'},
        {title:'Email Settings', value:'email'},
        {title:'Social Media Login', value:'social'},
        {title:'Social Links', value:'social_link'},
        {title:'SEO Settings', value:'seo'},
        {title:'Others', value:'others'},
    ]
    const [activeTab,setActiveTab] = useState('general')
    const [tabName, setTabName] = useState('General Settings')

    useEffect(()=>{
        let find = settingList.find(item=>item.value === activeTab)
        return find !== undefined ? setTabName(find.title) : false
    }, [activeTab])
    return (
        <div className="content container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className="page-title">Settings</h3>
                        <ul className="breadcrumb">
                            <li className=" ">
                                <Link to={"/merchant/dashboard"}>Home</Link> /
                                <Link to={"/merchant/settings"}>Settings / </Link>
                            </li>

                            <li className="active"> {tabName}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="settings-menu-links">
                <ul className="nav nav-tabs menu-tabs">
                    {
                        settingList.map(item =>(
                            <li key={item.value} className={`nav-item ${activeTab === item.value ? 'active':''}`}>
                                <a onClick={()=>setActiveTab(item.value)} className="nav-link" style={{cursor:'pointer'}}>{item.title}</a>
                            </li>
                        ))
                    }


                </ul>
            </div>

            <Box>
                {
                    activeTab === 'general' &&  <General/>
                }

                {
                    activeTab === 'localization' && <Localization/>
                }
                {
                    activeTab === 'payment' && <Payment/>
                }
                {
                    activeTab === 'email' && <Email/>
                }
                {
                    activeTab === 'social' && <SocialMedia/>
                }
                {
                    activeTab === 'social_link' && <SocialLinks/>
                }
                {
                    activeTab === 'seo' && <Seo/>
                }
                {
                    activeTab === 'others' && <Others/>
                }


            </Box>


        </div>
    )
}