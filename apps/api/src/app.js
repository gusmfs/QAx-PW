'use strict';
var a17_0x3099f8 = a17_0x26af;
(function(_0x47d951, _0x46df26) {
  var _0x48875e = a17_0x26af,
    _0x3906e8 = _0x47d951();
  while (!![]) {
    try {
      var _0x5c1eb6 =
        (-parseInt(_0x48875e(0x111)) / 0x1) *
          (parseInt(_0x48875e(0x13a)) / 0x2) +
        (parseInt(_0x48875e(0x11b)) / 0x3) *
          (parseInt(_0x48875e(0x13b)) / 0x4) +
        parseInt(_0x48875e(0x133)) / 0x5 +
        (-parseInt(_0x48875e(0x130)) / 0x6) *
          (parseInt(_0x48875e(0x131)) / 0x7) +
        -parseInt(_0x48875e(0x124)) / 0x8 +
        parseInt(_0x48875e(0x12e)) / 0x9 +
        (-parseInt(_0x48875e(0x135)) / 0xa) *
          (-parseInt(_0x48875e(0x121)) / 0xb);
      if (_0x5c1eb6 === _0x46df26) break;
      else _0x3906e8['push'](_0x3906e8['shift']());
    } catch (_0x378e99) {
      _0x3906e8['push'](_0x3906e8['shift']());
    }
  }
})(a17_0x5429, 0x82e75);
function a17_0x26af(_0x3168a1, _0x4ada1a) {
  var _0x5429fe = a17_0x5429();
  return (
    (a17_0x26af = function(_0x26afa1, _0x2dd8df) {
      _0x26afa1 = _0x26afa1 - 0x111;
      var _0x1c67fd = _0x5429fe[_0x26afa1];
      return _0x1c67fd;
    }),
    a17_0x26af(_0x3168a1, _0x4ada1a)
  );
}
Object[a17_0x3099f8(0x139)](exports, a17_0x3099f8(0x132), { value: !![] });
function _interopRequireWildcard(_0x396c92) {
  var _0x3888ff = a17_0x3099f8;
  if (_0x396c92 && _0x396c92[_0x3888ff(0x132)]) return _0x396c92;
  else {
    var _0x4533c0 = {};
    if (_0x396c92 != null)
      for (var _0x3f76cf in _0x396c92) {
        Object[_0x3888ff(0x12c)][_0x3888ff(0x113)][_0x3888ff(0x11d)](
          _0x396c92,
          _0x3f76cf
        ) && (_0x4533c0[_0x3f76cf] = _0x396c92[_0x3f76cf]);
      }
    return (_0x4533c0[_0x3888ff(0x123)] = _0x396c92), _0x4533c0;
  }
}
function a17_0x5429() {
  var _0x298354 = [
    'toJSON',
    '30404LubAWF',
    'Server',
    'default',
    '1568456zCUusE',
    'exceptionHandler',
    'path',
    'env',
    'static',
    'resolve',
    './database',
    'requestHandler',
    'prototype',
    './routes',
    '7409529UWFwQC',
    '@sentry/node',
    '6PPPTPX',
    '7438991XOReUu',
    '__esModule',
    '4197205LKhLzq',
    'youch',
    '1040zicdAl',
    'middlewares',
    './config/sentry',
    'routes',
    'defineProperty',
    '1132WWzJXy',
    '27052yedhXk',
    'status',
    '1266NHnQCF',
    'FRONT_URL',
    'hasOwnProperty',
    'http',
    'errorHandler',
    'use',
    'express-async-errors',
    'app',
    'helmet',
    'init',
    '249rHVSQy',
    'json',
    'call',
    'uploads',
    'Handlers',
  ];
  a17_0x5429 = function() {
    return _0x298354;
  };
  return a17_0x5429();
}
function _interopRequireDefault(_0x4192c1) {
  var _0x24c6c3 = a17_0x3099f8;
  return _0x4192c1 && _0x4192c1[_0x24c6c3(0x132)]
    ? _0x4192c1
    : { default: _0x4192c1 };
}
require('./bootstrap');
var _express = require('express'),
  _express2 = _interopRequireDefault(_express),
  _cors = require('cors'),
  _cors2 = _interopRequireDefault(_cors),
  _helmet = require(a17_0x3099f8(0x119)),
  _helmet2 = _interopRequireDefault(_helmet),
  _youch = require(a17_0x3099f8(0x134)),
  _youch2 = _interopRequireDefault(_youch),
  _http = require(a17_0x3099f8(0x114)),
  _http2 = _interopRequireDefault(_http),
  _path = require(a17_0x3099f8(0x126)),
  _path2 = _interopRequireDefault(_path),
  _node = require(a17_0x3099f8(0x12f)),
  Sentry = _interopRequireWildcard(_node);
