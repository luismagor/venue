// @flow
import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

type Props = {
  open: boolean,
  onClose: () => void
}

function SideDrawer({ open, onClose }: Props) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List component="nav">
        <ListItem button onClick={() => console.log('Featured')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log('Venue INFO')}>
          Venue INFO
        </ListItem>
        <ListItem button onClick={() => console.log('Highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log('Pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
