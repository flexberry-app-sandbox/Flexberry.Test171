import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная.caption'),
          title: i18n.t('forms.application.sitemap.главная.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.справочники.caption'),
            title: i18n.t('forms.application.sitemap.главная.справочники.title'),
            children: [{
              link: 'i-i-s-test17-товары-l',
              caption: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-test17-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-test17-товары-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-test17-место-выдачи-l',
              caption: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-test17-место-выдачи-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.справочники.i-i-s-test17-место-выдачи-l.title'),
              icon: 'folder',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.оповещение.caption'),
            title: i18n.t('forms.application.sitemap.главная.оповещение.title'),
            children: [{
              link: 'i-i-s-test17-оповещения-l',
              caption: i18n.t('forms.application.sitemap.главная.оповещение.i-i-s-test17-оповещения-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оповещение.i-i-s-test17-оповещения-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.caption'),
            title: i18n.t('forms.application.sitemap.главная.оформление-заказа.title'),
            children: [{
              link: 'i-i-s-test17-контрагент-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-контрагент-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-test17-продавец-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-продавец-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-продавец-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-test17-заказы-l',
              caption: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-заказы-l.caption'),
              title: i18n.t('forms.application.sitemap.главная.оформление-заказа.i-i-s-test17-заказы-l.title'),
              icon: 'folder open',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})