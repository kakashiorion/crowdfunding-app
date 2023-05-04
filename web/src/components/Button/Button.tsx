// type size = 'small' | 'medium' | 'large'
// type color =
//   | 'primary'
//   | 'secondary'
//   | 'success'
//   | 'accent'
//   | 'warn'
//   | 'error'
//   | 'black'
//   | 'white'
//   | 'grayscale' //for disabled
// type variant = 'filled' | 'outlined' | 'text'
// type shape = 'round' | 'square'
// type iconPosition = 'before' | 'after'

type ButtonProps = {
  action: () => void
  label: string
}

export const PrimaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm bg-primary px-4 py-2 text-b2 text-white hover:bg-primary-d1 lg:px-5 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const LargePrimaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm bg-primary px-5 py-3 text-b1 text-white hover:bg-primary-d1 lg:px-6 lg:py-4 lg:text-h6"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const DisabledFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm bg-black-l4 px-4 py-2 text-b2 text-white-d3 lg:px-5 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const PrimaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm border-2 border-primary px-4 py-2 text-b2 text-primary hover:border-primary-d1 hover:text-primary-d1 dark:border-primary-l1 dark:text-primary-l1 dark:hover:border-primary dark:hover:text-primary lg:px-5 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}
export const SmallPrimaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm border-2 border-primary px-2 py-1 text-b3 text-primary hover:border-primary-d1 hover:text-primary-d1 dark:border-primary-l1 dark:text-primary-l1 dark:hover:border-primary dark:hover:text-primary lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallSecondaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded-sm border-2 border-secondary px-2 py-1 text-b3 text-secondary hover:border-secondary-d1 hover:text-secondary-d1 dark:border-secondary-l1 dark:text-secondary-l1 dark:hover:border-secondary dark:hover:text-secondary lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const BlackTextButton = (props: ButtonProps) => {
  return (
    <button
      className="text-b2 text-black-l2 hover:text-black dark:text-white-d2 dark:hover:text-white lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const HoverPrimaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="text-b2 text-black hover:text-primary dark:text-white dark:hover:text-primary-l1  lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallHoverPrimaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="text-b3 text-black-l2 underline hover:text-primary dark:text-white-d2 dark:hover:text-primary-l1  lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}
