import { Pokemon } from "./Pokemon.types"

type DetailProps = {
  Pokemon: Pokemon | null
}
export default function Detail(props: DetailProps) {
  /* // For debuggin
  console.log("Props data", props.Pokemon) */
  return (
    <>
      <div className="mt-10">
        <div className="px-4 sm:px-0">
          <h3 className="text-center text-3xl font-bold leading-7 text-gray-900">
            {props.Pokemon?.name.toUpperCase()}
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Images:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex flex-wrap justify-start">
                  <img src={props.Pokemon?.sprites.front_default} />
                  <img src={props.Pokemon?.sprites.back_default} />
                  <img src={props.Pokemon?.sprites.front_shiny} />
                  <img src={props.Pokemon?.sprites.back_shiny} />
                  <img src={props.Pokemon?.sprites.front_female} />
                  <img src={props.Pokemon?.sprites.back_female} />
                  <img src={props.Pokemon?.sprites.front_shiny_female} />
                  <img src={props.Pokemon?.sprites.back_shiny_female} />
                </div>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Height:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {props.Pokemon?.height}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Weight:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {props.Pokemon?.weight}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Abilities:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {props.Pokemon?.abilities.map((abilities, index) => {
                  return (
                    <span className="mr-1" key={abilities.ability?.name + index}>{abilities.ability?.name}</span>
                  )
                })}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Moves:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {props.Pokemon?.moves?.map((move, index) => {
                  return (
                    <span className="mr-1" key={move.move.name + index}>{move.move.name}</span>
                  )
                })}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
