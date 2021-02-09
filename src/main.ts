import MusicCollection from "./MusicCollection";

const print = console.log
const mc: MusicCollection = new MusicCollection('/home/jsdev/bachasalsa/')
// print(mc.getRandomTrackBySubgenre('bacha'))
// print(mc.block2s2b())
print(mc.genNBlocksPlaylist(5, 's2b2'))


//FIXME features:
// - create trak class
// - more

