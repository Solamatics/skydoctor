import Topbar from "../../../components/doctor/topbar";
import {Backdrop, Box, CircularProgress, Grid} from "@mui/material";
import Sidebar from "./sidebar";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetails, updateOnboardingPage} from "../../../store/doctorStore";
import Carousel from "react-elastic-carousel";
import Registration from "./registration";
import ProfilePicture from "./profilePicture";
import Details from "./details";
import Members from "./members";
import Dependant from "./dependant";
import OtherDetails from "./otherDetails";


export default function Onboarding() {

    const options = [
        {key: 1, title: 'Registration', content: 'Enter Details for Register '},
        {key: 2, title: 'Profile Picture', content: 'Upload your profile picture'},
        {key: 3, title: 'Personal Details', content: 'Enter your Personal Details'},
        {key: 4, title: 'Select Members', content: 'Enter Details for Register '},
        {key: 5, title: 'Dependant Details', content: 'Dependants Profile'},
        {key: 6, title: 'Other Details', content: 'More Information'},
    ]


    const handleNav = () => {
        setShowNav(!showNav)
    }

    const [showNav, setShowNav] = useState(false)

    const activeOption = useSelector(state => state.doctorStore.onboardingPage || 1)

    const redirect = useSelector(state => state.doctorStore.redirect)

    const [open, setOpen] = useState(false)

    const carousel = [
        {
            id: 1,
            title: 'Welcome to Skydoctor',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
        },
        {
            id: 2,
            title: 'Welcome to Skydoctor',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
        },
        {
            id: 3,
            title: 'Welcome to Skydoctor',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
        },
    ]

    const dispatch = useDispatch()

    const setActiveOption = (value) => {
        dispatch(updateOnboardingPage(value))
        dispatch(fetchUserDetails())

    }
    const userDetails = useSelector(state => state.doctorStore.userDetails)
    return (

        <Box>
            <Topbar toggleNav={handleNav}/>
            <Sidebar
                show={showNav}
                options={options}
                setActiveOption={setActiveOption}
                toggleNav={handleNav}
                activeOption={activeOption}
            />
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={3} lg={3} sx={{display: {sm: 'block', xs: 'none'}}}>
                    <Box className={'left-panel'}>


                        <Box sx={{textAlign: 'center'}}>
                            <img style={{height: '80px'}} className={'w3-image'}
                                 src={require('../../../assets/img/logo.png')} alt={'logo'}/>
                        </Box>


                        <Box className={'onboard-img '}>
                            <img src={require('../../../assets/img/onboarding-side.png')} alt={'Onboarding img'}
                                 className={'w3-image'}/>
                        </Box>

                        <Box>
                            <Carousel showArrows={false} itemsToShow={1} isRTL={false}>
                                {
                                    carousel.map(item => <Box sx={{textAlign: 'center'}} key={item.id}>
                                            <p className={'onboard-title'}>{item.title}</p>
                                            <p className={'onboard-content'}>{item.content}</p>
                                        </Box>
                                    )
                                }

                            </Carousel>

                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} sx={{display: {sm: 'block', xs: 'none'}}}>
                    <Box className={'on-board-wizard'}>

                        {
                            (options).map(item =>
                                <Box
                                    onClick={() => setActiveOption(item.key)}
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
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{
                    px: {xs: 2, sm: 3},
                    mt: {xs: 12, sm: 0},
                    ml:{xs:1, sm:0}
                }}>
                    {
                        activeOption === 1 && <Registration
                            updatePage={setActiveOption}
                            userDetails={userDetails}
                            userReg={redirect?.regType || ''}
                        />
                    }
                    {
                        activeOption === 2 && <ProfilePicture
                            updatePage={setActiveOption}
                            userDetails={userDetails}/>
                    }
                    {
                        activeOption === 3 && <Details
                            updatePage={setActiveOption}
                            userDetails={userDetails}/>
                    }
                    {
                        activeOption === 4 && <Members
                            updatePage={setActiveOption}
                            userDetails={userDetails}/>
                    }

                    {
                        activeOption === 5 && <Dependant
                            updatePage={setActiveOption}
                            userDetails={userDetails}/>
                    }

                    {
                        activeOption === 6 && <OtherDetails
                            updatePage={setActiveOption}
                            userDetails={userDetails}/>
                    }

                </Grid>
            </Grid>
        </Box>


    )
}