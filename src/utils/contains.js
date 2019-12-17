export const contains = ({ title }, query) => {
    const formatTitle = title.toLowerCase()
    const formatQuery = query.toLowerCase()
    if (formatTitle.includes(formatQuery)) {
        return true
    }

    return false
}
