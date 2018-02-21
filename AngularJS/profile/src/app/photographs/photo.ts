export class photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(albumid: number,id: number,title: string,url: string,thumburl: string){
            
            this.albumId=albumid;
            this.id=id;
            this.title=title;
            this.url=url;
            this.thumbnailUrl=thumburl;
        }
}