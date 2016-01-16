import React, {Component, PropTypes} from 'react';
import Radium, {Style} from 'radium';
import { headingBlock, textBlock, blockquote, unorderedList, orderedList } from '../../styles/typography';

class Page extends Component {
  render() {
    const {children} = this.props;
    const {theme} = this.context;

    const pageStyle = {
      boxSizing: 'border-box',
      margin: `0 0 0 20px`,
      maxWidth: '64em',
      display: 'flex',
      flexFlow: 'row wrap',
      padding: `48px 0`,
      '@media (min-width: 1000px)': {
        margin: `0 30px 0 40px`
      }
    };

    return (
      <div className='cg-Page' style={pageStyle}>
        {children}
        <Style scopeSelector='.cg-Page >' rules={{
          // Text styles
          ...headingBlock(theme, 'h1', 4),
          ...headingBlock(theme, 'h2', 3),
          ...headingBlock(theme, 'h3', 2),
          ...headingBlock(theme, 'h4', 1),
          ...headingBlock(theme, 'h5'),
          ...headingBlock(theme, 'h6'),
          ...textBlock(theme, 'p'),
          ...unorderedList(theme, 'ul'),
          ...orderedList(theme, 'ol'),
          hr: {
            border: 'none',
            flexBasis: '100%',
            margin: 0,
            height: 0
          },

          // Blockquote styles
          ...blockquote(theme),
          ...headingBlock(theme, 'blockquote > h1', 4),
          ...headingBlock(theme, 'blockquote > h2', 3),
          ...headingBlock(theme, 'blockquote > h3', 2),
          ...headingBlock(theme, 'blockquote > h4', 1),
          ...headingBlock(theme, 'blockquote > h5', 1),
          ...headingBlock(theme, 'blockquote > h6', 1),
          ...textBlock(theme, 'blockquote > p', 1),
          ...unorderedList(theme, 'blockquote > ul', 1),
          ...orderedList(theme, 'blockquote > ol', 1),

          ':first-child': {
            marginTop: 0
          }
        }} />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node
};

Page.contextTypes = {
  theme: PropTypes.object.isRequired
};

export default Radium(Page);

