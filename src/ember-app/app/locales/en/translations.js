import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest17ЗаказыLForm from './forms/i-i-s-test17-заказы-l';
import IISTest17КонтрагентLForm from './forms/i-i-s-test17-контрагент-l';
import IISTest17МестоВыдачиLForm from './forms/i-i-s-test17-место-выдачи-l';
import IISTest17ОповещенияLForm from './forms/i-i-s-test17-оповещения-l';
import IISTest17ПродавецLForm from './forms/i-i-s-test17-продавец-l';
import IISTest17ТоварыLForm from './forms/i-i-s-test17-товары-l';
import IISTest17ЗаказыEForm from './forms/i-i-s-test17-заказы-e';
import IISTest17КонтрагентEForm from './forms/i-i-s-test17-контрагент-e';
import IISTest17МестоВыдачиEForm from './forms/i-i-s-test17-место-выдачи-e';
import IISTest17ОповещенияEForm from './forms/i-i-s-test17-оповещения-e';
import IISTest17ПродавецEForm from './forms/i-i-s-test17-продавец-e';
import IISTest17ТоварыEForm from './forms/i-i-s-test17-товары-e';
import IISTest17ВНаличииModel from './models/i-i-s-test17-в-наличии';
import IISTest17ЗаказыModel from './models/i-i-s-test17-заказы';
import IISTest17КонтрагентModel from './models/i-i-s-test17-контрагент';
import IISTest17МестоВыдачиModel from './models/i-i-s-test17-место-выдачи';
import IISTest17ОповещенияModel from './models/i-i-s-test17-оповещения';
import IISTest17ПродавецModel from './models/i-i-s-test17-продавец';
import IISTest17СоставЗаказаModel from './models/i-i-s-test17-состав-заказа';
import IISTest17ТоварыModel from './models/i-i-s-test17-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test17-в-наличии': IISTest17ВНаличииModel,
    'i-i-s-test17-заказы': IISTest17ЗаказыModel,
    'i-i-s-test17-контрагент': IISTest17КонтрагентModel,
    'i-i-s-test17-место-выдачи': IISTest17МестоВыдачиModel,
    'i-i-s-test17-оповещения': IISTest17ОповещенияModel,
    'i-i-s-test17-продавец': IISTest17ПродавецModel,
    'i-i-s-test17-состав-заказа': IISTest17СоставЗаказаModel,
    'i-i-s-test17-товары': IISTest17ТоварыModel
  },

  'application-name': 'Test17',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test17',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test17',
          title: 'Test17'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        главная: {
          caption: 'Главная',
          title: 'Главная',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-test17-товары-l': {
              caption: 'Товары',
              title: ''
            },
            'i-i-s-test17-место-выдачи-l': {
              caption: 'Место выдачи',
              title: ''
            }
          },
          оповещение: {
            caption: 'Оповещение',
            title: 'Оповещение',
            'i-i-s-test17-оповещения-l': {
              caption: 'Оповещения',
              title: ''
            }
          },
          'оформление-заказа': {
            caption: 'Оформление Заказа',
            title: 'Оформление Заказа',
            'i-i-s-test17-контрагент-l': {
              caption: 'Контрагент',
              title: ''
            },
            'i-i-s-test17-продавец-l': {
              caption: 'Продавец',
              title: ''
            },
            'i-i-s-test17-заказы-l': {
              caption: 'Заказы',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test17-заказы-l': IISTest17ЗаказыLForm,
    'i-i-s-test17-контрагент-l': IISTest17КонтрагентLForm,
    'i-i-s-test17-место-выдачи-l': IISTest17МестоВыдачиLForm,
    'i-i-s-test17-оповещения-l': IISTest17ОповещенияLForm,
    'i-i-s-test17-продавец-l': IISTest17ПродавецLForm,
    'i-i-s-test17-товары-l': IISTest17ТоварыLForm,
    'i-i-s-test17-заказы-e': IISTest17ЗаказыEForm,
    'i-i-s-test17-контрагент-e': IISTest17КонтрагентEForm,
    'i-i-s-test17-место-выдачи-e': IISTest17МестоВыдачиEForm,
    'i-i-s-test17-оповещения-e': IISTest17ОповещенияEForm,
    'i-i-s-test17-продавец-e': IISTest17ПродавецEForm,
    'i-i-s-test17-товары-e': IISTest17ТоварыEForm
  },

});

export default translations;
