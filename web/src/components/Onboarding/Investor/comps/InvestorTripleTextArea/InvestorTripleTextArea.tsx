import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorTripleTextAreaProps = {
  input1: string
  setInput1: React.Dispatch<React.SetStateAction<string>>
  placeholder1: string
  input2: string
  setInput2: React.Dispatch<React.SetStateAction<string>>
  placeholder2: string
  input3: string
  setInput3: React.Dispatch<React.SetStateAction<string>>
  placeholder3: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const InvestorTripleTextArea = (props: InvestorTripleTextAreaProps) => {
  return (
    <>
      <textarea
        className={
          ' mb-2 w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.input1}
        rows={2}
        placeholder={props.placeholder1}
        onChange={(e) => {
          props.setInput1(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <textarea
        className={
          ' mb-2 w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.input2}
        rows={2}
        placeholder={props.placeholder1}
        onChange={(e) => {
          props.setInput2(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <textarea
        className={
          ' mb-2 w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.input3}
        rows={2}
        placeholder={props.placeholder1}
        onChange={(e) => {
          props.setInput3(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <ErrorSubTextLabel label={props.error} />
    </>
  )
}

export default InvestorTripleTextArea
