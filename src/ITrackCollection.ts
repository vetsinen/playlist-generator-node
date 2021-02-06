import Track from "./Track";

interface ITrackCollection {
    getTracksByGenre( genre: string): Array <Track>
    getTracksBySubgenre( subgenre: string): Array <Track>
}