import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test17-заказы', 'Unit | Serializer | i-i-s-test17-заказы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test17-заказы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test17-статусы',

    'model:i-i-s-test17-в-наличии',
    'model:i-i-s-test17-заказы',
    'model:i-i-s-test17-контрагент',
    'model:i-i-s-test17-место-выдачи',
    'model:i-i-s-test17-оповещения',
    'model:i-i-s-test17-продавец',
    'model:i-i-s-test17-состав-заказа',
    'model:i-i-s-test17-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
