import { ErrorSubTextLabel } from 'src/components/Label/Label'

type StartupTripleTextInputProps = {
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
const StartupTripleTextInput = (props: StartupTripleTextInputProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <input
          className={
            ' w-1/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1  lg:px-5 lg:py-2.5 lg:text-b1'
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
            ' w-1/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1  lg:px-5 lg:py-2.5 lg:text-b1'
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
            ' w-1/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1  lg:px-5 lg:py-2.5 lg:text-b1'
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

export default StartupTripleTextInput
