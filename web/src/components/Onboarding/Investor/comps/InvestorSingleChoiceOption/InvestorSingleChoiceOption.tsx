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
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-y-auto">
        {props.options.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded p-3 text-b2 shadow-md lg:p-4 lg:text-b1 ${
              e == props.input
                ? ' bg-primary-d1 text-white dark:bg-primary-l1 dark:text-black '
                : 'bg-white-d2 text-black hover:bg-primary-d3 hover:text-white dark:bg-black-l2 dark:text-white dark:hover:bg-primary-l3 hover:dark:text-black'
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
