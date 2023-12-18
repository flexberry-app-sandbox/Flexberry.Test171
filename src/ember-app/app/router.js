import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test17-заказы-l');
  this.route('i-i-s-test17-заказы-e',
  { path: 'i-i-s-test17-заказы-e/:id' });
  this.route('i-i-s-test17-заказы-e.new',
  { path: 'i-i-s-test17-заказы-e/new' });
  this.route('i-i-s-test17-контрагент-l');
  this.route('i-i-s-test17-контрагент-e',
  { path: 'i-i-s-test17-контрагент-e/:id' });
  this.route('i-i-s-test17-контрагент-e.new',
  { path: 'i-i-s-test17-контрагент-e/new' });
  this.route('i-i-s-test17-место-выдачи-l');
  this.route('i-i-s-test17-место-выдачи-e',
  { path: 'i-i-s-test17-место-выдачи-e/:id' });
  this.route('i-i-s-test17-место-выдачи-e.new',
  { path: 'i-i-s-test17-место-выдачи-e/new' });
  this.route('i-i-s-test17-оповещения-l');
  this.route('i-i-s-test17-оповещения-e',
  { path: 'i-i-s-test17-оповещения-e/:id' });
  this.route('i-i-s-test17-оповещения-e.new',
  { path: 'i-i-s-test17-оповещения-e/new' });
  this.route('i-i-s-test17-продавец-l');
  this.route('i-i-s-test17-продавец-e',
  { path: 'i-i-s-test17-продавец-e/:id' });
  this.route('i-i-s-test17-продавец-e.new',
  { path: 'i-i-s-test17-продавец-e/new' });
  this.route('i-i-s-test17-товары-l');
  this.route('i-i-s-test17-товары-e',
  { path: 'i-i-s-test17-товары-e/:id' });
  this.route('i-i-s-test17-товары-e.new',
  { path: 'i-i-s-test17-товары-e/new' });
});

export default Router;
