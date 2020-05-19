(window.webpackJsonp = window.webpackJsonp || [
]).push([[2],
{
  116: function (t, e, a) {
    'use strict';
    var n = a(6),
    i = a.n(n),
    o = a(13),
    r = a.n(o),
    c = a(7),
    s = a.n(c),
    l = a(8),
    d = a.n(l),
    u = a(9),
    m = a.n(u),
    p = a(10),
    h = a.n(p),
    f = a(4),
    v = a.n(f),
    g = a(0),
    y = a.n(g),
    w = a(28),
    b = a.n(w),
    k = a(45),
    E = a.n(k),
    C = a(5),
    S = (a(277), a(2)),
    D = a(3);
    a(281);
    function N() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' === typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [
        ], (function () {
        }))),
        !0
      } catch (t) {
        return !1
      }
    }
    var O = a(37),
    A = function (t) {
      m() (n, t);
      var e,
      a = (e = n, function () {
        var t,
        a = v() (e);
        if (N()) {
          var n = v() (this).constructor;
          t = Reflect.construct(a, arguments, n)
        } else t = a.apply(this, arguments);
        return h() (this, t)
      });
      function n(t) {
        var e;
        return s() (this, n),
        (e = a.call(this, t)).state = {
          moduleKey: 'h5_detail_guide',
          action: {
          },
          title: '',
          subType: ''
        },
        e
      }
      return d() (n, [
        {
          key: 'componentWillMount',
          value: function () {
            var t = (this.props.comData || {
            }).dataNode || [
            ],
            e = t[0] && t[0].data || {
            };
            this.setState({
              action: e.action || {
              },
              title: e.title || '',
              subType: e.subType || 'NORMAL'
            })
          }
        },
        {
          key: 'componentDidMount',
          value: function () {
            this.props.noCallUp || Object(D.a) ({
              spmC: this.state.moduleKey,
              spmD: 'banner',
              gmKey: 'EXP'
            })
          }
        },
        {
          key: 'render',
          value: function () {
            var t = this;
            return this.props.noCallUp ? null : y.a.createElement('div', {
              className: 'clipboard h5-detail-guide '.concat('VIP' === this.state.subType ? 'vip-theme' : ''),
              onClick: function () {
                t.callapp()
              }
            }, y.a.createElement('a', {
              className: 'text'
            }, this.state.title))
          }
        },
        {
          key: 'callapp',
          value: function () {
            'JUMP_TO_URL' === this.state.action.type && this.state.action.value ? location.href = this.state.action.value : O && O.default({
              spmC: this.state.moduleKey,
              source: 'limitedplaybutton',
              spmD: 'banner'
            })
          }
        }
        ]), n
      }(g.Component),
      j = Object(C.connect) ((function (t) {
        return {
          noCallUp: t.page.noCallUp
        }
      })) (A);
      a(315);
      function x() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [
          ], (function () {
          }))),
          !0
        } catch (t) {
          return !1
        }
      }
      var _ = a(37),
      R = function (t) {
        m() (n, t);
        var e,
        a = (e = n, function () {
          var t,
          a = v() (e);
          if (x()) {
            var n = v() (this).constructor;
            t = Reflect.construct(a, arguments, n)
          } else t = a.apply(this, arguments);
          return h() (this, t)
        });
        function n(t) {
          var e;
          return s() (this, n),
          (e = a.call(this, t)).state = {
            moduleKey: e.props.comData.type,
            isClient: !1,
            Data: ''
          },
          e
        }
        return d() (n, [
          {
            key: 'componentWillMount',
            value: function () {
              var t = (this.props.comData || {
              }).dataNode || [
              ],
              e = t[0] && t[0].data || {
              };
              this.setState({
                Data: e
              })
            }
          },
          {
            key: 'componentDidMount',
            value: function () {
              this.state.Data.img && Object(D.a) ({
                spmC: 'h5_ad_banner',
                spmD: 'show',
                gmKey: 'EXP'
              }),
              this.setState({
                isClient: !0
              })
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              return y.a.createElement('div', {
                className: 'h5-detail-ad'
              }, y.a.createElement('a', {
                className: 'text clipboard',
                onClick: function () {
                  t.callapp()
                }
              }, y.a.createElement('img', {
                src: this.state.isClient ? Object(S.useWebp) (this.state.Data.img)  : this.state.Data.img,
                alt: this.state.Data.title
              })))
            }
          },
          {
            key: 'callapp',
            value: function () {
            }
          }
          ]), n
        }(g.Component),
        T = Object(C.connect) ((function (t) {
          return {
            videoMap: t.page.pageData.videoMap,
            noCallUp: t.page.noCallUp
          }
        })) (R),
        M = (a(316), a(37)),
        K = Object(C.connect) ((function (t) {
          return {
            videoMap: t.page.pageData.videoMap,
            noCallUp: t.page.noCallUp
          }
        })) ((function (t) {
          var e = t.videoMap.videoId,
          a = Object(g.useRef) (null),
          n = function () {
            window.location && (window.location.href = 'https://account.youku.com/?callback='.concat(encodeURIComponent(window.location.href)))
          };
          return Object(g.useEffect) ((function () {
            if (t.videoMap.allowComment) {
              a.current.innerHTML = '',
              window.ykComment && window.ykComment('YKComment', {
                operate: 17,
                text: 8,
                objectId: e,
                objectType: '1',
                source: '',
                appKey: 'b92f45cce7ebabdb1b282d5b3b667162',
                loginFunc: n,
                configId: 'e691def2ec95644e',
                launchApp: function (t) {
                  M && M.default({
                    spmC: 'comment',
                    spmD: 'showmore',
                    source: 'comment'
                  })
                }
              }); var i = document.querySelector('#YKComment'), o = document.querySelector('#comment-frame'), r = null; window.addEventListener('message', (function (e) {
                e.data.height && (i && i.setAttribute('style', 'height:'.concat(e.data.height, 'px;')), o && o.setAttribute('style', 'width:100%; height:'.concat(e.data.height, 'px;'))),
                t.noCallUp && (r && clearTimeout(r), r = setTimeout((function () {
                  document.querySelector('#comment-frame') && document.querySelector('#comment-frame').contentDocument && document.querySelector('#comment-frame').contentDocument.querySelector('.cmt-more-cont') && (document.querySelector('#comment-frame').contentDocument.querySelector('.cmt-more-cont').style.display = 'none')
                }), 800))
              }), !1), Object(D.a) ({
                spmC: 'comment',
                spmD: 'show',
                gmKey: 'EXP'
              })
            }
          }), [
            0
          ]), t.videoMap.allowComment && y.a.createElement('div', {
            id: 'YKComment',
            className: 'h5-detail-comment',
            ref: a
          })
        })); a(317); function P() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [
            ], (function () {
            }))),
            !0
          } catch (t) {
            return !1
          }
        }
        var I = a(37), U = function (t) {
          m() (n, t);
          var e,
          a = (e = n, function () {
            var t,
            a = v() (e);
            if (P()) {
              var n = v() (this).constructor;
              t = Reflect.construct(a, arguments, n)
            } else t = a.apply(this, arguments);
            return h() (this, t)
          });
          function n(t) {
            var e;
            return s() (this, n),
            (e = a.call(this, t)).state = {
              showMod: !0,
              moduleKey: 'jiugongge',
              pageSize: 9,
              currentPageNum: 0,
              showChange: !1,
              totalList: [
              ],
              showList: [
              ],
              isClient: !1,
              existIds: {
              }
            },
            e
          }
          return d() (n, [
            {
              key: 'componentWillMount',
              value: function () {
                var t,
                e = (this.props.comData || {
                }).dataNode || [
                ],
                a = !1,
                n = !0;
                e.map((function (t, e) {
                  t.pos = e + 1
                })),
                e.length > this.state.pageSize ? (a = !0, t = this.getShowData(e))  : e.length % 3 === 0 ? t = e : n = !1,
                this.setState({
                  showMod: n,
                  showChange: a,
                  showList: t,
                  totalList: e
                })
              }
            },
            {
              key: 'componentDidMount',
              value: function () {
                var t = this;
                this.state.showMod && (this.setState({
                  isClient: !0
                }), this.checkElExist(), document.addEventListener('scroll', (function () {
                  t.checkElExist()
                })))
              }
            },
            {
              key: 'checkElExist',
              value: function () {
                if (document.querySelector('#feed-lists')) {
                  var t = document.querySelector('#feed-lists').querySelectorAll('li.card-item');
                  if (t.length > 0) for (var e = 0; e < t.length; e++) {
                    var a = t[e],
                    n = a.getAttribute('data-vid') || '',
                    i = 0 === n.indexOf('X'),
                    o = a.getBoundingClientRect();
                    o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds['id_'.concat(n)] && (this.state.existIds['id_'.concat(n)] = !0, Object(D.a) ({
                      id: n,
                      spmC: this.state.moduleKey,
                      spmD: (i ? 'vdo_' : 'show_') + n,
                      gmKey: 'EXP'
                    }))
                  }
                }
              }
            },
            {
              key: 'getShowData',
              value: function (t, e, a) {
                var n = [
                ];
                if (t = t || this.state.totalList || [
                ], e = Number(e || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(t) && t.length > 0) {
                  for (var i = t.length, o = e * a, r = e, c = o; c < o + r; c++) {
                    var s = t[c % i];
                    n.push(s)
                  }
                  this.setState({
                    currentPageNum: ++a
                  })
                }
                return n
              }
            },
            {
              key: 'jump',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                },
                e = t.data.action.value;
                if (e) {
                  var a = 0 === e.indexOf('X');
                  I && I.default({
                    id: e,
                    spmC: this.state.moduleKey,
                    source: 'jiugongge',
                    spmD: (a ? 'vdo_' : 'show_') + e
                  })
                }
              }
            },
            {
              key: 'change',
              value: function () {
                var t = this.getShowData();
                if (t.length > 0) {
                  this.setState({
                    showList: t
                  });
                  var e = this.itemWrap.getBoundingClientRect().top,
                  a = document.body.scrollTop;
                  document.body.scrollTop = a + e,
                  Object(D.a) ({
                    spmC: this.state.moduleKey,
                    spmD: 'change'
                  })
                }
                this.checkElExist()
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this;
                return this.props.noCallUp ? null : this.state.showMod && y.a.createElement('div', {
                  className: 'h5-detail-recommend',
                  ref: function (e) {
                    t.itemWrap = e
                  }
                }, y.a.createElement('h1', {
                  className: 'mod-title'
                }, '为你推荐'), y.a.createElement('div', {
                  className: 'card-list clipboard'
                }, y.a.createElement('ul', {
                  id: 'feed-lists'
                }, this.state.showList.map((function (e) {
                  return y.a.createElement(b.a, {
                    height: '2.45rem',
                    offset: 500,
                    key: 'card'.concat(e.pos)
                  }, y.a.createElement('li', {
                    key: 'card'.concat(e.pos),
                    className: 'card-item',
                    'data-pos': e.pos,
                    'data-vid': e.data && e.data.action && e.data.action.value,
                    onClick: t.jump.bind(t, e)
                  }, y.a.createElement('a', {
                    href: 'javascript:void(0);'
                  }, y.a.createElement('div', {
                    className: 'section-top'
                  }, y.a.createElement('img', {
                    src: t.state.isClient ? Object(S.useWebp) (e.data.img)  : e.data.img
                  }), y.a.createElement('time', null, e.data.summary)), y.a.createElement('div', {
                    className: 'section-btm'
                  }, y.a.createElement('h2', null, e.data.title), y.a.createElement('p', null, e.data.subtitle)))))
                }))), this.state.showChange && y.a.createElement('div', {
                  className: 'change-nextpage',
                  onClick: this.change.bind(this)
                }, '换一换', y.a.createElement('img', {
                  src: 'https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png'
                }))))
              }
            }
            ]), n
          }(g.Component),
          L = Object(C.connect) ((function (t) {
            return {
              videoMap: t.page.pageData.videoMap,
              noCallUp: t.page.noCallUp
            }
          })) (U);
          a(318);
          function X() {
            if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' === typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [
              ], (function () {
              }))),
              !0
            } catch (t) {
              return !1
            }
          }
          var B = a(37),
          F = function (t) {
            m() (n, t);
            var e,
            a = (e = n, function () {
              var t,
              a = v() (e);
              if (X()) {
                var n = v() (this).constructor;
                t = Reflect.construct(a, arguments, n)
              } else t = a.apply(this, arguments);
              return h() (this, t)
            });
            function n(t) {
              var e;
              return s() (this, n),
              (e = a.call(this, t)).state = {
                moduleKey: 'feed',
                pageSize: 9,
                currentPageNum: 0,
                pos: 0,
                showChange: !1,
                totalList: [
                ],
                showList: [
                ],
                isClient: !1,
                existIds: {
                }
              },
              e
            }
            return d() (n, [
              {
                key: 'componentWillMount',
                value: function () {
                  var t,
                  e = (this.props.comData || {
                  }).dataNode || [
                  ],
                  a = !1;
                  e.map((function (t, e) {
                    t.pos = e + 1
                  })),
                  e.length > this.state.pageSize ? (a = !0, t = this.getShowData(e))  : t = e,
                  this.setState({
                    showChange: a,
                    showList: t,
                    totalList: e
                  })
                }
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this;
                  this.setState({
                    isClient: !0
                  }),
                  this.checkElExist(),
                  document.addEventListener('scroll', (function () {
                    t.checkElExist()
                  }))
                }
              },
              {
                key: 'checkElExist',
                value: function () {
                  if (document.querySelector('#feed-lists')) {
                    var t = document.querySelector('#feed-lists').querySelectorAll('li.feed-item');
                    if (t.length > 0) for (var e = 0; e < t.length; e++) {
                      var a = t[e],
                      n = a.getAttribute('data-vid') || '',
                      i = 0 === n.indexOf('X'),
                      o = a.getBoundingClientRect();
                      o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds['id_'.concat(n)] && (this.state.existIds['id_'.concat(n)] = !0, Object(D.a) ({
                        id: n,
                        spmC: this.state.moduleKey,
                        spmD: (i ? 'vdo_' : 'show_') + n,
                        gmKey: 'EXP'
                      }))
                    }
                  }
                }
              },
              {
                key: 'getShowData',
                value: function (t, e, a) {
                  var n = [
                  ];
                  if (t = t || this.state.totalList || [
                  ], e = Number(e || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(t) && t.length > 0) {
                    for (var i = t.length, o = e * a, r = e, c = o; c < o + r; c++) {
                      if (c >= i) {
                        a = - 1;
                        break
                      }
                      var s = t[c];
                      n.push(s)
                    }
                    this.setState({
                      currentPageNum: ++a
                    })
                  }
                  return n
                }
              },
              {
                key: 'jump',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                  },
                  e = t.data.action.value;
                  if (e) {
                    var a = 0 === e.indexOf('X');
                    B && B.default({
                      id: e,
                      spmC: this.state.moduleKey,
                      source: 'feed',
                      spmD: (a ? 'vdo_' : 'show_') + e
                    })
                  }
                }
              },
              {
                key: 'change',
                value: function () {
                  var t = this.getShowData();
                  if (t.length > 0) {
                    this.setState({
                      showList: t
                    }),
                    this.checkElExist();
                    var e = this.itemWrap.getBoundingClientRect().top,
                    a = document.body.scrollTop;
                    document.body.scrollTop = a + e,
                    Object(D.a) ({
                      spmC: this.state.moduleKey,
                      spmD: 'change'
                    })
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  var t = this;
                  return this.props.noCallUp ? null : y.a.createElement('div', {
                    className: 'h5-detail-feed',
                    ref: function (e) {
                      t.itemWrap = e
                    }
                  }, y.a.createElement('h1', {
                    className: 'mod-title'
                  }, '为你推荐'), y.a.createElement('div', {
                    className: 'feed-list clipboard'
                  }, y.a.createElement('ul', {
                    id: 'feed-lists'
                  }, this.state.showList.map((function (e) {
                    return y.a.createElement(b.a, {
                      height: '2.61rem',
                      key: 'feed'.concat(e.pos)
                    }, y.a.createElement('li', {
                      key: 'feed'.concat(e.pos),
                      className: 'feed-item',
                      'data-pos': e.pos,
                      'data-vid': e.data && e.data.action && e.data.action.value,
                      onClick: t.jump.bind(t, e)
                    }, y.a.createElement('a', {
                      href: 'javascript:void(0);'
                    }, y.a.createElement('div', {
                      className: 'section-top'
                    }, y.a.createElement('img', {
                      src: t.state.isClient ? Object(S.useWebp) (e.data.img)  : e.data.img
                    }), y.a.createElement('h2', null, e.data.title, y.a.createElement('time', null, e.data.summary)), y.a.createElement('i', {
                      className: 'heat'
                    }, e.data.totalVv)), y.a.createElement('div', {
                      className: 'section-btm'
                    }))))
                  }))), this.state.showChange && y.a.createElement('div', {
                    className: 'change-nextpage',
                    onClick: this.change.bind(this)
                  }, '换一换', y.a.createElement('img', {
                    src: 'https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png'
                  }))))
                }
              }
              ]), n
            }(g.Component),
            H = Object(C.connect) ((function (t) {
              return {
                videoMap: t.page.pageData.videoMap,
                noCallUp: t.page.noCallUp
              }
            })) (F),
            q = a(19),
            z = a(21),
            V = a(160);
            a(333);
            function W() {
              if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' === typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [
                ], (function () {
                }))),
                !0
              } catch (t) {
                return !1
              }
            }
            var Y = a(37),
            J = function (t) {
              m() (n, t);
              var e,
              a = (e = n, function () {
                var t,
                a = v() (e);
                if (W()) {
                  var n = v() (this).constructor;
                  t = Reflect.construct(a, arguments, n)
                } else t = a.apply(this, arguments);
                return h() (this, t)
              });
              function n(t) {
                var e;
                return s() (this, n),
                (e = a.call(this, t)).state = {
                  moduleKey: 'h5_detail_info',
                  showName: t.videoMap.showName || t.videoMap.videoTitle,
                  introData: {
                  },
                  subscribeData: {
                  },
                  starList: [
                  ],
                  isDetail: !1,
                  isOpenCall: !1,
                  briefBtnText: '简介',
                  heatIcon: '',
                  upState: !1,
                  totalUp: t.videoMap.totalUp,
                  isSubscribed: !1
                },
                e
              }
              return d() (n, [
                {
                  key: 'componentWillMount',
                  value: function () {
                    var t = this,
                    e = (this.props.comData || {
                    }).dataNode || [
                    ],
                    a = {
                    },
                    n = {
                    },
                    i = [
                    ];
                    i.diretor = [
                    ],
                    i.actor = [
                    ],
                    e.map((function (e) {
                      if (10010 === e.type) {
                        if ((a = e.data || {
                        }).subTitleList = [
                        ], Array.isArray(a.subTitles) && (a.subTitles.map((function (e) {
                          var n = {
                          };
                          if ('PLAY_VV' === e.subtitleType) {
                            n.subtitle = e.subtitle || a.heat;
                            var i = '';
                            e.extra >= 7 ? i = 'https://gw.alicdn.com/tfs/TB1.hX5CNTpK1RjSZR0XXbEwXXa-42-42.png' : e.extra >= 4 ? i = 'https://gw.alicdn.com/tfs/TB13PR.CMHqK1RjSZJnXXbNLpXa-42-42.png' : e.extra >= 1 && (i = 'https://gw.alicdn.com/tfs/TB1JpF7CFzqK1RjSZSgXXcpAVXa-42-42.png'),
                            t.setState({
                              heatIcon: i
                            })
                          } else 'GENRE' === e.subtitleType ? n.subtitle = e.subtitle || a.showGenre : n.subtitle = e.subtitle || '';
                          n.subtitleType = e.subtitleType,
                          a.subTitleList.push(n)
                        })), a.scorePrefix && a.socreValue)) {
                          var o = {
                            subtitleType: 'SCORE'
                          };
                          o.subtitle = ''.concat(a.socreValue, '分'),
                          a.subTitleList.splice(1, 0, o)
                        }
                      } else 10012 === e.type ? n = e.data || {
                      }
                       : 10011 === e.type && ('导演' === e.data.subtitle ? i.diretor.push(e.data.title)  : i.actor.push(e.data.title), i.push(e.data))
                    })),
                    this.setState({
                      introData: a,
                      subscribeData: n,
                      starList: i
                    })
                  }
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.getSubscribe(),
                    this.setState({
                      upState: !!window.localStorage['wechatPraiseState_'.concat(this.props.videoMap.vId)]
                    }),
                    Object(D.a) ({
                      spmC: this.state.moduleKey,
                      spmD: 'total',
                      gmKey: 'EXP'
                    })
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this;
                    return y.a.createElement('div', {
                      className: 'h5-detail-info'
                    }, y.a.createElement('div', {
                      className: 'brief-info'
                    }, y.a.createElement('div', {
                      className: 'brief-title',
                      onClick: this.switchDetail.bind(this)
                    }, y.a.createElement('div', {
                      className: 'module-name'
                    }, this.state.introData.mark && this.state.introData.mark.data.text && y.a.createElement('span', {
                      className: 'icon-'.concat(this.state.introData.mark && this.state.introData.mark.data.color)
                    }, this.state.introData.mark.data.text), y.a.createElement('h1', null, this.state.showName)), y.a.createElement('a', {
                      href: 'javascript:void(0)',
                      className: 'showMore'
                    }, this.state.briefBtnText, y.a.createElement('img', {
                      className: ''.concat(this.state.isDetail && 'active', ' ').concat(this.state.isOpenCall && 'iscall'),
                      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTCsrKysrKy0tLSsrKywsLCsrK3Pa218AAAAGdFJOUwDzOy2l6AsspekAAABdSURBVCjPY2AYhoDZxQCNwcCaJgRhKKYFQIXU0hIVQDSTWFoSXBVEmWIaXBVQFqQMSsHMAClTTIOZCVOGogiiAEURRBmqIrAyVEVgZWiK0KyDKUNXxMBg4swwXAEAoNkVY7GaTioAAAAASUVORK5CYII='
                    }))), y.a.createElement('div', {
                      className: 'brief-score'
                    }, this.state.introData.subTitleList && this.state.introData.subTitleList.map((function (e, a) {
                      return e.subtitle && y.a.createElement('span', {
                        className: ''.concat('PLAY_VV' === e.subtitleType ? 'hotVv' : ''),
                        key: 'subtile'.concat(a)
                      }, 'PLAY_VV' === e.subtitleType ? t.state.heatIcon && y.a.createElement('img', {
                        src: t.state.heatIcon
                      }) || null : a > 0 ? y.a.createElement('span', {
                        className: 'divide'
                      }, '/')  : '', y.a.createElement('span', null, e.subtitle))
                    })))), this.state.isDetail ? y.a.createElement('div', {
                      className: 'brief-more'
                    }, this.state.subscribeData.ownerUid && y.a.createElement('div', {
                      className: 'subscribe'
                    }, y.a.createElement('a', {
                      href: '//i.youku.com/u/' + this.state.subscribeData.ownerUid,
                      className: 'author-container'
                    }, y.a.createElement('img', {
                      src: this.state.subscribeData.img
                    }), y.a.createElement('div', {
                      className: 'user-describe'
                    }, y.a.createElement('h3', {
                      className: 'title'
                    }, this.state.subscribeData.title), y.a.createElement('p', {
                      className: 'subtitle'
                    }, this.state.subscribeData.subtitle))), y.a.createElement('a', {
                      href: 'javascript:void(0);',
                      onClick: this.changeSubscribe.bind(this, this.state.isSubscribed),
                      className: 'subscribe-btn '.concat(this.state.isSubscribed && 'grey-btn')
                    }, this.state.isSubscribed ? '已订阅' : '订阅')), this.state.starList.length > 0 && y.a.createElement('div', {
                      className: 'celebrity-group'
                    }, this.state.starList.diretor.length > 0 && y.a.createElement('span', {
                      className: 'celebrity-type'
                    }, '导演：', this.state.starList.diretor.join(',')), this.state.starList.actor.length > 0 && y.a.createElement('span', {
                      className: 'celebrity-list'
                    }, '主演：', this.state.starList.actor.join(','))), y.a.createElement('p', {
                      className: 'brief-desc'
                    }, this.state.introData.desc), y.a.createElement('div', {
                      className: 'praise-wrap'
                    }, y.a.createElement('div', {
                      className: 'flex-box praise-conatiner',
                      onClick: this.addPraise.bind(this)
                    }, y.a.createElement('img', {
                      src: this.state.upState ? 'https://gw.alicdn.com/tfs/TB1fqkoGYrpK1RjSZTEXXcWAVXa-60-60.png' : 'https://gw.alicdn.com/tfs/TB14YslGY2pK1RjSZFsXXaNlXXa-60-60.png',
                      alt: '',
                      className: 'praise-img'
                    }), y.a.createElement('span', null, this.state.totalUp || 0, '人赞过')), y.a.createElement('div', {
                      className: 'flex-box report-container',
                      onClick: this.reportVideo.bind(this)
                    }, y.a.createElement('img', {
                      src: 'https://gw.alicdn.com/tfs/TB18EAjGYvpK1RjSZFqXXcXUVXa-60-60.png',
                      alt: ''
                    }), y.a.createElement('span', null, '内容举报'))))  : '', this.props.noCallUp ? '' : y.a.createElement('div', {
                      className: 'brief-btm'
                    }, y.a.createElement('div', {
                      className: 'item',
                      onClick: this.jumpComment.bind(this)
                    }, y.a.createElement('i', {
                      className: 'comment'
                    }), this.props.videoMap.totalComment > 0 ? y.a.createElement('span', null, this.props.videoMap.totalComment, '热评')  : y.a.createElement('span', null, '评论')), y.a.createElement('div', {
                      className: 'item',
                      onClick: this.toHD.bind(this)
                    }, y.a.createElement('i', {
                      className: 'toHD clipboard'
                    }), y.a.createElement('span', null, '极清')), y.a.createElement('div', {
                      className: 'item',
                      onClick: this.download.bind(this)
                    }, y.a.createElement('i', {
                      className: 'download clipboard'
                    }), y.a.createElement('span', null, '缓存')), y.a.createElement('div', {
                      className: 'item',
                      onClick: this.share.bind(this)
                    }, y.a.createElement('i', {
                      className: 'share'
                    }), y.a.createElement('span', null, '分享'))))
                  }
                },
                {
                  key: 'switchDetail',
                  value: function (t) {
                    this.state.isOpenCall ? Y && Y.default({
                      spmC: this.state.moduleKey,
                      source: 'mplaypage12',
                      spmD: 'mplaypage12'
                    }) :
                    (this.setState({
                      isDetail: !this.state.isDetail
                    }), this.state.isDetail ? Object(D.a) ({
                      spmC: this.state.moduleKey,
                      spmD: 'detailBtnClose'
                    })  : Object(D.a) ({
                      spmC: this.state.moduleKey,
                      spmD: 'detailBtnOpen'
                    }))
                  }
                },
                {
                  key: 'getSubscribe',
                  value: function () {
                    var t = r() (i.a.mark((function t() {
                      var e,
                      a,
                      n;
                      return i.a.wrap((function (t) {
                        for (; ; ) switch (t.prev = t.next) {
                          case 0:
                            if (e = window.__USERINFO__.oneId || '', a = this.state.subscribeData.ownerUid && Object(V.decode) (this.state.subscribeData.ownerUid)) {
                              t.next = 4;
                              break
                            }
                            return t.abrupt('return');
                          case 4:
                            return t.next = 6,
                            Object(q.f) ({
                              userId: e,
                              UGCuserId: a
                            });
                          case 6:
                            (n = t.sent).data && n.data.resultData && n.data.resultData[a] && this.setState({
                              isSubscribed: !0
                            });
                          case 8:
                          case 'end':
                            return t.stop()
                        }
                      }), t, this)
                    }))); return function () {
                      return t.apply(this, arguments)
                    }
                  }()
                },
                {
                  key: 'changeSubscribe',
                  value: function () {
                    var t = r() (i.a.mark((function t(e) {
                      var a;
                      return i.a.wrap((function (t) {
                        for (; ; ) switch (t.prev = t.next) {
                          case 0:
                            if (window.__USERINFO__ && window.__USERINFO__.oneId) {
                              t.next = 3;
                              break
                            }
                            return location.href = '//account.youku.com/?callback='.concat(encodeURIComponent(window.location.href)),
                            t.abrupt('return');
                          case 3:
                            return t.prev = 3,
                            t.next = 6,
                            Object(q.b) ({
                              target_id: this.state.subscribeData.ownerUid,
                              state: e
                            });
                          case 6:
                            t.sent.data.result && (a = !e),
                            this.setState({
                              isSubscribed: a
                            }),
                            t.next = 14;
                            break;
                          case 11:
                            t.prev = 11,
                            t.t0 = t.catch (3),
                            'object' === Object(S.getType) (t.t0) ? (t.t0 && t.t0.ret[0]).indexOf('-302::Relation Exists') > - 1 && this.setState({
                              isSubscribed: !this.state.isSubscribed
                            })  : Object(z.b) ({
                              category: 'tryCatch',
                              msg: 'h5-detail-info:changeSubscribe:'.concat(JSON.stringify(t.t0))
                            });
                          case 14:
                            e ? Object(D.a) ({
                              spmC: this.state.moduleKey,
                              spmD: 'cancelSubscribe'
                            })  : Object(D.a) ({
                              spmC: this.state.moduleKey,
                              spmD: 'subscribe'
                            });
                          case 15:
                          case 'end':
                            return t.stop()
                        }
                      }), t, this, [
                        [3,
                        11]
                      ])
                    }))); return function (e) {
                      return t.apply(this, arguments)
                    }
                  }()
                },
                {
                  key: 'reportVideo',
                  value: function () {
                    var t = this.props.videoMap.videoId;
                    location.href = 'http://h5.m.youku.com/app/moreplatfeedback.html?playId='.concat(t),
                    Object(D.a) ({
                      spmC: this.state.moduleKey,
                      spmD: 'reportText'
                    })
                  }
                },
                {
                  key: 'download',
                  value: function () {
                    Y && Y.default({
                      spmC: this.state.moduleKey,
                      source: 'download',
                      spmD: 'download'
                    })
                  }
                },
                {
                  key: 'toHD',
                  value: function () {
                    Y && Y.default({
                      spmC: this.state.moduleKey,
                      source: 'definition',
                      spmD: 'definition'
                    })
                  }
                },
                {
                  key: 'jumpComment',
                  value: function () {
                    try {
                      var t = document.querySelector('#YKComment').getBoundingClientRect().top;
                      document.body.scrollTop = t,
                      document.documentElement.scrollTop = t,
                      Object(D.a) ({
                        spmC: this.state.moduleKey,
                        spmD: 'commentBtn'
                      })
                    } catch (e) {
                      Object(z.b) ({
                        category: 'tryCatch',
                        msg: 'h5-detail-info:jumpComment:'.concat(JSON.stringify(e))
                      })
                    }
                  }
                },
                {
                  key: 'addPraise',
                  value: function () {
                    var t = r() (i.a.mark((function t() {
                      var e,
                      a;
                      return i.a.wrap((function (t) {
                        for (; ; ) switch (t.prev = t.next) {
                          case 0:
                            if (!this.state.upState) {
                              t.next = 2;
                              break
                            }
                            return t.abrupt('return');
                          case 2:
                            return e = this.props.videoMap.vId,
                            t.prev = 3,
                            t.next = 6,
                            Object(q.a) (e);
                          case 6:
                            t.next = 11;
                            break;
                          case 8:
                            t.prev = 8,
                            t.t0 = t.catch (3),
                            Object(z.b) ({
                              category: 'tryCatch',
                              msg: 'h5-detail-info:addPraise:'.concat(JSON.stringify(t.t0))
                            });
                          case 11:
                            window.localStorage['wechatPraiseState_'.concat(e)] = 1,
                            (a = String(this.state.totalUp)).indexOf('万') < 0 && a.indexOf('亿') < 0 && (a = parseInt(a) + 1),
                            this.setState({
                              upState: !0,
                              totalUp: a
                            }),
                            Object(D.a) ({
                              spmC: this.state.moduleKey,
                              spmD: 'addPraise'
                            });
                          case 16:
                          case 'end':
                            return t.stop()
                        }
                      }), t, this, [
                        [3,
                        8]
                      ])
                    }))); return function () {
                      return t.apply(this, arguments)
                    }
                  }()
                },
                {
                  key: 'share',
                  value: function () {
                    /micromessenger/i.test(navigator.userAgent) || /weibo/i.test(navigator.userAgent) || /dingtalk/i.test(navigator.userAgent) ? this.props.dispatch({
                      type: 'ykToast/show',
                      payload: {
                        content: '点击此处分享',
                        showMask: !0,
                        rootClass: 'share-wrap'
                      }
                    })  : this.props.dispatch({
                      type: 'ykToast/showDelay',
                      payload: {
                        content: '可以使用浏览器分享<br/>按钮分享给好友哦'
                      }
                    })
                  }
                }
                ]),
                n
              }(g.Component),
              G = Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap,
                  noCallUp: t.page.noCallUp
                }
              })) (J),
              Q = (a(334), Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap,
                  noCallUp: t.page.noCallUp,
                  pathname: t.page.pathname
                }
              })) ((function (t) {
                var e,
                a = t.comData,
                n = t.videoMap.videoId,
                i = t.pathname.indexOf('alipay_video') > - 1 ? 'alipay_video' : 'video',
                o = function (e) {
                  e && (t.noCallUp && (i = 'alipay_video'), location.href = '/'.concat(i, '/id_').concat(e, '.html').concat(location.search), Object(D.a) ({
                    spmC: 'anthology',
                    spmD: 'click_' + e,
                    id: e
                  }))
                };
                a.dataNode.length && a.dataNode.map((function (t, a) {
                  t.data.action && t.data.action.value === n && (e = a)
                }));
                var r = document.querySelector('html').style.fontSize.replace('px', ''),
                c = 0 === a.positionStyle ? 0.72 : 1.35,
                s = e * c * r;
                return document.querySelector('.anthologyStageContainer').scrollLeft = s,
                Object(D.a) ({
                  spmC: 'anthology',
                  spmD: 'show',
                  gmKey: 'EXP'
                }),
                y.a.createElement('div', {
                  className: 'anthologyContainer'
                }, y.a.createElement('h1', {
                  className: 'mod-title'
                }, '选集'), y.a.createElement('div', {
                  className: 'anthologyStageContainer '.concat(0 === a.positionStyle && 'style0')
                }, a.dataNode.length && a.dataNode.map((function (t, n) {
                  return 0 === a.positionStyle ? y.a.createElement('div', {
                    className: 'anthologyStageStyle0'.concat(n === e ? ' stageActive' : '').concat(t.data && t.data.mark && t.data.mark && t.data.mark.data && '超前点播' === t.data.mark.data.text ? ' markBgImg' : ''),
                    key: n,
                    onClick: function () {
                      o(t.data.action && t.data.action.value)
                    }
                  }, t.data.stage, t.data.mark && t.data.mark.data && '超前点播' !== t.data.mark.data.text && y.a.createElement('div', {
                    className: 'mark',
                    style: {
                      backgroundColor: Object(S.getColor) (t.data.mark.data.color)
                    }
                  }, y.a.createElement('span', null, t.data.mark.data.text)))  : y.a.createElement('div', {
                    className: 'anthologyStageStyle1'.concat(n === e ? ' stageActive' : '').concat(t.data && t.data.mark && t.data.mark && t.data.mark.data && '超前点播' === t.data.mark.data.text ? ' markBgImg' : ''),
                    key: t.data.img,
                    onClick: function () {
                      o(t.data.action && t.data.action.value)
                    }
                  }, y.a.createElement('div', {
                    className: 'stageStyle1Container'
                  }, y.a.createElement('div', {
                    className: 'stageStyle1ImgContainer'
                  }, y.a.createElement('img', {
                    src: t.data.img,
                    alt: ''
                  }), y.a.createElement('div', {
                    className: 'summary'
                  }, t.data.summary), t.data.mark && t.data.mark.data && '超前点播' !== t.data.mark.data.text && y.a.createElement('div', {
                    className: 'mark',
                    style: {
                      backgroundColor: Object(S.getColor) (t.data.mark.data.color)
                    }
                  }, y.a.createElement('span', null, t.data.mark.data.text))), y.a.createElement('div', {
                    className: 'title'.concat(n === e ? ' stageActive' : '')
                  }, t.data.title && (t.data.title.length > 15 ? t.data.title.slice(0, 15) + '...' : t.data.title)), y.a.createElement('div', {
                    className: 'subTitle'.concat(n === e ? ' stageActive' : '')
                  }, t.data.subtitle)))
                }))))
              }))),
              Z = (a(335), Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap,
                  noCallUp: t.page.noCallUp,
                  pathname: t.page.pathname
                }
              })) ((function (t) {
                var e,
                a = t.comData,
                n = {
                },
                i = a.dataNode.length > 0 && a.dataNode.filter((function (t) {
                  if (10039 === t.type && Object(S.isEmptyObject) (n)) n = t.data;
                   else if (10020 === t.type) return !0
                })),
                o = t.videoMap.videoId,
                r = t.pathname.indexOf('alipay_video') > - 1 ? 'alipay_video' : 'video',
                c = function (e) {
                  e && (t.noCallUp && (r = 'alipay_video'), location.href = '/'.concat(r, '/id_').concat(e, '.html').concat(location.search), Object(D.a) ({
                    spmC: 'anthology',
                    spmD: 'click_' + e,
                    id: e
                  }))
                };
                i.length && i.map((function (t, a) {
                  t.data.action && t.data.action.value === o && (e = a)
                }));
                var s = document.querySelector('html').style.fontSize.replace('px', ''),
                l = 0 === a.positionStyle ? 0.72 : 1.35,
                d = e * l * s;
                return document.querySelector('.anthologyStageContainer').scrollLeft = d,
                Object(D.a) ({
                  spmC: 'anthology',
                  spmD: 'show',
                  gmKey: 'EXP'
                }),
                y.a.createElement('div', {
                  className: 'anthologyContainer'
                }, !Object(S.isEmptyObject) (n) && y.a.createElement('div', {
                  className: 'uplader'
                }, y.a.createElement('img', {
                  src: n.img
                }), y.a.createElement('div', {
                  className: 'user-detail'
                }, y.a.createElement('div', {
                  className: 'name'
                }, n.title), y.a.createElement('p', null, n.subtitle)), y.a.createElement('span', {
                  className: 'subscribe'
                }, n.hasSubscribed ? '已关注' : '')), y.a.createElement('h1', {
                  className: 'mod-title'
                }, a.title || '选集'), y.a.createElement('div', {
                  className: 'anthologyStageContainer '.concat(0 === a.positionStyle && 'style0')
                }, i.length && i.map((function (t, n) {
                  return 0 === a.positionStyle ? y.a.createElement('div', {
                    className: 'anthologyStageStyle0'.concat(n === e ? ' stageActive' : '').concat(t.data && t.data.mark && t.data.mark && t.data.mark.data && '超前点播' === t.data.mark.data.text ? ' markBgImg' : ''),
                    key: n,
                    onClick: function () {
                      c(t.data.action && t.data.action.value)
                    }
                  }, t.data.stage, t.data.mark && t.data.mark.data && '超前点播' !== t.data.mark.data.text && y.a.createElement('div', {
                    className: 'mark',
                    style: {
                      backgroundColor: Object(S.getColor) (t.data.mark.data.color)
                    }
                  }, y.a.createElement('span', null, t.data.mark.data.text)))  : y.a.createElement('div', {
                    className: 'anthologyStageStyle1'.concat(n === e ? ' stageActive' : '').concat(t.data && t.data.mark && t.data.mark && t.data.mark.data && '超前点播' === t.data.mark.data.text ? ' markBgImg' : ''),
                    key: t.data.img,
                    onClick: function () {
                      c(t.data.action && t.data.action.value)
                    }
                  }, y.a.createElement('div', {
                    className: 'stageStyle1Container'
                  }, y.a.createElement('div', {
                    className: 'stageStyle1ImgContainer'
                  }, y.a.createElement('img', {
                    src: t.data.img,
                    alt: ''
                  }), y.a.createElement('div', {
                    className: 'summary'
                  }, t.data.summary), t.data.mark && t.data.mark.data && '超前点播' !== t.data.mark.data.text && y.a.createElement('div', {
                    className: 'mark',
                    style: {
                      backgroundColor: Object(S.getColor) (t.data.mark.data.color)
                    }
                  }, y.a.createElement('span', null, t.data.mark.data.text))), y.a.createElement('div', {
                    className: 'title'.concat(n === e ? ' stageActive' : '')
                  }, t.data.title && (t.data.title.length > 15 ? t.data.title.slice(0, 15) + '...' : t.data.title)), y.a.createElement('div', {
                    className: 'subTitle'.concat(n === e ? ' stageActive' : '')
                  }, t.data.subtitle)))
                }))))
              }))),
              $ = a(15),
              tt = a.n($),
              et = (a(341), Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap,
                  noCallUp: t.page.noCallUp,
                  pathname: t.page.pathname
                }
              })) ((function (t) {
                var e = Object(g.useState) ( - 1),
                a = tt() (e, 2),
                n = a[0],
                i = a[1],
                o = t.comData,
                r = t.videoMap.videoId,
                c = t.pathname.indexOf('alipay_video') > - 1 ? 'alipay_video' : 'video';
                return Object(g.useEffect) ((function () {
                  var t = - 1,
                  e = Object(S.getParam) ('lang'),
                  a = !1;
                  o.dataNode.length && o.dataNode.map((function (n, i) {
                    a || n.data.action && n.data.action.value === r && (e ? n.data.langCode === e ? (t = i, a = !0)  : t = i : (t = i, a = !0))
                  })),
                  i( - 1 === t ? 0 : t);
                  var n = document.querySelector('html').style.fontSize.replace('px', ''),
                  c = 0 === o.positionStyle ? 0.72 : 1.35,
                  s = t * c * n;
                  document.querySelector('.seriesStageContainer').scrollLeft = s,
                  Object(D.a) ({
                    spmC: 'series',
                    spmD: 'show',
                    gmKey: 'EXP'
                  })
                }), [
                  0
                ]),
                y.a.createElement('div', {
                  className: 'series'
                }, y.a.createElement('h1', {
                  className: 'mod-title'
                }, '系列电影'), y.a.createElement('div', {
                  className: 'seriesStageContainer'
                }, o.dataNode.length && o.dataNode.map((function (e, a) {
                  return y.a.createElement('div', {
                    className: 'seriesStageStyle1 '.concat(a === n ? 'stageActive' : ''),
                    key: ''.concat(e.data.action && e.data.action.value).concat(e.data.title),
                    onClick: function () {
                      !function (e, a) {
                        var n = location.search;
                        if (a) if (n) {
                          n = n.substr(1);
                          var i = Object(S.queryStringToObj) (n);
                          i.lang = a,
                          n = '?'.concat(Object(S.objToQueryString) (i))
                        } else n = '?lang='.concat(a);
                        t.noCallUp && (c = 'alipay_video'),
                        location.href = '/'.concat(c, '/id_').concat(e, '.html').concat(n),
                        Object(D.a) ({
                          spmC: 'series',
                          spmD: 'click_' + e,
                          id: e
                        })
                      }(e.data.action && e.data.action.value, e.data.langCode)
                    }
                  }, y.a.createElement('div', {
                    className: 'stageStyle1Container'
                  }, y.a.createElement('div', {
                    className: 'stageStyle1ImgContainer'
                  }, y.a.createElement('img', {
                    src: e.data.img,
                    alt: ''
                  }), y.a.createElement('div', {
                    className: 'summary'
                  }, e.data.summary), e.data.mark && y.a.createElement('div', {
                    className: 'style1Mark',
                    style: {
                      backgroundColor: Object(S.getColor) (e.data.mark.data.color)
                    }
                  }, e.data.mark.data.text)), y.a.createElement('div', {
                    className: 'title '.concat(a === n ? 'stageActive' : '')
                  }, e.data.title && (e.data.title.length > 15 ? e.data.title.slice(0, 15) + '...' : e.data.title)), y.a.createElement('div', {
                    className: 'subTitle '.concat(a === n ? 'stageActive' : '')
                  }, e.data.subtitle)))
                }))))
              }))),
              at = (a(342), Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap
                }
              })) ((function (t) {
                var e = Object(g.useState) (!1),
                a = tt() (e, 2),
                n = a[0],
                i = a[1],
                o = Object(g.useState) ('h5-detail-corner'),
                r = tt() (o, 1) [0],
                c = {
                },
                s = t.comData && t.comData.dataNode;
                Array.isArray(s) && (c = s[0] && s[0].data || {
                });
                var l = c.img || '',
                d = c.action && c.action.value || '',
                u = {
                };
                return '' !== c.widgetWidth && (u.width = Number(c.widgetWidth) / 100 + 'rem'),
                '' !== c.widgetHeight && (u.height = Number(c.widgetHeight) / 100 + 'rem'),
                '' !== c.widgetBottom && (u.bottom = Number(c.widgetBottom) / 100 + 'rem'),
                '' !== c.widgetRight && (u.right = Number(c.widgetRight) / 100 + 'rem'),
                Object(g.useEffect) ((function () {
                  l && d && i(!0),
                  Object(D.a) ({
                    spmC: r,
                    spmD: 'show',
                    gmKey: 'EXP'
                  })
                }), [
                  0
                ]),
                n && y.a.createElement('div', {
                  className: 'Corner-container',
                  style: u
                }, y.a.createElement('img', {
                  src: l,
                  alt: '',
                  className: 'Corner',
                  onClick: function () {
                    Object(D.a) ({
                      spmC: r,
                      spmD: 'click'
                    }),
                    location.href = d
                  }
                }), y.a.createElement('img', {
                  onClick: function () {
                    Object(D.a) ({
                      spmC: r,
                      spmD: 'close'
                    }),
                    i(!1)
                  },
                  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABZpJREFUaAXdmz9vHEUYxpMAlhGOY+xIToMtI8sQDkVyEQq7chGQMD6Jwi1KQU2BhOATICEkSoQQ38ACpBOmSOPKBpEiKOIKTlESG4oY6SwnGBEi/j2/tWezu97d25md27vzKz3ePzfzvvO7mZuZnR2fPtU9G5LrWWlampQuSKPS8JF0OPXwSA90vCftStvSLemR5N1Oe/YI0CvSvDQjPSG52D/KdEe6If0g8YV4MV/AcyrNq1JNOuOlZI+d/KvTpnRNaj2+7XZWFvgFha1LNN0qjKbekH52DeYKfE4BV6XLroFL5ruu/GvSfVs/LsAvK8jb0tO2wTyn/1P+vpB+svFr26lckfOr0lM2QbqUljLQQf4l3S4aoygwzt+SXpNcWkXR8timoywvSeclOjY6uFwrAnxWHt6RLuV66u2Hzyn8i9JNKXf87gRMzQL7vNTv9qwKyGjBuJ1Z052Aacb9XLMqXsyARj/G7kYu8oCvKB2/2UEzmndmR5YFzNBzVeqnDkrFKWwXlfKu9FsyR9o0kEkF4+ygwsJI2WGAJWZpwMygej2piBXS8QIGWGKWBGZu3KvpYqxgni5ggSm0JHA9/MTiZGRk5MzKysr58fHxJy2yFUqKT3wTo1CG44liTNEC8og3ezx9/h0K0mw235yamppot9u/1+v1b7e2tqwn9WlRFhYWzjUajdcnJibO7uzstGu12tcHBweZY2yaD92DCbbg0TL6rfE8a21LS0vjwJKRgq2vr79BQa0dJTLgA1/45CNiECuRrOhlyGaAR5WTh3dr29zc3KdmTcaxsbFnykIbWHwZv8Qglrm2PMIGY7g6wVOHged+Ydvb2/ubZry/v/+HyVQGOg0W38QglolheYQNxhBy3tJBLDm/2eXl5W/KQmfB4ttDvxAwQj4kzcQIHC7KQncZFiIYhwCmF8uaYuqj4uYKXQEsEDDOAsy6sTezha4I1vBNA8wiuVcrCl0xLIyTTLI/kEr/hvGWtDwg0jJ8RYceOj1PHVSyKOb6DsAfSsHEwdz1ecyCJkbFsIRs06R519M1y2rePYCFcbjrwERJg+Y+VkEzPgx0+DcAjt448efUMK8su2ppv2MTsMw01PiwOD7sOnAaLM247DTUAjKaNAD29u416pnzLFiGHh9z72S8AtcPqGHevHu3PFg6sbSOrILmfQ/gXd+0nWBNvB5A7wK8bQrg41gU1sSqGHobYN6qs6eitNnCmoAVQcN4C2DetrGBpJS5wpqgFUDD+Ahg7Mbhwe1vWVgTtcvQASMPDxgLXB9J5gvgXiFj3bjVaq2a1UUylZ0upn2BLOLNzc2tOa5rsbT7vhQMS5SRsbjJia0tLi6O+YQlflpNE4NYtuU7Sg9bMN+I1ug1F2cbGxt7LJKTl1rw9TxroM0SMDGI5VJG5QnZTJM2ft7TidPbBxbJWTd2bHIm/rEjPxlqFliHtw74YxT62DhOAvPi6V3z4Qk5fiKOcCNbtEnDxwfXOTkhBksIC1MSmHtrEpu+Bt1ggCVmaevR7I/4VeLVRLLJxzL38cV/Kttn0i/JMqYBk4a9EYCz6WsQ7UsV+vu0gmcBk/a2xA43dsUMkn2nwn6VVeA8YPIwYLPDjb1Pg2BU0udS5kvzTsBkvCkxNvc7NLCfSrkdbidg5Q+eptjOB3C/Nm+aMTWbC6vPC781pKbZzkdHdlHql96b3pgOit9sZjPWZ6EVqeEwsU5oNnelSxIbT3tp1CZDT2pvnFUw15pi08qqdDnLcZfvM4NiUnHfNo4rsInD3LsuWT9wGAeWRx4EGlJsumjjoyywiTWnE7YG1aS06apJ53Lkt8nwyCNey8VBNI8vYONzVCdMSeelGcm2j1CWwFhwYw2KZRlGiODhXcfS5hs4WiA2y9DUp6VJ6YLEFzJ8JB2q/1e8/wHw9LaeEeqiHgAAAABJRU5ErkJggg==',
                  alt: '',
                  className: 'close'
                }))
              }))),
              nt = (a(343), Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap
                }
              })) ((function (t) {
                var e = Object(g.useState) (''),
                a = tt() (e, 2),
                n = a[0],
                o = a[1],
                c = Object(g.useState) ('h5-detail-wechatqrcode'),
                s = tt() (c, 1) [0],
                l = function () {
                  var e = r() (i.a.mark((function e() {
                    var a;
                    return i.a.wrap((function (e) {
                      for (; ; ) switch (e.prev = e.next) {
                        case 0:
                          /micromessenger/i.test(navigator.userAgent) && (100, a = t.videoMap && t.videoMap.videoId, Object(q.h) ({
                            vid: a,
                            sendRandom: 100
                          }).then((function (t) {
                            o(t.data.data)
                          })));
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                    }), e)
                  }))); return function () {
                    return e.apply(this, arguments)
                  }
                }();
                return Object(g.useEffect) ((function () {
                  Object(D.a) ({
                    spmC: s,
                    spmD: 'show',
                    gmKey: 'EXP'
                  }),
                  l()
                }), [
                  0
                ]),
                n && y.a.createElement('div', {
                  className: 'weChatQrcode-container'
                }, y.a.createElement('img', {
                  src: 'data:image/png;base64,' + n,
                  alt: '',
                  className: 'weChatQrcode',
                  onClick: function () {
                    Object(D.a) ({
                      spmC: s,
                      spmD: 'click'
                    })
                  }
                }))
              }))); a(344); function it() {
                if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' === typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [
                  ], (function () {
                  }))),
                  !0
                } catch (t) {
                  return !1
                }
              }
              var ot = a(142), rt = function (t) {
                m() (n, t);
                var e,
                a = (e = n, function () {
                  var t,
                  a = v() (e);
                  if (it()) {
                    var n = v() (this).constructor;
                    t = Reflect.construct(a, arguments, n)
                  } else t = a.apply(this, arguments);
                  return h() (this, t)
                });
                function n(t) {
                  var e;
                  return s() (this, n),
                  (e = a.call(this, t)).state = {
                    moduleKey: 'h5_adbar',
                    isClient: !1
                  },
                  e
                }
                return d() (n, [
                  {
                    key: 'componentWillMount',
                    value: function () {
                    }
                  },
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var t = this;
                      this.setState({
                        isClient: !0
                      }, (function () {
                        t.createJs(),
                        Object(D.a) ({
                          spmC: t.state.moduleKey,
                          spmD: 'show',
                          gmKey: 'EXP'
                        })
                      }))
                    }
                  },
                  {
                    key: 'createJs',
                    value: function () {
                      var t = document.createElement('script');
                      t.src = '//g.alicdn.com/mm/yksdk/0.1.31/pagesdk.js',
                      document.body.appendChild(t),
                      t.onload = function () {
                        window.adPageSDK && new (0, window.adPageSDK) ({
                          requestURL: '//sealine.youku.com/yk/vhtml',
                          requestData: {
                            bt: 'phone',
                            os: ot.os.isIOS ? 'ios' : 'android',
                            v: window.__INITIAL_DATA__.videoMap.vId
                          }
                        }).check()
                      }
                    }
                  },
                  {
                    key: 'sendH5AdClickLog',
                    value: function () {
                      Object(D.a) ({
                        spmC: this.state.moduleKey,
                        spmD: 'click'
                      })
                    }
                  },
                  {
                    key: 'render',
                    value: function () {
                      return y.a.createElement('div', {
                        className: 'h5-adContainer',
                        'data-adpid': '1425020640',
                        onClick: this.sendH5AdClickLog
                      })
                    }
                  }
                ]),
                n
              }(g.Component), ct = Object(C.connect) ((function (t) {
                return {
                  videoMap: t.page.pageData.videoMap
                }
              })) (rt); function st() {
                if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' === typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [
                  ], (function () {
                  }))),
                  !0
                } catch (t) {
                  return !1
                }
              }
              var lt = function (t) {
                m() (n, t);
                var e,
                a = (e = n, function () {
                  var t,
                  a = v() (e);
                  if (st()) {
                    var n = v() (this).constructor;
                    t = Reflect.construct(a, arguments, n)
                  } else t = a.apply(this, arguments);
                  return h() (this, t)
                });
                function n() {
                  var t;
                  return s() (this, n),
                  (t = a.call(this)).state = {
                    component: {
                    },
                    match: {
                      'h5-detail-guide': j,
                      'h5-detail-ad': T,
                      'h5-detail-comment': K,
                      'h5-detail-recommend': L,
                      'h5-detail-info': G,
                      'h5-detail-anthology': Q,
                      'h5-detail-feed': H,
                      'h5-detail-series': et,
                      'h5-detail-corner': at,
                      'h5-detail-wechat': nt,
                      'h5-adbar': ct,
                      'h5-detail-degraded': Z
                    }
                  },
                  t
                }
                return d() (n, [
                  {
                    key: 'componentWillMount',
                    value: function () {
                      var t = this.organizeData(this.props.drawerData);
                      Object(S.isEmptyObject) (t) || this.setState({
                        component: t
                      })
                    }
                  },
                  {
                    key: 'inBlackList',
                    value: function (t) {
                      for (var e = !1, a = 0; a < t.blackListRefer.length; a++) {
                        var n = t.blackListRefer[a];
                        if (this.props.refer === n) {
                          e = !0;
                          break
                        }
                      }
                      for (var i = 0; i < t.blackUA.length; i++) {
                        var o = t.blackUA[i];
                        if (this.props.userAgent.indexOf(o) > - 1) {
                          e = !0;
                          break
                        }
                      }
                      return e
                    }
                  },
                  {
                    key: 'organizeData',
                    value: function (t) {
                      var e = t.type,
                      a = this.props.platoConfig && this.props.platoConfig.relations || {
                      };
                      if (e in a) {
                        var n = a[e];
                        if (Array.isArray(n.blackListRefer) && n.blackListRefer.length > 0 || Array.isArray(n.blackUA) && n.blackUA.length > 0) if (!0 === this.inBlackList(n)) return {
                        };
                        return t
                      }
                      return {
                      }
                    }
                  },
                  {
                    key: 'render',
                    value: function () {
                      var t = this.state.component.componentId,
                      e = '';
                      return t in this.state.match && (e = this.state.match[t]),
                      e ? y.a.createElement('div', {
                        'data-spm': this.props.dataSpm
                      }, y.a.createElement(e, {
                        comData: this.state.component,
                        lazyload: this.props.lazyload,
                        title: this.props.drawerData.componentName || ''
                      }))  : null
                    }
                  }
                ]),
                n
              }(g.Component), dt = Object(C.connect) ((function (t) {
                return {
                  platoConfig: t.page.platoConfig,
                  userAgent: t.page.userAgent,
                  refer: t.page.refer
                }
              })) (lt), ut = a(87), mt = (a(347), (new Date).getFullYear()), pt = function (t) {
                return y.a.createElement('div', {
                  className: 'yk-footer'
                }, y.a.createElement('div', {
                  className: 'copyright'
                }, y.a.createElement('p', null, 'Copyright©', mt, ' 优酷 youku.com 版权所有'), y.a.createElement('a', {
                  target: '_blank',
                  href: '//c.youku.com/piracy'
                }, '反盗版盗链声明'), y.a.createElement('a', {
                  href: 'http://beian.miit.gov.cn/state/outPortal/loginPortal.action',
                  target: '_blank'
                }, '京ICP证060288号'), y.a.createElement('a', {
                  href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000017',
                  target: '_blank'
                }, y.a.createElement('i', {
                  className: 'ico-icp',
                  title: '经营性网站备案'
                }))))
              }, ht = (a(348), a(27)); function ft() {
                if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' === typeof Proxy) return !0;
                try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [
                  ], (function () {
                  }))),
                  !0
                } catch (t) {
                  return !1
                }
              }
              var vt = a(37), gt = function (t) {
                m() (n, t);
                var e,
                a = (e = n, function () {
                  var t,
                  a = v() (e);
                  if (ft()) {
                    var n = v() (this).constructor;
                    t = Reflect.construct(a, arguments, n)
                  } else t = a.apply(this, arguments);
                  return h() (this, t)
                });
                function n(t) {
                  var e;
                  return s() (this, n),
                  (e = a.call(this, t)).state = {
                    moduleKey: 'player',
                    lang: '',
                    playerWidth: '',
                    playerHeight: '',
                    istop: !1,
                    player: null,
                    verticalStyle: t.videoMap.verticalStyle,
                    comData: t.comData || {
                    },
                    paid: t.videoMap.paid,
                    trialTime: 0,
                    playerMaskFlag: !1,
                    maskCallupText: ''
                  },
                  e
                }
                return d() (n, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var t = this,
                      e = Object(S.getParam) ('lang');
                      e && (this.lang = e),
                      this.changeSize(),
                      this.initPlayer(),
                      Object(D.a) ({
                        spmC: this.state.moduleKey,
                        spmD: 'show',
                        gmKey: 'EXP'
                      }),
                      document.addEventListener('scroll', (function () {
                        t.stayPlayer()
                      })),
                      window.onresize = function () {
                        t.changeSize()
                      }
                    }
                  },
                  {
                    key: 'render',
                    value: function () {
                      var t = this;
                      return y.a.createElement('div', {
                        className: 'h5-detail-player'
                      }, y.a.createElement('div', {
                        className: 'player-box '.concat(this.state.istop ? 'staytop' : ''),
                        id: 'playerBox',
                        style: {
                          width: ''.concat(this.state.playerWidth, 'px'),
                          height: ''.concat(this.state.playerHeight, 'px')
                        }
                      }, y.a.createElement('div', {
                        id: 'player',
                        className: 'player',
                        ref: function (e) {
                          t.playerDom = e
                        }
                      })), y.a.createElement('div', {
                        className: 'playerhold',
                        style: {
                          width: ''.concat(this.state.playerWidth, 'px'),
                          height: ''.concat(this.state.playerHeight, 'px')
                        },
                        ref: function (e) {
                          t.playerholder = e
                        }
                      }), this.state.playerMaskFlag ? y.a.createElement('div', {
                        className: 'playerMode',
                        style: {
                          width: ''.concat(this.state.playerWidth, 'px'),
                          height: ''.concat(this.state.playerHeight, 'px')
                        }
                      }, y.a.createElement('div', {
                        className: 'myButton tryFiveMin',
                        onClick: this.playFiveMinute.bind(this)
                      }, y.a.createElement('div', {
                        className: 'triangle'
                      }), y.a.createElement('span', null, this.props.videoMap.toFind ? '点击试看' : '试看'.concat(this.state.trialTime > 0 && Math.floor(this.state.trialTime / 60) + '分钟' || ''))), y.a.createElement('div', {
                        className: 'myButton jumpToApp',
                        onClick: this.jumpApp.bind(this)
                      }, y.a.createElement('span', null, this.state.maskCallupText)))  : null)
                    }
                  },
                  {
                    key: 'changeSize',
                    value: function () {
                      var t = document.documentElement.clientWidth,
                      e = t,
                      a = '';
                      a = (this.state.verticalStyle, 9 * t / 16),
                      this.setState({
                        playerWidth: e,
                        playerHeight: a
                      })
                    }
                  },
                  {
                    key: 'initPlayer',
                    value: function () {
                      var t = this,
                      e = Object(S.getParam) ('ctid');
                      this.playerDom.innerHTML = '';
                      var a = ht.browser.isLiebao ? this.getReferrerCid()  : '',
                      n = {
                        id: 'youku-player',
                        vid: this.state.comData.videoId,
                        prefer: 'h5',
                        expand: 0,
                        canWide: 0,
                        paid: '',
                        client_id: e || a || 'youkumobileplaypage',
                        wintype: 'interior',
                        events: {
                          onPlayStart: this.onPlayH5.bind(this),
                          onPlayEnd: this.onPlayEnd.bind(this),
                          onMediaSrcOK: this.onMediaSrcOK.bind(this),
                          onReady: this.onReadyH5.bind(this)
                        },
                        playlistconfig: {
                        },
                        vvlogconfig: {
                          rurl: window.document.referrer
                        },
                        adconfig: {
                        },
                        control: {
                        }
                      };
                      window.vData.politicsSensitive && (n.client_id = '1c9aa3003b83b3b2'),
                      this.state.verticalStyle;
                      var i = window.navigator.userAgent.toLowerCase();
                      /micromessenger/i.test(i) && (n.weixin = !0),
                      window.xparamsString && window.xparamsString.firsttime && (n.firsttime = window.xparamsString.firsttime),
                      window.xparamsString && void 0 !== window.xparamsString.adext && '' !== window.xparamsString.adext && (n.adconfig = {
                        adext: window.xparamsString.adext
                      }),
                      window.xparamsString && 1 === window.xparamsString.diy && (n.ftime = window.xparamsString.ftime, n.etime = window.xparamsString.etime, n.clientid = window.xparamsString.clientid),
                      this.lang && (n.control.lang = this.lang);
                      var o = {
                        dash: {
                          videoInterest: !0
                        },
                        event: {
                          startPlay: function () {
                            t.onPlayStartH5()
                          }
                        },
                        hidetitle: !1,
                        posterType: 'episode'
                      };
                      if (window.vData && window.vData.bizChannel && window.vData.bizChannel.playerConfig) {
                        var r = window.vData.bizChannel.playerConfig;
                        r.params && Object.assign(n, r.params || {
                        }),
                        r.uiConfig && Object.assign(o, r.uiConfig || {
                        })
                      }
                      /*
                      debugger;
                      var c = new window.YKPlayer.Player('player', n, o);
                      this.listenNet(),
                      this.setState({
                        player: c
                      })
                      */
                     var ykvideo = document.getElementById("player");
                     var r = {
                         Fid: "0",
                         Ob: "0",
                         Pt: "0",
                         abtest: "b",
                         autoplay: true,
                         ccode: "0502",
                         ckey: "",
                         currentShowId: "329415",
                         enableFullscreenScroll: true,
                         events: {
                             onReady: function () {
                             }
                         },
                         isInnerPlay: false,
                         isSupportDRM: true,
                         playBackRateInfo: {
                             show: true,
                             rateList: [{
                                 rate: 2,
                                 text: "2.0x"
                             }, {
                                 rate: 1.5
                             }, {
                                 rate: 1.25
                             }, {
                                 rate: 1,
                                 text: "1.0x",
                                 isDefault: !0
                             }, {
                                 rate: .5
                             }]
                         },  
                         playmode: "3",
                         quality: "1080p",
                         simpleMode: false,
                         upsServiceConfig:{
                             requesttype: "mtop"
                         },
                         vid: n.vid,
                         vvlogconfig:{
                             embedid: "AjExNDMzMTEyMDgCdi55b3VrdS5jb20CL3Zfc2hvdy9pZF9YTkRVM016STBORGd6TWc9PS5odG1s",
                             frame: undefined,
                             plchid: ""
                         }
                     }
                     window.videoPlayer = new YoukuPlayer(ykvideo, r);
                     ykvideo.addEventListener("touchstart",function(event){
                        this.startX = event.touches[0].clientX;
                     });
                     ykvideo.addEventListener("touchend",function(event){
                        var video = window.videoPlayer;
                        var ps = video.getPlayerState();
                        if(ps.state=="playing"){ 
                          var sX = this.startX;
                          var distance = event.changedTouches[0].clientX - sX;
                          if(Math.abs(distance)>10){
                            var scaletime = distance / 3;
                            var curremtTime = video.getCurrentTime();
                            video.seek(curremtTime + scaletime);
                          } 
                        }    
                     });
                    }
                  },
                  {
                    key: 'getPlayerInfo',
                    value: function () {
                    }
                  },
                  {
                    key: 'onReadyH5',
                    value: function () {
                    }
                  },
                  {
                    key: 'onPlayStartH5',
                    value: function () {
                    }
                  },
                  {
                    key: 'onPlayH5',
                    value: function () {
                    }
                  },
                  {
                    key: 'onPlayerCompleteH5',
                    value: function (t) {
                      if (t && t.vid) {
                        var e = location.href,
                        a = t.encodevid || t.vid;
                        e.split('id_').length > 1 ? window.location.href = ''.concat(e.split('id_') [0], 'id_').concat(a, '.html')  : window.location.href = ''.concat(e.split('?') [0], '?videoid=').concat(a)
                      }
                    }
                  },
                  {
                    key: 'onPlayEnd',
                    value: function () {
                      var t = window.innerWidth || document.documentElement.clientWidth;
                      1 === this.state.verticalStyle && this.setState({
                        playerHeight: 9 * t / 16
                      })
                    }
                  },
                  {
                    key: 'onMediaSrcOK',
                    value: function (t, e) {
                    }
                  },
                  {
                    key: 'stayPlayer',
                    value: function () {
                    }
                  },
                  {
                    key: '_orientationChange',
                    value: function (t) {
                    }
                  },
                  {
                    key: 'getReferrerCid',
                    value: function () {
                    }
                  },
                  {
                    key: 'listenNet',
                    value: function () {
                    }
                  },
                  {
                    key: 'getNetworkType',
                    value: function () {
                    }
                  },
                  {
                    key: 'playFiveMinute',
                    value: function () {
                    }
                  },
                  {
                    key: 'jumpApp',
                    value: function () {
                    }
                  }
                  ]), n
                }(g.Component),
                yt = Object(C.connect) ((function (t) {
                  return {
                    videoMap: t.page.pageData.videoMap,
                    noCallUp: t.page.noCallUp
                  }
                })) (gt),
                wt = (a(349), a(37).default), bt = Object(C.connect) ((function (t) {
                  return {
                    videoMap: t.page.pageData.videoMap,
                    userInfo: t.page.userInfo
                  }
                })) ((function (t) {
                  var e = Object(g.useState) (!1),
                  a = tt() (e, 2),
                  n = a[0],
                  i = a[1],
                  o = function () {
                    var t = 'https://acz.youku.com/wow/ykpage/act/aki96rjthui?sharepolitetoken='.concat(window.xparamsString.sharepolitetoken, '&_wvUseWKWebView=YES&from=player&vid=').concat(window.vid);
                    wt({
                      openHalfEncodeUrl: t
                    })
                  };
                  return Object(g.useEffect) ((function () {
                  }), [
                    0
                  ]),
                  y.a.createElement('div', null, n && y.a.createElement('div', null, y.a.createElement('div', {
                    className: 'politelayer'
                  }), y.a.createElement('img', {
                    src: 'https://img.alicdn.com/tfs/TB1FiiagHj1gK0jSZFuXXcrHpXa-78-78.png',
                    alt: '',
                    className: 'closePoliteBtn',
                    onClick: function () {
                      i(!1)
                    }
                  }), y.a.createElement('div', {
                    className: 'politeContainer'
                  }, y.a.createElement('img', {
                    className: 'politeTopImg',
                    src: 'https://gw.alicdn.com/tfs/TB1IizVgQY2gK0jSZFgXXc5OFXa-858-108.png'
                  }), y.a.createElement('div', {
                    className: 'politeBgContainer'
                  }, y.a.createElement('img', {
                    src: 'https://gw.alicdn.com/tfs/TB13o5XgRr0gK0jSZFnXXbRRXXa-186-72.png',
                    alt: '',
                    className: 'lock'
                  }), y.a.createElement('img', {
                    src: 'https://gw.alicdn.com/tfs/TB1.vX.gO_1gK0jSZFqXXcpaXXa-888-624.png',
                    alt: '',
                    className: 'bgImg'
                  }), y.a.createElement('img', {
                    src: 'https://gw.alicdn.com/tfs/TB1EyqagHj1gK0jSZFuXXcrHpXa-333-333.png',
                    alt: '',
                    className: 'starImg'
                  }), y.a.createElement('div', {
                    className: 'videoTitle'
                  }, t.videoMap.showName), y.a.createElement('div', {
                    className: 'videoIndex'
                  }, '第', t.videoMap.showVideoStage, '集')), y.a.createElement('div', {
                    className: 'politeBtn',
                    onClick: function () {
                      o()
                    }
                  }, '加入组队免费看 >'))))
                })), kt = a(16), Et = a.n(kt); a(350); function Ct(t, e) {
                  var a = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))),
                    a.push.apply(a, n)
                  }
                  return a
                }
                function St() {
                  if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' === typeof Proxy) return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [
                    ], (function () {
                    }))),
                    !0
                  } catch (t) {
                    return !1
                  }
                }
                var Dt = function (t) {
                  m() (n, t);
                  var e,
                  a = (e = n, function () {
                    var t,
                    a = v() (e);
                    if (St()) {
                      var n = v() (this).constructor;
                      t = Reflect.construct(a, arguments, n)
                    } else t = a.apply(this, arguments);
                    return h() (this, t)
                  });
                  function n(t) {
                    var e;
                    return s() (this, n),
                    (e = a.call(this, t)).state = {
                    },
                    e
                  }
                  return d() (n, [
                    {
                      key: 'render',
                      value: function () {
                        var t = this;
                        return this.props.show && this.props.content ? y.a.createElement('div', {
                          className: 'yk-modal'
                        }, y.a.createElement('div', {
                          className: 'modal-box'
                        }, this.props.showCloseBtn && y.a.createElement('a', {
                          href: null,
                          className: 'close',
                          onClick: function () {
                            t.handleConfirmClick()
                          }
                        }, y.a.createElement('span', null, '×')), this.props.title && y.a.createElement('div', {
                          className: 'modal-title'
                        }, this.props.title), this.props.content && y.a.createElement('div', {
                          className: 'modal-content'
                        }, this.props.content), this.props.buttons.length > 0 && y.a.createElement('div', {
                          className: 'modal-foot'
                        }, this.props.buttons.map((function (e) {
                          return y.a.createElement('a', {
                            key: 'btn-'.concat(e.type),
                            href: 'javascript:void(0)',
                            className: 'confirm' === e.type ? 'ok-btn' : 'cancel' === e.type ? 'cancel-btn' : '',
                            onClick: function () {
                              t.handleConfirmClick(e.type)
                            }
                          }, e.text)
                        })))))  : null
                      }
                    },
                    {
                      key: 'handleConfirmClick',
                      value: function (t) {
                        var e = this.props.okCbFn,
                        a = this.props.cancelCbFn;
                        'confirm' === t ? e && e()  : a && a(),
                        this.props.dispatch({
                          type: 'ykModal/hide'
                        })
                      }
                    }
                  ]),
                  n
                }(g.Component), Nt = Object(C.connect) ((function (t) {
                  return function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var a = null != arguments[e] ? arguments[e] : {
                      };
                      e % 2 ? Ct(Object(a), !0).forEach((function (e) {
                        Et() (t, e, a[e])
                      }))  : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))  : Ct(Object(a)).forEach((function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                      }))
                    }
                    return t
                  }({
                  }, t.ykModal)
                })) (Dt), Ot = a(86); function At() {
                  if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' === typeof Proxy) return !0;
                  try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [
                    ], (function () {
                    }))),
                    !0
                  } catch (t) {
                    return !1
                  }
                }
                var jt = a(37), xt = function (t) {
                  m() (n, t);
                  var e,
                  a = (e = n, function () {
                    var t,
                    a = v() (e);
                    if (At()) {
                      var n = v() (this).constructor;
                      t = Reflect.construct(a, arguments, n)
                    } else t = a.apply(this, arguments);
                    return h() (this, t)
                  });
                  function n(t) {
                    var e;
                    return s() (this, n),
                    (e = a.call(this, t)).state = {
                      moduleKey: 'thirdparty',
                      baseExpireKey: 'callapp-modal',
                      timer: null
                    },
                    e
                  }
                  return d() (n, [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        var t = this,
                        e = Number(window.currentRefer.timeout);
                        '' !== window.currentRefer.name && e > 0 && this.canPopModal() && !window.vData.politicsSensitive && (this.state.timer && clearTimeout(this.state.timer), this.state.timer = setTimeout((function () {
                          t.showThirdpartModal()
                        }), e))
                      }
                    },
                    {
                      key: 'render',
                      value: function () {
                        return null
                      }
                    },
                    {
                      key: 'showThirdpartModal',
                      value: function () {
                        var t = this;
                        this.props.dispatch({
                          type: 'ykModal/show',
                          payload: {
                            type: 'alert',
                            showCloseBtn: !0,
                            content: window.currentRefer.text,
                            buttons: [
                              {
                                text: window.currentRefer.button,
                                type: 'confirm'
                              }
                            ],
                            okCbFn: function () {
                              jt && jt.default({
                                spmC: 'modal',
                                spmD: 'confirm',
                                source: 'thirdparty'
                              })
                            },
                            cancelCbFn: function () {
                              Object(D.a) ({
                                spmC: 'modal',
                                spmD: 'close'
                              }),
                              t.setExpireString()
                            }
                          }
                        }), Object(D.a) ({
                          spmC: 'modal',
                          spmD: 'exp',
                          gmKey: 'EXP'
                        })
                      }
                    },
                    {
                      key: 'canPopModal',
                      value: function () {
                        var t = Number(window.currentRefer.interval),
                        e = !0,
                        a = this.getExpireString();
                        if (a) {
                          var n = + new Date - Number(a);
                          t > 0 && n <= t && (e = !1)
                        }
                        return e
                      }
                    },
                    {
                      key: 'setExpireString',
                      value: function () {
                        window.localStorage.setItem(this.state.baseExpireKey + window.currentRefer.name, + new Date)
                      }
                    },
                    {
                      key: 'getExpireString',
                      value: function () {
                        return window.localStorage.getItem(this.state.baseExpireKey + window.currentRefer.name)
                      }
                    }
                    ]), n
                  }(g.Component),
                  _t = Object(C.connect) ((function (t) {
                    return {
                      videoMap: t.page.pageData.videoMap
                    }
                  })) (xt),
                  Rt = a(59);
                  a(352);
                  function Tt() {
                    if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' === typeof Proxy) return !0;
                    try {
                      return Date.prototype.toString.call(Reflect.construct(Date, [
                      ], (function () {
                      }))),
                      !0
                    } catch (t) {
                      return !1
                    }
                  }
                  var Mt = function (t) {
                    m() (n, t);
                    var e,
                    a = (e = n, function () {
                      var t,
                      a = v() (e);
                      if (Tt()) {
                        var n = v() (this).constructor;
                        t = Reflect.construct(a, arguments, n)
                      } else t = a.apply(this, arguments);
                      return h() (this, t)
                    });
                    function n(t) {
                      var e;
                      return s() (this, n),
                      (e = a.call(this, t)).state = {
                        showLayer: !1,
                        moduleList: [
                        ],
                        clientModuleList: [
                        ],
                        disableHeader: !(!t.vData.bizChannel || !t.vData.bizChannel.disableHeader),
                        disableFooter: !(!t.vData.bizChannel || !t.vData.bizChannel.disableFooter)
                      },
                      e
                    }
                    return d() (n, [
                      {
                        key: 'componentWillMount',
                        value: function () {
                          var t = this.props.pageData.componentList || [
                          ],
                          e = [
                          ],
                          a = [
                          ];
                          t.length > 5 ? (e = t.slice(0, 5), a = t.slice(5, t.length), this.setState({
                            clientModuleList: a
                          }))  : e = t,
                          this.setState({
                            moduleList: e
                          })
                        }
                      },
                      {
                        key: 'componentDidMount',
                        value: function () {
                          var t = r() (i.a.mark((function t() {
                            var e,
                            a;
                            return i.a.wrap((function (t) {
                              for (; ; ) switch (t.prev = t.next) {
                                case 0:
                                  try {
                                    e = new E.a(location.href),
                                    window.xparamsString = e.params
                                  } catch (n) {
                                    window.xparamsString = {
                                    }
                                  }
                                  return 0 !== this.state.clientModuleList.length && this.setState({
                                    moduleList: this.state.moduleList.concat(this.state.clientModuleList)
                                  }),
                                  t.prev = 2,
                                  t.next = 5,
                                  Object(q.g) ();
                                case 5:
                                  a = t.sent,
                                  window.xparamsString.usecret = a.data.result.model.password,
                                  t.next = 12;
                                  break;
                                case 9:
                                  t.prev = 9,
                                  t.t0 = t.catch (2),
                                  window.xparamsString.usecret = '';
                                case 12:
                                  window.addEventListener('load', this.reportPerformance),
                                  Object(D.a) ({
                                    spmC: 'page',
                                    spmD: 'exp',
                                    gmKey: 'EXP',
                                    stopSpider: !0
                                  }),
                                  Object(Rt.a) ({
                                    title: window.__METADATA__ && window.__METADATA__.title,
                                    link: window.location.href,
                                    desc: window.__METADATA__ && window.__METADATA__.description,
                                    shareImage: window.__METADATA__ && window.__METADATA__.shareImg
                                  }),
                                  this.copyUSecret();
                                case 16:
                                case 'end':
                                  return t.stop()
                              }
                            }), t, this, [
                              [2,
                              9]
                            ])
                          }))); return function () {
                            return t.apply(this, arguments)
                          }
                        }()
                      },
                      {
                        key: 'copyUSecret',
                        value: function () {
                          document.documentElement.addEventListener('click', (function (t) {
                            try {
                              window.xparamsString.usecret && Object(S.setUSecret) (t)
                            } catch (t) {
                              console.log(t)
                            }
                          }), !1)
                        }
                      },
                      {
                        key: 'reportPerformance',
                        value: function () {
                          if (window.performance) {
                            var t = window.performance.timing;
                            t && setTimeout((function () {
                              var e = t.responseStart - t.navigationStart,
                              a = t.domContentLoadedEventStart - t.navigationStart;
                              Object(z.c) ('s1', e),
                              Object(z.c) ('s2', a),
                              Object(D.a) ({
                                spmC: 'pagePerformance',
                                spmD: 'report',
                                gmKey: 'EXP',
                                exargs: {
                                  'data-firstpaint': e,
                                  'data-domready': a
                                }
                              })
                            }), 500)
                          }
                        }
                      },
                      {
                        key: 'render',
                        value: function () {
                          return y.a.createElement('div', null, this.state.disableHeader ? null : y.a.createElement(ut.a, null), y.a.createElement(yt, {
                            comData: this.props.pageData.videoMap
                          }), this.state.moduleList.map((function (t, e) {
                            return e > 10 ? y.a.createElement(b.a, {
                              key: 'drawerLazy'.concat(e),
                              height: 100
                            }, y.a.createElement(dt, {
                              drawerData: t,
                              lazyload: !0
                            }))  : y.a.createElement(dt, {
                              drawerData: t,
                              key: 'drawer'.concat(e)
                            })
                          })), y.a.createElement(bt, null), this.state.disableFooter ? null : y.a.createElement(pt, null), y.a.createElement(_t, null), y.a.createElement(Nt, null), y.a.createElement(Ot.a, null))
                        }
                      }
                      ]), n
                    }(g.Component),
                    Kt = Object(C.connect) ((function (t) {
                      return {
                        pageData: t.page.pageData,
                        vData: t.page.vData
                      }
                    })) (Mt),
                    Pt = [
                      {
                        path: '/video/:video',
                        component: Kt,
                        exact: !0
                      },
                      {
                        path: '/alipay_video/:video',
                        component: Kt,
                        exact: !0
                      }
                    ];
                    e.a = Pt
                  },
                  160: function (t, e, a) {
                    'use strict';
                    (function (e) {
                      var n = a(331);
                      function i(t) {
                        var a,
                        i = '';
                        return o(t = t.replace(/^c([a-z]{1})([0-9]+)/gi, '')) && (i = n((a = function (t) {
                          return o(t) && (t = t.substring(1)),
                          t
                        }(t), e.from(a, 'base64').toString())).shiftRight(2)),
                        i.toString()
                      }
                      function o(t) {
                        return !(0 !== t.indexOf('X') && 0 !== t.indexOf('U'))
                      }
                      t.exports = {
                        decodeId: function (t) {
                          var e = null;
                          if (/^[0-9]*$/.test(t)) return t;
                          if ('string' === typeof t) {
                            if (/^[0-9]*$/.test(t)) return t;
                            e = i(t)
                          } else Array.isArray(t) && (e = t.map((function (t) {
                            return i(t)
                          })));
                          return e
                        },
                        encodeId: function (t) {
                          return /^[0-9]*$/.test(t) ? 'U' + e.from(String(n(t).shiftLeft(2))).toString('base64')  : t
                        },
                        decode: i
                      }
                    }).call(this, a(327).Buffer)
                  },
                  161: function (t, e, a) {
                    'use strict';
                    var n = a(0),
                    i = a.n(n),
                    o = a(5);
                    a(81);
                    e.a = Object(o.connect) ((function (t) {
                      return {
                        videoMap: t.page.pageData.videoMap
                      }
                    })) ((function (t) {
                      return i.a.createElement('div', null, i.a.createElement('div', {
                        id: 'app'
                      }, t.children))
                    }))
                  },
                  168: function (t, e, a) {
                    'use strict';
                    a.r(e),
                    function (t) {
                      var n = a(0),
                      i = a.n(n),
                      o = a(29),
                      r = a.n(o),
                      c = a(5),
                      s = a.n(c),
                      l = a(51),
                      d = a(116),
                      u = a(12),
                      m = a(49),
                      p = (a(161), a(2));
                      e.default = function () {
                        var t = s() ({
                          history: Object(u.a) (),
                          initialState: {
                            page: {
                              pageData: window.__INITIAL_DATA__,
                              hostname: window.location.hostname,
                              search: location.search,
                              pathname: location.pathname,
                              platoConfig: window.__PLATOCONFIG__,
                              userInfo: window.__USERINFO__,
                              pageConfig: window.pageConfig,
                              refer: Object(p.getParam) ('refer'),
                              vData: window.vData,
                              userAgent: window.navigator.userAgent,
                              noCallUp: window.noCallUp
                            }
                          }
                        });
                        m.a.forEach((function (e) {
                          t.model(e)
                        }));
                        for (var e = Object(p.getParam) ('refer'), a = null, n = window.pageConfig.thirdparty && window.pageConfig.thirdparty.refer || [
                        ], o = 0; o < n.length; o++) {
                          var c = n[o];
                          if (c.name === e) {
                            a = c;
                            break
                          }
                        }
                        a || (a = window.pageConfig.thirdparty && window.pageConfig.thirdparty.default || {
                        }), window.vData.refer = e, window.currentRefer = a, t.router((function () {
                          return i.a.createElement(l.BrowserRouter, null, i.a.createElement(l.Switch, null, d.a.map((function (t) {
                            var e = t.path,
                            a = t.exact,
                            n = t.component;
                            return i.a.createElement(l.Route, {
                              key: e,
                              path: e,
                              exact: a,
                              component: n
                            })
                          }))))
                        })); var h = t.start(); window._SSRERR_ ? r.a.render(i.a.createElement(h, null), document.getElementById('app'))  : r.a.hydrate(i.a.createElement(h, null), document.getElementById('app'))
                      }()
                    }.call(this, a(117) (t))
                  },
                  277: function (t, e, a) {
                  },
                  281: function (t, e, a) {
                  },
                  315: function (t, e, a) {
                  },
                  316: function (t, e, a) {
                  },
                  317: function (t, e, a) {
                  },
                  318: function (t, e, a) {
                  },
                  333: function (t, e, a) {
                  },
                  334: function (t, e, a) {
                  },
                  335: function (t, e, a) {
                  },
                  341: function (t, e, a) {
                  },
                  342: function (t, e, a) {
                  },
                  343: function (t, e, a) {
                  },
                  344: function (t, e, a) {
                  },
                  347: function (t, e, a) {
                  },
                  348: function (t, e, a) {
                  },
                  349: function (t, e, a) {
                  },
                  350: function (t, e, a) {
                  },
                  352: function (t, e, a) {
                  },
                  37: function (t, e, a) {
                    'use strict';
                    a.r(e);
                    e.default = function () {
                      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                      };
                      var e = t.id || window.vData.vId,
                      a = e;
                      if (!e) return;
                      //+ 添加这一个
                      location.href = "/alipay_video/id_" + a + ".html?=&source=";
                    }
                  }
                },
                [
                  [168,
                  6,
                  0]
                ]]);
