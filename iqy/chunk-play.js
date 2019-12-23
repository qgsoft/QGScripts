(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['chunk-play'],
{
  '0288': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('VideoList', {
        attrs: {
          videos: e.videos,
          name: 'm-series'
        },
        scopedSlots: e._u([{
          key: 'header',
          fn: function () {
            return [e.seriesTitle ? i('AuraCardTitle', {
              attrs: {
                title: e.seriesTitle
              }
            })  : e._e()]
          },
          proxy: !0
        },
        {
          key: 'body',
          fn: function (t) {
            var a = t.videos;
            return [i('AuraVideoList', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: e.rseat,
                  expression: 'rseat'
                },
                {
                  name: 'scroll',
                  rawName: 'v-scroll.scrollX',
                  value: {
                    eventPassthrough: 'vertical',
                    videos: a,
                    position: 'LI',
                    selectClass: 'selected'
                  },
                  expression: '{\n        eventPassthrough: \'vertical\',\n        videos: videos,\n        position: \'LI\',\n        selectClass: \'selected\'\n      }',
                  modifiers: {
                    scrollX: !0
                  }
                }
              ],
              class : e.sectionClass,
              attrs: {
                videos: a,
                ellipsis: !1,
                'hide-sub-title': e.isHideSubTitle
              },
              scopedSlots: e._u([{
                key: 'img',
                fn: function (t) {
                  var a = t.video;
                  return [i('AuraVideo', {
                    staticClass: 'piclist-link',
                    style: {
                      'background-image': 'url(' + (a.imageUrl || '//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png') + ')'
                    },
                    attrs: {
                      href: a.play ? 'javascript:void(0)' : a.pageUrl,
                      video: a
                    },
                    scopedSlots: e._u([{
                      key: 'extra',
                      fn: function () {
                        return [a.isSelected ? i('div', {
                          staticClass: 'play-tip'
                        }, [
                          i('i', {
                            staticClass: 'c-glyphicon c-glyphicon-tryPlay'
                          })
                        ])  : e._e()]
                      },
                      proxy: !0
                    }
                    ], null, !0)
                  })]
                }
              }
              ], null, !0)
            })]
          }
        }
        ])
      })
    },
    n = [
    ],
    s = (i('57e7'), i('6d67'), i('ac6a'), i('f3e2'), i('96cf'), i('3b8d')),
    o = (i('c5f6'), i('6810')),
    r = i('21fd'),
    c = i('8296'),
    l = {
      name: 'PlayVideoSeries',
      components: {
        VideoList: o['a']
      },
      props: {
        title: {
          type: String,
        default:
          ''
        },
        isHideSubTitle: {
          type: Boolean,
        default:
          !1
        },
        isPlayLong: {
          type: Boolean,
        default:
          !1
        },
        superAlbumId: {
          type: Number,
        default:
          0
        },
        albumId: {
          type: Number,
        default:
          0
        },
        albumQipuId: {
          type: Number,
        default:
          0
        },
        sourceId: {
          type: Number,
        default:
          0
        },
        qipuId: {
          type: Number,
        default:
          0
        },
        cid: {
          type: Number,
        default:
          0
        },
        sectionClass: {
          type: String,
        default:
          ''
        },
        imageSize: {
          type: String,
        default:
          '284_160'
        },
        min: {
          type: Number,
        default:
          1
        },
        max: {
          type: Number,
        default:
          10
        },
        rseat: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          videos: [
          ],
          seriesTitle: ''
        }
      },
      mounted: function () {
        this.getSeries()
      },
      methods: {
        getSeries: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.superAlbumId) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return t = {
                    id: this.superAlbumId,
                    cid: this.cid,
                    albumId: this.albumQipuId,
                    sourceId: this.sourceId,
                    tvId: this.qipuId
                  },
                  i = 0,
                  e.next = 6,
                  Object(r['k']) (t);
                case 6:
                  a = e.sent,
                  a && a.items && (this.videos = a.items.length >= this.min ? a.items.slice(0, this.max)  : [
                  ], this.videos.forEach(function (e, t) {
                    (e.albumId ? e.isSource ? + e.albumId === + n.sourceId : + e.albumId === + n.albumQipuId : + e.qipuId === + n.qipuId) && (i = t)
                  }), this.videos = this.videos.map(function (e, t) {
                    return e.imageUrl = Object(c['o']) (e.imageUrl, n.imageSize),
                    e.score && !isNaN(e.score) && (e.score = e.score.toFixed(1)),
                    e.lowerRightCorner = n.isPlayLong && e.showContent || e.score + '',
                    e.isSelected = e.albumId ? e.isSource ? + e.albumId === + n.sourceId : + e.albumId === + n.albumQipuId : + e.qipuId === + n.qipuId,
                    e.pageUrl = e.pageUrl.indexOf('vfrm') > - 1 ? e.pageUrl : ''.concat(e.pageUrl, '#vfrm=30-26-16-7'),
                    t !== n.videos.length - 1 && t > i && (e.play = {
                      continuous: !0,
                      card: 'series',
                      action: 'add',
                      redirect: !0,
                      url: e.pageUrl,
                      qipuId: e.qipuId,
                      selectClass: e.isSelected ? 'selected' : ''
                    }),
                    e
                  }), this.seriesTitle = this.title || a.mainTitle);
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
        }()
      }
    },
    u = l,
    d = i('2877'),
    p = Object(d['a']) (u, a, n, !1, null, null, null);
    t['a'] = p.exports
  },
  '03b5': function (e, t, i) {
    var a = i('2592');
    'string' === typeof a && (a = [
      [e.i,
      a,
      '']
    ]),
    a.locals && (e.exports = a.locals);
    var n = i('499e').default;
    n('4c037bb5', a, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  '07de': function (e, t, i) {
    t = e.exports = i('2350') (!1),
    t.push([e.i,
    '.m-sliding[data-v-888234ec]{overflow:scroll}',
    ''])
  },
  '0b00': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        e.showAppBanner ? i('PlayAppBanner', {
          attrs: {
            'is-vip': e.enableGoldAppBanner && e.isPurchase
          }
        })  : e.showVipBanner ? i('PlayVipBanner', {
          attrs: {
            type: e.vipBannerType,
            'is-preview': e.isPreview,
            aid: e.videoInfo.aid,
            tvid: e.videoInfo.tvid,
            'link-url': e.linkUrl,
            'button-class': e.isMarketing ? 'c-btn-marketing' : ''
          },
          on: {
            click: e.$refs.vipPop.show
          }
        })  : e._e(),
        e.isPurchase ? i('PlayVipPop', {
          ref: 'vipPop',
          attrs: {
            info: e.layerInfo,
            type: e.templateType,
            aid: e.videoInfo.aid,
            tvid: e.videoInfo.tvid,
            'video-name': e.videoInfo.videoName
          }
        })  : e._e(),
        e.showMarket ? i('PlayMarketingBanner', {
          ref: 'marketing',
          attrs: {
            type: e.templateType
          },
          on: {
            'update:marketing': function (t) {
              e.isMarketing = t
            }
          }
        })  : e._e(),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: !e.showAppBanner && !e.showVipBanner && !e.showMarket,
              expression: '!showAppBanner && !showVipBanner && !showMarket'
            }
          ],
          staticClass: 'm-box-items m-box-items-full'
        }, [
          e._m(0)
        ])
      ], 1)
    },
    n = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-iqylink-guide'
        }, [
          i('a', {
            staticClass: 'c-btn c-btn-block',
            staticStyle: {
              background: '#fff',
              'box-shadow': 'none'
            }
          })
        ])
      }
    ],
    s = i('a4bb'),
    o = i.n(s),
    r = (i('ac6a'), i('f3e2'), i('96cf'), i('3b8d')),
    c = i('cebc'),
    l = i('2f62'),
    u = i('6f42'),
    d = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        i('div', {
          staticClass: 'm-iqylink-guide'
        }, [
          e.type.common ? i('a', {
            staticClass: 'c-btn c-btn-block c-btn-viplink',
            attrs: {
              href: 'https://cashier.iqiyi.com/cashier/cashier/cashier.html?fc=81fdb8f80c01bd73&aid=' + (e.aid || e.tvid)
            }
          }, [
            e._v('观看完整版请开通会员\n    ')
          ])  : e.type.sport ? i('a', {
            staticClass: 'c-btn c-btn-block c-btn-tennis',
            attrs: {
              href: e.linkUrl ? e.linkUrl : 'javascript:void(0);'
            }
          }, [
            i('i', {
              staticClass: 'c-glyphicon c-glyphicon-tennis'
            }),
            e._v('观看完整版体育内容请购买\n    ')
          ])  : i('a', {
            staticClass: 'c-btn c-btn-block c-btn-viplink',
            class : [
              e.buttonClass
            ],
            attrs: {
              href: 'javascript:void(0);'
            },
            on: {
              click: function (t) {
                return e.$emit('click')
              }
            }
          }, [
            e._v('\n      ' + e._s(e.isPreview ? '试看6分钟，' : '') + '\n      ' + e._s(e.type.buy ? '应版权方要求，观看完整版请购买本片' : e.type.coupon ? '应版权方要求，观看完整版请用券观看' : '速开会员，大片看不停') + '\n    ')
          ])
        ])
      ])
    },
    p = [
    ],
    h = (i('c5f6'), {
      name: 'PlayVipBanner',
      props: {
        buttonClass: {
          type: String,
        default:
          ''
        },
        aid: {
          type: Number,
        default:
          0
        },
        tvid: {
          type: Number,
        default:
          0
        },
        isPreview: {
          type: Boolean,
        default:
          !1
        },
        linkUrl: {
          type: String,
        default:
          ''
        },
        type: {
          type: Object,
        default:
          function () {
            return {
              common: !1,
              sport: !1,
              buy: !1,
              coupon: !1
            }
          }
        }
      }
    }),
    f = h,
    m = i('2877'),
    v = Object(m['a']) (f, d, p, !1, null, null, null),
    b = v.exports,
    y = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.covers && e.covers.length ? i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, e._l(e.covers, function (t, a) {
        return i('div', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: Object.assign({
              }, {
                block: t.prePingback + 'block'
              }, e.pingbackData),
              expression: '{block: `${cover.prePingback}block`, ...pingbackData}'
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: Object.assign({
              }, {
                rseat: t.prePingback + 'rseat'
              }, e.pingbackData),
              expression: '{rseat: `${cover.prePingback}rseat`, ...pingbackData}'
            }
          ],
          key: a,
          staticClass: 'm-iqylink-guide vip-marketing'
        }, [
          t.isUrl && t.detail.text1 && t.linkType.url ? i('a', {
            staticClass: 'c-btn c-btn-block',
            style: t.detail.imgUrl && 'background-image:url(' + t.detail.imgUrl + ')',
            attrs: {
              href: t.linkType.url + '&aid=' + (e.videoInfo.aid || e.videoInfo.tvid)
            }
          }, [
            i('i', {
              staticClass: 'vip-marketing-icon'
            }),
            e._v(e._s(t.detail.text1) + '\n    ')
          ])  : t.isNative && t.detail.text1 ? i('PlayButtonDown', {
            staticClass: 'c-btn c-btn-block',
            style: t.detail.imgUrl && 'background-image:url(' + t.detail.imgUrl + ')',
            attrs: {
              subtype: 149,
              'down-app-android-url': '//mbdapp.iqiyi.com/j/ap/iqiyi_1536.apk'
            }
          }, [
            i('i', {
              staticClass: 'vip-marketing-icon'
            }),
            e._v(e._s(t.detail.text1) + '\n    ')
          ])  : e._e()
        ], 1)
      }), 0)  : e._e()
    },
    g = [
    ],
    w = (i('759f'), i('360b')),
    I = i('cf20'),
    _ = {
      name: 'PlayMarketingBanner',
      components: {
        PlayButtonDown: I['a']
      },
      props: {
        type: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          covers: null,
          vtMap: {
            1: 1,
            2: 4,
            3: 3,
            5: 2
          },
          pingbackData: {
            bstp: 56,
            mcnt: 'qiyue_interact'
          }
        }
      },
      computed: Object(c['a']) ({
      }, Object(l['e']) ('play', [
        'videoInfo'
      ])),
      methods: {
        init: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a,
            n;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return i = t.layerType,
                  this.covers = null,
                  a = {
                    qipuId: this.videoInfo.featureVideoId || this.videoInfo.qipuId,
                    cid: this.videoInfo.cid,
                    vt: this.vtMap[i] || (17 === this.type || 18 === this.type ? 5 : 0)
                  },
                  e.next = 5,
                  Object(w['c']) (a);
                case 5:
                  n = e.sent,
                  n.success && n.covers && (n.covers.forEach(function (e) {
                    e.detail = e ? e.detail : {
                    },
                    e.linkType = e.detail.linkType || {
                    },
                    e.isUrl = e.linkType.type === w['b'],
                    e.isNative = e.linkType.type === w['a'],
                    e.prePingback = ''.concat(n.interfaceCode, '_').concat(n.strategyCode, '_').concat(e.code, '_')
                  }), this.covers = n.covers),
                  this.isMarketing(this.covers);
                case 8:
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
        isMarketing: function (e) {
          var t = !1;
          this.covers && this.covers.length && (t = e.some(function (e) {
            return e.detail.text1 && (e.linkType.url || e.isNative)
          })),
          this.$emit('update:marketing', t)
        }
      }
    },
    C = _,
    k = Object(m['a']) (C, y, g, !1, null, null, null),
    x = k.exports,
    T = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        e.toastShow ? i('div', {
          staticClass: 'm-toast m-player-toast'
        }, [
          i('div', {
            staticClass: 'info'
          }, [
            e._v('\n      ' + e._s(e.toastText) + '\n    ')
          ])
        ])  : e._e(),
        e.popupShow ? i('div', [
          i('div', {
            staticClass: 'cover'
          }),
          2 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '购买《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e.info.price < e.info.originPrice ? i('span', {
                  staticClass: 'orange'
                }, [
                  e._v('\n            会员特惠' + e._s(e.info.price) + '元(原价' + e._s(e.info.originPrice) + '元)\n          ')
                ])  : e.info.price === e.info.originPrice ? i('span', {
                  staticClass: 'orange'
                }, [
                  e._v('\n            ' + e._s(e.info.price) + '元购买本片\n          ')
                ])  : e._e()
              ])
            ]),
            i('div', {
              staticClass: 'handle'
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.hide
                }
              }, [
                e._v('取消')
              ]),
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.buySingle
                }
              }, [
                e._v('购买')
              ])
            ])
          ])  : 1 === e.type || 3 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '购买《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buySingle
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v(e._s(e.info.price) + '元购买本片')
              ])
            ]),
            e.info.price > e.info.originPrice ? i('div', {
              staticClass: 'handle'
            }, [
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.buyVip
                }
              }, [
                e._v('加入会员' + e._s(e.info.vipPrice) + '元特惠购片')
              ])
            ])  : e._e(),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.hide
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('取消')
              ])
            ])
          ])  : 4 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '观看《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buySingle
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v(e._s(e.info.price) + '元购买本片')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buyVip
              }
            }, [
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('开通会员，用券免费看')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.hide
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('取消')
              ])
            ])
          ])  : 5 === e.type || 7 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '观看《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('剩余'),
                i('span', {
                  staticClass: 'orange'
                }, [
                  e._v(e._s(e.info.leftCouponNum))
                ]),
                e._v('张点播券，使用'),
                i('span', {
                  staticClass: 'orange'
                }, [
                  e._v('1')
                ]),
                e._v('张')
              ])
            ]),
            i('div', {
              staticClass: 'handle'
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.hide
                }
              }, [
                e._v('取消')
              ]),
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.useCoupon
                }
              }, [
                e._v('使用')
              ])
            ])
          ])  : 6 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '观看《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('点播券已用完，续费VIP可获点播券')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buySingle
              }
            }, [
              e.info.price < e.info.originPrice ? i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('\n          会员特惠' + e._s(e.info.price) + '元(原价' + e._s(e.info.originPrice) + '元)\n        ')
              ])  : e.info.price === e.info.originPrice ? i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('\n          ' + e._s(e.info.price) + '元购买本片\n        ')
              ])  : e._e()
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buyVip
              }
            }, [
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('续费VIP会员（立送'),
                e.info.vodCouponCount > 0 ? i('span', [
                  e._v(e._s(e.info.vodCouponCount) + '张')
                ])  : e._e(),
                e._v('点播券）')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.hide
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('取消')
              ])
            ])
          ])  : 8 === e.type ? i('div', {
            staticClass: 'm-player-buy-pop'
          }, [
            i('div', {
              staticClass: 'info'
            }, [
              i('div', {
                staticClass: 'title'
              }, [
                e._v(e._s(e.videoName ? '观看《' + e.videoName + '》' : ''))
              ]),
              i('div', {
                staticClass: 'des'
              }, [
                e._v('观影有效期至：' + e._s(e.info.validityPeriod))
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              attrs: {
                'data-fc': '8a19acc7a2d24e1a'
              },
              on: {
                click: function (t) {
                  return e.buySingle()
                }
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v(e._s(e.info.price) + '元购买本片')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.buyVip
              }
            }, [
              i('a', {
                staticClass: 'c-link orange',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('开通VIP会员（立送'),
                e.info.vodCouponCount > 0 ? i('span', [
                  e._v(e._s(e.info.vodCouponCount) + '张')
                ])  : e._e(),
                e._v('点播券）')
              ])
            ]),
            i('div', {
              staticClass: 'handle',
              on: {
                click: e.hide
              }
            }, [
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('取消')
              ])
            ])
          ])  : e._e()
        ])  : e._e()
      ])
    },
    P = [
    ],
    O = i('936f'),
    S = i('b383'),
    j = i('b2e7'),
    B = i('8296'),
    N = {
      name: 'PlayVipPop',
      props: {
        info: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        type: {
          type: Number,
        default:
          0
        },
        aid: {
          type: Number,
        default:
          0
        },
        videoName: {
          type: String,
        default:
          ''
        },
        tvid: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          toastText: '',
          toastShow: !1,
          popupShow: !1,
          isPaused: !1
        }
      },
      methods: {
        buyVip: function () {
          var e = '';
          this.type >= 13 && this.type <= 16 ? e = '9b43045a005a9061' : this.type > 4 && this.type < 9 ? e = 'b6c004c57a163f9a' : this.type <= 4 && (e = 'bb2942736c2d5e67'),
          window.location.href = '/pay.html?fc=' + e + '&aid=' + this.aid || !1
        },
        buySingle: function (e) {
          var t = {
            aid: this.aid || this.tvid,
            pid: this.info.pid,
            serviceCode: this.info.serviceCode,
            fc: '8a19acc7a2d24e1a'
          },
          i = ''.concat(window.location.protocol, '//m.iqiyi.com/productPay.html?').concat(Object(S['stringify']) (t));
          window.location.href = Object(j['M']) () ? i : '/user.html?redirect_url=' + encodeURIComponent(i)
        },
        useCoupon: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  O['a'].jsonp(Object(B['I']) (this.info.useVodCouponUrl)).catch (function () {
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
          this.isPaused = this.$qiyiPlayer.paused(),
          this.$qiyiPlayer.pause(),
          this.hideToast(),
          this.popupShow = !0
        },
        hide: function () {
          !this.isPaused && !this.$qiyiPlayer.ended() && this.$qiyiPlayer.play(),
          this.popupShow = !1
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
        }
      }
    },
    q = N,
    L = Object(m['a']) (q, T, P, !1, null, null, null),
    V = L.exports,
    D = i('4f30'),
    A = {
      name: 'PlayBanner',
      components: {
        PlayAppBanner: u['a'],
        PlayVipBanner: b,
        PlayMarketingBanner: x,
        PlayVipPop: V
      },
      props: {
        enableGoldAppBanner: {
          type: Boolean,
        default:
          !1
        },
        enable: {
          type: Object,
        default:
          function () {
            return {
              app: !0,
              vip: {
                common: !0,
                sport: !0,
                coupon: !0,
                buy: !0
              },
              market: !0
            }
          }
        }
      },
      data: function () {
        return {
          showType: '',
          vipBannerType: {
          },
          linkUrl: '',
          isMarketing: !1,
          layerInfo: {
          },
          templateType: 0,
          shouldCheckVip: !1
        }
      },
      computed: Object(c['a']) ({
      }, Object(l['e']) ('play', [
        'videoInfo'
      ]), {
        isPurchase: function () {
          return !!this.videoInfo.purchaseType && 0 !== this.videoInfo.purchaseType
        },
        isMovie: function () {
          return this.videoInfo.cid === + D['CHANNEL_DIANYING']
        },
        showAppBanner: function () {
          return this.enable.app && (!this.isPurchase || 'normal' === this.showType && !this.isMarketing)
        },
        showVipBanner: function () {
          return this.enable.vip && 'vip' === this.showType && (!this.isMarketing || this.isMarketing && (this.vipBannerType.coupon || this.vipBannerType.buy))
        },
        showMarket: function () {
          return this.enable.market && this.isPurchase && this.isMovie
        }
      }),
      mounted: function () {
        var e = this;
        this.$qiyiPlayer.$on('loaded', function (t) {
          e.linkUrl = '',
          e.isMarketing = !1;
          var i = t.videoInfo.data.boss_ts;
          e.isPreview = t.videoInfo.prv;
          var a = i.code && 'A00000' !== i.code;
          e.isPurchase && ('1' === i.data.prv || a) ? (e.shouldCheckVip = !0, e.reset())  : e.showType = 'normal'
        }),
        this.$qiyiPlayer.$on('sourceVipType', function (t) {
          var i = t.templateType,
          a = t.layerInfo,
          n = t.layerType;
          e.templateType = i || 0,
          e.layerInfo = a || {
          },
          e.$refs.marketing && e.$refs.marketing.init({
            layerType: n
          }),
          e.shouldCheckVip && e.checkType()
        })
      },
      methods: {
        checkType: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t = {
                  }, e.prev = 1, i = this.templateType, 11 !== i) {
                    e.next = 6;
                    break
                  }
                  return this.showType = 'normal',
                  e.abrupt('return');
                case 6:
                  i >= 13 && i <= 16 ? t.common = !0 : 17 === i || 18 === i ? (this.linkUrl = this.layerInfo.data && this.layerInfo.data.purchase ? this.layerInfo.data.purchase[0].url : '', t.sport = !0)  : i >= 4 ? t.coupon = !0 : t.buy = !0,
                  this.showType = 'vip',
                  e.next = 14;
                  break;
                case 10:
                  e.prev = 10,
                  e.t0 = e['catch'](1),
                  t.common = !0,
                  this.showType = 'vip';
                case 14:
                  o() (t).forEach(function (e) {
                    t[e] && !a.enable.vip[e] && (a.showType = 'normal')
                  }),
                  this.vipBannerType = t;
                case 16:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this,
            [
              [1,
              10]
            ])
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        reset: function () {
          this.layerInfo = {
          },
          this.templateType = 0,
          this.vipBannerType = {
          }
        }
      }
    },
    E = A,
    R = Object(m['a']) (E, a, n, !1, null, null, null);
    t['a'] = R.exports
  },
  1266: function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.video ? i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '180926_order_block',
            expression: '\'180926_order_block\''
          }
        ],
        staticClass: 'm-videoUser-spacing'
      }, [
        i('div', {
          staticClass: 'm-videoUser-spacingBox'
        }, [
          i('div', {
            staticClass: 'm-videoUser-spacingItem'
          }, [
            i('a', {
              staticClass: 'videoUser-data',
              attrs: {
                href: 'javascript:void(0)'
              }
            }, [
              i('div', {
                staticClass: 'videoUser-img',
                style: 'background-image:url(' + e.video.imageUrl + ')'
              }, [
                e._m(0)
              ]),
              i('div', {
                staticClass: 'videoUser-info'
              }, [
                e.video.mainTitle ? i('div', {
                  staticClass: 'videoUser-name'
                }, [
                  e._v('\n            ' + e._s(e.video.mainTitle) + '\n          ')
                ])  : e._e(),
                e.subCountContent ? i('div', {
                  staticClass: 'videoUser-des'
                }, [
                  e._v('\n            ' + e._s(e.subCountContent) + '\n          ')
                ])  : e._e()
              ])
            ]),
            i('a', {
              directives: [
                {
                  name: 'copy-callapp',
                  rawName: 'v-copy-callapp',
                  value: {
                    video: e.video,
                    subtype: e.subtype
                  },
                  expression: '{video, subtype}'
                }
              ],
              staticClass: 'videoUser-stow',
              class : {
                selected: e.subed
              },
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: e.onSubClick
              }
            }, [
              i('span', {
                staticClass: 'c-info'
              }, [
                e._v('\n          ' + e._s(e.subed ? '已预约' : '预约正片') + '\n        ')
              ])
            ])
          ])
        ]),
        i('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toastShow,
              expression: 'toastShow'
            }
          ],
          attrs: {
            text: e.toastText
          }
        })
      ], 1)  : e._e()
    },
    n = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'c-rt'
        }, [
          i('i', {
            staticClass: 'c-picicon-s c-picicon-feature'
          }, [
            e._v('正片')
          ])
        ])
      }
    ],
    s = (i('96cf'), i('3b8d')),
    o = i('6f18'),
    r = i('8296'),
    c = i('5321'),
    l = i('b2e7'),
    u = {
      name: 'PlayVideoSub',
      props: {
        video: {
          type: Object,
        default:
          function () {
            return null
          }
        }
      },
      data: function () {
        return {
          subed: this.video.subed,
          count: this.video.count,
          toastShow: !1,
          toastText: '',
          subtype: 'H5phbf_1624'
        }
      },
      computed: {
        subCountContent: function () {
          return this.count ? ''.concat(Object(r['p']) (this.count), '人 已预约')  : ''
        }
      },
      watch: {
        'video.subed': function () {
          this.count = this.video.count,
          this.subed = this.video.subed
        }
      },
      methods: {
        onSubClick: function () {
          Object(l['M']) () ? this.toggleSub()  : window.location.href = '/user.html'
        },
        toggleSub: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t = this.video.qipuId, !this.subed) {
                    e.next = 8;
                    break
                  }
                  return e.next = 4,
                  Object(o['c']) ({
                    subKeys: t
                  }).catch (function () {
                    n.update(n.subed, n.count + 1),
                    n.showToast('取消预约失败，稍后请重试')
                  });
                case 4:
                  i = e.sent,
                  i && i.success ? (Object(c['l']) ({
                    rt: 'a',
                    rseat: '180926_order_ready'
                  }), this.showToast('预约已取消'), this.update(!this.subed, this.count - 1))  : (this.update(this.subed, this.count + 1), this.showToast('取消预约失败，稍后请重试')),
                  e.next = 13;
                  break;
                case 8:
                  return e.next = 10,
                  Object(o['b']) ({
                    subKeys: t
                  }).catch (function () {
                    n.update(n.subed, n.count - 1),
                    n.showToast('预约失败，稍后请重试')
                  });
                case 10:
                  a = e.sent,
                  a && a.success ? (Object(c['l']) ({
                    rt: 'a',
                    rseat: '180926_order'
                  }), this.showToast('预约成功，上线后通知您噢'), this.update(!this.subed, this.count + 1))  : (this.update(this.subed, this.count - 1), this.showToast('预约失败，稍后请重试')),
                  this.callapp();
                case 13:
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
        callapp: function () {
          this.$dispatch('GlobalCallapp', 'toPlay', {
            extralOptions: {
              tvid: this.video.qipuId
            },
            subtype: this.subtype
          })
        },
        update: function (e, t) {
          return this.subed = e,
          this.count = t,
          this.$emit('change', {
            subed: e,
            count: t
          })
        },
        showToast: function (e) {
          var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2000;
          clearTimeout(this.toastTimer),
          this.toastShow = !0,
          this.toastText = e,
          this.toastTimer = setTimeout(function () {
            t.toastShow = !1
          }, i)
        }
      }
    },
    d = u,
    p = i('2877'),
    h = Object(p['a']) (d, a, n, !1, null, null, null);
    t['a'] = h.exports
  },
  '17b0': function (e, t, i) {
    'use strict';
    var a = i('f499'),
    n = i.n(a),
    s = (i('7f7f'), i('96cf'), i('6762'), i('5176')),
    o = i.n(s),
    r = i('3b8d'),
    c = i('936f'),
    l = i('fe90'),
    u = i('11ad'),
    d = i('21fd'),
    p = i('ab22'),
    h = i('4f30'),
    f = i('cecc'),
    m = i('8296'),
    v = Object(m['C']) ('store', {
      feedback: !0
    }),
    b = 'HORIZONTAL',
    y = 'WECHAT_CIRCLE',
    g = 'VERTICAL',
    w = 'KNOWLEDGE_PAY',
    I = [
      0,
      2,
      3
    ],
    _ = {
      paopao: '605251_comments',
      extendbar: '605091_comment',
      detail: '808201_comment'
    };
    function C(e, t) {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(r['a']) (regeneratorRuntime.mark(function e(t, i) {
        var a,
        s,
        r,
        p,
        h,
        b,
        y,
        g,
        w,
        I,
        C,
        k,
        x,
        T,
        P,
        O,
        S,
        j,
        B,
        N;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return a = t.commit,
              s = t.state,
              r = i.pre,
              p = i.id,
              h = i.query,
              b = i.redirect,
              y = i.noUpdateUrl,
              g = i.url,
              w = void 0 === g ? '' : g,
              I = i.referrer,
              C = void 0 === I ? '' : I,
              e.prev = 2,
              s.dataDone = !1,
              k = Object(m['n']) (this.$userAgent.userAgent || ''),
              x = k.browser,
              T = x && x.name ? {
                browser: x.name
              }
               : {
              },
              P = {
                block: l['a'].btoa(n() (_)),
                rpage: l['a'].btoa(Object(f['a']) (w))
              },
              e.next = 9,
              c['a'].jsonp(''.concat(u['m']).concat(r, '/').concat(p, '/'), {
                headers: {
                  'User-Agent': this.$userAgent.userAgent,
                  Cookie: this.$cookies.cookie,
                  Referer: Object(f['a']) (C)
                },
                params: o() ({
                }, P, h, T)
              });
            case 9:
              if (O = e.sent, S = O.data, j = !(S && 'MS0001' === S.code), !j && v.log('isValid', j, 'data.code:', S.code), a('setError', !j), a('setRedirect', b), b && a('setValid', j), !S || 'A00000' !== S.code || !S.data) {
                e.next = 31;
                break
              }
              if (B = S.data, !y) {
                e.next = 20;
                break
              }
              return e.abrupt('return', a('setLoadInfo', B.playVideoInfo));
            case 20:
              B.token && a('setSecureJsonpToken', B.token),
              a('setTemplate', {
                data: B,
                redirect: b
              }),
              a('setCallappConfigs', B.callAppConfigs),
              a('setDiversionInfo', B.diversionInfo),
              a('setControlInfo', {
                controlInfo: B.controlInfo,
                query: h
              }),
              a('setCollectionInfo', B),
              a('setRecommendQuery', B.recommendQuery && B.recommendQuery.data ? B.recommendQuery.data : {
              }),
              B.seoInfo && (s.seoInfo = B.seoInfo),
              b && (s.channelId = s.template.vertical && !s.template.bodan ? B.verticalVideoInfo.channelId : B.playVideoInfo.cid),
              s.template.vertical && !s.template.bodan ? (a('setVerticalVideo', B.verticalVideoInfo || B.playVideoInfo), a('setVideo', B.playVideoInfo), a('setAlbum', B.playAlbumInfo), a('setLoadInfo', B.playVideoInfo))  : (B.verticalVideoInfo && a('setVerticalVideo', B.verticalVideoInfo), a('setLoadInfo', B.playVideoInfo), a('setVideo', B.playVideoInfo), a('setVipTag', B.vipTag), a('setAlbum', B.playAlbumInfo), a('setUser', B.playUserInfo), a('setPlayList', B.playList), b && (B.videoList && (N = Object(d['n']) (B.playAlbumInfo), B.videoList.updateInfo = N, a('setVideoList', B.videoList)), a('setPlayerBanner', B.playerBanner))),
              s.dataDone = !0;
            case 31:
              return e.abrupt('return', S.data);
            case 34:
              e.prev = 34,
              e.t0 = e['catch'](2),
              v.error(e.t0.constructor.name || '', e.t0.code || '', e.t0.message || ''),
              a('setError', !0);
            case 38:
            case 'end':
              return e.stop()
          }
        },
        e,
        this,
        [
          [2,
          34]
        ])
      })), k.apply(this, arguments)
    }
    function x(e, t) {
      var i = e.commit;
      i('setComment', t),
      i('setOpenComment', !0)
    }
    function T(e) {
      var t = e.commit;
      t('setOpenComment', !1)
    }
    function P(e, t) {
      var i = e.commit;
      i('setToastText', t)
    }
    function O(e, t) {
      var i = e.commit;
      i('setSourceListInfo', t)
    }
    function S(e, t) {
      o() (e.sourceListInfo, t)
    }
    function j(e, t) {
      var i = e.commit;
      i('setSourceSummary', t)
    }
    function B(e, t) {
      e.sourceSummary = t
    }
    function N(e, t) {
      var i = e.commit;
      i('setAlbumListInfo', t)
    }
    function q(e, t) {
      o() (e.albumListInfo, t)
    }
    function L(e, t) {
      var i = e.commit;
      i('setLayerPage', t)
    }
    function V(e, t) {
      e.layerPage = t
    }
    function D(e, t) {
      e.playList = t || {
      }
    }
    function A(e, t) {
      e.loadInfo = {
        qipuId: t.qipuId,
        vid: t.vid,
        duration: t.duration,
        cid: t.cid,
        aid: t.aid,
        imageUrl: t.imageUrl,
        videoName: t.videoName,
        purchaseType: t.purchaseType,
        commentAllowed: t.commentAllowed,
        isFeatureFilm: t.isFeatureFilm,
        videoType: t.videoType
      }
    }
    function E(e, t) {
      e.videoInfo = t || {
      }
    }
    function R(e, t) {
      e.vipTag = t || {
      }
    }
    function $(e, t) {
      var i = t.data,
      a = t.redirect,
      n = i.playTemplateType;
      if (e.superTemplate.horizontal = n === b, e.superTemplate.vertical = n === g, e.superTemplate.wechat = n === y, e.superTemplate.knowledge = n === w, e.subTemplate = Object(d['s']) (i.playVideoInfo), a) {
        e.template.bodan = !(!i.collectionInfo || !i.collectionInfo.id);
        var s = e.template.horizontal = e.superTemplate.horizontal;
        e.template.album = s && e.subTemplate.album,
        e.template.source = s && e.subTemplate.source,
        e.template.movie = s && e.subTemplate.movie,
        e.template.short = s && e.subTemplate.short,
        e.template.vertical = e.superTemplate.vertical,
        e.template.wechat = e.superTemplate.wechat,
        e.template.knowledge = e.superTemplate.knowledge
      }
    }
    function U(e, t) {
      e.albumInfo = t || {
      }
    }
    function H(e, t) {
      e.userInfo = t || {
      }
    }
    function F(e, t) {
      e.videoList = t || {
      }
    }
    function M(e, t) {
      e.playerBanner = t || {
      }
    }
    function Q(e, t) {
      t && (t.checking = I.includes(t.checkState), e.verticalVideoInfo = t, e.verticalVideoInfo.errCode = !t.qipuId || null)
    }
    function G(e, t) {
      e.verticalVideoInfo.errCode = t
    }
    function K(e, t) {
      e.layerOpen = t
    }
    function z(e, t) {
      e.layerId = t
    }
    function W(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      e.comment = t
    }
    function Y(e, t) {
      e.openComment = t
    }
    function J(e, t) {
      e.toastText = t
    }
    function X(e, t) {
      e.valid = t
    }
    function Z(e, t) {
      e.adInfoFeed = t
    }
    function ee(e, t) {
      e.error = t,
      t && v.log('error', t)
    }
    function te(e, t) {
      e.redirect = !!t
    }
    function ie(e, t) {
      e.videoType = t
    }
    function ae(e, t) {
      e.collectionInfo = t.collectionInfo ? t.collectionInfo : {
      }
    }
    function ne(e, t) {
      e.callappConfigs = t
    }
    function se(e, t) {
      e.diversionInfo = t
    }
    function oe(e, t) {
      var i = t.controlInfo;
      t.query;
      e.controlInfo = i || {
      }
    }
    function re(e, t) {
      e.recommendQuery = t
    }
    function ce(e, t) {
      e.secureJsonpToken = t || ''
    }
    t['a'] = {
      namespaced: !0,
      state: function () {
        return {
          page: 'play',
          callappConfigs: [
          ],
          diversionInfo: {
          },
          controlInfo: {
          },
          template: {
            horizontal: !1,
            album: !1,
            source: !1,
            movie: !1,
            short: !1,
            vertical: !1,
            wechat: !1,
            knowledge: !1,
            bodan: !1
          },
          subTemplate: {
            album: !1,
            source: !1,
            movie: !1,
            short: !1
          },
          superTemplate: {
            horizontal: !1,
            vertical: !1,
            wechat: !1,
            knowledge: !1
          },
          collectionInfo: {
          },
          channelId: '',
          loadInfo: {
          },
          videoInfo: {
          },
          videoType: 'normal',
          albumInfo: {
          },
          albumListInfo: {
          },
          layerPage: - 1,
          sourceListInfo: {
          },
          sourceSummary: [
          ],
          userInfo: {
          },
          videoList: {
            videos: [
            ]
          },
          playList: {
          },
          vipTag: {
            pingBack_manis: {
            },
            tags: [
            ]
          },
          verticalVideoInfo: {
          },
          playerBanner: {
          },
          seoInfo: {
          },
          layerOpen: !1,
          layerId: '',
          openComment: !1,
          comment: {
          },
          toastText: '',
          valid: !0,
          adInfoFeed: {
            show: !1,
            brandLogo: '',
            brandName: '',
            landingUrl: '',
            btnContent: '',
            ad_rseat: '',
            adfinish_block: '',
            videoQipuId: ''
          },
          error: !1,
          redirect: !0,
          baikeVideo: {
          },
          dataDone: !1,
          recommendQuery: {
          },
          secureJsonpToken: ''
        }
      },
      getters: {
        defaultCard: function (e) {
          return Object(p['g']) (e.template, e.subTemplate)
        },
        showShaoerAppBtn: function (e) {
          return e.channelId === + h['CHANNEL_SHAOER'] && 'true' === e.playerBanner.showQbb
        }
      },
      actions: {
        getPlay: C,
        openComment: x,
        closeComment: T,
        toastText: P,
        albumListInfo: N,
        layerPage: L,
        sourceListInfo: O,
        sourceSummary: j
      },
      mutations: {
        setComment: W,
        setOpenComment: Y,
        setLoadInfo: A,
        setTemplate: $,
        setVideo: E,
        setVipTag: R,
        setAlbum: U,
        setAlbumListInfo: q,
        setLayerPage: V,
        setSourceListInfo: S,
        setSourceSummary: B,
        setUser: H,
        setVideoList: F,
        setPlayerBanner: M,
        setVerticalVideo: Q,
        setVerticalErrCode: G,
        setLayerOpen: K,
        setLayerId: z,
        setToastText: J,
        setValid: X,
        setAdInfoFeed: Z,
        setError: ee,
        setRedirect: te,
        setVideoType: ie,
        setCollectionInfo: ae,
        setPlayList: D,
        setCallappConfigs: ne,
        setDiversionInfo: se,
        setControlInfo: oe,
        setRecommendQuery: re,
        setSecureJsonpToken: ce
      }
    }
  },
  '1a51': function (e, t, i) {
    'use strict';
    i.d(t, 'b', function () {
      return f
    }),
    i.d(t, 'd', function () {
      return m
    }),
    i.d(t, 'c', function () {
      return v
    }),
    i.d(t, 'a', function () {
      return b
    }),
    i.d(t, 'g', function () {
      return g
    }),
    i.d(t, 'f', function () {
      return I
    }),
    i.d(t, 'h', function () {
      return C
    }),
    i.d(t, 'e', function () {
      return x
    });
    var a = i('cebc'),
    n = (i('96cf'), i('3b8d')),
    s = i('936f'),
    o = i('8d81'),
    r = i.n(o),
    c = i('b2e7'),
    l = i('2c06'),
    u = '//subscription.iqiyi.com/dingyue/api/subscribe.action',
    d = '//subscription.iqiyi.com/dingyue/api/unsubscribe.action',
    p = '//subscription.iqiyi.com/dingyue/api/isSubscribed.action',
    h = '//subscription.iqiyi.com/dingyue/api/areSubscribed.action',
    f = 1,
    m = 2,
    v = 7,
    b = 'play_favorited';
    function y(e) {
      return {
        authcookie: Object(c['M']) () ? Object(c['x']) ()  : '',
        ckuid: Object(c['M']) () ? '' : Object(c['w']) (),
        agent_type: Object(l['s']) ()
      }
    }
    function g() {
      return w.apply(this, arguments)
    }
    function w() {
      return w = Object(n['a']) (regeneratorRuntime.mark(function e() {
        var t,
        i,
        n,
        o,
        l = arguments;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return t = l.length > 0 && void 0 !== l[0] ? l[0] : {
              },
              i = Object(a['a']) ({
                subType: t.subType,
                channelId: t.cid,
                subKey: t.subKey,
                antiCsrf: r() (Object(c['x']) () || Object(c['w']) ())
              }, y(t)),
              e.next = 4,
              s['a'].jsonp(u, {
                params: i
              }).catch (function () {
              });
            case 4:
              return n = e.sent,
              o = n && n.data,
              e.abrupt('return', {
                success: o && 'A00000' === o.code,
                isLimited: o && 'A00200' === o.code
              });
            case 7:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), w.apply(this, arguments)
    }
    function I() {
      return _.apply(this, arguments)
    }
    function _() {
      return _ = Object(n['a']) (regeneratorRuntime.mark(function e() {
        var t,
        i,
        n,
        o,
        l = arguments;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return t = l.length > 0 && void 0 !== l[0] ? l[0] : {
              },
              i = Object(a['a']) ({
                subType: t.subType,
                channelId: t.cid,
                subKey: t.subKey
              }, y(t), {
                antiCsrf: r() (Object(c['x']) () || Object(c['w']) ())
              }),
              e.next = 4,
              s['a'].jsonp(d, {
                params: i
              }).catch (function () {
              });
            case 4:
              return n = e.sent,
              o = n && n.data,
              e.abrupt('return', {
                success: o && 'A00000' === o.code
              });
            case 7:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), _.apply(this, arguments)
    }
    function C() {
      return k.apply(this, arguments)
    }
    function k() {
      return k = Object(n['a']) (regeneratorRuntime.mark(function e() {
        var t,
        i,
        n,
        o,
        r = arguments;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
              },
              i = Object(a['a']) ({
                subType: t.subType,
                channelId: t.cid,
                subKey: t.subKey
              }, y(t)),
              e.next = 4,
              s['a'].jsonp(p, {
                params: i
              }).catch (function () {
              });
            case 4:
              return n = e.sent,
              o = n && n.data,
              e.abrupt('return', o && 'A00000' === o.code);
            case 7:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), k.apply(this, arguments)
    }
    function x() {
      return T.apply(this, arguments)
    }
    function T() {
      return T = Object(n['a']) (regeneratorRuntime.mark(function e() {
        var t,
        i,
        n,
        o,
        r = arguments;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return t = r.length > 0 && void 0 !== r[0] ? r[0] : {
              },
              i = Object(a['a']) ({
                items: t.items
              }, y(t)),
              e.next = 4,
              s['a'].jsonp(h, {
                params: i
              }).catch (function () {
              });
            case 4:
              return n = e.sent,
              o = n && n.data,
              e.abrupt('return', o && 'A00000' === o.code ? o.data : null);
            case 7:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), T.apply(this, arguments)
    }
  },
  2171: function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box m-box-borderST',
        attrs: {
          id: 'comment'
        }
      }, [
        i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('PlayComment', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: '605251_comments',
                expression: '\'605251_comments\''
              }
            ],
            attrs: {
              'video-info': e.videoInfo,
              'is-hide-load-error': !0,
              'qipu-id': e.videoInfo.qipuId,
              aid: e.videoInfo.aid,
              cid: e.videoInfo.cid,
              'show-num': 3
            }
          })
        ], 1)
      ])
    },
    n = [
    ],
    s = i('cebc'),
    o = i('2f62'),
    r = i('4de8'),
    c = {
      name: 'PlayLongComment',
      components: {
        PlayComment: r['a']
      },
      computed: Object(s['a']) ({
      }, Object(o['e']) ('play', [
        'videoInfo'
      ]))
    },
    l = c,
    u = i('2877'),
    d = Object(u['a']) (l, a, n, !1, null, null, null);
    t['a'] = d.exports
  },
  2592: function (e, t, i) {
    t = e.exports = i('2350') (!1),
    t.push([e.i,
    '.slide-fade-enter-active[data-v-52499120]{transition:all .3s ease}.slide-fade-leave-active[data-v-52499120]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-52499120],.slide-fade-leave-to[data-v-52499120]{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:0}',
    ''])
  },
  '27f4': function (e, t, i) {
    'use strict';
    var a = i('03b5'),
    n = i.n(a);
    n.a
  },
  '2b04': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.isShow && e.recommendQuery.length ? i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: 'h5_block_player_consearch',
            expression: '\'h5_block_player_consearch\''
          }
        ],
        staticClass: 'm-box'
      }, [
        e._m(0),
        i('section', {
          staticClass: 'm-relatedHotWords'
        }, [
          i('ul', {
            staticClass: 'relatedHotWords-list'
          }, e._l(e.recommendQuery, function (t, a) {
            return i('li', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: 'h5_player_consearch',
                  expression: '\'h5_player_consearch\''
                }
              ],
              key: a,
              staticClass: 'hotWords-item',
              on: {
                click: function (i) {
                  return e.toHotSearch(t)
                }
              }
            }, [
              e._v(e._s(t.query))
            ])
          }), 0)
        ])
      ])  : e._e()
    },
    n = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box-items  m-box-items-full'
        }, [
          i('section', {
            staticClass: 'm-title'
          }, [
            i('h3', {
              staticClass: 'c-title-des'
            }, [
              e._v('相关热搜')
            ])
          ])
        ])
      }
    ],
    s = (i('96cf'), i('3b8d')),
    o = i('cebc'),
    r = i('2f62'),
    c = i('ba45'),
    l = i('8296'),
    u = {
      name: 'PlayRelatedHotWords',
      data: function () {
        return {
          isShow: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'recommendQuery'
      ])),
      mounted: function () {
        var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.$GlobalSwitcher.getFilters('player_corrseach', 'play');
              case 2:
                this.isShow = e.sent;
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
      methods: {
        getSubType: function () {
          var e = this.$GlobalSwitcher.getParams('player_corrseach', 'play');
          if (e) return e.subtype
        },
        toHotSearch: function (e) {
          Object(c['x']) ({
            keyword: Object(l['u']) (e.query),
            source: e.source ? e.source : 'h5_rcmd',
            subtype: this.getSubType()
          }).catch (function () {
            Object(c['j']) (Object(c['l']) ())
          })
        }
      }
    },
    d = u,
    p = i('2877'),
    h = Object(p['a']) (d, a, n, !1, null, null, null);
    t['a'] = h.exports
  },
  '4de8': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('LoadPage', {
        ref: 'loadPage',
        attrs: {
          callback: e.loadComments
        },
        scopedSlots: e._u([e.isHideLoadError ? {
          key: 'error',
          fn: function () {
            return [i('div', {
              staticClass: 'hide'
            })]
          },
          proxy: !0
        }
         : null], null, !0)
      }, [
        e.isShow ? i('div', {
          staticClass: 'm-commentNew'
        }, [
          i('div', {
            staticClass: 'commentNew-title'
          }, [
            e._v('评论'),
            i('span', {
              staticClass: 'num'
            }, [
              e._v('(' + e._s(e._f('billionLimit') (e.count)) + ')')
            ])
          ]),
          e._l(e.comments, function (t, a) {
            return i('div', {
              key: a,
              staticClass: 'commentNew-info'
            }, [
              i('PlayCommentUserInfo', {
                attrs: {
                  comment: t
                },
                scopedSlots: e._u([{
                  key: 'extra',
                  fn: function () {
                    return [i('PlayCommentLike', {
                      attrs: {
                        comment: t,
                        'like-key': e.likeKey
                      }
                    })]
                  },
                  proxy: !0
                }
                ], null, !0)
              }),
              i('div', {
                staticClass: 'content'
              }, [
                i('div', {
                  staticClass: 'content-info'
                }, [
                  i('div', {
                    domProps: {
                      innerHTML: e._s(t.content)
                    }
                  }),
                  i('portal-target', {
                    attrs: {
                      name: 'more',
                      slim: ''
                    }
                  }, [
                    i('ButtonDown', {
                      attrs: {
                        subtype: e.subtype,
                        'extral-options': e.extralOptions,
                        'to-page': 'play',
                        href: 'javascript:void(0)',
                        tag: 'a'
                      }
                    }, [
                      i('a', {
                        directives: [
                          {
                            name: 'show-pingback',
                            rawName: 'v-show-pingback',
                            value: e.morePingback,
                            expression: 'morePingback'
                          },
                          {
                            name: 'pingback',
                            rawName: 'v-pingback',
                            value: e.morePingback,
                            expression: 'morePingback'
                          }
                        ],
                        staticClass: 'c-link',
                        attrs: {
                          href: 'javascript:void(0);'
                        }
                      }, [
                        e._v('更多')
                      ])
                    ])
                  ], 1)
                ], 1),
                t.picture ? i('div', {
                  staticClass: 'img'
                }, [
                  i('img', {
                    attrs: {
                      src: e.removeProtocol(t.picture.url)
                    },
                    on: {
                      click: function (i) {
                        return e.showImageViewer(t.picture.url)
                      }
                    }
                  })
                ])  : e._e()
              ])
            ], 1)
          }),
          i('div', {
            staticClass: 'm-iqylink-diversion'
          }, [
            e._t('callApp', [
              i('ButtonDown', {
                attrs: {
                  subtype: e.subtype,
                  'extral-options': e.extralOptions,
                  'to-page': 'play',
                  href: 'javascript:void(0)',
                  tag: 'a'
                }
              }, [
                i('a', {
                  directives: [
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: e.callappPingback,
                      expression: 'callappPingback'
                    },
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: e.callappPingback,
                      expression: 'callappPingback'
                    }
                  ],
                  staticClass: 'c-btn c-btn-block',
                  attrs: {
                    href: 'javascript:;'
                  }
                }, [
                  i('i', {
                    staticClass: 'c-glyphicon c-glyphicon-iqy'
                  }),
                  e._v('打开爱奇艺APP，参与' + e._s(e._f('billionLimit') (e.count)) + '条热门大讨论！\n          ')
                ])
              ])
            ], {
              count: e._f('formatNum') (e.count)
            })
          ], 2)
        ], 2)  : e._t('empty', null, {
          subtype: e.subtype,
          extralOptions: e.extralOptions,
          callappPingback: e.callappPingback
        }),
        e.pictureViewerShow ? i('ImageViewer', {
          attrs: {
            images: e.imageViewerList,
            'scroll-top': e.scrollTop,
            show: e.pictureViewerShow
          },
          on: {
            'update:show': function (t) {
              e.pictureViewerShow = t
            }
          }
        })  : e._e()
      ], 2)
    },
    n = [
    ],
    s = (i('759f'), i('d25f'), i('a4bb')),
    o = i.n(s),
    r = (i('ac6a'), i('f3e2'), i('96cf'), i('3b8d')),
    c = (i('c5f6'), i('87ac')),
    l = i('b2e7'),
    u = i('38ff'),
    d = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'user-info'
      }, [
        i('div', {
          staticClass: 'info-link'
        }, [
          i('div', {
            staticClass: 'c-photo',
            style: 'background-image:url(' + (e.comment.userInfo.icon || e.defaultIcon) + ')'
          })
        ]),
        i('div', {
          staticClass: 'user-name'
        }, [
          i('div', {
            staticClass: 'name'
          }, [
            e._v(e._s(e.comment.userInfo.uname))
          ]),
          i('div', {
            staticClass: 'des'
          }, [
            i('span', {
              staticClass: 'c-des'
            }, [
              e._v(e._s(e._f('formatTime') (e.comment.addTime)))
            ])
          ])
        ]),
        e._t('extra')
      ], 2)
    },
    p = [
    ],
    h = i('3260'),
    f = {
      name: 'PlayWechatComment',
      filters: {
        formatTime: h['a']
      },
      props: {
        comment: {
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
          defaultIcon: '//img7.iqiyipic.com/passport/20180721/b2/49/passport_1609163350_153213421255929_130_130.jpg'
        }
      }
    },
    m = f,
    v = i('2877'),
    b = Object(v['a']) (m, d, p, !1, null, null, null),
    y = b.exports,
    g = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return 'number' === typeof e.comment.likes ? i('div', [
        i('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '808201_thumbsup',
              expression: '\'808201_thumbsup\''
            }
          ],
          class : [
            'c-love-link',
            {
              selected: e.comment.agree
            }
          ],
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: function (t) {
              return e.onClickLike(e.comment)
            }
          }
        }, [
          i('span', {
            staticClass: 'num'
          }, [
            e._v(e._s(e.comment.likes))
          ]),
          i('i', {
            staticClass: 'commentNew-icon icon-love'
          }),
          i('i', {
            staticClass: 'c-videoPlayPage-like-animation'
          })
        ]),
        i('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toast,
              expression: 'toast'
            }
          ],
          attrs: {
            text: e.toast
          }
        })
      ], 1)  : e._e()
    },
    w = [
    ],
    I = i('795b'),
    _ = i.n(I),
    C = i('3b2f'),
    k = i('8296'),
    x = {
      name: 'PlayCommentLike',
      components: {
        AuraToast: C['a']
      },
      props: {
        comment: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        likeKey: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          animationShow: !1,
          toast: ''
        }
      },
      methods: {
        onClickLike: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a,
            n;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  this.sendLikeStatus(t);
                case 2:
                  i = e.sent,
                  a = t.agree,
                  n = t.likes,
                  i ? (this.toast = '', !a && this.showAnimation())  : (this.toast = a ? '取消点赞失败，请重试' : '点赞失败，请重试', this.hideToast()),
                  t.agree = i ? !a : a,
                  i && (t.likes = t.agree ? ++n : --n);
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
        sendLikeStatus: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (i = !t.agree, !Object(l['M']) ()) {
                    e.next = 5;
                    break
                  }
                  return e.abrupt('return', i ? Object(c['i']) (t.id)  : Object(c['k']) (t.id));
                case 5:
                  return a = Object(c['f']) (this.likeKey) || {
                  },
                  i ? a[t.id] = i : delete a[t.id],
                  Object(c['m']) (this.likeKey, a),
                  e.abrupt('return', !0);
                case 9:
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
        showAnimation: function () {
          var e = this;
          return this.animationShow = !0,
          new _.a(function (t) {
            setTimeout(function () {
              e.animationShow = !1,
              t()
            }, 1000)
          })
        },
        hideToast: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Object(k['S']) (1000);
                case 2:
                  this.toast = '';
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
        }()
      }
    },
    T = x,
    P = Object(v['a']) (T, g, w, !1, null, null, null),
    O = P.exports,
    S = i('090f'),
    j = i('465e'),
    B = i('45bc'),
    N = i('aa91'),
    q = {
      name: 'PlayComment',
      components: {
        PlayCommentUserInfo: y,
        PlayCommentLike: O,
        ImageViewer: j['a'],
        ButtonDown: u['a'],
        LoadPage: N['a']
      },
      filters: {
        formatNum: B['c'],
        billionLimit: B['a']
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
        qipuId: {
          type: Number,
          required: !0
        },
        aid: {
          type: Number,
          required: !0
        },
        cid: {
          type: Number,
          required: !0
        },
        showNum: {
          type: Number,
        default:
          3
        },
        morePingback: {
          type: [
            String,
            Object
          ],
        default:
          ''
        },
        callappPingback: {
          type: [
            String,
            Object
          ],
        default:
          ''
        },
        subtype: {
          type: [
            String,
            Number
          ],
        default:
          'H5zkpl_828'
        },
        isHideLoadError: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          commentResponse: {
          },
          comments: [
          ],
          likeKey: c['a'],
          imageViewerList: [
          ],
          pictureViewerShow: !1,
          scrollTop: 0
        }
      },
      computed: {
        count: function () {
          return this.commentResponse.totalCount
        },
        isShow: function () {
          return this.count && 0 !== this.comment.commentCount
        },
        extralOptions: function () {
          return this.qipuId ? {
            aid: this.aid,
            tvid: this.qipuId,
            cid: this.cid,
            vid: this.vid,
            video: this.videoInfo
          }
           : {
          }
        }
      },
      watch: {
        comments: function (e, t) {
          this.syncCommentLike()
        },
        qipuId: function (e, t) {
          e !== t && (this.getCount(), this.loadComments())
        }
      },
      mounted: function () {
        this.getCount()
      },
      methods: {
        getCount: function () {
          var e = this;
          Object(c['g']) (this.qipuId, function (t) {
            e.comment = t && 'A00000' === t.data.code ? t.data.data : {
            }
          })
        },
        loadComments: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  this.getComments();
                case 2:
                  this.commentResponse = e.sent,
                  this.sliceComments();
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
        getComments: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = {
                    types: 'hot,time',
                    tvid: this.qipuId
                  },
                  e.abrupt('return', Object(c['e']) (t));
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
        sliceComments: function () {
          var e = this.getFormatComments();
          this.comments = e.slice(0, this.showNum)
        },
        syncCommentLike: function () {
          var e = Object(c['f']) (this.likeKey);
          if (!e) return !1;
          this.comments.forEach(function (t) {
            var i = e[t.id];
            t.agree = i || t.agree,
            t.likes = i ? ++t.likes : t.likes
          }),
          Object(l['M']) () && (o() (e).forEach(function (t) {
            var i = t && Object(c['i']) (t);
            i && delete e[t]
          }), Object(c['m']) (this.likeKey, e))
        },
        showImageViewer: function (e) {
          this.pictureViewerShow = !0,
          this.imageViewerList[0] = {
            url: e
          },
          this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        },
        getFormatComments: function () {
          var e = this.commentResponse.hot,
          t = this.commentResponse.comments,
          i = e && e.length;
          return i >= this.showNum ? e : (t = t.filter(function (t) {
            return !i || e.some(function (e) {
              return t.id !== e.id
            })
          }), e.concat(t))
        },
        removeProtocol: S['a']
      }
    },
    L = q,
    V = Object(v['a']) (L, a, n, !1, null, null, null);
    t['a'] = V.exports
  },
  '4e08': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.userInfo && e.userInfo.userName ? i('div', {
        key: 'videoUser',
        staticClass: 'm-ipRelation m-ipRelation-home m-ipRelation-spacing'
      }, [
        i('ul', {
          staticClass: 'ipRelation-list'
        }, [
          i('li', [
            i('a', {
              staticClass: 'link-item',
              attrs: {
                href: 'javascript:;'
              },
              on: {
                click: function (t) {
                  return e.toUserPage()
                }
              }
            }, [
              i('div', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '605251_head',
                    expression: '\'605251_head\''
                  }
                ],
                staticClass: 'img',
                style: 'background-image:url(' + e.userInfo.avatar + ')'
              }),
              i('div', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '605251_head',
                    expression: '\'605251_head\''
                  }
                ],
                staticClass: 'info'
              }, [
                i('div', {
                  staticClass: 'c-title c-title-row'
                }, [
                  i('span', {
                    staticClass: 'title-txt'
                  }, [
                    e._v(e._s(e.userInfo.userName))
                  ]),
                  'pgc' === e.type ? i('i', {
                    staticClass: 'icon-home-i'
                  })  : e._e()
                ]),
                i('div', {
                  staticClass: 'c-des'
                }, [
                  'pgc' == e.type ? i('span', [
                    e._v('\n              ' + e._s(e.userInfo.recommendation || '爱奇艺爱频道') + '\n            ')
                  ])  : i('span', [
                    e.userInfo.userVideoCount ? i('span', {
                      staticClass: 'c-info'
                    }, [
                      e._v('\n                ' + e._s(e._f('chinaNum') (e.userInfo.userVideoCount)) + '个视频\n              ')
                    ])  : e._e(),
                    e.userInfo.followerCount ? i('span', {
                      staticClass: 'c-info'
                    }, [
                      e._v('\n                ' + e._s(e._f('chinaNum') (e.userInfo.followerCount)) + '个粉丝\n              ')
                    ])  : e._e()
                  ])
                ])
              ])
            ]),
            e.showSubBtn ? i('a', {
              staticClass: 'c-handle-link',
              class : {
                'c-update-link': e.isSubed
              },
              attrs: {
                href: 'javascript:;'
              }
            }, [
              i('i', {
                staticClass: 'c-glyphicon c-glyphicon-add',
                class : {
                  hide: e.isSubed
                }
              }),
              e.isSubed ? i('span', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '605251_more_space',
                    expression: '\'605251_more_space\''
                  }
                ],
                on: {
                  click: e.toUserPage
                }
              }, [
                e._v('查看更新')
              ])  : i('span', {
                on: {
                  click: e.addSub
                }
              }, [
                e._v('关注')
              ])
            ])  : e._e()
          ])
        ]),
        e.popTitle || e.popText ? i('AuraPopup', {
          attrs: {
            title: e.popTitle,
            info: e.popText,
            'left-button-text': '知道了',
            'right-button-text': '关注更新'
          },
          on: {
            leftButtonClick: e.closePop,
            rightButtonClick: e.toSubList
          }
        })  : e._e(),
        i('AuraToast', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.toast,
              expression: 'toast'
            }
          ],
          attrs: {
            text: e.toast
          }
        })
      ], 1)  : e._e()
    },
    n = [
    ],
    s = (i('96cf'), i('3b8d')),
    o = i('cebc'),
    r = i('2f62'),
    c = i('45bc'),
    l = i('fd12'),
    u = i('1533'),
    d = i('b2e7'),
    p = i('ab22'),
    h = i('5118'),
    f = i('5321'),
    m = {
      name: 'PlayVideoUser',
      components: {
        AuraPopup: l['a']
      },
      filters: {
        chinaNum: c['b']
      },
      props: {
        subRseat: {
          type: String,
        default:
          '605251_desclk'
        }
      },
      data: function () {
        return {
          isSubed: !1,
          popTitle: '',
          popText: '',
          toast: '',
          uid: 0,
          isShow: !1,
          pageUrl: '',
          liveEntryTitle: ''
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'userInfo',
        'videoInfo',
        'template'
      ]), {
        type: function () {
          return 4 === this.userInfo.verifyState && 2 !== this.userInfo.copyright ? 'pgc' : 'ugc'
        },
        showSubBtn: function () {
          return !Object(d['M']) () || Object(d['M']) () && this.uid !== this.userInfo.userId
        }
      }),
      watch: {
        'userInfo.userId': function (e) {
          this.isFriend()
        }
      },
      beforeMount: function () {
        this.isFriend(),
        this.uid = + Object(d['C']) (),
        this.getLiveEntry()
      },
      methods: {
        toSubList: function () {
          this.$router.push('/u/sub/')
        },
        toUserPage: function () {
          this.userInfo.profileUrl && (location.href = this.userInfo.profileUrl)
        },
        isFriend: function () {
          var e = this;
          Object(d['M']) () && Object(u['d']) (this.uid, this.userInfo.userId).then(function (t) {
            e.isSubed = t && t.data[0]
          })
        },
        addSub: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (Object(f['l']) ({
                    rseat: this.subRseat
                  }), !Object(d['M']) ()) {
                    e.next = 8;
                    break
                  }
                  return e.next = 4,
                  Object(u['c']) ({
                    uids: this.userInfo.userId
                  }).catch (function () {
                    return !1
                  });
                case 4:
                  t = e.sent,
                  t ? (this.isSubed = !0, this.popTitle = '关注成功', this.popText = '您可以进入我的→关注<br>查看所有关注动态')  : (this.isSubed = !1, this.showToast('关注失败 请稍后再试')),
                  e.next = 9;
                  break;
                case 8:
                  Object(h['setTimeout']) (function () {
                    window.location.href = '/user.html'
                  }, 200);
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
        confirmCancelSub: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0,
                  e.next = 3,
                  Object(u['e']) ({
                    uids: this.userInfo.userId
                  });
                case 3:
                  t = e.sent,
                  t && (this.isSubed = !1),
                  e.next = 10;
                  break;
                case 7:
                  e.prev = 7,
                  e.t0 = e['catch'](0),
                  this.showToast('取消关注失败，请重试');
                case 10:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this,
            [
              [0,
              7]
            ])
          })); function t() {
            return e.apply(this, arguments)
          }
          return t
        }(),
        getLiveEntry: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.template.source && 8 === this.videoInfo.cid) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  if (!this.videoInfo || !this.userInfo) {
                    e.next = 9;
                    break
                  }
                  return e.next = 5,
                  Object(p['m']) ({
                    tids: this.videoInfo.tagIds && this.videoInfo.tagIds.length ? this.videoInfo.tagIds.join(',')  : '',
                    userId: this.userInfo.userId,
                    tvid: this.videoInfo.tvid
                  });
                case 5:
                  t = e.sent,
                  this.isShow = !!(t && t.shortTitle && t.pageUrl),
                  this.pageUrl = t && t.pageUrl,
                  this.liveEntryTitle = t && t.shortTitle;
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
        showToast: function (e) {
          var t = this;
          this.toast = e,
          Object(h['setTimeout']) (function () {
            t.toast = ''
          }, 200)
        },
        closePop: function () {
          this.popTitle = '',
          this.popText = ''
        }
      }
    },
    v = m,
    b = i('2877'),
    y = Object(b['a']) (v, a, n, !1, null, null, null);
    t['a'] = y.exports
  },
  '59ae': function (e, t, i) {
    'use strict';
    var a = i('642f'),
    n = i.n(a);
    n.a
  },
  '5cf8': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('BottomAppBannerHot', {
        attrs: {
          cids: String(e.videoInfo.cid),
          block: '804231_bfyfuceng',
          rseat: 'mcltdown_8dbfc'
        }
      })
    },
    n = [
    ],
    s = i('cebc'),
    o = i('2f62'),
    r = i('686b'),
    c = {
      name: 'PlayBottomAppHot',
      components: {
        BottomAppBannerHot: r['a']
      },
      computed: Object(s['a']) ({
      }, Object(o['e']) ('play', [
        'videoInfo'
      ]))
    },
    l = c,
    u = i('2877'),
    d = Object(u['a']) (l, a, n, !1, null, null, null);
    t['a'] = d.exports
  },
  '5fe1': function (e, t, i) {
    'use strict';
    i.d(t, 'a', function () {
      return c
    }),
    i.d(t, 'b', function () {
      return l
    }),
    i.d(t, 'c', function () {
      return u
    }),
    i.d(t, 'd', function () {
      return m
    }),
    i.d(t, 'e', function () {
      return b
    }),
    i.d(t, 'g', function () {
      return y
    }),
    i.d(t, 'f', function () {
      return w
    });
    i('96cf'),
    i('a481'),
    i('7514');
    var a = i('3b8d'),
    n = i('936f'),
    s = i('bc3a'),
    o = i.n(s),
    r = i('b2e7'),
    c = 'https://cashier.iqiyi.com/cashier/commonCashier/commonCashier.html',
    l = 'play_knowledge_pay',
    u = 'package_item_pay',
    d = '//api-kpp.if.iqiyi.com/api/v1/qimao/order/createPdOrder',
    p = '//pub.m.iqiyi.com/h5/main/knowledge/package',
    h = {
    },
    f = {
    };
    function m(e) {
      return v.apply(this, arguments)
    }
    function v() {
      return v = Object(a['a']) (regeneratorRuntime.mark(function e(t) {
        var i,
        a,
        s,
        o;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              if (i = ''.concat(t.pid).concat(t.albumId), !h[i]) {
                e.next = 5;
                break
              }
              return e.abrupt('return', h[i]);
            case 5:
              return a = {
                pid: t.pid,
                contentId: t.albumId,
                platform: '97ae2982356f69d8',
                P00001: Object(r['x']) ()
              },
              e.next = 8,
              n['a'].jsonp(d, {
                params: a
              }).catch (function () {
              });
            case 8:
              return s = e.sent,
              o = s && s.data ? s.data.data : {
              },
              o.success = o && 'A00000' === o.resultCode,
              o.hasPay = 'Q00403' === o.resultCode,
              o.success && (h[i] = o),
              e.abrupt('return', o);
            case 14:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), v.apply(this, arguments)
    }
    function b(e) {
      var t = [
        /第[\d]*集/,
        /[\d]*\./,
        /[\d]*、/,
        /[\d]*\s/
      ];
      return t.find(function (t) {
        t.test(e) && (e = e.replace(t, ''))
      }),
      e
    }
    function y(e) {
      return g.apply(this, arguments)
    }
    function g() {
      return g = Object(a['a']) (regeneratorRuntime.mark(function e(t) {
        var i;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              o.a.get(t);
            case 2:
              if (i = e.sent, 200 !== i.status) {
                e.next = 5;
                break
              }
              return e.abrupt('return', i.data);
            case 5:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), g.apply(this, arguments)
    }
    function w(e) {
      return I.apply(this, arguments)
    }
    function I() {
      return I = Object(a['a']) (regeneratorRuntime.mark(function e(t) {
        var i,
        a,
        s;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              if (!f[t]) {
                e.next = 4;
                break
              }
              return e.abrupt('return', f[t]);
            case 4:
              return i = ''.concat(p, '/').concat(t, '/'),
              e.next = 7,
              n['a'].jsonp(i);
            case 7:
              if (a = e.sent, s = a && a.data, !s || 'A00000' !== s.code) {
                e.next = 12;
                break
              }
              return f[t] = s.data,
              e.abrupt('return', s.data);
            case 12:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), I.apply(this, arguments)
    }
  },
  '642f': function (e, t, i) {
    var a = i('07de');
    'string' === typeof a && (a = [
      [e.i,
      a,
      '']
    ]),
    a.locals && (e.exports = a.locals);
    var n = i('499e').default;
    n('58a82b76', a, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  '6f42': function (e, t, i) {
    'use strict';
    var a,
    n = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        i('div', {
          directives: [
            {
              name: 'protect',
              rawName: 'v-protect'
            }
          ],
          class : [
            e.bannerClass
          ]
        }, [
          e.enable.shaoer && e.showShaoerAppBtn ? i('PlayAppBannerShaoer', {
            attrs: {
              type: 'banner',
              'player-banner': e.playerBanner,
              'qipu-id': e.videoInfo.qipuId,
              aid: e.videoInfo.aid
            }
          })  : e.enable.dongman && e.isDongman ? i('ButtonDown', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: '903213_badaxiazai',
                expression: '\'903213_badaxiazai\''
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '903213_badaxiazai',
                expression: '\'903213_badaxiazai\''
              }
            ],
            staticClass: 'c-btn c-btn-block',
            attrs: {
              'schema-url': 'iqiyi-acg://com.qiyi.acg?target=video_detail&QIPU_ID=' + e.videoInfo.qipuId + '&s1=basem_pb',
              'to-page': 'custom',
              'down-app-android-url': '//mbdapp.iqiyi.com/j/acg/acg_13165.apk',
              'down-app-ios-url': '//itunes.apple.com/cn/app/id1317763917'
            }
          }, [
            i('i', {
              staticClass: 'qibabu-icon',
              staticStyle: {
                'background-image': 'url(//www.iqiyipic.com/common/fix/h5-aura/dongman-icon.png)'
              }
            }),
            e._v('下载叭嗒看动漫 免费无广告\n    ')
          ])  : i('PlayButtonDown', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: e.playerBanner.block || '804231_bfybutton',
                expression: 'playerBanner.block || \'804231_bfybutton\''
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: e.playerBanner.rseat || 'mcltdown_7bfqbt',
                expression: 'playerBanner.rseat || \'mcltdown_7bfqbt\''
              }
            ],
            class : [
              e.buttonClassFinal
            ],
            style: e.buttonStyle,
            attrs: {
              'is-to-hot': e.isNoAd,
              subtype: e.subtype,
              'down-app-android-url': '//mbdapp.iqiyi.com/j/ap/iqiyi_1536.apk'
            }
          }, [
            i('i', {
              class : e.iconClass
            }),
            e._v('\n      ' + e._s(e.tipText) + '\n    ')
          ])
        ], 1)
      ])
    },
    s = [
    ],
    o = (i('96cf'), i('3b8d')),
    r = (i('7f7f'), i('e814')),
    c = i.n(r),
    l = i('cebc'),
    u = i('bd86'),
    d = i('4f30'),
    p = i('2f62'),
    h = i('cf20'),
    f = i('f3d8'),
    m = i('38ff'),
    v = i('bfde'),
    b = 'LONG',
    y = 'SHORT',
    g = (a = {
    }, Object(u['a']) (a, b, ''), Object(u['a']) (a, y, 'shortplayer_banner'), a),
    w = {
      name: 'PlayAppBanner',
      components: {
        PlayAppBannerShaoer: f['a'],
        PlayButtonDown: h['a'],
        ButtonDown: m['a']
      },
      props: {
        bannerClass: {
          type: String,
        default:
          'm-iqylink-guide'
        },
        buttonClass: {
          type: String,
        default:
          ''
        },
        enable: {
          type: Object,
        default:
          function () {
            return {
              shaoer: !0,
              dongman: !0,
              useStatic: !1
            }
          }
        },
        isVip: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          isNoAd: !1,
          noAdSubtype: ''
        }
      },
      computed: Object(l['a']) ({
      }, Object(p['e']) ('play', [
        'playerBanner',
        'videoInfo',
        'channelId',
        'template',
        'loadInfo'
      ]), Object(p['c']) ('play', [
        'showShaoerAppBtn'
      ]), {
        isDongman: function () {
          return this.channelId === + d['CHANNEL_DONGMAN']
        },
        isInteraction: function () {
          return 1 === c() (this.videoInfo.interactionType)
        },
        useGif: function () {
          return !this.isNoAd && !this.isInteraction && this.playerBanner && this.playerBanner.imageBanner && !this.isVip && !this.useStatic
        },
        buttonClassFinal: function () {
          return this.isVip ? 'c-btn-viplink c-btn c-btn-block' : this.useGif ? 'c-guide-img' : 'c-btn c-btn-block'
        },
        iconClass: function () {
          return this.useGif ? '' : 'c-glyphicon c-glyphicon-iqy'
        },
        tmpl: function () {
          return this.template.album || this.template.source ? b : this.template.short ? y : ''
        },
        tipText: function () {
          return this.useGif ? '' : this.isInteraction ? '打开爱奇艺，体验互动视频' : this.isNoAd ? '打开爱奇艺，免广告抢先看完整视频' : this.playerBanner.name && !this.useGif ? this.playerBanner.name : '打开爱奇艺，马上观看完整视频！'
        },
        buttonStyle: function () {
          return {
            backgroundImage: this.useGif ? 'url('.concat(this.playerBanner.imageBanner, ')')  : ''
          }
        },
        subtype: function () {
          return this.isNoAd ? this.noAdSubtype : '149'
        },
        toPage: function () {
          return this.isNoAd,
          ''
        }
      }),
      watch: {
        'loadInfo.qipuId': function (e, t) {
          this.loadInfo.qipuId && this.checkNoAd()
        }
      },
      beforeMount: function () {
        this.useStatic = Object(v['b']) ()
      },
      mounted: function () {
        var e = this;
        setTimeout(function () {
          e.checkNoAd()
        })
      },
      methods: {
        checkNoAd: function () {
          var e = Object(o['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t = g[this.tmpl], t) {
                    e.next = 4;
                    break
                  }
                  return this.isNoAd = !1,
                  e.abrupt('return');
                case 4:
                  return e.next = 6,
                  this.$GlobalSwitcher.getFilters(t, 'play');
                case 6:
                  if (i = e.sent, a = this.$GlobalSwitcher.getParams(t, 'play'), this.isNoAd = i, a) {
                    e.next = 11;
                    break
                  }
                  return e.abrupt('return');
                case 11:
                  this.noAdSubtype = a.subtype;
                case 12:
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
    },
    I = w,
    _ = i('2877'),
    C = Object(_['a']) (I, n, s, !1, null, null, null);
    t['a'] = C.exports
  },
  '70a9': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        i('PlayInfoLayer', e._g(e._b({
          ref: 'layer',
          attrs: {
            modal: !1,
            'associated-id': e.qipuId,
            'close-btn': 'c-pop-link',
            'close-icon': 'c-playPage-icon c-playPage-over',
            'pop-class': 'm-video-hot-pop',
            name: 'm-hotLayer'
          },
          scopedSlots: e._u([{
            key: 'content',
            fn: function () {
              return [i('PlayHotChart', {
                on: {
                  'update:qipuId': function (t) {
                    e.qipuId = t
                  }
                }
              })]
            },
            proxy: !0
          }
          ])
        }, 'PlayInfoLayer', e.$attrs, !1), e.$listeners))
      ], 1)
    },
    n = [
    ],
    s = i('cebc'),
    o = i('2f62'),
    r = i('8d4a'),
    c = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('section', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.loadingShow,
              expression: 'loadingShow'
            }
          ],
          staticClass: 'm-loading-info'
        }, [
          i('div', {
            staticClass: 'c-info'
          }, [
            e._v('爱奇艺努力加载中…')
          ])
        ]),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.hotInfoShow && !e.loadingShow,
              expression: 'hotInfoShow && !loadingShow'
            }
          ],
          staticClass: 'video-hot'
        }, [
          i('div', {
            staticClass: 'c-title'
          }, [
            e._v('《'),
            i('div', {
              staticClass: 'title-info'
            }, [
              e._v(e._s(e.title))
            ]),
            e._v('》' + e._s(e.chartType))
          ]),
          i('div', {
            staticClass: 'hot-rank'
          }, [
            i('span', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: 'r_hotindextop',
                  expression: '\'r_hotindextop\''
                }
              ],
              staticClass: 'c-info',
              on: {
                click: e.toBillboard
              }
            }, [
              e._v(e._s(e.hotRank)),
              i('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowRight'
              })
            ])
          ]),
          i('PlayHotChartTab', {
            staticClass: 'hot-tab',
            attrs: {
              list: e.itemTab
            },
            on: {
              selectTab: e.selectTab
            }
          }),
          i('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.hotNumShow,
                expression: 'hotNumShow'
              }
            ],
            staticClass: 'hot-num'
          }, [
            i('span', [
              e._v('历史最高热度：' + e._s(e.hotPeakValue))
            ]),
            i('span', {
              staticClass: 'c-time'
            }, [
              e._v('(' + e._s(e.hotPeakDate) + ')')
            ])
          ]),
          i('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.chartShow,
                expression: 'chartShow'
              }
            ],
            staticClass: 'hot-data-form',
            attrs: {
              id: 'hotChart'
            }
          }),
          i('PlayHotChartTab', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.hotTimeShow,
                expression: 'hotTimeShow'
              }
            ],
            staticClass: 'hot-time',
            attrs: {
              list: e.timeTab
            },
            on: {
              selectTab: e.selectTab
            }
          }),
          i('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.errorTipShow,
                expression: 'errorTipShow'
              }
            ],
            staticClass: 'hot-data-error',
            class : {
              'computing-tip': e.computing,
              'wifi-tip': e.reload
            }
          }, [
            i('div', {
              staticClass: 'hot-error-icon'
            }),
            i('div', {
              staticClass: 'hot-error-tip'
            }, [
              e._v(e._s(e.errorTipText))
            ]),
            i('div', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: e.reload,
                  expression: 'reload'
                }
              ],
              staticClass: 'hot-error-btn',
              on: {
                click: e.render
              }
            }, [
              e._v('重新加载')
            ])
          ]),
          i('div', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'r_hotindexinst',
                expression: '\'r_hotindexinst\''
              }
            ],
            staticClass: 'hot-tip',
            on: {
              click: e.showHotIntro
            }
          }, [
            e._v('爱奇艺热度由播放数据，互动量等因子综合计算得出\n      '),
            e._m(0)
          ])
        ], 1),
        i('transition', {
          attrs: {
            name: 'slide-fade'
          }
        }, [
          i('PlayHotIntro', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.hotIntroShow,
                expression: 'hotIntroShow'
              }
            ],
            on: {
              hideIntro: e.hideHotIntro
            }
          })
        ], 1)
      ], 1)
    },
    l = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('a', {
          staticClass: 'c-link',
          attrs: {
            href: 'javascript:void(0)'
          }
        }, [
          i('i', {
            staticClass: 'c-glyphicon c-glyphicon-feed'
          })
        ])
      }
    ],
    u = (i('6d67'), i('a481'), i('57e7'), i('55dd'), i('96cf'), i('3b8d')),
    d = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-hot-intro-pop'
      }, [
        i('div', {
          staticClass: 'title'
        }, [
          i('i', {
            staticClass: 'c-glyphicon c-glyphicon-arrowLeft',
            on: {
              click: function (t) {
                return e.$emit('hideIntro')
              }
            }
          }),
          e._v('\n    热度指数介绍\n  ')
        ]),
        i('div', {
          staticClass: 'c-stitle'
        }, [
          e._v('内容热度')
        ]),
        i('div', {
          staticClass: 'intro'
        }, [
          e._v('内容热度是客观反映内容当前受欢迎程度的指标。内容热度基于海量用户行为数据，通过当前用户观看行为数据、互动行为数据、分享行为数据等指标，综合评估用户对内容的反馈情况，进而衡量内容本身的质量和当前受欢迎程度。')
        ]),
        i('div', {
          staticClass: 'c-stitle'
        }, [
          e._v('播放指数')
        ]),
        i('div', {
          staticClass: 'intro'
        }, [
          e._v('播放指数是客观反映内容累积播放效果的指标。播放效果主要基于用户历史的观看行为等数据评估，可以综合体现内容长期的受众覆盖和观看质量。')
        ]),
        i('div', {
          staticClass: 'c-stitle'
        }, [
          e._v('排行榜')
        ]),
        e._m(0),
        i('div', {
          staticClass: 'c-stitle'
        }, [
          e._v('内容热度等级')
        ]),
        i('div', {
          staticClass: 'intro'
        }, [
          e._v('内容热度等级基于内容热度分布情况，将内容热度分为超热，非常热和普通的三个区间')
        ]),
        e._m(1),
        e._m(2),
        e._m(3)
      ])
    },
    p = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'intro'
        }, [
          e._v('热度榜：根据当前内容热度值排序，实时更新；'),
          i('br'),
          e._v('飙升榜：根据24小时内容热度飙升值排序，每15分钟更新；'),
          i('br'),
          e._v('播放指数榜：根据播放指数值排序，每天更新。')
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'intro'
        }, [
          i('i', {
            staticClass: 'icon-video-hot icon-hot-best'
          }),
          e._v('超热')
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'intro'
        }, [
          i('i', {
            staticClass: 'icon-video-hot icon-hot-better'
          }),
          e._v('非常热')
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'intro'
        }, [
          i('i', {
            staticClass: 'icon-video-hot icon-hot-good'
          }),
          e._v('普通')
        ])
      }
    ],
    h = {
      name: 'PlayHotIntro'
    },
    f = h,
    m = i('2877'),
    v = Object(m['a']) (f, d, p, !1, null, null, null),
    b = v.exports,
    y = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', e._l(e.items, function (t, a) {
        return i('span', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: t.pingback,
              expression: 'item.pingback'
            }
          ],
          key: a,
          staticClass: 'c-tab-item',
          class : {
            selected: t.selected
          },
          on: {
            click: function (i) {
              return e.selectTab(t)
            }
          }
        }, [
          e._v(e._s(t.name))
        ])
      }), 0)
    },
    g = [
    ],
    w = (i('7f7f'), i('ac6a'), i('f3e2'), {
      name: 'PlayHotChartTab',
      props: {
        list: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          items: this.list
        }
      },
      methods: {
        selectTab: function (e) {
          this.items.forEach(function (e) {
            e.selected = !1
          }),
          e.selected = !0,
          this.$emit('selectTab', e.name)
        }
      }
    }),
    I = w,
    _ = Object(m['a']) (I, y, g, !1, null, null, null),
    C = _.exports,
    k = i('ab22'),
    x = i('45bc'),
    T = {
      name: 'PlayHotChart',
      components: {
        PlayHotIntro: b,
        PlayHotChartTab: C
      },
      data: function () {
        return {
          hotInfoShow: !0,
          hotIntroShow: !1,
          loadingShow: !0,
          chartShow: !1,
          errorTipShow: !1,
          hotTimeShow: !0,
          hotPeakValue: '',
          hotPeakDate: '',
          hotRank: '',
          itemTab: [
            {
              name: '内容热度',
              pingback: 'r_hotindexhot',
              selected: !0
            },
            {
              name: '播放指数',
              pingback: 'r_hotindexplay',
              selected: !1
            },
            {
              name: '整季播放指数',
              pingback: 'r_hotindexplayall',
              selected: !1
            }
          ],
          timeTab: [
            {
              name: '7天',
              pingback: '',
              selected: !0
            },
            {
              name: '30天',
              pingback: '',
              selected: !1
            },
            {
              name: '全部',
              pingback: '',
              selected: !1
            }
          ],
          errorTipText: '',
          computing: !1,
          reload: !1,
          chartType: '内容热度趋势',
          cachedData: '',
          rule: null,
          initialDate: ''
        }
      },
      computed: Object(s['a']) ({
      }, Object(o['e']) ('play', {
        videoInfo: 'videoInfo',
        albumInfo: 'albumInfo',
        subTemplate: 'subTemplate'
      }), {
        title: function () {
          return this.videoInfo.videoType === k['c'] ? this.albumInfo.albumName : this.videoInfo.shortTitle
        },
        hotNumShow: function () {
          return '内容热度趋势' === this.chartType && this.chartShow
        }
      }),
      watch: {
        'videoInfo.qipuId': function (e, t) {
          this.$emit('update:qipuId', e)
        }
      },
      mounted: function () {
        this.init(),
        this.$emit('update:qipuId', this.videoInfo.qipuId)
      },
      methods: {
        init: function () {
          var e = Object(u['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Object(k['s']) (k['b']);
                case 2:
                  return e.next = 4,
                  this.render();
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
        render: function () {
          var e = Object(u['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n,
            s = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.videoInfo.videoType === k['d'],
                  i = {
                    videoId: this.videoInfo.qipuId,
                    albumId: t ? this.videoInfo.sourceId : this.videoInfo.aid,
                    channelId: this.videoInfo.cid,
                    isSource: t,
                    issueTime: this.videoInfo.issueTime,
                    albumIssueTime: this.albumInfo.albumIssueTime
                  },
                  e.next = 4,
                  Object(k['l']) (i);
                case 4:
                  a = e.sent,
                  this.cachedData = a,
                  this.rule = {
                    item: 'HotIndex',
                    date: 'week'
                  },
                  this.reset(),
                  'success' === a.status ? (this.cachedData.data.rank && this.cachedData.data.rank < 20 && (this.hotRank = ''.concat(this.videoInfo.channelName, '热度榜第').concat(this.cachedData.data.rank, '名')), this.videoInfo.videoType !== k['d'] && this.itemTab.pop(), n = this.processData('date', this.cachedData.data), n && 0 !== n.length ? (this.hotPeakValue = this.cachedData.data.pkHotIndex, this.hotPeakDate = this.cachedData.data.pkHotDate, this.chartShow = !0, this.hotTimeShow = !0, this.errorTipShow = !1, this.$nextTick(function () {
                    s.renderChart(s.cachedData.data)
                  }))  : this.computingError())  : 'fail' === a.status ? this.computingError()  : 'retry' === a.status && this.retry();
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
        renderChart: function (e) {
          this.chartShow = !0,
          this.hotTimeShow = !0,
          this.errorTipShow = !1;
          var t = this,
          i = this.processData('date', e),
          a = this.processData('count', e);
          if (a && 0 !== a.length) {
            var n = this.processData('status', e),
            s = document.getElementById('hotChart');
            if (!s) return !1;
            var o = echarts.init(s),
            r = a.slice().sort(function (e, t) {
              return e - t
            }),
            c = r[0],
            l = r[a.length - 1] + (4 - (r[a.length - 1] - c) % 4);
            this.initialDate = this.initialDate || i[i.length - 1];
            var u = {
              animation: !0,
              animationDuration: 1,
              grid: {
                left: '15%',
                right: '10%',
                top: 10,
                bottom: 30,
                borderColor: '#fff'
              },
              xAxis: {
                boundaryGap: !1,
                type: 'category',
                axisTick: {
                  show: !1
                },
                data: i,
                axisLine: {
                  lineStyle: {
                    color: '#dcdcdc'
                  }
                },
                axisPointer: {
                  value: t.initialDate,
                  snap: !0,
                  lineStyle: {
                    color: '#10EA05',
                    opacity: 0.5,
                    width: 2
                  },
                  label: {
                    show: !0,
                    snap: !0,
                    formatter: function (e) {
                      var a = i.indexOf(e.value);
                      return t.initialDate = e.value,
                      ''.concat(e.value.slice(5).replace('.', '/'), '\n').concat(d(n[a], a))
                    },
                    backgroundColor: '#FFF',
                    fontFamily: 'AvenirNext-Medium',
                    borderColor: '#FFF',
                    fontSize: 10,
                    padding: [
                      10,
                      2,
                      10,
                      2
                    ],
                    color: '#333333',
                    margin: - 100
                  },
                  handle: {
                    show: !0,
                    color: '#10EA05',
                    size: 0,
                    margin: 0
                  }
                },
                axisLabel: {
                  fontFamily: 'AvenirNext-Medium',
                  margin: 12,
                  fontSize: 10,
                  color: '#666'
                }
              },
              yAxis: {
                boundaryGap: !1,
                type: 'value',
                min: c,
                max: l,
                interval: Math.floor((l - c) / 4),
                axisTick: {
                  show: !1
                },
                axisLine: {
                  lineStyle: {
                    color: '#dcdcdc'
                  }
                },
                axisLabel: {
                  fontFamily: 'AvenirNext-Medium',
                  margin: 14,
                  fontSize: 10,
                  color: '#666',
                  formatter: function (e) {
                    return Object(x['c']) (e)
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#EBEBEB',
                    type: 'dashed'
                  }
                }
              },
              series: [
                {
                  data: a,
                  type: 'line',
                  areaStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(123,253,116,0.5)'
                        },
                        {
                          offset: 1,
                          color: 'rgba(123,253,116,0)'
                        }
                      ],
                      globalCoord: !1
                    }
                  },
                  color: '#10EA05'
                }
              ]
            };
            o.setOption(u)
          } else this.computingError();
          function d(e, t) {
            return 0 === e ? '未上线' : 1 === e ? '计算中' : 2 === e ? Object(x['c']) (a[t])  : void 0
          }
        },
        toBillboard: function () {
          location.href = '/billboard.html#'.concat(this.videoInfo.cid)
        },
        showHotIntro: function () {
          this.hotIntroShow = !0,
          this.hotInfoShow = !1
        },
        hideHotIntro: function () {
          this.hotIntroShow = !1,
          this.hotInfoShow = !0
        },
        selectTab: function (e) {
          switch (e) {
            case '7天':
              this.rule.date = 'week',
              this.initialDate = '';
              break;
            case '30天':
              this.rule.date = 'month',
              this.initialDate = '';
              break;
            case '全部':
              this.rule.date = 'all',
              this.initialDate = '';
              break;
            case '内容热度':
              this.rule.item = 'HotIndex',
              this.chartType = '内容热度趋势';
              break;
            case '播放指数':
              this.rule.item = 'PlayIndex',
              this.chartType = '播放指数趋势';
              break;
            case '整季播放指数':
              this.rule.item = 'TotalPlayIndex',
              this.chartType = '整季播放指数';
              break
          }
          'success' === this.cachedData.status && this.renderChart(this.cachedData.data),
          'fail' === this.cachedData.status && this.computingError(),
          'retry' === this.cachedData.status && this.retry()
        },
        processData: function (e, t) {
          var i = this.rule.date + this.rule.item,
          a = t[i];
          return a && a.map(function (t) {
            return t[e]
          })
        },
        computingError: function () {
          this.chartShow = !1,
          this.hotTimeShow = !1,
          this.errorTipShow = !0,
          this.computing = !0,
          this.errorTipText = ''.concat(this.chartType, '还在计算中，请晚些时候再来查看吧')
        },
        retry: function () {
          this.errorTipShow = !0,
          this.reload = !0,
          this.errorTipText = '获取'.concat(this.chartType, '时出现了一些问题，请稍后再试')
        },
        reset: function () {
          this.loadingShow = !1,
          this.errorTipShow = !1,
          this.chartShow = !1,
          this.hotTimeShow = !1,
          this.computing = !1,
          this.reload = !1,
          this.hotRank = '前往热度风云榜'
        }
      }
    },
    P = T,
    O = (i('27f4'), Object(m['a']) (P, c, l, !1, null, '52499120', null)),
    S = O.exports,
    j = {
      name: 'PlayHotLayer',
      components: {
        PlayInfoLayer: r['a'],
        PlayHotChart: S
      },
      data: function () {
        return {
          qipuId: 0
        }
      },
      computed: Object(s['a']) ({
      }, Object(o['e']) ('play', [
        'loadInfo'
      ])),
      watch: {
        'loadInfo.qipuId': function (e, t) {
          this.$refs.layer.open && this.qipuId !== e && this.closeHotChart()
        }
      },
      methods: {
        closeHotChart: function () {
          this.$emit('update:open', !1)
        }
      }
    },
    B = j,
    N = Object(m['a']) (B, a, n, !1, null, null, null);
    t['a'] = N.exports
  },
  '7b03': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('PlayAdCard', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'adCard' === e.card,
              expression: 'card === \'adCard\''
            }
          ],
          ref: 'adCard'
        }),
        i('PlayFeature', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'feature' === e.card,
              expression: 'card === \'feature\''
            }
          ],
          ref: 'feature'
        }),
        i('PlayIPInfo', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: 'IPInfo' === e.card,
              expression: 'card === \'IPInfo\''
            }
          ],
          ref: 'ip'
        }),
        'videoUser' === e.card ? i('PlayVideoUser')  : 'adOrigin' === e.card ? i('PlayAdOrigin')  : e._e()
      ], 1)
    },
    n = [
    ],
    s = (i('759f'), i('96cf'), i('3b8d')),
    o = i('cebc'),
    r = i('2f62'),
    c = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.showAd ? i('div', {
        staticClass: 'm-box'
      }, [
        i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('section', {
            staticClass: 'm-propaganda-full'
          }, [
            i('a', {
              staticClass: 'c-propaganda-link',
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: e.onClick
              }
            }, [
              i('img', {
                attrs: {
                  src: e.imageUrl
                }
              }),
              e._m(0),
              i('div', {
                staticClass: 'c-rt',
                on: {
                  click: function (t) {
                    return t.stopPropagation(),
                    e.onClose(t)
                  }
                }
              }, [
                i('i', {
                  staticClass: 'c-glyphicon c-glyphicon-guideClose'
                })
              ])
            ])
          ])
        ])
      ])  : e._e()
    },
    l = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'c-lt'
        }, [
          i('i', {
            staticClass: 'c-picicon c-picicon-gGao'
          }, [
            e._v('广告')
          ])
        ])
      }
    ],
    u = i('ab22'),
    d = i('5321'),
    p = {
      name: 'PlayAdCard',
      data: function () {
        return {
          channelId: 0,
          showAd: !1,
          pageUrl: '',
          imageUrl: '',
          rseat: '',
          close_rseat: ''
        }
      },
      methods: {
        hasAd: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return i = t.channelId,
                  this.channelId = i,
                  e.next = 4,
                  Object(u['f']) ({
                    channelId: i
                  }).catch (function () {
                    return !1
                  });
                case 4:
                  return a = e.sent,
                  !0 === a.showAd && (this.pageUrl = a.pageUrl || '', this.imageUrl = a.imageUrl || '', this.rseat = a.rseat || '', this.close_rseat = a.close_rseat || ''),
                  this.showAd = !!a.showAd,
                  this.showAd && Object(d['m']) ({
                    block: a.block,
                    c1: this.channelId
                  }),
                  e.abrupt('return', a.showAd);
                case 9:
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
        onClick: function () {
          var e = this;
          Object(d['l']) ({
            rseat: this.rseat,
            c1: this.channelId
          }),
          this.pageUrl && setTimeout(function () {
            window.location.href = e.pageUrl
          }, 200)
        },
        onClose: function () {
          Object(d['l']) ({
            rseat: this.close_rseat,
            c1: this.channelId
          }),
          this.showAd = !1
        }
      }
    },
    h = p,
    f = i('2877'),
    m = Object(f['a']) (h, c, l, !1, null, null, null),
    v = m.exports,
    b = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        e.subVideo ? i('PlayVideoSub', {
          attrs: {
            video: e.subVideo
          }
        })  : e._e()
      ], 1)
    },
    y = [
    ],
    g = (i('6762'), i('2fdb'), i('1266')),
    w = {
      name: 'PlayFeature',
      components: {
        PlayVideoSub: g['a']
      },
      data: function () {
        return {
          show: !1,
          type: '',
          subVideo: null,
          favVideo: null
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo',
        'albumInfo'
      ])),
      methods: {
        hasFeature: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t = this.videoInfo.featureVideoId || this.albumInfo.qipuId, i = this.videoInfo.qipuId, t && i) {
                    e.next = 4;
                    break
                  }
                  return e.abrupt('return', this.show = !1);
                case 4:
                  return e.next = 6,
                  Object(u['j']) ({
                    featureId: t,
                    qipuId: i
                  });
                case 6:
                  return a = e.sent,
                  this.show = a && (a.video ? a.video.mainTitle : '') && [
                    0,
                    1
                  ].includes(a.subscribeStatus) && void 0 !== a.isSubscribeType,
                  this.show && (this.type = a.isSubscribeType ? 'sub' : 'fav'),
                  this.subVideo = null,
                  this.favVideo = null,
                  'sub' === this.type ? this.subVideo = {
                    imageUrl: a.video.imageUrl,
                    mainTitle: a.video.mainTitle,
                    count: a.subscribeCount,
                    subed: 1 === a.subscribeStatus,
                    qipuId: this.videoInfo.qipuId
                  }
                   : 'fav' === this.type && (this.favVideo = {
                    imageUrl: a.video.imageUrl,
                    mainTitle: a.video.mainTitle,
                    subTitle: a.video.subtitle,
                    faved: 1 === a.subscribeStatus,
                    qipuId: a.video.albumId,
                    contentType: a.video.contentType,
                    cid: a.video.channelId,
                    pageUrl: a.video.pageUrl
                  }),
                  e.abrupt('return', this.show);
                case 13:
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
    },
    I = w,
    _ = Object(f['a']) (I, b, y, !1, null, null, null),
    C = _.exports,
    k = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-videoUser-spacing',
        class : [
          e.state.boxItemClass
        ]
      }, [
        i('div', {
          staticClass: 'm-videoUser-spacingBox'
        }, e._l(e.state.items, function (t, a) {
          return i('div', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: t.block,
                expression: 'item.block'
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: t.rseat,
                expression: 'item.rseat'
              }
            ],
            key: a,
            staticClass: 'm-videoUser-spacingItem'
          }, [
            i('a', {
              staticClass: 'videoUser-data',
              attrs: {
                href: t.toUrl
              }
            }, [
              i('div', {
                staticClass: 'videoUser-img',
                style: 'background-image:url(' + t.logoUrl + ')'
              }, [
                i('div', {
                  staticClass: 'c-rt'
                }, [
                  '游戏' === t.tag ? i('i', {
                    staticClass: 'c-picicon-s c-picicon-game'
                  }, [
                    e._v('游戏')
                  ])  : e._e(),
                  '漫画' === t.tag ? i('i', {
                    staticClass: 'c-picicon-s c-picicon-cartoon'
                  }, [
                    e._v('漫画')
                  ])  : e._e(),
                  '文学' === t.tag ? i('i', {
                    staticClass: 'c-picicon-s c-picicon-wenxue'
                  }, [
                    e._v('文学')
                  ])  : e._e()
                ])
              ]),
              i('div', {
                staticClass: 'videoUser-info'
              }, [
                i('div', {
                  staticClass: 'videoUser-name'
                }, [
                  e._v(e._s(t.title))
                ]),
                i('div', {
                  staticClass: 'videoUser-des'
                }, [
                  e._v(e._s(t.des))
                ])
              ])
            ]),
            1 === e.state.items.length ? i('a', {
              staticClass: 'videoUser-stow',
              attrs: {
                href: t.buttonUrl
              }
            }, [
              i('span', {
                staticClass: 'c-info'
              }, [
                e._v(e._s(t.buttonName))
              ])
            ])  : e._e()
          ])
        }), 0)
      ])
    },
    x = [
    ],
    T = (i('ac6a'), i('5df3'), i('6d67'), i('a4bb')),
    P = i.n(T),
    O = i('5176'),
    S = i.n(O),
    j = i('e814'),
    B = i.n(j),
    N = (i('28a5'), i('57e7'), i('d25f'), i('0cd8'), i('795b')),
    q = i.n(N),
    L = i('936f'),
    V = i('8d81'),
    D = i.n(V),
    A = i('8296'),
    E = {
      ANDROID_PHONE: 33,
      ANDROID_PAD: 23,
      ANDROID_TV: 5201,
      ANDROID_H5: 43,
      IPHONE: 32,
      IPAD: 22,
      CH5: 43,
      PC: 11,
      ANDROID_BOX: 25,
      VR: 61
    };
    function R(e) {
      var t = e.games || [
      ];
      if (t.length <= 0) return q.a.resolve();
      var i = '//store.iqiyi.com/apis/app/infoList.action';
      return F(i, {
        agent_type: A['D'].android ? 13 : 12,
        app_ids: t.join(',')
      }).then(a);
      function a(e) {
        var t = e.list ? e.list : [
        ],
        i = n(t);
        return t = i.length ? i : t,
        t.reduce(function (e, t) {
          var i = s(t);
          return i ? e.concat(i)  : e
        }, [
        ])
      }
      function n(e) {
        return e.filter(function (e) {
          var t = e && e.platforms;
          return t && t.indexOf(E.CH5) >= 0
        })
      }
      function s(e) {
        var t = !!o(e) || r(e.platforms);
        if (t) return new H({
          title: e.app_name,
          des: e.app_desc,
          tag: '游戏',
          buttonName: e.buttonName || '立即下载',
          buttonUrl: e.h5DownloadUrl || e.short_download_url,
          logoUrl: e.app_logo,
          toUrl: e.h5DownloadUrl || window.location.protocol + '//store.iqiyi.com/mgc/game/detail?id=' + e.app_id,
          rseat: '701051_ipgl_youxi',
          block: '701051_ipgl_youxi'
        })
      }
      function o(e) {
        var t = !1;
        if (!e) return t;
        if (e.platforms.indexOf(E.CH5) >= 0) {
          var i = e.app_download_url;
          e.h5DownloadUrl = A['d'].addQuery(i, {
            h5_serverid: 'miqiyiip'
          }),
          e.buttonName = '开始游戏',
          t = !0
        }
        return t
      }
      function r(e) {
        e = e || '';
        var t = [
          E.ANDROID_PHONE,
          E.ANDROID_PAD,
          E.ANDROID_TV
        ],
        i = [
          E.IPHONE,
          E.IPAD
        ],
        a = A['D'].android ? t : A['D'].ios && !A['i'].weixin ? i : [
        ];
        return e.split(',').some(function (e) {
          return e = e || 0,
          a.indexOf(B() (e)) >= 0
        })
      }
    }
    function $(e) {
      var t = e.comicbooks || [
      ],
      i = t[0];
      if (!i) return q.a.resolve();
      var a = '//comic.iqiyi.com/views/1.0/comicDetail';
      return F(a, n(i)).then(s);
      function n(e) {
        return {
          comicId: e,
          srcPlatform: 15,
          appVer: 'h5'
        }
      }
      function s(e) {
        if (e && e.episodes && 0 !== e.episodes.length) {
          var t = 'https://acn.m.iqiyi.com/comic/detail/' + e.comicId + '?from_type=basem';
          return new H({
            title: e.title,
            des: e.prompt,
            tag: '漫画',
            buttonName: '立即阅读',
            buttonUrl: t,
            logoUrl: e.pic,
            toUrl: t,
            rseat: '701051_ipgl_manhua',
            block: '701051_ipgl_manhua'
          })
        }
      }
    }
    function U(e) {
      var t = e.books || [
      ],
      i = t[0];
      if (!i) return q.a.resolve();
      var a = '//api-yuedu.iqiyi.com/book/ipRelated/info';
      return F(a, n(i)).then(s);
      function n(e) {
        var t = {
          qiyiId: 'base',
          userId: 'base',
          timeStamp: (new Date).getTime()
        };
        return t.md5 = o(t),
        S() ({
          appVer: 'h5',
          bookId: e,
          srcPlatform: '15'
        }, t)
      }
      function s(e) {
        if (e) {
          var t = e.reader_url || e.detail_url;
          return new H({
            title: e.title,
            des: e.prompt_description,
            tag: '文学',
            buttonName: '立即阅读',
            buttonUrl: t,
            logoUrl: e.image_url,
            toUrl: t,
            rseat: '701051_ipgl_wenxue',
            block: '701051_ipgl_wenxue'
          })
        }
      }
      function o(e) {
        var t = P() (e).reduce(function (t, i) {
          return t + e[i]
        }, '');
        return D() (unescape(encodeURIComponent(t)))
      }
    }
    function H(e) {
      this.title = e.title,
      this.des = e.des,
      this.tag = e.tag,
      this.buttonName = e.buttonName,
      this.buttonUrl = e.buttonUrl,
      this.logoUrl = e.logoUrl,
      this.toUrl = e.toUrl,
      this.rseat = e.rseat,
      this.block = e.block
    }
    function F(e, t) {
      return M.apply(this, arguments)
    }
    function M() {
      return M = Object(s['a']) (regeneratorRuntime.mark(function e(t, i) {
        var a;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return e.next = 2,
              L['a'].jsonp(t, {
                params: i
              });
            case 2:
              return a = e.sent,
              e.abrupt('return', a && a.data && [
                'A00000',
                'A00001'
              ].includes(a.data.code) ? a.data.data : {
              });
            case 4:
            case 'end':
              return e.stop()
          }
        },
        e)
      })), M.apply(this, arguments)
    }
    function Q() {
      var e = Array.prototype.slice.call(arguments);
      return {
        init: t
      };
      function t(e) {
        return i.apply(this, arguments)
      }
      function i() {
        return i = Object(s['a']) (regeneratorRuntime.mark(function t(i) {
          var n;
          return regeneratorRuntime.wrap(function (t) {
            while (1) switch (t.prev = t.next) {
              case 0:
                return n = e.map(function (e) {
                  return e(i)
                }),
                t.abrupt('return', q.a.all(n).then(function (e) {
                  var t = e.reduce(function (e, t) {
                    return t ? e.concat(t)  : e
                  }, [
                  ]);
                  return a(t)
                }));
              case 2:
              case 'end':
                return t.stop()
            }
          },
          t)
        })), i.apply(this, arguments)
      }
      function a(e) {
        var t = e.length;
        return t <= 0 ? null : n(t, e)
      }
      function n(e, t) {
        var i;
        return i = 1 === e ? {
          boxItemClass: ''
        }
         : 2 === e ? {
          boxItemClass: 'm-videoUserSpace-two'
        }
         : {
          boxItemClass: 'm-videoUserSpace-twoSliding'
        },
        i.items = t,
        i
      }
    }
    var G = Q(R, $, U),
    K = {
      name: 'PlayIPInfo',
      data: function () {
        return {
          state: {
            items: [
            ],
            boxItemClass: ''
          }
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo'
      ])),
      watch: {
        'videoInfo.qipuId': function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t, i) {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  this.hasIP();
                case 1:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function t(t, i) {
            return e.apply(this, arguments)
          }
          return t
        }()
      },
      methods: {
        hasIP: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  G.init({
                    books: this.videoInfo.books,
                    tickets: this.videoInfo.tickets,
                    games: this.videoInfo.games,
                    comicbooks: this.videoInfo.comicbooks
                  });
                case 2:
                  return t = e.sent,
                  t && (this.state = t),
                  e.abrupt('return', t && t.items && t.items.length);
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
        }()
      }
    },
    z = K,
    W = (i('59ae'), Object(f['a']) (z, k, x, !1, null, '888234ec', null)),
    Y = W.exports,
    J = i('4e08'),
    X = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        attrs: {
          id: '1000000000539'
        }
      })
    },
    Z = [
    ],
    ee = {
    },
    te = Object(f['a']) (ee, X, Z, !1, null, null, null),
    ie = te.exports,
    ae = {
      name: 'PlayRelevantBanner',
      components: {
        PlayAdCard: v,
        PlayFeature: C,
        PlayIPInfo: Y,
        PlayVideoUser: J['a'],
        PlayAdOrigin: ie
      },
      props: {
        enable: {
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
          card: '',
          IPTypes: [
            'books',
            'comicbooks',
            'games',
            'tickets'
          ]
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', {
        videoInfo: 'videoInfo',
        userInfo: 'userInfo'
      })),
      watch: {
        'videoInfo.qipuId': function (e, t) {
          this.refresh()
        }
      },
      mounted: function () {
        this.refresh()
      },
      methods: {
        refresh: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.enable.adCard) {
                    e.next = 6;
                    break
                  }
                  return e.next = 3,
                  this.$refs.adCard.hasAd({
                    channelId: this.videoInfo.cid
                  });
                case 3:
                  if (t = e.sent, !t) {
                    e.next = 6;
                    break
                  }
                  return e.abrupt('return', this.card = 'adCard');
                case 6:
                  if (!this.enable.feature) {
                    e.next = 12;
                    break
                  }
                  return e.next = 9,
                  this.$refs.feature.hasFeature();
                case 9:
                  if (i = e.sent, !i) {
                    e.next = 12;
                    break
                  }
                  return e.abrupt('return', this.card = 'feature');
                case 12:
                  if (!this.enable.IPInfo || !this.IPTypes.some(function (e) {
                    return n.videoInfo[e] && n.videoInfo[e].length
                  })) {
                    e.next = 18;
                    break
                  }
                  return e.next = 15,
                  this.$refs.ip.hasIP();
                case 15:
                  if (a = e.sent, !a) {
                    e.next = 18;
                    break
                  }
                  return e.abrupt('return', this.card = 'IPInfo');
                case 18:
                  if (!this.enable.videoUser || !this.userInfo.userId) {
                    e.next = 22;
                    break
                  }
                  return e.abrupt('return', this.card = 'videoUser');
                case 22:
                  this.card = 'adOrigin';
                case 23:
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
    },
    ne = ae,
    se = Object(f['a']) (ne, a, n, !1, null, null, null);
    t['a'] = se.exports
  },
  8642: function (e, t, i) {
    'use strict';
    var a = i('cebc'),
    n = i('2f62'),
    s = i('87ac'),
    o = i('8296');
    t['a'] = {
      data: function () {
        return {
          comment: {
          },
          isOpen: !1
        }
      },
      computed: Object(a['a']) ({
      }, Object(n['e']) ('play', [
        'subTemplate',
        'videoInfo',
        'controlInfo'
      ]), {
        btnText: function () {
          return this.count ? '评论' : '点击参与评论'
        },
        channelName: function () {
          return this.videoInfo.channelName
        },
        count: function () {
          return this.comment ? Object(o['h']) (this.comment.commentCount)  : 0
        },
        isShow: function () {
          return this.controlInfo.extendbarComment && this.count
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
          Object(s['g']) (this.videoInfo.qipuId, function (t) {
            e.comment = t && 'A00000' === t.data.code ? t.data.data : {
            }
          })
        }
      }
    }
  },
  8931: function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('PlayInfoLayer', e._g(e._b({
        attrs: {
          id: 'PlayInfoLayer',
          modal: !1,
          'close-btn': e.closeBtn,
          'close-icon': e.closeIcon,
          'associated-id': e.videoInfo.qipuId,
          'pop-class': '',
          'close-rseat': '507141_2',
          name: 'm-infoDescLayer'
        },
        scopedSlots: e._u([{
          key: 'content',
          fn: function () {
            return [i('div', {
              ref: 'wrapper',
              staticStyle: {
                height: '100%'
              }
            }, [
              e.isShowListdesc ? i('div', [
                i('div', {
                  staticClass: 'c-title'
                }, [
                  e._v(e._s(e.cacheTitle))
                ]),
                i('div', {
                  staticClass: 'video-tag'
                }, [
                  e._l(e.cacheTags, function (t, a) {
                    return [i('a', {
                      directives: [
                        {
                          name: 'pingback',
                          rawName: 'v-pingback',
                          value: '605091_focus',
                          expression: '\'605091_focus\''
                        }
                      ],
                      key: t + a,
                      staticClass: 'c-link',
                      attrs: {
                        href: '/search.html?key=' + t
                      }
                    }, [
                      e._v(e._s('[' + t + ']'))
                    ]),
                    a < e.cacheTags.length - 1 ? i('span', {
                      key: a,
                      staticClass: 'dot'
                    }, [
                      e._v('·')
                    ])  : e._e()]
                  })
                ], 2),
                e.subTemplate.movie ? i('div', [
                  i('div', [
                    e.videoInfo.directors ? i('div', {
                      staticClass: 'info-actor'
                    }, [
                      e._v('\n              导演：\n              '),
                      e._l(e.videoInfo.directors.split(','), function (t, a) {
                        return i('a', {
                          key: a,
                          attrs: {
                            href: '/search.html?key=' + t + ' 电影'
                          }
                        }, [
                          e._v('\n                ' + e._s(t) + '\n              ')
                        ])
                      })
                    ], 2)  : e._e(),
                    e.videoInfo.mainActors ? i('div', {
                      staticClass: 'info-actor'
                    }, [
                      e._v('\n              主演：\n              '),
                      e._l(e.videoInfo.mainActors.split(','), function (t, a) {
                        return i('a', {
                          key: a,
                          attrs: {
                            href: '/search.html?key=' + t + ' 电影'
                          }
                        }, [
                          e._v('\n                ' + e._s(t) + '\n              ')
                        ])
                      })
                    ], 2)  : e._e(),
                    i('div', {
                      staticClass: 'info-time'
                    }, [
                      e._v('上映：' + e._s(e.formatDate(e.videoInfo.period)))
                    ]),
                    i('div', {
                      staticClass: 'info'
                    }, [
                      e._v(e._s(e.videoInfo.desc))
                    ])
                  ])
                ])  : i('div', [
                  e.isCasts ? i('div', {
                    staticClass: 'info-actor'
                  }, [
                    e._v(e._s(e.isCasts.split(',').slice(0, 6).join(' ')))
                  ])  : e._e(),
                  i('div', {
                    staticClass: 'info-time'
                  }, [
                    e._v(e._s(e.isCacheStrDesc))
                  ]),
                  i('div', {
                    staticClass: 'info'
                  }, [
                    e._v(e._s(e.isCacheVideoDesc))
                  ]),
                  7 !== e.videoInfo.videoType ? i('div', [
                    i('div', {
                      staticClass: 'c-title-s'
                    }, [
                      e._v('本' + e._s(e.isCacheDesType) + '简介')
                    ]),
                    i('div', {
                      staticClass: 'c-title-xs'
                    }, [
                      i('div', {
                        staticClass: 'album-info'
                      }, [
                        e._v(e._s('' + e.isCacheOrder + e.isCacheDesType + ' ' + e.isCacheTitle) + ' ')
                      ])
                    ]),
                    e.isCacheDes ? i('div', {
                      staticClass: 'info'
                    }, [
                      e._v(e._s(e.isCacheDes))
                    ])  : e._e()
                  ])  : e._e(),
                  e.isShowDramaslist ? i('div', [
                    i('div', {
                      staticClass: 'c-title-s'
                    }, [
                      e._v(e._s(e.cacheListDesc) + '列表')
                    ]),
                    i('div', {
                      staticClass: 'c-dramasList'
                    }, e._l(e.descList, function (t, a) {
                      return i('div', {
                        directives: [
                          {
                            name: 'play',
                            rawName: 'v-play',
                            value: {
                              card: 'albumList',
                              action: 'upsert',
                              url: t.pageUrl,
                              qipuId: t.qipuId,
                              hook: e.loadMore,
                              selectClass: 'selected',
                              block: 'listDesc',
                              rseat: '810291__xjgjjs'
                            },
                            expression: '{\n                  card: \'albumList\',\n                  action: \'upsert\',\n                  url: video.pageUrl,\n                  qipuId: video.qipuId,\n                  hook: loadMore,\n                  selectClass: \'selected\',\n                  block: \'listDesc\',\n                  rseat: \'810291__xjgjjs\'\n                }'
                          },
                          {
                            name: 'pingback',
                            rawName: 'v-pingback',
                            value: '810291__xjgjjs',
                            expression: '\'810291__xjgjjs\''
                          }
                        ],
                        key: t.id + '_' + a + '_album',
                        staticClass: 'c-title-xs',
                        class : t.qipuId === e.videoInfo.tvid ? 'selected' : ''
                      }, [
                        i('span', {
                          staticClass: 'video-status'
                        }, [
                          i('i', {
                            staticClass: 'c-playPage-icon c-playPage-play'
                          })
                        ]),
                        i('div', {
                          staticClass: 'album-info'
                        }, [
                          e._v('\n                  ' + e._s(t.subTitle || t.desc || t.cacheOrder) + '\n                ')
                        ])
                      ])
                    }), 0),
                    i('LoadBottom', {
                      attrs: {
                        container: 'PlayInfoLayer',
                        callback: e.loadMore,
                        'load-complete': e.loadComplete
                      }
                    })
                  ], 1)  : e._e()
                ])
              ])  : i('div', [
                i('div', [
                  i('div', {
                    staticClass: 'c-title'
                  }, [
                    e._v(e._s(e.isUpdateInfo ? e.title || e.videoInfo.videoName : e.cacheTitle || e.cacheVideoInfo.videoName))
                  ]),
                  e.cacheVideoInfo.issueTime ? i('div', {
                    staticClass: 'info-time'
                  }, [
                    e._v('上传时间：' + e._s(e.isUpdateInfo ? e.videoInfo.issueTime : e.cacheVideoInfo.issueTime))
                  ])  : e._e(),
                  e.cacheVideoInfo.desc ? i('div', {
                    staticClass: 'info'
                  }, [
                    e._v('简介：' + e._s(e.isUpdateInfo ? e.videoInfo.desc : e.cacheVideoInfo.desc))
                  ])  : e._e()
                ])
              ])
            ])]
          },
          proxy: !0
        }
        ])
      }, 'PlayInfoLayer', e.$attrs, !1), e.$listeners))
    },
    n = [
    ],
    s = (i('ac6a'), i('f3e2'), i('795b')),
    o = i.n(s),
    r = (i('96cf'), i('3b8d')),
    c = (i('28a5'), i('cebc')),
    l = (i('c5f6'), i('2f62')),
    u = i('8d4a'),
    d = i('da1f'),
    p = i('aa91'),
    h = i('ab22'),
    f = i('3e9e'),
    m = {
      name: 'PlayLongVideoInfoDesc',
      components: {
        PlayInfoLayer: u['a'],
        LoadBottom: d['a'],
        LoadPage: p['a']
      },
      props: {
        casts: {
          type: String,
        default:
          ''
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
        },
        isShowListdesc: {
          type: Boolean,
        default:
          !0
        },
        isShowDramaslist: {
          type: Boolean,
        default:
          !0
        },
        qipuId: {
          type: Number,
        default:
          0
        },
        isUpdateInfo: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          isDescOpen: !1,
          descList: [
          ],
          page: 1,
          loadComplete: !1,
          tags: [
          ],
          cacheVideoInfo: {
          }
        }
      },
      computed: Object(c['a']) ({
        latestVideoId: function () {
          return this.descList.length ? this.descList[this.descList.length - 1].qipuId : this.videoInfo.latestVideoId
        }
      }, Object(l['e']) ('play', {
        template: 'template',
        subTemplate: 'subTemplate',
        videoInfo: 'videoInfo',
        albumInfo: 'albumInfo',
        seoInfo: 'seoInfo',
        descType: function (e) {
          return e.subTemplate.album ? '集' : '期'
        },
        listDesc: function (e) {
          return e.subTemplate.album ? '剧集' : '分期'
        },
        order: function (e) {
          var t = e.videoInfo.order < 10 ? '0' + e.videoInfo.order : e.videoInfo.order,
          i = e.subTemplate.album ? t : e.videoInfo.issueTime;
          return i
        },
        tagArray: function (e) {
          var t = e.videoInfo.tags;
          return t ? t.split(',').slice(0, 6)  : [
          ]
        },
        updateStrategyDesc: function (e) {
          var t = e.albumInfo,
          i = '';
          return e.subTemplate.album && t.videoCount && t.latestVideoOrder ? i = t.videoCount === t.latestVideoOrder ? ''.concat(t.videoCount, '集全')  : t.videoCount > t.latestVideoOrder ? '更新至'.concat(t.latestVideoOrder, '集,共').concat(t.videoCount, '集')  : '' : e.subTemplate.source && t.showContent && (i = t.showContent),
          e.albumInfo.updateStrategy && (i += (i ? ', ' : '') + e.albumInfo.updateStrategy),
          i
        },
        title: function () {
          return this.subTemplate.movie ? this.videoInfo.videoName : this.albumInfo.albumName
        },
        isAlbumList: function () {
          var e = f['a'].getCurVideo() || {
          },
          t = 'albumList' === e.card;
          return t
        }
      })),
      watch: {
        qipuId: function (e) {
          if (e) {
            var t = f['a'].getCurVideo() || {
            },
            i = 'albumList' === t.card,
            a = 7 !== this.videoInfo.videoType;
            if (i) {
              var n = {
                isCacheDes: i ? this.videoInfo.desc : this.cacheVideoInfo.desc,
                isCacheOrder: i ? this.order : this.cacheOrder,
                isCacheDesType: i ? this.descType : this.cacheDescType,
                isCacheTitle: i ? this.videoInfo.subTitle : this.cacheVideoInfo.subTitle,
                isCasts: i && a ? this.casts : this.isCasts,
                isCacheIssueTime: i ? this.videoInfo.issueTime : this.cacheVideoInfo.issueTime,
                isCacheStrDesc: i && a ? this.updateStrategyDesc : this.cacheUpdateStrategyDesc,
                isCacheVideoDesc: i ? this.albumInfo.desc : this.videoDesc
              };
              this.getCacheData(n),
              this.loadMore()
            }
          }
        }
      },
      mounted: function () {
        this.aid = this.template.album ? this.albumInfo.qipuId : this.videoInfo.sourceId,
        this.cacheTags = this.tagArray,
        this.cacheTitle = this.title,
        this.cacheVideoInfo = this.videoInfo,
        this.cacheListDesc = this.listDesc,
        this.cacheUpdateStrategyDesc = this.updateStrategyDesc,
        this.videoDesc = this.albumInfo.desc,
        this.cacheOrder = this.order,
        this.cacheDescType = this.descType,
        this.isCasts = this.casts,
        this.isCacheIssueTime = this.videoInfo.issueTime;
        var e = {
          isCacheDes: this.cacheVideoInfo.desc,
          isCacheOrder: this.cacheOrder,
          isCacheDesType: this.cacheDescType,
          isCacheTitle: this.cacheVideoInfo.subTitle,
          isCasts: this.isCasts,
          isCacheIssueTime: this.isCacheIssueTime,
          isCacheStrDesc: this.cacheUpdateStrategyDesc,
          isCacheVideoDesc: this.videoDesc
        };
        this.getCacheData(e)
      },
      methods: {
        getCacheData: function (e) {
          this.isCacheDes = e.isCacheDes,
          this.isCacheOrder = e.isCacheOrder,
          this.isCacheDesType = e.isCacheDesType,
          this.isCacheTitle = e.isCacheTitle,
          this.isCasts = e.isCasts,
          this.isCacheIssueTime = e.isCacheIssueTime,
          this.isCacheStrDesc = e.isCacheStrDesc,
          this.isCacheVideoDesc = e.isCacheVideoDesc
        },
        loadMore: function () {
          var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.loadComplete) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return', o.a.resolve());
                case 2:
                  if (this.isShowDramaslist) {
                    e.next = 4;
                    break
                  }
                  return e.abrupt('return');
                case 4:
                  return e.next = 6,
                  Object(h['h']) ({
                    aid: this.aid,
                    videoId: this.template.album ? 0 : this.latestVideoId,
                    page: this.page,
                    size: 10,
                    source: this.template.source
                  });
                case 6:
                  return t = e.sent,
                  this.page++,
                  this.loadComplete = !t || !t.length,
                  t && (this.descList = this.descList.concat(t)),
                  this.descList.forEach(function (e) {
                    e.select = e.qipuId === this.cacheVideoInfo.qipuId
                  }, this),
                  e.abrupt('return', t);
                case 12:
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
        formatDate: function (e) {
          return e.slice(0, 4)
        }
      }
    },
    v = m,
    b = i('2877'),
    y = Object(b['a']) (v, a, n, !1, null, null, null);
    t['a'] = y.exports
  },
  '8d17': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        i('div', {
          directives: [
            {
              name: 'protect',
              rawName: 'v-protect'
            }
          ],
          staticClass: 'm-iqylink-guide'
        }, [
          i('KnowledgeCallAppBtn', {
            staticClass: 'c-btn c-btn-block',
            attrs: {
              'down-app-pos': '\'player\''
            }
          }, [
            i('i', {
              staticClass: 'c-glyphicon c-glyphicon-iqy'
            }),
            e._v('打开爱奇艺，提升3倍流畅度！\n    ')
          ])
        ], 1)
      ])
    },
    n = [
    ],
    s = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('a', {
        attrs: {
          href: 'javascript:void(0)'
        },
        on: {
          click: e.callApp
        }
      }, [
        e._t('default', [
          e._v('\n    ' + e._s(e.text || '打开爱奇艺，提升3倍流畅度！') + '\n  ')
        ])
      ], 2)
    },
    o = [
    ],
    r = i('cebc'),
    c = i('2f62'),
    l = i('e7f9'),
    u = {
      name: 'KnowledgeCallAppBtn',
      props: {
        text: {
          type: String,
        default:
          ''
        },
        albumId: {
          type: String,
        default:
          ''
        },
        isDownload: {
          type: Boolean,
        default:
          !0
        },
        downloadUrl: {
          type: String,
        default:
          '//zhishi.iqiyi.com/kpp/download/index.html'
        }
      },
      computed: Object(r['a']) ({
      }, Object(c['e']) ('play', [
        'videoInfo'
      ])),
      methods: {
        callApp: function () {
          return l['a'].open({
            type: 'column',
            dynamic: 'id='.concat(this.videoInfo.aid),
            statistics: 'channel=iqiyi_h5_edu',
            download: '//mbdapp.iqiyi.com/j/knowledge/knowledge_17451.apk'
          })
        }
      }
    },
    d = u,
    p = i('2877'),
    h = Object(p['a']) (d, s, o, !1, null, null, null),
    f = h.exports,
    m = {
      name: 'PlayKnowledgeAppBanner',
      components: {
        KnowledgeCallAppBtn: f
      }
    },
    v = m,
    b = Object(p['a']) (v, a, n, !1, null, null, null);
    t['a'] = b.exports
  },
  '8d4a': function (e, t, i) {
    'use strict';
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.init ? i('ModalEvent', {
        staticClass: 'm-video-info-fixed',
        class : [
          e.open ? e.layerClass : 'am-video-info-close',
          e.popClass,
          e.layerInfo
        ],
        style: {
          height: e.height + 'px',
          overflow: 'scroll'
        },
        on: {
          'document:touchstart': function (t) {
            e.modal && e.close()
          }
        }
      }, [
        e._t('close', [
          i('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: e.closeRseat,
                expression: 'closeRseat'
              }
            ],
            class : e.closeBtn ? e.closeBtn : 'close-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              touchstart: function (t) {
                return t.stopPropagation(),
                e.close(t)
              },
              click: e.close
            }
          }, [
            i('i', {
              class : e.closeIcon ? e.closeIcon : 'c-glyphicon c-glyphicon-guideClose'
            })
          ])
        ]),
        e._t('content')
      ], 2)  : e._e()
    },
    n = [
    ],
    s = (i('d92a'), i('c5f6'), i('3853')),
    o = i('8296'),
    r = {
      name: 'PlayInfoLayer',
      components: {
        ModalEvent: s['a']
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
        open: function (e, t) {
          this.init = !!e,
          this.$store.commit('play/setLayerOpen', e),
          Object(o['P']) (e),
          e ? (this.updateHeight(), this.updateLayerId(this.associatedId))  : this.offsetTop = 0
        },
        associatedId: function (e, t) {
          this.updateLayerId(e)
        }
      },
      mounted: function () {
        window.addEventListener('resize', this.updateHeight)
      },
      destroyed: function () {
        window.removeEventListener('resize', this.updateHeight)
      },
      methods: {
        close: function (e) {
          var t = this;
          setTimeout(function () {
            t.$emit('update:open', !1)
          }, 300)
        },
        updateHeight: function () {
          setTimeout(function e() {
            if (this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this.offsetTop !== this.$el.offsetTop || this.viewportHeight < this.$el.offsetTop) return this.offsetTop = this.$el.offsetTop,
            setTimeout(e.bind(this), 200);
            this.height = this.viewportHeight - this.$el.offsetTop
          }.bind(this), 100)
        },
        updateLayerId: function (e) {
          e && this.$store.commit('play/setLayerId', e)
        }
      }
    },
    c = r,
    l = i('2877'),
    u = Object(l['a']) (c, a, n, !1, null, null, null);
    t['a'] = u.exports
  },
  '985e': function (e, t, i) {
    'use strict';
    var a,
    n,
    s = i('bd86'),
    o = (i('96cf'), i('3b8d')),
    r = (i('c5f6'), i('b2e7')),
    c = i('5321'),
    l = i('8296'),
    u = i('1a51'),
    d = {
      name: 'PlayFavorited',
      props: {
        contentType: {
          type: Number,
        default:
          u['c']
        },
        cid: {
          type: Number,
        default:
          0
        },
        subkey: {
          type: Number,
        default:
          0
        },
        needCheck: {
          type: Boolean,
        default:
          !1
        },
        favorite: {
          type: Boolean,
        default:
          !1
        },
        tagClass: {
          type: String,
        default:
          ''
        },
        isToast: {
          type: Boolean,
        default:
          !1
        },
        single: {
          type: Boolean,
        default:
          !1
        }
      },
      watch: {
        subkey: function (e) {
          this.checkFavorite()
        }
      },
      mounted: function () {
        this.needCheck && Object(r['M']) () && this.checkFavorite()
      },
      methods: {
        checkFavorite: function () {
          var e = Object(o['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.subkey) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return t = l['B'].getItem(u['a']) || {
                  },
                  i = {
                    subType: this.contentType,
                    subKey: this.subkey,
                    cid: this.cid
                  },
                  e.next = 6,
                  Object(u['h']) (i);
                case 6:
                  if (a = e.sent, !t[this.subkey] || a) {
                    e.next = 11;
                    break
                  }
                  return e.next = 10,
                  this.favorited();
                case 10:
                  a = e.sent;
                case 11:
                  a ? this.onFavoritedSuccess()  : this.onCancelSuccess();
                case 12:
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
        observer: function () {
          var e = Object(o['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  this.favorite ? this.cancelFavorited()  : this.favorited();
                case 1:
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
        favorited: function () {
          var e = Object(o['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!Object(r['M']) ()) {
                    e.next = 16;
                    break
                  }
                  return t = {
                    subType: this.contentType,
                    subKey: this.subkey,
                    cid: this.cid
                  },
                  e.next = 4,
                  Object(u['g']) (t);
                case 4:
                  if (i = e.sent, !i.success) {
                    e.next = 12;
                    break
                  }
                  return this.onFavoritedSuccess(),
                  this.showToast('收藏成功，可在“我的”页面查看'),
                  Object(c['l']) ({
                    rseat: '605091_favclk'
                  }),
                  e.abrupt('return', !0);
                case 12:
                  return this.showToast('网络异常，请重试'),
                  e.abrupt('return', !1);
                case 14:
                  e.next = 20;
                  break;
                case 16:
                  return a = Object(s['a']) ({
                  }, this.subkey, !0),
                  l['B'].setItem(u['a'], a),
                  Object(r['O']) (),
                  e.abrupt('return', !1);
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
        cancelFavorited: function () {
          var e = Object(o['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = {
                    subType: this.contentType,
                    subKey: this.subkey,
                    cid: this.cid
                  },
                  e.next = 3,
                  Object(u['f']) (t);
                case 3:
                  i = e.sent,
                  i.success ? (this.onCancelSuccess(), this.showToast('已取消收藏'), Object(c['l']) ({
                    rseat: '605091_favccel'
                  }))  : this.showToast('网络异常，请重试');
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
        onFavoritedSuccess: function () {
          l['B'].removeItem(u['a']),
          this.updateFavorite(!0)
        },
        onCancelSuccess: function () {
          this.updateFavorite(!1)
        },
        updateFavorite: function (e) {
          this.$emit('update:favorite', !!e)
        },
        showToast: function (e) {
          var t = this;
          this.$nextTick(function () {
            if (!t.isToast) return !1;
            t.$store.dispatch('play/toastText', e),
            setTimeout(function () {
              t.$store.dispatch('play/toastText', '')
            }, 3000)
          })
        }
      },
      render: function () {
        var e = arguments[0];
        return e('a', {
          attrs: {
            href: 'javascript:void(0)'
          },
          class : this.tagClass,
          on: {
            click: this.observer
          }
        }, [
          this.$slots.default])
        }
      },
      p = d,
      h = i('2877'),
      f = Object(h['a']) (p, a, n, !1, null, null, null);
      t['a'] = f.exports
    },
    '9b0a': function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return e.videos && e.videos.length >= 1 ? i('VideoList', {
          attrs: {
            videos: e.videos,
            name: 'm-fragment'
          },
          scopedSlots: e._u([{
            key: 'header',
            fn: function () {
              return [i('AuraCardTitle', {
                attrs: {
                  title: e.title
                }
              })]
            },
            proxy: !0
          },
          {
            key: 'body',
            fn: function (e) {
              var t = e.videos;
              return [i('AuraVideoList', {
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
                staticClass: 'm-pic-playNew-horizontal',
                attrs: {
                  videos: t,
                  ellipsis: !1,
                  'hide-sub-title': !0
                }
              })]
            }
          }
          ], null, !1, 1597667200)
        })  : e._e()
      },
      n = [
      ],
      s = (i('57e7'), i('ac6a'), i('f3e2'), i('96cf'), i('3b8d')),
      o = (i('c5f6'), i('6810')),
      r = i('21fd'),
      c = i('8296'),
      l = {
        name: 'PlayVideoFragment',
        components: {
          VideoList: o['a']
        },
        props: {
          title: {
            type: String,
            required: !0
          },
          qipuId: {
            type: Number,
            required: !0
          },
          albumId: {
            type: Number,
            required: !0
          },
          subTemplate: {
            type: Object,
            required: !0
          },
          isLongVideo: {
            type: Boolean,
            required: !0
          }
        },
        data: function () {
          return {
            videos: [
            ]
          }
        },
        watch: {
          qipuId: function (e, t) {
            (this.subTemplate.album || this.subTemplate.source) && e !== t && this.isLongVideo && this.getData()
          }
        },
        mounted: function () {
          this.getData()
        },
        methods: {
          getData: function () {
            var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
              var t,
              i;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return t = {
                      qipuId: this.qipuId,
                      albumId: this.albumId
                    },
                    e.next = 3,
                    Object(r['d']) (t);
                  case 3:
                    i = e.sent,
                    i && i.length && i.forEach(function (e) {
                      '片段' === e.upperRightCorner ? (e.lowerRightCorner = c['m'].formatTime(e.lowerRightCorner), e.upperRightCorner = '')  : '合集' === e.upperRightCorner && (e.lowerRightCorner = ''.concat(e.lowerRightCorner, '个片段')),
                      e.imageUrl = Object(c['o']) (e.imageUrl, '480_270'),
                      e.pageUrl += (e.pageUrl.indexOf('?') > - 1 ? '&' : '?') + 'vfrm=30-26-26-7'
                    }),
                    this.videos = i;
                  case 6:
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
      },
      u = l,
      d = i('2877'),
      p = Object(d['a']) (u, a, n, !1, null, null, null);
      t['a'] = p.exports
    },
    '9f66': function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box',
          attrs: {
            name: 'm-videoInfo'
          }
        }, [
          i('div', {
            staticClass: 'm-box-items m-box-items-full'
          }, [
            i('div', {
              staticClass: 'm-video-info',
              class : e.addClass
            }, [
              i('div', {
                staticClass: 'video-title'
              }, [
                e._t('videoTitle', [
                  i('h1', {
                    staticClass: 'c-title'
                  }, [
                    e.template.knowledge && e.albumName ? i('a', {
                      staticClass: 'c-title-link',
                      attrs: {
                        href: e.albumPageUrl,
                        title: e.albumName
                      }
                    }, [
                      e._v(e._s(e.albumName) + '\n            ')
                    ])  : e._e(),
                    e._v(e._s(e.title) + '\n          ')
                  ])
                ]),
                e.template.horizontal && !e.subTemplate.short ? i('a', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: '507141_1',
                      expression: '\'507141_1\''
                    }
                  ],
                  staticClass: 'c-more-link',
                  attrs: {
                    id: 'openDesc',
                    href: 'javascript:;'
                  },
                  on: {
                    click: function (t) {
                      e.isDescOpen = !0
                    }
                  }
                }, [
                  i('i', {
                    staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                  })
                ])  : e._e()
              ], 2),
              i('div', {
                staticClass: 'video-data'
              }, [
                i('PlayVideoHot', {
                  attrs: {
                    id: 'openHot',
                    params: e.hotParams
                  },
                  nativeOn: {
                    click: function (t) {
                      e.isHotOpen = !0
                    }
                  }
                }),
                e.subTemplate.movie ? [
                  i('span', {
                    staticClass: 'data-item item-right'
                  }, [
                    i('span', {
                      staticClass: 'c-data-num'
                    }, [
                      e._v(e._s(e.videoInfo.score) + '分')
                    ])
                  ]),
                  i('PlayMovieScore')
                ] : e._e(),
                i('span', {
                  staticClass: 'data-item'
                }),
                i('div', {
                  staticClass: 'data-info'
                }, [
                  e._v(e._s(e.updateStatus))
                ]),
                e._t('default', [
                  e.casts ? i('div', {
                    staticClass: 'data-info'
                  }, [
                    e._v(e._s(e.casts))
                  ])  : e._e()
                ])
              ], 2)
            ]),
            e.template.knowledge ? e._e()  : i('PlayLongVideoInfoDesc', {
              attrs: {
                casts: e.casts,
                open: e.isDescOpen,
                'close-btn': e.closeBtnclass,
                'close-icon': e.closeIconclass
              },
              on: {
                'update:open': function (t) {
                  e.isDescOpen = t
                }
              }
            }, [
              e._t('default')
            ], 2)
          ], 1),
          i('PlayHotLayer', {
            attrs: {
              open: e.isHotOpen
            },
            on: {
              'update:open': function (t) {
                e.isHotOpen = t
              }
            }
          })
        ], 1)
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('fb20'),
      c = i('8931'),
      l = i('70a9'),
      u = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'data-item data-score-item',
          class : {
            selected: e.isShowScore
          }
        }, [
          i('a', {
            ref: 'scoreBtn',
            staticClass: 'c-score-btn',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              touchstart: e.toggleshowScore
            }
          }, [
            e._v(e._s(e.btnText))
          ]),
          i('ModalEvent', {
            staticClass: 'score-heart',
            on: {
              'document:touchstart': e.closeScore
            }
          }, [
            i('span', {
              class : 'heart score-heart-' + e.score
            }, e._l(5, function (t) {
              return i('i', {
                key: t,
                staticClass: 'c-glyphicon c-glyphicon-hearthollow',
                on: {
                  click: function (i) {
                    return e.toggleSetScore(t)
                  }
                }
              })
            }), 0),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v(e._s(e.tip))
            ])
          ])
        ], 1)
      },
      d = [
      ],
      p = (i('96cf'), i('3b8d')),
      h = i('b2e7'),
      f = i('3853'),
      m = i('ab22'),
      v = i('5321'),
      b = {
        name: 'PlayMovieScore',
        components: {
          ModalEvent: f['a']
        },
        data: function () {
          return {
            isLogin: !1,
            isShowScore: !1,
            score: 0,
            btnText: '打分'
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'videoInfo'
        ]), {
          tip: function () {
            var e = [
              '未打分',
              '讨厌',
              '不喜欢',
              '喜欢',
              '非常喜欢',
              '超赞'
            ];
            return e[this.score]
          }
        }),
        mounted: function () {
          this.isLogin = Object(h['M']) (),
          this.isLogin && this.getScore()
        },
        methods: {
          closeScore: function (e) {
            var t = this.$refs.scoreBtn;
            e && e.target !== t && (this.isShowScore = !1)
          },
          toggleshowScore: function () {
            this.isLogin ? (this.isShowScore = !this.isShowScore, Object(v['l']) ({
              rseat: '605091_score'
            }))  : (location.href = '/user.html', Object(v['l']) ({
              rseat: '705232_score0'
            }))
          },
          toggleSetScore: function () {
            var e = Object(p['a']) (regeneratorRuntime.mark(function e(t) {
              var i,
              a;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return this.score = t,
                    i = {
                      qipuId: this.videoInfo.qipuId,
                      score: t
                    },
                    e.next = 4,
                    Object(m['u']) (i);
                  case 4:
                    a = e.sent,
                    this.btnText = a ? '已打分' : '打分';
                  case 6:
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
          getScore: function () {
            var e = Object(p['a']) (regeneratorRuntime.mark(function e() {
              var t,
              i;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                    Object(m['o']) ({
                      qipuId: this.videoInfo.qipuId
                    });
                  case 2:
                    t = e.sent,
                    i = t.score,
                    - 1 !== i ? (this.score = i, this.btnText = '已打分')  : this.score = 0;
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
          }()
        }
      },
      y = b,
      g = i('2877'),
      w = Object(g['a']) (y, u, d, !1, null, null, null),
      I = w.exports,
      _ = {
        name: 'PlayLongVideoInfo',
        components: {
          PlayLongVideoInfoDesc: c['a'],
          PlayVideoHot: r['a'],
          PlayHotLayer: l['a'],
          PlayMovieScore: I
        },
        props: {
          addClass: {
            type: String,
          default:
            ''
          },
          closeBtnclass: {
            type: String,
          default:
            ''
          },
          closeIconclass: {
            type: String,
          default:
            ''
          }
        },
        data: function () {
          return {
            isDescOpen: !1,
            isHotOpen: !1
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', {
          template: 'template',
          videoList: 'videoList',
          subTemplate: 'subTemplate',
          videoInfo: 'videoInfo',
          albumInfo: 'albumInfo',
          channelUrl: function (e) {
            return e.videoInfo.channelUrl
          },
          channelName: function (e) {
            return e.videoInfo.channelName
          },
          albumName: function (e) {
            return e.albumInfo.albumName
          },
          albumPageUrl: function (e) {
            return e.albumInfo.albumPageUrl
          }
        }), {
          title: function () {
            return this.template.knowledge && this.subTemplate.album ? (this.albumInfo.videoCount && this.videoInfo.order ? '第'.concat(this.videoInfo.order, '集')  : '') + (this.videoInfo.shortTitle ? ': ' + this.videoInfo.shortTitle : '')  : this.subTemplate.album ? (this.albumInfo.videoCount && this.videoInfo.order ? '第'.concat(this.videoInfo.order, '集')  : '') + (this.videoInfo.subTitle ? ': ' + this.videoInfo.subTitle : '')  : this.subTemplate.source ? this.videoInfo.shortTitle : this.subTemplate.movie ? this.videoInfo.videoName : this.videoInfo.videoName || this.videoInfo.shortTitle
          },
          updateStatus: function () {
            var e = this.albumInfo,
            t = e.videoCount;
            return this.template.knowledge && t && this.subTemplate.album ? t === e.latestVideoOrder ? ''.concat(t, '集全')  : t > e.latestVideoOrder ? '更新至'.concat(e.latestVideoOrder, '集/共').concat(t, '集')  : '' : this.template.knowledge && e.showContent && this.subTemplate.source ? e.showContent : !this.template.knowledge && this.subTemplate.album && t && e.latestVideoOrder ? t === e.latestVideoOrder ? ''.concat(t, '集全')  : t > e.latestVideoOrder ? '已更新至'.concat(e.latestVideoOrder, '/').concat(t)  : '' : ''
          },
          casts: function () {
            var e = this.videoInfo;
            return this.subTemplate.album ? e.guests ? '嘉宾: '.concat(e.guests)  : e.hosts ? '主持人: '.concat(e.hosts)  : '' : this.subTemplate.source && e.mainActors ? '主演: '.concat(e.mainActors)  : ''
          },
          hotParams: function () {
            return {
              qipuId: this.subTemplate.album ? this.albumInfo.qipuId : this.videoInfo.qipuId,
              channelId: this.videoInfo.cid,
              videoDisplay: this.videoInfo.videoHotDisplay,
              albumDisplay: this.videoInfo.albumHotDisplay
            }
          }
        }),
        methods: {
          closeHot: function () {
            this.isHotOpen = !1
          }
        }
      },
      C = _,
      k = Object(g['a']) (C, a, n, !1, null, null, null);
      t['a'] = k.exports
    },
    a09a: function (e, t, i) {
      'use strict';
      i('96cf');
      var a = i('3b8d'),
      n = (i('ac6a'), i('f3e2'), i('4917'), i('cebc')),
      s = i('2f62'),
      o = i('5a0c'),
      r = i.n(o),
      c = i('b2e7'),
      l = i('5fe1'),
      u = i('3b2f');
      t['a'] = {
        components: {
          AuraToast: u['a']
        },
        data: function () {
          return {
            toast: ''
          }
        },
        computed: Object(n['a']) ({
        }, Object(s['e']) ('play', [
          'albumInfo',
          'videoInfo'
        ]), {
          priceInfo: function () {
            return this.albumInfo.priceInfo
          },
          right: function () {
            return this.priceInfo && this.priceInfo.right
          },
          originPrice: function () {
            var e = this.priceInfo && this.priceInfo.originPrice;
            return this.formatPrice(e)
          },
          realPrice: function () {
            var e = this.priceInfo && this.priceInfo.realPrice;
            return this.formatPrice(e)
          },
          isVipVideo: function () {
            return 2 === this.videoInfo.bossStatus
          },
          isVipAlbum: function () {
            return 2 === this.albumInfo.bossStatus
          },
          isNeedPay: function () {
            return !this.right && this.realPrice
          },
          hasPay: function () {
            return this.isVipAlbum && this.right
          },
          isOffline: function () {
            return this.priceInfo && this.priceInfo.isOffline
          },
          validityDate: function () {
            var e = this.priceInfo && this.priceInfo.validity,
            t = e ? e.match(/(\d)*/) [0] : 0;
            return e ? r() ().add(t, 'day').format('YYYY.MM.DD')  : ''
          },
          hitRules: function () {
            return this.priceInfo && this.priceInfo.hitRules
          },
          unHitRules: function () {
            var e = this.priceInfo && this.priceInfo.unHitRules || [
            ],
            t = [
            ];
            return e.forEach(function (e, i) {
              t.push('<span class="item-num">'.concat(i + 1, '</span>').concat(e.ruleName))
            }),
            t.join('; ')
          }
        }),
        methods: {
          isLogin: function () {
            return Object(c['M']) ()
          },
          toPay: function () {
            var e = Object(a['a']) (regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    localStorage.setItem(l['c'], t),
                    Object(c['M']) () ? this.toCashier(t)  : (localStorage.setItem(l['b'], this.albumInfo.qipuId), this.toLogin());
                  case 2:
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
          afterLogin: function () {
            if (Object(c['M']) ()) {
              var e = localStorage.getItem(l['b']),
              t = localStorage.getItem(l['c']),
              i = e;
              i && this.hasPay ? this.showToast('您已经购买过该课程，请直接观看')  : i && this.isNeedPay && this.toCashier(t),
              localStorage.removeItem(l['b'])
            }
          },
          toCashier: function () {
            var e = Object(a['a']) (regeneratorRuntime.mark(function e(t) {
              var i,
              a,
              n,
              s,
              o,
              r,
              c;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return i = t || this.priceInfo.pid,
                    a = {
                      pid: i,
                      albumId: this.albumInfo.qipuId
                    },
                    n = this.videoInfo.aid || this.videoInfo.tvid,
                    e.next = 5,
                    Object(l['d']) (a);
                  case 5:
                    s = e.sent,
                    s && s.success ? (o = s.data, r = o.orderNo, c = o.partner, location.href = ''.concat(l['a'], '?partner_order_no=').concat(r, '&partner=').concat(c, '&aid=').concat(n))  : s && s.hasPay ? this.showToast('您已经购买过该课程，请直接观看')  : this.showToast('出错啦，请重新购买');
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
          toLogin: function () {
            Object(c['O']) ({
              redirectUrl: location.href
            })
          },
          showToast: function (e) {
            var t = this;
            this.toast = e,
            setTimeout(function () {
              t.toast = ''
            }, 2000)
          },
          formatPrice: function (e) {
            return e && 'number' === typeof e ? + (0.01 * e).toFixed(2)  : 0
          }
        }
      }
    },
    a466: function (e, t, i) {
      'use strict';
      t['a'] = {
        methods: {
          clearLayer: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            };
            e.isFullScreen || (this.$refs.videoInfo && this.$refs.videoInfo.closeHot(), this.$store.dispatch('play/closeComment'), 'undefined' !== typeof this.isShowAlbumLayer && (this.isShowAlbumLayer = !1, this.isShowSourceLayer = !1))
          }
        }
      }
    },
    aa95: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box-items m-box-items-full',
          attrs: {
            name: 'm-videoInfo'
          }
        }, [
          i('div', {
            staticClass: 'm-videoInfo-fold',
            class : {
              selected: e.selected
            }
          }, [
            i('div', {
              staticClass: 'videoInfoFold-title'
            }, [
              i('h1', {
                staticClass: 'c-title'
              }, [
                e.albumInfo.albumName ? i('a', {
                  staticClass: 'c-title-link',
                  attrs: {
                    href: e.albumInfo.albumPageUrl,
                    title: e.albumInfo.albumName
                  }
                }, [
                  e._v(e._s(e.albumInfo.albumName) + ' ')
                ])  : e._e(),
                e._v(e._s(e.title) + '\n      ')
              ])
            ]),
            i('div', {
              staticClass: 'videoInfoFold-data'
            }, [
              i('PlayVideoHot', {
                attrs: {
                  id: 'openHot',
                  params: e.hotParams
                },
                on: {
                  showHot: function (t) {
                    e.showHot = t
                  }
                },
                nativeOn: {
                  click: function (t) {
                    e.isHotOpen = !0
                  }
                }
              }),
              i('div', {
                staticClass: 'data-center'
              }, [
                i('div', {
                  staticClass: 'data-info'
                }, [
                  e.updateStatus ? i('span', {
                    staticClass: 'info-updata'
                  }, [
                    i('span', {
                      staticClass: 'data-dot'
                    }, [
                      e._v('·')
                    ]),
                    i('span', [
                      e._v(e._s(e.updateStatus))
                    ])
                  ])  : e._e(),
                  e.isShowGrade ? i('span', {
                    staticClass: 'info-sorce'
                  }, [
                    i('span', {
                      staticClass: 'data-dot'
                    }, [
                      e._v('·')
                    ]),
                    i('span', [
                      e._v(e._s(e.grade) + '分')
                    ])
                  ])  : e._e()
                ])
              ]),
              e.subTemplate.short && e.userInfo && e.userInfo.userId ? i('div', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '605251_head',
                    expression: '\'605251_head\''
                  }
                ],
                staticClass: 'data-user',
                on: {
                  click: function (t) {
                    return e.jump(e.userInfo.profileUrl)
                  }
                }
              }, [
                i('div', {
                  staticClass: 'data-userImg',
                  style: 'background-image:url(' + e.userInfo.avatar + ')'
                }),
                i('div', {
                  staticClass: 'data-userName'
                }, [
                  e._v(e._s(e.userInfo.userName))
                ])
              ])  : e._e()
            ], 1),
            e.template.knowledge || !e.subTemplate.album && !e.subTemplate.source || !e.casts && !e.albumInfo.desc ? e._e()  : i('a', {
              staticClass: 'videoInfoFold-info',
              attrs: {
                href: 'javascript:void(0)'
              }
            }, [
              e.casts ? i('div', {
                staticClass: 'info-actor'
              }, [
                e._v(e._s(e.casts))
              ])  : e._e(),
              e.albumInfo.desc ? i('div', {
                staticClass: 'info-intro'
              }, [
                e._v('影片简介：' + e._s(e.albumInfo.desc))
              ])  : e._e(),
              i('div', {
                staticClass: 'c-more-link',
                on: {
                  click: e.onArrowClick
                }
              }, [
                i('i', {
                  staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                })
              ])
            ])
          ]),
          i('PlayHotLayer', {
            attrs: {
              open: e.isHotOpen
            },
            on: {
              'update:open': function (t) {
                e.isHotOpen = t
              }
            }
          })
        ], 1)
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('fb20'),
      c = i('5321'),
      l = i('70a9'),
      u = {
        name: 'PlayVideoInfo',
        components: {
          PlayVideoHot: r['a'],
          PlayHotLayer: l['a']
        },
        data: function () {
          return {
            selected: !1,
            showHot: !1,
            isHotOpen: !1,
            isShowGrade: !1,
            grade: ''
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'subTemplate',
          'template',
          'videoInfo',
          'albumInfo',
          'userInfo'
        ]), Object(o['c']) ('play', [
          'defaultCard'
        ]), {
          title: function () {
            return this.subTemplate.album ? (this.videoInfo.order ? '第'.concat(this.videoInfo.order, '集')  : '') + (this.videoInfo.subTitle ? ': ' + this.videoInfo.subTitle : '')  : this.subTemplate.source ? this.videoInfo.shortTitle : this.videoInfo.videoName || this.videoInfo.shortTitle
          },
          updateStatus: function () {
            var e = this.albumInfo;
            return this.subTemplate.album && e.videoCount && e.latestVideoOrder ? e.videoCount === e.latestVideoOrder ? ''.concat(e.videoCount, '集全')  : e.videoCount > e.latestVideoOrder ? '已更新至'.concat(e.latestVideoOrder, '/').concat(e.videoCount)  : '' : this.subTemplate.short ? this.videoInfo.issueTime + '发布' : ''
          },
          casts: function () {
            var e = this.videoInfo;
            return this.subTemplate.album ? e.mainActors ? '主演: '.concat(e.mainActors)  : '' : this.subTemplate.source ? e.guests ? '嘉宾: '.concat(e.guests)  : e.hosts ? '主持人: '.concat(e.hosts)  : '' : ''
          },
          hotParams: function () {
            return {
              qipuId: this.subTemplate.album ? this.albumInfo.qipuId : this.videoInfo.qipuId,
              channelId: this.videoInfo.cid,
              videoDisplay: this.videoInfo.videoHotDisplay,
              albumDisplay: this.videoInfo.albumHotDisplay
            }
          }
        }),
        mounted: function () {
          this.isShowGrade = this.videoInfo.score && 2 === this.videoInfo.cid && (this.template.album || this.template.wechat) && !this.template.bodan,
          this.grade = this.videoInfo.score
        },
        methods: {
          jump: function (e) {
            e && (window.location.href = e)
          },
          onArrowClick: function () {
            Object(c['l']) ({
              rt: 'div',
              rseat: this.selected ? '507141_2' : '507141_1'
            }),
            this.selected = !this.selected
          },
          closeHot: function () {
            this.isHotOpen = !1
          }
        }
      },
      d = u,
      p = i('2877'),
      h = Object(p['a']) (d, a, n, !1, null, null, null);
      t['a'] = h.exports
    },
    aed2: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box',
          attrs: {
            name: 'm-videoInfo'
          }
        }, [
          i('div', {
            staticClass: 'm-box-items m-box-items-full'
          }, [
            i('div', {
              staticClass: 'm-videoInfo-fold longVideo-noFold',
              class : e.addClass
            }, [
              i('div', {
                staticClass: 'videoInfoFold-title'
              }, [
                e._t('videoTitle', [
                  i('h1', {
                    staticClass: 'c-title'
                  }, [
                    e.albumName && e.isShowAlbumName ? i('a', {
                      staticClass: 'c-title-link',
                      attrs: {
                        href: e.albumPageUrl,
                        title: e.albumName
                      }
                    }, [
                      e._v(e._s(e.albumName) + '\n            ')
                    ])  : e._e(),
                    e._v(e._s(e.title) + '\n          ')
                  ])
                ]),
                i('a', {
                  staticClass: 'c-more-link',
                  attrs: {
                    id: 'openDesc',
                    href: 'javascript:;'
                  },
                  on: {
                    click: function (t) {
                      e.isDescOpen = !0
                    }
                  }
                }, [
                  i('i', {
                    staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                  })
                ])
              ], 2),
              i('div', {
                staticClass: 'videoInfoFold-data'
              }, [
                i('PlayVideoHot', {
                  attrs: {
                    id: 'openHot',
                    params: e.hotParams,
                    template: e.template,
                    'is-show-benqi': e.isShowBenqi
                  },
                  nativeOn: {
                    click: function (t) {
                      e.isHotOpen = !0
                    }
                  }
                }),
                i('div', {
                  staticClass: 'data-center'
                }, [
                  i('div', {
                    staticClass: 'data-info'
                  }, [
                    e.updateStatus ? i('span', {
                      staticClass: 'info-updata'
                    }, [
                      i('span', {
                        staticClass: 'data-dot'
                      }, [
                        e._v('·')
                      ]),
                      i('span', [
                        e._v(e._s(e.updateStatus))
                      ])
                    ])  : e._e(),
                    e.isShowGrade ? i('span', {
                      staticClass: 'info-sorce'
                    }, [
                      i('span', {
                        staticClass: 'data-dot'
                      }, [
                        e._v('·')
                      ]),
                      i('span', [
                        e._v(e._s(e.grade) + '分')
                      ])
                    ])  : e._e()
                  ])
                ]),
                e.controlInfo.extendbarComment ? i('PlayExtendToolBarComment', {
                  on: {
                    commentClick: e.toggleCommentClick
                  }
                })  : e._e()
              ], 1)
            ]),
            i('PlayLongVideoInfoDesc', {
              attrs: {
                casts: e.casts,
                open: e.isDescOpen,
                'close-btn': e.closeBtnclass,
                'close-icon': e.closeIconclass,
                'is-show-listdesc': e.isShowListdesc,
                'is-show-dramaslist': e.isShowDramaslist,
                'qipu-id': e.qipuId,
                'is-update-info': e.isUpdateInfo
              },
              on: {
                'update:open': function (t) {
                  e.isDescOpen = t
                }
              }
            }, [
              e._t('default')
            ], 2)
          ], 1),
          i('PlayHotLayer', {
            attrs: {
              open: e.isHotOpen
            },
            on: {
              'update:open': function (t) {
                e.isHotOpen = t
              }
            }
          })
        ], 1)
      },
      n = [
      ],
      s = (i('6762'), i('2fdb'), i('cebc')),
      o = (i('c5f6'), i('2f62')),
      r = i('fb20'),
      c = i('8931'),
      l = i('70a9'),
      u = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', [
          e.isShow ? i('div', {
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
              }
            ],
            staticClass: 'm-video-pp'
          }, [
            i('span', {
              staticClass: 'c-pp-pic c-pp-pic-comment'
            }),
            i('div', {
              staticClass: 'data-comment'
            }, [
              i('i', {
                staticClass: 'c-videoPlayPage-icon c-videoInfo-comment'
              }),
              i('a', {
                staticClass: 'comment-num',
                attrs: {
                  href: 'javascript:void(0);'
                },
                on: {
                  click: e.toggleCommentClick
                }
              }, [
                e.count ? i('span', {
                  staticClass: 'c-num'
                }, [
                  i('span', [
                    e._v(e._s(e.count))
                  ]),
                  e._v('条评论')
                ])  : i('span', {
                  staticClass: 'c-num'
                }, [
                  i('span', [
                    e._v('点击参与评论')
                  ])
                ])
              ])
            ])
          ])  : e._e()
        ])
      },
      d = [
      ],
      p = (i('7f7f'), i('8642')),
      h = i('4f30'),
      f = i('45bc'),
      m = {
        name: 'PlayExtendToolBarComment',
        filters: {
          formatNum: f['c']
        },
        mixins: [
          p['a']
        ],
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'videoInfo'
        ]), {
          cname: function () {
            var e = Object(h['getChannel']) (this.videoInfo.cid + '');
            return e && e.name
          },
          commentNum: function () {
            return this.comment.commentCount
          }
        }),
        methods: {
          toggleCommentClick: function () {
            this.$emit('commentClick', this.count)
          }
        }
      },
      v = m,
      b = i('2877'),
      y = Object(b['a']) (v, u, d, !1, null, null, null),
      g = y.exports,
      w = i('3e9e'),
      I = {
        name: 'PlayFoldVideoInfo',
        components: {
          PlayLongVideoInfoDesc: c['a'],
          PlayVideoHot: r['a'],
          PlayHotLayer: l['a'],
          PlayExtendToolBarComment: g
        },
        props: {
          addClass: {
            type: String,
          default:
            ''
          },
          closeBtnclass: {
            type: String,
          default:
            ''
          },
          closeIconclass: {
            type: String,
          default:
            ''
          },
          isCommentLoad: {
            type: Boolean,
          default:
            !1
          },
          isShowListdesc: {
            type: Boolean,
          default:
            !0
          },
          isShowDramaslist: {
            type: Boolean,
          default:
            !0
          },
          qipuId: {
            type: Number,
          default:
            0
          },
          isShowBenqi: {
            type: String,
          default:
            ''
          },
          isUpdateInfo: {
            type: Boolean,
          default:
            !1
          }
        },
        data: function () {
          return {
            isDescOpen: !1,
            isHotOpen: !1,
            count: 0,
            isShowAlbumName: !0,
            isShowGrade: !1,
            grade: ''
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', {
          template: 'template',
          videoList: 'videoList',
          subTemplate: 'subTemplate',
          videoInfo: 'videoInfo',
          albumInfo: 'albumInfo',
          controlInfo: 'controlInfo',
          channelUrl: function (e) {
            return e.videoInfo.channelUrl
          },
          channelName: function (e) {
            return e.videoInfo.channelName
          },
          albumName: function (e) {
            return e.albumInfo.albumName
          },
          albumPageUrl: function (e) {
            return e.albumInfo.albumPageUrl
          }
        }), {
          title: function () {
            return this.template.knowledge && this.subTemplate.album ? (this.videoInfo.order ? '第'.concat(this.videoInfo.order, '集')  : '') + (this.videoInfo.shortTitle ? ': ' + this.videoInfo.shortTitle : '')  : this.subTemplate.album ? (this.videoInfo.order ? '第'.concat(this.videoInfo.order, '集')  : '') + (this.videoInfo.subTitle ? ': ' + this.videoInfo.subTitle : '')  : this.subTemplate.source ? this.videoInfo.shortTitle : this.subTemplate.movie ? this.videoInfo.videoName : this.videoInfo.shortTitle || this.videoInfo.videoName
          },
          updateStatus: function () {
            var e = this.albumInfo,
            t = e.videoCount;
            return this.template.knowledge && t && this.subTemplate.album ? t === e.latestVideoOrder ? ''.concat(t, '集全')  : t > e.latestVideoOrder ? '更新至'.concat(e.latestVideoOrder, '集/共').concat(t, '集')  : '' : this.template.knowledge && e.showContent && this.subTemplate.source ? e.showContent : !this.template.knowledge && this.subTemplate.album && t && e.latestVideoOrder ? t === e.latestVideoOrder ? ''.concat(t, '集全')  : t > e.latestVideoOrder ? '已更新至'.concat(e.latestVideoOrder, '/').concat(t)  : '' : ''
          },
          casts: function () {
            var e = this.videoInfo;
            return this.subTemplate.source ? e.guests ? '嘉宾: '.concat(e.guests)  : e.hosts ? '主持人: '.concat(e.hosts)  : '' : this.subTemplate.album && e.mainActors ? '主演: '.concat(e.mainActors)  : ''
          },
          hotParams: function () {
            return {
              qipuId: this.subTemplate.album ? this.albumInfo.qipuId : this.videoInfo.qipuId,
              channelId: this.videoInfo.cid,
              videoDisplay: this.videoInfo.videoHotDisplay,
              albumDisplay: this.videoInfo.albumHotDisplay
            }
          }
        }),
        watch: {
          isCommentLoad: function (e, t) {
            e && e !== t && this.$nextTick(function () {
              this.toggleCommentClick(this.count)
            })
          },
          qipuId: function (e) {
            if (e) {
              var t = w['a'].getCurVideo() || {
              };
              'albumList' !== t.card ? this.isShowAlbumName = !1 : this.isShowAlbumName = !0
            }
          }
        },
        mounted: function () {
          this.isShowGrade = this.videoInfo.score && 2 === this.videoInfo.cid && (this.template.album || this.template.wechat) && !this.template.bodan,
          this.grade = this.videoInfo.score
        },
        methods: {
          toggleCommentClick: function (e) {
            var t = document.getElementById('comment');
            if (!t) return this.count = e,
            this.$emit('scrollToComment'),
            !1;
            var i = t && t.offsetTop,
            a = document.getElementById('video');
            a.paused ? window.scrollTo(0, i - 50)  : this.onPlayingScroll()
          },
          onPlayingScroll: function () {
            var e = document.getElementById('comment'),
            t = document.getElementById('video'),
            i = t.parentNode,
            a = {
              isFixed: Array.prototype.includes.call(i.classList, 'video-player-fixed'),
              warperOffsetTop: i.offsetTop,
              commentOffsetTop: e.offsetTop,
              videoHeight: t.clientHeight
            };
            window.scrollTo(0, a.commentOffsetTop - a.videoHeight)
          },
          closeHot: function () {
            this.isHotOpen = !1
          }
        }
      },
      _ = I,
      C = Object(b['a']) (_, a, n, !1, null, null, null);
      t['a'] = C.exports
    },
    b65b: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.isVipAlbum && e.isOffline && !e.right,
              expression: 'isVipAlbum && isOffline && !right'
            }
          ],
          staticClass: 'm-player-tip m-vipPlayer-tip',
          staticStyle: {
            'z-index': '1000'
          }
        }, [
          i('div', {
            staticClass: 'player-tip-inner'
          }, [
            i('div', {
              staticClass: 'c-player-tip-info'
            }, [
              e._v('课程已下线，请观看其他课程')
            ]),
            i('div', {
              staticClass: 'c-player-btn'
            }, [
              i('router-link', {
                staticClass: 'c-btn-buy',
                attrs: {
                  href: 'javascript:void(0)',
                  to: '/edu'
                }
              }, [
                e._v('\n        去看课程\n      ')
              ])
            ], 1),
            i('div', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: !e.isLogin(),
                  expression: '!isLogin()'
                }
              ],
              staticClass: 'c-login-tip-info'
            }, [
              e._v('如已购买，请\n      '),
              i('a', {
                staticClass: 'c-link',
                attrs: {
                  href: '/user.html'
                }
              }, [
                e._v('登录观看')
              ])
            ])
          ])
        ])
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('b2e7'),
      c = {
        name: 'PlayKnowledgeOfflineLayer',
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'albumInfo',
          'videoInfo'
        ]), {
          priceInfo: function () {
            return this.albumInfo.priceInfo
          },
          isOffline: function () {
            return this.priceInfo && this.priceInfo.isOffline
          },
          right: function () {
            return this.priceInfo && this.priceInfo.right
          },
          isVipAlbum: function () {
            return 2 === this.albumInfo.bossStatus
          }
        }),
        mounted: function () {
          var e = this,
          t = this.$parent;
          t.$on('loaded', function () {
            e.isVipAlbum && e.isOffline && !e.right && t.src() && t.src('')
          })
        },
        methods: {
          isLogin: r['M']
        }
      },
      l = c,
      u = i('2877'),
      d = Object(u['a']) (l, a, n, !1, null, null, null);
      t['a'] = d.exports
    },
    b75f: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box'
        }, [
          i('QiyiPlayer', e._b({
            ref: 'player',
            style: e.playStyle,
            attrs: {
              poster: e.loadInfo.imageUrl,
              'video-name': e.loadInfo.videoName || '',
              'title-show': e.showTitle,
              limit: !0,
              'vip-type': e.vipType,
              record: !0,
              'skip-head-and-end': !0,
              'player-class': e.playerClass,
              'player-style': e.playerStyle,
              'quailty-change': e.quailtyChange,
              'is-show-vip-layer': e.isShowVipLayer,
              'force-show-layer': e.error,
              'pingback-params': e.pingbackParams,
              'template-type': e.templateType,
              fatherid: e.fatherId,
              rate: e.currentRate,
              'enable-get-record': e.enableGetRecord,
              'player-type': '0'
            },
            on: {
              loaded: e.loaded,
              created: e.created,
              playStart: e.onPlayStart,
              playEnd: e.onPlayEnd,
              play: e.onPlay,
              pause: e.onPause,
              playBtnClick: e.onPlayBtnClick,
              videoStatusChange: e.videoStatusChangeHandle,
              sourceTypeChange: e.sourceTypeChangeHandle,
              sourceLayerFoo: e.sourceLayerFooHandle,
              fullscreenClick: e.fullscreenClickHandle,
              sourceVipType: e.sourceVipTypeHandle,
              error: e.errorHandle,
              fullscreenchange: e.fullscreenchangeHandle,
              limitShow: e.limitShowHandle,
              seeked: e.onSeeked,
              layerShow: e.layerShowHandle,
              sendVV: e.onSendVV,
              waiting: e.onWaiting,
              timeupdate: e.onTimeupdate
            },
            scopedSlots: e._u([{
              key: 'layer',
              fn: function () {
                return [e._t('layer'),
                i('VideoLayerAccountError', {
                  attrs: {
                    'qipu-id': e.loadInfo.qipuId
                  }
                }),
                i('VideoLayerAdError', {
                  attrs: {
                    'album-id': e.videoInfo.aid,
                    tvid: e.videoInfo.tvid
                  }
                }),
                i('VideoLayerNetwork', {
                  on: {
                    reload: e.load
                  }
                }),
                i('VideoLayerDefaultError', {
                  attrs: {
                    show: e.error
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'limitCallApp',
              fn: function () {
                return [e._t('limitCallApp')]
              },
              proxy: !0
            }
            ], null, !0)
          }, 'QiyiPlayer', e.$attrs, !1)),
          i('PlayVideoFix', {
            attrs: {
              fix: e.layerOpen && e.layerId === e.loadInfo.qipuId,
              'enable-scroll': 'nofixed' !== e.fixTop && e.enableFix && 'feed' !== e.curVideo.card,
              'player-class': e.playerClass,
              'player-style': e.playerStyle
            },
            on: {
              'update:playerClass': function (t) {
                e.playerClass = t
              },
              'update:player-class': function (t) {
                e.playerClass = t
              },
              'update:playerStyle': function (t) {
                e.playerStyle = t
              },
              'update:player-style': function (t) {
                e.playerStyle = t
              }
            }
          }),
          i('portal', {
            attrs: {
              to: 'videoQuailty'
            }
          }, [
            i('PlayVideoQuailty', {
              directives: [
                {
                  name: 'show',
                  rawName: 'v-show',
                  value: e.showQuailty,
                  expression: 'showQuailty'
                }
              ],
              attrs: {
                'bid-list': e.bidList,
                'is-trival-playing': e.isTrivalPlaying,
                'current-bid': e.currentBid
              },
              on: {
                'update:currentRate': e.toggleRateUpdate
              }
            })
          ], 1)
        ], 1)
      },
      n = [
      ],
      s = (i('7f7f'), i('96cf'), i('3b8d')),
      o = i('a745'),
      r = i.n(o),
      c = i('cebc'),
      l = (i('d92a'), i('2f62')),
      u = i('e185'),
      d = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return e.isShow && !e.isTrivalPlaying ? i('BoxShow', {
          attrs: {
            vfms: [
              'm_364_vivo'
            ]
          }
        }, [
          i('div', {
            staticClass: 'm-videoType',
            class : {
              selected: e.isShowList && e.rateList.length
            }
          }, [
            i('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: {
                    rseat: e.rseat,
                    rt: 'a'
                  },
                  expression: '{ rseat: rseat, rt: \'a\'}'
                }
              ],
              ref: 'currentRate',
              staticClass: 'c-videoType-current',
              class : {
                disabled: !e.rateList.length
              },
              attrs: {
                href: 'javascript:void(0)'
              },
              on: {
                click: function (t) {
                  e.isShowList = !e.isShowList
                }
              }
            }, [
              e._v('\n      ' + e._s(e.currentRate.name) + '\n      '),
              e.isShowArrow ? i('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowDown'
              })  : e._e()
            ]),
            i('ModalEvent', {
              staticClass: 'm-videoType-list',
              on: {
                'document:touchstart': e.close
              }
            }, [
              e._l(e.callAppRateList, function (t) {
                return i('PlayButtonDown', {
                  directives: [
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: t.block,
                      expression: 'rate.block'
                    },
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.callAppRateList.length,
                      expression: 'callAppRateList.length'
                    }
                  ],
                  key: t.name,
                  staticClass: 'c-videoType-item',
                  attrs: {
                    'down-app-pos': 'play_appHD_open',
                    rseat: 'mcltdown_5bfygq',
                    subtype: '151',
                    href: 'javascript:void(0)'
                  }
                }, [
                  e._v('\n        ' + e._s(t.name) + '\n      ')
                ])
              }),
              e._l(e.rateList, function (t, a) {
                return i('a', {
                  key: a,
                  staticClass: 'c-videoType-item',
                  class : {
                    selected: t.name === e.currentRate.name
                  },
                  attrs: {
                    title: t.name,
                    href: 'javascript:void(0)'
                  },
                  on: {
                    click: function (i) {
                      return e.changeRate(i, t)
                    }
                  }
                }, [
                  e._v('\n        ' + e._s(t.name) + '\n      ')
                ])
              })
            ], 2)
          ], 1)
        ])  : e._e()
      },
      p = [
      ],
      h = (i('ac6a'), i('f3e2'), i('e814')),
      f = i.n(h),
      m = (i('55dd'), i('d25f'), i('6d67'), i('c5f6'), i('8300')),
      v = i('3853'),
      b = i('cf20'),
      y = i('784b'),
      g = i('8296'),
      w = i('b2e7'),
      I = {
        name: 'PlayVideoQuailty',
        components: {
          BoxShow: m['a'],
          ModalEvent: v['a'],
          PlayButtonDown: b['a']
        },
        props: {
          isShowArrow: {
            type: Boolean,
          default:
            !0
          },
          bidList: {
            type: Array,
          default:
            function () {
              return []
            }
          },
          isTrivalPlaying: {
            type: Boolean,
          default:
            !1
          },
          currentBid: {
            type: [
              Number,
              String
            ],
          default:
            1
          }
        },
        data: function () {
          return {
            isShow: !1,
            currentRate: '',
            isShowList: !1
          }
        },
        computed: Object(c['a']) ({
        }, Object(l['e']) ('play', [
          'subTemplate',
          'videoError',
          'videoInfo',
          'albumInfo'
        ]), {
          rseat: function () {
            return this.subTemplate.short ? '709112_gaoqing' : '605091_str'
          },
          rateList: function () {
            var e = [
            ],
            t = this.bidList.map(function (e) {
              return e.bid
            }),
            i = t.sort(function (e, t) {
              return f() (t) - f() (e)
            }).filter(function (e, t, i) {
              return !t || e !== i[t - 1]
            });
            return i.forEach(function (t) {
              var i = Object(y['c']) (t);
              i && (i.isCallApp = !1, e.push(i))
            }),
            e
          },
          callAppRateList: function () {
            var e = [
            ];
            return g['D'].ios || g['i'].vivo || e.push({
              isCallApp: !0,
              name: 'APP超清',
              block: '804231_bfychqi'
            }),
            e
          }
        }),
        watch: {
          videoError: function (e, t) {
            this.isShow = e
          },
          currentBid: function (e, t) {
            e !== t && (this.currentRate = Object(y['b']) (Object(y['c']) (e)))
          }
        },
        mounted: function () {
          this.checkVip(),
          this.currentRate = Object(y['c']) (this.currentBid),
          Object(y['f']) (this.currentRate)
        },
        methods: {
          changeRate: function (e, t) {
            e.stopPropagation(),
            this.isShowList = !1,
            Object(y['f']) (t);
            var i = this.currentRate;
            this.$emit('update:currentRate', i, t)
          },
          checkVip: function () {
            var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
              var t,
              i;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    if (2 !== this.videoInfo.bossStatus) {
                      e.next = 10;
                      break
                    }
                    if (!Object(w['M']) ()) {
                      e.next = 8;
                      break
                    }
                    return e.next = 4,
                    Object(w['I']) ();
                  case 4:
                    t = e.sent,
                    i = t.data.vip_info,
                    this.vipType = i && i.vipType,
                    this.isShow = this.vipType === w['l'] || this.vipType === w['q'];
                  case 8:
                    e.next = 11;
                    break;
                  case 10:
                    this.isShow = !0;
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
          close: function (e) {
            var t = this.$refs.currentRate;
            e.target === t || t.contains(e.target) || (this.isShowList = !1)
          }
        }
      },
      _ = I,
      C = i('2877'),
      k = Object(C['a']) (_, d, p, !1, null, null, null),
      x = k.exports,
      T = i('0578'),
      P = i('8a88'),
      O = i('703e'),
      S = i('6330'),
      j = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('a', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.isButtonShow && !e.fix,
              expression: 'isButtonShow && !fix'
            }
          ],
          staticClass: 'm-player-btn-fixed',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.play
          }
        }, [
          i('i', {
            staticClass: 'c-glyphicon c-glyphicon-player'
          }),
          e._v('\n  继续播放\n')
        ])
      },
      B = [
      ],
      N = i('4e77'),
      q = i('d409'),
      L = {
        name: 'PlayVideoFix',
        inheritAttrs: !1,
        props: {
          fix: {
            type: Boolean,
          default:
            !1
          },
          enableScroll: {
            type: Boolean,
          default:
            !1
          },
          player: {
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
            videoFix: !1,
            isButtonShow: !1,
            videoHeight: 230
          }
        },
        watch: {
          fix: function (e) {
            this.videoFix = e,
            this.setHeaderFix(!e)
          },
          videoFix: function (e) {
            e ? this.lockVideo()  : this.unlockVideo()
          },
          enableScroll: function (e) {
            e || this.fix || (this.videoFix = !1, this.setHeaderFix(!0))
          }
        },
        mounted: function () {
          this.video = document.querySelector('.m-video-player-wrap');
          var e = document.querySelector('.m-navigation');
          this.videoHeight = this.video.offsetHeight,
          this.videoInvisibleTop = this.videoHeight - (e ? e.offsetHeight : 0),
          Object(N['e']) (this.checkFix),
          this.gesture = new q['a']({
            threshold: 20
          }),
          this.gesture.bind(document),
          this.gesture.on('up', this.onTouchUp.bind(this))
        },
        destroyed: function () {
          Object(N['h']) (this.checkFix),
          this.gesture.unbind(document),
          delete this.gesture
        },
        methods: Object(c['a']) ({
        }, Object(l['d']) (['setHeaderFix']), {
          checkFix: function () {
            if (this.enableScroll && !this.fix) {
              var e = this.$qiyiPlayer.paused(),
              t = this.video.getBoundingClientRect();
              e ? t.top > - this.videoInvisibleTop && (this.videoFix = !1, this.setHeaderFix(!0))  : (this.videoFix = t.top <= 0, this.setHeaderFix(!1))
            }
          },
          lockVideo: function () {
            this.$emit('update:playerClass', {
              'video-player-fixed': !0
            }),
            this.$emit('update:playerStyle', {
              top: '0px'
            })
          },
          unlockVideo: function () {
            this.$emit('update:playerClass', {
            }),
            this.$emit('update:playerStyle', {
            })
          },
          play: function () {
            this.$qiyiPlayer.play(),
            this.videoFix = !0
          },
          onTouchUp: function () {
            if (this.enableScroll && !this.fix) {
              var e = this.$qiyiPlayer.paused();
              e && this.videoFix && !this.sliding && this.slideHideVideo()
            }
          },
          slideHideVideo: function () {
            var e = this;
            this.sliding = !0,
            this.$emit('update:playerStyle', {
              'transition-property': 'top',
              'transition-duration': '1000ms',
              'transition-timing-function': 'cubic-bezier(0.49,-0.01, 0.79, 0.3)',
              top: '-'.concat(this.videoHeight, 'px')
            }),
            setTimeout(function () {
              e.videoFix = !1,
              e.setHeaderFix(!0),
              e.sliding = !1
            }, 1000)
          }
        })
      },
      V = L,
      D = Object(C['a']) (V, j, B, !1, null, null, null),
      A = D.exports,
      E = i('3e9e'),
      R = i('5321'),
      $ = i('2b0e'),
      U = i('0a0d'),
      H = i.n(U),
      F = i('d225'),
      M = i('b0b4'),
      Q = function () {
        function e(t) {
          Object(F['a']) (this, e),
          this.qiyiVideo = t,
          this.video = this.qiyiVideo.getVideo(),
          this.init()
        }
        return Object(M['a']) (e, [
          {
            key: 'handler',
            value: function (e) {
              var t,
              i;
              e.on('pause', function () {
                t = H() ();
                var a = t - i;
                a < 1500 && e.currentTime() < 1 && e.play()
              }),
              e.on('playing', function () {
                i = H() ()
              })
            }
          },
          {
            key: 'init',
            value: function () {
              this.handler(this.video)
            }
          }
        ]),
        e
      }(),
      G = Q,
      K = i('b2dc'),
      z = i('9d09'),
      W = Object(g['C']) ('player', {
        feedback: !0
      }),
      Y = Object(g['C']) ('pingback', {
        feedback: !0
      }),
      J = {
        name: 'PlayVideoRelated',
        components: {
          QiyiPlayer: u['a'],
          PlayVideoFix: A,
          VideoLayerAccountError: T['a'],
          VideoLayerAdError: P['a'],
          VideoLayerNetwork: O['a'],
          PlayVideoQuailty: x,
          VideoLayerDefaultError: S['a']
        },
        props: {
          playStyle: {
            type: String,
          default:
            ''
          },
          playFocus: {
            type: Boolean,
          default:
            !0
          },
          adId: {
            type: String,
          default:
            ''
          },
          fixTop: {
            type: String,
          default:
            ''
          }
        },
        data: function () {
          return {
            vipTypeArr: [
            ],
            enableFix: !1,
            curVideo: {
            },
            playerClass: {
            },
            playerStyle: {
            },
            autoPlay: g['D'].android && (g['i'].qq || g['i'].miuibrowser) && !g['i'].weixin,
            currentBid: 200,
            bidList: [
            ],
            isTrivalPlaying: !1,
            quailtyChange: '',
            showTitle: !1,
            isVideo: !1,
            hasErrorTip: !1,
            pingbackParams: {
            },
            onPageActiveBound: this.onPageActive.bind(this),
            limitShow: !1,
            enableGetRecord: !0,
            cookieId: ''
          }
        },
        computed: Object(c['a']) ({
          vipType: function () {
            return r() (this.vipTypeArr) ? this.vipTypeArr.join(',')  : ''
          }
        }, Object(l['e']) ('play', [
          'videoInfo',
          'layerOpen',
          'adInfoFeed',
          'loadInfo',
          'layerOpen',
          'template',
          'layerId',
          'error',
          'albumInfo',
          'subTemplate',
          'collectionInfo',
          'videoType'
        ]), {
          isShowVipLayer: function () {
            return !this.template.knowledge && !this.albumInfo.isWeChatKnowledgePay
          },
          priceInfo: function () {
            return this.albumInfo && this.albumInfo.priceInfo
          },
          right: function () {
            return this.priceInfo && this.priceInfo.right
          },
          isOffline: function () {
            return this.priceInfo && this.priceInfo.isOffline
          },
          showQuailty: function () {
            return this.template.knowledge && this.isOffline ? this.right && this.isVideo : this.bidList.length && this.isVideo && !this.hasErrorTip
          },
          templateType: function () {
            return this.subTemplate.movie ? 'MOVIE' : this.subTemplate.source ? 'SOURCE' : this.subTemplate.album ? 'ALBUM' : ''
          },
          fatherId: function () {
            return this.collectionInfo.id || (this.subTemplate.album ? this.albumInfo.qipuId : this.subTemplate.source ? this.videoInfo.sourceId : 0)
          },
          currentRate: function () {
            var e = Object(y['c']) (this.currentBid);
            return e && e.rate
          }
        }),
        watch: {
          'loadInfo.qipuId': function (e, t) {
            var i = this;
            this.loadInfo.qipuId && this.load().then(function () {
              i.hasErrorTip || i.$refs.player.play()
            })
          }
        },
        mounted: function () {
          $['default'].prototype.$qiyiPlayer = this.$refs.player,
          Object(N['c']) (function (e) {
            W.log('orientationchange', e.portrait ? 'portrait' : 'landscape')
          }),
          window.addEventListener('unload', z['a']),
          this.cookieId = this.$cookies.get('P00002') || this.$cookies.get('QC006')
        },
        destroyed: function () {
          W.log('curTime', this.$qiyiPlayer.currentTime()),
          Object(N['g']) (this.onPageActiveBound),
          Object(z['a']) ()
        },
        methods: {
          loaded: function (e) {
            this.enableGetRecord = 'normal' === this.videoType;
            var t = e.videoInfo,
            i = t.data.ctl;
            this.currentBid = i && i.bid,
            this.bidList = t.data.program.video || [
            ],
            this.$emit('setRateList', {
              rateList: this.bidList
            }),
            this.isTrivalPlaying = !!t.prv,
            W.log('loaded', {
              dashCode: t.code + '-' + t.data.st,
              bossCode: t.data.boss_ts.code,
              prv: !!t.prv,
              ad: e.adInfo.data,
              vipType: this.vipType,
              format: e.adInfo.type,
              bid: t.bid,
              pano: !!t.data.p.pano && 1 !== t.data.p.pano.type,
              tvid: t.tvid,
              request: t.request,
              src: t.src
            })
          },
          created: function (e) {
            W.log('created'),
            this.isPlayBtnClicked = !1,
            this.$emit('created', {
              $player: this.$refs.player
            }),
            this.load(),
            this.autoPlay && this.$refs.player.play() && W.log('autoplay'),
            this.polyFill = new G(e)
          },
          load: function () {
            var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
              var t,
              i,
              a;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                    Object(w['H']) ();
                  case 2:
                    return this.vipTypeArr = e.sent,
                    t = E['a'].getCurVideo() || {
                    },
                    this.curVideo = t,
                    i = t.source || {
                    },
                    this.showTitle = !!t.player && t.player.title,
                    this.pingbackParams = Object(R['f']) (),
                    a = this.vvParams(),
                    e.abrupt('return', this.$refs.player.loadSource(Object(c['a']) ({
                      vfrmblk: t.vfrmblk,
                      vfrmrst: t.vfrmrst,
                      tvid: this.loadInfo.qipuId,
                      vid: this.loadInfo.vid,
                      adId: this.getWechatAdId(),
                      ut: this.vipTypeArr,
                      adTheme: 'h5-new',
                      relatedTheme: 'h5-new-aura',
                      albumId: this.loadInfo.aid,
                      channelId: this.loadInfo.cid,
                      duration: this.loadInfo.duration,
                      purchaseType: this.loadInfo.purchaseType
                    }, a, i)));
                  case 10:
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
          vvParams: function () {
            var e = r() (Object(K['a']) ()) && (Object(K['a']) ().pop() || {
            }),
            t = Object(z['b']) () || {
            },
            i = e.block || '',
            a = e.rseat || '';
            return {
              ps3: i,
              ps4: a,
              s3: t.block || i,
              s4: t.rseat || a,
              cookieId: this.cookieId
            }
          },
          onPlayStart: function (e) {
            W.log('playStart', e.status),
            Object(N['d']) (this.onPageActiveBound)
          },
          onPlayEnd: function (e) {
            var t = this,
            i = e.end,
            a = e.prv;
            if (W.log('playEnd'), i && !a && (E['a'].next(), !this.subTemplate.movie && !this.template.bodan)) {
              var n = E['a'].getCurVideo(),
              s = E['a'].getNextVideo(n);
              s && s.card === n.card || setTimeout(function () {
                t.$refs.player.resetVideo()
              }, 500)
            }
          },
          onPlay: function () {
            W.log('play', this.$refs.player.currentTime()),
            this.enableFix = !!g['D'].ios,
            this.$refs.player.show()
          },
          onPause: function () {
            W.log('pause', this.$refs.player.currentTime())
          },
          onSeeked: function () {
            W.log('seeked', this.$refs.player.currentTime()),
            this.logBuffer()
          },
          onPlayBtnClick: function () {
            this.isPlayBtnClicked || (W.log('playBtnClicked'), this.isPlayBtnClicked = !0)
          },
          onSendVV: function (e) {
            Y.log('vv', e)
          },
          onWaiting: function () {
            W.log('video waiting'),
            this.logBuffer()
          },
          onTimeupdate: function (e) {
            this.logBuffer()
          },
          logBuffer: function () {
            var e = this.getBuffered(),
            t = this.$qiyiPlayer.currentTime();
            e.end - t < 2 && W.log('currentTime:', t, 'buffered: '.concat(e.start, ' - ').concat(e.end))
          },
          getBuffered: function () {
            var e = this.$qiyiPlayer.buffered(),
            t = e.length - 1;
            return t < 0 ? 0 : {
              start: e.start(t) || 0,
              end: e.end(t) || 0
            }
          },
          getWechatAdId: function () {
            return g['i'].weixin ? 'qc_105092_300415' : this.adId
          },
          toggleRateUpdate: function (e, t) {
            var i = this;
            this.$refs.player.paused() && this.$refs.player.preplay(),
            this.quailtyChange = t.name,
            this.sendVVPingback(e, t);
            var a = this.$refs.player.currentTime(),
            n = this.getPlayParam(t);
            W.log('quailtyChange', this.quailtyChange),
            this.$refs.player.loadSource(n).then(function (e) {
              i.$refs.player.play().then(function () {
                i.$refs.player.seek(a),
                setTimeout(function () {
                  i.quailtyChange = ''
                }, 1000)
              })
            })
          },
          getPlayParam: function (e) {
            return {
              uid: Object(w['C']) (),
              anonymousUid: Object(w['w']) (),
              adTheme: 'h5-new',
              noAD: !0,
              rate: e.rate,
              tvid: this.loadInfo.qipuId,
              ut: String(this.vipTypeArr),
              adId: this.getWechatAdId()
            }
          },
          sendVVPingback: function (e, t) {
            var i = {
              t: '5',
              a: '4',
              from_ra: e.rate,
              to_ra: t.rate,
              tvid: this.loadInfo.qipuId,
              vid: this.loadInfo.vid
            };
            Object(R['z']) (i)
          },
          onPageActive: function (e) {
            !this.limitShow && this.playFocus && (e.active && !this.adInfoFeed.show ? this.$refs.player.play()  : this.$refs.player.pause())
          },
          videoStatusChangeHandle: function (e) {
            W.log('videoStatusChange', e ? 'VIDEO' : 'AD'),
            this.isVideo = e,
            !this.isVideo && this.hasErrorTip && this.removeSrc()
          },
          sourceTypeChangeHandle: function (e) {
            var t = e.type,
            i = e.name;
            t && W.log('layerShow:', i),
            this.hasErrorTip = 0 !== t,
            this.hasErrorTip && this.removeSrc()
          },
          removeSrc: function () {
            this.$refs.player.src() && (this.$refs.player.pause(), this.$refs.player.src(''))
          },
          sourceLayerFooHandle: function (e) {
            var t = e.code,
            i = e.data;
            this.$emit('sourceLayerFoo', {
              code: t,
              data: i
            })
          },
          fullscreenClickHandle: function (e) {
            this.$emit('fullscreenClick', e)
          },
          sourceVipTypeHandle: function (e) {
            e && e.layerInfo && W.log('vipLayerInfo', e),
            this.$emit('sourceVipType', e)
          },
          errorHandle: function (e) {
            if (e) {
              var t = e.targetName || (e.target ? e.target.tagName : 'qiyiPlayer');
              if ('VIDEO' !== t || !this.$refs.player || '' !== this.$refs.player.src()) {
                var i = e.target && e.target.error ? e.target.error : e;
                W.error('error of '.concat(t, ':'), i.constructor.name || '', i.code || '', i.message || '')
              }
            }
          },
          fullscreenchangeHandle: function (e) {
            W.log('fullscreenchange', e.isFullscreen ? 'enter' : 'exit')
          },
          limitShowHandle: function (e) {
            W.log('limitLayer', e ? 'show' : 'hide'),
            this.limitShow = e
          },
          layerShowHandle: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            },
            t = e.type;
            W.log('layerShow', t)
          }
        }
      },
      X = J,
      Z = Object(C['a']) (X, a, n, !1, null, null, null);
      t['a'] = Z.exports
    },
    b771: function (e, t, i) {
      'use strict';
      var a,
      n,
      s = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('PlayPaopaoCard', {
            attrs: {
              feeds: e.feeds
            }
          })
        ], 1)
      },
      o = [
      ],
      r = (i('96cf'), i('3b8d')),
      c = (i('c5f6'), i('00b9')),
      l = i('a4bb'),
      u = i.n(l),
      d = (i('a481'), i('3b2b'), i('7f7f'), i('cebc')),
      p = i('2f62'),
      h = i('1a8c'),
      f = i.n(h),
      m = i('8296'),
      v = 15,
      b = {
        name: 'PlayPaopaoCard',
        props: {
          feeds: {
            type: Object,
          default:
            function () {
              return {
              }
            }
          }
        },
        computed: Object(d['a']) ({
        }, Object(p['e']) ('play', {
          template: 'template'
        })),
        methods: {
          bindClick: function () {
            var e = {
              wallid: this.feeds.wallId,
              wallnm: this.feeds.name,
              t: '20',
              rseat: '505543_01'
            };
            'BODAN' === this.template && (e.tmplt = 'bodantplt'),
            this.toHerf(e)
          },
          toHerf: function (e) {
            if (e.wallid) {
              var t = location.origin + '/m5/bubble/circleInfo_w'.concat(e.wallid, '_p').concat(v, '.html');
              location.href = this.stringFormat(t, e)
            }
          },
          stringFormat: function (e, t) {
            var i = e;
            if (t && f() (t)) for (var a in t) {
              var n = new RegExp('{' + a + '}', 'gi');
              i = i.replace(n, t[a])
            } else if (arguments.length > 1) for (var s = Array.prototype.slice.call(arguments, 1), o = 0, r = s.length; o < r; o++) {
              var c = new RegExp('({)' + o + '(})');
              i = i.replace(c, s[o])
            }
            return i
          }
        },
        render: function (e) {
          var t = this.feeds || {
          };
          return u() (t).length ? e('div', {
            class : 'm-box-items m-box-items-full'
          }, [
            e('div', {
              class : 'm-pp-entrance'
            }, [
              e('a', {
                attrs: {
                  href: 'javascript:;'
                },
                class : 'entrance-link'
              }, [
                e('div', {
                  class : 'img'
                }, [
                  e('img', {
                    attrs: {
                      src: t.icon,
                      width: '100%'
                    }
                  })
                ]),
                e('div', {
                  class : 'info'
                }, [
                  e('div', {
                    class : 'c-title'
                  }, [
                    t.name
                  ]),
                  e('div', {
                    class : 'c-info'
                  }, [
                    Object(m['p']) (t.memberCount),
                    '圈友'
                  ]),
                  e('div', {
                    class : 'c-des'
                  }, [
                    Object(m['p']) (t.feedCount),
                    '剧情讨论'
                  ])
                ]),
                e('span', {
                  class : 'c-btn',
                  on: {
                    click: this.bindClick
                  }
                }, [
                  '去圈子'
                ])
              ])
            ])
          ])  : null
        }
      },
      y = b,
      g = i('2877'),
      w = Object(g['a']) (y, a, n, !1, null, null, null),
      I = w.exports,
      _ = '02000021010000000000',
      C = {
        name: 'PlayJoinerCard',
        components: {
          PlayPaopaoCard: I
        },
        props: {
          circleId: {
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
            feeds: {
            }
          }
        },
        mounted: function () {
          this.getToken()
        },
        methods: {
          getToken: function () {
            var e = Object(r['a']) (regeneratorRuntime.mark(function e() {
              var t;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                    Object(c['b']) ();
                  case 2:
                    t = e.sent,
                    this.getFeed(t);
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
          getFeed: function () {
            var e = Object(r['a']) (regeneratorRuntime.mark(function e(t) {
              var i;
              return regeneratorRuntime.wrap(function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return i = {
                      wallId: this.circleId,
                      qypid: _,
                      atoken: t
                    },
                    e.next = 3,
                    Object(c['d']) (i);
                  case 3:
                    this.feeds = e.sent;
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
          }()
        }
      },
      k = C,
      x = Object(g['a']) (k, s, o, !1, null, null, null);
      t['a'] = x.exports
    },
    ba2c: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('AuraPopup', e._b({
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.popUpOptions.show,
              expression: 'popUpOptions.show'
            }
          ],
          on: {
            leftButtonClick: e.popUpOptions.onleftBtnClick,
            closeBtnClick: e.popUpOptions.onCloseBtnClick
          }
        }, 'AuraPopup', e.popUpOptions, !1))
      },
      n = [
      ],
      s = i('fd12'),
      o = {
        name: 'PlayPlatformLimit',
        components: {
          AuraPopup: s['a']
        },
        data: function () {
          return {
            popUpOptions: {
              show: !1,
              onleftBtnClick: function () {
              },
              onCloseBtnClick: function () {
              }
            }
          }
        },
        methods: {
          sourceLayerFooHandle: function (e) {
            var t = this,
            i = e.code,
            a = e.data;
            'sealingRivalCopyLink' === i && 'success' === a.code && (this.popUpOptions = {
              show: !0,
              title: '提示',
              info: '链接已复制成功！请<span class="info-bold">打开浏览器</span>输入链接，下载爱奇艺观看视频！',
              leftButtonText: '我知道了',
              infoStyle: 'left',
              isCloseShow: !0,
              onleftBtnClick: function (e) {
                t.popUpOptions.show = !1
              },
              onCloseBtnClick: function (e) {
                t.popUpOptions.show = !1
              }
            })
          }
        }
      },
      r = o,
      c = i('2877'),
      l = Object(c['a']) (r, a, n, !1, null, null, null);
      t['a'] = l.exports
    },
    cf20: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('ButtonDown', e._b({
          attrs: {
            'extral-options': e.extralOptions,
            'to-page': e.toPage,
            href: 'javascript:void(0)',
            tag: 'a'
          }
        }, 'ButtonDown', e.$attrs, !1), [
          e._t('default', [
            e._v('\n    ' + e._s(e.text || '打开爱奇艺，提升3倍流畅度！') + '\n  ')
          ])
        ], 2)
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('38ff'),
      c = i('ba45'),
      l = i('ab22'),
      u = {
        name: 'PlayButtonDown',
        components: {
          ButtonDown: r['a']
        },
        props: {
          text: {
            type: String,
          default:
            ''
          },
          options: {
            type: Object,
          default:
            function () {
              return {
              }
            }
          },
          isToHot: {
            type: Boolean,
          default:
            !1
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'videoInfo',
          'verticalVideoInfo',
          'subTemplate'
        ]), {
          isVertical: function () {
            return 'VIDEO_PLAY_MODE_VERTICAL' === this.videoInfo.playModel
          },
          toPage: function () {
            return this.isToHot ? c['d'] : this.isVertical ? c['f'] : c['e']
          },
          extralOptions: function () {
            return Object(l['i']) ({
              videoInfo: this.videoInfo,
              verticalVideoInfo: this.verticalVideoInfo,
              vertical: this.isVertical
            })
          }
        })
      },
      d = u,
      p = i('2877'),
      h = Object(p['a']) (d, a, n, !1, null, null, null);
      t['a'] = h.exports
    },
    cfb9: function (e, t, i) {
      'use strict';
      var a,
      n,
      s = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'm-box-items m-box-items-full',
          attrs: {
            name: 'm-extendBar'
          }
        }, [
          i('section', {
            class : [
              e.showVideoInfoCover,
              {
                'app-extendBar': e.isApp
              }
            ]
          }, [
            e.isShowNormal && e.controlInfo.extendbarComment ? i('PlayLongExtendBarComment', {
              on: {
                commentClick: e.toggleCommentClick
              }
            })  : e._e(),
            e.isShowNormal && e.isShowPortal ? i('portal-target', {
              attrs: {
                name: 'videoQuailty',
                slim: ''
              }
            })  : e._e(),
            e.isShowNormal ? i('div', {
              staticClass: 'm-video-action'
            }, [
              e.template.movie || e.template.knowledge ? i('PlayMovie720Icon')  : e._e(),
              i('PlayLongExtendBarDown', {
                attrs: {
                  'is-new': !1
                }
              }),
              i('PlayLongExtendBarShare', {
                ref: 'shareBtn',
                class : {
                  selected: e.isShowShare
                },
                on: {
                  shareClick: e.toggleShareClick
                }
              }),
              i('PlayLongExtendBarMoreBtn', {
                class : {
                  selected: e.isShowMore
                },
                on: {
                  moreClick: e.toggleMoreClick
                }
              })
            ], 1)  : e._e(),
            e.isShowFlod ? i('Play720P')  : e._e(),
            e.isShowFlod ? i('PlayLongExtendBarDown')  : e._e(),
            e.isShowFlod ? i('PlayExtendToolBarShare', {
              ref: 'shareBtn',
              class : {
                selected: e.isShowShare
              },
              on: {
                shareClick: e.toggleShareClick
              }
            })  : e._e(),
            e.isShowFlod ? i('PlayExtendToolBarMoreBtn', {
              class : {
                selected: e.isShowMore
              },
              on: {
                moreClick: e.toggleMoreClick
              }
            })  : e._e()
          ], 1),
          e.isShowNormal ? i('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.isShowMore,
                expression: 'isShowMore'
              }
            ],
            staticClass: 'm-stow-report-faq'
          }, [
            i('PlayLongExtendBarFavorited'),
            i('PlayLongExtendBarReport', {
              attrs: {
                'qipu-id': e.videoInfo.qipuId
              }
            }),
            i('PlayLongExtendBarProblem')
          ], 1)  : e._e(),
          e.isShowFlod ? i('div', {
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
            i('PlayExtendToolBarFavorited'),
            i('PlayExtendToolBarReport', {
              attrs: {
                'qipu-id': e.videoInfo.qipuId
              }
            }),
            i('PlayExtendToolBarProblem')
          ], 1)  : e._e(),
          i('PlayLongExtendBarShareList', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.isShowShare,
                expression: 'isShowShare'
              }
            ],
            attrs: {
              'share-class': 'm-videoPlay-toolBar'
            },
            on: {
              close: e.closeShare
            }
          }),
          i('AuraToast', {
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
      o = [
      ],
      r = (i('6762'), i('2fdb'), i('cebc')),
      c = i('2f62'),
      l = i('8296'),
      u = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', [
          e.isShow ? i('div', {
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
              }
            ],
            staticClass: 'm-video-pp'
          }, [
            i('span', {
              staticClass: 'c-pp-pic c-pp-pic-comment'
            }),
            i('a', {
              staticClass: 'title-con',
              attrs: {
                href: 'javascript:void(0);'
              },
              on: {
                click: e.toggleCommentClick
              }
            }, [
              e._v('\n      ' + e._s(e.btnText)),
              e.count ? i('span', [
                e._v(': ' + e._s(e.count))
              ])  : e._e()
            ])
          ])  : e._e()
        ])
      },
      d = [
      ],
      p = (i('7f7f'), i('8642')),
      h = i('4f30'),
      f = {
        name: 'PlayLongExtendBarComment',
        mixins: [
          p['a']
        ],
        computed: Object(r['a']) ({
        }, Object(c['e']) ('play', [
          'videoInfo'
        ]), {
          cname: function () {
            var e = Object(h['getChannel']) (this.videoInfo.cid + '');
            return e && e.name
          }
        }),
        methods: {
          toggleCommentClick: function () {
            this.$emit('commentClick', this.count)
          }
        }
      },
      m = f,
      v = i('2877'),
      b = Object(v['a']) (m, u, d, !1, null, null, null),
      y = b.exports,
      g = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'video-action-btn'
        }, [
          i('BoxShow', {
            attrs: {
              vfms: [
                'm_405_bdyy'
              ]
            }
          }, [
            i('PlayKnowledgeButtonDown', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: 'goApp',
                  expression: '\'goApp\''
                }
              ],
              staticClass: 'video-load',
              attrs: {
                'down-app-pos': 'download'
              }
            }, [
              i('i', {
                staticClass: 'c-playPage-icon c-playPage-down'
              }),
              i('span', {
                staticClass: 'c-info'
              }, [
                e._v('下载')
              ])
            ])
          ], 1)
        ], 1)
      },
      w = [
      ],
      I = i('8d9b'),
      _ = i('8300'),
      C = {
        name: 'PlayKnowledgeExtendBarDown',
        components: {
          PlayKnowledgeButtonDown: I['a'],
          BoxShow: _['a']
        }
      },
      k = C,
      x = Object(v['a']) (k, g, w, !1, null, null, null),
      T = x.exports,
      P = i('cf20'),
      O = {
        name: 'PlayLongExtendBarDown',
        components: {
          PlayButtonDown: P['a'],
          BoxShow: _['a']
        },
        props: {
          isNew: {
            type: Boolean,
          default:
            !0
          }
        },
        render: function () {
          var e = arguments[0],
          t = this.isNew ? 'toolBar-item' : 'video-action-btn',
          i = this.isNew ? 'item-link' : 'video-load',
          a = this.isNew ? 'c-videoPlayPage-icon c-videoPlayPage-down' : 'c-playPage-icon c-playPage-down',
          n = this.isNew ? 'toolBar-info' : 'c-info',
          s = [
            'm_405_bdyy'
          ];
          return e('div', {
            class : t
          }, [
            e(_['a'], {
              attrs: {
                vfms: s
              }
            }, [
              e(P['a'], {
                directives: [
                  {
                    name: 'show-pingback',
                    value: '804231_bfyxiazai'
                  },
                  {
                    name: 'pingback',
                    value: '603091_3'
                  }
                ],
                attrs: {
                  subtype: '150',
                  'down-app-android-url': '//mbdapp.iqiyi.com/j/ap/iqiyi_1536.apk',
                  'down-app-pos': 'download'
                },
                class : i
              }, [
                e('i', {
                  class : a
                }),
                e('span', {
                  class : n
                }, [
                  '下载'
                ])
              ])
            ])
          ])
        }
      },
      S = O,
      j = Object(v['a']) (S, a, n, !1, null, null, null),
      B = j.exports,
      N = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'video-action-btn'
        }, [
          i('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '171127_shr',
                expression: '\'171127_shr\''
              }
            ],
            staticClass: 'video-collect',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: function (t) {
                return e.$emit('shareClick')
              }
            }
          }, [
            e.isWechat ? i('i', {
              staticClass: 'c-icon-share-wx'
            })  : i('i', {
              staticClass: 'c-playPage-icon c-playPage-share'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('分享')
            ])
          ])
        ])
      },
      q = [
      ],
      L = {
        name: 'PlayLongExtendBarShare',
        data: function () {
          return {
            isWechat: !1
          }
        },
        brforeMount: function () {
          this.isWechat = l['i'].weixin
        }
      },
      V = L,
      D = Object(v['a']) (V, N, q, !1, null, null, null),
      A = D.exports,
      E = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'video-action-btn',
          class : {
            selected: e.selected
          }
        }, [
          i('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '802271_more',
                expression: '\'802271_more\''
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
            i('i', {
              staticClass: 'c-playPage-icon c-playPage-more'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('更多')
            ])
          ])
        ])
      },
      R = [
      ],
      $ = {
        name: 'PlayLongExtendBarMoreBtn',
        data: function () {
          return {
            selected: !1
          }
        }
      },
      U = $,
      H = Object(v['a']) (U, E, R, !1, null, null, null),
      F = H.exports,
      M = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '802271_jubao',
              expression: '\'802271_jubao\''
            }
          ],
          staticClass: 'c-link',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.report
          }
        }, [
          i('i', {
            staticClass: 'c-extendBar-icon extendBar-report'
          }),
          i('span', {
            staticClass: 'c-info'
          }, [
            e._v('举报')
          ])
        ])
      },
      Q = [
      ],
      G = (i('c5f6'), i('b383')),
      K = i.n(G),
      z = {
        name: 'PlayLongExtendBarReport',
        props: {
          qipuId: {
            type: Number,
          default:
            0
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
            window.location.href = '/m5/feedback/videoReport.html?'.concat(K.a.stringify(t))
          }
        }
      },
      W = z,
      Y = Object(v['a']) (W, M, Q, !1, null, null, null),
      J = Y.exports,
      X = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('a', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '802271_playproblem',
              expression: '\'802271_playproblem\''
            }
          ],
          staticClass: 'c-link',
          attrs: {
            href: 'javascript:void(0)'
          },
          on: {
            click: e.problem
          }
        }, [
          i('i', {
            staticClass: 'c-extendBar-icon extendBar-report'
          }),
          i('span', {
            staticClass: 'c-info'
          }, [
            e._v('播放遇到问题')
          ])
        ])
      },
      Z = [
      ],
      ee = {
        name: 'PlayLongExtendBarProblem',
        methods: {
          problem: function () {
            var e = ''.concat(location.protocol, '//').concat(location.host).concat(location.pathname);
            location.href = '/u/feedback?entry=player&redirect_uri='.concat(encodeURIComponent(e))
          }
        }
      },
      te = ee,
      ie = Object(v['a']) (te, X, Z, !1, null, null, null),
      ae = ie.exports,
      ne = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('PlayFavorited', {
          class : {
            selected: e.faved
          },
          attrs: {
            'content-type': e.contentType,
            cid: e.videoInfo.cid,
            subkey: e.subkey,
            favorite: e.faved,
            'need-check': !0,
            'is-toast': !0,
            'tag-class': 'c-link'
          },
          on: {
            'update:favorite': function (t) {
              e.faved = t
            }
          }
        }, [
          i('i', {
            staticClass: 'c-extendBar-icon extendBar-stow'
          }),
          i('span', {
            staticClass: 'c-info'
          }, [
            e._v(e._s(e.faved ? '已收藏' : '收藏'))
          ])
        ])
      },
      se = [
      ],
      oe = i('985e'),
      re = i('1a51'),
      ce = {
        components: {
          PlayFavorited: oe['a']
        },
        data: function () {
          return {
            faved: !1
          }
        },
        computed: Object(r['a']) ({
        }, Object(c['e']) ('play', [
          'subTemplate',
          'videoInfo'
        ]), {
          contentType: function () {
            return this.subTemplate.album ? re['b'] : this.subTemplate.source ? re['d'] : re['c']
          },
          subkey: function () {
            return this.contentType === re['b'] ? this.videoInfo.aid : this.contentType === re['d'] ? this.videoInfo.sourceId : this.videoInfo.qipuId
          }
        })
      },
      le = {
        name: 'PlayKnowledgeExtendBarFavorited',
        mixins: [
          ce
        ]
      },
      ue = le,
      de = Object(v['a']) (ue, ne, se, !1, null, null, null),
      pe = de.exports,
      he = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('ModalEvent', {
          class : [
            'm-share-tip',
            e.shareClass
          ],
          on: {
            'document:touchstart': e.hide
          }
        }, [
          i('a', {
            staticClass: 'share-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: e.wechatFriend
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-weixin'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('微信好友')
            ])
          ]),
          i('a', {
            staticClass: 'share-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: e.wechatCirlce
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-pyq'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('朋友圈')
            ])
          ]),
          i('a', {
            staticClass: 'share-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: e.qqFriend
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-qq'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('QQ')
            ])
          ]),
          i('a', {
            staticClass: 'share-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: e.qqZone
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-qzone'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('QQ空间')
            ])
          ]),
          i('a', {
            staticClass: 'share-item',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: e.weibo
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-sina'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('新浪微博')
            ])
          ]),
          i('a', {
            ref: 'copy',
            staticClass: 'share-item',
            attrs: {
              'data-clipboard-text': e.pageUrl,
              href: 'javascript:void(0)'
            },
            on: {
              click: e.copyUrl
            }
          }, [
            i('i', {
              staticClass: 'c-icon-share c-icon-share-link'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('复制链接')
            ])
          ]),
          i('div', {
            staticClass: 'c-tip'
          }, [
            e._v('还可以使用浏览器分享功能')
          ])
        ])
      },
      fe = [
      ],
      me = (i('57e7'), i('0da7')),
      ve = i('5321'),
      be = i('3853'),
      ye = {
        name: 'PlayLongExtendBarShareList',
        components: {
          ModalEvent: be['a']
        },
        props: {
          shareClass: {
            type: String,
          default:
            ''
          }
        },
        data: function () {
          return {
            share: null,
            pageUrl: 'undefined' !== typeof location && location.href
          }
        },
        computed: Object(r['a']) ({
        }, Object(c['e']) ('play', [
          'videoInfo',
          'albumInfo',
          'subTemplate'
        ]), {
          topicInfo: function () {
            var e = [
              h['CHANNEL_DIANYING'],
              h['CHANNEL_DIANSHIJU'],
              h['CHANNEL_ZONGYI']
            ].indexOf(this.videoInfo.cid) >= 0 && this.albumInfo.albumName;
            return e ? '#' + this.albumInfo.albumName + '# ' : ''
          },
          config: function () {
            return {
              title: this.videoInfo.videoName,
              url: this.videoInfo.videoUrl,
              icon: this.videoInfo.imageUrl,
              desc: this.videoInfo.desc,
              topicInfo: this.topicInfo,
              site: '爱奇艺',
              copyDom: this.$refs.copy,
              copyCallback: this.onCopy
            }
          }
        }),
        mounted: function () {
          this.share = new me['a'](this.config)
        },
        methods: {
          onCopy: function () {
            this.showToast('copy')
          },
          wechatFriend: function () {
            this.sendPingback('7', '171127_shrwei1'),
            l['i'].weixin ? this.showToast('weixin')  : (this.showToast('browser'), this.share.shareToWeixin())
          },
          wechatCirlce: function () {
            this.sendPingback('8', '171127_shrwei2'),
            l['i'].weixin ? this.showToast('weixin')  : (this.showToast('browser'), this.share.shareToWXFriends())
          },
          qqFriend: function () {
            this.sendPingback('6', '171127_shrqq1'),
            l['i'].weixin ? this.showToast('weixin')  : (this.showToast('browser'), this.share.shareToQQ())
          },
          qqZone: function () {
            this.sendPingback('4', '171127_shrqq2'),
            this.share.shareToQzone(),
            this.hide()
          },
          weibo: function () {
            this.sendPingback('2', '171127_shrwei3'),
            this.share.shareToWeibo(),
            this.hide()
          },
          copyUrl: function () {
            this.sendPingback('26', '171127_shrlian')
          },
          showToast: function (e) {
            var t = this,
            i = {
              weixin: '点击右上角完成分享',
              browser: '可以使用浏览器分享按钮分享给好友哦',
              copy: '链接复制成功，快去分享给大家吧~'
            };
            this.$store.dispatch('play/toastText', i[e]),
            setTimeout(function () {
              t.$store.dispatch('play/toastText', '')
            }, 2000),
            this.hide()
          },
          hide: function (e) {
            this.$emit('close', e)
          },
          sendPingback: function (e, t) {
            var i = {
              c1: this.videoInfo.cid,
              r: this.videoInfo.qipuId,
              shrtgt: e,
              rseat: t
            };
            this.subTemplate.bodan ? i.tmplt = 'bodantplt' : this.subTemplate.short && (i.tmplt = 'shortvideotplt'),
            Object(ve['y']) (i)
          }
        }
      },
      ge = ye,
      we = Object(v['a']) (ge, he, fe, !1, null, null, null),
      Ie = we.exports,
      _e = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item'
        }, [
          i('a', {
            directives: [
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
            },
            on: {
              click: function (t) {
                return e.$emit('shareClick')
              }
            }
          }, [
            e.isWechat ? i('i', {
              staticClass: 'c-icon-share-wx'
            })  : i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-share'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('分享')
            ])
          ])
        ])
      },
      Ce = [
      ],
      ke = {
        name: 'PlayExtendToolBarShare',
        data: function () {
          return {
            isWechat: !1
          }
        },
        brforeMount: function () {
          this.isWechat = l['i'].weixin
        }
      },
      xe = ke,
      Te = Object(v['a']) (xe, _e, Ce, !1, null, null, null),
      Pe = Te.exports,
      Oe = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item',
          class : {
            selected: e.selected
          }
        }, [
          i('a', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '802271_more',
                expression: '\'802271_more\''
              }
            ],
            staticClass: 'item-link',
            attrs: {
              href: 'javascript:void(0)'
            },
            on: {
              click: function (t) {
                return e.$emit('moreClick')
              }
            }
          }, [
            i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-more'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('更多')
            ])
          ])
        ])
      },
      Se = [
      ],
      je = {
        name: 'PlayExtendToolBarMoreBtn',
        data: function () {
          return {
            selected: !1
          }
        }
      },
      Be = je,
      Ne = Object(v['a']) (Be, Oe, Se, !1, null, null, null),
      qe = Ne.exports,
      Le = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item'
        }, [
          i('PlayButtonDown', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: 'h5_block_player_720p',
                expression: '\'h5_block_player_720p\''
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'h5_block_720p',
                expression: '\'h5_block_720p\''
              }
            ],
            staticClass: 'item-link',
            attrs: {
              subtype: 151,
              'down-app-android-url': '//mbdapp.iqiyi.com/j/ap/iqiyi_1536.apk',
              'down-app-pos': 'download'
            }
          }, [
            i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-maliu'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('超清')
            ]),
            i('span', {
              staticClass: 'c-videoPlayPage-icon c-laqi-tip'
            }, [
              e._v('app')
            ])
          ])
        ], 1)
      },
      Ve = [
      ],
      De = {
        name: 'PlayAppBanner',
        components: {
          PlayButtonDown: P['a']
        }
      },
      Ae = De,
      Ee = Object(v['a']) (Ae, Le, Ve, !1, null, null, null),
      Re = Ee.exports,
      $e = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item'
        }, [
          i('PlayFavorited', {
            class : {
              selected: e.faved
            },
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
            i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-collect'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v(e._s(e.faved ? '已收藏' : '收藏'))
            ])
          ])
        ], 1)
      },
      Ue = [
      ],
      He = {
        name: 'PlayExtendToolBarFavorited',
        mixins: [
          ce
        ]
      },
      Fe = He,
      Me = Object(v['a']) (Fe, $e, Ue, !1, null, null, null),
      Qe = Me.exports,
      Ge = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item'
        }, [
          i('a', {
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
            i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-report'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('举报')
            ])
          ])
        ])
      },
      Ke = [
      ],
      ze = {
        name: 'PlayExtendToolBarReport',
        props: {
          qipuId: {
            type: Number,
          default:
            0
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
            window.location.href = '/m5/feedback/videoReport.html?'.concat(K.a.stringify(t))
          }
        }
      },
      We = ze,
      Ye = Object(v['a']) (We, Ge, Ke, !1, null, null, null),
      Je = Ye.exports,
      Xe = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'toolBar-item'
        }, [
          i('a', {
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
            i('i', {
              staticClass: 'c-videoPlayPage-icon c-videoPlayPage-faq'
            }),
            i('span', {
              staticClass: 'toolBar-info'
            }, [
              e._v('播放遇到问题')
            ])
          ])
        ])
      },
      Ze = [
      ],
      et = {
        name: 'PlayExtendToolBarProblem',
        methods: {
          problem: function () {
            var e = ''.concat(location.protocol, '//').concat(location.host).concat(location.pathname);
            location.href = '/u/feedback?entry=player&redirect_uri='.concat(encodeURIComponent(e))
          }
        }
      },
      tt = et,
      it = Object(v['a']) (tt, Xe, Ze, !1, null, null, null),
      at = it.exports,
      nt = i('3b2f'),
      st = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'video-action-btn'
        }, [
          i('PlayButtonDown', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: 'h5_block_player_720p',
                expression: '\'h5_block_player_720p\''
              },
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: 'h5_block_720p',
                expression: '\'h5_block_720p\''
              }
            ],
            staticClass: 'video-load',
            attrs: {
              subtype: 151,
              'down-app-android-url': '//mbdapp.iqiyi.com/j/ap/iqiyi_1536.apk',
              'down-app-pos': 'download'
            }
          }, [
            i('i', {
              staticClass: 'c-playPage-icon c-playPage-maliu'
            }),
            i('span', {
              staticClass: 'c-info'
            }, [
              e._v('超清')
            ]),
            i('span', {
              staticClass: 'c-videoPlayPage-icon c-laqi-tip'
            }, [
              e._v('app')
            ])
          ])
        ], 1)
      },
      ot = [
      ],
      rt = {
        name: 'PlayMovie720Icon',
        components: {
          PlayButtonDown: P['a']
        }
      },
      ct = rt,
      lt = Object(v['a']) (ct, st, ot, !1, null, null, null),
      ut = lt.exports,
      dt = {
        name: 'PlayLongExtendBar',
        components: {
          PlayKnowledgeExtendBarDown: T,
          PlayLongExtendBarDown: B,
          PlayLongExtendBarComment: y,
          PlayLongExtendBarShare: A,
          PlayLongExtendBarMoreBtn: F,
          PlayLongExtendBarReport: J,
          PlayLongExtendBarProblem: ae,
          PlayLongExtendBarFavorited: pe,
          PlayLongExtendBarShareList: Ie,
          PlayExtendToolBarShare: Pe,
          PlayExtendToolBarMoreBtn: qe,
          PlayExtendToolBarFavorited: Qe,
          Play720P: Re,
          PlayExtendToolBarReport: Je,
          PlayExtendToolBarProblem: at,
          AuraToast: nt['a'],
          PlayMovie720Icon: ut
        },
        props: {
          isCommentLoad: {
            type: Boolean,
          default:
            !1
          },
          isShowFlod: {
            type: Boolean,
          default:
            !1
          },
          isShowNormal: {
            type: Boolean,
          default:
            !1
          },
          isShowPortal: {
            type: Boolean,
          default:
            !1
          }
        },
        data: function () {
          return {
            isShowMore: !1,
            isShowShare: !1,
            count: 0,
            isApp: !1
          }
        },
        computed: Object(r['a']) ({
        }, Object(c['e']) ('play', [
          'videoInfo',
          'toastText',
          'template',
          'controlInfo'
        ]), {
          isCurrentShare: function () {
            return this.isShowShare && !this.isShowMore
          },
          isCurrentMore: function () {
            return this.isShowMore && !this.isShowShare
          },
          showVideoInfoCover: function () {
            return this.isShowNormal ? 'm-video-extendBar' : 'm-videoPlay-toolBar'
          }
        }),
        watch: {
          isCommentLoad: function (e, t) {
            e && e !== t && this.$nextTick(function () {
              this.toggleCommentClick(this.count)
            })
          }
        },
        beforeMount: function () {
          this.isApp = l['i'].iqiyi
        },
        destroyed: function () {
          window.removeEventListener('scroll', event)
        },
        methods: {
          closeShare: function (e) {
            var t = this.$refs.shareBtn.$el;
            e && (e.target === t || t.contains(e.target)) || (this.isShowShare = !1)
          },
          toggleShareClick: function () {
            this.isShowShare = !this.isShowShare,
            this.isShowMore = !1
          },
          toggleMoreClick: function () {
            this.isShowMore = !this.isShowMore,
            this.isShowShare = !1
          },
          toggleCommentClick: function (e) {
            if (e) {
              var t = document.getElementById('comment');
              if (!t) return this.count = e,
              this.$emit('scrollToComment'),
              !1;
              var i = t && t.offsetTop,
              a = document.getElementById('video');
              a.paused ? window.scrollTo(0, i - 50)  : this.onPlayingScroll()
            }
          },
          onPlayingScroll: function () {
            var e = document.getElementById('comment'),
            t = document.getElementById('video'),
            i = t.parentNode,
            a = {
              isFixed: Array.prototype.includes.call(i.classList, 'video-player-fixed'),
              warperOffsetTop: i.offsetTop,
              commentOffsetTop: e.offsetTop,
              videoHeight: t.clientHeight
            };
            window.scrollTo(0, a.commentOffsetTop - a.videoHeight)
          }
        }
      },
      pt = dt,
      ht = Object(v['a']) (pt, s, o, !1, null, null, null);
      t['a'] = ht.exports
    },
    da25: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('BottomAppBanner', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '804231_bfyfuceng',
              expression: '\'804231_bfyfuceng\''
            }
          ],
          attrs: {
            carousel: !0,
            cids: String(e.videoInfo.cid),
            utype: 'h5_video',
            rseat: 'mcltdown_8dbfc',
            subtype: '148'
          }
        })
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('3115'),
      c = {
        name: 'PlayBottomApp',
        components: {
          BottomAppBanner: r['a']
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'videoInfo'
        ]))
      },
      l = c,
      u = i('2877'),
      d = Object(u['a']) (l, a, n, !1, null, null, null);
      t['a'] = d.exports
    },
    eda2: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', [
          i('div', {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: !(!e.isVipVideo || !e.realPrice || !e.isNeedPay && e.isLogin()),
                expression: '!!(isVipVideo && realPrice && (isNeedPay || !isLogin()))'
              }
            ],
            staticClass: 'm-player-tip m-vipPlayer-tip',
            staticStyle: {
              'z-index': '1000'
            }
          }, [
            i('div', {
              staticClass: 'player-tip-inner'
            }, [
              i('div', {
                staticClass: 'c-player-tip-info'
              }, [
                e._v('由于版权方要求，本片需购买观看')
              ]),
              i('div', {
                staticClass: 'c-player-btn'
              }, [
                i('div', {
                  staticClass: 'vipPlayer-tip'
                }, [
                  i('a', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: 'go_buy',
                        expression: '\'go_buy\''
                      }
                    ],
                    staticClass: 'c-btn',
                    attrs: {
                      href: 'javascript:void(0)'
                    },
                    on: {
                      click: function (t) {
                        return e.toPay('')
                      }
                    }
                  }, [
                    e._v('\n            ' + e._s(e.realPrice) + '元购买本片\n          ')
                  ])
                ]),
                i('a', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: 'go_buy_package',
                      expression: '\'go_buy_package\''
                    },
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.isPay,
                      expression: 'isPay'
                    }
                  ],
                  staticClass: 'c-btn-buy',
                  attrs: {
                    href: 'javascript:void(0)'
                  },
                  on: {
                    click: e.showPackageLayer
                  }
                }, [
                  e._v('\n          套餐购买')
                ])
              ])
            ])
          ])
        ])
      },
      n = [
      ],
      s = i('cebc'),
      o = i('2f62'),
      r = i('a09a'),
      c = {
        name: 'PlayKnowledgePayLayer',
        mixins: [
          r['a']
        ],
        props: {
          isShowPackages: {
            type: Boolean,
          default:
            !0
          }
        },
        computed: Object(s['a']) ({
        }, Object(o['e']) ('play', [
          'albumInfo'
        ]), {
          isPay: function () {
            var e = 2 === this.albumInfo.bossStatus && 0 !== this.albumInfo.priceInfo.packageNum;
            return e
          }
        }),
        mounted: function () {
          this.afterLogin()
        },
        methods: {
          showPackageLayer: function () {
            this.$emit('showPackageLayer')
          }
        }
      },
      l = c,
      u = i('2877'),
      d = Object(u['a']) (l, a, n, !1, null, null, null);
      t['a'] = d.exports
    },
    f3d8: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('ButtonDown', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: e.curConfig.block,
              expression: 'curConfig.block'
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: e.curConfig.rseat,
              expression: 'curConfig.rseat'
            }
          ],
          class : e.curConfig.class ,
          attrs: {
            subtype: 'H5bfqb_587',
            'schema-url': e.qibabuSchema,
            'down-app-android-url': e.curConfig.androidUrl,
            'down-app-ios-url': e.curConfig.iosUrl,
            'to-page': 'custom'
          }
        }, [
          e.curConfig.icon ? i('i', {
            staticClass: 'qibabu-icon',
            style: 'background-image: url(' + e.curConfig.icon + ')'
          })  : i('i', {
            staticClass: 'c-glyphicon c-glyphicon-iqy'
          }),
          e._v(e._s(e.curConfig.txt) + '\n')
        ])
      },
      n = [
      ],
      s = (i('6762'), i('2fdb'), i('c5f6'), i('38ff')),
      o = {
        name: 'PlayAppBannerShaoer',
        components: {
          ButtonDown: s['a']
        },
        props: {
          type: {
            type: String,
          default:
            'banner'
          },
          playerBanner: {
            type: Object,
          default:
            function () {
              return {
              }
            }
          },
          qipuId: {
            type: Number,
          default:
            0
          },
          aid: {
            type: Number,
          default:
            0
          }
        },
        computed: {
          qibabuSchema: function () {
            var e = this.curConfig.schema;
            return e += (this.curConfig.schema.includes('?') ? '&' : '?') + 'tvid='.concat(this.qipuId, '&albumid=').concat(this.aid),
            e
          },
          curConfig: function () {
            return this.config[this.type || 'banner']
          },
          config: function () {
            return {
              banner: {
                schema: this.playerBanner.schema_half || 'iqiyichild://comic/home?ftype=qbb_h5_halfplayer',
                androidUrl: this.playerBanner.qbb_AndroidURL || '//mbdapp.iqiyi.com/j/dh/iqiyi-kids_10512.apk',
                iosUrl: this.playerBanner.qbb_iosURL || '//itunes.apple.com/cn/app/ai-qi-yi-dong-hua-wu/id874837944?mt=8',
                icon: this.playerBanner.qbb_halfplayer_icon,
                txt: this.playerBanner.qbb_halfplayer_txt,
                block: '807231_kids_halfpalyer',
                rseat: '807231_kids_halfpalyer',
                class : [
                  'c-btn',
                  'c-btn-block'
                ]
              },
              limit: {
                schema: this.playerBanner.schema_fivetime || 'iqiyichild://comic/home?ftype=qbb_h5_fivetime',
                androidUrl: this.playerBanner.qbb_AndroidURL02 || '//mbdapp.iqiyi.com/j/dh/iqiyi-kids_10706.apk',
                iosUrl: this.playerBanner.qbb_iosURL || '//itunes.apple.com/cn/app/ai-qi-yi-dong-hua-wu/id874837944?mt=8',
                icon: this.playerBanner.qbb_five_icon,
                txt: this.playerBanner.qbb_five_txt,
                block: '807234_kids_fivetime',
                rseat: '807234_kids_fivetime',
                class : [
                  'c-link',
                  'c-link-qibabu'
                ]
              }
            }
          }
        }
      },
      r = o,
      c = i('2877'),
      l = Object(c['a']) (r, a, n, !1, null, null, null);
      t['a'] = l.exports
    },
    fb20: function (e, t, i) {
      'use strict';
      var a = function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return - 1 !== e.hotStatus && (e.hot || e.hotDisplay) ? i('span', {
          staticClass: 'data-item'
        }, [
          i('i', {
            class : [
              'icon-video-hot',
              e.hotClass
            ]
          }),
          e.isShowBenqi ? i('span', {
            staticClass: 'c-num'
          }, [
            e._v(e._s(e.isShowBenqi) + e._s(e.hot || e.hotDisplay))
          ])  : e.template.source ? i('span', {
            staticClass: 'c-num'
          }, [
            e._v(e._s('本期热度' + (e.hot || e.hotDisplay)))
          ])  : i('span', {
            staticClass: 'c-num'
          }, [
            e._v(e._s('热度' + (e.hot || e.hotDisplay)))
          ])
        ])  : e._e()
      },
      n = [
      ],
      s = (i('96cf'), i('3b8d')),
      o = i('21fd'),
      r = i('8296'),
      c = {
        name: 'PlayVideoHot',
        props: {
          hot: {
            type: String,
          default:
            ''
          },
          params: {
            type: Object,
          default:
            function () {
              return {
                qipuId: 0,
                channelId: 0,
                videoDisplay: 2,
                albumDisplay: 2
              }
            }
          },
          template: {
            type: Object,
          default:
            function () {
              return {
              }
            }
          },
          isShowBenqi: {
            type: String,
          default:
            ''
          }
        },
        data: function () {
          return {
            hotNum: '',
            hotStatus: - 1,
            hotDisplay: ''
          }
        },
        computed: {
          hotClass: function () {
            return this.hotDisplay >= 5000 ? 'icon-hot-best' : this.hotDisplay >= 4000 ? 'icon-hot-better' : 'icon-hot-good'
          }
        },
        watch: {
          'params.qipuId': function (e, t) {
            this.refreshHot()
          }
        },
        mounted: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  this.refreshHot();
                case 1:
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
          refreshHot: function () {
            this.params.qipuId && (this.hot || Object(o['q']) ({
              qipuId: this.params.qipuId,
              channelId: this.params.channelId,
              videoDisplay: this.params.videoDisplay,
              albumDisplay: this.params.albumDisplay
            }, this.update))
          },
          update: function (e) {
            if (this.hotNum = e.data && e.data.count, this.hotStatus = e.data && e.data.hotStatus, '' === this.hotNum) return this.$emit('showHot', !1);
            this.$emit('showHot', !0),
            this.hotDisplay = Object(r['p']) (this.hotNum)
          }
        }
      },
      l = c,
      u = i('2877'),
      d = Object(u['a']) (l, a, n, !1, null, null, null);
      t['a'] = d.exports
    }
  }
  ]);
