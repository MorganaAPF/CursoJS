function carregar() {
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#E1CA9A'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#BD7132'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#163F44'
    }
}
 //#E1CA9A