var _typeof2 = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
    return typeof e
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  };
  !function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        exports: {
        },
        id: i,
        loaded: !1
      };
      return e[i].call(r.exports, r, r.exports, t),
      r.loaded = !0,
      r.exports
    }
    var n = {
    };
    return t.m = e,
    t.c = n,
    t.p = '',
    t(0)
  }([function (e, t, n) {
    'use strict';
    function i() {
      function e() {
        var e = $(window).scrollTop() + $(window).height();
        Object.keys(d).forEach(function (t) {
          try {
            if (d[t] === !0) {
              var n = $('[_hot="' + t + '"]');
              n[0] && 'none' != getComputedStyle(n[0]).display && (d[t] = n.offset().top)
            }
          } catch (i) {
          }
          d[t] !== !0 && d[t] !== !1 && e > d[t] && (c(t + 'show'), d[t] = !1)
        })
      }
      var t = n(7);
      n(11).set('throttle', 100),
      n(15);
      var i = n(18),
      r = n(19);
      Object.keys(r).forEach(function (e) {
        i.helper(e, r[e])
      }),
      n(21) (n(30)),
      t.pv();
      var o = n(32);
      o.get('ab') && t.button('mplay.ab.' + o.get('ab'));
      var a = n(174),
      l = n(68);
      l.init(function () {
        parseInt(l.getVuid()) % 97 == 10 && (a(Txplayer.$, 'ajax'), a(Txplayer.$, 'Ajax'))
      });
      var c = n(67);
      c('show'),
      $(document).undelegate('[_hot]', 'click').delegate('[_hot]', 'click', function (e) {
        var t = $(this) [0];
        c(t.getAttribute('_hot'))
      });
      var d = {
      };
      if (['banner',
      'comments',
      'commentsbanner',
      'navigator',
      'descbtn',
      'minis',
      'minisbanner',
      'episodes',
      'aspects',
      'chapters',
      'vplus',
      'subscribe',
      'recommends',
      'albums'].forEach(function (e) {
        d[e] = !0
      }), $(window).on('scroll', e), setTimeout(e, 1000), $('#header').show(), $('#channelbtn').click(function () {
        $('#channel').toggleClass('none')
      }), s.browser.UCBrowser) {
        var u = '<style>@-webkit-keyframes downloadingProgress{0%{width:0}100%{width:90%}}@keyframes downloadingProgress{0%{width:0}\t100%{width:90%}}.tenvideo_button{margin:15px auto}.tenvideo_button a,.tenvideo_button a:visited{color:#fff;text-decoration:none}.tvp_app_banner,.tvp_app_banner *,.tvp_app_banner *:before,.tvp_app_banner *:after{-webkit-box-sizing:border-box;box-sizing:border-box}.tvp_app_banner{position:relative;z-index:10;left:0;width:100%;height:40px;font-size:15px;font-family:PingFangSC-Regular,"Helvetica Neue",tahoma,arial}.tvp_container .tvp_app_banner{position:absolute;bottom:-60px}.tvp_app_banner .tvp_app_btn{position:absolute;left:0;width:100%;height:100%;line-height:1;text-align:center;border-radius:4px;color:#222;border:1px solid #E6E6E6}.tvp_app_banner .tvp_btn_text{position:absolute;left:0;top:0;width:100%;height:100%;line-height:37px;padding:0}.tvp_app_banner .tvp_app_btn .tvp_app_logo{display:inline-block;width:25px;height:100%;margin-right:2px;vertical-align:top;background:url(//i.gtimg.cn/qqlive/images/20150608/logo_square.png) right center no-repeat;background-size:contain}\t.tvp_app_banner .tvp_progress{position:absolute;left:0;right:0;bottom:6px;width:80%;height:3px;margin:auto;overflow:hidden;border-radius:999em;background-color:#E5E5E5;background-clip:padding-box;display:none}.tvp_app_banner .tvp_progress_current{position:absolute;left:0;top:0;max-width:100%;height:3px;border-radius:999em;background-color:#FA872E}.tvp_app_banner .tvp_btn_text:after{display:inline-block;max-width:80%;line-height:40px;padding:0 5px;content:attr(data-text);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.tvp_app_btn[data-status="downloading"],.tvp_app_btn[data-status="pause"]{font-size:14px}.tvp_app_btn[data-status="downloading"] .tvp_app_logo,.tvp_app_btn[data-status="pause"] .tvp_app_logo,.tvp_app_btn[data-status="install"] .tvp_app_logo{display:none}.tvp_app_btn[data-status="downloading"] .tvp_progress,.tvp_app_btn[data-status="pause"] .tvp_progress{display:block}.tvp_app_btn[data-status="downloading"] .tvp_progress_current,.tvp_app_btn[data-status="pause"] .tvp_progress_current{-webkit-animation:downloadingProgress 20s linear both;animation:downloadingProgress 20s linear both}.tvp_app_btn[data-status="pause"] .tvp_progress_current{-webkit-animation-play-state:paused;animation-play-state:paused}.tvp_app_banner .tvp_app_btn[data-status="downloading"] .tvp_btn_text:after,.tvp_app_banner .tvp_app_btn[data-status="pause"] .tvp_btn_text:after{line-height:34px}.tvp_nonauto .tvp_progress .tvp_progress_current{width:auto;-webkit-animation-name:none;animation-name:none}.tvp_app_banner.tvp_app_banner_indie{position:relative;top:auto;bottom:auto;display:block;width:auto}.tvp_app_banner_white .tvp_app_btn{color:#fff;border:1px solid rgba(255,255,255,.3)}#CssGaga{content:"160624102210,blu,334"}.tvp_overlay_play_try {display: block !important; visibility: visible !important;}</style>',
        p = Math.floor(1000 * Math.random());
        $('.tvp_app_banner').removeClass('tvp_app_banner').addClass('tvp_app_banner' + p),
        $('head').append(u.replace(/(tvp_app_banner)([^_])/g, '$1' + p + '$2'))
      }
    }
    n(1);
    var r = n(2),
    o = window.performance && performance.timing && performance.timing.connectStart;
    r.start4(o).end4(window.ITIL4).start5(o);
    var a = n(5);
    document.addEventListener('securiypolicyviolation', function (e) {
      a(e.type, e.blockedURI, e.documentURI || location.href)
    });
    var s = n(6) ();
    s.browser.WeChat ? setTimeout(i, 100)  : i(),
    window.picerr = function (e, t) {
      e.onerror = null;
      var n = 'blank';
      'number' == typeof t ? n = 2 == t || 5 == t || 9 == t || 11 == t || 12 == t || 14 == t || 15 == t || 16 == t || 19 == t ? 'pic_h' : 1 == t || 6 == t || 7 == t || 13 == t || 17 == t ? 'pic_v' : 'pic_s' : 'h' == t || 'v' == t || 's' == t ? n = 'pic_' + t : 'a' == t && (n = 'avatar'),
      e.src = '//i.gtimg.cn/qqlive/images/20150608/' + n + '.png'
    };
    var l = document.querySelector('.mod_footer .copyright');
    l && (l.innerText = 'Copyright © 1998 - ' + (new Date).getFullYear() + ' Tencent. All Rights Reserved.');
    var c = n(175);
    c()
  },
  function (e, t) {
    Object.assign || Object.defineProperty(Object, 'assign', {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (e, t) {
        'use strict';
        if (void 0 === e || null === e) throw new TypeError('Cannot convert first argument to object');
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          if (void 0 !== r && null !== r) for (var o = Object.keys(Object(r)), a = 0, s = o.length; a < s; a++) {
            var l = o[a],
            c = Object.getOwnPropertyDescriptor(r, l);
            void 0 !== c && c.enumerable && (n[l] = r[l])
          }
        }
        return n
      }
    })
  },
  function (e, t, n) {
    'use strict';
    var i = n(3);
    e.exports = i(location.protocol.slice(0, - 1) + '_m.v.qq.com')
  },
  function (e, t, n) {
    'use strict';
    function i(e) {
      return Math.round(Math.random() * (1 / e)) % 20
    }
    function r(e) {
      var t = !1;
      return function () {
        t || (t = e.apply(this, arguments))
      }
    }
    var o = window.performance,
    a = n(4),
    s = (location.search || location.href).match('_qosstat=1'),
    l = {
    };
    e.exports = function (e) {
      if (!l[e]) {
        var t = !1,
        n = !1,
        c = !1,
        d = {
        };
        d.t = new Array(5);
        var u = r(function () {
          if (t && c && n) {
            var r = i(0.05);
            return 10 !== r && !s || (a('//qos.report.qq.com/collect?type=1&name=' + e + '&' + d.t.map(function (e, t) {
              return t + 1 + '=' + e
            }).join('&') + '&_rt=' + + new Date), !0)
          }
        });
        l[e] = {
          start4: function (e) {
            return d.t[3] = e || + new Date,
            this
          },
          end4: function (e) {
            return t = !0,
            d.t[3] = (e || + new Date) - d.t[3],
            u(),
            this
          },
          start5: function (e) {
            return d.t[4] = e || + new Date,
            this
          },
          end5: function (e) {
            return c = !0,
            d.t[4] = (e || + new Date) - d.t[4],
            u(),
            this
          }
        },
        o && o.timing && (window.onload = function () {
          setTimeout(function () {
            var e = o.timing;
            d.t[0] = e.domainLookupEnd - e.domainLookupStart,
            d.t[1] = e.responseStart - e.requestStart,
            d.t[2] = e.responseEnd - e.responseStart,
            n = !0,
            u()
          }, 0)
        })
      }
      return l[e]
    }
  },
  function (e, t) {
    'use strict';
    function n() {
    }
    e.exports = function (e) {
      var t = document.createElement('img');
      t.onerror = n,
      t.onload = n,
      t.onabort = n,
      t.src = e
    }
  },
  function (e, t, n) {
    'use strict';
    var i = n(4);
    e.exports = function (e, t, n) {
      return i('http://btrace.qq.com/kvcollect?BossId=3805&Pwd=1514427622&time=' + Date.now() + '&url=' + n + '&cgi=' + t + '&referer=' + document.referrer + '&result=' + e + '&bid=3805&_dc=' + Math.random())
    }
  },
  function (e, t) {
    function n(e) {
      if (e) {
        var t = {
        },
        n = {
        },
        i = {
          iphone: e.match(/(iphone)\s(os\s)?([\d_]+)/i),
          ipad: e.match(/(ipad).*\s([\d_]+)/i),
          ipod: e.match(/(ipod).*\s([\d_]+)/i),
          android: e.match(/(android)\s([\d\.]+)/i),
          windows: e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
        };
        i.ipod && (t.ios = t.ipod = !0, t.version = i.ipod[2].replace(/_/g, '.'), t.name = 'ipod'),
        i.ipad && (t.ios = t.ipad = !0, t.version = i.ipad[2].replace(/_/g, '.'), t.name = 'ipad'),
        i.iphone && (t.iphone = t.ios = !0, t.version = i.iphone[3].replace(/_/g, '.'), t.name = 'iphone'),
        i.android && (t.android = !0, t.version = i.android[2], t.name = 'android'),
        i.windows && (t.windows = !0, t.version = i.windows[2], t.name = 'windows');
        var r = {
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
        if (r.MQQReader) n.MQQReader = !0,
        n.version = 1,
        n.name = 'MQQReader';
         else if (r.IEMobile) n.IEMobile = !0,
        n.version = 1,
        n.name = 'IEMobile';
         else for (var o in r) if (r[o]) {
          n[o] = !0,
          n.version = r[o][1] || 0,
          n.name = o;
          break
        }
        return {
          browser: n,
          os: t
        }
      }
    }
    var i = null,
    r = function () {
      return i || (i = n(navigator.userAgent))
    };
    r.__express = function (e, t, i) {
      e.ua = n(e.headers['user-agent']),
      i()
    },
    r.__jquery = function (e) {
      e = e || window.jQuery || window.Zepto;
      var t = i || (i = n(navigator.userAgent));
      e.browser = t.browser,
      e.os = t.os
    },
    r.__clearCache = function () {
      i = null
    },
    e.exports = r
  },
  function (e, t, n) {
    function i() {
      window.pgvVirtualDomain = '',
      window.pvCurDomain = '',
      window.pvCurUrl = ''
    }
    var r = n(8),
    o = n(9),
    a = 'https:' == location.protocol ? 'https://pingjs.qq.com/ping_video.js' : 'http://pingjs.qq.com/ping_video.js',
    s = function () {
      var e = !1,
      t = [
      ];
      return r(a, function () {
        e = !0;
        for (var n; n = t.shift(); ) n()
      }),
      function (n) {
        e ? n()  : t.push(n)
      }
    }(),
    l = function (e, t, n, r) {
      if ('string' == typeof e) {
        if (!t) {
          var a = e,
          l = e.split('.');
          l.length > 0 && (a = l[0]),
          a += '.html',
          t = '/virtualpage/' + a
        }
        i();
        var c = {
          hottag: 'txmv.' + e,
          virtualURL: t
        };
        n && (c.virtualDomain = n),
        r ? o.push('pgvSendClick(JSON.parse(\'' + JSON.stringify(c) + '\'))')  : s(function () {
          window.pgvSendClick && pgvSendClick(c)
        })
      }
    },
    c = function (e, t) {
      if (e && t) {
        var n = e.getAttribute('href'),
        i = e.getAttribute('target');
        n = n ? n : '',
        i = i ? i : '',
        '_blank' == i || !n || n.indexOf('javascript') >= 0 || 0 == n.indexOf('http://') && n.indexOf(location.hostname) < 0 ? l(t)  : l(t, !1, !1, !0)
      }
    },
    d = function (e) {
      e(document).off('click', '[_hot]').on('click', '[_hot]', function () {
        c(this, this.getAttribute('_hot'))
      }, !0)
    };
    e.exports = {
      pv: function () {
        s(function () {
          window.pgvMain && pgvMain(),
          o.report()
        })
      },
      button: l,
      checkHotLazyreport: c,
      bindHotkey: d
    }
  },
  function (e, t) {
    'use strict';
    e.exports = function (e, t) {
      var n = document.createElement('script'),
      i = document.getElementsByTagName('script') [0];
      n.src = e,
      n.type = 'text/javascript',
      n.onload = n.onerror = n.onreadystatechange = function () {
        /loaded|complete|undefined/.test(n.readyState) && function () {
          n.onload = n.onerror = n.onreadystatechange = null,
          n.parentNode.removeChild(n),
          n = void 0,
          t && t()
        }()
      },
      i.parentNode.insertBefore(n, i)
    }
  },
  function (module, exports, __webpack_require__) {
    var cookie = __webpack_require__(10),
    report = __webpack_require__(4),
    storage = function () {
      var e = !1;
      try {
        window.localStorage && (e = !0)
      } catch (t) {
      }
      var n = location.hostname || location.host;
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
          return cookie.set(e, t, n)
        },
        clear: function (e) {
          return cookie.set(e, '', n)
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
      n = t.shift();
      return storage.set(k, t.join(d)),
      n ? decodeURIComponent(n)  : ''
    },
    push = function (e) {
      if (e) {
        var t = storage.get(k),
        n = [
        ];
        t && (n = t.split(d)),
        n.push(encodeURIComponent(e)),
        storage.set(k, n.join(d))
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
  function (e, t) {
    'use strict';
    e.exports = {
      set: function (e, t, n, i, r) {
        if (r) {
          var o = new Date,
          a = new Date;
          a.setTime(o.getTime() + 3600000 * r)
        }
        return document.cookie = e + '=' + t + '; ' + (r ? 'expires=' + a.toGMTString() + '; ' : '') + (i ? 'path=' + i + '; ' : 'path=/; ') + (n ? 'domain=' + n + ';' : 'domain=' + window.location.host + ';'),
        !0
      },
      get: function (e, t) {
        var n = new RegExp('(?:^|;+|\\s+)' + e + '=([^;]*)'),
        i = (t || document.cookie).match(n);
        return i ? i[1] : ''
      },
      del: function (e, t, n) {
        var i = new Date;
        i.setTime(i.getTime() - 1),
        document.cookie = e + '=; expires=' + i.toGMTString() + ';' + (n ? 'path=' + n + '; ' : 'path=/; ') + (t ? 'domain=' + t + ';' : 'domain=' + window.location.host + ';')
      }
    }
  },
  function (e, t, n) {
    'use strict';
    function i() {
      d(window, 'scroll', o),
      d(window, 'resize', o)
    }
    function r(e, t) {
      function n(n) {
        var i,
        p,
        g,
        _,
        y,
        O = !n || n === document.body;
        if (O && !k) i = c(e);
         else if (!O && !k) {
          var I = n.getBoundingClientRect();
          p = I.height,
          g = I.width,
          _ = I.left,
          y = I.top
        }
        var q,
        P,
        A,
        M = !1,
        $ = !1,
        L = function (r, o, a) {
          if (!u.once || !$) {
            var s;
            if (O) {
              if (i = k || !i.height ? c(e)  : i, !i.height) return;
              var l = i.top - C,
              d = i.bottom;
              u.offset && (l -= u.offset, d += u.offset);
              var v = !u.listenHoriz || i.left >= 0 && i.right <= a;
              b ? (s = T ? l >= r && d <= r + o : l < r + o && d > r, s = s && v)  : s = v && r + o > l
            } else if (!O) {
              var h = e.getBoundingClientRect();
              if (!h.height || !h.width) return;
              if (S) s = f(e, h);
               else {
                if (!p || !g || !y) {
                  var m = n.getBoundingClientRect();
                  p = m.height,
                  g = m.width,
                  y = m.top,
                  _ = m.left
                }
                var w = h.height,
                I = h.width,
                l = h.top - y,
                q = h.left - _,
                d = h.bottom - y,
                P = h.right - _,
                A = u.offset;
                u.offset && (l += A, q += A, d -= A, P -= A),
                s = b ? T ? E ? q >= 0 && P <= g : l >= 0 && d <= p : E ? q > - I && q < g : l > - w && l < p : l < p && q < g
              }
            }
            var L = M;
            if (L && !s && 'function' == typeof u.out && u.out(), !s) return void (M = !1);
            M = !0,
            (x && !L || !x) && ($ = !0, t && t())
          }
        };
        if (O) q = m.on('scroll', L),
        o();
         else {
          var D,
          j = !1,
          N = function () {
            D || (D = !0, setTimeout(function () {
              D = !1,
              j && L(a(), s(), l())
            }, w.throttle ? w.throttle : 100))
          };
          if (q = m.on('scroll', N), n._onviewDelegator) j = n._onviewDelegator.visible(),
          A = n._onviewDelegator.message.on('visible', function (e) {
            j = e,
            e && N()
          }),
          N();
           else {
            var R = new h;
            n._onviewDelegator = {
              message: R,
              visible: function () {
                return j
              }
            },
            A = r(n, v.extend({
            }, u, {
              inview: !0,
              enter: !0,
              offset: 0,
              listenHoriz: !1,
              out: function () {
                R.emit('visible', !1),
                j = !1
              }
            }), function () {
              j = !0,
              R.emit('visible', !0),
              N()
            })
          }
          P = d(n, 'scroll', N),
          N()
        }
        return function () {
          q && q(),
          P && P(),
          A && A(),
          q = P = A = null
        }
      }
      y || (y = !0, i());
      var u = {
      },
      _ = arguments;
      'object' == v.type(t) && (u = t, t = _[2]);
      var b = p(u, 'visible', !0),
      x = p(u, 'enter', !1),
      k = p(u, 'recalc', !1),
      T = p(u, 'inview', !1),
      E = p(u, 'horiz', !1),
      S = p(u, 'absoluteCalc', !1),
      C = u.offsetTop || 0,
      O = g(e);
      if (v.some(O.parents, function (e) {
        return document.body === e
      })) return n(O.scrollParent);
      var I,
      q = setTimeout(function () {
        I = n(g(e).scrollParent)
      });
      return function () {
        clearTimeout(q),
        I && I()
      }
    }
    function o() {
      if (w.throttle) {
        if (b) return;
        b = !0,
        setTimeout(function () {
          b = !1,
          m.emit('scroll', a(), s(), l())
        }, w.throttle)
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
    function d(e, t, n) {
      return _ ? e.attachEvent('on' + t, n)  : e.addEventListener(t, n),
      function () {
        u(e, t, n)
      }
    }
    function u(e, t, n) {
      _ ? e.detachEvent('on' + t, n)  : e.removeEventListener(t, n)
    }
    function p(e, t, n) {
      return e.hasOwnProperty(t) ? !!e[t] : n
    }
    function f(e, t, n) {
      n = Object.assign({
      }, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, n);
      var t = t || e.getBoundingClientRect(),
      i = e.cacheOffsetWidth = e.cacheOffsetWidth || e.offsetWidth,
      r = e.cacheOffsetHeight = e.cacheOffsetHeight || e.offsetHeight,
      o = !(t.right - n.left <= 0 && t.left + i - n.left <= 0 || t.left + n.right >= x && t.right + n.right >= i + x),
      a = !(t.bottom - n.top <= 0 && t.top + r - n.top <= 0 || t.top + n.bottom >= k && t.bottom + n.bottom >= r + k);
      return 0 !== e.width && 0 !== e.height && o && a
    }
    var v = n(12),
    h = n(13),
    m = new h,
    g = n(14),
    _ = !document.addEventListener,
    w = {
    },
    y = !1;
    r.set = function (e, t) {
      return w[e] = t,
      r
    },
    r.message = m,
    m.on('update', o),
    e.exports = r;
    var b,
    x = window.innerWidth,
    k = window.innerHeight
  },
  function (e, t) {
    'use strict';
    function n(e, t) {
      return e && e.hasOwnProperty && e.hasOwnProperty(t)
    }
    function i() {
      var e = this;
      return function () {
        setTimeout.apply(e, arguments)
      }
    }
    var r = void 0,
    o = {
      escape: function (e) {
        return e ? String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')  : ''
      },
      type: function (e) {
        if (null === e) return 'null';
        if (e === r) return 'undefined';
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
        for (var t, i, r = 1, o = arguments.length; r < o; r++) {
          t = arguments[r];
          for (i in t) n(t, i) && (e[i] = t[i])
        }
        return e
      },
      trim: function (e) {
        return e.trim ? e.trim()  : e.replace(/^\s+|\s+$/gm, '')
      },
      indexOf: function (e, t) {
        if (e.indexOf) return e.indexOf(t);
        var n = - 1;
        return o.some(e, function (e, i) {
          if (e === t) return n = i,
          !0
        }),
        n
      },
      forEach: function (e, t) {
        if (e.forEach) return e.forEach(t);
        for (var n = e.length, i = 0; i < n; i++) t(e[i], i);
        return e
      },
      some: function (e, t) {
        if (e.some) return e.some(t);
        for (var n = e.length, i = !1, r = 0; r < n; r++) if (t(e[r], r)) {
          i = !0;
          break
        }
        return i
      },
      map: function (e, t) {
        if (e.map) return e.map(t);
        for (var n = e.length, i = [
        ], r = 0; r < n; r++) i.push(t(e[r], r));
        return i
      },
      objEach: function (e, t) {
        if (e) for (var i in e) if (n(e, i) && t(i, e[i]) === !1) break
      },
      reduce: function (e, t) {
        if ('function' != o.type(t)) throw new TypeError('Array.prototype.reduce callback must be a function');
        var n = e.length;
        if (0 === n && 2 === arguments.length) throw new TypeError('reduce of empty array with no initial value');
        var i,
        r = 0;
        if (arguments.length >= 3) i = arguments[2];
         else for (; ; ) {
          if (r in e) {
            i = e[r++];
            break
          }
          if (++r >= n) throw new TypeError('reduceRight of empty array with no initial value')
        }
        for (; r < n; r++) i = t(i, e[r], r, e);
        return i
      },
      filter: function (e, t, n) {
        if (e.filter) return e.filter(t);
        for (var i = e.length, r = [
        ], o = 0; o < i; o++) {
          var a = e[o];
          t.call(n, a, o, e) && r.push(a)
        }
        return r
      },
      nextTick: i(),
      lock: function (e) {
        var t;
        return function () {
          if (!t) {
            t = !0;
            var n = [
            ].slice.call(arguments, 0);
            return n.unshift(function () {
              t = !1
            }),
            e.apply(this, n)
          }
        }
      },
      queue: function (e, t) {
        function n() {
          var e = i.shift();
          if (!e) return void (r = t);
          r--;
          var o = e[0],
          a = e[1],
          s = e[2];
          s.unshift(function () {
            r++,
            n.apply(this, arguments)
          }),
          setTimeout(function () {
            o.apply(a, s)
          })
        }
        t = t || 1;
        var i = [
        ],
        r = t;
        return function () {
          if (i.push([e,
          this,
          [
          ].slice.call(arguments, 0)]), r) return n()
        }
      },
      delegator: function (e) {
        var t,
        n = [
        ];
        return function (i) {
          return t ? n.push(i)  : (t = !0, void e.call(this, function () {
            t = !1;
            var e = this,
            r = arguments;
            i && i.apply(e, r);
            var a = n;
            n = [
            ],
            o.forEach(a, function (t) {
              t && t.apply(e, r)
            })
          }))
        }
      },
      once: function (e) {
        var t,
        n = arguments;
        return function () {
          if (!t && e) return t = !0,
          e.apply(n.length >= 2 ? n[1] : null, arguments)
        }
      },
      verCompare: function (e, t) {
        if (e === t) return 0;
        e = e.split('.'),
        t = t.split('.');
        for (var n = e.length >= t.length ? e.length : t.length, i = 0, r = 0; n--; ) {
          var o = Number(e[i] || 0),
          a = Number(t[i++] || 0);
          if (a > o) return 1;
          if (a < o) return - 1
        }
        return r
      },
      batchTimeout: function (e, t) {
        function n(e) {
          return s.push(e),
          a ? void l.push( + new Date)  : (o = + new Date, l.push(o), a = !0, void setTimeout(function () {
            var e = Math.round(i.reduce(l, function (e, t) {
              return e + (t - o)
            }, 0) / l.length);
            a = !1,
            l = [
            ];
            var n = s.slice(0);
            s = [
            ],
            setTimeout(function () {
              n.forEach(function (e) {
                try {
                  e && e()
                } catch (t) {
                }
              })
            }, Math.max(t - r - e, 0))
          }, r))
        }
        var i = this,
        r = t / e;
        (!r || r < 1) && (e = 1, r = t),
        r = Math.round(r);
        var o,
        a = !1,
        s = [
        ],
        l = [
        ];
        return n
      }
    };
    e.exports = o
  },
  function (e, t, n) {
    'use strict';
    function i() {
      this._evtObjs = {
      },
      this._outdatedMsgs = {
      }
    }
    function r() {
    }
    var o = n(12);
    i.prototype.on = function (e, t, n) {
      this._evtObjs[e] || (this._evtObjs[e] = [
      ]),
      this._evtObjs[e].push({
        handler: t,
        once: n
      });
      var i = this;
      return function () {
        i.off(e, t)
      }
    },
    i.prototype.wait = function (e, t) {
      return this._outdatedMsgs[e] ? (t.apply(null, this._outdatedMsgs[e]), r)  : this.on(e, t, !0)
    },
    i.prototype.off = function (e, t) {
      var n,
      i = this;
      return n = e ? [
        e
      ] : o.keys(this._evtObjs),
      o.forEach(n, function (e) {
        if (t) {
          var n = i._evtObjs[e] || [
          ],
          r = [
          ];
          o.forEach(n, function (e) {
            e.handler !== t && r.push(e)
          }),
          i._evtObjs[e] = r
        } else i._evtObjs[e] = [
        ]
      }),
      this
    },
    i.prototype.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      this._outdatedMsgs[e] = t;
      var n = this._evtObjs[e] || [
      ];
      o.forEach(n, function (e) {
        e.once && e.called || (e.called = !0, e.handler && e.handler.apply(null, t))
      })
    },
    i.prototype.emitAsync = function () {
      var e = arguments,
      t = this;
      setTimeout(function () {
        t.emit.apply(t, e)
      }, 0)
    },
    i.prototype.assign = function (e) {
      var t = this;
      o.forEach(['on',
      'off',
      'wait',
      'emit',
      'emitAsync'], function (n) {
        var i = t[n];
        e[n] = function () {
          return i.apply(t, arguments)
        }
      })
    },
    (new i).assign(i),
    e.exports = i
  },
  function (e, t, n) {
    'use strict';
    function i(e, t) {
      t = t || [
      ];
      var n = e.parentNode;
      return n ? (t.push(n), n === document.body ? t : i(n, t))  : t
    }
    function r(e) {
      if (!e) return '';
      var t;
      if (window.getComputedStyle) try {
        t = window.getComputedStyle(e)
      } catch (n) {
      } else e.currentStyle && (t = e.currentStyle);
      return t ? a(t)  : ''
    }
    function o(e) {
      return (!e.hasAttribute || !e.hasAttribute('_scroll_skip')) && (/(auto|scroll)/.test(r(e)) || e.hasAttribute && e.hasAttribute('_scroll_view'))
    }
    function a(e) {
      var t = '';
      return s.some(['-y',
      '-x',
      ''], function (n) {
        var i = 'overflow' + n,
        r = 'hidden' !== e[i] ? e[i] : '';
        if (r) return t = r,
        !0
      }),
      t
    }
    var s = n(12);
    e.exports = function (e) {
      for (var t = i(e), n = document.body, r = 0; r < t.length; r++) {
        var a = t[r];
        if (a === document.body || o(a)) {
          n = a;
          break
        }
      }
      return {
        parents: t,
        scrollParent: n
      }
    }
  },
  function (e, t, n) {
    var i = n(16);
    window.Zepto = window.$ = i.$,
    window.shareConfig = {
    },
    document.addEventListener('touchstart', function () {
    }, !1),
    window.Promise ? Promise.defer = function () {
      var e = {
      };
      return e.promise = new Promise(function (t, n) {
        e.resolve = t,
        e.reject = n
      }),
      e
    }
     : n(17),
    window.LIMIT_DEFER = Promise.defer(),
    window.__appbanner__mplay__ = !0,
    $('.icon_back_top').on('click', function () {
      window.scrollTo(0, 0)
    }),
    function (e) {
      e.getScript = function (e, t) {
        var n = document.createElement('script');
        n.async = 'async',
        n.src = e,
        t && (n.onload = t),
        document.getElementsByTagName('head') [0].appendChild(n)
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
    var n = window.jQuery || window.Zepto || window.tvp && window.tvp.$ || window.Txplayer && window.Txplayer.$;
    window.Promise = function (e) {
      var t = n.Deferred();
      return e(t.resolve.bind(t), t.reject.bind(t)),
      t.promise()
    },
    window.Promise.defer = function () {
      var e = n.Deferred();
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
      return n.when.apply(n, e)
    },
    window.Promise.resolve = function () {
      var e = n.Deferred();
      return e.resolve(),
      e
    },
    window.Promise.reject = function () {
      var e = n.Deferred();
      return e.reject(),
      e
    }
  },
  function (e, t) {
    !function () {
      function t(e, t) {
        return (/string|function/.test('undefined' == typeof t ? 'undefined' : _typeof2(t)) ? l : s) (e, t)
      }
      function n(e, t) {
        return 'string' != typeof e && (t = 'undefined' == typeof e ? 'undefined' : _typeof2(e), 'number' === t ? e += '' : e = 'function' === t ? n(e.call(e))  : ''),
        e
      }
      function i(e) {
        return p[e]
      }
      function r(e) {
        return n(e).replace(/&(?![\w#]+;)|[<>"']/g, i)
      }
      function o(e, t) {
        if (f(e)) for (var n = 0, i = e.length; i > n; n++) t.call(e, e[n], n, e);
         else for (n in e) t.call(e, e[n], n)
      }
      function a(e, t) {
        var n = /(\/)[^\/]+\1\.\.\1/,
        i = ('./' + e).replace(/[^\/]+$/, ''),
        r = i + t;
        for (r = r.replace(/\/\.\//g, '/'); r.match(n); ) r = r.replace(n, '/');
        return r
      }
      function s(e, n) {
        var i = t.get(e) || c({
          filename: e,
          name: 'Render Error',
          message: 'Template not found'
        });
        return n ? i(n)  : i
      }
      function l(e, t) {
        if ('string' == typeof t) {
          var n = t;
          t = function () {
            return new u(n)
          }
        }
        var i = d[e] = function (n) {
          try {
            return new t(n, e) + ''
          } catch (i) {
            return c(i) ()
          }
        };
        return i.prototype = t.prototype = v,
        i.toString = function () {
          return t + ''
        },
        i
      }
      function c(e) {
        var t = '{Template Error}',
        n = e.stack || '';
        if (n) n = n.split('\n').slice(0, 2).join('\n');
         else for (var i in e) n += '<' + i + '>\n' + e[i] + '\n\n';
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
      v = t.utils = {
        $helpers: {
        },
        $include: function (e, t, n) {
          return e = a(n, e),
          s(e, t)
        },
        $string: n,
        $escape: r,
        $each: o
      },
      h = t.helpers = v.$helpers;
      t.get = function (e) {
        return d[e.replace(/^\.\//, '')]
      },
      t.helper = function (e, t) {
        h[e] = t
      },
      e.exports = t
    }()
  },
  function (e, t, n) {
    function i(e) {
      return e ? String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;')  : ''
    }
    var r = n(20);
    t.playUrl = function (e, t) {
      return e.indexOf('m.v.qq.com') != - 1 || e.match(/^\/[\w\d]/) || !t ? e : r(t)
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
    t.slice = function (e, t, n) {
      return e instanceof Array ? e.slice(t, n)  : [
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
      var n = parseInt(e / 60);
      return e -= 60 * n,
      t = t <= 0 ? '' : t < 10 ? '0' + t : t,
      n = n < 10 ? '0' + n : n,
      e = e < 10 ? '0' + e : e,
      '' != t ? t + ':' + n + ':' + e : n + ':' + e
    },
    t.ellipses = function (e, t) {
      if (e) {
        for (var n = 0, i = 0; i < e.length; i++) if (e.charAt(i).match(/[\x00-\x07]/) || (n += e.charAt(i).match(/[\x07-\xFF]/) ? 1 : 2), n >= t) return e.substr(0, i) + '...';
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
      n = (t.shift(), '');
      return e < 10000 ? e : e >= 10000 && e < 100000000 ? (e = parseInt(e / 1000) + '', t = e.split(''), n = t.pop(), t.join('') + '.' + (n ? n : '') + '万')  : e >= 100000000 ? (e = parseInt(e / 10000000) + '', t = e.split(''), n = t.pop(), t.join('') + '.' + (n ? n : '') + '亿')  : void 0
    };
    var o = [
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
      return e.indexOf('[') == - 1 ? e : (e = i(e), a.forEach(function (t, n) {
        for (; e.indexOf('[' + t + ']') != - 1; ) e = e.replace('[' + t + ']', '<img src="http://puui.qpic.cn/virtual_item_ns/0/' + o[n] + '.png/0" height="20px" width="20px"/>')
      }), e)
    },
    t.formatDateDuration = function (e) {
      var t = e && e.tag_3 && e.tag_3.text || '';
      return t.replace(/\s*期/, '')
    }
  },
  function (e, t) {
    'use strict';
    function n(e, t, n) {
      return n ? e && t ? (n += n.match(/\?/) ? '&' : '?', n += e + '=' + t)  : n : ''
    }
    e.exports = function (e) {
      var t = '',
      i = e.cover_id || e.cid,
      r = e.video_id || e.vid,
      o = e.columnid || e.column_id || e.lid;
      i ? t = '/cover/' + i[0] + '/' + i + '.html' + (r ? '?vid=' + r : '')  : r ? t = '/page/' + r[0] + '/' + r[9] + '/' + r[10] + '/' + r + '.html' : o && (t = '/play.html?columnid=' + o);
      var a = e.exsource || e.ex;
      + a && (t += t.match(/\?/) ? '&exsource=1' : '?exsource=1');
      var s = e.uvip;
      s && (t = n('uvip', s, t));
      var l = e.qqaid;
      return l && (t = n('qqaid', l, t)),
      t
    }
  },
  function (e, t, n) {
    var i = window.Txplayer.$,
    r = window.tlux = n(22),
    o = n(28) [window.PAGE_TYPE],
    a = n(29),
    s = {
    };
    e.exports = function (e) {
      function t(t) {
        t.name.match(/^no_dom\//) || t.data.unshift(i('#' + t.name.replace('/', '_')));
        var n = e[t.name];
        n && n.apply(this, t.data)
      }
      '2016_cover' == window.PAGE_TYPE && (o = '1664159' == window.full_screen ? o.vertical : o[window.COVER_TYPE] || o.de),
      1 == + !!window.EXSOURCE && o.every(function (e, t) {
        return '2016/player' != e || (o[t] = '2016/outsite_player', !1)
      }),
      window.WHITE_CONFIG && window.WHITE_CONFIG.xt_status && (o = o.filter(function (e) {
        return ['2016/recommend',
        '2016/game_rec',
        '2016/comment',
        '2016/game_banner'].indexOf(e) === - 1
      })),
      o.push('no_dom/pc-redirect'),
      a['no_dom/pc-redirect'] = [
        'video',
        'cover',
        'column'
      ],
      o.forEach(function (e) {
        a[e] && a[e].forEach(function (e) {
          s[e] || (s[e] = !0, r.store(e, [
            '$' + e
          ], function (e, t) {
            Object.keys(t).forEach(function (e) {
              this[e] = t[e]
            }, this)
          }))
        }),
        r.when(a[e] || [
        ], function () {
          var n = Array.prototype.map.call(arguments, function (e) {
            return e.model
          });
          t({
            name: e,
            data: n
          })
        })
      })
    }
  },
  function (e, t, n) {
    e.exports = n(23) ()
  },
  function (e, t, n) {
    'use strict';
    e.exports = function () {
      var e = n(24) ();
      return {
        action: n(25) (e),
        store: n(26) (e),
        dispatch: function () {
          e.dispatch.apply(e, arguments)
        },
        when: function (e, t, n) {
          function i() {
            s++,
            s == a && (o || (o = !0, t.apply(null, e)))
          }
          var r = 5000,
          o = !1;
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
            function t(r) {
              (!n || !n.complete || n.complete && 'COMPLETE' == r) && (i(), e.removeListener('upgrade', t))
            }
            e.on('upgrade', t)
          }),
          n && n.timeout && (r = n.timeout),
          setTimeout(function () {
            o || (o = !0, t.apply(null, e))
          }, r)
        }
      }
    }
  },
  function (e, t) {
    'use strict';
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function i() {
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
    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1,
          i.configurable = !0,
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
      }
    }(),
    o = function () {
      function e(t) {
        n(this, e),
        this.status = s.HANDLED,
        this.fn = t
      }
      return r(e, [
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
        var n = this;
        if (!e) throw new Error('dispatch了无效数据');
        e in this.callbacks && (this.callbacks[e].forEach(function (e) {
          n.allCallbacks[e].status = s.PENDING
        }), this.callbacks['*'] && this.callbacks['*'].forEach(function (e) {
          n.allCallbacks[e].status = s.PENDING
        }), this.callbacks[e].forEach(function (i) {
          n.allCallbacks[i].invoke(e, t)
        }), this.callbacks['*'] && this.callbacks['*'].forEach(function (i) {
          n.allCallbacks[i].invoke(e, t)
        }))
      },
      on: function (e, t) {
        var n = this;
        if (e instanceof Array) {
          if (e.indexOf('*') == - 1) return void e.forEach(function (e) {
            n.on(e, t)
          });
          e = '*'
        }
        e in this.callbacks || (this.callbacks[e] = [
        ]),
        this.allCallbacks.push(new o(t));
        var i = this.allCallbacks.length - 1;
        return this.callbacks[e].push(i),
        i
      },
      off: function (e, t) {
        var n = this;
        if (!(e && e in this.callbacks)) throw new Error('action类型不存在: ' + e);
        'function' == typeof t ? this.allCallbacks.forEach(function (i, r) {
          i.fn == t && n.callbacks[e].every(function (t, i) {
            return t != r || (delete n.callbacks[e][i], !1)
          })
        })  : this.callbacks[e].every(function (i, r) {
          return i != t || (delete n.callbacks[e][r], !1)
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
    i.STATUS = s,
    t['default'] = i,
    e.exports = t['default']
  },
  function (e, t) {
    'use strict';
    function n(e) {
      var t = function n(t, i) {
        if (!t) throw new Error('必须指定一个action名字');
        if (!i || 'function' != typeof i) throw new Error('必须为action指定一个获取数据的流程');
        return n[t] = function (n) {
          n = n || {
          },
          i(n, function (n, i) {
            e.dispatch(t, i)
          })
        },
        n[t]
      };
      return t
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    }),
    t['default'] = n,
    e.exports = t['default']
  },
  function (e, t, n) {
    'use strict';
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }
    function r(e, t) {
      if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + ('undefined' == typeof t ? 'undefined' : _typeof2(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t)  : e.__proto__ = t);
    }
    function o(e) {
      var t = function n(t, i) {
        var r = arguments.length <= 2 || void 0 === arguments[2] ? function () {
        }
         : arguments[2],
        o = arguments.length <= 3 || void 0 === arguments[3] ? {
        }
         : arguments[3];
        if (!i) throw new Error('必须指定依赖的action名字');
        var a = new d(o);
        return a.__callback__key = e.on(i, function (e, t) {
          var n = r.call(a.model, e, t);
          a.emit('update', a.model),
          n ? n < 0 ? a.status = 'EMPTY' : n > 0 && (a.status = 'PARTICAL')  : a.status = 'COMPLETE',
          n < 0 && a.emit('error', n),
          a.ready = !0
        }),
        t && (n[t] = a),
        a
      };
      return t
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    });
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1,
          i.configurable = !0,
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
      }
    }(),
    s = function (e, t, n) {
      for (var i = !0; i; ) {
        var r = e,
        o = t,
        a = n;
        i = !1,
        null === r && (r = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(r, o);
        if (void 0 !== s) {
          if ('value' in s) return s.value;
          var l = s.get;
          if (void 0 === l) return;
          return l.call(a)
        }
        var c = Object.getPrototypeOf(r);
        if (null === c) return;
        e = c,
        t = o,
        n = a,
        i = !0,
        s = c = void 0
      }
    };
    t['default'] = o;
    var l = n(27).EventEmitter,
    c = {
      EMPTY: 0,
      PARTICAL: 1,
      COMPLETE: 2
    },
    d = function (e) {
      function t(e) {
        var n = this;
        i(this, t),
        s(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
        this.model = e.defaults || {
        };
        var r = 'EMPTY';
        Object.defineProperty(this, 'status', {
          get: function () {
            return r
          },
          set: function (e) {
            if (c[e] > c[r]) {
              var t = r;
              r = e,
              n.emit('upgrade', e, t)
            }
          }
        });
        var o = !1;
        Object.defineProperty(this, 'ready', {
          get: function () {
            return o
          },
          set: function (e) {
            var t = o;
            o = e,
            t != e && e > 0 && n.emit('ready', e)
          }
        }),
        this.setMaxListeners(50)
      }
      return r(t, e),
      a(t, [
        {
          key: 'on',
          value: function (e, n) {
            return 'ready' == e && this.ready ? n.call(this, !0)  : 'upgrade' == e && c[this.status] > c.EMPTY ? n.call(this, this.status)  : s(Object.getPrototypeOf(t.prototype), 'on', this).apply(this, arguments),
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
    function n() {
      this._events = this._events || {
      },
      this._maxListeners = this._maxListeners || void 0
    }
    function i(e) {
      return 'function' == typeof e
    }
    function r(e) {
      return 'number' == typeof e
    }
    function o(e) {
      return 'object' === ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && null !== e
    }
    function a(e) {
      return void 0 === e
    }
    e.exports = n,
    n.EventEmitter = n,
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function (e) {
      if (!r(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number');
      return this._maxListeners = e,
      this
    },
    n.prototype.emit = function (e) {
      var t,
      n,
      r,
      s,
      l,
      c;
      if (this._events || (this._events = {
      }), 'error' === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
        if (t = arguments[1], t instanceof Error) throw t;
        var d = new Error('Uncaught, unspecified "error" event. (' + t + ')');
        throw d.context = t,
        d
      }
      if (n = this._events[e], a(n)) return !1;
      if (i(n)) switch (arguments.length) {
        case 1:
          n.call(this);
          break;
        case 2:
          n.call(this, arguments[1]);
          break;
        case 3:
          n.call(this, arguments[1], arguments[2]);
          break;
        default:
          s = Array.prototype.slice.call(arguments, 1),
          n.apply(this, s)
      } else if (o(n)) for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), r = c.length, l = 0; l < r; l++) c[l].apply(this, s);
      return !0
    },
    n.prototype.addListener = function (e, t) {
      var r;
      if (!i(t)) throw TypeError('listener must be a function');
      return this._events || (this._events = {
      }),
      this._events.newListener && this.emit('newListener', e, i(t.listener) ? t.listener : t),
      this._events[e] ? o(this._events[e]) ? this._events[e].push(t)  : this._events[e] = [
        this._events[e],
        t
      ] : this._events[e] = t,
      o(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, 'function' == typeof console.trace)),
      this
    },
    n.prototype.on = n.prototype.addListener,
    n.prototype.once = function (e, t) {
      function n() {
        this.removeListener(e, n),
        r || (r = !0, t.apply(this, arguments))
      }
      if (!i(t)) throw TypeError('listener must be a function');
      var r = !1;
      return n.listener = t,
      this.on(e, n),
      this
    },
    n.prototype.removeListener = function (e, t) {
      var n,
      r,
      a,
      s;
      if (!i(t)) throw TypeError('listener must be a function');
      if (!this._events || !this._events[e]) return this;
      if (n = this._events[e], a = n.length, r = - 1, n === t || i(n.listener) && n.listener === t) delete this._events[e],
      this._events.removeListener && this.emit('removeListener', e, t);
       else if (o(n)) {
        for (s = a; s-- > 0; ) if (n[s] === t || n[s].listener && n[s].listener === t) {
          r = s;
          break
        }
        if (r < 0) return this;
        1 === n.length ? (n.length = 0, delete this._events[e])  : n.splice(r, 1),
        this._events.removeListener && this.emit('removeListener', e, t)
      }
      return this
    },
    n.prototype.removeAllListeners = function (e) {
      var t,
      n;
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
      if (n = this._events[e], i(n)) this.removeListener(e, n);
       else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
      return delete this._events[e],
      this
    },
    n.prototype.listeners = function (e) {
      var t;
      return t = this._events && this._events[e] ? i(this._events[e]) ? [
        this._events[e]
      ] : this._events[e].slice()  : [
      ]
    },
    n.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (i(t)) return 1;
        if (t) return t.length
      }
      return 0
    },
    n.listenerCount = function (e, t) {
      return e.listenerCount(t)
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
  function (e, t, n) {
    'use strict';
    t['2016/player'] = n(31),
    t['2016/outsite_player'] = n(84),
    t['2016/login'] = n(87),
    t['2016/banner'] = n(93),
    t['2016/chapter'] = n(101),
    t['2016/effect'] = n(109),
    t['2016/episode'] = n(110),
    t['2016/clips'] = n(113),
    t['2016/mini'] = n(116),
    t['2016/recommend'] = n(119),
    t['2016/redirectapp'] = n(124),
    t['2016/redirectpc'] = n(125),
    t['2016/sponsor'] = n(126),
    t['2016/vplus_author'] = n(127),
    t['2016/vplus_video'] = n(129),
    t['2016/recommend'] = n(119),
    t['2016/recommendation'] = n(130),
    t['2016/redirectpc'] = n(125),
    t['2016/title'] = n(135),
    t['2016/comment'] = n(137),
    t['2016/episode'] = n(110),
    t['2016/list'] = n(140),
    t['2016/share'] = n(143),
    t['2016/game_banner'] = n(145),
    t['2016/album'] = n(150),
    t['2016/game_rec'] = n(151),
    t['2016/vertical_cover'] = n(155),
    t['2016/vertical_recommand'] = n(162),
    t['2016/vertical_banner'] = n(165),
    t['2016/source'] = n(167)
  },
  function (e, t, n) {
    var i = n(10),
    r = n(32),
    o = n(34),
    a = n(6) (),
    s = n(35);
    n(83);
    e.exports = function (e, t, n, l) {
      if (e.length) {
        if (e.removeClass('none').removeClass('mod_box'), 'cover' == window.PAGE_TYPE && i.set('cover_history', n.vid, location.host, location.pathname), o && !r.get('ptag')) {
          var c;
          c = location.href.indexOf('?') != - 1 ? location.href.replace('?', '?ptag=' + o + '&')  : location.href.split('#') [0] + '?ptag=' + o;
          try {
            a.browser.MQQClient ? window.history && history.pushState && history.pushState(null, null, c)  : window.history && history.replaceState && history.replaceState(null, null, c)
          } catch (d) {
          }
        }
        if (u = n.pic496x280 || n.pic_228_128 || n.pic_640_360 || l.big_horizontal_pic_url || l.horizontal_pic_url, 1 == l.type || 2 == l.type || 3 == l.type || 9 == l.type) var u = l.big_horizontal_pic_url || l.horizontal_pic_url || n.pic496x280 || n.pic_228_128 || n.pic_640_360;
        var p = document.createElement('style');
        document.head.appendChild(p),
        sheet = p.sheet,
        sheet.addRule('.mod_player::after', 'display:none'),
        sheet.insertRule('.mod_player::after { display:none }', 0),
        $('.mod_player').css({
          width: '100%',
          height: '100%'
        }),
        s(u, n, l)
      }
    }
  },
  function (e, t, n) {
    'use strict';
    var i = n(33);
    e.exports = {
      get: function (e, t) {
        var n = new RegExp('(\\?|#|&)' + e + '=([^&#]*)(&|#|$)');
        t = t || location.href;
        var r = t.match(n);
        return r ? i(r[2])  : ''
      },
      del: function (e) {
        var t = new RegExp('(\\?|#|&)' + e + '=([^&#]*)(&|#|$)'),
        n = location.href.match(t);
        n = n ? n[2] : '';
        try {
          window.history && history.replaceState && history.replaceState(null, null, location.href.replace(e + '=' + n, ''))
        } catch (i) {
        }
      }
    }
  },
  function (e, t) {
    var n = {
      '<': '&#60;',
      '>': '&#62;',
      '"': '&#34;',
      '\'': '&#39;',
      '&': '&#38;'
    },
    i = function (e) {
      return n[e]
    };
    e.exports = function (e) {
      return ('' + e).replace(/&(?![\w#]+;)|[<>"']/g, i)
    }
  },
  function (e, t, n) {
    'use strict';
    var i = n(32);
    e.exports = function () {
      var e = location.href.toLowerCase(),
      t = i.get('ptag', e) || i.get('adtag', e) || i.get('pgv_ref', e) || sessionStorage.getItem('ptag') || sessionStorage.getItem('sessionptag');
      return t && sessionStorage.setItem('ptag', t),
      t || ''
    }()
  },
  function (e, t, n) {
    function i(e, t, n, i) {
      var a = new Txplayer(t);
      a.on('limitInitStart', function (e) {
        try {
          window.LIMIT_DEFER.resolve(!!e)
        } catch (t) {
          window.LIMIT_DEFER.reject()
        }
        c.end5()
      }),
      a.on('ready', function () {
        o()
      }),
      s.connect2(a),
      s.once('playing', function () {
        d('play')
      }),
      s.on('allended', function () {
        e.then(function (e) {
          if (e && e.length) {
            var t = e[0].ButtonTitle,
            i = e[0].ButtonTextColor || '#ff6022';
            $('.tvp_limited_player_open').css('background-color', i),
            $('.tvp_limited_player_open').text(t || '打开腾讯视频看高清全集'),
            r(a, n, e[0])
          } else r(a, n)
        }) ['catch'](function (e) {
          r(a, n)
        })
      })
    }
    function r(e, t, n) {
    }
    function o() {
      $('.txp_btn_play_lg').attr({
        _click: !0,
        _eid: 'cover_video',
        _kv: JSON.stringify({
          channel_id: window.COVER_TYPE
        })
      }),
      $('.txp_btn_play').on('click', function () {
        var e = $(this).attr('data-status');
        window.h5_reporter && window.h5_reporter.Boss.elementClick({
          eid: e,
          channel_id: window.COVER_TYPE
        })
      }),
      $('.txp_btn_fullscreen').attr({
        _click: !0,
        _eid: 'maximization'
      })
    }
    var a = n(6) (),
    s = n(36),
    l = n(37),
    c = n(2),
    d = n(67),
    u = n(70),
    p = n(75),
    f = n(76).getPrConfig,
    v = n(68),
    h = n(77);
    e.exports = function (e, t, n) {
      var r = f({
        modId: 1502,
        platforms: location.href.indexOf('lite=true') > - 1 ? 13 : 12,
        channel: window.COVER_TYPE || ''
      }).then(function (e) {
        return e
      }) ['catch'](function (e) {
        return e
      }),
      o = {
        containerId: 'player',
        vid: t.vid,
        cid: n.cover_id || '',
        width: '100%',
        height: Math.ceil(9 * $('.mod_player').width() / 16),
        videoType: 'vod',
        playerType: 'h5',
        poster: e,
        tpid: window.COVER_TYPE ? window.COVER_TYPE : 0,
        useComboService: !0,
        autoplay: !1,
        isShowDurationLimit: !0,
        isContinuePlay: !0,
        promotionId: 140,
        bannerEvent: location.href.indexOf('qqlivekid=true') !== - 1 ? 'qqkidliveClick' : '',
        pageInitTime: + new Date,
        isInteract: t.interactive_content_id && '1543606' == t.interactive_content_id[0]
      };
      v.init(function () {
        v && v.isLogin() ? h.getPayVip().then(function (e) {
          e && 1 == e.vip && (o.getUserType = function () {
            return 2
          }),
          i(r, o, t, n)
        })  : i(r, o, t, n)
      })
    }
  },
  function (e, t, n) {
    var i = n(27).EventEmitter;
    e.exports = Object.create(new i, {
      connect2: {
        value: function (e) {
          var t = this;
          e.on('playStateChange', function (e) {
            switch (e) {
              case 0:
                t.status = 'AFTER',
                t.emit('allended');
                break;
              case 1:
                'PAUSE' === t.status ? t.emit('resume')  : t.emit('playing'),
                t.status = 'PLAY';
                break;
              case 2:
                t.status = 'PAUSE',
                t.emit('pause');
                break;
              case 3:
            }
          })
        }
      },
      status: {
        value: 'BEFORE',
        writable: !0
      }
    })
  },
  function (e, t, n) {
    var i = n(38),
    r = n(63),
    o = n(65),
    a = n(66),
    s = {
      txv: i().model({
        confid: 20411
      }),
      huoguo: r().model({
        confid: 500011069
      }),
      videoLite: o().model({
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
        var n = (e || '').toLowerCase().match(/^(\w+):\/\//);
        if (n && n[1]) switch (n[1]) {
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
    openUrl: function (e, t, n, i) {
      if (n) location.href = n;
       else if (/^https?:\/\//.test(e)) location.href = e;
       else if (e) {
        var r = this.detectBanner(e, i);
        1 === r.state ? (r.openFixer(function () {
          return e
        }), r.action())  : t && (r.openFixer(function () {
          return e
        }), r.downloadFixer(function () {
          return t
        }), r.action())
      }
  }
  }
  },
  function (e, t, n) {
  var i = n(6) (),
  r = n(39),
  o = n(41),
  a = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  s = n(12),
  l = n(52).create();
  l.setPage('txv');
  var c = {
  },
  d = window.appBanner = e.exports = function (e) {
  e = e || {
  };
  var t = e['package'] || u,
  d = r({
    'native': c[t.pkg] || (c[t.pkg] = o(t)),
    'package': t
  });
  if (t == u) {
    var m = e.useDownloader !== !1;
    if (d.model({
      confid: 51
    }).openFixer(p).downloadFixer(f), e.defaultAction !== !1) {
      var g = function (t, r) {
        var cid = r.model.cover_id;
        var vid = r.model.video_id;
        var tourl = "";
        if( cid == null ){
          tourl = "play.html?vid=" + vid;
        } else {
          tourl = "play.html?cid=" + cid + "&vid=" + vid;
        }
        location.href = tourl;
      };
      d.on('action', g)
    }
  }
  return e.$el && (e.template && d.on('render', function (t, n) {
    var i = e.template;
    Object.keys(v).forEach(function (e) {
      i = i.replace('{' + e + '}', v[e][t] || v[e][0] || '')
    }, this),
    i = i.replace('{progress}', n.progress || 0),
    e.$el.innerHTML = i
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
      pkg: i.os.iphone ? 'com.tencent.live4iphone' : 'com.tencent.qqlive',
      pkgurl: 'tenvideo2://can_open_me_if_install_and_regeister_this_scheme',
      scheme: i.os.ipad ? 'tenvideohd://?' : 'tenvideo2://?',
      downloadid: 'TencentVideo',
      appid: 100730521,
      via: 'ANDROID.QQLIVE',
      downloadUrl: function () {
        return i.os.ios ? i.os.iphone ? 'http://itunes.apple.com/cn/app/id458318329?mt=8' : 'https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8' : i.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=4&confid={confid}&platform=aphone' : 'http://v.qq.com/download.html'
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
  v = d.TXVWORDING,
  h = {
  tryopen: n(60) (),
  wx: n(61) (u)
  };
  d.openInWX = h.wx
  },
  function (e, t, n) {
  var i = n(27).EventEmitter,
  r = n(40);
  e.exports = function (e) {
  function t() {
    if (a) {
      var t = r({
      }, o.model, s),
      n = e['package'].scheme;
      l.forEach(function (e) {
        n = e(n, t)
      });
      var i = e['package'].downloadUrl;
      c.forEach(function (e) {
        i = e(i, t)
      }),
      d.emit('action', o.state, {
        openurl: n,
        downloadurl: i,
        model: t,
        downloader: o.downloader
      })
    }
  }
  function n() {
    a = !0,
    d.emit('ready', o.state),
    d.removeAllListeners('ready')
  }
  var o = e['native'],
  a = !1,
  s = {
  },
  l = [
  ],
  c = [
  ],
  d = Object.create(new i, {
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
        return t && ('render' == e ? (t(o.state, {
        }), i.prototype.on.apply(this, arguments))  : 'ready' == e && a ? t(o.state)  : i.prototype.on.apply(this, arguments)),
        this
      }
    }
  });
  return o.on('progress', function (e) {
    d.emit('progress', e),
    d.emit('render', o.state, {
      progress: e
    })
  }),
  o.on('state_change', function (e, t) {
    d.emit('state_change', e, t),
    d.emit('render', o.state, {
      progress: 0
    })
  }),
  o.readyState ? n()  : o.once('ready', n),
  Object.defineProperty(d, 'state', {
    get: function () {
      return o.state
    }
  }),
  d
  }
  },
  function (e, t) {
  'use strict';
  var n = Object.prototype.hasOwnProperty,
  i = Object.prototype.toString,
  r = Object.defineProperty,
  o = Object.getOwnPropertyDescriptor,
  a = function (e) {
  return 'function' == typeof Array.isArray ? Array.isArray(e)  : '[object Array]' === i.call(e)
  },
  s = function (e) {
  if (!e || '[object Object]' !== i.call(e)) return !1;
  var t = n.call(e, 'constructor'),
  r = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, 'isPrototypeOf');
  if (e.constructor && !t && !r) return !1;
  var o;
  for (o in e);
  return 'undefined' == typeof o || n.call(e, o)
  },
  l = function (e, t) {
  r && '__proto__' === t.name ? r(e, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  })  : e[t.name] = t.newValue
  },
  c = function (e, t) {
  if ('__proto__' === t) {
    if (!n.call(e, t)) return;
    if (o) return o(e, t).value
  }
  return e[t]
  };
  e.exports = function d() {
  var e,
  t,
  n,
  i,
  r,
  o,
  u = arguments[0],
  p = 1,
  f = arguments.length,
  v = !1;
  for ('boolean' == typeof u && (v = u, u = arguments[1] || {
  }, p = 2), (null == u || 'object' !== ('undefined' == typeof u ? 'undefined' : _typeof2(u)) && 'function' != typeof u) && (u = {
  }); p < f; ++p) if (e = arguments[p], null != e) for (t in e) n = c(u, t),
  i = c(e, t),
  u !== i && (v && i && (s(i) || (r = a(i))) ? (r ? (r = !1, o = n && a(n) ? n : [
  ])  : o = n && s(n) ? n : {
  }, l(u, {
    name: t,
    newValue: d(v, o, i)
  }))  : 'undefined' != typeof i && l(u, {
    name: t,
    newValue: i
  }));
  return u
  }
  },
  function (e, t, n) {
  var i = n(27).EventEmitter,
  r = n(6) (),
  o = {
  qq: n(42),
  wx: n(44),
  mqb: n(45)
  },
  a = e.exports = function (e) {
  function t(e, t) {
    l.readyState = !0,
    !e && (l.state = t),
    l.emit('ready')
  }
  var s = 2,
  l = Object.create(new i, {
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
    r.browser.MQQReader ? t(null, 0)  : r.browser.WeChat ? (o.wx(e, function () {
      t.apply(this, arguments),
      l.model.callback = 'weixin%3A%2F%2F',
      l.model.sender = 'weixin'
    }), r.os.android && n(46) (l, function (e, t) {
      e && e.stack && void 0,
      l.downloader = t
    }))  : r.browser.MQQClient ? (o.qq(e, function () {
      t.apply(this, arguments),
      l.model.callback = 'mqqapi%3A%2F%2F',
      l.model.sender = '%E6%89%8B%E6%9C%BAQQ'
    }), r.os.android && n(49) (l, function (e, t) {
      e && e.stack && void 0,
      l.downloader = t
    }))  : r.browser.MQQBrowser ? o.mqb(e, function () {
      t.apply(this, arguments),
      l.model.callback = 'mqqbrowser%3A%2F%2F',
      l.model.sender = 'QQ%E6%B5%8F%E8%A7%88%E5%99%A8'
    })  : r.browser.QQvideo ? n(50) (l, function (e) {
      e.check(function (n) {
        t(null, n ? 1 : 0),
        l.downloader = e
      })
    })  : r.browser[e.uaname] ? t(null, 1)  : t(null, 2)
  } catch (c) {
  }
  return l
  };
  a.STATE = n(51) ['native']
  },
  function (e, t, n) {
  function i(e, t) {
  var n = r.os.iphone,
  i = n ? e.pkgurl : e.pkg;
  !n && window.QQApi && QQApi.checkAppInstalled ? QQApi.checkAppInstalled(i, function (e) {
    e && !/denied|permission/.test(e) && 0 != e ? (e = e.split('.'), e = e[e.length - 1], t(null, 1, e))  : t(null, 0)
  })  : window.mqq && mqq.app && mqq.app.isAppInstalled ? mqq.app.isAppInstalled(i, function (e) {
    t(null, e === !0 || e && e.result ? 1 : 0)
  })  : t(null, 2)
  }
  var r = n(6) (),
  o = n(43);
  e.exports = function (e, t) {
  var n = !1,
  r = function () {
    n || (n = !0, t.apply(this, arguments))
  };
  o(function (t) {
    t ? i(e, r)  : r(null, 2)
  }),
  setTimeout(function () {
    r(null, 2)
  }, 6000)
  }
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  var t = null;
  if (!e) return null;
  try {
    t = e.TenvideoJSBridge || e.WebViewJavascriptBridge
  } catch (n) {
  }
  return t
  }
  function r() {
  top.WebViewJavascriptBridge && (top.TenvideoJSBridge = top.WebViewJavascriptBridge, top.TenvideoJSBridge.invoke = top.WebViewJavascriptBridge.callHandler, top.TenvideoJSBridge.on = top.WebViewJavascriptBridge.registerHandler);
  var e = new a;
  d = top.TenvideoJSBridge;
  var t = d.on;
  d.on = function (n, i) {
    e._evtObjs[n] && e._evtObjs[n].length || t.call(d, n, function (t) {
      e.emit(n, t)
    }),
    e.on(n, i)
  },
  u.ready = !0;
  try {
    d.isOnMethodOverride = !0;
    var n = top.document.createEvent('Events');
    n.initEvent('onTenvideoJSBridgeOnMethodOverride'),
    top.document.dispatchEvent(n)
  } catch (i) {
  }
  }
  var o = n(8),
  a = n(13),
  s = n(6) (),
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
    var n;
    try {
      n = 'string' == typeof t ? JSON.parse(t)  : t
    } catch (i) {
      try {
        n = JSON.parse(decodeURIComponent(t))
      } catch (i) {
        return e(i.message, null, t)
      }
    }
    0 == n.errCode ? e(null, n, t)  : e(n.errCode + ':' + n.errMsg, n, t)
  }
  }, e.exports = f, s.browser.WeChat) {
  var v = !1,
  h = !1,
  m = function (e) {
    'bridge' == e && (h = !0),
    'js' == e && (v = !0),
    v && h && (d = p.WeixinJSBridge, u.ready = !0)
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
  p.wx ? m('js')  : o('//res.wx.qq.com/open/js/jweixin-1.2.0.js', function () {
    m('js')
  }),
  setTimeout(function () {
    u.ready || (d = null, u.ready = !0)
  }, 10000)
  } else if (s.browser.MQQClient) {
  if (window.mqq || window.QQApi) d = window.mqq || window.QQApi,
  u.ready = !0;
   else {
    var _ = '//s.url.cn/qqmobile/qqapi.js?_bid=152';
    o(_, function () {
      d = window.mqq || window.QQApi,
      u.ready = !0
    })
  }
  setTimeout(function () {
    u.ready || (d = null, u.ready = !0)
  }, 6000)
  } else if (s.browser.QQvideo) if (i(p)) r();
   else {
  document.addEventListener('onTenvideoJSBridgeReady', r),
  document.addEventListener('WebViewJavascriptBridgeReady', r);
  var w = setInterval(function () {
    i(p) ? (clearInterval(w), r())  : u.ready && clearInterval(w)
  }, 200);
  setTimeout(function () {
    u.ready || (d = null, u.ready = !0)
  }, 6000)
  } else if (s.browser.qqnews) window.TencentNews ? (d = window.TencentNews, u.ready = !0)  : o('http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1', function () {
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
    var y = document.createElement('iframe');
    y.style.display = 'none',
    y.src = 'https://__bridge_loaded__',
    document.documentElement.appendChild(y),
    setTimeout(function () {
      document.documentElement.removeChild(y)
    }, 0)
  }
  setTimeout(function () {
    u.ready || (d = null, u.ready = !0)
  }, 6000)
  } else d = null,
  u.ready = !1
  },
  function (e, t, n) {
  function i(e, t) {
  var n = window.WeixinJSBridge;
  n.invoke || t(new Error('could not access weixinjsbridge')),
  setTimeout(function () {
    n.invoke('getInstallState', {
      packageUrl: e.pkgurl,
      packageName: e.pkg
    }, function (e) {
      var n = e.err_msg;
      n.indexOf('get_install_state:yes') > - 1 ? t(null, 1)  : t(null, 0)
    })
  }, 50)
  }
  var r = n(43);
  e.exports = function (e, t) {
  var n = !1,
  o = function () {
    n || (n = !0, t.apply(this, arguments))
  };
  r(function (t) {
    t ? i(e, function (e, t) {
      o(e, t)
    })  : o(null, 0)
  }),
  setTimeout(function () {
    o(null, 0)
  }, 10000)
  }
  },
  function (e, t, n) {
  function i(e, t) {
  if (window.x5 && x5.ios && x5.ios.getMobileAppSupport) {
    var n = {
      scheme: e.pkgurl
    };
    x5.ios.getMobileAppSupport(n, function (e) {
      t(null, e && 1 == e.isSupportApp ? 1 : 0)
    }, function () {
      t(null, 0)
    })
  } else t(null, 0);
  setTimeout(function () {
    t(null, 0)
  }, 300)
  }
  var r = n(42),
  o = n(8),
  a = n(6) ();
  e.exports = function (e, t) {
  var n = !1,
  s = function () {
    n || (n = !0, t.apply(this, arguments))
  };
  if (!a.os.iphone && window.QQApi && QQApi.checkAppInstalled) return r.apply(this, arguments);
  if (!a.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
    var l = window.x5mtt.isApkInstalled('{"packagename": ' + e.pkg + '}');
    s(null, l != - 1 ? 1 : 0)
  } else if (a.os.iphone && parseInt(a.os.version) > 5) if (window.x5) i(e, s);
   else {
    var c = '//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js';
    o(c, function () {
      window.x5 ? i(e, s)  : s(null, 2)
    })
  } else s(null, 2);
  setTimeout(function () {
    s(null, 2)
  }, 6000)
  }
  },
  function (e, t, n) {
  function i(e, t) {
  var n = u.getItem('m_video_download_md5'),
  i = u.getItem('m_video_download_confid'),
  o = u.getItem('m_video_download_id'),
  a = u.getItem('m_video_download_progress'),
  s = Date.now() - u.getItem('m_video_download_time');
  i && o && s < 1296000000 ? WeixinJSBridge.invoke('queryDownloadTask', {
    download_id: o
  }, function (s) {
    'download_succ' == s.state || 'downloading' == s.state ? t(null, r(e, {
      md5: n || '',
      confid: i,
      download_id: o,
      progress: a,
      local: !0
    }))  : t(null, r(e, {
      local: !1
    }))
  })  : t(null, r(e, {
    local: !1
  }))
  }
  function r(e, t) {
  var n = {
    md5: t.md5,
    confid: t.confid,
    id: t.download_id,
    progress: t.progress || 0,
    url: ''
  },
  i = {
    'native': {
      value: e
    },
    local: {
      value: t.local,
      writable: !0
    }
  };
  Object.keys(n).forEach(function (t) {
    i[t] = {
      get: function () {
        return n[t]
      },
      set: function (e) {
        n[t] = e,
        u.setItem('m_video_download_' + t, e),
        u.setItem('m_video_download_time', Date.now())
      }
    },
    'progress' == t && (i.progress.set = function (i) {
      n[t] = i,
      u.setItem('m_video_download_' + t, i),
      e.emit('progress', i)
    })
  });
  var r = Object.create(f, i),
  o = function (t) {
    t = t.data || t._args || t;
    try {
      window[e['package'].playerDownloadCallback](t)
    } catch (n) {
    }
    t.download_id != r.id && '' != t.download_id || (e.state = p[t.state])
  };
  return e['package'].wxDownloaderCallback ? window[e['package'].wxDownloaderCallback] = o : document.addEventListener('wxdownloader:state_change', function (e) {
    o.call(this, e.detail)
  }),
  r
  }
  function o(e, t) {
  c(e, function (e, n) {
    e && t(304),
    n && n.md5 && 'null' != n.md5 ? t(null, n)  : t(501)
  })
  }
  function a(e, t, n) {
  var i = this;
  WeixinJSBridge.invoke('addDownloadTask', {
    task_name: e,
    task_url: t,
    file_md5: n || '',
    thumb_url: i['native']['package'].icon,
    title: i['native']['package'].name
  }, function (e) {
    var r = e.err_msg;
    i.id = e.download_id,
    i.md5 = n,
    i.url = t,
    i.local = !0,
    r.indexOf('add_download_task:ok') > - 1 ? (i['native'].state = s.DOWNLOADING, !i.timer && (i.timer = setInterval(function () {
      i['native'].state == s.INSTALLING || i['native'].state == s.DOWNLOADED ? setTimeout(function () {
        WeixinJSBridge.invoke('getInstallState', {
          packageName: i['native']['package'].pkg,
          packageUrl: i['native']['package'].pkgurl
        }, function (e) {
          var t = e.err_msg;
          t.indexOf('yes') > - 1 && (i['native'].state = s.INSTALLED)
        })
      }, 50)  : i['native'].state == s.DOWNLOADING && (i.progress = Math.min(90, i.progress + 1))
    }, 150)))  : r.indexOf('add_download_task:cancel') > - 1 && (i['native'].state = s.CANCEL)
  })
  }
  var s = n(41).STATE,
  l = n(43),
  c = n(47),
  d = n(48),
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
  var n = !1,
  r = function () {
    n || (n = !0, t.apply(this, arguments))
  };
  l(function (t) {
    t ? (i(e, r), e['package'].wxDownloaderCallback || WeixinJSBridge.on('wxdownload:state_change', function (e) {
      document.dispatchEvent(new CustomEvent('wxdownloader:state_change', {
        detail: e
      }))
    }))  : r(!1)
  }),
  setTimeout(function () {
    r(null, null)
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
      var n = function (n, i) {
        if (n) {
          var r = function () {
            clearTimeout(s),
            o()
          },
          o = function () {
            try {
              window.removeEventListener('blur', r)
            } catch (e) {
            }
          };
          window.addEventListener('blur', r),
          setTimeout(function () {
            o()
          }, 3000);
          var s = setTimeout(function () {
            o(),
            location.href = e.url
          }, 2000);
          a.call(t, t['native']['package'].name, e.url, '')
        } else a.call(t, t['native']['package'].name, e.url, i.md5)
      },
      i = e.confid;
      if (/mcgi\.v\.q\.com/.test(this.url) || /commdatav2/.test(this.url)) {
        var r = d.queryParse((this.url || '').split('?') [1] || '');
        i = r.cmd && /^\d+$/.test(r.confid) ? Number(r.confid)  : ''
      }
      e.verify === !1 ? n(null, {
        md5: ''
      })  : o(this['native']['package'].md5(i, this.url), n)
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
  function (e, t, n) {
  'use strict';
  function i() {
  }
  function r() {
  return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  function o(e) {
  e && e.parentNode && e.parentNode.removeChild(e)
  }
  function a(e, t, n) {
  var a = arguments;
  return s(function (s, h) {
    var m;
    if ('object' == ('undefined' == typeof t ? 'undefined' : _typeof2(t)) && (m = t, t = n, n = a[3]), m = m || {
    }, n = n || {
    }, t = t || i, 'function' != typeof t) throw Error('illegal jsonp callback function:', t);
    var g = document.getElementsByTagName('head') ? document.getElementsByTagName('head') [0] : document.body,
    _ = document.createElement('script');
    _.charset = 'UTF-8';
    var w = [
      n.ns || d,
      p++,
      r()
    ].join('_'),
    y = !0,
    b = '_t',
    x = n.time;
    n.callbackid && (w = n.callbackid),
    x === !1 ? y = !1 : x && (b = x),
    m[n.pn || n.callbackName || u] = w,
    y && (m[b] = + new Date);
    var k = function (e) {
      o(_),
      t(null, e),
      s && s(e)
    },
    T = function (e) {
      o(_),
      t(e || 'error'),
      window[w] = k = T = i,
      h && h(e || error)
    },
    E = window[w];
    window[w] = function (e) {
      window[w] = i;
      try {
        E && E(e)
      } finally {
        k(e),
        k = T = i
      }
    },
    _.onerror = _.onabort = function (e) {
      T(e ? e.type : 'error')
    },
    l.forEach(v, function (t) {
      'function' == l.type(t) && (e = t(e, m) || e)
    }),
    _.src = c.queryJoin(e, m),
    g.appendChild(_),
    setTimeout(function () {
      T('timeout')
    }, n.timeout || f)
  })
  }
  function s(e) {
  return window.Promise ? new Promise(e)  : void e(i, i)
  }
  var l = n(12),
  c = n(48),
  d = '_jsonp',
  u = 'callback',
  p = 0,
  f = 20000,
  v = [
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
  v.push(e)
  },
  e.exports = a
  },
  function (e, t, n) {
  'use strict';
  var i = n(12),
  r = {
  queryParse: function (e, t) {
    if (!e) return {
    };
    t = t || '&';
    var n = e.replace(/^\?/, ''),
    r = {
    },
    o = n ? n.split(t)  : null;
    return o && o.length > 0 && i.forEach(o, function (e) {
      e = e.split('=');
      var t = e.splice(0, 1),
      n = e.join('=');
      r[t] = decodeURIComponent(n)
    }),
    r
  },
  queryJoin: function (e) {
    var t = [
    ].slice.call(arguments);
    t[0] = {
    };
    var n = r.queryStringify(i.extend.apply(i, t));
    if (!n) return e;
    var o;
    return o = /[\?&]$/.test(e) ? '' : ~e.indexOf('?') ? '&' : '?',
    e + o + n
  },
  queryStringify: function (e, t) {
    return e ? i.map(i.keys(e), function (t) {
      return t + '=' + encodeURIComponent(e[t])
    }).join(t || '&')  : ''
  }
  };
  e.exports = r
  },
  function (e, t, n) {
  'use strict';
  function i(e, t) {
  t(null, r(e))
  }
  function r(e) {
  var t = 0,
  n = {
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
      set: function (n) {
        t = n,
        e.emit('progress', n)
      }
    }
  },
  i = Object.create(p, n);
  return document.addEventListener('qqdownloader:state_change', function (t) {
    var n = t.detail;
    try {
      window[e['package'].playerDownloadCallback](n)
    } catch (t) {
    }
    n = n[0] ? n : [
      n
    ],
    n.forEach(function (t) {
      t.appid == i.appid + i.confid && (e.state = c[n.state])
    })
  }),
  i
  }
  function o(e, t) {
  e = String(e).split('.'),
  t = String(t).split('.');
  try {
    for (var n = 0, i = Math.max(e.length, t.length); n < i; n++) {
      var r = isFinite(e[n]) && Number(e[n]) || 0,
      o = isFinite(t[n]) && Number(t[n]) || 0;
      if (r < o) return - 1;
      if (r > o) return 1
    }
  } catch (a) {
    return - 1
  }
  return 0
  }
  var a = n(41).STATE,
  s = n(43),
  l = n(12);
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
  var n = !1,
  r = function () {
    n || (n = !0, t.apply(this, arguments))
  },
  a = function (e) {
    return e && e[1] || 0
  }(navigator.userAgent.match(/V1_AND_SQ_([\d\.]+)/));
  o(a, '4.5.0') < 0 && r(null, null),
  s(function (t) {
    t ? i(e, r)  : r({
    }, null)
  }),
  setTimeout(function () {
    r(null, null)
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
  function (e, t, n) {
  var i = n(40),
  r = n(51) ['native'],
  o = {
  pkg: '',
  pkgurl: '',
  downloadUrl: '',
  iconUrl: '',
  appName: '',
  confid: ''
  },
  a = function (e) {
  this.config = i(o, e),
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
  s.ready(function (n) {
    n.invoke('isInstalled', {
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
    var n = {
      downloadUrl: t.config.downloadUrl,
      packageName: t.config.pkg,
      iconUrl: t.config.icon,
      appName: t.config.name,
      itunesUrl: t.config.downloadUrl,
      packageUrl: '',
      channel: ''
    };
    e.invoke('download3rdApp', n, function (e) {
    })
  })
  },
  a.prototype.open = function (e) {
  var t = this;
  s.ready(function (n) {
    var i = {
      pkgName: t.config.pkg,
      pkgUrl: t.config.pkgurl,
      schemeUrl: e,
      appName: t.config.name
    };
    n.invoke('launch3rdApp', i, function (e) {
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
  10: r.INSTALLED,
  11: r.DOWNLOADED,
  12: r.CANCEL,
  13: r.DOWNLOADING,
  14: r.PAUSE
  };
  e.exports = function (e, t) {
  try {
    var n = new a(e['package']);
    n.onProgressChange(function (t) {
      e.emit('progress', t)
    }),
    n.onTaskChange(function (t) {
      l[t] && (e.state = l[t])
    }),
    t(n)
  } catch (i) {
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
  function (e, t, n) {
  'use strict';
  function i(e) {
  this._con = e
  }
  function r() {
  return c || window.jQuery || window.$ || g
  }
  function o(e) {
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
    h.hot(e, p.extend({
    }, E, t))
  }
  function n(e, n, i) {
    return t([b,
    'event',
    e,
    n,
    i || '']),
    this
  }
  function i(e, n, i) {
    return t([b,
    'click',
    e,
    n || '',
    i]),
    this
  }
  function v(e, n, i) {
    return t([b,
    'pageview',
    e,
    n || '',
    i || '']),
    this
  }
  function g(e, t) {
    switch (e) {
      case 'click':
        i.apply(this, t);
        break;
      case 'pageview':
        v.apply(this, t);
        break;
      case 'event':
        n.apply(this, t)
    }
  }
  function _(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    if (m) try {
      var n = localStorage.getItem(x);
      try {
        n = a(n)
      } catch (i) {
      }
      return 'array' !== p.type(n) && (n = [
      ]),
      n.push([e].concat(t)),
      void localStorage.setItem(x, o(n))
    } catch (i) {
    }
    g(e, t)
  }
  function w() {
  }
  var y = 'index',
  b = 'boss_common',
  x = b + '_lazy_reports',
  k = e && e.standard,
  T = e && e.loaded,
  E = {
  },
  S = {
    create: s,
    ptag: h.ptag,
    standard: function (e) {
      return s(p.extend({
        standard: !0
      }, e))
    },
    click: function (e, t) {
      var n = (e + '.' + (t || '')).split('.');
      return i(y, n[0], n[1])
    },
    event: function (e, t) {
      var i = (e + '.' + (t || '')).split('.');
      return n(y, i[0], i[1])
    },
    pv: function (e, t, n) {
      var i = (e + '.' + (t || '') + '.' + (n || '')).split('.');
      v(i[0], i[1], i[2])
    },
    pagestat: function (e) {
      var n = Array.prototype.slice.call(arguments, 1);
      return n.unshift(b, e, y),
      t(n),
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
        S.flush()
      }, 1000),
      this
    },
    setPage: function (e) {
      return y = e,
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
            T = !!t;
            break;
          case 'source':
            E[e] = t
        }
      }), this
    },
    bind2d: function (e, t, n, i, o) {
      var a = r(),
      s = this;
      return a(e).on('click', '[' + n + ']', function (e) {
        var r = e.currentTarget,
        l = a(r),
        c = l.attr(n),
        d = l.attr(i),
        u = [
        ];
        o && (u = (l.attr(o) || '').split(/\,\s*/));
        for (var p, f = 10; f && r && !(p = a(r).attr(t)); ) f--,
        r = r.parentNode;
        p && s.click.apply(s, [
          p,
          c,
          d
        ].concat(u))
      }),
      this
    },
    bind: function (e, t) {
      var n = r();
      return n(e).on('click', '[' + t + ']', function (e) {
        var r = e.currentTarget,
        o = n(r),
        a = o.attr(t),
        s = (a + '.').split('.');
        if ('A' == r.tagName) {
          var l = o.attr('href'),
          c = o.attr('target'),
          d = (l || '').match(/^([a-zA-Z]+)\:/);
          if (d = d ? d[1] : '', !/^(javascript:|#)/.test(l) && !c && (!d || /^https?$/.test(d))) return void _('click', y, s[0], s[1])
        }
        i(y, s[0], s[1])
      }),
      this
    },
    bindLazy: function (e, t) {
      var n = r();
      return n(e).on('click', '[' + t + ']', function (e) {
        var i = e.currentTarget,
        r = n(i),
        o = r.attr(t);
        _('click', y, o, '')
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
      return h.host && h.host(e),
      this
    },
    setExtraReporter: function (e) {
      return h.setExtraReporter(e),
      this
    }
  };
  if (k) {
    var C = S.bind2d,
    O = document.body,
    I = '_module',
    q = '_pos',
    P = [
    ];
    S.bind = function (e, t, n, i) {
      return O = e || O,
      I = t || I,
      q = n || q,
      C.call(S, O, I, q, i || '_detail', '_exts')
    },
    S.bind2d = S.bind;
    var A = {
    },
    M = 0;
    p.extend(S, {
      stat: w,
      pagestat: w,
      bindExpose: function (e, t, n, i) {
        var o = r(),
        a = e || O,
        s = t || I,
        c = n || q;
        if (i = i || {
        }, !a.querySelectorAll) return this;
        var d = a.querySelectorAll('[' + c + ']');
        return p.forEach(d, function (e) {
          if (!e._binded_expose) {
            e._binded_expose = !0;
            var t = l(I, e),
            n = M++;
            if (t) {
              var r = o(t),
              a = o(e),
              d = f(e, {
                inview: !!i.inview,
                once: !0,
                enter: !0,
                recalc: !0,
                offset: i.inview ? 20 : 0,
                horiz: t.hasAttribute && t.hasAttribute('_horiz'),
                listenHoriz: !0
              }, function () {
                var e = r.attr(s) || '',
                t = a.attr(c) || '',
                i = a.attr('_detail') || '',
                o = (a.attr('_exts') || '').split(/\,\s*/);
                e && S.expose.apply(S, [
                  e,
                  t,
                  i
                ].concat(o)),
                d && (delete A[n], d())
              });
              A[n] = d
            }
          }
        }),
        this
      },
      updateExpose: function () {
        return f.message.emit('update'),
        this
      },
      click: function (e, n, i) {
        return arguments.length < 2 && (n = e, e = ''),
        t([b,
        'click',
        y,
        e,
        n,
        i].concat(this.getExts(3, arguments)).concat(P), {
          standard: k
        }),
        this
      },
      event: function (e, n, i) {
        return arguments.length < 2 && (n = e, e = ''),
        t([b,
        'event',
        y,
        e,
        n,
        i].concat(this.getExts(3, arguments)).concat(P), {
          standard: k
        }),
        this
      },
      expose: function (e, n, i) {
        return t([b,
        'expose',
        y,
        e,
        n,
        i].concat(this.getExts(3, arguments)).concat(P), {
          standard: k
        }),
        this
      },
      pv: function (e, n, i, r) {
        return t([b,
        'pageview',
        e || y,
        n,
        i,
        r].concat(this.getExts(4, arguments)).concat(P), {
          standard: k
        }),
        this
      },
      exts: function () {
        var e = [
        ].slice.call(arguments, 0);
        return P = e,
        this
      },
      getExts: function (e, t) {
        return t = [
        ].slice.call(t, 0),
        t.slice(e).concat(new Array(4)).slice(0, 4)
      }
    })
  }
  return S
  }
  function l(e, t) {
  for (var n, i = r(), o = 10; o && t && !(n = i(t).attr(e)); ) o--,
  t = t.parentNode;
  return t
  }
  var c,
  d,
  u,
  p = n(12),
  f = n(11),
  v = n(53),
  h = n(55),
  m = 'localStorage' in window && null !== window.localStorage,
  g = function (e) {
  return new i(e)
  };
  i.prototype.on = function (e, t, n) {
  v(this._con, t, e, function (e) {
    n({
      currentTarget: e.delegateTarget
    })
  })
  },
  i.prototype.attr = function (e) {
  return this._con.getAttribute(e)
  },
  h.uuidGetter && h.uuidGetter(function () {
  if (d) try {
    return d()
  } catch (e) {
  }
  }),
  h.referrerGetter && h.referrerGetter(function () {
  if (u) try {
    return u()
  } catch (e) {
  }
  }),
  e.exports = s()
  },
  function (e, t, n) {
  function i(e, t, n, i, r) {
  var a = o.apply(this, arguments);
  return e.addEventListener(n, a, r),
  {
    destroy: function () {
      e.removeEventListener(n, a, r)
    }
  }
  }
  function r(e, t, n, r, o) {
  return 'function' == typeof e.addEventListener ? i.apply(null, arguments)  : 'function' == typeof n ? i.bind(null, document).apply(null, arguments)  : ('string' == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
    return i(e, t, n, r, o)
  }))
  }
  function o(e, t, n, i) {
  return function (n) {
    n.delegateTarget = a(n.target, t),
    n.delegateTarget && i.call(e, n)
  }
  }
  var a = n(54);
  e.exports = r
  },
  function (e, t) {
  function n(e, t) {
  for (; e && e.nodeType !== i; ) {
    if ('function' == typeof e.matches && e.matches(t)) return e;
    e = e.parentNode
  }
  }
  var i = 9;
  if ('undefined' != typeof Element && !Element.prototype.matches) {
  var r = Element.prototype;
  r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
  }
  e.exports = n
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  var t = document.referrer || e.referrer || '',
  n = O || u.get('openid'),
  i = u.get('o_cookie') || u.get('uin') || u.get('luin'),
  r = u.get('appid'),
  a = u.get('main_login');
  return x + (e.standard ? q : I) + '&s_uuid=' + (w() || o()) + (t ? '&s_referrer=' + encodeURIComponent(t)  : '') + (n ? '&s_openid=' + n : '') + (i ? '&s_uin=' + i : '') + (r ? '&s_appid=' + r : '') + (a ? '&s_mainlogin=' + a : '') + ('&s_url=' + encodeURIComponent(location.href.split('?') [0]))
  }
  function r() {
  function e() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  return [e(),
  e(),
  e(),
  e()].join('')
  }
  function o() {
  if (E) return E;
  var e = u.get('tvfe_boss_uuid');
  if (!e) {
    e = r();
    try {
      u.set('tvfe_boss_uuid', e, 'qq.com', !1, 87600)
    } catch (t) {
      u.set('tvfe_boss_uuid', e, '', !1, 87600)
    }
  }
  return E = e,
  e
  }
  function a(e, t) {
  t = t || {
  };
  var n = t.loaded,
  r = 'number' == v.type(n) ? n : 500;
  'string' == v.type(e) ? (e = e.replace(/\.$/, '').split('.'), e.length < 3 || e.length > 5)  : 'array' != v.type(e) && (e = [
  ]);
  var o = '';
  if (t.standard) {
    o = i({
      standard: !0,
      referrer: y()
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
    v.forEach(a, function (t, n) {
      var i = e[n];
      null !== i && void 0 !== i && '' !== i && t && (o += '&' + t + '=' + encodeURIComponent(i))
    })
  } else {
    var l = t.source || '';
    if ('function' == v.type(l)) try {
      l = l()
    } catch (d) {
    }
    o = i({
      referrer: y()
    }),
    o += '&s_app=' + encodeURIComponent(e[0] || '') + '&s_module=' + encodeURIComponent(e[1] || '') + '&s_behave=' + encodeURIComponent(e[2] || '') + '&s_sub=' + encodeURIComponent(e[3] || '') + '&s_fifth=' + encodeURIComponent(e[4] || '') + (l ? '&s_source=' + encodeURIComponent(l)  : '')
  }
  o += C ? '&s_ptag=' + encodeURIComponent(C)  : '',
  o += '&_dc=' + Math.ceil(10000000 * Math.random());
  var u = function () {
    if (t && t.lazy) f.push(o);
     else if (n) {
      var e = v.once(function () {
        P(o)
      });
      s(e),
      setTimeout(e, r)
    } else P(o)
  };
  t.standard ? (c.os.iphone ? o += '&s_platform=5' : c.os.android ? o += '&s_platform=3' : c.os.windows && k && (o += '&s_platform=1'), m(function (e) {
    var t = e.bucketId;
    t && (o += '&plat_bucketid=' + t);
    var n = e.omgid;
    n && (o += '&s_omgid=' + n);
    var i = e.idfa;
    i && (o += '&s_idfa=' + i);
    var r = e.imei;
    r && (o += '&s_imei=' + r),
    u()
  }))  : u()
  }
  function s(e) {
  if (A) e();
   else if (M) var t = g.on('ready', function () {
    t(),
    e()
  });
   else {
    var n = v.once(function () {
      M = !1,
      A = !0;
      try {
        e()
      } finally {
        g.emit('ready')
      }
    });
    window.addEventListener ? window.addEventListener('load', n)  : window.attachEvent ? window.attachEvent('onload', n)  : n(),
    setTimeout(n, 5000)
  }
  }
  var l,
  c = n(6) (),
  d = n(32),
  u = n(10),
  p = n(56),
  f = n(9),
  v = n(12),
  h = n(13),
  m = n(59),
  g = new h,
  _ = function () {
  },
  w = _,
  y = _,
  b = _,
  x = '//btrace.video.qq.com',
  k = /qqlive/i.test(navigator.userAgent);
  try {
  l = window.jQuery || window.Zepto || window.tvp && window.tvp.$
  } catch (T) {
  }
  l && l(document.body).on('click', '[_boss]', function (e) {
  var t = l(e.currentTarget);
  a(t.attr('_boss'))
  });
  var E,
  S = window.sessionStorage || {
  getItem: function () {
    return ''
  }
  },
  C = d.get('ptag') || S.getItem('ptag') || u.get('ptag'),
  O = d.get('openid'),
  I = '/kvcollect?BossId=3255&Pwd=2118551257&s_ua=' + navigator.userAgent + '&s_browser=' + c.browser.name,
  q = '/kvcollect?BossId=5982&Pwd=1952884855&s_ua=' + navigator.userAgent,
  P = function (e) {
  p(e),
  'function' == typeof b && b(e)
  };
  e.exports = {
  uuid: function () {
    return o()
  },
  uuidGetter: function (e) {
    w = e || _
  },
  referrerGetter: function (e) {
    y = e || _
  },
  setExtraReporter: function (e) {
    b = e || _
  },
  ptag: function (e) {
    C = e
  },
  host: function (e) {
    x = e
  },
  hot: a,
  uid: o
  };
  var A,
  M
  },
  function (e, t, n) {
  'use strict';
  var i = n(57),
  r = /(\.|^)qq\.com$/.test(location.hostname);
  (i.isAndroid() || i.isIOS()) && r ? e.exports = n(58)  : e.exports = n(4)
  },
  function (e, t) {
  'use strict';
  var n = navigator.userAgent,
  i = n.toLowerCase();
  e.exports = {
  isIE: function () {
    return /; msie\b|; trident\b|\bedge\//.test(i)
  },
  isWX: function () {
    return /micromessenger/.test(i)
  },
  isQQ: function () {
    return /\bqq\b/.test(i)
  },
  isQQBrowser: function () {
    return /mqqbrowser/.test(i)
  },
  isQQLive: function () {
    return /qqlive/.test(i)
  },
  isQQLiveBroadcast: function () {
    return /qqlivebroadcast/.test(i)
  },
  isMobile: function () {
    return !!(n.match(/Android/i) || n.match(/android/i) || n.match(/iPhone/i) || n.match(/iPod/i) || n.match(/webOS/i) || n.match(/BlackBerry/i) || n.match(/BB/i) || n.match(/Windows Phone/i) || n.match(/iPad.*MicroMessenger/i) || n.match(/IEMobile/i))
  },
  isIOS: function () {
    return /iPad|iPhone|iPod/.test(n) && !window.MSStream
  },
  isMac: function () {
    return /\bmac\b/.test(i)
  },
  isPC: function () {
    return /Win/.test(n)
  },
  isAndroid: function () {
    return /android/.test(i)
  },
  isChrome: function () {
    return /Chrome\//.test(n)
  },
  wxVer: function () {
    var e = i.match(/micromessenger\/([\d\.]+)/);
    return e ? e[1] : ''
  },
  androidVer: function () {
    var e = i.match(/android\s([0-9\.]*)/);
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
  function (e, t, n) {
  function i(e) {
  window.TenvideoJSBridge ? e(TenvideoJSBridge)  : document.addEventListener('onTenvideoJSBridgeReady', function () {
    e(TenvideoJSBridge)
  }, !1)
  }
  var r = n(6) (),
  o = '',
  a = '',
  s = '',
  l = '',
  c = '',
  d = !1,
  u = !1,
  p = !1,
  f = [
  ];
  d = u = !r.browser.QQvideo,
  e.exports = function (e) {
  if (d && u) return void e({
    omgid: o,
    guid: a,
    idfa: s,
    imei: l,
    bucketId: c
  });
  if (f.push(e), !p) {
    p = !0;
    var t = !1,
    n = function () {
      if (!t && d && u) {
        t = !0;
        var e = f;
        f = [
        ];
        for (var n = {
          omgid: o,
          guid: a,
          idfa: s,
          imei: l,
          bucketId: c
        }, i = 0, r = e.length; i < r; i++) setTimeout(e[i], 0, n)
      }
    };
    setTimeout(function () {
      d = u = !0,
      n()
    }, 3000),
    i(function (e) {
      e.invoke('getDeviceInfo', null, function (e) {
        d = !0;
        var t;
        try {
          t = JSON.parse(e).result
        } catch (i) {
        }
        t || (t = {
        }),
        o = t.omgid,
        s = t.idfa,
        l = t.imei,
        a = t.guid,
        n()
      }),
      e.invoke('getAppInfo', null, function (e) {
        u = !0;
        var t;
        try {
          t = JSON.parse(e).result
        } catch (i) {
        }
        t || (t = {
        }),
        c = t.bucketId,
        n()
      })
    })
  }
  }
  },
  function (e, t, n) {
  'use strict';
  var i = n(6) ();
  e.exports = function () {
  return function (e, t) {
    t = t || {
    };
    t.debug || window.BANNERDEBUG;
    if (i.browser.Safari) location.href = e;
     else if (i.browser.sukan && i.os.ios && parseInt(i.os.version) <= 9) location.href = e;
     else {
      var n = document.createElement('iframe');
      n.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
      n.src = e,
      document.body.appendChild(n)
    }
    var r = Date.now();
    setTimeout(function () {
      var e = Date.now();
      e - r < 3050 && t.onfail && t.onfail()
    }, 3000)
  }
  }
  },
  function (e, t, n) {
  'use strict';
  var i = (n(43), navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/)),
  r = n(62),
  o = n(12),
  a = n(6) ();
  e.exports = function (e) {
  if (!e) throw new Error('需要传入package对象，获得公众号appid和应用appid');
  var t = e.wxappid,
  n = e.appappid;
  return function (e, s, l) {
    s = s || {
    },
    l = l || {
    };
    s.debug || window.BANNERDEBUG;
    i && 1 != o.verCompare('6.5.5', i[1]) ? setTimeout(function () {
      location.href = e
    }, 50)  : a.os.ipad ? WeixinJSBridge.invoke('launchApplication', {
      schemeUrl: e
    }, function (e) {
      'launchApplication:ok' != e.err_msg && s.onfail && s.onfail()
    })  : r({
      appId: t
    }, function () {
      function t() {
        return 'function' == typeof wx.invoke ? wx.invoke.apply(wx, arguments)  : void window.WeixinJSBridge.invoke.apply(WeixinJSBridge, arguments)
      }
      var i = {
        appID: n,
        extInfo: e,
        parameter: e
      };
      l.schemeOnly && (i = {
        schemeUrl: e
      }),
      t('launchApplication', i, function (e) {
        'launchApplication:ok' != e.err_msg && s.onfail && s.onfail()
      })
    })
  }
  }
  },
  function (e, t, n) {
  'use strict';
  function i(e, t) {
  t = d.once(t || r);
  var n = d.extend({
    debug: !1,
    beta: !0,
    appId: f
  }, e);
  u(n.api || '//video.qq.com/fcgi-bin/get_js_signature', {
    otype: 'json',
    appid: n.appId,
    url: location.href.split('#') [0]
  }, function (e, i) {
    function r() {
      wx.config({
        beta: n.beta,
        debug: n.debug,
        appId: n.appId,
        timestamp: i.timestamp,
        nonceStr: i.ramdon_str,
        signature: i.signature,
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
        ].concat(n.jsApiList || [
        ])
      }),
      wx.ready(function () {
        t(null, i)
      }),
      wx.error(function (e) {
        t(e || 'WX sign error.', i)
      })
    }
    return i && 0 === i.ret ? void (window.wx ? r()  : document.addEventListener('WeixinJSBridgeReady', r))  : t(e || i && i.msg || 'error')
  }, {
    pn: 'callback_func'
  })
  }
  function r() {
  }
  function o(e, t) {
  return t = t || r,
  p.isWX() ? c ? void t(null, l)  : (s || (a = e, s = d.delegator(function (e) {
    return i(a, function (t, n) {
      t || (c = !0, l = n),
      e(t, n)
    })
  }), window.addEventListener('popstate', function () {
    l = c = null,
    s()
  }), v && (history.pushstate = function () {
    return setTimeout(function () {
      l = c = null,
      s()
    }, 0),
    v.apply(history, arguments)
  })), s(t))  : void t('Only work for wx app')
  }
  var a,
  s,
  l,
  c,
  d = n(12),
  u = n(47),
  p = n(57),
  f = 'wx5a3178167066897b',
  v = history.pushstate;
  o.appId = f,
  o.ready = function (e) {
  function t() {
    wx.ready(e)
  }
  e && (window.wx ? t()  : document.addEventListener('WeixinJSBridgeReady', t))
  },
  e.exports = o
  },
  function (e, t, n) {
  var i = n(6) (),
  r = n(38),
  o = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  a = n(12),
  s = {
  name: '火锅',
  icon: 'https://yoo.qpic.cn/yoo_img/0/77a6834421a766fbcec344c268011fe7/0',
  pkg: 'com.tencent.firevideo',
  pkgurl: 'firevideo://can_open_me_if_install_and_regeister_this_scheme',
  downloadUrl: function () {
    return i.os.ios ? 'https://itunes.apple.com/cn/app/id1354364689?mt=8' : i.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=71&confid={confid}&platform=aphone' : 'http://v.qq.com/download.html'
  }(),
  md5: function (e) {
    return '//mcgi.v.qq.com/commdatav2?cmd=39&confid=' + e + '&platform=aphone'
  },
  uaname: 'firevideo',
  wxappid: 'wx5a3178167066897b',
  appappid: 'wx0bc363ec6a059e6b'
  },
  l = {
  tryopen: n(64) (),
  wx: n(61) (s)
  };
  window.firevideoBanner = e.exports = function (e) {
  function t(t, n) {
    var r = n.openurl,
    s = n.downloadurl;
    i.os.ios && parseInt(i.os.version) >= 9 && (t = 2),
    2 == t ? !i.browser.WeChat || o && 1 != a.verCompare('6.5.5', o[1]) ? l.tryopen(r, {
      onfail: function () {
        location.href = s
      }
    })  : l.wx(r, {
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : 1 == t || 14 == t ? i.browser.WeChat ? l.wx(r, {
      debug: e.debug || location.href.indexOf('debug') != - 1,
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : setTimeout(function () {
      location.href = r
    }, 50)  : 10 == t ? n.downloader.pause()  : 11 == t || 13 == t ? n.downloader.install()  : n.downloader && 15 != t && i.browser.WeChat ? n.downloader.start({
      url: s,
      confid: n.model.confid,
      verify: !1
    })  : setTimeout(function () {
      location.href = s
    }, 50)
  }
  e = e || {
  };
  var n = r({
    'package': e['package'] || s
  });
  return n.downloadFixer(function (e, t) {
    return e.replace('{confid}', t.confid)
  }),
  n.on('action', t),
  n
  }
  },
  function (e, t, n) {
  'use strict';
  var i = n(6) ();
  e.exports = function () {
  return function (e, t) {
    t = t || {
    };
    t.debug || window.BANNERDEBUG;
    if (i.browser.Safari) location.href = e;
     else {
      var n = document.createElement('iframe');
      n.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
      n.src = e,
      document.body.appendChild(n)
    }
    var r = setTimeout(function () {
      t.onfail && t.onfail()
    }, 2500);
    window.onblur = function () {
      clearTimeout(r)
    }
  }
  }
  },
  function (e, t, n) {
  var i = n(6) (),
  r = n(38),
  o = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  a = n(12),
  s = {
  name: '腾讯视频极速版',
  icon: 'https://puui.qpic.cn/vupload/0/20190215_1550196841750_yarxedhxe29.png/0',
  pkg: i.os.iphone ? 'com.tencent.videoplus.iphone' : 'com.tencent.videolite.android',
  pkgurl: 'videolite://',
  scheme: 'videolite://v.qq.com/HomeActivity',
  appid: 101546208,
  via: 'ANDROID.VIDEOLITE',
  downloadUrl: function () {
    return i.os.ios ? i.os.iphone ? 'https://itunes.apple.com/cn/app/id1462049868?mt=8' : 'https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8' : i.os.android ? 'http://mcgi.v.qq.com/commdatav2?cmd=76&confid={confid}&platform=aphone' : 'https://m.v.qq.com/app/tenvideo_lite_down/index.html'
  }(),
  md5: function (e) {
    return '//mcgi.v.qq.com/commdatav2?cmd=39&confid=' + e + '&platform=aphone'
  },
  uaname: 'videolite',
  wxappid: 'wx5a3178167066897b',
  appappid: 'wx434fd146a665ff62'
  },
  l = {
  tryopen: n(64) (),
  wx: n(61) (s)
  };
  window.videoliteBanner = e.exports = function (e) {
  function t(t, n) {
    var r = n.openurl,
    s = n.downloadurl;
    i.os.ios && parseInt(i.os.version) > 9 && (t = 2),
    2 == t ? !i.browser.WeChat || o && 1 != a.verCompare('6.5.5', o[1]) ? l.tryopen(r, {
      onfail: function () {
        location.href = s
      }
    })  : l.wx(r, {
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : 1 == t || 14 == t ? i.browser.WeChat ? l.wx(r, {
      debug: e.debug || location.href.indexOf('debug') != - 1,
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    })  : setTimeout(function () {
      location.href = r
    }, 50)  : 10 == t ? n.downloader.pause()  : 11 == t || 13 == t ? n.downloader.install()  : n.downloader && 15 != t ? n.downloader.start({
      url: s,
      confid: n.model.confid,
      verify: !1
    })  : setTimeout(function () {
      location.href = s
    }, 50)
  }
  e = e || {
  };
  var n = r({
    'package': e['package'] || s
  }).model(e.model || {
    confid: 51
  });
  return n.downloadFixer(function (e, t) {
    return e.replace('{confid}', t.confid)
  }),
  e.defaultAction === !1 ? n : (n.on('action', t), n)
  }
  },
  function (e, t, n) {
  var i = n(6) (),
  r = n(38),
  o = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  a = n(12),
  s = {
  name: '微视',
  icon: 'http://puui.qpic.cn/media_img/0/promotion1561031897/0',
  pkg: 'com.tencent.weishi',
  pkgurl: 'weishi://',
  scheme: 'weishi://mian?goto=recommend&logsour=2140220072',
  via: 'ANDROID.WEISHI',
  downloadUrl: function () {
    return i.os.ios ? 'https://itunes.apple.com/cn/app/id691828408' : (i.os.android, 'https://weseeugg.qq.com/download?channelid=210010139')
  }(),
  md5: function () {
    return ''
  },
  uaname: 'weishi',
  wxappid: 'wxc1fc5d34fc24f53b',
  appappid: 'wx5dfbe0a95623607b'
  },
  l = {
  tryopen: n(64) (),
  wx: n(61) (s)
  };
  window.weishiBanner = e.exports = function (e) {
  function t(t, n) {
    var r = n.openurl,
    s = n.downloadurl;
    i.os.ios && parseInt(i.os.version) >= 9 && (t = 2),
    2 == t ? !i.browser.WeChat || o && 1 != a.verCompare('6.5.5', o[1]) ? l.tryopen(r, {
      onfail: function () {
        location.href = s
      }
    })  : l.wx(r, {
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    }, {
      schemeOnly: !0
    })  : 1 == t || 14 == t ? i.browser.WeChat ? l.wx(r, {
      debug: e.debug || location.href.indexOf('debug') != - 1,
      onfail: function () {
        l.tryopen(r, {
          onfail: function () {
            location.href = s
          }
        })
      }
    }, {
      schemeOnly: !0
    })  : setTimeout(function () {
      location.href = r
    }, 50)  : 10 == t ? n.downloader.pause()  : 11 == t || 13 == t ? n.downloader.install()  : n.downloader && 15 != t && i.browser.WeChat ? n.downloader.start({
      url: s,
      confid: n.model.confid,
      verify: !1
    })  : setTimeout(function () {
      location.href = s
    }, 50)
  }
  e = e || {
  };
  var n = r({
    'package': e['package'] || s
  });
  return n.downloadFixer(function (e, t) {
    return e.replace('{confid}', t.confid)
  }),
  n.on('action', t),
  n
  }
  },
  function (e, t, n) {
  'use strict';
  var i = n(4),
  r = n(68),
  o = n(34),
  a = n(6) (),
  s = (n(32), window.tlux);
  e.exports = function (e) {
  var t = '';
  try {
    t = localStorage.getItem('mvqqcomuvid2')
  } catch (n) {
  }
  var l = t || (a.browser.name || '') + Math.random().toString(16).substring(2);
  try {
    localStorage.setItem('mvqqcomuvid2', l)
  } catch (n) {
  }
  r.init(function () {
    var t = 'http://btrace.qq.com/kvcollect?BossId=3871&Pwd=848109740&event=' + e + '&vuserid=' + (r.getVuid() || '') + '&qq=&main_login=' + (r.loginType() || '') + '&url=' + location.href + '&ptag=' + o + '&refer=' + document.referrer + '&_dc=' + Math.random() + '&browser=' + a.browser.name + '&os=' + a.os.name + '&ua_raw=' + navigator.userAgent + '&type=' + (window.COVER_TYPE || 0) + '&version=' + (['2',
    '1'].indexOf(window.COVER_TYPE) != - 1 ? '16' : '06') + '&uvid=' + l,
    n = '';
    48888 == s.store.column.model.column_id && (n = '2016_voice'),
    t += '&mark=' + n,
    i(t)
  })
  }
  },
  function (e, t, n) {
  var i = n(69);
  e.exports = i
  },
  function (e, t, n) {
  !function (t, n) {
  e.exports = n()
  }(window, function () {
  return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {
        }
      };
      return e[i].call(r.exports, r, r.exports, t),
      r.l = !0,
      r.exports
    }
    var n = {
    };
    return t.m = e,
    t.c = n,
    t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, {
        enumerable: !0,
        get: i
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
    t.t = function (e, n) {
      if (1 & n && (e = t(e)), 8 & n) return e;
      if (4 & n && 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && e && e.__esModule) return e;
      var i = Object.create(null);
      if (t.r(i), Object.defineProperty(i, 'default', {
        enumerable: !0,
        value: e
      }), 2 & n && 'string' != typeof e) for (var r in e) t.d(i, r, function (t) {
        return e[t]
      }.bind(null, r));
      return i
    },
    t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e['default']
      }
       : function () {
        return e
      };
      return t.d(n, 'a', n),
      n
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
  function (e, t, n) {
    'use strict';
    (function (e) {
      function n(e) {
        return (n = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
          return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
        }
         : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
        }) (e)
      }
      var i = 'object' == (void 0 === e ? 'undefined' : n(e)) && e && e.Object === Object && e;
      t.a = i
    }).call(this, n(2))
  },
  function (e, t) {
    function n(e) {
      return (n = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
        return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
      }
       : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
      }) (e)
    }
    var i;
    i = function () {
      return this
    }();
    try {
      i = i || new Function('return this') ()
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) && (i = window)
    }
    e.exports = i
  },
  function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
        return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
      }
       : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
      }) (e)
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
      }
    }
    function o(e, t) {
      var n = {
      };
      if (a(e) && e.length > 0) for (var i, r, o, s = t ? Se : c, l = e.split(/;\s?/g), d = 0, u = l.length; d < u; d++) {
        if ((o = l[d].match(/([^=]+)=/i)) instanceof Array) try {
          i = Se(o[1]),
          r = s(l[d].substring(o[1].length + 1))
        } catch (e) {
        } else i = Se(l[d]),
        r = '';
        i && (n[i] = r)
      }
      return n
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
    function p(e, t, n) {
      var i = '';
      if (!e) throw new Error('[util.url.buildUrl]url is required');
      return t && null !== t && (i = function (e, t, n) {
        var i,
        r,
        o,
        a = [
        ];
        for (i in e) r = e[i],
        null != (o = f(i, r, t, n)) && '' !== o && a.push(o);
        return a.join('&')
      }(t, n)) && i.length ? (0 === e.indexOf('//') && (e = window.location.protocol + e), [
        e,
        e.indexOf('?') > - 1 ? '&' : '?',
        i
      ].join(''))  : e
    }
    function f(e, t, n) {
      var i,
      r,
      o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
      a = d(t),
      s = 0,
      l = [
      ];
      if ('' === t && o) return '';
      if ('number' === a || 'string' === a || 'boolean' === a) return [e,
      n ? encodeURIComponent(t)  : t].join('=');
      if (function (e) {
        return '[object Object]' === u(e)
      }(t)) for (i in t) l.push(f([e,
      '[',
      i,
      ']'].join(''), t[i], n, o));
       else if (Array.isArray(t)) for (r = t.length; s < r; s++) l.push(f([e,
      '[',
      s,
      ']'].join(''), t[s], n, o));
      return (l = l.filter(function (e) {
        return null != e && '' !== ('[object String]' !== u(t = e) ? t : t.replace(/^\s+|\s+$/g, ''));
        var t
      })).length ? l.join('&')  : ''
    }
    function v(e, t, n, i) {
      this.code = e,
      this.msg = t,
      this.res = n,
      this.errorType = i || Je.LOGIC_ERR
    }
    function h(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      };
      if (ue() && e.match(/\/\/pay.video.qq.com/)) {
        e = e.replace(/\/\/(pay.video.qq.com)/, '//access.video.qq.com/trans/$1'),
        $.isPlainObject(t) || (t = {
        });
        var i = R();
        $.extend(t, {
          vappid: Ze,
          vsecret: et
        }, i)
      }
      return !Ke && /^\/\//.test(e) && (e = 'https:'.concat(e)),
      new Promise(function (i, r) {
        $.ajax($.extend({
          url: e,
          dataType: 'jsonp',
          data: t,
          success: function (e) {
            e ? i(e)  : r(new v(0, '服务器开小差了！请重试', null, Je.NETWORK_ERR))
          },
          error: function () {
            r(new v(0, '网络开小差了！请重试', null, Je.NETWORK_ERR))
          }
        }, n))
      })
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
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
    function _() {
    }
    function w(e) {
      var t = g(e);
      return !!e && ('object' === t || 'function' === t)
    }
    function y(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
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
    function k(e) {
      var t = e.sBiz,
      n = e.bizId,
      i = void 0 === n ? at : n,
      r = e.pageId,
      o = void 0 === r ? st : r,
      a = e.modId,
      s = void 0 === a ? '' : a,
      l = e.msg,
      c = e.file,
      d = e.line,
      u = e.fn,
      p = e.level,
      f = e.code,
      v = e.operate;
      (t || i && o && s) && (t || (t = ''.concat(i, '.').concat(o, '.').concat(s)), lt.report({
        sBiz: t,
        errmsg: l,
        srcfile: c,
        srcline: d,
        func: u,
        level: p,
        iSta: f,
        sOp: v
      }))
    }
    function T(e) {
      k(ht(e, {
        level: ct
      }))
    }
    function E(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      })  : e[t] = n,
      e
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {
        },
        i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))),
        i.forEach(function (t) {
          C(e, t, n[t])
        })
      }
      return e
    }
    function C(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      })  : e[t] = n,
      e
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
      }
    }
    function I(e) {
      window.__LOGIN_VERSION__ && (e.f_version = window.__LOGIN_VERSION__),
      e.f_lib_version = wt.a,
      e.f_vuserid = xe(),
      e.f_guid = Ie.get('guid') || Ie.get('video_guid'),
      e.f_vuserid !== Ie.get('vuserid') && (e.f_vuserid2 = Ie.get('vuserid')),
      yt.report(e)
    }
    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {
        },
        i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))),
        i.forEach(function (t) {
          P(e, t, n[t])
        })
      }
      return e
    }
    function P(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      })  : e[t] = n,
      e
    }
    function A(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      n = arguments.length > 2 ? arguments[2] : void 0,
      i = e;
      return i.match(/^(https?:)?\/\//) || (i = $t + i, t = q({
      }, t, {
        vappid: Pt,
        vsecret: At
      })),
      new Promise(function (r, o) {
        h(i, t, n).then(function (n) {
          var i = '',
          o = 0;
          n && 'errcode' in n && 0 !== n.errcode ? (o = n.errcode, i = n.errmsg || n.msg)  : 'result' in n && n.result && 0 !== n.result.code && (o = n.result.code, i = n.result.msg),
          r(n),
          0 !== o && gt.fatal({
            modId: e,
            code: o,
            msg: '['.concat(e, '] ').concat(i || 'unknown', ' (').concat(o || - 1, ')')
          }),
          e.match(/^(https?:)?\/\//) || I({
            f_event: Et,
            f_cgi: e,
            f_cgi_param: JSON.stringify(t),
            f_errcode: o,
            f_errmsg: i
          })
        }) ['catch'](function (t) {
          o(t),
          gt.fatal({
            modId: e,
            code: - 1,
            msg: '['.concat(e, '] network error (-1)')
          })
        })
      })
    }
    function M() {
      var e = Ie.get('main_login');
      return 'qq' === e || 'wx' === e ? e : z() && U() ? 'qq' : ''
    }
    function L() {
      var e = '';
      if (location.host.match(/(film|v)\.qq\.com/)) {
        var t = location.host.split('.'),
        n = t.length;
        e = n > 3 ? t.slice(n - 3, n).join('.')  : location.host
      }
      return e
    }
    function D(e) {
      !function (e) {
        if (window.txvCookie) return e(window.txvCookie);
        var t = document.getElementById('tvv_login_cookie_cross_domin_frame'),
        n = setTimeout(function () {
          e(window.txvCookie || null)
        }, 1000);
        if (!t) {
          window.loadVideoCookie = function (t) {
            window.txvCookie = t,
            clearTimeout(n),
            e(t)
          };
          var i = document.createElement('iframe');
          i.src = '//video.qq.com/getcookie/cookie.html?max_age=31104000',
          i.id = 'tvv_login_cookie_cross_domin_frame',
          i.style.display = 'none',
          document.body.appendChild(i)
        }
        I({
          f_event: xt
        })
      }(function (t) {
        if (t) {
          var n = t.getCookie();
          if (!Qe.isApp) {
            var i = L(),
            r = 'qq' === n.main_login ? 'wx' : 'qq';
            (Ie.get(''.concat(r, '_nick')) || Ie.get(''.concat(r, '_head'))) && (Ie.remove(''.concat(r, '_nick'), {
              domain: i,
              path: '/'
            }), Ie.remove(''.concat(r, '_head'), {
              domain: i,
              path: '/'
            })),
            Lt.forEach(function (e) {
              i !== location.host && Ie.remove(e, {
                domain: location.host
              }),
              Ie.set(e, n[e] || '', {
                expires: n[e] ? Mt : - 24,
                domain: i,
                path: '/'
              })
            })
          }
          e && e(n)
        } else e && e(null)
      }),
      I({
        f_event: bt
      })
    }
    function j(e) {
      var t = Ie.get('vqq_appid') || Ie.get('appid');
      if (qt.indexOf(t) > - 1) return e();
      var n = M() || 'qq',
      i = R();
      A('auth_refresh', q({
        type: n
      }, i), {
        timeout: 30000
      }).then(function (t) {
        if (t && 0 === t.errcode) {
          var i = L(),
          r = {
            expires: Mt,
            domain: i,
            path: '/'
          };
          if ('qq' === n && Ie.get('vqq_appid') && Ie.get('vqq_openid')) {
            var o = 'qq' === n ? 'vqq_' : '';
            for (var a in t) Lt.indexOf(a) > - 1 && Ie.set(o + a, t[a] || '', {
              expires: t[a] ? Mt : - 24,
              domain: i,
              path: '/'
            })
          } else Ie.set('vuserid', t.vuserid, r),
          Ie.set('vusession', t.vusession, r);
          Ie.set(''.concat(n, '_nick'), t.nick, r),
          Ie.set(''.concat(n, '_head'), t.head, r),
          Ie.set('last_refresh_time', + new Date, r),
          Ie.set('last_refresh_vuserid', t.vuserid, r),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            Nt && clearTimeout(Nt),
            e > 0 && (Nt = setTimeout(function () {
              j(),
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
        ].indexOf(t.errcode) > - 1 ? N(e)  : (Dt < jt ? j(e)  : e && e(), Dt++)
      }) ['catch'](function (t) {
        Dt < jt ? j(e)  : e && e(),
        Dt++
      })
    }
    function N(e, t) {
      var n = [
      ];
      'function' == typeof e && (t = e, e = M() || 'qq'),
      n = 'wx' === e ? Ct : It.concat(Ot);
      var i = L();
      (n = n.concat(St)).forEach(function (e) {
        Ie.remove(e, {
          domain: i,
          path: '/'
        })
      }),
      (Ie.get('uin') || Ie.get('luin')) && Ot.forEach(function (e) {
        Ie.remove(e, {
          domain: 'qq.com',
          path: '/'
        })
      }),
      Ie.remove('last_refresh_time', {
        domain: i,
        path: '/'
      }),
      Ie.remove('last_refresh_vuserid', {
        domain: i,
        path: '/'
      });
      var r = {
        type: e
      };
      'qq' === e && Ie.get('appid') && (r.keepwx = 1),
      A('auth_logout', r, {
        timeout: 10000
      }).then(t) ['catch'](t)
    }
    function R() {
      var e = {
      },
      t = M();
      if ('qq' === t) {
        var n = U();
        n && (e.g_tk = B(n));
        var i = Ie.get('vqq_vusession');
        i && (e.g_vstk = B(i));
        var r = Ie.get('vqq_access_token');
        r && (e.g_actk = B(r))
      } else if ('wx' === t) {
        var o = Ie.get('vusession');
        o && (e.g_vstk = B(o));
        var a = Ie.get('access_token');
        a && (e.g_actk = B(a))
      }
      return e
    }
    function z() {
      if ('' === U()) return 0;
      var e = parseInt(Ie.get('uin').replace(/^o0*/g, ''), 10);
      return (!e || e <= 10000) && (!(e = parseInt(Ie.get('luin').replace(/^o0*/g, ''), 10)) || e <= 10000) ? 0 : e
    }
    function U() {
      var e = Ie.get('skey') || Ie.get('lskey');
      return e ? e.trim()  : ''
    }
    function B(e) {
      for (var t = 5381, n = 0, i = e.length; n < i; ++n) t += (t << 5) + e.charAt(n).charCodeAt();
      return 2147483647 & t
    }
    function V(e, t) {
      t = t || location.href;
      var n,
      i = new RegExp('[?&#]'.concat(e, '=([^&#]+)'), 'gi'),
      r = t.match(i);
      return r && r.length > 0 && (n = r[r.length - 1].split('=')) && n.length > 1 ? W(n[1])  : ''
    }
    function W(e) {
      return e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    }
    function F(e) {
      return (F = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
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
    function G(e) {
      return (G = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (e) {
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
    function X(e) {
      if (!e || '[object Object]' !== wn.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      if (!t) return !0;
      var n = yn.call(t, 'constructor') && t.constructor;
      return 'function' == typeof n && bn.call(n) === bn.call(Object)
    }
    function Q() {
      return new Promise(function (e) {
        'undefined' == typeof TenvideoJSBridge ? Tn.push(e)  : e()
      })
    }
    function J(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      }).ignoreAlarm,
      new Promise(function (n, i) {
        return Qe.isApp ? void Q().then(function () {
          if ('function' != typeof TenvideoJSBridge[xn]) return i({
            message: 'TenvideoJSBridge 找不到方法 "invoke"'
          });
          var r = TenvideoJSBridge[xn](e, t, function (e) {
            if (X(e)) return 0 === Object.keys(e).length ? (J('toast', {
              content: '此版本暂未支持，请升级到最新版本！'
            }), i({
              errMsg: 'callback return "' + JSON.stringify(e) + '", maybe is not supported!'
            }))  : n(e.result ? e.result : e);
            var t,
            r,
            o = null;
            try {
              o = JSON.parse(e)
            } catch (a) {
              i({
                errMsg: 'callback result ' + JSON.stringify(e) + ' parse error "' + a.message + '", maybe is not supported!'
              })
            }
            return o ? o.result && Object.keys(o.result).length > 0 ? n(o.result)  : o.errCode && o.errMsg ? (t = o.errCode, r = o.errMsg, console && void 0, i(o))  : n(o)  : n(e)
          });
          try {
            r && n(JSON.parse(r))
          } finally {
          }
        })  : i({
          message: '[atom] 非 APP 环境下，不支持调用 JSAPI'
        })
      })
    }
    function K(e, t, n) {
      var i = {
      };
      if (X(n)) i = n;
       else try {
        i = JSON.parse(n)
      } catch (e) {
        Qe.isApp || Qe.isWin || void 0
      }
      var r = En[e];
      if (r && r.length > 0) {
        for (var o = r.length, a = 0; a < o; a++) r[a] && 'function' == typeof r[a].listener && (r[a].listener(i), r[a].once && r.splice(a, 1, null));
        for (var s = [
        ], l = 0; l < o; l++) r[l] && s.push(r[l]);
        En[e] = s
      }
    }
    function Z(e, t) {
      for (var n = - 1, i = 0, r = e.length; i < r; i++) if (e[i].listener.toString() === t.toString()) {
        n = i;
        break
      }
      return n
    }
    function ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
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
    function ne(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i)
      }
    }
    function ie(e, t) {
      return !t || 'object' !== te(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e
      }(e)  : t
    }
    function re(e) {
      return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }) (e)
    }
    function oe(e, t) {
      return (oe = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t,
        e
      }) (e, t)
    }
    function ae(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      })  : e[t] = n,
      e
    }
    function se(e) {
      return e || (e = M()),
      'wx' === e ? le()  : ce()
    }
    function le() {
      return !!('wx' === M() && Ie.get('appid') && Ie.get('openid') && Ie.get('access_token'))
    }
    function ce() {
      return de() || ue()
    }
    function de() {
      return 'wx' !== M() && !(ue() || !(Ie.get('uin') && Ie.get('skey') || Ie.get('luin') && Ie.get('lskey')))
    }
    function ue() {
      return 'wx' !== M() && !!('qq' === M() && Ie.get('vqq_appid') && Ie.get('vqq_openid') && Ie.get('vqq_access_token'))
    }
    function pe(e) {
      if ('function' == typeof e) {
        if (!se()) return e(!1);
        var t = {
        };
        'wx' === M() ? (t.type = 3, t.appid = Ie.get('appid'), t.openid = Ie.get('openid'), t.access_token = Ie.get('access_token'))  : ue() ? (t.type = 6, t.vqq_appid = Ie.get('vqq_appid'), t.vqq_openid = Ie.get('vqq_openid'), t.vqq_access_token = Ie.get('vqq_access_token'))  : de() && (t.type = 1, t.uin = z(), t.skey = U()),
        fe(t).then(function () {
          e(!0)
        }) ['catch'](function () {
          e(!1)
        })
      }
    }
    function fe(e, t, n) {
      return new Promise(function (i, r) {
        return 'function' != typeof t && (t = i, n = r),
        A('//vip.video.qq.com/fcgi-bin/comm_cgi?name=check_login&otype=json', e, {
          timeout: 60000
        }).then(function (e) {
          e && e.result && 0 === e.result.code ? t && t(e)  : n && n(e)
        }) ['catch'](function () {
          n && n(new Error('[//vip.video.qq.com/fcgi-bin/comm_cgi?name=check_login] Request Error'))
        })
      })
    }
    function ve(e) {
      Qe.isApp ? J('logout', {
        needBack: !1
      }, function (t) {
        try {
          var n = JSON.parse(t);
          n && 0 === n.errCode ? e && e(!0)  : e && e(!1)
        } catch (t) {
          e && e(!1)
        }
      })  : N(function () {
        e && e(!0)
      }),
      I({
        f_event: Tt
      })
    }
    function he() {
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
      I({
        f_event: kt,
        f_type: e.type
      }),
      Qe.isApp ? J('actionLogin', {
        type: e.type || 'tv'
      }).then(function () {
        location.href = e.url
      })  : ('wx' === e.type && (e.back = 1), t ? ve(me.bind(this, e))  : me(e))
    }
    function me(e) {
      e.url && (e.ru = e.url, delete e.url),
      Ie.remove('last_refresh_time', {
        domain: L(),
        path: '/'
      }),
      Ie.remove('last_refresh_vuserid', {
        domain: L(),
        path: '/'
      }),
      location.href = p('//film.qq.com/weixin/login.html', function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {
          },
          i = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))),
          i.forEach(function (t) {
            ae(e, t, n[t])
          })
        }
        return e
      }({
        qqAuth: V('qqAuth')
      }, e), !0)
    }
    function ge() {
      return se() ? ue() || we() && ye() ? Promise.resolve({
        type: M(),
        nick: we(),
        headurl: ye(),
        id: z() || be()
      })  : new Promise(function (e) {
        A('//video.qq.com/fcgi-bin/get_userinfo', {
          type: le() ? 1 : 2
        }).then(function (t) {
          0 === t.ret && t.data || e(null);
          var n = t.data[0];
          2 === n.type && (n.headurl = n.headurl.replace(/s=40/, 's=140')),
          n.type = 1 === n.type ? 'wx' : 'qq',
          e(n)
        }) ['catch'](function () {
          var t = 502,
          n = '[request] get_userinfo error';
          gt.fatal(t, n),
          e(null)
        })
      })  : Promise.resolve(null)
    }
    function _e() {
      return Qe.isLocalPkg && Ie.isProxyEnabled() ? Ie.getCookies()  : o(document.cookie)
    }
    function we() {
      return se() ? decodeURIComponent(Ie.get(''.concat(M(), '_nick')))  : ''
    }
    function ye() {
      return se() ? decodeURIComponent(Ie.get(''.concat(M(), '_head')))  : ''
    }
    function be() {
      var e = M();
      return e ? 'qq' === e ? ue() ? Ie.get('vqq_openid')  : z()  : Ie.get('openid')  : ''
    }
    function xe() {
      return M() ? ue() ? Ie.get('vqq_vuserid')  : Ie.get('vuserid')  : ''
    }
    function ke() {
      return J('getMainCookie').then(function (e) {
        var t = {
        };
        e && e.cookie && ((t = o(e.cookie)).main_login = e.type),
        Ie.setCookies(t)
      }) ['catch'](function (e) {
        Ie.setCookies()
      })
    }
    n.r(t);
    var Te = function () {
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
      n,
      o;
      return t = e,
      (n = [
        {
          key: 'get',
          value: function (e) {
            var t;
            if (!0 === this._proxyEnabled) return 'object' === i(this._cookies) && this._cookies[e] || '';
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return (t = this._target).get.apply(t, [
              e
            ].concat(r))
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
      ]) && r(t.prototype, n),
      o && r(t, o),
      e
    }(),
    Ee = {
    },
    Se = decodeURIComponent,
    Ce = encodeURIComponent,
    Oe = Object.create || function (e) {
      function t() {
      }
      return t.prototype = e,
      new t
    };
    Ee.get = function (e, t) {
      l(e);
      var n = t ? Oe(t)  : {
      };
      'function' == typeof t && (n = {
        converter: t
      });
      var i = o(document.cookie, !n.raw);
      return (n.converter || c) (i[e])
    },
    Ee.set = function (e, t, n) {
      l(e);
      var i = n ? Oe(n)  : {
      },
      r = i.expires,
      o = i.domain,
      a = i.path;
      i.raw || (t = Ce(String(t)));
      var c = ''.concat(e, '=').concat(t),
      d = r;
      return 'number' == typeof d && (d = new Date).setTime(d.getTime() + 1000 * r),
      d instanceof Date && (c += '; expires='.concat(d.toUTCString())),
      s(o) && (c += '; domain='.concat(o)),
      s(a) && (c += '; path='.concat(a)),
      i.secure && (c += '; secure'),
      document.cookie = c,
      c
    },
    Ee.remove = function (e, t) {
      var n = t ? Oe(t)  : {
      };
      return n.expires = new Date(0),
      this.set(e, '', n)
    };
    var Ie = new Te(Ee),
    qe = navigator.userAgent,
    Pe = navigator.platform,
    Ae = qe.indexOf('iPhone') >= 0,
    Me = /(iPad).*OS\s([\d_]+)/.test(qe),
    $e = Ae || Me,
    Le = qe.indexOf('Android') >= 0,
    De = Le && qe.indexOf('Mobile') < 0,
    je = 0 === Pe.indexOf('Mac'),
    Ne = qe.indexOf('Windows') >= 0,
    Re = /QQ\/([\d.]+)/.test(qe),
    ze = qe.indexOf('MicroMessenger') >= 0 && qe.indexOf('wxwork') < 0,
    Ue = /(QQLive|WeTV)(HD|Kid)?(Browser|_MAC)?[\s\/]*(\d+(\.\d+)*)/i.test(qe),
    Be = qe.indexOf('QQLiveKidBrowser') >= 0,
    Ve = Ue && qe.indexOf('WeTVBrowser') >= 0,
    We = Ue && qe.indexOf('QQLiteBrowser') >= 0,
    Fe = qe.indexOf('QQLiveBrowser') >= 0,
    He = Ue && 'undefined' != typeof location && !/^http(s)?:/.test(location.protocol),
    Ge = $e ? /mqqbrowser/gi.test(qe)  : window.qb_bridge || !(!window.mtt || !window.mtt.getBrowserParam),
    Ye = /QQLive\/\d+/.test(qe),
    Xe = {
      isIos: $e,
      isIphone: Ae,
      isIpad: Me,
      isAndroid: Le,
      isApad: De,
      isMac: je,
      isWin: Ne,
      isMqq: Re,
      isWechat: ze,
      isApp: Ue,
      isKidApp: Be,
      isWetv: Ve,
      isMqb: Ge,
      isPCClient: Ye,
      isWeb: !(Ae || Le || Me || De || /(WebOS|BlackBerry)/.test(qe)),
      os: 'other',
      app: 'browser',
      device: 'unknown',
      isLiteApp: We,
      isBaseApp: Fe,
      isLocalPkg: He
    };
    Xe.os = Xe.isIos ? 'ios' : Xe.isAndroid ? 'android' : 'other',
    Ue ? Xe.app = 'app' : ze ? Xe.app = 'wechat' : Re ? Xe.app = 'mqq' : Be ? Xe.app = 'kidapp' : Ge ? Xe.app = 'qqbrowser' : Ye ? Xe.app = 'client' : We && (Xe.app = 'liteapp'),
    Ae ? Xe.device = 'iphone' : Me ? Xe.device = 'ipad' : De ? Xe.device = 'apad' : Le ? Xe.device = 'aphone' : je ? Xe.device = 'mac' : Ne && (Xe.device = 'windows');
    var Qe = Xe,
    Je = {
      NETWORK_ERR: 'NETWORK_ERR',
      SYSTEM_ERR: 'SYSTEM_ERR',
      LOGIC_ERR: 'LOGIC_ERR'
    },
    Ke = /^(http|https):$/.test(location.protocol),
    Ze = '68106135',
    et = 'e667570eb833960cc41051d498df1c233308eb195dba2cc3';
    v.prototype.toString = function () {
      return this.msg + (this.code ? '('.concat(this.code, ')')  : '')
    },
    v.prototype.RequestErrorType = v.RequestErrorType = Je;
    var tt = ''.concat(/^(http|https):$/.test(location.protocol) ? location.protocol : 'https:', '//btrace.qq.com/kvcollect'),
    nt = function () {
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
      n,
      i;
      return t = e,
      (n = [
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
              if (w(e)) {
                var n = {
                };
                for (var i in e) n[i] = t(e[i]);
                return n
              }
              return e
            }(e, function (e) {
              if (w(e)) try {
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
            return t.onerror = t.onload = t.onabort = _,
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
      ]) && m(t.prototype, n),
      i && m(t, i),
      e
    }(),
    it = 'film_front_error',
    rt = Object.assign || function (e, t) {
      if (!t || 'object' != b(t) || 'object' != b(e)) return e;
      for (var n in t) e[n] = t[n];
      return e
    },
    ot = function () {
      function e(t) {
        var n = t.bizId,
        i = void 0 === n ? it : n,
        r = t.pageId;
        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, e), !r) throw new Error('[@tencent/vft-monitor.Monitor.constructor]pageId is required');
        this._boss = new nt({
          bossId: 479,
          pwd: 0
        }),
        this._bizId = i,
        this._pageId = r
      }
      var t,
      n,
      i;
      return t = e,
      i = [
        {
          key: 'getMonitor',
          value: function (t) {
            var n = this.pool[t];
            return n || (this.pool[t] = n = new e({
              bizId: it,
              pageId: t
            })),
            n
          }
        }
      ],
      (n = [
        {
          key: '_report',
          value: function (e) {
            var t = e.sBiz,
            n = e.modId,
            i = void 0 === n ? 'default' : n,
            r = e.msg,
            o = e.file,
            a = e.line,
            s = e.fn,
            l = e.level,
            c = e.code,
            d = e.operate,
            u = e.pname,
            p = void 0 === u ? xe && xe()  : u;
            t || (t = ''.concat(this._bizId, '.').concat(this._pageId, '.').concat(i)),
            this._boss.report({
              sBiz: t,
              errmsg: r,
              srcfile: o,
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
            this._report(rt(e, {
              level: 5
            }))
          }
        },
        {
          key: 'error',
          value: function (e) {
            this._report(rt(e, {
              level: 4
            }))
          }
        },
        {
          key: 'warn',
          value: function (e) {
            this._report(rt(e, {
              level: 3
            }))
          }
        },
        {
          key: 'info',
          value: function (e) {
            this._report(rt(e, {
              level: 2
            }))
          }
        },
        {
          key: 'debug',
          value: function (e) {
            this._report(rt(e, {
              level: 1
            }))
          }
        }
      ]) && y(t.prototype, n),
      i && y(t, i),
      e
    }();
    ot.pool = {
    };
    var at,
    st,
    lt = new nt({
      bossId: 479,
      pwd: 0
    }),
    ct = 5,
    dt = 4,
    ut = 3,
    pt = 2,
    ft = 1,
    vt = 'film_front_error',
    ht = Object.assign || function (e, t) {
      if (!t || 'object' != x(t) || 'object' != x(e)) return e;
      for (var n in t) e[n] = t[n];
      return e
    },
    mt = {
      init: function (e) {
        var t = e.bizId,
        n = void 0 === t ? vt : t,
        i = e.pageId;
        if (!i) throw new Error('[@tencent/vft-monitor.Monitor.init]pageId is required');
        at = n,
        st = i,
        window.addEventListener('error', function (e) {
          T({
            modId: 'uncatch_error',
            msg: e.message,
            file: e.filename,
            line: e.lineno
          })
        }),
        window.addEventListener('unhandledrejection', function (e) {
          var t = e.reason;
          T({
            modId: 'uncatch_error',
            msg: t.msg,
            code: t.code
          })
        })
      },
      fatal: T,
      error: function (e) {
        k(ht(e, {
          level: dt
        }))
      },
      warn: function (e) {
        k(ht(e, {
          level: ut
        }))
      },
      info: function (e) {
        k(ht(e, {
          level: pt
        }))
      },
      debug: function (e) {
        k(ht(e, {
          level: ft
        }))
      },
      getMonitor: function (e) {
        return ot.getMonitor(e)
      }
    },
    gt = {
      fatal: function (e) {
        mt.getMonitor('h5-login').fatal(function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {
            },
            i = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function (t) {
              E(e, t, n[t])
            })
          }
          return e
        }({
          modId: 'request_error'
        }, e))
      }
    },
    _t = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        if (function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, e), !t || !n) throw new Error('[Reporter] bossId and pwd is missing, please get it from boss platform.');
        this.boss = new nt({
          bossId: t,
          pwd: n
        }),
        this._queue = [
        ]
      }
      var t,
      n,
      i;
      return t = e,
      (n = [
        {
          key: 'init',
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            this.boss.setBaseUrl(p(this.boss.getBaseUrl(), S({
              f_url: location.pathname,
              f_dm: location.host,
              f_protocol: location.protocol,
              f_url_param: this._encodeUrl(location.href).split('?') [1] || '',
              f_ref: this._encodeUrl(document.referrer),
              f_platform: ''.concat(Qe.os, '.').concat(Qe.app)
            }, e), !0)),
            this._isInit = !0,
            this._handleQueue()
          }
        },
        {
          key: 'report',
          value: function (e) {
            var t = _e(),
            n = t.vqq_appid,
            i = t.appid,
            r = S({
              f_logintype: M() || '-',
              f_uid: be(),
              f_vuid: xe(),
              f_appid: n || i
            }, e);
            this._isInit ? this.boss.report(r)  : this._queue.push(r)
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
      ]) && O(t.prototype, n),
      i && O(t, i),
      e
    }(),
    wt = n(0),
    yt = new _t(7481, '692842614');
    yt.init();
    var bt = 'INIT_SYNC',
    xt = 'INIT_GETCOOKIE',
    kt = 'INIT_LOGIN',
    Tt = 'INIT_LOGOUT',
    Et = 'INIT_REQUEST',
    St = [
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
    Ot = [
      'encuin',
      'luin',
      'lskey',
      'skey',
      'qq_nick',
      'qq_head'
    ],
    It = [
      'vqq_appid',
      'vqq_openid',
      'vqq_access_token',
      'vqq_vuserid',
      'vqq_vusession',
      'qq_nick',
      'qq_head'
    ],
    qt = [
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
    Pt = 11059694,
    At = 'fdf61a6be0aad57132bc5cdf78ac30145b6cd2c1470b0cfe',
    Mt = 720,
    $t = '//access.video.qq.com/user/',
    Lt = [
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
    Dt = 0,
    jt = 2,
    Nt = null,
    Rt = 0;
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
      n = Object.keys ? Object.keys(t).join('')  : function () {
        var e,
        n = '';
        for (e in t) n += e;
        return n
      }();
      new RegExp('['.concat(n, ']'), 'g')
    }();
    var zt = function (e) {
      var t = F(e);
      return null != e && ('object' == t || 'function' == t)
    },
    Ut = n(1),
    Bt = 'object' == ('undefined' == typeof self ? 'undefined' : H(self)) && self && self.Object === Object && self,
    Vt = Ut.a || Bt || Function('return this') (),
    Wt = function () {
      return Vt.Date.now()
    },
    Ft = Vt.Symbol,
    Ht = Object.prototype,
    Gt = Ht.hasOwnProperty,
    Yt = Ht.toString,
    Xt = Ft ? Ft.toStringTag : void 0,
    Qt = function (e) {
      var t = Gt.call(e, Xt),
      n = e[Xt];
      try {
        e[Xt] = void 0;
        var i = !0
      } catch (e) {
      }
      var r = Yt.call(e);
      return i && (t ? e[Xt] = n : delete e[Xt]),
      r
    },
    Jt = Object.prototype.toString,
    Kt = function (e) {
      return Jt.call(e)
    },
    Zt = '[object Null]',
    en = '[object Undefined]',
    tn = Ft ? Ft.toStringTag : void 0,
    nn = function (e) {
      return null == e ? void 0 === e ? en : Zt : tn && tn in Object(e) ? Qt(e)  : Kt(e)
    },
    rn = function (e) {
      return null != e && 'object' == G(e)
    },
    on = '[object Symbol]',
    an = function (e) {
      return 'symbol' == Y(e) || rn(e) && nn(e) == on
    },
    sn = NaN,
    ln = /^\s+|\s+$/g,
    cn = /^[-+]0x[0-9a-f]+$/i,
    dn = /^0b[01]+$/i,
    un = /^0o[0-7]+$/i,
    pn = parseInt,
    fn = function (e) {
      if ('number' == typeof e) return e;
      if (an(e)) return sn;
      if (zt(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf()  : e;
        e = zt(t) ? t + '' : t
      }
      if ('string' != typeof e) return 0 === e ? e : + e;
      e = e.replace(ln, '');
      var n = dn.test(e);
      return n || un.test(e) ? pn(e.slice(2), n ? 2 : 8)  : cn.test(e) ? sn : + e
    },
    vn = 'Expected a function',
    hn = Math.max,
    mn = Math.min,
    gn = function (e, t, n) {
      function i(t) {
        var n = l,
        i = c;
        return l = c = void 0,
        v = t,
        u = e.apply(i, n)
      }
      function r(e) {
        var n = e - f;
        return void 0 === f || n >= t || n < 0 || m && e - v >= d
      }
      function o() {
        var e = Wt();
        return r(e) ? a(e)  : void (p = setTimeout(o, function (e) {
          var n = t - (e - f);
          return m ? mn(n, d - (e - v))  : n
        }(e)))
      }
      function a(e) {
        return p = void 0,
        g && l ? i(e)  : (l = c = void 0, u)
      }
      function s() {
        var e = Wt(),
        n = r(e);
        if (l = arguments, c = this, f = e, n) {
          if (void 0 === p) return function (e) {
            return v = e,
            p = setTimeout(o, t),
            h ? i(e)  : u
          }(f);
          if (m) return p = setTimeout(o, t),
          i(f)
        }
        return void 0 === p && (p = setTimeout(o, t)),
        u
      }
      var l,
      c,
      d,
      u,
      p,
      f,
      v = 0,
      h = !1,
      m = !1,
      g = !0;
      if ('function' != typeof e) throw new TypeError(vn);
      return t = fn(t) || 0,
      zt(n) && (h = !!n.leading, d = (m = 'maxWait' in n) ? hn(fn(n.maxWait) || 0, t)  : d, g = 'trailing' in n ? !!n.trailing : g),
      s.cancel = function () {
        void 0 !== p && clearTimeout(p),
        v = 0,
        l = f = c = p = void 0
      },
      s.flush = function () {
        return void 0 === p ? u : a(Wt())
      },
      s
    },
    _n = {
    },
    wn = _n.toString,
    yn = _n.hasOwnProperty,
    bn = yn.toString,
    xn = Qe.isMac ? 'callHandler' : Qe.isWin ? 'CallHandler' : 'invoke',
    kn = Qe.isMac ? 'registerHandler' : 'on',
    Tn = [
    ];
    document.addEventListener('onTenvideoJSBridgeReady', function () {
      console && void 0;
      for (var e = 0, t = Tn.length; e < t; e++) Tn[e]();
      Tn.length = 0
    }, !1),
    gn(function () {
      if (Qe.isApp && Qe.isWin) {
        window.TenvideoJSBridge = window.external,
        TenvideoJSBridge.AddObserver('*'),
        window.QQLive_OnObserve = function (e, t) {
          K(e, !1, t)
        };
        var e = new Event('onTenvideoJSBridgeReady');
        document.dispatchEvent(e)
      }
    }, 10) ();
    var En = {
    },
    Sn = function () {
      function e() {
        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        }).source,
        n = void 0 === t ? '' : t;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, e),
        this._initialized = !1,
        this._callbacks = [
        ],
        this.VERSION = wt.a,
        this._source = n
      }
      var t,
      n,
      i;
      return t = e,
      (n = [
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
      ]) && ee(t.prototype, n),
      i && ee(t, i),
      e
    }(),
    Cn = function (e) {
      function t(e) {
        var n;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }(this, t),
        (n = ie(this, re(t).call(this)))._login = e,
        n.VERSION = e.VERSION,
        n
      }
      var n,
      i,
      r;
      return function (e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }),
        t && oe(e, t)
      }(t, Sn),
      n = t,
      (i = [
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
            return (e = this._login).loginType.apply(e, arguments);
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
      ]) && ne(n.prototype, i),
      r && ne(n, r),
      t
    }();
    n.d(t, 'isLogin', function () {
      return se
    }),
    n.d(t, 'isWXLogin', function () {
      return le
    }),
    n.d(t, 'isQQLogin', function () {
      return ce
    }),
    n.d(t, 'isPTLogin', function () {
      return de
    }),
    n.d(t, 'isNewQQLogin', function () {
      return ue
    }),
    n.d(t, 'isStrictLogin', function () {
      return pe
    }),
    n.d(t, 'checkUser', function () {
      return fe
    }),
    n.d(t, 'logout', function () {
      return ve
    }),
    n.d(t, 'openLogin', function () {
      return he
    }),
    n.d(t, 'getMainUserInfo', function () {
      return ge
    }),
    n.d(t, 'getMainCookie', function () {
      return _e
    }),
    n.d(t, 'getUid', function () {
      return be
    }),
    n.d(t, 'getVuid', function () {
      return xe
    }),
    n.d(t, 'DEFAULT_LOGIN', function () {
      return Mn
    });
    var On = [
      'onActionLoginFinish',
      'onActionLogoutFinish',
      'onSwitchLoginStateResponse'
    ],
    In = !1,
    qn = !1;
    window.addEventListener('load', function () {
      setTimeout(function () {
        In || console && void 0
      }, 0)
    });
    var Pn = [
    ],
    An = function () {
      Pn.length > 0 && (Pn.forEach(function (e) {
        'function' == typeof e && e()
      }), Pn.length = 0),
      qn = !0,
      I({
        f_event: 'INIT_READY'
      })
    },
    Mn = {
      VERSION: wt.a,
      init: function (e) {
        if (qn) return 'function' == typeof e && e();
        if (Pn.push(e), !In) {
          if (In = !0, Qe.isLocalPkg) return Ie.enableProxy(),
          ke().then(An),
          void On.forEach(function (e) {
            !function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if ('function' != typeof t) throw new TypeError('[JSBridge] listener is not a function!');
              En[e] || (En[e] = [
              ], Qe.isWin || Q().then(function () {
                TenvideoJSBridge[kn](e, gn(K.bind(null, e, n), 60))
              }));
              var i = En[e];
              - 1 === Z(i, t) && i.push({
                listener: t,
                once: n
              })
            }(e, function () {
              ke()
            })
          });
          if (Qe.isApp) return An();
          if ('qq.com' !== document.domain) {
            window.console && void 0;
            try {
              document.domain = 'qq.com'
            } catch (e) {
            }
          }
          Ct.forEach(function (e) {
            Ie.remove(e, {
              domain: 'qq.com',
              path: '/'
            })
          }),
          D(function () {
            if (!de() || Ie.get('vuserid') && Ie.get('vusession')) if (!se() && (Ie.get('vuserid') || Ie.get('vusession')) || le() && (Ie.get('vqq_vuserid') || Ie.get('vqq_vusession')) || ue() && Ie.get('vuserid') && Ie.get('vusession')) N(function () {
              D(An)
            });
             else if (se() && !de()) {
              var e = + Ie.get('last_refresh_time'),
              t = Ie.get('last_refresh_vuserid');
              + new Date - e >= 300000 || !we() || !ye() || t !== xe() ? j(function () {
                D(An)
              })  : An()
            } else An();
             else !function n(e) {
              A('auth_login', q({
                type: 'qq',
                login_flag: 1
              }, R()), {
                timeout: 30000
              }).then(function (t) {
                if (t && 0 === t.errcode) {
                  var i = {
                    expires: Mt,
                    domain: L(),
                    path: '/'
                  };
                  Ie.set('qq_nick', t.nick, i),
                  Ie.set('qq_head', t.head, i),
                  Ie.set('last_refresh_time', + new Date, i),
                  Ie.set('last_refresh_vuserid', t.vuserid, i),
                  Ie.set('vuserid', t.vuserid, i),
                  Ie.set('vusession', t.vusession, i),
                  Ie.set('main_login', 'qq', i),
                  e()
                } else t && [
                  1006,
                  1111,
                  1112
                ].indexOf(t.errcode) > - 1 ? N(e)  : (Rt < jt ? n(e)  : e && e(), Rt++)
              }) ['catch'](function () {
                Rt < jt ? n(e)  : e && e(),
                Rt++
              }),
              I({
                f_event: kt
              })
            }(An)
          })
        }
      },
      onInit: function (e) {
        qn ? 'function' == typeof e && e()  : Pn.push(e)
      },
      loginType: M,
      isLogin: se,
      isStrictLogin: pe,
      isPTLogin: de,
      isNewQQLogin: ue,
      isWXLogin: le,
      openLogin: he,
      logout: ve,
      checkUser: fe,
      getMainUserInfo: ge,
      getMainCookie: _e,
      getUin: z,
      getUid: be,
      getVuid: xe,
      getToken: function () {
        var e = U();
        return e ? B(e)  : ''
      },
      loginSource: function () {
        return 'vip'
      }
    };
    t['default'] = new Cn(Mn)
  }
  ]) ['default']
  })
  },
  function (e, t, n) {
  var i = n(71),
  r = n(38),
  o = n(65),
  a = n(34),
  s = n(6) ();
  e.exports = function (e) {
  var t,
  n,
  l = i.getAidParam('1', i.getAid());
  2 === e.appType ? (t = o({
  }).model({
    confid: e.liteConfid || 897
  }).openFixer(function () {
    return e.vid || e.cid ? 'videolite://v.qq.com/VideoDetailActivity?vid=' + (e.vid || '') + '&cid=' + (e.cid || '') + '&from=' + e.liteConfid : 'videolite://v.qq.com/HomeActivity'
  }), n = e.liteConfid || 897, t.action())  : 1 === e.appType && (t = r().downloadFixer(function (e) {
    return 'xiaomiqj' === a && s.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
  }).openFixer(function (e, t) {
    return e
  }), n = e.appConfid || 513, t.model('column' == PAGE_TYPE ? {
    column_id: e.lid || '',
    exsource: window.EXSOURCE,
    confid: n,
    from: e.appConfid || l || a
  }
   : {
    video_id: e.vid || '',
    cover_id: e.cid || '',
    column_id: e.lid || '',
    exsource: window.EXSOURCE,
    confid: n,
    from: e.appConfid || l || a
  }), t.action())
  }
  },
  function (e, t, n) {
  function i() {
  var e = 0;
  return a.indexOf('QQLiveBrowser') != - 1 ? a.indexOf('Android') != - 1 ? e = 8 : a.indexOf('iPhone') != - 1 && (e = 7)  : a.indexOf('QQLiveHDBrowser') != - 1 ? e = 5 : / QQ\//.test(a) ? a.indexOf('Android') != - 1 ? e = 8001 : a.indexOf('iPhone') != - 1 && (e = 8002)  : e = 3000,
  e
  }
  var r = (n(68), n(72)),
  o = n(73),
  a = navigator.userAgent,
  s = n(74);
  e.exports = {
  getAid: function (e) {
    var t = '',
    n = o.getUrlParam('ptag') || o.getUrlParam('PTAG') || o.getUrlParam('adtag') || o.getUrlParam('ADTAG');
    n || ('string' == typeof e ? n = e : e && e.ptag && (n = e.ptag)),
    n && (n = decodeURIComponent(n));
    var r = decodeURIComponent(o.getUrlParam('aid')),
    a = o.getUrlParam('hlwactid') || o.getUrlParam('mpid'),
    l = o.getUrlParam('cid');
    e && e.cid && (l = e.cid);
    var c = o.getUrlParam('vid');
    e && e.vid && (c = e.vid);
    var d = '';
    a ? d = a : e && e.actid && (d = e.actid);
    var u = e && e.channel ? e.channel : '',
    p = e && e.plat ? e.plat : '',
    f = e && e.source ? e.source : '',
    v = e && e.scene ? e.scene : 6,
    h = e && e.serial ? e.serial : '',
    m = e && e.voucherId ? e.voucherId : '';
    if (r && r.indexOf('V0$$') != - 1) {
      var g = r.split('$$') [1];
      if (g) {
        for (var _ = [
        ], w = g.split('$'), y = 0; y < w.length; y++) {
          var b = w[y];
          if (b) {
            var x = b.split(':');
            x.length > 0 && '' != x[1] && _.push(b)
          }
        }
        r = [
          '$',
          _.join('$')
        ].join('')
      }
      t = r,
      t.indexOf('$1:') == - 1 && u && (t += [
        '$1:',
        u
      ].join('')),
      t.indexOf('$2:') == - 1 && (t += p ? [
        '$2:',
        p
      ].join('')  : [
        '$2:',
        i()
      ].join('')),
      t.indexOf('$4:') == - 1 && f && (t += [
        '$4:',
        f
      ].join('')),
      t.indexOf('$11:') == - 1 && v && (t += [
        '$11:',
        v
      ].join('')),
      t.indexOf('$12:') == - 1 && n && (t += [
        '$12:',
        encodeURIComponent(n)
      ].join('')),
      d && (t.indexOf('$13:') != - 1 ? t = t.replace(/\$13:HLW\_[^$]*/g, '$13:' + d)  : t += [
        '$13:',
        d
      ].join('')),
      t.indexOf('$15:') == - 1 && h && (t += [
        '$15:',
        h
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
      i()
    ].join(''),
    f && (t += [
      '$4:',
      f
    ].join('')),
    v && (t += [
      '$11:',
      v
    ].join('')),
    n && (t += [
      '$12:',
      encodeURIComponent(n)
    ].join('')),
    d ? t += [
      '$13:',
      d
    ].join('')  : r && (t += [
      '$13:',
      encodeURIComponent(r)
    ].join('')),
    l && (t += [
      '$5:',
      l
    ].join('')),
    c && (t += [
      '$6:',
      c
    ].join('')),
    t.indexOf('$15:') == - 1 && h && (t += [
      '$15:',
      h
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
    n = mypv.getPtag();
    '' != n && mypv.setCookiePtag('ptag', n, t);
    var i = 0,
    o = {
      'cache.tv.qq.com': 1,
      'imgcache.qq.com': 1,
      'film.qq.com': 2,
      '3g.v.qq.com': 3,
      'm.v.qq.com': 4
    };
    o[t] && (i = o[t]);
    var a = new Image;
    a.onerror = a.onload = a.onabort = function () {
    },
    a.src = [
      '//rcgi.video.qq.com/pv_report?',
      'refer=',
      encodeURIComponent(document.referrer),
      '&ptag=',
      r.get('ptag'),
      '&itype=',
      i,
      '&idx=',
      e.idx++,
      '&t=',
      (new Date).valueOf()
    ].join('')
  },
  getPtag: function () {
    for (var e = document.location.toString().toLowerCase(), t = this.dm, n = '', i = [
      'ptag',
      'adtag',
      'pgv_ref'
    ], r = 0, a = i.length; r < a && !(n = o.getUrlParam(i[r], e)); r++);
    if (!n) {
      var s = mypv.getDomainOfURL(document.referrer);
      '' != s && t != s && (n = s.replace(/\./g, '_')),
      n || (n = mypv.getCookiePtag('ptag'))
    }
    return n
  },
  getDomainOfURL: function (e) {
    var t = '';
    if ('undefined' == typeof e || null == e || '' == e) return t;
    var n = /.*\:\/\/([^\/]*).*/,
    i = e.match(n);
    return 'undefined' != typeof i && null != i && (t = i[1]),
    t
  },
  getCookiePtag: function (e) {
    e = e || 'ptag';
    var t = r.get(e),
    n = t.split('|');
    return n[0]
  },
  setCookiePtag: function (e, t, n) {
    for (var i = r.get(e), o = i.split('|'), a = [
      t
    ], s = 1, l = o.length; s < l; s++) a.push('|' + o[s]);
    r.set(e, a.join(''), {
      domain: n,
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
    var n = decodeURIComponent(t).match(new RegExp('\\$' + e + ':([^\\$]*)'));
    return n && n.length > 1 ? n[1] : ''
  }
  }
  },
  function (e, t) {
  function n(e, t) {
  var n = {
  };
  if (i(e) && e.length > 0) for (var r, o, s, c = t ? l : a, d = e.split(/;\s/g), u = 0, p = d.length; u < p; u++) {
    if (s = d[u].match(/([^=]+)=/i), s instanceof Array) try {
      r = l(s[1]),
      o = c(d[u].substring(s[1].length + 1))
    } catch (f) {
    } else r = l(d[u]),
    o = '';
    r && (n[r] = o)
  }
  return n
  }
  function i(e) {
  return 'string' == typeof e
  }
  function r(e) {
  return i(e) && '' !== e
  }
  function o(e) {
  if (!r(e)) throw new TypeError('Cookie name must be a non-empty string')
  }
  function a(e) {
  return e ? e : ''
  }
  var s = t,
  l = decodeURIComponent,
  c = encodeURIComponent;
  s.get = function (e, t) {
  o(e),
  t = 'function' == typeof t ? {
    converter: t
  }
   : t || {
  };
  var i = n(document.cookie, !t.raw);
  return (t.converter || a) (i[e])
  },
  s.set = function (e, t, n) {
  o(e),
  n = n || {
  };
  var i = n.expires,
  a = n.domain,
  s = n.path;
  n.raw || (t = c(String(t)));
  var l = e + '=' + t,
  d = i;
  return 'number' == typeof d && (d = new Date, d.setDate(d.getDate() + i)),
  d instanceof Date && (l += '; expires=' + d.toUTCString()),
  r(a) && (l += '; domain=' + a),
  r(s) && (l += '; path=' + s),
  n.secure && (l += '; secure'),
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
  for (var n in t) new RegExp('(' + n + ')').test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ('00' + t[n]).substr(('' + t[n]).length)));
  return e
  },
  e.exports = {
  getUrlParam: function (e, t) {
    t = t || location.href;
    var n,
    i = new RegExp('[?&#]' + e + '=([^&#]+)', 'gi'),
    r = t.match(i);
    return r && r.length > 0 ? (n = r[r.length - 1].split('='), n && n.length > 1 ? this.filterXSS(n[1])  : '')  : ''
  },
  setUrlParam: function (e, t, n) {
    n = n || location.href;
    var i,
    r,
    o = new RegExp('[?&#]' + e + '=([^&#]+)', 'gi'),
    a = n.match(o),
    s = '{key' + (new Date).getTime() + '}';
    if (i = a && a.length > 0 ? a[a.length - 1] : '', r = e + '=' + t, i) {
      var l = i.charAt(0);
      n = n.replace(i, s),
      n = n.replace(s, t ? l + r : '')
    } else t && (n += n.indexOf('?') > - 1 ? '&' + r : '?' + r);
    return n
  },
  delQueStr: function (e, t) {
    var n = '';
    if (e.indexOf('?') == - 1) return e;
    n = e.substr(e.indexOf('?') + 1);
    var r = '',
    o = '';
    if (n.indexOf('&') != - 1) {
      r = n.split('&');
      for (i in r) r[i].split('=') [0] != t && (o = o + r[i].split('=') [0] + '=' + r[i].split('=') [1] + '&');
      return e.substr(0, e.indexOf('?')) + '?' + o.substr(0, o.length - 1)
    }
    return r = n.split('='),
    r[0] == t ? e.substr(0, e.indexOf('?'))  : e
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
  commonReplace: function (e, t, n) {
    return e.replace(t, n)
  },
  listReplace: function (e, t) {
    if (this.isHashMap(t)) {
      for (var n in t) e = this.commonReplace(e, t[n], n);
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
  loadScript: function (e, t, n) {
    var i = document.getElementById(e);
    if (i) n && n();
     else {
      var r = document.createElement('script');
      r.type = 'text/javascript',
      r.id = e,
      r.src = t,
      r.onload = r.onreadystatechange = function () {
        r.readyState && 'loaded' !== r.readyState && 'complete' !== r.readyState || n && n()
      },
      r.src = t;
      var o = document.getElementsByTagName('head') [0];
      o.appendChild(r)
    }
  },
  getPlat: function () {
    var e = {
      plat: 0,
      channel: 0
    },
    t = navigator.userAgent;
    if (t.indexOf('Android') != - 1 ? e.plat = 108 : t.indexOf('iPhone') != - 1 ? e.plat = 107 : t.indexOf('iPad') != - 1 && (e.plat = 105), t.indexOf('MicroMessenger') != - 1) {
      var n = this.getUrlParam('from');
      'timeline' == n ? e.channel = 8 : e.channel = 16
    } else t.indexOf('TXMicroBlog') != - 1 ? e.channel = 1 : t.indexOf('Weibo') != - 1 ? e.channel = 4 : / QQ\//.test(t) ? e.channel = 64 : / Qzone\//.test(t) && (e.channel = 2);
    return e
  },
  verCompare: function (e, t) {
    if (e === t) return 0;
    e = e.split('.'),
    t = t.split('.');
    for (var n = e.length >= t.length ? e.length : t.length, i = 0, r = 0; n--; ) {
      var o = Number(e[i] || 0),
      a = Number(t[i++] || 0);
      if (a > o) return 1;
      if (a < o) return - 1
    }
    return r
  }
  }
  },
  function (e, t) {
  'use strict';
  function n(e) {
  for (var t, n = {
  }, i = /(\$\d+):[^$]*/g; null != (t = i.exec(e)); ) n[t[1]] = t[0];
  return n
  }
  function i(e) {
  var t = n(e);
  return r.replace(/\$\d+/g, function (e) {
    return t[e] || ''
  })
  }
  var r = '$2$4$13$5$12$1$7$11$15$6$3$8$9$10$14$21';
  e.exports.build = i
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
  function (e, t, n) {
  var i = n(10);
  if (!i.get('rec_video_guid')) {
  var r = function () {
    function e() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
  };
  i.set('rec_video_guid', r(), '', '', 168)
  }
  e.exports = {
  getPrConfig: function (e) {
    var t = e.modId,
    n = e.platforms,
    i = e.channel;
    return new Promise(function (e, r) {
      $.ajax({
        method: 'GET',
        url: 'https://api.pr.video.qq.com/m/gettask',
        data: {
          mod_id: t,
          platforms: n,
          channel: i || 31
        },
        xhrFields: {
          withCredentials: !0
        },
        contentType: 'text/plain;charset=UTF-8',
        dataType: 'jsonp',
        timeout: 8000,
        success: function (t) {
          t && !t.code && t.data && t.data.list && t.data.list.length ? e(t.data.list)  : r(t)
        },
        error: function (e) {
          r(e)
        }
      })
    })
  },
  getRecLongVideo: function (e, t, n) {
    return new Promise(function (n, r) {
      $.ajax({
        method: 'GET',
        url: '//node.video.qq.com/x/api/long_video_rec',
        data: {
          item_id: e || '',
          num: t,
          guid: i.get('rec_video_guid')
        },
        xhrFields: {
          withCredentials: !0
        },
        contentType: 'text/plain;charset=UTF-8',
        dataType: 'jsonp',
        timeout: 8000,
        success: function (e) {
          e && e.rec_modules && e.rec_modules.length ? n(e)  : r(e)
        },
        error: function (e) {
          r(e)
        }
      })
    })
  },
  getRecShortVideo: function (e, t, n) {
    return new Promise(function (r, o) {
      $.ajax({
        method: 'GET',
        url: '//node.video.qq.com/x/api/short_video_rec',
        data: {
          item_id: e,
          num: t,
          title: n,
          guid: i.get('rec_video_guid')
        },
        xhrFields: {
          withCredentials: !0
        },
        contentType: 'text/plain;charset=UTF-8',
        dataType: 'jsonp',
        timeout: 8000,
        success: function (e) {
          e && e.rec_modules && e.rec_modules.length ? r(e)  : o(e)
        },
        error: function (e) {
          o(e)
        }
      })
    })
  }
  }
  },
  function (e, t, n) {
  var i = n(68),
  r = n(73),
  o = n(78),
  a = n(79),
  s = r.getUrlParam('uvip');
  'qq' !== s && 'txsp' !== s || (s = 'qqsvip'),
  e.exports = {
  getPayVip: function () {
    return new a(function (e, t) {
      o('//vip.video.qq.com/fcgi-bin/comm_cgi?name=payvip&cmd=1&otype=json&getannual=1', {
        geticon: 1,
        getsvip: 1,
        g_tk: i.getToken()
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
    return r.getUrlParam('uvip') ? this.getVplusConfig().then(function (t) {
      o('//vip.video.qq.com/fcgi-bin/comm_cgi?name=spp_get_auto_pay_status&cmd=65411', null, {
        cache: !0,
        max_age: 600000
      }).then(function (n) {
        return n && n.result && n.result[s] ? (t.status = n.result[s].status, e.resolve(t))  : e.resolve(null)
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
    return o('//wuji.video.qq.com/fcgi-bin/wuji?appid=1000540&appkey=b1b75659ca6748ef881cabb4eafa5b50', {
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
  var n = 1,
  i = 2,
  r = 3000,
  o = {
  },
  a = {
  },
  s = {
  },
  l = {
  };
  e.exports = function (e, t, c) {
  var d = $.Deferred(),
  u = c.max_age || r;
  return c || (c = {
  }),
  c.cache ? l[e] || (l[e] = [
  ], o[e] = 0, a[e] = 0)  : (delete l[e], delete o[e], delete a[e]),
  c.cache && a[e] && s[e] && Date.now() - a[e] <= u ? (d.resolve(s[e]), d.promise())  : (c.cache && o[e] == n ? l[e].push(d)  : (c.cache && (a[e] = Date.now(), o[e] = n), $.ajax({
    url: e,
    dataType: 'jsonp',
    data: t
  }).then(function (t) {
    return s[e] = t,
    d.resolve(t)
  }, function () {
    return d.reject('服务异常')
  }).always(function (t) {
    if (c.cache && (o[e] = i, l[e].length > 0)) for (var n, r = 'resolved' == d.state() ? 'resolve' : 'reject'; n = l[e].shift(); ) n[r](t)
  })), d.promise())
  }
  },
  function (e, t, n) {
  (function (t) {
  function n() {
  }
  function i(e, t) {
    return function () {
      e.apply(t, arguments)
    }
  }
  function r(e) {
    if ('object' !== _typeof2(this)) throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof e) throw new TypeError('not a function');
    this._state = 0,
    this._handled = !1,
    this._value = void 0,
    this._deferreds = [
    ],
    d(e, this)
  }
  function o(e, t) {
    for (; 3 === e._state; ) e = e._value;
    return 0 === e._state ? void e._deferreds.push(t)  : (e._handled = !0, void r._immediateFn(function () {
      var n = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === n) return void (1 === e._state ? a : s) (t.promise, e._value);
      var i;
      try {
        i = n(e._value)
      } catch (r) {
        return void s(t.promise, r)
      }
      a(t.promise, i)
    }))
  }
  function a(e, t) {
    try {
      if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' === ('undefined' == typeof t ? 'undefined' : _typeof2(t)) || 'function' == typeof t)) {
        var n = t.then;
        if (t instanceof r) return e._state = 3,
        e._value = t,
        void l(e);
        if ('function' == typeof n) return void d(i(n, t), e)
      }
      e._state = 1,
      e._value = t,
      l(e)
    } catch (o) {
      s(e, o)
    }
  }
  function s(e, t) {
    e._state = 2,
    e._value = t,
    l(e)
  }
  function l(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value)
    });
    for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
    e._deferreds = null
  }
  function c(e, t, n) {
    this.onFulfilled = 'function' == typeof e ? e : null,
    this.onRejected = 'function' == typeof t ? t : null,
    this.promise = n
  }
  function d(e, t) {
    var n = !1;
    try {
      e(function (e) {
        n || (n = !0, a(t, e))
      }, function (e) {
        n || (n = !0, s(t, e))
      })
    } catch (i) {
      if (n) return;
      n = !0,
      s(t, i)
    }
  }
  var u = setTimeout;
  r.prototype['catch'] = function (e) {
    return this.then(null, e)
  },
  r.prototype.then = function (e, t) {
    var i = new this.constructor(n);
    return o(this, new c(e, t, i)),
    i
  },
  r.all = function (e) {
    var t = Array.prototype.slice.call(e);
    return new r(function (e, n) {
      function i(o, a) {
        try {
          if (a && ('object' === ('undefined' == typeof a ? 'undefined' : _typeof2(a)) || 'function' == typeof a)) {
            var s = a.then;
            if ('function' == typeof s) return void s.call(a, function (e) {
              i(o, e)
            }, n)
          }
          t[o] = a,
          0 === --r && e(t)
        } catch (l) {
          n(l)
        }
      }
      if (0 === t.length) return e([]);
      for (var r = t.length, o = 0; o < t.length; o++) i(o, t[o])
    })
  },
  r.resolve = function (e) {
    return e && 'object' === ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && e.constructor === r ? e : new r(function (t) {
      t(e)
    })
  },
  r.reject = function (e) {
    return new r(function (t, n) {
      n(e)
    })
  },
  r.race = function (e) {
    return new r(function (t, n) {
      for (var i = 0, r = e.length; i < r; i++) e[i].then(t, n)
    })
  },
  r._immediateFn = 'function' == typeof t && function (e) {
    t(e)
  }
  || function (e) {
    u(e, 0)
  },
  r._unhandledRejectionFn = function (e) {
    'undefined' != typeof console && console
  },
  r._setImmediateFn = function (e) {
    r._immediateFn = e
  },
  r._setUnhandledRejectionFn = function (e) {
    r._unhandledRejectionFn = e
  },
  e.exports = r
  }).call(t, n(80).setImmediate)
  },
  function (e, t, n) {
  (function (e) {
  function i(e, t) {
    this._id = e,
    this._clearFn = t
  }
  var r = 'undefined' != typeof e && e || 'undefined' != typeof self && self || window,
  o = Function.prototype.apply;
  t.setTimeout = function () {
    return new i(o.call(setTimeout, r, arguments), clearTimeout)
  },
  t.setInterval = function () {
    return new i(o.call(setInterval, r, arguments), clearInterval)
  },
  t.clearTimeout = t.clearInterval = function (e) {
    e && e.close()
  },
  i.prototype.unref = i.prototype.ref = function () {
  },
  i.prototype.close = function () {
    this._clearFn.call(r, this._id)
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
  n(81),
  t.setImmediate = 'undefined' != typeof self && self.setImmediate || 'undefined' != typeof e && e.setImmediate || this && this.setImmediate,
  t.clearImmediate = 'undefined' != typeof self && self.clearImmediate || 'undefined' != typeof e && e.clearImmediate || this && this.clearImmediate
  }).call(t, function () {
  return this
  }())
  },
  function (e, t, n) {
  (function (e, t) {
  !function (e, n) {
    'use strict';
    function i(e) {
      'function' != typeof e && (e = new Function('' + e));
      for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
      var i = {
        callback: e,
        args: t
      };
      return h[v] = i,
      f(v),
      v++
    }
    function r(e) {
      delete h[e]
    }
    function o(e) {
      var t = e.callback,
      i = e.args;
      switch (i.length) {
        case 0:
          t();
          break;
        case 1:
          t(i[0]);
          break;
        case 2:
          t(i[0], i[1]);
          break;
        case 3:
          t(i[0], i[1], i[2]);
          break;
        default:
          t.apply(n, i)
      }
    }
    function a(e) {
      if (m) setTimeout(a, 0, e);
       else {
        var t = h[e];
        if (t) {
          m = !0;
          try {
            o(t)
          } finally {
            r(e),
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
        n = e.onmessage;
        return e.onmessage = function () {
          t = !1
        },
        e.postMessage('', '*'),
        e.onmessage = n,
        t
      }
    }
    function c() {
      var t = 'setImmediate$' + Math.random() + '$',
      n = function (n) {
        n.source === e && 'string' == typeof n.data && 0 === n.data.indexOf(t) && a( + n.data.slice(t.length))
      };
      e.addEventListener ? e.addEventListener('message', n, !1)  : e.attachEvent('onmessage', n),
      f = function (n) {
        e.postMessage(t + n, '*')
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
        var n = g.createElement('script');
        n.onreadystatechange = function () {
          a(t),
          n.onreadystatechange = null,
          e.removeChild(n),
          n = null
        },
        e.appendChild(n)
      }
    }
    function p() {
      f = function (e) {
        setTimeout(a, 0, e)
      }
    }
    if (!e.setImmediate) {
      var f,
      v = 1,
      h = {
      },
      m = !1,
      g = e.document,
      _ = Object.getPrototypeOf && Object.getPrototypeOf(e);
      _ = _ && _.setTimeout ? _ : e,
      '[object process]' === {
      }.toString.call(e.process) ? s()  : l() ? c()  : e.MessageChannel ? d()  : g && 'onreadystatechange' in g.createElement('script') ? u()  : p(),
      _.setImmediate = i,
      _.clearImmediate = r
    }
  }('undefined' == typeof self ? 'undefined' == typeof e ? this : e : self)
  }).call(t, function () {
  return this
  }(), n(82))
  },
  function (e, t) {
  function n() {
  throw new Error('setTimeout has not been defined')
  }
  function i() {
  throw new Error('clearTimeout has not been defined')
  }
  function r(e) {
  if (d === setTimeout) return setTimeout(e, 0);
  if ((d === n || !d) && setTimeout) return d = setTimeout,
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
  function o(e) {
  if (u === clearTimeout) return clearTimeout(e);
  if ((u === i || !u) && clearTimeout) return u = clearTimeout,
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
  h && f && (h = !1, f.length ? v = f.concat(v)  : m = - 1, v.length && s())
  }
  function s() {
  if (!h) {
    var e = r(a);
    h = !0;
    for (var t = v.length; t; ) {
      for (f = v, v = [
      ]; ++m < t; ) f && f[m].run();
      m = - 1,
      t = v.length
    }
    f = null,
    h = !1,
    o(e)
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
    d = 'function' == typeof setTimeout ? setTimeout : n
  } catch (e) {
    d = n
  }
  try {
    u = 'function' == typeof clearTimeout ? clearTimeout : i
  } catch (e) {
    u = i
  }
  }();
  var f,
  v = [
  ],
  h = !1,
  m = - 1;
  p.nextTick = function (e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  v.push(new l(e, t)),
  1 !== v.length || h || r(s)
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
  function (e, t) {
  e.exports = function (e, t, n) {
  function i(e) {
    e = e || {
    },
    e.onsuccess = e.onsuccess || function () {
    };
    var t = document.createElement('script'),
    n = document.getElementsByTagName('head') [0],
    i = /^(?:loaded|complete|undefined)$/;
    e.url && (t.async = 'async', t.src = e.url, t.charset = 'utf-8', e.crossorigin && t.setAttribute('crossorigin', ''), t.onload = t.onerror = t.onreadystatechange = function () {
      i.test(t.readyState) && (t.onload = t.onerror = t.onreadystatechange = null, t = null, e.onsuccess(!0))
    }, t.onerror = function () {
      t.onload = t.onerror = t.onreadystatechange = null,
      t = null,
      e.onsuccess(!1)
    }, n.appendChild(t))
  }
  function r() {
    var n = {
      debug: !1,
      rotate: t.aspect && t.aspect > 1 ? 2 : 1,
      containerId: 'player',
      useComboService: !1,
      jsPath: o,
      width: '100%',
      height: '56.25vw',
      rootvid: t.vid,
      poster: e
    };
    window.player1 = new TxPlotPlayer(n),
    window.player1.addListener('loadPluginComplete', function () {
    }),
    window.player1.on('enterFullScreen', function () {
      $('body').css({
        overflow: 'hidden'
      }),
      $('.site_header').hide()
    }),
    window.player1.on('exitFullScreen', function () {
      $('body').css({
        overflow: ''
      }),
      $('.site_header').show()
    })
  }
  var o = '//vm.gtimg.cn/tencentvideo/plot/js/';
  i({
    url: o + 'index.js',
    onsuccess: r
  })
  }
  },
  function (e, t, n) {
  var i = n(85),
  r = n(86),
  o = window.$,
  a = n(32),
  s = {
  qq: '腾讯视频',
  youku: '优酷',
  qiyi: '爱奇艺',
  letv: '乐视',
  kankan: '迅雷看看',
  funshion: '风行',
  sohu: '搜狐视频',
  sina: '新浪视频',
  tudou: '土豆',
  wasu: '华数TV',
  m1905: '电影网',
  fenghuang: '凤凰',
  cntv: '央视',
  ku6: '酷6',
  baomihua: '爆米花',
  tangdou: '糖豆',
  v17173: '17173',
  hunantv: '芒果TV',
  baofeng: '暴风影音'
  };
  e.exports = function (e, t, n, l, c) {
  if (e.length) {
    e.html(i({
      cover: n,
      column: l,
      video: t
    }));
    var d = e.find('._sbtn'),
    u = e.find('._play'),
    p = e.find('.tvp_container'),
    f = '',
    v = {
    };
    if (c) {
      var h = [
      ];
      c.vctDocID.forEach(function (e) {
        'qq' != e && c.mapDoctID2RefResults && Object.keys(c.mapDoctID2RefResults[e].mapAttributeInfo).length > 1 && (c.mapDoctID2RefResults[e].name = e, h.push(c.mapDoctID2RefResults[e]))
      }),
      h.forEach(function (e, t) {
        var n = Object.keys(e.mapAttributeInfo);
        n = n[n.length - 2],
        '2' == e.mapAttributeInfo.playlist_info.pay_type ? (d.append('<span class="txp_item _s' + e.name + '" data-href="' + e.mapAttributeInfo[n].url + '">' + (s[e.name] || e.name) + '付费</span>'), v[e.name] = {
          url: e.mapAttributeInfo[n].url,
          id: e.name,
          name: (s[e.name] || e.name) + '付费'
        })  : (d.append('<span class="txp_item _s' + e.name + '" data-href="' + e.mapAttributeInfo[n].url + '">' + (s[e.name] || e.name) + '</span>'), v[e.name] = {
          url: e.mapAttributeInfo[n].url,
          name: s[e.name] || e.name
        }),
        0 == t && (f = e.mapAttributeInfo[n].url, '2' == e.mapAttributeInfo.playlist_info.pay_type ? (d.find('._s' + e.name).addClass('txp_current').siblings().removeClass('txp_current'), r('该视频需要在' + (s[e.name] || e.name) + '<br>付费才能正常观看喔～'))  : d.find('._s' + e.name).addClass('txp_current').siblings().removeClass('txp_current'))
      })
    } else d.find('.label').text('获取播放源失败，请刷新');
    var m;
    (m = v[a.get('source')] || v[a.get('sourcename')]) && (f = m.url, d.find('._s' + m.id).addClass('txp_current').siblings().removeClass('txp_current')),
    d.on('click', '.txp_item', function (e) {
      d.hasClass('txp_open') && (e.stopPropagation(), setTimeout(function () {
        var t = o(e.currentTarget);
        f = t.attr('data-href'),
        t.addClass('txp_current').siblings().removeClass('txp_current'),
        d.toggleClass('txp_open')
      }, 0))
    }),
    d.click(function () {
      !d.hasClass('txp_open') && d.toggleClass('txp_open')
    }),
    u.on('click', function () {
      location.href = f
    }),
    p.on('click', function () {
      location.href = f
    })
  }
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/outsite_player/body', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.column,
  o = e.video,
  a = e.cover,
  s = '';
  return s += '<div class="site_player" id="2016_outsite_player"> <section class="mod_player">   <div class="tvp_overlay_play _play" style="position:relative;top:100px"> <span class="tvp_button_play" style="margin:auto"></span> </div>  <div class="tvp_container tvp_controls_hide"> <div class="tvp_overlay_poster "> <div class="tvp_poster_img" style="background-image:url(',
  s += i(r.pic498x280 || r.pic161x225 || r.pic980x260 || r.hori_pic2_url || r.hori_pic1_url || o.pic496x280 || o.pic160x90 || a.horizontal_pic_url || a.vertical_pic_url),
  s += ')"></div> </div> </div> <div class="txp_source _sbtn"> <span class="txp_label _label">来源:</span> </div> </section> </div>          <!--<img class="tvp_poster_img" src="',
  s += i(r.pic498x280 || r.pic161x225 || r.pic980x260 || r.hori_pic2_url || r.hori_pic1_url || o.pic496x280 || o.pic160x90 || a.horizontal_pic_url || a.vertical_pic_url),
  s += '">-->              ',
  new String(s)
  })
  },
  function (e, t, n) {
  var i = n(16).$,
  r = null;
  e.exports = function (e) {
  var t = i('#toast'),
  n = t.find('._txt'),
  o = i('body');
  n.html(e),
  t.removeClass('none'),
  r && clearTimeout(r),
  r = setTimeout(function () {
    t.addClass('none')
  }, 3000),
  o.unbind('touchend').bind('touchend', function () {
    t.addClass('none')
  })
  }
  },
  function (e, t, n) {
  var i = n(68),
  r = n(77),
  o = n(88),
  a = (n(38), n(89), n(71), n(90), n(34), n(6) (), n(70)),
  s = n(75);
  e.exports = function (e, t, n, l) {
  var c = navigator.userAgent,
  d = c.match(/QQ\/([\d.]+)/);
  i.init(function () {
    i.isLogin() ? (i.getMainUserInfo().then(function (e) {
      e && (e.headurl && e.headurl.length > 5 && $('.js_user_head').attr('src', e.headurl), e.nick && $('.js_user_head').attr('alt', e.nick))
    }), r.getPayVip().then(function (e) {
      if (e) {
        var t = e.vip_icon && e.vip_icon.icon_url;
        1 == e.vip ? t ? ($('.btn_user_avatar').addClass('btn_user_avatar_new'), $('.header_user_vip').attr('src', t), $('.header_user_vip').removeClass('none'), $('.header_user_vip').error(function () {
          $(this).hide()
        }))  : ($('.account_vip').removeClass('none'), 1 == e.annualvip && $('.icon_vip').addClass('icon_vipyear'), e.level && $('.icon_vip').addClass('icon_vip_lv' + e.level), Txplayer && (Txplayer.dataset.isVip = !0))  : '' != e.annualendtime || '' != e.endTime,
        window.h5_reporter.Boss.elementExpose({
          eid: 'usertype',
          idtype: 1 == e.vip ? 1 : 2
        })
      }
    }), 'wx' == i.loginType() ? ($('.header_user_icon').addClass('user_icon_wx'), $('.icon_wechat_sm').removeClass('none'))  : ($('.header_user_icon').addClass('user_icon_qq'), $('.icon_qq_sm').removeClass('none')), $('.btn_user_text').addClass('none'), $('.btn_user_avatar').removeClass('none'))  : ($('.btn_user_text').removeClass('none'), $('.btn_user_avatar').addClass('none')),
    $('.btn_user_text').click(function () {
      i.openLogin()
    }),
    $('.btn_user_avatar').click(function () {
      d || o.dialog({
        text: '您确定要退出登录吗？',
        btn_num: 2,
        callback: function (e) {
          e && i.logout(function () {
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
  $('.btn_user_hd').on('click', function () {
    a({
      vid: t.vid,
      cid: n.cover_id,
      lid: l.column_id,
      appConfid: s.TOP_NAV_CONFID,
      liteConfid: s.TOP_NAV_CONFID_LITE,
      appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
    })
  }).attr({
    _report: !0,
    _eid: 'opennavi',
    _kv: JSON.stringify({
      type: 1,
      appid: location.href.indexOf('lite=true') > - 1 ? 2 : 1
    })
  })
  }
  },
  function (e, t) {
  function n(e) {
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
  var n = e.title || '温馨提示',
  i = e.text || '',
  r = e.callback,
  o = e.btn_ok_txt || '确定',
  a = e.btn_cancel_txt || '取消',
  s = e.btn_num || 1;
  s > 1 ? ($('.js_pop .js_pop_ok').addClass('btn_half'), $('.js_pop .js_pop_cancel').show())  : ($('.js_pop .js_pop_ok').removeClass('btn_half'), $('.js_pop .js_pop_cancel').hide()),
  $('.js_pop .js_pop_ok').text(o),
  $('.js_pop .js_pop_cancel').text(a),
  $('.g_pop_mask').show(),
  $('.js_pop').show(),
  $('.js_pop_title').html(n),
  $('.js_pop_txt').html(i),
  $('.js_pop .js_pop_ok').unbind('click'),
  $('.js_pop .js_pop_ok').on('click', function (e) {
    return $('.g_pop_mask').hide(),
    $('.js_pop').hide(),
    r && r(!0),
    !1
  }),
  $('.js_pop .js_pop_cancel').unbind('click'),
  $('.js_pop .js_pop_cancel').on('click', function (e) {
    return $('.g_pop_mask').hide(),
    $('.js_pop').hide(),
    r && r(!1),
    !1
  })
  }
  function i(e) {
  0 == $('.g_pop_mask').length && $('body').append('<div class="g_pop_mask none"></div>');
  var t = e || '加载中...';
  if (0 == $('.g_pop_loading').length) {
    var n = [
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
    $('body').append(n)
  }
  $('.g_pop_mask').show(),
  $('.g_pop_loading').show()
  }
  e.exports = {
  dialog: function (e) {
    n(e)
  },
  loading: function (e) {
    e ? i(e)  : ($('.g_pop_mask').hide(), $('.g_pop_loading').hide())
  }
  }
  },
  function (e, t, n) {
  'use strict';
  var i = n(65),
  r = window.videoliteBanner = e.exports = function (e) {
  e = e || {
  };
  var t = i(e).model({
    confid: r.getConfid()
  }).openFixer(function (e, t) {
    var n = tlux.store.video.model,
    i = tlux.store.cover.model;
    return 'videolite://v.qq.com/VideoDetailActivity?vid=' + (n.vid || i.vid) + '&cid=' + (i.cover_id || '') + '&from=third_897'
  });
  return t
  };
  r.getConfid = function () {
  return 897
  }
  },
  function (e, t, n) {
  'use strict';
  function i() {
  if (!isNaN( + a) && a < 100000 && a > 9) return + a;
  if (c.browser.WeChat) return 267;
  var e = localStorage.getItem('referrer_host') || l(document.referrer),
  t = localStorage.getItem('mreferrer_host') || l(s.get('mreferrer')),
  n = navigator.userAgent.toLowerCase(),
  i = '';
  return e = o(e) ? o(t) ? '' : t : e,
  e ? d.every(function (t) {
    return e.indexOf(t.url) == - 1 || (i = t.confid, !1)
  }) && (i = r(e))  : c.browser.MQQClient || (c.browser.MQQ ? i = 586 : d.every(function (e) {
    return n.indexOf(e.ua) == - 1 || (i = e.confid, !1)
  }) && (i = r(n))),
  i || d.every(function (e) {
    return e.ptag.indexOf(a) == - 1 || (i = e.confid, !1)
  }) && (i = r(a)),
  i
  }
  function r(e) {
  var t = '';
  return d.every(function (n) {
    n.like.every(function (i) {
      return e.indexOf(i) == - 1 || (t = n.confid, !1)
    })
  }),
  t
  }
  function o(e) {
  var t = [
    'v.qq.com',
    'film.qq.com',
    '3g.qq.com',
    'm.v.qq.com',
    'live.qq.com'
  ];
  return t.indexOf(e) != - 1
  }
  var a = n(34),
  s = n(32),
  l = n(91),
  c = n(92);
  e.exports = i;
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
  function (e, t) {
  'use strict';
  e.exports = function (e) {
  var t = '',
  n = /.*\:\/\/([^\/]*).*/,
  i = e.match(n);
  return 'undefined' != typeof i && null != i && (t = i[1]),
  t
  }
  },
  function (e, t) {
  e.exports = Txplayer.$
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  if (location.href.indexOf('lite=true') > - 1) return o.getConfid();
  var t = a();
  if (!t) if (e) switch (c.status) {
    case 'PLAY':
      t = 503;
      break;
    case 'AFTER':
      t = 257;
      break;
    case 'BEFORE':
    case 'PAUSE':
      t = 710
  } else t = 266;
  return t
  }
  var r = n(38),
  o = n(89),
  a = n(90),
  s = n(94),
  l = n(40),
  c = n(36),
  d = n(34),
  u = (n(4), n(6) ()),
  p = (n(96), n(97)),
  f = (n(98), n(100)),
  v = !1,
  h = !1;
  e.exports = function (e, t, n, a) {
  function m() {
    if (u.browser && u.browser.Weibo) return l({
    }, r.TXVWORDING.text, {
      0: '打开腾讯视频，观看高清完整版',
      1: '打开腾讯视频，观看高清完整版',
      2: '打开腾讯视频，观看高清完整版'
    });
    var e;
    return e = {
      0: '安装腾讯视频，观看高清完整版',
      1: '打开腾讯视频，观看高清完整版',
      2: '安装腾讯视频，观看高清完整版'
    },
    l({
    }, r.TXVWORDING.text, e)
  }
  function g() {
    var e;
    return u.browser && u.browser.Weibo ? l({
    }, r.TXVWORDING.text, {
      0: '看更多精彩大片，打开腾讯视频',
      1: '看更多精彩大片，打开腾讯视频',
      2: '看更多精彩大片，打开腾讯视频'
    })  : (48424 == a.column_id ? e = {
      0: '安装App，弹幕许愿明星帮实现',
      1: '打开App，弹幕许愿明星帮实现',
      2: '安装App，弹幕许愿明星帮实现'
    }
     : window.EXSOURCE ? e = {
      0: '看更多精彩大片，安装腾讯视频',
      1: '看更多精彩大片，打开腾讯视频',
      2: '看更多精彩大片，安装腾讯视频'
    }
     : x && (e = {
      0: '看' + Math.ceil(n.duration / 60) + '分钟完整版，安装腾讯视频',
      1: '看' + Math.ceil(n.duration / 60) + '分钟完整版，打开腾讯视频',
      2: '看' + Math.ceil(n.duration / 60) + '分钟完整版，安装腾讯视频'
    }), l({
    }, r.TXVWORDING.text, e))
  }
  var _ = e.find('._banner'),
  w = t.playright || n.playright || [
  ];
  w && w.length && (u.os.android ? w.indexOf('3') == - 1 && _.addClass('none')  : u.os.iphone && w.indexOf('5') == - 1 && _.addClass('none'));
  var y,
  b = function () {
    switch (window.URL_TYPE) {
      case 'column':
        return {
          column_id: a.column_id,
          exsource: window.EXSOURCE,
          duration: n.duration
        };
      case 'cover':
        return {
          video_id: n.vid,
          cover_id: t.cover_id,
          column_id: a.column_id,
          exsource: window.EXSOURCE,
          duration: n.duration
        };
      case 'video':
        return {
          video_id: n.vid,
          exsource: window.EXSOURCE,
          duration: n.duration
        }
    }
  }();
  if (location.href.indexOf('qqlivekid=true') == - 1) {
    y = location.href.indexOf('lite=true') > - 1 ? o()  : r().downloadFixer(function (e) {
      return 'xiaomiqj' === d && u.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
    }).openFixer(function (e, t) {
      return e + '&from=' + d
    }),
    y.model(b).on('render', function (e, t) {
      _.html(p({
        status: r.TXVWORDING.status[e],
        progress: t.progress,
        word: g() [e]
      }))
    }).on('action', function (e, t) {
      s.banner({
        cid: b.cover_id,
        vid: b.video_id,
        channelID: t.model.confid,
        bannerPos: 'banner',
        reportType: 2 == e || 0 == e ? 'download' : 'open',
        sOp: 'click',
        isInstallOpen: + (2 != e)
      })
    }),
    y.model({
      confid: i(),
      from: d
    }),
    y.on('ready', function (e) {
      c.on('playing', function () {
        503 == i(x) && !v && s.banner({
          cid: b.cover_id,
          vid: b.video_id,
          channelID: 503,
          bannerPos: 'banner',
          reportType: 2 == e || 0 == e ? 'download_show' : 'open_show',
          sOp: 'show',
          isInstallOpen: + (2 != e)
        }),
        v = !0
      }).on('allended', function () {
        257 == i(x) && !h && s.banner({
          cid: b.cover_id,
          vid: b.video_id,
          channelID: 257,
          bannerPos: 'banner',
          reportType: 2 == e || 0 == e ? 'download_show' : 'open_show',
          sOp: 'show',
          isInstallOpen: + (2 != e)
        }),
        h = !0
      })
    }),
    e.on('click', function () {
      y.action()
    });
    var x;
    window.EXSOURCE || window.LIMIT_DEFER.promise.then(function (e) {
      x = e,
      _.hasClass('tvp_app_banner_complex') || y.model({
        confid: i(x),
        from: d
      }).on('render', function (e, t) {
        _.html(p({
          status: r.TXVWORDING.status[e],
          progress: t.progress,
          word: m() [e]
        }))
      })
    })
  } else f.init(_, t)
  }
  },
  function (e, t, n) {
  function i(e) {
  function t(t, i) {
    t = $.extend(t, {
      BossId: 2453,
      Pwd: 0
    }, e.defaults),
    e.fixBefore(t, function (e) {
      var t = [
      ];
      Object.keys(e).forEach(function (n) {
        t.push(n + '=' + e[n])
      }),
      i(n + t.join('&'))
    })
  }
  var n = '//btrace.qq.com/kvcollect?',
  i = function (e) {
    t(e, function (e) {
      o(e)
    })
  };
  return i.lazy = function (e) {
    t(e, function (e) {
      r(e)
    })
  },
  i
  }
  var r = n(9),
  o = n(4),
  a = n(95),
  s = e.exports = {
  };
  Object.keys(a).forEach(function (e) {
  s[e] = i(a[e])
  })
  },
  function (e, t, n) {
  var i = n(68),
  r = n(10);
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
      e.mobileUV = r.get('mobileUV'),
      e.userid = r.get('mobileUV'),
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
      i.init(function () {
        e.logintype = i.loginType(),
        e.qq = '',
        e.openid = 'wx' == i.loginType() ? r.get('openid')  : '',
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
      i.init(function () {
        e.logintype = i.loginType(),
        e.qq = '',
        e.openid = 'wx' == i.loginType() ? r.get('openid')  : '',
        e.url = location.href,
        e.ua = navigator.userAgent.replace(/,/gi, ' '),
        t(e)
      })
    }
  }
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/banner/gameBannerTpl', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.link,
  o = e.iconUrl,
  a = e.gameName,
  s = e.status,
  l = e.progress,
  c = e.word,
  d = '';
  return d += '<a class="tvp_small_btn" data-url="',
  d += i(r),
  d += '"> <span class="tvp_icon" style="background: url(',
  d += i(o),
  d += ') right center no-repeat;background-size: contain;"></span> <span class="tvp_text">',
  d += i(a),
  d += '</span> </a> <div class="tvp_app_btn" data-status="',
  d += i(s),
  d += '"> <div class="tvp_progress"> <div class="tvp_progress_current" style="width: ',
  d += i(l),
  d += '%;animation:none;-webkit-animation:none"></div> </div> <div class="tvp_btn_text" data-text="',
  d += i(c),
  d += '"> <div class="tvp_app_logo"></div> </div> </div>',
  new String(d)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/banner/normalBannerTpl', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.status,
  o = e.progress,
  a = e.word,
  s = '';
  return s += '<div class="tvp_app_btn" data-status="',
  s += i(r),
  s += '"> <div class="tvp_progress"> <div class="tvp_progress_current" style="width: ',
  s += i(o),
  s += '%;animation:none;-webkit-animation:none"></div> </div> <div class="tvp_btn_text" data-text="',
  s += i(a),
  s += '"> <div class="tvp_app_logo"></div> </div> </div>',
  new String(s)
  })
  },
  function (e, t, n) {
  function i(e, t, n) {
  t || (t = o.defer());
  var i = Date.now();
  return e.success = function (e) {
    e._reqStart = i,
    e._reqEnd = Date.now(),
    t.resolve(e)
  },
  e.error = function (e) {
    e._reqStart = i,
    e._reqEnd = Date.now(),
    t.reject(e)
  },
  s.ajax(e),
  t.promise
  }
  function r(e) {
  return e.fixBefore = e.fixBefore || function (e) {
    return e
  },
  e.fixAfter = e.fixAfter || function () {
    return !0
  },
  e.onError = e.onError || function () {
  },
  function (t, n, r) {
    var a = o.defer();
    if (n = n || {
    }, t = e.fixBefore(s.extend({
    }, e.data, t, e.query), n), !t) throw new Error('invalid query');
    var l;
    return (l = e.url.match(/\{(\w|\d)*\}/g)) && l.forEach(function (n) {
      e.url = e.url.replace(n, t[n.substr(1, n.length - 2)])
    }),
    i({
      url: e.url,
      dataType: 'jsonp',
      data: t
    }, a, r).then(function (i) {
      if (e.fixAfter(i, t, n)) return i
    }, function () {
      e.onError(n)
    })
  }
  }
  var o = window.Promise,
  a = n(99),
  s = window.$;
  Object.keys(a).forEach(function (e) {
  i[e] = r(a[e])
  }),
  e.exports = i
  },
  function (e, t, n) {
  var i = n(86),
  r = n(68);
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
    fixAfter: function (e, t, n) {
      return t.qq ? n.noTip || i('已加入看单<br/>请在腾讯视频App个人中心查看')  : n.noTip || i('已加入看单，可在<br/>腾讯视频App内微信登录后找到'),
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
        for (var n in t) t[n].isHot = !0
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
      if (!r.loginType()) {
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
        var n = [
        ];
        return $.each(e.tablist[0].cover_info, function (e, t) {
          n.push(t.alginfo)
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
      var n = [
      ];
      return $.each(e.tablist[0].cover_info, function (e, t) {
        n.push(t.alginfo)
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
  function (e, t, n) {
  var i = n(61),
  r = n(44),
  o = n(62),
  a = n(12),
  s = navigator.userAgent.match(/MicroMessenger\/(\d+\.\d+(\.\d+)?)/),
  l = n(6) ();
  e.exports = {
  init: function (e, t) {
    var n = 'qqlivekid://v.qq.com/JumpAction?cht=5&ext=%7B%22cid%22:%22' + t.cover_id + '%22%7D',
    c = 'https://kid.v.qq.com/download?c=vdmp0 ';
    e.html('<div class="tvp_app_btn" ><div class="tvp_btn_text" data-text="看更多动画，打开小企鹅乐园"><div class="tvp_app_logo"></div></div></div>');
    var d = i({
      wxappid: 'wx5a3178167066897b',
      appappid: 'wx4aa415929bcad0a1'
    }),
    u = function () {
      try {
        window.location.href = n
      } catch (e) {
        var e = document.createElement('iframe');
        e.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
        e.src = n,
        document.body.appendChild(e)
      }
    },
    p = function () {
      window.location.href = c
    },
    f = function () {
      d(n, {
        fail: function () {
          window.location.href = c
        }
      })
    };
    window.qqkidliveClick = function () {
      if (l.browser.WeChat && 1 == a.verCompare('6.5.5', s[1])) r({
        pkg: 'com.tencent.qqlivekid',
        pkgurl: 'qqlivekid://'
      }, function (e, t) {
        t ? l.os.android ? f()  : o({
          appId: 'wx5a3178167066897b'
        }, function () {
          wx.invoke('launchApplication', {
            appID: 'wx4aa415929bcad0a1',
            extInfo: n,
            parameter: n
          }, function (e) {
            'launchApplication:ok' != e.err_msg && (window.location.href = c)
          })
        })  : p()
      });
       else {
        u();
        var e = (new Date).valueOf();
        setTimeout(function () {
          var t = (new Date).valueOf();
          t - e < 1550 && p()
        }, 1500)
      }
    },
    e.on('click', qqkidliveClick)
  }
  }
  },
  function (e, t, n) {
  var i = n(98),
  r = n(102),
  o = (n(103), n(104)),
  a = n(105),
  s = n(106),
  l = n(107),
  c = n(38),
  d = n(89),
  u = n(90);
  n(32);
  e.exports = function (e, t, n, p, f) {
  function v(e) {
    return i.columncover2({
      lid: t.column_id,
      offset: e || 0
    })
  }
  function h(e) {
    e.forEach(function (e, t) {
      e.fields.index = t + 1,
      _.append(o(e.fields))
    })
  }
  function m(e) {
    e.forEach(function (e, t) {
      e.index = t + 1,
      _.append(s(e))
    })
  }
  function g() {
    var n,
    i,
    r = function () {
      switch (window.URL_TYPE) {
        case 'column':
          return {
            column_id: f.column_id,
            exsource: window.EXSOURCE,
            duration: p.duration
          };
        case 'cover':
          return {
            video_id: p.vid,
            cover_id: t.cover_id,
            column_id: f.column_id,
            exsource: window.EXSOURCE,
            duration: p.duration
          };
        case 'video':
          return {
            video_id: p.vid,
            exsource: window.EXSOURCE,
            duration: p.duration
          }
      }
    }(),
    o = {
      0: '安装腾讯视频，观看更多往期节目',
      1: '观看更多往期节目',
      2: '安装腾讯视频，观看更多往期节目',
      16: '安装腾讯视频，观看更多往期节目'
    },
    a = $(l());
    location.href.indexOf('lite=true') > - 1 ? (n = d(), i = d.getConfid())  : (n = c(), i = u() || 140),
    n.model(r).model({
      confid: i
    }).on('render', function (t, n) {
      a.appendTo(e).find('.icon_text').text(o[t])
    }).on('action', function (e, t) {
    }),
    a.on('click', function () {
      n.action()
    })
  }
  var _;
  if (window.EXSOURCE && n) {
    e.html(a({
      ex: !0
    })).removeClass('none'),
    _ = e.find('._list');
    var w = [
    ],
    y = n.mapDoctID2RefResults[n.vctDocID[0]].mapAttributeInfo;
    Object.keys(y).forEach(function (e, t, n) {
      0 != t && t != n.length - 1 && w.unshift(y[e])
    }),
    m(w)
  } else v(0).then(function (t) {
    if (t && t.jsonvalue && t.jsonvalue.results && t.jsonvalue.results.length) {
      var n = t.jsonvalue.results.length;
      e.html(r({
        ex: !1
      })).removeClass('none'),
      n <= 3 && e.find('._more').hide(),
      _ = e.find('._list'),
      h(t.jsonvalue.results),
      e.find('._more').on('click', function (n) {
        h(t.jsonvalue.results),
        e.find('._more').hide(),
        g()
      })
    }
  })
  };
  var p = n(108);
  p(1)
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/chapter/txv_body', '<div class="mod_hd"> <h2 class="mod_title U_color_a">往期节目</h2> </div> <div class="mod_bd"> <div class="mod_figures mod_figures_like mod_figures_clip"> <ul class="figures_list _list" _hot="chapters" _scroll_view> </ul> </div> </div>')
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/chapter/txv_item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = e.cover_checkup_grade,
  o = e.playright,
  a = n.$escape,
  s = e.index,
  l = e.cid,
  c = e.second_title,
  d = e.pic2_url,
  u = e.new_pic_hz,
  p = e.publish_date,
  f = e.c_second_title,
  v = e.totalview,
  h = '';
  return 4 == r && o.indexOf('2') != - 1 && (h += ' <li class="list_item" _report _eid="chapter" _kv=\'{"rankid":', h += a(s), h += '}\'> <a href="', h += a(i.playUrl('javascript:', {
    cid: l
  })), h += '" class="figure" tabindex="-1"> <img alt="', h += a(c), h += '" src="', h += a(d || u), h += '" onerror="picerr(this, \'h\')" /> <div class="figure_duration">', h += a(p ? p.split(' ') [0] : ''), h += '</div> </a> <div class="figure_info_center"> <a href="', h += a(i.playUrl('javascript:', {
    cid: l
  })), h += '"><strong class="figure_title">', h += a(c || f), h += '</strong></a> <!-- ', v && (h += ' <div class="figure_count U_color_b"> <svg class="svg_icon_play_sm U_svg_c" viewBox="0 0 24 24"> <use class="svg_use" xlink:href="#sym_icon_play_sm"></use> </svg><span class="num">', h += a(i.commaNumber(v)), h += '</span> </div> '), h += ' --> </div> </li> '),
  new String(h)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/chapter/txv_item2', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = n.$escape,
  o = e.index,
  a = (e.cid, e.cover_id),
  s = e.second_title,
  l = e.horizontal_pic_ur,
  c = e.new_pic_hz,
  d = e.publish_date,
  u = e.c_second_title,
  p = e.view_all_count,
  f = '';
  return f += '<li class="list_item" _report _eid="chapter" _kv=\'{"rankid":',
  f += r(o),
  f += '}\'> <a href="',
  f += r(i.playUrl('javascript:', {
    cid: a
  })),
  f += '" class="figure" tabindex="-1"> <img alt="',
  f += r(s),
  f += '" src="',
  f += r(l || c),
  f += '" onerror="picerr(this, \'h\')" /> <div class="figure_duration">',
  f += r(d ? d.split(' ') [0] : ''),
  f += '</div> </a> <div class="figure_info_center"> <a href="',
  f += r(i.playUrl('javascript:', {
    cid: a
  })),
  f += '"><strong class="figure_title">',
  f += r(s || u),
  f += '</strong></a> <!-- ',
  p && (f += ' <div class="figure_count U_color_b"> <svg class="svg_icon_play_sm U_svg_c" viewBox="0 0 24 24"> <use class="svg_use" xlink:href="#sym_icon_play_sm"></use> </svg><span class="num">', f += r(i.commaNumber(p)), f += '</span> </div> '),
  f += ' --> </div> </li> ',
  new String(f)
  })
  },
  function (e, t, n) {
  var i = n(18);
  n(106),
  e.exports = i('_component/2016/chapter/out_body', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, e.list),
  r = n.$each,
  o = (e.$value, e.$index, function (i, r) {
    r = r || e;
    var o = n.$include(i, r, t);
    return a += o
  }),
  a = '';
  return a += '<section class="mod_box mod_sideslip_link U_box_bg_a" id="2016_list"> <div class="mod_hd"> <h2 class="mod_title U_color_b">往期节目</h2> </div> <div class="mod_bd"> <div class="mod_link_list"> <ul class="_list"_scroll_view> ',
  i && (a += ' ', r(i, function (e, t) {
    a += ' ',
    e.index = t + 1,
    a += ' ',
    o('./out_item', e),
    a += ' '
  }), a += ' '),
  a += ' </ul> </div> </div> </section>',
  new String(a)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/chapter/out_item', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.index,
  o = e.url,
  a = e.title,
  s = e.episode_number,
  l = '';
  return l += '<li class="item" _report _eid="chapter" _kv=\'{"rankid":',
  l += i(r),
  l += '}\'> <a class="U_color_b" href="',
  l += i(o),
  l += '" title="',
  l += i(a),
  l += '" ><span class="text">',
  l += i(s),
  l += i(a),
  l += '</span></a> </li>',
  new String(l)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/chapter/bannerTpl', '<div class="mod_go_app"> <span class="icon_text">安装腾讯视频，观看更多往期节目</span> <svg class="svg_icon_right U_svg_c" viewBox="0 0 20 20" width="14" height="14"> <path d="M14.2 9.1L6.5 1.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l7.1 7.1-7.1 7.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l7.8-7.8c.3-.4.3-1-.1-1.4z"></path> </svg> </div>')
  },
  function (e, t) {
  'use strict';
  var n = function () {
  var e = [
    0,
    1,
    2,
    4,
    7
  ];
  return function (t) {
    return t in e ? e[t] : n(t - 1) + (t - 1)
  }
  }();
  e.exports = function (e) {
  return function (t) {
    return n(t) * e
  }
  }
  },
  function (e, t, n) {
  'use strict';
  var i = n(16),
  r = n(32),
  o = n(7);
  e.exports = function (e) {
  var t;
  (t = i.$.getScript ? i.$.getScript : function (e, t, n) {
    var i = document.createElement('script'),
    r = $(i);
    i.src = e,
    $('head').append(i),
    r.bind('load', t),
    r.bind('error', n)
  }) ('//vm.gtimg.cn/tencentwap/js/QQVideo/activity/effect/H5Effect.js', function () {
    var t = window.H5Effect,
    n = r.get('eid');
    if (n && 'undefined' != typeof t && e.length > 0) {
      var i = e;
      t.init(),
      t.onPlayEffect(n, null, 1),
      setTimeout(function () {
        i.empty()
      }, 10000),
      o.button('effecitShow_' + n),
      i.bind('click', function () {
        i.empty()
      })
    }
  })
  }
  },
  function (e, t, n) {
  'use strict';
  var i = Txplayer.$,
  r = n(111),
  o = n(112),
  a = n(77),
  s = n(68),
  l = n(98),
  c = n(73);
  e.exports = function (e, t, n, d) {
  function u(e, n) {
    var i = Math.max(0, e - 30),
    r = t.video_ids.slice(i, e);
    return l.unionvideos({
      idlist: r
    }).then(function (e) {
      e && e.results && e.results.reverse().forEach(function (e) {
        e = e.fields,
        e.cover_id = t.cover_id,
        e.uvip = c.getUrlParam('uvip') || '',
        e.qqaid = c.getUrlParam('qqaid') || '',
        e.tag_text = t.tag_text,
        h.prepend(o(e))
      }),
      n && n()
    }, function () {
      n && n()
    }),
    i
  }
  function p(e, n) {
    var i = Math.min(t.video_ids.length, e + 30),
    r = t.video_ids.slice(e, i);
    return l.unionvideos({
      idlist: r
    }).then(function (e) {
      e && e.results && e.results.forEach(function (e) {
        e = e.fields,
        e.cover_id = t.cover_id,
        e.uvip = c.getUrlParam('uvip') || '',
        e.qqaid = c.getUrlParam('qqaid') || '',
        e.tag_text = t.tag_text,
        h.append(o(e))
      }),
      n && n()
    }, function () {
      n && n()
    }),
    i
  }
  if ((2 == t.type || 3 == t.type || 106 == t.type) && t.video_ids.length && !window.EXSOURCE && d.list.every(function (e) {
    return e.c_title_output != e.title
  })) {
    var f,
    v,
    h,
    m;
    e.hasClass('none') ? (e.html(r(t)).removeClass('none'), h = e.find('._list'), d.list.forEach(function (e) {
      m = i(o({
        cover_id: t.cover_id,
        vid: e.vid,
        type: t.type,
        episode: e.index + 1,
        is_trailer: e.is_trailer,
        update_flag: e.update_flag,
        playingVid: n.vid,
        uvip: c.getUrlParam('uvip') || '',
        qqaid: c.getUrlParam('qqaid') || '',
        pay_status: e.pay_stattus,
        tag_text: t.tag_text
      })),
      h.append(m)
    }))  : h = e.find('._list'),
    m = h.find('li.current'),
    m.length && (h.parent() [0].scrollLeft = m[0].offsetLeft - 3 * m.width()),
    f = d.list[0].index - 1,
    v = d.list[d.list.length - 1].index + 1;
    var g = h.parent(),
    _ = g.width(),
    w = !1;
    g.on('scroll', function () {
      if (!w) {
        var e = h.width();
        if (f >= 0 && g[0].scrollLeft <= Math.min(e / 4, 200)) {
          var n = h.find('li').eq(0);
          f = u(f, function () {
            w = !1,
            g[0].scrollLeft = n[0].offsetLeft
          }),
          w = !0
        } else v < t.video_ids.length && g[0].scrollLeft >= Math.max(3 * e / 4, e - _ - 200) && (v = p(v, function () {
          w = !1
        }), w = !0)
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
  function (e, t, n) {
  var i = n(18);
  n(112),
  e.exports = i('_component/2016/episode/body', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.update_desc,
  o = e.episode_updated,
  a = e.list,
  s = n.$each,
  l = (e.$value, e.$index, function (i, r) {
    r = r || e;
    var o = n.$include(i, r, t);
    return c += o
  }),
  c = '';
  return c += '<section class="mod_box mod_sideslip_episodes U_box_bg_a" id="2016_episode"> <div class="mod_hd mod_hd_new"> <h2 class="mod_title U_color_a">剧集</h2> <div class="mod_subtitle U_color_c">',
  c += i(r),
  r != o && (r && o && (c += '/'), c += i(o)),
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
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/episode/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = e.__current,
  o = e.vid,
  a = e.playingVid,
  s = e.is_trailer,
  l = n.$escape,
  c = e.index,
  d = (e.cid, e.cover_id),
  u = (e.pay, e.drm),
  p = e.uvip,
  f = e.qqaid,
  v = e.episode,
  h = e.pay_status,
  m = e.update_flag,
  g = '';
  return g += '<li class="item',
  (r || o == a) && (g += ' current'),
  1 == s ? g += ' _mid_trailer' : 2 == s && (g += ' _tail_trailer'),
  g += '" vid="',
  g += l(o),
  g += '" _report _eid="episode" _kv=\'{"rankid":',
  g += l(c),
  g += '}\'> <a class="U_color_b" href="',
  g += l(i.playUrl('javascript:', {
    cid: d,
    vid: o,
    pay: !! + u,
    uvip: p,
    qqaid: f
  })),
  g += '">',
  g += l(v < 10 ? '0' + + v : + v),
  g += ' ',
  + u && h ? (g += ' <i class="mark_text_vip"> ', 4 == h ? g += '用券 ' : 5 == h ? g += 'VIP ' : 6 == h ? g += 'VIP ' : 7 == h ? g += '付费 ' : 9 == h ? g += '付费 ' : 10 == h ? g += 'VIP+ ' : 11 == h ? g += 'VIP尝鲜 ' : 12 == h && (g += 'VIP付费 '), g += ' </i> ')  : (g += ' ', s ? g += '<i class="mark_text_trailer">预</i> ' : '306061' == m && (g += '<i class="mark_text_new">新</i> '), g += ' '),
  g += ' </a> </li>',
  new String(g)
  })
  },
  function (e, t, n) {
  'use strict';
  var i = n(114),
  r = n(98),
  o = n(115),
  a = n(38),
  s = n(89),
  l = n(90);
  e.exports = function (e, t, n, c, u) {
  function p() {
    if (d(v + 1) > h.length && h.length != _.length) {
      var e = _.slice(h.length, h.length + 30);
      return void r.unionvideos({
        idlist: e
      }).then(function (e) {
        0 == e.errorno && (h = h.concat(e.results.map(function (e) {
          return e.fields
        })), p())
      }, function () {
      })
    }
    for (var n = d(v); n < h.length && n < d(v + 1); n++) m.append(i(h[n]));
    v++,
    (d(v) >= t.clips_ids.length || v > 1) && (g.hide(), f())
  }
  function f() {
    var i,
    r,
    d = function () {
      switch (window.URL_TYPE) {
        case 'column':
          return {
            column_id: c.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'cover':
          return {
            video_id: n.vid,
            cover_id: t.cover_id,
            column_id: c.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'video':
          return {
            video_id: n.vid,
            exsource: window.EXSOURCE,
            duration: n.duration
          }
      }
    }(),
    u = {
      0: '安装腾讯视频，观看更多精彩片花',
      1: '更多精彩片花',
      2: '安装腾讯视频，观看更多精彩片花'
    },
    p = $(o());
    location.href.indexOf('lite=true') > - 1 ? (i = s(), r = s.getConfid())  : (i = a(), r = l() || 140),
    i.model(d).model({
      confid: r
    }).on('render', function (t, n) {
      p.appendTo(e).find('.icon_text').text(u[t])
    }).on('action', function (e, t) {
    }),
    p.on('click', function () {
      i.action()
    })
  }
  var v = 1,
  h = u.list,
  m = e.find('._list'),
  g = e.find('._more');
  g.on('click', p),
  u.index = u.index || 0;
  var _;
  _ = u.index ? t.clips_ids.slice(u.index).concat(t.clips_ids.slice(0, u.index))  : t.clips_ids
  };
  var c = n(108),
  d = c(3)
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/clips/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = n.$escape,
  o = e.index,
  a = (e.cid, e.cover_id),
  s = e.vid,
  l = e.pic160x90,
  c = e.duration,
  d = e.title,
  u = '';
  return u += '<li class="list_item" _report _eid="movieclips" _kv=\'{"rankid":',
  u += r(o),
  u += '}\'> <a href="',
  u += r(i.playUrl('javascript:', {
    cid: a,
    vid: s
  })),
  u += '" class="figure"> <img src="',
  u += r(l),
  u += '" onerror="picerr(this, \'h\')" /> <div class="figure_duration">',
  u += r(i.formatDuration(c)),
  u += '</div> </a> <div class="figure_info_center"> <a href="',
  u += r(i.playUrl('javascript:', {
    cid: a,
    vid: s
  })),
  u += '"><strong class="figure_title">',
  u += r(d),
  u += '</strong></a> </div> </li>',
  new String(u)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/clips/bannerTpl', ' <div class="mod_more_btn"> 打开腾讯视频，看更多精彩内容 </div>')
  },
  function (e, t, n) {
  'use strict';
  var i = n(38),
  r = n(89),
  o = n(90),
  a = (n(40), n(67)),
  s = n(98),
  l = n(117),
  c = n(11),
  d = (n(34), n(6) (), n(118));
  e.exports = function (e, t, n, u) {
  function p() {
    w || (w = !0, m.each(function (e) {
      if (e < 2) {
        var t = $(this).show();
        v(t)
      }
    }))
  }
  function f() {
    g.hide(),
    m.each(function (e) {
      if (e >= 2) {
        var t = $(this).show();
        v(t)
      }
    }),
    h()
  }
  function v(t) {
    var i = t.attr('data-vid');
    e.removeClass('none'),
    $('#mod_player_' + i).removeClass('none');
    var r = {
      containerId: 'mod_player_' + i,
      vid: i,
      width: '100%',
      height: '100%',
      videoType: 'vod',
      playerType: 'h5tiny',
      useComboService: !0,
      autoplay: !1,
      shortVideoBtnTitle: '立即观看完整版',
      poster: t.attr('data-pic'),
      openUrl: 'tenvideo2://?action=5&video_id=' + n.vid
    },
    o = new Txplayer(r),
    s = !1;
    o.userMsg.on('playStateChange', function (e) {
      1 === e && (!s && a('minisplay'), s = !0)
    })
  }
  function h() {
    var a,
    s,
    l = function () {
      switch (window.URL_TYPE) {
        case 'column':
          return {
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'cover':
          return {
            video_id: n.vid,
            cover_id: t.cover_id,
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'video':
          return {
            video_id: n.vid,
            exsource: window.EXSOURCE,
            duration: n.duration
          }
      }
    }(),
    c = {
      0: '安装腾讯视频，观看更多热门小视频',
      1: '更多热门小视频',
      2: '安装腾讯视频，观看更多热门小视频'
    },
    p = $(d());
    location.href.indexOf('lite=true') > - 1 ? (a = r(), s = r.getConfid())  : (a = i(), s = o() || 140),
    a.model(l).model({
      confid: s
    }).on('render', function (t, n) {
      p.appendTo(e).find('.icon_text').text(c[t])
    }).on('action', function (e, t) {
    }),
    p.on('click', function () {
      a.action()
    })
  }
  if ([1,
  2].indexOf(t.type) == - 1) return e.addClass('none');
  var m,
  g = e.find('._more');
  g.on('click', f);
  var _;
  c(e[0], {
    recalc: !0,
    once: !0
  }, function () {
    e.addClass('none'),
    s.minivideos({
      vid: n.vid || '',
      cid: t.cover_id || '',
      lid: u.column_id || ''
    }).then(function (t) {
      _ = t.data.feedList,
      e.find('._list').html(_.slice(0, 4).map(function (e) {
        return l(e)
      }).join('')),
      _.length && e.removeClass('none'),
      m = e.find('._item'),
      p()
    })
  });
  var w = !1
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/mini/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = n.$escape,
  o = e.videos,
  a = n.$string,
  s = e.content,
  l = '';
  return l += ' <div class="mod_video_unit _item" data-vid="',
  l += r(o[0].vid),
  l += '" data-pic="',
  l += r(o[0].imageUrl),
  l += '" style="display: none"> <div class="mod_video"> <div class="video_placeholder"> <img class="poster_img" src="',
  l += r(o[0].imageUrl),
  l += '" /> </div> <div class="mod_player none" id="mod_player_',
  l += r(o[0].vid),
  l += '">  </div> </div> <div class="desc U_color_b"> ',
  l += a(i.emotion(s)),
  l += ' </div> </div>',
  new String(l)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/mini/bannerTpl', '<div class="mod_go_app"> <span class="icon_text">安装腾讯视频，观看更多热门小视频</span> <svg class="svg_icon_right U_svg_c" viewBox="0 0 20 20" width="14" height="14"> <path d="M14.2 9.1L6.5 1.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l7.1 7.1-7.1 7.1c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l7.8-7.8c.3-.4.3-1-.1-1.4z"></path> </svg> </div>')
  },
  function (e, t, n) {
  var i = n(98),
  r = (n(11), n(120)),
  o = n(38),
  a = n(89),
  s = n(121),
  l = (n(122), n(123)),
  c = (n(90), n(70)),
  d = n(75);
  e.exports = function (e, t, n, u) {
  function p(e, t) {
    function n(n, o) {
      for (var a = o && o < t.length ? o : t.length, s = n; s < a; s++) t[s].index = s + 1,
      i.append(l(t[s]));
      r.refresh(i),
      n && (e.find('._more').hide(), v())
    }
    if (t && t.length) {
      e.removeClass('none').addClass('mod_recommendation_h');
      var i = e.find('._list');
      n(0, 6),
      e.find('._more').on('click', function () {
        n(6)
      })
    } else e.hide()
  }
  function f() {
    e.on('click', function (e) {
      var t = $(e.target),
      n = t.parents('.list_item').length ? t.parents('.list_item')  : t,
      i = n.attr('data-cid') || '',
      r = n.attr('data-vid') || '';
      (t.parents('.list_item').length || t.hasClass('list_item')) && c({
        vid: r,
        cid: i,
        lid: '',
        appConfid: d.GUESS_LIKE_ITEM_CONFID,
        liteConfid: d.TOP_NAV_CONFID_LITE,
        appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
      })
    })
  }
  function v() {
    var i,
    r,
    s = function () {
      switch (window.URL_TYPE) {
        case 'column':
          return {
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'cover':
          return {
            video_id: n.vid,
            cover_id: t.cover_id,
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'video':
          return {
            video_id: n.vid,
            exsource: window.EXSOURCE,
            duration: n.duration
          }
      }
    }(),
    l = {
      0: '安装腾讯视频，观看更多精彩推荐',
      1: '更多精彩推荐',
      2: '安装腾讯视频，观看更多精彩推荐',
      16: '安装腾讯视频，观看更多精彩推荐'
    };
    location.href.indexOf('lite=true') > - 1 ? (i = a(), r = a.getConfid())  : (i = o(), r = 20111),
    i.model(s).model({
      confid: d.GUESS_LIKE_CONFID
    }).on('render', function (t, n) {
      h.appendTo(e).find('.icon_text').text(l[t])
    }).on('action', function (e, t) {
    }),
    h.on('click', function () {
      try {
        i.action()
      } catch (e) {
      }
    }).attr({
      _report: !0,
      _eid: 'videorecpull',
      _kv: JSON.stringify({
        app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
      })
    })
  }
  var h = $(s());
  i.recommend2016({
    vid: n.vid
  }).then(function (t) {
    e.removeClass('none');
    var n = t.data.recItemList.map(function (e) {
      return e.seqNum = t.data.seqNum,
      e.coverType = window.COVER_TYPE,
      e
    }).slice(0, 12),
    i = n.length;
    n = i % 2 ? n.slice(0, i - 1)  : n.slice(0),
    n.length > 6 && e.find('._more').removeClass('more_none'),
    t.data && p(e, n),
    f(),
    r.init()
  })
  };
  var u = n(108);
  u(3)
  },
  function (e, t, n) {
  function i(e, t, n) {
  var i = e.attr('_' + m).split('&');
  n && a(i);
  var r = {
  };
  r.url = location.href,
  i.forEach(function (e, t) {
    var n = e.split('=');
    if (n && !(n.length < 2)) if (n.length > 2 && (n[1] = n.slice(1).join('=')), n[0].length > 2) ~c.indexOf(g, n[0]) ? r[n[0]] = n[1] : '';
     else {
      var i = c.indexOf(_, n[0]);
      ~i ? r[g[i]] = n[1] : ''
    }
  }),
  t += Math.random();
  var o = c.extend({
  }, h, r);
  o = Object.keys(o).map(function (e) {
    return e + '=' + o[e]
  }).join('&'),
  (n ? p.push : u) (t + o)
  }
  function r() {
  function e() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  return [e(),
  e(),
  e(),
  e()].join('')
  }
  function o() {
  var e = d.get('tvfe_boss_uuid');
  if (!e) {
    e = r();
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
  for (var n in e) e.hasOwnProperty(n) && 'userID' != n && 'actionType' != n && 'url' != n && t.push(e[n]);
  return t.join('|')
  }
  var l = n(11),
  c = n(12),
  d = (n(32), n(10)),
  u = n(4),
  p = n(9),
  f = 'http://btrace.qq.com/kvcollect?BossId=4073&Pwd=598576177&_dc=',
  v = 'http://btrace.qq.com/kvcollect?BossId=4074&Pwd=1411373385&_dc=',
  h = {
  actionType: 'click',
  userID: o(),
  ptag: n(34),
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
      i(t, v, !0)
    }),
    this.refresh()
  },
  refresh: function (e) {
    var t = e ? $(e).find('[' + m + ']')  : $('[' + m + ']');
    t.each(function () {
      var e = $(this),
      t = e.attr(m);
      e.attr('_' + m, t).removeAttr(m);
      var n = l(this, {
        enter: !0
      }, function () {
        i(e, f),
        setTimeout(function () {
          n && n()
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
  _ = [
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
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommend/bannerTpl', ' <div class="mod_more_btn"> 打开腾讯视频，看更多精彩内容 </div>')
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommend/body', '<section class="mod_box mod_box_lastview" id="2016_recommend"> <div class="mod_hd"> <h2 class="mod_title U_color_a">为你推荐</h2> </div> <div class="mod_bd"> <div class="mod_figures mod_figures_like" _hot="recommends"> <ul class="figures_list _list"> </ul> </div> <div class="mod_more more_none _more" _hot="recommendsbtn"> <svg class="svg_icon_switch U_svg_c" viewBox="0 0 44 44"> <use class="svg_use" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sym_icon_switch"></use> </svg> </div> </div> </section>')
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommend/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = e.itemType,
  o = n.$escape,
  a = e.unionInfo,
  s = e.index,
  l = e.seqNum,
  c = e.recReportInfo,
  d = (e.cid, e.vid, '');
  //var videourl = o(i.playUrl('javascript:', {
  //  cid: a.cover_id
  //}))
  //console.log("视频地址是:"+videourl);
  return 2 == r ? (d += ' <li class="list_item" data-cid="', d += o(a.cover_id), d += '" _report _eid="videorec" _kv=\'{"rankid":', d += o(s), d += '}\' _recommend="pageType=mplay&module=videoRecommend&seqnum=', d += o(l), d += '&rtype=', d += o(r), d += '&algId=', d += o(c.algId), d += '&bucketId=', d += o(c.bucketId), d += '&reason=', d += o(c.reason), d += '&reasonType=', d += o(c.reasonType), d += '&cid=', d += o(a.cover_id), d += '"> <!-- <a href="', d += o(i.playUrl('javascript:', {
    cid: a.cover_id
  })), d += '" class="figure"> --> <a href="javascript:;" class="figure"> <img src="', d += o(a.horizontal_pic_url), d += '"/> <div class="figure_duration"> ', d += o(a.episode_updated || ''), d += ' </div> </a> <div class="figure_info_center"> <strong class="figure_title ', d += o(a.second_title ? '' : 'figure_title_two'), d += '"><a href="javascript:;">', d += o(a.title), d += '</a></strong> <div class="figure_count U_color_b"> ', d += o(a.second_title || ''), d += ' </div> </div> </li> ')  : (d += ' <li class="list_item" data-cid="', d += o(a.cover_id), d += '" data-vid="', d += o(a.vid), d += '" _report _eid="videorec" _kv=\'{"rankid":', d += o(s), d += '}\' _recommend="pageType=mplay&module=videoRecommend&seqnum=', d += o(l), d += '&rtype=', d += o(r), d += '&algId=', d += o(c.algId), d += '&bucketId=', d += o(c.bucketId), d += '&reason=', d += o(c.reason), d += '&reasonType=', d += o(c.reasonType), d += '&vid=', d += o(a.vid), d += '"> <!-- <a href="', d += o(i.playUrl('javascript:', {
    vid: a.vid
  })), d += '" class="figure"> --> <a href="javascript:;" class="figure"> <img src="', d += o(a.pic160x90), d += '"/> <div class="figure_duration"> ', d += o(a.episode_updated || ''), d += ' </div> </a> <div class="figure_info_center"> <strong class="figure_title ', d += o(a.second_title ? '' : 'figure_title_two'), d += '"><a href="javascript:;">', d += o(a.title), d += '</a></strong> <div class="figure_count U_color_b"> ', d += o(a.second_title || ''), d += ' </div> </div> </li> '),
  new String(d)
  })
  },
  function (e, t, n) {
  'use strict';
  var i,
  r = n(94),
  o = (n(7), n(43), n(6) ()),
  a = n(38),
  s = n(89),
  l = n(40),
  c = n(32),
  d = n(34);
  c.get('goapp') && !isNaN( + c.get('goapp')) && (i = + c.get('goapp')),
  e.exports = function (e, t, n, c) {
  var u,
  p,
  f = function () {
    switch (window.URL_TYPE) {
      case 'column':
        return {
          column_id: c.column_id,
          duration: n.duration
        };
      case 'cover':
        return {
          video_id: n.vid,
          cover_id: t.cover_id,
          duration: n.duration
        };
      case 'video':
        return {
          video_id: n.vid,
          duration: n.duration
        }
    }
  }();
  location.href.indexOf('lite=true') > - 1 ? (u = s({
    defaultAction: !1
  }), p = s.getConfid())  : (u = a({
    defaultAction: !1
  }).openFixer(function (e) {
    return e += '&jumpaction=2000&splash=1'
  }), p = i || 791),
  u.model(l(f, {
    confid: p,
    from: d
  })).on('action', function (e, i) {
    r.banner({
      cid: t.cover_id,
      vid: n.video_id,
      channelID: i.model.confid,
      bannerPos: 'weixin',
      reportType: 2 == e || 0 == e ? 'download' : 'open',
      sOp: 'show',
      isInstallOpen: + (2 != e)
    })
  }).on('action', function (t, n) {
    var r = n.openurl;
    n.downloadurl;
    if (!i && o.browser.WeChat) 1 == t ? setTimeout(function () {
      location.href = r,
      setTimeout(function () {
        window.WeixinJSBridge.invoke('closeWindow')
      }, 50)
    }, 50)  : e.hide();
     else {
      var a = document.createElement('iframe');
      a.style.cssText = 'width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;',
      a.src = r,
      document.body.appendChild(a);
      Date.now();
      setTimeout(function () {
        Date.now()
      }, 1500)
    }
  }).on('ready', function (t) {
    o.browser.WeChat && (1 != t ? (e.hide(), localStorage.setItem('play_redirectapp', 0))  : localStorage.removeItem('play_redirectapp'))
  }),
  o.browser.QQvideo || o.browser.qqnews || e.hasClass('none') && !e.hasClass('_available') && !i || d.indexOf('baidu') != - 1 || u.action()
  }
  },
  function (e, t) {
  'use strict';
  e.exports = function (e, t, n, i) {
  var r = n.vid,
  o = t.cover_id,
  a = i.column_id;
  if (t && t.giftbag_id && 1 == t.giftbag_id && (location.href = 'http://m.v.qq.com/gift/bigbang/index.html'), !~location.href.indexOf('mobile=1') && !/(android)|(iphone)|(ipod)|(iPad.*MicroMessenger)|(IEMobile)|(MIDP)/i.test(navigator.userAgent)) {
    var s = 'http://v.qq.com',
    l = [
    ];
    '2016_cover' != window.PAGE_TYPE && 'vip_cover' != window.PAGE_TYPE || (!r && + window.EXSOURCE ? window.PAGE_TYPE = '2016_column' : (s += '/cover/' + o[0] + '/' + o + '.html', r && l.push('vid=' + r))),
    '2016_video' == window.PAGE_TYPE && (s += '/page/' + r[0] + '/' + r[9] + '/' + r[10] + '/' + r + '.html'),
    '2016_column' == window.PAGE_TYPE && (s += '/detail/' + (a || o) [0] + '/' + (a || o) + '.html', r && l.push('exsource=' + window.EXSOURCE));
    var c = location.href.match(/ptag=([\w\d]*)/);
    c && l.push('ptag=' + c[1]),
    s += '?' + l.join('&'),
    location.href = s
  }
  }
  },
  function (e, t, n) {
  function i() {
  var e = Promise.defer(),
  t = '//mcgi.v.qq.com/commdatav2?cmd=36&platform=5&appver=3.4.0&_r=' + Math.random();
  return r.ajax({
    url: t,
    dataType: 'jsonp',
    success: function (t) {
      if (0 === t.ret && t.adver_list && t.adver_list[0] && t.adver_list[0].gController && t.adver_list[0].gController.adOn) {
        var n = t.adver_list[0].gDL;
        if (n && 1 == n.type && n.regexList instanceof Array) {
          var i = o.get('vid') || '';
          n.regexList.indexOf(i) > - 1 ? e.reject(0)  : e.resolve(1)
        } else e.resolve(1)
      } else e.reject(0)
    },
    error: function () {
      e.reject( - 1)
    }
  }),
  e.promise
  }
  var r = n(16).$,
  o = n(32);
  e.exports = function (e) {
  i().then(function () {
    e.removeClass('none');
    var t = document.createElement('script');
    t.type = 'text/javascript',
    t.onload = function () {
      crystal.request(),
      e.addClass('none'),
      setTimeout(function () {
        1 != r('#QQLive_MWeb_DT').attr('oid') && e.find('.mod_hd').removeClass('none')
      }, 5000)
    },
    t.onreadystatechange = function () {
      this.readyState
    },
    t.src = '//ra.gtimg.com/sc/mobile/crystal_mobile-min.js?v=201514&max_age=86400',
    document.body.appendChild(t)
  })
  }
  },
  function (e, t, n) {
  var i = (n(98), n(68)),
  r = n(128),
  o = n(32),
  a = n(38),
  s = n(7),
  l = n(86),
  c = n(34),
  d = n(6) (),
  u = !1,
  p = !1;
  e.exports = function (e, t) {
  function n(e) {
    e ? (s.button('vplusfocus.check'), r.get(h).then(function (e) {
      var t = !1;
      'o' == e.s && (t = 0 != e.follow),
      m.status = t
    }, function () {
      m.status = !1
    }), o.get('isrss') && (o.del('isrss'), s.button('vplusfocus.set'), r.add(h).then(function (e) {
      var t = !1;
      'o' == e.s && (t = !0, p = !0, m.status = t)
    })))  : m.status = !1;
    var t = location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isrss=1';
    f.unbind('click').bind('click', function (n) {
      n.preventDefault(),
      n.stopPropagation(),
      p = !0,
      e ? m.status ? (s.button('vplusfocus.del'), r.del(h).then(function (e) {
        var t = !1;
        'o' == e.s && (t = !1),
        m.status = t
      }, function (e) {
        e.ret == - 11 && i.openLogin({
          url: t
        })
      }))  : (s.button('vplusfocus.set'), r.add(h).then(function (e) {
        var n = !1;
        'o' == e.s ? (n = !0, m.status = n, p = !0)  : 100001 == e.code && i.openLogin({
          url: t
        })
      }))  : i.openLogin({
        url: t
      })
    })
  }
  var f = e.find('._rssBtn'),
  v = e.find('._rssText'),
  h = t.data && t.data.rssItem.strEncodeRssId,
  m = Object.create({
  }, {
    status: {
      get: function () {
        return u
      },
      set: function (e) {
        u = e,
        e ? (v.text('已订阅'), p && l('订阅成功，有更新会通知你'))  : v.text('订阅')
      }
    }
  }),
  g = '808',
  _ = e.find('._vplus_name').text(),
  w = '' + h + '&rssName=' + _,
  y = a({
  }).model({
    confid: g
  }).openFixer(function () {
    return w
  }).downloadFixer(function (e) {
    return 'xiaomiqj' === c && d.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
  });
  e.bind('click', function () {
    y.action()
  }),
  h && i.init(function () {
    n(!!i.loginType())
  })
  }
  },
  function (e, t, n) {
  function i(e) {
  for (var t = 0, n = e.length, i = 5381; t < n; ++t) i += (i << 5) + e.charAt(t).charCodeAt();
  return 2147483647 & i
  }
  var r = n(68),
  o = n(98),
  a = n(6) (),
  s = 4;
  a.os && (a.os.ios || a.os.iphone ? s = 5 : a.os.android ? s = 3 : a.os.ipad && (s = 2)),
  e.exports = {
  get: function (e) {
    return new Promise(function (t, n) {
      var a = r.getMainCookie(),
      s = '',
      l = '',
      c = '',
      d = r.isStrictLogin() ? 1 : 0;
      'qq' === r.loginType() ? (s = i(a.skey || a.lskey || a.vqq_vusession || ''), l = i(a.vqq_vusession || ''), c = i(a.vqq_accesstoken || ''))  : (s = i(a.vusession || ''), l = i(a.vusession || ''), c = i(a.accesstoken || '')),
      o.getRssVplus({
        fuin: e,
        low_login: d,
        g_tk: s,
        g_vstk: l,
        g_actk: c
      }).then(t, n)
    })
  },
  add: function (e) {
    return new Promise(function (t, n) {
      var a = r.getMainCookie(),
      s = '',
      l = '',
      c = '',
      d = r.isStrictLogin() ? 1 : 0;
      'qq' === r.loginType() ? (s = i(a.skey || a.lskey || a.vqq_vusession || ''), l = i(a.vqq_vusession || ''), c = i(a.vqq_accesstoken || ''))  : (s = i(a.vusession || ''), l = i(a.vusession || ''), c = i(a.accesstoken || '')),
      o.addRssVplus({
        fuin: e,
        low_login: d,
        g_tk: s,
        g_vstk: l,
        g_actk: c
      }).then(t, n)
    })
  },
  del: function (e) {
    return new Promise(function (t, n) {
      var a = r.getMainCookie(),
      s = '',
      l = '',
      c = '',
      d = r.isStrictLogin() ? 1 : 0;
      'qq' === r.loginType() ? (s = i(a.skey || a.lskey || a.vqq_vusession || ''), l = i(a.vqq_vusession || ''), c = i(a.vqq_accesstoken || ''))  : (s = i(a.vusession || ''), l = i(a.vusession || ''), c = i(a.accesstoken || '')),
      o.delRssVplus({
        fuin: e,
        low_login: d,
        g_tk: s,
        g_vstk: l,
        g_actk: c
      }).then(t, n)
    })
  }
  }
  },
  function (e, t, n) {
  'use strict';
  e.exports = function (e) {
  function t() {
    for (var t = r(n + 1), o = r(n); o < t; o++) i.eq(o).show();
    o >= i.length - 1 && e.find('._more').hide(),
    n++
  }
  var n = 0,
  i = e.find('._list li');
  e.find('._more').on('click', t),
  t()
  };
  var i = n(108),
  r = i(3)
  },
  function (e, t, n) {
  'use strict';
  var i = (n(131), n(132)),
  r = n(133),
  o = n(98),
  a = (n(134), n(11), n(120)),
  s = n(38),
  l = n(89),
  c = (n(90), n(70)),
  d = n(75);
  e.exports = function (e, t, n, u) {
  function p(e, t) {
    for (var n = t && t < h.length ? t : h.length, r = e; r < n; r++) h[r].index = r + 1,
    m.append(i(h[r]));
    a.refresh(m),
    e && (g.hide(), v())
  }
  function f() {
    e.on('click', function (e) {
      var t = $(e.target),
      n = t.parents('.list_item').length ? t.parents('.list_item')  : t,
      i = n.attr('data-cid') || '';
      (t.parents('.list_item').length || t.hasClass('list_item')) && c({
        vid: '',
        cid: i,
        lid: '',
        appConfid: d.GUESS_LIKE_ITEM_CONFID,
        liteConfid: d.TOP_NAV_CONFID_LITE,
        appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
      })
    })
  }
  function v() {
    var i,
    o,
    a = function () {
      switch (window.URL_TYPE) {
        case 'column':
          return {
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'cover':
          return {
            video_id: n.vid,
            cover_id: t.cover_id,
            column_id: u.column_id,
            exsource: window.EXSOURCE,
            duration: n.duration
          };
        case 'video':
          return {
            video_id: n.vid,
            exsource: window.EXSOURCE,
            duration: n.duration
          }
      }
    }(),
    c = {
      0: '安装腾讯视频，观看更多精彩推荐',
      1: '更多精彩推荐',
      2: '安装腾讯视频，观看更多精彩推荐'
    },
    p = $(r());
    location.href.indexOf('lite=true') > - 1 ? (i = l(), o = l.getConfid())  : (i = s(), o = 20111),
    i.model(a).model({
      confid: d.GUESS_LIKE_CONFID
    }).on('render', function (t, n) {
      p.appendTo(e).find('.icon_text').text(c[t])
    }).on('action', function (e, t) {
    }),
    p.on('click', function () {
      i.action()
    }).attr({
      _report: !0,
      _eid: 'videorecpull',
      _kv: JSON.stringify({
        app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
      })
    })
  }
  var h = null,
  m = e.find('._list'),
  g = e.find('._more');
  g.on('click', function () {
    p(6)
  }),
  o.recommend2016({
    cid: t.cover_id
  }).then(function (t) {
    if (e.removeClass('none'), t.data) {
      h = t.data.recItemList.map(function (e) {
        return e.seqNum = t.data.seqNum,
        e.coverType = window.COVER_TYPE,
        e
      }).slice(0, 12);
      var n = h.length;
      h = n % 2 ? h.slice(0, n - 1)  : h.slice(0),
      h.length > 6 && g.removeClass('more_none'),
      p(0, 6),
      f(),
      a.init()
    }
  })
  };
  var u = n(108);
  u(3)
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommendation/body', '<section class="mod_box mod_box_lastview" id="2016_recommendation"> <div class="mod_hd"> <h2 class="mod_title U_color_a">为你推荐</h2> </div> <div class="mod_bd"> <div class="mod_figures mod_figures_like" _hot="recommends"> <ul class="figures_list _list"> </ul> </div> <div class="mod_more more_none _more" _hot="recommendsbtn"> <svg class="svg_icon_switch U_svg_c" viewBox="0 0 44 44"> <use class="svg_use" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sym_icon_switch"></use> </svg> </div> </div> </section>')
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommendation/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = n.$escape,
  o = e.unionInfo,
  a = e.index,
  s = e.seqNum,
  l = e.itemType,
  c = e.recReportInfo,
  d = (e.cid, '');
  var videoUrl = r(i.playUrl('javascript:', {
    cid: o.cover_id
  }));
  return d += '<li class="list_item" data-cid="',
  d += r(o.cover_id),
  d += '" _report _eid="videorec" _kv=\'{"rankid":',
  d += r(a),
  d += '}\' _recommend="pageType=mplay&module=coverRecommend&seqnum=',
  d += r(s),
  d += '&rtype=',
  d += r(l),
  d += '&algId=',
  d += r(c.algId),
  d += '&bucketId=',
  d += r(c.bucketId),
  d += '&reason=',
  d += r(c.reason),
  d += '&reasonType=',
  d += r(c.reasonType),
  d += '&cid=',
  d += r(o.cover_id),
  d += '"> <!-- <a href="',
  d += videoUrl,
  d += '" class="figure"> --> <a href="' + videoUrl + '" class="figure"> <img src="',
  d += r(o.horizontal_pic_url),
  d += '" onerror="picerr(this, \'h\')"/> <div class="figure_duration"> <!-- ',
  10 == o.type ? (d += ' ', d += r(o.publish_date), d += ' ')  : (d += ' ', d += r(o.score && ( + o.score.score).toFixed(1)), d += ' '),
  d += ' --> ',
  d += r(o.episode_updated || ''),
  d += ' </div> </a> <div class="figure_info_center"> <!-- <strong class="figure_title ',
  d += r(o.second_title ? '' : 'figure_title_two'),
  d += '"><a href="',
  d += videoUrl,
  d += '">',
  d += r(o.title),
  d += '</a></strong> --> <strong class="figure_title ',
  d += r(o.second_title ? '' : 'figure_title_two'),
  d += '"><a href="' + videoUrl + '">',
  d += r(o.title),
  d += '</a></strong> <div class="figure_count U_color_b"> ',
  d += r(o.second_title || ''),
  d += ' </div> </div> </li>',
  new String(d)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/recommendation/bannerTpl', ' <div class="mod_more_btn"> 打开腾讯视频，看更多精彩内容 </div>')
  },
  function (e, t, n) {
  var i = n(4),
  r = n(9),
  o = 'http://btrace.qq.com/kvcollect?BossId=2745&Pwd=0&iplat=3&page=0&device_id=&host=' + location.host + '&url=' + location.href + '&int1=&int2=&int3=&str1=&str2=&str3=&str4=&_dc=' + Math.random(),
  a = function (e, t, n, r, a, s) {
  var l = o + '&oper=' + e + '&ptype=' + t + '&tab=' + n + '&rtype=' + r + '&rlist=' + a + '&vid=' + s + '&uin=';
  i(l)
  };
  a.lazy = function (e, t, n, i, a, s) {
  var l = o + '&oper=' + e + '&ptype=' + t + '&tab=' + n + '&rtype=' + i + '&rlist=' + a + '&vid=' + s + '&uin=';
  r.push(l)
  },
  e.exports = a
  },
  function (e, t, n) {
  function i(e) {
  for (var t = 0, n = e.length, i = 5381; t < n; ++t) i += (i << 5) + e.charAt(t).charCodeAt();
  return 2147483647 & i
  }
  function r(e, t) {
  var n = t.cacheVideo,
  i = t.cacheCover,
  r = t.exsource,
  o = t.cover_id || t.cacheCover.cover_id,
  a = i.type || n.type,
  s = t.video_id || t.cacheVideo.vid;
  if (r) return e;
  if (e.indexOf('video_id') == - 1 && (e += '&video_id=' + s), e += '&dl_flag=1', e += '&dl_typeid=' + a, !o) return e += '&dl_title=' + encodeURIComponent(n.title || '腾讯视频'),
  e += '&dl_imgurl=' + encodeURIComponent(n.pic496x280 || n.pic160x90);
  if (e += '&dl_title=' + encodeURIComponent(i.title || '腾讯视频'), n && (e += '&dl_subtitle=' + encodeURIComponent(n.title)), [
    2,
    3
  ].indexOf(a) != - 1 && 'number' == typeof n.index && (e += '&dl_subindex=' + n.index), e += '&dl_imgurl=' + encodeURIComponent(n.pic496x280 || n.pic160x90), e += p.os.iphone ? i.downright && 0 == i.downright.iphone ? '&downright=0' : '&downright=1' : i.downright && 0 == i.downright.android ? '&downright=0' : '&downright=1', [
    10
  ].indexOf(a) != - 1 && t.column_id) e += '&column_id=' + t.column_id;
   else if ([1].indexOf(a) != - 1) {
    var l = i.video_ids.length > 1 ? 1 : 0;
    e += '&relate_movie=' + l
  }
  return e
  }
  var o = n(38),
  a = n(89),
  s = n(90),
  l = n(94),
  c = n(86),
  d = (n(98), n(40)),
  u = n(8),
  p = n(6) (),
  f = n(136),
  v = n(68),
  h = n(34),
  m = n(70),
  g = n(75);
  e.exports = function (e, t, n, _) {
  var w = e.find('._more'),
  y = w.find('.icon_text'),
  b = e.find('._desc');
  if (w.bind('click', function () {
    w.toggleClass('open'),
    w.hasClass('open') ? (y.text('收起'), b.removeClass('none'))  : (y.text('查看简介'), b.addClass('none'))
  }), 'vip_cover' == window.PAGE_TYPE) {
    var x = e.find('._view_count');
    setTimeout(function () {
      u('//vm.gtimg.cn/tencentwap/js/odometer.min.js', function () {
        var e = t.view_all_count,
        n = new window.Odometer({
          el: x[0],
          value: e,
          format: '(,ddd)',
          theme: 'minimal'
        });
        setInterval(function () {
          n.update(e += Math.floor(3 * Math.random()))
        }, 2000)
      })
    }, 3000)
  }
  var k = e.find('._btn_cache').css('display', 'vip_cover' == window.PAGE_TYPE ? 'block !important' : 'inline-block !important'),
  T = t.downright || n.downright || [
  ];
  T.length && (p.os.android ? T.indexOf('3') == - 1 && k.addClass('disabled')  : p.os.iphone && T.indexOf('5') == - 1 && k.addClass('disabled'));
  var E,
  S,
  C = function () {
    switch (window.URL_TYPE) {
      case 'column':
        return {
          column_id: _.column_id,
          exsource: window.EXSOURCE,
          duration: n.duration
        };
      case 'cover':
        return {
          video_id: n.vid,
          cover_id: t.cover_id,
          column_id: _.column_id,
          exsource: window.EXSOURCE,
          duration: n.duration
        };
      case 'video':
        return {
          video_id: n.vid,
          exsource: window.EXSOURCE,
          duration: n.duration
        }
    }
  }();
  location.href.indexOf('lite=true') > - 1 ? (E = a(), S = a.getConfid())  : (E = o().openFixer(r).downloadFixer(function (e) {
    return 'xiaomiqj' === h && p.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
  }), S = s() || 514),
  E.model(d({
    confid: S,
    cacheVideo: n,
    cacheCover: t
  }, C)).on('action', function (e) {
    c(1 == e || 14 == e ? '立即到APP缓存视频' : '安装腾讯视频<br>即可开始缓存')
  }).on('action', function (e) {
    l.banner({
      cid: t.cover_id,
      vid: n.vid,
      channelID: S,
      bannerPos: 'cache',
      reportType: 2 == e || 0 == e ? 'download' : 'open',
      sOp: 'click',
      isInstallOpen: + (2 != e)
    })
  }).on('ready', function (e) {
    l.banner({
      cid: t.cover_id,
      vid: n.vid,
      channelID: S,
      bannerPos: 'cache',
      reportType: 2 == e || 0 == e ? 'download_show' : 'open_show',
      sOp: 'show',
      isInstallOpen: + (2 != e)
    })
  }),
  k.on('click', function () {
    k.hasClass('disabled') ? c('由于版权限制，该影片无法缓存')  : E.action()
  }),
  $('.btn_sharpness').on('click', function () {
    m({
      vid: n.vid,
      cid: t.cover_id,
      lid: _.column_id,
      appConfid: g.SHARPNESS_CONFID,
      liteConfid: g.TOP_NAV_CONFID_LITE,
      appType: location.href.indexOf('lite=true') > - 1 ? 2 : 1
    })
  }).attr({
    _report: !0,
    _eid: 'definition',
    _kv: JSON.stringify({
      app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
    })
  });
  var O,
  I,
  q = e.find('._btn_follow'),
  P = Object.create({
  }, {
    state: {
      get: function () {
        return O
      },
      set: function (e) {
        O = e,
        e ? q.find('svg').attr('data-status', 'true')  : q.find('svg').attr('data-status', 'false')
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
  ].indexOf( + t.type) != - 1 && t.cover_id ? t.cover_id : n.vid || t.cover_id || _.column_id,
  v.init(function () {
    if (v.isLogin()) {
      var e = '',
      r = v.getMainCookie();
      e = i('qq' === v.loginType() ? r.skey || r.lskey || r.vqq_vusession : r.vusession),
      f.check({
        id: I,
        type: I === n.vid ? 1 : I === t.cover_id ? 2 : 3,
        g_tk: e
      }, function (e, t) {
        P.state = !!t.checkresult
      }),
      q.on('click', function () {
        P.state ? f.remove({
          id: I,
          type: I === n.vid ? 1 : I === t.cover_id ? 2 : 3,
          g_tk: e
        }, function (e, t) {
          e || 0 != t.suc ? t && t.ret == - 11 && v.openLogin({
            url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
          })  : P.state = !1
        })  : f.add({
          id: I,
          type: I === n.vid ? 1 : I === t.cover_id ? 2 : 3,
          g_tk: e
        }, function (e, t) {
          e || 0 != t.suc ? t && t.ret == - 11 && v.openLogin({
            url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
          })  : (P.state = !0, c(p.browser.WeChat ? '已加入看单，可在<br/>腾讯视频App内<br/>微信登录后找到' : '已加入看单<br/>请在腾讯视频App<br/>个人中心查看'))
        })
      })
    } else q.on('click', function () {
      v.openLogin({
        url: location.href + (location.href.indexOf('?') == - 1 ? '?' : '') + '&isAttention=1'
      })
    })
  })
  }
  },
  function (e, t) {
  'use strict';
  function n(e, t) {
  return o(a, {
    otype: 'json',
    sn: 'FollowServer',
    cmd: 2565,
    id: e.id,
    attent_type: e.type,
    g_tk: e.g_tk
  }, function (e, n) {
    t && t(n && n.follow && n.follow.length && n.follow[0].isfollow, n)
  })
  }
  function i(e, t) {
  return o(a, {
    otype: 'json',
    sn: 'FollowWrite',
    cmd: 2818,
    id: e.id,
    attent_type: e.type,
    g_tk: e.g_tk
  }, function (e, n) {
    t && t(!(n && 0 === n.suc), n)
  })
  }
  function r(e, t) {
  return o(a, {
    otype: 'json',
    sn: 'FollowWrite',
    cmd: 2817,
    id: e.id,
    attent_type: e.type,
    g_tk: e.g_tk
  }, function (e, n) {
    t && t(!(n && 0 === n.suc), n)
  })
  }
  var o = function (e, t, n) {
  $.ajax({
    url: e,
    dataType: 'jsonp',
    data: t,
    success: function (e) {
      n(null, e)
    },
    error: function (e) {
      n(e)
    }
  })
  },
  a = '//like.video.qq.com/fcgi-bin/flw_new';
  e.exports = {
  add: r,
  check: n,
  remove: i
  }
  },
  function (e, t, n) {
  var i = n(98),
  r = n(94),
  o = n(40),
  a = n(38),
  s = n(89),
  l = n(90),
  c = n(34),
  d = n(6) (),
  u = n(138),
  p = n(139),
  f = n(71);
  e.exports = function (e, t, n, v) {
  function h(e) {
    return wording = {
      0: '安装腾讯视频，参与' + (e || 0) + '条热评大讨论',
      1: '打开腾讯视频，参与' + (e || 0) + '条热评大讨论',
      2: '安装腾讯视频，参与' + (e || 0) + '条热评大讨论'
    },
    o({
    }, a.TXVWORDING.text, wording)
  }
  var m,
  g = t.type || n.type;
  return (m = n.targetid && 1 != g && 10 != g ? n.targetid : t.targetid ? t.targetid : v.targetid) ? void i.commentinfo({
    commentid: m
  }).then(function (i) {
    function o(e) {
      e.userinfo && e.userinfo.head && (e.userinfo.head = p(e.userinfo.head)),
      e.picture && e.picture.map(function (e) {
        e.url = p(e.url)
      }),
      $ul.append(u(e))
    }
    if (!i.data) return e.addClass('none'),
    '';
    if (i.data.hotcommentid && 0 == i.data.hotcommentid.length && i.data.commentid && 0 == i.data.commentid.length) return e.addClass('none'),
    '';
    e.find('._num').text(i.data.total),
    $ul = e.find('._list');
    var m = 3;
    if (i.data.hotcommentid.every(function (e) {
      return e.isHot = !0,
      o(e),
      m-- > 0
    }), m-- > 0 && i.data.commentid.every(function (e) {
      return o(e),
      m-- > 0
    }), location.href.indexOf('qqlivekid=true') !== - 1) return void e.find('._banner').css('display', 'none');
    var g,
    _,
    w = e.find('._banner').css('display', 'block !important').attr({
      _report: !0,
      _eid: 'commentpull',
      _kv: JSON.stringify({
        app_id: location.href.indexOf('lite=true') > - 1 ? 2 : 1
      })
    }),
    y = f.getAidParam('1', f.getAid());
    location.href.indexOf('lite=true') > - 1 ? (g = s(), _ = s.getConfid())  : (g = a().downloadFixer(function (e) {
      return 'xiaomiqj' === c && d.browser.MiuiBrowser ? 'market://details?id=com.tencent.qqlive&startDownload=true&ref=app_free_migs&back=true' : e
    }).openFixer(function (e, t) {
      return e + '&from=' + (y || c)
    }), _ = l() || 513),
    g.model('column' == PAGE_TYPE ? {
      column_id: v.column_id,
      exsource: window.EXSOURCE,
      confid: _,
      from: y || c
    }
     : {
      video_id: n.vid,
      cover_id: t.cover_id,
      column_id: v.column_id,
      exsource: window.EXSOURCE,
      confid: _,
      from: y || c
    }).on('action', function (e) {
      r.banner({
        cid: t.cover_id,
        vid: n.vid,
        channelID: _,
        bannerPos: 'comment',
        reportType: 2 == e || 0 == e ? 'download' : 'open',
        sOp: 'click',
        isInstallOpen: + (2 != e)
      })
    }),
    'vip_cover' == window.PAGE_TYPE ? e.on('click', function () {
      g.action()
    })  : (g.on('render', function (e, t) {
      w.html('<div class="tvp_app_btn" data-status="' + a.TXVWORDING.status[e] + '"><div class="tvp_progress"><div class="tvp_progress_current" style="width: ' + t.progress + '%;animation:none;-webkit-animation:none"></div></div><div class="tvp_btn_text" data-text="' + h(i.data.total) [e] + '"><div class="tvp_app_logo"></div></div></div>')
    }), w.on('click', function () {
      g.action()
    })),
    $(window).bind('scroll', function b() {
      var e = $(this).scrollTop(),
      i = w.offset().top;
      i <= $(window).height() + e && (g.on('ready', function (e) {
        r.banner({
          cid: t.cover_id,
          vid: n.vid,
          channelID: _,
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
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/comment/item', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.userinfo,
  o = e.content,
  a = e.picture,
  s = n.$each,
  l = (e.v, e.i, e.videoinfo),
  c = '';
  return c += '<li class="comment_item"> <dl class="comment_hd cf"> <dt> <img class="comment_avatar" onerror="picerr(this, \'s\')" src="',
  c += i(r ? r.head : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII='),
  c += '" alt="',
  c += i(r ? r.nick : ''),
  c += '"> </dt> <dd> <div class="comment_name U_color_b">',
  c += i(r && r.nick ? r.nick : '腾讯网友'),
  c += ' ',
  r.hwlevel && (c += ' <i class="icon_vip icon_vipyear icon_vip_lv', c += i(r.hwlevel), c += '"><i class="icon_vip_num"></i></i> '),
  c += ' </div> </dd> </dl> <div class="comment_bd"> <div class="comment_txt U_color_c">',
  c += i(o),
  c += '</div> ',
  a && (c += ' <div class="comment_pic"> <ul class="pic_list"> ', s(a, function (e, t) {
    c += ' ',
    t < 3 && (c += ' <li class="pic_item"> <a class="item_pic" href="javascript:;"> <span class="pic" style="background-image: url(', c += i(e.url + '/150'), c += ');"></span> </a> </li> '),
    c += ' '
  }), c += ' </ul> </div> '),
  c += ' ',
  a || o || !l || (c += ' ', c += ' <div class="comment_txt U_color_c">', c += i(l.desc), c += '</div> <div class="comment_pic"> <ul class="pic_list"> <li class="pic_item"> <a class="item_pic" href="javascript:;"> <span class="pic" style="background-image: url(', c += i(l.pic + '/150'), c += ');"></span> </a> </li> </ul> </div> '),
  c += ' </div> </li>',
  new String(c)
  })
  },
  function (e, t) {
  'use strict';
  function n(e) {
  var t = e.match(/^(http:|https:)?\/\/([\w\.]+)/),
  n = t && t.length > 2 ? t[2] : '',
  i = !0;
  return r.forEach(function (e) {
    e.test(n) && (i = !1)
  }),
  i
  }
  function i(e, t, n) {
  return /^(http:|https:)/.test(e) ? ('undefined' == typeof t && (t = !0), 2 == arguments.length && 'string' == typeof t && t.length > 0 && (n = t, t = !1), t ? e.replace(/^(http:|https:)/, '')  : (n || (n = location.protocol), /:$/.test(n) || (n += ':'), e.replace(/^\w+:/, n)))  : e
  }
  var r = [
  /qq\.com$/,
  /qlogo\.cn$/,
  /gtimg\.com$/,
  /gtimg\.cn$/,
  /qpic\.cn$/,
  /gtimg\.cn$/,
  /sinaimg.cn$/
  ];
  e.exports = function (e, t, r) {
  return !/^http:/.test(e) && t !== !1 || n(e) ? e : i(e, t, r)
  }
  },
  function (e, t, n) {
  'use strict';
  var i = Txplayer.$,
  r = n(141),
  o = n(142),
  a = n(98),
  s = n(73);
  e.exports = function (e, t, n, l, c) {
  function d(e, i) {
    var r = Math.max(0, e - 30),
    l = t.video_ids.slice(r, e);
    return a.unionvideos({
      idlist: l
    }).then(function (e) {
      e && e.results && e.results.reverse().forEach(function (e) {
        e = e.fields,
        e.cover_id = t.cover_id,
        e.playingVid = n.vid,
        e.drm = p ? 0 : n.drm,
        e.uvip = s.getUrlParam('uvip') || '',
        e.qqaid = s.getUrlParam('qqaid') || '',
        e.tag_text = t.tag_text,
        f.prepend(o(e))
      }),
      i && i()
    }, function () {
      i && i()
    }),
    r
  }
  function u(e, i) {
    var r = Math.min(t.video_ids.length, e + 30),
    l = t.video_ids.slice(e, r);
    return a.unionvideos({
      idlist: l
    }).then(function (e) {
      e && e.results && e.results.forEach(function (e) {
        e = e.fields,
        e.cover_id = t.cover_id,
        e.playingVid = n.vid,
        e.drm = p ? 0 : n.drm,
        e.uvip = s.getUrlParam('uvip') || '',
        e.qqaid = s.getUrlParam('qqaid') || '',
        e.tag_text = t.tag_text,
        f.append(o(e))
      }),
      i && i()
    }, function () {
      i && i()
    }),
    r
  }
  var p = '0o3n651vzynmbek' == t.cover_id;
  if ((10 != t.type || t.publish_date && '0' != t.publish_date[0]) && !window.EXSOURCE && l.list && !(l.list.length < 2) && (2 != t.type && 3 != t.type || !l.list.every(function (e) {
    return e.c_title_output != e.title
  }))) {
    var f,
    v;
    e.hasClass('none') ? (e.html(r({
      type: t.type
    })).removeClass('none'), f = e.find('._list'), l.list.forEach(function (e, r) {
      e.cover_id = t.cover_id,
      e.playingVid = n.vid,
      p && (e.drm = 0),
      e.uvip = s.getUrlParam('uvip') || '',
      e.qqaid = s.getUrlParam('qqaid') || '',
      e.tag_text = t.tag_text,
      v = i(o(e)),
      f.append(v)
    }))  : f = e.find('._list'),
    v = f.find('li.current'),
    f.parent() [0] && v[0] && (f.parent() [0].scrollLeft = v[0].offsetLeft - v.width() / 2);
    var h = l.list[0].index - 1,
    m = l.list[l.list.length - 1].index + 1,
    g = f.parent(),
    _ = g.width(),
    w = !1;
    g.on('scroll', function () {
      if (!w) {
        var e = f.width();
        if (h >= 0 && g[0].scrollLeft <= Math.min(e / 4, 200)) {
          var n = f.find('li').eq(0);
          h = d(h, function () {
            w = !1,
            g[0].scrollLeft = n[0].offsetLeft
          }),
          w = !0
        } else m < t.video_ids.length && g[0].scrollLeft >= Math.max(3 * e / 4, e - _ - 200) && (m = u(m, function () {
          w = !1
        }), w = !0)
      }
    })
  }
  }
  },
  function (e, t, n) {
  var i = n(18);
  n(142),
  e.exports = i('_component/2016/list/body', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, e.type),
  r = n.$escape,
  o = e.publish_date,
  a = e.subtitle,
  s = e.list,
  l = n.$each,
  c = (e.$value, e.$index, function (i, r) {
    r = r || e;
    var o = n.$include(i, r, t);
    return d += o
  }),
  d = '';
  return d += '<section class="mod_box mod_sideslip_link U_box_bg_a" id="2016_list"> <div class="mod_hd mod_hd_new"> <h2 class="mod_title U_color_a">',
  [
    2,
    3
  ].indexOf(i) != - 1 ? d += '剧集' : 10 == i ? (d += r(o ? o.split(' ') [0] + '期' : ''), d += '看点')  : d += '专辑列表',
  d += '</h2> <div class="mod_subtitle U_color_c">',
  d += r(a),
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
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/list/item', function (e, t) {
  'use strict';
  var n = this,
  i = n.$helpers,
  r = e.__current,
  o = e.vid,
  a = e.playingVid,
  s = n.$escape,
  l = e.index,
  c = (e.cid, e.cover_id),
  d = e.uvip,
  u = e.qqaid,
  p = e.title,
  f = e.drm,
  v = e.pay_status,
  h = e.is_trailer,
  m = e.update_flag,
  g = '';
  return g += '<li class="item',
  (r || o == a) && (g += ' current'),
  g += '" _report _eid="aspect" _kv=\'{"rankid":',
  g += s(l),
  g += '}\'> <a class="U_color_b" href="',
  g += s(i.playUrl('javascript:', {
    cid: c,
    vid: o,
    uvip: d,
    qqaid: u
  })),
  g += '" title="',
  g += s(p),
  g += '"> <span class="text">',
  g += s(p),
  g += '</span> ',
  + f && v ? (g += ' <i class="mark_text_vip"> ', 4 == v ? g += '用券 ' : 5 == v ? g += 'VIP ' : 6 == v ? g += 'VIP ' : 7 == v ? g += '付费 ' : 9 == v ? g += '付费 ' : 10 == v ? g += 'VIP+ ' : 11 == v ? g += 'VIP尝鲜 ' : 12 == v && (g += 'VIP付费 '), g += ' </i> ')  : (g += ' ', h ? g += '<i class="mark_text_trailer">预</i> ' : '306061' == m && (g += '<i class="mark_text_new">新</i> '), g += ' '),
  g += ' </a> </li>',
  new String(g)
  })
  },
  function (e, t, n) {
  var i = n(144),
  r = n(92);
  e.exports = function (e, t, n, o) {
  var a = o.data && o.data.shareItem;
  if (a) {
    var s = a.shareUrl,
    l = a.shareImgUrl;
    location.href.indexOf('qqlivekid=true') !== - 1 && (s += '&qqlivekid=true', s.indexOf('?&') != - 1 && (s = s.replace(/\?\&/, '?'))),
    location.href.indexOf('lite=true') !== - 1 && (s += '&lite=true', s.indexOf('?&') != - 1 && (s = s.replace(/\?\&/, '?'))),
    l.indexOf('_496_280') && (l = l.replace('_496_280', '_228_128')),
    l += '.jpg',
    r('#share_qq_img').length > 0 && r('#share_qq_img').html('<img src=' + l + ' width=0 height=0>'),
    l && s && i.init({
      shareUrl: s,
      shareImg: l,
      timeLineTitle: a.shareSingleTitle,
      friendTitle: a.shareTitle,
      friendSubTitle: a.shareSubtitle,
      shareContent: a.shareContent,
      shareContentTail: a.shareContentTail
    }),
    document.title = a.shareTitle || document.title || '腾讯视频'
  }
  }
  },
  function (e, t, n) {
  var i = n(92),
  r = n(43),
  o = n(6) (),
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
      o.browser.WeChat ? s.shareToWx()  : o.browser.MQQClient && s.shareToQQ()
    }
    for (var n in e) e.hasOwnProperty(n) && e[n] && (a[n] = e[n]);
    r(t)
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
      n = '',
      r = '';
      i.os.ios && (t += a.shareUrl),
      'friend' == e.shareTo || 'QQ' == e.shareTo ? (n = a.friendTitle, r = a.friendSubTitle)  : n = a.timeLineTitle,
      e.generalShare({
        type: 'video',
        content: t,
        title: n,
        desc: r,
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
      n = {
        appid: 'wxca942bbff22e0e51',
        img_url: a.shareImg,
        img_width: '120',
        img_height: '90',
        link: a.shareUrl,
        desc: '',
        title: t
      };
      WeixinJSBridge.invoke('shareTimeline', n, function (e) {
        WeixinJSBridge.log(e.err_msg)
      })
    }),
    WeixinJSBridge.on('menu:share:appmessage', function (e) {
      var t = a.friendTitle,
      n = a.friendSubTitle;
      WeixinJSBridge.invoke('sendAppMessage', {
        appid: 'wxca942bbff22e0e51',
        img_url: a.shareImg,
        img_width: '120',
        img_height: '90',
        link: a.shareUrl,
        desc: n,
        title: t
      }, function (e) {
        WeixinJSBridge.log(e.err_msg)
      })
    }),
    WeixinJSBridge.on('menu:share:weibo', function () {
      var e = a.shareContent + a.shareContentTail;
      i.os.ios && (e += a.shareUrl),
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
      var n = i('head');
      i('<meta itemprop="name" content="' + e + '"/>').appendTo(n),
      i('<meta itemprop="description" content="' + t + '" />').appendTo(n),
      i('<meta itemprop="image" content="' + a.shareImg + '" />').appendTo(n)
    }
  }
  };
  e.exports = s
  },
  function (e, t, n) {
  var i,
  r = n(6) (),
  o = n(146),
  a = n(147),
  s = n(148),
  l = n(94);
  i = r.os.ios && r.browser.MQQClient ? {
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
    url: '//node.video.qq.com/x/api/mplay_game2',
    data: {
      vid: t.vid,
      pf: r.os.android ? 'android' : 'ios'
    },
    dataType: 'jsonp'
  }).done(function (n) {
    if (n && 3 == n.vgstat) {
      var c,
      d = n.data.game_info,
      u = r.os.android ? '8' : '9',
      p = d.gift_sign && d.gift_sign[u] && d.gift_sign[u].is_gift > 0,
      f = n.data.reportKV,
      v = '&reportParams=' + encodeURIComponent(f.extraReportKey + encodeURIComponent(f.extraReportValue)),
      h = 'https://iwan.qq.com/m/vadr/hotgame.htm?enter=1&business=game&ADTAG=txsp.z.cj&id=' + d.FId + v,
      m = d.game_blank_url,
      g = '';
      $.each(n.data.download_info, function (e, t) {
        g = t.apk_md5,
        c = t.download_url
      });
      var _ = {
        name: d.FGameName,
        icon: d.FPic1,
        pkg: d.FExt.FNewsOpenUrl.Android,
        md5: g,
        hasmd5: !0,
        via: 'ANDROIDQQ.IWAN',
        appid: d.GameDividedappidqq,
        pkgurl: d.FExt.FNewsOpenUrl.iOS + '://',
        scheme: d.FExt.FNewsOpenUrl.iOS + '://can_open_me_if_install_and_register_this_scheme',
        appappid: d.FExt.FNewsOpenUrl.iOS,
        wxappid: 'wx5a3178167066897b',
        downloadUrl: function () {
          return r.os.ios ? d.FStartGame : r.os.android ? c : void 0
        }()
      },
      w = s({
        'package': _
      });
      w.on('render', function (t, n) {
        e.html(o({
          gameName: d.FGameName,
          iconUrl: d.FPic1,
          gameInfo: d.FExt.FShortIntro,
          status: p && 1 == t ? 'open' : i.status[t],
          word: p && 1 == t ? '领礼包' : 10 == t ? n.progress + '%' : i.text[t],
          progress: n.progress,
          hasGift: p
        }))
      }).on('action', function (e) {
      }),
      l.gameShow({
        id: t.vid,
        client: 8 == u ? 2 : 1,
        type: p ? 'gift_detail' : 'game_detail',
        report_type: 1 == w.state ? 2 : 1,
        gameid: d.FId
      }),
      e.on('click', '.tvp_app_btn', function () {
        l.game({
          id: t.vid,
          client: 8 == u ? 2 : 1,
          type: p ? 'gift_detail' : 'game_detail',
          report_type: 1 == w.state ? 2 : 1,
          gameid: d.FId
        }),
        p && 1 == w.state ? location.href = m : w.action()
      }).on('click', '.tvp_app_wording,.tvp_app_logo', function () {
        l.game({
          id: t.vid,
          client: 8 == u ? 2 : 1,
          type: 'index_detail',
          report_type: 1 == w.state ? 2 : 1,
          gameid: d.FId
        }),
        location.href = h
      })
    } else if (6 == t.type) {
      var u = r.os.android ? '8' : '9';
      e.html(a({
      })),
      l.gameShow({
        id: t.vid,
        client: 8 == u ? 2 : 1,
        type: 'hosgames'
      }),
      e.on('click', function () {
        l.game({
          id: t.vid,
          client: 8 == u ? 2 : 1,
          type: 'hosgames'
        }),
        location.href = 'https://iwan.qq.com/m/vadr/hotgames.htm?ADTAG=txsp.z.cj'
      })
    }
  }).fail(function () {
  })
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/game_banner/banner', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.iconUrl,
  o = e.hasGift,
  a = e.gameName,
  s = e.gameInfo,
  l = e.status,
  c = e.progress,
  d = e.word,
  u = '';
  return u += '<div class="tvp_app_bar"> <div class="tvp_bar_inner"> <div class="tvp_app_pic"> <div class="tvp_app_logo" style="background-image:url(',
  u += i(r),
  u += ')"></div> <div class="tvp_app_mark">',
  u += i(o ? '礼包' : ''),
  u += '</div> </div> <div class="tvp_app_wording"> <div class="tvp_wording_title" data-text="',
  u += i(a),
  u += '"></div> <div class="tvp_wording_desc" data-text="',
  u += i(s),
  u += '"></div> </div> <div class="tvp_app_btn" data-status="',
  u += i(l),
  u += '"> <div class="tvp_progress"> <div class="tvp_progress_current" style="width: ',
  u += i(c),
  u += '%;animation:none;-webkit-animation:none"></div> </div> <div class="tvp_btn_text" data-text="',
  u += i(d),
  u += '"></div> </div> </div> </div>',
  new String(u)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/game_banner/entrance', '<div class="mod_entrance"> <div class="entrance_pic"><img src="https://puui.qpic.cn/vupload/0/20180109_1515665802143.png/0" alt="" class="pic"></div> <div class="entrance_wording"> <div class="entrance_title">腾讯视频游戏中心</div> <div class="entrance_desc">游戏推荐、礼包、赛事、视频</div> </div> <div class="entrance_arrow"></div> </div>')
  },
  function (e, t, n) {
  var i = n(149),
  r = n(6) ();
  e.exports = function (e) {
  function t(t, n) {
    var i = n.openurl,
    o = n.downloadurl;
    2 == t ? r.browser.WeChat ? a.wx(i, {
      onfail: function () {
        location.href = o
      }
    })  : a.tryopen(i, {
      onfail: function () {
        location.href = o
      }
    })  : 1 == t || 14 == t ? r.browser.WeChat ? a.wx(i, {
      debug: e.debug,
      onfail: function () {
        a.tryopen(i, {
          onfail: function () {
            location.href = o
          }
        })
      }
    })  : setTimeout(function () {
      location.href = i
    }, 50)  : 10 == t ? n.downloader.pause()  : 11 == t || 13 == t ? n.downloader.install()  : n.downloader && 15 != t ? n.downloader.start({
      url: o,
      confid: 66666
    })  : setTimeout(function () {
      location.href = o
    }, 50)
  }
  e = e || {
  };
  var o = i({
    'package': e['package'] || LIVE_PACKAGE
  }),
  a = {
    tryopen: n(60) (),
    wx: n(61) (e['package'])
  };
  return o.on('action', t),
  o
  }
  },
  function (e, t, n) {
  var i = n(39),
  r = n(41),
  o = {
  };
  window.appBanner = e.exports = function (e) {
  if (e = e || {
  }, !e['package']) throw new Error('需要为banner组件提供包信息');
  var t = e['package'];
  return i({
    'native': o[t.pkg] || (o[t.pkg] = r(t)),
    'package': t
  })
  }
  },
  function (e, t, n) {
  'use strict';
  e.exports = function (e) {
  var t = e.find('section');
  t.forEach(function (e) {
    function t() {
      i.each(function (e, t) {
        'none' === t.style.display && $(t).show()
      }),
      r.hide()
    }
    var n = $(e),
    i = n.find('._list li'),
    r = n.find('._more');
    i.length > 6 && r.removeClass('more_none'),
    r.on('click', t)
  })
  };
  var i = n(108);
  i(3)
  },
  function (e, t, n) {
  var i,
  r = n(152),
  o = n(153),
  a = n(154),
  s = n(94),
  l = n(6) ();
  i = l.os.ios && l.browser.MQQClient ? {
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
  }).done(function (n) {
    if (n && n.length) {
      e.html(o({
      }));
      var c = l.os.android ? '8' : '9';
      $('window').on('scroll', function () {
      }),
      $(window).bind('scroll', function u() {
        var n = $(this).scrollTop(),
        i = $(e).offset().top;
        i <= $(window).height() + n && (s.gameShow({
          id: t.vid,
          client: 8 == c ? 2 : 1,
          type: 'rcd_detail'
        }), $(window).unbind('scroll', u))
      });
      var d = [
      ];
      $.each(n, function (n, o) {
        var c,
        u = JSON.parse(o.info),
        p = u.game_info,
        f = l.os.android ? '8' : '9',
        v = 'https://iwan.qq.com/m/vadr/hotgame.htm?enter=1&business=game&ADTAG=txsp.z.cj&id=' + p.FId,
        h = '';
        $.each(u.download_info, function (e, t) {
          h = t.apk_md5,
          c = t.download_url
        });
        var m = {
          name: p.FGameName,
          icon: p.FPic1,
          pkg: p.FExt.FNewsOpenUrl.Android,
          md5: h,
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
        g = r({
          'package': m
        });
        d.push(g);
        var _ = $('<li class="app_item"  _report _eid="gamerec" _kv=' + JSON.stringify({
          rankid: n + 1
        }) + '></li>').appendTo(e.find('.mod_apps_recommend'));
        g.on('render', function (e, t) {
          _.html(a({
            gameName: p.FGameName,
            iconUrl: p.FPic1,
            status: i.status[e],
            word: i.text[e],
            open: 1 == e ? 'open' : ''
          }))
        }).on('action', function (e) {
        }),
        _.on('click', '.btn_app', function () {
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
          location.href = v
        })
      })
    }
  }).fail(function () {
  })
  }
  },
  function (e, t, n) {
  var i = n(149),
  r = n(6) ();
  e.exports = function (e) {
  function t(t, n) {
    var i = n.openurl,
    o = n.downloadurl;
    2 == t ? r.browser.WeChat ? a.wx(i, {
      onfail: function () {
        location.href = o
      }
    })  : a.tryopen(i, {
      onfail: function () {
        location.href = o
      }
    })  : 1 == t || 14 == t ? r.browser.WeChat ? a.wx(i, {
      debug: e.debug,
      onfail: function () {
        a.tryopen(i, {
          onfail: function () {
            location.href = o
          }
        })
      }
    })  : setTimeout(function () {
      location.href = i
    }, 50)  : 10 == t ? n.downloader.pause()  : 11 == t || 13 == t ? n.downloader.install()  : n.downloader && 15 != t ? n.downloader.start({
      url: o,
      confid: 66665
    })  : setTimeout(function () {
      location.href = o
    }, 50)
  }
  e = e || {
  };
  var o = i({
    'package': e['package'] || LIVE_PACKAGE
  }),
  a = {
    tryopen: n(60) (),
    wx: n(61) (e['package'])
  };
  return o.on('action', t),
  o
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/game_rec/wrap', ' <div class="mod_hd"> <h2 class="mod_title">周边推荐</h2> </div> <div class="mod_bd mod_apps_recommend_box"> <ul class="mod_apps_recommend" _scroll_view> </ul> </div> ')
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/game_rec/item', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.iconUrl,
  o = e.gameName,
  a = e.open,
  s = e.word,
  l = '';
  return l += ' <span class="app_icon"><img src="',
  l += i(r),
  l += '" alt="" class="icon_pic"></span> <span class="app_name">',
  l += i(o),
  l += '</span> <span class="btn_app ',
  l += i(a),
  l += '">',
  l += i(s),
  l += '</span> ',
  new String(l)
  })
  },
  function (e, t, n) {
  var i = n(156),
  r = n(157),
  o = n(158),
  a = n(159),
  s = n(161);
  e.exports = function (e, t, n, l) {
  function c() {
    window.verticalRecommandation && window.verticalRecommandation.show()
  }
  s();
  var d = 3,
  u = l.list.slice(0, d),
  p = $(r({
    list: u
  }));
  e.append(p);
  var f = $(o({
  }));
  e.append(f),
  setTimeout(function () {
    f && f.hide()
  }, 3000);
  var v = p.find('.vertical_swiper_cover'),
  h = 0,
  m = 0,
  g = new i('.swiper-container', {
    direction: 'vertical',
    on: {
      slideChange: function (e) {
        f && f.hide(),
        g.activeIndex == d - 1 ? g.allowSlideNext = !1 : g.allowSlideNext = !0
      },
      slideNextTransitionEnd: function () {
        if (g.activeIndex == d - 1) _.next();
         else {
          var e = g.activeIndex + 1;
          _.next({
            vid: u[e].vid,
            $el: v[e],
            poster: u[e].pic_640_360
          })
        }
      },
      slidePrevTransitionEnd: function () {
        _.prev({
          vid: u[g.activeIndex].vid,
          $el: v[g.activeIndex],
          poster: u[g.activeIndex].pic_640_360
        })
      },
      touchStart: function (e) {
        g.activeIndex == d - 1 && (h = e.changedTouches[0].clientY)
      },
      touchEnd: function (e) {
        g.activeIndex == d - 1 && (m = e.changedTouches[0].clientY, m < h - 20 ? c()  : (h = 0, m = 0))
      }
    }
  }),
  _ = new a;
  _.init({
    vid: u[0].vid,
    $el: v[0],
    poster: u[0].pic_640_360
  }, {
    vid: u[1].vid,
    $el: v[1],
    poster: u[1].pic_640_360
  }),
  _.onEnd(function () {
    g.activeIndex == d - 1 ? c()  : g.slideNext()
  })
  }
  },
  function (e, t, n) {
  !function (t, n) {
  e.exports = n()
  }(this, function () {
  'use strict';
  function e(e, t) {
    var n = [
    ],
    a = 0;
    if (e && !t && e instanceof o) return e;
    if (e) if ('string' == typeof e) {
      var s,
      l,
      c = e.trim();
      if (0 <= c.indexOf('<') && 0 <= c.indexOf('>')) {
        var d = 'div';
        for (0 === c.indexOf('<li') && (d = 'ul'), 0 === c.indexOf('<tr') && (d = 'tbody'), 0 !== c.indexOf('<td') && 0 !== c.indexOf('<th') || (d = 'tr'), 0 === c.indexOf('<tbody') && (d = 'table'), 0 === c.indexOf('<option') && (d = 'select'), (l = i.createElement(d)).innerHTML = c, a = 0; a < l.childNodes.length; a += 1) n.push(l.childNodes[a])
      } else for (s = t || '#' !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim())  : [
        i.getElementById(e.trim().split('#') [1])
      ], a = 0; a < s.length; a += 1) s[a] && n.push(s[a])
    } else if (e.nodeType || e === r || e === i) n.push(e);
     else if (0 < e.length && e[0].nodeType) for (a = 0; a < e.length; a += 1) n.push(e[a]);
    return new o(n)
  }
  function t(e) {
    for (var t = [
    ], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
    return t
  }
  function n() {
    var e = this,
    t = e.params,
    n = e.el;
    if (!n || 0 !== n.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
      r = e.allowSlidePrev,
      o = e.snapGrid;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a),
        e.updateActiveIndex(),
        e.updateSlidesClasses(),
        t.autoHeight && e.updateAutoHeight()
      } else e.updateSlidesClasses(),
      ('auto' === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0)  : e.slideTo(e.activeIndex, 0, !1, !0);
      e.allowSlidePrev = r,
      e.allowSlideNext = i,
      e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
    }
  }
  var i = 'undefined' == typeof document ? {
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
  r = 'undefined' == typeof window ? {
    document: i,
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
  o = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t];
    return this.length = e.length,
    this
  };
  e.fn = o.prototype,
  e.Class = o,
  e.Dom7 = o;
  var a = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(' '), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
      return this
    },
    removeClass: function (e) {
      for (var t = e.split(' '), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
      return this
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function (e) {
      for (var t = e.split(' '), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
      return this
    },
    attr: function (e, t) {
      var n = arguments;
      if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e)  : void 0;
      for (var i = 0; i < this.length; i += 1) if (2 === n.length) this[i].setAttribute(e, t);
       else for (var r in e) this[i][r] = e[r],
      this[i].setAttribute(r, e[r]);
      return this
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    },
    data: function (e, t) {
      var n;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1) (n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {
        }),
        n.dom7ElementDataStorage[e] = t;
        return this
      }
      if (n = this[0]) {
        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
        var r = n.getAttribute('data-' + e);
        return r || void 0
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var n = this[t].style;
        n.webkitTransform = e,
        n.transform = e
      }
      return this
    },
    transition: function (e) {
      'string' != typeof e && (e += 'ms');
      for (var t = 0; t < this.length; t += 1) {
        var n = this[t].style;
        n.webkitTransitionDuration = e,
        n.transitionDuration = e
      }
      return this
    },
    on: function () {
      function t(t) {
        var n = t.target;
        if (n) {
          var i = t.target.dom7EventData || [
          ];
          if (i.indexOf(t) < 0 && i.unshift(t), e(n).is(s)) l.apply(n, i);
           else for (var r = e(n).parents(), o = 0; o < r.length; o += 1) e(r[o]).is(s) && l.apply(r[o], i)
        }
      }
      function n(e) {
        var t = e && e.target && e.target.dom7EventData || [
        ];
        t.indexOf(e) < 0 && t.unshift(e),
        l.apply(this, t)
      }
      for (var i, r = [
      ], o = arguments.length; o--; ) r[o] = arguments[o];
      var a = r[0],
      s = r[1],
      l = r[2],
      c = r[3];
      'function' == typeof r[1] && (a = (i = r) [0], l = i[1], c = i[2], s = void 0),
      c || (c = !1);
      for (var d, u = a.split(' '), p = 0; p < this.length; p += 1) {
        var f = this[p];
        if (s) for (d = 0; d < u.length; d += 1) {
          var v = u[d];
          f.dom7LiveListeners || (f.dom7LiveListeners = {
          }),
          f.dom7LiveListeners[v] || (f.dom7LiveListeners[v] = [
          ]),
          f.dom7LiveListeners[v].push({
            listener: l,
            proxyListener: t
          }),
          f.addEventListener(v, t, c)
        } else for (d = 0; d < u.length; d += 1) {
          var h = u[d];
          f.dom7Listeners || (f.dom7Listeners = {
          }),
          f.dom7Listeners[h] || (f.dom7Listeners[h] = [
          ]),
          f.dom7Listeners[h].push({
            listener: l,
            proxyListener: n
          }),
          f.addEventListener(h, n, c)
        }
      }
      return this
    },
    off: function () {
      for (var e, t = [
      ], n = arguments.length; n--; ) t[n] = arguments[n];
      var i = t[0],
      r = t[1],
      o = t[2],
      a = t[3];
      'function' == typeof t[1] && (i = (e = t) [0], o = e[1], a = e[2], r = void 0),
      a || (a = !1);
      for (var s = i.split(' '), l = 0; l < s.length; l += 1) for (var c = s[l], d = 0; d < this.length; d += 1) {
        var u = this[d],
        p = void 0;
        if (!r && u.dom7Listeners ? p = u.dom7Listeners[c] : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[c]), p && p.length) for (var f = p.length - 1; 0 <= f; f -= 1) {
          var v = p[f];
          o && v.listener === o ? (u.removeEventListener(c, v.proxyListener, a), p.splice(f, 1))  : o && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === o ? (u.removeEventListener(c, v.proxyListener, a), p.splice(f, 1))  : o || (u.removeEventListener(c, v.proxyListener, a), p.splice(f, 1))
        }
      }
      return this
    },
    trigger: function () {
      for (var e = [
      ], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var n = e[0].split(' '), o = e[1], a = 0; a < n.length; a += 1) for (var s = n[a], l = 0; l < this.length; l += 1) {
        var c = this[l],
        d = void 0;
        try {
          d = new r.CustomEvent(s, {
            detail: o,
            bubbles: !0,
            cancelable: !0
          })
        } catch (e) {
          (d = i.createEvent('Event')).initEvent(s, !0, !0),
          d.detail = o
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
      function t(o) {
        if (o.target === this) for (e.call(this, o), n = 0; n < i.length; n += 1) r.off(i[n], t)
      }
      var n,
      i = [
        'webkitTransitionEnd',
        'transitionend'
      ],
      r = this;
      if (e) for (n = 0; n < i.length; n += 1) r.on(i[n], t);
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
        n = i.body,
        o = e.clientTop || n.clientTop || 0,
        a = e.clientLeft || n.clientLeft || 0,
        s = e === r ? r.scrollY : e.scrollTop,
        l = e === r ? r.scrollX : e.scrollLeft;
        return {
          top: t.top + s - o,
          left: t.left + l - a
        }
      }
      return null
    },
    css: function (e, t) {
      var n;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (n = 0; n < this.length; n += 1) for (var i in e) this[n].style[i] = e[i];
          return this
        }
        if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
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
      var n,
      a,
      s = this[0];
      if (!s || void 0 === t) return !1;
      if ('string' == typeof t) {
        if (s.matches) return s.matches(t);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
        if (s.msMatchesSelector) return s.msMatchesSelector(t);
        for (n = e(t), a = 0; a < n.length; a += 1) if (n[a] === s) return !0;
        return !1
      }
      if (t === i) return s === i;
      if (t === r) return s === r;
      if (t.nodeType || t instanceof o) {
        for (n = t.nodeType ? [
          t
        ] : t, a = 0; a < n.length; a += 1) if (n[a] === s) return !0;
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
      n = this.length;
      return new o(n - 1 < e ? [
      ] : e < 0 ? (t = n + e) < 0 ? [
      ] : [
        this[t]
      ] : [
        this[e]
      ])
    },
    append: function () {
      for (var e, t = [
      ], n = arguments.length; n--; ) t[n] = arguments[n];
      for (var r = 0; r < t.length; r += 1) {
        e = t[r];
        for (var a = 0; a < this.length; a += 1) if ('string' == typeof e) {
          var s = i.createElement('div');
          for (s.innerHTML = e; s.firstChild; ) this[a].appendChild(s.firstChild)
        } else if (e instanceof o) for (var l = 0; l < e.length; l += 1) this[a].appendChild(e[l]);
         else this[a].appendChild(e)
      }
      return this
    },
    prepend: function (e) {
      var t,
      n;
      for (t = 0; t < this.length; t += 1) if ('string' == typeof e) {
        var r = i.createElement('div');
        for (r.innerHTML = e, n = r.childNodes.length - 1; 0 <= n; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
      } else if (e instanceof o) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
       else this[t].insertBefore(e, this[t].childNodes[0]);
      return this
    },
    next: function (t) {
      return new o(0 < this.length ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [
        this[0].nextElementSibling
      ] : [
      ] : this[0].nextElementSibling ? [
        this[0].nextElementSibling
      ] : [
      ] : [
      ])
    },
    nextAll: function (t) {
      var n = [
      ],
      i = this[0];
      if (!i) return new o([]);
      for (; i.nextElementSibling; ) {
        var r = i.nextElementSibling;
        t ? e(r).is(t) && n.push(r)  : n.push(r),
        i = r
      }
      return new o(n)
    },
    prev: function (t) {
      if (0 < this.length) {
        var n = this[0];
        return new o(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [
          n.previousElementSibling
        ] : [
        ] : n.previousElementSibling ? [
          n.previousElementSibling
        ] : [
        ])
      }
      return new o([])
    },
    prevAll: function (t) {
      var n = [
      ],
      i = this[0];
      if (!i) return new o([]);
      for (; i.previousElementSibling; ) {
        var r = i.previousElementSibling;
        t ? e(r).is(t) && n.push(r)  : n.push(r),
        i = r
      }
      return new o(n)
    },
    parent: function (n) {
      for (var i = [
      ], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (n ? e(this[r].parentNode).is(n) && i.push(this[r].parentNode)  : i.push(this[r].parentNode));
      return e(t(i))
    },
    parents: function (n) {
      for (var i = [
      ], r = 0; r < this.length; r += 1) for (var o = this[r].parentNode; o; ) n ? e(o).is(n) && i.push(o)  : i.push(o),
      o = o.parentNode;
      return e(t(i))
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new o([])  : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function (e) {
      for (var t = [
      ], n = 0; n < this.length; n += 1) for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
      return new o(t)
    },
    children: function (n) {
      for (var i = [
      ], r = 0; r < this.length; r += 1) for (var a = this[r].childNodes, s = 0; s < a.length; s += 1) n ? 1 === a[s].nodeType && e(a[s]).is(n) && i.push(a[s])  : 1 === a[s].nodeType && i.push(a[s]);
      return new o(t(i))
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    },
    add: function () {
      for (var t = [
      ], n = arguments.length; n--; ) t[n] = arguments[n];
      var i,
      r;
      for (i = 0; i < t.length; i += 1) {
        var o = e(t[i]);
        for (r = 0; r < o.length; r += 1) this[this.length] = o[r],
        this.length += 1
      }
      return this
    },
    styles: function () {
      return this[0] ? r.getComputedStyle(this[0], null)  : {
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
      var n,
      i,
      o;
      void 0 === t && (t = 'x');
      var a = r.getComputedStyle(e, null);
      return r.WebKitCSSMatrix ? (6 < (i = a.transform || a.webkitTransform).split(',').length && (i = i.split(', ').map(function (e) {
        return e.replace(',', '.')
      }).join(', ')), o = new r.WebKitCSSMatrix('none' === i ? '' : i))  : n = (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')).toString().split(','),
      'x' === t && (i = r.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12])  : parseFloat(n[4])),
      'y' === t && (i = r.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13])  : parseFloat(n[5])),
      i || 0
    },
    parseUrlQuery: function (e) {
      var t,
      n,
      i,
      o,
      a = {
      },
      s = e || r.location.href;
      if ('string' == typeof s && s.length) for (o = (n = (s = - 1 < s.indexOf('?') ? s.replace(/\S*\?/, '')  : '').split('&').filter(function (e) {
        return '' !== e
      })).length, t = 0; t < o; t += 1) i = n[t].replace(/#\S+/g, '').split('='),
      a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || '';
      return a
    },
    isObject: function (e) {
      return 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && null !== e && e.constructor && e.constructor === Object
    },
    extend: function () {
      for (var e = [
      ], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
        var r = e[i];
        if (null != r) for (var o = Object.keys(Object(r)), a = 0, s = o.length; a < s; a += 1) {
          var l = o[a],
          c = Object.getOwnPropertyDescriptor(r, l);
          void 0 !== c && c.enumerable && (u.isObject(n[l]) && u.isObject(r[l]) ? u.extend(n[l], r[l])  : !u.isObject(n[l]) && u.isObject(r[l]) ? (n[l] = {
          }, u.extend(n[l], r[l]))  : n[l] = r[l])
        }
      }
      return n
    }
  },
  p = (c = i.createElement('div'), {
    touch: r.Modernizr && !0 === r.Modernizr.touch || !!(0 < r.navigator.maxTouchPoints || 'ontouchstart' in r || r.DocumentTouch && i instanceof r.DocumentTouch),
    pointerEvents: !!(r.navigator.pointerEnabled || r.PointerEvent || 'maxTouchPoints' in r.navigator && 0 < r.navigator.maxTouchPoints),
    prefixedPointerEvents: !!r.navigator.msPointerEnabled,
    transition: (l = c.style, 'transition' in l || 'webkitTransition' in l || 'MozTransition' in l),
    transforms3d: r.Modernizr && !0 === r.Modernizr.csstransforms3d || (s = c.style, 'webkitPerspective' in s || 'MozPerspective' in s || 'OPerspective' in s || 'MsPerspective' in s || 'perspective' in s),
    flexbox: function () {
      for (var e = c.style, t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' '), n = 0; n < t.length; n += 1) if (t[n] in e) return !0;
      return !1
    }(),
    observer: 'MutationObserver' in r || 'WebkitMutationObserver' in r,
    passiveListener: function () {
      var e = !1;
      try {
        var t = Object.defineProperty({
        }, 'passive', {
          get: function () {
            e = !0
          }
        });
        r.addEventListener('testPassiveListener', null, t)
      } catch (e) {
      }
      return e
    }(),
    gestures: 'ongesturestart' in r
  }),
  f = {
    isIE: !!r.navigator.userAgent.match(/Trident/g) || !!r.navigator.userAgent.match(/MSIE/g),
    isEdge: !!r.navigator.userAgent.match(/Edge/g),
    isSafari: (d = r.navigator.userAgent.toLowerCase(), 0 <= d.indexOf('safari') && d.indexOf('chrome') < 0 && d.indexOf('android') < 0),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
  },
  v = function (e) {
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
  h = {
    components: {
      configurable: !0
    }
  };
  v.prototype.on = function (e, t, n) {
    var i = this;
    if ('function' != typeof t) return i;
    var r = n ? 'unshift' : 'push';
    return e.split(' ').forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = [
      ]),
      i.eventsListeners[e][r](t)
    }),
    i
  },
  v.prototype.once = function (e, t, n) {
    function i() {
      for (var n = [
      ], o = arguments.length; o--; ) n[o] = arguments[o];
      t.apply(r, n),
      r.off(e, i),
      i.f7proxy && delete i.f7proxy
    }
    var r = this;
    return 'function' != typeof t ? r : (i.f7proxy = t, r.on(e, i, n))
  },
  v.prototype.off = function (e, t) {
    var n = this;
    return n.eventsListeners && e.split(' ').forEach(function (e) {
      void 0 === t ? n.eventsListeners[e] = [
      ] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(function (i, r) {
        (i === t || i.f7proxy && i.f7proxy === t) && n.eventsListeners[e].splice(r, 1)
      })
    }),
    n
  },
  v.prototype.emit = function () {
    for (var e = [
    ], t = arguments.length; t--; ) e[t] = arguments[t];
    var n,
    i,
    r,
    o = this;
    return o.eventsListeners && ('string' == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), r = o)  : (n = e[0].events, i = e[0].data, r = e[0].context || o), (Array.isArray(n) ? n : n.split(' ')).forEach(function (e) {
      if (o.eventsListeners && o.eventsListeners[e]) {
        var t = [
        ];
        o.eventsListeners[e].forEach(function (e) {
          t.push(e)
        }),
        t.forEach(function (e) {
          e.apply(r, i)
        })
      }
    })),
    o
  },
  v.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (n) {
      var i = t.modules[n];
      i.params && u.extend(e, i.params)
    })
  },
  v.prototype.useModules = function (e) {
    void 0 === e && (e = {
    });
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (n) {
      var i = t.modules[n],
      r = e[n] || {
      };
      i.instance && Object.keys(i.instance).forEach(function (e) {
        var n = i.instance[e];
        t[e] = 'function' == typeof n ? n.bind(t)  : n
      }),
      i.on && t.on && Object.keys(i.on).forEach(function (e) {
        t.on(e, i.on[e])
      }),
      i.create && i.create.bind(t) (r)
    })
  },
  h.components.set = function (e) {
    this.use && this.use(e)
  },
  v.installModule = function (e) {
    for (var t = [
    ], n = arguments.length - 1; 0 < n--; ) t[n] = arguments[n + 1];
    var i = this;
    i.prototype.modules || (i.prototype.modules = {
    });
    var r = e.name || Object.keys(i.prototype.modules).length + '_' + u.now();
    return (i.prototype.modules[r] = e).proto && Object.keys(e.proto).forEach(function (t) {
      i.prototype[t] = e.proto[t]
    }),
    e['static'] && Object.keys(e['static']).forEach(function (t) {
      i[t] = e['static'][t]
    }),
    e.install && e.install.apply(i, t),
    i
  },
  v.use = function (e) {
    for (var t = [
    ], n = arguments.length - 1; 0 < n--; ) t[n] = arguments[n + 1];
    var i = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e)
    }), i)  : i.installModule.apply(i, [
      e
    ].concat(t))
  },
  Object.defineProperties(v, h);
  var m = {
    updateSize: function () {
      var e,
      t,
      n = this,
      i = n.$el;
      e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth,
      t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight,
      0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css('padding-left'), 10) - parseInt(i.css('padding-right'), 10), t = t - parseInt(i.css('padding-top'), 10) - parseInt(i.css('padding-bottom'), 10), u.extend(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t
      }))
    },
    updateSlides: function () {
      var e = this,
      t = e.params,
      n = e.$wrapperEl,
      i = e.size,
      o = e.rtlTranslate,
      a = e.wrongRTL,
      s = e.virtual && t.virtual.enabled,
      l = s ? e.virtual.slides.length : e.slides.length,
      c = n.children('.' + e.params.slideClass),
      d = s ? e.virtual.slides.length : c.length,
      f = [
      ],
      v = [
      ],
      h = [
      ],
      m = t.slidesOffsetBefore;
      'function' == typeof m && (m = t.slidesOffsetBefore.call(e));
      var g = t.slidesOffsetAfter;
      'function' == typeof g && (g = t.slidesOffsetAfter.call(e));
      var _ = e.snapGrid.length,
      w = e.snapGrid.length,
      y = t.spaceBetween,
      b = - m,
      x = 0,
      k = 0;
      if (void 0 !== i) {
        var T,
        E;
        'string' == typeof y && 0 <= y.indexOf('%') && (y = parseFloat(y.replace('%', '')) / 100 * i),
        e.virtualSize = - y,
        o ? c.css({
          marginLeft: '',
          marginTop: ''
        })  : c.css({
          marginRight: '',
          marginBottom: ''
        }),
        1 < t.slidesPerColumn && (T = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, 'auto' !== t.slidesPerView && 'row' === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
        for (var S, C = t.slidesPerColumn, O = T / C, I = Math.floor(d / t.slidesPerColumn), q = 0; q < d; q += 1) {
          E = 0;
          var P = c.eq(q);
          if (1 < t.slidesPerColumn) {
            var A = void 0,
            M = void 0,
            $ = void 0;
            'column' === t.slidesPerColumnFill ? ($ = q - (M = Math.floor(q / C)) * C, (I < M || M === I && $ === C - 1) && C <= ($ += 1) && ($ = 0, M += 1), A = M + $ * T / C, P.css({
              '-webkit-box-ordinal-group': A,
              '-moz-box-ordinal-group': A,
              '-ms-flex-order': A,
              '-webkit-order': A,
              order: A
            }))  : M = q - ($ = Math.floor(q / O)) * O,
            P.css('margin-' + (e.isHorizontal() ? 'top' : 'left'), 0 !== $ && t.spaceBetween && t.spaceBetween + 'px').attr('data-swiper-column', M).attr('data-swiper-row', $)
          }
          if ('none' !== P.css('display')) {
            if ('auto' === t.slidesPerView) {
              var L = r.getComputedStyle(P[0], null),
              D = P[0].style.transform,
              j = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = 'none'), j && (P[0].style.webkitTransform = 'none'), t.roundLengths) E = e.isHorizontal() ? P.outerWidth(!0)  : P.outerHeight(!0);
               else if (e.isHorizontal()) {
                var N = parseFloat(L.getPropertyValue('width')),
                R = parseFloat(L.getPropertyValue('padding-left')),
                z = parseFloat(L.getPropertyValue('padding-right')),
                U = parseFloat(L.getPropertyValue('margin-left')),
                B = parseFloat(L.getPropertyValue('margin-right')),
                V = L.getPropertyValue('box-sizing');
                E = V && 'border-box' === V ? N + U + B : N + R + z + U + B
              } else {
                var W = parseFloat(L.getPropertyValue('height')),
                F = parseFloat(L.getPropertyValue('padding-top')),
                H = parseFloat(L.getPropertyValue('padding-bottom')),
                G = parseFloat(L.getPropertyValue('margin-top')),
                Y = parseFloat(L.getPropertyValue('margin-bottom')),
                X = L.getPropertyValue('box-sizing');
                E = X && 'border-box' === X ? W + G + Y : W + F + H + G + Y
              }
              D && (P[0].style.transform = D),
              j && (P[0].style.webkitTransform = j),
              t.roundLengths && (E = Math.floor(E))
            } else E = (i - (t.slidesPerView - 1) * y) / t.slidesPerView,
            t.roundLengths && (E = Math.floor(E)),
            c[q] && (e.isHorizontal() ? c[q].style.width = E + 'px' : c[q].style.height = E + 'px');
            c[q] && (c[q].swiperSlideSize = E),
            h.push(E),
            t.centeredSlides ? (b = b + E / 2 + x / 2 + y, 0 === x && 0 !== q && (b = b - i / 2 - y), 0 === q && (b = b - i / 2 - y), Math.abs(b) < 0.001 && (b = 0), t.roundLengths && (b = Math.floor(b)), k % t.slidesPerGroup == 0 && f.push(b), v.push(b))  : (t.roundLengths && (b = Math.floor(b)), k % t.slidesPerGroup == 0 && f.push(b), v.push(b), b = b + E + y),
            e.virtualSize += E + y,
            x = E,
            k += 1
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, i) + g, o && a && ('slide' === t.effect || 'coverflow' === t.effect) && n.css({
          width: e.virtualSize + t.spaceBetween + 'px'
        }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
          width: e.virtualSize + t.spaceBetween + 'px'
        })  : n.css({
          height: e.virtualSize + t.spaceBetween + 'px'
        })), 1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
          width: e.virtualSize + t.spaceBetween + 'px'
        })  : n.css({
          height: e.virtualSize + t.spaceBetween + 'px'
        }), t.centeredSlides)) {
          S = [
          ];
          for (var Q = 0; Q < f.length; Q += 1) {
            var J = f[Q];
            t.roundLengths && (J = Math.floor(J)),
            f[Q] < e.virtualSize + f[0] && S.push(J)
          }
          f = S
        }
        if (!t.centeredSlides) {
          S = [
          ];
          for (var K = 0; K < f.length; K += 1) {
            var Z = f[K];
            t.roundLengths && (Z = Math.floor(Z)),
            f[K] <= e.virtualSize - i && S.push(Z)
          }
          f = S,
          1 < Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) && f.push(e.virtualSize - i)
        }
        if (0 === f.length && (f = [
          0
        ]), 0 !== t.spaceBetween && (e.isHorizontal() ? o ? c.css({
          marginLeft: y + 'px'
        })  : c.css({
          marginRight: y + 'px'
        })  : c.css({
          marginBottom: y + 'px'
        })), t.centerInsufficientSlides) {
          var ee = 0;
          if (h.forEach(function (e) {
            ee += e + (t.spaceBetween ? t.spaceBetween : 0)
          }), (ee -= t.spaceBetween) < i) {
            var te = (i - ee) / 2;
            f.forEach(function (e, t) {
              f[t] = e - te
            }),
            v.forEach(function (e, t) {
              v[t] = e + te
            })
          }
        }
        u.extend(e, {
          slides: c,
          snapGrid: f,
          slidesGrid: v,
          slidesSizesGrid: h
        }),
        d !== l && e.emit('slidesLengthChange'),
        f.length !== _ && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
        v.length !== w && e.emit('slidesGridLengthChange'),
        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
      }
    },
    updateAutoHeight: function (e) {
      var t,
      n = this,
      i = [
      ],
      r = 0;
      if ('number' == typeof e ? n.setTransition(e)  : !0 === e && n.setTransition(n.params.speed), 'auto' !== n.params.slidesPerView && 1 < n.params.slidesPerView) for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
        var o = n.activeIndex + t;
        if (o > n.slides.length) break;
        i.push(n.slides.eq(o) [0])
      } else i.push(n.slides.eq(n.activeIndex) [0]);
      for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var a = i[t].offsetHeight;
        r = r < a ? a : r
      }
      r && n.$wrapperEl.css('height', r + 'px')
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
    },
    updateSlidesProgress: function (t) {
      void 0 === t && (t = this && this.translate || 0);
      var n = this,
      i = n.params,
      r = n.slides,
      o = n.rtlTranslate;
      if (0 !== r.length) {
        void 0 === r[0].swiperSlideOffset && n.updateSlidesOffset();
        var a = - t;
        o && (a = t),
        r.removeClass(i.slideVisibleClass),
        n.visibleSlidesIndexes = [
        ],
        n.visibleSlides = [
        ];
        for (var s = 0; s < r.length; s += 1) {
          var l = r[s],
          c = (a + (i.centeredSlides ? n.minTranslate()  : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
          if (i.watchSlidesVisibility) {
            var d = - (a - l.swiperSlideOffset),
            u = d + n.slidesSizesGrid[s];
            (0 <= d && d < n.size || 0 < u && u <= n.size || d <= 0 && u >= n.size) && (n.visibleSlides.push(l), n.visibleSlidesIndexes.push(s), r.eq(s).addClass(i.slideVisibleClass))
          }
          l.progress = o ? - c : c
        }
        n.visibleSlides = e(n.visibleSlides)
      }
    },
    updateProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
      n = t.params,
      i = t.maxTranslate() - t.minTranslate(),
      r = t.progress,
      o = t.isBeginning,
      a = t.isEnd,
      s = o,
      l = a;
      0 === i ? a = o = !(r = 0)  : (o = (r = (e - t.minTranslate()) / i) <= 0, a = 1 <= r),
      u.extend(t, {
        progress: r,
        isBeginning: o,
        isEnd: a
      }),
      (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e),
      o && !s && t.emit('reachBeginning toEdge'),
      a && !l && t.emit('reachEnd toEdge'),
      (s && !o || l && !a) && t.emit('fromEdge'),
      t.emit('progress', r)
    },
    updateSlidesClasses: function () {
      var e,
      t = this,
      n = t.slides,
      i = t.params,
      r = t.$wrapperEl,
      o = t.activeIndex,
      a = t.realIndex,
      s = t.virtual && i.virtual.enabled;
      n.removeClass(i.slideActiveClass + ' ' + i.slideNextClass + ' ' + i.slidePrevClass + ' ' + i.slideDuplicateActiveClass + ' ' + i.slideDuplicateNextClass + ' ' + i.slideDuplicatePrevClass),
      (e = s ? t.$wrapperEl.find('.' + i.slideClass + '[data-swiper-slide-index="' + o + '"]')  : n.eq(o)).addClass(i.slideActiveClass),
      i.loop && (e.hasClass(i.slideDuplicateClass) ? r.children('.' + i.slideClass + ':not(.' + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass)  : r.children('.' + i.slideClass + '.' + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
      var l = e.nextAll('.' + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = n.eq(0)).addClass(i.slideNextClass);
      var c = e.prevAll('.' + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === c.length && (c = n.eq( - 1)).addClass(i.slidePrevClass),
      i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children('.' + i.slideClass + ':not(.' + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(i.slideDuplicateNextClass)  : r.children('.' + i.slideClass + '.' + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr('data-swiper-slide-index') + '"]').addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? r.children('.' + i.slideClass + ':not(.' + i.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]').addClass(i.slideDuplicatePrevClass)  : r.children('.' + i.slideClass + '.' + i.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr('data-swiper-slide-index') + '"]').addClass(i.slideDuplicatePrevClass))
    },
    updateActiveIndex: function (e) {
      var t,
      n = this,
      i = n.rtlTranslate ? n.translate : - n.translate,
      r = n.slidesGrid,
      o = n.snapGrid,
      a = n.params,
      s = n.activeIndex,
      l = n.realIndex,
      c = n.snapIndex,
      d = e;
      if (void 0 === d) {
        for (var p = 0; p < r.length; p += 1) void 0 !== r[p + 1] ? i >= r[p] && i < r[p + 1] - (r[p + 1] - r[p]) / 2 ? d = p : i >= r[p] && i < r[p + 1] && (d = p + 1)  : i >= r[p] && (d = p);
        a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
      }
      if ((t = 0 <= o.indexOf(i) ? o.indexOf(i)  : Math.floor(d / a.slidesPerGroup)) >= o.length && (t = o.length - 1), d !== s) {
        var f = parseInt(n.slides.eq(d).attr('data-swiper-slide-index') || d, 10);
        u.extend(n, {
          snapIndex: t,
          realIndex: f,
          previousIndex: s,
          activeIndex: d
        }),
        n.emit('activeIndexChange'),
        n.emit('snapIndexChange'),
        l !== f && n.emit('realIndexChange'),
        n.emit('slideChange')
      } else t !== c && (n.snapIndex = t, n.emit('snapIndexChange'))
    },
    updateClickedSlide: function (t) {
      var n = this,
      i = n.params,
      r = e(t.target).closest('.' + i.slideClass) [0],
      o = !1;
      if (r) for (var a = 0; a < n.slides.length; a += 1) n.slides[a] === r && (o = !0);
      return r && o ? (n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(r).attr('data-swiper-slide-index'), 10)  : n.clickedIndex = e(r).index(), i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide(), void 0)  : (n.clickedSlide = void 0, void (n.clickedIndex = void 0))
    }
  },
  g = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
      var t = this.params,
      n = this.rtlTranslate,
      i = this.translate,
      r = this.$wrapperEl;
      if (t.virtualTranslate) return n ? - i : i;
      var o = u.getTranslate(r[0], e);
      return n && (o = - o),
      o || 0
    },
    setTranslate: function (e, t) {
      var n = this,
      i = n.rtlTranslate,
      r = n.params,
      o = n.$wrapperEl,
      a = n.progress,
      s = 0,
      l = 0;
      n.isHorizontal() ? s = i ? - e : e : l = e,
      r.roundLengths && (s = Math.floor(s), l = Math.floor(l)),
      r.virtualTranslate || (p.transforms3d ? o.transform('translate3d(' + s + 'px, ' + l + 'px, 0px)')  : o.transform('translate(' + s + 'px, ' + l + 'px)')),
      n.previousTranslate = n.translate,
      n.translate = n.isHorizontal() ? s : l;
      var c = n.maxTranslate() - n.minTranslate();
      (0 === c ? 0 : (e - n.minTranslate()) / c) !== a && n.updateProgress(e),
      n.emit('setTranslate', n.translate, t)
    },
    minTranslate: function () {
      return - this.snapGrid[0]
    },
    maxTranslate: function () {
      return - this.snapGrid[this.snapGrid.length - 1]
    }
  },
  _ = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e),
      this.emit('setTransition', e, t)
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var n = this,
      i = n.activeIndex,
      r = n.params,
      o = n.previousIndex;
      r.autoHeight && n.updateAutoHeight();
      var a = t;
      if (a || (a = o < i ? 'next' : i < o ? 'prev' : 'reset'), n.emit('transitionStart'), e && i !== o) {
        if ('reset' === a) return void n.emit('slideResetTransitionStart');
        n.emit('slideChangeTransitionStart'),
        'next' === a ? n.emit('slideNextTransitionStart')  : n.emit('slidePrevTransitionStart')
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var n = this,
      i = n.activeIndex,
      r = n.previousIndex;
      n.animating = !1,
      n.setTransition(0);
      var o = t;
      if (o || (o = r < i ? 'next' : i < r ? 'prev' : 'reset'), n.emit('transitionEnd'), e && i !== r) {
        if ('reset' === o) return void n.emit('slideResetTransitionEnd');
        n.emit('slideChangeTransitionEnd'),
        'next' === o ? n.emit('slideNextTransitionEnd')  : n.emit('slidePrevTransitionEnd')
      }
    }
  },
  w = {
    slideTo: function (e, t, n, i) {
      void 0 === e && (e = 0),
      void 0 === t && (t = this.params.speed),
      void 0 === n && (n = !0);
      var r = this,
      o = e;
      o < 0 && (o = 0);
      var a = r.params,
      s = r.snapGrid,
      l = r.slidesGrid,
      c = r.previousIndex,
      d = r.activeIndex,
      u = r.rtlTranslate;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      var f = Math.floor(o / a.slidesPerGroup);
      f >= s.length && (f = s.length - 1),
      (d || a.initialSlide || 0) === (c || 0) && n && r.emit('beforeSlideChangeStart');
      var v,
      h = - s[f];
      if (r.updateProgress(h), a.normalizeSlideIndex) for (var m = 0; m < l.length; m += 1) - Math.floor(100 * h) >= Math.floor(100 * l[m]) && (o = m);
      if (r.initialized && o !== d) {
        if (!r.allowSlideNext && h < r.translate && h < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (d || 0) !== o) return !1
      }
      return v = d < o ? 'next' : o < d ? 'prev' : 'reset',
      u && - h === r.translate || !u && h === r.translate ? (r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), 'slide' !== a.effect && r.setTranslate(h), 'reset' !== v && (r.transitionStart(n, v), r.transitionEnd(n, v)), !1)  : (0 !== t && p.transition ? (r.setTransition(t), r.setTranslate(h), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit('beforeTransitionStart', t, i), r.transitionStart(n, v), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, v))
      }), r.$wrapperEl[0].addEventListener('transitionend', r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd)))  : (r.setTransition(0), r.setTranslate(h), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit('beforeTransitionStart', t, i), r.transitionStart(n, v), r.transitionEnd(n, v)), !0)
    },
    slideToLoop: function (e, t, n, i) {
      void 0 === e && (e = 0),
      void 0 === t && (t = this.params.speed),
      void 0 === n && (n = !0);
      var r = e;
      return this.params.loop && (r += this.loopedSlides),
      this.slideTo(r, t, n, i)
    },
    slideNext: function (e, t, n) {
      void 0 === e && (e = this.params.speed),
      void 0 === t && (t = !0);
      var i = this,
      r = i.params,
      o = i.animating;
      return r.loop ? !o && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n))  : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
    },
    slidePrev: function (e, t, n) {
      function i(e) {
        return e < 0 ? - Math.floor(Math.abs(e))  : Math.floor(e)
      }
      void 0 === e && (e = this.params.speed),
      void 0 === t && (t = !0);
      var r = this,
      o = r.params,
      a = r.animating,
      s = r.snapGrid,
      l = r.slidesGrid,
      c = r.rtlTranslate;
      if (o.loop) {
        if (a) return !1;
        r.loopFix(),
        r._clientLeft = r.$wrapperEl[0].clientLeft
      }
      var d,
      u = i(c ? r.translate : - r.translate),
      p = s.map(function (e) {
        return i(e)
      }),
      f = (l.map(function (e) {
        return i(e)
      }), s[p.indexOf(u)], s[p.indexOf(u) - 1]);
      return void 0 !== f && (d = l.indexOf(f)) < 0 && (d = r.activeIndex - 1),
      r.slideTo(d, e, t, n)
    },
    slideReset: function (e, t, n) {
      return void 0 === e && (e = this.params.speed),
      void 0 === t && (t = !0),
      this.slideTo(this.activeIndex, e, t, n)
    },
    slideToClosest: function (e, t, n) {
      void 0 === e && (e = this.params.speed),
      void 0 === t && (t = !0);
      var i = this,
      r = i.activeIndex,
      o = Math.floor(r / i.params.slidesPerGroup);
      if (o < i.snapGrid.length - 1) {
        var a = i.rtlTranslate ? i.translate : - i.translate,
        s = i.snapGrid[o];
        (i.snapGrid[o + 1] - s) / 2 < a - s && (r = i.params.slidesPerGroup)
      }
      return i.slideTo(r, e, t, n)
    },
    slideToClickedSlide: function () {
      var t,
      n = this,
      i = n.params,
      r = n.$wrapperEl,
      o = 'auto' === i.slidesPerView ? n.slidesPerViewDynamic()  : i.slidesPerView,
      a = n.clickedIndex;
      if (i.loop) {
        if (n.animating) return;
        t = parseInt(e(n.clickedSlide).attr('data-swiper-slide-index'), 10),
        i.centeredSlides ? a < n.loopedSlides - o / 2 || a > n.slides.length - n.loopedSlides + o / 2 ? (n.loopFix(), a = r.children('.' + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ')').eq(0).index(), u.nextTick(function () {
          n.slideTo(a)
        }))  : n.slideTo(a)  : a > n.slides.length - o ? (n.loopFix(), a = r.children('.' + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ')').eq(0).index(), u.nextTick(function () {
          n.slideTo(a)
        }))  : n.slideTo(a)
      } else n.slideTo(a)
    }
  },
  y = {
    loopCreate: function () {
      var t = this,
      n = t.params,
      r = t.$wrapperEl;
      r.children('.' + n.slideClass + '.' + n.slideDuplicateClass).remove();
      var o = r.children('.' + n.slideClass);
      if (n.loopFillGroupWithBlank) {
        var a = n.slidesPerGroup - o.length % n.slidesPerGroup;
        if (a !== n.slidesPerGroup) {
          for (var s = 0; s < a; s += 1) {
            var l = e(i.createElement('div')).addClass(n.slideClass + ' ' + n.slideBlankClass);
            r.append(l)
          }
          o = r.children('.' + n.slideClass)
        }
      }
      'auto' !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = o.length),
      t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10),
      t.loopedSlides += n.loopAdditionalSlides,
      t.loopedSlides > o.length && (t.loopedSlides = o.length);
      var c = [
      ],
      d = [
      ];
      o.each(function (n, i) {
        var r = e(i);
        n < t.loopedSlides && d.push(i),
        n < o.length && n >= o.length - t.loopedSlides && c.push(i),
        r.attr('data-swiper-slide-index', n)
      });
      for (var u = 0; u < d.length; u += 1) r.append(e(d[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
      for (var p = c.length - 1; 0 <= p; p -= 1) r.prepend(e(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
    },
    loopFix: function () {
      var e,
      t = this,
      n = t.params,
      i = t.activeIndex,
      r = t.slides,
      o = t.loopedSlides,
      a = t.allowSlidePrev,
      s = t.allowSlideNext,
      l = t.snapGrid,
      c = t.rtlTranslate;
      t.allowSlidePrev = !0,
      t.allowSlideNext = !0;
      var d = - l[i] - t.getTranslate();
      i < o ? (e = r.length - 3 * o + i, e += o, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? - t.translate : t.translate) - d))  : ('auto' === n.slidesPerView && 2 * o <= i || i >= r.length - o) && (e = - r.length + i + o, e += o, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? - t.translate : t.translate) - d)),
      t.allowSlidePrev = a,
      t.allowSlideNext = s
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
      t = this.params,
      n = this.slides;
      e.children('.' + t.slideClass + '.' + t.slideDuplicateClass + ',.' + t.slideClass + '.' + t.slideBlankClass).remove(),
      n.removeAttr('data-swiper-slide-index')
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
      n = t.$wrapperEl,
      i = t.params;
      if (i.loop && t.loopDestroy(), 'object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
       else n.append(e);
      i.loop && t.loopCreate(),
      i.observer && p.observer || t.update()
    },
    prependSlide: function (e) {
      var t = this,
      n = t.params,
      i = t.$wrapperEl,
      r = t.activeIndex;
      n.loop && t.loopDestroy();
      var o = r + 1;
      if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) {
        for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
        o = r + e.length
      } else i.prepend(e);
      n.loop && t.loopCreate(),
      n.observer && p.observer || t.update(),
      t.slideTo(o, 0, !1)
    },
    addSlide: function (e, t) {
      var n = this,
      i = n.$wrapperEl,
      r = n.params,
      o = n.activeIndex;
      r.loop && (o -= n.loopedSlides, n.loopDestroy(), n.slides = i.children('.' + r.slideClass));
      var a = n.slides.length;
      if (e <= 0) n.prependSlide(t);
       else if (a <= e) n.appendSlide(t);
       else {
        for (var s = e < o ? o + 1 : o, l = [
        ], c = a - 1; e <= c; c -= 1) {
          var d = n.slides.eq(c);
          d.remove(),
          l.unshift(d)
        }
        if ('object' == ('undefined' == typeof t ? 'undefined' : _typeof2(t)) && 'length' in t) {
          for (var u = 0; u < t.length; u += 1) t[u] && i.append(t[u]);
          s = e < o ? o + t.length : o
        } else i.append(t);
        for (var f = 0; f < l.length; f += 1) i.append(l[f]);
        r.loop && n.loopCreate(),
        r.observer && p.observer || n.update(),
        r.loop ? n.slideTo(s + n.loopedSlides, 0, !1)  : n.slideTo(s, 0, !1)
      }
    },
    removeSlide: function (e) {
      var t = this,
      n = t.params,
      i = t.$wrapperEl,
      r = t.activeIndex;
      n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children('.' + n.slideClass));
      var o,
      a = r;
      if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) {
        for (var s = 0; s < e.length; s += 1) o = e[s],
        t.slides[o] && t.slides.eq(o).remove(),
        o < a && (a -= 1);
        a = Math.max(a, 0)
      } else o = e,
      t.slides[o] && t.slides.eq(o).remove(),
      o < a && (a -= 1),
      a = Math.max(a, 0);
      n.loop && t.loopCreate(),
      n.observer && p.observer || t.update(),
      n.loop ? t.slideTo(a + t.loopedSlides, 0, !1)  : t.slideTo(a, 0, !1)
    },
    removeAllSlides: function () {
      for (var e = [
      ], t = 0; t < this.slides.length; t += 1) e.push(t);
      this.removeSlide(e)
    }
  },
  k = function () {
    var e = r.navigator.userAgent,
    t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: r.cordova || r.phonegap,
      phonegap: r.cordova || r.phonegap
    },
    n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
    o = e.match(/(Android);?[\s\/]+([\d.]+)?/),
    a = e.match(/(iPad).*OS\s([\d_]+)/),
    s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
    l = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    if (n && (t.os = 'windows', t.osVersion = n[2], t.windows = !0), o && !n && (t.os = 'android', t.osVersion = o[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf('chrome')), (a || l || s) && (t.os = 'ios', t.ios = !0), l && !s && (t.osVersion = l[2].replace(/_/g, '.'), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, '.'), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, '.')  : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf('Version/') && '10' === t.osVersion.split('.') [0] && (t.osVersion = e.toLowerCase().split('version/') [1].split(' ') [0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || a || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && 'ios' === t.os) {
      var c = t.osVersion.split('.'),
      d = i.querySelector('meta[name="viewport"]');
      t.minimalUi = !t.webView && (s || l) && (1 * c[0] == 7 ? 1 <= 1 * c[1] : 7 < 1 * c[0]) && d && 0 <= d.getAttribute('content').indexOf('minimal-ui')
    }
    return t.pixelRatio = r.devicePixelRatio || 1,
    t
  }(),
  T = {
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
  E = {
    update: m,
    translate: g,
    transition: _,
    slide: w,
    loop: y,
    grabCursor: b,
    manipulation: x,
    events: {
      attachEvents: function () {
        var t = this,
        o = t.params,
        a = t.touchEvents,
        s = t.el,
        l = t.wrapperEl;
        t.onTouchStart = function (t) {
          var n = this,
          o = n.touchEventsData,
          a = n.params,
          s = n.touches;
          if (!n.animating || !a.preventInteractionOnTransition) {
            var l = t;
            if (l.originalEvent && (l = l.originalEvent), o.isTouchEvent = 'touchstart' === l.type, (o.isTouchEvent || !('which' in l) || 3 !== l.which) && !(!o.isTouchEvent && 'button' in l && 0 < l.button || o.isTouched && o.isMoved)) if (a.noSwiping && e(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : '.' + a.noSwipingClass) [0]) n.allowClick = !0;
             else if (!a.swipeHandler || e(l).closest(a.swipeHandler) [0]) {
              s.currentX = 'touchstart' === l.type ? l.targetTouches[0].pageX : l.pageX,
              s.currentY = 'touchstart' === l.type ? l.targetTouches[0].pageY : l.pageY;
              var c = s.currentX,
              d = s.currentY,
              p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
              f = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
              if (!p || !(c <= f || c >= r.screen.width - f)) {
                if (u.extend(o, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), s.startX = c, s.startY = d, o.touchStartTime = u.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, 0 < a.threshold && (o.allowThresholdMove = !1), 'touchstart' !== l.type) {
                  var v = !0;
                  e(l.target).is(o.formElements) && (v = !1),
                  i.activeElement && e(i.activeElement).is(o.formElements) && i.activeElement !== l.target && i.activeElement.blur();
                  var h = v && n.allowTouchMove && a.touchStartPreventDefault;
                  (a.touchStartForcePreventDefault || h) && l.preventDefault()
                }
                n.emit('touchStart', l)
              }
            }
          }
        }.bind(t),
        t.onTouchMove = function (t) {
          var n = this,
          r = n.touchEventsData,
          o = n.params,
          a = n.touches,
          s = n.rtlTranslate,
          l = t;
          if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
            if (!r.isTouchEvent || 'mousemove' !== l.type) {
              var c = 'touchmove' === l.type ? l.targetTouches[0].pageX : l.pageX,
              d = 'touchmove' === l.type ? l.targetTouches[0].pageY : l.pageY;
              if (l.preventedByNestedSwiper) return a.startX = c,
              void (a.startY = d);
              if (!n.allowTouchMove) return n.allowClick = !1,
              void (r.isTouched && (u.extend(a, {
                startX: c,
                startY: d,
                currentX: c,
                currentY: d
              }), r.touchStartTime = u.now()));
              if (r.isTouchEvent && o.touchReleaseOnEdges && !o.loop) if (n.isVertical()) {
                if (d < a.startY && n.translate <= n.maxTranslate() || d > a.startY && n.translate >= n.minTranslate()) return r.isTouched = !1,
                void (r.isMoved = !1)
              } else if (c < a.startX && n.translate <= n.maxTranslate() || c > a.startX && n.translate >= n.minTranslate()) return;
              if (r.isTouchEvent && i.activeElement && l.target === i.activeElement && e(l.target).is(r.formElements)) return r.isMoved = !0,
              void (n.allowClick = !1);
              if (r.allowTouchCallbacks && n.emit('touchMove', l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                a.currentX = c,
                a.currentY = d;
                var p,
                f = a.currentX - a.startX,
                v = a.currentY - a.startY;
                if (!(n.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(v, 2)) < n.params.threshold)) if (void 0 === r.isScrolling && (n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : 25 <= f * f + v * v && (p = 180 * Math.atan2(Math.abs(v), Math.abs(f)) / Math.PI, r.isScrolling = n.isHorizontal() ? p > o.touchAngle : 90 - p > o.touchAngle)), r.isScrolling && n.emit('touchMoveOpposite', l), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                 else if (r.startMoving) {
                  n.allowClick = !1,
                  l.preventDefault(),
                  o.touchMoveStopPropagation && !o.nested && l.stopPropagation(),
                  r.isMoved || (o.loop && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger('webkitTransitionEnd transitionend'), r.allowMomentumBounce = !1, !o.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit('sliderFirstMove', l)),
                  n.emit('sliderMove', l),
                  r.isMoved = !0;
                  var h = n.isHorizontal() ? f : v;
                  a.diff = h,
                  h *= o.touchRatio,
                  s && (h = - h),
                  n.swipeDirection = 0 < h ? 'prev' : 'next',
                  r.currentTranslate = h + r.startTranslate;
                  var m = !0,
                  g = o.resistanceRatio;
                  if (o.touchReleaseOnEdges && (g = 0), 0 < h && r.currentTranslate > n.minTranslate() ? (m = !1, o.resistance && (r.currentTranslate = n.minTranslate() - 1 + Math.pow( - n.minTranslate() + r.startTranslate + h, g)))  : h < 0 && r.currentTranslate < n.maxTranslate() && (m = !1, o.resistance && (r.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - r.startTranslate - h, g))), m && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && 'next' === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && 'prev' === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < o.threshold) {
                    if (!(Math.abs(h) > o.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                    if (!r.allowThresholdMove) return r.allowThresholdMove = !0,
                    a.startX = a.currentX,
                    a.startY = a.currentY,
                    r.currentTranslate = r.startTranslate,
                    void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                  }
                  o.followFinger && ((o.freeMode || o.watchSlidesProgress || o.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), o.freeMode && (0 === r.velocities.length && r.velocities.push({
                    position: a[n.isHorizontal() ? 'startX' : 'startY'],
                    time: r.touchStartTime
                  }), r.velocities.push({
                    position: a[n.isHorizontal() ? 'currentX' : 'currentY'],
                    time: u.now()
                  })), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
                }
              }
            }
          } else r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', l)
        }.bind(t),
        t.onTouchEnd = function (e) {
          var t = this,
          n = t.touchEventsData,
          i = t.params,
          r = t.touches,
          o = t.rtlTranslate,
          a = t.$wrapperEl,
          s = t.slidesGrid,
          l = t.snapGrid,
          c = e;
          if (c.originalEvent && (c = c.originalEvent), n.allowTouchCallbacks && t.emit('touchEnd', c), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          n.isMoved = !1,
          void (n.startMoving = !1);
          i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var d,
          p = u.now(),
          f = p - n.touchStartTime;
          if (t.allowClick && (t.updateClickedSlide(c), t.emit('tap', c), f < 300 && 300 < p - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = u.nextTick(function () {
            t && !t.destroyed && t.emit('click', c)
          }, 300)), f < 300 && p - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit('doubleTap', c))), n.lastClickTime = u.now(), u.nextTick(function () {
            t.destroyed || (t.allowClick = !0)
          }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1,
          n.isMoved = !1,
          void (n.startMoving = !1);
          if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? o ? t.translate : - t.translate : - n.currentTranslate, i.freeMode) {
            if (d < - t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (d > - t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1)  : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (1 < n.velocities.length) {
                var v = n.velocities.pop(),
                h = n.velocities.pop(),
                m = v.position - h.position,
                g = v.time - h.time;
                t.velocity = m / g,
                t.velocity /= 2,
                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                (150 < g || 300 < u.now() - v.time) && (t.velocity = 0)
              } else t.velocity = 0;
              t.velocity *= i.freeModeMomentumVelocityRatio,
              n.velocities.length = 0;
              var _ = 1000 * i.freeModeMomentumRatio,
              w = t.velocity * _,
              y = t.translate + w;
              o && (y = - y);
              var b,
              x,
              k = !1,
              T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < - T && (y = t.maxTranslate() - T), b = t.maxTranslate(), k = !0, n.allowMomentumBounce = !0)  : y = t.maxTranslate(),
              i.loop && i.centeredSlides && (x = !0);
               else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), b = t.minTranslate(), k = !0, n.allowMomentumBounce = !0)  : y = t.minTranslate(),
              i.loop && i.centeredSlides && (x = !0);
               else if (i.freeModeSticky) {
                for (var E, S = 0; S < l.length; S += 1) if (l[S] > - y) {
                  E = S;
                  break
                }
                y = - (y = Math.abs(l[E] - y) < Math.abs(l[E - 1] - y) || 'next' === t.swipeDirection ? l[E] : l[E - 1])
              }
              if (x && t.once('transitionEnd', function () {
                t.loopFix()
              }), 0 !== t.velocity) _ = o ? Math.abs(( - y - t.translate) / t.velocity)  : Math.abs((y - t.translate) / t.velocity);
               else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && k ? (t.updateProgress(b), t.setTransition(_), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function () {
                t && !t.destroyed && n.allowMomentumBounce && (t.emit('momentumBounce'), t.setTransition(i.speed), t.setTranslate(b), a.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd()
                }))
              }))  : t.velocity ? (t.updateProgress(y), t.setTransition(_), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd()
              })))  : t.updateProgress(y),
              t.updateActiveIndex(),
              t.updateSlidesClasses()
            } else if (i.freeModeSticky) return void t.slideToClosest();
            (!i.freeModeMomentum || f >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          } else {
            for (var C = 0, O = t.slidesSizesGrid[0], I = 0; I < s.length; I += i.slidesPerGroup) void 0 !== s[I + i.slidesPerGroup] ? d >= s[I] && d < s[I + i.slidesPerGroup] && (O = s[(C = I) + i.slidesPerGroup] - s[I])  : d >= s[I] && (C = I, O = s[s.length - 1] - s[s.length - 2]);
            var q = (d - s[C]) / O;
            if (f > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              'next' === t.swipeDirection && (q >= i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup)  : t.slideTo(C)),
              'prev' === t.swipeDirection && (q > 1 - i.longSwipesRatio ? t.slideTo(C + i.slidesPerGroup)  : t.slideTo(C))
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              'next' === t.swipeDirection && t.slideTo(C + i.slidesPerGroup),
              'prev' === t.swipeDirection && t.slideTo(C)
            }
          }
        }.bind(t),
        t.onClick = function (e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }.bind(t);
        var c = 'container' === o.touchEventsTarget ? s : l,
        d = !!o.nested;
        if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
          if (p.touch) {
            var f = !('touchstart' !== a.start || !p.passiveListener || !o.passiveListeners) && {
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
          }(o.simulateTouch && !k.ios && !k.android || o.simulateTouch && !p.touch && k.ios) && (c.addEventListener('mousedown', t.onTouchStart, !1), i.addEventListener('mousemove', t.onTouchMove, d), i.addEventListener('mouseup', t.onTouchEnd, !1))
        } else c.addEventListener(a.start, t.onTouchStart, !1),
        i.addEventListener(a.move, t.onTouchMove, d),
        i.addEventListener(a.end, t.onTouchEnd, !1);
        (o.preventClicks || o.preventClicksPropagation) && c.addEventListener('click', t.onClick, !0),
        t.on(k.ios || k.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', n, !0)
      },
      detachEvents: function () {
        var e = this,
        t = e.params,
        r = e.touchEvents,
        o = e.el,
        a = e.wrapperEl,
        s = 'container' === t.touchEventsTarget ? o : a,
        l = !!t.nested;
        if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
          if (p.touch) {
            var c = !('onTouchStart' !== r.start || !p.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(r.start, e.onTouchStart, c),
            s.removeEventListener(r.move, e.onTouchMove, l),
            s.removeEventListener(r.end, e.onTouchEnd, c)
          }(t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !p.touch && k.ios) && (s.removeEventListener('mousedown', e.onTouchStart, !1), i.removeEventListener('mousemove', e.onTouchMove, l), i.removeEventListener('mouseup', e.onTouchEnd, !1))
        } else s.removeEventListener(r.start, e.onTouchStart, !1),
        i.removeEventListener(r.move, e.onTouchMove, l),
        i.removeEventListener(r.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener('click', e.onClick, !0),
        e.off(k.ios || k.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', n)
      }
    },
    breakpoints: {
      setBreakpoint: function () {
        var e = this,
        t = e.activeIndex,
        n = e.initialized,
        i = e.loopedSlides;
        void 0 === i && (i = 0);
        var r = e.params,
        o = r.breakpoints;
        if (o && (!o || 0 !== Object.keys(o).length)) {
          var a = e.getBreakpoint(o);
          if (a && e.currentBreakpoint !== a) {
            var s = a in o ? o[a] : void 0;
            s && [
              'slidesPerView',
              'spaceBetween',
              'slidesPerGroup'
            ].forEach(function (e) {
              var t = s[e];
              void 0 !== t && (s[e] = 'slidesPerView' !== e || 'AUTO' !== t && 'auto' !== t ? 'slidesPerView' === e ? parseFloat(t)  : parseInt(t, 10)  : 'auto')
            });
            var l = s || e.originalParams,
            c = l.direction && l.direction !== r.direction,
            d = r.loop && (l.slidesPerView !== r.slidesPerView || c);
            c && n && e.changeDirection(),
            u.extend(e.params, l),
            u.extend(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }),
            e.currentBreakpoint = a,
            d && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit('breakpoint', l)
          }
        }
      },
      getBreakpoint: function (e) {
        if (e) {
          var t = !1,
          n = [
          ];
          Object.keys(e).forEach(function (e) {
            n.push(e)
          }),
          n.sort(function (e, t) {
            return parseInt(e, 10) - parseInt(t, 10)
          });
          for (var i = 0; i < n.length; i += 1) {
            var o = n[i];
            this.params.breakpointsInverse ? o <= r.innerWidth && (t = o)  : o >= r.innerWidth && !t && (t = o)
          }
          return t || 'max';
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
        n = this.rtl,
        i = this.$el,
        r = [
        ];
        r.push('initialized'),
        r.push(t.direction),
        t.freeMode && r.push('free-mode'),
        p.flexbox || r.push('no-flexbox'),
        t.autoHeight && r.push('autoheight'),
        n && r.push('rtl'),
        1 < t.slidesPerColumn && r.push('multirow'),
        k.android && r.push('android'),
        k.ios && r.push('ios'),
        (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && r.push('wp8-' + t.direction),
        r.forEach(function (n) {
          e.push(t.containerModifierClass + n)
        }),
        i.addClass(e.join(' '))
      },
      removeClasses: function () {
        var e = this.$el,
        t = this.classNames;
        e.removeClass(t.join(' '))
      }
    },
    images: {
      loadImage: function (e, t, n, i, o, a) {
        function s() {
          a && a()
        }
        var l;
        e.complete && o ? s()  : t ? ((l = new r.Image).onload = s, l.onerror = s, i && (l.sizes = i), n && (l.srcset = n), t && (l.src = t))  : s()
      },
      preloadImages: function () {
        function e() {
          null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')))
        }
        var t = this;
        t.imagesToLoad = t.$el.find('img');
        for (var n = 0; n < t.imagesToLoad.length; n += 1) {
          var i = t.imagesToLoad[n];
          t.loadImage(i, i.currentSrc || i.getAttribute('src'), i.srcset || i.getAttribute('srcset'), i.sizes || i.getAttribute('sizes'), !0, e)
        }
      }
    }
  },
  S = {
  },
  C = function (t) {
    function n() {
      for (var i, r, o, a = [
      ], s = arguments.length; s--; ) a[s] = arguments[s];
      1 === a.length && a[0].constructor && a[0].constructor === Object ? o = a[0] : (r = (i = a) [0], o = i[1]),
      o || (o = {
      }),
      o = u.extend({
      }, o),
      r && !o.el && (o.el = r),
      t.call(this, o),
      Object.keys(E).forEach(function (e) {
        Object.keys(E[e]).forEach(function (t) {
          n.prototype[t] || (n.prototype[t] = E[e][t])
        })
      });
      var l = this;
      void 0 === l.modules && (l.modules = {
      }),
      Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];
        if (t.params) {
          var n = Object.keys(t.params) [0],
          i = t.params[n];
          if ('object' != ('undefined' == typeof i ? 'undefined' : _typeof2(i)) || null === i) return;
          if (!(n in o && 'enabled' in i)) return;
          !0 === o[n] && (o[n] = {
            enabled: !0
          }),
          'object' != _typeof2(o[n]) || 'enabled' in o[n] || (o[n].enabled = !0),
          o[n] || (o[n] = {
            enabled: !1
          })
        }
      });
      var c = u.extend({
      }, T);
      l.useModulesParams(c),
      l.params = u.extend({
      }, c, S, o),
      l.originalParams = u.extend({
      }, l.params),
      l.passedParams = u.extend({
      }, o);
      var d = (l.$ = e) (l.params.el);
      if (r = d[0]) {
        if (1 < d.length) {
          var f = [
          ];
          return d.each(function (e, t) {
            var i = u.extend({
            }, o, {
              el: t
            });
            f.push(new n(i))
          }),
          f
        }
        r.swiper = l,
        d.data('swiper', l);
        var v,
        h,
        m = d.children('.' + l.params.wrapperClass);
        return u.extend(l, {
          $el: d,
          el: r,
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
          rtl: 'rtl' === r.dir.toLowerCase() || 'rtl' === d.css('direction'),
          rtlTranslate: 'horizontal' === l.params.direction && ('rtl' === r.dir.toLowerCase() || 'rtl' === d.css('direction')),
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
          touchEvents: (v = [
            'touchstart',
            'touchmove',
            'touchend'
          ], h = [
            'mousedown',
            'mousemove',
            'mouseup'
          ], p.pointerEvents ? h = [
            'pointerdown',
            'pointermove',
            'pointerup'
          ] : p.prefixedPointerEvents && (h = [
            'MSPointerDown',
            'MSPointerMove',
            'MSPointerUp'
          ]), l.touchEventsTouch = {
            start: v[0],
            move: v[1],
            end: v[2]
          }, l.touchEventsDesktop = {
            start: h[0],
            move: h[1],
            end: h[2]
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
    t && (n.__proto__ = t);
    var i = {
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
    return ((n.prototype = Object.create(t && t.prototype)).constructor = n).prototype.slidesPerViewDynamic = function () {
      var e = this,
      t = e.params,
      n = e.slides,
      i = e.slidesGrid,
      r = e.size,
      o = e.activeIndex,
      a = 1;
      if (t.centeredSlides) {
        for (var s, l = n[o].swiperSlideSize, c = o + 1; c < n.length; c += 1) n[c] && !s && (a += 1, r < (l += n[c].swiperSlideSize) && (s = !0));
        for (var d = o - 1; 0 <= d; d -= 1) n[d] && !s && (a += 1, r < (l += n[d].swiperSlideSize) && (s = !0))
      } else for (var u = o + 1; u < n.length; u += 1) i[u] - i[o] < r && (a += 1);
      return a
    },
    n.prototype.update = function () {
      function e() {
        var e = t.rtlTranslate ? - 1 * t.translate : t.translate,
        n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
        t.setTranslate(n),
        t.updateActiveIndex(),
        t.updateSlidesClasses()
      }
      var t = this;
      if (t && !t.destroyed) {
        var n = t.snapGrid,
        i = t.params;
        i.breakpoints && t.setBreakpoint(),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses(),
        t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight())  : (('auto' === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0)  : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
        i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit('update')
      }
    },
    n.prototype.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var n = this,
      i = n.params.direction;
      return e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
      e === i || 'horizontal' !== e && 'vertical' !== e || ('vertical' === i && (n.$el.removeClass(n.params.containerModifierClass + 'vertical wp8-vertical').addClass('' + n.params.containerModifierClass + e), (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + 'wp8-' + e)), 'horizontal' === i && (n.$el.removeClass(n.params.containerModifierClass + 'horizontal wp8-horizontal').addClass('' + n.params.containerModifierClass + e), (f.isIE || f.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + 'wp8-' + e)), n.params.direction = e, n.slides.each(function (t, n) {
        'vertical' === e ? n.style.width = '' : n.style.height = ''
      }), n.emit('changeDirection'), t && n.update()),
      n
    },
    n.prototype.init = function () {
      var e = this;
      e.initialized || (e.emit('beforeInit'), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit)  : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit('init'))
    },
    n.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0),
      void 0 === t && (t = !0);
      var n = this,
      i = n.params,
      r = n.$el,
      o = n.$wrapperEl,
      a = n.slides;
      return void 0 === n.params || n.destroyed || (n.emit('beforeDestroy'), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr('style'), o.removeAttr('style'), a && a.length && a.removeClass([i.slideVisibleClass,
      i.slideActiveClass,
      i.slideNextClass,
      i.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row')), n.emit('destroy'), Object.keys(n.eventsListeners).forEach(function (e) {
        n.off(e)
      }), !1 !== e && (n.$el[0].swiper = null, n.$el.data('swiper', null), u.deleteProps(n)), n.destroyed = !0),
      null
    },
    n.extendDefaults = function (e) {
      u.extend(S, e)
    },
    i.extendedDefaults.get = function () {
      return S
    },
    i.defaults.get = function () {
      return T
    },
    i.Class.get = function () {
      return t
    },
    i.$.get = function () {
      return e
    },
    Object.defineProperties(n, i),
    n
  }(v),
  O = {
    name: 'device',
    proto: {
      device: k
    },
    'static': {
      device: k
    }
  },
  I = {
    name: 'support',
    proto: {
      support: p
    },
    'static': {
      support: p
    }
  },
  q = {
    name: 'browser',
    proto: {
      browser: f
    },
    'static': {
      browser: f
    }
  },
  P = {
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
        r.addEventListener('resize', this.resize.resizeHandler),
        r.addEventListener('orientationchange', this.resize.orientationChangeHandler)
      },
      destroy: function () {
        r.removeEventListener('resize', this.resize.resizeHandler),
        r.removeEventListener('orientationchange', this.resize.orientationChangeHandler)
      }
    }
  },
  A = {
    func: r.MutationObserver || r.WebkitMutationObserver,
    attach: function (e, t) {
      void 0 === t && (t = {
      });
      var n = this,
      i = new A.func(function (e) {
        if (1 !== e.length) {
          var t = function () {
            n.emit('observerUpdate', e[0])
          };
          r.requestAnimationFrame ? r.requestAnimationFrame(t)  : r.setTimeout(t, 0)
        } else n.emit('observerUpdate', e[0])
      });
      i.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }),
      n.observer.observers.push(i)
    },
    init: function () {
      var e = this;
      if (p.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
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
        n.updateSlides(),
        n.updateProgress(),
        n.updateSlidesClasses(),
        n.lazy && n.params.lazy.enabled && n.lazy.load()
      }
      var n = this,
      i = n.params,
      r = i.slidesPerView,
      o = i.slidesPerGroup,
      a = i.centeredSlides,
      s = n.params.virtual,
      l = s.addSlidesBefore,
      c = s.addSlidesAfter,
      d = n.virtual,
      p = d.from,
      f = d.to,
      v = d.slides,
      h = d.slidesGrid,
      m = d.renderSlide,
      g = d.offset;
      n.updateActiveIndex();
      var _,
      w,
      y,
      b = n.activeIndex || 0;
      _ = n.rtlTranslate ? 'right' : n.isHorizontal() ? 'left' : 'top',
      a ? (w = Math.floor(r / 2) + o + l, y = Math.floor(r / 2) + o + c)  : (w = r + (o - 1) + l, y = o + c);
      var x = Math.max((b || 0) - y, 0),
      k = Math.min((b || 0) + w, v.length - 1),
      T = (n.slidesGrid[x] || 0) - (n.slidesGrid[0] || 0);
      if (u.extend(n.virtual, {
        from: x,
        to: k,
        offset: T,
        slidesGrid: n.slidesGrid
      }), p === x && f === k && !e) return n.slidesGrid !== h && T !== g && n.slides.css(_, T + 'px'),
      void n.updateProgress();
      if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
        offset: T,
        from: x,
        to: k,
        slides: function () {
          for (var e = [
          ], t = x; t <= k; t += 1) e.push(v[t]);
          return e
        }()
      }),
      void t();
      var E = [
      ],
      S = [
      ];
      if (e) n.$wrapperEl.find('.' + n.params.slideClass).remove();
       else for (var C = p; C <= f; C += 1) (C < x || k < C) && n.$wrapperEl.find('.' + n.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
      for (var O = 0; O < v.length; O += 1) x <= O && O <= k && (void 0 === f || e ? S.push(O)  : (f < O && S.push(O), O < p && E.push(O)));
      S.forEach(function (e) {
        n.$wrapperEl.append(m(v[e], e))
      }),
      E.sort(function (e, t) {
        return t - e
      }).forEach(function (e) {
        n.$wrapperEl.prepend(m(v[e], e))
      }),
      n.$wrapperEl.children('.swiper-slide').css(_, T + 'px'),
      t()
    },
    renderSlide: function (t, n) {
      var i = this,
      r = i.params.virtual;
      if (r.cache && i.virtual.cache[n]) return i.virtual.cache[n];
      var o = e(r.renderSlide ? r.renderSlide.call(i, t, n)  : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + '</div>');
      return o.attr('data-swiper-slide-index') || o.attr('data-swiper-slide-index', n),
      r.cache && (i.virtual.cache[n] = o),
      o
    },
    appendSlide: function (e) {
      if ('object' == ('undefined' == typeof e ? 'undefined' : _typeof2(e)) && 'length' in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
       else this.virtual.slides.push(e);
      this.virtual.update(!0)
    },
    prependSlide: function (e) {
      var t = this,
      n = t.activeIndex,
      i = n + 1,
      r = 1;
      if (Array.isArray(e)) {
        for (var o = 0; o < e.length; o += 1) e[o] && t.virtual.slides.unshift(e[o]);
        i = n + e.length,
        r = e.length
      } else t.virtual.slides.unshift(e);
      if (t.params.virtual.cache) {
        var a = t.virtual.cache,
        s = {
        };
        Object.keys(a).forEach(function (e) {
          s[parseInt(e, 10) + r] = a[e]
        }),
        t.virtual.cache = s
      }
      t.virtual.update(!0),
      t.slideTo(i, 0)
    },
    removeSlide: function (e) {
      var t = this;
      if (null != e) {
        var n = t.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1),
        t.params.virtual.cache && delete t.virtual.cache[e[i]],
        e[i] < n && (n -= 1),
        n = Math.max(n, 0);
         else t.virtual.slides.splice(e, 1),
        t.params.virtual.cache && delete t.virtual.cache[e],
        e < n && (n -= 1),
        n = Math.max(n, 0);
        t.virtual.update(!0),
        t.slideTo(n, 0)
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
  L = {
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
  D = {
    handle: function (e) {
      var t = this,
      n = t.rtlTranslate,
      o = e;
      o.originalEvent && (o = o.originalEvent);
      var a = o.keyCode || o.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a)) return !1;
      if (!(o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || i.activeElement && i.activeElement.nodeName && ('input' === i.activeElement.nodeName.toLowerCase() || 'textarea' === i.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
          var s = !1;
          if (0 < t.$el.parents('.' + t.params.slideClass).length && 0 === t.$el.parents('.' + t.params.slideActiveClass).length) return;
          var l = r.innerWidth,
          c = r.innerHeight,
          d = t.$el.offset();
          n && (d.left -= t.$el[0].scrollLeft);
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
        t.isHorizontal() ? (37 !== a && 39 !== a || (o.preventDefault ? o.preventDefault()  : o.returnValue = !1), (39 === a && !n || 37 === a && n) && t.slideNext(), (37 === a && !n || 39 === a && n) && t.slidePrev())  : (38 !== a && 40 !== a || (o.preventDefault ? o.preventDefault()  : o.returnValue = !1), 40 === a && t.slideNext(), 38 === a && t.slidePrev()),
        t.emit('keyPress', a)
      }
    },
    enable: function () {
      this.keyboard.enabled || (e(i).on('keydown', this.keyboard.handle), this.keyboard.enabled = !0)
    },
    disable: function () {
      this.keyboard.enabled && (e(i).off('keydown', this.keyboard.handle), this.keyboard.enabled = !1)
    }
  },
  j = {
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
          enable: D.enable.bind(this),
          disable: D.disable.bind(this),
          handle: D.handle.bind(this)
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
    event: - 1 < r.navigator.userAgent.indexOf('firefox') ? 'DOMMouseScroll' : function () {
      var e = 'onwheel',
      t = e in i;
      if (!t) {
        var n = i.createElement('div');
        n.setAttribute(e, 'return;'),
        t = 'function' == typeof n[e]
      }
      return !t && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature('', '') && (t = i.implementation.hasFeature('Events.wheel', '3.0')),
      t
    }() ? 'wheel' : 'mousewheel',
    normalize: function (e) {
      var t = 0,
      n = 0,
      i = 0,
      r = 0;
      return 'detail' in e && (n = e.detail),
      'wheelDelta' in e && (n = - e.wheelDelta / 120),
      'wheelDeltaY' in e && (n = - e.wheelDeltaY / 120),
      'wheelDeltaX' in e && (t = - e.wheelDeltaX / 120),
      'axis' in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0),
      i = 10 * t,
      r = 10 * n,
      'deltaY' in e && (r = e.deltaY),
      'deltaX' in e && (i = e.deltaX),
      (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40)  : (i *= 800, r *= 800)),
      i && !t && (t = i < 1 ? - 1 : 1),
      r && !n && (n = r < 1 ? - 1 : 1),
      {
        spinX: t,
        spinY: n,
        pixelX: i,
        pixelY: r
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
      n = this,
      i = n.params.mousewheel;
      if (!n.mouseEntered && !i.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var o = 0,
      a = n.rtlTranslate ? - 1 : 1,
      s = N.normalize(t);
      if (i.forceToAxis) if (n.isHorizontal()) {
        if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
        o = s.pixelX * a
      } else {
        if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
        o = s.pixelY
      } else o = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? - s.pixelX * a : - s.pixelY;
      if (0 === o) return !0;
      if (i.invert && (o = - o), n.params.freeMode) {
        n.params.loop && n.loopFix();
        var l = n.getTranslate() + o * i.sensitivity,
        c = n.isBeginning,
        d = n.isEnd;
        if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !d && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = u.nextTick(function () {
          n.slideToClosest()
        }, 300)), n.emit('scroll', t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
      } else {
        if (60 < u.now() - n.mousewheel.lastScrollTime) if (o < 0) if (n.isEnd && !n.params.loop || n.animating) {
          if (i.releaseOnEdges) return !0
        } else n.slideNext(),
        n.emit('scroll', t);
         else if (n.isBeginning && !n.params.loop || n.animating) {
          if (i.releaseOnEdges) return !0
        } else n.slidePrev(),
        n.emit('scroll', t);
        n.mousewheel.lastScrollTime = (new r.Date).getTime()
      }
      return t.preventDefault ? t.preventDefault()  : t.returnValue = !1,
      !1
    },
    enable: function () {
      var t = this;
      if (!N.event) return !1;
      if (t.mousewheel.enabled) return !1;
      var n = t.$el;
      return 'container' !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
      n.on('mouseenter', t.mousewheel.handleMouseEnter),
      n.on('mouseleave', t.mousewheel.handleMouseLeave),
      n.on(N.event, t.mousewheel.handle),
      t.mousewheel.enabled = !0
    },
    disable: function () {
      var t = this;
      if (!N.event) return !1;
      if (!t.mousewheel.enabled) return !1;
      var n = t.$el;
      return 'container' !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
      n.off(N.event, t.mousewheel.handle),
      !(t.mousewheel.enabled = !1)
    }
  },
  R = {
    update: function () {
      var e = this,
      t = e.params.navigation;
      if (!e.params.loop) {
        var n = e.navigation,
        i = n.$nextEl,
        r = n.$prevEl;
        r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass)  : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass)),
        i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass)  : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](t.lockClass))
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
      n,
      i = this,
      r = i.params.navigation;
      (r.nextEl || r.prevEl) && (r.nextEl && (t = e(r.nextEl), i.params.uniqueNavElements && 'string' == typeof r.nextEl && 1 < t.length && 1 === i.$el.find(r.nextEl).length && (t = i.$el.find(r.nextEl))), r.prevEl && (n = e(r.prevEl), i.params.uniqueNavElements && 'string' == typeof r.prevEl && 1 < n.length && 1 === i.$el.find(r.prevEl).length && (n = i.$el.find(r.prevEl))), t && 0 < t.length && t.on('click', i.navigation.onNextClick), n && 0 < n.length && n.on('click', i.navigation.onPrevClick), u.extend(i.navigation, {
        $nextEl: t,
        nextEl: t && t[0],
        $prevEl: n,
        prevEl: n && n[0]
      }))
    },
    destroy: function () {
      var e = this,
      t = e.navigation,
      n = t.$nextEl,
      i = t.$prevEl;
      n && n.length && (n.off('click', e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)),
      i && i.length && (i.off('click', e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
    }
  },
  z = {
    update: function () {
      var t = this,
      n = t.rtl,
      i = t.params.pagination;
      if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
        var r,
        o = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        a = t.pagination.$el,
        s = t.params.loop ? Math.ceil((o - 2 * t.loopedSlides) / t.params.slidesPerGroup)  : t.snapGrid.length;
        if (t.params.loop ? ((r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > o - 1 - 2 * t.loopedSlides && (r -= o - 2 * t.loopedSlides), s - 1 < r && (r -= s), r < 0 && 'bullets' !== t.params.paginationType && (r = s + r))  : r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, 'bullets' === i.type && t.pagination.bullets && 0 < t.pagination.bullets.length) {
          var l,
          c,
          d,
          u = t.pagination.bullets;
          if (i.dynamicBullets && (t.pagination.bulletSize = u.eq(0) [t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0), a.css(t.isHorizontal() ? 'width' : 'height', t.pagination.bulletSize * (i.dynamicMainBullets + 4) + 'px'), 1 < i.dynamicMainBullets && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += r - t.previousIndex, t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = r - t.pagination.dynamicBulletIndex, d = ((c = l + (Math.min(u.length, i.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(i.bulletActiveClass + ' ' + i.bulletActiveClass + '-next ' + i.bulletActiveClass + '-next-next ' + i.bulletActiveClass + '-prev ' + i.bulletActiveClass + '-prev-prev ' + i.bulletActiveClass + '-main'), 1 < a.length) u.each(function (t, n) {
            var o = e(n),
            a = o.index();
            a === r && o.addClass(i.bulletActiveClass),
            i.dynamicBullets && (l <= a && a <= c && o.addClass(i.bulletActiveClass + '-main'), a === l && o.prev().addClass(i.bulletActiveClass + '-prev').prev().addClass(i.bulletActiveClass + '-prev-prev'), a === c && o.next().addClass(i.bulletActiveClass + '-next').next().addClass(i.bulletActiveClass + '-next-next'))
          });
           else if (u.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
            for (var p = u.eq(l), f = u.eq(c), v = l; v <= c; v += 1) u.eq(v).addClass(i.bulletActiveClass + '-main');
            p.prev().addClass(i.bulletActiveClass + '-prev').prev().addClass(i.bulletActiveClass + '-prev-prev'),
            f.next().addClass(i.bulletActiveClass + '-next').next().addClass(i.bulletActiveClass + '-next-next')
          }
          if (i.dynamicBullets) {
            var h = Math.min(u.length, i.dynamicMainBullets + 4),
            m = (t.pagination.bulletSize * h - t.pagination.bulletSize) / 2 - d * t.pagination.bulletSize,
            g = n ? 'right' : 'left';
            u.css(t.isHorizontal() ? g : 'top', m + 'px')
          }
        }
        if ('fraction' === i.type && (a.find('.' + i.currentClass).text(i.formatFractionCurrent(r + 1)), a.find('.' + i.totalClass).text(i.formatFractionTotal(s))), 'progressbar' === i.type) {
          var _;
          _ = i.progressbarOpposite ? t.isHorizontal() ? 'vertical' : 'horizontal' : t.isHorizontal() ? 'horizontal' : 'vertical';
          var w = (r + 1) / s,
          y = 1,
          b = 1;
          'horizontal' === _ ? y = w : b = w,
          a.find('.' + i.progressbarFillClass).transform('translate3d(0,0,0) scaleX(' + y + ') scaleY(' + b + ')').transition(t.params.speed)
        }
        'custom' === i.type && i.renderCustom ? (a.html(i.renderCustom(t, r + 1, s)), t.emit('paginationRender', t, a[0]))  : t.emit('paginationUpdate', t, a[0]),
        a[t.params.watchOverflow && t.isLocked ? 'addClass' : 'removeClass'](i.lockClass)
      }
    },
    render: function () {
      var e = this,
      t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
        i = e.pagination.$el,
        r = '';
        if ('bullets' === t.type) {
          for (var o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)  : e.snapGrid.length, a = 0; a < o; a += 1) r += t.renderBullet ? t.renderBullet.call(e, a, t.bulletClass)  : '<' + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + '>';
          i.html(r),
          e.pagination.bullets = i.find('.' + t.bulletClass)
        }
        'fraction' === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass)  : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)),
        'progressbar' === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass)  : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)),
        'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0])
      }
    },
    init: function () {
      var t = this,
      n = t.params.pagination;
      if (n.el) {
        var i = e(n.el);
        0 !== i.length && (t.params.uniqueNavElements && 'string' == typeof n.el && 1 < i.length && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)), 'bullets' === n.type && n.clickable && i.addClass(n.clickableClass), i.addClass(n.modifierClass + n.type), 'bullets' === n.type && n.dynamicBullets && (i.addClass('' + n.modifierClass + n.type + '-dynamic'), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), 'progressbar' === n.type && n.progressbarOpposite && i.addClass(n.progressbarOppositeClass), n.clickable && i.on('click', '.' + n.bulletClass, function (n) {
          n.preventDefault();
          var i = e(this).index() * t.params.slidesPerGroup;
          t.params.loop && (i += t.loopedSlides),
          t.slideTo(i)
        }), u.extend(t.pagination, {
          $el: i,
          el: i[0]
        }))
      }
    },
    destroy: function () {
      var e = this,
      t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var n = e.pagination.$el;
        n.removeClass(t.hiddenClass),
        n.removeClass(t.modifierClass + t.type),
        e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && n.off('click', '.' + t.bulletClass)
      }
    }
  },
  U = {
    setTranslate: function () {
      var e = this;
      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
        n = e.rtlTranslate,
        i = e.progress,
        r = t.dragSize,
        o = t.trackSize,
        a = t.$dragEl,
        s = t.$el,
        l = e.params.scrollbar,
        c = r,
        d = (o - r) * i;
        n ? 0 < (d = - d) ? (c = r - d, d = 0)  : o < - d + r && (c = o + d)  : d < 0 ? (c = r + d, d = 0)  : o < d + r && (c = o - d),
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
        n = t.$dragEl,
        i = t.$el;
        n[0].style.width = '',
        n[0].style.height = '';
        var r,
        o = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
        a = e.size / e.virtualSize,
        s = a * (o / e.size);
        r = 'auto' === e.params.scrollbar.dragSize ? o * a : parseInt(e.params.scrollbar.dragSize, 10),
        e.isHorizontal() ? n[0].style.width = r + 'px' : n[0].style.height = r + 'px',
        i[0].style.display = 1 <= a ? 'none' : '',
        e.params.scrollbar.hide && (i[0].style.opacity = 0),
        u.extend(t, {
          trackSize: o,
          divider: a,
          moveDivider: s,
          dragSize: r
        }),
        t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](e.params.scrollbar.lockClass)
      }
    },
    setDragPosition: function (e) {
      var t,
      n = this,
      i = n.scrollbar,
      r = n.rtlTranslate,
      o = i.$el,
      a = i.dragSize,
      s = i.trackSize;
      t = ((n.isHorizontal() ? 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - o.offset() [n.isHorizontal() ? 'left' : 'top'] - a / 2) / (s - a),
      t = Math.max(Math.min(t, 1), 0),
      r && (t = 1 - t);
      var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
      n.updateProgress(l),
      n.setTranslate(l),
      n.updateActiveIndex(),
      n.updateSlidesClasses()
    },
    onDragStart: function (e) {
      var t = this,
      n = t.params.scrollbar,
      i = t.scrollbar,
      r = t.$wrapperEl,
      o = i.$el,
      a = i.$dragEl;
      t.scrollbar.isTouched = !0,
      e.preventDefault(),
      e.stopPropagation(),
      r.transition(100),
      a.transition(100),
      i.setDragPosition(e),
      clearTimeout(t.scrollbar.dragTimeout),
      o.transition(0),
      n.hide && o.css('opacity', 1),
      t.emit('scrollbarDragStart', e)
    },
    onDragMove: function (e) {
      var t = this.scrollbar,
      n = this.$wrapperEl,
      i = t.$el,
      r = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit('scrollbarDragMove', e))
    },
    onDragEnd: function (e) {
      var t = this,
      n = t.params.scrollbar,
      i = t.scrollbar.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = u.nextTick(function () {
        i.css('opacity', 0),
        i.transition(400)
      }, 1000)), t.emit('scrollbarDragEnd', e), n.snapOnRelease && t.slideToClosest())
    },
    enableDraggable: function () {
      var e = this;
      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
        n = e.touchEventsTouch,
        r = e.touchEventsDesktop,
        o = e.params,
        a = t.$el[0],
        s = !(!p.passiveListener || !o.passiveListeners) && {
          passive: !1,
          capture: !1
        },
        l = !(!p.passiveListener || !o.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (a.addEventListener(n.start, e.scrollbar.onDragStart, s), a.addEventListener(n.move, e.scrollbar.onDragMove, s), a.addEventListener(n.end, e.scrollbar.onDragEnd, l))  : (a.addEventListener(r.start, e.scrollbar.onDragStart, s), i.addEventListener(r.move, e.scrollbar.onDragMove, s), i.addEventListener(r.end, e.scrollbar.onDragEnd, l))
      }
    },
    disableDraggable: function () {
      var e = this;
      if (e.params.scrollbar.el) {
        var t = e.scrollbar,
        n = e.touchEventsTouch,
        r = e.touchEventsDesktop,
        o = e.params,
        a = t.$el[0],
        s = !(!p.passiveListener || !o.passiveListeners) && {
          passive: !1,
          capture: !1
        },
        l = !(!p.passiveListener || !o.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), a.removeEventListener(n.move, e.scrollbar.onDragMove, s), a.removeEventListener(n.end, e.scrollbar.onDragEnd, l))  : (a.removeEventListener(r.start, e.scrollbar.onDragStart, s), i.removeEventListener(r.move, e.scrollbar.onDragMove, s), i.removeEventListener(r.end, e.scrollbar.onDragEnd, l))
      }
    },
    init: function () {
      var t = this;
      if (t.params.scrollbar.el) {
        var n = t.scrollbar,
        i = t.$el,
        r = t.params.scrollbar,
        o = e(r.el);
        t.params.uniqueNavElements && 'string' == typeof r.el && 1 < o.length && 1 === i.find(r.el).length && (o = i.find(r.el));
        var a = o.find('.' + t.params.scrollbar.dragClass);
        0 === a.length && (a = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), o.append(a)),
        u.extend(n, {
          $el: o,
          el: o[0],
          $dragEl: a,
          dragEl: a[0]
        }),
        r.draggable && n.enableDraggable()
      }
    },
    destroy: function () {
      this.scrollbar.disableDraggable()
    }
  },
  B = {
    setTransform: function (t, n) {
      var i = this.rtl,
      r = e(t),
      o = i ? - 1 : 1,
      a = r.attr('data-swiper-parallax') || '0',
      s = r.attr('data-swiper-parallax-x'),
      l = r.attr('data-swiper-parallax-y'),
      c = r.attr('data-swiper-parallax-scale'),
      d = r.attr('data-swiper-parallax-opacity');
      if (s || l ? (s = s || '0', l = l || '0')  : this.isHorizontal() ? (s = a, l = '0')  : (l = a, s = '0'), s = 0 <= s.indexOf('%') ? parseInt(s, 10) * n * o + '%' : s * n * o + 'px', l = 0 <= l.indexOf('%') ? parseInt(l, 10) * n + '%' : l * n + 'px', null != d) {
        var u = d - (d - 1) * (1 - Math.abs(n));
        r[0].style.opacity = u
      }
      if (null == c) r.transform('translate3d(' + s + ', ' + l + ', 0px)');
       else {
        var p = c - (c - 1) * (1 - Math.abs(n));
        r.transform('translate3d(' + s + ', ' + l + ', 0px) scale(' + p + ')')
      }
    },
    setTranslate: function () {
      var t = this,
      n = t.$el,
      i = t.slides,
      r = t.progress,
      o = t.snapGrid;
      n.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, n) {
        t.parallax.setTransform(n, r)
      }),
      i.each(function (n, i) {
        var a = i.progress;
        1 < t.params.slidesPerGroup && 'auto' !== t.params.slidesPerView && (a += Math.ceil(n / 2) - r * (o.length - 1)),
        a = Math.min(Math.max(a, - 1), 1),
        e(i).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (e, n) {
          t.parallax.setTransform(n, a)
        })
      })
    },
    setTransition: function (t) {
      void 0 === t && (t = this.params.speed),
      this.$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (n, i) {
        var r = e(i),
        o = parseInt(r.attr('data-swiper-parallax-duration'), 10) || t;
        0 === t && (o = 0),
        r.transition(o)
      })
    }
  },
  V = {
    getDistanceBetweenTouches: function (e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
      n = e.targetTouches[0].pageY,
      i = e.targetTouches[1].pageX,
      r = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
    },
    onGestureStart: function (t) {
      var n = this,
      i = n.params.zoom,
      r = n.zoom,
      o = r.gesture;
      if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !p.gestures) {
        if ('touchstart' !== t.type || 'touchstart' === t.type && t.targetTouches.length < 2) return;
        r.fakeGestureTouched = !0,
        o.scaleStart = V.getDistanceBetweenTouches(t)
      }
      o.$slideEl && o.$slideEl.length || (o.$slideEl = e(t.target).closest('.swiper-slide'), 0 === o.$slideEl.length && (o.$slideEl = n.slides.eq(n.activeIndex)), o.$imageEl = o.$slideEl.find('img, svg, canvas'), o.$imageWrapEl = o.$imageEl.parent('.' + i.containerClass), o.maxRatio = o.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio, 0 !== o.$imageWrapEl.length) ? (o.$imageEl.transition(0), n.zoom.isScaling = !0)  : o.$imageEl = void 0;
    },
    onGestureChange: function (e) {
      var t = this.params.zoom,
      n = this.zoom,
      i = n.gesture;
      if (!p.gestures) {
        if ('touchmove' !== e.type || 'touchmove' === e.type && e.targetTouches.length < 2) return;
        n.fakeGestureMoved = !0,
        i.scaleMove = V.getDistanceBetweenTouches(e)
      }
      i.$imageEl && 0 !== i.$imageEl.length && (n.scale = p.gestures ? e.scale * n.currentScale : i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, 0.5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, 0.5)), i.$imageEl.transform('translate3d(0,0,0) scale(' + n.scale + ')'))
    },
    onGestureEnd: function (e) {
      var t = this.params.zoom,
      n = this.zoom,
      i = n.gesture;
      if (!p.gestures) {
        if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
        if ('touchend' !== e.type || 'touchend' === e.type && e.changedTouches.length < 2 && !k.android) return;
        n.fakeGestureTouched = !1,
        n.fakeGestureMoved = !1
      }
      i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform('translate3d(0,0,0) scale(' + n.scale + ')'), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
    },
    onTouchStart: function (e) {
      var t = this.zoom,
      n = t.gesture,
      i = t.image;
      n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (k.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY))
    },
    onTouchMove: function (e) {
      var t = this,
      n = t.zoom,
      i = n.gesture,
      r = n.image,
      o = n.velocity;
      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
        r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = u.getTranslate(i.$imageWrapEl[0], 'x') || 0, r.startY = u.getTranslate(i.$imageWrapEl[0], 'y') || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = - r.startX, r.startY = - r.startY));
        var a = r.width * n.scale,
        s = r.height * n.scale;
        if (!(a < i.slideWidth && s < i.slideHeight)) {
          if (r.minX = Math.min(i.slideWidth / 2 - a / 2, 0), r.maxX = - r.minX, r.minY = Math.min(i.slideHeight / 2 - s / 2, 0), r.maxY = - r.minY, r.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void (r.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void (r.isTouched = !1)
          }
          e.preventDefault(),
          e.stopPropagation(),
          r.isMoved = !0,
          r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX,
          r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY,
          r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
          r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
          r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
          r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
          o.prevPositionX || (o.prevPositionX = r.touchesCurrent.x),
          o.prevPositionY || (o.prevPositionY = r.touchesCurrent.y),
          o.prevTime || (o.prevTime = Date.now()),
          o.x = (r.touchesCurrent.x - o.prevPositionX) / (Date.now() - o.prevTime) / 2,
          o.y = (r.touchesCurrent.y - o.prevPositionY) / (Date.now() - o.prevTime) / 2,
          Math.abs(r.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0),
          Math.abs(r.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0),
          o.prevPositionX = r.touchesCurrent.x,
          o.prevPositionY = r.touchesCurrent.y,
          o.prevTime = Date.now(),
          i.$imageWrapEl.transform('translate3d(' + r.currentX + 'px, ' + r.currentY + 'px,0)')
        }
      }
    },
    onTouchEnd: function () {
      var e = this.zoom,
      t = e.gesture,
      n = e.image,
      i = e.velocity;
      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!n.isTouched || !n.isMoved) return n.isTouched = !1,
        void (n.isMoved = !1);
        n.isTouched = !1,
        n.isMoved = !1;
        var r = 300,
        o = 300,
        a = i.x * r,
        s = n.currentX + a,
        l = i.y * o,
        c = n.currentY + l;
        0 !== i.x && (r = Math.abs((s - n.currentX) / i.x)),
        0 !== i.y && (o = Math.abs((c - n.currentY) / i.y));
        var d = Math.max(r, o);
        n.currentX = s,
        n.currentY = c;
        var u = n.width * e.scale,
        p = n.height * e.scale;
        n.minX = Math.min(t.slideWidth / 2 - u / 2, 0),
        n.maxX = - n.minX,
        n.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
        n.maxY = - n.minY,
        n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX),
        n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY),
        t.$imageWrapEl.transition(d).transform('translate3d(' + n.currentX + 'px, ' + n.currentY + 'px,0)')
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
      var n,
      i,
      r,
      o,
      a,
      s,
      l,
      c,
      d,
      u,
      p,
      f,
      v,
      h,
      m,
      g,
      _ = this,
      w = _.zoom,
      y = _.params.zoom,
      b = w.gesture,
      x = w.image;
      b.$slideEl || (b.$slideEl = _.clickedSlide ? e(_.clickedSlide)  : _.slides.eq(_.activeIndex), b.$imageEl = b.$slideEl.find('img, svg, canvas'), b.$imageWrapEl = b.$imageEl.parent('.' + y.containerClass)),
      b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass('' + y.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (n = 'touchend' === t.type ? t.changedTouches[0].pageX : t.pageX, i = 'touchend' === t.type ? t.changedTouches[0].pageY : t.pageY)  : (n = x.touchesStart.x, i = x.touchesStart.y), w.scale = b.$imageWrapEl.attr('data-swiper-zoom') || y.maxRatio, w.currentScale = b.$imageWrapEl.attr('data-swiper-zoom') || y.maxRatio, t ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, r = b.$slideEl.offset().left + m / 2 - n, o = b.$slideEl.offset().top + g / 2 - i, l = b.$imageEl[0].offsetWidth, c = b.$imageEl[0].offsetHeight, d = l * w.scale, u = c * w.scale, v = - (p = Math.min(m / 2 - d / 2, 0)), h = - (f = Math.min(g / 2 - u / 2, 0)), (a = r * w.scale) < p && (a = p), v < a && (a = v), (s = o * w.scale) < f && (s = f), h < s && (s = h))  : s = a = 0, b.$imageWrapEl.transition(300).transform('translate3d(' + a + 'px, ' + s + 'px,0)'), b.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + w.scale + ')'))
    },
    out: function () {
      var t = this,
      n = t.zoom,
      i = t.params.zoom,
      r = n.gesture;
      r.$slideEl || (r.$slideEl = t.clickedSlide ? e(t.clickedSlide)  : t.slides.eq(t.activeIndex), r.$imageEl = r.$slideEl.find('img, svg, canvas'), r.$imageWrapEl = r.$imageEl.parent('.' + i.containerClass)),
      r.$imageEl && 0 !== r.$imageEl.length && (n.scale = 1, n.currentScale = 1, r.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'), r.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'), r.$slideEl.removeClass('' + i.zoomedSlideClass), r.$slideEl = void 0)
    },
    enable: function () {
      var e = this,
      t = e.zoom;
      if (!t.enabled) {
        t.enabled = !0;
        var n = !('touchstart' !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.gestures ? (e.$wrapperEl.on('gesturestart', '.swiper-slide', t.onGestureStart, n), e.$wrapperEl.on('gesturechange', '.swiper-slide', t.onGestureChange, n), e.$wrapperEl.on('gestureend', '.swiper-slide', t.onGestureEnd, n))  : 'touchstart' === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, '.swiper-slide', t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, '.swiper-slide', t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, n)),
        e.$wrapperEl.on(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove)
      }
    },
    disable: function () {
      var e = this,
      t = e.zoom;
      if (t.enabled) {
        e.zoom.enabled = !1;
        var n = !('touchstart' !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.gestures ? (e.$wrapperEl.off('gesturestart', '.swiper-slide', t.onGestureStart, n), e.$wrapperEl.off('gesturechange', '.swiper-slide', t.onGestureChange, n), e.$wrapperEl.off('gestureend', '.swiper-slide', t.onGestureEnd, n))  : 'touchstart' === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, '.swiper-slide', t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, '.swiper-slide', t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, '.swiper-slide', t.onGestureEnd, n)),
        e.$wrapperEl.off(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove)
      }
    }
  },
  W = {
    loadInSlide: function (t, n) {
      void 0 === n && (n = !0);
      var i = this,
      r = i.params.lazy;
      if (void 0 !== t && 0 !== i.slides.length) {
        var o = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children('.' + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]')  : i.slides.eq(t),
        a = o.find('.' + r.elementClass + ':not(.' + r.loadedClass + '):not(.' + r.loadingClass + ')');
        !o.hasClass(r.elementClass) || o.hasClass(r.loadedClass) || o.hasClass(r.loadingClass) || (a = a.add(o[0])),
        0 !== a.length && a.each(function (t, a) {
          var s = e(a);
          s.addClass(r.loadingClass);
          var l = s.attr('data-background'),
          c = s.attr('data-src'),
          d = s.attr('data-srcset'),
          u = s.attr('data-sizes');
          i.loadImage(s[0], c || l, d, u, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (s.css('background-image', 'url("' + l + '")'), s.removeAttr('data-background'))  : (d && (s.attr('srcset', d), s.removeAttr('data-srcset')), u && (s.attr('sizes', u), s.removeAttr('data-sizes')), c && (s.attr('src', c), s.removeAttr('data-src'))), s.addClass(r.loadedClass).removeClass(r.loadingClass), o.find('.' + r.preloaderClass).remove(), i.params.loop && n) {
                var e = o.attr('data-swiper-slide-index');
                if (o.hasClass(i.params.slideDuplicateClass)) {
                  var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ')');
                  i.lazy.loadInSlide(t.index(), !1)
                } else {
                  var a = i.$wrapperEl.children('.' + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(a.index(), !1)
                }
              }
              i.emit('lazyImageReady', o[0], s[0])
            }
          }),
          i.emit('lazyImageLoad', o[0], s[0])
        })
      }
    },
    load: function () {
      function t(e) {
        if (l) {
          if (r.children('.' + o.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
        } else if (a[e]) return !0;
        return !1
      }
      function n(t) {
        return l ? e(t).attr('data-swiper-slide-index')  : e(t).index()
      }
      var i = this,
      r = i.$wrapperEl,
      o = i.params,
      a = i.slides,
      s = i.activeIndex,
      l = i.virtual && o.virtual.enabled,
      c = o.lazy,
      d = o.slidesPerView;
      if ('auto' === d && (d = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) r.children('.' + o.slideVisibleClass).each(function (t, n) {
        var r = l ? e(n).attr('data-swiper-slide-index')  : e(n).index();
        i.lazy.loadInSlide(r)
      });
       else if (1 < d) for (var u = s; u < s + d; u += 1) t(u) && i.lazy.loadInSlide(u);
       else i.lazy.loadInSlide(s);
      if (c.loadPrevNext) if (1 < d || c.loadPrevNextAmount && 1 < c.loadPrevNextAmount) {
        for (var p = c.loadPrevNextAmount, f = d, v = Math.min(s + f + Math.max(p, f), a.length), h = Math.max(s - Math.max(f, p), 0), m = s + d; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
        for (var g = h; g < s; g += 1) t(g) && i.lazy.loadInSlide(g)
      } else {
        var _ = r.children('.' + o.slideNextClass);
        0 < _.length && i.lazy.loadInSlide(n(_));
        var w = r.children('.' + o.slidePrevClass);
        0 < w.length && i.lazy.loadInSlide(n(w))
      }
    }
  },
  F = {
    LinearSpline: function (e, t) {
      var n,
      i,
      r,
      o,
      a,
      s = function (e, t) {
        for (i = - 1, n = e.length; 1 < n - i; ) e[r = n + i >> 1] <= t ? i = r : n = r;
        return n
      };
      return this.x = e,
      this.y = t,
      this.lastIndex = e.length - 1,
      this.interpolate = function (e) {
        return e ? (a = s(this.x, e), o = a - 1, (e - this.x[o]) * (this.y[a] - this.y[o]) / (this.x[a] - this.x[o]) + this.y[o])  : 0
      },
      this
    },
    getInterpolateFunction: function (e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new F.LinearSpline(t.slidesGrid, e.slidesGrid)  : new F.LinearSpline(t.snapGrid, e.snapGrid))
    },
    setTranslate: function (e, t) {
      function n(e) {
        var t = o.rtlTranslate ? - o.translate : o.translate;
        'slide' === o.params.controller.by && (o.controller.getInterpolateFunction(e), r = - o.controller.spline.interpolate( - t)),
        r && 'container' !== o.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate()), r = (t - o.minTranslate()) * i + e.minTranslate()),
        o.params.controller.inverse && (r = e.maxTranslate() - r),
        e.updateProgress(r),
        e.setTranslate(r, o),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
      }
      var i,
      r,
      o = this,
      a = o.controller.control;
      if (Array.isArray(a)) for (var s = 0; s < a.length; s += 1) a[s] !== t && a[s] instanceof C && n(a[s]);
       else a instanceof C && t !== a && n(a)
    },
    setTransition: function (e, t) {
      function n(t) {
        t.setTransition(e, r),
        0 !== e && (t.transitionStart(), t.params.autoHeight && u.nextTick(function () {
          t.updateAutoHeight()
        }), t.$wrapperEl.transitionEnd(function () {
          o && (t.params.loop && 'slide' === r.params.controller.by && t.loopFix(), t.transitionEnd())
        }))
      }
      var i,
      r = this,
      o = r.controller.control;
      if (Array.isArray(o)) for (i = 0; i < o.length; i += 1) o[i] !== t && o[i] instanceof C && n(o[i]);
       else o instanceof C && t !== o && n(o)
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
      var n = this,
      i = n.params.a11y;
      if (13 === t.keyCode) {
        var r = e(t.target);
        n.navigation && n.navigation.$nextEl && r.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(), n.isEnd ? n.a11y.notify(i.lastSlideMessage)  : n.a11y.notify(i.nextSlideMessage)),
        n.navigation && n.navigation.$prevEl && r.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(), n.isBeginning ? n.a11y.notify(i.firstSlideMessage)  : n.a11y.notify(i.prevSlideMessage)),
        n.pagination && r.is('.' + n.params.pagination.bulletClass) && r[0].click()
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
        n = t.$nextEl,
        i = t.$prevEl;
        i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i)  : e.a11y.enableEl(i)),
        n && 0 < n.length && (e.isEnd ? e.a11y.disableEl(n)  : e.a11y.enableEl(n))
      }
    },
    updatePagination: function () {
      var t = this,
      n = t.params.a11y;
      t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, r) {
        var o = e(r);
        t.a11y.makeElFocusable(o),
        t.a11y.addElRole(o, 'button'),
        t.a11y.addElLabel(o, n.paginationBulletMessage.replace(/{{index}}/, o.index() + 1))
      })
    },
    init: function () {
      var e = this;
      e.$el.append(e.a11y.liveRegion);
      var t,
      n,
      i = e.params.a11y;
      e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
      e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
      t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, 'button'), e.a11y.addElLabel(t, i.nextSlideMessage), t.on('keydown', e.a11y.onEnterKey)),
      n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, 'button'), e.a11y.addElLabel(n, i.prevSlideMessage), n.on('keydown', e.a11y.onEnterKey)),
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on('keydown', '.' + e.params.pagination.bulletClass, e.a11y.onEnterKey)
    },
    destroy: function () {
      var e,
      t,
      n = this;
      n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(),
      n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl),
      n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl),
      e && e.off('keydown', n.a11y.onEnterKey),
      t && t.off('keydown', n.a11y.onEnterKey),
      n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off('keydown', '.' + n.params.pagination.bulletClass, n.a11y.onEnterKey)
    }
  },
  G = {
    init: function () {
      var e = this;
      if (e.params.history) {
        if (!r.history || !r.history.pushState) return e.params.history.enabled = !1,
        void (e.params.hashNavigation.enabled = !0);
        var t = e.history;
        t.initialized = !0,
        t.paths = G.getPathValues(),
        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || r.addEventListener('popstate', e.history.setHistoryPopState))
      }
    },
    destroy: function () {
      this.params.history.replaceState || r.removeEventListener('popstate', this.history.setHistoryPopState)
    },
    setHistoryPopState: function () {
      this.history.paths = G.getPathValues(),
      this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
    },
    getPathValues: function () {
      var e = r.location.pathname.slice(1).split('/').filter(function (e) {
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
        var n = this.slides.eq(t),
        i = G.slugify(n.attr('data-history'));
        r.location.pathname.includes(e) || (i = e + '/' + i);
        var o = r.history.state;
        o && o.value === i || (this.params.history.replaceState ? r.history.replaceState({
          value: i
        }, null, i)  : r.history.pushState({
          value: i
        }, null, i))
      }
    },
    slugify: function (e) {
      return e.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
    },
    scrollToSlide: function (e, t, n) {
      var i = this;
      if (t) for (var r = 0, o = i.slides.length; r < o; r += 1) {
        var a = i.slides.eq(r);
        if (G.slugify(a.attr('data-history')) === t && !a.hasClass(i.params.slideDuplicateClass)) {
          var s = a.index();
          i.slideTo(s, e, n)
        }
      } else i.slideTo(0, e, n)
    }
  },
  Y = {
    onHashCange: function () {
      var e = this,
      t = i.location.hash.replace('#', '');
      if (t !== e.slides.eq(e.activeIndex).attr('data-hash')) {
        var n = e.$wrapperEl.children('.' + e.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === n) return;
        e.slideTo(n)
      }
    },
    setHash: function () {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && r.history && r.history.replaceState) r.history.replaceState(null, null, '#' + e.slides.eq(e.activeIndex).attr('data-hash') || '');
       else {
        var t = e.slides.eq(e.activeIndex),
        n = t.attr('data-hash') || t.attr('data-history');
        i.location.hash = n || ''
      }
    },
    init: function () {
      var t = this;
      if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
        t.hashNavigation.initialized = !0;
        var n = i.location.hash.replace('#', '');
        if (n) for (var o = 0, a = t.slides.length; o < a; o += 1) {
          var s = t.slides.eq(o);
          if ((s.attr('data-hash') || s.attr('data-history')) === n && !s.hasClass(t.params.slideDuplicateClass)) {
            var l = s.index();
            t.slideTo(l, 0, t.params.runCallbacksOnInit, !0)
          }
        }
        t.params.hashNavigation.watchState && e(r).on('hashchange', t.hashNavigation.onHashCange)
      }
    },
    destroy: function () {
      this.params.hashNavigation.watchState && e(r).off('hashchange', this.hashNavigation.onHashCange)
    }
  },
  X = {
    run: function () {
      var e = this,
      t = e.slides.eq(e.activeIndex),
      n = e.params.autoplay.delay;
      t.attr('data-swiper-autoplay') && (n = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
      e.autoplay.timeout = u.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))  : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop()  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))  : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))  : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop()  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))  : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
      }, n)
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
  Q = {
    setTranslate: function () {
      for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
        var i = e.slides.eq(n),
        r = - i[0].swiperSlideOffset;
        e.params.virtualTranslate || (r -= e.translate);
        var o = 0;
        e.isHorizontal() || (o = r, r = 0);
        var a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0)  : 1 + Math.min(Math.max(i[0].progress, - 1), 0);
        i.css({
          opacity: a
        }).transform('translate3d(' + r + 'px, ' + o + 'px, 0px)')
      }
    },
    setTransition: function (e) {
      var t = this,
      n = t.slides,
      i = t.$wrapperEl;
      if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        n.transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0,
            t.animating = !1;
            for (var e = [
              'webkitTransitionEnd',
              'transitionend'
            ], n = 0; n < e.length; n += 1) i.trigger(e[n])
          }
        })
      }
    }
  },
  J = {
    setTranslate: function () {
      var t,
      n = this,
      i = n.$el,
      r = n.$wrapperEl,
      o = n.slides,
      a = n.width,
      s = n.height,
      l = n.rtlTranslate,
      c = n.size,
      d = n.params.cubeEffect,
      u = n.isHorizontal(),
      p = n.virtual && n.params.virtual.enabled,
      v = 0;
      d.shadow && (u ? (0 === (t = r.find('.swiper-cube-shadow')).length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)), t.css({
        height: a + 'px'
      }))  : 0 === (t = i.find('.swiper-cube-shadow')).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
      for (var h = 0; h < o.length; h += 1) {
        var m = o.eq(h),
        g = h;
        p && (g = parseInt(m.attr('data-swiper-slide-index'), 10));
        var _ = 90 * g,
        w = Math.floor(_ / 360);
        l && (_ = - _, w = Math.floor( - _ / 360));
        var y = Math.max(Math.min(m[0].progress, 1), - 1),
        b = 0,
        x = 0,
        k = 0;
        g % 4 == 0 ? (b = 4 * - w * c, k = 0)  : (g - 1) % 4 == 0 ? (b = 0, k = 4 * - w * c)  : (g - 2) % 4 == 0 ? (b = c + 4 * w * c, k = c)  : (g - 3) % 4 == 0 && (b = - c, k = 3 * c + 4 * c * w),
        l && (b = - b),
        u || (x = b, b = 0);
        var T = 'rotateX(' + (u ? 0 : - _) + 'deg) rotateY(' + (u ? _ : 0) + 'deg) translate3d(' + b + 'px, ' + x + 'px, ' + k + 'px)';
        if (y <= 1 && - 1 < y && (v = 90 * g + 90 * y, l && (v = 90 * - g - 90 * y)), m.transform(T), d.slideShadows) {
          var E = u ? m.find('.swiper-slide-shadow-left')  : m.find('.swiper-slide-shadow-top'),
          S = u ? m.find('.swiper-slide-shadow-right')  : m.find('.swiper-slide-shadow-bottom');
          0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (u ? 'left' : 'top') + '"></div>'), m.append(E)),
          0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (u ? 'right' : 'bottom') + '"></div>'), m.append(S)),
          E.length && (E[0].style.opacity = Math.max( - y, 0)),
          S.length && (S[0].style.opacity = Math.max(y, 0))
        }
      }
      if (r.css({
        '-webkit-transform-origin': '50% 50% -' + c / 2 + 'px',
        '-moz-transform-origin': '50% 50% -' + c / 2 + 'px',
        '-ms-transform-origin': '50% 50% -' + c / 2 + 'px',
        'transform-origin': '50% 50% -' + c / 2 + 'px'
      }), d.shadow) if (u) t.transform('translate3d(0px, ' + (a / 2 + d.shadowOffset) + 'px, ' + - a / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + d.shadowScale + ')');
       else {
        var C = Math.abs(v) - 90 * Math.floor(Math.abs(v) / 90),
        O = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
        I = d.shadowScale,
        q = d.shadowScale / O,
        P = d.shadowOffset;
        t.transform('scale3d(' + I + ', 1, ' + q + ') translate3d(0px, ' + (s / 2 + P) + 'px, ' + - s / 2 / q + 'px) rotateX(-90deg)')
      }
      var A = f.isSafari || f.isUiWebView ? - c / 2 : 0;
      r.transform('translate3d(0px,0,' + A + 'px) rotateX(' + (n.isHorizontal() ? 0 : v) + 'deg) rotateY(' + (n.isHorizontal() ? - v : 0) + 'deg)')
    },
    setTransition: function (e) {
      var t = this.$el;
      this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
      this.params.cubeEffect.shadow && !this.isHorizontal() && t.find('.swiper-cube-shadow').transition(e)
    }
  },
  K = {
    setTranslate: function () {
      for (var t = this, n = t.slides, i = t.rtlTranslate, r = 0; r < n.length; r += 1) {
        var o = n.eq(r),
        a = o[0].progress;
        t.params.flipEffect.limitRotation && (a = Math.max(Math.min(o[0].progress, 1), - 1));
        var s = - 180 * a,
        l = 0,
        c = - o[0].swiperSlideOffset,
        d = 0;
        if (t.isHorizontal() ? i && (s = - s)  : (d = c, l = - s, s = c = 0), o[0].style.zIndex = - Math.abs(Math.round(a)) + n.length, t.params.flipEffect.slideShadows) {
          var u = t.isHorizontal() ? o.find('.swiper-slide-shadow-left')  : o.find('.swiper-slide-shadow-top'),
          p = t.isHorizontal() ? o.find('.swiper-slide-shadow-right')  : o.find('.swiper-slide-shadow-bottom');
          0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? 'left' : 'top') + '"></div>'), o.append(u)),
          0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? 'right' : 'bottom') + '"></div>'), o.append(p)),
          u.length && (u[0].style.opacity = Math.max( - a, 0)),
          p.length && (p[0].style.opacity = Math.max(a, 0))
        }
        o.transform('translate3d(' + c + 'px, ' + d + 'px, 0px) rotateX(' + l + 'deg) rotateY(' + s + 'deg)')
      }
    },
    setTransition: function (e) {
      var t = this,
      n = t.slides,
      i = t.activeIndex,
      r = t.$wrapperEl;
      if (n.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e), t.params.virtualTranslate && 0 !== e) {
        var o = !1;
        n.eq(i).transitionEnd(function () {
          if (!o && t && !t.destroyed) {
            o = !0,
            t.animating = !1;
            for (var e = [
              'webkitTransitionEnd',
              'transitionend'
            ], n = 0; n < e.length; n += 1) r.trigger(e[n])
          }
        })
      }
    }
  },
  Z = {
    setTranslate: function () {
      for (var t = this, n = t.width, i = t.height, r = t.slides, o = t.$wrapperEl, a = t.slidesSizesGrid, s = t.params.coverflowEffect, l = t.isHorizontal(), c = t.translate, d = l ? n / 2 - c : i / 2 - c, u = l ? s.rotate : - s.rotate, f = s.depth, v = 0, h = r.length; v < h; v += 1) {
        var m = r.eq(v),
        g = a[v],
        _ = (d - m[0].swiperSlideOffset - g / 2) / g * s.modifier,
        w = l ? u * _ : 0,
        y = l ? 0 : u * _,
        b = - f * Math.abs(_),
        x = l ? 0 : s.stretch * _,
        k = l ? s.stretch * _ : 0;
        Math.abs(k) < 0.001 && (k = 0),
        Math.abs(x) < 0.001 && (x = 0),
        Math.abs(b) < 0.001 && (b = 0),
        Math.abs(w) < 0.001 && (w = 0),
        Math.abs(y) < 0.001 && (y = 0);
        var T = 'translate3d(' + k + 'px,' + x + 'px,' + b + 'px)  rotateX(' + y + 'deg) rotateY(' + w + 'deg)';
        if (m.transform(T), m[0].style.zIndex = 1 - Math.abs(Math.round(_)), s.slideShadows) {
          var E = l ? m.find('.swiper-slide-shadow-left')  : m.find('.swiper-slide-shadow-top'),
          S = l ? m.find('.swiper-slide-shadow-right')  : m.find('.swiper-slide-shadow-bottom');
          0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (l ? 'left' : 'top') + '"></div>'), m.append(E)),
          0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? 'right' : 'bottom') + '"></div>'), m.append(S)),
          E.length && (E[0].style.opacity = 0 < _ ? _ : 0),
          S.length && (S[0].style.opacity = 0 < - _ ? - _ : 0)
        }
      }(p.pointerEvents || p.prefixedPointerEvents) && (o[0].style.perspectiveOrigin = d + 'px 50%')
    },
    setTransition: function (e) {
      this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e)
    }
  },
  ee = {
    init: function () {
      var e = this,
      t = e.params.thumbs,
      n = e.constructor;
      t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, u.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), u.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }))  : u.isObject(t.swiper) && (e.thumbs.swiper = new n(u.extend({
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
      n = t.thumbs.swiper;
      if (n) {
        var i = n.clickedIndex,
        r = n.clickedSlide;
        if (!(r && e(r).hasClass(t.params.thumbs.slideThumbActiveClass) || null == i)) {
          var o;
          if (o = n.params.loop ? parseInt(e(n.clickedSlide).attr('data-swiper-slide-index'), 10)  : i, t.params.loop) {
            var a = t.activeIndex;
            t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
            var s = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + o + '"]').eq(0).index(),
            l = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + o + '"]').eq(0).index();
            o = void 0 === s ? l : void 0 === l ? s : l - a < a - s ? l : s
          }
          t.slideTo(o)
        }
      }
    },
    update: function (e) {
      var t = this,
      n = t.thumbs.swiper;
      if (n) {
        var i = 'auto' === n.params.slidesPerView ? n.slidesPerViewDynamic()  : n.params.slidesPerView;
        if (t.realIndex !== n.realIndex) {
          var r,
          o = n.activeIndex;
          if (n.params.loop) {
            n.slides.eq(o).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, o = n.activeIndex);
            var a = n.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
            s = n.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            r = void 0 === a ? s : void 0 === s ? a : s - o == o - a ? o : s - o < o - a ? s : a
          } else r = t.realIndex;
          n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = o < r ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : o < r && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0))
        }
        var l = 1,
        c = t.params.thumbs.slideThumbActiveClass;
        if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(c), n.params.loop) for (var d = 0; d < l; d += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + d) + '"]').addClass(c);
         else for (var u = 0; u < l; u += 1) n.slides.eq(t.realIndex + u).addClass(c)
      }
    }
  },
  te = [
    O,
    I,
    q,
    P,
    M,
    L,
    j,
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
            init: R.init.bind(e),
            update: R.update.bind(e),
            destroy: R.destroy.bind(e),
            onNextClick: R.onNextClick.bind(e),
            onPrevClick: R.onPrevClick.bind(e)
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
          var n,
          i = this,
          r = i.navigation,
          o = r.$nextEl,
          a = r.$prevEl;
          !i.params.navigation.hideOnClick || e(t.target).is(a) || e(t.target).is(o) || (o ? n = o.hasClass(i.params.navigation.hiddenClass)  : a && (n = a.hasClass(i.params.navigation.hiddenClass)), !0 === n ? i.emit('navigationShow', i)  : i.emit('navigationHide', i), o && o.toggleClass(i.params.navigation.hiddenClass), a && a.toggleClass(i.params.navigation.hiddenClass))
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
            init: z.init.bind(e),
            render: z.render.bind(e),
            update: z.update.bind(e),
            destroy: z.destroy.bind(e),
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
          var n = this;
          n.params.pagination.el && n.params.pagination.hideOnClick && 0 < n.pagination.$el.length && !e(t.target).hasClass(n.params.pagination.bulletClass) && (!0 === n.pagination.$el.hasClass(n.params.pagination.hiddenClass) ? n.emit('paginationShow', n)  : n.emit('paginationHide', n), n.pagination.$el.toggleClass(n.params.pagination.hiddenClass))
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
            init: U.init.bind(e),
            destroy: U.destroy.bind(e),
            updateSize: U.updateSize.bind(e),
            setTranslate: U.setTranslate.bind(e),
            setTransition: U.setTransition.bind(e),
            enableDraggable: U.enableDraggable.bind(e),
            disableDraggable: U.disableDraggable.bind(e),
            setDragPosition: U.setDragPosition.bind(e),
            onDragStart: U.onDragStart.bind(e),
            onDragMove: U.onDragMove.bind(e),
            onDragEnd: U.onDragEnd.bind(e),
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
            setTransform: B.setTransform.bind(this),
            setTranslate: B.setTranslate.bind(this),
            setTransition: B.setTransition.bind(this)
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
        'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (n) {
          t[n] = V[n].bind(e)
        }),
        u.extend(e, {
          zoom: t
        });
        var n = 1;
        Object.defineProperty(e.zoom, 'scale', {
          get: function () {
            return n
          },
          set: function (t) {
            if (n !== t) {
              var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
              r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit('zoomChange', t, i, r)
            }
            n = t
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
            getInterpolateFunction: F.getInterpolateFunction.bind(e),
            setTranslate: F.setTranslate.bind(e),
            setTransition: F.setTransition.bind(e)
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
            init: G.init.bind(e),
            setHistory: G.setHistory.bind(e),
            setHistoryPopState: G.setHistoryPopState.bind(e),
            scrollToSlide: G.scrollToSlide.bind(e),
            destroy: G.destroy.bind(e)
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
            init: Y.init.bind(e),
            destroy: Y.destroy.bind(e),
            setHash: Y.setHash.bind(e),
            onHashCange: Y.onHashCange.bind(e)
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
            run: X.run.bind(e),
            start: X.start.bind(e),
            stop: X.stop.bind(e),
            pause: X.pause.bind(e),
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
            setTranslate: Q.setTranslate.bind(this),
            setTransition: Q.setTransition.bind(this)
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
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/vertical_cover/covers', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, e.list),
  r = n.$each,
  o = (e.item, e.$index, n.$escape),
  a = '';
  return a += '<div class="swiper-wrapper"> <style> .swiper-container { width: 100%; /* height: 100vh; */ height: 100%; /* position: absolute; */ padding-top: 55px; box-sizing: border-box; position: fixed; top: 0; background: black; } .vertical_swiper_cover { background: transparent center no-repeat; width: 100%; height: 100%; position: absolute; top: 0; background-size: cover; } .vertical_swiper_title { position: absolute; top: 0px; padding: 12px 16px; z-index: 1; color: white; font-size: 17px; z-index: 4; } .vertical_mask { position: absolute; width: 100vh; height: 100px; z-index: -1; top: 0; left: 0; background-image: linear-gradient(to bottom, rgba(3, 0, 0, .3) 0, transparent 100%); } .tips .arrow1, .tips .arrow2 { width: 38px; height: 13px; background: url(//puui.qpic.cn/vupload/0/20190327_1553668132986_wyiusnjek1.png/0) no-repeat center center; background-size: 38px 13px; margin: auto; -webkit-animation: arrow1 1s ease-in-out; animation: arrow1 1s ease-in-out; -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite; } .tips .arrow2 { -webkit-animation: arrow2 1s ease-in-out; animation: arrow2 1s ease-in-out; -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite; } .tips { position: fixed; bottom: 80px; /* left: 150px; */ margin: auto; left: 50%; transform: translateX(-50%); font-size: 13px; color: #FFFFFF; z-index: 3; } @-webkit-keyframes arrow1 { 0% { opacity: 0; } 100% { opacity: 1; } } @keyframes arrow1 { 0% { opacity: 0; } 100% { opacity: 1; } } @-webkit-keyframes arrow2 { 0% { opacity: 1; } 100% { opacity: 0; } } @keyframes arrow2 { 0% { opacity: 1; } 100% { opacity: 0; } } </style> ',
  i && (a += ' ', r(i, function (e, t) {
    a += ' <div class="swiper-slide "> <div class="vertical_swiper_title"> ',
    a += o(e.title),
    a += ' <div class="vertical_mask"></div> </div> <div class="vertical_swiper_cover" style="background-image: url(',
    a += o(e.pic_640_360),
    a += ')"> </div> </div> '
  }), a += ' '),
  a += ' </div>',
  new String(a)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/vertical_cover/tips', '<div class="tips"> <div class="arrow1"></div> <div class="arrow2"></div> <div style="margin-top: 5px;"> 上滑看其他学员 </div> </div>')
  },
  function (e, t, n) {
  function i() {
  this.cv = null,
  this.nv = null
  }
  var r = n(160);
  i.prototype = {
  init: function (e, t) {
    var n = this;
    e && (this.cv = new r(e.vid, e.$el, e.poster), window.player1 = this.cv, this.cv.player.on('playStateChange', function (e) {
      0 == e && n.cb && n.cb()
    })),
    t && (this.nv = new r(t.vid, t.$el, t.poster, (!0)), Txplayer.msg.on('firstClick', function () {
      n.nv.play(),
      n.nv.pause()
    }), window.player2 = this.nv, this.nv.player.on('playStateChange', function (e) {
      0 == e && n.cb && n.cb()
    }))
  },
  hasStart: function () {
    return !!Txplayer.hasFirstClick
  },
  next: function (e) {
    var t = this.cv;
    this.hasStart() ? (this.cv.pause(), this.nv.play())  : (this.cv.disable(), this.nv.enable()),
    this.cv = this.nv,
    this.nv = t,
    e && (this.nv.setPoster(e.poster), this.nv.load(e.vid), this.nv.appendTo(e.$el))
  },
  prev: function (e) {
    var t = this.nv;
    this.nv.setPoster(e.poster),
    this.nv.appendTo(e.$el),
    this.hasStart() ? (this.cv.pause(), this.nv.play(e.vid))  : (this.nv.load(e.vid), this.cv.disable(), this.nv.enable()),
    this.nv = this.cv,
    this.cv = t
  },
  show: function () {
    this.cv.enable()
  },
  onEnd: function (e) {
    this.cb = e
  }
  },
  e.exports = i
  },
  function (e, t) {
  function n(e, t, n, i) {
  this.containerId = 'muti_player_' + + new Date,
  this.init(e, t, n, i)
  }
  var i = [
  'H5HtmlFrame',
  'H5Login',
  'H5UiLoading',
  'H5UiPlay',
  'H5UiPoster',
  'H5MReport',
  'H5UiLimit',
  'H5UiSpeedy',
  'H5UiErrorShow',
  'H5UILogo',
  'HdPlayerReport',
  'H5PlayerAd',
  'H5Player',
  'HDSupport',
  'H5UiControl',
  'H5PlayerControl',
  'UiContinuePlay'
  ];
  n.prototype = {
  init: function (e, t, n, r) {
    this.playerWrap = $('<div id="' + this.containerId + '" style="height:100%;width:100%;transition:opacity 1s;' + (r ? 'opacity:0' : '') + '"></div>'),
    $(t).append(this.playerWrap),
    this.playerConfig = {
      containerId: this.containerId,
      vid: e,
      width: '100%',
      height: '100%',
      videoType: 'vod',
      playerType: 'h5',
      disableH5Seek: !0,
      isUsePreload: !0,
      hideHD: !0,
      controlTop: 85,
      h5VerticalFull: !0,
      muted: !!r,
      pluginsMap: {
        vod: {
          h5: i,
          h5qq: i
        }
      },
      settings: {
        H5UiControl: {
          subPlugins: [
            'UiControlPlay',
            'UiShowTime',
            'H5UIProgress'
          ]
        }
      }
    },
    n && (this.playerConfig.poster = n),
    this.player = new Txplayer(this.playerConfig)
  },
  load: function (e) {
    this.player.load(e),
    this.player.pause()
  },
  appendTo: function (e) {
    $(e).append(this.playerWrap)
  },
  enable: function () {
    this.playerWrap.css({
      opacity: 1
    }),
    this.player.unMute()
  },
  disable: function () {
    this.playerWrap.css({
      opacity: 0
    }),
    this.player.mute()
  },
  play: function (e) {
    this.enable(),
    this.player && this.player.play(e)
  },
  pause: function () {
    this.disable(),
    this.player && this.player.pause()
  },
  show: function () {
    this.playerWrap.css({
      opacity: 1
    })
  },
  hide: function () {
    this.playerWrap.css({
      opacity: 0
    })
  },
  setPoster: function (e) {
    this.player.setPoster(e)
  }
  },
  e.exports = n
  },
  function (e, t) {
  e.exports = function () {
  var e = {
    oppobrowser: /OppoBrowser/i,
    miuibrowser: /MiuiBrowser/i,
    uc: /UCBrowser/i
  },
  t = navigator.userAgent,
  n = !1;
  for (var i in e) browserMatch = e[i].exec(t),
  browserMatch && (n = !0);
  if (n) {
    if (location.href.indexOf('novertical=true') > - 1) return;
    var r = location.href.indexOf('?') > - 1 ? '&novertical=true' : '?novertical=true';
    location.href += r
  }
  }
  },
  function (e, t, n) {
  var i = n(163),
  r = n(164),
  o = n(98),
  a = n(38),
  s = n(90),
  l = n(34);
  n(40);
  e.exports = function (e, t, n, c) {
  function d(e) {
    return o.columncover2({
      lid: t.column_id,
      offset: e || 0
    })
  }
  function u() {
    this.init()
  }
  var p = {
    video_id: n.vid,
    cover_id: t.cover_id,
    confid: s() || 140,
    from: l
  },
  f = a().model(p).on('render', function (e, t) {
  }).on('action', function (e, t) {
  });
  u.prototype = {
    init: function () {
      var t = this;
      this.$list = $(i({
        list: c.list.slice(0, 5)
      })),
      e.append(this.$list),
      window.EXSOURCE && protocol || d(0).then(function (e) {
        if (e && e.jsonvalue && e.jsonvalue.results && e.jsonvalue.results.length) {
          var n = $(r({
            list: e.jsonvalue.results
          }));
          t.$list.find('.vertical_recommand_previous_body').append(n)
        }
      }),
      this.$list.on('click', '.vertical_recommand_cover_head', function () {
        t.hide()
      })
    },
    show: function () {
      this.$list.removeClass('none'),
      $('#2016_vertical_banner').hide()
    },
    hide: function () {
      var e = this;
      this.$list.addClass('fold'),
      setTimeout(function () {
        e.$list.addClass('none'),
        e.$list.removeClass('fold'),
        $('#2016_vertical_banner').show()
      }, 300)
    }
  },
  window.verticalRecommandation = new u,
  e.on('click', '.vertical_recommand_cover_item', function () {
    f.action()
  })
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/vertical_recommand/wrap', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, e.list),
  r = n.$each,
  o = (e.item, e.$index, n.$escape),
  a = '';
  return a += '<div class="vertical_recommand_wrap none"> <style> .page_play { height: 100%; } .vertical_recommand_wrap { display: flex; width: 100%; /* height: 100vh; */ height: 100%; padding-top: 55px; box-sizing: border-box; position: fixed; top: 0; z-index: 1; animation: unfold .3s ease 1 both; -webkit-animation: unfold .3s ease 1 both; color: white; flex-direction: column-reverse; /* flex-wrap: wrap-reverse; */ align-content: flex-end; } .vertical_recommand_wrap.none { display: none; } @-webkit-keyframes unfold { 0% { -webkit-transform: translateY(100%); transform: translateY(100%) } to { -webkit-transform: translateY(0); transform: translateY(0) } } @keyframes unfold { 0% { -webkit-transform: translateY(100%); transform: translateY(100%) } to { -webkit-transform: translateY(0); transform: translateY(0) } } .vertical_recommand_wrap.fold { animation: fold .3s ease 1 both; -webkit-animation: fold .3s ease 1 both; } @-webkit-keyframes fold { 0% { -webkit-transform: translateY(0); transform: translateY(0) } to { -webkit-transform: translateY(100%); transform: translateY(100%) } } @keyframes fold { 0% { -webkit-transform: translateY(0); transform: translateY(0) } to { -webkit-transform: translateY(100%); transform: translateY(100%) } } .vertical_recommand_mask { position: absolute; height: 100%; width: 100%; background-image: linear-gradient(to top, rgba(3, 0, 0, 0.5) 0, transparent 100%); z-index: -1; } .vertical_recommand_previous { /* padding: 12px 0; */ padding-bottom: 10px; } .vertical_recommand_previous_body { height: 126px; overflow: hidden; overflow-x: auto; -webkit-overflow-scrolling: touch; } .vertical_recommand_previous_item { width: 28.5vw; display: inline-block; } .vertical_recommand_previous_item img { width: 100%; height: 100%; } .vertical_recommand_previous_item:first-child { margin-left: 12px } .vertical_recommand_previous_item:last-child { margin-right: 12px } .vertical_recommand_previous_title { font-size: 15px; padding: 12px; } .vertical_recommand_previous_poster { background: transparent center no-repeat; background-size: cover; margin-bottom: 12px; height: 16vw; } .vertical_recommand_cover { /* padding: 12px 0; */ padding-bottom: 15px; } .vertical_recommand_cover_body { overflow: hidden; overflow-x: auto; -webkit-overflow-scrolling: touch; } .vertical_recommand_cover_title { font-size: 15px; padding: 12px; } .vertical_recommand_cover_item { display: inline-block; position: relative; width: 25vw; height: 54vw; margin-right: 2px; } .vertical_recommand_cover_all { width: 50px; background: rgba(155, 155, 155, 0.52); font-size: 14px; } .vertical_recommand_cover_item:first-child { margin-left: 12px } .vertical_recommand_cover_item:last-child { margin-right: 12px } .vertical_recommand_cover_poster { background: transparent center no-repeat; background-size: cover; height: 100%; } .vertical_recommand_cover_dsc { position: absolute; width: 100%; bottom: 0; padding: 4px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; background-image: linear-gradient(to top, rgba(3, 0, 0, 0.3) 0, transparent 100%); font-size: 13px; } .vertical_recommand_cover_plays { width: 5vw; height: 5vw; background: transparent center no-repeat; background-size: cover; background-image: url(//puui.qpic.cn/vupload/0/20190308_1552027474442_ajz3j5zizeo.png/0); position: absolute; top: 12px; left: 12px; } .vertical_recommand_cover_tips { position: absolute; top: 12px; right: 8px; font-size: 11px; } .vertical_recommand_cover_fold { position: absolute; width: 16px; right: 12px; top: 18px; } .fillWhite { fill: #ffffff; } .vertical_recommand_cover_head { position: relative; } .vertical_recommand_previous_item_title { word-break: break-all; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; white-space: normal; } .vertical_recommand_cover_all_text { display: flex; justify-content: center; align-items: center; height: 100%; padding: 13px; text-align: center; white-space: normal; } </style> <div class="vertical_recommand_previous"> <div class="vertical_recommand_previous_head"> <div class="vertical_recommand_previous_title">往期节目</div> </div> <div class="vertical_recommand_previous_body"> </div> </div> <div class="vertical_recommand_cover"> <div class="vertical_recommand_cover_head"> <div class="vertical_recommand_cover_title">专辑列表</div> <div class="vertical_recommand_cover_fold"> <svg class="svg_icon_switch fillWhite" viewBox="0 0 44 44"> <use class="svg_use" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sym_icon_switch"></use> </svg> </div> </div> <div class="vertical_recommand_cover_body"> <ul style=" white-space: nowrap;"> ',
  i && (a += ' ', r(i, function (e, t) {
    a += ' <li class="vertical_recommand_cover_item"> <div class="vertical_recommand_cover_poster" style="background-image:url(',
    a += o(e.pic_640_360),
    a += ')"> </div> <div class="vertical_recommand_cover_dsc">',
    a += o(e.title),
    a += '</div> <div class="vertical_recommand_cover_plays"></div> <div class="vertical_recommand_cover_tips">APP播放</div> </li> '
  }), a += ' '),
  a += ' <li class="vertical_recommand_cover_item vertical_recommand_cover_all"> <div class="vertical_recommand_cover_all_text">全部直拍</div> </li> </ul> </div> </div> <div class="vertical_recommand_mask"> </div> </div>',
  new String(a)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/vertical_recommand/previous', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, e.list),
  r = n.$each,
  o = (e.item, e.$index, n.$escape),
  a = '';
  return a += '<ul style="white-space: nowrap;"> ',
  i && (a += ' ', r(i, function (e, t) {
    a += ' <li class="vertical_recommand_previous_item" > <a href="//m.v.qq.com/x/play.html?cid=',
    a += o(e.id),
    a += '" style="color:white;" > <div class="vertical_recommand_previous_poster" style="background-image:url(//i.gtimg.cn/qqlive/images/mac_web/figure_default_horizontal.png)"> <img src="',
    a += o(e.fields.horizontal_pic_url || e.fields.new_pic_hz),
    a += '" alt=""> </div> <div class="vertical_recommand_previous_item_title">',
    a += o((e.fields.publish_date ? e.fields.publish_date.split(' ') [0] : '') + ' ' + e.fields.title),
    a += '</div> </a> </li> '
  }), a += ' '),
  a += ' </ul>',
  new String(a)
  })
  },
  function (e, t, n) {
  var i = n(38),
  r = n(90),
  o = n(34),
  a = n(40),
  s = n(166);
  e.exports = function (e, t, n) {
  function l() {
    return a({
    }, i.TXVWORDING.text)
  }
  var c = e.find('._banner'),
  d = {
    video_id: n.vid,
    cover_id: t.cover_id,
    confid: r() || 140,
    from: o
  },
  u = i().model(d).on('render', function (e, t) {
    c.html(s({
      status: i.TXVWORDING.status[e],
      progress: t.progress,
      word: l() [e]
    }))
  }).on('action', function (e, t) {
  });
  e.on('click', function () {
    u.action()
  })
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/vertical_banner/normalBanner', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.status,
  o = e.progress,
  a = e.word,
  s = '';
  return s += '<div class="tvp_app_btn" data-status="',
  s += i(r),
  s += '"> <div class="tvp_progress"> <div class="tvp_progress_current" style="width: ',
  s += i(o),
  s += '%;animation:none;-webkit-animation:none"></div> </div> <div class="tvp_btn_text" data-text="',
  s += i(a),
  s += '" style="color:white"> <div class="tvp_app_logo"></div> </div> </div>',
  new String(s)
  })
  },
  function (e, t, n) {
  function i() {
  
  }
  function r(e, t, n, i) {
  var r = T ? t.cover_id : n.vid,
  o = n.title || t.title || i.title || '腾讯视频',
  s = [
  ],
  l = e.filter(function (e) {
    return 1 == e.ShowType
  }).length;
  e.sort(function (e, t) {
    return Number(e.ShowOrder) - Number(t.ShowOrder)
  }),
  l ? E(r, l, o).then(function (t) {
    var i = [
    ],
    r = t.header.seq_num || '',
    o = t.rsp_paras.ab_rec_name || '',
    l = 0;
    try {
      i = t.rec_modules[0].rec_items || [
      ]
    } catch (d) {
    }
    e.forEach(function (e) {
      var t = '';
      1 == e.ShowType && (t = i[l++]),
      1 == e.ShowType && t ? s.push({
        showType: e.ShowType,
        vid: t.item_id || '',
        title: t.fields && t.fields.title || e.MaterialTitle || c(),
        image: t.fields && (t.fields.pic160x90 || t.fields.pic_228_128) || e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
        buttonTitle: e.ButtonTitle || '打开',
        buttonTextColor: e.ButtonTextColor || '',
        backColor: e.BackColor || S,
        appIosDownurl: e.AppIosDownurl,
        appIosBlankurl: e.AppIosBlankurl,
        iosIntermediaUrl: e.IosIntermediaUrl,
        appAndroidOpenurl: e.AppAndroidOpenurl,
        appAndroidDownurl: e.AppAndroidDownurl,
        appAndroidBlankurl: e.AppAndroidBlankurl,
        androidIntermediaUrl: e.AndroidIntermediaUrl,
        seqNum: r,
        ab_rec_name: o,
        recParas: t.item_paras || {
        }
      })  : s.push({
        showType: e.ShowType,
        title: e.MaterialTitle || c(),
        image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
        buttonTitle: e.ButtonTitle || '打开',
        buttonTextColor: e.ButtonTextColor || '',
        backColor: e.BackColor || S,
        appIosDownurl: e.AppIosDownurl,
        appIosBlankurl: e.AppIosBlankurl,
        iosIntermediaUrl: e.IosIntermediaUrl,
        appAndroidOpenurl: e.AppAndroidOpenurl,
        appAndroidDownurl: e.AppAndroidDownurl,
        appAndroidBlankurl: e.AppAndroidBlankurl,
        androidIntermediaUrl: e.AndroidIntermediaUrl,
        seqNum: r,
        ab_rec_name: o
      })
    }),
    a(s, n.vid)
  }) ['catch'](function (t) {
    e.forEach(function (e) {
      s.push({
        showType: e.ShowType,
        title: e.MaterialTitle || c(),
        image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
        buttonTitle: e.ButtonTitle || '打开',
        buttonTextColor: e.ButtonTextColor || '',
        backColor: e.BackColor || S,
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
    a(s, n.vid)
  })  : (e.forEach(function (e) {
    s.push({
      showType: e.ShowType,
      title: e.MaterialTitle || c(),
      image: e.MaterialImgUrl || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
      buttonTitle: e.ButtonTitle || '打开',
      buttonTextColor: e.ButtonTextColor || '',
      backColor: e.BackColor || S,
      appIosDownurl: e.AppIosDownurl,
      appIosBlankurl: e.AppIosBlankurl,
      iosIntermediaUrl: e.IosIntermediaUrl,
      appAndroidOpenurl: e.AppAndroidOpenurl,
      appAndroidDownurl: e.AppAndroidDownurl,
      appAndroidBlankurl: e.AppAndroidBlankurl,
      androidIntermediaUrl: e.AndroidIntermediaUrl
    })
  }), a(s, n.vid))
  }
  function o(e, t, n) {
  var i = T ? e.cover_id : t.vid,
  r = t.title || e.title || n.title || '腾讯视频',
  o = 4;
  E(i, o, r).then(function (e) {
    var n = [
    ],
    i = e.header.seq_num || '',
    r = e.rsp_paras.ab_rec_name || '',
    o = [
    ];
    try {
      n = e.rec_modules[0].rec_items || [
      ]
    } catch (s) {
    }
    n.length && n.forEach(function (e) {
      o.push({
        showType: 1,
        vid: e.item_id,
        title: e.fields && e.fields.title || c(),
        image: e.fields && (e.fields.pic160x90 || e.fields.pic_228_128) || '//puui.qpic.cn/vupload/0/common_pic_h.png/0',
        buttonTitle: '打开',
        buttonTextColor: '#ff6022',
        backColor: S,
        seqNum: i,
        ab_rec_name: r,
        recParas: e.item_paras || {
        }
      })
    }),
    o.push(Object.assign({
    }, C, {
      seqNum: i,
      ab_rec_name: r
    })),
    a(o, t.vid)
  }) ['catch'](function (e) {
    a([C], t.vid)
  })
  }
  function a(e, t) {
  var n = '';
  e.forEach(function (e, i) {
    var r = {
    };
    _.os.android ? r = {
      downurl: e.appAndroidDownurl || '',
      blankurl: e.appAndroidBlankurl || '',
      intermediaurl: e.androidIntermediaUrl || ''
    }
     : _.os.ios && (r = {
      downurl: e.appIosDownurl || '',
      blankurl: e.appIosBlankurl || '',
      intermediaurl: e.iosIntermediaUrl || ''
    });
    var o = JSON.stringify(Object.assign({
      type: 1,
      appid: m(r.blankurl, e.appAndroidOpenurl),
      cnt_id: + e.showType,
      rankid: i + 1,
      rec_video_id: e.vid || '',
      video_id: t || '',
      seq_num: e.seqNum || '',
      video_type: T ? 1 : 2,
      ab_rec_name: e.ab_rec_name || ''
    }, e.recParas || {
    }));
    2 == e.showType ? n += b(Object.assign({
    }, {
      index: i + 1,
      title: e.title,
      image: e.image,
      buttonTitle: e.buttonTitle,
      buttonTextColor: g(e.buttonTextColor || '#ff6022', 'btnBg'),
      backColor: g(e.backColor, 'itemBg'),
      kv: o,
      pkgname: e.appAndroidOpenurl
    }, r))  : 1 == e.showType ? n += x(Object.assign({
    }, {
      index: i + 1,
      vid: e.vid || '',
      title: e.title,
      image: e.image,
      buttonTitle: e.buttonTitle,
      buttonTextColor: g(e.buttonTextColor || '#ff6022', 'btnBg'),
      backColor: g(e.backColor, 'itemBg'),
      kv: o,
      pkgname: e.appAndroidOpenurl
    }, r))  : 3 == e.showType && (n += k(Object.assign({
    }, {
      index: i + 1,
      title: e.title,
      image: e.image,
      buttonTitle: e.buttonTitle,
      buttonTextColor: g(e.buttonTextColor || '', 'btnBg'),
      backColor: g(e.backColor, 'itemBg'),
      kv: o,
      pkgname: e.appAndroidOpenurl
    }, r)))
  });
  var i = e[0] && e[0].image;
  s(i, e.length, n)
  }
  function s(e, t, n) {
  if (e) {
    var i = new Image;
    i.onload = function () {
      l(t, n)
    },
    i.onerror = function () {
      l(t, n)
    },
    i.src = e
  } else l(t, n)
  }
  function l(e, t) {
  var n = $('.source_item_default');
  n.removeClass('source_item_fadeIn').addClass('source_item_fadeOut'),
  setTimeout(function () {
    n.remove(),
    $('.source_container').prepend(t),
    e > 1 && i()
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
  function u(e, t, n) {
  
  }
  var p = n(156),
  f = n(37),
  v = n(70),
  h = n(75),
  m = n(168),
  g = n(169).colorHandle,
  _ = n(6) (),
  w = n(76),
  y = n(170),
  b = n(171),
  x = n(172),
  k = n(173),
  T = !1,
  E = null,
  S = '#ffffff';
  matchMedia('(prefers-color-scheme: dark)').matches && (S = 'rgb(32, 33, 49)');
  var C = {
  showType: 2,
  title: c(),
  image: '//i.gtimg.cn/qqlive/images/20190710/i1562744530_1.jpg',
  buttonTitle: '打开',
  buttonTextColor: '#ff6022',
  backColor: S
  };
  e.exports = function (e, t, n, i) {
  'cover' === window.URL_TYPE ? T = y(t.category_value)  : 'video' === window.URL_TYPE ? T = y(n.c_category_value)  : 'column' === window.URL_TYPE && (T = y(i.category_value)),
  E = T ? w.getRecLongVideo : w.getRecShortVideo,
  w.getPrConfig({
    modId: 1501,
    platforms: location.href.indexOf('lite=true') > - 1 ? 13 : 12,
    channel: window.COVER_TYPE || ''
  }).then(function (e) {
    r(e, t, n, i)
  }) ['catch'](function (e) {
    o(t, n, i)
  }),
  u(t, n, i),
  d()
  }
  },
  function (e, t) {
  e.exports = function (e, t) {
  var n = (e || '').toLowerCase().match(/^(\w+):\/\//);
  if (n && n[1]) switch (n[1]) {
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
  function n(e, t) {
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'itemBg' === t ? 'transparent' : '#f25b20' : e
  }
  e.exports = {
  colorHandle: n
  }
  },
  function (e, t) {
  var n = [
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
  return ~n.indexOf(e) && (t = !0),
  t
  }
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/source/orgItem', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.backColor,
  o = e.index,
  a = e.pkgname,
  s = e.intermediaurl,
  l = e.downurl,
  c = e.blankurl,
  d = e.kv,
  u = e.image,
  p = e.title,
  f = e.buttonTextColor,
  v = e.buttonTitle,
  h = '';
  return h += '<div class="source_item swiper-slide source_item_origin source_item_fadeIn" style="background-color: ',
  h += i(r),
  h += '" data-index="',
  h += i(o),
  h += '" data-pkgname="',
  h += i(a),
  h += '" data-intermediaurl="',
  h += i(s),
  h += '" data-downurl="',
  h += i(l),
  h += '" data-blankurl="',
  h += i(c),
  h += '"> <div class="source_item_left" _report _eid="banner" _kv="',
  h += i(d),
  h += '"> <img class="source_item_pic source_item_pic_app" src="',
  h += i(u),
  h += '"> <div class="source_item_info source_item_info_app"> <p class="info_title">',
  h += i(p),
  h += '</p> </div> </div> <button class="source_item_open" style="background-color: ',
  h += i(f),
  h += '" _report _eid="openbanner" _kv=\'',
  h += i(d),
  h += '\'>',
  h += i(v),
  h += '</button> </div>',
  new String(h)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/source/recItem', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.backColor,
  o = e.index,
  a = e.vid,
  s = e.pkgname,
  l = e.intermediaurl,
  c = e.downurl,
  d = e.blankurl,
  u = e.kv,
  p = e.image,
  f = e.title,
  v = e.buttonTextColor,
  h = e.buttonTitle,
  m = '';
  return m += '<div class="source_item swiper-slide source_item_fadeIn" style="background-color: ',
  m += i(r),
  m += '" data-index="',
  m += i(o),
  m += '" data-vid="',
  m += i(a),
  m += '" data-pkgname="',
  m += i(s),
  m += '" data-intermediaurl="',
  m += i(l),
  m += '" data-downurl="',
  m += i(c),
  m += '" data-blankurl="',
  m += i(d),
  m += '"> <div class="source_item_left" _report _eid="banner" _kv=\'',
  m += i(u),
  m += '\'> <img class="source_item_pic" src="',
  m += i(p),
  m += '"> <div class="source_item_info"> <p class="info_title">',
  m += i(f),
  m += '</p> </div> </div> <button class="source_item_open" style="background-color: ',
  m += i(v),
  m += '" _report _eid="openbanner" _kv=\'',
  m += i(u),
  m += '\'>',
  m += i(h),
  m += '</button> </div>',
  new String(m)
  })
  },
  function (e, t, n) {
  var i = n(18);
  e.exports = i('_component/2016/source/banItem', function (e, t) {
  'use strict';
  var n = this,
  i = (n.$helpers, n.$escape),
  r = e.backColor,
  o = e.index,
  a = e.pkgname,
  s = e.intermediaurl,
  l = e.downurl,
  c = e.blankurl,
  d = e.buttonTextColor,
  u = e.kv,
  p = e.image,
  f = e.buttonTitle,
  v = '';
  return v += '<div class="source_item swiper-slide source_item_fadeIn" style="background-color: ',
  v += i(r),
  v += '" data-index="',
  v += i(o),
  v += '" data-pkgname="',
  v += i(a),
  v += '" data-intermediaurl="',
  v += i(s),
  v += '" data-downurl="',
  v += i(l),
  v += '" data-blankurl="',
  v += i(c),
  v += '"> <button class="source_item_btn" style="background-color: ',
  v += i(d),
  v += '; ',
  v += i(d ? 'background-image: none;' : ''),
  v += '" _report _eid="openbanner" _kv=\'',
  v += i(u),
  v += '\'> <span class="item_btn_txt"><img class="item_btn_logo" src="',
  v += i(p),
  v += '" />',
  v += i(f),
  v += '</span> </button> </div>',
  new String(v)
  })
  },
  function (e, t, n) {
  !function () {
  function t(e) {
  var t = encodeURIComponent,
  n = e.bizCode,
  i = e.bizMsg,
  r = + n <= 0 ? '&bizcode=' + n : '',
  o = i ? '&bizmsg=' + t(i)  : '',
  a = new Image(1, 1);
  a.src = '//btrace.qq.com/kvcollect?BossId=4140&Pwd=1431567924&protocol=' + e.protocol + '&host=' + e.host + '&path=' + t(e.path) + '&query=' + t(e.query) + '&delay=' + e.delay + '&httpcode=' + e.httpCode + '&url=' + t(location.href) + r + o + '&_dc=' + Math.random()
  }
  function n(e, t) {
  var i,
  r,
  o = /ret|code|status|state|res|em/i,
  a = /msg|message/i,
  s = /re[ts]/i;
  for (var l in e) {
    var c = e[l],
    d = + i <= 0,
    u = 'string' == typeof r;
    if (d && u) break;
    if (!d) if ('o' === c && 's' === l) i = 0;
     else {
      var p = parseInt(c) && + c;
      p <= 0 && o.test(l) && (i = p)
    }
    if (u || 'string' == typeof c && a.test(l) && (r = c), !t && 'object' === ('undefined' == typeof c ? 'undefined' : _typeof2(c)) && s.test(l)) {
      var f = n(c, !0);
      i = f.ret,
      r = f.msg
    }
  }
  return {
    ret: i,
    msg: r
  }
  }
  function i(e, t, n) {
  var i = n.data;
  if (i && 'string' != e.type(i) && (i = e.param(i, n.traditional)), i && (!n.type || 'GET' == n.type.toUpperCase())) return '' == i ? t : (t + '&' + i).replace(/[&?]{1,2}/, '?')
  }
  function r(e, t) {
  var n = !1;
  if (e && (n = e.indexOf(t) >= 0, !n)) {
    var i = t.replace(/[&?]{1,2}/, '?');
    n = e.indexOf(i) >= 0,
    n || t.indexOf('callback=?') >= 0 && (e = e.replace(/callback=\w+/, 'callback=?'), n = e.indexOf(i) >= 0)
  }
  return n
  }
  function o(e, t) {
  var i,
  r;
  if (t && 'object' === ('undefined' == typeof t ? 'undefined' : _typeof2(t))) {
    var o = n(t);
    i = o.ret,
    r = o.msg
  }
  var a = document.createElement('a');
  a.href = e;
  var s = a.pathname;
  return /^\//.test(s) || (s = '/' + s),
  {
    protocol: a.protocol.replace(/:$/, ''),
    host: a.host,
    path: s,
    query: a.search.replace(/^\?/, '') + a.hash,
    bizCode: i,
    bizMsg: r
  }
  }
  function a(e) {
  var n = (new Date).getTime();
  return function (i, r) {
    var a = o(e, r);
    a.delay = (new Date).getTime() - n,
    r ? a.httpCode = 200 : a.httpCode = 'timeout' == i ? 556 : 555,
    t(a)
  }
  }
  function s(e, n) {
  var a = e[n];
  if (a) {
    var s = document.getElementsByTagName('head') [0];
    e[n] = function (n, l) {
      var c,
      d,
      u;
      'object' === ('undefined' == typeof n ? 'undefined' : _typeof2(n)) ? (u = n, d = u.url)  : (d = n, u = l);
      var p = u.beforeSend,
      f = u.success,
      v = u.error,
      h = (new Date).getTime(),
      m = 200,
      g = 'jsonp' == u.dataType,
      _ = function (n) {
        setTimeout(function () {
          g ? c && !r(c, d) && (c = i(e, d, u))  : c = d;
          var a = o(c, n);
          a.delay = (new Date).getTime() - h,
          a.httpCode = m,
          t(a)
        })
      };
      u.beforeSend = function (e, t) {
        h = (new Date).getTime(),
        p && p.apply(this, arguments)
      },
      u.success = function (e, t, n) {
        _(e),
        f && f.apply(this, arguments)
      },
      u.error = function (e, t, n) {
        m = 'timeout' === t ? 556 : 555,
        _(),
        v && v.apply(this, arguments)
      };
      var w = a.apply(this, arguments);
      if (g) try {
        var y = s.getElementsByTagName('script');
        c = y[y.length - 1].getAttribute('src')
      } catch (b) {
      }
      return w
    }
  }
  }
  s.send = a,
  e.exports = s
  }()
  },
  function (e, t, n) {
  var i = n(176);
  e.exports = function () {
  var e;
  window.h5_reporter = e = i.initPlugin({
  video_type: window.PAY_STATUS
  }),
  e.ReportTree.attachGlobal(),
  e.Boss.setPageInfo('page_video_detail', ''),
  e.Boss.setKvCommonParams({
  page_type: '1'
  }),
  e.Boss.pageExpose()
  }
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  return e && e.__esModule ? e : {
  'default': e
  }
  }
  function r() {
  return r = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
  }
  return e
  },
  r.apply(this, arguments)
  }
  function o(e, t) {
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
        var e = r({
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
          var e = r({
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
  t.initPlugin = o;
  var a = i(n(177)),
  s = n(179)
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  return e && e.__esModule ? e : {
  'default': e
  }
  }
  function r(e) {
  return (r = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
  return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function o() {
  return o = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
  }
  return e
  },
  o.apply(this, arguments)
  }
  function a(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function s(e, t) {
  for (var n = 0; n < t.length; n++) {
  var i = t[n];
  i.enumerable = i.enumerable || !1,
  i.configurable = !0,
  'value' in i && (i.writable = !0),
  Object.defineProperty(e, i.key, i)
  }
  }
  function l(e, t, n) {
  return t && s(e.prototype, t),
  n && s(e, n),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t['default'] = void 0;
  var c = i(n(178)),
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
  function e(t, n) {
  a(this, e),
  this.bossMap = o({
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
  this.baseParams = o({
  }, this.defaultParams, n || {
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
      'object' === r(e) && (this.kvParams = e)
    }
  },
  {
    key: 'pageExpose',
    value: function (e) {
      var t = this.bossMap.pageExpose;
      if (t) {
        var n = o({
        }, this.pagePgInfo, e);
        this.report(t, n)
      }
    }
  },
  {
    key: 'pageTime',
    value: function (e) {
      var t = this.bossMap.pageTime;
      if (t) {
        var n = o({
        }, this.pagePgInfo, e);
        this.report(t, n)
      }
    }
  },
  {
    key: 'elementExpose',
    value: function (e) {
      var t = this.bossMap.elementExpose;
      if (t) {
        var n = o({
        }, this.elePgInfo, e);
        this.report(t, n)
      }
    }
  },
  {
    key: 'elementClick',
    value: function (e) {
      var t = this.bossMap.elementClick;
      if (t) {
        var n = o({
        }, this.elePgInfo, e);
        this.report(t, n)
      }
    }
  },
  {
    key: 'report',
    value: function (e, t) {
      var n = new XMLHttpRequest,
      i = [
      ],
      r = o({
      }, t, this.kvParams || {
      }),
      a = Math.random().toString(36).substr(2, 8),
      s = d + '?BossId=' + (e.BossId || '') + '&Pwd=' + e.Pwd + '&_dc=' + a,
      l = o({
      }, e, this.baseParams, {
        kv: JSON.stringify(r),
        _dc: Math.random().toString(36).substr(2, 8)
      });
      for (var c in l) i.push(c + '=' + encodeURIComponent(l[c]));
      n.onreadystatechange = function () {
        4 === this.readyState && 200 !== n.status && 304 !== n.status
      },
      n.open('POST', s, !0),
      n.setRequestHeader('content-type', 'application/x-www-form-urlencoded'),
      n.send(i.join('&')),
      setTimeout(function () {
        4 !== n.readyState && n.abort()
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
  var n = {
  setCookie: function (e, t, n, i, r) {
    var o = '';
    switch (this.getType(n)) {
      case 'number':
      case 'undefined':
        o = n === 1 / 0 || void 0 === n ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + n;
        break;
      case 'string':
        o = '; expires=' + n;
        break;
      case 'date':
        o = '; expires=' + n.toUTCString()
    }
    i = i || location.hostname,
    r = r || '/',
    document.cookie = [
      e,
      '=',
      escape(t),
      o,
      ';domain=',
      i,
      ';path=',
      r
    ].join('')
  },
  getCookie: function (e) {
    var t = {
    },
    n = document.cookie;
    n = n.split(';');
    for (var i = 0, r = n.length; i < r; i++) {
      var o = n[i].replace(/^\s+/, '').split('=');
      t[o[0]] = o[1]
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
    n = t.exec(location.search);
    return null === n ? '' : decodeURIComponent(n[1].replace(/\+/g, ' '))
  },
  getType: function (e) {
    if (null === e) return 'null';
    if (void 0 === e) return 'undefined';
    var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
    return t ? t[1].toLowerCase()  : ''
  }
  };
  t['default'] = n
  },
  function (e, t, n) {
  var i = n(180),
  r = n(187).ReportTree,
  o = n(188).ReportNode;
  e.exports = {
  ReportTree: r,
  ReportNode: o,
  getWindowNode: i.getWindowNode,
  init: function (e) {
    o.addConfig(e),
    r.attachGlobal()
  }
  }
  },
  function (e, t, n) {
  var i = n(181),
  r = n(182),
  o = n(184),
  a = n(186),
  s = n(183);
  e.exports = {
  VirtualNode: i.VirtualNode,
  VirtualElTree: r.VirtualElTree,
  VirtualElNode: o.VirtualElNode,
  ATTR_MUT_HASH: r.ATTR_MUT_HASH,
  getWindowNode: o.getWindowNode,
  Emitter: a.Emitter,
  domHelper: s
  }
  },
  function (e, t) {
  'use strict';
  function n(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function r(e, t, n) {
  return t && i(e.prototype, t),
  n && i(e, n),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.VirtualNode = void 0;
  var o = function () {
  function e(t) {
    n(this, e),
    this.data = t || {
    },
    this.parent = null,
    this.children = [
    ]
  }
  return r(e, [
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
        if (this.parent) for (var n = this.parent; n; ) {
          var i = n;
          if ('function' == typeof e && (i = e(n)), 'boolean' == typeof i && i) break;
          t.push(i),
          n = n.parent
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
        var n = this;
        t && (t.forEach(function (e) {
          e.remove(),
          e.parent = n
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
          for (var t = 0, n = e.length; t < n; t++) {
            var i = e[t];
            i.parent = null
          }
        }
      }
    }
  ]),
  e
  }();
  t.VirtualNode = o
  },
  function (e, t, n) {
  'use strict';
  function i(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function o(e, t, n) {
  return t && r(e.prototype, t),
  n && r(e, n),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.VirtualElTree = t.ATTR_MUT_HASH = t.RECALC_HASH = t.UPDATE_HASH = void 0;
  var a = n(183),
  s = n(184),
  l = n(185),
  c = '__updthash';
  t.UPDATE_HASH = c;
  var d = '__rechash';
  t.RECALC_HASH = d;
  var u = '__atmhash';
  t.ATTR_MUT_HASH = u;
  var p = function () {
  function e(t) {
    i(this, e),
    this.NodeClass = t || s.VirtualElNode,
    this.root = null,
    this.observer = null
  }
  return o(e, [
    {
      key: 'attach',
      value: function (e) {
        var t = this,
        n = this,
        i = this.NodeClass;
        if (!i.shouldBeNode(e)) throw new Error('root should be a node');
        this.root = i.getNode(e) || new i(this, e),
        n.update({
          el: e
        }),
        n.reflow({
          el: e
        }),
        this.observer = new MutationObserver(function (e) {
          var n = t.mut(e),
          i = n.updateArr,
          r = n.reflowArr;
          i && i.length > 0 && t.update(i),
          r && r.length > 0 && t.reflow(r)
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
        n = (0, l.genHash) (),
        i = null;
        i = e instanceof Array ? e : [
          e
        ],
        i.forEach(function (e) {
          t[e.action || 'add'](e, n)
        })
      }
    },
    {
      key: 'createTree',
      value: function (e, t, n) {
        var i = this,
        r = this.NodeClass,
        o = [
        ];
        return (0, a.domIterator) (e, function (e, n) {
          var a = e[c];
          if (a == t) return !1;
          if (e[c] = t, r.shouldBeNode(e)) {
            var s = r.getNode(e);
            return s ? s.clear()  : s = new r(i, e),
            n ? n.append(s)  : o.push(s),
            s
          }
          return n
        }, n),
        o
      }
    },
    {
      key: 'add',
      value: function (e, t) {
        var n = this.NodeClass,
        i = e.el,
        r = [
        ];
        e.all = e.all || [
          e.el
        ];
        for (var o = 0, s = e.all.length; o < s; o++) {
          var l = e.all[o];
          r = r.concat(this.createTree(l, t))
        }
        if (0 != r.length) {
          var c = null,
          d = null;
          (0, a.parentIterator) (i, function (e) {
            if (i != e) return c = n.getNode(e),
            !!c;
            for (var t = e.previousElementSibling; t && ((0, a.domReverseIterator) (t, function (e) {
              if (d = n.getNode(e)) return !0
            }), !d); ) t = t.previousElementSibling;
            return !!d
          }),
          !d && c ? c.insert(0, r)  : d && (c = c || d.parent, c && c.insert(c.children.indexOf(d) + 1, r))
        }
      }
    },
    {
      key: 'remove',
      value: function (e, t) {
        var n = this.NodeClass;
        e.all = e.all || [
          e.el
        ];
        for (var i = 0, r = e.all.length; i < r; i++) {
          var o = e.all[i];
          (0, a.domIterator) (o, function (e) {
            if (e[c] == t) return !1;
            e[c] = t;
            var i = n.getNode(e);
            return i ? (i.remove(), !1)  : void 0
          })
        }
      }
    },
    {
      key: 'reflow',
      value: function (e) {
        var t = this,
        n = null,
        i = (0, l.genHash) (),
        r = this.NodeClass;
        n = e instanceof Array ? e : [
          e
        ],
        n.forEach(function (e) {
          var n = e.el;
          (0, a.parentReverseIterator) (n, function (e) {
            var n = r.getNode(e);
            if (n && e[d] != i && (e[d] = i, n.recalc()), t.root != n) for (var o = e.nextElementSibling; o; ) (0, a.domIterator) (o, function (e) {
              var t = r.getNode(e);
              t && t.recalc()
            }),
            o = o.nextElementSibling
          }, null, t.root.el),
          e.ignoreChild || (0, a.domIterator) (n, function (e) {
            if (n != e) {
              var t = r.getNode(e);
              t && e[d] != i && (e[d] = i, t.recalc())
            }
          })
        })
      }
    },
    {
      key: 'mut',
      value: function (e) {
        for (var t = [
        ], n = [
        ], i = (0, l.genHash) (), r = this.NodeClass, o = e.length - 1; o >= 0; o--) {
          var s = e[o],
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
              var v = f.nextElementSibling;
              v ? n.push({
                el: v
              })  : n.push({
                el: c,
                ignoreChild: !0
              })
            } else n.push({
              el: c
            })
          } else if ('attributes' == s.type) {
            var h = s.attributeName;
            c[u] == i || 'class' != h && 'style' != h || (c[u] = i, n.push({
              el: c
            }));
            var m = r.getNode(c),
            g = r.shouldBeNode(c);
            m && !g || !m && g && c[u] != i && (t.push({
              el: c,
              action: 'add',
              all: [
                c
              ]
            }), c[u] = i, n.push({
              el: c
            })),
            m && m.updateData(c, h, i)
          } else 1 != c.nodeType && (c = c.parentNode),
          n.push({
            el: c
          })
        }
        return {
          updateArr: t,
          reflowArr: n
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
  function n(e, t, i, r) {
  var o = t(e, i),
  a = e.childNodes;
  if ('boolean' == typeof o) return o;
  for (var s = 0, l = a.length; s < l; s++) {
    var c = a[s];
    if (c && 1 === c.nodeType) {
      var d = n(c, t, o, !0);
      if (d) return !0
    }
  }
  }
  function i(e, t, n, r) {
  var o = t(e, n),
  a = e.childNodes;
  if ('boolean' == typeof o) return o;
  for (var s = a.length - 1; s >= 0; s--) {
    var l = a[s];
    if (l && 1 === l.nodeType) {
      var c = i(l, t, o, !0);
      if (c) return !0
    }
  }
  }
  function r(e, t, n) {
  for (; e && (n = t(e, n), e = e.parentNode, 'boolean' != typeof n || !n); );
  }
  function o(e, t, n, i) {
  for (var r = [
  ]; e && (r.push(e), e != i); ) e = e.parentNode;
  for (var o = r.length - 1; o >= 0 && (n = t(r[o], n), 'boolean' != typeof n || !n); o--);
  }
  function a(e) {
  var t = [
  ];
  if (e && e[0]) for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n];
    1 == i.nodeType && t.unshift(i)
  }
  return t
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.domIterator = n,
  t.domReverseIterator = i,
  t.parentIterator = r,
  t.parentReverseIterator = o,
  t.onlyElements = a
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  return (i = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function r(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function o(e, t) {
  return !t || 'object' !== i(t) && 'function' != typeof t ? s(e)  : t
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
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function c(e, t, n) {
  return t && l(e.prototype, t),
  n && l(e, n),
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
    var n = t.throttle,
    i = function () {
      var t = e.scrollX - b.scrollLeft,
      n = e.scrollY - b.scrollTop;
      b.scrollLeft = e.scrollX,
      b.scrollTop = e.scrollY,
      b.moveTree(t, n, !0)
    };
    n > 0 && (i = (0, f.throttle) (i, n)),
    e.addEventListener('scroll', i)
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
  var f = n(185),
  v = n(181),
  h = n(186),
  m = '__doid',
  g = {
  },
  _ = 1,
  w = {
  click: !0,
  scroll: !0
  },
  y = {
  click: !0
  },
  b = null,
  x = function (e) {
  function t(e, n, i) {
    var l;
    return r(this, t),
    l = o(this, a(t).call(this, i)),
    l.uid = 0,
    l.emitter = new h.Emitter(s(l)),
    l.unbinds = {
    },
    l.width = 0,
    l.height = 0,
    l.top = 0,
    l.left = 0,
    l.scrollTop = 0,
    l.scrollLeft = 0,
    l.tree = e,
    l.el = n,
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
    l.attach(n),
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
          var n = e[m];
          t = !n,
          this.el = e,
          t && (n = _++, this.uid = e[m] = n, g[n] = this),
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
          var n = e[m];
          n && (g[n] = null)
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
          var n = /data-([\w-]+)/.exec(t),
          i = n && n[1];
          if (i) {
            var r = {
            };
            r[i] = e.dataset[i],
            this.setData(r)
          }
        } else this.setData(e.dataset),
        e.dataset.scroller && this.attachScroller(e)
      }
    },
    {
      key: 'attachScroller',
      value: function (e, t) {
        var n = this,
        i = function () {
          var t = e.scrollLeft - n.scrollLeft,
          i = e.scrollTop - n.scrollTop;
          n.scrollTop = e.scrollTop,
          n.scrollLeft = e.scrollLeft,
          n.moveTree(t, i, !0)
        };
        t = t || {
        };
        var r = t.throttle;
        r > 0 && (i = (0, f.throttle) (i, r)),
        this.scrollTop = e.scrollTop,
        this.scrollLeft = e.scrollLeft,
        this.isScroller = !0,
        this.on('scroll', i)
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
          n = this.getScrollParent(),
          i = n.getRect(),
          r = this.top = t.top - i.top + n.scrollTop,
          o = this.left = t.left - i.left + n.scrollLeft;
          this.width = t.width,
          this.height = t.height,
          this.isScroller && (this.pt = n.pt + r - this.scrollTop, this.pl = n.pl + o - this.scrollLeft),
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
        var n = this.rect;
        n.top = n.top - t,
        n.left = n.left - e,
        n.right = n.right - e,
        n.bottom = n.bottom - t,
        this.calcViewPort(),
        this.syncVisible()
      }
    },
    {
      key: 'calcViewPort',
      value: function () {
        var e = this.rect,
        t = this.parent || p(),
        n = this.viewport,
        i = t.viewport;
        this.overflowHide ? (n.top = Math.max(e.top, i.top), n.left = Math.max(e.left, i.left), n.right = Math.min(e.right, i.right), n.bottom = Math.min(e.bottom, i.bottom))  : (n.top = i.top, n.left = i.left, n.right = i.right, n.bottom = i.bottom)
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
      value: function (e, t, n) {
        n || this.move(e, t);
        for (var i = this.children.length - 1; i >= 0; i--) this.children[i].moveTree(e, t)
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
      value: function (e, n) {
        var i = this,
        r = this.emitter;
        if (r.on(e, n), w[e]) {
          var o = this.unbinds,
          a = this.el;
          if (!o[e]) {
            if (y[e]) {
              var s = this.tree.root;
              if (s && !s.delegates[e] && s.el) {
                var l = s.delegates[e] = function (n) {
                  var i = n.target,
                  r = t.getNode(i);
                  !r || r.lazy || n['_vn_id_' + r.uid] || (r.emitter.emit(e, n, r.lazy), n['_vn_id_' + r.uid] = !0)
                };
                s.el.addEventListener(e, l, !0)
              }
            }
            var c = function (t) {
              //t['_vn_id_' + i.uid] || (r.emit(e, t, i.lazy), t['_vn_id_' + i.uid] = !0)
              //console.log("禁止打开APP");
            };
            a.addEventListener(e, c, !0),
            o[e] = function () {
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
  }(v.VirtualNode);
  t.VirtualElNode = x
  },
  function (e, t) {
  'use strict';
  function n() {
  return (new Date).getTime() + '' + r++
  }
  function i(e, t) {
  var n = 0;
  return t = t || 0,
  function () {
    var i = this,
    r = arguments;
    clearTimeout(n),
    n = setTimeout(function () {
      e.apply(i, r)
    }, t)
  }
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.genHash = n,
  t.throttle = i;
  var r = 0
  },
  function (e, t) {
  'use strict';
  function n(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function r(e, t, n) {
  return t && i(e.prototype, t),
  n && i(e, n),
  e
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.Emitter = void 0;
  var o = function () {
  function e(t) {
    n(this, e),
    this.context = t,
    this.events = {
    }
  }
  return r(e, [
    {
      key: 'on',
      value: function (e, t) {
        var n = this.events[e] || [
        ];
        return n.push(t),
        this.events[e] = n,
        this
      }
    },
    {
      key: 'off',
      value: function (e, t) {
        if ('undefined' == typeof t) this.events[e] = [
        ];
         else for (var n = this.events[e] || [
        ], i = n.length - 1; i >= 0; i--) if (n[i] === t) {
          n[i] = null;
          break
        }
        return this
      }
    },
    {
      key: 'emit',
      value: function (e, t, n) {
        var i = !0,
        r = this.events[e] || [
        ];
        'boolean' == typeof n && (i = n);
        for (var o = r.length - 1; o >= 0; o--) {
          var a = r[o];
          if ('function' == typeof a) if (i) setTimeout(function (e, t, n) {
            e.call(t, n)
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
  t.Emitter = o
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  return (i = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function r(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function o(e, t) {
  return !t || 'object' !== i(t) && 'function' != typeof t ? a(e)  : t
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
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function c(e, t, n) {
  return t && l(e.prototype, t),
  n && l(e, n),
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
  var p = n(180),
  f = n(188),
  v = null,
  h = function (e) {
  function t(e) {
    var n;
    return r(this, t),
    n = o(this, s(t).call(this, e || f.ReportNode)),
    n.commonData = {
    },
    n.pageData = {
    },
    n.lastPageData = {
    },
    n
  }
  return d(t, e),
  c(t, null, [
    {
      key: 'attachGlobal',
      value: function (e) {
        return v = new this(e),
        v.attach(document.body),
        (0, p.getWindowNode) ().on('resize', function () {
          v.reflow(v.root)
        }),
        (0, p.getWindowNode) ().attachScroller(window, {
          throttle: 200
        }),
        (0, p.getWindowNode) ().append(v.root),
        v
      }
    },
    {
      key: 'getGlobalTree',
      value: function () {
        return v
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
  t.ReportTree = h
  },
  function (e, t, n) {
  'use strict';
  function i(e) {
  return (i = 'function' == typeof Symbol && 'symbol' === _typeof2(Symbol.iterator) ? function (e) {
    return 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }
   : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : 'undefined' == typeof e ? 'undefined' : _typeof2(e)
  }) (e)
  }
  function r(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1,
    i.configurable = !0,
    'value' in i && (i.writable = !0),
    Object.defineProperty(e, i.key, i)
  }
  }
  function a(e, t, n) {
  return t && o(e.prototype, t),
  n && o(e, n),
  e
  }
  function s(e, t) {
  return !t || 'object' !== i(t) && 'function' != typeof t ? l(e)  : t
  }
  function l(e) {
  if (void 0 === e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return e
  }
  function c(e, t, n) {
  return (c = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
    var i = d(e, t);
    if (i) {
      var r = Object.getOwnPropertyDescriptor(i, t);
      return r.get ? r.get.call(n)  : r.value
    }
  }) (e, t, n || e)
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
  var v = n(189),
  h = n(180),
  m = [
  ],
  g = [
  ],
  _ = 'data-ofhide',
  w = 'data-scroller',
  y = 'data-lazy',
  b = function (e) {
  function t(e, n, i) {
    var o;
    return r(this, t),
    o = s(this, u(t).call(this, e, n, i)),
    o.lazy = !1,
    o.lastHash = 0,
    o
  }
  return p(t, e),
  a(t, [
    {
      key: 'updateData',
      value: function (e, t, n) {
        var i = this,
        r = e.attributes,
        o = function (t) {
          var n = r[t.name];
          n && t.func.call(i, n.value, e)
        };
        m.forEach(function (a) {
          if ('undefined' == typeof t) a.arr.forEach(o);
           else {
            var s = a.map[t];
            s && o(s)
          }
          a.events.forEach(function (o) {
            var a = o.name;
            i.off(a, o.action),
            o.condition.call(i, r, e) && i.on(a, o.action);
            var s = o.keyAttrs;
            s instanceof Array && t && s.indexOf(t) > - 1 && (!n || n != i.lastHash) && (i.lastHash = n, i.emit(a))
          })
        }),
        'undefined' == typeof t ? (this.updateOfData(r, e), this.updateScrollData(r, e), this.updateLazyData(r, e))  : t == _ ? this.updateOfData(r, e)  : t == w ? this.updateScrollData(r, e)  : t == y && this.updateLazyData(r, e)
      }
    },
    {
      key: 'updateOfData',
      value: function (e, t) {
        var n = e[_];
        this.overflowHide = !(n && 'false' === n.value)
      }
    },
    {
      key: 'updateScrollData',
      value: function (e, t) {
        var n = e[w];
        n ? this.attachScroller(t)  : this.off('scroll')
      }
    },
    {
      key: 'updateLazyData',
      value: function (e, t) {
        var n = e[y];
        this.lazy = !(!n || 'true' !== n.value)
      }
    },
    {
      key: 'on',
      value: function (e, n) {
        var i = this,
        r = 'expose' == e && this.emitter.listeners('expose').length <= 0;
        return c(u(t.prototype), 'on', this).call(this, e, n),
        r && c(u(t.prototype), 'on', this).call(this, 'visibilityChanged', function (e) {
          e && i.emit('expose')
        }),
        this
      }
    },
    {
      key: 'getParam',
      value: function (e, t) {
        var n = this,
        i = t || {
        },
        r = [
        ];
        return e.forEach(function (e) {
          var t = i[e] = i[e] || n.data[e];
          t || r.push(e)
        }),
        r.length >= 0 && this.mapParent(function (e) {
          var t = e.data || {
          };
          return r = r.filter(function (e) {
            var n = i[e] = t[e];
            return !n
          }),
          0 === r.length
        }),
        i
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
        n = [
        ],
        r = {
        };
        m = m.concat(e.map(function (e) {
          var o = e.attrs,
          a = e.events,
          s = [
          ];
          if (e.overflowHide && (_ = e.overflowHide), e.isScroller && (w = e.isScroller), e.lazy && (y = e.lazy), o) {
            var l = Object.keys(o);
            l.forEach(function (e) {
              t[e] || (t[e] = !0, g.push(e));
              var a,
              s = o[e];
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
                this.setData((0, v.kvStringToObject) (e))
              }
               : 'string' == typeof s ? a = function (e) {
                this.data[s] = e
              }
               : 'object' == i(s) ? a = function (t) {
                var n,
                i = s.prop || e,
                r = s.dataType;
                if ('JSON' == r) try {
                  n = JSON.parse(t)
                } catch (o) {
                } else n = 'KV' == r ? (0, v.kvStringToObject) (t)  : t;
                this.data[i] = n || {
                }
              }
               : 'function' == typeof s && (a = s), a) {
                var l = {
                  name: e,
                  func: a
                };
                n.push(l),
                r[e] = l
              }
            })
          }
          return a && (s = Object.keys(a).map(function (e) {
            var t = a[e],
            n = {
              name: e,
              action: t.action
            },
            i = t.condition;
            return 'string' == typeof i ? (n.condition = function (e) {
              return e[i]
            }, 'click' != e && (n.keyAttrs = [
              i
            ]))  : i instanceof Array ? (n.condition = function (e) {
              for (var t = 0; i[t]; ) {
                if (e[i[t]]) return !0;
                t++
              }
              return !1
            }, 'click' != e && (n.keyAttrs = i))  : 'function' == typeof i ? n.condition = i : n.condition = function () {
              return !0
            },
            t.keyAttrs && (n.keyAttrs = t.keyAttrs),
            n
          })),
          {
            arr: n,
            map: r,
            events: s
          }
        }))
      }
    },
    {
      key: 'shouldBeNode',
      value: function (e) {
        var t = e.attributes;
        return !!(t[_] || t[w] || t[y]) || g.some(function (e) {
          return t[e]
        })
      }
    }
  ]),
  t
  }(h.VirtualElNode);
  t.ReportNode = b
  },
  function (e, t) {
  'use strict';
  function n(e) {
  var t = {
  };
  if ('string' == typeof e) for (var n = e.split('&'), i = 0, r = n.length; i < r; i++) {
    var o = n[i],
    a = /^([^=]+)=(.*)$/.exec(o);
    a && (t[a[1]] = decodeURIComponent(a[2]))
  }
  return t
  }
  function i(e) {
  return Object.keys(e).map(function (t) {
    return t + '=' + encodeURIComponent(e[t])
  }).join('&')
  }
  Object.defineProperty(t, '__esModule', {
  value: !0
  }),
  t.kvStringToObject = n,
  t.objectToKvString = i
  }
  ]);
  