(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        109: function (e, t, a) {
            "use strict";
            var n = a(6),
                s = a.n(n),
                o = a(9),
                i = a.n(o),
                c = a(0),
                l = a.n(c),
                r = a(22),
                d = a.n(r),
                m = a(60),
                p = a.n(m),
                u = a(4),
                h = (a(261), a(3)),
                g = a(2);
            a(265);
            const y = a(29);
            class b extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "h5_detail_guide",
                        action: {},
                        title: "",
                        subType: ""
                    }
                }
                componentWillMount() {
                    const e = (this.props.comData || {}).dataNode || [],
                        t = e[0] && e[0].data || {};
                    this.setState({
                        action: t.action || {}, title: t.title || "",
                        subType: t.subType || "NORMAL"
                    })
                }
                componentDidMount() {
                    this.props.noCallUp || Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "banner",
                        gmKey: "EXP"
                    })
                }
                render() {
                    return this.props.noCallUp ? null : l.a.createElement("div", {
                        className: "clipboard h5-detail-guide ".concat("VIP" === this.state.subType ? "vip-theme" : ""),
                        onClick: () => {
                            this.callapp()
                        }
                    }, l.a.createElement("a", {
                        className: "text"
                    }, this.state.title))
                }
                callapp() {
                    "JUMP_TO_URL" === this.state.action.type && this.state.action.value ? location.href = this.state.action.value : y && y.default({
                        spmC: this.state.moduleKey,
                        source: "limitedplaybutton",
                        spmD: "banner"
                    })
                }
            }
            var w = Object(u.connect)(e => ({
                noCallUp: e.page.noCallUp
            }))(b);
            a(299);
            const v = a(29);
            class f extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: this.props.comData.type,
                        isClient: !1,
                        Data: ""
                    }
                }
                componentWillMount() {
                    const e = (this.props.comData || {}).dataNode || [],
                        t = e[0] && e[0].data || {};
                    this.setState({
                        Data: t
                    })
                }
                componentDidMount() {
                    this.state.Data.img && Object(g.a)({
                        spmC: "h5_ad_banner",
                        spmD: "show",
                        gmKey: "EXP"
                    }), this.setState({
                        isClient: !0
                    })
                }
                render() {
                    return l.a.createElement("div", {
                        className: "h5-detail-ad"
                    }, l.a.createElement("a", {
                        className: "text clipboard",
                        onClick: () => {
                            this.callapp()
                        }
                    }, l.a.createElement("img", {
                        src: this.state.isClient ? Object(h.useWebp)(this.state.Data.img) : this.state.Data.img,
                        alt: this.state.Data.title
                    })))
                }
                callapp() {
                    const e = this.props.videoMap.isVideo ? this.props.videoMap.videoId : this.props.videoMap.showId;
                    if (Object(g.a)({
                        spmC: "h5_ad_banner",
                        spmD: "show"
                    }), this.state.Data.action && "JUMP_TO_URL" === this.state.Data.action.type && this.state.Data.action.value) location.href = this.state.Data.action.value;
                    else {
                        if (this.props.noCallUp) return;
                        v && v.default({
                            id: e,
                            moduleKey: this.state.moduleKey,
                            pos: "banner"
                        })
                    }
                }
            }
            var E = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp
            }))(f);
            a(300);
            const C = a(29);
            var k = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp
            }))(e => {
                const t = e.videoMap.videoId,
                    a = Object(c.useRef)(null),
                    n = () => {
                        window.location && (window.location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href)))
                    };
                return Object(c.useEffect)(() => {
                    if (e.videoMap.allowComment) {
                        a.current.innerHTML = "", window.ykComment && window.ykComment("YKComment", {
                            operate: 17,
                            text: 8,
                            objectId: t,
                            objectType: "1",
                            source: "",
                            appKey: "b92f45cce7ebabdb1b282d5b3b667162",
                            loginFunc: n,
                            configId: "e691def2ec95644e",
                            launchApp: e => {
                                C && C.default({
                                    spmC: "comment",
                                    spmD: "showmore",
                                    source: "comment"
                                })
                            }
                        });
                        const s = document.querySelector("#YKComment"),
                            o = document.querySelector("#comment-frame");
                        let i = null;
                        window.addEventListener("message", t => {
                            t.data.height && (s && s.setAttribute("style", "height:".concat(t.data.height, "px;")), o && o.setAttribute("style", "width:100%; height:".concat(t.data.height, "px;"))), e.noCallUp && (i && clearTimeout(i), i = setTimeout(() => {
                                document.querySelector("#comment-frame") && document.querySelector("#comment-frame").contentDocument && document.querySelector("#comment-frame").contentDocument.querySelector(".cmt-more-cont") && (document.querySelector("#comment-frame").contentDocument.querySelector(".cmt-more-cont").style.display = "none")
                            }, 800))
                        }, !1), Object(g.a)({
                            spmC: "comment",
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }
                }, [0]), e.videoMap.allowComment && l.a.createElement("div", {
                    id: "YKComment",
                    className: "h5-detail-comment",
                    ref: a
                })
            });
            a(301);
            const S = a(29);
            class N extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        showMod: !0,
                        moduleKey: "jiugongge",
                        pageSize: 9,
                        currentPageNum: 0,
                        showChange: !1,
                        totalList: [],
                        showList: [],
                        isClient: !1,
                        existIds: {}
                    }
                }
                componentWillMount() {
                    const e = (this.props.comData || {}).dataNode || [];
                    let t, a = !1,
                        n = !0;
                    e.map((e, t) => {
                        e.pos = t + 1
                    }), e.length > this.state.pageSize ? (a = !0, t = this.getShowData(e)) : e.length % 3 === 0 ? t = e : n = !1, this.setState({
                        showMod: n,
                        showChange: a,
                        showList: t,
                        totalList: e
                    })
                }
                componentDidMount() {
                    this.state.showMod && (this.setState({
                        isClient: !0
                    }), this.checkElExist(), document.addEventListener("scroll", () => {
                        this.checkElExist()
                    }))
                }
                checkElExist() {
                    if (!document.querySelector("#feed-lists")) return;
                    const e = document.querySelector("#feed-lists").querySelectorAll("li.card-item");
                    if (e.length > 0)
                        for (let t = 0; t < e.length; t++) {
                            const a = e[t],
                                n = a.getAttribute("data-vid") || "",
                                s = 0 === n.indexOf("X"),
                                o = a.getBoundingClientRect();
                            o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds["id_".concat(n)] && (this.state.existIds["id_".concat(n)] = !0, Object(g.a)({
                                id: n,
                                spmC: this.state.moduleKey,
                                spmD: (s ? "vdo_" : "show_") + n,
                                gmKey: "EXP"
                            }))
                        }
                }
                getShowData(e, t, a) {
                    const n = [];
                    if (e = e || this.state.totalList || [], t = Number(t || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(e) && e.length > 0) {
                        const s = e.length,
                            o = t * a,
                            i = t;
                        for (let t = o; t < o + i; t++) {
                            const a = e[t % s];
                            n.push(a)
                        }
                        this.setState({
                            currentPageNum: ++a
                        })
                    }
                    return n
                }
                jump(e = {}) {
                    const t = e.data.action.value;
                    if (!t) return;
                    const a = 0 === t.indexOf("X");
                    S && S.default({
                        id: t,
                        spmC: this.state.moduleKey,
                        source: "jiugongge",
                        spmD: (a ? "vdo_" : "show_") + t
                    })
                }
                change() {
                    const e = this.getShowData();
                    if (e.length > 0) {
                        this.setState({
                            showList: e
                        });
                        const t = this.itemWrap.getBoundingClientRect().top,
                            a = document.body.scrollTop;
                        document.body.scrollTop = a + t, Object(g.a)({
                            spmC: this.state.moduleKey,
                            spmD: "change"
                        })
                    }
                    this.checkElExist()
                }
                render() {
                    return this.props.noCallUp ? null : this.state.showMod && l.a.createElement("div", {
                        className: "h5-detail-recommend",
                        ref: e => {
                            this.itemWrap = e
                        }
                    }, l.a.createElement("h1", {
                        className: "mod-title"
                    }, "\u4e3a\u4f60\u63a8\u8350"), l.a.createElement("div", {
                        className: "card-list clipboard"
                    }, l.a.createElement("ul", {
                        id: "feed-lists"
                    }, this.state.showList.map(e => l.a.createElement(d.a, {
                        height: "2.45rem",
                        offset: 500,
                        key: "card".concat(e.pos)
                    }, l.a.createElement("li", {
                        key: "card".concat(e.pos),
                        className: "card-item",
                        "data-pos": e.pos,
                        "data-vid": e.data && e.data.action && e.data.action.value,
                        onClick: this.jump.bind(this, e)
                    }, l.a.createElement("a", {
                        href: "javascript:void(0);"
                    }, l.a.createElement("div", {
                        className: "section-top"
                    }, l.a.createElement("img", {
                        src: this.state.isClient ? Object(h.useWebp)(e.data.img) : e.data.img
                    }), l.a.createElement("time", null, e.data.summary)), l.a.createElement("div", {
                        className: "section-btm"
                    }, l.a.createElement("h2", null, e.data.title), l.a.createElement("p", null, e.data.subtitle))))))), this.state.showChange && l.a.createElement("div", {
                        className: "change-nextpage",
                        onClick: this.change.bind(this)
                    }, "\u6362\u4e00\u6362", l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png"
                    }))))
                }
            }
            var D = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp
            }))(N);
            a(302);
            const O = a(29);
            class j extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "feed",
                        pageSize: 9,
                        currentPageNum: 0,
                        pos: 0,
                        showChange: !1,
                        totalList: [],
                        showList: [],
                        isClient: !1,
                        existIds: {}
                    }
                }
                componentWillMount() {
                    const e = (this.props.comData || {}).dataNode || [];
                    let t, a = !1;
                    e.map((e, t) => {
                        e.pos = t + 1
                    }), e.length > this.state.pageSize ? (a = !0, t = this.getShowData(e)) : t = e, this.setState({
                        showChange: a,
                        showList: t,
                        totalList: e
                    })
                }
                componentDidMount() {
                    this.setState({
                        isClient: !0
                    }), this.checkElExist(), document.addEventListener("scroll", () => {
                        this.checkElExist()
                    })
                }
                checkElExist() {
                    if (!document.querySelector("#feed-lists")) return;
                    const e = document.querySelector("#feed-lists").querySelectorAll("li.feed-item");
                    if (e.length > 0)
                        for (let t = 0; t < e.length; t++) {
                            const a = e[t],
                                n = a.getAttribute("data-vid") || "",
                                s = 0 === n.indexOf("X"),
                                o = a.getBoundingClientRect();
                            o.top < window.innerHeight && o.bottom > 0 && !this.state.existIds["id_".concat(n)] && (this.state.existIds["id_".concat(n)] = !0, Object(g.a)({
                                id: n,
                                spmC: this.state.moduleKey,
                                spmD: (s ? "vdo_" : "show_") + n,
                                gmKey: "EXP"
                            }))
                        }
                }
                getShowData(e, t, a) {
                    const n = [];
                    if (e = e || this.state.totalList || [], t = Number(t || this.state.pageSize), a = Number(a || this.state.currentPageNum), Array.isArray(e) && e.length > 0) {
                        const s = e.length,
                            o = t * a,
                            i = t;
                        for (let t = o; t < o + i; t++) {
                            if (t >= s) {
                                a = -1;
                                break
                            }
                            const o = e[t];
                            n.push(o)
                        }
                        this.setState({
                            currentPageNum: ++a
                        })
                    }
                    return n
                }
                jump(e = {}) {
                    const t = e.data.action.value;
                    if (!t) return;
                    const a = 0 === t.indexOf("X");
                    O && O.default({
                        id: t,
                        spmC: this.state.moduleKey,
                        source: "feed",
                        spmD: (a ? "vdo_" : "show_") + t
                    })
                }
                change() {
                    const e = this.getShowData();
                    if (e.length > 0) {
                        this.setState({
                            showList: e
                        }), this.checkElExist();
                        const t = this.itemWrap.getBoundingClientRect().top,
                            a = document.body.scrollTop;
                        document.body.scrollTop = a + t, Object(g.a)({
                            spmC: this.state.moduleKey,
                            spmD: "change"
                        })
                    }
                }
                render() {
                    return this.props.noCallUp ? null : l.a.createElement("div", {
                        className: "h5-detail-feed",
                        ref: e => {
                            this.itemWrap = e
                        }
                    }, l.a.createElement("h1", {
                        className: "mod-title"
                    }, "\u4e3a\u4f60\u63a8\u8350"), l.a.createElement("div", {
                        className: "feed-list clipboard"
                    }, l.a.createElement("ul", {
                        id: "feed-lists"
                    }, this.state.showList.map(e => l.a.createElement(d.a, {
                        height: "2.61rem",
                        key: "feed".concat(e.pos)
                    }, l.a.createElement("li", {
                        key: "feed".concat(e.pos),
                        className: "feed-item",
                        "data-pos": e.pos,
                        "data-vid": e.data && e.data.action && e.data.action.value,
                        onClick: this.jump.bind(this, e)
                    }, l.a.createElement("a", {
                        href: "javascript:void(0);"
                    }, l.a.createElement("div", {
                        className: "section-top"
                    }, l.a.createElement("img", {
                        src: this.state.isClient ? Object(h.useWebp)(e.data.img) : e.data.img
                    }), l.a.createElement("h2", null, e.data.title, l.a.createElement("time", null, e.data.summary)),
                    l.a.createElement("i", {
                        className: "heat"
                    }, e.data.totalVv)), l.a.createElement("div", {
                        className: "section-btm"
                    })))))), this.state.showChange && l.a.createElement("div", {
                        className: "change-nextpage",
                        onClick: this.change.bind(this)
                    }, "\u6362\u4e00\u6362", l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1YYyika61gK0jSZFlXXXDKFXa-36-36.png"
                    }))))
                }
            }
            var x = Object(u.connect)(e => ({
                    videoMap: e.page.pageData.videoMap,
                    noCallUp: e.page.noCallUp
                }))(j),
                A = a(14),
                _ = a(19),
                T = a(147);
            a(317);
            const I = a(29);
            class M extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "h5_detail_info",
                        showName: e.videoMap.showName || e.videoMap.videoTitle,
                        introData: {},
                        subscribeData: {},
                        starList: [],
                        isDetail: !1,
                        isOpenCall: !1,
                        briefBtnText: "\u7b80\u4ecb",
                        heatIcon: "",
                        upState: !1,
                        totalUp: e.videoMap.totalUp,
                        isSubscribed: !1
                    }
                }
                componentWillMount() {
                    const e = (this.props.comData || {}).dataNode || [];
                    let t = {},
                        a = {};
                    const n = [];
                    n.diretor = [], n.actor = [], e.map(e => {
                        if (10010 === e.type) {
                            if (t = e.data || {}, t.subTitleList = [], Array.isArray(t.subTitles) && (t.subTitles.map(e => {
                                const a = {};
                                if ("PLAY_VV" === e.subtitleType) {
                                    a.subtitle = e.subtitle || t.heat;
                                    let n = "";
                                    e.extra >= 7 ? n = "https://gw.alicdn.com/tfs/TB1.hX5CNTpK1RjSZR0XXbEwXXa-42-42.png" : e.extra >= 4 ? n = "https://gw.alicdn.com/tfs/TB13PR.CMHqK1RjSZJnXXbNLpXa-42-42.png" : e.extra >= 1 && (n = "https://gw.alicdn.com/tfs/TB1JpF7CFzqK1RjSZSgXXcpAVXa-42-42.png"), this.setState({
                                        heatIcon: n
                                    })
                                } else "GENRE" === e.subtitleType ? a.subtitle = e.subtitle || t.showGenre : a.subtitle = e.subtitle || "";
                                a.subtitleType = e.subtitleType, t.subTitleList.push(a)
                            }), t.scorePrefix && t.socreValue)) {
                                const e = {
                                    subtitleType: "SCORE"
                                };
                                e.subtitle = "".concat(t.socreValue, "\u5206"), t.subTitleList.splice(1, 0, e)
                            }
                        } else 10012 === e.type ? a = e.data || {} : 10011 === e.type && ("\u5bfc\u6f14" === e.data.subtitle ? n.diretor.push(e.data.title) : n.actor.push(e.data.title), n.push(e.data))
                    }), this.setState({
                        introData: t,
                        subscribeData: a,
                        starList: n
                    })
                }
                componentDidMount() {
                    this.getSubscribe(), this.setState({
                        upState: !!window.localStorage["wechatPraiseState_".concat(this.props.videoMap.vId)]
                    }), Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "total",
                        gmKey: "EXP"
                    })
                }
                render() {
                    return l.a.createElement("div", {
                        className: "h5-detail-info"
                    }, l.a.createElement("div", {
                        className: "brief-info"
                    }, l.a.createElement("div", {
                        className: "brief-title",
                        onClick: this.switchDetail.bind(this)
                    }, l.a.createElement("div", {
                        className: "module-name"
                    }, this.state.introData.mark && this.state.introData.mark.data.text && l.a.createElement("span", {
                        className: "icon-".concat(this.state.introData.mark && this.state.introData.mark.data.color)
                    }, this.state.introData.mark.data.text), l.a.createElement("h1", null, this.state.showName)), l.a.createElement("a", {
                        href: "javascript:void(0)",
                        className: "showMore"
                    }, this.state.briefBtnText, l.a.createElement("img", {
                        className: "".concat(this.state.isDetail && "active", " ").concat(this.state.isOpenCall && "iscall"),
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTCsrKysrKy0tLSsrKywsLCsrK3Pa218AAAAGdFJOUwDzOy2l6AsspekAAABdSURBVCjPY2AYhoDZxQCNwcCaJgRhKKYFQIXU0hIVQDSTWFoSXBVEmWIaXBVQFqQMSsHMAClTTIOZCVOGogiiAEURRBmqIrAyVEVgZWiK0KyDKUNXxMBg4swwXAEAoNkVY7GaTioAAAAASUVORK5CYII="
                    }))), l.a.createElement("div", {
                        className: "brief-score"
                    }, this.state.introData.subTitleList && this.state.introData.subTitleList.map((e, t) => e.subtitle && l.a.createElement("span", {
                        className: "".concat("PLAY_VV" === e.subtitleType ? "hotVv" : ""),
                        key: "subtile".concat(t)
                    }, "PLAY_VV" === e.subtitleType ? this.state.heatIcon && l.a.createElement("img", {
                        src: this.state.heatIcon
                    }) || null : t > 0 ? l.a.createElement("span", {
                        className: "divide"
                    }, "/") : "", l.a.createElement("span", null, e.subtitle))))), this.state.isDetail ? l.a.createElement("div", {
                        className: "brief-more"
                    }, this.state.subscribeData.ownerUid && l.a.createElement("div", {
                        className: "subscribe"
                    }, l.a.createElement("a", {
                        href: "//i.youku.com/u/" + this.state.subscribeData.ownerUid,
                        className: "author-container"
                    }, l.a.createElement("img", {
                        src: this.state.subscribeData.img
                    }), l.a.createElement("div", {
                        className: "user-describe"
                    }, l.a.createElement("h3", {
                        className: "title"
                    }, this.state.subscribeData.title), l.a.createElement("p", {
                        className: "subtitle"
                    }, this.state.subscribeData.subtitle))), l.a.createElement("a", {
                        href: "javascript:void(0);",
                        onClick: this.changeSubscribe.bind(this, this.state.isSubscribed),
                        className: "subscribe-btn ".concat(this.state.isSubscribed && "grey-btn")
                    }, this.state.isSubscribed ? "\u5df2\u8ba2\u9605" : "\u8ba2\u9605")), this.state.starList.length > 0 && l.a.createElement("div", {
                        className: "celebrity-group"
                    }, this.state.starList.diretor.length > 0 && l.a.createElement("span", {
                        className: "celebrity-type"
                    }, "\u5bfc\u6f14\uff1a", this.state.starList.diretor.join(",")), this.state.starList.actor.length > 0 && l.a.createElement("span", {
                        className: "celebrity-list"
                    }, "\u4e3b\u6f14\uff1a", this.state.starList.actor.join(","))), l.a.createElement("p", {
                        className: "brief-desc"
                    }, this.state.introData.desc), l.a.createElement("div", {
                        className: "praise-wrap"
                    }, l.a.createElement("div", {
                        className: "flex-box praise-conatiner",
                        onClick: this.addPraise.bind(this)
                    }, l.a.createElement("img", {
                        src: this.state.upState ? "https://gw.alicdn.com/tfs/TB1fqkoGYrpK1RjSZTEXXcWAVXa-60-60.png" : "https://gw.alicdn.com/tfs/TB14YslGY2pK1RjSZFsXXaNlXXa-60-60.png",
                        alt: "",
                        className: "praise-img"
                    }), l.a.createElement("span", null, this.state.totalUp || 0, "\u4eba\u8d5e\u8fc7")), l.a.createElement("div", {
                        className: "flex-box report-container",
                        onClick: this.reportVideo.bind(this)
                    }, l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB18EAjGYvpK1RjSZFqXXcXUVXa-60-60.png",
                        alt: ""
                    }), l.a.createElement("span", null, "\u5185\u5bb9\u4e3e\u62a5")))) : "", this.props.noCallUp ? "" : l.a.createElement("div", {
                        className: "brief-btm"
                    }, l.a.createElement("div", {
                        className: "item",
                        onClick: this.jumpComment.bind(this)
                    }, l.a.createElement("i", {
                        className: "comment"
                    }), this.props.videoMap.totalComment > 0 ? l.a.createElement("span", null, this.props.videoMap.totalComment, "\u70ed\u8bc4") : l.a.createElement("span", null, "\u8bc4\u8bba")), l.a.createElement("div", {
                        className: "item",
                        onClick: this.toHD.bind(this)
                    }, l.a.createElement("i", {
                        className: "toHD clipboard"
                    }), l.a.createElement("span", null, "\u6781\u6e05")), l.a.createElement("div", {
                        className: "item",
                        onClick: this.download.bind(this)
                    }, l.a.createElement("i", {
                        className: "download clipboard"
                    }), l.a.createElement("span", null, "\u7f13\u5b58")), l.a.createElement("div", {
                        className: "item",
                        onClick: this.share.bind(this)
                    }, l.a.createElement("i", {
                        className: "share"
                    }), l.a.createElement("span", null, "\u5206\u4eab"))))
                }
                switchDetail(e) {
                    this.state.isOpenCall ? I && I.default({
                        spmC: this.state.moduleKey,
                        source: "mplaypage12",
                        spmD: "mplaypage12"
                    }) : (this.setState({
                        isDetail: !this.state.isDetail
                    }), this.state.isDetail ? Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "detailBtnClose"
                    }) : Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "detailBtnOpen"
                    }))
                }
                getSubscribe() {
                    var e = this;
                    return i()(s.a.mark((function t() {
                        var a, n, o;
                        return s.a.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (a = window.__USERINFO__.oneId || "", n = e.state.subscribeData.ownerUid && Object(T.decode)(e.state.subscribeData.ownerUid)) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return");
                            case 4:
                                return t.next = 6, Object(A.f)({
                                    userId: a,
                                    UGCuserId: n
                                });
                            case 6:
                                (o = t.sent).data && o.data.resultData && o.data.resultData[n] && e.setState({
                                    isSubscribed: !0
                                });
                            case 8:
                            case "end":
                                return t.stop()
                            }
                        }), t)
                    })))()
                }
                changeSubscribe(e) {
                    var t = this;
                    return i()(s.a.mark((function a() {
                        var n;
                        return s.a.wrap((function (a) {
                            for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (window.__USERINFO__ && window.__USERINFO__.oneId) {
                                    a.next = 3;
                                    break
                                }
                                return location.href = "//account.youku.com/?callback=".concat(encodeURIComponent(window.location.href)), a.abrupt("return");
                            case 3:
                                return a.prev = 3, a.next = 6, Object(A.b)({
                                    target_id: t.state.subscribeData.ownerUid,
                                    state: e
                                });
                            case 6:
                                a.sent.data.result && (n = !e), t.setState({
                                    isSubscribed: n
                                }), a.next = 14;
                                break;
                            case 11:
                                a.prev = 11, a.t0 = a.catch(3), "object" === Object(h.getType)(a.t0) ? (a.t0 && a.t0.ret[0]).indexOf("-302::Relation Exists") > -1 && t.setState({
                                    isSubscribed: !t.state.isSubscribed
                                }) : Object(_.b)({
                                    category: "tryCatch",
                                    msg: "h5-detail-info:changeSubscribe:".concat(JSON.stringify(a.t0))
                                });
                            case 14:
                                e ? Object(g.a)({
                                    spmC: t.state.moduleKey,
                                    spmD: "cancelSubscribe"
                                }) : Object(g.a)({
                                    spmC: t.state.moduleKey,
                                    spmD: "subscribe"
                                });
                            case 15:
                            case "end":
                                return a.stop()
                            }
                        }), a, null, [
                            [3, 11]
                        ])
                    })))()
                }
                reportVideo() {
                    const e = this.props.videoMap.videoId;
                    location.href = "http://h5.m.youku.com/app/moreplatfeedback.html?playId=".concat(e), Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "reportText"
                    })
                }
                download() {
                    I && I.default({
                        spmC: this.state.moduleKey,
                        source: "download",
                        spmD: "download"
                    })
                }
                toHD() {
                    I && I.default({
                        spmC: this.state.moduleKey,
                        source: "definition",
                        spmD: "definition"
                    })
                }
                jumpComment() {
                    try {
                        const e = document.querySelector("#YKComment").getBoundingClientRect().top;
                        document.body.scrollTop = e, document.documentElement.scrollTop = e, Object(g.a)({
                            spmC: this.state.moduleKey,
                            spmD: "commentBtn"
                        })
                    } catch (e) {
                        Object(_.b)({
                            category: "tryCatch",
                            msg: "h5-detail-info:jumpComment:".concat(JSON.stringify(e))
                        })
                    }
                }
                addPraise() {
                    var e = this;
                    return i()(s.a.mark((function t() {
                        var a, n;
                        return s.a.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!e.state.upState) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return a = e.props.videoMap.vId, t.prev = 3, t.next = 6, Object(A.a)(a);
                            case 6:
                                t.next = 11;
                                break;
                            case 8:
                                t.prev = 8, t.t0 = t.catch(3), Object(_.b)({
                                    category: "tryCatch",
                                    msg: "h5-detail-info:addPraise:".concat(JSON.stringify(t.t0))
                                });
                            case 11:
                                window.localStorage["wechatPraiseState_".concat(a)] = 1, (n = String(e.state.totalUp)).indexOf("\u4e07") < 0 && n.indexOf("\u4ebf") < 0 && (n = parseInt(n) + 1), e.setState({
                                    upState: !0,
                                    totalUp: n
                                }), Object(g.a)({
                                    spmC: e.state.moduleKey,
                                    spmD: "addPraise"
                                });
                            case 16:
                            case "end":
                                return t.stop()
                            }
                        }), t, null, [
                            [3, 8]
                        ])
                    })))()
                }
                share() {
                    /micromessenger/i.test(navigator.userAgent) || /weibo/i.test(navigator.userAgent) || /dingtalk/i.test(navigator.userAgent) ? this.props.dispatch({
                        type: "ykToast/show",
                        payload: {
                            content: "\u70b9\u51fb\u6b64\u5904\u5206\u4eab",
                            showMask: !0,
                            rootClass: "share-wrap"
                        }
                    }) : this.props.dispatch({
                        type: "ykToast/showDelay",
                        payload: {
                            content: "\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u5206\u4eab<br/>\u6309\u94ae\u5206\u4eab\u7ed9\u597d\u53cb\u54e6"
                        }
                    })
                }
            }
            var K = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp
            }))(M);
            a(318);
            var P = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp,
                pathname: e.page.pathname
            }))(e => {
                const t = e.comData,
                    a = e.videoMap.videoId;
                let n = e.pathname.indexOf("alipay_video") > -1 ? "alipay_video" : "video";
                const s = t => {
                    t && (e.noCallUp && (n = "alipay_video"), location.href = "/".concat(n, "/id_").concat(t, ".html").concat(location.search), Object(g.a)({
                        spmC: "anthology",
                        spmD: "click_" + t,
                        id: t
                    }))
                };
                let o;
                t.dataNode.length && t.dataNode.map((e, t) => {
                    e.data.action && e.data.action.value === a && (o = t)
                }); {
                    const e = document.querySelector("html").style.fontSize.replace("px", ""),
                        a = 0 === t.positionStyle ? .72 : 1.35,
                        n = o * a * e;
                    document.querySelector(".anthologyStageContainer").scrollLeft = n, Object(g.a)({
                        spmC: "anthology",
                        spmD: "show",
                        gmKey: "EXP"
                    })
                }
                return l.a.createElement("div", {
                    className: "anthologyContainer"
                }, l.a.createElement("h1", {
                    className: "mod-title"
                }, "\u9009\u96c6"), l.a.createElement("div", {
                    className: "anthologyStageContainer ".concat(0 === t.positionStyle && "style0")
                }, t.dataNode.length && t.dataNode.map((e, a) => 0 === t.positionStyle ? l.a.createElement("div", {
                    className: "anthologyStageStyle0".concat(a === o ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                    key: a,
                    onClick: () => {
                        s(e.data.action && e.data.action.value)
                    }
                }, e.data.stage, e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && l.a.createElement("div", {
                    className: "mark",
                    style: {
                        backgroundColor: Object(h.getColor)(e.data.mark.data.color)
                    }
                }, l.a.createElement("span", null, e.data.mark.data.text))) : l.a.createElement("div", {
                    className: "anthologyStageStyle1".concat(a === o ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                    key: e.data.img,
                    onClick: () => {
                        s(e.data.action && e.data.action.value)
                    }
                }, l.a.createElement("div", {
                    className: "stageStyle1Container"
                }, l.a.createElement("div", {
                    className: "stageStyle1ImgContainer"
                }, l.a.createElement("img", {
                    src: e.data.img,
                    alt: ""
                }), l.a.createElement("div", {
                    className: "summary"
                }, e.data.summary), e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && l.a.createElement("div", {
                    className: "mark",
                    style: {
                        backgroundColor: Object(h.getColor)(e.data.mark.data.color)
                    }
                }, l.a.createElement("span", null, e.data.mark.data.text))), l.a.createElement("div", {
                    className: "title".concat(a === o ? " stageActive" : "")
                }, e.data.title && (e.data.title.length > 15 ? e.data.title.slice(0, 15) + "..." : e.data.title)), l.a.createElement("div", {
                    className: "subTitle".concat(a === o ? " stageActive" : "")
                }, e.data.subtitle))))))
            });
            a(319);
            var U = Object(u.connect)(e => ({
                    videoMap: e.page.pageData.videoMap,
                    noCallUp: e.page.noCallUp,
                    pathname: e.page.pathname
                }))(e => {
                    const t = e.comData;
                    let a = {};
                    const n = t.dataNode.length > 0 && t.dataNode.filter(e => {
                            if (10039 === e.type && Object(h.isEmptyObject)(a)) a = e.data;
                            else if (10020 === e.type) return !0
                        }),
                        s = e.videoMap.videoId;
                    let o = e.pathname.indexOf("alipay_video") > -1 ? "alipay_video" : "video";
                    const i = t => {
                        t && (e.noCallUp && (o = "alipay_video"), location.href = "/".concat(o, "/id_").concat(t, ".html").concat(location.search), Object(g.a)({
                            spmC: "anthology",
                            spmD: "click_" + t,
                            id: t
                        }))
                    };
                    let c;
                    n.length && n.map((e, t) => {
                        e.data.action && e.data.action.value === s && (c = t)
                    }); {
                        const e = document.querySelector("html").style.fontSize.replace("px", ""),
                            a = 0 === t.positionStyle ? .72 : 1.35,
                            n = c * a * e;
                        document.querySelector(".anthologyStageContainer").scrollLeft = n, Object(g.a)({
                            spmC: "anthology",
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }
                    return l.a.createElement("div", {
                        className: "anthologyContainer"
                    }, !Object(h.isEmptyObject)(a) && l.a.createElement("div", {
                        className: "uplader"
                    }, l.a.createElement("img", {
                        src: a.img
                    }), l.a.createElement("div", {
                        className: "user-detail"
                    }, l.a.createElement("div", {
                        className: "name"
                    }, a.title), l.a.createElement("p", null, a.subtitle)), l.a.createElement("span", {
                        className: "subscribe"
                    }, a.hasSubscribed ? "\u5df2\u5173\u6ce8" : "")), l.a.createElement("h1", {
                        className: "mod-title"
                    }, t.title || "\u9009\u96c6"), l.a.createElement("div", {
                        className: "anthologyStageContainer ".concat(0 === t.positionStyle && "style0")
                    }, n.length && n.map((e, a) => 0 === t.positionStyle ? l.a.createElement("div", {
                        className: "anthologyStageStyle0".concat(a === c ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                        key: a,
                        onClick: () => {
                            i(e.data.action && e.data.action.value)
                        }
                    }, e.data.stage, e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && l.a.createElement("div", {
                        className: "mark",
                        style: {
                            backgroundColor: Object(h.getColor)(e.data.mark.data.color)
                        }
                    }, l.a.createElement("span", null, e.data.mark.data.text))) : l.a.createElement("div", {
                        className: "anthologyStageStyle1".concat(a === c ? " stageActive" : "").concat(e.data && e.data.mark && e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" === e.data.mark.data.text ? " markBgImg" : ""),
                        key: e.data.img,
                        onClick: () => {
                            i(e.data.action && e.data.action.value)
                        }
                    }, l.a.createElement("div", {
                        className: "stageStyle1Container"
                    }, l.a.createElement("div", {
                        className: "stageStyle1ImgContainer"
                    }, l.a.createElement("img", {
                        src: e.data.img,
                        alt: ""
                    }), l.a.createElement("div", {
                        className: "summary"
                    }, e.data.summary), e.data.mark && e.data.mark.data && "\u8d85\u524d\u70b9\u64ad" !== e.data.mark.data.text && l.a.createElement("div", {
                        className: "mark",
                        style: {
                            backgroundColor: Object(h.getColor)(e.data.mark.data.color)
                        }
                    }, l.a.createElement("span", null, e.data.mark.data.text))), l.a.createElement("div", {
                        className: "title".concat(a === c ? " stageActive" : "")
                    }, e.data.title && (e.data.title.length > 15 ? e.data.title.slice(0, 15) + "..." : e.data.title)), l.a.createElement("div", {
                        className: "subTitle".concat(a === c ? " stageActive" : "")
                    }, e.data.subtitle))))))
                }),
                X = a(10),
                L = a.n(X);
            a(323);
            var R = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp,
                pathname: e.page.pathname
            }))(e => {
                const t = Object(c.useState)(-1),
                    a = L()(t, 2),
                    n = a[0],
                    s = a[1],
                    o = e.comData,
                    i = e.videoMap.videoId;
                let r = e.pathname.indexOf("alipay_video") > -1 ? "alipay_video" : "video";
                return Object(c.useEffect)(() => {
                    {
                        let e = -1;
                        const t = Object(h.getParam)("lang");
                        let a = !1;
                        o.dataNode.length && o.dataNode.map((n, s) => {
                            a || n.data.action && n.data.action.value === i && (t ? n.data.langCode === t ? (e = s, a = !0) : e = s : (e = s, a = !0))
                        }), s(-1 === e ? 0 : e);
                        const n = document.querySelector("html").style.fontSize.replace("px", ""),
                            c = 0 === o.positionStyle ? .72 : 1.35,
                            l = e * c * n;
                        document.querySelector(".seriesStageContainer").scrollLeft = l, Object(g.a)({
                            spmC: "series",
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    }
                }, [0]), l.a.createElement("div", {
                    className: "series"
                }, l.a.createElement("h1", {
                    className: "mod-title"
                }, "\u7cfb\u5217\u7535\u5f71"), l.a.createElement("div", {
                    className: "seriesStageContainer"
                }, o.dataNode.length && o.dataNode.map((t, a) => l.a.createElement("div", {
                    className: "seriesStageStyle1 ".concat(a === n ? "stageActive" : ""),
                    key: "".concat(t.data.action && t.data.action.value).concat(t.data.title),
                    onClick: () => {
                        ((t, a) => {
                            let n = location.search;
                            if (a)
                                if (n) {
                                    n = n.substr(1);
                                    const e = Object(h.queryStringToObj)(n);
                                    e.lang = a, n = "?".concat(Object(h.objToQueryString)(e))
                                } else n = "?lang=".concat(a);
                            e.noCallUp && (r = "alipay_video"), location.href = "/".concat(r, "/id_").concat(t, ".html").concat(n), Object(g.a)({
                                spmC: "series",
                                spmD: "click_" + t,
                                id: t
                            })
                        })(t.data.action && t.data.action.value, t.data.langCode)
                    }
                }, l.a.createElement("div", {
                    className: "stageStyle1Container"
                }, l.a.createElement("div", {
                    className: "stageStyle1ImgContainer"
                }, l.a.createElement("img", {
                    src: t.data.img,
                    alt: ""
                }), l.a.createElement("div", {
                    className: "summary"
                }, t.data.summary), t.data.mark && l.a.createElement("div", {
                    className: "style1Mark",
                    style: {
                        backgroundColor: Object(h.getColor)(t.data.mark.data.color)
                    }
                }, t.data.mark.data.text)), l.a.createElement("div", {
                    className: "title ".concat(a === n ? "stageActive" : "")
                }, t.data.title && (t.data.title.length > 15 ? t.data.title.slice(0, 15) + "..." : t.data.title)), l.a.createElement("div", {
                    className: "subTitle ".concat(a === n ? "stageActive" : "")
                }, t.data.subtitle))))))
            });
            a(324);
            var B = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap
            }))(e => {
                const t = Object(c.useState)(!1),
                    a = L()(t, 2),
                    n = a[0],
                    s = a[1],
                    o = Object(c.useState)("h5-detail-corner"),
                    i = L()(o, 1)[0];
                let r = {};
                const d = e.comData && e.comData.dataNode;
                Array.isArray(d) && (r = d[0] && d[0].data || {});
                const m = r.img || "",
                    p = r.action && r.action.value || "",
                    u = {};
                return "" !== r.widgetWidth && (u.width = Number(r.widgetWidth) / 100 + "rem"), "" !== r.widgetHeight && (u.height = Number(r.widgetHeight) / 100 + "rem"), "" !== r.widgetBottom && (u.bottom = Number(r.widgetBottom) / 100 + "rem"), "" !== r.widgetRight && (u.right = Number(r.widgetRight) / 100 + "rem"), Object(c.useEffect)(() => {
                    m && p && s(!0), Object(g.a)({
                        spmC: i,
                        spmD: "show",
                        gmKey: "EXP"
                    })
                }, [0]), n && l.a.createElement("div", {
                    className: "Corner-container",
                    style: u
                }, l.a.createElement("img", {
                    src: m,
                    alt: "",
                    className: "Corner",
                    onClick: () => {
                        Object(g.a)({
                            spmC: i,
                            spmD: "click"
                        }), location.href = p
                    }
                }), l.a.createElement("img", {
                    onClick: () => {
                        Object(g.a)({
                            spmC: i,
                            spmD: "close"
                        }), s(!1)
                    }, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABZpJREFUaAXdmz9vHEUYxpMAlhGOY+xIToMtI8sQDkVyEQq7chGQMD6Jwi1KQU2BhOATICEkSoQQ38ACpBOmSOPKBpEiKOIKTlESG4oY6SwnGBEi/j2/tWezu97d25md27vzKz3ePzfzvvO7mZuZnR2fPtU9G5LrWWlampQuSKPS8JF0OPXwSA90vCftStvSLemR5N1Oe/YI0CvSvDQjPSG52D/KdEe6If0g8YV4MV/AcyrNq1JNOuOlZI+d/KvTpnRNaj2+7XZWFvgFha1LNN0qjKbekH52DeYKfE4BV6XLroFL5ruu/GvSfVs/LsAvK8jb0tO2wTyn/1P+vpB+svFr26lckfOr0lM2QbqUljLQQf4l3S4aoygwzt+SXpNcWkXR8timoywvSeclOjY6uFwrAnxWHt6RLuV66u2Hzyn8i9JNKXf87gRMzQL7vNTv9qwKyGjBuJ1Z052Aacb9XLMqXsyARj/G7kYu8oCvKB2/2UEzmndmR5YFzNBzVeqnDkrFKWwXlfKu9FsyR9o0kEkF4+ygwsJI2WGAJWZpwMygej2piBXS8QIGWGKWBGZu3KvpYqxgni5ggSm0JHA9/MTiZGRk5MzKysr58fHxJy2yFUqKT3wTo1CG44liTNEC8og3ezx9/h0K0mw235yamppot9u/1+v1b7e2tqwn9WlRFhYWzjUajdcnJibO7uzstGu12tcHBweZY2yaD92DCbbg0TL6rfE8a21LS0vjwJKRgq2vr79BQa0dJTLgA1/45CNiECuRrOhlyGaAR5WTh3dr29zc3KdmTcaxsbFnykIbWHwZv8Qglrm2PMIGY7g6wVOHged+Ydvb2/ubZry/v/+HyVQGOg0W38QglolheYQNxhBy3tJBLDm/2eXl5W/KQmfB4ttDvxAwQj4kzcQIHC7KQncZFiIYhwCmF8uaYuqj4uYKXQEsEDDOAsy6sTezha4I1vBNA8wiuVcrCl0xLIyTTLI/kEr/hvGWtDwg0jJ8RYceOj1PHVSyKOb6DsAfSsHEwdz1ecyCJkbFsIRs06R519M1y2rePYCFcbjrwERJg+Y+VkEzPgx0+DcAjt448efUMK8su2ppv2MTsMw01PiwOD7sOnAaLM247DTUAjKaNAD29u416pnzLFiGHh9z72S8AtcPqGHevHu3PFg6sbSOrILmfQ/gXd+0nWBNvB5A7wK8bQrg41gU1sSqGHobYN6qs6eitNnCmoAVQcN4C2DetrGBpJS5wpqgFUDD+Ahg7Mbhwe1vWVgTtcvQASMPDxgLXB9J5gvgXiFj3bjVaq2a1UUylZ0upn2BLOLNzc2tOa5rsbT7vhQMS5SRsbjJia0tLi6O+YQlflpNE4NYtuU7Sg9bMN+I1ug1F2cbGxt7LJKTl1rw9TxroM0SMDGI5VJG5QnZTJM2ft7TidPbBxbJWTd2bHIm/rEjPxlqFliHtw74YxT62DhOAvPi6V3z4Qk5fiKOcCNbtEnDxwfXOTkhBksIC1MSmHtrEpu+Bt1ggCVmaevR7I/4VeLVRLLJxzL38cV/Kttn0i/JMqYBk4a9EYCz6WsQ7UsV+vu0gmcBk/a2xA43dsUMkn2nwn6VVeA8YPIwYLPDjb1Pg2BU0udS5kvzTsBkvCkxNvc7NLCfSrkdbidg5Q+eptjOB3C/Nm+aMTWbC6vPC781pKbZzkdHdlHql96b3pgOit9sZjPWZ6EVqeEwsU5oNnelSxIbT3tp1CZDT2pvnFUw15pi08qqdDnLcZfvM4NiUnHfNo4rsInD3LsuWT9wGAeWRx4EGlJsumjjoyywiTWnE7YG1aS06apJ53Lkt8nwyCNey8VBNI8vYONzVCdMSeelGcm2j1CWwFhwYw2KZRlGiODhXcfS5hs4WiA2y9DUp6VJ6YLEFzJ8JB2q/1e8/wHw9LaeEeqiHgAAAABJRU5ErkJggg==",
                    alt: "",
                    className: "close"
                }))
            });
            a(325);
            var F = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap
            }))(e => {
                const t = Object(c.useState)(""),
                    a = L()(t, 2),
                    n = a[0],
                    o = a[1],
                    r = Object(c.useState)("h5-detail-wechatqrcode"),
                    d = L()(r, 1)[0],
                    m = function () {
                        var t = i()(s.a.mark((function t() {
                            var a;
                            return s.a.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                case 0:
                                    /micromessenger/i.test(navigator.userAgent) && (100, a = e.videoMap && e.videoMap.videoId, Object(A.h)({
                                        vid: a,
                                        sendRandom: 100
                                    }).then(e => {
                                        o(e.data.data)
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                            }), t)
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }();
                return Object(c.useEffect)(() => {
                    Object(g.a)({
                        spmC: d,
                        spmD: "show",
                        gmKey: "EXP"
                    }), m()
                }, [0]), n && l.a.createElement("div", {
                    className: "weChatQrcode-container"
                }, l.a.createElement("img", {
                    src: "data:image/png;base64," + n,
                    alt: "",
                    className: "weChatQrcode",
                    onClick: () => {
                        Object(g.a)({
                            spmC: d,
                            spmD: "click"
                        })
                    }
                }))
            });
            a(326);
            const q = a(134);
            class H extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "h5_adbar",
                        isClient: !1
                    }
                }
                componentWillMount() {}
                componentDidMount() {
                    this.setState({
                        isClient: !0
                    }, () => {
                        this.createJs(), Object(g.a)({
                            spmC: this.state.moduleKey,
                            spmD: "show",
                            gmKey: "EXP"
                        })
                    })
                }
                createJs() {
                    const e = document.createElement("script");
                    e.src = "//g.alicdn.com/mm/yksdk/0.1.31/pagesdk.js", document.body.appendChild(e), e.onload = () => {
                        if (window.adPageSDK) {
                            new(0, window.adPageSDK)({
                                requestURL: "//sealine.youku.com/yk/vhtml",
                                requestData: {
                                    bt: "phone",
                                    os: q.os.isIOS ? "ios" : "android",
                                    v: window.__INITIAL_DATA__.videoMap.vId
                                }
                            }).check()
                        }
                    }
                }
                sendH5AdClickLog() {
                    Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "click"
                    })
                }
                render() {
                    return l.a.createElement("div", {
                        className: "h5-adContainer",
                        "data-adpid": "1425020640",
                        onClick: this.sendH5AdClickLog
                    })
                }
            }
            var V = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap
            }))(H);
            class z extends c.Component {
                constructor() {
                    super(), this.state = {
                        component: {},
                        match: {
                            "h5-detail-guide": w,
                            "h5-detail-ad": E,
                            "h5-detail-comment": k,
                            "h5-detail-recommend": D,
                            "h5-detail-info": K,
                            "h5-detail-anthology": P,
                            "h5-detail-feed": x,
                            "h5-detail-series": R,
                            "h5-detail-corner": B,
                            "h5-detail-wechat": F,
                            "h5-adbar": V,
                            "h5-detail-degraded": U
                        }
                    }
                }
                componentWillMount() {
                    const e = this.organizeData(this.props.drawerData);
                    Object(h.isEmptyObject)(e) || this.setState({
                        component: e
                    })
                }
                inBlackList(e) {
                    let t = !1;
                    for (let a = 0; a < e.blackListRefer.length; a++) {
                        const n = e.blackListRefer[a];
                        if (this.props.refer === n) {
                            t = !0;
                            break
                        }
                    }
                    for (let a = 0; a < e.blackUA.length; a++) {
                        const n = e.blackUA[a];
                        if (this.props.userAgent.indexOf(n) > -1) {
                            t = !0;
                            break
                        }
                    }
                    return t
                }
                organizeData(e) {
                    const t = e.type,
                        a = this.props.platoConfig && this.props.platoConfig.relations || {};
                    if (t in a) {
                        const n = a[t];
                        if (Array.isArray(n.blackListRefer) && n.blackListRefer.length > 0 || Array.isArray(n.blackUA) && n.blackUA.length > 0) {
                            if (!0 === this.inBlackList(n)) return {}
                        }
                        return e
                    }
                    return {}
                }
                render() {
                    const e = this.state.component.componentId;
                    let t = "";
                    return e in this.state.match && (t = this.state.match[e]), t ? l.a.createElement("div", {
                        "data-spm": this.props.dataSpm
                    }, l.a.createElement(t, {
                        comData: this.state.component,
                        lazyload: this.props.lazyload,
                        title: this.props.drawerData.componentName || ""
                    })) : null
                }
            }
            var W = Object(u.connect)(e => ({
                platoConfig: e.page.platoConfig,
                userAgent: e.page.userAgent,
                refer: e.page.refer
            }))(z);
            a(327), a(328);
            var Y = Object(u.connect)(e => ({
                channels: e.page.pageConfig.channels,
                userInfo: e.page.userInfo
            }))(e => {
                const t = e.userInfo.oneId,
                    a = e.userInfo.nickname,
                    n = e.channels || [],
                    s = Math.ceil(n.length / 3),
                    o = [],
                    i = Object(c.useState)(!1),
                    r = L()(i, 2),
                    d = r[0],
                    m = r[1];
                for (let c = 0; c < s; c++) {
                    const e = n.filter((e, t) => t >= 4 * c && t < 4 * c + 4);
                    o.push(e)
                }
                const p = e.userInfo && e.userInfo.user_icon || "https://gw.alicdn.com/tfs/TB1VEXab7L0gK0jSZFtXXXQCXXa-72-72.png",
                    u = () => {
                        Object(g.a)({
                            spmC: "sidepanel",
                            spmD: "personalcenter"
                        }), location.href = Object(h.appendSearchParam)("//i.youku.com/u/profile")
                    };
                return l.a.createElement("div", {
                    className: "h5-panel"
                }, !0 === e.show && l.a.createElement("div", {
                    className: "x_sidepanel_p"
                }, l.a.createElement("div", {
                    className: "toast show",
                    onClick: t => {
                        e.toggelMenu()
                    }
                }), l.a.createElement("div", {
                    id: "panel",
                    className: "outside panel_right"
                }, l.a.createElement("div", {
                    className: "x_sidepanel"
                }, l.a.createElement("div", {
                    className: "x_user x_sp_botline"
                }, t ? l.a.createElement("div", {
                    className: "x_ydl"
                }, l.a.createElement("div", {
                    className: "x_avatar"
                }, l.a.createElement("img", {
                    src: p,
                    onClick: u
                })), l.a.createElement("div", {
                    className: "txt"
                }, l.a.createElement("a", {
                    href: "javascript:void(0);",
                    className: "logout",
                    onClick: () => {
                        Object(g.a)({
                            spmC: "sidepanel",
                            spmD: "logout"
                        }), location.href = Object(h.appendSearchParam)("https://account.youku.com/logoutAll.htm")
                    }
                }, "\u767b\u51fa"), l.a.createElement("em", {
                    onClick: u
                }, a))) : l.a.createElement("div", {
                    className: "x_wdl",
                    onClick: () => {
                        Object(g.a)({
                            spmC: "sidepanel",
                            spmD: "login"
                        }), location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href))
                    }
                }, l.a.createElement("div", {
                    className: "x_avatar"
                }, l.a.createElement("img", {
                    src: "https://gw.alicdn.com/tfs/TB1UGfGkeT2gK0jSZFvXXXnFXXa-80-80.png"
                })), l.a.createElement("div", {
                    className: "txt"
                }, l.a.createElement("a", {
                    href: null
                }, "\u70b9\u51fb\u767b\u5f55"), l.a.createElement("p", null, "\u6211\u7684\u5730\u76d8\u6211\u505a\u4e3b\uff0c\u505a\u4e3b\u600e\u80fd\u4e0d\u767b\u5f55")))), n.length > 0 && l.a.createElement("div", {
                    className: "x_channel"
                }, l.a.createElement("div", {
                    className: "hd on"
                }, l.a.createElement("i", {
                    onClick: () => {
                        m(!d)
                    }, className: "x_icon_arw".concat(d ? " active" : "")
                }), l.a.createElement("i", {
                    className: "x_icon_pd"
                }), l.a.createElement("span", {
                    className: "channel-title"
                }, "\u9891\u9053")), l.a.createElement("ul", {
                    className: "bd"
                }, o.map((e, t) => l.a.createElement("li", {
                    key: t,
                    className: "".concat(t > 4 && !d ? "hide" : "")
                }, e.map((t, a) => l.a.createElement("label", {
                    key: e + "_" + a
                }, l.a.createElement("a", {
                    href: null,
                    onClick: () => (e => {
                        e.url && (Object(g.a)({
                            spmC: "sidepanel",
                            spmD: "channel",
                            exargs: {
                                "data-objecttitle": e.name
                            }
                        }), location.href = Object(h.appendSearchParam)(e.url))
                    })(t)
                }, t.name))))))), l.a.createElement("div", {
                    className: "x_dingyue"
                }, l.a.createElement("div", {
                    className: "hd",
                    onClick: () => {
                        Object(g.a)({
                            spmC: "sidepanel",
                            spmD: "subscribe"
                        }), location.href = Object(h.appendSearchParam)("//ding.youku.com/u/subscribeUpdate")
                    }
                }, l.a.createElement("i", {
                    className: "x_icon_dy"
                }), l.a.createElement("span", {
                    className: "channel-title"
                }, "\u6211\u7684\u8ba2\u9605")))))))
            });
            var J = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                userInfo: e.page.userInfo,
                pageConfig: e.page.pageConfig
            }))(e => {
                const t = Object(c.useState)(!1),
                    a = L()(t, 2),
                    n = a[0],
                    o = a[1],
                    r = Object(c.useState)(""),
                    d = L()(r, 2),
                    m = d[0],
                    p = d[1],
                    u = Object(c.useState)(""),
                    y = L()(u, 2),
                    b = y[0],
                    w = y[1],
                    v = Object(c.useState)([]),
                    f = L()(v, 2),
                    E = f[0],
                    C = f[1],
                    k = Object(c.useState)([]),
                    S = L()(k, 2),
                    N = S[0],
                    D = S[1],
                    O = Object(c.useState)(!1),
                    j = L()(O, 2),
                    x = j[0],
                    _ = j[1],
                    T = Object(c.useState)(!1),
                    I = L()(T, 2),
                    M = I[0],
                    K = I[1],
                    P = Object(c.useState)(!1),
                    U = L()(P, 2),
                    X = U[0],
                    R = U[1],
                    B = e.userInfo && void 0 !== e.userInfo.oneId,
                    F = e.userInfo && e.userInfo.user_icon || "https://gw.alicdn.com/tfs/TB1VEXab7L0gK0jSZFtXXXQCXXa-72-72.png",
                    q = Object(c.useRef)(null),
                    H = e.pageConfig.header && e.pageConfig.header.themeConfig || {};
                Object(c.useEffect)(() => {
                    Z().then(e => {
                        e.data && e.data.q && w(e.data.q.length > 12 ? e.data.q.slice(0, 10) + "..." : e.data.q)
                    })
                }, 0), Object(c.useEffect)(() => {
                    V()
                }, 0);
                const V = () => {
                        Object(A.c)({}).then(e => {
                            let t = [];
                            try {
                                t = e.data.nodes[0].nodes[0].data.tabDataMap["\u70ed\u95e8\u641c\u7d22"].nodes[0].nodes, t = t.length > 5 ? t.slice(0, 5) : t, t = t.map(e => ({
                                    key: e.data.keyword
                                })), D(t)
                            } catch (a) {
                                console.log("getRecomendKeywordList fail", a)
                            }
                        })
                    },
                    z = () => {
                        Object(g.a)({
                            spmC: "header",
                            spmD: X ? "hidesidepannel" : "showsidepanel"
                        }), X ? window.isVideoPlay && (document.querySelector(".x-video-player").style.left = "0", document.querySelector(".x-video-poster").style.display = "none") : window.isVideoPlay && (document.querySelector(".x-video-player").style.left = "-9999px", document.querySelector(".x-video-poster").style.display = "block"), R(!X)
                    },
                    W = () => {
                        o(!n), C([]), window.scrollTo(0, 0), Object(g.a)({
                            spmC: "header",
                            spmD: "searchcancel"
                        })
                    },
                    J = e => {
                        "" !== e && void 0 !== e && (location.href = "https://search.youku.com/search_video?keyword=".concat(e))
                    },
                    G = Object(c.useCallback)(Object(h._throttle)(e => Q(e), 300), []),
                    Q = function () {
                        var e = i()(s.a.mark((function e(t) {
                            var a, n, o;
                            return s.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 3, Object(A.d)({
                                        keyword: t
                                    });
                                case 3:
                                    (a = e.sent) && a.data && a.data.nodes && a.data.nodes.length > 0 && ((n = a.data.nodes[0].nodes[0].nodes).length > 5 && (n = n.slice(0, 5)), o = n.map(e => {
                                        try {
                                            return {
                                                key: e.data.show_w
                                            }
                                        } catch (t) {
                                            return {
                                                key: ""
                                            }
                                        }
                                    }), C(o), _(!1)), e.next = 7;
                                    break;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Z = function () {
                        var e = i()(s.a.mark((function e() {
                            return s.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Object(A.e)());
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(c.useEffect)(() => {
                    Object(g.a)({
                        spmC: "header",
                        spmD: "show",
                        gmKey: "EXP"
                    })
                }, [0]), l.a.createElement("div", {
                    className: "h5-header"
                }, !1 === n ? l.a.createElement("header", {
                    className: "yk_header",
                    style: {
                        backgroundColor: "".concat(H.backgroundColor || null)
                    }
                }, l.a.createElement("a", {
                    href: null,
                    className: "icon menu_icon",
                    style: {
                        backgroundImage: "".concat(H.menuIcon && "url(" + H.menuIcon + ")")
                    },
                    onClick: z
                }), l.a.createElement("a", {
                    href: "//www.youku.com/",
                    className: "icon logo_icon"
                }), l.a.createElement("a", {
                    href: null,
                    className: "icon search_icon",
                    onClick: () => {
                        o(!n), window.scrollTo(0, 0), Object(g.a)({
                            spmC: "header",
                            spmD: "searchbutton"
                        })
                    }, style: {
                        backgroundImage: "".concat(H.searchIcon && "url(" + H.searchIcon + ")")
                    }
                }), B ? l.a.createElement("a", {
                    href: "//i.youku.com/u/profile",
                    className: "icon login_icon"
                }, l.a.createElement("img", {
                    src: F
                })) : l.a.createElement("a", {
                    onClick: () => {
                        Object(g.a)({
                            spmC: "header",
                            spmD: "login"
                        }), location.href = "https://account.youku.com/?callback=".concat(encodeURIComponent(window.location.href))
                    }, href: null,
                    className: "icon nologin_icon",
                    style: {
                        backgroundImage: "".concat(H.userIcon && "url(" + H.userIcon + ")")
                    }
                })) : l.a.createElement("header", {
                    className: "x_search_panel"
                }, l.a.createElement("div", {
                    className: "x_search"
                }, l.a.createElement("div", {
                    className: "searchbox",
                    style: {
                        backgroundColor: "".concat(H.backgroundColor || null)
                    }
                }, l.a.createElement("form", {
                    action: "javascript:void(0);"
                }, l.a.createElement("div", {
                    className: "x_search_default",
                    style: {
                        display: "".concat(m ? "none" : "")
                    }
                }, b), l.a.createElement("input", {
                    type: "search",
                    value: m,
                    onChange: e => {
                        const t = e.target.value;
                        p(t), G(t), !t && C(N), !t && _(!0)
                    }, autoFocus: !0,
                    onFocus: () => {
                        return (e = "") ? G(e) : (C(N), _(!0)), void K(!0);
                        var e
                    }, ref: q,
                    style: {
                        backgroundColor: "".concat(H.searchBgColor || null),
                        color: "".concat(H.fontColor || "")
                    }
                }), m && l.a.createElement("div", {
                    className: "delIconWrapper",
                    onClick: () => {
                        p(""), C(N), _(!0), q.current.focus()
                    }
                }, l.a.createElement("img", {
                    src: H.deleteIcon || "https://gw.alicdn.com/tfs/TB1fXipMjDpK1RjSZFrXXa78VXa-48-48.png",
                    className: "delIcon"
                }))), "" === m ? l.a.createElement("a", {
                    href: "javascript:void(0);",
                    className: "cancle",
                    onClick: W,
                    style: {
                        color: "".concat(H.fontColor || null)
                    }
                }, "\u53d6\u6d88") : l.a.createElement("button", {
                    className: "s_btn",
                    style: {
                        color: "".concat(H.fontColor || "")
                    },
                    onClick: () => J(m)
                }, "\u641c\u7d22")), E.length > 0 && M && l.a.createElement("div", {
                    className: "s_list"
                }, x ? l.a.createElement("div", {
                    className: "ranklist-hint"
                }, "\u5927\u5bb6\u90fd\u5728\u641c") : null, l.a.createElement("ul", {
                    className: "instant-recommendation"
                }, E.map((e, t) => l.a.createElement("li", {
                    key: "r" + t,
                    onClick: () => J(e.key),
                    dangerouslySetInnerHTML: Object(h.hKeywords)(e.key, m)
                }))), l.a.createElement("div", {
                    className: "close-btn",
                    onClick: e => {
                        K(!1), e.stopPropagation()
                    }
                }, "\u5173\u95ed"))), l.a.createElement("div", {
                    className: "toast",
                    onClick: W
                })), l.a.createElement(Y, {
                    show: X,
                    toggelMenu: z
                }))
            });
            a(329);
            const G = (new Date).getFullYear();
            var Q = e => l.a.createElement("div", {
                    className: "yk-footer"
                }, l.a.createElement("div", {
                    className: "copyright"
                }, l.a.createElement("p", null, "Copyright\xa9", G, " \u4f18\u9177 youku.com \u7248\u6743\u6240\u6709"), l.a.createElement("a", {
                    target: "_blank",
                    href: "//c.youku.com/piracy"
                }, "\u53cd\u76d7\u7248\u76d7\u94fe\u58f0\u660e"), l.a.createElement("a", {
                    href: "http://beian.miit.gov.cn/state/outPortal/loginPortal.action",
                    target: "_blank"
                }, "\u4eacICP\u8bc1060288\u53f7"), l.a.createElement("a", {
                    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000017",
                    target: "_blank"
                }, l.a.createElement("i", {
                    className: "ico-icp",
                    title: "\u7ecf\u8425\u6027\u7f51\u7ad9\u5907\u6848"
                })))),
                Z = (a(330), a(21));
            const $ = a(29);
            class ee extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "player",
                        lang: "",
                        playerWidth: "",
                        playerHeight: "",
                        istop: !1,
                        player: null,
                        verticalStyle: e.videoMap.verticalStyle,
                        comData: e.comData || {}, paid: e.videoMap.paid,
                        trialTime: 0,
                        playerMaskFlag: !1,
                        maskCallupText: ""
                    }
                }
                componentDidMount() {
                    const e = Object(h.getParam)("lang");
                    e && (this.lang = e), this.changeSize(), this.initPlayer(), Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "show",
                        gmKey: "EXP"
                    }), document.addEventListener("scroll", () => {
                        this.stayPlayer()
                    }), window.onresize = () => {
                        this.changeSize()
                    }
                }
                render() {
                    return l.a.createElement("div", {
                        className: "h5-detail-player"
                    }, l.a.createElement("div", {
                        className: "player-box ".concat(this.state.istop ? "staytop" : ""),
                        id: "playerBox",
                        style: {
                            width: "".concat(this.state.playerWidth, "px"),
                            height: "".concat(this.state.playerHeight, "px")
                        }
                    }, l.a.createElement("div", {
                        id: "player",
                        className: "player",
                        ref: e => {
                            this.playerDom = e
                        }
                    })), l.a.createElement("div", {
                        className: "playerhold",
                        style: {
                            width: "".concat(this.state.playerWidth, "px"),
                            height: "".concat(this.state.playerHeight, "px")
                        },
                        ref: e => {
                            this.playerholder = e
                        }
                    }), this.state.playerMaskFlag ? l.a.createElement("div", {
                        className: "playerMode",
                        style: {
                            width: "".concat(this.state.playerWidth, "px"),
                            height: "".concat(this.state.playerHeight, "px")
                        }
                    }, l.a.createElement("div", {
                        className: "myButton tryFiveMin",
                        onClick: this.playFiveMinute.bind(this)
                    }, l.a.createElement("div", {
                        className: "triangle"
                    }), l.a.createElement("span", null, this.props.videoMap.toFind ? "\u70b9\u51fb\u8bd5\u770b" : "\u8bd5\u770b".concat(this.state.trialTime > 0 && Math.floor(this.state.trialTime / 60) + "\u5206\u949f" || ""))), l.a.createElement("div", {
                        className: "myButton jumpToApp",
                        onClick: this.jumpApp.bind(this)
                    }, l.a.createElement("span", null, this.state.maskCallupText))) : null)
                }
                changeSize() {
                    const e = document.documentElement.clientWidth,
                        t = e;
                    let a = "";
                    a = (this.state.verticalStyle, 9 * e / 16), this.setState({
                        playerWidth: t,
                        playerHeight: a
                    })
                }
                initPlayer() {
                    const e = Object(h.getParam)("ctid");
                    this.playerDom.innerHTML = "";
                    const t = Z.browser.isLiebao ? this.getReferrerCid() : "",
                        a = {
                            id: "youku-player",
                            vid: this.state.comData.videoId,
                            prefer: "h5",
                            expand: 0,
                            canWide: 0,
                            paid: "",
                            client_id: e || t || "youkumobileplaypage",
                            wintype: "interior",
                            events: {
                                onPlayStart: this.onPlayH5.bind(this),
                                onPlayEnd: this.onPlayEnd.bind(this),
                                onMediaSrcOK: this.onMediaSrcOK.bind(this),
                                onReady: this.onReadyH5.bind(this)
                            },
                            playlistconfig: {},
                            vvlogconfig: {
                                rurl: window.document.referrer
                            },
                            adconfig: {},
                            control: {}
                        };
                    window.vData.politicsSensitive && (a.client_id = "1c9aa3003b83b3b2"), this.state.verticalStyle;
                    const n = window.navigator.userAgent.toLowerCase();
                    /micromessenger/i.test(n) && (a.weixin = !0), window.xparamsString && window.xparamsString.firsttime && (a.firsttime = window.xparamsString.firsttime), window.xparamsString && void 0 !== window.xparamsString.adext && "" !== window.xparamsString.adext && (a.adconfig = {
                        adext: window.xparamsString.adext
                    }), window.xparamsString && 1 === window.xparamsString.diy && (a.ftime = window.xparamsString.ftime, a.etime = window.xparamsString.etime, a.clientid = window.xparamsString.clientid), this.lang && (a.control.lang = this.lang);
                    const s = {
                        dash: {
                            videoInterest: !0
                        },
                        event: {
                            startPlay: () => {
                                this.onPlayStartH5()
                            }
                        },
                        hidetitle: !1,
                        posterType: "episode"
                    };
                    if (window.vData && window.vData.bizChannel && window.vData.bizChannel.playerConfig) {
                        const e = window.vData.bizChannel.playerConfig;
                        e.params && Object.assign(a, e.params || {}), e.uiConfig && Object.assign(s, e.uiConfig || {})
                    }
                    const o = new window.YKPlayer.Player("player", a, s);
                    this.listenNet(), this.setState({
                        player: o
                    })
                }
                getPlayerInfo() {
                    if (this.state.player) {
                        const e = this.state.player._videoInfo || {},
                            t = Number(e.trial && e.trial.time) || 300;
                        this.setState({
                            trialTime: t
                        }), window.vData.trialTime = t
                    }
                }
                onReadyH5() {
                    if (this.state.player) {
                        this.getPlayerInfo();
                        let e = !1;
                        const t = window.currentRefer && window.currentRefer.videoMask;
                        if (("all" === t || "short" === t && !0 === window.toFind || "long" === t && !1 === window.toFind) && (e = !0), ("anybody" !== (this.state.player._videoInfo && this.state.player._videoInfo.video && this.state.player._videoInfo.video.privacy) || window.vData.politicsSensitive || this.props.noCallUp) && (e = !1), !0 === e && (window.__USERINFO__.oneId && !window.__USERINFO__.is_vip || !window.__USERINFO__.oneId) && 0 === this.state.paid) {
                            const e = document.querySelector(".x-video-button");
                            if (!e) return;
                            Object(g.a)({
                                spmC: this.state.moduleKey,
                                spmD: "exp",
                                gmKey: "EXP"
                            }), this.setState({
                                playerMaskFlag: !0
                            }), e.style.setProperty("display", "none", "important");
                            let t = "";
                            t = window.toFind ? window.currentRefer.maskCallupShortText || "" : window.currentRefer.maskCallupLongText || "", this.setState({
                                maskCallupText: t
                            })
                        }
                        Object(g.a)({
                            spmC: "".concat(this.props.videoMap.toFind ? "shortvideo" : "longvideo"),
                            spmD: "exp",
                            gmKey: "EXP",
                            stopSpider: !0
                        })
                    }
                }
                onPlayStartH5() {
                    window.isVideoPlay = !0, this.getNetworkType()
                }
                onPlayH5() {
                    const e = window.innerHeight || document.documentElement.clientHeight;
                    if (1 === this.state.verticalStyle) {
                        this.setState({
                            playerHeight: e
                        });
                        const t = document.querySelector("html").style.fontSize.replace("px", "");
                        document.documentElement.scrollTop = .43 * Number(t), document.body.scrollTop = .43 * Number(t)
                    }
                    if (this.props.noCallUp) {
                        const e = document.querySelector(".x-full-video");
                        if (e) {
                            e.parentElement.removeChild(e)
                        }
                        const t = document.querySelector(".x-hint-openapp");
                        if (t) {
                            t.parentElement.removeChild(t)
                        }
                        const a = document.querySelector(".x-slider-app");
                        if (a) {
                            a.parentElement.removeChild(a)
                        }
                    }
                }
                onPlayerCompleteH5(e) {
                    if (!e || !e.vid) return;
                    const t = location.href,
                        a = e.encodevid || e.vid;
                    t.split("id_").length > 1 ? window.location.href = "".concat(t.split("id_")[0], "id_").concat(a, ".html") : window.location.href = "".concat(t.split("?")[0], "?videoid=").concat(a)
                }
                onPlayEnd() {
                    const e = window.innerWidth || document.documentElement.clientWidth;
                    1 === this.state.verticalStyle && this.setState({
                        playerHeight: 9 * e / 16
                    })
                }
                onMediaSrcOK(e, t) {
                    "3gphd" === e && "" !== t && (window.downloadUrl = t)
                }
                stayPlayer() {
                    if (this.playerholder) {
                        let e = !1;
                        const t = this.playerholder.getBoundingClientRect();
                        e = !!(!this.state.istop && t.top <= 0 && !this.state.player.isPause || this.state.istop && t.top <= 0) && !(1 === this.state.verticalStyle), this.setState({
                            istop: e
                        })
                    }
                }
                _orientationChange(e) {
                    "onorientationchange" in window ? window.onorientationchange = function () {
                        setTimeout(e, 200).bind(this)
                    }.bind(this) : window.onresize = this.debounce(e, 100, !0)
                }
                getReferrerCid() {
                    const e = document.referrer;
                    return e ? Object(h.getParam)("ctid", e) : ""
                }
                listenNet() {
                    document.addEventListener("h5NetworkChange", () => {
                        this.getNetworkType()
                    }, !1)
                }
                getNetworkType() {
                    window.AlipayJSBridge && window.AlipayJSBridge.call("getNetworkType", e => {
                        /wifi/i.test(e.networkInfo || e.networkType)
                    })
                }
                playFiveMinute() {
                    window.isVideoPlay = !0, this.state.player.play(), this.setState({
                        playerMaskFlag: !1
                    }), Object(g.a)({
                        spmC: this.state.moduleKey,
                        spmD: "play"
                    })
                }
                jumpApp() {
                    $ && $.default({
                        spmC: this.state.moduleKey,
                        spmD: "callapp",
                        source: "playercallapp"
                    })
                }
            }
            var te = Object(u.connect)(e => ({
                videoMap: e.page.pageData.videoMap,
                noCallUp: e.page.noCallUp
            }))(ee);
            a(331);
            const ae = a(29).default;
            var ne = Object(u.connect)(e => ({
                    videoMap: e.page.pageData.videoMap,
                    userInfo: e.page.userInfo
                }))(e => {
                    const t = Object(c.useState)(!1),
                        a = L()(t, 2),
                        n = a[0],
                        s = a[1],
                        o = () => {
                            const e = "https://acz.youku.com/wow/ykpage/act/aki96rjthui?sharepolitetoken=".concat(window.xparamsString.sharepolitetoken, "&_wvUseWKWebView=YES&from=player&vid=").concat(window.vid);
                            ae({
                                openHalfEncodeUrl: e
                            })
                        };
                    return Object(c.useEffect)(() => {
                        if (window.xparamsString.sharepolitetoken && !window.__USERINFO__.is_vip) {
                            s(!0);
                            let e = 0;
                            const t = setInterval(() => {
                                e += 1, e > 10 && clearInterval(t);
                                const a = document.createElement("button");
                                a.className = "politePlayerButton", a.innerText = "\u514d\u8d39\u770b\u672c\u96c6", a.onclick = o, document.querySelector(".player-box").append(a), document.querySelectorAll(".x-btn") && document.querySelectorAll(".x-btn")[1] && (clearInterval(t), document.querySelectorAll(".x-btn")[1].style.position = "absolute", document.querySelectorAll(".x-btn")[1].style.left = "0.38rem")
                            }, 700)
                        }
                    }, [0]), l.a.createElement("div", null, n && l.a.createElement("div", null, l.a.createElement("div", {
                        className: "politelayer"
                    }), l.a.createElement("img", {
                        src: "https://img.alicdn.com/tfs/TB1FiiagHj1gK0jSZFuXXcrHpXa-78-78.png",
                        alt: "",
                        className: "closePoliteBtn",
                        onClick: () => {
                            s(!1)
                        }
                    }), l.a.createElement("div", {
                        className: "politeContainer"
                    }, l.a.createElement("img", {
                        className: "politeTopImg",
                        src: "https://gw.alicdn.com/tfs/TB1IizVgQY2gK0jSZFgXXc5OFXa-858-108.png"
                    }), l.a.createElement("div", {
                        className: "politeBgContainer"
                    }, l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB13o5XgRr0gK0jSZFnXXbRRXXa-186-72.png",
                        alt: "",
                        className: "lock"
                    }), l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1.vX.gO_1gK0jSZFqXXcpaXXa-888-624.png",
                        alt: "",
                        className: "bgImg"
                    }), l.a.createElement("img", {
                        src: "https://gw.alicdn.com/tfs/TB1EyqagHj1gK0jSZFuXXcrHpXa-333-333.png",
                        alt: "",
                        className: "starImg"
                    }), l.a.createElement("div", {
                        className: "videoTitle"
                    }, e.videoMap.showName), l.a.createElement("div", {
                        className: "videoIndex"
                    }, "\u7b2c", e.videoMap.showVideoStage, "\u96c6")), l.a.createElement("div", {
                        className: "politeBtn",
                        onClick: () => {
                            o()
                        }
                    }, "\u52a0\u5165\u7ec4\u961f\u514d\u8d39\u770b >"))))
                }),
                se = a(20),
                oe = a.n(se);
            a(332);

            function ie(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }
            class ce extends c.Component {
                constructor(e) {
                    super(e), this.state = {}
                }
                render() {
                    return this.props.show && this.props.content ? l.a.createElement("div", {
                        className: "yk-modal"
                    }, l.a.createElement("div", {
                        className: "modal-box"
                    }, this.props.showCloseBtn && l.a.createElement("a", {
                        href: null,
                        className: "close",
                        onClick: () => {
                            this.handleConfirmClick()
                        }
                    }, l.a.createElement("span", null, "\xd7")), this.props.title && l.a.createElement("div", {
                        className: "modal-title"
                    }, this.props.title), this.props.content && l.a.createElement("div", {
                        className: "modal-content"
                    }, this.props.content), this.props.buttons.length > 0 && l.a.createElement("div", {
                        className: "modal-foot"
                    }, this.props.buttons.map(e => l.a.createElement("a", {
                        key: "btn-".concat(e.type),
                        href: "javascript:void(0)",
                        className: "confirm" === e.type ? "ok-btn" : "cancel" === e.type ? "cancel-btn" : "",
                        onClick: () => {
                            this.handleConfirmClick(e.type)
                        }
                    }, e.text))))) : null
                }
                handleConfirmClick(e) {
                    const t = this.props.okCbFn,
                        a = this.props.cancelCbFn;
                    "confirm" === e ? t && t() : a && a(), this.props.dispatch({
                        type: "ykModal/hide"
                    })
                }
            }
            var le = Object(u.connect)(e => function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ie(Object(a), !0).forEach((function (t) {
                            oe()(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ie(Object(a)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        }))
                    }
                    return e
                }({}, e.ykModal))(ce),
                re = a(76);
            const de = a(29);
            class me extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        moduleKey: "thirdparty",
                        baseExpireKey: "callapp-modal",
                        timer: null
                    }
                }
                componentDidMount() {
                    const e = Number(window.currentRefer.timeout);
                    "" !== window.currentRefer.name && e > 0 && this.canPopModal() && !window.vData.politicsSensitive && (this.state.timer && clearTimeout(this.state.timer), this.state.timer = setTimeout(() => {
                        this.showThirdpartModal()
                    }, e))
                }
                render() {
                    return null
                }
                showThirdpartModal() {
                    const e = this;
                    this.props.dispatch({
                        type: "ykModal/show",
                        payload: {
                            type: "alert",
                            showCloseBtn: !0,
                            content: window.currentRefer.text,
                            buttons: [{
                                text: window.currentRefer.button,
                                type: "confirm"
                            }],
                            okCbFn() {
                                de && de.default({
                                    spmC: "modal",
                                    spmD: "confirm",
                                    source: "thirdparty"
                                })
                            },
                            cancelCbFn() {
                                Object(g.a)({
                                    spmC: "modal",
                                    spmD: "close"
                                }), e.setExpireString()
                            }
                        }
                    }), Object(g.a)({
                        spmC: "modal",
                        spmD: "exp",
                        gmKey: "EXP"
                    })
                }
                canPopModal() {
                    const e = Number(window.currentRefer.interval);
                    let t = !0;
                    const a = this.getExpireString();
                    if (a) {
                        const n = +new Date - Number(a);
                        e > 0 && n <= e && (t = !1)
                    }
                    return t
                }
                setExpireString() {
                    window.localStorage.setItem(this.state.baseExpireKey + window.currentRefer.name, +new Date)
                }
                getExpireString() {
                    return window.localStorage.getItem(this.state.baseExpireKey + window.currentRefer.name)
                }
            }
            var pe = Object(u.connect)(e => ({
                    videoMap: e.page.pageData.videoMap
                }))(me),
                ue = a(77);
            a(334);
            class he extends c.Component {
                constructor(e) {
                    super(e), this.state = {
                        showLayer: !1,
                        moduleList: [],
                        clientModuleList: [],
                        disableHeader: !(!e.vData.bizChannel || !e.vData.bizChannel.disableHeader),
                        disableFooter: !(!e.vData.bizChannel || !e.vData.bizChannel.disableFooter)
                    }
                }
                componentWillMount() {
                    const e = this.props.pageData.componentList || [];
                    let t = [],
                        a = [];
                    e.length > 5 ? (t = e.slice(0, 5), a = e.slice(5, e.length), this.setState({
                        clientModuleList: a
                    })) : t = e, this.setState({
                        moduleList: t
                    })
                }
                componentDidMount() {
                    var e = this;
                    return i()(s.a.mark((function t() {
                        var a, n;
                        return s.a.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                            case 0:
                                try {
                                    a = new p.a(location.href), window.xparamsString = a.params
                                } catch (s) {
                                    window.xparamsString = {}
                                }
                                return 0 !== e.state.clientModuleList.length && e.setState({
                                    moduleList: e.state.moduleList.concat(e.state.clientModuleList)
                                }), t.prev = 2, t.next = 5, Object(A.g)();
                            case 5:
                                n = t.sent, window.xparamsString.usecret = n.data.result.model.password, t.next = 12;
                                break;
                            case 9:
                                t.prev = 9, t.t0 = t.catch(2), window.xparamsString.usecret = "";
                            case 12:
                                window.addEventListener("load", e.reportPerformance), Object(g.a)({
                                    spmC: "page",
                                    spmD: "exp",
                                    gmKey: "EXP",
                                    stopSpider: !0
                                }), Object(ue.a)({
                                    title: window.__METADATA__ && window.__METADATA__.title,
                                    link: window.location.href,
                                    desc: window.__METADATA__ && window.__METADATA__.description,
                                    shareImage: window.__METADATA__ && window.__METADATA__.shareImg
                                }), e.copyUSecret();
                            case 16:
                            case "end":
                                return t.stop()
                            }
                        }), t, null, [
                            [2, 9]
                        ])
                    })))()
                }
                copyUSecret() {
                    document.documentElement.addEventListener("click", e => {
                        try {
                            window.xparamsString.usecret && Object(h.setUSecret)(e)
                        } catch (e) {
                            console.log(e)
                        }
                    }, !1)
                }
                reportPerformance() {
                    if (!window.performance) return;
                    const e = window.performance.timing;
                    e && setTimeout(() => {
                        const t = e.responseStart - e.navigationStart,
                            a = e.domContentLoadedEventStart - e.navigationStart;
                        Object(_.c)("s1", t), Object(_.c)("s2", a), Object(g.a)({
                            spmC: "pagePerformance",
                            spmD: "report",
                            gmKey: "EXP",
                            exargs: {
                                "data-firstpaint": t,
                                "data-domready": a
                            }
                        })
                    }, 500)
                }
                render() {
                    return l.a.createElement("div", null, this.state.disableHeader ? null : l.a.createElement(J, null), l.a.createElement(te, {
                        comData: this.props.pageData.videoMap
                    }), this.state.moduleList.map((e, t) => t > 10 ? l.a.createElement(d.a, {
                        key: "drawerLazy".concat(t),
                        height: 100
                    }, l.a.createElement(W, {
                        drawerData: e,
                        lazyload: !0
                    })) : l.a.createElement(W, {
                        drawerData: e,
                        key: "drawer".concat(t)
                    })), l.a.createElement(ne, null), this.state.disableFooter ? null : l.a.createElement(Q, null), l.a.createElement(pe, null), l.a.createElement(le, null), l.a.createElement(re.a, null))
                }
            }
            var ge = Object(u.connect)(e => ({
                pageData: e.page.pageData,
                vData: e.page.vData
            }))(he);
            const ye = [{
                path: "/video/:video",
                component: ge,
                exact: !0
            }, {
                path: "/alipay_video/:video",
                component: ge,
                exact: !0
            }];
            t.a = ye
        }, 147: function (e, t, a) {
            "use strict";
            (function (t) {
                const n = a(315);

                function s(e) {
                    let a = "";
                    var s;
                    return o(e = e.replace(/^c([a-z]{1})([0-9]+)/gi, "")) && (a = n((s = function (e) {
                        return o(e) && (e = e.substring(1)), e
                    }(e), t.from(s, "base64").toString())).shiftRight(2)), a.toString()
                }

                function o(e) {
                    return !(0 !== e.indexOf("X") && 0 !== e.indexOf("U"))
                }
                e.exports = {
                    decodeId: function (e) {
                        let t = null;
                        if (/^[0-9]*$/.test(e)) return e;
                        if ("string" === typeof e) {
                            if (/^[0-9]*$/.test(e)) return e;
                            t = s(e)
                        } else Array.isArray(e) && (t = e.map(e => s(e)));
                        return t
                    }, encodeId: function (e) {
                        return /^[0-9]*$/.test(e) ? "U" + t.from(String(n(e).shiftLeft(2))).toString("base64") : e
                    }, decode: s
                }
            }).call(this, a(311).Buffer)
        }, 148: function (e, t, a) {
            "use strict";
            var n = a(0),
                s = a.n(n),
                o = a(4);
            a(97);
            t.a = Object(o.connect)(e => ({
                videoMap: e.page.pageData.videoMap
            }))(e => s.a.createElement("div", null, s.a.createElement("div", {
                id: "app"
            }, e.children)))
        }, 154: function (e, t, a) {
            "use strict";
            a.r(t),
                function (e) {
                    var n = a(0),
                        s = a.n(n),
                        o = a(30),
                        i = a.n(o),
                        c = a(4),
                        l = a.n(c),
                        r = a(41),
                        d = a(109),
                        m = a(7),
                        p = a(62),
                        u = (a(148), a(3));
                    t.default = (() => {
                        const e = l()({
                            history: Object(m.a)(),
                            initialState: {
                                page: {
                                    pageData: window.__INITIAL_DATA__,
                                    hostname: window.location.hostname,
                                    search: location.search,
                                    pathname: location.pathname,
                                    platoConfig: window.__PLATOCONFIG__,
                                    userInfo: window.__USERINFO__,
                                    pageConfig: window.pageConfig,
                                    refer: Object(u.getParam)("refer"),
                                    vData: window.vData,
                                    userAgent: window.navigator.userAgent,
                                    noCallUp: window.noCallUp
                                }
                            }
                        });
                        p.a.forEach(t => {
                            e.model(t)
                        });
                        const t = Object(u.getParam)("refer");
                        let a = null;
                        const n = window.pageConfig.thirdparty && window.pageConfig.thirdparty.refer || [];
                        for (let s = 0; s < n.length; s++) {
                            const e = n[s];
                            if (e.name === t) {
                                a = e;
                                break
                            }
                        }
                        a || (a = window.pageConfig.thirdparty && window.pageConfig.thirdparty.default || {}), window.vData.refer = t, window.currentRefer = a, e.router(() => s.a.createElement(r.BrowserRouter, null, s.a.createElement(r.Switch, null, d.a.map(({
                            path: e,
                            exact: t,
                            component: a
                        }) => s.a.createElement(r.Route, {
                            key: e,
                            path: e,
                            exact: t,
                            component: a
                        })))));
                        const o = e.start();
                        window._SSRERR_ ? i.a.render(s.a.createElement(o, null), document.getElementById("app")) : i.a.hydrate(s.a.createElement(o, null), document.getElementById("app"))
                    })()
                }.call(this, a(110)(e))
        }, 261: function (e, t, a) {}, 265: function (e, t, a) {}, 29: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(61),
                s = a.n(n),
                o = a(75),
                i = a.n(o),
                c = a(21),
                l = a(3),
                r = a(2);
            const d = c.browser.isIOS,
                m = Object(l.getParam)("refer"),
                p = "https://down2.youku.com/youku/down.php?pub=9a89d83e08103905";
            t.default = (e = {}) => {
                let t = e.id || window.vData.vId;
                const a = t;
                if (!t) return;
                location.href = "/alipay_video/id_" + a + ".html?=&source=";
            }
        }, 299: function (e, t, a) {}, 300: function (e, t, a) {}, 301: function (e, t, a) {}, 302: function (e, t, a) {}, 317: function (e, t, a) {}, 318: function (e, t, a) {}, 319: function (e, t, a) {}, 323: function (e, t, a) {}, 324: function (e, t, a) {}, 325: function (e, t, a) {}, 326: function (e, t, a) {}, 327: function (e, t, a) {}, 328: function (e, t, a) {}, 329: function (e, t, a) {}, 330: function (e, t, a) {}, 331: function (e, t, a) {}, 332: function (e, t, a) {}, 334: function (e, t, a) {}
    },
    [
        [154, 5, 0]
    ]
]);