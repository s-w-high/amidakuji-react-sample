import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const styles: {[str: string]: React.CSSProperties} = {
    footer: {}
  };

const Footer = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography align='right'>
                        presented by m2-sakai 
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Footer;