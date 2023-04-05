import Record from "./record";
import Prescription from "./prescription";
import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";
import AddRecord from "./addRecord";


export default function MedicalRecords(){
    const [value, setValue] = useState('1');
    const [dialog, setDialog] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="card">
                <div className="card-body pt-0">



                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList sx={{py:0}} variant={'fullWidth'} onChange={handleChange} aria-label="lab API tabs example">
                                <Tab sx={{fontWeight:'600', py:0}} label="Medical Records" value="1" />
                                <Tab sx={{fontWeight:'600'}} label="Prescription" value="2" />

                            </TabList>
                        </Box>
                        <TabPanel value="1">  <Record setDialog={setDialog}/></TabPanel>
                        <TabPanel value="2"> <Prescription/></TabPanel>
                    </TabContext>

                </div>
            </div>
            <AddRecord setDialog={setDialog} dialog={dialog}/>
        </>

    )
}