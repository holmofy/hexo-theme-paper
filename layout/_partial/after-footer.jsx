const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');

module.exports = class extends Component {
    render() {
        const { config, page, theme, url_for } = this.props;
        return <Fragment>
            {config.disqus_shortname ? <script dangerouslySetInnerHTML={{
                __html: `var disqus_shortname = '${config.disqus_shortname}';
  ${page.permalink ? "var disqus_url = '" + page.permalink + "';" : ''}
  (function(){
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/${ page.comments ? 'embed.js' : 'count.js'}';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();` }}></script> : null}
            <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
            {theme.fancybox ? <Fragment>
                <link rel="stylesheet" href={url_for('/fancybox/jquery.fancybox.css')} />
                <script type="text/javascript" src={url_for('/fancybox/jquery.fancybox.js')}></script>
            </Fragment> : null}

            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}