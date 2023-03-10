import React from 'react';
import './navbarItem.css';
import { Button } from '@mui/material';

function NavbarItem(props) {
  return (
    <Button style={{"color" : "white"}} className="button" href={props.onClick}>
      {props.label}
    </Button>
  );
}

export default NavbarItem;