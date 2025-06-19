import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: 'Welcome to OTT!',
                about_title: 'Abouts',
                about_content: 'This is an OTT frontend project example.'
            }
        },
        ko: {
            translation: {
                welcome: 'OTT에 오신 것을 환영합니다!',
                about_title: '소개',
                about_content: '이 프로젝트는 OTT 프론트엔드 예시입니다.'
            }
        }
    },
    lng: 'ko', // 기본 언어
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});
export default i18n;