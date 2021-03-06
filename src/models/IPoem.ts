export interface IPoem {
    category:string;
    name:string;
    author:string; 
    body:string[];
 
    annotation:IAnnotation[];
    appreciation:IAppreciation[];

}

export interface IAnnotation{
    line:number;
    word:string;
    details:string;
    source:string;

}

export interface IAppreciation
{
    source :string;
    author: string;
    details:string;

}