require(a17_0x3099f8(0x117));
var _routes = require(a17_0x3099f8(0x12d)),
  _routes2 = _interopRequireDefault(_routes),
  _sentry = require(a17_0x3099f8(0x137)),
  _sentry2 = _interopRequireDefault(_sentry);
require(a17_0x3099f8(0x12a));
class App {
  constructor() {
    var _0x3b389c = a17_0x3099f8;
    (this[_0x3b389c(0x118)] = _express2[_0x3b389c(0x123)][_0x3b389c(0x11d)](
      void 0x0
    )),
      (this['server'] = _http2[_0x3b389c(0x123)][_0x3b389c(0x122)](
        this[_0x3b389c(0x118)]
      )),
      Sentry[_0x3b389c(0x11a)](_sentry2[_0x3b389c(0x123)]),
      this[_0x3b389c(0x136)](),
      this[_0x3b389c(0x138)](),
      this[_0x3b389c(0x125)]();
  }
  [a17_0x3099f8(0x136)]() {
    var _0x253d56 = a17_0x3099f8;
    this[_0x253d56(0x118)][_0x253d56(0x116)](
      Sentry[_0x253d56(0x11f)][_0x253d56(0x12b)]()
    ),
      this[_0x253d56(0x118)]['use'](_express2[_0x253d56(0x123)]['json']()),
      this[_0x253d56(0x118)][_0x253d56(0x116)](
        _helmet2['default'][_0x253d56(0x11d)](void 0x0)
      ),
      this[_0x253d56(0x118)]['use'](
        _cors2[_0x253d56(0x123)]['call'](void 0x0, {
          origin: process[_0x253d56(0x127)][_0x253d56(0x112)],
        })
      ),
      this['app'][_0x253d56(0x116)](
        '/uploads',
        _express2[_0x253d56(0x123)][_0x253d56(0x128)](
          _path2[_0x253d56(0x123)][_0x253d56(0x129)](
            __dirname,
            '..',
            _0x253d56(0x11e)
          )
        )
      );
  }
  ['routes']() {
    var _0x2ec453 = a17_0x3099f8;
    this[_0x2ec453(0x118)]['use'](_routes2[_0x2ec453(0x123)]),
      this[_0x2ec453(0x118)][_0x2ec453(0x116)](
        Sentry[_0x2ec453(0x11f)][_0x2ec453(0x115)]()
      );
  }
  [a17_0x3099f8(0x125)]() {
    var _0x4dbe8f = a17_0x3099f8;
    this[_0x4dbe8f(0x118)][_0x4dbe8f(0x116)](
      async (_0x53b821, _0x2171c4, _0x3a2375, _0x35702f) => {
        var _0x27aaad = _0x4dbe8f;
        const _0x411abc = await new (0x0, _youch2[_0x27aaad(0x123)])(
          _0x53b821,
          _0x2171c4
        )[_0x27aaad(0x120)]();
        return _0x3a2375[_0x27aaad(0x13c)](0x1f4)[_0x27aaad(0x11c)](_0x411abc);
      }
    );
  }
}
exports[a17_0x3099f8(0x123)] = new App()['server'];
