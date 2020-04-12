// @flow
import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: isTransparent ? 'transparent' : '#2f2f2f',
          boxShadow: 'none',
          padding: '10px 0',
          transition: '.5s',
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer open={isOpen} onClose={() => setIsOpen(false)} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
