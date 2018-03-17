import I18n from 'react-native-i18n';
import fr from './locales/fr';

I18n.fallbacks = true;

I18n.translations = {
  fr,
};

I18n.defaultLocale = 'fr';
I18n.locale = 'fr';

// const currentLocale = I18n.currentLocale();

// The method we'll use instead of a regular string
export function translate(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
