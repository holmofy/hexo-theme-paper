const { createElement } = require('inferno-create-element');

const cache = {};

module.exports = {
    cacheComponent: (clazz, getCacheId) => {
        if (typeof getCacheId !== 'function') {
            return props => createElement(clazz, props);
        } else {
            return props => {
                const cacheId = getCacheId(props);
                if (!cacheId) {
                    return createElement(clazz, props);
                }
                if (!cache[cacheId]) {
                    cache[cacheId] = createElement(clazz, props);
                }
                return cache[cacheId];
            };
        }
    }
};
