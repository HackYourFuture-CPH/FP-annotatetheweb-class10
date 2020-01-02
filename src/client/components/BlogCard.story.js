import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogCard from '../container/CommentBox/BlogCard.component';

storiesOf('BlogCard', module).add('with text', () => (
  <BlogCard
    name="blogCardLabel"
    title="make blog as cards"
    placeholder="add comment..."
    type="input"
    titleArray={['...', 'pin', 'mark as done', 'send to Trolle']}
  />
));

export default BlogCard;
