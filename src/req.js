
const basicFetch = async () => {
    const req = await fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
    const json = await req.json();
    return json
}
export default {
    getPlant: async () => {
        return [
            {
                items: await basicFetch()
            }
        ]
    }
}