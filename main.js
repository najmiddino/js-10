let a = +prompt('birinchi sonni kiriting')
let b = prompt('ikkinchi sonni kiriting')


function number(){
    if (a < b) {
        alert(` eng katta son:${b}  ` )   
    } else if (b < a){
        alert(` eng katta son:${a} `)
    } else if (b = a) {
        alert(`ikkala son ham birhil`)
    }
}


number()