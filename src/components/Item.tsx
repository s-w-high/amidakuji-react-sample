import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Item = (props: any) => {

    const handleChange = (event: SelectChangeEvent) => {
        props.setItemValueList(
            props.itemValueList.map(
                (itemValue: string, index: number) => {
                    return index === props.index ? event.target.value : itemValue
                }
            )
        ); 
    };

    return (
        <>
            <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Team</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.itemValueList[props.index]}
                    label="Age"
                    style={{height: 50}}
                    onChange={handleChange}
                    >
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )
} 

export default Item;