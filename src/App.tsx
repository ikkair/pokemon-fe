import React, { useEffect, useState } from 'react'
import './App.css'
import InputText from './components/InputText'
import List from './components/List'
import { Pokemon, NamedAPIResourceList } from './components/Pokemon.types'
import Detail from './components/Detail'

async function getListPokemon(offset:number, limit:number, setState:React.Dispatch<React.SetStateAction<NamedAPIResourceList | null>>){
  try {
    // const offset = (page-1) * limit
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset.toString()}&limit=${limit.toString()}`)
    const data = await response.json()
    setState(()=>data)
  } catch(error){
    console.error("Error:", error)
  }
}

async function getDataPokemon(name: string, setState: React.Dispatch<React.SetStateAction<Pokemon | null>>, setSearchState: React.Dispatch<React.SetStateAction<boolean>>){
  if (name == ""){
    name = "error"
  }
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!response.ok){
      if(response.status == 404){
        console.log("item tidak ada")
        setSearchState(false)
      }
    } else {
      const {id, name, base_experience, height, weight, abilities, sprites, moves} = await response.json()
      const tempData: Pokemon = {
        id,
        name,
        base_experience,
        height,
        weight,
        abilities,
        sprites,
        moves,
      }
      setState(tempData)
      setSearchState(true)
    }
  } catch(error){
    console.error("Error:", error)
  }
}

export default function App() {
  /* // For debugging
  console.log("App Rendered") */
  const [searchPokemon, setSearchPokemon] = useState("pikachu")
  const [searchState, setSearchState] = useState(false)
  const [namedAPIResourceList, setNamedAPIResourceList] = useState<NamedAPIResourceList | null>(null)
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  // const [page, setPage] = useState(1)
  useEffect(()=>{
    getListPokemon(0,10,setNamedAPIResourceList)
  }, [])
  useEffect(()=>{
    getDataPokemon(searchPokemon.toLowerCase(), setPokemon, setSearchState)
  },[searchPokemon])

  console.log(searchState)
  if (!searchState){
    return (
      <div className='App container mx-auto'>
        <InputText valueCallback={setSearchPokemon} initValue={""} placeholder='Search Pokemon Name' />
        <List searchCallback={setSearchPokemon} NamedAPIResourceList={namedAPIResourceList}/>
      </div>
    )
  } else {
    return (
      <div className='App container mx-auto'>
        <InputText valueCallback={setSearchPokemon} initValue={""} placeholder='Search Pokemon Name' />
        <Detail Pokemon={pokemon}/>
      </div>
    )
  }
}

