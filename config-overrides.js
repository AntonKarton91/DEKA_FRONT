const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@reducers': 'src/reducers',
        '@actions': 'src/actions',
        '@tools': 'src/tools',
    })(config)
    return config;
}