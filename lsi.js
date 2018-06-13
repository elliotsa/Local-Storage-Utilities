const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = key => JSON.parse(localStorage.getItem(key));

const remove = key => localStorage.removeItem(key);

const print = key => console.log(get(key));

export { save, get, remove, print };
