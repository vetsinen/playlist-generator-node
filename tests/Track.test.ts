import MusicCollection from "../src/MusicCollection";

test('jest test', ()=>{
    expect(40+2).toBe(42)
})

test.skip('collection creation', ()=>{
    const mc: MusicCollection = new MusicCollection('/home/jsdev/testmusic/')
})

//test.skip - to skip test

// test('smoke test pozitive', ()=>{
//     const trackname = 'salra-5-v5-todo se derrumbo.mp3';
//     expect(MusicCollection.trackValidator(trackname)).toBe(true)
// })
//
// test('test negative', ()=>{
//     const trackname = 'Beky - She Drives Me Crazy (Cover) (vk.com_unamorbachata).mp3';
//     expect(MusicCollection.trackValidator(trackname)).toBe(false)
// })