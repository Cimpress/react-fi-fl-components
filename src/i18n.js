import i18n from 'i18next';

const en = require('./locales/en-US/react-fulfillers.json');
const de = require('./locales/de-DE/react-fulfillers.json');
const fr = require('./locales/fr-FR/react-fulfillers.json');
const it = require('./locales/it-IT/react-fulfillers.json');
const nl = require('./locales/nl-NL/react-fulfillers.json');
const ja = require('./locales/ja-JP/react-fulfillers.json');
const zh = require('./locales/zh-CN/react-fulfillers.json');

let i18n_instance = null;

function getI18nInstance() {

    if ( !i18n_instance ) {
        i18n_instance = i18n.createInstance();

        i18n_instance
            .init({
                fallbackLng: 'en',
                resources: {
                    en: { translations: en },
                    eng: { translations: en },
                    de: { translations: de },
                    deu: { translations: de },
                    fr: { translations: fr },
                    fra: { translations: fr },
                    it: { translations: it },
                    ita: { translations: it },
                    nl: { translations: nl },
                    nld: { translations: nl },
                    ja: { translations: ja },
                    jpn: { translations: ja },
                    zh: { translations: zh },
                    chi: { translations: zh },
                    zho: { translations: zh },
                },

                ns: ['translations'],
                defaultNS: 'translations',

                debug: false,

                interpolation: {
                    escapeValue: false, // not needed for react!!
                },

                react: {
                    wait: true
                }
            });
    }

    return i18n_instance;
}

export {
    getI18nInstance
};
