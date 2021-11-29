'use strict';


var data = require('./data.json');

function escapeRegexp(str) {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

var REPLACE_RE = RegExp(Object.keys(data).map(escapeRegexp).join('|'), 'g');

function replace_fn(match) {
  return data[match];
}

function unhomoglyph(str) {
  return str.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "").replace(/[\u200B-\u200D\uFEFF\u034F]/g, '').replace(REPLACE_RE, replace_fn).toLowerCase();
}

module.exports = unhomoglyph;
