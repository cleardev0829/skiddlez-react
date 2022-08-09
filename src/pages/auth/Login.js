import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Container, Typography, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const CoverBackground = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  height: '100%',
  zIndex: 99,
  opacity: 0.95,
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#FFFFFF',
}));

const SectionStyle = styled(Card)(() => ({
  width: '100%',
  backgroundImage: 'url("/assets/images/image13.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
  zIndex: -100,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'cover',
  flexDirection: 'column',
  padding: theme.spacing(20, 0, 12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
        {mdUp && (
          <SectionStyle>
            <CoverBackground>
              <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 1, ml: 8 }}>
                Welcome Back!
              </Typography>
              <Typography variant="body2" sx={{ px: 5, mt: 0, mb: 1, ml: 8 }}>
                We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.
              </Typography>
            </CoverBackground>
          </SectionStyle>
        )}
        <Container maxWidth="md" sx={{ backgroundColor: '#F3FAFF' }}>
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography color="primary" variant="h4" gutterBottom>
                  Login
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ flexGrow: 1, width: '100%', mb: 3 }}>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<Image src="/assets/icons/google.png" />}
                sx={{ width: '100%', padding: '10px', backgroundColor: '#FFFFFF' }}
              >
                Sign in with Google
              </Button>
            </Box>
            <Divider sx={{ fontSize: '14px', mb: 3 }}>Or Sign in with Email</Divider>

            <LoginForm />

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?{' '}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.registerUnprotected}>
                Sign Up
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
