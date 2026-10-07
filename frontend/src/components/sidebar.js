import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"; 
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

// MUI Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined"; 
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />} 
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <ProSidebar 
        collapsed={isCollapsed}
        backgroundColor={colors.primary[500]}
        rootStyles={{ borderRight: "none", height: "100%" }}
      >
        <Menu 
          menuItemStyles={{
            button: ({ active }) => ({
              color: active ? "#6870fa" : colors.grey[100],
              backgroundColor: "transparent",
              "&:hover": {
                color: "#868dfb",
                backgroundColor: "transparent",
              },
            }),
            icon: {
              backgroundColor: "transparent",
            },
            subMenuContent: {
              backgroundColor: colors.primary[500],
            },
          }}
        >
          {/* HEADER */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            
            {/* DASHBOARD */}
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            
            {/* COLLAPSIBLE: QHSE RECORDS */}
            <SubMenu label="Records" icon={<FolderOutlinedIcon />}>
              <Item title="Documents" to="/documents" icon={<DescriptionOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Incidents" to="/incidents" icon={<ReportProblemOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Hazards" to="/hazards" icon={<WarningAmberOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </SubMenu>

            {/* COLLAPSIBLE: ASSURANCE */}
            <SubMenu label="Assurance" icon={<ShieldOutlinedIcon />}>
              <Item title="Inspections" to="/inspections" icon={<FactCheckOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Audits" to="/audits" icon={<AssignmentOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Corrective Actions" to="/actions" icon={<TaskAltOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </SubMenu>

            {/* COLLAPSIBLE: PEOPLE & HSE */}
            <SubMenu label="People & HSE" icon={<PeopleOutlinedIcon />}>
              <Item title="Training" to="/training" icon={<SchoolOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Health" to="/health" icon={<MedicalServicesOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Environment" to="/environment" icon={<NatureOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Transport" to="/transport" icon={<DirectionsCarOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </SubMenu>

            {/* COLLAPSIBLE: INSIGHTS */}
            <SubMenu label="Insights" icon={<InsightsOutlinedIcon />}>
              <Item title="Analytics" to="/analytics" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="KPIs" to="/kpis" icon={<TrackChangesOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Reports" to="/reports" icon={<SummarizeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </SubMenu>

            {/* BOTTOM SINGLE ITEMS */}
            <Box mt="20px">
              <Item title="Administration" to="/settings" icon={<SettingsOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Logout" to="/logout" icon={<LogoutOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Box>

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;