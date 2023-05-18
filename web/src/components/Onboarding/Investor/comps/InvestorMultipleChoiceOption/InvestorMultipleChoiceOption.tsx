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
            className={`flex w-full flex-grow items-center justify-center gap-2 rounded p-3 text-black shadow-md dark:text-white lg:gap-4 lg:p-4 ${
              props.input.includes(e)
                ? ' bg-primary text-white'
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
            <div className="mx-auto flex w-2/3 items-center justify-start gap-5 whitespace-nowrap text-b2 lg:gap-6 lg:text-b1">
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
    <div className="flex h-5 w-5 shrink-0 rounded bg-white ">
      <DoneIcon className="m-auto h-5 w-5 fill-primary" />
    </div>
  )
}

const UnselectedBox = () => {
  return (
    <div className="flex h-5 w-5 shrink-0 rounded border-2 border-black dark:border-white "></div>
  )
}
