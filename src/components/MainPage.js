import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';


import HomePage from './HomePage';
import TestPlanningPage from './TestPlanningPage';


import "ace-builds/src-noconflict/mode-gherkin";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"


import Logo from '../images/ubs_logo.png'


import { grey } from '@mui/material/colors';


import { Box } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TestExecutionPage from './TestExecutionPage';

const navItems = ["Test Planning", "Test Automation", "Test Execution", "Reporting"];



export default function MainPage() {
    const [selectedNavItem, setSelectedNavItem] = React.useState("Test Automation")

    const isPageDisplayed = (navItem) => {
        if(selectedNavItem != navItem) {
            return 'none';
         } 
         return 'block';
    }

    const pages = [
        <Box sx={{display: isPageDisplayed("Test Planning")}}><TestPlanningPage/></Box>,
        <Box sx={{display: isPageDisplayed("Test Automation")}}><HomePage/></Box>,
        <Box sx={{display: isPageDisplayed("Test Execution")}}><TestExecutionPage/></Box>,
        <Box sx={{display: isPageDisplayed("Reporting")}}><div/></Box>
    ]

const getNavItemBackGround = (navItem) => {
    if(selectedNavItem == navItem) {
       return '#EEEEEE';
    } 
    return '#FFF';
}

const getNaveItemFontStyle = (navItem) => {
    if(selectedNavItem == navItem) {
        return 'bold';
     } 
     return 'normal';
}

const getNaveItemFontColor = (navItem) => {
    if(selectedNavItem == navItem) {
        return 'red';
     } 
     return '#000';
}

function onNavItemClicked(navItem) {
    setSelectedNavItem(navItem)
}

const topLevelMenus = navItems.map((navItem) => 
<Box key={navItem} component="div" sx={{cursor: "pointer", height: "64px", background: getNavItemBackGround(navItem), display: 'flex', flexGrow: 1, alignItems: "center", justifyContent: "center"}} 
onClick={() => onNavItemClicked(navItem)}>
    <Box key={navItem} sx={{ fontWeight: getNaveItemFontStyle(navItem), color: getNaveItemFontColor(navItem) }}>
    {navItem}
    </Box>
</Box>)
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
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={
                    {
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        bgcolor: grey[50],
                        color: grey[900]
                    }}>
                    <Toolbar>
                        <img className="nav-header-img" src={Logo} />
                        <Box component="div" sx={{ display: 'flex', flexGrow: 1, fontSize: "22px", ml: 2}} >
                            EAQEP (<Box sx={{color: "red"}}>E</Box>nterprise <Box sx={{ml: 1, color: "red"}}>A</Box>utonomous <Box sx={{ml: 1, color: "red"}}>Q</Box>uality <Box sx={{ml: 1, color: "red"}}>E</Box>ngineering <Box sx={{ml: 1, color: "red"}}>P</Box>latform)
                        </Box>
                    </Toolbar>
                    <Divider />
                    <Box component = 'div' sx={{height: "64px", display: 'flex', padding: 0, alignItems: "center"}}>
                        
                            {topLevelMenus}
                        
                    </Box>
                </AppBar>
                <Box component="div" sx={{ display: 'flex', flexDirection: 'row', width: '100vw', alignItems: 'center' }}>
                    {pages}
                </Box>
            </Box>
        </ThemeProvider>
    )
}