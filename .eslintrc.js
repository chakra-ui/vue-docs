module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020
  },
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
