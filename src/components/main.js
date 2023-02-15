import { Box, Container, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Sample from './sample';

export default function Main() {
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState('');

  function generate() {
    setStep(1);
  }

  if(step === 0) {
    return (
      <Container sx={{ marginTop: 5, marginBottom: 5, minHeight: '100vh' }}>
        <Box width="100%" height={100}>
          <Box component="span" fontSize="24px" fontWeight="800">
            Content Genie
          </Box>
        </Box>
        <Box display="flex" width="100%" mr={4} justifyContent="center">
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={5}
            placeholder="What do you want to make today?"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </Box>
        <Box display="flex" marginTop={3} justifyContent="center">
          <Button variant="contained" onClick={generate}>
            <Box
              component="span"
              fontSize={16}
              fontWeight={600}
              textTransform="none"
            >
              Generate
            </Box>
          </Button>
        </Box>
      </Container>
    );
  }
  return <Sample prompt={prompt} />
}
