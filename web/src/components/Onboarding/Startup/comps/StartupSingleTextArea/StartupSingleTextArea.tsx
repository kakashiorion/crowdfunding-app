import { ErrorSubTextLabel } from 'src/components/Label/Label'

type StartupSingleTextAreaProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const StartupSingleTextArea = (props: StartupSingleTextAreaProps) => {
  return (
    <>
      <textarea
        className={
          ' mb-2 w-2/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.input}
        rows={3}
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

export default StartupSingleTextArea
