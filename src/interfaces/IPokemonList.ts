interface IPokemonList {
  count: number;
  results: Array<IResult>;
}

interface IResult {
  name: string;
  url: string;
}

export default IPokemonList;

export type { IResult as Result };
