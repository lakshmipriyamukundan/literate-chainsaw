import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    background: {
      default: '#2c3e50',
    },
    text: {
      primary: "#26c6da",
      secondary: "#00000"
    } 
  },
  typography: {
    htmlFontSize: 10,
  },
});

theme = responsiveFontSizes(theme);

export default theme;