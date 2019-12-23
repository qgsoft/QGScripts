(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['appPl'],
{
  8412: function (e, t, i) {
    'use strict';
    i.r(t);
    var a = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          staticClass: 'm-box'
        }, [
          i('PlayVideoRelated', {
            attrs: {
              redirect: e.redirect,
              'limit-call-app-custom': e.showShaoerAppBtn,
              'limit-filter': e.limitFilter,
              subtype: e.subtype
            },
            on: {
              sourceLayerFoo: function (t) {
                return e.$refs.platformLimit && e.$refs.platformLimit.sourceLayerFooHandle(t)
              },
              setRateList: e.setRateList,
              fullscreenClick: e.clearLayer
            },
            scopedSlots: e._u([{
              key: 'layer',
              fn: function () {
                return [i('PlayVideoLayerCallApp', {
                  attrs: {
                    redirect: e.redirect,
                    'limit-filter': e.limitFilter,
                    'channel-id': e.channelId,
                    'image-url': e.videoInfo.imageUrl,
                    'content-type': e.videoInfo.contentType,
                    'purchase-type': e.videoInfo.purchaseType,
                    'is-enable-album-play': e.isEnableAlbumPlay
                  }
                })]
              },
              proxy: !0
            },
            e.showShaoerAppBtn ? {
              key: 'limitCallApp',
              fn: function () {
                return [i('PlayAppBannerShaoer', {
                  attrs: {
                    type: 'limit',
                    'player-banner': e.playerBanner,
                    'qipu-id': e.videoInfo.qipuId,
                    aid: e.videoInfo.aid
                  }
                })]
              },
              proxy: !0
            }
             : null], null, !0)
          }),
          i('PlayBanner', {
            attrs: {
              enable: {
                app: !0,
                vip: {
                  sport: !0
                },
                market: !1
              }
            }
          }),
          i('PlayFoldVideoInfo', {
            attrs: {
              'close-iconclass': 'c-playPage-icon c-playPage-over',
              'close-btnclass': 'c-pop-link',
              'is-comment-load': e.isCommentLoad,
              'qipu-id': e.videoInfo.qipuId,
              'is-show-dramaslist': !1
            }
          }),
          i('PlayLongExtendBar', {
            attrs: {
              'is-comment-load': e.isCommentLoad,
              'is-show-flod': !0
            }
          })
        ], 1),
        e.controlInfo.politicallySensitive ? e._e()  : i('PlayLongActivityEntry'),
        e.controlInfo.politicallySensitive ? e._e()  : i('PlayRelevantBanner', {
          attrs: {
            enable: {
              adCard: !0,
              IPInfo: !0,
              videoUser: !0,
              adOrigin: !0
            }
          }
        }),
        e.template.album && !e.controlInfo.politicallySensitive ? i('EpisodeCard', {
          attrs: {
            'album-info': e.albumInfo,
            'page-size': e.videoList.pageSize,
            'show-content': e.albumInfo.showContent,
            'channel-id': e.albumInfo.channelId,
            'album-id': e.albumInfo.qipuId,
            'video-info': e.videoInfo,
            'episode-type': 'horizontal',
            'cur-tvid': e.videoInfo.tvid,
            'total-pages': e.videoList.totalPages,
            'update-strategy': e.albumInfo.updateStrategy,
            'video-list': e.videoList,
            'qipu-id': e.videoInfo.qipuId,
            'video-title': '选集',
            continuous: e.isEnableAlbumPlay
          },
          on: {
            showAlbumLayer: function (t) {
              e.isShowAlbumLayer = !e.isShowAlbumLayer
            }
          }
        })  : e._e(),
        e.template.album && !e.controlInfo.politicallySensitive ? i('EpisodeLayer', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '804171_episode',
              expression: '\'804171_episode\''
            }
          ],
          attrs: {
            'album-info': e.albumInfo,
            open: e.isShowAlbumLayer,
            continuous: e.isEnableAlbumPlay,
            'qipu-id': e.videoInfo.qipuId,
            'album-id': e.albumInfo.qipuId
          },
          on: {
            'update:open': function (t) {
              e.isShowAlbumLayer = t
            }
          }
        })  : e._e(),
        e.template.source && !e.controlInfo.politicallySensitive ? i('SourceCard', {
          attrs: {
            'video-title': '选集',
            'video-list': e.videoList,
            'album-info': e.albumInfo,
            'video-info': e.videoInfo,
            'update-strategy': e.albumInfo.updateStrategy,
            'cover-class': 'm-pic m-pic-play-horizontal m-sliding',
            continuous: e.isEnableAlbumPlay
          },
          on: {
            showSourceLayer: function (t) {
              e.isShowSourceLayer = !e.isShowSourceLayer
            }
          }
        })  : e._e(),
        i('PlayRelatedHotWords'),
        e.template.source && !e.controlInfo.politicallySensitive ? i('SourceLayer', {
          attrs: {
            'video-info': e.videoInfo,
            open: e.isShowSourceLayer,
            continuous: e.isEnableAlbumPlay
          },
          on: {
            'update:open': function (t) {
              e.isShowSourceLayer = t
            }
          }
        })  : e._e(),
        i('LazyLoad', {
          attrs: {
            'need-load': !e.controlInfo.politicallySensitive || e.controlInfo.detailComment,
            'show-more-btn': !0,
            timeout: 5000
          },
          scopedSlots: e._u([{
            key: 'content',
            fn: function () {
              return [e.template.source && !e.controlInfo.politicallySensitive ? i('PlayVideoFocus', {
                attrs: {
                  'qipu-id': e.videoInfo.qipuId,
                  period: e.videoInfo.period
                }
              })  : e._e(),
              e.controlInfo.politicallySensitive ? e._e()  : i('PlayLongAroundVideo', {
                attrs: {
                  'is-call-app': !0,
                  ellipsis: !1,
                  'qipu-id': e.videoInfo.qipuId,
                  'use-long-param': !0
                }
              }),
              e.videoInfo.maCircleIds && !e.controlInfo.politicallySensitive ? i('VideoStarCircle', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '612061_starcircle',
                    expression: '\'612061_starcircle\''
                  }
                ],
                attrs: {
                  'item-pingback': '611281_starcircle',
                  'ma-circle-ids': e.videoInfo.maCircleIds,
                  max: 12,
                  min: 2,
                  title: '参演明星'
                }
              })  : e._e(),
              e.controlInfo.politicallySensitive ? e._e()  : i('PlayVideoSeries', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '704202_series',
                    expression: '\'704202_series\''
                  },
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '704202_series',
                    expression: '\'704202_series\''
                  }
                ],
                attrs: {
                  'super-album-id': e.videoInfo.superAlbumId,
                  'is-play-long': !0,
                  'is-hide-sub-title': !0,
                  'qipu-id': e.videoInfo.qipuId,
                  'album-qipu-id': e.albumInfo.qipuId,
                  'album-id': e.videoInfo.aid,
                  cid: + e.videoInfo.cid,
                  'source-id': e.videoInfo.sourceId,
                  rseat: '704202_series',
                  'image-size': '284_160',
                  'section-class': 'm-pic-play-horizontal m-sliding'
                }
              }),
              e.template.album && !e.controlInfo.politicallySensitive ? i('PlayLongSoundTrack', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '605091_music',
                    expression: '\'605091_music\''
                  }
                ],
                attrs: {
                  'album-id': e.videoInfo.aid,
                  'section-class': 'm-player-music m-player-music-sliding m-sliding'
                }
              })  : e._e(),
              e.controlInfo.politicallySensitive ? e._e()  : i('VideoRecommend', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '712121_H5_h_bee',
                    expression: '\'712121_H5_h_bee\''
                  }
                ],
                attrs: {
                  'item-pingback': 'h5_cainixihuan_app',
                  'channel-id': e.videoInfo.cid,
                  'is-ugc': e.videoInfo.isUGC,
                  tvid: e.videoInfo.qipuId,
                  'album-id': e.albumInfo.qipuId || e.videoInfo.sourceId,
                  'is-call-app': !0,
                  'hot-title': e.hotTitle,
                  'use-long-param': !0,
                  vfrm: e.recVfrm
                }
              }),
              e.controlInfo.politicallySensitive ? e._e()  : i('PlayVideoFragment', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: '804281_pianduanheji',
                    expression: '\'804281_pianduanheji\''
                  },
                  {
                    name: 'pingback',
                    rawName: 'v-pingback',
                    value: '804281_pianduan',
                    expression: '\'804281_pianduan\''
                  }
                ],
                attrs: {
                  'qipu-id': e.videoInfo.qipuId,
                  'album-id': e.subTemplate.source ? e.videoInfo.sourceId : e.albumInfo.qipuId,
                  'sub-template': e.subTemplate,
                  'is-long-video': e.videoInfo.isLongVideo,
                  title: '大家都截取的片段'
                }
              }),
              e.controlInfo.paopao ? i('PlayJoinerCard', {
                attrs: {
                  'circle-id': e.videoInfo.circleId
                }
              })  : e._e(),
              e.controlInfo.detailComment ? i('PlayLongComment')  : e._e()]
            },
            proxy: !0
          },
          !e.controlInfo.politicallySensitive || e.controlInfo.detailComment ? {
            key: 'skeleton',
            fn: function () {
              return [i('div', {
                staticClass: 'm-dom-loading-gray'
              })]
            },
            proxy: !0
          }
           : null], null, !0)
        }),
        i('PlayFloatIcon'),
        i('PlayPlatformLimit', {
          ref: 'platformLimit'
        }),
        i('BackTop'),
        i('AuraFooter'),
        i('PlayBottomAppHot')
      ], 1)
    },
    n = [
    ],
    s = (i('ac6a'), i('f3e2'), i('96cf'), i('3b8d')),
    o = (i('6762'), i('2fdb'), i('cebc')),
    r = i('2f62'),
    l = i('b75f'),
    c = i('cfb9'),
    u = i('0b00'),
    d = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box',
        attrs: {
          name: 'm-aroundVideo'
        }
      }, [
        e.videos && e.videos.length > 0 ? i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('AuraCardTitle', {
            attrs: {
              title: '周边视频'
            }
          })
        ], 1)  : e._e(),
        i('videoList', {
          attrs: {
            videos: e.videos.slice(0, e.pageSize * (e.page + 1))
          },
          scopedSlots: e._u([{
            key: 'body',
            fn: function (t) {
              var a = t.videos;
              return [i('AuraVideoList', {
                directives: [
                  {
                    name: 'show-pingback',
                    rawName: 'v-show-pingback',
                    value: {
                      block: '707211_rmzb'
                    },
                    expression: '{ block: \'707211_rmzb\' }'
                  },
                  {
                    name: 'recommend-show-pingback',
                    rawName: 'v-recommend-show-pingback',
                    value: {
                      card: {
                        videos: a,
                        cardName: '707211_rmzb'
                      },
                      pingback: e.pingback
                    },
                    expression: '{card: { videos: videos, cardName: \'707211_rmzb\'}, pingback}'
                  },
                  {
                    name: 'recommend-click-pingback',
                    rawName: 'v-recommend-click-pingback',
                    value: {
                      card: {
                        videos: a,
                        cardName: '707211_rmzb'
                      },
                      noRedirect: !0,
                      pingback: e.pingback
                    },
                    expression: '{card: { videos: videos, cardName: \'707211_rmzb\'}, noRedirect: true, pingback}'
                  },
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
                staticClass: 'm-pic-horizontal_play',
                attrs: {
                  itempingback: 'h5_zhoubian_app',
                  subtype: e.subtype,
                  videos: a,
                  'show-desc': !1,
                  'show-row-title': !1,
                  'show-sub-title': !1,
                  ellipsis: e.ellipsis,
                  'is-show-slide': !1
                },
                on: {
                  click: e.callApp
                }
              })]
            }
          }
          ])
        }),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: (e.page + 1) * e.pageSize < e.videos.length,
              expression: '(page + 1) * pageSize < videos.length'
            }
          ],
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('section', {
            staticClass: 'm-linkMore'
          }, [
            i('a', {
              staticClass: 'm-link m-love-link',
              attrs: {
                href: 'javascript:void(0);'
              },
              on: {
                click: function (t) {
                  e.page = e.page + 1
                }
              }
            }, [
              i('i', {
                staticClass: 'c-glyphicon c-glyphicon-morevideo'
              }),
              e._v('查看更多\n      ')
            ])
          ])
        ])
      ], 1)
    },
    p = [
    ],
    h = (i('57e7'), i('6d67'), i('c5f6'), i('21fd')),
    m = i('6810'),
    f = i('3e9e'),
    v = i('7e9b'),
    g = {
      name: 'PlayLongAroundVideo',
      components: {
        VideoList: m['a']
      },
      directives: {
        'recommend-show-pingback': v['e'],
        'recommend-click-pingback': v['d']
      },
      props: {
        isCallApp: {
          type: Boolean,
        default:
          !1
        },
        ellipsis: {
          type: Boolean,
        default:
          !0
        },
        useLongParam: {
          type: Boolean,
        default:
          !1
        },
        qipuId: {
          type: Number,
        default:
          0
        },
        pageSize: {
          type: Number,
        default:
          6
        }
      },
      data: function () {
        return {
          response: null,
          page: 0,
          subtype: 'H5zbsp_822'
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo',
        'userInfo',
        'subTemplate'
      ]), {
        videos: function () {
          var e = this,
          t = this.response && this.response.videos || [
          ];
          return t = t.map(function (t, i) {
            //添加类型为2则不打开APP
            t.type = 2;
            t.isCallApp = false;
            return t.isSelected = t.isSelected || t.qipuId === e.videoInfo.qipuId,
            t.pageUrl = t.pageUrl,
            t.subtitle = '',
            t.lowerRightCorner = 2 === t.type && t.playCount ? t.playCount + '' : t.duration,
            t
          }),
          t
        },
        pingback: function () {
          return this.response.pingback
        }
      }),
      watch: {
        qipuId: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t) {
            var i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  if (i = f['a'].getCurVideo() || {
                  }, 'albumList' !== i.card) {
                    e.next = 7;
                    break
                  }
                  return e.next = 6,
                  this.getVideos();
                case 6:
                  this.response = e.sent;
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
        }()
      },
      mounted: function () {
        var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.getVideos().catch (function () {
                });
              case 2:
                this.response = e.sent;
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
        getVideos: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n = arguments;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (n.length > 0 && void 0 !== n[0] ? n[0] : '', t = this.videoInfo, i = this.subTemplate.short ? 'h_swan' : 'h_zebra', a = {
                    type: 'video',
                    area: i,
                    channelId: t.cid,
                    referenceId: t.qipuId,
                    size: 12,
                    albumId: t.aid
                  }, !this.useLongParam) {
                    e.next = 9;
                    break
                  }
                  return a = {
                    type: 'video',
                    area: i,
                    channelId: t.cid,
                    cid: t.cid,
                    aid: t.aid,
                    tvid: t.tvid,
                    userId: this.userInfo.userId,
                    referenceId: t.qipuId,
                    tids: this.videoInfo.tagIds && this.videoInfo.tagIds.length ? this.videoInfo.tagIds.join(',')  : '',
                    size: 12,
                    trimUser: !1,
                    albumId: t.aid
                  },
                  e.abrupt('return', Object(h['f']) (a));
                case 9:
                  return e.abrupt('return', Object(h['j']) (a));
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
        callApp: function (e, t) {
         
        }
      }
    },
    b = g,
    y = i('2877'),
    I = Object(y['a']) (b, d, p, !1, null, null, null),
    w = I.exports,
    _ = i('0288'),
    k = i('9b0a'),
    x = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('VideoList', {
        attrs: {
          videos: e.videos,
          name: 'm-soundTrack'
        },
        scopedSlots: e._u([{
          key: 'header',
          fn: function () {
            return [i('AuraCardTitle', {
              attrs: {
                title: '原生大碟'
              }
            })]
          },
          proxy: !0
        },
        {
          key: 'body',
          fn: function (t) {
            var a = t.videos;
            return [i('section', {
              directives: [
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
              class : e.sectionClass
            }, [
              i('ul', {
                staticClass: 'player-music m-sliding-list'
              }, e._l(a, function (t, a) {
                return i('li', {
                  directives: [
                    {
                      name: 'play',
                      rawName: 'v-play',
                      value: t.play,
                      expression: 'video.play'
                    },
                    {
                      name: 'pingback',
                      rawName: 'v-pingback',
                      value: '605091_music',
                      expression: '\'605091_music\''
                    }
                  ],
                  key: t.qipuId + '-' + a
                }, [
                  i('a', {
                    staticClass: 'link-item',
                    attrs: {
                      href: 'javascript:void(0)',
                      title: t.shortTitle
                    }
                  }, [
                    i('div', {
                      staticClass: 'c-music-photo',
                      style: {
                        backgroundImage: 'url(' + (t.imageUrl || '//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png') + ')'
                      }
                    }, [
                      i('i', {
                        staticClass: 'c-playPage-icon c-playPage-play'
                      })
                    ]),
                    i('div', {
                      staticClass: 'info'
                    }, [
                      i('div', {
                        staticClass: 'c-title'
                      }, [
                        e._v(e._s(t.shortTitle))
                      ]),
                      i('div', {
                        staticClass: 'c-music-num'
                      }, [
                        i('i', {
                          staticClass: 'icon-video-hot icon-hot-good'
                        }),
                        i('span', {
                          staticClass: 'c-num'
                        }, [
                          e._v('热度 ' + e._s(t.hotDisplayCount))
                        ])
                      ])
                    ])
                  ])
                ])
              }), 0)
            ])]
          }
        }
        ])
      })
    },
    L = [
    ],
    P = i('8296'),
    C = {
      name: 'PlayLongSoundTrack',
      components: {
        VideoList: m['a']
      },
      props: {
        albumId: {
          type: Number,
        default:
          0
        },
        sectionClass: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          videos: [
          ]
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'template'
      ])),
      mounted: function () {
        this.getNativeDisk()
      },
      methods: {
        getNativeDisk: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.albumId) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return t = {
                    albumId: this.albumId
                  },
                  e.next = 5,
                  Object(h['g']) (t);
                case 5:
                  i = e.sent,
                  i && i.musics && (this.videos = i.musics, this.videos.forEach(function (e) {
                    e.play = {
                      card: 'soundtrack',
                      redirect: !1,
                      url: e.pageUrl,
                      vfrm: '30-26-24-7',
                      qipuId: e.qipuId,
                      selectClass: 'selected',
                      continuous: !0
                    },
                    e.imageUrl = Object(P['o']) (e.imageUrl, '128_128')
                  }));
                case 7:
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
    S = C,
    V = Object(y['a']) (S, x, L, !1, null, null, null),
    q = V.exports,
    O = i('d323'),
    j = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.isShow ? i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: e.trseat,
            expression: 'trseat'
          }
        ],
        staticClass: 'm-box'
      }, [
        i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('section', {
            staticClass: 'm-idol-banner'
          }, [
            i('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: e.rseat,
                  expression: 'rseat'
                }
              ],
              staticClass: 'c-banner-link',
              attrs: {
                href: e.href,
                title: e.title
              }
            }, [
              i('img', {
                attrs: {
                  src: e.imgSrc,
                  alt: e.alt
                }
              })
            ]),
            'two' === e.status ? i('a', {
              directives: [
                {
                  name: 'pingback',
                  rawName: 'v-pingback',
                  value: e.trseat,
                  expression: 'trseat'
                }
              ],
              staticClass: 'c-banner-link',
              attrs: {
                href: e.thref,
                title: e.ttitle
              }
            }, [
              i('img', {
                attrs: {
                  src: e.timgSrc,
                  alt: e.talt
                }
              })
            ])  : e._e()
          ])
        ])
      ])  : e._e()
    },
    T = [
    ],
    N = i('ab22'),
    A = {
      name: 'PlayLongActivityEntry',
      data: function () {
        return {
          isShow: !1,
          status: 'one',
          rseat: '',
          href: '',
          title: '',
          imgSrc: '',
          alt: '',
          trseat: '',
          thref: '',
          ttitle: '',
          timgSrc: '',
          talt: ''
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo',
        'albumInfo'
      ])),
      mounted: function () {
        this.getActivityEntryDatas()
      },
      methods: {
        getActivityEntryDatas: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i,
            a,
            n,
            s,
            o;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t = {
                    237637701: {
                      resources_id: '17398464312'
                    },
                    239388601: {
                      resources_id: '18671945312'
                    },
                    239209301: {
                      resources_id: '20236611012'
                    },
                    246196901: {
                      resources_id: '24575113612'
                    },
                    241066001: {
                      resources_id: '25180781812'
                    }
                  }, i = t[this.albumInfo.qipuId] || t[this.videoInfo.qipuId] || {
                  }, a = i.resources_id || 0, !a) {
                    e.next = 14;
                    break
                  }
                  return e.next = 6,
                  Object(N['e']) ({
                    id: a
                  });
                case 6:
                  if (n = e.sent, s = n && n[0], !s) {
                    e.next = 14;
                    break
                  }
                  if ('none' !== s.card_type) {
                    e.next = 12;
                    break
                  }
                  return this.isShow = !1,
                  e.abrupt('return');
                case 12:
                  'zhipai' === s.card_type || 'paiming' === s.card_type ? (this.status = 'one', this.rseat = 'zhipai' === s.card_type ? s.zhipaiRseat : s.paimingRseat, this.href = 'zhipai' === s.card_type ? s.zhipaiUrl : s.paimingUrl, this.title = 'zhipai' === s.card_type ? '直拍通道' : '排名投票', this.imgSrc = 'zhipai' === s.card_type ? s.zhipaiFullImg : s.paimingFullImg, this.alt = 'zhipai' === s.card_type ? '直拍通道' : '排名投票')  : (o = 'both_zhipai' === s.card_type, this.status = 'two', this.rseat = o ? s.zhipaiRseat : s.paimingRseat, this.href = o ? s.zhipaiUrl : s.paimingUrl, this.title = o ? '直拍通道' : '排名投票', this.imgSrc = o ? s.zhipaiImg : s.paimingImg, this.alt = o ? '直拍通道' : '排名投票', this.trseat = o ? s.paimingRseat : s.zhipaiRseat, this.thref = o ? s.paimingUrl : s.zhipaiUrl, this.ttitle = o ? '排名投票' : '直拍通道', this.timgSrc = o ? s.paimingImg : s.zhipaiImg, this.talt = o ? '排名投票' : '直拍通道'),
                  this.isShow = !0;
                case 14:
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
    z = A,
    E = Object(y['a']) (z, j, T, !1, null, null, null),
    R = E.exports,
    B = i('7b03'),
    $ = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e._e()
    },
    D = [
    ],
    U = i('cf20'),
    F = i('5321'),
    H = i('f191'),
    M = {
      name: 'PlayVideoLayerCallApp',
      components: {
        PlayButtonDown: U['a']
      },
      props: {
        redirect: {
          type: Boolean,
        default:
          !0
        },
        channelId: {
          type: Number,
        default:
          0
        },
        contentType: {
          type: Number,
        default:
          0
        },
        purchaseType: {
          type: Number,
        default:
          0
        },
        imageUrl: {
          type: String,
        default:
          ''
        },
        isEnableAlbumPlay: {
          type: Boolean,
        default:
          !0
        },
        limitFilter: {
          type: Boolean,
        default:
          !1
        }
      },
      data: function () {
        return {
          enable: !1,
          hasErrorTip: !1,
          limitShow: !1
        }
      },
      computed: {
        show: function () {
          return this.enable && !this.isEnableAlbumPlay && 3 !== this.contentType && !this.hasErrorTip && !this.limitShow
        },
        loginText: function () {
          return 0 !== this.purchaseType ? 'VIP登录可观看' : '登录可观看'
        },
        BtnText: function () {
          return 0 !== this.purchaseType ? '前往APP观看' : 'APP免登录观看'
        }
      },
      watch: {
        show: function (e) {
          e && (Object(F['m']) ({
            block: 'h5_block_xuanjiAPP'
          }), this.$parent.$emit('layerShow', {
            type: 'loginOrApp'
          }))
        }
      },
      beforeMount: function () {
        var e = this,
        t = this.$parent;
        t.$on('created', function () {
          e.$player = t,
          t.$on('load', function () {
            e.enable = !1,
            e.hasErrorTip = !1,
            t.showVideo();
            var i = f['a'].getCurVideo() || {
            };
            e.enable = 'albumList' === i.card && !e.redirect
          }),
          t.$on('loaded', function (i) {
            var a = Object(H['a']) (i.videoInfo, '', e.limitFilter);
            e.limitShow = a,
            e.show && !a && (t.clear(), t.hideVideo())
          }),
          t.$on('sourceTypeChange', function (t) {
            var i = t.type;
            e.hasErrorTip = 0 !== i
          }),
          t.$on('layerShow', function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            },
            i = t.type;
            e.hasErrorTip = !['loginOrApp',
            'network'].includes(i)
          })
        })
      }
    },
    Q = M,
    Y = Object(y['a']) (Q, $, D, !1, null, null, null),
    G = Y.exports,
    J = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return e.show ? i('div', {
        on: {
          click: function (t) {
            e.show = !1
          }
        }
      }, [
        e.isShaoer ? i('a', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '807232_kids_float',
              expression: '\'807232_kids_float\''
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '807232_kids_float',
              expression: '\'807232_kids_float\''
            }
          ],
          staticClass: 'm-suspend-banner qibabu-banner',
          style: 'background-image: url(' + e.playerBanner.qbb_float + ')',
          attrs: {
            href: e.playerBanner.qbb_skipURL
          }
        })  : e.isDongman ? i('ButtonDown', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '903214_badaxiazai',
              expression: '\'903214_badaxiazai\''
            },
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '903214_badaxiazai',
              expression: '\'903214_badaxiazai\''
            }
          ],
          staticClass: 'm-suspend-banner qibabu-banner',
          staticStyle: {
            'background-image': 'url(//www.iqiyipic.com/common/fix/h5-aura/dongman-down.png)'
          },
          attrs: {
            tag: 'a',
            'to-page': 'custom',
            'schema-url': 'iqiyi-acg://com.qiyi.acg?target=main&s1=basem_ph',
            'down-app-android-url': '//mbdapp.iqiyi.com/j/acg/acg_13166.apk',
            'down-app-ios-url': '//itunes.apple.com/cn/app/id1317763917',
            href: 'javascript:void(0);'
          }
        })  : e._e()
      ], 1)  : e._e()
    },
    X = [
    ],
    W = i('0a0d'),
    Z = i.n(W),
    K = i('4f30'),
    ee = i('38ff'),
    te = i('bfde'),
    ie = {
      name: 'PlayFloatIcon',
      components: {
        ButtonDown: ee['a']
      },
      data: function () {
        return {
          show: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'playerBanner',
        'videoInfo'
      ]), {
        isShaoer: function () {
          return this.videoInfo.cid === + K['CHANNEL_SHAOER'] && !Object(te['b']) ()
        },
        isDongman: function () {
          return this.videoInfo.cid === + K['CHANNEL_DONGMAN'] && !Object(te['b']) ()
        },
        storageName: function () {
          return 'play_float_icon_' + this.videoInfo.cid
        }
      }),
      mounted: function () {
        if (this.isShaoer || this.isDongman) {
          var e = P['B'].getItem(this.storageName),
          t = Z() ();
          !e || t - e > 86400000 ? (P['B'].setItem(this.storageName, t), this.show = !0)  : this.show = !1
        }
      }
    },
    ae = ie,
    ne = Object(y['a']) (ae, J, X, !1, null, null, null),
    se = ne.exports,
    oe = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        directives: [
          {
            name: 'show-pingback',
            rawName: 'v-show-pingback',
            value: '702201_episode',
            expression: '\'702201_episode\''
          },
          {
            name: 'show',
            rawName: 'v-show',
            value: e.videoInfo,
            expression: 'videoInfo'
          }
        ],
        staticClass: 'm-box',
        attrs: {
          name: 'm-albumList'
        }
      }, [
        i('div', {
          staticClass: 'm-box-items m-box-items-full'
        }, [
          i('section', {
            class : [
              {
                'm-title m-title-anthology': 'horizontal' === e.episodeType
              },
              {
                'm-title m-title-album': 'vertical' === e.episodeType
              }
            ]
          }, [
            i('h3', {
              staticClass: 'c-title-des'
            }, [
              e._v(e._s(e.videoTitle))
            ]),
            i('span', {
              staticClass: 'c-des',
              on: {
                click: e.showAlbumLayer
              }
            }, [
              e._v('\n        ' + e._s(e.updateStrategy) + '\n        '),
              i('i', {
                staticClass: 'c-glyphicon c-glyphicon-arrowRight'
              })
            ])
          ])
        ]),
        i('EpisodeDigit', e._b({
          attrs: {
            'is-load': e.isLoad,
            'episode-type': e.episodeType,
            'video-info': e.videoInfo,
            'cur-tvid': e.curTvid,
            'album-id': e.albumId,
            'page-size': e.pageSize,
            'video-list': e.videoList,
            'album-info': e.albumInfo,
            'qipu-id': e.qipuId
          }
        }, 'EpisodeDigit', e.$attrs, !1))
      ], 1)
    },
    re = [
    ],
    le = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        staticClass: 'm-box-items m-box-items-full'
      }, [
        e.videos && e.videos.length ? i('section', {
          directives: [
            {
              name: 'pingback',
              rawName: 'v-pingback',
              value: '605251_episode',
              expression: '\'605251_episode\''
            }
          ],
          class : [
            {
              'm-album-num m-sliding': 'horizontal' === e.episodeType
            },
            {
              'm-album-num clearfix': 'vertical' === e.episodeType
            }
          ],
          attrs: {
            name: 'm-digit'
          }
        }, [
          i('ScrollLoad', {
            attrs: {
              callback: e.scrollLoadPage,
              'load-completed': e.loadCompleted,
              length: e.length,
              'qipu-id': e.videoInfo.qipuId,
              'layer-open': e.layerOpen,
              'is-load-more': !0,
              tag: 'section'
            },
            on: {
              loadFailure: e.onLoadFailure
            }
          }, [
            i('div', {
              class : [
                {
                  'm-sliding-list': 'horizontal' === e.episodeType
                }
              ],
              staticStyle: {
                transform: 'translate(0px, 0px) scale(1)'
              }
            }, e._l(e.videos, function (t, a) {
              return i('a', {
                directives: [
                  {
                    name: 'play',
                    rawName: 'v-play',
                    value: {
                      continuous: e.continuous,
                      card: 'albumList',
                      action: 'upsert',
                      selectClass: 'selected',
                      qipuId: t.qipuId,
                      index: t.index,
                      url: t.pageUrl,
                      vfrm: e.vfrm,
                      redirect: !1,
                      rseat: '605251_episode',
                      next: e.callNext
                    },
                    expression: '{\n            continuous: continuous,\n            card: \'albumList\',\n            action: \'upsert\',\n            selectClass: \'selected\',\n            qipuId: video.qipuId,\n            index: video.index,\n            url: video.pageUrl,\n            vfrm: vfrm,\n            redirect: false,\n            rseat: \'605251_episode\',\n            next: callNext\n          }'
                  }
                ],
                key: t.id + '_' + a + '_album',
                staticClass: 'c-album-item',
                class : {
                  selected: e.curTvid === t.qipuId
                },
                attrs: {
                  title: t.title,
                  href: 'javascript:void(0)'
                },
                on: {
                  click: e.toggleVideoClick
                }
              }, [
                i('span', {
                  staticClass: 'num'
                }, [
                  e._v(e._s(t.pd))
                ]),
                i('div', {
                  staticClass: 'c-rt'
                }, [
                  t.upperRightCorner ? i('AuraVideoPicicon', {
                    attrs: {
                      text: t.upperRightCorner,
                      picicon: 'c-picicon-s'
                    }
                  })  : e._e()
                ], 1),
                i('span', {
                  class : [
                    'album-current',
                    {
                      hide: e.curTvid != t.id
                    }
                  ]
                }, [
                  i('i', {
                    staticClass: 'c-glyphicon c-glyphicon-albumPlay'
                  })
                ])
              ])
            }), 0)
          ])
        ], 1)  : e.isLoad ? i('section', {
          staticClass: 'm-loading-info'
        }, [
          i('div', {
            staticClass: 'c-info'
          }, [
            e._v('当前剧集目前暂无内容或版权，请持续关注更新')
          ])
        ])  : e._e()
      ])
    },
    ce = [
    ],
    ue = (i('a481'), i('7514'), i('a745')),
    de = i.n(ue),
    pe = (i('20d6'), i('e814')),
    he = i.n(pe),
    me = i('795b'),
    fe = i.n(me),
    ve = i('bd86'),
    ge = i('1d52'),
    be = i('6e73'),
    ye = i('b2e7'),
    Ie = {
      name: 'EpisodeDigit',
      components: {
        ScrollLoad: be['a']
      },
      props: {
        curTvid: {
          type: Number,
        default:
          0
        },
        vfrm: {
          type: String,
        default:
          ''
        },
        episodeType: {
          type: String,
        default:
          ''
        },
        albumId: {
          type: Number,
        default:
          0
        },
        pageSize: {
          type: Number,
        default:
          0
        },
        albumInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        videoList: {
          type: Object,
        default:
          function () {
            return {
            }
          }
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
        }
      },
      data: function () {
        return {
          loadCompleted: !1,
          hasLoadPage: [
          ],
          layerVideos: [
          ],
          loadVideos: [
          ],
          rightPage: 1,
          leftPage: 1,
          nextPage: 0,
          cacheQipuId: 0,
          isShowLayer: !1,
          isScroll: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'layerOpen',
        'albumListInfo',
        'layerPage'
      ]), {
        videos: function () {
          var e = this.layerVideos.length ? this.layerVideos : this.formatVideos(this.videoList.videos, this.videoList.currentPage);
          return this.loadVideos.length ? this.loadVideos : e
        },
        length: function () {
          return this.videos.length
        },
        updateInfo: function () {
          var e = Object(h['n']) (this.albumInfo);
          return e
        },
        isAlbumList: function () {
          var e = f['a'].getCurVideo() || {
          },
          t = 'albumList' === e.card;
          return t
        }
      }),
      watch: {
        layerPage: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t, i) {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t === i || !t) {
                    e.next = 10;
                    break
                  }
                  return this.layerVideos = this.albumListInfo[t],
                  this.loadVideos = [
                  ],
                  this.rightPage = t,
                  this.hasLoadPage = [
                  ],
                  this.isShowLayer = !0,
                  this.hasLoadPage.push(t),
                  this.isScroll = !1,
                  e.next = 10,
                  this.loadAlbum(t);
                case 10:
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
      beforeMount: function () {
        this.initVideos(),
        this.$store.dispatch('play/albumListInfo', Object(ve['a']) ({
        }, this.rightPage, this.formatVideos(this.videoList.videos, this.videoList.currentPage)))
      },
      mounted: function () {
        var e = {
          card: 'albumList',
          action: 'update',
          qipuId: this.videoInfo.qipuId
        };
        this.cacheQipuId = this.albumId,
        f['a'].setCurVideo(e)
      },
      methods: {
        initVideos: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.rightPage = this.videoList.currentPage, t = this.rightPage, this.videoList.videos.length) {
                    e.next = 5;
                    break
                  }
                  return e.next = 5,
                  this.loadAlbum(t);
                case 5:
                  return this.hasLoadPage.push(t),
                  e.next = 8,
                  this.loadPrePage(t);
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
        loadPrePage: function (e) {
          if (e > 1) return this.leftPage = e - 1,
          this.loadAlbum(this.leftPage, !0)
        },
        scrollLoadPage: function (e) {
          var t = e.scrollToRight;
          this.isScroll = !0,
          t ? this.rightPage = this.rightPage + 1 : this.leftPage = this.leftPage - 1;
          var i = t ? this.rightPage : this.leftPage;
          return i < 1 || i > this.videoList.totalPages || this.hasLoadPage.indexOf(i) > - 1 ? fe.a.resolve()  : this.loadAlbum(i, !t)
        },
        callNext: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a,
            n,
            s;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  for (a in i = t.curVideo, this.albumListInfo) for (n = 0; n < this.albumListInfo[a].length; n++) this.albumListInfo[a][n].qipuId === i.qipuId && (this.nextPage = he() (a));
                  if (this.albumListInfo[this.nextPage] && !(this.nextPage >= this.videoList.totalPages)) {
                    e.next = 4;
                    break
                  }
                  return e.abrupt('return');
                case 4:
                  if (s = this.albumListInfo[this.nextPage].findIndex(function (e) {
                    return e.qipuId === i.qipuId
                  }) + 1, s !== this.albumListInfo[this.nextPage].length) {
                    e.next = 11;
                    break
                  }
                  if (!(this.hasLoadPage.indexOf(this.nextPage + 1) > - 1)) {
                    e.next = 8;
                    break
                  }
                  return e.abrupt('return');
                case 8:
                  return this.hasLoadPage.push(this.nextPage + 1),
                  e.next = 11,
                  this.loadAlbum(this.nextPage + 1, !1);
                case 11:
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
        getVideos: function (e, t, i) {
          this.$store.dispatch('play/albumListInfo', Object(ve['a']) ({
          }, t, e)),
          t > this.videoList.currentPage ? this.isShowLayer ? (this.resetVideo(e, t), this.loadVideos = this.loadVideos)  : (this.loadVideos.length || (this.loadVideos = this.videoList.videos), this.loadVideos = i ? e.concat(this.loadVideos)  : this.loadVideos.concat(e))  : this.isShowLayer ? this.resetVideo(e, t)  : (this.loadVideos.length || (this.loadVideos = this.videoList.videos), i = this.isScroll ? i : t < this.videoList.currentPage, this.loadVideos = i ? e.concat(this.loadVideos)  : this.loadVideos.concat(e)),
          this.hasLoadPage.push(t)
        },
        loadAlbum: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t, i) {
            var a,
            n,
            s,
            o;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.albumListInfo[t]) {
                    e.next = 5;
                    break
                  }
                  a = this.formatVideos(this.albumListInfo[t], t),
                  this.getVideos(a, t, i),
                  e.next = 11;
                  break;
                case 5:
                  return n = {
                    albumId: 0 === this.cacheQipuId ? this.albumId : this.cacheQipuId,
                    size: this.pageSize,
                    page: t,
                    updateInfo: this.updateInfo,
                    needVipPrevue: !Object(ye['M']) ()
                  },
                  e.next = 8,
                  Object(ge['a']) (n);
                case 8:
                  s = e.sent,
                  o = this.formatVideos(s.videos, t),
                  this.getVideos(o, t, i);
                case 11:
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
        }(),
        resetVideo: function (e, t) {
          this.loadVideos = e,
          this.isShowLayer = !1,
          this.rightPage = t,
          this.leftPage = t
        },
        onLoadFailure: function (e) {
          this.loadCompleted = !0
        },
        formatVideos: function (e, t) {
          var i = this;
          if (e) {
            var a = e,
            n = e.updateInfo;
            return de() (a) && a.length ? (a.forEach(function (e, a) {
              e.index = Object(ge['c']) (t, a),
              e.isNew = Object(h['u']) (e, n || i.updateInfo),
              e.upperRightCorner = Object(h['i']) (e),
              e.order = e.pd,
              e.title = i.title(e),
              e.selected = i.videoInfo.qipuId === e.qipuId
            }, this), a)  : [
            ]
          }
        },
        title: function (e) {
          var t = this.formatTitle(e.shortTitle);
          return (e.order ? '第'.concat(e.order, '集')  : '') + (t ? ': ' + t : '')
        },
        formatTitle: function (e) {
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
        },
        toggleVideoClick: function () {
          this.$store.dispatch('play/layerPage', this.page)
        }
      }
    },
    we = Ie,
    _e = Object(y['a']) (we, le, ce, !1, null, null, null),
    ke = _e.exports,
    xe = {
      name: 'EpisodeCard',
      components: {
        EpisodeDigit: ke
      },
      props: {
        channelId: {
          type: Number,
        default:
          2
        },
        pageSize: {
          type: Number,
        default:
          10
        },
        albumId: {
          type: Number,
        default:
          0
        },
        showContent: {
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
        episodeType: {
          type: String,
        default:
          ''
        },
        curTvid: {
          type: Number,
        default:
          0
        },
        updateStrategy: {
          type: String,
        default:
          ''
        },
        albumInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        videoList: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        videoTitle: {
          type: String,
        default:
          ''
        },
        qipuId: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          isLoad: !1
        }
      },
      methods: {
        showAlbumLayer: function () {
          this.$emit('showAlbumLayer')
        }
      }
    },
    Le = xe,
    Pe = Object(y['a']) (Le, oe, re, !1, null, null, null),
    Ce = Pe.exports,
    Se = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('PlayInfoLayer', e._g(e._b({
        style: 'overflow: hidden',
        attrs: {
          id: 'PlayAlbumLayer',
          'associated-id': e.videoInfo.qipuId,
          'pop-class': 'm-episode-pop',
          name: 'm-albumListLayer'
        },
        scopedSlots: e._u([{
          key: 'content',
          fn: function () {
            return [i('section', {
              ref: 'title',
              staticClass: 'g-tab-num g-tab-txt'
            }, [
              i('div', {
                staticClass: 'm-tab-num m-sliding'
              }, [
                i('div', {
                  staticClass: 'm-tab-num-list m-sliding-list',
                  staticStyle: {
                    '-webkit-transform': 'translate(0px, 0px) scale(1)',
                    transform: 'translate(0px, 0px) scale(1)'
                  }
                }, [
                  i('span', {
                    class : [
                      'c-tab-item',
                      {
                        selected: e.isNumList
                      }
                    ],
                    attrs: {
                      name: 'm-digit'
                    },
                    on: {
                      click: function (t) {
                        return e.changeListType('digit')
                      }
                    }
                  }, [
                    e._v('选集')
                  ]),
                  i('span', {
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
                        selected: e.isTextList
                      }
                    ],
                    attrs: {
                      name: 'm-text'
                    },
                    on: {
                      click: function (t) {
                        return e.changeListType('text')
                      }
                    }
                  }, [
                    e._v('分集简介')
                  ])
                ])
              ])
            ]),
            i('section', {
              ref: 'tab',
              staticClass: 'g-tab-num g-tab-episodeNum'
            }, [
              i('VideoTabScroll', {
                staticClass: 'm-tab-num m-sliding',
                attrs: {
                  'list-length': e.videoList.totalPages,
                  'scroll-x': !0
                }
              }, [
                i('VideoEpisodeTabs', {
                  attrs: {
                    'video-info': e.pageInfo,
                    'paging-type': 'group'
                  },
                  on: {
                    changeTag: e.toggleChangeTag
                  }
                })
              ], 1)
            ], 1),
            e.isNumList ? i('PlayPositionLayer', {
              attrs: {
                'cur-page': e.page
              }
            }, [
              i('div', {
                staticClass: 'm-album-num clearfix'
              }, e._l(e.videos, function (t, a) {
                return i('a', {
                  directives: [
                    {
                      name: 'play',
                      rawName: 'v-play',
                      value: {
                        continuous: e.continuous,
                        card: 'albumList',
                        action: 'upsert',
                        selectClass: 'selected',
                        qipuId: t.qipuId,
                        index: t.index,
                        url: t.pageUrl,
                        redirect: !1
                      },
                      expression: '{\n            continuous: continuous,\n            card: \'albumList\',\n            action: \'upsert\',\n            selectClass: \'selected\',\n            qipuId: video.qipuId,\n            index: video.index,\n            url: video.pageUrl,\n            redirect: false,\n          }'
                    }
                  ],
                  key: t.id + '_' + a + '_albumlayer',
                  staticClass: 'c-album-item',
                  class : {
                    selected: e.videoInfo.qipuId === t.qipuId
                  },
                  attrs: {
                    title: t.title,
                    href: 'javascript:void(0)'
                  },
                  on: {
                    click: e.toggleVideoClick
                  }
                }, [
                  i('span', {
                    staticClass: 'num'
                  }, [
                    e._v(e._s(t.pd))
                  ]),
                  i('div', {
                    staticClass: 'c-rt'
                  }, [
                    t.upperRightCorner ? i('AuraVideoPicicon', {
                      attrs: {
                        text: t.upperRightCorner,
                        picicon: 'c-picicon-s'
                      }
                    })  : e._e()
                  ], 1),
                  i('span', {
                    staticClass: 'album-current',
                    class : {
                      hide: e.videoInfo.qipuId !== t.qipuId
                    }
                  }, [
                    i('i', {
                      staticClass: 'c-glyphicon c-glyphicon-albumPlay'
                    })
                  ])
                ])
              }), 0)
            ])  : e.isTextList ? i('PlayPositionLayer', {
              attrs: {
                'cur-page': e.page
              }
            }, [
              i('EpisodeText', {
                attrs: {
                  videos: e.videos,
                  'is-load': e.isLoad,
                  'video-info': e.videoInfo,
                  'cur-page': e.page,
                  continuous: e.continuous
                }
              })
            ], 1)  : e._e()]
          },
          proxy: !0
        }
        ])
      }, 'PlayInfoLayer', e.$attrs, !1), e.$listeners))
    },
    Ve = [
    ],
    qe = i('9bf7'),
    Oe = i('d4db'),
    je = i('dbce'),
    Te = i('1d21'),
    Ne = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        e.videos && e.videos.length ? i('section', {
          staticClass: 'c-dramasList m-episode-intro',
          staticStyle: {
            overflow: 'scroll-y'
          },
          attrs: {
            name: 'm-text'
          }
        }, e._l(e.videos, function (t, a) {
          return i('div', {
            key: t.id + '_' + a + '_albumlayer',
            attrs: {
              title: t.title
            }
          }, [
            i('div', {
              directives: [
                {
                  name: 'play',
                  rawName: 'v-play',
                  value: {
                    card: 'albumList',
                    continuous: e.isLogin,
                    redirect: !1,
                    action: 'upsert',
                    url: t.pageUrl,
                    qipuId: t.qipuId,
                    index: t.index,
                    vfrm: e.vfrm
                  },
                  expression: '{\n          card: \'albumList\',\n          continuous: isLogin,\n          redirect: false,\n          action: \'upsert\',\n          url: video.pageUrl,\n          qipuId: video.qipuId,\n          index: video.index,\n          vfrm: vfrm\n        }'
                }
              ],
              staticClass: 'c-title-xs',
              class : t.qipuId === e.videoInfo.qipuId ? 'selected' : '',
              on: {
                click: e.toggleVideoClick
              }
            }, [
              e._m(0, !0),
              t.subTitle ? i('span', [
                i('span', {
                  staticClass: 'album-info'
                }, [
                  e._v(e._s(t.subTitle))
                ])
              ])  : i('span', [
                i('span', {
                  staticClass: 'album-info'
                }, [
                  e._v(e._s(t.pd))
                ]),
                e._v(e._s(t.vt || t.shortTitle) + '\n        ')
              ])
            ]),
            t.desc ? i('div', {
              staticClass: 'info',
              attrs: {
                'data-descQipuID': t.qipuId
              }
            }, [
              e._v('\n        ' + e._s(t.desc) + '\n      ')
            ])  : e._e()
          ])
        }), 0)  : e.isLoad ? i('section', {
          staticClass: 'm-loading-info'
        }, [
          i('div', {
            staticClass: 'c-info'
          }, [
            e._v('当前剧集目前暂无内容或版权，请持续关注更新')
          ])
        ])  : e._e()
      ])
    },
    Ae = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('span', {
          staticClass: 'video-status'
        }, [
          i('i', {
            staticClass: 'c-playPage-icon c-playPage-play'
          })
        ])
      }
    ],
    ze = {
      name: 'EpisodeText',
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
        videoInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        curPage: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          isLogin: Object(ye['M']) ()
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'albumListInfo',
        'layerOpen',
        'videoList',
        'layerPage'
      ]), {
        selectIndex: function () {
          return this.videoInfo.order
        }
      }),
      watch: {
        page: function (e, t) {
          e !== t && (this.videos = this.albumListInfo[this.page])
        },
        layerOpen: function (e) {
          e && (this.page = this.getPage(), this.videos = this.albumListInfo[this.page])
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
    },
    Ee = ze,
    Re = Object(y['a']) (Ee, Ne, Ae, !1, null, null, null),
    Be = Re.exports,
    $e = {
      name: 'EpisodeLayer',
      components: {
        PlayInfoLayer: Oe['a'],
        VideoEpisodeTabs: qe['a'],
        PlayPositionLayer: je['a'],
        VideoTabScroll: Te['a'],
        EpisodeText: Be
      },
      props: {
        albumInfo: {
          type: Object,
        default:
          function () {
            return {
            }
          }
        },
        continuous: {
          type: Boolean,
        default:
          !0
        },
        qipuId: {
          type: Number,
        default:
          0
        },
        albumId: {
          type: Number,
        default:
          0
        }
      },
      data: function () {
        return {
          page: 1,
          videos: [
          ],
          pageInfo: {
          },
          listType: 'digit',
          isLoad: !1
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo',
        'subTemplate',
        'videoList',
        'albumListInfo',
        'layerOpen'
      ]), {
        selectIndex: function () {
          return this.videoInfo.order
        },
        isNumList: function () {
          return 'digit' === this.listType
        },
        isTextList: function () {
          return 'text' === this.listType
        },
        updateStatus: function () {
          var e = this.albumInfo,
          t = e.videoCount;
          return this.subTemplate.album && t && e.latestVideoOrder ? t === e.latestVideoOrder ? ''.concat(t, '集全')  : t > e.latestVideoOrder ? '更新至'.concat(e.latestVideoOrder, '集/共').concat(t, '集全')  : '更新至'.concat(e.latestVideoOrder, '集')  : this.subTemplate.short ? this.videoInfo.issueTime + '发布' : ''
        },
        updateInfo: function () {
          var e = Object(h['n']) (this.albumInfo);
          return e
        },
        isAlbumList: function () {
          var e = f['a'].getCurVideo() || {
          },
          t = 'albumList' === e.card;
          return t
        }
      }),
      watch: {
        page: function (e, t) {
          e !== t && (this.videos = this.albumListInfo[this.page])
        },
        layerOpen: function (e) {
          e && (this.page = this.getPage(), this.pageInfo = {
            currentPage: this.page,
            pageSize: this.videoList.pageSize,
            total: this.videoList.total
          }, this.videos = this.albumListInfo[this.page])
        }
      },
      mounted: function () {
        this.cacheAid = this.videoInfo.aid,
        this.cacheQipuId = this.albumId
      },
      methods: {
        title: function (e) {
          if (this.subTemplate.album) {
            var t = this.formatTitle(e.shortTitle);
            return (e.order ? '第'.concat(e.order, '集')  : '') + (t ? ': ' + t : '')
          }
          return e.videoName || e.shortTitle
        },
        formatTitle: function (e) {
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
        },
        getPage: function () {
          return this.selectIndex ? Math.ceil(this.selectIndex / this.videoList.pageSize)  : this.videoList.currentPage
        },
        getVideos: function (e, t) {
          this.$store.dispatch('play/albumListInfo', Object(ve['a']) ({
          }, t, e)),
          this.videos = e
        },
        toggleChangeTag: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t) {
            var i,
            a,
            n,
            s;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (this.page = t, this.isLoad = !0, !this.albumListInfo[t]) {
                    e.next = 7;
                    break
                  }
                  i = this.formatVideos(this.albumListInfo[t], t),
                  this.getVideos(i, t),
                  e.next = 13;
                  break;
                case 7:
                  return a = {
                    albumId: 0 === this.cacheQipuId ? this.albumId : this.cacheQipuId,
                    size: this.videoList.pageSize,
                    page: t,
                    updateInfo: this.updateInfo,
                    needPrevue: !0
                  },
                  e.next = 10,
                  Object(ge['a']) (a);
                case 10:
                  n = e.sent,
                  s = this.formatVideos(n.videos, t),
                  this.getVideos(s, t);
                case 13:
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
        formatVideos: function (e, t) {
          var i = this;
          if (e) {
            var a = e,
            n = e.updateInfo;
            return de() (a) && a.length ? (a.forEach(function (e, a) {
              e.index = Object(ge['c']) (t, a),
              e.isNew = Object(h['u']) (e, n || i.updateInfo),
              e.upperRightCorner = Object(h['i']) (e),
              e.order = e.pd,
              e.title = i.title(e)
            }), a)  : [
            ]
          }
        },
        toggleVideoClick: function () {
          this.$store.dispatch('play/layerPage', this.page)
        },
        changeListType: function (e) {
          this.listType = e
        }
      }
    },
    De = $e,
    Ue = Object(y['a']) (De, Se, Ve, !1, null, null, null),
    Fe = Ue.exports,
    He = i('12a0'),
    Me = i('8b4a'),
    Qe = i('666d'),
    Ye = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', [
        i('div', {
          ref: 'content'
        }, [
          e.inited || e.loading ? e._t('content')  : e._e()
        ], 2),
        i('div', {
          ref: 'skeleton'
        }, [
          e.inited ? e._e()  : e._t('skeleton')
        ], 2),
        i('section', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.loading,
              expression: 'loading'
            }
          ],
          staticClass: 'm-hotSpot-update'
        }, [
          e._m(0)
        ]),
        i('div', {
          directives: [
            {
              name: 'show',
              rawName: 'v-show',
              value: e.showMoreBtn && !e.inited && e.needLoad,
              expression: 'showMoreBtn && !inited && needLoad'
            }
          ],
          staticClass: 'm-box-items m-box-items-full',
          on: {
            click: e.startLoading
          }
        }, [
          e._m(1)
        ])
      ])
    },
    Ge = [
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('div', {
          staticClass: 'inner'
        }, [
          i('i', {
            staticClass: 'update-icon'
          }),
          i('span', {
            staticClass: 'c-info'
          }, [
            e._v('正在全力加载')
          ])
        ])
      },
      function () {
        var e = this,
        t = e.$createElement,
        i = e._self._c || t;
        return i('section', {
          staticClass: 'm-linkMore'
        }, [
          i('a', {
            staticClass: 'm-link link-hand',
            attrs: {
              href: 'javascript:void(0);'
            }
          }, [
            i('i', {
              staticClass: 'icon-handMore'
            }),
            e._v('点击查看更多\n      ')
          ])
        ])
      }
    ],
    Je = i('c0ba'),
    Xe = {
      name: 'LazyLoad',
      props: {
        timeout: {
          type: Number,
        default:
          - 1
        },
        showMoreBtn: {
          type: Boolean,
        default:
          !1
        },
        needLoad: {
          type: Boolean,
        default:
          !0
        }
      },
      data: function () {
        return {
          inited: !1,
          loading: !1
        }
      },
      mounted: function () {
        var e = this;
        this.needLoad && (this.interObserver = new Je['b'](function (t, i) {
          e.startLoading()
        }, {
          key: 'LazyLoad'
        }), this.interObserver.observe(this.$refs.skeleton, {
        }), this.timeout < 0 || setTimeout(function () {
          e.startLoading()
        }, this.timeout))
      },
      beforeDestroy: function () {
        this.interObserver.unobserve(this.$refs.skeleton)
      },
      methods: {
        startLoading: function () {
          var e = this;
          this.loading = !0,
          this.timer && clearInterval(this.timer),
          this.timer = setInterval(function () {
            var t = e.$refs.content;
            t && t.offsetHeight && (e.inited = !0, e.loading = !1, clearInterval(e.timer))
          }, 500)
        }
      }
    },
    We = Xe,
    Ze = Object(y['a']) (We, Ye, Ge, !1, null, null, null),
    Ke = Ze.exports,
    et = i('2171'),
    tt = i('b771'),
    it = i('a466'),
    at = i('ba2c'),
    nt = i('9e5e'),
    st = (i('7f7f'), {
      data: [
      ],
      params: {
      },
      pageSize: 75,
      callback: [
      ],
      chachePage: {
      },
      init: function (e) {
        this.params = e,
        this.pageSize = e.pageSize || 75
      },
      getData: function (e, t, i, a) {
        if (this.checkData(e, t, !1)) a(this.data.slice(e, t + 1));
         else {
          this.callback.push({
            from: e,
            to: t,
            callback: a
          });
          var n = he() (e / this.pageSize, 10) + 1,
          s = he() (t / this.pageSize, 10) + 1;
          while (n <= s) this.getPageData(n++, i)
        }
      },
      getPageData: function () {
        var e = Object(s['a']) (regeneratorRuntime.mark(function e(t, i) {
          var a,
          n,
          s,
          o,
          r,
          l,
          c;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                if (a = {
                  albumId: i,
                  size: this.pageSize,
                  page: t,
                  needPrevue: !1,
                  needVipPrevue: !1
                }, !this.chachePage[t]) {
                  e.next = 5;
                  break
                }
                this.copyData(this.chachePage[t], !1),
                e.next = 9;
                break;
              case 5:
                return e.next = 7,
                Object(ge['a']) (a);
              case 7:
                if (n = e.sent, n) s = n.total,
                o = n.sets,
                r = !0,
                s = Math.min(s, this.pageSize),
                s === o && (r = !1),
                this.copyData(n.videos, r),
                this.chachePage[t] = n.videos;
                 else for (l = this.callback, c = 0; c < l.length; c++) l[c] && this.checkData(l[c].from, l[c].to, !0) && (l[c].callback(null), l[c] = null);
              case 9:
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
      }(),
      dataChanged: function (e) {
        for (var t = this.callback, i = 0; i < t.length; i++) t[i] && this.checkData(t[i].from, t[i].to, e) && (t[i].callback(this.data.slice(t[i].from, t[i].to + 1)), t[i] = null)
      },
      checkData: function (e, t, i) {
        return i || this.data[e] && this.data[t]
      },
      copyData: function (e, t) {
        for (var i = e.length, a = 0; a < i; a++) {
          var n = e[a].pd - 1;
          this.data[n] = e[a]
        }
        this.dataChanged(t)
      }
    }), ot = st, rt = i('784b'), lt = !0, ct = '', ut = [
    ], dt = 0, pt = 1, ht = {
      data: [
      ],
      callback: [
      ],
      init: function (e) {
        var t = e.albumBossStatus,
        i = void 0 === t ? 0 : t,
        a = e.aid,
        n = e.rateList,
        s = e.order,
        o = void 0 === s ? 1 : s,
        r = e.allAlbum,
        l = void 0 === r ? 0 : r;
        lt = 0 === i,
        ct = a,
        ut = n,
        pt = o,
        dt = l
      },
      getAlbums: function (e, t) {
        if (e) {
          var i = e.from,
          a = e.to;
          ot.getData(i - 1, a - 1, ct, function (e) {
            var n = {
            };
            n.list = mt(e),
            n.id = ''.concat(ct, '-').concat(i, '-').concat(a),
            t(n)
          })
        }
      },
      getVideoRate: function (e) {
        var t = [
        ];
        ut && ut.length > 0 && ut.forEach(function (e) {
          var i = Object(rt['c']) (e.bid);
          if (i) {
            var a = i.name;
            e._vd = a,
            e._fle = '',
            e.selected = e._selected,
            e.isCallApp = false,
            e.vd = he() (i._rate),
            t.push(e)
          }
        }),
        e(t)
      },
      getAlbumSum: function (e) {
        return lt ? dt : 0
      },
      getCurrentAlbum: function (e) {
        e(pt)
      }
    }, mt = function (e) {
      return e && e.map(function (e) {
        return e.mdown = e.mdown || 0,
        e.wmarkPos = e.wmarkPos || 0,
        e.vpic = e.qualityImageUrl || '',
        e.tvQipuId = e.qipuId || '',
        e.purType = e.purType || 0,
        e.type = e.type || 0,
        e.lgh = e.lgh || 0,
        e.isProduced = e.isQiyiProduced ? 1 : 0,
        e.vurl = e.pageUrl || '',
        e.plcdown = e.plcdown || {
        },
        e.timeLength = e.timeLength || 0,
        e.exclusive = e.exclusive ? 1 : 0,
        e.pds = e.pds || '',
        e.vn = e.shortTitle || '',
        e
      })
    }, ft = ht, vt = i('aed2'), gt = function () {
      var e = this,
      t = e.$createElement,
      i = e._self._c || t;
      return i('div', {
        attrs: {
          name: 'm-sourceFocus'
        }
      }, [
        i('VideoList', {
          directives: [
            {
              name: 'show-pingback',
              rawName: 'v-show-pingback',
              value: '809121_dqkd',
              expression: '\'809121_dqkd\''
            }
          ],
          attrs: {
            videos: e.videos
          },
          scopedSlots: e._u([{
            key: 'header',
            fn: function () {
              return [i('AuraCardTitle', {
                attrs: {
                  title: e.title
                },
                scopedSlots: e._u([{
                  key: 'rightBtn',
                  fn: function () {
                    return [i('span', {
                      directives: [
                        {
                          name: 'pingback',
                          rawName: 'v-pingback',
                          value: '809121_dqkdarrow',
                          expression: '\'809121_dqkdarrow\''
                        }
                      ],
                      staticClass: 'c-des',
                      on: {
                        click: function (t) {
                          e.showLayer = !0
                        }
                      }
                    }, [
                      e._v('\n            ' + e._s(e.videos.length)),
                      i('i', {
                        staticClass: 'c-glyphicon c-glyphicon-arrowRight'
                      })
                    ])]
                  },
                  proxy: !0
                }
                ])
              })]
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
                    value: '809121_dqkd',
                    expression: '\'809121_dqkd\''
                  }
                ],
                ref: 'horizontalScroll',
                staticClass: 'm-pic-playNew-horizontal',
                attrs: {
                  videos: a,
                  ellipsis: !1,
                  'cur-qipu-id': e.qipuId
                },
                on: {
                  click: e.onVideoHorizontalClick
                }
              })]
            }
          }
          ])
        }),
        i('PlayInfoLayer', {
          staticStyle: {
            overflow: 'hidden'
          },
          attrs: {
            'associated-id': e.qipuId,
            open: e.showLayer,
            modal: !1
          },
          on: {
            'update:open': function (t) {
              e.showLayer = t
            }
          },
          scopedSlots: e._u([{
            key: 'content',
            fn: function () {
              return [i('section', {
                staticClass: 'm-title'
              }, [
                i('h3', {
                  staticClass: 'c-title-des'
                }, [
                  e._v(e._s(e.title))
                ])
              ]),
              i('div', {
                ref: 'verticalScroll',
                staticStyle: {
                  height: '100%'
                }
              }, [
                i('div', [
                  i('AuraVideoRowList', {
                    directives: [
                      {
                        name: 'pingback',
                        rawName: 'v-pingback',
                        value: '809121_dqkdfc',
                        expression: '\'809121_dqkdfc\''
                      }
                    ],
                    attrs: {
                      videos: e.videos,
                      'show-sub-title': !1,
                      'show-row-title': !1,
                      'show-desc': !1,
                      'nobox-margin': !0,
                      'cur-qipu-id': e.qipuId
                    },
                    on: {
                      click: e.onVideoVerticalClick
                    },
                    scopedSlots: e._u([{
                      key: 'extra',
                      fn: function (e) {
                        var t = e.video;
                        return [i('VideoCount', {
                          attrs: {
                            status: t.hotDisplayStatus,
                            count: t.hotDisplayCount
                          }
                        })]
                      }
                    },
                    {
                      key: 'bottom',
                      fn: function () {
                        return [i('section', {
                          staticClass: 'm-noInfo-tip'
                        }, [
                          e._v('没有更多了')
                        ])]
                      },
                      proxy: !0
                    }
                    ])
                  })
                ], 1)
              ])]
            },
            proxy: !0
          }
          ])
        })
      ], 1)
    }, bt = [
    ], yt = i('8d4a'), It = i('9a35'), wt = i('5a0c'), _t = i.n(wt), kt = i('1fba'), xt = {
      name: 'PlayVideoFocus',
      components: {
        VideoList: m['a'],
        VideoCount: It['a'],
        PlayInfoLayer: yt['a']
      },
      props: {
        qipuId: {
          type: Number,
        default:
          0
        },
        period: {
          type: String,
        default:
          ''
        }
      },
      data: function () {
        return {
          videos: [
          ],
          title: '看点',
          showLayer: !1
        }
      },
      watch: {
        qipuId: function (e) {
          if (e) {
            var t = f['a'].getCurVideo() || {
            };
            'albumList' !== t.card || this.redirect || this.refresh()
          }
        },
        showLayer: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!t) {
                    e.next = 9;
                    break
                  }
                  return e.next = 3,
                  this.initScroll({
                    refName: 'verticalScroll',
                    options: {
                      scrollY: !0
                    }
                  });
                case 3:
                  return e.next = 5,
                  this.getHot();
                case 5:
                  Object(F['m']) ({
                    block: '809121_dqkdfc'
                  }),
                  this.syncSelect('verticalScroll'),
                  e.next = 10;
                  break;
                case 9:
                  this.syncSelect('horizontalScroll');
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
        }()
      },
      mounted: function () {
        this.refresh()
      },
      methods: {
        refresh: function () {
          this.resetTitle(),
          this.getVideos()
        },
        getVideos: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2,
                  Object(N['k']) ({
                    qipuId: this.qipuId
                  });
                case 2:
                  if (t = e.sent, t.forEach(function (e) {
                    e.mainTitle = e.shortTitle,
                    e.lowerRightCorner = e.duration,
                    e.upperRightCorner = Object(h['o']) (e),
                    e.play = {
                      continuous: !0,
                      card: 'focus',
                      action: 'add',
                      redirect: !1,
                      url: e.pageUrl,
                      qipuId: e.qipuId,
                      vfrm: '30-28-30-7'
                    }
                  }), this.videos = t, this.videos.length) {
                    e.next = 7;
                    break
                  }
                  return e.abrupt('return');
                case 7:
                  this.initScroll({
                    refName: 'horizontalScroll',
                    options: {
                      scrollX: !0,
                      eventPassthrough: 'vertical',
                      click: !1
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
        resetTitle: function () {
          this.title = this.period ? _t() (this.period).format('YYYY-MM-DD') + '期 看点' : '看点'
        },
        getHot: function () {
          var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
            var t,
            i;
            return regeneratorRuntime.wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!this.hotFinish) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt('return');
                case 2:
                  return t = this.videos.map(function (e) {
                    return e.qipuId
                  }),
                  e.next = 5,
                  Object(h['e']) (t);
                case 5:
                  i = e.sent,
                  this.videos.forEach(function (e) {
                    e.hotDisplayCount = + i[e.qipuId],
                    e.hotDisplayStatus = 1
                  }),
                  this.hotFinish = !0;
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
        onVideoHorizontalClick: function (e, t, i) {
          var a = i.currentTarget;
          this['horizontalScroll'].scrollToElement(a, 0, !0, !0)
        },
        onVideoVerticalClick: function (e, t, i) {
          var a = i.currentTarget;
          this['verticalScroll'].scrollToElement(a, 0, !0, !0)
        },
        syncSelect: function (e) {
          this[e].refresh();
          var t = this.getRefEl(e);
          if (t) {
            var i = t.querySelectorAll('.selected');
            i && this[e].scrollToElement(i[0], 0, !0, !0)
          }
        },
        getRefEl: function (e) {
          var t = this.$refs[e];
          return t && !t.children && (t = t.$el),
          t
        },
        initScroll: function (e) {
          var t = this,
          i = e.refName,
          a = e.options;
          this[i + 'Inited'] || this.$nextTick(function () {
            var e = t.getRefEl(i);
            e && (t[i] = new kt['a'](e, Object(o['a']) ({
              scrollY: !0,
              eventPassthrough: !1,
              preventDefault: !0,
              click: !0,
              probeType: 0,
              HWCompositing: !1,
              useTransition: !1
            }, a)), t[i + 'Inited'] = !0)
          })
        }
      }
    },
    Lt = xt,
    Pt = Object(y['a']) (Lt, gt, bt, !1, null, null, null),
    Ct = Pt.exports,
    St = i('f3d8'),
    Vt = i('5cf8'),
    qt = i('2b04'),
    Ot = {
      name: 'PlayLong',
      components: {
        PlayVideoRelated: l['a'],
        PlayLongExtendBar: c['a'],
        PlayBanner: u['a'],
        PlayLongAroundVideo: w,
        PlayVideoSeries: _['a'],
        VideoRecommend: O['a'],
        PlayVideoFragment: k['a'],
        PlayLongSoundTrack: q,
        PlayLongActivityEntry: R,
        PlayRelevantBanner: B['a'],
        PlayFloatIcon: se,
        EpisodeCard: Ce,
        EpisodeLayer: Fe,
        SourceCard: He['a'],
        SourceLayer: Me['a'],
        VideoStarCircle: Qe['a'],
        PlayLongComment: et['a'],
        PlayJoinerCard: tt['a'],
        PlayPlatformLimit: at['a'],
        PlayVideoLayerCallApp: G,
        LazyLoad: Ke,
        BackTop: nt['a'],
        PlayFoldVideoInfo: vt['a'],
        PlayVideoFocus: Ct,
        PlayAppBannerShaoer: St['a'],
        PlayBottomAppHot: Vt['a'],
        PlayRelatedHotWords: qt['a']
      },
      mixins: [
        it['a']
      ],
      data: function () {
        return {
          isShowAlbumLayer: !1,
          isShowSourceLayer: !1,
          isCommentLoad: !1,
          isLogin: !!Object(ye['M']) (),
          showInChannels: [
            K['CHANNEL_DIANSHIJU'],
            K['CHANNEL_DONGMAN'],
            K['CHANNEL_ZONGYI'],
            K['CHANNEL_SHAOER']
          ],
          page: 0,
          limitFilter: !1,
          subtype: 'H5qzql_523'
        }
      },
      computed: Object(o['a']) ({
      }, Object(r['e']) ('play', [
        'videoInfo',
        'controlInfo',
        'albumInfo',
        'userInfo',
        'subTemplate',
        'diversionInfo',
        'videoList',
        'playInfo',
        'template',
        'redirect',
        'channelId',
        'playerBanner'
      ]), Object(r['c']) ('play', [
        'showShaoerAppBtn'
      ]), {
        isEnableAlbumPlay: function () {
          return !this.showInChannels.includes(this.channelId + '') || this.isLogin || P['i'].baidubox || 'undefined' !== typeof document && !!document.referrer && document.referrer.includes('m.baidu.com')
        },
        isCallApp: function () {
          return false;
        },
        recVfrm: function () {
          return this.albumInfo.isSource ? '30-28-18-7' : '30-26-18-7'
        },
        hotTitle: function () {
          return this.template.source ? '本期热度' : '热度'
        }
      }),
      mounted: function () {
        var e = Object(s['a']) (regeneratorRuntime.mark(function e() {
          var t = this;
          return regeneratorRuntime.wrap(function (e) {
            while (1) switch (e.prev = e.next) {
              case 0:
                return e.next = 2,
                this.$GlobalSwitcher.getFilters('limitplay', 'play');
              case 2:
                this.limitFilter = e.sent,
                this.diversionInfo && this.diversionInfo.config && this.diversionInfo.config.length > 0 && this.diversionInfo.config.forEach(function (e) {
                  'limitplay' === e.code && t.limitFilter && (t.subtype = e.subtype)
                });
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
      methods: {
        setRateList: function (e) {
          var t = e.rateList;
          if (window) {
            var i = {
              albumBossStatus: this.videoInfo.albumBossStatus || 0,
              aid: this.videoInfo.aid,
              currentVd: 1,
              rateList: t,
              order: this.videoInfo.order,
              allAlbum: this.albumInfo.videoCount
            };
            ft.init(i),
            window['VivoAPI'] = ft
          }
        }
      }
    },
    jt = Ot,
    Tt = Object(y['a']) (jt, a, n, !1, null, null, null);
    t['default'] = Tt.exports
  }
}
]);
