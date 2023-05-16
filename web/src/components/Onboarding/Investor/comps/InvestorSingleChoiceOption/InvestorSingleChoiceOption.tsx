import { ErrorSubTextLabel } from 'src/components/Label/Label'

type InvestorSingleChoiceOptionProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  options: string[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const InvestorSingleChoiceOption = (props: InvestorSingleChoiceOptionProps) => {
  return (
    <>
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {props.options.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.input
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              props.setInput(e)
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

export default InvestorSingleChoiceOption
