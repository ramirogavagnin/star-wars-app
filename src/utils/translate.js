const genderTranslate = gender => {
    switch (gender) {
        case 'male':
            return 'Masculino'
            break
        case 'female':
            return 'Femenino'
            break
        case 'none':
            return 'Androide'
            break
        case 'hermaphrodite':
            return 'Hermafrodita'
            break
        case 'n/a':
            return 'No aplica'
            break
        default:
            return gender
            break
    }
}

const massTranslate = mass => {
    switch (mass) {
        case 'unknown':
            return 'desconocido'
            break
        default:
            return mass + ' kg'
            break
    }
}

const heightTranslate = height => {
    switch (height) {
        case 'unknown':
            return 'desconocida'
            break
        default:
            return height + ' cm'
            break
    }
}

const eyeColorTranslate = eyeColor => {
    switch (eyeColor) {
        case 'blue':
            return 'Azul'
            break
        case 'dark':
            return 'oscuros'
            break
        case 'black':
            return 'Negros'
            break
        case 'orange':
            return 'Anaranjados'
            break
        case 'white':
            return 'Blancos'
            break
        case 'green, yellow':
            return 'verde, Amarillo'
            break
        case 'gold':
            return 'Dorados'
            break
        case 'pink':
            return 'Rosados'
            break
        case 'red, blue':
            return 'Rojo, Azul'
            break
        case 'hazel':
            return 'Avellana'
            break
        case 'blue-gray':
            return 'Azul Claro'
            break
        case 'yellow':
            return 'Amarillo'
            break
        case 'red':
            return 'Rojo'
            break
        case 'brown':
            return 'Castaño'
            break
        case 'unknown':
            return 'desconocido'
            break
        default:
            return eyeColor
            break
    }
}

export { genderTranslate, eyeColorTranslate, massTranslate, heightTranslate }
