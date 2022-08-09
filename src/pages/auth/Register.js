import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
// hooks
import useResponsive from '../../hooks/useResponsive';
// routes
import { PATH_AUTH } from '../../routes/paths';

// components
import Page from '../../components/Page';
import SocialsButton from '../../components/SocialsButton';
// sections
import { RegisterForm } from '../../sections/auth/register';

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
  backgroundImage: 'url("/assets/images/image1.png")',
  backgroundSize: 'contain',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  borderRadius: 0,
  zIndex: -100,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Sign Up">
      <RootStyle>
        {mdUp && (
          <SectionStyle>
            <CoverBackground>
              <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 1, ml: 8 }}>
                You're new here!
              </Typography>
              <Typography variant="body2" sx={{ px: 5, mt: 0, mb: 1, ml: 8 }}>
                Sign up with your email and personal details to get started!
              </Typography>
            </CoverBackground>
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography color="primary" variant="h4" gutterBottom>
                  Sign Up
                </Typography>
              </Box>
            </Stack>

            <RegisterForm />

            <Divider sx={{ fontSize: '14px',mt: 3, mb: 3 }}>Or Sign in with Email</Divider>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', itemAlign: 'center' }}
              sx={{ mb: 0 }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>

            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?{' '}
              <Link variant="subtitle2" to={PATH_AUTH.login} component={RouterLink}>
                Login
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
