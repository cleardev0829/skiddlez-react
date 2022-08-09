import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Button, Container, Typography } from '@mui/material';
import Carousel from 'react-elastic-carousel';

// components
import Image from '../../components/Image';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 0, 0, 0),
  background: '#F3FAFF',
  backgroundImage: 'url("/assets/images/Vector2.png")',
  backgroundSize: 'contain',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const GetStartedButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white!important',
  fontWeight: '600!important',
}));

const IconStyle = styled('div')(() => ({
  position: 'absolute',
  width: '60px',
  height: '60px',
  margin: '10px',
}));

const ItemContectStyle = styled('div')(() => ({
  marginLeft: '70px',
  textAlign: 'left',
}));

// ----------------------------------------------------------------------
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
// ----------------------------------------------------------------------

export default function HomeOurFeature() {
  return (
    <RootStyle>
      <Container style={{ maxWidth: 1440 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              padding: '15px !important',
              height: '658px',
              backgroundImage: 'url("/assets/images/Vector3.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image src="/assets/images/overview-img21.png" />
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            dir="ltr"
            sx={{
              position: 'relative',
            }}
          >
            <ContentStyle>
              <m.div>
                <Typography color="secondary" sx={{ mb: 2, fontWeight: '600!important', fontSize: '18px' }}>
                  Our Feature
                </Typography>
              </m.div>

              <m.div>
                <Typography color="primary" variant="h2" sx={{ mb: 3, fontWeight: '600!important', fontSize: '30px' }}>
                  Manage Everything in One Workspace
                </Typography>
              </m.div>

              <m.div>
                <Typography sx={{ color: 'common.black', fontWeight: '600!important', mb: 5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </Typography>
              </m.div>

              <m.div>
                <GetStartedButtonStyle>Get Started</GetStartedButtonStyle>
              </m.div>
            </ContentStyle>
          </Grid>
          <Grid
            item
            xs={12}
            lg={12}
            dir="ltr"
            sx={{
              position: 'relative',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <m.div>
              <Typography variant="h2" color="secondary" sx={{ mb: 5 }}>
                Our Awesome Features
              </Typography>
            </m.div>
            <m.div>
              <Typography variant="subtitle2" sx={{ mb: 5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Typography>
            </m.div>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Carousel breakPoints={breakPoints}>
              <div key={1} style={{ width: '250px' }}>
                <IconStyle>
                  <Image src="/assets/icons/image 34.png" width="60" height="60" />
                </IconStyle>
                <ItemContectStyle>
                  <m.div>
                    <Typography variant="h6" color="primary">
                      Dashboard
                    </Typography>
                    <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                  </m.div>
                </ItemContectStyle>
              </div>
              <div key={2} style={{ width: '250px' }}>
                <IconStyle>
                  <Image src="/assets/icons/image 34.png" width="60" height="60" />
                </IconStyle>
                <ItemContectStyle>
                  <m.div>
                    <Typography variant="h6" color="primary">
                      Dashboard
                    </Typography>
                    <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                  </m.div>
                </ItemContectStyle>
              </div>
              <div key={3} style={{ width: '250px' }}>
                <IconStyle>
                  <Image src="/assets/icons/image 34.png" width="60" height="60" />
                </IconStyle>
                <ItemContectStyle>
                  <m.div>
                    <Typography variant="h6" color="primary">
                      Dashboard
                    </Typography>
                    <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                  </m.div>
                </ItemContectStyle>
              </div>
              <div key={4} style={{ width: '250px' }}>
                <IconStyle>
                  <Image src="/assets/icons/image 34.png" width="60" height="60" />
                </IconStyle>
                <ItemContectStyle>
                  <m.div>
                    <Typography variant="h6" color="primary">
                      Dashboard
                    </Typography>
                    <Typography variant="subtitle2">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                  </m.div>
                </ItemContectStyle>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
