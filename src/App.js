import React from 'react';
import Bar from './AppBar';
import Content from './ContentContainer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Bar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
