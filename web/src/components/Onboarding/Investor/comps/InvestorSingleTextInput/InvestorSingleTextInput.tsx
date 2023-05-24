import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorSingleTextInputProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const InvestorSingleTextInput = (props: InvestorSingleTextInputProps) => {
  return (
    <>
      <input
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
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

export default InvestorSingleTextInput
