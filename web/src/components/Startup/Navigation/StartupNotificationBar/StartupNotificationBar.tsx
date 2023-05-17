import NotificationIcon from 'public/icons/notification.svg'
import UpIcon from 'public/icons/up.svg'

import {
  menuExpandDivClassName,
  menuIconClassName,
  upIconClassName,
} from 'src/components/Startup/Navigation/StartupNavigationConsts'

type StartupNotificationBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const StartupNotificationBar = (props: StartupNotificationBarProps) => {
  return (
    <>
      {props.isMenuOpen == 'Notification' ? (
        <>
          <UpIcon
            className={upIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <StartupNotificationMenu />
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
export default StartupNotificationBar

const StartupNotificationMenu = () => {
  return (
    <div className={menuExpandDivClassName}>
      <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l2"></div>
    </div>
  )
}
