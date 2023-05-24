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
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.input1}
        rows={3}
        placeholder={props.placeholder1}
        onChange={(e) => {
          props.setInput1(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <textarea
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.input2}
        rows={3}
        placeholder={props.placeholder2}
        onChange={(e) => {
          props.setInput2(e.target.value)
          props.error != ' ' && props.setError(' ')
        }}
      />
      <textarea
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.input3}
        rows={3}
        placeholder={props.placeholder3}
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
