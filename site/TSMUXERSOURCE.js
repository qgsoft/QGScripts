function TS_MUXER_SOURCE(e) {
    var t = function () {
        "use strict";

        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function t() {
            this.init = function () {
                var e = {};
                this.on = function (t, n) {
                    e[t] || (e[t] = []), e[t] = e[t].concat(n)
                }, this.off = function (t, n) {
                    var i;
                    return !!e[t] && (i = e[t].indexOf(n), e[t] = e[t].slice(), e[t].splice(i, 1), -1 < i)
                }, this.trigger = function (t) {
                    var n, i, o, r;
                    if (n = e[t])
                        if (2 === arguments.length)
                            for (o = n.length, i = 0; i < o; ++i) n[i].call(this, arguments[1]);
                        else {
                            for (r = [], i = arguments.length, i = 1; i < arguments.length; ++i) r.push(arguments[i]);
                            for (o = n.length, i = 0; i < o; ++i) n[i].apply(this, r)
                        }
                }, this.dispose = function () {
                    e = {}
                }
            }
        }

        function n(e, t, n, i, o, r) {
            var a;
            a = 1 < r && Ce(e.audioobjecttype, e.samplingfrequencyindex, e.channelcount) || t[n].data;
            for (var s = 0; s < r; s++) t.splice(n + s, 0, {
                inert: !0,
                audioobjecttype: e.audioobjecttype,
                channelcount: e.channelcount,
                dts: i + o * s,
                pts: i + o * s,
                data: a,
                sampleCount: e.sampleCount,
                samplerate: e.samplerate,
                samplesize: e.samplesize,
                samplingfrequencyindex: e.samplingfrequencyindex
            })
        }

        function i(e) {
            delete e.videoMinPts, delete e.videoMinDts, delete e.videoMaxPts, delete e.videoMaxDts, delete e.audioMinPts, delete e.audioMinDts, delete e.audioMaxPts, delete e.audioMaxDts
        }

        function o() {
            o.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Ve(0, 0), new Ve(0, 1), new Ve(1, 0), new Ve(1, 1)], this.reset(), this.ccStreams_.forEach(function (e) {
                e.on("data", this.trigger.bind(this, "data")), e.on("done", this.trigger.bind(this, "done"))
            }, this)
        }

        function r(e) {
            return null === e ? "" : (e = He[e] || e, String.fromCharCode(e))
        }

        function a() {
            for (var e = [], t = 15; t--;) e.push("");
            return e
        }

        function s(e) {
            return parseInt(e) === e
        }

        function l(e) {
            if (!s(e.length)) return !1;
            for (var t = 0; t < e.length; t++)
                if (!s(e[t]) || e[t] < 0 || 255 < e[t]) return !1;
            return !0
        }

        function u(e, t) {
            if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
            if (Array.isArray(e)) {
                if (!l(e)) throw new Error("Array contains invalid value: " + e);
                return new Uint8Array(e)
            }
            if (s(e.length) && l(e)) return new Uint8Array(e);
            throw new Error("unsupported array-like object")
        }

        function c(e) {
            return new Uint8Array(e)
        }

        function d(e, t, n, i, o) {
            null == i && null == o || (e = e.slice ? e.slice(i, o) : Array.prototype.slice.call(e, i, o)), t.set(e, n)
        }

        function h(e) {
            for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
            return t
        }

        function p(e) {
            if (!(this instanceof p)) throw Error("AES must be instanitated with new");
            Object.defineProperty(this, "key", {
                value: u(e, !0)
            }), this._prepare()
        }

        function f(e) {
            if (!(this instanceof f)) throw Error("AES must be instanitated with new");
            this.description = "Electronic Code Block", this.name = "ecb", this._aes = new p(e)
        }

        function g(e, t) {
            var n = 1;
            for (t < e && (n = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * n;
            return e
        }

        function y(e) {
            var t, n;
            y.prototype.init.call(this), this.type_ = e, this.push = function (e) {
                e.type === this.type_ && (void 0 === n && (n = e.dts), e.dts = g(e.dts, n), e.pts = g(e.pts, n), t = e.dts, this.trigger("data", e))
            }, this.flush = function () {
                n = t, this.trigger("done")
            }, this.discontinuity = function () {
                t = n = void 0
            }
        }

        function m(e, t, n) {
            var i, o = "";
            for (i = t; i < n; i++) o += "%" + ("00" + e[i].toString(16)).slice(-2);
            return o
        }

        function v(e, t, n) {
            return decodeURIComponent(m(e, t, n))
        }

        function _(e) {
            return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
        }

        function b(e, t) {
            var n;
            if (e.length !== t.length) return !1;
            for (n = 0; n < e.length; n++)
                if (e[n] !== t[n]) return !1;
            return !0
        }

        function k(e) {
            return new Date(1e3 * e - 20828448e5)
        }

        function E(e) {
            return {
                isLeading: (12 & e[0]) >>> 2,
                dependsOn: 3 & e[0],
                isDependedOn: (192 & e[1]) >>> 6,
                hasRedundancy: (48 & e[1]) >>> 4,
                paddingValue: (14 & e[1]) >>> 1,
                isNonSyncSample: 1 & e[1],
                degradationPriority: e[2] << 8 | e[3]
            }
        }

        function w(e, t) {
            for (var n = e, i = 0; i < t.length; i++) {
                var o = t[i];
                if (n < o.size) return o;
                n -= o.size
            }
            return null
        }

        function S(e, t) {
            var n = ke.findBox(e, ["moof", "traf"]),
                i = ke.findBox(e, ["mdat"]),
                o = {},
                r = [];
            return i.forEach(function (e, t) {
                var i = n[t];
                r.push({
                    mdat: e,
                    traf: i
                })
            }), r.forEach(function (e) {
                var n, i = e.mdat,
                    r = e.traf,
                    a = ke.findBox(r, ["tfhd"]),
                    s = en.parseTfhd(a[0]),
                    l = s.trackId,
                    u = ke.findBox(r, ["tfdt"]),
                    c = 0 < u.length ? en.parseTfdt(u[0]).baseMediaDecodeTime : 0,
                    d = ke.findBox(r, ["trun"]);
                t === l && 0 < d.length && (n = function (e, t, n) {
                    var i, o, r, a, s = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        l = [];
                    for (o = 0; o + 4 < e.length; o += r)
                        if (r = s.getUint32(o), o += 4, !(r <= 0)) switch (31 & e[o]) {
                        case 6:
                            var u = e.subarray(o + 1, o + 1 + r),
                                c = w(o, t);
                            i = {
                                nalUnitType: "sei_rbsp",
                                size: r,
                                data: u,
                                escapedRBSP: tn(u),
                                trackId: n
                            }, c ? (i.pts = c.pts, i.dts = c.dts, a = c) : (i.pts = a.pts, i.dts = a.dts), l.push(i)
                        }
                    return l
                }(i, function (e, t, n) {
                    var i = t,
                        o = n.defaultSampleDuration || 0,
                        r = n.defaultSampleSize || 0,
                        a = n.trackId,
                        s = [];
                    return e.forEach(function (e) {
                        var t = en.parseTrun(e).samples;
                        t.forEach(function (e) {
                            void 0 === e.duration && (e.duration = o), void 0 === e.size && (e.size = r), e.trackId = a, e.dts = i, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), e.pts = i + e.compositionTimeOffset, i += e.duration
                        }), s = s.concat(t)
                    }), s
                }(d, c, s), l), o[l] || (o[l] = []), o[l] = o[l].concat(n))
            }), o
        }
        var x, T, A, D, L, C, M, I, P, R, O, N, j, U, B, F, z, H, Y, V, q, G, Q, W, K, X, J, Z, $, ee, te, ne, ie, oe, re, ae, se, le, ue, ce, de = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            he = function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            },
            pe = Math.pow(2, 32) - 1;
        ! function () {
            var e;
            if (G = {
                avc1: [],
                avcC: [],
                btrt: [],
                pasp: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                smhd: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                styp: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: []
            }, "undefined" != typeof Uint8Array) {
                for (e in G) G.hasOwnProperty(e) && (G[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                Q = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), K = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), W = new Uint8Array([0, 0, 0, 1]), X = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), J = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), Z = {
                    video: X,
                    audio: J
                }, te = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), ee = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), ne = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), ie = ne, oe = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), re = ne, $ = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
            }
        }(), x = function (e) {
            var t, n, i = [],
                o = 0;
            for (t = 1; t < arguments.length; t++) i.push(arguments[t]);
            for (t = i.length; t--;) o += i[t].byteLength;
            for (n = new Uint8Array(o + 8), new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(0, n.byteLength), n.set(e, 4), t = 0, o = 8; t < i.length; t++) n.set(i[t], o), o += i[t].byteLength;
            return n
        }, T = function () {
            return x(G.dinf, x(G.dref, te))
        }, A = function (e) {
            return x(G.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
        }, B = function (e) {
            return x(G.hdlr, Z[e])
        }, U = function (e) {
            var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
            return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), x(G.mdhd, t)
        }, j = function (e) {
            return x(G.mdia, U(e), B(e.type), C(e))
        }, L = function (e) {
            return x(G.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
        }, C = function (e) {
            return x(G.minf, "video" === e.type ? x(G.vmhd, $) : x(G.smhd, ee), T(), z(e))
        }, M = function (e, t) {
            for (var n = [], i = t.length; i--;) n[i] = Y(t[i]);
            return x.apply(null, [G.moof, L(e)].concat(n))
        }, I = function (e) {
            for (var t = e.length, n = [], i = 0; t--;) e[t].duration > i && (i = e[t].duration), n[t] = O(e[t]);
            return x.apply(null, [G.moov, R(i)].concat(n).concat(P(e)))
        }, P = function (e) {
            for (var t = e.length, n = []; t--;) n[t] = V(e[t]);
            return x.apply(null, [G.mvex].concat(n))
        }, R = function (e) {
            var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return x(G.mvhd, t)
        }, F = function (e) {
            var t, n, i = e.samples || [],
                o = new Uint8Array(4 + i.length);
            for (n = 0; n < i.length; n++) t = i[n].flags, o[n + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
            return x(G.sdtp, o)
        }, z = function (e) {
            return x(G.stbl, H(e), x(G.stts, re), x(G.stsc, ie), x(G.stsz, oe), x(G.stco, ne))
        }, H = function (e) {
            return x(G.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? ae(e) : se(e))
        }, ae = function (e) {
            var t, n = e.sps || [],
                i = e.pps || [],
                o = [],
                r = [];
            for (t = 0; t < n.length; t++) o.push((65280 & n[t].byteLength) >>> 8), o.push(255 & n[t].byteLength), o = o.concat(Array.prototype.slice.call(n[t]));
            for (t = 0; t < i.length; t++) r.push((65280 & i[t].byteLength) >>> 8), r.push(255 & i[t].byteLength), r = r.concat(Array.prototype.slice.call(i[t]));
            var a = e.sarRatio[0],
                s = e.sarRatio[1];
            return x(G.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), x(G.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255, 224 | n.length].concat(o).concat([i.length]).concat(r))), x(G.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), x(G.pasp, new Uint8Array([a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])))
        }, se = function (e) {
            return x(G.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), A(e))
        }, N = function (e) {
            var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
            return x(G.tkhd, t)
        }, Y = function (e) {
            var t, n, i, o, r, a;
            return t = x(G.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), r = Math.floor(e.baseMediaDecodeTime / (1 + pe)), a = Math.floor(e.baseMediaDecodeTime % (1 + pe)), n = x(G.tfdt, new Uint8Array([1, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a])), "audio" === e.type ? (i = q(e, 92), x(G.traf, t, n, i)) : (o = F(e), i = q(e, o.length + 92), x(G.traf, t, n, i, o))
        }, O = function (e) {
            return e.duration = e.duration || 4294967295, x(G.trak, N(e), j(e))
        }, V = function (e) {
            var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return "video" !== e.type && (t[t.length - 1] = 0), x(G.trex, t)
        }, ce = function (e, t) {
            var n = 0,
                i = 0,
                o = 0,
                r = 0;
            return e.length && (void 0 !== e[0].duration && (n = 1), void 0 !== e[0].size && (i = 2), void 0 !== e[0].flags && (o = 4), void 0 !== e[0].compositionTimeOffset && (r = 8)), [0, 0, n | i | o | r, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
        }, ue = function (e, t) {
            var n, i, o, r;
            for (t += 20 + 16 * (i = e.samples || []).length, n = ce(i, t), r = 0; r < i.length; r++) o = i[r], n = n.concat([(4278190080 & o.duration) >>> 24, (16711680 & o.duration) >>> 16, (65280 & o.duration) >>> 8, 255 & o.duration, (4278190080 & o.size) >>> 24, (16711680 & o.size) >>> 16, (65280 & o.size) >>> 8, 255 & o.size, o.flags.isLeading << 2 | o.flags.dependsOn, o.flags.isDependedOn << 6 | o.flags.hasRedundancy << 4 | o.flags.paddingValue << 1 | o.flags.isNonSyncSample, 61440 & o.flags.degradationPriority, 15 & o.flags.degradationPriority, (4278190080 & o.compositionTimeOffset) >>> 24, (16711680 & o.compositionTimeOffset) >>> 16, (65280 & o.compositionTimeOffset) >>> 8, 255 & o.compositionTimeOffset]);
            return x(G.trun, new Uint8Array(n))
        }, le = function (e, t) {
            var n, i, o, r;
            for (t += 20 + 8 * (i = e.samples || []).length, n = ce(i, t), r = 0; r < i.length; r++) o = i[r], n = n.concat([(4278190080 & o.duration) >>> 24, (16711680 & o.duration) >>> 16, (65280 & o.duration) >>> 8, 255 & o.duration, (4278190080 & o.size) >>> 24, (16711680 & o.size) >>> 16, (65280 & o.size) >>> 8, 255 & o.size]);
            return x(G.trun, new Uint8Array(n))
        }, q = function (e, t) {
            return "audio" === e.type ? le(e, t) : ue(e, t)
        };
        var fe, ge, ye, me, ve, _e = {
                ftyp: D = function () {
                    return x(G.ftyp, Q, W, Q, K)
                }, mdat: function (e) {
                    return x(G.mdat, e)
                }, moof: M,
                moov: I,
                initSegment: function (e) {
                    var t, n = D(),
                        i = I(e);
                    return (t = new Uint8Array(n.byteLength + i.byteLength)).set(n), t.set(i, n.byteLength), t
                }
            },
            be = function (e) {
                return e >>> 0
            };
        ye = function (e) {
            return fe(e, ["moov", "trak"]).reduce(function (e, t) {
                var n, i, o, r, a;
                return (n = fe(t, ["tkhd"])[0]) ? (i = n[0], r = be(n[o = 0 === i ? 12 : 20] << 24 | n[o + 1] << 16 | n[o + 2] << 8 | n[o + 3]), (a = fe(t, ["mdia", "mdhd"])[0]) ? (o = 0 === (i = a[0]) ? 12 : 20, e[r] = be(a[o] << 24 | a[o + 1] << 16 | a[o + 2] << 8 | a[o + 3]), e) : null) : null
            }, {})
        }, me = function (e, t) {
            var n, i, o;
            return n = fe(t, ["moof", "traf"]), i = [].concat.apply([], n.map(function (t) {
                return fe(t, ["tfhd"]).map(function (n) {
                    var i, o;
                    return i = be(n[4] << 24 | n[5] << 16 | n[6] << 8 | n[7]), o = e[i] || 9e4, (fe(t, ["tfdt"]).map(function (e) {
                        var t, n;
                        return t = e[0], n = be(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (n *= Math.pow(2, 32), n += be(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), n
                    })[0] || 1 / 0) / o
                })
            })), o = Math.min.apply(null, i), isFinite(o) ? o : 0
        }, ve = function (e) {
            var t = fe(e, ["moov", "trak"]),
                n = [];
            return t.forEach(function (e) {
                var t = fe(e, ["mdia", "hdlr"]),
                    i = fe(e, ["tkhd"]);
                t.forEach(function (e, t) {
                    var o, r, a = ge(e.subarray(8, 12)),
                        s = i[t];
                    "vide" === a && (r = 0 === (o = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0) ? o.getUint32(12) : o.getUint32(20), n.push(r))
                })
            }), n
        };
        var ke = {
            findBox: fe = function (e, t) {
                var n, i, o, r, a, s = [];
                if (!t.length) return null;
                for (n = 0; n < e.byteLength;) i = be(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]), o = ge(e.subarray(n + 4, n + 8)), r = 1 < i ? n + i : e.byteLength, o === t[0] && (1 === t.length ? s.push(e.subarray(n + 8, r)) : (a = fe(e.subarray(n + 8, r), t.slice(1))).length && (s = s.concat(a))), n = r;
                return s
            }, parseType: ge = function (e) {
                var t = "";
                return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
            }, timescale: ye,
            startTime: me,
            videoTrackIds: ve
        };
        t.prototype.pipe = function (e) {
            return this.on("data", function (t) {
                e.push(t)
            }), this.on("done", function (t) {
                e.flush(t)
            }), e
        }, t.prototype.push = function (e) {
            this.trigger("data", e)
        }, t.prototype.flush = function (e) {
            this.trigger("done", e)
        };
        var Ee = t,
            we = /Version\/[\d.]+\s*Safari\/[\d.]+/.test(navigator.userAgent),
            Se = 3600,
            xe = function (e) {
                var t, n, i = [],
                    o = [];
                for (i.byteLength = 0, i.empty = !0, t = 0; t < e.length; t++)
                    if ("access_unit_delimiter_rbsp" === (n = e[t]).nalUnitType) {
                        if (i.length)
                            if (i.duration = n.dts - i.dts, !i.empty && 0 < i.duration) delete i.empty, o.push(i), Se = i.duration;
                            else {
                                var r = o[o.length - 1];
                                r && (r.duration += i.duration || 0)
                            }(i = [n]).empty = !0, i.byteLength = n.data.byteLength, i.pts = n.pts, i.dts = n.dts
                    } else "slice_layer_without_partitioning_rbsp_idr" === n.nalUnitType ? (i.keyFrame = !0, i.empty = !1) : "NDR" === n.nalUnitType && (i.empty = !1), i.duration = n.dts - i.dts, i.byteLength += n.data.byteLength, i.push(n);
                return (!i.duration || i.duration <= 0) && (i.duration = o[o.length - 1] && o[o.length - 1].duration || Se, Se = i.duration), !i.empty && 0 < i.duration ? (delete i.empty, o.push(i)) : o[o.length - 1] && (o[o.length - 1].duration += i.duration || 0), o
            },
            Te = function (e) {
                var t, n, i = [],
                    o = [];
                for (i.byteLength = 0, i.nalCount = 0, i.duration = 0, i.pts = e[0].pts, i.dts = e[0].dts, o.byteLength = 0, o.nalCount = 0, o.duration = 0, o.pts = e[0].pts, o.dts = e[0].dts, t = 0; t < e.length; t++)(n = e[t]).keyFrame ? (i.length && (o.push(i), o.byteLength += i.byteLength, o.nalCount += i.nalCount, o.duration += i.duration), (i = [n]).nalCount = n.length, i.byteLength = n.byteLength, i.pts = n.pts, i.dts = n.dts, i.duration = n.duration) : (i.duration += n.duration, i.nalCount += n.length, i.byteLength += n.byteLength, i.push(n));
                return o.length && i.duration <= 0 && (i.duration = o[o.length - 1].duration), o.byteLength += i.byteLength, o.nalCount += i.nalCount, o.duration += i.duration, o.push(i), o
            },
            Ae = function (e) {
                var t;
                return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
            },
            De = function (e, t) {
                var n, i, o, r, a, s, l, u = 0,
                    c = e.dts,
                    d = e.pts,
                    h = t || 0,
                    p = [];
                if (we) var f = e[e.length - 1],
                    g = e.reduce(function (e, t) {
                        return e + t.length
                    }, 0),
                    y = Math.round((f[f.length - 1].dts - e.dts) / (g - 1));
                for (n = 0; n < e.length; n++)
                    for (r = e[n], i = 0; i < r.length; i++) {
                        if ((a = r[i]).dts = Math.max(c, a.dts), a.pts = Math.max(d, a.pts), we) a.dts = c + u * y, a.duration = y, u++;
                        else {
                            var m = r[i + 1] || e[n + 1] && e[n + 1][0];
                            if (m) a.duration = Math.max(0, m.dts - a.dts);
                            else {
                                var v = r[i - 1] || e[n - 1] && e[n - 1][e[n - 1].length - 1];
                                v && (a.duration = Math.max(0, a.dts - v.dts))
                            }
                        }
                        s = a, l = void 0, (l = {
                            size: 0,
                            flags: {
                                isLeading: 0,
                                dependsOn: 1,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradationPriority: 0,
                                isNonSyncSample: 1
                            }
                        }).dataOffset = h, l.compositionTimeOffset = we ? Math.max(0, s.duration * Math.round((s.pts - s.dts) / s.duration)) : Math.round(s.pts - s.dts), l.duration = s.duration, l.size = 4 * s.length, l.size += s.byteLength, s.keyFrame && (l.flags.dependsOn = 2, l.flags.isNonSyncSample = 0), h += (o = l).size, p.push(o)
                    }
                return p
            },
            Le = function (e) {
                var t, n, i, o, r, a, s = 0,
                    l = e.byteLength,
                    u = e.nalCount,
                    c = new Uint8Array(l + 4 * u),
                    d = new DataView(c.buffer);
                for (t = 0; t < e.length; t++)
                    for (o = e[t], n = 0; n < o.length; n++)
                        for (r = o[n], i = 0; i < r.length; i++) a = r[i], d.setUint32(s, a.data.byteLength), s += 4, c.set(a.data, s), s += a.data.byteLength;
                return c
            },
            Ce = function (e, t, n) {
                switch (6 <= t && (e = 5), "mp4a.40." + (e || 2)) {
                case "mp4a.40.2":
                    if (1 === n) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === n) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === n) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === n) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === n) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === n) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                    break;
                default:
                    if (1 === n) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === n) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === n) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
                return null
            },
            Me = 9e4,
            Ie = {
                prefixWithSilence: function (e, t, n, i, o) {
                    var r = 0,
                        a = 0,
                        s = 0,
                        l = 0;
                    if (t.length) {
                        var u = Me / (e.samplerate / 1024),
                            c = {};
                        return (n || i) && (l = o - (n < i ? Me < i - n && console.warn("AV 差距过大 audio偏移过多，", (i - n) / Me) : (s = n - i, 0 < (r = Math.floor(s / u)) && (c.frontGap = (1e3 * s / Me).toFixed(3), c.frontFillCount = r, addFramesToFront(e, t, u, r))), (n = i) + t.length * u), a = Math.ceil(l / u), c.rearGap = (1e3 * l / Me).toFixed(3), c.rearFillCount = a, .001 < l / Me && 0 < a ? function (e, t, n, i) {
                            var o;
                            o = 2 < i && Ce(e.audioobjecttype, e.samplingfrequencyindex, e.channelcount) || t[t.length - 1].data;
                            for (var r = t[t.length - 1], a = 0; a < i; a++) t.push({
                                inert: !0,
                                audioobjecttype: r.audioobjecttype,
                                channelcount: r.channelcount,
                                dts: r.pts + n * (a + 1),
                                pts: r.dts + n * (a + 1),
                                data: o,
                                sampleCount: e.sampleCount,
                                samplerate: e.samplerate,
                                samplesize: e.samplesize,
                                samplingfrequencyindex: r.samplingfrequencyindex
                            })
                        }(e, t, u, a) : a < 0 && (c.rearGap = (1e3 * l / Me).toFixed(3), function (e, t) {
                            for (; 0 < t-- && e[0].insert;) e.shift();
                            for (; 0 < t--;) e.pop()
                        }(t, -a))), e.baseMediaDecodeTime = n * e.samplerate / Me, c
                    }
                }, fixAudioFrames: function (e, t, i) {
                    for (var o = Me / e.samplerate * 1024, r = 0; r < t.length; r++) {
                        var a = t[r],
                            s = a.pts - i,
                            l = 1e3 * s / Me;
                        if (s <= -o) t.splice(r, 1), r--;
                        else if (o <= s && l < 1e4 && i) {
                            var u = Math.round(s / o);
                            n(e, t, r, i, o, u), i += u * o, r += u, a.pts = a.dts = i, i += o
                        } else a.pts = a.dts = i, i += o
                    }
                    return i
                }, trimAdtsFramesByEarliestDts: function (e, t, n) {
                    return t.minSegmentDts >= n ? e : (t.minSegmentDts = 1 / 0, e.filter(function (e) {
                        return e.dts >= n && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                    }))
                }, generateSampleTable: function (e) {
                    var t, n, i = [];
                    for (t = 0; t < e.length; t++) n = e[t], i.push({
                        size: n.data.byteLength,
                        duration: 1024
                    });
                    return i
                }, concatenateFrameData: function (e) {
                    var t, n, i = 0,
                        o = new Uint8Array(function (e) {
                            var t, n = 0;
                            for (t = 0; t < e.length; t++) n += e[t].data.byteLength;
                            return n
                        }(e));
                    for (t = 0; t < e.length; t++) n = e[t], o.set(n.data, i), i += n.data.byteLength;
                    return o
                }
            },
            Pe = function (e, t) {
                delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts, delete t[e.type + "MinPts"], delete t[e.type + "MinDts"], delete t[e.type + "MaxPts"], delete t[e.type + "MaxDts"]
            },
            Re = function (e, t) {
                var n, i = e.minSegmentDts;
                return t || (i -= e.timelineStartInfo.dts), n = e.timelineStartInfo.baseMediaDecodeTime, n += i, n = Math.max(0, n), "audio" === e.type && (n *= e.samplerate / 9e4, n = Math.floor(n)), n
            },
            Oe = function (e, t, n) {
                if ("number" == typeof t.pts) {
                    var i = e.type + "MinPts",
                        o = e.type + "MaxPts";
                    void 0 === n[i] ? n[i] = t.pts : n[i] = Math.min(t.pts, n[i]), void 0 === n[o] ? n[o] = t.pts : n[o] = Math.max(t.pts, n[i]), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)
                }
                if ("number" == typeof t.duration && (n.duration = t.duration), "number" == typeof t.dts) {
                    var r = e.type + "MinDts",
                        a = e.type + "MaxDts";
                    void 0 === n[r] ? n[r] = t.dts : n[r] = Math.min(t.dts, n[r]), void 0 === n[a] ? n[a] = t.dts : n[a] = Math.max(t.dts, n[a]), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts)
                }
            },
            Ne = function (e) {
                if (e.continuous && e.dts && e.videoMaxDts - e.dts < e.nextVideoDts && (e.pts = void 0, e.dts = void 0), void 0 === e.audioMinPts && (e.audioMinPts = e.videoMinPts), void 0 === e.audioMinDts && (e.audioMinDts = e.videoMinDts), void 0 === e.pts && e.videoMinPts && e.audioMinPts) {
                    var t = Math.min(e.videoMinPts, e.audioMinPts);
                    e.audioVideoShift = e.audioMinPts - e.videoMinPts, e.pts = t - (9e4 * e.timeOffset || 0)
                }
                if (void 0 === e.dts && e.videoMinDts && e.audioMinDts) {
                    var n = Math.min(e.videoMinDts, e.audioMinDts);
                    e.dts = n - (9e4 * e.timeOffset || 0)
                }
            },
            je = function (e) {
                delete e.pts, delete e.dts, i(e)
            },
            Ue = function (e) {
                for (var t = 0, n = {
                    payloadType: -1,
                    payloadSize: 0
                }, i = 0, o = 0; t < e.byteLength && 128 !== e[t];) {
                    for (; 255 === e[t];) i += 255, t++;
                    for (i += e[t++]; 255 === e[t];) o += 255, t++;
                    if (o += e[t++], !n.payload && 4 === i) {
                        n.payloadType = i, n.payloadSize = o, n.payload = e.subarray(t, t + o);
                        break
                    }
                    t += o, o = i = 0
                }
                return n
            },
            Be = function (e) {
                return 181 !== e.payload[0] ? null : 49 != (e.payload[1] << 8 | e.payload[2]) ? null : "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) ? null : 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
            },
            Fe = function (e, t) {
                var n, i, o, r, a = [];
                if (!(64 & t[0])) return a;
                for (i = 31 & t[0], n = 0; n < i; n++) r = {
                    type: 3 & t[2 + (o = 3 * n)],
                    pts: e
                }, 4 & t[2 + o] && (r.ccData = t[3 + o] << 8 | t[4 + o], a.push(r));
                return a
            },
            ze = function (e) {
                for (var t, n, i = e.byteLength, o = [], r = 1; r < i - 2;) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (o.push(r + 2), r += 2) : r++;
                if (0 === o.length) return e;
                t = i - o.length, n = new Uint8Array(t);
                var a = 0;
                for (r = 0; r < t; a++, r++) a === o[0] && (a++, o.shift()), n[r] = e[a];
                return n
            };
        (o.prototype = new Ee).push = function (e) {
            var t, n, i;
            if ("sei_rbsp" === e.nalUnitType && 4 === (t = Ue(e.escapedRBSP)).payloadType && (n = Be(t)))
                if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0;
                else {
                    if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return void(--this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
                    i = Fe(e.pts, n), this.captionPackets_ = this.captionPackets_.concat(i), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
                }
        }, o.prototype.flush = function () {
            this.captionPackets_.length ? (this.captionPackets_.forEach(function (e, t) {
                e.presortIndex = t
            }), this.captionPackets_.sort(function (e, t) {
                return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
            }), this.captionPackets_.forEach(function (e) {
                e.type < 2 && this.dispatchCea608Packet(e)
            }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (e) {
                e.flush()
            }, this)) : this.ccStreams_.forEach(function (e) {
                e.flush()
            }, this)
        }, o.prototype.reset = function () {
            this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (e) {
                e.reset()
            })
        }, o.prototype.dispatchCea608Packet = function (e) {
            this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
        }, o.prototype.setsChannel1Active = function (e) {
            return 4096 == (30720 & e.ccData)
        }, o.prototype.setsChannel2Active = function (e) {
            return 6144 == (30720 & e.ccData)
        };
        var He = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                304: 174,
                305: 176,
                306: 189,
                307: 191,
                308: 8482,
                309: 162,
                310: 163,
                311: 9834,
                312: 224,
                313: 160,
                314: 232,
                315: 226,
                316: 234,
                317: 238,
                318: 244,
                319: 251,
                544: 193,
                545: 201,
                546: 211,
                547: 218,
                548: 220,
                549: 252,
                550: 8216,
                551: 161,
                552: 42,
                553: 39,
                554: 8212,
                555: 169,
                556: 8480,
                557: 8226,
                558: 8220,
                559: 8221,
                560: 192,
                561: 194,
                562: 199,
                563: 200,
                564: 202,
                565: 203,
                566: 235,
                567: 206,
                568: 207,
                569: 239,
                570: 212,
                571: 217,
                572: 249,
                573: 219,
                574: 171,
                575: 187,
                800: 195,
                801: 227,
                802: 205,
                803: 204,
                804: 236,
                805: 210,
                806: 242,
                807: 213,
                808: 245,
                809: 123,
                810: 125,
                811: 92,
                812: 94,
                813: 95,
                814: 124,
                815: 126,
                816: 196,
                817: 228,
                818: 214,
                819: 246,
                820: 223,
                821: 165,
                822: 164,
                823: 9474,
                824: 197,
                825: 229,
                826: 216,
                827: 248,
                828: 9484,
                829: 9488,
                830: 9492,
                831: 9496
            },
            Ye = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
            Ve = function e(t, n) {
                e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = n || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (e) {
                    var t, n, i, o, s;
                    if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
                        if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), i = t >>> 8, o = 255 & t, t !== this.PADDING_)
                            if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn";
                            else if (t === this.END_OF_CAPTION_) this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), n = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = n, this.startPts_ = e.pts;
                        else if (t === this.ROLL_UP_2_ROWS_) this.rollUpRows_ = 2, this.setRollUp(e.pts);
                        else if (t === this.ROLL_UP_3_ROWS_) this.rollUpRows_ = 3, this.setRollUp(e.pts);
                        else if (t === this.ROLL_UP_4_ROWS_) this.rollUpRows_ = 4, this.setRollUp(e.pts);
                        else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts;
                        else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                        else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = a();
                        else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = a();
                        else if (t === this.RESUME_DIRECT_CAPTIONING_) "paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = a()), this.mode_ = "paintOn", this.startPts_ = e.pts;
                        else if (this.isSpecialCharacter(i, o)) s = r((i = (3 & i) << 8) | o), this[this.mode_](e.pts, s), this.column_++;
                        else if (this.isExtCharacter(i, o)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1), s = r((i = (3 & i) << 8) | o), this[this.mode_](e.pts, s), this.column_++;
                        else if (this.isMidRowCode(i, o)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & o) && this.addFormatting(e.pts, ["i"]), 1 == (1 & o) && this.addFormatting(e.pts, ["u"]);
                        else if (this.isOffsetControlCode(i, o)) this.column_ += 3 & o;
                        else if (this.isPAC(i, o)) {
                            var l = Ye.indexOf(7968 & t);
                            "rollUp" === this.mode_ && (l - this.rollUpRows_ + 1 < 0 && (l = this.rollUpRows_ - 1), this.setRollUp(e.pts, l)), l !== this.row_ && (this.clearFormatting(e.pts), this.row_ = Math.max(0, l)), 1 & o && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(o) && 14 == (14 & o) && this.addFormatting(e.pts, ["i"])
                        } else this.isNormalChar(i) && (0 === o && (o = null), s = r(i), s += r(o), this[this.mode_](e.pts, s), this.column_ += s.length)
                    } else this.lastControlCode_ = null
                }
            };
        Ve.prototype = new Ee, Ve.prototype.flushDisplayed = function (e) {
            var t = this.displayed_.map(function (e) {
                try {
                    return e.trim()
                } catch (e) {
                    return console.error("Skipping malformed caption."), ""
                }
            }).join("\\n").replace(/^\\n+|\\n+$/g, "");
            t.length && this.trigger("data", {
                startPts: this.startPts_,
                endPts: e,
                text: t,
                stream: this.name_
            })
        }, Ve.prototype.reset = function () {
            this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = a(), this.nonDisplayed_ = a(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.rollUpRows_ = 2, this.formatting_ = []
        }, Ve.prototype.setConstants = function () {
            0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
        }, Ve.prototype.isSpecialCharacter = function (e, t) {
            return e === this.EXT_ && 48 <= t && t <= 63
        }, Ve.prototype.isExtCharacter = function (e, t) {
            return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
        }, Ve.prototype.isMidRowCode = function (e, t) {
            return e === this.EXT_ && 32 <= t && t <= 47
        }, Ve.prototype.isOffsetControlCode = function (e, t) {
            return e === this.OFFSET_ && 33 <= t && t <= 35
        }, Ve.prototype.isPAC = function (e, t) {
            return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
        }, Ve.prototype.isColorPAC = function (e) {
            return 64 <= e && e <= 79 || 96 <= e && e <= 127
        }, Ve.prototype.isNormalChar = function (e) {
            return 32 <= e && e <= 127
        }, Ve.prototype.setRollUp = function (e, t) {
            if ("rollUp" !== this.mode_ && (this.row_ = 14, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = a(), this.displayed_ = a()), void 0 !== t && t !== this.row_)
                for (var n = 0; n < this.rollUpRows_; n++) this.displayed_[t - n] = this.displayed_[this.row_ - n], this.displayed_[this.row_ - n] = "";
            void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
        }, Ve.prototype.addFormatting = function (e, t) {
            this.formatting_ = this.formatting_.concat(t);
            var n = t.reduce(function (e, t) {
                return e + "<" + t + ">"
            }, "");
            this[this.mode_](e, n)
        }, Ve.prototype.clearFormatting = function (e) {
            if (this.formatting_.length) {
                var t = this.formatting_.reverse().reduce(function (e, t) {
                    return e + "</" + t + ">"
                }, "");
                this.formatting_ = [], this[this.mode_](e, t)
            }
        }, Ve.prototype.popOn = function (e, t) {
            var n = this.nonDisplayed_[this.row_];
            n += t, this.nonDisplayed_[this.row_] = n
        }, Ve.prototype.rollUp = function (e, t) {
            var n = this.displayed_[this.row_];
            n += t, this.displayed_[this.row_] = n
        }, Ve.prototype.shiftRowsUp_ = function () {
            var e;
            for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
            for (e = this.row_ + 1; e < 15; e++) this.displayed_[e] = "";
            for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
            this.displayed_[this.row_] = ""
        }, Ve.prototype.paintOn = function (e, t) {
            var n = this.displayed_[this.row_];
            n += t, this.displayed_[this.row_] = n
        };
        var qe = {
                CaptionStream: o,
                Cea608Stream: Ve
            },
            Ge = {
                H264_STREAM_TYPE: 27,
                ADTS_STREAM_TYPE: 15,
                METADATA_STREAM_TYPE: 21
            },
            Qe = {
                16: 10,
                24: 12,
                32: 14
            },
            We = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
            Ke = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
            Xe = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
            Je = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
            Ze = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
            $e = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
            et = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
            tt = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
            nt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
            it = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
            ot = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
            rt = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
            at = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
            st = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
            lt = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
        p.prototype._prepare = function () {
            var e = Qe[this.key.length];
            if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
            this._Ke = [], this._Kd = [];
            for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
            var n, i = 4 * (e + 1),
                o = this.key.length / 4,
                r = h(this.key);
            for (t = 0; t < o; t++) n = t >> 2, this._Ke[n][t % 4] = r[t], this._Kd[e - n][t % 4] = r[t];
            for (var a, s = 0, l = o; l < i;) {
                if (a = r[o - 1], r[0] ^= Ke[a >> 16 & 255] << 24 ^ Ke[a >> 8 & 255] << 16 ^ Ke[255 & a] << 8 ^ Ke[a >> 24 & 255] ^ We[s] << 24, s += 1, 8 != o)
                    for (t = 1; t < o; t++) r[t] ^= r[t - 1];
                else {
                    for (t = 1; t < o / 2; t++) r[t] ^= r[t - 1];
                    for (a = r[o / 2 - 1], r[o / 2] ^= Ke[255 & a] ^ Ke[a >> 8 & 255] << 8 ^ Ke[a >> 16 & 255] << 16 ^ Ke[a >> 24 & 255] << 24, t = o / 2 + 1; t < o; t++) r[t] ^= r[t - 1]
                }
                for (t = 0; t < o && l < i;) u = l >> 2, c = l % 4, this._Ke[u][c] = r[t], this._Kd[e - u][c] = r[t++], l++
            }
            for (var u = 1; u < e; u++)
                for (var c = 0; c < 4; c++) a = this._Kd[u][c], this._Kd[u][c] = rt[a >> 24 & 255] ^ at[a >> 16 & 255] ^ st[a >> 8 & 255] ^ lt[255 & a]
        }, p.prototype.encrypt = function (e) {
            if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
            for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], i = h(e), o = 0; o < 4; o++) i[o] ^= this._Ke[0][o];
            for (var r = 1; r < t; r++) {
                for (o = 0; o < 4; o++) n[o] = Je[i[o] >> 24 & 255] ^ Ze[i[(o + 1) % 4] >> 16 & 255] ^ $e[i[(o + 2) % 4] >> 8 & 255] ^ et[255 & i[(o + 3) % 4]] ^ this._Ke[r][o];
                i = n.slice()
            }
            var a, s = c(16);
            for (o = 0; o < 4; o++) a = this._Ke[t][o], s[4 * o] = 255 & (Ke[i[o] >> 24 & 255] ^ a >> 24), s[4 * o + 1] = 255 & (Ke[i[(o + 1) % 4] >> 16 & 255] ^ a >> 16), s[4 * o + 2] = 255 & (Ke[i[(o + 2) % 4] >> 8 & 255] ^ a >> 8), s[4 * o + 3] = 255 & (Ke[255 & i[(o + 3) % 4]] ^ a);
            return s
        }, p.prototype.decrypt = function (e) {
            if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
            for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], i = h(e), o = 0; o < 4; o++) i[o] ^= this._Kd[0][o];
            for (var r = 1; r < t; r++) {
                for (o = 0; o < 4; o++) n[o] = tt[i[o] >> 24 & 255] ^ nt[i[(o + 3) % 4] >> 16 & 255] ^ it[i[(o + 2) % 4] >> 8 & 255] ^ ot[255 & i[(o + 1) % 4]] ^ this._Kd[r][o];
                i = n.slice()
            }
            var a, s = c(16);
            for (o = 0; o < 4; o++) a = this._Kd[t][o], s[4 * o] = 255 & (Xe[i[o] >> 24 & 255] ^ a >> 24), s[4 * o + 1] = 255 & (Xe[i[(o + 3) % 4] >> 16 & 255] ^ a >> 16), s[4 * o + 2] = 255 & (Xe[i[(o + 2) % 4] >> 8 & 255] ^ a >> 8), s[4 * o + 3] = 255 & (Xe[255 & i[(o + 1) % 4]] ^ a);
            return s
        }, f.prototype.encrypt = function (e) {
            if ((e = u(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
            for (var t = c(e.length), n = c(16), i = 0; i < e.length; i += 16) d(e, n, 0, i, i + 16), d(n = this._aes.encrypt(n), t, i);
            return t
        }, f.prototype.decrypt = function (e) {
            if ((e = u(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
            for (var t = c(e.length), n = c(16), i = 0; i < e.length; i += 16) d(e, n, 0, i, i + 16), d(n = this._aes.decrypt(n), t, i);
            return t
        };
        var ut = {
                AES: p,
                ModeOfOperation: {
                    ecb: f
                },
                _arrayTest: {
                    coerceArray: u,
                    createArray: c,
                    copyArray: d
                }
            },
            ct = null,
            dt = function (e, t) {
                null != t && (ct = new ut.ModeOfOperation.ecb(t)), ct = ct || new ut.ModeOfOperation.ecb(t);
                var n = e.length,
                    i = n % 16;
                if (i) {
                    var o = ct.decrypt(e.subarray(0, n - i)),
                        r = e.subarray(n - i),
                        a = new Uint8Array(o.length + r.length);
                    return a.set(o, 0), a.set(r, o.length), a
                }
                return ct.decrypt(e)
            };
        y.prototype = new Ee;
        var ht, pt = y,
            ft = {
                TXXX: function (e) {
                    var t;
                    if (3 === e.data[0]) {
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = v(e.data, 1, t), e.value = v(e.data, t + 1, e.data.length).replace(/\0*$/, "");
                                break
                            }
                        e.data = e.value
                    }
                }, WXXX: function (e) {
                    var t;
                    if (3 === e.data[0])
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = v(e.data, 1, t), e.url = v(e.data, t + 1, e.data.length);
                                break
                            }
                }, PRIV: function (e) {
                    var t, n;
                    for (t = 0; t < e.data.length; t++)
                        if (0 === e.data[t]) {
                            e.owner = (n = e.data, unescape(m(n, 0, t)));
                            break
                        }
                    e.privateData = e.data.subarray(t + 1), e.data = e.privateData
                }
            };
        (ht = function (e) {
            var t, n = {
                    debug: !(!e || !e.debug),
                    descriptor: e && e.descriptor
                },
                i = 0,
                o = [],
                r = 0;
            if (ht.prototype.init.call(this), this.dispatchType = Ge.METADATA_STREAM_TYPE.toString(16), n.descriptor)
                for (t = 0; t < n.descriptor.length; t++) this.dispatchType += ("00" + n.descriptor[t].toString(16)).slice(-2);
            this.push = function (e) {
                var t, a, s, l, u;
                if ("timed-metadata" === e.type)
                    if (e.dataAlignmentIndicator && (r = 0, o.length = 0), 0 === o.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) n.debug && console.log("Skipping unrecognized metadata packet");
                    else if (o.push(e), r += e.data.byteLength, 1 === o.length && (i = _(e.data.subarray(6, 10)), i += 10), !(r < i)) {
                    for (t = {
                        data: new Uint8Array(i),
                        frames: [],
                        pts: o[0].pts,
                        dts: o[0].dts
                    }, u = 0; u < i;) t.data.set(o[0].data.subarray(0, i - u), u), u += o[0].data.byteLength, r -= o[0].data.byteLength, o.shift();
                    a = 10, 64 & t.data[5] && (a += 4, a += _(t.data.subarray(10, 14)), i -= _(t.data.subarray(16, 20)));
                    do {
                        if ((s = _(t.data.subarray(a + 4, a + 8))) < 1) return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                        if ((l = {
                            id: String.fromCharCode(t.data[a], t.data[a + 1], t.data[a + 2], t.data[a + 3]),
                            data: t.data.subarray(a + 10, a + s + 10)
                        }).key = l.id, ft[l.id] && (ft[l.id](l), "com.apple.streaming.transportStreamTimestamp" === l.owner)) {
                            var c = l.data,
                                d = (1 & c[3]) << 30 | c[4] << 22 | c[5] << 14 | c[6] << 6 | c[7] >>> 2;
                            d *= 4, d += 3 & c[7], l.timeStamp = d, void 0 === t.pts && void 0 === t.dts && (t.pts = l.timeStamp, t.dts = l.timeStamp), this.trigger("timestamp", l)
                        }
                        t.frames.push(l), a += 10, a += s
                    } while (a < i);
                    this.trigger("data", t)
                }
            }
        }).prototype = new Ee;
        var gt, yt, mt, vt = ht,
            _t = pt;
        (gt = function () {
            var e = new Uint8Array(188),
                t = 0;
            gt.prototype.init.call(this), this.push = function (n) {
                var i, o = 0,
                    r = 188;
                for (t ? ((i = new Uint8Array(n.byteLength + t)).set(e.subarray(0, t)), i.set(n, t), t = 0) : i = n; r < i.byteLength;) 71 !== i[o] || 71 !== i[r] ? (o++, r++) : (this.trigger("data", i.subarray(o, r)), o += 188, r += 188);
                o < i.byteLength && (e.set(i.subarray(o), 0), t = i.byteLength - o)
            }, this.flush = function () {
                188 === t && 71 === e[0] && (this.trigger("data", e), t = 0), this.trigger("done")
            }
        }).prototype = new Ee, (yt = function () {
            var e, t, n, i;
            yt.prototype.init.call(this), (i = this).packetsWaitingForPmt = [], this.programMapTable = void 0, e = function (e, i) {
                var o = 0;
                i.payloadUnitStartIndicator && (o += e[o] + 1), "pat" === i.type ? t(e.subarray(o), i) : n(e.subarray(o), i)
            }, t = function (e, t) {
                t.section_number = e[7], t.last_section_number = e[8], i.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = i.pmtPid
            }, n = function (e, t) {
                var n, o;
                if (1 & e[5]) {
                    for (i.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    }, n = 3 + ((15 & e[1]) << 8 | e[2]) - 4, o = 12 + ((15 & e[10]) << 8 | e[11]); o < n;) {
                        var r = e[o],
                            a = (31 & e[o + 1]) << 8 | e[o + 2];
                        r === Ge.H264_STREAM_TYPE && null === i.programMapTable.video ? i.programMapTable.video = a : r === Ge.ADTS_STREAM_TYPE && null === i.programMapTable.audio ? i.programMapTable.audio = a : r === Ge.METADATA_STREAM_TYPE && (i.programMapTable["timed-metadata"][a] = r), o += 5 + ((15 & e[o + 3]) << 8 | e[o + 4])
                    }
                    t.programMapTable = i.programMapTable
                }
            }, this.push = function (t) {
                var n = {},
                    i = 4;
                if (n.payloadUnitStartIndicator = !!(64 & t[1]), n.pid = 31 & t[1], n.pid <<= 8, n.pid |= t[2], 1 < (48 & t[3]) >>> 4 && (i += t[i] + 1), 0 === n.pid) n.type = "pat", e(t.subarray(i), n), this.trigger("data", n);
                else if (n.pid === this.pmtPid)
                    for (n.type = "pmt", e(t.subarray(i), n), this.trigger("data", n); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
                else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, i, n]) : this.processPes_(t, i, n)
            }, this.processPes_ = function (e, t, n) {
                n.pid === this.programMapTable.video ? n.streamType = Ge.H264_STREAM_TYPE : n.pid === this.programMapTable.audio ? n.streamType = Ge.ADTS_STREAM_TYPE : n.streamType = this.programMapTable["timed-metadata"][n.pid], n.type = "pes", n.data = e.subarray(t), this.trigger("data", n)
            }
        }).prototype = new Ee, yt.STREAM_TYPES = {
            h264: 27,
            adts: 15
        }, (mt = function (e) {
            function t(t, i, o) {
                //debugger;
                //console.log(t);
                //console.log(e.decodeKey);
                var r, s, l = new Uint8Array(t.size),
                    u = {
                        type: i
                    },
                    c = 0,
                    d = 0;
                if (t.data.length && !(t.size < 9)) {
                    for (u.trackId = t.data[0].pid, c = 0; c < t.data.length; c++) s = t.data[c], l.set(s.data, d), d += s.data.byteLength;
                    ! function (t, n) {
                        var i;
                        n.packetLength = 6 + (t[4] << 8 | t[5]), n.dataAlignmentIndicator = 0 != (4 & t[6]), 192 & (i = t[7]) && (n.pts = (14 & t[9]) << 27 | (255 & t[10]) << 20 | (254 & t[11]) << 12 | (255 & t[12]) << 5 | (254 & t[13]) >>> 3, n.pts *= 4, n.pts += (6 & t[13]) >>> 1, n.dts = n.pts, 64 & i && (n.dts = (14 & t[14]) << 27 | (255 & t[15]) << 20 | (254 & t[16]) << 12 | (255 & t[17]) << 5 | (254 & t[18]) >>> 3, n.dts *= 4, n.dts += (6 & t[18]) >>> 1)), n.data = t.subarray(9 + t[8]), e.decodeKey && a && (n.data = dt(n.data, e.decodeKey))
                    }(l, u), r = "video" === i || u.packetLength <= t.size, (o || r) && (t.size = 0, t.data.length = 0), r && n.trigger("data", u)
                }
            }
            var n = this,
                i = {
                    data: [],
                    size: 0
                },
                o = {
                    data: [],
                    size: 0
                },
                r = {
                    data: [],
                    size: 0
                },
                a = !1;
            mt.prototype.init.call(this), this.setEncrypted = function (e) {
                a = e
            }, this.push = function (e) {
                ({
                    pat: function () {}, pes: function () {
                        var n, a;
                        switch (e.streamType) {
                        case Ge.H264_STREAM_TYPE:
                        case Ge.H264_STREAM_TYPE:
                            n = i, a = "video";
                            break;
                        case Ge.ADTS_STREAM_TYPE:
                            n = o, a = "audio";
                            break;
                        case Ge.METADATA_STREAM_TYPE:
                            n = r, a = "timed-metadata";
                            break;
                        default:
                            return
                        }
                        e.payloadUnitStartIndicator && t(n, a, !0), n.data.push(e), n.size += e.data.byteLength
                    }, pmt: function () {
                        var t = {
                                type: "metadata",
                                tracks: []
                            },
                            i = e.programMapTable;
                        i && null !== i.video && t.tracks.push({
                            timelineStartInfo: {
                                baseMediaDecodeTime: 0
                            },
                            id: +i.video,
                            codec: "avc",
                            type: "video"
                        }), i && null !== i.audio && t.tracks.push({
                            timelineStartInfo: {
                                baseMediaDecodeTime: 0
                            },
                            id: +i.audio,
                            codec: "adts",
                            type: "audio"
                        }), n.trigger("data", t)
                    }
                })[e.type]()
            }, this.flush = function () {
                //debugger;
                t(o, "audio"), t(i, "video"), t(r, "timed-metadata"), this.trigger("done")
            }
        }).prototype = new Ee;
        var bt = {
            PAT_PID: 0,
            MP2T_PACKET_LENGTH: 188,
            TransportPacketStream: gt,
            TransportParseStream: yt,
            ElementaryStream: mt,
            TimestampRolloverStream: _t,
            CaptionStream: qe.CaptionStream,
            Cea608Stream: qe.Cea608Stream,
            MetadataStream: vt
        };
        for (var kt in Ge) Ge.hasOwnProperty(kt) && (bt[kt] = Ge[kt]);
        var Et, wt = bt,
            St = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
        (Et = function () {
            var e;
            Et.prototype.init.call(this), this.push = function (t) {
                var n, i, o, r, a, s, l = 0,
                    u = 0;
                if ("audio" === t.type)
                    for (e ? (r = e, (e = new Uint8Array(r.byteLength + t.data.byteLength)).set(r), e.set(t.data, r.byteLength)) : e = t.data; l + 5 < e.length;)
                        if (255 === e[l] && 240 == (246 & e[l + 1])) {
                            if (i = 2 * (1 & ~e[l + 1]), n = (3 & e[l + 3]) << 11 | e[l + 4] << 3 | (224 & e[l + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & e[l + 6]))) / St[(60 & e[l + 2]) >>> 2], o = l + n, e.byteLength < o) return;
                            if (this.trigger("data", {
                                pts: t.pts + u * s,
                                dts: t.dts + u * s,
                                sampleCount: a,
                                audioobjecttype: 1 + (e[l + 2] >>> 6 & 3),
                                channelcount: (1 & e[l + 2]) << 2 | (192 & e[l + 3]) >>> 6,
                                samplerate: St[(60 & e[l + 2]) >>> 2],
                                samplingfrequencyindex: (60 & e[l + 2]) >>> 2,
                                samplesize: 16,
                                data: e.subarray(l + 7 + i, o)
                            }), e.byteLength === o) return void(e = void 0);
                            u++, e = e.subarray(o)
                        } else l++
            }, this.flush = function () {
                this.trigger("done")
            }
        }).prototype = new Ee;
        var xt, Tt, At, Dt, Lt = Et,
            Ct = function (e) {
                var t = e.byteLength,
                    n = 0,
                    i = 0;
                this.length = function () {
                    return 8 * t
                }, this.bitsAvailable = function () {
                    return 8 * t + i
                }, this.loadWord = function () {
                    var o = e.byteLength - t,
                        r = new Uint8Array(4),
                        a = Math.min(4, t);
                    if (0 === a) throw new Error("no bytes available");
                    r.set(e.subarray(o, o + a)), n = new DataView(r.buffer).getUint32(0), i = 8 * a, t -= a
                }, this.skipBits = function (e) {
                    var o;
                    e < i || (e -= i, e -= 8 * (o = Math.floor(e / 8)), t -= o, this.loadWord()), n <<= e, i -= e
                }, this.readBits = function (e) {
                    var o = Math.min(i, e),
                        r = n >>> 32 - o;
                    return 0 < (i -= o) ? n <<= o : 0 < t && this.loadWord(), 0 < (o = e - o) ? r << o | this.readBits(o) : r
                }, this.skipLeadingZeros = function () {
                    var e;
                    for (e = 0; e < i; ++e)
                        if (0 != (n & 2147483648 >>> e)) return n <<= e, i -= e, e;
                    return this.loadWord(), e + this.skipLeadingZeros()
                }, this.skipUnsignedExpGolomb = function () {
                    this.skipBits(1 + this.skipLeadingZeros())
                }, this.skipExpGolomb = function () {
                    this.skipBits(1 + this.skipLeadingZeros())
                }, this.readUnsignedExpGolomb = function () {
                    var e = this.skipLeadingZeros();
                    return this.readBits(e + 1) - 1
                }, this.readExpGolomb = function () {
                    var e = this.readUnsignedExpGolomb();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }, this.readBoolean = function () {
                    return 1 === this.readBits(1)
                }, this.readUnsignedByte = function () {
                    return this.readBits(8)
                }, this.loadWord()
            };
        (Tt = function () {
            var e, t, n = 0;
            Tt.prototype.init.call(this), this.push = function (i) {
                var o;
                for (t = t ? ((o = new Uint8Array(t.byteLength + i.data.byteLength)).set(t), o.set(i.data, t.byteLength), o) : i.data; n < t.byteLength - 3; n++)
                    if (1 === t[n + 2]) {
                        e = n + 5;
                        break
                    }
                for (; e < t.byteLength;) switch (t[e]) {
                case 0:
                    if (0 !== t[e - 1]) {
                        e += 2;
                        break
                    }
                    if (0 !== t[e - 2]) {
                        e++;
                        break
                    }
                    for (n + 3 !== e - 2 && this.trigger("data", t.subarray(n + 3, e - 2)); 1 !== t[++e] && e < t.length;);
                    n = e - 2, e += 3;
                    break;
                case 1:
                    if (0 !== t[e - 1] || 0 !== t[e - 2]) {
                        e += 3;
                        break
                    }
                    n + 3 !== e - 2 && this.trigger("data", t.subarray(n + 3, e - 2)), n = e - 2, e += 3;
                    break;
                default:
                    e += 3
                }
                t = t.subarray(n), e -= n, n = 0
            }, this.flush = function () {
                t && 3 < t.byteLength && this.trigger("data", t.subarray(n + 3)), t = null, n = 0, this.trigger("done")
            }
        }).prototype = new Ee, At = {
            100: !0,
            110: !0,
            122: !0,
            244: !0,
            44: !0,
            83: !0,
            86: !0,
            118: !0,
            128: !0,
            138: !0,
            139: !0,
            134: !0
        }, (xt = function () {
            var e, t, n, i, o, r, a, s = new Tt;
            xt.prototype.init.call(this), (e = this).push = function (e) {
                "video" === e.type && (t = e.trackId, n = e.pts, i = e.dts, s.push(e))
            }, s.on("data", function (a) {
                var s = {
                    trackId: t,
                    pts: n,
                    dts: i,
                    data: a
                };
                switch (31 & a[0]) {
                case 1:
                    s.nalUnitType = "NDR";
                    break;
                case 5:
                    s.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                    break;
                case 6:
                    s.nalUnitType = "sei_rbsp", s.escapedRBSP = o(a.subarray(1));
                    break;
                case 7:
                    s.nalUnitType = "seq_parameter_set_rbsp", s.escapedRBSP = o(a.subarray(1)), s.config = r(s.escapedRBSP);
                    break;
                case 8:
                    s.nalUnitType = "pic_parameter_set_rbsp";
                    break;
                case 9:
                    s.nalUnitType = "access_unit_delimiter_rbsp";
                    break;
                default:
                    return
                }
                e.trigger("data", s)
            }), s.on("done", function () {
                e.trigger("done")
            }), this.flush = function () {
                s.flush()
            }, a = function (e, t) {
                var n, i = 8,
                    o = 8;
                for (n = 0; n < e; n++) 0 !== o && (o = (i + t.readExpGolomb() + 256) % 256), i = 0 === o ? i : o
            }, o = function (e) {
                for (var t, n, i = e.byteLength, o = [], r = 1; r < i - 2;) 0 === e[r] && 0 === e[r + 1] && 3 === e[r + 2] ? (o.push(r + 2), r += 2) : r++;
                if (0 === o.length) return e;
                t = i - o.length, n = new Uint8Array(t);
                var a = 0;
                for (r = 0; r < t; a++, r++) a === o[0] && (a++, o.shift()), n[r] = e[a];
                return n
            }, r = function (e) {
                var t, n, i, o, r, s, l, u, c, d, h, p, f = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    v = [1, 1];
                try {
                    if (n = (t = new Ct(e)).readUnsignedByte(), o = t.readUnsignedByte(), i = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), At[n] && (3 === (r = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                        for (h = 3 !== r ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && a(p < 6 ? 16 : 64, t);
                    if (t.skipUnsignedExpGolomb(), 0 === (s = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
                    else if (1 === s)
                        for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), l = t.readUnsignedExpGolomb(), p = 0; p < l; p++) t.skipExpGolomb();
                    if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), c = t.readUnsignedExpGolomb(), 0 === (d = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
                        switch (t.readUnsignedByte()) {
                        case 1:
                            v = [1, 1];
                            break;
                        case 2:
                            v = [12, 11];
                            break;
                        case 3:
                            v = [10, 11];
                            break;
                        case 4:
                            v = [16, 11];
                            break;
                        case 5:
                            v = [40, 33];
                            break;
                        case 6:
                            v = [24, 11];
                            break;
                        case 7:
                            v = [20, 11];
                            break;
                        case 8:
                            v = [32, 11];
                            break;
                        case 9:
                            v = [80, 33];
                            break;
                        case 10:
                            v = [18, 11];
                            break;
                        case 11:
                            v = [15, 11];
                            break;
                        case 12:
                            v = [64, 33];
                            break;
                        case 13:
                            v = [160, 99];
                            break;
                        case 14:
                            v = [4, 3];
                            break;
                        case 15:
                            v = [3, 2];
                            break;
                        case 16:
                            v = [2, 1];
                            break;
                        case 255:
                            v = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
                        }
                        v && (v[0], v[1])
                    }
                } catch (e) {
                    if (Dt) return Dt;
                    throw e
                }
                return Dt = {
                    profileIdc: n,
                    levelIdc: i,
                    sarRatio: v,
                    profileCompatibility: o,
                    width: Math.ceil(16 * (u + 1) - 2 * f - 2 * g),
                    height: (2 - d) * (c + 1) * 16 - 2 * y - 2 * m
                }
            }
        }).prototype = new Ee;
        var Mt, It = {
                H264Stream: xt,
                NalByteStream: Tt
            },
            Pt = function (e) {
                return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
            },
            Rt = function (e, t) {
                var n = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
                return (16 & e[t + 5]) >> 4 ? 20 + n : 10 + n
            },
            Ot = function (e, t) {
                var n = (224 & e[t + 5]) >> 5,
                    i = e[t + 4] << 3;
                return 6144 & e[t + 3] | i | n
            };
        (Mt = function () {
            var e = new Uint8Array,
                t = 0;
            Mt.prototype.init.call(this), this.setTimestamp = function (e) {
                t = e
            }, this.push = function (n) {
                var i, o, r, a, s = 0,
                    l = 0;
                for (e.length ? (a = e.length, (e = new Uint8Array(n.byteLength + a)).set(e.subarray(0, a)), e.set(n, a)) : e = n; 3 <= e.length - l;)
                    if (e[l] !== "I".charCodeAt(0) || e[l + 1] !== "D".charCodeAt(0) || e[l + 2] !== "3".charCodeAt(0))
                        if (255 != (255 & e[l]) || 240 != (240 & e[l + 1])) l++;
                        else {
                            if (e.length - l < 7) break;
                            if (l + (s = Ot(e, l)) > e.length) break;
                            r = {
                                type: "audio",
                                data: e.subarray(l, l + s),
                                pts: t,
                                dts: t
                            }, this.trigger("data", r), l += s
                        } else {
                    if (e.length - l < 10) break;
                    if (l + (s = Rt(e, l)) > e.length) break;
                    o = {
                        type: "timed-metadata",
                        data: e.subarray(l, l + s)
                    }, this.trigger("data", o), l += s
                }
                i = e.length - l, e = 0 < i ? e.subarray(l) : new Uint8Array
            }
        }).prototype = new Ee;
        var Nt, jt, Ut, Bt, Ft = Mt,
            zt = It.H264Stream,
            Ht = Pt,
            Yt = /Version\/[\d.]+\s*Safari\/[\d.]+/.test(navigator.userAgent),
            Vt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
            qt = ["width", "height", "profileIdc", "levelIdc", "sarRatio", "profileCompatibility"],
            Gt = {};
        (jt = function (e, t) {
            var n = [],
                i = 0;
            t = t || {}, jt.prototype.init.call(this), this.push = function (t) {
                Oe(e, t, Gt), e && Vt.forEach(function (n) {
                    e[n] = t[n]
                }), n.push(t)
            }, this.setEarliestDts = function (t) {
                e.timelineStartInfo.baseMediaDecodeTime
            }, this.setVideoBaseMediaDecodeTime = function (e) {}, this.setAudioAppendStart = function (t) {
                e.samplerate
            }, this.flush = function () {
                var o, r, a, s;
                if (0 !== n.length) {
                    //debugger;
                    o = n;
                    var l = 9e4 / e.samplerate;
                    Ne(Gt), e.rawPts = [o[0].pts, o[o.length - 1].pts + o[o.length - 1].sampleCount * l], e.baseMediaDecodeTime = Re(e, t.keepOriginalTimestamps), o.forEach(function (e) {
                        e.pts = e.dts = Math.max(0, e.pts - Gt.pts)
                    }), o = o.filter(function (e) {
                        return 0 <= e.pts
                    });
                    var u = Gt.nextAudioPts;
                    if (e.ref = u, e.disc = Gt.continuous, Gt.continuous || (u = Gt.accurateTimeOffset ? 9e4 * Gt.timeOffset + Math.max(0, Gt.audioVideoShift) : o[0].pts), Ie.fixAudioFrames(e, o, u), 0 < o.length) {
                        e.baseMediaDecodeTime = o[0].pts / l;
                        var c = o[o.length - 1].sampleCount * l;
                        e.pts = [o[0].pts, o[o.length - 1].pts + c], e.start = o[0].pts / 9e4;
                        var d = o[o.length - 1];
                        Gt.nextAudioPts = d.pts + c, e.samples = Ie.generateSampleTable(o), a = _e.mdat(Ie.concatenateFrameData(o)), e.end = Gt.nextAudioPts / 9e4, n = [], r = _e.moof(i, [e]), s = new Uint8Array(r.byteLength + a.byteLength), i++, s.set(r), s.set(a, r.byteLength)
                    } else e.start = Gt.nextAudioPts / 9e4, e.end = e.start;
                    this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), this.trigger("timelineStartInfo", e.timelineStartInfo), this.trigger("data", {
                        track: e,
                        boxes: s
                    }), this.trigger("done", "AudioSegmentStream")
                } else this.trigger("done", "AudioSegmentStream")
            }
        }).prototype = new Ee, (Nt = function (e, t) {
            var n, i, o = 0,
                r = [],
                a = [];
            t = t || {}, Nt.prototype.init.call(this), delete e.minPTS, this.gopCache_ = [], this.setVideoAppendStart = function (e) {}, this.push = function (t) {
                Oe(e, t, Gt), "seq_parameter_set_rbsp" !== t.nalUnitType || n || (n = t.config, e.sps = [t.data], qt.forEach(function (t) {
                    e[t] = n[t]
                }, this)), "pic_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.data, e.pps = [t.data]), t.id = r.length, r.push(t)
            }, this.flush = function () {
                for (var n, i, s, l, u; r.length && "access_unit_delimiter_rbsp" !== r[0].nalUnitType;) r.shift();
                if (0 === r.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                n = xe(r), Ne(Gt), e.rawPts = [n[0].pts, n[n.length - 1].pts + n[n.length - 1].duration], e.rawDts = [n[0].dts, n[n.length - 1].dts + n[n.length - 1].duration];
                var c = Gt.nextVideoDts;
                e.ref = c, e.disc = Gt.continuous, Gt.continuous || (c = 9e4 * Gt.timeOffset + Math.max(0, Gt.audioVideoShift)), n.sort(function (e, t) {
                    return e.dts - t.dts || e.pts - t.pts || e.id - t.id
                });
                var d = 0,
                    h = Gt.pts;
                Yt && (h = Gt.dts), n.forEach(function (e, t) {
                    e.dts = Math.max(0, e.dts - h), e.pts = Math.max(0, e.pts - h), e.pts + e.duration > d && (d = e.pts + e.duration)
                });
                var p = Math.max(0, n[0].dts),
                    f = Math.max(0, n[0].pts),
                    g = Math.round((p - c) / 90);
                if (Gt.continuous && 1 < Math.abs(g)) {
                    1 < g ? console.warn("AVC ".concat(g, "ms hole find! pts gap:").concat((f - Gt.nextVideoPts) / 90)) : g < -1 && console.warn("AVC ".concat(-g, "ms overlap find")), p = c, f = Math.max(p, Math.max(f - g, Gt.nextVideoPts)), n[0].pts = f, n[0].dts = p;
                    for (var y = 1; y < n.length; y++) {
                        if (!(n[y].dts < p || n[y].pts < f)) {
                            if (n[y].dts === p && n[y].keyFrame) {
                                n = n.slice(y);
                                break
                            }
                            break
                        }
                        n[y].dts = Math.max(p, n[y].dts), n[y].pts = Math.max(f, n[y].pts)
                    }
                }
                f + n[0].duration > d && (d = f + n[0].duration), Gt.nextVideoPts = d;
                var m = n[0],
                    v = n[n.length - 1];
                if (Gt.nextVideoDts = v.dts + v.duration, (i = Te(n))[0][0].keyFrame || e.timelineStartInfo.discontinuity && (i = Ae(i)), a.length) {
                    var _;
                    if (!(_ = t.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
                        gop: i.pop(),
                        pps: e.pps,
                        sps: e.sps
                    }), this.gopCache_.length = Math.min(6, this.gopCache_.length), r = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                    Pe(e, Gt), i = _
                }
                e.samples = De(i), e.dts = [m.dts, v.dts + v.duration], e.pts = [m.pts, d], e.duration = v.dts - m.dts + e.samples[e.samples.length - 1].duration, e.fps = Math.round(n.length / (e.duration / 9e4)) || 24, l = _e.mdat(Le(i)), e.baseMediaDecodeTime = p, this.trigger("processedGopsInfo", i.map(function (e) {
                    return {
                        pts: e.pts,
                        dts: e.dts,
                        byteLength: e.byteLength
                    }
                })), this.gopCache_.length = Math.min(6, this.gopCache_.length), r = [], this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime), this.trigger("timelineStartInfo", e.timelineStartInfo), e.start = f / 9e4, e.end = d / 9e4, s = _e.moof(o, [e]), u = new Uint8Array(s.byteLength + l.byteLength), o++, u.set(s), u.set(l, s.byteLength), this.trigger("data", {
                    track: e,
                    boxes: u
                }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
            }, this.resetStream_ = function () {
                i = n = void 0
            }, this.getGopForFusion_ = function (t) {
                var n, i, o, r, a, s = 1 / 0;
                for (a = 0; a < this.gopCache_.length; a++) o = (r = this.gopCache_[a]).gop, e.pps && b(e.pps[0], r.pps[0]) && e.sps && b(e.sps[0], r.sps[0]) && (o.dts < e.timelineStartInfo.dts || -1e4 <= (n = t.dts - o.dts - o.duration) && n <= 45e3 && (!i || n < s) && (i = r, s = n));
                return i ? i.gop : null
            }, this.alignGopsAtStart_ = function (e) {
                var t, n, i, o, r, s, l, u;
                for (r = e.byteLength, s = e.nalCount, l = e.duration, t = n = 0; t < a.length && n < e.length && (i = a[t], o = e[n], i.pts !== o.pts);) o.pts > i.pts ? t++ : (n++, r -= o.byteLength, s -= o.nalCount, l -= o.duration);
                return 0 === n ? e : n === e.length ? null : ((u = e.slice(n)).byteLength = r, u.duration = l, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
            }, this.alignGopsAtEnd_ = function (e) {
                var t, n, i, o, r, s, l;
                for (t = a.length - 1, n = e.length - 1, r = null, s = !1; 0 <= t && 0 <= n;) {
                    if (i = a[t], o = e[n], i.pts === o.pts) {
                        s = !0;
                        break
                    }
                    i.pts > o.pts ? t-- : (t === a.length - 1 && (r = n), n--)
                }
                if (!s && null === r) return null;
                if (0 === (l = s ? n : r)) return e;
                var u = e.slice(l),
                    c = u.reduce(function (e, t) {
                        return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                    }, {
                        byteLength: 0,
                        duration: 0,
                        nalCount: 0
                    });
                return u.byteLength = c.byteLength, u.duration = c.duration, u.nalCount = c.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
            }, this.alignGopsWith = function (e) {
                a = e
            }
        }).prototype = new Ee, (Bt = function (e, t) {
            //debugger;
            this.numberOfTracks = 0, this.metadataStream = t, void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps && (this.keepOriginalTimestamps = e.keepOriginalTimestamps), this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, Bt.prototype.init.call(this), this.push = function (e) {
                return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), e.boxes && (this.pendingBoxes.push(e.boxes), this.pendingBytes += e.boxes.byteLength), "video" === e.track.type && (this.videoTrack = e.track), void("audio" === e.track.type && (this.audioTrack = e.track)))
            }
        }).prototype = new Ee, Bt.prototype.flush = function (e) {
            //debugger;
            var t, n, i, o, r = 0,
                a = {
                    captions: [],
                    captionStreams: {},
                    metadata: [],
                    info: {}
                },
                s = 0;
            if (this.pendingTracks.length < this.numberOfTracks) {
                if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                if (this.remuxTracks) return;
                if (0 === this.pendingTracks.length) return void(++this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
            }
            for (this.videoTrack ? (s = this.videoTrack.timelineStartInfo.pts, qt.forEach(function (e) {
                a.info[e] = this.videoTrack[e]
            }, this), a.info.fps = this.videoTrack.fps, a.info.timeline = {
                base: this.videoTrack.baseMediaDecodeTime,
                ref: this.videoTrack.ref,
                disc: this.videoTrack.disc,
                rawDts: this.videoTrack.rawDts,
                rawPts: this.videoTrack.rawPts,
                dts: this.videoTrack.dts,
                pts: this.videoTrack.pts,
                start: this.videoTrack.start,
                end: this.videoTrack.end
            }, Pe(this.videoTrack, Gt)) : this.audioTrack && (s = this.audioTrack.timelineStartInfo.pts, Vt.forEach(function (e) {
                a.info[e] = this.audioTrack[e]
            }, this), a.info.alignInfo = this.audioTrack.alignInfo, a.info.timeline = {
                base: Gt.pts,
                ref: this.audioTrack.ref,
                disc: this.audioTrack.disc,
                rawPts: this.audioTrack.rawPts,
                pts: this.audioTrack.pts,
                start: this.audioTrack.start,
                end: this.audioTrack.end
            }, Pe(this.audioTrack, Gt)), 1 === this.pendingTracks.length ? a.type = this.pendingTracks[0].type : a.type = "combined", this.emittedTracks += this.pendingTracks.length, i = _e.initSegment(this.pendingTracks), a.initSegment = new Uint8Array(i.byteLength), a.initSegment.set(i), a.data = new Uint8Array(this.pendingBytes), o = 0; o < this.pendingBoxes.length; o++) a.data.set(this.pendingBoxes[o], r), r += this.pendingBoxes[o].byteLength;
            for (o = 0; o < this.pendingCaptions.length; o++)(t = this.pendingCaptions[o]).startTime = t.startPts, this.keepOriginalTimestamps || (t.startTime -= s), t.startTime /= 9e4, t.endTime = t.endPts, this.keepOriginalTimestamps || (t.endTime -= s), t.endTime /= 9e4, a.captionStreams[t.stream] = !0, a.captions.push(t);
            for (o = 0; o < this.pendingMetadata.length; o++)(n = this.pendingMetadata[o]).cueTime = n.pts, this.keepOriginalTimestamps || (n.cueTime -= s), n.cueTime /= 9e4, a.metadata.push(n);
            a.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", a), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
        }, (Ut = function (e) {
            var t, n, i = this,
                o = !0;
            Ut.prototype.init.call(this), e = e || {}, this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
                var t = {};
                (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new wt.MetadataStream, t.aacStream = new Ft, t.audioTimestampRolloverStream = new wt.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new wt.TimestampRolloverStream("timed-metadata"), t.adtsStream = new Lt, t.coalesceStream = new Bt(e, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream), t.metadataStream.on("timestamp", function (e) {
                    t.aacStream.setTimestamp(e.timeStamp)
                }), t.aacStream.on("data", function (o) {
                    "timed-metadata" !== o.type || t.audioSegmentStream || (n = n || {
                        timelineStartInfo: {
                            baseMediaDecodeTime: i.baseMediaDecodeTime
                        },
                        codec: "adts",
                        type: "audio"
                    }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new jt(n, e), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
                }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }, this.setupTsPipeline = function () {
                var o = {};
                (this.transmuxPipeline_ = o).type = "ts", o.metadataStream = new wt.MetadataStream, o.packetStream = new wt.TransportPacketStream, o.parseStream = new wt.TransportParseStream, o.elementaryStream = new wt.ElementaryStream(e), o.videoTimestampRolloverStream = new wt.TimestampRolloverStream("video"), o.audioTimestampRolloverStream = new wt.TimestampRolloverStream("audio"), o.timedMetadataTimestampRolloverStream = new wt.TimestampRolloverStream("timed-metadata"), o.adtsStream = new Lt, o.h264Stream = new zt, o.captionStream = new wt.CaptionStream, o.coalesceStream = new Bt(e, o.metadataStream), o.headOfPipeline = o.packetStream, o.packetStream.pipe(o.parseStream).pipe(o.elementaryStream), o.elementaryStream.pipe(o.audioTimestampRolloverStream).pipe(o.adtsStream), o.elementaryStream.pipe(o.videoTimestampRolloverStream).pipe(o.h264Stream), o.elementaryStream.pipe(o.timedMetadataTimestampRolloverStream).pipe(o.metadataStream).pipe(o.coalesceStream), o.h264Stream.pipe(o.captionStream).pipe(o.coalesceStream), o.elementaryStream.on("data", function (r) {
                    var a;
                    if ("metadata" === r.type) {
                        for (a = r.tracks.length; a--;) t || "video" !== r.tracks[a].type ? n || "audio" !== r.tracks[a].type || ((n = r.tracks[a]).timelineStartInfo.baseMediaDecodeTime = i.baseMediaDecodeTime) : (t = r.tracks[a]).timelineStartInfo.baseMediaDecodeTime = i.baseMediaDecodeTime;
                        t && !o.videoSegmentStream && (o.coalesceStream.numberOfTracks++, o.videoSegmentStream = new Nt(t, e), o.videoSegmentStream.on("timelineStartInfo", function (e) {
                            n && (n.timelineStartInfo = e, o.audioSegmentStream.setEarliestDts(e.dts))
                        }), o.videoSegmentStream.on("processedGopsInfo", i.trigger.bind(i, "gopInfo")), o.videoSegmentStream.on("baseMediaDecodeTime", function (e) {
                            n && o.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                        }), o.h264Stream.pipe(o.videoSegmentStream).pipe(o.coalesceStream)), n && !o.audioSegmentStream && (o.coalesceStream.numberOfTracks++, o.audioSegmentStream = new jt(n, e), o.audioSegmentStream.on("timelineStartInfo", function (e) {
                            t && (t.timelineStartInfo = e)
                        }), o.adtsStream.pipe(o.audioSegmentStream).pipe(o.coalesceStream))
                    }
                }), o.coalesceStream.on("data", this.trigger.bind(this, "data")), o.coalesceStream.on("done", this.trigger.bind(this, "done"))
            }, this.discontinuity = function (i) {
                var o = this.transmuxPipeline_;
                e.keepOriginalTimestamps, n && (n.discontinuity = !0, n.timelineStartInfo.dts = void 0, n.timelineStartInfo.pts = void 0, n.timelineStartInfo.offset = 9e4 * i, Pe(n, Gt), o.audioTimestampRolloverStream && o.audioTimestampRolloverStream.discontinuity()), t && (t.discontinuity = !0, o.videoSegmentStream && (o.videoSegmentStream.gopCache_ = [], o.videoTimestampRolloverStream.discontinuity()), t.timelineStartInfo.discontinuity = !0, t.timelineStartInfo.offset = 9e4 * i, t.timelineStartInfo.dts = void 0, t.timelineStartInfo.pts = void 0, Pe(t, Gt), o.captionStream.reset()), o.timedMetadataTimestampRolloverStream && o.timedMetadataTimestampRolloverStream.discontinuity()
            }, this.setBaseMediaDecodeTime = function (e) {
                this.setAppendStart(e), t && (t.contiguous = !1), n && (n.contiguous = !1)
            }, this.setAppendStart = function (e) {
                n && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e), t && this.transmuxPipeline_.videoSegmentStream.setVideoAppendStart(e)
            }, this.alignGopsWith = function (e) {
                t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
            }, this.push = function (e, t, n, i, r, a) {
                if (i && je(Gt), Gt.continuous = n, Gt.timeOffset = r, Gt.accurateTimeOffset = a, o) {
                    var s = Ht(e);
                    s && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : s || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), o = !1
                }
                var l = this.transmuxPipeline_.elementaryStream;
                l && l.setEncrypted(t), this.transmuxPipeline_.headOfPipeline.push(e)
            }, this.flush = function () {
                o = !0, this.transmuxPipeline_.headOfPipeline.flush()
            }, this.resetCaptions = function () {
                this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
            }
        }).prototype = new Ee;
        var Qt, Wt, Kt, Xt = {
                Transmuxer: Ut,
                VideoSegmentStream: Nt,
                AudioSegmentStream: jt,
                AUDIO_PROPERTIES: Vt,
                VIDEO_PROPERTIES: qt
            },
            Jt = (function (e) {
                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function n(i) {
                    return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function (e) {
                        return t(e)
                    } : e.exports = n = function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    }, n(i)
                }
                e.exports = n
            }(Qt = {
                exports: {}
            }, Qt.exports), Qt.exports),
            Zt = ke.parseType,
            $t = {
                avc1: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        dataReferenceIndex: t.getUint16(6),
                        width: t.getUint16(24),
                        height: t.getUint16(26),
                        horizresolution: t.getUint16(28) + t.getUint16(30) / 16,
                        vertresolution: t.getUint16(32) + t.getUint16(34) / 16,
                        frameCount: t.getUint16(40),
                        depth: t.getUint16(74),
                        config: Wt(e.subarray(78, e.byteLength))
                    }
                }, avcC: function (e) {
                    var t, n, i, o, r = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        a = {
                            configurationVersion: e[0],
                            avcProfileIndication: e[1],
                            profileCompatibility: e[2],
                            avcLevelIndication: e[3],
                            lengthSizeMinusOne: 3 & e[4],
                            sps: [],
                            pps: []
                        },
                        s = 31 & e[5];
                    for (i = 6, o = 0; o < s; o++) n = r.getUint16(i), i += 2, a.sps.push(new Uint8Array(e.subarray(i, i + n))), i += n;
                    for (t = e[i], i++, o = 0; o < t; o++) n = r.getUint16(i), i += 2, a.pps.push(new Uint8Array(e.subarray(i, i + n))), i += n;
                    return a
                }, btrt: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        bufferSizeDB: t.getUint32(0),
                        maxBitrate: t.getUint32(4),
                        avgBitrate: t.getUint32(8)
                    }
                }, esds: function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        esId: e[6] << 8 | e[7],
                        streamPriority: 31 & e[8],
                        decoderConfig: {
                            objectProfileIndication: e[11],
                            streamType: e[12] >>> 2 & 63,
                            bufferSize: e[13] << 16 | e[14] << 8 | e[15],
                            maxBitrate: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
                            avgBitrate: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23],
                            decoderConfigDescriptor: {
                                tag: e[24],
                                length: e[25],
                                audioObjectType: e[26] >>> 3 & 31,
                                samplingFrequencyIndex: (7 & e[26]) << 1 | e[27] >>> 7 & 1,
                                channelConfiguration: e[27] >>> 3 & 15
                            }
                        }
                    }
                }, ftyp: function (e) {
                    for (var t = new DataView(e.buffer, e.byteOffset, e.byteLength), n = {
                        majorBrand: Zt(e.subarray(0, 4)),
                        minorVersion: t.getUint32(4),
                        compatibleBrands: []
                    }, i = 8; i < e.byteLength;) n.compatibleBrands.push(Zt(e.subarray(i, i + 4))), i += 4;
                    return n
                }, dinf: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, dref: function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        dataReferences: Wt(e.subarray(8))
                    }
                }, hdlr: function (e) {
                    var t = {
                            version: new DataView(e.buffer, e.byteOffset, e.byteLength).getUint8(0),
                            flags: new Uint8Array(e.subarray(1, 4)),
                            handlerType: Zt(e.subarray(8, 12)),
                            name: ""
                        },
                        n = 8;
                    for (n = 24; n < e.byteLength; n++) {
                        if (0 === e[n]) {
                            n++;
                            break
                        }
                        t.name += String.fromCharCode(e[n])
                    }
                    return t.name = decodeURIComponent(escape(t.name)), t
                }, mdat: function (e) {
                    return {
                        byteLength: e.byteLength,
                        nals: function (e) {
                            var t, n, i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                                o = [];
                            for (t = 0; t + 4 < e.length; t += n)
                                if (n = i.getUint32(t), t += 4, n <= 0) o.push("<span style='color:red;'>MALFORMED DATA</span>");
                                else switch (31 & e[t]) {
                                case 1:
                                    o.push("slice_layer_without_partitioning_rbsp");
                                    break;
                                case 5:
                                    o.push("slice_layer_without_partitioning_rbsp_idr");
                                    break;
                                case 6:
                                    o.push("sei_rbsp");
                                    break;
                                case 7:
                                    o.push("seq_parameter_set_rbsp");
                                    break;
                                case 8:
                                    o.push("pic_parameter_set_rbsp");
                                    break;
                                case 9:
                                    o.push("access_unit_delimiter_rbsp");
                                    break;
                                default:
                                    o.push("UNKNOWN NAL - " + e[t] & 31)
                                }
                            return o
                        }(e)
                    }
                }, mdhd: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = 4,
                        o = {
                            version: n.getUint8(0),
                            flags: new Uint8Array(e.subarray(1, 4)),
                            language: ""
                        };
                    return 1 === o.version ? (i += 4, o.creationTime = k(n.getUint32(i)), i += 8, o.modificationTime = k(n.getUint32(i)), i += 4, o.timescale = n.getUint32(i), i += 8) : (o.creationTime = k(n.getUint32(i)), i += 4, o.modificationTime = k(n.getUint32(i)), i += 4, o.timescale = n.getUint32(i), i += 4), o.duration = n.getUint32(i), i += 4, t = n.getUint16(i), o.language += String.fromCharCode(96 + (t >> 10)), o.language += String.fromCharCode(96 + ((992 & t) >> 5)), o.language += String.fromCharCode(96 + (31 & t)), o
                }, mdia: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, mfhd: function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sequenceNumber: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                    }
                }, minf: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, mp4a: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        n = {
                            dataReferenceIndex: t.getUint16(6),
                            channelcount: t.getUint16(16),
                            samplesize: t.getUint16(18),
                            samplerate: t.getUint16(24) + t.getUint16(26) / 65536
                        };
                    return 28 < e.byteLength && (n.streamDescriptor = Wt(e.subarray(28))[0]), n
                }, moof: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, moov: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, mvex: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, mvhd: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        n = 4,
                        i = {
                            version: t.getUint8(0),
                            flags: new Uint8Array(e.subarray(1, 4))
                        };
                    return 1 === i.version ? (n += 4, i.creationTime = k(t.getUint32(n)), n += 8, i.modificationTime = k(t.getUint32(n)), n += 4, i.timescale = t.getUint32(n), n += 8) : (i.creationTime = k(t.getUint32(n)), n += 4, i.modificationTime = k(t.getUint32(n)), n += 4, i.timescale = t.getUint32(n), n += 4), i.duration = t.getUint32(n), n += 4, i.rate = t.getUint16(n) + t.getUint16(n + 2) / 16, n += 4, i.volume = t.getUint8(n) + t.getUint8(n + 1) / 8, n += 2, n += 2, n += 8, i.matrix = new Uint32Array(e.subarray(n, n + 36)), n += 36, n += 24, i.nextTrackId = t.getUint32(n), i
                }, pdin: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        version: t.getUint8(0),
                        flags: new Uint8Array(e.subarray(1, 4)),
                        rate: t.getUint32(4),
                        initialDelay: t.getUint32(8)
                    }
                }, sdtp: function (e) {
                    var t, n = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        samples: []
                    };
                    for (t = 4; t < e.byteLength; t++) n.samples.push({
                        dependsOn: (48 & e[t]) >> 4,
                        isDependedOn: (12 & e[t]) >> 2,
                        hasRedundancy: 3 & e[t]
                    });
                    return n
                }, sidx: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            references: [],
                            referenceId: n.getUint32(4),
                            timescale: n.getUint32(8),
                            earliestPresentationTime: n.getUint32(12),
                            firstOffset: n.getUint32(16)
                        },
                        o = n.getUint16(22);
                    for (t = 24; o; t += 12, o--) i.references.push({
                        referenceType: (128 & e[t]) >>> 7,
                        referencedSize: 2147483647 & n.getUint32(t),
                        subsegmentDuration: n.getUint32(t + 4),
                        startsWithSap: !!(128 & e[t + 8]),
                        sapType: (112 & e[t + 8]) >>> 4,
                        sapDeltaTime: 268435455 & n.getUint32(t + 8)
                    });
                    return i
                }, smhd: function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        balance: e[4] + e[5] / 256
                    }
                }, stbl: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, stco: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            chunkOffsets: []
                        },
                        o = n.getUint32(4);
                    for (t = 8; o; t += 4, o--) i.chunkOffsets.push(n.getUint32(t));
                    return i
                }, stsc: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = n.getUint32(4),
                        o = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            sampleToChunks: []
                        };
                    for (t = 8; i; t += 12, i--) o.sampleToChunks.push({
                        firstChunk: n.getUint32(t),
                        samplesPerChunk: n.getUint32(t + 4),
                        sampleDescriptionIndex: n.getUint32(t + 8)
                    });
                    return o
                }, stsd: function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        sampleDescriptions: Wt(e.subarray(8))
                    }
                }, stsz: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            sampleSize: n.getUint32(4),
                            entries: []
                        };
                    for (t = 12; t < e.byteLength; t += 4) i.entries.push(n.getUint32(t));
                    return i
                }, stts: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            timeToSamples: []
                        },
                        o = n.getUint32(4);
                    for (t = 8; o; t += 8, o--) i.timeToSamples.push({
                        sampleCount: n.getUint32(t),
                        sampleDelta: n.getUint32(t + 4)
                    });
                    return i
                }, styp: function (e) {
                    return $t.ftyp(e)
                }, tfdt: function (e) {
                    var t = {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        baseMediaDecodeTime: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]
                    };
                    return 1 === t.version && (t.baseMediaDecodeTime *= Math.pow(2, 32), t.baseMediaDecodeTime += e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]), t
                }, tfhd: function (e) {
                    var t, n = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        i = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            trackId: n.getUint32(4)
                        },
                        o = 1 & i.flags[2],
                        r = 2 & i.flags[2],
                        a = 8 & i.flags[2],
                        s = 16 & i.flags[2],
                        l = 32 & i.flags[2],
                        u = 65536 & i.flags[0],
                        c = 131072 & i.flags[0];
                    return t = 8, o && (t += 4, i.baseDataOffset = n.getUint32(12), t += 4), r && (i.sampleDescriptionIndex = n.getUint32(t), t += 4), a && (i.defaultSampleDuration = n.getUint32(t), t += 4), s && (i.defaultSampleSize = n.getUint32(t), t += 4), l && (i.defaultSampleFlags = n.getUint32(t)), u && (i.durationIsEmpty = !0), !o && c && (i.baseDataOffsetIsMoof = !0), i
                }, tkhd: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        n = 4,
                        i = {
                            version: t.getUint8(0),
                            flags: new Uint8Array(e.subarray(1, 4))
                        };
                    return 1 === i.version ? (n += 4, i.creationTime = k(t.getUint32(n)), n += 8, i.modificationTime = k(t.getUint32(n)), n += 4, i.trackId = t.getUint32(n), n += 4, n += 8) : (i.creationTime = k(t.getUint32(n)), n += 4, i.modificationTime = k(t.getUint32(n)), n += 4, i.trackId = t.getUint32(n), n += 4, n += 4), i.duration = t.getUint32(n), n += 4, n += 8, i.layer = t.getUint16(n), n += 2, i.alternateGroup = t.getUint16(n), n += 2, i.volume = t.getUint8(n) + t.getUint8(n + 1) / 8, n += 2, n += 2, i.matrix = new Uint32Array(e.subarray(n, n + 36)), n += 36, i.width = t.getUint16(n) + t.getUint16(n + 2) / 16, n += 4, i.height = t.getUint16(n) + t.getUint16(n + 2) / 16, i
                }, traf: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, trak: function (e) {
                    return {
                        boxes: Wt(e)
                    }
                }, trex: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        trackId: t.getUint32(4),
                        defaultSampleDescriptionIndex: t.getUint32(8),
                        defaultSampleDuration: t.getUint32(12),
                        defaultSampleSize: t.getUint32(16),
                        sampleDependsOn: 3 & e[20],
                        sampleIsDependedOn: (192 & e[21]) >> 6,
                        sampleHasRedundancy: (48 & e[21]) >> 4,
                        samplePaddingValue: (14 & e[21]) >> 1,
                        sampleIsDifferenceSample: !!(1 & e[21]),
                        sampleDegradationPriority: t.getUint16(22)
                    }
                }, trun: function (e) {
                    var t, n = {
                            version: e[0],
                            flags: new Uint8Array(e.subarray(1, 4)),
                            samples: []
                        },
                        i = new DataView(e.buffer, e.byteOffset, e.byteLength),
                        o = 1 & n.flags[2],
                        r = 4 & n.flags[2],
                        a = 1 & n.flags[1],
                        s = 2 & n.flags[1],
                        l = 4 & n.flags[1],
                        u = 8 & n.flags[1],
                        c = i.getUint32(4),
                        d = 8;
                    for (o && (n.dataOffset = i.getInt32(d), d += 4), r && c && (t = {
                        flags: E(e.subarray(d, d + 4))
                    }, d += 4, a && (t.duration = i.getUint32(d), d += 4), s && (t.size = i.getUint32(d), d += 4), u && (t.compositionTimeOffset = i.getUint32(d), d += 4), n.samples.push(t), c--); c--;) t = {}, a && (t.duration = i.getUint32(d), d += 4), s && (t.size = i.getUint32(d), d += 4), l && (t.flags = E(e.subarray(d, d + 4)), d += 4), u && (t.compositionTimeOffset = i.getUint32(d), d += 4), n.samples.push(t);
                    return n
                }, "url ": function (e) {
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4))
                    }
                }, vmhd: function (e) {
                    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return {
                        version: e[0],
                        flags: new Uint8Array(e.subarray(1, 4)),
                        graphicsmode: t.getUint16(4),
                        opcolor: new Uint16Array([t.getUint16(6), t.getUint16(8), t.getUint16(10)])
                    }
                }
            },
            en = {
                inspect: Wt = function (e) {
                    for (var t, n, i, o, r, a = 0, s = [], l = new ArrayBuffer(e.length), u = new Uint8Array(l), c = 0; c < e.length; ++c) u[c] = e[c];
                    for (t = new DataView(l); a < e.byteLength;) n = t.getUint32(a), i = Zt(e.subarray(a + 4, a + 8)), o = 1 < n ? a + n : e.byteLength, (r = ($t[i] || function (e) {
                        return {
                            data: e
                        }
                    })(e.subarray(a + 8, o))).size = n, r.type = i, s.push(r), a = o;
                    return s
                }, textify: Kt = function (e, t) {
                    var n;
                    return t = t || 0, n = new Array(2 * t + 1).join(" "), e.map(function (e, i) {
                        return n + e.type + "\\n" + Object.keys(e).filter(function (e) {
                            return "type" !== e && "boxes" !== e
                        }).map(function (t) {
                            var i = n + "  " + t + ": ",
                                o = e[t];
                            if (o instanceof Uint8Array || o instanceof Uint32Array) {
                                var r = Array.prototype.slice.call(new Uint8Array(o.buffer, o.byteOffset, o.byteLength)).map(function (e) {
                                    return " " + ("00" + e.toString(16)).slice(-2)
                                }).join("").match(/.{1,24}/g);
                                return r ? 1 === r.length ? i + "<" + r.join("").slice(1) + ">" : i + "<\\n" + r.map(function (e) {
                                    return n + "  " + e
                                }).join("\\n") + "\\n" + n + "  >" : i + "<>"
                            }
                            return i + JSON.stringify(o, null, 2).split("\\n").map(function (e, t) {
                                return 0 === t ? e : n + "  " + e
                            }).join("\\n")
                        }).join("\\n") + (e.boxes ? "\\n" + Kt(e.boxes, t + 1) : "")
                    }).join("\\n")
                }, parseTfdt: $t.tfdt,
                parseHdlr: $t.hdlr,
                parseTfhd: $t.tfhd,
                parseTrun: $t.trun,
                parseSidx: $t.sidx
            },
            tn = ze,
            nn = qe.CaptionStream,
            on = {
                mp4: {
                    generator: _e,
                    probe: ke,
                    Transmuxer: Xt.Transmuxer,
                    AudioSegmentStream: Xt.AudioSegmentStream,
                    VideoSegmentStream: Xt.VideoSegmentStream,
                    CaptionParser: function () {
                        var e, t, n, i, o, r = !1;
                        this.isInitialized = function () {
                            return r
                        }, this.init = function () {
                            e = new nn, r = !0, e.on("data", function (e) {
                                e.startTime = e.startPts / i, e.endTime = e.endPts / i, o.captions.push(e), o.captionStreams[e.stream] = !0
                            })
                        }, this.isNewInit = function (e, t) {
                            return !(e && 0 === e.length || t && "object" === Jt(t) && 0 === Object.keys(t).length || n === e[0] && i === t[n])
                        }, this.parse = function (e, r, a) {
                            var s;
                            if (!this.isInitialized()) return null;
                            if (!r || !a) return null;
                            if (this.isNewInit(r, a)) n = r[0], i = a[n];
                            else if (!n || !i) return t.push(e), null;
                            for (; 0 < t.length;) {
                                var l = t.shift();
                                this.parse(l, r, a)
                            }
                            return null !== (s = function (e, t, n) {
                                return t ? {
                                    seiNals: S(e, t)[t],
                                    timescale: n
                                } : null
                            }(e, n, i)) && s.seiNals ? (this.pushNals(s.seiNals), this.flushStream(), o) : null
                        }, this.pushNals = function (t) {
                            if (!this.isInitialized() || !t || 0 === t.length) return null;
                            t.forEach(function (t) {
                                e.push(t)
                            })
                        }, this.flushStream = function () {
                            if (!this.isInitialized()) return null;
                            e.flush()
                        }, this.clearParsedCaptions = function () {
                            o.captions = [], o.captionStreams = {}
                        }, this.resetCaptionStream = function () {
                            if (!this.isInitialized()) return null;
                            e.reset()
                        }, this.clearAllCaptions = function () {
                            this.clearParsedCaptions(), this.resetCaptionStream()
                        }, this.reset = function () {
                            t = [], i = n = null, o ? this.clearParsedCaptions() : o = {
                                captions: [],
                                captionStreams: {}
                            }, this.resetCaptionStream()
                        }, this.reset()
                    }
                }
            };
        return function () {
            function e(t) {
                de(this, e), this.transmuxer = null, this.bytes = null, this.onDoneCb = t, this.initTracks()
            }
            return he(e, [{
                key: "initTracks",
                value: function () {
                    this.tracks = {
                        combined: this.getRemuxTempVars(),
                        audio: this.getRemuxTempVars(),
                        video: this.getRemuxTempVars()
                    }
                }
            }, {
                key: "getRemuxTempVars",
                value: function () {
                    return {
                        remuxedSegments: [],
                        remuxedInitSegment: null,
                        remuxedBytesLength: 0,
                        createInitSegment: !0
                    }
                }
            }, {
                key: "setDiscontinuity",
                value: function (e) {
                    this.transmuxer && this.transmuxer.discontinuity(e)
                }
            }, {
                key: "resetInitSegment",
                value: function () {
                    var e = this;
                    Object.keys(this.tracks).forEach(function (t) {
                        e.tracks[t].createInitSegment = !0, e.tracks[t].remuxedInitSegment = []
                    })
                }
            }, {
                key: "initTransmuxer",
                value: function (e) {
                    this.options = e, this.transmuxer = new on.mp4.Transmuxer(e), this.bindTransmuxerEvent()
                }
            }, {
                key: "changeDecodeKey",
                value: function (e) {
                    this.options.decodeKey = e
                }
            }, {
                key: "bindTransmuxerEvent",
                value: function () {
                    var e = this;
                    this.transmuxer.on("error", function (e) {
                        console.error(e)
                    }), this.transmuxer.on("data", function (t) {
                        e.handleTrackMuxData(t)
                    }), this.transmuxer.on("done", function () {
                        var t = e.handleTrackMuxDone("video"),
                            n = e.handleTrackMuxDone("audio"),
                            i = 2 === e.onDoneCb.length,
                            o = [],
                            r = [];
                        t && (o.push({
                            type: "video",
                            data: t[0].buffer,
                            info: t[1]
                        }), i && r.push(t[0].buffer)), n && (o.push({
                            type: "audio",
                            data: n[0].buffer,
                            info: n[1]
                        }), i && r.push(n[0].buffer)), e.onDoneCb(o, r)
                    })
                }
            }, {
                key: "handleTrackMuxData",
                value: function (e) {
                    //debugger;
                    var t = 0 < arguments.length && void 0 !== e ? e : {},
                        n = t.type,
                        i = this.tracks[n];
                    i && (i.have = !0, i.info = t.info, i.remuxedSegments.push(t), i.remuxedBytesLength += t.data.byteLength, i.remuxedInitSegment = t.initSegment)
                }
            }, {
                key: "setBaseMediaDecodeTime",
                value: function (e) {
                    this.transmuxer && this.transmuxer.setBaseMediaDecodeTime(e)
                }
            }, {
                key: "handleTrackMuxDone",
                value: function (e) {
                    var t = this.tracks[e];
                    if (t.have) {
                        var n = 0;
                        t.createInitSegment ? (this.bytes = new Uint8Array(t.remuxedInitSegment.byteLength + t.remuxedBytesLength), this.bytes.set(t.remuxedInitSegment, n), n += t.remuxedInitSegment.byteLength, t.createInitSegment = !1, t.remuxedInitSegment = []) : this.bytes = new Uint8Array(t.remuxedBytesLength);
                        for (var i = 0, o = n; i < t.remuxedSegments.length; i += 1) this.bytes.set(t.remuxedSegments[i].data, o), o += t.remuxedSegments[i].byteLength;
                        return t.remuxedSegments = [], t.remuxedBytesLength = 0, [this.bytes, t.info]
                    }
                }
            }, {
                key: "push",
                value: function (e) {
                    var t = e.buffer,
                        n = e.encrypted,
                        i = e.continuous,
                        o = e.discontinuity,
                        r = e.timeOffset,
                        a = e.accurateTimeOffset;
                    o && this.resetInitSegment(), this.transmuxer ? (this.transmuxer.push(new Uint8Array(t), n, i, o, r, a), this.transmuxer.flush()) : this.onDoneCb([])
                }
            }, {
                key: "cleanWhenError",
                value: function () {
                    var e = this;
                    this.bytes = null, Object.keys(this.tracks).forEach(function (t) {
                        e.tracks[t].remuxedBytesLength = 0, e.tracks[t].remuxedSegments = []
                    })
                }
            }, {
                key: "clean",
                value: function () {
                    this.transmuxer = null, this.initTracks()
                }
            }]), e
        }()
    }();
    e.TsMuxer = t
};
const global = {};
TS_MUXER_SOURCE(global);
const context = self;
const tsMuxer = new global.TsMuxer(function (dataSet, transferable) {
    context.postMessage(dataSet, transferable)
});
context.addEventListener('message', function (e) {
    const type = e.data.type
    const data = e.data.data
    switch (type) {
    case "INIT":
        tsMuxer.initTransmuxer(data);
        break;
    case "BUFFER_DATA":   
        tsMuxer.push(data);
        break;
    case "SET_BASEMEDIA_DECODE_TIME":
        tsMuxer.setBaseMediaDecodeTime(data);
        break;
    case "RESET_INIT_SEGMENT":
        tsMuxer.resetInitSegment();
        break;
    case "SET_DISCONTINUITY":
        tsMuxer.setDiscontinuity(data);
        break;
    case "CHANGE_DECODE_KEY":
        tsMuxer.changeDecodeKey(data)
        break;
    case "CLEAN_WHEN_ERROR":
        tsMuxer.cleanWhenError();
        break;
    case "CLEAN":
        tsMuxer.clean()
        break;
    }
});