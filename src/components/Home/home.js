import React from "react";
import Box from "@mui/material/Box";
import BasicCard from "./card";
import DataTable from "./table";
import Stack from "@mui/material/Stack";
export default function home() {
  return (
    <Box sx={{ flexGrow: 1 , margin : 5 }}>
      <Stack direction="row" spacing={2} sx={{maxWidth : 900}}>
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </Stack>
      <DataTable />
      
    </Box>
  );
}
