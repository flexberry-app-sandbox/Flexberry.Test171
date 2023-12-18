import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОповещенияMixin
} from '../mixins/regenerated/models/i-i-s-test17-оповещения';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОповещенияMixin, Validations, {
});

defineProjections(Model);

export default Model;
