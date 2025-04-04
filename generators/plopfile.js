module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/Component.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'templates/Component.types.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
