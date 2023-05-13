import { createContext, useState } from 'react'

import InvestorTopBar from 'src/components/Investor/Navigation/InvestorTopBar/InvestorTopBar'

type InvestorHomeLayoutProps = {
  children?: React.ReactNode
}

type MenuContextProps = {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOpenContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  setMenuOpen: () => {},
})

const InvestorHomeLayout = ({ children }: InvestorHomeLayoutProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
        <div className="relative flex h-full w-full flex-col xl:mx-auto xl:max-w-screen-xl ">
          <InvestorTopBar setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
          {children}
        </div>
      </div>
    </MenuOpenContext.Provider>
  )
}

export default InvestorHomeLayout
