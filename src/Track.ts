const path = require('path');

export default class Track {
    public readonly rank: number ;
    public folderAndFile: string;
    public subgenre: string;
    constructor(dir: string, trackname: string){
        this.folderAndFile = path.join(dir, trackname)
        this.subgenre = trackname.substring(0,5)
        this.rank = Number.parseInt(trackname[6])
    }
}