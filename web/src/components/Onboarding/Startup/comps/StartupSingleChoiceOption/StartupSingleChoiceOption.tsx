import { ErrorSubTextLabel } from 'src/components/Label/Label'

type StartupSingleChoiceOptionProps = {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  options: string[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const StartupSingleChoiceOption = (props: StartupSingleChoiceOptionProps) => {
  return (
    <>
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {props.options.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded p-3 text-b2 shadow-md lg:p-4 lg:text-b1 ${
              e == props.input
                ? ' bg-tertiary-d1 text-white dark:bg-tertiary-l1 dark:text-black '
                : 'bg-white-d2 text-black hover:bg-tertiary-d3 hover:text-white dark:bg-black-l2 dark:text-white dark:hover:bg-tertiary-l3 hover:dark:text-black'
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

export default StartupSingleChoiceOption
