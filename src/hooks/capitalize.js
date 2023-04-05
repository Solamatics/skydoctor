

export const capitalize = (string) =>{
    if(string.length===0)return string
    if(string.length===1)return string.toUpperCase()
    let array = string.split(' ')
    let newString='';
    array.map(item=>{
        if(!!item)  newString+=item[0].toUpperCase() +''+ item.slice(1).toLowerCase()+' '
    })
    return newString.trim()
}
