import MusicCollection from "./MusicCollection";

const print = console.log
const startDir = '/home/jsdev/bachasalsa/'
const mc: MusicCollection = new MusicCollection('/home/jsdev/bachasalsa/')

let pl1 = mc.genNBlocksPlaylist(5, 's2b2')
mc.exportPlaylistAsM3u(pl1,'/home/jsdev/bachasalsa/')
// mc.exportPlaylistAsM3u(['bacha/bacha-1-chiquilla chiquita.mp3','bacha/bacha-1-v5 - bacha-1-calma.mp3'],'bachasalsa')
// print(mc.getRandomTrackBySubgenre('bacha'))
// print(mc.block2s2b())
// print(mc.genNBlocksPlaylist(5, 's2b2'))


//FIXME features:
// - create trak class
// - more

