export default class Track {
    private readonly trackname: string;
    private readonly genre: string;
    private readonly subgenre: string;
    private readonly rank: number ;
    constructor(trackname: string) {
        if (!Track.validateTrackName(trackname))
            throw new Error('the track ${trackname} is not normalized')
        this.trackname = trackname
        this.genre = trackname.substring(0,2)
        this.subgenre = trackname.substring(0,5)
        this.rank = Number.parseInt(trackname[6])
    }
    static validateTrackName (trackname: string): boolean {
        const rank = +trackname[6]
        return trackname[4] === 'a' && rank > 0 && rank < 10
            && trackname.endsWith('.mp3');
    }
}