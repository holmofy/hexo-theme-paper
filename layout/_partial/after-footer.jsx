const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');
const Fancybox = require('./fancybox');

module.exports = class extends Component {
    render() {
        const { index, theme, url_for } = this.props;
        const { vendors, waline } = theme;
        const jquerySrc = vendors.jquery ? vendors.jquery : url_for('/js/jquery-3.4.1.min.js');
        const walineJS = `import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';init(${JSON.stringify({ el: '#waline-comments', ...waline})});`;
        return <Fragment>
            <script src={jquerySrc}></script>
            {!index && waline.enable ? <script type="module" dangerouslySetInnerHTML={{__html:walineJS}}></script> : null}
            <Fancybox {...this.props} />
            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}
