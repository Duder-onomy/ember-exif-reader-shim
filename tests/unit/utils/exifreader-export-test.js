import { test, module } from 'qunit';
import exifreader from 'exifreader';

module('Unit | exifreader exports');

test('Exifreader exports', (assert) => {
  assert.ok(exifreader, 'exifreader exports an object');
});
