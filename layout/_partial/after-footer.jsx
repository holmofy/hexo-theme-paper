const { Component, Fragment } = require('inferno');

const GaugesAnalytics = require('./gauges-analytics');
const Fancybox = require('./fancybox');

module.exports = class extends Component {
    render() {
        const { config, page, theme, url_for } = this.props;
        const { vendors, valine } = theme;
        const jquerySrc = vendors.jquery ? vendors.jquery : url_for('/js/jquery-3.4.1.min.js');
        return <Fragment>
            <script src={jquerySrc}></script>
            {valine.enable ? <script dangerouslySetInnerHTML={{__html:`new Valine(${JSON.stringify({ el: '#valine-comments', ...valine})})`}}></script> : null}
            <Fancybox {...this.props} />
            <script type="text/javascript" src={url_for('/js/script.js')}></script>
            <GaugesAnalytics {...this.props} />
        </Fragment>;
    }
}