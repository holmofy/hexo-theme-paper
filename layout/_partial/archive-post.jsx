const { Component } = require('inferno');

const Date = require('./post/date');
const Title = require('./post/title');

module.exports = class extends Component {
    render() {
        const { layout } = this.props.post;
        return <article className={`archive-article archive-type-${layout}`}>
            <div className="archive-article-inner">
                <header className="archive-article-header">
                    <Date {...this.props} className='archive-article-date' date_format='MMM D' />
                    <Title {...this.props} className='archive-article-title' />
                </header>
            </div>
        </article>;
    }
}