var _typeof2 = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
    return typeof e
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  };
  !function (e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var o = i[n] = {
        exports: {
        },
        id: n,
        loaded: !1
      };
      return e[n].call(o.exports, o, o.exports, t),
      o.loaded = !0,
      o.exports
    }
    var i = {
    };
    return t.m = e,
    t.c = i,
    t.p = '',
    t(0)
  }([function (e, t, i) {
    'use strict';
    function n() {
      i(8);
      var e = i(11),
      t = i(12);
      Object.keys(t).forEach(function (i) {
        e.helper(i, t[i])
      }),
      i(14) (i(17));
      var n = i(79);
      $(document).undelegate('[_hot]', 'click').delegate('[_hot]', 'click', function (e) {
        var t = $(this).attr('_hot');
        n.pgvSendClick(t)
      })
    }
    var o = (window.tlux = i(1), i(7) ());
    o.browser.WeChat ? setTimeout(n, 100)  : n();
    var r = i(144);
    r(),
    matchMedia('(prefers-color-scheme: dark)').matches && $('html').addClass('dark')
  },
  function (e, t, i) {
    e.exports = i(2) ()
  },
  function (e, t, i) {
    'use strict';
    e.exports = function () {
      var e = i(3) ();
      return {
        action: i(4) (e),
        store: i(5) (e),
        dispatch: function () {
          e.dispatch.apply(e, arguments)
        },
        when: function (e, t, i) {
          function n() {
            s++,
            s == a && (r || (r = !0, t.apply(null, e)))
          }
          var o = 5000,
          r = !1;
          if ('string' == typeof e && (e = [
            e
          ]), t = t || function () {
          }, !(e instanceof Array && e.length)) return t();
          e = e.map(function (e) {
            if (this.store[e]) return this.store[e];
            throw new Error('store未定义:' + e)
          }, this);
          var a = e.length,
          s = 0;
          e.forEach(function (e) {
            function t(o) {
              (!i || !i.complete || i.complete && 'COMPLETE' == o) && (n(), e.removeListener('upgrade', t))
            }
            e.on('upgrade', t)
          }),
          i && i.timeout && (o = i.timeout),
          setTimeout(function () {
            r || (r = !0, t.apply(null, e))
          }, o)
        }
      }
    }
  },
  function (e, t) {
    'use strict';
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function n() {
      return Object.create(a, {
        allCallbacks: {
          value: [
          ]
        },
        callbacks: {
          value: {
          }
        }
      })
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var o = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
        }
      }
      return function (t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
      }
    }(),
    r = function () {
      function e(t) {
        i(this, e),
        this.status = s.HANDLED,
        this.fn = t
      }
      return o(e, [
        {
          key: 'invoke',
          value: function () {
            if (this.status == s.DISPATCHING) throw new Error('发现双向依赖或环形依赖');
            try {
              this.status = s.DISPATCHING,
              this.fn.apply(this, arguments)
            } finally {
              this.status = s.HANDLED
            }
          }
        }
      ]),
      e
    }(),
    a = {
      dispatch: function (e, t) {
        var i = this;
        if (!e) throw new Error('dispatch了无效数据');
        e in this.callbacks && (this.callbacks[e].forEach(function (e) {
          i.allCallbacks[e].status = s.PENDING
        }), this.callbacks['*'] && this.callbacks['*'].forEach(function (e) {
          i.allCallbacks[e].status = s.PENDING
        }), this.callbacks[e].forEach(function (n) {
          i.allCallbacks[n].invoke(e, t)
        }), this.callbacks['*'] && this.callbacks['*'].forEach(function (n) {
          i.allCallbacks[n].invoke(e, t)
        }))
      },
      on: function (e, t) {
        var i = this;
        if (e instanceof Array) {
          if (e.indexOf('*') == - 1) return void e.forEach(function (e) {
            i.on(e, t)
          });
          e = '*'
        }
        e in this.callbacks || (this.callbacks[e] = [
        ]),
        this.allCallbacks.push(new r(t));
        var n = this.allCallbacks.length - 1;
        return this.callbacks[e].push(n),
        n
      },
      off: function (e, t) {
        var i = this;
        if (!(e && e in this.callbacks)) throw new Error('action类型不存在: ' + e);
        'function' == typeof t ? this.allCallbacks.forEach(function (n, o) {
          n.fn == t && i.callbacks[e].every(function (t, n) {
            return t != o || (delete i.callbacks[e][n], !1)
          })
        })  : this.callbacks[e].every(function (n, o) {
          return n != t || (delete i.callbacks[e][o], !1)
        })
      },
      waitFor: function () {
      }
    },
    s = {
      PENDING: 'PENDING',
      DISPATCHING: 'DISPATCHING',
      HANDLED: 'HANDLED'
    };
    n.STATUS = s,
    t['default'] = n,
    e.exports = t['default']
  },
  function (e, t) {
    'use strict';
    function i(e) {
      var t = function i(t, n) {
        if (!t) throw new Error('必须指定一个action名字');
        if (!n || 'function' != typeof n) throw new Error('必须为action指定一个获取数据的流程');
        return i[t] = function (i) {
          i = i || {
          },
          n(i, function (i, n) {
            e.dispatch(t, n)
          })
        },
        i[t]
      };
      return t
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    }),
    t['default'] = i,
    e.exports = t['default']
  },
  function (e, t, i) {
    'use strict';
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function o(e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + ('undefined' == typeof t ? 'undefined' : _typeof2(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t)
    }
    function r(e) {
      var t = function i(t, n) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? function () {
        }
         : arguments[2],
        r = arguments.length <= 3 || void 0 === arguments[3] ? {
        }
         : arguments[3];
        if (!n) throw new Error('必须指定依赖的action名字');
        var a = new d(r);
        return a.__callback__key = e.on(n, function (e, t) {
          var i = o.call(a.model, e, t);
          a.emit('update', a.model),
          i ? i < 0 ? a.status = 'EMPTY' : i > 0 && (a.status = 'PARTICAL')  : a.status = 'COMPLETE',
          i < 0 && a.emit('error', i),
          a.ready = !0
        }),
        t && (i[t] = a),
        a
      };
      return t
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
        }
      }
      return function (t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
      }
    }(),
    s = function (e, t, i) {
      for (var n = !0; n; ) {
        var o = e,
        r = t,
        a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(o, r);
        if (void 0 !== s) {
          if ('value' in s) return s.value;
          var l = s.get;
          if (void 0 === l) return;
          return l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c) return;
        e = c,
        t = r,
        i = a,
        n = !0,
        s = c = void 0
      }
    };
    t['default'] = r;
    var l = i(6).EventEmitter,
    c = {
      EMPTY: 0,
      PARTICAL: 1,
      COMPLETE: 2
    },
    d = function (e) {
      function t(e) {
        var i = this;
        n(this, t),
        s(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
        this.model = e.defaults || {
        };
        var o = 'EMPTY';
        Object.defineProperty(this, 'status', {
          get: function () {
            return o
          },
          set: function (e) {
            if (c[e] > c[o]) {
              var t = o;
              o = e,
              i.emit('upgrade', e, t)
            }
          }
        });
        var r = !1;
        Object.defineProperty(this, 'ready', {
          get: function () {
            return r
          },
          set: function (e) {
            var t = r;
            r = e,
            t != e && e > 0 && i.emit('ready', e)
          }
        }),
        this.setMaxListeners(50)
      }
      return o(t, e),
      a(t, [
        {
          key: 'on',
          value: function (e, i) {
            return 'ready' == e && this.ready ? i.call(this, !0)  : 'upgrade' == e && c[this.status] > c.EMPTY ? i.call(this, this.status)  : s(Object.getPrototypeOf(t.prototype), 'on', this).apply(this, arguments),
            this
          }
        }
      ]),
      t
    }(l);
    d.STATUS = {
      EMPTY: 'EMPTY',
      PARTICAL: 'PARTICAL',
      COMPLETE: 'COMPLETE'
    },
    e.exports = t['default']
  },
  function (e, t) {
    function i() {
      this._events = this._events || {
      },
      this._maxListeners = this._maxListeners || void 0
    }
    function n(e) {
      return 'function' == typeof e
    }
    function o(e) {
      return 'number' == typeof e
    }
    function r(e) {
      return 'object' === ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && null !== e
    }
    function a(e) {
      return void 0 === e
    }
    e.exports = i,
    i.EventEmitter = i,
    i.prototype._events = void 0,
    i.prototype._maxListeners = void 0,
    i.defaultMaxListeners = 10,
    i.prototype.setMaxListeners = function (e) {
      if (!o(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number');
      return this._maxListeners = e,
      this
    },
    i.prototype.emit = function (e) {
      var t,
      i,
      o,
      s,
      l,
      c;
      if (this._events || (this._events = {
      }), 'error' === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
        if (t = arguments[1], t instanceof Error) throw t;
        var d = new Error('Uncaught, unspecified "error" event. (' + t + ')');
        throw d.context = t,
        d
      }
      if (i = this._events[e], a(i)) return !1;
      if (n(i)) switch (arguments.length) {
        case 1:
          i.call(this);
          break;
        case 2:
          i.call(this, arguments[1]);
          break;
        case 3:
          i.call(this, arguments[1], arguments[2]);
          break;
        default:
          s = Array.prototype.slice.call(arguments, 1),
          i.apply(this, s)
      } else if (r(i)) for (s = Array.prototype.slice.call(arguments, 1), c = i.slice(), o = c.length, l = 0; l < o; l++) c[l].apply(this, s);
      return !0
    },
    i.prototype.addListener = function (e, t) {
      var o;
      if (!n(t)) throw TypeError('listener must be a function');
      return this._events || (this._events = {
      }),
      this._events.newListener && this.emit('newListener', e, n(t.listener) ? t.listener : t),
      this._events[e] ? r(this._events[e]) ? this._events[e].push(t)  : this._events[e] = [
        this._events[e],
        t
      ] : this._events[e] = t,
      r(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, 'function' == typeof console.trace)),
      this
    },
    i.prototype.on = i.prototype.addListener,
    i.prototype.once = function (e, t) {
      function i() {
        this.removeListener(e, i),
        o || (o = !0, t.apply(this, arguments))
      }
      if (!n(t)) throw TypeError('listener must be a function');
      var o = !1;
      return i.listener = t,
      this.on(e, i),
      this
    },
    i.prototype.removeListener = function (e, t) {
      var i,
      o,
      a,
      s;
      if (!n(t)) throw TypeError('listener must be a function');
      if (!this._events || !this._events[e]) return this;
      if (i = this._events[e], a = i.length, o = - 1, i === t || n(i.listener) && i.listener === t) delete this._events[e],
      this._events.removeListener && this.emit('removeListener', e, t);
       else if (r(i)) {
        for (s = a; s-- > 0; ) if (i[s] === t || i[s].listener && i[s].listener === t) {
          o = s;
          break
        }
        if (o < 0) return this;
        1 === i.length ? (i.length = 0, delete this._events[e])  : i.splice(o, 1),
        this._events.removeListener && this.emit('removeListener', e, t)
      }
      return this
    },
    i.prototype.removeAllListeners = function (e) {
      var t,
      i;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {
      }
       : this._events[e] && delete this._events[e],
      this;
      if (0 === arguments.length) {
        for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t);
        return this.removeAllListeners('removeListener'),
        this._events = {
        },
        this
      }
      if (i = this._events[e], n(i)) this.removeListener(e, i);
       else if (i) for (; i.length; ) this.removeListener(e, i[i.length - 1]);
      return delete this._events[e],
      this
    },
    i.prototype.listeners = function (e) {
      var t;
      return t = this._events && this._events[e] ? n(this._events[e]) ? [
        this._events[e]
      ] : this._events[e].slice()  : [
      ]
    },
    i.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (n(t)) return 1;
        if (t) return t.length
      }
      return 0
    },
    i.listenerCount = function (e, t) {
      return e.listenerCount(t)
    }
  },
  function (e, t) {
    function i(e) {
      if (e) {
        var t = {
        },
        i = {
        },
        n = {
          iphone: e.match(/(iphone)\s(os\s)?([\d_]+)/i),
          ipad: e.match(/(ipad).*\s([\d_]+)/i),
          ipod: e.match(/(ipod).*\s([\d_]+)/i),
          android: e.match(/(android)\s([\d\.]+)/i),
          windows: e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
        };
        n.ipod && (t.ios = t.ipod = !0, t.version = n.ipod[2].replace(/_/g, '.'), t.name = 'ipod'),
        n.ipad && (t.ios = t.ipad = !0, t.version = n.ipad[2].replace(/_/g, '.'), t.name = 'ipad'),
        n.iphone && (t.iphone = t.ios = !0, t.version = n.iphone[3].replace(/_/g, '.'), t.name = 'iphone'),
        n.android && (t.android = !0, t.version = n.android[2], t.name = 'android'),
        n.windows && (t.windows = !0, t.version = n.windows[2], t.name = 'windows');
        var o = {
          IE: e.match(/; msie\b|; trident\b|\bedge\//i),
          WeChat: e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || e.match(/MicroMessenger\/((\d+)\.(\d+))/),
          MQQClient: !e.match(/QQReader/) && e.match(/QQ\/(\d+\.\d+)/i) || e.match(/V1_AND_SQ_([\d\.]+)/),
          MQQReader: e.match(/QQReader/i),
          sukan: e.match(/synopsis/i),
          QQvideo: !e.match(/TADChid/) && e.match(/QQLiveBrowser\/([\d.]+)/),
          QQHDvideo: e.match(/QQLiveHDBrowser\/([\d.]+)/),
          TBSSDK: e.match(/MQQBrowser\/(\d+\.\d+)/i) && e.match(/MSDK\/(\d+\.\d+)/),
          MQQBrowser: e.match(/MQQBrowser\/(\d+\.\d+)/i),
          UCBrowser: e.match(/ucbrowser\/(\d+\.\d+)/i),
          Qzone: e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),
          Weibo: e.match(/Weibo/i),
          qqnews: e.match(/qqnews\/(\d+\.\d+\.\d+)/i),
          QQLiveBroadcast: e.match(/QQLiveBroadcast/i),
          kuaibao: e.match(/qnreading\/(\d+\.\d+\.\d+)/i),
          liebao: e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),
          IEMobile: e.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || e.match(/WPDesktop/),
          douban: e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),
          MiuiBrowser: e.match(/MiuiBrowser\/(\d+\.\d+)/i),
          Chrome: t.ios ? e.match(/CriOS\/(\d+\.\d+)/)  : e.match(/Chrome\/(\d+\.\d+)/),
          Safari: e.match(/Safari\/(\d+\.\d+)/)
        };
        if (o.MQQReader) i.MQQReader = !0,
        i.version = 1,
        i.name = 'MQQReader';
         else if (o.IEMobile) i.IEMobile = !0,
        i.version = 1,
        i.name = 'IEMobile';
         else for (var r in o) if (o[r]) {
          i[r] = !0,
          i.version = o[r][1] || 0,
          i.name = r;
          break
        }
        return {
          browser: i,
          os: t
        }
      }
    }
    var n = null,
    o = function () {
      return n || (n = i(navigator.userAgent))
    };
    o.__express = function (e, t, n) {
      e.ua = i(e.headers['user-agent']),
      n()
    },
    o.__jquery = function (e) {
      e = e || window.jQuery || window.Zepto;
      var t = n || (n = i(navigator.userAgent));
      e.browser = t.browser,
      e.os = t.os
    },
    o.__clearCache = function () {
      n = null
    },
    e.exports = o
  },
  function (e, t, i) {
    var n = i(9);
    window.Zepto = window.$ = n.$,
    window.shareConfig = {
    },
    document.addEventListener('touchstart', function () {
    }, !1),
    window.Promise ? Promise.defer = function () {
      var e = {
      };
      return e.promise = new Promise(function (t, i) {
        e.resolve = t,
        e.reject = i
      }),
      e
    }
     : i(10),
    window.LIMIT_DEFER = Promise.defer(),
    window.__appbanner__mplay__ = !0,
    $('.icon_back_top').on('click', function () {
      window.scrollTo(0, 0)
    }),
    function (e) {
      e.getScript = function (e, t) {
        var i = document.createElement('script');
        i.async = 'async',
        i.src = e,
        t && (i.onload = t),
        document.getElementsByTagName('head') [0].appendChild(i)
      }
    }($),
    $.getScript('//vm.gtimg.cn/tencentvideo/script/modules/2018boss/app.js', function () {
      var e = window.Boss2018('mplay');
      e.inject$ajax($, 'ajax')
    })
  },
  function (e, t) {
    e.exports = Txplayer
  },
  function (e, t) {
    'use strict';
    var i = window.jQuery || window.Zepto || window.tvp && window.tvp.$ || window.Txplayer && window.Txplayer.$;
    window.Promise = function (e) {
      var t = i.Deferred();
      return e(t.resolve.bind(t), t.reject.bind(t)),
      t.promise()
    },
    window.Promise.defer = function () {
      var e = i.Deferred();
      return e.__promise = e.promise,
      Object.defineProperty(e, 'promise', {
        get: function () {
          return e.__promise()
        },
        set: function () {
        }
      }),
      e
    },
    window.Promise.all = function (e) {
      return i.when.apply(i, e)
    },
    window.Promise.resolve = function () {
      var e = i.Deferred();
      return e.resolve(),
      e
    },
    window.Promise.reject = function () {
      var e = i.Deferred();
      return e.reject(),
      e
    }
  },
  function (e, t) {
    !function () {
      function t(e, t) {
        return (/string|function/.test('undefined' == typeof t ? 'undefined' : _typeof2(t)) ? l : s) (e, t)
      }
      function i(e, t) {
        return 'string' != typeof e && (t = 'undefined' == typeof e ? 'undefined' : _typeof2(e), 'number' === t ? e += '' : e = 'function' === t ? i(e.call(e))  : ''),
        e
      }
      function n(e) {
        return p[e]
      }
      function o(e) {
        return i(e).replace(/&(?![\w#]+;)|[<>"']/g, n)
      }
      function r(e, t) {
        if (f(e)) for (var i = 0, n = e.length; n > i; i++) t.call(e, e[i], i, e);
         else for (i in e) t.call(e, e[i], i)
      }
      function a(e, t) {
        var i = /(\/)[^\/]+\1\.\.\1/,
        n = ('./' + e).replace(/[^\/]+$/, ''),
        o = n + t;
        for (o = o.replace(/\/\.\//g, '/'); o.match(i); ) o = o.replace(i, '/');
        return o
      }
      function s(e, i) {
        var n = t.get(e) || c({
          filename: e,
          name: 'Render Error',
          message: 'Template not found'
        });
        return i ? n(i)  : n
      }
      function l(e, t) {
        if ('string' == typeof t) {
          var i = t;
          t = function () {
            return new u(i)
          }
        }
        var n = d[e] = function (i) {
          try {
            return new t(i, e) + ''
          } catch (n) {
            return c(n) ()
          }
        };
        return n.prototype = t.prototype = h,
        n.toString = function () {
          return t + ''
        },
        n
      }
      function c(e) {
        var t = '{Template Error}',
        i = e.stack || '';
        if (i) i = i.split('\n').slice(0, 2).join('\n');
         else for (var n in e) i += '<' + n + '>\n' + e[n] + '\n\n';
        return function () {
          return 'object' == ('undefined' == typeof console ? 'undefined' : _typeof2(console)) && void 0,
          t
        }
      }
      var d = t.cache = {
      },
      u = this.String,
      p = {
        '<': '&#60;',
        '>': '&#62;',
        '"': '&#34;',
        '\'': '&#39;',
        '&': '&#38;'
      },
      f = Array.isArray || function (e) {
        return '[object Array]' === {
        }.toString.call(e)
      },
      h = t.utils = {
        $helpers: {
        },
        $include: function (e, t, i) {
          return e = a(i, e),
          s(e, t)
        },
        $string: i,
        $escape: o,
        $each: r
      },
      v = t.helpers = h.$helpers;
      t.get = function (e) {
        return d[e.replace(/^\.\//, '')]
      },
      t.helper = function (e, t) {
        v[e] = t
      },
      e.exports = t
    }()
  },
  function (e, t, i) {
    function n(e) {
      return e ? String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')  : ''
    }
    var o = i(13);
    t.playUrl = function (e, t) {
      return e.indexOf('m.v.qq.com') != - 1 || e.match(/^\/[\w\d]/) || !t ? e : o(t)
    },
    t.typeEng = function () {
      var e = {
        1: 'movie',
        2: 'tv',
        3: 'cartoon',
        4: 'sports',
        5: 'ent',
        6: 'game',
        9: 'rec',
        23: 'news',
        25: 'fashion',
        10: 'variety',
        60: 'parental',
        31: 'life',
        43: 'funny',
        0: 'ugc'
      };
      return function (t) {
        return e[t]
      }
    }(),
    t.slice = function (e, t, i) {
      return e instanceof Array ? e.slice(t, i)  : [
      ]
    },
    t.join = function (e, t) {
      return e ? e.join(t)  : ''
    },
    t.parseFloat = function (e) {
      return parseFloat(e)
    },
    t.formatDuration = function (e) {
      if ('string' == typeof e && e.indexOf(':') != - 1) return e;
      var t = parseInt(e / 3600);
      e -= 3600 * t;
      var i = parseInt(e / 60);
      return e -= 60 * i,
      t = t <= 0 ? '' : t < 10 ? '0' + t : t,
      i = i < 10 ? '0' + i : i,
      e = e < 10 ? '0' + e : e,
      '' != t ? t + ':' + i + ':' + e : i + ':' + e
    },
    t.ellipses = function (e, t) {
      if (e) {
        for (var i = 0, n = 0; n < e.length; n++) if (e.charAt(n).match(/[\x00-\x07]/) || (i += e.charAt(n).match(/[\x07-\xFF]/) ? 1 : 2), i >= t) return e.substr(0, n) + '...';
        return e
      }
    },
    t.timeLong = function (e) {
      return e = e || 0,
      ('' + new Date(1000 * e + 57600000)).match(/(\d\d:\d\d:\d\d) /) [1]
    },
    t.escjson = function (e) {
      return e ? String(e).replace(/</g, '&lt;').replace(/>/g, '&gt;')  : ''
    },
    t.commaNumber = function (e) {
      return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    t.payStatusText = function (e) {
      switch (e) {
        case 4:
          return 'VIP用券';
        case 5:
        case 6:
          return 'VIP';
        case 7:
          return '付费';
        case 8:
          return '免费';
        default:
          return '付费'
      }
    },
    t.formatNum = function (e) {
      if (e += '', !e) return 0;
      var t = e.split(''),
      i = (t.shift(), '');
      return e < 10000 ? e : e >= 10000 && e < 100000000 ? (e = parseInt(e / 1000) + '', t = e.split(''), i = t.pop(), t.join('') + '.' + (i ? i : '') + '万')  : e >= 100000000 ? (e = parseInt(e / 10000000) + '', t = e.split(''), i = t.pop(), t.join('') + '.' + (i ? i : '') + '亿')  : void 0
    };
    var r = [
      'e7ybo',
      'g9cb0',
      'ejyvq',
      'fejnk',
      'cp34m',
      '5a8zt',
      'elfjz',
      'xl14z',
      'ov2hs',
      '2n51o',
      'p86eg',
      'dk4s3',
      '9sw9m',
      '21285',
      '5hflj',
      'u6rmb',
      '38ify',
      'rc4a6',
      'aakes',
      'b51dk',
      '4s6dc',
      'fy0ux',
      'p97hv',
      '38ewo'
    ],
    a = [
      '鄙视',
      '擦汗',
      '龇牙',
      '得意',
      '发呆',
      '发怒',
      '鼓掌',
      '害羞',
      '惊恐',
      '可怜',
      '抠鼻',
      '流汗',
      '流泪',
      '敲打',
      '亲亲',
      '色',
      '调皮',
      '偷笑',
      '微笑',
      '阴险',
      '吓',
      '疑问',
      '晕',
      '再见'
    ];
    t.emotion = function (e) {
      return e.indexOf('[') == - 1 ? e : (e = n(e), a.forEach(function (t, i) {
        for (; e.indexOf('[' + t + ']') != - 1; ) e = e.replace('[' + t + ']', '<img src="http://puui.qpic.cn/virtual_item_ns/0/' + r[i] + '.png/0" height="20px" width="20px"/>')
      }), e)
    },
    t.formatDateDuration = function (e) {
      var t = e && e.tag_3 && e.tag_3.text || '';
      return t.replace(/\s*期/, '')
    }
  },
  function (e, t) {
    'use strict';
    function i(e, t, i) {
      return i ? e && t ? (i += i.match(/\?/) ? '&' : '?', i += e + '=' + t)  : i : ''
    }
    e.exports = function (e) {
      var t = '',
      n = e.cover_id || e.cid,
      o = e.video_id || e.vid,
      r = e.columnid || e.column_id || e.lid;
      n ? t = '/cover/' + n[0] + '/' + n + '.html' + (o ? '?vid=' + o : '')  : o ? t = '/page/' + o[0] + '/' + o[9] + '/' + o[10] + '/' + o + '.html' : r && (t = '/play.html?columnid=' + r);
      var a = e.exsource || e.ex;
      + a && (t += t.match(/\?/) ? '&exsource=1' : '?exsource=1');
      var s = e.uvip;
      s && (t = i('uvip', s, t));
      var l = e.qqaid;
      return l && (t = i('qqaid', l, t)),
      t
    }
  },
  function (e, t, i) {
    var n = window.Txplayer.$,
    o = window.tlux = i(1),
    r = i(15) [window.PAGE_TYPE],
    a = i(16),
    s = {
    };
    e.exports = function (e) {
      function t(t) {
        t.name.match(/^no_dom\//) || t.data.unshift(n('#' + t.name.replace('/', '_')));
        var i = e[t.name];
        i && i.apply(this, t.data)
      }
      '2016_cover' == window.PAGE_TYPE && (r = '1664159' == window.full_screen ? r.vertical : r[window.COVER_TYPE] || r.de),
      1 == + !!window.EXSOURCE && r.every(function (e, t) {
        return '2016/player' != e || (r[t] = '2016/outsite_player', !1)
      }),
      window.WHITE_CONFIG && window.WHITE_CONFIG.xt_status && (r = r.filter(function (e) {
        return ['2016/recommend',
        '2016/game_rec',
        '2016/comment',
        '2016/game_banner'].indexOf(e) === - 1
      })),
      r.push('no_dom/pc-redirect'),
      a['no_dom/pc-redirect'] = [
        'video',
        'cover',
        'column'
      ],
      r.forEach(function (e) {
        a[e] && a[e].forEach(function (e) {
          s[e] || (s[e] = !0, o.store(e, [
            '$' + e
          ], function (e, t) {
            Object.keys(t).forEach(function (e) {
              this[e] = t[e]
            }, this)
          }))
        }),
        o.when(a[e] || [
        ], function () {
          var i = Array.prototype.map.call(arguments, function (e) {
            return e.model
          });
          t({
            name: e,
            data: i
          })
        })
      })
    }
  },
  function (e, t) {
    e.exports = {
      '2016_cover': {
        1: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/clips',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommendation',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        2: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/episode',
          '2016/clips',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommendation',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        3: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/episode',
          '2016/clips',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommendation',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        6: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommend',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        9: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommendation',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        10: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/chapter',
          '2016/recommendation',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        23: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommend',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        106: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/episode',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommend',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        de: [
          '2016/share',
          '2016/redirectapp',
          '2016/redirectpc',
          '2016/player',
          '2016/login',
          '2016/source',
          '2016/title',
          '2016/list',
          '2016/vplus_author',
          '2016/vplus_video',
          '2016/recommend',
          '2016/game_rec',
          '2016/comment',
          '2016/sponsor',
          '2016/effect'
        ],
        vertical: [
          '2016/login',
          '2016/vertical_cover',
          '2016/vertical_recommand',
          '2016/vertical_banner'
        ]
      },
      '2016_video': [
        '2016/share',
        '2016/redirectapp',
        '2016/redirectpc',
        '2016/player',
        '2016/login',
        '2016/source',
        '2016/title',
        '2016/vplus_author',
        '2016/vplus_video',
        '2016/recommend',
        '2016/game_rec',
        '2016/comment',
        '2016/sponsor',
        '2016/effect'
      ],
      '2016_column': [
        '2016/share',
        '2016/redirectapp',
        '2016/redirectpc',
        '2016/player',
        '2016/login',
        '2016/source',
        '2016/title',
        '2016/recommendation',
        '2016/game_rec',
        '2016/comment',
        '2016/sponsor',
        '2016/effect'
      ],
      vip_cover: [
        '2016/redirectpc',
        'vip/header',
        'vip/player',
        '2016/source',
        'vip/title',
        'vip/chapter',
        '2016/episode',
        '2016/game_banner',
        '2016/list',
        'vip/movie_clips',
        '2016/recommendation',
        'vip/activity',
        'vip/privilege',
        '2016/game_rec',
        '2016/comment',
        'vip/player_list',
        '2016/share'
      ]
    }
  },
  function (e, t) {
    e.exports = {
      '2016/player': [
        'base',
        'video',
        'cover'
      ],
      '2016/login': [
        'video',
        'cover',
        'column'
      ],
      '2016/banner': [
        'cover',
        'video',
        'column'
      ],
      '2016/outsite_player': [
        'video',
        'cover',
        'column',
        'protocol'
      ],
      '2016/chapter': [
        'cover',
        'protocol',
        'video',
        'column'
      ],
      'vip/chapter': [
        'cover'
      ],
      '2016/recommend': [
        'cover',
        'video',
        'column'
      ],
      '2016/recommendation': [
        'cover',
        'video',
        'column'
      ],
      '2016/redirectapp': [
        'cover',
        'video',
        'column'
      ],
      '2016/redirectpc': [
        'cover',
        'video',
        'column'
      ],
      '2016/effect': [
      ],
      '2016/vplus_author': [
        'vplususer'
      ],
      '2016/vplus_video': [
        'vplususer',
        'cover'
      ],
      '2016/game_banner': [
        'video'
      ],
      '2016/game_rec': [
        'video'
      ],
      '2016/album': [
        'album'
      ],
      '2016/clips': [
        'cover',
        'video',
        'column',
        'clips'
      ],
      '2016/vertical_cover': [
        'cover',
        'video',
        'videos'
      ],
      '2016/vertical_recommand': [
        'cover',
        'video',
        'videos'
      ],
      '2016/vertical_banner': [
        'cover',
        'video'
      ],
      '2016/source': [
        'cover',
        'video',
        'column'
      ],
      'vip/header': [
        'cover',
        'videos'
      ],
      'vip/player': [
        'cover',
        'video',
        'pay_info'
      ],
      '2016/title': [
        'cover',
        'video',
        'column'
      ],
      'vip/title': [
        'cover',
        'video',
        'column',
        'videos'
      ],
      '2016/share': [
        'cover',
        'video',
        'shareinfo'
      ],
      '2016/episode': [
        'cover',
        'video',
        'videos'
      ],
      '2016/list': [
        'cover',
        'video',
        'videos',
        'column'
      ],
      '2016/mini': [
        'cover',
        'video',
        'column'
      ],
      '2016/comment': [
        'cover',
        'video',
        'column'
      ],
      'vip/prevue': [
        'cover',
        'prevue'
      ],
      'vip/movie_clips': [
        'cover',
        'movie_clips',
        'prevue'
      ],
      'vip/privilege': [
      ],
      'vip/activity': [
      ],
      'vip/recommendation': [
        'cover',
        'column'
      ],
      'vip/ad': [
      ],
      'vip/player_list': [
        'cover',
        'prevue',
        'movie_clips'
      ]
    }
  },
  function (e, t, i) {
    'use strict';
    t['vip/title'] = i(18),
    t['2016/comment'] = i(82),
    t['2016/episode'] = i(85),
    t['vip/chapter'] = i(88),
    t['2016/list'] = i(90),
    t['2016/share'] = i(93),
    t['2016/redirectpc'] = i(102),
    t['vip/activity'] = i(103),
    t['vip/movie_clips'] = i(105),
    t['vip/player'] = i(106),
    t['vip/player_list'] = i(115),
    t['2016/recommendation'] = i(119),
    t['vip/header'] = i(126),
    t['2016/source'] = i(127),
    t['2016/game_rec'] = i(139)
  },
  function (e, t, i) {
    function n(e) {
      for (var t = 0, i = e.length, n = 5381; t < i; ++t) n += (n << 5) + e.charAt(t).charCodeAt();
      return 2147483647 & n
    }
    function o(e, t) {
      var i = t.cacheVideo,
      n = t.cacheCover,
      o = t.exsource,
      r = t.cover_id || t.cacheCover.cover_id,
      a = n.type || i.type,
      s = t.video_id || t.cacheVideo.vid;
      if (o) return e;
      if (e.indexOf('video_id') == - 1 && (e += '&video_id=' + s), e += '&dl_flag=1', e += '&dl_typeid=' + a, !r) return e += '&dl_title=' + encodeURIComponent(i.title || '腾讯视频'),
      e += '&dl_imgurl=' + encodeURIComponent(i.pic496x280 || i.pic160x90);
      if (e += '&dl_title=' + encodeURIComponent(n.title || '腾讯视频'), i && (e += '&dl_subtitle=' + encodeURIComponent(i.title)), [
        2,
        3
      ].indexOf(a) != - 1 && 'number' == typeof i.index && (e += '&dl_subindex=' + i.index), e += '&dl_imgurl=' + encodeURIComponent(i.pic496x280 || i.pic160x90), e += f.os.iphone ? n.downright && 0 == n.downright.iphone ? '&downright=0' : '&downright=1' : n.downright && 0 == n.downright.android ? '&downright=0' : '&downright=1', [
        10
      ].indexOf(a) != - 1 && t.column_id) e += '&column_id=' + t.column_id;
       else if ([1].indexOf(a) != - 1) {
        var l = n.video_ids.length > 1 ? 1 : 0;
        e += '&relate_movie=' + l
      }
      return e
    }
    var r = i(19),
    a = i(54),
    s = i(57),
    l = i(61),
    c = i(65),
    d = i(66),
    u = i(69),
    p = (i(73), i(21)),
    f = (i(25), i(7) ()),
    h = i(75),
    v = i(64),
    m = i(76),
    g = i(58),
    y = i(77),
    _ = i(78),
    w = i(81);
    e.exports = function (e, t, i, b, x) {
      function T() {
        return new u(function (e, i) {
          $.ajax({
            url: '//vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_VipActConf_V2&cmd=2&posId=1&otype=json',
            data: {
              platform: 108,
              cid: t.cover_id
            },
            dataType: 'jsonp',
            success: function (t) {
              return t && t.posList && t.posList[0] && 0 === t.posList[0].code && t.posList[0].confData && t.posList[0].confData[0] ? void e(t.posList[0].confData[0])  : i()
            },
            error: function () {
              i()
            }
          })
        })
      }
      var k = e.find('._btn_cache').css('display', 'vip_cover' == window.PAGE_TYPE ? 'block !important' : 'inline-block !important'),
      S = t.downright || i.downright || [
      ];
      S.length && (f.os.android ? S.indexOf('3') == - 1 && k.addClass('disabled')  : f.os.iphone && S.indexOf('5') == - 1 && k.addClass('disabled'));
      var E,
      C,
      C = s() || 514,
      P = function () {
        switch (window.URL_TYPE) {
          case 'column':
            return {
              column_id: b.column_id,
              exsource: window.EXSOURCE,
              duration: i.duration
            };
          case 'cover':
            return {
              video_id: i.vid,
              cover_id: t.cover_id,
              column_id: b.column_id,
              exsource: window.EXSOURCE,
              duration: i.duration
            };
          case 'video':
            return {
              video_id: i.vid,
              exsource: window.EXSOURCE,
              duration: i.duration
            }
        }
      }();
      location.href.indexOf('lite=true') > - 1 ? (E = a(), C = a.getConfid())  : (E = r().openFixer(o).downloadFixer(function (e) {
        return 'xiaomiqj' === g && f.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
      }), C = s() || 514),
      E.model(p({
        confid: C,
        cacheVideo: i,
        cacheCover: t
      }, P)).on('action', function (e) {
        c(1 == e || 14 == e ? '立即到APP缓存视频' : '安装腾讯视频<br>即可开始缓存')
      }).on('action', function (e) {
        l.banner({
          cid: t.cover_id,
          vid: i.vid,
          channelID: C,
          bannerPos: 'cache',
          reportType: 2 == e || 0 == e ? 'download' : 'open',
          sOp: 'click',
          isInstallOpen: + (2 != e)
        })
      }).on('ready', function (e) {
        l.banner({
          cid: t.cover_id,
          vid: i.vid,
          channelID: C,
          bannerPos: 'cache',
          reportType: 2 == e || 0 == e ? 'download_show' : 'open_show',
          sOp: 'show',
          isInstallOpen: + (2 != e)
        })
      }),
      k.on('click', function () {
        k.hasClass('disabled') ? c('由于版权限制，该影片无法缓存')  : E.action()
      }),
      e.find('.btn_720').on('click', function () {
        _({
          vid: i.vid,
          cid: t.cover_id,
          lid: b.column_id,
          appConfid: w.SHARPNESS_CONFID,
          liteConfid: w.TOP_NAV_CONFID_LITE,
          appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
        })
      }).attr({
        _report: !0,
        _eid: 'definition',
        _kv: JSON.stringify({
          app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
        })
      });
      var q,
      I,
      O = e.find('._btn_follow'),
      A = Object.create({
      }, {
        state: {
          get: function () {
            return q
          },
          set: function (e) {
            q = e,
            e ? O.find('svg').attr('data-status', 'true')  : O.find('svg').attr('data-status', 'false')
          }
        }
      });
      I = [
        1,
        2,
        3,
        4,
        9,
        10
      ].indexOf( + t.type) != - 1 && t.cover_id ? t.cover_id : i.vid || t.cover_id || b.column_id,
      v.init(function () {
        if (v.isLogin()) {
          var e = '';
          e = n('qq' === v.loginType() ? v.isNewQQLogin() ? m.get('vqq_vusession')  : m.get('skey') || m.get('lskey')  : m.get('vusession')),
          h.check({
            id: I,
            type: I === i.vid ? 1 : I === t.cover_id ? 2 : 3,
            g_tk: e
          }, function (e, t) {
            A.state = !!t.checkresult
          }),
          O.on('click', function () {
            A.state ? h.remove({
              id: I,
              type: I === i.vid ? 1 : I === t.cover_id ? 2 : 3,
              g_tk: e
            }, function (e, t) {
              e || 0 != t.suc ? t && t.ret == - 11 && v.openLogin({
                url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
              })  : A.state = !1
            })  : h.add({
              id: I,
              type: I === i.vid ? 1 : I === t.cover_id ? 2 : 3,
              g_tk: e
            }, function (e, t) {
              e || 0 != t.suc ? t && t.ret == - 11 && v.openLogin({
                url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
              })  : (A.state = !0, c(f.browser.WeChat ? '已加入看单，可在<br/>腾讯视频App内<br/>微信登录后找到' : '已加入看单<br/>请在腾讯视频App<br/>个人中心查看'))
            })
          })
        } else O.on('click', function () {
          v.openLogin({
            url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
          })
        })
      });
      var M = new u(function (e, t) {
        d.getVplusConfig().done(function () {
          e(!0)
        }).fail(function () {
          e(!1)
        })
      });
      u.all([M,
      T()]).then(function (t) {
        var i = t[0],
        n = t[1];
        !i && n.url && (n.pic || n.title) && e.find('.mod_bd').append(y({
          pic: n.pic,
          url: n.url,
          title: n.title
        }))
      })
    }
  },
  function (e, t, i) {
    var n = i(7) (),
    o = i(20),
    r = i(22),
    a = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
    s = i(27),
    l = i(36).create();
    l.setApp('appbanner'),
    l.setPage('txv');
    var c = {
    },
    d = window.appBanner = e.exports = function (e) {
      e = e || {
      };
      var t = e['package'] || u,
      d = o({
        'native': c[t.pkg] || (c[t.pkg] = r(t)),
        'package': t
      });
      if (t == u) {
        var m = e.useDownloader !== !1;
        if (d.model({
          confid: 51
        }).openFixer(p).downloadFixer(f), e.defaultAction !== !1) {
          var g = function (t, o) {
            var r = o.openurl,
            c = o.downloadurl;
            return l.click(t),
            n.browser.QQvideo ? void i(24) (function (e) {
              e.invoke('openView', {
                url: r
              })
            })  : void (2 == t ? !n.browser.WeChat || a && 1 != s.verCompare('6.5.5', a[1]) ? v.tryopen(r, {
              onfail: function () {
                location.href = c
              }
            })  : v.wx(r, {
              onfail: function () {
                v.tryopen(r, {
                  onfail: function () {
                    location.href = c
                  }
                })
              }
            })  : 1 == t || 14 == t ? n.browser.WeChat ? v.wx(r, {
              debug: e.debug
            })  : setTimeout(function () {
              location.href = r
            }, 50)  : 10 == t ? o.downloader.pause()  : 11 == t || 13 == t ? o.downloader.install()  : o.downloader && m && 15 != t ? o.downloader.start({
              url: c,
              confid: o.model.confid
            })  : setTimeout(function () {
              location.href = c
            }, 50))
          };
          d.on('action', g)
        }
      }
      return e.$el && (e.template && d.on('render', function (t, i) {
        var n = e.template;
        Object.keys(h).forEach(function (e) {
          n = n.replace('{' + e + '}', h[e][t] || h[e][0] || '')
        }, this),
        n = n.replace('{progress}', i.progress || 0),
        e.$el.innerHTML = n
      }), e.bindListener !== !1 && e.$el.addEventListener('click', function () {
        d.on('ready', function () {
          d.action()
        })
      })),
      d
    };
    Object.defineProperties(d, {
      TXVPACKAGE: {
        value: {
          name: '腾讯视频',
          icon: 'http://i.gtimg.cn/qqlive/images/20150608/logo_app.png',
          pkg: n.os.iphone ? 'com.tencent.live4iphone' : 'com.tencent.qqlive',
          pkgurl: 'tenvideo2://can_open_me_if_install_and_regeister_this_scheme',
          scheme: n.os.ipad ? 'tenvideohd://?' : 'tenvideo2://?',
          downloadid: 'TencentVideo',
          appid: 100730521,
          via: 'ANDROID.QQLIVE',
          downloadUrl: function () {
            return n.os.ios ? n.os.iphone ? 'http://itunes.apple.com/cn/app/id458318329?mt=8' : 'https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8' : n.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=4&confid={confid}&platform=aphone' : 'http://v.qq.com/download.html'
          }(),
          md5: function (e) {
            return '//mcgi.v.qq.com/commdatav2?cmd=39&confid=' + e
          },
          playerDownloadCallback: 'str_stopPlayerListenerWxDownloadState',
          wxappid: 'wx5a3178167066897b',
          appappid: 'wxca942bbff22e0e51',
          uaname: 'QQvideo'
        }
      },
      TXVOPENFIXER: {
        value: function (e, t) {
          return t.cover_id ? e += '&action=1&cover_id=' + t.cover_id + (t.video_id ? '&video_id=' + t.video_id : '') + (t.column_id ? '&column_id=' + t.column_id : '')  : t.video_id ? e += '&action=5&video_id=' + t.video_id : t.column_id && (e += '&action=2&column_id=' + t.column_id),
          t.exsource && (e += '&exsource=1'),
          e += '&from=' + (t.from || t.confid || location.pathname && location.pathname.replace(/\//g, '')),
          e.indexOf('?&') != - 1 && (e = e.replace(/\?\&/, '?')),
          e
        }
      },
      TXVDOWNLOADFIXER: {
        value: function (e, t) {
          return e.replace('{confid}', t.confid)
        }
      },
      TXVWORDING: {
        value: {
          text: {
            0: '提升3倍流畅度，安装腾讯视频',
            1: '提升3倍流畅度，打开腾讯视频',
            2: '提升3倍流畅度，安装腾讯视频',
            3: '提升3倍流畅度，升级腾讯视频',
            10: '正在下载腾讯视频',
            11: '下载完成，安装腾讯视频',
            12: '已暂停，点击恢复下载',
            13: '下载完成，安装腾讯视频',
            14: '安装成功，打开腾讯视频',
            15: '下载出错，点此重新安装',
            16: '下载已取消，点此重新安装'
          },
          status: {
            0: 'down',
            1: 'open',
            2: 'down',
            3: 'down',
            10: 'downloading',
            11: 'install',
            12: 'pause',
            13: 'install',
            14: 'open',
            15: 'down',
            16: 'down'
          }
        }
      }
    });
    var u = d.TXVPACKAGE,
    p = d.TXVOPENFIXER,
    f = d.TXVDOWNLOADFIXER,
    h = d.TXVWORDING,
    v = {
      tryopen: i(51) (),
      wx: i(52) (u)
    };
    d.openInWX = v.wx
  },
  function (e, t, i) {
    var n = i(6).EventEmitter,
    o = i(21);
    e.exports = function (e) {
      function t() {
        if (a) {
          var t = o({
          }, r.model, s),
          i = e['package'].scheme;
          l.forEach(function (e) {
            i = e(i, t)
          });
          var n = e['package'].downloadUrl;
          c.forEach(function (e) {
            n = e(n, t)
          }),
          d.emit('action', r.state, {
            openurl: i,
            downloadurl: n,
            model: t,
            downloader: r.downloader
          })
        }
      }
      function i() {
        a = !0,
        d.emit('ready', r.state),
        d.removeAllListeners('ready')
      }
      var r = e['native'],
      a = !1,
      s = {
      },
      l = [
      ],
      c = [
      ],
      d = Object.create(new n, {
        action: {
          value: function () {
            return a ? t()  : this.on('ready', function () {
              t()
            }),
            this
          }
        },
        openFixer: {
          value: function (e) {
            return l.push(e),
            this
          }
        },
        downloadFixer: {
          value: function (e) {
            return c.push(e),
            this
          }
        },
        model: {
          value: function (e) {
            return Object.keys(e).forEach(function (t) {
              s[t] = e[t]
            }),
            this
          }
        },
        on: {
          value: function (e, t) {
            return t && ('render' == e ? (t(r.state, {
            }), n.prototype.on.apply(this, arguments))  : 'ready' == e && a ? t(r.state)  : n.prototype.on.apply(this, arguments)),
            this
          }
        }
      });
      return r.on('progress', function (e) {
        d.emit('progress', e),
        d.emit('render', r.state, {
          progress: e
        })
      }),
      r.on('state_change', function (e, t) {
        d.emit('state_change', e, t),
        d.emit('render', r.state, {
          progress: 0
        })
      }),
      r.readyState ? i()  : r.once('ready', i),
      Object.defineProperty(d, 'state', {
        get: function () {
          return r.state
        }
      }),
      d
    }
  },
  function (e, t) {
    'use strict';
    var i = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    o = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    a = function (e) {
      return 'function' == typeof Array.isArray ? Array.isArray(e)  : '[object Array]' === n.call(e)
    },
    s = function (e) {
      if (!e || '[object Object]' !== n.call(e)) return !1;
      var t = i.call(e, 'constructor'),
      o = e.constructor && e.constructor.prototype && i.call(e.constructor.prototype, 'isPrototypeOf');
      if (e.constructor && !t && !o) return !1;
      var r;
      for (r in e);
      return 'undefined' == typeof r || i.call(e, r)
    },
    l = function (e, t) {
      o && '__proto__' === t.name ? o(e, t.name, {
        enumerable: !0,
        configurable: !0,
        value: t.newValue,
        writable: !0
      })  : e[t.name] = t.newValue
    },
    c = function (e, t) {
      if ('__proto__' === t) {
        if (!i.call(e, t)) return;
        if (r) return r(e, t).value
      }
      return e[t]
    };
    e.exports = function d() {
      var e,
      t,
      i,
      n,
      o,
      r,
      u = arguments[0],
      p = 1,
      f = arguments.length,
      h = !1;
      for ('boolean' == typeof u && (h = u, u = arguments[1] || {
      }, p = 2), (null == u || 'object' !== ('undefined' == typeof u ? 'undefined' : _typeof2(u)) && 'function' != typeof u) && (u = {
      }); p < f; ++p) if (e = arguments[p], null != e) for (t in e) i = c(u, t),
      n = c(e, t),
      u !== n && (h && n && (s(n) || (o = a(n))) ? (o ? (o = !1, r = i && a(i) ? i : [
      ])  : r = i && s(i) ? i : {
      }, l(u, {
        name: t,
        newValue: d(h, r, n)
      }))  : 'undefined' != typeof n && l(u, {
        name: t,
        newValue: n
      }));
      return u
    }
  },
  function (e, t, i) {
    var n = i(6).EventEmitter,
    o = i(7) (),
    r = {
      qq: i(23),
      wx: i(28),
      mqb: i(29)
    },
    a = e.exports = function (e) {
      function t(e, t) {
        l.readyState = !0,
        !e && (l.state = t),
        l.emit('ready')
      }
      var s = 2,
      l = Object.create(new n, {
        'package': {
          value: e
        },
        state: {
          get: function () {
            return s
          },
          set: function (e) {
            if (!(e in a.STATE)) throw new Error('appBannerFactory: illegal state..' + e + '..just choose:' + JSON.stringify(a.STATE));
            if (e != s) {
              var t = s;
              s = e,
              this.emit('state_change', e, t)
            }
          }
        },
        readyState: {
          value: !1,
          writable: !0
        },
        downloader: {
          value: null,
          writable: !0
        },
        model: {
          value: {
          }
        }
      });
      try {
        o.browser.MQQReader ? t(null, 0)  : o.browser.WeChat ? (r.wx(e, function () {
          t.apply(this, arguments),
          l.model.callback = 'weixin%3A%2F%2F',
          l.model.sender = 'weixin'
        }), o.os.android && i(30) (l, function (e, t) {
          e && e.stack && void 0,
          l.downloader = t
        }))  : o.browser.MQQClient ? (r.qq(e, function () {
          t.apply(this, arguments),
          l.model.callback = 'mqqapi%3A%2F%2F',
          l.model.sender = '%E6%89%8B%E6%9C%BAQQ'
        }), o.os.android && i(33) (l, function (e, t) {
          e && e.stack && void 0,
          l.downloader = t
        }))  : o.browser.MQQBrowser ? r.mqb(e, function () {
          t.apply(this, arguments),
          l.model.callback = 'mqqbrowser%3A%2F%2F',
          l.model.sender = 'QQ%E6%B5%8F%E8%A7%88%E5%99%A8'
        })  : o.browser.QQvideo ? i(34) (l, function (e) {
          e.check(function (i) {
            t(null, i ? 1 : 0),
            l.downloader = e
          })
        })  : o.browser[e.uaname] ? t(null, 1)  : t(null, 2)
      } catch (c) {
      }
      return l
    };
    a.STATE = i(35) ['native']
  },
  function (e, t, i) {
    function n(e, t) {
      var i = o.os.iphone,
      n = i ? e.pkgurl : e.pkg;
      !i && window.QQApi && QQApi.checkAppInstalled ? QQApi.checkAppInstalled(n, function (e) {
        e && !/denied|permission/.test(e) && 0 != e ? (e = e.split('.'), e = e[e.length - 1], t(null, 1, e))  : t(null, 0)
      })  : window.mqq && mqq.app && mqq.app.isAppInstalled ? mqq.app.isAppInstalled(n, function (e) {
        t(null, e === !0 || e && e.result ? 1 : 0)
      })  : t(null, 2)
    }
    var o = i(7) (),
    r = i(24);
    e.exports = function (e, t) {
      var i = !1,
      o = function () {
        i || (i = !0, t.apply(this, arguments))
      };
      r(function (t) {
        t ? n(e, o)  : o(null, 2)
      }),
      setTimeout(function () {
        o(null, 2)
      }, 6000)
    }
  },
  function (e, t, i) {
    'use strict';
    function n(e) {
      var t = null;
      if (!e) return null;
      try {
        t = e.TenvideoJSBridge || e.WebViewJavascriptBridge
      } catch (i) {
      }
      return t
    }
    function o() {
      top.WebViewJavascriptBridge && (top.TenvideoJSBridge = top.WebViewJavascriptBridge, top.TenvideoJSBridge.invoke = top.WebViewJavascriptBridge.callHandler, top.TenvideoJSBridge.on = top.WebViewJavascriptBridge.registerHandler);
      var e = new a;
      d = top.TenvideoJSBridge;
      var t = d.on;
      d.on = function (i, n) {
        e._evtObjs[i] && e._evtObjs[i].length || t.call(d, i, function (t) {
          e.emit(i, t)
        }),
        e.on(i, n)
      },
      u.ready = !0;
      try {
        d.isOnMethodOverride = !0;
        var i = top.document.createEvent('Events');
        i.initEvent('onTenvideoJSBridgeOnMethodOverride'),
        top.document.dispatchEvent(i)
      } catch (n) {
      }
    }
    var r = i(25),
    a = i(26),
    s = i(7) (),
    l = [
    ],
    c = !1,
    d = null,
    u = Object.create({
    }, {
      ready: {
        set: function (e) {
          if (c != e) {
            c = e;
            for (var t; t = l.shift(); ) setTimeout(function (e) {
              return function () {
                e(d)
              }
            }(t), 0)
          }
        },
        get: function () {
          return c
        }
      }
    }),
    p = window == top ? window : top,
    f = function (e) {
      u.ready ? e(d)  : l.push(e)
    };
    if (f.QQvideoBridgeCallback = function (e) {
      return function (t) {
        var i;
        try {
          i = 'string' == typeof t ? JSON.parse(t)  : t
        } catch (n) {
          try {
            i = JSON.parse(decodeURIComponent(t))
          } catch (n) {
            return e(n.message, null, t)
          }
        }
        0 == i.errCode ? e(null, i, t)  : e(i.errCode + ':' + i.errMsg, i, t)
      }
    }, e.exports = f, s.browser.WeChat) {
      var h = !1,
      v = !1,
      m = function (e) {
        'bridge' == e && (v = !0),
        'js' == e && (h = !0),
        h && v && (d = p.WeixinJSBridge, u.ready = !0)
      };
      if (top.WeixinJSBridge) m('bridge');
       else try {
        p.document.addEventListener('WeixinJSBridgeReady', function () {
          m('bridge')
        })
      } catch (g) {
        d = null,
        u.ready = !0
      }
      p.wx ? m('js')  : r('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function () {
        m('js')
      }),
      setTimeout(function () {
        u.ready || (d = null, u.ready = !0)
      }, 10000)
    } else if (s.browser.MQQClient) {
      if (window.mqq || window.QQApi) d = window.mqq || window.QQApi,
      u.ready = !0;
       else {
        var y = '//s.url.cn/qqmobile/qqapi.js?_bid=152';
        r(y, function () {
          d = window.mqq || window.QQApi,
          u.ready = !0
        })
      }
      setTimeout(function () {
        u.ready || (d = null, u.ready = !0)
      }, 6000)
    } else if (s.browser.QQvideo) if (n(p)) o();
     else {
      document.addEventListener('onTenvideoJSBridgeReady', o),
      document.addEventListener('WebViewJavascriptBridgeReady', o);
      var _ = setInterval(function () {
        n(p) ? (clearInterval(_), o())  : u.ready && clearInterval(_)
      }, 200);
      setTimeout(function () {
        u.ready || (d = null, u.ready = !0)
      }, 6000)
    } else if (s.browser.qqnews) window.TencentNews ? (d = window.TencentNews, u.ready = !0)  : r('http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1', function () {
      if (window.TencentNews) d = window.TencentNews,
      u.ready = !0;
       else var e = setInterval(function () {
        (window.TencentNews || u.ready) && (clearInterval(e), d = window.TencentNews, u.ready = !0)
      }, 500)
    }),
    setTimeout(function () {
      u.ready || (d = null, u.ready = !0)
    }, 6000);
     else if (s.browser.sukan) {
      if (window.WebViewJavascriptBridge) d = window.WebViewJavascriptBridge,
      u.ready = !0;
       else if (window.WVJBCallbacks) window.WVJBCallbacks.push(function () {
        d = window.WebViewJavascriptBridge,
        u.ready = !0
      });
       else {
        window.WVJBCallbacks = [
          function () {
            d = window.WebViewJavascriptBridge,
            u.ready = !0
          }
        ];
        var w = document.createElement('iframe');
        w.style.display = 'none',
        w.src = 'https://__bridge_loaded__',
        document.documentElement.appendChild(w),
        setTimeout(function () {
          document.documentElement.removeChild(w)
        }, 0)
      }
      setTimeout(function () {
        u.ready || (d = null, u.ready = !0)
      }, 6000)
    } else d = null,
    u.ready = !1
  },
  function (e, t) {
    'use strict';
    e.exports = function (e, t) {
      var i = document.createElement('script'),
      n = document.getElementsByTagName('script') [0];
      i.src = e,
      i.type = 'text/javascript',
      i.onload = i.onerror = i.onreadystatechange = function () {
        /loaded|complete|undefined/.test(i.readyState) && function () {
          i.onload = i.onerror = i.onreadystatechange = null,
          i.parentNode.removeChild(i),
          i = void 0,
          t && t()
        }()
      },
      n.parentNode.insertBefore(i, n)
    }
  },
  function (e, t, i) {
    'use strict';
    function n() {
      this._evtObjs = {
      },
      this._outdatedMsgs = {
      }
    }
    function o() {
    }
    var r = i(27);
    n.prototype.on = function (e, t, i) {
      this._evtObjs[e] || (this._evtObjs[e] = [
      ]),
      this._evtObjs[e].push({
        handler: t,
        once: i
      });
      var n = this;
      return function () {
        n.off(e, t)
      }
    },
    n.prototype.wait = function (e, t) {
      return this._outdatedMsgs[e] ? (t.apply(null, this._outdatedMsgs[e]), o)  : this.on(e, t, !0)
    },
    n.prototype.off = function (e, t) {
      var i,
      n = this;
      return i = e ? [
        e
      ] : r.keys(this._evtObjs),
      r.forEach(i, function (e) {
        if (t) {
          var i = n._evtObjs[e] || [
          ],
          o = [
          ];
          r.forEach(i, function (e) {
            e.handler !== t && o.push(e)
          }),
          n._evtObjs[e] = o
        } else n._evtObjs[e] = [
        ]
      }),
      this
    },
    n.prototype.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      this._outdatedMsgs[e] = t;
      var i = this._evtObjs[e] || [
      ];
      r.forEach(i, function (e) {
        e.once && e.called || (e.called = !0, e.handler && e.handler.apply(null, t))
      })
    },
    n.prototype.emitAsync = function () {
      var e = arguments,
      t = this;
      setTimeout(function () {
        t.emit.apply(t, e)
      }, 0)
    },
    n.prototype.assign = function (e) {
      var t = this;
      r.forEach(['on',
      'off',
      'wait',
      'emit',
      'emitAsync'], function (i) {
        var n = t[i];
        e[i] = function () {
          return n.apply(t, arguments)
        }
      })
    },
    (new n).assign(n),
    e.exports = n
  },
  function (e, t) {
    'use strict';
    function i(e, t) {
      return e && e.hasOwnProperty && e.hasOwnProperty(t)
    }
    function n() {
      var e = this;
      return function () {
        setTimeout.apply(e, arguments)
      }
    }
    var o = void 0,
    r = {
      escape: function (e) {
        return e ? String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')  : ''
      },
      type: function (e) {
        if (null === e) return 'null';
        if (e === o) return 'undefined';
        var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
        return t ? t[1].toLowerCase()  : ''
      },
      keys: function a(e) {
        var a = [
        ];
        return e ? Object.keys ? Object.keys(e)  : (this.objEach(e, function (e) {
          a.push(e)
        }), a)  : a
      },
      bind: function (e, t) {
        return e.bind ? e.bind(t)  : function () {
          return e.apply(t, arguments)
        }
      },
      extend: function (e) {
        if ('object' != this.type(e) && 'function' != this.type(e)) return e;
        for (var t, n, o = 1, r = arguments.length; o < r; o++) {
          t = arguments[o];
          for (n in t) i(t, n) && (e[n] = t[n])
        }
        return e
      },
      trim: function (e) {
        return e.trim ? e.trim()  : e.replace(/^\s+|\s+$/gm, '')
      },
      indexOf: function (e, t) {
        if (e.indexOf) return e.indexOf(t);
        var i = - 1;
        return r.some(e, function (e, n) {
          if (e === t) return i = n,
          !0
        }),
        i
      },
      forEach: function (e, t) {
        if (e.forEach) return e.forEach(t);
        for (var i = e.length, n = 0; n < i; n++) t(e[n], n);
        return e
      },
      some: function (e, t) {
        if (e.some) return e.some(t);
        for (var i = e.length, n = !1, o = 0; o < i; o++) if (t(e[o], o)) {
          n = !0;
          break
        }
        return n
      },
      map: function (e, t) {
        if (e.map) return e.map(t);
        for (var i = e.length, n = [
        ], o = 0; o < i; o++) n.push(t(e[o], o));
        return n
      },
      objEach: function (e, t) {
        if (e) for (var n in e) if (i(e, n) && t(n, e[n]) === !1) break
      },
      reduce: function (e, t) {
        if ('function' != r.type(t)) throw new TypeError('Array.prototype.reduce callback must be a function');
        var i = e.length;
        if (0 === i && 2 === arguments.length) throw new TypeError('reduce of empty array with no initial value');
        var n,
        o = 0;
        if (arguments.length >= 3) n = arguments[2];
         else for (; ; ) {
          if (o in e) {
            n = e[o++];
            break
          }
          if (++o >= i) throw new TypeError('reduceRight of empty array with no initial value')
        }
        for (; o < i; o++) n = t(n, e[o], o, e);
        return n
      },
      filter: function (e, t, i) {
        if (e.filter) return e.filter(t);
        for (var n = e.length, o = [
        ], r = 0; r < n; r++) {
          var a = e[r];
          t.call(i, a, r, e) && o.push(a)
        }
        return o
      },
      nextTick: n(),
      lock: function (e) {
        var t;
        return function () {
          if (!t) {
            t = !0;
            var i = [
            ].slice.call(arguments, 0);
            return i.unshift(function () {
              t = !1
            }),
            e.apply(this, i)
          }
        }
      },
      queue: function (e, t) {
        function i() {
          var e = n.shift();
          if (!e) return void (o = t);
          o--;
          var r = e[0],
          a = e[1],
          s = e[2];
          s.unshift(function () {
            o++,
            i.apply(this, arguments)
          }),
          setTimeout(function () {
            r.apply(a, s)
          })
        }
        t = t || 1;
        var n = [
        ],
        o = t;
        return function () {
          if (n.push([e,
          this,
          [
          ].slice.call(arguments, 0)]), o) return i()
        }
      },
      delegator: function (e) {
        var t,
        i = [
        ];
        return function (n) {
          return t ? i.push(n)  : (t = !0, void e.call(this, function () {
            t = !1;
            var e = this,
            o = arguments;
            n && n.apply(e, o);
            var a = i;
            i = [
            ],
            r.forEach(a, function (t) {
              t && t.apply(e, o)
            })
          }))
        }
      },
      once: function (e) {
        var t,
        i = arguments;
        return function () {
          if (!t && e) return t = !0,
          e.apply(i.length >= 2 ? i[1] : null, arguments)
        }
      },
      verCompare: function (e, t) {
        if (e === t) return 0;
        e = e.split('.'),
        t = t.split('.');
        for (var i = e.length >= t.length ? e.length : t.length, n = 0, o = 0; i--; ) {
          var r = Number(e[n] || 0),
          a = Number(t[n++] || 0);
          if (a > r) return 1;
          if (a < r) return - 1
        }
        return o
      },
      batchTimeout: function (e, t) {
        function i(e) {
          return s.push(e),
          a ? void l.push( + new Date)  : (r = + new Date, l.push(r), a = !0, void setTimeout(function () {
            var e = Math.round(n.reduce(l, function (e, t) {
              return e + (t - r)
            }, 0) / l.length);
            a = !1,
            l = [
            ];
            var i = s.slice(0);
            s = [
            ],
            setTimeout(function () {
              i.forEach(function (e) {
                try {
                  e && e()
                } catch (t) {
                }
              })
            }, Math.max(t - o - e, 0))
          }, o))
        }
        var n = this,
        o = t / e;
        (!o || o < 1) && (e = 1, o = t),
        o = Math.round(o);
        var r,
        a = !1,
        s = [
        ],
        l = [
        ];
        return i
      }
    };
    e.exports = r
  },
  function (e, t, i) {
    function n(e, t) {
      var i = window.WeixinJSBridge;
      i.invoke || t(new Error('could not access weixinjsbridge')),
      setTimeout(function () {
        i.invoke('getInstallState', {
          packageUrl: e.pkgurl,
          packageName: e.pkg
        }, function (e) {
          var i = e.err_msg;
          i.indexOf('get_install_state:yes') > - 1 ? t(null, 1)  : t(null, 0)
        })
      }, 50)
    }
    var o = i(24);
    e.exports = function (e, t) {
      var i = !1,
      r = function () {
        i || (i = !0, t.apply(this, arguments))
      };
      o(function (t) {
        t ? n(e, function (e, t) {
          r(e, t)
        })  : r(null, 0)
      }),
      setTimeout(function () {
        r(null, 0)
      }, 10000)
    }
  },
  function (e, t, i) {
    function n(e, t) {
      if (window.x5 && x5.ios && x5.ios.getMobileAppSupport) {
        var i = {
          scheme: e.pkgurl
        };
        x5.ios.getMobileAppSupport(i, function (e) {
          t(null, e && 1 == e.isSupportApp ? 1 : 0)
        }, function () {
          t(null, 0)
        })
      } else t(null, 0);
      setTimeout(function () {
        t(null, 0)
      }, 300)
    }
    var o = i(23),
    r = i(25),
    a = i(7) ();
    e.exports = function (e, t) {
      var i = !1,
      s = function () {
        i || (i = !0, t.apply(this, arguments))
      };
      if (!a.os.iphone && window.QQApi && QQApi.checkAppInstalled) return o.apply(this, arguments);
      if (!a.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
        var l = window.x5mtt.isApkInstalled('{"packagename": ' + e.pkg + '}');
        s(null, l != - 1 ? 1 : 0)
      } else if (a.os.iphone && parseInt(a.os.version) > 5) if (window.x5) n(e, s);
       else {
        var c = '//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js';
        r(c, function () {
          window.x5 ? n(e, s)  : s(null, 2)
        })
      } else s(null, 2);
      setTimeout(function () {
        s(null, 2)
      }, 6000)
    }
  },
  function (e, t, i) {
    function n(e, t) {
      var i = u.getItem('m_video_download_md5'),
      n = u.getItem('m_video_download_confid'),
      r = u.getItem('m_video_download_id'),
      a = u.getItem('m_video_download_progress'),
      s = Date.now() - u.getItem('m_video_download_time');
      n && r && s < 1296000000 ? WeixinJSBridge.invoke('queryDownloadTask', {
        download_id: r
      }, function (s) {
        'download_succ' == s.state || 'downloading' == s.state ? t(null, o(e, {
          md5: i || '',
          confid: n,
          download_id: r,
          progress: a,
          local: !0
        }))  : t(null, o(e, {
          local: !1
        }))
      })  : t(null, o(e, {
        local: !1
      }))
    }
    function o(e, t) {
      var i = {
        md5: t.md5,
        confid: t.confid,
        id: t.download_id,
        progress: t.progress || 0,
        url: ''
      },
      n = {
        'native': {
          value: e
        },
        local: {
          value: t.local,
          writable: !0
        }
      };
      Object.keys(i).forEach(function (t) {
        n[t] = {
          get: function () {
            return i[t]
          },
          set: function (e) {
            i[t] = e,
            u.setItem('m_video_download_' + t, e),
            u.setItem('m_video_download_time', Date.now())
          }
        },
        'progress' == t && (n.progress.set = function (n) {
          i[t] = n,
          u.setItem('m_video_download_' + t, n),
          e.emit('progress', n)
        })
      });
      var o = Object.create(f, n),
      r = function (t) {
        t = t.data || t._args || t;
        try {
          window[e['package'].playerDownloadCallback](t)
        } catch (i) {
        }
        t.download_id != o.id && '' != t.download_id || (e.state = p[t.state])
      };
      return e['package'].wxDownloaderCallback ? window[e['package'].wxDownloaderCallback] = r : document.addEventListener('wxdownloader:state_change', function (e) {
        r.call(this, e.detail)
      }),
      o
    }
    function r(e, t) {
      c(e, function (e, i) {
        e && t(304),
        i && i.md5 && 'null' != i.md5 ? t(null, i)  : t(501)
      })
    }
    function a(e, t, i) {
      var n = this;
      WeixinJSBridge.invoke('addDownloadTask', {
        task_name: e,
        task_url: t,
        file_md5: i || '',
        thumb_url: n['native']['package'].icon,
        title: n['native']['package'].name
      }, function (e) {
        var o = e.err_msg;
        n.id = e.download_id,
        n.md5 = i,
        n.url = t,
        n.local = !0,
        o.indexOf('add_download_task:ok') > - 1 ? (n['native'].state = s.DOWNLOADING, !n.timer && (n.timer = setInterval(function () {
          n['native'].state == s.INSTALLING || n['native'].state == s.DOWNLOADED ? setTimeout(function () {
            WeixinJSBridge.invoke('getInstallState', {
              packageName: n['native']['package'].pkg,
              packageUrl: n['native']['package'].pkgurl
            }, function (e) {
              var t = e.err_msg;
              t.indexOf('yes') > - 1 && (n['native'].state = s.INSTALLED)
            })
          }, 50)  : n['native'].state == s.DOWNLOADING && (n.progress = Math.min(90, n.progress + 1))
        }, 150)))  : o.indexOf('add_download_task:cancel') > - 1 && (n['native'].state = s.CANCEL)
      })
    }
    var s = i(22).STATE,
    l = i(24),
    c = i(31),
    d = i(32),
    u = window.localStorage || {
      setItem: function () {
      },
      getItem: function () {
      }
    },
    p = {
      download_removed: s.CANCEL,
      download_succ: s.DOWNLOADED,
      downloading: s.DOWNLOADING,
      download_fail: s.FAIL,
      installing: s.INSTALLING,
      install_succ: s.INSTALLED,
      pause: s.PAUSE
    };
    e.exports = function (e, t) {
      var i = !1,
      o = function () {
        i || (i = !0, t.apply(this, arguments))
      };
      l(function (t) {
        t ? (n(e, o), e['package'].wxDownloaderCallback || WeixinJSBridge.on('wxdownload:state_change', function (e) {
          document.dispatchEvent(new CustomEvent('wxdownloader:state_change', {
            detail: e
          }))
        }))  : o(!1)
      }),
      setTimeout(function () {
        o(null, null)
      }, 6000)
    };
    var f = {
      start: function (e) {
        if (!e.confid || !e.url) throw new Error('wx downloader:need confid and downloadurl');
        if (!this['native']['package'].md5) throw new Error('wx downloader:need md5 cgi');
        var t = this;
        if (this.local) a.call(this, this['native']['package'].name, this.url, this.md5);
         else if (this['native']['package'].hasmd5) a.call(t, t['native']['package'].name, e.url, this['native']['package'].md5);
         else {
          var i = function (i, n) {
            if (i) {
              var o = function () {
                clearTimeout(s),
                r()
              },
              r = function () {
                try {
                  window.removeEventListener('blur', o)
                } catch (e) {
                }
              };
              window.addEventListener('blur', o),
              setTimeout(function () {
                r()
              }, 3000);
              var s = setTimeout(function () {
                r(),
                location.href = e.url
              }, 2000);
              a.call(t, t['native']['package'].name, e.url, '')
            } else a.call(t, t['native']['package'].name, e.url, n.md5)
          },
          n = e.confid;
          if (/mcgi\.v\.q\.com/.test(this.url) || /commdatav2/.test(this.url)) {
            var o = d.queryParse((this.url || '').split('?') [1] || '');
            n = o.cmd && /^\d+$/.test(o.confid) ? Number(o.confid)  : ''
          }
          e.verify === !1 ? i(null, {
            md5: ''
          })  : r(this['native']['package'].md5(n, this.url), i)
        }
      },
      pause: function () {
        this.cancel.apply(this, arguments)
      },
      cancel: function () {
        var e = this;
        WeixinJSBridge.invoke('cancelDownloadTask', {
          download_id: this.id,
          file_md5: this.md5 || ''
        }, function (t) {
          t.err_msg.indexOf('cancel_download_task:ok') > - 1 && (e['native'].state = s.PAUSE)
        })
      },
      restart: function () {
        this.start.apply(this, arguments)
      },
      install: function () {
        var e = this;
        WeixinJSBridge.invoke('installDownloadTask', {
          download_id: this.id,
          file_md5: this.md5 || ''
        }, function (t) {
          t.err_msg.indexOf('install_download_task:ok') > - 1 && (e['native'].state = s.INSTALLING)
        })
      }
    }
  },
  function (e, t, i) {
    'use strict';
    function n() {
    }
    function o() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    function r(e) {
      e && e.parentNode && e.parentNode.removeChild(e)
    }
    function a(e, t, i) {
      var a = arguments;
      return s(function (s, v) {
        var m;
        if ('object' == ('undefined' == typeof t ? 'undefined' : _typeof2(t)) && (m = t, t = i, i = a[3]), m = m || {
        }, i = i || {
        }, t = t || n, 'function' != typeof t) throw Error('illegal jsonp callback function:', t);
        var g = document.getElementsByTagName('head') ? document.getElementsByTagName('head') [0] : document.body,
        y = document.createElement('script');
        y.charset = 'UTF-8';
        var _ = [
          i.ns || d,
          p++,
          o()
        ].join('_'),
        w = !0,
        b = '_t',
        x = i.time;
        i.callbackid && (_ = i.callbackid),
        x === !1 ? w = !1 : x && (b = x),
        m[i.pn || i.callbackName || u] = _,
        w && (m[b] = + new Date);
        var T = function (e) {
          r(y),
          t(null, e),
          s && s(e)
        },
        k = function (e) {
          r(y),
          t(e || 'error'),
          window[_] = T = k = n,
          v && v(e || error)
        },
        S = window[_];
        window[_] = function (e) {
          window[_] = n;
          try {
            S && S(e)
          } finally {
            T(e),
            T = k = n
          }
        },
        y.onerror = y.onabort = function (e) {
          k(e ? e.type : 'error')
        },
        l.forEach(h, function (t) {
          'function' == l.type(t) && (e = t(e, m) || e)
        }),
        y.src = c.queryJoin(e, m),
        g.appendChild(y),
        setTimeout(function () {
          k('timeout')
        }, i.timeout || f)
      })
    }
    function s(e) {
      return window.Promise ? new Promise(e)  : void e(n, n)
    }
    var l = i(27),
    c = i(32),
    d = '_jsonp',
    u = 'callback',
    p = 0,
    f = 20000,
    h = [
    ];
    a.timeout = function (e) {
      f = e
    },
    a.ns = function (e) {
      d = e
    },
    a.pn = function (e) {
      u = e
    },
    a.before = function (e) {
      h.push(e)
    },
    e.exports = a
  },
  function (e, t, i) {
    'use strict';
    var n = i(27),
    o = {
      queryParse: function (e, t) {
        if (!e) return {
        };
        t = t || '&';
        var i = e.replace(/^\?/, ''),
        o = {
        },
        r = i ? i.split(t)  : null;
        return r && r.length > 0 && n.forEach(r, function (e) {
          e = e.split('=');
          var t = e.splice(0, 1),
          i = e.join('=');
          o[t] = decodeURIComponent(i)
        }),
        o
      },
      queryJoin: function (e) {
        var t = [
        ].slice.call(arguments);
        t[0] = {
        };
        var i = o.queryStringify(n.extend.apply(n, t));
        if (!i) return e;
        var r;
        return r = /[\?&]$/.test(e) ? '' : ~e.indexOf('?') ? '&' : '?',
        e + r + i
      },
      queryStringify: function (e, t) {
        return e ? n.map(n.keys(e), function (t) {
          return t + '=' + encodeURIComponent(e[t])
        }).join(t || '&')  : ''
      }
    };
    e.exports = o
  },
  function (e, t, i) {
    'use strict';
    function n(e, t) {
      t(null, o(e))
    }
    function o(e) {
      var t = 0,
      i = {
        'native': {
          value: e
        },
        appid: {
          value: e['package'].appid + u++
        },
        url: {
          value: '',
          writable: !0
        },
        confid: {
          value: '',
          writable: !0
        },
        progress: {
          get: function () {
            return t
          },
          set: function (i) {
            t = i,
            e.emit('progress', i)
          }
        }
      },
      n = Object.create(p, i);
      return document.addEventListener('qqdownloader:state_change', function (t) {
        var i = t.detail;
        try {
          window[e['package'].playerDownloadCallback](i)
        } catch (t) {
        }
        i = i[0] ? i : [
          i
        ],
        i.forEach(function (t) {
          t.appid == n.appid + n.confid && (e.state = c[i.state])
        })
      }),
      n
    }
    function r(e, t) {
      e = String(e).split('.'),
      t = String(t).split('.');
      try {
        for (var i = 0, n = Math.max(e.length, t.length); i < n; i++) {
          var o = isFinite(e[i]) && Number(e[i]) || 0,
          r = isFinite(t[i]) && Number(t[i]) || 0;
          if (o < r) return - 1;
          if (o > r) return 1
        }
      } catch (a) {
        return - 1
      }
      return 0
    }
    var a = i(22).STATE,
    s = i(24),
    l = i(27);
    window.__QQDOWNLOADERCALLBACK = function (e) {
      document.dispatchEvent(new CustomEvent('qqdownloader:state_change', {
        detail: e
      }))
    },
    s(function (e) {
      e && window.mqq.invoke('q_download', 'registerDownloadCallBackListener', '__QQDOWNLOADERCALLBACK')
    });
    var c = {
      1: a.NOTSURE,
      2: a.DOWNLOADING,
      3: a.PAUSE,
      4: a.DOWNLOADED,
      '-1': a.FAIL,
      5: a.INSTALLING,
      13: a.INSTALLED,
      6: a.INSTALLED,
      9: a.UNINSTALLED,
      20: a.DOWNLOADING
    },
    d = {
      DOWNLOAD: 2,
      CANCEL: 10,
      PAUSE: 3,
      INSTALL: 5,
      UPDATE: 12
    };
    e.exports = function (e, t) {
      var i = !1,
      o = function () {
        i || (i = !0, t.apply(this, arguments))
      },
      a = function (e) {
        return e && e[1] || 0
      }(navigator.userAgent.match(/V1_AND_SQ_([\d\.]+)/));
      r(a, '4.5.0') < 0 && o(null, null),
      s(function (t) {
        t ? n(e, o)  : o({
        }, null)
      }),
      setTimeout(function () {
        o(null, null)
      }, 6000)
    };
    var u = 0,
    p = {
      start: function (e) {
        if (!e.confid || !e.url) throw new Error('qq downloader:need confid and downloadurl');
        this.confid = e.confid,
        this.url = e.url;
        var t = this;
        mqq.app.downloadApp(l.extend({
          appid: this.appid,
          url: e.url,
          confid: this.confid,
          packageName: this['native']['package'].pkg,
          via: this['native']['package'].via,
          appName: this['native']['package'].name,
          actionCode: d.DOWNLOAD
        }, this['native']['package'].qqdownload_extends), function (e) {
          e.errorCode ? t['native'].state = a.FAIL : (t['native'].state = c[e.state], 4 == e.state && t.install(), t.progress = e.pro)
        })
      },
      pause: function () {
        var e = this;
        mqq.app.downloadApp(l.extend({
          actionCode: d.PAUSE,
          appid: this.appid,
          url: this.url,
          packageName: this['native']['package'].pkg,
          via: this['native']['package'].via,
          appName: this['native']['package'].name
        }, this['native']['package'].qqdownload_extends), function (t) {
          t.errorCode ? e['native'].state = a.FAIL : (e['native'].state = c[t.state], e.progress = t.pro)
        })
      },
      cancel: function () {
        var e = this;
        mqq.app.downloadApp(l.extend({
          actionCode: d.CANCEL,
          appid: this.appid,
          url: this.url,
          packageName: this['native']['package'].pkg,
          via: this['native']['package'].via,
          appName: this['native']['package'].name
        }, this['native']['package'].qqdownload_extends), function (t) {
          t.errorCode ? e['native'].state = a.FAIL : (e['native'].state = c[t.state], e.progress = t.pro)
        })
      },
      restart: function () {
        this.start()
      },
      install: function () {
        var e = this;
        mqq.app.downloadApp(l.extend({
          actionCode: d.INSTALL,
          appid: this.appid,
          url: this.url,
          packageName: this['native']['package'].pkg,
          via: this['native']['package'].via,
          appName: this['native']['package'].name
        }, this['native']['package'].qqdownload_extends), function (t) {
          t.errorCode ? e['native'].state = a.FAIL : (e['native'].state = c[t.state], e.progress = t.pro)
        })
      }
    }
  },
  function (e, t, i) {
    var n = i(21),
    o = i(35) ['native'],
    r = {
      pkg: '',
      pkgurl: '',
      downloadUrl: '',
      iconUrl: '',
      appName: '',
      confid: ''
    },
    a = function (e) {
      this.config = n(r, e),
      this.onProgeressEvents = [
      ],
      this.onTaskEvents = [
      ],
      this._initEvt()
    };
    a.prototype._initEvt = function () {
      var e = this;
      s.ready(function (t) {
        t.on('onDownloadTaskProgressChanged', function (t) {
          t = s.parse(t),
          t.packageName === e.config.pkg && e.onProgeressEvents.forEach(function (e) {
            e && e(parseInt(t.progress), t)
          })
        }),
        t.on('onDownloadTaskStateChanged', function (t) {
          t = s.parse(t),
          0 === t.errorCode && t.packageName === e.config.pkg && e.onTaskEvents.forEach(function (e) {
            e && e(t.state)
          })
        })
      })
    },
    a.prototype.onTaskChange = function (e) {
      this.onTaskEvents.indexOf(e) <= - 1 && this.onTaskEvents.push(e)
    },
    a.prototype.onProgressChange = function (e) {
      this.onProgeressEvents.indexOf(e) <= - 1 && this.onProgeressEvents.push(e)
    },
    a.prototype.pause = function () {
      var e = this;
      s.ready(function (t) {
        t.invoke('pauseDowload3rdApp', {
          downloadUrl: e.config.downloadUrl,
          packageName: e.config.pkg
        })
      })
    },
    a.prototype.cancel = function () {
      var e = this;
      s.ready(function (t) {
        t.invoke('cancelDowload3rdApp', {
          downloadUrl: e.config.downloadUrl,
          packageName: e.config.pkg
        })
      })
    },
    a.prototype.check = function (e) {
      var t = this;
      s.ready(function (i) {
        i.invoke('isInstalled', {
          pkgName: t.config.pkg,
          pkgUrl: t.config.pkgurl
        }, function (t) {
          t = s.parse(t),
          e && e(!!t.result.installed)
        })
      })
    },
    a.prototype.start = function (e) {
      e = e || {
      };
      var t = this;
      if (!e.confid && !t.config.confid) throw new Error('txv downloader:need confid');
      e.confid && (t.config.confid = e.confid),
      s.ready(function (e) {
        t.config.downloadUrl = t.config.downloadUrl.replace('{confid}', t.config.confid);
        var i = {
          downloadUrl: t.config.downloadUrl,
          packageName: t.config.pkg,
          iconUrl: t.config.icon,
          appName: t.config.name,
          itunesUrl: t.config.downloadUrl,
          packageUrl: '',
          channel: ''
        };
        e.invoke('download3rdApp', i, function (e) {
        })
      })
    },
    a.prototype.open = function (e) {
      var t = this;
      s.ready(function (i) {
        var n = {
          pkgName: t.config.pkg,
          pkgUrl: t.config.pkgurl,
          schemeUrl: e,
          appName: t.config.name
        };
        i.invoke('launch3rdApp', n, function (e) {
        })
      })
    },
    a.prototype.install = function () {
      this.start()
    },
    a.prototype.restart = function () {
      this.cancel(),
      setTimeout(function () {
        this.start()
      }, 0)
    };
    var s = {
      ready: function (e) {
        window.TenvideoJSBridge ? e && e(window.TenvideoJSBridge)  : document.addEventListener('onTenvideoJSBridgeReady', function () {
          e && e(window.TenvideoJSBridge)
        })
      },
      parse: function (e) {
        if (e && 'string' == typeof e) {
          try {
            e = decodeURIComponent(e)
          } catch (t) {
          }
          e = JSON.parse(e)
        }
        return e
      }
    };
    a.STATE = {
      installed: 10,
      download_Without_Installed: 11,
      cancel: 12,
      downloading: 13,
      pause: 14,
      waiting: 16
    };
    var l = {
      10: o.INSTALLED,
      11: o.DOWNLOADED,
      12: o.CANCEL,
      13: o.DOWNLOADING,
      14: o.PAUSE
    };
    e.exports = function (e, t) {
      try {
        var i = new a(e['package']);
        i.onProgressChange(function (t) {
          e.emit('progress', t)
        }),
        i.onTaskChange(function (t) {
          l[t] && (e.state = l[t])
        }),
        t(i)
      } catch (n) {
      }
    }
  },
  function (e, t) {
    e.exports = {
      'native': {
        UNINSTALLED: 0,
        OPENABLE: 1,
        NOTSURE: 2,
        NEEDUPDATE: 3,
        DOWNLOADING: 10,
        DOWNLOADED: 11,
        PAUSE: 12,
        INSTALLING: 13,
        INSTALLED: 14,
        FAIL: 15,
        CANCEL: 16,
        0: 'UNINSTALLED',
        1: 'OPENABLE',
        2: 'NOTSURE',
        3: 'NEEDUPDATE',
        10: 'DOWNLOADING',
        11: 'DOWNLOADED',
        12: 'PAUSE',
        13: 'INSATLLING',
        14: 'INSATLLED',
        15: 'FAIL',
        16: 'CANCEL'
      }
    }
  },
  function (e, t, i) {
    'use strict';
    function n(e) {
      this._con = e
    }
    function o() {
      return c || window.jQuery || window.$ || g
    }
    function r(e) {
      return 'array' !== p.type(e) ? '' : p.map(e, function (e) {
        return p.map(e, function (e) {
          return encodeURIComponent(e)
        }).join(',')
      }).join('|')
    }
    function a(e) {
      return 'string' != typeof e ? [
      ] : p.map(e.split('|'), function (e) {
        return p.map(e.split(','), function (e) {
          return decodeURIComponent(e)
        })
      })
    }
    function s(e) {
      function t(e, t) {
        return t = t || {
        },
        t.loaded = !0,
        v.hot(e, p.extend({
        }, S, t))
      }
      function i(e, i, n) {
        return t([b,
        'event',
        e,
        i,
        n || '']),
        this
      }
      function n(e, i, n) {
        return t([b,
        'click',
        e,
        i || '',
        n]),
        this
      }
      function h(e, i, n) {
        return t([b,
        'pageview',
        e,
        i || '',
        n || '']),
        this
      }
      function g(e, t) {
        switch (e) {
          case 'click':
            n.apply(this, t);
            break;
          case 'pageview':
            h.apply(this, t);
            break;
          case 'event':
            i.apply(this, t)
        }
      }
      function y(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        if (m) try {
          var i = localStorage.getItem(x);
          try {
            i = a(i)
          } catch (n) {
          }
          return 'array' !== p.type(i) && (i = [
          ]),
          i.push([e].concat(t)),
          void localStorage.setItem(x, r(i))
        } catch (n) {
        }
        g(e, t)
      }
      function _() {
      }
      var w = 'index',
      b = 'boss_common',
      x = b + '_lazy_reports',
      T = e && e.standard,
      k = e && e.loaded,
      S = {
      },
      E = {
        create: s,
        ptag: v.ptag,
        standard: function (e) {
          return s(p.extend({
            standard: !0
          }, e))
        },
        click: function (e, t) {
          var i = (e + '.' + (t || '')).split('.');
          return n(w, i[0], i[1])
        },
        event: function (e, t) {
          var n = (e + '.' + (t || '')).split('.');
          return i(w, n[0], n[1])
        },
        pv: function (e, t, i) {
          var n = (e + '.' + (t || '') + '.' + (i || '')).split('.');
          h(n[0], n[1], n[2])
        },
        pagestat: function (e) {
          var i = Array.prototype.slice.call(arguments, 1);
          return i.unshift(b, e, w),
          t(i),
          this
        },
        stat: function () {
          var e = Array.prototype.slice.call(arguments);
          return e.unshift(b),
          t(e),
          this
        },
        setApp: function (e) {
          return b = e,
          x = e + '_lazy_reports',
          setTimeout(function () {
            E.flush()
          }, 1000),
          this
        },
        setPage: function (e) {
          return w = e,
          this
        },
        setJQ: function (e) {
          return c = e,
          this
        },
        set: function (e) {
          return p.objEach(e, function (e, t) {
            switch (e) {
              case 'loaded':
                k = !!t;
                break;
              case 'source':
                S[e] = t
            }
          }), this
        },
        bind2d: function (e, t, i, n, r) {
          var a = o(),
          s = this;
          return a(e).on('click', '[' + i + ']', function (e) {
            var o = e.currentTarget,
            l = a(o),
            c = l.attr(i),
            d = l.attr(n),
            u = [
            ];
            r && (u = (l.attr(r) || '').split(/\,\s*/));
            for (var p, f = 10; f && o && !(p = a(o).attr(t)); ) f--,
            o = o.parentNode;
            p && s.click.apply(s, [
              p,
              c,
              d
            ].concat(u))
          }),
          this
        },
        bind: function (e, t) {
          var i = o();
          return i(e).on('click', '[' + t + ']', function (e) {
            var o = e.currentTarget,
            r = i(o),
            a = r.attr(t),
            s = (a + '.').split('.');
            if ('A' == o.tagName) {
              var l = r.attr('href'),
              c = r.attr('target'),
              d = (l || '').match(/^([a-zA-Z]+)\:/);
              if (d = d ? d[1] : '', !/^(javascript:|#)/.test(l) && !c && (!d || /^https?$/.test(d))) return void y('click', w, s[0], s[1])
            }
            n(w, s[0], s[1])
          }),
          this
        },
        bindLazy: function (e, t) {
          var i = o();
          return i(e).on('click', '[' + t + ']', function (e) {
            var n = e.currentTarget,
            o = i(n),
            r = o.attr(t);
            y('click', w, r, '')
          }),
          this
        },
        flush: function () {
          if (localStorage) try {
            var e = localStorage.getItem(x);
            localStorage.removeItem(x),
            e && (e = a(e), p.forEach(e, function (e) {
              g(e[0], e.slice(1))
            }))
          } catch (t) {
          }
          return this
        },
        uuidGetter: function (e) {
          return d = e,
          this
        },
        referrerGetter: function (e) {
          return u = e,
          this
        },
        host: function (e) {
          return v.host && v.host(e),
          this
        },
        setExtraReporter: function (e) {
          return v.setExtraReporter(e),
          this
        }
      };
      if (T) {
        var C = E.bind2d,
        P = document.body,
        q = '_module',
        I = '_pos',
        O = [
        ];
        E.bind = function (e, t, i, n) {
          return P = e || P,
          q = t || q,
          I = i || I,
          C.call(E, P, q, I, n || '_detail', '_exts')
        },
        E.bind2d = E.bind;
        var A = {
        },
        M = 0;
        p.extend(E, {
          stat: _,
          pagestat: _,
          bindExpose: function (e, t, i, n) {
            var r = o(),
            a = e || P,
            s = t || q,
            c = i || I;
            if (n = n || {
            }, !a.querySelectorAll) return this;
            var d = a.querySelectorAll('[' + c + ']');
            return p.forEach(d, function (e) {
              if (!e._binded_expose) {
                e._binded_expose = !0;
                var t = l(q, e),
                i = M++;
                if (t) {
                  var o = r(t),
                  a = r(e),
                  d = f(e, {
                    inview: !!n.inview,
                    once: !0,
                    enter: !0,
                    recalc: !0,
                    offset: n.inview ? 20 : 0,
                    horiz: t.hasAttribute && t.hasAttribute('_horiz'),
                    listenHoriz: !0
                  }, function () {
                    var e = o.attr(s) || '',
                    t = a.attr(c) || '',
                    n = a.attr('_detail') || '',
                    r = (a.attr('_exts') || '').split(/\,\s*/);
                    e && E.expose.apply(E, [
                      e,
                      t,
                      n
                    ].concat(r)),
                    d && (delete A[i], d())
                  });
                  A[i] = d
                }
              }
            }),
            this
          },
          updateExpose: function () {
            return f.message.emit('update'),
            this
          },
          click: function (e, i, n) {
            return arguments.length < 2 && (i = e, e = ''),
            t([b,
            'click',
            w,
            e,
            i,
            n].concat(this.getExts(3, arguments)).concat(O), {
              standard: T
            }),
            this
          },
          event: function (e, i, n) {
            return arguments.length < 2 && (i = e, e = ''),
            t([b,
            'event',
            w,
            e,
            i,
            n].concat(this.getExts(3, arguments)).concat(O), {
              standard: T
            }),
            this
          },
          expose: function (e, i, n) {
            return t([b,
            'expose',
            w,
            e,
            i,
            n].concat(this.getExts(3, arguments)).concat(O), {
              standard: T
            }),
            this
          },
          pv: function (e, i, n, o) {
            return t([b,
            'pageview',
            e || w,
            i,
            n,
            o].concat(this.getExts(4, arguments)).concat(O), {
              standard: T
            }),
            this
          },
          exts: function () {
            var e = [
            ].slice.call(arguments, 0);
            return O = e,
            this
          },
          getExts: function (e, t) {
            return t = [
            ].slice.call(t, 0),
            t.slice(e).concat(new Array(4)).slice(0, 4)
          }
        })
      }
      return E
    }
    function l(e, t) {
      for (var i, n = o(), r = 10; r && t && !(i = n(t).attr(e)); ) r--,
      t = t.parentNode;
      return t
    }
    var c,
    d,
    u,
    p = i(27),
    f = i(37),
    h = i(39),
    v = i(41),
    m = 'localStorage' in window && null !== window.localStorage,
    g = function (e) {
      return new n(e)
    };
    n.prototype.on = function (e, t, i) {
      h(this._con, t, e, function (e) {
        i({
          currentTarget: e.delegateTarget
        })
      })
    },
    n.prototype.attr = function (e) {
      return this._con.getAttribute(e)
    },
    v.uuidGetter && v.uuidGetter(function () {
      if (d) try {
        return d()
      } catch (e) {
      }
    }),
    v.referrerGetter && v.referrerGetter(function () {
      if (u) try {
        return u()
      } catch (e) {
      }
    }),
    e.exports = s()
  },
  function (e, t, i) {
    'use strict';
    function n() {
      d(window, 'scroll', r),
      d(window, 'resize', r)
    }
    function o(e, t) {
      function i(i) {
        var n,
        p,
        g,
        y,
        w,
        P = !i || i === document.body;
        if (P && !T) n = c(e);
         else if (!P && !T) {
          var q = i.getBoundingClientRect();
          p = q.height,
          g = q.width,
          y = q.left,
          w = q.top
        }
        var I,
        O,
        A,
        M = !1,
        $ = !1,
        j = function (o, r, a) {
          if (!u.once || !$) {
            var s;
            if (P) {
              if (n = T || !n.height ? c(e)  : n, !n.height) return;
              var l = n.top - C,
              d = n.bottom;
              u.offset && (l -= u.offset, d += u.offset);
              var h = !u.listenHoriz || n.left >= 0 && n.right <= a;
              b ? (s = k ? l >= o && d <= o + r : l < o + r && d > o, s = s && h)  : s = h && o + r > l
            } else if (!P) {
              var v = e.getBoundingClientRect();
              if (!v.height || !v.width) return;
              if (E) s = f(e, v);
               else {
                if (!p || !g || !w) {
                  var m = i.getBoundingClientRect();
                  p = m.height,
                  g = m.width,
                  w = m.top,
                  y = m.left
                }
                var _ = v.height,
                q = v.width,
                l = v.top - w,
                I = v.left - y,
                d = v.bottom - w,
                O = v.right - y,
                A = u.offset;
                u.offset && (l += A, I += A, d -= A, O -= A),
                s = b ? k ? S ? I >= 0 && O <= g : l >= 0 && d <= p : S ? I > - q && I < g : l > - _ && l < p : l < p && I < g;
              }
            }
            var j = M;
            if (j && !s && 'function' == typeof u.out && u.out(), !s) return void (M = !1);
            M = !0,
            (x && !j || !x) && ($ = !0, t && t())
          }
        };
        if (P) I = m.on('scroll', j),
        r();
         else {
          var L,
          D = !1,
          N = function () {
            L || (L = !0, setTimeout(function () {
              L = !1,
              D && j(a(), s(), l())
            }, _.throttle ? _.throttle : 100))
          };
          if (I = m.on('scroll', N), i._onviewDelegator) D = i._onviewDelegator.visible(),
          A = i._onviewDelegator.message.on('visible', function (e) {
            D = e,
            e && N()
          }),
          N();
           else {
            var z = new v;
            i._onviewDelegator = {
              message: z,
              visible: function () {
                return D
              }
            },
            A = o(i, h.extend({
            }, u, {
              inview: !0,
              enter: !0,
              offset: 0,
              listenHoriz: !1,
              out: function () {
                z.emit('visible', !1),
                D = !1
              }
            }), function () {
              D = !0,
              z.emit('visible', !0),
              N()
            })
          }
          O = d(i, 'scroll', N),
          N()
        }
        return function () {
          I && I(),
          O && O(),
          A && A(),
          I = O = A = null
        }
      }
      w || (w = !0, n());
      var u = {
      },
      y = arguments;
      'object' == h.type(t) && (u = t, t = y[2]);
      var b = p(u, 'visible', !0),
      x = p(u, 'enter', !1),
      T = p(u, 'recalc', !1),
      k = p(u, 'inview', !1),
      S = p(u, 'horiz', !1),
      E = p(u, 'absoluteCalc', !1),
      C = u.offsetTop || 0,
      P = g(e);
      if (h.some(P.parents, function (e) {
        return document.body === e
      })) return i(P.scrollParent);
      var q,
      I = setTimeout(function () {
        q = i(g(e).scrollParent)
      });
      return function () {
        clearTimeout(I),
        q && q()
      }
    }
    function r() {
      if (_.throttle) {
        if (b) return;
        b = !0,
        setTimeout(function () {
          b = !1,
          m.emit('scroll', a(), s(), l())
        }, _.throttle)
      } else m.emit('scroll', a(), s(), l())
    }
    function a() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
    function s() {
      return 'BackCompat' == document.compatMode ? document.body.clientHeight : document.documentElement.clientHeight
    }
    function l() {
      return 'BackCompat' == document.compatMode ? document.body.clientWidth : document.documentElement.clientWidth
    }
    function c(e) {
      var t = e.getBoundingClientRect();
      return {
        top: t.top + a(),
        left: t.left,
        right: t.right,
        bottom: t.bottom + a(),
        height: t.bottom - t.top
      }
    }
    function d(e, t, i) {
      return y ? e.attachEvent('on' + t, i)  : e.addEventListener(t, i),
      function () {
        u(e, t, i)
      }
    }
    function u(e, t, i) {
      y ? e.detachEvent('on' + t, i)  : e.removeEventListener(t, i)
    }
    function p(e, t, i) {
      return e.hasOwnProperty(t) ? !!e[t] : i
    }
    function f(e, t, i) {
      i = Object.assign({
      }, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, i);
      var t = t || e.getBoundingClientRect(),
      n = e.cacheOffsetWidth = e.cacheOffsetWidth || e.offsetWidth,
      o = e.cacheOffsetHeight = e.cacheOffsetHeight || e.offsetHeight,
      r = !(t.right - i.left <= 0 && t.left + n - i.left <= 0 || t.left + i.right >= x && t.right + i.right >= n + x),
      a = !(t.bottom - i.top <= 0 && t.top + o - i.top <= 0 || t.top + i.bottom >= T && t.bottom + i.bottom >= o + T);
      return 0 !== e.width && 0 !== e.height && r && a
    }
    var h = i(27),
    v = i(26),
    m = new v,
    g = i(38),
    y = !document.addEventListener,
    _ = {
    },
    w = !1;
    o.set = function (e, t) {
      return _[e] = t,
      o
    },
    o.message = m,
    m.on('update', r),
    e.exports = o;
    var b,
    x = window.innerWidth,
    T = window.innerHeight
  },
  function (e, t, i) {
    'use strict';
    function n(e, t) {
      t = t || [
      ];
      var i = e.parentNode;
      return i ? (t.push(i), i === document.body ? t : n(i, t))  : t
    }
    function o(e) {
      if (!e) return '';
      var t;
      if (window.getComputedStyle) try {
        t = window.getComputedStyle(e)
      } catch (i) {
      } else e.currentStyle && (t = e.currentStyle);
      return t ? a(t)  : ''
    }
    function r(e) {
      return (!e.hasAttribute || !e.hasAttribute('_scroll_skip')) && (/(auto|scroll)/.test(o(e)) || e.hasAttribute && e.hasAttribute('_scroll_view'))
    }
    function a(e) {
      var t = '';
      return s.some(['-y',
      '-x',
      ''], function (i) {
        var n = 'overflow' + i,
        o = 'hidden' !== e[n] ? e[n] : '';
        if (o) return t = o,
        !0
      }),
      t
    }
    var s = i(27);
    e.exports = function (e) {
      for (var t = n(e), i = document.body, o = 0; o < t.length; o++) {
        var a = t[o];
        if (a === document.body || r(a)) {
          i = a;
          break
        }
      }
      return {
        parents: t,
        scrollParent: i
      }
    }
  },
  function (e, t, i) {
    function n(e, t, i, n, o) {
      var a = r.apply(this, arguments);
      return e.addEventListener(i, a, o),
      {
        destroy: function () {
          e.removeEventListener(i, a, o)
        }
      }
    }
    function o(e, t, i, o, r) {
      return 'function' == typeof e.addEventListener ? n.apply(null, arguments)  : 'function' == typeof i ? n.bind(null, document).apply(null, arguments)  : ('string' == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
        return n(e, t, i, o, r)
      }))
    }
    function r(e, t, i, n) {
      return function (i) {
        i.delegateTarget = a(i.target, t),
        i.delegateTarget && n.call(e, i)
      }
    }
    var a = i(40);
    e.exports = o
  },
  function (e, t) {
    function i(e, t) {
      for (; e && e.nodeType !== n; ) {
        if ('function' == typeof e.matches && e.matches(t)) return e;
        e = e.parentNode
      }
    }
    var n = 9;
    if ('undefined' != typeof Element && !Element.prototype.matches) {
      var o = Element.prototype;
      o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    e.exports = i
  },
  function (e, t, i) {
    'use strict';
    function n(e) {
      var t = document.referrer || e.referrer || '',
      i = P || u.get('openid') || u.get('vqq_openid'),
      n = q || u.get('vuserid') || u.get('vqq_vuserid'),
      o = u.get('o_cookie') || u.get('uin') || u.get('luin'),
      a = u.get('appid'),
      s = u.get('main_login');
      return x + (e.standard ? O : I) + '&s_uuid=' + (_() || r()) + (t ? '&s_referrer=' + encodeURIComponent(t)  : '') + (i ? '&s_openid=' + i : '') + (o ? '&s_uin=' + o : '') + (n ? '&s_vuserid=' + n : '') + (a ? '&s_appid=' + a : '') + (s ? '&s_mainlogin=' + s : '') + ('&s_url=' + encodeURIComponent(location.href.split('?') [0]))
    }
    function o() {
      function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return [e(),
      e(),
      e(),
      e()].join('')
    }
    function r() {
      if (S) return S;
      var e = u.get('tvfe_boss_uuid');
      if (!e) {
        e = o();
        try {
          u.set('tvfe_boss_uuid', e, 'qq.com', !1, 87600)
        } catch (t) {
          u.set('tvfe_boss_uuid', e, '', !1, 87600)
        }
      }
      return S = e,
      e
    }
    function a(e, t) {
      t = t || {
      };
      var i = t.loaded,
      o = 'number' == h.type(i) ? i : 500;
      'string' == h.type(e) ? (e = e.replace(/\.$/, '').split('.'), e.length < 3 || e.length > 5)  : 'array' != h.type(e) && (e = [
      ]);
      var r = '';
      if (t.standard) {
        r = n({
          standard: !0,
          referrer: w()
        });
        var a = [
          's_app',
          's_behave',
          's_page',
          's_module',
          's_pos',
          's_detail',
          's_psdesc',
          's_ext2',
          's_ext3',
          's_ext4',
          's_pgdetail',
          's_value2',
          's_value3',
          's_value4'
        ];
        h.forEach(a, function (t, i) {
          var n = e[i];
          null !== n && void 0 !== n && '' !== n && t && (r += '&' + t + '=' + encodeURIComponent(n))
        })
      } else {
        var l = t.source || '';
        if ('function' == h.type(l)) try {
          l = l()
        } catch (d) {
        }
        r = n({
          referrer: w()
        }),
        r += '&s_app=' + encodeURIComponent(e[0] || '') + '&s_module=' + encodeURIComponent(e[1] || '') + '&s_behave=' + encodeURIComponent(e[2] || '') + '&s_sub=' + encodeURIComponent(e[3] || '') + '&s_fifth=' + encodeURIComponent(e[4] || '') + (l ? '&s_source=' + encodeURIComponent(l)  : '')
      }
      r += C ? '&s_ptag=' + encodeURIComponent(C)  : '',
      r += '&_dc=' + Math.ceil(10000000 * Math.random());
      var u = function () {
        if (t && t.lazy) f.push(r);
         else if (i) {
          var e = h.once(function () {
            A(r)
          });
          s(e),
          setTimeout(e, o)
        } else A(r)
      };
      t.standard ? (c.os.iphone ? r += '&s_platform=5' : c.os.android ? r += '&s_platform=3' : c.os.windows && T && (r += '&s_platform=1'), m(function (e) {
        var t = e.bucketId;
        t && (r += '&plat_bucketid=' + t);
        var i = e.omgid;
        i && (r += '&s_omgid=' + i);
        var n = e.idfa;
        n && (r += '&s_idfa=' + n);
        var o = e.imei;
        o && (r += '&s_imei=' + o),
        u()
      }))  : u()
    }
    function s(e) {
      if (M) e();
       else if ($) var t = g.on('ready', function () {
        t(),
        e()
      });
       else {
        var i = h.once(function () {
          $ = !1,
          M = !0;
          try {
            e()
          } finally {
            g.emit('ready')
          }
        });
        window.addEventListener ? window.addEventListener('load', i)  : window.attachEvent ? window.attachEvent('onload', i)  : i(),
        setTimeout(i, 5000)
      }
    }
    var l,
    c = i(7) (),
    d = i(42),
    u = i(44),
    p = i(45),
    f = i(49),
    h = i(27),
    v = i(26),
    m = i(50),
    g = new v,
    y = function () {
    },
    _ = y,
    w = y,
    b = y,
    x = '//btrace.video.qq.com',
    T = /qqlive/i.test(navigator.userAgent);
    try {
      l = window.jQuery || window.Zepto || window.tvp && window.tvp.$
    } catch (k) {
    }
    l && l(document.body).on('click', '[_boss]', function (e) {
      var t = l(e.currentTarget);
      a(t.attr('_boss'))
    });
    var S,
    E = window.sessionStorage || {
      getItem: function () {
        return ''
      }
    },
    C = d.get('ptag') || E.getItem('ptag') || u.get('ptag'),
    P = d.get('openid'),
    q = d.get('vuserid'),
    I = '/kvcollect?BossId=3255&Pwd=2118551257&s_ua=' + navigator.userAgent + '&s_browser=' + c.browser.name,
    O = '/kvcollect?BossId=5982&Pwd=1952884855&s_ua=' + navigator.userAgent,
    A = function (e) {
      p(e),
      'function' == typeof b && b(e)
    };
    e.exports = {
      uuid: function () {
        return r()
      },
      uuidGetter: function (e) {
        _ = e || y
      },
      referrerGetter: function (e) {
        w = e || y
      },
      setExtraReporter: function (e) {
        b = e || y
      },
      ptag: function (e) {
        C = e
      },
      host: function (e) {
        x = e
      },
      hot: a,
      uid: r
    };
    var M,
    $
  },
  function (e, t, i) {
    'use strict';
    var n = i(43);
    e.exports = {
      get: function (e, t) {
        var i = new RegExp('(\\?|#|&)' + e + '=([^&#]*)(&|#|$)');
        t = t || location.href;
        var o = t.match(i);
        return o ? n(o[2])  : ''
      },
      del: function (e) {
        var t = new RegExp('(\\?|#|&)' + e + '=([^&#]*)(&|#|$)'),
        i = location.href.match(t);
        i = i ? i[2] : '';
        try {
          window.history && history.replaceState && history.replaceState(null, null, location.href.replace(e + '=' + i, ''))
        } catch (n) {
        }
      }
    }
  },
  function (e, t) {
    var i = {
      '<': '&#60;',
      '>': '&#62;',
      '"': '&#34;',
      '\'': '&#39;',
      '&': '&#38;'
    },
    n = function (e) {
      return i[e]
    };
    e.exports = function (e) {
      return ('' + e).replace(/&(?![\w#]+;)|[<>"']/g, n)
    }
  },
  function (e, t) {
    'use strict';
    e.exports = {
      set: function (e, t, i, n, o) {
        if (o) {
          var r = new Date,
          a = new Date;
          a.setTime(r.getTime() + 3600000 * o)
        }
        return document.cookie = e + '=' + t + '; ' + (o ? 'expires=' + a.toGMTString() + '; ' : '') + (n ? 'path=' + n + '; ' : 'path=/; ') + (i ? 'domain=' + i + ';' : 'domain=' + window.location.host + ';'),
        !0
      },
      get: function (e, t) {
        var i = new RegExp('(?:^|;+|\\s+)' + e + '=([^;]*)'),
        n = (t || document.cookie).match(i);
        return n ? n[1] : ''
      },
      del: function (e, t, i) {
        var n = new Date;
        n.setTime(n.getTime() - 1),
        document.cookie = e + '=; expires=' + n.toGMTString() + ';' + (i ? 'path=' + i + '; ' : 'path=/; ') + (t ? 'domain=' + t + ';' : 'domain=' + window.location.host + ';')
      }
    }
  },
  function (e, t, i) {
    'use strict';
    var n = i(46),
    o = /(\.|^)qq\.com$/.test(location.hostname);
    (n.isAndroid() || n.isIOS()) && o ? e.exports = i(47)  : e.exports = i(48)
  },
  function (e, t) {
    'use strict';
    var i = navigator.userAgent,
    n = i.toLowerCase();
    e.exports = {
      isIE: function () {
        return /; msie\b|; trident\b|\bedge\//.test(n)
      },
      isWX: function () {
        return /micromessenger/.test(n)
      },
      isQQ: function () {
        return /\bqq\b/.test(n)
      },
      isQQBrowser: function () {
        return /mqqbrowser/.test(n)
      },
      isQQLive: function () {
        return /qqlive/.test(n)
      },
      isQQLiveBroadcast: function () {
        return /qqlivebroadcast/.test(n)
      },
      isMobile: function () {
        return !!(i.match(/Android/i) || i.match(/android/i) || i.match(/iPhone/i) || i.match(/iPod/i) || i.match(/webOS/i) || i.match(/BlackBerry/i) || i.match(/BB/i) || i.match(/Windows Phone/i) || i.match(/iPad.*MicroMessenger/i) || i.match(/IEMobile/i))
      },
      isIOS: function () {
        return /iPad|iPhone|iPod/.test(i) && !window.MSStream
      },
      isMac: function () {
        return /\bmac\b/.test(n)
      },
      isPC: function () {
        return /Win/.test(i)
      },
      isAndroid: function () {
        return /android/.test(n)
      },
      isChrome: function () {
        return /Chrome\//.test(i)
      },
      wxVer: function () {
        var e = n.match(/micromessenger\/([\d\.]+)/);
        return e ? e[1] : ''
      },
      androidVer: function () {
        var e = n.match(/android\s([0-9\.]*)/);
        return e ? e[1] : ''
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = new XMLHttpRequest;
      t.open('GET', e, !0),
      t.withCredentials = !0,
      t.send()
    }
  },
  function (e, t) {
    'use strict';
    function i() {
    }
    e.exports = function (e) {
      var t = document.createElement('img');
      t.onerror = i,
      t.onload = i,
      t.onabort = i,
      t.src = e
    }
  },
  function (module, exports, __webpack_require__) {
    var cookie = __webpack_require__(44),
    report = __webpack_require__(48),
    storage = function () {
      var e = !1;
      try {
        window.localStorage && (e = !0)
      } catch (t) {
      }
      var i = location.hostname || location.host;
      return e ? {
        get: function (e) {
          return localStorage.getItem(e)
        },
        set: function (e, t) {
          return localStorage.setItem(e, t)
        },
        clear: function (e) {
          return localStorage.removeItem(e)
        }
      }
       : {
        get: function (e) {
          return cookie.get(e)
        },
        set: function (e, t) {
          return cookie.set(e, t, i)
        },
        clear: function (e) {
          return cookie.set(e, '', i)
        }
      }
    }(),
    reg = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,
    k = 'txv_lazyreport_list',
    d = '|',
    clear = function () {
      return storage.clear(k)
    },
    shift = function () {
      var e = storage.get(k);
      if (!e) return '';
      var t = e.split(d),
      i = t.shift();
      return storage.set(k, t.join(d)),
      i ? decodeURIComponent(i)  : ''
    },
    push = function (e) {
      if (e) {
        var t = storage.get(k),
        i = [
        ];
        t && (i = t.split(d)),
        i.push(encodeURIComponent(e)),
        storage.set(k, i.join(d))
      }
    },
    reportItem = function reportItem(item) {
      if (reg.test(item)) try {
        !!report && report(item)
      } catch (e) {
      } else setTimeout(function () {
        try {
          eval(item)
        } catch (e) {
        }
      }, 0)
    },
    _report = function () {
      for (var e = shift(); e; ) reportItem(e),
      e = shift()
    };
    module.exports = {
      push: push,
      clear: clear,
      report: _report
    }
  },
  function (e, t, i) {
    function n(e) {
      window.TenvideoJSBridge ? e(TenvideoJSBridge)  : document.addEventListener('onTenvideoJSBridgeReady', function () {
        e(TenvideoJSBridge)
      }, !1)
    }
    var o = i(7) (),
    r = '',
    a = '',
    s = '',
    l = '',
    c = '',
    d = !1,
    u = !1,
    p = !1,
    f = [
    ];
    d = u = !o.browser.QQvideo,
    e.exports = function (e) {
      if (d && u) return void e({
        omgid: r,
        guid: a,
        idfa: s,
        imei: l,
        bucketId: c
      });
      if (f.push(e), !p) {
        p = !0;
        var t = !1,
        i = function () {
          if (!t && d && u) {
            t = !0;
            var e = f;
            f = [
            ];
            for (var i = {
              omgid: r,
              guid: a,
              idfa: s,
              imei: l,
              bucketId: c
            }, n = 0, o = e.length; n < o; n++) setTimeout(e[n], 0, i)
          }
        };
        setTimeout(function () {
          d = u = !0,
          i()
        }, 3000),
        n(function (e) {
          e.invoke('getDeviceInfo', null, function (e) {
            d = !0;
            var t;
            try {
              t = JSON.parse(e).result
            } catch (n) {
            }
            t || (t = {
            }),
            r = t.omgid,
            s = t.idfa,
            l = t.imei,
            a = t.guid,
            i()
          }),
          e.invoke('getAppInfo', null, function (e) {
            u = !0;
            var t;
            try {
              t = JSON.parse(e).result
            } catch (n) {
            }
            t || (t = {
            }),
            c = t.bucketId,
            i()
          })
        })
      }
    }
  },
  function (e, t, i) {
    'use strict';
    var n = i(7) ();
    e.exports = function () {
      return function (e, t) {
        t = t || {
        };
        t.debug || window.BANNERDEBUG;
        if (n.browser.Safari) location.href = e;
         else if (n.browser.sukan && n.os.ios && parseInt(n.os.version) <= 9) location.href = e;
         else {
          var i = document.createElement('iframe');
          i.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
          i.src = e,
          document.body.appendChild(i)
        }
        var o = Date.now();
        setTimeout(function () {
          var e = Date.now();
          e - o < 3050 && t.onfail && t.onfail()
        }, 3000)
      }
    }
  },
  function (e, t, i) {
    'use strict';
    var n = (i(24), navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/)),
    o = i(53),
    r = i(27),
    a = i(7) ();
    e.exports = function (e) {
      if (!e) throw new Error('需要传入package对象，获得公众号appid和应用appid');
      var t = e.wxappid,
      i = e.appappid;
      return function (e, s, l) {
        s = s || {
        },
        l = l || {
        };
        s.debug || window.BANNERDEBUG;
        n && 1 != r.verCompare('6.5.5', n[1]) ? setTimeout(function () {
          location.href = e
        }, 50)  : a.os.ipad ? WeixinJSBridge.invoke('launchApplication', {
          schemeUrl: e
        }, function (e) {
          'launchApplication:ok' != e.err_msg && s.onfail && s.onfail()
        })  : o({
          appId: t
        }, function () {
          function t() {
            return 'function' == typeof wx.invoke ? wx.invoke.apply(wx, arguments)  : void window.WeixinJSBridge.invoke.apply(WeixinJSBridge, arguments)
          }
          var n = {
            appID: i,
            extInfo: e,
            parameter: e
          };
          l.schemeOnly && (n = {
            schemeUrl: e
          }),
          t('launchApplication', n, function (e) {
            'launchApplication:ok' != e.err_msg && s.onfail && s.onfail()
          })
        })
      }
    }
  },
  function (e, t, i) {
    'use strict';
    function n(e, t) {
      t = d.once(t || o);
      var i = d.extend({
        debug: !1,
        beta: !0,
        appId: f
      }, e);
      u(i.api || '//video.qq.com/fcgi-bin/get_js_signature', {
        otype: 'json',
        appid: i.appId,
        url: location.href.split('#') [0]
      }, function (e, n) {
        function o() {
          wx.config({
            beta: i.beta,
            debug: i.debug,
            appId: i.appId,
            timestamp: n.timestamp,
            nonceStr: n.ramdon_str,
            signature: n.signature,
            jsApiList: [
              'checkJsApi',
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone',
              'hideMenuItems',
              'showMenuItems',
              'hideAllNonBaseMenuItem',
              'showAllNonBaseMenuItem',
              'translateVoice',
              'startRecord',
              'stopRecord',
              'onVoiceRecordEnd',
              'playVoice',
              'onVoicePlayEnd',
              'pauseVoice',
              'stopVoice',
              'uploadVoice',
              'downloadVoice',
              'chooseImage',
              'previewImage',
              'uploadImage',
              'downloadImage',
              'getNetworkType',
              'openLocation',
              'getLocation',
              'hideOptionMenu',
              'showOptionMenu',
              'closeWindow',
              'scanQRCode',
              'chooseWXPay',
              'openProductSpecificView',
              'addCard',
              'chooseCard',
              'openCard',
              'launchApplication'
            ].concat(i.jsApiList || [
            ])
          }),
          wx.ready(function () {
            t(null, n)
          }),
          wx.error(function (e) {
            t(e || 'WX sign error.', n)
          })
        }
        return n && 0 === n.ret ? void (window.wx ? o()  : document.addEventListener('WeixinJSBridgeReady', o))  : t(e || n && n.msg || 'error')
      }, {
        pn: 'callback_func'
      })
    }
    function o() {
    }
    function r(e, t) {
      return t = t || o,
      p.isWX() ? c ? void t(null, l)  : (s || (a = e, s = d.delegator(function (e) {
        return n(a, function (t, i) {
          t || (c = !0, l = i),
          e(t, i)
        })
      }), window.addEventListener('popstate', function () {
        l = c = null,
        s()
      }), h && (history.pushstate = function () {
        return setTimeout(function () {
          l = c = null,
          s()
        }, 0),
        h.apply(history, arguments)
      })), s(t))  : void t('Only work for wx app')
    }
    var a,
    s,
    l,
    c,
    d = i(27),
    u = i(31),
    p = i(46),
    f = 'wx5a3178167066897b',
    h = history.pushstate;
    r.appId = f,
    r.ready = function (e) {
      function t() {
        wx.ready(e)
      }
      e && (window.wx ? t()  : document.addEventListener('WeixinJSBridgeReady', t))
    },
    e.exports = r
  },
  function (e, t, i) {
    'use strict';
    var n = i(55),
    o = window.videoliteBanner = e.exports = function (e) {
      e = e || {
      };
      var t = n(e).model({
        confid: o.getConfid()
      }).openFixer(function (e, t) {
        var i = tlux.store.video.model,
        n = tlux.store.cover.model;
        return 'videolite://v.qq.com/VideoDetailActivity?vid=' + (i.vid || n.vid) + '&cid=' + (n.cover_id || '') + '&from=third_897'
      });
      return t
    };
    o.getConfid = function () {
      return 897
    }
  },
  function (e, t, i) {
    var n = i(7) (),
    o = i(19),
    r = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
    a = i(27),
    s = {
      name: '腾讯视频极速版',
      icon: 'https://puui.qpic.cn/vupload/0/20190215_1550196841750_yarxedhxe29.png/0',
      pkg: n.os.iphone ? 'com.tencent.videoplus.iphone' : 'com.tencent.videolite.android',
      pkgurl: 'videolite://',
      scheme: 'videolite://v.qq.com/HomeActivity',
      appid: 101546208,
      via: 'ANDROID.VIDEOLITE',
      downloadUrl: function () {
        return n.os.ios ? n.os.iphone ? 'https://itunes.apple.com/cn/app/id1462049868?mt=8' : 'https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8' : n.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=76&confid={confid}&platform=aphone' : 'https://m.v.qq.com/app/tenvideo_lite_down/index.html'
      }(),
      md5: function (e) {
        return '//mcgi.v.qq.com/commdatav2?cmd=39&confid=' + e + '&platform=aphone'
      },
      uaname: 'videolite',
      wxappid: 'wx5a3178167066897b',
      appappid: 'wx434fd146a665ff62'
    },
    l = {
      tryopen: i(56) (),
      wx: i(52) (s)
    };
    window.videoliteBanner = e.exports = function (e) {
      function t(t, i) {
        var o = i.openurl,
        s = i.downloadurl;
        n.os.ios && parseInt(n.os.version) > 9 && (t = 2),
        2 == t ? !n.browser.WeChat || r && 1 != a.verCompare('6.5.5', r[1]) ? l.tryopen(o, {
          onfail: function () {
            location.href = s
          }
        })  : l.wx(o, {
          onfail: function () {
            l.tryopen(o, {
              onfail: function () {
                location.href = s
              }
            })
          }
        })  : 1 == t || 14 == t ? n.browser.WeChat ? l.wx(o, {
          debug: e.debug || location.href.indexOf('debug') != - 1,
          onfail: function () {
            l.tryopen(o, {
              onfail: function () {
                location.href = s
              }
            })
          }
        })  : setTimeout(function () {
          location.href = o
        }, 50)  : 10 == t ? i.downloader.pause()  : 11 == t || 13 == t ? i.downloader.install()  : i.downloader && 15 != t ? i.downloader.start({
          url: s,
          confid: i.model.confid,
          verify: !1
        })  : setTimeout(function () {
          location.href = s
        }, 50)
      }
      e = e || {
      };
      var i = o({
        'package': e['package'] || s
      }).model(e.model || {
        confid: 51
      });
      return i.downloadFixer(function (e, t) {
        return e.replace('{confid}', t.confid)
      }),
      e.defaultAction === !1 ? i : (i.on('action', t), i)
    }
  },
  function (e, t, i) {
    'use strict';
    var n = i(7) ();
    e.exports = function () {
      return function (e, t) {
        t = t || {
        };
        t.debug || window.BANNERDEBUG;
        if (n.browser.Safari) location.href = e;
         else {
          var i = document.createElement('iframe');
          i.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
          i.src = e,
          document.body.appendChild(i)
        }
        var o = setTimeout(function () {
          t.onfail && t.onfail()
        }, 2500);
        window.onblur = function () {
          clearTimeout(o)
        }
      }
    }
  },
  function (e, t, i) {
    'use strict';
    function n() {
      if (!isNaN( + a) && a < 100000 && a > 9) return + a;
      if (c.browser.WeChat) return 267;
      var e = localStorage.getItem('referrer_host') || l(document.referrer),
      t = localStorage.getItem('mreferrer_host') || l(s.get('mreferrer')),
      i = navigator.userAgent.toLowerCase(),
      n = '';
      return e = r(e) ? r(t) ? '' : t : e,
      e ? d.every(function (t) {
        return e.indexOf(t.url) == - 1 || (n = t.confid, !1)
      }) && (n = o(e))  : c.browser.MQQClient || (c.browser.MQQ ? n = 586 : d.every(function (e) {
        return i.indexOf(e.ua) == - 1 || (n = e.confid, !1)
      }) && (n = o(i))),
      n || d.every(function (e) {
        return e.ptag.indexOf(a) == - 1 || (n = e.confid, !1)
      }) && (n = o(a)),
      n
    }
    function o(e) {
      var t = '';
      return d.every(function (i) {
        i.like.every(function (n) {
          return e.indexOf(n) == - 1 || (t = i.confid, !1)
        })
      }),
      t
    }
    function r(e) {
      var t = [
        'v.qq.com',
        'film.qq.com',
        '3g.qq.com',
        'm.v.qq.com',
        'live.qq.com'
      ];
      return t.indexOf(e) != - 1
    }
    var a = i(58),
    s = i(42),
    l = i(59),
    c = i(60);
    e.exports = n;
    var d = [
      {
        ua: null,
        ptag: [
          'qqbrowser.tv',
          'qqbrowser.variety',
          'qqbrowser.tv',
          'tencentzhuanqu',
          'qqbrowser.movie',
          'qqbrowser.cartoon'
        ],
        url: [
        ],
        like: [
          'html5.qq',
          'mqqbrowser'
        ],
        confid: 586
      },
      {
        ua: 'liebao',
        ptag: [
        ],
        url: [
        ],
        like: [
          'liebao'
        ],
        confid: 587
      },
      {
        ua: 'DopoolTvWebView',
        ptag: [
        ],
        url: [
        ],
        like: [
        ],
        confid: 590
      },
      {
        ua: 'ucbrowser',
        ptag: [
        ],
        url: [
        ],
        like: [
          'ucbrowser',
          '.uc.',
          '_uc_',
          'ucweb'
        ],
        confid: 588
      },
      {
        ua: null,
        ptag: [
          'xiaohong'
        ],
        url: [
        ],
        like: [
        ],
        confid: 1123
      }
    ]
  },
  function (e, t, i) {
    'use strict';
    var n = i(42);
    e.exports = function () {
      var e = location.href.toLowerCase(),
      t = n.get('ptag', e) || n.get('adtag', e) || n.get('pgv_ref', e) || sessionStorage.getItem('ptag') || sessionStorage.getItem('sessionptag');
      return t && sessionStorage.setItem('ptag', t),
      t || ''
    }()
  },
  function (e, t) {
    'use strict';
    e.exports = function (e) {
      var t = '',
      i = /.*\:\/\/([^\/]*).*/,
      n = e.match(i);
      return 'undefined' != typeof n && null != n && (t = n[1]),
      t
    }
  },
  function (e, t) {
    e.exports = Txplayer.$
  },
  function (e, t, i) {
    function n(e) {
      function t(t, n) {
        t = $.extend(t, {
          BossId: 2453,
          Pwd: 0
        }, e.defaults),
        e.fixBefore(t, function (e) {
          var t = [
          ];
          Object.keys(e).forEach(function (i) {
            t.push(i + '=' + e[i])
          }),
          n(i + t.join('&'))
        })
      }
      var i = '//btrace.qq.com/kvcollect?',
      n = function (e) {
        t(e, function (e) {
          r(e)
        })
      };
      return n.lazy = function (e) {
        t(e, function (e) {
          o(e)
        })
      },
      n
    }
    var o = i(49),
    r = i(48),
    a = i(62),
    s = e.exports = {
    };
    Object.keys(a).forEach(function (e) {
      s[e] = n(a[e])
    })
  },
  function (e, t, i) {
    var n = i(63),
    o = i(44);
    e.exports = {
      banner: {
        defaults: {
          BossId: 2503,
          Pwd: 0,
          iTy: 2503,
          iFlow: 0,
          iSta: 0,
          sBiz: 'banner',
          sPageId: 0,
          sPos: 0,
          sIp: '',
          src: 'newPlay',
          version: [
            '2',
            '1'
          ].indexOf(window.COVER_TYPE) != - 1 ? '16' : '06'
        },
        param: {
          sOp: '',
          reportType: '',
          cid: '',
          vid: '',
          bannerPos: '',
          isInstallOpen: '',
          channelID: ''
        },
        fixBefore: function (e, t) {
          e.iQQ = '',
          e.sUrl = location.href,
          e.sRef = document.referrer,
          e.ua = navigator.userAgent,
          e.mobileUV = o.get('mobileUV'),
          e.userid = o.get('mobileUV'),
          t(e)
        }
      },
      game: {
        defaults: {
          BossId: 5366,
          Pwd: 2003535015,
          status: 0,
          project_code: 'video_m',
          clf: 'video_m_blank'
        },
        param: {
          id: '',
          client: '',
          type: '',
          qq: '',
          openid: '',
          idfa: '',
          imei: '',
          network: '',
          appversion: '',
          systemversion: '',
          logintype: '',
          report_type: '',
          gameid: '',
          url: '',
          ua: ''
        },
        fixBefore: function (e, t) {
          n.init(function () {
            e.logintype = n.loginType(),
            e.qq = '',
            e.openid = 'wx' == n.loginType() ? o.get('openid')  : '',
            e.url = location.href,
            e.ua = navigator.userAgent.replace(/,/gi, ' '),
            t(e)
          })
        }
      },
      gameShow: {
        defaults: {
          BossId: 5372,
          Pwd: 392409187,
          project_code: 'video_m'
        },
        param: {
          id: '',
          client: '',
          type: '',
          qq: '',
          openid: '',
          idfa: '',
          imei: '',
          network: '',
          appversion: '',
          systemversion: '',
          logintype: '',
          report_type: '',
          gameid: '',
          url: '',
          ua: ''
        },
        fixBefore: function (e, t) {
          n.init(function () {
            e.logintype = n.loginType(),
            e.qq = '',
            e.openid = 'wx' == n.loginType() ? o.get('openid')  : '',
            e.url = location.href,
            e.ua = navigator.userAgent.replace(/,/gi, ' '),
            t(e)
          })
        }
      }
    }
  },
  function (e, t, i) {
    var n = i(64);
    e.exports = n
  },
  function (e, t, i) {
    !function (t, i) {
      e.exports = i()
    }(window, function () {
      return function (e) {
        function t(n) {
          if (i[n]) return i[n].exports;
          var o = i[n] = {
            i: n,
            l: !1,
            exports: {
            }
          };
          return e[n].call(o.exports, o, o.exports, t),
          o.l = !0,
          o.exports
        }
        var i = {
        };
        return t.m = e,
        t.c = i,
        t.d = function (e, i, n) {
          t.o(e, i) || Object.defineProperty(e, i, {
            enumerable: !0,
            get: n
          })
        },
        t.r = function (e) {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module'
          }),
          Object.defineProperty(e, '__esModule', {
            value: !0
          })
        },
        t.t = function (e, i) {
          if (1 & i && (e = t(e)), 8 & i) return e;
          if (4 & i && 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && e && e.__esModule) return e;
          var n = Object.create(null);
          if (t.r(n), Object.defineProperty(n, 'default', {
            enumerable: !0,
            value: e
          }), 2 & i && 'string' != typeof e) for (var o in e) t.d(n, o, function (t) {
            return e[t]
          }.bind(null, o));
          return n
        },
        t.n = function (e) {
          var i = e && e.__esModule ? function () {
            return e['default']
          }
           : function () {
            return e
          };
          return t.d(i, 'a', i),
          i
        },
        t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = '/',
        t(t.s = 3)
      }([function (e) {
        e.exports = {
          a: '2.3.8'
        }
      },
      function (e, t, i) {
        'use strict';
        (function (e) {
          function i(e) {
            return (i = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
              return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
            }
             : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
            }) (e)
          }
          var n = 'object' == (void 0 === e ? 'undefined' : i(e)) && e && e.Object === Object && e;
          t.a = n
        }).call(this, i(2))
      },
      function (e, t) {
        function i(e) {
          return (i = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        var n;
        n = function () {
          return this
        }();
        try {
          n = n || new Function('return this') ()
        } catch (e) {
          'object' === ('undefined' == typeof window ? 'undefined' : i(window)) && (n = window)
        }
        e.exports = n
      },
      function (e, t, i) {
        'use strict';
        function n(e) {
          return (n = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function o(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function r(e, t) {
          var i = {
          };
          if (a(e) && e.length > 0) for (var n, o, r, s = t ? Ee : c, l = e.split(/;\s?/g), d = 0, u = l.length; d < u; d++) {
            if ((r = l[d].match(/([^=]+)=/i)) instanceof Array) try {
              n = Ee(r[1]),
              o = s(l[d].substring(r[1].length + 1))
            } catch (e) {
            } else n = Ee(l[d]),
            o = '';
            n && (i[n] = o)
          }
          return i
        }
        function a(e) {
          return 'string' == typeof e
        }
        function s(e) {
          return a(e) && '' !== e
        }
        function l(e) {
          if (!s(e)) throw new TypeError('Cookie name must be a non-empty string')
        }
        function c(e) {
          return e || ''
        }
        function d(e) {
          return (d = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function u(e) {
          return Object.prototype.toString.call(e)
        }
        function p(e, t, i) {
          var n = '';
          if (!e) throw new Error('[util.url.buildUrl]url is required');
          return t && null !== t && (n = function (e, t, i) {
            var n,
            o,
            r,
            a = [
            ];
            for (n in e) o = e[n],
            null != (r = f(n, o, t, i)) && '' !== r && a.push(r);
            return a.join('&')
          }(t, i)) && n.length ? (0 === e.indexOf('//') && (e = window.location.protocol + e), [
            e,
            e.indexOf('?') > - 1 ? '&' : '?',
            n
          ].join(''))  : e
        }
        function f(e, t, i) {
          var n,
          o,
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          a = d(t),
          s = 0,
          l = [
          ];
          if ('' === t && r) return '';
          if ('number' === a || 'string' === a || 'boolean' === a) return [e,
          i ? encodeURIComponent(t)  : t].join('=');
          if (function (e) {
            return '[object Object]' === u(e)
          }(t)) for (n in t) l.push(f([e,
          '[',
          n,
          ']'].join(''), t[n], i, r));
           else if (Array.isArray(t)) for (o = t.length; s < o; s++) l.push(f([e,
          '[',
          s,
          ']'].join(''), t[s], i, r));
          return (l = l.filter(function (e) {
            return null != e && '' !== ('[object String]' !== u(t = e) ? t : t.replace(/^\s+|\s+$/g, ''));
            var t
          })).length ? l.join('&')  : ''
        }
        function h(e, t, i, n) {
          this.code = e,
          this.msg = t,
          this.res = i,
          this.errorType = n || Je.LOGIC_ERR
        }
        function v(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          };
          if (ue() && e.match(/\/\/pay.video.qq.com/)) {
            e = e.replace(/\/\/(pay.video.qq.com)/, '//access.video.qq.com/trans/$1'),
            $.isPlainObject(t) || (t = {
            });
            var n = z();
            $.extend(t, {
              vappid: Ze,
              vsecret: et
            }, n)
          }
          return !Ke && /^\/\//.test(e) && (e = 'https:'.concat(e)),
          new Promise(function (n, o) {
            $.ajax($.extend({
              url: e,
              dataType: 'jsonp',
              data: t,
              success: function (e) {
                e ? n(e)  : o(new h(0, '服务器开小差了！请重试', null, Je.NETWORK_ERR))
              },
              error: function () {
                o(new h(0, '网络开小差了！请重试', null, Je.NETWORK_ERR))
              }
            }, i))
          })
        }
        function m(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function g(e) {
          return (g = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function y() {
        }
        function _(e) {
          var t = g(e);
          return !!e && ('object' === t || 'function' === t)
        }
        function w(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function b(e) {
          return (b = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function x(e) {
          return (x = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function T(e) {
          var t = e.sBiz,
          i = e.bizId,
          n = void 0 === i ? at : i,
          o = e.pageId,
          r = void 0 === o ? st : o,
          a = e.modId,
          s = void 0 === a ? '' : a,
          l = e.msg,
          c = e.file,
          d = e.line,
          u = e.fn,
          p = e.level,
          f = e.code,
          h = e.operate;
          (t || n && r && s) && (t || (t = ''.concat(n, '.').concat(r, '.').concat(s)), lt.report({
            sBiz: t,
            errmsg: l,
            srcfile: c,
            srcline: d,
            func: u,
            level: p,
            iSta: f,
            sOp: h
          }))
        }
        function k(e) {
          T(vt(e, {
            level: ct
          }))
        }
        function S(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })  : e[t] = i,
          e
        }
        function E(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {
            },
            n = Object.keys(i);
            'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
              return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))),
            n.forEach(function (t) {
              C(e, t, i[t])
            })
          }
          return e
        }
        function C(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })  : e[t] = i,
          e
        }
        function P(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function q(e) {
          window.__LOGIN_VERSION__ && (e.f_version = window.__LOGIN_VERSION__),
          e.f_lib_version = _t.a,
          e.f_vuserid = xe(),
          e.f_guid = qe.get('guid') || qe.get('video_guid'),
          e.f_vuserid !== qe.get('vuserid') && (e.f_vuserid2 = qe.get('vuserid')),
          wt.report(e)
        }
        function I(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {
            },
            n = Object.keys(i);
            'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
              return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))),
            n.forEach(function (t) {
              O(e, t, i[t])
            })
          }
          return e
        }
        function O(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })  : e[t] = i,
          e
        }
        function A(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          },
          i = arguments.length > 2 ? arguments[2] : void 0,
          n = e;
          return n.match(/^(https?:)?\/\//) || (n = $t + n, t = I({
          }, t, {
            vappid: Ot,
            vsecret: At
          })),
          new Promise(function (o, r) {
            v(n, t, i).then(function (i) {
              var n = '',
              r = 0;
              i && 'errcode' in i && 0 !== i.errcode ? (r = i.errcode, n = i.errmsg || i.msg)  : 'result' in i && i.result && 0 !== i.result.code && (r = i.result.code, n = i.result.msg),
              o(i),
              0 !== r && gt.fatal({
                modId: e,
                code: r,
                msg: '['.concat(e, '] ').concat(n || 'unknown', ' (').concat(r || - 1, ')')
              }),
              e.match(/^(https?:)?\/\//) || q({
                f_event: St,
                f_cgi: e,
                f_cgi_param: JSON.stringify(t),
                f_errcode: r,
                f_errmsg: n
              })
            }) ['catch'](function (t) {
              r(t),
              gt.fatal({
                modId: e,
                code: - 1,
                msg: '['.concat(e, '] network error (-1)')
              })
            })
          })
        }
        function M() {
          var e = qe.get('main_login');
          return 'qq' === e || 'wx' === e ? e : B() && R() ? 'qq' : ''
        }
        function j() {
          var e = '';
          if (location.host.match(/(film|v)\.qq\.com/)) {
            var t = location.host.split('.'),
            i = t.length;
            e = i > 3 ? t.slice(i - 3, i).join('.')  : location.host
          }
          return e
        }
        function L(e) {
          !function (e) {
            if (window.txvCookie) return e(window.txvCookie);
            var t = document.getElementById('tvv_login_cookie_cross_domin_frame'),
            i = setTimeout(function () {
              e(window.txvCookie || null)
            }, 1000);
            if (!t) {
              window.loadVideoCookie = function (t) {
                window.txvCookie = t,
                clearTimeout(i),
                e(t)
              };
              var n = document.createElement('iframe');
              n.src = '//video.qq.com/getcookie/cookie.html?max_age=31104000',
              n.id = 'tvv_login_cookie_cross_domin_frame',
              n.style.display = 'none',
              document.body.appendChild(n)
            }
            q({
              f_event: xt
            })
          }(function (t) {
            if (t) {
              var i = t.getCookie();
              if (!Ge.isApp) {
                var n = j(),
                o = 'qq' === i.main_login ? 'wx' : 'qq';
                (qe.get(''.concat(o, '_nick')) || qe.get(''.concat(o, '_head'))) && (qe.remove(''.concat(o, '_nick'), {
                  domain: n,
                  path: '/'
                }), qe.remove(''.concat(o, '_head'), {
                  domain: n,
                  path: '/'
                })),
                jt.forEach(function (e) {
                  n !== location.host && qe.remove(e, {
                    domain: location.host
                  }),
                  qe.set(e, i[e] || '', {
                    expires: i[e] ? Mt : - 24,
                    domain: n,
                    path: '/'
                  })
                })
              }
              e && e(i)
            } else e && e(null)
          }),
          q({
            f_event: bt
          })
        }
        function D(e) {
          var t = qe.get('vqq_appid') || qe.get('appid');
          if (It.indexOf(t) > - 1) return e();
          var i = M() || 'qq',
          n = z();
          A('auth_refresh', I({
            type: i
          }, n), {
            timeout: 30000
          }).then(function (t) {
            if (t && 0 === t.errcode) {
              var n = j(),
              o = {
                expires: Mt,
                domain: n,
                path: '/'
              };
              if ('qq' === i && qe.get('vqq_appid') && qe.get('vqq_openid')) {
                var r = 'qq' === i ? 'vqq_' : '';
                for (var a in t) jt.indexOf(a) > - 1 && qe.set(r + a, t[a] || '', {
                  expires: t[a] ? Mt : - 24,
                  domain: n,
                  path: '/'
                })
              } else qe.set('vuserid', t.vuserid, o),
              qe.set('vusession', t.vusession, o);
              qe.set(''.concat(i, '_nick'), t.nick, o),
              qe.set(''.concat(i, '_head'), t.head, o),
              qe.set('last_refresh_time', + new Date, o),
              qe.set('last_refresh_vuserid', t.vuserid, o),
              function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                Nt && clearTimeout(Nt),
                e > 0 && (Nt = setTimeout(function () {
                  D(),
                  clearTimeout(Nt)
                }, 1000 * e))
              }(t.next_refresh_time),
              e && e()
            } else t && [
              - 1001,
              - 1002,
              - 1003,
              - 1004,
              1006,
              1111,
              1112
            ].indexOf(t.errcode) > - 1 ? N(e)  : (Lt < Dt ? D(e)  : e && e(), Lt++)
          }) ['catch'](function (t) {
            Lt < Dt ? D(e)  : e && e(),
            Lt++
          })
        }
        function N(e, t) {
          var i = [
          ];
          'function' == typeof e && (t = e, e = M() || 'qq'),
          i = 'wx' === e ? Ct : qt.concat(Pt);
          var n = j();
          (i = i.concat(Et)).forEach(function (e) {
            qe.remove(e, {
              domain: n,
              path: '/'
            })
          }),
          (qe.get('uin') || qe.get('luin')) && Pt.forEach(function (e) {
            qe.remove(e, {
              domain: 'qq.com',
              path: '/'
            })
          }),
          qe.remove('last_refresh_time', {
            domain: n,
            path: '/'
          }),
          qe.remove('last_refresh_vuserid', {
            domain: n,
            path: '/'
          });
          var o = {
            type: e
          };
          'qq' === e && qe.get('appid') && (o.keepwx = 1),
          A('auth_logout', o, {
            timeout: 10000
          }).then(t) ['catch'](t)
        }
        function z() {
          var e = {
          },
          t = M();
          if ('qq' === t) {
            var i = R();
            i && (e.g_tk = U(i));
            var n = qe.get('vqq_vusession');
            n && (e.g_vstk = U(n));
            var o = qe.get('vqq_access_token');
            o && (e.g_actk = U(o))
          } else if ('wx' === t) {
            var r = qe.get('vusession');
            r && (e.g_vstk = U(r));
            var a = qe.get('access_token');
            a && (e.g_actk = U(a))
          }
          return e
        }
        function B() {
          if ('' === R()) return 0;
          var e = parseInt(qe.get('uin').replace(/^o0*/g, ''), 10);
          return (!e || e <= 10000) && (!(e = parseInt(qe.get('luin').replace(/^o0*/g, ''), 10)) || e <= 10000) ? 0 : e
        }
        function R() {
          var e = qe.get('skey') || qe.get('lskey');
          return e ? e.trim()  : ''
        }
        function U(e) {
          for (var t = 5381, i = 0, n = e.length; i < n; ++i) t += (t << 5) + e.charAt(i).charCodeAt();
          return 2147483647 & t
        }
        function V(e, t) {
          t = t || location.href;
          var i,
          n = new RegExp('[?&#]'.concat(e, '=([^&#]+)'), 'gi'),
          o = t.match(n);
          return o && o.length > 0 && (i = o[o.length - 1].split('=')) && i.length > 1 ? W(i[1])  : ''
        }
        function W(e) {
          return e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
        }
        function X(e) {
          return (X = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function H(e) {
          return (H = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function Y(e) {
          return (Y = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function F(e) {
          return (F = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function Q(e) {
          if (!e || '[object Object]' !== yi.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          if (!t) return !0;
          var i = _i.call(t, 'constructor') && t.constructor;
          return 'function' == typeof i && wi.call(i) === wi.call(Object)
        }
        function G() {
          return new Promise(function (e) {
            'undefined' == typeof TenvideoJSBridge ? Ti.push(e)  : e()
          })
        }
        function J(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          }).ignoreAlarm,
          new Promise(function (i, n) {
            return Ge.isApp ? void G().then(function () {
              if ('function' != typeof TenvideoJSBridge[bi]) return n({
                message: 'TenvideoJSBridge 找不到方法 "invoke"'
              });
              var o = TenvideoJSBridge[bi](e, t, function (e) {
                if (Q(e)) return 0 === Object.keys(e).length ? (J('toast', {
                  content: '此版本暂未支持，请升级到最新版本！'
                }), n({
                  errMsg: 'callback return "' + JSON.stringify(e) + '", maybe is not supported!'
                }))  : i(e.result ? e.result : e);
                var t,
                o,
                r = null;
                try {
                  r = JSON.parse(e)
                } catch (a) {
                  n({
                    errMsg: 'callback result ' + JSON.stringify(e) + ' parse error "' + a.message + '", maybe is not supported!'
                  })
                }
                return r ? r.result && Object.keys(r.result).length > 0 ? i(r.result)  : r.errCode && r.errMsg ? (t = r.errCode, o = r.errMsg, console && void 0, n(r))  : i(r)  : i(e)
              });
              try {
                o && i(JSON.parse(o))
              } finally {
              }
            })  : n({
              message: '[atom] 非 APP 环境下，不支持调用 JSAPI'
            })
          })
        }
        function K(e, t, i) {
          var n = {
          };
          if (Q(i)) n = i;
           else try {
            n = JSON.parse(i)
          } catch (e) {
            Ge.isApp || Ge.isWin || void 0
          }
          var o = ki[e];
          if (o && o.length > 0) {
            for (var r = o.length, a = 0; a < r; a++) o[a] && 'function' == typeof o[a].listener && (o[a].listener(n), o[a].once && o.splice(a, 1, null));
            for (var s = [
            ], l = 0; l < r; l++) o[l] && s.push(o[l]);
            ki[e] = s
          }
        }
        function Z(e, t) {
          for (var i = - 1, n = 0, o = e.length; n < o; n++) if (e[n].listener.toString() === t.toString()) {
            i = n;
            break
          }
          return i
        }
        function ee(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function te(e) {
          return (te = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
            return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }
           : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
          }) (e)
        }
        function ie(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
          }
        }
        function ne(e, t) {
          return !t || 'object' !== te(t) && 'function' != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return e
          }(e)  : t
        }
        function oe(e) {
          return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }) (e)
        }
        function re(e, t) {
          return (re = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t,
            e
          }) (e, t)
        }
        function ae(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })  : e[t] = i,
          e
        }
        function se(e) {
          return e || (e = M()),
          'wx' === e ? le()  : ce()
        }
        function le() {
          return !!('wx' === M() && qe.get('appid') && qe.get('openid') && qe.get('access_token'))
        }
        function ce() {
          return de() || ue()
        }
        function de() {
          return 'wx' !== M() && !(ue() || !(qe.get('uin') && qe.get('skey') || qe.get('luin') && qe.get('lskey')))
        }
        function ue() {
          return 'wx' !== M() && !!('qq' === M() && qe.get('vqq_appid') && qe.get('vqq_openid') && qe.get('vqq_access_token'))
        }
        function pe(e) {
          if ('function' == typeof e) {
            if (!se()) return e(!1);
            var t = {
            };
            'wx' === M() ? (t.type = 3, t.appid = qe.get('appid'), t.openid = qe.get('openid'), t.access_token = qe.get('access_token'))  : ue() ? (t.type = 6, t.vqq_appid = qe.get('vqq_appid'), t.vqq_openid = qe.get('vqq_openid'), t.vqq_access_token = qe.get('vqq_access_token'))  : de() && (t.type = 1, t.uin = B(), t.skey = R()),
            fe(t).then(function () {
              e(!0)
            }) ['catch'](function () {
              e(!1)
            })
          }
        }
        function fe(e, t, i) {
          return new Promise(function (n, o) {
            return 'function' != typeof t && (t = n, i = o),
            A('//vip.video.qq.com/fcgi-bin/comm_cgi?name=check_login&otype=json', e, {
              timeout: 60000
            }).then(function (e) {
              e && e.result && 0 === e.result.code ? t && t(e)  : i && i(e)
            }) ['catch'](function () {
              i && i(new Error('[//vip.video.qq.com/fcgi-bin/comm_cgi?name=check_login] Request Error'))
            })
          })
        }
        function he(e) {
          Ge.isApp ? J('logout', {
            needBack: !1
          }, function (t) {
            try {
              var i = JSON.parse(t);
              i && 0 === i.errCode ? e && e(!0)  : e && e(!1)
            } catch (t) {
              e && e(!1)
            }
          })  : N(function () {
            e && e(!0)
          }),
          q({
            f_event: kt
          })
        }
        function ve() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            type: ''
          },
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          'string' == typeof e ? e = {
            type: e
          }
           : '[object Object]' !== Object.prototype.toString.call(e) && (e = {
          }),
          e.url || (e.url = location.href),
          q({
            f_event: Tt,
            f_type: e.type
          }),
          Ge.isApp ? J('actionLogin', {
            type: e.type || 'tv'
          }).then(function () {
            location.href = e.url
          })  : ('wx' === e.type && (e.back = 1), t ? he(me.bind(this, e))  : me(e))
        }
        function me(e) {
          e.url && (e.ru = e.url, delete e.url),
          qe.remove('last_refresh_time', {
            domain: j(),
            path: '/'
          }),
          qe.remove('last_refresh_vuserid', {
            domain: j(),
            path: '/'
          }),
          location.href = p('//film.qq.com/weixin/login.html', function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {
              },
              n = Object.keys(i);
              'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
              }))),
              n.forEach(function (t) {
                ae(e, t, i[t])
              })
            }
            return e
          }({
            qqAuth: V('qqAuth')
          }, e), !0)
        }
        function ge() {
          return se() ? ue() || _e() && we() ? Promise.resolve({
            type: M(),
            nick: _e(),
            headurl: we(),
            id: B() || be()
          })  : new Promise(function (e) {
            A('//video.qq.com/fcgi-bin/get_userinfo', {
              type: le() ? 1 : 2
            }).then(function (t) {
              0 === t.ret && t.data || e(null);
              var i = t.data[0];
              2 === i.type && (i.headurl = i.headurl.replace(/s=40/, 's=140')),
              i.type = 1 === i.type ? 'wx' : 'qq',
              e(i)
            }) ['catch'](function () {
              var t = 502,
              i = '[request] get_userinfo error';
              gt.fatal(t, i),
              e(null)
            })
          })  : Promise.resolve(null)
        }
        function ye() {
          return Ge.isLocalPkg && qe.isProxyEnabled() ? qe.getCookies()  : r(document.cookie)
        }
        function _e() {
          return se() ? decodeURIComponent(qe.get(''.concat(M(), '_nick')))  : ''
        }
        function we() {
          return se() ? decodeURIComponent(qe.get(''.concat(M(), '_head')))  : ''
        }
        function be() {
          var e = M();
          return e ? 'qq' === e ? ue() ? qe.get('vqq_openid')  : B()  : qe.get('openid')  : ''
        }
        function xe() {
          return M() ? ue() ? qe.get('vqq_vuserid')  : qe.get('vuserid')  : ''
        }
        function Te() {
          return J('getMainCookie').then(function (e) {
            var t = {
            };
            e && e.cookie && ((t = r(e.cookie)).main_login = e.type),
            qe.setCookies(t)
          }) ['catch'](function (e) {
            qe.setCookies()
          })
        }
        i.r(t);
        var ke = function () {
          function e(t) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, e),
            this._target = t,
            this._proxyEnabled = !1,
            this._cookies = {
            }
          }
          var t,
          i,
          r;
          return t = e,
          (i = [
            {
              key: 'get',
              value: function (e) {
                var t;
                if (!0 === this._proxyEnabled) return 'object' === n(this._cookies) && this._cookies[e] || '';
                for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
                return (t = this._target).get.apply(t, [
                  e
                ].concat(o))
              }
            },
            {
              key: 'set',
              value: function () {
                var e;
                return (e = this._target).set.apply(e, arguments)
              }
            },
            {
              key: 'remove',
              value: function () {
                var e;
                return (e = this._target).remove.apply(e, arguments)
              }
            },
            {
              key: 'setCookies',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                };
                this._cookies = e
              }
            },
            {
              key: 'getCookies',
              value: function () {
                return this._cookies
              }
            },
            {
              key: 'enableProxy',
              value: function () {
                this._proxyEnabled = !0
              }
            },
            {
              key: 'disableProxy',
              value: function () {
                this._proxyEnabled = !1
              }
            },
            {
              key: 'isProxyEnabled',
              value: function () {
                return this._proxyEnabled
              }
            }
          ]) && o(t.prototype, i),
          r && o(t, r),
          e
        }(),
        Se = {
        },
        Ee = decodeURIComponent,
        Ce = encodeURIComponent,
        Pe = Object.create || function (e) {
          function t() {
          }
          return t.prototype = e,
          new t
        };
        Se.get = function (e, t) {
          l(e);
          var i = t ? Pe(t)  : {
          };
          'function' == typeof t && (i = {
            converter: t
          });
          var n = r(document.cookie, !i.raw);
          return (i.converter || c) (n[e])
        },
        Se.set = function (e, t, i) {
          l(e);
          var n = i ? Pe(i)  : {
          },
          o = n.expires,
          r = n.domain,
          a = n.path;
          n.raw || (t = Ce(String(t)));
          var c = ''.concat(e, '=').concat(t),
          d = o;
          return 'number' == typeof d && (d = new Date).setTime(d.getTime() + 1000 * o),
          d instanceof Date && (c += '; expires='.concat(d.toUTCString())),
          s(r) && (c += '; domain='.concat(r)),
          s(a) && (c += '; path='.concat(a)),
          n.secure && (c += '; secure'),
          document.cookie = c,
          c
        },
        Se.remove = function (e, t) {
          var i = t ? Pe(t)  : {
          };
          return i.expires = new Date(0),
          this.set(e, '', i)
        };
        var qe = new ke(Se),
        Ie = navigator.userAgent,
        Oe = navigator.platform,
        Ae = Ie.indexOf('iPhone') >= 0,
        Me = /(iPad).*OS\s([\d_]+)/.test(Ie),
        $e = Ae || Me,
        je = Ie.indexOf('Android') >= 0,
        Le = je && Ie.indexOf('Mobile') < 0,
        De = 0 === Oe.indexOf('Mac'),
        Ne = Ie.indexOf('Windows') >= 0,
        ze = /QQ\/([\d.]+)/.test(Ie),
        Be = Ie.indexOf('MicroMessenger') >= 0 && Ie.indexOf('wxwork') < 0,
        Re = /(QQLive|WeTV)(HD|Kid)?(Browser|_MAC)?[\s\/]*(\d+(\.\d+)*)/i.test(Ie),
        Ue = Ie.indexOf('QQLiveKidBrowser') >= 0,
        Ve = Re && Ie.indexOf('WeTVBrowser') >= 0,
        We = Re && Ie.indexOf('QQLiteBrowser') >= 0,
        Xe = Ie.indexOf('QQLiveBrowser') >= 0,
        He = Re && 'undefined' != typeof location && !/^http(s)?:/.test(location.protocol),
        Ye = $e ? /mqqbrowser/gi.test(Ie)  : window.qb_bridge || !(!window.mtt || !window.mtt.getBrowserParam),
        Fe = /QQLive\/\d+/.test(Ie),
        Qe = {
          isIos: $e,
          isIphone: Ae,
          isIpad: Me,
          isAndroid: je,
          isApad: Le,
          isMac: De,
          isWin: Ne,
          isMqq: ze,
          isWechat: Be,
          isApp: Re,
          isKidApp: Ue,
          isWetv: Ve,
          isMqb: Ye,
          isPCClient: Fe,
          isWeb: !(Ae || je || Me || Le || /(WebOS|BlackBerry)/.test(Ie)),
          os: 'other',
          app: 'browser',
          device: 'unknown',
          isLiteApp: We,
          isBaseApp: Xe,
          isLocalPkg: He
        };
        Qe.os = Qe.isIos ? 'ios' : Qe.isAndroid ? 'android' : 'other',
        Re ? Qe.app = 'app' : Be ? Qe.app = 'wechat' : ze ? Qe.app = 'mqq' : Ue ? Qe.app = 'kidapp' : Ye ? Qe.app = 'qqbrowser' : Fe ? Qe.app = 'client' : We && (Qe.app = 'liteapp'),
        Ae ? Qe.device = 'iphone' : Me ? Qe.device = 'ipad' : Le ? Qe.device = 'apad' : je ? Qe.device = 'aphone' : De ? Qe.device = 'mac' : Ne && (Qe.device = 'windows');
        var Ge = Qe,
        Je = {
          NETWORK_ERR: 'NETWORK_ERR',
          SYSTEM_ERR: 'SYSTEM_ERR',
          LOGIC_ERR: 'LOGIC_ERR'
        },
        Ke = /^(http|https):$/.test(location.protocol),
        Ze = '68106135',
        et = 'e667570eb833960cc41051d498df1c233308eb195dba2cc3';
        h.prototype.toString = function () {
          return this.msg + (this.code ? '('.concat(this.code, ')')  : '')
        },
        h.prototype.RequestErrorType = h.RequestErrorType = Je;
        var tt = ''.concat(/^(http|https):$/.test(location.protocol) ? location.protocol : 'https:', '//btrace.qq.com/kvcollect'),
        it = function () {
          function e(t) {
            if (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, e), !t || !t.bossId || !t.pwd && 0 !== parseInt(t.pwd)) throw new Error('[report.Boss]bossId and pwd is required');
            this._cfg = t,
            this._baseUrl = p(tt, {
              BossId: t.bossId,
              Pwd: t.pwd
            })
          }
          var t,
          i,
          n;
          return t = e,
          (i = [
            {
              key: 'report',
              value: function (e) {
                return this._doReport(this.buildReportUrl(e)),
                this
              }
            },
            {
              key: 'buildReportUrl',
              value: function (e) {
                var t = this;
                return this._encodeDollor(p(this._baseUrl, function (e, t) {
                  if (_(e)) {
                    var i = {
                    };
                    for (var n in e) i[n] = t(e[n]);
                    return i
                  }
                  return e
                }(e, function (e) {
                  if (_(e)) try {
                    e = JSON.stringify(e)
                  } catch (e) {
                  }
                  return t._encodeDollor(e)
                }), !0))
              }
            },
            {
              key: 'setBaseUrl',
              value: function (e) {
                return this._baseUrl = e,
                this
              }
            },
            {
              key: 'getBaseUrl',
              value: function () {
                return this._baseUrl
              }
            },
            {
              key: '_doReport',
              value: function (e) {
                var t = document.createElement('img');
                return t.onerror = t.onload = t.onabort = y,
                t.src = e,
                this
              }
            },
            {
              key: '_encodeDollor',
              value: function (e) {
                return 'string' != typeof e ? e : e.replace(/\$/g, '|||')
              }
            }
          ]) && m(t.prototype, i),
          n && m(t, n),
          e
        }(),
        nt = 'film_front_error',
        ot = Object.assign || function (e, t) {
          if (!t || 'object' != b(t) || 'object' != b(e)) return e;
          for (var i in t) e[i] = t[i];
          return e
        },
        rt = function () {
          function e(t) {
            var i = t.bizId,
            n = void 0 === i ? nt : i,
            o = t.pageId;
            if (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, e), !o) throw new Error('[@tencent/vft-monitor.Monitor.constructor]pageId is required');
            this._boss = new it({
              bossId: 479,
              pwd: 0
            }),
            this._bizId = n,
            this._pageId = o
          }
          var t,
          i,
          n;
          return t = e,
          n = [
            {
              key: 'getMonitor',
              value: function (t) {
                var i = this.pool[t];
                return i || (this.pool[t] = i = new e({
                  bizId: nt,
                  pageId: t
                })),
                i
              }
            }
          ],
          (i = [
            {
              key: '_report',
              value: function (e) {
                var t = e.sBiz,
                i = e.modId,
                n = void 0 === i ? 'default' : i,
                o = e.msg,
                r = e.file,
                a = e.line,
                s = e.fn,
                l = e.level,
                c = e.code,
                d = e.operate,
                u = e.pname,
                p = void 0 === u ? xe && xe()  : u;
                t || (t = ''.concat(this._bizId, '.').concat(this._pageId, '.').concat(n)),
                this._boss.report({
                  sBiz: t,
                  errmsg: o,
                  srcfile: r,
                  srcline: a,
                  func: s,
                  level: l,
                  iSta: c,
                  sOp: d,
                  pname: p
                })
              }
            },
            {
              key: 'fatal',
              value: function (e) {
                this._report(ot(e, {
                  level: 5
                }))
              }
            },
            {
              key: 'error',
              value: function (e) {
                this._report(ot(e, {
                  level: 4
                }))
              }
            },
            {
              key: 'warn',
              value: function (e) {
                this._report(ot(e, {
                  level: 3
                }))
              }
            },
            {
              key: 'info',
              value: function (e) {
                this._report(ot(e, {
                  level: 2
                }))
              }
            },
            {
              key: 'debug',
              value: function (e) {
                this._report(ot(e, {
                  level: 1
                }))
              }
            }
          ]) && w(t.prototype, i),
          n && w(t, n),
          e
        }();
        rt.pool = {
        };
        var at,
        st,
        lt = new it({
          bossId: 479,
          pwd: 0
        }),
        ct = 5,
        dt = 4,
        ut = 3,
        pt = 2,
        ft = 1,
        ht = 'film_front_error',
        vt = Object.assign || function (e, t) {
          if (!t || 'object' != x(t) || 'object' != x(e)) return e;
          for (var i in t) e[i] = t[i];
          return e
        },
        mt = {
          init: function (e) {
            var t = e.bizId,
            i = void 0 === t ? ht : t,
            n = e.pageId;
            if (!n) throw new Error('[@tencent/vft-monitor.Monitor.init]pageId is required');
            at = i,
            st = n,
            window.addEventListener('error', function (e) {
              k({
                modId: 'uncatch_error',
                msg: e.message,
                file: e.filename,
                line: e.lineno
              })
            }),
            window.addEventListener('unhandledrejection', function (e) {
              var t = e.reason;
              k({
                modId: 'uncatch_error',
                msg: t.msg,
                code: t.code
              })
            })
          },
          fatal: k,
          error: function (e) {
            T(vt(e, {
              level: dt
            }))
          },
          warn: function (e) {
            T(vt(e, {
              level: ut
            }))
          },
          info: function (e) {
            T(vt(e, {
              level: pt
            }))
          },
          debug: function (e) {
            T(vt(e, {
              level: ft
            }))
          },
          getMonitor: function (e) {
            return rt.getMonitor(e)
          }
        },
        gt = {
          fatal: function (e) {
            mt.getMonitor('h5-login').fatal(function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {
                },
                n = Object.keys(i);
                'function' == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                n.forEach(function (t) {
                  S(e, t, i[t])
                })
              }
              return e
            }({
              modId: 'request_error'
            }, e))
          }
        },
        yt = function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
            if (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, e), !t || !i) throw new Error('[Reporter] bossId and pwd is missing, please get it from boss platform.');
            this.boss = new it({
              bossId: t,
              pwd: i
            }),
            this._queue = [
            ]
          }
          var t,
          i,
          n;
          return t = e,
          (i = [
            {
              key: 'init',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                };
                this.boss.setBaseUrl(p(this.boss.getBaseUrl(), E({
                  f_url: location.pathname,
                  f_dm: location.host,
                  f_protocol: location.protocol,
                  f_url_param: this._encodeUrl(location.href).split('?') [1] || '',
                  f_ref: this._encodeUrl(document.referrer),
                  f_platform: ''.concat(Ge.os, '.').concat(Ge.app)
                }, e), !0)),
                this._isInit = !0,
                this._handleQueue()
              }
            },
            {
              key: 'report',
              value: function (e) {
                var t = ye(),
                i = t.vqq_appid,
                n = t.appid,
                o = E({
                  f_logintype: M() || '-',
                  f_uid: be(),
                  f_vuid: xe(),
                  f_appid: i || n
                }, e);
                this._isInit ? this.boss.report(o)  : this._queue.push(o)
              }
            },
            {
              key: '_handleQueue',
              value: function () {
                var e = this;
                this._isInit && (Array.isArray(this._queue) && this._queue.forEach(function (t) {
                  e.boss.report(t)
                }), this._queue = [
                ])
              }
            },
            {
              key: '_encodeUrl',
              value: function (e) {
                try {
                  e = decodeURIComponent(e)
                } catch (e) {
                }
                return this.boss._encodeDollor(e)
              }
            }
          ]) && P(t.prototype, i),
          n && P(t, n),
          e
        }(),
        _t = i(0),
        wt = new yt(7481, '692842614');
        wt.init();
        var bt = 'INIT_SYNC',
        xt = 'INIT_GETCOOKIE',
        Tt = 'INIT_LOGIN',
        kt = 'INIT_LOGOUT',
        St = 'INIT_REQUEST',
        Et = [
          'vuserid',
          'vusession',
          'main_login'
        ],
        Ct = [
          'appid',
          'openid',
          'access_token',
          'refresh_token',
          'wx_nick',
          'wx_head'
        ],
        Pt = [
          'encuin',
          'luin',
          'lskey',
          'skey',
          'qq_nick',
          'qq_head'
        ],
        qt = [
          'vqq_appid',
          'vqq_openid',
          'vqq_access_token',
          'vqq_vuserid',
          'vqq_vusession',
          'qq_nick',
          'qq_head'
        ],
        It = [
          'wx16c9bb0f25d540ae',
          'wx7b9044085d71f4f5',
          'wx97b828e706a2b420',
          '101161688',
          '101180898',
          '101226103',
          '101249687',
          '101254487',
          '101414262',
          '101439899'
        ],
        Ot = 11059694,
        At = 'fdf61a6be0aad57132bc5cdf78ac30145b6cd2c1470b0cfe',
        Mt = 720,
        $t = '//access.video.qq.com/user/',
        jt = [
          'main_login',
          'vuserid',
          'vusession',
          'access_token',
          'refresh_token',
          'openid',
          'appid',
          'vqq_vuserid',
          'vqq_vusession',
          'vqq_access_token',
          'vqq_openid',
          'vqq_appid',
          'video_guid',
          'video_platform'
        ],
        Lt = 0,
        Dt = 2,
        Nt = null,
        zt = 0;
        !function () {
          function e(e) {
            return e > 9 ? e : '0'.concat(e)
          }
          var t = {
            Y: function (e) {
              return e.getFullYear()
            },
            m: function (t) {
              return e(t.getMonth() + 1)
            },
            n: function (e) {
              return e.getMonth() + 1
            },
            d: function (t) {
              return e(t.getDate())
            },
            e: function (e) {
              return e.getDate()
            },
            H: function (t) {
              return e(t.getHours())
            },
            i: function (t) {
              return e(t.getMinutes())
            },
            s: function (t) {
              return e(t.getSeconds())
            }
          },
          i = Object.keys ? Object.keys(t).join('')  : function () {
            var e,
            i = '';
            for (e in t) i += e;
            return i
          }();
          new RegExp('['.concat(i, ']'), 'g')
        }();
        var Bt = function (e) {
          var t = X(e);
          return null != e && ('object' == t || 'function' == t)
        },
        Rt = i(1),
        Ut = 'object' == ('undefined' == typeof self ? 'undefined' : H(self)) && self && self.Object === Object && self,
        Vt = Rt.a || Ut || Function('return this') (),
        Wt = function () {
          return Vt.Date.now()
        },
        Xt = Vt.Symbol,
        Ht = Object.prototype,
        Yt = Ht.hasOwnProperty,
        Ft = Ht.toString,
        Qt = Xt ? Xt.toStringTag : void 0,
        Gt = function (e) {
          var t = Yt.call(e, Qt),
          i = e[Qt];
          try {
            e[Qt] = void 0;
            var n = !0
          } catch (e) {
          }
          var o = Ft.call(e);
          return n && (t ? e[Qt] = i : delete e[Qt]),
          o
        },
        Jt = Object.prototype.toString,
        Kt = function (e) {
          return Jt.call(e)
        },
        Zt = '[object Null]',
        ei = '[object Undefined]',
        ti = Xt ? Xt.toStringTag : void 0,
        ii = function (e) {
          return null == e ? void 0 === e ? ei : Zt : ti && ti in Object(e) ? Gt(e)  : Kt(e)
        },
        ni = function (e) {
          return null != e && 'object' == Y(e)
        },
        oi = '[object Symbol]',
        ri = function (e) {
          return 'symbol' == F(e) || ni(e) && ii(e) == oi
        },
        ai = NaN,
        si = /^\s+|\s+$/g,
        li = /^[-+]0x[0-9a-f]+$/i,
        ci = /^0b[01]+$/i,
        di = /^0o[0-7]+$/i,
        ui = parseInt,
        pi = function (e) {
          if ('number' == typeof e) return e;
          if (ri(e)) return ai;
          if (Bt(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf()  : e;
            e = Bt(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : + e;
          e = e.replace(si, '');
          var i = ci.test(e);
          return i || di.test(e) ? ui(e.slice(2), i ? 2 : 8)  : li.test(e) ? ai : + e
        },
        fi = 'Expected a function',
        hi = Math.max,
        vi = Math.min,
        mi = function (e, t, i) {
          function n(t) {
            var i = l,
            n = c;
            return l = c = void 0,
            h = t,
            u = e.apply(n, i)
          }
          function o(e) {
            var i = e - f;
            return void 0 === f || i >= t || i < 0 || m && e - h >= d
          }
          function r() {
            var e = Wt();
            return o(e) ? a(e)  : void (p = setTimeout(r, function (e) {
              var i = t - (e - f);
              return m ? vi(i, d - (e - h))  : i
            }(e)))
          }
          function a(e) {
            return p = void 0,
            g && l ? n(e)  : (l = c = void 0, u)
          }
          function s() {
            var e = Wt(),
            i = o(e);
            if (l = arguments, c = this, f = e, i) {
              if (void 0 === p) return function (e) {
                return h = e,
                p = setTimeout(r, t),
                v ? n(e)  : u
              }(f);
              if (m) return p = setTimeout(r, t),
              n(f)
            }
            return void 0 === p && (p = setTimeout(r, t)),
            u
          }
          var l,
          c,
          d,
          u,
          p,
          f,
          h = 0,
          v = !1,
          m = !1,
          g = !0;
          if ('function' != typeof e) throw new TypeError(fi);
          return t = pi(t) || 0,
          Bt(i) && (v = !!i.leading, d = (m = 'maxWait' in i) ? hi(pi(i.maxWait) || 0, t)  : d, g = 'trailing' in i ? !!i.trailing : g),
          s.cancel = function () {
            void 0 !== p && clearTimeout(p),
            h = 0,
            l = f = c = p = void 0
          },
          s.flush = function () {
            return void 0 === p ? u : a(Wt())
          },
          s
        },
        gi = {
        },
        yi = gi.toString,
        _i = gi.hasOwnProperty,
        wi = _i.toString,
        bi = Ge.isMac ? 'callHandler' : Ge.isWin ? 'CallHandler' : 'invoke',
        xi = Ge.isMac ? 'registerHandler' : 'on',
        Ti = [
        ];
        document.addEventListener('onTenvideoJSBridgeReady', function () {
          console && void 0;
          for (var e = 0, t = Ti.length; e < t; e++) Ti[e]();
          Ti.length = 0
        }, !1),
        mi(function () {
          if (Ge.isApp && Ge.isWin) {
            window.TenvideoJSBridge = window.external,
            TenvideoJSBridge.AddObserver('*'),
            window.QQLive_OnObserve = function (e, t) {
              K(e, !1, t)
            };
            var e = new Event('onTenvideoJSBridgeReady');
            document.dispatchEvent(e)
          }
        }, 10) ();
        var ki = {
        },
        Si = function () {
          function e() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }).source,
            i = void 0 === t ? '' : t;
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, e),
            this._initialized = !1,
            this._callbacks = [
            ],
            this.VERSION = _t.a,
            this._source = i
          }
          var t,
          i,
          n;
          return t = e,
          (i = [
            {
              key: 'init',
              value: function (e) {
                return this.onInit(e),
                Promise.resolve()
              }
            },
            {
              key: 'ready',
              value: function () {
                this._callbacks.forEach(function (e) {
                  return e()
                }),
                this._callbacks = [
                ],
                this._initialized = !0
              }
            },
            {
              key: 'onInit',
              value: function (e) {
                'function' == typeof e && (this._initialized ? e && e()  : this._callbacks.push(e))
              }
            },
            {
              key: 'isLogin',
              value: function () {
              }
            },
            {
              key: 'isStrictLogin',
              value: function () {
              }
            },
            {
              key: 'isPTLogin',
              value: function () {
              }
            },
            {
              key: 'isWXLogin',
              value: function () {
              }
            },
            {
              key: 'isNewQQLogin',
              value: function () {
              }
            },
            {
              key: 'loginType',
              value: function () {
              }
            },
            {
              key: 'openLogin',
              value: function () {
              }
            },
            {
              key: 'logout',
              value: function () {
              }
            },
            {
              key: 'checkUser',
              value: function () {
              }
            },
            {
              key: 'getMainUserInfo',
              value: function () {
              }
            },
            {
              key: 'getMainCookie',
              value: function () {
              }
            },
            {
              key: 'getUin',
              value: function () {
              }
            },
            {
              key: 'getUid',
              value: function () {
              }
            },
            {
              key: 'getVuid',
              value: function () {
              }
            },
            {
              key: 'getToken',
              value: function () {
              }
            },
            {
              key: 'loginSource',
              value: function () {
                return this._source
              }
            }
          ]) && ee(t.prototype, i),
          n && ee(t, n),
          e
        }(),
        Ei = function (e) {
          function t(e) {
            var i;
            return function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            }(this, t),
            (i = ne(this, oe(t).call(this)))._login = e,
            i.VERSION = e.VERSION,
            i
          }
          var i,
          n,
          o;
          return function (e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }),
            t && re(e, t)
          }(t, Si),
          i = t,
          (n = [
            {
              key: 'init',
              value: function () {
                var e;
                return (e = this._login).init.apply(e, arguments)
              }
            },
            {
              key: 'onInit',
              value: function () {
                var e;
                return (e = this._login).onInit.apply(e, arguments)
              }
            },
            {
              key: 'loginType',
              value: function () {
                var e;
                return (e = this._login).loginType.apply(e, arguments)
              }
            },
            {
              key: 'isLogin',
              value: function () {
                var e;
                return (e = this._login).isLogin.apply(e, arguments)
              }
            },
            {
              key: 'isStrictLogin',
              value: function () {
                var e;
                return (e = this._login).isStrictLogin.apply(e, arguments)
              }
            },
            {
              key: 'isPTLogin',
              value: function () {
                var e;
                return (e = this._login).isPTLogin.apply(e, arguments)
              }
            },
            {
              key: 'isNewQQLogin',
              value: function () {
                var e;
                return (e = this._login).isNewQQLogin.apply(e, arguments)
              }
            },
            {
              key: 'isWXLogin',
              value: function () {
                var e;
                return (e = this._login).isWXLogin.apply(e, arguments)
              }
            },
            {
              key: 'openLogin',
              value: function () {
                var e;
                return (e = this._login).openLogin.apply(e, arguments)
              }
            },
            {
              key: 'logout',
              value: function () {
                var e;
                return (e = this._login).logout.apply(e, arguments)
              }
            },
            {
              key: 'checkUser',
              value: function () {
                var e;
                return (e = this._login).checkUser.apply(e, arguments)
              }
            },
            {
              key: 'getMainUserInfo',
              value: function () {
                var e;
                return (e = this._login).getMainUserInfo.apply(e, arguments)
              }
            },
            {
              key: 'getMainCookie',
              value: function () {
                var e;
                return (e = this._login).getMainCookie.apply(e, arguments)
              }
            },
            {
              key: 'getUin',
              value: function () {
                var e;
                return (e = this._login).getUin.apply(e, arguments)
              }
            },
            {
              key: 'getUid',
              value: function () {
                var e;
                return (e = this._login).getUid.apply(e, arguments)
              }
            },
            {
              key: 'getVuid',
              value: function () {
                var e;
                return (e = this._login).getVuid.apply(e, arguments)
              }
            },
            {
              key: 'getToken',
              value: function () {
                var e;
                return (e = this._login).getToken.apply(e, arguments)
              }
            },
            {
              key: 'loginSource',
              value: function () {
                var e;
                return (e = this._login).loginSource.apply(e, arguments)
              }
            },
            {
              key: 'setLogin',
              value: function (e) {
                this._login = e
              }
            }
          ]) && ie(i.prototype, n),
          o && ie(i, o),
          t
        }();
        i.d(t, 'isLogin', function () {
          return se
        }),
        i.d(t, 'isWXLogin', function () {
          return le
        }),
        i.d(t, 'isQQLogin', function () {
          return ce
        }),
        i.d(t, 'isPTLogin', function () {
          return de
        }),
        i.d(t, 'isNewQQLogin', function () {
          return ue
        }),
        i.d(t, 'isStrictLogin', function () {
          return pe
        }),
        i.d(t, 'checkUser', function () {
          return fe
        }),
        i.d(t, 'logout', function () {
          return he
        }),
        i.d(t, 'openLogin', function () {
          return ve
        }),
        i.d(t, 'getMainUserInfo', function () {
          return ge
        }),
        i.d(t, 'getMainCookie', function () {
          return ye
        }),
        i.d(t, 'getUid', function () {
          return be
        }),
        i.d(t, 'getVuid', function () {
          return xe
        }),
        i.d(t, 'DEFAULT_LOGIN', function () {
          return Ai
        });
        var Ci = [
          'onActionLoginFinish',
          'onActionLogoutFinish',
          'onSwitchLoginStateResponse'
        ],
        Pi = !1,
        qi = !1;
        window.addEventListener('load', function () {
          setTimeout(function () {
            Pi || console && void 0
          }, 0)
        });
        var Ii = [
        ],
        Oi = function () {
          Ii.length > 0 && (Ii.forEach(function (e) {
            'function' == typeof e && e()
          }), Ii.length = 0),
          qi = !0,
          q({
            f_event: 'INIT_READY'
          })
        },
        Ai = {
          VERSION: _t.a,
          init: function (e) {
            if (qi) return 'function' == typeof e && e();
            if (Ii.push(e), !Pi) {
              if (Pi = !0, Ge.isLocalPkg) return qe.enableProxy(),
              Te().then(Oi),
              void Ci.forEach(function (e) {
                !function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  if ('function' != typeof t) throw new TypeError('[JSBridge] listener is not a function!');
                  ki[e] || (ki[e] = [
                  ], Ge.isWin || G().then(function () {
                    TenvideoJSBridge[xi](e, mi(K.bind(null, e, i), 60))
                  }));
                  var n = ki[e];
                  - 1 === Z(n, t) && n.push({
                    listener: t,
                    once: i
                  })
                }(e, function () {
                  Te()
                })
              });
              if (Ge.isApp) return Oi();
              if ('qq.com' !== document.domain) {
                window.console && void 0;
                try {
                  document.domain = 'qq.com'
                } catch (e) {
                }
              }
              Ct.forEach(function (e) {
                qe.remove(e, {
                  domain: 'qq.com',
                  path: '/'
                })
              }),
              L(function () {
                if (!de() || qe.get('vuserid') && qe.get('vusession')) if (!se() && (qe.get('vuserid') || qe.get('vusession')) || le() && (qe.get('vqq_vuserid') || qe.get('vqq_vusession')) || ue() && qe.get('vuserid') && qe.get('vusession')) N(function () {
                  L(Oi)
                });
                 else if (se() && !de()) {
                  var e = + qe.get('last_refresh_time'),
                  t = qe.get('last_refresh_vuserid');
                  + new Date - e >= 300000 || !_e() || !we() || t !== xe() ? D(function () {
                    L(Oi)
                  })  : Oi()
                } else Oi();
                 else !function i(e) {
                  A('auth_login', I({
                    type: 'qq',
                    login_flag: 1
                  }, z()), {
                    timeout: 30000
                  }).then(function (t) {
                    if (t && 0 === t.errcode) {
                      var n = {
                        expires: Mt,
                        domain: j(),
                        path: '/'
                      };
                      qe.set('qq_nick', t.nick, n),
                      qe.set('qq_head', t.head, n),
                      qe.set('last_refresh_time', + new Date, n),
                      qe.set('last_refresh_vuserid', t.vuserid, n),
                      qe.set('vuserid', t.vuserid, n),
                      qe.set('vusession', t.vusession, n),
                      qe.set('main_login', 'qq', n),
                      e()
                    } else t && [
                      1006,
                      1111,
                      1112
                    ].indexOf(t.errcode) > - 1 ? N(e)  : (zt < Dt ? i(e)  : e && e(), zt++)
                  }) ['catch'](function () {
                    zt < Dt ? i(e)  : e && e(),
                    zt++
                  }),
                  q({
                    f_event: Tt
                  })
                }(Oi)
              })
            }
          },
          onInit: function (e) {
            qi ? 'function' == typeof e && e()  : Ii.push(e)
          },
          loginType: M,
          isLogin: se,
          isStrictLogin: pe,
          isPTLogin: de,
          isNewQQLogin: ue,
          isWXLogin: le,
          openLogin: ve,
          logout: he,
          checkUser: fe,
          getMainUserInfo: ge,
          getMainCookie: ye,
          getUin: B,
          getUid: be,
          getVuid: xe,
          getToken: function () {
            var e = R();
            return e ? U(e)  : ''
          },
          loginSource: function () {
            return 'vip'
          }
        };
        t['default'] = new Ei(Ai)
      }
      ]) ['default']
    })
  },
  function (e, t, i) {
    var n = i(9).$,
    o = null;
    e.exports = function (e) {
      var t = n('#toast'),
      i = t.find('._txt'),
      r = n('body');
      i.html(e),
      t.removeClass('none'),
      o && clearTimeout(o),
      o = setTimeout(function () {
        t.addClass('none')
      }, 3000),
      r.unbind('touchend').bind('touchend', function () {
        t.addClass('none')
      })
    }
  },
  function (e, t, i) {
    var n = i(63),
    o = i(67),
    r = i(68),
    a = i(69),
    s = o.getUrlParam('uvip');
    'qq' !== s && 'txsp' !== s || (s = 'qqsvip'),
    e.exports = {
      getPayVip: function () {
        return new a(function (e, t) {
          r('//vip.video.qq.com/fcgi-bin/comm_cgi?name=payvip&cmd=1&otype=json&getannual=1', {
            geticon: 1,
            getsvip: 1,
            g_tk: n.getToken()
          }, {
            cache: !0,
            max_age: 600000
          }).then(function (t) {
            e(t && t.result && t.result.code < 0 ? null : t)
          }, function () {
            var e = {
              code: 502,
              msg: '[request] payvip error'
            };
            t(e)
          })
        })
      },
      getUvip: function () {
        return a.all([this.getPayVip(),
        this.getVplusVip()]).then(function (e) {
          return {
            payvip: e[0],
            uvip: e[1]
          }
        })
      },
      getVplusVip: function () {
        var e = $.Deferred();
        return o.getUrlParam('uvip') ? this.getVplusConfig().then(function (t) {
          r('//vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_get_auto_pay_status&cmd=65411', null, {
            cache: !0,
            max_age: 600000
          }).then(function (i) {
            return i && i.result && i.result[s] ? (t.status = i.result[s].status, e.resolve(t))  : e.resolve(null)
          }, function () {
            return e.resolve(null)
          })
        }, function () {
          e.resolve(null)
        })  : e.resolve(null),
        e.promise()
      },
      getVplusConfig: function () {
        var e = $.Deferred();
        return r('//wuji.video.qq.com/fcgi-bin/wuji?appid=1000540&appkey=b1b75659ca6748ef881cabb4eafa5b50', {
          filter: 'channelid="' + s + '"'
        }, {
          cache: !0,
          max_age: 600000
        }).then(function (t) {
          t && t.data && t.data.length > 0 ? e.resolve(t.data[0])  : e.reject('查不到[' + s + ']相关配置')
        }, function () {
          e.reject('[getVplusConfig] 网络异常')
        }),
        e.promise()
      }
    }
  },
  function (e, t) {
    Date.prototype.addDays = function (e) {
      e = parseInt(e);
      var t = this.getDate();
      return this.setDate(t + e),
      this
    },
    Date.prototype.format = function (e) {
      var t = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
      };
      /(y+)/i.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)));
      for (var i in t) new RegExp('(' + i + ')').test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ('00' + t[i]).substr(('' + t[i]).length)));
      return e
    },
    e.exports = {
      getUrlParam: function (e, t) {
        t = t || location.href;
        var i,
        n = new RegExp('[?&#]' + e + '=([^&#]+)', 'gi'),
        o = t.match(n);
        return o && o.length > 0 ? (i = o[o.length - 1].split('='), i && i.length > 1 ? this.filterXSS(i[1])  : '')  : ''
      },
      setUrlParam: function (e, t, i) {
        i = i || location.href;
        var n,
        o,
        r = new RegExp('[?&#]' + e + '=([^&#]+)', 'gi'),
        a = i.match(r),
        s = '{key' + (new Date).getTime() + '}';
        if (n = a && a.length > 0 ? a[a.length - 1] : '', o = e + '=' + t, n) {
          var l = n.charAt(0);
          i = i.replace(n, s),
          i = i.replace(s, t ? l + o : '')
        } else t && (i += i.indexOf('?') > - 1 ? '&' + o : '?' + o);
        return i
      },
      delQueStr: function (e, t) {
        var n = '';
        if (e.indexOf('?') == - 1) return e;
        n = e.substr(e.indexOf('?') + 1);
        var o = '',
        r = '';
        if (n.indexOf('&') != - 1) {
          o = n.split('&');
          for (i in o) o[i].split('=') [0] != t && (r = r + o[i].split('=') [0] + '=' + o[i].split('=') [1] + '&');
          return e.substr(0, e.indexOf('?')) + '?' + r.substr(0, r.length - 1)
        }
        return o = n.split('='),
        o[0] == t ? e.substr(0, e.indexOf('?'))  : e
      },
      vaildURL: function (e) {
        return !!(/^(https?:\/\/)?[\w\-.]+\.(qq|paipai|soso)\.com($|\/|\\)/i.test(e) || /^[\w][\w\/\.\-_%]+$/i.test(e) || /^[\/\\][^\/\\]/i.test(e))
      },
      filterXSS: function (e) {
        return e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&apos;')
      },
      RegExps: {
        nl2br: /\n/g,
        s2nb: /[\x20]{2}/g,
        escHTML: {
          re_amp: /&/g,
          re_lt: /</g,
          re_gt: />/g,
          re_apos: /\x27/g,
          re_quot: /\x22/g
        },
        restHTML: {
          re_amp: /&amp;/g,
          re_lt: /&lt;/g,
          re_gt: /&gt;/g,
          re_apos: /&(?:apos|#0?39);/g,
          re_quot: /&quot;/g
        }
      },
      commonReplace: function (e, t, i) {
        return e.replace(t, i)
      },
      listReplace: function (e, t) {
        if (this.isHashMap(t)) {
          for (var i in t) e = this.commonReplace(e, t[i], i);
          return e
        }
        return e + ''
      },
      nl2br: function (e) {
        return this.commonReplace(e + '', this.RegExps.nl2br, '<br />')
      },
      s2nb: function (e) {
        return this.commonReplace(e + '', this.RegExps.s2nb, '&nbsp;&nbsp;')
      },
      escHTML: function (e) {
        var t = this.RegExps.escHTML;
        return this.listReplace(e + '', {
          '&amp;': t.re_amp,
          '&lt;': t.re_lt,
          '&gt;': t.re_gt,
          '&#039;': t.re_apos,
          '&quot;': t.re_quot
        })
      },
      restHTML: function (e) {
        var t = this.RegExps.restHTML;
        return this.listReplace(e + '', {
          '<': t.re_lt,
          '>': t.re_gt,
          '\'': t.re_apos,
          '"': t.re_quot,
          '&': t.re_amp
        })
      },
      isHashMap: function (e) {
        return 'object' == this.getType(e)
      },
      getType: function (e) {
        return null === e ? 'null' : void 0 === e ? 'undefined' : Object.prototype.toString.call(e).slice(8, - 1).toLowerCase()
      },
      loadScript: function (e, t, i) {
        var n = document.getElementById(e);
        if (n) i && i();
         else {
          var o = document.createElement('script');
          o.type = 'text/javascript',
          o.id = e,
          o.src = t,
          o.onload = o.onreadystatechange = function () {
            o.readyState && 'loaded' !== o.readyState && 'complete' !== o.readyState || i && i()
          },
          o.src = t;
          var r = document.getElementsByTagName('head') [0];
          r.appendChild(o)
        }
      },
      getPlat: function () {
        var e = {
          plat: 0,
          channel: 0
        },
        t = navigator.userAgent;
        if (t.indexOf('Android') != - 1 ? e.plat = 108 : t.indexOf('iPhone') != - 1 ? e.plat = 107 : t.indexOf('iPad') != - 1 && (e.plat = 105), t.indexOf('MicroMessenger') != - 1) {
          var i = this.getUrlParam('from');
          'timeline' == i ? e.channel = 8 : e.channel = 16
        } else t.indexOf('TXMicroBlog') != - 1 ? e.channel = 1 : t.indexOf('Weibo') != - 1 ? e.channel = 4 : / QQ\//.test(t) ? e.channel = 64 : / Qzone\//.test(t) && (e.channel = 2);
        return e
      },
      verCompare: function (e, t) {
        if (e === t) return 0;
        e = e.split('.'),
        t = t.split('.');
        for (var i = e.length >= t.length ? e.length : t.length, n = 0, o = 0; i--; ) {
          var r = Number(e[n] || 0),
          a = Number(t[n++] || 0);
          if (a > r) return 1;
          if (a < r) return - 1
        }
        return o
      }
    }
  },
  function (e, t) {
    var i = 1,
    n = 2,
    o = 3000,
    r = {
    },
    a = {
    },
    s = {
    },
    l = {
    };
    e.exports = function (e, t, c) {
      var d = $.Deferred(),
      u = c.max_age || o;
      return c || (c = {
      }),
      c.cache ? l[e] || (l[e] = [
      ], r[e] = 0, a[e] = 0)  : (delete l[e], delete r[e], delete a[e]),
      c.cache && a[e] && s[e] && Date.now() - a[e] <= u ? (d.resolve(s[e]), d.promise())  : (c.cache && r[e] == i ? l[e].push(d)  : (c.cache && (a[e] = Date.now(), r[e] = i), $.ajax({
        url: e,
        dataType: 'jsonp',
        data: t
      }).then(function (t) {
        return s[e] = t,
        d.resolve(t)
      }, function () {
        return d.reject('服务异常')
      }).always(function (t) {
        if (c.cache && (r[e] = n, l[e].length > 0)) for (var i, o = 'resolved' == d.state() ? 'resolve' : 'reject'; i = l[e].shift(); ) i[o](t)
      })), d.promise())
    }
  },
  function (e, t, i) {
    (function (t) {
      function i() {
      }
      function n(e, t) {
        return function () {
          e.apply(t, arguments)
        }
      }
      function o(e) {
        if ('object' !== _typeof2(this)) throw new TypeError('Promises must be constructed via new');
        if ('function' != typeof e) throw new TypeError('not a function');
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [
        ],
        d(e, this)
      }
      function r(e, t) {
        for (; 3 === e._state; ) e = e._value;
        return 0 === e._state ? void e._deferreds.push(t)  : (e._handled = !0, void o._immediateFn(function () {
          var i = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null === i) return void (1 === e._state ? a : s) (t.promise, e._value);
          var n;
          try {
            n = i(e._value)
          } catch (o) {
            return void s(t.promise, o)
          }
          a(t.promise, n)
        }))
      }
      function a(e, t) {
        try {
          if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
          if (t && ('object' === ('undefined' == typeof t ? 'undefined' : _typeof2(t)) || 'function' == typeof t)) {
            var i = t.then;
            if (t instanceof o) return e._state = 3,
            e._value = t,
            void l(e);
            if ('function' == typeof i) return void d(n(i, t), e)
          }
          e._state = 1,
          e._value = t,
          l(e)
        } catch (r) {
          s(e, r)
        }
      }
      function s(e, t) {
        e._state = 2,
        e._value = t,
        l(e)
      }
      function l(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
          e._handled || o._unhandledRejectionFn(e._value)
        });
        for (var t = 0, i = e._deferreds.length; t < i; t++) r(e, e._deferreds[t]);
        e._deferreds = null
      }
      function c(e, t, i) {
        this.onFulfilled = 'function' == typeof e ? e : null,
        this.onRejected = 'function' == typeof t ? t : null,
        this.promise = i
      }
      function d(e, t) {
        var i = !1;
        try {
          e(function (e) {
            i || (i = !0, a(t, e))
          }, function (e) {
            i || (i = !0, s(t, e))
          })
        } catch (n) {
          if (i) return;
          i = !0,
          s(t, n)
        }
      }
      var u = setTimeout;
      o.prototype['catch'] = function (e) {
        return this.then(null, e)
      },
      o.prototype.then = function (e, t) {
        var n = new this.constructor(i);
        return r(this, new c(e, t, n)),
        n
      },
      o.all = function (e) {
        var t = Array.prototype.slice.call(e);
        return new o(function (e, i) {
          function n(r, a) {
            try {
              if (a && ('object' === ('undefined' == typeof a ? 'undefined' : _typeof2(a)) || 'function' == typeof a)) {
                var s = a.then;
                if ('function' == typeof s) return void s.call(a, function (e) {
                  n(r, e)
                }, i)
              }
              t[r] = a,
              0 === --o && e(t)
            } catch (l) {
              i(l)
            }
          }
          if (0 === t.length) return e([]);
          for (var o = t.length, r = 0; r < t.length; r++) n(r, t[r])
        })
      },
      o.resolve = function (e) {
        return e && 'object' === ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && e.constructor === o ? e : new o(function (t) {
          t(e)
        })
      },
      o.reject = function (e) {
        return new o(function (t, i) {
          i(e)
        })
      },
      o.race = function (e) {
        return new o(function (t, i) {
          for (var n = 0, o = e.length; n < o; n++) e[n].then(t, i)
        })
      },
      o._immediateFn = 'function' == typeof t && function (e) {
        t(e)
      }
      || function (e) {
        u(e, 0)
      },
      o._unhandledRejectionFn = function (e) {
        'undefined' != typeof console && console
      },
      o._setImmediateFn = function (e) {
        o._immediateFn = e
      },
      o._setUnhandledRejectionFn = function (e) {
        o._unhandledRejectionFn = e
      },
      e.exports = o
    }).call(t, i(70).setImmediate)
  },
  function (e, t, i) {
    (function (e) {
      function n(e, t) {
        this._id = e,
        this._clearFn = t
      }
      var o = 'undefined' != typeof e && e || 'undefined' != typeof self && self || window,
      r = Function.prototype.apply;
      t.setTimeout = function () {
        return new n(r.call(setTimeout, o, arguments), clearTimeout)
      },
      t.setInterval = function () {
        return new n(r.call(setInterval, o, arguments), clearInterval)
      },
      t.clearTimeout = t.clearInterval = function (e) {
        e && e.close()
      },
      n.prototype.unref = n.prototype.ref = function () {
      },
      n.prototype.close = function () {
        this._clearFn.call(o, this._id)
      },
      t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId),
        e._idleTimeout = t
      },
      t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId),
        e._idleTimeout = - 1
      },
      t._unrefActive = t.active = function (e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
          e._onTimeout && e._onTimeout()
        }, t))
      },
      i(71),
      t.setImmediate = 'undefined' != typeof self && self.setImmediate || 'undefined' != typeof e && e.setImmediate || this && this.setImmediate,
      t.clearImmediate = 'undefined' != typeof self && self.clearImmediate || 'undefined' != typeof e && e.clearImmediate || this && this.clearImmediate
    }).call(t, function () {
      return this
    }())
  },
  function (e, t, i) {
    (function (e, t) {
      !function (e, i) {
        'use strict';
        function n(e) {
          'function' != typeof e && (e = new Function('' + e));
          for (var t = new Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
          var n = {
            callback: e,
            args: t
          };
          return v[h] = n,
          f(h),
          h++
        }
        function o(e) {
          delete v[e]
        }
        function r(e) {
          var t = e.callback,
          n = e.args;
          switch (n.length) {
            case 0:
              t();
              break;
            case 1:
              t(n[0]);
              break;
            case 2:
              t(n[0], n[1]);
              break;
            case 3:
              t(n[0], n[1], n[2]);
              break;
            default:
              t.apply(i, n)
          }
        }
        function a(e) {
          if (m) setTimeout(a, 0, e);
           else {
            var t = v[e];
            if (t) {
              m = !0;
              try {
                r(t)
              } finally {
                o(e),
                m = !1
              }
            }
          }
        }
        function s() {
          f = function (e) {
            t.nextTick(function () {
              a(e)
            })
          }
        }
        function l() {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
            i = e.onmessage;
            return e.onmessage = function () {
              t = !1
            },
            e.postMessage('', '*'),
            e.onmessage = i,
            t
          }
        }
        function c() {
          var t = 'setImmediate$' + Math.random() + '$',
          i = function (i) {
            i.source === e && 'string' == typeof i.data && 0 === i.data.indexOf(t) && a( + i.data.slice(t.length))
          };
          e.addEventListener ? e.addEventListener('message', i, !1)  : e.attachEvent('onmessage', i),
          f = function (i) {
            e.postMessage(t + i, '*')
          }
        }
        function d() {
          var e = new MessageChannel;
          e.port1.onmessage = function (e) {
            var t = e.data;
            a(t)
          },
          f = function (t) {
            e.port2.postMessage(t)
          }
        }
        function u() {
          var e = g.documentElement;
          f = function (t) {
            var i = g.createElement('script');
            i.onreadystatechange = function () {
              a(t),
              i.onreadystatechange = null,
              e.removeChild(i),
              i = null
            },
            e.appendChild(i)
          }
        }
        function p() {
          f = function (e) {
            setTimeout(a, 0, e)
          }
        }
        if (!e.setImmediate) {
          var f,
          h = 1,
          v = {
          },
          m = !1,
          g = e.document,
          y = Object.getPrototypeOf && Object.getPrototypeOf(e);
          y = y && y.setTimeout ? y : e,
          '[object process]' === {
          }.toString.call(e.process) ? s()  : l() ? c()  : e.MessageChannel ? d()  : g && 'onreadystatechange' in g.createElement('script') ? u()  : p(),
          y.setImmediate = n,
          y.clearImmediate = o
        }
      }('undefined' == typeof self ? 'undefined' == typeof e ? this : e : self)
    }).call(t, function () {
      return this
    }(), i(72))
  },
  function (e, t) {
    function i() {
      throw new Error('setTimeout has not been defined')
    }
    function n() {
      throw new Error('clearTimeout has not been defined')
    }
    function o(e) {
      if (d === setTimeout) return setTimeout(e, 0);
      if ((d === i || !d) && setTimeout) return d = setTimeout,
      setTimeout(e, 0);
      try {
        return d(e, 0)
      } catch (t) {
        try {
          return d.call(null, e, 0)
        } catch (t) {
          return d.call(this, e, 0)
        }
      }
    }
    function r(e) {
      if (u === clearTimeout) return clearTimeout(e);
      if ((u === n || !u) && clearTimeout) return u = clearTimeout,
      clearTimeout(e);
      try {
        return u(e)
      } catch (t) {
        try {
          return u.call(null, e)
        } catch (t) {
          return u.call(this, e)
        }
      }
    }
    function a() {
      v && f && (v = !1, f.length ? h = f.concat(h)  : m = - 1, h.length && s())
    }
    function s() {
      if (!v) {
        var e = o(a);
        v = !0;
        for (var t = h.length; t; ) {
          for (f = h, h = [
          ]; ++m < t; ) f && f[m].run();
          m = - 1,
          t = h.length
        }
        f = null,
        v = !1,
        r(e)
      }
    }
    function l(e, t) {
      this.fun = e,
      this.array = t
    }
    function c() {
    }
    var d,
    u,
    p = e.exports = {
    };
    !function () {
      try {
        d = 'function' == typeof setTimeout ? setTimeout : i
      } catch (e) {
        d = i
      }
      try {
        u = 'function' == typeof clearTimeout ? clearTimeout : n
      } catch (e) {
        u = n
      }
    }();
    var f,
    h = [
    ],
    v = !1,
    m = - 1;
    p.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      h.push(new l(e, t)),
      1 !== h.length || v || o(s)
    },
    l.prototype.run = function () {
      this.fun.apply(null, this.array)
    },
    p.title = 'browser',
    p.browser = !0,
    p.env = {
    },
    p.argv = [
    ],
    p.version = '',
    p.versions = {
    },
    p.on = c,
    p.addListener = c,
    p.once = c,
    p.off = c,
    p.removeListener = c,
    p.removeAllListeners = c,
    p.emit = c,
    p.prependListener = c,
    p.prependOnceListener = c,
    p.listeners = function (e) {
      return []
    },
    p.binding = function (e) {
      throw new Error('process.binding is not supported')
    },
    p.cwd = function () {
      return '/'
    },
    p.chdir = function (e) {
      throw new Error('process.chdir is not supported')
    },
    p.umask = function () {
      return 0
    }
  },
  function (e, t, i) {
    function n(e, t, i) {
      t || (t = r.defer());
      var n = Date.now();
      return e.success = function (e) {
        e._reqStart = n,
        e._reqEnd = Date.now(),
        t.resolve(e)
      },
      e.error = function (e) {
        e._reqStart = n,
        e._reqEnd = Date.now(),
        t.reject(e)
      },
      s.ajax(e),
      t.promise
    }
    function o(e) {
      return e.fixBefore = e.fixBefore || function (e) {
        return e
      },
      e.fixAfter = e.fixAfter || function () {
        return !0
      },
      e.onError = e.onError || function () {
      },
      function (t, i, o) {
        var a = r.defer();
        if (i = i || {
        }, t = e.fixBefore(s.extend({
        }, e.data, t, e.query), i), !t) throw new Error('invalid query');
        var l;
        return (l = e.url.match(/\{(\w|\d)*\}/g)) && l.forEach(function (i) {
          e.url = e.url.replace(i, t[i.substr(1, i.length - 2)])
        }),
        n({
          url: e.url,
          dataType: 'jsonp',
          data: t
        }, a, o).then(function (n) {
          if (e.fixAfter(n, t, i)) return n
        }, function () {
          e.onError(i)
        })
      }
    }
    var r = window.Promise,
    a = i(74),
    s = window.$;
    Object.keys(a).forEach(function (e) {
      n[e] = o(a[e])
    }),
    e.exports = n
  },
  function (e, t, i) {
    var n = i(65),
    o = i(63);
    e.exports = {
      attention: {
        url: '//like.video.qq.com/fcgi-bin/flw_new',
        query: {
          otype: 'json',
          sn: 'FollowServer',
          cmd: 2565
        },
        data: {
          attent_type: '',
          id: ''
        },
        fixBefore: function (e) {
          return !(!e.attent_type || !e.id) && e
        },
        fixAfter: function (e) {
          return !0
        },
        fixError: function () {
        }
      },
      addAttention: {
        url: '//like.video.qq.com/fcgi-bin/flw_new',
        query: {
          sn: 'FollowWrite',
          otype: 'json',
          cmd: 2817
        },
        data: {
          attent_type: '',
          id: ''
        },
        fixBefore: function (e) {
          return !(!e.attent_type || !e.id) && e
        },
        fixAfter: function (e, t, i) {
          return t.qq ? i.noTip || n('已加入看单<br/>请在腾讯视频App个人中心查看')  : i.noTip || n('已加入看单，可在<br/>腾讯视频App内微信登录后找到'),
          !0
        },
        fixError: function () {
        }
      },
      delAttention: {
        url: '//like.video.qq.com/fcgi-bin/flw_new',
        query: {
          sn: 'FollowWrite',
          otype: 'json',
          cmd: 2818
        },
        data: {
          attent_type: '',
          id: ''
        },
        fixBefore: function (e) {
          return !(!e.attent_type || !e.id) && e
        },
        fixAfter: function (e) {
          return 0 == e.ret
        },
        fixError: function () {
        }
      },
      coverview_all_count: {
        url: '//union.video.qq.com/fcgi-bin/data?tid=430&appid=10001007&appkey=e075742beb866145&otype=json',
        data: {
          idlist: ''
        },
        fixAfter: function (e) {
          return e.results && 0 == e.errorno && e.results.length
        }
      },
      commentinfo: {
        url: '//coral.qq.com/article/{commentid}/firstpage/comment/timeline',
        query: {
          reqnum: '3',
          hotreqnum: '3',
          source: '9'
        },
        data: {
          commentid: ''
        },
        fixAfter: function (e) {
          if (e = e || {
          }, 0 != e.errCode || !e.data) return !1;
          var t = [
          ];
          if (e.data.hotcommentid && 0 != e.data.hotcommentid.length) {
            t = e.data.hotcommentid;
            for (var i in t) t[i].isHot = !0
          }
          return e.data.commentid && 0 != e.data.commentid.length && (t = t.concat(e.data.commentid)),
          t
        }
      },
      recommend2016: {
        url: '//node.video.qq.com/x/vlikecgi/related_rec',
        query: {
          rec_num: 15
        },
        fixBefore: function (e) {
          if (!o.loginType()) {
            var t;
            localStorage.getItem('mplay_recid') ? t = localStorage.getItem('mplay_recid')  : (t = Math.random().toString(16).substring(2), localStorage.setItem('mplay_recid', t)),
            e.no_login_id = t
          }
          return e
        }
      },
      hcoverrecommend: {
        url: '//like.video.qq.com/fcgi-bin/like',
        query: {
          tablist: 9,
          playright: 2,
          uin: 0,
          size: 15,
          min_size: 4,
          top_size: 21,
          otype: 'json',
          appver: '14.2.13.11.06',
          defn: 'msg',
          msgtype: 93
        },
        data: {
          id: ''
        },
        fixBefore: function (e) {
          return e._ = Math.random(),
          e
        },
        fixAfter: function (e, t) {
          if (0 == e.ret) {
            var i = [
            ];
            return $.each(e.tablist[0].cover_info, function (e, t) {
              i.push(t.alginfo)
            }),
            !!(e && e.tablist && e.tablist[0] && e.tablist[0].cover_info && 0 != e.tablist[0].cover_info.length)
          }
        },
        onError: function () {
        }
      },
      vcoverrecommend: {
        url: '//like.video.qq.com/fcgi-bin/like',
        query: {
          playright: 7,
          uin: 0,
          size: 15,
          min_size: 4,
          top_size: 21,
          otype: 'json',
          appver: '14.2.13.11.06',
          defn: 'msg',
          msgtype: 92,
          tablist: 1
        },
        data: {
          id: ''
        },
        fixBefore: function (e) {
          return e._ = Math.random(),
          e
        },
        fixAfter: function (e, t) {
          var i = [
          ];
          return $.each(e.tablist[0].cover_info, function (e, t) {
            i.push(t.alginfo)
          }),
          !!(e && e.tablist && e.tablist[0] && e.tablist[0].cover_info && 0 != e.tablist[0].cover_info.length)
        },
        onError: function () {
        }
      },
      hotRecommend: {
        url: '//mcgi.v.qq.com/commdatav2',
        query: {
          cmd: 40
        },
        data: {
          type: ''
        },
        fixAfter: function (e) {
        },
        onError: function () {
        }
      },
      columncover: {
        url: '//data.video.qq.com/fcgi-bin/column/cover_list',
        query: {
          platform: 1,
          version: 1,
          cmd: 'list',
          otype: 'json',
          subtype: 1,
          fields: 'cid,publish_date,second_title,pic2_url,cover_checkup_grade,playright,view_all_count'
        },
        data: {
          column_id: '',
          page_size: 3,
          page_no: 1
        },
        fixAfter: function (e) {
          return !0
        },
        onError: function () {
        }
      },
      columncover2: {
        url: '//list.video.qq.com/fcgi-bin/list_common_cgi',
        query: {
          platform: 1,
          version: 10000,
          novalue: 1,
          nounion: 0,
          intfname: 'web_integrated_lid_list',
          tid: 543,
          appkey: 'ebe7ee92f568e876',
          appid: '20001174',
          sourceid: '10001',
          listappid: '10385',
          listappkey: '10385',
          sourcetype: 1,
          cidorder: 1,
          otype: 'json',
          subtype: 1,
          fields: 'cid,publish_date,second_title,pic2_url,cover_checkup_grade,playright,view_all_count',
          locate_type: 0
        },
        data: {
          lid: '',
          playright: 2,
          offset: 0,
          pagesize: 6
        },
        fixAfter: function (e) {
          return !0
        },
        onError: function () {
        }
      },
      unionvideos: {
        url: '//union.video.qq.com/fcgi-bin/data',
        query: {
          tid: 294,
          appid: 10001001,
          appkey: 'c3c854ce2ca46a33',
          otype: 'json'
        },
        data: {
          idlist: ''
        },
        fixBefore: function (e) {
          return 'idlist' in e && (e.idlist && e.idlist.length && (e.idlist = e.idlist.join(',')), e)
        }
      },
      getRssVplus: {
        url: '//c.v.qq.com/follow',
        query: {
          otype: 'json',
          op: 'check'
        },
        data: {
          fuin: '',
          low_login: '',
          g_tk: '',
          g_vstk: '',
          g_actk: ''
        }
      },
      addRssVplus: {
        url: '//c.v.qq.com/follow',
        query: {
          otype: 'json',
          op: 'set'
        },
        data: {
          fuin: '',
          low_login: '',
          g_tk: '',
          g_vstk: '',
          g_actk: ''
        }
      },
      delRssVplus: {
        url: '//c.v.qq.com/follow',
        query: {
          otype: 'json',
          op: 'del'
        },
        data: {
          fuin: '',
          low_login: '',
          g_tk: '',
          g_vstk: '',
          g_actk: ''
        }
      },
      minivideos: {
        url: '//node.video.qq.com/x/mplay/mini',
        data: {
          cid: '',
          vid: '',
          lid: ''
        }
      }
    }
  },
  function (e, t) {
    'use strict';
    function i(e, t) {
      return r(a, {
        otype: 'json',
        sn: 'FollowServer',
        cmd: 2565,
        id: e.id,
        attent_type: e.type,
        g_tk: e.g_tk
      }, function (e, i) {
        t && t(i && i.follow && i.follow.length && i.follow[0].isfollow, i)
      })
    }
    function n(e, t) {
      return r(a, {
        otype: 'json',
        sn: 'FollowWrite',
        cmd: 2818,
        id: e.id,
        attent_type: e.type,
        g_tk: e.g_tk
      }, function (e, i) {
        t && t(!(i && 0 === i.suc), i)
      })
    }
    function o(e, t) {
      return r(a, {
        otype: 'json',
        sn: 'FollowWrite',
        cmd: 2817,
        id: e.id,
        attent_type: e.type,
        g_tk: e.g_tk
      }, function (e, i) {
        t && t(!(i && 0 === i.suc), i)
      })
    }
    var r = function (e, t, i) {
      $.ajax({
        url: e,
        dataType: 'jsonp',
        data: t,
        success: function (e) {
          i(null, e)
        },
        error: function (e) {
          i(e)
        }
      })
    },
    a = '//like.video.qq.com/fcgi-bin/flw_new';
    e.exports = {
      add: o,
      check: i,
      remove: n
    }
  },
  function (e, t) {
    function i(e, t) {
      var i = {
      };
      if (n(e) && e.length > 0) for (var o, r, s, c = t ? l : a, d = e.split(/;\s/g), u = 0, p = d.length; u < p; u++) {
        if (s = d[u].match(/([^=]+)=/i), s instanceof Array) try {
          o = l(s[1]),
          r = c(d[u].substring(s[1].length + 1))
        } catch (f) {
        } else o = l(d[u]),
        r = '';
        o && (i[o] = r)
      }
      return i
    }
    function n(e) {
      return 'string' == typeof e
    }
    function o(e) {
      return n(e) && '' !== e
    }
    function r(e) {
      if (!o(e)) throw new TypeError('Cookie name must be a non-empty string')
    }
    function a(e) {
      return e ? e : ''
    }
    var s = t,
    l = decodeURIComponent,
    c = encodeURIComponent;
    s.get = function (e, t) {
      r(e),
      t = 'function' == typeof t ? {
        converter: t
      }
       : t || {
      };
      var n = i(document.cookie, !t.raw);
      return (t.converter || a) (n[e])
    },
    s.set = function (e, t, i) {
      r(e),
      i = i || {
      };
      var n = i.expires,
      a = i.domain,
      s = i.path;
      i.raw || (t = c(String(t)));
      var l = e + '=' + t,
      d = n;
      return 'number' == typeof d && (d = new Date, d.setDate(d.getDate() + n)),
      d instanceof Date && (l += '; expires=' + d.toUTCString()),
      o(a) && (l += '; domain=' + a),
      o(s) && (l += '; path=' + s),
      i.secure && (l += '; secure'),
      document.cookie = l,
      l
    },
    s.remove = function (e, t) {
      return t = t || {
      },
      t.expires = new Date(0),
      this.set(e, '', t)
    },
    e.exports = s
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/title/adv', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, e.pic),
      o = i.$escape,
      r = e.url,
      a = e.title,
      s = '';
      return s += '<div class="mod_promotion"> ',
      n ? (s += ' <a class="action" href="', s += o(r), s += '"> <img class="pic" src="', s += o(n), s += '" role="广告图"> </a> ')  : (s += ' <a class="btn_promotion" href="', s += o(r), s += '">', s += o(a), s += '</a> '),
      s += ' </div>',
      new String(s)
    })
  },
  function (e, t, i) {
    var n = i(79),
    o = i(19),
    r = i(55),
    a = i(58),
    s = i(7) ();
    e.exports = function (e) {
      var t,
      i,
      l = n.getAidParam('1', n.getAid());
      2 === e.appType ? (t = r({
      }).model({
        confid: e.liteConfid || 897
      }).openFixer(function () {
        return e.vid || e.cid ? 'videolite://v.qq.com/VideoDetailActivity?vid=' + (e.vid || '') + '&cid=' + (e.cid || '') + '&from=' + e.liteConfid : 'videolite://v.qq.com/HomeActivity'
      }), i = e.liteConfid || 897, t.action())  : 1 === e.appType && (t = o().downloadFixer(function (e) {
        return 'xiaomiqj' === a && s.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
      }).openFixer(function (e, t) {
        return e
      }), i = e.appConfid || 513, t.model('column' == PAGE_TYPE ? {
        column_id: e.lid || '',
        exsource: window.EXSOURCE,
        confid: i,
        from: e.appConfid || l || a
      }
       : {
        video_id: e.vid || '',
        cover_id: e.cid || '',
        column_id: e.lid || '',
        exsource: window.EXSOURCE,
        confid: i,
        from: e.appConfid || l || a
      }), t.action())
    }
  },
  function (e, t, i) {
    function n() {
      var e = 0;
      return a.indexOf('QQLiveBrowser') != - 1 ? a.indexOf('Android') != - 1 ? e = 8 : a.indexOf('iPhone') != - 1 && (e = 7)  : a.indexOf('QQLiveHDBrowser') != - 1 ? e = 5 : / QQ\//.test(a) ? a.indexOf('Android') != - 1 ? e = 8001 : a.indexOf('iPhone') != - 1 && (e = 8002)  : e = 3000,
      e
    }
    var o = (i(63), i(76)),
    r = i(67),
    a = navigator.userAgent,
    s = i(80);
    e.exports = {
      getAid: function (e) {
        var t = '',
        i = r.getUrlParam('ptag') || r.getUrlParam('PTAG') || r.getUrlParam('adtag') || r.getUrlParam('ADTAG');
        i || ('string' == typeof e ? i = e : e && e.ptag && (i = e.ptag)),
        i && (i = decodeURIComponent(i));
        var o = decodeURIComponent(r.getUrlParam('aid')),
        a = r.getUrlParam('hlwactid') || r.getUrlParam('mpid'),
        l = r.getUrlParam('cid');
        e && e.cid && (l = e.cid);
        var c = r.getUrlParam('vid');
        e && e.vid && (c = e.vid);
        var d = '';
        a ? d = a : e && e.actid && (d = e.actid);
        var u = e && e.channel ? e.channel : '',
        p = e && e.plat ? e.plat : '',
        f = e && e.source ? e.source : '',
        h = e && e.scene ? e.scene : 6,
        v = e && e.serial ? e.serial : '',
        m = e && e.voucherId ? e.voucherId : '';
        if (o && o.indexOf('V0$$') != - 1) {
          var g = o.split('$$') [1];
          if (g) {
            for (var y = [
            ], _ = g.split('$'), w = 0; w < _.length; w++) {
              var b = _[w];
              if (b) {
                var x = b.split(':');
                x.length > 0 && '' != x[1] && y.push(b)
              }
            }
            o = [
              '$',
              y.join('$')
            ].join('')
          }
          t = o,
          t.indexOf('$1:') == - 1 && u && (t += [
            '$1:',
            u
          ].join('')),
          t.indexOf('$2:') == - 1 && (t += p ? [
            '$2:',
            p
          ].join('')  : [
            '$2:',
            n()
          ].join('')),
          t.indexOf('$4:') == - 1 && f && (t += [
            '$4:',
            f
          ].join('')),
          t.indexOf('$11:') == - 1 && h && (t += [
            '$11:',
            h
          ].join('')),
          t.indexOf('$12:') == - 1 && i && (t += [
            '$12:',
            encodeURIComponent(i)
          ].join('')),
          d && (t.indexOf('$13:') != - 1 ? t = t.replace(/\$13:HLW\_[^$]*/g, '$13:' + d)  : t += [
            '$13:',
            d
          ].join('')),
          t.indexOf('$15:') == - 1 && v && (t += [
            '$15:',
            v
          ].join('')),
          t.indexOf('$21:') == - 1 && m && (t += [
            '$21:',
            m
          ].join(''))
        } else t = '',
        u && (t += [
          '$1:',
          u
        ].join('')),
        t += p ? [
          '$2:',
          p
        ].join('')  : [
          '$2:',
          n()
        ].join(''),
        f && (t += [
          '$4:',
          f
        ].join('')),
        h && (t += [
          '$11:',
          h
        ].join('')),
        i && (t += [
          '$12:',
          encodeURIComponent(i)
        ].join('')),
        d ? t += [
          '$13:',
          d
        ].join('')  : o && (t += [
          '$13:',
          encodeURIComponent(o)
        ].join('')),
        l && (t += [
          '$5:',
          l
        ].join('')),
        c && (t += [
          '$6:',
          c
        ].join('')),
        t.indexOf('$15:') == - 1 && v && (t += [
          '$15:',
          v
        ].join('')),
        t.indexOf('$21:') == - 1 && m && (t += [
          '$21:',
          m
        ].join(''));
        return 'V0$' + s.build(t)
      },
      reportPtag: function () {
        var e = this,
        t = e.dm,
        i = mypv.getPtag();
        '' != i && mypv.setCookiePtag('ptag', i, t);
        var n = 0,
        r = {
          'cache.tv.qq.com': 1,
          'imgcache.qq.com': 1,
          'film.qq.com': 2,
          '3g.v.qq.com': 3,
          'm.v.qq.com': 4
        };
        r[t] && (n = r[t]);
        var a = new Image;
        a.onerror = a.onload = a.onabort = function () {
        },
        a.src = [
          '//rcgi.video.qq.com/pv_report?',
          'refer=',
          encodeURIComponent(document.referrer),
          '&ptag=',
          o.get('ptag'),
          '&itype=',
          n,
          '&idx=',
          e.idx++,
          '&t=',
          (new Date).valueOf()
        ].join('')
      },
      getPtag: function () {
        for (var e = document.location.toString().toLowerCase(), t = this.dm, i = '', n = [
          'ptag',
          'adtag',
          'pgv_ref'
        ], o = 0, a = n.length; o < a && !(i = r.getUrlParam(n[o], e)); o++);
        if (!i) {
          var s = mypv.getDomainOfURL(document.referrer);
          '' != s && t != s && (i = s.replace(/\./g, '_')),
          i || (i = mypv.getCookiePtag('ptag'))
        }
        return i
      },
      getDomainOfURL: function (e) {
        var t = '';
        if ('undefined' == typeof e || null == e || '' == e) return t;
        var i = /.*\:\/\/([^\/]*).*/,
        n = e.match(i);
        return 'undefined' != typeof n && null != n && (t = n[1]),
        t
      },
      getCookiePtag: function (e) {
        e = e || 'ptag';
        var t = o.get(e),
        i = t.split('|');
        return i[0]
      },
      setCookiePtag: function (e, t, i) {
        for (var n = o.get(e), r = n.split('|'), a = [
          t
        ], s = 1, l = r.length; s < l; s++) a.push('|' + r[s]);
        o.set(e, a.join(''), {
          domain: i,
          path: '/'
        })
      },
      pgvSendClick: function (e) {
        window.HLWSTATE && window.HLWSTATE.clickStat(e),
        window.pgvSendClick && window.pgvSendClick({
          hottag: e
        }),
        window.MtaH5 && MtaH5.clickStat && MtaH5.clickStat(e)
      },
      getAidParam: function (e, t) {
        if (!/^[1-9]\d*$/.test(e)) return '';
        if (!/^V0\$/.test(t)) return '';
        var i = decodeURIComponent(t).match(new RegExp('\\$' + e + ':([^\\$]*)'));
        return i && i.length > 1 ? i[1] : ''
      }
    }
  },
  function (e, t) {
    'use strict';
    function i(e) {
      for (var t, i = {
      }, n = /(\$\d+):[^$]*/g; null != (t = n.exec(e)); ) i[t[1]] = t[0];
      return i
    }
    function n(e) {
      var t = i(e);
      return o.replace(/\$\d+/g, function (e) {
        return t[e] || ''
      })
    }
    var o = '$2$4$13$5$12$1$7$11$15$6$3$8$9$10$14$21';
    e.exports.build = n
  },
  function (e, t) {
    e.exports = {
      TOP_NAV_CONFID: 20409,
      PLAY_END_CONFID: 20410,
      BANNER_1_CONFID: 20411,
      BANNER_2_CONFID: 20412,
      BANNER_3_CONFID: 20413,
      BANNER_4_CONFID: 20414,
      BANNER_5_CONFID: 20415,
      TOP_NAV_CONFID_LITE: 20111,
      PLAY_END_CONFID_LITE: 20111,
      BANNER_CONFID_LITE: 20111,
      SHARPNESS_CONFID: 20430,
      GUESS_LIKE_CONFID: 20431,
      GUESS_LIKE_ITEM_CONFID: 20432
    }
  },
  function (e, t, i) {
    var n = i(73),
    o = i(61),
    r = i(21),
    a = i(19),
    s = i(54),
    l = i(57),
    c = i(58),
    d = i(7) (),
    u = i(83),
    p = i(84),
    f = i(79);
    e.exports = function (e, t, i, h) {
      function v(e) {
        return wording = {
          0: '安装腾讯视频，参与' + (e || 0) + '条热评大讨论',
          1: '打开腾讯视频，参与' + (e || 0) + '条热评大讨论',
          2: '安装腾讯视频，参与' + (e || 0) + '条热评大讨论'
        },
        r({
        }, a.TXVWORDING.text, wording)
      }
      var m,
      g = t.type || i.type;
      return (m = i.targetid && 1 != g && 10 != g ? i.targetid : t.targetid ? t.targetid : h.targetid) ? void n.commentinfo({
        commentid: m
      }).then(function (n) {
        function r(e) {
          e.userinfo && e.userinfo.head && (e.userinfo.head = p(e.userinfo.head)),
          e.picture && e.picture.map(function (e) {
            e.url = p(e.url)
          }),
          $ul.append(u(e))
        }
        if (!n.data) return e.addClass('none'),
        '';
        if (n.data.hotcommentid && 0 == n.data.hotcommentid.length && n.data.commentid && 0 == n.data.commentid.length) return e.addClass('none'),
        '';
        e.find('._num').text(n.data.total),
        $ul = e.find('._list');
        var m = 3;
        if (n.data.hotcommentid.every(function (e) {
          return e.isHot = !0,
          r(e),
          m-- > 0
        }), m-- > 0 && n.data.commentid.every(function (e) {
          return r(e),
          m-- > 0
        }), location.href.indexOf('qqlivekid=true') !== - 1) return void e.find('._banner').css('display', 'none');
        var g,
        y,
        _ = e.find('._banner').css('display', 'block !important').attr({
          _report: !0,
          _eid: 'commentpull',
          _kv: JSON.stringify({
            app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
          })
        }),
        w = f.getAidParam('1', f.getAid());
        location.href.indexOf('lite=true') > - 1 ? (g = s(), y = s.getConfid())  : (g = a().downloadFixer(function (e) {
          return 'xiaomiqj' === c && d.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
        }).openFixer(function (e, t) {
          return e + '&from=' + (w || c)
        }), y = l() || 513),
        g.model('column' == PAGE_TYPE ? {
          column_id: h.column_id,
          exsource: window.EXSOURCE,
          confid: y,
          from: w || c
        }
         : {
          video_id: i.vid,
          cover_id: t.cover_id,
          column_id: h.column_id,
          exsource: window.EXSOURCE,
          confid: y,
          from: w || c
        }).on('action', function (e) {
          o.banner({
            cid: t.cover_id,
            vid: i.vid,
            channelID: y,
            bannerPos: 'comment',
            reportType: 2 == e || 0 == e ? 'download' : 'open',
            sOp: 'click',
            isInstallOpen: + (2 != e)
          })
        }),
        'vip_cover' == window.PAGE_TYPE ? e.on('click', function () {
          g.action()
        })  : (g.on('render', function (e, t) {
          _.html('<div class="tvp_app_btn" data-status="' + a.TXVWORDING.status[e] + '"><div class="tvp_progress"><div class="tvp_progress_current" style="width: ' + t.progress + '%;animation:none;-webkit-animation:none"></div></div><div class="tvp_btn_text" data-text="' + v(n.data.total) [e] + '"><div class="tvp_app_logo"></div></div></div>')
        }), _.on('click', function () {
          g.action()
        })),
        $(window).bind('scroll', function b() {
          var e = $(this).scrollTop(),
          n = _.offset().top;
          n <= $(window).height() + e && (g.on('ready', function (e) {
            o.banner({
              cid: t.cover_id,
              vid: i.vid,
              channelID: y,
              bannerPos: 'comment',
              reportType: 2 == e || 0 == e ? 'download_show' : 'open_show',
              sOp: 'show',
              isInstallOpen: + (2 != e)
            })
          }), $(window).unbind('scroll', b))
        })
      })  : void e.addClass('none')
    }
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/comment/item', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.userinfo,
      r = e.content,
      a = e.picture,
      s = i.$each,
      l = (e.v, e.i, e.videoinfo),
      c = '';
      return c += '<li class="comment_item"> <dl class="comment_hd cf"> <dt> <img class="comment_avatar" onerror="picerr(this, \'s\')" src="',
      c += n(o ? o.head : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII='),
      c += '" alt="',
      c += n(o ? o.nick : ''),
      c += '"> </dt> <dd> <div class="comment_name U_color_b">',
      c += n(o && o.nick ? o.nick : '腾讯网友'),
      c += ' ',
      o.hwlevel && (c += ' <i class="icon_vip icon_vipyear icon_vip_lv', c += n(o.hwlevel), c += '"><i class="icon_vip_num"></i></i> '),
      c += ' </div> </dd> </dl> <div class="comment_bd"> <div class="comment_txt U_color_c">',
      c += n(r),
      c += '</div> ',
      a && (c += ' <div class="comment_pic"> <ul class="pic_list"> ', s(a, function (e, t) {
        c += ' ',
        t < 3 && (c += ' <li class="pic_item"> <a class="item_pic" href="javascript:;"> <span class="pic" style="background-image: url(', c += n(e.url + '/150'), c += ');"></span> </a> </li> '),
        c += ' '
      }), c += ' </ul> </div> '),
      c += ' ',
      a || r || !l || (c += ' ', c += ' <div class="comment_txt U_color_c">', c += n(l.desc), c += '</div> <div class="comment_pic"> <ul class="pic_list"> <li class="pic_item"> <a class="item_pic" href="javascript:;"> <span class="pic" style="background-image: url(', c += n(l.pic + '/150'), c += ');"></span> </a> </li> </ul> </div> '),
      c += ' </div> </li>',
      new String(c)
    })
  },
  function (e, t) {
    'use strict';
    function i(e) {
      var t = e.match(/^(http:|https:)?\/\/([\w\.]+)/),
      i = t && t.length > 2 ? t[2] : '',
      n = !0;
      return o.forEach(function (e) {
        e.test(i) && (n = !1)
      }),
      n
    }
    function n(e, t, i) {
      return /^(http:|https:)/.test(e) ? ('undefined' == typeof t && (t = !0), 2 == arguments.length && 'string' == typeof t && t.length > 0 && (i = t, t = !1), t ? e.replace(/^(http:|https:)/, '')  : (i || (i = location.protocol), /:$/.test(i) || (i += ':'), e.replace(/^\w+:/, i)))  : e
    }
    var o = [
      /qq\.com$/,
      /qlogo\.cn$/,
      /gtimg\.com$/,
      /gtimg\.cn$/,
      /qpic\.cn$/,
      /gtimg\.cn$/,
      /sinaimg.cn$/
    ];
    e.exports = function (e, t, o) {
      return !/^http:/.test(e) && t !== !1 || i(e) ? e : n(e, t, o)
    }
  },
  function (e, t, i) {
    'use strict';
    var n = Txplayer.$,
    o = i(86),
    r = i(87),
    a = i(66),
    s = i(63),
    l = i(73),
    c = i(67);
    e.exports = function (e, t, i, d) {
      function u(e, i) {
        var n = Math.max(0, e - 30),
        o = t.video_ids.slice(n, e);
        return l.unionvideos({
          idlist: o
        }).then(function (e) {
          e && e.results && e.results.reverse().forEach(function (e) {
            e = e.fields,
            e.cover_id = t.cover_id,
            e.uvip = c.getUrlParam('uvip') || '',
            e.qqaid = c.getUrlParam('qqaid') || '',
            e.tag_text = t.tag_text,
            v.prepend(r(e))
          }),
          i && i()
        }, function () {
          i && i()
        }),
        n
      }
      function p(e, i) {
        var n = Math.min(t.video_ids.length, e + 30),
        o = t.video_ids.slice(e, n);
        return l.unionvideos({
          idlist: o
        }).then(function (e) {
          e && e.results && e.results.forEach(function (e) {
            e = e.fields,
            e.cover_id = t.cover_id,
            e.uvip = c.getUrlParam('uvip') || '',
            e.qqaid = c.getUrlParam('qqaid') || '',
            e.tag_text = t.tag_text,
            v.append(r(e))
          }),
          i && i()
        }, function () {
          i && i()
        }),
        n
      }
      if ((2 == t.type || 3 == t.type || 106 == t.type) && t.video_ids.length && !window.EXSOURCE && d.list.every(function (e) {
        return e.c_title_output != e.title
      })) {
        var f,
        h,
        v,
        m;
        e.hasClass('none') ? (e.html(o(t)).removeClass('none'), v = e.find('._list'), d.list.forEach(function (e) {
          m = n(r({
            cover_id: t.cover_id,
            vid: e.vid,
            type: t.type,
            episode: e.index + 1,
            is_trailer: e.is_trailer,
            update_flag: e.update_flag,
            playingVid: i.vid,
            uvip: c.getUrlParam('uvip') || '',
            qqaid: c.getUrlParam('qqaid') || '',
            pay_status: e.pay_stattus,
            tag_text: t.tag_text
          })),
          v.append(m)
        }))  : v = e.find('._list'),
        m = v.find('li.current'),
        m.length && (v.parent() [0].scrollLeft = m[0].offsetLeft - 3 * m.width()),
        f = d.list[0].index - 1,
        h = d.list[d.list.length - 1].index + 1;
        var g = v.parent(),
        y = g.width(),
        _ = !1;
        g.on('scroll', function () {
          if (!_) {
            var e = v.width();
            if (f >= 0 && g[0].scrollLeft <= Math.min(e / 4, 200)) {
              var i = v.find('li').eq(0);
              f = u(f, function () {
                _ = !1,
                g[0].scrollLeft = i[0].offsetLeft
              }),
              _ = !0
            } else h < t.video_ids.length && g[0].scrollLeft >= Math.max(3 * e / 4, e - y - 200) && (h = p(h, function () {
              _ = !1
            }), _ = !0)
          }
        }),
        'vip_cover' == window.PAGE_TYPE && s.init(function () {
          s.isLogin() && a.getPayVip().then(function (t) {
            t.vip && (e.find('._tail_trailer').show(), e.find('._mid_trailer').hide())
          })
        })
      }
    }
  },
  function (e, t, i) {
    var n = i(11);
    i(87),
    e.exports = n('_component/2016/episode/body', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.update_desc,
      r = e.episode_updated,
      a = e.list,
      s = i.$each,
      l = (e.$value, e.$index, function (n, o) {
        o = o || e;
        var r = i.$include(n, o, t);
        return c += r
      }),
      c = '';
      return c += '<section class="mod_box mod_sideslip_episodes U_box_bg_a" id="2016_episode"> <div class="mod_hd mod_hd_new"> <h2 class="mod_title U_color_a">剧集</h2> <div class="mod_subtitle U_color_c">',
      c += n(o),
      o != r && (o && r && (c += '/'), c += n(r)),
      c += '</div> </div> <div class="mod_bd"> <div class="mod_episodes_numbers" _hot="episodes"> <ul class="_list" _scroll_view> ',
      a && (c += ' ', s(a, function (e, t) {
        c += ' ',
        e.index = t + 1,
        c += ' ',
        l('./item', e),
        c += ' '
      }), c += ' '),
      c += ' </ul> </div> </div> </section>',
      new String(c)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/episode/item', function (e, t) {
      'use strict';
      var i = this,
      n = i.$helpers,
      o = e.__current,
      r = e.vid,
      a = e.playingVid,
      s = e.is_trailer,
      l = i.$escape,
      c = e.index,
      d = (e.cid, e.cover_id),
      u = (e.pay, e.drm),
      p = e.uvip,
      f = e.qqaid,
      h = e.episode,
      v = e.pay_status,
      m = e.update_flag,
      g = '';
      return g += '<li class="item',
      (o || r == a) && (g += ' current'),
      1 == s ? g += ' _mid_trailer' : 2 == s && (g += ' _tail_trailer'),
      g += '" vid="',
      g += l(r),
      g += '" _report _eid="episode" _kv=\'{"rankid":',
      g += l(c),
      g += '}\'> <a class="U_color_b" href="',
      g += l(n.playUrl('javascript:', {
        cid: d,
        vid: r,
        pay: !! + u,
        uvip: p,
        qqaid: f
      })),
      g += '">',
      g += l(h < 10 ? '0' + + h : + h),
      g += ' ',
      + u && v ? (g += ' <i class="mark_text_vip"> ', 4 == v ? g += '用券 ' : 5 == v ? g += 'VIP ' : 6 == v ? g += 'VIP ' : 7 == v ? g += '付费 ' : 9 == v ? g += '付费 ' : 10 == v ? g += 'VIP+ ' : 11 == v ? g += 'VIP尝鲜 ' : 12 == v && (g += 'VIP付费 '), g += ' </i> ')  : (g += ' ', s ? g += '<i class="mark_text_trailer">预</i> ' : '306061' == m && (g += '<i class="mark_text_new">新</i> '), g += ' '),
      g += ' </a> </li>',
      new String(g)
    })
  },
  function (e, t, i) {
    var n = i(73),
    o = i(89),
    r = (i(42), i(21)),
    a = i(84);
    e.exports = function (e, t) {
      function i(e) {
        return d = !0,
        n.columncover2({
          lid: t.column_id,
          pagesize: 10,
          offset: e || 0
        })
      }
      function s(i) {
        return i.jsonvalue.results.forEach(function (e) {
          var i = e.fields;
          i.pic2_url = a(i.horizontal_pic_url || i.new_pic_hz),
          l.append(o(r(i, {
            currentCid: t.cover_id
          })))
        }),
        e.show(),
        i
      }
      if (10 == t.type) {
        var l,
        c = 0,
        d = !1;
        !d && i(c).then(function (t) {
          d = !1,
          t && t.jsonvalue && t.jsonvalue.results && t.jsonvalue.results.length && (l = e.find('._list'), c = 1, s(t), l.parent().on('scroll', function (e) {
            var t = l.parent().width(),
            n = l.width();
            e.target.scrollLeft >= n - t && !d && i(c).then(function (e) {
              e && e.jsonvalue && e.jsonvalue.results && e.jsonvalue.results.length && (d = !1, s(e), c++)
            })
          }))
        })
      }
    }
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/chapter/item', function (e, t) {
      'use strict';
      var i = this,
      n = i.$helpers,
      o = e.currentCid,
      r = e.cover_id,
      a = i.$escape,
      s = (e.cid, e.pic2_url),
      l = e.second_title,
      c = e.publish_date,
      d = '';
      return d += '<li class="item',
      o == r && (d += ' current'),
      d += '"> <a href="',
      d += a(n.playUrl('javascript:', {
        cid: r
      })),
      d += '" class="figure"> <span class="figure_pic"> <img src="',
      d += a(s),
      d += '" alt="',
      d += a(l),
      d += '"> <span class="figure_mask"><em class="mask_txt">',
      d += a(c),
      d += '</em></span> </span> <div class="figure_titles"> <span class="figure_title figure_title_multirow U_color_c"><span class="txt">',
      d += a(l),
      d += '</span></span> </div> </a> </li>',
      new String(d)
    })
  },
  function (e, t, i) {
    'use strict';
    var n = Txplayer.$,
    o = i(91),
    r = i(92),
    a = i(73),
    s = i(67);
    e.exports = function (e, t, i, l, c) {
      function d(e, n) {
        var o = Math.max(0, e - 30),
        l = t.video_ids.slice(o, e);
        return a.unionvideos({
          idlist: l
        }).then(function (e) {
          e && e.results && e.results.reverse().forEach(function (e) {
            e = e.fields,
            e.cover_id = t.cover_id,
            e.playingVid = i.vid,
            e.drm = p ? 0 : i.drm,
            e.uvip = s.getUrlParam('uvip') || '',
            e.qqaid = s.getUrlParam('qqaid') || '',
            e.tag_text = t.tag_text,
            f.prepend(r(e))
          }),
          n && n()
        }, function () {
          n && n()
        }),
        o
      }
      function u(e, n) {
        var o = Math.min(t.video_ids.length, e + 30),
        l = t.video_ids.slice(e, o);
        return a.unionvideos({
          idlist: l
        }).then(function (e) {
          e && e.results && e.results.forEach(function (e) {
            e = e.fields,
            e.cover_id = t.cover_id,
            e.playingVid = i.vid,
            e.drm = p ? 0 : i.drm,
            e.uvip = s.getUrlParam('uvip') || '',
            e.qqaid = s.getUrlParam('qqaid') || '',
            e.tag_text = t.tag_text,
            f.append(r(e))
          }),
          n && n()
        }, function () {
          n && n()
        }),
        o
      }
      var p = '0o3n651vzynmbek' == t.cover_id;
      if ((10 != t.type || t.publish_date && '0' != t.publish_date[0]) && !window.EXSOURCE && l.list && !(l.list.length < 2) && (2 != t.type && 3 != t.type || !l.list.every(function (e) {
        return e.c_title_output != e.title
      }))) {
        var f,
        h;
        e.hasClass('none') ? (e.html(o({
          type: t.type
        })).removeClass('none'), f = e.find('._list'), l.list.forEach(function (e, o) {
          e.cover_id = t.cover_id,
          e.playingVid = i.vid,
          p && (e.drm = 0),
          e.uvip = s.getUrlParam('uvip') || '',
          e.qqaid = s.getUrlParam('qqaid') || '',
          e.tag_text = t.tag_text,
          h = n(r(e)),
          f.append(h)
        }))  : f = e.find('._list'),
        h = f.find('li.current'),
        f.parent() [0] && h[0] && (f.parent() [0].scrollLeft = h[0].offsetLeft - h.width() / 2);
        var v = l.list[0].index - 1,
        m = l.list[l.list.length - 1].index + 1,
        g = f.parent(),
        y = g.width(),
        _ = !1;
        g.on('scroll', function () {
          if (!_) {
            var e = f.width();
            if (v >= 0 && g[0].scrollLeft <= Math.min(e / 4, 200)) {
              var i = f.find('li').eq(0);
              v = d(v, function () {
                _ = !1,
                g[0].scrollLeft = i[0].offsetLeft
              }),
              _ = !0
            } else m < t.video_ids.length && g[0].scrollLeft >= Math.max(3 * e / 4, e - y - 200) && (m = u(m, function () {
              _ = !1
            }), _ = !0)
          }
        })
      }
    }
  },
  function (e, t, i) {
    var n = i(11);
    i(92),
    e.exports = n('_component/2016/list/body', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, e.type),
      o = i.$escape,
      r = e.publish_date,
      a = e.subtitle,
      s = e.list,
      l = i.$each,
      c = (e.$value, e.$index, function (n, o) {
        o = o || e;
        var r = i.$include(n, o, t);
        return d += r
      }),
      d = '';
      return d += '<section class="mod_box mod_sideslip_link U_box_bg_a" id="2016_list"> <div class="mod_hd mod_hd_new"> <h2 class="mod_title U_color_a">',
      [
        2,
        3
      ].indexOf(n) != - 1 ? d += '剧集' : 10 == n ? (d += o(r ? r.split(' ') [0] + '期' : ''), d += '看点')  : d += '专辑列表',
      d += '</h2> <div class="mod_subtitle U_color_c">',
      d += o(a),
      d += '</div> </div> <div class="mod_bd"> <div class="mod_link_list" _hot="aspects"> <ul class="_list" _scroll_view> ',
      s && (d += ' ', l(s, function (e, t) {
        d += ' ',
        e.index = t + 1,
        d += ' ',
        c('./item', e),
        d += ' '
      }), d += ' '),
      d += ' </ul> </div> </div> </section>',
      new String(d)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/list/item', function (e, t) {
      'use strict';
      var i = this,
      n = i.$helpers,
      o = e.__current,
      r = e.vid,
      a = e.playingVid,
      s = i.$escape,
      l = e.index,
      c = (e.cid, e.cover_id),
      d = e.uvip,
      u = e.qqaid,
      p = e.title,
      f = e.drm,
      h = e.pay_status,
      v = e.is_trailer,
      m = e.update_flag,
      g = '';
      return g += '<li class="item',
      (o || r == a) && (g += ' current'),
      g += '" _report _eid="aspect" _kv=\'{"rankid":',
      g += s(l),
      g += '}\'> <a class="U_color_b" href="',
      g += s(n.playUrl('javascript:', {
        cid: c,
        vid: r,
        uvip: d,
        qqaid: u
      })),
      g += '" title="',
      g += s(p),
      g += '"> <span class="text">',
      g += s(p),
      g += '</span> ',
      + f && h ? (g += ' <i class="mark_text_vip"> ', 4 == h ? g += '用券 ' : 5 == h ? g += 'VIP ' : 6 == h ? g += 'VIP ' : 7 == h ? g += '付费 ' : 9 == h ? g += '付费 ' : 10 == h ? g += 'VIP+ ' : 11 == h ? g += 'VIP尝鲜 ' : 12 == h && (g += 'VIP付费 '), g += ' </i> ')  : (g += ' ', v ? g += '<i class="mark_text_trailer">预</i> ' : '306061' == m && (g += '<i class="mark_text_new">新</i> '), g += ' '),
      g += ' </a> </li>',
      new String(g)
    })
  },
  function (e, t, i) {
    'use strict';
    var n,
    o,
    r = i(7) (),
    a = i(19),
    s = i(63),
    l = i(94),
    c = new (i(95)),
    d = i(96),
    u = i(97),
    p = i(98),
    f = i(99),
    h = i(100),
    v = i(101),
    m = i(42),
    g = i(36).standard(),
    y = i(58),
    _ = m.get('sharecode'),
    w = location.href.indexOf('share=1') > - 1,
    b = function () {
      return _ || w ? !_ && w ? 1 : _ ? 2 : void 0 : 0
    }();
    e.exports = function (e, t, i, m) {
      function w() {
        var e = this;
        g.setApp('mobile_share').setPage('mplay'),
        this.$wrapper = $('.page_play'),
        this.userInfo = {
        },
        b > 0 ? c.request('ReqActivityTimeInfo', {
          iType: 0
        }).done(function (t) {
          t.isValid ? (g.expose('mplay'), e.initRed())  : e.initNormalShare()
        }).fail(function () {
          e.initNormalShare()
        })  : e.initNormalShare()
      }
      var x = i.vid || '',
      T = (t.cover_id || '', m.data && m.data.shareItem),
      k = location.href;
      if (T) {
        var k = T.shareUrl,
        S = T.shareImgUrl;
        location.href.indexOf('qqlivekid=true') !== - 1 && (k += '&qqlivekid=true', k.indexOf('?&') != - 1 && (k = k.replace(/\?\&/, '?'))),
        S.indexOf('_496_280') && (S = S.replace('_496_280', '_228_128')),
        S += '.jpg',
        $('#share_qq_img').length > 0 && $('#share_qq_img').html('<img src=' + S + ' width=0 height=0>'),
        document.title = T.shareTitle || document.title || '腾讯视频'
      }
      w.prototype = {
        initNormalShare: function () {
          var e = m.data && m.data.shareItem;
          e && S && k && (location.href.indexOf('lite=true') !== - 1 && (k += '&lite=true', k.indexOf('?&') != - 1 && (k = k.replace(/\?\&/, '?'))), l.init({
            shareUrl: k,
            shareImg: S,
            timeLineTitle: e.shareSingleTitle,
            friendTitle: e.shareTitle,
            friendSubTitle: e.shareSubtitle,
            shareContent: e.shareContent,
            shareContentTail: e.shareContentTail
          }))
        },
        initCodeShare: function () {
          var e = this;
          c.request('ReqShareCode', {
            strUrl: location.href + (location.href.indexOf('?') > - 1 ? '&sharecode=' : '?sharecode='),
            stVideo: {
              idtype: 0,
              strId: x
            }
          }).done(function (t) {
            if (t.strShareCode) {
              var i = location.href + (location.href.indexOf('?') > - 1 ? '&sharecode=' : '?sharecode=') + t.strShareCode;
              try {
                var n = '追大剧热综，还能免费领红包，现金、VIP、明星周边等你来拿！',
                o = e.userInfo.myName + '邀你看《' + document.title + '》领现金红包';
                S && l.init({
                  shareUrl: i,
                  shareImg: S,
                  timeLineTitle: o,
                  friendTitle: o,
                  friendSubTitle: n,
                  shareContent: n,
                  shareContentTail: n
                })
              } catch (r) {
              }
            } else e.initNormalShare()
          }).fail(function () {
            e.initNormalShare()
          })
        },
        initRedShare: function () {
          var e = this,
          t = '追大剧热综，还能免费领红包，现金、VIP、明星周边等你来拿！',
          i = e.userInfo.myName + '邀你看《' + document.title + '》领现金红包';
          S && l.init({
            shareUrl: location.href,
            shareImg: S,
            timeLineTitle: i,
            friendTitle: i,
            friendSubTitle: t,
            shareContent: t,
            shareContentTail: t
          })
        },
        initRed: function () {
          var e = this;
          e.STATE,
          e.write(),
          e.bindEvent(),
          e.init()
        },
        write: function () {
          this.$bottomBanner = $(d({
          })),
          this.$wrapper.append(this.$bottomBanner),
          this.$redpackage = $(u({
          })),
          this.$wrapper.append(this.$redpackage),
          this.$share = $(f({
          })),
          this.$wrapper.append(this.$share),
          1 == b && this.$share.removeClass('none')
        },
        bindEvent: function () {
          var e = this;
          this.$bottomBanner && this.$bottomBanner.on('click', '.z_cha_btn_txt', function () {
            switch (e.STATE) {
              case 1:
                g.click('banner', 'login'),
                s.openLogin();
                break;
              case 2:
                g.click('banner', 'get'),
                e.$redpackage && e.$redpackage.removeClass('none'),
                setTimeout(function () {
                  e.$redpackage.find('.z_red_wrap').removeClass('aniXChaRedShake').addClass('aniXChaRedOpen')
                }, 1000);
                break;
              case 3:
                g.click('banner', 'act'),
                1 == o.state ? o.action()  : location.href = v.actPageUrl;
                break;
              case 4:
                g.click('banner', 'invite'),
                e.$share && e.$share.removeClass('none')
            }
          }).on('touchmove', function (e) {
            e.preventDefault()
          }), this.$redpackage.on('click', '.z_red_box_btn', function () {
            e.$redpackage.find('.z_red_wrap').removeClass('aniXChaRedShake').addClass('aniXChaRedOpen')
          }).on('click', '.z_btn_close', function () {
            e.$redpackage && e.$redpackage.addClass('none'),
            e.$redpackage.find('.z_red_wrap').removeClass('aniXChaRedOpen').addClass('aniXChaRedShake')
          }).on('click', '.z_txp_appbar', function () {
            g.click('open', ''),
            n && n.action()
          }).on('click', '.z_result_more_txt', function () {
            location.href = 'http://v.qq.com/biu/redpacket_mobile/regulation'
          }).on('touchmove', function (e) {
            e.preventDefault()
          }), this.$share.on('click', function () {
            e.$share.addClass('none')
          }).on('touchmove', function (e) {
            e.preventDefault()
          })
        },
        init: function () {
          var e = this;
          s.init(function () {
            var t = s.isLogin();
            t ? s.getMainUserInfo().then(function (t) {
              e.userInfo.myName = t.nick,
              e.userInfo.myHead = t.headurl.indexOf('//') == - 1 ? '//i.gtimg.cn/qqlive/images/20150608/avatar.png' : t.headurl,
              e.userInfo.type = 1 == t.type ? 'wx' : 'qq',
              e.userInfo.vuid = 'qq' == e.userInfo.type ? s.getToken()  : t.id,
              2 == b ? (e.initBanner(), e.initBasicInfo(), e.initRedShare())  : 1 == b && e.initCodeShare()
            })  : (e.STATE = 1, e.setBottemBannerType('login'), e.initNormalShare())
          })
        },
        initBanner: function () {
          var e = this,
          t = {
            0: '去拆红包',
            1: '去拆红包',
            2: '去拆红包'
          };
          n = a().model({
            confid: 10509
          }).openFixer(function (t, i) {
            var n = 'txvideo://v.qq.com/Html5Activity?url=' + encodeURIComponent('http://v.qq.com/biu/redpacket_mobile/property?from=m&vuid=' + e.userInfo.vuid + '&nickname=' + e.userInfo.myName + '&logintype=' + e.userInfo.type + (location.href.indexOf('debug') > - 1 ? '&env=test' : '') + '&ptag=' + y) + '&from=10509&jumpaction=999';
            return r.os.ios && (n = 'tenvideo2://?action=10&jumpurl=' + encodeURIComponent(n)),
            n
          }).on('render', function (i, n) {
            e.$redpackage.find('.txp_btn_text').attr('data-text', t[i])
          }),
          o = a().model({
            confid: 10352
          }).openFixer(function (e, t) {
            var i = 'txvideo://v.qq.com/Html5Activity?url=' + encodeURIComponent('https:' + v.actPageUrl + '?ptag=' + y + (location.href.indexOf('debug') > - 1 ? '&env=test' : '')) + '&jumpaction=999';
            return r.os.ios && (i = 'tenvideo2://?action=10&jumpurl=' + encodeURIComponent(i)),
            i
          })
        },
        initBasicInfo: function () {
          var e = this;
          c.request('ReqShareInfo', {
            strShareCode: _
          }).done(function (t) {
            t.stUser && t.stUser.strNicname && t.stUser.strNicname == e.userInfo.myName && (e.userInfo.myShare = !0),
            e.initShareInfo()
          }).fail(function (e) {
          })
        },
        initShareInfo: function () {
          var e = this;
          c.request('ReqPreDrawLottery', {
            strShareCode: _,
            iChannel: 10352
          }).done(function (t) {
            if (t.iError > 0) return void e.setBottemBannerType();
            switch (t.stRedPacket && t.stRedPacket.stUser && (e.userInfo.hostName = t.stRedPacket.stUser.strNicname, e.userInfo.hostHead = t.stRedPacket.stUser.strPic), t.iException) {
              case 0:
                e.setBottemBannerType('draw'),
                e.initGuestInfo(!1);
                break;
              case 1001:
              case 1005:
                e.setBottemBannerType('drawed'),
                e.STATE = 3;
                break;
              case 1002:
              case 1006:
              case 1007:
              case 1008:
              case 1012:
              case 1013:
                e.setBottemBannerType('linkdrawed'),
                e.STATE = 3;
                break;
              case 1011:
                e.userInfo.myShare ? e.initHostInfo()  : (e.setBottemBannerType('check'), _ == t.stRedPacket.strShareCode ? e.initGuestInfo(!0)  : e.initGuestInfoDrawed());
                break;
              case 1004:
                e.setBottemBannerType('none');
                break;
              case 1009:
                e.initHostInfo()
            }
          }).fail(function (e) {
          })
        },
        setBottemBanner: function (e) {
          e && e.title && e.subTitle && e.btn && (this.$bottomBanner.find('.z_cha_info_tit').text(e.title), this.$bottomBanner.find('.z_cha_info_txt').text(e.subTitle), this.$bottomBanner.find('.z_cha_btn_txt').text(e.btn), this.$bottomBanner.removeClass('none'))
        },
        setBottemBannerType: function (e) {
          e && h[e] ? this.setBottemBanner(h[e])  : this.$bottomBanner.addClass('none')
        },
        setRedPackageText: function (e) {
          this.$redpackage.find('.title').text(e.title),
          this.$redpackage.find('.subTitle').empty().text(e.subTitle)
        },
        initHostInfo: function () {
          var e = this;
          c.request('RspShareCodeVuidInfo', {
            InviteType: 0,
            strShareCode: _,
            iUserNum: 3
          }).done(function (t) {
            t.iPacketNum ? (e.setBottemBanner({
              title: '你有' + t.iPacketNum + '份邀请红包未领取',
              subTitle: '请到APP个人中心-红包资产领取红包',
              btn: '立即领取'
            }), e.STATE = 2, e.setRedPackageText({
              title: '你有' + t.iPacketNum + '份邀请红包未领取',
              subTitle: '最近助力你领取红包的朋友'
            }))  : (e.setBottemBannerType('share'), e.STATE = 4),
            e.generateList(t.vecUser, !0)
          }).fail(function (e) {
          })
        },
        initGuestInfo: function (e) {
          var t = this;
          c.request('RspShareCodeVuidInfo', {
            InviteType: 1,
            strShareCode: _,
            iUserNum: 3
          }).done(function (i) {
            t.generateList(i.vecUser, !1),
            e ? t.setRedPackageText({
              title: '你获得了一个红包',
              subTitle: '最近助力' + t.userInfo.hostName + '领取红包的朋友'
            })  : t.setRedPackageText({
              title: '恭喜你获得一个红包',
              subTitle: '最近助力' + t.userInfo.hostName + '领取红包的朋友'
            }),
            t.STATE = 2
          }).fail(function (e) {
          })
        },
        initGuestInfoDrawed: function () {
          var e = this;
          this.generateList(null, !1),
          this.setRedPackageText({
            title: '你已经获得了一个红包',
            subTitle: '你已获得' + e.userInfo.hostName + '分享的红包'
          }),
          this.STATE = 2
        },
        generateList: function (e, t) {
          var i,
          n,
          o = this;
          if (t ? i = 3 : (i = 2, n = $(p({
            guestName: o.userInfo.myName,
            guestHead: o.userInfo.myHead,
            hostName: o.userInfo.hostName
          })), this.$redpackage.find('.z_result_list').append(n)), e && e.length) for (var r = 0; r < i; r++) e[r] && (n = $(p({
            guestName: e[r].strNicname,
            hostName: t ? '你' : o.userInfo.hostName,
            guestHead: e[r].strPic
          })), this.$redpackage.find('.z_result_list').append(n));
           else t && (this.$redpackage.find('.subTitle').css({
            visibility: 'hidden'
          }), this.$redpackage.find('.z_result_ft').css({
            position: 'relative',
            top: '-25px'
          }))
        }
      },
      new w
    }
  },
  function (e, t, i) {
    var n = i(60),
    o = i(24),
    r = i(7) (),
    a = {
      shareUrl: location.href,
      shareImg: null,
      timeLineTitle: '腾讯视频',
      friendTitle: '腾讯视频',
      friendSubTitle: ' ',
      shareContent: '',
      shareContentTail: ''
    },
    s = {
      init: function (e) {
        function t() {
          r.browser.WeChat ? s.shareToWx()  : r.browser.MQQClient && s.shareToQQ()
        }
        for (var i in e) e.hasOwnProperty(i) && e[i] && (a[i] = e[i]);
        o(t)
      },
      shareToWx: function () {
        window.WeixinJSBridge ? s.handleInWxShare()  : document.addEventListener('WeixinJSBridgeReady', function () {
          s.handleInWxShare()
        })
      },
      handleInWxShare: function () {
        this.useWxNewShare(),
        this.useWxOldShare()
      },
      useWxNewShare: function () {
        WeixinJSBridge.on('menu:general:share', function (e) {
          var t = a.friendTitle + a.friendSubTitle,
          i = '',
          o = '';
          n.os.ios && (t += a.shareUrl),
          'friend' == e.shareTo || 'QQ' == e.shareTo ? (i = a.friendTitle, o = a.friendSubTitle)  : i = a.timeLineTitle,
          e.generalShare({
            type: 'video',
            content: t,
            title: i,
            desc: o,
            img_url: a.shareImg,
            img_width: '120',
            img_height: '90',
            link: a.shareUrl,
            data_url: a.shareUrl,
            appid: 'wxca942bbff22e0e51'
          }, function (e) {
            WeixinJSBridge.log(e.err_msg)
          })
        })
      },
      useWxOldShare: function () {
        window.shareConfig = {
          img_url: a.shareImg,
          img_width: 120,
          img_height: 90,
          link: a.shareUrl,
          title: a.friendTitle,
          desc: a.friendSubTitle
        },
        WeixinJSBridge.on('menu:share:timeline', function (e) {
          var t = a.timeLineTitle,
          i = {
            appid: 'wxca942bbff22e0e51',
            img_url: a.shareImg,
            img_width: '120',
            img_height: '90',
            link: a.shareUrl,
            desc: '',
            title: t
          };
          WeixinJSBridge.invoke('shareTimeline', i, function (e) {
            WeixinJSBridge.log(e.err_msg)
          })
        }),
        WeixinJSBridge.on('menu:share:appmessage', function (e) {
          var t = a.friendTitle,
          i = a.friendSubTitle;
          WeixinJSBridge.invoke('sendAppMessage', {
            appid: 'wxca942bbff22e0e51',
            img_url: a.shareImg,
            img_width: '120',
            img_height: '90',
            link: a.shareUrl,
            desc: i,
            title: t
          }, function (e) {
            WeixinJSBridge.log(e.err_msg)
          })
        }),
        WeixinJSBridge.on('menu:share:weibo', function () {
          var e = a.shareContent + a.shareContentTail;
          n.os.ios && (e += a.shareUrl),
          WeixinJSBridge.invoke('shareWeibo', {
            content: e,
            url: a.shareUrl
          }, function (e) {
            WeixinJSBridge.log(e.err_msg)
          })
        })
      },
      shareToQQ: function () {
        if (window.mqq && window.mqq.data && window.mqq.data.setShareInfo) {
          var e = a.friendTitle,
          t = a.friendSubTitle;
          mqq.data.setShareInfo({
            share_url: a.shareUrl,
            title: e,
            desc: t,
            image_url: a.shareImg
          }, function (e) {
          });
          var i = n('head');
          n('<meta itemprop="name" content="' + e + '"/>').appendTo(i),
          n('<meta itemprop="description" content="' + t + '" />').appendTo(i),
          n('<meta itemprop="image" content="' + a.shareImg + '" />').appendTo(i)
        }
      }
    };
    e.exports = s
  },
  function (e, t) {
    function i() {
      this.isDebug = location.href.indexOf('debug') > - 1
    }
    var n = '//access.video.qq.com',
    o = '//debugaccess.video.qq.com',
    r = '/vcircle/${type}?vappid=17174171&vsecret=a06edbd9da3f08db096edab821b3acf3c27ee46e6d57c2fa&raw=1';
    i.prototype = {
      request: function (e, t) {
        var i = $.Deferred(),
        a = r.replace('${type}', e);
        return a = this.isDebug ? o + a : n + a,
        $.ajax({
          url: a,
          xhrFields: {
            withCredentials: !0
          },
          type: 'post',
          data: JSON.stringify(t),
          headers: {
            'content-type': 'text/plain'
          },
          success: function (e) {
            e && e.data ? i.resolve(e.data)  : i.reject()
          },
          error: function (e) {
            i.reject()
          }
        }),
        i
      },
      getVuid: function (e) {
        var t = $.Deferred();
        return 1 == e ? t.resolve()  : $.ajax({
          url: '//video.qq.com/fcgi-bin/qq_login',
          headers: {
            'content-type': 'text/plain'
          },
          dataType: 'jsonp',
          success: function (e) {
            t.resolve(e)
          },
          error: function (e) {
            t.reject(e)
          }
        }),
        t
      }
    },
    e.exports = i
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/red/tpl/bottomBanner', '<div class="x_cha_red none"> <div class="z_cha_bd"> <div class="z_cha_pic"> <img class="z_cha_pic_img" src="//puui.qpic.cn/vupload/0/20180803_z_cha_pic_img.png/0" alt=""> </div> <div class="z_cha_info"> <div class="z_cha_info_tit"></div> <div class="z_cha_info_txt"></div> </div> <a class="z_cha_btn" href="javascript:;"> <span class="z_cha_btn_txt"></span> </a> </div> </div>')
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/red/tpl/redpackage', ' <div class="x_cha_red none"> <div class="z_red_bd"> <div class="z_red_mask"></div> <div class="z_red_wrap aniXChaRedShake"> <div class="z_red_box"> <div class="z_red_box_foot"></div> <div class="z_red_box_blank"></div> <div class="z_red_box_bottom"></div> <div class="z_red_box_top"></div> <div class="z_red_box_btn"></div> </div> <div class="z_red_result"> <div class="z_red_result_inner"> <div class="z_result_blank"></div> <div class="z_result_wrap"> <a href="javascript:;" class="z_btn_close" alt="关闭"></a> <div class="z_result_hd title">恭喜你获得一个红包</div> <div class="z_result_bd assist_msg"> <div class="z_result_lately subTitle">最近助力<span class="z_name title_name"></span>领取红包的朋友</div> <div class="z_result_list"></div> </div> <div class="z_result_ft">  <div class="z_txp_appbar"> <a class="txp_app_btn" data-status="open" href="javascript:;"> <div class="txp_progress"><div class="txp_progress_current"></div></div> <div class="txp_btn_text" data-text="去拆红包"></div> </a> </div>  <div class="z_txp_appbar none"> <a class="txp_app_btn" data-status="downloading" href="javascript:;"> <div class="txp_progress"><div class="txp_progress_current"></div></div> <div class="txp_btn_text" data-text="下载中 45%"></div> </a> </div>  <div class="z_txp_appbar none"> <a class="txp_app_btn txp_nonauto" data-status="downloading" href="javascript:;"> <div class="txp_progress"><div class="txp_progress_current" style="width:10%"></div></div> <div class="txp_btn_text" data-text="下载中 10%"></div> </a> </div>  <div class="z_txp_appbar none"> <a class="txp_app_btn txp_nonauto" data-status="pause" href="javascript:;"> <div class="txp_progress"><div class="txp_progress_current" style="width:50%"></div></div> <div class="txp_btn_text" data-text="暂停 50%"></div> </a> </div>  <div class="z_txp_appbar none"> <a class="txp_app_btn" data-status="open" href="javascript:;"> <div class="txp_progress"><div class="txp_progress_current" style="width:100%"></div></div> <div class="txp_btn_text" data-text="前往腾讯视频APP领取红包"></div> </a> </div> <div class="z_result_tips">打开APP在“个人中心-红包资产”处开启红包并提现</div> </div> <a href="javascript:;" class="z_result_more"> <span class="z_result_more_txt" >查看活动详情</span> <i class="z_result_more_icon"></i> </a> </div> </div> </div> </div> </div> </div>')
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/red/tpl/redItem', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.guestHead,
      r = e.guestName,
      a = e.hostName,
      s = '';
      return s += '<div class="z_item"> <div class="z_pic"> <img class="z_img" src="',
      s += n(o),
      s += '" > </div> <div class="z_info"> <div class="z_tit"> <span class="z_name">',
      s += n(r),
      s += '</span>领取了一个红包，助力<span class="z_name">',
      s += n(a),
      s += '</span>获得一个邀请红包</div> <div class="z_txt"> </div> </div> </div>',
      new String(s)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/red/tpl/share', '<div class="x_cha_red none"> <div class="z_red_mask"></div> <div class="z_red_share"> <div class="z_share_pic"> <img class="z_share_pic_img" src="//puui.qpic.cn/vupload/0/20180807_z_share_pic_img.png/0" alt=""> </div> <div class="z_share_info"> <div class="z_share_txt">快将你喜欢的视频推荐给好友吧</div> </div> </div> </div> ')
  },
  function (e, t) {
    e.exports = {
      login: {
        title: '领取追剧红包，请登录',
        subTitle: '现金、VIP、明星周边等你来拿，最高领88元现金',
        btn: '登录领红包'
      },
      expire: {
        title: '活动已结束',
        subTitle: '活动福利将在7天后过期，请尽快兑换体现。',
        btn: '前往腾讯视频'
      },
      draw: {
        title: '送你一个红包，最高88元现金',
        subTitle: '还有VIP、明星周边、游戏礼包等你来拿！',
        btn: '领取'
      },
      drawed: {
        title: '今天你已在APP领取过红包',
        subTitle: '每人每天仅能领取一个他人分享的红包，去APP参与活动，可获得更多红包~',
        btn: '参与活动'
      },
      linkdrawed: {
        title: '你已领取过红包了',
        subTitle: '每位用户每天仅能领取一次红包，去APP参与活动，最高可得88元现金红包~',
        btn: '参与活动'
      },
      none: {
        title: '今日红包已被领完',
        subTitle: '每日红包数量有限，明天再来吧~',
        btn: '已领完'
      },
      share: {
        title: '你还没有获得奖励红包',
        subTitle: '邀请好友看视频，你和好友都可获得红包奖励哦',
        btn: '邀请'
      },
      check: {
        title: '你已经获得了一个红包',
        subTitle: '每人每天仅能领取一个他人分享的红包，请尽快查看领取红包',
        btn: '查看'
      }
    }
  },
  function (e, t) {
    e.exports = {
      cssUrl: '//vm.gtimg.cn/tencentvideo/vstyle/mobile/red/style/css/x_cha_red.css',
      actPageUrl: '//v.qq.com/biu/redpacket_mobile/regulation'
    }
  },
  function (e, t) {
    'use strict';
    e.exports = function (e, t, i, n) {
      var o = i.vid,
      r = t.cover_id,
      a = n.column_id;
      if (t && t.giftbag_id && 1 == t.giftbag_id && (location.href = 'http://m.v.qq.com/gift/bigbang/index.html'), !/(android)|(iphone)|(ipod)|(iPad.*MicroMessenger)|(IEMobile)|(MIDP)/i.test(navigator.userAgent)) {
        var s = 'http://v.qq.com',
        l = [
        ];
        '2016_cover' != window.PAGE_TYPE && 'vip_cover' != window.PAGE_TYPE || (!o && + window.EXSOURCE ? window.PAGE_TYPE = '2016_column' : (s += '/cover/' + r[0] + '/' + r + '.html', o && l.push('vid=' + o))),
        '2016_video' == window.PAGE_TYPE && (s += '/page/' + o[0] + '/' + o[9] + '/' + o[10] + '/' + o + '.html'),
        '2016_column' == window.PAGE_TYPE && (s += '/detail/' + (a || r) [0] + '/' + (a || r) + '.html', o && l.push('exsource=' + window.EXSOURCE));
        var c = location.href.match(/ptag=([\w\d]*)/);
        c && l.push('ptag=' + c[1]),
        s += '?' + l.join('&'),
        location.href = s
      }
    }
  },
  function (e, t, i) {
    var n = i(104),
    o = i(84),
    r = i(67);
    e.exports = function (e) {
      function t() {
        var e = 8,
        t = 20190508005011;
        return s && (e = 7, t = 20190508004992),
        new Promise(function (i, n) {
          $.ajax({
            url: '//access.video.qq.com/hollywood/GetModData?raw=1&vappid=20960712&vsecret=79f4377adb67664f12c73289da48d759ced2d31d19b7ac19&sChannelId=110707',
            data: {
              sModId: t,
              iPlatForm: e
            },
            dataType: 'json',
            success: function (e) {
              return e && 0 == e.ret && e.data && 0 == e.data.iRet && e.data.tModData && e.data.tModData.list && 0 != e.data.tModData.list.length ? i(e.data.tModData.list)  : n()
            },
            error: function (e, t, i) {
              n()
            }
          })
        })
      }
      var i = e.find('._list'),
      a = navigator.userAgent,
      s = a.indexOf('iPhone') != - 1,
      l = (a.indexOf('iPad') != - 1, a.indexOf('Android') != - 1, /QQ\/([\d.]+)/.test(a));
      s && l || r.getUrlParam('hmod').split(',').indexOf('welfare') > - 1 || t().then(function (t) {
        t.forEach(function (e, t) {
          e = e.cms_data,
          e && (e.index = t + 1, e.h5_url = o(e.h5_url), e.pic = o(e.pic_460x220), i.append(n(e)))
        }),
        e.removeClass('none')
      })
    }
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/activity/item', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.h5_url,
      r = e.activityid,
      a = e.title,
      s = e.index,
      l = e.pic,
      c = e.stitle,
      d = '';
      return d += '<li class="item"> <a href="',
      d += n(o),
      d += '" class="figure" _hot="h5.detail.activity_',
      d += n(r),
      d += '_',
      d += n(a),
      d += '_',
      d += n(s),
      d += '"> <span class="figure_pic"> <img src="',
      d += n(l),
      d += '" alt="',
      d += n(a),
      d += '"> </span> <div class="figure_titles"> ',
      a && (d += ' <span class="figure_title U_color_b"><span class="txt">', d += n(a), d += '</span></span> '),
      d += ' ',
      c && (d += ' <span class="figure_title U_color_c"><span class="txt">', d += n(c), d += '</span></span> '),
      d += ' </div> </a> </li>',
      new String(d)
    })
  },
  function (e, t) {
    e.exports = function (e, t) {
    }
  },
  function (e, t, i) {
    function n(e) {
      return '[object Array]' === Object.prototype.toString.call(e)
    }
    var o = (i(9), i(107), i(108)),
    r = i(109),
    a = i(110),
    s = i(63),
    l = (i(111), i(67)),
    c = i(112),
    d = i(113),
    u = i(66),
    p = i(114),
    f = i(79),
    h = i(76),
    v = i(69),
    m = i(42),
    g = i(58),
    y = i(57),
    _ = i(7) (),
    w = i(51) (),
    b = 1 == m.get('sandbox') ? '//debugaccess.video.qq.com' : '//access.video.qq.com';
    if (g && !m.get('ptag')) {
      var x;
      x = location.href.indexOf('?') != - 1 ? location.href.replace('?', '?ptag=' + g + '&')  : location.href.split('#') [0] + '?ptag=' + g;
      try {
        window.history && history.replaceState && history.replaceState(null, null, x)
      } catch (T) {
      }
    }
    e.exports = function (e, t, i, x) {
      function T() {
        k(),
        C(),
        S(),
        q(),
        be > 0 && F()
      }
      function k() {
        ye || 'undefined' === ye || window.HLWSTATE && window.HLWSTATE.clickStat({
          f_event: 'expose',
          f_hottag: 'h5.detail.openqqliveInNav',
          f_resource: '导航栏打开app'
        }),
        s.isLogin() ? (s.getMainUserInfo().then(function (e) {
          e && ($('.js_user_head').error(function () {
            $(this).attr('src', '//i.gtimg.cn/qqlive/images/20150608/avatar.png')
          }), e.headurl && $('.js_user_head').attr({
            src: e.headurl
          }), $('.js_user_head').attr('alt', e.nick), $('.js_user_head').show())
        }), u.getUvip().then(function (e) {
          var t = e.payvip,
          i = e.uvip;
          re = t.vip;
          var n = t && t.vip_icon && t.vip_icon.icon_url;
          if (window.h5_reporter.Boss.elementExpose({
            eid: 'usertype',
            idtype: 1 == re ? 1 : 2
          }), (!n || window.screen.width > 320) && ('wx' == s.loginType() ? $('.js_user_icon_wx').show()  : $('.js_user_icon_qq').show()), i) {
            we = !0;
            var o = l.getUrlParam('from') ? i.title2 : i.title;
            $('.js_uvip_text').text(o),
            $('.js_icon_uvip .icon_uvip').attr('src', i.status ? i.icon : i.icon_gray).show();
            var r = (1 === t.vip ? 'vip' : 'grey') + t.level + '.png';
            r = n ? n : '//vm.gtimg.cn/tencentvideo/vstyle/mobile/vip/style/app_v2/img/vip_change/' + r,
            $('#vip_header .js_icon_uvip .icon_vip_png').attr('src', r),
            $('#vip_header .js_icon_uvip .icon_vip_png').show(),
            $('#vip_header .js_icon_uvip .icon_vip_png').error(function () {
              $(this).hide()
            })
          } else n ? ($('.js_user_vip_new').attr('src', n), $('.js_user_vip_new').show(), $('.js_user_vip_new').error(function () {
            $(this).hide()
          }))  : $('.js_user_vip').addClass(['vip_',
          t.level].join('')),
          1 == t.vip ? (n || (1 == t.annualvip ? $('.js_user_vip').addClass('u_icon_vip_year')  : '' != t.annualendtime ? $('.js_user_vip').addClass('u_icon_vip_year_past')  : $('.js_user_vip').addClass('u_icon_vip')), Txplayer && (Txplayer.dataset.isVip = !0))  : (n || ('' != t.annualendtime ? $('.js_user_vip').addClass('u_icon_vip_year_lost')  : '' != t.endTime && $('.js_user_vip').addClass('u_icon_vip_lost')), (c.isWeiXin() || d.isTenvideo() && (G && d.getAppVersion() >= '4.9.0' || K && d.getAppVersion() >= '4.9.0')) && R(function (e) {
            if (e && 1 == e.isVip) {
              var t = '微信';
              'qq' == e.bind_type && (t = 'QQ'),
              e.account_id ? $('.js_head_account_tips .change_link').text('点击切换会员号' + t + e.account_id)  : $('.js_head_account_tips .change_link').text('点击切换会员号' + t + '账号是会员'),
              $('.js_head_account_tips').removeClass('none'),
              $('.btn_user_avatar').addClass('show_icon'),
              setTimeout(function () {
                $('.btn_user_avatar').removeClass('show_icon'),
                $('.js_head_account_tips').addClass('none')
              }, 5000)
            }
          }))
        }), $('.js_header_login').addClass('none'), $('.btn_user_avatar').show())  : ($('.js_header_login').removeClass('none'), $('.btn_user_avatar').hide(), u.getVplusConfig().then(function (e) {
          var t = l.getUrlParam('from') ? e.title2 : e.title;
          $('.js_uvip_text').text(t),
          we = !0
        }))
      }
      function S() {
        var n = 6,
        o = !1,
        r = t.new_pic_hz || t.big_horizontal_pic_url || t.horizontal_pic_url || i.pic496x280 || i.pic_228_128 || i.pic_640_360;
        10 == t.type && (r = i.pic496x280 || i.pic_228_128 || i.pic_640_360);
        var a = {
          containerId: 'txv_html_mod',
          vid: me,
          cid: ve,
          width: '100%',
          height: '100%',
          videoType: 'vod',
          playerType: 'h5',
          poster: r,
          tpid: window.COVER_TYPE ? window.COVER_TYPE : 0,
          useComboService: !0,
          autoplay: !1,
          isShowDurationLimit: !0,
          isContinuePlay: !0,
          promotionId: 140,
          isInteract: i.interactive_content_id && '1543606' == i.interactive_content_id[0]
        };
        try {
          window.VIP_MAIN_PLAYER = new Txplayer(a)
        } catch (s) {
        }
        VIP_MAIN_PLAYER.on('playStateChange', function (t) {
          switch (t) {
            case 1:
              I(),
              2 !== n && 3 !== n && e.find('.js_btn_pay_small').removeClass('none'),
              G && ($('body').off('touchmove').on('touchmove', ke), $(window).scroll(ke));
              break;
            case 0:
              e.find('.btn_try').removeClass('btn_retry').addClass('btn_retry'),
              e.find('.btn_play').removeClass('btn_replay').addClass('btn_replay'),
              e.find('.js_btn_pay').data('aidsource', '37'),
              e.find('.btn_try .txt').text('重新试看'),
              e.find('.mod_player_viptips').removeClass('none'),
              $('.site_player').removeClass('site_player_fullscreen');
              break;
            case 2:
              if (G && 0 === window.orientation) {
                var i = 0,
                o = 0;
                $('body').on('touchstart', function (e) {
                  var e = e || window.event;
                  o = e.targetTouches[0].pageX,
                  i = e.targetTouches[0].pageY
                }),
                $('body').off('touchmove').on('touchmove', function (e) {
                  var e = e || window.event,
                  t = e.targetTouches[0],
                  n = t.pageX - o,
                  r = t.pageY - i;
                  Math.abs(n) > Math.abs(r) && Se()
                }),
                $(window).scroll(Se)
              }
              break;
            case 3:
              I()
          }
        }), VIP_MAIN_PLAYER.on('error', function (e) {
          e && 'tips' === e.type && I()
        }), VIP_MAIN_PLAYER.on('adStart', function () {
          e.find('.js_btn_pay_small').addClass('none'),
          I(),
          o = !0
        }), VIP_MAIN_PLAYER.on('adEnd', function () {
          o = !1
        }), Txplayer.msg.on('bannerDownloadStateChange', function () {
          var t = Txplayer.dataset.downloadStatus;
          if (t) {
            n = t;
            try {
              2 == t || 3 == t ? e.find('.js_btn_pay_small') && e.find('.js_btn_pay_small').addClass('none')  : !o && e.find('.js_btn_pay_small') && e.find('.js_btn_pay_small').removeClass('none')
            } catch (i) {
            }
          }
        })
      }
      function E() {
        (4 == le || 5 == le && 0 == re || 6 == le || 7 == le) && 0 == ae && (Te = !0)
      }
      function C() {
        return 0 == i.drm && (le = 8),
        9 == le || 10 == le || 11 == le || 12 == le ? P()  : (8 == le && (ae = 1), void (s.isLogin() ? v.all([u.getUvip(),
        U()]).then(function (e) {
          var t = e[0].payvip,
          i = e[0].uvip;
          i ? we = !0 : ($('.js_uvip_title').hide(), $('.js_logo').show()),
          re = t.vip,
          pe = re ? 2 : 1,
          (8 === le || 6 === le && re || 5 === le && re) && (ae = 1),
          W(ae, pe).then(function (e) {
            ue = 0 == e.limit ? 0 : e.preview / 60,
            ~[5,
            6,
            7,
            8].indexOf(le) ? (8 !== le || !ee || te || Z || (ue = 0), P())  : V().then(function () {
              P()
            })
          }, function (e) {
            e && 80 === parseInt(e.em) && (fe = 1, he = e.exinfo),
            P()
          })
        }, function () {
          p.dialog({
            text: '很抱歉，获取信息失败，请稍后重试',
            callback: function () {
              location.reload()
            }
          })
        })  : v.all([W(ae, pe),
        u.getVplusConfig()]).then(function (e) {
          var t = e[0],
          i = e[1];
          ue = 0 == t.limit ? 0 : t.preview / 60,
          i && (we = !0),
          P()
        }) ['catch'](function (e) {
          e && 80 === parseInt(e.em) && (fe = 1, he = e.exinfo),
          P()
        })))
      }
      function P() {
        return fe ? void e.append(a({
          exinfo: he
        }))  : (e.find('._tips').html(o({
          vip: parseInt(re),
          status: parseInt(le),
          limit_time: Math.round(ue),
          single_price: ce,
          vip_price: de,
          ispay: parseInt(ae),
          ticket_num: parseInt(se),
          disney: ge,
          uvip: we,
          isMqq: Z,
          isIos: G
        })), 'i5w51tl7vbl5mid' != ve && 'h66vl2frbmcwq16' != ve || (e.find('.btn_try').hide(), e.find('.btn_open').addClass('btn_ct'), e.find('.btn_pay').addClass('btn_ct')), D(), $('.js_btn_pay_small') && $('.js_btn_pay_small').remove(), E(), void (_e && (G || J) && Z || e.find('.site_player_inner').append(r({
          vip: parseInt(re),
          status: parseInt(le),
          single_price: ce,
          vip_price: de,
          ispay: parseInt(ae),
          ticket_num: parseInt(se),
          disney: ge,
          qquvip: _e
        }))))
      }
      function q() {
        $('.js_header_login').click(function () {
          s.openLogin()
        }),
        $('#vip_header .btn_openapp').click(function () {
          window.HLWSTATE && window.HLWSTATE.clickStat({
            f_hottag: 'h5.detail.openqqliveInNav',
            f_resource: '导航栏打开app'
          })
        }).attr({
          _report: !0,
          _eid: 'opennavi',
          _kv: JSON.stringify({
            type: 1,
            appid: location.href.indexOf('lite=true') > - 1 ? 2 : 1
          })
        }),
        $('.btn_user_avatar').click(function () {
          d.isTenvideo() || Z || u.getVplusVip().then(function (e) {
            if (e && 'all' !== e.login_type && e.login_type !== s.loginType()) {
              var t = l.getUrlParam('from') ? e.title2 : e.title,
              i = 'qq' === e.login_type ? 'QQ' : '微信',
              n = 'qq' === e.login_type ? '微信' : 'QQ';
              p.dialog({
                text: t + '联合会员不支持' + n + '账号，请切换至其他' + i + '账号',
                btn_num: 2,
                btn_ok_txt: '切换' + i,
                callback: function (t) {
                  t && s.logout(function () {
                    s.openLogin({
                      type: e.login_type
                    })
                  })
                }
              })
            } else p.dialog({
              text: '您确定要退出登录吗？',
              btn_num: 2,
              callback: function (e) {
                e && s.logout(function () {
                  var e = location.href.replace(/[\?&]rv=\d{13}$/, '');
                  location.href = [
                    e,
                    e.indexOf('?') > - 1 ? '&' : '?',
                    'rv=',
                    Date.now()
                  ].join('')
                })
              }
            })
          })
        }),
        $('.js_head_account_tips .acc_tips_inner').click(function () {
          var e = 'wx';
          'wx' == s.loginType() && (e = 'qq'),
          d.isTenvideo() ? d.switchLogin(e, function (e) {
            window.location.reload(!0)
          })  : c.isWeiXin() && s.logout(function () {
            s.openLogin({
              type: e
            })
          })
        }),
        $(document).delegate('.btn_try,.btn_play', 'click', function () {
          Te && $('.txp_btn_full_top').remove(),
          O()
        }),
        $(document).delegate('.btn_retry', 'click', function () {
          A()
        }),
        $(document).delegate('.btn_replay', 'click', function () {
          A()
        }),
        $(document).delegate('.js_btn_pay,.btn_pay_a,.btn_pay_b,.js_btn_pay_small', 'click', function (e) {
          var t = $(this).data('type'),
          i = '1*' + ve,
          n = s.getUin(),
          o = {
            ptag: 'h5.detail'
          };
          o.channel = 11,
          o.source = $(this).data('aidsource'),
          o.cid = ve,
          o.vid = me;
          var r = location.href.toString().replace(/[\?&#](code|state|timestamp)=[^&#]+/gi, '');
          if ('openpay' == t) {
            var a = l.getUrlParam('aid');
            if (s.isLogin()) {
              var c = [
                'https://film.qq.com/weixin/upay.html?showwxpaytitle=1&so=1&aid=',
                a,
                '&cid=',
                ve,
                '&vid=',
                me,
                '&dr=1&ru=',
                encodeURIComponent(r)
              ].join('');
              '1' == l.getUrlParam('sandbox') && (c += '&sandbox=1'),
              location.href = c
            } else s.openLogin()
          } else 'use_ticket' == t ? (e.preventDefault(), X(n, 1, 3, null, i, null, null, 'ticket_trade'), Y().then(function (e) {
            var t = new Date;
            t.setDate(t.getDate() + e);
            var i = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : '0' + (t.getMonth() + 1);
            t = t.getFullYear() + '-' + i + '-' + t.getDate() + ' ' + t.getHours() + ':' + t.getMinutes(),
            H(t)
          }))  : 'use_money' == t ? (e.preventDefault(), s.isStrictLogin(function (e) {
            if (!e) return void s.openLogin();
            $('.g_pop_pay .pop_close').trigger('click'),
            X(n, 3, 2, null, i, null, null, 'price-cloud');
            var t = '';
            G || J ? t = 'wechat-copyright-ios-hollywood' : K ? t = 'wechat-copyright-android-hollywood' : Q.indexOf('Windows Phone') >= 0 && (t = 'wechat-copyright-iap-hollywood');
            var r = window.Promise;
            window.Promise = v;
            var a = {
              cid: ve,
              type: 0
            },
            l = {
              buzType: 'cover',
              loginType: s.loginType()
            },
            c = f.getAid(o);
            c && (l.aid = c),
            '1' == m.get('sandbox') ? l.sandbox = 1 : void 0,
            'qqbrowseract' === m.get('extendparam') ? l.qqbrowseract = 1 : void 0,
            'qq' == s.loginType() ? h.get('vqq_appid') && h.get('vqq_openid') && h.get('vqq_access_token') ? (l.openid = h.get('vqq_openid'), l.openkey = h.get('vqq_access_token'))  : n && (l.uin = n.toString())  : 'wx' == s.loginType() && (l.wxAppid2 = h.get('appid'), l.openid = h.get('openid'), l.openkey = h.get('access_token')),
            SinglePay.pay(a, l).then(function (e) {
              location.reload()
            }, function () {
            }).then(function () {
              window.Promise = r
            })
          }))  : 'uvip' == t ? s.isStrictLogin(function (e) {
            return e ? void u.getUvip().then(function (e) {
              var t = e.payvip,
              i = e.uvip,
              n = l.getUrlParam('from') ? i.title2 : i.title;
              if ('all' !== i.login_type && i.login_type != s.loginType()) {
                var c = 'qq' == i.login_type ? '微信' : 'QQ',
                u = 'qq' == i.login_type ? 'QQ' : '微信';
                p.dialog({
                  text: n + '联合会员不支持' + c + '账号，请切换至其他' + u + '账号',
                  btn_num: 2,
                  btn_ok_txt: '切换' + u,
                  callback: function (e) {
                    e && s.logout(function () {
                      s.openLogin({
                        type: i.login_type
                      })
                    })
                  }
                })
              } else if (t && 'HLWHF' == t.servicetype) {
                var h = 'all' != e.login_type ? 'qq' == e.login_type ? 'QQ' : '微信' : '';
                p.dialog({
                  title: '温馨提示',
                  text: n + '联合会员不支持话费支付用户，您可切换至其他' + h + '账号开通。',
                  btn_num: 2,
                  btn_ok_txt: '切换QQ',
                  btn_cancel_txt: '我知道了',
                  callback: function (t) {
                    if (t) {
                      var i = {
                      };
                      'all' != e.login_type && (i.type = e.login_type),
                      s.openLogin(i)
                    }
                  }
                })
              } else if ('qquvip' === ye) if (o.scene = 28, o.serial = 21, G && Z) {
                var v = window.unionPay;
                v.unionOpen({
                  type: 'shvip',
                  monthList: '3,1,6',
                  offerid: '1450012942',
                  aid: l.getUrlParam('qqaid') + '|aid=' + f.getAid(o),
                  onPayCallback: function (e) {
                    0 == e.ret && location.reload()
                  }
                })
              } else {
                $('.g_pop_mask').hide(),
                $('.g_pop_pay').hide(),
                o.scene = 28,
                o.serial = 21;
                var m = !1,
                y = {
                  m: 'buy',
                  c: 'qqsubscribe',
                  appid: '1450012972',
                  service: 'SHVIPGG',
                  pf: 'wechat_wx-2001-wx-2011-hlw',
                  account: 'qq',
                  aid: f.getAid(o),
                  ru: r,
                  onSuccess: function () {
                    m = !0
                  },
                  onClose: function () {
                    m && location.reload()
                  }
                };
                te || Z || d.isTenvideo() || (y.n = 1),
                1 == l.getUrlParam('sandbox') && (y.sandbox = 1),
                /qq/.test(ye) && (y.appid = '1450012942', l.getUrlParam('qqaid') && (y.aid = l.getUrlParam('qqaid') + '|aid=' + f.getAid(o))),
                Midas.openSubscribe(y)
              } else {
                var _ = i.url + (~i.url.indexOf('?') ? '' : '?');
                location.href = [
                  _ + '&aid=',
                  a,
                  '&cid=',
                  ve,
                  '&vid=',
                  me,
                  '&ru=',
                  encodeURIComponent(r),
                  '&ptag=',
                  g
                ].join('')
              }
            })  : s.openLogin()
          })  : t || ($(this).hasClass('js_btn_pay_small') ? M('ing')  : '37' == $(this).data('aidsource') ? M('after')  : M())
        }),
        $(document).delegate('.g_pop_pay .link', 'click', function () {
          s.openLogin()
        }),
        $('.g_pop_pay .pop_close').click(function () {
          $('.g_pop_pay').hide(),
          $('.g_pop_mask').hide()
        }),
        $(document).delegate('.click_retry', 'click', function () {
          location.reload()
        }),
        $('.js_header_search').click(function () {
          location.href = '//m.v.qq.com/search.html'
        })
      }
      function I() {
        e.find('.mod_player_viptips').addClass('none'),
        e.find('.mod_player').removeClass('none'),
        G && !oe && ($('body').off('touchmove').on('touchmove', ke), $(window).scroll(ke)),
        e.find('.js_btn_pay_small').addClass('none')
      }
      function O() {
        try {
          VIP_MAIN_PLAYER.play(),
          $('#txv_html_mod video source').attr('src') && (VIP_MAIN_PLAYER.play(), I())
        } catch (e) {
        }
      }
      function A() {
        $('#txv_html_mod').find('.txp_btn_replay').trigger('click'),
        I()
      }
      function M(e) {
        var i = $('.g_pop_pay .pop_title'),
        o = $('.g_pop_pay .btn_pay_a'),
        r = $('.g_pop_pay .btn_pay_b');
        r.show(),
        ye ? (o.attr('_hot', 'h5.detail.uvippay'), o.data('type', ye))  : (o.attr('_hot', 'h5.detail.pay'), o.data('type', 'openpay')),
        'after' == e ? o.data('aidsource', '37')  : 'ing' == e ? o.data('aidsource', '36')  : o.data('aidsource', '2'),
        r.data('type', 'use_money'),
        r.attr('_hot', 'h5.detail.usemoney');
        var a = n(t.pay_for_knowledge_name) && '是' === t.pay_for_knowledge_name[0],
        l = '应版权方要求本' + (a ? '课程' : '片') + '需购买观看完整版';
        4 == le ? re && !se ? (i.html(l + '<br/>您的观影券已用完'), o.text('续费' + (ye ? '联合会员' : 'VIP') + '获赠券'), r.text(ce + '元购买单片'))  : re || ae || (i.html(l + '<br/>VIP会员可使用观影券'), o.text('开通' + (ye ? '联合' : 'VIP') + '会员'), r.text(ce + '元购买单片'))  : 5 == le ? re || ae || (i.text((ye ? '' : 'VIP') + '会员可免费观看'), o.text('开通' + (ye ? '联合' : 'VIP') + '会员'), r.text(ce + '元购买单片'))  : 7 != le || ae || (ge ? i.text('应版权方要求，购买后可观看付费包内所有影片')  : i.text(l), ce != de ? re ? (o.html((ye ? '会员' : 'VIP') + de + '元购买(<span style="text-decoration: line-through">原价' + ce + '元</span>)'), o.data('type', 'use_money'), r.hide())  : (o.text('开通' + (ye ? '会员' : 'VIP') + de + '元购买'), r.text(ce + '元原价购买'))  : (o.text(ce + '元购买' + (ge ? '付费包' : '单片')), o.data('type', 'use_money'), o.attr('_hot', 'h5.detail.usemoney'), r.hide(), $('.g_pop_pay .js_login_txt').text('如已购买请'))),
        s.isLogin() || $('.g_pop_pay .login_txt').removeClass('none'),
        $('.g_pop_mask').show(),
        $('.g_pop_pay').show()
      }
      function j(e, t) {
        $.ajax({
          url: b + '/trans/pay.video.qq.com/fcgi-bin/ticket_trade?vappid=68106135&vsecret=e667570eb833960cc41051d498df1c233308eb195dba2cc3',
          data: e,
          dataType: 'jsonp',
          CSRF: !0,
          cache: !1,
          timeout: t && t > 0 ? 10000 : 5000
        }).done(function (e) {
          p.loading();
          var t = e ? e.ret : - 1,
          i = '1*' + ve;
          if (X(s.getUin(), 6, 3, null, i, null, null, 'ticket_trade'), e && 0 == e.ret) L();
           else {
            if (t == - 11) return void s.openLogin();
            t == - 206 ? p.dialog({
              text: '您已支付过该影片，无需再次支付',
              callback: function () {
                location.reload()
              }
            })  : p.dialog({
              text: '很抱歉，服务器繁忙，支付未成功，请稍后重试',
              callback: function () {
                location.reload()
              }
            })
          }
        }).fail(function (i, n, o) {
          t ? (p.loading(), p.dialog({
            text: '很抱歉，服务器繁忙，支付未成功，请稍后重试',
            callback: function () {
              location.reload()
            }
          }))  : j(e, 1)
        })
      }
      function L() {
        C()
      }
      function D() {
        N(function (e) {
          z(e)
        })
      }
      function N(e) {
        var t = '&isSpecial=1';
        if (s.isLogin()) if ('wx' == s.loginType()) s.getMainUserInfo().then(function (i) {
          if (i) {
            var n = h.get('vuserid');
            t += [
              '&userid=',
              n,
              '&nickname=',
              encodeURIComponent(i.nick),
              '&userType=wx'
            ].join('')
          }
          8 != le && (t += '&needAuthorize=1'),
          u.getPayVip().then(function (i) {
            t += '&textType=' + i.vip,
            e && e(t)
          }, function () {
            t += '&textType=0',
            e && e(t)
          })
        });
         else {
          var i = s.getUin();
          t += [
            '&userid=',
            i,
            '&userType=qq'
          ].join(''),
          8 != le && (t += '&needAuthorize=1'),
          u.getPayVip().then(function (i) {
            t += '&textType=' + i.vip,
            e && e(t)
          }, function () {
            t += '&textType=0',
            e && e(t)
          })
        } else e && e(t)
      }
      function z(t) {
        var i = '';
        Q.indexOf('MicroMessenger') >= 0 && (i = '&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1&jumpaction=1000'),
        t = t || '';
        var n = [
          'tenvideo2://?action=1&cover_id=',
          ve,
          '&video_id=',
          me,
          t,
          i
        ].join('');
        ie ? n = [
          'videolite://v.qq.com/VideoDetailActivity?cid=',
          ve,
          '&vid=',
          me,
          '&from=third_897'
        ].join('')  : J && (n = [
          'tenvideohd://?action=1&cover_id=',
          ve,
          '&video_id=',
          me,
          t,
          i
        ].join(''));
        var o = 'https://mcgi.v.qq.com/commdatav2?cmd=4&confid=' + (y() || 87) + '&platform=aphone';
        ie ? o = G ? 'https://itunes.apple.com/cn/app/id1462049868?mt=8' : J ? 'itms-apps://itunes.apple.com/cn/app/id407925512?mt=8' : K ? 'https://mcgi.v.qq.com/commdatav2?cmd=76&confid=897&platform=aphone' : 'https://m.v.qq.com/app/tenvideo_lite_down/index.html' : G ? o = 'https://itunes.apple.com/cn/app/id458318329?mt=8' : J && (o = 'itms-apps://itunes.apple.com/cn/app/id407925512?mt=8');
        var r = f.getAidParam('1', f.getAid());
        r && (n += '&from=' + r),
        n.indexOf('from') === - 1 && (n += Q.indexOf('MicroMessenger') >= 0 ? '&from=16' : '&from=17');
        var a = e.find('.js_openqqlive');
        Q.indexOf('MicroMessenger') >= 0 || Q.match(/QQ\/([\d.]+)/) ? B(function () {
          $(document).delegate('[data-type=\'openqqlive\']', 'click', function () {
            return te ? c.launchApp(n, ie ? ne : '')  : location.href = n,
            !1
          })
        }, function () {
          var e = a.find('.icon_text');
          0 !== e.length ? e.text('下载腾讯视频看完整版')  : a.text('下载腾讯视频看完整版'),
          a.attr('_hot', 'h5.detail.downloadqqlive'),
          $(document).delegate('[data-type=\'openqqlive\']', 'click', function () {
            return location.href = o,
            !1
          })
        })  : (d.isTenvideo() && a.text('看完整版'), $(document).delegate('[data-type=\'openqqlive\']', 'click', function () {
          w(n, {
            onfail: function () {
              location.href = o
            }
          })
        }))
      }
      function B(e, t) {
        if (c.isWeiXin()) {
          var i = '',
          n = '';
          ie ? (i = G ? 'com.tencent.videoplus.iphone' : 'com.tencent.videolite.android', n = 'videolite://v.qq.com/HomeActivity')  : G ? (i = 'com.tencent.live4iphone', n = 'tenvideo2://can_open_me_if_install_and_regeister_this_scheme')  : J ? (i = 'com.tencent.QQLiveHD', n = 'tenvideohd://can_open_me_if_install_and_regeister_this_scheme')  : (i = 'com.tencent.qqlive', n = 'tenvideo://can_open_me_if_install_and_regeister_this_scheme'),
          c.getInstallAppState(i, n).then(function (t) {
            e && e()
          }, function () {
            t && t()
          })
        } else l.loadScript('js_qq', '//open.mobile.qq.com/sdk/qqapi.js?_bid=152', function () {
          mqq.device.isMobileQQ(function (i) {
            if (i) {
              var n = '';
              n = ie ? G ? 'com.tencent.videoplus.iphone' : 'com.tencent.videolite.android' : G ? 'tenvideo2' : J ? 'tenvideohd' : 'com.tencent.qqlive',
              mqq.app.isAppInstalled(n, function (i) {
                i === !0 || i && i.result ? e && e()  : t && t()
              })
            } else t && t()
          })
        })
      }
      function R(e, t) {
        $.ajax({
          url: '//vip.video.qq.com/fcgi-bin/comm_cgi?name=check_bindaccount&cmd=1?otype=json',
          dataType: 'jsonp',
          success: function (i) {
            i && 0 == i.result.code ? e && e(i)  : t && t()
          },
          error: function (e, i, n) {
            t && t()
          }
        })
      }
      function U() {
        return new v(function (e, t) {
          $.ajax({
            url: b + '/trans/pay.video.qq.com/fcgi-bin/pay?vappid=68106135&vsecret=e667570eb833960cc41051d498df1c233308eb195dba2cc3&otype=json',
            data: {
              id: ve,
              uin: s.getUin(),
              g_tk: s.getToken()
            },
            dataType: 'jsonp',
            success: function (i) {
              i && i.result ? 0 == i.result.code ? (ae = parseInt(i.pay) ? 1 : 0, e(i))  : i.result.code == - 11 ? s.openLogin()  : t()  : t()
            },
            error: function (e, i, n) {
              t()
            }
          })
        })
      }
      function V() {
        return new v(function (e, t) {
          $.ajax({
            url: b + '/trans/pay.video.qq.com/fcgi-bin/user_ticket?vappid=68106135&vsecret=e667570eb833960cc41051d498df1c233308eb195dba2cc3',
            data: {
              uin: s.getUin(),
              status: 1,
              low_login: 1,
              _t: 5,
              platform: 1,
              g_tk: s.getToken(),
              psize: 10,
              otype: 'json'
            },
            dataType: 'jsonp',
            success: function (i) {
              i && i.result ? 0 == i.result.code ? (se = i.not_use || 0, e(i))  : i.result.code == - 11 ? s.openLogin()  : t()  : t()
            },
            error: function (e, i, n) {
              t()
            }
          })
        })
      }
      function W(e, t) {
        var e = e || 0;
        return new v(function (n, o) {
          $.ajax({
            url: '//h5vv.video.qq.com/getextinfo?h5flag=4&otype=json',
            data: {
              platform: ee && !te ? '161001' : '11001',
              charge: e,
              vid: i.vid,
              login: t
            },
            dataType: 'jsonp',
            success: function (e) {
              e && e.s && 'o' == e.s ? n(e)  : o(e)
            },
            error: function (e, t, i) {
              o()
            }
          })
        })
      }
      function X(e, t, i, n, o, r, a, l) {
        try {
          var c = '',
          d = '',
          u = '';
          if ('wx' == s.loginType() ? (c = 2, d = h.get('openid'), u = h.get('appid'))  : 'qq' == s.loginType() && (c = 1), !r) {
            var p = navigator.userAgent,
            f = p.indexOf('iPhone') != - 1;
            r = f ? 108 : 107
          }
          var v = '//pay.video.qq.com/fcgi-bin/payreport?otype=json',
          m = [
            v,
            '&pay_uin=',
            s.getUin(),
            '&openid=',
            d,
            '&appid=',
            u,
            '&type=',
            i,
            '&accounttype=',
            c,
            '&payitem=',
            o,
            '&step=',
            t,
            '&plat=',
            r
          ].join('');
          e && (m += [
            '&open_uin=',
            e
          ].join('')),
          n && (m += [
            '&paychannel=',
            n
          ].join('')),
          a || (a = window.location.href),
          m += [
            '&url=',
            encodeURIComponent(a)
          ].join(''),
          l && (m += [
            '&cginame=',
            l
          ].join('')),
          $.ajax({
            url: m,
            dataType: 'jsonp',
            success: function (e) {
              e && e.result && 0 == e.result.code
            },
            error: function (e, t, i) {
            }
          })
        } catch (g) {
        }
      }
      function H(e) {
        p.dialog({
          title: '购买本片',
          text: '应版权方要求本片需购买观看完整版，VIP会员可使用1张观影券抵扣。<br/>观影有效期至：' + e + '<br/>剩余观影券：' + se + '张',
          btn_num: 2,
          btn_ok_txt: '用券购买',
          callback: function (e) {
            e ? (window.HLWSTATE && window.HLWSTATE.clickStat('h5.detail.useticket_layer_ok'), s.isStrictLogin(function (e) {
              if (!e) return void s.openLogin();
              p.loading('支付中...');
              var i = (l.getUrlParam('guid'), l.getUrlParam('aid'), {
                cid: ve,
                vid: me
              }),
              n = {
                uin: s.getUin(),
                cid: ve,
                pid: 10001,
                pchannel: 'nomoney',
                title: t.title,
                money: 0,
                days: 0,
                tcount: 0,
                aid: f.getAid(i),
                otype: 'json',
                platform: 1,
                version: 'film'
              },
              o = '1*' + ve;
              X(s.getUin(), 5, 3, null, o, null, null, 'ticket_trade'),
              j(n)
            }))  : window.HLWSTATE && window.HLWSTATE.clickStat('h5.detail.useticket_layer_cancel')
          }
        })
      }
      function Y() {
        return new v(function (e, t) {
          $.ajax({
            url: b + '/trans/pay.video.qq.com/fcgi-bin/pay?vappid=68106135&vsecret=e667570eb833960cc41051d498df1c233308eb195dba2cc3&otype=json',
            CSRF: !0,
            data: {
              id: ve,
              isneedmovie: 1,
              g_tk: s.getToken()
            },
            dataType: 'jsonp',
            success: function (i) {
              i && i.valid_days ? e(i.valid_days)  : t()
            },
            error: function (e, i, n) {
              t()
            }
          })
        })
      }
      function F() {
        var e = '<div class="bottom_banner"> \t            <div class="bottom"> \t                <div class="left"> \t                    <img src="https://puep.qpic.cn/vupload/0/20180327_1522137639006.png/0" alt="" class="img"> \t                    <div> \t                        <div class="title">腾讯视频·知识频道</div> \t                    </div> \t                </div> \t                <div class="right"> \t                    <a href="javascript:;" class="link" data-type="openqqlive">立即前往</a> \t                </div> \t            </div> \t        </div>';
        $('body').append(e)
      }
      var Q = navigator.userAgent,
      G = Q.indexOf('iPhone') != - 1,
      J = Q.indexOf('iPad') != - 1,
      K = Q.indexOf('Android') != - 1,
      Z = Q.match(/QQ\/([\d.]+)/),
      ee = /mqqbrowser/i.test(Q),
      te = /MicroMessenger/i.test(Q),
      ie = location.href.indexOf('lite=true') > - 1,
      ne = 'wx434fd146a665ff62',
      oe = _.browser.MQQBrowser && 7 == _.browser.version.split('.') [0] && _.browser.version.split('.') [1] >= 3,
      re = 0,
      ae = 0,
      se = 0,
      le = i.pay_status || t.pay_status,
      ce = x[0] && x[0].c_single_price / 100 || 0,
      de = x[0] && x[0].c_vip_price / 100 || 0,
      ue = 0,
      pe = 0,
      fe = 0,
      he = '',
      ve = t.cover_id || '',
      me = i.vid || '',
      ge = '0o3n651vzynmbek' == ve,
      ye = l.getUrlParam('uvip'),
      _e = /qq|txsp/.test(ye),
      we = !1,
      be = l.getUrlParam('pgc');
      if (d.isTenvideo()) {
        var xe = [
          'txvideo://v.qq.com/VideoDetailActivity?cid=',
          ve,
          '&vid=',
          me
        ].join('');
        G && d.getAppVersion() < '5.5.1' ? (xe = [
          'tenvideo2://?action=1&cover_id=',
          ve,
          '&video_id=',
          me
        ].join(''), location.href = xe)  : d.openView(xe, 1)
      }
      var Te = !1,
      ke = function () {
        $(window).scrollTop() >= 55 ? $('.site_player').addClass('site_player_fixed')  : $('.site_player').removeClass('site_player_fixed')
      },
      Se = function () {
        $('.site_player').removeClass('site_player_fixed')
      };
      c.weixinJSBridgeReady(),
      $(document).ready(function () {
        s.init(function () {
          T()
        })
      })
    }
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player/body', function (e, t) {
      'use strict';
      var i = this,
      n = i.$helpers,
      o = i.$escape,
      r = e.pic,
      a = '';
      return a += '<div class="site_player" id="vip_player"> <div class="site_player_inner">  <section class="mod_player none"> <div id="txv_html_mod"> </div> </section>   <div class="mod_player_viptips"> <div class="player_poster"> <img class="poster_pic" src="',
      a += o(n.urlNormalizer(r)),
      a += '"> <span class="poster_mask_a U_mask_a"></span> <span class="poster_mask_b U_mask_b"></span> </div> <div class="player_viptips _tips"> </div> </div>  </div> </div>',
      new String(a)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player/viptips', function (e, t) {
      'use strict';

      //修改一些属性,播放器不会显示那些多余的框
      e.vip = false;
      e.ispay = true;
      e.uvip = true;
      e.disney = false;
      e.limit_time = 0;

      var i = this,
      n = (i.$helpers, e.status),
      o = e.limit_time,
      r = e.ispay,
      a = i.$escape,
      s = e.vip,
      l = e.ticket_num,
      c = e.uvip,
      d = e.isMqq,
      u = e.isIos,
      p = e.disney,
      f = '';
      
      return 9 == n || 10 == n || 11 == n || 12 == n ? f += ' <div class="use_app_tips"> <div class="tips_txt">请使用腾讯视频手机端最新版本<br/>解锁观看本内容~</div> <a class="tips_btn" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"> <span class="txt">打开腾讯视频</span> </a> </div> ' : (f += ' ', o && (f += ' <a class="btn_try" href="javascript:;" _hot="', f += r ? 'h5.detail.limitwatch' : ' h5.detail.trywatch', f += '"> <span class="txt">试看', f += a(o), f += '分钟</span> </a> '), f += ' ', 4 == n ? (f += '  ', r ? (f += ' ', f += o > 0 ? ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"> <span class="txt">打开腾讯视频看完整版</span> </a> ' : ' <a class="btn_play" href="javascript:;" _hot="h5.detail.play"> <div style="height:100%;width:100%;position:absolute;z-index:4"></div> <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_play_lg"></use> </svg> </a> ', f += ' ')  : (f += ' <a class="js_btn_pay btn_pay', 0 == o && (f += ' btn_ct'), f += '" href="javascript:;"', s && l > 0 && (f += ' data-type="use_ticket" _hot="h5.detail.useticket"'), f += '> <span class="txt">', f += s ? '用券看完整版' : '付费看完整版', f += '</span> </a> '), f += ' ')  : 5 == n ? (f += '  ', s || r ? (f += ' ', f += o ? ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"> <span class="txt">打开腾讯视频看完整版</span> </a> ' : ' <a class="btn_play" href="javascript:;" _hot="h5.detail.play"> <div style="height:100%;width:100%;position:absolute;z-index:4"></div> <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_play_lg"></use> </svg> </a> ', f += ' ')  : (f += ' ', c && d && u ? f += ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"> <span class="txt">打开腾讯视频看完整版</span> </a> ' : (f += ' <a class="js_btn_pay btn_pay', 0 == o && (f += ' btn_ct'), f += '" href="javascript:;"> <span class="txt">付费看完整版</span> </a> '), f += ' '), f += ' ')  : 6 == n ? (f += ' ', r ? (f += ' ', f += o ? ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"><span class="txt">打开腾讯视频看完整版</span></a> ' : ' <a class="btn_play" href="javascript:;" _hot="h5.detail.play"> <div style="height:100%;width:100%;position:absolute;z-index:4"></div> <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_play_lg"></use> </svg> </a> ', f += ' ')  : (f += ' <a class="js_btn_pay btn_pay', 0 == o && (f += ' btn_ct'), f += '" href="javascript:;" data-type="', f += c ? 'uvip' : 'openpay', f += '" data-aidsource="2" _hot="h5.detail.', f += c ? 'uvippay' : 'pay', f += '"> <span class="txt">', f += c ? '开通联合会员' : '开通VIP', f += '免费看</span> </a> '), f += ' ')  : 7 == n ? (f += '  ', r ? (f += ' ', f += o ? ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"><span class="txt">打开腾讯视频看完整版</span></a> ' : ' <a class="btn_play" href="javascript:;" _hot="h5.detail.play"> <div style="height:100%;width:100%;position:absolute;z-index:4"></div> <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_play_lg"></use> </svg> </a> ', f += ' ')  : (f += ' <a class="js_btn_pay btn_pay', 0 == o && (f += ' btn_ct'), f += '" href="javascript:;"> <span class="txt">', f += p ? '付费购买' : '付费看完整版', f += '</span> </a> '), f += ' ')  : (f += '  ', o ? (f += ' ', f += 0 == s && c ? ' <a class="js_btn_pay btn_pay" href="javascript:;" data-type="uvip" _hot="h5.detail.uvippay"><span class="txt">开通联合会员抢先看</span></a> ' : ' <a class="btn_open js_openqqlive" href="javascript:;" data-type="openqqlive" _hot="h5.detail.openqqlive"><span class="txt">打开腾讯视频看完整版</span></a> ', f += ' ')  : f += ' <a class="btn_play" href="javascript:;" _hot="h5.detail.play"> <div style="height:100%;width:100%;position:absolute;z-index:4"></div> <svg class="txp_icon txp_icon_play_lg" viewBox="0 0 68 68"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_play_lg"></use> </svg> </a> ', f += ' '), f += ' '),
      f += ' ',
      new String(f)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player/smalltips', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, e.status),
      o = e.ispay,
      r = e.vip,
      a = e.ticket_num,
      s = e.qquvip,
      l = e.disney,
      c = '';
      return 4 == n && 0 == o ? (c += '  <a class="js_btn_pay_small', c += r || a ? ' btn_coupon_small' : ' btn_pay_small', c += '" href="javascript:;" ', a > 0 && (c += 'data-type="use_ticket" _hot="h5.detail.useticket"'), c += '> <span class="txt">', c += r || a ? '用券观看' : '付费观看', c += '</span> </a> ')  : 5 == n && 0 == r && 0 == o ? c += '  <a class="js_btn_pay_small btn_pay_small" href="javascript:;"> <span class="txt">付费观看</span> </a> ' : 6 == n && 0 == o ? (c += '  <a class="js_btn_pay_small btn_pay_small" href="javascript:;" data-type="', c += s ? 'qquvip' : 'openpay', c += '" data-aidsource="36" _hot="h5.detail.', c += s ? 'uvippay' : 'pay', c += '"> <span class="txt">开通', c += s ? '会员' : 'VIP', c += '</span> </a> ')  : 7 == n && 0 == o && (c += '  <a class="js_btn_pay_small btn_pay_small" href="javascript:;"> <span class="txt">', c += l ? '付费购买' : '付费观看', c += '</span> </a> '),
      new String(c)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player/overseaip', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.exinfo,
      r = '';
      return r += '<div class="overseas_strike"> <h2>暂时不对您所在的地区提供服务</h2> <div class="strike_tips">由于版权限制无法播放，望您谅解。您现在在',
      r += n(o || '海外---未知'),
      r += '。</div> <div class="strike_btn">  <a href="javascript:;" class="click_retry">点击重试</a> </div> </div>',
      new String(r)
    })
  },
  function (e, t) {
    var i = {
      logoPath: '//i.gtimg.cn/qqlive/images/20131107/i1383805085_1.jpg',
      appid: '532001604',
      defaultAvtarImg: '//vm.gtimg.cn/mediastyle/tenvideo/img/film/global/default_avatar.png',
      defaultWeiXinImg: '//i.gtimg.cn/qqlive/images/20140801/wx.jpg',
      payPath: '//vm.gtimg.cn/bossweb/h5pay/js/api/mcash.js',
      openid_cookie: 'hlw_wx_openid',
      token_cookie: 'hlw_wx_token',
      nickname_cookie: 'hlw_wx_nickname',
      face_cookie: 'hlw_wx_face',
      bindqq_cookie: 'hlw_wx_bindqq',
      bindtype_cookie: 'hlw_wx_otype',
      oauth_cookie: 'hlw_wx_oauth',
      wxappid: 'wx68ff4e3ba9f84df4',
      baseUrl: '//film.qq.com',
      payCgiBaseUrl: '//pay.video.qq.com/fcgi-bin/',
      graphCgiBaseUrl: '//graph.qq.com/v3/video/',
      bookcgi: '//sns.video.qq.com/fcgi-bin/liveportal/follow?otype=json'
    };
    e.exports = i
  },
  function (e, t, i) {
    function n(e) {
      a.loadScript('js_weixin', '//res.wx.qq.com/open/js/jweixin-1.0.0.js', function () {
        l = window.wx,
        o(function (t) {
          t && (l.ready(function () {
            window.HLW_WeixinJSReady = !0,
            e && e({
              ready: 1
            })
          }), l.error(function () {
            e && e({
              ready: 0
            })
          }), l.config({
            beta: !0,
            debug: !1,
            appId: d,
            timestamp: t.timestamp,
            nonceStr: t.nonceStr,
            signature: t.signature,
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone',
              'hideOptionMenu',
              'showOptionMenu',
              'hideMenuItems',
              'showMenuItems',
              'hideAllNonBaseMenuItem',
              'showAllNonBaseMenuItem',
              'closeWindow',
              'chooseWXPay',
              'launchApplication'
            ]
          }))
        })
      })
    }
    function o(e, t) {
      $.ajax({
        url: '//pay.video.qq.com/fcgi-bin/jssign?otype=json',
        dataType: 'jsonp',
        cache: !1,
        data: {
          url: location.href
        }
      }).done(function (t) {
        t && t.result && 0 === t.result.code ? e && e(t)  : e && e()
      }).fail(function (i, n, r) {
        !t || t < 2 ? (t = t || 0, o(e, t + 1))  : e && e()
      })
    }
    var r = i(111),
    a = i(67),
    s = i(69),
    l = window.wx || {
    },
    c = navigator.userAgent,
    d = 'wx68ff4e3ba9f84df4',
    u = 'wxca942bbff22e0e51',
    p = !1,
    f = [
    ];
    e.exports = {
      weixinReady: function (e) {
        e = e || function () {
        },
        'undefined' == typeof HLW_WeixinJSReady ? (f.push(e), p || (p = !0, n(function () {
          p = !1,
          f.forEach(function (e) {
            e && e()
          }),
          f = [
          ]
        })))  : e && e()
      },
      weixinJSBridgeReady: function (e) {
        e = e || function () {
        },
        'undefined' == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener('WeixinJSBridgeReady', e, !1)  : document.attachEvent && (document.attachEvent('WeixinJSBridgeReady', e), document.attachEvent('onWeixinJSBridgeReady', e))  : e()
      },
      isWeiXin: function () {
        return c.indexOf('MicroMessenger') >= 0
      },
      getCode: function (e, t, i) {
        var n = e || location.href;
        i = i || 1,
        n = n.replace(/[\?&#](code|state|timestamp)=[^&#]+/gi, '').replace('#rd', ''),
        n += n.indexOf('?') != - 1 ? '&timestamp=' + (new Date).valueOf()  : '?timestamp=' + (new Date).valueOf(),
        0 == !!t && (t = '1');
        var o = r.wxappid,
        a = 1 == i ? 'snsapi_base' : 'snsapi_userinfo',
        e = [
          'https://open.weixin.qq.com/connect/oauth2/authorize?appid=',
          o,
          '&redirect_uri=',
          encodeURIComponent(n),
          '&response_type=code&scope=',
          a,
          '&state=',
          t,
          '#wechat_redirect'
        ].join('');
        document.location.href = e
      },
      getAccessToken: function (e, t, i) {
        var n = {
        };
        'string' == typeof e ? n.code = e : (e.code && (n.code = e.code), e.vuser && (n.isgetvuticket = 1));
        var o = {
          openid: '',
          access_token: '',
          refresh_token: ''
        };
        $.ajax({
          url: [
            r.payCgiBaseUrl,
            'wx_getopenid?otype=json'
          ].join(''),
          dataType: 'jsonp',
          cache: !1,
          data: n
        }).done(function (e) {
          e && e.result ? 0 === e.result.code ? (o = {
            openid: e.openid,
            access_token: e.accessToken,
            refresh_token: e.refreshToken
          }, t && t(o))  : i && i(e.result.code)  : i && i( - 404)
        }).fail(function (e, t, n) {
          i && i( - 404)
        })
      },
      getUserInfo: function (e, t, i) {
        var n = {
        };
        'string' == typeof e ? n.code = e : (e.code && (n.code = e.code), e.vuser && (n.isgetvuticket = 1)),
        $.ajax({
          url: [
            r.payCgiBaseUrl,
            'wx_getuserinfo?otype=json'
          ].join(''),
          dataType: 'jsonp',
          cache: !1,
          data: n
        }).done(function (e) {
          e && e.result ? 0 === e.result.code ? t(e.user)  : i(e.result.code)  : i( - 404)
        }).fail(function (e, t, n) {
          i( - 404)
        })
      },
      launchApp: function (e, t) {
        var i = c.match(/MicroMessenger\/([\d\.]+)/i);
        if (i && a.verCompare('6.5.5', i[1]) < 1) return location.href = e,
        !1;
        if (c.indexOf('iPad') !== - 1) try {
          this.weixinJSBridgeReady(function () {
            WeixinJSBridge.invoke('launchApplication', {
              schemeUrl: e
            }, function (e) {
            })
          })
        } catch (n) {
        } else this.weixinReady(function () {
          l.invoke('launchApplication', {
            appID: t ? t : u,
            extInfo: e,
            parameter: e
          }, function (e) {
          })
        })
      },
      getInstallAppState: function (e, t) {
        var i = this;
        return new s(function (n, o) {
          i.weixinJSBridgeReady(function () {
            WeixinJSBridge.invoke('getInstallState', {
              packageName: e,
              packageUrl: t
            }, function (e) {
              var t = e.err_msg;
              t && t.indexOf('get_install_state:yes') > - 1 ? n()  : o()
            })
          })
        })
      }
    }
  },
  function (e, t, i) {
    function n() {
      if (/ QQLiveBrowser\//.test(s)) {
        var e = s.match(/QQLiveBrowser\/([\d.]+)/);
        if (e && e.length > 1) {
          var t = e[1];
          return !!(l && t >= '3.9' || t >= '4.0')
        }
        return !1
      }
      return !1
    }
    function o(e) {
      e = e || function () {
      },
      'undefined' == typeof WebViewJavascriptBridge ? document.addEventListener && document.addEventListener('WebViewJavascriptBridgeReady', function () {
        WebViewJavascriptBridge.init(),
        e()
      }, !1)  : (WebViewJavascriptBridge.init(), e())
    }
    function r(e, t, i) {
      return o(function () {
        WebViewJavascriptBridge.callHandler(e, t, function (e) {
          var t = {
          };
          t = a(e),
          i && i({
            state: 0,
            origdata: e,
            data: t
          })
        })
      }),
      defer
    }
    function a(e) {
      var t = null;
      try {
        t = JSON.parse(e)
      } catch (i) {
        t = null
      }
      return t
    }
    var s = (i(84), navigator.userAgent),
    l = s.indexOf('iPhone') != - 1,
    c = s.indexOf('Android') != - 1,
    d = window.localStorage;
    e.exports = {
      isTenvideo: function () {
        return / QQLiveBrowser\//.test(s)
      },
      tenvideoReady: function (e) {
        e = e || function () {
        },
        'undefined' == typeof TenvideoJSBridge ? document.addEventListener ? document.addEventListener('onTenvideoJSBridgeReady', e, !1)  : document.attachEvent && document.attachEvent('onTenvideoJSBridgeReady', e)  : e()
      },
      openLogin: function (e, t) {
        if (n()) e = e || 'tv',
        this.tenvideoReady(function () {
          TenvideoJSBridge.invoke('actionLogin', {
            type: e
          }, function (e) {
            var i = JSON.parse(e);
            0 == i.errCode ? t && t(i.result)  : t && t()
          })
        });
         else if (c) {
          var i = Android.getCookieValue('skey');
          if (0 == !!i) var o = window.setInterval(function () {
            if (i = Android.getCookieValue('skey')) {
              window.clearInterval(o);
              var e = Android.getCookieValue('uin'),
              n = Android.getCookieValue('lskey');
              i = Android.getCookieValue('skey'),
              t && t({
                state: 0,
                data: {
                  uin: e,
                  skey: i,
                  lskey: n
                }
              })
            }
          }, 500);
           else {
            var a = Android.getCookieValue('uin'),
            s = Android.getCookieValue('lskey');
            i = Android.getCookieValue('skey'),
            t && t({
              state: 0,
              data: {
                uin: a,
                skey: i,
                lskey: s
              }
            })
          }
        } else l && r('logInQQ', null, function (e) {
          t && t(e)
        })
      },
      openView: function (e, t) {
        var i = this;
        return new Promise(function (n) {
          i.tenvideoReady(function () {
            try {
              TenvideoJSBridge.invoke('openView', {
                url: e,
                close: String(t || 0)
              }, function (e) {
                n()
              })
            } catch (i) {
              location.href = e,
              n()
            }
          })
        })
      },
      isAppInstalled: function (e, t) {
        if (s.indexOf('MicroMessenger') >= 0) {
          var i = '',
          n = '';
          l ? (i = 'com.tencent.live4iphone', n = 'tenvideo2://can_open_me_if_install_and_regeister_this_scheme')  : isIPad ? (i = 'com.tencent.QQLiveHD', n = 'tenvideohd://can_open_me_if_install_and_regeister_this_scheme')  : (i = 'com.tencent.qqlive', n = 'tenvideo://can_open_me_if_install_and_regeister_this_scheme'),
          setTimeout(function () {
            WeixinJSBridge.invoke('getInstallState', {
              packageName: i,
              packageUrl: n
            }, function (i) {
              var n = i.err_msg;
              n && n.indexOf('get_install_state:yes') > - 1 ? e && e()  : t && t()
            })
          }, 100)
        } else mqq.device.isMobileQQ(function (i) {
          if (i) {
            var n = '';
            n = l ? 'tenvideo2' : isIPad ? 'tenvideohd' : 'com.tencent.qqlive',
            mqq.app.isAppInstalled(n, function (i) {
              i ? e && e()  : t && t()
            })
          } else e && e()
        })
      },
      getMainUserInfo: function (e, t) {
        this.tenvideoReady(function () {
          TenvideoJSBridge.invoke('getMainUserInfo', null, function (i) {
            var n = JSON.parse(i);
            0 == n.errCode ? e && e(n.result)  : t && t()
          })
        })
      },
      openShare: function () {
        this.tenvideoReady(function () {
          try {
            TenvideoJSBridge.invoke('openToolsDialog', null, function (e) {
              JSON.parse(e)
            })
          } catch (e) {
          }
        })
      },
      openPay: function (e) {
        this.tenvideoReady(function () {
          try {
            TenvideoJSBridge.invoke('openPay', e, function (e) {
              JSON.parse(e)
            })
          } catch (t) {
          }
        })
      },
      getAppInfo: function (e) {
        var t = !1;
        if (d.getItem('app_info')) {
          var i = JSON.parse(d.getItem('app_info'));
          t = !0,
          e && e(i)
        }
        this.tenvideoReady(function () {
          try {
            TenvideoJSBridge.invoke('getAppInfo', null, function (i) {
              var n = JSON.parse(i);
              0 == n.errCode ? (d.setItem('app_info', JSON.stringify(n.result)), !t && e && e(n.result))  : !t && e && e()
            })
          } catch (i) {
          }
        })
      },
      getAppVersion: function () {
        var e = '4.1.0';
        if (this.isTenvideo()) {
          var t = s.indexOf('QQLiveBrowser'),
          i = s.substring(t),
          n = i.split('/');
          if (n.length >= 2) {
            var o = n[1],
            r = o.split('.');
            c ? r.length >= 4 && (e = [
              r[0],
              '.',
              r[1],
              '.',
              r[2]
            ].join(''))  : l && (e = o)
          }
        }
        return e
      },
      switchLogin: function (e, t) {
        this.tenvideoReady(function () {
          try {
            TenvideoJSBridge.invoke('switchLoginState', {
              userType: e
            }, function (e) {
              TenvideoJSBridge.on('onSwitchLoginStateResponse', function (e) {
                l && (e = JSON.parse(e)),
                e && 0 == e.errCode && t && t()
              })
            })
          } catch (i) {
          }
        })
      }
    }
  },
  function (e, t) {
    function i(e) {
      if (0 == $('.g_pop_mask').length && $('body').append('<div class="g_pop_mask none"></div>'), 0 == $('.js_pop').length) {
        var t = [
          '    <div class="g_pop g_pop_qq js_pop" style="display:none;">',
          '        <div class="pop_wrap">',
          '            <div class="pop_title js_pop_title"></div>',
          '            <div class="pop_con">',
          '                <p class="txt js_pop_txt"></p>',
          '            </div>',
          '            <div class="btn_wrap cf">',
          '                <a href="javascript:;" class="btn btn_half js_pop_cancel" style="display:none">取消</a>',
          '                <a href="javascript:;" class="btn btn_em js_pop_ok">确定</a>',
          '            </div>',
          '        </div>',
          '    </div>'
        ].join('');
        $('body').append(t)
      }
      var i = e.title || '温馨提示',
      n = e.text || '',
      o = e.callback,
      r = e.btn_ok_txt || '确定',
      a = e.btn_cancel_txt || '取消',
      s = e.btn_num || 1;
      s > 1 ? ($('.js_pop .js_pop_ok').addClass('btn_half'), $('.js_pop .js_pop_cancel').show())  : ($('.js_pop .js_pop_ok').removeClass('btn_half'), $('.js_pop .js_pop_cancel').hide()),
      $('.js_pop .js_pop_ok').text(r),
      $('.js_pop .js_pop_cancel').text(a),
      $('.g_pop_mask').show(),
      $('.js_pop').show(),
      $('.js_pop_title').html(i),
      $('.js_pop_txt').html(n),
      $('.js_pop .js_pop_ok').unbind('click'),
      $('.js_pop .js_pop_ok').on('click', function (e) {
        return $('.g_pop_mask').hide(),
        $('.js_pop').hide(),
        o && o(!0),
        !1
      }),
      $('.js_pop .js_pop_cancel').unbind('click'),
      $('.js_pop .js_pop_cancel').on('click', function (e) {
        return $('.g_pop_mask').hide(),
        $('.js_pop').hide(),
        o && o(!1),
        !1
      })
    }
    function n(e) {
      0 == $('.g_pop_mask').length && $('body').append('<div class="g_pop_mask none"></div>');
      var t = e || '加载中...';
      if (0 == $('.g_pop_loading').length) {
        var i = [
          '<div class="g_pop g_pop_loading none">',
          '    <div class="pop_wrap">',
          '        <div class="pop_con">',
          '            <i class="icon_loading"></i>',
          '            <p class="txt">',
          t,
          '</p>',
          '        </div>',
          '    </div>',
          '</div>  '
        ].join('');
        $('body').append(i)
      }
      $('.g_pop_mask').show(),
      $('.g_pop_loading').show()
    }
    e.exports = {
      dialog: function (e) {
        i(e)
      },
      loading: function (e) {
        e ? n(e)  : ($('.g_pop_mask').hide(), $('.g_pop_loading').hide())
      }
    }
  },
  function (e, t, i) {
    var n = (i(9), i(116), i(117)),
    o = i(118),
    r = i(84);
    e.exports = function (e, t, i, a) {
      function s(e) {
        var t = e.vid,
        i = l(t);
        if (f != t) {
          var n = $('#vip_prevue_' + t);
          if (m) try {
            m.pause()
          } catch (o) {
          }
          if (h[i].playerObj) m = h[i].playerObj,
          m.play();
           else {
            var r = {
              width: '100%',
              height: '100%',
              vid: t,
              containerId: 'vip_prevue_' + t,
              poster: e.pic,
              autoplay: !0
            };
            n.css({
              position: 'absolute',
              width: '100%',
              height: '100%'
            }),
            m = new Txplayer(r),
            m.on('playStateChange', function (e) {
              if (0 === e) {
                var i = l(t);
                if (h[i + 1]) {
                  var n = h[i + 1].offsetTop;
                  I.scrollTo(0, - Math.abs(n), 500)
                }
              }
            }),
            h[i].playerObj = m
          }
          f = t,
          n.parents('li').addClass('current'),
          n.parents('li').find('.mod_player_poster').hide(),
          n.find('[data-role=\'tvp_replay_btn\']').css('display', 'none')
        }
      }
      function l(e) {
        var t = null;
        for (var i in h) {
          var n = h[i];
          if (e == n.vid) {
            t = parseInt(i);
            break
          }
        }
        return t
      }
      function c() {
        if (g !== !0) {
          for (var e in h) {
            var t = h[e];
            t.offsetTop = d(t.vid)
          }
          var i = $('.ly_item').height(),
          n = $(window).height(),
          o = (n - i) / 2;
          $('.ly_list').css({
            'padding-top': o,
            'padding-bottom': o
          }),
          g = !0
        }
      }
      function d(e) {
        var t = $('#vip_prevue_' + e),
        i = 0;
        return t.length > 0 && (i = t[0].getBoundingClientRect().top),
        i
      }
      function u() {
        I = new o('#player_list_wrap', {
          click: !0
        }),
        I.on('scrollEnd', function () {
          for (var e = $('#player_list_wrap').find('li'), t = 0, i = 0, n = e.length; i < n; i++) {
            var o = e[i].getBoundingClientRect(),
            r = o.top,
            a = $(e[i]),
            c = a.attr('_id');
            r > 0 ? 0 == t ? (t = r, curId = c, a.addClass('current'), a.find('.mod_player_poster').hide())  : r < t ? (t = r, curId = c, a.addClass('current'), a.find('.mod_player_poster').hide())  : (a.removeClass('current'), a.find('.mod_player_poster').show())  : (a.removeClass('current'), a.find('.mod_player_poster').show())
          }
          var d = l(curId);
          s(h[d])
        })
      }
      function p() {
        if (window.VIP_MAIN_PLAYER) try {
          window.VIP_MAIN_PLAYER.pause()
        } catch (e) {
        }
      }
      var f,
      h = {
      },
      v = 0,
      m = null,
      g = !1;
      if (i) {
        var y = i.vecVideoInfo || [
        ];
        if (y.length > 0) for (var _ = 0, w = y.length; _ < w; _++) {
          var b = y[_];
          h[_] = {
            vid: b.stVideoInfo.strVid,
            pic: b.stVideoInfo.strImageUrl
          }
        }
        v += y.length
      }
      if (a) {
        var x = 0;
        for (var T in a) {
          var k = a[T];
          h[v + x] = {
            vid: k.vid,
            pic: k.pic160x90,
            title: k.title
          },
          x++
        }
        v += x
      }
      if (v > 0) {
        var S = $('#player_list');
        for (var E in h) {
          var C = h[E];
          S.append(n({
            vid: C.vid,
            index: E,
            pic: r(C.pic),
            title: C.title
          }))
        }
        var P = $('#vip_prevue'),
        q = $('#vip_movie_clips'),
        I = null;
        P.on('click', 'a', function (t) {
          p(),
          e.removeClass('none'),
          c();
          var i = $(this).attr('_id'),
          n = l(i),
          o = h[n];
          if (null !== n) {
            null === I && u();
            var r = o.offsetTop;
            I.scrollTo(0, - Math.abs(r)),
            s(o)
          }
          t.preventDefault()
        }),
        q.on('click', 'a', function (t) {
          p(),
          e.removeClass('none'),
          c();
          var i = $(this).attr('_id'),
          n = l(i),
          o = h[n];
          if (null !== n) {
            null === I && u();
            var r = o.offsetTop;
            I.scrollTo(0, - Math.abs(r)),
            s(o)
          }
          t.preventDefault()
        }),
        $('#close_player').click(function () {
          e.addClass('none'),
          m && m.pause()
        })
      }
    }
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player_list/body', ' <a class="ly_close" id="close_player" title="关闭"></a> <ul class="ly_list cf" id="player_list"> </ul>')
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/vip/player_list/item', function (e, t) {
      'use strict';
      var i = this,
      n = (i.$helpers, i.$escape),
      o = e.vid,
      r = e.index,
      a = e.pic,
      s = e.title,
      l = '';
      return l += '<li class="ly_item" _id=',
      l += n(o),
      l += ' _playerindex=',
      l += n(r),
      l += '>  <div class="item_bd"> <section class="mod_player"> <div id="vip_prevue_',
      l += n(o),
      l += '" style="visibility:visible;"> </div> <div class="mod_player_poster "> <img class="poster_img" src="',
      l += n(a),
      l += '"> </div> </section> </div> <div class="item_hd"> <div class="tit">',
      l += n(s),
      l += '</div> </div> <div class="item_mask"></div>  </li>',
      new String(l)
    })
  },
  function (e, t, i) {
    var n;
    !function (o, r, a) {
      function s(e, t) {
        this.wrapper = 'string' == typeof e ? r.querySelector(e)  : e,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
          resizeScrollbars: !0,
          mouseWheelSpeed: 20,
          snapThreshold: 0.334,
          disablePointer: !u.hasPointer,
          disableTouch: u.hasPointer || !u.hasTouch,
          disableMouse: u.hasPointer || u.hasTouch,
          startX: 0,
          startY: 0,
          scrollY: !0,
          directionLockThreshold: 5,
          momentum: !0,
          bounce: !0,
          bounceTime: 600,
          bounceEasing: '',
          preventDefault: !0,
          preventDefaultException: {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
          },
          HWCompositing: !0,
          useTransition: !0,
          useTransform: !0,
          bindToWrapper: 'undefined' == typeof o.onmousedown
        };
        for (var i in t) this.options[i] = t[i];
        this.translateZ = this.options.HWCompositing && u.hasPerspective ? ' translateZ(0)' : '',
        this.options.useTransition = u.hasTransition && this.options.useTransition,
        this.options.useTransform = u.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? 'vertical' : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = 'vertical' != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = 'horizontal' != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = 'string' == typeof this.options.bounceEasing ? u.ease[this.options.bounceEasing] || u.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = 'tap'),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = 'relative'),
        'scale' == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? - 1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {
        },
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
      }
      function l(e, t, i) {
        var n = r.createElement('div'),
        o = r.createElement('div');
        return i === !0 && (n.style.cssText = 'position:absolute;z-index:9999', o.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'),
        o.className = 'iScrollIndicator',
        'h' == e ? (i === !0 && (n.style.cssText += ';height:7px;left:2px;right:2px;bottom:0', o.style.height = '100%'), n.className = 'iScrollHorizontalScrollbar')  : (i === !0 && (n.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px', o.style.width = '100%'), n.className = 'iScrollVerticalScrollbar'),
        n.style.cssText += ';overflow:hidden',
        t || (n.style.pointerEvents = 'none'),
        n.appendChild(o),
        n
      }
      function c(e, t) {
        this.wrapper = 'string' == typeof t.el ? r.querySelector(t.el)  : t.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = e,
        this.options = {
          listenX: !0,
          listenY: !0,
          interactive: !1,
          resize: !0,
          defaultScrollbars: !1,
          shrink: !1,
          fade: !1,
          speedRatioX: 0,
          speedRatioY: 0
        };
        for (var i in t) this.options[i] = t[i];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (u.addEvent(this.indicator, 'touchstart', this), u.addEvent(o, 'touchend', this)), this.options.disablePointer || (u.addEvent(this.indicator, u.prefixPointerEvent('pointerdown'), this), u.addEvent(o, u.prefixPointerEvent('pointerup'), this)), this.options.disableMouse || (u.addEvent(this.indicator, 'mousedown', this), u.addEvent(o, 'mouseup', this))), this.options.fade) {
          this.wrapperStyle[u.style.transform] = this.scroller.translateZ;
          var n = u.style.transitionDuration;
          if (!n) return;
          this.wrapperStyle[n] = u.isBadAndroid ? '0.0001ms' : '0ms';
          var a = this;
          u.isBadAndroid && d(function () {
            '0.0001ms' === a.wrapperStyle[n] && (a.wrapperStyle[n] = '0s')
          }),
          this.wrapperStyle.opacity = '0'
        }
      }
      var d = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function (e) {
        o.setTimeout(e, 1000 / 60)
      },
      u = function () {
        function e(e) {
          return n !== !1 && ('' === n ? e : n + e.charAt(0).toUpperCase() + e.substr(1))
        }
        var t = {
        },
        i = r.createElement('div').style,
        n = function () {
          for (var e, t = [
            't',
            'webkitT',
            'MozT',
            'msT',
            'OT'
          ], n = 0, o = t.length; n < o; n++) if (e = t[n] + 'ransform', e in i) return t[n].substr(0, t[n].length - 1);
          return !1
        }();
        t.getTime = Date.now || function () {
          return (new Date).getTime()
        },
        t.extend = function (e, t) {
          for (var i in t) e[i] = t[i]
        },
        t.addEvent = function (e, t, i, n) {
          e.addEventListener(t, i, !!n)
        },
        t.removeEvent = function (e, t, i, n) {
          e.removeEventListener(t, i, !!n)
        },
        t.prefixPointerEvent = function (e) {
          return o.MSPointerEvent ? 'MSPointer' + e.charAt(7).toUpperCase() + e.substr(8)  : e
        },
        t.momentum = function (e, t, i, n, o, r) {
          var s,
          l,
          c = e - t,
          d = a.abs(c) / i;
          return r = void 0 === r ? 0.0006 : r,
          s = e + d * d / (2 * r) * (c < 0 ? - 1 : 1),
          l = d / r,
          s < n ? (s = o ? n - o / 2.5 * (d / 8)  : n, c = a.abs(s - e), l = c / d)  : s > 0 && (s = o ? o / 2.5 * (d / 8)  : 0, c = a.abs(e) + s, l = c / d),
          {
            destination: a.round(s),
            duration: l
          }
        };
        var s = e('transform');
        return t.extend(t, {
          hasTransform: s !== !1,
          hasPerspective: e('perspective') in i,
          hasTouch: 'ontouchstart' in o,
          hasPointer: !(!o.PointerEvent && !o.MSPointerEvent),
          hasTransition: e('transition') in i
        }),
        t.isBadAndroid = function () {
          var e = o.navigator.appVersion;
          if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
            var t = e.match(/Safari\/(\d+.\d)/);
            return !(t && 'object' === ('undefined' == typeof t ? 'undefined' : _typeof2(t)) && t.length >= 2) || parseFloat(t[1]) < 535.19
          }
          return !1
        }(),
        t.extend(t.style = {
        }, {
          transform: s,
          transitionTimingFunction: e('transitionTimingFunction'),
          transitionDuration: e('transitionDuration'),
          transitionDelay: e('transitionDelay'),
          transformOrigin: e('transformOrigin'),
          touchAction: e('touchAction')
        }),
        t.hasClass = function (e, t) {
          var i = new RegExp('(^|\\s)' + t + '(\\s|$)');
          return i.test(e.className)
        },
        t.addClass = function (e, i) {
          if (!t.hasClass(e, i)) {
            var n = e.className.split(' ');
            n.push(i),
            e.className = n.join(' ')
          }
        },
        t.removeClass = function (e, i) {
          if (t.hasClass(e, i)) {
            var n = new RegExp('(^|\\s)' + i + '(\\s|$)', 'g');
            e.className = e.className.replace(n, ' ')
          }
        },
        t.offset = function (e) {
          for (var t = - e.offsetLeft, i = - e.offsetTop; e = e.offsetParent; ) t -= e.offsetLeft,
          i -= e.offsetTop;
          return {
            left: t,
            top: i
          }
        },
        t.preventDefaultException = function (e, t) {
          for (var i in t) if (t[i].test(e[i])) return !0;
          return !1
        },
        t.extend(t.eventType = {
        }, {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3
        }),
        t.extend(t.ease = {
        }, {
          quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (e) {
              return e * (2 - e)
            }
          },
          circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
            fn: function (e) {
              return a.sqrt(1 - --e * e)
            }
          },
          back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function (e) {
              var t = 4;
              return (e -= 1) * e * ((t + 1) * e + t) + 1
            }
          },
          bounce: {
            style: '',
            fn: function (e) {
              return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
            }
          },
          elastic: {
            style: '',
            fn: function (e) {
              var t = 0.22,
              i = 0.4;
              return 0 === e ? 0 : 1 == e ? 1 : i * a.pow(2, - 10 * e) * a.sin((e - t / 4) * (2 * a.PI) / t) + 1
            }
          }
        }),
        t.tap = function (e, t) {
          var i = r.createEvent('Event');
          i.initEvent(t, !0, !0),
          i.pageX = e.pageX,
          i.pageY = e.pageY,
          e.target.dispatchEvent(i)
        },
        t.click = function (e) {
          var t,
          i = e.target;
          /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (t = r.createEvent(o.MouseEvent ? 'MouseEvents' : 'Event'), t.initEvent('click', !0, !0), t.view = e.view || o, t.detail = 1, t.screenX = i.screenX || 0, t.screenY = i.screenY || 0, t.clientX = i.clientX || 0, t.clientY = i.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, i.dispatchEvent(t))
        },
        t.getTouchAction = function (e, t) {
          var i = 'none';
          return 'vertical' === e ? i = 'pan-y' : 'horizontal' === e && (i = 'pan-x'),
          t && 'none' != i && (i += ' pinch-zoom'),
          i
        },
        t.getRect = function (e) {
          if (e instanceof SVGElement) {
            var t = e.getBoundingClientRect();
            return {
              top: t.top,
              left: t.left,
              width: t.width,
              height: t.height
            }
          }
          return {
            top: e.offsetTop,
            left: e.offsetLeft,
            width: e.offsetWidth,
            height: e.offsetHeight
          }
        },
        t
      }();
      s.prototype = {
        version: '5.2.0-snapshot',
        _init: function () {
          this._initEvents(),
          (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
          this.options.mouseWheel && this._initWheel(),
          this.options.snap && this._initSnap(),
          this.options.keyBindings && this._initKeys()
        },
        destroy: function () {
          this._initEvents(!0),
          clearTimeout(this.resizeTimeout),
          this.resizeTimeout = null,
          this._execEvent('destroy')
        },
        _transitionEnd: function (e) {
          e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent('scrollEnd')))
        },
        _start: function (e) {
          if (1 != u.eventType[e.type]) {
            var t;
            if (t = e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2, 0 !== t) return
          }
          if (this.enabled && (!this.initiated || u.eventType[e.type] === this.initiated)) {
            !this.options.preventDefault || u.isBadAndroid || u.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
            var i,
            n = e.touches ? e.touches[0] : e;
            this.initiated = u.eventType[e.type],
            this.moved = !1,
            this.distX = 0,
            this.distY = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.directionLocked = 0,
            this.startTime = u.getTime(),
            this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(a.round(i.x), a.round(i.y)), this._execEvent('scrollEnd'))  : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent('scrollEnd')),
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = n.pageX,
            this.pointY = n.pageY,
            this._execEvent('beforeScrollStart')
          }
        },
        _move: function (e) {
          if (this.enabled && u.eventType[e.type] === this.initiated) {
            this.options.preventDefault && e.preventDefault();
            var t,
            i,
            n,
            o,
            r = e.touches ? e.touches[0] : e,
            s = r.pageX - this.pointX,
            l = r.pageY - this.pointY,
            c = u.getTime();
            if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += s, this.distY += l, n = a.abs(this.distX), o = a.abs(this.distY), !(c - this.endTime > 300 && n < 10 && o < 10)) {
              if (this.directionLocked || this.options.freeScroll || (n > o + this.options.directionLockThreshold ? this.directionLocked = 'h' : o >= n + this.options.directionLockThreshold ? this.directionLocked = 'v' : this.directionLocked = 'n'), 'h' == this.directionLocked) {
                if ('vertical' == this.options.eventPassthrough) e.preventDefault();
                 else if ('horizontal' == this.options.eventPassthrough) return void (this.initiated = !1);
                l = 0
              } else if ('v' == this.directionLocked) {
                if ('horizontal' == this.options.eventPassthrough) e.preventDefault();
                 else if ('vertical' == this.options.eventPassthrough) return void (this.initiated = !1);
                s = 0
              }
              s = this.hasHorizontalScroll ? s : 0,
              l = this.hasVerticalScroll ? l : 0,
              t = this.x + s,
              i = this.y + l,
              (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + s / 3 : t > 0 ? 0 : this.maxScrollX),
              (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY),
              this.directionX = s > 0 ? - 1 : s < 0 ? 1 : 0,
              this.directionY = l > 0 ? - 1 : l < 0 ? 1 : 0,
              this.moved || this._execEvent('scrollStart'),
              this.moved = !0,
              this._translate(t, i),
              c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
            }
          }
        },
        _end: function (e) {
          if (this.enabled && u.eventType[e.type] === this.initiated) {
            this.options.preventDefault && !u.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t,
            i,
            n = (e.changedTouches ? e.changedTouches[0] : e, u.getTime() - this.startTime),
            o = a.round(this.x),
            r = a.round(this.y),
            s = a.abs(o - this.startX),
            l = a.abs(r - this.startY),
            c = 0,
            d = '';
            if (this.isInTransition = 0, this.initiated = 0, this.endTime = u.getTime(), !this.resetPosition(this.options.bounceTime)) {
              if (this.scrollTo(o, r), !this.moved) return this.options.tap && u.tap(e, this.options.tap),
              this.options.click && u.click(e),
              void this._execEvent('scrollCancel');
              if (this._events.flick && n < 200 && s < 100 && l < 100) return void this._execEvent('flick');
              if (this.options.momentum && n < 300 && (t = this.hasHorizontalScroll ? u.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration)  : {
                destination: o,
                duration: 0
              }, i = this.hasVerticalScroll ? u.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration)  : {
                destination: r,
                duration: 0
              }, o = t.destination, r = i.destination, c = a.max(t.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                var p = this._nearestSnap(o, r);
                this.currentPage = p,
                c = this.options.snapSpeed || a.max(a.max(a.min(a.abs(o - p.x), 1000), a.min(a.abs(r - p.y), 1000)), 300),
                o = p.x,
                r = p.y,
                this.directionX = 0,
                this.directionY = 0,
                d = this.options.bounceEasing
              }
              return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (d = u.ease.quadratic), void this.scrollTo(o, r, c, d))  : void this._execEvent('scrollEnd')
            }
          }
        },
        _resize: function () {
          var e = this;
          clearTimeout(this.resizeTimeout),
          this.resizeTimeout = setTimeout(function () {
            e.refresh()
          }, this.options.resizePolling)
        },
        resetPosition: function (e) {
          var t = this.x,
          i = this.y;
          return e = e || 0,
          !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX),
          !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
          (t != this.x || i != this.y) && (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
        },
        disable: function () {
          this.enabled = !1
        },
        enable: function () {
          this.enabled = !0
        },
        refresh: function () {
          u.getRect(this.wrapper),
          this.wrapperWidth = this.wrapper.clientWidth,
          this.wrapperHeight = this.wrapper.clientHeight;
          var e = u.getRect(this.scroller);
          this.scrollerWidth = e.width,
          this.scrollerHeight = e.height,
          this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
          this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
          this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
          this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
          this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
          this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
          this.endTime = 0,
          this.directionX = 0,
          this.directionY = 0,
          u.hasPointer && !this.options.disablePointer && (this.wrapper.style[u.style.touchAction] = u.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[u.style.touchAction] || (this.wrapper.style[u.style.touchAction] = u.getTouchAction(this.options.eventPassthrough, !1))),
          this.wrapperOffset = u.offset(this.wrapper),
          this._execEvent('refresh'),
          this.resetPosition()
        },
        on: function (e, t) {
          this._events[e] || (this._events[e] = [
          ]),
          this._events[e].push(t)
        },
        off: function (e, t) {
          if (this._events[e]) {
            var i = this._events[e].indexOf(t);
            i > - 1 && this._events[e].splice(i, 1)
          }
        },
        _execEvent: function (e) {
          if (this._events[e]) {
            var t = 0,
            i = this._events[e].length;
            if (i) for (; t < i; t++) this._events[e][t].apply(this, [
            ].slice.call(arguments, 1))
          }
        },
        scrollBy: function (e, t, i, n) {
          e = this.x + e,
          t = this.y + t,
          i = i || 0,
          this.scrollTo(e, t, i, n)
        },
        scrollTo: function (e, t, i, n) {
          n = n || u.ease.circular,
          this.isInTransition = this.options.useTransition && i > 0;
          var o = this.options.useTransition && n.style;
          !i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(e, t))  : this._animate(e, t, i, n.fn)
        },
        scrollToElement: function (e, t, i, n, o) {
          if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
            var r = u.offset(e);
            r.left -= this.wrapperOffset.left,
            r.top -= this.wrapperOffset.top;
            var s = u.getRect(e),
            l = u.getRect(this.wrapper);
            i === !0 && (i = a.round(s.width / 2 - l.width / 2)),
            n === !0 && (n = a.round(s.height / 2 - l.height / 2)),
            r.left -= i || 0,
            r.top -= n || 0,
            r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left,
            r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top,
            t = void 0 === t || null === t || 'auto' === t ? a.max(a.abs(this.x - r.left), a.abs(this.y - r.top))  : t,
            this.scrollTo(r.left, r.top, t, o)
          }
        },
        _transitionTime: function (e) {
          if (this.options.useTransition) {
            e = e || 0;
            var t = u.style.transitionDuration;
            if (t) {
              if (this.scrollerStyle[t] = e + 'ms', !e && u.isBadAndroid) {
                this.scrollerStyle[t] = '0.0001ms';
                var i = this;
                d(function () {
                  '0.0001ms' === i.scrollerStyle[t] && (i.scrollerStyle[t] = '0s')
                })
              }
              if (this.indicators) for (var n = this.indicators.length; n--; ) this.indicators[n].transitionTime(e)
            }
          }
        },
        _transitionTimingFunction: function (e) {
          if (this.scrollerStyle[u.style.transitionTimingFunction] = e, this.indicators) for (var t = this.indicators.length; t--; ) this.indicators[t].transitionTimingFunction(e)
        },
        _translate: function (e, t) {
          if (this.options.useTransform ? this.scrollerStyle[u.style.transform] = 'translate(' + e + 'px,' + t + 'px)' + this.translateZ : (e = a.round(e), t = a.round(t), this.scrollerStyle.left = e + 'px', this.scrollerStyle.top = t + 'px'), this.x = e, this.y = t, this.indicators) for (var i = this.indicators.length; i--; ) this.indicators[i].updatePosition()
        },
        _initEvents: function (e) {
          var t = e ? u.removeEvent : u.addEvent,
          i = this.options.bindToWrapper ? this.wrapper : o;
          t(o, 'orientationchange', this),
          t(o, 'resize', this),
          this.options.click && t(this.wrapper, 'click', this, !0),
          this.options.disableMouse || (t(this.wrapper, 'mousedown', this), t(i, 'mousemove', this), t(i, 'mousecancel', this), t(i, 'mouseup', this)),
          u.hasPointer && !this.options.disablePointer && (t(this.wrapper, u.prefixPointerEvent('pointerdown'), this), t(i, u.prefixPointerEvent('pointermove'), this), t(i, u.prefixPointerEvent('pointercancel'), this), t(i, u.prefixPointerEvent('pointerup'), this)),
          u.hasTouch && !this.options.disableTouch && (t(this.wrapper, 'touchstart', this), t(i, 'touchmove', this), t(i, 'touchcancel', this), t(i, 'touchend', this)),
          t(this.scroller, 'transitionend', this),
          t(this.scroller, 'webkitTransitionEnd', this),
          t(this.scroller, 'oTransitionEnd', this),
          t(this.scroller, 'MSTransitionEnd', this)
        },
        getComputedPosition: function () {
          var e,
          t,
          i = o.getComputedStyle(this.scroller, null);
          return this.options.useTransform ? (i = i[u.style.transform].split(')') [0].split(', '), e = + (i[12] || i[4]), t = + (i[13] || i[5]))  : (e = + i.left.replace(/[^-\d.]/g, ''), t = + i.top.replace(/[^-\d.]/g, '')),
          {
            x: e,
            y: t
          }
        },
        _initIndicators: function () {
          function e(e) {
            if (r.indicators) for (var t = r.indicators.length; t--; ) e.call(r.indicators[t])
          }
          var t,
          i = this.options.interactiveScrollbars,
          n = 'string' != typeof this.options.scrollbars,
          o = [
          ],
          r = this;
          this.indicators = [
          ],
          this.options.scrollbars && (this.options.scrollY && (t = {
            el: l('v', i, this.options.scrollbars),
            interactive: i,
            defaultScrollbars: !0,
            customStyle: n,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenX: !1
          }, this.wrapper.appendChild(t.el), o.push(t)), this.options.scrollX && (t = {
            el: l('h', i, this.options.scrollbars),
            interactive: i,
            defaultScrollbars: !0,
            customStyle: n,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenY: !1
          }, this.wrapper.appendChild(t.el), o.push(t))),
          this.options.indicators && (o = o.concat(this.options.indicators));
          for (var a = o.length; a--; ) this.indicators.push(new c(this, o[a]));
          this.options.fadeScrollbars && (this.on('scrollEnd', function () {
            e(function () {
              this.fade()
            })
          }), this.on('scrollCancel', function () {
            e(function () {
              this.fade()
            })
          }), this.on('scrollStart', function () {
            e(function () {
              this.fade(1)
            })
          }), this.on('beforeScrollStart', function () {
            e(function () {
              this.fade(1, !0)
            })
          })),
          this.on('refresh', function () {
            e(function () {
              this.refresh()
            })
          }),
          this.on('destroy', function () {
            e(function () {
              this.destroy()
            }),
            delete this.indicators
          })
        },
        _initWheel: function () {
          u.addEvent(this.wrapper, 'wheel', this),
          u.addEvent(this.wrapper, 'mousewheel', this),
          u.addEvent(this.wrapper, 'DOMMouseScroll', this),
          this.on('destroy', function () {
            clearTimeout(this.wheelTimeout),
            this.wheelTimeout = null,
            u.removeEvent(this.wrapper, 'wheel', this),
            u.removeEvent(this.wrapper, 'mousewheel', this),
            u.removeEvent(this.wrapper, 'DOMMouseScroll', this)
          })
        },
        _wheel: function (e) {
          if (this.enabled) {
            e.preventDefault();
            var t,
            i,
            n,
            o,
            r = this;
            if (void 0 === this.wheelTimeout && r._execEvent('scrollStart'), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
              r.options.snap || r._execEvent('scrollEnd'),
              r.wheelTimeout = void 0
            }, 400), 'deltaX' in e) 1 === e.deltaMode ? (t = - e.deltaX * this.options.mouseWheelSpeed, i = - e.deltaY * this.options.mouseWheelSpeed)  : (t = - e.deltaX, i = - e.deltaY);
             else if ('wheelDeltaX' in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
            i = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
             else if ('wheelDelta' in e) t = i = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
             else {
              if (!('detail' in e)) return;
              t = i = - e.detail / 3 * this.options.mouseWheelSpeed
            }
            if (t *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = i, i = 0), this.options.snap) return n = this.currentPage.pageX,
            o = this.currentPage.pageY,
            t > 0 ? n-- : t < 0 && n++,
            i > 0 ? o-- : i < 0 && o++,
            void this.goToPage(n, o);
            n = this.x + a.round(this.hasHorizontalScroll ? t : 0),
            o = this.y + a.round(this.hasVerticalScroll ? i : 0),
            this.directionX = t > 0 ? - 1 : t < 0 ? 1 : 0,
            this.directionY = i > 0 ? - 1 : i < 0 ? 1 : 0,
            n > 0 ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX),
            o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY),
            this.scrollTo(n, o, 0)
          }
        },
        _initSnap: function () {
          this.currentPage = {
          },
          'string' == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
          this.on('refresh', function () {
            var e,
            t,
            i,
            n,
            o,
            r,
            s,
            l = 0,
            c = 0,
            d = 0,
            p = this.options.snapStepX || this.wrapperWidth,
            f = this.options.snapStepY || this.wrapperHeight;
            if (this.pages = [
            ], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
              if (this.options.snap === !0) for (i = a.round(p / 2), n = a.round(f / 2); d > - this.scrollerWidth; ) {
                for (this.pages[l] = [
                ], e = 0, o = 0; o > - this.scrollerHeight; ) this.pages[l][e] = {
                  x: a.max(d, this.maxScrollX),
                  y: a.max(o, this.maxScrollY),
                  width: p,
                  height: f,
                  cx: d - i,
                  cy: o - n
                },
                o -= f,
                e++;
                d -= p,
                l++
              } else for (r = this.options.snap, e = r.length, t = - 1; l < e; l++) s = u.getRect(r[l]),
              (0 === l || s.left <= u.getRect(r[l - 1]).left) && (c = 0, t++),
              this.pages[c] || (this.pages[c] = [
              ]),
              d = a.max( - s.left, this.maxScrollX),
              o = a.max( - s.top, this.maxScrollY),
              i = d - a.round(s.width / 2),
              n = o - a.round(s.height / 2),
              this.pages[c][t] = {
                x: d,
                y: o,
                width: s.width,
                height: s.height,
                cx: i,
                cy: n
              },
              d > this.maxScrollX && c++;
              this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
              this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold)  : (this.snapThresholdX = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = a.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }
          }),
          this.on('flick', function () {
            var e = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.x - this.startX), 1000), a.min(a.abs(this.y - this.startY), 1000)), 300);
            this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
          })
        },
        _nearestSnap: function (e, t) {
          if (!this.pages.length) return {
            x: 0,
            y: 0,
            pageX: 0,
            pageY: 0
          };
          var i = 0,
          n = this.pages.length,
          o = 0;
          if (a.abs(e - this.absStartX) < this.snapThresholdX && a.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
          for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); i < n; i++) if (e >= this.pages[i][0].cx) {
            e = this.pages[i][0].x;
            break
          }
          for (n = this.pages[i].length; o < n; o++) if (t >= this.pages[0][o].cy) {
            t = this.pages[0][o].y;
            break
          }
          return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), e = this.pages[i][0].x),
          o == this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), t = this.pages[0][o].y),
          {
            x: e,
            y: t,
            pageX: i,
            pageY: o
          }
        },
        goToPage: function (e, t, i, n) {
          n = n || this.options.bounceEasing,
          e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0),
          t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
          var o = this.pages[e][t].x,
          r = this.pages[e][t].y;
          i = void 0 === i ? this.options.snapSpeed || a.max(a.max(a.min(a.abs(o - this.x), 1000), a.min(a.abs(r - this.y), 1000)), 300)  : i,
          this.currentPage = {
            x: o,
            y: r,
            pageX: e,
            pageY: t
          },
          this.scrollTo(o, r, i, n)
        },
        next: function (e, t) {
          var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
          i++,
          i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++),
          this.goToPage(i, n, e, t)
        },
        prev: function (e, t) {
          var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
          i--,
          i < 0 && this.hasVerticalScroll && (i = 0, n--),
          this.goToPage(i, n, e, t)
        },
        _initKeys: function (e) {
          var t,
          i = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
          };
          if ('object' == _typeof2(this.options.keyBindings)) for (t in this.options.keyBindings) 'string' == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
           else this.options.keyBindings = {
          };
          for (t in i) this.options.keyBindings[t] = this.options.keyBindings[t] || i[t];
          u.addEvent(o, 'keydown', this),
          this.on('destroy', function () {
            u.removeEvent(o, 'keydown', this)
          })
        },
        _key: function (e) {
          if (this.enabled) {
            var t,
            i = this.options.snap,
            n = i ? this.currentPage.pageX : this.x,
            o = i ? this.currentPage.pageY : this.y,
            r = u.getTime(),
            s = this.keyTime || 0,
            l = 0.25;
            switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(a.round(t.x), a.round(t.y)), this.isInTransition = !1), this.keyAcceleration = r - s < 200 ? a.min(this.keyAcceleration + l, 50)  : 0, e.keyCode) {
              case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : o += i ? 1 : this.wrapperHeight;
                break;
              case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : o -= i ? 1 : this.wrapperHeight;
                break;
              case this.options.keyBindings.end:
                n = i ? this.pages.length - 1 : this.maxScrollX,
                o = i ? this.pages[0].length - 1 : this.maxScrollY;
                break;
              case this.options.keyBindings.home:
                n = 0,
                o = 0;
                break;
              case this.options.keyBindings.left:
                n += i ? - 1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.up:
                o += i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.right:
                n -= i ? - 1 : 5 + this.keyAcceleration >> 0;
                break;
              case this.options.keyBindings.down:
                o -= i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
              default:
                return
            }
            if (i) return void this.goToPage(n, o);
            n > 0 ? (n = 0, this.keyAcceleration = 0)  : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0),
            o > 0 ? (o = 0, this.keyAcceleration = 0)  : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0),
            this.scrollTo(n, o, 0),
            this.keyTime = r
          }
        },
        _animate: function (e, t, i, n) {
          function o() {
            var p,
            f,
            h,
            v = u.getTime();
            return v >= c ? (r.isAnimating = !1, r._translate(e, t), void (r.resetPosition(r.options.bounceTime) || r._execEvent('scrollEnd')))  : (v = (v - l) / i, h = n(v), p = (e - a) * h + a, f = (t - s) * h + s, r._translate(p, f), void (r.isAnimating && d(o)))
          }
          var r = this,
          a = this.x,
          s = this.y,
          l = u.getTime(),
          c = l + i;
          this.isAnimating = !0,
          o()
        },
        handleEvent: function (e) {
          switch (e.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
              this._start(e);
              break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
              this._move(e);
              break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
              this._end(e);
              break;
            case 'orientationchange':
            case 'resize':
              this._resize();
              break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
              this._transitionEnd(e);
              break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
              this._wheel(e);
              break;
            case 'keydown':
              this._key(e);
              break;
            case 'click':
              this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
          }
        }
      },
      c.prototype = {
        handleEvent: function (e) {
          switch (e.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
              this._start(e);
              break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
              this._move(e);
              break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
              this._end(e)
          }
        },
        destroy: function () {
          this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null),
          this.options.interactive && (u.removeEvent(this.indicator, 'touchstart', this), u.removeEvent(this.indicator, u.prefixPointerEvent('pointerdown'), this), u.removeEvent(this.indicator, 'mousedown', this), u.removeEvent(o, 'touchmove', this), u.removeEvent(o, u.prefixPointerEvent('pointermove'), this), u.removeEvent(o, 'mousemove', this), u.removeEvent(o, 'touchend', this), u.removeEvent(o, u.prefixPointerEvent('pointerup'), this), u.removeEvent(o, 'mouseup', this)),
          this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function (e) {
          var t = e.touches ? e.touches[0] : e;
          e.preventDefault(),
          e.stopPropagation(),
          this.transitionTime(),
          this.initiated = !0,
          this.moved = !1,
          this.lastPointX = t.pageX,
          this.lastPointY = t.pageY,
          this.startTime = u.getTime(),
          this.options.disableTouch || u.addEvent(o, 'touchmove', this),
          this.options.disablePointer || u.addEvent(o, u.prefixPointerEvent('pointermove'), this),
          this.options.disableMouse || u.addEvent(o, 'mousemove', this),
          this.scroller._execEvent('beforeScrollStart')
        },
        _move: function (e) {
          var t,
          i,
          n,
          o,
          r = e.touches ? e.touches[0] : e;
          u.getTime();
          this.moved || this.scroller._execEvent('scrollStart'),
          this.moved = !0,
          t = r.pageX - this.lastPointX,
          this.lastPointX = r.pageX,
          i = r.pageY - this.lastPointY,
          this.lastPointY = r.pageY,
          n = this.x + t,
          o = this.y + i,
          this._pos(n, o),
          e.preventDefault(),
          e.stopPropagation()
        },
        _end: function (e) {
          if (this.initiated) {
            if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), u.removeEvent(o, 'touchmove', this), u.removeEvent(o, u.prefixPointerEvent('pointermove'), this), u.removeEvent(o, 'mousemove', this), this.scroller.options.snap) {
              var t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
              i = this.options.snapSpeed || a.max(a.max(a.min(a.abs(this.scroller.x - t.x), 1000), a.min(a.abs(this.scroller.y - t.y), 1000)), 300);
              this.scroller.x == t.x && this.scroller.y == t.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = t, this.scroller.scrollTo(t.x, t.y, i, this.scroller.options.bounceEasing))
            }
            this.moved && this.scroller._execEvent('scrollEnd')
          }
        },
        transitionTime: function (e) {
          e = e || 0;
          var t = u.style.transitionDuration;
          if (t && (this.indicatorStyle[t] = e + 'ms', !e && u.isBadAndroid)) {
            this.indicatorStyle[t] = '0.0001ms';
            var i = this;
            d(function () {
              '0.0001ms' === i.indicatorStyle[t] && (i.indicatorStyle[t] = '0s')
            })
          }
        },
        transitionTimingFunction: function (e) {
          this.indicatorStyle[u.style.transitionTimingFunction] = e
        },
        refresh: function () {
          this.transitionTime(),
          this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none' : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none' : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none',
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (u.addClass(this.wrapper, 'iScrollBothScrollbars'), u.removeClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '8px' : this.wrapper.style.bottom = '8px'))  : (u.removeClass(this.wrapper, 'iScrollBothScrollbars'), u.addClass(this.wrapper, 'iScrollLoneScrollbar'), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = '2px' : this.wrapper.style.bottom = '2px')),
          u.getRect(this.wrapper),
          this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = a.max(a.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + 'px')  : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, 'clip' == this.options.shrink ? (this.minBoundaryX = - this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8)  : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
          this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = a.max(a.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + 'px')  : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, 'clip' == this.options.shrink ? (this.minBoundaryY = - this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8)  : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
          this.updatePosition()
        },
        updatePosition: function () {
          var e = this.options.listenX && a.round(this.sizeRatioX * this.scroller.x) || 0,
          t = this.options.listenY && a.round(this.sizeRatioY * this.scroller.y) || 0;
          this.options.ignoreBoundaries || (e < this.minBoundaryX ? ('scale' == this.options.shrink && (this.width = a.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + 'px'), e = this.minBoundaryX)  : e > this.maxBoundaryX ? 'scale' == this.options.shrink ? (this.width = a.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + 'px', e = this.maxPosX + this.indicatorWidth - this.width)  : e = this.maxBoundaryX : 'scale' == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + 'px'), t < this.minBoundaryY ? ('scale' == this.options.shrink && (this.height = a.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + 'px'), t = this.minBoundaryY)  : t > this.maxBoundaryY ? 'scale' == this.options.shrink ? (this.height = a.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + 'px', t = this.maxPosY + this.indicatorHeight - this.height)  : t = this.maxBoundaryY : 'scale' == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + 'px')),
          this.x = e,
          this.y = t,
          this.scroller.options.useTransform ? this.indicatorStyle[u.style.transform] = 'translate(' + e + 'px,' + t + 'px)' + this.scroller.translateZ : (this.indicatorStyle.left = e + 'px', this.indicatorStyle.top = t + 'px')
        },
        _pos: function (e, t) {
          e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX),
          t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY),
          e = this.options.listenX ? a.round(e / this.sizeRatioX)  : this.scroller.x,
          t = this.options.listenY ? a.round(t / this.sizeRatioY)  : this.scroller.y,
          this.scroller.scrollTo(e, t)
        },
        fade: function (e, t) {
          if (!t || this.visible) {
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null;
            var i = e ? 250 : 500,
            n = e ? 0 : 300;
            e = e ? '1' : '0',
            this.wrapperStyle[u.style.transitionDuration] = i + 'ms',
            this.fadeTimeout = setTimeout(function (e) {
              this.wrapperStyle.opacity = e,
              this.visible = + e
            }.bind(this, e), n)
          }
        }
      },
      s.utils = u,
      'undefined' != typeof e && e.exports ? e.exports = s : (n = function () {
        return s
      }.call(t, i, t, e), !(void 0 !== n && (e.exports = n)))
    }(window, document, Math)
  },
  function (e, t, i) {
    'use strict';
    var n = (i(120), i(121)),
    o = i(122),
    r = i(73),
    a = (i(123), i(37), i(124)),
    s = i(19),
    l = i(54),
    c = (i(57), i(78)),
    d = i(81);
    e.exports = function (e, t, i, u) {
      function p(e, t) {
        for (var i = t && t < v.length ? t : v.length, o = e; o < i; o++) v[o].index = o + 1,
        m.append(n(v[o]));
        a.refresh(m),
        e && (g.hide(), h())
      }
      function f() {
        e.on('click', function (e) {
          var t = $(e.target),
          i = t.parents('.list_item').length ? t.parents('.list_item')  : t,
          n = i.attr('data-cid') || '';
          (t.parents('.list_item').length || t.hasClass('list_item')) && c({
            vid: '',
            cid: n,
            lid: '',
            appConfid: d.GUESS_LIKE_ITEM_CONFID,
            liteConfid: d.TOP_NAV_CONFID_LITE,
            appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
          })
        })
      }
      function h() {
        var n,
        r,
        a = function () {
          switch (window.URL_TYPE) {
            case 'column':
              return {
                column_id: u.column_id,
                exsource: window.EXSOURCE,
                duration: i.duration
              };
            case 'cover':
              return {
                video_id: i.vid,
                cover_id: t.cover_id,
                column_id: u.column_id,
                exsource: window.EXSOURCE,
                duration: i.duration
              };
            case 'video':
              return {
                video_id: i.vid,
                exsource: window.EXSOURCE,
                duration: i.duration
              }
          }
        }(),
        c = {
          0: '安装腾讯视频，观看更多精彩推荐',
          1: '更多精彩推荐',
          2: '安装腾讯视频，观看更多精彩推荐'
        },
        p = $(o());
        location.href.indexOf('lite=true') > - 1 ? (n = l(), r = l.getConfid())  : (n = s(), r = 20111),
        n.model(a).model({
          confid: d.GUESS_LIKE_CONFID
        }).on('render', function (t, i) {
          p.appendTo(e).find('.icon_text').text(c[t])
        }).on('action', function (e, t) {
        }),
        p.on('click', function () {
          n.action()
        }).attr({
          _report: !0,
          _eid: 'videorecpull',
          _kv: JSON.stringify({
            app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
          })
        })
      }
      var v = null,
      m = e.find('._list'),
      g = e.find('._more');
      g.on('click', function () {
        p(6)
      }),
      r.recommend2016({
        cid: t.cover_id
      }).then(function (t) {
        if (e.removeClass('none'), t.data) {
          v = t.data.recItemList.map(function (e) {
            return e.seqNum = t.data.seqNum,
            e.coverType = window.COVER_TYPE,
            e
          }).slice(0, 12);
          var i = v.length;
          v = i % 2 ? v.slice(0, i - 1)  : v.slice(0),
          v.length > 6 && g.removeClass('more_none'),
          p(0, 6),
          f(),
          a.init()
        }
      })
    };
    var u = i(125);
    u(3)
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/recommendation/body', '<section class="mod_box mod_box_lastview" id="2016_recommendation"> <div class="mod_hd"> <h2 class="mod_title U_color_a">为你推荐</h2> </div> <div class="mod_bd"> <div class="mod_figures mod_figures_like" _hot="recommends"> <ul class="figures_list _list"> </ul> </div> <div class="mod_more more_none _more" _hot="recommendsbtn"> <svg class="svg_icon_switch U_svg_c" viewBox="0 0 44 44"> <use class="svg_use" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sym_icon_switch"></use> </svg> </div> </div> </section>')
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/recommendation/item', function (e, t) {
      'use strict';
      var i = this,
      n = i.$helpers,
      o = i.$escape,
      r = e.unionInfo,
      a = e.index,
      s = e.seqNum,
      l = e.itemType,
      c = e.recReportInfo,
      d = (e.cid, '');
      var videoUrl = o(n.playUrl('javascript:', {
        cid: r.cover_id
      }));
      return d += '<li class="list_item" data-cid="',
      d += o(r.cover_id),
      d += '" _report _eid="videorec" _kv=\'{"rankid":',
      d += o(a),
      d += '}\' _recommend="pageType=mplay&module=coverRecommend&seqnum=',
      d += o(s),
      d += '&rtype=',
      d += o(l),
      d += '&algId=',
      d += o(c.algId),
      d += '&bucketId=',
      d += o(c.bucketId),
      d += '&reason=',
      d += o(c.reason),
      d += '&reasonType=',
      d += o(c.reasonType),
      d += '&cid=',
      d += o(r.cover_id),
      d += '"> <!-- <a href="',
      d += videoUrl,
      d += '" class="figure"> --> <a href="' + videoUrl + '" class="figure"> <img src="',
      d += o(r.horizontal_pic_url),
      d += '" onerror="picerr(this, \'h\')"/> <div class="figure_duration"> <!-- ',
      10 == r.type ? (d += ' ', d += o(r.publish_date), d += ' ')  : (d += ' ', d += o(r.score && ( + r.score.score).toFixed(1)), d += ' '),
      d += ' --> ',
      d += o(r.episode_updated || ''),
      d += ' </div> </a> <div class="figure_info_center"> <!-- <strong class="figure_title ',
      d += o(r.second_title ? '' : 'figure_title_two'),
      d += '"><a href="',
      d += videoUrl,
      d += '">',
      d += o(r.title),
      d += '</a></strong> --> <strong class="figure_title ',
      d += o(r.second_title ? '' : 'figure_title_two'),
      d += '"><a href="' + videoUrl + '">',
      d += o(r.title),
      d += '</a></strong> <div class="figure_count U_color_b"> ',
      d += o('r.second_title' || ''),
      d += ' </div> </div> </li>',
      new String(d)
    })
  },
  function (e, t, i) {
    var n = i(11);
    e.exports = n('_component/2016/recommendation/bannerTpl', ' <div class="mod_more_btn"> 打开腾讯视频，看更多精彩内容 </div>')
  },
  function (e, t, i) {
    var n = i(48),
    o = i(49),
    r = 'http://btrace.qq.com/kvcollect?BossId=2745&Pwd=0&iplat=3&page=0&device_id=&host=' + location.host + '&url=' + location.href + '&int1=&int2=&int3=&str1=&str2=&str3=&str4=&_dc=' + Math.random(),
    a = function (e, t, i, o, a, s) {
      var l = r + '&oper=' + e + '&ptype=' + t + '&tab=' + i + '&rtype=' + o + '&rlist=' + a + '&vid=' + s + '&uin=';
      n(l)
    };
    a.lazy = function (e, t, i, n, a, s) {
      var l = r + '&oper=' + e + '&ptype=' + t + '&tab=' + i + '&rtype=' + n + '&rlist=' + a + '&vid=' + s + '&uin=';
      o.push(l)
    },
    e.exports = a
  },
  function (e, t, i) {
    function n(e, t, i) {
      var n = e.attr('_' + m).split('&');
      i && a(n);
      var o = {
      };
      o.url = location.href,
      n.forEach(function (e, t) {
        var i = e.split('=');
        if (i && !(i.length < 2)) if (i.length > 2 && (i[1] = i.slice(1).join('=')), i[0].length > 2) ~c.indexOf(g, i[0]) ? o[i[0]] = i[1] : '';
         else {
          var n = c.indexOf(y, i[0]);
          ~n ? o[g[n]] = i[1] : ''
        }
      }),
      t += Math.random();
      var r = c.extend({
      }, v, o);
      r = Object.keys(r).map(function (e) {
        return e + '=' + r[e]
      }).join('&'),
      (i ? p.push : u) (t + r)
    }
    function o() {
      function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }
      return [e(),
      e(),
      e(),
      e()].join('')
    }
    function r() {
      var e = d.get('tvfe_boss_uuid');
      if (!e) {
        e = o();
        try {
          d.set('tvfe_boss_uuid', e, 'qq.com', !1, 87600)
        } catch (t) {
          d.set('tvfe_boss_uuid', e, '', !1, 87600)
        }
      }
      return e
    }
    function a(e) {
      window.sessionStorage && sessionStorage.setItem && sessionStorage.setItem('report_recomm_player', s(e))
    }
    function s(e) {
      var t = [
      ];
      for (var i in e) e.hasOwnProperty(i) && 'userID' != i && 'actionType' != i && 'url' != i && t.push(e[i]);
      return t.join('|')
    }
    var l = i(37),
    c = i(27),
    d = (i(42), i(44)),
    u = i(48),
    p = i(49),
    f = 'http://btrace.qq.com/kvcollect?BossId=4073&Pwd=598576177&_dc=',
    h = 'http://btrace.qq.com/kvcollect?BossId=4074&Pwd=1411373385&_dc=',
    v = {
      actionType: 'click',
      userID: r(),
      ptag: i(58),
      url: '',
      rtype: '',
      algId: '',
      bucketId: '',
      reason: '',
      reasonType: '',
      cid: '',
      vid: '',
      pid: '',
      module: '',
      pageType: '',
      seqnum: ''
    };
    e.exports = {
      init: function () {
        $(document.body).on('click', '[_' + m + ']', function (e) {
          var t = $(e.currentTarget);
          n(t, h, !0)
        }),
        this.refresh()
      },
      refresh: function (e) {
        var t = e ? $(e).find('[' + m + ']')  : $('[' + m + ']');
        t.each(function () {
          var e = $(this),
          t = e.attr(m);
          e.attr('_' + m, t).removeAttr(m);
          var i = l(this, {
            enter: !0
          }, function () {
            n(e, f),
            setTimeout(function () {
              i && i()
            })
          })
        })
      }
    };
    var m = '_recommend',
    g = [
      'pageType',
      'module',
      'seqnum',
      'rtype',
      'algId',
      'bucketId',
      'reason',
      'reasonType',
      'cid',
      'vid',
      'pid'
    ],
    y = [
      'pt',
      'm',
      's',
      'r',
      'a',
      'b',
      'rs',
      'rt',
      'c',
      'v',
      'p'
    ]
  },
  function (e, t) {
    'use strict';
    var i = function () {
      var e = [
        0,
        1,
        2,
        4,
        7
      ];
      return function (t) {
        return t in e ? e[t] : i(t - 1) + (t - 1)
      }
    }();
    e.exports = function (e) {
      return function (t) {
        return i(t) * e
      }
    }
  },
  function (e, t) {
    e.exports = function (e, t, i) {
    }
  },
  function (e, t, i) {
    function n() {
      new p('.mod_source_box', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: !1,
          disableOnInteraction: !1
        },
        loop: !0,
        pagination: {
          el: '.source_dots',
          bulletClass: 'dots_item',
          bulletActiveClass: 'current'
        }
      })
    }
    function o(e, t, i, n) {
      var o = k ? t.cover_id : i.vid,
      r = i.title || t.title || n.title || '腾讯视频',
      s = [
      ],
      l = e.filter(function (e) {
        return 1 == e.ShowType
      }).length;
      e.sort(function (e, t) {
        return Number(e.ShowOrder) - Number(t.ShowOrder)
      }),
      l ? S(o, l, r).then(function (t) {
        var n = [
        ],
        o = t.header.seq_num || '',
        r = t.rsp_paras.ab_rec_name || '',
        l = 0;
        try {
          n = t.rec_modules[0].rec_items || [
          ]
        } catch (d) {
        }
        e.forEach(function (e) {
          var t = '';
          1 == e.ShowType && (t = n[l++]),
          1 == e.ShowType && t ? s.push({
            showType: e.ShowType,
            vid: t.item_id || '',
            title: t.fields && t.fields.title || e.MaterialTitle || c(),
            image: t.fields && (t.fields.pic160x90 || t.fields.pic_228_128) || e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
            buttonTitle: e.ButtonTitle || '打开',
            buttonTextColor: e.ButtonTextColor || '',
            backColor: e.BackColor || E,
            appIosDownurl: e.AppIosDownurl,
            appIosBlankurl: e.AppIosBlankurl,
            iosIntermediaUrl: e.IosIntermediaUrl,
            appAndroidOpenurl: e.AppAndroidOpenurl,
            appAndroidDownurl: e.AppAndroidDownurl,
            appAndroidBlankurl: e.AppAndroidBlankurl,
            androidIntermediaUrl: e.AndroidIntermediaUrl,
            seqNum: o,
            ab_rec_name: r,
            recParas: t.item_paras || {
            }
          })  : s.push({
            showType: e.ShowType,
            title: e.MaterialTitle || c(),
            image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
            buttonTitle: e.ButtonTitle || '打开',
            buttonTextColor: e.ButtonTextColor || '',
            backColor: e.BackColor || E,
            appIosDownurl: e.AppIosDownurl,
            appIosBlankurl: e.AppIosBlankurl,
            iosIntermediaUrl: e.IosIntermediaUrl,
            appAndroidOpenurl: e.AppAndroidOpenurl,
            appAndroidDownurl: e.AppAndroidDownurl,
            appAndroidBlankurl: e.AppAndroidBlankurl,
            androidIntermediaUrl: e.AndroidIntermediaUrl,
            seqNum: o,
            ab_rec_name: r
          })
        }),
        a(s, i.vid)
      }) ['catch'](function (t) {
        e.forEach(function (e) {
          s.push({
            showType: e.ShowType,
            title: e.MaterialTitle || c(),
            image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
            buttonTitle: e.ButtonTitle || '打开',
            buttonTextColor: e.ButtonTextColor || '',
            backColor: e.BackColor || E,
            appIosDownurl: e.AppIosDownurl,
            appIosBlankurl: e.AppIosBlankurl,
            iosIntermediaUrl: e.IosIntermediaUrl,
            appAndroidOpenurl: e.AppAndroidOpenurl,
            appAndroidDownurl: e.AppAndroidDownurl,
            appAndroidBlankurl: e.AppAndroidBlankurl,
            androidIntermediaUrl: e.AndroidIntermediaUrl,
            seqNum: t.header && t.header.seq_num || '',
            ab_rec_name: t.rsp_paras && t.rsp_paras.ab_rec_name || ''
          })
        }),
        a(s, i.vid)
      })  : (e.forEach(function (e) {
        s.push({
          showType: e.ShowType,
          title: e.MaterialTitle || c(),
          image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
          buttonTitle: e.ButtonTitle || '打开',
          buttonTextColor: e.ButtonTextColor || '',
          backColor: e.BackColor || E,
          appIosDownurl: e.AppIosDownurl,
          appIosBlankurl: e.AppIosBlankurl,
          iosIntermediaUrl: e.IosIntermediaUrl,
          appAndroidOpenurl: e.AppAndroidOpenurl,
          appAndroidDownurl: e.AppAndroidDownurl,
          appAndroidBlankurl: e.AppAndroidBlankurl,
          androidIntermediaUrl: e.AndroidIntermediaUrl
        })
      }), a(s, i.vid))
    }
    function r(e, t, i) {
      var n = k ? e.cover_id : t.vid,
      o = t.title || e.title || i.title || '腾讯视频',
      r = 4;
      S(n, r, o).then(function (e) {
        var i = [
        ],
        n = e.header.seq_num || '',
        o = e.rsp_paras.ab_rec_name || '',
        r = [
        ];
        try {
          i = e.rec_modules[0].rec_items || [
          ]
        } catch (s) {
        }
        i.length && i.forEach(function (e) {
          r.push({
            showType: 1,
            vid: e.item_id,
            title: e.fields && e.fields.title || c(),
            image: e.fields && (e.fields.pic160x90 || e.fields.pic_228_128) || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
            buttonTitle: '打开',
            buttonTextColor: '#ff6022',
            backColor: E,
            seqNum: n,
            ab_rec_name: o,
            recParas: e.item_paras || {
            }
          })
        }),
        r.push(Object.assign({
        }, C, {
          seqNum: n,
          ab_rec_name: o
        })),
        a(r, t.vid)
      }) ['catch'](function (e) {
        a([C], t.vid)
      })
    }
    function a(e, t) {
      var i = '';
      e.forEach(function (e, n) {
        var o = {
        };
        y.os.android ? o = {
          downurl: e.appAndroidDownurl || '',
          blankurl: e.appAndroidBlankurl || '',
          intermediaurl: e.androidIntermediaUrl || ''
        }
         : y.os.ios && (o = {
          downurl: e.appIosDownurl || '',
          blankurl: e.appIosBlankurl || '',
          intermediaurl: e.iosIntermediaUrl || ''
        });
        var r = JSON.stringify(Object.assign({
          type: 1,
          appid: m(o.blankurl, e.appAndroidOpenurl),
          cnt_id: + e.showType,
          rankid: n + 1,
          rec_video_id: e.vid || '',
          video_id: t || '',
          seq_num: e.seqNum || '',
          video_type: k ? 1 : 2,
          ab_rec_name: e.ab_rec_name || ''
        }, e.recParas || {
        }));
        2 == e.showType ? i += b(Object.assign({
        }, {
          index: n + 1,
          title: e.title,
          image: e.image,
          buttonTitle: e.buttonTitle,
          buttonTextColor: g(e.buttonTextColor || '#ff6022', 'btnBg'),
          backColor: g(e.backColor, 'itemBg'),
          kv: r,
          pkgname: e.appAndroidOpenurl
        }, o))  : 1 == e.showType ? i += x(Object.assign({
        }, {
          index: n + 1,
          vid: e.vid || '',
          title: e.title,
          image: e.image,
          buttonTitle: e.buttonTitle,
          buttonTextColor: g(e.buttonTextColor || '#ff6022', 'btnBg'),
          backColor: g(e.backColor, 'itemBg'),
          kv: r,
          pkgname: e.appAndroidOpenurl
        }, o))  : 3 == e.showType && (i += T(Object.assign({
        }, {
          index: n + 1,
          title: e.title,
          image: e.image,
          buttonTitle: e.buttonTitle,
          buttonTextColor: g(e.buttonTextColor || '', 'btnBg'),
          backColor: g(e.backColor, 'itemBg'),
          kv: r,
          pkgname: e.appAndroidOpenurl
        }, o)))
      });
      var n = e[0] && e[0].image;
      s(n, e.length, i)
    }
    function s(e, t, i) {
      if (e) {
        var n = new Image;
        n.onload = function () {
          l(t, i)
        },
        n.onerror = function () {
          l(t, i)
        },
        n.src = e
      } else l(t, i)
    }
    function l(e, t) {
      var i = $('.source_item_default');
      i.removeClass('source_item_fadeIn').addClass('source_item_fadeOut'),
      setTimeout(function () {
        i.remove(),
        $('.source_container').prepend(t),
        e > 1 && n()
      }, 300)
    }
    function c() {
      return Window.COVER_TYPE ? '看更多热门短视频' : ~['2',
      '3',
      '9',
      '106',
      '10'].indexOf(window.COVER_TYPE) ? '看全集高清完整版' : '1' === window.COVER_TYPE ? '看高清完整版' : '看更多热门短视频'
    }
    function d() {
     
    }
    function u(e, t, i) {
     
    }
    var p = i(128),
    f = i(129),
    h = i(78),
    v = i(81),
    m = i(132),
    g = i(133).colorHandle,
    y = i(7) (),
    _ = i(134),
    w = i(135),
    b = i(136),
    x = i(137),
    T = i(138),
    k = !1,
    S = null,
    E = '#ffffff';
    matchMedia('(prefers-color-scheme: dark)').matches && (E = 'rgb(32, 33, 49)');
    var C = {
      showType: 2,
      title: c(),
      image: '//i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg',
      buttonTitle: '打开',
      buttonTextColor: '#ff6022',
      backColor: E
    };
    e.exports = function (e, t, i, n) {
      'cover' === window.URL_TYPE ? k = w(t.category_value)  : 'video' === window.URL_TYPE ? k = w(i.c_category_value)  : 'column' === window.URL_TYPE && (k = w(n.category_value)),
      S = k ? _.getRecLongVideo : _.getRecShortVideo,
      _.getPrConfig({
        modId: 1501,
        platforms: location.href.indexOf('lite=true') > - 1 ? 13 : 12,
        channel: window.COVER_TYPE || ''
      }).then(function (e) {
        o(e, t, i, n)
      }) ['catch'](function (e) {
        r(t, i, n)
      }),
      u(t, i, n),
      d()
    }
  },
  function (e, t, i) {
    !function (t, i) {
      e.exports = i()
    }(this, function () {
      'use strict';
      function e(e, t) {
        var i = [
        ],
        a = 0;
        if (e && !t && e instanceof r) return e;
        if (e) if ('string' == typeof e) {
          var s,
          l,
          c = e.trim();
          if (0 <= c.indexOf('<') && 0 <= c.indexOf('>')) {
            var d = 'div';
            for (0 === c.indexOf('<li') && (d = 'ul'), 0 === c.indexOf('<tr') && (d = 'tbody'), 0 !== c.indexOf('<td') && 0 !== c.indexOf('<th') || (d = 'tr'), 0 === c.indexOf('<tbody') && (d = 'table'), 0 === c.indexOf('<option') && (d = 'select'), (l = n.createElement(d)).innerHTML = c, a = 0; a < l.childNodes.length; a += 1) i.push(l.childNodes[a])
          } else for (s = t || '#' !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim())  : [
            n.getElementById(e.trim().split('#') [1])
          ], a = 0; a < s.length; a += 1) s[a] && i.push(s[a])
        } else if (e.nodeType || e === o || e === n) i.push(e);
         else if (0 < e.length && e[0].nodeType) for (a = 0; a < e.length; a += 1) i.push(e[a]);
        return new r(i)
      }
      function t(e) {
        for (var t = [
        ], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
      }
      function i() {
        var e = this,
        t = e.params,
        i = e.el;
        if (!i || 0 !== i.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var n = e.allowSlideNext,
          o = e.allowSlidePrev,
          r = e.snapGrid;
          if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(a),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            t.autoHeight && e.updateAutoHeight()
          } else e.updateSlidesClasses(),
          ('auto' === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0)  : e.slideTo(e.activeIndex, 0, !1, !0);
          e.allowSlidePrev = o,
          e.allowSlideNext = n,
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
      }
      var n = 'undefined' == typeof document ? {
        body: {
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        activeElement: {
          blur: function () {
          },
          nodeName: ''
        },
        querySelector: function () {
          return null
        },
        querySelectorAll: function () {
          return []
        },
        getElementById: function () {
          return null
        },
        createEvent: function () {
          return {
            initEvent: function () {
            }
          }
        },
        createElement: function () {
          return {
            children: [
            ],
            childNodes: [
            ],
            style: {
            },
            setAttribute: function () {
            },
            getElementsByTagName: function () {
              return []
            }
          }
        },
        location: {
          hash: ''
        }
      }
       : document,
      o = 'undefined' == typeof window ? {
        document: n,
        navigator: {
          userAgent: ''
        },
        location: {
        },
        history: {
        },
        CustomEvent: function () {
          return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return ''
            }
          }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {
        },
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
      }
       : window,
      r = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length,
        this
      };
      e.fn = r.prototype,
      e.Class = r,
      e.Dom7 = r;
      var a = {
        addClass: function (e) {
          if (void 0 === e) return this;
          for (var t = e.split(' '), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
          return this
        },
        removeClass: function (e) {
          for (var t = e.split(' '), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
          return this
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
          for (var t = e.split(' '), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
          return this
        },
        attr: function (e, t) {
          var i = arguments;
          if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e)  : void 0;
          for (var n = 0; n < this.length; n += 1) if (2 === i.length) this[n].setAttribute(e, t);
           else for (var o in e) this[n][o] = e[o],
          this[n].setAttribute(o, e[o]);
          return this
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this
        },
        data: function (e, t) {
          var i;
          if (void 0 !== t) {
            for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {
            }),
            i.dom7ElementDataStorage[e] = t;
            return this
          }
          if (i = this[0]) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
            var o = i.getAttribute('data-' + e);
            return o || void 0
          }
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            i.webkitTransform = e,
            i.transform = e
          }
          return this
        },
        transition: function (e) {
          'string' != typeof e && (e += 'ms');
          for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            i.webkitTransitionDuration = e,
            i.transitionDuration = e
          }
          return this
        },
        on: function () {
          function t(t) {
            var i = t.target;
            if (i) {
              var n = t.target.dom7EventData || [
              ];
              if (n.indexOf(t) < 0 && n.unshift(t), e(i).is(s)) l.apply(i, n);
               else for (var o = e(i).parents(), r = 0; r < o.length; r += 1) e(o[r]).is(s) && l.apply(o[r], n)
            }
          }
          function i(e) {
            var t = e && e.target && e.target.dom7EventData || [
            ];
            t.indexOf(e) < 0 && t.unshift(e),
            l.apply(this, t)
          }
          for (var n, o = [
          ], r = arguments.length; r--; ) o[r] = arguments[r];
          var a = o[0],
          s = o[1],
          l = o[2],
          c = o[3];
          'function' == typeof o[1] && (a = (n = o) [0], l = n[1], c = n[2], s = void 0),
          c || (c = !1);
          for (var d, u = a.split(' '), p = 0; p < this.length; p += 1) {
            var f = this[p];
            if (s) for (d = 0; d < u.length; d += 1) {
              var h = u[d];
              f.dom7LiveListeners || (f.dom7LiveListeners = {
              }),
              f.dom7LiveListeners[h] || (f.dom7LiveListeners[h] = [
              ]),
              f.dom7LiveListeners[h].push({
                listener: l,
                proxyListener: t
              }),
              f.addEventListener(h, t, c)
            } else for (d = 0; d < u.length; d += 1) {
              var v = u[d];
              f.dom7Listeners || (f.dom7Listeners = {
              }),
              f.dom7Listeners[v] || (f.dom7Listeners[v] = [
              ]),
              f.dom7Listeners[v].push({
                listener: l,
                proxyListener: i
              }),
              f.addEventListener(v, i, c)
            }
          }
          return this
        },
        off: function () {
          for (var e, t = [
          ], i = arguments.length; i--; ) t[i] = arguments[i];
          var n = t[0],
          o = t[1],
          r = t[2],
          a = t[3];
          'function' == typeof t[1] && (n = (e = t) [0], r = e[1], a = e[2], o = void 0),
          a || (a = !1);
          for (var s = n.split(' '), l = 0; l < s.length; l += 1) for (var c = s[l], d = 0; d < this.length; d += 1) {
            var u = this[d],
            p = void 0;
            if (!o && u.dom7Listeners ? p = u.dom7Listeners[c] : o && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]), p && p.length) for (var f = p.length - 1; 0 <= f; f -= 1) {
              var h = p[f];
              r && h.listener === r ? (u.removeEventListener(c, h.proxyListener, a), p.splice(f, 1))  : r && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === r ? (u.removeEventListener(c, h.proxyListener, a), p.splice(f, 1))  : r || (u.removeEventListener(c, h.proxyListener, a), p.splice(f, 1))
            }
          }
          return this
        },
        trigger: function () {
          for (var e = [
          ], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = e[0].split(' '), r = e[1], a = 0; a < i.length; a += 1) for (var s = i[a], l = 0; l < this.length; l += 1) {
            var c = this[l],
            d = void 0;
            try {
              d = new o.CustomEvent(s, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              })
            } catch (e) {
              (d = n.createEvent('Event')).initEvent(s, !0, !0),
              d.detail = r
            }
            c.dom7EventData = e.filter(function (e, t) {
              return 0 < t
            }),
            c.dispatchEvent(d),
            c.dom7EventData = [
            ],
            delete c.dom7EventData
          }
          return this
        },
        transitionEnd: function (e) {
          function t(r) {
            if (r.target === this) for (e.call(this, r), i = 0; i < n.length; i += 1) o.off(n[i], t)
          }
          var i,
          n = [
            'webkitTransitionEnd',
            'transitionend'
          ],
          o = this;
          if (e) for (i = 0; i < n.length; i += 1) o.on(n[i], t);
          return this
        },
        outerWidth: function (e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return this[0].offsetWidth + parseFloat(t.getPropertyValue('margin-right')) + parseFloat(t.getPropertyValue('margin-left'))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function (e) {
          if (0 < this.length) {
            if (e) {
              var t = this.styles();
              return this[0].offsetHeight + parseFloat(t.getPropertyValue('margin-top')) + parseFloat(t.getPropertyValue('margin-bottom'))
            }
            return this[0].offsetHeight
          }
          return null
        },
        offset: function () {
          if (0 < this.length) {
            var e = this[0],
            t = e.getBoundingClientRect(),
            i = n.body,
            r = e.clientTop || i.clientTop || 0,
            a = e.clientLeft || i.clientLeft || 0,
            s = e === o ? o.scrollY : e.scrollTop,
            l = e === o ? o.scrollX : e.scrollLeft;
            return {
              top: t.top + s - r,
              left: t.left + l - a
            }
          }
          return null
        },
        css: function (e, t) {
          var i;
          if (1 === arguments.length) {
            if ('string' != typeof e) {
              for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
              return this
            }
            if (this[0]) return o.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && 'string' == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
          }
          return this
        },
        each: function (e) {
          if (!e) return this;
          for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
          return this
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim()  : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this
        },
        is: function (t) {
          var i,
          a,
          s = this[0];
          if (!s || void 0 === t) return !1;
          if ('string' == typeof t) {
            if (s.matches) return s.matches(t);
            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
            if (s.msMatchesSelector) return s.msMatchesSelector(t);
            for (i = e(t), a = 0; a < i.length; a += 1) if (i[a] === s) return !0;
            return !1
          }
          if (t === n) return s === n;
          if (t === o) return s === o;
          if (t.nodeType || t instanceof r) {
            for (i = t.nodeType ? [
              t
            ] : t, a = 0; a < i.length; a += 1) if (i[a] === s) return !0;
            return !1
          }
          return !1
        },
        index: function () {
          var e,
          t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
            return e
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t,
          i = this.length;
          return new r(i - 1 < e ? [
          ] : e < 0 ? (t = i + e) < 0 ? [
          ] : [
            this[t]
          ] : [
            this[e]
          ])
        },
        append: function () {
          for (var e, t = [
          ], i = arguments.length; i--; ) t[i] = arguments[i];
          for (var o = 0; o < t.length; o += 1) {
            e = t[o];
            for (var a = 0; a < this.length; a += 1) if ('string' == typeof e) {
              var s = n.createElement('div');
              for (s.innerHTML = e; s.firstChild; ) this[a].appendChild(s.firstChild)
            } else if (e instanceof r) for (var l = 0; l < e.length; l += 1) this[a].appendChild(e[l]);
             else this[a].appendChild(e)
          }
          return this
        },
        prepend: function (e) {
          var t,
          i;
          for (t = 0; t < this.length; t += 1) if ('string' == typeof e) {
            var o = n.createElement('div');
            for (o.innerHTML = e, i = o.childNodes.length - 1; 0 <= i; i -= 1) this[t].insertBefore(o.childNodes[i], this[t].childNodes[0])
          } else if (e instanceof r) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
           else this[t].insertBefore(e, this[t].childNodes[0]);
          return this
        },
        next: function (t) {
          return new r(0 < this.length ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [
            this[0].nextElementSibling
          ] : [
          ] : this[0].nextElementSibling ? [
            this[0].nextElementSibling
          ] : [
          ] : [
          ])
        },
        nextAll: function (t) {
          var i = [
          ],
          n = this[0];
          if (!n) return new r([]);
          for (; n.nextElementSibling; ) {
            var o = n.nextElementSibling;
            t ? e(o).is(t) && i.push(o)  : i.push(o),
            n = o
          }
          return new r(i)
        },
        prev: function (t) {
          if (0 < this.length) {
            var i = this[0];
            return new r(t ? i.previousElementSibling && e(i.previousElementSibling).is(t) ? [
              i.previousElementSibling
            ] : [
            ] : i.previousElementSibling ? [
              i.previousElementSibling
            ] : [
            ])
          }
          return new r([])
        },
        prevAll: function (t) {
          var i = [
          ],
          n = this[0];
          if (!n) return new r([]);
          for (; n.previousElementSibling; ) {
            var o = n.previousElementSibling;
            t ? e(o).is(t) && i.push(o)  : i.push(o),
            n = o
          }
          return new r(i)
        },
        parent: function (i) {
          for (var n = [
          ], o = 0; o < this.length; o += 1) null !== this[o].parentNode && (i ? e(this[o].parentNode).is(i) && n.push(this[o].parentNode)  : n.push(this[o].parentNode));
          return e(t(n))
        },
        parents: function (i) {
          for (var n = [
          ], o = 0; o < this.length; o += 1) for (var r = this[o].parentNode; r; ) i ? e(r).is(i) && n.push(r)  : n.push(r),
          r = r.parentNode;
          return e(t(n))
        },
        closest: function (e) {
          var t = this;
          return void 0 === e ? new r([])  : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
          for (var t = [
          ], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), o = 0; o < n.length; o += 1) t.push(n[o]);
          return new r(t)
        },
        children: function (i) {
          for (var n = [
          ], o = 0; o < this.length; o += 1) for (var a = this[o].childNodes, s = 0; s < a.length; s += 1) i ? 1 === a[s].nodeType && e(a[s]).is(i) && n.push(a[s])  : 1 === a[s].nodeType && n.push(a[s]);
          return new r(t(n))
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        },
        add: function () {
          for (var t = [
          ], i = arguments.length; i--; ) t[i] = arguments[i];
          var n,
          o;
          for (n = 0; n < t.length; n += 1) {
            var r = e(t[n]);
            for (o = 0; o < r.length; o += 1) this[this.length] = r[o],
            this.length += 1
          }
          return this
        },
        styles: function () {
          return this[0] ? o.getComputedStyle(this[0], null)  : {
          }
        }
      };
      Object.keys(a).forEach(function (t) {
        e.fn[t] = a[t]
      });
      var s,
      l,
      c,
      d,
      u = {
        deleteProps: function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null
            } catch (e) {
            }
            try {
              delete t[e]
            } catch (e) {
            }
          })
        },
        nextTick: function (e, t) {
          return void 0 === t && (t = 0),
          setTimeout(e, t)
        },
        now: function () {
          return Date.now()
        },
        getTranslate: function (e, t) {
          var i,
          n,
          r;
          void 0 === t && (t = 'x');
          var a = o.getComputedStyle(e, null);
          return o.WebKitCSSMatrix ? (6 < (n = a.transform || a.webkitTransform).split(',').length && (n = n.split(', ').map(function (e) {
            return e.replace(',', '.')
          }).join(', ')), r = new o.WebKitCSSMatrix('none' === n ? '' : n))  : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')).toString().split(','),
          'x' === t && (n = o.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12])  : parseFloat(i[4])),
          'y' === t && (n = o.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13])  : parseFloat(i[5])),
          n || 0
        },
        parseUrlQuery: function (e) {
          var t,
          i,
          n,
          r,
          a = {
          },
          s = e || o.location.href;
          if ('string' == typeof s && s.length) for (r = (i = (s = - 1 < s.indexOf('?') ? s.replace(/\S*\?/, '')  : '').split('&').filter(function (e) {
            return '' !== e
          })).length, t = 0; t < r; t += 1) n = i[t].replace(/#\S+/g, '').split('='),
          a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || '';
          return a
        },
        isObject: function (e) {
          return 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && null !== e && e.constructor && e.constructor === Object
        },
        extend: function () {
          for (var e = [
          ], t = arguments.length; t--; ) e[t] = arguments[t];
          for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
            var o = e[n];
            if (null != o) for (var r = Object.keys(Object(o)), a = 0, s = r.length; a < s; a += 1) {
              var l = r[a],
              c = Object.getOwnPropertyDescriptor(o, l);
              void 0 !== c && c.enumerable && (u.isObject(i[l]) && u.isObject(o[l]) ? u.extend(i[l], o[l])  : !u.isObject(i[l]) && u.isObject(o[l]) ? (i[l] = {
              }, u.extend(i[l], o[l]))  : i[l] = o[l])
            }
          }
          return i
        }
      },
      p = (c = n.createElement('div'), {
        touch: o.Modernizr && !0 === o.Modernizr.touch || !!(0 < o.navigator.maxTouchPoints || 'ontouchstart' in o || o.DocumentTouch && n instanceof o.DocumentTouch),
        pointerEvents: !!(o.navigator.pointerEnabled || o.PointerEvent || 'maxTouchPoints' in o.navigator && 0 < o.navigator.maxTouchPoints),
        prefixedPointerEvents: !!o.navigator.msPointerEnabled,
        transition: (l = c.style, 'transition' in l || 'webkitTransition' in l || 'MozTransition' in l),
        transforms3d: o.Modernizr && !0 === o.Modernizr.csstransforms3d || (s = c.style, 'webkitPerspective' in s || 'MozPerspective' in s || 'OPerspective' in s || 'MsPerspective' in s || 'perspective' in s),
        flexbox: function () {
          for (var e = c.style, t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' '), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
          return !1
        }(),
        observer: 'MutationObserver' in o || 'WebkitMutationObserver' in o,
        passiveListener: function () {
          var e = !1;
          try {
            var t = Object.defineProperty({
            }, 'passive', {
              get: function () {
                e = !0
              }
            });
            o.addEventListener('testPassiveListener', null, t)
          } catch (e) {
          }
          return e
        }(),
        gestures: 'ongesturestart' in o
      }),
      f = {
        isIE: !!o.navigator.userAgent.match(/Trident/g) || !!o.navigator.userAgent.match(/MSIE/g),
        isEdge: !!o.navigator.userAgent.match(/Edge/g),
        isSafari: (d = o.navigator.userAgent.toLowerCase(), 0 <= d.indexOf('safari') && d.indexOf('chrome') < 0 && d.indexOf('android') < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent)
      },
      h = function (e) {
        void 0 === e && (e = {
        });
        var t = this;
        t.params = e,
        t.eventsListeners = {
        },
        t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
          t.on(e, t.params.on[e])
        })
      },
      v = {
        components: {
          configurable: !0
        }
      };
      h.prototype.on = function (e, t, i) {
        var n = this;
        if ('function' != typeof t) return n;
        var o = i ? 'unshift' : 'push';
        return e.split(' ').forEach(function (e) {
          n.eventsListeners[e] || (n.eventsListeners[e] = [
          ]),
          n.eventsListeners[e][o](t)
        }),
        n
      },
      h.prototype.once = function (e, t, i) {
        function n() {
          for (var i = [
          ], r = arguments.length; r--; ) i[r] = arguments[r];
          t.apply(o, i),
          o.off(e, n),
          n.f7proxy && delete n.f7proxy
        }
        var o = this;
        return 'function' != typeof t ? o : (n.f7proxy = t, o.on(e, n, i))
      },
      h.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners && e.split(' ').forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [
          ] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (n, o) {
            (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(o, 1)
          })
        }),
        i
      },
      h.prototype.emit = function () {
        for (var e = [
        ], t = arguments.length; t--; ) e[t] = arguments[t];
        var i,
        n,
        o,
        r = this;
        return r.eventsListeners && ('string' == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), o = r)  : (i = e[0].events, n = e[0].data, o = e[0].context || r), (Array.isArray(i) ? i : i.split(' ')).forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            var t = [
            ];
            r.eventsListeners[e].forEach(function (e) {
              t.push(e)
            }),
            t.forEach(function (e) {
              e.apply(o, n)
            })
          }
        })),
        r
      },
      h.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i];
          n.params && u.extend(e, n.params)
        })
      },
      h.prototype.useModules = function (e) {
        void 0 === e && (e = {
        });
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i],
          o = e[i] || {
          };
          n.instance && Object.keys(n.instance).forEach(function (e) {
            var i = n.instance[e];
            t[e] = 'function' == typeof i ? i.bind(t)  : i
          }),
          n.on && t.on && Object.keys(n.on).forEach(function (e) {
            t.on(e, n.on[e])
          }),
          n.create && n.create.bind(t) (o)
        })
      },
      v.components.set = function (e) {
        this.use && this.use(e)
      },
      h.installModule = function (e) {
        for (var t = [
        ], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {
        });
        var o = e.name || Object.keys(n.prototype.modules).length + '_' + u.now();
        return (n.prototype.modules[o] = e).proto && Object.keys(e.proto).forEach(function (t) {
          n.prototype[t] = e.proto[t]
        }),
        e['static'] && Object.keys(e['static']).forEach(function (t) {
          n[t] = e['static'][t]
        }),
        e.install && e.install.apply(n, t),
        n
      },
      h.use = function (e) {
        for (var t = [
        ], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
          return n.installModule(e)
        }), n)  : n.installModule.apply(n, [
          e
        ].concat(t))
      },
      Object.defineProperties(h, v);
      var m = {
        updateSize: function () {
          var e,
          t,
          i = this,
          n = i.$el;
          e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth,
          t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight,
          0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css('padding-left'), 10) - parseInt(n.css('padding-right'), 10), t = t - parseInt(n.css('padding-top'), 10) - parseInt(n.css('padding-bottom'), 10), u.extend(i, {
            width: e,
            height: t,
            size: i.isHorizontal() ? e : t
          }))
        },
        updateSlides: function () {
          var e = this,
          t = e.params,
          i = e.$wrapperEl,
          n = e.size,
          r = e.rtlTranslate,
          a = e.wrongRTL,
          s = e.virtual && t.virtual.enabled,
          l = s ? e.virtual.slides.length : e.slides.length,
          c = i.children('.' + e.params.slideClass),
          d = s ? e.virtual.slides.length : c.length,
          f = [
          ],
          h = [
          ],
          v = [
          ],
          m = t.slidesOffsetBefore;
          'function' == typeof m && (m = t.slidesOffsetBefore.call(e));
          var g = t.slidesOffsetAfter;
          'function' == typeof g && (g = t.slidesOffsetAfter.call(e));
          var y = e.snapGrid.length,
          _ = e.snapGrid.length,
          w = t.spaceBetween,
          b = - m,
          x = 0,
          T = 0;
          if (void 0 !== n) {
            var k,
            S;
            'string' == typeof w && 0 <= w.indexOf('%') && (w = parseFloat(w.replace('%', '')) / 100 * n),
            e.virtualSize = - w,
            r ? c.css({
              marginLeft: '',
              marginTop: ''
            })  : c.css({
              marginRight: '',
              marginBottom: ''
            }),
            1 < t.slidesPerColumn && (k = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, 'auto' !== t.slidesPerView && 'row' === t.slidesPerColumnFill && (k = Math.max(k, t.slidesPerView * t.slidesPerColumn)));
            for (var E, C = t.slidesPerColumn, P = k / C, q = Math.floor(d / t.slidesPerColumn), I = 0; I < d; I += 1) {
              S = 0;
              var O = c.eq(I);
              if (1 < t.slidesPerColumn) {
                var A = void 0,
                M = void 0,
                $ = void 0;
                'column' === t.slidesPerColumnFill ? ($ = I - (M = Math.floor(I / C)) * C, (q < M || M === q && $ === C - 1) && C <= ($ += 1) && ($ = 0, M += 1), A = M + $ * k / C, O.css({
                  '-webkit-box-ordinal-group': A,
                  '-moz-box-ordinal-group': A,
                  '-ms-flex-order': A,
                  '-webkit-order': A,
                  order: A
                }))  : M = I - ($ = Math.floor(I / P)) * P,
                O.css('margin-' + (e.isHorizontal() ? 'top' : 'left'), 0 !== $ && t.spaceBetween && t.spaceBetween + 'px').attr('data-swiper-column', M).attr('data-swiper-row', $)
              }
              if ('none' !== O.css('display')) {
                if ('auto' === t.slidesPerView) {
                  var j = o.getComputedStyle(O[0], null),
                  L = O[0].style.transform,
                  D = O[0].style.webkitTransform;
                  if (L && (O[0].style.transform = 'none'), D && (O[0].style.webkitTransform = 'none'), t.roundLengths) S = e.isHorizontal() ? O.outerWidth(!0)  : O.outerHeight(!0);
                   else if (e.isHorizontal()) {
                    var N = parseFloat(j.getPropertyValue('width')),
                    z = parseFloat(j.getPropertyValue('padding-left')),
                    B = parseFloat(j.getPropertyValue('padding-right')),
                    R = parseFloat(j.getPropertyValue('margin-left')),
                    U = parseFloat(j.getPropertyValue('margin-right')),
                    V = j.getPropertyValue('box-sizing');
                    S = V && 'border-box' === V ? N + R + U : N + z + B + R + U
                  } else {
                    var W = parseFloat(j.getPropertyValue('height')),
                    X = parseFloat(j.getPropertyValue('padding-top')),
                    H = parseFloat(j.getPropertyValue('padding-bottom')),
                    Y = parseFloat(j.getPropertyValue('margin-top')),
                    F = parseFloat(j.getPropertyValue('margin-bottom')),
                    Q = j.getPropertyValue('box-sizing');
                    S = Q && 'border-box' === Q ? W + Y + F : W + X + H + Y + F
                  }
                  L && (O[0].style.transform = L),
                  D && (O[0].style.webkitTransform = D),
                  t.roundLengths && (S = Math.floor(S))
                } else S = (n - (t.slidesPerView - 1) * w) / t.slidesPerView,
                t.roundLengths && (S = Math.floor(S)),
                c[I] && (e.isHorizontal() ? c[I].style.width = S + 'px' : c[I].style.height = S + 'px');
                c[I] && (c[I].swiperSlideSize = S),
                v.push(S),
                t.centeredSlides ? (b = b + S / 2 + x / 2 + w, 0 === x && 0 !== I && (b = b - n / 2 - w), 0 === I && (b = b - n / 2 - w), Math.abs(b) < 0.001 && (b = 0), t.roundLengths && (b = Math.floor(b)), T % t.slidesPerGroup == 0 && f.push(b), h.push(b))  : (t.roundLengths && (b = Math.floor(b)), T % t.slidesPerGroup == 0 && f.push(b), h.push(b), b = b + S + w),
                e.virtualSize += S + w,
                x = S,
                T += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, n) + g, r && a && ('slide' === t.effect || 'coverflow' === t.effect) && i.css({
              width: e.virtualSize + t.spaceBetween + 'px'
            }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
              width: e.virtualSize + t.spaceBetween + 'px'
            })  : i.css({
              height: e.virtualSize + t.spaceBetween + 'px'
            })), 1 < t.slidesPerColumn && (e.virtualSize = (S + t.spaceBetween) * k, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
              width: e.virtualSize + t.spaceBetween + 'px'
            })  : i.css({
              height: e.virtualSize + t.spaceBetween + 'px'
            }), t.centeredSlides)) {
              E = [
              ];
              for (var G = 0; G < f.length; G += 1) {
                var J = f[G];
                t.roundLengths && (J = Math.floor(J)),
                f[G] < e.virtualSize + f[0] && E.push(J)
              }
              f = E
            }
            if (!t.centeredSlides) {
              E = [
              ];
              for (var K = 0; K < f.length; K += 1) {
                var Z = f[K];
                t.roundLengths && (Z = Math.floor(Z)),
                f[K] <= e.virtualSize - n && E.push(Z)
              }
              f = E,
              1 < Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) && f.push(e.virtualSize - n)
            }
            if (0 === f.length && (f = [
              0
            ]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? c.css({
              marginLeft: w + 'px'
            })  : c.css({
              marginRight: w + 'px'
            })  : c.css({
              marginBottom: w + 'px'
            })), t.centerInsufficientSlides) {
              var ee = 0;
              if (v.forEach(function (e) {
                ee += e + (t.spaceBetween ? t.spaceBetween : 0)
              }), (ee -= t.spaceBetween) < n) {
                var te = (n - ee) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - te
                }),
                h.forEach(function (e, t) {
                  h[t] = e + te
                })
              }
            }
            u.extend(e, {
              slides: c,
              snapGrid: f,
              slidesGrid: h,
              slidesSizesGrid: v
            }),
            d !== l && e.emit('slidesLengthChange'),
            f.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
            h.length !== _ && e.emit('slidesGridLengthChange'),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
          }
        },
        updateAutoHeight: function (e) {
          var t,
          i = this,
          n = [
          ],
          o = 0;
          if ('number' == typeof e ? i.setTransition(e)  : !0 === e && i.setTransition(i.params.speed), 'auto' !== i.params.slidesPerView && 1 < i.params.slidesPerView) for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
            var r = i.activeIndex + t;
            if (r > i.slides.length) break;
            n.push(i.slides.eq(r) [0])
          } else n.push(i.slides.eq(i.activeIndex) [0]);
          for (t = 0; t < n.length; t += 1) if (void 0 !== n[t]) {
            var a = n[t].offsetHeight;
            o = o < a ? a : o
          }
          o && i.$wrapperEl.css('height', o + 'px')
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function (t) {
          void 0 === t && (t = this && this.translate || 0);
          var i = this,
          n = i.params,
          o = i.slides,
          r = i.rtlTranslate;
          if (0 !== o.length) {
            void 0 === o[0].swiperSlideOffset && i.updateSlidesOffset();
            var a = - t;
            r && (a = t),
            o.removeClass(n.slideVisibleClass),
            i.visibleSlidesIndexes = [
            ],
            i.visibleSlides = [
            ];
            for (var s = 0; s < o.length; s += 1) {
              var l = o[s],
              c = (a + (n.centeredSlides ? i.minTranslate()  : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + n.spaceBetween);
              if (n.watchSlidesVisibility) {
                var d = - (a - l.swiperSlideOffset),
                u = d + i.slidesSizesGrid[s];
                (0 <= d && d < i.size || 0 < u && u <= i.size || d <= 0 && u >= i.size) && (i.visibleSlides.push(l), i.visibleSlidesIndexes.push(s), o.eq(s).addClass(n.slideVisibleClass))
              }
              l.progress = r ? - c : c
            }
            i.visibleSlides = e(i.visibleSlides)
          }
        },
        updateProgress: function (e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this,
          i = t.params,
          n = t.maxTranslate() - t.minTranslate(),
          o = t.progress,
          r = t.isBeginning,
          a = t.isEnd,
          s = r,
          l = a;
          0 === n ? a = r = !(o = 0)  : (r = (o = (e - t.minTranslate()) / n) <= 0, a = 1 <= o),
          u.extend(t, {
            progress: o,
            isBeginning: r,
            isEnd: a
          }),
          (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e),
          r && !s && t.emit('reachBeginning toEdge'),
          a && !l && t.emit('reachEnd toEdge'),
          (s && !r || l && !a) && t.emit('fromEdge'),
          t.emit('progress', o)
        },
        updateSlidesClasses: function () {
          var e,
          t = this,
          i = t.slides,
          n = t.params,
          o = t.$wrapperEl,
          r = t.activeIndex,
          a = t.realIndex,
          s = t.virtual && n.virtual.enabled;
          i.removeClass(n.slideActiveClass + ' ' + n.slideNextClass + ' ' + n.slidePrevClass + ' ' + n.slideDuplicateActiveClass + ' ' + n.slideDuplicateNextClass + ' ' + n.slideDuplicatePrevClass),
          (e = s ? t.$wrapperEl.find('.' + n.slideClass + '[data-swiper-slide-index="' + r + '"]')  : i.eq(r)).addClass(n.slideActiveClass),
          n.loop && (e.hasClass(n.slideDuplicateClass) ? o.children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass)  : o.children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
          var l = e.nextAll('.' + n.slideClass).eq(0).addClass(n.slideNextClass);
          n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
          var c = e.prevAll('.' + n.slideClass).eq(0).addClass(n.slidePrevClass);
          n.loop && 0 === c.length && (c = i.eq( - 1)).addClass(n.slidePrevClass),
          n.loop && (l.hasClass(n.slideDuplicateClass) ? o.children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(n.slideDuplicateNextClass)  : o.children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? o.children('.' + n.slideClass + ':not(.' + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]').addClass(n.slideDuplicatePrevClass)  : o.children('.' + n.slideClass + '.' + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]').addClass(n.slideDuplicatePrevClass))
        },
        updateActiveIndex: function (e) {
          var t,
          i = this,
          n = i.rtlTranslate ? i.translate : - i.translate,
          o = i.slidesGrid,
          r = i.snapGrid,
          a = i.params,
          s = i.activeIndex,
          l = i.realIndex,
          c = i.snapIndex,
          d = e;
          if (void 0 === d) {
            for (var p = 0; p < o.length; p += 1) void 0 !== o[p + 1] ? n >= o[p] && n < o[p + 1] - (o[p + 1] - o[p]) / 2 ? d = p : n >= o[p] && n < o[p + 1] && (d = p + 1)  : n >= o[p] && (d = p);
            a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
          }
          if ((t = 0 <= r.indexOf(n) ? r.indexOf(n)  : Math.floor(d / a.slidesPerGroup)) >= r.length && (t = r.length - 1), d !== s) {
            var f = parseInt(i.slides.eq(d).attr('data-swiper-slide-index') || d, 10);
            u.extend(i, {
              snapIndex: t,
              realIndex: f,
              previousIndex: s,
              activeIndex: d
            }),
            i.emit('activeIndexChange'),
            i.emit('snapIndexChange'),
            l !== f && i.emit('realIndexChange'),
            i.emit('slideChange')
          } else t !== c && (i.snapIndex = t, i.emit('snapIndexChange'))
        },
        updateClickedSlide: function (t) {
          var i = this,
          n = i.params,
          o = e(t.target).closest('.' + n.slideClass) [0],
          r = !1;
          if (o) for (var a = 0; a < i.slides.length; a += 1) i.slides[a] === o && (r = !0);
          return o && r ? (i.clickedSlide = o, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(e(o).attr('data-swiper-slide-index'), 10)  : i.clickedIndex = e(o).index(), n.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide(), void 0)  : (i.clickedSlide = void 0, void (i.clickedIndex = void 0))
        }
      },
      g = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          var t = this.params,
          i = this.rtlTranslate,
          n = this.translate,
          o = this.$wrapperEl;
          if (t.virtualTranslate) return i ? - n : n;
          var r = u.getTranslate(o[0], e);
          return i && (r = - r),
          r || 0
        },
        setTranslate: function (e, t) {
          var i = this,
          n = i.rtlTranslate,
          o = i.params,
          r = i.$wrapperEl,
          a = i.progress,
          s = 0,
          l = 0;
          i.isHorizontal() ? s = n ? - e : e : l = e,
          o.roundLengths && (s = Math.floor(s), l = Math.floor(l)),
          o.virtualTranslate || (p.transforms3d ? r.transform('translate3d(' + s + 'px, ' + l + 'px, 0px)')  : r.transform('translate(' + s + 'px, ' + l + 'px)')),
          i.previousTranslate = i.translate,
          i.translate = i.isHorizontal() ? s : l;
          var c = i.maxTranslate() - i.minTranslate();
          (0 === c ? 0 : (e - i.minTranslate()) / c) !== a && i.updateProgress(e),
          i.emit('setTranslate', i.translate, t)
        },
        minTranslate: function () {
          return - this.snapGrid[0]
        },
        maxTranslate: function () {
          return - this.snapGrid[this.snapGrid.length - 1]
        }
      },
      y = {
        setTransition: function (e, t) {
          this.$wrapperEl.transition(e),
          this.emit('setTransition', e, t)
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this,
          n = i.activeIndex,
          o = i.params,
          r = i.previousIndex;
          o.autoHeight && i.updateAutoHeight();
          var a = t;
          if (a || (a = r < n ? 'next' : n < r ? 'prev' : 'reset'), i.emit('transitionStart'), e && n !== r) {
            if ('reset' === a) return void i.emit('slideResetTransitionStart');
            i.emit('slideChangeTransitionStart'),
            'next' === a ? i.emit('slideNextTransitionStart')  : i.emit('slidePrevTransitionStart')
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this,
          n = i.activeIndex,
          o = i.previousIndex;
          i.animating = !1,
          i.setTransition(0);
          var r = t;
          if (r || (r = o < n ? 'next' : n < o ? 'prev' : 'reset'), i.emit('transitionEnd'), e && n !== o) {
            if ('reset' === r) return void i.emit('slideResetTransitionEnd');
            i.emit('slideChangeTransitionEnd'),
            'next' === r ? i.emit('slideNextTransitionEnd')  : i.emit('slidePrevTransitionEnd')
          }
        }
      },
      _ = {
        slideTo: function (e, t, i, n) {
          void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0);
          var o = this,
          r = e;
          r < 0 && (r = 0);
          var a = o.params,
          s = o.snapGrid,
          l = o.slidesGrid,
          c = o.previousIndex,
          d = o.activeIndex,
          u = o.rtlTranslate;
          if (o.animating && a.preventInteractionOnTransition) return !1;
          var f = Math.floor(r / a.slidesPerGroup);
          f >= s.length && (f = s.length - 1),
          (d || a.initialSlide || 0) === (c || 0) && i && o.emit('beforeSlideChangeStart');
          var h,
          v = - s[f];
          if (o.updateProgress(v), a.normalizeSlideIndex) for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m);
          if (o.initialized && r !== d) {
            if (!o.allowSlideNext && v < o.translate && v < o.minTranslate()) return !1;
            if (!o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (d || 0) !== r) return !1
          }
          return h = d < r ? 'next' : r < d ? 'prev' : 'reset',
          u && - v === o.translate || !u && v === o.translate ? (o.updateActiveIndex(r), a.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), 'slide' !== a.effect && o.setTranslate(v), 'reset' !== h && (o.transitionStart(i, h), o.transitionEnd(i, h)), !1)  : (0 !== t && p.transition ? (o.setTransition(t), o.setTranslate(v), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit('beforeTransitionStart', t, n), o.transitionStart(i, h), o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function (e) {
            o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener('transitionend', o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener('webkitTransitionEnd', o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(i, h))
          }), o.$wrapperEl[0].addEventListener('transitionend', o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener('webkitTransitionEnd', o.onSlideToWrapperTransitionEnd)))  : (o.setTransition(0), o.setTranslate(v), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit('beforeTransitionStart', t, n), o.transitionStart(i, h), o.transitionEnd(i, h)), !0)
        },
        slideToLoop: function (e, t, i, n) {
          void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0);
          var o = e;
          return this.params.loop && (o += this.loopedSlides),
          this.slideTo(o, t, i, n)
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          var n = this,
          o = n.params,
          r = n.animating;
          return o.loop ? !r && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + o.slidesPerGroup, e, t, i))  : n.slideTo(n.activeIndex + o.slidesPerGroup, e, t, i)
        },
        slidePrev: function (e, t, i) {
          function n(e) {
            return e < 0 ? - Math.floor(Math.abs(e))  : Math.floor(e)
          }
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          var o = this,
          r = o.params,
          a = o.animating,
          s = o.snapGrid,
          l = o.slidesGrid,
          c = o.rtlTranslate;
          if (r.loop) {
            if (a) return !1;
            o.loopFix(),
            o._clientLeft = o.$wrapperEl[0].clientLeft
          }
          var d,
          u = n(c ? o.translate : - o.translate),
          p = s.map(function (e) {
            return n(e)
          }),
          f = (l.map(function (e) {
            return n(e)
          }), s[p.indexOf(u)], s[p.indexOf(u) - 1]);
          return void 0 !== f && (d = l.indexOf(f)) < 0 && (d = o.activeIndex - 1),
          o.slideTo(d, e, t, i)
        },
        slideReset: function (e, t, i) {
          return void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function (e, t, i) {
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0);
          var n = this,
          o = n.activeIndex,
          r = Math.floor(o / n.params.slidesPerGroup);
          if (r < n.snapGrid.length - 1) {
            var a = n.rtlTranslate ? n.translate : - n.translate,
            s = n.snapGrid[r];
            (n.snapGrid[r + 1] - s) / 2 < a - s && (o = n.params.slidesPerGroup)
          }
          return n.slideTo(o, e, t, i)
        },
        slideToClickedSlide: function () {
          var t,
          i = this,
          n = i.params,
          o = i.$wrapperEl,
          r = 'auto' === n.slidesPerView ? i.slidesPerViewDynamic()  : n.slidesPerView,
          a = i.clickedIndex;
          if (n.loop) {
            if (i.animating) return;
            t = parseInt(e(i.clickedSlide).attr('data-swiper-slide-index'), 10),
            n.centeredSlides ? a < i.loopedSlides - r / 2 || a > i.slides.length - i.loopedSlides + r / 2 ? (i.loopFix(), a = o.children('.' + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ')').eq(0).index(), u.nextTick(function () {
              i.slideTo(a)
            }))  : i.slideTo(a)  : a > i.slides.length - r ? (i.loopFix(), a = o.children('.' + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ')').eq(0).index(), u.nextTick(function () {
              i.slideTo(a)
            }))  : i.slideTo(a)
          } else i.slideTo(a)
        }
      },
      w = {
        loopCreate: function () {
          var t = this,
          i = t.params,
          o = t.$wrapperEl;
          o.children('.' + i.slideClass + '.' + i.slideDuplicateClass).remove();
          var r = o.children('.' + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var a = i.slidesPerGroup - r.length % i.slidesPerGroup;
            if (a !== i.slidesPerGroup) {
              for (var s = 0; s < a; s += 1) {
                var l = e(n.createElement('div')).addClass(i.slideClass + ' ' + i.slideBlankClass);
                o.append(l)
              }
              r = o.children('.' + i.slideClass)
            }
          }
          'auto' !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
          t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10),
          t.loopedSlides += i.loopAdditionalSlides,
          t.loopedSlides > r.length && (t.loopedSlides = r.length);
          var c = [
          ],
          d = [
          ];
          r.each(function (i, n) {
            var o = e(n);
            i < t.loopedSlides && d.push(n),
            i < r.length && i >= r.length - t.loopedSlides && c.push(n),
            o.attr('data-swiper-slide-index', i)
          });
          for (var u = 0; u < d.length; u += 1) o.append(e(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var p = c.length - 1; 0 <= p; p -= 1) o.prepend(e(c[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function () {
          var e,
          t = this,
          i = t.params,
          n = t.activeIndex,
          o = t.slides,
          r = t.loopedSlides,
          a = t.allowSlidePrev,
          s = t.allowSlideNext,
          l = t.snapGrid,
          c = t.rtlTranslate;
          t.allowSlidePrev = !0,
          t.allowSlideNext = !0;
          var d = - l[n] - t.getTranslate();
          n < r ? (e = o.length - 3 * r + n, e += r, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? - t.translate : t.translate) - d))  : ('auto' === i.slidesPerView && 2 * r <= n || n >= o.length - r) && (e = - o.length + n + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? - t.translate : t.translate) - d)),
          t.allowSlidePrev = a,
          t.allowSlideNext = s
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
          e.children('.' + t.slideClass + '.' + t.slideDuplicateClass + ',.' + t.slideClass + '.' + t.slideBlankClass).remove(),
          i.removeAttr('data-swiper-slide-index')
        }
      },
      b = {
        setGrabCursor: function (e) {
          if (!(p.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
            var t = this.el;
            t.style.cursor = 'move',
            t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab',
            t.style.cursor = e ? '-moz-grabbin' : '-moz-grab',
            t.style.cursor = e ? 'grabbing' : 'grab'
          }
        },
        unsetGrabCursor: function () {
          p.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = '')
        }
      },
      x = {
        appendSlide: function (e) {
          var t = this,
          i = t.$wrapperEl,
          n = t.params;
          if (n.loop && t.loopDestroy(), 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) for (var o = 0; o < e.length; o += 1) e[o] && i.append(e[o]);
           else i.append(e);
          n.loop && t.loopCreate(),
          n.observer && p.observer || t.update()
        },
        prependSlide: function (e) {
          var t = this,
          i = t.params,
          n = t.$wrapperEl,
          o = t.activeIndex;
          i.loop && t.loopDestroy();
          var r = o + 1;
          if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) {
            for (var a = 0; a < e.length; a += 1) e[a] && n.prepend(e[a]);
            r = o + e.length
          } else n.prepend(e);
          i.loop && t.loopCreate(),
          i.observer && p.observer || t.update(),
          t.slideTo(r, 0, !1)
        },
        addSlide: function (e, t) {
          var i = this,
          n = i.$wrapperEl,
          o = i.params,
          r = i.activeIndex;
          o.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = n.children('.' + o.slideClass));
          var a = i.slides.length;
          if (e <= 0) i.prependSlide(t);
           else if (a <= e) i.appendSlide(t);
           else {
            for (var s = e < r ? r + 1 : r, l = [
            ], c = a - 1; e <= c; c -= 1) {
              var d = i.slides.eq(c);
              d.remove(),
              l.unshift(d)
            }
            if ('object' == ('undefined' == typeof t ? 'undefined' : _typeof2(t)) && 'length' in t) {
              for (var u = 0; u < t.length; u += 1) t[u] && n.append(t[u]);
              s = e < r ? r + t.length : r
            } else n.append(t);
            for (var f = 0; f < l.length; f += 1) n.append(l[f]);
            o.loop && i.loopCreate(),
            o.observer && p.observer || i.update(),
            o.loop ? i.slideTo(s + i.loopedSlides, 0, !1)  : i.slideTo(s, 0, !1)
          }
        },
        removeSlide: function (e) {
          var t = this,
          i = t.params,
          n = t.$wrapperEl,
          o = t.activeIndex;
          i.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = n.children('.' + i.slideClass));
          var r,
          a = o;
          if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) {
            for (var s = 0; s < e.length; s += 1) r = e[s],
            t.slides[r] && t.slides.eq(r).remove(),
            r < a && (a -= 1);
            a = Math.max(a, 0)
          } else r = e,
          t.slides[r] && t.slides.eq(r).remove(),
          r < a && (a -= 1),
          a = Math.max(a, 0);
          i.loop && t.loopCreate(),
          i.observer && p.observer || t.update(),
          i.loop ? t.slideTo(a + t.loopedSlides, 0, !1)  : t.slideTo(a, 0, !1)
        },
        removeAllSlides: function () {
          for (var e = [
          ], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e)
        }
      },
      T = function () {
        var e = o.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: o.cordova || o.phonegap,
          phonegap: o.cordova || o.phonegap
        },
        i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        a = e.match(/(iPad).*OS\s([\d_]+)/),
        s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = 'windows', t.osVersion = i[2], t.windows = !0), r && !i && (t.os = 'android', t.osVersion = r[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf('chrome')), (a || l || s) && (t.os = 'ios', t.ios = !0), l && !s && (t.osVersion = l[2].replace(/_/g, '.'), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, '.'), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, '.')  : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf('Version/') && '10' === t.osVersion.split('.') [0] && (t.osVersion = e.toLowerCase().split('version/') [1].split(' ') [0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || a || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && 'ios' === t.os) {
          var c = t.osVersion.split('.'),
          d = n.querySelector('meta[name="viewport"]');
          t.minimalUi = !t.webView && (s || l) && (1 * c[0] == 7 ? 1 <= 1 * c[1] : 7 < 1 * c[0]) && d && 0 <= d.getAttribute('content').indexOf('minimal-ui')
        }
        return t.pixelRatio = o.devicePixelRatio || 1,
        t
      }(),
      k = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0
      },
      S = {
        update: m,
        translate: g,
        transition: y,
        slide: _,
        loop: w,
        grabCursor: b,
        manipulation: x,
        events: {
          attachEvents: function () {
            var t = this,
            r = t.params,
            a = t.touchEvents,
            s = t.el,
            l = t.wrapperEl;
            t.onTouchStart = function (t) {
              var i = this,
              r = i.touchEventsData,
              a = i.params,
              s = i.touches;
              if (!i.animating || !a.preventInteractionOnTransition) {
                var l = t;
                if (l.originalEvent && (l = l.originalEvent), r.isTouchEvent = 'touchstart' === l.type, (r.isTouchEvent || !('which' in l) || 3 !== l.which) && !(!r.isTouchEvent && 'button' in l && 0 < l.button || r.isTouched && r.isMoved)) if (a.noSwiping && e(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : '.' + a.noSwipingClass) [0]) i.allowClick = !0;
                 else if (!a.swipeHandler || e(l).closest(a.swipeHandler) [0]) {
                  s.currentX = 'touchstart' === l.type ? l.targetTouches[0].pageX : l.pageX,
                  s.currentY = 'touchstart' === l.type ? l.targetTouches[0].pageY : l.pageY;
                  var c = s.currentX,
                  d = s.currentY,
                  p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                  f = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                  if (!p || !(c <= f || c >= o.screen.width - f)) {
                    if (u.extend(r, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }), s.startX = c, s.startY = d, r.touchStartTime = u.now(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, 0 < a.threshold && (r.allowThresholdMove = !1), 'touchstart' !== l.type) {
                      var h = !0;
                      e(l.target).is(r.formElements) && (h = !1),
                      n.activeElement && e(n.activeElement).is(r.formElements) && n.activeElement !== l.target && n.activeElement.blur();
                      var v = h && i.allowTouchMove && a.touchStartPreventDefault;
                      (a.touchStartForcePreventDefault || v) && l.preventDefault()
                    }
                    i.emit('touchStart', l)
                  }
                }
              }
            }.bind(t),
            t.onTouchMove = function (t) {
              var i = this,
              o = i.touchEventsData,
              r = i.params,
              a = i.touches,
              s = i.rtlTranslate,
              l = t;
              if (l.originalEvent && (l = l.originalEvent), o.isTouched) {
                if (!o.isTouchEvent || 'mousemove' !== l.type) {
                  var c = 'touchmove' === l.type ? l.targetTouches[0].pageX : l.pageX,
                  d = 'touchmove' === l.type ? l.targetTouches[0].pageY : l.pageY;
                  if (l.preventedByNestedSwiper) return a.startX = c,
                  void (a.startY = d);
                  if (!i.allowTouchMove) return i.allowClick = !1,
                  void (o.isTouched && (u.extend(a, {
                    startX: c,
                    startY: d,
                    currentX: c,
                    currentY: d
                  }), o.touchStartTime = u.now()));
                  if (o.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (i.isVertical()) {
                    if (d < a.startY && i.translate <= i.maxTranslate() || d > a.startY && i.translate >= i.minTranslate()) return o.isTouched = !1,
                    void (o.isMoved = !1)
                  } else if (c < a.startX && i.translate <= i.maxTranslate() || c > a.startX && i.translate >= i.minTranslate()) return;
                  if (o.isTouchEvent && n.activeElement && l.target === n.activeElement && e(l.target).is(o.formElements)) return o.isMoved = !0,
                  void (i.allowClick = !1);
                  if (o.allowTouchCallbacks && i.emit('touchMove', l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                    a.currentX = c,
                    a.currentY = d;
                    var p,
                    f = a.currentX - a.startX,
                    h = a.currentY - a.startY;
                    if (!(i.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2)) < i.params.threshold)) if (void 0 === o.isScrolling && (i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? o.isScrolling = !1 : 25 <= f * f + h * h && (p = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, o.isScrolling = i.isHorizontal() ? p > r.touchAngle : 90 - p > r.touchAngle)), o.isScrolling && i.emit('touchMoveOpposite', l), void 0 === o.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (o.startMoving = !0)), o.isScrolling) o.isTouched = !1;
                     else if (o.startMoving) {
                      i.allowClick = !1,
                      l.preventDefault(),
                      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
                      o.isMoved || (r.loop && i.loopFix(), o.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger('webkitTransitionEnd transitionend'), o.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit('sliderFirstMove', l)),
                      i.emit('sliderMove', l),
                      o.isMoved = !0;
                      var v = i.isHorizontal() ? f : h;
                      a.diff = v,
                      v *= r.touchRatio,
                      s && (v = - v),
                      i.swipeDirection = 0 < v ? 'prev' : 'next',
                      o.currentTranslate = v + o.startTranslate;
                      var m = !0,
                      g = r.resistanceRatio;
                      if (r.touchReleaseOnEdges && (g = 0), 0 < v && o.currentTranslate > i.minTranslate() ? (m = !1, r.resistance && (o.currentTranslate = i.minTranslate() - 1 + Math.pow( - i.minTranslate() + o.startTranslate + v, g)))  : v < 0 && o.currentTranslate < i.maxTranslate() && (m = !1, r.resistance && (o.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - o.startTranslate - v, g))), m && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && 'next' === i.swipeDirection && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate), !i.allowSlidePrev && 'prev' === i.swipeDirection && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate), 0 < r.threshold) {
                        if (!(Math.abs(v) > r.threshold || o.allowThresholdMove)) return void (o.currentTranslate = o.startTranslate);
                        if (!o.allowThresholdMove) return o.allowThresholdMove = !0,
                        a.startX = a.currentX,
                        a.startY = a.currentY,
                        o.currentTranslate = o.startTranslate,
                        void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                      }
                      r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === o.velocities.length && o.velocities.push({
                        position: a[i.isHorizontal() ? 'startX' : 'startY'],
                        time: o.touchStartTime
                      }), o.velocities.push({
                        position: a[i.isHorizontal() ? 'currentX' : 'currentY'],
                        time: u.now()
                      })), i.updateProgress(o.currentTranslate), i.setTranslate(o.currentTranslate))
                    }
                  }
                }
              } else o.startMoving && o.isScrolling && i.emit('touchMoveOpposite', l)
            }.bind(t),
            t.onTouchEnd = function (e) {
              var t = this,
              i = t.touchEventsData,
              n = t.params,
              o = t.touches,
              r = t.rtlTranslate,
              a = t.$wrapperEl,
              s = t.slidesGrid,
              l = t.snapGrid,
              c = e;
              if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit('touchEnd', c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1),
              i.isMoved = !1,
              void (i.startMoving = !1);
              n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
              var d,
              p = u.now(),
              f = p - i.touchStartTime;
              if (t.allowClick && (t.updateClickedSlide(c), t.emit('tap', c), f < 300 && 300 < p - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = u.nextTick(function () {
                t && !t.destroyed && t.emit('click', c)
              }, 300)), f < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit('doubleTap', c))), i.lastClickTime = u.now(), u.nextTick(function () {
                t.destroyed || (t.allowClick = !0)
              }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === o.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1,
              i.isMoved = !1,
              void (i.startMoving = !1);
              if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, d = n.followFinger ? r ? t.translate : - t.translate : - i.currentTranslate, n.freeMode) {
                if (d < - t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (d > - t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1)  : t.slideTo(t.slides.length - 1));
                if (n.freeModeMomentum) {
                  if (1 < i.velocities.length) {
                    var h = i.velocities.pop(),
                    v = i.velocities.pop(),
                    m = h.position - v.position,
                    g = h.time - v.time;
                    t.velocity = m / g,
                    t.velocity /= 2,
                    Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                    (150 < g || 300 < u.now() - h.time) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= n.freeModeMomentumVelocityRatio,
                  i.velocities.length = 0;
                  var y = 1000 * n.freeModeMomentumRatio,
                  _ = t.velocity * y,
                  w = t.translate + _;
                  r && (w = - w);
                  var b,
                  x,
                  T = !1,
                  k = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                  if (w < t.maxTranslate()) n.freeModeMomentumBounce ? (w + t.maxTranslate() < - k && (w = t.maxTranslate() - k), b = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0)  : w = t.maxTranslate(),
                  n.loop && n.centeredSlides && (x = !0);
                   else if (w > t.minTranslate()) n.freeModeMomentumBounce ? (w - t.minTranslate() > k && (w = t.minTranslate() + k), b = t.minTranslate(), T = !0, i.allowMomentumBounce = !0)  : w = t.minTranslate(),
                  n.loop && n.centeredSlides && (x = !0);
                   else if (n.freeModeSticky) {
                    for (var S, E = 0; E < l.length; E += 1) if (l[E] > - w) {
                      S = E;
                      break
                    }
                    w = - (w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || 'next' === t.swipeDirection ? l[S] : l[S - 1])
                  }
                  if (x && t.once('transitionEnd', function () {
                    t.loopFix()
                  }), 0 !== t.velocity) y = r ? Math.abs(( - w - t.translate) / t.velocity)  : Math.abs((w - t.translate) / t.velocity);
                   else if (n.freeModeSticky) return void t.slideToClosest();
                  n.freeModeMomentumBounce && T ? (t.updateProgress(b), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit('momentumBounce'), t.setTransition(n.speed), t.setTranslate(b), a.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd()
                    }))
                  }))  : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd()
                  })))  : t.updateProgress(w),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses()
                } else if (n.freeModeSticky) return void t.slideToClosest();
                (!n.freeModeMomentum || f >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              } else {
                for (var C = 0, P = t.slidesSizesGrid[0], q = 0; q < s.length; q += n.slidesPerGroup) void 0 !== s[q + n.slidesPerGroup] ? d >= s[q] && d < s[q + n.slidesPerGroup] && (P = s[(C = q) + n.slidesPerGroup] - s[q])  : d >= s[q] && (C = q, P = s[s.length - 1] - s[s.length - 2]);
                var I = (d - s[C]) / P;
                if (f > n.longSwipesMs) {
                  if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                  'next' === t.swipeDirection && (I >= n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup)  : t.slideTo(C)),
                  'prev' === t.swipeDirection && (I > 1 - n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup)  : t.slideTo(C))
                } else {
                  if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                  'next' === t.swipeDirection && t.slideTo(C + n.slidesPerGroup),
                  'prev' === t.swipeDirection && t.slideTo(C)
                }
              }
            }.bind(t),
            t.onClick = function (e) {
              this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(t);
            var c = 'container' === r.touchEventsTarget ? s : l,
            d = !!r.nested;
            if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
              if (p.touch) {
                var f = !('touchstart' !== a.start || !p.passiveListener || !r.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                c.addEventListener(a.start, t.onTouchStart, f),
                c.addEventListener(a.move, t.onTouchMove, p.passiveListener ? {
                  passive: !1,
                  capture: d
                }
                 : d),
                c.addEventListener(a.end, t.onTouchEnd, f)
              }(r.simulateTouch && !T.ios && !T.android || r.simulateTouch && !p.touch && T.ios) && (c.addEventListener('mousedown', t.onTouchStart, !1), n.addEventListener('mousemove', t.onTouchMove, d), n.addEventListener('mouseup', t.onTouchEnd, !1))
            } else c.addEventListener(a.start, t.onTouchStart, !1),
            n.addEventListener(a.move, t.onTouchMove, d),
            n.addEventListener(a.end, t.onTouchEnd, !1);
            (r.preventClicks || r.preventClicksPropagation) && c.addEventListener('click', t.onClick, !0),
            t.on(T.ios || T.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', i, !0)
          },
          detachEvents: function () {
            var e = this,
            t = e.params,
            o = e.touchEvents,
            r = e.el,
            a = e.wrapperEl,
            s = 'container' === t.touchEventsTarget ? r : a,
            l = !!t.nested;
            if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
              if (p.touch) {
                var c = !('onTouchStart' !== o.start || !p.passiveListener || !t.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                s.removeEventListener(o.start, e.onTouchStart, c),
                s.removeEventListener(o.move, e.onTouchMove, l),
                s.removeEventListener(o.end, e.onTouchEnd, c)
              }(t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !p.touch && T.ios) && (s.removeEventListener('mousedown', e.onTouchStart, !1), n.removeEventListener('mousemove', e.onTouchMove, l), n.removeEventListener('mouseup', e.onTouchEnd, !1))
            } else s.removeEventListener(o.start, e.onTouchStart, !1),
            n.removeEventListener(o.move, e.onTouchMove, l),
            n.removeEventListener(o.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener('click', e.onClick, !0),
            e.off(T.ios || T.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', i)
          }
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this,
            t = e.activeIndex,
            i = e.initialized,
            n = e.loopedSlides;
            void 0 === n && (n = 0);
            var o = e.params,
            r = o.breakpoints;
            if (r && (!r || 0 !== Object.keys(r).length)) {
              var a = e.getBreakpoint(r);
              if (a && e.currentBreakpoint !== a) {
                var s = a in r ? r[a] : void 0;
                s && [
                  'slidesPerView',
                  'spaceBetween',
                  'slidesPerGroup'
                ].forEach(function (e) {
                  var t = s[e];
                  void 0 !== t && (s[e] = 'slidesPerView' !== e || 'AUTO' !== t && 'auto' !== t ? 'slidesPerView' === e ? parseFloat(t)  : parseInt(t, 10)  : 'auto')
                });
                var l = s || e.originalParams,
                c = l.direction && l.direction !== o.direction,
                d = o.loop && (l.slidesPerView !== o.slidesPerView || c);
                c && i && e.changeDirection(),
                u.extend(e.params, l),
                u.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev
                }),
                e.currentBreakpoint = a,
                d && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', l)
              }
            }
          },
          getBreakpoint: function (e) {
            if (e) {
              var t = !1,
              i = [
              ];
              Object.keys(e).forEach(function (e) {
                i.push(e)
              }),
              i.sort(function (e, t) {
                return parseInt(e, 10) - parseInt(t, 10)
              });
              for (var n = 0; n < i.length; n += 1) {
                var r = i[n];
                this.params.breakpointsInverse ? r <= o.innerWidth && (t = r)  : r >= o.innerWidth && !t && (t = r)
              }
              return t || 'max'
            }
          }
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this,
            t = e.isLocked;
            e.isLocked = 1 === e.snapGrid.length,
            e.allowSlideNext = !e.isLocked,
            e.allowSlidePrev = !e.isLocked,
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
            t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
          }
        },
        classes: {
          addClasses: function () {
            var e = this.classNames,
            t = this.params,
            i = this.rtl,
            n = this.$el,
            o = [
            ];
            o.push('initialized'),
            o.push(t.direction),
            t.freeMode && o.push('free-mode'),
            p.flexbox || o.push('no-flexbox'),
            t.autoHeight && o.push('autoheight'),
            i && o.push('rtl'),
            1 < t.slidesPerColumn && o.push('multirow'),
            T.android && o.push('android'),
            T.ios && o.push('ios'),
            (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && o.push('wp8-' + t.direction),
            o.forEach(function (i) {
              e.push(t.containerModifierClass + i)
            }),
            n.addClass(e.join(' '))
          },
          removeClasses: function () {
            var e = this.$el,
            t = this.classNames;
            e.removeClass(t.join(' '))
          }
        },
        images: {
          loadImage: function (e, t, i, n, r, a) {
            function s() {
              a && a()
            }
            var l;
            e.complete && r ? s()  : t ? ((l = new o.Image).onload = s, l.onerror = s, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t))  : s()
          },
          preloadImages: function () {
            function e() {
              null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')))
            }
            var t = this;
            t.imagesToLoad = t.$el.find('img');
            for (var i = 0; i < t.imagesToLoad.length; i += 1) {
              var n = t.imagesToLoad[i];
              t.loadImage(n, n.currentSrc || n.getAttribute('src'), n.srcset || n.getAttribute('srcset'), n.sizes || n.getAttribute('sizes'), !0, e)
            }
          }
        }
      },
      E = {
      },
      C = function (t) {
        function i() {
          for (var n, o, r, a = [
          ], s = arguments.length; s--; ) a[s] = arguments[s];
          1 === a.length && a[0].constructor && a[0].constructor === Object ? r = a[0] : (o = (n = a) [0], r = n[1]),
          r || (r = {
          }),
          r = u.extend({
          }, r),
          o && !r.el && (r.el = o),
          t.call(this, r),
          Object.keys(S).forEach(function (e) {
            Object.keys(S[e]).forEach(function (t) {
              i.prototype[t] || (i.prototype[t] = S[e][t])
            })
          });
          var l = this;
          void 0 === l.modules && (l.modules = {
          }),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params) [0],
              n = t.params[i];
              if ('object' != ('undefined' == typeof n ? 'undefined' : _typeof2(n)) || null === n) return;
              if (!(i in r && 'enabled' in n)) return;
              !0 === r[i] && (r[i] = {
                enabled: !0
              }),
              'object' != _typeof2(r[i]) || 'enabled' in r[i] || (r[i].enabled = !0),
              r[i] || (r[i] = {
                enabled: !1
              })
            }
          });
          var c = u.extend({
          }, k);
          l.useModulesParams(c),
          l.params = u.extend({
          }, c, E, r),
          l.originalParams = u.extend({
          }, l.params),
          l.passedParams = u.extend({
          }, r);
          var d = (l.$ = e) (l.params.el);
          if (o = d[0]) {
            if (1 < d.length) {
              var f = [
              ];
              return d.each(function (e, t) {
                var n = u.extend({
                }, r, {
                  el: t
                });
                f.push(new i(n))
              }),
              f
            }
            o.swiper = l,
            d.data('swiper', l);
            var h,
            v,
            m = d.children('.' + l.params.wrapperClass);
            return u.extend(l, {
              $el: d,
              el: o,
              $wrapperEl: m,
              wrapperEl: m[0],
              classNames: [
              ],
              slides: e(),
              slidesGrid: [
              ],
              snapGrid: [
              ],
              slidesSizesGrid: [
              ],
              isHorizontal: function () {
                return 'horizontal' === l.params.direction
              },
              isVertical: function () {
                return 'vertical' === l.params.direction
              },
              rtl: 'rtl' === o.dir.toLowerCase() || 'rtl' === d.css('direction'),
              rtlTranslate: 'horizontal' === l.params.direction && ('rtl' === o.dir.toLowerCase() || 'rtl' === d.css('direction')),
              wrongRTL: '-webkit-box' === m.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents: (h = [
                'touchstart',
                'touchmove',
                'touchend'
              ], v = [
                'mousedown',
                'mousemove',
                'mouseup'
              ], p.pointerEvents ? v = [
                'pointerdown',
                'pointermove',
                'pointerup'
              ] : p.prefixedPointerEvents && (v = [
                'MSPointerDown',
                'MSPointerMove',
                'MSPointerUp'
              ]), l.touchEventsTouch = {
                start: h[0],
                move: h[1],
                end: h[2]
              }, l.touchEventsDesktop = {
                start: v[0],
                move: v[1],
                end: v[2]
              }, p.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: 'input, select, option, textarea, button, video',
                lastClickTime: u.now(),
                clickTimeout: void 0,
                velocities: [
                ],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [
              ],
              imagesLoaded: 0
            }),
            l.useModules(),
            l.params.init && l.init(),
            l
          }
        }
        t && (i.__proto__ = t);
        var n = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return ((i.prototype = Object.create(t && t.prototype)).constructor = i).prototype.slidesPerViewDynamic = function () {
          var e = this,
          t = e.params,
          i = e.slides,
          n = e.slidesGrid,
          o = e.size,
          r = e.activeIndex,
          a = 1;
          if (t.centeredSlides) {
            for (var s, l = i[r].swiperSlideSize, c = r + 1; c < i.length; c += 1) i[c] && !s && (a += 1, o < (l += i[c].swiperSlideSize) && (s = !0));
            for (var d = r - 1; 0 <= d; d -= 1) i[d] && !s && (a += 1, o < (l += i[d].swiperSlideSize) && (s = !0))
          } else for (var u = r + 1; u < i.length; u += 1) n[u] - n[r] < o && (a += 1);
          return a
        },
        i.prototype.update = function () {
          function e() {
            var e = t.rtlTranslate ? - 1 * t.translate : t.translate,
            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(i),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
          }
          var t = this;
          if (t && !t.destroyed) {
            var i = t.snapGrid,
            n = t.params;
            n.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight())  : (('auto' === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0)  : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
            n.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit('update')
          }
        },
        i.prototype.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this,
          n = i.params.direction;
          return e || (e = 'horizontal' === n ? 'vertical' : 'horizontal'),
          e === n || 'horizontal' !== e && 'vertical' !== e || ('vertical' === n && (i.$el.removeClass(i.params.containerModifierClass + 'vertical wp8-vertical').addClass('' + i.params.containerModifierClass + e), (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + 'wp8-' + e)), 'horizontal' === n && (i.$el.removeClass(i.params.containerModifierClass + 'horizontal wp8-horizontal').addClass('' + i.params.containerModifierClass + e), (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + 'wp8-' + e)), i.params.direction = e, i.slides.each(function (t, i) {
            'vertical' === e ? i.style.width = '' : i.style.height = ''
          }), i.emit('changeDirection'), t && i.update()),
          i
        },
        i.prototype.init = function () {
          var e = this;
          e.initialized || (e.emit('beforeInit'), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit)  : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit('init'))
        },
        i.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0),
          void 0 === t && (t = !0);
          var i = this,
          n = i.params,
          o = i.$el,
          r = i.$wrapperEl,
          a = i.slides;
          return void 0 === i.params || i.destroyed || (i.emit('beforeDestroy'), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), o.removeAttr('style'), r.removeAttr('style'), a && a.length && a.removeClass([n.slideVisibleClass,
          n.slideActiveClass,
          n.slideNextClass,
          n.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row')), i.emit('destroy'), Object.keys(i.eventsListeners).forEach(function (e) {
            i.off(e)
          }), !1 !== e && (i.$el[0].swiper = null, i.$el.data('swiper', null), u.deleteProps(i)), i.destroyed = !0),
          null
        },
        i.extendDefaults = function (e) {
          u.extend(E, e)
        },
        n.extendedDefaults.get = function () {
          return E
        },
        n.defaults.get = function () {
          return k
        },
        n.Class.get = function () {
          return t
        },
        n.$.get = function () {
          return e
        },
        Object.defineProperties(i, n),
        i
      }(h),
      P = {
        name: 'device',
        proto: {
          device: T
        },
        'static': {
          device: T
        }
      },
      q = {
        name: 'support',
        proto: {
          support: p
        },
        'static': {
          support: p
        }
      },
      I = {
        name: 'browser',
        proto: {
          browser: f
        },
        'static': {
          browser: f
        }
      },
      O = {
        name: 'resize',
        create: function () {
          var e = this;
          u.extend(e, {
            resize: {
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'))
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit('orientationchange')
              }
            }
          })
        },
        on: {
          init: function () {
            o.addEventListener('resize', this.resize.resizeHandler),
            o.addEventListener('orientationchange', this.resize.orientationChangeHandler)
          },
          destroy: function () {
            o.removeEventListener('resize', this.resize.resizeHandler),
            o.removeEventListener('orientationchange', this.resize.orientationChangeHandler)
          }
        }
      },
      A = {
        func: o.MutationObserver || o.WebkitMutationObserver,
        attach: function (e, t) {
          void 0 === t && (t = {
          });
          var i = this,
          n = new A.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                i.emit('observerUpdate', e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(t)  : o.setTimeout(t, 0)
            } else i.emit('observerUpdate', e[0])
          });
          n.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }),
          i.observer.observers.push(n)
        },
        init: function () {
          var e = this;
          if (p.observer && e.params.observer) {
            if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren
            }),
            e.observer.attach(e.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect()
          }),
          this.observer.observers = [
          ]
        }
      },
      M = {
        name: 'observer',
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        },
        create: function () {
          u.extend(this, {
            observer: {
              init: A.init.bind(this),
              attach: A.attach.bind(this),
              destroy: A.destroy.bind(this),
              observers: [
              ]
            }
          })
        },
        on: {
          init: function () {
            this.observer.init()
          },
          destroy: function () {
            this.observer.destroy()
          }
        }
      },
      $ = {
        update: function (e) {
          function t() {
            i.updateSlides(),
            i.updateProgress(),
            i.updateSlidesClasses(),
            i.lazy && i.params.lazy.enabled && i.lazy.load()
          }
          var i = this,
          n = i.params,
          o = n.slidesPerView,
          r = n.slidesPerGroup,
          a = n.centeredSlides,
          s = i.params.virtual,
          l = s.addSlidesBefore,
          c = s.addSlidesAfter,
          d = i.virtual,
          p = d.from,
          f = d.to,
          h = d.slides,
          v = d.slidesGrid,
          m = d.renderSlide,
          g = d.offset;
          i.updateActiveIndex();
          var y,
          _,
          w,
          b = i.activeIndex || 0;
          y = i.rtlTranslate ? 'right' : i.isHorizontal() ? 'left' : 'top',
          a ? (_ = Math.floor(o / 2) + r + l, w = Math.floor(o / 2) + r + c)  : (_ = o + (r - 1) + l, w = r + c);
          var x = Math.max((b || 0) - w, 0),
          T = Math.min((b || 0) + _, h.length - 1),
          k = (i.slidesGrid[x] || 0) - (i.slidesGrid[0] || 0);
          if (u.extend(i.virtual, {
            from: x,
            to: T,
            offset: k,
            slidesGrid: i.slidesGrid
          }), p === x && f === T && !e) return i.slidesGrid !== v && k !== g && i.slides.css(y, k + 'px'),
          void i.updateProgress();
          if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
            offset: k,
            from: x,
            to: T,
            slides: function () {
              for (var e = [
              ], t = x; t <= T; t += 1) e.push(h[t]);
              return e
            }()
          }),
          void t();
          var S = [
          ],
          E = [
          ];
          if (e) i.$wrapperEl.find('.' + i.params.slideClass).remove();
           else for (var C = p; C <= f; C += 1) (C < x || T < C) && i.$wrapperEl.find('.' + i.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
          for (var P = 0; P < h.length; P += 1) x <= P && P <= T && (void 0 === f || e ? E.push(P)  : (f < P && E.push(P), P < p && S.push(P)));
          E.forEach(function (e) {
            i.$wrapperEl.append(m(h[e], e))
          }),
          S.sort(function (e, t) {
            return t - e
          }).forEach(function (e) {
            i.$wrapperEl.prepend(m(h[e], e))
          }),
          i.$wrapperEl.children('.swiper-slide').css(y, k + 'px'),
          t()
        },
        renderSlide: function (t, i) {
          var n = this,
          o = n.params.virtual;
          if (o.cache && n.virtual.cache[i]) return n.virtual.cache[i];
          var r = e(o.renderSlide ? o.renderSlide.call(n, t, i)  : '<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + '</div>');
          return r.attr('data-swiper-slide-index') || r.attr('data-swiper-slide-index', i),
          o.cache && (n.virtual.cache[i] = r),
          r
        },
        appendSlide: function (e) {
          if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
           else this.virtual.slides.push(e);
          this.virtual.update(!0)
        },
        prependSlide: function (e) {
          var t = this,
          i = t.activeIndex,
          n = i + 1,
          o = 1;
          if (Array.isArray(e)) {
            for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
            n = i + e.length,
            o = e.length
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            var a = t.virtual.cache,
            s = {
            };
            Object.keys(a).forEach(function (e) {
              s[parseInt(e, 10) + o] = a[e]
            }),
            t.virtual.cache = s
          }
          t.virtual.update(!0),
          t.slideTo(n, 0)
        },
        removeSlide: function (e) {
          var t = this;
          if (null != e) {
            var i = t.activeIndex;
            if (Array.isArray(e)) for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1),
            t.params.virtual.cache && delete t.virtual.cache[e[n]],
            e[n] < i && (i -= 1),
            i = Math.max(i, 0);
             else t.virtual.slides.splice(e, 1),
            t.params.virtual.cache && delete t.virtual.cache[e],
            e < i && (i -= 1),
            i = Math.max(i, 0);
            t.virtual.update(!0),
            t.slideTo(i, 0)
          }
        },
        removeAllSlides: function () {
          var e = this;
          e.virtual.slides = [
          ],
          e.params.virtual.cache && (e.virtual.cache = {
          }),
          e.virtual.update(!0),
          e.slideTo(0, 0)
        }
      },
      j = {
        name: 'virtual',
        params: {
          virtual: {
            enabled: !1,
            slides: [
            ],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function () {
          var e = this;
          u.extend(e, {
            virtual: {
              update: $.update.bind(e),
              appendSlide: $.appendSlide.bind(e),
              prependSlide: $.prependSlide.bind(e),
              removeSlide: $.removeSlide.bind(e),
              removeAllSlides: $.removeAllSlides.bind(e),
              renderSlide: $.renderSlide.bind(e),
              slides: e.params.virtual.slides,
              cache: {
              }
            }
          })
        },
        on: {
          beforeInit: function () {
            var e = this;
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + 'virtual');
              var t = {
                watchSlidesProgress: !0
              };
              u.extend(e.params, t),
              u.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update()
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update()
          }
        }
      },
      L = {
        handle: function (e) {
          var t = this,
          i = t.rtlTranslate,
          r = e;
          r.originalEvent && (r = r.originalEvent);
          var a = r.keyCode || r.charCode;
          if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a)) return !1;
          if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || n.activeElement && n.activeElement.nodeName && ('input' === n.activeElement.nodeName.toLowerCase() || 'textarea' === n.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
              var s = !1;
              if (0 < t.$el.parents('.' + t.params.slideClass).length && 0 === t.$el.parents('.' + t.params.slideActiveClass).length) return;
              var l = o.innerWidth,
              c = o.innerHeight,
              d = t.$el.offset();
              i && (d.left -= t.$el[0].scrollLeft);
              for (var u = [
                [d.left,
                d.top],
                [
                  d.left + t.width,
                  d.top
                ],
                [
                  d.left,
                  d.top + t.height
                ],
                [
                  d.left + t.width,
                  d.top + t.height
                ]
              ], p = 0; p < u.length; p += 1) {
                var f = u[p];
                0 <= f[0] && f[0] <= l && 0 <= f[1] && f[1] <= c && (s = !0)
              }
              if (!s) return
            }
            t.isHorizontal() ? (37 !== a && 39 !== a || (r.preventDefault ? r.preventDefault()  : r.returnValue = !1), (39 === a && !i || 37 === a && i) && t.slideNext(), (37 === a && !i || 39 === a && i) && t.slidePrev())  : (38 !== a && 40 !== a || (r.preventDefault ? r.preventDefault()  : r.returnValue = !1), 40 === a && t.slideNext(), 38 === a && t.slidePrev()),
            t.emit('keyPress', a)
          }
        },
        enable: function () {
          this.keyboard.enabled || (e(n).on('keydown', this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable: function () {
          this.keyboard.enabled && (e(n).off('keydown', this.keyboard.handle), this.keyboard.enabled = !1)
        }
      },
      D = {
        name: 'keyboard',
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0
          }
        },
        create: function () {
          u.extend(this, {
            keyboard: {
              enabled: !1,
              enable: L.enable.bind(this),
              disable: L.disable.bind(this),
              handle: L.handle.bind(this)
            }
          })
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable()
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable()
          }
        }
      },
      N = {
        lastScrollTime: u.now(),
        event: - 1 < o.navigator.userAgent.indexOf('firefox') ? 'DOMMouseScroll' : function () {
          var e = 'onwheel',
          t = e in n;
          if (!t) {
            var i = n.createElement('div');
            i.setAttribute(e, 'return;'),
            t = 'function' == typeof i[e]
          }
          return !t && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature('', '') && (t = n.implementation.hasFeature('Events.wheel', '3.0')),
          t
        }() ? 'wheel' : 'mousewheel',
        normalize: function (e) {
          var t = 0,
          i = 0,
          n = 0,
          o = 0;
          return 'detail' in e && (i = e.detail),
          'wheelDelta' in e && (i = - e.wheelDelta / 120),
          'wheelDeltaY' in e && (i = - e.wheelDeltaY / 120),
          'wheelDeltaX' in e && (t = - e.wheelDeltaX / 120),
          'axis' in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0),
          n = 10 * t,
          o = 10 * i,
          'deltaY' in e && (o = e.deltaY),
          'deltaX' in e && (n = e.deltaX),
          (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, o *= 40)  : (n *= 800, o *= 800)),
          n && !t && (t = n < 1 ? - 1 : 1),
          o && !i && (i = o < 1 ? - 1 : 1),
          {
            spinX: t,
            spinY: i,
            pixelX: n,
            pixelY: o
          }
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1
        },
        handle: function (e) {
          var t = e,
          i = this,
          n = i.params.mousewheel;
          if (!i.mouseEntered && !n.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
          a = i.rtlTranslate ? - 1 : 1,
          s = N.normalize(t);
          if (n.forceToAxis) if (i.isHorizontal()) {
            if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
            r = s.pixelX * a
          } else {
            if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
            r = s.pixelY
          } else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? - s.pixelX * a : - s.pixelY;
          if (0 === r) return !0;
          if (n.invert && (r = - r), i.params.freeMode) {
            i.params.loop && i.loopFix();
            var l = i.getTranslate() + r * n.sensitivity,
            c = i.isBeginning,
            d = i.isEnd;
            if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = u.nextTick(function () {
              i.slideToClosest()
            }, 300)), i.emit('scroll', t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), l === i.minTranslate() || l === i.maxTranslate()) return !0
          } else {
            if (60 < u.now() - i.mousewheel.lastScrollTime) if (r < 0) if (i.isEnd && !i.params.loop || i.animating) {
              if (n.releaseOnEdges) return !0
            } else i.slideNext(),
            i.emit('scroll', t);
             else if (i.isBeginning && !i.params.loop || i.animating) {
              if (n.releaseOnEdges) return !0
            } else i.slidePrev(),
            i.emit('scroll', t);
            i.mousewheel.lastScrollTime = (new o.Date).getTime()
          }
          return t.preventDefault ? t.preventDefault()  : t.returnValue = !1,
          !1
        },
        enable: function () {
          var t = this;
          if (!N.event) return !1;
          if (t.mousewheel.enabled) return !1;
          var i = t.$el;
          return 'container' !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)),
          i.on('mouseenter', t.mousewheel.handleMouseEnter),
          i.on('mouseleave', t.mousewheel.handleMouseLeave),
          i.on(N.event, t.mousewheel.handle),
          t.mousewheel.enabled = !0
        },
        disable: function () {
          var t = this;
          if (!N.event) return !1;
          if (!t.mousewheel.enabled) return !1;
          var i = t.$el;
          return 'container' !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)),
          i.off(N.event, t.mousewheel.handle),
          !(t.mousewheel.enabled = !1)
        }
      },
      z = {
        update: function () {
          var e = this,
          t = e.params.navigation;
          if (!e.params.loop) {
            var i = e.navigation,
            n = i.$nextEl,
            o = i.$prevEl;
            o && 0 < o.length && (e.isBeginning ? o.addClass(t.disabledClass)  : o.removeClass(t.disabledClass), o[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass)),
            n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass)  : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass))
          }
        },
        onPrevClick: function (e) {
          e.preventDefault(),
          this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function (e) {
          e.preventDefault(),
          this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function () {
          var t,
          i,
          n = this,
          o = n.params.navigation;
          (o.nextEl || o.prevEl) && (o.nextEl && (t = e(o.nextEl), n.params.uniqueNavElements && 'string' == typeof o.nextEl && 1 < t.length && 1 === n.$el.find(o.nextEl).length && (t = n.$el.find(o.nextEl))), o.prevEl && (i = e(o.prevEl), n.params.uniqueNavElements && 'string' == typeof o.prevEl && 1 < i.length && 1 === n.$el.find(o.prevEl).length && (i = n.$el.find(o.prevEl))), t && 0 < t.length && t.on('click', n.navigation.onNextClick), i && 0 < i.length && i.on('click', n.navigation.onPrevClick), u.extend(n.navigation, {
            $nextEl: t,
            nextEl: t && t[0],
            $prevEl: i,
            prevEl: i && i[0]
          }))
        },
        destroy: function () {
          var e = this,
          t = e.navigation,
          i = t.$nextEl,
          n = t.$prevEl;
          i && i.length && (i.off('click', e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)),
          n && n.length && (n.off('click', e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
        }
      },
      B = {
        update: function () {
          var t = this,
          i = t.rtl,
          n = t.params.pagination;
          if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
            var o,
            r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            a = t.pagination.$el,
            s = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)  : t.snapGrid.length;
            if (t.params.loop ? ((o = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (o -= r - 2 * t.loopedSlides), s - 1 < o && (o -= s), o < 0 && 'bullets' !== t.params.paginationType && (o = s + o))  : o = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, 'bullets' === n.type && t.pagination.bullets && 0 < t.pagination.bullets.length) {
              var l,
              c,
              d,
              u = t.pagination.bullets;
              if (n.dynamicBullets && (t.pagination.bulletSize = u.eq(0) [t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0), a.css(t.isHorizontal() ? 'width' : 'height', t.pagination.bulletSize * (n.dynamicMainBullets + 4) + 'px'), 1 < n.dynamicMainBullets && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += o - t.previousIndex, t.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = o - t.pagination.dynamicBulletIndex, d = ((c = l + (Math.min(u.length, n.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(n.bulletActiveClass + ' ' + n.bulletActiveClass + '-next ' + n.bulletActiveClass + '-next-next ' + n.bulletActiveClass + '-prev ' + n.bulletActiveClass + '-prev-prev ' + n.bulletActiveClass + '-main'), 1 < a.length) u.each(function (t, i) {
                var r = e(i),
                a = r.index();
                a === o && r.addClass(n.bulletActiveClass),
                n.dynamicBullets && (l <= a && a <= c && r.addClass(n.bulletActiveClass + '-main'), a === l && r.prev().addClass(n.bulletActiveClass + '-prev').prev().addClass(n.bulletActiveClass + '-prev-prev'), a === c && r.next().addClass(n.bulletActiveClass + '-next').next().addClass(n.bulletActiveClass + '-next-next'))
              });
               else if (u.eq(o).addClass(n.bulletActiveClass), n.dynamicBullets) {
                for (var p = u.eq(l), f = u.eq(c), h = l; h <= c; h += 1) u.eq(h).addClass(n.bulletActiveClass + '-main');
                p.prev().addClass(n.bulletActiveClass + '-prev').prev().addClass(n.bulletActiveClass + '-prev-prev'),
                f.next().addClass(n.bulletActiveClass + '-next').next().addClass(n.bulletActiveClass + '-next-next')
              }
              if (n.dynamicBullets) {
                var v = Math.min(u.length, n.dynamicMainBullets + 4),
                m = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - d * t.pagination.bulletSize,
                g = i ? 'right' : 'left';
                u.css(t.isHorizontal() ? g : 'top', m + 'px')
              }
            }
            if ('fraction' === n.type && (a.find('.' + n.currentClass).text(n.formatFractionCurrent(o + 1)), a.find('.' + n.totalClass).text(n.formatFractionTotal(s))), 'progressbar' === n.type) {
              var y;
              y = n.progressbarOpposite ? t.isHorizontal() ? 'vertical' : 'horizontal' : t.isHorizontal() ? 'horizontal' : 'vertical';
              var _ = (o + 1) / s,
              w = 1,
              b = 1;
              'horizontal' === y ? w = _ : b = _,
              a.find('.' + n.progressbarFillClass).transform('translate3d(0,0,0) scaleX(' + w + ') scaleY(' + b + ')').transition(t.params.speed)
            }
            'custom' === n.type && n.renderCustom ? (a.html(n.renderCustom(t, o + 1, s)), t.emit('paginationRender', t, a[0]))  : t.emit('paginationUpdate', t, a[0]),
            a[t.params.watchOverflow && t.isLocked ? 'addClass' : 'removeClass'](n.lockClass)
          }
        },
        render: function () {
          var e = this,
          t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            n = e.pagination.$el,
            o = '';
            if ('bullets' === t.type) {
              for (var r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)  : e.snapGrid.length, a = 0; a < r; a += 1) o += t.renderBullet ? t.renderBullet.call(e, a, t.bulletClass)  : '<' + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + '>';
              n.html(o),
              e.pagination.bullets = n.find('.' + t.bulletClass)
            }
            'fraction' === t.type && (o = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass)  : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(o)),
            'progressbar' === t.type && (o = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass)  : '<span class="' + t.progressbarFillClass + '"></span>', n.html(o)),
            'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0])
          }
        },
        init: function () {
          var t = this,
          i = t.params.pagination;
          if (i.el) {
            var n = e(i.el);
            0 !== n.length && (t.params.uniqueNavElements && 'string' == typeof i.el && 1 < n.length && 1 === t.$el.find(i.el).length && (n = t.$el.find(i.el)), 'bullets' === i.type && i.clickable && n.addClass(i.clickableClass), n.addClass(i.modifierClass + i.type), 'bullets' === i.type && i.dynamicBullets && (n.addClass('' + i.modifierClass + i.type + '-dynamic'), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), 'progressbar' === i.type && i.progressbarOpposite && n.addClass(i.progressbarOppositeClass), i.clickable && n.on('click', '.' + i.bulletClass, function (i) {
              i.preventDefault();
              var n = e(this).index() * t.params.slidesPerGroup;
              t.params.loop && (n += t.loopedSlides),
              t.slideTo(n)
            }), u.extend(t.pagination, {
              $el: n,
              el: n[0]
            }))
          }
        },
        destroy: function () {
          var e = this,
          t = e.params.pagination;
          if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var i = e.pagination.$el;
            i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off('click', '.' + t.bulletClass)
          }
        }
      },
      R = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
            i = e.rtlTranslate,
            n = e.progress,
            o = t.dragSize,
            r = t.trackSize,
            a = t.$dragEl,
            s = t.$el,
            l = e.params.scrollbar,
            c = o,
            d = (r - o) * n;
            i ? 0 < (d = - d) ? (c = o - d, d = 0)  : r < - d + o && (c = r + d)  : d < 0 ? (c = o + d, d = 0)  : r < d + o && (c = r - d),
            e.isHorizontal() ? (p.transforms3d ? a.transform('translate3d(' + d + 'px, 0, 0)')  : a.transform('translateX(' + d + 'px)'), a[0].style.width = c + 'px')  : (p.transforms3d ? a.transform('translate3d(0px, ' + d + 'px, 0)')  : a.transform('translateY(' + d + 'px)'), a[0].style.height = c + 'px'),
            l.hide && (clearTimeout(e.scrollbar.timeout), s[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
              s[0].style.opacity = 0,
              s.transition(400)
            }, 1000))
          }
        },
        setTransition: function (e) {
          this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
            i = t.$dragEl,
            n = t.$el;
            i[0].style.width = '',
            i[0].style.height = '';
            var o,
            r = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
            a = e.size / e.virtualSize,
            s = a * (r / e.size);
            o = 'auto' === e.params.scrollbar.dragSize ? r * a : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? i[0].style.width = o + 'px' : i[0].style.height = o + 'px',
            n[0].style.display = 1 <= a ? 'none' : '',
            e.params.scrollbar.hide && (n[0].style.opacity = 0),
            u.extend(t, {
              trackSize: r,
              divider: a,
              moveDivider: s,
              dragSize: o
            }),
            t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](e.params.scrollbar.lockClass)
          }
        },
        setDragPosition: function (e) {
          var t,
          i = this,
          n = i.scrollbar,
          o = i.rtlTranslate,
          r = n.$el,
          a = n.dragSize,
          s = n.trackSize;
          t = ((i.isHorizontal() ? 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset() [i.isHorizontal() ? 'left' : 'top'] - a / 2) / (s - a),
          t = Math.max(Math.min(t, 1), 0),
          o && (t = 1 - t);
          var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
          i.updateProgress(l),
          i.setTranslate(l),
          i.updateActiveIndex(),
          i.updateSlidesClasses()
        },
        onDragStart: function (e) {
          var t = this,
          i = t.params.scrollbar,
          n = t.scrollbar,
          o = t.$wrapperEl,
          r = n.$el,
          a = n.$dragEl;
          t.scrollbar.isTouched = !0,
          e.preventDefault(),
          e.stopPropagation(),
          o.transition(100),
          a.transition(100),
          n.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          i.hide && r.css('opacity', 1),
          t.emit('scrollbarDragStart', e)
        },
        onDragMove: function (e) {
          var t = this.scrollbar,
          i = this.$wrapperEl,
          n = t.$el,
          o = t.$dragEl;
          this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), o.transition(0), this.emit('scrollbarDragMove', e))
        },
        onDragEnd: function (e) {
          var t = this,
          i = t.params.scrollbar,
          n = t.scrollbar.$el;
          t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = u.nextTick(function () {
            n.css('opacity', 0),
            n.transition(400)
          }, 1000)), t.emit('scrollbarDragEnd', e), i.snapOnRelease && t.slideToClosest())
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
            i = e.touchEventsTouch,
            o = e.touchEventsDesktop,
            r = e.params,
            a = t.$el[0],
            s = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            p.touch ? (a.addEventListener(i.start, e.scrollbar.onDragStart, s), a.addEventListener(i.move, e.scrollbar.onDragMove, s), a.addEventListener(i.end, e.scrollbar.onDragEnd, l))  : (a.addEventListener(o.start, e.scrollbar.onDragStart, s), n.addEventListener(o.move, e.scrollbar.onDragMove, s), n.addEventListener(o.end, e.scrollbar.onDragEnd, l))
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
            i = e.touchEventsTouch,
            o = e.touchEventsDesktop,
            r = e.params,
            a = t.$el[0],
            s = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!p.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            p.touch ? (a.removeEventListener(i.start, e.scrollbar.onDragStart, s), a.removeEventListener(i.move, e.scrollbar.onDragMove, s), a.removeEventListener(i.end, e.scrollbar.onDragEnd, l))  : (a.removeEventListener(o.start, e.scrollbar.onDragStart, s), n.removeEventListener(o.move, e.scrollbar.onDragMove, s), n.removeEventListener(o.end, e.scrollbar.onDragEnd, l))
          }
        },
        init: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var i = t.scrollbar,
            n = t.$el,
            o = t.params.scrollbar,
            r = e(o.el);
            t.params.uniqueNavElements && 'string' == typeof o.el && 1 < r.length && 1 === n.find(o.el).length && (r = n.find(o.el));
            var a = r.find('.' + t.params.scrollbar.dragClass);
            0 === a.length && (a = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), r.append(a)),
            u.extend(i, {
              $el: r,
              el: r[0],
              $dragEl: a,
              dragEl: a[0]
            }),
            o.draggable && i.enableDraggable()
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable()
        }
      },
      U = {
        setTransform: function (t, i) {
          var n = this.rtl,
          o = e(t),
          r = n ? - 1 : 1,
          a = o.attr('data-swiper-parallax') || '0',
          s = o.attr('data-swiper-parallax-x'),
          l = o.attr('data-swiper-parallax-y'),
          c = o.attr('data-swiper-parallax-scale'),
          d = o.attr('data-swiper-parallax-opacity');
          if (s || l ? (s = s || '0', l = l || '0')  : this.isHorizontal() ? (s = a, l = '0')  : (l = a, s = '0'), s = 0 <= s.indexOf('%') ? parseInt(s, 10) * i * r + '%' : s * i * r + 'px', l = 0 <= l.indexOf('%') ? parseInt(l, 10) * i + '%' : l * i + 'px', null != d) {
            var u = d - (d - 1) * (1 - Math.abs(i));
            o[0].style.opacity = u
          }
          if (null == c) o.transform('translate3d(' + s + ', ' + l + ', 0px)');
           else {
            var p = c - (c - 1) * (1 - Math.abs(i));
            o.transform('translate3d(' + s + ', ' + l + ', 0px) scale(' + p + ')')
          }
        },
        setTranslate: function () {
          var t = this,
          i = t.$el,
          n = t.slides,
          o = t.progress,
          r = t.snapGrid;
          i.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, i) {
            t.parallax.setTransform(i, o)
          }),
          n.each(function (i, n) {
            var a = n.progress;
            1 < t.params.slidesPerGroup && 'auto' !== t.params.slidesPerView && (a += Math.ceil(i / 2) - o * (r.length - 1)),
            a = Math.min(Math.max(a, - 1), 1),
            e(n).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, i) {
              t.parallax.setTransform(i, a)
            })
          })
        },
        setTransition: function (t) {
          void 0 === t && (t = this.params.speed),
          this.$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (i, n) {
            var o = e(n),
            r = parseInt(o.attr('data-swiper-parallax-duration'), 10) || t;
            0 === t && (r = 0),
            o.transition(r)
          })
        }
      },
      V = {
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          n = e.targetTouches[1].pageX,
          o = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - i, 2))
        },
        onGestureStart: function (t) {
          var i = this,
          n = i.params.zoom,
          o = i.zoom,
          r = o.gesture;
          if (o.fakeGestureTouched = !1, o.fakeGestureMoved = !1, !p.gestures) {
            if ('touchstart' !== t.type || 'touchstart' === t.type && t.targetTouches.length < 2) return;
            o.fakeGestureTouched = !0,
            r.scaleStart = V.getDistanceBetweenTouches(t)
          }
          r.$slideEl && r.$slideEl.length || (r.$slideEl = e(t.target).closest('.swiper-slide'), 0 === r.$slideEl.length && (r.$slideEl = i.slides.eq(i.activeIndex)), r.$imageEl = r.$slideEl.find('img, svg, canvas'), r.$imageWrapEl = r.$imageEl.parent('.' + n.containerClass), r.maxRatio = r.$imageWrapEl.attr('data-swiper-zoom') || n.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), i.zoom.isScaling = !0)  : r.$imageEl = void 0
        },
        onGestureChange: function (e) {
          var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;
          if (!p.gestures) {
            if ('touchmove' !== e.type || 'touchmove' === e.type && e.targetTouches.length < 2) return;
            i.fakeGestureMoved = !0,
            n.scaleMove = V.getDistanceBetweenTouches(e)
          }
          n.$imageEl && 0 !== n.$imageEl.length && (i.scale = p.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, 0.5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)), n.$imageEl.transform('translate3d(0,0,0) scale(' + i.scale + ')'))
        },
        onGestureEnd: function (e) {
          var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;
          if (!p.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ('touchend' !== e.type || 'touchend' === e.type && e.changedTouches.length < 2 && !T.android) return;
            i.fakeGestureTouched = !1,
            i.fakeGestureMoved = !1
          }
          n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform('translate3d(0,0,0) scale(' + i.scale + ')'), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        },
        onTouchStart: function (e) {
          var t = this.zoom,
          i = t.gesture,
          n = t.image;
          i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (T.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function (e) {
          var t = this,
          i = t.zoom,
          n = i.gesture,
          o = i.image,
          r = i.velocity;
          if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, o.isTouched && n.$slideEl)) {
            o.isMoved || (o.width = n.$imageEl[0].offsetWidth, o.height = n.$imageEl[0].offsetHeight, o.startX = u.getTranslate(n.$imageWrapEl[0], 'x') || 0, o.startY = u.getTranslate(n.$imageWrapEl[0], 'y') || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (o.startX = - o.startX, o.startY = - o.startY));
            var a = o.width * i.scale,
            s = o.height * i.scale;
            if (!(a < n.slideWidth && s < n.slideHeight)) {
              if (o.minX = Math.min(n.slideWidth / 2 - a / 2, 0), o.maxX = - o.minX, o.minY = Math.min(n.slideHeight / 2 - s / 2, 0), o.maxY = - o.minY, o.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX, o.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY, !o.isMoved && !i.isScaling) {
                if (t.isHorizontal() && (Math.floor(o.minX) === Math.floor(o.startX) && o.touchesCurrent.x < o.touchesStart.x || Math.floor(o.maxX) === Math.floor(o.startX) && o.touchesCurrent.x > o.touchesStart.x)) return void (o.isTouched = !1);
                if (!t.isHorizontal() && (Math.floor(o.minY) === Math.floor(o.startY) && o.touchesCurrent.y < o.touchesStart.y || Math.floor(o.maxY) === Math.floor(o.startY) && o.touchesCurrent.y > o.touchesStart.y)) return void (o.isTouched = !1)
              }
              e.preventDefault(),
              e.stopPropagation(),
              o.isMoved = !0,
              o.currentX = o.touchesCurrent.x - o.touchesStart.x + o.startX,
              o.currentY = o.touchesCurrent.y - o.touchesStart.y + o.startY,
              o.currentX < o.minX && (o.currentX = o.minX + 1 - Math.pow(o.minX - o.currentX + 1, 0.8)),
              o.currentX > o.maxX && (o.currentX = o.maxX - 1 + Math.pow(o.currentX - o.maxX + 1, 0.8)),
              o.currentY < o.minY && (o.currentY = o.minY + 1 - Math.pow(o.minY - o.currentY + 1, 0.8)),
              o.currentY > o.maxY && (o.currentY = o.maxY - 1 + Math.pow(o.currentY - o.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = o.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = o.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              r.x = (o.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
              r.y = (o.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
              Math.abs(o.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(o.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              r.prevPositionX = o.touchesCurrent.x,
              r.prevPositionY = o.touchesCurrent.y,
              r.prevTime = Date.now(),
              n.$imageWrapEl.transform('translate3d(' + o.currentX + 'px, ' + o.currentY + 'px,0)')
            }
          }
        },
        onTouchEnd: function () {
          var e = this.zoom,
          t = e.gesture,
          i = e.image,
          n = e.velocity;
          if (t.$imageEl && 0 !== t.$imageEl.length) {
            if (!i.isTouched || !i.isMoved) return i.isTouched = !1,
            void (i.isMoved = !1);
            i.isTouched = !1,
            i.isMoved = !1;
            var o = 300,
            r = 300,
            a = n.x * o,
            s = i.currentX + a,
            l = n.y * r,
            c = i.currentY + l;
            0 !== n.x && (o = Math.abs((s - i.currentX) / n.x)),
            0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
            var d = Math.max(o, r);
            i.currentX = s,
            i.currentY = c;
            var u = i.width * e.scale,
            p = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - u / 2, 0),
            i.maxX = - i.minX,
            i.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
            i.maxY = - i.minY,
            i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX),
            i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY),
            t.$imageWrapEl.transition(d).transform('translate3d(' + i.currentX + 'px, ' + i.currentY + 'px,0)')
          }
        },
        onTransitionEnd: function () {
          var e = this.zoom,
          t = e.gesture;
          t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform('translate3d(0,0,0) scale(1)'), t.$imageWrapEl.transform('translate3d(0,0,0)'), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        },
        toggle: function (e) {
          var t = this.zoom;
          t.scale && 1 !== t.scale ? t.out()  : t['in'](e)
        },
        'in': function (t) {
          var i,
          n,
          o,
          r,
          a,
          s,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          v,
          m,
          g,
          y = this,
          _ = y.zoom,
          w = y.params.zoom,
          b = _.gesture,
          x = _.image;
          b.$slideEl || (b.$slideEl = y.clickedSlide ? e(y.clickedSlide)  : y.slides.eq(y.activeIndex), b.$imageEl = b.$slideEl.find('img, svg, canvas'), b.$imageWrapEl = b.$imageEl.parent('.' + w.containerClass)),
          b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass('' + w.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (i = 'touchend' === t.type ? t.changedTouches[0].pageX : t.pageX, n = 'touchend' === t.type ? t.changedTouches[0].pageY : t.pageY)  : (i = x.touchesStart.x, n = x.touchesStart.y), _.scale = b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio, _.currentScale = b.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio, t ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, o = b.$slideEl.offset().left + m / 2 - i, r = b.$slideEl.offset().top + g / 2 - n, l = b.$imageEl[0].offsetWidth, c = b.$imageEl[0].offsetHeight, d = l * _.scale, u = c * _.scale, h = - (p = Math.min(m / 2 - d / 2, 0)), v = - (f = Math.min(g / 2 - u / 2, 0)), (a = o * _.scale) < p && (a = p), h < a && (a = h), (s = r * _.scale) < f && (s = f), v < s && (s = v))  : s = a = 0, b.$imageWrapEl.transition(300).transform('translate3d(' + a + 'px, ' + s + 'px,0)'), b.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + _.scale + ')'))
        },
        out: function () {
          var t = this,
          i = t.zoom,
          n = t.params.zoom,
          o = i.gesture;
          o.$slideEl || (o.$slideEl = t.clickedSlide ? e(t.clickedSlide)  : t.slides.eq(t.activeIndex), o.$imageEl = o.$slideEl.find('img, svg, canvas'), o.$imageWrapEl = o.$imageEl.parent('.' + n.containerClass)),
          o.$imageEl && 0 !== o.$imageEl.length && (i.scale = 1, i.currentScale = 1, o.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'), o.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'), o.$slideEl.removeClass('' + n.zoomedSlideClass), o.$slideEl = void 0)
        },
        enable: function () {
          var e = this,
          t = e.zoom;
          if (!t.enabled) {
            t.enabled = !0;
            var i = !('touchstart' !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            p.gestures ? (e.$wrapperEl.on('gesturestart', '.swiper-slide', t.onGestureStart, i), e.$wrapperEl.on('gesturechange', '.swiper-slide', t.onGestureChange, i), e.$wrapperEl.on('gestureend', '.swiper-slide', t.onGestureEnd, i))  : 'touchstart' === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, '.swiper-slide', t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, '.swiper-slide', t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, i)),
            e.$wrapperEl.on(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove)
          }
        },
        disable: function () {
          var e = this,
          t = e.zoom;
          if (t.enabled) {
            e.zoom.enabled = !1;
            var i = !('touchstart' !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            p.gestures ? (e.$wrapperEl.off('gesturestart', '.swiper-slide', t.onGestureStart, i), e.$wrapperEl.off('gesturechange', '.swiper-slide', t.onGestureChange, i), e.$wrapperEl.off('gestureend', '.swiper-slide', t.onGestureEnd, i))  : 'touchstart' === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, '.swiper-slide', t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, '.swiper-slide', t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, i)),
            e.$wrapperEl.off(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove)
          }
        }
      },
      W = {
        loadInSlide: function (t, i) {
          void 0 === i && (i = !0);
          var n = this,
          o = n.params.lazy;
          if (void 0 !== t && 0 !== n.slides.length) {
            var r = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children('.' + n.params.slideClass + '[data-swiper-slide-index="' + t + '"]')  : n.slides.eq(t),
            a = r.find('.' + o.elementClass + ':not(.' + o.loadedClass + '):not(.' + o.loadingClass + ')');
            !r.hasClass(o.elementClass) || r.hasClass(o.loadedClass) || r.hasClass(o.loadingClass) || (a = a.add(r[0])),
            0 !== a.length && a.each(function (t, a) {
              var s = e(a);
              s.addClass(o.loadingClass);
              var l = s.attr('data-background'),
              c = s.attr('data-src'),
              d = s.attr('data-srcset'),
              u = s.attr('data-sizes');
              n.loadImage(s[0], c || l, d, u, !1, function () {
                if (null != n && n && (!n || n.params) && !n.destroyed) {
                  if (l ? (s.css('background-image', 'url("' + l + '")'), s.removeAttr('data-background'))  : (d && (s.attr('srcset', d), s.removeAttr('data-srcset')), u && (s.attr('sizes', u), s.removeAttr('data-sizes')), c && (s.attr('src', c), s.removeAttr('data-src'))), s.addClass(o.loadedClass).removeClass(o.loadingClass), r.find('.' + o.preloaderClass).remove(), n.params.loop && i) {
                    var e = r.attr('data-swiper-slide-index');
                    if (r.hasClass(n.params.slideDuplicateClass)) {
                      var t = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ')');
                      n.lazy.loadInSlide(t.index(), !1)
                    } else {
                      var a = n.$wrapperEl.children('.' + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      n.lazy.loadInSlide(a.index(), !1)
                    }
                  }
                  n.emit('lazyImageReady', r[0], s[0])
                }
              }),
              n.emit('lazyImageLoad', r[0], s[0])
            })
          }
        },
        load: function () {
          function t(e) {
            if (l) {
              if (o.children('.' + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
            } else if (a[e]) return !0;
            return !1
          }
          function i(t) {
            return l ? e(t).attr('data-swiper-slide-index')  : e(t).index()
          }
          var n = this,
          o = n.$wrapperEl,
          r = n.params,
          a = n.slides,
          s = n.activeIndex,
          l = n.virtual && r.virtual.enabled,
          c = r.lazy,
          d = r.slidesPerView;
          if ('auto' === d && (d = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) o.children('.' + r.slideVisibleClass).each(function (t, i) {
            var o = l ? e(i).attr('data-swiper-slide-index')  : e(i).index();
            n.lazy.loadInSlide(o)
          });
           else if (1 < d) for (var u = s; u < s + d; u += 1) t(u) && n.lazy.loadInSlide(u);
           else n.lazy.loadInSlide(s);
          if (c.loadPrevNext) if (1 < d || c.loadPrevNextAmount && 1 < c.loadPrevNextAmount) {
            for (var p = c.loadPrevNextAmount, f = d, h = Math.min(s + f + Math.max(p, f), a.length), v = Math.max(s - Math.max(f, p), 0), m = s + d; m < h; m += 1) t(m) && n.lazy.loadInSlide(m);
            for (var g = v; g < s; g += 1) t(g) && n.lazy.loadInSlide(g)
          } else {
            var y = o.children('.' + r.slideNextClass);
            0 < y.length && n.lazy.loadInSlide(i(y));
            var _ = o.children('.' + r.slidePrevClass);
            0 < _.length && n.lazy.loadInSlide(i(_))
          }
        }
      },
      X = {
        LinearSpline: function (e, t) {
          var i,
          n,
          o,
          r,
          a,
          s = function (e, t) {
            for (n = - 1, i = e.length; 1 < i - n; ) e[o = i + n >> 1] <= t ? n = o : i = o;
            return i
          };
          return this.x = e,
          this.y = t,
          this.lastIndex = e.length - 1,
          this.interpolate = function (e) {
            return e ? (a = s(this.x, e), r = a - 1, (e - this.x[r]) * (this.y[a] - this.y[r]) / (this.x[a] - this.x[r]) + this.y[r])  : 0
          },
          this
        },
        getInterpolateFunction: function (e) {
          var t = this;
          t.controller.spline || (t.controller.spline = t.params.loop ? new X.LinearSpline(t.slidesGrid, e.slidesGrid)  : new X.LinearSpline(t.snapGrid, e.snapGrid))
        },
        setTranslate: function (e, t) {
          function i(e) {
            var t = r.rtlTranslate ? - r.translate : r.translate;
            'slide' === r.params.controller.by && (r.controller.getInterpolateFunction(e), o = - r.controller.spline.interpolate( - t)),
            o && 'container' !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), o = (t - r.minTranslate()) * n + e.minTranslate()),
            r.params.controller.inverse && (o = e.maxTranslate() - o),
            e.updateProgress(o),
            e.setTranslate(o, r),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
          }
          var n,
          o,
          r = this,
          a = r.controller.control;
          if (Array.isArray(a)) for (var s = 0; s < a.length; s += 1) a[s] !== t && a[s] instanceof C && i(a[s]);
           else a instanceof C && t !== a && i(a)
        },
        setTransition: function (e, t) {
          function i(t) {
            t.setTransition(e, o),
            0 !== e && (t.transitionStart(), t.params.autoHeight && u.nextTick(function () {
              t.updateAutoHeight()
            }), t.$wrapperEl.transitionEnd(function () {
              r && (t.params.loop && 'slide' === o.params.controller.by && t.loopFix(), t.transitionEnd())
            }))
          }
          var n,
          o = this,
          r = o.controller.control;
          if (Array.isArray(r)) for (n = 0; n < r.length; n += 1) r[n] !== t && r[n] instanceof C && i(r[n]);
           else r instanceof C && t !== r && i(r)
        }
      },
      H = {
        makeElFocusable: function (e) {
          return e.attr('tabIndex', '0'),
          e
        },
        addElRole: function (e, t) {
          return e.attr('role', t),
          e
        },
        addElLabel: function (e, t) {
          return e.attr('aria-label', t),
          e
        },
        disableEl: function (e) {
          return e.attr('aria-disabled', !0),
          e
        },
        enableEl: function (e) {
          return e.attr('aria-disabled', !1),
          e
        },
        onEnterKey: function (t) {
          var i = this,
          n = i.params.a11y;
          if (13 === t.keyCode) {
            var o = e(t.target);
            i.navigation && i.navigation.$nextEl && o.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(n.lastSlideMessage)  : i.a11y.notify(n.nextSlideMessage)),
            i.navigation && i.navigation.$prevEl && o.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(n.firstSlideMessage)  : i.a11y.notify(n.prevSlideMessage)),
            i.pagination && o.is('.' + i.params.pagination.bulletClass) && o[0].click()
          }
        },
        notify: function (e) {
          var t = this.a11y.liveRegion;
          0 !== t.length && (t.html(''), t.html(e))
        },
        updateNavigation: function () {
          var e = this;
          if (!e.params.loop) {
            var t = e.navigation,
            i = t.$nextEl,
            n = t.$prevEl;
            n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n)  : e.a11y.enableEl(n)),
            i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i)  : e.a11y.enableEl(i))
          }
        },
        updatePagination: function () {
          var t = this,
          i = t.params.a11y;
          t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (n, o) {
            var r = e(o);
            t.a11y.makeElFocusable(r),
            t.a11y.addElRole(r, 'button'),
            t.a11y.addElLabel(r, i.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
          })
        },
        init: function () {
          var e = this;
          e.$el.append(e.a11y.liveRegion);
          var t,
          i,
          n = e.params.a11y;
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
          t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, 'button'), e.a11y.addElLabel(t, n.nextSlideMessage), t.on('keydown', e.a11y.onEnterKey)),
          i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, 'button'), e.a11y.addElLabel(i, n.prevSlideMessage), i.on('keydown', e.a11y.onEnterKey)),
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on('keydown', '.' + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function () {
          var e,
          t,
          i = this;
          i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(),
          i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
          i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
          e && e.off('keydown', i.a11y.onEnterKey),
          t && t.off('keydown', i.a11y.onEnterKey),
          i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off('keydown', '.' + i.params.pagination.bulletClass, i.a11y.onEnterKey)
        }
      },
      Y = {
        init: function () {
          var e = this;
          if (e.params.history) {
            if (!o.history || !o.history.pushState) return e.params.history.enabled = !1,
            void (e.params.hashNavigation.enabled = !0);
            var t = e.history;
            t.initialized = !0,
            t.paths = Y.getPathValues(),
            (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || o.addEventListener('popstate', e.history.setHistoryPopState))
          }
        },
        destroy: function () {
          this.params.history.replaceState || o.removeEventListener('popstate', this.history.setHistoryPopState)
        },
        setHistoryPopState: function () {
          this.history.paths = Y.getPathValues(),
          this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function () {
          var e = o.location.pathname.slice(1).split('/').filter(function (e) {
            return '' !== e
          }),
          t = e.length;
          return {
            key: e[t - 2],
            value: e[t - 1]
          }
        },
        setHistory: function (e, t) {
          if (this.history.initialized && this.params.history.enabled) {
            var i = this.slides.eq(t),
            n = Y.slugify(i.attr('data-history'));
            o.location.pathname.includes(e) || (n = e + '/' + n);
            var r = o.history.state;
            r && r.value === n || (this.params.history.replaceState ? o.history.replaceState({
              value: n
            }, null, n)  : o.history.pushState({
              value: n
            }, null, n))
          }
        },
        slugify: function (e) {
          return e.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
        },
        scrollToSlide: function (e, t, i) {
          var n = this;
          if (t) for (var o = 0, r = n.slides.length; o < r; o += 1) {
            var a = n.slides.eq(o);
            if (Y.slugify(a.attr('data-history')) === t && !a.hasClass(n.params.slideDuplicateClass)) {
              var s = a.index();
              n.slideTo(s, e, i)
            }
          } else n.slideTo(0, e, i)
        }
      },
      F = {
        onHashCange: function () {
          var e = this,
          t = n.location.hash.replace('#', '');
          if (t !== e.slides.eq(e.activeIndex).attr('data-hash')) {
            var i = e.$wrapperEl.children('.' + e.params.slideClass + '[data-hash="' + t + '"]').index();
            if (void 0 === i) return;
            e.slideTo(i)
          }
        },
        setHash: function () {
          var e = this;
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, '#' + e.slides.eq(e.activeIndex).attr('data-hash') || '');
           else {
            var t = e.slides.eq(e.activeIndex),
            i = t.attr('data-hash') || t.attr('data-history');
            n.location.hash = i || ''
          }
        },
        init: function () {
          var t = this;
          if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
            t.hashNavigation.initialized = !0;
            var i = n.location.hash.replace('#', '');
            if (i) for (var r = 0, a = t.slides.length; r < a; r += 1) {
              var s = t.slides.eq(r);
              if ((s.attr('data-hash') || s.attr('data-history')) === i && !s.hasClass(t.params.slideDuplicateClass)) {
                var l = s.index();
                t.slideTo(l, 0, t.params.runCallbacksOnInit, !0)
              }
            }
            t.params.hashNavigation.watchState && e(o).on('hashchange', t.hashNavigation.onHashCange)
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState && e(o).off('hashchange', this.hashNavigation.onHashCange)
        }
      },
      Q = {
        run: function () {
          var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
          t.attr('data-swiper-autoplay') && (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
          e.autoplay.timeout = u.nextTick(function () {
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))  : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop()  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))  : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))  : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop()  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))  : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
          }, i)
        },
        start: function () {
          var e = this;
          return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit('autoplayStart'), e.autoplay.run(), !0)
        },
        stop: function () {
          var e = this;
          return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit('autoplayStop'), !0)
        },
        pause: function (e) {
          var t = this;
          t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener('transitionend', t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener('webkitTransitionEnd', t.autoplay.onTransitionEnd))  : (t.autoplay.paused = !1, t.autoplay.run())))
        }
      },
      G = {
        setTranslate: function () {
          for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
            var n = e.slides.eq(i),
            o = - n[0].swiperSlideOffset;
            e.params.virtualTranslate || (o -= e.translate);
            var r = 0;
            e.isHorizontal() || (r = o, o = 0);
            var a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0)  : 1 + Math.min(Math.max(n[0].progress, - 1), 0);
            n.css({
              opacity: a
            }).transform('translate3d(' + o + 'px, ' + r + 'px, 0px)')
          }
        },
        setTransition: function (e) {
          var t = this,
          i = t.slides,
          n = t.$wrapperEl;
          if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
            var o = !1;
            i.transitionEnd(function () {
              if (!o && t && !t.destroyed) {
                o = !0,
                t.animating = !1;
                for (var e = [
                  'webkitTransitionEnd',
                  'transitionend'
                ], i = 0; i < e.length; i += 1) n.trigger(e[i])
              }
            })
          }
        }
      },
      J = {
        setTranslate: function () {
          var t,
          i = this,
          n = i.$el,
          o = i.$wrapperEl,
          r = i.slides,
          a = i.width,
          s = i.height,
          l = i.rtlTranslate,
          c = i.size,
          d = i.params.cubeEffect,
          u = i.isHorizontal(),
          p = i.virtual && i.params.virtual.enabled,
          h = 0;
          d.shadow && (u ? (0 === (t = o.find('.swiper-cube-shadow')).length && (t = e('<div class="swiper-cube-shadow"></div>'), o.append(t)), t.css({
            height: a + 'px'
          }))  : 0 === (t = n.find('.swiper-cube-shadow')).length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t)));
          for (var v = 0; v < r.length; v += 1) {
            var m = r.eq(v),
            g = v;
            p && (g = parseInt(m.attr('data-swiper-slide-index'), 10));
            var y = 90 * g,
            _ = Math.floor(y / 360);
            l && (y = - y, _ = Math.floor( - y / 360));
            var w = Math.max(Math.min(m[0].progress, 1), - 1),
            b = 0,
            x = 0,
            T = 0;
            g % 4 == 0 ? (b = 4 * - _ * c, T = 0)  : (g - 1) % 4 == 0 ? (b = 0, T = 4 * - _ * c)  : (g - 2) % 4 == 0 ? (b = c + 4 * _ * c, T = c)  : (g - 3) % 4 == 0 && (b = - c, T = 3 * c + 4 * c * _),
            l && (b = - b),
            u || (x = b, b = 0);
            var k = 'rotateX(' + (u ? 0 : - y) + 'deg) rotateY(' + (u ? y : 0) + 'deg) translate3d(' + b + 'px, ' + x + 'px, ' + T + 'px)';
            if (w <= 1 && - 1 < w && (h = 90 * g + 90 * w, l && (h = 90 * - g - 90 * w)), m.transform(k), d.slideShadows) {
              var S = u ? m.find('.swiper-slide-shadow-left')  : m.find('.swiper-slide-shadow-top'),
              E = u ? m.find('.swiper-slide-shadow-right')  : m.find('.swiper-slide-shadow-bottom');
              0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (u ? 'left' : 'top') + '"></div>'), m.append(S)),
              0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (u ? 'right' : 'bottom') + '"></div>'), m.append(E)),
              S.length && (S[0].style.opacity = Math.max( - w, 0)),
              E.length && (E[0].style.opacity = Math.max(w, 0))
            }
          }
          if (o.css({
            '-webkit-transform-origin': '50% 50% -' + c / 2 + 'px',
            '-moz-transform-origin': '50% 50% -' + c / 2 + 'px',
            '-ms-transform-origin': '50% 50% -' + c / 2 + 'px',
            'transform-origin': '50% 50% -' + c / 2 + 'px'
          }), d.shadow) if (u) t.transform('translate3d(0px, ' + (a / 2 + d.shadowOffset) + 'px, ' + - a / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + d.shadowScale + ')');
           else {
            var C = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            P = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            q = d.shadowScale,
            I = d.shadowScale / P,
            O = d.shadowOffset;
            t.transform('scale3d(' + q + ', 1, ' + I + ') translate3d(0px, ' + (s / 2 + O) + 'px, ' + - s / 2 / I + 'px) rotateX(-90deg)')
          }
          var A = f.isSafari || f.isUiWebView ? - c / 2 : 0;
          o.transform('translate3d(0px,0,' + A + 'px) rotateX(' + (i.isHorizontal() ? 0 : h) + 'deg) rotateY(' + (i.isHorizontal() ? - h : 0) + 'deg)')
        },
        setTransition: function (e) {
          var t = this.$el;
          this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
          this.params.cubeEffect.shadow && !this.isHorizontal() && t.find('.swiper-cube-shadow').transition(e)
        }
      },
      K = {
        setTranslate: function () {
          for (var t = this, i = t.slides, n = t.rtlTranslate, o = 0; o < i.length; o += 1) {
            var r = i.eq(o),
            a = r[0].progress;
            t.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), - 1));
            var s = - 180 * a,
            l = 0,
            c = - r[0].swiperSlideOffset,
            d = 0;
            if (t.isHorizontal() ? n && (s = - s)  : (d = c, l = - s, s = c = 0), r[0].style.zIndex = - Math.abs(Math.round(a)) + i.length, t.params.flipEffect.slideShadows) {
              var u = t.isHorizontal() ? r.find('.swiper-slide-shadow-left')  : r.find('.swiper-slide-shadow-top'),
              p = t.isHorizontal() ? r.find('.swiper-slide-shadow-right')  : r.find('.swiper-slide-shadow-bottom');
              0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? 'left' : 'top') + '"></div>'), r.append(u)),
              0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? 'right' : 'bottom') + '"></div>'), r.append(p)),
              u.length && (u[0].style.opacity = Math.max( - a, 0)),
              p.length && (p[0].style.opacity = Math.max(a, 0))
            }
            r.transform('translate3d(' + c + 'px, ' + d + 'px, 0px) rotateX(' + l + 'deg) rotateY(' + s + 'deg)')
          }
        },
        setTransition: function (e) {
          var t = this,
          i = t.slides,
          n = t.activeIndex,
          o = t.$wrapperEl;
          if (i.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e), t.params.virtualTranslate && 0 !== e) {
            var r = !1;
            i.eq(n).transitionEnd(function () {
              if (!r && t && !t.destroyed) {
                r = !0,
                t.animating = !1;
                for (var e = [
                  'webkitTransitionEnd',
                  'transitionend'
                ], i = 0; i < e.length; i += 1) o.trigger(e[i])
              }
            })
          }
        }
      },
      Z = {
        setTranslate: function () {
          for (var t = this, i = t.width, n = t.height, o = t.slides, r = t.$wrapperEl, a = t.slidesSizesGrid, s = t.params.coverflowEffect, l = t.isHorizontal(), c = t.translate, d = l ? i / 2 - c : n / 2 - c, u = l ? s.rotate : - s.rotate, f = s.depth, h = 0, v = o.length; h < v; h += 1) {
            var m = o.eq(h),
            g = a[h],
            y = (d - m[0].swiperSlideOffset - g / 2) / g * s.modifier,
            _ = l ? u * y : 0,
            w = l ? 0 : u * y,
            b = - f * Math.abs(y),
            x = l ? 0 : s.stretch * y,
            T = l ? s.stretch * y : 0;
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(_) < 0.001 && (_ = 0),
            Math.abs(w) < 0.001 && (w = 0);
            var k = 'translate3d(' + T + 'px,' + x + 'px,' + b + 'px)  rotateX(' + w + 'deg) rotateY(' + _ + 'deg)';
            if (m.transform(k), m[0].style.zIndex = 1 - Math.abs(Math.round(y)), s.slideShadows) {
              var S = l ? m.find('.swiper-slide-shadow-left')  : m.find('.swiper-slide-shadow-top'),
              E = l ? m.find('.swiper-slide-shadow-right')  : m.find('.swiper-slide-shadow-bottom');
              0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? 'left' : 'top') + '"></div>'), m.append(S)),
              0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (l ? 'right' : 'bottom') + '"></div>'), m.append(E)),
              S.length && (S[0].style.opacity = 0 < y ? y : 0),
              E.length && (E[0].style.opacity = 0 < - y ? - y : 0)
            }
          }(p.pointerEvents || p.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = d + 'px 50%')
        },
        setTransition: function (e) {
          this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e)
        }
      },
      ee = {
        init: function () {
          var e = this,
          t = e.params.thumbs,
          i = e.constructor;
          t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, u.extend(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), u.extend(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }))  : u.isObject(t.swiper) && (e.thumbs.swiper = new i(u.extend({
          }, t.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })), e.thumbs.swiperCreated = !0),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on('tap', e.thumbs.onThumbClick)
        },
        onThumbClick: function () {
          var t = this,
          i = t.thumbs.swiper;
          if (i) {
            var n = i.clickedIndex,
            o = i.clickedSlide;
            if (!(o && e(o).hasClass(t.params.thumbs.slideThumbActiveClass) || null == n)) {
              var r;
              if (r = i.params.loop ? parseInt(e(i.clickedSlide).attr('data-swiper-slide-index'), 10)  : n, t.params.loop) {
                var a = t.activeIndex;
                t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                var s = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                l = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                r = void 0 === s ? l : void 0 === l ? s : l - a < a - s ? l : s
              }
              t.slideTo(r)
            }
          }
        },
        update: function (e) {
          var t = this,
          i = t.thumbs.swiper;
          if (i) {
            var n = 'auto' === i.params.slidesPerView ? i.slidesPerViewDynamic()  : i.params.slidesPerView;
            if (t.realIndex !== i.realIndex) {
              var o,
              r = i.activeIndex;
              if (i.params.loop) {
                i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, r = i.activeIndex);
                var a = i.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                s = i.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                o = void 0 === a ? s : void 0 === s ? a : s - r == r - a ? r : s - r < r - a ? s : a
              } else o = t.realIndex;
              i.visibleSlidesIndexes.indexOf(o) < 0 && (i.params.centeredSlides ? o = r < o ? o - Math.floor(n / 2) + 1 : o + Math.floor(n / 2) - 1 : r < o && (o = o - n + 1), i.slideTo(o, e ? 0 : void 0))
            }
            var l = 1,
            c = t.params.thumbs.slideThumbActiveClass;
            if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(c), i.params.loop) for (var d = 0; d < l; d += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + d) + '"]').addClass(c);
             else for (var u = 0; u < l; u += 1) i.slides.eq(t.realIndex + u).addClass(c)
          }
        }
      },
      te = [
        P,
        q,
        I,
        O,
        M,
        j,
        D,
        {
          name: 'mousewheel',
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: 'container'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              mousewheel: {
                enabled: !1,
                enable: N.enable.bind(e),
                disable: N.disable.bind(e),
                handle: N.handle.bind(e),
                handleMouseEnter: N.handleMouseEnter.bind(e),
                handleMouseLeave: N.handleMouseLeave.bind(e),
                lastScrollTime: u.now()
              }
            })
          },
          on: {
            init: function () {
              this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function () {
              this.mousewheel.enabled && this.mousewheel.disable()
            }
          }
        },
        {
          name: 'navigation',
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              navigation: {
                init: z.init.bind(e),
                update: z.update.bind(e),
                destroy: z.destroy.bind(e),
                onNextClick: z.onNextClick.bind(e),
                onPrevClick: z.onPrevClick.bind(e)
              }
            })
          },
          on: {
            init: function () {
              this.navigation.init(),
              this.navigation.update()
            },
            toEdge: function () {
              this.navigation.update()
            },
            fromEdge: function () {
              this.navigation.update()
            },
            destroy: function () {
              this.navigation.destroy()
            },
            click: function (t) {
              var i,
              n = this,
              o = n.navigation,
              r = o.$nextEl,
              a = o.$prevEl;
              !n.params.navigation.hideOnClick || e(t.target).is(a) || e(t.target).is(r) || (r ? i = r.hasClass(n.params.navigation.hiddenClass)  : a && (i = a.hasClass(n.params.navigation.hiddenClass)), !0 === i ? n.emit('navigationShow', n)  : n.emit('navigationHide', n), r && r.toggleClass(n.params.navigation.hiddenClass), a && a.toggleClass(n.params.navigation.hiddenClass))
            }
          }
        },
        {
          name: 'pagination',
          params: {
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: 'bullets',
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (e) {
                return e
              },
              formatFractionTotal: function (e) {
                return e
              },
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              modifierClass: 'swiper-pagination-',
              currentClass: 'swiper-pagination-current',
              totalClass: 'swiper-pagination-total',
              hiddenClass: 'swiper-pagination-hidden',
              progressbarFillClass: 'swiper-pagination-progressbar-fill',
              progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
              clickableClass: 'swiper-pagination-clickable',
              lockClass: 'swiper-pagination-lock'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              pagination: {
                init: B.init.bind(e),
                render: B.render.bind(e),
                update: B.update.bind(e),
                destroy: B.destroy.bind(e),
                dynamicBulletIndex: 0
              }
            })
          },
          on: {
            init: function () {
              this.pagination.init(),
              this.pagination.render(),
              this.pagination.update()
            },
            activeIndexChange: function () {
              this.params.loop ? this.pagination.update()  : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function () {
              this.params.loop && (this.pagination.render(), this.pagination.update())
            },
            snapGridLengthChange: function () {
              this.params.loop || (this.pagination.render(), this.pagination.update())
            },
            destroy: function () {
              this.pagination.destroy()
            },
            click: function (t) {
              var i = this;
              i.params.pagination.el && i.params.pagination.hideOnClick && 0 < i.pagination.$el.length && !e(t.target).hasClass(i.params.pagination.bulletClass) && (!0 === i.pagination.$el.hasClass(i.params.pagination.hiddenClass) ? i.emit('paginationShow', i)  : i.emit('paginationHide', i), i.pagination.$el.toggleClass(i.params.pagination.hiddenClass))
            }
          }
        },
        {
          name: 'scrollbar',
          params: {
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              scrollbar: {
                init: R.init.bind(e),
                destroy: R.destroy.bind(e),
                updateSize: R.updateSize.bind(e),
                setTranslate: R.setTranslate.bind(e),
                setTransition: R.setTransition.bind(e),
                enableDraggable: R.enableDraggable.bind(e),
                disableDraggable: R.disableDraggable.bind(e),
                setDragPosition: R.setDragPosition.bind(e),
                onDragStart: R.onDragStart.bind(e),
                onDragMove: R.onDragMove.bind(e),
                onDragEnd: R.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null
              }
            })
          },
          on: {
            init: function () {
              this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate()
            },
            update: function () {
              this.scrollbar.updateSize()
            },
            resize: function () {
              this.scrollbar.updateSize()
            },
            observerUpdate: function () {
              this.scrollbar.updateSize()
            },
            setTranslate: function () {
              this.scrollbar.setTranslate()
            },
            setTransition: function (e) {
              this.scrollbar.setTransition(e)
            },
            destroy: function () {
              this.scrollbar.destroy()
            }
          }
        },
        {
          name: 'parallax',
          params: {
            parallax: {
              enabled: !1
            }
          },
          create: function () {
            u.extend(this, {
              parallax: {
                setTransform: U.setTransform.bind(this),
                setTranslate: U.setTranslate.bind(this),
                setTransition: U.setTransition.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function (e) {
              this.params.parallax.enabled && this.parallax.setTransition(e)
            }
          }
        },
        {
          name: 'zoom',
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed'
            }
          },
          create: function () {
            var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {
                },
                touchesCurrent: {
                }
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
            'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (i) {
              t[i] = V[i].bind(e)
            }),
            u.extend(e, {
              zoom: t
            });
            var i = 1;
            Object.defineProperty(e.zoom, 'scale', {
              get: function () {
                return i
              },
              set: function (t) {
                if (i !== t) {
                  var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  o = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                  e.emit('zoomChange', t, n, o)
                }
                i = t
              }
            })
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function () {
              this.zoom.disable()
            },
            touchStart: function (e) {
              this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function (e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function (e) {
              this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function () {
              this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
          }
        },
        {
          name: 'lazy',
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: 'swiper-lazy',
              loadingClass: 'swiper-lazy-loading',
              loadedClass: 'swiper-lazy-loaded',
              preloaderClass: 'swiper-lazy-preloader'
            }
          },
          create: function () {
            u.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: W.load.bind(this),
                loadInSlide: W.loadInSlide.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function () {
              this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function () {
              this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function () {
              var e = this;
              e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function () {
              this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
          }
        },
        {
          name: 'controller',
          params: {
            controller: {
              control: void 0,
              inverse: !1,
              by: 'slide'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              controller: {
                control: e.params.controller.control,
                getInterpolateFunction: X.getInterpolateFunction.bind(e),
                setTranslate: X.setTranslate.bind(e),
                setTransition: X.setTransition.bind(e)
              }
            })
          },
          on: {
            update: function () {
              this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            resize: function () {
              this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            observerUpdate: function () {
              this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            setTranslate: function (e, t) {
              this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function (e, t) {
              this.controller.control && this.controller.setTransition(e, t)
            }
          }
        },
        {
          name: 'a11y',
          params: {
            a11y: {
              enabled: !0,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}'
            }
          },
          create: function () {
            var t = this;
            u.extend(t, {
              a11y: {
                liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
              }
            }),
            Object.keys(H).forEach(function (e) {
              t.a11y[e] = H[e].bind(t)
            })
          },
          on: {
            init: function () {
              this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy()
            }
          }
        },
        {
          name: 'history',
          params: {
            history: {
              enabled: !1,
              replaceState: !1,
              key: 'slides'
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              history: {
                init: Y.init.bind(e),
                setHistory: Y.setHistory.bind(e),
                setHistoryPopState: Y.setHistoryPopState.bind(e),
                scrollToSlide: Y.scrollToSlide.bind(e),
                destroy: Y.destroy.bind(e)
              }
            })
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init()
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function () {
              this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
          }
        },
        {
          name: 'hash-navigation',
          params: {
            hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              hashNavigation: {
                initialized: !1,
                init: F.init.bind(e),
                destroy: F.destroy.bind(e),
                setHash: F.setHash.bind(e),
                onHashCange: F.onHashCange.bind(e)
              }
            })
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
          }
        },
        {
          name: 'autoplay',
          params: {
            autoplay: {
              enabled: !1,
              delay: 3000,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1
            }
          },
          create: function () {
            var e = this;
            u.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: Q.run.bind(e),
                start: Q.start.bind(e),
                stop: Q.stop.bind(e),
                pause: Q.pause.bind(e),
                onTransitionEnd: function (t) {
                  e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener('transitionend', e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener('webkitTransitionEnd', e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run()  : e.autoplay.stop())
                }
              }
            })
          },
          on: {
            init: function () {
              this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function (e, t) {
              this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e)  : this.autoplay.stop())
            },
            sliderFirstMove: function () {
              this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop()  : this.autoplay.pause())
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop()
            }
          }
        },
        {
          name: 'effect-fade',
          params: {
            fadeEffect: {
              crossFade: !1
            }
          },
          create: function () {
            u.extend(this, {
              fadeEffect: {
                setTranslate: G.setTranslate.bind(this),
                setTransition: G.setTransition.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('fade' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'fade');
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                u.extend(e.params, t),
                u.extend(e.originalParams, t)
              }
            },
            setTranslate: function () {
              'fade' === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function (e) {
              'fade' === this.params.effect && this.fadeEffect.setTransition(e)
            }
          }
        },
        {
          name: 'effect-cube',
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94
            }
          },
          create: function () {
            u.extend(this, {
              cubeEffect: {
                setTranslate: J.setTranslate.bind(this),
                setTransition: J.setTransition.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('cube' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'cube'),
                e.classNames.push(e.params.containerModifierClass + '3d');
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0
                };
                u.extend(e.params, t),
                u.extend(e.originalParams, t)
              }
            },
            setTranslate: function () {
              'cube' === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function (e) {
              'cube' === this.params.effect && this.cubeEffect.setTransition(e)
            }
          }
        },
        {
          name: 'effect-flip',
          params: {
            flipEffect: {
              slideShadows: !0,
              limitRotation: !0
            }
          },
          create: function () {
            u.extend(this, {
              flipEffect: {
                setTranslate: K.setTranslate.bind(this),
                setTransition: K.setTransition.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              var e = this;
              if ('flip' === e.params.effect) {
                e.classNames.push(e.params.containerModifierClass + 'flip'),
                e.classNames.push(e.params.containerModifierClass + '3d');
                var t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
                };
                u.extend(e.params, t),
                u.extend(e.originalParams, t)
              }
            },
            setTranslate: function () {
              'flip' === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function (e) {
              'flip' === this.params.effect && this.flipEffect.setTransition(e)
            }
          }
        },
        {
          name: 'effect-coverflow',
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0
            }
          },
          create: function () {
            u.extend(this, {
              coverflowEffect: {
                setTranslate: Z.setTranslate.bind(this),
                setTransition: Z.setTransition.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              var e = this;
              'coverflow' === e.params.effect && (e.classNames.push(e.params.containerModifierClass + 'coverflow'), e.classNames.push(e.params.containerModifierClass + '3d'), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function () {
              'coverflow' === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function (e) {
              'coverflow' === this.params.effect && this.coverflowEffect.setTransition(e)
            }
          }
        },
        {
          name: 'thumbs',
          params: {
            thumbs: {
              swiper: null,
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              thumbsContainerClass: 'swiper-container-thumbs'
            }
          },
          create: function () {
            u.extend(this, {
              thumbs: {
                swiper: null,
                init: ee.init.bind(this),
                update: ee.update.bind(this),
                onThumbClick: ee.onThumbClick.bind(this)
              }
            })
          },
          on: {
            beforeInit: function () {
              var e = this.params.thumbs;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update()
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update()
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function (e) {
              var t = this.thumbs.swiper;
              t && t.setTransition(e)
            },
            beforeDestroy: function () {
              var e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy()
            }
          }
        }
      ];
      return void 0 === C.use && (C.use = C.Class.use, C.installModule = C.Class.installModule),
      C.use(te),
      C
    })
  },
  function (e, t, i) {
    var n = i(19),
    o = i(130),
    r = i(55),
    a = i(131),
    s = {
      txv: n().model({
        confid: 20411
      }),
      huoguo: o().model({
        confid: 500011069
      }),
      videoLite: r().model({
        confid: 20111
      }),
      weishi: a().model({
        confid: - 1
      })
    };
    e.exports = {
      fixOpenUrl: function (e, t) {
        return e.replace(/{vid}/gi, t)
      },
      detectBanner: function (e, t) {
        var i = (e || '').toLowerCase().match(/^(\w+):\/\//);
        if (i && i[1]) switch (i[1]) {
          case 'firevideo':
            return s.huoguo;
          case 'videolite':
            return s.videoLite;
          case 'tenvideo2':
          case 'tenvideohd':
          case 'txvideo':
            return s.txv;
          case 'weishi':
            return s.weishi
        }
        if (t) switch (t) {
          case 'com.tencent.videolite.android':
          case 'com.tencent.videolite.iphone':
            return s.videoLite;
          case 'com.tencent.firevideo':
            return s.huoguo;
          case 'com.tencent.live4iphone':
          case 'com.tencent.qqlive':
            return s.txv;
          case 'com.tencent.weishi':
            return s.weishi
        }
        return s.txv
    },
    openUrl: function (e, t, i, n) {
      if (i) location.href = i;
       else if (/^https?:\/\//.test(e)) location.href = e;
       else if (e) {
        var o = this.detectBanner(e, n);
        1 === o.state ? (o.openFixer(function () {
          return e
        }), o.action())  : t && (o.openFixer(function () {
          return e
        }), o.downloadFixer(function () {
          return t
        }), o.action())
      }
  }
  }
  },
  function (e, t, i) {
  var n = i(7) (),
  o = i(19),
  r = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  a = i(27),
  s = {
  name: '火锅',
  icon: 'https://yoo.qpic.cn/yoo_img/0/77a6834421a766fbcec344c268011fe7/0',
  pkg: 'com.tencent.firevideo',
  pkgurl: 'firevideo://can_open_me_if_install_and_regeister_this_scheme',
  downloadUrl: function () {
    return n.os.ios ? 'https://itunes.apple.com/cn/app/id1354364689?mt=8' : n.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=71&confid={confid}&platform=aphone' : 'http://v.qq.com/download.html'
  }(),
  md5: function (e) {
    return '//mcgi.v.qq.com/commdatav2?cmd=39&confid=' + e + '&platform=aphone'
  },
  uaname: 'firevideo',
  wxappid: 'wx5a3178167066897b',
  appappid: 'wx0bc363ec6a059e6b'
  },
  l = {
  tryopen: i(56) (),
  wx: i(52) (s)
  };
  window.firevideoBanner = e.exports = function (e) {
  function t(t, i) {
    var o = i.openurl,
    s = i.downloadurl;
    n.os.ios && parseInt(n.os.version) >= 9 && (t = 2),
    2 == t ? !n.browser.WeChat || r && 1 != a.verCompare('6.5.5', r[1]) ? l.tryopen(o, {
      onfail: function () {
        location.href = s
      }
    })  : l.wx(o, {
      onfail: function () {
        l.tryopen(o, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : 1 == t || 14 == t ? n.browser.WeChat ? l.wx(o, {
      debug: e.debug || location.href.indexOf('debug') != - 1,
      onfail: function () {
        l.tryopen(o, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : setTimeout(function () {
      location.href = o
    }, 50)  : 10 == t ? i.downloader.pause()  : 11 == t || 13 == t ? i.downloader.install()  : i.downloader && 15 != t && n.browser.WeChat ? i.downloader.start({
      url: s,
      confid: i.model.confid,
      verify: !1
    })  : setTimeout(function () {
      location.href = s
    }, 50)
  }
  e = e || {
  };
  var i = o({
    'package': e['package'] || s
  });
  return i.downloadFixer(function (e, t) {
    return e.replace('{confid}', t.confid)
  }),
  i.on('action', t),
  i
  }
  },
  function (e, t, i) {
  var n = i(7) (),
  o = i(19),
  r = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  a = i(27),
  s = {
  name: '微视',
  icon: 'http://puui.qpic.cn/media_img/0/promotion1561031897/0',
  pkg: 'com.tencent.weishi',
  pkgurl: 'weishi://',
  scheme: 'weishi://mian?goto=recommend&logsour=2140220072',
  via: 'ANDROID.WEISHI',
  downloadUrl: function () {
    return n.os.ios ? 'https://itunes.apple.com/cn/app/id691828408' : (n.os.android, 'https://weseeugg.qq.com/download?channelid=210010139')
  }(),
  md5: function () {
    return ''
  },
  uaname: 'weishi',
  wxappid: 'wxc1fc5d34fc24f53b',
  appappid: 'wx5dfbe0a95623607b'
  },
  l = {
  tryopen: i(56) (),
  wx: i(52) (s)
  };
  window.weishiBanner = e.exports = function (e) {
  function t(t, i) {
    var o = i.openurl,
    s = i.downloadurl;
    n.os.ios && parseInt(n.os.version) >= 9 && (t = 2),
    2 == t ? !n.browser.WeChat || r && 1 != a.verCompare('6.5.5', r[1]) ? l.tryopen(o, {
      onfail: function () {
        location.href = s
      }
    })  : l.wx(o, {
      onfail: function () {
        l.tryopen(o, {
          onfail: function () {
            location.href = s
          }
        })
      }
    }, {
      schemeOnly: !0
    })  : 1 == t || 14 == t ? n.browser.WeChat ? l.wx(o, {
      debug: e.debug || location.href.indexOf('debug') != - 1,
      onfail: function () {
        l.tryopen(o, {
          onfail: function () {
            location.href = s
          }
        })
      }
    }, {
      schemeOnly: !0
    })  : setTimeout(function () {
      location.href = o
    }, 50)  : 10 == t ? i.downloader.pause()  : 11 == t || 13 == t ? i.downloader.install()  : i.downloader && 15 != t && n.browser.WeChat ? i.downloader.start({
      url: s,
      confid: i.model.confid,
      verify: !1
    })  : setTimeout(function () {
      location.href = s
    }, 50)
  }
  e = e || {
  };
  var i = o({
    'package': e['package'] || s
  });
  return i.downloadFixer(function (e, t) {
    return e.replace('{confid}', t.confid)
  }),
  i.on('action', t),
  i
  }
  },
  function (e, t) {
  e.exports = function (e, t) {
  var i = (e || '').toLowerCase().match(/^(\w+):\/\//);
  if (i && i[1]) switch (i[1]) {
    case 'firevideo':
      return 3;
    case 'videolite':
      return 2;
    case 'tenvideo2':
    case 'tenvideohd':
    case 'txvideo':
      return 1;
    case 'weishi':
      return 4
  }
  if (t) switch (t) {
    case 'com.tencent.videolite.android':
    case 'com.tencent.videolite.iphone':
      return 2;
    case 'com.tencent.firevideo':
      return 3;
    case 'com.tencent.live4iphone':
    case 'com.tencent.qqlive':
      return 1;
    case 'com.tencent.weishi':
      return 4
  }
  return location.href.indexOf('lite=true') > - 1 ? 2 : 1
  }
  },
  function (e, t) {
  function i(e, t) {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'itemBg' === t ? 'rgb(32, 33, 49)' : '#f25b20' : e
  }
  e.exports = {
  colorHandle: i
  }
  },
  function (e, t, i) {
  var n = i(44);
  if (!n.get('rec_video_guid')) {
  var o = function () {
  function e() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
  }
  return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
  };
  n.set('rec_video_guid', o(), '', '', 168)
  }
  e.exports = {
  getPrConfig: function (e) {
  var t = e.modId,
  i = e.platforms,
  n = e.channel;
  return new Promise(function (e, o) {
    $.ajax({
      method: 'GET',
      url: 'https://api.pr.video.qq.com/m/gettask',
      data: {
        mod_id: t,
        platforms: i,
        channel: n || 31
      },
      xhrFields: {
        withCredentials: !0
      },
      contentType: 'text/plain;charset=UTF-8',
      dataType: 'jsonp',
      timeout: 8000,
      success: function (t) {
        t && !t.code && t.data && t.data.list && t.data.list.length ? e(t.data.list)  : o(t)
      },
      error: function (e) {
        o(e)
      }
    })
  })
  },
  getRecLongVideo: function (e, t, i) {
  return new Promise(function (i, o) {
    $.ajax({
      method: 'GET',
      url: '//node.video.qq.com/x/api/long_video_rec',
      data: {
        item_id: e || '',
        num: t,
        guid: n.get('rec_video_guid')
      },
      xhrFields: {
        withCredentials: !0
      },
      contentType: 'text/plain;charset=UTF-8',
      dataType: 'jsonp',
      timeout: 8000,
      success: function (e) {
        e && e.rec_modules && e.rec_modules.length ? i(e)  : o(e)
      },
      error: function (e) {
        o(e)
      }
    })
  })
  },
  getRecShortVideo: function (e, t, i) {
  return new Promise(function (o, r) {
    $.ajax({
      method: 'GET',
      url: '//node.video.qq.com/x/api/short_video_rec',
      data: {
        item_id: e,
        num: t,
        title: i,
        guid: n.get('rec_video_guid')
      },
      xhrFields: {
        withCredentials: !0
      },
      contentType: 'text/plain;charset=UTF-8',
      dataType: 'jsonp',
      timeout: 8000,
      success: function (e) {
        e && e.rec_modules && e.rec_modules.length ? o(e)  : r(e)
      },
      error: function (e) {
        r(e)
      }
    })
  })
  }
  }
  },
  function (e, t) {
  var i = [
  10142,
  10143,
  10144,
  10710,
  10139,
  10150,
  10151,
  10156,
  10890,
  10979,
  10980,
  10981,
  10479,
  10480,
  10481,
  10855,
  10470,
  10471,
  10475,
  10476,
  10477,
  10512,
  10513,
  10720,
  10721,
  10722,
  10723,
  10724,
  10725,
  10726,
  11754,
  10727,
  10004,
  10007,
  10010,
  10795,
  10797,
  10810,
  10001,
  10995,
  10996,
  10997,
  10994,
  11239,
  11243,
  11241,
  11240,
  11254,
  11256,
  11255,
  11244,
  11248,
  11246,
  11245,
  11249,
  11253,
  11251,
  11250,
  11258,
  11260,
  11259,
  11500,
  11502,
  11503,
  11504,
  11752,
  11753,
  11528
  ];
  e.exports = function (e) {
  var t = !1;
  return ~i.indexOf(e) && (t = !0),
  t
  }
  },
  function (e, t, i) {
  var n = i(11);
  e.exports = n('_component/2016/source/orgItem', function (e, t) {
  'use strict';
  var i = this,
  n = (i.$helpers, i.$escape),
  o = e.backColor,
  r = e.index,
  a = e.pkgname,
  s = e.intermediaurl,
  l = e.downurl,
  c = e.blankurl,
  d = e.kv,
  u = e.image,
  p = e.title,
  f = e.buttonTextColor,
  h = e.buttonTitle,
  v = '';
  return v += '<div class="source_item swiper-slide source_item_origin source_item_fadeIn" style="background-color: ',
  v += n(o),
  v += '" data-index="',
  v += n(r),
  v += '" data-pkgname="',
  v += n(a),
  v += '" data-intermediaurl="',
  v += n(s),
  v += '" data-downurl="',
  v += n(l),
  v += '" data-blankurl="',
  v += n(c),
  v += '"> <div class="source_item_left" _report _eid="banner" _kv="',
  v += n(d),
  v += '"> <img class="source_item_pic source_item_pic_app" src="',
  v += n(u),
  v += '"> <div class="source_item_info source_item_info_app"> <p class="info_title">',
  v += n(p),
  v += '</p> </div> </div> <button class="source_item_open" style="background-color: ',
  v += n(f),
  v += '" _report _eid="openbanner" _kv=\'',
  v += n(d),
  v += '\'>',
  v += n(h),
  v += '</button> </div>',
  new String(v)
  })
  },
  function (e, t, i) {
  var n = i(11);
  e.exports = n('_component/2016/source/recItem', function (e, t) {
  'use strict';
  var i = this,
  n = (i.$helpers, i.$escape),
  o = e.backColor,
  r = e.index,
  a = e.vid,
  s = e.pkgname,
  l = e.intermediaurl,
  c = e.downurl,
  d = e.blankurl,
  u = e.kv,
  p = e.image,
  f = e.title,
  h = e.buttonTextColor,
  v = e.buttonTitle,
  m = '';
  return m += '<div class="source_item swiper-slide source_item_fadeIn" style="background-color: ',
  m += n(o),
  m += '" data-index="',
  m += n(r),
  m += '" data-vid="',
  m += n(a),
  m += '" data-pkgname="',
  m += n(s),
  m += '" data-intermediaurl="',
  m += n(l),
  m += '" data-downurl="',
  m += n(c),
  m += '" data-blankurl="',
  m += n(d),
  m += '"> <div class="source_item_left" _report _eid="banner" _kv=\'',
  m += n(u),
  m += '\'> <img class="source_item_pic" src="',
  m += n(p),
  m += '"> <div class="source_item_info"> <p class="info_title">',
  m += n(f),
  m += '</p> </div> </div> <button class="source_item_open" style="background-color: ',
  m += n(h),
  m += '" _report _eid="openbanner" _kv=\'',
  m += n(u),
  m += '\'>',
  m += n(v),
  m += '</button> </div>',
  new String(m)
  })
  },
  function (e, t, i) {
  var n = i(11);
  e.exports = n('_component/2016/source/banItem', function (e, t) {
  'use strict';
  var i = this,
  n = (i.$helpers, i.$escape),
  o = e.backColor,
  r = e.index,
  a = e.pkgname,
  s = e.intermediaurl,
  l = e.downurl,
  c = e.blankurl,
  d = e.buttonTextColor,
  u = e.kv,
  p = e.image,
  f = e.buttonTitle,
  h = '';
  return h += '<div class="source_item swiper-slide source_item_fadeIn" style="background-color: ',
  h += n(o),
  h += '" data-index="',
  h += n(r),
  h += '" data-pkgname="',
  h += n(a),
  h += '" data-intermediaurl="',
  h += n(s),
  h += '" data-downurl="',
  h += n(l),
  h += '" data-blankurl="',
  h += n(c),
  h += '"> <button class="source_item_btn" style="background-color: ',
  h += n(d),
  h += '; ',
  h += n(d ? 'background-image: none;' : ''),
  h += '" _report _eid="openbanner" _kv=\'',
  h += n(u),
  h += '\'> <span class="item_btn_txt"><img class="item_btn_logo" src="',
  h += n(p),
  h += '" />',
  h += n(f),
  h += '</span> </button> </div>',
  new String(h)
  })
  },
  function (e, t, i) {
  var n,
  o = i(140),
  r = i(142),
  a = i(143),
  s = i(61),
  l = i(7) ();
  n = l.os.ios && l.browser.MQQClient ? {
  text: {
  0: '进入',
  1: '进入',
  2: '进入',
  3: '进入',
  10: '下载中',
  11: '进入',
  12: '进入',
  13: '进入',
  14: '进入',
  15: '进入',
  16: '进入'
  },
  status: {
  0: 'down',
  1: 'open',
  2: 'down',
  3: 'down',
  10: 'downloading',
  11: 'install',
  12: 'pause',
  13: 'install',
  14: 'open',
  15: 'down',
  16: 'down'
  }
  }
   : {
  text: {
  0: '下载',
  1: '打开',
  2: '下载',
  3: '升级',
  10: '下载中',
  11: '下载',
  12: '继续',
  13: '下载',
  14: '打开',
  15: '重新',
  16: '下载'
  },
  status: {
  0: 'down',
  1: 'open',
  2: 'down',
  3: 'down',
  10: 'downloading',
  11: 'install',
  12: 'pause',
  13: 'install',
  14: 'open',
  15: 'down',
  16: 'down'
  }
  },
  e.exports = function (e, t) {
  $.ajax({
  url: '//node.video.qq.com/x/api/mplay_game_rcd',
  data: {
    vid: t.vid,
    dt: l.os.android ? 'android' : 'ios'
  },
  dataType: 'jsonp'
  }).done(function (i) {
  if (i && i.length) {
    e.html(r({
    }));
    var c = l.os.android ? '8' : '9';
    $('window').on('scroll', function () {
    }),
    $(window).bind('scroll', function u() {
      var i = $(this).scrollTop(),
      n = $(e).offset().top;
      n <= $(window).height() + i && (s.gameShow({
        id: t.vid,
        client: 8 == c ? 2 : 1,
        type: 'rcd_detail'
      }), $(window).unbind('scroll', u))
    });
    var d = [
    ];
    $.each(i, function (i, r) {
      var c,
      u = JSON.parse(r.info),
      p = u.game_info,
      f = l.os.android ? '8' : '9',
      h = 'https://iwan.qq.com/m/vadr/hotgame.htm?enter=1&business=game&ADTAG=txsp.z.cj&id=' + p.FId,
      v = '';
      $.each(u.download_info, function (e, t) {
        v = t.apk_md5,
        c = t.download_url
      });
      var m = {
        name: p.FGameName,
        icon: p.FPic1,
        pkg: p.FExt.FNewsOpenUrl.Android,
        md5: v,
        hasmd5: !0,
        via: 'ANDROIDQQ.IWAN',
        appid: p.GameDividedappidqq,
        pkgurl: p.FExt.FNewsOpenUrl.iOS + '://',
        scheme: p.FExt.FNewsOpenUrl.iOS + '://can_open_me_if_install_and_register_this_scheme',
        appappid: p.FExt.FNewsOpenUrl.iOS,
        wxappid: 'wx5a3178167066897b',
        downloadUrl: function () {
          return l.os.ios ? p.FStartGame : l.os.android ? c : 'https://iwan.qq.com/m/vadr/giftdetail.htm?enter=1&gameid=863&ADTAG=txsp.z.cj&reportParams=iwan_msite-entry_rpk%3Dappid%253D1104466820%2526game_id%253D863'
        }()
      },
      g = o({
        'package': m
      });
      d.push(g);
      var y = $('<li class="app_item"  _report _eid="gamerec" _kv=' + JSON.stringify({
        rankid: i + 1
      }) + '></li>').appendTo(e.find('.mod_apps_recommend'));
      g.on('render', function (e, t) {
        y.html(a({
          gameName: p.FGameName,
          iconUrl: p.FPic1,
          status: n.status[e],
          word: n.text[e],
          open: 1 == e ? 'open' : ''
        }))
      }).on('action', function (e) {
      }),
      y.on('click', '.btn_app', function () {
        s.game({
          id: t.vid,
          client: 8 == f ? 2 : 1,
          type: 'rcd_detail',
          gameid: p.FId
        }),
        g.action()
      }).on('click', '.app_icon', function () {
        s.game({
          id: t.vid,
          client: 8 == f ? 2 : 1,
          type: 'rcd_icon',
          gameid: p.FId
        }),
        location.href = h
      })
    })
  }
  }).fail(function () {
  })
  }
  },
  function (e, t, i) {
  var n = i(141),
  o = i(7) ();
  e.exports = function (e) {
  function t(t, i) {
  var n = i.openurl,
  r = i.downloadurl;
  2 == t ? o.browser.WeChat ? a.wx(n, {
    onfail: function () {
      location.href = r
    }
  })  : a.tryopen(n, {
    onfail: function () {
      location.href = r
    }
  })  : 1 == t || 14 == t ? o.browser.WeChat ? a.wx(n, {
    debug: e.debug,
    onfail: function () {
      a.tryopen(n, {
        onfail: function () {
          location.href = r
        }
      })
    }
  })  : setTimeout(function () {
    location.href = n
  }, 50)  : 10 == t ? i.downloader.pause()  : 11 == t || 13 == t ? i.downloader.install()  : i.downloader && 15 != t ? i.downloader.start({
    url: r,
    confid: 66665
  })  : setTimeout(function () {
    location.href = r
  }, 50)
  }
  e = e || {
  };
  var r = n({
  'package': e['package'] || LIVE_PACKAGE
  }),
  a = {
  tryopen: i(51) (),
  wx: i(52) (e['package'])
  };
  return r.on('action', t),
  r
  }
  },
  function (e, t, i) {
  var n = i(20),
  o = i(22),
  r = {
  };
  window.appBanner = e.exports = function (e) {
  if (e = e || {
  }, !e['package']) throw new Error('需要为banner组件提供包信息');
  var t = e['package'];
  return n({
  'native': r[t.pkg] || (r[t.pkg] = o(t)),
  'package': t
  })
  }
  },
  function (e, t, i) {
  var n = i(11);
  e.exports = n('_component/2016/game_rec/wrap', ' <div class="mod_hd"> <h2 class="mod_title">周边推荐</h2> </div> <div class="mod_bd mod_apps_recommend_box"> <ul class="mod_apps_recommend" _scroll_view> </ul> </div> ')
  },
  function (e, t, i) {
  var n = i(11);
  e.exports = n('_component/2016/game_rec/item', function (e, t) {
  'use strict';
  var i = this,
  n = (i.$helpers, i.$escape),
  o = e.iconUrl,
  r = e.gameName,
  a = e.open,
  s = e.word,
  l = '';
  return l += ' <span class="app_icon"><img src="',
  l += n(o),
  l += '" alt="" class="icon_pic"></span> <span class="app_name">',
  l += n(r),
  l += '</span> <span class="btn_app ',
  l += n(a),
  l += '">',
  l += n(s),
  l += '</span> ',
  new String(l)
  })
  },
  function (e, t, i) {
  var n = i(145);
  e.exports = function () {
  var e;
  window.h5_reporter = e = n.initPlugin({
  video_type: 1
  }),
  e.ReportTree.attachGlobal(),
  e.Boss.setPageInfo('page_video_detail', ''),
  e.Boss.setKvCommonParams({
  page_type: '1'
  }),
  e.Boss.pageExpose()
  }
  },
  function (e, t, i) {
  'use strict';
  function n(e) {
  return e && e.__esModule ? e : {
  'default': e
  }
  }
  function o() {
  return o = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
  }
  return e
  },
  o.apply(this, arguments)
  }
  function r(e, t) {
  return s.Boss = new a['default'](t, e),
  s.ReportNode.addConfig({
  isScroller: '_scroll_view',
  attrs: {
    _expose: !1,
    _multiExpose: !0,
    _click: !1,
    _report: !1,
    _eid: 'eid',
    _kv: {
      prop: 'kv',
      dataType: 'JSON'
    }
  },
  events: {
    click: {
      condition: [
        '_report',
        '_click'
      ],
      action: function () {
        var e = o({
        }, {
          eid: this.data.eid || {
          }
        }, this.data.kv || {
        });
        s.Boss.elementClick(e)
      }
    },
    expose: {
      condition: [
        '_report',
        '_expose'
      ],
      action: function () {
        if (!this.data._exposed || this.data._multiExpose) {
          this.data._exposed = !0;
          var e = o({
          }, {
            eid: this.data.eid || {
            }
          }, this.data.kv || {
          });
          s.Boss.elementExpose(e)
        }
      }
    }
  }
  }),
  s
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.initPlugin = r;
  var a = n(i(146)),
  s = i(148)
  },
  function (e, t, i) {
  'use strict';
  function n(e) {
  return e && e.__esModule ? e : {
  'default': e
  }
  }
  function o(e) {
  return (o = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
  return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function r() {
  return r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
  }
  return e
  },
  r.apply(this, arguments)
  }
  function a(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function s(e, t) {
  for (var i = 0; i < t.length; i++) {
  var n = t[i];
  n.enumerable = n.enumerable || !1,
  n.configurable = !0,
  'value' in n && (n.writable = !0),
  Object.defineProperty(e, n.key, n)
  }
  }
  function l(e, t, i) {
  return t && s(e.prototype, t),
  i && s(e, i),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t['default'] = void 0;
  var c = n(i(147)),
  d = '//btrace.qq.com/kvcollect',
  u = {
  pageExpose: {
  BossId: 7997,
  Pwd: '339505950'
  },
  pageTime: {
  BossId: 8022,
  Pwd: '1510143251'
  },
  elementExpose: {
  BossId: 7998,
  Pwd: '572449789'
  },
  elementClick: {
  BossId: 7999,
  Pwd: '1246488233'
  }
  },
  p = function () {
  function e(t, i) {
  a(this, e),
  this.bossMap = r({
  }, u, t || {
  }),
  this._initUUID(),
  this.defaultParams = {
    url: location.href,
    ref_url: document.referrer,
    os: navigator.userAgent.match(/(android)\s([\d\.]+)/i) ? 1 : 2,
    network_type: this._getNetWorkType(),
    qq: (c['default'].getCookie('uin') || c['default'].getCookie('luin') || '').replace(/^o0?/, ''),
    qq_openid: '',
    wx_openid: c['default'].getCookie('openid') || '',
    wx_commid: '',
    omgid: window.omgid || '',
    omgbizid: window.omgbizid || '',
    uuid: c['default'].getCookie('h5reporter_customBoss_uuid') || '',
    ptag: c['default'].getUrlParameter('ptag') || '',
    second_share: c['default'].getUrlParameter('first') || '1',
    vuserid: c['default'].getCookie('vuserid') || '',
    main_login: c['default'].getCookie('main_login') ? 'qq' === c['default'].getCookie('main_login') ? 2 : 1 : 0,
    shareSource: c['default'].getUrlParameter('shareSource') || '',
    client_experiment_id: ''
  },
  this.baseParams = r({
  }, this.defaultParams, i || {
  })
  }
  return l(e, [
  {
    key: 'setPageInfo',
    value: function (e, t) {
      e && (this.pagePgInfo = {
        pgid: e,
        ref_pg: {
          pgid: c['default'].getUrlParameter('ref_pg') || t || ''
        }
      }, this.elePgInfo = {
        cur_pg: {
          pgid: e,
          ref_pg: {
            pgid: c['default'].getUrlParameter('ref_pg') || t || ''
          }
        }
      })
    }
  },
  {
    key: 'setKvCommonParams',
    value: function (e) {
      'object' === o(e) && (this.kvParams = e)
    }
  },
  {
    key: 'pageExpose',
    value: function (e) {
      var t = this.bossMap.pageExpose;
      if (t) {
        var i = r({
        }, this.pagePgInfo, e);
        this.report(t, i)
      }
    }
  },
  {
    key: 'pageTime',
    value: function (e) {
      var t = this.bossMap.pageTime;
      if (t) {
        var i = r({
        }, this.pagePgInfo, e);
        this.report(t, i)
      }
    }
  },
  {
    key: 'elementExpose',
    value: function (e) {
      var t = this.bossMap.elementExpose;
      if (t) {
        var i = r({
        }, this.elePgInfo, e);
        this.report(t, i)
      }
    }
  },
  {
    key: 'elementClick',
    value: function (e) {
      var t = this.bossMap.elementClick;
      if (t) {
        var i = r({
        }, this.elePgInfo, e);
        this.report(t, i)
      }
    }
  },
  {
    key: 'report',
    value: function (e, t) {
      var i = new XMLHttpRequest,
      n = [
      ],
      o = r({
      }, t, this.kvParams || {
      }),
      a = r({
      }, e, this.baseParams, {
        kv: JSON.stringify(o),
        _dc: Math.random().toString(36).substr(2, 8)
      });
      for (var s in a) n.push(s + '=' + encodeURIComponent(a[s]));
      i.onreadystatechange = function () {
        4 === this.readyState && 200 !== i.status && 304 !== i.status
      },
      i.open('POST', d, !0),
      i.setRequestHeader('content-type', 'application/x-www-form-urlencoded'),
      i.send(n.join('&')),
      setTimeout(function () {
        4 !== i.readyState && i.abort()
      }, 6000)
    }
  },
  {
    key: '_getNetWorkType',
    value: function () {
      if (!navigator.connection) return 5;
      var e;
      switch (navigator.connection.effectiveType) {
        case 'wifi':
          e = 1;
          break;
        case '2g':
          e = 2;
          break;
        case '3g':
          e = 3;
          break;
        case '4g':
          e = 4;
          break;
        default:
          e = 5
      }
      return e
    }
  },
  {
    key: '_initUUID',
    value: function () {
      c['default'].getCookie('h5reporter_customBoss_uuid') || c['default'].setCookie('h5reporter_customBoss_uuid', c['default'].uuid(), 31536000, '', '/')
    }
  }
  ]), e
  }();
  t['default'] = p
  },
  function (e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t['default'] = void 0;
  var i = {
  setCookie: function (e, t, i, n, o) {
    var r = '';
    switch (this.getType(i)) {
      case 'number':
      case 'undefined':
        r = i === 1 / 0 || void 0 === i ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + i;
        break;
      case 'string':
        r = '; expires=' + i;
        break;
      case 'date':
        r = '; expires=' + i.toUTCString()
    }
    n = n || location.hostname,
    o = o || '/',
    document.cookie = [
      e,
      '=',
      escape(t),
      r,
      ';domain=',
      n,
      ';path=',
      o
    ].join('')
  },
  getCookie: function (e) {
    var t = {
    },
    i = document.cookie;
    i = i.split(';');
    for (var n = 0, o = i.length; n < o; n++) {
      var r = i[n].replace(/^\s+/, '').split('=');
      t[r[0]] = r[1]
    }
    return e ? t ? t[e] : null : t
  },
  uuid: function () {
    function e() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
  },
  getUrlParameter: function (e) {
    e = e.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var t = new RegExp('[\\?&]' + e + '=([^&#]*)'),
    i = t.exec(location.search);
    return null === i ? '' : decodeURIComponent(i[1].replace(/\+/g, ' '))
  },
  getType: function (e) {
    if (null === e) return 'null';
    if (void 0 === e) return 'undefined';
    var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
    return t ? t[1].toLowerCase()  : ''
  }
  };
  t['default'] = i
  },
  function (e, t, i) {
  var n = i(149),
  o = i(156).ReportTree,
  r = i(157).ReportNode;
  e.exports = {
  ReportTree: o,
  ReportNode: r,
  getWindowNode: n.getWindowNode,
  init: function (e) {
    r.addConfig(e),
    o.attachGlobal()
  }
  }
  },
  function (e, t, i) {
  var n = i(150),
  o = i(151),
  r = i(153),
  a = i(155),
  s = i(152);
  e.exports = {
  VirtualNode: n.VirtualNode,
  VirtualElTree: o.VirtualElTree,
  VirtualElNode: r.VirtualElNode,
  ATTR_MUT_HASH: o.ATTR_MUT_HASH,
  getWindowNode: r.getWindowNode,
  Emitter: a.Emitter,
  domHelper: s
  }
  },
  function (e, t) {
  'use strict';
  function i(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function n(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function o(e, t, i) {
  return t && n(e.prototype, t),
  i && n(e, i),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.VirtualNode = void 0;
  var r = function () {
  function e(t) {
    i(this, e),
    this.data = t || {
    },
    this.parent = null,
    this.children = [
    ]
  }
  return o(e, [
    {
      key: 'setData',
      value: function (e) {
        Object.assign(this.data, e)
      }
    },
    {
      key: 'mapParent',
      value: function (e) {
        var t = [
        ];
        if (this.parent) for (var i = this.parent; i; ) {
          var n = i;
          if ('function' == typeof e && (n = e(i)), 'boolean' == typeof n && n) break;
          t.push(n),
          i = i.parent
        }
        return t
      }
    },
    {
      key: 'index',
      value: function () {
        var e = this.parent;
        return e ? e.children.indexOf(this)  : 0
      }
    },
    {
      key: 'append',
      value: function (e) {
        e && (e.remove(), e.parent = this, this.children.push(e))
      }
    },
    {
      key: 'insert',
      value: function (e, t) {
        var i = this;
        t && (t.forEach(function (e) {
          e.remove(),
          e.parent = i
        }), Array.prototype.splice.apply(this.children, [
          e,
          0
        ].concat(t)))
      }
    },
    {
      key: 'remove',
      value: function () {
        var e = this.parent;
        this.parent = null,
        e && (e.children = e.children.filter(function (t) {
          return t.parent == e
        }))
      }
    },
    {
      key: 'clear',
      value: function () {
        if (this.children.length > 0) {
          var e = this.children;
          this.children = [
          ];
          for (var t = 0, i = e.length; t < i; t++) {
            var n = e[t];
            n.parent = null
          }
        }
      }
    }
  ]),
  e
  }();
  t.VirtualNode = r
  },
  function (e, t, i) {
  'use strict';
  function n(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function o(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function r(e, t, i) {
  return t && o(e.prototype, t),
  i && o(e, i),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.VirtualElTree = t.ATTR_MUT_HASH = t.RECALC_HASH = t.UPDATE_HASH = void 0;
  var a = i(152),
  s = i(153),
  l = i(154),
  c = '__updthash';
  t.UPDATE_HASH = c;
  var d = '__rechash';
  t.RECALC_HASH = d;
  var u = '__atmhash';
  t.ATTR_MUT_HASH = u;
  var p = function () {
  function e(t) {
    n(this, e),
    this.NodeClass = t || s.VirtualElNode,
    this.root = null,
    this.observer = null
  }
  return r(e, [
    {
      key: 'attach',
      value: function (e) {
        var t = this,
        i = this,
        n = this.NodeClass;
        if (!n.shouldBeNode(e)) throw new Error('root should be a node');
        this.root = n.getNode(e) || new n(this, e),
        i.update({
          el: e
        }),
        i.reflow({
          el: e
        }),
        this.observer = new MutationObserver(function (e) {
          var i = t.mut(e),
          n = i.updateArr,
          o = i.reflowArr;
          n && n.length > 0 && t.update(n),
          o && o.length > 0 && t.reflow(o)
        }),
        this.observer.observe(e, {
          characterData: !0,
          attributes: !0,
          childList: !0,
          subtree: !0
        })
      }
    },
    {
      key: 'detach',
      value: function () {
        this.root.remove()
      }
    },
    {
      key: 'update',
      value: function (e) {
        var t = this,
        i = (0, l.genHash) (),
        n = null;
        n = e instanceof Array ? e : [
          e
        ],
        n.forEach(function (e) {
          t[e.action || 'add'](e, i)
        })
      }
    },
    {
      key: 'createTree',
      value: function (e, t, i) {
        var n = this,
        o = this.NodeClass,
        r = [
        ];
        return (0, a.domIterator) (e, function (e, i) {
          var a = e[c];
          if (a == t) return !1;
          if (e[c] = t, o.shouldBeNode(e)) {
            var s = o.getNode(e);
            return s ? s.clear()  : s = new o(n, e),
            i ? i.append(s)  : r.push(s),
            s
          }
          return i
        }, i),
        r
      }
    },
    {
      key: 'add',
      value: function (e, t) {
        var i = this.NodeClass,
        n = e.el,
        o = [
        ];
        e.all = e.all || [
          e.el
        ];
        for (var r = 0, s = e.all.length; r < s; r++) {
          var l = e.all[r];
          o = o.concat(this.createTree(l, t))
        }
        if (0 != o.length) {
          var c = null,
          d = null;
          (0, a.parentIterator) (n, function (e) {
            if (n != e) return c = i.getNode(e),
            !!c;
            for (var t = e.previousElementSibling; t && ((0, a.domReverseIterator) (t, function (e) {
              if (d = i.getNode(e)) return !0
            }), !d); ) t = t.previousElementSibling;
            return !!d
          }),
          !d && c ? c.insert(0, o)  : d && (c = c || d.parent, c && c.insert(c.children.indexOf(d) + 1, o))
        }
      }
    },
    {
      key: 'remove',
      value: function (e, t) {
        var i = this.NodeClass;
        e.all = e.all || [
          e.el
        ];
        for (var n = 0, o = e.all.length; n < o; n++) {
          var r = e.all[n];
          (0, a.domIterator) (r, function (e) {
            if (e[c] == t) return !1;
            e[c] = t;
            var n = i.getNode(e);
            return n ? (n.remove(), !1)  : void 0
          })
        }
      }
    },
    {
      key: 'reflow',
      value: function (e) {
        var t = this,
        i = null,
        n = (0, l.genHash) (),
        o = this.NodeClass;
        i = e instanceof Array ? e : [
          e
        ],
        i.forEach(function (e) {
          var i = e.el;
          (0, a.parentReverseIterator) (i, function (e) {
            var i = o.getNode(e);
            if (i && e[d] != n && (e[d] = n, i.recalc()), t.root != i) for (var r = e.nextElementSibling; r; ) (0, a.domIterator) (r, function (e) {
              var t = o.getNode(e);
              t && t.recalc()
            }),
            r = r.nextElementSibling
          }, null, t.root.el),
          e.ignoreChild || (0, a.domIterator) (i, function (e) {
            if (i != e) {
              var t = o.getNode(e);
              t && e[d] != n && (e[d] = n, t.recalc())
            }
          })
        })
      }
    },
    {
      key: 'mut',
      value: function (e) {
        for (var t = [
        ], i = [
        ], n = (0, l.genHash) (), o = this.NodeClass, r = e.length - 1; r >= 0; r--) {
          var s = e[r],
          c = s.target;
          if ('childList' == s.type) {
            var d = (0, a.onlyElements) (s.addedNodes),
            p = (0, a.onlyElements) (s.removedNodes),
            f = s.previousSibling;
            if (d[0] && t.push({
              el: d[0],
              action: 'add',
              all: d
            }), p[0] && t.push({
              el: p[0],
              action: 'remove',
              all: p
            }), f && 1 != f.nodeType && (f = f.previousElementSibling), f) {
              var h = f.nextElementSibling;
              h ? i.push({
                el: h
              })  : i.push({
                el: c,
                ignoreChild: !0
              })
            } else i.push({
              el: c
            })
          } else if ('attributes' == s.type) {
            var v = s.attributeName;
            c[u] == n || 'class' != v && 'style' != v || (c[u] = n, i.push({
              el: c
            }));
            var m = o.getNode(c),
            g = o.shouldBeNode(c);
            m && !g || !m && g && c[u] != n && (t.push({
              el: c,
              action: 'add',
              all: [
                c
              ]
            }), c[u] = n, i.push({
              el: c
            })),
            m && m.updateData(c, v, n)
          } else 1 != c.nodeType && (c = c.parentNode),
          i.push({
            el: c
          })
        }
        return {
          updateArr: t,
          reflowArr: i
        }
      }
    }
  ]),
  e
  }();
  t.VirtualElTree = p
  },
  function (e, t) {
  'use strict';
  function i(e, t, n, o) {
  var r = t(e, n),
  a = e.childNodes;
  if ('boolean' == typeof r) return r;
  for (var s = 0, l = a.length; s < l; s++) {
    var c = a[s];
    if (c && 1 === c.nodeType) {
      var d = i(c, t, r, !0);
      if (d) return !0
    }
  }
  }
  function n(e, t, i, o) {
  var r = t(e, i),
  a = e.childNodes;
  if ('boolean' == typeof r) return r;
  for (var s = a.length - 1; s >= 0; s--) {
    var l = a[s];
    if (l && 1 === l.nodeType) {
      var c = n(l, t, r, !0);
      if (c) return !0
    }
  }
  }
  function o(e, t, i) {
  for (; e && (i = t(e, i), e = e.parentNode, 'boolean' != typeof i || !i); );
  }
  function r(e, t, i, n) {
  for (var o = [
  ]; e && (o.push(e), e != n); ) e = e.parentNode;
  for (var r = o.length - 1; r >= 0 && (i = t(o[r], i), 'boolean' != typeof i || !i); r--);
  }
  function a(e) {
  var t = [
  ];
  if (e && e[0]) for (var i = e.length - 1; i >= 0; i--) {
    var n = e[i];
    1 == n.nodeType && t.unshift(n)
  }
  return t
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.domIterator = i,
  t.domReverseIterator = n,
  t.parentIterator = o,
  t.parentReverseIterator = r,
  t.onlyElements = a
  },
  function (e, t, i) {
  'use strict';
  function n(e) {
  return (n = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function o(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function r(e, t) {
  return !t || 'object' !== n(t) && 'function' != typeof t ? s(e)  : t
  }
  function a(e) {
  return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }) (e)
  }
  function s(e) {
  if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e
  }
  function l(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function c(e, t, i) {
  return t && l(e.prototype, t),
  i && l(e, i),
  e
  }
  function d(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }),
  t && u(e, t)
  }
  function u(e, t) {
  return (u = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t,
    e
  }) (e, t)
  }
  function p() {
  return b ? b : (b = new x, b.scrollLeft = window.scrollX, b.scrollTop = window.scrollY, b.top = 0, b.left = 0, b.width = window.innerWidth, b.height = window.innerHeight, b.isScroller = !0, b.viewport = b.rect = {
    top: 0,
    left: 0,
    right: window.innerWidth,
    bottom: window.innerHeight
  }, b.getScrollParent = function () {
    return null
  }, b.attachScroller = function (e, t) {
    e = e || window,
    t = t || {
    };
    var i = t.throttle,
    n = function () {
      var t = e.scrollX - b.scrollLeft,
      i = e.scrollY - b.scrollTop;
      b.scrollLeft = e.scrollX,
      b.scrollTop = e.scrollY,
      b.moveTree(t, i, !0)
    };
    i > 0 && (n = (0, f.throttle) (n, i)),
    e.addEventListener('scroll', n)
  }, window.addEventListener('resize', function () {
    b.width = window.innerWidth,
    b.height = window.innerHeight,
    b.viewport = b.rect = {
      top: 0,
      left: 0,
      right: window.innerWidth,
      bottom: window.innerHeight
    },
    b.emit('resize')
  }), b)
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.getWindowNode = p,
  t.VirtualElNode = void 0;
  var f = i(154),
  h = i(150),
  v = i(155),
  m = '__doid',
  g = {
  },
  y = 1,
  _ = {
  click: !0,
  scroll: !0
  },
  w = {
  click: !0
  },
  b = null,
  x = function (e) {
  function t(e, i, n) {
    var l;
    return o(this, t),
    l = r(this, a(t).call(this, n)),
    l.uid = 0,
    l.emitter = new v.Emitter(s(l)),
    l.unbinds = {
    },
    l.width = 0,
    l.height = 0,
    l.top = 0,
    l.left = 0,
    l.scrollTop = 0,
    l.scrollLeft = 0,
    l.tree = e,
    l.el = i,
    l.lazy = !0,
    l.overflowHide = !0,
    l.isScroller = !1,
    l.delegates = {
    },
    l.pt = 0,
    l.pl = 0,
    l.visible = !1,
    l.rect = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    l.viewport = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    l.attach(i),
    l
  }
  return d(t, e),
  c(t, null, [
    {
      key: 'shouldBeNode',
      value: function (e) {
        return e && e.dataset.v
      }
    },
    {
      key: 'getNode',
      value: function (e) {
        return g[e[m]]
      }
    }
  ]),
  c(t, [
    {
      key: 'attach',
      value: function (e) {
        var t = !1;
        if (this.detach(), e) {
          var i = e[m];
          t = !i,
          this.el = e,
          t && (i = y++, this.uid = e[m] = i, g[i] = this),
          this.updateData(e)
        }
        return t
      }
    },
    {
      key: 'detach',
      value: function () {
        var e = this.el,
        t = this.unbinds;
        if (e) {
          var i = e[m];
          i && (g[i] = null)
        }
        this.emitter.clear(),
        Object.keys(t).forEach(function (e) {
          setTimeout(t[e])
        })
      }
    },
    {
      key: 'updateData',
      value: function (e, t) {
        if (e = e || this.el) if (t) {
          var i = /data-([\w-]+)/.exec(t),
          n = i && i[1];
          if (n) {
            var o = {
            };
            o[n] = e.dataset[n],
            this.setData(o)
          }
        } else this.setData(e.dataset),
        e.dataset.scroller && this.attachScroller(e)
      }
    },
    {
      key: 'attachScroller',
      value: function (e, t) {
        var i = this,
        n = function () {
          var t = e.scrollLeft - i.scrollLeft,
          n = e.scrollTop - i.scrollTop;
          i.scrollTop = e.scrollTop,
          i.scrollLeft = e.scrollLeft,
          i.moveTree(t, n, !0)
        };
        t = t || {
        };
        var o = t.throttle;
        o > 0 && (n = (0, f.throttle) (n, o)),
        this.scrollTop = e.scrollTop,
        this.scrollLeft = e.scrollLeft,
        this.isScroller = !0,
        this.on('scroll', n)
      }
    },
    {
      key: 'getScrollParent',
      value: function () {
        for (var e = this.parent; e && !e.isScroller; ) e = e.parent;
        return e || p()
      }
    },
    {
      key: 'getRect',
      value: function () {
        return this.rect
      }
    },
    {
      key: 'recalc',
      value: function () {
        var e = this.el;
        if (e) {
          var t = e.getBoundingClientRect(),
          i = this.getScrollParent(),
          n = i.getRect(),
          o = this.top = t.top - n.top + i.scrollTop,
          r = this.left = t.left - n.left + i.scrollLeft;
          this.width = t.width,
          this.height = t.height,
          this.isScroller && (this.pt = i.pt + o - this.scrollTop, this.pl = i.pl + r - this.scrollLeft),
          this.rect.top = t.top,
          this.rect.left = t.left,
          this.rect.right = t.right,
          this.rect.bottom = t.bottom,
          this.calcViewPort(),
          this.syncVisible()
        }
      }
    },
    {
      key: 'move',
      value: function (e, t) {
        this.isScroller && (this.pt = this.pt - t, this.pl = this.pl - e);
        var i = this.rect;
        i.top = i.top - t,
        i.left = i.left - e,
        i.right = i.right - e,
        i.bottom = i.bottom - t,
        this.calcViewPort(),
        this.syncVisible()
      }
    },
    {
      key: 'calcViewPort',
      value: function () {
        var e = this.rect,
        t = this.parent || p(),
        i = this.viewport,
        n = t.viewport;
        this.overflowHide ? (i.top = Math.max(e.top, n.top), i.left = Math.max(e.left, n.left), i.right = Math.min(e.right, n.right), i.bottom = Math.min(e.bottom, n.bottom))  : (i.top = n.top, i.left = n.left, i.right = n.right, i.bottom = n.bottom)
      }
    },
    {
      key: 'syncVisible',
      value: function () {
        var e = this.calcVisible();
        if (e != this.visible) return this.visible = e,
        this.emitter.emit('visibilityChanged', e),
        !0
      }
    },
    {
      key: 'moveTree',
      value: function (e, t, i) {
        i || this.move(e, t);
        for (var n = this.children.length - 1; n >= 0; n--) this.children[n].moveTree(e, t)
      }
    },
    {
      key: 'calcVisible',
      value: function () {
        var e = this.rect,
        t = (this.parent || p()).viewport;
        return !(e.left >= t.right || e.right <= t.left || e.top >= t.bottom || e.bottom <= t.top)
      }
    },
    {
      key: 'on',
      value: function (e, i) {
        var n = this,
        o = this.emitter;
        if (o.on(e, i), _[e]) {
          var r = this.unbinds,
          a = this.el;
          if (!r[e]) {
            if (w[e]) {
              var s = this.tree.root;
              if (s && !s.delegates[e] && s.el) {
                var l = s.delegates[e] = function (i) {
                  var n = i.target,
                  o = t.getNode(n);
                  !o || o.lazy || i['_vn_id_' + o.uid] || (o.emitter.emit(e, i, o.lazy), i['_vn_id_' + o.uid] = !0)
                };
                s.el.addEventListener(e, l, !0)
              }
            }
            var c = function (t) {
              //t['_vn_id_' + n.uid] || (o.emit(e, t, n.lazy), t['_vn_id_' + n.uid] = !0)
              console.log("禁止打开APP");
            };
            a.addEventListener(e, c, !0),
            r[e] = function () {
              a.removeEventListener(e, c)
            }
          }
        }
        return this
      }
    },
    {
      key: 'off',
      value: function (e, t) {
        return this.emitter.off(e, t),
        this
      }
    },
    {
      key: 'emit',
      value: function (e, t) {
        return this.emitter.emit(e, t),
        this
      }
    }
  ]),
  t
  }(h.VirtualNode);
  t.VirtualElNode = x
  },
  function (e, t) {
  'use strict';
  function i() {
  return (new Date).getTime() + '' + o++
  }
  function n(e, t) {
  var i = 0;
  return t = t || 0,
  function () {
    var n = this,
    o = arguments;
    clearTimeout(i),
    i = setTimeout(function () {
      e.apply(n, o)
    }, t)
  }
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.genHash = i,
  t.throttle = n;
  var o = 0
  },
  function (e, t) {
  'use strict';
  function i(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function n(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function o(e, t, i) {
  return t && n(e.prototype, t),
  i && n(e, i),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.Emitter = void 0;
  var r = function () {
  function e(t) {
    i(this, e),
    this.context = t,
    this.events = {
    }
  }
  return o(e, [
    {
      key: 'on',
      value: function (e, t) {
        var i = this.events[e] || [
        ];
        return i.push(t),
        this.events[e] = i,
        this
      }
    },
    {
      key: 'off',
      value: function (e, t) {
        if ('undefined' == typeof t) this.events[e] = [
        ];
         else for (var i = this.events[e] || [
        ], n = i.length - 1; n >= 0; n--) if (i[n] === t) {
          i[n] = null;
          break
        }
        return this
      }
    },
    {
      key: 'emit',
      value: function (e, t, i) {
        var n = !0,
        o = this.events[e] || [
        ];
        'boolean' == typeof i && (n = i);
        for (var r = o.length - 1; r >= 0; r--) {
          var a = o[r];
          if ('function' == typeof a) if (n) setTimeout(function (e, t, i) {
            e.call(t, i)
          }, 0, a, this.context, t);
           else try {
            a.call(this.context, t)
          } catch (s) {
          }
        }
        return this
      }
    },
    {
      key: 'clear',
      value: function () {
        this.events = {
        }
      }
    },
    {
      key: 'listeners',
      value: function (e) {
        return this.events[e] || [
        ]
      }
    }
  ]),
  e
  }();
  t.Emitter = r
  },
  function (e, t, i) {
  'use strict';
  function n(e) {
  return (n = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function o(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function r(e, t) {
  return !t || 'object' !== n(t) && 'function' != typeof t ? a(e)  : t
  }
  function a(e) {
  if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e
  }
  function s(e) {
  return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }) (e)
  }
  function l(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function c(e, t, i) {
  return t && l(e.prototype, t),
  i && l(e, i),
  e
  }
  function d(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }),
  t && u(e, t)
  }
  function u(e, t) {
  return (u = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t,
    e
  }) (e, t)
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.ReportTree = void 0;
  var p = i(149),
  f = i(157),
  h = null,
  v = function (e) {
  function t(e) {
    var i;
    return o(this, t),
    i = r(this, s(t).call(this, e || f.ReportNode)),
    i.commonData = {
    },
    i.pageData = {
    },
    i.lastPageData = {
    },
    i
  }
  return d(t, e),
  c(t, null, [
    {
      key: 'attachGlobal',
      value: function (e) {
        return h = new this(e),
        h.attach(document.body),
        (0, p.getWindowNode) ().on('resize', function () {
          h.reflow(h.root)
        }),
        (0, p.getWindowNode) ().attachScroller(window, {
          throttle: 200
        }),
        (0, p.getWindowNode) ().append(h.root),
        h
      }
    },
    {
      key: 'getGlobalTree',
      value: function () {
        return h
      }
    }
  ]),
  c(t, [
    {
      key: 'pv',
      value: function () {
      }
    },
    {
      key: 'setCommon',
      value: function (e) {
        Object.assign(this.commonData, e)
      }
    },
    {
      key: 'setPage',
      value: function (e) {
        Object.assign(this.pageData, e)
      }
    },
    {
      key: 'setLastPage',
      value: function (e) {
        Object.assign(this.lastPageData, e)
      }
    }
  ]),
  t
  }(p.VirtualElTree);
  t.ReportTree = v
  },
  function (e, t, i) {
  'use strict';
  function n(e) {
  return (n = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function o(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function r(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(e, n.key, n)
  }
  }
  function a(e, t, i) {
  return t && r(e.prototype, t),
  i && r(e, i),
  e
  }
  function s(e, t) {
  return !t || 'object' !== n(t) && 'function' != typeof t ? l(e)  : t
  }
  function l(e) {
  if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e
  }
  function c(e, t, i) {
  return (c = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
    var n = d(e, t);
    if (n) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      return o.get ? o.get.call(i)  : o.value
    }
  }) (e, t, i || e)
  }
  function d(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = u(e), null !== e); );
  return e
  }
  function u(e) {
  return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  }) (e)
  }
  function p(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }),
  t && f(e, t)
  }
  function f(e, t) {
  return (f = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t,
    e
  }) (e, t)
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.ReportNode = void 0;
  var h = i(158),
  v = i(149),
  m = [
  ],
  g = [
  ],
  y = 'data-ofhide',
  _ = 'data-scroller',
  w = 'data-lazy',
  b = function (e) {
  function t(e, i, n) {
    var r;
    return o(this, t),
    r = s(this, u(t).call(this, e, i, n)),
    r.lazy = !1,
    r.lastHash = 0,
    r
  }
  return p(t, e),
  a(t, [
    {
      key: 'updateData',
      value: function (e, t, i) {
        var n = this,
        o = e.attributes,
        r = function (t) {
          var i = o[t.name];
          i && t.func.call(n, i.value, e)
        };
        m.forEach(function (a) {
          if ('undefined' == typeof t) a.arr.forEach(r);
           else {
            var s = a.map[t];
            s && r(s)
          }
          a.events.forEach(function (r) {
            var a = r.name;
            n.off(a, r.action),
            r.condition.call(n, o, e) && n.on(a, r.action);
            var s = r.keyAttrs;
            s instanceof Array && t && s.indexOf(t) > - 1 && (!i || i != n.lastHash) && (n.lastHash = i, n.emit(a))
          })
        }),
        'undefined' == typeof t ? (this.updateOfData(o, e), this.updateScrollData(o, e), this.updateLazyData(o, e))  : t == y ? this.updateOfData(o, e)  : t == _ ? this.updateScrollData(o, e)  : t == w && this.updateLazyData(o, e)
      }
    },
    {
      key: 'updateOfData',
      value: function (e, t) {
        var i = e[y];
        this.overflowHide = !(i && 'false' === i.value)
      }
    },
    {
      key: 'updateScrollData',
      value: function (e, t) {
        var i = e[_];
        i ? this.attachScroller(t)  : this.off('scroll')
      }
    },
    {
      key: 'updateLazyData',
      value: function (e, t) {
        var i = e[w];
        this.lazy = !(!i || 'true' !== i.value)
      }
    },
    {
      key: 'on',
      value: function (e, i) {
        var n = this,
        o = 'expose' == e && this.emitter.listeners('expose').length <= 0;
        return c(u(t.prototype), 'on', this).call(this, e, i),
        o && c(u(t.prototype), 'on', this).call(this, 'visibilityChanged', function (e) {
          e && n.emit('expose')
        }),
        this
      }
    },
    {
      key: 'getParam',
      value: function (e, t) {
        var i = this,
        n = t || {
        },
        o = [
        ];
        return e.forEach(function (e) {
          var t = n[e] = n[e] || i.data[e];
          t || o.push(e)
        }),
        o.length >= 0 && this.mapParent(function (e) {
          var t = e.data || {
          };
          return o = o.filter(function (e) {
            var i = n[e] = t[e];
            return !i
          }),
          0 === o.length
        }),
        n
      }
    }
  ], [
    {
      key: 'addConfig',
      value: function (e) {
        e instanceof Array || (e = [
          e
        ]);
        var t = {
        },
        i = [
        ],
        o = {
        };
        m = m.concat(e.map(function (e) {
          var r = e.attrs,
          a = e.events,
          s = [
          ];
          if (e.overflowHide && (y = e.overflowHide), e.isScroller && (_ = e.isScroller), e.lazy && (w = e.lazy), r) {
            var l = Object.keys(r);
            l.forEach(function (e) {
              t[e] || (t[e] = !0, g.push(e));
              var a,
              s = r[e];
              if ('boolean' == typeof s ? a = function (t) {
                s && (this.data[e] = t)
              }
               : 'JSON' == s ? a = function (e) {
                try {
                  this.setData(JSON.parse(e))
                } catch (t) {
                }
              }
               : 'KV' == s ? a = function (e) {
                this.setData((0, h.kvStringToObject) (e))
              }
               : 'string' == typeof s ? a = function (e) {
                this.data[s] = e
              }
               : 'object' == n(s) ? a = function (t) {
                var i,
                n = s.prop || e,
                o = s.dataType;
                if ('JSON' == o) try {
                  i = JSON.parse(t)
                } catch (r) {
                } else i = 'KV' == o ? (0, h.kvStringToObject) (t)  : t;
                this.data[n] = i || {
                }
              }
               : 'function' == typeof s && (a = s), a) {
                var l = {
                  name: e,
                  func: a
                };
                i.push(l),
                o[e] = l
              }
            })
          }
          return a && (s = Object.keys(a).map(function (e) {
            var t = a[e],
            i = {
              name: e,
              action: t.action
            },
            n = t.condition;
            return 'string' == typeof n ? (i.condition = function (e) {
              return e[n]
            }, 'click' != e && (i.keyAttrs = [
              n
            ]))  : n instanceof Array ? (i.condition = function (e) {
              for (var t = 0; n[t]; ) {
                if (e[n[t]]) return !0;
                t++
              }
              return !1
            }, 'click' != e && (i.keyAttrs = n))  : 'function' == typeof n ? i.condition = n : i.condition = function () {
              return !0
            },
            t.keyAttrs && (i.keyAttrs = t.keyAttrs),
            i
          })),
          {
            arr: i,
            map: o,
            events: s
          }
        }))
      }
    },
    {
      key: 'shouldBeNode',
      value: function (e) {
        var t = e.attributes;
        return !!(t[y] || t[_] || t[w]) || g.some(function (e) {
          return t[e]
        })
      }
    }
  ]),
  t
  }(v.VirtualElNode);
  t.ReportNode = b
  },
  function (e, t) {
  'use strict';
  function i(e) {
  var t = {
  };
  if ('string' == typeof e) for (var i = e.split('&'), n = 0, o = i.length; n < o; n++) {
    var r = i[n],
    a = /^([^=]+)=(.*)$/.exec(r);
    a && (t[a[1]] = decodeURIComponent(a[2]))
  }
  return t
  }
  function n(e) {
  return Object.keys(e).map(function (t) {
    return t + '=' + encodeURIComponent(e[t])
  }).join('&')
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.kvStringToObject = i,
  t.objectToKvString = n
  }
  ]);
  