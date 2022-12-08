let agora = new Date()
let diaSemana = agora.getDay()

    switch(diaSemana){
        case 0: 
            console.log('Domingou')
            break
        case 1:
            console.log('Segundou')
            break
        case 2: 
            console.log('Terçou')
             break
         case 3: 
            console.log('Quartou')
            break
         case 4: 
             console.log('Quintou')
            break
        case 5: 
            console.log('SEXTOU')
            break   
        case 6: 
            console.log('Sábadou')     
            break
        default:
            console.log('[ERRO] Dia invalido!')
            break
    }