const { Component } = require('inferno');

const Sidebar = require('./sidebar');
const { cacheComponent } = require('../util/cache');

class Footer extends Component {
    render() {
        const { config, theme, date, __ } = this.props;
        const { footer } = theme;
        return <footer id="footer">
            {theme.sidebar === 'bottom' ? <Sidebar {...this.props} /> : null}
            <div className="outer">
                <div id="footer-info" className="inner">
                    <p>
                        {footer.beian.enable ? <a href="https://beian.miit.gov.cn/" target="_blank">{footer.beian.icp}</a> : null}
                        <i class="far fa-copyright"></i>
                        {footer.since} ~ {date(new Date(), 'YYYY')}
                        &nbsp;{config.author || config.title}
                    </p>
                    {footer.power_by ? <p>
                        {__('powered_by')}
                        &nbsp;<a href="http://hexo.io/" target="_blank">Hexo</a>
                        <i class="fas fa-angle-right"></i>
                        {__('theme_by')}
                        &nbsp;<a href="https://github.com/holmofy/hexo-theme-paper">paper</a>
                    </p> : null}
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