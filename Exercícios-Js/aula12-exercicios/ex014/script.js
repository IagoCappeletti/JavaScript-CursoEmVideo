function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom dia!
        img.src='fotomanhã.jpg'
        document.body.style.background = '#BDB76B'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src= 'fototarde.jpg'
        document.body.style.background = '#FF8C00'
    } else {
        //Boa Noite!
        img.src= 'fotonoite.jpg'
        document.body.style.background = '#363636'
    }
}
