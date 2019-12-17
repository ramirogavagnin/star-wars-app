export const get = async (endpoint, payload) => {
    try {
        let url = endpoint

        if (payload) {
            url = `${url}${payload}`
        }

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            return { data, error: null }
        } else {
            return { error: response.status }
        }
    } catch (error) {
        return { error: error.message }
    }
}
