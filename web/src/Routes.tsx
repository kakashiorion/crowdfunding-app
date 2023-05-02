// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Route, Router } from '@redwoodjs/router'

// import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import InvestorHomeLayout from './layouts/InvestorHomeLayout/InvestorHomeLayout'
import InvestorOnboardingLayout from './layouts/InvestorOnboardingLayout/InvestorOnboardingLayout'
import LandingPageLayout from './layouts/LandingPageLayout/LandingPageLayout'
import LoginPageLayout from './layouts/LoginPageLayout/LoginPageLayout'
import SignupPageLayout from './layouts/SignupPageLayout/SignupPageLayout'
import StartupHomeLayout from './layouts/StartupHomeLayout/StartupHomeLayout'
import StartupOnboardingLayout from './layouts/StartupOnboardingLayout/StartupOnboardingLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route notfound page={ErrorNotFoundPage} />
      <Set wrap={[LandingPageLayout]}>
        <Route path="/" page={LandingLandingPage} name="landing" />
      </Set>
      <Set wrap={[LoginPageLayout]}>
        <Route path="/login" page={LoginFlowLoginPage} name="login" />
        <Route path="/forgotPassword" page={LoginFlowForgotPasswordPage} name="forgotPassword" />
        <Route path="/resetPassword" page={LoginFlowResetPasswordPage} name="resetPassword" />
      </Set>
      <Set wrap={[SignupPageLayout]}>
        <Route path="/signup" page={SignupFlowSignupPage} name="signup" />
      </Set>
      <Set wrap={[StartupHomeLayout]} private unauthenticated="landing" roles={['ADMIN', 'STARTUP']}>
        <Route path="/startup/home" page={StartupStartupHomePage} name="startupHome" />
        <Route path="/startup/myProfile" page={StartupStartupHomePage} name="startupMyProfile" />
        <Route path="/startup/myOffer" page={StartupStartupMyOfferPage} name="startupMyOffer" />
        <Route path="/startup/myConnections" page={StartupStartupMyConnectionsPage} name="startupMyConnections" />
        <Route path="/startup/myConversations" page={StartupStartupMyConversationsPage} name="startupMyConversations" />
        <Route path="/startup/explore" page={StartupStartupExplorePage} name="startupExplore" />
        <Route path="/startup/help" page={StartupStartupHelpPage} name="startupHelp" />
        <Route path="/startup/investorProfile" page={StartupInvestorProfilePage} name="startupInvestorProfile" />
        <Route path="/startup/post" page={StartupStartupPostPage} name="startupPost" />
      </Set>
      <Set wrap={[StartupOnboardingLayout]} private unauthenticated="landing" roles={['ADMIN', 'STARTUP']}>
        <Route path="/startup/onboarding" page={StartupStartupHomePage} name="startupOnboarding" />
      </Set>
      <Set wrap={[InvestorHomeLayout]} private unauthenticated="landing" roles={['ADMIN', 'INVESTOR']}>
        <Route path="/investor/home" page={InvestorInvestorHomePage} name="investorHome" />
        <Route path="/investor/myProfile" page={InvestorMyInvestorProfilePage} name="investorMyProfile" />
        <Route path="/investor/myBids" page={InvestorInvestorMyBidsPage} name="investorMyBids" />
        <Route path="/investor/myConnections" page={InvestorInvestorMyConnectionsPage} name="investorMyConnections" />
        <Route path="/investor/myConversations" page={InvestorInvestorMyConversationsPage} name="investorMyConversations" />
        <Route path="/investor/explore" page={InvestorInvestorExplorePage} name="investorExplore" />
        <Route path="/investor/help" page={InvestorInvestorHelpPage} name="investorHelp" />
        <Route path="/investor/otherInvestorProfile" page={InvestorOtherInvestorProfilePage} name="otherInvestorProfile" />
        <Route path="/investor/startupProfile" page={InvestorStartupProfilePage} name="investorStartupProfile" />
        <Route path="/investor/post" page={InvestorInvestorPostPage} name="investorPost" />
      </Set>
      <Set wrap={[InvestorOnboardingLayout]} private unauthenticated="landing" roles={['ADMIN', 'INVESTOR']}>
        <Route path="/investor/onboarding" page={InvestorInvestorHomePage} name="investorOnboarding" />
      </Set>
    </Router>
  )
}

export default Routes
