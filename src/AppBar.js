import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {AppBar, Toolbar, Typography} from "@material-ui/core";

function Bar() {
return (
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{margin:'auto'}}>
        Tux-Sudo MXValidator
    </Typography>
    <a href="https://github.com/tchaudhry91/mxvalidator"><GitHubIcon style={{transform:"scale(1.5)", color:"white"}}/></a>
  </Toolbar>
</AppBar>
);
}

export default Bar