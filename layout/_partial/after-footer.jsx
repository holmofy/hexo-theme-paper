const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');
const Fancybox = require('./fancybox');

module.exports = class extends Component {
    render() {
        const { index, theme, url_for } = this.props;
        const { vendors, waline } = theme;
        const jquerySrc = vendors.jquery ? vendors.jquery : url_for('/js/jquery-3.4.1.min.js');
        const walineJS = index?`import { pageviewCount } from 'https://unpkg.com/@waline/client@v3/dist/pageview.js';pageviewCount(${JSON.stringify({update:false,...waline})});`
            :`import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';init(${JSON.stringify({ el:'#waline-comments',pageview:true, ...waline})});`;
        return <Fragment>
            <script src={jquerySrc}></script>
            {waline.enable ? <script type="module" dangerouslySetInnerHTML={{__html:walineJS}}></script> : null}
            <Fancybox {...this.props} />
            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}
