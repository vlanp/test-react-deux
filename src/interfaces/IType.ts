interface IType {
  pokemon: Array<IPokemon>;
}

interface IPokemon {
  pokemon: IBisPokemon;
}

interface IBisPokemon {
  name: string;
  url: string;
}

export default IType;
