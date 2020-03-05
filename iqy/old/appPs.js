(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['appPs'],
{
  '66f2': function (e, t, a) {
    'use strict';
    a.r(t);
    var n = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', [
        a('PlayShortVideo'),
        a('PlayVideoRelated', {
          attrs: {
            time: e.time,
            'play-style': 'top: -1000px;left: 0px;width: 100%;z-index: 1000;position: absolute;'
          },
          on: {
            sourceLayerFoo: function (t) {
              return e.$refs.platformLimit && e.$refs.platformLimit.sourceLayerFooHandle(t)
            },
            fullscreenClick: e.clearLayer
          },
          scopedSlots: e._u([{
            key: 'layer',
            fn: function () {
              return [a('PlayShortEndLayer')]
            },
            proxy: !0
          }
          ])
        }),
        a('PlayBanner'),
        a('PlayVideoInfo', {
          ref: 'videoInfo'
        }),
        a('PlayExtendBar'),
        a('PlayRelatedHotWords'),
        e.controlInfo.politicallySensitive ? e._e()  : a('PlayRelevantBanner', {
          attrs: {
            enable: {
              feature: !0,
              IPInfo: !0,
              adOrigin: !0
            }
          }
        }),
        e.controlInfo.politicallySensitive ? e._e()  : a('PlayShortList'),
        a('AuraFooter'),
        a('BackTop'),
        a('PlayBottomAppHot'),
        a('PlayPlatformLimit', {
          ref: 'platformLimit'
        })
      ], 1)
    },
    i = [
    ],
    o = a('cebc'),
    s = a('9e5e'),
    r = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'm-box-items m-box-items-full',
        class : {
          'm-video-player-wrap': e.fix
        }
      }, [
        a('section', {
          staticClass: 'm-video-player',
          class : {
            'video-player-fixed': e.fix
          },
          style: e.fix ? e.fixStyle : {
          }
        }, [
          a('div', {
            staticClass: 'm-video-poster'
          }, [
            a('img', {
              attrs: {
                id: 'player-posterimg',
                src: e.videoInfo.imageUrl
              }
            })
          ]),
          a('div', {
            directives: [
              {
                name: 'play',
                rawName: 'v-play',
                value: {
                  qipuId: e.videoInfo.qipuId,
                  url: e.videoInfo.videoUrl,
                  noUpdateUrl: !0,
                  card: e.defaultCard,
                  action: 'update',
                  position: 'DIV',
                  playStrategy: 'screenOutStopContinue',
                  player: {
                    fix: !0
                  }
                },
                expression: '{qipuId: videoInfo.qipuId, url: videoInfo.videoUrl, noUpdateUrl: true, card: defaultCard, action: \'update\', position: \'DIV\', playStrategy: \'screenOutStopContinue\', player: {fix: true}}'
              }
            ],
            staticClass: 'c-videoplay',
            attrs: {
              onclick: 'this.setAttribute(\'playBtnClickedBeforeInit\', \'true\'); document.getElementById(\'video\').play();'
            },
            on: {
              click: function () {
              }
            }
          }, [
            a('i', {
              staticClass: 'c-player-icon c-player-big'
            })
          ]),
          a('div', {
            staticClass: 'playCount-time'
          }, [
            a('span', {
              staticClass: 'c-time'
            }, [
              e._v(e._s(e.time))
            ])
          ])
        ])
      ])
    },
    c = [
    ],
    l = a('2f62'),
    d = a('8296'),
    u = {
      name: 'PlayShortVideo',
      data: function () {
        return {
          fixStyle: {
            top: '0px'
          }
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'videoInfo',
        'loadInfo',
        'layerOpen',
        'layerId'
      ]), Object(l['c']) ('play', [
        'defaultCard'
      ]), {
        fix: function () {
          return this.layerOpen && this.layerId === this.videoInfo.qipuId && this.layerId !== this.loadInfo.qipuId
        },
        time: function () {
          return Object(d['q']) (this.videoInfo.duration)
        }
      })
    },
    p = u,
    m = a('2877'),
    f = Object(m['a']) (p, r, c, !1, null, null, null),
    v = f.exports,
    h = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return e.end && e.adInfoFeed.show ? a('div', {
        staticClass: 'adMarketing-laqi-box'
      }, [
        a('img', {
          staticClass: 'layer-video-img',
          attrs: {
            src: e.adInfoFeed.imageUrl
          }
        }),
        a('div', {
          staticClass: 'adMarketing-laqi'
        }, [
          a('div', {
            staticClass: 'adMarketing-inner'
          }, [
            a('div', {
              staticClass: 'inner-item'
            }, [
              a('a', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: e.adInfoFeed.ad_rseat,
                    expression: 'adInfoFeed.ad_rseat'
                  }
                ],
                staticClass: 'c-link',
                attrs: {
                  href: e.adInfoFeed.landingUrl
                }
              }, [
                a('div', {
                  staticClass: 'link-img',
                  style: 'background-image: url(' + e.adInfoFeed.brandLogo + ')'
                }),
                a('div', {
                  staticClass: 'link-name'
                }, [
                  e._v(e._s(e.adInfoFeed.brandName))
                ])
              ])
            ]),
            a('div', {
              staticClass: 'inner-item'
            }, [
              a('a', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: e.adInfoFeed.ad_rseat,
                    expression: 'adInfoFeed.ad_rseat'
                  }
                ],
                staticClass: 'c-link-btn',
                attrs: {
                  href: e.adInfoFeed.landingUrl
                }
              }, [
                e._v('\n          ' + e._s(e.adInfoFeed.btnContent) + '\n        ')
              ])
            ]),
            a('a', {
              staticClass: 'c-refresh-btn',
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: e.replay
              }
            }, [
              a('i', {
                staticClass: 'c-glyphicon c-glyphicon-playRefresh'
              }),
              e._v('重播\n      ')
            ])
          ])
        ])
      ])  : e._e()
    },
    b = [
    ],
    y = a('5321'),
    k = {
      name: 'PlayShortEndLayer',
      data: function () {
        return {
          end: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'adInfoFeed'
      ])),
      beforeMount: function () {
        var e = this,
        t = this.$parent;
        t.$on('created', function () {
          e.$player = t,
          t.on('play', function () {
            e.end = !1
          }),
          t.$on('playEnd', function () {
            e.end = !!e.adInfoFeed.adfinish_block,
            Object(y['m']) ({
              block: e.adInfoFeed.adfinish_block
            })
          })
        })
      },
      methods: {
        replay: function () {
          this.$player.show(),
          this.$player.play()
        }
      }
    },
    I = k,
    g = Object(m['a']) (I, h, b, !1, null, null, null),
    x = g.exports,
    _ = a('b75f'),
    C = a('0b00'),
    w = a('aa95'),
    P = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'm-box-items m-box-items-full',
        attrs: {
          name: 'm-extendBar'
        }
      }, [
        a('section', {
          staticClass: 'm-videoPlay-toolBar'
        }, [
          a('PlayExtendBarShare'),
          a('PlayExtendBarComment', {
            on: {
              commentClick: e.toggleComment
            }
          }),
          a('PlayExtendBarLike'),
          a('PlayExtendBarMoreBtn', {
            class : {
              selected: e.isShowMore
            },
            on: {
              moreClick: function (t) {
                e.isShowMore = !e.isShowMore
              }
            }
          })
        ], 1),
        a('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.isShowMore,
              expression: 'isShowMore'
            }
          ],
          staticClass: 'm-videoPlay-toolBar toolBar-fold'
        }, [
          a('PlayExtendBarDown'),
          a('PlayExtendBarFavorited'),
          a('PlayExtendBarReport', {
            attrs: {
              'qipu-id': e.videoInfo.qipuId
            }
          }),
          a('PlayExtendBarProblem')
        ], 1),
        e.controlInfo.detailComment ? a('PlayShortComment')  : e._e(),
        a('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toastText,
              expression: 'toastText'
            }
          ],
          attrs: {
            text: e.toastText
          }
        })
      ], 1)
    },
    j = [
    ],
    O = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '605091_comment',
            expression: '\'605091_comment\''
          },
          {
            name: 'pingback',
            rawName: 'v-pingback',
            value: '605091_comment',
            expression: '\'605091_comment\''
          },
          {
            name: 'show',
            rawName: 'v-show',
            value: e.controlInfo.extendbarComment,
            expression: 'controlInfo.extendbarComment'
          }
        ],
        staticClass: 'toolBar-item'
      }, [
        a('a', {
          staticClass: 'item-link',
          attrs: {
            href: 'javascript:void(0);'
          },
          on: {
            click: function (t) {
              return e.$emit('commentClick', !e.isOpen)
            }
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-comment'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v(e._s(e.count || '评论'))
          ])
        ])
      ])
    },
    S = [
    ],
    B = a('87ac'),
    q = {
      name: 'PlayExtendBarComment',
      data: function () {
        return {
          comment: {
          },
          isOpen: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo',
        'controlInfo'
      ]), {
        btnText: function () {
          return this.count ? '评论' : this.subTemplate.movie ? '点击参与评论' : '参与评论'
        },
        channelName: function () {
          return this.videoInfo.channelName
        },
        count: function () {
          return Object(d['h']) (this.comment.commentCount) || ''
        }
      }),
      watch: {
        'videoInfo.qipuId': {
          handler: function (e, t) {
            this.getCount()
          }
        }
      },
      mounted: function () {
        this.getCount()
      },
      methods: {
        getCount: function () {
          var e = this;
          Object(B['g']) (this.videoInfo.qipuId, function (t) {
            e.comment = t && 'A00000' === t.data.code ? t.data.data : {
            }
          })
        }
      }
    },
    T = q,
    A = Object(m['a']) (T, O, S, !1, null, null, null),
    E = A.exports,
    R = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item toolBar-like',
        class : {
          selected: e.liked && e.enableLike,
          noclicklike: !e.enableLike
        }
      }, [
        a('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '809121_dspdz',
              expression: '\'809121_dspdz\''
            }
          ],
          staticClass: 'item-link',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.toggleLike
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-like'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v('\n      ' + e._s(e.btnText) + '\n    ')
          ]),
          a('i', {
            staticClass: 'c-videoPlayPage-like-animation'
          })
        ]),
        a('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toastText,
              expression: 'toastText'
            }
          ],
          class : e.toastClass,
          scopedSlots: e._u([{
            key: 'text',
            fn: function () {
              return [a('i', {
                class : [
                  e.toastIconClass
                ]
              }),
              e._v(e._s(e.toastText) + '\n    ')]
            },
            proxy: !0
          }
          ])
        })
      ], 1)
    },
    N = [
    ],
    L = a('0a0d'),
    U = a.n(L),
    $ = a('795b'),
    V = a.n($),
    F = (a('96cf'), a('3b8d')),
    H = a('936f'),
    M = a('b2e7'),
    D = '//iface2.iqiyi.com/like/getLikeInfo',
    z = '//iface2.iqiyi.com/like/like',
    J = '//iface2.iqiyi.com/like/disLike',
    G = 'LIKE_STATUS_STORAGE';
    function K(e, t) {
      return Q.apply(this, arguments)
    }
    function Q() {
      return Q = Object(F['a']) (regeneratorRuntime.mark(function e(t, a) {
        var n,
        i;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return n = Object(o['a']) ({
                businessType: 14,
                qyid: Object(M['w']) (),
                psp_uid: Object(M['C']) ()
              }, a),
              e.next = 3,
              H['a'].get(t, {
                params: n
              }, {
                qStore: {
                  timeout: 200
                }
              }).catch (function () {
                return {
                }
              });
            case 3:
              return i = e.sent,
              e.abrupt('return', i.data);
            case 5:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), Q.apply(this, arguments)
    }
    function W(e, t) {
      var a = {
        businessType: 14,
        qyid: Object(M['w']) (),
        psp_uid: Object(M['C']) (),
        entityIds: e.entityIds
      };
      H['a'].getCacheHot(D, {
        params: a
      }, {
        qStore: {
          timeout: 200
        }
      }).next(t)
    }
    function X(e) {
      return Y.apply(this, arguments)
    }
    function Y() {
      return Y = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
        var a;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              K(D, {
                entityIds: t.entityIds
              });
            case 2:
              return a = e.sent,
              e.abrupt('return', a && 'A00000' === a.code ? JSON.parse(a.data)  : {
              });
            case 4:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), Y.apply(this, arguments)
    }
    function Z(e) {
      return ee.apply(this, arguments)
    }
    function ee() {
      return ee = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
        var a,
        n;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return a = t.liked,
              n = t.params,
              e.abrupt('return', a ? ne(n)  : te(n));
            case 2:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ee.apply(this, arguments)
    }
    function te(e) {
      return ae.apply(this, arguments)
    }
    function ae() {
      return ae = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
        var a;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              K(z, {
                entityId: t.entityId
              });
            case 2:
              return a = e.sent,
              e.abrupt('return', a && 'A00000' === a.code && a.success);
            case 4:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ae.apply(this, arguments)
    }
    function ne(e) {
      return ie.apply(this, arguments)
    }
    function ie() {
      return ie = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
        var a;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              K(J, t);
            case 2:
              return a = e.sent,
              e.abrupt('return', a && 'A00000' === a.code && a.success);
            case 4:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), ie.apply(this, arguments)
    }
    var oe,
    se,
    re,
    ce = a('3b2f'),
    le = {
      name: 'PlayExtendBarLike',
      components: {
        AuraToast: ce['a']
      },
      data: function () {
        return {
          liked: !1,
          count: '',
          toastIconClass: '',
          toastClass: '',
          toastText: '',
          animationShow: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo',
        'controlInfo'
      ]), {
        btnText: function () {
          return this.enableLike ? this.count ? Object(d['h']) (this.count)  : '点赞' : '不可点赞'
        },
        enableLike: function () {
          return this.controlInfo.like
        }
      }),
      mounted: function () {
        this.initStatus()
      },
      methods: {
        initStatus: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e() {
            var t,
            a = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  t = this.videoInfo.qipuId,
                  W({
                    entityIds: t
                  }, function (e) {
                    if (e.data && 'A00000' === e.data.code) {
                      var n = JSON.parse(e.data.data) || {
                      };
                      if (!n || !n[t]) return;
                      a.count = n[t].count,
                      a.liked = n[t].like
                    }
                  });
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
        toggleLike: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e() {
            var t,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.enableLike) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return t = {
                    liked: this.liked,
                    params: {
                      entityId: this.videoInfo.qipuId
                    }
                  },
                  e.next = 5,
                  Z(t);
                case 5:
                  if (a = e.sent, a) {
                    e.next = 9;
                    break
                  }
                  return this.showToast({
                    text: '操作失败，请重试',
                    toastClass: ''
                  }),
                  e.abrupt('return');
                case 9:
                  if (this.count += this.liked ? - 1 : 1, this.liked = !this.liked, e.t0 = this.liked, !e.t0) {
                    e.next = 15;
                    break
                  }
                  return e.next = 15,
                  this.showSuccToast();
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
        showSuccToast: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  this.showAnimation();
                case 2:
                  this.checkLiked();
                case 3:
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
        showAnimation: function () {
          var e = this;
          return this.animationShow = !0,
          new V.a(function (t) {
            setTimeout(function () {
              e.animationShow = !1,
              t()
            }, 1000)
          })
        },
        checkLiked: function () {
          if (d['B'].getItem(G)) return this.showToast(this.getToastInfo());
          this.showToast({
            toastClass: 'm-toast-like',
            iconClass: 'c-like-Nci',
            text: '已赞，可在“个人中心”查看'
          }),
          d['B'].setItem(G, U() ())
        },
        showToast: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
            var a = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return this.toastIconClass = t.iconClass,
                  this.toastClass = t.toastClass,
                  this.toastText = t.text,
                  e.abrupt('return', new V.a(function (e) {
                    setTimeout(function () {
                      a.toastText = '',
                      a.toastIconClass = '',
                      a.toastClass = '',
                      e()
                    }, 3000)
                  }));
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
        getToastInfo: function () {
          var e = this.count;
          return 0 === e ? {
            toastClass: 'm-toast-like',
            iconClass: 'c-like-sahua',
            text: '撒花~恭喜抢到首赞'
          }
           : e > 0 && e <= 99 ? {
            toastClass: 'm-toast-like',
            iconClass: 'c-like-yanshen',
            text: '确认过眼神，您是有品味的人'
          }
           : e > 99 && e <= 999 ? {
            toastClass: 'm-toast-like',
            iconClass: 'c-like-bixin',
            text: '笔芯，收到您宝贵的赞'
          }
           : e > 999 && e <= 9999 ? {
            toastClass: 'm-toast-like',
            iconClass: 'c-like-thanks',
            text: '谢谢！视频能被更多人看到啦'
          }
           : e > 9999 ? {
            toastClass: 'm-toast-like',
            iconClass: 'c-like-huobao',
            text: '哇，视频在爆火的路上又进了一步'
          }
           : {
          }
        }
      }
    },
    de = le,
    ue = Object(m['a']) (de, R, N, !1, null, null, null),
    pe = ue.exports,
    me = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item'
      }, [
        a('BoxShow', {
          attrs: {
            vfms: e._config.vfms
          }
        }, [
          a('ButtonDown', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: e._config.block,
                expression: '_config.block'
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: e._config.rseat,
                expression: '_config.rseat'
              }
            ],
            attrs: {
              subtype: e._config.subtype,
              ftype: e._config.ftype,
              rseat: e._config.downloadRseat,
              'extral-options': e.extralOptions,
              'down-app-android-url': e._config.downloadAndroidUrl,
              'down-app-ios-url': e._config.downloadIosUrl,
              'schema-url': e._config.schemaUrl,
              'down-app-pos': e._config.pos,
              'to-page': e._config.toPage
            }
          }, [
            a('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-down'
            }),
            a('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('下载')
            ])
          ])
        ], 1)
      ], 1)
    },
    fe = [
    ],
    ve = a('5176'),
    he = a.n(ve),
    be = (a('c5f6'), a('bd86')),
    ye = a('38ff'),
    ke = a('8300'),
    Ie = a('4f30'),
    ge = (oe = {
    }, Object(be['a']) (oe, Ie['CHANNEL_SHAOER'], {
      subtype: 'H5xzan_588',
      toPage: 'custom',
      rseat: '807233_kids_loading',
      block: '807233_kids_loading',
      schemaUrl: 'iqiyichild://comic/home?ftype=qbb_h5_download',
      downloadAndroidUrl: '//mbdapp.iqiyi.com/j/dh/iqiyi-kids_1978.apk',
      downloadIosUrl: 'https://itunes.apple.com/cn/app/ai-qi-yi-dong-hua-wu/id874837944?mt=8'
    }), Object(be['a']) (oe, 'default', {
      subtype: '150',
      rseat: 'mcltdown_4bfydwn',
      block: '804231_bfyxiazai',
      downloadRseat: '603091_3',
      pos: 'play_download_open',
      toPage: 'play',
      vfms: [
        'm_405_bdyy'
      ],
      ftype: 27
    }), oe),
    xe = {
      name: 'PlayExtendBarDown',
      components: {
        ButtonDown: ye['a'],
        BoxShow: ke['a']
      },
      props: {
        cid: {
          type: [
            String,
            Number
          ],
        default:
          ''
        }
      },
      data: function () {
        return {
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo',
        'playerBanner'
      ]), {
        _config: function () {
          var e;
          return e = ge[this.videoInfo.cid] && this.playerBanner.showQbb ? he() ({
          }, ge[this.videoInfo.cid], {
            schemaUrl: this.playerBanner.schema_download,
            downloadAndroidUrl: this.playerBanner.qbb_AndroidURL01,
            downLoadIosUrl: this.playerBanner.qbb_iosURL
          })  : ge.default,
          e
        },
        extralOptions: function () {
          return {
            aid: this.videoInfo.aid,
            tvid: this.videoInfo.tvid,
            cid: this.videoInfo.cid,
            vid: this.videoInfo.vid,
            video: this.videoInfo
          }
        }
      })
    },
    _e = xe,
    Ce = Object(m['a']) (_e, me, fe, !1, null, null, null),
    we = Ce.exports,
    Pe = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item'
      }, [
        a('a', {
          directives: [
            {
              name: 'clipboard',
              rawName: 'v-clipboard',
              value: e.message,
              expression: 'message'
            },
            {
              name: 'clipboard',
              rawName: 'v-clipboard:callback',
              value: e.onCopy,
              expression: 'onCopy',
              arg: 'callback'
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '171127_shr',
              expression: '\'171127_shr\''
            }
          ],
          staticClass: 'item-link',
          attrs: {
            href: 'javascript:void(0)'
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-share'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v(e._s(e.btnText))
          ])
        ]),
        a('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toastShow,
              expression: 'toastShow'
            }
          ],
          attrs: {
            text: '链接复制成功，快去分享给大家吧~'
          }
        })
      ], 1)
    },
    je = [
    ],
    Oe = {
      name: 'PlayExtendBarShare',
      data: function () {
        return {
          toastShow: !1,
          message: ''
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo'
      ]), {
        btnText: function () {
          var e = 9990000,
          t = this.videoInfo.shareCount;
          return t ? t < 10000 ? t : t < e ? (t / 10000).toFixed(1) + 'w' : '999w+' : '分享'
        }
      }),
      mounted: function () {
        this.message = window.location.href
      },
      methods: {
        onCopy: function (e) {
          e && this.successFade()
        },
        onError: function () {
        },
        successFade: function () {
          var e = this;
          this.toastShow = !0,
          setTimeout(function () {
            e.toastShow = !1
          }, 3000)
        }
      }
    },
    Se = Oe,
    Be = Object(m['a']) (Se, Pe, je, !1, null, null, null),
    qe = Be.exports,
    Te = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item',
        class : {
          selected: e.selected
        }
      }, [
        a('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '902281_more',
              expression: '\'902281_more\''
            }
          ],
          staticClass: 'video-collect',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: function (t) {
              return e.$emit('moreClick')
            }
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-more'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v('更多')
          ])
        ])
      ])
    },
    Ae = [
    ],
    Ee = {
      name: 'PlayExtendBarMore',
      data: function () {
        return {
          selected: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo'
      ]))
    },
    Re = Ee,
    Ne = Object(m['a']) (Re, Te, Ae, !1, null, null, null),
    Le = Ne.exports,
    Ue = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item',
        class : {
          selected: e.faved
        }
      }, [
        a('PlayFavorited', {
          attrs: {
            'content-type': e.contentType,
            cid: e.videoInfo.cid,
            subkey: e.subkey,
            favorite: e.faved,
            'need-check': !0,
            'is-toast': !0,
            'tag-class': 'item-link'
          },
          on: {
            'update:favorite': function (t) {
              e.faved = t
            }
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-collect'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v(e._s(e.faved ? '已收藏' : '收藏'))
          ])
        ])
      ], 1)
    },
    $e = [
    ],
    Ve = a('985e'),
    Fe = a('1a51'),
    He = {
      name: 'PlayLongExtendBarFavorited',
      components: {
        PlayFavorited: Ve['a']
      },
      data: function () {
        return {
          faved: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'subTemplate',
        'videoInfo'
      ]), {
        contentType: function () {
          return this.subTemplate.album ? Fe['b'] : this.subTemplate.source ? Fe['d'] : Fe['c']
        },
        subkey: function () {
          return this.contentType === Fe['b'] ? this.videoInfo.aid : this.contentType === Fe['d'] ? this.videoInfo.sourceId : this.videoInfo.qipuId
        }
      })
    },
    Me = He,
    De = Object(m['a']) (Me, Ue, $e, !1, null, null, null),
    ze = De.exports,
    Je = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item'
      }, [
        a('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '802271_jubao',
              expression: '\'802271_jubao\''
            }
          ],
          staticClass: 'item-link',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.report
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-report'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v('举报')
          ])
        ])
      ])
    },
    Ge = [
    ],
    Ke = a('b383'),
    Qe = a.n(Ke),
    We = {
      name: 'PlayExtendBarReport',
      props: {
        qipuId: {
          type: [
            String,
            Number
          ],
        default:
          ''
        }
      },
      methods: {
        report: function () {
          var e = ''.concat(location.protocol, '//').concat(location.host).concat(location.pathname),
          t = {
            redirect_uri: encodeURIComponent(e),
            tvid: this.qipuId,
            isH5: !0
          };
          window.location.href = '/m5/feedback/videoReport.html?'.concat(Qe.a.stringify(t))
        }
      }
    },
    Xe = We,
    Ye = Object(m['a']) (Xe, Je, Ge, !1, null, null, null),
    Ze = Ye.exports,
    et = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('div', {
        staticClass: 'toolBar-item'
      }, [
        a('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '802271_playproblem',
              expression: '\'802271_playproblem\''
            }
          ],
          staticClass: 'item-link',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.problem
          }
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-videoPlayPage-faq'
          }),
          a('span', {
            staticClass: 'toolBar-info'
          }, [
            e._v('播放遇到问题')
          ])
        ])
      ])
    },
    tt = [
    ],
    at = {
      name: 'PlayExtendBarProblem',
      methods: {
        problem: function () {
          var e = ''.concat(location.protocol, '//').concat(location.host).concat(location.pathname);
          location.href = '/u/feedback?entry=player&redirect_uri='.concat(encodeURIComponent(e))
        }
      }
    },
    nt = at,
    it = Object(m['a']) (nt, et, tt, !1, null, null, null),
    ot = it.exports,
    st = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return a('PlayInfoLayer', {
        attrs: {
          open: e.openComment,
          modal: !1,
          'associated-id': e.comment.qipuId
        },
        on: {
          'update:open': e.close
        },
        scopedSlots: e._u([{
          key: 'content',
          fn: function () {
            return [e.comment.qipuId ? a('PlayComment', {
              attrs: {
                'qipu-id': e.comment.qipuId,
                aid: e.comment.aid,
                cid: e.comment.cid,
                'comment-allowed': e.comment.commentAllowed,
                'show-num': 5,
                'video-info': e.videoInfo,
                'more-pingback': '902282_pldl',
                'callapp-pingback': '902281_pldl'
              },
              scopedSlots: e._u([{
                key: 'empty',
                fn: function (t) {
                  return [a('div', {
                    staticClass: 'm-iqylink-diversion'
                  }, [
                    a('div', {
                      staticClass: 'commentNew-title'
                    }, [
                      e._v('评论'),
                      a('span', {
                        staticClass: 'num'
                      }, [
                        e._v('(0)')
                      ])
                    ]),
                    a('section', {
                      staticClass: 'm-commentNew-tip '
                    }, [
                      a('i', {
                        staticClass: 'tip-icon'
                      })
                    ]),
                    a('ButtonDown', {
                      attrs: {
                        subtype: t.subtype,
                        'extral-options': t.extralOptions,
                        'to-page': 'play',
                        href: 'javascript:void(0)',
                        tag: 'a'
                      }
                    }, [
                      a('a', {
                        directives: [
                          {
                            name: 'show-pingback',
                            rawName: 'v-show-pingback',
                            value: t.callappPingback,
                            expression: 'comment.callappPingback'
                          },
                          {
                            name: 'pingback',
                            rawName: 'v-pingback',
                            value: t.callappPingback,
                            expression: 'comment.callappPingback'
                          }
                        ],
                        staticClass: 'c-btn c-btn-block',
                        attrs: {
                          href: 'javascript:;'
                        }
                      }, [
                        a('i', {
                          staticClass: 'c-glyphicon c-glyphicon-iqy'
                        }),
                        e._v('打开爱奇艺APP，参与热门大讨论~\n            ')
                      ])
                    ])
                  ], 1)]
                }
              }
              ], null, !1, 230641149)
            })  : e._e()]
          },
          proxy: !0
        }
        ])
      })
    },
    rt = [
    ],
    ct = a('8d4a'),
    lt = a('4de8'),
    dt = {
      name: 'PlayShortComment',
      components: {
        PlayInfoLayer: ct['a'],
        PlayComment: lt['a'],
        ButtonDown: ye['a']
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'comment',
        'openComment',
        'loadInfo'
      ]), {
        videoInfo: function (e) {
          return this.comment.video
        }
      }),
      watch: {
        'loadInfo.qipuId': function (e, t) {
          this.openComment && this.comment.qipuId !== e && this.close()
        }
      },
      methods: {
        close: function () {
          this.$store.dispatch('play/closeComment')
        }
      }
    },
    ut = dt,
    pt = Object(m['a']) (ut, st, rt, !1, null, null, null),
    mt = pt.exports,
    ft = {
      name: 'PlayExtendBar',
      components: {
        PlayExtendBarComment: E,
        PlayExtendBarLike: pe,
        PlayExtendBarDown: we,
        PlayExtendBarShare: qe,
        PlayExtendBarMoreBtn: Le,
        PlayExtendBarFavorited: ze,
        PlayExtendBarReport: Ze,
        PlayExtendBarProblem: ot,
        PlayShortComment: mt,
        AuraToast: ce['a']
      },
      data: function () {
        return {
          isShowMore: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'openComment',
        'videoInfo',
        'toastText',
        'controlInfo'
      ]), Object(l['c']) ('play', [
        'defaultCard'
      ])),
      methods: {
        toggleComment: function () {
          this.openComment ? this.$store.dispatch('play/closeComment')  : this.$store.dispatch('play/openComment', {
            aid: this.videoInfo.aid,
            qipuId: this.videoInfo.qipuId,
            cid: this.videoInfo.cid,
            commentAllowed: this.videoInfo.commentAllowed,
            video: this.videoInfo
          })
        }
      }
    },
    vt = ft,
    ht = Object(m['a']) (vt, P, j, !1, null, null, null),
    bt = ht.exports,
    yt = a('7b03'),
    kt = function () {
      var e = this,
      t = e.$createElement,
      a = e._self._c || t;
      return !e.init || e.videos.length ? a('div', {
        staticClass: 'm-box'
      }, [
        e._m(0),
        a('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          a('section', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: 'h5_block_player_feed',
                expression: '\'h5_block_player_feed\''
              }
            ],
            staticClass: 'm-recommend-player'
          }, [
            a('ul', {
              staticClass: 'recommend-player-list'
            }, e._l(e.videos, function (t, n) {
              return a('li', {
                key: t.isAdert ? '' + t.qipuId + e.adIndex : '' + t.qipuId + n
              }, [
                a('section', {
                  directives: [
                    {
                      name: 'copy-callapp',
                      rawName: 'v-copy-callapp',
                      value: {
                        video: t,
                        subtype: e.feedSubtype
                      },
                      expression: '{video, subtype: feedSubtype}'
                    },
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: t.isAdvert ? t.advertInfo.adRseat + '_' + t.adIndex : 'h5_player_feed',
                      expression: 'video.isAdvert ? `${video.advertInfo.adRseat}_${video.adIndex}` :\'h5_player_feed\''
                    },
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: t.isAdvert ? t.advertInfo.adBlock + '_' + t.adIndex : '',
                      expression: 'video.isAdvert ? `${video.advertInfo.adBlock}_${video.adIndex}` : \'\''
                    }
                  ],
                  class : 'm-video-player',
                  on: {
                    '!click': function (a) {
                      return e.videoPlayerClick(t, n)
                    }
                  }
                }, [
                  a('div', {
                    staticClass: 'm-video-poster',
                    on: {
                      click: function (a) {
                        return e.posterJump(t.advertInfo)
                      }
                    }
                  }, [
                    a('img', {
                      attrs: {
                        src: t.isAdvert ? t.advertInfo.imageUrl : t.imageUrl
                      }
                    })
                  ]),
                  a('PlayIcon', {
                    attrs: {
                      'play-options': {
                        callApp: false,
                        vfrmblk: t.advertInfo && t.advertInfo.adBlock + '_' + t.adIndex,
                        vfrmrst: t.advertInfo && t.advertInfo.adRseat + '_' + t.adIndex,
                        adIndex: t.adIndex,
                        isAdvert: t.isAdvert,
                        advertInfo: t.advertInfo,
                        qipuId: t.qipuId,
                        url: t.pageUrl,
                        noUpdateUrl: !0,
                        mainTitle: t.mainTitle,
                        noPlay: t.noPlay,
                        vid: t.vid,
                        card: 'feed',
                        continuous: !0,
                        position: 'LI',
                        source: {
                          noAD: !0
                        },
                        hook: e.load,
                        playStrategy: 'screenOutStopContinue',
                        player: {
                          title: !0
                        },
                        block: 'h5_block_player_feed',
                        rseat: 'h5_player_feed',
                        stop: t.isAdvert && 'video' === t.advertInfo.adModes,
                        index: n
                      },
                      'click-handle': e.toPlay.bind(null, t),
                      'is-ad': t.isAdvert,
                      'ad-info': t.advertInfo,
                      callapp: false,
                      rseat: t.isAdvert ? t.advertInfo.adRseat + '_' + t.adIndex : 'h5_player_feed'
                    }
                  }),
                  a('div', {
                    staticClass: 'video-title'
                  }, [
                    a('span', {
                      staticClass: 'c-title'
                    }, [
                      e._v(e._s(t.mainTitle))
                    ])
                  ]),
                  t.isAdvert ? e._e()  : a('div', {
                    staticClass: 'playCount-time'
                  }, [
                    t.showContent ? a('span', {
                      staticClass: 'c-num'
                    }, [
                      e._v('\n                ' + e._s(t.showContent) + '\n              ')
                    ])  : e._e(),
                    t.duration ? a('span', {
                      staticClass: 'c-time'
                    }, [
                      e._v('\n                ' + e._s(t.duration) + '\n              ')
                    ])  : e._e()
                  ])
                ], 1),
                t.isAdvert ? a('section', {
                  staticClass: 'adHandle'
                }, [
                  a('div', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: t.advertInfo.leftdownRseat + '_' + t.adIndex,
                        expression: '`${video.advertInfo.leftdownRseat}_${video.adIndex}`'
                      }
                    ],
                    staticClass: 'handle-title'
                  }, [
                    a('div', [
                      e._v('广告: ')
                    ]),
                    a('div', {
                      staticClass: 'title',
                      on: {
                        click: function (a) {
                          return e.jump(t.advertInfo.landingUrl)
                        }
                      }
                    }, [
                      e._v(e._s(t.advertInfo.adName))
                    ])
                  ]),
                  a('a', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: t.advertInfo.adRseat + '_' + t.adIndex,
                        expression: '`${video.advertInfo.adRseat}_${video.adIndex}`'
                      }
                    ],
                    staticClass: 'handle-donwBtn',
                    attrs: {
                      href: t.advertInfo.landingUrl
                    }
                  }, [
                    e._v(e._s(t.advertInfo.btnContent))
                  ]),
                  a('div', {
                    staticClass: 'handle-close',
                    on: {
                      click: function (a) {
                        return e.closeAd(t.adIndex, n)
                      }
                    }
                  }, [
                    a('i', {
                      staticClass: 'c-glyphicon c-glyphicon-guideClose'
                    })
                  ])
                ])  : e._e(),
                t.isAdvert ? e._e()  : a('section', {
                  staticClass: 'sourceHandle'
                }, [
                  t.userId && t.username ? a('a', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: '805301_' + t.cid + 'author',
                        expression: '`805301_${video.cid}author`'
                      }
                    ],
                    staticClass: 'source-link',
                    attrs: {
                      href: '/u/' + t.userId
                    }
                  }, [
                    a('span', {
                      staticClass: 'c-photo',
                      class : {
                        'user-starV': 4 === t.userVerifyState && 2 !== t.userCopyRight
                      },
                      style: t.avatar ? 'background-image:url(' + t.avatar + ')' : ''
                    }),
                    a('div', {
                      staticClass: 'title'
                    }, [
                      e._v(e._s(t.username))
                    ])
                  ])  : t.channelUrl ? a('router-link', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: '805301_' + t.cid + 'channel',
                        expression: '`805301_${video.cid}channel`'
                      }
                    ],
                    staticClass: 'c-channel-link',
                    attrs: {
                      to: t.channelUrl
                    }
                  }, [
                    a('span', {
                      staticClass: 'tag'
                    }, [
                      e._v(e._s(t.channelName))
                    ])
                  ])  : e._e(),
                  a('div', {
                    staticClass: 'clickBox',
                    on: {
                      click: function (a) {
                        return e.jump(t.pageUrl)
                      }
                    }
                  }),
                  a('div', {
                    staticClass: 'handle'
                  }, [
                    t.like ? a('a', {
                      directives: [
                        {
                          name: 'pingback',
                          rawName: 'v-pingback',
                          value: '809121_wntjdz',
                          expression: '\'809121_wntjdz\''
                        },
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.like.enable,
                          expression: 'video.like.enable'
                        }
                      ],
                      staticClass: 'c-link like-link',
                      class : {
                        selected: t.like.like,
                        noclicklike: !t.like.enable
                      },
                      attrs: {
                        href: 'javascript:void(0)'
                      },
                      on: {
                        click: function (a) {
                          return e.toggleLike(t)
                        }
                      }
                    }, [
                      a('span', {
                        staticClass: 'handle-num'
                      }, [
                        a('i', {
                          staticClass: 'c-videoPlayPage-icon c-sourceHandle-like'
                        }),
                        a('i', {
                          staticClass: 'c-num',
                          style: {
                            visibility: t.like.enable ? 'visible' : 'hidden'
                          }
                        }, [
                          e._v('\n                    ' + e._s(e._f('billionLimit') (t.like.count, '')) + '\n                  ')
                        ]),
                        a('i', {
                          staticClass: 'c-videoPlayPage-like-animation'
                        })
                      ])
                    ])  : e._e(),
                    a('a', {
                      directives: [
                        {
                          name: 'play',
                          rawName: 'v-play',
                          value: {
                            card: 'feed',
                            action: 'none',
                            qipuId: t.qipuId
                          },
                          expression: '{card: \'feed\', action: \'none\', qipuId: video.qipuId}'
                        },
                        {
                          name: 'pingback',
                          rawName: 'v-pingback',
                          value: '805301_' + t.cid + 'critic',
                          expression: '`805301_${video.cid}critic`'
                        },
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.enableComment,
                          expression: 'video.enableComment'
                        }
                      ],
                      staticClass: 'c-link',
                      attrs: {
                        href: 'javascript:void(0)'
                      },
                      on: {
                        click: function (a) {
                          return e.openComment(t)
                        }
                      }
                    }, [
                      a('span', {
                        staticClass: 'handle-num'
                      }, [
                        a('i', {
                          staticClass: 'c-videoPlayPage-icon c-sourceHandle-comment'
                        }),
                        a('i', {
                          staticClass: 'c-num'
                        }, [
                          e._v('\n                    ' + e._s(e._f('billionLimit') (t.commentCount, '')) + '\n                  ')
                        ])
                      ])
                    ]),
                    t.downApp ? a('ButtonDown', {
                      staticClass: 'c-link',
                      staticStyle: {
                        display: 'block !important'
                      },
                      attrs: {
                        'extral-options': e.callAppOptions(t),
                        subtype: e.downloadSubtype,
                        'to-page': 'play',
                        'down-app-pos': 'play_download_open',
                        rseat: '603091_3',
                        tag: 'a'
                      }
                    }, [
                      a('span', {
                        directives: [
                          {
                            name: 'pingback',
                            rawName: 'v-pingback',
                            value: 'mcltdown_4bfydwn',
                            expression: '\'mcltdown_4bfydwn\''
                          }
                        ],
                        staticClass: 'handle-num'
                      }, [
                        a('i', {
                          staticClass: 'c-videoPlayPage-icon c-sourceHandle-down'
                        }),
                        a('i', {
                          staticClass: 'c-num'
                        })
                      ])
                    ])  : e._e(),
                    a('a', {
                      directives: [
                        {
                          name: 'pingback',
                          rawName: 'v-pingback',
                          value: '805301_' + t.cid + 'share',
                          expression: '`805301_${video.cid}share`'
                        },
                        {
                          name: 'clipboard',
                          rawName: 'v-clipboard',
                          value: 'http:' + t.pageUrl,
                          expression: '`http:${video.pageUrl}`'
                        },
                        {
                          name: 'clipboard',
                          rawName: 'v-clipboard:callback',
                          value: e.onCopy,
                          expression: 'onCopy',
                          arg: 'callback'
                        }
                      ],
                      staticClass: 'c-link',
                      attrs: {
                        href: 'javascript:void(0)'
                      }
                    }, [
                      e._m(1, !0)
                    ])
                  ], 1)
                ], 1),
                t.subVideo ? a('PlayVideoSub', {
                  attrs: {
                    video: t.subVideo
                  },
                  on: {
                    change: function (a) {
                      return e.subHandle(t, a)
                    }
                  }
                })  : e._e()
              ], 1)
            }), 0)
          ]),
          a('LoadBottom', {
            attrs: {
              'load-complete': e.isComplete,
              callback: e.load
            },
            scopedSlots: e._u([{
              key: 'complete',
              fn: function () {
                return [e._v('到底啦~')]
              },
              proxy: !0
            },
            {
              key: 'error',
              fn: function () {
                return [e._v('到底啦~')]
              },
              proxy: !0
            }
            ], null, !1, 186408216)
          })
        ], 1),
        a('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toastText,
              expression: 'toastText'
            }
          ],
          class : e.toastClass,
          scopedSlots: e._u([{
            key: 'text',
            fn: function () {
              return [a('i', {
                class : [
                  e.toastIconClass
                ]
              }),
              e._v(e._s(e.toastText) + '\n    ')]
            },
            proxy: !0
          }
          ], null, !1, 68828236)
        })
      ], 1)  : e._e()
    },
    It = [
      function () {
        var e = this,
        t = e.$createElement,
        a = e._self._c || t;
        return a('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          a('section', {
            staticClass: 'm-title'
          }, [
            a('h3', {
              staticClass: 'c-title-des'
            }, [
              e._v('为你推荐')
            ])
          ])
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        a = e._self._c || t;
        return a('span', {
          staticClass: 'handle-num'
        }, [
          a('i', {
            staticClass: 'c-videoPlayPage-icon c-sourceHandle-share'
          })
        ])
      }
    ],
    gt = (a('0cd8'), a('e814')),
    xt = a.n(gt),
    _t = (a('7f7f'), a('6d67'), a('d25f'), a('ac6a'), a('f3e2'), a('6762'), a('2fdb'), a('2b0e')),
    Ct = a('8d81'),
    wt = a.n(Ct),
    Pt = a('da1f'),
    jt = a('1266'),
    Ot = a('21fd'),
    St = a('6f18'),
    Bt = a('3e9e'),
    qt = a('ab22'),
    Tt = {
      functional: !0,
      render: function (e, t) {
        var a = t.props,
        n = a.callapp ? a.clickHandle : function () {
        },
        i = a.callapp ? 'play-laqi' : 'c-videoplay',
        o = a.callapp ? 'c-glyphicon c-glyphicon-albumPlay' : 'c-player-icon c-player-big',
        s = a.callapp ? 'APP专享' : '',
        r = a.callapp ? '' : a.rseat;
        return e('div', {
          directives: [
            {
              name: 'pingback',
              value: r
            },
            {
              name: 'show',
              value: !(a.isAd && 'picture' === a.adInfo.adModes)
            },
            {
              name: 'play',
              value: a.playOptions
            }
          ],
          class : i,
          on: {
            click: n
          }
        }, [
          e('i', {
            class : o
          }),
          s
        ])
      }
    },
    At = Tt,
    Et = Object(m['a']) (At, se, re, !1, null, null, null),
    Rt = Et.exports,
    Nt = {
      name: 'PlayShortList',
      components: {
        LoadBottom: Pt['a'],
        ButtonDown: ye['a'],
        PlayVideoSub: jt['a'],
        PlayIcon: Rt
      },
      filters: {
        billionLimit: d['h']
      },
      data: function () {
        return {
          adIndex: 1,
          videoIndex: 1,
          init: !1,
          pingback: {
            remain_next_page: 'true'
          },
          videos: [
          ],
          videoObject: {
          },
          favObject: {
          },
          subObject: {
          },
          toastText: '',
          toastClass: '',
          toastIconClass: '',
          animationShow: !1,
          callApp: false,
          playList: Bt['a'],
          callappNum: qt['t'].short.feed,
          feedSubtype: 'H5dspf_824',
          downloadSubtype: '150'
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'videoInfo'
      ]), {
        isComplete: function () {
          return 'false' === this.pingback.remain_next_page
        }
      }),
      mounted: function () {
        var e = this;
        this.initCallApp(),
        this.load().finally (function () {
          e.init = !0
        })
      },
      methods: {
        initCallApp: function () {
          var e = !(d['i'].baidubox || document.referrer && document.referrer.includes('m.baidu.com'));
          this.callApp = e
        },
        videoPlayerClick: function (e, t) {
          this.callApp && t < this.callappNum && !e.isAdvert && (Object(y['l']) ({
            rt: 'o',
            block: 'h5_block_player_feed',
            rlink: '',
            rseat: 'h5_tuijianfeed_app'
          }))
        },
        toPlay: function (e) {
          Object(y['l']) ({
            rt: 'o',
            block: 'h5_block_player_feed',
            rlink: '',
            rseat: 'h5_player_feed'
          })
        },
        load: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e() {
            var t,
            a,
            n = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.isComplete) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return e.next = 4,
                  this.getRecommend();
                case 4:
                  if (t = e.sent, a = t.videos, a.length) {
                    e.next = 8;
                    break
                  }
                  return e.abrupt('return');
                case 8:
                  a.forEach(function (e, t, a) {
                    e.isAdvert ? (e.adIndex = n.adIndex, e.imageUrl = e.advertInfo.imageUrl, e.mainTitle = e.advertInfo.adContent, 'video' === e.advertInfo.adModes ? (e.qipuId = e.advertInfo.videoQipuId, e.vid = wt() (window.navigator.userAgent + document.cookie + Math.random() + U() ()), e.advertInfo = e.advertInfo)  : (e.qipuId = Math.random(), e.noPlay = !0), n.adIndex++)  : (e.videoIndex = n.videoIndex, n.videoIndex++)
                  }),
                  this.videos = this.videos.concat(a),
                  a = a.filter(function (e) {
                    return !e.isAdvert
                  }),
                  this.getFav(a),
                  this.getLike(a),
                  this.getComment(a),
                  this.getSubState(a);
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
        getRecommend: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e() {
            var t,
            a,
            n;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.videoInfo,
                  a = {
                    albumId: t.aid,
                    channelId: t.cid,
                    referenceId: t.qipuId,
                    evid: this.pingback.event_id,
                    pageId: this.pingback.next_page,
                    size: 10,
                    featureStatus: 1,
                    filterStatus: 1,
                    ua: this.$userAgent.userAgent,
                    advertStatus: 1
                  },
                  e.next = 4,
                  Object(Ot['j']) (a);
                case 4:
                  return n = e.sent,
                  this.pingback = n.pingback || {
                  },
                  n.videos = n.videos || [
                  ],
                  n.videos = n.videos.map(this.buildVideo),
                  e.abrupt('return', n);
                case 9:
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
        buildVideo: function (e) {
          if (this.videoObject[e.qipuId] && e.qipuId) return this.videoObject[e.qipuId];
          if (e.commentCount = 0, e.like = {
            like: !1,
            count: 0
          }, e.imageUrl = Object(d['o']) (e.imageUrl, '480_270'), e.downApp = Object(d['j']) (e.duration) >= 300, !e.userId || !e.username) {
            var t = Object(Ie['getChannel']) (String(e.cid));
            t && (e.channelUrl = t.url, e.channelName = t.name)
          }
          var a,
          n = e.kvs = e.kvs || {
          };
          if (e.featureVideoId && void 0 !== n.featureIsEffec ? (a = '0' === e.kvs.featureIsEffec, n.featureId = e.featureVideoId && '0' === n.featureId ? e.featureVideoId : e.kvs.featureId)  : e.albumId && void 0 !== n.albumLatestVideoId && (a = '0' === n.albumLatestVideoId, n.featureId = e.albumId && '0' === n.featureId ? e.albumId : e.kvs.featureId), e.subVideo = null, a) {
            var i = this.subObject[n.featureId];
            i || (i = this.subObject[n.featureId] = {
              imageUrl: n.featureImageUrl,
              mainTitle: n.featureTitle,
              count: 0,
              subed: !1,
              qipuId: e.qipuId
            }),
            e.subVideo = i
          } else if (n.featureId && '0' !== n.feautreId) {
            var o = this.favObject[n.featureId];
            if (!o) {
              var s = xt() (n.featureVideoType),
              r = s === Ot['a'] ? n.featureAid : s === Ot['b'] ? n.featureSid : n.featureId;
              o = this.favObject[n.featureId] = {
                pageUrl: n.featurePageUrl,
                imageUrl: n.featureImageUrl,
                mainTitle: n.featureTitle,
                subTitle: n.featureSubTitle,
                faved: !1,
                qipuId: xt() (r),
                contentType: s,
                cid: xt() (n.featureCid)
              }
            }
            e.favVideo = o
          }
          return this.videoObject[e.qipuId] = e,
          e
        },
        toggleLike: function (e) {
          var t = this,
          a = e.like;
          if (a.enable) return a.like ? (a.like = !a.like, a.count = a.count - 1, ne({
            entityId: e.qipuId
          }).then(function (e) {
            e || (a.count = a.count + 1, a.like = !a.like, t.showToast('取消点赞失败'))
          }))  : te({
            entityId: e.qipuId
          }).then(function (e) {
            if (e) {
              t.showAnimation();
              var n = t.getLikeToastInfo(a.count);
              t.showToast(n.text, n.toastClass, n.toastIconClass),
              a.like = !a.like,
              a.count = a.count + 1
            } else t.showToast('操作失败，请重试')
          })
        },
        getLike: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  X({
                    entityIds: t.map(function (e) {
                      return e.qipuId
                    }).join(',')
                  });
                case 2:
                  a = e.sent,
                  t.forEach(function (e) {
                    var t = a[e.qipuId] || {
                    };
                    e.like.like = t.like,
                    e.like.count = t.count || 0;
                    var n = e.controlInfo || {
                    };
                    e.like.enable = !!n.like
                  });
                case 4:
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
        getComment: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Object(B['d']) ({
                    ids: t.map(function (e) {
                      return e.qipuId
                    }).join(',')
                  });
                case 2:
                  a = e.sent,
                  t.forEach(function (e) {
                    e.commentCount = a[e.qipuId] || 0;
                    var t = e.controlInfo || {
                    };
                    e.enableComment = !!t.extendbarComment
                  });
                case 4:
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
        getSubState: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
            var a,
            n;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (a = t.reduce(function (e, t) {
                    return t.subVideo && e.push(t.qipuId || t.albumId),
                    e
                  }, [
                  ]).join(','), !a) {
                    e.next = 6;
                    break
                  }
                  return e.next = 4,
                  Object(St['d']) ({
                    subKeys: a
                  });
                case 4:
                  n = e.sent,
                  t.forEach(function (e) {
                    var t = n[e.qipuId];
                    t && (e.subState.count = t.count, e.subState.subed = t.state)
                  });
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
        getFav: function () {
          var e = Object(F['a']) (regeneratorRuntime.mark(function e(t) {
            var a,
            n,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (a = t.reduce(function (e, t) {
                    return t.favVideo && e.push(t.favVideo),
                    e
                  }, [
                  ]), !a.length) {
                    e.next = 7;
                    break
                  }
                  return n = a.map(function (e) {
                    return ''.concat(e.qipuId, '_').concat(e.contentType)
                  }).join(','),
                  e.next = 5,
                  Object(Fe['e']) ({
                    items: n
                  });
                case 5:
                  i = e.sent,
                  a.forEach(function (e) {
                    e.faved = i && i[e.qipuId] > 0
                  });
                case 7:
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
        onCopy: function (e) {
          e && this.showToast('链接复制成功，快去分享给大家吧~')
        },
        subHandle: function (e, t) {
          e.subVideo.subed = t.subed,
          e.subVideo.count = t.count
        },
        favHandle: function (e, t) {
          e.favVideo.faved = t.faved
        },
        showToast: function (e) {
          var t = this,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3000;
          this.toastClass = a,
          this.toastIconClass = n,
          this.toastText = e,
          setTimeout(function () {
            t.toastText = ''
          }, i)
        },
        getLikeToastInfo: function (e) {
          return localStorage.getItem(G) ? 0 === e ? {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-sahua',
            text: '撒花~恭喜抢到首赞'
          }
           : e > 0 && e <= 99 ? {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-yanshen',
            text: '确认过眼神，您是有品味的人'
          }
           : e > 99 && e <= 999 ? {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-bixin',
            text: '笔芯，收到您宝贵的赞'
          }
           : e > 999 && e <= 9999 ? {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-thanks',
            text: '谢谢！视频能被更多人看到啦'
          }
           : e > 9999 ? {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-huobao',
            text: '哇，视频在爆火的路上又进了一步'
          }
           : {
          }
           : (localStorage.setItem(G, U() ()), {
            toastClass: 'm-toast-like',
            toastIconClass: 'c-like-Nci',
            text: '已赞，可在“个人中心”查看'
          })
        },
        openComment: function (e) {
          this.$store.dispatch('play/openComment', {
            qipuId: e.qipuId,
            cid: e.cid,
            aid: e.albumId,
            commentAllowed: !0,
            video: e
          })
        },
        callAppOptions: function (e) {
          return {
            aid: e.albumId,
            tvid: e.qipuId,
            cid: e.cid,
            vid: e.vid,
            video: e
          }
        },
        getPositionElement: function (e) {
          return e.position ? Object(d['F']) (e.el, e.position, !0)  : null
        },
        setPosition: function (e) {
          var t = this.getPositionElement(e);
          if (t) {
            var a = _t['default'].prototype.$qiyiPlayer.$el;
            if (!t && !a) return;
            var n = t.offsetTop;
            a.style.top = ''.concat(n, 'px'),
            a.style.position = 'absolute',
            a.style.index = 1000
          }
        },
        closeAd: function (e, t) {
          t <= this.playList.lists.feed.length && this.setPosition(this.playList.lists.feed.videos[t]),
          this.videos.splice(t, 1);
          var a = Bt['a'].getCurVideo();
          a.adIndex === e && (this.$qiyiPlayer.clear(), this.$qiyiPlayer.hide())
        },
        showAnimation: function () {
          var e = this;
          return this.animationShow = !0,
          new V.a(function (t) {
            setTimeout(function () {
              e.animationShow = !1,
              t()
            }, 1000)
          })
        },
        jump: function (e) {
          e && (window.location.href = e)
        },
        posterJump: function (e) {
          e && 'picture' === e.adModes && (location.href = e.landingUrl)
        }
      }
    },
    Lt = Nt,
    Ut = Object(m['a']) (Lt, kt, It, !1, null, null, null),
    $t = Ut.exports,
    Vt = a('da25'),
    Ft = a('ba2c'),
    Ht = a('a466'),
    Mt = a('302b'),
    Dt = a('2b04'),
    zt = a('5cf8'),
    Jt = {
      name: 'PlayShort',
      components: {
        PlayShortVideo: v,
        PlayVideoRelated: _['a'],
        PlayBanner: C['a'],
        PlayVideoInfo: w['a'],
        PlayExtendBar: bt,
        PlayRelevantBanner: yt['a'],
        PlayShortList: $t,
        BackTop: s['a'],
        PlayBottomApp: Vt['a'],
        PlayShortEndLayer: x,
        PlayPlatformLimit: Ft['a'],
        AuraFooter: Mt['a'],
        PlayRelatedHotWords: Dt['a'],
        PlayBottomAppHot: zt['a']
      },
      mixins: [
        Ht['a']
      ],
      data: function () {
        return {
          isOpen: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(l['e']) ('play', [
        'videoInfo',
        'adInfoFeed',
        'controlInfo'
      ]), {
        time: function () {
          return Object(d['q']) (this.videoInfo.duration)
        }
      })
    },
    Gt = Jt,
    Kt = Object(m['a']) (Gt, n, i, !1, null, null, null);
    t['default'] = Kt.exports
  }
}
]);
