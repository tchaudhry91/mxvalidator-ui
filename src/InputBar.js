import React, { useState } from "react";

import { TextField, Button, Box } from "@material-ui/core";
import ValidateAPI from './Utils';

function InputBar(props) {
    const [domains, setDomains] = useState("");
    var boxStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '50px',
        paddingBottom: '50px',
    };

    async function handleValidate(event) {
        event.preventDefault();
        let res = await ValidateAPI(domains);
        props.setResults(res)
      }
    
    function handleInput(event) {
        setDomains(event.target.value);
    }

    return (
        <Box style={boxStyle}>
            <TextField id="domain_input" onChange={handleInput} label="Comma Separated Domains" variant="outlined" style={{width:"70%"}}></TextField>
            <Button variant="contained" onClick={handleValidate}>Validate</Button>
        </Box>
    )
}

export default InputBar;