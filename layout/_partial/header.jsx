const { Component } = require('inferno');

const { cacheComponent } = require('../util/cache');

class Header extends Component {
    render() {
        const { config, theme, url_for, search_form, __ } = this.props;

        return (
            <header id="header">
                <div id="header-outer" className="outer">
                    <div id="header-inner" className="inner">
                        <nav id="main-nav">
                            <a id="main-nav-toggle" className="nav-icon"><i class="fas fa-bars"></i></a>
                            {Object.keys(theme.menu).map(i => {
                                return <a className="main-nav-link" href={url_for(theme.menu[i])}>{i}</a>
                            })}
                        </nav>
                        <nav id="sub-nav">
                            {theme.github ? <a id="nav-github-link" className="nav-icon" href={url_for(theme.github)} title="Github"><i class="fas fa-github" /></a> : null}
                            {theme.rss ? <a id="nav-rss-link" className="nav-icon" href={url_for(theme.rss)} title={__('rss_feed')}><i class="fa fa-rss" /></a> : null}
                            <a id="nav-search-btn" className="nav-icon" title={__('search')}><i class="fas fa-search" /></a>
                        </nav>
                        <div id="search-form-wrap" dangerouslySetInnerHTML={{ __html: search_form({ button: '<i class="fas fa-search"></i>' }) }}>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

module.exports = cacheComponent(Header, props => {
    const { relative_link } = props.config;
    if (!relative_link) {
        return 'header';
    }
    return null;
});
