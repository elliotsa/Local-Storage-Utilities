const saveAt = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const fetchThis = key => JSON.parse(localStorage.getItem(key));

const deleteThis = key => localStorage.removeItem(key);

export default {
  saveAt,
  fetchThis,
  deleteThis,
};
