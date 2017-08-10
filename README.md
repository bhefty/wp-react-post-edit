# WordPress Plugin - React Post Editor

<div align='center'>
<!-- Build status -->
<a href='https://circleci.com/gh/bhefty/wp-react-post' target='_blank'>
  <img src='https://circleci.com/gh/bhefty/wp-react-post.svg?style=shield' alt='Dependency Status' />
</a>
<!-- Test coverage -->
<a href='https://coveralls.io/github/bhefty/wp-react-post?branch=master' target='_blank'>
  <img src='https://coveralls.io/repos/github/bhefty/wp-react-post/badge.svg?branch=master' alt='Dependency Status' />
</a>
<!-- depedency status -->
<a href='https://david-dm.org/bhefty/wp-react-post' target='_blank'>
  <img src='https://david-dm.org/bhefty/wp-react-post/status.svg' alt='Dependency Status' />
</a>
<!-- devDepedency status -->
<a href='https://david-dm.org/bhefty/wp-react-post?type=dev' target='_blank'>
  <img src='https://david-dm.org/bhefty/wp-react-post/dev-status.svg' alt='Dependency Status' />
</a>
</div>

### Task
Write a WordPress plugin that allows you to edit the 5 most recent posts (post title only). In addition to editing the post title - you should be able to delete any of the displayed posts.

### Requirements
- [ ] The front-end of this plugin **must** be a JavaScript application written using the [React](https://facebook.github.io/react/) library.
- [ ] The application **must** include some CSS styling
- [ ] The application **must** be accessible from the WordPress admin menu
- [ ] The application **must** display the 5 most recent WordPress posts
- [ ] The application **must** support editing post titles for the displayed posts
- [ ] The application **must** support deleting any of the displayed posts
- [ ] When a post is deleted, the displayed posts **must** refresh to always keep at least 5 posts on display
- [ ] Displayed posts **must** show their [featured image](http://www.wpbeginner.com/beginners-guide/how-to-add-featured-image-or-post-thumbnails-in-wordpress/) (if available)
- [ ] **Extra credit** if the application allows changing the featured image of a displayed post

### Bonus Points
- [ ] Include unit tests
- [x] Use at least ES6 as a JavaScript version
- [ ] Leverage the latest version of [webpack](https://webpack.js.org/)