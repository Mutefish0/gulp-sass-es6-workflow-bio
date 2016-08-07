'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var Test = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, text;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('http://hey-riddleoo.site');

                    case 2:
                        resp = _context.sent;
                        _context.next = 5;
                        return resp.text();

                    case 5:
                        text = _context.sent;

                        console.log(text);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function Test() {
        return _ref.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Test();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzBFQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ3FCLE1BQU0sMEJBQU4sQ0FEckI7O0FBQUE7QUFDUSw0QkFEUjtBQUFBO0FBQUEsK0JBRXFCLEtBQUssSUFBTCxFQUZyQjs7QUFBQTtBQUVRLDRCQUZSOztBQUdJLGdDQUFRLEdBQVIsQ0FBWSxJQUFaOztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O29CQUFlLEk7Ozs7Ozs7QUFLZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5hc3luYyBmdW5jdGlvbiBUZXN0KCl7XHJcbiAgICBsZXQgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwOi8vaGV5LXJpZGRsZW9vLnNpdGUnKVxyXG4gICAgbGV0IHRleHQgPSBhd2FpdCByZXNwLnRleHQoKVxyXG4gICAgY29uc29sZS5sb2codGV4dClcclxufVxyXG5UZXN0KClcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
