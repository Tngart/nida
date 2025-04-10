const { FlatCompat } = require('@eslint/eslintrc');
const flatCompat = new FlatCompat();

module.exports = [...flatCompat.extends('next/core-web-vitals')];
