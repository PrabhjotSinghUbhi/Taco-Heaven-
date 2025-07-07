export const useGitHubInfo = async () => {
    const response = await fetch(`https://api.github.com/users/PrabhjotSinghUbhi`)
    const data = await response.json()
    return data
}