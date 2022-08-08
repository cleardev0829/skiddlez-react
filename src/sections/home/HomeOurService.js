import { m } from 'framer-motion';
import * as React from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';


// components
import Image from '../../components/Image';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0, 0, 0),
}));
// ----------------------------------------------------------------------

export default function HomeOurService() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyle>
      <Container style={{ maxWidth: 1440 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs="12" sx={{ position: 'relative' }}>
            <Box sx={{ textAlign: 'center' }}>
              <m.div>
                <Typography color="secondary" variant="h6" sx={{ mb: 3 }}>
                  Our Solutions
                </Typography>
                <Typography color="primary" variant="h2" sx={{ fontWeight: '300!important', mb: 2 }}>
                  The Services We 
                </Typography>
                <Typography color="primary" variant="h5" sx={{ fontWeight: '300!important', mb: 2 }}>
                  Provide
                </Typography>
              </m.div>
            </Box>
          </Grid>
          {/* <Grid item xs="12">
            <Grid container>
              <Grid >

              </Grid>
            <Grid />
          </Grid> */}
        </Grid>
      </Container>
    </RootStyle>
  );
}
