import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size="large" sx={{ width: 75, height: 75 }} />
          <Box component="span" fontSize={24} marginTop={5}>
            Generating...
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
