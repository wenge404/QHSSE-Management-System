import { IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div 
      style={{
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "16px", 
        backgroundColor: colors.primary[400],
        width: "100%",
        boxSizing: "border-box",
        borderBottom: `1px solid ${colors.primary[300]}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 10 // Ensures shadow renders over the content below
      }}
    >
      {/* LEFT SIDE: BRANDING & SEARCH BAR */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Typography variant="h3" fontWeight="bold" color={colors.grey[100]}>
          SMART QHSE
        </Typography>
        
        <div
          style={{
            backgroundColor: colors.primary[400],
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            border: `1px solid ${colors.primary[300]}`,
            padding: "4px"
          }}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>

      {/* RIGHT SIDE: ICONS & PROFILE */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        
        {/* PROFILE SECTION */}
        <div style={{ display: "flex", alignItems: "center", marginLeft: "16px", cursor: "pointer" }}>
          <PersonOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="h5" color={colors.grey[100]}>
            Karl Jonas
          </Typography>
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;