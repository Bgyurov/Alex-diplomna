export const currencyConverter = (currency) => {
    switch (currency) {
        case 'bgn':
            currency = 'Лв'
            break;
        case 'usd':
            currency = '$'
            break;
        case 'eur':
            currency = '€'
            break;
        default:
            break;
    }
    return currency
}

export const engineTypeConverter = (etype) => {
    switch (etype) {
        case 'benzin':
            etype = 'Бензин'
            break;
        case 'dizel':
            etype = 'Дизел'
            break;
        case 'hybrid':
            etype = 'Хибрид'
            break;
        case 'electric':
            etype = 'Електричество'
            break
        case 'puig hybrid':
            etype = 'Plug in хибрид'
            break;
        default:
            break;
    }
    return etype
}
export const transmitionConverter = (transmition) => {
    switch (transmition) {
        case 'manual':
            transmition = 'Ръчна'
            break;
        case 'automatic':
            transmition = 'Автоматична'
            break;
        case 'semiAutomatic':
            transmition = 'Полуавтоматична'
            break;

        default:
            break;
    }
    return transmition
}

export const yearConverter = (date) => {
    if(date == undefined){
        return date
    }
    let [year,month] = date.split('-')
    return `${month}/${year}`
}