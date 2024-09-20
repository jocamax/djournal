
export function formatDate(date) {
    return new Date(date).toLocaleString().split(",")[0]
}