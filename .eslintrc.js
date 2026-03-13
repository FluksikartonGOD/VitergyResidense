export default {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: { max: 1, allowFirstLine: false },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'never', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
