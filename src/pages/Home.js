// @mui

// components
import Page from '../components/Page';
// sections
import {
  HomeDarkMode,
  // HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  // HomeAdvertisement,
  // HomeCleanInterfaces,
  HomeHugePackElements,
  HomeOurFeature,
  HomeOurProject,
  HomeInegrateApp,
  HomeOurService,
  HomeDownloadMobile,
  HomeCustomerSupport,
  HomeProjectStory,
  HomeContactUs,
  HomeFreeTrial,
} from '../sections/home';

// ----------------------------------------------------------------------

// const ContentStyle = styled('div')(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   backgroundColor: theme.palette.background.default,
// }));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      {/* <HomeHero /> */}

      {/* <ContentStyle> */}
  
        {/* <HomeMinimal /> */}

        <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeOurFeature />

        <HomeOurProject />

        <HomeInegrateApp />

        <HomeOurService />

        <HomePricingPlans />

        <HomeDownloadMobile />

        <HomeCustomerSupport />

        <HomeProjectStory />

        <HomeContactUs />

        <HomeFreeTrial />
      {/* </ContentStyle> */}
    </Page>
  );
}
