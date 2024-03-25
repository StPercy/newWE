function loadData(dummyData) {
    return dummyData;
}

function validateData(data) {
    if (data == null || typeof data !== 'object' || Object.keys(data).length === 0) {
        return false; // Daten sind ungültig, wenn sie null, kein Objekt oder ein leeres Objekt sind
    }
    return true; // Daten sind gültig
}

function getValidatedData(dummyData) {
    const loadDataPromise = new Promise((resolve, reject) => {
        const data = loadData(dummyData);
        if (data !== undefined) {
            resolve(data);
        }
        reject('Keine Daten gefunden');
    });

    loadDataPromise
        .then(data => {
            return new Promise((resolve, reject) => {
                const validData = validateData(data);
                if (validData) {
                    resolve(data);
                }
                reject('Ungültige Daten gefunden');
            });
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

// Beispielaufruf mit Dummy-Daten
getValidatedData({ name: 'John', age: 42 }); // Beispiel-Daten: ein Objekt mit Name und Alter
getValidatedData(23); // Beispiel-Daten: ein Objekt mit Name und Alter
