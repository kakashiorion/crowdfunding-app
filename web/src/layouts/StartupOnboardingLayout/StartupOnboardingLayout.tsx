type StartupOnboardingLayoutProps = {
  children?: React.ReactNode
}

const StartupOnboardingLayout = ({
  children,
}: StartupOnboardingLayoutProps) => {
  return (
    <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
      <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
        {children}
      </div>
    </div>
  )
}

export default StartupOnboardingLayout
