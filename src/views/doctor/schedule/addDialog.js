import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    IconButton, MenuItem,
    Select
} from "@mui/material";
import {Close, ControlPoint, Delete} from "@mui/icons-material";
import {capitalize} from "../../../hooks/capitalize";


export default function AddDialog({addDialog,setAddDialog,timeSlot, setTimeSlot, timeSlotOptions, day, setDaySlots}){

    const changeHandler = index => event => {
        const {name, value} = event.target;
        setTimeSlot(values => values.map((el, i) => index === i
            ? {
                ...el,
                [name]: value,
            }
            : el,
        ));
    };

    const deleteSlot = index => {
        let array = timeSlot
        array.splice(index, 1)
        setTimeSlot([...array])
    }

    const addNewInput = () => {
        setTimeSlot(prevState => [...prevState, {start: '', end: ''}])
    }

    const submitNewSlots = () => {
        let slot = {
            title: capitalize(day),
            value: day,
            timeSlots: [
                ...timeSlot
            ]
        }
        setDaySlots(prevState => [...prevState, slot])
        setTimeSlot([{start: '', end: ''}])
        setAddDialog(false)

    }


    return (
        <Dialog
            open={addDialog}
            onClose={() => setAddDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={'sm'}
            fullWidth
        >
            <DialogTitle component={'div'} className={'flex-row'}
                         sx={{
                             textAlign: 'center',
                             borderBottom: '1px solid rgb(222, 226, 230)',
                             justifyContent: 'space-between'
                         }}
                         id="alert-dialog-title">

                <h6 style={{color: 'rgb(39, 43, 65)', fontWeight: '500',}}>Add Time Slots</h6>
                <div>
                    <IconButton onClick={() => setAddDialog(false)}>
                        <Close/>
                    </IconButton>
                </div>


            </DialogTitle>
            <DialogContent>
                <DialogContentText component={'div'} id="alert-dialog-description" sx={{padding: '1.25rem'}}>
                    <form>

                        {
                            timeSlot.map((item, index) => (
                                <Grid key={item.start} container sx={{mb: 1}} spacing={3}>

                                    <Grid item xs={5} sm={5} md={5} lg={5}>
                                        <label style={{color: '#272b41', fontSize: '0.9375rem'}}>Start Time</label>
                                        <FormControl sx={{mt: 1, width: '100%'}} size="small">
                                            <Select
                                                value={item.start}
                                                sx={{fontSize: '13px'}}
                                                onChange={changeHandler(index)}
                                                name={'start'}
                                            >
                                                {
                                                    timeSlotOptions.map(item => (
                                                        <MenuItem key={item.value} value={item.value}>
                                                            {item.title}
                                                        </MenuItem>
                                                    ))
                                                }

                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={5} sm={5} md={5} lg={5}>
                                        <label style={{color: '#272b41', fontSize: '0.9375rem'}}>End Time</label>
                                        <FormControl sx={{mt: 1, width: '100%'}} size="small">
                                            <Select
                                                value={item.end}
                                                sx={{fontSize: '13px'}}
                                                onChange={changeHandler(index)}
                                                name={'end'}
                                            >
                                                {
                                                    timeSlotOptions.map(item => (
                                                        <MenuItem key={item.value} value={item.value}>
                                                            {item.title}
                                                        </MenuItem>
                                                    ))
                                                }

                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    {
                                        index !== 0 &&
                                        <Grid item xs={2} sm={1} md={1} lg={1} sx={{alignItems: 'center'}}>
                                            <br/>
                                            <IconButton onClick={() => deleteSlot(index)} size={'small'}
                                                        variant={'contained'} sx={{
                                                backgroundColor: '#ff0100',
                                                borderRadius: '5px',
                                                color: 'white',
                                                mt: 1,
                                                '&:hover': {
                                                    backgroundColor: '#dc3545'
                                                }
                                            }}>
                                                <Delete/>
                                            </IconButton>
                                        </Grid>
                                    }


                                </Grid>
                            ))
                        }
                        <br/>

                        <Button onClick={() => addNewInput()} sx={{color: '#20c0f3'}} startIcon={<ControlPoint/>}
                                variant={'text'}>
                            <span>Add Slot</span>

                        </Button>

                        <br/>
                        <div className={'w3-center'}>

                            <Button
                                onClick={() => submitNewSlots()}
                                className={'slot-buttons'}

                            >
                                Save Changes
                            </Button>

                        </div>

                    </form>


                </DialogContentText>
            </DialogContent>

        </Dialog>
    )
}