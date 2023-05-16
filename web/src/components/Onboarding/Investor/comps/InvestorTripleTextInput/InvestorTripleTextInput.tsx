import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorTripleTextInputProps = {
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
const InvestorTripleTextInput = (props: InvestorTripleTextInputProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <input
          className={
            ' w-1/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.input1}
          placeholder={props.placeholder1}
          onChange={(e) => {
            props.setInput1(e.target.value)
            props.error != ' ' && props.setError('')
          }}
          type={'text'}
        />
        <input
          className={
            ' w-1/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.input2}
          placeholder={props.placeholder2}
          onChange={(e) => {
            props.setInput2(e.target.value)
            props.error != ' ' && props.setError('')
          }}
          type={'text'}
        />
        <input
          className={
            ' mb-2 w-1/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.input3}
          placeholder={props.placeholder3}
          onChange={(e) => {
            props.setInput3(e.target.value)
            props.error != ' ' && props.setError('')
          }}
          type={'text'}
        />
        <ErrorSubTextLabel label={props.error} />
      </div>
    </>
  )
}

export default InvestorTripleTextInput
