function exibir(){

    var txtNome = document.getElementById('txtNome')
    var numav1 = document.getElementById('numav1')
    var numav2 = document.getElementById('numav2')
    var numav3 = document.getElementById('numav3')
    var outSituacao = document.getElementById('outSituacao')

    var nome = txtNome.value
    var av1 = Number(numav1.value)
    var av2 = Number(numav2.value)
    var av3 = Number(numav3.value)

    //Colocando a nota da av3 na menor nota
    if(av1 < av3){
        av1 = av3
    }
    else if(av2 < av3){
        av2 = av3
    }

    media = (av1 + av2) / 2
    
    if(media >= 6 && av1 >= 4 && av2 >= 4){
        outSituacao.textContent = `Parabéns ${nome}, você foi aprovado(a)`
    }
    else{
        outSituacao.textContent = `${nome}, você foi reprovado(a)`
    }
}

var btnExibir = document.getElementById('btnExibir');
btnExibir.addEventListener('click', exibir);