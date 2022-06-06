export const getSessionArr = () => {
    const sessionStr = sessionStorage.getItem('session')
    const _sessionStr = sessionStr as string
    return JSON.parse(_sessionStr)
}
