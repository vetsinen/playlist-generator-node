const path = require('path');
const fs = require('fs');
import Track from "./Track";

export default class MusicCollection {
    public readonly scannedDirectory: string
    public tracks: { [key: string]: Track[] } = {}

    public exportPlaylistAsM3u(playlist: Array<string>=[],dir: string='bachasalsa', filename: string = "hello.m3u"): void{
        let content: string = "#EXTM3U\n"
        playlist.forEach(track=>{
            content+='#EXTINF:0,'+track+"\n"
            content+=path.join(dir,track)+"\n"
        })

        fs.writeFileSync(filename, content)
    }

    constructor(scannedDirectory: string = '/home/jsdev/testmusic/') {
        this.scannedDirectory = scannedDirectory

        const dirnames = fs.readdirSync(scannedDirectory)
        let dir: string
        for (let dir of dirnames) {
            if (fs.lstatSync(path.resolve(scannedDirectory, dir)).isDirectory()) {
                // console.log('Directory: ' + path.join(scannedDirectory, dir))
                let directory = path.join(scannedDirectory, dir)
                let filenames = fs.readdirSync(directory)
                for (let file of filenames) {
                    if (MusicCollection.trackValidator(file)) {
                        let track: Track = new Track(dir, file)
                        if (!(track.subgenre in this.tracks)) {
                            this.tracks[track.subgenre] = []
                        }
                        this.tracks[track.subgenre].push(track)
                    }
                }
            }
        }

        let subgenre: string
        for (subgenre in this.tracks) {
        }
//console.log(tracks)
    }


    public genNBlocksPlaylist(n: number,balance: string): Array<string>{
        //FIXME make balance callback
        let playlist: Array<string> = []
        let addPlaylist:Array<string>=[]
        for (let i=0;i<n;i++){
            if (balance==='s2b2'){addPlaylist = this.block2s2b()}
            else addPlaylist=[]
            if (addPlaylist.length===0){break}
            playlist = [...playlist, ...addPlaylist.filter(track=>track!=='')]
        }
        return playlist
    }

    public block2s2b(): Array<string>{
        return [
            this.getRandomTrackBySubgenre('salra'),
            this.getRandomTrackBySubgenre('salra'),
            this.getRandomTrackBySubgenre('bacha'),
            this.getRandomTrackBySubgenre('bacha'),
        ]
    }

    public getRandomTrackBySubgenre(subgenre: string='bacha'): string {
        if (!(subgenre in this.tracks || this.tracks[subgenre].length===0)){return ''}
        let index = Math.floor(Math.random()*this.tracks[subgenre].length)
        const rez: Track = this.tracks[subgenre][index]
        this.tracks[subgenre].splice(index,1)
        return rez.folderAndFile
    }

    public static trackValidator(trackname: string): boolean {
        const rank = +trackname[6]
        return trackname[4] === 'a' && rank > 0 && rank < 10
            && trackname.endsWith('.mp3');
    }

    public sortTracksByRank(arr: Array<Track>):Array<Track>{ //not used
        return arr.sort(function (a: Track, b: Track){
            const x = a.rank; const y = b.rank;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        })
    }


}