import React, { useState, useRef } from "react"

type InputTextProps = {
  initValue: string
  placeholder: string
  valueCallback: React.Dispatch<React.SetStateAction<string>>
}

function handleChange(props: InputTextProps, setState: React.Dispatch<React.SetStateAction<string>>, timerId: React.MutableRefObject<number>) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
    clearTimeout(timerId.current)
    timerId.current = setTimeout(
      () => { props.valueCallback(() => event.target.value) }
      , 600)
  }
}

const InputText = (props: InputTextProps) => {
  /* // For debugging
  console.log("Input Text Rendered") */

  // Text state
  const [textValue, setTextValue] = useState(props.initValue)
  // Set timeout id
  const typingTimerId = useRef(0)
  return (
    <>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="sm:text-sm">
            <img src="/pokeball.svg" width={37}/>
          </span>
        </div>
        <input type="text" id="search" name="pokemon-name" className="block h-14 w-full rounded-lg border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-400 sm:text-xl sm:leading-6" onChange={handleChange(props, setTextValue, typingTimerId)} placeholder={props.placeholder} value={textValue} />
      </div>
    </>
  )
}

export default React.memo(InputText)
