import {Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {useState} from "react";
import Details from "./details";
import Aboutme from "./aboutme";
import Clinic from "./clinic";
import Contact from "./contact";
import Pricing from "./pricing";
import Services from "./services";
import Education from "./education";
import Experience from "./experience";
import Awards from "./awards";
import Members from "./members";
import Registration from "./registration";


export default  function Profile(){
    const [profileFields, setProfileFields] = useState([
        {title:'Username', value:'', type:'text', disabled:true},
        {title:'Email', value:'', type:'text', disabled:true},
        {title:'First Name', value:'', type:'text', disabled:false},
        {title:'Last Name', value:'', type:'text', disabled:false},
        {title:'Phone Number', value:'', type:'text', disabled:false},
        {title:'Gender', value:'', type:'autocomplete', disabled:false},
        {title:'Date of Birth', value:'', type:'date', disabled:false},
    ])
    const [contactFields, setContactFields] = useState([
        {title:'Address Line 1', value:'', type:'text',},
        {title:'Address Line 2', value:'', type:'text',},
        {title:'City', value:'', type:'text', },
        {title:'State / Province', value:'', type:'text', },
        {title:'Country', value:'', type:'text', },
        {title:'Postal Code', value:'', type:'number', },

    ])

    const [gender, setGender] =useState('')
    const genderOption = [
        {title:'Male', value:'male'},
        {title:'Female', value:'female'},
    ]

    const [about, setAbout] =useState('')

    const pricingOptions = [
        {title:'Free', value:'free'},
        {title:'Custom Price (per hour)', value:'custom'},
    ]
    const [price, setPrice] = useState('')

    const [edulist, setEdulist] = useState([
        {  degree:'',  college:'',  year:'' },
    ])

    const [experience, setExperience] = useState([
        {  hospital:'',  from:'',  to:'',designation:'' },
    ])

    const [awards, setAwards] = useState([
        {  award:'',  year:''},
    ])

    const [membership, setMembership] = useState([
        {  member:''},
    ])

    const [reg, setReg] = useState([
        {  registration:'', year:''},
    ])


    const addNewEducation = () => {
        setEdulist(prevState => [...prevState, {  degree:'',  college:'',  year:'' }])
    }

    const deleteEducation = index => {
        let array = edulist
        array.splice(index, 1)
        setEdulist([...array])
    }



    const deleteAwards = index => {
        let array = awards
        array.splice(index, 1)
        setAwards([...array])
    }

    const addNewAward = () => {
        setAwards(prevState => [...prevState,  {  award:'',  year:''}])
    }



    const addNewExperience = () => {
        setExperience(prevState => [...prevState,   {  hospital:'',  from:'',  to:'',designation:'' }])
    }

    const deleteExperience = index => {
        let array = experience
        array.splice(index, 1)
        setExperience([...array])
    }


    const addNewMember = () => {
        setMembership(prevState => [...prevState,  {  member:''}])
    }

    const deleteMember = index => {
        let array = membership
        array.splice(index, 1)
        setMembership([...array])
    }


    const addNewReg = () => {
        setReg(prevState => [...prevState,  {  registration:'', year:''}])
    }

    const deleteReg = index => {
        let array = reg
        array.splice(index, 1)
        setReg([...array])
    }


    return (
        <Box component={'main'} sx={{mt: 2, mb:3, pa: 1}}>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={3} spacing={3} sx={{pa: 5}}>

                    <Grid item xs={12} sm={3} lg={3} md={3}
                          sx={{
                              pa: 5,
                              display: {xs: 'none', sm: 'block'},

                          }}
                    >
                        <DashboardSideBar/>
                    </Grid>
                    <Grid item xs={12} sm={9} lg={9} md={9} sx={{px: 2}}>

                        <Details genderOption={genderOption} gender={gender} profileFields={profileFields} setGender={setGender} />
                        <Aboutme about={about} setAbout={setAbout}/>
                        <Clinic  />
                        <Contact contactFields={contactFields}/>
                        <Pricing options={pricingOptions} price={price} setPrice={setPrice}/>
                        <Services />
                        <Education edulist={edulist} setEdulist={setEdulist} addNewEducation={addNewEducation} delEdu={deleteEducation}/>

                        <Experience experience={experience} setExperience={setExperience} addNewExperience={addNewExperience} deleteExperience={deleteExperience} />

                        <Awards awards={awards} setAwards={setAwards} addAward={addNewAward} delAward={deleteAwards} />

                        <Members members={membership} setMember={setMembership} addMember={addNewMember} delMember={deleteMember} />

                        <Registration reg={reg} setReg={setReg} delReg={deleteReg} addReg={addNewReg} />

                        <br/>
                        <div className={''}>

                            <Button
                                type={'submit'}

                                className={'slot-buttons'}

                            >
                                Save Changes
                            </Button>

                        </div>



                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}