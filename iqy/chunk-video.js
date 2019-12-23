(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['chunk-video'],
{
  4714: function (e, t, i) {
    'use strict';
    var n = i('e814'),
    a = i.n(n),
    r = (i('28a5'), i('57e7'), i('795b')),
    o = i.n(r),
    s = (i('ac6a'), i('f3e2'), i('0a0d')),
    c = i.n(s),
    d = i('b383'),
    u = i.n(d),
    l = i('4b1c');
    i('7f7f');
    function p() {
      try {
        return window.dfp.tryGetFingerPrint() || ''
      } catch (e) {
        return ''
      }
    }
    function h(e) {
      return 'string' !== typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
    }
    function v(e, t) {
      if (!e || !t) return e || t;
      for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      return e
    }
    i.d(t, 'j', function () {
      return h
    }),
    i.d(t, 'b', function () {
      return v
    }),
    i.d(t, 'l', function () {
      return y
    }),
    i.d(t, 'a', function () {
      return b
    }),
    i.d(t, 'i', function () {
      return g
    }),
    i.d(t, 'e', function () {
      return _
    }),
    i.d(t, 'd', function () {
      return S
    }),
    i.d(t, 'h', function () {
      return u.a
    }),
    i.d(t, 'f', function () {
      return l['b']
    }),
    i.d(t, 'c', function () {
      return l['a']
    }),
    i.d(t, 'g', function () {
      return l['c']
    }),
    i.d(t, 'k', function () {
      return p
    });
    var f = 0;
    function y() {
      return c() () + ++f
    }
    var m = 'vdata' + c() ();
    function b(e, t, i) {
      var n = e[m] = e[m] || {
      };
      n.handlers = n.handlers || {
      },
      n.handlers[t] = n.handlers[t] || [
      ],
      i.guid = y(),
      n.handlers[t].push(i),
      e.addEventListener(t, i)
    }
    function g(e, t, i) {
      var n = e[m] = e[m] || {
      };
      if (n.handlers = n.handlers || {
      }, n.handlers[t] = n.handlers[t] || [
      ], i) {
        for (var a, r = n.handlers[t], o = r.length; o > 0; o--) {
          var s = r[t];
          if (s.guid === i.guid) {
            a = s,
            n.handlers[t] = r.splice(o, 1);
            break
          }
        }
        a && e.removeEventListener(t, i)
      } else n.handlers[t].forEach(function (i) {
        e.removeEventListener(t, i)
      }),
      n.handlers[t] = [
      ]
    }
    var k = 0;
    function w() {
    }
    function _(e) {
      var t,
      i,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      },
      r = a.prefix || '__jp',
      s = a.callback || r + k++,
      c = a.timeout || 15000,
      d = document.getElementsByTagName('script') [0] || document.head;
      return new o.a(function (a, r) {
        function o() {
          t.removeEventListener('error', l),
          t.parentNode && t.parentNode.removeChild(t),
          window[s] = w,
          i && clearTimeout(i)
        }
        function l(e) {
          o(),
          r(e)
        }
        c && (i = setTimeout(function () {
          o(),
          r(Error('timeout'))
        }, c)),
        window[s] = function (e) {
          o(),
          a(e)
        },
        n.callback = s,
        e = ''.concat(e).concat(e.indexOf('?') > - 1 ? '&' : '?').concat(u.a.stringify(n)),
        t = document.createElement('script'),
        t.addEventListener('error', l),
        t.src = e,
        d.parentNode.insertBefore(t, d)
      })
    }
    function S(e, t) {
      try {
        for (var i, n, r = e.split('.'), o = t.split('.'), s = Math.max(r.length, o.length), c = 0, d = 0; d < s && !c; d++) i = a() (r[d], 10) || 0,
        n = a() (o[d], 10) || 0,
        i < n && (c = - 1),
        i > n && (c = 1);
        return c
      } catch (u) {
        return 0
      }
    }
  },
  '4b1c': function (e, t, i) {
    'use strict';
    (function (e) {
      i.d(t, 'b', function () {
        return o
      }),
      i.d(t, 'a', function () {
        return s
      }),
      i.d(t, 'c', function () {
        return c
      });
      i('a481'),
      i('4917');
      function n(e, t) {
        var i = {
        },
        n = {
        },
        a = {
        },
        r = e.match(/VivoBrowser\/([\d.]+)/i),
        o = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        c = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        d = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
        u = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
        l = e.match(/(QQBrowser)\/([\d.]+)/),
        p = e.match(/baiduboxapp\/([\d.]+)/i),
        h = e.match(/baidubrowser\/([\d.]+)/i),
        v = e.match(/MicroMessenger\/([\d.]+)/i),
        f = e.match(/iqiyireader IqiyiReaderVersion\/([\d.]+)/i),
        y = e.match(/IqiyiVersion_Reader\/([\d.]+)/i),
        m = e.match(/(?:Redmi|HM) ([\w ]+) Build/i);
        return m && (a.redmi = !0, a.version = m[1]),
        o && (i.android = !0, i.version = o[2]),
        d && !c && (i.ios = i.iphone = !0, i.version = d[2].replace(/_/g, '.')),
        s && (i.ios = i.ipad = !0, i.version = s[2].replace(/_/g, '.')),
        c && (i.ios = i.ipod = !0, i.version = c[3] ? c[3].replace(/_/g, '.')  : null),
        u && (n.chrome = !0, n.version = u[1]),
        l && (n.qq = !0, n.version = l[2]),
        p && (n.baidubox = !0, n.version = p[1]),
        h && (n.baidubrowser = !0, n.version = h[1]),
        v && (n.weixin = !0, n.version = v[1]),
        f && (n.readApp = !0, n.version = f[1]),
        y && (n.readPlugin = !0, n.version = y[1]),
        r && (n.vivobrowser = !0),
        {
          os: i,
          browser: n,
          osProducer: a
        }
      }
      var a = e.navigator || {
        userAgent: '',
        platform: ''
      },
      r = n(a.userAgent, a.platform),
      o = r.os,
      s = r.browser,
      c = r.osProducer
    }).call(this, i('483b'))
  },
  a658: function (e, t, i) {
    'use strict';
    i.d(t, 'a', function () {
      return a
    }),
    i.d(t, 'b', function () {
      return r
    }),
    i.d(t, 'd', function () {
      return o
    }),
    i.d(t, 'c', function () {
      return s
    });
    var n = i('4714'),
    a = 'm3u8',
    r = 'mp4';
    function o() {
      return n['f'].ios && !n['c'].readApp && !n['c'].readPlugin || n['g'].redmi && 'NOTE 2' === n['g'].version.toUpperCase() && n['f'].android && Object(n['d']) (n['f'].version, '5.0') > 0 && !n['c'].baidubrowser || (n['c'].baidubox || n['c'].baidubrowser || n['c'].weixin || !n['c'].weixin && n['c'].qq && Object(n['d']) (n['c'].version, '7.6') >= 0) && n['f'].android && Object(n['d']) (n['f'].version, '4.4') >= 0 || n['c'].vivobrowser && n['f'].android && Object(n['d']) (n['f'].version, '5.0') > 0 ? a : r
    }
    function s() {
      return n['f'].ios ? 'qc_100001_100102' : 'qc_100001_100186'
    }
  },
  d44d: function (e, t, i) {
    'use strict';
    i('0c36');
    var n = i('4714'),
    a = i('795b'),
    r = i.n(a),
    o = i('e814'),
    s = i.n(o),
    c = (i('f3e2'), i('d92a'), i('d225')),
    d = i('b0b4'),
    u = i('308d'),
    l = i('6bb5'),
    p = i('4e2b'),
    h = function () {
      function e() {
        Object(c['a']) (this, e)
      }
      return Object(d['a']) (e, [
        {
          key: 'on',
          value: function (e, t) {
            return this._callbacks = this._callbacks || {
            },
            (this._callbacks[e] = this._callbacks[e] || [
            ]).push(t),
            this
          }
        },
        {
          key: 'once',
          value: function (e, t) {
            var i = this;
            function n() {
              i.off(e, n),
              t.apply(this, arguments)
            }
            return this._callbacks = this._callbacks || {
            },
            n.fn = t,
            this.on(e, n),
            this
          }
        },
        {
          key: 'off',
          value: function (e, t) {
            if (this._callbacks = this._callbacks || {
            }, !arguments.length) return this._callbacks = {
            },
            this;
            var i,
            n = this._callbacks[e];
            if (!n) return this;
            if (1 === arguments.length) return delete this._callbacks[e],
            this;
            for (var a = 0; a < n.length; a++) if (i = n[a], i === t || i.fn === t) {
              n.splice(a, 1);
              break
            }
            return this
          }
        },
        {
          key: 'trigger',
          value: function (e) {
            this._callbacks = this._callbacks || {
            };
            var t = [
            ].slice.call(arguments, 1),
            i = this._callbacks[e];
            if (i) {
              i = i.slice(0);
              for (var n = 0, a = i.length; n < a; ++n) i[n].apply(this, t)
            }
            return this
          }
        },
        {
          key: 'listeners',
          value: function (e) {
            return this._callbacks = this._callbacks || {
            },
            this._callbacks[e] || [
            ]
          }
        },
        {
          key: 'hasListeners',
          value: function (e) {
            return !!this.listeners(e).length
          }
        }
      ]),
      e
    }(),
    v = function (e) {
      function t() {
        return Object(c['a']) (this, t),
        Object(u['a']) (this, Object(l['a']) (t).apply(this, arguments))
      }
      return Object(p['a']) (t, e),
      Object(d['a']) (t, [
        {
          key: 'seekable',
          value: function () {
            return this.player.seekable
          }
        },
        {
          key: 'playbackRate',
          value: function () {
            return this.player.playbackRate
          }
        },
        {
          key: 'defaultPlaybackRate',
          value: function () {
            return this.player.defaultPlaybackRate
          }
        },
        {
          key: 'networkState',
          value: function () {
            return this.player.networkState
          }
        },
        {
          key: 'readyState',
          value: function () {
            return this.player.readyState
          }
        },
        {
          key: 'videoWidth',
          value: function () {
            return this.player.videoWidth
          }
        },
        {
          key: 'ended',
          value: function () {
            return this.player.ended
          }
        },
        {
          key: '_handleLoadstart',
          value: function (e) {
            this.trigger('loadstart', e)
          }
        },
        {
          key: '_handlePause',
          value: function (e) {
            this.trigger('pause', e)
          }
        },
        {
          key: '_handleWaiting',
          value: function (e) {
            this.trigger('waiting', e)
          }
        },
        {
          key: '_handleProgress',
          value: function (e) {
            this.trigger('progress', e)
          }
        },
        {
          key: '_handleAbort',
          value: function (e) {
            this.trigger('abort', e)
          }
        },
        {
          key: '_handleCanplay',
          value: function (e) {
            this.trigger('canplay', e)
          }
        },
        {
          key: '_handleCanplaythrough',
          value: function (e) {
            this.trigger('canplaythrough', e)
          }
        },
        {
          key: '_handlePlaying',
          value: function (e) {
            this.trigger('playing', e)
          }
        },
        {
          key: '_handlePlay',
          value: function (e) {
            this.trigger('play', e)
          }
        },
        {
          key: '_handleEnded',
          value: function (e) {
            Math.abs(this.duration() - this.currentTime()) > 1 || this.trigger('ended', e)
          }
        },
        {
          key: '_handleDurationchange',
          value: function (e) {
            this.trigger('durationchange', e)
          }
        },
        {
          key: '_handleError',
          value: function (e) {
            this.trigger('error', e)
          }
        },
        {
          key: '_handleSuspend',
          value: function (e) {
            this.trigger('suspend', e)
          }
        },
        {
          key: '_handleEmptied',
          value: function (e) {
            this.trigger('emptied', e)
          }
        },
        {
          key: '_handleStalled',
          value: function (e) {
            this.trigger('stalled', e)
          }
        },
        {
          key: '_handleLoadedmetadata',
          value: function (e) {
            this.trigger('loadedmetadata', e)
          }
        },
        {
          key: '_handleLoadeddata',
          value: function (e) {
            this.trigger('loadeddata', e)
          }
        },
        {
          key: '_handleRatechange',
          value: function (e) {
            this.trigger('ratechange', e)
          }
        },
        {
          key: '_handleResize',
          value: function (e) {
            this.trigger('resize', e)
          }
        },
        {
          key: '_handleVolumechange',
          value: function (e) {
            this.trigger('volumechange', e)
          }
        },
        {
          key: '_handleTexttrackchange',
          value: function (e) {
            this.trigger('texttrackchange', e)
          }
        },
        {
          key: '_handleClick',
          value: function (e) {
            this.trigger('click', e)
          }
        },
        {
          key: '_handleTouchstart',
          value: function (e) {
            this.trigger('touchstart', e)
          }
        },
        {
          key: '_handleTouchmove',
          value: function (e) {
            this.trigger('touchmove', e)
          }
        },
        {
          key: '_handleTouchend',
          value: function (e) {
            this.trigger('touchend', e)
          }
        },
        {
          key: '_handleChange',
          value: function (e) {
            this.trigger('change', e)
          }
        },
        {
          key: '_handleCancel',
          value: function (e) {
            this.trigger('cancel', e)
          }
        }
      ]),
      t
    }(h),
    f = i('f992'),
    y = [
      'loadstart',
      'pause',
      'waiting',
      'progress',
      'abort',
      'canplay',
      'canplaythrough',
      'playing',
      'play',
      'ended',
      'durationchange',
      'error',
      'seeked',
      'suspend',
      'emptied',
      'stalled',
      'loadedmetadata',
      'loadeddata',
      'timeupdate',
      'ratechange',
      'resize',
      'volumechange',
      'texttrackchange',
      'touchstart',
      'touchmove',
      'touchend',
      'change',
      'cancel',
      'seeking'
    ],
    m = function (e) {
      function t(e) {
        var i;
        return Object(c['a']) (this, t),
        i = Object(u['a']) (this, Object(l['a']) (t).call(this)),
        i.player = e.player,
        i.controlEle = e.controlEle,
        i.playerZone = n['f'].ios ? i.player : i.controlEle || i.player.parentNode,
        i.cache = {
        },
        i._seekLock = !1,
        i._timeupdatetime = 0,
        i.updateFullScreen(),
        i.bind(),
        i
      }
      return Object(p['a']) (t, e),
      Object(d['a']) (t, [
        {
          key: 'reset',
          value: function () {
            this.cache.isValidDuration = !1,
            this._timeupdatetime = 0
          }
        },
        {
          key: 'destory',
          value: function () {
            this.cache = {
            },
            this._seekLock = !1,
            this._timeupdatetime = 0,
            this.unbind()
          }
        },
        {
          key: 'player',
          value: function () {
            return this.player
          }
        },
        {
          key: 'updateFullScreen',
          value: function () {
            f['a'].requestFullscreen || this.player.webkitEnterFullscreen && (f['a'].requestFullscreen = 'webkitEnterFullscreen')
          }
        },
        {
          key: 'bind',
          value: function () {
            var e = this;
            y.forEach(function (t) {
              Object(n['a']) (e.player, t, e['_handle'.concat(Object(n['j']) (t))].bind(e))
            }),
            n['f'].ios && 11 === s() (n['f'].version) ? Object(n['a']) (this.player, 'touchend', this._handleClick.bind(this))  : Object(n['a']) (this.player, 'click', this._handleClick.bind(this)),
            Object(n['a']) (this.playerZone, f['a'].fullscreenchange, this._handleFullscreenchange.bind(this))
          }
        },
        {
          key: 'unbind',
          value: function () {
            var e = this;
            y.forEach(function (t) {
              Object(n['i']) (e.player, t)
            }),
            Object(n['i']) (this.player, f['a'].fullscreenchange)
          }
        },
        {
          key: 'play',
          value: function () {
            var e = this;
            if (this.src()) {
              var t = this.player.play();
              return t ? t.catch (function (t) {
                t.targetName = 'play',
                e.trigger('error', t)
              })  : r.a.resolve()
            }
            console.log('src is not null')
          }
        },
        {
          key: 'pause',
          value: function () {
            return this.player.pause()
          }
        },
        {
          key: 'resetVideo',
          value: function () {
            this.player.currentTime = 0
          }
        },
        {
          key: 'seek',
          value: function (e) {
            var t = this.seekable();
            if (t.length > 0) {
              var i = Math.ceil(t.start(t.length - 1)),
              n = Math.floor(t.end(t.length - 1));
              e = e < i ? i : e > n ? n : e
            }
            this.currentTime(e),
            this.play()
          }
        },
        {
          key: 'lockSeek',
          value: function () {
            this._seekLock = !0
          }
        },
        {
          key: 'unLockSeek',
          value: function () {
            this._seekLock = !1
          }
        },
        {
          key: 'currentTime',
          value: function (e) {
            if ('undefined' === typeof e) return this.player.currentTime || 0;
            try {
              var t = this.duration(),
              i = this.isValidDuration();
              e < 0 && (e = 0),
              i && t && (n['f'].ios && e === t && (e -= 1), this.player.currentTime = e)
            } catch (a) {
            }
          }
        },
        {
          key: 'duration',
          value: function () {
            return this.player.duration === 1 / 0 && n['f'].android && n['c'].chrome && 0 === this.player.currentTime ? NaN : this.player.duration || NaN
          }
        },
        {
          key: 'isValidDuration',
          value: function () {
            if (!this.cache.isValidDuration) {
              var e = this.seekable();
              this.cache.isValidDuration = e.length >= 1 && e.end(e.length - 1) > 1
            }
            return this.cache.isValidDuration
          }
        },
        {
          key: 'src',
          value: function (e) {
            if ('undefined' === typeof e) return this.cache.src || '';
            this.cache.src = e,
            this.player.src = e,
            this.trigger('src', e)
          }
        },
        {
          key: 'addEventListener',
          value: function (e, t) {
            this.player.addEventListener(e, t.bind(this))
          }
        },
        {
          key: '_handleTimeupdate',
          value: function () {
            this.checkSeekBack() || (this._timeupdatetime = this.currentTime(), this.trigger('timeupdate'))
          }
        },
        {
          key: '_handleSeeking',
          value: function (e) {
            this.checkSeekBack() || this.trigger('seeking')
          }
        },
        {
          key: '_handleSeeked',
          value: function () {
            this._seekLock || this.trigger('seeked')
          }
        },
        {
          key: 'checkSeekBack',
          value: function () {
            if (this._seekLock) {
              var e = this.currentTime();
              if (e - this._timeupdatetime > 2) return this.seek(this._timeupdatetime),
              !0
            }
            return !1
          }
        },
        {
          key: 'paused',
          value: function () {
            return !1 !== this.player.paused
          }
        },
        {
          key: 'buffered',
          value: function () {
            var e = this.player.buffered;
            return e && e.length || (e = {
              length: 0,
              start: function () {
                return - 1
              },
              end: function () {
                return - 1
              }
            }),
            e
          }
        },
        {
          key: 'isFullscreen',
          value: function () {
            return f['a'].isFullscreen()
          }
        },
        {
          key: '_handleFullscreenchange',
          value: function (e) {
            e.isFullscreen = this.isFullscreen(),
            this.trigger('fullscreenchange', e)
          }
        },
        {
          key: 'requestFullscreen',
          value: function () {
            f['a'].requestFullscreen && this.playerZone[f['a'].requestFullscreen]()
          }
        },
        {
          key: 'exitFullscreen',
          value: function () {
            f['a'].exitFullscreen && f['a'].isFullscreen() && document[f['a'].exitFullscreen]()
          }
        },
        {
          key: 'hide',
          value: function () {
            this.player.style.display = 'none'
          }
        },
        {
          key: 'show',
          value: function () {
            this.player.style.display = 'block'
          }
        },
        {
          key: 'muted',
          value: function (e) {
            if ('undefined' === typeof e) return this.player.muted;
            this.player.muted = e,
            this.trigger('muted', e)
          }
        }
      ]),
      t
    }(v),
    b = i('768b'),
    g = (i('ac6a'), i('5df3'), i('0a0d')),
    k = i.n(g),
    w = (i('6d67'), i('a658')),
    _ = null,
    S = '02020031010000000000',
    C = '02030031010000000000';
    function T(e) {
      var t = {
      };
      return t.type = e.type,
      t.data = {
      },
      e.noAD || !P() ? r.a.resolve(t)  : (e = V(e), x(e.player, e).then(function (e) {
        if (t.data = e || {
        }, t.data.length = 0, e && e.ads && e.ads.length && (t.data.length = e.ads.length, t.type === w['a'])) {
          var i = e.ads.map(function (e) {
            return (e.tvid ? ''.concat(e.tvid, '_')  : '') + (e.vid || '') + '_'
          });
          t.preIdAll = i.join('-')
        }
        return t
      }))
    }
    function x() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      t = arguments.length > 1 ? arguments[1] : void 0,
      i = I(t),
      n = P();
      return $(),
      _ = new n(e, i),
      _.start && _.start(),
      new r.a(function (i, a) {
        e ? (_.addEventListener(n.EVENT_CUPID_READY, function (e) {
          return i(e.data)
        }), _.addEventListener(n.EVENT_CUPID_NO_AD, function () {
          return i()
        }), _.addEventListener(n.EVENT_CUPID_SKIP_AD, t.skipAdHandler || function () {
        }))  : i()
      })
    }
    function P() {
      return window.CupidAdSdk && window.CupidAdSdk.AdPadding
    }
    function V(e) {
      return {
        player: e.player,
        anonymousUid: e.anonymousUid || '',
        adId: e.adId || Object(w['c']) (),
        tvid: (e.tvid || '') + '',
        vid: (e.vid || '') + '',
        uid: e.uid,
        rate: e.rate || 1,
        albumId: (e.albumId || '') + '',
        channelId: (e.channelId || '') + '',
        isUGC: !!e.isUGC,
        duration: e.duration + '',
        type: e.type,
        authcookie: e.authcookie || '',
        adTheme: e.adTheme || 'default',
        relatedTheme: e.relatedTheme || 'default',
        upd: e.upd,
        skipAdHandler: e.skipAdHandler
      }
    }
    function I(e) {
      return {
        playerId: e.adId,
        tvId: e.tvid,
        vId: e.vid,
        userId: e.anonymousUid,
        passportId: e.uid,
        clientIP: '10.0.1.12',
        resIndex: e.rate + '',
        albumId: e.albumId,
        deviceType: n['f'].android ? 'gphone' : 'iphone',
        deviceVersion: '3.2',
        location: location.href,
        webEventId: k() (),
        channelId: e.channelId,
        videoEventId: k() (),
        isUGC: e.isUGC,
        duration: e.duration,
        formatType: e.type,
        passportCookie: e.authcookie,
        adTheme: e.adTheme,
        relatedTheme: e.relatedTheme,
        ptid: n['f'].android ? S : C,
        upd: e.upd || '0'
      }
    }
    function $() {
      _ && _.stop()
    }
    function O(e, t) {
      _ && _.notifyCupidSdk(e, t)
    }
    i('57e7'),
    i('0cd8');
    var j = i('a745'),
    L = i.n(j),
    A = i('8d81'),
    E = i.n(A),
    B = '02020031010000000000',
    R = '//cache.video.iqiyi.com/jp/dash',
    q = {
      96: '100',
      1: '200',
      2: '300'
    },
    N = 3,
    F = {
      m3u8: [
        37,
        38
      ],
      mp4: 45,
      sports_vip: 40
    },
    M = 0;
    function H(e) {
      e = U(e),
      e.callbackName = 'Z' + k() () + M++;
      var t = s() (e.tvid || 0);
      return t ? D(e, N).then(function (t) {
        return t && 'A00020' === t.code ? (e.serverTime = t.tm, H(e))  : X({
          videoInfo: t
        })
      }).catch (function (e) {
        return X({
          error: e
        })
      })  : r.a.resolve(X({
        error: Error('tvid is required for dash')
      }))
    }
    function D(e, t, i) {
      if (t <= 0) return r.a.reject(i || Error('auth fail'));
      e.k_err_retries = N - t;
      var n = z(e),
      a = e.callbackName;
      try {
        n = Y(n, a, e.serverTime)
      } catch (i) {
        return r.a.reject(i)
      }
      return Q(n, a).catch (function (i) {
        return D(e, --t, i)
      })
    }
    function Q(e, t) {
      var i = ''.concat(R, '?').concat(n['h'].stringify(e), '&callback=').concat(t);
      return Object(n['e']) (R, e, {
        timeout: 3000,
        callback: t
      }).then(function (e) {
        return e.request = i,
        e
      }).catch (function (e) {
        throw e.request = i,
        e
      })
    }
    function U(e) {
      return e = Object(n['b']) ({
      }, e),
      e.ut = '0' === e.ut ? '' : e.ut,
      e.uid = e.uid || '',
      e.anonymousUid = e.anonymousUid || '',
      e.kft1 = e.kft1 || G(e),
      e.kft5 = e.kft5 || 1,
      e.rate = q[e.rate || '1'],
      e.dfp = e.dfp || Object(n['k']) (),
      e.preIdAll = e.preIdAll || '',
      e.serverTime = e.serverTime || '',
      e
    }
    function z(e) {
      return {
        tvid: e.tvid,
        vid: e.vid,
        bid: e.rate,
        abid: e.rate,
        src: B,
        uid: e.uid,
        ut: e.ut,
        ori: 'h5',
        ps: 0,
        messageId: Object(n['l']) (),
        ost: 0,
        preIdAll: e.preIdAll,
        locale: 'zh_cn',
        dfp: e.dfp,
        k_tag: 1,
        k_ft1: e.kft1,
        k_ft5: e.kft5,
        k_err_retries: e.k_err_retries,
        k_uid: e.anonymousUid,
        pt: 0,
        lid: '',
        cf: '',
        ct: '',
        ve: E() (''.concat(e.tvid).concat(k() ()).concat(e.anonymousUid))
      }
    }
    function G(e) {
      function t(e) {
        var t = L() (F[e]) ? F[e] : [
          F[e]
        ];
        return t.reduce(function (e, t) {
          return e + Math.pow(2, --t)
        }, 0)
      }
      var i = 0;
      for (var n in F) i += [
        'm3u8',
        'mp4'
      ].indexOf(n) > - 1 ? e.type === n ? t(e.type)  : 0 : t(n);
      return i
    }
    function Y(e, t, i) {
      e.bid=600;
      e.abid=600;
      if (!window.cmd5xdash || !window.cmd5x) throw Error('anti-theft chain fail: window.cmd5xdash or window.cmd5x is undefined');
      var a = window.cmd5xdash ? window.cmd5xdash()  : {
      };
      i && a.tm && (a.tm = i),
      Object(n['b']) (e || {
      }, a);
      var r = '/jp/dash?'.concat(n['h'].stringify(e), '&callback=').concat(t);
      return e.vf = window.cmd5x ? window.cmd5x(r)  : '',
      e
    }
    function X(e) {
      var t = e.videoInfo,
      i = void 0 === t ? {
      }
       : t,
      n = e.error;
      i = i || {
      },
      n && (i.error = n, n.request && (i.request = n.request));
      var a = i.data = i.data || {
      },
      r = a.boss_ts = a.boss_ts || {
      };
      if (r.data = r.data || {
      }, a.program = a.program || {
      }, a.p = a.p || {
      }, i.aid = a.aid, i.tvid = a.tvid, i.prvType = '1' === r.data.prv ? r.previewType : '', a.program.video) {
        var o = a.program.video.reduce(function (e, t) {
          return t._selected ? t : e
        }, {
        });
        i.cid = o.cid,
        i.vid = o.vid,
        i.duration = o.duration,
        i.src = 'mp4' === o.ff ? o.mp4Url : o.url,
        i.bid = o.bid
      }
      return i.prv = i.src && i.prvType && 708 !== a.st,
      i
    }
    function J(e) {
      e = W(e);
      var t = e.type;
      return t === w['b'] ? r.a.all([T(e),
      H(e)]).then(function (e) {
        var i = Object(b['a']) (e, 2),
        n = i[0],
        a = i[1];
        return {
          adInfo: n,
          videoInfo: a,
          type: t
        }
      })  : t === w['a'] ? T(e).then(function (i) {
        return e.preIdAll = i ? i.preIdAll : '',
        H(e).then(function (e) {
          var n = e.data.adVids;
          return n && O('removeInvalidAd', {
            vid: n || [
            ]
          }),
          {
            adInfo: i,
            videoInfo: e,
            type: t
          }
        })
      })  : void 0
    }
    function W(e) {
      var t = {
      };
      return t.adId = e.adId,
      t.tvid = e.tvid,
      t.vid = e.vid,
      t.uid = e.uid,
      t.anonymousUid = e.anonymousUid,
      t.player = e.player,
      t.rate = e.rate,
      t.type = e.type || Object(w['d']) (),
      t.ut = e.ut,
      t.kft1 = e.kft1,
      t.dfp = e.dfp,
      t.noAD = !!e.noAD,
      t.albumId = e.albumId || e.aid,
      t.isUGC = !!e.isUGC,
      t.duration = e.duration,
      t.authcookie = e.authcookie,
      t.adTheme = e.adTheme,
      t.relatedTheme = e.relatedTheme,
      t.timestamp = e.timestamp,
      t.channelId = e.channelId,
      t.upd = e.upd,
      t.skipAdHandler = e.skipAdHandler,
      t
    }
    i('9865'),
    i('28a5');
    var Z = {
      load: K,
      getData: ee
    };
    function K(e) {
      var t = te(e);
      return ee(t).then(function (e) {
        return e && 'A00000' === e.code ? e.data && e.data.boss ? ie(t, e).then(function (i) {
          return i ? (t.bossParam = i, oe(e, t))  : {
            code: 'vipckfail',
            aid: t.lp
          }
        }).catch (function () {
          return {
            code: 'vipckfail',
            aid: t.lp
          }
        })  : oe(e, t)  : e
      })
    }
    function ee(e) {
      var t = '//live.video.iqiyi.com/jp/live';
      return Object(n['e']) (t, e, {
        timeout: 3000,
        callback: 'liveCallback'
      })
    }
    function te(e) {
      var t = {
        lc: e.lcid || '',
        lp: e.lpid || '',
        src: e.srcKey,
        rateVers: e.rateVers || 'H5_QIYI',
        t: (new Date).getTime(),
        uid: e.uid || '',
        v: e.isVip || 0,
        defaultStream: e.defaultStream
      };
      e.vv && (t.vv = e.vv),
      Object(n['b']) (t, window.cmd5xlive ? window.cmd5xlive()  : {
      });
      var i = '/jp/live?'.concat(n['h'].stringify(t), '&callback=liveCallback');
      return t.vf = window.cmd5x ? window.cmd5x(i)  : '',
      t
    }
    function ie(e, t) {
      var i = re(t.data.streams, e.defaultStream);
      return i ? ne(i, e)  : r.a.resolve()
    }
    function ne(e, t) {
      var i = ae(e),
      a = '//api.vip.iqiyi.com/services/ckLiveN.action?'.concat(i.param_vrs),
      o = {
        qpid: t.lpid,
        cid: t.cid,
        ut: t.ut,
        uid: t.uid,
        platform: t.platform,
        v: t.v,
        version: t.version
      };
      return a = ''.concat(a, '&').concat(n['h'].stringify(o)),
      new r.a(function (e, t) {
        var i = new XMLHttpRequest;
        i.withCredentials = !0,
        i.timeout = 3000,
        i.onreadystatechange = function () {
          4 === i.readyState && (200 === i.status ? e(i.response)  : e())
        },
        i.open('GET', a),
        i.send()
      }).then(function (e) {
        return e = e ? JSON.parse(e)  : {
        },
        e && 'A00000' === e.code ? n['h'].stringify({
          t: e.data ? e.data.t : '',
          QY00001: t.QY00001 || ''
        })  : null
      })
    }
    function ae(e) {
      if (e && e.indexOf('?') > 0) {
        var t = e.split('?');
        return {
          param_vrs: t[1],
          filename: e.substring(t[0].lastIndexOf('/') + 1, t[0].lastIndexOf('.'))
        }
      }
    }
    function re(e, t) {
      var i = '';
      return e && e.forEach(function (e) {
        e.bid === t && (i = e.url)
      }),
      !i && e && e.length && (i = e[0].url),
      i
    }
    function oe(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      },
      i = e.data;
      if (e && i) {
        var n = re(e.data.streams, t.defaultStream),
        a = t.bossParam;
        a && (n = ''.concat(n, '&').concat(a));
        var r = e.data.program || {
        };
        return {
          code: 'ok',
          duration: e.data.duration,
          pt: - 1 === r.startTime ? 0 : r.startTime,
          pw: - 1 === r.endTime ? 0 : r.endTime,
          adTime: 0,
          src: n,
          panoType: i.pano && i.pano.type || ''
        }
      }
    }
    function se(e) {
      this.video = new m(e)
    }
    se.prototype.loadSource = function (e) {
      return this.type = e.type || Object(w['d']) (),
      J(e)
    },
    se.prototype.loadLiveSource = function (e) {
      return Z.load(e)
    },
    se.prototype.getVideo = function () {
      return this.video
    },
    se.prototype.getType = function () {
      return this.type
    },
    se.prototype.preplay = function () {
      try {
        var e = n['f'].android && n['c'].qq;
        this._chromePlayed || e || !(n['c'].chrome || n['f'].ios || n['c'].vivobrowser) || (this.video.player.play(), this._chromePlayed = !0)
      } catch (t) {
      }
    },
    se.prototype.adStop = function (e) {
      return $(e)
    };
    var ce = se;
    t['a'] = ce
  },
  e185: function (e, t, i) {
    'use strict';
    var n,
    a,
    r = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          staticClass: 'm-video-player-wrap'
        }, [
          i('section', {
            staticClass: 'm-video-player m-video-fullScreenWrap change',
            class : e.playerClass,
            style: e.playerStyle
          }, [
            i('video', {
              ref: 'video',
              staticClass: 'm-player hideControls',
              attrs: {
                id: 'video',
                'webkit-playsinline': '',
                playsinline: ''
              }
            }),
            i('QiyiPosterLayer', e._b({
              ref: 'qiyiPosterLayer'
            }, 'QiyiPosterLayer', e.$attrs, !1)),
            e.playButton ? i('QiyiPlayButton', {
              on: {
                playClick: e.togglePlay
              }
            })  : e._e(),
            i('div', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: e.titleShow && e.dashboardShow,
                  expression: 'titleShow && dashboardShow'
                }
              ],
              staticClass: 'video-title'
            }, [
              i('span', {
                staticClass: 'c-title'
              }, [
                e._v(e._s(e.videoName))
              ])
            ]),
            e.dashboard ? [
              i('QiyiDashboard', {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: e.isVideo,
                    expression: 'isVideo'
                  }
                ],
                attrs: {
                  'is-video': e.isVideo,
                  'video-name': e.videoName,
                  poster: e.$attrs.poster
                },
                on: {
                  playClick: e.togglePlay,
                  seek: e.seek,
                  fullscreen: e._handleFullscreen,
                  dashboardShowChange: e._setDashboardShow
                }
              }),
              i('QiyiAdDashboard', {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: !e.isVideo,
                    expression: '!isVideo'
                  }
                ],
                on: {
                  voiceClick: e.toggleMuted,
                  fullscreen: e._handleFullscreen
                }
              })
            ] : e._e(),
            e._t('layer'),
            e.source ? i('QiyiSourceLayer', e._b({
              attrs: {
                'vip-type': e.vipType,
                'video-name': e.videoName,
                'is-show-vip-layer': e.isShowVipLayer
              },
              on: {
                sourceTypeChange: e._sourceTypeHandle,
                sourceLayerFoo: e._sourceLayerFooHandle,
                sourceVipType: e._sourceVipType,
                noSourceLayer: function (t) {
                  e.noSourceLayer = t
                }
              }
            }, 'QiyiSourceLayer', e.$attrs, !1))  : e._e(),
            i('QiyiLoading', e._b({
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: !e.forceShowLayer,
                  expression: '!forceShowLayer'
                }
              ],
              ref: 'loading',
              attrs: {
                'video-name': e.videoName,
                poster: e.$attrs.poster,
                'loading-callapp': e.loadingCallapp
              }
            }, 'QiyiLoading', e.$attrs, !1)),
            i('QiyiPlayLimit', e._b({
              on: {
                replayPlay: function (t) {
                  return e.seek(0)
                },
                play: e.play,
                stopPlay: function (t) {
                  e.played = !1
                },
                show: function (t) {
                  return e.$emit('limitShow', t)
                },
                playLimited: function (t) {
                  e.isPlayLimited = t
                }
              },
              scopedSlots: e._u([e.limitCallAppCustom ? {
                key: 'callApp',
                fn: function () {
                  return [e._t('limitCallApp')]
                },
                proxy: !0
              }
               : null], null, !0)
            }, 'QiyiPlayLimit', e.$attrs, !1)),
            e.limit && e.noSourceLayer && !e.isPlayLimited ? i('QiyiLimit', e._b({
              attrs: {
                'video-name': e.videoName,
                poster: e.$attrs.poster
              },
              on: {
                replayPlay: function (t) {
                  return e.seek(0)
                },
                play: e.play,
                stopPlay: function (t) {
                  e.played = !1
                },
                show: function (t) {
                  return e.$emit('limitShow', t)
                }
              },
              scopedSlots: e._u([e.limitCallAppCustom ? {
                key: 'callApp',
                fn: function () {
                  return [e._t('limitCallApp')]
                },
                proxy: !0
              }
               : null], null, !0)
            }, 'QiyiLimit', e.$attrs, !1))  : e._e(),
            i('QiyiBottomBuyLayer', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: !e.dashboardShow,
                  expression: '!dashboardShow'
                }
              ]
            }),
            i('QiyiVideoContinue', {
              ref: 'videoContinue',
              on: {
                seek: e.seek,
                srcChange: e.play,
                videoStatusChange: e.onVideoStatusChange,
                play: e._handlePlay,
                ended: e._handleEnded
              }
            }),
            e.vv ? i('QiyiVV', {
              ref: 'vv',
              attrs: {
                'is-video': e.isVideo,
                'vv-options': e.vvOptions,
                'coustom-vv-options': e.coustomVvOptions,
                'vip-type': e.vipType,
                'player-type': e.playerType,
                rate: e.rate
              },
              on: {
                sendVV: function (t) {
                  return e.$emit('sendVV', t)
                }
              }
            })  : e._e(),
            i('QiyiLib', e._b({
              attrs: {
                ad: e.ad
              },
              on: {
                inited: e.initQiyiVideo,
                error: function (t) {
                  return e.$emit('error', t)
                }
              }
            }, 'QiyiLib', e.$attrs, !1))
          ], 2)
        ]),
        e.record ? i('QiyiRecord', {
          ref: 'record',
          attrs: {
            'skip-head-and-end': e.skipHeadAndEnd
          },
          on: {
            ended: e._handleEnded
          }
        })  : e._e(),
        e.source ? i('portal-target', {
          attrs: {
            name: 'playerPopupContainer'
          }
        })  : e._e()
      ], 1)
    },
    o = [
    ],
    s = (i('7514'), i('cebc')),
    c = (i('7f7f'), i('57e7'), i('96cf'), i('3b8d')),
    d = (i('c5f6'), i('d44d')),
    u = i('795b'),
    l = i.n(u),
    p = (i('ac6a'), i('5df3'), i('51cb')),
    h = {
      name: 'QiyiLib',
      inheritAttrs: !1,
      props: {
        noAd: {
          type: Boolean,
        default:
          !1
        },
        zeptoUrl: {
          type: String,
        default:
          '//static.iqiyi.com/js/html5/js/lib/zepto/1.2.0/zepto.min.js'
        },
        tmtsUrl: {
          type: String,
        default:
          '//static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js'
        },
        adUrl: {
          type: String,
        default:
          '//static.iqiyi.com/js/common/ares4-h5.min.js'
        }
      },
      beforeMount: function () {
        var e = Object(p['e']) (this.tmtsUrl);
        if (this.noAd) this.promise = e;
         else {
          var t = Object(p['e']) (this.zeptoUrl),
          i = Object(p['e']) (this.adUrl);
          this.promise = l.a.all([t,
          e,
          i])
        }
      },
      mounted: function () {
        var e = this;
        this.promise.then(function () {
          return e.$emit('inited')
        }).catch (function (t) {
          t.targetName = 'lib',
          t.message = 'error occurred when loading '.concat(t.url),
          e.$emit('error', t)
        })
      },
      render: function () {
        return null
      }
    },
    v = h,
    f = i('2877'),
    y = Object(f['a']) (v, n, a, !1, null, null, null),
    m = y.exports,
    b = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div')
    },
    g = [
    ],
    k = (i('a481'), i('6d67'), {
      name: 'QiyiVideoContinue',
      beforeMount: function () {
        this.init()
      },
      methods: {
        init: function () {
          var e = this,
          t = this.$parent;
          t.$on('load', function () {
            t.src(''),
            t.off('playing', e.play),
            t.once('playing', e.play)
          }),
          t.$on('loaded', function (t) {
            e.isMp4 = 'mp4' === t.type,
            e.videoStatus = '',
            e.source = t,
            e.setNextSrc()
          }),
          t.$on('created', function (t) {
            e.bindEvent(t)
          })
        },
        bindEvent: function () {
          var e = this,
          t = this.$parent;
          t.on('ended', function () {
            t.reset();
            var i = e.setNextSrc();
            i ? (t.off('playing', e.play), t.once('playing', e.play), e.$emit('srcChange'))  : e.$emit('ended', e.videoStatus)
          }),
          t.on('timeupdate', function () {
            if ('AD' === e.videoStatus && !e.isMp4) {
              var i = t.currentTime(),
              n = e.source.adInfo.data.duration;
              i > n && (e.videoStatus = 'VIDEO', e.$emit('videoStatusChange', e.videoStatus), e.play({
                adTime: n
              }))
            }
          })
        },
        setNextSrc: function () {
          var e = this.source;
          return this.isMp4 ? this.setMp4Src(e)  : this.setM3u8Src(e)
        },
        setMp4Src: function (e) {
          var t = this.$parent,
          i = [
          ],
          n = this.getVideoSrc(e),
          a = e.adInfo && e.adInfo.data && e.adInfo.data.ads || [
          ];
          i = a.map(function (e) {
            return e.url
          }),
          i.push(n);
          var r = i.length,
          o = t.src(),
          s = i.indexOf(o);
          if (s + 1 >= r) return '';
          var c = (s + 1) % r,
          d = i[c];
          t.src(d);
          var u = this.videoStatus;
          return this.videoStatus = c + 1 === r ? 'VIDEO' : 'AD',
          this.videoStatus !== u && this.$emit('videoStatusChange', this.videoStatus),
          d
        },
        setM3u8Src: function (e) {
          var t = this.$parent,
          i = e.adInfo.data.ads || [
          ],
          n = t.src(),
          a = this.getVideoSrc(e);
          if (a === n) return '';
          t.src(a);
          var r = this.videoStatus;
          return this.videoStatus = i.length > 0 ? 'AD' : 'VIDEO',
          this.videoStatus !== r && this.$emit('videoStatusChange', this.videoStatus),
          a
        },
        getVideoSrc: function (e) {
          var t = e.videoInfo;
          return t ? t.src && t.src.replace(/https?:/, location.protocol)  : ''
        },
        play: function (e) {
          var t = e.adTime,
          i = void 0 === t ? 0 : t,
          n = this.$parent;
          !n.paused() && n.src() && this.$emit('play', {
            videoStatus: this.videoStatus,
            adTime: i
          })
        },
        skipAd: function () {
          var e = this.source,
          t = this.$parent;
          if (this.isMp4) {
            var i = this.getVideoSrc(e);
            t.src(i);
            var n = this.videoStatus;
            this.videoStatus = 'VIDEO',
            this.videoStatus !== n && this.$emit('videoStatusChange', this.videoStatus),
            t.off('playing', this.play),
            t.once('playing', this.play),
            t.play()
          } else {
            var a = e.adInfo && e.adInfo.data ? e.adInfo.data.duration : 0;
            if (!a) return;
            this.$emit('seek', a);
            var r = this.videoStatus;
            this.videoStatus = 'VIDEO',
            this.videoStatus !== r && this.$emit('videoStatusChange', this.videoStatus),
            this.play({
              adTime: a
            })
          }
        }
      }
    }),
    w = k,
    _ = Object(f['a']) (w, b, g, !1, null, null, null),
    S = _.exports,
    C = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: e.posterShow,
            expression: 'posterShow'
          }
        ]
      }, [
        e.poster ? i('div', {
          staticClass: 'm-video-poster'
        }, [
          i('img', {
            attrs: {
              id: 'player-posterimg',
              src: e.poster
            }
          })
        ])  : e._e(),
        e.title ? i('div', {
          staticClass: 'video-title'
        }, [
          i('span', {
            staticClass: 'c-title'
          }, [
            e._v(e._s(e.title))
          ])
        ])  : e._e(),
        e.num || e.time ? i('div', {
          staticClass: 'playCount-time'
        }, [
          e.num ? i('span', {
            staticClass: 'c-num'
          }, [
            e._v(e._s(e.num))
          ])  : e._e(),
          e.time ? i('span', {
            staticClass: 'c-time'
          }, [
            e._v(e._s(e.time))
          ])  : e._e()
        ])  : e._e()
      ])
    },
    T = [
    ],
    x = {
      name: 'QiyiPoster',
      inheritAttrs: !1,
      props: {
        poster: {
          type: String,
        default:
          ''
        },
        title: {
          type: String,
        default:
          ''
        },
        num: {
          type: String,
        default:
          ''
        },
        time: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          posterShow: !0
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('created', function () {
          e.init()
        })
      },
      methods: {
        init: function () {
          var e = this;
          this.$parent.on('playing', function () {
            e.posterShow = !1
          })
        }
      }
    },
    P = x,
    V = Object(f['a']) (P, C, T, !1, null, null, null),
    I = V.exports,
    $ = (i('6762'), i('2fdb'), i('5176')),
    O = i.n($),
    j = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-player-tip'
      }, [
        i('div', {
          staticClass: 'player-tip-inner'
        }, [
          i('div', {
            staticClass: 'c-player-tip-info',
            domProps: {
              innerHTML: e._s(e.info.text)
            }
          }),
          e.info.returnHomeText ? i('a', {
            staticClass: 'c-btn',
            attrs: {
              href: '//m.iqiyi.com/'
            }
          }, [
            e._v('\n      ' + e._s(e.info.returnHomeText) + '\n    ')
          ])  : e._e(),
          e.info.callAppText ? i('a', {
            directives: [
              {
                name: 'copy-callapp',
                rawName: 'v-copy-callapp',
                value: {
                  video: e.videoInfo,
                  subtype: e.subtype
                },
                expression: '{video: videoInfo, subtype}'
              }
            ],
            staticClass: 'c-btn',
            attrs: {
              'down-app-pos': 'play_oversea_error_down',
              rseat: ''
            },
            on: {
              click: e.callApp
            }
          }, [
            e._v('\n      ' + e._s(e.info.callAppText) + '\n    ')
          ])  : e._e(),
          e.code ? i('div', {
            staticClass: 'c-error-info'
          }, [
            e._v('\n      错误代码: ' + e._s(e.code) + '\n    ')
          ])  : e._e()
        ])
      ])
    },
    L = [
    ],
    A = {
      name: 'QiyiSourceCodeLayer',
      props: {
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          subtype: '152'
        }
      },
      computed: {
        code: function () {
          var e = this.videoInfo,
          t = e.code,
          i = e.data,
          n = i.st;
          return t && n ? ''.concat(t, '_').concat(n)  : ''
        },
        info: function () {
          var e = {
          };
          return e;
        }
      },
      methods: {
        isPano: function (e) {
          if (e.data.p.pano) {
            var t = e.data.p.pano.type;
            return 1 !== t
          }
          return !1
        },
        callApp: function (e) {
          
        }
      }
    },
    E = A,
    B = Object(f['a']) (E, j, L, !1, null, null, null),
    R = B.exports,
    q = i('bd86'),
    N = i('a78e'),
    F = i.n(N),
    M = i('0a0d'),
    H = i.n(M),
    D = (i('6b54'), i('87b3'), i('e814')),
    Q = i.n(D),
    U = i('8d81'),
    z = i.n(U),
    G = i('7aa9'),
    Y = '';
    'undefined' !== typeof window && (Y = window.navigator.userAgent);
    var X = Object(G['a']) (Y),
    J = X.os,
    W = X.browser;
    X.osProducer;
    function Z(e) {
      e = + e,
      e = Q() (e);
      var t = e / 3600 >> 0,
      i = e % 3600 / 60 >> 0,
      n = e % 3600 % 60,
      a = t ? 1 === t.toString().length ? '0' + t + ':' : t + ':' : '';
      return a += i ? 1 === i.toString().length ? '0' + i + ':' : i + ':' : '00:',
      a += 1 === n.toString().length ? '0' + n : n,
      a
    }
    function K() {
      return z() (window.navigator.userAgent + document.cookie + Math.random() + H() ())
    }
    var ee = 'QC006',
    te = 'suid',
    ie = '1',
    ne = '4',
    ae = '',
    re = '//act.vip.iqiyi.com/interact/api/show',
    oe = '97ae2982356f69d8';
    function se() {
      var e = F.a.get('P00002'),
      t = F.a.get('P00003');
      return e && 'deleted' !== e && t && 'deleted' !== t
    }
    function ce() {
      return F.a.get('P00001') || ''
    }
    function de() {
      return ue().uid
    }
    function ue() {
      var e = F.a.get('P00002');
      return e ? JSON.parse(e)  : {
        uid: ''
      }
    }
    function le() {
      if (ae) return ae;
      var e = p['f'].getItem(te),
      t = F.a.get(ee);
      if (ae = e || t) return (!t || !e) && pe(ae),
      ae;
      var i = K();
      return pe(i),
      i
    }
    function pe(e) {
      ae = e,
      p['f'].setItem(te, e),
      F.a.set(ee, e, {
        expires: 31536000000,
        path: '/',
        domain: 'iqiyi.com'
      })
    }
    function he() {
      return ve.apply(this, arguments)
    }
    function ve() {
      return ve = Object(c['a']) (regeneratorRuntime.mark(function e() {
        var t,
        i,
        n,
        a,
        r = arguments;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return t = r.length > 0 && void 0 !== r[0] ? r[0] : '',
              i = {
                P00001: ce(),
                code: t,
                platform: oe,
                deviceID: le(),
                version: '1.0',
                lang: 'cn',
                app_lm: 'cn'
              },
              e.next = 4,
              Object(p['d']) (re, {
                params: i
              });
            case 4:
              if (n = e.sent, a = n.data || {
              }, 'A00000' !== a.code || !a.data.detail) {
                e.next = 8;
                break
              }
              return e.abrupt('return', a.data.detail);
            case 8:
              return e.abrupt('return', '');
            case 9:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ve.apply(this, arguments)
    }
    i('d92a');
    var fe,
    ye,
    me,
    be,
    ge = {
      name: 'EduPackageLayer',
      props: {
        videoName: {
          type: String,
        default:
          ''
        },
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        layerInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          layerShow: !1,
          packages: [
          ],
          index: 0
        }
      },
      methods: {
        show: function () {
          this.formatPackage(),
          this.layerShow = !0
        },
        hideLayer: function () {
          this.layerShow = !1
        },
        updateIndex: function (e) {
          this.index = e
        },
        formatPackage: function () {
          var e = this,
          t = this.layerInfo,
          i = t.aid,
          n = t.data;
          n && n.package && (this.packages = n.package.map(function (t) {
            return O() ({
            }, t, {
              price: Q() (t.price || 0) / 100,
              originPrice: Q() (t.originPrice || 0) / 100,
              halfPrice: Q() (t.halfPrice || 0) / 100,
              content: t.content.map(function (e) {
                return e.url = e.url.replace(/((http(s)?:)?\/\/)?(www|m)\.(i)?qiyi\.com/i, ''),
                e
              }),
              validityPeriod: t.validityPeriod ? t.validityPeriod.slice(0, - 3)  : '',
              videoName: e.videoName,
              aid: i
            })
          }))
        },
        buyPackage: function () {
          var e = this.packages[this.index],
          t = 'a3c61c9f84531245',
          i = ''.concat(window.location.protocol, '//m.iqiyi.com/productPay.html?fc=').concat(t, '&serviceCode=').concat(e.serviceCode || '', '&aid=').concat(e.aid || '', '&pid=').concat(e.pid || '');
          se() || (i = '//m.iqiyi.com/user.html?redirect_url='.concat(encodeURIComponent(i))),
          window.location.href = i
        }
      },
      render: function () {
        var e = this,
        t = arguments[0],
        i = this.packages.map(function (i, n) {
          return t('li', {
            class : [
              n === e.index && 'selected'
            ]
          }, [
            t('a', {
              attrs: {
                href: 'javascript:void(0);'
              },
              class : 'c-link-item',
              on: {
                click: e.updateIndex.bind(e, n)
              }
            }, [
              '套餐',
              n + 1
            ])
          ])
        }),
        n = this.packages[this.index],
        a = n ? n.content.map(function (e) {
          return t('li', [
            t('div', {
              class : 'piclist-img'
            }, [
              t('a', {
                attrs: {
                  href: e.url ? e.url : 'javascript:void(0);'
                },
                class : 'piclist-link',
                style: 'background-image:url('.concat(e.pic, ')')
              }, [
                t('div', {
                  class : 'c-rb'
                }, [
                  t('span', {
                    class : 'c-date'
                  }, [
                    e.set ? ''.concat(e.set, '集全')  : ''
                  ])
                ]),
                t('div', {
                  class : 'c-videoplay hide'
                }, [
                  t('i', {
                    class : 'c-videoplay-icon c-videoplay-small'
                  })
                ])
              ])
            ]),
            t('div', {
              class : 'piclist-title'
            }, [
              t('div', {
                class : 'c-title'
              }, [
                t('a', {
                  attrs: {
                    href: e.url ? e.url : 'javascript:void(0);'
                  }
                }, [
                  e.name
                ])
              ])
            ])
          ])
        })  : [
        ];
        return t('div', [
          [this.layerShow && t('div', {
            class : 'm-cover-popup',
            style: 'overflow-y:scroll;'
          }, [
            t('div', {
              class : 'm-Package-details'
            }, [
              t('div', {
                class : 'content-header'
              }, [
                t('div', {
                  class : 'header-fixed'
                }, [
                  t('div', {
                    class : 'content'
                  }, [
                    t('h1', {
                      class : 'c-title'
                    }, [
                      '套餐详情'
                    ]),
                    t('a', {
                      attrs: {
                        href: 'javascript:void(0);'
                      },
                      class : 'close-info-btn',
                      on: {
                        click: this.hideLayer
                      }
                    }, [
                      t('i', {
                        class : 'c-glyphicon c-glyphicon-guideClose'
                      })
                    ])
                  ])
                ])
              ]),
              t('div', {
                class : 'c-info'
              }, [
                this.videoName ? '《'.concat(this.videoName, '》包含在 如下套餐中:')  : ''
              ]),
              t('div', {
                class : 'm-sliding'
              }, [
                t('div', {
                  class : 'contain clearfix'
                }, [
                  t('ul', {
                    class : 'list-item m-sliding-list',
                    style: 'overflow-x:scroll;width:100%;'
                  }, [
                    i
                  ])
                ])
              ])
            ]),
            t('div', {
              class : 'm-setMeal-info'
            }, [
              t('div', {
                class : 'left-wrap'
              }, [
                t('div', {
                  class : 'c-title'
                }, [
                  n.name ? n.name : '高等数学全部讲解高等数学全部讲解高 等数学全部讲解'
                ]),
                t('div', {
                  class : 'c-price'
                }, [
                  '优惠价：',
                  n.price,
                  '元 ',
                  n.price < n.originPrice && t('span', {
                    class : 'c-line-through'
                  }, [
                    '（原价',
                    n.originPrice,
                    '元）'
                  ])
                ]),
                t('div', {
                  class : 'c-time'
                }, [
                  '有效期：',
                  n.validity,
                  ' 至 ',
                  n.validityPeriod
                ])
              ]),
              t('div', {
                class : 'right-wrap',
                on: {
                  click: this.buyPackage.bind(this)
                }
              }, [
                t('span', {
                  class : 'c-btn-pay'
                }, [
                  '打包购买'
                ])
              ])
            ]),
            t('div', {
              class : 'm-box m-box-top m-box-bottom'
            }, [
              t('div', {
                class : 'm-setMeal-tiele'
              }, [
                t('div', {
                  class : 'title'
                }, [
                  t('h3', {
                    class : 'c-title-des'
                  }, [
                    '包含专辑(',
                    n.content.length,
                    ')'
                  ])
                ])
              ]),
              t('div', {
                class : 'm-box-items m-box-items-full'
              }, [
                t('section', {
                  class : 'm-pic m-pic-vercital m-pic-vercital-sliding m-sliding'
                }, [
                  t('ul', {
                    class : 'm-pic-list m-sliding-list m-pic-list-new',
                    style: 'transform: translate(0px, 0px) translateZ(0px);overflow-x:scroll;width:100%;'
                  }, [
                    a
                  ])
                ])
              ])
            ])
          ])]
        ])
      }
    },
    ke = ge,
    we = Object(f['a']) (ke, fe, ye, !1, null, null, null),
    _e = we.exports,
    Se = {
      name: 'QiyiSourceVipLayer',
      components: {
        Login: {
          functional: !0,
          render: function (e, t) {
            var i = t.props;
            return e('div', {
              class : 'c-login-tip-info'
            }, [
              i.label,
              e('a', {
                directives: [
                  {
                    name: 'show-pingback',
                    value: '8051101_db_login_block'
                  },
                  {
                    name: 'pingback',
                    value: '8051101_db_login'
                  }
                ],
                attrs: {
                  href: '//m.iqiyi.com/user.html'
                },
                domProps: {
                  innerHTML: i.text
                },
                class : 'c-link'
              })
            ])
          }
        },
        VipMarketButton: {
          functional: !0,
          render: function (e, t) {
            var i = t.props,
            n = i.marketTip || {
            },
            a = n.detail || {
            },
            r = i.aid || i.tvid,
            o = (a.redirectUrl1 ? a.redirectUrl1 + '&aid='.concat(r)  : '') || '//m.iqiyi.com/pay.html?fc='.concat(i.fc, '&aid=').concat(r);
            return e('div', {
              class : 'vipPlayer-tip'
            }, [
              e('a', {
                directives: [
                  {
                    name: 'show-pingback',
                    value: i.block
                  },
                  {
                    name: 'pingback',
                    value: i.rseat
                  }
                ],
                attrs: Object(q['a']) ({
                  href: 'javascript:void(0)'
                }, 'href', o),
                class : 'c-btn'
              }, [
                i.text
              ]),
              a.text1 ? e('span', {
                directives: [
                  {
                    name: 'show-pingback',
                    value: '8051101_dbq_qipao_block'
                  }
                ],
                class : 'c-info'
              }, [
                a.text1
              ])  : e('span', {
                class : 'c-info'
              }, [
                '立送',
                i.vodCouponCount ? ''.concat(i.vodCouponCount, '张')  : null,
                '点播券'
              ])
            ])
          }
        },
        TipInfo: {
          functional: !0,
          render: function (e, t) {
            var i = t.props;
            return e('div', {
              class : 'c-player-tip-info'
            }, [
              i.text
            ])
          }
        },
        BuyButton: {
          functional: !0,
          render: function (e, t) {
            var i = t.props,
            n = i.price,
            a = i.originPrice || n,
            r = null;
            n < a ? r = '会员特惠'.concat(n, '元(原价').concat(a, '元)')  : n === a && (r = ''.concat(n, '元购买本片'));
            var o = ''.concat(window.location.protocol, '//m.iqiyi.com/productPay.html?fc=').concat(i.fc, '&serviceCode=').concat(i.serviceCode || '', '&aid=').concat(i.aid || '', '&pid=').concat(i.pid || '');
            se() || (o = '//m.iqiyi.com/user.html?redirect_url='.concat(encodeURIComponent(o)));
            var s = [
              i.className,
              'c-btn-buy'
            ];
            return e('a', {
              directives: [
                {
                  name: 'show-pingback',
                  value: i.block
                },
                {
                  name: 'pingback',
                  value: i.rseat
                }
              ],
              attrs: {
                href: o
              },
              class : s
            }, [
              r
            ])
          }
        },
        VipBuyButton: {
          functional: !0,
          render: function (e, t) {
            var i = t.props,
            n = i.aid || i.tvid,
            a = '//m.iqiyi.com/pay.html?fc='.concat(i.fc, '&aid=').concat(n);
            return e('div', {
              class : 'vipPlayer-tip'
            }, [
              e('a', {
                attrs: {
                  href: a
                },
                class : 'c-btn'
              }, [
                '开通会员',
                i.price,
                '元购买'
              ])
            ])
          }
        },
        CouponLayer: {
          props: {
            videoName: {
              type: String,
            default:
              ''
            },
            validityPeriod: {
              type: String,
            default:
              ''
            },
            leftCouponNum: {
              type: Number,
            default:
              0
            },
            useVodCouponUrl: {
              type: String,
            default:
              ''
            }
          },
          data: function () {
            return {
              toastText: '',
              toastShow: !1,
              popupShow: !1
            }
          },
          methods: {
            useCoupon: function () {
              var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                      Object(p['d']) (this.useVodCouponUrl.replace(/^(http(s)?:\/\/)/i, '//')).catch (function () {
                        return {
                          data: {
                          }
                        }
                      });
                    case 2:
                      t = e.sent,
                      'A00000' === t.data.code ? (this.showToast('已使用 1 张点播券, 请在 48 小时内完成观看'), setTimeout(function () {
                        window.location.reload()
                      }, 3000))  : this.showToast('点播券消费失败');
                    case 4:
                    case 'end':
                      return e.stop()
                  }
                },
                e,
                this)
              })); function t() {
                return e.apply(this, arguments)
              }
              return t
            }(),
            show: function () {
              this.hideToast(),
              this.popupShow = !0
            },
            showToast: function (e) {
              var t = this;
              this.hide(),
              this.toastText = e || '',
              this.toastShow = !0,
              setTimeout(function () {
                t.hideToast()
              }, 2000)
            },
            hideToast: function () {
              this.toastShow = !1
            },
            hide: function () {
              this.popupShow = !1
            }
          },
          render: function () {
            var e = arguments[0];
            return e('div', [
              [this.popupShow && e('div', [
                e('div', {
                  class : 'cover'
                }),
                e('div', {
                  class : 'm-player-buy-pop'
                }, [
                  e('div', {
                    class : 'info'
                  }, [
                    e('div', {
                      class : 'title'
                    }, [
                      this.videoName ? '观看《'.concat(this.videoName, '》')  : ''
                    ]),
                    e('div', {
                      class : 'des'
                    }, [
                      '观影有效期至：',
                      this.validityPeriod
                    ]),
                    e('div', {
                      class : 'des'
                    }, [
                      '剩余',
                      e('span', {
                        class : 'orange'
                      }, [
                        this.leftCouponNum
                      ]),
                      '张点播券，使用',
                      e('span', {
                        class : 'orange'
                      }, [
                        '1'
                      ]),
                      '张'
                    ])
                  ]),
                  e('div', {
                    class : 'handle'
                  }, [
                    e('a', {
                      attrs: {
                        href: 'javascript:void(0)'
                      },
                      class : 'c-link',
                      on: {
                        click: this.hide
                      }
                    }, [
                      '取消'
                    ]),
                    e('a', {
                      attrs: {
                        href: 'javascript:void(0)'
                      },
                      class : 'c-link orange',
                      on: {
                        click: this.useCoupon
                      }
                    }, [
                      '使用'
                    ])
                  ])
                ])
              ]),
              this.toastShow && e('div', {
                class : 'm-toast m-player-toast'
              }, [
                e('div', {
                  class : 'info'
                }, [
                  this.toastText
                ])
              ])]
            ])
          }
        },
        EduPackageLayer: _e
      },
      props: {
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        vipType: {
          type: String,
        default:
          ''
        },
        videoName: {
          type: String,
        default:
          ''
        },
        layerInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        templateType: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          vipHtml: ''
        }
      },
      methods: {
        useCoupon: function () {
          this.$refs.coupon.show()
        },
        buyPackage: function () {
          this.$refs.eduPackageLayer.show()
        }
      },
      render: function () {
        var e = arguments[0];
        if (0 === this.templateType) return null;
        var t = this.layerInfo,
        i = this.videoInfo,
        n = this.templateType,
        a = t.price,
        r = t.vipPrice,
        o = t.originPrice,
        s = t.leftCouponNum,
        c = t.useVodCouponUrl,
        d = t.validityPeriod,
        u = this.videoName,
        l = '1' === i.prvType && i.src,
        p = !1;
        function h() {
          var t = '//sports.iqiyi.com/resource/h5/live-buy.html',
          n = i.aid ? ''.concat(t, '?cid=').concat(i.aid || '', '&isLive=0&isShowMemOnly=1')  : 'javascript:void(0)';
          return e('a', {
            attrs: {
              href: n
            },
            class : 'c-btn'
          }, [
            e('i', {
              class : 'icon-sports-vip'
            }),
            '立即购买'
          ])
        }
        var v = '';
        if (1 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需购买观看')
            }
          }),
          e('div', {
            class : 'c-player-btn'
          }, [
            a <= r ? e('BuyButton', {
              attrs: {
                price: a,
                'class-name': 'vipPlayer-tip',
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            })  : [
              e('BuyButton', {
                attrs: {
                  price: a,
                  'service-code': t.serviceCode,
                  aid: t.aid,
                  pid: t.pid,
                  fc: 'b10b185d7db52958'
                }
              }),
              e('VipBuyButton', {
                attrs: {
                  price: r,
                  fc: 'bb2942736c2d5e67',
                  aid: i.aid,
                  tvid: i.tvid
                }
              })
            ]
          ]),
          e('Login', {
            attrs: {
              label: '已购本片？请',
              text: '登录观看'
            }
          })
        ]);
         else if (2 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需购买观看')
            }
          }),
          e('div', {
            class : 'vipPlayer-tip'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'origin-price': o,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                'class-name': 'c-btn',
                fc: 'b10b185d7db52958'
              }
            })
          ])
        ]);
         else if (3 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需购买观看')
            }
          }),
          e('div', {
            class : 'c-player-btn'
          }, [
            a <= r ? e('BuyButton', {
              attrs: {
                price: a,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                'class-name': 'vipPlayer-tip',
                fc: 'b10b185d7db52958'
              }
            })  : [
              e('BuyButton', {
                attrs: {
                  price: a,
                  'service-code': t.serviceCode,
                  aid: t.aid,
                  pid: t.pid,
                  fc: 'b10b185d7db52958'
                }
              }),
              e('VipBuyButton', {
                attrs: {
                  price: r,
                  fc: 'bb2942736c2d5e67',
                  aid: i.aid,
                  tvid: i.tvid
                }
              })
            ]
          ])
        ]);
         else if (4 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需用券观看')
            }
          }),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            }),
            e('VipMarketButton', {
              attrs: {
                'vod-coupon-count': t.vodCouponCount,
                'market-tip': t.marketTip,
                aid: t.aid,
                fc: 'b6c004c57a163f9a',
                text: '开通VIP会员'
              }
            })
          ]),
          e('Login', {
            attrs: {
              label: '已是会员或已购买，',
              text: '请登录'
            }
          })
        ]);
         else if (5 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需用券观看')
            }
          }),
          e('div', {
            class : 'c-ticket-tip'
          }, [
            '您还有',
            s,
            '张券可用于观看本片'
          ]),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'origin-price': o,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            }),
            e('div', {
              class : 'vipPlayer-tip'
            }, [
              e('a', {
                attrs: {
                  href: 'javascript:void(0)'
                },
                class : 'c-btn',
                on: {
                  click: this.useCoupon
                }
              }, [
                '用券观看'
              ])
            ]),
            e('portal', {
              attrs: {
                to: 'playerPopupContainer'
              }
            }, [
              e('CouponLayer', {
                ref: 'coupon',
                attrs: {
                  'video-name': u,
                  'validity-period': d,
                  'left-coupon-num': s,
                  'use-vod-coupon-url': c
                }
              })
            ])
          ])
        ]);
         else if (6 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需用券观看')
            }
          }),
          e('div', {
            class : 'c-ticket-tip'
          }, [
            '您的点播券已用完'
          ]),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'origin-price': o,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            }),
            e('VipMarketButton', {
              attrs: {
                'vod-coupon-count': t.vodCouponCount,
                'market-tip': t.marketTip,
                aid: t.aid,
                fc: 'b6c004c57a163f9a',
                text: '续费VIP会员'
              }
            })
          ])
        ]);
         else if (7 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需用券观看')
            }
          }),
          e('div', {
            class : 'c-ticket-tip'
          }, [
            '您还有',
            s,
            '张券可用于观看本片'
          ]),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            }),
            e('div', {
              class : 'vipPlayer-tip'
            }, [
              e('a', {
                attrs: {
                  href: 'javascript:void(0)'
                },
                class : 'c-btn',
                on: {
                  click: this.useCoupon
                }
              }, [
                '用券观看'
              ])
            ]),
            e('portal', {
              attrs: {
                to: 'playerPopupContainer'
              }
            }, [
              e('CouponLayer', {
                ref: 'coupon',
                attrs: {
                  'video-name': u,
                  'validity-period': d,
                  'left-coupon-num': s,
                  'use-vod-coupon-url': c
                }
              })
            ])
          ])
        ]);
         else if (8 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: ''.concat(l ? '试看结束，' : '', '由于版权方要求，本片需用券观看')
            }
          }),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: 'b10b185d7db52958'
              }
            }),
            e('VipMarketButton', {
              attrs: {
                'vod-coupon-count': t.vodCouponCount,
                'market-tip': t.marketTip,
                aid: t.aid,
                fc: 'b6c004c57a163f9a',
                text: '开通VIP会员'
              }
            })
          ])
        ]);
         else if (9 === n) p = e('div', {
          class : 'm-player-tip m-sportsPlayer-tip'
        }, [
          e('div', {
            class : 'player-tip-inner'
          }, [
            e('TipInfo', {
              attrs: {
                text: '购买观看完整版'
              }
            }),
            [
              h(t, i)
            ],
            e('Login', {
              attrs: {
                label: '我有体育会员/球票，',
                text: '请登录<i class="c-glyphicon c-glyphicon-roundArrow">'
              }
            })
          ])
        ]);
         else if (10 === n) p = e('div', {
          class : 'm-player-tip m-sportsPlayer-tip'
        }, [
          e('div', {
            class : 'player-tip-inner'
          }, [
            e('TipInfo', {
              attrs: {
                text: '购买观看完整版'
              }
            }),
            [
              h()
            ]
          ])
        ]);
         else if (11 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('div', {
            class : 'c-player-tip-info'
          }, [
            u ? '《'.concat(u, '》为爱奇艺付费内容')  : '本片为爱奇艺付费内容',
            e('br'),
            '请购买套餐后观看'
          ]),
          e('div', {
            class : 'vipPlayer-tip'
          }, [
            e('a', {
              attrs: {
                href: 'javascript:void(0)'
              },
              class : 'c-btn',
              on: {
                click: this.buyPackage
              }
            }, [
              '打包购买'
            ]),
            e('span', {
              class : 'c-info hie'
            }, [
              '同时购买多个专辑更划算'
            ])
          ]),
          e('portal', {
            attrs: {
              to: 'playerPopupContainer'
            }
          }, [
            e(_e, {
              ref: 'eduPackageLayer',
              attrs: {
                'video-name': u,
                'layer-info': t,
                'video-info': i
              }
            })
          ])
        ]);
         else if (13 === n) v = e('div', {
          class : 'player-tip-inner'
        }, [
          e('TipInfo', {
            attrs: {
              text: '爱奇艺付费影片，观看完整版请开通VIP'
            }
          }),
          e('div', {
            class : 'c-player-btn'
          }, [
            e('BuyButton', {
              attrs: {
                price: a,
                block: '8051101_db_dandian_block',
                rseat: '8051101_db_dandian',
                'service-code': t.serviceCode,
                aid: t.aid,
                pid: t.pid,
                fc: '9b43045a005a9061'
              }
            }),
            e('VipMarketButton', {
              attrs: {
                block: '8051101_db_buy_block',
                rseat: '8051101_db_buy',
                'vod-coupon-count': t.vodCouponCount,
                'market-tip': t.marketTip,
                aid: t.aid,
                fc: '9b43045a005a9061',
                text: '开通VIP会员'
              }
            })
          ]),
          e('Login', {
            attrs: {
              label: '已是VIP，',
              text: '请登录'
            }
          })
        ]);
         else if (14 === n) {
          var f;
          v = e('div', {
            class : 'player-tip-inner'
          }, [
            e('TipInfo', {
              attrs: {
                text: '爱奇艺付费影片，观看完整版请开通VIP'
              }
            }),
            e('div', {
              class : 'c-player-btn'
            }, [
              e('BuyButton', {
                attrs: {
                  price: a,
                  block: '8051101_db_buy_block',
                  rseat: '8051101_db_dandian',
                  fc: '9b43045a005a9061',
                  'service-code': t.serviceCode,
                  aid: t.aid,
                  pid: t.pid
                }
              }),
              e('VipMarketButton', {
                attrs: (f = {
                  block: '8051101_db_dandian_block',
                  rseat: '8051101_db_buy',
                  'vod-coupon-count': t.vodCouponCount,
                  'market-tip': t.marketTip,
                  aid: t.aid,
                  fc: '9b43045a005a9061',
                  text: '开通VIP会员'
                }, Object(q['a']) (f, 'aid', i.aid), Object(q['a']) (f, 'tvid', i.tvid), f)
              })
            ])
          ])
        } else if (15 === n) {
          var y;
          v = e('div', {
            class : 'player-tip-inner'
          }, [
            e('TipInfo', {
              attrs: {
                text: '爱奇艺付费影片，观看完整版请开通VIP'
              }
            }),
            e('div', {
              class : 'c-player-btn'
            }, [
              e('VipMarketButton', {
                attrs: (y = {
                  block: '8051101_vip_buy_block',
                  rseat: '8051101_vip_buy',
                  'vod-coupon-count': t.vodCouponCount,
                  'market-tip': t.marketTip,
                  aid: t.aid,
                  fc: '9b43045a005a9061',
                  text: '开通VIP会员'
                }, Object(q['a']) (y, 'aid', i.aid), Object(q['a']) (y, 'tvid', i.tvid), y)
              })
            ]),
            e('Login', {
              attrs: {
                label: '已是VIP，',
                text: '请登录'
              }
            })
          ])
        } else if (16 === n) {
          var m;
          v = e('div', {
            class : 'player-tip-inner'
          }, [
            e('TipInfo', {
              attrs: {
                text: '爱奇艺付费影片，观看完整版请开通VIP'
              }
            }),
            e('div', {
              class : 'c-player-btn'
            }, [
              e('VipMarketButton', {
                attrs: (m = {
                  block: '8051101_vip_buy_block',
                  rseat: '8051101_vip_buy',
                  'vod-coupon-count': t.vodCouponCount,
                  'market-tip': t.marketTip,
                  aid: t.aid,
                  fc: '9b43045a005a9061',
                  text: '开通VIP会员'
                }, Object(q['a']) (m, 'aid', i.aid), Object(q['a']) (m, 'tvid', i.tvid), m)
              })
            ])
          ])
        } else if (18 === n || 17 === n) {
          var b = 17 === n ? e('a', {
            attrs: {
              href: '//m.iqiyi.com/user.html'
            },
            class : 'c-login'
          }, [
            '请登录'
          ])  : null,
          g = e('a', {
            attrs: {
              href: t.data && t.data.purchase && t.data.purchase[0].url || 'javascript:void(0);'
            },
            class : 'c-btn'
          }, [
            t.data && t.data.purchase && t.data.purchase[0].info || ''
          ]);
          p = e('div', {
            class : 'm-player-tip m-sportsPlayer-tip'
          }, [
            e('div', {
              class : 'player-tip-inner'
            }, [
              e('div', {
                class : 'c-player-tip-tlt'
              }, [
                u
              ]),
              e('div', {
                class : 'c-player-tip-info'
              }, [
                t.data && t.data.contentInfo ? t.data.contentInfo.info : ''
              ]),
              e('div', {
                class : 'c-player-btnBox'
              }, [
                b,
                g
              ])
            ])
          ])
        }
        var k = !!p;
        return e('div', [
          k ? p : e('div', {
            class : 'm-player-tip'
          }, [
            e('div', {
              class : 'm-player-tip m-vipPlayer-tip'
            }, [
              v
            ])
          ])
        ])
      }
    },
    Ce = Se,
    Te = Object(f['a']) (Ce, me, be, !1, null, null, null),
    xe = Te.exports,
    Pe = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-player-laqiPop-box'
      }, [
        i('img', {
          staticClass: 'layer-video-img',
          attrs: {
            src: e.poster
          }
        }),
        i('div', {
          staticClass: 'm-player-laqiPop'
        }, [
          i('div', {
            staticClass: 'player-tip-inner'
          }, [
            i('div', {
              staticClass: 'player-tip-info'
            }, [
              e._v('\n        请打开爱奇艺APP，观看完整版视频\n      ')
            ]),
            i('div', {
              staticClass: 'player-tip-btn'
            }, [
              i('a', {
                ref: 'copyLink',
                staticClass: 'c-link laqi',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                i('i', {
                  staticClass: 'c-glyphicon c-glyphicon-iqy'
                }),
                e._v('\n          前往APP观看\n        ')
              ])
            ])
          ])
        ])
      ])
    },
    Ve = [
    ],
    Ie = i('ec1c'),
    $e = {
      name: 'QiyiSourceSealRivalLayer',
      props: {
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        poster: {
          type: String,
        default:
          ''
        }
      },
      mounted: function () {
        var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.init();
              case 2:
              case 'end':
                return e.stop()
            }
          },
          e,
          this)
        })); function t() {
          return e.apply(this, arguments)
        }
        return t
      }(),
      methods: {
        init: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0,
                  Object(Ie['i']) ({
                    block: '804231_toutiao_xianbofuceng'
                  }),
                  e.next = 4,
                  this.registerCopy(this.$refs.copyLink, 'http://ota.iqiyi.com/f4.jsp?url=h5_fuceng');
                case 4:
                  t = e.sent,
                  t.on('success', function () {
                    Object(Ie['h']) ({
                      rseat: J.ios ? '804231_toutiaourl_ios' : '804231_toutiaourl_android'
                    }),
                    i.$emit('sourceLayerFoo', {
                      code: 'sealingRivalCopyLink',
                      data: {
                        code: 'success'
                      }
                    })
                  }),
                  e.next = 11;
                  break;
                case 8:
                  throw e.prev = 8,
                  e.t0 = e['catch'](0),
                  e.t0;
                case 11:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this,
            [
              [0,
              8]
            ])
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        registerCopy: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e(t, i) {
            var n,
            a = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return n = '//static.iqiyi.com/js/html5/js/lib/clipboard.min.js',
                  t.setAttribute('data-clipboard-text', i),
                  e.abrupt('return', new l.a(function () {
                    var e = Object(c['a']) (regeneratorRuntime.mark(function e(i, r) {
                      var o;
                      return regeneratorRuntime.wrap(function (e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            if (!a.isNotSupportCopy()) {
                              e.next = 4;
                              break
                            }
                            r(new Error('notSupport')),
                            e.next = 7;
                            break;
                          case 4:
                            return e.next = 6,
                            Object(p['e']) (n);
                          case 6:
                            window.Clipboard ? (o = new window.Clipboard(t), i(o))  : r(new Error('noClipboard'));
                          case 7:
                          case 'end':
                            return e.stop()
                        }
                      },
                      e)
                    })); return function (t, i) {
                      return e.apply(this, arguments)
                    }
                  }())); case 3:
                case 'end':
                  return e.stop()
                }
            },
            e)
          })); function t(t, i) {
            return e.apply(this, arguments)
          }
          return t
        }(), isNotSupportCopy: function () {
          var e = window.navigator.userAgent,
          t = /iPhone OS (\d*)_(\d*)/i.exec(e),
          i = t && 8 === t[1];
          return /BLN-TL10/i.test(e) || /PE-TL20/i.test(e) || i || /VivoBrowser/i.test(e)
        }
      }
    },
    Oe = $e,
    je = Object(f['a']) (Oe, Pe, Ve, !1, null, null, null),
    Le = je.exports,
    Ae = '//serv.vip.iqiyi.com/pay/queryLayer.action',
    Ee = 0,
    Be = 1,
    Re = 2,
    qe = 3,
    Ne = 4,
    Fe = 5,
    Me = 6,
    He = 7,
    De = 8,
    Qe = 9,
    Ue = 10,
    ze = 11,
    Ge = 13,
    Ye = 14,
    Xe = 15,
    Je = 16,
    We = 17,
    Ze = 18,
    Ke = 0,
    et = 1,
    tt = 2,
    it = 3,
    nt = 4,
    at = 5;
    function rt(e) {
      return ot.apply(this, arguments)
    }
    function ot() {
      return ot = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
        var i,
        n,
        a;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return i = t.aid,
              n = t.pre,
              e.next = 3,
              pt(i);
            case 3:
              return a = e.sent,
              O() (a, a.data),
              a.aid = i,
              a.pre = n,
              a.price = a.price ? Q() (a.price) / 100 : '',
              a.originPrice = a.originPrice ? Q() (a.originPrice) / 100 : '',
              a.halfPrice = a.halfPrice ? Q() (a.halfPrice) / 100 : '',
              a.vipPrice = a.vipPrice ? Q() (a.vipPrice) / 100 : a.vipPrice,
              a.marketTip = a.marketTip ? JSON.parse(a.marketTip)  : a.marketTip,
              a.validityPeriod = a.validityPeriod ? a.validityPeriod.slice(0, - 3)  : '',
              e.abrupt('return', a);
            case 14:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ot.apply(this, arguments)
    }
    function st(e, t) {
      return ct.apply(this, arguments)
    }
    function ct() {
      return ct = Object(c['a']) (regeneratorRuntime.mark(function e(t, i) {
        var n,
        a,
        r,
        o,
        s,
        c,
        d,
        u,
        l,
        p;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              if (n = Ee, a = 0, r = 6, o = 1, s = t.vipContentType, c = Q() (t.sourceType), s !== a) {
                e.next = 32;
                break
              }
              if (d = dt(t), d !== Ke) {
                e.next = 12;
                break
              }
              n = Ee,
              e.next = 30;
              break;
            case 12:
              return u = t.leftCouponNum,
              l = se(),
              e.next = 16,
              !!se && ut(i);
            case 16:
              p = e.sent,
              n = n || d === tt && !l && Be,
              n = n || d === tt && l && p && Re,
              n = n || d === tt && l && !p && qe,
              n = n || d === it && !l && Ne,
              n = n || d === it && l && p && u && Fe,
              n = n || d === it && l && p && !u && Me,
              n = n || d === it && l && !p && u && He,
              n = n || d === it && l && !p && !u && De,
              n = n || d === nt && ze,
              n = n || d === at && !l && Ge,
              n = n || d === at && l && Ye,
              n = n || d === et && !l && Xe,
              n = n || d === et && l && Je;
            case 30:
              e.next = 33;
              break;
            case 32:
              1 === c ? n = se() ? Ze : We : [
                r,
                o
              ].indexOf(s) > - 1 && (n = se() ? Ue : Qe);
            case 33:
              return e.abrupt('return', n);
            case 34:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ct.apply(this, arguments)
    }
    function dt(e) {
      var t,
      i = e.isSupportVod,
      n = e.isSupportVodCoupon,
      a = e.isSupportMonth,
      r = e.isSupportPackage;
      return t = t || !i && a && !n && et,
      t = t || i && !a && !n && tt,
      t = t || i && !a && n && it,
      t = t || r && !i && !a && !n && nt,
      t = t || i && a && !n && at,
      t || Ke
    }
    function ut(e) {
      return lt.apply(this, arguments)
    }
    function lt() {
      return lt = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.abrupt('return', t.indexOf(ne) > - 1 || t.indexOf(ie) > - 1);
            case 1:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), lt.apply(this, arguments)
    }
    function pt(e) {
      return Object(p['d']) (Ae, {
        params: {
          aid: e,
          platform: '97ae2982356f69d8',
          platformType: 'h5',
          messageid: K(),
          version: '7.0',
          P00001: ce(),
          dataType: 'json'
        },
        withCredentials: !0
      }).then(function (e) {
        return e.data || {
        }
      })
    }
    var ht,
    vt,
    ft = 0,
    yt = 1,
    mt = 2,
    bt = 3,
    gt = {
      0: 'none',
      1: 'code',
      2: 'vip',
      3: 'rival'
    },
    kt = {
      name: 'QiyiSourceLayer',
      components: {
        QiyiSourceCodeLayer: R,
        QiyiSourceVipLayer: xe
      },
      props: {
        vipType: {
          type: String,
        default:
          ''
        },
        videoName: {
          type: String,
        default:
          ''
        },
        isShowVipLayer: {
          type: Boolean,
        default:
          !0
        },
        poster: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          sourceType: ft,
          vipStatus: {
          },
          videoInfo: {
          },
          layerInfo: {
          },
          templateType: 0,
          show: !1
        }
      },
      beforeMount: function () {
        this.init()
      },
      methods: {
        init: function () {
          this.bindEvent()
        },
        bindEvent: function () {
          var e = this,
          t = this.$parent;
          t.$on('load', function () {
            e.show && (e.show = !1, t.showVideo())
          }),
          t.$on('loaded', function () {
            var t = Object(c['a']) (regeneratorRuntime.mark(function t(i) {
              var n,
              a,
              r;
              return regeneratorRuntime.wrap(function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (e.videoInfo = O() (i.videoInfo, {
                      title: e.videoName,
                      imageUrl: e.poster
                    }), n = !!e.isSourceVip(e.videoInfo), a = {
                    }, e.$emit('noSourceLayer', !n && !e.isSourceCode(e.videoInfo)), e.videoInfo.prv ? e.emitSourceType(ft)  : (r = e.setSourceType(e.videoInfo), e.emitSourceType(r)), !n) {
                      t.next = 9;
                      break
                    }
                    return t.next = 8,
                    e.getVipLayerInfo();
                  case 8:
                    a = t.sent;
                  case 9:
                    e.$emit('sourceVipType', Object(s['a']) ({
                    }, a, {
                      isVip: n
                    }));
                  case 10:
                  case 'end':
                    return t.stop()
                }
              },
              t)
            })); return function (e) {
              return t.apply(this, arguments)
            }
          }()), t.$on('playEnd', function (t) {
            var i = t.end;
            if (i && e.videoInfo.prv) {
              var n = e.setSourceType(e.videoInfo);
              e.emitSourceType(n)
            }
          }), t.$on('showSourceLayer', function () {
            var t = e.setSourceType(e.videoInfo);
            e.emitSourceType(t)
          })
        },
        getVipLayerInfo: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            n,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.videoInfo,
                  e.next = 3,
                  rt({
                    aid: t.albumId || t.aid || t.tvid
                  });
                case 3:
                  return this.layerInfo = i = e.sent,
                  e.next = 6,
                  st(i, this.vipType);
                case 6:
                  return this.templateType = n = e.sent,
                  e.next = 9,
                  dt(i);
                case 9:
                  return a = e.sent,
                  e.abrupt('return', {
                    templateType: n,
                    layerInfo: i,
                    layerType: a
                  });
                case 11:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        isPano: function (e) {
          if (e && e.data && e.data.p && e.data.p.pano) {
            var t = e.data.p.pano.type;
            return 1 !== t
          }
          return !1
        },
        setSourceType: function (e) {
          return this.isSourceVip(e) ? this.sourceType = mt : this.isSourceCode(e) ? this.isSealRivalCode(e) ? this.sourceType = bt : this.sourceType = yt : this.sourceType = ft,
          this.sourceType
        },
        emitSourceType: function (e) {
          var t = this.$parent;
          this.show = e !== ft,
          this.$emit('sourceTypeChange', {
            type: e,
            name: gt[e]
          }),
          this.show && (t.pause(), t.hideVideo())
        },
        isSourceCode: function (e) {
          var t = e.data,
          i = e.src || '',
          n = e.code,
          a = t.st;
          return !('A00000' === n && [
            101,
            200
          ].includes(a) && i) || this.isPano(t) || 'A00004' === n
        },
        isSealRivalCode: function (e) {
          return 'A00030' === e.code
        },
        isSourceVip: function (e) {
          var t = e.data,
          i = t.boss_ts;
          return i.code && 'A00000' !== i.code || e.prvType
        },
        sourceLayerFooHandle: function (e) {
          this.$emit('sourceLayerFoo', e)
        }
      },
      render: function () {
        var e = arguments[0];
        if (this.sourceType !== ft && this.show) return this.sourceType === yt ? e(R, {
          attrs: {
            'video-info': this.videoInfo
          }
        })  : this.sourceType === mt && this.isShowVipLayer ? e(xe, {
          attrs: {
            'video-info': this.videoInfo,
            'vip-type': this.vipType,
            'video-name': this.videoName,
            'layer-info': this.layerInfo,
            'template-type': this.templateType
          }
        })  : this.sourceType === bt ? e(Le, {
          attrs: {
            'video-info': this.videoInfo,
            poster: this.poster
          },
          on: Object(s['a']) ({
          }, {
            sourceLayerFoo: this.sourceLayerFooHandle
          })
        })  : null
      }
    },
    wt = kt,
    _t = Object(f['a']) (wt, ht, vt, !1, null, null, null),
    St = _t.exports,
    Ct = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '190910_videoplay',
            expression: '\'190910_videoplay\''
          },
          {
            name: 'pingback',
            rawName: 'v-pingback',
            value: '190910_videoplay',
            expression: '\'190910_videoplay\''
          },
          {
            name: 'show',
            rawName: 'v-show',
            value: e.playShow,
            expression: 'playShow'
          }
        ],
        attrs: {
          onclick: 'if(!this.getAttribute(\'srcset\')) {this.setAttribute(\'playBtnClickedBeforeInit\', \'true\'); document.getElementById(\'video\').play();}'
        },
        on: {
          click: function (t) {
            return e.$emit('playClick')
          }
        }
      }, [
        e.prvShow ? i('div', {
          key: 'prv',
          staticClass: 'c-vipPlayer-btn'
        }, [
          i('i', {
            staticClass: 'c-glyphicon c-glyphicon-tryPlay'
          }),
          e._v('试看6分钟\n  ')
        ])  : i('div', {
          key: 'common',
          staticClass: 'c-videoplay'
        }, [
          i('i', {
            staticClass: 'c-player-icon c-player-big'
          })
        ])
      ])
    },
    Tt = [
    ],
    xt = {
      name: 'QiyiPlayButton',
      data: function () {
        return {
          playShow: !0,
          prvShow: !1
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('created', function (t) {
          var i = t.getVideo();
          i.on('playing', function () {
            e.playShow = !1
          }),
          i.on('pause', function () {
            e.playShow = !0
          })
        }),
        this.$parent.$on('loaded', function (t) {
          var i = t.videoInfo;
          i.prv && (e.prvShow = !0),
          e.$el.getAttribute('srcset') || !e.$el.getAttribute('playBtnClickedBeforeInit') && !document.querySelector('[playBtnClickedBeforeInit=true]') || e.$parent.play(),
          e.$el.setAttribute('srcset', !0)
        }),
        this.$parent.$on('clear', function () {
          e.playShow = !1,
          e.prvShow = !1
        })
      }
    },
    Pt = xt,
    Vt = Object(f['a']) (Pt, Ct, Tt, !1, null, null, null),
    It = Vt.exports,
    $t = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.showAutoHide,
              expression: 'showAutoHide'
            }
          ],
          staticClass: 'm-video-dashboard'
        }, [
          i('div', {
            staticClass: 'video-console'
          }, [
            i('div', {
              staticClass: 'video-switch',
              class : {
                selected: !e.paused
              },
              on: {
                click: function (t) {
                  return e.$emit('playClick')
                }
              }
            }, [
              i('i', {
                staticClass: 'c-glyphicon c-glyphicon-switchPlay'
              })
            ]),
            i('span', {
              staticClass: 'timeDisplay-current'
            }, [
              e._v(e._s(e.currentTime))
            ]),
            i('div', {
              ref: 'progress',
              staticClass: 'video-progress',
              on: {
                touchstart: e.touchstart,
                touchmove: e.touchmove,
                touchend: e.touchend
              }
            }, [
              i('div', {
                staticClass: 'progress-track'
              }, [
                i('div', {
                  staticClass: 'progress-load',
                  style: {
                    width: e.progressLoad
                  }
                }),
                i('div', {
                  staticClass: 'progress-play',
                  style: {
                    width: e.progressPlay
                  }
                }),
                i('div', {
                  staticClass: 'progress-seek',
                  style: {
                    left: e.progressSeek
                  }
                })
              ])
            ]),
            i('span', {
              staticClass: 'timeDisplay-duration'
            }, [
              e._v(e._s(e.duration))
            ])
          ]),
          i('span', {
            directives: [
              {
                name: 'copy-callapp',
                rawName: 'v-copy-callapp',
                value: {
                  video: e.videoInfo,
                  subtype: e.danmuSubtype
                },
                expression: '{video: videoInfo, subtype: danmuSubtype}'
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'h5_player_danmu',
                expression: '\'h5_player_danmu\''
              },
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: 'h5_block_player_danmu',
                expression: '\'h5_block_player_danmu\''
              }
            ],
            staticClass: 'danmu',
            on: {
              click: function (t) {
                return e.callApp({
                  from: 'danmu'
                })
              }
            }
          }, [
            i('i', {
              staticClass: 'c-icon-danmu'
            })
          ]),
          i('div', {
            staticClass: 'fullScreen',
            class : {
              selected: e.isFullscreen
            },
            on: {
              click: e.fullscreen
            }
          }, [
            i('i', {
              staticClass: 'c-glyphicon c-glyphicon-fullscreenNew'
            })
          ])
        ]),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.regulationShow,
              expression: 'regulationShow'
            }
          ],
          staticClass: 'video-regulation',
          class : {
            backOff: e.direction < 0
          },
          staticStyle: {
            display: 'none'
          }
        }, [
          e._m(0),
          i('div', {
            staticClass: 'regulation-progress'
          }, [
            i('i', {
              staticClass: 'progress-time',
              style: {
                width: e.progressRegulation
              }
            })
          ]),
          i('div', {
            staticClass: 'video-time'
          }, [
            i('span', {
              staticClass: 'timeCurrent'
            }, [
              e._v(e._s(e.currentTime))
            ]),
            i('span', {
              staticClass: 'line'
            }, [
              e._v('/')
            ]),
            i('span', {
              staticClass: 'timeDuration'
            }, [
              e._v(e._s(e.duration))
            ])
          ])
        ])
      ])
    },
    Ot = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'regulation-status'
        }, [
          i('i', {
            staticClass: 'c-glyphicon c-glyphicon-forward'
          })
        ])
      }
    ],
    jt = {
      data: function () {
        return {
          showAutoHide: !1
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('created', function () {
          e.initAutoHide()
        })
      },
      methods: {
        initAutoHide: function () {
          var e = this,
          t = this.$parent;
          t.on('playing', function () {
            e.autoHide()
          }),
          t.on('pause', function () {
            e.stopHideTimer(),
            e.showAutoHide = !0
          }),
          t.on('click', function () {
            t.paused() || (e.showAutoHide = !e.showAutoHide, e.showAutoHide && e.autoHide())
          })
        },
        autoHide: function () {
          var e = this;
          this.stopHideTimer(),
          this.timer = setTimeout(function () {
            e.showAutoHide = !1
          }, 3000)
        },
        stopHideTimer: function () {
          clearTimeout(this.timer)
        }
      }
    },
    Lt = i('ba45'),
    At = {
      props: {
        videoName: {
          type: String,
        default:
          ''
        },
        poster: {
          type: String,
        default:
          ''
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('loaded', function (t) {
          e.videoInfo = O() (t.videoInfo, {
            title: e.videoName,
            imageUrl: e.poster
          })
        })
      },
      methods: {
        callApp: function (e) {
          
        }
      }
    },
    Et = {
      name: 'QiyiDashboard',
      mixins: [
        jt,
        At
      ],
      props: {
        isVideo: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          isFullscreen: !1,
          regulationShow: !1,
          paused: !0,
          duration: '',
          currentTime: '',
          progressPlay: '',
          progressSeek: '',
          progressLoad: '',
          progressRegulation: '',
          direction: 0,
          danmuSubtype: Lt['g'].danmu.subtype,
          videoInfo: {
          }
        }
      },
      watch: {
        showAutoHide: function (e) {
          this.$emit('dashboardShowChange', e)
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('created', function () {
          e.init()
        })
      },
      methods: {
        init: function () {
          var e = this.$parent;
          this.paused = e.paused(),
          this.duration = Z(e.duration()),
          this.bindEvent()
        },
        bindEvent: function () {
          var e = this,
          t = this.$parent;
          t.$on('load', function () {
            e.showAutoHide = !1
          }),
          t.$on('playStart', function (e) {
            var i = e.status;
            'VIDEO' === i && t.muted(!1)
          }),
          t.on('playing', function () {
            e.paused = t.paused()
          }),
          t.on('pause', function () {
            e.paused = t.paused()
          }),
          t.on('durationchange', function () {
            e.duration = Z(t.duration())
          }),
          t.on('timeupdate', function () {
            if (!e.isDraging) {
              var i = t.currentTime(),
              n = t.duration(),
              a = i / n;
              e.updateCurrentTime(i),
              e.updateProgress(a)
            }
          }),
          t.on('progress', function () {
            var t = e.getBufferPercent();
            e.updateProgressLoad(t)
          }),
          t.on('touchstart', function (i) {
            if (e.isVideo) {
              e.isDragingVideo = !0,
              e.lockRegulation = !1;
              var n = i.touches[0];
              e.videoStartSecond = t.currentTime(),
              e.videoStartPos = n.pageX,
              e.videoStartYPos = n.pageY
            }
          }),
          t.on('touchmove', function (t) {
            if (e.isVideo && !e.lockRegulation) {
              var i = t.touches[0],
              n = Math.abs(i.pageY - e.videoStartYPos),
              a = Math.abs(i.pageX - e.videoStartPos);
              (a || n) && (!e.regulationShow && n >= 1 && a < 5 ? e.lockRegulation = !0 : e.isDragingVideo && (e.regulationShow = !0, t.preventDefault(), t.stopPropagation(), e.isDraging = !0, e.videoSeekPos = i.pageX, e.seekVideo(e.videoSeekPos)))
            }
          }),
          t.on('touchend', function () {
            if (e.isVideo && !e.lockRegulation && (e.isDragingVideo = !1, e.regulationShow)) {
              e.isDraging = !1,
              e.regulationShow = !1,
              e.direction = 0;
              var t = e.seekVideo(e.videoSeekPos);
              e.$emit('seek', t)
            }
          }),
          t.on('fullscreenchange', function (t) {
            e.isFullscreen = t.isFullscreen
          })
        },
        getBufferPercent: function () {
          var e = this.$parent,
          t = e.duration();
          return t ? this.getBuffered() / t : 0
        },
        getBuffered: function () {
          var e = this.$parent,
          t = e.buffered(),
          i = t.length - 1;
          return i < 0 ? 0 : t.end(i)
        },
        updateProgress: function (e) {
          var t = ''.concat(100 * e, '%');
          this.progressPlay = t,
          this.progressSeek = t,
          this.progressRegulation = t
        },
        updateProgressLoad: function (e) {
          var t = ''.concat(100 * e, '%');
          this.progressLoad = t
        },
        touchstart: function (e) {
          this.isDraging = !0,
          this.seekPos = e.touches[0].pageX,
          this.stopHideTimer()
        },
        touchmove: function (e) {
          this.isDraging = !0,
          this.seekPos = e.touches[0].pageX,
          this.seekDashboard(this.seekPos)
        },
        touchend: function () {
          var e = this.seekDashboard(this.seekPos);
          this.isDraging = !1,
          this.$emit('seek', e)
        },
        seekDashboard: function (e) {
          var t = this.$refs.progress,
          i = t.getBoundingClientRect().left,
          n = t.offsetWidth,
          a = e - i,
          r = Math.min(Math.max(a, 0), n),
          o = r / n;
          return this.updateProgress(o),
          this.updateCurrentTimeProgress(o)
        },
        seekVideo: function (e) {
          var t = this.videoStartPos,
          i = e - t,
          n = this.$parent.duration(),
          a = n / 2000,
          r = (this.videoStartSecond + i * a) / n;
          return r = Math.min(Math.max(r, 0), 1),
          this.direction = i > 0 ? 1 : - 1,
          this.updateProgress(r),
          this.updateCurrentTimeProgress(r)
        },
        updateCurrentTimeProgress: function (e) {
          var t = this.$parent.duration(),
          i = e * t;
          return this.updateCurrentTime(i),
          i
        },
        updateCurrentTime: function (e) {
          e >= 0 && (this.currentTime = Z(e))
        },
        fullscreen: function (e) {
          this.$emit('fullscreen', e)
        }
      }
    },
    Bt = Et,
    Rt = Object(f['a']) (Bt, $t, Ot, !1, null, null, null),
    qt = Rt.exports,
    Nt = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          staticClass: 'handle-ad'
        }, [
          i('span', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.showAutoHide,
                expression: 'showAutoHide'
              }
            ],
            staticClass: 'player-voice',
            class : {
              selected: e.muted
            },
            on: {
              click: function (t) {
                return e.$emit('voiceClick')
              }
            }
          }, [
            i('i', {
              staticClass: 'c-player-icon c-player-voice'
            })
          ]),
          i('span', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.fullScreenShow,
                expression: 'fullScreenShow'
              }
            ],
            staticClass: 'player-fullscreen',
            class : {
              selected: e.isFullScreen
            },
            on: {
              click: e.fullscreen
            }
          }, [
            i('i', {
              staticClass: 'c-player-icon c-player-fullscreen'
            })
          ])
        ])
      ])
    },
    Ft = [
    ],
    Mt = {
      name: 'QiyiAdDashboard',
      mixins: [
        jt
      ],
      data: function () {
        return {
          isFullScreen: !1,
          fullScreenShow: !1,
          muted: !1
        }
      },
      beforeMount: function () {
        var e = this;
        this.$parent.$on('created', function () {
          e.bindEvent()
        }),
        this.$parent.$on('load', function () {
          e.fullScreenShow = !1,
          e.showAutoHide = !1,
          e.muted = !1
        })
      },
      methods: {
        bindEvent: function () {
          var e = this,
          t = this.$parent;
          t.on('playing', function () {
            e.fullScreenShow = !0
          }),
          t.on('muted', function (t) {
            e.muted = t
          })
        },
        fullscreen: function (e) {
          this.$emit('fullscreen', e),
          this.isFullScreen = this.$parent.video.isFullscreen()
        }
      }
    },
    Ht = Mt,
    Dt = Object(f['a']) (Ht, Nt, Ft, !1, null, null, null),
    Qt = Dt.exports,
    Ut = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.loadingTipShow,
              expression: 'loadingTipShow'
            }
          ],
          staticClass: 'm-player-tip'
        }, [
          i('div', {
            staticClass: 'player-tip-inner'
          }, [
            i('div', {
              staticClass: 'c-player-tip-info'
            }, [
              i('i', {
                staticClass: 'player-loading-logo',
                style: 'background-image:url(' + e.loadingImage + ')'
              }),
              i('div', {
                staticClass: 'player-loading-info'
              }, [
                i('i', {
                  staticClass: 'update-icon'
                }),
                e._v('正在全力加载\n          '),
                e.loadingCallapp ? i('a', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: 'h5_player_loading',
                      expression: '\'h5_player_loading\''
                    }
                  ],
                  staticClass: 'c-link',
                  attrs: {
                    href: 'javascript:void(0)'
                  },
                  on: {
                    click: function (t) {
                      return e.callApp({
                        from: 'loading'
                      })
                    }
                  }
                }, [
                  e._v('\n            ,去爱奇艺APP流畅看\n          ')
                ])  : e._e()
              ])
            ])
          ])
        ]),
        e._m(0),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.loadingShow && !e.quailtyChange,
              expression: 'loadingShow && !quailtyChange'
            }
          ],
          staticClass: 'c-player-loading'
        }, [
          i('i', {
            staticClass: 'loading-icon'
          }),
          e._v(' 正在全力加载\n    '),
          e.loadingCallapp ? i('a', {
            directives: [
              {
                name: 'copy-callapp',
                rawName: 'v-copy-callapp',
                value: {
                  video: e.videoInfo,
                  subtype: e.loadingSubtype
                },
                expression: '{video: videoInfo, subtype: loadingSubtype}'
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'h5_player_loading',
                expression: '\'h5_player_loading\''
              }
            ],
            staticClass: 'c-link',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: function (t) {
                return e.callApp({
                  from: 'loading'
                })
              }
            }
          }, [
            e._v('\n      ,去爱奇艺APP流畅看\n    ')
          ])  : e._e()
        ]),
        e.quailtyChange ? i('div', {
          staticClass: 'c-player-loading'
        }, [
          i('span', [
            e._v('\n      已切换到\n      '),
            i('a', {
              staticClass: 'c-link',
              attrs: {
                href: 'javascript:void(0);'
              }
            }, [
              e._v('\n        ' + e._s(e.quailtyChange) + '\n      ')
            ]),
            e._v('\n      视频\n    ')
          ])
        ])  : e._e()
      ])
    },
    zt = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'c-player-loading dn'
        }, [
          i('i', {
            staticClass: 'loading-icon'
          }),
          e._v(' 正在全力加载，\n    '),
          i('a', {
            staticClass: 'c-link',
            attrs: {
              href: 'javascript:void(0)'
            }
          }, [
            e._v('刷新')
          ]),
          e._v('重试\n  ')
        ])
      }
    ],
    Gt = {
      name: 'QiyiLoading',
      mixins: [
        At
      ],
      props: {
        loadingCallapp: {
          type: Boolean,
        default:
          !0
        },
        loadingImage: {
          type: String,
        default:
          '//m.iqiyipic.com/common/lego/20181127/84cbd21b7e8844689f99fe48bb0de6d6.png'
        }
      },
      data: function () {
        return {
          loadingShow: !1,
          loadingTipShow: !1,
          quailtyChange: '',
          loadingSubtype: Lt['g'].loading.subtype,
          videoInfo: {
          }
        }
      },
      beforeMount: function () {
        this.init()
      },
      methods: {
        init: function () {
          var e = this;
          this.$parent.$on('created', function () {
            var i = e.$parent.video;
            i.once('play', t),
            e.bindEvent(i)
          });
          var t = function () {
            e.loadingTipShow = !0
          },
          i = function () {
            var i = e.$parent.video;
            i.off('play', t),
            e.loadingTipShow = !1
          };
          this.$parent.$on('load', function () {
            var n = e.$parent.video;
            n.off('playing', i),
            n.off('play', t),
            n.once('playing', i),
            n.once('play', t)
          }),
          this.$parent.$on('sourceTypeChange', function (t) {
            var i = t.type;
            0 !== i && (e.loadingTipShow = !1)
          }),
          this.$parent.$on('layerShow', function (t) {
            var i = t.type;
            i && (e.loadingTipShow = !1)
          }),
          this.$parent.$on('quailtyChange', function (t) {
            e.quailtyChange = t
          })
        },
        bindEvent: function (e) {
          var t = this;
          e.on('playing', function () {
            t.loadingShow = !1
          }),
          e.on('timeupdate', function () {
            t.loadingShow && t.getBuffered(e) > 2 && (t.loadingShow = !1)
          }),
          e.on('waiting', function () {
            t.loadingShow = !0,
            Object(Ie['i']) ({
              block: 'h5_block_player_loading'
            })
          })
        },
        getBuffered: function (e) {
          var t,
          i = e.buffered(),
          n = i.length - 1,
          a = n > 0 ? n : 0,
          r = i.start(a);
          return r < e.currentTime() && r < e.duration() && (t = i.end(a)),
          t ? t - r : 0
        }
      }
    },
    Yt = Gt,
    Xt = Object(f['a']) (Yt, Ut, zt, !1, null, null, null),
    Jt = Xt.exports,
    Wt = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i;
    },
    Zt = [
    ],
    Kt = (i('386d'), i('b383')),
    ei = i.n(Kt),
    ti = 'QC015';
    function ii() {
      return W.iPhone ? 12 : 13
    }
    function ni(e) {
      var t = oi();
      return si(ti, t.vfm, e)
    }
    function ai() {
      var e = oi();
      return e.cfrm
    }
    var ri = {
      path: '/',
      domain: 'iqiyi.com'
    };
    function oi() {
      return ei.a.parse(location.search.replace('?', ''))
    }
    function si(e, t) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      },
      n = i.expires,
      a = t;
      if (a) {
        var r = ri;
        n && (r = Object(s['a']) ({
          expires: n
        }, ri)),
        F.a.set(e, a, r)
      } else a = F.a.get(e);
      return a
    }
    var ci = i('4f30'),
    di = Object(q['a']) ({
    }, ci['CHANNEL_SHAOER'], 'H55fza_589'),
    ui = {
      name: 'QiyiLimit',
      mixins: [
        At
      ],
      props: {
        subtype: {
          type: String,
        default:
          'H5qzql_523'
        },
        templateType: {
          type: String,
        default:
          ''
        },
        second: {
          type: Number,
        default:
          300
        },
        poster: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          startShow: !1,
          endShow: !1,
          continueShow: !1,
          purchaseType: 0,
          videoInfo: {
          }
        }
      },
      computed: {
        show: function () {
          return this.startShow || this.endShow || this.continueShow
        },
        subType: function () {
          return di[this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : '')] || this.subtype
        }
      },
      watch: {
        show: function (e) {
          this.$emit('show', e)
        }
      },
      beforeMount: function () {
        this.init()
      },
      methods: {
        init: function () {
          var e = this;
          this.$parent.$on('created', function () {
            e.video = e.$parent.video,
            e.video.once('play', function () {
              e.isLimit && (e.stop(), e.start())
            })
          }),
          this.$parent.$on('load', function (t) {
            e.purchaseType = t.purchaseType
          }),
          this.$parent.$on('loaded', function (t) {
            var i = t.videoInfo;
            e.tvid = i.tvid,
            e.duration = i.duration,
            e.isLimit = e.getLimitStatus(),
            e.isLimit && (e.startCondition() && (e.video.pause(), e.$emit('stopPlay'), e.startShow = !0), e.endShow = !1, e.continueShow = !1)
          })
        },
        play: function () {
          this.hide(),
          this.$emit('play')
        },
        replayPlay: function () {
          this.hide(),
          this.$emit('replayPlay')
        },
        continuePlay: function () {
          this.hide(),
          this.continue = !0,
          this.$emit('play')
        },
        hide: function () {
          J.android && this.video.show(),
          this.startShow = !1,
          this.endShow = !1,
          this.continueShow = !1
        },
        redirectOrCallApp: function () {
         
        },
        getLimitStatus: function () {
          return !this.whiteCondtion()
        },
        whiteCondtion: function () {
          return - 1 === ['MOVIE',
          'ALBUM',
          'SOURCE'].indexOf(this.templateType) || [
            '2008_aldbd'
          ].indexOf(ni() || ai()) >= 0 || /$http(s)?:\/\/([^\s]+).baidu.com/.test(document.referrer) || W.baidubox || this.duration < this.second || 0 !== this.purchaseType || !W.txTV && W.weixin
        },
        startCondition: function () {
          return W.txTV || W.youku || W.xigua || W.toutiao
        },
        endCondtion: function () {
          return W.txTV || W.youku || W.xigua || W.toutiao
        },
        continueCondition: function () {
          return !W.txTV && !W.youku && !W.xigua && !W.toutiao
        },
        start: function () {
          this.timer = li(1000) (this.limit.bind(this))
        },
        stop: function () {
          this.timer && this.timer()
        },
        limit: function () {
          var e = this.$parent.currentTime(),
          t = this.second,
          i = this.duration;
          i <= t || this.continue || (e > t + 3 ? this.continueCondition() || (this.video.seek(t), this.hide())  : e > t && this.showLayerAndPause())
        },
        showLayerAndPause: function () {
          J.android && this.video.hide(),
          this.video.paused() || (this.video.exitFullscreen(), this.startShow = !1, this.endCondtion() ? this.endShow = !0 : this.continueCondition() && (this.continueShow = !0, this.continue = !0), this.video.pause())
        }
      }
    };
    function li(e) {
      return function t(i) {
        return clearTimeout(li.time),
        li.time = setTimeout(function () {
          i(),
          t(i)
        }, e),
        function () {
          clearTimeout(li.time)
        }
      }
    }
    var pi = ui,
    hi = Object(f['a']) (pi, Wt, Zt, !1, null, null, null),
    vi = hi.exports,
    fi = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return false;
    },
    yi = [
    ],
    mi = i('38ff'),
    bi = i('f191'),
    gi = i('b2e7'),
    ki = i('5321'),
    wi = {
      name: 'QiyiPlayLimit',
      components: {
        ButtonDown: mi['a']
      },
      props: {
        subtype: {
          type: String,
        default:
          'H5qzql_523'
        },
        templateType: {
          type: String,
        default:
          ''
        },
        redirect: {
          type: Boolean,
        default:
          !1
        },
        playTemplate: {
          type: String,
        default:
          ''
        },
        second: {
          type: Number,
        default:
          300
        },
        poster: {
          type: String,
        default:
          ''
        },
        limitFilter: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          startShow: !1,
          endShow: !1,
          purchaseType: 0,
          isVip: !1,
          tipInfo: '请打开爱奇艺APP观看完整版',
          videoInfo: {
          },
          isLimit: !1,
          vipUser: !1
        }
      },
      computed: {
        show: function () {
          return this.startShow || this.endShow
        }
      },
      watch: {
        show: function (e) {
          this.$emit('show', e),
          this.$emit('playLimited', !0)
        }
      },
      beforeMount: function () {
        this.isVipUser(),
        this.init()
      },
      methods: {
        init: function () {
          var e = this;
          this.$parent.$on('created', function () {
            e.video = e.$parent.video,
            e.video.once('play', function () {
              e.isLimit && (e.stop(), e.start())
            })
          }),
          this.$parent.$on('load', function (t) {
            e.purchaseType = t.purchaseType
          }),
          this.$parent.$on('loaded', function (t) {
            e.videoInfo = t.videoInfo;
            var i = t.videoInfo;
            e.tvid = i.tvid,
            e.duration = i.duration,
            i && (i.purchaseType = + e.purchaseType),
            e.isLimit = false
          })
        },
        extralOptions: function () {
          var e = this.cid || this.videoInfo.cid || (this.videoInfo.data ? this.videoInfo.data.cid : '') || '',
          t = this.tvid || this.videoInfo.tvid || '';
          return {
            progress: this.$parent.video.currentTime(),
            ftype: 27,
            cid: e,
            tvid: t
          }
        },
        callApp: function () {
          
        },
        play: function () {
          Object(ki['l']) ({
            rseat: 'h5_xuanji_5min'
          }),
          this.hide(),
          this.$emit('play')
        },
        replayPlay: function () {
          this.hide(),
          this.$emit('replayPlay')
        },
        continuePlay: function () {
          this.hide(),
          this.continue = !0,
          this.$emit('play')
        },
        hide: function () {
          J.android && this.video.show(),
          this.startShow = !1,
          this.endShow = !1
        },
        redirectOrCallApp: function () {
       
        },
        start: function () {
          this.timer = _i(1000) (this.limit.bind(this))
        },
        stop: function () {
          this.timer && this.timer()
        },
        limit: function () {
          var e = this.$parent.currentTime(),
          t = this.second,
          i = this.duration;
          i <= t || this.continue || (e > t + 3 ? (this.video.seek(t), this.hide())  : e > t && this.showLayerAndPause())
        },
        showLayerAndPause: function () {
          J.android && this.video.hide(),
          this.video.paused() || (this.video.exitFullscreen(), this.startShow = !1, this.endShow = !0, this.video.pause())
        },
        isVipUser: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (Object(gi['M']) ()) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return', !1);
                case 2:
                  return e.next = 4,
                  Object(gi['u']) ();
                case 4:
                  return t = e.sent,
                  e.next = 7,
                  Object(gi['I']) ();
                case 7:
                  if (i = e.sent, 'A00000' !== t.code) {
                    e.next = 16;
                    break
                  }
                  if (!(i && i.data && i.data.vip_info && + i.data.vip_info.vipType === + gi['k'])) {
                    e.next = 14;
                    break
                  }
                  return this.vipUser = !1,
                  e.abrupt('return', !1);
                case 14:
                  return this.vipUser = !0,
                  e.abrupt('return', !1);
                case 16:
                  return e.abrupt('return', !1);
                case 17:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }()
      }
    };
    function _i(e) {
      return function t(i) {
        return clearTimeout(_i.time),
        _i.time = setTimeout(function () {
          i(),
          t(i)
        }, e),
        function () {
          clearTimeout(_i.time)
        }
      }
    }
    var Si = wi,
    Ci = Object(f['a']) (Si, fi, yi, !1, null, null, null),
    Ti = Ci.exports,
    xi = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div')
    },
    Pi = [
    ],
    Vi = {
      name: 'QiyiVV',
      props: {
        vvOptions: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        coustomVvOptions: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        vipType: {
          type: String,
        default:
          void 0
        },
        isVideo: {
          type: Boolean,
        default:
          !0
        },
        playerType: {
          type: String,
        default:
          ''
        },
        rate: {
          type: Number,
        default:
          void 0
        }
      },
      data: function () {
        return {
          refer: '',
          href: '',
          useHref: !1
        }
      },
      computed: {
        _vvOptions: function () {
          return this.vvOptions
        },
        _isVideo: function () {
          return this.isVideo
        }
      },
      watch: {
        _vvOptions: function (e, t) {
          e.tvid !== t.tvid && (this.clearVVMoniter(), this.startPlay = !0, this.realVideoPlayed = !1, this.isPrv = e.prv ? '1' : '0', this.playBackSecond = 0, this.lastPlayerSeconds = 0)
        },
        _isVideo: function (e) {
          e && this.checkRealVideoVV()
        }
      },
      beforeMount: function () {
        var e = this;
        this.firstTime = 15,
        this.secondTime = 75,
        this.intervalDelayTime = 120,
        this.intervalTimer = null,
        this.startPlay = !0,
        this.realVideoPlayed = !1,
        this.playBackSecond = 0,
        this.lastPlayerSeconds = 0,
        this.$parent.$on('created', function (t) {
          e.qiyiVideo = t,
          e.video = t.getVideo(),
          e.bindEvent()
        })
      },
      methods: {
        bindEvent: function () {
          var e = this,
          t = this.$parent;
          t.on('playing', function () {
            e.startPlay && e.$parent.src() && (e.startPlay = !1, Object(Ie['g']) (), e.sendReadyVV()),
            e.checkRealVideoVV()
          }),
          t.on('pause', function () {
            e.isVideo && e.sendPauseVV()
          })
        },
        checkRealVideoVV: function () {
          !this.realVideoPlayed && this.isVideo && (this.realVideoPlayed = !0, this.sendPlayVV(), this.startVVMoniter())
        },
        sendReadyVV: function () {
          this.sendVV({
            t: Ie['c'],
            vfrmblk: this.$route.query.vfrmblk
          })
        },
        sendPlayVV: function () {
          this.sendVV({
            t: Ie['a'],
            pt: this.$parent.currentTime(),
            vfrmblk: this.$route.query.vfrmblk
          })
        },
        sendPauseVV: function () {
          var e = 0;
          if (this.playBackSecond > this.secondTime) e = this.playBackSecond - this.secondTime;
           else if (this.playBackSecond > this.firstTime) e = this.playBackSecond - this.firstTime;
           else {
            if (!(this.playBackSecond > 0)) return;
            e = this.playBackSecond
          }
          this.sendVV({
            t: Ie['d'],
            tm: e,
            pt: this.$parent.currentTime(),
            vfrmblk: this.$route.query.vfrmblk
          }),
          this.playBackSecond = 75
        },
        sendEndVV: function () {
          this.startPlay = !0,
          this.realVideoPlayed = !1,
          this.playBackSecond = 0,
          this.lastPlayerSeconds = 0,
          this.sendVV({
            t: Ie['b'],
            pt: this.$parent.currentTime(),
            duby: this._vvOptions.duby,
            plyrtp: this.playerType
          }),
          this.clearVVMoniter()
        },
        startVVMoniter: function () {
          var e = this;
          this.clearVVMoniter(),
          this.intervalTimer = setTimeout(function () {
            e.startVVMoniter(),
            e.$parent.paused() || e.startPlay || (e.playBackSecond++, e.playBackSecond === e.firstTime ? e.sendVV({
              t: Ie['d'],
              tm: e.playBackSecond,
              pt: e.$parent.currentTime(),
              vfrmblk: e.$route.query.vfrmblk
            })  : e.playBackSecond === e.secondTime ? e.sendVV({
              t: Ie['d'],
              tm: 60,
              pt: e.$parent.currentTime(),
              vfrmblk: e.$route.query.vfrmblk
            })  : (e.playBackSecond - 75) % e.intervalDelayTime === 0 && (e.sendVV({
              t: Ie['d'],
              tm: 120,
              pt: e.$parent.currentTime(),
              vfrmblk: e.$route.query.vfrmblk
            }), e.playBackSecond = 75))
          }, 1000)
        },
        clearVVMoniter: function () {
          clearTimeout(this.intervalTimer)
        },
        sendVV: function (e) {
          var t = this;
          if (Math.floor(e.pt) !== this.lastPlayerSeconds) {
            this.lastPlayerSeconds = Math.floor(e.pt);
            var i = this._vvOptions.cookieId || '',
            n = z() (Q() (i) + this._vvOptions.tvid + 1 * new Date + Math.round(10 * Math.random())),
            a = {
              t: e.t,
              rfr: this.getRefer(),
              tm: e.tm,
              pt: e.pt,
              duby: e.duby,
              playerType: e.plyrtp,
              videoType: this.qiyiVideo.getType(),
              tvid: this._vvOptions.tvid,
              vid: this._vvOptions.vid,
              c1: this._vvOptions.c1,
              ht: 0 === this._vvOptions.ht ? 0 : 1,
              hu: this.vipType || '-1',
              ps3: this._vvOptions.ps3 || '',
              ps4: this._vvOptions.ps4 || '',
              s3: this._vvOptions.s3 || '',
              s4: this._vvOptions.s4 || '',
              ispre: this.isPrv,
              ve: n,
              vfrmblk: this._vvOptions.vfrmblk || e.vfrmblk,
              vfrmrst: this._vvOptions.vfrmrst,
              fatherid: this._vvOptions.fatherid || '',
              ra: this.rate || ''
            },
            r = O() ({
            }, a, {
              coustomVvOptions: this.coustomVvOptions
            });
            Object(Ie['k']) (r).then(function (e) {
              return t.$emit('sendVV', e)
            })
          }
        },
        getRefer: function () {
          return this.refer = this.refer || document.referrer,
          this.href = this.href || location.href,
          this.useHref || this.href === location.href || (this.refer = this.href, this.useHref = !0),
          this.refer
        }
      },
      render: function () {
        return null
      }
    },
    Ii = Vi,
    $i = Object(f['a']) (Ii, xi, Pi, !1, null, null, null),
    Oi = $i.exports,
    ji = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.vipShow && !e.adPlaying ? i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: e.pingback,
            expression: 'pingback'
          },
          {
            name: 'pingback',
            rawName: 'v-pingback',
            value: e.pingback,
            expression: 'pingback'
          }
        ],
        staticClass: 'c-openVip'
      }, [
        e.labelShow ? i('span', [
          e._v('观看完整版，请')
        ])  : e._e(),
        i('a', {
          staticClass: 'c-link',
          attrs: {
            href: 'javascript:void(0);'
          },
          on: {
            click: e.toVip
          }
        }, [
          i('span', [
            e._v('\n      ' + e._s(e.text) + '\n    ')
          ]),
          e.vipMarket.text1 ? i('span', {
            staticClass: 'c-marketing'
          }, [
            e._v('\n      ' + e._s(e.vipMarket.text1) + '\n    ')
          ])  : e._e()
        ])
      ])  : e._e()
    },
    Li = [
    ],
    Ai = {
      name: 'QiyiBottomBuyLayer',
      data: function () {
        return {
          vipShow: !1,
          labelShow: !0,
          adPlaying: !1,
          pingback: '',
          text: '开通会员',
          vipMarket: {
          },
          tvid: 0
        }
      },
      beforeMount: function () {
        var e = this,
        t = this.$parent;
        t.$on('load', function (t) {
          e.labelShow = !0,
          e.vipShow = !1,
          e.tvid = t.tvid
        }),
        t.$on('loaded', function (i) {
          var n = i.videoInfo;
          n.prv && (t.off('playing', e.hideLabel), t.once('playing', e.hideLabel), e.shouldShowLayer = !0)
        }),
        t.$on('sourceVipType', function (t) {
          var i = t.layerType,
          n = t.isVip;
          n && e.shouldShowLayer && e.showVipLayer(i)
        }),
        t.$on('playStart', function (t) {
          var i = t.status;
          e.adPlaying = 'AD' === i
        })
      },
      methods: {
        showVipLayer: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return [Ke,
                  et,
                  at].indexOf(t) > - 1 ? (this.text = '开通会员', this.pingback = '711142_video_vip1')  : tt === t ? (this.text = '购买本片', this.pingback = '711142_video_viponce')  : it === t && (this.text = '用券观看', this.pingback = '711142_video_vipquan'),
                  e.next = 3,
                  this.vipMarketCheck();
                case 3:
                  this.vipShow = !0;
                case 4:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t(t) {
            return e.apply(this, arguments)
          }
          return t
        }(),
        vipMarketCheck: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = 'b5a0d92aa6966a99',
                  e.next = 3,
                  he(t).catch (function () {
                  });
                case 3:
                  this.vipMarket = e.sent,
                  this.vipMarket = this.vipMarket || {
                  };
                case 5:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        toVip: function () {
          this.vipMarket.redirectUrl1 ? window.location.href = ''.concat(this.vipMarket.redirectUrl1, '&aid=').concat(this.tvid)  : this.$parent.showSourceLayer()
        },
        hideLabel: function () {
          this.labelShow = !1
        }
      }
    },
    Ei = Ai,
    Bi = Object(f['a']) (Ei, ji, Li, !1, null, null, null),
    Ri = Bi.exports,
    qi = i('5bce'),
    Ni = 'play-record',
    Fi = 'https://l-rcd.iqiyi.com/apis/qiyirc/getvplay',
    Mi = 'https://l-rcd.iqiyi.com/apis/qiyirc/setrc',
    Hi = 'https://nl-rcd.iqiyi.com/apis/urc/setrc',
    Di = null;
    function Qi(e) {
      return Ui.apply(this, arguments)
    }
    function Ui() {
      return Ui = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
        var i,
        n;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              zi(t).catch (function () {
              });
            case 2:
              return i = e.sent,
              i.data && 'A00000' === i.code && (n = i.data.videoPlayTime || 0),
              e.abrupt('return', n || 0);
            case 5:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), Ui.apply(this, arguments)
    }
    function zi(e) {
      return Gi.apply(this, arguments)
    }
    function Gi() {
      return Gi = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
        var i;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              Object(p['d']) (Fi, {
                params: {
                  tvId: t,
                  agent_type: ii()
                }
              });
            case 2:
              return i = e.sent,
              e.abrupt('return', i.data);
            case 4:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), Gi.apply(this, arguments)
    }
    function Yi() {
      return Di || (Di = new qi['b']({
        name: Ni,
        maxNum: 50
      }))
    }
    function Xi(e) {
      if (!e) return 0;
      var t = en(e);
      return t ? Yi().get(t)  : 0
    }
    function Ji() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      if (e.tvid && !isNaN(e.time)) {
        var t = en(e.tvid);
        t && (e.time ? Yi().set(t, e.time)  : Yi().delete (t))
      }
    }
    function Wi(e) {
      return se() ? Zi(e)  : Ki(e)
    }
    function Zi() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      return Object(p['d']) (Mi, {
        params: {
          tvId: e.tvid,
          videoPlayTime: e.time,
          terminalId: '31',
          agent_type: ii()
        }
      })
    }
    function Ki() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      };
      return Object(p['d']) (Hi, {
        params: {
          tvId: e.tvid,
          videoPlayTime: e.time,
          terminalId: '31',
          ckuid: le(),
          agent_type: ii()
        }
      })
    }
    function en(e) {
      return ''.concat(le(), '-').concat(e)
    }
    var tn,
    nn,
    an = i('a658'),
    rn = {
      name: 'QiyiRecord',
      props: {
        skipHeadAndEnd: {
          type: Boolean,
        default:
          !1
        },
        enableGetRecord: {
          type: Boolean,
        default:
          !0
        }
      },
      data: function () {
        return {
          progress: 0,
          tvid: '',
          noRecord: !1,
          beginTime: 0,
          endTime: 1 / 0,
          isEnd: !1
        }
      },
      beforeMount: function () {
        var e = this,
        t = this.$parent;
        t.$on('load', function (i) {
          e.isEnd = !1,
          t.off('pause', e.pauseHandle),
          t.off('playEnd', e.endedHandle),
          e.stopRecord(),
          e.progress = i.progress,
          e.tvid = i.tvid,
          e.noRecord = i.noRecord
        }),
        t.$on('playStart', function (i) {
          var n = i.status,
          a = i.adTime;
          if ('VIDEO' === n) {
            if (t.on('pause', e.pauseHandle), t.$on('playEnd', e.endedHandle), !e.enableGetRecord) return;
            e.useRecord(a).then(function () {
              e.startRecord()
            })
          }
        }),
        this.skipHeadAndEnd && (t.$on('loaded', function (t) {
          var i = t.videoInfo,
          n = t.adInfo;
          if (i && i.data && i.data.p) {
            var a = n.type === an['a'] && n.data && n.data.duration || 0;
            e.beginTime = i.data.p.bt > 0 ? i.data.p.bt + a : 0,
            e.endTime = i.data.p.et > 0 ? i.data.p.et + a : 1 / 0
          }
        }), t.$on('created', function (i) {
          t.on('timeupdate', function () {
            var i = t.currentTime();
            i >= e.endTime && !e.isEnd && (e.isEnd = !0, e.$emit('ended', 'VIDEO'))
          })
        }))
      },
      methods: {
        useRecord: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            n,
            a,
            r;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (i = this.$parent, !this.noRecord || !i.isVideo) {
                    e.next = 3;
                    break
                  }
                  return e.abrupt('return', this.$emit('videoRecord', {
                    time: 0
                  }));
                case 3:
                  if (n = !0, !this.progress) {
                    e.next = 9;
                    break
                  }
                  a = this.progress,
                  n = !1,
                  e.next = 15;
                  break;
                case 9:
                  if (a = Xi(this.tvid), !se()) {
                    e.next = 15;
                    break
                  }
                  return e.next = 13,
                  Qi(this.tvid);
                case 13:
                  a = e.sent,
                  t && (a += t);
                case 15:
                  r = !!this.skipHeadAndEnd && this.checkSkipHead({
                    time: a,
                    isFromRecord: n
                  }),
                  a > 0 && !r && this.$parent.seek(a);
                case 17:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t(t) {
            return e.apply(this, arguments)
          }
          return t
        }(),
        checkSkipHead: function (e) {
          var t = e.time,
          i = e.isFromRecord;
          return !!this.beginTime && (!(t && !(t > 0 && t < this.beginTime && i)) && (this.$parent.seek(this.beginTime), !0))
        },
        startRecord: function () {
          this.startRemoteRecord(),
          se() || this.startLocalRecord()
        },
        startRemoteRecord: function () {
          var e = this;
          this.remoteRecordTimer = setInterval(function () {
            e.addRemoteRecord()
          }, 120000)
        },
        startLocalRecord: function () {
          var e = this;
          this.localRecordTimer = setInterval(function () {
            e.addLocalRecord()
          }, 2000)
        },
        stopRecord: function () {
          clearInterval(this.remoteRecordTimer),
          clearInterval(this.localRecordTimer)
        },
        addRecord: function (e) {
          this.addLocalRecord(e),
          this.addRemoteRecord(e)
        },
        addLocalRecord: function (e) {
          Ji({
            tvid: this.tvid,
            time: this.getCurrentTime(e)
          })
        },
        addRemoteRecord: function (e) {
          Wi({
            tvid: this.tvid,
            time: this.getCurrentTime(e)
          })
        },
        pauseHandle: function () {
          !this.isEnd && !this.$parent.ended() && this.getCurrentTime() && this.addRecord()
        },
        endedHandle: function () {
          this.isEnd = !0,
          this.addRecord(0)
        },
        getCurrentTime: function (e) {
          return void 0 !== e ? e : Q() (this.$parent.currentTime(), 10)
        }
      },
      render: function () {
        return null
      }
    },
    on = rn,
    sn = Object(f['a']) (on, tn, nn, !1, null, null, null),
    cn = sn.exports,
    dn = {
      methods: {
        off: function (e, t) {
          this.video.off(e, t)
        },
        on: function (e, t) {
          this.video.on(e, t)
        },
        once: function (e, t) {
          this.video.once(e, t)
        },
        showVideo: function () {
          this.video.show()
        },
        hideVideo: function () {
          this.video.hide()
        },
        buffered: function () {
          return this.video.buffered()
        },
        duration: function () {
          return this.video.duration()
        },
        paused: function () {
          return this.video.paused()
        },
        pause: function () {
          this.video.pause()
        },
        muted: function (e) {
          return this.video.muted(e)
        },
        fullscreen: function () {
          this.video.requestFullscreen()
        },
        requestFullscreen: function () {
          this.video.requestFullscreen()
        },
        exitFullscreen: function () {
          this.video.exitFullscreen()
        },
        currentTime: function (e) {
          return this.video ? this.video.currentTime(e)  : 0
        },
        src: function (e) {
          return this.video.src(e)
        },
        lockSeek: function () {
          this.video.lockSeek()
        },
        unLockSeek: function () {
          this.video.unLockSeek()
        },
        reset: function () {
          return this.video.reset()
        },
        ended: function () {
          return this.video.ended()
        }
      }
    };
    i('f3e2');
    function un() {
      var e = {
      };
      return 'undefined' !== typeof document.hidden ? (e.hidden = 'hidden', e.event = 'visibilitychange', e.state = 'visibilityState')  : 'undefined' !== typeof document.webkitHidden ? (e.hidden = 'webkitHidden', e.event = 'webkitvisibilitychange', e.state = 'webkitVisibilityState')  : 'undefined' !== typeof document.mozHidden ? (e.hidden = 'mozHidden', e.event = 'mozvisibilitychange', e.state = 'mozVisibilityState')  : 'undefined' !== typeof document.msHidden && (e.hidden = 'msHidden', e.event = 'msvisibilitychange', e.state = 'msVisibilityState'),
      e
    }
    var ln = [
    ];
    function pn(e) {
      ln.push(e)
    }
    function hn(e, t) {
      ln.forEach(function (i) {
        e.active = t,
        i(e)
      })
    }
    var vn = {
      mounted: function () {
        this.bindGlobalEvent()
      },
      methods: {
        bindGlobalEvent: function () {
          this.loseFocusPause && this.autoPauseLoseFocus()
        },
        autoPauseLoseFocus: function () {
          var e = this;
          if ('undefined' !== typeof window) {
            var t = un();
            window.addEventListener('focus', function (e) {
              return hn(e, !0)
            }),
            window.addEventListener('blur', function (e) {
              return hn(e, !1)
            }),
            window.addEventListener('beforeunload', function (e) {
              return hn(e, !1)
            }),
            window.document.addEventListener(t.event, function (e) {
              return hn(e, document[t.hidden])
            }),
            pn(function (t) {
              t.active ? e.play()  : e.pause()
            })
          }
        }
      }
    },
    fn = [
      'created',
      'load',
      'loaded',
      'binded',
      'playEnd',
      'fullscreenClick'
    ],
    yn = {
      name: 'QiyiPlayer',
      components: {
        QiyiVV: Oi,
        QiyiLib: m,
        QiyiVideoContinue: S,
        QiyiPosterLayer: I,
        QiyiSourceLayer: St,
        QiyiPlayButton: It,
        QiyiDashboard: qt,
        QiyiAdDashboard: Qt,
        QiyiLoading: Jt,
        QiyiLimit: vi,
        QiyiPlayLimit: Ti,
        QiyiBottomBuyLayer: Ri,
        QiyiRecord: cn
      },
      mixins: [
        dn,
        vn
      ],
      inheritAttrs: !1,
      props: {
        vipType: {
          type: String,
        default:
          ''
        },
        videoName: {
          type: String,
        default:
          ''
        },
        titleShow: {
          type: Boolean,
        default:
          !1
        },
        controlEle: {
          type: String,
        default:
          ''
        },
        dashboard: {
          type: Boolean,
        default:
          !0
        },
        limit: {
          type: Boolean,
        default:
          !1
        },
        ad: {
          type: Boolean,
        default:
          !0
        },
        playButton: {
          type: Boolean,
        default:
          !0
        },
        record: {
          type: Boolean,
        default:
          !1
        },
        skipHeadAndEnd: {
          type: Boolean,
        default:
          !1
        },
        source: {
          type: Boolean,
        default:
          !0
        },
        vv: {
          type: Boolean,
        default:
          !0
        },
        playerClass: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        playerStyle: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        quailtyChange: {
          type: String,
        default:
          ''
        },
        isShowVipLayer: {
          type: Boolean,
        default:
          !0
        },
        forceShowLayer: {
          type: Boolean,
        default:
          !1
        },
        loadingCallapp: {
          type: Boolean,
        default:
          !0
        },
        pingbackParams: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        fatherid: {
          type: Number,
        default:
          0
        },
        playerType: {
          type: String,
        default:
          '0'
        },
        rate: {
          type: Number,
        default:
          void 0
        },
        loseFocusPause: {
          type: Boolean,
        default:
          !1
        },
        limitCallAppCustom: {
          type: Boolean,
        default:
          !1
        },
        coustomVvOptions: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      data: function () {
        return {
          qiyiVideo: null,
          video: null,
          isVideo: !0,
          isPlayLimited: !1,
          dashboardShow: !1,
          noSourceLayer: !0,
          vvOptions: {
            tvid: '',
            vid: '',
            c1: '',
            ht: '',
            prv: '',
            duration: '',
            vfrmblk: '',
            vfrmrst: '',
            fatherid: '',
            ps3: '',
            ps4: '',
            s3: '',
            s4: '',
            cookieId: ''
          },
          videoInfo: {
          },
          isAndroid: !1,
          isBaidu: !1,
          isPlay: !1,
          btnPlay: !1
        }
      },
      watch: {
        quailtyChange: function (e) {
          this.$emit('quailtyChange', e)
        },
        pingbackParams: function (e) {
          Object(Ie['f']) (e)
        }
      },
      destroyed: function () {
        this.video && this.video.destory()
      },
      methods: {
        initQiyiVideo: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  this.qiyiVideo = new d['a']({
                    player: this.$refs.video,
                    controlEle: this.controlEle ? document.getElementById(this.controlEle)  : ''
                  }),
                  this.video = this.qiyiVideo.getVideo(),
                  this.$emit('created', this.qiyiVideo),
                  this.bindEvent(),
                  t = navigator.userAgent.toLowerCase(),
                  this.isAndroid = t.indexOf('android') > - 1 || t.indexOf('adr') > - 1,
                  this.isBaidu = t.indexOf('baidu') > - 1,
                  this.isAndroid && this.isBaidu && this.video.on('play', function () {
                    try {
                      i.$refs.video.style.top = '0',
                      i.btnPlay ? i.btnPlay = !1 : i.isPlay = !0
                    } catch (e) {
                      console.log(e)
                    }
                  });
                case 8:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        bindEvent: function () {
          for (var e in this.$listeners) - 1 === fn.indexOf(e) && this.video.on(e, this.$listeners[e]);
          this.$emit('binded')
        },
        loadSource: function () {
          var e = Object(c['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            n;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return this.$emit('load', t),
                  e.next = 3,
                  this.load(t);
                case 3:
                  i = e.sent,
                  i && i.videoInfo && i.videoInfo.error && (i.videoInfo.error.targetName = 'auth', this.$emit('error', i.videoInfo.error)),
                  n = this.getDuby(i),
                  this.updateVVOptions(Object(s['a']) ({
                  }, t, {
                    prv: i.videoInfo.prv || i.videoInfo.prvType,
                    duration: i.videoInfo.duration,
                    duby: n
                  })),
                  t.albumId && (i.videoInfo.albumId = t.albumId || i.videoInfo.aid),
                  this.updateVideoInfo(i.videoInfo),
                  this.$emit('loaded', i);
                case 10:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t(t) {
            return e.apply(this, arguments)
          }
          return t
        }(),
        getDuby: function (e) {
          var t = e.videoInfo.data.ctl,
          i = t && t.bid,
          n = e.videoInfo.data.program.video || [
          ],
          a = n.find(function (e) {
            return i === e.bid
          });
          return a && a.isdol
        },
        load: function (e) {
          return e.player = this.video.player,
          e.uid = e.uid || de(),
          e.anonymousUid = e.anonymousUid || le(),
          e.noAd = e.noAd || !this.ad,
          e.ut = e.ut || this.vipType,
          e.authcookie = ce(),
          e.skipAdHandler = this.$refs.videoContinue.skipAd,
          this.qiyiVideo.loadSource(e)
        },
        play: function () {
          if (this.isAndroid && (this.$refs.video.style.top = '0', this.isBaidu && (this.btnPlay = !0)), this.src()) return this.video.play();
          console.log('src is not null'),
          this.played = !0
        },
        resetVideo: function () {
          this.isAndroid ? this.isBaidu ? this.isBaidu && !this.isPlay ? (this.$refs.video.style.top = '-1000px', this.$refs.video.currentTime = 0.1, this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0)  : this.isPlay = !1 : (this.$refs.video.style.top = '-1000px', this.$refs.video.currentTime = 0.1, this.$refs.loading.loadingShow = !1, this.$refs.qiyiPosterLayer.posterShow = !0)  : (this.$refs.video.currentTime = 0, this.$refs.qiyiPosterLayer.posterShow = !0)
        },
        updateVVOptions: function (e) {
          this.vvOptions = {
            tvid: e.tvid,
            vid: e.vid,
            c1: e.channelId || e.cid,
            ht: e.purchaseType,
            prv: e.prv,
            duration: e.duration,
            vfrmblk: e.vfrmblk,
            vfrmrst: e.vfrmrst,
            tmplt: e.tmplt,
            fatherid: this.fatherid,
            duby: e.duby,
            ps3: e.ps3,
            ps4: e.ps4,
            s3: e.s3,
            s4: e.s4,
            cookieId: e.cookieId
          }
        },
        updateVideoInfo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          };
          this.videoInfo = e
        },
        showSourceLayer: function () {
          this.$emit('showSourceLayer')
        },
        togglePlay: function () {
          this.$emit('playBtnClick'),
          this.video && (this.paused() ? this.play()  : this.pause())
        },
        toggleMuted: function () {
          this.muted(!this.muted())
        },
        seek: function (e) {
          this.video.seek(e),
          this.play()
        },
        onVideoStatusChange: function (e) {
          this.isVideo = 'VIDEO' === e,
          this.$emit('videoStatusChange', this.isVideo),
          this.isVideo ? this.unLockSeek()  : this.lockSeek(),
          this.played && this.play()
        },
        preplay: function () {
          this.qiyiVideo.preplay(),
          this.$refs.loading.loadingTipShow = !0
        },
        clear: function () {
          !this.video.ended() && this.$refs.vv.sendPauseVV(),
          this.$refs.record.pauseHandle(),
          this.$emit('clear'),
          this.src(''),
          this.qiyiVideo.adStop()
        },
        hide: function () {
          this.$el.style.display = 'none'
        },
        show: function () {
          this.$el.style.display = 'block'
        },
        _handelBeforeEnded: function (e) {
          this.$refs.vv.sendEndVV()
        },
        _handleEnded: function (e) {
          this._handelBeforeEnded(),
          this.pause(),
          this.reset(),
          this.$emit('playEnd', {
            status: e,
            nextVideos: [
            ],
            end: !0,
            prv: this.videoInfo.prv
          })
        },
        _handlePlay: function (e) {
          var t = e.videoStatus,
          i = e.adTime,
          n = void 0 === i ? 0 : i;
          this.$emit('playStart', {
            status: t,
            nextVideos: [
            ],
            adTime: n
          })
        },
        _toggleFullscreen: function () {
          var e = this.video.isFullscreen();
          e ? this.exitFullscreen()  : (this.play(), this.fullscreen())
        },
        _handleFullscreen: function (e) {
          e.isFullscreen = this.video.isFullscreen(),
          this.$emit('fullscreenClick', e),
          e.defaultPrevented || this._toggleFullscreen()
        },
        _sourceTypeHandle: function (e) {
          0 !== e.type && (this.video.display = 'none'),
          this.$emit('sourceTypeChange', e)
        },
        _sourceLayerFooHandle: function (e) {
          var t = e.code,
          i = e.data;
          this.$emit('sourceLayerFoo', {
            code: t,
            data: i
          })
        },
        _setDashboardShow: function (e) {
          this.dashboardShow = e
        },
        _sourceVipType: function (e) {
          this.$emit('sourceVipType', e)
        }
      }
    },
    mn = yn,
    bn = Object(f['a']) (mn, r, o, !1, null, null, null);
    t['a'] = bn.exports
  },
  f992: function (e, t, i) {
    'use strict';
    (function (e) {
      for (var n, a = i('7618'), r = (i('ac6a'), i('f3e2'), {
      }), o = [
        ['requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror'],
        [
          'webkitRequestFullscreen',
          'webkitExitFullscreen',
          'webkitFullscreenElement',
          'webkitFullscreenEnabled',
          'webkitfullscreenchange',
          'webkitfullscreenerror'
        ],
        [
          'webkitRequestFullScreen',
          'webkitCancelFullScreen',
          'webkitCurrentFullScreenElement',
          'webkitCancelFullScreen',
          'webkitfullscreenchange',
          'webkitfullscreenerror'
        ],
        [
          'mozRequestFullScreen',
          'mozCancelFullScreen',
          'mozFullScreenElement',
          'mozFullScreenEnabled',
          'mozfullscreenchange',
          'mozfullscreenerror'
        ],
        [
          'msRequestFullscreen',
          'msExitFullscreen',
          'msFullscreenElement',
          'msFullscreenEnabled',
          'MSFullscreenChange',
          'MSFullscreenError'
        ]
      ], s = o[0], c = e.document || {
      }, d = 0; d < o.length; d++) if (o[d][1] in c) {
        n = o[d];
        break
      }
      if (n) for (var u = 0; u < n.length; u++) r[s[u]] = n[u];
      function l(e, t) {
        var i;
        return ['webkit',
        'moz',
        'ms',
        'o',
        ''].forEach(function (n) {
          if (!i) {
            '' === n && (t = t.slice(0, 1).toLowerCase() + t.slice(1));
            var r = Object(a['a']) (e[n + t]);
            r + '' !== 'undefined' && (i = 'function' === r ? e[n + t]() || !0 : e[n + t])
          }
        }),
        i
      }
      r.isFullscreen = function () {
        return c.IsFullScreen || l(c, 'FullScreen') || l(c, 'IsFullScreen')
      },
      t['a'] = r
    }).call(this, i('483b'))
  }
}
]);
