
let count = 0

function acender(){
    let img = document.getElementById('img')
    let txt = document.getElementById('btn')

    if(img.className === 'off'){
        img.src = 'img/luz_acesa.png'
        img.className = 'on'
        document.getElementById('btn').innerHTML = "Desligar"
        txt.className = 'turn_off'
    }

    else{
        if(img.className === 'on'){
            img.src = 'img/luz.png'
            img.className = 'off'
            document.getElementById('btn').innerHTML = "Ligar"
            txt.className = 'turn_on'
        }
    }
    count++;
    console.log(count)
    if(count == 5){
        alert("Ops! Sua lapanda queimou ;-;")
        img.src = 'img/luz.png'
        img.className = 'off'
        bck.className = 'light'
        back.className = 'bck_off'
        document.getElementById('btn').innerHTML = "Trocar Lampada"
        btn.addEventListener("click", function() {
            location.reload();
        })
    }
}
