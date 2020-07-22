// https://eslint.org/docs/user-guide/configuring
/**
 * @file Eslint配置文件
 * @author caoshitong <caoshitong@moretickets.com>
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    node: true,
  },
  
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/strongly-recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],

  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './cli/devconfig.js'),
      },
    },
  },

  globals: {
    vue: true,
    require: true,
    APP_ENV: true,
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [1, 'single'], // 单引号
    semi: ['error', 'always'], // 结尾必须
    curly: 'error', // 不允许省略花括号 错误示例 if (a === 0) a++; 正确示例: if (a === 0) { a++ };
    eqeqeq: [1, 'always'], // 强制使用 === 和 !==
    'no-extra-label': 'error', // 禁用不必要的标签
    'default-case': 'error', // switch 必须写 default
    'no-empty-function': 'error', // 禁止空函数
    'no-useless-return': 'error', // 禁止多于的 return
    'block-spacing': 'error', // 括号/花括号前后有空格
    'brace-style': 'error', // 定义函数 花括号之后换行
    camelcase: 'off', // 使用驼峰命名方式
    indent: ['error', 2, { 'SwitchCase': 1 }], // 两个空格的缩进
    'no-unneeded-ternary': 'error', // 禁止可以表达为更简单结构的三元操作符
    'space-before-function-paren': 'error', // 禁止方法左括号前有空格
    'space-infix-ops': 'error', // 运算符周围需要空格
    'arrow-parens': ['error','as-needed'], // 箭头函数参数必须使用括号圈起来
    'no-confusing-arrow': ['error', { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-duplicate-imports': ['error', { includeExports: true }], // 禁止重复 import
    'no-var': 'error', // 强制使用 let / const 替换 var
    'object-shorthand': ['error', 'always'], // 使用简写 例: foo: { x: x }  ==>  foo: { x }
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 除了 for 循环 其他地方禁止使用 一元运算 (++ / --)
    // allow debugger during development
    'max-len': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    'object-curly-newline': ['error', {'consistent': true }],
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    // https://github.com/vuejs/eslint-plugin-vue/blob/v6.2.2/docs/rules/README.md
    'vue/max-attributes-per-line': ['error', {
      singleline: 8,
      multiline: {
        max: 8,
        allowFirstLine: false,
      },
    }],
    'vue/require-prop-types': 'off',
    'vue/name-property-casing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
