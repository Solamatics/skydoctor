
import Chart from "react-apexcharts";
import {
    Avatar,

    Box, Button,
    Card, CardContent, Icon, IconButton,

} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import Carousel from "react-elastic-carousel";
import {useRef} from "react";


export default function Consultation() {


    let carousel = useRef(null)



    return (
        <Card className={'dash-cards'}>
            <CardContent sx={{padding:0}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.2rem',
                    flexDirection: 'row',
                    borderBottom: '1px solid #f0f0f0'
                }}>


                    <h6 style={{fontSize: '16px', fontWeight: '500'}}>Recent Consultation</h6>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                        <IconButton size={'small'} onClick={() => carousel.slidePrev()}>
                            <ChevronLeft/>

                        </IconButton>
                        <IconButton onClick={() => carousel.slideNext()} size={'small'}>
                            <ChevronRight/>

                        </IconButton>
                    </Box>



                </Box>

                <br/>
                <Box sx={{padding:'3px 15px'}} >
                    <Carousel  ref={ref => (carousel = ref)} pagination={false} showArrows={false} itemsToShow={1} isRTL={false}>
                        <div>
                            <Box sx={{marginBottom: '20px', display:'flex', flexDirection:'row'}}>

                                <Avatar
                                    src={require('../../../assets/img/patient2.jpg')}
                                    sx={{width:56, height:56, borderRadius:'10px'}}>
                                </Avatar>
                                <Box className={'flex-column'} sx={{ml:1}}>
                                    <div style={{
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        color: '#000000',
                                    }}>
                                        Henry
                                    </div>
                                    <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                        Female - 40years
                                    </div>

                                </Box>


                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Problem
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Fever, Soar throat, Allergy
                                </div>
                            </Box>
                            <Box className={'flex-column'} sx={{borderBottom: '1px solid #F4F4F4', my:1, pt:1,pb:2, borderTop:'1px solid #F4F4F4',}}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Last Checked
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Dr Kimberly on Fret Hospital in 29/05/2022
                                    <br/>
                                    <span style={{color:'#ff0100'}}>Prescription : #566646</span>
                                </div>
                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Observation
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Three Sickle cells are sustained at normal hemoglobin Level
                                </div>
                            </Box>
                        </div>
                        <div>
                            <Box sx={{marginBottom: '20px', display:'flex', flexDirection:'row'}}>

                                <Avatar
                                    src={require('../../../assets/img/patient2.jpg')}
                                    sx={{width:56, height:56, borderRadius:'10px'}}>
                                </Avatar>
                                <Box className={'flex-column'} sx={{ml:1}}>
                                    <div style={{
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        color: '#000000',
                                    }}>
                                        Henry
                                    </div>
                                    <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                        Female - 40years
                                    </div>

                                </Box>


                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Problem
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Fever, Soar throat, Allergy
                                </div>
                            </Box>
                            <Box className={'flex-column'} sx={{borderBottom: '1px solid #F4F4F4', my:1, pt:1,pb:2, borderTop:'1px solid #F4F4F4',}}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Last Checked
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Dr Kimberly on Fret Hospital in 29/05/2022
                                    <br/>
                                    <span style={{color:'#ff0100'}}>Prescription : #566646</span>
                                </div>
                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Observation
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Three Sickle cells are sustained at normal hemoglobin Level
                                </div>
                            </Box>
                        </div>
                        <div>
                            <Box sx={{marginBottom: '20px', display:'flex', flexDirection:'row'}}>

                                <Avatar
                                    src={require('../../../assets/img/patient2.jpg')}
                                    sx={{width:56, height:56, borderRadius:'10px'}}>
                                </Avatar>
                                <Box className={'flex-column'} sx={{ml:1}}>
                                    <div style={{
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        color: '#000000',
                                    }}>
                                        Henry
                                    </div>
                                    <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                        Female - 40years
                                    </div>

                                </Box>


                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Problem
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Fever, Soar throat, Allergy
                                </div>
                            </Box>
                            <Box className={'flex-column'} sx={{borderBottom: '1px solid #F4F4F4', my:1, pt:1,pb:2, borderTop:'1px solid #F4F4F4',}}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Last Checked
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Dr Kimberly on Fret Hospital in 29/05/2022
                                    <br/>
                                    <span style={{color:'#ff0100'}}>Prescription : #566646</span>
                                </div>
                            </Box>
                            <Box className={'flex-column'}>
                                <h6 style={{
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    color: '#1B2559',
                                }}>
                                    Observation
                                </h6>
                                <div style={{fontSize:'14px',color:'rgb(33,37,41)'}}>
                                    Three Sickle cells are sustained at normal hemoglobin Level
                                </div>
                            </Box>
                        </div>

                    </Carousel>




                </Box>
            </CardContent>
        </Card>

    )


}