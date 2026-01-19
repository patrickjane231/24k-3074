const input=document.querySelector('.password')
const copyIcon=document.querySelector('.copy')
const generate=document.querySelector('.generate')
const alert=document.querySelector('.alert-container')

generate.addEventListener('click',(e)=>{
    createPassword()
})

copyIcon.addEventListener('click',(e)=>{
    input.select()
    input.setSelectionRange(0,9999)
    navigator.clipboard.writeText(input.value)
    alert.classList.remove('alert-container')
    alert.classList.add('active')
    alert.innerHTML=input.value+' '+'  copied!'
    
    setTimeout(()=>{
        alert.classList.remove('active')
        alert.classList.add('alert-container')
        alert.innerHTML+=''
},2000)

})


function createPassword(){
    const string='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_][/~'
    let password=''
    for(let i=0 ;i<14 ; i++){
        const randomChar=Math.floor(Math.random()*string.length)
        password+=string[randomChar]
    }

    console.log(password)
    input.value=password
}