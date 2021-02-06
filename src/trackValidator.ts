export default function trackValidator(trackname: string): boolean {
    const rank = +trackname[6]
    return trackname[4] === 'a' && rank > 0 && rank < 10
        && trackname.endsWith('.mp3');
}