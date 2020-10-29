import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

import theme from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyles";
import snackbarStyles from "../../styles/snackbarStyles";

const ProviderPresenter: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        classes={{ ...snackbarStyles() }}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <GlobalStyle />
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default ProviderPresenter;
