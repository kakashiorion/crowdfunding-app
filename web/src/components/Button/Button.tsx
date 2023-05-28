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
  icon?: JSX.Element
}

export const PrimaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-primary-d1 px-5 py-2.5 text-b2 text-white duration-200  hover:bg-primary-d2  dark:bg-primary-l1 dark:text-black dark:hover:bg-primary-l2 lg:px-6 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const LeadingIconBlackFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center gap-1 rounded border-2 border-black-l1 fill-black-l1 px-3 py-1.5 text-b3 text-black-l1 duration-200 hover:border-black hover:bg-black hover:fill-white hover:text-white dark:border-white-d1 dark:fill-white-d1 dark:text-white-d1 dark:hover:border-white dark:hover:bg-white dark:hover:fill-black dark:hover:text-black lg:gap-2 lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.icon}
      <p className="align-text-bottom">{props.label}</p>
    </button>
  )
}

export const SmallPrimaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded  bg-primary-d1 px-4 py-2 text-b3 text-white duration-200  hover:bg-primary-d2  dark:bg-primary-l1 dark:text-black  dark:hover:bg-primary-l2 lg:px-5 lg:py-2.5 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const LargePrimaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-primary-d1 px-6 py-3 text-b1 text-white duration-200  hover:bg-primary-d2 dark:bg-primary-l1 dark:text-black dark:hover:bg-primary-l2 lg:px-7 lg:py-4 lg:text-h6"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const TertiaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-tertiary-d1 px-5 py-2.5 text-b2 text-white duration-200 hover:bg-tertiary-d2 dark:bg-tertiary-l1 dark:text-black dark:hover:bg-tertiary-l2 lg:px-6 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallTertiaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-tertiary-d1 px-4 py-2 text-b3 text-white duration-200 hover:bg-tertiary-d2 dark:bg-tertiary-l1 dark:text-black dark:hover:bg-tertiary-l2 lg:px-5 lg:py-2.5 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const LargeTertiaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-tertiary-d1 px-6 py-3 text-b1 text-white duration-200 hover:bg-tertiary-d2 dark:bg-tertiary-l1 dark:text-black dark:hover:bg-tertiary-l2 lg:px-7 lg:py-4 lg:text-h6"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SecondaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-secondary-d1 px-5 py-2.5 text-b2 text-white duration-200 hover:bg-secondary-d2 dark:bg-secondary-l1 dark:text-black dark:hover:bg-secondary-l2 lg:px-6 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallSecondaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-secondary-d1 px-4 py-2 text-b3 text-white duration-200 hover:bg-secondary-d2 dark:bg-secondary-l1 dark:text-black dark:hover:bg-secondary-l2 lg:px-5 lg:py-2.5 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const LargeSecondaryFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-secondary-d1 px-6 py-3 text-b1 text-white duration-200 hover:bg-secondary-d2 dark:bg-secondary-l1 dark:text-black dark:hover:bg-secondary-l2 lg:px-7 lg:py-4 lg:text-h6"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const DisabledFilledButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded  bg-black-l4 px-5 py-2.5 text-b2 text-white-d2 duration-200 dark:bg-white-d4 dark:text-black-l2 lg:px-6 lg:py-3 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const BlackOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-black-l1 px-4 py-2 text-b2 text-black-l1 duration-200 hover:border-black hover:bg-black hover:text-white dark:border-white-d1 dark:text-white-d1 dark:hover:border-white dark:hover:bg-white dark:hover:text-black lg:px-5 lg:py-2.5 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallBlackOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-black-l1 px-3 py-1.5 text-b3 text-black-l1 duration-200 hover:border-black hover:bg-black hover:text-white dark:border-white-d1 dark:text-white-d1 dark:hover:border-white dark:hover:bg-white dark:hover:text-black lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const PrimaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-primary-d1 px-4 py-2 text-b2 text-primary-d1 duration-200 hover:border-primary-d2 hover:bg-primary-d2 hover:text-white dark:border-primary-l1 dark:text-primary-l1 dark:hover:border-primary-l2 dark:hover:bg-primary-l2 dark:hover:text-black lg:px-5 lg:py-2.5 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallPrimaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-primary-d1 px-2 py-1.5 text-b3 text-primary-d1 duration-200 hover:border-primary-d2 hover:bg-primary-d2 hover:text-white dark:border-primary-l1 dark:text-primary-l1 dark:hover:border-primary-l2 dark:hover:bg-primary-l2 dark:hover:text-black lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const TertiaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-tertiary-d1 px-4 py-2 text-b2 text-tertiary-d1 duration-200 hover:border-tertiary-d2 hover:bg-tertiary-d2 hover:text-white dark:border-tertiary-l1 dark:text-tertiary-l1 dark:hover:border-tertiary-l2 dark:hover:bg-tertiary-l2 dark:hover:text-black lg:px-5 lg:py-2.5 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallTertiaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-tertiary-d1 px-2 py-1.5 text-b3 text-tertiary-d1 duration-200 hover:border-tertiary-d2 hover:bg-tertiary-d2 hover:text-white dark:border-tertiary-l1 dark:text-tertiary-l1 dark:hover:border-tertiary-l2 dark:hover:bg-tertiary-l2 dark:hover:text-black lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SecondaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-secondary-d1 px-4 py-2 text-b2 text-secondary-d1 duration-200 hover:border-secondary-d2 hover:bg-secondary-d2 hover:text-white dark:border-secondary-l1 dark:text-secondary-l1 dark:hover:border-secondary-l2 dark:hover:bg-secondary-l2 dark:hover:text-black lg:px-5 lg:py-2.5 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallSecondaryOutlineButton = (props: ButtonProps) => {
  return (
    <button
      className="rounded border-2 border-secondary-d1 px-2 py-1.5 text-b3 text-secondary-d1 duration-200 hover:border-secondary-d2 hover:bg-secondary-d2 hover:text-white dark:border-secondary-l1 dark:text-secondary-l1 dark:hover:border-secondary-l2 dark:hover:bg-secondary-l2 dark:hover:text-black  lg:px-4 lg:py-2 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const BlackTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b2 text-black-l1 duration-200 hover:text-black dark:text-white-d1 dark:hover:text-white lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const HoverPrimaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b2 text-black duration-200 hover:text-primary-d1 dark:text-white dark:hover:text-primary-l1 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallHoverPrimaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b3 text-black-l1 underline duration-200 hover:text-primary-d1 dark:text-white-d1 dark:hover:text-primary-l1 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const HoverSecondaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b2 text-black duration-200 hover:text-secondary-d1 dark:text-white dark:hover:text-secondary-l1 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallHoverSecondaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b3 text-black-l1 underline duration-200 hover:text-secondary-d1 dark:text-white-d1 dark:hover:text-secondary-l1 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const HoverTertiaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b2 text-black duration-200 hover:text-tertiary-d1 dark:text-white dark:hover:text-tertiary-l1  lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallHoverTertiaryTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b3 text-black-l1 underline duration-200 hover:text-tertiary-d1 dark:text-white-d1 dark:hover:text-tertiary-l1 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const HoverErrorTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b2 text-black duration-200 hover:text-error-d1 dark:text-white dark:hover:text-error-l1 lg:text-b1"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}

export const SmallHoverErrorTextButton = (props: ButtonProps) => {
  return (
    <button
      className="cursor-pointer text-b3 text-black-l1 underline duration-200 hover:text-error-d1 dark:text-white-d1 dark:hover:text-error-l1 lg:text-b2"
      onClick={props.action}
    >
      {props.label}
    </button>
  )
}
