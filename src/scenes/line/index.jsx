import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CustomLineChart from "../../components/LineChart";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Typography variant="h4" fontWeight="bold" color={colors.grey[100]} mb={2}>
        Revenue & Profit Trends
      </Typography>
      <Typography variant="subtitle2" color={colors.grey[300]} mb={4}>
        Monthly revenue and profit overview
      </Typography>

      <Box height="75vh" p="20px" bgcolor={colors.primary[400]} borderRadius="10px">
        <CustomLineChart />
      </Box>
    </Box>
  );
};

export default Line;
