import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar.js";
import Sidebar from "./components/Sidebar.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* ENTIRE SCREEN CONTAINER */}
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
          
          {/* TOP NAV BAR - Fixed at the top */}
          <Topbar />
          
          {/* BOTTOM SECTION - Splits remaining space between Sidebar and Main Content */}
          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
            
            <Sidebar />
            
            <main style={{ flex: 1, overflowY: "auto", padding: "20px", backgroundColor: theme.palette.background.default }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* Add your other routes here */}
              </Routes>
            </main>

          </div>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;