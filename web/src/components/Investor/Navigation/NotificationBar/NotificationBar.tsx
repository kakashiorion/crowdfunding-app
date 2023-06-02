import NotificationIcon from 'public/icons/notification.svg'
import UpIcon from 'public/icons/up.svg'

import {
  menuExpandDivClassName,
  menuIconClassName,
  upIconClassName,
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
            className={upIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorNotificationMenu />
        </>
      ) : (
        <NotificationIcon
          className={menuIconClassName}
          onClick={() => props.setMenuOpen('Notification')}
        />
      )}
    </>
  )
}
export default InvestorNotificationBar

const InvestorNotificationMenu = () => {
  return (
    <div className={menuExpandDivClassName}>
      <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-9"></div>
    </div>
  )
}
