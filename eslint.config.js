import { combineConfigs } from '@jenda/eslint-config'
import clientEslintConfig from './core/client/eslint.config.js'

export default combineConfigs(
  clientEslintConfig,
)
