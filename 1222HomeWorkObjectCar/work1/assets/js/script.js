var car1 = {
    name: 'Mercedes',
    model: 'ML',
    color: 'black',
    rate: '15 L/100',
    value: '2.76 BTC',
    seats: 5,
    year: 2012
};
var car2 = {
    name: 'Mercedes',
    model: 'Vito',
    color: 'white',
    rate: '12.5 L/100',
    value: '0.96 BTC',
    seats: 8,
    year: 2009
};
var car3 = {
    name: 'Audi',
    model: 'A6',
    color: 'silver',
    rate: '11.4 L/100',
    value: '0.61 BTC',
    seats: 5,
    year: 2006
};
var car4 = {
    name: 'BMW',
    model: '728',
    color: 'blue',
    rate: '13 L/100',
    value: '0.38 BTC',
    seats: 5,
    year: 1999
};
var car5 = {
    name: 'Citroen',
    model: 'C4-Picasso',
    color: 'red',
    rate: '5 L/100',
    value: '0.82 BTC',
    seats: 5,
    year: 2011
};
var car6 = {
    name: 'Citroen',
    model: 'Evasion',
    color: 'green',
    rate: '10.5 L/100',
    value: '0.4 BTC',
    seats: 7,
    year: 1997
};
var car7 = {
    name: 'Toyota',
    model: 'Auris',
    color: 'white',
    rate: '4.8 L/100',
    value: '0.61 BTC',
    seats: 4,
    year: 2010
};
var car8 = {
    name: 'Land Rover',
    model: 'Freelander',
    color: 'white',
    rate: '11 L/100',
    value: '0.46 BTC',
    seats: 5,
    year: 2003
};
var car9 = {
    name: 'Mitsubishi',
    model: 'L200',
    color: 'black',
    rate: '16 L/100',
    value: '1.1 BTC',
    seats: 5,
    year: 2009
};
var car10 = {
    name: 'Mazda',
    model: '6',
    color: 'red',
    rate: '8 L/100',
    value: '0.81 BTC',
    seats: 5,
    year: 2008
};
var garage = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];



function min(prop) {
    var value = {};
    for (var i = 0; i < garage.length; i++) {
        if (parseFloat((garage[i])[prop]) < value.value || value.value == undefined) {
            value.value = parseFloat((garage[i])[prop]);
            value.count = i;
        }
    }
    return value;
}

function max(prop) {
    var value = {};
    for (var i = 0; i < garage.length; i++) {
        if (parseFloat((garage[i])[prop]) > value.value || value.value == undefined) {
            value.value = parseFloat((garage[i])[prop]);
            value.count = i;
        }
    }
    return value;
}

function cost() {
    var value;
    var ansver = {};
    for (var i = 0; i < garage.length; i++) {
        value = parseFloat((garage[i])['value']) + parseFloat((garage[i])['rate']) * 2000 * 0.00004885;
        if (value < ansver.value || ansver.value == undefined) {
            ansver.value = value;
            ansver.count = i;
        }
    }
    return ansver;
}

var minAge = min('year');
var maxAge = max('year');
var lowPrice = min('value');
var lowRate = min('rate');
var PriceRate = cost();
var maxPrice = max('value');

console.log('Самый старый авто', (garage[minAge.count]).name, ':', minAge.value, 'Года выпуска',
    '\nСамый новый авто', (garage[maxAge.count]).name, ':', maxAge.value, 'Года выпуска',
    '\nРазница в возрасте', maxAge.value - minAge.value, 'лет',
    '\nСамый дешёвый авто', (garage[lowPrice.count]).name, ':', lowPrice.value, 'BTC',
    '\nСамый экономный авто', (garage[lowRate.count]).name, ':', lowRate.value, 'литров на 100км',
    '\nСамый выгодный авто за 10лет эксплуотации', (garage[PriceRate.count]).name, ':', (PriceRate.value).toFixed(3), 'BTC',
    '\nКоличество лет на покупку', (garage[maxPrice.count]).name, ':', maxPrice.value, 'BTC', maxPrice.value, 'Лет');
