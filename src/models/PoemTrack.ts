import { WebAudioTrack } from 'ionic-audio';

export   class PoemTrack extends  WebAudioTrack 
{
    public title: string;
    public artist: string;
    public art: string;

    constructor(src:string, title:string, artist:string,art:string,preload:string){
        super(src,preload);
        this.title=title;
        this.artist=artist;
        this.art=art;
            
    
    }
 

}


