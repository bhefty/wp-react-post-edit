import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR
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
