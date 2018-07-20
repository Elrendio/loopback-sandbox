'use strict'
module.exports = function (Model, options) {
  Model.settings.forceId = false
  Model.settings.idInjection = false
  Model.defineProperty('id', { 'id': true, type: 'string', required: true })
}
