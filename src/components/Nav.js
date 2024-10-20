import React from 'react';
import MenuData from '../menus';
import NavItem from './NavItem';


import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

const drawerWidth = 300;

export default function Nav(props) {

    const [menus, setMenus] = React.useState(MenuData);


    function onMenuClicked(id) {
        setMenus(menus => updateMenuSelection(menus, id))
    }

    function onNewTestCaseEntered(parentMenuId, testCaseName) {
         setMenus(menus => addNewMenu(menus, parentMenuId, testCaseName))
    }

    function addNewMenu(menus, parentMenuId, testCaseName) {
        if (menus != null) {
            return menus.map((menu) => {
                if (menu.id == parentMenuId) {
                    var subMenus = menu.subMenus
                    const lastMenuId = subMenus[subMenus.length - 1]
                    subMenus.push(createNewMenu(testCaseName, lastMenuId + 1))
                    return { ...menu, subMenus: subMenus}
                }
                var subMenus = addNewMenu(menu.subMenus, parentMenuId, testCaseName)
                return { ...menu, subMenus: subMenus }

            })
        }
        return menus
    }

    function createNewMenu(menuName, menuId) {
        return {
            id: menuId,
            name: menuName,
            selected: false
        }
    }

    function updateMenuSelection(menus, id) {
        if (menus != null) {
            return menus.map((menu) => {
                if (menu.id == id) {
                    if(menu.subMenus == null) {
                        props.onFeatureFileClicked(id);
                    }
                    return { ...menu, selected: !menu.selected }
                }
                var subMenus = updateMenuSelection(menu.subMenus, id)
                return { ...menu, subMenus: subMenus }

            })
        }
        return menus
    }
    const navItems = menus.map(
        (menu) => <NavItem key = {menu.id} menuData={menu} onMenuClicked={onMenuClicked} onNewTestCaseEntered = {onNewTestCaseEntered} level={0} />)
    return (
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Toolbar />
        <List
            sx={{ width: '100%', maxWidth: 360}}
            component="nav"
        >
            {navItems}
        </List>
        </Drawer>
    );
}