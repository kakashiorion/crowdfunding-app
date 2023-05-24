import DoneIcon from 'public/icons/done.svg'

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
            className={`flex w-full flex-grow items-center justify-center gap-2 rounded p-3 text-b2 shadow-md lg:gap-4 lg:p-4 lg:text-b1 ${
              props.input.includes(e)
                ? ' bg-primary-d1 text-white dark:bg-primary-l1 dark:text-black '
                : 'bg-white-d2 text-black hover:bg-primary-d3 hover:text-white dark:bg-black-l2 dark:text-white dark:hover:bg-primary-l3 hover:dark:text-black'
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
            <div className="mx-auto flex w-2/3 items-center justify-start gap-6 whitespace-nowrap lg:gap-7 ">
              {props.input.includes(e) ? <SelectedBox /> : <UnselectedBox />}
              {e.replaceAll('_', ' ')}
            </div>
          </button>
        ))}
      </div>
      <ErrorSubTextLabel label={props.error} />
    </>
  )
}

export default InvestorMultipleChoiceOption

const SelectedBox = () => {
  return (
    <div className="flex h-5 w-5 shrink-0 rounded bg-white dark:bg-black lg:h-6 lg:w-6 ">
      <DoneIcon className="m-auto h-5 w-5 fill-primary-d1 dark:fill-primary-l1 lg:h-6 lg:w-6" />
    </div>
  )
}

const UnselectedBox = () => {
  return (
    <div className="flex h-5 w-5 shrink-0 rounded border-2 border-black  dark:border-white  lg:h-6 lg:w-6 "></div>
  )
}
