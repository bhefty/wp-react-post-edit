import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  EDIT_TITLE,
  EDIT_TITLE_SUCCESS,
  EDIT_TITLE_ERROR
} from './constants'

/**
 * Load the recent posts, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_RECENT_POSTS
 */
export function loadRecentPosts () {
  return {
    type: LOAD_RECENT_POSTS
  }
}

/**
 * Dispatched when the recent posts are loaded by the request saga
 *
 * @param {array} recentPosts The recent posts data
 *
 * @return {object} An action object with a type of LOAD_RECENT_POSTS_SUCCESS passing the recent posts
 */
export function recentPostsLoaded (recentPosts) {
  return {
    type: LOAD_RECENT_POSTS_SUCCESS,
    recentPosts
  }
}

/**
 * Dispatched when loading the recent posts fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_RECENT_POSTS_ERROR passing the error
 */
export function recentPostsLoadingError (error) {
  return {
    type: LOAD_RECENT_POSTS_ERROR,
    error
  }
}

/**
 * Delete the post, this action starts the request saga
 * @param {string} ID of post to delete
 *
 * @return {object} An object with a type of DELETE_POST and ID of post to delete
 */
export function deletePost (id) {
  return {
    type: DELETE_POST,
    id
  }
}

/**
 * Dispatched when the post is successfully deleted by the request saga
 *
 * @param {string} msg The response message
 *
 * @return {object} An action object with a type of DELETE_POST_SUCCESS
 */
export function deletePostSuccess (msg) {
  return {
    type: DELETE_POST_SUCCESS,
    msg
  }
}

/**
 * Dispatched when deleting the post fails
 *
 * @param {object} error The error
 *
 * @return {object} An action object with a type of DELETE_POST_ERROR
 */
export function deletePostError (error) {
  return {
    type: DELETE_POST_ERROR,
    error
  }
}

/**
 * Dispatched when changing the title of a post
 *
 * @param {string} text The text to change the title to
 *
 * @return {object} An action object with a type of EDIT_TITLE
 */
export function editTitle (id, text) {
  return {
    type: EDIT_TITLE,
    id,
    text
  }
}

/**
 * Dispatched when the post title is successfully edited by the request saga
 *
 * @param {string} msg The response message
 *
 * @return {object} An action object with a type of EDIT_TITLE_SUCCESS
 */
export function editTitleSuccess (msg) {
  return {
    type: EDIT_TITLE_SUCCESS,
    msg
  }
}

/**
 * Dispatched when editing the post title fails
 *
 * @param {object} error The error
 *
 * @return {object} An action object with a type of EDIT_TITLE_ERROR
 */
export function editTitleError (error) {
  return {
    type: EDIT_TITLE_ERROR,
    error
  }
}
