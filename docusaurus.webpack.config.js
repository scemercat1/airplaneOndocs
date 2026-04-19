// @ts-check

/**
 * Webpack config override for Docusaurus 3.10.0.
 *
 * Docusaurus's @docusaurus/bundler passes options that are invalid in
 * webpack 5's ProgressPlugin schema (`name`, `color`, `reporters`,
 * `reporter`). This override intercepts the ProgressPlugin instances
 * and strips those invalid options so the build can proceed.
 *
 * @param {import('webpack').Configuration} config
 * @returns {import('webpack').Configuration}
 */
function webpackConfigOverride(config) {
  if (!Array.isArray(config.plugins)) {
    return config;
  }

  // Valid webpack 5 ProgressPlugin options (subset we want to keep).
  const VALID_PROGRESS_PLUGIN_KEYS = new Set([
    'activeModules',
    'dependencies',
    'dependenciesCount',
    'entries',
    'handler',
    'modules',
    'modulesCount',
    'percentBy',
    'profile',
  ]);

  // Invalid options that @docusaurus/bundler incorrectly passes.
  const INVALID_KEYS = ['name', 'color', 'reporters', 'reporter'];

  config.plugins = config.plugins.map((plugin) => {
    if (!plugin || typeof plugin !== 'object') {
      return plugin;
    }

    // Identify ProgressPlugin instances by constructor name.
    const ctorName =
      plugin.constructor && plugin.constructor.name;
    if (ctorName !== 'ProgressPlugin') {
      return plugin;
    }

    // Access the options stored on the plugin instance.
    const opts = /** @type {any} */ (plugin).options;
    if (!opts || typeof opts !== 'object') {
      return plugin;
    }

    const hasInvalidKey = INVALID_KEYS.some((k) => k in opts);
    if (!hasInvalidKey) {
      return plugin;
    }

    // Rebuild options keeping only the valid keys.
    /** @type {Record<string, unknown>} */
    const cleanOpts = {};
    for (const key of Object.keys(opts)) {
      if (VALID_PROGRESS_PLUGIN_KEYS.has(key)) {
        cleanOpts[key] = opts[key];
      }
    }

    // Replace the options on the existing instance in-place so that
    // the plugin's apply() method still works correctly.
    /** @type {any} */ (plugin).options = cleanOpts;

    return plugin;
  });

  return config;
}

module.exports = webpackConfigOverride;
