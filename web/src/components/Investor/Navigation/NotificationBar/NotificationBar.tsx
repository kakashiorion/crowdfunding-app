import NotificationIcon from 'public/icons/notification.svg'
import UpIcon from 'public/icons/up.svg'

import {
  MenuExpandDivClassName,
  MenuIconClassName,
  UpIconClassName,
} from 'src/components/Investor/InvestorConsts'

type InvestorNotificationBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const InvestorNotificationBar = (props: InvestorNotificationBarProps) => {
  return (
    <>
      {props.isMenuOpen == 'Notification' ? (
        <>
          <UpIcon
            className={UpIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorNotificationMenu />
        </>
      ) : (
        <NotificationIcon
          className={MenuIconClassName}
          onClick={() => props.setMenuOpen('Notification')}
        />
      )}
    </>
  )
}
export default InvestorNotificationBar

const InvestorNotificationMenu = () => {
  return (
    <div className={MenuExpandDivClassName}>
      <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-9"></div>
    </div>
  )
}
