export async function getPeople (setPeople: (data: []) => void, query: string) {
    const peopleData = await fetch(`https://swapi.dev/api/people/?search=${query}`)
    const peopleList = await peopleData.json()
    setPeople(peopleList.results)
}