(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["appPl"], {
        8412: function (e, t, i) {
            "use strict";
            i.r(t);
            var a = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", [i("div", {
                        staticClass: "m-box"
                    }, [i("PlayVideoRelated", {
                        attrs: {
                            redirect: e.redirect,
                            "limit-call-app-custom": e.showShaoerAppBtn,
                            "limit-filter": e.limitFilter,
                            subtype: e.subtype
                        },
                        on: {
                            sourceLayerFoo: function (t) {
                                return e.$refs.platformLimit && e.$refs.platformLimit.sourceLayerFooHandle(t)
                            }, setRateList: e.setRateList,
                            fullscreenClick: e.clearLayer,
                            videoReady: e.onVideoReady
                        },
                        scopedSlots: e._u([{
                                key: "layer",
                                fn: function () {
                                    return [i("PlayVideoLayerCallApp", {
                                        attrs: {
                                            redirect: e.redirect,
                                            "limit-filter": e.limitFilter,
                                            "channel-id": e.channelId,
                                            "image-url": e.videoInfo.imageUrl,
                                            "content-type": e.videoInfo.contentType,
                                            "purchase-type": e.videoInfo.purchaseType,
                                            "is-enable-album-play": e.isEnableAlbumPlay
                                        }
                                    })]
                                }, proxy: !0
                            },
                            e.showShaoerAppBtn ? {
                                key: "limitCallApp",
                                fn: function () {
                                    return [i("PlayAppBannerShaoer", {
                                        attrs: {
                                            type: "limit",
                                            "player-banner": e.playerBanner,
                                            "qipu-id": e.videoInfo.qipuId,
                                            aid: e.videoInfo.aid
                                        }
                                    })]
                                }, proxy: !0
                            } : null
                        ], null, !0)
                    }), i("PlayBanner", {
                        attrs: {
                            enable: {
                                app: !0,
                                vip: {
                                    sport: !0
                                },
                                market: !1
                            }
                        }
                    }), i("PlayFoldVideoInfo", {
                        attrs: {
                            "close-iconclass": "c-playPage-icon c-playPage-over",
                            "close-btnclass": "c-pop-link",
                            "is-comment-load": e.isCommentLoad,
                            "qipu-id": e.videoInfo.qipuId,
                            "is-show-dramaslist": !1
                        }
                    }), i("PlayLongExtendBar", {
                        attrs: {
                            "is-comment-load": e.isCommentLoad,
                            "is-show-flod": !0
                        }
                    })], 1), e.controlInfo.politicallySensitive ? e._e() : i("PlayLongActivityEntry"), e.template.album && !e.controlInfo.politicallySensitive ? i("EpisodeCard", {
                        attrs: {
                            "album-info": e.albumInfo,
                            "page-size": e.videoList.pageSize,
                            "show-content": e.albumInfo.showContent,
                            "channel-id": e.albumInfo.channelId,
                            "album-id": e.albumInfo.qipuId,
                            "video-info": e.videoInfo,
                            "episode-type": "horizontal",
                            "cur-tvid": e.videoInfo.tvid,
                            "total-pages": e.videoList.totalPages,
                            "update-strategy": e.albumInfo.updateStrategy,
                            "video-list": e.videoList,
                            "qipu-id": e.videoInfo.qipuId,
                            "video-title": "选集",
                            continuous: e.isEnableAlbumPlay
                        },
                        on: {
                            showAlbumLayer: function (t) {
                                e.isShowAlbumLayer = !e.isShowAlbumLayer
                            }
                        }
                    }) : e._e(), e.template.album && !e.controlInfo.politicallySensitive ? i("EpisodeLayer", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "804171_episode",
                            expression: "'804171_episode'"
                        }],
                        attrs: {
                            "album-info": e.albumInfo,
                            open: e.isShowAlbumLayer,
                            continuous: e.isEnableAlbumPlay,
                            "qipu-id": e.videoInfo.qipuId,
                            "album-id": e.albumInfo.qipuId
                        },
                        on: {
                            "update:open": function (t) {
                                e.isShowAlbumLayer = t
                            }
                        }
                    }) : e._e(), e.template.source && !e.controlInfo.politicallySensitive ? i("SourceCard", {
                        attrs: {
                            "video-title": "选集",
                            "video-list": e.videoList,
                            "album-info": e.albumInfo,
                            "video-info": e.videoInfo,
                            "update-strategy": e.albumInfo.updateStrategy,
                            "cover-class": "m-pic m-pic-play-horizontal m-sliding",
                            continuous: e.isEnableAlbumPlay
                        },
                        on: {
                            showSourceLayer: function (t) {
                                e.isShowSourceLayer = !e.isShowSourceLayer
                            }
                        }
                    }) : e._e(), e.template.source && !e.controlInfo.politicallySensitive ? i("SourceLayer", {
                        attrs: {
                            "video-info": e.videoInfo,
                            open: e.isShowSourceLayer,
                            continuous: e.isEnableAlbumPlay
                        },
                        on: {
                            "update:open": function (t) {
                                e.isShowSourceLayer = t
                            }
                        }
                    }) : e._e(), i("LazyLoad", {
                        attrs: {
                            "need-load": !e.controlInfo.politicallySensitive || e.controlInfo.detailComment,
                            "show-more-btn": !0,
                            timeout: 5e3
                        },
                        scopedSlots: e._u([{
                                key: "firstPaint",
                                fn: function () {
                                    return [e.controlInfo.politicallySensitive ? e._e() : i("PlayLongAroundVideo", {
                                        attrs: {
                                            "is-call-app": !0,
                                            ellipsis: !1,
                                            "qipu-id": e.videoInfo.qipuId,
                                            "use-long-param": !0
                                        }
                                    })]
                                }, proxy: !0
                            },
                            e.asyncLoad ? {
                                key: "content",
                                fn: function () {
                                    return [e.controlInfo.politicallySensitive ? e._e() : i("VideoRecommend", {
                                        attrs: {
                                            "show-pingback": "712121_H5_h_bee",
                                            "item-pingback": "h5_cainixihuan_app",
                                            "channel-id": e.videoInfo.cid,
                                            "is-ugc": e.videoInfo.isUGC,
                                            tvid: e.videoInfo.qipuId,
                                            "album-id": e.albumInfo.qipuId || e.videoInfo.sourceId,
                                            "is-call-app": !0,
                                            "hot-title": e.hotTitle,
                                            "use-long-param": !0,
                                            vfrm: e.recVfrm
                                        }
                                    }), i("PlayRelatedHotWords"), e.controlInfo.politicallySensitive ? e._e() : i("PlayRelevantBanner", {
                                        attrs: {
                                            enable: {
                                                adCard: !0,
                                                IPInfo: !0,
                                                videoUser: !0,
                                                adOrigin: !0
                                            }
                                        }
                                    }), e.controlInfo.politicallySensitive ? e._e() : i("PlayVideoSeries", {
                                        directives: [{
                                            name: "show-pingback",
                                            rawName: "v-show-pingback",
                                            value: "704202_series",
                                            expression: "'704202_series'"
                                        }, {
                                            name: "pingback",
                                            rawName: "v-pingback",
                                            value: "704202_series",
                                            expression: "'704202_series'"
                                        }],
                                        attrs: {
                                            "super-album-id": e.videoInfo.superAlbumId,
                                            "is-play-long": !0,
                                            "is-hide-sub-title": !0,
                                            "qipu-id": e.videoInfo.qipuId,
                                            "album-qipu-id": e.albumInfo.qipuId,
                                            "album-id": e.videoInfo.aid,
                                            cid: +e.videoInfo.cid,
                                            "source-id": e.videoInfo.sourceId,
                                            rseat: "704202_series",
                                            "image-size": "284_160",
                                            "section-class": "m-pic-play-horizontal m-sliding"
                                        }
                                    }), e.template.album && !e.controlInfo.politicallySensitive ? i("PlayLongSoundTrack", {
                                        directives: [{
                                            name: "show-pingback",
                                            rawName: "v-show-pingback",
                                            value: "605091_music",
                                            expression: "'605091_music'"
                                        }],
                                        attrs: {
                                            "album-id": e.videoInfo.aid,
                                            "section-class": "m-player-music m-player-music-sliding m-sliding"
                                        }
                                    }) : e._e(), e.controlInfo.politicallySensitive ? e._e() : i("PlayVideoFragment", {
                                        directives: [{
                                            name: "show-pingback",
                                            rawName: "v-show-pingback",
                                            value: "804281_pianduanheji",
                                            expression: "'804281_pianduanheji'"
                                        }, {
                                            name: "pingback",
                                            rawName: "v-pingback",
                                            value: "804281_pianduan",
                                            expression: "'804281_pianduan'"
                                        }],
                                        attrs: {
                                            "qipu-id": e.videoInfo.qipuId,
                                            "album-id": e.subTemplate.source ? e.videoInfo.sourceId : e.albumInfo.qipuId,
                                            "sub-template": e.subTemplate,
                                            "is-long-video": e.videoInfo.isLongVideo,
                                            title: "大家都截取的片段"
                                        }
                                    }), e.videoInfo.maCircleIds && !e.controlInfo.politicallySensitive ? i("VideoStarCircle", {
                                        directives: [{
                                            name: "show-pingback",
                                            rawName: "v-show-pingback",
                                            value: "612061_starcircle",
                                            expression: "'612061_starcircle'"
                                        }],
                                        attrs: {
                                            "item-pingback": "611281_starcircle",
                                            "ma-circle-ids": e.videoInfo.maCircleIds,
                                            max: 12,
                                            min: 2,
                                            title: "参演明星"
                                        }
                                    }) : e._e(), e.controlInfo.paopao ? i("PlayJoinerCard", {
                                        attrs: {
                                            "circle-id": e.videoInfo.circleId
                                        }
                                    }) : e._e(), e.controlInfo.detailComment ? i("PlayLongComment") : e._e()]
                                }, proxy: !0
                            } : null, !e.controlInfo.politicallySensitive || e.controlInfo.detailComment ? {
                                key: "skeleton",
                                fn: function () {
                                    return [i("div", {
                                        staticClass: "m-dom-loading-gray"
                                    })]
                                }, proxy: !0
                            } : null
                        ], null, !0)
                    }), i("PlayFloatIcon"), i("PlayPlatformLimit", {
                        ref: "platformLimit"
                    }), i("BackTop"), i("AuraFooter"), i("PlayBottomAppHot")], 1)
                },
                n = [],
                s = (i("ac6a"), i("f3e2"), i("96cf"), i("3b8d")),
                o = (i("6762"), i("2fdb"), i("cebc")),
                r = i("2f62"),
                l = i("b75f"),
                c = i("cfb9"),
                u = i("0b00"),
                d = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "m-box",
                        attrs: {
                            name: "m-aroundVideo"
                        }
                    }, [e.videos && e.videos.length > 0 ? i("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [i("AuraCardTitle", {
                        attrs: {
                            title: "周边视频"
                        }
                    })], 1) : e._e(), i("videoList", {
                        attrs: {
                            videos: e.videos.slice(0, e.pageSize * (e.page + 1))
                        },
                        scopedSlots: e._u([{
                            key: "body",
                            fn: function (t) {
                                var a = t.videos;
                                return [i("AuraVideoList", {
                                    directives: [{
                                        name: "show-pingback",
                                        rawName: "v-show-pingback",
                                        value: {
                                            block: "707211_rmzb"
                                        },
                                        expression: "{ block: '707211_rmzb' }"
                                    }, {
                                        name: "recommend-show-pingback",
                                        rawName: "v-recommend-show-pingback",
                                        value: {
                                            card: {
                                                videos: a,
                                                cardName: "707211_rmzb"
                                            },
                                            pingback: e.pingback
                                        },
                                        expression: "{card: { videos: videos, cardName: '707211_rmzb'}, pingback}"
                                    }, {
                                        name: "recommend-click-pingback",
                                        rawName: "v-recommend-click-pingback",
                                        value: {
                                            card: {
                                                videos: a,
                                                cardName: "707211_rmzb"
                                            },
                                            noRedirect: !0,
                                            pingback: e.pingback
                                        },
                                        expression: "{card: { videos: videos, cardName: '707211_rmzb'}, noRedirect: true, pingback}"
                                    }, {
                                        name: "scroll",
                                        rawName: "v-scroll.scrollX",
                                        value: {
                                            eventPassthrough: "vertical"
                                        },
                                        expression: "{eventPassthrough: 'vertical'}",
                                        modifiers: {
                                            scrollX: !0
                                        }
                                    }],
                                    staticClass: "m-pic-horizontal_play",
                                    attrs: {
                                        itempingback: "h5_zhoubian_app",
                                        subtype: e.subtype,
                                        videos: a,
                                        "show-desc": !1,
                                        "show-row-title": !1,
                                        "show-sub-title": !1,
                                        ellipsis: e.ellipsis,
                                        "is-show-slide": !1
                                    },
                                    on: {
                                        click: e.callApp
                                    }
                                })]
                            }
                        }])
                    }), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (e.page + 1) * e.pageSize < e.videos.length,
                            expression: "(page + 1) * pageSize < videos.length"
                        }],
                        staticClass: "m-box-items m-box-items-full"
                    }, [i("section", {
                        staticClass: "m-linkMore"
                    }, [i("a", {
                        staticClass: "m-link m-love-link",
                        attrs: {
                            href: "javascript:void(0);"
                        },
                        on: {
                            click: function (t) {
                                e.page = e.page + 1
                            }
                        }
                    }, [i("i", {
                        staticClass: "c-glyphicon c-glyphicon-morevideo"
                    }), e._v("查看更多\n      ")])])])], 1)
                },
                p = [],
                h = (i("57e7"), i("6d67"), i("c5f6"), i("21fd")),
                m = i("6810"),
                f = i("3e9e"),
                g = i("7e9b"),
                v = {
                    name: "PlayLongAroundVideo",
                    components: {
                        VideoList: m["a"]
                    },
                    directives: {
                        "recommend-show-pingback": g["e"],
                        "recommend-click-pingback": g["d"]
                    },
                    props: {
                        isCallApp: {
                            type: Boolean,
                            default: !1
                        },
                        ellipsis: {
                            type: Boolean,
                            default: !0
                        },
                        useLongParam: {
                            type: Boolean,
                            default: !1
                        },
                        qipuId: {
                            type: Number,
                            default: 0
                        },
                        pageSize: {
                            type: Number,
                            default: 6
                        }
                    },
                    data: function () {
                        return {
                            response: null,
                            page: 0,
                            subtype: "H5zbsp_822"
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["videoInfo", "userInfo", "subTemplate"]), {
                        videos: function () {
                            var e = this,
                                t = this.response && this.response.videos || [];
                            return t = t.map(function (t, i) {
                                //类型为2则不会添加APPICO
                                t.type = 2;
                                //不要调用APP
                                t.isCallApp = false;
                                return t.isSelected = t.isSelected || t.qipuId === e.videoInfo.qipuId, t.pageUrl = t.pageUrl.indexOf("vfrm") > -1 ? t.pageUrl : "".concat(t.pageUrl, "#vfrm=").concat(e.subTemplate.source ? "30-28-19-7" : "30-26-19-7"), e.isCallApp && 2 !== t.type && (t.play = {
                                    callApp: !0,
                                    card: "videoAround",
                                    redirect: !1,
                                    url: t.pageUrl,
                                    qipuId: t.qipuId,
                                    continuous: !0,
                                    selectClass: "selected"
                                }, t.upperRightCorner = "APP"), t.subtitle = "", t.lowerRightCorner = 2 === t.type && t.playCount ? t.playCount + "" : t.duration, t
                            }), t
                        }, pingback: function () {
                            return this.response.pingback
                        }
                    }),
                    watch: {
                        qipuId: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t) {
                                var i;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (i = f["a"].getCurVideo() || {}, "albumList" !== i.card) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, this.getVideos();
                                    case 6:
                                        this.response = e.sent;
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    },
                    mounted: function () {
                        var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getVideos().catch(function () {});
                                case 2:
                                    this.response = e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        getVideos: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                                var t, i, a, n = arguments;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.length > 0 && void 0 !== n[0] ? n[0] : "", t = this.videoInfo, i = this.subTemplate.short ? "h_swan" : "h_zebra", a = {
                                            type: "video",
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
                                            type: "video",
                                            area: i,
                                            channelId: t.cid,
                                            cid: t.cid,
                                            aid: t.aid,
                                            tvid: t.tvid,
                                            userId: this.userInfo.userId,
                                            referenceId: t.qipuId,
                                            tids: this.videoInfo.tagIds && this.videoInfo.tagIds.length ? this.videoInfo.tagIds.join(",") : "",
                                            size: 12,
                                            trimUser: !1,
                                            albumId: t.aid
                                        }, e.abrupt("return", Object(h["g"])(a));
                                    case 9:
                                        return e.abrupt("return", Object(h["k"])(a));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        callApp: function (e, t) {
                            this.isCallApp && this.$dispatch("GlobalCallapp", "toPlay", {
                                extralOptions: {
                                    aid: e.albumId,
                                    cid: e.cid,
                                    vid: e.vid,
                                    tvid: e.qipuId
                                },
                                subtype: this.subtype
                            })
                        }
                    }
                },
                b = v,
                y = i("2877"),
                I = Object(y["a"])(b, d, p, !1, null, null, null),
                _ = I.exports,
                w = i("0288"),
                L = i("9b0a"),
                k = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("VideoList", {
                        attrs: {
                            videos: e.videos,
                            name: "m-soundTrack"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function () {
                                return [i("AuraCardTitle", {
                                    attrs: {
                                        title: "原生大碟"
                                    }
                                })]
                            }, proxy: !0
                        }, {
                            key: "body",
                            fn: function (t) {
                                var a = t.videos;
                                return [i("section", {
                                    directives: [{
                                        name: "scroll",
                                        rawName: "v-scroll.scrollX",
                                        value: {
                                            eventPassthrough: "vertical",
                                            videos: a,
                                            position: "LI",
                                            selectClass: "selected"
                                        },
                                        expression: "{\n        eventPassthrough: 'vertical',\n        videos: videos,\n        position: 'LI',\n        selectClass: 'selected'\n      }",
                                        modifiers: {
                                            scrollX: !0
                                        }
                                    }],
                                    class: e.sectionClass
                                }, [i("ul", {
                                    staticClass: "player-music m-sliding-list"
                                }, e._l(a, function (t, a) {
                                    return i("li", {
                                        directives: [{
                                            name: "play",
                                            rawName: "v-play",
                                            value: t.play,
                                            expression: "video.play"
                                        }, {
                                            name: "pingback",
                                            rawName: "v-pingback",
                                            value: "605091_music",
                                            expression: "'605091_music'"
                                        }],
                                        key: t.qipuId + "-" + a
                                    }, [i("a", {
                                        staticClass: "link-item",
                                        attrs: {
                                            href: "javascript:void(0)",
                                            title: t.shortTitle
                                        }
                                    }, [i("div", {
                                        staticClass: "c-music-photo",
                                        style: {
                                            backgroundImage: "url(" + (t.imageUrl || "//www.iqiyipic.com/common/fix/h5-aura-img/imgLogo-default.png") + ")"
                                        }
                                    }, [i("i", {
                                        staticClass: "c-playPage-icon c-playPage-play"
                                    })]), i("div", {
                                        staticClass: "info"
                                    }, [i("div", {
                                        staticClass: "c-title"
                                    }, [e._v(e._s(t.shortTitle))]), i("div", {
                                        staticClass: "c-music-num"
                                    }, [i("i", {
                                        staticClass: "icon-video-hot icon-hot-good"
                                    }), i("span", {
                                        staticClass: "c-num"
                                    }, [e._v("热度 " + e._s(t.hotDisplayCount))])])])])])
                                }), 0)])]
                            }
                        }])
                    })
                },
                x = [],
                P = i("8296"),
                C = {
                    name: "PlayLongSoundTrack",
                    components: {
                        VideoList: m["a"]
                    },
                    props: {
                        albumId: {
                            type: Number,
                            default: 0
                        },
                        sectionClass: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function () {
                        return {
                            videos: []
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["template"])),
                    mounted: function () {
                        this.getNativeDisk()
                    }, methods: {
                        getNativeDisk: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                                var t, i;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.albumId) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t = {
                                            albumId: this.albumId
                                        }, e.next = 5, Object(h["h"])(t);
                                    case 5:
                                        i = e.sent, i && i.musics && (this.videos = i.musics, this.videos.forEach(function (e) {
                                            e.play = {
                                                card: "soundtrack",
                                                redirect: !1,
                                                url: e.pageUrl,
                                                vfrm: "30-26-24-7",
                                                qipuId: e.qipuId,
                                                selectClass: "selected",
                                                continuous: !0
                                            }, e.imageUrl = Object(P["v"])(e.imageUrl, "128_128")
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                S = C,
                O = Object(y["a"])(S, k, x, !1, null, null, null),
                j = O.exports,
                V = i("d323"),
                T = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return e.isShow ? i("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: e.trseat,
                            expression: "trseat"
                        }],
                        staticClass: "m-box"
                    }, [i("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [i("section", {
                        staticClass: "m-idol-banner"
                    }, [i("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: e.rseat,
                            expression: "rseat"
                        }],
                        staticClass: "c-banner-link",
                        attrs: {
                            href: e.href,
                            title: e.title
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.imgSrc,
                            alt: e.alt
                        }
                    })]), "two" === e.status ? i("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: e.trseat,
                            expression: "trseat"
                        }],
                        staticClass: "c-banner-link",
                        attrs: {
                            href: e.thref,
                            title: e.ttitle
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.timgSrc,
                            alt: e.talt
                        }
                    })]) : e._e()])])]) : e._e()
                },
                N = [],
                A = i("ab22"),
                q = {
                    name: "PlayLongActivityEntry",
                    data: function () {
                        return {
                            isShow: !1,
                            status: "one",
                            rseat: "",
                            href: "",
                            title: "",
                            imgSrc: "",
                            alt: "",
                            trseat: "",
                            thref: "",
                            ttitle: "",
                            timgSrc: "",
                            talt: ""
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["videoInfo", "albumInfo"])),
                    mounted: function () {
                        this.getActivityEntryDatas()
                    }, methods: {
                        getActivityEntryDatas: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                                var t, i, a, n, s, o;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = {
                                            237637701: {
                                                resources_id: "17398464312"
                                            },
                                            239388601: {
                                                resources_id: "18671945312"
                                            },
                                            239209301: {
                                                resources_id: "20236611012"
                                            },
                                            246196901: {
                                                resources_id: "24575113612"
                                            },
                                            241066001: {
                                                resources_id: "25180781812"
                                            },
                                            247720501: {
                                                resources_id: "29316688212"
                                            }
                                        }, i = t[this.albumInfo.qipuId] || t[this.videoInfo.qipuId] || {}, a = i.resources_id || 0, !a) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 6, Object(A["e"])({
                                            id: a
                                        });
                                    case 6:
                                        if (n = e.sent, s = n && n[0], !s) {
                                            e.next = 14;
                                            break
                                        }
                                        if ("none" !== s.card_type) {
                                            e.next = 12;
                                            break
                                        }
                                        return this.isShow = !1, e.abrupt("return");
                                    case 12:
                                        "zhipai" === s.card_type || "paiming" === s.card_type ? (this.status = "one", this.rseat = "zhipai" === s.card_type ? s.zhipaiRseat : s.paimingRseat, this.href = "zhipai" === s.card_type ? s.zhipaiUrl : s.paimingUrl, this.title = "zhipai" === s.card_type ? "直拍通道" : "排名投票", this.imgSrc = "zhipai" === s.card_type ? s.zhipaiFullImg : s.paimingFullImg, this.alt = "zhipai" === s.card_type ? "直拍通道" : "排名投票") : (o = "both_zhipai" === s.card_type, this.status = "two", this.rseat = o ? s.zhipaiRseat : s.paimingRseat, this.href = o ? s.zhipaiUrl : s.paimingUrl, this.title = o ? "直拍通道" : "排名投票", this.imgSrc = o ? s.zhipaiImg : s.paimingImg, this.alt = o ? "直拍通道" : "排名投票", this.trseat = o ? s.paimingRseat : s.zhipaiRseat, this.thref = o ? s.paimingUrl : s.zhipaiUrl, this.ttitle = o ? "排名投票" : "直拍通道", this.timgSrc = o ? s.paimingImg : s.zhipaiImg, this.talt = o ? "排名投票" : "直拍通道"), this.isShow = !0;
                                    case 14:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                z = q,
                E = Object(y["a"])(z, T, N, !1, null, null, null),
                R = E.exports,
                $ = i("7b03"),
                B = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return e.show ? i("div", [i("div", {
                        staticClass: "m-video-poster",
                        staticStyle: {
                            "z-index": "960"
                        }
                    }, [i("img", {
                        attrs: {
                            id: "player-posterimg",
                            src: e.imageUrl
                        }
                    })]), i("div", {
                        staticClass: "m-play-loginLaqi",
                        staticStyle: {
                            "z-index": "961"
                        }
                    }, [i("div", {
                        staticClass: "player-tip-inner"
                    }, [i("a", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_xuanjiAPP_log",
                            expression: "'h5_xuanjiAPP_log'"
                        }],
                        staticClass: "c-link login",
                        attrs: {
                            href: "/user.html"
                        }
                    }, [i("i", {
                        staticClass: "c-glyphicon c-glyphicon-albumPlay"
                    }), e._v(e._s(e.loginText) + "\n      ")]), i("PlayButtonDown", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "h5_xuanjiAPP_app",
                            expression: "'h5_xuanjiAPP_app'"
                        }],
                        staticClass: "c-link laqi",
                        attrs: {
                            subtype: "H5bfyx_821",
                            href: "javascript:void(0)",
                            "down-app-url": "//ota.iqiyi.com/f4.jsp?url=h5-xuanji"
                        }
                    }, [i("i", {
                        staticClass: "c-glyphicon c-glyphicon-iqy"
                    }), e._v(e._s(e.BtnText) + "\n      ")])], 1)])]) : e._e()
                },
                D = [],
                U = i("cf20"),
                F = i("5321"),
                H = i("f191"),
                M = {
                    name: "PlayVideoLayerCallApp",
                    components: {
                        PlayButtonDown: U["a"]
                    },
                    props: {
                        redirect: {
                            type: Boolean,
                            default: !0
                        },
                        channelId: {
                            type: Number,
                            default: 0
                        },
                        contentType: {
                            type: Number,
                            default: 0
                        },
                        purchaseType: {
                            type: Number,
                            default: 0
                        },
                        imageUrl: {
                            type: String,
                            default: ""
                        },
                        isEnableAlbumPlay: {
                            type: Boolean,
                            default: !0
                        },
                        limitFilter: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            enable: !1,
                            hasErrorTip: !1,
                            limitShow: !1
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["loadInfo"]), {
                        show: function () {
                            return this.enable && !this.isEnableAlbumPlay && 3 !== this.contentType && !this.hasErrorTip && !this.limitShow
                        }, loginText: function () {
                            return 0 !== this.purchaseType ? "VIP登录可观看" : "登录可观看"
                        }, BtnText: function () {
                            return 0 !== this.purchaseType ? "前往APP观看" : "APP免登录观看"
                        }
                    }),
                    watch: {
                        show: function (e) {
                            e && (this.$parent.pause(), Object(F["h"])({
                                block: "h5_block_xuanjiAPP"
                            }), this.$parent.$emit("layerShow", {
                                type: "loginOrApp"
                            }))
                        }, "loadInfo.qipuId": function (e, t) {
                            this.enable = !1, this.hasErrorTip = !1, this.$player.showVideo();
                            var i = f["a"].getCurVideo() || {};
                            this.enable = "albumList" === i.card && !this.redirect
                        }
                    },
                    beforeMount: function () {
                        var e = this,
                            t = this.$parent;
                        t.$on("created", function () {
                            e.$player = t, t.$on("videoChanged", function () {
                                e.show && !e.limitShow && (t.clear(), t.hideVideo())
                            }), t.$on("loaded", function (t) {
                                e.limitShow = Object(H["a"])(t.videoInfo, "", e.limitFilter)
                            }), t.$on("sourceTypeChange", function (t) {
                                var i = t.type;
                                e.hasErrorTip = 0 !== i
                            }), t.$on("layerShow", function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    i = t.type;
                                e.hasErrorTip = !["loginOrApp", "network"].includes(i)
                            })
                        })
                    }
                },
                Q = M,
                G = Object(y["a"])(Q, B, D, !1, null, null, null),
                W = G.exports,
                J = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return e.show ? i("div", {
                        on: {
                            click: function (t) {
                                e.show = !1
                            }
                        }
                    }, [e.isShaoer ? i("a", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "807232_kids_float",
                            expression: "'807232_kids_float'"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "807232_kids_float",
                            expression: "'807232_kids_float'"
                        }],
                        staticClass: "m-suspend-banner qibabu-banner",
                        style: "background-image: url(" + e.playerBanner.qbb_float + ")",
                        attrs: {
                            href: e.playerBanner.qbb_skipURL
                        }
                    }) : e.isDongman ? i("ButtonDown", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "903214_badaxiazai",
                            expression: "'903214_badaxiazai'"
                        }, {
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "903214_badaxiazai",
                            expression: "'903214_badaxiazai'"
                        }],
                        staticClass: "m-suspend-banner qibabu-banner",
                        staticStyle: {
                            "background-image": "url(//www.iqiyipic.com/common/fix/h5-aura/dongman-down.png)"
                        },
                        attrs: {
                            tag: "a",
                            "to-page": "custom",
                            "schema-url": "iqiyi-acg://com.qiyi.acg?target=main&s1=basem_ph",
                            "down-app-android-url": "//mbdapp.iqiyi.com/j/acg/acg_13166.apk",
                            "down-app-ios-url": "//itunes.apple.com/cn/app/id1317763917",
                            href: "javascript:void(0);"
                        }
                    }) : e._e()], 1) : e._e()
                },
                X = [],
                Y = i("0a0d"),
                Z = i.n(Y),
                K = i("4f30"),
                ee = i("38ff"),
                te = i("bfde"),
                ie = {
                    name: "PlayFloatIcon",
                    components: {
                        ButtonDown: ee["a"]
                    },
                    data: function () {
                        return {
                            show: !1
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["playerBanner", "videoInfo"]), {
                        isShaoer: function () {
                            return this.videoInfo.cid === +K["CHANNEL_SHAOER"] && !Object(te["b"])()
                        }, isDongman: function () {
                            return this.videoInfo.cid === +K["CHANNEL_DONGMAN"] && !Object(te["b"])()
                        }, storageName: function () {
                            return "play_float_icon_" + this.videoInfo.cid
                        }
                    }),
                    mounted: function () {
                        if (this.isShaoer || this.isDongman) {
                            var e = P["L"].getItem(this.storageName),
                                t = Z()();
                            !e || t - e > 864e5 ? (P["L"].setItem(this.storageName, t), this.show = !0) : this.show = !1
                        }
                    }
                },
                ae = ie,
                ne = Object(y["a"])(ae, J, X, !1, null, null, null),
                se = ne.exports,
                oe = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "702201_episode",
                            expression: "'702201_episode'"
                        }, {
                            name: "show",
                            rawName: "v-show",
                            value: e.videoInfo,
                            expression: "videoInfo"
                        }],
                        staticClass: "m-box",
                        attrs: {
                            name: "m-albumList"
                        }
                    }, [i("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [i("section", {
                        class: [{
                            "m-title m-title-anthology": "horizontal" === e.episodeType
                        }, {
                            "m-title m-title-album": "vertical" === e.episodeType
                        }]
                    }, [i("h3", {
                        staticClass: "c-title-des"
                    }, [e._v(e._s(e.videoTitle))]), i("span", {
                        staticClass: "c-des",
                        on: {
                            click: e.showAlbumLayer
                        }
                    }, [e._v("\n        " + e._s(e.updateStrategy) + "\n        "), i("i", {
                        staticClass: "c-glyphicon c-glyphicon-arrowRight"
                    })])])]), i("EpisodeDigit", e._b({
                        attrs: {
                            "is-load": e.isLoad,
                            "episode-type": e.episodeType,
                            "video-info": e.videoInfo,
                            "cur-tvid": e.curTvid,
                            "album-id": e.albumId,
                            "page-size": e.pageSize,
                            "video-list": e.videoList,
                            "album-info": e.albumInfo,
                            "qipu-id": e.qipuId
                        }
                    }, "EpisodeDigit", e.$attrs, !1))], 1)
                },
                re = [],
                le = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "m-box-items m-box-items-full"
                    }, [e.videos && e.videos.length ? i("section", {
                        directives: [{
                            name: "pingback",
                            rawName: "v-pingback",
                            value: "605251_episode",
                            expression: "'605251_episode'"
                        }],
                        class: [{
                            "m-album-num m-sliding": "horizontal" === e.episodeType
                        }, {
                            "m-album-num clearfix": "vertical" === e.episodeType
                        }],
                        attrs: {
                            name: "m-digit"
                        }
                    }, [i("ScrollLoad", {
                        attrs: {
                            callback: e.scrollLoadPage,
                            "load-completed": e.loadCompleted,
                            length: e.length,
                            "qipu-id": e.videoInfo.qipuId,
                            "layer-open": e.layerOpen,
                            "is-load-more": !0,
                            tag: "section"
                        },
                        on: {
                            loadFailure: e.onLoadFailure
                        }
                    }, [i("div", {
                        class: [{
                            "m-sliding-list": "horizontal" === e.episodeType
                        }],
                        staticStyle: {
                            transform: "translate(0px, 0px) scale(1)"
                        }
                    }, e._l(e.videos, function (t, a) {
                        return i("DigitNumItem", {
                            key: t.id + "_" + a + "_album",
                            staticClass: "c-album-item",
                            class: {
                                selected: e.curTvid === t.qipuId
                            },
                            attrs: {
                                selected: e.curTvid === t.qipuId,
                                "play-options": {
                                    continuous: e.continuous,
                                    card: "albumList",
                                    action: "upsert",
                                    selectClass: "selected",
                                    qipuId: t.qipuId,
                                    index: t.index,
                                    url: t.pageUrl,
                                    vfrm: e.vfrm,
                                    redirect: !1,
                                    rseat: "605251_episode",
                                    next: e.callNext.bind(this)
                                },
                                "click-handle": e.toggleVideoClick.bind(this),
                                video: t
                            }
                        })
                    }), 1)])], 1) : e.isLoad ? i("section", {
                        staticClass: "m-loading-info"
                    }, [i("div", {
                        staticClass: "c-info"
                    }, [e._v("当前剧集目前暂无内容或版权，请持续关注更新")])]) : e._e()])
                },
                ce = [],
                ue = (i("a481"), i("7514"), i("a745")),
                de = i.n(ue),
                pe = (i("20d6"), i("e814")),
                he = i.n(pe),
                me = i("795b"),
                fe = i.n(me),
                ge = i("bd86"),
                ve = i("1d52"),
                be = i("6e73"),
                ye = i("b2e7"),
                Ie = i("3a65"),
                _e = {
                    name: "EpisodeDigit",
                    components: {
                        ScrollLoad: be["a"],
                        DigitNumItem: Ie["a"]
                    },
                    props: {
                        curTvid: {
                            type: Number,
                            default: 0
                        },
                        vfrm: {
                            type: String,
                            default: ""
                        },
                        episodeType: {
                            type: String,
                            default: ""
                        },
                        albumId: {
                            type: Number,
                            default: 0
                        },
                        pageSize: {
                            type: Number,
                            default: 0
                        },
                        albumInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        videoList: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        isLoad: {
                            type: Boolean,
                            default: !1
                        },
                        continuous: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            loadCompleted: !1,
                            hasLoadPage: [],
                            layerVideos: [],
                            loadVideos: [],
                            rightPage: 1,
                            leftPage: 1,
                            nextPage: 0,
                            cacheQipuId: 0,
                            isShowLayer: !1,
                            isScroll: !1
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["layerOpen", "albumListInfo", "layerPage"]), {
                        videos: function () {
                            var e = this.layerVideos.length ? this.layerVideos : this.formatVideos(this.videoList.videos, this.videoList.currentPage);
                            return this.loadVideos.length ? this.loadVideos : e
                        }, length: function () {
                            return this.videos.length
                        }, updateInfo: function () {
                            var e = Object(h["o"])(this.albumInfo);
                            return e
                        }, isAlbumList: function () {
                            var e = f["a"].getCurVideo() || {},
                                t = "albumList" === e.card;
                            return t
                        }
                    }),
                    watch: {
                        layerPage: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t, i) {
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (t === i || !t) {
                                            e.next = 10;
                                            break
                                        }
                                        return this.layerVideos = this.albumListInfo[t], this.loadVideos = [], this.rightPage = t, this.hasLoadPage = [], this.isShowLayer = !0, this.hasLoadPage.push(t), this.isScroll = !1, e.next = 10, this.loadAlbum(t);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t(t, i) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    },
                    beforeMount: function () {
                        this.initVideos(), this.$store.dispatch("play/albumListInfo", Object(ge["a"])({}, this.rightPage, this.formatVideos(this.videoList.videos, this.videoList.currentPage)))
                    }, mounted: function () {
                        var e = {
                            card: "albumList",
                            action: "update",
                            qipuId: this.videoInfo.qipuId
                        };
                        this.cacheQipuId = this.albumId, f["a"].setCurVideo(e)
                    }, methods: {
                        initVideos: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                                var t;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.rightPage = this.videoList.currentPage, t = this.rightPage, this.videoList.videos.length) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, this.loadAlbum(t);
                                    case 5:
                                        return this.hasLoadPage.push(t), e.next = 8, this.loadPrePage(t);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        loadPrePage: function (e) {
                            if (e > 1) return this.leftPage = e - 1, this.loadAlbum(this.leftPage, !0)
                        }, scrollLoadPage: function (e) {
                            var t = e.scrollToRight;
                            this.isScroll = !0, t ? this.rightPage = this.rightPage + 1 : this.leftPage = this.leftPage - 1;
                            var i = t ? this.rightPage : this.leftPage;
                            return i < 1 || i > this.videoList.totalPages || this.hasLoadPage.indexOf(i) > -1 ? fe.a.resolve() : this.loadAlbum(i, !t)
                        }, callNext: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t) {
                                var i, a, n, s;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        for (a in i = t.curVideo, this.albumListInfo)
                                            for (n = 0; n < this.albumListInfo[a].length; n++) this.albumListInfo[a][n].qipuId === i.qipuId && (this.nextPage = he()(a));
                                        if (this.albumListInfo[this.nextPage] && !(this.nextPage >= this.videoList.totalPages)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (s = this.albumListInfo[this.nextPage].findIndex(function (e) {
                                            return e.qipuId === i.qipuId
                                        }) + 1, s !== this.albumListInfo[this.nextPage].length) {
                                            e.next = 11;
                                            break
                                        }
                                        if (!(this.hasLoadPage.indexOf(this.nextPage + 1) > -1)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        return this.hasLoadPage.push(this.nextPage + 1), e.next = 11, this.loadAlbum(this.nextPage + 1, !1);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getVideos: function (e, t, i) {
                            this.$store.dispatch("play/albumListInfo", Object(ge["a"])({}, t, e)), t > this.videoList.currentPage ? this.isShowLayer ? (this.resetVideo(e, t), this.loadVideos = this.loadVideos) : (this.loadVideos.length || (this.loadVideos = this.videoList.videos), this.loadVideos = i ? e.concat(this.loadVideos) : this.loadVideos.concat(e)) : this.isShowLayer ? this.resetVideo(e, t) : (this.loadVideos.length || (this.loadVideos = this.videoList.videos), i = this.isScroll ? i : t < this.videoList.currentPage, this.loadVideos = i ? e.concat(this.loadVideos) : this.loadVideos.concat(e)), this.hasLoadPage.push(t)
                        }, loadAlbum: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t, i) {
                                var a, n, s, o;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.albumListInfo[t]) {
                                            e.next = 5;
                                            break
                                        }
                                        a = this.formatVideos(this.albumListInfo[t], t), this.getVideos(a, t, i), e.next = 11;
                                        break;
                                    case 5:
                                        return n = {
                                            albumId: 0 === this.cacheQipuId ? this.albumId : this.cacheQipuId,
                                            size: this.pageSize,
                                            page: t,
                                            updateInfo: this.updateInfo,
                                            needVipPrevue: !Object(ye["M"])()
                                        }, e.next = 8, Object(ve["a"])(n);
                                    case 8:
                                        s = e.sent, o = this.formatVideos(s.videos, t), this.getVideos(o, t, i);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t(t, i) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetVideo: function (e, t) {
                            this.loadVideos = e, this.isShowLayer = !1, this.rightPage = t, this.leftPage = t
                        }, onLoadFailure: function (e) {
                            this.loadCompleted = !0
                        }, formatVideos: function (e, t) {
                            var i = this;
                            if (e) {
                                var a = e,
                                    n = e.updateInfo;
                                return de()(a) && a.length ? (a.forEach(function (e, a) {
                                    e.index = Object(ve["c"])(t, a), e.isNew = Object(h["w"])(e, n || i.updateInfo), e.upperRightCorner = Object(h["j"])(e), e.order = e.pd, e.title = i.title(e), e.selected = i.videoInfo.qipuId === e.qipuId
                                }, this), a) : []
                            }
                        }, title: function (e) {
                            var t = this.formatTitle(e.shortTitle);
                            return (e.order ? "第".concat(e.order, "集") : "") + (t ? ": " + t : "")
                        }, formatTitle: function (e) {
                            var t = [/第[\d]*集/, /[\d]*\./, /[\d]*、/, /[\d]*\s/];
                            return t.find(function (t) {
                                t.test(e) && (e = e.replace(t, ""))
                            }), e
                        }, toggleVideoClick: function () {
                            this.$store.dispatch("play/layerPage", this.page)
                        }
                    }
                },
                we = _e,
                Le = Object(y["a"])(we, le, ce, !1, null, null, null),
                ke = Le.exports,
                xe = {
                    name: "EpisodeCard",
                    components: {
                        EpisodeDigit: ke
                    },
                    props: {
                        channelId: {
                            type: Number,
                            default: 2
                        },
                        pageSize: {
                            type: Number,
                            default: 10
                        },
                        albumId: {
                            type: Number,
                            default: 0
                        },
                        showContent: {
                            type: String,
                            default: ""
                        },
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        episodeType: {
                            type: String,
                            default: ""
                        },
                        curTvid: {
                            type: Number,
                            default: 0
                        },
                        updateStrategy: {
                            type: String,
                            default: ""
                        },
                        albumInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        videoList: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        videoTitle: {
                            type: String,
                            default: ""
                        },
                        qipuId: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            isLoad: !1
                        }
                    }, methods: {
                        showAlbumLayer: function () {
                            this.$emit("showAlbumLayer")
                        }
                    }
                },
                Pe = xe,
                Ce = Object(y["a"])(Pe, oe, re, !1, null, null, null),
                Se = Ce.exports,
                Oe = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("PlayInfoLayer", e._g(e._b({
                        style: "overflow: hidden",
                        attrs: {
                            id: "PlayAlbumLayer",
                            "associated-id": e.videoInfo.qipuId,
                            "pop-class": "m-episode-pop",
                            name: "m-albumListLayer"
                        },
                        scopedSlots: e._u([{
                            key: "content",
                            fn: function () {
                                return [i("section", {
                                    ref: "title",
                                    staticClass: "g-tab-num g-tab-txt"
                                }, [i("div", {
                                    staticClass: "m-tab-num m-sliding"
                                }, [i("div", {
                                    staticClass: "m-tab-num-list m-sliding-list",
                                    staticStyle: {
                                        "-webkit-transform": "translate(0px, 0px) scale(1)",
                                        transform: "translate(0px, 0px) scale(1)"
                                    }
                                }, [i("span", {
                                    class: ["c-tab-item", {
                                        selected: e.isNumList
                                    }],
                                    attrs: {
                                        name: "m-digit"
                                    },
                                    on: {
                                        click: function (t) {
                                            return e.changeListType("digit")
                                        }
                                    }
                                }, [e._v("选集")]), i("span", {
                                    directives: [{
                                        name: "pingback",
                                        rawName: "v-pingback",
                                        value: "810291_xjfjtab",
                                        expression: "'810291_xjfjtab'"
                                    }],
                                    class: ["c-tab-item", {
                                        selected: e.isTextList
                                    }],
                                    attrs: {
                                        name: "m-text"
                                    },
                                    on: {
                                        click: function (t) {
                                            return e.changeListType("text")
                                        }
                                    }
                                }, [e._v("分集简介")])])])]), i("section", {
                                    ref: "tab",
                                    staticClass: "g-tab-num g-tab-episodeNum"
                                }, [i("VideoTabScroll", {
                                    staticClass: "m-tab-num m-sliding",
                                    attrs: {
                                        "list-length": e.videoList.totalPages,
                                        "scroll-x": !0
                                    }
                                }, [i("VideoEpisodeTabs", {
                                    attrs: {
                                        "video-info": e.pageInfo,
                                        "paging-type": "group"
                                    },
                                    on: {
                                        changeTag: e.toggleChangeTag
                                    }
                                })], 1)], 1), e.isNumList ? i("PlayPositionLayer", {
                                    attrs: {
                                        "cur-page": e.page
                                    }
                                }, [i("div", {
                                    staticClass: "m-album-num clearfix"
                                }, e._l(e.videos, function (t, a) {
                                    return i("DigitNumItem", {
                                        key: t.id + "_" + a + "_albumlayer",
                                        staticClass: "c-album-item",
                                        class: {
                                            selected: e.videoInfo.qipuId === t.qipuId
                                        },
                                        attrs: {
                                            selected: e.videoInfo.qipuId === t.qipuId,
                                            "play-options": {
                                                continuous: e.continuous,
                                                card: "albumList",
                                                action: "upsert",
                                                selectClass: "selected",
                                                qipuId: t.qipuId,
                                                index: t.index,
                                                url: t.pageUrl,
                                                redirect: !1
                                            },
                                            "click-handle": e.toggleVideoClick.bind(this),
                                            video: t
                                        }
                                    })
                                }), 1)]) : e.isTextList ? i("PlayPositionLayer", {
                                    attrs: {
                                        "cur-page": e.page
                                    }
                                }, [i("EpisodeText", {
                                    attrs: {
                                        videos: e.videos,
                                        "is-load": e.isLoad,
                                        "video-info": e.videoInfo,
                                        "cur-page": e.page,
                                        continuous: e.continuous
                                    }
                                })], 1) : e._e()]
                            }, proxy: !0
                        }])
                    }, "PlayInfoLayer", e.$attrs, !1), e.$listeners))
                },
                je = [],
                Ve = i("9bf7"),
                Te = i("d4db"),
                Ne = i("dbce"),
                Ae = i("1d21"),
                qe = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", [e.videos && e.videos.length ? i("section", {
                        staticClass: "c-dramasList m-episode-intro",
                        staticStyle: {
                            overflow: "scroll-y"
                        },
                        attrs: {
                            name: "m-text"
                        }
                    }, e._l(e.videos, function (t, a) {
                        return i("div", {
                            key: t.id + "_" + a + "_albumlayer",
                            attrs: {
                                title: t.title
                            }
                        }, [i("DigitItem", {
                            staticClass: "c-title-xs",
                            class: t.qipuId === e.videoInfo.qipuId ? "selected" : "",
                            attrs: {
                                "play-options": {
                                    card: "albumList",
                                    continuous: e.isLogin,
                                    redirect: !1,
                                    action: "upsert",
                                    url: t.pageUrl,
                                    qipuId: t.qipuId,
                                    index: t.index,
                                    vfrm: e.vfrm
                                },
                                video: t,
                                "click-handle": e.toggleVideoClick.bind(this)
                            }
                        }, [i("span", {
                            staticClass: "video-status"
                        }, [i("i", {
                            staticClass: "c-playPage-icon c-playPage-play"
                        })]), t.subTitle ? i("span", [i("span", {
                            staticClass: "album-info"
                        }, [e._v(e._s(t.subTitle))])]) : i("span", [i("span", {
                            staticClass: "album-info"
                        }, [e._v(e._s(t.pd))]), e._v(e._s(t.vt || t.shortTitle) + "\n        ")])]), t.desc ? i("div", {
                            staticClass: "info",
                            attrs: {
                                "data-descQipuID": t.qipuId
                            }
                        }, [e._v("\n        " + e._s(t.desc) + "\n      ")]) : e._e()], 1)
                    }), 0) : e.isLoad ? i("section", {
                        staticClass: "m-loading-info"
                    }, [i("div", {
                        staticClass: "c-info"
                    }, [e._v("当前剧集目前暂无内容或版权，请持续关注更新")])]) : e._e()])
                },
                ze = [],
                Ee = i("48e0"),
                Re = {
                    name: "EpisodeText",
                    components: {
                        DigitItem: Ee["a"]
                    },
                    props: {
                        videos: {
                            type: Array,
                            default: function () {
                                return []
                            }
                        },
                        vfrm: {
                            type: String,
                            default: ""
                        },
                        isLoad: {
                            type: Boolean,
                            default: !1
                        },
                        videoInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        curPage: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            isLogin: Object(ye["M"])()
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["albumListInfo", "layerOpen", "videoList", "layerPage"]), {
                        selectIndex: function () {
                            return this.videoInfo.order
                        }
                    }),
                    watch: {
                        page: function (e, t) {
                            e !== t && (this.videos = this.albumListInfo[this.page])
                        }, layerOpen: function (e) {
                            e && (this.page = this.getPage(), this.videos = this.albumListInfo[this.page])
                        }
                    },
                    methods: {
                        getPage: function () {
                            return this.selectIndex ? Math.ceil(this.selectIndex / this.videoList.pageSize) : this.videoList.currentPage
                        }, toggleVideoClick: function () {
                            this.$store.dispatch("play/layerPage", this.curPage)
                        }
                    }
                },
                $e = Re,
                Be = Object(y["a"])($e, qe, ze, !1, null, null, null),
                De = Be.exports,
                Ue = {
                    name: "EpisodeLayer",
                    components: {
                        PlayInfoLayer: Te["a"],
                        VideoEpisodeTabs: Ve["a"],
                        PlayPositionLayer: Ne["a"],
                        VideoTabScroll: Ae["a"],
                        EpisodeText: De,
                        DigitNumItem: Ie["a"]
                    },
                    props: {
                        albumInfo: {
                            type: Object,
                            default: function () {
                                return {}
                            }
                        },
                        continuous: {
                            type: Boolean,
                            default: !0
                        },
                        qipuId: {
                            type: Number,
                            default: 0
                        },
                        albumId: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            page: 1,
                            videos: [],
                            pageInfo: {},
                            listType: "digit",
                            isLoad: !1
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["videoInfo", "subTemplate", "videoList", "albumListInfo", "layerOpen"]), {
                        selectIndex: function () {
                            return this.videoInfo.order
                        }, isNumList: function () {
                            return "digit" === this.listType
                        }, isTextList: function () {
                            return "text" === this.listType
                        }, updateStatus: function () {
                            var e = this.albumInfo,
                                t = e.videoCount;
                            return this.subTemplate.album && t && e.latestVideoOrder ? t === e.latestVideoOrder ? "".concat(t, "集全") : t > e.latestVideoOrder ? "更新至".concat(e.latestVideoOrder, "集/共").concat(t, "集全") : "更新至".concat(e.latestVideoOrder, "集") : this.subTemplate.short ? this.videoInfo.issueTime + "发布" : ""
                        }, updateInfo: function () {
                            var e = Object(h["o"])(this.albumInfo);
                            return e
                        }, isAlbumList: function () {
                            var e = f["a"].getCurVideo() || {},
                                t = "albumList" === e.card;
                            return t
                        }
                    }),
                    watch: {
                        page: function (e, t) {
                            e !== t && (this.videos = this.albumListInfo[this.page])
                        }, layerOpen: function (e) {
                            e && (this.page = this.getPage(), this.pageInfo = {
                                currentPage: this.page,
                                pageSize: this.videoList.pageSize,
                                total: this.videoList.total
                            }, this.videos = this.albumListInfo[this.page])
                        }
                    },
                    mounted: function () {
                        this.cacheAid = this.videoInfo.aid, this.cacheQipuId = this.albumId
                    }, methods: {
                        title: function (e) {
                            if (this.subTemplate.album) {
                                var t = this.formatTitle(e.shortTitle);
                                return (e.order ? "第".concat(e.order, "集") : "") + (t ? ": " + t : "")
                            }
                            return e.videoName || e.shortTitle
                        }, formatTitle: function (e) {
                            var t = [/第[\d]*集/, /[\d]*\./, /[\d]*、/, /[\d]*\s/];
                            return t.find(function (t) {
                                t.test(e) && (e = e.replace(t, ""))
                            }), e
                        }, getPage: function () {
                            return this.selectIndex ? Math.ceil(this.selectIndex / this.videoList.pageSize) : this.videoList.currentPage
                        }, getVideos: function (e, t) {
                            this.$store.dispatch("play/albumListInfo", Object(ge["a"])({}, t, e)), this.videos = e
                        }, toggleChangeTag: function () {
                            var e = Object(s["a"])(regeneratorRuntime.mark(function e(t) {
                                var i, a, n, s;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.page = t, this.isLoad = !0, !this.albumListInfo[t]) {
                                            e.next = 7;
                                            break
                                        }
                                        i = this.formatVideos(this.albumListInfo[t], t), this.getVideos(i, t), e.next = 13;
                                        break;
                                    case 7:
                                        return a = {
                                            albumId: 0 === this.cacheQipuId ? this.albumId : this.cacheQipuId,
                                            size: this.videoList.pageSize,
                                            page: t,
                                            updateInfo: this.updateInfo,
                                            needPrevue: !0
                                        }, e.next = 10, Object(ve["a"])(a);
                                    case 10:
                                        n = e.sent, s = this.formatVideos(n.videos, t), this.getVideos(s, t);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                    }
                                }, e, this)
                            }));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        formatVideos: function (e, t) {
                            var i = this;
                            if (e) {
                                var a = e,
                                    n = e.updateInfo;
                                return de()(a) && a.length ? (a.forEach(function (e, a) {
                                    e.index = Object(ve["c"])(t, a), e.isNew = Object(h["w"])(e, n || i.updateInfo), e.upperRightCorner = Object(h["j"])(e), e.order = e.pd, e.title = i.title(e)
                                }), a) : []
                            }
                        }, toggleVideoClick: function () {
                            this.$store.dispatch("play/layerPage", this.page)
                        }, changeListType: function (e) {
                            this.listType = e
                        }
                    }
                },
                Fe = Ue,
                He = Object(y["a"])(Fe, Oe, je, !1, null, null, null),
                Me = He.exports,
                Qe = i("12a0"),
                Ge = i("8b4a"),
                We = i("666d"),
                Je = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", [i("div", {
                        ref: "content"
                    }, [e.inited || e.loading ? e._t("firstPaint") : e._e(), e.inited || e.loading ? e._t("content") : e._e()], 2), i("div", {
                        ref: "skeleton"
                    }, [e.inited ? e._e() : e._t("skeleton")], 2), i("section", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        staticClass: "m-hotSpot-update"
                    }, [e._m(0)]), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showMoreBtn && !e.inited && e.needLoad,
                            expression: "showMoreBtn && !inited && needLoad"
                        }],
                        staticClass: "m-box-items m-box-items-full",
                        on: {
                            click: e.startLoading
                        }
                    }, [e._m(1)])])
                },
                Xe = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i("div", {
                            staticClass: "inner"
                        }, [i("i", {
                            staticClass: "update-icon"
                        }), i("span", {
                            staticClass: "c-info"
                        }, [e._v("正在全力加载")])])
                    },
                    function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i("section", {
                            staticClass: "m-linkMore"
                        }, [i("a", {
                            staticClass: "m-link link-hand",
                            attrs: {
                                href: "javascript:void(0);"
                            }
                        }, [i("i", {
                            staticClass: "icon-handMore"
                        }), e._v("点击查看更多\n      ")])])
                    }
                ],
                Ye = i("c0ba"),
                Ze = {
                    name: "LazyLoad",
                    props: {
                        timeout: {
                            type: Number,
                            default: -1
                        },
                        showMoreBtn: {
                            type: Boolean,
                            default: !1
                        },
                        needLoad: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function () {
                        return {
                            inited: !1,
                            loading: !1
                        }
                    }, mounted: function () {
                        var e = this;
                        this.needLoad && (this.interObserver = new Ye["b"](function (t, i) {
                            e.startLoading()
                        }, {
                            key: "LazyLoad"
                        }), this.interObserver.observe(this.$refs.skeleton, {}), this.timeout < 0 || setTimeout(function () {
                            e.startLoading()
                        }, this.timeout))
                    }, beforeDestroy: function () {
                        this.interObserver.unobserve(this.$refs.skeleton)
                    }, methods: {
                        startLoading: function () {
                            var e = this;
                            this.loading = !0, this.timer && clearInterval(this.timer), this.timer = setInterval(function () {
                                var t = e.$refs.content;
                                t && t.offsetHeight && (e.inited = !0, e.loading = !1, clearInterval(e.timer))
                            }, 500)
                        }
                    }
                },
                Ke = Ze,
                et = Object(y["a"])(Ke, Je, Xe, !1, null, null, null),
                tt = et.exports,
                it = i("2171"),
                at = i("b771"),
                nt = i("a466"),
                st = i("ba2c"),
                ot = i("9e5e"),
                rt = (i("7f7f"), {
                    data: [],
                    params: {},
                    pageSize: 75,
                    callback: [],
                    chachePage: {},
                    init: function (e) {
                        this.params = e, this.pageSize = e.pageSize || 75
                    }, getData: function (e, t, i, a) {
                        if (this.checkData(e, t, !1)) a(this.data.slice(e, t + 1));
                        else {
                            this.callback.push({
                                from: e,
                                to: t,
                                callback: a
                            });
                            var n = he()(e / this.pageSize, 10) + 1,
                                s = he()(t / this.pageSize, 10) + 1;
                            while (n <= s) this.getPageData(n++, i)
                        }
                    }, getPageData: function () {
                        var e = Object(s["a"])(regeneratorRuntime.mark(function e(t, i) {
                            var a, n, s, o, r, l, c;
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
                                    this.copyData(this.chachePage[t], !1), e.next = 9;
                                    break;
                                case 5:
                                    return e.next = 7, Object(ve["a"])(a);
                                case 7:
                                    if (n = e.sent, n) s = n.total, o = n.sets, r = !0, s = Math.min(s, this.pageSize), s === o && (r = !1), this.copyData(n.videos, r), this.chachePage[t] = n.videos;
                                    else
                                        for (l = this.callback, c = 0; c < l.length; c++) l[c] && this.checkData(l[c].from, l[c].to, !0) && (l[c].callback(null), l[c] = null);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t(t, i) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    dataChanged: function (e) {
                        for (var t = this.callback, i = 0; i < t.length; i++) t[i] && this.checkData(t[i].from, t[i].to, e) && (t[i].callback(this.data.slice(t[i].from, t[i].to + 1)), t[i] = null)
                    }, checkData: function (e, t, i) {
                        return i || this.data[e] && this.data[t]
                    }, copyData: function (e, t) {
                        for (var i = e.length, a = 0; a < i; a++) {
                            var n = e[a].pd - 1;
                            this.data[n] = e[a]
                        }
                        this.dataChanged(t)
                    }
                }),
                lt = rt,
                ct = i("784b"),
                ut = !0,
                dt = "",
                pt = [],
                ht = 0,
                mt = 1,
                ft = {
                    data: [],
                    callback: [],
                    init: function (e) {
                        var t = e.albumBossStatus,
                            i = void 0 === t ? 0 : t,
                            a = e.aid,
                            n = e.rateList,
                            s = e.order,
                            o = void 0 === s ? 1 : s,
                            r = e.allAlbum,
                            l = void 0 === r ? 0 : r;
                        ut = 0 === i, dt = a, pt = n, mt = o, ht = l
                    }, getAlbums: function (e, t) {
                        if (e) {
                            var i = e.from,
                                a = e.to;
                            lt.getData(i - 1, a - 1, dt, function (e) {
                                var n = {};
                                n.list = gt(e), n.id = "".concat(dt, "-").concat(i, "-").concat(a), t(n)
                            })
                        }
                    }, getVideoRate: function (e) {
                        var t = [];
                        pt && pt.length > 0 && pt.forEach(function (e) {
                            var i = Object(ct["b"])(e.bid);
                            if (i) {
                                var a = i.name;
                                e._vd = a, e._fle = "", e.selected = e._selected, e.isCallApp = !1, e.vd = he()(i._rate), t.push(e)
                            }
                        }), e(t)
                    }, getAlbumSum: function (e) {
                        return ut ? ht : 0
                    }, getCurrentAlbum: function (e) {
                        e(mt)
                    }
                },
                gt = function (e) {
                    return e && e.map(function (e) {
                        return e.mdown = e.mdown || 0, e.wmarkPos = e.wmarkPos || 0, e.vpic = e.qualityImageUrl || "", e.tvQipuId = e.qipuId || "", e.purType = e.purType || 0, e.type = e.type || 0, e.lgh = e.lgh || 0, e.isProduced = e.isQiyiProduced ? 1 : 0, e.vurl = e.pageUrl || "", e.plcdown = e.plcdown || {}, e.timeLength = e.timeLength || 0, e.exclusive = e.exclusive ? 1 : 0, e.pds = e.pds || "", e.vn = e.shortTitle || "", e
                    })
                },
                vt = ft,
                bt = i("aed2"),
                yt = i("f3d8"),
                It = i("5cf8"),
                _t = function () {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return e.isShow && e.recommendQuery.length ? i("div", {
                        directives: [{
                            name: "show-pingback",
                            rawName: "v-show-pingback",
                            value: "h5_block_player_consearch",
                            expression: "'h5_block_player_consearch'"
                        }],
                        staticClass: "m-box"
                    }, [e._m(0), i("section", {
                        staticClass: "m-relatedHotWords"
                    }, [i("ul", {
                        staticClass: "relatedHotWords-list"
                    }, e._l(e.recommendQuery, function (t, a) {
                        return i("li", {
                            directives: [{
                                name: "pingback",
                                rawName: "v-pingback",
                                value: "h5_player_consearch",
                                expression: "'h5_player_consearch'"
                            }],
                            key: a,
                            staticClass: "hotWords-item",
                            on: {
                                click: function (i) {
                                    return e.toHotSearch(t)
                                }
                            }
                        }, [e._v(e._s(t.query))])
                    }), 0)])]) : e._e()
                },
                wt = [
                    function () {
                        var e = this,
                            t = e.$createElement,
                            i = e._self._c || t;
                        return i("div", {
                            staticClass: "m-box-items  m-box-items-full"
                        }, [i("section", {
                            staticClass: "m-title"
                        }, [i("h3", {
                            staticClass: "c-title-des"
                        }, [e._v("相关热搜")])])])
                    }
                ],
                Lt = i("ba45"),
                kt = {
                    name: "PlayRelatedHotWords",
                    data: function () {
                        return {
                            isShow: !1
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["recommendQuery"])),
                    mounted: function () {
                        var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.$GlobalSwitcher.getFilters("player_corrseach", "play");
                                case 2:
                                    this.isShow = e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        getSubType: function () {
                            var e = this.$GlobalSwitcher.getParams("player_corrseach", "play");
                            if (e) return e.subtype
                        }, toHotSearch: function (e) {
                            Object(Lt["z"])({
                                keyword: Object(P["D"])(e.query),
                                source: e.source ? e.source : "h5_rcmd",
                                subtype: this.getSubType()
                            }).catch(function () {
                                Object(Lt["k"])(Object(Lt["m"])())
                            })
                        }
                    }
                },
                xt = kt,
                Pt = Object(y["a"])(xt, _t, wt, !1, null, null, null),
                Ct = Pt.exports,
                St = {
                    name: "PlayLong",
                    components: {
                        PlayVideoRelated: l["a"],
                        PlayLongExtendBar: c["a"],
                        PlayBanner: u["a"],
                        PlayLongAroundVideo: _,
                        PlayVideoSeries: w["a"],
                        VideoRecommend: V["a"],
                        PlayVideoFragment: L["a"],
                        PlayLongSoundTrack: j,
                        PlayLongActivityEntry: R,
                        PlayRelevantBanner: $["a"],
                        PlayFloatIcon: se,
                        EpisodeCard: Se,
                        EpisodeLayer: Me,
                        SourceCard: Qe["a"],
                        SourceLayer: Ge["a"],
                        VideoStarCircle: We["a"],
                        PlayLongComment: it["a"],
                        PlayJoinerCard: at["a"],
                        PlayPlatformLimit: st["a"],
                        PlayVideoLayerCallApp: W,
                        LazyLoad: tt,
                        BackTop: ot["a"],
                        PlayFoldVideoInfo: bt["a"],
                        PlayAppBannerShaoer: yt["a"],
                        PlayBottomAppHot: It["a"],
                        PlayRelatedHotWords: Ct
                    },
                    mixins: [nt["a"]],
                    data: function () {
                        return {
                            isShowAlbumLayer: !1,
                            isShowSourceLayer: !1,
                            isCommentLoad: !1,
                            isLogin: !!Object(ye["M"])(),
                            showInChannels: [K["CHANNEL_DIANSHIJU"], K["CHANNEL_DONGMAN"], K["CHANNEL_ZONGYI"], K["CHANNEL_SHAOER"]],
                            page: 0,
                            asyncLoad: !1,
                            limitFilter: !1,
                            subtype: "H5qzql_523"
                        }
                    }, computed: Object(o["a"])({}, Object(r["e"])("play", ["videoInfo", "controlInfo", "albumInfo", "userInfo", "subTemplate", "diversionInfo", "videoList", "playInfo", "template", "redirect", "channelId", "playerBanner"]), Object(r["c"])("play", ["showShaoerAppBtn"]), {
                        isEnableAlbumPlay: function () {
                            return !this.showInChannels.includes(this.channelId + "") || this.isLogin || P["p"].baidubox || "undefined" !== typeof document && !!document.referrer && document.referrer.includes("m.baidu.com")
                        }, isCallApp: function () {
                            return this.showInChannels.includes(this.channelId + "")
                        }, recVfrm: function () {
                            return this.albumInfo.isSource ? "30-28-18-7" : "30-26-18-7"
                        }, hotTitle: function () {
                            return this.template.source ? "本期热度" : "热度"
                        }
                    }),
                    mounted: function () {
                        var e = Object(s["a"])(regeneratorRuntime.mark(function e() {
                            var t = this;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.$GlobalSwitcher.getFilters("limitplay", "play");
                                case 2:
                                    this.limitFilter = e.sent, this.diversionInfo && this.diversionInfo.config && this.diversionInfo.config.length > 0 && this.diversionInfo.config.forEach(function (e) {
                                        "limitplay" === e.code && t.limitFilter && (t.subtype = e.subtype)
                                    }), setTimeout(function () {
                                        t.asyncLoad = !0
                                    }, 2e3);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        onVideoReady: function () {
                            this.asyncLoad = !0
                        }, setRateList: function (e) {
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
                                vt.init(i), window["VivoAPI"] = vt
                            }
                        }
                    }
                },
                Ot = St,
                jt = Object(y["a"])(Ot, a, n, !1, null, null, null);
            t["default"] = jt.exports
        }
    }
]);