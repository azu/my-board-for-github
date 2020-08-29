// ==UserScript==
// @name GitHub: add item to my-board-for-github
// @namespace my-board-for-github
// @match https://github.com/*/*/issues/*
// @match https://github.com/*/*/pull/*
// @grant GM_getValue
// ==/UserScript==
parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {}
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        wBnk: [
            function (require, module, exports) {
                "use strict";
                function e(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                        r[n - 1] = arguments[n];
                    throw Error(
                        "[Immer] minified error nr: " +
                            e +
                            (r.length ? " " + r.join(",") : "") +
                            ". Find the full error at: https://bit.ly/3cXEKWf"
                    );
                }
                function t(e) {
                    return !!e && !!e[Q];
                }
                function r(e) {
                    return (
                        !!e &&
                        ((function (e) {
                            if (!e || "object" != typeof e) return !1;
                            var t = Object.getPrototypeOf(e);
                            return !t || t === Object.prototype;
                        })(e) ||
                            Array.isArray(e) ||
                            !!e[L] ||
                            !!e.constructor[L] ||
                            s(e) ||
                            l(e))
                    );
                }
                function n(r) {
                    return t(r) || e(23, r), r[Q].t;
                }
                function o(e, t, r) {
                    void 0 === r && (r = !1),
                        0 === i(e)
                            ? (r ? Object.keys : Z)(e).forEach(function (n) {
                                  (r && "symbol" == typeof n) || t(n, e[n], e);
                              })
                            : e.forEach(function (r, n) {
                                  return t(n, r, e);
                              });
                }
                function i(e) {
                    var t = e[Q];
                    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : s(e) ? 2 : l(e) ? 3 : 0;
                }
                function a(e, t) {
                    return 2 === i(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
                }
                function u(e, t) {
                    return 2 === i(e) ? e.get(t) : e[t];
                }
                function c(e, t, r) {
                    var n = i(e);
                    2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : (e[t] = r);
                }
                function f(e, t) {
                    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                }
                function s(e) {
                    return X && e instanceof Map;
                }
                function l(e) {
                    return q && e instanceof Set;
                }
                function p(e) {
                    return e.o || e.t;
                }
                function h(e) {
                    if (Array.isArray(e)) return e.slice();
                    var t = ee(e);
                    delete t[Q];
                    for (var r = Z(t), n = 0; n < r.length; n++) {
                        var o = r[n],
                            i = t[o];
                        !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
                            (i.get || i.set) &&
                                (t[o] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[o] });
                    }
                    return Object.create(Object.getPrototypeOf(e), t);
                }
                function v(e, n) {
                    y(e) ||
                        t(e) ||
                        !r(e) ||
                        (i(e) > 1 && (e.set = e.add = e.clear = e.delete = d),
                        Object.freeze(e),
                        n &&
                            o(
                                e,
                                function (e, t) {
                                    return v(t, !0);
                                },
                                !0
                            ));
                }
                function d() {
                    e(2);
                }
                function y(e) {
                    return null == e || "object" != typeof e || Object.isFrozen(e);
                }
                function b(t) {
                    var r = te[t];
                    return r || e(19, t), r;
                }
                function g(e, t) {
                    te[e] = t;
                }
                function m() {
                    return J;
                }
                function P(e, t) {
                    t && (b("Patches"), (e.u = []), (e.s = []), (e.v = t));
                }
                function O(e) {
                    x(e), e.p.forEach(j), (e.p = null);
                }
                function x(e) {
                    e === J && (J = e.l);
                }
                function w(e) {
                    return (J = { p: [], l: J, h: e, m: !0, _: 0 });
                }
                function j(e) {
                    var t = e[Q];
                    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
                }
                function A(t, n) {
                    n._ = n.p.length;
                    var o = n.p[0],
                        i = void 0 !== t && t !== o;
                    return (
                        n.h.O || b("ES5").S(n, t, i),
                        i
                            ? (o[Q].P && (O(n), e(4)),
                              r(t) && ((t = D(n, t)), n.l || k(n, t)),
                              n.u && b("Patches").M(o[Q], t, n.u, n.s))
                            : (t = D(n, o, [])),
                        O(n),
                        n.u && n.v(n.u, n.s),
                        t !== H ? t : void 0
                    );
                }
                function D(e, t, r) {
                    if (y(t)) return t;
                    var n = t[Q];
                    if (!n)
                        return (
                            o(
                                t,
                                function (o, i) {
                                    return S(e, n, t, o, i, r);
                                },
                                !0
                            ),
                            t
                        );
                    if (n.A !== e) return t;
                    if (!n.P) return k(e, n.t, !0), n.t;
                    if (!n.I) {
                        (n.I = !0), n.A._--;
                        var i = 4 === n.i || 5 === n.i ? (n.o = h(n.k)) : n.o;
                        o(3 === n.i ? new Set(i) : i, function (t, o) {
                            return S(e, n, i, t, o, r);
                        }),
                            k(e, i, !1),
                            r && e.u && b("Patches").R(n, r, e.u, e.s);
                    }
                    return n.o;
                }
                function S(e, n, o, i, u, f) {
                    if (t(u)) {
                        var s = D(e, u, f && n && 3 !== n.i && !a(n.D, i) ? f.concat(i) : void 0);
                        if ((c(o, i, s), !t(s))) return;
                        e.m = !1;
                    }
                    if (r(u) && !y(u)) {
                        if (!e.h.N && e._ < 1) return;
                        D(e, u), (n && n.A.l) || k(e, u);
                    }
                }
                function k(e, t, r) {
                    void 0 === r && (r = !1), e.h.N && e.m && v(t, r);
                }
                function I(e, t) {
                    var r = e[Q];
                    return (r ? p(r) : e)[t];
                }
                function _(e, t) {
                    if (t in e)
                        for (var r = Object.getPrototypeOf(e); r; ) {
                            var n = Object.getOwnPropertyDescriptor(r, t);
                            if (n) return n;
                            r = Object.getPrototypeOf(r);
                        }
                }
                function E(e) {
                    e.P || ((e.P = !0), e.l && E(e.l));
                }
                function M(e) {
                    e.o || (e.o = h(e.t));
                }
                function z(e, t, r) {
                    var n = s(t)
                        ? b("MapSet").T(t, r)
                        : l(t)
                        ? b("MapSet").F(t, r)
                        : e.O
                        ? (function (e, t) {
                              var r = Array.isArray(e),
                                  n = {
                                      i: r ? 1 : 0,
                                      A: t ? t.A : m(),
                                      P: !1,
                                      I: !1,
                                      D: {},
                                      l: t,
                                      t: e,
                                      k: null,
                                      o: null,
                                      j: null,
                                      C: !1
                                  },
                                  o = n,
                                  i = re;
                              r && ((o = [n]), (i = ne));
                              var a = Proxy.revocable(o, i),
                                  u = a.revoke,
                                  c = a.proxy;
                              return (n.k = c), (n.j = u), c;
                          })(t, r)
                        : b("ES5").J(t, r);
                    return (r ? r.A : m()).p.push(n), n;
                }
                function F(n) {
                    return (
                        t(n) || e(22, n),
                        (function e(t) {
                            if (!r(t)) return t;
                            var n,
                                a = t[Q],
                                f = i(t);
                            if (a) {
                                if (!a.P && (a.i < 4 || !b("ES5").K(a))) return a.t;
                                (a.I = !0), (n = R(t, f)), (a.I = !1);
                            } else n = R(t, f);
                            return (
                                o(n, function (t, r) {
                                    (a && u(a.t, t) === r) || c(n, t, e(r));
                                }),
                                3 === f ? new Set(n) : n
                            );
                        })(n)
                    );
                }
                function R(e, t) {
                    switch (t) {
                        case 2:
                            return new Map(e);
                        case 3:
                            return Array.from(e);
                    }
                    return h(e);
                }
                function C() {
                    function e(e, t) {
                        var r = u[e];
                        return (
                            r
                                ? (r.enumerable = t)
                                : (u[e] = r = {
                                      configurable: !0,
                                      enumerable: t,
                                      get: function () {
                                          var t = this[Q];
                                          return re.get(t, e);
                                      },
                                      set: function (t) {
                                          var r = this[Q];
                                          re.set(r, e, t);
                                      }
                                  }),
                            r
                        );
                    }
                    function r(e) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var r = e[t][Q];
                            if (!r.P)
                                switch (r.i) {
                                    case 5:
                                        i(r) && E(r);
                                        break;
                                    case 4:
                                        n(r) && E(r);
                                }
                        }
                    }
                    function n(e) {
                        for (var t = e.t, r = e.k, n = Z(r), o = n.length - 1; o >= 0; o--) {
                            var i = n[o];
                            if (i !== Q) {
                                var u = t[i];
                                if (void 0 === u && !a(t, i)) return !0;
                                var c = r[i],
                                    s = c && c[Q];
                                if (s ? s.t !== u : !f(c, u)) return !0;
                            }
                        }
                        var l = !!t[Q];
                        return n.length !== Z(t).length + (l ? 0 : 1);
                    }
                    function i(e) {
                        var t = e.k;
                        if (t.length !== e.t.length) return !0;
                        var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
                        return !(!r || r.get);
                    }
                    var u = {};
                    g("ES5", {
                        J: function (t, r) {
                            var n = Array.isArray(t),
                                o = (function (t, r) {
                                    if (t) {
                                        for (var n = Array(r.length), o = 0; o < r.length; o++)
                                            Object.defineProperty(n, "" + o, e(o, !0));
                                        return n;
                                    }
                                    var i = ee(r);
                                    delete i[Q];
                                    for (var a = Z(i), u = 0; u < a.length; u++) {
                                        var c = a[u];
                                        i[c] = e(c, t || !!i[c].enumerable);
                                    }
                                    return Object.create(Object.getPrototypeOf(r), i);
                                })(n, t),
                                i = {
                                    i: n ? 5 : 4,
                                    A: r ? r.A : m(),
                                    P: !1,
                                    I: !1,
                                    D: {},
                                    l: r,
                                    t: t,
                                    k: o,
                                    o: null,
                                    g: !1,
                                    C: !1
                                };
                            return Object.defineProperty(o, Q, { value: i, writable: !0 }), o;
                        },
                        S: function (e, n, u) {
                            u
                                ? t(n) && n[Q].A === e && r(e.p)
                                : (e.u &&
                                      (function e(t) {
                                          if (t && "object" == typeof t) {
                                              var r = t[Q];
                                              if (r) {
                                                  var n = r.t,
                                                      u = r.k,
                                                      c = r.D,
                                                      f = r.i;
                                                  if (4 === f)
                                                      o(u, function (t) {
                                                          t !== Q &&
                                                              (void 0 !== n[t] || a(n, t)
                                                                  ? c[t] || e(u[t])
                                                                  : ((c[t] = !0), E(r)));
                                                      }),
                                                          o(n, function (e) {
                                                              void 0 !== u[e] || a(u, e) || ((c[e] = !1), E(r));
                                                          });
                                                  else if (5 === f) {
                                                      if ((i(r) && (E(r), (c.length = !0)), u.length < n.length))
                                                          for (var s = u.length; s < n.length; s++) c[s] = !1;
                                                      else for (var l = n.length; l < u.length; l++) c[l] = !0;
                                                      for (var p = Math.min(u.length, n.length), h = 0; h < p; h++)
                                                          void 0 === c[h] && e(u[h]);
                                                  }
                                              }
                                          }
                                      })(e.p[0]),
                                  r(e.p));
                        },
                        K: function (e) {
                            return 4 === e.i ? n(e) : i(e);
                        }
                    });
                }
                function N() {
                    function r(e) {
                        if (!e || "object" != typeof e) return e;
                        if (Array.isArray(e)) return e.map(r);
                        if (s(e))
                            return new Map(
                                Array.from(e.entries()).map(function (e) {
                                    return [e[0], r(e[1])];
                                })
                            );
                        if (l(e)) return new Set(Array.from(e).map(r));
                        var t = Object.create(Object.getPrototypeOf(e));
                        for (var n in e) t[n] = r(e[n]);
                        return t;
                    }
                    function n(e) {
                        return t(e) ? r(e) : e;
                    }
                    var c = "add";
                    g("Patches", {
                        $: function (t, n) {
                            return (
                                n.forEach(function (n) {
                                    for (var o = n.path, a = n.op, f = t, s = 0; s < o.length - 1; s++)
                                        "object" != typeof (f = u(f, o[s])) && e(15, o.join("/"));
                                    var l = i(f),
                                        p = r(n.value),
                                        h = o[o.length - 1];
                                    switch (a) {
                                        case "replace":
                                            switch (l) {
                                                case 2:
                                                    return f.set(h, p);
                                                case 3:
                                                    e(16);
                                                default:
                                                    return (f[h] = p);
                                            }
                                        case c:
                                            switch (l) {
                                                case 1:
                                                    return f.splice(h, 0, p);
                                                case 2:
                                                    return f.set(h, p);
                                                case 3:
                                                    return f.add(p);
                                                default:
                                                    return (f[h] = p);
                                            }
                                        case "remove":
                                            switch (l) {
                                                case 1:
                                                    return f.splice(h, 1);
                                                case 2:
                                                    return f.delete(h);
                                                case 3:
                                                    return f.delete(n.value);
                                                default:
                                                    return delete f[h];
                                            }
                                        default:
                                            e(17, a);
                                    }
                                }),
                                t
                            );
                        },
                        R: function (e, t, r, i) {
                            switch (e.i) {
                                case 0:
                                case 4:
                                case 2:
                                    return (function (e, t, r, i) {
                                        var f = e.t,
                                            s = e.o;
                                        o(e.D, function (e, o) {
                                            var l = u(f, e),
                                                p = u(s, e),
                                                h = o ? (a(f, e) ? "replace" : c) : "remove";
                                            if (l !== p || "replace" !== h) {
                                                var v = t.concat(e);
                                                r.push(
                                                    "remove" === h ? { op: h, path: v } : { op: h, path: v, value: p }
                                                ),
                                                    i.push(
                                                        h === c
                                                            ? { op: "remove", path: v }
                                                            : "remove" === h
                                                            ? { op: c, path: v, value: n(l) }
                                                            : { op: "replace", path: v, value: n(l) }
                                                    );
                                            }
                                        });
                                    })(e, t, r, i);
                                case 5:
                                case 1:
                                    return (function (e, t, r, o) {
                                        var i = e.t,
                                            a = e.D,
                                            u = e.o;
                                        if (u.length < i.length) {
                                            var f = [u, i];
                                            (i = f[0]), (u = f[1]);
                                            var s = [o, r];
                                            (r = s[0]), (o = s[1]);
                                        }
                                        for (var l = 0; l < i.length; l++)
                                            if (a[l] && u[l] !== i[l]) {
                                                var p = t.concat([l]);
                                                r.push({ op: "replace", path: p, value: n(u[l]) }),
                                                    o.push({ op: "replace", path: p, value: n(i[l]) });
                                            }
                                        for (var h = i.length; h < u.length; h++) {
                                            var v = t.concat([h]);
                                            r.push({ op: c, path: v, value: n(u[h]) });
                                        }
                                        i.length < u.length &&
                                            o.push({ op: "replace", path: t.concat(["length"]), value: i.length });
                                    })(e, t, r, i);
                                case 3:
                                    return (function (e, t, r, n) {
                                        var o = e.t,
                                            i = e.o,
                                            a = 0;
                                        o.forEach(function (e) {
                                            if (!i.has(e)) {
                                                var o = t.concat([a]);
                                                r.push({ op: "remove", path: o, value: e }),
                                                    n.unshift({ op: c, path: o, value: e });
                                            }
                                            a++;
                                        }),
                                            (a = 0),
                                            i.forEach(function (e) {
                                                if (!o.has(e)) {
                                                    var i = t.concat([a]);
                                                    r.push({ op: c, path: i, value: e }),
                                                        n.unshift({ op: "remove", path: i, value: e });
                                                }
                                                a++;
                                            });
                                    })(e, t, r, i);
                            }
                        },
                        M: function (e, t, r, n) {
                            r.push({ op: "replace", path: [], value: t }),
                                n.push({ op: "replace", path: [], value: e.t });
                        }
                    });
                }
                function T() {
                    function t(e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        a(e, t), (e.prototype = ((r.prototype = t.prototype), new r()));
                    }
                    function n(e) {
                        e.o || ((e.D = new Map()), (e.o = new Map(e.t)));
                    }
                    function o(e) {
                        e.o ||
                            ((e.o = new Set()),
                            e.t.forEach(function (t) {
                                if (r(t)) {
                                    var n = z(e.A.h, t, e);
                                    e.p.set(t, n), e.o.add(n);
                                } else e.o.add(t);
                            }));
                    }
                    function i(t) {
                        t.g && e(3, JSON.stringify(p(t)));
                    }
                    var a = function (e, t) {
                            return (a =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                })(e, t);
                        },
                        u = (function () {
                            function e(e, t) {
                                return (
                                    (this[Q] = {
                                        i: 2,
                                        l: t,
                                        A: t ? t.A : m(),
                                        P: !1,
                                        I: !1,
                                        o: void 0,
                                        D: void 0,
                                        t: e,
                                        k: this,
                                        C: !1,
                                        g: !1
                                    }),
                                    this
                                );
                            }
                            t(e, Map);
                            var o = e.prototype;
                            return (
                                Object.defineProperty(o, "size", {
                                    get: function () {
                                        return p(this[Q]).size;
                                    }
                                }),
                                (o.has = function (e) {
                                    return p(this[Q]).has(e);
                                }),
                                (o.set = function (e, t) {
                                    var r = this[Q];
                                    return (
                                        i(r),
                                        (p(r).has(e) && p(r).get(e) === t) ||
                                            (n(r), E(r), r.D.set(e, !0), r.o.set(e, t), r.D.set(e, !0)),
                                        this
                                    );
                                }),
                                (o.delete = function (e) {
                                    if (!this.has(e)) return !1;
                                    var t = this[Q];
                                    return i(t), n(t), E(t), t.D.set(e, !1), t.o.delete(e), !0;
                                }),
                                (o.clear = function () {
                                    var e = this[Q];
                                    return i(e), n(e), E(e), (e.D = new Map()), e.o.clear();
                                }),
                                (o.forEach = function (e, t) {
                                    var r = this;
                                    p(this[Q]).forEach(function (n, o) {
                                        e.call(t, r.get(o), o, r);
                                    });
                                }),
                                (o.get = function (e) {
                                    var t = this[Q];
                                    i(t);
                                    var o = p(t).get(e);
                                    if (t.I || !r(o)) return o;
                                    if (o !== t.t.get(e)) return o;
                                    var a = z(t.A.h, o, t);
                                    return n(t), t.o.set(e, a), a;
                                }),
                                (o.keys = function () {
                                    return p(this[Q]).keys();
                                }),
                                (o.values = function () {
                                    var e,
                                        t = this,
                                        r = this.keys();
                                    return (
                                        ((e = {})[V] = function () {
                                            return t.values();
                                        }),
                                        (e.next = function () {
                                            var e = r.next();
                                            return e.done ? e : { done: !1, value: t.get(e.value) };
                                        }),
                                        e
                                    );
                                }),
                                (o.entries = function () {
                                    var e,
                                        t = this,
                                        r = this.keys();
                                    return (
                                        ((e = {})[V] = function () {
                                            return t.entries();
                                        }),
                                        (e.next = function () {
                                            var e = r.next();
                                            if (e.done) return e;
                                            var n = t.get(e.value);
                                            return { done: !1, value: [e.value, n] };
                                        }),
                                        e
                                    );
                                }),
                                (o[V] = function () {
                                    return this.entries();
                                }),
                                e
                            );
                        })(),
                        c = (function () {
                            function e(e, t) {
                                return (
                                    (this[Q] = {
                                        i: 3,
                                        l: t,
                                        A: t ? t.A : m(),
                                        P: !1,
                                        I: !1,
                                        o: void 0,
                                        t: e,
                                        k: this,
                                        p: new Map(),
                                        g: !1,
                                        C: !1
                                    }),
                                    this
                                );
                            }
                            t(e, Set);
                            var r = e.prototype;
                            return (
                                Object.defineProperty(r, "size", {
                                    get: function () {
                                        return p(this[Q]).size;
                                    }
                                }),
                                (r.has = function (e) {
                                    var t = this[Q];
                                    return (
                                        i(t), t.o ? !!t.o.has(e) || !(!t.p.has(e) || !t.o.has(t.p.get(e))) : t.t.has(e)
                                    );
                                }),
                                (r.add = function (e) {
                                    var t = this[Q];
                                    return i(t), this.has(e) || (o(t), E(t), t.o.add(e)), this;
                                }),
                                (r.delete = function (e) {
                                    if (!this.has(e)) return !1;
                                    var t = this[Q];
                                    return i(t), o(t), E(t), t.o.delete(e) || (!!t.p.has(e) && t.o.delete(t.p.get(e)));
                                }),
                                (r.clear = function () {
                                    var e = this[Q];
                                    return i(e), o(e), E(e), e.o.clear();
                                }),
                                (r.values = function () {
                                    var e = this[Q];
                                    return i(e), o(e), e.o.values();
                                }),
                                (r.entries = function () {
                                    var e = this[Q];
                                    return i(e), o(e), e.o.entries();
                                }),
                                (r.keys = function () {
                                    return this.values();
                                }),
                                (r[V] = function () {
                                    return this.values();
                                }),
                                (r.forEach = function (e, t) {
                                    for (var r = this.values(), n = r.next(); !n.done; )
                                        e.call(t, n.value, n.value, this), (n = r.next());
                                }),
                                e
                            );
                        })();
                    g("MapSet", {
                        T: function (e, t) {
                            return new u(e, t);
                        },
                        F: function (e, t) {
                            return new c(e, t);
                        }
                    });
                }
                function W() {
                    C(), T(), N();
                }
                function K(e) {
                    return e;
                }
                function U(e) {
                    return e;
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.castDraft = K),
                    (exports.castImmutable = U),
                    (exports.current = F),
                    (exports.enableAllPlugins = W),
                    (exports.enableES5 = C),
                    (exports.enableMapSet = T),
                    (exports.enablePatches = N),
                    (exports.isDraft = t),
                    (exports.isDraftable = r),
                    (exports.original = n),
                    (exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = exports.nothing = exports.immerable = exports.finishDraft = exports.createDraft = exports.applyPatches = exports.Immer = exports.default = void 0);
                var $,
                    J,
                    G = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                    X = "undefined" != typeof Map,
                    q = "undefined" != typeof Set,
                    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                    H = G ? Symbol.for("immer-nothing") : ((($ = {})["immer-nothing"] = !0), $),
                    L = G ? Symbol.for("immer-draftable") : "__$immer_draftable",
                    Q = G ? Symbol.for("immer-state") : "__$immer_state",
                    V = ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator",
                    Y = {
                        0: "Illegal state",
                        1: "Immer drafts cannot have computed properties",
                        2: "This object has been frozen and should not be mutated",
                        3: function (e) {
                            return (
                                "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
                                e
                            );
                        },
                        4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
                        5: "Immer forbids circular references",
                        6: "The first or second argument to `produce` must be a function",
                        7: "The third argument to `produce` must be a function or undefined",
                        8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
                        9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
                        10: "The given draft is already finalized",
                        11: "Object.defineProperty() cannot be used on an Immer draft",
                        12: "Object.setPrototypeOf() cannot be used on an Immer draft",
                        13: "Immer only supports deleting array indices",
                        14: "Immer only supports setting array indices and the 'length' property",
                        15: function (e) {
                            return "Cannot apply patch, path doesn't resolve: " + e;
                        },
                        16: 'Sets cannot have "replace" patches.',
                        17: function (e) {
                            return "Unsupported patch operation: " + e;
                        },
                        18: function (e) {
                            return (
                                "The plugin for '" +
                                e +
                                "' has not been loaded into Immer. To enable the plugin, import and call `enable" +
                                e +
                                "()` when initializing your application."
                            );
                        },
                        19: "plugin not loaded",
                        20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
                        21: function (e) {
                            return (
                                "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" +
                                e +
                                "'"
                            );
                        },
                        22: function (e) {
                            return "'current' expects a draft, got: " + e;
                        },
                        23: function (e) {
                            return "'original' expects a draft, got: " + e;
                        }
                    },
                    Z =
                        "undefined" != typeof Reflect && Reflect.ownKeys
                            ? Reflect.ownKeys
                            : void 0 !== Object.getOwnPropertySymbols
                            ? function (e) {
                                  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                              }
                            : Object.getOwnPropertyNames,
                    ee =
                        Object.getOwnPropertyDescriptors ||
                        function (e) {
                            var t = {};
                            return (
                                Z(e).forEach(function (r) {
                                    t[r] = Object.getOwnPropertyDescriptor(e, r);
                                }),
                                t
                            );
                        },
                    te = {},
                    re = {
                        get: function (e, t) {
                            if (t === Q) return e;
                            var n = p(e);
                            if (!a(n, t))
                                return (function (e, t, r) {
                                    var n,
                                        o = _(t, r);
                                    return o
                                        ? "value" in o
                                            ? o.value
                                            : null === (n = o.get) || void 0 === n
                                            ? void 0
                                            : n.call(e.k)
                                        : void 0;
                                })(e, n, t);
                            var o = n[t];
                            return e.I || !r(o) ? o : o === I(e.t, t) ? (M(e), (e.o[t] = z(e.A.h, o, e))) : o;
                        },
                        has: function (e, t) {
                            return t in p(e);
                        },
                        ownKeys: function (e) {
                            return Reflect.ownKeys(p(e));
                        },
                        set: function (e, t, r) {
                            var n = _(p(e), t);
                            if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                            if (((e.D[t] = !0), !e.P)) {
                                if (f(r, I(p(e), t)) && (void 0 !== r || a(e.t, t))) return !0;
                                M(e), E(e);
                            }
                            return (e.o[t] = r), !0;
                        },
                        deleteProperty: function (e, t) {
                            return (
                                void 0 !== I(e.t, t) || t in e.t ? ((e.D[t] = !1), M(e), E(e)) : delete e.D[t],
                                e.o && delete e.o[t],
                                !0
                            );
                        },
                        getOwnPropertyDescriptor: function (e, t) {
                            var r = p(e),
                                n = Reflect.getOwnPropertyDescriptor(r, t);
                            return n
                                ? {
                                      writable: !0,
                                      configurable: 1 !== e.i || "length" !== t,
                                      enumerable: n.enumerable,
                                      value: r[t]
                                  }
                                : n;
                        },
                        defineProperty: function () {
                            e(11);
                        },
                        getPrototypeOf: function (e) {
                            return Object.getPrototypeOf(e.t);
                        },
                        setPrototypeOf: function () {
                            e(12);
                        }
                    },
                    ne = {};
                (exports.immerable = L),
                    (exports.nothing = H),
                    o(re, function (e, t) {
                        ne[e] = function () {
                            return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
                        };
                    }),
                    (ne.deleteProperty = function (e, t) {
                        return re.deleteProperty.call(this, e[0], t);
                    }),
                    (ne.set = function (e, t, r) {
                        return re.set.call(this, e[0], t, r, e[0]);
                    });
                var oe = (function () {
                        function n(e) {
                            (this.O = B),
                                (this.N = !1),
                                "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                                    this.setUseProxies(e.useProxies),
                                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                                    this.setAutoFreeze(e.autoFreeze),
                                (this.produce = this.produce.bind(this)),
                                (this.produceWithPatches = this.produceWithPatches.bind(this));
                        }
                        var o = n.prototype;
                        return (
                            (o.produce = function (t, n, o) {
                                if ("function" == typeof t && "function" != typeof n) {
                                    var i = n;
                                    n = t;
                                    var a = this;
                                    return function (e) {
                                        var t = this;
                                        void 0 === e && (e = i);
                                        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
                                            o[u - 1] = arguments[u];
                                        return a.produce(e, function (e) {
                                            var r;
                                            return (r = n).call.apply(r, [t, e].concat(o));
                                        });
                                    };
                                }
                                var u;
                                if (
                                    ("function" != typeof n && e(6),
                                    void 0 !== o && "function" != typeof o && e(7),
                                    r(t))
                                ) {
                                    var c = w(this),
                                        f = z(this, t, void 0),
                                        s = !0;
                                    try {
                                        (u = n(f)), (s = !1);
                                    } finally {
                                        s ? O(c) : x(c);
                                    }
                                    return "undefined" != typeof Promise && u instanceof Promise
                                        ? u.then(
                                              function (e) {
                                                  return P(c, o), A(e, c);
                                              },
                                              function (e) {
                                                  throw (O(c), e);
                                              }
                                          )
                                        : (P(c, o), A(u, c));
                                }
                                if (!t || "object" != typeof t) {
                                    if ((u = n(t)) === H) return;
                                    return void 0 === u && (u = t), this.N && v(u, !0), u;
                                }
                                e(21, t);
                            }),
                            (o.produceWithPatches = function (e, t) {
                                var r,
                                    n,
                                    o = this;
                                return "function" == typeof e
                                    ? function (t) {
                                          for (
                                              var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
                                              i < r;
                                              i++
                                          )
                                              n[i - 1] = arguments[i];
                                          return o.produceWithPatches(t, function (t) {
                                              return e.apply(void 0, [t].concat(n));
                                          });
                                      }
                                    : [
                                          this.produce(e, t, function (e, t) {
                                              (r = e), (n = t);
                                          }),
                                          r,
                                          n
                                      ];
                            }),
                            (o.createDraft = function (n) {
                                r(n) || e(8), t(n) && (n = F(n));
                                var o = w(this),
                                    i = z(this, n, void 0);
                                return (i[Q].C = !0), x(o), i;
                            }),
                            (o.finishDraft = function (e, t) {
                                var r = e && e[Q],
                                    n = r.A;
                                return P(n, t), A(void 0, n);
                            }),
                            (o.setAutoFreeze = function (e) {
                                this.N = e;
                            }),
                            (o.setUseProxies = function (t) {
                                t && !B && e(20), (this.O = t);
                            }),
                            (o.applyPatches = function (e, r) {
                                var n;
                                for (n = r.length - 1; n >= 0; n--) {
                                    var o = r[n];
                                    if (0 === o.path.length && "replace" === o.op) {
                                        e = o.value;
                                        break;
                                    }
                                }
                                var i = b("Patches").$;
                                return t(e)
                                    ? i(e, r)
                                    : this.produce(e, function (e) {
                                          return i(e, r.slice(n + 1));
                                      });
                            }),
                            n
                        );
                    })(),
                    ie = new oe(),
                    ae = ie.produce,
                    ue = ie.produceWithPatches.bind(ie),
                    ce = ie.setAutoFreeze.bind(ie),
                    fe = ie.setUseProxies.bind(ie),
                    se = ie.applyPatches.bind(ie),
                    le = ie.createDraft.bind(ie),
                    pe = ie.finishDraft.bind(ie);
                (exports.finishDraft = pe),
                    (exports.createDraft = le),
                    (exports.applyPatches = se),
                    (exports.setUseProxies = fe),
                    (exports.setAutoFreeze = ce),
                    (exports.produceWithPatches = ue),
                    (exports.produce = ae),
                    (exports.Immer = oe);
                var he = ae;
                exports.default = he;
            },
            {}
        ],
        eENU: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.createKoreFile = function (e) {
                        var r = e.adaptor;
                        return {
                            deleteFile: function (e) {
                                return r.deleteFile(e);
                            },
                            readFile: function (e) {
                                return r.readFile(e);
                            },
                            writeFile: function (e, t) {
                                return r.writeFile(e, t);
                            }
                        };
                    });
            },
            {}
        ],
        rH1J: [
            function (require, module, exports) {
                var t,
                    e,
                    n = (module.exports = {});
                function r() {
                    throw new Error("setTimeout has not been defined");
                }
                function o() {
                    throw new Error("clearTimeout has not been defined");
                }
                function i(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === r || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                    try {
                        return t(e, 0);
                    } catch (n) {
                        try {
                            return t.call(null, e, 0);
                        } catch (n) {
                            return t.call(this, e, 0);
                        }
                    }
                }
                function u(t) {
                    if (e === clearTimeout) return clearTimeout(t);
                    if ((e === o || !e) && clearTimeout) return (e = clearTimeout), clearTimeout(t);
                    try {
                        return e(t);
                    } catch (n) {
                        try {
                            return e.call(null, t);
                        } catch (n) {
                            return e.call(this, t);
                        }
                    }
                }
                !(function () {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : r;
                    } catch (n) {
                        t = r;
                    }
                    try {
                        e = "function" == typeof clearTimeout ? clearTimeout : o;
                    } catch (n) {
                        e = o;
                    }
                })();
                var c,
                    s = [],
                    l = !1,
                    a = -1;
                function f() {
                    l && c && ((l = !1), c.length ? (s = c.concat(s)) : (a = -1), s.length && h());
                }
                function h() {
                    if (!l) {
                        var t = i(f);
                        l = !0;
                        for (var e = s.length; e; ) {
                            for (c = s, s = []; ++a < e; ) c && c[a].run();
                            (a = -1), (e = s.length);
                        }
                        (c = null), (l = !1), u(t);
                    }
                }
                function m(t, e) {
                    (this.fun = t), (this.array = e);
                }
                function p() {}
                (n.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    s.push(new m(t, e)), 1 !== s.length || l || i(h);
                }),
                    (m.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (n.title = "browser"),
                    (n.env = {}),
                    (n.argv = []),
                    (n.version = ""),
                    (n.versions = {}),
                    (n.on = p),
                    (n.addListener = p),
                    (n.once = p),
                    (n.off = p),
                    (n.removeListener = p),
                    (n.removeAllListeners = p),
                    (n.emit = p),
                    (n.prependListener = p),
                    (n.prependOnceListener = p),
                    (n.listeners = function (t) {
                        return [];
                    }),
                    (n.binding = function (t) {
                        throw new Error("process.binding is not supported");
                    }),
                    (n.cwd = function () {
                        return "/";
                    }),
                    (n.chdir = function (t) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (n.umask = function () {
                        return 0;
                    });
            },
            {}
        ],
        QNin: [
            function (require, module, exports) {
                var process = require("process");
                var e = require("process");
                function r() {
                    return "object" == typeof navigator && "userAgent" in navigator
                        ? navigator.userAgent
                        : "object" == typeof e && "version" in e
                        ? `Node.js/${e.version.substr(1)} (${e.platform}; ${e.arch})`
                        : "<environment undetectable>";
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.getUserAgent = r);
            },
            { process: "rH1J" }
        ],
        dexP: [
            function (require, module, exports) {
                function r(e, n, o, t) {
                    if ("function" != typeof o) throw new Error("method for before hook must be a function");
                    return (
                        t || (t = {}),
                        Array.isArray(n)
                            ? n.reverse().reduce(function (n, o) {
                                  return r.bind(null, e, o, n, t);
                              }, o)()
                            : Promise.resolve().then(function () {
                                  return e.registry[n]
                                      ? e.registry[n].reduce(function (r, e) {
                                            return e.hook.bind(null, r, t);
                                        }, o)()
                                      : o(t);
                              })
                    );
                }
                module.exports = r;
            },
            {}
        ],
        aMHk: [
            function (require, module, exports) {
                function n(n, r, e, t) {
                    var o = t;
                    n.registry[e] || (n.registry[e] = []),
                        "before" === r &&
                            (t = function (n, r) {
                                return Promise.resolve().then(o.bind(null, r)).then(n.bind(null, r));
                            }),
                        "after" === r &&
                            (t = function (n, r) {
                                var e;
                                return Promise.resolve()
                                    .then(n.bind(null, r))
                                    .then(function (n) {
                                        return o((e = n), r);
                                    })
                                    .then(function () {
                                        return e;
                                    });
                            }),
                        "error" === r &&
                            (t = function (n, r) {
                                return Promise.resolve()
                                    .then(n.bind(null, r))
                                    .catch(function (n) {
                                        return o(n, r);
                                    });
                            }),
                        n.registry[e].push({ hook: t, orig: o });
                }
                module.exports = n;
            },
            {}
        ],
        nVPg: [
            function (require, module, exports) {
                function r(r, i, e) {
                    if (r.registry[i]) {
                        var t = r.registry[i]
                            .map(function (r) {
                                return r.orig;
                            })
                            .indexOf(e);
                        -1 !== t && r.registry[i].splice(t, 1);
                    }
                }
                module.exports = r;
            },
            {}
        ],
        KHTO: [
            function (require, module, exports) {
                var r = require("./lib/register"),
                    e = require("./lib/add"),
                    o = require("./lib/remove"),
                    n = Function.bind,
                    i = n.bind(n);
                function l(r, n, l) {
                    var u = i(o, null).apply(null, l ? [n, l] : [n]);
                    (r.api = { remove: u }),
                        (r.remove = u),
                        ["before", "error", "after", "wrap"].forEach(function (o) {
                            var u = l ? [n, o, l] : [n, o];
                            r[o] = r.api[o] = i(e, null).apply(null, u);
                        });
                }
                function u() {
                    var e = { registry: {} },
                        o = r.bind(null, e, "h");
                    return l(o, e, "h"), o;
                }
                function t() {
                    var e = { registry: {} },
                        o = r.bind(null, e);
                    return l(o, e), o;
                }
                var a = !1;
                function p() {
                    return (
                        a ||
                            (console.warn(
                                '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
                            ),
                            (a = !0)),
                        t()
                    );
                }
                (p.Singular = u.bind()),
                    (p.Collection = t.bind()),
                    (module.exports = p),
                    (module.exports.Hook = p),
                    (module.exports.Singular = p.Singular),
                    (module.exports.Collection = p.Collection);
            },
            { "./lib/register": "dexP", "./lib/add": "aMHk", "./lib/remove": "nVPg" }
        ],
        x73j: [
            function (require, module, exports) {
                "use strict";
                function t(t) {
                    return "[object Object]" === Object.prototype.toString.call(t);
                }
                function e(e) {
                    var o, r;
                    return (
                        !1 !== t(e) &&
                        (void 0 === (o = e.constructor) ||
                            (!1 !== t((r = o.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")))
                    );
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
                var o = e;
                exports.default = o;
            },
            {}
        ],
        aRcl: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.endpoint = void 0);
                var e = n(require("is-plain-object")),
                    t = require("universal-user-agent");
                function n(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function r(e) {
                    return e ? Object.keys(e).reduce((t, n) => ((t[n.toLowerCase()] = e[n]), t), {}) : {};
                }
                function i(t, n) {
                    const r = Object.assign({}, t);
                    return (
                        Object.keys(n).forEach((o) => {
                            (0, e.default)(n[o]) && o in t ? (r[o] = i(t[o], n[o])) : Object.assign(r, { [o]: n[o] });
                        }),
                        r
                    );
                }
                function o(e, t, n) {
                    if ("string" == typeof t) {
                        let [e, r] = t.split(" ");
                        n = Object.assign(r ? { method: e, url: r } : { url: e }, n);
                    } else n = Object.assign({}, t);
                    n.headers = r(n.headers);
                    const o = i(e || {}, n);
                    return (
                        e &&
                            e.mediaType.previews.length &&
                            (o.mediaType.previews = e.mediaType.previews
                                .filter((e) => !o.mediaType.previews.includes(e))
                                .concat(o.mediaType.previews)),
                        (o.mediaType.previews = o.mediaType.previews.map((e) => e.replace(/-preview/, ""))),
                        o
                    );
                }
                function s(e, t) {
                    const n = /\?/.test(e) ? "&" : "?",
                        r = Object.keys(t);
                    return 0 === r.length
                        ? e
                        : e +
                              n +
                              r
                                  .map((e) =>
                                      "q" === e
                                          ? "q=" + t.q.split("+").map(encodeURIComponent).join("+")
                                          : `${e}=${encodeURIComponent(t[e])}`
                                  )
                                  .join("&");
                }
                const c = /\{[^}]+\}/g;
                function a(e) {
                    return e.replace(/^\W+|\W+$/g, "").split(/,/);
                }
                function u(e) {
                    const t = e.match(c);
                    return t ? t.map(a).reduce((e, t) => e.concat(t), []) : [];
                }
                function p(e, t) {
                    return Object.keys(e)
                        .filter((e) => !t.includes(e))
                        .reduce((t, n) => ((t[n] = e[n]), t), {});
                }
                function l(e) {
                    return e
                        .split(/(%[0-9A-Fa-f]{2})/g)
                        .map(function (e) {
                            return (
                                /%[0-9A-Fa-f]/.test(e) || (e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")),
                                e
                            );
                        })
                        .join("");
                }
                function d(e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    });
                }
                function f(e, t, n) {
                    return (t = "+" === e || "#" === e ? l(t) : d(t)), n ? d(n) + "=" + t : t;
                }
                function h(e) {
                    return null != e;
                }
                function m(e) {
                    return ";" === e || "&" === e || "?" === e;
                }
                function g(e, t, n, r) {
                    var i = e[n],
                        o = [];
                    if (h(i) && "" !== i)
                        if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i)
                            (i = i.toString()),
                                r && "*" !== r && (i = i.substring(0, parseInt(r, 10))),
                                o.push(f(t, i, m(t) ? n : ""));
                        else if ("*" === r)
                            Array.isArray(i)
                                ? i.filter(h).forEach(function (e) {
                                      o.push(f(t, e, m(t) ? n : ""));
                                  })
                                : Object.keys(i).forEach(function (e) {
                                      h(i[e]) && o.push(f(t, i[e], e));
                                  });
                        else {
                            const e = [];
                            Array.isArray(i)
                                ? i.filter(h).forEach(function (n) {
                                      e.push(f(t, n));
                                  })
                                : Object.keys(i).forEach(function (n) {
                                      h(i[n]) && (e.push(d(n)), e.push(f(t, i[n].toString())));
                                  }),
                                m(t) ? o.push(d(n) + "=" + e.join(",")) : 0 !== e.length && o.push(e.join(","));
                        }
                    else
                        ";" === t
                            ? h(i) && o.push(d(n))
                            : "" !== i || ("&" !== t && "?" !== t)
                            ? "" === i && o.push("")
                            : o.push(d(n) + "=");
                    return o;
                }
                function y(e) {
                    return { expand: b.bind(null, e) };
                }
                function b(e, t) {
                    var n = ["+", "#", ".", "/", ";", "?", "&"];
                    return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, r, i) {
                        if (r) {
                            let e = "";
                            const i = [];
                            if (
                                (-1 !== n.indexOf(r.charAt(0)) && ((e = r.charAt(0)), (r = r.substr(1))),
                                r.split(/,/g).forEach(function (n) {
                                    var r = /([^:\*]*)(?::(\d+)|(\*))?/.exec(n);
                                    i.push(g(t, e, r[1], r[2] || r[3]));
                                }),
                                e && "+" !== e)
                            ) {
                                var o = ",";
                                return (
                                    "?" === e ? (o = "&") : "#" !== e && (o = e), (0 !== i.length ? e : "") + i.join(o)
                                );
                            }
                            return i.join(",");
                        }
                        return l(i);
                    });
                }
                function j(e) {
                    let t,
                        n = e.method.toUpperCase(),
                        r = (e.url || "/").replace(/:([a-z]\w+)/g, "{+$1}"),
                        i = Object.assign({}, e.headers),
                        o = p(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
                    const c = u(r);
                    (r = y(r).expand(o)), /^http/.test(r) || (r = e.baseUrl + r);
                    const a = p(
                        o,
                        Object.keys(e)
                            .filter((e) => c.includes(e))
                            .concat("baseUrl")
                    );
                    if (
                        !/application\/octet-stream/i.test(i.accept) &&
                        (e.mediaType.format &&
                            (i.accept = i.accept
                                .split(/,/)
                                .map((t) =>
                                    t.replace(
                                        /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                                        `application/vnd$1$2.${e.mediaType.format}`
                                    )
                                )
                                .join(",")),
                        e.mediaType.previews.length)
                    ) {
                        const t = i.accept.match(/[\w-]+(?=-preview)/g) || [];
                        i.accept = t
                            .concat(e.mediaType.previews)
                            .map((t) => {
                                return `application/vnd.github.${t}-preview${
                                    e.mediaType.format ? `.${e.mediaType.format}` : "+json"
                                }`;
                            })
                            .join(",");
                    }
                    return (
                        ["GET", "HEAD"].includes(n)
                            ? (r = s(r, a))
                            : "data" in a
                            ? (t = a.data)
                            : Object.keys(a).length
                            ? (t = a)
                            : (i["content-length"] = 0),
                        i["content-type"] || void 0 === t || (i["content-type"] = "application/json; charset=utf-8"),
                        ["PATCH", "PUT"].includes(n) && void 0 === t && (t = ""),
                        Object.assign(
                            { method: n, url: r, headers: i },
                            void 0 !== t ? { body: t } : null,
                            e.request ? { request: e.request } : null
                        )
                    );
                }
                function v(e, t, n) {
                    return j(o(e, t, n));
                }
                function T(e, t) {
                    const n = o(e, t),
                        r = v.bind(null, n);
                    return Object.assign(r, {
                        DEFAULTS: n,
                        defaults: T.bind(null, n),
                        merge: o.bind(null, n),
                        parse: j
                    });
                }
                const w = "6.0.5",
                    O = `octokit-endpoint.js/6.0.5 ${(0, t.getUserAgent)()}`,
                    A = {
                        method: "GET",
                        baseUrl: "https://api.github.com",
                        headers: { accept: "application/vnd.github.v3+json", "user-agent": O },
                        mediaType: { format: "", previews: [] }
                    },
                    U = T(null, A);
                exports.endpoint = U;
            },
            { "is-plain-object": "x73j", "universal-user-agent": "QNin" }
        ],
        IeX9: [
            function (require, module, exports) {
                "use strict";
                var e = function () {
                        if ("undefined" != typeof self) return self;
                        if ("undefined" != typeof window) return window;
                        if (void 0 !== t) return t;
                        throw new Error("unable to locate global object");
                    },
                    t = e();
                (module.exports = exports = t.fetch),
                    (exports.default = t.fetch.bind(t)),
                    (exports.Headers = t.Headers),
                    (exports.Request = t.Request),
                    (exports.Response = t.Response);
            },
            {}
        ],
        U6DM: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Deprecation = void 0);
                class r extends Error {
                    constructor(r) {
                        super(r),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                            (this.name = "Deprecation");
                    }
                }
                exports.Deprecation = r;
            },
            {}
        ],
        cRbN: [
            function (require, module, exports) {
                function n(e, r) {
                    if (e && r) return n(e)(r);
                    if ("function" != typeof e) throw new TypeError("need wrapper function");
                    return (
                        Object.keys(e).forEach(function (n) {
                            t[n] = e[n];
                        }),
                        t
                    );
                    function t() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        var t = e.apply(this, n),
                            o = n[n.length - 1];
                        return (
                            "function" == typeof t &&
                                t !== o &&
                                Object.keys(o).forEach(function (n) {
                                    t[n] = o[n];
                                }),
                            t
                        );
                    }
                }
                module.exports = n;
            },
            {}
        ],
        KnGX: [
            function (require, module, exports) {
                var e = require("wrappy");
                function r(e) {
                    var r = function () {
                        return r.called ? r.value : ((r.called = !0), (r.value = e.apply(this, arguments)));
                    };
                    return (r.called = !1), r;
                }
                function n(e) {
                    var r = function () {
                            if (r.called) throw new Error(r.onceError);
                            return (r.called = !0), (r.value = e.apply(this, arguments));
                        },
                        n = e.name || "Function wrapped with `once`";
                    return (r.onceError = n + " shouldn't be called more than once"), (r.called = !1), r;
                }
                (module.exports = e(r)),
                    (module.exports.strict = e(n)),
                    (r.proto = r(function () {
                        Object.defineProperty(Function.prototype, "once", {
                            value: function () {
                                return r(this);
                            },
                            configurable: !0
                        }),
                            Object.defineProperty(Function.prototype, "onceStrict", {
                                value: function () {
                                    return n(this);
                                },
                                configurable: !0
                            });
                    }));
            },
            { wrappy: "cRbN" }
        ],
        GylL: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.RequestError = void 0);
                var e = require("deprecation"),
                    r = t(require("once"));
                function t(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                const s = (0, r.default)((e) => console.warn(e));
                class o extends Error {
                    constructor(r, t, o) {
                        super(r),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor),
                            (this.name = "HttpError"),
                            (this.status = t),
                            Object.defineProperty(this, "code", {
                                get: () => (
                                    s(
                                        new e.Deprecation(
                                            "[@octokit/request-error] `error.code` is deprecated, use `error.status`."
                                        )
                                    ),
                                    t
                                )
                            }),
                            (this.headers = o.headers || {});
                        const c = Object.assign({}, o.request);
                        o.request.headers.authorization &&
                            (c.headers = Object.assign({}, o.request.headers, {
                                authorization: o.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
                            })),
                            (c.url = c.url
                                .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")
                                .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]")),
                            (this.request = c);
                    }
                }
                exports.RequestError = o;
            },
            { deprecation: "U6DM", once: "KnGX" }
        ],
        kYx7: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.request = void 0);
                var e = require("@octokit/endpoint"),
                    t = require("universal-user-agent"),
                    r = o(require("is-plain-object")),
                    s = o(require("node-fetch")),
                    n = require("@octokit/request-error");
                function o(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                const u = "5.4.7";
                function a(e) {
                    return e.arrayBuffer();
                }
                function i(e) {
                    ((0, r.default)(e.body) || Array.isArray(e.body)) && (e.body = JSON.stringify(e.body));
                    let t,
                        o,
                        u = {};
                    return ((e.request && e.request.fetch) || s.default)(
                        e.url,
                        Object.assign(
                            { method: e.method, body: e.body, headers: e.headers, redirect: e.redirect },
                            e.request
                        )
                    )
                        .then((r) => {
                            (o = r.url), (t = r.status);
                            for (const e of r.headers) u[e[0]] = e[1];
                            if (204 === t || 205 === t) return;
                            if ("HEAD" === e.method) {
                                if (t < 400) return;
                                throw new n.RequestError(r.statusText, t, { headers: u, request: e });
                            }
                            if (304 === t) throw new n.RequestError("Not modified", t, { headers: u, request: e });
                            if (t >= 400)
                                return r.text().then((r) => {
                                    const s = new n.RequestError(r, t, { headers: u, request: e });
                                    try {
                                        let e = JSON.parse(s.message);
                                        Object.assign(s, e);
                                        let t = e.errors;
                                        s.message = s.message + ": " + t.map(JSON.stringify).join(", ");
                                    } catch (o) {}
                                    throw s;
                                });
                            const s = r.headers.get("content-type");
                            return /application\/json/.test(s)
                                ? r.json()
                                : !s || /^text\/|charset=utf-8$/.test(s)
                                ? r.text()
                                : a(r);
                        })
                        .then((e) => ({ status: t, url: o, headers: u, data: e }))
                        .catch((t) => {
                            if (t instanceof n.RequestError) throw t;
                            throw new n.RequestError(t.message, 500, { headers: u, request: e });
                        });
                }
                function d(e, t) {
                    const r = e.defaults(t);
                    return Object.assign(
                        function (e, t) {
                            const s = r.merge(e, t);
                            if (!s.request || !s.request.hook) return i(r.parse(s));
                            const n = (e, t) => i(r.parse(r.merge(e, t)));
                            return Object.assign(n, { endpoint: r, defaults: d.bind(null, r) }), s.request.hook(n, s);
                        },
                        { endpoint: r, defaults: d.bind(null, r) }
                    );
                }
                const c = d(e.endpoint, {
                    headers: { "user-agent": `octokit-request.js/5.4.7 ${(0, t.getUserAgent)()}` }
                });
                exports.request = c;
            },
            {
                "@octokit/endpoint": "aRcl",
                "universal-user-agent": "QNin",
                "is-plain-object": "x73j",
                "node-fetch": "IeX9",
                "@octokit/request-error": "GylL"
            }
        ],
        alxP: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    (exports.withCustomRequest = c),
                    (exports.graphql = void 0);
                var e = require("@octokit/request"),
                    r = require("universal-user-agent");
                const t = "4.5.4";
                class s extends Error {
                    constructor(e, r) {
                        super(r.data.errors[0].message),
                            Object.assign(this, r.data),
                            Object.assign(this, { headers: r.headers }),
                            (this.name = "GraphqlError"),
                            (this.request = e),
                            Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                    }
                }
                const a = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
                function o(e, r, t) {
                    t = t = "string" == typeof r ? Object.assign({ query: r }, t) : r;
                    const o = Object.keys(t).reduce(
                        (e, r) =>
                            a.includes(r)
                                ? ((e[r] = t[r]), e)
                                : (e.variables || (e.variables = {}), (e.variables[r] = t[r]), e),
                        {}
                    );
                    return e(o).then((e) => {
                        if (e.data.errors) {
                            const r = {};
                            for (const t of Object.keys(e.headers)) r[t] = e.headers[t];
                            throw new s(o, { headers: r, data: e.data });
                        }
                        return e.data.data;
                    });
                }
                function n(r, t) {
                    const s = r.defaults(t);
                    return Object.assign((e, r) => o(s, e, r), {
                        defaults: n.bind(null, s),
                        endpoint: e.request.endpoint
                    });
                }
                const u = n(e.request, {
                    headers: { "user-agent": `octokit-graphql.js/4.5.4 ${(0, r.getUserAgent)()}` },
                    method: "POST",
                    url: "/graphql"
                });
                function c(e) {
                    return n(e, { method: "POST", url: "/graphql" });
                }
                exports.graphql = u;
            },
            { "@octokit/request": "kYx7", "universal-user-agent": "QNin" }
        ],
        TNwC: [
            function (require, module, exports) {
                "use strict";
                async function t(t) {
                    const e = 3 === t.split(/\./).length ? "app" : /^v\d+\./.test(t) ? "installation" : "oauth";
                    return { type: "token", token: t, tokenType: e };
                }
                function e(t) {
                    return 3 === t.split(/\./).length ? `bearer ${t}` : `token ${t}`;
                }
                async function n(t, n, o, r) {
                    const i = n.endpoint.merge(o, r);
                    return (i.headers.authorization = e(t)), n(i);
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.createTokenAuth = void 0);
                const o = function (e) {
                    if (!e) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
                    if ("string" != typeof e)
                        throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
                    return (
                        (e = e.replace(/^(token|bearer) +/i, "")),
                        Object.assign(t.bind(null, e), { hook: n.bind(null, e) })
                    );
                };
                exports.createTokenAuth = o;
            },
            {}
        ],
        dJuv: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Octokit = void 0);
                var e = require("universal-user-agent"),
                    t = require("before-after-hook"),
                    s = require("@octokit/request"),
                    r = require("@octokit/graphql"),
                    o = require("@octokit/auth-token");
                const i = "3.1.2";
                class n {
                    constructor(n = {}) {
                        const u = new t.Collection(),
                            a = {
                                baseUrl: s.request.endpoint.DEFAULTS.baseUrl,
                                headers: {},
                                request: Object.assign({}, n.request, { hook: u.bind(null, "request") }),
                                mediaType: { previews: [], format: "" }
                            };
                        if (
                            ((a.headers["user-agent"] = [n.userAgent, `octokit-core.js/${i} ${(0, e.getUserAgent)()}`]
                                .filter(Boolean)
                                .join(" ")),
                            n.baseUrl && (a.baseUrl = n.baseUrl),
                            n.previews && (a.mediaType.previews = n.previews),
                            n.timeZone && (a.headers["time-zone"] = n.timeZone),
                            (this.request = s.request.defaults(a)),
                            (this.graphql = (0, r.withCustomRequest)(this.request).defaults({
                                ...a,
                                baseUrl: a.baseUrl.replace(/\/api\/v3$/, "/api")
                            })),
                            (this.log = Object.assign(
                                {
                                    debug: () => {},
                                    info: () => {},
                                    warn: console.warn.bind(console),
                                    error: console.error.bind(console)
                                },
                                n.log
                            )),
                            (this.hook = u),
                            n.authStrategy)
                        ) {
                            const e = n.authStrategy(Object.assign({ request: this.request }, n.auth));
                            u.wrap("request", e.hook), (this.auth = e);
                        } else if (n.auth) {
                            const e = (0, o.createTokenAuth)(n.auth);
                            u.wrap("request", e.hook), (this.auth = e);
                        } else this.auth = async () => ({ type: "unauthenticated" });
                        this.constructor.plugins.forEach((e) => {
                            Object.assign(this, e(this, n));
                        });
                    }
                    static defaults(e) {
                        return class extends this {
                            constructor(...t) {
                                const s = t[0] || {};
                                super(
                                    "function" != typeof e
                                        ? Object.assign(
                                              {},
                                              e,
                                              s,
                                              s.userAgent && e.userAgent
                                                  ? { userAgent: `${s.userAgent} ${e.userAgent}` }
                                                  : null
                                          )
                                        : e(s)
                                );
                            }
                        };
                    }
                    static plugin(...e) {
                        var t;
                        const s = this.plugins;
                        return ((t = class extends this {}).plugins = s.concat(e.filter((e) => !s.includes(e)))), t;
                    }
                }
                (exports.Octokit = n), (n.VERSION = i), (n.plugins = []);
            },
            {
                "universal-user-agent": "QNin",
                "before-after-hook": "KHTO",
                "@octokit/request": "kYx7",
                "@octokit/graphql": "alxP",
                "@octokit/auth-token": "TNwC"
            }
        ],
        tGHQ: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.requestLog = t);
                const e = "1.0.0";
                function t(e) {
                    e.hook.wrap("request", (t, o) => {
                        e.log.debug("request", o);
                        const s = Date.now(),
                            r = e.request.endpoint.parse(o),
                            n = r.url.replace(o.baseUrl, "");
                        return t(o)
                            .then((t) => (e.log.info(`${r.method} ${n} - ${t.status} in ${Date.now() - s}ms`), t))
                            .catch((t) => {
                                throw (e.log.info(`${r.method} ${n} - ${t.status} in ${Date.now() - s}ms`), t);
                            });
                    });
                }
                t.VERSION = "1.0.0";
            },
            {}
        ],
        RsVs: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.paginateRest = r);
                const t = "2.3.0";
                function e(t) {
                    if (!("total_count" in t.data && !("url" in t.data))) return t;
                    const e = t.data.incomplete_results,
                        n = t.data.repository_selection,
                        o = t.data.total_count;
                    delete t.data.incomplete_results, delete t.data.repository_selection, delete t.data.total_count;
                    const a = Object.keys(t.data)[0],
                        r = t.data[a];
                    return (
                        (t.data = r),
                        void 0 !== e && (t.data.incomplete_results = e),
                        void 0 !== n && (t.data.repository_selection = n),
                        (t.data.total_count = o),
                        t
                    );
                }
                function n(t, n, o) {
                    const a = "function" == typeof n ? n.endpoint(o) : t.request.endpoint(n, o),
                        r = "function" == typeof n ? n : t.request,
                        i = a.method,
                        u = a.headers;
                    let l = a.url;
                    return {
                        [Symbol.asyncIterator]: () => ({
                            next: () =>
                                l
                                    ? r({ method: i, url: l, headers: u })
                                          .then(e)
                                          .then(
                                              (t) => (
                                                  (l = ((t.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) ||
                                                      [])[1]),
                                                  { value: t }
                                              )
                                          )
                                    : Promise.resolve({ done: !0 })
                        })
                    };
                }
                function o(t, e, o, r) {
                    return (
                        "function" == typeof o && ((r = o), (o = void 0)),
                        a(t, [], n(t, e, o)[Symbol.asyncIterator](), r)
                    );
                }
                function a(t, e, n, o) {
                    return n.next().then((r) => {
                        if (r.done) return e;
                        let i = !1;
                        return (
                            (e = e.concat(
                                o
                                    ? o(r.value, function () {
                                          i = !0;
                                      })
                                    : r.value.data
                            )),
                            i ? e : a(t, e, n, o)
                        );
                    });
                }
                function r(t) {
                    return { paginate: Object.assign(o.bind(null, t), { iterator: n.bind(null, t) }) };
                }
                r.VERSION = "2.3.0";
            },
            {}
        ],
        bJjF: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.restEndpointMethods = t);
                const e = {
                        actions: {
                            addSelectedRepoToOrgSecret: [
                                "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                            ],
                            cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
                            createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
                            createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"],
                            createRegistrationTokenForRepo: [
                                "POST /repos/{owner}/{repo}/actions/runners/registration-token"
                            ],
                            createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
                            createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
                            createWorkflowDispatch: [
                                "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
                            ],
                            deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                            deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
                            deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"],
                            deleteSelfHostedRunnerFromRepo: [
                                "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
                            ],
                            deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
                            deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
                            downloadArtifact: [
                                "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
                            ],
                            downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
                            downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
                            getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                            getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
                            getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
                            getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
                            getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
                            getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
                            getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
                            getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
                            getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
                            getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
                            getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],
                            getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],
                            listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
                            listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
                            listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
                            listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
                            listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
                            listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
                            listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
                            listSelectedReposForOrgSecret: [
                                "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
                            ],
                            listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
                            listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
                            listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
                            listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
                            listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
                            reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
                            removeSelectedRepoFromOrgSecret: [
                                "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
                            ],
                            setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"]
                        },
                        activity: {
                            checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
                            deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
                            deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
                            getFeeds: ["GET /feeds"],
                            getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
                            getThread: ["GET /notifications/threads/{thread_id}"],
                            getThreadSubscriptionForAuthenticatedUser: [
                                "GET /notifications/threads/{thread_id}/subscription"
                            ],
                            listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
                            listNotificationsForAuthenticatedUser: ["GET /notifications"],
                            listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
                            listPublicEvents: ["GET /events"],
                            listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
                            listPublicEventsForUser: ["GET /users/{username}/events/public"],
                            listPublicOrgEvents: ["GET /orgs/{org}/events"],
                            listReceivedEventsForUser: ["GET /users/{username}/received_events"],
                            listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
                            listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
                            listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
                            listReposStarredByAuthenticatedUser: ["GET /user/starred"],
                            listReposStarredByUser: ["GET /users/{username}/starred"],
                            listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
                            listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
                            listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
                            listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
                            markNotificationsAsRead: ["PUT /notifications"],
                            markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
                            markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
                            setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
                            setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
                            starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
                            unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
                        },
                        apps: {
                            addRepoToInstallation: [
                                "PUT /user/installations/{installation_id}/repositories/{repository_id}",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            checkToken: ["POST /applications/{client_id}/token"],
                            createContentAttachment: [
                                "POST /content_references/{content_reference_id}/attachments",
                                { mediaType: { previews: ["corsair"] } }
                            ],
                            createFromManifest: ["POST /app-manifests/{code}/conversions"],
                            createInstallationAccessToken: [
                                "POST /app/installations/{installation_id}/access_tokens",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
                            deleteInstallation: [
                                "DELETE /app/installations/{installation_id}",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            deleteToken: ["DELETE /applications/{client_id}/token"],
                            getAuthenticated: ["GET /app", { mediaType: { previews: ["machine-man"] } }],
                            getBySlug: ["GET /apps/{app_slug}", { mediaType: { previews: ["machine-man"] } }],
                            getInstallation: [
                                "GET /app/installations/{installation_id}",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            getOrgInstallation: [
                                "GET /orgs/{org}/installation",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            getRepoInstallation: [
                                "GET /repos/{owner}/{repo}/installation",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
                            getSubscriptionPlanForAccountStubbed: [
                                "GET /marketplace_listing/stubbed/accounts/{account_id}"
                            ],
                            getUserInstallation: [
                                "GET /users/{username}/installation",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
                            listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
                            listInstallationReposForAuthenticatedUser: [
                                "GET /user/installations/{installation_id}/repositories",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            listInstallations: ["GET /app/installations", { mediaType: { previews: ["machine-man"] } }],
                            listInstallationsForAuthenticatedUser: [
                                "GET /user/installations",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            listPlans: ["GET /marketplace_listing/plans"],
                            listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
                            listReposAccessibleToInstallation: [
                                "GET /installation/repositories",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
                            listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
                            removeRepoFromInstallation: [
                                "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            resetToken: ["PATCH /applications/{client_id}/token"],
                            revokeInstallationAccessToken: ["DELETE /installation/token"],
                            suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
                            unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"]
                        },
                        billing: {
                            getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
                            getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"],
                            getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
                            getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"],
                            getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"],
                            getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"]
                        },
                        checks: {
                            create: ["POST /repos/{owner}/{repo}/check-runs", { mediaType: { previews: ["antiope"] } }],
                            createSuite: [
                                "POST /repos/{owner}/{repo}/check-suites",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            get: [
                                "GET /repos/{owner}/{repo}/check-runs/{check_run_id}",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            getSuite: [
                                "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            listAnnotations: [
                                "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            listForRef: [
                                "GET /repos/{owner}/{repo}/commits/{ref}/check-runs",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            listForSuite: [
                                "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            listSuitesForRef: [
                                "GET /repos/{owner}/{repo}/commits/{ref}/check-suites",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            rerequestSuite: [
                                "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            setSuitesPreferences: [
                                "PATCH /repos/{owner}/{repo}/check-suites/preferences",
                                { mediaType: { previews: ["antiope"] } }
                            ],
                            update: [
                                "PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}",
                                { mediaType: { previews: ["antiope"] } }
                            ]
                        },
                        codeScanning: {
                            getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_id}"],
                            listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"]
                        },
                        codesOfConduct: {
                            getAllCodesOfConduct: [
                                "GET /codes_of_conduct",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ],
                            getConductCode: [
                                "GET /codes_of_conduct/{key}",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ],
                            getForRepo: [
                                "GET /repos/{owner}/{repo}/community/code_of_conduct",
                                { mediaType: { previews: ["scarlet-witch"] } }
                            ]
                        },
                        emojis: { get: ["GET /emojis"] },
                        gists: {
                            checkIsStarred: ["GET /gists/{gist_id}/star"],
                            create: ["POST /gists"],
                            createComment: ["POST /gists/{gist_id}/comments"],
                            delete: ["DELETE /gists/{gist_id}"],
                            deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
                            fork: ["POST /gists/{gist_id}/forks"],
                            get: ["GET /gists/{gist_id}"],
                            getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
                            getRevision: ["GET /gists/{gist_id}/{sha}"],
                            list: ["GET /gists"],
                            listComments: ["GET /gists/{gist_id}/comments"],
                            listCommits: ["GET /gists/{gist_id}/commits"],
                            listForUser: ["GET /users/{username}/gists"],
                            listForks: ["GET /gists/{gist_id}/forks"],
                            listPublic: ["GET /gists/public"],
                            listStarred: ["GET /gists/starred"],
                            star: ["PUT /gists/{gist_id}/star"],
                            unstar: ["DELETE /gists/{gist_id}/star"],
                            update: ["PATCH /gists/{gist_id}"],
                            updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
                        },
                        git: {
                            createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
                            createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
                            createRef: ["POST /repos/{owner}/{repo}/git/refs"],
                            createTag: ["POST /repos/{owner}/{repo}/git/tags"],
                            createTree: ["POST /repos/{owner}/{repo}/git/trees"],
                            deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
                            getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
                            getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
                            getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
                            getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
                            getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
                            listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
                            updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
                        },
                        gitignore: {
                            getAllTemplates: ["GET /gitignore/templates"],
                            getTemplate: ["GET /gitignore/templates/{name}"]
                        },
                        interactions: {
                            getRestrictionsForOrg: [
                                "GET /orgs/{org}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ],
                            getRestrictionsForRepo: [
                                "GET /repos/{owner}/{repo}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ],
                            removeRestrictionsForOrg: [
                                "DELETE /orgs/{org}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ],
                            removeRestrictionsForRepo: [
                                "DELETE /repos/{owner}/{repo}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ],
                            setRestrictionsForOrg: [
                                "PUT /orgs/{org}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ],
                            setRestrictionsForRepo: [
                                "PUT /repos/{owner}/{repo}/interaction-limits",
                                { mediaType: { previews: ["sombra"] } }
                            ]
                        },
                        issues: {
                            addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                            addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
                            create: ["POST /repos/{owner}/{repo}/issues"],
                            createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                            createLabel: ["POST /repos/{owner}/{repo}/labels"],
                            createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
                            deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
                            deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
                            get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
                            getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
                            getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
                            getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
                            list: ["GET /issues"],
                            listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
                            listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                            listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
                            listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
                            listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
                            listEventsForTimeline: [
                                "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
                                { mediaType: { previews: ["mockingbird"] } }
                            ],
                            listForAuthenticatedUser: ["GET /user/issues"],
                            listForOrg: ["GET /orgs/{org}/issues"],
                            listForRepo: ["GET /repos/{owner}/{repo}/issues"],
                            listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
                            listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
                            listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
                            lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                            removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                            removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
                            setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                            unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                            update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
                            updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                            updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
                            updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
                        },
                        licenses: {
                            get: ["GET /licenses/{license}"],
                            getAllCommonlyUsed: ["GET /licenses"],
                            getForRepo: ["GET /repos/{owner}/{repo}/license"]
                        },
                        markdown: {
                            render: ["POST /markdown"],
                            renderRaw: [
                                "POST /markdown/raw",
                                { headers: { "content-type": "text/plain; charset=utf-8" } }
                            ]
                        },
                        meta: { get: ["GET /meta"] },
                        migrations: {
                            cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
                            deleteArchiveForAuthenticatedUser: [
                                "DELETE /user/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            deleteArchiveForOrg: [
                                "DELETE /orgs/{org}/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            downloadArchiveForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getArchiveForAuthenticatedUser: [
                                "GET /user/migrations/{migration_id}/archive",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
                            getImportStatus: ["GET /repos/{owner}/{repo}/import"],
                            getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
                            getStatusForAuthenticatedUser: [
                                "GET /user/migrations/{migration_id}",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            getStatusForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listForAuthenticatedUser: [
                                "GET /user/migrations",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listForOrg: ["GET /orgs/{org}/migrations", { mediaType: { previews: ["wyandotte"] } }],
                            listReposForOrg: [
                                "GET /orgs/{org}/migrations/{migration_id}/repositories",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            listReposForUser: [
                                "GET /user/migrations/{migration_id}/repositories",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
                            setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
                            startForAuthenticatedUser: ["POST /user/migrations"],
                            startForOrg: ["POST /orgs/{org}/migrations"],
                            startImport: ["PUT /repos/{owner}/{repo}/import"],
                            unlockRepoForAuthenticatedUser: [
                                "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            unlockRepoForOrg: [
                                "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
                                { mediaType: { previews: ["wyandotte"] } }
                            ],
                            updateImport: ["PATCH /repos/{owner}/{repo}/import"]
                        },
                        orgs: {
                            blockUser: ["PUT /orgs/{org}/blocks/{username}"],
                            checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
                            checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
                            checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
                            convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
                            createInvitation: ["POST /orgs/{org}/invitations"],
                            createWebhook: ["POST /orgs/{org}/hooks"],
                            deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
                            get: ["GET /orgs/{org}"],
                            getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
                            getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
                            getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
                            list: ["GET /organizations"],
                            listAppInstallations: [
                                "GET /orgs/{org}/installations",
                                { mediaType: { previews: ["machine-man"] } }
                            ],
                            listBlockedUsers: ["GET /orgs/{org}/blocks"],
                            listForAuthenticatedUser: ["GET /user/orgs"],
                            listForUser: ["GET /users/{username}/orgs"],
                            listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
                            listMembers: ["GET /orgs/{org}/members"],
                            listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
                            listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
                            listPendingInvitations: ["GET /orgs/{org}/invitations"],
                            listPublicMembers: ["GET /orgs/{org}/public_members"],
                            listWebhooks: ["GET /orgs/{org}/hooks"],
                            pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
                            removeMember: ["DELETE /orgs/{org}/members/{username}"],
                            removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
                            removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
                            removePublicMembershipForAuthenticatedUser: [
                                "DELETE /orgs/{org}/public_members/{username}"
                            ],
                            setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
                            setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"],
                            unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
                            update: ["PATCH /orgs/{org}"],
                            updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"],
                            updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"]
                        },
                        projects: {
                            addCollaborator: [
                                "PUT /projects/{project_id}/collaborators/{username}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createCard: [
                                "POST /projects/columns/{column_id}/cards",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createColumn: [
                                "POST /projects/{project_id}/columns",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createForAuthenticatedUser: [
                                "POST /user/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            createForOrg: ["POST /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }],
                            createForRepo: [
                                "POST /repos/{owner}/{repo}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            delete: ["DELETE /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            deleteCard: [
                                "DELETE /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            deleteColumn: [
                                "DELETE /projects/columns/{column_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            get: ["GET /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            getCard: [
                                "GET /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            getColumn: ["GET /projects/columns/{column_id}", { mediaType: { previews: ["inertia"] } }],
                            getPermissionForUser: [
                                "GET /projects/{project_id}/collaborators/{username}/permission",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listCards: [
                                "GET /projects/columns/{column_id}/cards",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listCollaborators: [
                                "GET /projects/{project_id}/collaborators",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listColumns: [
                                "GET /projects/{project_id}/columns",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listForOrg: ["GET /orgs/{org}/projects", { mediaType: { previews: ["inertia"] } }],
                            listForRepo: [
                                "GET /repos/{owner}/{repo}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listForUser: ["GET /users/{username}/projects", { mediaType: { previews: ["inertia"] } }],
                            moveCard: [
                                "POST /projects/columns/cards/{card_id}/moves",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            moveColumn: [
                                "POST /projects/columns/{column_id}/moves",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            removeCollaborator: [
                                "DELETE /projects/{project_id}/collaborators/{username}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            update: ["PATCH /projects/{project_id}", { mediaType: { previews: ["inertia"] } }],
                            updateCard: [
                                "PATCH /projects/columns/cards/{card_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            updateColumn: [
                                "PATCH /projects/columns/{column_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ]
                        },
                        pulls: {
                            checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                            create: ["POST /repos/{owner}/{repo}/pulls"],
                            createReplyForReviewComment: [
                                "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
                            ],
                            createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                            createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                            deletePendingReview: [
                                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
                            ],
                            deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                            dismissReview: [
                                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
                            ],
                            get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
                            getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                            getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                            list: ["GET /repos/{owner}/{repo}/pulls"],
                            listCommentsForReview: [
                                "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
                            ],
                            listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
                            listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
                            listRequestedReviewers: [
                                "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                            ],
                            listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                            listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
                            listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                            merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                            removeRequestedReviewers: [
                                "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
                            ],
                            requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
                            submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
                            update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
                            updateBranch: [
                                "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
                                { mediaType: { previews: ["lydian"] } }
                            ],
                            updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                            updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]
                        },
                        rateLimit: { get: ["GET /rate_limit"] },
                        reactions: {
                            createForCommitComment: [
                                "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForIssue: [
                                "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForIssueComment: [
                                "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForPullRequestReviewComment: [
                                "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForTeamDiscussionCommentInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            createForTeamDiscussionInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForCommitComment: [
                                "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForIssue: [
                                "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForIssueComment: [
                                "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForPullRequestComment: [
                                "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForTeamDiscussion: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteForTeamDiscussionComment: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            deleteLegacy: [
                                "DELETE /reactions/{reaction_id}",
                                { mediaType: { previews: ["squirrel-girl"] } },
                                {
                                    deprecated:
                                        "octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy"
                                }
                            ],
                            listForCommitComment: [
                                "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForIssue: [
                                "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForIssueComment: [
                                "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForPullRequestReviewComment: [
                                "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForTeamDiscussionCommentInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ],
                            listForTeamDiscussionInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
                                { mediaType: { previews: ["squirrel-girl"] } }
                            ]
                        },
                        repos: {
                            acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
                            addAppAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
                            addStatusCheckContexts: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            addTeamAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            addUserAccessRestrictions: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
                            checkVulnerabilityAlerts: [
                                "GET /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
                            createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                            createCommitSignatureProtection: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
                            createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
                            createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
                            createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                            createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
                            createForAuthenticatedUser: ["POST /user/repos"],
                            createFork: ["POST /repos/{owner}/{repo}/forks"],
                            createInOrg: ["POST /orgs/{org}/repos"],
                            createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
                            createPagesSite: [
                                "POST /repos/{owner}/{repo}/pages",
                                { mediaType: { previews: ["switcheroo"] } }
                            ],
                            createRelease: ["POST /repos/{owner}/{repo}/releases"],
                            createUsingTemplate: [
                                "POST /repos/{template_owner}/{template_repo}/generate",
                                { mediaType: { previews: ["baptiste"] } }
                            ],
                            createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
                            declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
                            delete: ["DELETE /repos/{owner}/{repo}"],
                            deleteAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                            ],
                            deleteAdminBranchProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
                            deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
                            deleteCommitSignatureProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
                            deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
                            deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
                            deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
                            deletePagesSite: [
                                "DELETE /repos/{owner}/{repo}/pages",
                                { mediaType: { previews: ["switcheroo"] } }
                            ],
                            deletePullRequestReviewProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
                            deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
                            disableAutomatedSecurityFixes: [
                                "DELETE /repos/{owner}/{repo}/automated-security-fixes",
                                { mediaType: { previews: ["london"] } }
                            ],
                            disableVulnerabilityAlerts: [
                                "DELETE /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            downloadArchive: ["GET /repos/{owner}/{repo}/{archive_format}/{ref}"],
                            enableAutomatedSecurityFixes: [
                                "PUT /repos/{owner}/{repo}/automated-security-fixes",
                                { mediaType: { previews: ["london"] } }
                            ],
                            enableVulnerabilityAlerts: [
                                "PUT /repos/{owner}/{repo}/vulnerability-alerts",
                                { mediaType: { previews: ["dorian"] } }
                            ],
                            get: ["GET /repos/{owner}/{repo}"],
                            getAccessRestrictions: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
                            ],
                            getAdminBranchProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            getAllStatusCheckContexts: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
                            ],
                            getAllTopics: ["GET /repos/{owner}/{repo}/topics", { mediaType: { previews: ["mercy"] } }],
                            getAppsWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
                            ],
                            getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
                            getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
                            getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
                            getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
                            getCollaboratorPermissionLevel: [
                                "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
                            ],
                            getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
                            getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
                            getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
                            getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
                            getCommitSignatureProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
                                { mediaType: { previews: ["zzzax"] } }
                            ],
                            getCommunityProfileMetrics: [
                                "GET /repos/{owner}/{repo}/community/profile",
                                { mediaType: { previews: ["black-panther"] } }
                            ],
                            getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
                            getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
                            getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
                            getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
                            getDeploymentStatus: [
                                "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
                            ],
                            getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
                            getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
                            getPages: ["GET /repos/{owner}/{repo}/pages"],
                            getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
                            getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
                            getPullRequestReviewProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
                            getReadme: ["GET /repos/{owner}/{repo}/readme"],
                            getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
                            getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
                            getStatusChecksProtection: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            getTeamsWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
                            ],
                            getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
                            getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
                            getUsersWithAccessToProtectedBranch: [
                                "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
                            ],
                            getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
                            getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
                            listBranches: ["GET /repos/{owner}/{repo}/branches"],
                            listBranchesForHeadCommit: [
                                "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
                                { mediaType: { previews: ["groot"] } }
                            ],
                            listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
                            listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                            listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
                            listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
                            listCommits: ["GET /repos/{owner}/{repo}/commits"],
                            listContributors: ["GET /repos/{owner}/{repo}/contributors"],
                            listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
                            listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                            listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
                            listForAuthenticatedUser: ["GET /user/repos"],
                            listForOrg: ["GET /orgs/{org}/repos"],
                            listForUser: ["GET /users/{username}/repos"],
                            listForks: ["GET /repos/{owner}/{repo}/forks"],
                            listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
                            listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
                            listLanguages: ["GET /repos/{owner}/{repo}/languages"],
                            listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
                            listPublic: ["GET /repositories"],
                            listPullRequestsAssociatedWithCommit: [
                                "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls",
                                { mediaType: { previews: ["groot"] } }
                            ],
                            listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
                            listReleases: ["GET /repos/{owner}/{repo}/releases"],
                            listTags: ["GET /repos/{owner}/{repo}/tags"],
                            listTeams: ["GET /repos/{owner}/{repo}/teams"],
                            listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
                            merge: ["POST /repos/{owner}/{repo}/merges"],
                            pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
                            removeAppAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
                            removeStatusCheckContexts: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            removeStatusCheckProtection: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            removeTeamAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            removeUserAccessRestrictions: [
                                "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            replaceAllTopics: [
                                "PUT /repos/{owner}/{repo}/topics",
                                { mediaType: { previews: ["mercy"] } }
                            ],
                            requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
                            setAdminBranchProtection: [
                                "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
                            ],
                            setAppAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
                                {},
                                { mapToData: "apps" }
                            ],
                            setStatusCheckContexts: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
                                {},
                                { mapToData: "contexts" }
                            ],
                            setTeamAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
                                {},
                                { mapToData: "teams" }
                            ],
                            setUserAccessRestrictions: [
                                "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
                                {},
                                { mapToData: "users" }
                            ],
                            testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
                            transfer: ["POST /repos/{owner}/{repo}/transfer"],
                            update: ["PATCH /repos/{owner}/{repo}"],
                            updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
                            updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
                            updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
                            updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
                            updatePullRequestReviewProtection: [
                                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
                            ],
                            updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
                            updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                            updateStatusCheckPotection: [
                                "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
                            ],
                            updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
                            uploadReleaseAsset: [
                                "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
                                { baseUrl: "https://uploads.github.com" }
                            ]
                        },
                        search: {
                            code: ["GET /search/code"],
                            commits: ["GET /search/commits", { mediaType: { previews: ["cloak"] } }],
                            issuesAndPullRequests: ["GET /search/issues"],
                            labels: ["GET /search/labels"],
                            repos: ["GET /search/repositories"],
                            topics: ["GET /search/topics", { mediaType: { previews: ["mercy"] } }],
                            users: ["GET /search/users"]
                        },
                        teams: {
                            addOrUpdateMembershipForUserInOrg: [
                                "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
                            ],
                            addOrUpdateProjectPermissionsInOrg: [
                                "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            checkPermissionsForProjectInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            create: ["POST /orgs/{org}/teams"],
                            createDiscussionCommentInOrg: [
                                "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                            ],
                            createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
                            deleteDiscussionCommentInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            deleteDiscussionInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                            ],
                            deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
                            getByName: ["GET /orgs/{org}/teams/{team_slug}"],
                            getDiscussionCommentInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
                            getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
                            list: ["GET /orgs/{org}/teams"],
                            listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
                            listDiscussionCommentsInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
                            ],
                            listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
                            listForAuthenticatedUser: ["GET /user/teams"],
                            listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
                            listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
                            listProjectsInOrg: [
                                "GET /orgs/{org}/teams/{team_slug}/projects",
                                { mediaType: { previews: ["inertia"] } }
                            ],
                            listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
                            removeMembershipForUserInOrg: [
                                "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
                            ],
                            removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
                            removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                            updateDiscussionCommentInOrg: [
                                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
                            ],
                            updateDiscussionInOrg: [
                                "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
                            ],
                            updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
                        },
                        users: {
                            addEmailForAuthenticated: ["POST /user/emails"],
                            block: ["PUT /user/blocks/{username}"],
                            checkBlocked: ["GET /user/blocks/{username}"],
                            checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
                            checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
                            createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
                            createPublicSshKeyForAuthenticated: ["POST /user/keys"],
                            deleteEmailForAuthenticated: ["DELETE /user/emails"],
                            deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
                            deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
                            follow: ["PUT /user/following/{username}"],
                            getAuthenticated: ["GET /user"],
                            getByUsername: ["GET /users/{username}"],
                            getContextForUser: ["GET /users/{username}/hovercard"],
                            getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
                            getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
                            list: ["GET /users"],
                            listBlockedByAuthenticated: ["GET /user/blocks"],
                            listEmailsForAuthenticated: ["GET /user/emails"],
                            listFollowedByAuthenticated: ["GET /user/following"],
                            listFollowersForAuthenticatedUser: ["GET /user/followers"],
                            listFollowersForUser: ["GET /users/{username}/followers"],
                            listFollowingForUser: ["GET /users/{username}/following"],
                            listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
                            listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
                            listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
                            listPublicKeysForUser: ["GET /users/{username}/keys"],
                            listPublicSshKeysForAuthenticated: ["GET /user/keys"],
                            setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
                            unblock: ["DELETE /user/blocks/{username}"],
                            unfollow: ["DELETE /user/following/{username}"],
                            updateAuthenticated: ["PATCH /user"]
                        }
                    },
                    r = "4.1.2";
                function s(e, r) {
                    const s = {};
                    for (const [t, i] of Object.entries(r))
                        for (const [r, n] of Object.entries(i)) {
                            const [i, a, p] = n,
                                [c, m] = i.split(/ /),
                                l = Object.assign({ method: c, url: m }, a);
                            s[t] || (s[t] = {});
                            const u = s[t];
                            p ? (u[r] = o(e, t, r, l, p)) : (u[r] = e.request.defaults(l));
                        }
                    return s;
                }
                function o(e, r, s, o, t) {
                    const i = e.request.defaults(o);
                    return Object.assign(function (...o) {
                        let n = i.endpoint.merge(...o);
                        if (t.mapToData)
                            return (n = Object.assign({}, n, { data: n[t.mapToData], [t.mapToData]: void 0 })), i(n);
                        if (t.renamed) {
                            const [o, i] = t.renamed;
                            e.log.warn(`octokit.${r}.${s}() has been renamed to octokit.${o}.${i}()`);
                        }
                        if ((t.deprecated && e.log.warn(t.deprecated), t.renamedParameters)) {
                            const n = i.endpoint.merge(...o);
                            for (const [o, i] of Object.entries(t.renamedParameters))
                                o in n &&
                                    (e.log.warn(
                                        `"${o}" parameter is deprecated for "octokit.${r}.${s}()". Use "${i}" instead`
                                    ),
                                    i in n || (n[i] = n[o]),
                                    delete n[o]);
                            return i(n);
                        }
                        return i(...o);
                    }, i);
                }
                function t(r) {
                    return s(r, e);
                }
                t.VERSION = "4.1.2";
            },
            {}
        ],
        OSjg: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.Octokit = void 0);
                var t = require("@octokit/core"),
                    e = require("@octokit/plugin-request-log"),
                    o = require("@octokit/plugin-paginate-rest"),
                    i = require("@octokit/plugin-rest-endpoint-methods");
                const r = "18.0.3",
                    s = t.Octokit.plugin(e.requestLog, i.restEndpointMethods, o.paginateRest).defaults({
                        userAgent: "octokit-rest.js/18.0.3"
                    });
                exports.Octokit = s;
            },
            {
                "@octokit/core": "dJuv",
                "@octokit/plugin-request-log": "tGHQ",
                "@octokit/plugin-paginate-rest": "RsVs",
                "@octokit/plugin-rest-endpoint-methods": "bJjF"
            }
        ],
        tTpz: [
            function (require, module, exports) {
                !(function () {
                    "use strict";
                    for (
                        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            e = new Uint8Array(256),
                            t = 0;
                        t < r.length;
                        t++
                    )
                        e[r.charCodeAt(t)] = t;
                    (exports.encode = function (e) {
                        var t,
                            n = new Uint8Array(e),
                            o = n.length,
                            a = "";
                        for (t = 0; t < o; t += 3)
                            (a += r[n[t] >> 2]),
                                (a += r[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
                                (a += r[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
                                (a += r[63 & n[t + 2]]);
                        return (
                            o % 3 == 2
                                ? (a = a.substring(0, a.length - 1) + "=")
                                : o % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="),
                            a
                        );
                    }),
                        (exports.decode = function (r) {
                            var t,
                                n,
                                o,
                                a,
                                h,
                                c = 0.75 * r.length,
                                g = r.length,
                                i = 0;
                            "=" === r[r.length - 1] && (c--, "=" === r[r.length - 2] && c--);
                            var u = new ArrayBuffer(c),
                                A = new Uint8Array(u);
                            for (t = 0; t < g; t += 4)
                                (n = e[r.charCodeAt(t)]),
                                    (o = e[r.charCodeAt(t + 1)]),
                                    (a = e[r.charCodeAt(t + 2)]),
                                    (h = e[r.charCodeAt(t + 3)]),
                                    (A[i++] = (n << 2) | (o >> 4)),
                                    (A[i++] = ((15 & o) << 4) | (a >> 2)),
                                    (A[i++] = ((3 & a) << 6) | (63 & h));
                            return u;
                        });
                })();
            },
            {}
        ],
        U8JX: [
            function (require, module, exports) {
                var s = 1e3,
                    e = 60 * s,
                    r = 60 * e,
                    a = 24 * r,
                    n = 7 * a,
                    c = 365.25 * a;
                function t(t) {
                    if (!((t = String(t)).length > 100)) {
                        var u = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                            t
                        );
                        if (u) {
                            var i = parseFloat(u[1]);
                            switch ((u[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return i * c;
                                case "weeks":
                                case "week":
                                case "w":
                                    return i * n;
                                case "days":
                                case "day":
                                case "d":
                                    return i * a;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return i * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return i * e;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return i * s;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return i;
                                default:
                                    return;
                            }
                        }
                    }
                }
                function u(n) {
                    var c = Math.abs(n);
                    return c >= a
                        ? Math.round(n / a) + "d"
                        : c >= r
                        ? Math.round(n / r) + "h"
                        : c >= e
                        ? Math.round(n / e) + "m"
                        : c >= s
                        ? Math.round(n / s) + "s"
                        : n + "ms";
                }
                function i(n) {
                    var c = Math.abs(n);
                    return c >= a
                        ? o(n, c, a, "day")
                        : c >= r
                        ? o(n, c, r, "hour")
                        : c >= e
                        ? o(n, c, e, "minute")
                        : c >= s
                        ? o(n, c, s, "second")
                        : n + " ms";
                }
                function o(s, e, r, a) {
                    var n = e >= 1.5 * r;
                    return Math.round(s / r) + " " + a + (n ? "s" : "");
                }
                module.exports = function (s, e) {
                    e = e || {};
                    var r = typeof s;
                    if ("string" === r && s.length > 0) return t(s);
                    if ("number" === r && isFinite(s)) return e.long ? i(s) : u(s);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(s));
                };
            },
            {}
        ],
        SndE: [
            function (require, module, exports) {
                function e(e) {
                    function n(e) {
                        let n = 0;
                        for (let t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
                        return t.colors[Math.abs(n) % t.colors.length];
                    }
                    function t(e) {
                        let o;
                        function i(...e) {
                            if (!i.enabled) return;
                            const n = i,
                                s = Number(new Date()),
                                r = s - (o || s);
                            (n.diff = r),
                                (n.prev = o),
                                (n.curr = s),
                                (o = s),
                                (e[0] = t.coerce(e[0])),
                                "string" != typeof e[0] && e.unshift("%O");
                            let a = 0;
                            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (s, r) => {
                                if ("%%" === s) return s;
                                a++;
                                const o = t.formatters[r];
                                if ("function" == typeof o) {
                                    const t = e[a];
                                    (s = o.call(n, t)), e.splice(a, 1), a--;
                                }
                                return s;
                            })),
                                t.formatArgs.call(n, e),
                                (n.log || t.log).apply(n, e);
                        }
                        return (
                            (i.namespace = e),
                            (i.enabled = t.enabled(e)),
                            (i.useColors = t.useColors()),
                            (i.color = n(e)),
                            (i.destroy = s),
                            (i.extend = r),
                            "function" == typeof t.init && t.init(i),
                            t.instances.push(i),
                            i
                        );
                    }
                    function s() {
                        const e = t.instances.indexOf(this);
                        return -1 !== e && (t.instances.splice(e, 1), !0);
                    }
                    function r(e, n) {
                        const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
                        return (s.log = this.log), s;
                    }
                    function o(e) {
                        return e
                            .toString()
                            .substring(2, e.toString().length - 2)
                            .replace(/\.\*\?$/, "*");
                    }
                    return (
                        (t.debug = t),
                        (t.default = t),
                        (t.coerce = function (e) {
                            if (e instanceof Error) return e.stack || e.message;
                            return e;
                        }),
                        (t.disable = function () {
                            const e = [...t.names.map(o), ...t.skips.map(o).map((e) => "-" + e)].join(",");
                            return t.enable(""), e;
                        }),
                        (t.enable = function (e) {
                            let n;
                            t.save(e), (t.names = []), (t.skips = []);
                            const s = ("string" == typeof e ? e : "").split(/[\s,]+/),
                                r = s.length;
                            for (n = 0; n < r; n++)
                                s[n] &&
                                    ("-" === (e = s[n].replace(/\*/g, ".*?"))[0]
                                        ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                                        : t.names.push(new RegExp("^" + e + "$")));
                            for (n = 0; n < t.instances.length; n++) {
                                const e = t.instances[n];
                                e.enabled = t.enabled(e.namespace);
                            }
                        }),
                        (t.enabled = function (e) {
                            if ("*" === e[e.length - 1]) return !0;
                            let n, s;
                            for (n = 0, s = t.skips.length; n < s; n++) if (t.skips[n].test(e)) return !1;
                            for (n = 0, s = t.names.length; n < s; n++) if (t.names[n].test(e)) return !0;
                            return !1;
                        }),
                        (t.humanize = require("ms")),
                        Object.keys(e).forEach((n) => {
                            t[n] = e[n];
                        }),
                        (t.instances = []),
                        (t.names = []),
                        (t.skips = []),
                        (t.formatters = {}),
                        (t.selectColor = n),
                        t.enable(t.load()),
                        t
                    );
                }
                module.exports = e;
            },
            { ms: "U8JX" }
        ],
        x99Y: [
            function (require, module, exports) {
                var process = require("process");
                var e = require("process");
                function o() {
                    return (
                        !(
                            "undefined" == typeof window ||
                            !window.process ||
                            ("renderer" !== window.process.type && !window.process.__nwjs)
                        ) ||
                        (("undefined" == typeof navigator ||
                            !navigator.userAgent ||
                            !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                            (("undefined" != typeof document &&
                                document.documentElement &&
                                document.documentElement.style &&
                                document.documentElement.style.WebkitAppearance) ||
                                ("undefined" != typeof window &&
                                    window.console &&
                                    (window.console.firebug || (window.console.exception && window.console.table))) ||
                                ("undefined" != typeof navigator &&
                                    navigator.userAgent &&
                                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                                    parseInt(RegExp.$1, 10) >= 31) ||
                                ("undefined" != typeof navigator &&
                                    navigator.userAgent &&
                                    navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
                    );
                }
                function C(e) {
                    if (
                        ((e[0] =
                            (this.useColors ? "%c" : "") +
                            this.namespace +
                            (this.useColors ? " %c" : " ") +
                            e[0] +
                            (this.useColors ? "%c " : " ") +
                            "+" +
                            module.exports.humanize(this.diff)),
                        !this.useColors)
                    )
                        return;
                    const o = "color: " + this.color;
                    e.splice(1, 0, o, "color: inherit");
                    let C = 0,
                        t = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (e) => {
                        "%%" !== e && (C++, "%c" === e && (t = C));
                    }),
                        e.splice(t, 0, o);
                }
                function t(...e) {
                    return "object" == typeof console && console.log && console.log(...e);
                }
                function r(e) {
                    try {
                        e ? exports.storage.setItem("debug", e) : exports.storage.removeItem("debug");
                    } catch (o) {}
                }
                function n() {
                    let o;
                    try {
                        o = exports.storage.getItem("debug");
                    } catch (C) {}
                    return !o && void 0 !== e && "env" in e && (o = void 0), o;
                }
                function s() {
                    try {
                        return localStorage;
                    } catch (e) {}
                }
                (exports.log = t),
                    (exports.formatArgs = C),
                    (exports.save = r),
                    (exports.load = n),
                    (exports.useColors = o),
                    (exports.storage = s()),
                    (exports.colors = [
                        "#0000CC",
                        "#0000FF",
                        "#0033CC",
                        "#0033FF",
                        "#0066CC",
                        "#0066FF",
                        "#0099CC",
                        "#0099FF",
                        "#00CC00",
                        "#00CC33",
                        "#00CC66",
                        "#00CC99",
                        "#00CCCC",
                        "#00CCFF",
                        "#3300CC",
                        "#3300FF",
                        "#3333CC",
                        "#3333FF",
                        "#3366CC",
                        "#3366FF",
                        "#3399CC",
                        "#3399FF",
                        "#33CC00",
                        "#33CC33",
                        "#33CC66",
                        "#33CC99",
                        "#33CCCC",
                        "#33CCFF",
                        "#6600CC",
                        "#6600FF",
                        "#6633CC",
                        "#6633FF",
                        "#66CC00",
                        "#66CC33",
                        "#9900CC",
                        "#9900FF",
                        "#9933CC",
                        "#9933FF",
                        "#99CC00",
                        "#99CC33",
                        "#CC0000",
                        "#CC0033",
                        "#CC0066",
                        "#CC0099",
                        "#CC00CC",
                        "#CC00FF",
                        "#CC3300",
                        "#CC3333",
                        "#CC3366",
                        "#CC3399",
                        "#CC33CC",
                        "#CC33FF",
                        "#CC6600",
                        "#CC6633",
                        "#CC9900",
                        "#CC9933",
                        "#CCCC00",
                        "#CCCC33",
                        "#FF0000",
                        "#FF0033",
                        "#FF0066",
                        "#FF0099",
                        "#FF00CC",
                        "#FF00FF",
                        "#FF3300",
                        "#FF3333",
                        "#FF3366",
                        "#FF3399",
                        "#FF33CC",
                        "#FF33FF",
                        "#FF6600",
                        "#FF6633",
                        "#FF9900",
                        "#FF9933",
                        "#FFCC00",
                        "#FFCC33"
                    ]),
                    (module.exports = require("./common")(exports));
                const { formatters: F } = module.exports;
                F.j = function (e) {
                    try {
                        return JSON.stringify(e);
                    } catch (o) {
                        return "[UnexpectedJSONParseError]: " + o.message;
                    }
                };
            },
            { "./common": "SndE", process: "rH1J" }
        ],
        QAnv: [
            function (require, module, exports) {
                "use strict";
                (exports.byteLength = u), (exports.toByteArray = i), (exports.fromByteArray = d);
                for (
                    var r = [],
                        t = [],
                        e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        o = 0,
                        a = n.length;
                    o < a;
                    ++o
                )
                    (r[o] = n[o]), (t[n.charCodeAt(o)] = o);
                function h(r) {
                    var t = r.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var e = r.indexOf("=");
                    return -1 === e && (e = t), [e, e === t ? 0 : 4 - (e % 4)];
                }
                function u(r) {
                    var t = h(r),
                        e = t[0],
                        n = t[1];
                    return (3 * (e + n)) / 4 - n;
                }
                function c(r, t, e) {
                    return (3 * (t + e)) / 4 - e;
                }
                function i(r) {
                    var n,
                        o,
                        a = h(r),
                        u = a[0],
                        i = a[1],
                        f = new e(c(r, u, i)),
                        A = 0,
                        d = i > 0 ? u - 4 : u;
                    for (o = 0; o < d; o += 4)
                        (n =
                            (t[r.charCodeAt(o)] << 18) |
                            (t[r.charCodeAt(o + 1)] << 12) |
                            (t[r.charCodeAt(o + 2)] << 6) |
                            t[r.charCodeAt(o + 3)]),
                            (f[A++] = (n >> 16) & 255),
                            (f[A++] = (n >> 8) & 255),
                            (f[A++] = 255 & n);
                    return (
                        2 === i &&
                            ((n = (t[r.charCodeAt(o)] << 2) | (t[r.charCodeAt(o + 1)] >> 4)), (f[A++] = 255 & n)),
                        1 === i &&
                            ((n =
                                (t[r.charCodeAt(o)] << 10) |
                                (t[r.charCodeAt(o + 1)] << 4) |
                                (t[r.charCodeAt(o + 2)] >> 2)),
                            (f[A++] = (n >> 8) & 255),
                            (f[A++] = 255 & n)),
                        f
                    );
                }
                function f(t) {
                    return r[(t >> 18) & 63] + r[(t >> 12) & 63] + r[(t >> 6) & 63] + r[63 & t];
                }
                function A(r, t, e) {
                    for (var n, o = [], a = t; a < e; a += 3)
                        (n = ((r[a] << 16) & 16711680) + ((r[a + 1] << 8) & 65280) + (255 & r[a + 2])), o.push(f(n));
                    return o.join("");
                }
                function d(t) {
                    for (var e, n = t.length, o = n % 3, a = [], h = 0, u = n - o; h < u; h += 16383)
                        a.push(A(t, h, h + 16383 > u ? u : h + 16383));
                    return (
                        1 === o
                            ? ((e = t[n - 1]), a.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                            : 2 === o &&
                              ((e = (t[n - 2] << 8) + t[n - 1]),
                              a.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "=")),
                        a.join("")
                    );
                }
                (t["-".charCodeAt(0)] = 62), (t["_".charCodeAt(0)] = 63);
            },
            {}
        ],
        O1Qa: [
            function (require, module, exports) {
                (exports.read = function (a, o, t, r, h) {
                    var M,
                        p,
                        w = 8 * h - r - 1,
                        f = (1 << w) - 1,
                        e = f >> 1,
                        i = -7,
                        N = t ? h - 1 : 0,
                        n = t ? -1 : 1,
                        s = a[o + N];
                    for (
                        N += n, M = s & ((1 << -i) - 1), s >>= -i, i += w;
                        i > 0;
                        M = 256 * M + a[o + N], N += n, i -= 8
                    );
                    for (p = M & ((1 << -i) - 1), M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8);
                    if (0 === M) M = 1 - e;
                    else {
                        if (M === f) return p ? NaN : (1 / 0) * (s ? -1 : 1);
                        (p += Math.pow(2, r)), (M -= e);
                    }
                    return (s ? -1 : 1) * p * Math.pow(2, M - r);
                }),
                    (exports.write = function (a, o, t, r, h, M) {
                        var p,
                            w,
                            f,
                            e = 8 * M - h - 1,
                            i = (1 << e) - 1,
                            N = i >> 1,
                            n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            s = r ? 0 : M - 1,
                            u = r ? 1 : -1,
                            l = o < 0 || (0 === o && 1 / o < 0) ? 1 : 0;
                        for (
                            o = Math.abs(o),
                                isNaN(o) || o === 1 / 0
                                    ? ((w = isNaN(o) ? 1 : 0), (p = i))
                                    : ((p = Math.floor(Math.log(o) / Math.LN2)),
                                      o * (f = Math.pow(2, -p)) < 1 && (p--, (f *= 2)),
                                      (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 && (p++, (f /= 2)),
                                      p + N >= i
                                          ? ((w = 0), (p = i))
                                          : p + N >= 1
                                          ? ((w = (o * f - 1) * Math.pow(2, h)), (p += N))
                                          : ((w = o * Math.pow(2, N - 1) * Math.pow(2, h)), (p = 0)));
                            h >= 8;
                            a[t + s] = 255 & w, s += u, w /= 256, h -= 8
                        );
                        for (p = (p << h) | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8);
                        a[t + s - u] |= 128 * l;
                    });
            },
            {}
        ],
        ZCp3: [
            function (require, module, exports) {
                var r = {}.toString;
                module.exports =
                    Array.isArray ||
                    function (t) {
                        return "[object Array]" == r.call(t);
                    };
            },
            {}
        ],
        fe91: [
            function (require, module, exports) {
                var global = arguments[3];
                var t = arguments[3],
                    r = require("base64-js"),
                    e = require("ieee754"),
                    n = require("isarray");
                function i() {
                    try {
                        var t = new Uint8Array(1);
                        return (
                            (t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function () {
                                    return 42;
                                }
                            }),
                            42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                        );
                    } catch (r) {
                        return !1;
                    }
                }
                function o() {
                    return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function u(t, r) {
                    if (o() < r) throw new RangeError("Invalid typed array length");
                    return (
                        f.TYPED_ARRAY_SUPPORT
                            ? ((t = new Uint8Array(r)).__proto__ = f.prototype)
                            : (null === t && (t = new f(r)), (t.length = r)),
                        t
                    );
                }
                function f(t, r, e) {
                    if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, r, e);
                    if ("number" == typeof t) {
                        if ("string" == typeof r)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return c(this, t);
                    }
                    return s(this, t, r, e);
                }
                function s(t, r, e, n) {
                    if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer
                        ? g(t, r, e, n)
                        : "string" == typeof r
                        ? l(t, r, e)
                        : y(t, r);
                }
                function h(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative');
                }
                function a(t, r, e, n) {
                    return (
                        h(r),
                        r <= 0
                            ? u(t, r)
                            : void 0 !== e
                            ? "string" == typeof n
                                ? u(t, r).fill(e, n)
                                : u(t, r).fill(e)
                            : u(t, r)
                    );
                }
                function c(t, r) {
                    if ((h(r), (t = u(t, r < 0 ? 0 : 0 | w(r))), !f.TYPED_ARRAY_SUPPORT))
                        for (var e = 0; e < r; ++e) t[e] = 0;
                    return t;
                }
                function l(t, r, e) {
                    if ((("string" == typeof e && "" !== e) || (e = "utf8"), !f.isEncoding(e)))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | v(r, e),
                        i = (t = u(t, n)).write(r, e);
                    return i !== n && (t = t.slice(0, i)), t;
                }
                function p(t, r) {
                    var e = r.length < 0 ? 0 : 0 | w(r.length);
                    t = u(t, e);
                    for (var n = 0; n < e; n += 1) t[n] = 255 & r[n];
                    return t;
                }
                function g(t, r, e, n) {
                    if ((r.byteLength, e < 0 || r.byteLength < e)) throw new RangeError("'offset' is out of bounds");
                    if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
                    return (
                        (r =
                            void 0 === e && void 0 === n
                                ? new Uint8Array(r)
                                : void 0 === n
                                ? new Uint8Array(r, e)
                                : new Uint8Array(r, e, n)),
                        f.TYPED_ARRAY_SUPPORT ? ((t = r).__proto__ = f.prototype) : (t = p(t, r)),
                        t
                    );
                }
                function y(t, r) {
                    if (f.isBuffer(r)) {
                        var e = 0 | w(r.length);
                        return 0 === (t = u(t, e)).length ? t : (r.copy(t, 0, 0, e), t);
                    }
                    if (r) {
                        if (("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer) || "length" in r)
                            return "number" != typeof r.length || W(r.length) ? u(t, 0) : p(t, r);
                        if ("Buffer" === r.type && n(r.data)) return p(t, r.data);
                    }
                    throw new TypeError(
                        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                    );
                }
                function w(t) {
                    if (t >= o())
                        throw new RangeError(
                            "Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes"
                        );
                    return 0 | t;
                }
                function d(t) {
                    return +t != t && (t = 0), f.alloc(+t);
                }
                function v(t, r) {
                    if (f.isBuffer(t)) return t.length;
                    if (
                        "undefined" != typeof ArrayBuffer &&
                        "function" == typeof ArrayBuffer.isView &&
                        (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
                    )
                        return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var e = t.length;
                    if (0 === e) return 0;
                    for (var n = !1; ; )
                        switch (r) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return e;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return $(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * e;
                            case "hex":
                                return e >>> 1;
                            case "base64":
                                return K(t).length;
                            default:
                                if (n) return $(t).length;
                                (r = ("" + r).toLowerCase()), (n = !0);
                        }
                }
                function E(t, r, e) {
                    var n = !1;
                    if (((void 0 === r || r < 0) && (r = 0), r > this.length)) return "";
                    if (((void 0 === e || e > this.length) && (e = this.length), e <= 0)) return "";
                    if ((e >>>= 0) <= (r >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return x(this, r, e);
                            case "utf8":
                            case "utf-8":
                                return Y(this, r, e);
                            case "ascii":
                                return L(this, r, e);
                            case "latin1":
                            case "binary":
                                return D(this, r, e);
                            case "base64":
                                return S(this, r, e);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return C(this, r, e);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function b(t, r, e) {
                    var n = t[r];
                    (t[r] = t[e]), (t[e] = n);
                }
                function R(t, r, e, n, i) {
                    if (0 === t.length) return -1;
                    if (
                        ("string" == typeof e
                            ? ((n = e), (e = 0))
                            : e > 2147483647
                            ? (e = 2147483647)
                            : e < -2147483648 && (e = -2147483648),
                        (e = +e),
                        isNaN(e) && (e = i ? 0 : t.length - 1),
                        e < 0 && (e = t.length + e),
                        e >= t.length)
                    ) {
                        if (i) return -1;
                        e = t.length - 1;
                    } else if (e < 0) {
                        if (!i) return -1;
                        e = 0;
                    }
                    if (("string" == typeof r && (r = f.from(r, n)), f.isBuffer(r)))
                        return 0 === r.length ? -1 : _(t, r, e, n, i);
                    if ("number" == typeof r)
                        return (
                            (r &= 255),
                            f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
                                ? i
                                    ? Uint8Array.prototype.indexOf.call(t, r, e)
                                    : Uint8Array.prototype.lastIndexOf.call(t, r, e)
                                : _(t, [r], e, n, i)
                        );
                    throw new TypeError("val must be string, number or Buffer");
                }
                function _(t, r, e, n, i) {
                    var o,
                        u = 1,
                        f = t.length,
                        s = r.length;
                    if (
                        void 0 !== n &&
                        ("ucs2" === (n = String(n).toLowerCase()) ||
                            "ucs-2" === n ||
                            "utf16le" === n ||
                            "utf-16le" === n)
                    ) {
                        if (t.length < 2 || r.length < 2) return -1;
                        (u = 2), (f /= 2), (s /= 2), (e /= 2);
                    }
                    function h(t, r) {
                        return 1 === u ? t[r] : t.readUInt16BE(r * u);
                    }
                    if (i) {
                        var a = -1;
                        for (o = e; o < f; o++)
                            if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
                                if ((-1 === a && (a = o), o - a + 1 === s)) return a * u;
                            } else -1 !== a && (o -= o - a), (a = -1);
                    } else
                        for (e + s > f && (e = f - s), o = e; o >= 0; o--) {
                            for (var c = !0, l = 0; l < s; l++)
                                if (h(t, o + l) !== h(r, l)) {
                                    c = !1;
                                    break;
                                }
                            if (c) return o;
                        }
                    return -1;
                }
                function A(t, r, e, n) {
                    e = Number(e) || 0;
                    var i = t.length - e;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    var o = r.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    n > o / 2 && (n = o / 2);
                    for (var u = 0; u < n; ++u) {
                        var f = parseInt(r.substr(2 * u, 2), 16);
                        if (isNaN(f)) return u;
                        t[e + u] = f;
                    }
                    return u;
                }
                function m(t, r, e, n) {
                    return Q($(r, t.length - e), t, e, n);
                }
                function P(t, r, e, n) {
                    return Q(G(r), t, e, n);
                }
                function T(t, r, e, n) {
                    return P(t, r, e, n);
                }
                function B(t, r, e, n) {
                    return Q(K(r), t, e, n);
                }
                function U(t, r, e, n) {
                    return Q(H(r, t.length - e), t, e, n);
                }
                function S(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
                }
                function Y(t, r, e) {
                    e = Math.min(t.length, e);
                    for (var n = [], i = r; i < e; ) {
                        var o,
                            u,
                            f,
                            s,
                            h = t[i],
                            a = null,
                            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                        if (i + c <= e)
                            switch (c) {
                                case 1:
                                    h < 128 && (a = h);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && (s = ((31 & h) << 6) | (63 & o)) > 127 && (a = s);
                                    break;
                                case 3:
                                    (o = t[i + 1]),
                                        (u = t[i + 2]),
                                        128 == (192 & o) &&
                                            128 == (192 & u) &&
                                            (s = ((15 & h) << 12) | ((63 & o) << 6) | (63 & u)) > 2047 &&
                                            (s < 55296 || s > 57343) &&
                                            (a = s);
                                    break;
                                case 4:
                                    (o = t[i + 1]),
                                        (u = t[i + 2]),
                                        (f = t[i + 3]),
                                        128 == (192 & o) &&
                                            128 == (192 & u) &&
                                            128 == (192 & f) &&
                                            (s = ((15 & h) << 18) | ((63 & o) << 12) | ((63 & u) << 6) | (63 & f)) >
                                                65535 &&
                                            s < 1114112 &&
                                            (a = s);
                            }
                        null === a
                            ? ((a = 65533), (c = 1))
                            : a > 65535 &&
                              ((a -= 65536), n.push(((a >>> 10) & 1023) | 55296), (a = 56320 | (1023 & a))),
                            n.push(a),
                            (i += c);
                    }
                    return O(n);
                }
                (exports.Buffer = f),
                    (exports.SlowBuffer = d),
                    (exports.INSPECT_MAX_BYTES = 50),
                    (f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : i()),
                    (exports.kMaxLength = o()),
                    (f.poolSize = 8192),
                    (f._augment = function (t) {
                        return (t.__proto__ = f.prototype), t;
                    }),
                    (f.from = function (t, r, e) {
                        return s(null, t, r, e);
                    }),
                    f.TYPED_ARRAY_SUPPORT &&
                        ((f.prototype.__proto__ = Uint8Array.prototype),
                        (f.__proto__ = Uint8Array),
                        "undefined" != typeof Symbol &&
                            Symbol.species &&
                            f[Symbol.species] === f &&
                            Object.defineProperty(f, Symbol.species, { value: null, configurable: !0 })),
                    (f.alloc = function (t, r, e) {
                        return a(null, t, r, e);
                    }),
                    (f.allocUnsafe = function (t) {
                        return c(null, t);
                    }),
                    (f.allocUnsafeSlow = function (t) {
                        return c(null, t);
                    }),
                    (f.isBuffer = function (t) {
                        return !(null == t || !t._isBuffer);
                    }),
                    (f.compare = function (t, r) {
                        if (!f.isBuffer(t) || !f.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
                        if (t === r) return 0;
                        for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
                            if (t[i] !== r[i]) {
                                (e = t[i]), (n = r[i]);
                                break;
                            }
                        return e < n ? -1 : n < e ? 1 : 0;
                    }),
                    (f.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (f.concat = function (t, r) {
                        if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return f.alloc(0);
                        var e;
                        if (void 0 === r) for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
                        var i = f.allocUnsafe(r),
                            o = 0;
                        for (e = 0; e < t.length; ++e) {
                            var u = t[e];
                            if (!f.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                            u.copy(i, o), (o += u.length);
                        }
                        return i;
                    }),
                    (f.byteLength = v),
                    (f.prototype._isBuffer = !0),
                    (f.prototype.swap16 = function () {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var r = 0; r < t; r += 2) b(this, r, r + 1);
                        return this;
                    }),
                    (f.prototype.swap32 = function () {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var r = 0; r < t; r += 4) b(this, r, r + 3), b(this, r + 1, r + 2);
                        return this;
                    }),
                    (f.prototype.swap64 = function () {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var r = 0; r < t; r += 8)
                            b(this, r, r + 7), b(this, r + 1, r + 6), b(this, r + 2, r + 5), b(this, r + 3, r + 4);
                        return this;
                    }),
                    (f.prototype.toString = function () {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? Y(this, 0, t) : E.apply(this, arguments);
                    }),
                    (f.prototype.equals = function (t) {
                        if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === f.compare(this, t);
                    }),
                    (f.prototype.inspect = function () {
                        var t = "",
                            r = exports.INSPECT_MAX_BYTES;
                        return (
                            this.length > 0 &&
                                ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
                                this.length > r && (t += " ... ")),
                            "<Buffer " + t + ">"
                        );
                    }),
                    (f.prototype.compare = function (t, r, e, n, i) {
                        if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if (
                            (void 0 === r && (r = 0),
                            void 0 === e && (e = t ? t.length : 0),
                            void 0 === n && (n = 0),
                            void 0 === i && (i = this.length),
                            r < 0 || e > t.length || n < 0 || i > this.length)
                        )
                            throw new RangeError("out of range index");
                        if (n >= i && r >= e) return 0;
                        if (n >= i) return -1;
                        if (r >= e) return 1;
                        if (this === t) return 0;
                        for (
                            var o = (i >>>= 0) - (n >>>= 0),
                                u = (e >>>= 0) - (r >>>= 0),
                                s = Math.min(o, u),
                                h = this.slice(n, i),
                                a = t.slice(r, e),
                                c = 0;
                            c < s;
                            ++c
                        )
                            if (h[c] !== a[c]) {
                                (o = h[c]), (u = a[c]);
                                break;
                            }
                        return o < u ? -1 : u < o ? 1 : 0;
                    }),
                    (f.prototype.includes = function (t, r, e) {
                        return -1 !== this.indexOf(t, r, e);
                    }),
                    (f.prototype.indexOf = function (t, r, e) {
                        return R(this, t, r, e, !0);
                    }),
                    (f.prototype.lastIndexOf = function (t, r, e) {
                        return R(this, t, r, e, !1);
                    }),
                    (f.prototype.write = function (t, r, e, n) {
                        if (void 0 === r) (n = "utf8"), (e = this.length), (r = 0);
                        else if (void 0 === e && "string" == typeof r) (n = r), (e = this.length), (r = 0);
                        else {
                            if (!isFinite(r))
                                throw new Error(
                                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                                );
                            (r |= 0), isFinite(e) ? ((e |= 0), void 0 === n && (n = "utf8")) : ((n = e), (e = void 0));
                        }
                        var i = this.length - r;
                        if (((void 0 === e || e > i) && (e = i), (t.length > 0 && (e < 0 || r < 0)) || r > this.length))
                            throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1; ; )
                            switch (n) {
                                case "hex":
                                    return A(this, t, r, e);
                                case "utf8":
                                case "utf-8":
                                    return m(this, t, r, e);
                                case "ascii":
                                    return P(this, t, r, e);
                                case "latin1":
                                case "binary":
                                    return T(this, t, r, e);
                                case "base64":
                                    return B(this, t, r, e);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return U(this, t, r, e);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    (n = ("" + n).toLowerCase()), (o = !0);
                            }
                    }),
                    (f.prototype.toJSON = function () {
                        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                    });
                var I = 4096;
                function O(t) {
                    var r = t.length;
                    if (r <= I) return String.fromCharCode.apply(String, t);
                    for (var e = "", n = 0; n < r; ) e += String.fromCharCode.apply(String, t.slice(n, (n += I)));
                    return e;
                }
                function L(t, r, e) {
                    var n = "";
                    e = Math.min(t.length, e);
                    for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
                    return n;
                }
                function D(t, r, e) {
                    var n = "";
                    e = Math.min(t.length, e);
                    for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                    return n;
                }
                function x(t, r, e) {
                    var n = t.length;
                    (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                    for (var i = "", o = r; o < e; ++o) i += Z(t[o]);
                    return i;
                }
                function C(t, r, e) {
                    for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
                        i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                    return i;
                }
                function M(t, r, e) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
                }
                function k(t, r, e, n, i, o) {
                    if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
                    if (e + n > t.length) throw new RangeError("Index out of range");
                }
                function N(t, r, e, n) {
                    r < 0 && (r = 65535 + r + 1);
                    for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i)
                        t[e + i] = (r & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
                }
                function z(t, r, e, n) {
                    r < 0 && (r = 4294967295 + r + 1);
                    for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i)
                        t[e + i] = (r >>> (8 * (n ? i : 3 - i))) & 255;
                }
                function F(t, r, e, n, i, o) {
                    if (e + n > t.length) throw new RangeError("Index out of range");
                    if (e < 0) throw new RangeError("Index out of range");
                }
                function j(t, r, n, i, o) {
                    return (
                        o || F(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                        e.write(t, r, n, i, 23, 4),
                        n + 4
                    );
                }
                function q(t, r, n, i, o) {
                    return (
                        o || F(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                        e.write(t, r, n, i, 52, 8),
                        n + 8
                    );
                }
                (f.prototype.slice = function (t, r) {
                    var e,
                        n = this.length;
                    if (
                        ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                        (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n),
                        r < t && (r = t),
                        f.TYPED_ARRAY_SUPPORT)
                    )
                        (e = this.subarray(t, r)).__proto__ = f.prototype;
                    else {
                        var i = r - t;
                        e = new f(i, void 0);
                        for (var o = 0; o < i; ++o) e[o] = this[o + t];
                    }
                    return e;
                }),
                    (f.prototype.readUIntLE = function (t, r, e) {
                        (t |= 0), (r |= 0), e || M(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
                        return n;
                    }),
                    (f.prototype.readUIntBE = function (t, r, e) {
                        (t |= 0), (r |= 0), e || M(t, r, this.length);
                        for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); ) n += this[t + --r] * i;
                        return n;
                    }),
                    (f.prototype.readUInt8 = function (t, r) {
                        return r || M(t, 1, this.length), this[t];
                    }),
                    (f.prototype.readUInt16LE = function (t, r) {
                        return r || M(t, 2, this.length), this[t] | (this[t + 1] << 8);
                    }),
                    (f.prototype.readUInt16BE = function (t, r) {
                        return r || M(t, 2, this.length), (this[t] << 8) | this[t + 1];
                    }),
                    (f.prototype.readUInt32LE = function (t, r) {
                        return (
                            r || M(t, 4, this.length),
                            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
                        );
                    }),
                    (f.prototype.readUInt32BE = function (t, r) {
                        return (
                            r || M(t, 4, this.length),
                            16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                        );
                    }),
                    (f.prototype.readIntLE = function (t, r, e) {
                        (t |= 0), (r |= 0), e || M(t, r, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
                    }),
                    (f.prototype.readIntBE = function (t, r, e) {
                        (t |= 0), (r |= 0), e || M(t, r, this.length);
                        for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
                    }),
                    (f.prototype.readInt8 = function (t, r) {
                        return r || M(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }),
                    (f.prototype.readInt16LE = function (t, r) {
                        r || M(t, 2, this.length);
                        var e = this[t] | (this[t + 1] << 8);
                        return 32768 & e ? 4294901760 | e : e;
                    }),
                    (f.prototype.readInt16BE = function (t, r) {
                        r || M(t, 2, this.length);
                        var e = this[t + 1] | (this[t] << 8);
                        return 32768 & e ? 4294901760 | e : e;
                    }),
                    (f.prototype.readInt32LE = function (t, r) {
                        return (
                            r || M(t, 4, this.length),
                            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
                        );
                    }),
                    (f.prototype.readInt32BE = function (t, r) {
                        return (
                            r || M(t, 4, this.length),
                            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
                        );
                    }),
                    (f.prototype.readFloatLE = function (t, r) {
                        return r || M(t, 4, this.length), e.read(this, t, !0, 23, 4);
                    }),
                    (f.prototype.readFloatBE = function (t, r) {
                        return r || M(t, 4, this.length), e.read(this, t, !1, 23, 4);
                    }),
                    (f.prototype.readDoubleLE = function (t, r) {
                        return r || M(t, 8, this.length), e.read(this, t, !0, 52, 8);
                    }),
                    (f.prototype.readDoubleBE = function (t, r) {
                        return r || M(t, 8, this.length), e.read(this, t, !1, 52, 8);
                    }),
                    (f.prototype.writeUIntLE = function (t, r, e, n) {
                        ((t = +t), (r |= 0), (e |= 0), n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[r] = 255 & t; ++o < e && (i *= 256); ) this[r + o] = (t / i) & 255;
                        return r + e;
                    }),
                    (f.prototype.writeUIntBE = function (t, r, e, n) {
                        ((t = +t), (r |= 0), (e |= 0), n) || k(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
                        var i = e - 1,
                            o = 1;
                        for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); ) this[r + i] = (t / o) & 255;
                        return r + e;
                    }),
                    (f.prototype.writeUInt8 = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 1, 255, 0),
                            f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                            (this[r] = 255 & t),
                            r + 1
                        );
                    }),
                    (f.prototype.writeUInt16LE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 2, 65535, 0),
                            f.TYPED_ARRAY_SUPPORT ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8)) : N(this, t, r, !0),
                            r + 2
                        );
                    }),
                    (f.prototype.writeUInt16BE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 2, 65535, 0),
                            f.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t)) : N(this, t, r, !1),
                            r + 2
                        );
                    }),
                    (f.prototype.writeUInt32LE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 4, 4294967295, 0),
                            f.TYPED_ARRAY_SUPPORT
                                ? ((this[r + 3] = t >>> 24),
                                  (this[r + 2] = t >>> 16),
                                  (this[r + 1] = t >>> 8),
                                  (this[r] = 255 & t))
                                : z(this, t, r, !0),
                            r + 4
                        );
                    }),
                    (f.prototype.writeUInt32BE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 4, 4294967295, 0),
                            f.TYPED_ARRAY_SUPPORT
                                ? ((this[r] = t >>> 24),
                                  (this[r + 1] = t >>> 16),
                                  (this[r + 2] = t >>> 8),
                                  (this[r + 3] = 255 & t))
                                : z(this, t, r, !1),
                            r + 4
                        );
                    }),
                    (f.prototype.writeIntLE = function (t, r, e, n) {
                        if (((t = +t), (r |= 0), !n)) {
                            var i = Math.pow(2, 8 * e - 1);
                            k(this, t, r, e, i - 1, -i);
                        }
                        var o = 0,
                            u = 1,
                            f = 0;
                        for (this[r] = 255 & t; ++o < e && (u *= 256); )
                            t < 0 && 0 === f && 0 !== this[r + o - 1] && (f = 1),
                                (this[r + o] = (((t / u) >> 0) - f) & 255);
                        return r + e;
                    }),
                    (f.prototype.writeIntBE = function (t, r, e, n) {
                        if (((t = +t), (r |= 0), !n)) {
                            var i = Math.pow(2, 8 * e - 1);
                            k(this, t, r, e, i - 1, -i);
                        }
                        var o = e - 1,
                            u = 1,
                            f = 0;
                        for (this[r + o] = 255 & t; --o >= 0 && (u *= 256); )
                            t < 0 && 0 === f && 0 !== this[r + o + 1] && (f = 1),
                                (this[r + o] = (((t / u) >> 0) - f) & 255);
                        return r + e;
                    }),
                    (f.prototype.writeInt8 = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 1, 127, -128),
                            f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                            t < 0 && (t = 255 + t + 1),
                            (this[r] = 255 & t),
                            r + 1
                        );
                    }),
                    (f.prototype.writeInt16LE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 2, 32767, -32768),
                            f.TYPED_ARRAY_SUPPORT ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8)) : N(this, t, r, !0),
                            r + 2
                        );
                    }),
                    (f.prototype.writeInt16BE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 2, 32767, -32768),
                            f.TYPED_ARRAY_SUPPORT ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t)) : N(this, t, r, !1),
                            r + 2
                        );
                    }),
                    (f.prototype.writeInt32LE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 4, 2147483647, -2147483648),
                            f.TYPED_ARRAY_SUPPORT
                                ? ((this[r] = 255 & t),
                                  (this[r + 1] = t >>> 8),
                                  (this[r + 2] = t >>> 16),
                                  (this[r + 3] = t >>> 24))
                                : z(this, t, r, !0),
                            r + 4
                        );
                    }),
                    (f.prototype.writeInt32BE = function (t, r, e) {
                        return (
                            (t = +t),
                            (r |= 0),
                            e || k(this, t, r, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            f.TYPED_ARRAY_SUPPORT
                                ? ((this[r] = t >>> 24),
                                  (this[r + 1] = t >>> 16),
                                  (this[r + 2] = t >>> 8),
                                  (this[r + 3] = 255 & t))
                                : z(this, t, r, !1),
                            r + 4
                        );
                    }),
                    (f.prototype.writeFloatLE = function (t, r, e) {
                        return j(this, t, r, !0, e);
                    }),
                    (f.prototype.writeFloatBE = function (t, r, e) {
                        return j(this, t, r, !1, e);
                    }),
                    (f.prototype.writeDoubleLE = function (t, r, e) {
                        return q(this, t, r, !0, e);
                    }),
                    (f.prototype.writeDoubleBE = function (t, r, e) {
                        return q(this, t, r, !1, e);
                    }),
                    (f.prototype.copy = function (t, r, e, n) {
                        if (
                            (e || (e = 0),
                            n || 0 === n || (n = this.length),
                            r >= t.length && (r = t.length),
                            r || (r = 0),
                            n > 0 && n < e && (n = e),
                            n === e)
                        )
                            return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (r < 0) throw new RangeError("targetStart out of bounds");
                        if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
                        var i,
                            o = n - e;
                        if (this === t && e < r && r < n) for (i = o - 1; i >= 0; --i) t[i + r] = this[i + e];
                        else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + r] = this[i + e];
                        else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
                        return o;
                    }),
                    (f.prototype.fill = function (t, r, e, n) {
                        if ("string" == typeof t) {
                            if (
                                ("string" == typeof r
                                    ? ((n = r), (r = 0), (e = this.length))
                                    : "string" == typeof e && ((n = e), (e = this.length)),
                                1 === t.length)
                            ) {
                                var i = t.charCodeAt(0);
                                i < 256 && (t = i);
                            }
                            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        } else "number" == typeof t && (t &= 255);
                        if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
                        if (e <= r) return this;
                        var o;
                        if (
                            ((r >>>= 0), (e = void 0 === e ? this.length : e >>> 0), t || (t = 0), "number" == typeof t)
                        )
                            for (o = r; o < e; ++o) this[o] = t;
                        else {
                            var u = f.isBuffer(t) ? t : $(new f(t, n).toString()),
                                s = u.length;
                            for (o = 0; o < e - r; ++o) this[o + r] = u[o % s];
                        }
                        return this;
                    });
                var V = /[^+\/0-9A-Za-z-_]/g;
                function X(t) {
                    if ((t = J(t).replace(V, "")).length < 2) return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                }
                function J(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                }
                function Z(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16);
                }
                function $(t, r) {
                    var e;
                    r = r || 1 / 0;
                    for (var n = t.length, i = null, o = [], u = 0; u < n; ++u) {
                        if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
                            if (!i) {
                                if (e > 56319) {
                                    (r -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                if (u + 1 === n) {
                                    (r -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                i = e;
                                continue;
                            }
                            if (e < 56320) {
                                (r -= 3) > -1 && o.push(239, 191, 189), (i = e);
                                continue;
                            }
                            e = 65536 + (((i - 55296) << 10) | (e - 56320));
                        } else i && (r -= 3) > -1 && o.push(239, 191, 189);
                        if (((i = null), e < 128)) {
                            if ((r -= 1) < 0) break;
                            o.push(e);
                        } else if (e < 2048) {
                            if ((r -= 2) < 0) break;
                            o.push((e >> 6) | 192, (63 & e) | 128);
                        } else if (e < 65536) {
                            if ((r -= 3) < 0) break;
                            o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
                        } else {
                            if (!(e < 1114112)) throw new Error("Invalid code point");
                            if ((r -= 4) < 0) break;
                            o.push((e >> 18) | 240, ((e >> 12) & 63) | 128, ((e >> 6) & 63) | 128, (63 & e) | 128);
                        }
                    }
                    return o;
                }
                function G(t) {
                    for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
                    return r;
                }
                function H(t, r) {
                    for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u)
                        (n = (e = t.charCodeAt(u)) >> 8), (i = e % 256), o.push(i), o.push(n);
                    return o;
                }
                function K(t) {
                    return r.toByteArray(X(t));
                }
                function Q(t, r, e, n) {
                    for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
                    return i;
                }
                function W(t) {
                    return t != t;
                }
            },
            { "base64-js": "QAnv", ieee754: "O1Qa", isarray: "ZCp3", buffer: "fe91" }
        ],
        UTui: [
            function (require, module, exports) {
                var Buffer = require("buffer").Buffer;
                var e = require("buffer").Buffer,
                    t =
                        (this && this.__assign) ||
                        function () {
                            return (t =
                                Object.assign ||
                                function (e) {
                                    for (var t, r = 1, n = arguments.length; r < n; r++)
                                        for (var o in (t = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                    return e;
                                }).apply(this, arguments);
                        },
                    r =
                        (this && this.__awaiter) ||
                        function (e, t, r, n) {
                            return new (r || (r = Promise))(function (o, a) {
                                function i(e) {
                                    try {
                                        s(n.next(e));
                                    } catch (t) {
                                        a(t);
                                    }
                                }
                                function c(e) {
                                    try {
                                        s(n.throw(e));
                                    } catch (t) {
                                        a(t);
                                    }
                                }
                                function s(e) {
                                    e.done
                                        ? o(e.value)
                                        : new r(function (t) {
                                              t(e.value);
                                          }).then(i, c);
                                }
                                s((n = n.apply(e, t || [])).next());
                            });
                        },
                    n =
                        (this && this.__generator) ||
                        function (e, t) {
                            var r,
                                n,
                                o,
                                a,
                                i = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1];
                                        return o[1];
                                    },
                                    trys: [],
                                    ops: []
                                };
                            return (
                                (a = { next: c(0), throw: c(1), return: c(2) }),
                                "function" == typeof Symbol &&
                                    (a[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                a
                            );
                            function c(a) {
                                return function (c) {
                                    return (function (a) {
                                        if (r) throw new TypeError("Generator is already executing.");
                                        for (; i; )
                                            try {
                                                if (
                                                    ((r = 1),
                                                    n &&
                                                        (o =
                                                            2 & a[0]
                                                                ? n.return
                                                                : a[0]
                                                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                                                : n.next) &&
                                                        !(o = o.call(n, a[1])).done)
                                                )
                                                    return o;
                                                switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = a;
                                                        break;
                                                    case 4:
                                                        return i.label++, { value: a[1], done: !1 };
                                                    case 5:
                                                        i.label++, (n = a[1]), (a = [0]);
                                                        continue;
                                                    case 7:
                                                        (a = i.ops.pop()), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (
                                                            !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                                                            (6 === a[0] || 2 === a[0])
                                                        ) {
                                                            i = 0;
                                                            continue;
                                                        }
                                                        if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                                                            i.label = a[1];
                                                            break;
                                                        }
                                                        if (6 === a[0] && i.label < o[1]) {
                                                            (i.label = o[1]), (o = a);
                                                            break;
                                                        }
                                                        if (o && i.label < o[2]) {
                                                            (i.label = o[2]), i.ops.push(a);
                                                            break;
                                                        }
                                                        o[2] && i.ops.pop(), i.trys.pop();
                                                        continue;
                                                }
                                                a = t.call(e, i);
                                            } catch (c) {
                                                (a = [6, c]), (n = 0);
                                            } finally {
                                                r = o = 0;
                                            }
                                        if (5 & a[0]) throw a[1];
                                        return { value: a[0] ? a[1] : void 0, done: !0 };
                                    })([a, c]);
                                };
                            }
                        },
                    o = this;
                Object.defineProperty(exports, "__esModule", { value: !0 });
                var a = require("@octokit/rest"),
                    i = require("base64-arraybuffer"),
                    c = require("debug")("korefile"),
                    s = void 0,
                    u = function (e, t) {
                        return e.git.getRef({ owner: t.owner, repo: t.repo, ref: t.ref }).then(function (e) {
                            return c("getReferenceCommit Response: %O", e), { referenceCommitSha: e.data.object.sha };
                        });
                    },
                    f = function (e, r, n) {
                        var o = r.files.map(function (t) {
                            if ("string" == typeof t.content)
                                return e.git
                                    .createBlob({ owner: r.owner, repo: r.repo, content: t.content, encoding: "utf-8" })
                                    .then(function (e) {
                                        return (
                                            c("createBlob:text"),
                                            { sha: e.data.sha, path: t.path, mode: "100644", type: "blob" }
                                        );
                                    });
                            if (ArrayBuffer.isView(t.content))
                                return e.git
                                    .createBlob({
                                        owner: r.owner,
                                        repo: r.repo,
                                        content: i.encode(t.content),
                                        encoding: "base64"
                                    })
                                    .then(function (e) {
                                        return (
                                            c("createBlob:buffer"),
                                            { sha: e.data.sha, path: t.path, mode: "100644", type: "blob" }
                                        );
                                    });
                            throw new Error("This file can not handled: " + t);
                        });
                        return Promise.all(o).then(function (o) {
                            return (
                                c("files: %O", o),
                                e.git
                                    .createTree({
                                        owner: r.owner,
                                        repo: r.repo,
                                        tree: o,
                                        base_tree: n.referenceCommitSha
                                    })
                                    .then(function (e) {
                                        return c("createCommit Response: %O", e), t({}, n, { newTreeSha: e.data.sha });
                                    })
                            );
                        });
                    },
                    p = function (e, r, n) {
                        return e.git
                            .createCommit({
                                owner: r.owner,
                                repo: r.repo,
                                message: r.commitMessage || "commit",
                                tree: n.newTreeSha,
                                parents: [n.referenceCommitSha]
                            })
                            .then(function (e) {
                                return c("createTree Response: %O", e), t({}, n, { newCommitSha: e.data.sha });
                            });
                    },
                    l = function (e, t, r) {
                        return e.git
                            .updateRef({
                                owner: t.owner,
                                repo: t.repo,
                                ref: t.ref,
                                sha: r.newCommitSha,
                                force: t.forceUpdate
                            })
                            .then(function (e) {
                                c("updateReference Response: %O", e);
                            });
                    };
                (exports.getContent = function (t, r) {
                    var n = r.owner,
                        o = r.repo,
                        a = r.path,
                        i = r.ref;
                    return t.repos.getContent({ owner: n, repo: o, path: a, ref: i }).then(function (t) {
                        if ((c("getContent Response: %O", t), "file" !== t.data.type))
                            return Promise.reject(new Error("This is not file:" + a));
                        if ("base64" === t.data.encoding)
                            return Promise.resolve(e.from(t.data.content, "base64").toString());
                        throw new Error("Unknown file type" + t.data.type + ":" + t.data.encoding);
                    });
                }),
                    (exports.deleteFile = function (e, t) {
                        var a = t.owner,
                            i = t.repo,
                            s = t.path,
                            u = t.ref,
                            f = t.commitMessage;
                        return r(o, void 0, void 0, function () {
                            var t;
                            return n(this, function (r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, e.repos.getContent({ owner: a, repo: i, path: s, ref: u })];
                                    case 1:
                                        return (
                                            (t = r.sent().data),
                                            c("deleteFile:getContents Response: %O", t),
                                            [
                                                2,
                                                e.repos
                                                    .deleteFile({
                                                        owner: a,
                                                        repo: i,
                                                        path: s,
                                                        branch: u.replace(/^refs\//, "").replace(/^heads\//, ""),
                                                        sha: t.sha,
                                                        message: f
                                                    })
                                                    .then(function (e) {
                                                        c("deleteFile:deleteFile Response: %O", e);
                                                    })
                                            ]
                                        );
                                }
                            });
                        });
                    }),
                    (exports.createGitHubAdaptor = function (e) {
                        var r = e.token || s;
                        if (!r) throw new Error("token is not defined");
                        var n = new a.Octokit({ auth: r, type: "oauth", userAgent: "korefile" }),
                            o = { owner: e.owner, repo: e.repo, ref: e.ref, forceUpdate: e.forceUpdate || !1 };
                        return {
                            readFile: function (e) {
                                return exports.getContent(n, { repo: o.repo, owner: o.owner, path: e, ref: o.ref });
                            },
                            writeFile: function (r, a) {
                                var i = t({}, o, { files: [{ path: r, content: a }] }),
                                    c =
                                        e.commitMessage && "function" == typeof e.commitMessage.write
                                            ? e.commitMessage.write(r)
                                            : "Update " + r;
                                return u(n, o)
                                    .then(function (e) {
                                        return f(n, i, e);
                                    })
                                    .then(function (e) {
                                        return p(n, t({}, o, { commitMessage: c }), e);
                                    })
                                    .then(function (e) {
                                        return l(n, i, e);
                                    });
                            },
                            deleteFile: function (r) {
                                var a =
                                    e.commitMessage && "function" == typeof e.commitMessage.delete
                                        ? e.commitMessage.delete(r)
                                        : "Delete " + r;
                                return exports.deleteFile(n, t({}, o, { path: r, commitMessage: a }));
                            }
                        };
                    });
            },
            { "@octokit/rest": "OSjg", "base64-arraybuffer": "tTpz", debug: "x99Y", buffer: "fe91" }
        ],
        SfMV: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 });
                var e = require("./korefile");
                exports.createKoreFile = e.createKoreFile;
                var r = require("./GitHubAdaptor");
                exports.createGitHubAdaptor = r.createGitHubAdaptor;
            },
            { "./korefile": "eENU", "./GitHubAdaptor": "UTui" }
        ],
        m9AG: [
            function (require, module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.createClient = void 0);
                var e = require("korefile"),
                    t = function (e, t, n, r) {
                        return new (n || (n = Promise))(function (o, a) {
                            function i(e) {
                                try {
                                    c(r.next(e));
                                } catch (t) {
                                    a(t);
                                }
                            }
                            function u(e) {
                                try {
                                    c(r.throw(e));
                                } catch (t) {
                                    a(t);
                                }
                            }
                            function c(e) {
                                var t;
                                e.done
                                    ? o(e.value)
                                    : ((t = e.value),
                                      t instanceof n
                                          ? t
                                          : new n(function (e) {
                                                e(t);
                                            })).then(i, u);
                            }
                            c((r = r.apply(e, t || [])).next());
                        });
                    },
                    n = function (e, t) {
                        var n,
                            r,
                            o,
                            a,
                            i = {
                                label: 0,
                                sent: function () {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (a = { next: u(0), throw: u(1), return: u(2) }),
                            "function" == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function u(a) {
                            return function (u) {
                                return (function (a) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & a[0]
                                                            ? r.return
                                                            : a[0]
                                                            ? r.throw || ((o = r.return) && o.call(r), 0)
                                                            : r.next) &&
                                                    !(o = o.call(r, a[1])).done)
                                            )
                                                return o;
                                            switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                                                case 0:
                                                case 1:
                                                    o = a;
                                                    break;
                                                case 4:
                                                    return i.label++, { value: a[1], done: !1 };
                                                case 5:
                                                    i.label++, (r = a[1]), (a = [0]);
                                                    continue;
                                                case 7:
                                                    (a = i.ops.pop()), i.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                                                        (6 === a[0] || 2 === a[0])
                                                    ) {
                                                        i = 0;
                                                        continue;
                                                    }
                                                    if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                                                        i.label = a[1];
                                                        break;
                                                    }
                                                    if (6 === a[0] && i.label < o[1]) {
                                                        (i.label = o[1]), (o = a);
                                                        break;
                                                    }
                                                    if (o && i.label < o[2]) {
                                                        (i.label = o[2]), i.ops.push(a);
                                                        break;
                                                    }
                                                    o[2] && i.ops.pop(), i.trys.pop();
                                                    continue;
                                            }
                                            a = t.call(e, i);
                                        } catch (u) {
                                            (a = [6, u]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & a[0]) throw a[1];
                                    return { value: a[0] ? a[1] : void 0, done: !0 };
                                })([a, u]);
                            };
                        }
                    },
                    r = function () {
                        return t(void 0, void 0, void 0, function () {
                            var r, o, a, i, u;
                            return n(this, function (c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, GM_getValue("owner")];
                                    case 1:
                                        return (r = c.sent()), [4, GM_getValue("repo")];
                                    case 2:
                                        return (o = c.sent()), [4, GM_getValue("branch")];
                                    case 3:
                                        return (a = c.sent()), [4, GM_getValue("token")];
                                    case 4:
                                        return (
                                            (i = c.sent()),
                                            (u = (0, e.createKoreFile)({
                                                adaptor: (0, e.createGitHubAdaptor)({
                                                    owner: r,
                                                    repo: o,
                                                    ref: "heads/" + a,
                                                    token: i
                                                })
                                            })),
                                            [
                                                2,
                                                {
                                                    fetchProjectData: function () {
                                                        return t(void 0, void 0, Promise, function () {
                                                            var e;
                                                            return n(this, function (t) {
                                                                switch (t.label) {
                                                                    case 0:
                                                                        return [4, u.readFile("project.json")];
                                                                    case 1:
                                                                        return (e = t.sent()), [2, JSON.parse(e)];
                                                                }
                                                            });
                                                        });
                                                    },
                                                    updateProjectData: function (e) {
                                                        return t(void 0, void 0, void 0, function () {
                                                            return n(this, function (t) {
                                                                return [
                                                                    2,
                                                                    u.writeFile(
                                                                        "project.json",
                                                                        JSON.stringify(e, null, 4)
                                                                    )
                                                                ];
                                                            });
                                                        });
                                                    }
                                                }
                                            ]
                                        );
                                }
                            });
                        });
                    };
                exports.createClient = r;
            },
            { korefile: "SfMV" }
        ],
        j9zQ: [
            function (require, module, exports) {
                "use strict";
                var t = n(require("immer")),
                    e = require("./github-data");
                function n(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function r(t) {
                    return (r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t &&
                                      "function" == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? "symbol"
                                      : typeof t;
                              })(t);
                }
                function o(t, e) {
                    o = function (t, e) {
                        return new l(t, void 0, e);
                    };
                    var n = a(RegExp),
                        c = RegExp.prototype,
                        i = new WeakMap();
                    function l(t, e, r) {
                        var o = n.call(this, t, e);
                        return i.set(o, r || i.get(t)), o;
                    }
                    function f(t, e) {
                        var n = i.get(e);
                        return Object.keys(n).reduce(function (e, r) {
                            return (e[r] = t[n[r]]), e;
                        }, Object.create(null));
                    }
                    return (
                        u(l, n),
                        (l.prototype.exec = function (t) {
                            var e = c.exec.call(this, t);
                            return e && (e.groups = f(e, this)), e;
                        }),
                        (l.prototype[Symbol.replace] = function (t, e) {
                            if ("string" == typeof e) {
                                var n = i.get(this);
                                return c[Symbol.replace].call(
                                    this,
                                    t,
                                    e.replace(/\$<([^>]+)>/g, function (t, e) {
                                        return "$" + n[e];
                                    })
                                );
                            }
                            if ("function" == typeof e) {
                                var o = this;
                                return c[Symbol.replace].call(this, t, function () {
                                    var t = [];
                                    return (
                                        t.push.apply(t, arguments),
                                        "object" !== r(t[t.length - 1]) && t.push(f(t, o)),
                                        e.apply(this, t)
                                    );
                                });
                            }
                            return c[Symbol.replace].call(this, t, e);
                        }),
                        o.apply(this, arguments)
                    );
                }
                function u(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, {
                        constructor: { value: t, writable: !0, configurable: !0 }
                    })),
                        e && p(t, e);
                }
                function c(t, e) {
                    return !e || ("object" !== r(e) && "function" != typeof e) ? i(t) : e;
                }
                function i(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function a(t) {
                    var e = "function" == typeof Map ? new Map() : void 0;
                    return (a = function (t) {
                        if (null === t || !s(t)) return t;
                        if ("function" != typeof t)
                            throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, n);
                        }
                        function n() {
                            return l(t, arguments, y(this).constructor);
                        }
                        return (
                            (n.prototype = Object.create(t.prototype, {
                                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
                            })),
                            p(n, t)
                        );
                    })(t);
                }
                function l(t, e, n) {
                    return (l = f()
                        ? Reflect.construct
                        : function (t, e, n) {
                              var r = [null];
                              r.push.apply(r, e);
                              var o = new (Function.bind.apply(t, r))();
                              return n && p(o, n.prototype), o;
                          }).apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                function s(t) {
                    return -1 !== Function.toString.call(t).indexOf("[native code]");
                }
                function p(t, e) {
                    return (p =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        })(t, e);
                }
                function y(t) {
                    return (y = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          })(t);
                }
                var b = function (t, e, n, r) {
                        return new (n || (n = Promise))(function (o, u) {
                            function c(t) {
                                try {
                                    a(r.next(t));
                                } catch (e) {
                                    u(e);
                                }
                            }
                            function i(t) {
                                try {
                                    a(r.throw(t));
                                } catch (e) {
                                    u(e);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function (t) {
                                                t(e);
                                            })).then(c, i);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                    h = function (t, e) {
                        var n,
                            r,
                            o,
                            u,
                            c = {
                                label: 0,
                                sent: function () {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (u = { next: i(0), throw: i(1), return: i(2) }),
                            "function" == typeof Symbol &&
                                (u[Symbol.iterator] = function () {
                                    return this;
                                }),
                            u
                        );
                        function i(u) {
                            return function (i) {
                                return (function (u) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; c; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & u[0]
                                                            ? r.return
                                                            : u[0]
                                                            ? r.throw || ((o = r.return) && o.call(r), 0)
                                                            : r.next) &&
                                                    !(o = o.call(r, u[1])).done)
                                            )
                                                return o;
                                            switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                                                case 0:
                                                case 1:
                                                    o = u;
                                                    break;
                                                case 4:
                                                    return c.label++, { value: u[1], done: !1 };
                                                case 5:
                                                    c.label++, (r = u[1]), (u = [0]);
                                                    continue;
                                                case 7:
                                                    (u = c.ops.pop()), c.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(o = (o = c.trys).length > 0 && o[o.length - 1]) &&
                                                        (6 === u[0] || 2 === u[0])
                                                    ) {
                                                        c = 0;
                                                        continue;
                                                    }
                                                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                                                        c.label = u[1];
                                                        break;
                                                    }
                                                    if (6 === u[0] && c.label < o[1]) {
                                                        (c.label = o[1]), (o = u);
                                                        break;
                                                    }
                                                    if (o && c.label < o[2]) {
                                                        (c.label = o[2]), c.ops.push(u);
                                                        break;
                                                    }
                                                    o[2] && c.ops.pop(), c.trys.pop();
                                                    continue;
                                            }
                                            u = e.call(t, c);
                                        } catch (i) {
                                            (u = [6, i]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & u[0]) throw u[1];
                                    return { value: u[0] ? u[1] : void 0, done: !0 };
                                })([u, i]);
                            };
                        }
                    };
                !(function () {
                    var n;
                    b(this, void 0, void 0, function () {
                        var r,
                            u,
                            c,
                            i,
                            a,
                            l,
                            f,
                            s = this;
                        return h(this, function (p) {
                            return (
                                (r = o(
                                    /^https:\/\/github.com\/([\x2D\.0-9A-Z_a-z]+)\/([\x2D\.0-9A-Z_a-z]+)\/((issues|pull))\/([0-9]+)/,
                                    { owner: 1, repo: 2, type: 3, number: 5 }
                                )),
                                (u = window.location.href),
                                (c = u.match(r))
                                    ? ((i =
                                          "issues" === (null === (n = c.groups) || void 0 === n ? void 0 : n.type)
                                              ? "issue"
                                              : "pull_request"),
                                      (a = function () {
                                          return b(s, void 0, void 0, function () {
                                              var n, r, o;
                                              return h(this, function (c) {
                                                  switch (c.label) {
                                                      case 0:
                                                          return [4, (0, e.createClient)()];
                                                      case 1:
                                                          return [4, (n = c.sent()).fetchProjectData()];
                                                      case 2:
                                                          return (
                                                              (r = c.sent()),
                                                              (o = (0, t.default)(r, function (t) {
                                                                  var e = t.find(function (t) {
                                                                      return "inbox" === t.id;
                                                                  });
                                                                  null == e || e.items.push({ type: i, url: u });
                                                              })),
                                                              [4, n.updateProjectData(o)]
                                                          );
                                                      case 3:
                                                          return c.sent(), [2];
                                                  }
                                              });
                                          });
                                      }),
                                      (l = document.querySelector(".thread-subscription-status")),
                                      ((f = document.createElement("button")).textContent = "Add to My Board"),
                                      (f.className = "btn btn-block btn-sm thread-subscribe-button"),
                                      f.addEventListener("click", function () {
                                          (f.textContent = "Progressing..."),
                                              (f.disabled = !0),
                                              a()
                                                  .then(function () {
                                                      f.textContent = "Added";
                                                  })
                                                  .catch(function (t) {
                                                      console.error(t),
                                                          (f.textContent = "Error: Retry"),
                                                          (f.disabled = !1);
                                                  });
                                      }),
                                      null == l || l.append(f),
                                      [2])
                                    : [2]
                            );
                        });
                    });
                })();
            },
            { immer: "wBnk", "./github-data": "m9AG" }
        ]
    },
    {},
    ["j9zQ"],
    null
);
