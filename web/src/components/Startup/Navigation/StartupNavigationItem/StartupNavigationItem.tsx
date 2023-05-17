type StartupNavigationItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  action: () => void
  selected: boolean
}
const StartupNavigationItem = (props: StartupNavigationItemProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded p-2
      ${
        props.selected
          ? ' bg-black-l2 shadow-sm dark:bg-white-d1 '
          : 'hover:bg-white-d3 dark:hover:bg-black-l4  '
      }
      `}
      onClick={props.action}
    >
      <props.icon
        className={`h-5 w-5 ${
          props.selected
            ? 'fill-tertiary-l1 dark:fill-tertiary'
            : 'fill-black dark:fill-white'
        }`}
      />
    </button>
  )
}

export default StartupNavigationItem
