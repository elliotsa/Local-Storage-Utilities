const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const get = key => JSON.parse(localStorage.getItem(key));

const remove = key => localStorage.removeItem(key);

const print = key => console.log(get(key));

const map = (key, cb) => {
  const tmp = get(key);
  let result;
  if (Array.isArray(tmp)) {
    result = tmp.map(cb);
  } else {
    throw new Error('The returned value is not an array');
  }
  return result;
};

export { save, get, remove, print, map };
