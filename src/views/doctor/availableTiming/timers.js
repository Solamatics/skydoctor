import {Box, Button} from "@mui/material";


export default function Timers({timeSelection,time, setTimeSelection}){

    return (
        <Box>
            <Box className={'flex-row'} sx={{flexWrap:'wrap'}}>

                {
                    time.map(item=>(
                        <div key={item} style={{ margin:'0 5px 10px 0'}}>
                            <Button className={'available-times'}>
                                {item}
                            </Button>
                        </div>
                    ))
                }

            </Box>
            <br/>
            <Box sx={{textAlign:'center'}}>
                <Button
                    sx={{
                        backgroundColor: '#09e5ab',
                        color: 'white',
                        border: '1px solid #09e5ab',
                        padding: '0.4rem 0.75rem',
                        '&:hover':{
                            backgroundColor:'cyan',
                            border:'1px solid cyan'
                        }
                    }}
                >
                    Save
                </Button>
            </Box>
        </Box>

    )
}