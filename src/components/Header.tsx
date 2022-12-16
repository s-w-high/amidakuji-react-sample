import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/");
    };
    
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography onClick={handleClick}>
                        Palette Frontend
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;