import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// main container
import MainContainer from "containers/MainContainer/";

// theme config
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    );
  }
}

export default App;
