const ENDPOINT = "https://us-central1-mxvalidator.cloudfunctions.net/ValidateMX"

async function ValidateAPI(csvDomains) {
    csvDomains = csvDomains.replace(/\s/g,'');
    let domains = new Set(csvDomains.split(","))
    let requestBody = {
        "domains": [...domains],
    }

    let resp = await fetch(ENDPOINT, {
        method: "POST",
        body: JSON.stringify(requestBody)
    });

    if (resp.status !== 200) {
        throw new Error("Failed to fetch entries:" + resp.status)
    }
    const data = await resp.json()
    return data.results
}

export default ValidateAPI;