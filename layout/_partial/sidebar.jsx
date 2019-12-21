const { Component } = require('inferno');
const { createElement } = require('inferno-create-element');

const { cacheComponent } = require('../util/cache');

class Sidebar extends Component {
    render() {
        const { theme } = this.props;

        return (
            <aside id="sidebar" className={theme.sidebar === 'bottom' ? 'outer' : ''}>
                {theme.widgets.map(widget => createElement(require('../_widget/' + widget), this.props))}
            </aside>
        );
    }
}

module.exports = cacheComponent(Sidebar, props => {
    const { relative_link } = props.config;
    if (!relative_link) {
        return 'sidebar';
    }
    return null;
});