let input = document.querySelector('#input')
let message = document.querySelector('#message')


function sub(){
    if(input[0].value == ""){
        message[0].innerHTML = 'enter your name'
    } else{
        message[0].innerHTML = ''
    }


    if(input[1].value == ""){
        message[1].innerHTML = 'enter your name'
    } else{
        message[1].innerHTML = ''
    }


    if(input[2].value == ""){
        message[2].innerHTML = 'enter your name'
    } else{
        message[2].innerHTML = ''
    }
}