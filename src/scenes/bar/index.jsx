import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" color={colors.grey[100]} mb={2}>
        Sales & Expenses Overview
      </Typography>
      <Typography variant="subtitle2" color={colors.grey[300]} mb={4}>
        Monthly financial performance summary
      </Typography>

      {/* Bar Chart Container */}
      <Box height="75vh" p="20px" bgcolor={colors.primary[400]} borderRadius="10px">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
