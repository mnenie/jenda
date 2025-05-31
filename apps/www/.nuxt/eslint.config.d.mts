import type { FlatConfigComposer } from "../../../node_modules/.pnpm/eslint-flat-config-utils@2.0.1/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../../../node_modules/.pnpm/@nuxt+eslint-config@1.3.1_@vue+compiler-sfc@3.5.13_eslint-plugin-format@0.1.3_eslint@9.14.0_j_waqopfj4pc3jplmhrobifxemsa/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../../../node_modules/.pnpm/@nuxt+eslint-config@1.3.1_@vue+compiler-sfc@3.5.13_eslint-plugin-format@0.1.3_eslint@9.14.0_j_waqopfj4pc3jplmhrobifxemsa/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }