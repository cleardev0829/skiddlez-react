import { m } from 'framer-motion';
import * as React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Button } from '@mui/material';

// import Image from '../../components/Image';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0, 0, 0),
  background: '#F0FBF8',
}));

const Buttontyle = styled(Button)(() => ({
  background: 'linear-gradient(89.86deg, #0065A5 0.06%, #1DB99B 99.83%)',
  boxShadow: '0px 0px 20px 5px rgba(0, 101, 165, 0.35)',
  borderRadius: '4px',
  margin: '10px'
}))

// ----------------------------------------------------------------------

export default function HomeDownloadMobile() {
  return (
    <RootStyle>
      <Container style={{ maxWidth: 1440 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs="12" md="6" sx={{ position: 'relative' }}>
            <Box sx={{ textAlign: 'left', padding: '30px', color: 'white' }}>
              <m.div>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  24/7 Customer Support
                </Typography>
                <Typography sx={{ fontWeight: '300!important', mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </m.div>
            </Box>
          </Grid>
          <Grid item xs="12" md="6">
            <Box>
              <Buttontyle variant="outlined">
                Get Started
              </Buttontyle>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
