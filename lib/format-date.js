const checkDate = {
    "12-24": "平安夜",
    "12-25": "圣诞节",
    "12-31": "跨年夜",
    "1-1": "元旦节",
    "1-5": "小寒",
    "1-6": "腊月",
    "1-20": "大寒",
    "2-4": "除夕",
    "2-5": "春节"
}
function check(key) {
    if(key in checkDate)
        return true
    return false
}
function getFestival(key) {
    return checkDate[key]
}

module.exports = () => {
    const date = new Date()
    const month = date.getMonth()+1
    const day = date.getDate()
    const key = month+'-'+day
    if(check(key)){
        const festival = getFestival(key)
        return `${month}月${day}日，${festival}`
    }
    return `${month}月${day}日`
}