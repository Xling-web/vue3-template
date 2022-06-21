module.exports = {
    rules: {
      '@typescript-eslint/no-var-requires': 0
    },
    overrides: [
      {
        files: ['src/views/**/*.vue'],
        rules: {
          'vue/multi-word-component-names': 0,
        },
      },
    ]
}