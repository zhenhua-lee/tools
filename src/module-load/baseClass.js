var id = 1;

function Base() {
    this._data = []
}

Base.prototype.register = function (str) {
    this._data.push(str);
    return id++;
}

module.exports = Base;