const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { index, theme, url_for } = this.props;
        const { vendors, waline } = theme;
        const walineJS = index?`import { pageviewCount } from 'https://unpkg.com/@waline/client@v3/dist/pageview.js';pageviewCount(${JSON.stringify({update:false,...waline})});`
            :`import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';init(${JSON.stringify({ el:'#waline-comments',pageview:true, ...waline})});`;
        return waline.enable ? <script type="module" dangerouslySetInnerHTML={{__html:walineJS}}></script> : null;
    }
}
