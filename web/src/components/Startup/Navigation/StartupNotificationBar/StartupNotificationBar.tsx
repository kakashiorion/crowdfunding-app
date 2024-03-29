import SvgNotification from 'src/components/Icon/Notification'
import SvgUp from 'src/components/Icon/Up'
import {
  MenuExpandDivClassName,
  MenuIconClassName,
  UpIconClassName,
} from 'src/components/Startup/StartupConsts'

type StartupNotificationBarProps = {
  isMenuOpen: string
  setMenuOpen: React.Dispatch<React.SetStateAction<string>>
}
const StartupNotificationBar = (props: StartupNotificationBarProps) => {
  return (
    <>
      {props.isMenuOpen == 'Notification' ? (
        <>
          <SvgUp
            className={UpIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <StartupNotificationMenu />
        </>
      ) : (
        <SvgNotification
          className={MenuIconClassName}
          onClick={() => props.setMenuOpen('Notification')}
        />
      )}
    </>
  )
}
export default StartupNotificationBar

const StartupNotificationMenu = () => {
  return (
    <div className={MenuExpandDivClassName}>
      <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-9"></div>
    </div>
  )
}
