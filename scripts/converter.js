const convertLocale = {
    USD: 'en-US',
    AED: 'ar-AE',
    AFN: 'ps-AF',
    ALL: 'sq-AL',
    AMD: 'hy-AM',
    ANG: 'nl-AN',
    AOA: 'pt-AO',
    ARS: 'es-AR',
    AUD: 'en-AU',
    AWG: 'nl-AW',
    AZN: 'az-Latn-AZ',
    BAM: 'bs-Latn-BA',
    BBD: 'en-BB',
    BDT: 'bn-BD',
    BGN: 'bg-BG',
    BHD: 'ar-BH',
    BIF: 'fr-BI',
    BMD: 'en-BM',
    BND: 'ms-BN',
    BOB: 'es-BO',
    BRL: 'pt-BR',
    BSD: 'en-BS',
    BTN: 'dz-BT',
    BWP: 'en-BW',
    BYN: 'be-BY',
    BZD: 'en-BZ',
    CAD: 'en-CA',
    CDF: 'fr-CD',
    CHF: 'fr-CH',
    CLP: 'es-CL',
    CNY: 'zh-Hans-CN',
    COP: 'es-CO',
    CRC: 'es-CR',
    CUP: 'es-CU',
    CVE: 'pt-CV',
    CZK: 'cs-CZ',
    DJF: 'fr-DJ',
    DKK: 'da-DK',
    DOP: 'es-DO',
    DZD: 'ar-DZ',
    EGP: 'ar-EG',
    ERN: 'ti-ER',
    ETB: 'am-ET',
    EUR: 'fr-FR',
    FJD: 'en-FJ',
    FKP: 'en-FK',
    FOK: 'fo-FO',
    GBP: 'en-GB',
    GEL: 'ka-GE',
    GGP: 'en-GG',
    GHS: 'en-GH',
    GIP: 'en-GI',
    GMD: 'en-GM',
    GNF: 'fr-GN',
    GTQ: 'es-GT',
    GYD: 'en-GY',
    HKD: 'zh-Hant-HK',
    HNL: 'es-HN',
    HRK: 'hr-HR',
    HTG: 'fr-HT',
    HUF: 'hu-HU',
    IDR: 'id-ID',
    ILS: 'he-IL',
    IMP: 'en-IM',
    INR: 'hi-IN',
    IQD: 'ar-IQ',
    IRR: 'fa-IR',
    ISK: 'is-IS',
    JEP: 'en-JE',
    JMD: 'en-JM',
    JOD: 'ar-JO',
    JPY: 'ja-JP',
    KES: 'sw-KE',
    KGS: 'ky-KG',
    KHR: 'km-KH',
    KID: 'en-KI',
    KMF: 'ar-KM',
    KRW: 'ko-KR',
    KWD: 'ar-KW',
    KYD: 'en-KY',
    KZT: 'kk-KZ',
    LAK: 'lo-LA',
    LBP: 'ar-LB',
    LKR: 'si-LK',
    LRD: 'en-LR',
    LSL: 'st-LS',
    LYD: 'ar-LY',
    MAD: 'ar-MA',
    MDL: 'ro-MD',
    MGA: 'mg-MG',
    MKD: 'mk-MK',
    MMK: 'my-MM',
    MNT: 'mn-MN',
    MOP: 'zh-MO',
    MRU: 'ar-MR',
    MUR: 'fr-MU',
    MVR: 'dv-MV',
    MWK: 'ny-MW',
    MXN: 'es-MX',
    MYR: 'ms-MY',
    MZN: 'pt-MZ',
    NAD: 'naq-NA',
    NGN: 'ig-NG',
    NIO: 'es-NI',
    NOK: 'nb-NO',
    NPR: 'ne-NP',
    NZD: 'en-NZ',
    OMR: 'ar-OM',
    PAB: 'es-PA',
    PEN: 'es-PE',
    PGK: 'en-PG',
    PHP: 'fil-PH',
    PKR: 'ur-PK',
    PLN: 'pl-PL',
    PYG: 'es-PY',
    QAR: 'ar-QA',
    RON: 'ro-RO',
    RSD: 'sr-Cyrl-RS',
    RUB: 'ru-RU',
    RWF: 'rw-RW',
    SAR: 'ar-SA',
    SBD: 'en-SB',
    SCR: 'fr-SC',
    SDG: 'ar-SD',
    SEK: 'sv-SE',
    SGD: 'en-SG',
    SHP: 'en-SH',
    SLE: 'kri-SL',
    SLL: 'vai-Latn-SL',
    SOS: 'so-SO',
    SRD: 'nl-SR',
    SSP: 'ar-SS',
    STN: 'pt-ST',
    SYP: 'ar-SY',
    SZL: 'ss-SZ',
    THB: 'th-TH',
    TJS: 'tg-Cyrl-TJ',
    TMT: 'tk-TM',
    TND: 'ar-TN',
    TOP: 'to-TO',
    TRY: 'tr-TR',
    TTD: 'en-TT',
    TVD: 'en-TV',
    TWD: 'zh-Hant-TW',
    TZS: 'sw-TZ',
    UAH: 'uk-UA',
    UGX: 'sw-UG',
    UYU: 'es-UY',
    UZS: 'uz-Latn-UZ',
    VES: 'es-VE',
    VND: 'vi-VN',
    VUV: 'bi-VU',
    WST: 'sm-WST',
    XAF: 'fr-XAF',
    XCD: 'en-XCD',
    XDR: 'en-XDR',
    XOF: 'fr-XOF',
    XPF: 'fr-XPF',
    YER: 'ar-YE',
    ZAR: 'zu-ZA',
    ZMW: 'bem-ZM',
    ZWL: 'sn-ZW',
}

const apiKey = '2707d78539aebe1ef528a209'

function getValue(valor, fromCoin, toCoin) {
    axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCoin}`)
    .then(function (response) {
        if (response.data.erro) {
            alert('Algo deu errado!')
        }

        if (response.data.result === 'success') {
            console.log(valor, fromCoin, toCoin)
            document.querySelector('.input-you-get').value = (response.data.conversion_rates[toCoin] * valor).toLocaleString(convertLocale[fromCoin], { style: 'currency', currency: toCoin });

            document.querySelector('.value-converter').style.opacity = '1';
            document.querySelector('.value-converter-r1').textContent = `1 ${fromCoin} = ${(response.data.conversion_rates[toCoin]).toFixed(2)} ${toCoin}`;
            document.querySelector('.value-converter-r2').textContent = `1 ${toCoin} = ${(response.data.conversion_rates[fromCoin] / response.data.conversion_rates[toCoin]).toFixed(2)} ${fromCoin}`;
        }
    })
    .catch(function (error) {
        alert('Algo deu errado: ' + error)
    })
}

function execConvert() {
    const valueCoin = document.querySelector('.input-you-have').value;
    if (valueCoin !== "") {
        const moedaBase = document.querySelector('#currencySelect').value;
        const moedaConversao = document.querySelector('#currencySelect2').value;
        getValue(valueCoin, moedaBase, moedaConversao);
    }
}