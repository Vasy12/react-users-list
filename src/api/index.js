/**
 *
 * @param {RequestInfo} input
 * @param {RequestInit} [info]
 */
const loadJson = async (input, info) => {
  const response = await fetch(input, info);
  return await response.json();
};

/**
 *
 * @param {RequestInfo} [input]
 * @returns {object[]}
 */
export const getUsers = async (input = '/users-data.json') =>
  (await loadJson(input)).map(u => ({
    ...u,
    isSelected: false,
    isDeleted: false,
  }));
