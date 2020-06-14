import React, {useState} from "react";
import InputBar from "./InputBar";
import ResultsTable from "./Results";
import { Box } from "@material-ui/core";

function Content() {
    const [results, setResults] = useState([]);

    return(
        <Box style={{width:"80%", margin:"auto"}}>
            <InputBar setResults={setResults} />
            <ResultsTable results={results} />
        </Box>
    )
}

export default Content;