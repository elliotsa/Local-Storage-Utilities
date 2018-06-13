### Simpler way to interact with Local Storage

Some quick utilities to more easily interact with the LocalStorage API.

- `save`: Takes in the `key` and `value` you want to set. Will serialize the `value`.
- `get`: Takes in the `key` and returns the `value` stored there. Will parse the `value`.
- `remove`: Takes in a `key` and deletes the `value` stored there.
- `print`: Takes in a `key` and logs the `value`.

Note: There are no default exports, just named exports.
