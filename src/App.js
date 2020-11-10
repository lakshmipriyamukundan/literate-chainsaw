import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from  "react-router-dom";
import theme from './theme';
import AppHeader from './components/AppBar';
import AppDrawer from './components/Drawer';
import About from './components/About';

import {
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Fragment className={classes.root}>
          <AppHeader />
          {/* <AppDrawer />       
          <Switch>
          <Route path="/about" component={About}/>
          </Switch> */}
        </Fragment>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
