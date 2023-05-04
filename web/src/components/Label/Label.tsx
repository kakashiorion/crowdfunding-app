type LabelProps = {
  label: string
}
export const TextLabel = (props: LabelProps) => {
  return (
    <p className="lg:pt-4'  pt-2 text-b2 text-black-l1 dark:text-white lg:text-b1">
      {props.label}
    </p>
  )
}

export const PrimaryTextLabel = (props: LabelProps) => {
  return (
    <p className="lg:pt-4'  pt-2 text-b2 text-primary dark:text-primary-l1 lg:text-b1">
      {props.label}
    </p>
  )
}

export const SuccessTextLabel = (props: LabelProps) => {
  return (
    <p className="lg:pt-4'  pt-2 text-b2 text-success dark:text-success-l1 lg:text-b1">
      {props.label}
    </p>
  )
}

export const DisabledTextLabel = (props: LabelProps) => {
  return (
    <p className="lg:pt-4'  pt-2 text-b2 text-black-l3 dark:text-white-d3 lg:text-b1">
      {props.label}
    </p>
  )
}

export const SubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-black dark:text-white lg:text-h6">
      {props.label}
    </p>
  )
}

export const PrimarySubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-primary dark:text-primary-l1 lg:text-h6">
      {props.label}
    </p>
  )
}

export const SuccessSubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-success dark:text-success-l1 lg:text-h6">
      {props.label}
    </p>
  )
}

export const DisabledSubTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-b1 text-black-l3 dark:text-white-d3 lg:text-h6">
      {props.label}
    </p>
  )
}

export const TitleLabel = (props: LabelProps) => {
  return (
    <p className=" text-h5 text-black dark:text-white  lg:text-h4">
      {props.label}
    </p>
  )
}

export const PrimaryTitleLabel = (props: LabelProps) => {
  return (
    <p className=" text-h5 text-primary dark:text-primary-l1  lg:text-h4">
      {props.label}
    </p>
  )
}

export const SuccessTitleLabel = (props: LabelProps) => {
  return (
    <p className="text-h5 text-success dark:text-success-l1  lg:text-h4">
      {props.label}
    </p>
  )
}

export const DisabledTitleLabel = (props: LabelProps) => {
  return (
    <p className="  text-h5 text-black-l3 dark:text-white-d3  lg:text-h4">
      {props.label}
    </p>
  )
}

export const SubTextLabel = (props: LabelProps) => {
  return (
    <p className=" text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">
      {props.label}
    </p>
  )
}

export const PrimarySubTextLabel = (props: LabelProps) => {
  return (
    <p className=" text-b3 text-primary dark:text-primary-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const DisabledSubTextLabel = (props: LabelProps) => {
  return (
    <p className=" text-b3 text-black-l4 dark:text-white-d4 lg:text-b2">
      {props.label}
    </p>
  )
}

export const ErrorSubTextLabel = (props: LabelProps) => {
  return (
    <p className=" text-b3 text-error-d1 dark:text-error-l1 lg:text-b2">
      {props.label}
    </p>
  )
}

export const SuccessSubTextLabel = (props: LabelProps) => {
  return (
    <p className=" text-b3 text-success-d1 dark:text-success-l1 lg:text-b2">
      {props.label}
    </p>
  )
}
