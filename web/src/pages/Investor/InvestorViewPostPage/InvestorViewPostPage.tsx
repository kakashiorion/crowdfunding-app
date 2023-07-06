import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorRecentPostsCell from 'src/components/Investor/Post/InvestorRecentPostsCell'
import InvestorViewPostCell from 'src/components/Investor/Post/InvestorViewPostCell'
import { PrimaryTitleLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorViewPostPage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Post')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="View Post"
        description="Investor Post page for Dealbari platform"
      />
      <InvestorViewPostMain id={id} />
      <InvestorViewPostSide id={id} />
    </>
  )
}

export default InvestorViewPostPage

const InvestorViewPostMain = ({ id }: { id: number }) => {
  return (
    <div className="flex h-full w-full flex-col gap-3 lg:w-2/3 lg:gap-4">
      <PrimaryTitleLabel label="View Post" />
      <InvestorViewPostCell id={id} />
    </div>
  )
}

const InvestorViewPostSide = ({ id }: { id: number }) => {
  return (
    <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
      <PrimaryTitleLabel label="Related Posts" />
      <InvestorRecentPostsCell id={id} />
    </div>
  )
}
