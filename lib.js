import fsPromises from 'node:fs/promises'

export const logging = async (loggedInput, logLevel) => {
    const logTypes = ['error', 'warn', 'info'];

    if (logLevel === undefined) {
        try {
            let date = new Date().toUTCString()
            let loggedMessage = loggedInput
            await fsPromises.appendFile('./logs/log.txt', `log :: ${date} :: ${loggedMessage} \n`)
        }
        catch (err) {
            console.err(err);
        }
    }

    if (logTypes.includes(`${logLevel}`)) {
        try {
            let date = new Date().toUTCString()
            let loggedMessage = loggedInput
            await fsPromises.appendFile('./logs/log.txt', `${logLevel} :: ${date} :: ${loggedMessage} \n`)
            await fsPromises.appendFile(`./logs/${logLevel}.txt`, `${date} :: ${loggedMessage} \n`)
        }
        catch (err) {
            console.err(err);
        }
    }
}

export const logErr = async (loggedInput) => {
    await logging(loggedInput, 'error');
}

export const logInfo = async (loggedInput) => {
    await logging(loggedInput, 'info');
}

export const logWarn = async (loggedInput) => {
    await logging(loggedInput, 'warn');
}