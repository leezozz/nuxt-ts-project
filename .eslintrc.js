module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'no-unused-vars': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 3
      }
    ],
    camelcase: 0,

    '@typescript-eslint/no-unused-vars': 1,

    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}
