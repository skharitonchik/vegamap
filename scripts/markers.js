/**
 * latitude[lat] - широта
 * longitude[lon] - долгота
 name: '',
 geo: [{
        latitude: 53,
        longitude: 27,
        address: '',
        timeOfWork: '',
        phones: [''],
    }],
 links: ['']
 * @type {*[]}
 */
let MARKERS = [{
    name: 'Супкультура',
    geo: [{
        latitude: 53.90956,
        longitude: 27.5807,
        address: 'ул. Козлова, 5',
        timeOfWork: '11.00-21.00',
        phones: ['+375 (29) 175-01-01'],
    }, {
        latitude: 53.86144,
        longitude: 27.47989,
        address: 'Пр-т Дзержинского, 104',
        timeOfWork: '10.00-20.00',
        phones: ['+375 (29) 176-01-01'],
    }],
    links: ['https://www.instagram.com/soupculture.minsk/',
        'https://www.facebook.com/soupculture.by',
        'https://vk.com/soupcultureby']
}, {
    name: 'VegaBurger',
    geo: [{
        latitude: 53.90193,
        longitude: 27.56125,
        address: 'Октябрьская площадь, 2 (подземный переход)',
        timeOfWork: '11:00–19:00',
        phones: ['+375 (29) 649-17-86'],
    }],
    links: ['https://www.instagram.com/vegaburger', 'https://vk.com/vegaburger', 'https://www.facebook.com/VegaBurgerMinsk/']
}, {
    name: 'Monkey Food',
    geo: [{
        latitude: 53.93646,
        longitude: 27.58462,
        address: 'ул. Богдановича, 128а',
        timeOfWork: '11:00–22:00',
        phones: ['+375 (33) 352-06-06', '+375 (29) 352-06-06'],
    }],
    links: ['https://www.instagram.com/monkey.food']
}, {
    name: 'OM NAMO',
    geo: [{
        latitude: 53.91950,
        longitude: 27.57444,
        address: 'ул. В.Хоружей, 13',
        timeOfWork: '11.00-23.00',
        phones: ['+375 (44) 764-78-86'],
    }],
    links: ['https://omnamo.by/',
        'https://www.instagram.com/bistroomnamo/',
        'https://www.facebook.com/bistroomnamo',
        'https://vk.com/bistroomnamo']
}, {
    name: 'Лавка «Живой край»',
    geo: [{
        latitude: 53.94272,
        longitude: 27.59756,
        address: 'улица Леонида Беды, 45',
        timeOfWork: '10:00–20:00',
        phones: ['+375 (29) 258-75-83'],
    }],
    links: ['https://www.instagram.com/zhivoikrai/']
}, {
    name: 'VEGGIE BAR',
    geo: [{
        latitude: 53.87465,
        longitude: 27.62756,
        address: 'проспект Партизанский, 52 (внутри «Чайного домика Будды»)',
        timeOfWork: '12:00–20:00',
        phones: ['+375 (29) 123-13-21'],
    }],
    links: ['https://vk.com/veggbar']
}];

let SHOPS = [{
    name: 'Vegetus',
    geo: [{
        latitude: 53.93348,
        longitude: 27.65489,
        address: 'Ул. П. Мстиславца, 24  (ст.м. Восток)',
        timeOfWork: 'Пн - сб: 10.00 - 19.00 Вск: 11.00 - 18.00',
        phones: ['+375 (29) 341-11-08']
    }, {
        latitude: 53.91948,
        longitude: 27.57783,
        address: 'Ул.В. Хоружей, 2 этаж, павильон  97',
        timeOfWork: 'Вт - Вск: 9.00 - 19.00',
        phones: ['+375 (44) 718-81-97'],
    }, {
        latitude: 53.96385,
        longitude: 27.62486,
        address: 'Гипермаркет Bigzz на пересечении ул. Мирошниченко и МКАД, Баравая 1 этаж торгового зала, стенд "Вегетарианские продукты"',
        timeOfWork: 'Пн - Вск: 10.00 - 22.00'
    }, {
        latitude: 53.87438,
        longitude: 27.62894,
        address: 'Партизанский пр-т, 54 (ст.м. Партизанская)',
        timeOfWork: 'Пн - Сб: 10.00 - 20.00  Вск: 11.00 - 18.00',
        phones: ['+375 (29) 144-89-53', '+375 (33) 342-87-98'],
    }],
    links: ['http://vegetus.by']
}];