import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
// layouts
import useResponsive from '../../hooks/useResponsive';

// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
// sections
import { ResetPasswordForm } from '../../sections/auth/reset-password';
import SocialsButton from '../../components/SocialsButton';
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
  backgroundSize: 'contain',
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

export default function ResetPassword() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Page title="Reset Password">
       <RootStyle>
        {mdUp && (
          <SectionStyle>
            <CoverBackground>
              <Typography variant="h4" sx={{ fontWeight: 600, px: 5, mt: 3, mb: 1, ml: 8 }}>
                Don't worry,
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 500, px: 5, mt: 0, mb: 1, ml: 8 }}>
                We are here help you to recover your password.
              </Typography>
            </CoverBackground>
          </SectionStyle>
        )}

        <Container maxWidth="md">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mt: 5, mb: 3 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography color="primary" variant="h3" gutterBottom>
                  Forget Your Password!
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" sx={{ mt: 0, mb: 0 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ mb: 3 }}>
                  Enter the email address or mobile number associated with your account.
                </Typography>
              </Box>
            </Stack>

            <ResetPasswordForm />

            <Divider sx={{ fontSize: '14px',mt: 3, mb: 3 }}>Or Sign in with Email</Divider>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', itemAlign: 'center' }}
              sx={{ mb: 0 }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>

            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
              Return to Login?{' '}
              <Link variant="subtitle2" to={PATH_AUTH.loginUnprotected} component={RouterLink}>
                Login
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
      {/* <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Forgot your password?
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 5 }}>
            Please enter the email address associated with your account and We will email you a link to reset your
            password.
          </Typography>

          <ResetPasswordForm />

          <Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 1 }}>
            Back
          </Button>
        </ContentStyle>
      </Container> */}
    </Page>
  );
}
