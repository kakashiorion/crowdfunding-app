type LabelProps = {
  label: string
}

export const HeadingLabel = (props: LabelProps) => {
  return (
    <p className="text-h3 font-black text-black dark:text-white lg:text-h1">
      {props.label}
    </p>
  )
}

export const PrimarySubHeadingLabel = (props: LabelProps) => {
  return (
    <p className="text-h3 font-black text-primary-d1 dark:text-primary-l1 lg:text-h2">
      {props.label}
    </p>
  )
}

export const GradientHeadingLabel = (props: LabelProps) => {
  return (
    <p className="bg-gradient-to-r from-primary-l1 from-10% via-black-l4 via-70% to-primary-l1 to-100% bg-clip-text text-h3 font-extrabold text-transparent dark:from-primary-d1 dark:via-white dark:to-primary-d1 lg:text-h1">
      {props.label}
    </p>
  )
}

export const TextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-black dark:text-white lg:text-b1">
      {props.label}
    </p>
  )
}

export const PrimaryTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-primary-d1 dark:text-primary-l1 lg:text-b1">
      {props.label}
    </p>
  )
}

export const TertiaryTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-tertiary-d1 dark:text-tertiary-l1 lg:text-b1">
      {props.label}
    </p>
  )
}

export const SuccessTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-success-d1 dark:text-success-l1 lg:text-b1">
      {props.label}
    </p>
  )
}

export const DisabledTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-black-l4 dark:text-white-d4 lg:text-b1">
      {props.label}
    </p>
  )
}

export const SubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black dark:text-white lg:text-h6">
      {props.label}
    </p>
  )
}

export const PrimarySubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-primary-d1 dark:text-primary-l1 lg:text-h6">
      {props.label}
    </p>
  )
}

export const TertiarySubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-tertiary-d1 dark:text-tertiary-l1 lg:text-h6">
      {props.label}
    </p>
  )
}

export const SuccessSubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-success-d1 dark:text-success-l1 lg:text-h6">
      {props.label}
    </p>
  )
}

export const DisabledSubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black-l4 dark:text-white-d4 lg:text-h6">
      {props.label}
    </p>
  )
}

export const QuestionLabel = (props: LabelProps) => {
  return (
    <p className="text-h6 text-black dark:text-white lg:text-h5">
      {props.label}
    </p>
  )
}

export const TitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-black dark:text-white lg:text-h4">
      {props.label}
    </p>
  )
}

export const PrimaryTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-primary-d1 dark:text-primary-l1 lg:text-h4">
      {props.label}
    </p>
  )
}

export const TertiaryTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-tertiary-d1 dark:text-tertiary-l1 lg:text-h4">
      {props.label}
    </p>
  )
}

export const SuccessTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-success-d1 dark:text-success-l1 lg:text-h4">
      {props.label}
    </p>
  )
}

export const DisabledTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-black-l4 dark:text-white-d4 lg:text-h4">
      {props.label}
    </p>
  )
}

export const SubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">
      {props.label}
    </p>
  )
}

export const PrimarySubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-primary-d1 dark:text-primary-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const TertiarySubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-tertiary-d1 dark:text-tertiary-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const DisabledSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-black-l4 dark:text-white-d4 lg:text-b2">
      {props.label}
    </p>
  )
}

export const ErrorSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-error-d1 dark:text-error-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const WarnSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-warn-d1 dark:text-warn-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const SuccessSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-success-d1 dark:text-success-l1 lg:text-b2">
      {props.label}
    </p>
  )
}
