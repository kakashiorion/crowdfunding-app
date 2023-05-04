type InvestorOnboardingLayoutProps = {
  children?: React.ReactNode
}

const InvestorOnboardingLayout = ({
  children,
}: InvestorOnboardingLayoutProps) => {
  return (
    <div className="h-screen bg-white px-5 dark:bg-black-l1 lg:px-6 ">
      <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
        {children}
      </div>
    </div>
  )
}

export default InvestorOnboardingLayout
