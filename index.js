// md，eslint-config-prettier 只能覆盖在 "extend" 字段里面，而 "rules" 字段里面的覆盖不了，也就是说如果 "rules"
// 里面有和 prettier 冲突的规则的话，那么最后就真的会冲突了，所以没办法，这里把 rules 里的提取出来作为一个 config
// 放到 "extend" 里面， 好让 prettier 能够覆盖（因为也不想自己一个一个去删除）
module.exports = {
  rules: {
    // override standard
    semi: [2, 'always'], // 行尾必须有分号,否则显示error
    'no-trailing-spaces': 0, // 结尾有没有空格无所谓
    'no-tabs': 0, // 允许出现tab
    'no-unused-vars': 1, // 只警告未使用的变量，因为有些是全局引入，不需要使用
    'no-debugger': 0, // 允许使用debugger
    'no-useless-call': 0, // 不对call，apply等调用进行无效检测
    'func-call-spacing': 0, // 函数调用的括号前允许有空格，因为有时候太多调用需要换行
    'no-unexpected-multiline': 0, // 允许表达式占用多行
    'no-empty-pattern': 0, // 允许空的表达式
    'comma-dangle': ['error', 'only-multiline'], // 多行结尾必须有逗号
    // override standard-react
    'standard/object-curly-even-spacing': 0,
    'react/no-array-index-key': 0,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 2,
    'react/no-render-return-value': 2,
    'react/no-string-refs': 2,
    'react/no-typos': 2,
    'react/no-unescaped-entities': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unsafe': 0,
    'react/no-unused-prop-types': 0,
    'react/no-unused-state': 2,
    'react/prefer-read-only-props': 2,
    'react/prop-types': [
      2,
      {
        ignore: ['match', 'styles', 'className'],
      },
    ],
    'react/react-in-jsx-scope': 2,
    'react/no-did-update-set-st': 0,
    'react/jsx-no-bind': 0,
    //    "react/sort-comp": [2, { // npx 跑起来有问题，先禁用了
    //      "order": [
    //        "static-methods",
    //        "lifecycle",
    //        "everything-else",
    //        "render"
    //      ],
    //      "groups": {
    //        "lifecycle": [
    //          "propTypes",
    //          "defaultProps",
    //          "getDefaultProps",
    //          "displayName",
    //          "contextTypes",
    //          "childContextTypes",
    //          "statics",
    //          "constructor",
    //          "state",
    //          "getInitialState",
    //          "getChildContext",
    //          "getDerivedStateFromProps",
    //          "componentWillMount",
    //          "UNSAFE_componentWillMount",
    //          "componentDidMount",
    //          "componentWillReceiveProps",
    //          "UNSAFE_componentWillReceiveProps",
    //          "shouldComponentUpdate",
    //          "componentWillUpdate",
    //          "UNSAFE_componentWillUpdate",
    //          "getSnapshotBeforeUpdate",
    //          "componentDidUpdate",
    //          "componentDidCatch",
    //          "componentWillUnmount"
    //        ]
    //      }
    //    }],
    'react/sort-prop-types': 2,
    'react/void-dom-elements-no-children': 2,
    'react/no-unknown-property': [2, { ignore: ['styleName', 'xlink:href'] }],
    'react/require-render-return': 2,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/style-prop-object': 2,
    // overide standard-jsx
    'react/jsx-indent': [2, 2], // 使用tab进行缩进
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-newline': 2,
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'always',
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { maximum: 3 }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-tag-spacing': [
      2,
      {
        beforeSelfClosing: 'always',
      },
    ],
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-sort-props': 2,
    // 这两个会报错 not found，找不到原因
    // react-hooks/rules-of-hooks: error,
    // react-hooks/exhaustive-deps: warn,
    // custom
    'key-spacing': 0,
    'jsx-quotes': [1, 'prefer-double'],
    'max-len': [2, 150, 2],
    'object-curly-spacing': [2, 'always'],
    camelcase: 0, // 不强制使用驼峰命名

    'prettier/prettier': 'error',
  },
};
