import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Icon from '@mui/material/Icon';

import TextField from '@mui/material/TextField';

import { red } from '@mui/material/colors';

import Divider from '@mui/material/Divider';

export default function NavItem(props) {


  const [testCase, setTestCase] = React.useState("");

  const menuData = props.menuData;
  const hasSubMenus = menuData.subMenus != null;
  const selected = menuData.selected;
  const level = props.level;
  var iconName = menuData.icon;

  if (iconName == null) {
    iconName = "text_snippet";
  }

  var subMenuItems;

  if (hasSubMenus) {
    subMenuItems = menuData.subMenus.map((subMenu) => <NavItem key = {subMenu.id} menuData={subMenu} level={level + 1} onMenuClicked={props.onMenuClicked} onNewTestCaseEntered={props.onNewTestCaseEntered} />)
  }

  const pl = 2 + (level * 4);

  var newTestCase = null;
  if (hasSubMenus && menuData.subMenus[0].subMenus == null) {
    const editBoxPadding = 2 + ((level + 1) * 4)
    newTestCase = (
      <div><ListItemButton sx={{ pl: editBoxPadding }} >
        <TextField id="outlined-basic" placeholder="New Test Case" variant="outlined" size="small" value={testCase}
          onChange={event => {
            setTestCase(event.target.value);
          }} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onNewTestCaseEntered(menuData.id, e.target.value)
              setTestCase("")
            }
          }} />
      </ListItemButton>
        <Divider />
      </div>)
  }


  return (<div>
    <ListItemButton sx={{ pl: pl }} onClick={() => props.onMenuClicked(menuData.id)}>
      <ListItemIcon sx={{ minWidth: 36 }}>

        <Icon sx={{ fontSize: 20 }}>{iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={menuData.name} />
      {hasSubMenus && selected && <ExpandLess sx={{ color: red[500] }} />}
      {hasSubMenus && !selected && <ExpandMore sx={{ color: red[500] }} />}
    </ListItemButton>
    <Divider />

    {
      hasSubMenus
      &&
      <Collapse in={hasSubMenus && selected} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenuItems}
          {newTestCase}
        </List>
      </Collapse>

    }
  </div>);

}