module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  //extends: ESLint에 적용할 규칙을 정의하는 곳
  //나중에 정의된 옵션일수록 높은 우선순위
  //규칙무시하고 싶으면 :0하면 됨
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
