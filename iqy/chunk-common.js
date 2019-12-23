(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['chunk-common'],
{
  '00b9': function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return y
    }),
    n.d(e, 'f', function () {
      return _
    }),
    n.d(e, 'a', function () {
      return x
    }),
    n.d(e, 'e', function () {
      return O
    }),
    n.d(e, 'c', function () {
      return I
    }),
    n.d(e, 'g', function () {
      return T
    }),
    n.d(e, 'h', function () {
      return L
    }),
    n.d(e, 'i', function () {
      return N
    }),
    n.d(e, 'd', function () {
      return A
    });
    n('ac6a'),
    n('f3e2'),
    n('7f7f'),
    n('96cf');
    var i = n('3b8d'),
    r = n('936f'),
    a = n('b2e7'),
    o = n('2c06'),
    s = n('8296'),
    c = '//paopao.iqiyi.com/apis/e/paopao/list.action',
    u = '//paopao.iqiyi.com/apis/e/user/info.action',
    l = '//api-t.iqiyi.com/feed/get_user_feeds',
    d = '//api-t.iqiyi.com/feed/agree',
    p = '//paopao.iqiyi.com/apis/e/starwall/basic_wall.action',
    h = '//paopao.iqiyi.com/apis/e/starwall/wallBaseInfos.action',
    f = '//pub.m.iqiyi.com/h5/bubble/influence.json',
    m = '//paopao.iqiyi.com/apis/e/starwall/wallBaseInfos.action',
    v = '//qiqu.iqiyi.com/apis/tagcategoryvideos',
    b = 119,
    g = '9.2.0';
    function y() {
      return w.apply(this, arguments)
    }
    function w() {
      return w = Object(i['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = {
                authcookie: Object(a['x']) (),
                m_device_id: Object(a['w']) (),
                agenttype: b,
                agentversion: g
              },
              t.next = 3,
              r['a'].jsonpCache(c, {
                params: e
              });
            case 3:
              return n = t.sent,
              i = n.data,
              t.abrupt('return', 'A00000' === i.code ? i.data.atoken : null);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), w.apply(this, arguments)
    }
    function _(t) {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        o,
        s,
        c;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              y({
                agenttype: b
              });
            case 2:
              return n = t.sent,
              i = {
                atoken: n,
                uid: e,
                authcookie: Object(a['x']) (),
                device_id: Object(a['w']) (),
                agenttype: b,
                agentversion: g
              },
              t.next = 6,
              r['a'].jsonp(u, {
                params: i
              });
            case 6:
              return o = t.sent,
              s = o.data,
              c = {
                user_concerned_size: s.data.concerned_size,
                user_wall_size: s.data.wall_size,
                user_big_v: s.data.userinfo.isvip,
                user_kol: s.data.userinfo.kol
              },
              t.abrupt('return', {
                data: {
                  userCircleInfo: c
                }
              });
            case 10:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), k.apply(this, arguments)
    }
    function x(t) {
      return C.apply(this, arguments)
    }
    function C() {
      return C = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              r['a'].get(d, {
                params: {
                  authcookie: Object(a['x']) (),
                  device_id: Object(a['w']) (),
                  agenttype: b,
                  wallId: e.wallId,
                  feedId: e.feedId,
                  sourceType: e.sourceType,
                  owner: e.uid,
                  agree: e.agree || e.isAgree ? 0 : 1
                }
              });
            case 2:
              return n = t.sent,
              t.abrupt('return', n);
            case 4:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), C.apply(this, arguments)
    }
    function O(t) {
      return j.apply(this, arguments)
    }
    function j() {
      return j = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              r['a'].jsonp(l, {
                params: {
                  authcookie: Object(a['x']) (),
                  owner: e.uid,
                  agenttype: b,
                  num: e.pageSize,
                  feedId: e.lastFeedId,
                  feedTypes: e.feedTypes
                }
              });
            case 2:
              return n = t.sent,
              t.abrupt('return', n.data);
            case 4:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), j.apply(this, arguments)
    }
    function I(t) {
      return S.apply(this, arguments)
    }
    function S() {
      return S = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        s;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              y({
                agenttype: b
              });
            case 2:
              return n = t.sent,
              i = {
                cIds: e.wallIds,
                atoken: n,
                m_device_id: Object(a['w']) (),
                agenttype: b,
                agentversion: Object(o['t']) ()
              },
              t.next = 6,
              r['a'].jsonp(h, {
                params: i
              });
            case 6:
              if (s = t.sent, !s || 'A00000' !== s.data.code) {
                t.next = 9;
                break
              }
              return t.abrupt('return', s.data.data);
            case 9:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), S.apply(this, arguments)
    }
    function T(t) {
      return E.apply(this, arguments)
    }
    function E() {
      return E = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                type: e.pageType,
                page: e.pageNum,
                startDate: e.startDate || ''
              },
              t.next = 3,
              r['a'].jsonp(f, {
                params: n
              });
            case 3:
              return i = t.sent,
              a = i.data,
              t.abrupt('return', 'A00000' === a.code ? a.data : null);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), E.apply(this, arguments)
    }
    function L(t) {
      return R.apply(this, arguments)
    }
    function R() {
      return R = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        o;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                m_device_id: Object(a['w']) (),
                agenttype: b,
                agentversion: g,
                atoken: e.atoken,
                cIds: e.cIds
              },
              t.next = 3,
              r['a'].jsonp(m, {
                params: n
              });
            case 3:
              return i = t.sent,
              o = i.data,
              t.abrupt('return', 'A00000' === o.code ? o.data : null);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), R.apply(this, arguments)
    }
    function N(t) {
      return q.apply(this, arguments)
    }
    function q() {
      return q = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                tag_category: e.name,
                rltnum: e.rltnum || 30,
                area: e.area,
                cid: e.cid,
                id: e.tvid,
                tag_limit: e.tagLimit,
                rltfmt: 'json',
                play_platform: 'H5_QIYI'
              },
              t.next = 3,
              r['a'].jsonp(v, {
                params: n
              });
            case 3:
              return i = t.sent,
              a = i.data,
              'A00000' === a.code && (a.data.forEach(function (t) {
                t.pageUrl = Object(s['H']) (t.pageUrl),
                t.pictureUrl = Object(s['o']) (t.pictureUrl, '195_260')
              }), a.pingback = {
                area: a.area,
                bkt: a.bucket,
                event_id: a.event_id
              }),
              t.abrupt('return', a);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), q.apply(this, arguments)
    }
    function A(t) {
      return P.apply(this, arguments)
    }
    function P() {
      return P = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        s;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                agentversion: Object(o['t']) (),
                authcooakie: Object(a['x']) (),
                agenttype: Object(o['s']) (),
                m_device_id: Object(a['w']) (),
                wallId: e.wallId || '',
                qypid: e.qypid,
                atoken: e.atoken
              },
              t.next = 3,
              r['a'].jsonp(p, {
                params: n
              });
            case 3:
              return i = t.sent,
              s = i.data,
              t.abrupt('return', 'A00000' === s.code ? s.data : null);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), P.apply(this, arguments)
    }
  },
  '0578': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.isForbidError ? n('section', {
          staticClass: 'm-closeUser-tip outsiteplay-tip'
        }, [
          t._m(0),
          t._m(1)
        ])  : t._e(),
        t.isConcurrentError ? n('section', {
          staticClass: 'm-closeUser-tip outsiteplay-tip'
        }, [
          t._m(2),
          t._m(3)
        ])  : t._e()
      ])
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('span', {
          staticClass: 'icon-wrap'
        }, [
          n('i', {
            staticClass: 'c-playPage-icon c-playPage-warn'
          })
        ])
      },
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'c-info'
        }, [
          n('div', {
            staticClass: 'info-txt'
          }, [
            t._v('您的会员账号出现异常登录且已被多次冻结')
          ]),
          n('div', {
            staticClass: 'info-txt'
          }, [
            t._v('请拨打客服电话解封：'),
            n('a', {
              attrs: {
                href: 'tel:400-800-7171'
              }
            }, [
              t._v('400-800-7171')
            ]),
            t._v('。')
          ])
        ])
      },
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('span', {
          staticClass: 'icon-wrap'
        }, [
          n('i', {
            staticClass: 'c-playPage-icon c-playPage-warn'
          })
        ])
      },
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'c-info'
        }, [
          n('div', {
            staticClass: 'info-txt'
          }, [
            t._v('您的VIP账号已被多人使用，')
          ]),
          n('div', {
            staticClass: 'info-txt'
          }, [
            t._v('暂时无法观看。想继续观看？')
          ]),
          n('div', {
            staticClass: 'info-txt'
          }, [
            t._v('请关闭其他设备下的视频播放或\n        '),
            n('a', {
              staticClass: 'green',
              attrs: {
                href: 'https://m.iqiyi.com/m/security/changePassword'
              }
            }, [
              t._v('修改密码')
            ])
          ])
        ])
      }
    ],
    a = (n('57e7'), n('96cf'), n('3b8d')),
    o = (n('c5f6'), n('b2e7')),
    s = n('6f18'),
    c = n('8296'),
    u = {
      name: 'VideoLayerAccountError',
      props: {
        qipuId: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          isConcurrentError: !1,
          isForbidError: !1,
          timer: null
        }
      },
      computed: {
        isShow: function () {
          return this.isConcurrentError || this.isForbidError
        },
        block: function () {
          return this.isConcurrentError ? '1504121_1' : this.isForbidError ? '1504121_2' : ''
        }
      },
      beforeMount: function () {
        var t = this,
        e = this.$parent;
        e.$on('created', function () {
          t.$player = e,
          e.on('play', function () {
            t.timer && t.timer.start()
          }),
          e.on('pause', function () {
            t.timer && t.timer.stop()
          }),
          e.$on('loaded', function () {
            t.checkVip()
          })
        })
      },
      methods: {
        checkVip: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n,
            i,
            r = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (Object(o['M']) ()) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt('return', !1);
                case 2:
                  return t.next = 4,
                  Object(o['u']) ();
                case 4:
                  e = t.sent,
                  'A00000' === e.code ? (n = e.data ? e.data.keepalive : '', i = 1000 * ( + n || 30), this.timer && this.timer.stop(), this.timer = new c['c'](function () {
                    Object(s['e']) ({
                      tvid: r.qipuId
                    })
                  }, i))  : [
                    'A10001',
                    'A10002',
                    'A10004'
                  ].indexOf(e.code) >= 0 && (this.isConcurrentError = 'A10001' === e.code, this.isForbidError = 'A10001' !== e.code, this.$player.src(''), this.$parent.$emit('layerShow', {
                    type: this.isConcurrentError ? 'concurrent' : 'forbid'
                  }));
                case 6:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }()
      }
    },
    l = u,
    d = n('2877'),
    p = Object(d['a']) (l, i, r, !1, null, null, null);
    e['a'] = p.exports
  },
  '090f': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return i
    });
    n('a481');
    function i(t) {
      return t.replace(/^https?:/, '')
    }
  },
  '0b16': function (t, e, n) {
    'use strict';
    var i = n('1985'),
    r = n('35e86');
    function a() {
      this.protocol = null,
      this.slashes = null,
      this.auth = null,
      this.host = null,
      this.port = null,
      this.hostname = null,
      this.hash = null,
      this.search = null,
      this.query = null,
      this.pathname = null,
      this.path = null,
      this.href = null
    }
    e.parse = _,
    e.resolve = x,
    e.resolveObject = C,
    e.format = k,
    e.Url = a;
    var o = /^([a-z0-9.+-]+:)/i,
    s = /:[0-9]*$/,
    c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    u = [
      '<',
      '>',
      '"',
      '`',
      ' ',
      '\r',
      '\n',
      '\t'
    ],
    l = [
      '{',
      '}',
      '|',
      '\\',
      '^',
      '`'
    ].concat(u),
    d = [
      '\''
    ].concat(l),
    p = [
      '%',
      '/',
      '?',
      ';',
      '#'
    ].concat(d),
    h = [
      '/',
      '?',
      '#'
    ],
    f = 255,
    m = /^[+a-z0-9A-Z_-]{0,63}$/,
    v = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    b = {
      javascript: !0,
      'javascript:': !0
    },
    g = {
      javascript: !0,
      'javascript:': !0
    },
    y = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      'http:': !0,
      'https:': !0,
      'ftp:': !0,
      'gopher:': !0,
      'file:': !0
    },
    w = n('b383');
    function _(t, e, n) {
      if (t && r.isObject(t) && t instanceof a) return t;
      var i = new a;
      return i.parse(t, e, n),
      i
    }
    function k(t) {
      return r.isString(t) && (t = _(t)),
      t instanceof a ? t.format()  : a.prototype.format.call(t)
    }
    function x(t, e) {
      return _(t, !1, !0).resolve(e)
    }
    function C(t, e) {
      return t ? _(t, !1, !0).resolveObject(e)  : e
    }
    a.prototype.parse = function (t, e, n) {
      if (!r.isString(t)) throw new TypeError('Parameter \'url\' must be a string, not ' + typeof t);
      var a = t.indexOf('?'),
      s = - 1 !== a && a < t.indexOf('#') ? '?' : '#',
      u = t.split(s),
      l = /\\/g;
      u[0] = u[0].replace(l, '/'),
      t = u.join(s);
      var _ = t;
      if (_ = _.trim(), !n && 1 === t.split('#').length) {
        var k = c.exec(_);
        if (k) return this.path = _,
        this.href = _,
        this.pathname = k[1],
        k[2] ? (this.search = k[2], this.query = e ? w.parse(this.search.substr(1))  : this.search.substr(1))  : e && (this.search = '', this.query = {
        }),
        this
      }
      var x = o.exec(_);
      if (x) {
        x = x[0];
        var C = x.toLowerCase();
        this.protocol = C,
        _ = _.substr(x.length)
      }
      if (n || x || _.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var O = '//' === _.substr(0, 2);
        !O || x && g[x] || (_ = _.substr(2), this.slashes = !0)
      }
      if (!g[x] && (O || x && !y[x])) {
        for (var j, I, S = - 1, T = 0; T < h.length; T++) {
          var E = _.indexOf(h[T]);
          - 1 !== E && ( - 1 === S || E < S) && (S = E)
        }
        I = - 1 === S ? _.lastIndexOf('@')  : _.lastIndexOf('@', S),
        - 1 !== I && (j = _.slice(0, I), _ = _.slice(I + 1), this.auth = decodeURIComponent(j)),
        S = - 1;
        for (T = 0; T < p.length; T++) {
          E = _.indexOf(p[T]);
          - 1 !== E && ( - 1 === S || E < S) && (S = E)
        }
        - 1 === S && (S = _.length),
        this.host = _.slice(0, S),
        _ = _.slice(S),
        this.parseHost(),
        this.hostname = this.hostname || '';
        var L = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
        if (!L) for (var R = this.hostname.split(/\./), N = (T = 0, R.length); T < N; T++) {
          var q = R[T];
          if (q && !q.match(m)) {
            for (var A = '', P = 0, U = q.length; P < U; P++) q.charCodeAt(P) > 127 ? A += 'x' : A += q[P];
            if (!A.match(m)) {
              var M = R.slice(0, T),
              $ = R.slice(T + 1),
              D = q.match(v);
              D && (M.push(D[1]), $.unshift(D[2])),
              $.length && (_ = '/' + $.join('.') + _),
              this.hostname = M.join('.');
              break
            }
          }
        }
        this.hostname.length > f ? this.hostname = '' : this.hostname = this.hostname.toLowerCase(),
        L || (this.hostname = i.toASCII(this.hostname));
        var H = this.port ? ':' + this.port : '',
        B = this.hostname || '';
        this.host = B + H,
        this.href += this.host,
        L && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), '/' !== _[0] && (_ = '/' + _))
      }
      if (!b[C]) for (T = 0, N = d.length; T < N; T++) {
        var V = d[T];
        if ( - 1 !== _.indexOf(V)) {
          var z = encodeURIComponent(V);
          z === V && (z = escape(V)),
          _ = _.split(V).join(z)
        }
      }
      var F = _.indexOf('#');
      - 1 !== F && (this.hash = _.substr(F), _ = _.slice(0, F));
      var W = _.indexOf('?');
      if ( - 1 !== W ? (this.search = _.substr(W), this.query = _.substr(W + 1), e && (this.query = w.parse(this.query)), _ = _.slice(0, W))  : e && (this.search = '', this.query = {
      }), _ && (this.pathname = _), y[C] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search) {
        H = this.pathname || '';
        var X = this.search || '';
        this.path = H + X
      }
      return this.href = this.format(),
      this
    },
    a.prototype.format = function () {
      var t = this.auth || '';
      t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ':'), t += '@');
      var e = this.protocol || '',
      n = this.pathname || '',
      i = this.hash || '',
      a = !1,
      o = '';
      this.host ? a = t + this.host : this.hostname && (a = t + ( - 1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']'), this.port && (a += ':' + this.port)),
      this.query && r.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
      var s = this.search || o && '?' + o || '';
      return e && ':' !== e.substr( - 1) && (e += ':'),
      this.slashes || (!e || y[e]) && !1 !== a ? (a = '//' + (a || ''), n && '/' !== n.charAt(0) && (n = '/' + n))  : a || (a = ''),
      i && '#' !== i.charAt(0) && (i = '#' + i),
      s && '?' !== s.charAt(0) && (s = '?' + s),
      n = n.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t)
      }),
      s = s.replace('#', '%23'),
      e + a + n + s + i
    },
    a.prototype.resolve = function (t) {
      return this.resolveObject(_(t, !1, !0)).format()
    },
    a.prototype.resolveObject = function (t) {
      if (r.isString(t)) {
        var e = new a;
        e.parse(t, !1, !0),
        t = e
      }
      for (var n = new a, i = Object.keys(this), o = 0; o < i.length; o++) {
        var s = i[o];
        n[s] = this[s]
      }
      if (n.hash = t.hash, '' === t.href) return n.href = n.format(),
      n;
      if (t.slashes && !t.protocol) {
        for (var c = Object.keys(t), u = 0; u < c.length; u++) {
          var l = c[u];
          'protocol' !== l && (n[l] = t[l])
        }
        return y[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = '/'),
        n.href = n.format(),
        n
      }
      if (t.protocol && t.protocol !== n.protocol) {
        if (!y[t.protocol]) {
          for (var d = Object.keys(t), p = 0; p < d.length; p++) {
            var h = d[p];
            n[h] = t[h]
          }
          return n.href = n.format(),
          n
        }
        if (n.protocol = t.protocol, t.host || g[t.protocol]) n.pathname = t.pathname;
         else {
          var f = (t.pathname || '').split('/');
          while (f.length && !(t.host = f.shift()));
          t.host || (t.host = ''),
          t.hostname || (t.hostname = ''),
          '' !== f[0] && f.unshift(''),
          f.length < 2 && f.unshift(''),
          n.pathname = f.join('/')
        }
        if (n.search = t.search, n.query = t.query, n.host = t.host || '', n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
          var m = n.pathname || '',
          v = n.search || '';
          n.path = m + v
        }
        return n.slashes = n.slashes || t.slashes,
        n.href = n.format(),
        n
      }
      var b = n.pathname && '/' === n.pathname.charAt(0),
      w = t.host || t.pathname && '/' === t.pathname.charAt(0),
      _ = w || b || n.host && t.pathname,
      k = _,
      x = n.pathname && n.pathname.split('/') || [
      ],
      C = (f = t.pathname && t.pathname.split('/') || [
      ], n.protocol && !y[n.protocol]);
      if (C && (n.hostname = '', n.port = null, n.host && ('' === x[0] ? x[0] = n.host : x.unshift(n.host)), n.host = '', t.protocol && (t.hostname = null, t.port = null, t.host && ('' === f[0] ? f[0] = t.host : f.unshift(t.host)), t.host = null), _ = _ && ('' === f[0] || '' === x[0])), w) n.host = t.host || '' === t.host ? t.host : n.host,
      n.hostname = t.hostname || '' === t.hostname ? t.hostname : n.hostname,
      n.search = t.search,
      n.query = t.query,
      x = f;
       else if (f.length) x || (x = [
      ]),
      x.pop(),
      x = x.concat(f),
      n.search = t.search,
      n.query = t.query;
       else if (!r.isNullOrUndefined(t.search)) {
        if (C) {
          n.hostname = n.host = x.shift();
          var O = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
          O && (n.auth = O.shift(), n.host = n.hostname = O.shift())
        }
        return n.search = t.search,
        n.query = t.query,
        r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
        n.href = n.format(),
        n
      }
      if (!x.length) return n.pathname = null,
      n.search ? n.path = '/' + n.search : n.path = null,
      n.href = n.format(),
      n;
      for (var j = x.slice( - 1) [0], I = (n.host || t.host || x.length > 1) && ('.' === j || '..' === j) || '' === j, S = 0, T = x.length; T >= 0; T--) j = x[T],
      '.' === j ? x.splice(T, 1)  : '..' === j ? (x.splice(T, 1), S++)  : S && (x.splice(T, 1), S--);
      if (!_ && !k) for (; S--; S) x.unshift('..');
      !_ || '' === x[0] || x[0] && '/' === x[0].charAt(0) || x.unshift(''),
      I && '/' !== x.join('/').substr( - 1) && x.push('');
      var E = '' === x[0] || x[0] && '/' === x[0].charAt(0);
      if (C) {
        n.hostname = n.host = E ? '' : x.length ? x.shift()  : '';
        O = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
        O && (n.auth = O.shift(), n.host = n.hostname = O.shift())
      }
      return _ = _ || n.host && x.length,
      _ && !E && x.unshift(''),
      x.length ? n.pathname = x.join('/')  : (n.pathname = null, n.path = null),
      r.isNull(n.pathname) && r.isNull(n.search) || (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
      n.auth = t.auth || n.auth,
      n.slashes = n.slashes || t.slashes,
      n.href = n.format(),
      n
    },
    a.prototype.parseHost = function () {
      var t = this.host,
      e = s.exec(t);
      e && (e = e[0], ':' !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)),
      t && (this.hostname = t)
    }
  },
  '0c36': function (t, e, n) {
    var i = n('5ca1');
    i(i.G, {
      global: n('7726')
    })
  },
  '0da7': function (t, e, n) {
    'use strict';
    var i = n('d225'),
    r = n('b0b4');
    function a(t) {
      var e = [
      ];
      for (var n in t) t.hasOwnProperty(n) && e.push(''.concat(n, '=').concat(encodeURIComponent(t[n]) || ''));
      return e.join('&')
    }
    var o = n('7aa9');
    function s() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = arguments.length > 1 ? arguments[1] : void 0,
      n = e.topicInfo,
      i = void 0 === n ? '' : n,
      r = e.title,
      s = void 0 === r ? '' : r,
      c = e.url,
      u = void 0 === c ? '' : c,
      l = e.site,
      d = void 0 === l ? '爱奇艺' : l,
      p = e.icon,
      h = void 0 === p ? '' : p,
      f = e.desc,
      m = void 0 === f ? '' : f,
      v = e.titleWebo,
      b = void 0 === v ? '' : v,
      g = '',
      y = '';
      if ('weibo' === t) {
        var w = {
          appkey: '1925825497',
          url: u,
          title: b || ''.concat(i).concat(s, ' (来自@爱奇艺)')
        };
        g = 'http://v.t.sina.com.cn/share/share.php?'.concat(a(w)),
        window.location.href = g
      } else if ('qzone' === t) {
        var _ = {
          url: u,
          showcount: '1',
          site: d,
          title: s,
          pics: h,
          summary: m
        };
        y = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'.concat(a(_)),
        Object(o['a']) (window.navigator.userAgent).browser.baidubox ? location.href = y : window.open(y, '_blank')
      }
    }
    var c = n('f499'),
    u = n.n(c);
    n('a481');
    function l(t, e) {
      var n = '',
      i = window.navigator.userAgent;
      'qq' === t ? n = Object(o['a']) (i).os.ios ? 'mqqapi://share/to_fri?src_type=web&version=1&file_type=news' : 'mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news' : 'qzone' === t && (n = Object(o['a']) (i).os.ios ? 'mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A' : 'mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1'),
      d(n, e)
    }
    function d(t, e) {
      var n = t + '&' + p(e),
      i = window.navigator.userAgent;
      if (Object(o['a']) (i).os.ios) location.href = n;
       else {
        var r = document.createElement('iframe');
        r.style.display = 'none',
        r.src = n,
        document.body.appendChild(r),
        setTimeout(function () {
          r && r.parentNode && r.parentNode.removeChild(r)
        }, 2000)
      }
    }
    function p(t) {
      var e = t.url,
      n = t.title,
      i = t.desc,
      r = t.icon,
      a = [
      ],
      o = {
        share_id: 924053302,
        url: window.btoa(e),
        title: h.encode(n),
        description: h.encode(i),
        previewimageUrl: window.btoa(r),
        image_url: window.btoa(r)
      };
      for (var s in o) o.hasOwnProperty(s) && a.push(s + '=' + o[s]);
      return a.join('&')
    }
    var h = {
      _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      encode: function (t) {
        var e,
        n,
        i,
        r,
        a,
        o,
        s,
        c = '',
        u = 0;
        for (t = this._utf8_encode(t); u < t.length; ) e = t.charCodeAt(u++),
        n = t.charCodeAt(u++),
        i = t.charCodeAt(u++),
        r = e >> 2,
        a = (3 & e) << 4 | n >> 4,
        o = (15 & n) << 2 | i >> 6,
        s = 63 & i,
        isNaN(n) ? o = s = 64 : isNaN(i) && (s = 64),
        c = c + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(s);
        return c
      },
      _utf8_encode: function (t) {
        t = t.replace(/\r\n/g, '\n');
        for (var e = '', n = 0; n < t.length; n++) {
          var i = t.charCodeAt(n);
          i < 128 ? e += String.fromCharCode(i)  : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128))  : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
        }
        return e
      }
    };
    function f(t, e) {
      var n = e.title,
      i = e.desc,
      r = e.url,
      a = e.icon,
      s = window.navigator.userAgent;
      Object(o['a']) (s).browser.qq && !Object(o['a']) (s).browser.weixin ? v(t, {
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : 'undefined' !== typeof ucweb ? w(t, {
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : Object(o['a']) (s).browser.uc && Object(o['a']) (s).os.ios ? _(t, {
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : Object(o['a']) (s).browser.baidubrowser && Object(o['a']) (s).os.ios ? y({
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : Object(o['a']) (s).browser.baidubox && Object(o['a']) (s).os.ios ? g({
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : Object(o['a']) (s).browser.baidubox && Object(o['a']) (s).os.android ? b({
        title: n,
        desc: i,
        url: r,
        icon: a
      })  : 'qq' !== t && 'qzone' !== t || l(t, {
        title: n,
        desc: i,
        url: r,
        icon: a
      })
    }
    function m() {
      var t = document.getElementsByTagName('script') [0],
      e = document.createElement('script');
      e.src = 'https://jsapi.qq.com/get?api=app.share',
      e.async = !0,
      t.parentNode.insertBefore(e, t),
      e.onload = function () {
      }
    }
    function v(t, e) {
      var n = e.title,
      i = e.desc,
      r = e.url,
      a = e.icon,
      o = {
        wechatTimeline: 8,
        wechatFriend: 1,
        qq: 4,
        qzone: 3
      },
      s = o[t];
      browser.app.share({
        title: n,
        description: i,
        url: r,
        img_url: a,
        to_app: s
      })
    }
    function b(t) {
      var e = t.title,
      n = t.desc,
      i = t.url,
      r = t.icon,
      a = {
        obj: 'Bdbox_android_utils',
        func: 'callShare',
        args: [
          '{imageUrl: \'\',\n    mediaType: \'all\',\n    title: \''.concat(e, '\',\n    content: \'').concat(n, '\',\n    linkUrl: \'').concat(i, '\',\n    iconUrl: \'').concat(r, '\'}')
        ]
      };
      prompt('BdboxApp:'.concat(u() (a)))
    }
    function g(t) {
      var e = t.title,
      n = t.desc,
      i = t.url,
      r = t.icon,
      a = {
        title: e,
        content: n,
        iconUrl: r,
        linkUrl: i
      },
      o = 'baiduboxapp://callShare?options=\n    '.concat(encodeURIComponent(u() (a)), '\n    &successcallback=NativeShareSuccessCallback\n    &errorcallback=NativeShareFailCallback&minver=5.3.5');
      window.location.href = o
    }
    function y(t) {
      var e = t.title,
      n = t.desc,
      i = t.url,
      r = t.icon;
      location.href = 'baidubrowserapp://bd_utils?action=shareWebPage&params=\n    '.concat(encodeURIComponent(u() ({
        title: e,
        content: n,
        imageurl: r,
        landurl: i,
        mediaType: 0,
        share_type: 'webpage'
      })))
    }
    function w(t, e) {
      var n = e.title,
      i = e.desc,
      r = e.url,
      a = e.icon,
      o = {
        wechatTimeline: 'WechatTimeline',
        wechatFriend: 'WechatFriends',
        qq: 'QQ',
        qzone: 'Qzone'
      };
      'wechatTimeline' !== t && 'wechatFriend' !== t || (a = '');
      var s = o[t];
      ucweb.startRequest('shell.page_share', [
        n,
        i,
        r,
        s,
        '',
        '',
        a
      ])
    }
    function _(t, e) {
      var n = e.title,
      i = e.desc,
      r = e.url,
      a = e.icon,
      o = {
        wechatTimeline: 'kWeixinFriend',
        wechatFriend: 'kWeixin',
        qq: 'kQQ',
        qzone: 'kQZone'
      },
      s = o[t];
      ucbrowser.web_shareEX && ucbrowser.web_shareEX(u() ({
        title: n,
        content: i,
        sourceUrl: r,
        imageUrl: a,
        target: s
      }))
    }
    function k(t, e) {
      var n = document.getElementsByTagName('script') [0],
      i = document.createElement('script');
      i.src = t,
      i.async = !0,
      n.parentNode.insertBefore(i, n),
      i.onload = function () {
        e()
      }
    }
    var x = '//static.iqiyi.com/js/html5/js/lib/clipboard.min.js';
    function C(t) {
      var e = t.copyDom,
      n = t.copyCallback;
      O() ? e.style.display = 'none' : k(x, function () {
        var t = new Clipboard(e);
        t.on('success', function () {
          n()
        })
      })
    }
    function O() {
      var t = window.navigator.userAgent,
      e = /iPhone OS (\d*)_(\d*)/i.exec(t),
      n = e && 8 === e[1];
      return /BLN-TL10/i.test(t) || /PE-TL20/i.test(t) || n || /VivoBrowser/i.test(t)
    }
    var j = n('0b16');
    function I(t, e) {
      var n = Object(j['parse']) (t);
      return n.protocol = e || location.protocol,
      Object(j['format']) (n)
    }
    n.d(e, 'a', function () {
      return S
    });
    var S = function () {
      function t(e) {
        var n = e.title,
        r = void 0 === n ? '' : n,
        a = e.url,
        s = void 0 === a ? '' : a,
        c = e.icon,
        u = void 0 === c ? '' : c,
        l = e.desc,
        d = void 0 === l ? '' : l,
        p = e.topicInfo,
        h = void 0 === p ? '' : p,
        f = e.titleWebo,
        v = void 0 === f ? '' : f,
        b = e.site,
        g = void 0 === b ? '' : b,
        y = e.copyDom,
        w = void 0 === y ? {
        }
         : y,
        _ = e.copyCallback,
        k = void 0 === _ ? function () {
        }
         : _;
        Object(i['a']) (this, t),
        this.title = r,
        this.url = I(s, 'http'),
        this.icon = I(u, 'http'),
        this.desc = d.length > 50 ? ''.concat(d.slice(0, 50), '...')  : d,
        this.topicInfo = h,
        this.titleWebo = v,
        this.site = g,
        this.copyDom = w,
        this.copyCallback = k,
        Object(o['a']) (navigator.userAgent).browser.qq && m(),
        C({
          copyDom: w,
          copyCallback: k
        })
      }
      return Object(r['a']) (t, [
        {
          key: 'shareToWeibo',
          value: function () {
            s('weibo', this)
          }
        },
        {
          key: 'shareToQzone',
          value: function () {
            var t = Object(o['a']) (navigator.userAgent),
            e = t.browser,
            n = t.os;
            'undefined' !== typeof ucweb || e.baidubrowser && n.ios || e.baidubox || e.chrome && n.android || e.oppo || e.weixin ? s('qzone', this)  : f('qzone', this)
          }
        },
        {
          key: 'shareToQQ',
          value: function () {
            f('qq', this)
          }
        },
        {
          key: 'shareToWeixin',
          value: function () {
            f('wechatFriend', this)
          }
        },
        {
          key: 'shareToWXFriends',
          value: function () {
            f('wechatTimeline', this)
          }
        }
      ]),
      t
    }()
  },
  1140: function (t, e) {
    (function (e) {
      t.exports = e
    }).call(this, {
    })
  },
  '120a': function (t, e, n) {
    'use strict';
    var i = n('8c18'),
    r = n.n(i);
    r.a
  },
  '12a0': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.videos.length ? n('div', {
          staticClass: 'm-box',
          attrs: {
            name: 'm-albumList'
          }
        }, [
          n('div', {
            staticClass: 'm-box-items m-box-items-full'
          }, [
            n('AuraCardTitle', {
              attrs: {
                title: t.videoTitle
              },
              scopedSlots: t._u([{
                key: 'rightBtn',
                fn: function () {
                  return [n('a', {
                    staticClass: 'c-link',
                    attrs: {
                      href: 'javascript:void(0)'
                    },
                    on: {
                      click: t.showSourceLayer
                    }
                  }, [
                    t._v('\n            ' + t._s(t.updateStrategy) + '\n            '),
                    n('i', {
                      staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                    })
                  ])]
                },
                proxy: !0
              }
              ], null, !1, 105532721)
            })
          ], 1),
          n('div', {
            staticClass: 'm-box-items m-box-items-full'
          }, [
            n('ScrollLoad', {
              class : t.coverClass,
              attrs: {
                callback: t.scrollLoadPage,
                'load-completed': t.loadCompleted,
                length: t.length,
                'qipu-id': t.videoInfo.qipuId,
                'is-init-load': t.rightPage !== t.totalPages - 1,
                'layer-open': t.layerOpen,
                tag: 'section'
              },
              on: {
                loadFailure: t.onLoadFailure
              }
            }, [
              n('ul', {
                staticClass: 'm-pic-list m-sliding-list',
                staticStyle: {
                  transform: 'translate(0px, 0px) scale(1)'
                }
              }, t._l(t.videos, function (e, i) {
                return n('li', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: 'l' + (i + 1),
                      expression: '`l${index + 1}`'
                    },
                    {
                      name: 'play',
                      rawName: 'v-play',
                      value: {
                        continuous: t.continuous,
                        card: 'albumList',
                        selectClass: 'selected',
                        qipuId: e.qipuId,
                        index: e.index,
                        url: e.pageUrl,
                        redirect: t.redirectLink,
                        action: 'upsert',
                        next: t.callNext
                      },
                      expression: '{\n              continuous: continuous,\n              card: \'albumList\',\n              selectClass: \'selected\',\n              qipuId: video.qipuId,\n              index: video.index,\n              url: video.pageUrl,\n              redirect: redirectLink,\n              action: \'upsert\',\n              next: callNext\n            }'
                    }
                  ],
                  key: e.id + '_' + i + '_album',
                  staticClass: 'c-album-item',
                  class : {
                    selected: t.videoInfo.qipuId === e.qipuId
                  }
                }, [
                  n('div', {
                    staticClass: 'piclist-img'
                  }, [
                    n('a', {
                      staticClass: 'piclist-link',
                      style: {
                        'background-image': 'url(' + e.imageUrl + ')'
                      },
                      attrs: {
                        title: e.title,
                        href: 'javascript:void(0)'
                      }
                    }, [
                      n('div', {
                        staticClass: 'c-rt'
                      }, [
                        e.payMarkUrl ? n('AuraVideoPicicon', {
                          attrs: {
                            'pay-mark-url': e.payMarkUrl,
                            text: e.upperRightCorner
                          }
                        })  : t._e()
                      ], 1),
                      n('div', {
                        staticClass: 'c-rb'
                      }, [
                        n('span', {
                          staticClass: 'c-date'
                        }, [
                          t._v(t._s(e.period))
                        ])
                      ])
                    ])
                  ]),
                  n('div', {
                    staticClass: 'piclist-title'
                  }, [
                    n('div', {
                      staticClass: 'c-title'
                    }, [
                      n('a', {
                        attrs: {
                          href: 'javascript:void(0);'
                        }
                      }, [
                        t._v(t._s(e.shortTitle))
                      ])
                    ])
                  ])
                ])
              }), 0)
            ])
          ], 1)
        ])  : t.isLoad ? n('section', {
          staticClass: 'm-loading-info'
        }, [
          n('div', {
            staticClass: 'c-info'
          }, [
            t._v('当前剧集目前暂无内容或版权，请持续关注更新')
          ])
        ])  : t._e()
      ])
    },
    r = [
    ],
    a = (n('a481'), n('7514'), n('a745')),
    o = n.n(a),
    s = n('e814'),
    c = n.n(s),
    u = n('795b'),
    l = n.n(u),
    d = (n('57e7'), n('20d6'), n('bd86')),
    p = (n('96cf'), n('3b8d')),
    h = (n('ac6a'), n('f3e2'), n('0cd8'), n('cebc')),
    f = (n('c5f6'), n('2f62')),
    m = n('1d52'),
    v = n('6e73'),
    b = n('21fd'),
    g = n('3e9e'),
    y = n('5a0c'),
    w = n.n(y),
    _ = {
      name: 'SourceCard',
      components: {
        ScrollLoad: v['a']
      },
      props: {
        sourceId: {
          type: Number,
        default:
          0
        },
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        updateStrategy: {
          type: String,
        default:
          ''
        },
        coverClass: {
          type: String,
        default:
          ''
        },
        videoTitle: {
          type: String,
        default:
          ''
        },
        continuous: {
          type: Boolean,
        default:
          !0
        },
        redirectLink: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          videos: [
          ],
          isLoad: !1,
          leftPage: 0,
          rightPage: 0,
          curPage: 0,
          nextPage: 0,
          loadCompleted: !1,
          nextYear: '',
          nextMonth: '',
          hasLoadPage: [
          ]
        }
      },
      computed: Object(h['a']) ({
      }, Object(f['e']) ('play', [
        'videoList',
        'albumInfo',
        'layerOpen',
        'sourceListInfo',
        'layerPage',
        'secureJsonpToken'
      ]), {
        summary: function () {
          var t = this.videoList.summary,
          e = [
          ];
          return t.reduce(function (t, n) {
            n.monthList.forEach(function (t) {
              e.push({
                year: n.year,
                month: t
              })
            })
          }, {
          }),
          e
        },
        length: function () {
          return this.videos.length
        },
        totalPages: function () {
          return this.summary.length
        }
      }),
      watch: {
        layerPage: function () {
          var t = Object(p['a']) (regeneratorRuntime.mark(function t(e, n) {
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (e === n) {
                    t.next = 7;
                    break
                  }
                  return this.videos = this.sourceListInfo[e],
                  this.rightPage = e,
                  this.hasLoadPage = [
                  ],
                  this.hasLoadPage.push(e),
                  t.next = 7,
                  this.loadPrePage(e);
                case 7:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e, n) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        videoList: {
          handler: function () {
            this.videos = this.formatVideos(this.videoList.videos, this.curPage)
          },
          immediate: !0
        }
      },
      beforeMount: function () {
        this.initVideos(),
        this.$store.dispatch('play/sourceListInfo', Object(d['a']) ({
        }, this.rightPage, this.formatVideos(this.videoList.videos, this.curPage))),
        this.$store.dispatch('play/sourceSummary', this.summary)
      },
      mounted: function () {
        var t = {
          card: 'albumList',
          action: 'update',
          qipuId: this.videoInfo.qipuId
        };
        g['a'].setCurVideo(t)
      },
      methods: {
        initVideos: function () {
          var t = Object(p['a']) (regeneratorRuntime.mark(function t() {
            var e;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.setCurrentPage(), e = this.rightPage, this.videoList.videos.length) {
                    t.next = 5;
                    break
                  }
                  return t.next = 5,
                  this.loadSource(e);
                case 5:
                  return this.hasLoadPage.push(e),
                  t.next = 8,
                  this.loadPrePage(e);
                case 8:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        setCurrentPage: function () {
          var t = {
            year: this.videoList.currentYear,
            month: this.videoList.currentMonth
          };
          this.curPage = this.summary.findIndex(function (e) {
            return e.year === t.year && e.month === t.month
          }),
          this.rightPage = this.summary.findIndex(function (e) {
            return e.year === t.year && e.month === t.month
          })
        },
        loadPrePage: function (t) {
          if (t > 0) return this.leftPage = t - 1,
          this.loadSource(this.leftPage, !1)
        },
        scrollLoadPage: function (t) {
          var e = t.scrollToRight;
          e ? this.rightPage = this.rightPage + 1 : this.leftPage = this.leftPage - 1;
          var n = e ? this.rightPage : this.leftPage;
          return n < 0 || n >= this.totalPages || this.hasLoadPage.indexOf(n) > - 1 ? l.a.resolve()  : this.loadSource(n, e)
        },
        callNext: function () {
          var t = Object(p['a']) (regeneratorRuntime.mark(function t(e) {
            var n,
            i,
            r,
            a,
            o,
            s,
            u = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  for (i in n = e.curVideo, this.sourceListInfo) for (r = 0; r < this.sourceListInfo[i].length; r++) this.sourceListInfo[i][r].qipuId === n.qipuId && (a = this.sourceListInfo[i][r], this.nextYear = a.period.slice(0, 4), this.nextMonth = a.period.slice(5, 7), this.nextPage = c() (i));
                  if (o = this.summary.findIndex(function (t) {
                    return t.year === u.nextYear && t.month === u.nextMonth
                  }) + 1, this.sourceListInfo[this.nextPage] && !(o >= this.totalPages)) {
                    t.next = 5;
                    break
                  }
                  return t.abrupt('return');
                case 5:
                  if (s = this.sourceListInfo[this.nextPage].findIndex(function (t) {
                    return t.qipuId === n.qipuId
                  }) + 1, s !== this.sourceListInfo[this.nextPage].length) {
                    t.next = 11;
                    break
                  }
                  if (!(this.hasLoadPage.indexOf(this.nextPage + 1) > - 1)) {
                    t.next = 9;
                    break
                  }
                  return t.abrupt('return');
                case 9:
                  return t.next = 11,
                  this.loadSource(this.nextPage + 1, !0);
                case 11:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        loadSource: function () {
          var t = Object(p['a']) (regeneratorRuntime.mark(function t(e, n) {
            var i,
            r,
            a,
            o,
            s,
            c;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = this.summary[e],
                  r = i.year,
                  a = i.month,
                  o = {
                    sourceId: this.videoInfo.sourceId,
                    year: r,
                    month: a,
                    token: this.secureJsonpToken
                  },
                  t.next = 4,
                  Object(m['d']) (o);
                case 4:
                  return s = t.sent,
                  c = this.formatVideos(s, e),
                  this.videos = n ? this.videos.concat(c)  : c.concat(this.videos),
                  this.hasLoadPage.push(e),
                  t.abrupt('return', this.$store.dispatch('play/sourceListInfo', Object(d['a']) ({
                  }, e, c)));
                case 9:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e, n) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        formatVideos: function (t, e) {
          var n = this;
          return o() (t) && t.length ? (t.forEach(function (t, i) {
            t.index = Object(m['c']) (e, i),
            t.upperRightCorner = Object(b['m']) (t),
            t.order = t.pd,
            t.title = n.title(t),
            t.period = t.period ? w() (t.period).format('YYYY-MM-DD')  : '',
            t.selected = n.qipuId === t.qipuId
          }), t)  : [
          ]
        },
        onLoadFailure: function (t) {
          this.loadCompleted = !0
        },
        title: function (t) {
          var e = t.period ? w() (t.period).format('YYYY-MM-DD')  : '',
          n = this.formatTitle(t.shortTitle);
          return (e ? ''.concat(e, '期')  : '') + (n ? ': '.concat(n)  : '')
        },
        formatTitle: function (t) {
          var e = [
            /第[\d]*集/,
            /[\d]*\./,
            /[\d]*、/,
            /[\d]*\s/
          ];
          return e.find(function (e) {
            e.test(t) && (t = t.replace(e, ''))
          }),
          t
        },
        showSourceLayer: function () {
          this.$emit('showSourceLayer')
        }
      }
    },
    k = _,
    x = n('2877'),
    C = Object(x['a']) (k, i, r, !1, null, null, null);
    e['a'] = C.exports
  },
  1533: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return m
    }),
    n.d(e, 'a', function () {
      return v
    }),
    n.d(e, 'c', function () {
      return y
    }),
    n.d(e, 'e', function () {
      return _
    }),
    n.d(e, 'g', function () {
      return C
    }),
    n.d(e, 'd', function () {
      return j
    }),
    n.d(e, 'f', function () {
      return S
    });
    var i = n('0a0d'),
    r = n.n(i),
    a = n('a745'),
    o = n.n(a),
    s = (n('96cf'), n('3b8d')),
    c = n('936f'),
    u = n('e2a0'),
    l = n.n(u),
    d = n('b2e7'),
    p = n('8296'),
    h = n('11ad'),
    f = n('2c06'),
    m = 1,
    v = 2,
    b = '//sns-api.iqiyi.com/apis/friend/add_friends.action',
    g = '//sns-api.iqiyi.com/apis/friend/remove_friends.action';
    function y(t) {
      return w.apply(this, arguments)
    }
    function w() {
      return w = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                types: 1,
                agent_type: 201,
                p1: '2_20_201',
                u: Object(d['w']) (),
                uids: e.uids,
                source: e.source || (p['D'].android ? 5 : 7),
                dec_tp: 'pgc' === e.subType ? '1' : '3'
              },
              t.next = 3,
              c['a'].jsonp(b, {
                params: n
              });
            case 3:
              return i = t.sent,
              r = i.data,
              t.abrupt('return', r && 'A00000' === r.code);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), w.apply(this, arguments)
    }
    function _(t) {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                sns_type: 1,
                agent_type: 201,
                p1: '2_20_201',
                u: Object(d['w']) (),
                uids: e.uids,
                source: e.source || (p['D'].android ? 5 : 7),
                dec_tp: 'pgc' === e.subType ? '1' : '3'
              },
              t.next = 3,
              c['a'].jsonp(g, {
                params: n
              });
            case 3:
              return i = t.sent,
              r = i.data,
              t.abrupt('return', r && 'A00000' === r.code);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), k.apply(this, arguments)
    }
    var x = 'fragment friendInfoFields on FriendList {\n  page\n  pageSize\n  total\n  userInfos {\n    followedCount\n    friend {\n      status\n      uid\n    }\n    iUser\n    icon\n    mark\n    nickName\n    recommand\n    uid\n  }\n}';
    function C(t) {
      return O.apply(this, arguments)
    }
    function O() {
      return O = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        o = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = o.length > 1 && void 0 !== o[1] ? o[1] : {
              },
              i = o.length > 2 && void 0 !== o[2] ? o[2] : {
              },
              r = '\n    query UserInfoList($fparams: InfoParams, $rparams: InfoParams) {\n      user(params: $fparams) {\n        ...friendInfoFields\n      }\n      recommandUser(params: $rparams) {\n        ...friendInfoFields\n      }\n    }\n    '.concat(x),
              t.next = 5,
              c['a'].get('/u/api/graphql', {
                params: {
                  query: r,
                  variables: {
                    fparams: {
                      myuid: Object(d['y']) () + '',
                      uid: e + '',
                      pageSize: n.pageSize,
                      page: n.page
                    },
                    rparams: {
                      myuid: Object(d['y']) () + '',
                      uid: e + '',
                      pageSize: i.pageSize,
                      page: i.page
                    }
                  }
                }
              });
            case 5:
              return a = t.sent,
              t.abrupt('return', a && a.data && a.data.data);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), O.apply(this, arguments)
    }
    function j(t, e) {
      return I.apply(this, arguments)
    }
    function I() {
      return I = Object(s['a']) (regeneratorRuntime.mark(function t(e, n) {
        var i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              c['a'].jsonpCache(h['i'], {
                params: {
                  myuid: e,
                  uids: o() (n) ? n.join(',')  : n
                }
              });
            case 2:
              return i = t.sent,
              r = l() (i.data) ? JSON.parse(i.data)  : i.data || {
              },
              t.abrupt('return', 'A00000' === r.code && r);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), I.apply(this, arguments)
    }
    function S(t) {
      return T.apply(this, arguments)
    }
    function T() {
      return T = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                timestamp: r() ()
              },
              t.next = 3,
              c['a'].get('//m.iqiyi.com/u/api/'.concat(e, '/friend/add'), {
                params: n,
                headers: {
                  Token: Object(f['A']) (n, '|', 'w1517404027635', !0)
                }
              });
            case 3:
              return i = t.sent,
              a = i.data,
              t.abrupt('return', a && 'A00000' === a.code);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), T.apply(this, arguments)
    }
  },
  1985: function (t, e, n) {
    (function (t, i) {
      var r; /*! https://mths.be/punycode v1.4.1 by @mathias */
      (function (a) {
        e && e.nodeType,
        t && t.nodeType;
        var o = 'object' == typeof i && i;
        o.global !== o && o.window !== o && o.self;
        var s,
        c = 2147483647,
        u = 36,
        l = 1,
        d = 26,
        p = 38,
        h = 700,
        f = 72,
        m = 128,
        v = '-',
        b = /^xn--/,
        g = /[^\x20-\x7E]/,
        y = /[\x2E\u3002\uFF0E\uFF61]/g,
        w = {
          overflow: 'Overflow: input needs wider integers to process',
          'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
          'invalid-input': 'Invalid input'
        },
        _ = u - l,
        k = Math.floor,
        x = String.fromCharCode;
        function C(t) {
          throw new RangeError(w[t])
        }
        function O(t, e) {
          var n = t.length,
          i = [
          ];
          while (n--) i[n] = e(t[n]);
          return i
        }
        function j(t, e) {
          var n = t.split('@'),
          i = '';
          n.length > 1 && (i = n[0] + '@', t = n[1]),
          t = t.replace(y, '.');
          var r = t.split('.'),
          a = O(r, e).join('.');
          return i + a
        }
        function I(t) {
          var e,
          n,
          i = [
          ],
          r = 0,
          a = t.length;
          while (r < a) e = t.charCodeAt(r++),
          e >= 55296 && e <= 56319 && r < a ? (n = t.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536)  : (i.push(e), r--))  : i.push(e);
          return i
        }
        function S(t) {
          return O(t, function (t) {
            var e = '';
            return t > 65535 && (t -= 65536, e += x(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t),
            e += x(t),
            e
          }).join('')
        }
        function T(t) {
          return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : u
        }
        function E(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
        }
        function L(t, e, n) {
          var i = 0;
          for (t = n ? k(t / h)  : t >> 1, t += k(t / e); t > _ * d >> 1; i += u) t = k(t / _);
          return k(i + (_ + 1) * t / (t + p))
        }
        function R(t) {
          var e,
          n,
          i,
          r,
          a,
          o,
          s,
          p,
          h,
          b,
          g = [
          ],
          y = t.length,
          w = 0,
          _ = m,
          x = f;
          for (n = t.lastIndexOf(v), n < 0 && (n = 0), i = 0; i < n; ++i) t.charCodeAt(i) >= 128 && C('not-basic'),
          g.push(t.charCodeAt(i));
          for (r = n > 0 ? n + 1 : 0; r < y; ) {
            for (a = w, o = 1, s = u; ; s += u) {
              if (r >= y && C('invalid-input'), p = T(t.charCodeAt(r++)), (p >= u || p > k((c - w) / o)) && C('overflow'), w += p * o, h = s <= x ? l : s >= x + d ? d : s - x, p < h) break;
              b = u - h,
              o > k(c / b) && C('overflow'),
              o *= b
            }
            e = g.length + 1,
            x = L(w - a, e, 0 == a),
            k(w / e) > c - _ && C('overflow'),
            _ += k(w / e),
            w %= e,
            g.splice(w++, 0, _)
          }
          return S(g)
        }
        function N(t) {
          var e,
          n,
          i,
          r,
          a,
          o,
          s,
          p,
          h,
          b,
          g,
          y,
          w,
          _,
          O,
          j = [
          ];
          for (t = I(t), y = t.length, e = m, n = 0, a = f, o = 0; o < y; ++o) g = t[o],
          g < 128 && j.push(x(g));
          i = r = j.length,
          r && j.push(v);
          while (i < y) {
            for (s = c, o = 0; o < y; ++o) g = t[o],
            g >= e && g < s && (s = g);
            for (w = i + 1, s - e > k((c - n) / w) && C('overflow'), n += (s - e) * w, e = s, o = 0; o < y; ++o) if (g = t[o], g < e && ++n > c && C('overflow'), g == e) {
              for (p = n, h = u; ; h += u) {
                if (b = h <= a ? l : h >= a + d ? d : h - a, p < b) break;
                O = p - b,
                _ = u - b,
                j.push(x(E(b + O % _, 0))),
                p = k(O / _)
              }
              j.push(x(E(p, 0))),
              a = L(n, w, i == r),
              n = 0,
              ++i
            }
            ++n,
            ++e
          }
          return j.join('')
        }
        function q(t) {
          return j(t, function (t) {
            return b.test(t) ? R(t.slice(4).toLowerCase())  : t
          })
        }
        function A(t) {
          return j(t, function (t) {
            return g.test(t) ? 'xn--' + N(t)  : t
          })
        }
        s = {
          version: '1.4.1',
          ucs2: {
            decode: I,
            encode: S
          },
          decode: R,
          encode: N,
          toASCII: A,
          toUnicode: q
        },
        r = function () {
          return s
        }.call(e, n, e, t),
        void 0 === r || (t.exports = r)
      }) ()
    }).call(this, n('bf96') (t), n('483b'))
  },
  '1d21': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'root'
      }, [
        t._t('default')
      ], 2)
    },
    r = [
    ],
    a = (n('57e7'), n('774e')),
    o = n.n(a),
    s = (n('7514'), n('c5f6'), n('1fba')),
    c = {
      name: 'Scroll',
      props: {
        listLength: {
          type: Number,
        default:
          0
        },
        probeType: {
          type: Number,
        default:
          1
        },
        click: {
          type: Boolean,
        default:
          !0
        },
        scrollX: {
          type: Boolean,
        default:
          !1
        },
        content: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          scroll: '',
          itemWidth: 0
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick(function () {
          var e = t.$refs.root;
          t.scroll = new s['a'](e, {
            probeType: t.probeType,
            scrollX: t.scrollX,
            click: t.click,
            eventPassthrough: 'vertical'
          });
          var n = e.children[0];
          t.itemWidth = Math.abs(n.clientWidth) / t.listLength,
          t.scrollToElement(),
          t.scroll.on('scroll', function () {
            t.sendShowElement()
          }),
          t.scroll.on('scrollEnd', function () {
            t.sendShowElement()
          })
        })
      },
      destroyed: function () {
        this.scroll.destroy()
      },
      methods: {
        sendShowElement: function () {
          var t = Math.floor(Math.abs(this.scroll.x) / this.itemWidth);
          this.$emit('scrollToIndex', t)
        },
        scrollToElement: function () {
          var t = this.getElement();
          if (t) {
            var e = this.$el.clientWidth / 2;
            this.scroll && this.scroll.scrollToElement(t, 0, - e + t.offsetWidth / 2)
          }
        },
        getElement: function () {
          var t = null,
          e = this.$slots.default[0],
          n = e.children || e.elm.children || [
          ];
          return n && o() (n).find(function (e, n) {
            var i = e.elm ? e.elm.className : e.className;
            i && i.indexOf('selected') > - 1 && (t = e.elm || e)
          }),
          t
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  '1d52': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return x
    }),
    n.d(e, 'b', function () {
      return O
    }),
    n.d(e, 'd', function () {
      return T
    }),
    n.d(e, 'e', function () {
      return N
    }),
    n.d(e, 'c', function () {
      return A
    });
    n('96cf');
    var i = n('f499'),
    r = n.n(i),
    a = n('0a0d'),
    o = n.n(a),
    s = (n('57e7'), n('ac6a'), n('f3e2'), n('a745')),
    c = n.n(s),
    u = n('3b8d'),
    l = n('936f'),
    d = n('8296'),
    p = n('5a0c'),
    h = n.n(p),
    f = n('8d81'),
    m = n.n(f),
    v = '//pub.m.iqiyi.com/h5/main/videoList/album/',
    b = '//pub.m.iqiyi.com/h5/main/videoList/source/month/',
    g = '//pub.m.iqiyi.com/h5/main/miniVideo/sdvlist',
    y = 604800000,
    w = 43200000,
    _ = {
    },
    k = {
    };
    function x(t) {
      return C.apply(this, arguments)
    }
    function C() {
      return C = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (n = {
                albumId: e.albumId,
                size: e.size || 10,
                page: e.page,
                needPrevue: void 0 === e.needPrevue || e.needPrevue,
                needVipPrevue: void 0 !== e.needVipPrevue && e.needVipPrevue
              }, i = q(n), _[i]) {
                t.next = 12;
                break
              }
              return t.next = 5,
              l['a'].jsonp(v, {
                params: n
              }).catch (function (t) {
              });
            case 5:
              if (r = t.sent, !r || !r.data.data) {
                t.next = 10;
                break
              }
              return I(r.data.data, e.updateInfo),
              _[i] = r.data.data,
              t.abrupt('return', r.data.data);
            case 10:
              t.next = 13;
              break;
            case 12:
              return t.abrupt('return', _[i]);
            case 13:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), C.apply(this, arguments)
    }
    function O(t) {
      return j.apply(this, arguments)
    }
    function j() {
      return j = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        o,
        s,
        c;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = e.sourceId,
              i = e.videoId,
              r = e.beforeSize,
              a = e.afterSize,
              o = e.selfFiltered,
              s = {
                selfFiltered: o
              },
              t.prev = 2,
              t.next = 5,
              l['a'].jsonp(''.concat(g, '/').concat(n, '/').concat(i, '/').concat(r, '/').concat(a, '/'), {
                params: s
              });
            case 5:
              if (c = t.sent, 'A00000' !== c.data.code) {
                t.next = 10;
                break
              }
              return t.abrupt('return', c.data.data.videos || [
              ]);
            case 10:
              return t.abrupt('return', [
              ]);
            case 11:
              t.next = 16;
              break;
            case 13:
              return t.prev = 13,
              t.t0 = t['catch'](2),
              t.abrupt('return', [
              ]);
            case 16:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [2,
          13]
        ])
      })), j.apply(this, arguments)
    }
    function I(t, e) {
      return S.apply(this, arguments)
    }
    function S() {
      return S = Object(u['a']) (regeneratorRuntime.mark(function t(e, n) {
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              e && c() (e.videos) && e.videos.forEach(function (t) {
                t.vt || (t.subTitle = ''.concat(t.subTitle, ' ').concat(t.shortTitle)),
                t.mainTitle = 1 === t.type ? t.subTitle || t.shortTitle : t.vt || t.shortTitle,
                t.num = t.pd && t.pd < 10 ? '0'.concat(t.pd, '集')  : ''.concat(t.pd, '集'),
                t.payMarkUrl = '',
                t.qipuId = t.qipuId || t.tvId,
                t.pageUrl = t.pageUrl && Object(d['H']) (t.pageUrl),
                t.isNew = !!n && R(t, n),
                t.upperRightCorner = U(t),
                t.lowerRightCorner = t.duration
              });
            case 1:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), S.apply(this, arguments)
    }
    function T(t) {
      return E.apply(this, arguments)
    }
    function E() {
      return E = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (n = {
                sourceId: e.sourceId,
                year: e.year,
                month: e.month,
                order: e.order || 'desc'
              }, i = e.token, r = q(n), k[r]) {
                t.next = 13;
                break
              }
              return t.next = 6,
              l['a'].secureJsonp(b, {
                params: n
              }, i).catch (function (t) {
              });
            case 6:
              if (a = t.sent, !a || !a.data.data.videos) {
                t.next = 11;
                break
              }
              return L(a.data.data.videos),
              k[r] = a.data.data.videos,
              t.abrupt('return', a && a.data.data.videos);
            case 11:
              t.next = 14;
              break;
            case 13:
              return t.abrupt('return', k[r]);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), E.apply(this, arguments)
    }
    function L(t) {
      c() (t) && t.forEach(function (t) {
        t.pageUrl = t.pageUrl && (t.pageUrl.indexOf('vfrm') > - 1 ? t.pageUrl : ''.concat(Object(d['H']) (t.pageUrl), '#vfrm=30-28-15-7')),
        t.id = t.qipuId || t.tvId || t.id,
        t.vt = t.subTitle || t.vt,
        t.mainTitle = t.shortTitle || t.vt,
        t.imageUrl = Object(d['o']) (t.imageUrl, '284_160'),
        t.pubtime = h() (t.period).format('YYYY-MM-DD'),
        t.lowerRightCorner = t.pubtime && ''.concat(t.pubtime, '期'),
        t.upperRightCorner = P(t),
        t.explain = t.playCount && ''.concat(Object(d['p']) (t.playCount), '次播放'),
        t.hotNumInfo = 'undefined' !== typeof t.hotNum ? '热度 '.concat(t.hotNum)  : ''
      })
    }
    function R(t, e) {
      var n = t.type || t.contentType;
      if (1 !== n) return !1;
      var i = t.order || t.pd;
      return e.isShowNew && (i === e.latestOrder || e.latestPublishTime - t.publishTime <= w)
    }
    function N(t) {
      var e = {
        isEnd: (t.latestOrder || t.latestVideoOrder) >= t.videoCount,
        latestOrder: t.latestOrder || t.latestVideoOrder,
        latestIssueTime: t.latestVideo ? t.latestVideo.publishTime : t.latestPublishTime,
        firstIssueTime: t.firstVideo ? t.firstVideo.publishTime : t.firstPublishTime
      },
      n = o() (),
      i = e.latestIssueTime - e.firstIssueTime <= w,
      r = n - e.latestIssueTime <= y;
      return e.isEnd ? e.isShowNew = !i && r : e.isShowNew = r,
      e
    }
    function q(t) {
      return m() (''.concat(r() (t)))
    }
    function A(t, e) {
      var n = 1000 + t;
      return 100000 * n + e
    }
    function P(t) {
      return 1 === t.payMark || t.isVip ? 'VIP' : 2 === t.payMark ? '付费' : 3 === t.payMark ? '用券' : void 0
    }
    function U(t) {
      return 0 !== t.payMark || t.isVip ? 'VIP' : t.isNew ? 'NEW' : 1 !== t.type ? '预告' : void 0
    }
  },
  '21fd': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return b
    }),
    n.d(e, 'b', function () {
      return g
    }),
    n.d(e, 'q', function () {
      return A
    }),
    n.d(e, 'r', function () {
      return P
    }),
    n.d(e, 's', function () {
      return M
    }),
    n.d(e, 'j', function () {
      return $
    }),
    n.d(e, 'f', function () {
      return H
    }),
    n.d(e, 'c', function () {
      return V
    }),
    n.d(e, 'p', function () {
      return W
    }),
    n.d(e, 'e', function () {
      return Y
    }),
    n.d(e, 'k', function () {
      return K
    }),
    n.d(e, 'g', function () {
      return tt
    }),
    n.d(e, 't', function () {
      return at
    }),
    n.d(e, 'd', function () {
      return st
    }),
    n.d(e, 'n', function () {
      return ut
    }),
    n.d(e, 'u', function () {
      return lt
    }),
    n.d(e, 'h', function () {
      return dt
    }),
    n.d(e, 'o', function () {
      return pt
    }),
    n.d(e, 'l', function () {
      return ht
    }),
    n.d(e, 'i', function () {
      return ft
    }),
    n.d(e, 'm', function () {
      return mt
    });
    var i = n('cebc'),
    r = n('5176'),
    a = n.n(r),
    o = n('a745'),
    s = n.n(o),
    c = (n('96cf'), n('0a0d')),
    u = n.n(c),
    l = (n('ac6a'), n('f3e2'), n('7f7f'), n('3b8d')),
    d = n('936f'),
    p = n('8296'),
    h = n('4f30'),
    f = n('2c06'),
    m = n('b2e7'),
    v = n('73d4'),
    b = 1,
    g = 2,
    y = '//pub.m.iqiyi.com/jp/h5/count/hotDisplay/',
    w = '//pub.m.iqiyi.com/jp/h5/recommend/videos/',
    _ = '//pub.m.iqiyi.com/jp/h5/videos',
    k = '//pub.m.iqiyi.com/jp/h5/count/hotIndex',
    x = '//pub.m.iqiyi.com/jp/h5/count/play',
    C = '//pub.m.iqiyi.com/jp/h5/count/plays',
    O = '//pub.m.iqiyi.com/h5/main/videoList/superAlbum/',
    j = '//pub.m.iqiyi.com/h5/main/videoList/othlist/',
    I = '//pub.m.iqiyi.com/h5/main/videoList/fragment/',
    S = '//pub.m.iqiyi.com/h5/main/videoList/music/',
    T = '//pub.m.iqiyi.com/h5/main/collection/',
    E = 1,
    L = 2,
    R = 3,
    N = 604800000,
    q = 43200000;
    function A(t, e) {
      d['a'].jsonpCacheHot(y, {
        params: {
          qipuId: t.qipuId,
          channelId: t.channelId,
          videoDisplay: t.videoDisplay,
          albumDisplay: t.albumDisplay
        }
      }, {
        qStore: {
          timeout: 200
        }
      }).next(e)
    }
    function P(t) {
      return U.apply(this, arguments)
    }
    function U() {
      return U = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        o;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = e.qipuId,
              i = s() (n) ? n.join()  : n,
              r = ''.concat(_, '/').concat(i, '/'),
              t.next = 5,
              d['a'].jsonp(r);
            case 5:
              return a = t.sent,
              o = a.data,
              t.abrupt('return', o ? 1 === o.length ? o[0] : o : {
              });
            case 8:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), U.apply(this, arguments)
    }
    function M(t) {
      t = t || {
      };
      var e = {
        album: !1,
        source: !1,
        movie: !1,
        short: !1
      };
      return t.isFeatureFilm ? t.videoType === b ? e.album = !0 : t.videoType === g ? e.source = !0 : t.cid === + h['CHANNEL_DIANYING'] || t.cid === + h['CHANNEL_DONGMAN'] ? e.movie = !0 : e.short = !0 : e.short = !0,
      e
    }
    function $(t) {
      return D.apply(this, arguments)
    }
    function D() {
      return D = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                type: e.type || 'video',
                size: e.size || 12,
                area: e.area || 'h_swan',
                evid: e.evid,
                pageId: e.pageId,
                entitySource: e.entitySource,
                referenceId: e.referenceId,
                channelId: e.channelId,
                albumId: e.albumId,
                purchaseTypes: e.purchaseTypes,
                tagSet: e.tagSet,
                tagSizes: e.tagSizes,
                onlyId: e.onlyId,
                onlyAlbum: e.onlyAlbum,
                filterStatus: e.filterStatus,
                featureStatus: e.featureStatus,
                uid: Object(f['w']) () || Object(m['w']) (),
                ppuid: Object(m['C']) (),
                advertStatus: e.advertStatus || 1
              },
              t.next = 3,
              it(a() ({
              }, n, Object(v['b']) ()));
            case 3:
              return i = t.sent,
              t.abrupt('return', i);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), D.apply(this, arguments)
    }
    function H(t) {
      return B.apply(this, arguments)
    }
    function B() {
      return B = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = Object(i['a']) ({
              }, {
                qyid: Object(f['w']) () || Object(m['w']) ()
              }, e),
              t.next = 3,
              it(n);
            case 3:
              return r = t.sent,
              t.abrupt('return', r);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), B.apply(this, arguments)
    }
    function V(t) {
      return z.apply(this, arguments)
    }
    function z() {
      return z = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        r,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                collectionId: 0,
                pageNum: 1,
                pageSize: 10,
                isList: !0
              },
              n = Object(i['a']) ({
              }, n, e),
              t.next = 4,
              d['a'].jsonp(T, {
                params: n
              });
            case 4:
              return r = t.sent,
              a = r && r.data && r.data.data,
              t.abrupt('return', a);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), z.apply(this, arguments)
    }
    function F(t) {
      var e = '',
      n = t.solo,
      i = t.sourceId;
      return i || 1 !== n ? i || 0 !== n ? i && (e = 2)  : e = 1 : e = 7,
      e
    }
    function W(t, e) {
      return X.apply(this, arguments)
    }
    function X() {
      return X = Object(l['a']) (regeneratorRuntime.mark(function t(e, n) {
        var i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (t.prev = 0, !n) {
                t.next = 8;
                break
              }
              return t.next = 4,
              Y(e);
            case 4:
              return i = t.sent,
              t.abrupt('return', i[e]);
            case 8:
              return t.next = 10,
              G(e);
            case 10:
              return r = t.sent,
              t.abrupt('return', r.count || 0);
            case 12:
              t.next = 17;
              break;
            case 14:
              return t.prev = 14,
              t.t0 = t['catch'](0),
              t.abrupt('return', 0);
            case 17:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          14]
        ])
      })), X.apply(this, arguments)
    }
    function Y(t) {
      return Q.apply(this, arguments)
    }
    function Q() {
      return Q = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return s() (e) || (e = [
                e
              ]),
              t.next = 3,
              d['a'].jsonp(''.concat(k, '/?ids=').concat(e.join(','))).catch (function () {
                return {
                }
              });
            case 3:
              return n = t.sent,
              t.abrupt('return', n && n.data);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), Q.apply(this, arguments)
    }
    function G(t) {
      return J.apply(this, arguments)
    }
    function J() {
      return J = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e) {
                t.next = 2;
                break
              }
              return t.abrupt('return');
            case 2:
              return n = s() (e) ? ''.concat(C, '/').concat(e.join(','))  : ''.concat(x, '/').concat(e),
              t.next = 5,
              d['a'].jsonp(n);
            case 5:
              return i = t.sent,
              t.abrupt('return', i && i.data);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), J.apply(this, arguments)
    }
    function K() {
      return Z.apply(this, arguments)
    }
    function Z() {
      return Z = Object(l['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : {
              },
              n = {
                qipuId: e.id,
                channelId: e.cid
              },
              t.next = 4,
              d['a'].jsonp(O, {
                params: n
              });
            case 4:
              if (i = t.sent, r = i && i.data, !r || !r.data) {
                t.next = 9;
                break
              }
              return nt(r.data, e),
              t.abrupt('return', r && r.data);
            case 9:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), Z.apply(this, arguments)
    }
    function tt() {
      return et.apply(this, arguments)
    }
    function et() {
      return et = Object(l['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = r.length > 0 && void 0 !== r[0] ? r[0] : {
              },
              n = {
                albumId: e.albumId,
                page: e.page || 1,
                size: e.size || 12
              },
              t.next = 4,
              d['a'].jsonp(S, {
                params: n
              });
            case 4:
              if (i = t.sent, !i || !i.data || 'A00000' !== i.data.code) {
                t.next = 7;
                break
              }
              return t.abrupt('return', i.data.data);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), et.apply(this, arguments)
    }
    function nt(t, e) {
      t.mainTitle = t.collectionInfo && t.collectionInfo.name,
      t.items && t.items.length && t.items.forEach(function (t, n) {
        t.isSelected = t.albumId ? t.isSource ? t.albumId === + e.sourceId : t.albumId === + e.albumId : t.qipuId === + e.tvId,
        t.subType = F(t),
        t.mainTitle = t.name,
        t.url = Object(p['H']) (t.pageUrl),
        t.tvId = t.qipuId || t.tvId,
        t.albumId = t.aqipuId || t.albumId,
        t.isQiyiProduced = t.isQiyiProduced || !!t.qiyiProduced,
        t.isExclusive = t.isExclusive || !!t.exclusive,
        t.upperRightCorner = dt(t),
        t.showContent = t.showContent ? t.showContent : t.lowerLeftCorner,
        t.subtitle = t.focus
      })
    }
    function it(t) {
      return rt.apply(this, arguments)
    }
    function rt() {
      return rt = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        r,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (n = Object(i['a']) ({
              }, e), 'h_swan' !== n.area) {
                t.next = 7;
                break
              }
              return t.next = 4,
              d['a'].jsonpCache(w, {
                headers: {
                  'User-Agent': n.ua
                },
                params: n
              }, {
                qStore: {
                  timeout: 400
                }
              });
            case 4:
              t.t0 = t.sent,
              t.next = 10;
              break;
            case 7:
              return t.next = 9,
              d['a'].jsonp(w, {
                headers: {
                  'User-Agent': n.ua
                },
                params: n
              });
            case 9:
              t.t0 = t.sent;
            case 10:
              return r = t.t0,
              a = r && r.data,
              a && a.videos && a.videos.forEach(function (t) {
                t.upperRightCorner = dt(t),
                2 === t.type && (t.upperRightCorner = ''),
                t.mainTitle = n.onlyAlbum ? t.albumName : t.vt || t.shortTitle,
                t.subTitle = t.subtitle = t.desc,
                1 === t.hotDisplayStatus && 0 !== t.hotDisplayCount ? t.showContent = '热度 '.concat(t.hotDisplayCount)  : 0 === t.hotDisplayStatus && 0 !== t.hotDisplayCount && (t.showContent = ''.concat(Object(p['p']) (t.hotDisplayCount), '次播放'))
              }),
              t.abrupt('return', a);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), rt.apply(this, arguments)
    }
    function at() {
      return ot.apply(this, arguments)
    }
    function ot() {
      return ot = Object(l['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : {
              },
              n = {
                qipuId: e.qipuId,
                type: e.type
              },
              t.next = 4,
              d['a'].jsonp(j, {
                params: n
              });
            case 4:
              return i = t.sent,
              r = i && i.data,
              r && r.data && r.data.videos && r.data.videos.forEach(function (t) {
                t.mainTitle = t.vt || t.shortTitle
              }),
              t.abrupt('return', r && r.data ? r.data.videos : null);
            case 8:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), ot.apply(this, arguments)
    }
    function st() {
      return ct.apply(this, arguments)
    }
    function ct() {
      return ct = Object(l['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : {
              },
              n = {
                videoId: e.qipuId,
                albumId: e.albumId
              },
              t.next = 4,
              d['a'].jsonp(I, {
                params: n
              });
            case 4:
              return i = t.sent,
              r = i && i.data,
              t.abrupt('return', r && r.data ? r.data.videos : null);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), ct.apply(this, arguments)
    }
    function ut(t) {
      if (t) {
        var e = {
          isEnd: t.latestVideoOrder >= t.videoCount,
          latestOrder: t.latestVideoOrder,
          latestPublishTime: t.latestVideoIssueTime
        },
        n = t.latestVideoIssueTime - t.firstVideoIssueTime <= q,
        i = u() () - t.latestVideoIssueTime <= N;
        return e.isEnd ? e.isShowNew = !n && i : e.isShowNew = i,
        e
      }
    }
    function lt(t, e) {
      var n = t.type || t.contentType;
      if (1 !== n) return !1;
      var i = t.order || t.pd;
      return e.isShowNew && (i === e.latestOrder || e.latestPublishTime - t.publishTime <= q)
    }
    function dt(t) {
      var e = pt(t);
      return e || (t.isNew ? '新' : t.isPaikeType ? '拍客' : void 0 !== t.type && 1 !== t.type ? '预告' : void 0)
    }
    function pt(t) {
      return t.qiyiProduced || t.isQiyiProduced ? '自制' : t.exclusive || t.isExclusive ? '独播' : t.payMark === L || t.isPaid ? '付费' : t.payMark === R || t.isCoupon ? '用券' : t.isSd ? '1080P' : t.payMark === E || t.isVip ? 'VIP' : void 0
    }
    function ht(t) {
      return t.qiyiProduced || t.isQiyiProduced ? '自制' : t.exclusive || t.isExclusive ? '独播' : 1 === t.payMark || t.isVip ? 'VIP' : 1 !== t.type ? '预告' : void 0
    }
    function ft(t) {
      return 0 !== t.payMark || t.isVip ? 'VIP' : t.isNew ? 'NEW' : 1 !== t.type ? '预告' : void 0
    }
    function mt(t) {
      return 1 === t.payMark || t.isVip ? 'VIP' : t.isNew ? 'NEW' : 1 !== t.type ? '预告' : void 0
    }
  },
  2350: function (t, e) {
    function n(t, e) {
      var n = t[1] || '',
      r = t[3];
      if (!r) return n;
      if (e && 'function' === typeof btoa) {
        var a = i(r),
        o = r.sources.map(function (t) {
          return '/*# sourceURL=' + r.sourceRoot + t + ' */'
        });
        return [n].concat(o).concat([a]).join('\n')
      }
      return [n].join('\n')
    }
    function i(t) {
      var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
      n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + e;
      return '/*# ' + n + ' */'
    }
    t.exports = function (t) {
      var e = [
      ];
      return e.toString = function () {
        return this.map(function (e) {
          var i = n(e, t);
          return e[2] ? '@media ' + e[2] + '{' + i + '}' : i
        }).join('')
      },
      e.i = function (t, n) {
        'string' === typeof t && (t = [
          [null,
          t,
          '']
        ]);
        for (var i = {
        }, r = 0; r < this.length; r++) {
          var a = this[r][0];
          'number' === typeof a && (i[a] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var o = t[r];
          'number' === typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = '(' + o[2] + ') and (' + n + ')'), e.push(o))
        }
      },
      e
    }
  },
  '23b1': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        n('AuraPopup', t._b({
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: t.isShow,
              expression: 'isShow'
            }
          ],
          on: {
            leftButtonClick: function (e) {
              t.isShow = !1
            },
            rightButtonClick: t.bindPhone
          }
        }, 'AuraPopup', t.popup, !1))
      ], 1)
    },
    r = [
    ],
    a = (n('96cf'), n('3b8d')),
    o = (n('57e7'), n('fd12')),
    s = n('b2e7'),
    c = {
      name: 'UserVerify',
      components: {
        AuraPopup: o['a']
      },
      props: {
        verify: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          popup: {
          },
          isShow: !1
        }
      },
      watch: {
        verify: function (t) {
          t && this.verifyUser()
        }
      },
      mounted: function () {
        var t = Object(s['A']) ().indexOf(Object(s['C']) ()) > - 1;
        t && this.$emit('success')
      },
      methods: {
        showPopup: function (t) {
          this.popup = t,
          this.isShow = !0
        },
        verifyUser: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (Object(s['M']) ()) {
                    t.next = 3;
                    break
                  }
                  return location.href = '/user.html?redirect_url='.concat(encodeURIComponent(location.href)),
                  t.abrupt('return');
                case 3:
                  return t.prev = 3,
                  t.next = 6,
                  Object(s['X']) ();
                case 6:
                  e = t.sent,
                  'A00101' === e.code ? (this.showPopup({
                    info: '操作频繁，请稍后再试',
                    leftButtonText: '确定'
                  }), this.$emit('failure'))  : 'A00000' !== e.code ? (this.showPopup({
                    title: '验证手机',
                    info: '应国家相关法律要求，在使用信息 发布等互联网服务时，需要先完成 验证手机',
                    leftButtonText: '取消',
                    rightButtonText: '去验证手机'
                  }), this.$emit('failure'))  : this.$emit('success'),
                  t.next = 14;
                  break;
                case 10:
                  t.prev = 10,
                  t.t0 = t['catch'](3),
                  this.showPopup({
                    info: '哎呀，出错了，请稍后再试',
                    leftButtonText: '确定'
                  }),
                  this.$emit('failure');
                case 14:
                  this.$emit('update:verify', !1);
                case 15:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this,
            [
              [3,
              10]
            ])
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        bindPhone: function () {
          location.href = '//m.iqiyi.com/m5/security/bindPhone.html?redirect_url='.concat(encodeURIComponent(location.href))
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  '23fe': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.apps && t.apps.length ? n('BoxShow', {
        staticClass: 'm-box',
        attrs: {
          vfms: [
            'm_453_360o',
            'm_376_bdll',
            '6_55_97',
            'm_364_vivo'
          ],
          name: 'm-recList'
        }
      }, [
        n('div', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '804231_apptuijian',
              expression: '\'804231_apptuijian\''
            }
          ],
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('AuraCardTitle', {
            attrs: {
              icon: 'c-channelicon c-channel-yingyong',
              title: '应用推荐'
            }
          })
        ], 1),
        n('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('section', {
            staticClass: 'm-list-app'
          }, [
            n('ul', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: 'mcltdown_10hmrmd',
                  expression: '\'mcltdown_10hmrmd\''
                }
              ],
              staticClass: 'list-app'
            }, t._l(t.apps, function (e, i) {
              return n('li', {
                key: i
              }, [
                n('a', {
                  attrs: {
                    href: e.ad_link
                  }
                }, [
                  n('img', {
                    attrs: {
                      src: e.list_logo,
                      width: '100%'
                    }
                  }),
                  n('div', {
                    staticClass: 'c-title'
                  }, [
                    t._v(t._s(e.ad_name))
                  ])
                ])
              ])
            }), 0)
          ])
        ])
      ])  : t._e()
    },
    r = [
    ],
    a = (n('6d67'), n('96cf'), n('3b8d')),
    o = (n('c5f6'), n('8300')),
    s = n('3bfe'),
    c = n('bc3a'),
    u = n.n(c),
    l = n('b2e7'),
    d = n('8296'),
    p = 'other',
    h = 'adpop';
    function f() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
      return t === h ? d['D'].android ? 1 : 5 : t === p ? d['D'].android ? 41 : 42 : void 0
    }
    function m(t) {
      return v.apply(this, arguments)
    }
    function v() {
      return v = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = '//pub.m.iqiyi.com/api/getNewAdInfo',
              i = {
              },
              i.key = '20359201cba5f0b43704e65d1e0cbec7',
              i.version = '1.0',
              i.batch = 1,
              i.type = 'json',
              i.qyid = Object(l['w']) (),
              i.slotid = e.slotid,
              i.appNum = e.appNum,
              t.next = 11,
              u.a.get(n, {
                params: i
              });
            case 11:
              return r = t.sent,
              t.abrupt('return', r.data);
            case 13:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), v.apply(this, arguments)
    }
    var b = {
      name: 'AppRecommend',
      components: {
        AuraCardTitle: s['a'],
        BoxShow: o['a']
      },
      props: {
        slotType: {
          type: String,
        default:
          p
        },
        appNum: {
          type: Number,
        default:
          4
        }
      },
      data: function () {
        return {
          apps: [
          ],
          slotid: f(this.slotType)
        }
      },
      beforeMount: function () {
        var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
          var e,
          n;
          return regeneratorRuntime.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                return t.next = 2,
                m({
                  slotid: this.slotid,
                  appNum: this.appNum
                }).catch (function () {
                });
              case 2:
                if (e = t.sent, e) {
                  t.next = 5;
                  break
                }
                return t.abrupt('return');
              case 5:
                n = e.response.result[this.slotid],
                this.apps = n.adinfo.slice(0, this.appNum).map(this.format);
              case 7:
              case 'end':
                return t.stop()
            }
          },
          t,
          this)
        })); function e() {
          return t.apply(this, arguments)
        }
        return e
      }(),
      methods: {
        format: function (t) {
          return '爱奇艺视频' === t.ad_name ? d['i'].weixin : '爱奇艺阅读' === t.ad_name ? t.rseat = '805091_dwnpos1' : '爱奇艺动漫' === t.ad_name ? t.rseat = '805091_dwnpos2' : '奇巴布' === t.ad_name ? t.rseat = '805091_dwnpos3' : '奇秀直播' === t.ad_name && (t.rseat = '805091_dwnpos4'),
          t
        }
      }
    },
    g = b,
    y = n('2877'),
    w = Object(y['a']) (g, i, r, !1, null, null, null);
    e['a'] = w.exports
  },
  '2af2': function (t, e, n) {
    'use strict';
    n('96cf');
    var i = n('3b8d'),
    r = (n('28a5'), n('0a0d')),
    a = n.n(r),
    o = (n('6b54'), n('87b3'), n('795b')),
    s = n.n(o),
    c = (n('57e7'), n('b383')),
    u = n.n(c),
    l = 0;
    function d() {
    }
    function p(t) {
      var e,
      n,
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      r = i.params || {
      },
      o = i.prefix || '__jp',
      c = i.callback || o + a() () + l++,
      p = i.timeout || 15000,
      h = document.getElementsByTagName('script') [0] || document.head;
      return new s.a(function (i, a) {
        function o() {
          e.removeEventListener('error', s),
          e.parentNode && e.parentNode.removeChild(e),
          window[c] = d,
          n && clearTimeout(n)
        }
        function s() {
          o(),
          a(Error('error'))
        }
        p && (n = setTimeout(function () {
          o(),
          a(Error('timeout'))
        }, p)),
        window[c] = function (t) {
          o(),
          i({
            data: t
          })
        },
        r.callback = c,
        t = ''.concat(t).concat(t.indexOf('?') > - 1 ? '&' : '?').concat(u.a.stringify(r)),
        e = document.createElement('script'),
        e.addEventListener('error', s),
        e.src = t,
        h.parentNode.insertBefore(e, h)
      })
    }
    n('7f7f'),
    n('b54a'),
    n('4917'),
    n('a481');
    var h = n('f499'),
    f = n.n(h);
    function m(t, e) {
      function n(e, n, i) {
        t.WeixinJSBridge ? WeixinJSBridge.invoke(e, r(n), function (t) {
          o(e, t, i)
        })  : u(e, i)
      }
      function i(e, n, i) {
        t.WeixinJSBridge ? WeixinJSBridge.on(e, function (t) {
          i && i.trigger && i.trigger(t),
          o(e, t, n)
        })  : u(e, i || n)
      }
      function r(t) {
        return t = t || {
        },
        t.appId = L.appId,
        t.verifyAppId = L.appId,
        t.verifySignType = 'sha1',
        t.verifyTimestamp = L.timestamp + '',
        t.verifyNonceStr = L.nonceStr,
        t.verifySignature = L.signature,
        t
      }
      function a(t) {
        return {
          timeStamp: t.timestamp + '',
          nonceStr: t.nonceStr,
          package: t.package,
          paySign: t.paySign,
          signType: t.signType || 'SHA1'
        }
      }
      function o(t, e, n) {
        var i,
        r;
        switch (delete e.err_code, delete e.err_desc, delete e.err_detail, i = e.errMsg, i || (i = e.err_msg, delete e.err_msg, i = s(t, i), e.errMsg = i), n = n || {
          }, n._complete && (n._complete(e), delete n._complete), i = e.errMsg || '', L.debug && !n.isInnerInvoke && alert(f() (e)), r = i.indexOf(':'), i.substring(r + 1)) {
          case 'ok':
            n.success && n.success(e);
            break;
          case 'cancel':
            n.cancel && n.cancel(e);
            break;
          default:
            n.fail && n.fail(e)
        }
        n.complete && n.complete(e)
      }
      function s(t, e) {
        var n,
        i,
        r = t,
        a = v[r];
        return a && (r = a),
        n = 'ok',
        e && (i = e.indexOf(':'), n = e.substring(i + 1), 'confirm' == n && (n = 'ok'), 'failed' == n && (n = 'fail'), - 1 != n.indexOf('failed_') && (n = n.substring(7)), - 1 != n.indexOf('fail_') && (n = n.substring(5)), n = n.replace(/_/g, ' '), n = n.toLowerCase(), ('access denied' == n || 'no permission to execute' == n) && (n = 'permission denied'), 'config' == r && 'function not exist' == n && (n = 'ok'), '' == n && (n = 'fail')),
        r + ':' + n
      }
      function c(t) {
        var e,
        n,
        i,
        r;
        if (t) {
          for (e = 0, n = t.length; n > e; ++e) i = t[e],
          r = m[i],
          r && (t[e] = r);
          return t
        }
      }
      function u(t, e) {
        if (!(!L.debug || e && e.isInnerInvoke)) {
          var n = v[t];
          n && (t = n),
          e && e._complete && delete e._complete,
          console.log('"' + t + '",', e || '')
        }
      }
      function l() {
        0 != E.preVerifyState && (_ || k || L.debug || '6.0.2' > j || E.systemType < 0 || I || (I = !0, E.appId = L.appId, E.initTime = T.initEndTime - T.initStartTime, E.preVerifyTime = T.preVerifyEndTime - T.preVerifyStartTime, q.getNetworkType({
          isInnerInvoke: !0,
          success: function (t) {
            var e,
            n;
            E.networkType = t.networkType,
            e = 'http://open.weixin.qq.com/sdk/report?v=' + E.version + '&o=' + E.preVerifyState + '&s=' + E.systemType + '&c=' + E.clientVersion + '&a=' + E.appId + '&n=' + E.networkType + '&i=' + E.initTime + '&p=' + E.preVerifyTime + '&u=' + E.url,
            n = new Image,
            n.src = e
          }
        })))
      }
      function d() {
        return (new Date).getTime()
      }
      function p(e) {
        x && (t.WeixinJSBridge ? e()  : b.addEventListener && b.addEventListener('WeixinJSBridgeReady', e, !1))
      }
      function h() {
        q.invoke || (q.invoke = function (e, n, i) {
          t.WeixinJSBridge && WeixinJSBridge.invoke(e, r(n), i)
        }, q.on = function (e, n) {
          t.WeixinJSBridge && WeixinJSBridge.on(e, n)
        })
      }
      var m,
      v,
      b,
      g,
      y,
      w,
      _,
      k,
      x,
      C,
      O,
      j,
      I,
      S,
      T,
      E,
      L,
      R,
      N,
      q;
      if (!t.jWeixin) return m = {
        config: 'preVerifyJSAPI',
        onMenuShareTimeline: 'menu:share:timeline',
        onMenuShareAppMessage: 'menu:share:appmessage',
        onMenuShareQQ: 'menu:share:qq',
        onMenuShareWeibo: 'menu:share:weiboApp',
        onMenuShareQZone: 'menu:share:QZone',
        previewImage: 'imagePreview',
        getLocation: 'geoLocation',
        openProductSpecificView: 'openProductViewWithPid',
        addCard: 'batchAddCard',
        openCard: 'batchViewCard',
        chooseWXPay: 'getBrandWCPayRequest'
      },
      v = function () {
        var t,
        e = {
        };
        for (t in m) e[m[t]] = t;
        return e
      }(),
      b = t.document,
      g = b.title,
      y = navigator.userAgent.toLowerCase(),
      w = navigator.platform.toLowerCase(),
      _ = !(!w.match('mac') && !w.match('win')),
      k = - 1 != y.indexOf('wxdebugger'),
      x = - 1 != y.indexOf('micromessenger'),
      C = - 1 != y.indexOf('android'),
      O = - 1 != y.indexOf('iphone') || - 1 != y.indexOf('ipad'),
      j = function () {
        var t = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
        return t ? t[1] : ''
      }(),
      I = !1,
      S = !1,
      T = {
        initStartTime: d(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      },
      E = {
        version: 1,
        appId: '',
        initTime: 0,
        preVerifyTime: 0,
        networkType: '',
        preVerifyState: 1,
        systemType: O ? 1 : C ? 2 : - 1,
        clientVersion: j,
        url: encodeURIComponent(location.href)
      },
      L = {
      },
      R = {
        _completes: [
        ]
      },
      N = {
        state: 0,
        data: {
        }
      },
      p(function () {
        T.initEndTime = d()
      }),
      q = {
        config: function (t) {
          L = t,
          u('config', t);
          var e = !1 !== L.check;
          p(function () {
            var t,
            i,
            r;
            if (e) n(m.config, {
              verifyJsApiList: c(L.jsApiList)
            }, function () {
              R._complete = function (t) {
                T.preVerifyEndTime = d(),
                N.state = 1,
                N.data = t
              },
              R.success = function () {
                E.preVerifyState = 0
              },
              R.fail = function (t) {
                R._fail ? R._fail(t)  : N.state = - 1
              };
              var t = R._completes;
              return t.push(function () {
                l()
              }),
              R.complete = function () {
                for (var e = 0, n = t.length; n > e; ++e) t[e]();
                R._completes = [
                ]
              },
              R
            }()),
            T.preVerifyStartTime = d();
             else {
              for (N.state = 1, t = R._completes, i = 0, r = t.length; r > i; ++i) t[i]();
              R._completes = [
              ]
            }
          }),
          L.beta && h()
        },
        ready: function (t) {
          0 != N.state ? t()  : (R._completes.push(t), !x && L.debug && t())
        },
        error: function (t) {
          '6.0.2' > j || S || (S = !0, - 1 == N.state ? t(N.data)  : R._fail = t)
        },
        checkJsApi: function (t) {
          var e = function (t) {
            var e,
            n,
            i = t.checkResult;
            for (e in i) n = v[e],
            n && (i[n] = i[e], delete i[e]);
            return t
          };
          n('checkJsApi', {
            jsApiList: c(t.jsApiList)
          }, function () {
            return t._complete = function (t) {
              if (C) {
                var n = t.checkResult;
                n && (t.checkResult = JSON.parse(n))
              }
              t = e(t)
            },
            t
          }())
        },
        onMenuShareTimeline: function (t) {
          i(m.onMenuShareTimeline, {
            complete: function () {
              n('shareTimeline', {
                title: t.title || g,
                desc: t.title || g,
                img_url: t.imgUrl || '',
                link: t.link || location.href,
                type: t.type || 'link',
                data_url: t.dataUrl || ''
              }, t)
            }
          }, t)
        },
        onMenuShareAppMessage: function (t) {
          i(m.onMenuShareAppMessage, {
            complete: function () {
              n('sendAppMessage', {
                title: t.title || g,
                desc: t.desc || '',
                link: t.link || location.href,
                img_url: t.imgUrl || '',
                type: t.type || 'link',
                data_url: t.dataUrl || ''
              }, t)
            }
          }, t)
        },
        onMenuShareQQ: function (t) {
          i(m.onMenuShareQQ, {
            complete: function () {
              n('shareQQ', {
                title: t.title || g,
                desc: t.desc || '',
                img_url: t.imgUrl || '',
                link: t.link || location.href
              }, t)
            }
          }, t)
        },
        onMenuShareWeibo: function (t) {
          i(m.onMenuShareWeibo, {
            complete: function () {
              n('shareWeiboApp', {
                title: t.title || g,
                desc: t.desc || '',
                img_url: t.imgUrl || '',
                link: t.link || location.href
              }, t)
            }
          }, t)
        },
        onMenuShareQZone: function (t) {
          i(m.onMenuShareQZone, {
            complete: function () {
              n('shareQZone', {
                title: t.title || g,
                desc: t.desc || '',
                img_url: t.imgUrl || '',
                link: t.link || location.href
              }, t)
            }
          }, t)
        },
        startRecord: function (t) {
          n('startRecord', {
          }, t)
        },
        stopRecord: function (t) {
          n('stopRecord', {
          }, t)
        },
        onVoiceRecordEnd: function (t) {
          i('onVoiceRecordEnd', t)
        },
        playVoice: function (t) {
          n('playVoice', {
            localId: t.localId
          }, t)
        },
        pauseVoice: function (t) {
          n('pauseVoice', {
            localId: t.localId
          }, t)
        },
        stopVoice: function (t) {
          n('stopVoice', {
            localId: t.localId
          }, t)
        },
        onVoicePlayEnd: function (t) {
          i('onVoicePlayEnd', t)
        },
        uploadVoice: function (t) {
          n('uploadVoice', {
            localId: t.localId,
            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
          }, t)
        },
        downloadVoice: function (t) {
          n('downloadVoice', {
            serverId: t.serverId,
            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
          }, t)
        },
        translateVoice: function (t) {
          n('translateVoice', {
            localId: t.localId,
            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
          }, t)
        },
        chooseImage: function (t) {
          n('chooseImage', {
            scene: '1|2',
            count: t.count || 9,
            sizeType: t.sizeType || [
              'original',
              'compressed'
            ],
            sourceType: t.sourceType || [
              'album',
              'camera'
            ]
          }, function () {
            return t._complete = function (t) {
              if (C) {
                var e = t.localIds;
                e && (t.localIds = JSON.parse(e))
              }
            },
            t
          }())
        },
        previewImage: function (t) {
          n(m.previewImage, {
            current: t.current,
            urls: t.urls
          }, t)
        },
        uploadImage: function (t) {
          n('uploadImage', {
            localId: t.localId,
            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
          }, t)
        },
        downloadImage: function (t) {
          n('downloadImage', {
            serverId: t.serverId,
            isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
          }, t)
        },
        getNetworkType: function (t) {
          var e = function (t) {
            var e,
            n,
            i,
            r = t.errMsg;
            if (t.errMsg = 'getNetworkType:ok', e = t.subtype, delete t.subtype, e) t.networkType = e;
             else switch (n = r.indexOf(':'), i = r.substring(n + 1)) {
              case 'wifi':
              case 'edge':
              case 'wwan':
                t.networkType = i;
                break;
              default:
                t.errMsg = 'getNetworkType:fail'
            }
            return t
          };
          n('getNetworkType', {
          }, function () {
            return t._complete = function (t) {
              t = e(t)
            },
            t
          }())
        },
        openLocation: function (t) {
          n('openLocation', {
            latitude: t.latitude,
            longitude: t.longitude,
            name: t.name || '',
            address: t.address || '',
            scale: t.scale || 28,
            infoUrl: t.infoUrl || ''
          }, t)
        },
        getLocation: function (t) {
          t = t || {
          },
          n(m.getLocation, {
            type: t.type || 'wgs84'
          }, function () {
            return t._complete = function (t) {
              delete t.type
            },
            t
          }())
        },
        hideOptionMenu: function (t) {
          n('hideOptionMenu', {
          }, t)
        },
        showOptionMenu: function (t) {
          n('showOptionMenu', {
          }, t)
        },
        closeWindow: function (t) {
          t = t || {
          },
          n('closeWindow', {
          }, t)
        },
        hideMenuItems: function (t) {
          n('hideMenuItems', {
            menuList: t.menuList
          }, t)
        },
        showMenuItems: function (t) {
          n('showMenuItems', {
            menuList: t.menuList
          }, t)
        },
        hideAllNonBaseMenuItem: function (t) {
          n('hideAllNonBaseMenuItem', {
          }, t)
        },
        showAllNonBaseMenuItem: function (t) {
          n('showAllNonBaseMenuItem', {
          }, t)
        },
        scanQRCode: function (t) {
          t = t || {
          },
          n('scanQRCode', {
            needResult: t.needResult || 0,
            scanType: t.scanType || [
              'qrCode',
              'barCode'
            ]
          }, function () {
            return t._complete = function (t) {
              var e,
              n;
              O && (e = t.resultStr, e && (n = JSON.parse(e), t.resultStr = n && n.scan_code && n.scan_code.scan_result))
            },
            t
          }())
        },
        openProductSpecificView: function (t) {
          n(m.openProductSpecificView, {
            pid: t.productId,
            view_type: t.viewType || 0,
            ext_info: t.extInfo
          }, t)
        },
        addCard: function (t) {
          var e,
          i,
          r,
          a,
          o = t.cardList,
          s = [
          ];
          for (e = 0, i = o.length; i > e; ++e) r = o[e],
          a = {
            card_id: r.cardId,
            card_ext: r.cardExt
          },
          s.push(a);
          n(m.addCard, {
            card_list: s
          }, function () {
            return t._complete = function (t) {
              var e,
              n,
              i,
              r = t.card_list;
              if (r) {
                for (r = JSON.parse(r), e = 0, n = r.length; n > e; ++e) i = r[e],
                i.cardId = i.card_id,
                i.cardExt = i.card_ext,
                i.isSuccess = !!i.is_succ,
                delete i.card_id,
                delete i.card_ext,
                delete i.is_succ;
                t.cardList = r,
                delete t.card_list
              }
            },
            t
          }())
        },
        chooseCard: function (t) {
          n('chooseCard', {
            app_id: L.appId,
            location_id: t.shopId || '',
            sign_type: t.signType || 'SHA1',
            card_id: t.cardId || '',
            card_type: t.cardType || '',
            card_sign: t.cardSign,
            time_stamp: t.timestamp + '',
            nonce_str: t.nonceStr
          }, function () {
            return t._complete = function (t) {
              t.cardList = t.choose_card_info,
              delete t.choose_card_info
            },
            t
          }())
        },
        openCard: function (t) {
          var e,
          i,
          r,
          a,
          o = t.cardList,
          s = [
          ];
          for (e = 0, i = o.length; i > e; ++e) r = o[e],
          a = {
            card_id: r.cardId,
            code: r.code
          },
          s.push(a);
          n(m.openCard, {
            card_list: s
          }, t)
        },
        chooseWXPay: function (t) {
          n(m.chooseWXPay, a(t), t)
        }
      },
      e && (t.wx = t.jWeixin = q),
      q
    }
    var v = n('6199'),
    b = n.n(v),
    g = '//bird.if.iqiyi.com/wechat/jsapi_ticket',
    y = 'wx85e5e7f44c7cc50e';
    function w(t) {
      return p(g, {
        params: {
          appid: t || y
        }
      }).then(function (t) {
        var e = t.data;
        return 'A0000' === e.code ? e.jsapi_ticket : ''
      })
    }
    function _() {
      var t,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      n = m(window);
      return t = e.jsApiTicket ? s.a.resolve(e.jsApiTicket)  : w(e.appid),
      t.then(function (t) {
        if (t) {
          var i = Math.random().toString(36).substr(2),
          r = a() (),
          o = b() ('jsapi_ticket='.concat(t, '&noncestr=').concat(i, '&timestamp=').concat(r, '&url=').concat(location.href.split('#') [0])),
          c = [
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
            'openCard'
          ];
          return new s.a(function (t, a) {
            n.ready(function () {
              t(n)
            }),
            n.error(function () {
              a(n)
            }),
            n.config({
              debug: !0 === e.debug,
              appId: e.appId || y,
              timestamp: r,
              nonceStr: i,
              signature: o,
              jsApiList: e.jsApiList || c
            })
          })
        }
        return s.a.reject(new Error('ticket is null'))
      })
    }
    var k = n('8296');
    function x() {
      return C.apply(this, arguments)
    }
    function C() {
      return C = Object(i['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e = i.length > 0 && void 0 !== i[0] ? i[0] : {
              }, k['i'].weixin) {
                t.next = 3;
                break
              }
              return t.abrupt('return');
            case 3:
              return t.next = 5,
              I();
            case 5:
              return n = t.sent,
              t.abrupt('return', n && n.onMenuShareTimeline(e));
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), C.apply(this, arguments)
    }
    function O(t) {
      return j.apply(this, arguments)
    }
    function j() {
      return j = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (k['i'].weixin) {
                t.next = 2;
                break
              }
              return t.abrupt('return');
            case 2:
              return t.next = 4,
              I();
            case 4:
              return n = t.sent,
              t.abrupt('return', n && n.onMenuShareAppMessage(e));
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), j.apply(this, arguments)
    }
    function I() {
      if (I.promise) return I.promise;
      var t = _();
      return I.promise = t,
      t.catch (function () {
        I.promise = null
      })
    }
    n.d(e, 'b', function () {
      return x
    }),
    n.d(e, 'a', function () {
      return O
    })
  },
  '2ecd': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return i
    });
    n('ac6a'),
    n('f3e2'),
    n('0cd8'),
    n('c5f6');
    function i(t, e) {
      var n,
      i,
      r,
      a,
      o,
      s,
      c,
      u,
      l,
      d,
      p,
      h,
      f,
      m,
      v = 0,
      b = - 1,
      g = null,
      y = null,
      w = null,
      _ = 0,
      k = {
        handleEvent: function (t) {
          switch (o && t.stopPropagation(), t.type) {
            case 'touchstart':
              this.onTouchStart(t);
              break;
            case 'touchmove':
              this.onTouchMove(t);
              break;
            case 'touchend':
              this.onTouchEnd(t);
              break;
            case 'webkitTransitionEnd':
            case 'msTransitionEnd':
            case 'oTransitionEnd':
            case 'otransitionend':
            case 'transitionend':
              this.onTransitionEnd(t);
              break
          }
        },
        onTouchStart: function (t) {
          var e = t.touches[0];
          d = {
            x: e.pageX,
            y: e.pageY,
            time: + new Date
          },
          p = void 0,
          h = {
          }
        },
        onTouchMove: function (t) {
          if (a && t.preventDefault(), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
            a && t.preventDefault();
            var e = t.touches[0];
            h = {
              x: e.pageX - d.x,
              y: e.pageY - d.y
            },
            'undefined' === typeof p && (p = !!(p || Math.abs(h.x) < Math.abs(h.y))),
            p || (t.preventDefault(), R(), $(U(v - 2), h.x + P( - 2), 0), $(U(v - 1), h.x + P( - 1), 0), $(U(v), h.x + P(0), 0), $(U(v + 1), h.x + P(1), 0), $(U(v + 2), h.x + P(2), 0))
          }
        },
        onTouchEnd: function (t) {
          var e = + new Date - d.time,
          n = Number(e) < 250 && Math.abs(h.x) > 20 || Math.abs(h.x) > _ / 2,
          i = h.x < 0 ? - 1 : 1;
          !p && n ? (N(v, r, i), setTimeout(function () {
            l(i, v, U(v))
          }, 0))  : ($(U(v - 2), P( - 2), r), $(U(v - 1), P( - 1), r), $(U(v), P(0), r), $(U(v + 1), P(1), r), $(U(v + 2), P(2), r)),
          T()
        },
        onTransitionEnd: function (t) {
          var e = y.reduce(function (e, n, i) {
            return n === t.target ? i : e
          }, - 1);
          v === e && T()
        }
      };
      function x() {
        t && t.children.length && (w = t, q(), C(e), I(), O(), T(), 'undefined' !== typeof window && window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', function (t) {
          D()
        }))
      }
      function C(t) {
        t = t || {
        },
        n = t.direction || 'left',
        i = t.delay || 2000,
        r = t.speed || 300,
        a = t.disableScroll || !1,
        o = t.stopPropagation || !1,
        s = t.startIndex || 0,
        c = !1 !== t.autoPlay,
        u = 'function' === typeof t.callback ? t.callback : function () {
        },
        l = 'function' === typeof t.touchEndBack ? t.touchEndBack : function () {
        }
      }
      function O() {
        v = s || 0,
        b = 'left' === n ? - 1 : 1,
        y.forEach(function (t) {
          t.style.position = 'absolute'
        }),
        j(),
        S(),
        A(v),
        y.forEach(function (t) {
          t.style.visibility = 'visible'
        })
      }
      function j() {
        var t = y.length;
        if (!(t >= 5)) {
          switch (t) {
            case 4:
            case 3:
              e();
              break;
            case 2:
              e(2);
              break;
            case 1:
              e(4);
              break
          }
          q()
        }
        function e() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = document.createDocumentFragment();
          while (e-- > 0) for (var i = 0; i < t; i++) {
            var r = y[i].cloneNode(!0);
            r.classList.remove('selected'),
            n.appendChild(r)
          }
          w.appendChild(n)
        }
      }
      function I() {
        var e = t;
        e.addEventListener('touchstart', k, !1),
        e.addEventListener('touchmove', k, !1),
        e.addEventListener('touchend', k, !1),
        e.addEventListener('webkitTransitionEnd', k, !1),
        e.addEventListener('msTransitionEnd', k, !1),
        e.addEventListener('oTransitionEnd', k, !1),
        e.addEventListener('otransitionend', k, !1),
        e.addEventListener('transitionend', k, !1)
      }
      function S() {
        _ = w.offsetWidth;
        var t = U(v),
        e = U(v + 1),
        n = t.offsetWidth,
        i = e.offsetWidth;
        f = i,
        m = (_ - n) / 2
      }
      function T() {
        c && (g && R(), g = setTimeout(function () {
          E()
        }, i))
      }
      function E() {
        N(v, r, b)
      }
      function L() {
        N(v, r, - 1 * b)
      }
      function R() {
        clearTimeout(g)
      }
      function N(t, e, n) {
        setTimeout(function () {
          var i = U(t + 2 * n);
          i.style.visibility = 'hidden',
          $(i, P( - 2 * n), 0),
          i.style.visibility = 'visible',
          $(U(t + 1 * n), P(2 * n), e),
          $(U(t), P(1 * n), e);
          var r = U(t - 1 * n);
          Array.prototype.slice.call(r.parentNode.children).forEach(function (t) {
            t.classList.remove('selected')
          }),
          $(r, P(0), e),
          r.classList.add('selected'),
          $(U(t - 2 * n), P( - 1 * n), e),
          v = M(v - 1 * n),
          setTimeout(function () {
            u(v, U(v))
          }, 0)
        }, 20)
      }
      function q() {
        y = Array.prototype.slice.call(w.children)
      }
      function A(t) {
        for (var e = 0, n = y.length; e < n; e++) {
          var i = y[e],
          r = e;
          $(i, P( - 2 * b), 0),
          i.setAttribute('data-index', r)
        }
        $(U(t - 2), P( - 2), 0),
        $(U(t - 1), P( - 1), 0),
        $(U(t), P(0), 0),
        $(U(t + 1), P(1), 0),
        $(U(t + 2), P(2), 0)
      }
      function P(t) {
        var e,
        n = m,
        i = - f + m,
        r = _ - m;
        return 0 === t ? e = n : t < 0 ? e = i + (t + 1) * f : t > 0 && (e = r + (t - 1) * f),
        e
      }
      function U(t) {
        return y[M(t)]
      }
      function M(t) {
        return (y.length + t % y.length) % y.length
      }
      function $(t, e, n) {
        var i = t,
        r = i && i.style;
        r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + 'ms', r.webkitTransform = 'translate(' + e + 'px,0)translateZ(0)', r.msTransform = r.MozTransform = r.OTransform = 'translateX(' + e + 'px)')
      }
      function D() {
        R(),
        setTimeout(function () {
          S(),
          A(v),
          T()
        }, 200)
      }
      return x(),
      {
        start: function () {
          T()
        },
        prev: function () {
          R(),
          L()
        },
        next: function () {
          R(),
          E()
        },
        stop: function () {
          R()
        },
        refresh: function () {
          D()
        }
      }
    }
    'undefined' !== typeof window && (window.jQuery || window.Zepto) && function (t) {
      t.fn.Carousel = function (e) {
        return this.each(function () {
          t(this).data('Swipe', new i(t(this) [0], e))
        })
      }
    }(window.jQuery || window.Zepto)
  },
  3115: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.show ? n('div', [
        n('BottomAppRecommend', {
          attrs: {
            cids: t.cids,
            'filter-status': t.filterStatus,
            utype: t.utype,
            subtype: t.subtype,
            rseat: t.rseat
          },
          on: {
            close: t.close
          }
        })
      ], 1)  : t._e()
    },
    r = [
    ],
    a = (n('759f'), n('0a0d')),
    o = n.n(a),
    s = n('8296'),
    c = n('4e77'),
    u = n('2c06'),
    l = n('bfde'),
    d = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.items.length ? n('section', {
        staticClass: 'm-iqyDown'
      }, [
        n('div', {
          staticClass: 'iqy-items'
        }, [
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.rseat,
                expression: 'rseat'
              }
            ],
            staticClass: 'close-item',
            attrs: {
              href: 'javascript:void(0);'
            },
            on: {
              click: function (e) {
                return t.$emit('close')
              }
            }
          }, [
            n('i', {
              staticClass: 'c-glyphicon c-glyphicon-guideClose'
            })
          ]),
          n('div', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.rseat,
                expression: 'rseat'
              },
              {
                name: 'swipe',
                rawName: 'v-swipe',
                value: t.swipeOptions,
                expression: 'swipeOptions'
              }
            ]
          }, [
            n('ul', {
              staticClass: 'list-items'
            }, [
              t._l(t.items, function (e, i) {
                return n('li', {
                  key: i,
                  staticStyle: {
                    float: 'left',
                    width: '100%',
                    position: 'relative'
                  }
                }, [
                  n('ButtonDown', {
                    staticClass: 'list-info',
                    attrs: {
                      'extral-options': t.extralOptions(e),
                      subtype: t.subtype,
                      href: 'javascript:void(0);',
                      'to-page': 'play',
                      'down-app-pos': 'channelHome_nativeapp_down',
                      rseat: '603091_14'
                    }
                  }, [
                    n('span', {
                      staticClass: 'img',
                      style: 'background-image:url(' + e.album_pic_url + ')'
                    }),
                    n('div', {
                      staticClass: 'info'
                    }, [
                      n('div', {
                        staticClass: 'c-title'
                      }, [
                        t._v(t._s(e.album_name))
                      ]),
                      e.hotNum ? n('div', {
                        staticClass: 'c-des'
                      }, [
                        t._v('热度' + t._s(e.hotNum) + '\n              ')
                      ])  : t._e()
                    ])
                  ])
                ], 1)
              }),
              t._m(0)
            ], 2)
          ]),
          t.index !== t.items.length ? n('ButtonDown', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.rseat,
                expression: 'rseat'
              }
            ],
            attrs: {
              'extral-options': t.extralOptions(t.items[t.index]),
              subtype: t.subtype,
              'to-page': 'play',
              'down-app-pos': 'channelHome_nativeapp_down',
              rseat: '603091_14'
            }
          }, [
            n('span', {
              staticClass: 'c-btn c-btn-hollow'
            }, [
              t._v(t._s(t.callAppButton))
            ])
          ])  : t._e(),
          t.index === t.items.length ? n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.rseat,
                expression: 'rseat'
              }
            ],
            attrs: {
              href: '//www.iqiyi.com/common/flow_select_new.html?from=h52'
            }
          }, [
            n('span', {
              staticClass: 'c-btn c-btn-hollow'
            }, [
              t._v('点击查看')
            ])
          ])  : t._e(),
          n('div', {
            staticClass: 'list-dot'
          }, [
            n('div', {
              staticClass: 'dot-inner'
            }, t._l(t.items.length + 1, function (e) {
              return n('i', {
                key: e,
                staticClass: 'dot-item',
                class : {
                  selected: e === t.index + 1
                }
              })
            }), 0)
          ])
        ], 1)
      ])  : t._e()
    },
    p = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('li', {
          staticStyle: {
            float: 'left',
            width: '100%',
            position: 'relative'
          }
        }, [
          n('a', {
            staticClass: 'list-info',
            attrs: {
              href: '//www.iqiyi.com/common/flow_select_new.html?from=h52'
            }
          }, [
            n('span', {
              staticClass: 'img',
              staticStyle: {
                'background-image': 'url(//www.iqiyipic.com/common/fix/h5-aura/iqydown-flow.jpg)'
              }
            }),
            n('div', {
              staticClass: 'info'
            }, [
              n('div', {
                staticClass: 'c-title'
              }, [
                t._v('打开爱奇艺APP，免流量看视频')
              ])
            ])
          ])
        ])
      }
    ],
    h = (n('6d67'), n('96cf'), n('3b8d')),
    f = n('f112'),
    m = n('240d'),
    v = n('38ff'),
    b = n('5bcb'),
    g = n('936f'),
    y = {
      name: 'BottomAppRecommend',
      components: {
        ButtonDown: v['a']
      },
      directives: {
        swipe: b['a']
      },
      props: {
        cids: {
          type: String,
        default:
          ''
        },
        utype: {
          type: String,
        default:
          ''
        },
        filterStatus: {
          type: String,
        default:
          ''
        },
        subtype: {
          type: String,
        default:
          ''
        },
        rseat: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        var t = this;
        return {
          items: [
          ],
          index: 0,
          swipeOptions: {
            stopPropagation: !0,
            startSlide: 0,
            callback: function (e) {
              t.index = e
            },
            continuous: !0,
            auto: 3000
          },
          callAppButton: ''
        }
      },
      mounted: function () {
        this.init()
      },
      methods: {
        init: function () {
          var t = Object(h['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.t0 = this.utype, !this.filterStatus) {
                    t.next = 5;
                    break
                  }
                  t.t1 = this.filterStatus,
                  t.next = 8;
                  break;
                case 5:
                  return t.next = 7,
                  this.getFilterStatus();
                case 7:
                  t.t1 = t.sent;
                case 8:
                  return t.t2 = t.t1,
                  t.t3 = this.cids,
                  e = {
                    utype: t.t0,
                    filterStatus: t.t2,
                    cids: t.t3,
                    len: 4,
                    dim: 'hour',
                    area: 'm_iqiyi'
                  },
                  t.next = 13,
                  Object(f['a']) (e).catch (function () {
                    return []
                  });
                case 13:
                  n = t.sent,
                  n.length > 0 ? (this.items = n.map(function (t) {
                    return t.album_pic_url = Object(m['a']) (t.album_pic_url, '160_90'),
                    t
                  }), this.callAppButton = '打开APP')  : (this.items.push({
                    album_pic_url: '//www.iqiyipic.com/common/fix/h5-v3/iqy-linklogo.png',
                    album_name: '上客户端看，更高清！更流畅！'
                  }), this.callAppButton = '立即安装');
                case 15:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        getFilterStatus: function () {
          var t = Object(h['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e = '//pub.m.iqiyi.com/h5/main/filter/',
                  t.next = 3,
                  g['a'].jsonp(e).catch (function () {
                    return !1
                  });
                case 3:
                  if (n = t.sent, !n || !n.data || 'A00000' !== n.data.code) {
                    t.next = 8;
                    break
                  }
                  return t.abrupt('return', n.data.data.filterStatus + '');
                case 8:
                  return t.abrupt('return', !1);
                case 9:
                case 'end':
                  return t.stop()
              }
            },
            t)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        extralOptions: function (t) {
          return {
            aid: t && t.album_id,
            tvid: t && t.tv_id,
            cid: t && t.album_channel,
            vid: t && t.vid,
            video: t
          }
        }
      }
    },
    w = y,
    _ = n('2877'),
    k = Object(_['a']) (w, d, p, !1, null, null, null),
    x = k.exports,
    C = n('5321'),
    O = {
      name: 'BottomAppBanner',
      components: {
        BottomAppRecommend: x
      },
      props: {
        cids: {
          type: String,
        default:
          ''
        },
        filterStatus: {
          type: String,
        default:
          ''
        },
        utype: {
          type: String,
        default:
          ''
        },
        block: {
          type: String,
        default:
          ''
        },
        rseat: {
          type: String,
        default:
          ''
        },
        subtype: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          show: !1
        }
      },
      mounted: function () {
        Object(c['e']) (this.showBottom)
      },
      destroyed: function () {
        Object(c['h']) (this.showBottom)
      },
      methods: {
        init: function () {
          if (!this.browserFilter() && !Object(l['b']) ()) {
            var t = + s['B'].getItem(u['m']),
            e = 172800000;
            (!t || o() () - t > e) && (this.show = !0, Object(C['m']) ({
              block: this.block
            }))
          }
        },
        browserFilter: function () {
          return l['a'].some(function (t) {
            return !!s['i'][t]
          })
        },
        showBottom: function (t) {
          t.scrollOffset.y > 110 && !this.show && this.init()
        },
        close: function () {
          this.show = !1,
          s['B'].setItem(u['m'], o() ())
        }
      }
    },
    j = O,
    I = Object(_['a']) (j, i, r, !1, null, null, null);
    e['a'] = I.exports
  },
  3260: function (t, e, n) {
    'use strict';
    var i = n('0a0d'),
    r = n.n(i);
    e['a'] = function (t) {
      var e = r() () - 1000 * t,
      n = new Date(1000 * t),
      i = new Date;
      return e < 60000 ? '刚刚' : e < 3600000 ? ''.concat(Math.floor(e / 60000), '分钟前')  : e > 3600000 && n.getDate() === i.getDate() ? ''.concat(Math.floor(e / 3600000), '小时前')  : e > 3600000 && n.getDate() + 1 === i.getDate() ? '昨天'.concat(n.getHours(), '时').concat(n.getMinutes(), '分')  : ''.concat(n.getMonth() + 1, '月').concat(n.getDate(), '日')
    }
  },
  '35e86': function (t, e, n) {
    'use strict';
    t.exports = {
      isString: function (t) {
        return 'string' === typeof t
      },
      isObject: function (t) {
        return 'object' === typeof t && null !== t
      },
      isNull: function (t) {
        return null === t
      },
      isNullOrUndefined: function (t) {
        return null == t
      }
    }
  },
  '360b': function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return s
    }),
    n.d(e, 'a', function () {
      return c
    }),
    n.d(e, 'c', function () {
      return u
    });
    n('96cf');
    var i = n('3b8d'),
    r = n('936f'),
    a = n('b2e7'),
    o = '//act.vip.iqiyi.com/interact/api/v2/show',
    s = '4',
    c = '12';
    function u() {
      return l.apply(this, arguments)
    }
    function l() {
      return l = Object(i['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        s,
        c,
        u,
        l,
        d = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = d.length > 0 && void 0 !== d[0] ? d[0] : {
              },
              n = {
                tv_id: e.qipuId,
                cid: e.cid,
                vt: e.vt,
                P00001: Object(a['x']) (),
                interfaceCode: '8e2577b5189352e0',
                platform: '97ae2982356f69d8',
                deviceID: Object(a['w']) (),
                lang: 'zh_CN',
                app_lm: 'cn'
              },
              t.next = 4,
              r['a'].get(o, {
                params: n
              }, {
                timeout: 1000
              }).catch (function () {
              });
            case 4:
              return i = t.sent,
              s = i && i.data,
              c = {
              },
              s && 'A00000' === s.code && s.data && s.data[0] && (c.interfaceCode = s.data[0].interfaceCode, u = s.data[0].interfaceData || {
              }, 'A00000' === u.respCode && (l = u.respData, l && (c.strategyCode = l.strategyCode, c.covers = l.covers, c.success = !0))),
              t.abrupt('return', c);
            case 9:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), l.apply(this, arguments)
    }
  },
  '45bc': function (t, e, n) {
    'use strict';
    var i = n('8296');
    n.d(e, 'c', function () {
      return i['p']
    }),
    n.d(e, 'b', function () {
      return i['k']
    }),
    n.d(e, 'a', function () {
      return i['h']
    })
  },
  '465e': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        staticClass: 'm-pp-view-pic'
      }, [
        n('ImageViewerTitle', {
          attrs: {
            images: t.images,
            index: t.index
          }
        }),
        n('div', {
          directives: [
            {
              name: 'swipe',
              rawName: 'v-swipe',
              value: t.swipeOptions,
              expression: 'swipeOptions'
            }
          ],
          staticClass: 'pp-view-pic',
          on: {
            click: function (e) {
              return t.hide()
            }
          }
        }, [
          n('ul', {
            staticClass: 'list-pp-view-pic'
          }, t._l(t.images, function (e, i) {
            return n('li', {
              key: i
            }, [
              n('img', {
                directives: [
                  {
                    name: 'image',
                    rawName: 'v-image',
                    value: {
                      defaultImage: t.thumbnails[i],
                      load: !0
                    },
                    expression: '{defaultImage: thumbnails[index], load: true}'
                  }
                ],
                staticStyle: {
                  width: '100%'
                },
                attrs: {
                  src: t.images[i].url
                }
              })
            ])
          }), 0)
        ])
      ], 1)
    },
    r = [
    ],
    a = (n('c5f6'), function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'pp-view-pic_warn'
      }, [
        t._v(t._s(t.title))
      ])
    }),
    o = [
    ],
    s = {
      name: 'ImageViewerTitle',
      props: {
        images: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        index: {
          type: Number,
        default:
          0
        }
      },
      computed: {
        title: function () {
          var t = this.images.length,
          e = this.index;
          return ''.concat(e % t + 1, '/').concat(t)
        }
      }
    },
    c = s,
    u = n('2877'),
    l = Object(u['a']) (c, a, o, !1, null, null, null),
    d = l.exports,
    p = n('5bcb'),
    h = {
      inserted: function (t, e) {
        if (t.dataset.src) t.setAttribute('src', t.dataset.src);
         else {
          var n = t.getAttribute('src'),
          i = e.value,
          r = i.defaultImage,
          a = void 0 === r ? n : r,
          o = i.load,
          s = void 0 !== o && o;
          a && t.setAttribute('src', a),
          s && m(t);
          var c = new Image;
          c.onload = function () {
            t.dataset.src = 'src',
            t.style.width = 'auto',
            t.setAttribute('src', n),
            v(t)
          },
          c.onerror = function () {
            v(t),
            f(t)
          },
          c.src = n
        }
      }
    };
    function f(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '加载失败 稍后重试',
      n = document.createElement('div');
      n.innerHTML = '\n    <div class="m-toast">\n      <div class="info">\n        '.concat(e, '\n      </div>\n    </div>\n  '),
      t.appendChild(n)
    }
    function m(t) {
      var e = document.createElement('div');
      return e.innerHTML = '\n    <div class="m-loading-full">\n      <i class="icon-loading"></i>\n    </div>\n  ',
      t.appendChild(e),
      e
    }
    function v(t) {
      var e = t.parentNode.querySelector('.m-loading-full');
      e.style.display = 'none'
    }
    var b = {
      name: 'ImageViewer',
      components: {
        ImageViewerTitle: d
      },
      directives: {
        swipe: p['a'],
        image: h
      },
      props: {
        images: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        startIndex: {
          type: Number,
        default:
          0
        },
        scrollTop: {
          type: Number,
        default:
          0
        },
        thumbnails: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        var t = this;
        return {
          index: this.startIndex,
          swipeOptions: {
            stopPropagation: !0,
            startSlide: this.startIndex,
            callback: function (e, n) {
              t.index = e
            },
            continuous: 2 !== this.images.length
          }
        }
      },
      methods: {
        hide: function () {
          var t = this;
          this.$emit('update:show', !1),
          this.$nextTick(function () {
            document.body.scrollTop = t.scrollTop,
            document.documentElement.scrollTop = t.scrollTop
          })
        }
      }
    },
    g = b,
    y = Object(u['a']) (g, i, r, !1, null, null, null);
    e['a'] = y.exports
  },
  '469f': function (t, e, n) {
    n('6c1c'),
    n('1654'),
    t.exports = n('7d7b')
  },
  '474a': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('img', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.defaultImage,
            expression: 'defaultImage'
          }
        ],
        staticStyle: {
          'margin-top': '-1000px',
          position: 'absolute'
        },
        attrs: {
          src: '//www.iqiyipic.com/common/fix/iqiyi-wechat/logo.jpg'
        }
      })
    },
    r = [
    ],
    a = n('cebc'),
    o = (n('b54a'), n('2af2')),
    s = n('8296'),
    c = {
      name: 'WechatShare',
      props: {
        options: {
          type: Object,
        default:
          function () {
            return {
              title: '',
              desc: '',
              link: '',
              imgUrl: ''
            }
          }
        },
        defaultImage: {
          type: Boolean,
        default:
          !0
        }
      },
      watch: {
        options: {
          handler: function (t, e) {
            this.refresh()
          },
          deep: !0
        }
      },
      mounted: function () {
        this.refresh()
      },
      methods: {
        refresh: function () {
          this.options.link || (this.options.link = location.href),
          this.options.imgUrl = Object(s['M']) (this.options.imgUrl),
          Object(o['b']) (Object(a['a']) ({
          }, this.options, {
            link: s['d'].addQuery(this.options.link, {
              weixin_platform: 'moment'
            })
          })),
          Object(o['a']) (Object(a['a']) ({
          }, this.options, {
            link: s['d'].addQuery(this.options.link, {
              weixin_platform: 'friend'
            })
          }))
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  '499e': function (t, e, n) {
    'use strict';
    function i(t, e) {
      for (var n = [
      ], i = {
      }, r = 0; r < e.length; r++) {
        var a = e[r],
        o = a[0],
        s = a[1],
        c = a[2],
        u = a[3],
        l = {
          id: t + ':' + r,
          css: s,
          media: c,
          sourceMap: u
        };
        i[o] ? i[o].parts.push(l)  : n.push(i[o] = {
          id: o,
          parts: [
            l
          ]
        })
      }
      return n
    }
    n.r(e),
    n.d(e, 'default', function () {
      return f
    });
    var r = 'undefined' !== typeof document;
    if ('undefined' !== typeof DEBUG && DEBUG && !r) throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');
    var a = {
    },
    o = r && (document.head || document.getElementsByTagName('head') [0]),
    s = null,
    c = 0,
    u = !1,
    l = function () {
    },
    d = null,
    p = 'data-vue-ssr-id',
    h = 'undefined' !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    function f(t, e, n, r) {
      u = n,
      d = r || {
      };
      var o = i(t, e);
      return m(o),
      function (e) {
        for (var n = [
        ], r = 0; r < o.length; r++) {
          var s = o[r],
          c = a[s.id];
          c.refs--,
          n.push(c)
        }
        e ? (o = i(t, e), m(o))  : o = [
        ];
        for (r = 0; r < n.length; r++) {
          c = n[r];
          if (0 === c.refs) {
            for (var u = 0; u < c.parts.length; u++) c.parts[u]();
            delete a[c.id]
          }
        }
      }
    }
    function m(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e],
        i = a[n.id];
        if (i) {
          i.refs++;
          for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
          for (; r < n.parts.length; r++) i.parts.push(b(n.parts[r]));
          i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
        } else {
          var o = [
          ];
          for (r = 0; r < n.parts.length; r++) o.push(b(n.parts[r]));
          a[n.id] = {
            id: n.id,
            refs: 1,
            parts: o
          }
        }
      }
    }
    function v() {
      var t = document.createElement('style');
      return t.type = 'text/css',
      o.appendChild(t),
      t
    }
    function b(t) {
      var e,
      n,
      i = document.querySelector('style[' + p + '~="' + t.id + '"]');
      if (i) {
        if (u) return l;
        i.parentNode.removeChild(i)
      }
      if (h) {
        var r = c++;
        i = s || (s = v()),
        e = y.bind(null, i, r, !1),
        n = y.bind(null, i, r, !0)
      } else i = v(),
      e = w.bind(null, i),
      n = function () {
        i.parentNode.removeChild(i)
      };
      return e(t),
      function (i) {
        if (i) {
          if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
          e(t = i)
        } else n()
      }
    }
    var g = function () {
      var t = [
      ];
      return function (e, n) {
        return t[e] = n,
        t.filter(Boolean).join('\n')
      }
    }();
    function y(t, e, n, i) {
      var r = n ? '' : i.css;
      if (t.styleSheet) t.styleSheet.cssText = g(e, r);
       else {
        var a = document.createTextNode(r),
        o = t.childNodes;
        o[e] && t.removeChild(o[e]),
        o.length ? t.insertBefore(a, o[e])  : t.appendChild(a)
      }
    }
    function w(t, e) {
      var n = e.css,
      i = e.media,
      r = e.sourceMap;
      if (i && t.setAttribute('media', i), d.ssrId && t.setAttribute(p, e.id), r && (n += '\n/*# sourceURL=' + r.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */'), t.styleSheet) t.styleSheet.cssText = n;
       else {
        while (t.firstChild) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }
  },
  '49ce': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.toggle,
            expression: 'toggle'
          }
        ]
      }, [
        n('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'loading' === t.type,
              expression: 'type === \'loading\''
            }
          ],
          staticClass: 'toast-square',
          attrs: {
            text: t.content
          }
        }, [
          n('i', {
            staticClass: 'loading-icon'
          })
        ]),
        n('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'complete' === t.type,
              expression: 'type === \'complete\''
            }
          ],
          staticClass: 'toast-square',
          attrs: {
            text: t.content
          }
        }, [
          n('i', {
            staticClass: 'success-icon'
          })
        ]),
        n('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'oneline' === t.type,
              expression: 'type === \'oneline\''
            }
          ],
          attrs: {
            text: t.content
          }
        })
      ], 1)
    },
    r = [
    ],
    a = (n('c5f6'), n('57e7'), {
      name: 'UserAccountTip',
      props: {
        type: {
          required: !0,
          type: String,
        default:
          'none',
          validator: function (t) {
            return ['none',
            'loading',
            'complete',
            'oneline'].indexOf(t) > - 1
          }
        },
        content: {
          type: String,
        default:
          ''
        },
        delayTime: {
          type: Number,
        default:
          3000
        },
        toggle: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          timer: null
        }
      },
      watch: {
        toggle: function (t, e) {
          this.toggle && this.autoHide()
        },
        delayTime: function (t, e) {
          this.autoHide()
        }
      },
      methods: {
        autoHide: function () {
          var t = this;
          this.delayTime > - 1 && (clearTimeout(this.timer), this.timer = setTimeout(function () {
            return t.$emit('update:toggle', !1)
          }, this.delayTime))
        }
      }
    }),
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '4f63': function (t, e, n) {
    'use strict';
    var i = n('d0f9'),
    r = n.n(i);
    r.a
  },
  '4fa6': function (t, e, n) {
    'use strict';
    function i(t) {
      t && (location.href = t)
    }
    e['a'] = {
      bind: function (t, e, n) {
        t.hrefClick = function () {
          i(e.value.url)
        },
        t.addEventListener('click', t.hrefClick)
      },
      unbind: function (t) {
        t.removeEventListener('click', t.hrefClick)
      }
    }
  },
  '50b8': function (t, e, n) {
    'use strict';
    var i = function (t, e) {
      e._c;
      return e._m(0)
    },
    r = [
      function (t, e) {
        var n = e._c;
        return n('div', {
          staticClass: 'm-cancelAppeal-headLogo'
        }, [
          n('div', {
            staticClass: 'logo-iqiyi-green'
          })
        ])
      }
    ],
    a = n('2877'),
    o = {
    },
    s = Object(a['a']) (o, i, r, !0, null, null, null);
    e['a'] = s.exports
  },
  5118: function (t, e, n) {
    (function (t) {
      var i = 'undefined' !== typeof t && t || 'undefined' !== typeof self && self || window,
      r = Function.prototype.apply;
      function a(t, e) {
        this._id = t,
        this._clearFn = e
      }
      e.setTimeout = function () {
        return new a(r.call(setTimeout, i, arguments), clearTimeout)
      },
      e.setInterval = function () {
        return new a(r.call(setInterval, i, arguments), clearInterval)
      },
      e.clearTimeout = e.clearInterval = function (t) {
        t && t.close()
      },
      a.prototype.unref = a.prototype.ref = function () {
      },
      a.prototype.close = function () {
        this._clearFn.call(i, this._id)
      },
      e.enroll = function (t, e) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = e
      },
      e.unenroll = function (t) {
        clearTimeout(t._idleTimeoutId),
        t._idleTimeout = - 1
      },
      e._unrefActive = e.active = function (t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function () {
          t._onTimeout && t._onTimeout()
        }, e))
      },
      n('6017'),
      e.setImmediate = 'undefined' !== typeof self && self.setImmediate || 'undefined' !== typeof t && t.setImmediate || this && this.setImmediate,
      e.clearImmediate = 'undefined' !== typeof self && self.clearImmediate || 'undefined' !== typeof t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n('483b'))
  },
  5846: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return h
    }),
    n.d(e, 'a', function () {
      return _
    });
    n('96cf'),
    n('ac6a'),
    n('f3e2');
    var i,
    r = n('a745'),
    a = n.n(r),
    o = (n('4917'), n('a481'), n('795b')),
    s = n.n(o),
    c = n('3b8d'),
    u = n('936f'),
    l = '//emoticon-sns.iqiyi.com/jaguar-core/query_config?bussiness=feedStatic',
    d = /(\[[^\[\]]*\])/g,
    p = null;
    function h() {
      return f.apply(this, arguments)
    }
    function f() {
      return f = Object(c['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        r,
        o,
        s,
        c,
        u = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = u.length > 0 && void 0 !== u[0] ? u[0] : 21,
              i = i || b(),
              t.next = 4,
              i;
            case 4:
              for (n = t.sent, r = [
              ], o = [
              ], n.data && a() (n.data) && n.data.forEach(function (t) {
                o = o.concat(t.emoticonList)
              }), s = Math.ceil(o.length / e), c = 0; c < s; c++) r.push(o.slice(c * e, (c + 1) * e));
              return t.abrupt('return', r);
            case 11:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), f.apply(this, arguments)
    }
    function m() {
      return v.apply(this, arguments)
    }
    function v() {
      return v = Object(c['a']) (regeneratorRuntime.mark(function t() {
        var e;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (!p) {
                t.next = 2;
                break
              }
              return t.abrupt('return', p);
            case 2:
              return i = i || b(),
              t.next = 5,
              i;
            case 5:
              return e = t.sent,
              p = {
              },
              e.data && a() (e.data) && e.data.forEach(function (t) {
                t.emoticonList.forEach(function (t) {
                  p[t.content] = t.picUrl
                })
              }),
              t.abrupt('return', p);
            case 9:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), v.apply(this, arguments)
    }
    function b() {
      return new s.a(function (t, e) {
        u['a'].jsonp(l).then(function (n) {
          'A00000' === n.data.code ? t(n.data)  : e(n.data.msg)
        }, function (t) {
          e(t)
        })
      })
    }
    function g(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
      return '<span data-content="'.concat(t, '" class=\'c-emoji-pic\' style=\'background-image:url("').concat(e.replace(/^https?:/, ''), '");\'></span>')
    }
    function y() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = arguments.length > 1 ? arguments[1] : void 0;
      return t.replace(d, function (t) {
        return e[t] ? g(t, e[t])  : t
      })
    }
    function w(t, e) {
      a() (t.data) ? t.data.forEach(function (n) {
        n[t.key] = y(n[t.key], e),
        t.next && n[t.next.dataKey] && w({
          data: n[t.next.dataKey],
          key: t.next.key
        }, e)
      })  : (t.data[t.key] = y(t.data[t.key], e), t.next && t.data[t.next.dataKey] && w({
        data: t.data[t.next.dataKey],
        key: t.next.key
      }, e))
    }
    function _(t) {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(c['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0,
              t.next = 3,
              m();
            case 3:
              n = t.sent,
              w(e, n),
              t.next = 10;
              break;
            case 7:
              t.prev = 7,
              t.t0 = t['catch'](0),
              console.log(t.t0);
            case 10:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          7]
        ])
      })), k.apply(this, arguments)
    }
  },
  '59c3': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'm-box-items m-box-items-full',
        on: {
          click: t.onClick
        }
      }, [
        t._t('default', [
          n('div', {
            class : t.btnClass
          }, [
            n('div', {
              staticClass: 'btn-wrap'
            }, [
              n('a', {
                staticClass: 'c-btn c-btn-block',
                attrs: {
                  href: t.url
                }
              }, [
                n('span', {
                  class : t.titleClass
                }, [
                  t._v('\n            ' + t._s(t.title) + '\n          ')
                ])
              ])
            ])
          ])
        ], {
          url: t.url,
          title: t.title,
          titleClass: t.titleClass,
          btnClass: t.btnClass
        })
      ], 2)
    },
    r = [
    ],
    a = {
      name: 'AuraFullButton',
      props: {
        title: {
          type: String,
          required: !0
        },
        url: {
          type: String,
        default:
          'javascript:void(0);'
        },
        titleClass: {
          type: String,
        default:
          ''
        },
        btnClass: {
          type: String,
        default:
          ''
        },
        customFace: {
          type: String,
        default:
          'false'
        }
      },
      methods: {
        onClick: function () {
          this.$emit('click')
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '5bcb': function (t, e, n) {
    'use strict';
    var i = n('0a0d'),
    r = n.n(i),
    a = n('8296'),
    o = {
    };
    e['a'] = {
      inserted: function (t, e) {
        var n = r() ();
        t.dataset.swipeId = n,
        o[n] = new a['b'](t, e.value || {
        })
      },
      componentUpdated: function (t, e) {
        var n = t.dataset.swipeId,
        i = o[n];
        i && i.setup()
      },
      unbind: function (t) {
        var e = t.dataset.swipeId,
        n = o[e];
        n && (delete o[e], n.kill())
      }
    }
  },
  '5d73': function (t, e, n) {
    t.exports = n('469f')
  },
  '5df3': function (t, e, n) {
    'use strict';
    var i = n('02f4') (!0);
    n('01f9') (String, 'String', function (t) {
      this._t = String(t),
      this._i = 0
    }, function () {
      var t,
      e = this._t,
      n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      }
       : (t = i(e, n), this._i += t.length, {
        value: t,
        done: !1
      })
    })
  },
  6017: function (t, e, n) {
    (function (t, e) {
      (function (t, n) {
        'use strict';
        if (!t.setImmediate) {
          var i,
          r = 1,
          a = {
          },
          o = !1,
          s = t.document,
          c = Object.getPrototypeOf && Object.getPrototypeOf(t);
          c = c && c.setTimeout ? c : t,
          '[object process]' === {
          }.toString.call(t.process) ? h()  : f() ? m()  : t.MessageChannel ? v()  : s && 'onreadystatechange' in s.createElement('script') ? b()  : g(),
          c.setImmediate = u,
          c.clearImmediate = l
        }
        function u(t) {
          'function' !== typeof t && (t = new Function('' + t));
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
          var o = {
            callback: t,
            args: e
          };
          return a[r] = o,
          i(r),
          r++
        }
        function l(t) {
          delete a[t]
        }
        function d(t) {
          var e = t.callback,
          i = t.args;
          switch (i.length) {
            case 0:
              e();
              break;
            case 1:
              e(i[0]);
              break;
            case 2:
              e(i[0], i[1]);
              break;
            case 3:
              e(i[0], i[1], i[2]);
              break;
            default:
              e.apply(n, i);
              break
          }
        }
        function p(t) {
          if (o) setTimeout(p, 0, t);
           else {
            var e = a[t];
            if (e) {
              o = !0;
              try {
                d(e)
              } finally {
                l(t),
                o = !1
              }
            }
          }
        }
        function h() {
          i = function (t) {
            e.nextTick(function () {
              p(t)
            })
          }
        }
        function f() {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
            n = t.onmessage;
            return t.onmessage = function () {
              e = !1
            },
            t.postMessage('', '*'),
            t.onmessage = n,
            e
          }
        }
        function m() {
          var e = 'setImmediate$' + Math.random() + '$',
          n = function (n) {
            n.source === t && 'string' === typeof n.data && 0 === n.data.indexOf(e) && p( + n.data.slice(e.length))
          };
          t.addEventListener ? t.addEventListener('message', n, !1)  : t.attachEvent('onmessage', n),
          i = function (n) {
            t.postMessage(e + n, '*')
          }
        }
        function v() {
          var t = new MessageChannel;
          t.port1.onmessage = function (t) {
            var e = t.data;
            p(e)
          },
          i = function (e) {
            t.port2.postMessage(e)
          }
        }
        function b() {
          var t = s.documentElement;
          i = function (e) {
            var n = s.createElement('script');
            n.onreadystatechange = function () {
              p(e),
              n.onreadystatechange = null,
              t.removeChild(n),
              n = null
            },
            t.appendChild(n)
          }
        }
        function g() {
          i = function (t) {
            setTimeout(p, 0, t)
          }
        }
      }) ('undefined' === typeof self ? 'undefined' === typeof t ? this : t : self)
    }).call(this, n('483b'), n('4362'))
  },
  6199: function (module, exports, __webpack_require__) {
    (function (process, global) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
      /*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
      (function () {
        'use strict';
        var root = 'object' === typeof window ? window : {
        },
        NODE_JS = !root.JS_SHA1_NO_NODE_JS && 'object' === typeof process && process.versions && process.versions.node;
        NODE_JS && (root = global);
        var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && 'object' === typeof module && module.exports,
        AMD = __webpack_require__('1140'),
        HEX_CHARS = '0123456789abcdef'.split(''),
        EXTRA = [
          - 2147483648,
          8388608,
          32768,
          128
        ],
        SHIFT = [
          24,
          16,
          8,
          0
        ],
        OUTPUT_TYPES = [
          'hex',
          'array',
          'digest',
          'arrayBuffer'
        ],
        blocks = [
        ],
        createOutputMethod = function (t) {
          return function (e) {
            return new Sha1(!0).update(e) [t]()
          }
        },
        createMethod = function () {
          var t = createOutputMethod('hex');
          NODE_JS && (t = nodeWrap(t)),
          t.create = function () {
            return new Sha1
          },
          t.update = function (e) {
            return t.create().update(e)
          };
          for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var n = OUTPUT_TYPES[e];
            t[n] = createOutputMethod(n)
          }
          return t
        },
        nodeWrap = function (method) {
          var crypto = eval('require(\'crypto\')'),
          Buffer = eval('require(\'buffer\').Buffer'),
          nodeMethod = function (t) {
            if ('string' === typeof t) return crypto.createHash('sha1').update(t, 'utf8').digest('hex');
            if (t.constructor === ArrayBuffer) t = new Uint8Array(t);
             else if (void 0 === t.length) return method(t);
            return crypto.createHash('sha1').update(new Buffer(t)).digest('hex')
          };
          return nodeMethod
        };
        function Sha1(t) {
          t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks)  : this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          this.h0 = 1732584193,
          this.h1 = 4023233417,
          this.h2 = 2562383102,
          this.h3 = 271733878,
          this.h4 = 3285377520,
          this.block = this.start = this.bytes = this.hBytes = 0,
          this.finalized = this.hashed = !1,
          this.first = !0
        }
        Sha1.prototype.update = function (t) {
          if (!this.finalized) {
            var e = 'string' !== typeof t;
            e && t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
            var n,
            i,
            r = 0,
            a = t.length || 0,
            o = this.blocks;
            while (r < a) {
              if (this.hashed && (this.hashed = !1, o[0] = this.block, o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), e) for (i = this.start; r < a && i < 64; ++r) o[i >> 2] |= t[r] << SHIFT[3 & i++];
               else for (i = this.start; r < a && i < 64; ++r) n = t.charCodeAt(r),
              n < 128 ? o[i >> 2] |= n << SHIFT[3 & i++] : n < 2048 ? (o[i >> 2] |= (192 | n >> 6) << SHIFT[3 & i++], o[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++])  : n < 55296 || n >= 57344 ? (o[i >> 2] |= (224 | n >> 12) << SHIFT[3 & i++], o[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], o[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++])  : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++r)), o[i >> 2] |= (240 | n >> 18) << SHIFT[3 & i++], o[i >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & i++], o[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], o[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]);
              this.lastByteIndex = i,
              this.bytes += i - this.start,
              i >= 64 ? (this.block = o[16], this.start = i - 64, this.hash(), this.hashed = !0)  : this.start = i
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296),
            this
          }
        },
        Sha1.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks,
            e = this.lastByteIndex;
            t[16] = this.block,
            t[e >> 2] |= EXTRA[3 & e],
            this.block = t[16],
            e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
            t[14] = this.hBytes << 3 | this.bytes >>> 29,
            t[15] = this.bytes << 3,
            this.hash()
          }
        },
        Sha1.prototype.hash = function () {
          var t,
          e,
          n,
          i = this.h0,
          r = this.h1,
          a = this.h2,
          o = this.h3,
          s = this.h4,
          c = this.blocks;
          for (e = 16; e < 80; ++e) n = c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16],
          c[e] = n << 1 | n >>> 31;
          for (e = 0; e < 20; e += 5) t = r & a | ~r & o,
          n = i << 5 | i >>> 27,
          s = n + t + s + 1518500249 + c[e] << 0,
          r = r << 30 | r >>> 2,
          t = i & r | ~i & a,
          n = s << 5 | s >>> 27,
          o = n + t + o + 1518500249 + c[e + 1] << 0,
          i = i << 30 | i >>> 2,
          t = s & i | ~s & r,
          n = o << 5 | o >>> 27,
          a = n + t + a + 1518500249 + c[e + 2] << 0,
          s = s << 30 | s >>> 2,
          t = o & s | ~o & i,
          n = a << 5 | a >>> 27,
          r = n + t + r + 1518500249 + c[e + 3] << 0,
          o = o << 30 | o >>> 2,
          t = a & o | ~a & s,
          n = r << 5 | r >>> 27,
          i = n + t + i + 1518500249 + c[e + 4] << 0,
          a = a << 30 | a >>> 2;
          for (; e < 40; e += 5) t = r ^ a ^ o,
          n = i << 5 | i >>> 27,
          s = n + t + s + 1859775393 + c[e] << 0,
          r = r << 30 | r >>> 2,
          t = i ^ r ^ a,
          n = s << 5 | s >>> 27,
          o = n + t + o + 1859775393 + c[e + 1] << 0,
          i = i << 30 | i >>> 2,
          t = s ^ i ^ r,
          n = o << 5 | o >>> 27,
          a = n + t + a + 1859775393 + c[e + 2] << 0,
          s = s << 30 | s >>> 2,
          t = o ^ s ^ i,
          n = a << 5 | a >>> 27,
          r = n + t + r + 1859775393 + c[e + 3] << 0,
          o = o << 30 | o >>> 2,
          t = a ^ o ^ s,
          n = r << 5 | r >>> 27,
          i = n + t + i + 1859775393 + c[e + 4] << 0,
          a = a << 30 | a >>> 2;
          for (; e < 60; e += 5) t = r & a | r & o | a & o,
          n = i << 5 | i >>> 27,
          s = n + t + s - 1894007588 + c[e] << 0,
          r = r << 30 | r >>> 2,
          t = i & r | i & a | r & a,
          n = s << 5 | s >>> 27,
          o = n + t + o - 1894007588 + c[e + 1] << 0,
          i = i << 30 | i >>> 2,
          t = s & i | s & r | i & r,
          n = o << 5 | o >>> 27,
          a = n + t + a - 1894007588 + c[e + 2] << 0,
          s = s << 30 | s >>> 2,
          t = o & s | o & i | s & i,
          n = a << 5 | a >>> 27,
          r = n + t + r - 1894007588 + c[e + 3] << 0,
          o = o << 30 | o >>> 2,
          t = a & o | a & s | o & s,
          n = r << 5 | r >>> 27,
          i = n + t + i - 1894007588 + c[e + 4] << 0,
          a = a << 30 | a >>> 2;
          for (; e < 80; e += 5) t = r ^ a ^ o,
          n = i << 5 | i >>> 27,
          s = n + t + s - 899497514 + c[e] << 0,
          r = r << 30 | r >>> 2,
          t = i ^ r ^ a,
          n = s << 5 | s >>> 27,
          o = n + t + o - 899497514 + c[e + 1] << 0,
          i = i << 30 | i >>> 2,
          t = s ^ i ^ r,
          n = o << 5 | o >>> 27,
          a = n + t + a - 899497514 + c[e + 2] << 0,
          s = s << 30 | s >>> 2,
          t = o ^ s ^ i,
          n = a << 5 | a >>> 27,
          r = n + t + r - 899497514 + c[e + 3] << 0,
          o = o << 30 | o >>> 2,
          t = a ^ o ^ s,
          n = r << 5 | r >>> 27,
          i = n + t + i - 899497514 + c[e + 4] << 0,
          a = a << 30 | a >>> 2;
          this.h0 = this.h0 + i << 0,
          this.h1 = this.h1 + r << 0,
          this.h2 = this.h2 + a << 0,
          this.h3 = this.h3 + o << 0,
          this.h4 = this.h4 + s << 0
        },
        Sha1.prototype.hex = function () {
          this.finalize();
          var t = this.h0,
          e = this.h1,
          n = this.h2,
          i = this.h3,
          r = this.h4;
          return HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
        },
        Sha1.prototype.toString = Sha1.prototype.hex,
        Sha1.prototype.digest = function () {
          this.finalize();
          var t = this.h0,
          e = this.h1,
          n = this.h2,
          i = this.h3,
          r = this.h4;
          return [t >> 24 & 255,
          t >> 16 & 255,
          t >> 8 & 255,
          255 & t,
          e >> 24 & 255,
          e >> 16 & 255,
          e >> 8 & 255,
          255 & e,
          n >> 24 & 255,
          n >> 16 & 255,
          n >> 8 & 255,
          255 & n,
          i >> 24 & 255,
          i >> 16 & 255,
          i >> 8 & 255,
          255 & i,
          r >> 24 & 255,
          r >> 16 & 255,
          r >> 8 & 255,
          255 & r]
        },
        Sha1.prototype.array = Sha1.prototype.digest,
        Sha1.prototype.arrayBuffer = function () {
          this.finalize();
          var t = new ArrayBuffer(20),
          e = new DataView(t);
          return e.setUint32(0, this.h0),
          e.setUint32(4, this.h1),
          e.setUint32(8, this.h2),
          e.setUint32(12, this.h3),
          e.setUint32(16, this.h4),
          t
        };
        var exports = createMethod();
        COMMON_JS ? module.exports = exports : (root.sha1 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return exports
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
      }) ()
    }).call(this, __webpack_require__('4362'), __webpack_require__('483b'))
  },
  6330: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.show ? n('div', {
        staticClass: 'm-player-tip'
      }, [
        t._m(0)
      ])  : t._e()
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'player-tip-inner'
        }, [
          n('div', {
            staticClass: 'c-player-tip-info'
          }, [
            t._v('\n      很抱歉'),
            n('br'),
            t._v('当前视频暂时无法播放，请您稍后再试\n    ')
          ]),
          n('a', {
            staticClass: 'c-btn',
            attrs: {
              href: '//m.iqiyi.com/'
            }
          }, [
            t._v('\n      去看看其他视频\n    ')
          ])
        ])
      }
    ],
    a = {
      name: 'VideoLayerDefaultError',
      props: {
        show: {
          type: Boolean,
        default:
          !1
        }
      },
      watch: {
        show: function (t) {
          t && this.$parent.$emit('layerShow', {
            type: 'defaultError'
          })
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '657d': function (t, e, n) {
    e = t.exports = n('2350') (!1),
    e.push([t.i,
    '.list-leave-active[data-v-7ca2c801]{transition:all .5s ease-out}.list-leave-to[data-v-7ca2c801]{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}',
    ''])
  },
  '657e': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        n('transition-group', {
          staticClass: 'list-items',
          attrs: {
            appear: !1,
            name: 'list',
            tag: 'ul'
          }
        }, t._l(t.users, function (e) {
          return e.nickName && e.uid ? n('li', {
            key: e.uid
          }, [
            n('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: t.pingback.itemPingback,
                  expression: 'pingback.itemPingback'
                }
              ],
              staticClass: 'items-link',
              attrs: {
                href: '/u/' + e.uid
              }
            }, [
              n('div', {
                staticClass: 'photo'
              }, [
                n('img', {
                  attrs: {
                    src: e.icon
                  }
                })
              ]),
              n('div', {
                staticClass: 'content'
              }, [
                n('div', {
                  staticClass: 'title'
                }, [
                  n('span', {
                    staticClass: 'c-name'
                  }, [
                    t._v(t._s(e.nickName))
                  ]),
                  1 === e.mark || 2 === e.mark ? n('i', {
                    staticClass: 'icon-home-i'
                  })  : t._e(),
                  2 === e.mark ? n('i', {
                    staticClass: 'icon-home-mt'
                  })  : t._e()
                ]),
                n('div', {
                  staticClass: 'info'
                }, [
                  n('div', {
                    staticClass: 'c-desc'
                  }, [
                    t._v(t._s(e.recommand))
                  ]),
                  n('div', {
                    staticClass: 'c-num'
                  }, [
                    t._v('\n              ' + t._s(t._f('formatNum') (e.followedCount)) + '人关注\n            ')
                  ])
                ])
              ])
            ]),
            t._t('default', [
              n('SubButton', {
                attrs: {
                  status: e.friend.status,
                  uid: e.friend.uid,
                  'sub-pingback': t.pingback.subPingback,
                  'update-pingback': t.pingback.updatePingback
                },
                on: {
                  add: function (n) {
                    return t.onAdd(e)
                  }
                }
              })
            ], {
              user: e
            })
          ], 2)  : t._e()
        }), 0)
      ], 1)
    },
    r = [
    ],
    a = (n('96cf'), n('3b8d')),
    o = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.status === t.notSubScribed ? n('span', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: t.subPingback,
              expression: 'subPingback'
            }
          ],
          key: 'subscribe',
          staticClass: 'handle',
          on: {
            click: function (e) {
              return t.$emit('add')
            }
          }
        }, [
          n('i', {
            staticClass: 'c-glyphicon c-glyphicon-guideClose'
          }),
          t._v('关注\n  ')
        ])  : n('span', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: t.updatePingback,
              expression: 'updatePingback'
            }
          ],
          key: 'toFriend',
          staticClass: 'handle',
          staticStyle: {
            cursor: 'pointer'
          },
          attrs: {
            href: '/u/' + t.uid
          }
        }, [
          t._v('查看更新')
        ])
      ])
    },
    s = [
    ],
    c = (n('c5f6'), n('1533')),
    u = {
      name: 'SubButton',
      props: {
        status: {
          type: Number,
          required: !0
        },
        uid: {
          type: [
            String,
            Number
          ],
          required: !0
        },
        subPingback: {
          type: String,
        default:
          ''
        },
        updatePingback: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          notSubScribed: c['a']
        }
      }
    },
    l = u,
    d = n('2877'),
    p = Object(d['a']) (l, o, s, !1, null, null, null),
    h = p.exports,
    f = n('45bc'),
    m = n('b2e7'),
    v = {
      name: 'SubList',
      components: {
        SubButton: h
      },
      filters: {
        formatNum: f['c']
      },
      props: {
        users: {
          type: Array,
        default:
          null
        },
        pingback: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      methods: {
        onAdd: function (t) {
          Object(m['M']) () ? this.addFriend(t)  : window.location.href = '/user.html'
        },
        addFriend: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
            var n;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0,
                  t.next = 3,
                  Object(c['c']) ({
                    uids: e.uid
                  });
                case 3:
                  n = t.sent,
                  n ? this.$emit('addSuccess', e)  : this.$emit('addFailure', e),
                  t.next = 10;
                  break;
                case 7:
                  t.prev = 7,
                  t.t0 = t['catch'](0),
                  this.$emit('addFailure', e);
                case 10:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this,
            [
              [0,
              7]
            ])
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }()
      }
    },
    b = v,
    g = (n('120a'), Object(d['a']) (b, i, r, !1, null, '7ca2c801', null));
    e['a'] = g.exports
  },
  '666d': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.walls.length > 1 ? n('div', {
        staticClass: 'm-box',
        attrs: {
          name: 'm-paopao'
        }
      }, [
        n('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('AuraCardTitle', {
            attrs: {
              title: t.title
            }
          })
        ], 1),
        n('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('VideoStarCircleList', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.itemPingback,
                expression: 'itemPingback'
              }
            ],
            class : t.classForList,
            attrs: {
              walls: t.walls
            }
          })
        ], 1)
      ])  : t._e()
    },
    r = [
    ],
    a = (n('7514'), n('6d67'), n('d25f'), n('96cf'), n('3b8d')),
    o = (n('c5f6'), function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        directives: [
          {
            name: 'scroll',
            rawName: 'v-scroll.scrollX',
            value: {
              eventPassthrough: 'vertical'
            },
            expression: '{eventPassthrough: \'vertical\'}',
            modifiers: {
              scrollX: !0
            }
          }
        ],
        staticClass: 'm-starCircle-list m-sliding'
      }, [
        n('ul', {
          staticClass: 'list-items m-sliding-list'
        }, t._l(t.walls, function (e) {
          return n('li', {
            key: e.id
          }, [
            e.pageUrl ? n('a', {
              staticClass: 'star-link',
              attrs: {
                href: e.pageUrl
              }
            }, [
              n('span', {
                staticClass: 'c-photo',
                style: {
                  'background-image': 'url(' + e.icon + ')'
                }
              }),
              n('span', {
                staticClass: 'c-title'
              }, [
                t._v(t._s(e.name))
              ]),
              e.desc ? n('span', {
                staticClass: 'c-des'
              }, [
                t._v(t._s(e.desc))
              ])  : t._e()
            ])  : t._e()
          ])
        }), 0)
      ])
    }),
    s = [
    ],
    c = {
      name: 'VideoStarCircleList',
      props: {
        walls: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, o, s, !1, null, null, null),
    p = d.exports,
    h = n('00b9'),
    f = {
      name: 'AlbumStarCircle',
      components: {
        VideoStarCircleList: p
      },
      props: {
        min: {
          type: Number,
        default:
          3
        },
        max: {
          type: Number,
        default:
          1 / 0
        },
        maCircleIds: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        characters: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        title: {
          type: String,
        default:
          ''
        },
        itemPingback: {
          type: String,
        default:
          ''
        },
        classForList: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          walls: [
          ]
        }
      },
      computed: {
        circleIds: function () {
          var t = this.maCircleIds || [
          ];
          return t.length < this.min ? [
          ] : t.length > this.max ? t.slice(0, this.max)  : t
        }
      },
      beforeMount: function () {
        this.init()
      },
      methods: {
        init: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.circleIds.length) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt('return');
                case 2:
                  return t.next = 4,
                  Object(h['c']) ({
                    wallIds: this.circleIds.join(',')
                  });
                case 4:
                  e = t.sent,
                  e = e || [
                  ],
                  n = this.getCharacters(),
                  this.walls = this.circleIds.map(function (t, i) {
                    var r = e.find(function (e) {
                      return e.id === t
                    });
                    if (r) return r.pageUrl = '//m.iqiyi.com/m5/bubble/circleInfo_w'.concat(r.id, '_p15.html#production'),
                    n && (r.desc = n[i]),
                    r
                  }).filter(function (t) {
                    return !!t
                  });
                case 8:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        getCharacters: function () {
          return this.characters.map(function (t) {
            return t ? '饰'.concat(t)  : ''
          })
        }
      }
    },
    m = f,
    v = Object(l['a']) (m, i, r, !1, null, null, null);
    e['a'] = v.exports
  },
  6810: function (t, e, n) {
    'use strict';
    n('c5f6');
    var i,
    r,
    a = n('ff9b'),
    o = {
      name: 'VideoList',
      components: {
        AuraVideoList: a['a']
      },
      props: {
        videos: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        pageSize: {
          type: Number,
        default:
          - 1
        },
        end: {
          type: Number,
        default:
          - 1
        },
        start: {
          type: Number,
        default:
          - 1
        },
        remainder: {
          type: Number,
        default:
          0
        },
        moreClass: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          page: 0
        }
      },
      computed: {
        _videos: function () {
          var t = this.videos;
          if (this.end > - 1 || this.start > - 1) {
            var e = this.start > - 1 ? this.start : 0,
            n = this.end > - 1 ? this.end : this.videos.length;
            t = this.videos.slice(e, n)
          }
          if (this.remainder) {
            var i = t.length,
            r = i - i % this.remainder;
            t = t.slice(0, r)
          }
          return t
        },
        startVideoList: function () {
          return this.start > - 1 ? this.videos.slice(0, this.start)  : [
          ]
        },
        videoList: function () {
          return this.pageSize < 0 ? this._videos : this._videos.slice(this.page * this.pageSize, (this.page + 1) * this.pageSize)
        },
        total: function () {
          return this.pageSize < 0 ? 0 : Math.floor(this._videos.length / this.pageSize)
        }
      },
      methods: {
        switchPage: function () {
          this.page = (this.page + 1) % this.total
        }
      },
      render: function (t) {
        if (this.videoList.length || this.startVideoList.length) {
          var e = this.$scopedSlots.body ? this.$scopedSlots.body({
            videos: this.videoList,
            startVideos: this.startVideoList
          })  : null,
          n = null;
          return (this.$slots.footer || this.total >= 2) && (n = t('section', {
            class : [
              this.moreClass,
              'm-linkMore'
            ]
          }, [
            this.$slots.footer,
            this.total >= 2 && t('a', {
              attrs: {
                href: 'javascript:void(0);'
              },
              class : 'm-link',
              on: {
                click: this.switchPage
              }
            }, [
              t('i', {
                class : 'c-glyphicon c-glyphicon-refreshnew'
              }),
              '换一批'
            ])
          ])),
          t('div', {
            class : 'm-box',
            attrs: {
              name: 'm-videoList'
            }
          }, [
            t('div', {
              class : 'm-box-items m-box-items-full'
            }, [
              this.$slots.header
            ]),
            t('div', {
              class : 'm-box-items m-box-items-full'
            }, [
              e
            ]),
            t('div', {
              class : 'm-box-items m-box-items-full'
            }, [
              n
            ]),
            this.$slots.extra
          ])
        }
        return null
      }
    },
    s = o,
    c = n('2877'),
    u = Object(c['a']) (s, i, r, !1, null, null, null);
    e['a'] = u.exports
  },
  '686b': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.show ? n('div', [
        n('BottomHotWords', {
          attrs: {
            cid: t.cids,
            rseat: t.rseat
          }
        })
      ], 1)  : t._e()
    },
    r = [
    ],
    a = (n('96cf'), n('3b8d')),
    o = n('4e77'),
    s = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.hotWords.length ? n('section', {
        staticClass: 'm-hotWords-bottom'
      }, [
        n('div', {
          staticClass: 'hotWords-wrap'
        }, [
          n('div', {
            staticClass: 'hotWords-list'
          }, t._l(t.hotWords, function (e, i) {
            return n('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: t.rseat,
                  expression: 'rseat'
                }
              ],
              key: i,
              staticClass: 'c-link',
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: function (n) {
                  return t.callSearch(e)
                }
              }
            }, [
              n('i', {
                class : 'c-icon-hotWords hotWords-num' + (i + 1)
              }),
              n('span', {
                staticClass: 'hot-info'
              }, [
                t._v(t._s(e.query))
              ]),
              n('i', {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: i < 4,
                    expression: 'index < 4'
                  }
                ],
                staticClass: 'c-icon-hotWords',
                class : t.hotWord(i)
              })
            ])
          }), 0)
        ])
      ])  : t._e()
    },
    c = [
    ],
    u = n('e814'),
    l = n.n(u),
    d = (n('57e7'), n('f112')),
    p = n('ba45'),
    h = n('8296'),
    f = {
      name: 'BottomHotWords',
      props: {
        cid: {
          type: String,
        default:
          ''
        },
        rseat: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          hotWords: {
          }
        }
      },
      mounted: function () {
        this.init()
      },
      methods: {
        init: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n,
            i,
            r;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e = [
                    1,
                    2,
                    4,
                    6
                  ],
                  n = e.indexOf(l() (this.cid)),
                  i = n >= 0 ? this.cid : 0,
                  r = {
                    cid: i
                  },
                  t.next = 6,
                  Object(d['c']) (r);
                case 6:
                  this.hotWords = t.sent;
                case 7:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        hotWord: function (t) {
          return 0 === t || 1 === t ? 'hotWords-fei' : 'hotWords-re'
        },
        getSubType: function () {
          var t = this.$GlobalSwitcher.getParams('player_bottom', 'play');
          if (t) return t.subtype
        },
        callSearch: function (t) {
          Object(p['x']) ({
            keyword: Object(h['u']) (t.query),
            source: 'h5_hot',
            subtype: this.getSubType()
          }).catch (function () {
            Object(p['j']) (Object(p['l']) ())
          })
        }
      }
    },
    m = f,
    v = n('2877'),
    b = Object(v['a']) (m, s, c, !1, null, null, null),
    g = b.exports,
    y = n('5321'),
    w = {
      name: 'BottomAppBannerHot',
      components: {
        BottomHotWords: g
      },
      props: {
        cids: {
          type: String,
        default:
          ''
        },
        block: {
          type: String,
        default:
          ''
        },
        rseat: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          show: !1
        }
      },
      mounted: function () {
        Object(o['e']) (this.showBottom)
      },
      destroyed: function () {
        Object(o['h']) (this.showBottom)
      },
      methods: {
        init: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2,
                  this.$GlobalSwitcher.getFilters('player_bottom', 'play');
                case 2:
                  this.show = t.sent,
                  Object(y['m']) ({
                    block: this.block
                  });
                case 4:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        showBottom: function (t) {
          t.scrollOffset.y > 110 && !this.show && this.init()
        }
      }
    },
    _ = w,
    k = Object(v['a']) (_, i, r, !1, null, null, null);
    e['a'] = k.exports
  },
  '6e73': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        ref: 'root'
      }, [
        t._t('default')
      ], 2)
    },
    r = [
    ],
    a = (n('7514'), n('d92a'), n('c5f6'), n('0f32')),
    o = n.n(a),
    s = n('1fba'),
    c = {
      name: 'ScrollLoad',
      props: {
        callback: {
          type: Function,
        default:
          function () {
            return null
          }
        },
        loadCompleted: {
          type: Boolean,
        default:
          !1
        },
        length: {
          type: Number,
        default:
          0
        },
        isInitLoad: {
          type: Boolean,
        default:
          !1
        },
        qipuId: {
          type: Number,
        default:
          0
        },
        layerOpen: {
          type: Boolean,
        default:
          !0
        },
        isLoadMore: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          isLoading: !1,
          scroll: null,
          isPosition: !0
        }
      },
      watch: {
        length: function (t, e) {
          t !== e && this.resetPostion()
        },
        qipuId: function (t, e) {
          t === e || this.layerOpen || (this.isPosition = !0, this.resetPostion())
        },
        layerOpen: function (t) {
          t || (this.isPosition = !0, this.initLoad(), this.resetPostion())
        }
      },
      mounted: function () {
        this.$nextTick(function () {
          this.scroll = new s['a'](this.$refs.root, {
            eventPassthrough: 'vertical',
            preventDefault: !0,
            click: !1,
            probeType: 2,
            scrollX: !0
          }),
          this.initLoad(),
          this.scrollToElement(),
          this.scroll.on('scroll', o() (function () {
            this.scrollhandle()
          }.bind(this)))
        })
      },
      destroyed: function () {
        this.scroll.off('scroll', this.scrollhandle.bind(this))
      },
      methods: {
        initLoad: function () {
          if (this.$refs.root.scrollWidth && this.$refs.root.scrollWidth >= Math.abs(this.scroll.maxScrollX) && this.callback && this.isInitLoad || this.isLoadMore) {
            this.isPosition = !0;
            var t = !this.isLoadMore;
            this.scrollToElement(),
            this.loadMore(t)
          }
        },
        resetPostion: function () {
          this.$nextTick(function () {
            this.scroll.refresh(),
            this.isPosition && this.scrollToElement()
          })
        },
        scrollToElement: function () {
          var t = this.getElement();
          this.scroll.scrollToElement(t, 0, !0, !0)
        },
        getElement: function () {
          var t = null;
          return this.$slots.default.find(function (e, n) {
            var i = e.children;
            i.find(function (e, n) {
              var i = e.data.class ,
              r = i.selected;
              r && (t = e.elm)
            })
          }),
          t
        },
        scrollhandle: function () {
          var t = 1 === this.scroll.movingDirectionX,
          e = - 1 === this.scroll.movingDirectionX;
          !this.callback || this.loadCompleted || this.isLoading || (t && Math.abs(this.scroll.maxScrollX) - Math.abs(this.scroll.x) < 300 || e && Math.abs(this.scroll.x) <= 100) && (this.isLoading = !0, this.isPosition = !1, this.loadMore(t))
        },
        loadMore: function (t) {
          var e = this;
          this.callback({
            scrollToRight: t
          }).catch (function (t) {
            e.$emit('loadFailure', t)
          }).finally (function () {
            e.isLoading = !1
          })
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  '6f18': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return c
    }),
    n.d(e, 'f', function () {
      return f
    }),
    n.d(e, 'b', function () {
      return v
    }),
    n.d(e, 'c', function () {
      return g
    }),
    n.d(e, 'd', function () {
      return w
    }),
    n.d(e, 'e', function () {
      return x
    });
    var i = n('cebc'),
    r = (n('96cf'), n('3b8d')),
    a = n('2c06'),
    o = n('b2e7'),
    s = n('936f'),
    c = '//m.iqiyi.com/m5/security/bindPhone.html',
    u = 'https://cmonitor.iqiyi.com/apis/cmonitor/keepalive.action',
    l = '//subscription.iqiyi.com/services/subscribe/add.htm',
    d = '//subscription.iqiyi.com/services/subscribe/cancel.htm',
    p = '//subscription.iqiyi.com/services/subscribe/countAndState.htm',
    h = 'jfaljluixn39012$#';
    function f() {
      return m.apply(this, arguments)
    }
    function m() {
      return m = Object(r['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = n.length > 0 && void 0 !== n[0] ? n[0] : {
              },
              t.abrupt('return', e.isSubed ? g(e)  : v(e));
            case 2:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), m.apply(this, arguments)
    }
    function v(t) {
      return b.apply(this, arguments)
    }
    function b() {
      return b = Object(r['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              _(l, {
                subKeys: e.subKeys
              });
            case 2:
              return n = t.sent,
              t.abrupt('return', {
                success: n && 'A00000' === n.code,
                data: n
              });
            case 4:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), b.apply(this, arguments)
    }
    function g(t) {
      return y.apply(this, arguments)
    }
    function y() {
      return y = Object(r['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              _(d, {
                subKeys: e.subKeys
              });
            case 2:
              return n = t.sent,
              t.abrupt('return', {
                success: n && 'A00000' === n.code,
                data: n
              });
            case 4:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), y.apply(this, arguments)
    }
    function w(t) {
      return _(p, {
        subKeys: t.subKeys
      })
    }
    function _(t) {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(r['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        r,
        a,
        o = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = o.length > 1 && void 0 !== o[1] ? o[1] : {
              },
              r = Object(i['a']) ({
                subType: 2,
                agentType: 13
              }, n),
              t.next = 4,
              s['a'].jsonp(e, {
                params: r
              }).catch (function () {
              });
            case 4:
              return a = t.sent,
              t.abrupt('return', a && a.data ? a.data : {
              });
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), k.apply(this, arguments)
    }
    function x() {
      return C.apply(this, arguments)
    }
    function C() {
      return C = Object(r['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = r.length > 0 && void 0 !== r[0] ? r[0] : {
              },
              n = {
                agenttype: Object(a['s']) (),
                authcookie: Object(o['x']) (),
                device_id: Object(o['w']) (),
                tv_id: e.tvid
              },
              n.sign = Object(a['A']) (n, '|', h, !0),
              t.next = 5,
              s['a'].get(u, {
                params: n
              });
            case 5:
              return i = t.sent,
              t.abrupt('return', i && i.data ? i.data.data : null);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), C.apply(this, arguments)
    }
  },
  '703e': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.show,
            expression: 'show'
          }
        ],
        staticClass: 'm-player-tip'
      }, [
        n('div', {
          staticClass: 'player-tip-inner'
        }, [
          n('div', {
            staticClass: 'c-player-tip-info'
          }, [
            t._v('\n      网络未连接 请检查网络设置\n    ')
          ]),
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: {
                  rseat: '805141_bfqrefresh',
                  block: '805141_bfqrefresh'
                },
                expression: '{rseat: \'805141_bfqrefresh\', block: \'805141_bfqrefresh\'}'
              }
            ],
            staticClass: 'c-btn',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: function (e) {
                return t.$emit('reload')
              }
            }
          }, [
            n('i', {
              staticClass: 'c-glyphicon c-glyphicon-playRefresh'
            }),
            t._v('刷新重试\n    ')
          ])
        ])
      ])
    },
    r = [
    ],
    a = n('4e77'),
    o = n('ec1c'),
    s = n('8296'),
    c = Object(s['C']) ('network', {
      feedback: !0
    }),
    u = {
      name: 'VideoLayerNetwork',
      data: function () {
        return {
          show: !1,
          online: !0,
          isVideo: !1,
          load: !1,
          waitingTime: 5000
        }
      },
      watch: {
        online: function (t, e) {
          this.check()
        },
        show: function (t, e) {
          t && (Object(o['i']) ({
            block: '805141_bfqrefresh'
          }), this.$parent.$emit('layerShow', {
            type: 'network'
          }))
        },
        isVideo: function (t, e) {
          t && !this.online && (this.show = !0, this.$parent.pause())
        }
      },
      beforeMount: function () {
        var t = this,
        e = this.$parent;
        this.$parent.$on('load', function () {
          t.isVideo = !1,
          t.load = !0
        }),
        this.$parent.$on('clear', function () {
          t.isVideo = !1,
          t.load = !1,
          t.show = !1
        }),
        e.$on('playStart', function (e) {
          var n = e.status;
          'VIDEO' === n && (t.isVideo = !0)
        }),
        Object(a['b']) (function (e) {
          t.online = e.online,
          c.log('online:', t.online, ', connection:', t.getConnection())
        }),
        c.log('online:', this.online, ', connection:', this.getConnection())
      },
      methods: {
        check: function () {
          var t = this;
          if (this.online) {
            if (clearTimeout(this.timer), !this.load) return;
            this.show = !1,
            this.isVideo ? Object(o['i']) ({
              block: '805141_bfqreautoplay'
            })  : this.$emit('reload'),
            this.$parent.play()
          } else this.isVideo && (this.timer = setTimeout(function () {
            t.show = !0,
            t.$parent.pause()
          }, this.waitingTime))
        },
        getConnection: function () {
          var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection,
          e = {
          };
          for (var n in t) 'function' !== typeof t[n] && (e[n] = t[n]);
          return e
        }
      }
    },
    l = u,
    d = n('2877'),
    p = Object(d['a']) (l, i, r, !1, null, null, null);
    e['a'] = p.exports
  },
  '73d4': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return d
    }),
    n.d(e, 'b', function () {
      return f
    });
    n('96cf');
    var i = n('3b8d'),
    r = n('936f'),
    a = n('2c06'),
    o = n('b2e7'),
    s = n('cecc'),
    c = '//pub.m.iqiyi.com/jp/h5/count/control/proxy/';
    function u(t, e) {
      return l.apply(this, arguments)
    }
    function l() {
      return l = Object(i['a']) (regeneratorRuntime.mark(function t(e, n) {
        var i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0,
              t.next = 3,
              r['a'].jsonp(e, {
                params: n
              });
            case 3:
              return i = t.sent,
              t.abrupt('return', i && i.data && 'A00000' === i.data.code ? i.data.data : {
              });
            case 7:
              return t.prev = 7,
              t.t0 = t['catch'](0),
              t.abrupt('return', {
                error: !0
              });
            case 10:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          7]
        ])
      })), l.apply(this, arguments)
    }
    function d(t) {
      return p.apply(this, arguments)
    }
    function p() {
      return p = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                is_iqiyi: !0,
                qypid: Object(a['z']) (),
                business: e.business,
                is_video_page: e.is_video_page,
                tvid: e.tvid,
                albumid: e.aid,
                categoryid: e.cid,
                rpage: h(window.location.href),
                s2: h(document.referrer),
                uid: Object(o['C']) (),
                block: e.block,
                version: '1.0.0'
              },
              t.next = 3,
              u(c, n);
            case 3:
              return i = t.sent,
              t.abrupt('return', i);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), p.apply(this, arguments)
    }
    function h(t) {
      return window.btoa(Object(s['a']) (t))
    }
    function f() {
      return {
        rpage: h(window.location.href),
        s2: h(document.referrer)
      }
    }
  },
  '73d5': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.isShow,
            expression: 'isShow'
          }
        ],
        staticClass: 'm-topSite-wrap'
      }, [
        n('section', {
          staticClass: 'm-topSite m-borderB',
          class : {
            'm-topSite-fixed': t.fixed
          }
        }, [
          t._t('left', [
            t.leftUrl || t.leftHref ? n('AuraLink', {
              staticClass: 'c-goback',
              attrs: {
                to: t.leftUrl,
                href: t.leftHref
              }
            }, [
              n('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowLeft'
              })
            ])  : n('a', {
              staticClass: 'c-goback',
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: t.goBack
              }
            }, [
              n('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowLeft'
              })
            ])
          ]),
          n('div', {
            staticClass: 'c-content'
          }, [
            t._v(t._s(t.title))
          ]),
          t._t('right', [
            t.rightUrl && t.rightTitle ? n('a', {
              staticClass: 'c-more-link',
              attrs: {
                href: t.rightUrl
              }
            }, [
              t._v('\n        ' + t._s(t.rightTitle) + '\n      ')
            ])  : t._e()
          ])
        ], 2)
      ])
    },
    r = [
    ],
    a = n('6bb4'),
    o = {
      name: 'AuraHeadTitle',
      components: {
        AuraLink: a['a']
      },
      props: {
        isShow: {
          type: Boolean,
        default:
          !0
        },
        fixed: {
          type: Boolean,
        default:
          !1
        },
        title: {
          type: String,
        default:
          ''
        },
        leftUrl: {
          type: String,
        default:
          ''
        },
        leftHref: {
          type: String,
        default:
          ''
        },
        rightUrl: {
          type: String,
        default:
          ''
        },
        rightTitle: {
          type: String,
        default:
          ''
        }
      },
      methods: {
        goBack: function () {
          window.history.back()
        }
      }
    },
    s = o,
    c = n('2877'),
    u = Object(c['a']) (s, i, r, !1, null, null, null);
    e['a'] = u.exports
  },
  '768b': function (t, e, n) {
    'use strict';
    var i = n('a745'),
    r = n.n(i);
    function a(t) {
      if (r() (t)) return t
    }
    var o = n('5d73'),
    s = n.n(o);
    function c(t, e) {
      var n = [
      ],
      i = !0,
      r = !1,
      a = void 0;
      try {
        for (var o, c = s() (t); !(i = (o = c.next()).done); i = !0) if (n.push(o.value), e && n.length === e) break
      } catch (u) {
        r = !0,
        a = u
      } finally {
        try {
          i || null == c['return'] || c['return']()
        } finally {
          if (r) throw a
        }
      }
      return n
    }
    function u() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    }
    function l(t, e) {
      return a(t) || c(t, e) || u()
    }
    n.d(e, 'a', function () {
      return l
    })
  },
  '784b': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return a
    }),
    n.d(e, 'e', function () {
      return o
    }),
    n.d(e, 'd', function () {
      return l
    }),
    n.d(e, 'c', function () {
      return d
    }),
    n.d(e, 'f', function () {
      return p
    }),
    n.d(e, 'b', function () {
      return h
    });
    n('7f7f');
    var i = n('a78e'),
    r = n.n(i),
    a = {
      300: {
        rate: 2,
        name: '高清',
        _rate: 0
      },
      200: {
        rate: 1,
        name: '流畅',
        _rate: 1
      },
      100: {
        rate: 96,
        name: '极速',
        _rate: 2
      }
    },
    o = {
      96: 2,
      2: 0,
      1: 1
    },
    s = {
      0: '300',
      1: '200',
      2: '100'
    },
    c = 'play_stream';
    function u(t) {
      return s[t] ? a[s[t]] : null
    }
    function l(t) {
      var e = u(t);
      return e ? e.rate : null
    }
    function d(t) {
      return a[t]
    }
    function p(t) {
      r.a.set(c, t, {
        expires: 365,
        path: '/',
        domain: 'iqiyi.com'
      })
    }
    function h() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = r.a.get(c);
      return e = e ? JSON.parse(e)  : {
      },
      e && e.name ? e : (p(t), t)
    }
  },
  '7b93': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('Popup', {
        attrs: {
          show: t.publishCommentVisible,
          fullscreen: !0,
          'scroll-top': t.scrollTop,
          position: 'bottom'
        }
      }, [
        n('div', {
          staticClass: 'g-publisher'
        }, [
          n('section', {
            staticClass: 'm-comment-topSite'
          }, [
            n('a', {
              staticClass: 'c-goback',
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: t.back
              }
            }, [
              n('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowLeft'
              })
            ]),
            n('div', {
              staticClass: 'c-content'
            }, [
              t._v('发布评论')
            ]),
            n('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: '707211_paopaofabu',
                  expression: '\'707211_paopaofabu\''
                }
              ],
              staticClass: 'c-handle-link',
              class : {
                disabled: !t.userInput && !Object.keys(t.image).length
              },
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: t.publish
              }
            }, [
              t._v('发布')
            ])
          ]),
          n('section', {
            staticClass: 'm-comment-editor'
          }, [
            n('textarea', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: t.userInput,
                  expression: 'userInput'
                }
              ],
              staticClass: 'c-editor',
              attrs: {
                placeholder: t.placeHolder,
                maxlength: '5000'
              },
              domProps: {
                value: t.userInput
              },
              on: {
                input: function (e) {
                  e.target.composing || (t.userInput = e.target.value)
                }
              }
            })
          ]),
          n('section', {
            staticClass: 'm-comment-toolbar'
          }, [
            n('div', {
              staticClass: 'toolbar-tab'
            }, [
              n('a', {
                staticClass: 'tab-item',
                class : {
                  selected: 'Emoji' === t.tabName
                },
                on: {
                  click: function (e) {
                    t.tabName = 'Emoji'
                  }
                }
              }, [
                t._v('表情\n        ')
              ]),
              n('a', {
                staticClass: 'tab-item',
                class : {
                  selected: 'ImageUpload' === t.tabName
                },
                on: {
                  click: function (e) {
                    t.tabName = 'ImageUpload'
                  }
                }
              }, [
                t._v('图片')
              ])
            ]),
            n('div', {
              staticClass: 'm-comment-toolbar-body'
            }, [
              n('div', {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: 'Emoji' === t.tabName,
                    expression: 'tabName === \'Emoji\''
                  }
                ]
              }, [
                t.emojiList.length ? n('section', {
                  staticClass: 'm-comment-emoji'
                }, [
                  n('div', {
                    directives: [
                      {
                        name: 'swipe',
                        rawName: 'v-swipe',
                        value: t.swipeOptions,
                        expression: 'swipeOptions'
                      }
                    ],
                    staticClass: 'comment-emoji'
                  }, [
                    n('ul', {
                      staticClass: 'list-comment-emoji'
                    }, t._l(t.emojiList, function (e, i) {
                      return n('li', {
                        key: e[0].id,
                        staticStyle: {
                          position: 'relative',
                          display: 'block',
                          float: 'left'
                        }
                      }, t._l(t.emojiList[i], function (e) {
                        return n('span', {
                          key: e.order,
                          staticClass: 'c-emoji-pic',
                          style: {
                            'background-image': 'url(' + t.removeProtocol(e.picUrl) + ')'
                          },
                          on: {
                            click: function (n) {
                              t.userInput += e.content
                            }
                          }
                        })
                      }), 0)
                    }), 0)
                  ]),
                  n('div', {
                    staticClass: 'comment-emoji-dot'
                  }, [
                    n('div', {
                      staticClass: 'dot-inner'
                    }, t._l(t.emojiList, function (e, i) {
                      return n('i', {
                        key: e[0].id,
                        staticClass: 'dot-item',
                        class : {
                          selected: t.index % 2 === i
                        }
                      })
                    }), 0)
                  ])
                ])  : t._e(),
                t.emojiFail ? n('section', {
                  staticClass: 'm-comment-tip'
                }, [
                  n('i', {
                    staticClass: 'tip-icon'
                  }),
                  n('div', {
                    staticClass: 'info',
                    staticStyle: {
                      'letter-spacing': '0'
                    }
                  }, [
                    t._v('出错了，刷新页面试试吧')
                  ])
                ])  : t._e()
              ]),
              n('section', {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: 'ImageUpload' === t.tabName,
                    expression: 'tabName === \'ImageUpload\''
                  }
                ],
                staticClass: 'm-comment-picture'
              }, [
                n('div', {
                  staticClass: 'picture-title'
                }, [
                  t._v('只能上传一张图片哦')
                ]),
                n('ul', {
                  staticClass: 'comment-picture'
                }, [
                  t.image.url ? n('li', [
                    n('span', {
                      staticClass: 'c-picture'
                    }, [
                      n('span', {
                        staticClass: 'picture-img',
                        style: 'background-image: url(' + t.removeProtocol(t.image.url) + ')'
                      }, [
                        'gif' === t.image.type.toLowerCase() ? n('i', {
                          staticClass: 'picicon'
                        }, [
                          t._v('GIF')
                        ])  : t._e()
                      ])
                    ]),
                    n('a', {
                      staticClass: 'close-picture',
                      attrs: {
                        href: 'javascript:void(0)'
                      },
                      on: {
                        click: t.removeImage
                      }
                    })
                  ])  : t._e(),
                  t.imageUploadSuccess ? t._e()  : n('li', [
                    n('a', {
                      staticClass: 'c-add-picture',
                      attrs: {
                        href: 'javascript:void(0)'
                      }
                    }, [
                      n('i', {
                        staticClass: 'c-glyphicon c-glyphicon-add'
                      })
                    ]),
                    n('FileUpload', {
                      attrs: {
                        upload: t.upload,
                        'input-name': 'pic',
                        'upload-callback-name': 'paopaoUploadSuc'
                      },
                      on: {
                        success: t.onSuccess,
                        failure: t.failure,
                        loading: t.loading
                      }
                    })
                  ], 1)
                ])
              ])
            ])
          ])
        ]),
        n('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: t.toastShow,
              expression: 'toastShow'
            }
          ],
          class : t.toastClass,
          scopedSlots: t._u([{
            key: 'text',
            fn: function () {
              return [n('span', {
                domProps: {
                  innerHTML: t._s(t.toastText)
                }
              })]
            },
            proxy: !0
          },
          {
            key: 'default',
            fn: function () {
              return [n('i', {
                class : t.toastIcon
              })]
            },
            proxy: !0
          }
          ])
        })
      ], 1)
    },
    r = [
    ],
    a = (n('4917'), n('96cf'), n('3b8d')),
    o = n('5bcb'),
    s = n('090f'),
    c = n('8296'),
    u = n('b2e7'),
    l = n('87ac'),
    d = n('5846'),
    p = n('e8eb'),
    h = n('8530'),
    f = 21,
    m = {
      name: 'CommentPublish',
      components: {
        FileUpload: p['a'],
        Popup: h['a']
      },
      directives: {
        swipe: o['a']
      },
      props: {
        contentId: {
          type: String,
        default:
          ''
        },
        replyId: {
          type: String,
        default:
          ''
        },
        publishCommentVisible: {
          type: Boolean,
        default:
          !1
        },
        placeHolder: {
          type: String,
        default:
          '我来说两句'
        },
        aid: {
          type: String,
        default:
          ''
        },
        cid: {
          type: String,
        default:
          ''
        },
        isVideoPage: {
          type: Boolean,
        default:
          !1
        },
        fakeWriteEnable: {
          type: Boolean,
        default:
          !1
        },
        auditStrategyEnable: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        var t = this;
        return {
          tabName: 'Emoji',
          toastText: '',
          toastShow: !1,
          toastIcon: '',
          toastClass: '',
          userInput: '',
          imageUploadSuccess: !1,
          image: {
          },
          emojiList: [
          ],
          emojiFail: !1,
          index: 0,
          swipeOptions: {
            startSlide: 0,
            callback: function (e, n) {
              t.index = e
            },
            continuous: !1
          },
          scrollTop: 0
        }
      },
      computed: {
        EmojiOrImage: function () {
          return 'CommentPublish' + this.tabName
        },
        text: function () {
          return this.userInput.slice(0, 5000)
        }
      },
      watch: {
        publishCommentVisible: function (t) {
          this.scrollTop = t ? document.body.scrollTop || document.documentElement.scrollTop : this.scrollTop
        }
      },
      beforeMount: function () {
        var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                return t.prev = 0,
                t.next = 3,
                Object(d['b']) (f);
              case 3:
                this.emojiList = t.sent,
                t.next = 9;
                break;
              case 6:
                t.prev = 6,
                t.t0 = t['catch'](0),
                this.emojiFail = !0;
              case 9:
              case 'end':
                return t.stop()
            }
          },
          t,
          this,
          [
            [0,
            6]
          ])
        })); function e() {
          return t.apply(this, arguments)
        }
        return e
      }(),
      methods: {
        publish: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n,
            i;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e = {
                    isVideoPage: this.isVideoPage,
                    aid: this.aid,
                    cid: this.cid
                  },
                  t.next = 3,
                  Object(l['j']) (this.contentId, this.text, this.image, this.replyId, e);
                case 3:
                  n = t.sent,
                  n ? (this.fakeWriteEnable && this.auditStrategyEnable ? this.setToast('发布成功', 'success-icon', 'toast-square')  : this.setToast('评论正在审核，请耐心等待哦~'), this.clearToast(2000), this.isVideoPage ? (i = 'COMMENT_INFO', c['B'].setItem(i, n), this.$emit('success', i))  : this.$emit('success', n), this.refresh())  : (this.setToast('发布失败'), this.clearToast(2000));
                case 5:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        checkValidHeadshot: function (t) {
          var e = 5242880;
          return !t.type.match(/(jpeg|gif|png|bmp)/) && t.size >= e ? '仅支持jpg,jpeg,gif,png,bmp格式且图片大小不能大于5M' : t.type.match(/(jpeg|gif|png|bmp)/) ? t.size >= e ? '图片大小不能大于5M' : void 0 : '仅支持jpg,jpeg,gif,png,bmp格式图片'
        },
        upload: function (t, e) {
          if (window.parent.paopaoUploadSuc = function () {
          }, t.target.value) {
            var n = this.checkValidHeadshot(t.target.files[0]);
            if (n) throw new Error(n);
            if (t.target.value) {
              var i = '//api.t.iqiyi.com/feed/upload_pic',
              r = {
                authcookie: Object(u['x']) ()
              };
              return e(i, r),
              !0
            }
          }
        },
        loading: function () {
          this.setToast('正在上传中...', 'loading-icon')
        },
        onSuccess: function (t) {
          'A00000' === t.code ? (this.image = {
            url: this.getThumbnail(t.data.share_url),
            type: t.data.picType,
            width: t.data.width,
            height: t.data.height,
            swift_url: t.data.share_url,
            fileId: t.data.file_id
          }, this.imageUploadSuccess = !0, this.toastShow = !1)  : (this.setToast('网络状况不佳，请稍后重试'), this.clearToast(2000))
        },
        failure: function (t) {
          this.setToast(t.msg),
          this.clearToast(2000)
        },
        setToast: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
          this.toastText = t,
          this.toastIcon = e,
          this.toastClass = n,
          this.toastShow = !0
        },
        clearToast: function () {
          var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2000;
          setTimeout(function () {
            t.toastShow = !1
          }, e)
        },
        getThumbnail: function (t) {
          return ''.concat(t, '&authtype=passport&authtoken=').concat(Object(u['x']) ())
        },
        removeImage: function () {
          this.image = {
          },
          this.imageUploadSuccess = !1
        },
        refresh: function () {
          this.userInput = '',
          this.image = {
          },
          this.imageUploadSuccess = !1,
          this.tabName = 'Emoji'
        },
        back: function () {
          this.$emit('back'),
          this.refresh()
        },
        removeProtocol: s['a']
      }
    },
    v = m,
    b = n('2877'),
    g = Object(b['a']) (v, i, r, !1, null, null, null);
    e['a'] = g.exports
  },
  '7d7b': function (t, e, n) {
    var i = n('e4ae'),
    r = n('7cd6');
    t.exports = n('584a').getIterator = function (t) {
      var e = r(t);
      if ('function' != typeof e) throw TypeError(t + ' is not iterable!');
      return i(e.call(t))
    }
  },
  '7d82': function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return y
    }),
    n.d(e, 'c', function () {
      return w
    }),
    n.d(e, 'a', function () {
      return _
    }),
    n.d(e, 'i', function () {
      return k
    }),
    n.d(e, 'j', function () {
      return O
    }),
    n.d(e, 'd', function () {
      return I
    }),
    n.d(e, 'e', function () {
      return T
    }),
    n.d(e, 'h', function () {
      return R
    }),
    n.d(e, 'g', function () {
      return M
    }),
    n.d(e, 'f', function () {
      return z
    });
    n('0cd8');
    var i = n('cebc'),
    r = (n('96cf'), n('5176')),
    a = n.n(r),
    o = (n('6d67'), n('a481'), n('ac6a'), n('f3e2'), n('3b8d')),
    s = n('e814'),
    c = n.n(s),
    u = n('8d81'),
    l = n.n(u),
    d = n('8296'),
    p = n('b2e7'),
    h = n('5191'),
    f = n('936f'),
    m = '//iface2.iqiyi.com/like/mergeLike',
    v = '//iface2.iqiyi.com/like/disLikeMulti',
    b = '//iface2.iqiyi.com/like/cancelLike',
    g = '//iface2.iqiyi.com/like/getLikeObjList',
    y = 'today',
    w = 'week',
    _ = 'earlier';
    function k(t) {
      var e = new Date,
      n = Date.parse(''.concat(e.getFullYear(), '/').concat(e.getMonth() + 1, '/').concat(e.getDate())),
      i = n - 604800000;
      return t = c() (t),
      t = t < 10000000000 ? 1000 * t : t,
      t >= n ? y : t < n && t >= i ? w : t < i ? _ : void 0
    }
    function x() {
      return C.apply(this, arguments)
    }
    function C() {
      return C = Object(o['a']) (regeneratorRuntime.mark(function t() {
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.t0 = Object(p['w']) (),
              t.next = 3,
              Object(h['b']) ();
            case 3:
              return t.t1 = t.sent,
              t.t2 = Object(p['C']) () || void 0,
              t.abrupt('return', {
                businessType: 14,
                qyid: t.t0,
                dfp: t.t1,
                psp_uid: t.t2
              });
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), C.apply(this, arguments)
    }
    function O() {
      return j.apply(this, arguments)
    }
    function j() {
      return j = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              x();
            case 2:
              return e = t.sent,
              n = Object(i['a']) ({
                isClear: 1
              }, e),
              t.abrupt('return', f['a'].get(m, {
                params: n
              }));
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), j.apply(this, arguments)
    }
    function I() {
      return S.apply(this, arguments)
    }
    function S() {
      return S = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : '',
              t.next = 3,
              x();
            case 3:
              return n = t.sent,
              r = Object(i['a']) ({
                entityIds: e
              }, n),
              t.abrupt('return', f['a'].get(v, {
                params: r
              }));
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), S.apply(this, arguments)
    }
    function T() {
      return E.apply(this, arguments)
    }
    function E() {
      return E = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              x();
            case 2:
              return e = t.sent,
              t.abrupt('return', f['a'].get(b, {
                params: e
              }));
            case 4:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), E.apply(this, arguments)
    }
    function L() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      return t.forEach(function (t) {
        t.duration = t.duration ? d['m'].formatTime(t.duration)  : '',
        t.group = k(t.timestamp),
        t.webUrl = t.webUrl ? t.webUrl.replace(/^http:/, '')  : '',
        t.selected = !1
      }),
      t
    }
    function R() {
      return N.apply(this, arguments)
    }
    function N() {
      return N = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        r,
        a,
        o,
        s = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = s.length > 0 && void 0 !== s[0] ? s[0] : {
              },
              t.next = 3,
              x();
            case 3:
              return n = t.sent,
              r = Object(i['a']) ({
                pagesize: e.pageSize || 20,
                page: e.page || 1
              }, n),
              t.next = 7,
              f['a'].get(g, {
                params: r
              });
            case 7:
              return a = t.sent,
              o = a.data,
              o.data = 'A00000' === o.code ? L(o.data)  : [
              ],
              t.abrupt('return', o);
            case 11:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), N.apply(this, arguments)
    }
    var q = 1,
    A = 2,
    P = 7,
    U = 9;
    function M() {
      return $.apply(this, arguments)
    }
    function $() {
      return $ = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a,
        o,
        s = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e = s.length > 0 && void 0 !== s[0] ? s[0] : 0, n = s.length > 1 && void 0 !== s[1] ? s[1] : 20, i = 'A00000', r = [
              ], a = 0, !Object(p['M']) ()) {
                t.next = 12;
                break
              }
              return t.next = 8,
              D(e, n);
            case 8:
              o = t.sent,
              r = 'A00000' === o.code ? B(o.data.data)  : [
              ],
              i = o.code,
              a = o.data.cnt;
            case 12:
              return t.abrupt('return', {
                code: i,
                total: a,
                data: {
                  total: a,
                  favs: r,
                  page: e,
                  pageSize: n
                }
              });
            case 13:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), $.apply(this, arguments)
    }
    function D() {
      return H.apply(this, arguments)
    }
    function H() {
      return H = Object(o['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : 0,
              n = a.length > 1 && void 0 !== a[1] ? a[1] : 20,
              i = '//subscription.iqiyi.com/apis/watchlater/list.action',
              t.next = 5,
              f['a'].jsonp(i, {
                params: {
                  agentType: 1,
                  subTypes: ''.concat(q, ',').concat(A, ',').concat(U, ',').concat(P),
                  pageSize: n,
                  page: e
                }
              });
            case 5:
              return r = t.sent,
              t.abrupt('return', r.data);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), H.apply(this, arguments)
    }
    function B() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      return t.map(function (t) {
        return {
          channelId: t.channelId,
          url: Object(d['I']) (t.videoUrl),
          imageUrl: V(t.videoImageUrl),
          name: t.videoName.replace('第1集', ''),
          videoDuration: t.videoDuration,
          playTime: d['m'].formatTime(t.videoDuration)
        }
      })
    }
    function V(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /.(jpg|bmp|gif)/i;
      return /iqiyipic/i.test(t) ? t.replace(e, '_320_180.$1')  : t
    }
    function z(t) {
      return Object(p['M']) () ? F(t)  : Y(t)
    }
    function F(t) {
      return W.apply(this, arguments)
    }
    function W() {
      return W = Object(o['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        o;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              X(e);
            case 2:
              if (n = t.sent, i = n.data, i = void 0 === i ? {
              }
               : i, r = i.data, r = void 0 === r ? {
              }
               : r, a = r.data, o = void 0 === a ? [
              ] : a, o.length) {
                t.next = 10;
                break
              }
              return t.abrupt('return', {
                code: '000000',
                cnt: 0,
                data: {
                  books: o,
                  count: 0,
                  page: e.pageNo,
                  pageSize: e.pageSize
                }
              });
            case 10:
              return t.abrupt('return', {
                code: n.code || '000000',
                cnt: n.data.count || 0,
                data: {
                  books: o.reduce(function (t, e) {
                    return 3 === e.status ? t : (t.push(G(e)), t)
                  }, [
                  ]),
                  count: o.length,
                  page: e.pageNo,
                  pageSize: e.pageSize
                }
              });
            case 11:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), W.apply(this, arguments)
    }
    function X(t) {
      var e = '//api-yuedu.iqiyi.com/book/h5/cloudShelf/pullCloudShelf';
      return Object(d['v']) (e, tt(a() ({
        userId: Object(p['C']) (),
        time: 0,
        pageSize: 20,
        pageNo: 1
      }, t)))
    }
    function Y(t) {
      return Q.apply(this, arguments)
    }
    function Q() {
      return Q = Object(o['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        o,
        s,
        c,
        u;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              K(e);
            case 2:
              if (n = t.sent, i = n.data, i = void 0 === i ? {
              }
               : i, r = i.bookDetail, r) {
                t.next = 8;
                break
              }
              return t.abrupt('return', {
                code: '000000'
              });
            case 8:
              return t.next = 10,
              Z(r.bookId);
            case 10:
              if (o = t.sent, s = o.data, c = void 0 === s ? {
              }
               : s, u = J(c, 0), u) {
                t.next = 16;
                break
              }
              return t.abrupt('return', {
                code: '000000'
              });
            case 16:
              return r.readingProgress = 0,
              a() (r, u),
              t.abrupt('return', {
                code: 'A00001',
                cnt: 1,
                data: {
                  books: [
                    G(r)
                  ],
                  count: 1,
                  page: 1
                }
              });
            case 19:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), Q.apply(this, arguments)
    }
    function G(t) {
      var e = t.bookId,
      n = t.chapterId,
      i = t.chapterTitle,
      r = t.readingProgress,
      a = t.serializeStatus,
      o = t.pic,
      s = t.picUrl,
      c = void 0 === s ? o : s,
      u = t.author,
      l = t.title;
      return {
        picUrl: c,
        title: l,
        readUrl: '//wenxue.m.iqiyi.com/book/reader-'.concat(e, '-').concat(n, '.html'),
        progressContent: r > 0 ? '进度：'.concat(i)  : '未开始阅读',
        progressButton: '继续阅读',
        content: 1 === a ? '已完结' : '连载中',
        author: '作者：'.concat(u)
      }
    }
    function J(t, e) {
      var n = t.volumes,
      i = void 0 === n ? [
      ] : n,
      r = i[e] || {
      },
      a = r.chapters,
      o = void 0 === a ? [
      ] : a;
      return o[e] || {
      }
    }
    function K(t) {
      var e = '//api-yuedu.iqiyi.com/book/h5/cloudShelf/recommondeBook';
      return t.userId = 'read',
      Object(d['v']) (e, tt(t))
    }
    function Z(t) {
      var e = '//api-yuedu.iqiyi.com/book/h5/catalog/all';
      return Object(d['v']) (e, tt({
        userId: 'read',
        pageSize: 20,
        pageNo: 1,
        bookId: t
      }))
    }
    function tt(t) {
      var e = '864394106400106',
      n = (new Date).getTime();
      return a() ({
        qiyiId: e,
        timeStamp: n,
        srcPlatform: 15,
        md5: l() (''.concat(e).concat(t.userId).concat(n))
      }, t)
    }
  },
  '7e9b': function (t, e, n) {
    'use strict';
    n.d(e, 'd', function () {
      return p
    }),
    n.d(e, 'e', function () {
      return v
    }),
    n.d(e, 'b', function () {
      return C
    }),
    n.d(e, 'c', function () {
      return O
    }),
    n.d(e, 'a', function () {
      return S
    });
    n('57e7'),
    n('7514'),
    n('96cf');
    var i = n('3b8d'),
    r = (n('6d67'), n('0a0d')),
    a = n.n(r),
    o = n('cebc'),
    s = n('5321'),
    c = n('c0ba'),
    u = n('8296'),
    l = n('b2e7'),
    d = new c['a'](function (t, e, n) {
      e.card && f(e, n)
    }, {
      key: '_clickRecommend'
    }),
    p = {
      bind: function (t, e, n) {
        h(t, e, n)
      },
      unbind: function (t) {
        d.unobserve(t)
      },
      update: function (t, e, n) {
        d.unobserve(t),
        h(t, e, n)
      }
    };
    function h(t, e, n) {
      var i = e.value || {
      },
      r = i.card || {
      },
      a = n.componentInstance || {
      },
      s = a.videos || r.videos;
      d.observe(t, Object(o['a']) ({
        videos: s
      }, i))
    }
    function f(t, e) {
      if (t && t.pingback) {
        var n = t.card,
        i = t.pingback,
        r = t.videos;
        e.preventDefault();
        var a = e.target,
        o = Object(u['F']) (a, 'LI'),
        c = Object(u['w']) (o);
        if ('number' === typeof c) {
          var l = r[c];
          if (l) {
            var d = {
              type: 'recctplay20121226',
              usract: 'userclick',
              area: i.area,
              bkt: i.bkt,
              event_id: i.event_id,
              rank: c,
              taid: l.albumId,
              tcid: l.channelId,
              block: n.cardName,
              tagset: n.tag
            };
            Object(s['v']) (d),
            t.noRedirect || e.defaultPrevented || setTimeout(function () {
              window.location.href = l.pageUrl
            }, 200)
          }
        }
      }
    }
    var m = new c['b'](function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      b(e)
    }, {
      key: '_interRecommendId'
    }),
    v = {
      bind: function (t, e) {
        m.observe(t, e.value || {
        })
      },
      inserted: function () {
        m.notify()
      },
      unbind: function (t) {
        m.unobserve(t)
      }
    };
    function b(t) {
      if (t && t.pingback) {
        var e = t.card,
        n = t.pingback,
        i = {
          usract: 1,
          type: 'showlizard20130613',
          area: n.area,
          bkt: n.bkt,
          event_id: n.event_id,
          t: a() (),
          albumlist: e.videos.map(function (t) {
            return t.videoId || t.qipuId
          }).join(','),
          cid: e.videos.map(function (t) {
            return t.channelId || t.cid
          }).join(','),
          block: e.cardName,
          tagset: e.tag
        };
        Object(s['v']) (i)
      }
    }
    var g = new c['b'](function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      j(e)
    }, {
      key: '_autoInterRecommendId'
    }),
    y = new c['b'](function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      if (e.card) {
        var n = e.card,
        i = e.block,
        r = e.channelId;
        Object(s['s']) ({
          t: 21,
          block: i,
          purl: r,
          r_bkt: n.kvs.bkt,
          r_area: n.kvs.r_area,
          r_cid: n.kvs.r_cid,
          r_eventid: n.kvs.e,
          r_itemlist: n.kvs.itemlist,
          r_rank: n.kvs.r_rank,
          r_originl: n.kvs.r_originl,
          r_source: n.kvs.r_source,
          r_themeid: n.kvs.card_id,
          r_isVip: n.kvs.r_isVip,
          rpage: location.href,
          hu: w || - 1,
          position: n.order,
          abtest: ''
        })
      }
    }, {
      key: '_newInterRecommendId'
    }),
    w = null,
    _ = !1;
    function k() {
      return x.apply(this, arguments)
    }
    function x() {
      return x = Object(i['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (Object(l['M']) ()) {
                t.next = 3;
                break
              }
              return w = null,
              t.abrupt('return');
            case 3:
              return _ = !0,
              t.next = 6,
              Object(l['u']) ();
            case 6:
              if (e = t.sent, 'A10002' !== e.code && 'A10004' !== e.code) {
                t.next = 11;
                break
              }
              w = 0,
              t.next = 15;
              break;
            case 11:
              return t.next = 13,
              Object(l['K']) ().catch (function () {
                w = 1
              });
            case 13:
              n = t.sent,
              0 === n.length ? w = - 1 : n.indexOf(l['l']) > - 1 ? w = 3 : n.indexOf(l['k']) > - 1 ? w = 2 : n.indexOf(l['q']) > - 1 && (w = 4);
            case 15:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), x.apply(this, arguments)
    }
    var C = {
      bind: function () {
        var t = Object(i['a']) (regeneratorRuntime.mark(function t(e, n) {
          return regeneratorRuntime.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                if (_) {
                  t.next = 3;
                  break
                }
                return t.next = 3,
                k();
              case 3:
                g.observe(e, n.value || {
                });
              case 4:
              case 'end':
                return t.stop()
            }
          },
          t)
        })); function e(e, n) {
          return t.apply(this, arguments)
        }
        return e
      }(),
      inserted: function () {
        g.notify()
      },
      unbind: function (t) {
        g.unobserve(t)
      }
    },
    O = {
      bind: function () {
        var t = Object(i['a']) (regeneratorRuntime.mark(function t(e, n) {
          return regeneratorRuntime.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                if (_) {
                  t.next = 3;
                  break
                }
                return t.next = 3,
                k();
              case 3:
                y.observe(e, n.value || {
                });
              case 4:
              case 'end':
                return t.stop()
            }
          },
          t)
        })); function e(e, n) {
          return t.apply(this, arguments)
        }
        return e
      }(),
      inserted: function () {
        y.notify()
      },
      unbind: function (t) {
        y.unobserve(t)
      }
    };
    function j(t) {
      if (t && t.block) {
        var e = t.card,
        n = t.block,
        i = t.channelId,
        r = t.index,
        a = e.videos.find(function (t) {
          return t.kvs && t.kvs.r_bkt
        });
        a && Object(s['s']) ({
          t: 21,
          block: n,
          purl: s['i'][i],
          r_bkt: e.videos[0].kvs.r_bkt,
          r_ext: e.videos[0].kvs.r_ext,
          l_parm: e.videos[0].kvs.l_parm,
          r_area: e.videos[0].kvs.l_ab,
          r_vidlist: e.videos.map(function (t) {
            return t.videoId
          }).join(','),
          position: r,
          rpage: location.href,
          hu: w
        })
      }
    }
    var I = new c['a'](function (t, e, n) {
      e.card && T(e, n)
    }, {
      key: '_autoClickRecommend'
    }),
    S = {
      bind: function (t, e, n) {
        var i = e.value || {
        },
        r = i.card || {
        },
        a = n.componentInstance || {
        },
        s = a.videos || r.videos;
        I.observe(t, Object(o['a']) ({
          videos: s
        }, i))
      },
      unbind: function (t) {
        I.unobserve(t)
      }
    };
    function T(t, e) {
      var n = t.card,
      i = t.videos,
      r = t.rseat,
      a = t.channelId,
      o = t.block,
      c = t.rankStart,
      l = e.target,
      d = Object(u['F']) (l, 'LI'),
      p = Object(u['w']) (d),
      h = i[p],
      f = h.kvs || {
      };
      f.rseat = r || f.rseat,
      f.r_bkt && Object(s['s']) ({
        t: 20,
        r_bkt: f.r_bkt,
        r_ext: f.r_ext,
        l_parm: f.l_parm,
        r_area: f.r_area,
        r_eventid: f.e,
        r_originl: f.r_originl,
        r_source: f.r_source,
        l_ab: f.l_ab,
        r_rank: c ? p + c : p,
        r_tvid: h.videoId,
        purl: s['i'][a] || a,
        rseat: f.rseat,
        r_tcid: a,
        r_isVip: f.r_isVip,
        r_themeid: n.kvs.card_id,
        abtest: '',
        block: o,
        rpage: location.href,
        hu: w || - 1
      }),
      e.defaultPrevented || setTimeout(function () {
        window.location.href = h.pageUrl
      }, 200)
    }
  },
  8530: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        n('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: t.show && !t.fullscreen,
              expression: 'show && !fullscreen'
            }
          ],
          staticClass: 'cover',
          on: {
            click: function (e) {
              return t.$emit('coverClick')
            }
          }
        }),
        n('transition', {
          attrs: {
            name: t.currTransition
          }
        }, [
          n('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: t.show,
                expression: 'show'
              }
            ],
            staticClass: 'h-popup',
            class : [
              t.position ? 'h-popup-' + t.position + ' h-popup-transition' : '',
              t.fullscreen ? 'h-popup-fullscreen' : ''
            ]
          }, [
            n('div', {
              staticStyle: {
                height: '100%',
                overflow: 'scroll'
              }
            }, [
              t._t('default')
            ], 2)
          ])
        ])
      ], 1)
    },
    r = [
    ],
    a = (n('c5f6'), {
      name: 'CommentReportPopup',
      props: {
        show: {
          type: Boolean,
        default:
          !1
        },
        transition: {
          type: String,
        default:
          'h-popup-slide'
        },
        position: {
          type: String,
        default:
          ''
        },
        fullscreen: {
          type: Boolean,
        default:
          !1
        },
        scrollTop: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          currTransition: this.popupTransition
        }
      },
      watch: {
        show: function (t) {
          !t && this.hide()
        }
      },
      beforeMount: function () {
        this.currTransition = '' !== this.currTransition ? 'h-popup-slide-'.concat(this.position)  : this.currTransition
      },
      methods: {
        hide: function () {
          var t = this;
          this.$nextTick(function () {
            document.body.scrollTop = t.scrollTop,
            document.documentElement.scrollTop = t.scrollTop
          })
        }
      }
    }),
    o = a,
    s = (n('4f63'), n('2877')),
    c = Object(s['a']) (o, i, r, !1, null, '2edf3d91', null);
    e['a'] = c.exports
  },
  '87ac': function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return k
    }),
    n.d(e, 'e', function () {
      return q
    }),
    n.d(e, 'h', function () {
      return H
    }),
    n.d(e, 'g', function () {
      return V
    }),
    n.d(e, 'd', function () {
      return z
    }),
    n.d(e, 'j', function () {
      return W
    }),
    n.d(e, 'c', function () {
      return Q
    }),
    n.d(e, 'i', function () {
      return J
    }),
    n.d(e, 'k', function () {
      return Z
    }),
    n.d(e, 'l', function () {
      return et
    }),
    n.d(e, 'f', function () {
      return it
    }),
    n.d(e, 'm', function () {
      return rt
    });
    var i = n('5176'),
    r = n.n(i),
    a = n('0a0d'),
    o = n.n(a),
    s = (n('0cd8'), n('96cf'), n('a4bb')),
    c = n.n(s),
    u = (n('55dd'), n('a481'), n('ac6a'), n('f3e2'), n('3b8d')),
    l = n('936f'),
    d = n('8d81'),
    p = n.n(d),
    h = n('11ad'),
    f = n('b2e7'),
    m = n('b383'),
    v = n('5846'),
    b = n('5191'),
    g = n('8296'),
    y = n('a78e'),
    w = n.n(y),
    _ = n('73d4');
    n.d(e, 'b', function () {
      return _['a']
    });
    var k = 'play_wechat_like_comment',
    x = 'W3FfZnFY4OZgmxkL',
    C = '//sns-comment.iqiyi.com/v3/comment/publish.action',
    O = '//sns-comment.iqiyi.com/v3/comment/get_count_data.action',
    j = '//sns-comment.iqiyi.com/v3/comment/get_comments.action',
    I = '//sns-comment.iqiyi.com/v3/comment/like.action',
    S = '//sns-comment.iqiyi.com/v3/comment/remove_like.action',
    T = '//sns-comment.iqiyi.com/v3/comment/get_bulk_count_data.action',
    E = '//sns-comment.iqiyi.com/v3/comment/delete_comment.action',
    L = '//sns-comment.iqiyi.com/v3/comment/report_comment.action',
    R = 119,
    N = 17;
    function q() {
      return A.apply(this, arguments)
    }
    function A() {
      return A = Object(u['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = a.length > 0 && void 0 !== a[0] ? a[0] : {
              },
              n = {
                types: e.types,
                content_id: e.tvid,
                last_hot_id: e.hotLastId,
                last_hot_score: e.lastHotScore,
                last_id: e.commonLastId,
                business_type: N,
                agent_type: R,
                agent_version: '9.9.0',
                authcookie: Object(f['x']) ()
              },
              t.next = 4,
              l['a'].jsonp(j, {
                params: n
              });
            case 4:
              if (i = t.sent, r = i && i.data && 'A00000' === i.data.code ? i.data.data : null, !r) {
                t.next = 13;
                break
              }
              return P(r.hot),
              P(r.comments),
              t.next = 11,
              $(r.hot);
            case 11:
              return t.next = 13,
              $(r.comments);
            case 13:
              return t.abrupt('return', r);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), A.apply(this, arguments)
    }
    function P() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
      ];
      t.forEach(function (t) {
        t.picture = t.picture ? U(t.picture)  : t.picture,
        t.userInfo = t.userInfo ? M(t.userInfo)  : t.userInfo
      })
    }
    function U(t) {
      return t.url = t.dynamicUrl || Object(g['T']) (t.url),
      t.smallUrl = t.dynamicUrl || Object(g['T']) (t.smallUrl),
      t
    }
    function M(t) {
      return t.icon = t.icon.replace(/^https?:/, ''),
      t
    }
    function $() {
      return D.apply(this, arguments)
    }
    function D() {
      return D = Object(u['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = n.length > 0 && void 0 !== n[0] ? n[0] : [
              ],
              t.abrupt('return', Object(v['a']) ({
                data: e,
                key: 'content',
                next: {
                  dataKey: 'replySource',
                  key: 'content'
                }
              }));
            case 2:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), D.apply(this, arguments)
    }
    function H() {
      return B.apply(this, arguments)
    }
    function B() {
      return B = Object(u['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = r.length > 0 && void 0 !== r[0] ? r[0] : '',
              n = r.length > 1 && void 0 !== r[1] ? r[1] : '',
              t.next = 4,
              l['a'].jsonp(h['g'], {
                params: {
                  authcookie: Object(f['x']) (),
                  content_id: e,
                  agent_version: '9.9.0',
                  business_type: 17,
                  agent_type: R,
                  m_device_id: 'f49d6f06b950f6ada6d850bdbaa71886',
                  page_size: 10,
                  last_id: n
                }
              });
            case 4:
              return i = t.sent,
              t.next = 7,
              $(i.data.data.comments);
            case 7:
              return t.abrupt('return', i.data.data);
            case 8:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), B.apply(this, arguments)
    }
    function V(t, e) {
      var n = {
        authcookie: Object(f['x']) (),
        contentId: t,
        businessType: 17
      };
      l['a'].jsonpCacheHot(O, {
        params: n
      }, {
        qStore: {
          timeout: 200
        }
      }).next(e)
    }
    function z(t) {
      return F.apply(this, arguments)
    }
    function F() {
      return F = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = e.ids,
              i = {
                businessType: 17,
                content_ids: n || [
                ]
              },
              t.next = 4,
              l['a'].jsonp(T, {
                params: i
              });
            case 4:
              if (r = t.sent, 'A00000' === r.data.code) {
                t.next = 7;
                break
              }
              return t.abrupt('return', {
              });
            case 7:
              return a = r.data.data || [
              ],
              t.abrupt('return', a.reduce(function (t, e) {
                return t[e.contentId] = e.commentCount,
                t
              }, {
              }));
            case 9:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), F.apply(this, arguments)
    }
    function W(t, e, n, i, r) {
      return X.apply(this, arguments)
    }
    function X() {
      return X = Object(u['a']) (regeneratorRuntime.mark(function t(e, n, i, a, s) {
        var u,
        d;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.t0 = Object(f['x']) (),
              t.t1 = e || '',
              t.t2 = n,
              t.t3 = o() (),
              t.next = 6,
              Object(b['b']) ();
            case 6:
              return t.t4 = t.sent,
              u = {
                authcookie: t.t0,
                agenttype: 119,
                agentversion: '9.9.0',
                content_id: t.t1,
                text: t.t2,
                business_type: 17,
                qypid: '02000021010000000000',
                m_device_id: '02000021010000000000',
                timestamp: t.t3,
                dfp: t.t4
              },
              c() (i).length && r() (u, {
                pic_width: i.width,
                pic_height: i.height,
                pic_url: i.url,
                pic_swift_url: i.swift_url,
                pic_type: i.type,
                pic_fileId: i.fileId
              }),
              s.isVideoPage ? (u.isVideoPage = s.isVideoPage, u.aid = s.aid, u.cid = s.cid)  : u.reply_id = a,
              u.sign = Y(u),
              d = null,
              t.prev = 12,
              t.next = 15,
              l['a'].post(C, Object(m['stringify']) (u));
            case 15:
              if (d = t.sent, 'A00000' !== d.data.code) {
                t.next = 20;
                break
              }
              return t.abrupt('return', d.data.data);
            case 20:
              return t.abrupt('return', !1);
            case 21:
              t.next = 26;
              break;
            case 23:
              return t.prev = 23,
              t.t5 = t['catch'](12),
              t.abrupt('return', !1);
            case 26:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [12,
          23]
        ])
      })), X.apply(this, arguments)
    }
    function Y(t) {
      var e = c() (t).sort(),
      n = 'POST'.concat(C.slice(2), '?');
      return e.forEach(function (e, i, r) {
        n += ''.concat(e, '=').concat(t[e]),
        i !== r.length - 1 && (n += '&')
      }),
      p() (n += x)
    }
    function Q(t) {
      return G.apply(this, arguments)
    }
    function G() {
      return G = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                authcookie: Object(f['x']) (),
                business_type: 17,
                reply_id: e
              },
              t.prev = 1,
              t.next = 4,
              l['a'].post(E, Object(m['stringify']) (n));
            case 4:
              if (i = t.sent, 'A00000' !== i.data.code) {
                t.next = 9;
                break
              }
              return t.abrupt('return', !0);
            case 9:
              return t.abrupt('return', !1);
            case 10:
              t.next = 15;
              break;
            case 12:
              return t.prev = 12,
              t.t0 = t['catch'](1),
              t.abrupt('return', !1);
            case 15:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [1,
          12]
        ])
      })), G.apply(this, arguments)
    }
    function J(t) {
      return K.apply(this, arguments)
    }
    function K() {
      return K = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.t0 = Object(f['x']) (),
              t.t1 = e,
              t.next = 4,
              Object(b['b']) ();
            case 4:
              return t.t2 = t.sent,
              n = {
                business_type: 17,
                authcookie: t.t0,
                content_id: t.t1,
                dfp: t.t2
              },
              t.next = 8,
              l['a'].jsonp(I, {
                params: n
              }).catch (function () {
                return {
                }
              });
            case 8:
              if (i = t.sent, !i || !i.data || 'A00000' !== i.data.code) {
                t.next = 13;
                break
              }
              return t.abrupt('return', !0);
            case 13:
              return t.abrupt('return', !1);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), K.apply(this, arguments)
    }
    function Z(t) {
      return tt.apply(this, arguments)
    }
    function tt() {
      return tt = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.t0 = Object(f['x']) (),
              t.t1 = e,
              t.next = 4,
              Object(b['b']) ();
            case 4:
              return t.t2 = t.sent,
              n = {
                business_type: 17,
                authcookie: t.t0,
                content_id: t.t1,
                dfp: t.t2
              },
              t.next = 8,
              l['a'].jsonp(S, {
                params: n
              }).catch (function () {
                return {
                }
              });
            case 8:
              if (i = t.sent, !i || !i.data || 'A00000' !== i.data.code) {
                t.next = 13;
                break
              }
              return t.abrupt('return', !0);
            case 13:
              return t.abrupt('return', !1);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), tt.apply(this, arguments)
    }
    function et(t) {
      return nt.apply(this, arguments)
    }
    function nt() {
      return nt = Object(u['a']) (regeneratorRuntime.mark(function t(e) {
        var n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                reason: e.reason,
                other_reason: e.other_reason,
                content_id: e.commentId,
                authcookie: Object(f['x']) (),
                business_type: 17
              },
              t.abrupt('return', l['a'].jsonp(L, {
                params: n
              }));
            case 2:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), nt.apply(this, arguments)
    }
    function it() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      e = w.a.get(t);
      return e = e ? JSON.parse(e)  : null,
      e
    }
    function rt(t, e) {
      w.a.set(t, e, {
        expires: 1 / 0,
        domain: '.iqiyi.com',
        path: '/'
      })
    }
  },
  '8a88': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.show ? n('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '704251_bancommercial',
            expression: '\'704251_bancommercial\''
          }
        ],
        staticClass: 'm-player-tip'
      }, [
        n('div', {
          staticClass: 'player-tip-inner'
        }, [
          t._m(0),
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '704251_bantovip',
                expression: '\'704251_bantovip\''
              }
            ],
            staticClass: 'c-btn',
            attrs: {
              href: 'https://m.iqiyi.com/pay.html?platform=97ae2982356f69d8&serviceCode=lyksc7aq36aedndk&pid=a0226bd958843452&fc=9254fde39b3da1a7&aid=' + (t.albumId || t.tvid)
            }
          }, [
            t._v('开通VIP会员')
          ])
        ])
      ])  : t._e()
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'c-player-tip-info'
        }, [
          t._v('\n      呃...广告无法正常播放了'),
          n('br'),
          t._v('\n      开通VIP跳广告，或关闭屏蔽广告功能\n    ')
        ])
      }
    ],
    a = (n('d92a'), n('c5f6'), {
      name: 'VideoLayerAdError',
      props: {
        albumId: {
          type: Number,
        default:
          0
        },
        tvid: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          show: !1
        }
      },
      beforeMount: function () {
        var t = this;
        window.__player__ || (window.__player__ = {
        }),
        window.__player__.errorTip = this.showLayer.bind(this);
        var e = this.$parent;
        e.$on('created', function () {
          e.$on('load', function () {
            t.show = !1
          })
        })
      },
      methods: {
        showLayer: function () {
          this.show = !0,
          this.$parent.src(''),
          this.$parent.$emit('layerShow', {
            type: 'adError'
          })
        }
      }
    }),
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '8a92': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n(t.is, {
        tag: 'a',
        staticClass: 'm-user-base',
        attrs: {
          to: t.to
        }
      }, [
        n('span', {
          staticClass: 'base-tit'
        }, [
          t.icon ? n('i', {
            class : [
              'c-myicon',
              t.icon
            ]
          })  : t._e(),
          t._v(t._s(t.title) + '\n  ')
        ]),
        t._t('default'),
        n('i', {
          staticClass: 'c-glyphicon c-glyphicon-arrowRight'
        })
      ], 2)
    },
    r = [
    ],
    a = {
      name: 'AuraNav',
      props: {
        title: {
          type: String,
          required: !0
        },
        icon: {
          type: String,
        default:
          ''
        },
        to: {
          type: String,
        default:
          ''
        }
      },
      computed: {
        is: function () {
          return this.to ? 'router-link' : 'a'
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '8b4a': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('PlayInfoLayer', t._g(t._b({
        style: 'overflow: hidden',
        attrs: {
          id: 'PlayAlbumLayer',
          'associated-id': t.videoInfo.qipuId,
          'pop-class': 'm-episode-pop',
          'close-rseat': '507141_2',
          name: 'm-albumListLayer'
        },
        scopedSlots: t._u([{
          key: 'content',
          fn: function () {
            return [n('section', {
              staticClass: 'g-tab-num g-tab-txt'
            }, [
              n('div', {
                staticClass: 'm-tab-num m-sliding'
              }, [
                n('div', {
                  staticClass: 'm-tab-num-list m-sliding-list',
                  staticStyle: {
                    '-webkit-transform': 'translate(0px, 0px) scale(1)',
                    transform: 'translate(0px, 0px) scale(1)'
                  }
                }, [
                  n('span', {
                    staticClass: 'c-tab-item',
                    class : [
                      'c-tab-item',
                      {
                        selected: t.isNumList
                      }
                    ],
                    attrs: {
                      name: 'm-digit'
                    },
                    on: {
                      click: function (e) {
                        return t.changeListType('digit')
                      }
                    }
                  }, [
                    t._v('选集')
                  ]),
                  n('span', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: '810291_xjfjtab',
                        expression: '\'810291_xjfjtab\''
                      }
                    ],
                    class : [
                      'c-tab-item',
                      {
                        selected: t.isTextList
                      }
                    ],
                    attrs: {
                      name: 'm-text'
                    },
                    on: {
                      click: function (e) {
                        return t.changeListType('text')
                      }
                    }
                  }, [
                    t._v('分期简介')
                  ])
                ])
              ])
            ]),
            n('section', {
              staticClass: 'g-tab-num g-tab-episodeNum'
            }, [
              n('VideoSourceTabs', {
                attrs: {
                  'format-summary': t.sourceSummary,
                  'cur-year': t.curDate.year,
                  'cur-month': t.curDate.month,
                  'paging-type': 'group'
                },
                on: {
                  changeTab: t.toggleChangeTab
                }
              })
            ], 1),
            t.isNumList ? n('PlayPositionLayer', {
              attrs: {
                'cur-page': t.page
              }
            }, [
              n('div', {
                staticClass: 'm-imgTextList m-episode-intro'
              }, [
                n('ul', {
                  staticClass: 'imgTextList-item'
                }, t._l(t.videos, function (e, i) {
                  return n('li', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: 'l' + (i + 1),
                        expression: '`l${index + 1}`'
                      },
                      {
                        name: 'play',
                        rawName: 'v-play',
                        value: {
                          continuous: t.continuous,
                          card: 'albumList',
                          action: 'upsert',
                          selectClass: 'selected',
                          qipuId: e.qipuId,
                          url: e.pageUrl,
                          block: 'lesson_area',
                          rseat: 'l' + (i + 1),
                          index: e.index,
                          redirect: t.redirectLink
                        },
                        expression: '{\n              continuous: continuous,\n              card: \'albumList\',\n              action: \'upsert\',\n              selectClass: \'selected\',\n              qipuId: video.qipuId,\n              url: video.pageUrl,\n              block: \'lesson_area\',\n              rseat: `l${index + 1}`,\n              index: video.index,\n              redirect: redirectLink\n            }'
                      }
                    ],
                    key: e.id + '_' + i + '_albumlayer',
                    staticClass: 'm-anthologyList-item',
                    class : {
                      selected: t.videoInfo.qipuId === e.qipuId
                    },
                    on: {
                      click: t.toggleVideoClick
                    }
                  }, [
                    n('a', {
                      staticClass: 'rank-link',
                      attrs: {
                        title: e.title,
                        href: 'javascript:void(0)'
                      }
                    }, [
                      n('div', {
                        staticClass: 'img',
                        style: 'background-image:url(' + e.imageUrl + ');'
                      }, [
                        n('div', {
                          staticClass: 'c-rt'
                        }, [
                          e.upperRightCorner ? n('AuraVideoPicicon', {
                            attrs: {
                              text: e.upperRightCorner
                            }
                          })  : t._e()
                        ], 1),
                        n('div', {
                          staticClass: 'c-rb'
                        }, [
                          n('span', {
                            staticClass: 'c-date'
                          }, [
                            t._v(t._s(e.period))
                          ])
                        ])
                      ]),
                      n('div', {
                        staticClass: 'info'
                      }, [
                        n('span', {
                          staticClass: 'c-title'
                        }, [
                          t._v(t._s(e.shortTitle))
                        ]),
                        t.subTemplate.source ? n('span', {
                          staticClass: 'c-video'
                        }, [
                          t._v('本期热度 ' + t._s(e.hotNum))
                        ])  : n('span', {
                          staticClass: 'c-video'
                        }, [
                          t._v('热度 ' + t._s(e.hotNum))
                        ])
                      ])
                    ])
                  ])
                }), 0)
              ])
            ])  : t.isTextList ? n('PlayPositionLayer', {
              attrs: {
                'cur-page': t.page
              }
            }, [
              n('SourceText', {
                attrs: {
                  videos: t.videos,
                  'is-load': t.isLoad,
                  continuous: t.continuous,
                  'redirect-link': t.redirectLink,
                  'cur-page': t.page
                }
              })
            ], 1)  : t._e()]
          },
          proxy: !0
        }
        ])
      }, 'PlayInfoLayer', t.$attrs, !1), t.$listeners))
    },
    r = [
    ],
    a = n('a745'),
    o = n.n(a),
    s = n('bd86'),
    c = (n('96cf'), n('3b8d')),
    u = (n('20d6'), n('a481'), n('7514'), n('ac6a'), n('f3e2'), n('0cd8'), n('cebc')),
    l = n('2f62'),
    d = n('d7dd'),
    p = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.videos && t.videos.length ? n('section', {
          staticClass: 'c-dramasList m-episode-intro',
          staticStyle: {
            overflow: 'scroll-y'
          },
          attrs: {
            name: 'm-text'
          }
        }, t._l(t.videos, function (e, i) {
          return n('div', {
            key: e.id + '_' + i + '_albumlayer',
            attrs: {
              title: e.title
            },
            on: {
              click: t.toggleVideoClick
            }
          }, [
            n('div', {
              directives: [
                {
                  name: 'play',
                  rawName: 'v-play',
                  value: {
                    card: 'albumList',
                    continuous: t.continuous,
                    url: e.pageUrl,
                    qipuId: e.qipuId,
                    vfrm: t.vfrm,
                    index: e.index,
                    redirect: t.redirectLink
                  },
                  expression: '{\n          card: \'albumList\',\n          continuous: continuous,\n          url: video.pageUrl,\n          qipuId: video.qipuId,\n          vfrm: vfrm,\n          index: video.index,\n          redirect: redirectLink\n        }'
                }
              ],
              staticClass: 'c-title-xs',
              class : {
                selected: t.videoInfo.qipuId === e.qipuId
              }
            }, [
              t._m(0, !0),
              e.subTitle ? n('span', [
                n('span', {
                  staticClass: 'album-info'
                }, [
                  t._v(t._s(e.subTitle))
                ])
              ])  : n('span', [
                n('span', {
                  staticClass: 'album-info'
                }, [
                  t._v(t._s(e.pd))
                ]),
                t._v(t._s(e.vt || e.shortTitle) + '\n        ')
              ])
            ]),
            e.desc ? n('div', {
              staticClass: 'info',
              attrs: {
                'data-descQipuID': e.qipuId
              }
            }, [
              t._v('\n        ' + t._s(e.desc) + '\n      ')
            ])  : t._e()
          ])
        }), 0)  : t.isLoad ? n('section', {
          staticClass: 'm-loading-info'
        }, [
          n('div', {
            staticClass: 'c-info'
          }, [
            t._v('当前剧集目前暂无内容或版权，请持续关注更新')
          ])
        ])  : t._e()
      ])
    },
    h = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('span', {
          staticClass: 'video-status'
        }, [
          n('i', {
            staticClass: 'c-playPage-icon c-playPage-play'
          })
        ])
      }
    ],
    f = (n('c5f6'), {
      name: 'SourceText',
      props: {
        videos: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        vfrm: {
          type: String,
        default:
          ''
        },
        isLoad: {
          type: Boolean,
        default:
          !1
        },
        continuous: {
          type: Boolean,
        default:
          !0
        },
        redirectLink: {
          type: Boolean,
        default:
          !1
        },
        curPage: {
          type: Number,
        default:
          0
        }
      },
      computed: Object(u['a']) ({
      }, Object(l['e']) ('play', [
        'videoList',
        'albumInfo',
        'subTemplate',
        'videoInfo',
        'sourceListInfo',
        'layerPage',
        'layerOpen'
      ]), {
        selectIndex: function () {
          return this.videoInfo.order
        }
      }),
      watch: {
        page: function (t, e) {
          t !== e && (this.videos = this.sourceListInfo[this.page])
        },
        layerOpen: function (t) {
          t && (this.page = this.getPage(), this.videos = this.sourceListInfo[this.page])
        }
      },
      methods: {
        getPage: function () {
          return this.selectIndex ? Math.ceil(this.selectIndex / this.videoList.pageSize)  : this.videoList.currentPage
        },
        toggleVideoClick: function () {
          this.$store.dispatch('play/layerPage', this.curPage)
        }
      }
    }),
    m = f,
    v = n('2877'),
    b = Object(v['a']) (m, p, h, !1, null, null, null),
    g = b.exports,
    y = n('d4db'),
    w = n('1d52'),
    _ = n('dbce'),
    k = n('21fd'),
    x = n('5a0c'),
    C = n.n(x),
    O = {
      name: 'SourceLayer',
      components: {
        PlayInfoLayer: y['a'],
        VideoSourceTabs: d['a'],
        PlayPositionLayer: _['a'],
        SourceText: g
      },
      props: {
        continuous: {
          type: Boolean,
        default:
          !0
        },
        redirectLink: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          page: 0,
          videos: [
          ],
          listType: 'digit',
          isLoad: !1
        }
      },
      computed: Object(u['a']) ({
      }, Object(l['e']) ('play', [
        'albumInfo',
        'videoInfo',
        'subTemplate',
        'videoList',
        'sourceListInfo',
        'sourceSummary',
        'layerOpen',
        'secureJsonpToken'
      ]), {
        curDate: function () {
          return {
            year: this.videoInfo.period.slice(0, 4),
            month: this.videoInfo.period.slice(4, 6)
          }
        },
        updateStatus: function () {
          return this.subTemplate.source && this.albumInfo.showContent ? this.albumInfo.showContent : this.subTemplate.short ? this.videoInfo.issueTime + '发布' : ''
        },
        isNumList: function () {
          return 'digit' === this.listType
        },
        isTextList: function () {
          return 'text' === this.listType
        },
        summary: function () {
          var t = this.videoList.summary,
          e = [
          ];
          return t.reduce(function (t, n) {
            n.monthList.forEach(function (t) {
              e.push({
                year: n.year,
                month: t
              })
            })
          }, {
          }),
          e
        }
      }),
      watch: {
        page: function (t, e) {
          t !== e && (this.videos = this.sourceListInfo[this.page])
        },
        layerOpen: function (t) {
          t && (this.setPage(this.curDate), this.videos = this.sourceListInfo[this.page])
        }
      },
      methods: {
        title: function (t) {
          if (this.subTemplate.source) {
            var e = t.period ? C() (t.period).format('YYYY-MM-DD')  : '',
            n = this.formatTitle(t.shortTitle);
            return (e ? ''.concat(e, '期')  : '') + (n ? ': '.concat(n)  : '')
          }
          return t.videoName || t.shortTitle
        },
        formatTitle: function (t) {
          var e = [
            /第[\d]*集/,
            /[\d]*\./,
            /[\d]*、/,
            /[\d]*\s/
          ];
          return e.find(function (e) {
            e.test(t) && (t = t.replace(e, ''))
          }),
          t
        },
        setPage: function (t) {
          this.page = this.sourceSummary.findIndex(function (e) {
            return e.year === t.year && e.month === t.month
          })
        },
        setCurDate: function (t) {
          this.curDate = t
        },
        callNext: function () {
          var t = Object(c['a']) (regeneratorRuntime.mark(function t(e) {
            var n,
            i,
            r;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (n = e.curVideo, i = this.page, r = this.sourceListInfo[i].findIndex(function (t) {
                    return t.qipuId === n.qipuId
                  }) + 1, r !== this.sourceListInfo[i].length) {
                    t.next = 6;
                    break
                  }
                  return t.next = 6,
                  this.toggleChangeTab(this.summary[this.page + 1], this.page + 1);
                case 6:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        toggleChangeTab: function () {
          var t = Object(c['a']) (regeneratorRuntime.mark(function t(e, n) {
            var i,
            r,
            a;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.setPage(e), i = this.sourceListInfo[n || this.page], !i || !i.length) {
                    t.next = 4;
                    break
                  }
                  return t.abrupt('return');
                case 4:
                  return r = {
                    sourceId: this.videoInfo.sourceId,
                    year: e.year,
                    month: e.month,
                    token: this.secureJsonpToken
                  },
                  t.next = 7,
                  Object(w['d']) (r);
                case 7:
                  a = t.sent,
                  this.videos = this.formatVideos(a, n || this.page),
                  this.$store.dispatch('play/sourceListInfo', Object(s['a']) ({
                  }, this.page, this.videos));
                case 10:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e, n) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        formatVideos: function (t, e) {
          var n = this;
          return o() (t) && t.length ? (t.forEach(function (t, i) {
            t.index = Object(w['c']) (e, i),
            t.period = C() (t.period).format('YYYY-MM-DD'),
            t.upperRightCorner = Object(k['i']) (t),
            t.order = t.pd,
            t.title = n.title(t)
          }), t)  : [
          ]
        },
        toggleVideoClick: function () {
          this.$store.dispatch('play/layerPage', this.page)
        },
        changeListType: function (t) {
          this.listType = t
        }
      }
    },
    j = O,
    I = Object(v['a']) (j, i, r, !1, null, null, null);
    e['a'] = I.exports
  },
  '8c18': function (t, e, n) {
    var i = n('657d');
    'string' === typeof i && (i = [
      [t.i,
      i,
      '']
    ]),
    i.locals && (t.exports = i.locals);
    var r = n('499e').default;
    r('144c8554', i, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  '8ce2': function (t, e, n) {
    'use strict';
    n.d(e, 'c', function () {
      return f
    }),
    n.d(e, 'b', function () {
      return v
    }),
    n.d(e, 'a', function () {
      return g
    }),
    n.d(e, 'd', function () {
      return w
    });
    var i = n('a745'),
    r = n.n(i),
    a = (n('6d67'), n('96cf'), n('3b8d')),
    o = n('936f'),
    s = n('11ad'),
    c = n('1a51'),
    u = n('5321'),
    l = n('b2e7'),
    d = n('6f18'),
    p = n('8296'),
    h = n('21fd');
    function f(t) {
      return m.apply(this, arguments)
    }
    function m() {
      return m = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a,
        c,
        u,
        l = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = l.length > 1 && void 0 !== l[1] ? l[1] : 1,
              i = l.length > 2 && void 0 !== l[2] ? l[2] : 10,
              e = 7 === ''.concat(e).length ? e + '02' : e,
              a = {
                page: n,
                size: i
              },
              t.next = 6,
              o['a'].jsonp(''.concat(s['n']).concat(e, '/'), {
                params: a,
                withCredentials: !0
              });
            case 6:
              if (c = t.sent, u = c && c.data && c.data.data || {
              }, u.videos && !(u.videos.length <= 0)) {
                t.next = 12;
                break
              }
              return t.abrupt('return', null);
            case 12:
              return u.videos = u.videos.map(function (t, e) {
                return t.index = (n - 1) * i + (e + 1),
                t.tags && r() (t.tags) && t.tags.length > 0 ? t.tags = t.tags.join('·')  : t.tags = '',
                t.mainActors && r() (t.mainActors) && t.mainActors.length > 0 ? t.mainActors = t.mainActors.join('/')  : t.mainActors = '',
                t.imageUrl = t.imageUrl ? Object(p['o']) (t.imageUrl, '480_270')  : '',
                t.qualityImageUrl = t.qualityImageUrl ? Object(p['o']) (t.qualityImageUrl, '180_236')  : '',
                t.endImageUrl = t.qualityImageUrl ? Object(p['o']) (t.qualityImageUrl, '284_160')  : '',
                t.duration = p['m'].formatTime( + t.duration),
                t.play = {
                  qipuId: t.qipuId,
                  url: t.videoUrl || t.pageUrl,
                  noUpdateUrl: !0,
                  card: 'feed',
                  action: 'upsert',
                  position: 'DIV',
                  playStrategy: 'screenOutStopContinue',
                  continuous: !1,
                  player: {
                    title: !0
                  }
                },
                t
              }),
              t.abrupt('return', u.videos);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), m.apply(this, arguments)
    }
    function v(t) {
      return b.apply(this, arguments)
    }
    function b() {
      return b = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        c,
        u = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = u.length > 1 && void 0 !== u[1] ? u[1] : 1,
              i = u.length > 2 && void 0 !== u[2] ? u[2] : 10,
              e = 7 === ''.concat(e).length ? e + '02' : e,
              r = {
                page: n,
                size: i
              },
              t.next = 6,
              o['a'].jsonp(''.concat(s['n']).concat(e, '/'), {
                params: r,
                withCredentials: !0
              });
            case 6:
              if (a = t.sent, c = a && a.data && a.data.data || {
              }, c.items && !(c.items.length <= 0)) {
                t.next = 12;
                break
              }
              return t.abrupt('return', null);
            case 12:
              return c.items = c.items.map(function (t, e) {
                return t.index = (n - 1) * i + (e + 1),
                t.imageUrl = t.imageUrl ? Object(p['o']) (t.imageUrl, '320_180')  : '',
                t.upperRightCorner = Object(h['o']) (t),
                t.issueTime = p['m'].formatTimeStr( + t.issueTime) + '发布',
                t
              }),
              t.abrupt('return', c.items);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), b.apply(this, arguments)
    }
    function g(t, e, n) {
      return y.apply(this, arguments)
    }
    function y() {
      return y = Object(a['a']) (regeneratorRuntime.mark(function t(e, n, i) {
        var r,
        a,
        o;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (!Object(l['M']) ()) {
                t.next = 24;
                break
              }
              if (r = {
                subType: e.videoType,
                channelId: e.cid,
                subKey: e.albumId || e.id
              }, i) {
                t.next = 14;
                break
              }
              return t.next = 5,
              Object(c['g']) (r);
            case 5:
              if (a = t.sent, !a.success) {
                t.next = 11;
                break
              }
              return Object(u['l']) ({
                rseat: n
              }),
              t.abrupt('return', {
                success: !0,
                msg: '收藏成功，可在“我的”页面查看'
              });
            case 11:
              return t.abrupt('return', {
                success: !1,
                msg: '网络异常，请稍后重试'
              });
            case 12:
              t.next = 22;
              break;
            case 14:
              return t.next = 16,
              Object(c['f']) (r);
            case 16:
              if (o = t.sent, !o.success) {
                t.next = 21;
                break
              }
              return t.abrupt('return', {
                success: !0,
                msg: '已取消收藏'
              });
            case 21:
              return t.abrupt('return', {
                success: !1,
                msg: '网络异常，请稍后重试'
              });
            case 22:
              t.next = 25;
              break;
            case 24:
              Object(l['O']) ();
            case 25:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), y.apply(this, arguments)
    }
    function w(t, e, n) {
      return _.apply(this, arguments)
    }
    function _() {
      return _ = Object(a['a']) (regeneratorRuntime.mark(function t(e, n, i) {
        var r,
        a,
        o,
        s,
        c,
        p;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (!Object(l['M']) ()) {
                t.next = 20;
                break
              }
              return r = '1' === n.kvs.subscribeStatus,
              a = {
                subKeys: e,
                isSubed: r
              },
              t.next = 5,
              Object(d['f']) (a);
            case 5:
              if (o = t.sent, o) {
                t.next = 9;
                break
              }
              return s = '由于网络问题，请稍后重试',
              t.abrupt('return', {
                success: !1,
                msg: s
              });
            case 9:
              if (!o.success) {
                t.next = 16;
                break
              }
              return r || Object(u['l']) ({
                rseat: i
              }),
              n.kvs.subscribeStatus = r ? '0' : '1',
              c = r ? '预约已取消' : '预约成功<br>下载手机APP，上线立即提醒您 ',
              t.abrupt('return', {
                success: !0,
                msg: c
              });
            case 16:
              return p = r ? '取消预约失败，请稍后重试' : '预约失败，请稍后重试',
              t.abrupt('return', {
                success: !1,
                msg: p
              });
            case 18:
              t.next = 21;
              break;
            case 20:
              Object(l['O']) ();
            case 21:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), _.apply(this, arguments)
    }
  },
  9865: function (t, e, n) {
    'use strict';
    var i = n('5ca1'),
    r = n('6821'),
    a = n('4588'),
    o = n('9def'),
    s = [
    ].lastIndexOf,
    c = !!s && 1 / [
      1
    ].lastIndexOf(1, - 0) < 0;
    i(i.P + i.F * (c || !n('2f21') (s)), 'Array', {
      lastIndexOf: function (t) {
        if (c) return s.apply(this, arguments) || 0;
        var e = r(this),
        n = o(e.length),
        i = n - 1;
        for (arguments.length > 1 && (i = Math.min(i, a(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--) if (i in e && e[i] === t) return i || 0;
        return - 1
      }
    })
  },
  '9a35': function (t, e, n) {
    'use strict';
    n('96cf');
    var i,
    r,
    a = n('3b8d'),
    o = (n('c5f6'), n('21fd')),
    s = n('8296'),
    c = {
      name: 'VideoCount',
      props: {
        status: {
          type: Number,
          required: !0
        },
        count: {
          type: Number,
        default:
          0
        },
        id: {
          type: Number,
        default:
          0
        },
        hotTitle: {
          type: String,
        default:
          '热度'
        }
      },
      data: function () {
        return {
          value: null
        }
      },
      computed: {
        isRemote: function () {
          return this.id && !this.count
        }
      },
      watch: {
        count: function () {
          this.initCount()
        },
        id: function () {
          this.initCount()
        }
      },
      beforeMount: function () {
        this.initCount()
      },
      methods: {
        initCount: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.isRemote) {
                    t.next = 6;
                    break
                  }
                  return t.next = 3,
                  Object(o['p']) (this.id, this.status);
                case 3:
                  e = t.sent,
                  t.next = 7;
                  break;
                case 6:
                  e = this.count;
                case 7:
                  e && (this.value = Object(s['p']) (e));
                case 8:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }()
      },
      render: function (t) {
        return 1 === this.status && this.value ? t('span', {
          class : this.isRemote ? 'play-count' : 'c-video'
        }, [
          this.hotTitle,
          ' ',
          this.value
        ])  : 0 === this.status ? this.isRemote ? t('span', {
          class : 'play-count'
        }, [
          t('i', {
            class : 'c-glyphicon c-glyphicon-album-Bplay'
          }),
          this.value
        ])  : t('span', {
          class : 'c-video'
        }, [
          this.value,
          '次播放'
        ])  : void 0
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  '9ba8': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        directives: [
          {
            name: 'play',
            rawName: 'v-play',
            value: t.getVPlay(t.video),
            expression: 'getVPlay(video)'
          },
          {
            name: 'pingback',
            rawName: 'v-pingback',
            value: t.rseat,
            expression: 'rseat'
          }
        ],
        staticClass: 'm-video-player',
        on: {
          click: function () {
          }
        }
      }, [
        n('div', {
          staticClass: 'm-video-poster'
        }, [
          n('img', {
            attrs: {
              id: 'player-posterimg',
              src: t.video.imageUrl
            }
          })
        ]),
        t._m(0),
        n('div', {
          staticClass: 'video-title'
        }, [
          n('span', {
            staticClass: 'c-title'
          }, [
            t._v(t._s(t.video.mainTitle))
          ])
        ]),
        n('div', {
          staticClass: 'playCount-time'
        }, [
          t.video.showContent ? n('span', {
            staticClass: 'c-num'
          }, [
            t._v('\n      ' + t._s(t.video.showContent) + '\n    ')
          ])  : t._e(),
          t.video.duration ? n('span', {
            staticClass: 'c-time'
          }, [
            t._v('\n      ' + t._s(t.video.duration) + '\n    ')
          ])  : t._e()
        ])
      ])
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'c-videoplay'
        }, [
          n('i', {
            staticClass: 'c-player-icon c-player-big'
          })
        ])
      }
    ],
    a = n('cebc'),
    o = {
      name: 'PlayerPlaceholder',
      inheritAttrs: !1,
      props: {
        video: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        callback: {
          type: Function,
        default:
          null
        },
        cardName: {
          type: String,
        default:
          'feed'
        },
        rseat: {
          type: String,
        default:
          ''
        },
        playOptions: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      methods: {
        getVPlay: function (t) {
          return Object(a['a']) ({
            qipuId: t.qipuId,
            url: t.url,
            noUpdateUrl: !0,
            card: this.cardName,
            action: 'upsert',
            position: 'DIV',
            playStrategy: 'screenOutStopContinue',
            continuous: !0,
            source: {
              noAD: !0
            },
            player: {
              title: !0
            },
            hook: this.callback
          }, this.playOptions)
        }
      }
    },
    s = o,
    c = n('2877'),
    u = Object(c['a']) (s, i, r, !1, null, null, null);
    e['a'] = u.exports
  },
  '9bf7': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'selElem',
        staticClass: 'm-tab-num-list m-sliding-list'
      }, t._l(t.tags, function (e, i) {
        return n('span', {
          key: i,
          class : [
            'c-tab-item',
            {
              selected: i == t.curGroupIndex
            }
          ],
          on: {
            click: function (e) {
              return t.changeTag(i)
            }
          }
        }, [
          t._v(t._s(e.groupName))
        ])
      }), 0)
    },
    r = [
    ],
    a = {
      name: 'VideoEpisodeTabs',
      props: {
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        pagingType: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          tags: [
          ],
          curGroupIndex: 0
        }
      },
      watch: {
        videoInfo: function (t, e) {
          e && t.currentPage === e.currentPage || this.paging()
        }
      },
      mounted: function () {
        this.paging(),
        this.setTagPosition()
      },
      methods: {
        paging: function () {
          if (!this.videoInfo) return !1;
          this.tags = [
          ];
          var t,
          e = this.videoInfo.total,
          n = this.videoInfo.pageSize || 10,
          i = this.videoInfo.currentPage - 1,
          r = 0;
          'video' === this.pagingType ? t = 0 !== i ? i : 1 : this.curGroupIndex = i || 0,
          r = e % n === 0 ? e / n - 1 : e / n;
          for (var a = 0; a <= r; a++) {
            var o = a * n + 1,
            s = (a + 1) * n,
            c = Math.min(s, e),
            u = o === e ? o : ''.concat(o, '-').concat(c);
            t && t >= o && t <= c && (this.curGroupIndex = a),
            this.tags.push({
              from: o,
              end: s,
              to: c,
              groupName: u
            })
          }
        },
        setTagPosition: function () {
          this.$nextTick(function () {
          })
        },
        changeTag: function (t) {
          this.curGroupIndex = t,
          this.$emit('changeTag', t + 1)
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  '9e5e': function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: t.rootShow,
            expression: 'rootShow'
          }
        ],
        staticClass: 'm-sideBar',
        staticStyle: {
          display: 'none'
        }
      }, [
        n('div', {
        }, [
          n('a', {
            staticClass: 'm-goTop',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: function (e) {
                return e.stopPropagation(),
                e.preventDefault(),
                t.backTop(e)
              }
            }
          }, [
            n('i', {
              staticClass: 'c-glyphicon c-glyphicon-arrowUp'
            }),
            n('span', [
              t._v('顶部')
            ])
          ])
        ])
      ])
    },
    r = [
    ],
    a = (n('c5f6'), {
      name: 'BackTop',
      props: {
        height: {
          type: Number,
        default:
          2000
        }
      },
      data: function () {
        return {
          rootShow: !1
        }
      },
      mounted: function () {
        this.scrollFn = this.onScroll()
      },
      destroyed: function () {
        this.scrollFn()
      },
      methods: {
        onScroll: function () {
          var t,
          e = this,
          n = function () {
            cancelAnimationFrame(t),
            t = requestAnimationFrame(function () {
              var t = document.documentElement.scrollTop || document.body.scrollTop;
              e.rootShow = t >= e.height
            })
          };
          return window.addEventListener('scroll', n),
          function () {
            window.removeEventListener('scroll', n)
          }
        },
        backTop: function () {
          document.documentElement.scrollTop = 0,
          document.body.scrollTop = 0
        }
      }
    }),
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  a8db: function (t, e, n) {
    'use strict';
    var i = n('e265'),
    r = n.n(i),
    a = n('a4bb'),
    o = n.n(a);
    function s(t, e) {
      if (null == t) return {
      };
      var n,
      i,
      r = {
      },
      a = o() (t);
      for (i = 0; i < a.length; i++) n = a[i],
      e.indexOf(n) >= 0 || (r[n] = t[n]);
      return r
    }
    function c(t, e) {
      if (null == t) return {
      };
      var n,
      i,
      a = s(t, e);
      if (r.a) {
        var o = r() (t);
        for (i = 0; i < o.length; i++) n = o[i],
        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
      }
      return a
    }
    n.d(e, 'a', function () {
      return c
    })
  },
  aa91: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.loadShow ? n('div', {
          staticClass: 'm-loading-circle'
        }, [
          n('i', {
            staticClass: 'green-circle-icon loading-rotate'
          })
        ])  : t._e(),
        t._t('error', [
          !t.loadShow && t.errorShow ? n('section', {
            staticClass: 'm-nowifi-tip'
          }, [
            n('i', {
              staticClass: 'wifi-icon'
            }),
            n('div', {
              staticClass: 'info'
            }, [
              t._v('哎呀，数据获取失败~')
            ]),
            n('div', {
              staticClass: 'btn-wrap'
            }, [
              t._m(0),
              n('div', {
                staticClass: 'btn-link'
              }, [
                n('a', {
                  staticClass: 'c-link',
                  attrs: {
                    href: 'javascript:void(0)'
                  },
                  on: {
                    click: function (e) {
                      return t.load()
                    }
                  }
                }, [
                  t._v('\n            刷新一下\n          ')
                ])
              ])
            ])
          ])  : t._e()
        ]),
        t.loadShow || t.errorShow ? t._e()  : n('div', [
          t._t('default')
        ], 2)
      ], 2)
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'btn-link'
        }, [
          n('a', {
            staticClass: 'c-link',
            attrs: {
              href: '/'
            }
          }, [
            t._v('去爱奇艺首页\n          ')
          ])
        ])
      }
    ],
    a = n('795b'),
    o = n.n(a),
    s = {
      name: 'LoadPage',
      props: {
        callback: {
          type: Function,
        default:
          null
        },
        initLoad: {
          type: Boolean,
        default:
          !0
        }
      },
      data: function () {
        return {
          errorShow: !1,
          loadShow: this.initLoad,
          callbackFn: this.callback
        }
      },
      beforeMount: function () {
        this.load()
      },
      methods: {
        load: function (t) {
          var e = this,
          n = t || this.callbackFn;
          if (n) return this.callbackFn = n,
          this.loadShow = !0,
          o.a.resolve(n()).then(function () {
            e.loadShow = !1,
            e.errorShow = !1
          }, function () {
            e.loadShow = !1,
            e.errorShow = !0
          })
        }
      }
    },
    c = s,
    u = n('2877'),
    l = Object(u['a']) (c, i, r, !1, null, null, null);
    e['a'] = l.exports
  },
  b163: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return g
    }),
    n.d(e, 'a', function () {
      return y
    });
    n('96cf'),
    n('57e7'),
    n('c5f6'),
    n('a481');
    var i = n('e814'),
    r = n.n(i),
    a = n('5176'),
    o = n.n(a),
    s = (n('28a5'), n('a745')),
    c = n.n(s),
    u = (n('ac6a'), n('f3e2'), n('7618')),
    l = n('3b8d'),
    d = n('936f'),
    p = n('8296'),
    h = n('4f30'),
    f = n('b4d0'),
    m = n('b2e7'),
    v = '//search.video.iqiyi.com/o',
    b = {
    };
    function g(t) {
      b = {
        imgH: t.imgH,
        currentCid: t.cid,
        searchNum: t.pageSize
      }
    }
    function y(t) {
      return w.apply(this, arguments)
    }
    function w() {
      return w = Object(l['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        s;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              for (r in n = {
                qyid: Object(m['w']) (),
                access_play_control_platform: 15,
                site: 'iqiyi',
                if : 'html5',
                pu: Object(m['C']) (),
                u: Object(m['w']) (),
                _: (new Date).getTime()
              }, i = o() ({
              }, e, n), i) 'undefined' === typeof i[r] && (i[r] = '');
              return t.next = 5,
              d['a'].jsonp(v, {
                params: i
              });
            case 5:
              return a = t.sent,
              s = _(a.data),
              t.abrupt('return', s || [
              ]);
            case 8:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), w.apply(this, arguments)
    }
    function _(t) {
      var e = t.docinfos,
      n = {
        docs: [
        ]
      },
      i = [
      ];
      return t && 'object' === Object(u['a']) (t) && t.result_num && t.result_num > 0 && t.docinfos && (n.success = !0, 0 === t.docinfos.length ? n.isFinal = !0 : t.page_size && (t.page_size > t.docinfos.length || t.result_num / t.page_size <= t.page_num) ? n.isFinal = !0 : (n.success = !1, n.isFinal = !1)),
      e && e.forEach(function (e) {
        var n = k(e, t.server_time);
        i.push(n)
      }),
      0 === i.length ? n.isEmpty = !0 : i.length !== t.docinfos.length && (b.searchNum % 2 === 0 ? i.length = i.length - i.length % 2 : b.searchNum % 3 === 0 && (i.length = i.length - i.length % 3), t.length < 1 && (n.isEmpty = !0)),
      n.docs = i || {
      },
      n.eventId = t.event_id,
      n.bkt = t.bkt,
      n.search_time = t.search_time,
      n.docinfos = t.docinfos,
      n.pageNum = t.page_num,
      n
    }
    function k(t, e) {
      var n = {
      },
      i = t.albumDocInfo;
      if (!c() (i.videoinfos)) return null;
      var r = i.videoinfos[0],
      a = i.channel.split(','),
      s = a[1];
      return t.categoryId = s,
      n.docId = t.doc_id,
      n.siteId = i.siteId,
      n.channelId = s,
      n.albumId = i.albumId,
      n.pageUrl = Object(p['H']) (r && r.itemLink || i.albumLink),
      n.upperRightCorner = i ? Object(f['B']) (i)  : '',
      n.lowerLeftCorner = x(s, i.videoinfos[0].initialIssueTime, e),
      n.imageUrl = C(i),
      o() (n, O(i), I(i), j(i.paymark)),
      n
    }
    function x(t, e, n) {
      if (t = r() (t), t !== r() (h['CHANNEL_YULE']) && t !== r() (h['CHANNEL_ZIXUN'])) return '';
      /Invalid /gi.test(new Date(e)) && (e = e.replace(/-/g, '/')),
      e = new Date(e),
      /Invalid /gi.test(new Date(n)) && (n = n.replace(/-/g, '/')),
      n = new Date(n);
      var i = (n - e) / 1000,
      a = '';
      return i < 3600 ? a = '刚刚' : i < 86400 ? a = Math.round(i / 3600) + '小时前发布' : i < 172800 && (a = '昨天'),
      a
    }
    function C(t) {
      var e = '',
      n = t.videoinfos[0];
      return 1 === t.videoDocType ? e = r() (b.currentCid) === r() (h['CHANNEL_MUYING']) ? t.albumImg : 1 === t.album_type ? n.itemHImage : t.albumImg : 2 === t.videoDocType && (e = n.itemHImage),
      e = b.imgH ? Object(p['o']) (e, '284_160')  : Object(p['o']) (e, '195_260'),
      e
    }
    function O(t) {
      var e,
      n,
      i = t.videoinfos[0];
      if (1 === t.videoDocType) if (1 === t.album_type) e = i.year ? (i.year + '').replace(/\d{4}(\d{2})(\d{2})/, '$1-$2') + '期' : '';
       else if (0 === t.album_type || t.series) {
        var r = t.newest_item_number || i.itemNumber;
        e = r !== t.itemTotalNumber ? '更新至' + r + '集' : r + '集全'
      } else {
        var a = 0 !== t.score && t.score ? t.score : 8;
        e = a === Math.floor(a) ? a + '.0' : Number(a).toFixed(1),
        n = !0
      } else 2 === t.videoDocType && (e = p['m'].formatTime(i.timeLength));
      return {
        rbContent: e,
        isMovie: n
      }
    }
    function j(t) {
      if (t) {
        var e = {
        };
        switch (t) {
          case 1:
            e.isVip = !0;
            break;
          case 2:
            e.isVip = !0;
            break;
          case 3:
            e.isPaid = !0;
            break;
          default:
            break
        }
        return e
      }
    }
    function I(t) {
      var e,
      n,
      i = t.categoryId,
      a = t.videoinfos[0];
      return 1 === t.videoDocType ? 1 === t.album_type ? (e = [
        r() (h['CHANNEL_ZONGYI']),
        r() (h['CHANNEL_TUOKOUXIU']),
        r() (h['CHANNEL_MUYING'])
      ].indexOf(r() (b.currentCid)) > - 1 ? t.albumTitle : a.itemshortTitle || a.itemTitle || t.albumTitle, r() (b.currentCid) === r() (h['CHANNEL_VIP']) && '综艺,6' === t.channel && (e = t.albumTitle), n = a.itemshortTitle || a.itemTitle)  : 0 === t.album_type || t.series ? (e = t.albumTitle, n = a.subTitle || S(t.threeCategory, 2))  : (e = t.albumTitle, n = a.subtitle || S(t.threeCategory, 2))  : 2 === t.videoDocType && (e = 16 === i ? a.itemshortTitle || a.itemTitle : a.itemTitle || a.itemshortTitle, n = a.subTitle || S(t.threeCategory, 2)),
      r() (b.currentCid) !== r() (h['CHANNEL_ZONGYI']) && r() (b.currentCid) !== r() (h['CHANNEL_TUOKOUXIU']) && (n = ''),
      {
        mainTitle: e,
        subTitle: n
      }
    }
    function S(t, e) {
      if ('string' !== typeof t) return '';
      var n = t.split(' '),
      i = [
      ];
      return n.forEach(function (t) {
        var e = t ? t.split(',')  : [
        ];
        e.length > 0 && i.push(e[0])
      }),
      i.slice(0, e).join(' ')
    }
  },
  b2dc: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return s
    }),
    n.d(e, 'a', function () {
      return c
    });
    n('6d67'),
    n('28a5');
    var i = n('f499'),
    r = n.n(i),
    a = n('8296'),
    o = '__bhrecord__';
    function s() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      try {
        a['L'].setItem(o, r() (t))
      } catch (e) {
        return e
      }
    }
    function c() {
      var t = [
      ];
      try {
        var e = a['L'].getItem(o).split('|');
        return e.map(function (e) {
          t.push(JSON.parse(e))
        }),
        t
      } catch (n) {
        return n
      }
    }
  },
  b5c7: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return v
    }),
    n.d(e, 'a', function () {
      return b
    }),
    n.d(e, 'd', function () {
      return g
    }),
    n.d(e, 'c', function () {
      return C
    });
    var i = n('5176'),
    r = n.n(i),
    a = n('e814'),
    o = n.n(a),
    s = (n('ac6a'), n('f3e2'), n('96cf'), n('a481'), n('3b8d')),
    c = n('b2e7'),
    u = n('b134'),
    l = n('8296'),
    d = n('936f'),
    p = '//l-rcd.iqiyi.com/apis/qiyirc/getallrc',
    h = '//nl-rcd.iqiyi.com/apis/urc/getrc',
    f = '//l-rcd.iqiyi.com/apis/mbd/delete.action',
    m = '//nl-rcd.iqiyi.com/apis/mbd/delete.action',
    v = 1,
    b = 0;
    function g() {
      return y.apply(this, arguments)
    }
    function y() {
      return y = Object(s['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r,
        a,
        s = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e = s.length > 0 && void 0 !== s[0] ? s[0] : {
              }, n = {
                agentType: 1,
                pageNum: e.page || 1,
                pageSize: e.pageSize || 20,
                only_long: e.onlyLongVideo || b,
                dp: 3
              }, !Object(c['M']) ()) {
                t.next = 8;
                break
              }
              return t.next = 5,
              w(n);
            case 5:
              i = t.sent,
              t.next = 11;
              break;
            case 8:
              return t.next = 10,
              k(n);
            case 10:
              i = t.sent;
            case 11:
              return 'A00000' === i.code && (r = i.data.records, a = void 0 === r ? [
              ] : r, a.forEach(function (t) {
                var e = o() (t.videoPlayTime);
                t.videoUrl = Object(l['I']) (t.videoUrl),
                t.videoPlayTime = isNaN(e) ? 0 : e,
                t.remainTime = l['m'].formatTime(t.videoDuration - t.videoPlayTime),
                t.duration = l['m'].formatTime(t.videoDuration),
                t.resizedVideoImageUrl = S(t.videoImageUrlVertical, /_\d{2}_\d{3}\.(jpg|bmp|gif)/i)
              })),
              t.abrupt('return', i);
            case 13:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), y.apply(this, arguments)
    }
    function w(t) {
      return _.apply(this, arguments)
    }
    function _() {
      return _ = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.next = 2,
              d['a'].jsonp(p, {
                params: e
              });
            case 2:
              return n = t.sent,
              i = n.data,
              i.data = r() (i.data || {
              }, {
                page: e.page,
                pageSize: e.pageSize
              }),
              t.abrupt('return', i);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), _.apply(this, arguments)
    }
    function k(t) {
      return x.apply(this, arguments)
    }
    function x() {
      return x = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e.ckuid = Object(c['w']) (),
              t.next = 3,
              d['a'].jsonp(h, {
                params: e
              });
            case 3:
              return n = t.sent,
              i = n.data,
              t.abrupt('return', {
                code: i.code,
                data: {
                  pageSize: e.pageSize,
                  page: e.page,
                  records: i.data,
                  total: i.count
                }
              });
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), x.apply(this, arguments)
    }
    function C() {
      return O.apply(this, arguments)
    }
    function O() {
      return O = Object(s['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n,
        i,
        r = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = r.length > 0 && void 0 !== r[0] ? r[0] : {
              },
              n = {
                auth: Object(c['x']) (),
                ckuid: Object(c['w']) (),
                agent_type: 1,
                version: u['c'].version,
                ua: u['d'].version,
                empty: e.empty
              },
              1 !== e.empty && (n.del_records = e.del_records),
              t.next = 5,
              j(n);
            case 5:
              return i = t.sent,
              t.abrupt('return', i);
            case 7:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), O.apply(this, arguments)
    }
    function j(t) {
      return I.apply(this, arguments)
    }
    function I() {
      return I = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = Object(c['M']) () ? f : m,
              t.next = 3,
              d['a'].jsonp(n, {
                params: e
              });
            case 3:
              return i = t.sent,
              r = i.data,
              t.abrupt('return', {
                code: r.code,
                data: r
              });
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), I.apply(this, arguments)
    }
    function S(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /.(jpg|bmp|gif)/i;
      return /iqiyipic/i.test(t) ? t.replace(e, '_320_180.$1')  : t
    }
  },
  b924: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return d
    }),
    n.d(e, 'c', function () {
      return h
    }),
    n.d(e, 'f', function () {
      return f
    }),
    n.d(e, 'e', function () {
      return m
    }),
    n.d(e, 'd', function () {
      return v
    }),
    n.d(e, 'a', function () {
      return b
    }),
    n.d(e, 'g', function () {
      return g
    });
    var i = n('f499'),
    r = n.n(i),
    a = (n('28a5'), n('5a0c')),
    o = n.n(a),
    s = n('4f30'),
    c = n('8296'),
    u = 'https://m.iqiyi.com',
    l = 'https://m.tw.iqiyi.com';
    function d(t) {
      if (t) {
        var e = '',
        n = '',
        i = '',
        r = '0',
        a = t.albumName,
        c = t.albumPageUrl,
        u = t.channelUrl,
        l = t.channelName,
        d = t.videoCount,
        h = t.desc,
        f = t.picUrl,
        m = t.latestVideoOrder,
        v = t.channelId + '',
        b = t.directors && t.directors.split(',') [0],
        g = t.mainActors && t.mainActors.split(',').slice(0, 3).join(','),
        y = t.area && t.area[0],
        w = o() (t.period).format('YYYY-MM-DD'),
        _ = 'https:'.concat(t.videoUrl),
        k = 'https:'.concat(t.videoUrl),
        x = t.languages && t.languages.join(',');
        return t.isSource || v !== s['CHANNEL_DIANSHIJU'] ? t.isSource || v !== s['CHANNEL_DONGMAN'] ? t.isSource && v === s['CHANNEL_ZONGYI'] ? (e = ''.concat(a, '-综艺-高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是').concat(y, '综艺节目。节目简介：').concat(p(h, 150)), i = ''.concat(a, ',').concat(a, '高清视频,').concat(a, '全集'))  : v === s['CHANNEL_YINYUE'] ? (e = ''.concat(a, '-').concat(l, '-高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是').concat(y).concat(x, '音乐专辑，爱奇艺在线观看《').concat(a, '》完整版高清视频。节目简介：').concat(p(h, 150)), i = ''.concat(a, ',').concat(a, '高清视频,').concat(a, '音乐专辑'))  : (e = ''.concat(a, '-').concat(l, '-高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是').concat(l, '视频专辑，爱奇艺在线观看《').concat(a, '》高清视频节目。节目简介：').concat(p(h, 150)), i = ''.concat(a, ',').concat(a, '高清视频,').concat(a, '在线观看'))  : t.latestVideoOrder > 0 ? (e = ''.concat(a, '-动漫动画-全集高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是').concat(y, '类型动漫，于').concat(w, '上映，共').concat(d, '集。爱奇艺在线观看《').concat(a, '》全集高清视频。剧情简介：').concat(p(h, 100)), i = ''.concat(a, ',').concat(a, '动漫,').concat(a, '全集, ').concat(a, '在线观看'))  : (e = ''.concat(a, '-动漫动画-高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是').concat(y, '类型动漫，于').concat(w, '上映，共').concat(d, '集。爱奇艺在线观看《').concat(a, '》高清视频。剧情简介：').concat(p(h, 100)), i = ''.concat(a, ',').concat(a, '动漫,').concat(a, '在线观看'))  : m > 0 ? (e = ''.concat(a, '-').concat(l, '-全集高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是由').concat(b, '导演,').concat(g, '等主演的').concat(y, '电视剧,总共').concat(d, '集。爱奇艺在线观看《').concat(a, '》全集高清视频。剧情简介：').concat(p(h, 150)), i = ''.concat(a, ',').concat(a, '电视剧,').concat(a, '全集'))  : (e = ''.concat(a, '-').concat(l, '-高清正版视频在线观看-爱奇艺'), n = '《'.concat(a, '》是由').concat(b, '导演,').concat(g, '等主演的').concat(y, '电视剧,总共').concat(d, '集。爱奇艺在线观看《').concat(a, '》高清视频。剧情简介：').concat(p(h, 100)), i = ''.concat(a, ',').concat(a, '电视剧,').concat(a, '在线观看, ').concat(a, '剧情介绍')),
        {
          title: e,
          description: n,
          keywords: i,
          appid: r,
          pubDate: w,
          thumbnailUrl: f,
          url: _,
          canonical: k,
          albumName: a,
          albumPageUrl: c,
          channelUrl: u,
          channelName: l
        }
      }
    }
    function p(t, e) {
      return t.length > e ? ''.concat(t.substring(0, e), '...')  : t
    }
    function h(t) {
      return {
        rel: 'alternate',
        href: 'android-app://com.qiyi.video/http/m.iqiyi.com'.concat(t ? Object(c['H']) (t)  : '/')
      }
    }
    function f(t) {
      return {
        type: 'application/ld+json',
        textContent: r() ({
          '@context': 'http://schema.org',
          '@type': 'VideoObject',
          name: t.title,
          '@id': t.videoUrl,
          uploadDate: t.issueTime,
          datePublished: t.issueTime,
          description: t.desc,
          thumbnailUrl: t.thumbnailUrl
        }, null, 2)
      }
    }
    function m(t, e) {
      var n = [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'http://m.iqiyi.com/',
            name: '爱奇艺',
            image: 'https://www.iqiyipic.com/common/fix/h5-v3/iqiyi-logo.png'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': t.channelUrl,
            name: t.channelName,
            image: 'https://www.iqiyipic.com/common/fix/h5-v3/iqiyi-logo.png'
          }
        }
      ];
      1 !== e && 2 !== e || n.push({
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': t.albumPageUrl,
          name: t.albumName,
          image: t.athumbnailUrl || t.thumbnailUrl
        }
      }),
      0 !== e && 2 !== e || n.push({
        '@type': 'ListItem',
        position: 0 === e ? 3 : 4,
        item: {
          '@id': t.videoUrl,
          name: t.videoName,
          image: t.thumbnailUrl
        }
      });
      var i = {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: n
      };
      return {
        type: 'application/ld+json',
        textContent: r() (i, null, 2)
      }
    }
    function v(t) {
      return {
        type: 'application/ld+json',
        textContent: r() ({
          '@context': 'https://ziyuan.baidu.com/contexts/cambrian.jsonld',
          '@id': u + Object(c['H']) (t.canonical),
          appid: '1584928185071026',
          title: t.title,
          images: [
            t.thumbnailUrl
          ],
          description: t.description,
          pubDate: t.pubDate
        }, null, 2)
      }
    }
    function b(t) {
      var e = [
        {
          name: 'keywords',
          lang: 'zh-CN',
          content: t.keywords
        },
        {
          name: 'description',
          lang: 'zh-CN',
          content: t.description
        },
        {
          name: 'appid',
          content: t.appid
        },
        {
          name: 'title',
          lang: 'zh-CN',
          content: t.title
        }
      ];
      return t.canonical ? e.concat([{
        name: 'canonical',
        href: t.canonical
      },
      {
        rel: 'alternate',
        hreflang: 'zh-CN',
        href: u + Object(c['H']) (t.canonical)
      },
      {
        rel: 'alternate',
        hreflang: 'zh',
        href: u + Object(c['H']) (t.canonical)
      },
      {
        rel: 'alternate',
        hreflang: 'zh-TW',
        href: l + Object(c['H']) (t.canonical)
      }
      ])  : e
    }
    function g(t) {
      return [{
        itemprop: 'name',
        content: t.title
      },
      {
        itemprop: 'description',
        content: t.description
      },
      {
        itemprop: 'video',
        itemscope: '',
        itemref: '1 2 3 4 5 6 7',
        itemtype: 'http://schema.org/VideoObject'
      },
      {
        id: '1',
        itemprop: 'image',
        content: t.thumbnailUrl
      },
      {
        id: '2',
        itemprop: 'thumbnailUrl',
        content: t.thumbnailUrl
      },
      {
        id: '3',
        itemprop: 'url',
        content: u + Object(c['H']) (t.canonical)
      },
      {
        id: '4',
        itemprop: 'uploadDate',
        content: t.pubDate
      },
      {
        id: '5',
        itemprop: 'datePublished',
        content: t.pubDate
      },
      {
        id: '6',
        itemprop: 'inLanguage',
        content: 'zh-CN'
      },
      {
        id: '7',
        itemprop: 'contentLocation',
        content: '中国'
      }
      ]
    }
  },
  bf96: function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {
      }, t.paths = [
      ], t.children || (t.children = [
      ]), Object.defineProperty(t, 'loaded', {
        enumerable: !0,
        get: function () {
          return t.l
        }
      }), Object.defineProperty(t, 'id', {
        enumerable: !0,
        get: function () {
          return t.i
        }
      }), t.webpackPolyfill = 1),
      t
    }
  },
  bfde: function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return o
    }),
    n.d(e, 'b', function () {
      return s
    });
    n('57e7'),
    n('759f');
    var i = n('2c06'),
    r = n('b134'),
    a = [
      'm.baidu.com',
      'www.baidu.com',
      'v.baidu.com',
      'sp3.baidu.com',
      'baike.baidu.com',
      'tieba.baidu.com'
    ],
    o = [
      'weixin'
    ];
    function s() {
      return c() || u()
    }
    function c() {
      return r['a'].baidubox || r['a'].baidubrowser
    }
    function u() {
      var t = Object(i['x']) ();
      return a.some(function (e) {
        return t.indexOf(e) >= 0
      })
    }
  },
  c3bb: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        n('section', {
          staticClass: 'm-linkMore borderTB'
        }, [
          n('router-link', {
            staticClass: 'm-link',
            attrs: {
              to: '/u/feedback?entry=' + t.entry
            }
          }, [
            n('i', {
              staticClass: 'c-glyphicon c-glyphicon-feed'
            }),
            t._v('意见反馈\n    ')
          ])
        ], 1)
      ])
    },
    r = [
    ],
    a = {
      name: 'FeedBack',
      props: {
        entry: {
          type: String,
        default:
          'other'
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  c7b5: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t.title ? n('div', {
          staticClass: 'aboutUs-title'
        }, [
          t._v('\n    ' + t._s(t.title) + '\n  ')
        ])  : t._e(),
        n('ul', {
          staticClass: 'aboutUs-list'
        }, t._l(t.items, function (t, e) {
          return n('li', {
            key: e
          }, [
            n('AuraNav', {
              attrs: {
                href: t.url,
                title: t.title
              }
            })
          ], 1)
        }), 0)
      ])
    },
    r = [
    ],
    a = n('8a92'),
    o = {
      name: 'UserAboutList',
      components: {
        AuraNav: a['a']
      },
      props: {
        items: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        title: {
          type: String,
        default:
          ''
        }
      }
    },
    s = o,
    c = n('2877'),
    u = Object(c['a']) (s, i, r, !1, null, null, null);
    e['a'] = u.exports
  },
  ccc1: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'm-cancelAppeal-foottext'
      }, [
        t._v('Copyright © ' + t._s(t.year) + ' 爱奇艺 All Rights Reserved')
      ])
    },
    r = [
    ],
    a = {
      name: 'AppealCancelFooter',
      computed: {
        year: function () {
          return (new Date).getFullYear()
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  cecc: function (t, e, n) {
    'use strict';
    function i(t) {
      var e = 500;
      return t.length > e ? t.substring(0, e)  : t
    }
    n.d(e, 'a', function () {
      return i
    })
  },
  d0f9: function (t, e, n) {
    var i = n('dbfb');
    'string' === typeof i && (i = [
      [t.i,
      i,
      '']
    ]),
    i.locals && (t.exports = i.locals);
    var r = n('499e').default;
    r('0f7d116d', i, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  d323: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.videos.length >= 3 ? n('div', {
        staticClass: 'm-box',
        attrs: {
          name: 'm-videoRec'
        }
      }, [
        n('div', {
          ref: 'rec',
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('AuraCardTitle', {
            attrs: {
              title: '猜你喜欢'
            }
          })
        ], 1),
        n('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('AuraVideoRowList', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.itemPingback,
                expression: 'itemPingback'
              }
            ],
            attrs: {
              subtype: t.subtype,
              videos: t.videos.slice(0, t.pageSize * (t.page + 1)),
              'show-desc': !1
            },
            on: {
              click: t.videoClick
            },
            scopedSlots: t._u([{
              key: 'extra',
              fn: function (e) {
                var i = e.video;
                return [n('VideoCount', {
                  attrs: {
                    status: i.hotDisplayStatus,
                    count: i.hotDisplayCount,
                    'hot-title': t.hotTitle
                  }
                })]
              }
            }
            ], null, !1, 3539922810)
          })
        ], 1),
        (t.page + 1) * t.pageSize < t.videos.length ? n('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          n('section', {
            staticClass: 'm-linkMore'
          }, [
            n('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: t.morePingback,
                  expression: 'morePingback'
                }
              ],
              staticClass: 'm-link m-love-link',
              attrs: {
                href: 'javascript:void(0);'
              },
              on: {
                click: function (e) {
                  t.page = t.page + 1
                }
              }
            }, [
              n('i', {
                staticClass: 'c-glyphicon c-glyphicon-morevideo'
              }),
              t._v('查看更多\n      ')
            ])
          ])
        ])  : t._e()
      ])  : t._e()
    },
    r = [
    ],
    a = (n('57e7'), n('ac6a'), n('f3e2'), n('96cf'), n('3b8d')),
    o = n('cebc'),
    s = (n('c5f6'), n('2f62')),
    c = n('9a35'),
    u = n('21fd'),
    l = n('5321'),
    d = n('8296'),
    p = n('4e77'),
    h = {
      name: 'VideoRecommend',
      components: {
        VideoCount: c['a']
      },
      props: {
        allNum: {
          type: Number,
        default:
          16
        },
        pageSize: {
          type: Number,
        default:
          3
        },
        channelId: {
          type: Number,
        default:
          0
        },
        isCallApp: {
          type: Boolean,
        default:
          !1
        },
        isUgc: {
          type: Boolean,
        default:
          !1
        },
        tvid: {
          type: Number,
        default:
          0
        },
        albumId: {
          type: Number,
        default:
          0
        },
        morePingback: {
          type: String,
        default:
          ''
        },
        itemPingback: {
          type: String,
        default:
          ''
        },
        vfrm: {
          type: String,
        default:
          ''
        },
        useLongParam: {
          type: Boolean,
        default:
          !1
        },
        hotTitle: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          videos: [
          ],
          page: 0,
          pingback: {
          },
          subtype: 'H5cnxh_823'
        }
      },
      computed: Object(o['a']) ({
      }, Object(s['e']) ('play', [
        'videoInfo'
      ])),
      beforeMount: function () {
        var t = this;
        this.init();
        var e = !1;
        Object(p['e']) (function () {
          !e && Object(d['O']) (t.$refs.rec) && (t.sendBlockRecommend(), e = !0)
        })
      },
      methods: {
        init: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n,
            i = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (e = {
                    area: 'h_bee',
                    channelId: this.channelId,
                    entitySource: this.isUgc ? 'ugc' : 'ppc',
                    size: this.allNum,
                    referenceId: this.tvid,
                    albumId: this.albumId,
                    onlyAlbum: !0
                  }, n = null, !this.useLongParam) {
                    t.next = 9;
                    break
                  }
                  return e = {
                    page: 1,
                    size: 16,
                    area: 'h_bee',
                    entitySource: this.videoInfo.isUGC ? 'ugc' : 'ppc',
                    referenceId: this.videoInfo.qipuId,
                    channelId: this.videoInfo.cid,
                    albumId: null,
                    onlyAlbum: !0,
                    filterStatus: 1
                  },
                  t.next = 6,
                  Object(u['f']) (e);
                case 6:
                  n = t.sent,
                  t.next = 12;
                  break;
                case 9:
                  return t.next = 11,
                  Object(u['j']) (e);
                case 11:
                  n = t.sent;
                case 12:
                  n && (n.videos && n.videos.forEach(function (t) {
                    t.pageUrl = t.pageUrl.indexOf('vfrm') > - 1 ? t.pageUrl : ''.concat(t.pageUrl, '#vfrm=').concat(i.vfrm),
                    (t.play = {
                      callApp: !0,
                      card: 'recommend',
                      redirect: !0,
                      url: t.pageUrl,
                      qipuId: t.qipuId,
                      continuous: !0,
                      selectClass: 'selected'
                    })
                  }), this.videos = this.videos.concat(n.videos), this.pingback = n.pingback);
                case 13:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        sendBlockRecommend: function () {
          var t = [
          ],
          e = [
          ];
          this.videos.forEach(function (n) {
            t.push(n.albumId || n.qipuId || n.id),
            e.push(n.source)
          }),
          Object(l['n']) ({
            usract: 'show',
            aid: this.albumId,
            cid: this.channelId,
            eventId: this.pingback.eventId,
            bkt: this.pingback.bkt,
            area: this.pingback.area,
            albumList: t.join(','),
            source: e.join(',')
          })
        },
        videoClick: function (t, e) {
          (Object(l['o']) ({
            cid: this.channelId,
            aid: this.albumId,
            tvid: t.qipuId,
            eventId: this.pingback.eventId,
            bkt: this.pingback.bkt,
            area: this.pingback.area,
            rank: e,
            taid: t.id || t.aid,
            tcid: t.cid,
            source: t.source
          }), location.href = t.pageUrl)
        }
      }
    },
    f = h,
    m = n('2877'),
    v = Object(m['a']) (f, i, r, !1, null, null, null);
    e['a'] = v.exports
  },
  d409: function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return h
    });
    n('d92a');
    var i = n('d225'),
    r = n('b0b4'),
    a = n('308d'),
    o = n('6bb5'),
    s = n('4e2b'),
    c = n('24d6'),
    u = 'up',
    l = 'down',
    d = 'right',
    p = 'left',
    h = function (t) {
      function e() {
        var t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        };
        return Object(i['a']) (this, e),
        t = Object(a['a']) (this, Object(o['a']) (e).call(this)),
        t.threshold = n.threshold || 4,
        t.startY = 0,
        t.startX = 0,
        t.ticking = !1,
        t
      }
      return Object(s['a']) (e, t),
      Object(r['a']) (e, [
        {
          key: 'unbind',
          value: function (t) {
            t.removeEventListener('touchstart', this.onTouchStart.bind(this)),
            t.removeEventListener('touchmove', this.onTouchMove.bind(this))
          }
        },
        {
          key: 'bind',
          value: function (t) {
            t.addEventListener('touchstart', this.onTouchStart.bind(this)),
            t.addEventListener('touchmove', this.onTouchMove.bind(this))
          }
        },
        {
          key: 'onTouchStart',
          value: function (t) {
            this.startY = t.targetTouches[0].pageY,
            this.startX = t.targetTouches[0].pageX
          }
        },
        {
          key: 'onTouchMove',
          value: function (t) {
            var e = this;
            this.ticking || (requestAnimationFrame(function () {
              var n = t.targetTouches[0].pageY - e.startY,
              i = t.targetTouches[0].pageX - e.startX;
              e.getGesture(i, n),
              e.ticking = !1
            }), this.ticking = !0)
          }
        },
        {
          key: 'getGesture',
          value: function (t, e) {
            var n = '',
            i = Math.abs(e),
            r = Math.abs(t);
            n = i > r ? i > this.threshold ? e > 0 ? l : u : '' : r > this.threshold ? t > 0 ? d : p : '',
            n && this.trigger(n)
          }
        }
      ]),
      e
    }(c['a'])
  },
  d4db: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return t.init ? n('ModalEvent', {
        staticClass: 'm-video-info-fixed',
        class : [
          t.open ? t.layerClass : 'am-video-info-close',
          t.popClass,
          t.layerInfo
        ],
        style: {
          height: t.height + 'px',
          overflow: 'scroll'
        },
        on: {
          'document:touchstart': function (e) {
            t.modal && t.close()
          }
        }
      }, [
        t._t('close', [
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.closeRseat,
                expression: 'closeRseat'
              }
            ],
            class : t.closeBtn ? t.closeBtn : 'close-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              touchstart: function (e) {
                return e.stopPropagation(),
                t.close(e)
              },
              click: t.close
            }
          }, [
            n('i', {
              class : t.closeIcon ? t.closeIcon : 'c-glyphicon c-glyphicon-guideClose'
            })
          ])
        ]),
        t._t('content')
      ], 2)  : t._e()
    },
    r = [
    ],
    a = (n('d92a'), n('c5f6'), n('3853')),
    o = n('8296'),
    s = {
      name: 'PlayInfoLayer',
      components: {
        ModalEvent: a['a']
      },
      props: {
        open: {
          type: Boolean,
        default:
          !1
        },
        modal: {
          type: Boolean,
        default:
          !0
        },
        noheader: {
          type: Boolean,
        default:
          !0
        },
        closeRseat: {
          type: String,
        default:
          ''
        },
        popClass: {
          type: String,
        default:
          'm-episode-pop'
        },
        layerInfo: {
          type: String,
        default:
          ''
        },
        associatedId: {
          type: Number,
        default:
          0
        },
        closeBtn: {
          type: String,
        default:
          ''
        },
        closeIcon: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          layerClass: this.noheader ? 'am-video-info-ios-show' : 'am-video-info-android-show',
          init: !1,
          height: 1000,
          offsetTop: 0,
          HeightDone: !0
        }
      },
      watch: {
        open: function (t, e) {
          this.init = !!t,
          this.$store.commit('play/setLayerOpen', t),
          Object(o['P']) (t),
          t ? (this.updateHeight(), this.updateLayerId(this.associatedId))  : this.offsetTop = 0
        },
        associatedId: function (t, e) {
          this.updateLayerId(t)
        }
      },
      mounted: function () {
        window.addEventListener('resize', this.updateHeight)
      },
      destroyed: function () {
        window.removeEventListener('resize', this.updateHeight)
      },
      methods: {
        close: function (t) {
          var e = this;
          setTimeout(function () {
            e.$emit('update:open', !1)
          }, 300)
        },
        updateHeight: function () {
          setTimeout(function t() {
            if (this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this.offsetTop !== this.$el.offsetTop || this.viewportHeight < this.$el.offsetTop) return this.offsetTop = this.$el.offsetTop,
            setTimeout(t.bind(this), 200);
            this.height = this.viewportHeight - this.$el.offsetTop
          }.bind(this), 100)
        },
        updateLayerId: function (t) {
          t && this.$store.commit('play/setLayerId', t)
        }
      }
    },
    c = s,
    u = n('2877'),
    l = Object(u['a']) (c, i, r, !1, null, null, null);
    e['a'] = l.exports
  },
  d7dd: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        n('section', {
          staticClass: 'g-tab-num'
        }, [
          n('div', {
            staticClass: 'm-tab-num-title'
          }, [
            n('span', {
              domProps: {
                innerHTML: t._s(t.year)
              }
            }),
            t._v('年\n    ')
          ]),
          n('VideoTabScroll', {
            staticClass: 'm-tab-num m-sliding',
            attrs: {
              'list-length': t.summarys.length,
              'scroll-x': !0
            },
            on: {
              scrollToIndex: t.changeYear
            }
          }, [
            n('div', {
              staticClass: 'm-tab-num-list m-sliding-list'
            }, t._l(t.summarys, function (e, i) {
              return n('span', {
                key: i,
                class : [
                  'c-tab-item',
                  {
                    selected: '' + e.year + e.month == t.curDate
                  }
                ],
                on: {
                  click: function (e) {
                    return t.changeTab(i)
                  }
                }
              }, [
                t._v(t._s(e.month) + '月')
              ])
            }), 0)
          ])
        ], 1)
      ])
    },
    r = [
    ],
    a = (n('ac6a'), n('f3e2'), n('a745')),
    o = n.n(a),
    s = n('1d21'),
    c = {
      name: 'VideoSourceTabs',
      components: {
        VideoTabScroll: s['a']
      },
      props: {
        formatSummary: {
          type: [
            Array,
            String
          ],
        default:
          function () {
            return []
          }
        },
        summaryInfo: {
          type: [
            Array,
            String
          ],
        default:
          function () {
            return []
          }
        },
        curYear: {
          type: String,
        default:
          ''
        },
        curMonth: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          year: this.curYear,
          curDate: ''.concat(this.curYear).concat(this.curMonth)
        }
      },
      computed: {
        summarys: function () {
          if (this.formatSummary.length) return this.formatSummary;
          var t = [
          ];
          return o() (this.summaryInfo) && this.summaryInfo.forEach(function (e) {
            e.monthList.forEach(function (n) {
              t.push({
                year: e.year,
                month: n
              })
            })
          }),
          t
        }
      },
      methods: {
        changeTab: function (t) {
          var e = this.summarys[t];
          this.curDate = ''.concat(e.year).concat(e.month),
          this.changeYear(t),
          this.$emit('changeTab', e)
        },
        changeYear: function (t) {
          this.year = this.summarys[t].year
        }
      }
    },
    u = c,
    l = n('2877'),
    d = Object(l['a']) (u, i, r, !1, null, null, null);
    e['a'] = d.exports
  },
  da1f: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'root',
        staticClass: 'm-box-items m-box-items-full'
      }, [
        n('section', {
          staticClass: 'm-loading-info'
        }, [
          n('div', {
            staticClass: 'c-info'
          }, [
            t.loadComplete ? t._t('complete', [
              t._v('没有更多了')
            ])  : t.error ? t._t('error', [
              t._v('\n        数据加载失败，请\n        '),
              n('a', {
                staticClass: 'c-green',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: t.refresh
                }
              }, [
                t._v('点击刷新')
              ]),
              t._v('\n        重试\n      ')
            ])  : t._t('loading', [
              t._v('爱奇艺努力加载中... ')
            ])
          ], 2)
        ])
      ])
    },
    r = [
    ],
    a = (n('d92a'), n('96cf'), n('3b8d')),
    o = n('4e77'),
    s = {
      name: 'LoadBottom',
      props: {
        callback: {
          type: Function,
        default:
          null
        },
        loadComplete: {
          type: Boolean,
        default:
          !1
        },
        load: {
          type: Boolean,
        default:
          !1
        },
        container: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          error: !1,
          errorNum: 0,
          maxError: 3,
          loading: !1,
          scrollBottom: function () {
          }
        }
      },
      watch: {
        load: function (t) {
          this.initLoad()
        },
        loadComplete: function (t) {
          var e = this;
          t ? this.scrollBottom()  : this.scrollBottom = c.call(this, function () {
            return e.loadData()
          })
        }
      },
      mounted: function () {
        var t = this;
        !this.loadComplete && this.callback && (this.container && (this.containerNode = document.querySelector('#'.concat(this.container)) || this.$el.parentNode), this.initLoad(), this.scrollBottom = c.call(this, function () {
          return t.loadData()
        }))
      },
      destroyed: function () {
        this.scrollBottom()
      },
      methods: {
        refresh: function () {
          this.loadData()
        },
        initLoad: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (!this.load || !u.apply(this)) {
                    t.next = 3;
                    break
                  }
                  return t.next = 3,
                  this.loadData();
                case 3:
                  this.$emit('update:load', !1);
                case 4:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }(),
        loadData: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e,
            n = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (e = this.$refs.root && this.$refs.root.offsetHeight, !this.loading && e) {
                    t.next = 3;
                    break
                  }
                  return t.abrupt('return');
                case 3:
                  return this.loading = !0,
                  this.error = !1,
                  t.abrupt('return', this.callback().then(function () {
                    n.errorNum = 0
                  }).catch (function () {
                    n.error = !0,
                    n.errorNum++,
                    n.$emit('loadFailure')
                  }).finally (Object(a['a']) (regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      while (1) switch (t.prev = t.next) {
                        case 0:
                          if (n.loading = !1, !(n.errorNum > n.maxError)) {
                            t.next = 3;
                            break
                          }
                          return t.abrupt('return');
                        case 3:
                          if (!u.apply(n) || n.loadComplete) {
                            t.next = 6;
                            break
                          }
                          return t.next = 6,
                          n.initLoad();
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                    },
                    t)
                  })))); case 6:
                case 'end':
                  return t.stop()
                }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }()
      }
    };
    function c(t) {
      var e = l.bind(this, t);
      return this.container ? this.containerNode.addEventListener('scroll', e)  : Object(o['e']) (e),
      function () {
        Object(o['h']) (e)
      }
    }
    function u() {
      if (this.container) {
        var t = this.containerNode;
        return t.scrollTop + t.offsetHeight >= t.scrollHeight - 50
      }
      return window.scrollY + window.screen.height >= document.documentElement.offsetHeight - 200
    }
    function l(t) {
      u.apply(this) && t()
    }
    var d = s,
    p = n('2877'),
    h = Object(p['a']) (d, i, r, !1, null, null, null);
    e['a'] = h.exports
  },
  dbce: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('section', {
        ref: 'root',
        style: {
          height: t.height + 'px'
        }
      }, [
        n('div', {
          ref: 'layer'
        }, [
          t._t('default')
        ], 2)
      ])
    },
    r = [
    ],
    a = (n('6762'), n('2fdb'), n('7514'), n('774e')),
    o = n.n(a),
    s = (n('c5f6'), n('8296')),
    c = n('1fba'),
    u = {
      name: 'PlayPositionLayer',
      props: {
        curPage: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          height: 0,
          scroll: null
        }
      },
      watch: {
        curPage: function (t, e) {
          t !== e && this.scroll && this.scroll.refresh()
        }
      },
      mounted: function () {
        var t = this;
        this.updateHeight(),
        this.$nextTick(function () {
          this.initScroll()
        }),
        this.actionForSafari(function () {
          window.addEventListener('resize', t.updateHeight)
        })
      },
      destroyed: function () {
        var t = this;
        this.scroll = null,
        this.actionForSafari(function () {
          window.removeEventListener('resize', t.updateHeight)
        })
      },
      methods: {
        initScroll: function () {
          var t = this.$refs.root;
          this.scroll = new c['a'](t, {
            scrollY: !0,
            click: !0
          }),
          this.scrollToElement()
        },
        scrollToElement: function () {
          var t = this.$refs.layer;
          if (t) {
            var e = null,
            n = o() (t.children);
            n.find(function (t, n) {
              Array.prototype.includes.call(t.classList, 'selected') && (e = t)
            }),
            e && this.scroll.scrollToElement(e, 0, !0, !0)
          }
        },
        updateHeight: function () {
          var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          e = document.getElementById('video'),
          n = e && e.parentNode.clientHeight;
          this.height = t - n - this.$el.offsetTop
        },
        actionForSafari: function (t) {
          s['i'].safari && t && t()
        }
      }
    },
    l = u,
    d = n('2877'),
    p = Object(d['a']) (l, i, r, !1, null, null, null);
    e['a'] = p.exports
  },
  dbfb: function (t, e, n) {
    e = t.exports = n('2350') (!1),
    e.push([t.i,
    '.h-popup-slide-top-enter[data-v-2edf3d91],.h-popup-slide-top-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.h-popup-slide-right-enter[data-v-2edf3d91],.h-popup-slide-right-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.h-popup-slide-bottom-enter[data-v-2edf3d91],.h-popup-slide-bottom-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.h-popup-slide-left-enter[data-v-2edf3d91],.h-popup-slide-left-leave-active[data-v-2edf3d91]{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}',
    ''])
  },
  dd38: function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return h
    }),
    n.d(e, 'b', function () {
      return f
    }),
    n.d(e, 'd', function () {
      return b
    }),
    n.d(e, 'c', function () {
      return w
    });
    var i = n('795b'),
    r = n.n(i),
    a = (n('96cf'), n('57e7'), n('7f7f'), n('0cd8'), n('6d67'), n('3b8d')),
    o = n('936f'),
    s = n('b383'),
    c = n('8296'),
    u = n('5191'),
    l = n('b0a3'),
    d = n('11ad'),
    p = n('2c06'),
    h = '3',
    f = '4',
    m = 'https://passport.iqiyi.com/apis/phone/get_support_areacode.action?smart',
    v = '';
    function b(t) {
      return g.apply(this, arguments)
    }
    function g() {
      return g = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a,
        c,
        l;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (v = e.useCase, n = C(), !n || !n.list) {
                t.next = 4;
                break
              }
              return t.abrupt('return', r.a.resolve(n));
            case 4:
              return t.next = 6,
              Object(u['b']) ();
            case 6:
              return t.t0 = t.sent,
              t.t1 = d['p'],
              t.t2 = Object(p['s']) (),
              t.t3 = j() ? 'zh_TW' : 'zh_CN',
              t.t4 = e.useCase,
              i = {
                local: 1,
                dfp: t.t0,
                ptid: t.t1,
                agenttype: t.t2,
                lang: t.t3,
                use_case: t.t4
              },
              t.next = 14,
              o['a'].postCache(m, Object(s['stringify']) (i), {
                timeout: 500
              }, {
                qStore: {
                  id: O()
                }
              }).catch (function () {
                return _()
              });
            case 14:
              return a = t.sent,
              c = a && a.data,
              c && 'A00000' === c.code ? (c = y(c.data), x({
                list: c
              }))  : c = _(),
              l = {
                list: c
              },
              t.abrupt('return', l);
            case 19:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), g.apply(this, arguments)
    }
    function y(t) {
      var e = t.areas || [
      ],
      n = t.local;
      return e.map(function (t) {
        return t = t.value[0],
        t.selected = t.acode === n.acode ? 'selected' : '',
        t
      })
    }
    function w(t) {
      var e = C(),
      n = e && e.list;
      return n = n || [
      ],
      t = t || '86',
      n.reduce(function (e, n) {
        return String(n.acode) === t ? n.name : e
      }, '')
    }
    function _() {
      var t = [
      ];
      return t = j() ? [
        new k('中國大陸', 'Z', 48, 86),
        new k('台灣地區', 'T', 228, 886),
        new k('香港地區', 'X', 95, 852),
        new k('澳門地區', 'A', 148, 853)
      ] : [
        new k('中国大陆', 'Z', 48, 86),
        new k('台湾地区', 'T', 228, 886),
        new k('香港地区', 'X', 95, 852),
        new k('澳门地区', 'A', 148, 853)
      ],
      t[0].selected = 'selected',
      t
    }
    function k(t, e, n, i) {
      this.name = t,
      this.init = e,
      this.rcode = n,
      this.acode = i
    }
    function x(t) {
      c['B'].setItem(O(), t)
    }
    function C() {
      return c['B'].getItem(O())
    }
    function O() {
      return j() ? 'tw_area_'.concat(v)  : 'cn_area_'.concat(v)
    }
    function j() {
      return Object(l['c']) ().indexOf('tw') > - 1
    }
  },
  dfb9: function (t, e, n) {
    'use strict';
    n('96cf');
    var i = n('3b8d'),
    r = (n('7514'), n('0cd8'), n('ac6a'), n('f3e2'), n('8296')),
    a = n('b2e7'),
    o = n('1533'),
    s = n('6f18');
    e['a'] = {
      props: {
        feature: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          likeData: {
          },
          commentData: {
          },
          subUserData: {
          },
          subVideoData: {
          },
          favVideoData: {
          }
        }
      },
      beforeMount: function () {
        this.uid = + Object(a['C']) ()
      },
      methods: {
        getFeatures: function (t) {
          var e = this;
          this.feature.forEach(function (n) {
            e['get'.concat(Object(r['Q']) (n))] && e['get'.concat(Object(r['Q']) (n))](t)
          })
        },
        getSubUser: function (t) {
          var e = this;
          if (t && Object(a['M']) ()) {
            var n = t.reduce(function (t, e) {
              return e.authedSelfMedia && t.push(e.uid),
              t
            }, [
            ]);
            return Object(o['d']) (this.uid, n).then(function (i) {
              if (i && i.data) {
                var r = {
                };
                n.forEach(function (t) {
                  r[t] = !!i.data.find(function (e) {
                    return e.fuid === + t
                  })
                }),
                t.forEach(function (t) {
                  e.subUserData[t.uid] ? e.subUserData[t.uid].isSubed = r[t.uid] : e.subUserData[t.uid] = {
                    isSubed: r[t.uid]
                  },
                  e.$set(t, 'subUser', e.subUserData[t.uid])
                })
              }
            })
          }
        },
        getSubVideo: function () {
          var t = Object(i['a']) (regeneratorRuntime.mark(function t(e) {
            var n,
            i,
            r,
            a = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (n = e.reduce(function (t, e) {
                    return e && t.push(e.qipuId || e.albumId),
                    t
                  }, [
                  ]).join(','), !n) {
                    t.next = 7;
                    break
                  }
                  return t.next = 4,
                  Object(s['d']) ({
                    subKeys: n
                  });
                case 4:
                  i = t.sent,
                  r = i.data,
                  e.forEach(function (t) {
                    if (t) {
                      var e = t.fatherVideo && t.fatherVideo.qipuId || t.qipuId,
                      n = r ? r[t.qipuId] : {
                      };
                      a.subUserData[e] ? (a.subUserData[e].isSubed = n.state, a.subUserData[e].count = n.count)  : a.subUserData[e] = {
                        isSubed: n.state,
                        count: n.count
                      },
                      a.$set(t, 'subVideo', a.subUserData[e])
                    }
                  });
                case 7:
                case 'end':
                  return t.stop()
              }
            },
            t)
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }()
      }
    }
  },
  e4ab: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('iframe', {
        staticStyle: {
          'min-width': '100%',
          width: '100px',
          'min-height': '600px'
        },
        attrs: {
          id: 'iframe',
          height: t.height + 'px',
          src: t.src,
          width: '100%',
          scrolling: 'no',
          frameborder: '0'
        }
      })
    },
    r = [
    ],
    a = {
      name: 'CommonIframe',
      props: {
        src: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          height: ''
        }
      },
      beforeMount: function () {
        document.domain = 'iqiyi.com',
        window.resetIframeHeight = this.resetIframeHeight
      },
      mounted: function () {
        this.refreshHeight()
      },
      activated: function () {
        this.resetIframeHeight()
      },
      methods: {
        refreshHeight: function () {
          var t = this;
          this.resetIframeHeight(),
          document.getElementById('iframe').addEventListener('load', function () {
            return t.resetIframeHeight()
          })
        },
        resetIframeHeight: function (t) {
          if (!t) {
            var e = document.getElementById('iframe'),
            n = e.contentWindow || e.contentDocument.parentWindow,
            i = n.document;
            if (!i.body) return;
            t = i.documentElement.offsetHeight || i.body.offsetHeight,
            t && (this.height = t)
          }
          t && (this.height = t)
        }
      }
    },
    o = a,
    s = n('2877'),
    c = Object(s['a']) (o, i, r, !1, null, null, null);
    e['a'] = c.exports
  },
  e7f9: function (t, e, n) {
    'use strict';
    function i(t, e) {
      return e = {
        exports: {
        }
      },
      t(e, e.exports),
      e.exports
    }
    var r = i(function (t) {
      function e() {
        return t.exports = e = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
          }
          return t
        },
        e.apply(this, arguments)
      }
      t.exports = e
    }),
    a = i(function (t) {
      var e = function (t) {
        var e,
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = 'function' === typeof Symbol ? Symbol : {
        },
        a = r.iterator || '@@iterator',
        o = r.asyncIterator || '@@asyncIterator',
        s = r.toStringTag || '@@toStringTag';
        function c(t, e, n, i) {
          var r = e && e.prototype instanceof m ? e : m,
          a = Object.create(r.prototype),
          o = new S(i || [
          ]);
          return a._invoke = C(t, n, o),
          a
        }
        function u(t, e, n) {
          try {
            return {
              type: 'normal',
              arg: t.call(e, n)
            }
          } catch (i) {
            return {
              type: 'throw',
              arg: i
            }
          }
        }
        t.wrap = c;
        var l = 'suspendedStart',
        d = 'suspendedYield',
        p = 'executing',
        h = 'completed',
        f = {
        };
        function m() {
        }
        function v() {
        }
        function b() {
        }
        var g = {
        };
        g[a] = function () {
          return this
        };
        var y = Object.getPrototypeOf,
        w = y && y(y(T([])));
        w && w !== n && i.call(w, a) && (g = w);
        var _ = b.prototype = m.prototype = Object.create(g);
        function k(t) {
          [
            'next',
            'throw',
            'return'
          ].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t)
            }
          })
        }
        function x(t) {
          function e(n, r, a, o) {
            var s = u(t[n], t, r);
            if ('throw' !== s.type) {
              var c = s.arg,
              l = c.value;
              return l && 'object' === typeof l && i.call(l, '__await') ? Promise.resolve(l.__await).then(function (t) {
                e('next', t, a, o)
              }, function (t) {
                e('throw', t, a, o)
              })  : Promise.resolve(l).then(function (t) {
                c.value = t,
                a(c)
              }, function (t) {
                return e('throw', t, a, o)
              })
            }
            o(s.arg)
          }
          var n;
          function r(t, i) {
            function r() {
              return new Promise(function (n, r) {
                e(t, i, n, r)
              })
            }
            return n = n ? n.then(r, r)  : r()
          }
          this._invoke = r
        }
        function C(t, e, n) {
          var i = l;
          return function (r, a) {
            if (i === p) throw new Error('Generator is already running');
            if (i === h) {
              if ('throw' === r) throw a;
              return E()
            }
            n.method = r,
            n.arg = a;
            while (1) {
              var o = n.delegate;
              if (o) {
                var s = O(o, n);
                if (s) {
                  if (s === f) continue;
                  return s
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
               else if ('throw' === n.method) {
                if (i === l) throw i = h,
                n.arg;
                n.dispatchException(n.arg)
              } else 'return' === n.method && n.abrupt('return', n.arg);
              i = p;
              var c = u(t, e, n);
              if ('normal' === c.type) {
                if (i = n.done ? h : d, c.arg === f) continue;
                return {
                  value: c.arg,
                  done: n.done
                }
              }
              'throw' === c.type && (i = h, n.method = 'throw', n.arg = c.arg)
            }
          }
        }
        function O(t, n) {
          var i = t.iterator[n.method];
          if (i === e) {
            if (n.delegate = null, 'throw' === n.method) {
              if (t.iterator['return'] && (n.method = 'return', n.arg = e, O(t, n), 'throw' === n.method)) return f;
              n.method = 'throw',
              n.arg = new TypeError('The iterator does not provide a \'throw\' method')
            }
            return f
          }
          var r = u(i, t.iterator, n.arg);
          if ('throw' === r.type) return n.method = 'throw',
          n.arg = r.arg,
          n.delegate = null,
          f;
          var a = r.arg;
          return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, 'return' !== n.method && (n.method = 'next', n.arg = e), n.delegate = null, f)  : a : (n.method = 'throw', n.arg = new TypeError('iterator result is not an object'), n.delegate = null, f)
        }
        function j(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]),
          2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
          this.tryEntries.push(e)
        }
        function I(t) {
          var e = t.completion || {
          };
          e.type = 'normal',
          delete e.arg,
          t.completion = e
        }
        function S(t) {
          this.tryEntries = [
            {
              tryLoc: 'root'
            }
          ],
          t.forEach(j, this),
          this.reset(!0)
        }
        function T(t) {
          if (t) {
            var n = t[a];
            if (n) return n.call(t);
            if ('function' === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = - 1,
              o = function n() {
                while (++r < t.length) if (i.call(t, r)) return n.value = t[r],
                n.done = !1,
                n;
                return n.value = e,
                n.done = !0,
                n
              };
              return o.next = o
            }
          }
          return {
            next: E
          }
        }
        function E() {
          return {
            value: e,
            done: !0
          }
        }
        return v.prototype = _.constructor = b,
        b.constructor = v,
        b[s] = v.displayName = 'GeneratorFunction',
        t.isGeneratorFunction = function (t) {
          var e = 'function' === typeof t && t.constructor;
          return !!e && (e === v || 'GeneratorFunction' === (e.displayName || e.name))
        },
        t.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, b)  : (t.__proto__ = b, s in t || (t[s] = 'GeneratorFunction')),
          t.prototype = Object.create(_),
          t
        },
        t.awrap = function (t) {
          return {
            __await: t
          }
        },
        k(x.prototype),
        x.prototype[o] = function () {
          return this
        },
        t.AsyncIterator = x,
        t.async = function (e, n, i, r) {
          var a = new x(c(e, n, i, r));
          return t.isGeneratorFunction(n) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next()
          })
        },
        k(_),
        _[s] = 'Generator',
        _[a] = function () {
          return this
        },
        _.toString = function () {
          return '[object Generator]'
        },
        t.keys = function (t) {
          var e = [
          ];
          for (var n in t) e.push(n);
          return e.reverse(),
          function n() {
            while (e.length) {
              var i = e.pop();
              if (i in t) return n.value = i,
              n.done = !1,
              n
            }
            return n.done = !0,
            n
          }
        },
        t.values = T,
        S.prototype = {
          constructor: S,
          reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach(I), !t) for (var n in this) 't' === n.charAt(0) && i.call(this, n) && !isNaN( + n.slice(1)) && (this[n] = e)
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0],
            e = t.completion;
            if ('throw' === e.type) throw e.arg;
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function r(i, r) {
              return s.type = 'throw',
              s.arg = t,
              n.next = i,
              r && (n.method = 'next', n.arg = e),
              !!r
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
              s = o.completion;
              if ('root' === o.tryLoc) return r('end');
              if (o.tryLoc <= this.prev) {
                var c = i.call(o, 'catchLoc'),
                u = i.call(o, 'finallyLoc');
                if (c && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                } else if (c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                } else {
                  if (!u) throw new Error('try statement without catch or finally');
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                var a = r;
                break
              }
            }
            a && ('break' === t || 'continue' === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
            var o = a ? a.completion : {
            };
            return o.type = t,
            o.arg = e,
            a ? (this.method = 'next', this.next = a.finallyLoc, f)  : this.complete(o)
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg;
            return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end')  : 'normal' === t.type && e && (this.next = e),
            f
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
              I(n),
              f
            }
          },
          catch : function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var i = n.completion;
                if ('throw' === i.type) {
                  var r = i.arg;
                  I(n)
                }
                return r
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, n, i) {
            return this.delegate = {
              iterator: T(t),
              resultName: n,
              nextLoc: i
            },
            'next' === this.method && (this.arg = e),
            f
          }
        },
        t
      }(t.exports);
      try {
        regeneratorRuntime = e
      } catch (n) {
        Function('r', 'regeneratorRuntime = r') (e)
      }
    }),
    o = a;
    function s(t, e, n, i, r, a, o) {
      try {
        var s = t[a](o),
        c = s.value
      } catch (u) {
        return void n(u)
      }
      s.done ? e(c)  : Promise.resolve(c).then(i, r)
    }
    function c(t) {
      return function () {
        var e = this,
        n = arguments;
        return new Promise(function (i, r) {
          var a = t.apply(e, n);
          function o(t) {
            s(a, i, r, o, c, 'next', t)
          }
          function c(t) {
            s(a, i, r, o, c, 'throw', t)
          }
          o(void 0)
        })
      }
    }
    var u = c,
    l = {
      iqiyi: function () {
        return !!navigator.userAgent.match(/iqiyi\s*IqiyiVersion\/([\d.]+)/i)
      },
      zhishi: function () {
        return !!navigator.userAgent.match(/knowledge\s*KnowledgeVersion\/([\d.]+)/i)
      },
      chrome: function () {
        return !!navigator.userAgent.match(/Chrome\/([\d.]+)/) || !!navigator.userAgent.match(/CriOS\/([\d.]+)/)
      },
      android: function () {
        return !!navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
      },
      iOS: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      },
      iOSEgt9: function () {
        return this.iOS() && /OS (\d+)/i.exec(navigator.userAgent) [1] >= 9
      },
      iphoneX: function () {
        return 'undefined' !== typeof window && (/iphone/gi.test(navigator.userAgent) && window.screen.height >= 812)
      },
      vivo: function () {
        return !!navigator.userAgent.match(/vivo (\w+) /i)
      },
      qq: function () {
        return !!navigator.userAgent.match(/(QQBrowser)\/([\d.]+)/)
      },
      uc: function () {
        return !!navigator.userAgent.match(/UCBrowser/i)
      },
      baidu: function () {
        return !!navigator.userAgent.match(/baidu/i)
      },
      wechat: function () {
        return /MicroMessenger/.test(navigator.userAgent)
      }
    },
    d = {
      IQIYI: 'iqiyi',
      KNOWLEDGE: 'knowledge'
    },
    p = {
      ANDROID: 'com.iqiyi.knowledge',
      IOS: 'knowledge://mobile/register_business/com_iqiyi_knowledge'
    },
    h = {
      zhishiOtaLink: '//ota.iqiyi.com/f4.jsp?url=zhishi_h5',
      zhishiLink: '//zhishi.iqiyi.com/kpp/download/index.html',
      iqiyiLink: '//www.iqiyi.com/app/register_business/index.html',
      zhishiQQLink: '//a.app.qq.com/o/simple.jsp?pkgname=com.iqiyi.knowledge',
      iqiyiQQLink: '//a.app.qq.com/o/simple.jsp?pkgname=com.qiyi.video',
      iqiyiULink: '//www.iqiyi.com/app/register_business/index.html',
      zhishiULink: '//www.iqiyi.com/knowledge/ulink/register_business/index.html'
    };
    function f() {
      return new Promise(function (t, e) {
        'undefined' !== typeof iqiyi ? iqiyi.ready(function (n) {
          n ? t()  : e(new Error('initIqy error: iqiyi.ready'))
        })  : e(new Error('initIqy error: iqiyi not found, please detect iqiyi sdk has been installed!'))
      })
    }
    var m = {
      ANDROID: 'com.iqiyi.knowledge',
      IOS: 'knowledge://mobile/register_business/com_iqiyi_knowledge'
    },
    v = function () {
      function t() {
        this.isInstalled = !1
      }
      var e = t.prototype;
      return e.is = function () {
        var t = u(o.mark(function t() {
          var e,
          n = this;
          return o.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                if ('undefined' !== typeof iqiyi) {
                  t.next = 2;
                  break
                }
                return t.abrupt('return', Promise.reject(new Error('isAppInstalled error: iqiyi not found, please detect iqiyi sdk has been installed!')));
              case 2:
                if (!this.isInstalled) {
                  t.next = 4;
                  break
                }
                return t.abrupt('return', !0);
              case 4:
                return e = m.ANDROID,
                l.iOS() && (e = m.IOS),
                t.next = 8,
                f();
              case 8:
                return t.abrupt('return', new Promise(function (t, i) {
                  iqiyi.checkStatusApp({
                    scheme: e
                  }, function (e) {
                    l.iOS() ? n.isInstalled = e.result : n.isInstalled = e.data.appinstallstatus,
                    t(n.isInstalled)
                  })
                }));
              case 9:
              case 'end':
                return t.stop()
            }
          },
          t,
          this)
        })); function e() {
          return t.apply(this, arguments)
        }
        return e
      }(),
      t
    }(),
    b = new v,
    g = function (t) {
      return new Promise(function (e) {
        setTimeout(function () {
          e()
        }, t)
      })
    },
    y = {
      app: {
        bizId: 1400,
        bizSub: {
          category: 1,
          column: 7,
          discovery: 2,
          coupon_center: 18,
          category_filter: 20,
          category_all: 21,
          learning: 2,
          package: 26,
          lecturer: 15,
          set_meal_payment: 205,
          column_refresh: 204
        }
      },
      plugin: {
        bizId: 14,
        bizSub: {
          category: 12,
          column: 7,
          discovery: 2,
          coupon_center: 18,
          category_filter: 20,
          category_all: 21,
          user_favor: 3,
          package: 26,
          lecturer: 15,
          set_meal_payment: 205,
          column_refresh: 204
        }
      }
    },
    w = {
      getBizStr: function (t) {
        var e = t.schema,
        n = t.type;
        if (!n) throw new Error('getBizStr error: config type not set');
        if (!e) throw new Error('getBizStr error: config schema not set');
        var i = {
          biz_params: '',
          biz_extend_params: '',
          biz_dynamic_params: t.dynamic || '',
          biz_statistics: t.statistics || ''
        },
        r = y.app,
        a = r.bizSub,
        o = r.bizId,
        s = a.category;
        return 'iqiyi' === e && (a = y.plugin.bizSub, o = y.plugin.bizId, s = a.category),
        Object.hasOwnProperty.call(a, n) ? i.biz_sub_id = a[n] : i.biz_sub_id = s,
        JSON.stringify({
          biz_id: o,
          biz_plugin: p.ANDROID,
          biz_params: i
        })
      },
      getAppSchemaURL: function (t) {
        return 'knowledge://mobile/register_business/com_iqiyi_knowledge?pluginParams=' + encodeURIComponent(encodeURIComponent(t))
      },
      getPluginSchemaURL: function (t) {
        return 'iqiyi://mobile/register_business/com_iqiyi_knowledge?pluginParams=' + encodeURIComponent(encodeURIComponent(t))
      },
      getUniversalURL: function (t, e) {
        var n = h.zhishiULink;
        return 'iqiyi' === t && (n = h.iqiyiULink),
        e ? n + '?pluginParams=' + encodeURIComponent(encodeURIComponent(e))  : n
      },
      getBrowserSchemaURL: function (t, e) {
        var n = h.zhishiQQLink,
        i = this.getAppSchemaURL(t);
        return 'iqiyi' === e && (n = h.iqiyiQQLink, i = this.getPluginSchemaURL(t)),
        l.wechat() ? n + '&android_schema=' + encodeURIComponent(i)  : i
      },
      asyncOpenLink: function () {
        var t = u(o.mark(function t(e) {
          var n,
          i;
          return o.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                if (n = 3000, l.iOS() && !l.iOSEgt9() && (n = 5000), !(l.chrome() || l.iOSEgt9() || l.wechat())) {
                  t.next = 8;
                  break
                }
                return t.next = 5,
                g(200);
              case 5:
                window.location.href = e,
                t.next = 9;
                break;
              case 8:
                this.openWithFrame(e);
              case 9:
                return t.next = 11,
                g(n);
              case 11:
                if (i = document.hidden || document.webkitHidden, i) {
                  t.next = 14;
                  break
                }
                return t.abrupt('return', Promise.reject());
              case 14:
                return t.abrupt('return', Promise.resolve());
              case 15:
              case 'end':
                return t.stop()
            }
          },
          t,
          this)
        })); function e(e) {
          return t.apply(this, arguments)
        }
        return e
      }(),
      download: function (t, e) {
        void 0 === t && (t = d.KNOWLEDGE),
        void 0 === e && (e = !1);
        var n = h.iqiyiLink;
        t === d.KNOWLEDGE && (n = e ? h.zhishiOtaLink : h.zhishiLink),
        'string' === typeof e && (e.startsWith('http') || e.startsWith('//')) && (n = e),
        l.vivo() ? this.openWithFrame(n)  : location.href = n
      },
      openWithFrame: function (t) {
        var e = document.getElementById('open_app_iframe');
        e || (e = document.createElement('iframe'), e.id = 'open_app_iframe', e.classList.add('dn'), e.setAttribute('name', 'open_app_iframe'), document.body.appendChild(e)),
        e.setAttribute('src', t)
      },
      openWithBrowser: function (t, e, n) {
        var i = this;
        void 0 === t && (t = d.KNOWLEDGE),
        void 0 === n && (n = !1),
        this.asyncOpenLink(this.getBrowserSchemaURL(e, t)) ['catch'](function () {
          i.download(t, n)
        })
      },
      openWithRegistration: function (t, e) {
        l.iOS() ? location.href = t === d.KNOWLEDGE ? this.getUniversalURL(t, e)  : this.getPluginSchemaURL(e)  : location.href = t === d.KNOWLEDGE ? this.getAppSchemaURL(e)  : this.getPluginSchemaURL(e)
      },
      openWithUniversalLink: function (t, e) {
        location.href = this.getUniversalURL(t, e)
      }
    },
    _ = {
      prepare: function () {
        l.iqiyi() && b.is()
      },
      open: function () {
        var t = u(o.mark(function t(e) {
          var n,
          i,
          r;
          return o.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                if ('undefined' === typeof e.download && (e.download = !1), !l.zhishi()) {
                  t.next = 8;
                  break
                }
                if (e.schema = d.KNOWLEDGE, n = w.getBizStr(e), n) {
                  t.next = 6;
                  break
                }
                throw new Error('open error: detect app and reg type in app not support!');
              case 6:
                return w.openWithRegistration(e.schema, n),
                t.abrupt('return');
              case 8:
                if (!l.iqiyi()) {
                  t.next = 21;
                  break
                }
                if ('undefined' === typeof e.schema && (e.schema = d.IQIYI), e.schema !== d.IQIYI) {
                  t.next = 13;
                  break
                }
                return w.openWithRegistration(e.schema, w.getBizStr(e)),
                t.abrupt('return');
              case 13:
                return t.next = 15,
                b.is();
              case 15:
                if (i = t.sent, i) {
                  t.next = 19;
                  break
                }
                return l.android() ? w.download(d.KNOWLEDGE, e.download)  : w.openWithUniversalLink(d.KNOWLEDGE, ''),
                t.abrupt('return');
              case 19:
                return w.openWithRegistration(d.KNOWLEDGE, w.getBizStr(e)),
                t.abrupt('return');
              case 21:
                if (!e.link) {
                  t.next = 24;
                  break
                }
                return location.href = e.link,
                t.abrupt('return');
              case 24:
                if ('undefined' === typeof e.schema && (e.schema = d.KNOWLEDGE), r = w.getBizStr(e), !l.iOSEgt9()) {
                  t.next = 29;
                  break
                }
                return l.uc() ? w.openWithBrowser(e.schema, r, e.download)  : w.openWithUniversalLink(e.schema, r),
                t.abrupt('return');
              case 29:
                if (!l.baidu()) {
                  t.next = 32;
                  break
                }
                return w.download(e.schema, e.download),
                t.abrupt('return');
              case 32:
                w.openWithBrowser(e.schema, r, e.download);
              case 33:
              case 'end':
                return t.stop()
            }
          },
          t)
        })); function e(e) {
          return t.apply(this, arguments)
        }
        return e
      }(),
      openHomeInApp: function (t) {
        void 0 === t && (t = {
        }),
        this.open(r({
          schema: d.KNOWLEDGE,
          type: 'category'
        }, t))
      },
      openColumnInApp: function (t, e) {
        void 0 === e && (e = {
        }),
        this.open(r({
          schema: d.KNOWLEDGE,
          type: 'column',
          dynamic: 'id=' + t
        }, e))
      },
      openColumn: function (t, e) {
        void 0 === e && (e = {
        }),
        this.open(r({
          type: 'column',
          dynamic: 'id=' + t,
          link: '//zhishi.m.iqiyi.com/column?columnId=' + t
        }, e))
      }
    };
    e['a'] = _
  },
  e8eb: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        n('form', {
          ref: 'form',
          attrs: {
            action: t.formUrl,
            method: 'post',
            enctype: 'multipart/form-data',
            target: 'uploadIframe'
          }
        }, [
          n('input', {
            ref: 'pictureInput',
            staticClass: 'select-input',
            attrs: {
              name: t.inputName,
              type: 'file'
            },
            on: {
              change: t.onUpload
            }
          }),
          t._l(t.formItems, function (t) {
            return n('input', {
              key: t.id,
              staticStyle: {
                display: 'none'
              },
              attrs: {
                name: t.name
              },
              domProps: {
                value: t.value
              }
            })
          })
        ], 2),
        n('iframe', {
          ref: 'uploadIframe',
          staticStyle: {
            display: 'none'
          },
          attrs: {
            name: 'uploadIframe'
          },
          on: {
            load: t.onIframeLoad
          }
        })
      ])
    },
    r = [
    ],
    a = n('a4bb'),
    o = n.n(a),
    s = (n('6d67'), n('d92a'), n('96cf'), n('3b8d')),
    c = (n('c5f6'), {
      name: 'FileUpload',
      props: {
        upload: {
          type: Function,
        default:
          function () {
          }
        },
        timeout: {
          type: Number,
        default:
          10000
        },
        inputName: {
          type: String,
        default:
          ''
        },
        uploadCallbackName: {
          type: String,
        default:
          '__formUploadCallback'
        }
      },
      data: function () {
        return {
          formUrl: '',
          formItems: [
          ]
        }
      },
      methods: {
        onUpload: function () {
          var t = Object(s['a']) (regeneratorRuntime.mark(function t(e) {
            var n;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  try {
                    n = this.upload(e, this.createFormAjax.bind(this)),
                    n && this.$emit('loading', e)
                  } catch (i) {
                    this.$emit('failure', {
                      msg: i.message
                    })
                  }
                case 1:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        createFormAjax: function (t, e) {
          var n = this;
          window.document.domain = 'iqiyi.com',
          window[this.uploadCallbackName] = function (t) {
            delete window[n.uploadCallbackName],
            n.cleanup(),
            n.$emit('success', t)
          },
          this.formUrl = t,
          e.callback = this.uploadCallbackName,
          this.formItems = o() (e).map(function (t, n) {
            return {
              name: t,
              value: e[t],
              id: n + 1
            }
          }),
          this.$nextTick(function () {
            n.$refs.form.submit()
          }),
          this.timeout && (this.timer = setTimeout(function () {
            n.cleanup(),
            n.$emit('failure', {
              msg: '网络状况不佳，请稍后重试'
            })
          }, this.timeout))
        },
        cleanup: function () {
          clearTimeout(this.timer),
          this.$refs.pictureInput.value = ''
        },
        onIframeLoad: function (t) {
          try {
            if (t.target.contentDocument.body.innerHtml) return
          } catch (e) {
            this.cleanup(),
            this.$emit('failure', {
              msg: '网络状况不佳，请稍后重试'
            })
          }
        }
      }
    }), u = c, l = n('2877'), d = Object(l['a']) (u, i, r, !1, null, null, null); e['a'] = d.exports
  },
  eb20: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return l
    }),
    n.d(e, 'a', function () {
      return d
    });
    var i = n('cebc'),
    r = n('a8db'),
    a = n('e2a0'),
    o = n.n(a),
    s = n('5321'),
    c = n('c0ba'),
    u = n('8296');
    function l() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      e = t.sendShow,
      n = void 0 === e ? null : e,
      i = Object(r['a']) (t, [
        'sendShow'
      ]),
      a = new c['b'](function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        },
        i = e.block,
        r = e.callback || n || s['m'],
        a = e.isSend;
        i && !a && r(e)
      }, i),
      u = ''.concat(i.key, '_').concat(s['a']);
      return {
        bind: function (t, e) {
          var n = e.value,
          i = o() (e.value) ? {
            block: n
          }
           : n || {
          };
          t[u] = i.block,
          a.observe(t, i, e.modifiers)
        },
        inserted: function () {
          a.notify()
        },
        unbind: function (t) {
          a.unobserve(t),
          delete t[u]
        }
      }
    }
    function d() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      },
      e = t.sendClick,
      n = void 0 === e ? null : e,
      i = Object(r['a']) (t, [
        'sendClick'
      ]),
      a = new c['a'](function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        },
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = e.callback || p,
        o = e.isSend;
        if (e && !o) {
          if (a(t, e, n, i.key), r.defaultPrevented) return;
          Object(s['A']) (r, t)
        }
      }, i);
      return {
        bind: function (t, e) {
          a.observe(t, e.value)
        },
        unbind: function (t) {
          a.unobserve(t)
        }
      }
    }
    function p(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0;
      if (o() (e) && (e = {
        rseat: e
      }), e.rseat) {
        var a = h(t, r),
        c = n || s['l'];
        c(Object(i['a']) ({
          block: a
        }, e))
      }
    }
    function h(t, e) {
      if (!Object(u['x']) (t)) {
        var n = '';
        while (!(n = t[''.concat(e, '_').concat(s['a'])])) if (t = t.parentNode, !t || Object(u['x']) (t)) return;
        return n || ''
      }
    }
  },
  f112: function (t, e, n) {
    'use strict';
    n.d(e, 'b', function () {
      return f
    }),
    n.d(e, 'a', function () {
      return v
    }),
    n.d(e, 'c', function () {
      return y
    });
    n('795b'),
    n('5df3'),
    n('768b');
    var i = n('f499'),
    r = n.n(i),
    a = (n('96cf'), n('55dd'), n('ac6a'), n('f3e2'), n('7f7f'), n('6d67'), n('3b8d')),
    o = n('936f'),
    s = n('8d81'),
    c = n.n(s),
    u = (n('00b9'), n('21fd')),
    l = '//pub.m.iqiyi.com/h5/main/hotList/interRep/',
    d = '//api-top.iqiyi.com/index/top',
    p = '//api-top.iqiyi.com/index/fronts',
    h = '//pub.m.iqiyi.com/h5/main/proxy/searchVideo/';
    function f(t) {
      return m.apply(this, arguments)
    }
    function m() {
      return m = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        a,
        s,
        u;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e.channelId && e.dim && e.type) {
                t.next = 2;
                break
              }
              return t.abrupt('return');
            case 2:
              if (n = {
                channelId: e.channelId,
                dim: e.dim,
                type: e.type,
                pageNum: e.pageNum || 1,
                len: e.pageSize || 10,
                isCtrl: e.isCtrl || 0
              }, f.cache = f.cache || {
              }, i = c() (r() (n)), a = f.cache[i], !a) {
                t.next = 8;
                break
              }
              return t.abrupt('return', a);
            case 8:
              return t.next = 10,
              o['a'].jsonp(l, {
                params: n
              });
            case 10:
              return s = t.sent,
              u = s.data,
              t.abrupt('return', u && 'A00000' === u.code ? f.cache[i] = u.data : [
              ]);
            case 13:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), m.apply(this, arguments)
    }
    function v(t) {
      return b.apply(this, arguments)
    }
    function b() {
      return b = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r,
        a,
        s;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = e.cids ? p : d,
              t.next = 3,
              o['a'].get(n, {
                params: e
              });
            case 3:
              if (i = t.sent, !i || !i.data || 'A00000' !== i.data.code) {
                t.next = 17;
                break
              }
              if (r = e.cids ? g(i.data.data)  : i.data.data[0].albums, '1' !== e.filterStatus) {
                t.next = 14;
                break
              }
              return a = [
              ],
              r.forEach(function (t) {
                a.push(t.qipu_id)
              }),
              t.next = 11,
              Object(u['e']) (a).catch (function () {
                return r
              });
            case 11:
              return s = t.sent,
              r.forEach(function (t) {
                t.hotNum = s[t.qipu_id]
              }),
              t.abrupt('return', r);
            case 14:
              return t.abrupt('return', r);
            case 17:
              return t.abrupt('return', [
              ]);
            case 18:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), b.apply(this, arguments)
    }
    function g(t) {
      var e = [
      ];
      return t.forEach(function (t) {
        e = e.concat(t.albums)
      }),
      e.sort(function (t, e) {
        return e.album_count_hour - t.album_count_hour
      }),
      e.slice(0, 4)
    }
    function y(t) {
      return w.apply(this, arguments)
    }
    function w() {
      return w = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return n = {
                if : 'hotQuery',
                response_type: 0,
                categoryId: e.cid
              },
              t.next = 3,
              o['a'].jsonp(h, {
                params: n
              });
            case 3:
              return i = t.sent,
              r = i.data,
              t.abrupt('return', r.data ? r.data.slice(0, 8)  : null);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), w.apply(this, arguments)
    }
  },
  f191: function (t, e, n) {
    'use strict';
    n.d(e, 'a', function () {
      return s
    });
    n('6762'),
    n('2fdb');
    var i = n('4f30'),
    r = n('3e9e'),
    a = n('b2e7'),
    o = [
      i['CHANNEL_DIANSHIJU'],
      i['CHANNEL_ZONGYI'],
      i['CHANNEL_JILUPIAN']
    ];
    function s(t, e, n, i) {
      var s = r['a'].getCurVideo(),
      c = s && 'focus' === s.card,
      u = t && t.data && t.data.cid ? t.data.cid + '' : '',
      l = t && (1 === t.purchaseType || 2 === t.purchaseType) || !t.prv,
      d = !0;
      return Object(a['M']) () && i && (d = !!t.src),
      o.includes(u) && n && l && 'bodan' !== e && !c && d
    }
  },
  f2ae: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', {
        ref: 'wrapper',
        staticStyle: {
          overflow: 'hidden'
        }
      }, [
        n('div', {
          ref: 'content',
          class : t.innerClass
        }, [
          n('div', {
            ref: 'pullDown'
          }, [
            t.pullDownRefresh && !t.showEmptyTip ? t._t('pulldown', [
              n('section', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback.multiple',
                    value: t.showPingback.pulldown,
                    expression: 'showPingback.pulldown',
                    modifiers: {
                      multiple: !0
                    }
                  },
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: t.showPullDownLoading,
                    expression: 'showPullDownLoading'
                  }
                ],
                staticClass: 'm-hotSpot-update'
              }, [
                t._m(0)
              ]),
              n('portal', {
                attrs: {
                  to: 'topTip'
                }
              }, [
                n('section', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.up.error,
                      expression: 'up.error'
                    }
                  ],
                  staticClass: 'm-hotSpot-recommendTip am_recommendTip',
                  staticStyle: {
                    'z-index': '1000'
                  }
                }, [
                  t._v('数据获取失败，请下拉页面重试\n          ')
                ]),
                n('section', {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: !t.up.loading && !t.up.complete && t.up.latestNum,
                      expression: '!up.loading && !up.complete && up.latestNum'
                    }
                  ],
                  staticClass: 'm-hotSpot-recommendTip am_recommendTip',
                  staticStyle: {
                    'z-index': '1000'
                  }
                }, [
                  t._v('为您推荐' + t._s(t.up.latestNum) + '条新视频\n          ')
                ])
              ])
            ], {
              pullDownRefresh: t.pullDownRefresh,
              showPullDownLoading: t.showPullDownLoading,
              loading: t.up.loading,
              error: t.up.error,
              complete: t.up.complete,
              latestNum: t.up.latestNum,
              loadList: t.loadList
            })  : t._e()
          ], 2),
          t._t('top', null, {
            listLength: t.list.length
          }),
          t._l(t.list, function (e, i) {
            return n('div', {
              key: e.id || e.qipuId || i
            }, [
              t._t('listItem', null, {
                video: e,
                index: i
              }),
              t.middleTip && t.latestUpFeedId && i < t.latestUpFeedNum && e.feedId === t.latestUpFeedId ? t._t('middleTip', [
                n('section', {
                  directives: [
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: t.showPingback.middle,
                      expression: 'showPingback.middle'
                    }
                  ],
                  staticClass: 'm-hotSpot-bannerTip bgcol'
                }, [
                  n('a', {
                    staticClass: 'c-link',
                    attrs: {
                      href: 'javascript:void(0)'
                    },
                    on: {
                      click: t.onMiddleClick
                    }
                  }, [
                    t._v('上次看到这里，点击刷新'),
                    n('i', {
                      staticClass: 'c-glyphicon c-glyphicon-refresh'
                    })
                  ])
                ])
              ], {
                onMiddleClick: t.onMiddleClick
              })  : t._e()
            ], 2)
          }),
          t.pullUpLoad && !t.showEmptyTip ? t._t('pullup', [
            n('section', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: t.down.loading,
                  expression: 'down.loading'
                }
              ],
              staticClass: 'm-hotSpot-update'
            }, [
              t._m(1)
            ]),
            n('section', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: t.down.error,
                  expression: 'down.error'
                }
              ],
              staticClass: 'm-hotSpot-bannerTip',
              on: {
                click: function (e) {
                  return t.loadList()
                }
              }
            }, [
              n('i', {
                staticClass: 'c-glyphicon c-glyphicon-refresh'
              }),
              t._v('数据加载失败，请'),
              n('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                t._v('点击刷新')
              ]),
              t._v('重试\n      ')
            ]),
            n('section', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: t.down.complete,
                  expression: 'down.complete'
                }
              ],
              staticClass: 'm-hotSpot-update'
            }, [
              t._m(2)
            ])
          ], {
            pullUpLoad: t.pullUpLoad,
            loading: t.down.loading,
            error: t.down.error,
            complete: t.down.complete,
            latestNum: t.down.latestNum,
            loadList: t.loadList
          })  : t._e(),
          t._t('extra')
        ], 2),
        t.showEmptyTip ? t._t('empty', [
          n('div', {
            staticClass: 'm-box'
          }, [
            n('div', {
              staticClass: 'm-box-items m-box-items-full'
            }, [
              n('section', {
                staticClass: 'm-nowifi-tip tip-fixed'
              }, [
                n('i', {
                  staticClass: 'wifi-icon'
                }),
                t.errorNum ? n('div', [
                  n('div', {
                    staticClass: 'info'
                  }, [
                    t._v('哎呀，数据获取失败~')
                  ]),
                  n('div', {
                    staticClass: 'btn-wrap'
                  }, [
                    n('div', {
                      staticClass: 'btn-link'
                    }, [
                      n('a', {
                        staticClass: 'c-link',
                        attrs: {
                          href: 'javascript:void(0)'
                        },
                        on: {
                          click: function (e) {
                            return t.loadList()
                          }
                        }
                      }, [
                        t._v('刷新一下')
                      ])
                    ])
                  ])
                ])  : n('div', {
                  staticClass: 'info'
                }, [
                  t._v('精彩视频，马上呈现')
                ])
              ])
            ])
          ])
        ])  : t._e(),
        n('portal-target', {
          attrs: {
            name: 'topTip'
          }
        })
      ], 2)
    },
    r = [
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'inner'
        }, [
          n('i', {
            staticClass: 'am-loading-icon'
          })
        ])
      },
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'inner'
        }, [
          n('i', {
            staticClass: 'update-icon'
          }),
          n('span', {
            staticClass: 'c-info'
          }, [
            t._v('正在加载')
          ])
        ])
      },
      function () {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n('div', {
          staticClass: 'inner'
        }, [
          n('span', {
            staticClass: 'c-info'
          }, [
            t._v('没有更多了')
          ])
        ])
      }
    ],
    a = (n('a481'), n('57e7'), n('d92a'), n('96cf'), n('3b8d')),
    o = (n('c5f6'), n('1fba')),
    s = n('dfb9'),
    c = n('3e9e'),
    u = n('8296'),
    l = 'horizontal',
    d = 'vertical',
    p = {
      name: 'FeedScroll',
      mixins: [
        s['a']
      ],
      props: {
        initList: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        callback: {
          type: Function,
        default:
          null
        },
        showPingback: {
          type: Object,
        default:
          function () {
            return {
              pulldown: {
              },
              middle: {
              },
              pullup: {
              }
            }
          }
        },
        probeType: {
          type: Number,
        default:
          1
        },
        click: {
          type: Boolean,
        default:
          !0
        },
        direction: {
          type: String,
        default:
          d
        },
        scrollbar: {
          type: null,
        default:
          !1
        },
        pullDownRefresh: {
          type: null,
        default:
          !1
        },
        pullUpLoad: {
          type: null,
        default:
          !1
        },
        startY: {
          type: Number,
        default:
          0
        },
        freeScroll: {
          type: Boolean,
        default:
          !1
        },
        innerClass: {
          type: String,
        default:
          ''
        },
        middleTip: {
          type: Boolean,
        default:
          !1
        },
        emptyTip: {
          type: Boolean,
        default:
          !0
        },
        tipDelay: {
          type: Number,
        default:
          3000
        },
        screenOutStop: {
          type: Boolean,
        default:
          !0
        }
      },
      data: function () {
        return {
          list: [
          ],
          up: {
            loading: !1,
            error: !1,
            complete: !1,
            latestNum: 0
          },
          down: {
            loading: !1,
            error: !1,
            complete: !1,
            latestNum: 0
          },
          aboveTop: !1,
          contentOffsetTop: 0,
          stopScroll: !1,
          latestUpFeedId: 0,
          latestUpFeedNum: 0,
          isMiddleClick: !1,
          errorNum: 0,
          maxError: 3,
          beforeX: 0,
          beforeY: 0
        }
      },
      computed: {
        showPullDownLoading: function () {
          return this.up.loading || this.aboveTop || this.isMiddleClick
        },
        showEmptyTip: function () {
          return this.emptyTip && !this.list.length
        }
      },
      watch: {
        list: function () {
          this.list.length < 4 && !this.down.complete && this.loadList()
        },
        showPullDownLoading: function (t) {
          var e = this;
          !this.contentOffsetTop && t ? this.$nextTick(function () {
            e.contentOffsetTop = - e.$refs.pullDown.offsetHeight || - 44,
            e.resetPlayerOffset( - e.contentOffsetTop)
          })  : this.resetPlayerOffset(t ? - this.contentOffsetTop : this.contentOffsetTop)
        }
      },
      created: function () {
        this.list = this.initList.concat(this.list)
      },
      mounted: function () {
        this.$nextTick(function () {
          this.initScroll(),
          this.list.length && (this.getFeatures(this.list), this.forceUpdate())
        }),
        this.bindEvent()
      },
      methods: {
        loadList: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t(e) {
            var n,
            i,
            r = this;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.callback && !this.down.complete) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt('return');
                case 2:
                  return n = this[e ? 'up' : 'down'],
                  this.resetState(n),
                  n.loading = !0,
                  t.next = 7,
                  this.callback(e).catch (function () {
                    return !1
                  });
                case 7:
                  if (i = t.sent, n.error = !i, n.complete = i && !i.length, n.latestNum = i ? i.length : 0, i) {
                    t.next = 17;
                    break
                  }
                  if (this.errorNum++, !(this.errorNum < this.maxError)) {
                    t.next = 15;
                    break
                  }
                  return t.abrupt('return', this.loadList(e));
                case 15:
                  t.next = 21;
                  break;
                case 17:
                  this.errorNum = 0,
                  e ? (this.list = i.concat(this.list), this.latestUpFeedNum = n.latestNum, this.latestUpFeedNum >= 0 && i[this.latestUpFeedNum - 1] && (this.latestUpFeedId = i[this.latestUpFeedNum - 1].feedId))  : this.list = this.list.concat(i),
                  this.getFeatures(i),
                  this.$qiyiPlayer && (this.$qiyiPlayer.pause(), this.$qiyiPlayer.hide());
                case 21:
                  this.$nextTick(function () {
                    r.forceUpdate()
                  }),
                  clearTimeout(this.timer),
                  e && this.tipDelay >= 0 && (this.timer = setTimeout(this.resetState.bind(this, n), this.tipDelay));
                case 24:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e(e) {
            return t.apply(this, arguments)
          }
          return e
        }(),
        resetState: function (t) {
          t.loading = !1,
          t.error = !1,
          t.complete = !1,
          t.latestNum = 0
        },
        removeItem: function (t) {
          var e = this.list.indexOf(t);
          - 1 !== e && this.list.length && this.list.splice(e, 1)
        },
        bindEvent: function () {
          var t = this;
          c['a'].on('next', function (e) {
            if (e.position) {
              var n = Object(u['F']) (e.el, e.position, !0);
              t.scrollToElement(n, 500, !0, !0)
            }
          }),
          setTimeout(function () {
            var e = t.$qiyiPlayer;
            e && e.on('fullscreenchange', function (e) {
              e.isFullscreen ? (t.beforeX = t.scroll.startX, t.beforeY = t.scroll.startY)  : setTimeout(function () {
                t.scrollTo(t.beforeX, t.beforeY)
              }, 200)
            })
          }, 500)
        },
        onMiddleClick: function () {
          var t = this;
          this.isMiddleClick = !0,
          this.scroll.scrollTo(0, 0),
          this.loadList(!0).then(function () {
            t.isMiddleClick = !1
          }),
          this.$emit('middleClick')
        },
        initScroll: function () {
          var t = this;
          if (this.$refs.wrapper) {
            var e = {
              probeType: this.probeType,
              click: this.click,
              scrollY: this.freeScroll || this.direction === d,
              scrollX: this.freeScroll || this.direction === l,
              scrollbar: this.scrollbar,
              pullDownRefresh: this.pullDownRefresh,
              pullUpLoad: this.pullUpLoad,
              startY: this.startY,
              freeScroll: this.freeScroll
            };
            this.scroll = new o['a'](this.$refs.wrapper, e),
            this.scroll.on('scroll', function (e) {
              !t.isMiddleClick && t.stopScroll && t.scroll.y > 0 && t.scroll.scrollTo(0, 0),
              t.aboveTop = t.scroll.y > 0,
              t.checkPausePlayer(),
              t.$emit('scroll', e)
            }),
            this.scroll.on('beforeScrollStart', function () {
              t.stopScroll = t.scroll.y < 0,
              t.$emit('beforeScrollStart')
            }),
            this.pullDownRefresh && this._initPullDownRefresh(),
            this.pullUpLoad && this._initPullUpLoad()
          }
        },
        disable: function () {
          this.scroll && this.scroll.disable()
        },
        enable: function () {
          this.scroll && this.scroll.enable()
        },
        refresh: function () {
          this.scroll && this.scroll.refresh()
        },
        scrollTo: function () {
          this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement: function () {
          this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        destroy: function () {
          this.scroll.destroy()
        },
        forceUpdate: function () {
          this.pullDownRefresh && this.up.loading ? (this.up.loading = !1, this.scroll.finishPullDown(), this.refresh())  : this.pullUpLoad && this.down.loading ? (this.down.loading = !1, this.scroll.finishPullUp(), this.refresh())  : this.refresh()
        },
        _initPullDownRefresh: function () {
          var t = this;
          this.scroll.on('pullingDown', function () {
            t.loadList(!0),
            t.$emit('pullingDown')
          })
        },
        _initPullUpLoad: function () {
          var t = this;
          this.scroll.on('pullingUp', function () {
            t.loadList(),
            t.$emit('pullingUp')
          })
        },
        resetPlayerOffset: function (t) {
          var e = this.$qiyiPlayer.$el;
          if (e && t) {
            var n = + e.style.top.replace('px', '');
            e.style.top = ''.concat(n + t, 'px')
          }
        },
        checkPausePlayer: function () {
          var t = this.$qiyiPlayer;
          if (this.screenOutStop && t) {
            var e = t.$el;
            !e || t.video.isFullscreen() || Object(u['O']) (e) || (t.pause(), t.hide())
          }
        }
      }
    },
    h = p,
    f = n('2877'),
    m = Object(f['a']) (h, i, r, !1, null, null, null);
    e['a'] = m.exports
  },
  f933: function (t, e, n) {
    'use strict';
    var i = function () {
      var t = this,
      e = t.$createElement,
      n = t._self._c || e;
      return n('div', [
        t._l(t.videos, function (e, i) {
          return n('div', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  block: t.block
                },
                expression: '{block}'
              }
            ],
            key: e.qipuId + '_' + i,
            staticClass: 'm-box'
          }, [
            t._t('feedinfo', [
              n('div', {
                staticClass: 'm-box-items m-box-items-full'
              }, [
                n('PlayerPlaceholder', t._b({
                  attrs: {
                    video: e,
                    callback: t.load
                  }
                }, 'PlayerPlaceholder', t.$attrs, !1)),
                t._t('infobar', null, {
                  video: e
                })
              ], 2)
            ], {
              video: e
            })
          ], 2)
        }),
        t._t('player'),
        n('LoadBottom', t._b({
          attrs: {
            load: t.initVideos.length < 3,
            callback: t.load.bind(this)
          },
          scopedSlots: t._u([{
            key: 'loading',
            fn: function () {
              return [t._t('loading')]
            },
            proxy: !0
          }
          ], null, !0)
        }, 'LoadBottom', t.$attrs, !1))
      ], 2)
    },
    r = [
    ],
    a = (n('96cf'), n('3b8d')),
    o = n('9ba8'),
    s = n('da1f'),
    c = n('dfb9'),
    u = {
      name: 'FeedBottom',
      components: {
        PlayerPlaceholder: o['a'],
        LoadBottom: s['a']
      },
      mixins: [
        c['a']
      ],
      props: {
        initVideos: {
          type: Array,
        default:
          function () {
            return []
          }
        },
        callback: {
          type: Function,
        default:
          null
        },
        block: {
          type: String,
        default:
          ''
        },
        feature: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          videos: [
          ]
        }
      },
      created: function () {
        this.videos = this.initVideos.concat(this.videos)
      },
      mounted: function () {
        this.$nextTick(function () {
          this.videos.length && this.getFeatures(this.videos)
        }),
        this.bindEvent()
      },
      methods: {
        load: function () {
          var t = Object(a['a']) (regeneratorRuntime.mark(function t() {
            var e;
            return regeneratorRuntime.wrap(function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (this.callback) {
                    t.next = 2;
                    break
                  }
                  return t.abrupt('return');
                case 2:
                  return t.next = 4,
                  this.callback();
                case 4:
                  if (e = t.sent, e) {
                    t.next = 7;
                    break
                  }
                  return t.abrupt('return');
                case 7:
                  if (e.length) {
                    t.next = 9;
                    break
                  }
                  return t.abrupt('return', {
                    complete: !0
                  });
                case 9:
                  return this.videos = this.videos.concat(e),
                  this.getFeatures(e),
                  t.abrupt('return', e);
                case 12:
                case 'end':
                  return t.stop()
              }
            },
            t,
            this)
          })); function e() {
            return t.apply(this, arguments)
          }
          return e
        }()
      }
    },
    l = u,
    d = n('2877'),
    p = Object(d['a']) (l, i, r, !1, null, null, null);
    e['a'] = p.exports
  },
  fe3a: function (t, e, n) {
    'use strict';
    n('ac6a'),
    n('f3e2');
    var i = n('bd86'),
    r = (n('7f7f'), n('a745')),
    a = n.n(r),
    o = n('a4bb'),
    s = n.n(o),
    c = (n('6d67'), n('e2a0')),
    u = n.n(c),
    l = n('1a8c'),
    d = n.n(l),
    p = n('9520'),
    h = n.n(p),
    f = (n('a481'), /<|>|&|\//g);
    function m(t) {
      return t ? t.replace(f, function (t) {
        return encodeURI(t)
      })  : ''
    }
    function v(t) {
      var e = t.$options.head;
      if (e) {
        var n = h() (e) ? e.call(t)  : e;
        if (n) return b(n)
      }
    }
    function b() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      return s() (t).map(function (e) {
        var n,
        i = t[e];
        return u() (i) ? n = [
          {
            textContent: i
          }
        ] : a() (i) ? n = i : d() (i) && (n = [
          i
        ]),
        n.map(function (t) {
          return g(e, t)
        }).join('')
      }).join(' ')
    }
    function g(t, e) {
      var n = m(s() (e).map(function (t) {
        var n = e[t];
        if ('textContent' !== t && !d() (n)) return ''.concat(t, '="').concat(n, '"')
      }).join(' ')),
      r = m(s() (e).map(function (t) {
        var n = e[t];
        return 'textContent' === t ? n : d() (n) ? b(Object(i['a']) ({
        }, t, n))  : void 0
      }).join(' '));
      return '<'.concat(t, ' ').concat(n, '>').concat(r, '</').concat(t, '>')
    }
    function y(t) {
      var e = t.$options.title;
      return e ? h() (e) ? e.call(t)  : e : '爱奇艺'
    }
    var w = {
      serverPrefetch: function () {
        this.$ssrContext.head = v(this),
        this.$ssrContext.title = y(this)
      },
      beforeMount: function () {
        document.title = y(this)
      },
      beforeRouteUpdate: function (t, e, n) {
        n(),
        document.title = y(this)
      }
    },
    _ = (n('96cf'), n('3b8d')),
    k = n('a78e'),
    x = n.n(k),
    C = n('f499'),
    O = n.n(C),
    j = n('936f'),
    I = n('5321'),
    S = '//wlink.qy.net',
    T = [
      59468,
      53498,
      54128,
      51595
    ],
    E = 'getQiyiId',
    L = 'getCookie',
    R = 'app_server_fail_num',
    N = 'app_server_retry_time',
    q = {
      0: 0,
      1: 600000,
      2: 7200000,
      3: 18000000,
      4: 36000000,
      5: 86400000
    };
    function A(t) {
      var e = {
        ua: t.ua || 'iqiyi_h5',
        params: t.params,
        action: t.action
      };
      e = D(O() (e));
      var n = T.length;
      return P(e, n)
    }
    function P(t, e) {
      return U.apply(this, arguments)
    }
    function U() {
      return U = Object(_['a']) (regeneratorRuntime.mark(function t(e, n) {
        var i,
        r;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0,
              n--,
              t.next = 4,
              M(e);
            case 4:
              return i = t.sent,
              r = i ? i.data : '',
              Object(I['m']) ({
                block: 'devid_success'
              }),
              t.abrupt('return', H(r));
            case 10:
              if (t.prev = 10, t.t0 = t['catch'](0), !(n > 0)) {
                t.next = 16;
                break
              }
              return t.abrupt('return', P(e, n));
            case 16:
              Object(I['m']) ({
                block: 'devid_failure'
              }),
              B(),
              console.log('所有端口均返回失败，通信失败');
            case 19:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          10]
        ])
      })), U.apply(this, arguments)
    }
    function M(t) {
      return $.apply(this, arguments)
    }
    function $() {
      return $ = Object(_['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return M.index = void 0 === M.index ? 0 : (M.index + 1) % T.length,
              n = T[M.index],
              t.next = 4,
              j['a'].post(''.concat(S, ':').concat(n), e, {
                timeout: 1000,
                headers: {
                  Accept: 'text/plain'
                }
              });
            case 4:
              return i = t.sent,
              t.abrupt('return', i);
            case 6:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), $.apply(this, arguments)
    }
    function D(t) {
      for (var e = '', n = 0; n < t.length; n++) {
        var i = t.charCodeAt(n) - 1;
        e += String.fromCharCode(i)
      }
      return window.btoa(e)
    }
    function H(t) {
      for (var e = '', n = window.atob(t), i = 0; i < n.length; i++) {
        var r = n.charCodeAt(i) + 1;
        e += String.fromCharCode(r)
      }
      return JSON.parse(e)
    }
    function B() {
      var t = x.a.get(R);
      t = isNaN(t) || 'undefined' === t || t > 5 ? 1 : ++t,
      x.a.set(R, t, {
        expires: 365,
        path: '/',
        domain: 'iqiyi.com'
      });
      var e = q[t];
      x.a.set(N, 1, {
        expires: new Date((new Date).getTime() + e) || 0,
        path: '/',
        domain: 'iqiyi.com'
      })
    }
    var V = n('53a7'),
    z = n('8296'),
    F = n('b2e7'),
    W = n('2c06');
    function X() {
      z['i'].iqiyi ? Y()  : Z() && G()
    }
    function Y() {
      return Q.apply(this, arguments)
    }
    function Q() {
      return Q = Object(_['a']) (regeneratorRuntime.mark(function t() {
        var e;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0,
              t.next = 3,
              Object(V['a']) ();
            case 3:
              e = t.sent,
              e && K({
                cookie: Object(F['w']) (),
                qyid: e
              }),
              t.next = 10;
              break;
            case 7:
              t.prev = 7,
              t.t0 = t['catch'](0),
              K({
                cookie: Object(F['w']) ()
              });
            case 10:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          7]
        ])
      })), Q.apply(this, arguments)
    }
    function G() {
      return J.apply(this, arguments)
    }
    function J() {
      return J = Object(_['a']) (regeneratorRuntime.mark(function t() {
        var e,
        n;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return e = {
                params: {
                  cookie: Object(F['w']) ()
                },
                action: [
                  E,
                  L
                ]
              },
              t.next = 3,
              A(e);
            case 3:
              n = t.sent,
              K(n);
            case 5:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), J.apply(this, arguments)
    }
    function K(t) {
      t && t.cookie && Object(F['S']) (t.cookie),
      t && t.qyid && z['B'].setItem(W['a'], t.qyid)
    }
    function Z() {
      var t = x.a.get(R) || 0,
      e = x.a.get(N);
      return !t || t > 5 || !e || 'undefined' === e || 'undefined' === t
    }
    var tt = {
      mounted: function () {
        this.$nextTick(function () {
          z['D'].android && !Object(W['w']) () && X()
        })
      }
    },
    et = n('795b'),
    nt = n.n(et),
    it = (n('5df3'), n('db0c')),
    rt = n.n(it),
    at = (n('0cd8'), n('7514'), '//static.iqiyi.com/css/20190722/h5-search.css'),
    ot = '//static.iqiyi.com/css/2019112717/h5-passport-aura.css',
    st = '//security.iqiyi.com/static/verifycenter/css/verifycenter.css',
    ct = '//static.iqiyi.com/css/2019111117/h5-aura.css',
    ut = '//static.iqiyi.com/css/20191212/h5-play-aura.css',
    lt = '//static.iqiyi.com/css/2019080912/h5-channel-aura.css',
    dt = '//static.iqiyi.com/css/2019050917/h5-mine-aura.css',
    pt = '//static.iqiyi.com/css/2019071218/h5-comment-aura2.css',
    ht = '//static.iqiyi.com/css/2019012809/h5-album-aura.css',
    ft = '//static.iqiyi.com/css/2019012809/h5-movieLib-aura.css',
    mt = '//static.iqiyi.com/css/20190424/h5-reportFaq-aura.css',
    vt = '//static.iqiyi.com/css/2019111117/h5-verticaVideo-aura.css',
    bt = '//static.iqiyi.com/css/2019012809/h5-newExpress-aura.css',
    gt = '//static.iqiyi.com/css/2019072215/h5-outsitePlay-aura.css',
    yt = '//static.iqiyi.com/css/2019102317/h5-encyclopedia-aura.css',
    wt = '//static.iqiyi.com/css/20191205/infringement.css',
    _t = '//static.iqiyi.com/css/2019101119/h5-bodanList-aura.css',
    kt = '//static.iqiyi.com/css/2019012809/404.css',
    xt = {
      styles: [
        {
          key: 'base',
          url: ct
        },
        {
          key: 'play',
          url: ut
        },
        {
          key: 'user',
          url: dt
        },
        {
          key: 'feedback',
          url: mt
        },
        {
          key: 'verticalVideo',
          url: vt
        },
        {
          key: 'search',
          url: at
        },
        {
          key: 'album',
          url: ht
        },
        {
          key: 'shareAlbum',
          url: ft
        },
        {
          key: 'channel',
          url: lt
        },
        {
          key: '404',
          url: kt
        },
        {
          key: 'security',
          url: ot
        },
        {
          key: 'securityVerifySmscode',
          url: st
        },
        {
          key: 'timeline',
          url: bt
        },
        {
          key: 'comment',
          url: pt
        },
        {
          key: 'shareplay',
          url: gt
        },
        {
          key: 'baike',
          url: yt
        },
        {
          key: 'copyright',
          url: wt
        },
        {
          key: 'playlist',
          url: _t
        }
      ]
    },
    Ct = xt.styles || [
    ];
    function Ot(t) {
      var e = Ct.find(function (e) {
        return e.key === t
      });
      return e ? e.url : ''
    }
    var jt = {
      beforeCreate: function () {
        var t = this.$options.style;
        t && (t = a() (t) ? t : [
          t
        ], t.map(function (t) {
          return Object(z['A']) (Ot(t), {
            type: 'css'
          })
        }))
      },
      beforeRouteEnter: function (t, e, n) {
        var i,
        r = t.matched[t.matched.length - 1];
        if (r.components ? i = rt() (r.components).reduce(function (t, e) {
          return t || e.style
        }, '')  : r.component && (i = r.component.style), i) {
          i = a() (i) ? i : [
            i
          ];
          var o = i.map(function (t) {
            return Object(z['A']) (Ot(t), {
              type: 'css'
            })
          });
          nt.a.all(o).finally (function () {
            n()
          })
        } else n()
      }
    },
    It = n('5176'),
    St = n.n(It);
    n('57e7');
    function Tt(t) {
      return Et.apply(this, arguments)
    }
    function Et() {
      return Et = Object(_['a']) (regeneratorRuntime.mark(function t(e) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0,
              t.next = 3,
              Object(z['f']) (e);
            case 3:
              return n = t.sent,
              i = JSON.parse(n),
              i = St() (i, {
                reltyp: '1'
              }),
              t.next = 8,
              Object(z['g']) (O() (i));
            case 8:
              e = t.sent,
              Object(F['T']) (e),
              t.next = 14;
              break;
            case 12:
              t.prev = 12,
              t.t0 = t['catch'](0);
            case 14:
            case 'end':
              return t.stop()
          }
        },
        t,
        null,
        [
          [0,
          12]
        ])
      })), Et.apply(this, arguments)
    }
    function Lt(t) {
      return Rt.apply(this, arguments)
    }
    function Rt() {
      return Rt = Object(_['a']) (regeneratorRuntime.mark(function t(e) {
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              Object(F['T']) (e);
            case 1:
            case 'end':
              return t.stop()
          }
        },
        t)
      })), Rt.apply(this, arguments)
    }
    var Nt = {
      mounted: function () {
        var t = z['d'].getQuery(location.href);
        t._frd && ( - 1 !== ['wechat_circle',
        'qq_zone'].indexOf(t.social_platform) ? Tt(t._frd)  : Lt(t._frd))
      }
    },
    qt = n('cebc'),
    At = n('a8db'),
    Pt = {
      data: function () {
        return {
          callappCode: '',
          codeTypeMap: {
            home: 'toHome',
            player: 'toPlay',
            channel: 'toHome'
          }
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick(Object(_['a']) (regeneratorRuntime.mark(function e() {
          var n,
          i,
          r,
          a,
          o,
          s,
          c;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (n = t.callappCode, i = t.name, n && i && t.$GlobalSwitcher) {
                  e.next = 4;
                  break
                }
                return e.abrupt('return');
              case 4:
                return e.next = 6,
                t.$GlobalSwitcher.getFilters(n, i);
              case 6:
                if (r = e.sent, r) {
                  e.next = 9;
                  break
                }
                return e.abrupt('return');
              case 9:
                return a = t.$GlobalSwitcher.getParams(n, i),
                e.next = 12,
                t.getCallappOptions();
              case 12:
                o = e.sent,
                s = o.extralOptions,
                c = Object(At['a']) (o, [
                  'extralOptions'
                ]),
                t.silentCallApp(Object(qt['a']) ({
                  extralOptions: s,
                  subtype: a ? a.subtype : '',
                  type: t.codeTypeMap[n]
                }, c));
              case 16:
              case 'end':
                return e.stop()
            }
          },
          e)
        })))
      },
      methods: {
        silentCallApp: function () {
        },
        getCallappOptions: function () {
          return {
          }
        }
      }
    };
    e['a'] = {
      mixins: [
        w,
        tt,
        jt,
        Nt,
        Pt
      ]
    }
  }
}
]);
