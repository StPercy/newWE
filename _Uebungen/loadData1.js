function loadData(dummyData) {
    return new Promise((resolve, reject) => {
        // Simuliere das Laden von Daten
        setTimeout(() => {
            // Überprüfe, ob Daten vorhanden sind
            if (dummyData) {
                resolve(dummyData); // Daten gefunden, übergebe sie mit resolve
            } else {
                reject('Keine Daten gefunden'); // Keine Daten gefunden, weise mit reject darauf hin
            }
        }, 2000); // Simuliere eine Ladezeit von 2 Sekunden
    });
}

function validateData(data) {
    return new Promise((resolve, reject) => {
        // Simuliere die Validierung der Daten
        setTimeout(() => {
            if (data != null) {
                resolve('Daten sind gültig'); // Daten sind gültig, übergebe sie mit resolve
            } else {
                reject('Ungültige Daten'); // Daten sind ungültig, weise mit reject darauf hin
            }
        }, 2000); // Simuliere eine Validierungszeit von 2 Sekunden
    });
}

function getValidatedData(dummyData) {
    loadData(dummyData)
        .then(data => {
            console.log('Daten geladen:', data);
            return validateData(data); // Validiere die geladenen Daten
        })
        .then(validatedData => {
            console.log('Validierte Daten:', validatedData); // Zeige die validierten Daten an
        })
        .catch(error => {
            console.error('Fehler:', error); // Behandle Fehler, falls welche auftreten
        });
}

// Beispielaufruf
getValidatedData({ name: 'John', age: 42});
