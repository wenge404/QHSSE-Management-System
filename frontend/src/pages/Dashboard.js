import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// Added Recharts imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Reusable KPI Card Component
const StatBox = ({ title, subtitle, icon, iconColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box width="100%" m="0 30px" p="20px 0">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100], mt: "10px" }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: iconColor }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

// Mock data for the incident chart
const mockData = [
  { name: 'Jan', incidents: 4 },
  { name: 'Feb', incidents: 3 },
  { name: 'Mar', incidents: 2 },
  { name: 'Apr', incidents: 7 },
  { name: 'May', incidents: 5 },
  { name: 'Jun', incidents: 1 },
];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="30px">
        <Box>
          <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mb: "5px" }}>
            DASHBOARD
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Welcome to SMART QHSE
          </Typography>
        </Box>
      </Box>

      {/* DASHBOARD GRID */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        
        {/* ROW 1: CORE KPIs with Hover Effects */}
        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.primary[400]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          borderRadius="8px"
          sx={{ transition: "all 0.2s ease-in-out", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 8px 24px rgba(0,0,0,0.2)`, cursor: "pointer" } }}
        >
          <StatBox title="12" subtitle="Open Incidents" icon={<ReportProblemOutlinedIcon sx={{ color: colors.redAccent[500], fontSize: "32px" }} />} iconColor={colors.redAccent[500]} />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.primary[400]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          borderRadius="8px"
          sx={{ transition: "all 0.2s ease-in-out", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 8px 24px rgba(0,0,0,0.2)`, cursor: "pointer" } }}
        >
          <StatBox title="8" subtitle="Unmitigated Hazards" icon={<WarningAmberOutlinedIcon sx={{ color: colors.warningAccent[500], fontSize: "32px" }} />} iconColor={colors.warningAccent[500]} />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.primary[400]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          borderRadius="8px"
          sx={{ transition: "all 0.2s ease-in-out", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 8px 24px rgba(0,0,0,0.2)`, cursor: "pointer" } }}
        >
          <StatBox title="3" subtitle="Pending Audits" icon={<AssignmentOutlinedIcon sx={{ color: colors.blueAccent[500], fontSize: "32px" }} />} iconColor={colors.blueAccent[500]} />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.primary[400]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center" 
          borderRadius="8px"
          sx={{ transition: "all 0.2s ease-in-out", "&:hover": { transform: "translateY(-5px)", boxShadow: `0 8px 24px rgba(0,0,0,0.2)`, cursor: "pointer" } }}
        >
          <StatBox title="94%" subtitle="Training Compliance" icon={<SchoolOutlinedIcon sx={{ color: colors.greenAccent[500], fontSize: "32px" }} />} iconColor={colors.greenAccent[500]} />
        </Box>

        {/* ROW 2: ANALYTICS & ACTIVITY FEED */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px" borderRadius="8px">
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Incident Trends (Last 6 Months)
          </Typography>
          <Box height="250px" mt="20px">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.primary[300]} />
                <XAxis dataKey="name" stroke={colors.grey[100]} />
                <YAxis stroke={colors.grey[100]} />
                <Tooltip contentStyle={{ backgroundColor: colors.primary[400], border: "none", borderRadius: "4px" }} />
                <Line type="monotone" dataKey="incidents" stroke={colors.redAccent[500]} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto" p="30px" borderRadius="8px">
           <Typography variant="h5" fontWeight="600" color={colors.grey[100]} mb="15px">
            Recent Actions
          </Typography>
          
          {/* Mock Feed Items */}
          {[1, 2, 3, 4].map((item, i) => (
            <Box key={i} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px solid ${colors.primary[500]}`} p="15px 0">
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h6" fontWeight="bold">
                  ACT-{item}04
                </Typography>
                <Typography color={colors.grey[100]}>
                  Site Inspection Follow-up
                </Typography>
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px" color={colors.primary[100]}>
                Closed
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;