module.exports = {
    // time in seconds
    waitFor(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => [
                resolve(resolve)
            ], time * 1e3)
        })
    }
}