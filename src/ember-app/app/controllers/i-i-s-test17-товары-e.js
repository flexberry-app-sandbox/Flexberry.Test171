import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-test17-товары-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-test17-в-наличии+местоВыдачи':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'адрес',
            required: true,
            relationName: 'местоВыдачи',
            projection: 'МестоВыдачиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
