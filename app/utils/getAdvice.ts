export const getAdvice = async () => {
    const data = await fetch('https://api.adviceslip.com/advice', { cache: "no-store" }).then(res => res.json())
    return data
}