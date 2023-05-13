type StartupHomeLayoutProps = {
  children?: React.ReactNode
}

const StartupHomeLayout = ({ children }: StartupHomeLayoutProps) => {
  return (
    <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
      <div className="flex h-full xl:mx-auto xl:max-w-screen-xl ">
        {children}
      </div>
    </div>
  )
}

export default StartupHomeLayout
