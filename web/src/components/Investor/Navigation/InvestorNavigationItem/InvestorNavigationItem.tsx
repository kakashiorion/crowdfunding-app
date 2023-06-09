type InvestorNavigationItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  action: () => void
  selected: boolean
}

const InvestorNavigationItem = (props: InvestorNavigationItemProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded p-2
      ${
        props.selected
          ? ' bg-black-l1 shadow-sm dark:bg-white-d1 '
          : ' hover:bg-white-d3 dark:hover:bg-black-l3 '
      }
      `}
      onClick={props.action}
    >
      <props.icon
        className={`h-6 w-6 ${
          props.selected
            ? ' fill-primary-l1 dark:fill-primary-d1 '
            : ' fill-black dark:fill-white '
        }`}
      />
    </button>
  )
}

export default InvestorNavigationItem
