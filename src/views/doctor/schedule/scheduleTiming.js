import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    MenuItem,
    Select
} from "@mui/material";
import DashboardSideBar from "../../../components/doctor/dashboardSideBar";
import {useEffect, useState} from "react";
import {Close, ControlPoint,  DriveFileRenameOutline} from "@mui/icons-material";

import EditDialog from "./editDialog";
import AddDialog from "./addDialog";


const timeSelection= [
    {title:'-', value:'-'},
    {title:'15 mins', value:'15_mins'},
    {title:'30 mins', value:'30_mins'},
    {title:'45 mins', value:'45_mins'},
    {title:'1 Hour', value:'1_hour'},

]
const dayOptions= [
    {title:'Sunday', value:'sunday', id:0},
    {title:'Monday', value:'monday', id:1},
    {title:'Tuesday', value:'tuesday', id:2},
    {title:'Wednesday', value:'wednesday', id:3},
    {title:'Thursday', value:'thursday', id:4},
    {title:'Friday', value:'friday', id:5},
    {title:'Saturday', value:'saturday', id:6},

]

export default function ScheduleTiming() {

    const timeSlotOptions = [
        {title: '-', value: ''},
        {title: '8:00 am', value: '8:00 am'},
        {title: '9:00 am', value: '9:00 am'},
        {title: '10:00 am', value: '10:00 am'},
        {title: '1:45pm', value: '1:45pm'},
        {title: '1:30pm', value: '1:30pm'},
        {title: '2:45pm', value: '2:45pm'},
        {title: '5:30pm', value: '5:30pm'},
        {title: '6:45pm', value: '6:45pm'},
    ]
    const [time, setTime] = useState('')
    const [day, setDay] = useState('sunday')
    const [daySlots, setDaySlots] = useState([
        {
            title: 'Sunday',
            value: 'sunday',
            timeSlots: [
                {start: '10:30 am', end: '10:45am'},
                {start: '12:30 pm', end: '1:45pm'},
            ]
        },
        {
            title: 'Wednesday',
            value: 'wednesday',
            timeSlots: [
                {start: '10:30 am', end: '10:45am'},
                {start: '1:30 pm', end: '1:45pm'},
                {start: '1:30 pm', end: '2:45pm'},
                {start: '5:30 pm', end: '6:45pm'},
            ]
        },
    ])
    const [activeSlot, setActiveSlot] = useState({})
    const [addDialog, setAddDialog] = useState(false)
    const [editDialog, setEditDialog] = useState(false)
    const [timeSlot, setTimeSlot] = useState([
        {start: '', end: ''},
    ])


    const [activeTimeSlot, setActiveTimeSlot] = useState([])

    const removeSlot = (slot) => {

        let find = daySlots.find(item => item.value === activeSlot.value)
        if (find === undefined) return
        let otherSlots = daySlots.filter(item => item.value !== activeSlot.value)
        let index = find.timeSlots.indexOf(slot)
        find.timeSlots.splice(index, 1)
        let array = [
            ...otherSlots,
            {...find}
        ]
        setDaySlots(array)

    }


    useEffect(() => {
        let find = daySlots.find(item => item.value === day)
        if (find !== undefined) {
            setActiveTimeSlot([...find.timeSlots])
        }
        return setActiveSlot(find || {})
    }, [day])


    return (
        <Box component={'main'} sx={{mt: 2, pa: 1}}>
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

                        <Box sx={{
                            border: '1px solid #f0f0f0',
                            marginBottom: '1.875rem',
                            borderRadius: '0.25rem',
                            padding: '1.5rem'
                        }}>
                            <h4 style={{
                                fontSize: '1.125rem',
                                marginBottom: '15px',
                                color: '#272b41',
                                fontWeight: '500'
                            }}>Schedule Timings</h4>

                            <label>Timing Slot Duration</label>
                            <br/>

                            <FormControl sx={{mt: 1, width: '160px'}} size="small">
                                <Select
                                    labelId="demo-select-small1"
                                    id="demo-select-small1"
                                    value={time}

                                    sx={{fontSize: '13px'}}
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                    {
                                        timeSelection.map(item => (
                                            <MenuItem key={item.value} value={item.value}>
                                                {item.title}
                                            </MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                            <br/>
                            <br/>

                            <Box className={'schedule-widget'}>

                                <Box className={'schedule-header'} sx={{justifyContent: {xs: 'start', md: 'center'}}}>
                                    {
                                        dayOptions.map(item => (
                                            <div key={item.id} style={{margin: '5px 15px 5px 0'}}>
                                                <Button
                                                    onClick={() => setDay(item.value)}
                                                    variant={'outlined'}
                                                    sx={{
                                                        backgroundColor: item.value === day ? '#ff4877' : 'white',
                                                        padding: '6px 25px',
                                                        borderRadius: '4px',
                                                        border: item.value === day ? '1px solid #ff4877' : '1px solid #dcddea',
                                                        color: item.value === day ? '#fff' : '#888',
                                                        '&:hover': {
                                                            backgroundColor: '#ff4877',
                                                            color: '#fff',
                                                        }
                                                    }}>
                                                    {item.title}
                                                </Button>
                                            </div>
                                        ))
                                    }

                                </Box>
                                <Box className={''} sx={{padding: '20px'}}>

                                    <Box className={'flex-row'} sx={{justifyContent: 'space-between'}}>
                                        <div>
                                            <h6
                                                style={{
                                                    fontSize: '1.125rem',
                                                    marginBottom: '15px',
                                                    color: '#272b41',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                Time Slots
                                            </h6>
                                        </div>
                                        <div>
                                            {
                                                Object.keys(activeSlot).length > 0 ?
                                                    <Button onClick={() => setEditDialog(true)} sx={{color: '#20c0f3'}}
                                                            startIcon={<DriveFileRenameOutline/>}
                                                            variant={'text'}>
                                                        <span>Edit</span>
                                                    </Button>

                                                    : <Button onClick={() => setAddDialog(true)} sx={{color: '#20c0f3'}}
                                                              startIcon={<ControlPoint/>}
                                                              variant={'text'}>
                                                        <span>Add Slot</span>
                                                    </Button>
                                            }


                                        </div>
                                    </Box>
                                    <Box>
                                        {
                                            Object.keys(activeSlot).length <= 0 ?
                                                <h6 style={{color: '#757575!important'}}>Not Available</h6>
                                                :
                                                <Box className={'flex-row'}
                                                     sx={{}}>

                                                    {
                                                        activeSlot.timeSlots.map(item => (

                                                            <div key={item.start}>
                                                                <Box className={'flex-row doc-slot-list'}>
                                                                    <div>
                                                                        {item.start} - {item.end}
                                                                    </div>
                                                                    <div style={{marginTop: '-3px', marginLeft: '2px'}}>
                                                                        <IconButton
                                                                            onClick={() => removeSlot(item)}
                                                                            size={'small'}
                                                                            sx={{color: '#e4878'}}>
                                                                            <Close sx={{
                                                                                height: '13px',
                                                                                width: '13px',
                                                                                color: '#e4878'

                                                                            }}/>
                                                                        </IconButton>
                                                                    </div>
                                                                </Box>
                                                            </div>

                                                        ))
                                                    }

                                                </Box>
                                        }
                                    </Box>


                                </Box>

                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Box>

            <AddDialog addDialog={addDialog}
                       setAddDialog={setAddDialog}
                       timeSlotOptions={timeSlotOptions}
                       setTimeSlot={setTimeSlot}
                       timeSlot={timeSlot}
                       day={day}
                       setDaySlots={setDaySlots}
            />

            {
                Object.keys(activeSlot).length > 0 &&
                <EditDialog
                    day={day}
                    daySlots={daySlots}
                    editDialog={editDialog}
                    activeTimeSlot={activeTimeSlot}
                    setEditDialog={setEditDialog}
                    setDaySlots={setDaySlots}
                    setActiveTimeSlot={setActiveTimeSlot}
                    timeSlotOptions={timeSlotOptions}/>
            }

        </Box>
    )
}