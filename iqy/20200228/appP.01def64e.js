(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['appP'],
{
  '0a90': function (e, t, n) {
    var a = n('63b6'),
    i = n('10ff');
    a(a.G + a.F * (parseFloat != i), {
      parseFloat: i
    })
  },
  '10ff': function (e, t, n) {
    var a = n('e53d').parseFloat,
    i = n('a1ce').trim;
    e.exports = 1 / a(n('e692') + '-0') !== - 1 / 0 ? function (e) {
      var t = i(String(e), 3),
      n = a(t);
      return 0 === n && '-' == t.charAt(0) ? - 0 : n
    }
     : a
  },
  '23d5': function (e, t, n) {
    'use strict';
    n.r(t);
    var a,
    i,
    o,
    r = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div', [
        e.valid ? [
          n('PlayWechatShare'),
          e.template.knowledge ? n('PlayKnowLedgeTopButton')  : n('PlayTopButton'),
          e.template.bodan ? n('PlayBodan')  : e.template.album || e.template.source ? n('PlayLong')  : e.template.movie ? n('PlayMovie')  : e.template.short ? n('PlayShort')  : e.template.vertical ? n('VideoClip')  : e.template.wechat ? n('PlayWechat')  : e.template.knowledge ? n('PlayKnowledge')  : e._e(),
          e.template.vertical ? e._e()  : n('PlayAutoCallapp')
        ] : n('Page404'),
        n('PlayTitle')
      ], 2)
    },
    l = [
    ],
    s = n('db0c'),
    c = n.n(s),
    u = (n('2caf'), n('795b')),
    p = n.n(u),
    d = (n('96cf'), n('3b8d')),
    f = n('75fc'),
    h = n('cebc'),
    m = n('2f62'),
    b = n('fe3a'),
    v = n('17b0'),
    y = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('portal', {
        attrs: {
          to: 'playTopButton'
        }
      }, [
        n('PlayButtonDown', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '804231_navxiazai',
              expression: '\'804231_navxiazai\''
            }
          ],
          staticClass: 'header-app iqiyi-h5-empty',
          staticStyle: {
            display: 'block !important'
          },
          attrs: {
            subtype: '144',
            'down-app-pos': 'home_banner_down',
            rseat: '603091_2'
          }
        }, [
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'mcltdown_2hmbnr',
                expression: '\'mcltdown_2hmbnr\''
              }
            ],
            class : e.btnImgUrl ? 'link-app-img' : 'link-app',
            style: 'background-image: url(' + e.btnImgUrl + ')',
            attrs: {
              href: 'javascript:void(0)'
            }
          }, [
            e._v('\n      ' + e._s(e.btnImgUrl ? '' : '下载APP') + '\n    ')
          ])
        ])
      ], 1)
    },
    g = [
    ],
    I = n('cf20'),
    w = n('38ff'),
    P = {
      name: 'PlayTopButton',
      components: {
        PlayButtonDown: I['a'],
        ButtonDown: w['a']
      },
      data: function () {
        return {
          btnImgUrl: '//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png'
        }
      }
    },
    k = P,
    O = n('2877'),
    _ = Object(O['a']) (k, y, g, !1, null, null, null),
    j = _.exports,
    x = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('portal', {
        attrs: {
          to: 'playTopButton'
        }
      }, [
        n('PlayKnowledgeButtonDown', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: 'top_bar',
              expression: '\'top_bar\''
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: 'goApp',
              expression: '\'goApp\''
            }
          ],
          staticClass: 'header-app iqiyi-h5-empty',
          staticStyle: {
            display: 'block !important'
          },
          attrs: {
            'down-app-pos': 'top_bar',
            rseat: '603091_2'
          }
        }, [
          n('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'mcltdown_2hmbnr',
                expression: '\'mcltdown_2hmbnr\''
              }
            ],
            class : e.btnImgUrl ? 'link-app-img' : 'link-app',
            style: 'background-image: url(' + e.btnImgUrl + ')',
            attrs: {
              href: 'javascript:void(0)'
            }
          }, [
            e._v('\n      ' + e._s(e.btnImgUrl ? '' : '下载APP') + '\n    ')
          ])
        ])
      ], 1)
    },
    A = [
    ],
    T = n('8d9b'),
    C = {
      name: 'PlayKnowledgeTopButton',
      components: {
        PlayKnowledgeButtonDown: T['a'],
        ButtonDown: w['a']
      },
      data: function () {
        return {
          btnImgUrl: '//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png'
        }
      }
    },
    q = C,
    U = Object(O['a']) (q, x, A, !1, null, null, null),
    B = U.exports,
    D = (n('0cd8'), n('57e7'), n('59ad')),
    V = n.n(D),
    S = n('e814'),
    $ = n.n(S),
    E = (n('28a5'), n('759f'), n('d92a'), n('bd86')),
    M = n('2c06'),
    L = n('b2e7'),
    R = n('8296'),
    K = {
      MicroMessenger: 'weixin',
      UC: 'uc'
    },
    z = {
      playpage: 'play',
      frontpage: 'home'
    },
    F = [
      'a',
      '3',
      '9',
      '5',
      'f',
      '2',
      '6',
      '0',
      'c',
      'b',
      '1',
      '4',
      'e',
      '7',
      '8',
      'd'
    ],
    N = 'LONG',
    W = 'SHORT',
    H = (a = {
    }, Object(E['a']) (a, N, 'hotalbum'), Object(E['a']) (a, W, 'shortvideo'), a),
    G = {
      name: 'PlayAutoCallapp',
      data: function () {
        return {
          subtype: '',
          ftype: '',
          downAppAndroidUrl: ''
        }
      },
      computed: Object(h['a']) ({
      }, Object(m['e']) ('play', [
        'subTemplate',
        'template',
        'videoInfo',
        'callappConfigs',
        'diversionInfo',
        'loadInfo',
        'page'
      ]), {
        extralOptions: function () {
          return 'play' === this.page ? {
            tvid: this.videoInfo.tvid,
            cid: this.videoInfo.cid,
            aid: this.videoInfo.aid,
            vid: this.videoInfo.vid,
            playModel: this.videoInfo.playModel,
            templateType: this.subTemplate,
            video: this.videoInfo
          }
           : {
          }
        },
        needDiversion: function () {
          return !!this.diversionInfo && this.diversionInfo.needDiversion
        },
        isHot: function () {
          return !!this.diversionInfo && this.diversionInfo.hot
        },
        tmpl: function () {
          return this.template.album || this.template.source ? N : this.template.short ? W : ''
        }
      }),
      watch: {
        'loadInfo.qipuId': function (e, t) {
          this.loadInfo.qipuId && this.check()
        }
      },
      mounted: function () {
        var e = this;
        setTimeout(function () {
          e.check()
        })
      },
      methods: {
        check: function () {
          var e = Object(d['a']) (regeneratorRuntime.mark(function e() {
            var t,
            n,
            a,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.isHot) {
                    e.next = 13;
                    break
                  }
                  if (this.tmpl && H[this.tmpl]) {
                    e.next = 3;
                    break
                  }
                  return e.abrupt('return');
                case 3:
                  return t = H[this.tmpl],
                  e.next = 6,
                  this.$GlobalSwitcher.getFilters(t, 'play');
                case 6:
                  if (n = e.sent, n) {
                    e.next = 9;
                    break
                  }
                  return e.abrupt('return');
                case 9:
                  a = this.$GlobalSwitcher.getParams(t, 'play'),
                  this.callapp({
                    qipuId: this.videoInfo.tvid || this.videoInfo.qipuId,
                    subType: a ? a.subtype : '',
                    vfm: '',
                    cfrm: '',
                    platform: '0',
                    fromPage: 'playpage',
                    userAgent: '',
                    proportion: '1'
                  }),
                  e.next = 15;
                  break;
                case 13:
                  i = Object(R['O']) (this.getParams.bind(this), this.getFilters.bind(this), this.detect.bind(this), this.callapp.bind(this)),
                  i();
                case 15:
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
        getParams: function () {
          return {
            vfm: Object(M['E']) (),
            pageCfrm: Object(M['v']) (),
            anonymousUid: Object(L['w']) (),
            qipuId: this.videoInfo.qipuId || this.videoInfo.tvid,
            sidOrAid: this.videoInfo.album_id || this.videoInfo.aid || this.videoInfo.sid
          }
        },
        callapp: function (e) {
          var t = this;
          e && (this.toPage = z[e.fromPage] || 'home', this.downAppAndroidUrl = e.downloadUrl, this.subtype = e.subType, this.ftype = e.ftype || '', this.$nextTick(function () {
            t.$refs.ButtonDown.callApp({
              target: 'a'
            }, {
              showCopyCode: !1
            })
          }))
        },
        detect: function (e) {
          var t = this,
          n = - 1,
          a = this.callappConfigs || [
          ];
          return a.some(function (a, i) {
            return e.some(function (e) {
              var o = e.call(t, a);
              return n = o ? i : - 1,
              o
            })
          }),
          a[n]
        },
        getFilters: function (e) {
          var t = e.pageCfrm,
          n = e.vfm,
          a = (e.sidOrAid, e.qipuId, e.anonymousUid),
          i = function (e) {
            var t = e.fromPage;
            return !t || z[t] === this.page
          },
          o = function (e) {
            var t = e.userAgent;
            if (!t) return !0;
            var n = t.split(',');
            return n.some(function (e) {
              return R['p'][K[e] || e]
            })
          },
          r = function (e) {
            return !e.vfm || n === e.vfm
          },
          l = function (e) {
            var n = e.cfrm;
            return !n || n === t
          },
          s = function (e) {
            var t = e.platform;
            return !t || (t = $() (t), 1 !== t && 2 !== t || (1 !== t || !R['L'].ios) && (2 !== t || !R['L'].android))
          },
          c = function (e) {
            var t = e.proportion;
            if (!t) return !0;
            var n = F.slice(0, Math.floor(V() (t) * F.length));
            return n.indexOf(a.charAt(a.length - 1)) > - 1
          },
          u = function (e) {
            return !(!e.fromPage && !e.userAgent && !e.vfm && !e.cfrm && !e.platform && !e.proportion && !e.qipuId)
          },
          p = function (e) {
            var t = this;
            if (!e) return !1;
            var n = [
              i,
              o,
              r,
              l,
              s,
              c,
              u
            ];
            return n.reduce(function (n, a) {
              return n && a.call(t, e)
            }, !0)
          };
          return [p]
        }
      },
      render: function (e) {
        return e(w['a'], {
          ref: 'ButtonDown',
          props: {
            toPage: this.toPage,
            downAppAndroidUrl: this.downAppAndroidUrl,
            extralOptions: this.extralOptions,
            subtype: this.subtype,
            ftype: this.ftype,
            tag: 'a',
            isDownApp: !1,
            showCopyCode: !1
          }
        })
      }
    },
    J = G,
    Y = Object(O['a']) (J, i, o, !1, null, null, null),
    Q = Y.exports,
    X = n('ab22'),
    Z = n('3e9e'),
    ee = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div')
    },
    te = [
    ],
    ne = {
      name: 'PlayTitle',
      computed: Object(m['e']) ('play', [
        'subTemplate',
        'videoInfo',
        'albumInfo'
      ]),
      watch: {
        'videoInfo.qipuId': function (e, t) {
          this.updateTitle()
        }
      },
      mounted: function () {
        'undefined' === document.title && this.updateTitle()
      },
      methods: {
        updateTitle: function () {
          var e = Object(X['o']) (this.subTemplate, this.videoInfo, this.albumInfo);
          e && (document.title = e)
        }
      }
    },
    ae = ne,
    ie = Object(O['a']) (ae, ee, te, !1, null, null, null),
    oe = ie.exports,
    re = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('WechatShare', {
        attrs: {
          options: e.shareOptions
        }
      })
    },
    le = [
    ],
    se = n('474a'),
    ce = {
      name: 'PlayWechatShare',
      components: {
        WechatShare: se['a']
      },
      computed: Object(h['a']) ({
      }, Object(m['e']) ('play', [
        'videoInfo',
        'verticalVideoInfo'
      ]), {
        shareOptions: function () {
          var e = 'VIDEO_PLAY_MODE_VERTICAL' === this.videoInfo.playModel;
          return e ? {
            title: this.verticalVideoInfo.title,
            desc: this.videoInfo.desc,
            imgUrl: this.verticalVideoInfo.coverImage
          }
           : {
            title: this.videoInfo.videoName,
            desc: this.videoInfo.desc,
            imgUrl: this.videoInfo.imageUrl
          }
        }
      })
    },
    ue = ce,
    pe = Object(O['a']) (ue, re, le, !1, null, null, null),
    de = pe.exports,
    fe = n('b924'),
    he = 'play',
    me = {
      name: 'Play',
      components: {
        PlayBodan: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPb')]).then(n.bind(null, '7c09'))
        },
        PlayLong: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPl')]).then(n.bind(null, '8412'))
        },
        PlayShort: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPs')]).then(n.bind(null, '66f2'))
        },
        PlayMovie: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPm')]).then(n.bind(null, '0c91'))
        },
        PlayWechat: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPw')]).then(n.bind(null, 'f890'))
        },
        PlayKnowledge: function () {
          return Promise.all([n.e('chunk-play'),
          n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appPK')]).then(n.bind(null, '4f635'))
        },
        VideoClip: function () {
          return Promise.all([n.e('chunk-video'),
          n.e('chunk-common'),
          n.e('appVc')]).then(n.bind(null, '5a47'))
        },
        Page404: function () {
          return Promise.all([n.e('chunk-common'),
          n.e('app404')]).then(n.bind(null, '8689'))
        },
        PlayTopButton: j,
        PlayKnowLedgeTopButton: B,
        PlayTitle: oe,
        PlayWechatShare: de,
        PlayAutoCallapp: Q
      },
      mixins: [
        b['a']
      ],
      style: [
        'base',
        'play',
        'comment'
      ],
      title: function () {
        return this.seoInfo.title || '爱奇艺'
      },
      head: function () {
        var e = Object(h['a']) ({
        }, this.videoInfo, this.albumInfo, this.seoInfo);
        return {
          meta: Object(fe['a']) (this.seoInfo).concat(Object(fe['g']) (this.seoInfo)),
          link: [
            Object(fe['c']) (this.videoInfo.videoUrl)
          ].concat(Object(f['a']) (Object(X['m']) ())),
          script: [
            Object(fe['d']) (this.seoInfo),
            Object(fe['e']) (e, this.subTemplate.album || this.subTemplate.source ? 2 : 0),
            Object(fe['f']) (e)
          ]
        }
      },
      data: function () {
        return {
          name: he,
          isHide: !1,
          callappCode: 'player'
        }
      },
      computed: Object(h['a']) ({
      }, Object(m['e']) (he, [
        'subTemplate',
        'template',
        'videoInfo',
        'albumInfo',
        'verticalVideoInfo',
        'seoInfo',
        'valid'
      ]), Object(m['c']) (he, [
        'defaultCard'
      ])),
      watch: {
        $route: function (e, t) {
          e.params.id !== t.params.id && this.update({
            pre: e.params.pre,
            id: e.params.id,
            query: e.query
          })
        }
      },
      asyncData: function () {
        var e = Object(d['a']) (regeneratorRuntime.mark(function e(t) {
          var n,
          a;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                n = t.store,
                t.route,
                a = t.isUpdate,
                t.res,
                t.req,
                !a && n.registerModule(he, v['a'], {
                  preserveState: n.state[he]
                }),
                e.next = 5;
                break;
              case 5:
                return e.abrupt('return', p.a.resolve());
              case 6:
              case 'end':
                return e.stop()
            }
          },
          e)
        })); function t(t) {
          return e.apply(this, arguments)
        }
        return t
      }(),
      mounted: function () {
        return this.subTemplate.movie || this.template.bodan || Z['a'].setEnableNextCard(!1),
        c() (this.template).every(function (e) {
          return !e
        }) ? this.update({
          pre: this.$route.params.pre,
          id: this.$route.params.id,
          query: this.$route.query,
          redirect: !0
        })  : this.addVideo()
      },
      destroyed: function () {
        Z['a'].clear(),
        this.$store.unregisterModule(he)
      },
      methods: Object(h['a']) ({
      }, Object(m['b']) (he, [
        'getPlay'
      ]), {
        update: function () {
          var e = Object(d['a']) (regeneratorRuntime.mark(function e(t) {
            var n,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return n = Z['a'].getCurVideo() || {
                  },
                  a = void 0 !== t.redirect ? t.redirect : n.redirect,
                  a && Z['a'].clear(),
                  e.next = 5,
                  this.getPlay(Object(h['a']) ({
                  }, t, {
                    redirect: a,
                    url: window.location.href,
                    referrer: document.referrer || ''
                  }));
                case 5:
                  a && this.addVideo(),
                  this.isHide = !0;
                case 7:
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
        addVideo: function () {
          var e = this.defaultCard;
          if ('first' === e || !(this.template.knowledge || this.template.album || this.template.source)) {
            var t = {
              card: e,
              action: 'main' === e ? 'add' : 'update',
              redirect: !0,
              qipuId: this.template.vertical ? this.verticalVideoInfo.qipuId : this.videoInfo.qipuId
            };
            Z['a'].addVideo(t),
            Z['a'].setCurVideo(t)
          }
        },
        getCallappOptions: function () {
          var e = 'VIDEO_PLAY_MODE_VERTICAL' === this.videoInfo.playModel;
          return {
            vertical: e,
            extralOptions: Object(X['i']) ({
              videoInfo: this.videoInfo,
              verticalVideoInfo: this.verticalVideoInfo,
              vertical: e
            })
          }
        }
      })
    },
    be = me,
    ve = Object(O['a']) (be, r, l, !1, null, null, null);
    t['default'] = ve.exports
  },
  '2caf': function (e, t, n) {
    var a = n('5ca1');
    a(a.S, 'Array', {
      isArray: n('1169')
    })
  },
  '59ad': function (e, t, n) {
    e.exports = n('7be7')
  },
  '7be7': function (e, t, n) {
    n('0a90'),
    e.exports = n('584a').parseFloat
  },
  '8d9b': function (e, t, n) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('ButtonDown', e._b({
        attrs: {
          'schema-url': e.schemaUrl,
          'show-copy-code': !1,
          'to-page': 'custom',
          href: 'javascript:void(0)',
          tag: 'a'
        }
      }, 'ButtonDown', e.$attrs, !1), [
        e._t('default', [
          e._v('\n    ' + e._s(e.text || '打开爱奇艺，提升3倍流畅度！') + '\n  ')
        ])
      ], 2)
    },
    i = [
    ],
    o = n('f499'),
    r = n.n(o),
    l = n('cebc'),
    s = n('2f62'),
    c = n('38ff'),
    u = {
      name: 'PlayKnowledgeButtonDown',
      components: {
        ButtonDown: c['a']
      },
      props: {
        text: {
          type: String,
        default:
          ''
        },
        downAppPos: {
          type: String,
        default:
          ''
        }
      },
      computed: Object(l['a']) ({
      }, Object(s['e']) ('play', [
        'videoInfo'
      ]), {
        classId: function () {
          return ''
        },
        schemaUrl: function () {
          var e = this.videoInfo && this.videoInfo.qipuId,
          t = {
            biz_id: '14',
            biz_plugin: 'com.iqiyi.knowledge',
            biz_params: {
              biz_sub_id: '7',
              biz_dynamic_params: 'id='.concat(e),
              biz_statistics: 's2=base_h5_player&s3='.concat(this.downAppPos)
            }
          },
          n = encodeURIComponent(encodeURIComponent(r() (t)));
          return 'iqiyi://mobile/register_business/com_iqiyi_knowledge?pluginParams='.concat(n)
        }
      })
    },
    p = u,
    d = n('2877'),
    f = Object(d['a']) (p, a, i, !1, null, null, null);
    t['a'] = f.exports
  }
}
]);
