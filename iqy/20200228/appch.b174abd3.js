(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['appch'],
{
  3361: function (e, a, t) {
    a = e.exports = t('2350') (!1),
    a.push([e.i,
    '.ChannelHomeBanner_m-long-HDVideo_15nnb{padding:.1rem;box-sizing:border-box;height:.7rem}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_HDVideo-img_1jtpo{width:100%}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_HDVideo-content_n9aeP{width:100%;background:#f7f7f7;height:.5rem;box-sizing:border-box;border-radius:.05rem;display:block;font-size:0;padding:.1rem 1rem .1rem .5rem;position:relative}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_content-img_eMwb5{width:.3rem;height:.3rem;background-image:url(//www.iqiyipic.com/common/fix/h5-aura/iqy-fang.png);background-size:cover;background-repeat:no-repeat;display:inline-block;position:absolute;left:.1rem;top:.1rem}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_content-info_2Zi8B{font-size:.14rem;color:#333}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_content-btn_2zsNy,.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_content-info_2Zi8B{line-height:.3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.ChannelHomeBanner_m-long-HDVideo_15nnb .ChannelHomeBanner_content-btn_2zsNy{box-sizing:border-box;font-size:.13rem;height:.3rem;color:#0bbe06;padding:0 .1rem;border-radius:.3rem;background:#dbf5da;border:1px solid rgba(11,190,6,.15);position:absolute;right:.1rem;top:.1rem;width:.82rem;text-align:center}',
    '']),
    a.locals = {
      'm-long-HDVideo': 'ChannelHomeBanner_m-long-HDVideo_15nnb',
      'HDVideo-img': 'ChannelHomeBanner_HDVideo-img_1jtpo',
      'HDVideo-content': 'ChannelHomeBanner_HDVideo-content_n9aeP',
      'content-img': 'ChannelHomeBanner_content-img_eMwb5',
      'content-info': 'ChannelHomeBanner_content-info_2Zi8B',
      'content-btn': 'ChannelHomeBanner_content-btn_2zsNy'
    }
  },
  4730: function (e, a, t) {
    var i = t('3361');
    'string' === typeof i && (i = [
      [e.i,
      i,
      '']
    ]),
    i.locals && (e.exports = i.locals);
    var o = t('499e').default;
    o('36e9714c', i, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  '88e7': function (e, a, t) {
    'use strict';
    var i = t('4730'),
    o = t.n(i);
    a['default'] = o.a
  },
  db32: function (e, a, t) {
    'use strict';
    t.r(a);
    var i = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('LoadPage', {
        ref: 'loadPage',
        attrs: {
          'init-load': !e.cards.length
        }
      }, [
        e.cards && e.cards.length ? t('div', [
          t('ChannelHomePop', {
            attrs: {
              'bg-color': e.picInfo.bgColor,
              'image-url': e.picInfo.imageUrl
            }
          }),
          t('AbTest', {
            attrs: {
              'ab-config': 'homeUIUpdate'
            },
            scopedSlots: e._u([{
              key: 'a',
              fn: function () {
                return [e.cardMap[1] ? t('Carousel', {
                  directives: [
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: '811021_home_jdt',
                      expression: '\'811021_home_jdt\''
                    },
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '811021_home_jdt',
                        rseat: '811021_home_jdt'
                      },
                      expression: '{block:\'811021_home_jdt\', rseat:\'811021_home_jdt\'}'
                    }
                  ],
                  attrs: {
                    videos: e.cardMap[1].videos,
                    itempingback: '811021_home_jdt'
                  }
                })  : e._e(),
                t('ChannelHomeList', {
                  attrs: {
                    abtest: {
                      sample: 'a'
                    },
                    'horizontal-list-class': 'm-pic-horizontalNew',
                    'vertical-list-class': 'm-pic-verticalNew',
                    'title-icon': !1
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'b',
              fn: function () {
                return [t('ChannelHomeSearch'),
                e.cardMap[1] ? t('ChannelCarousel', {
                  directives: [
                    {
                      name: 'show-pingback',
                      rawName: 'v-show-pingback',
                      value: '811021_home_jdt',
                      expression: '\'811021_home_jdt\''
                    },
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '811021_home_jdt',
                        rseat: '811021_home_jdt'
                      },
                      expression: '{block:\'811021_home_jdt\', rseat:\'811021_home_jdt\'}'
                    }
                  ],
                  attrs: {
                    videos: e.cardMap[1].videos,
                    itempingback: '811021_home_jdt'
                  }
                })  : e._e(),
                t('ChannelHomeList', {
                  attrs: {
                    abtest: {
                      sample: 'b'
                    }
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 3339212884)
          })
        ], 1)  : e._e()
      ])
    },
    o = [
    ],
    n = (t('6762'), t('0cd8'), t('cebc')),
    r = t('2f62'),
    s = (t('96cf'), t('5176')),
    c = t.n(s),
    l = t('3b8d'),
    d = t('936f'),
    m = t('11ad');
    function h(e, a) {
      return u.apply(this, arguments)
    }
    function u() {
      return u = Object(l['a']) (regeneratorRuntime.mark(function e(a, t) {
        var i,
        o,
        n,
        r,
        s;
        return regeneratorRuntime.wrap(function (e) {
          while (1) switch (e.prev = e.next) {
            case 0:
              return i = a.commit,
              o = a.state,
              n = t.page,
              o.dataDone = !1,
              e.next = 5,
              d['a'].jsonpCache(''.concat(m['e'], '/').concat(n, '/'), {
                headers: {
                  'User-Agent': this.$userAgent.userAgent,
                  Cookie: this.$cookies.cookie
                }
              }, {
                qStore: {
                  timeout: 300
                }
              });
            case 5:
              r = e.sent,
              s = r.data.data || {
              },
              s && (i('setHome', s), i('setHotQuery', s), i('setHotQuery', s.hotQuery ? JSON.parse(s.hotQuery)  : [
              ], {
                root: !0
              }), i('setCustomCss', s), o.dataDone = !0);
            case 8:
            case 'end':
              return e.stop()
          }
        },
        e,
        this)
      })), u.apply(this, arguments)
    }
    function p(e, a) {
      e.cards.length ? e.cards = e.cards.concat(a.cards)  : c() (e, a)
    }
    function v(e, a) {
      if ( - 1 === e.hotIndex) {
        e.hotQuery = a.hotQuery ? JSON.parse(a.hotQuery)  : [
        ];
        var t = e.hotQuery;
        e.hotIndex = Math.floor(Math.random() * t.length)
      }
    }
    function _(e, a) {
      a.backgroundConf && (e.backgroundConf = a.backgroundConf)
    }
    var b = {
      namespaced: !0,
      state: function () {
        return {
          channelId: '',
          channelName: '',
          cards: [
          ],
          hotQuery: [
          ],
          hotIndex: - 1,
          picInfo: {
            bgColor: '',
            imageUrl: '',
            name: '',
            pageUrl: ''
          },
          dataDone: !1,
          backgroundConf: {
            pageUrl: ''
          }
        }
      },
      actions: {
        getHome: h
      },
      mutations: {
        setHome: p,
        setHotQuery: v,
        setCustomCss: _
      }
    },
    k = t('fe3a'),
    f = t('aa91'),
    g = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return e.show ? t('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '804231_kaiping',
            expression: '\'804231_kaiping\''
          }
        ]
      }, [
        t('div', {
          staticClass: 'm-guide po-fixed',
          style: 'background-color: ' + e.bgColor + ';'
        }, [
          t('section', {
            staticClass: 'm-guide-cont'
          }, [
            t('a', {
              attrs: {
                href: 'javascript:;'
              }
            }, [
              t('div', {
                staticClass: 'images',
                style: {
                  'background-image': 'url(' + e.imageUrl + ')'
                }
              })
            ])
          ]),
          t('footer', {
            staticClass: 'm-guide-footer'
          }, [
            t('ButtonDown', {
              staticClass: 'm-guide-download',
              staticStyle: {
                display: 'block !important'
              },
              attrs: {
                subtype: 147,
                'down-app-pos': 'popflow_download_down',
                rseat: '603091_1'
              },
              on: {
                click: e.skip
              }
            }, [
              t('a', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '804231_kaiping',
                    expression: '\'804231_kaiping\''
                  }
                ],
                staticClass: 'c-down-link',
                attrs: {
                  href: 'javascript:void(0)'
                }
              }, [
                e._v('\n          APP观看\n        ')
              ])
            ]),
            t('div', {
              staticClass: 'm-guide-jump'
            }, [
              t('a', {
                staticClass: 'c-jump-link',
                attrs: {
                  href: 'javascript:void(0);'
                },
                on: {
                  click: e.skip
                }
              }, [
                t('span', {
                  staticClass: 'time'
                }, [
                  e._v(e._s(e.time))
                ]),
                e._v('跳过\n        ')
              ])
            ])
          ], 1)
        ])
      ])  : e._e()
    },
    y = [
    ],
    w = t('0a0d'),
    x = t.n(w),
    C = t('38ff'),
    N = t('2c06'),
    M = t('8296'),
    L = {
      name: 'ChannelHomePop',
      components: {
        ButtonDown: C['a']
      },
      props: {
        bgColor: {
          type: String,
          required: !0
        },
        imageUrl: {
          type: String,
          required: !0
        }
      },
      data: function () {
        return {
          show: !1,
          time: '5s'
        }
      },
      mounted: function () {
        var e = this;
        if (false) {
          this.show = !0;
          var a = 5,
          t = new M['j'](function () {
            a -= 1,
            a ? e.time = ''.concat(a, 's')  : (e.skip(), t.stop())
          });
          t.start()
        }
      },
      methods: {
        skip: function () {
          this.show = !1,
          M['L'].setItem(N['o'], x() ())
        },
        isHide: function () {
          var e = [
            '1_2_18',
            '1_2_146',
            '1_1_162',
            '6_55_97',
            '1_3_19',
            '3_82_163',
            '1_1_2',
            '1_116_203',
            '1_52_93',
            '1_53_95',
            '1_135_224',
            'm_123_wifi',
            'f_186_dxth',
            'm_257_pawi',
            'm_306_vivo',
            'm_338_ysll',
            'f_362_mzll',
            'f_361_mzll',
            'f_359_jlll',
            'f_370_jlll',
            'f_358_xmll',
            'm_364_vivo',
            'm_376_bdll',
            'f_382_opll',
            'f_429_vivo',
            'f_367_oppo',
            'f_366_oppo',
            'f_368_fldh'
          ],
          a = Object(N['G']) () || Object(N['A']) ();
          if (e.includes(a)) return !0;
          if (/^https?:\/\/(.*)\.baidu\.com/i.test(document.referrer)) return !0;
          var t = M['L'].getItem(N['o']),
          i = 172800000;
          return !!(t && x() () - t < i)
        }
      }
    },
    A = L,
    z = t('2877'),
    j = Object(z['a']) (A, g, y, !1, null, null, null),
    V = j.exports,
    S = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        t('div', {
          staticClass: 'm-search-wrap'
        }, [
          t('section', {
            class : [
              {
                'search-fixed': e.fixed && !e.isLandscape
              },
              'm-search',
              e.searchBtn
            ]
          }, [
            t('div', {
              staticClass: 'search-box'
            }, [
              t('div', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '190911_searchbar',
                    expression: '\'190911_searchbar\''
                  }
                ],
                staticClass: 'search-placeholder'
              }, [
                t('span', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: '706061_home1',
                      expression: '\'706061_home1\''
                    }
                  ],
                  staticClass: 'search-text',
                  on: {
                    click: function (a) {
                      return e.showSearch({
                        searchValue: e.text
                      })
                    }
                  }
                }, [
                  e._v('\n            ' + e._s(e.text) + '\n          ')
                ]),
                t('a', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: '706061_home1',
                      expression: '\'706061_home1\''
                    }
                  ],
                  staticClass: 'input-link',
                  attrs: {
                    href: '/search.html?source=input&vfrm=2-3-0-1&key=' + e.text
                  }
                }, [
                  t('i', {
                    staticClass: 'c-glyphicon c-glyphicon-searchhome'
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    },
    H = [
    ],
    I = t('4e77'),
    T = {
      name: 'ChannelHomeSearch',
      data: function () {
        return {
          fixed: !1,
          isLandscape: !1
        }
      },
      computed: Object(n['a']) ({
      }, Object(r['e']) ({
        searchBtn: function (e) {
          return e.pageStyle.searchBtn
        },
        text: function (e) {
          var a = e.home && e.home.hotQuery,
          t = e.home && e.home.hotIndex;
          return a[t]
        }
      })),
      mounted: function () {
        var e = this;
        Object(I['e']) (function (a) {
          var t = 'down',
          i = 'up';
          e.isLandscape || (a.scrollDirection === t ? e.fixed = !1 : a.scrollDirection === i && (e.fixed = !0))
        }),
        this.isLandscape = 90 === window.orientation || - 90 === window.orientation,
        Object(I['c']) (function (a) {
          e.isLandscape = a.landscape
        })
      },
      methods: Object(n['a']) ({
      }, Object(r['b']) (['showSearch']))
    },
    B = T,
    O = Object(z['a']) (B, S, H, !1, null, null, null),
    D = O.exports,
    q = t('d83d'),
    U = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('div', {
        directives: [
          {
            name: 'show',
            rawName: 'v-show',
            value: e.videos.length >= 3,
            expression: 'videos.length >= 3'
          }
        ],
        staticClass: 'm-box'
      }, [
        t('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          t('AuraVideoList', e._b({
            directives: [
              {
                name: 'swipe',
                rawName: 'v-swipe',
                value: e.swipeOptions,
                expression: 'swipeOptions'
              }
            ],
            staticClass: 'm-pic-horizontalFullSliding',
            attrs: {
              videos: e.videoList,
              'hide-title': !0,
              'corner-status': {
                lb: {
                  class : 'c-title'
                },
                rb: !1
              },
              'li-style': e.inited ? 'float:left;position:relative;' : ''
            },
            scopedSlots: e._u([{
              key: 'dot',
              fn: function (a) {
                var i = a.videos;
                return [t('div', {
                  staticClass: 'pic-dotList'
                }, e._l(i, function (a, i) {
                  return t('div', {
                    key: i,
                    staticClass: 'dot-item',
                    class : {
                      selected: e.curIndex === i
                    }
                  })
                }), 0)]
              }
            }
            ])
          }, 'AuraVideoList', e.$attrs, !1))
        ], 1)
      ])
    },
    $ = [
    ],
    P = (t('6d67'), t('5bcb')),
    R = {
      name: 'Carousel',
      directives: {
        swipe: P['a']
      },
      inheritAttrs: !1,
      props: {
        videos: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        var e = this;
        return {
          inited: !1,
          curIndex: 0,
          swipeOptions: {
            stopPropagation: !0,
            startSlide: 0,
            callback: function (a) {
              e.curIndex = a
            },
            continuous: !0,
            auto: 3000
          }
        }
      },
      computed: {
        videoList: function () {
          return this.videos.slice(0, 5).map(function (e) {
            return e.lowerLeftCorner = e.mainTitle,
            e
          })
        }
      },
      mounted: function () {
        this.inited = !0
      }
    },
    Q = R,
    E = Object(z['a']) (Q, U, $, !1, null, null, null),
    Z = E.exports,
    F = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('div', [
        t('ChannelHomeBanner'),
        e.cardMap[3] ? t('AuraVideoList', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '708252_home_djrz',
              expression: '\'708252_home_djrz\''
            },
            {
              name: 'behavior',
              rawName: 'v-behavior',
              value: {
                block: '708252_home_djrz',
                rseat: '708252_home_djrz'
              },
              expression: '{block:\'708252_home_djrz\', rseat:\'708252_home_djrz\'}'
            }
          ],
          class : e.horizontalListClass,
          attrs: {
            itempingback: '708252_home_djrz',
            videos: e.cardMap[3].videos
          }
        })  : e._e(),
        e.cardMap[3.1] ? t('VideoList', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '809071_follow',
              expression: '\'809071_follow\''
            }
          ],
          attrs: {
            videos: e.cardMap[3.1].videos,
            'page-size': 2
          },
          scopedSlots: e._u([{
            key: 'header',
            fn: function () {
              return [t('AuraCardTitle', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '809071_follow',
                    expression: '\'809071_follow\''
                  }
                ],
                attrs: {
                  title: e.cardMap[3.1].cardName,
                  icon: e.titleIcon ? 'c-channelicon c-channel-zhuiju' : '',
                  to: '/m/follow'
                },
                scopedSlots: e._u([{
                  key: 'rightBtn',
                  fn: function () {
                    return [t('router-link', {
                      staticClass: 'c-link',
                      attrs: {
                        to: '/m/follow'
                      }
                    }, [
                      e._v('全部追剧'),
                      t('i', {
                        staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                      })
                    ])]
                  },
                  proxy: !0
                }
                ], null, !1, 3887255649)
              })]
            },
            proxy: !0
          },
          {
            key: 'body',
            fn: function (a) {
              var i = a.videos;
              return [t('AuraVideoList', {
                directives: [
                  {
                    name: 'behavior',
                    rawName: 'v-behavior',
                    value: {
                      block: '809071_follow',
                      rseat: '809071_follow'
                    },
                    expression: '{block:\'809071_follow\', rseat:\'809071_follow\'}'
                  }
                ],
                class : e.horizontalListClass,
                attrs: {
                  itempingback: '809071_follow',
                  videos: i
                }
              })]
            }
          }
          ], null, !1, 70604633)
        })  : e._e(),
        e.cardMap[4] ? t('ChannelHomeZixun', {
          attrs: {
            videos: e.cardMap[4].videos,
            'card-name': e.cardMap[4].cardName,
            'title-icon': e.titleIcon
          }
        })  : e._e(),
        e.cardMap[5] ? t('VideoList', {
          attrs: {
            videos: e.cardMap[5].videos,
            'page-size': 2
          },
          scopedSlots: e._u([{
            key: 'body',
            fn: function (a) {
              var i = a.videos;
              return [t('AuraVideoList', {
                directives: [
                  {
                    name: 'behavior',
                    rawName: 'v-behavior',
                    value: {
                      block: '708252_home_n',
                      rseat: '708252_home_n'
                    },
                    expression: '{block:\'708252_home_n\', rseat:\'708252_home_n\'}'
                  }
                ],
                class : e.horizontalListClass,
                attrs: {
                  itempingback: {
                    c1: '25',
                    rseat: '708252_home_n'
                  },
                  videos: i.map(e.subMainTitleAlternate),
                  'hide-sub-title': !0,
                  ellipsis: !1,
                  'corner-status': {
                    lb: !0
                  }
                }
              })]
            }
          },
          {
            key: 'footer',
            fn: function () {
              return [t('AuraCardMore', {
                directives: [
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: {
                      c1: '25',
                      rseat: '708252_home_n'
                    },
                    expression: '{c1: \'25\', rseat: \'708252_home_n\'}'
                  }
                ],
                attrs: {
                  text: '更多资讯',
                  to: '/zixun/'
                }
              })]
            },
            proxy: !0
          }
          ], null, !1, 3432239118)
        })  : e._e(),
        e.page >= 2 ? [
          e.cardMap[6] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '2',
                  block: '706061_home1'
                },
                expression: '{c1: \'2\', block: \'706061_home1\'}'
              }
            ],
            key: '5',
            attrs: {
              videos: e.cardMap[6].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[6].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-dianshiju' : '',
                    to: '/dianshiju/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home1',
                        rseat: '706061_home1'
                      },
                      expression: '{block:\'706061_home1\', rseat:\'706061_home1\'}'
                    }
                  ],
                  class : e.verticalListClass,
                  attrs: {
                    itempingback: {
                      c1: '2',
                      rseat: '706061_home1'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '2',
                        rseat: '706061_home1'
                      },
                      expression: '{c1: \'2\', rseat: \'706061_home1\'}'
                    }
                  ],
                  attrs: {
                    to: '/dianshiju/',
                    text: '更多电视剧'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1223268967)
          })  : e._e(),
          e.cardMap[7] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '1',
                  block: '706061_home2'
                },
                expression: '{c1: \'1\', block: \'706061_home2\'}'
              }
            ],
            key: '6',
            attrs: {
              videos: e.cardMap[7].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[7].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-dianying' : '',
                    to: '/dianying/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home2',
                        rseat: '706061_home2'
                      },
                      expression: '{block:\'706061_home2\', rseat:\'706061_home2\'}'
                    }
                  ],
                  class : e.verticalListClass,
                  attrs: {
                    itempingback: {
                      c1: '1',
                      rseat: '706061_home2'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '1',
                        rseat: '706061_home2'
                      },
                      expression: '{c1: \'1\', rseat: \'706061_home2\'}'
                    }
                  ],
                  attrs: {
                    to: '/dianying/',
                    text: '更多电影'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 2834715618)
          })  : e._e(),
          e.cardMap[8] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '4',
                  block: '706061_home4'
                },
                expression: '{c1: \'4\', block: \'706061_home4\'}'
              }
            ],
            key: '7',
            attrs: {
              videos: e.cardMap[8].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[8].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-dongman' : '',
                    to: '/dongman/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home4',
                        rseat: '706061_home4'
                      },
                      expression: '{block:\'706061_home4\', rseat:\'706061_home4\'}'
                    }
                  ],
                  class : e.verticalListClass,
                  attrs: {
                    itempingback: {
                      c1: '4',
                      rseat: '706061_home4'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '4',
                        rseat: '706061_home4'
                      },
                      expression: '{c1: \'4\', rseat: \'706061_home4\'}'
                    }
                  ],
                  attrs: {
                    to: '/dongman/',
                    text: '更多动漫'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 406477746)
          })  : e._e(),
          e.cardMap[9] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '6',
                  block: '706061_home3'
                },
                expression: '{c1: \'6\', block: \'706061_home3\'}'
              }
            ],
            key: '8',
            attrs: {
              videos: e.cardMap[9].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[9].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-zongyi' : '',
                    to: '/zongyi/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home3',
                        rseat: '706061_home3'
                      },
                      expression: '{block:\'706061_home3\', rseat:\'706061_home3\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '6',
                      rseat: '706061_home3'
                    },
                    videos: i
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '6',
                        rseat: '706061_home3'
                      },
                      expression: '{c1: \'6\', rseat: \'706061_home3\'}'
                    }
                  ],
                  attrs: {
                    to: '/zongyi/',
                    text: '更多综艺'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1423578025)
          })  : e._e(),
          e.cardMap[10] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '7',
                  block: '706061_home5'
                },
                expression: '{c1: \'7\', block: \'706061_home5\'}'
              }
            ],
            key: '9',
            attrs: {
              videos: e.cardMap[10].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[10].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-yule' : '',
                    to: '/yule/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home5',
                        rseat: '706061_home5'
                      },
                      expression: '{block:\'706061_home5\', rseat:\'706061_home5\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '7',
                      rseat: '706061_home5'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1,
                    'corner-status': {
                      lb: !0
                    }
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '7',
                        rseat: '706061_home5'
                      },
                      expression: '{c1: \'7\', rseat: \'706061_home5\'}'
                    }
                  ],
                  attrs: {
                    to: '/yule/',
                    text: '更多娱乐'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1937153230)
          })  : e._e(),
          e.cardMap[11] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: '801171_homeqixiu',
                expression: '\'801171_homeqixiu\''
              }
            ],
            key: '10',
            attrs: {
              videos: e.cardMap[11].videos,
              'page-size': 3
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[11].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-qixiu' : '',
                    href: '//m-x.pps.tv'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  class : e.verticalListClass,
                  attrs: {
                    itempingback: '801171_homeqixiu',
                    videos: i
                  },
                  scopedSlots: e._u([{
                    key: 'title',
                    fn: function (a) {
                      var i = a.video;
                      return [t('div', {
                        staticClass: 'c-title text-ellipsis'
                      }, [
                        t('a', {
                          directives: [
                            {
                              name: 'pingback',
                              rawName: 'v-pingback',
                              value: '801171_homeqixiu',
                              expression: '\'801171_homeqixiu\''
                            }
                          ],
                          attrs: {
                            href: i.pageUrl,
                            title: i.mainTitle || i.title || i.subTitle || ''
                          }
                        }, [
                          e._v('\n                ' + e._s(i.mainTitle) + '\n              ')
                        ])
                      ]),
                      i.onlineNum ? t('div', {
                        staticClass: 'c-info text-ellipsis'
                      }, [
                        e._v('\n              ' + e._s(e._f('chinaNum') (i.onlineNum)) + '人在看\n            ')
                      ])  : e._e()]
                    }
                  }
                  ], null, !0)
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: '801171_homeqixiumore',
                      expression: '\'801171_homeqixiumore\''
                    }
                  ],
                  attrs: {
                    href: '//m-x.pps.tv',
                    text: '更多美女直播'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 3181845538)
          })  : e._e(),
          e.cardMap[12] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '27',
                  block: '706061_home6'
                },
                expression: '{c1: \'27\', block: \'706061_home6\'}'
              }
            ],
            key: '11',
            attrs: {
              videos: e.cardMap[12].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[12].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-yuanchuang' : '',
                    to: '/yuanchuang/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home6',
                        rseat: '706061_home6'
                      },
                      expression: '{block:\'706061_home6\', rseat:\'706061_home6\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '27',
                      rseat: '706061_home6'
                    },
                    'hide-sub-title': !0,
                    ellipsis: !1,
                    videos: i
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '27',
                        rseat: '706061_home6'
                      },
                      expression: '{c1: \'27\', rseat: \'706061_home6\'}'
                    }
                  ],
                  attrs: {
                    to: '/yuanchuang/',
                    text: '更多原创'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1846992484)
          })  : e._e()
        ] : e._e(),
        e.page >= 3 ? [
          e.cardMap[13] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: '612271',
                expression: '\'612271\''
              }
            ],
            key: '12',
            attrs: {
              videos: e.cardMap[13].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[13].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-toutiao' : ''
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: '612271',
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            }
            ], null, !1, 3343153305)
          })  : e._e(),
          e.cardMap[14] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '8',
                  block: '708252_home_g'
                },
                expression: '{c1: \'8\', block: \'708252_home_g\'}'
              }
            ],
            key: '13',
            attrs: {
              videos: e.cardMap[14].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[14].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-youxi' : '',
                    to: '/youxi/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '708252_home_g',
                        rseat: '708252_home_g'
                      },
                      expression: '{block:\'708252_home_g\', rseat:\'708252_home_g\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '8',
                      rseat: '708252_home_g'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '8',
                        rseat: '708252_home_g'
                      },
                      expression: '{c1: \'8\', rseat: \'708252_home_g\'}'
                    }
                  ],
                  attrs: {
                    to: '/youxi/',
                    text: '更多游戏'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 2358215497)
          })  : e._e(),
          e.cardMap[15] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '15',
                  block: '706061_home12'
                },
                expression: '{c1: \'15\', block: \'706061_home12\'}'
              }
            ],
            key: '14',
            attrs: {
              videos: e.cardMap[15].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('ChannelHomeShaoer', {
                  attrs: {
                    card: e.cardMap[15],
                    'title-icon': e.titleIcon,
                    'arrow-right-icon': e.newUI ? 'c-channelAll c-channelAll-arrowRight' : ''
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home12',
                        rseat: '706061_home12'
                      },
                      expression: '{block:\'706061_home12\', rseat:\'706061_home12\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '15',
                      rseat: '706061_home12'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '15',
                        rseat: '706061_home12'
                      },
                      expression: '{c1: \'15\', rseat: \'706061_home12\'}'
                    }
                  ],
                  attrs: {
                    to: '/shaoer/',
                    text: '更多儿童'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1745826780)
          })  : e._e(),
          e.cardMap[16] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '29',
                  block: '706061_home18'
                },
                expression: '{c1: \'29\', block: \'706061_home18\'}'
              }
            ],
            key: '15',
            attrs: {
              videos: e.cardMap[16].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[16].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-muying' : '',
                    to: '/muying/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home18',
                        rseat: '706061_home18'
                      },
                      expression: '{block:\'706061_home18\', rseat:\'706061_home18\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '29',
                      rseat: '706061_home18'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '29',
                        rseat: '706061_home18'
                      },
                      expression: '{c1: \'29\', rseat: \'706061_home18\'}'
                    }
                  ],
                  attrs: {
                    to: '/muying/',
                    text: '更多母婴'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 3977630584)
          })  : e._e(),
          e.cardMap[17] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '12',
                  block: '706061_home10'
                },
                expression: '{c1: \'12\', block: \'706061_home10\'}'
              }
            ],
            key: '16',
            attrs: {
              videos: e.cardMap[17].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[17].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-jiaoyu' : '',
                    to: '/edu/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home10',
                        rseat: '706061_home10'
                      },
                      expression: '{block:\'706061_home10\', rseat:\'706061_home10\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '12',
                      rseat: '706061_home10'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '12',
                        rseat: '706061_home10'
                      },
                      expression: '{c1: \'12\', rseat: \'706061_home10\'}'
                    }
                  ],
                  attrs: {
                    to: '/edu/',
                    text: '更多教育'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 2543662283)
          })  : e._e(),
          e.cardMap[18] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '3',
                  block: '706061_home8'
                },
                expression: '{c1: \'3\', block: \'706061_home8\'}'
              }
            ],
            key: '17',
            attrs: {
              videos: e.cardMap[18].videos,
              'page-size': 6
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[18].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-jilupian' : '',
                    to: '/jilupian/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home8',
                        rseat: '706061_home8'
                      },
                      expression: '{block:\'706061_home8\', rseat:\'706061_home8\'}'
                    }
                  ],
                  class : e.verticalListClass,
                  attrs: {
                    itempingback: {
                      c1: '3',
                      rseat: '706061_home8'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '3',
                        rseat: '706061_home8'
                      },
                      expression: '{c1: \'3\', rseat: \'706061_home8\'}'
                    }
                  ],
                  attrs: {
                    to: '/jilupian/',
                    text: '更多纪录片'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 2818758751)
          })  : e._e(),
          e.cardMap[19] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: '188231_360',
                expression: '\'188231_360\''
              }
            ],
            key: '18',
            attrs: {
              videos: e.cardMap[19].videos
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[19].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-appRecommend' : '',
                    href: 'javascript:void(0)'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: '188231_360',
                    videos: i,
                    'hide-sub-title': !1,
                    ellipsis: !0
                  },
                  scopedSlots: e._u([{
                    key: 'bottom',
                    fn: function (a) {
                      var i = a.video;
                      return [i.kvs && i.kvs.appname && i.kvs.appicon ? t('div', {
                        staticClass: 'm-appRecommend',
                        on: {
                          click: function (a) {
                            return e.toHref(i.pageUrl)
                          }
                        }
                      }, [
                        t('i', {
                          staticClass: 'icon-recommend',
                          style: 'background-image:url(' + i.kvs.appicon + ');'
                        }),
                        t('div', {
                          staticClass: 'title-recommend'
                        }, [
                          e._v(e._s(i.kvs.appname))
                        ])
                      ])  : e._e()]
                    }
                  }
                  ], null, !0)
                })]
              }
            }
            ], null, !1, 2888476985)
          })  : e._e(),
          e.cardMap[20] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '21',
                  block: '706061_home13'
                },
                expression: '{c1: \'21\', block: \'706061_home13\'}'
              }
            ],
            key: '19',
            attrs: {
              videos: e.cardMap[20].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[20].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-shenghuo' : '',
                    to: '/life/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home13',
                        rseat: '706061_home13'
                      },
                      expression: '{block:\'706061_home13\', rseat:\'706061_home13\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '21',
                      rseat: '706061_home13'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '21',
                        rseat: '706061_home13'
                      },
                      expression: '{c1: \'21\', rseat: \'706061_home13\'}'
                    }
                  ],
                  attrs: {
                    to: '/life/',
                    text: '更多生活'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1808653767)
          })  : e._e(),
          e.cardMap[21] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '32',
                  block: '706061_home7'
                },
                expression: '{c1: \'32\', block: \'706061_home7\'}'
              }
            ],
            key: '20',
            attrs: {
              videos: e.cardMap[21].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[21].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-jiankang' : '',
                    to: '/jiankang/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home7',
                        rseat: '706061_home7'
                      },
                      expression: '{block:\'706061_home7\', rseat:\'706061_home7\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '32',
                      rseat: '706061_home7'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '32',
                        rseat: '706061_home7'
                      },
                      expression: '{c1: \'32\', rseat: \'706061_home7\'}'
                    }
                  ],
                  attrs: {
                    to: '/jiankang/',
                    text: '更多健康'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 2886754541)
          })  : e._e(),
          e.cardMap[22] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '17',
                  block: '708252_home_s'
                },
                expression: '{c1: \'17\', block: \'708252_home_s\'}'
              }
            ],
            key: '21',
            attrs: {
              videos: e.cardMap[22].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[22].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-tiyu' : '',
                    to: '/sports/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '708252_home_s',
                        rseat: '708252_home_s'
                      },
                      expression: '{block:\'708252_home_s\', rseat:\'708252_home_s\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '17',
                      rseat: '708252_home_s'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '17',
                        rseat: '708252_home_s'
                      },
                      expression: '{c1: \'17\', rseat: \'708252_home_s\'}'
                    }
                  ],
                  attrs: {
                    to: '/sports/',
                    text: '更多体育'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 317171667)
          })  : e._e(),
          e.cardMap[23] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '13',
                  block: '706061_home11'
                },
                expression: '{c1: \'13\', block: \'706061_home11\'}'
              }
            ],
            key: '22',
            attrs: {
              videos: e.cardMap[23].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[23].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-shishang' : '',
                    to: '/shishang/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home11',
                        rseat: '706061_home11'
                      },
                      expression: '{block:\'706061_home11\', rseat:\'706061_home11\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '13',
                      rseat: '706061_home11'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '13',
                        rseat: '706061_home11'
                      },
                      expression: '{c1: \'13\', rseat: \'706061_home11\'}'
                    }
                  ],
                  attrs: {
                    to: '/shishang/',
                    text: '更多时尚'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 3906003435)
          })  : e._e(),
          e.cardMap[24] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '22',
                  block: '706061_home14'
                },
                expression: '{c1: \'22\', block: \'706061_home14\'}'
              }
            ],
            key: '23',
            attrs: {
              videos: e.cardMap[24].videos,
              'page-size': 4
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[24].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-gaoxiao' : '',
                    to: '/fun/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home14',
                        rseat: '706061_home14'
                      },
                      expression: '{block:\'706061_home14\', rseat:\'706061_home14\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '22',
                      rseat: '706061_home14'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '22',
                        rseat: '706061_home14'
                      },
                      expression: '{c1: \'22\', rseat: \'706061_home14\'}'
                    }
                  ],
                  attrs: {
                    to: '/fun/',
                    text: '更多搞笑'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1254787423)
          })  : e._e()
        ] : e._e(),
        e.page >= 4 ? [
          e.cardMap[25] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '10',
                  block: '708252_home_p'
                },
                expression: '{c1: \'10\', block: \'708252_home_p\'}'
              }
            ],
            key: '24',
            attrs: {
              videos: e.cardMap[25].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[25].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-pianhua' : '',
                    to: '/pianhua/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '708252_home_p',
                        rseat: '708252_home_p'
                      },
                      expression: '{block:\'708252_home_p\', rseat:\'708252_home_p\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '10',
                      rseat: '708252_home_p'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '10',
                        rseat: '708252_home_p'
                      },
                      expression: '{c1: \'10\', rseat: \'708252_home_p\'}'
                    }
                  ],
                  attrs: {
                    to: '/pianhua/',
                    text: '更多片花'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 594578300)
          })  : e._e(),
          e.cardMap[26] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '5',
                  block: '708252_home_m'
                },
                expression: '{c1: \'5\', block: \'708252_home_m\'}'
              }
            ],
            key: '25',
            attrs: {
              videos: e.cardMap[26].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[26].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-yinyue' : '',
                    to: '/yinyue/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '708252_home_m',
                        rseat: '708252_home_m'
                      },
                      expression: '{block:\'708252_home_m\', rseat:\'708252_home_m\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '5',
                      rseat: '708252_home_m'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '5',
                        rseat: '708252_home_m'
                      },
                      expression: '{c1: \'5\', rseat: \'708252_home_m\'}'
                    }
                  ],
                  attrs: {
                    to: '/yinyue/',
                    text: '更多音乐'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1975855454)
          })  : e._e(),
          e.cardMap[27] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '9',
                  block: '706061_home9'
                },
                expression: '{c1: \'9\', block: \'706061_home9\'}'
              }
            ],
            key: '26',
            attrs: {
              videos: e.cardMap[27].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[27].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-lvyou' : '',
                    to: '/lvyou/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home9',
                        rseat: '706061_home9'
                      },
                      expression: '{block:\'706061_home9\', rseat:\'706061_home9\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '9',
                      rseat: '706061_home9'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '9',
                        rseat: '706061_home9'
                      },
                      expression: '{c1: \'9\', rseat: \'706061_home9\'}'
                    }
                  ],
                  attrs: {
                    to: '/lvyou/',
                    text: '更多旅游'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1983547268)
          })  : e._e(),
          e.cardMap[28] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '28',
                  block: '706061_home17'
                },
                expression: '{c1: \'28\', block: \'706061_home17\'}'
              }
            ],
            key: '27',
            attrs: {
              videos: e.cardMap[28].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[28].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-junshi' : '',
                    to: '/mil/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home17',
                        rseat: '706061_home17'
                      },
                      expression: '{block:\'706061_home17\', rseat:\'706061_home17\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '28',
                      rseat: '706061_home17'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '28',
                        rseat: '706061_home17'
                      },
                      expression: '{c1: \'28\', rseat: \'706061_home17\'}'
                    }
                  ],
                  attrs: {
                    to: '/mil/',
                    text: '更多军事'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 3523027088)
          })  : e._e(),
          e.cardMap[29] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '24',
                  block: '706061_home15'
                },
                expression: '{c1: \'24\', block: \'706061_home15\'}'
              }
            ],
            key: '28',
            attrs: {
              videos: e.cardMap[29].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[29].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-caijing' : '',
                    to: '/caijing/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home15',
                        rseat: '706061_home15'
                      },
                      expression: '{block:\'706061_home15\', rseat:\'706061_home15\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '24',
                      rseat: '706061_home15'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '24',
                        rseat: '706061_home15'
                      },
                      expression: '{c1: \'24\', rseat: \'706061_home15\'}'
                    }
                  ],
                  attrs: {
                    to: '/caijing/',
                    text: '更多财经'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 170679872)
          })  : e._e(),
          e.cardMap[30] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '26',
                  block: '706061_home16'
                },
                expression: '{c1: \'26\', block: \'706061_home16\'}'
              }
            ],
            key: '29',
            attrs: {
              videos: e.cardMap[30].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[30].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-qiche' : '',
                    to: '/qiche/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '706061_home16',
                        rseat: '706061_home16'
                      },
                      expression: '{block:\'706061_home16\', rseat:\'706061_home16\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '26',
                      rseat: '706061_home16'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '26',
                        rseat: '706061_home16'
                      },
                      expression: '{c1: \'26\', rseat: \'706061_home16\'}'
                    }
                  ],
                  attrs: {
                    to: '/qiche/',
                    text: '更多汽车'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 727693032)
          })  : e._e(),
          e.cardMap[31] ? t('VideoList', {
            directives: [
              {
                name: 'show-pingback',
                rawName: 'v-show-pingback',
                value: {
                  c1: '30',
                  block: '708252_home_t'
                },
                expression: '{c1: \'30\', block: \'708252_home_t\'}'
              }
            ],
            key: '30',
            attrs: {
              videos: e.cardMap[31].videos,
              'page-size': 2
            },
            scopedSlots: e._u([{
              key: 'header',
              fn: function () {
                return [t('AuraCardTitle', {
                  attrs: {
                    title: e.cardMap[31].cardName,
                    icon: e.titleIcon ? 'c-channelicon c-channel-keji' : '',
                    to: '/keji/'
                  }
                })]
              },
              proxy: !0
            },
            {
              key: 'body',
              fn: function (a) {
                var i = a.videos;
                return [t('AuraVideoList', {
                  directives: [
                    {
                      name: 'behavior',
                      rawName: 'v-behavior',
                      value: {
                        block: '708252_home_t',
                        rseat: '708252_home_t'
                      },
                      expression: '{block:\'708252_home_t\', rseat:\'708252_home_t\'}'
                    }
                  ],
                  class : e.horizontalListClass,
                  attrs: {
                    itempingback: {
                      c1: '30',
                      rseat: '708252_home_t'
                    },
                    videos: i,
                    'hide-sub-title': !0,
                    ellipsis: !1
                  }
                })]
              }
            },
            {
              key: 'footer',
              fn: function () {
                return [t('AuraCardMore', {
                  directives: [
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: {
                        c1: '30',
                        rseat: '708252_home_t'
                      },
                      expression: '{c1: \'30\', rseat: \'708252_home_t\'}'
                    }
                  ],
                  attrs: {
                    to: '/keji/',
                    text: '更多科技'
                  }
                })]
              },
              proxy: !0
            }
            ], null, !1, 1293389919)
          })  : e._e()
        ] : e._e(),
        e.page >= 4 ? t('div', {
          key: 'bottom'
        }, [
          t('AppRecommend', {
            attrs: {
              'title-icon': e.titleIcon
            }
          }),
          t('AuraFooter'),
          t('BackTop', {
            class : e.newUI ? 'sideBarNew' : ''
          })
        ], 1)  : e._e(),
        e.isShowDiversion ? t('DiversionTip', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '805161_layer',
              expression: '\'805161_layer\''
            }
          ],
          attrs: {
            'is-resource': !0,
            vfm: e.vfm,
            'show-pingback': '805161_show'
          }
        })  : e._e(),
        t('LoadBottom', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.page <= 3,
              expression: 'page <= 3'
            }
          ],
          attrs: {
            callback: e.loadVideo
          }
        })
      ], 2)
    },
    G = [
    ],
    J = t('ff9b'),
    W = t('3bfe'),
    Y = t('88a6'),
    K = t('302b'),
    X = t('da1f'),
    ee = t('9e5e'),
    ae = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return e.isShow ? t('div', {
        class : [
          'm-suspend-banner',
          {
            'am-suspend-show': e.showClass,
            'am-suspend-hide': !e.showClass
          }
        ],
        style: 'background-image:url(' + e.image + ')',
        on: {
          click: function (a) {
            return e.toHref(e.actLink)
          }
        }
      })  : e._e()
    },
    te = [
    ],
    ie = (t('d25f'), t('b54a'), t('9b6b')),
    oe = t('5321'),
    ne = {
      name: 'DiversionTip',
      props: {
        imageUrl: {
          type: String,
        default:
          ''
        },
        link: {
          type: String,
        default:
          ''
        },
        isResource: {
          type: Boolean,
        default:
          !0
        },
        vfm: {
          type: String,
        default:
          ''
        },
        showPingback: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          isShow: this.imageUrl && this.link,
          image: this.imageUrl,
          actLink: this.link,
          showClass: !0,
          showDiversion: null
        }
      },
      mounted: function () {
        var e = this;
        this.isShow ? Object(oe['h']) ({
          block: this.showPingback
        })  : this.initDiversion(),
        Object(I['e']) (function (a) {
          e.showClass = !1,
          clearTimeout(e.showDiversion),
          e.showDiversion = setTimeout(function () {
            e.showClass = !0
          }, 2700)
        })
      },
      methods: {
        initDiversion: function () {
          var e = Object(l['a']) (regeneratorRuntime.mark(function e() {
            var a,
            t,
            i,
            o = this;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.isResource) {
                    e.next = 7;
                    break
                  }
                  return e.next = 3,
                  Object(ie['f']) (ie['b']);
                case 3:
                  a = e.sent,
                  t = a && a.items,
                  t && t.length && (i = t.filter(function (e) {
                    return e.kvs && e.kvs.channel_code === o.vfm
                  }), i && i[0] && i[0].kvs && (this.image = i[0].kvs.layer_pic, this.actLink = i[0].kvs.url_get)),
                  this.image && this.actLink && (this.isShow = !0, Object(oe['h']) ({
                    block: this.showPingback
                  }));
                case 7:
                case 'end':
                  return e.stop()
              }
            },
            e,
            this)
          })); function a() {
            return e.apply(this, arguments)
          }
          return a
        }(),
        toHref: function (e) {
          e && setTimeout(function () {
            window.location.href = e
          }, 200)
        }
      }
    },
    re = ne,
    se = Object(z['a']) (re, ae, te, !1, null, null, null),
    ce = se.exports,
    le = t('6810'),
    de = t('23fe'),
    me = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('div', {
        staticClass: 'm-box'
      }, [
        t('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          t('section', {
            class : e.$style['m-long-HDVideo']
          }, [
            t('ButtonDown', {
              directives: [
                {
                  name: 'show-pingback',
                  rawName: 'v-show-pingback',
                  value: 'h5_block_home_iqiyiApp',
                  expression: '\'h5_block_home_iqiyiApp\''
                },
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: 'h5_home_iqiyiApp',
                  expression: '\'h5_home_iqiyiApp\''
                }
              ],
              attrs: {
                subtype: 'H5syfw_1327',
                'down-app-url': '//ota.iqiyi.com/adf/89b2331d21dd43a58b19e68e65c99c33'
              }
            }, [
              t('img', {
                class : e.$style['HDVideo-img'],
                attrs: {
                  src: e.bannerImg[e.abSample]
                }
              })
            ])
          ], 1)
        ])
      ])
    },
    he = [
    ],
    ue = t('c415'),
    pe = {
      name: 'ChannelHomeBanner',
      components: {
        ButtonDown: C['a']
      },
      mixins: [
        ue['a']
      ],
      data: function () {
        return {
          bannerImg: {
            a: 'http://www.iqiyipic.com/common/fix/h5-aura/banner.gif',
            b: '//pic3.iqiyipic.com/common/lego/20190927/c7a340571f634813bdb7813fe0317198.png'
          }
        }
      }
    },
    ve = pe,
    _e = t('88e7');
    function be(e) {
      this['$style'] = _e['default'].locals || _e['default']
    }
    var ke = Object(z['a']) (ve, me, he, !1, be, null, null),
    fe = ke.exports,
    ge = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return e.videoInfos.length ? t('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: {
              c1: '25',
              block: '708252_home_n'
            },
            expression: '{ c1: \'25\', block: \'708252_home_n\' }'
          }
        ],
        staticClass: 'm-box'
      }, [
        t('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          t('AuraCardTitle', {
            directives: [
              {
                name: 'pingback',
                rawName: 'v-pingback',
                value: '706061_home4_2',
                expression: '\'706061_home4_2\''
              }
            ],
            attrs: {
              title: e.cardName || '今日资讯',
              icon: e.titleIcon ? 'c-channelicon c-channel-zixun' : '',
              href: '/zixun/'
            }
          })
        ], 1),
        t('div', {
          staticClass: 'm-box-items'
        }, [
          t('div', {
            staticClass: 'm-news'
          }, e._l(e.videoInfos, function (a, i) {
            return t('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: '706061_home4_1',
                  expression: '\'706061_home4_1\''
                }
              ],
              key: i,
              staticClass: 'm-news-list',
              attrs: {
                href: a.pageUrl,
                title: a.title
              }
            }, [
              t('i', {
                class : e.zixunPlayIcon[e.abSample]
              }),
              e._v('\n        ' + e._s(a.title) + '\n      ')
            ])
          }), 0)
        ])
      ])  : e._e()
    },
    ye = [
    ],
    we = {
      name: 'ChannelHomeZixun',
      mixins: [
        ue['a']
      ],
      props: {
        cardName: {
          type: String,
        default:
          ''
        },
        titleIcon: {
          type: Boolean,
        default:
          !0
        },
        videos: {
          type: Array,
        default:
          function () {
            return []
          }
        }
      },
      data: function () {
        return {
          zixunPlayIcon: {
            a: 'c-channelAll c-channelAll-zixunPlay',
            b: 'c-channelicon c-channel-zixun-play'
          }
        }
      },
      computed: {
        videoInfos: function () {
          return this.videos.map(function (e) {
            return e.title = e.mainTitle || e.subtitle,
            e
          })
        }
      }
    },
    xe = we,
    Ce = Object(z['a']) (xe, ge, ye, !1, null, null, null),
    Ne = Ce.exports,
    Me = function () {
      var e = this,
      a = e.$createElement,
      t = e._self._c || a;
      return t('AuraCardTitle', {
        attrs: {
          title: e.card.cardName,
          icon: e.titleIcon ? 'c-channelicon c-channel-ertong' : '',
          href: '/shaoer/'
        },
        scopedSlots: e._u([{
          key: 'rightBtn',
          fn: function () {
            return [t('ButtonDown', {
              directives: [
                {
                  name: 'show-pingback',
                  rawName: 'v-show-pingback',
                  value: '807237_kids_hometxt',
                  expression: '\'807237_kids_hometxt\''
                }
              ],
              staticClass: 'c-link',
              staticStyle: {
                display: 'inline'
              },
              attrs: {
                'is-down-app': e.opt.isCallApp,
                'schema-url': e.opt.schemaUrl,
                'down-app-android-url': e.opt.downLoadAndroidUrl,
                'down-app-ios-url': e.opt.downLoadIOSUrl,
                rseat: '807237_kids_hometxt',
                'to-page': 'custom'
              }
            }, [
              e._v('打开儿童版爱奇艺'),
              t('i', {
                class : e.arrowRightIcon
              })
            ])]
          },
          proxy: !0
        }
        ])
      })
    },
    Le = [
    ],
    Ae = 'http://mbdapp.iqiyi.com/j/dh/dh_10900.apk',
    ze = 'https://itunes.apple.com/cn/app/ai-qi-yi-dong-hua-wu/id874837944?mt=8',
    je = {
      name: 'ChannelHomeShaoer',
      components: {
        ButtonDown: C['a']
      },
      props: {
        titleIcon: {
          type: Boolean,
        default:
          !0
        },
        arrowRightIcon: {
          type: String,
        default:
          'c-glyphicon c-glyphicon-arrowRight'
        },
        card: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        }
      },
      computed: {
        opt: function () {
          var e = this.card,
          a = {
          },
          t = e.kvs,
          i = t.qbb_AndroidURL || Ae,
          o = t.qbb_iosURL || ze;
          return a = {
            pageUrl: t.qbb_skipH5,
            schemaUrl: t.Schema,
            downLoadAndroidUrl: i,
            downLoadIOSUrl: o,
            isCallApp: !0
          },
          a
        }
      }
    },
    Ve = je,
    Se = Object(z['a']) (Ve, Me, Le, !1, null, null, null),
    He = Se.exports,
    Ie = t('45bc'),
    Te = t('b2dc'),
    Be = t('c0ba'),
    Oe = new Be['a'](function (e, a, t) {
      var i = a.callback || qe;
      a && i(e, a)
    }),
    De = {
      bind: function (e, a) {
        Oe.observe(e, a.value)
      },
      unbind: function (e) {
        Oe.unobserve(e)
      }
    };
    function qe(e) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      try {
        Object(Te['b']) (a)
      } catch (t) {
      }
    }
    var Ue = 'home',
    $e = {
      name: 'ChannelHomeList',
      components: {
        AuraVideoList: J['a'],
        AuraCardTitle: W['a'],
        AuraCardMore: Y['a'],
        AuraFooter: K['a'],
        LoadBottom: X['a'],
        BackTop: ee['a'],
        DiversionTip: ce,
        VideoList: le['a'],
        AppRecommend: de['a'],
        ChannelHomeBanner: fe,
        ChannelHomeZixun: Ne,
        ChannelHomeShaoer: He
      },
      filters: {
        chinaNum: Ie['b']
      },
      directives: {
        behavior: De
      },
      props: {
        horizontalListClass: {
          type: String,
        default:
          'm-pic-horizontal'
        },
        verticalListClass: {
          type: String,
        default:
          'm-pic-vertical'
        },
        titleIcon: {
          type: Boolean,
        default:
          !0
        },
        abtest: {
          type: Object,
        default:
          function () {
            return {
              sample: 'b'
            }
          }
        }
      },
      data: function () {
        return {
          name: Ue,
          page: 1,
          vfm: '',
          isShowDiversion: !1,
          callappCode: 'home'
        }
      },
      provide: function () {
        return {
          abtest: this.abtest
        }
      },
      computed: Object(n['a']) ({
      }, Object(r['e']) ('home', {
        picInfo: 'picInfo',
        cards: 'cards',
        cardMap: function (e) {
          var a = e.cards,
          t = void 0 === a ? [
          ] : a;
          return t.reduce(function (e, a) {
            return e[a.order] = a,
            e
          }, {
          })
        },
        filterStatus: function (e) {
          var a = e.kvs;
          return a.filterStatus
        },
        backgroundConf: 'backgroundConf',
        hotQuery: 'hotQuery'
      }), {
        newUI: function () {
          return 'a' === this.abtest.sample
        }
      }),
      mounted: function () {
        this.vfm = Object(N['G']) ({
          expires: 1
        });
        var e = [
          'f_366_oppo',
          'f_367_oppo'
        ];
        this.isShowDiversion = e.includes(this.vfm)
      },
      methods: Object(n['a']) ({
      }, Object(r['b']) ('home', [
        'getHome'
      ]), {
        loadVideo: function () {
          var e = this;
          if (this.page <= 3) return this.getHome({
            page: this.page + 1
          }).then(function () {
            e.page = e.page + 1
          })
        },
        toHref: function (e) {
          e && (window.location.href = e)
        },
        subMainTitleAlternate: function (e) {
          return e.mainTitle = e.subtitle || e.mainTitle,
          e
        }
      })
    },
    Pe = $e,
    Re = Object(z['a']) (Pe, F, G, !1, null, null, null),
    Qe = Re.exports,
    Ee = t('b924'),
    Ze = 'home',
    Fe = {
      name: 'ChannelHome',
      components: {
        LoadPage: f['a'],
        ChannelHomePop: V,
        ChannelHomeSearch: D,
        ChannelCarousel: q['a'],
        Carousel: Z,
        ChannelHomeList: Qe
      },
      directives: {
        behavior: De
      },
      mixins: [
        k['a']
      ],
      style: function () {
        var e = [
          'base',
          'channel'
        ];
        return this.backgroundConf && this.backgroundConf.pageUrl && e.push(this.backgroundConf.pageUrl),
        e
      },
      asyncData: function (e) {
        var a = e.store;
        a.registerModule('home', b, {
          preserveState: a.state.home
        })
      },
      title: '爱奇艺|在线视频网站-海量正版高清视频在线观看',
      head: function () {
        return {
          meta: [
            {
              name: 'keywords',
              lang: 'zh-CN',
              content: '爱奇艺视频,视频,视频网站,高清视频,电影,电视剧,动漫,综艺,音乐'
            },
            {
              name: 'description',
              lang: 'zh-CN',
              content: '爱奇艺（iQIYI.COM）是拥有海量、优质、高清的网络视频的大型视频网站，专业的网络视频播放平台。爱奇艺影视内容丰富多元，涵盖电影、电视剧、动漫、综艺、生活、音乐、搞笑、财经、军事、体育、片花、资讯、微电影、儿童、母婴、教育、科技、时尚、原创、公益、游戏、旅游、拍客、汽车、纪录片、爱奇艺自制剧等剧目。视频播放清晰流畅，操作界面简单友好，真正为用户带来“悦享品质”的在线观看体验。'
            },
            {
              name: 'appid',
              content: 2104633
            },
            {
              name: 'title',
              lang: 'zh-CN',
              content: '爱奇艺视频-全球领先的在线视频播放平台'
            },
            {
              property: 'og:title',
              lang: 'zh-CN',
              content: '爱奇艺-全球领先的在线视频网站-海量正版高清视频在线观看'
            },
            {
              'baidu-gxt-verify-token': '83b863fea6a8dcc2823cb2d068ed3d9c'
            },
            {
              name: 'baidu-site-verification',
              content: 'EbIoLuHOGF'
            },
            {
              itemprop: 'name',
              content: '爱奇艺-高清视频在线观看'
            },
            {
              itemprop: 'description',
              content: '爱奇艺是全球领先的大型视频网站，网络在线视频播放首选平台。爱奇艺影视内容丰富多元，涵盖电影、电视剧、动漫、综艺、生活、音乐、搞笑、财经、军事、体育、片花、资讯、微电影、儿童、母婴、教育、科技、时尚、原创、公益、游戏、旅游、拍客、汽车、纪录片、爱奇艺自制剧等剧目。'
            },
            {
              itemprop: 'image',
              content: '//www.iqiyipic.com/common/fix/site/iqiyi-logo105x50.png'
            }
          ],
          link: [
            Object(Ee['c']) (),
            {
              rel: 'alternate',
              hreflang: 'zh-TW',
              href: 'https://m.tw.iqiyi.com'
            },
            {
              rel: 'canonical',
              href: 'https://m.iqiyi.com'
            },
            {
              rel: 'alternate',
              hreflang: 'zh-CN',
              href: 'https://m.iqiyi.com'
            },
            {
              rel: 'alternate',
              hreflang: 'zh',
              href: 'https://m.iqiyi.com'
            }
          ]
        }
      },
      data: function () {
        return {
          name: Ze,
          page: 1,
          vfm: '',
          isShowDiversion: !1,
          callappCode: 'home'
        }
      },
      computed: Object(n['a']) ({
      }, Object(r['e']) ('home', {
        picInfo: 'picInfo',
        cards: 'cards',
        cardMap: function (e) {
          var a = e.cards,
          t = void 0 === a ? [
          ] : a;
          return t.reduce(function (e, a) {
            return e[a.order] = a,
            e
          }, {
          })
        },
        filterStatus: function (e) {
          var a = e.kvs;
          return a.filterStatus
        },
        backgroundConf: 'backgroundConf'
      })),
      mounted: function () {
        var e = this;
        this.vfm = Object(N['G']) ({
          expires: 1
        });
        var a = [
          'f_366_oppo',
          'f_367_oppo'
        ];
        this.isShowDiversion = a.includes(this.vfm),
        this.$store.watch(function (e) {
          return e.home.backgroundConf
        }, function (a, t) {
          a.pageUrl && e.setStyle(['base',
          'channel',
          a.pageUrl])
        }),
        this.init()
      },
      destroyed: function () {
        this.$store.unregisterModule('home')
      },
      methods: Object(n['a']) ({
      }, Object(r['b']) ('home', [
        'getHome'
      ]), {
        init: function () {
          var e = this;
          this.cards.length || this.$refs.loadPage.load(function () {
            return e.$store.dispatch('home/getHome', {
              page: 1
            })
          })
        }
      })
    },
    Ge = Fe,
    Je = Object(z['a']) (Ge, i, o, !1, null, null, null);
    a['default'] = Je.exports
  }
}
]);
