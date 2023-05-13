type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <div className="bg-white bg-gradient-to-tr from-white from-30% via-white-d1 via-70% to-primary-l2 px-4 dark:bg-black-l1 dark:bg-gradient-to-tr dark:from-black dark:from-10% dark:via-black-l1 dark:via-70% dark:to-primary-d2 lg:px-5 ">
      {children}
    </div>
  )
}

export default LandingPageLayout
