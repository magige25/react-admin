import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CustomPieChart from "../../components/PieChart";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Typography variant="h4" fontWeight="bold" color={colors.grey[100]} mb={2}>
        Sales Distribution by Category
      </Typography>
      <Typography variant="subtitle2" color={colors.grey[300]} mb={4}>
        Breakdown of sales across different categories
      </Typography>

      <Box height="75vh" p="20px" bgcolor={colors.primary[400]} borderRadius="10px">
        <CustomPieChart />
      </Box>
    </Box>
  );
};

export default Pie;