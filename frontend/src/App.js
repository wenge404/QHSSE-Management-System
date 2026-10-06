import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import topbar from "./components/topbar.js";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app"></div>
          <main className="content">
            <topbar />
          </main>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

