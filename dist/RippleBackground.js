"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RippleBackground = function RippleBackground(_ref) {
  var _ref$numWaves = _ref.numWaves,
    numWaves = _ref$numWaves === void 0 ? 4 : _ref$numWaves,
    _ref$rippleSize = _ref.rippleSize,
    rippleSize = _ref$rippleSize === void 0 ? 1.5 : _ref$rippleSize,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor,
    _ref$waveColor = _ref.waveColor,
    waveColor = _ref$waveColor === void 0 ? 'rgba(136, 172, 224, 0.3)' : _ref$waveColor,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 0 : _ref$zIndex,
    _ref$waveSpeed = _ref.waveSpeed,
    waveSpeed = _ref$waveSpeed === void 0 ? 800 : _ref$waveSpeed;
  var canvasRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var timeout = setTimeout(function () {
      var canvas = canvasRef.current;
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var resizeCanvas = function resizeCanvas() {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      var ripples = [];
      var mouse = {
        x: 0,
        y: 0
      };
      var Ripple = /*#__PURE__*/function () {
        function Ripple(x, y) {
          _classCallCheck(this, Ripple);
          this.x = x;
          this.y = y;
          this.radius = 0;
          this.alpha = 1;
          this.speed = Math.random() * rippleSize + 0.5;
          this.dy = -1;
          this.gravity = 0.05;
        }
        return _createClass(Ripple, [{
          key: "update",
          value: function update() {
            this.radius += this.speed;
            this.dy += this.gravity;
            this.y += this.dy;
            this.alpha -= 0.02;
          }
        }, {
          key: "draw",
          value: function draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(136, 172, 224, ".concat(this.alpha, ")");
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.closePath();
          }
        }]);
      }();
      var drawWaves = function drawWaves() {
        var waveConfigs = Array.from({
          length: numWaves
        }, function (_, i) {
          return {
            waveHeight: 10 + i * 5,
            frequency: 0.01 + i * 0.005,
            opacity: 0.15 + i * 0.05
          };
        });
        waveConfigs.forEach(function (config) {
          ctx.beginPath();
          for (var x = 0; x <= canvas.width; x += 20) {
            var y = canvas.height / 2 + config.waveHeight * Math.sin(x * config.frequency + Date.now() / waveSpeed);
            ctx.lineTo(x, y);
          }
          ctx.strokeStyle = "rgba(136, 172, 224, ".concat(config.opacity, ")");
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.closePath();
        });
      };
      canvas.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        for (var i = 0; i < 2; i++) {
          ripples.push(new Ripple(mouse.x + Math.random() * 5 - 2.5, mouse.y + Math.random() * 5 - 2.5));
        }
      });
      canvas.addEventListener('click', function (e) {
        ripples.push(new Ripple(e.clientX, e.clientY));
      });
      var _animate = function animate() {
        if (!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawWaves();
        ripples = ripples.filter(function (ripple) {
          return ripple.alpha > 0 && ripple.y < canvas.height;
        });
        ripples.forEach(function (ripple) {
          ripple.update();
          ripple.draw();
        });
        requestAnimationFrame(_animate);
      };
      _animate();
      return function () {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, 100);
    return function () {
      return clearTimeout(timeout);
    };
  }, [numWaves, rippleSize, backgroundColor, waveColor, waveSpeed]);
  return /*#__PURE__*/_react["default"].createElement("canvas", {
    className: "ripple-background",
    ref: canvasRef,
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: zIndex
    }
  });
};
RippleBackground.propTypes = {
  numWaves: _propTypes["default"].number,
  rippleSize: _propTypes["default"].number,
  backgroundColor: _propTypes["default"].string,
  waveColor: _propTypes["default"].string,
  zIndex: _propTypes["default"].number,
  waveSpeed: _propTypes["default"].number
};
var _default = exports["default"] = RippleBackground;