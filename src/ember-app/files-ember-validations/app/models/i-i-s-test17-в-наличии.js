import {
  defineNamespace,
  defineProjections,
  Model as ВНаличииMixin
} from '../mixins/regenerated/models/i-i-s-test17-в-наличии';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВНаличииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
