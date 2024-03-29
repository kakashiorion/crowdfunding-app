type LabelProps = {
  label: string | undefined
}

//Headings - h1/h3
export const HeadingLabel = (props: LabelProps) => {
  return (
    <p className="text-h3 font-black text-black dark:text-white lg:text-h1">
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

//Subheadings - h2/h4
export const SubHeadingLabel = (props: LabelProps) => {
  return (
    <p className="text-h4 text-black dark:text-white lg:text-h2">
      {props.label}
    </p>
  )
}

export const PrimarySubHeadingLabel = (props: LabelProps) => {
  return (
    <p className="text-h4 text-primary-d1 dark:text-primary-l1 lg:text-h2">
      {props.label}
    </p>
  )
}

//Display - h3/h5
export const DisplayLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-black dark:text-white lg:text-h3">
      {props.label}
    </p>
  )
}

export const PrimaryDisplayLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-primary-d1 dark:text-primary-l1 lg:text-h3">
      {props.label}
    </p>
  )
}

//SubDisplay - h4/h6
export const SubDisplayLabel = (props: LabelProps) => {
  return (
    <p className="text-h6 text-black dark:text-white lg:text-h4">
      {props.label}
    </p>
  )
}

export const PrimarySubDisplayLabel = (props: LabelProps) => {
  return (
    <p className="text-h6 text-primary-d1 dark:text-primary-l1 lg:text-h4">
      {props.label}
    </p>
  )
}

//Title - h5/h7
export const TitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black dark:text-white lg:text-h5">
      {props.label}
    </p>
  )
}

export const BoldTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 font-bold text-black dark:text-white lg:text-h5">
      {props.label}
    </p>
  )
}

export const GreyTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black-l3 dark:text-white-d3 lg:text-h5">
      {props.label}
    </p>
  )
}

export const PrimaryTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-primary-d1 dark:text-primary-l1 lg:text-h5">
      {props.label}
    </p>
  )
}

export const SecondaryTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-secondary-d1 dark:text-secondary-l1 lg:text-h5">
      {props.label}
    </p>
  )
}

export const TertiaryTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-tertiary-d1 dark:text-tertiary-l1 lg:text-h5">
      {props.label}
    </p>
  )
}

export const SuccessTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-success-d1 dark:text-success-l1 lg:text-h5">
      {props.label}
    </p>
  )
}

export const DisabledTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black-l4 dark:text-white-d4 lg:text-h5">
      {props.label}
    </p>
  )
}

//SubTitle - h6/h7
export const SubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black dark:text-white lg:text-h6">
      {props.label}
    </p>
  )
}

export const BoldSubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 font-bold text-black dark:text-white lg:text-h6">
      {props.label}
    </p>
  )
}

export const GreySubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-black-l3 dark:text-white-d3 lg:text-h6">
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

export const SecondarySubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h7 text-secondary-d1 dark:text-secondary-l1 lg:text-h6">
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

//Medium - h7/b1
export const MediumLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-black dark:text-white lg:text-h7">
      {props.label}
    </p>
  )
}

export const BoldMediumLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 font-bold text-black dark:text-white lg:text-h7">
      {props.label}
    </p>
  )
}

export const PrimaryMediumLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-primary-d1 dark:text-primary-l1 lg:text-h7">
      {props.label}
    </p>
  )
}

export const TertiaryMediumLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-tertiary-d1 dark:text-tertiary-l1 lg:text-h7">
      {props.label}
    </p>
  )
}

//Text - b1/b2
export const TextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-black dark:text-white lg:text-b1">
      {props.label}
    </p>
  )
}

export const BoldTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 font-bold text-black dark:text-white lg:text-b1">
      {props.label}
    </p>
  )
}

export const GreyTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-black-l3 dark:text-white-d3 lg:text-b1">
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

export const SecondaryTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-secondary-d1 dark:text-secondary-l1 lg:text-b1">
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

export const WarnTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b2 text-warn-d2 dark:text-warn-l2 lg:text-b1">
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

//SubText - b2/b3
export const SubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-black-l1 dark:text-white-d1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const GreySubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-black-l3 dark:text-white-d3 lg:text-b2">
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

export const SecondarySubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-secondary-d1 dark:text-secondary-l1 lg:text-b2">
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
    <p className="text-b3 text-error-d2 dark:text-error-l2 lg:text-b2">
      {props.label}
    </p>
  )
}

export const WarnSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-warn-d2 dark:text-warn-l2 lg:text-b2">
      {props.label}
    </p>
  )
}

export const SuccessSubTextLabel = (props: LabelProps) => {
  return (
    <p className="text-b3 text-success-d2 dark:text-success-l2 lg:text-b2">
      {props.label}
    </p>
  )
}

//Small - b3/b4
export const SmallLabel = (props: LabelProps) => {
  return (
    <p className="text-b4 text-black-l1 dark:text-white-d1 lg:text-b3">
      {props.label}
    </p>
  )
}
