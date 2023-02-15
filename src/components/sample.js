import { Box, Container, Grid, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from '../common/loading';

export default function Sample({ prompt }) {
  const [title, setTitle] = useState('title');
  const [headline, setHeadline] = useState('headline');
  const [description, setDescription] = useState('description');
  const [status, setStatus] = useState('loading');

  async function getTextContents() {
    const result = await axios('http://localhost:3000/api/context', {
      params: {
        prompt,
      },
    });
    const content = JSON.parse(result.data.result);

    setTitle(content.title);
    setHeadline(content.headline);
    setDescription(content.description);

    setStatus('Loaded');
  }

  async function regenerate(input, setterFn) {
    const result = await axios('http://localhost:3000/api/regenerate', {
      params: {
        prompt: input,
        topic: prompt,
      },
    });
    setterFn(result.data.result.trim());
  }

  useEffect(() => {
    getTextContents();
  }, []);

  if (status === 'loading') {
    return <Loading />;
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Box
        height="100vh"
        width="100%"
        sx={{
          backgroundImage:
            'url(https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/background_10.36c611509fbc.jpg?ext=webp)',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="550px"
          height="300px"
          bgcolor="white"
          p={5}
        >
          <Box display="flex" alignItems="center">
            <Box component="span" fontSize={24} fontWeight={800}>
              {title}
            </Box>
            <IconButton
              aria-label="delete"
              onClick={() => regenerate(title, setTitle)}
            >
              <RefreshIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <Box component="span" fontSize={20} fontWeight={500} marginTop={2}>
              {headline}
            </Box>
            <IconButton
              aria-label="delete"
              onClick={() => regenerate(headline, setHeadline)}
            >
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box
        height="840px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingBottom={6}
      >
        <Container>
          <Grid container>
            <Grid xs={3}>
              <img
                alt=""
                class="sc-dpQbBL lhGzCK ripley__Image--image"
                data-testid="@foleon/maggie-viewer_image-component"
                height={200}
                sizes="
			(max-width: 749px) 800px,
			(max-width: 999px) 1100px,
			(max-width: 1199px) 1300px,
			4000px
		"
                src="https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_1.f08043bb7309.jpg?ext=webp"
                srcset="
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_1.f08043bb7309.jpg?ext=webp&amp;width=800 800w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_1.f08043bb7309.jpg?ext=webp&amp;width=1100 1100w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_1.f08043bb7309.jpg?ext=webp&amp;width=1300 1300w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_1.f08043bb7309.jpg?ext=webp 4000w
		"
              />
            </Grid>
            <Grid xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                height="600px"
                bgcolor="white"
                pl={5}
                pr={5}
              >
                <Box display="flex" alignItems="center">
                  <Box component="span" fontSize={22} fontWeight={500}>
                    {description}
                  </Box>
                  <IconButton
                    aria-label="delete"
                    onClick={() => regenerate(description, setDescription)}
                  >
                    <RefreshIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3}>
              <img
                alt=""
                class="sc-dpQbBL lhGzCK ripley__Image--image"
                data-testid="@foleon/maggie-viewer_image-component"
                height={200}
                sizes="
			(max-width: 749px) 800px,
			(max-width: 999px) 1100px,
			(max-width: 1199px) 1300px,
			4000px
		"
                src="https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_5.8173cb228b0b.jpg?ext=webp"
                srcset="
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_5.8173cb228b0b.jpg?ext=webp&amp;width=800 800w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_5.8173cb228b0b.jpg?ext=webp&amp;width=1100 1100w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_5.8173cb228b0b.jpg?ext=webp&amp;width=1300 1300w,
			https://assets.foleon.com/eu-west-2/uploads-7e3kk3/stock/portrait_5.8173cb228b0b.jpg?ext=webp 4000w
		"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
