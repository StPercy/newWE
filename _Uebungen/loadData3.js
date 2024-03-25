function loadData(dummyData) {
    return dummyData
}

function validateData(data) {
    if (data == false) {
        return false
    }
    return true
}

async function load(dummyData) {
    const data = loadData(dummyData)
    if (data === undefined) {
        throw new Error('Data is undefined')
    }
    return data
}

async function validatedData(data) {
    const validData = validateData(data)
    if (!validData) {
        throw new Error('Data is not valid')
    }
    return data
}

async function getValidatedData(dummyData) {
    let data
    try {
        data = await load(dummyData)
    } catch (error) {
        console.log(error.message)
        return
    }
    try {
        data = await validatedData(data)
    } catch (error) {
        console.log(error.message)
        return
    }
    console.log(data)
}