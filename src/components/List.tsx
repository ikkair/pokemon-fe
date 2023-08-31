import { NamedAPIResourceList, NamedAPIResource } from "./Pokemon.types"

type ListProps = {
  NamedAPIResourceList: NamedAPIResourceList | null
  searchCallback: React.Dispatch<React.SetStateAction<string>>
}

function onClick(props: ListProps) {
  return (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    props.searchCallback(()=> event.currentTarget.id)
  }
}

export default function List(props: ListProps) {
  return (
    <>
      <ul>
        {props.NamedAPIResourceList?.results.map((object: NamedAPIResource, index: number) => {
          return (
            <li id={object.name} onClick={onClick(props)} key={object.name + index} className="text-center text-xl my-2 font-semibold">
              {(object.name.charAt(0).toUpperCase() + object.name.slice(1))}
            </li>
          )
        })}
      </ul>
    </>
  )
}
