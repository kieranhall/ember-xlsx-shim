import { module, test } from 'qunit';
import XLSX from 'xlsx';

module('XLSX as an ES6 module');

test('it works', function(assert) {
    assert.ok(XLSX);
});