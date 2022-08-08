// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  HomeOurFeature,
  HomeOurProject,
  HomeInegrateApp,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      {/* <HomeHero /> */}

      {/* <ContentStyle> */}
  
        {/* <HomeMinimal /> */}

        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeOurFeature />

        <HomeOurProject />

        <HomeInegrateApp />

        <HomeCleanInterfaces />

        <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement />
      {/* </ContentStyle> */}
    </Page>
  );
}
