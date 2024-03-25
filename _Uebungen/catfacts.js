const httpRequest = new XMLHttpRequest()

function setFact() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log(JSON.parse(httpRequest.responseText).fact)
        }
    }
}

async function randomFact() {
    httpRequest.onreadystatechange = setFact
    httpRequest.open('GET', 'https://catfact.ninja/fact', true)
    httpRequest.send()
}

randomFact()