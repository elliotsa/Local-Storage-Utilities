import Queue from './queue.js';

const verifyArray = value =>
  Array.isArray(value)
    ? value
    : new Error('The returned value is not an array');

const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = key => JSON.parse(localStorage.getItem(key));

const remove = key => localStorage.removeItem(key);

const print = key => console.log(get(key));

const map = (key, cb) => verifyArray(get(key)).map(cb);

const queue = key => new Queue(verifyArray(get(key)));

export { save, get, remove, print, map, queue };
