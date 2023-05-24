type InputProps = {
  value: string | number | readonly string[] | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  type?: React.HTMLInputTypeAttribute
}

export const TextInput = (props: InputProps) => {
  return (
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      className={
        ' text-primary focus:border-primary w-2/3 rounded border-2 border-black-l2 bg-white p-2 text-center  text-b2 focus:outline-none disabled:border-none disabled:bg-black-l4 dark:border-white-d2 dark:bg-black dark:text-primary-l2  dark:focus:border-primary-l1  lg:px-4 lg:py-2 lg:text-b1'
      }
    ></input>
  )
}
