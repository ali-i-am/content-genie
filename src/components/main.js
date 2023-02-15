import { Box, Container, Divider } from '@mui/material';
import React from 'react';

export default function Main() {
    return (
      <Container sx={{ marginTop: 5, marginBottom: 5, minHeight: '100vh' }}>
        <Box width="100%" height={100}>
          <Box component="span" fontSize="24px" fontWeight="800">
            Content Genie
          </Box>
        </Box>
        <Box display="flex" width="100%" mr={4}>
          <Box display="flex" flex={1}>
            Left
          </Box>
          <Divider
            orientation="vertical"
            sx={{ height: '100%', minHeight: '300px' }}
          />
          <Box display="flex" flex={1} ml={4}>
            Right
          </Box>
        </Box>
      </Container>
    );
}