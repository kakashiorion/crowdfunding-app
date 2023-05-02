type size = 'small' | 'medium' | 'large'
type color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'accent'
  | 'warn'
  | 'error'
  | 'black'
  | 'white'
  | 'grayscale' //for disabled

type IconProps = {
  size: size
  color: color
  hideLarge?: boolean
}

const getIconClass = ({ size, color }: IconProps) => {
  let className = ''

  //MediumBlackIcon
  if (size == 'medium' && color == 'black') {
    className = 'flex h-6 w-6 fill-black dark:fill-white'
  }
  //SmallBlackIcon
  if (size == 'small' && color == 'black') {
    className = 'flex h-5 w-5 fill-black dark:fill-white'
  }
  //LargeBlackIcon
  if (size == 'large' && color == 'black') {
    className = 'flex h-8 w-8 fill-black dark:fill-white'
  }
  //MediumWhiteIcon
  if (size == 'medium' && color == 'white') {
    className = className = 'flex h-6 w-6 fill-white dark:fill-black'
  }
  //SmallWhiteIcon
  if (size == 'small' && color == 'white') {
    className = className = 'flex h-5 w-5 fill-white dark:fill-black'
  }
  //LargeWhiteIcon
  if (size == 'large' && color == 'white') {
    className = 'flex h-8 w-8 fill-white dark:fill-black'
  }
  return className
}

export default getIconClass
