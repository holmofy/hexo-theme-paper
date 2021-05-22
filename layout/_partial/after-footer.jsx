const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');
const Fancybox = require('./fancybox');

module.exports = class extends Component {
    render() {
        const { config, page, theme, url_for } = this.props;
        const { vendors } = theme;
        const jquerySrc = vendors.jquery ? vendors.jquery : url_for('/js/jquery-3.4.1.min.js');
        return <Fragment>
            {config.disqus_shortname ? <script dangerouslySetInnerHTML={{
                __html: `var disqus_shortname = '${config.disqus_shortname}';
  ${page.permalink ? "var disqus_url = '" + page.permalink + "';" : ''}
  (function(){
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/${page.comments ? 'embed.js' : 'count.js'}';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();` }}></script> : null}
            <script src={jquerySrc}></script>
            <Fancybox {...this.props} />
            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}