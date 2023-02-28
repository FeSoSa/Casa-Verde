
const basicFetch = async () => {
    const req = await fetch('https://gist.githubusercontent.com/lefialho/49f8b58999c4e427b4021f85a98527de/raw/4888e8bb55e171ea578c554d3238a0bcc6cd267a/ofertas.json')
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