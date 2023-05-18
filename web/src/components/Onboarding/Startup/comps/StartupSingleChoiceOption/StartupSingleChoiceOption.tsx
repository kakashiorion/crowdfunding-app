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
            className={`w-full flex-grow rounded p-3 text-b2 text-black shadow-md dark:text-white lg:p-4 lg:text-b1 ${
              e == props.input
                ? ' bg-tertiary text-white'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
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
