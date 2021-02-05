//const Track = require('../src/Track')
import Track from "../src/Track";

test('jest test', ()=>{
    expect(40+2).toBe(42)
})

test('smoke test pozitive', ()=>{
    const trackname = 'salra-5-v5-todo se derrumbo.mp3';
    expect(Track.validateTrackName(trackname)).toBe(true)
})

test('test negative', ()=>{
    const trackname = 'Beky - She Drives Me Crazy (Cover) (vk.com_unamorbachata).mp3';
    expect(Track.validateTrackName(trackname)).toBe(false)
})