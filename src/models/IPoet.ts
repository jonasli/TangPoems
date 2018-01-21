export interface IPoet {
  name:string;
  pinyin:string;
  image:string;
  bio:string;
  poems:string[];
 
}

 
export interface PoetData {
  poets: IPoet[];
}
