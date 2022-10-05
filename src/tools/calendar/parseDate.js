export function parseDate (text) {
    let hours, min;

    hours = text.target.value.split(':')[0]
    min = text.target.value.split(':')[1]



    if(hours.toString().length>2){
        hours = hours.slice(0,2)
    }
    if(min.toString().length>2){
        min = min.slice(0,2)
    }
    return `${hours}:${min}`


}

