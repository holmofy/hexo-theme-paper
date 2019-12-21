const { Component } = require('inferno');

const { cacheComponent } = require('../util/cache');

class MobileNav extends Component {
    render() {
        const { theme, url_for } = this.props;
        return <nav id="mobile-nav">
            {Object.keys(theme.menu).map(i => {
                return <a href={url_for(theme.menu[i])} className="mobile-nav-link">{i}</a>
            })}
        </nav>;
    }
}

module.exports = cacheComponent(MobileNav, props => {
    const { relative_link } = props.config;
    if (!relative_link) {
        return 'mobile-nav';
    }
    return null;
});