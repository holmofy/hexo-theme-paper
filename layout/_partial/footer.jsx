const { Component } = require('inferno');

const Sidebar = require('./sidebar');
const { cacheComponent } = require('../util/cache');

class Footer extends Component {
    render() {
        const { config, theme, date, __ } = this.props;
        return <footer id="footer">
            {theme.sidebar === 'bottom' ? <Sidebar {...this.props} /> : null}
            <div className="outer">
                <div id="footer-info" className="inner">
                    <span dangerouslySetInnerHTML={{
                        __html: `&copy;${date(new Date(), 'YYYY')} ${config.author || config.title} ${__('powered_by')} `
                    }}></span>
                    <a href="http://hexo.io/" target="_blank">Hexo</a>
                </div>
            </div>
        </footer>;
    }
}

module.exports = cacheComponent(Footer, props => {
    const { relative_link } = props.config;
    if (!relative_link) {
        return 'footer';
    }
    return null;
});