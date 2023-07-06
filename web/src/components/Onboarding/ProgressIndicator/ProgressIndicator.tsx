type ProgressIndicatorProps = {
  current: number
  total: number
}
export const PrimaryProgressIndicator = (props: ProgressIndicatorProps) => {
  const indicators = []

  for (let i = 1; i < props.current; i++) {
    indicators.push(<PrimaryCirle key={i} />)
  }
  indicators.push(<PrimaryEllipse key={props.current} />)
  for (let i = props.current + 1; i <= props.total; i++) {
    indicators.push(<DisabledCircle key={props.current + i} />)
  }

  return <div className="flex gap-1 lg:gap-2 ">{indicators}</div>
}
export const TertiaryProgressIndicator = (props: ProgressIndicatorProps) => {
  const indicators = []

  for (let i = 1; i < props.current; i++) {
    indicators.push(<TertiaryCirle key={i} />)
  }
  indicators.push(<TertiaryEllipse key={props.current} />)
  for (let i = props.current + 1; i <= props.total; i++) {
    indicators.push(<DisabledCircle key={props.current + i} />)
  }

  return <div className="flex gap-1 lg:gap-2 ">{indicators}</div>
}

export const SuccessCirle = () => {
  return (
    <div className="h-2 w-2 rounded bg-success-d1 dark:bg-success-l1 lg:h-3 lg:w-3"></div>
  )
}

export const PrimaryCirle = () => {
  return (
    <div className="h-2 w-2 rounded bg-primary-d1 dark:bg-primary-l1 lg:h-3 lg:w-3"></div>
  )
}

export const PrimaryOutlineCirle = () => {
  return (
    <div className="h-2 w-2 rounded border-2 border-primary-d1 bg-black-l4 dark:border-primary-l1 dark:bg-white-d4 lg:h-3 lg:w-3"></div>
  )
}

export const TertiaryCirle = () => {
  return (
    <div className="h-2 w-2 rounded bg-tertiary-d1 dark:bg-tertiary-l1 lg:h-3 lg:w-3"></div>
  )
}

export const Cirle = () => {
  return (
    <div className="h-2 w-2 rounded bg-black dark:bg-white lg:h-3 lg:w-3"></div>
  )
}

export const PrimaryEllipse = () => {
  return (
    <div className="h-2 w-5 rounded bg-primary-d1 dark:bg-primary-l1 lg:h-3 lg:w-7"></div>
  )
}

export const TertiaryEllipse = () => {
  return (
    <div className="h-2 w-5 rounded bg-tertiary-d1 dark:bg-tertiary-l1 lg:h-3 lg:w-7"></div>
  )
}

export const DisabledCircle = () => {
  return (
    <div className="h-2 w-2 rounded bg-black-l4 dark:bg-white-d4 lg:h-3 lg:w-3"></div>
  )
}
