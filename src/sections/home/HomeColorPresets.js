import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';


// components
import Image from '../../components/Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: '#F0FBF8',
}));
// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', textAlign: 'left', maxWidth: '1440px!important' }}>
        <Box sx={{ position: 'relative' }}>
          <Box style={{ position: 'absolute', top : -20, left : 115}}>
            <m.div>
              <Typography color="secondary" sx={{ mb: 2, fontSize: '18px' }}>
                Our Product
              </Typography>
              <Typography color="primary" sx={{ mb: 2, fontSize: '50px', fontWeight: 600 }}>
                Lorem Ipsum is simply 
              </Typography>
              <Typography color="primary" sx={{ mb: 2, fontSize: '30px' }}>
                dummy text of the printing 
              </Typography>
            </m.div>
          </Box>
          <Image
            alt="grid"
            src="/assets/images/OurProduct1.png"
          />
        </Box>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: 'calc(100vw/2 - )'}}>
          <Image
            alt="grid"
            src="/assets/images/skyscraper-view-city-leader-window-frame1.png"
          />
        </Box>
      </Container>
    </RootStyle>
  );
}
