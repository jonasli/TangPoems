export interface IPoet {
  name:string;
  image:string;
  bio:string;
  poems:string[];
}

 
export interface PoetData {
  poets: IPoet[];
}
