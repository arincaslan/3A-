import React from 'react';
import './navbarItem.css';

function NavbarItem(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default NavbarItem;