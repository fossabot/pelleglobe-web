/* eslint css-modules/no-unused-class: 0 */
import React, { Component } from 'react';
import { AppBar, IconButton, Drawer, MenuItem, Divider } from 'material-ui';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Link from '../Link';
import s from './Header.css';

class Header extends Component {
  state = {
    drawerOpen: false,
  };

  handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  render() {
    const { drawerOpen } = this.state;
    return (
      <div>
        <AppBar
          title="PelleGlobe"
          className={s.root}
          iconElementLeft={
            <IconButton onClick={this.handleToggle}>
              <NavigationMenu />
            </IconButton>
          }
          iconElementRight={
            <IconButton>
              <NavigationMoreVert />
            </IconButton>
          }
        />

        <Drawer open={drawerOpen}>
          <Link to="/">
            <MenuItem onClick={this.handleToggle}>Map</MenuItem>
          </Link>
          <Link to="/drinks">
            <MenuItem onClick={this.handleToggle}>Drinks</MenuItem>
          </Link>
          <Divider />
          <Link to="/chain-test">
            <MenuItem onClick={this.handleToggle}>Raw co-op results</MenuItem>
          </Link>
          <Link to="/map-test">
            <MenuItem onClick={this.handleToggle}>Map Chain Test</MenuItem>
          </Link>
          <Divider />
          <Link to="/about-sanpell">
            <MenuItem onClick={this.handleToggle}>
              About San Pellegrino
            </MenuItem>
          </Link>
          <Link to="/about-pelleglobe">
            <MenuItem onClick={this.handleToggle}>About Pelleglobe</MenuItem>
          </Link>
          <Link to="/newsletter">
            <MenuItem onClick={this.handleToggle}>
              Sign up to the newsletter
            </MenuItem>
          </Link>
          <p style={{ textAlign: 'center' }}>
            <small> version 0.1.0-beta</small>
          </p>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(s)(Header);
