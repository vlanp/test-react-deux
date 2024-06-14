interface IPokemon {
  forms: Array<IForm>;
  types: Array<IType>;
}

interface IForm {
  name: string;
  url: string;
}

interface IType {
  type: ITypeBis;
}

interface ITypeBis {
  name: string;
}

export default IPokemon;
