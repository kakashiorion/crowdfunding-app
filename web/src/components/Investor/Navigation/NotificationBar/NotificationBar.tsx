import SvgNotification from 'src/components/Icon/Notification'
import SvgUp from 'src/components/Icon/Up'
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
          <SvgUp
            className={UpIconClassName}
            onClick={() => props.setMenuOpen('None')}
          />
          <InvestorNotificationMenu />
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
export default InvestorNotificationBar

const InvestorNotificationMenu = () => {
  return (
    <div className={MenuExpandDivClassName}>
      <div className="h-8 w-full rounded bg-white-d1 dark:bg-black-l1 lg:h-9"></div>
    </div>
  )
}
