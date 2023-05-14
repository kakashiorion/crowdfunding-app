import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorSingleTextAreaProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const InvestorSingleTextArea = (props: InvestorSingleTextAreaProps) => {
  return (
    <>
      <textarea
        className={
          ' mb-2 w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
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

export default InvestorSingleTextArea
