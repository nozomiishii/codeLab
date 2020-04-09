const {
  AppBar,
  Adb,
  createMuiTheme,
  Toolbar,
  Typography,
  ThemeProvider,
} = MaterialUI;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4BD6E1",
    },
    secondary: {
      main: "#FFD84C",
    },
  },
});

const App = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Adb />
      </Toolbar>
    </AppBar>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
