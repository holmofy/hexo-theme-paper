const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { theme } = this.props;

        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('wechat')}</h3>
                <div className="widget wechat">
                    <img src={theme.wechat}/>
                </div>
            </div>
        );
    }
}