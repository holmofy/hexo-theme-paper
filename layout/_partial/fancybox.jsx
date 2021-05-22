const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { theme } = this.props;
        if (!theme.fancybox) {
            return null;
        }
        const { vendors } = theme;
        const fancybox_css = vendors.fancybox_css ? vendors.fancybox_css : url_for('/fancybox/jquery.fancybox.min.css');
        const fancybox = vendors.fancybox ? vendors.fancybox : url_for('/fancybox/jquery.fancybox.min.js');
        return <Fragment>
            <link rel="stylesheet" href={fancybox_css} />
            <script type="text/javascript" src={fancybox}></script>
        </Fragment>
    }
}
