/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-xlsx-shim',
    included: function (app) {
        this._super.included(app);
        app.import(app.bowerDirectory + '/js-xlsx/dist/xlsx.js');
        app.import('vendor/xlsx.js', {
            exports: {
                XLSX: ['default']
            }
        })
    }
};
