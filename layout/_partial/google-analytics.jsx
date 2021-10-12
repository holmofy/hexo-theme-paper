const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        if (!this.props.theme.google_analytics) {
            return null;
        }
        const script = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-H58NSPXYPF');
        `;
        return <Fragment>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-H58NSPXYPF"></script>
            <script dangerouslySetInnerHTML={{ __html: script }}></script>
        </Fragment>;
    }
}