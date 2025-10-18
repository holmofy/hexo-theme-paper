const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');
const Fancybox = require('./fancybox');

module.exports = class extends Component {
    render() {
        const { url_for, theme } = this.props;
        const { vendors }= theme;
        const jquerySrc = vendors.jquery ? vendors.jquery : url_for('/js/jquery-3.4.1.min.js');
        return <Fragment>
            <script src={jquerySrc}></script>
            <Fancybox {...this.props} />
            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            {theme.vendors.swiper ? <script type="text/javascript" src={theme.vendors.swiper}></script> : null}
            {theme.mermaid?.enable ? <>
                <script src={vendors.mermaid}></script>
                <script>if (window.mermaid)  mermaid.initialize();</script>
            </> : null}
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}
