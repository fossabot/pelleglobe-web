import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { indigo900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';

// custom theming
const muiTheme = getMuiTheme(
  { palette: { primary1Color: indigo900 } },
  { userAgent: false },
);

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Header />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
