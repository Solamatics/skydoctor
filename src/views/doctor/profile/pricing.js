import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";


export default function Pricing({price, options, setPrice}) {
    return (
        <Box sx={{
            border: '1px solid #f0f0f0',
            marginBottom: '1.875rem',
            borderRadius: '0.25rem',
            padding: '1.5rem'
        }}>
            <h4 className={'profile-card-title'}>Pricing</h4>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={options[0]?.value || ''}
                    name="radio-buttons-group"
                    onChange={(e) => setPrice(e.target.value)}
                >
                    {
                        options.map(item => (
                            <FormControlLabel
                                key={item.value} sx={{mb:-0.5}} value={item.value} control={<Radio/>}
                                label={item.title}/>
                        ))
                    }

                </RadioGroup>
            </FormControl>
            <br/>
            <br/>
            {
                price === 'custom'
                &&
                <TextField
                    sx={{
                        maxWidth: '500px'
                    }}
                    size={'small'}
                    type={'number'}
                    variant={'outlined'}
                    placeholder={'20'}
                    helperText={'Custom price you can add'}
                />
            }

        </Box>

    )
}