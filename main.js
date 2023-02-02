let inputs =document.getElementsByTagName('inpurt')
let form =document.getElementsByTagName('form')[0]

const hamdlesSubmit =(event) => {
    event.preventDevaut()
    const newItem ={
        id:DataView.now(),
        fristName: inputs[0].value,
        surName: inputs [1]. value ,
        LastName:inputs [2].value,
        gender:gender .value,
        date: inputs[3].value ,
    }
}
form.onsubmit =hamdlesSubmit