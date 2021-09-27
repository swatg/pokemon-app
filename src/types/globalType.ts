export interface AttackProps {
  name: string,
  type: string, 
  damage: number,
}

export interface PokemonProps {
  name: string,
  number: number,
  image: string,
  resistant: string[],
  weaknesses: string[],
  attacks: {
    fast: AttackProps[],
    special: AttackProps[],
  },
}
