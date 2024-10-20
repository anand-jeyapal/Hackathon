import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Nav from './Nav';
import Button from '@mui/material/Button';


import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-gherkin";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/ext-language_tools"


import data from '../data.js';
import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeatureHeader from './FeatureHeader';

export default function HomePage() {
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'Istok Web',
                textTransform: 'none',
            },
        },
    });

    const [featureFileData, setFeatureFileData] = React.useState({
        initialValue: "",
        steps: [],
        usageFrequency: 1,
        visibility: 1,
        complexity: 1,
        geography: 1,
        turnOver: 1
    });


    const autoCompleter = {
        getCompletions: (editor, _session, _pos, prefix, callback) => {
           
            var completions = autoCompleterr.current(prefix)
            callback(
                null,
                completions
            );
        },
    };


    var autoCompleteFunction = (text) => {
        const matches = featureFileData.steps.filter(step => step.startsWith(text))
        const completions = matches.map(match => ({
            caption: match,
            value: match,
            score: Math.floor(Math.random() * Math.floor(100)),
            meta: "" + Math.floor(Math.random() * Math.floor(100)) + "%  Passed"
        }))
        return completions
    }

    const autoCompleterr = React.useRef(autoCompleteFunction);

    React.useEffect(() => {
        autoCompleterr.current = autoCompleteFunction;
    }, [featureFileData])


    function onFeatureFileClicked(id) {
        const featureFile = data[id]
        if (featureFile != null) {
            setFeatureFileData({
                initialValue: featureFile.initialValue,
                steps: featureFile.steps,
                usageFrequency: featureFile.usageFrequency,
                visibility: featureFile.visibility,
                complexity: featureFile.complexity,
                turnOver: featureFile.turnOver,
                geography: featureFile.geography
            })
        } else {
            setFeatureFileData({
                initialValue: "",
                steps: [],
                usageFrequency: 1,
                visibility: 1,
                complexity: 1,
                geography: 1,
                turnOver: 1
            })
        }
        console.log(featureFileData)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <CssBaseline />
                <Box component="div" sx={{ display: 'flex', flexDirection: 'row', width: '100vw', alignItems: 'center' }}>
                    <Nav onFeatureFileClicked={onFeatureFileClicked} />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Toolbar />
                        <div className="feature-editor">
                            <FeatureHeader usageFrequency={featureFileData.usageFrequency} visibility={featureFileData.visibility} complexity={featureFileData.complexity} geography={featureFileData.geography} turnOver={featureFileData.turnOver} />

                            <AceEditor
                                value={featureFileData.initialValue}
                                width='100%'
                                height="750px"
                                mode="gherkin"
                                theme="chrome"
                                name="gherkin-editor"
                                editorProps={{ $blockScrolling: true }}
                                setOptions={{
                                    enableLiveAutocompletion: [autoCompleter],
                                    enableSnippets: true,
                                    enableBasicAutocompletion: [autoCompleter],
                                    fontSize: "24px"

                                }}
                            />


                            <Button variant="contained" color="error" sx={{ mt: 2, alignSelf: 'center' }} size="large">Upload File</Button>
                        </div>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}