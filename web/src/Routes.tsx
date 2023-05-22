// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Route, Router } from '@redwoodjs/router'

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
      <Set wrap={[StartupHomeLayout]} private unauthenticated="login">
        <Route path="/startup/home" page={StartupStartupHomePage} name="startupHome" />
        <Route path="/startup/myOffer" page={StartupStartupMyOfferPage} name="startupMyOffer" />
        <Route path="/startup/connections" page={StartupStartupMyConnectionsPage} name="startupMyConnections" />
        <Route path="/startup/conversations" page={StartupStartupMyConversationsPage} name="startupMyConversations" />
        <Route path="/startup/explore" page={StartupStartupExplorePage} name="startupExplore" />
        <Route path="/startup/myProfile" page={StartupStartupMyProfilePage} name="startupMyProfile" />
        <Route path="/startup/help" page={StartupStartupHelpPage} name="startupHelp" />
        <Route path="/startup/investorProfile/{id:Int}" page={StartupInvestorProfilePage} name="startupInvestorProfile" />
        <Route path="/startup/viewPost/{id:Int}" page={StartupStartupPostPage} name="startupPost" />
        <Route path="/startup/createPost" page={StartupStartupCreatePostPage} name="startupCreatePost" />
        <Route path="/startup/createOffer" page={StartupStartupCreateOfferPage} name="startupCreateOffer" />
        <Route path="/startup/offerRoom/{id:Int}" page={StartupStartupOfferRoomPage} name="startupOfferRoom" />
      </Set>
      <Set wrap={[StartupOnboardingLayout]} private unauthenticated="login">
        <Route path="/startup/onboarding" page={StartupStartupOnboardingPage} name="startupOnboarding" />
      </Set>
      <Set wrap={[InvestorHomeLayout]} private unauthenticated="login">
        <Route path="/investor/home" page={InvestorInvestorHomePage} name="investorHome" />
        <Route path="/investor/offers" page={InvestorInvestorOffersPage} name="investorOffers" />
        <Route path="/investor/connections" page={InvestorInvestorMyConnectionsPage} name="investorMyConnections" />
        <Route path="/investor/conversations" page={InvestorInvestorMyConversationsPage} name="investorMyConversations" />
        <Route path="/investor/explore" page={InvestorInvestorExplorePage} name="investorExplore" />
        <Route path="/investor/myProfile" page={InvestorMyInvestorProfilePage} name="myInvestorProfile" />
        <Route path="/investor/help" page={InvestorInvestorHelpPage} name="investorHelp" />
        <Route path="/investor/investorProfile/{id:Int}" page={InvestorOtherInvestorProfilePage} name="otherInvestorProfile" />
        <Route path="/investor/startupProfile/{id:Int}" page={InvestorStartupProfilePage} name="investorStartupProfile" />
        <Route path="/investor/viewPost/{id:Int}" page={InvestorInvestorPostPage} name="investorPost" />
        <Route path="/investor/createPost" page={InvestorInvestorCreatePostPage} name="investorCreatePost" />
        <Route path="/investor/offerRoom/{id:Int}" page={InvestorInvestorOfferRoomPage} name="investorOfferRoom" />
      </Set>
      <Set wrap={[InvestorOnboardingLayout]} private unauthenticated="login">
        <Route path="/investor/onboarding" page={InvestorInvestorOnboardingPage} name="investorOnboarding" />
      </Set>
    </Router>
  )
}

export default Routes
