async function randomFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data.fact)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

randomFact()