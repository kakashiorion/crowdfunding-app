import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupOfferRoomPage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Offer')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="StartupOfferRoom"
        description="Startup Offer Room page for Dealbari platform"
      />
    </>
  )
}

export default StartupOfferRoomPage

/*
Offer room page shall have:
  - Offer details and option to edit (secondary info)
  - Room details (public/private-passcode, timeline, share link)
  - Participant list (joinLimit, waiting list)
  - Option to kick a participant & Kicked list (secondary info)
  - Room group chat
  - Q&As
  - Resources/Links

  - Negotiation table (investors list, messages, )

  - Option to close the offer (discard option - secondary)
  - Deal details (investors-funding amount, )
*/
