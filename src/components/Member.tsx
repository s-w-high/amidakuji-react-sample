import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Member = (props: any) => {

    const handleMemberChange = (event: any) => {
        props.setNameList(
            props.nameList.map(
                (name: string, index: number) => {
                    return index === props.index ? event.target.value : name
                }
            )
        ); 
    };
    return (
        <>
            <Box sx={{ minWidth: 100 }} >
                <TextField 
                    id="standard-basic" 
                    label="name" 
                    variant="outlined" 
                    style={{height: 40}}
                    onChange={handleMemberChange}
                />
            </Box>
        </>
    )
}

export default Member;