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
    s = [
    ],
    l = n('db0c'),
    c = n.n(l),
    u = (n('2caf'), n('795b')),
    p = n.n(u),
    d = (n('96cf'), n('3b8d')),
    f = n('75fc'),
    h = n('cebc'),
    m = n('2f62'),
    b = n('fe3a'),
    v = n('17b0'),
    y = n('2c06'),
    g = function () {
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
    I = [
    ],
    w = n('cf20'),
    P = n('38ff'),
    k = {
      name: 'PlayTopButton',
      components: {
        PlayButtonDown: w['a'],
        ButtonDown: P['a']
      },
      data: function () {
        return {
          btnImgUrl: '//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png'
        }
      }
    },
    O = k,
    _ = n('2877'),
    j = Object(_['a']) (O, g, I, !1, null, null, null),
    x = j.exports,
    A = function () {
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
    T = [
    ],
    C = n('8d9b'),
    U = {
      name: 'PlayKnowledgeTopButton',
      components: {
        PlayKnowledgeButtonDown: C['a'],
        ButtonDown: P['a']
      },
      data: function () {
        return {
          btnImgUrl: '//pic1.iqiyipic.com/common/lego/20190603/39255f3e620a4ee69bb90932aa62b5a3.png'
        }
      }
    },
    q = U,
    D = Object(_['a']) (q, A, T, !1, null, null, null),
    B = D.exports,
    V = (n('0cd8'), n('57e7'), n('59ad')),
    S = n.n(V),
    $ = n('e814'),
    M = n.n($),
    E = (n('28a5'), n('759f'), n('d92a'), n('bd86')),
    R = n('b2e7'),
    F = n('8296'),
    K = {
      MicroMessenger: 'weixin',
      UC: 'uc'
    },
    L = {
      playpage: 'play',
      frontpage: 'home'
    },
    W = [
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
    z = [
      'baidubox',
      'sohuApp'
    ],
    N = 'LONG',
    H = 'SHORT',
    G = (a = {
    }, Object(E['a']) (a, N, 'hotalbum'), Object(E['a']) (a, H, 'shortvideo'), a),
    J = {
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
          return this.template.album || this.template.source ? N : this.template.short ? H : ''
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
            i,
            o;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.needDiversion) {
                    e.next = 19;
                    break
                  }
                  if (!this.isHot) {
                    e.next = 7;
                    break
                  }
                  if (!this.isInUaWhite()) {
                    e.next = 4;
                    break
                  }
                  return e.abrupt('return');
                case 4:
                  t = this.diversionInfo.subtype,
                  e.next = 16;
                  break;
                case 7:
                  if (!this.tmpl || !G[this.tmpl]) {
                    e.next = 16;
                    break
                  }
                  return n = G[this.tmpl],
                  e.next = 11,
                  this.$GlobalSwitcher.getFilters(n, 'play');
                case 11:
                  if (a = e.sent, a) {
                    e.next = 14;
                    break
                  }
                  return e.abrupt('return');
                case 14:
                  i = this.$GlobalSwitcher.getParams(n, 'play'),
                  t = i ? i.subtype : '';
                case 16:
                  this.callapp({
                    qipuId: this.videoInfo.tvid || this.videoInfo.qipuId,
                    subType: t,
                    vfm: '',
                    cfrm: '',
                    platform: '0',
                    fromPage: 'playpage',
                    userAgent: '',
                    proportion: '1'
                  }),
                  e.next = 20;
                  break;
                case 19:
                  this.needDiversion || this.isHot || (o = Object(F['G']) (this.getParams.bind(this), this.getFilters.bind(this), this.detect.bind(this), this.callapp.bind(this)), o());
                case 20:
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
        isInUaWhite: function () {
          return z.some(function (e) {
            return !!F['i'][e]
          })
        },
        getParams: function () {
          return {
            vfm: Object(y['C']) (),
            pageCfrm: Object(y['v']) (),
            anonymousUid: Object(R['w']) (),
            qipuId: this.videoInfo.qipuId || this.videoInfo.tvid,
            sidOrAid: this.videoInfo.album_id || this.videoInfo.aid || this.videoInfo.sid
          }
        },
        callapp: function (e) {
          var t = this;
          e && (this.toPage = L[e.fromPage] || 'home', this.downAppAndroidUrl = e.downloadUrl, this.subtype = e.subType, this.ftype = e.ftype || '', this.$nextTick(function () {
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
            return !t || L[t] === this.page
          },
          o = function (e) {
            var t = e.userAgent;
            if (!t) return !0;
            var n = t.split(',');
            return n.some(function (e) {
              return F['i'][K[e] || e]
            })
          },
          r = function (e) {
            return !e.vfm || n === e.vfm
          },
          s = function (e) {
            var n = e.cfrm;
            return !n || n === t
          },
          l = function (e) {
            var t = e.platform;
            return !t || (t = M() (t), 1 !== t && 2 !== t || (1 !== t || !F['D'].ios) && (2 !== t || !F['D'].android))
          },
          c = function (e) {
            var t = e.proportion;
            if (!t) return !0;
            var n = W.slice(0, Math.floor(S() (t) * W.length));
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
              s,
              l,
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
        return e(P['a'], {
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
    Y = J,
    Q = Object(_['a']) (Y, i, o, !1, null, null, null),
    X = Q.exports,
    Z = n('ab22'),
    ee = n('3e9e'),
    te = function () {
      var e = this,
      t = e.$createElement,
      n = e._self._c || t;
      return n('div')
    },
    ne = [
    ],
    ae = {
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
          var e = Object(Z['p']) (this.subTemplate, this.videoInfo, this.albumInfo);
          e && (document.title = e)
        }
      }
    },
    ie = ae,
    oe = Object(_['a']) (ie, te, ne, !1, null, null, null),
    re = oe.exports,
    se = function () {
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
    ce = n('474a'),
    ue = {
      name: 'PlayWechatShare',
      components: {
        WechatShare: ce['a']
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
    pe = ue,
    de = Object(_['a']) (pe, se, le, !1, null, null, null),
    fe = de.exports,
    he = n('b924'),
    me = 'play',
    be = {
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
        PlayTopButton: x,
        PlayKnowLedgeTopButton: B,
        PlayTitle: re,
        PlayWechatShare: fe,
        PlayAutoCallapp: X
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
          meta: Object(he['a']) (this.seoInfo).concat(Object(he['g']) (this.seoInfo)),
          link: [
            Object(he['c']) (this.videoInfo.videoUrl)
          ].concat(Object(f['a']) (Object(Z['n']) ())),
          script: [
            Object(he['d']) (this.seoInfo),
            Object(he['e']) (e, this.subTemplate.album || this.subTemplate.source ? 2 : 0),
            Object(he['f']) (e)
          ]
        }
      },
      data: function () {
        return {
          name: me,
          isHide: !1,
          callappCode: 'player'
        }
      },
      computed: Object(h['a']) ({
      }, Object(m['e']) (me, [
        'subTemplate',
        'template',
        'videoInfo',
        'albumInfo',
        'verticalVideoInfo',
        'seoInfo',
        'valid'
      ]), Object(m['c']) (me, [
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
                !a && n.registerModule(me, v['a'], {
                  preserveState: n.state[me]
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
      beforeMount: function () {
        Object(y['F']) ()
      },
      mounted: function () {
        return this.subTemplate.movie || this.template.bodan || ee['a'].setEnableNextCard(!1),
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
        ee['a'].clear(),
        this.$store.unregisterModule(me)
      },
      methods: Object(h['a']) ({
      }, Object(m['b']) (me, [
        'getPlay'
      ]), {
        update: function () {
          var e = Object(d['a']) (regeneratorRuntime.mark(function e(t) {
            var n,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return n = ee['a'].getCurVideo() || {
                  },
                  a = void 0 !== t.redirect ? t.redirect : n.redirect,
                  a && ee['a'].clear(),
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
            ee['a'].addVideo(t),
            ee['a'].setCurVideo(t)
          }
        },
        getCallappOptions: function () {
          var e = 'VIDEO_PLAY_MODE_VERTICAL' === this.videoInfo.playModel;
          return {
            vertical: e,
            extralOptions: Object(Z['i']) ({
              videoInfo: this.videoInfo,
              verticalVideoInfo: this.verticalVideoInfo,
              vertical: e
            })
          }
        }
      })
    },
    ve = be,
    ye = Object(_['a']) (ve, r, s, !1, null, null, null);
    t['default'] = ye.exports
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
    s = n('cebc'),
    l = n('2f62'),
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
      computed: Object(s['a']) ({
      }, Object(l['e']) ('play', [
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
