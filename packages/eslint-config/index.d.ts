declare module '@jenda/eslint-config' {
  declare type Eslint = (
    options?: import('@antfu/eslint-config').OptionsConfig
      & import('@antfu/eslint-config').TypedFlatConfigItem,
    ...userConfigs: import('@antfu/eslint-config').Awaitable<
      | import('@antfu/eslint-config').FlatConfigComposer<any, any>
      | import('@antfu/eslint-config').TypedFlatConfigItem
      | import('@antfu/eslint-config').TypedFlatConfigItem[]
      | Linter.Config[]
    >[]
  ) => import('@antfu/eslint-config').FlatConfigComposer<
    import('@antfu/eslint-config').TypedFlatConfigItem,
    import('@antfu/eslint-config').ConfigNames
  >

  const jendaEslintConfig: Eslint
  export default jendaEslintConfig
}
