import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorMultipleChoiceOptionProps = {
  input: string[]
  setInput: React.Dispatch<React.SetStateAction<string[]>>
  options: string[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const InvestorMultipleChoiceOption = (
  props: InvestorMultipleChoiceOptionProps
) => {
  return (
    <>
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {props.options.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.input.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.input.includes(e)) {
                props.setInput(props.input.filter((s) => s != e))
              } else {
                props.setInput([...props.input, e])
              }
              props.error != '' && props.setError('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <ErrorSubTextLabel label={props.error} />
    </>
  )
}

export default InvestorMultipleChoiceOption
