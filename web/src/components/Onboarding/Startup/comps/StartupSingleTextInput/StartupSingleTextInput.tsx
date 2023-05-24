import { ErrorSubTextLabel } from 'src/components/Label/Label'

type StartupSingleTextInputProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const StartupSingleTextInput = (props: StartupSingleTextInputProps) => {
  return (
    <>
      <input
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.input}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.setInput(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <ErrorSubTextLabel label={props.error} />
    </>
  )
}

export default StartupSingleTextInput
