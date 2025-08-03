import api from './api';

/**
 * ==============================================================================
 * FILE: /client/src/api/boards.api.js
 * PURPOSE: Contains all API functions related to project boards, lists, and cards.
 * ==============================================================================
 */

// --- Board Functions ---

/**
 * Fetches all boards accessible to the current user.
 * @returns {Promise<object>} A list of boards.
 */
const getAllBoards = () => {
  return api.get('/boards');
};

/**
 * Fetches the complete data for a single board, including its lists and cards.
 * @param {string} boardId - The ID of the board to fetch.
 * @returns {Promise<object>} The detailed board data.
 */
const getBoardById = (boardId) => {
  return api.get(`/boards/${boardId}`);
};

/**
 * Creates a new project board.
 * @param {object} boardData - { name, teamId }
 * @returns {Promise<object>} The newly created board data.
 */
const createBoard = (boardData) => {
  return api.post('/boards', boardData);
};

/**
 * Updates an existing project board.
 * @param {string} boardId - The ID of the board to update.
 * @param {object} boardData - The data to update (e.g., { name }).
 * @returns {Promise<object>} The updated board data.
 */
const updateBoard = (boardId, boardData) => {
  return api.put(`/boards/${boardId}`, boardData);
};

/**
 * Deletes a project board.
 * @param {string} boardId - The ID of the board to delete.
 * @returns {Promise<object>} A confirmation message.
 */
const deleteBoard = (boardId) => {
  return api.delete(`/boards/${boardId}`);
};

// --- List Functions ---

/**
 * Creates a new list (column) on a specific board.
 * @param {string} boardId - The ID of the board.
 * @param {object} listData - { name }
 * @returns {Promise<object>} The newly created list data.
 */
const createList = (boardId, listData) => {
    return api.post(`/boards/${boardId}/lists`, listData);
};

/**
 * Updates a list's title or order.
 * @param {string} listId - The ID of the list to update.
 * @param {object} listData - The data to update (e.g., { name, order }).
 * @returns {Promise<object>} The updated list data.
 */
const updateList = (listId, listData) => {
    return api.put(`/lists/${listId}`, listData);
};

// --- Card Functions ---

/**
 * Creates a new card (task) in a specific list.
 * @param {string} listId - The ID of the list.
 * @param {object} cardData - { title, description }
 * @returns {Promise<object>} The newly created card data.
 */
const createCard = (listId, cardData) => {
    return api.post(`/lists/${listId}/cards`, cardData);
};

/**
 * Updates a card's details.
 * @param {string} cardId - The ID of the card to update.
 * @param {object} cardData - The data to update (e.g., { title, description, dueDate }).
 * @returns {Promise<object>} The updated card data.
 */
const updateCard = (cardId, cardData) => {
    return api.put(`/cards/${cardId}`, cardData);
};

/**
 * Deletes a card.
 * @param {string} cardId - The ID of the card to delete.
 * @returns {Promise<object>} A confirmation message.
 */
const deleteCard = (cardId) => {
    return api.delete(`/cards/${cardId}`);
};


const boardsApi = {
  getAllBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
  createList,
  updateList,
  createCard,
  updateCard,
  deleteCard,
};

export default boardsApi;
