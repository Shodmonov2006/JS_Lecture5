//////////Существует четыре способа создания объекта даты.

//1 new Date()
function date1 () {
    let x  = new Date()
    return x.getMilliseconds()
}
console.log(date1());


//2 new Date(Date string)
function date2 () {
    let x = new Date('2006/10/10')
    return x.getDay()
}
console.log(date2());


//3 new Date(milliseconds)
function date3 () {
    return new Date(2000)
}
console.log(date3());