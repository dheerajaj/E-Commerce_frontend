import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Sidebar() {
  const [state, setState] = React.useState({
   
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
    <h2>Hello</h2></List>
    <Divider></Divider>
      <List>
      <h5>Trending</h5>
        {['Best Seller', 'New Release'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
<Divider />
      <List>
      <h5>Shop by category</h5>
      {['Mens Fashion', 'Womens Fashion', 'Electronics/Home Appliances/TV','Mobile Phones/Laptops', 'Beauty/Health/Grocery'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
      ))}
      </List>
      <Divider />
      <List>
      <h5>Help & Setting</h5>
        {['Your Account', 'Customer Service'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
   
      {['Left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuOpenIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuOpenIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}