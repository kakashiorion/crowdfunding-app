export type InvestorNavigationItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  action: () => void
  selected: boolean
}

const InvestorNavigationItem = (props: InvestorNavigationItemProps) => {
  return (
    <button
      className={`flex w-full justify-center rounded-sm p-2 xl:items-center xl:justify-start xl:gap-2
      ${
        props.selected
          ? ' bg-white shadow-sm dark:bg-white-d1 '
          : 'hover:bg-white-d2 dark:hover:bg-black-l3  '
      }
      `}
      onClick={props.action}
    >
      <props.icon
        className={`h-5 w-5 ${
          props.selected
            ? 'fill-primary-d1 dark:fill-primary'
            : 'fill-black dark:fill-white'
        }`}
      />
      <p
        className={`hidden xl:flex xl:text-b1 ${
          props.selected
            ? 'xl:text-primary-d1 xl:dark:text-primary'
            : 'xl:text-black dark:xl:text-white '
        }`}
      >
        {props.label}
      </p>
    </button>
  )
}

export default InvestorNavigationItem
