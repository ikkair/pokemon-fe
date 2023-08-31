type Ability = {
  id:number
  name:string
}

type PokemonAbility = {
  is_hidden:boolean
  slot:number
  ability: NamedAPIResource | Ability
}

type PokemonSprites = {
  front_default:string
  front_shiny:string
  front_female:string
  front_shiny_female:string
  back_default:string
  back_shiny:string
  back_female:string
  back_shiny_female:string
}

type Move = {
  id:number
  name:string
  accuracy:number
  effect_chance:number
  pp:number
  priority:number
  power:number
}

type PokemonMove = {
  move: NamedAPIResource | Move
}

export type Pokemon = {
  id:number
  name:string
  base_experience:number
  height:number
  weight:number
  abilities:PokemonAbility[]
  sprites:PokemonSprites
  moves: PokemonMove[]
}

export type NamedAPIResource = {
  name:string
  url:string
}

export type NamedAPIResourceList = {
  count:number
  next:string
  previous:string
  results:NamedAPIResource[]
}

