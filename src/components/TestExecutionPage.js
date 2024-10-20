import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import "ace-builds/src-noconflict/mode-gherkin";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"


import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TestExecutionTable from './TestExecutionTable';
import { Toolbar } from '@mui/material';

import Button from '@mui/material/Button';


export default function TestExecutionPage() {
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: 'Istok Web',
                textTransform: 'none',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh' }}>
                <CssBaseline />
                <Toolbar/>
                <Toolbar/>
                <Box component="div" sx={{ display: 'flex', flexDirection: 'column', width: '100vw', alignItems: 'center' }}>
                    <Toolbar/>
                    <TestExecutionTable/>
                    <Button variant="contained" color="error" sx={{ mt: 2, alignSelf: 'center' }} size="large">Execute</Button>
                </Box>
            </Box>
        </ThemeProvider>
    )
}