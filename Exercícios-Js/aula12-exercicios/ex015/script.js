function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
         window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
       let fsex = document.getElementsByName("radsex")
       let idade = ano - Number(fano.value)
       let genero = " "
       let img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
          genero = "Homem"
          if (idade >= 0 && idade <= 16){
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
          } else if (idade <= 21) {
            //adolecente
            img.setAttribute('src', 'foto-jovem-m.png')
          } else if (idade <= 50) {
            //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
          } else {
            //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
          }
       } else{   
          genero = "Mulher"
          if (idade >= 0 && idade <= 16){
            img.setAttribute('src', 'foto-bebe-f.png')
        } else if (idade <= 21) {
          //adolecente
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade <= 50) {
          //adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
          //idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML= `<p>Detectamos ${genero} com idade ${idade} anos.</p>`
       res.appendChild(img)
     }
 }