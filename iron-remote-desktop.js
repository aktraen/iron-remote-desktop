var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _t2, _e, _a, _b;
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("5");
const Ei = 2, Si = "[", Di = "]", ot = {}, q = Symbol(), ms = false, te = 2, $s = 4, Ft = 8, ns = 16, Me = 32, qe = 64, xt = 128, X = 256, Lt = 512, j = 1024, xe = 2048, We = 4096, Ct = 8192, Pt = 16384, Ti = 32768, Ri = 65536, Oi = 1 << 19, Fs = 1 << 20, vt = Symbol("$state"), Ai = Symbol("legacy props");
var Ps = Array.isArray, $i = Array.prototype.indexOf, Fi = Array.from, _t = Object.keys, Et = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Pi = Object.getOwnPropertyDescriptors, Ki = Object.prototype, Ni = Array.prototype, Ks = Object.getPrototypeOf;
const bt = () => {
};
function Ns(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let nt = [], Qt = [];
function Is() {
  var t = nt;
  nt = [], Ns(t);
}
function Ii() {
  var t = Qt;
  Qt = [], Ns(t);
}
function as(t) {
  nt.length === 0 && queueMicrotask(Is), nt.push(t);
}
function ps() {
  nt.length > 0 && Is(), Qt.length > 0 && Ii();
}
function Us(t) {
  return t === this.v;
}
function Bs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Ui(t) {
  return !Bs(t, this.v);
}
function Bi(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qi(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Hi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Zi = false;
function ce(t, e) {
  var s = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Us,
    rv: 0,
    wv: 0
  };
  return s;
}
function qt(t) {
  return /* @__PURE__ */ Ji(ce(t));
}
// @__NO_SIDE_EFFECTS__
function zs(t, e = false) {
  const s = ce(t);
  return e || (s.equals = Ui), s;
}
// @__NO_SIDE_EFFECTS__
function Ji(t) {
  return S !== null && !ee && (S.f & te) !== 0 && (le === null ? so([t]) : le.push(t)), t;
}
function V(t, e) {
  return S !== null && !ee && ui() && (S.f & (te | ns)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (le === null || !le.includes(t)) && Xi(), Qi(t, e);
}
function Qi(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = Gs(), qs(t, xe), R !== null && (R.f & j) !== 0 && (R.f & (Me | qe)) === 0 && (ue === null ? io([t]) : ue.push(t))), e;
}
function qs(t, e) {
  var s = t.reactions;
  if (s !== null)
    for (var i = s.length, o = 0; o < i; o++) {
      var r = s[o], c = r.f;
      (c & xe) === 0 && (he(r, e), (c & (j | X)) !== 0 && ((c & te) !== 0 ? qs(
        /** @type {Derived} */
        r,
        We
      ) : us(
        /** @type {Effect} */
        r
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ws(t) {
  var e = te | xe, s = S !== null && (S.f & te) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return R === null || s !== null && (s.f & X) !== 0 ? e |= X : R.f |= Fs, {
    ctx: U,
    deps: null,
    effects: null,
    equals: Us,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: s ?? R
  };
}
function Hs(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var s = 0; s < e.length; s += 1)
      ge(
        /** @type {Effect} */
        e[s]
      );
  }
}
function Gi(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & te) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function eo(t) {
  var e, s = R;
  we(Gi(t));
  try {
    Hs(t), e = ti(t);
  } finally {
    we(s);
  }
  return e;
}
function Vs(t) {
  var e = eo(t), s = (ve || (t.f & X) !== 0) && t.deps !== null ? We : j;
  he(t, s), t.equals(e) || (t.v = e, t.wv = Gs());
}
function cs(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let se = false;
function yt(t) {
  se = t;
}
let B;
function St(t) {
  if (t === null)
    throw cs(), ot;
  return B = t;
}
function js() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Kt(B)
  );
}
function Wt(t) {
  if (se) {
    if (/* @__PURE__ */ Kt(B) !== null)
      throw cs(), ot;
    B = t;
  }
}
function De(t, e = null, s) {
  if (typeof t != "object" || t === null || vt in t)
    return t;
  const i = Ks(t);
  if (i !== Ki && i !== Ni)
    return t;
  var o = /* @__PURE__ */ new Map(), r = Ps(t), c = ce(0);
  r && o.set("length", ce(
    /** @type {any[]} */
    t.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(p, u, k) {
        (!("value" in k) || k.configurable === false || k.enumerable === false || k.writable === false) && Vi();
        var y = o.get(u);
        return y === void 0 ? (y = ce(k.value), o.set(u, y)) : V(y, De(k.value, f)), true;
      },
      deleteProperty(p, u) {
        var k = o.get(u);
        if (k === void 0)
          u in p && o.set(u, ce(q));
        else {
          if (r && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              o.get("length")
            ), n = Number(u);
            Number.isInteger(n) && n < y.v && V(y, n);
          }
          V(k, q), ks(c);
        }
        return true;
      },
      get(p, u, k) {
        var _a2;
        if (u === vt)
          return t;
        var y = o.get(u), n = u in p;
        if (y === void 0 && (!n || ((_a2 = ze(p, u)) == null ? void 0 : _a2.writable)) && (y = ce(De(n ? p[u] : q, f)), o.set(u, y)), y !== void 0) {
          var d = K(y);
          return d === q ? void 0 : d;
        }
        return Reflect.get(p, u, k);
      },
      getOwnPropertyDescriptor(p, u) {
        var k = Reflect.getOwnPropertyDescriptor(p, u);
        if (k && "value" in k) {
          var y = o.get(u);
          y && (k.value = K(y));
        } else if (k === void 0) {
          var n = o.get(u), d = n == null ? void 0 : n.v;
          if (n !== void 0 && d !== q)
            return {
              enumerable: true,
              configurable: true,
              value: d,
              writable: true
            };
        }
        return k;
      },
      has(p, u) {
        var _a2;
        if (u === vt)
          return true;
        var k = o.get(u), y = k !== void 0 && k.v !== q || Reflect.has(p, u);
        if (k !== void 0 || R !== null && (!y || ((_a2 = ze(p, u)) == null ? void 0 : _a2.writable))) {
          k === void 0 && (k = ce(y ? De(p[u], f) : q), o.set(u, k));
          var n = K(k);
          if (n === q)
            return false;
        }
        return y;
      },
      set(p, u, k, y) {
        var _a2;
        var n = o.get(u), d = u in p;
        if (r && u === "length")
          for (var a = k; a < /** @type {Source<number>} */
          n.v; a += 1) {
            var l = o.get(a + "");
            l !== void 0 ? V(l, q) : a in p && (l = ce(q), o.set(a + "", l));
          }
        n === void 0 ? (!d || ((_a2 = ze(p, u)) == null ? void 0 : _a2.writable)) && (n = ce(void 0), V(n, De(k, f)), o.set(u, n)) : (d = n.v !== q, V(n, De(k, f)));
        var m = Reflect.getOwnPropertyDescriptor(p, u);
        if ((m == null ? void 0 : m.set) && m.set.call(y, k), !d) {
          if (r && typeof u == "string") {
            var $ = (
              /** @type {Source<number>} */
              o.get("length")
            ), A = Number(u);
            Number.isInteger(A) && A >= $.v && V($, A + 1);
          }
          ks(c);
        }
        return true;
      },
      ownKeys(p) {
        K(c);
        var u = Reflect.ownKeys(p).filter((n) => {
          var d = o.get(n);
          return d === void 0 || d.v !== q;
        });
        for (var [k, y] of o)
          y.v !== q && !(k in p) && u.push(k);
        return u;
      },
      setPrototypeOf() {
        ji();
      }
    }
  );
}
function ks(t, e = 1) {
  V(t, t.v + e);
}
var vs, Ys, Xs, Zs;
function Gt() {
  if (vs === void 0) {
    vs = window, Ys = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Xs = ze(e, "firstChild").get, Zs = ze(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Js(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  return Xs.call(t);
}
// @__NO_SIDE_EFFECTS__
function Kt(t) {
  return Zs.call(t);
}
function Ht(t, e) {
  if (!se)
    return /* @__PURE__ */ Dt(t);
  var s = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(B)
  );
  return s === null && (s = B.appendChild(Js())), St(s), s;
}
function to(t) {
  t.textContent = "";
}
let wt = false, Tt = false, Rt = null, gt = false, ls = false;
function bs(t) {
  ls = t;
}
let rt = [];
let S = null, ee = false;
function be(t) {
  S = t;
}
let R = null;
function we(t) {
  R = t;
}
let le = null;
function so(t) {
  le = t;
}
let I = null, H = 0, ue = null;
function io(t) {
  ue = t;
}
let Qs = 1, Ot = 0, ve = false;
function Gs() {
  return ++Qs;
}
function Nt(t) {
  var _a2;
  var e = t.f;
  if ((e & xe) !== 0)
    return true;
  if ((e & We) !== 0) {
    var s = t.deps, i = (e & X) !== 0;
    if (s !== null) {
      var o, r, c = (e & Lt) !== 0, f = i && R !== null && !ve, p = s.length;
      if (c || f) {
        var u = (
          /** @type {Derived} */
          t
        ), k = u.parent;
        for (o = 0; o < p; o++)
          r = s[o], (c || !((_a2 = r == null ? void 0 : r.reactions) == null ? void 0 : _a2.includes(u))) && (r.reactions ?? (r.reactions = [])).push(u);
        c && (u.f ^= Lt), f && k !== null && (k.f & X) === 0 && (u.f ^= X);
      }
      for (o = 0; o < p; o++)
        if (r = s[o], Nt(
          /** @type {Derived} */
          r
        ) && Vs(
          /** @type {Derived} */
          r
        ), r.wv > t.wv)
          return true;
    }
    (!i || R !== null && !ve) && he(t, j);
  }
  return false;
}
function oo(t, e) {
  for (var s = e; s !== null; ) {
    if ((s.f & xt) !== 0)
      try {
        s.fn(t);
        return;
      } catch {
        s.f ^= xt;
      }
    s = s.parent;
  }
  throw wt = false, t;
}
function ro(t) {
  return (t.f & Pt) === 0 && (t.parent === null || (t.parent.f & xt) === 0);
}
function It(t, e, s, i) {
  if (wt) {
    if (s === null && (wt = false), ro(e))
      throw t;
    return;
  }
  s !== null && (wt = true);
  {
    oo(t, e);
    return;
  }
}
function ei(t, e, s = true) {
  var i = t.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var r = i[o];
      (r.f & te) !== 0 ? ei(
        /** @type {Derived} */
        r,
        e,
        false
      ) : e === r && (s ? he(r, xe) : (r.f & j) !== 0 && he(r, We), us(
        /** @type {Effect} */
        r
      ));
    }
}
function ti(t) {
  var _a2;
  var e = I, s = H, i = ue, o = S, r = ve, c = le, f = U, p = ee, u = t.f;
  I = /** @type {null | Value[]} */
  null, H = 0, ue = null, ve = (u & X) !== 0 && (ee || !gt || S === null), S = (u & (Me | qe)) === 0 ? t : null, le = null, ws(t.ctx), ee = false, Ot++;
  try {
    var k = (
      /** @type {Function} */
      (0, t.fn)()
    ), y = t.deps;
    if (I !== null) {
      var n;
      if (At(t, H), y !== null && H > 0)
        for (y.length = H + I.length, n = 0; n < I.length; n++)
          y[H + n] = I[n];
      else
        t.deps = y = I;
      if (!ve)
        for (n = H; n < y.length; n++)
          ((_a2 = y[n]).reactions ?? (_a2.reactions = [])).push(t);
    } else y !== null && H < y.length && (At(t, H), y.length = H);
    if (ui() && ue !== null && !ee && y !== null && (t.f & (te | We | xe)) === 0)
      for (n = 0; n < /** @type {Source[]} */
      ue.length; n++)
        ei(
          ue[n],
          /** @type {Effect} */
          t
        );
    return o !== null && Ot++, k;
  } finally {
    I = e, H = s, ue = i, S = o, ve = r, le = c, ws(f), ee = p;
  }
}
function no(t, e) {
  let s = e.reactions;
  if (s !== null) {
    var i = $i.call(s, t);
    if (i !== -1) {
      var o = s.length - 1;
      o === 0 ? s = e.reactions = null : (s[i] = s[o], s.pop());
    }
  }
  s === null && (e.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (I === null || !I.includes(e)) && (he(e, We), (e.f & (X | Lt)) === 0 && (e.f ^= Lt), Hs(
    /** @type {Derived} **/
    e
  ), At(
    /** @type {Derived} **/
    e,
    0
  ));
}
function At(t, e) {
  var s = t.deps;
  if (s !== null)
    for (var i = e; i < s.length; i++)
      no(t, s[i]);
}
function ds(t) {
  var e = t.f;
  if ((e & Pt) === 0) {
    he(t, j);
    var s = R, i = U, o = gt;
    R = t, gt = true;
    try {
      (e & ns) !== 0 ? go(t) : ri(t), oi(t);
      var r = ti(t);
      t.teardown = typeof r == "function" ? r : null, t.wv = Qs;
      var c = t.deps, f;
      ms && Zi && t.f & xe;
    } catch (p) {
      It(p, t, s, i || t.ctx);
    } finally {
      gt = o, R = s;
    }
  }
}
function ao() {
  try {
    Wi();
  } catch (t) {
    if (Rt !== null)
      It(t, Rt, null);
    else
      throw t;
  }
}
function si() {
  try {
    for (var t = 0; rt.length > 0; ) {
      t++ > 1e3 && ao();
      var e = rt, s = e.length;
      rt = [];
      for (var i = 0; i < s; i++) {
        var o = e[i];
        (o.f & j) === 0 && (o.f ^= j);
        var r = lo(o);
        co(r);
      }
    }
  } finally {
    Tt = false, Rt = null;
  }
}
function co(t) {
  var e = t.length;
  if (e !== 0)
    for (var s = 0; s < e; s++) {
      var i = t[s];
      if ((i.f & (Pt | Ct)) === 0)
        try {
          Nt(i) && (ds(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? ni(i) : i.fn = null));
        } catch (o) {
          It(o, i, null, i.ctx);
        }
    }
}
function us(t) {
  Tt || (Tt = true, queueMicrotask(si));
  for (var e = Rt = t; e.parent !== null; ) {
    e = e.parent;
    var s = e.f;
    if ((s & (qe | Me)) !== 0) {
      if ((s & j) === 0) return;
      e.f ^= j;
    }
  }
  rt.push(e);
}
function lo(t) {
  for (var e = [], s = t.first; s !== null; ) {
    var i = s.f, o = (i & Me) !== 0, r = o && (i & j) !== 0;
    if (!r && (i & Ct) === 0) {
      if ((i & $s) !== 0)
        e.push(s);
      else if (o)
        s.f ^= j;
      else {
        var c = S;
        try {
          S = s, Nt(s) && ds(s);
        } catch (u) {
          It(u, s, null, s.ctx);
        } finally {
          S = c;
        }
      }
      var f = s.first;
      if (f !== null) {
        s = f;
        continue;
      }
    }
    var p = s.parent;
    for (s = s.next; s === null && p !== null; )
      s = p.next, p = p.parent;
  }
  return e;
}
function Ue(t) {
  var e;
  for (ps(); rt.length > 0; )
    Tt = true, si(), ps();
  return (
    /** @type {T} */
    e
  );
}
function K(t) {
  var e = t.f, s = (e & te) !== 0;
  if (S !== null && !ee) {
    le !== null && le.includes(t) && Yi();
    var i = S.deps;
    t.rv < Ot && (t.rv = Ot, I === null && i !== null && i[H] === t ? H++ : I === null ? I = [t] : (!ve || !I.includes(t)) && I.push(t));
  } else if (s && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), r = o.parent;
    r !== null && (r.f & X) === 0 && (o.f ^= X);
  }
  return s && (o = /** @type {Derived} */
  t, Nt(o) && Vs(o)), t.v;
}
function at(t) {
  var e = ee;
  try {
    return ee = true, t();
  } finally {
    ee = e;
  }
}
const uo = -7169;
function he(t, e) {
  t.f = t.f & uo | e;
}
function fo(t) {
  R === null && S === null && qi(), S !== null && (S.f & X) !== 0 && R === null && zi(), ls && Bi();
}
function ho(t, e) {
  var s = e.last;
  s === null ? e.last = e.first = t : (s.next = t, t.prev = s, e.last = t);
}
function Te(t, e, s, i = true) {
  var o = (t & qe) !== 0, r = R, c = {
    ctx: U,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | xe,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: o ? null : r,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (s)
    try {
      ds(c), c.f |= Ti;
    } catch (u) {
      throw ge(c), u;
    }
  else e !== null && us(c);
  var f = s && c.deps === null && c.first === null && c.nodes_start === null && c.teardown === null && (c.f & (Fs | xt)) === 0;
  if (!f && !o && i && (r !== null && ho(c, r), S !== null && (S.f & te) !== 0)) {
    var p = (
      /** @type {Derived} */
      S
    );
    (p.effects ?? (p.effects = [])).push(c);
  }
  return c;
}
function yo(t) {
  const e = Te(Ft, null, false);
  return he(e, j), e.teardown = t, e;
}
function mo(t) {
  fo();
  var e = R !== null && (R.f & Me) !== 0 && U !== null && !U.m;
  if (e) {
    var s = (
      /** @type {ComponentContext} */
      U
    );
    (s.e ?? (s.e = [])).push({
      fn: t,
      effect: R,
      reaction: S
    });
  } else {
    var i = fs(t);
    return i;
  }
}
function po(t) {
  const e = Te(qe, t, true);
  return () => {
    ge(e);
  };
}
function ko(t) {
  const e = Te(qe, t, true);
  return (s = {}) => new Promise((i) => {
    s.outro ? Mo(e, () => {
      ge(e), i(void 0);
    }) : (ge(e), i(void 0));
  });
}
function fs(t) {
  return Te($s, t, false);
}
function ii(t) {
  return Te(Ft, t, true);
}
function vo(t, e = [], s = Ws) {
  const i = e.map(s);
  return bo(() => t(...i.map(K)));
}
function bo(t, e = 0) {
  return Te(Ft | ns | e, t, true);
}
function wo(t, e = true) {
  return Te(Ft | Me, t, true, e);
}
function oi(t) {
  var e = t.teardown;
  if (e !== null) {
    const s = ls, i = S;
    bs(true), be(null);
    try {
      e.call(null);
    } finally {
      bs(s), be(i);
    }
  }
}
function ri(t, e = false) {
  var s = t.first;
  for (t.first = t.last = null; s !== null; ) {
    var i = s.next;
    ge(s, e), s = i;
  }
}
function go(t) {
  for (var e = t.first; e !== null; ) {
    var s = e.next;
    (e.f & Me) === 0 && ge(e), e = s;
  }
}
function ge(t, e = true) {
  var s = false;
  if ((e || (t.f & Oi) !== 0) && t.nodes_start !== null) {
    for (var i = t.nodes_start, o = t.nodes_end; i !== null; ) {
      var r = i === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kt(i)
      );
      i.remove(), i = r;
    }
    s = true;
  }
  ri(t, e && !s), At(t, 0), he(t, Pt);
  var c = t.transitions;
  if (c !== null)
    for (const p of c)
      p.stop();
  oi(t);
  var f = t.parent;
  f !== null && f.first !== null && ni(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function ni(t) {
  var e = t.parent, s = t.prev, i = t.next;
  s !== null && (s.next = i), i !== null && (i.prev = s), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = s));
}
function Mo(t, e) {
  var s = [];
  ai(t, s, true), xo(s, () => {
    ge(t), e && e();
  });
}
function xo(t, e) {
  var s = t.length;
  if (s > 0) {
    var i = () => --s || e();
    for (var o of t)
      o.out(i);
  } else
    e();
}
function ai(t, e, s) {
  if ((t.f & Ct) === 0) {
    if (t.f ^= Ct, t.transitions !== null)
      for (const c of t.transitions)
        (c.is_global || s) && e.push(c);
    for (var i = t.first; i !== null; ) {
      var o = i.next, r = (i.f & Ri) !== 0 || (i.f & Me) !== 0;
      ai(i, e, r ? s : false), i = o;
    }
  }
}
function ci(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let U = null;
function ws(t) {
  U = t;
}
function li(t, e = false, s) {
  U = {
    p: U,
    c: null,
    e: null,
    m: false,
    s: t,
    x: null,
    l: null
  };
}
function di(t) {
  const e = U;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const c = e.e;
    if (c !== null) {
      var s = R, i = S;
      e.e = null;
      try {
        for (var o = 0; o < c.length; o++) {
          var r = c[o];
          we(r.effect), be(r.reaction), fs(r.fn);
        }
      } finally {
        we(s), be(i);
      }
    }
    U = e.p, e.m = true;
  }
  return t || /** @type {T} */
  {};
}
function ui() {
  return true;
}
const Lo = ["touchstart", "touchmove"];
function Co(t) {
  return Lo.includes(t);
}
function _o(t) {
  var e = S, s = R;
  be(null), we(null);
  try {
    return t();
  } finally {
    be(e), we(s);
  }
}
const fi = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new Set();
function Eo(t, e, s, i = {}) {
  function o(r) {
    if (i.capture || et.call(e, r), !r.cancelBubble)
      return _o(() => s == null ? void 0 : s.call(this, r));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? as(() => {
    e.addEventListener(t, o, i);
  }) : e.addEventListener(t, o, i), o;
}
function mt(t, e, s, i, o) {
  var r = { capture: i, passive: o }, c = Eo(t, e, s, r);
  (e === document.body || e === window || e === document) && yo(() => {
    e.removeEventListener(t, c, r);
  });
}
function So(t) {
  for (var e = 0; e < t.length; e++)
    fi.add(t[e]);
  for (var s of es)
    s(t);
}
function et(t) {
  var _a2;
  var e = this, s = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, o = ((_a2 = t.composedPath) == null ? void 0 : _a2.call(t)) || [], r = (
    /** @type {null | Element} */
    o[0] || t.target
  ), c = 0, f = t.__root;
  if (f) {
    var p = o.indexOf(f);
    if (p !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = o.indexOf(e);
    if (u === -1)
      return;
    p <= u && (c = p);
  }
  if (r = /** @type {Element} */
  o[c] || t.target, r !== e) {
    Et(t, "currentTarget", {
      configurable: true,
      get() {
        return r || s;
      }
    });
    var k = S, y = R;
    be(null), we(null);
    try {
      for (var n, d = []; r !== null; ) {
        var a = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var l = r["__" + i];
          if (l !== void 0 && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === r))
            if (Ps(l)) {
              var [m, ...$] = l;
              m.apply(r, [t, ...$]);
            } else
              l.call(r, t);
        } catch (A) {
          n ? d.push(A) : n = A;
        }
        if (t.cancelBubble || a === e || a === null)
          break;
        r = a;
      }
      if (n) {
        for (let A of d)
          queueMicrotask(() => {
            throw A;
          });
        throw n;
      }
    } finally {
      t.__root = e, delete t.currentTarget, be(k), we(y);
    }
  }
}
function Do(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function ts(t, e) {
  var s = (
    /** @type {Effect} */
    R
  );
  s.nodes_start === null && (s.nodes_start = t, s.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function To(t, e) {
  var s = (e & Ei) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    if (se)
      return ts(B, null), B;
    i === void 0 && (i = Do(o ? t : "<!>" + t), i = /** @type {Node} */
    /* @__PURE__ */ Dt(i));
    var r = (
      /** @type {TemplateNode} */
      s || Ys ? document.importNode(i, true) : i.cloneNode(true)
    );
    return ts(r, r), r;
  };
}
function hi(t, e) {
  if (se) {
    R.nodes_end = B, js();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function yi(t, e) {
  return mi(t, e);
}
function Ro(t, e) {
  Gt(), e.intro = e.intro ?? false;
  const s = e.target, i = se, o = B;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Dt(s)
    ); r && (r.nodeType !== 8 || /** @type {Comment} */
    r.data !== Si); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Kt(r);
    if (!r)
      throw ot;
    yt(true), St(
      /** @type {Comment} */
      r
    ), js();
    const c = mi(t, { ...e, anchor: r });
    if (B === null || B.nodeType !== 8 || /** @type {Comment} */
    B.data !== Di)
      throw cs(), ot;
    return yt(false), /**  @type {Exports} */
    c;
  } catch (c) {
    if (c === ot)
      return e.recover === false && Hi(), Gt(), to(s), yt(false), yi(t, e);
    throw c;
  } finally {
    yt(i), St(o);
  }
}
const Ke = /* @__PURE__ */ new Map();
function mi(t, { target: e, anchor: s, props: i = {}, events: o, context: r, intro: c = true }) {
  Gt();
  var f = /* @__PURE__ */ new Set(), p = (y) => {
    for (var n = 0; n < y.length; n++) {
      var d = y[n];
      if (!f.has(d)) {
        f.add(d);
        var a = Co(d);
        e.addEventListener(d, et, { passive: a });
        var l = Ke.get(d);
        l === void 0 ? (document.addEventListener(d, et, { passive: a }), Ke.set(d, 1)) : Ke.set(d, l + 1);
      }
    }
  };
  p(Fi(fi)), es.add(p);
  var u = void 0, k = ko(() => {
    var y = s ?? e.appendChild(Js());
    return wo(() => {
      if (r) {
        li({});
        var n = (
          /** @type {ComponentContext} */
          U
        );
        n.c = r;
      }
      o && (i.$$events = o), se && ts(
        /** @type {TemplateNode} */
        y,
        null
      ), u = t(y, i) || {}, se && (R.nodes_end = B), r && di();
    }), () => {
      var _a2;
      for (var n of f) {
        e.removeEventListener(n, et);
        var d = (
          /** @type {number} */
          Ke.get(n)
        );
        --d === 0 ? (document.removeEventListener(n, et), Ke.delete(n)) : Ke.set(n, d);
      }
      es.delete(p), y !== s && ((_a2 = y.parentNode) == null ? void 0 : _a2.removeChild(y));
    };
  });
  return ss.set(u, k), u;
}
let ss = /* @__PURE__ */ new WeakMap();
function Oo(t, e) {
  const s = ss.get(t);
  return s ? (ss.delete(t), s(e)) : Promise.resolve();
}
function Ao(t, e) {
  as(() => {
    var s = t.getRootNode(), i = (
      /** @type {ShadowRoot} */
      s.host ? (
        /** @type {ShadowRoot} */
        s
      ) : (
        /** @type {Document} */
        s.head ?? /** @type {Document} */
        s.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + e.hash)) {
      const o = document.createElement("style");
      o.id = e.hash, o.textContent = e.code, i.appendChild(o);
    }
  });
}
const gs = [...` 	
\r\f\xA0\v\uFEFF`];
function $o(t, e, s) {
  var i = t == null ? "" : "" + t;
  if (i = i ? i + " " + e : e, s) {
    for (var o in s)
      if (s[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var r = o.length, c = 0; (c = i.indexOf(o, c)) >= 0; ) {
          var f = c + r;
          (c === 0 || gs.includes(i[c - 1])) && (f === i.length || gs.includes(i[f])) ? i = (c === 0 ? "" : i.substring(0, c)) + i.substring(f + 1) : c = f;
        }
  }
  return i === "" ? null : i;
}
function Fo(t, e, s, i, o, r) {
  var c = t.__className;
  if (se || c !== s) {
    var f = $o(s, i, r);
    (!se || f !== t.getAttribute("class")) && (f == null ? t.removeAttribute("class") : t.className = f), t.__className = s;
  } else if (r)
    for (var p in r) {
      var u = !!r[p];
      (o == null || u !== !!o[p]) && t.classList.toggle(p, u);
    }
  return r;
}
function Ms(t, e, s, i) {
  var o = t.__attributes ?? (t.__attributes = {});
  se && (o[e] = t.getAttribute(e)), o[e] !== (o[e] = s) && ("__styles" in t && (t.__styles = {}), s == null ? t.removeAttribute(e) : typeof s != "string" && Po(t).includes(e) ? t[e] = s : t.setAttribute(e, s));
}
var xs = /* @__PURE__ */ new Map();
function Po(t) {
  var e = xs.get(t.nodeName);
  if (e) return e;
  xs.set(t.nodeName, e = []);
  for (var s, i = t, o = Element.prototype; o !== i; ) {
    s = Pi(i);
    for (var r in s)
      s[r].set && e.push(r);
    i = Ks(i);
  }
  return e;
}
function Ls(t, e) {
  return t === e || (t == null ? void 0 : t[vt]) === e;
}
function Vt(t = {}, e, s, i) {
  return fs(() => {
    var o, r;
    return ii(() => {
      o = r, r = [], at(() => {
        t !== s(...r) && (e(t, ...r), o && Ls(s(...o), t) && e(null, ...o));
      });
    }), () => {
      as(() => {
        r && Ls(s(...r), t) && e(null, ...r);
      });
    };
  }), t;
}
function pi(t) {
  U === null && ci(), mo(() => {
    const e = at(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ko(t) {
  U === null && ci(), pi(() => () => at(t));
}
function No(t, e, s) {
  if (t == null)
    return e(void 0), bt;
  const i = at(
    () => t.subscribe(
      e,
      // @ts-expect-error
      s
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Ne = [];
function ki(t, e = bt) {
  let s = null;
  const i = /* @__PURE__ */ new Set();
  function o(f) {
    if (Bs(t, f) && (t = f, s)) {
      const p = !Ne.length;
      for (const u of i)
        u[1](), Ne.push(u, t);
      if (p) {
        for (let u = 0; u < Ne.length; u += 2)
          Ne[u][0](Ne[u + 1]);
        Ne.length = 0;
      }
    }
  }
  function r(f) {
    o(f(
      /** @type {T} */
      t
    ));
  }
  function c(f, p = bt) {
    const u = [f, p];
    return i.add(u), i.size === 1 && (s = e(o, r) || bt), f(
      /** @type {T} */
      t
    ), () => {
      i.delete(u), i.size === 0 && s && (s(), s = null);
    };
  }
  return { set: o, update: r, subscribe: c };
}
function vi(t) {
  let e;
  return No(t, (s) => e = s)(), e;
}
function Ge(t, e, s, i) {
  var o;
  o = /** @type {V} */
  t[e];
  var r = (
    /** @type {V} */
    i
  ), c = true, f = false, p = () => (f = true, c && (c = false, r = /** @type {V} */
  i), r), u;
  u = () => {
    var d = (
      /** @type {V} */
      t[e]
    );
    return d === void 0 ? p() : (c = true, f = false, d);
  };
  var k = false, y = /* @__PURE__ */ zs(o), n = /* @__PURE__ */ Ws(() => {
    var d = u(), a = K(y);
    return k ? (k = false, a) : y.v = d;
  });
  return function(d, a) {
    if (arguments.length > 0) {
      const l = a ? K(n) : d;
      return n.equals(l) || (k = true, V(y, l), f && r !== void 0 && (r = l), at(() => K(n))), d;
    }
    return K(n);
  };
}
function Io(t) {
  return new Uo(t);
}
class Uo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    __privateAdd(this, _t2);
    /** @type {Record<string, any>} */
    __privateAdd(this, _e);
    var _a2;
    var s = /* @__PURE__ */ new Map(), i = (r, c) => {
      var f = /* @__PURE__ */ zs(c);
      return s.set(r, f), f;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(r, c) {
          return K(s.get(c) ?? i(c, Reflect.get(r, c)));
        },
        has(r, c) {
          return c === Ai ? true : (K(s.get(c) ?? i(c, Reflect.get(r, c))), Reflect.has(r, c));
        },
        set(r, c, f) {
          return V(s.get(c) ?? i(c, f), f), Reflect.set(r, c, f);
        }
      }
    );
    __privateSet(this, _e, (e.hydrate ? Ro : yi)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? false,
      recover: e.recover
    })), (!((_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.$$host) || e.sync === false) && Ue(), __privateSet(this, _t2, o.$$events);
    for (const r of Object.keys(__privateGet(this, _e)))
      r === "$set" || r === "$destroy" || r === "$on" || Et(this, r, {
        get() {
          return __privateGet(this, _e)[r];
        },
        /** @param {any} value */
        set(c) {
          __privateGet(this, _e)[r] = c;
        },
        enumerable: true
      });
    __privateGet(this, _e).$set = /** @param {Record<string, any>} next */
    (r) => {
      Object.assign(o, r);
    }, __privateGet(this, _e).$destroy = () => {
      Oo(__privateGet(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    __privateGet(this, _e).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, s) {
    __privateGet(this, _t2)[e] = __privateGet(this, _t2)[e] || [];
    const i = (...o) => s.call(this, ...o);
    return __privateGet(this, _t2)[e].push(i), () => {
      __privateGet(this, _t2)[e] = __privateGet(this, _t2)[e].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    __privateGet(this, _e).$destroy();
  }
}
_t2 = new WeakMap();
_e = new WeakMap();
let bi;
typeof HTMLElement == "function" && (bi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, s) {
    super();
    /** The Svelte component constructor */
    __publicField(this, "$$ctor");
    /** Slots */
    __publicField(this, "$$s");
    /** @type {any} The Svelte component instance */
    __publicField(this, "$$c");
    /** Whether or not the custom element is connected */
    __publicField(this, "$$cn", false);
    /** @type {Record<string, any>} Component props data */
    __publicField(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    __publicField(this, "$$r", false);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    __publicField(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    __publicField(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    __publicField(this, "$$me");
    this.$$ctor = t, this.$$s = e, s && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const i = this.$$c.$on(t, e);
      this.$$l_u.set(e, i);
    }
    super.addEventListener(t, e, s);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, s) {
    if (super.removeEventListener(t, e, s), this.$$c) {
      const i = this.$$l_u.get(e);
      i && (i(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = true, !this.$$c) {
      let t = function(i) {
        return (o) => {
          const r = document.createElement("slot");
          i !== "default" && (r.name = i), hi(o, r);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, s = Bo(this);
      for (const i of this.$$s)
        i in s && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), e.default = true) : e[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = Mt(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Io({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = po(() => {
        ii(() => {
          var _a2;
          this.$$r = true;
          for (const i of _t(this.$$c)) {
            if (!((_a2 = this.$$p_d[i]) == null ? void 0 : _a2.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const o = Mt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
          this.$$r = false;
        });
      });
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const r = this.$$c.$on(i, o);
          this.$$l_u.set(o, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, e, s) {
    var _a2;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Mt(t, s, this.$$p_d, "toProp"), (_a2 = this.$$c) == null ? void 0 : _a2.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = false, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return _t(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Mt(t, e, s, i) {
  var _a2;
  const o = (_a2 = s[t]) == null ? void 0 : _a2.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !s[t])
    return e;
  if (i === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Bo(t) {
  const e = {};
  return t.childNodes.forEach((s) => {
    e[
      /** @type {Element} node */
      s.slot || "default"
    ] = true;
  }), e;
}
function zo(t, e, s, i, o, r) {
  let c = class extends bi {
    constructor() {
      super(t, s, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return _t(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return _t(e).forEach((f) => {
    Et(c.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(p) {
        var _a2;
        p = Mt(f, p, e), this.$$d[f] = p;
        var u = this.$$c;
        if (u) {
          var k = (_a2 = ze(u, f)) == null ? void 0 : _a2.get;
          k ? u[f] = p : u.$set({ [f]: p });
        }
      }
    });
  }), i.forEach((f) => {
    Et(c.prototype, f, {
      get() {
        var _a2;
        return (_a2 = this.$$c) == null ? void 0 : _a2[f];
      }
    });
  }), r && (c = r(c)), t.element = /** @type {any} */
  c, c;
}
class qo {
  constructor() {
    __publicField(this, "verbose", false);
  }
  info(e) {
    this.verbose && console.log(e);
  }
  error(e, s) {
    this.verbose && console.error(e, s);
  }
}
const N = new qo();
function Wo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var tt = { exports: {} }, Ho = tt.exports, Cs;
function Vo() {
  return Cs || (Cs = 1, (function(t, e) {
    (function(s, i) {
      var o = "1.0.41", r = "", c = "?", f = "function", p = "undefined", u = "object", k = "string", y = "major", n = "model", d = "name", a = "type", l = "vendor", m = "version", $ = "architecture", A = "console", g = "mobile", b = "tablet", F = "smarttv", P = "wearable", ie = "embedded", Z = 500, ye = "Amazon", oe = "Apple", He = "ASUS", ct = "BlackBerry", Le = "Browser", Ce = "Chrome", Ut = "Edge", Re = "Firefox", Oe = "Google", lt = "Honor", J = "Huawei", Bt = "Lenovo", Ae = "LG", Ve = "Microsoft", je = "Motorola", $e = "Nvidia", dt = "OnePlus", _e2 = "Opera", Ye = "OPPO", Ee = "Samsung", ut = "Sharp", Q = "Sony", Xe = "Xiaomi", Fe = "Zebra", Ze = "Facebook", Je = "Chromium OS", Se = "Mac OS", me = " Browser", ft = function(L, _) {
        var x = {};
        for (var T in L)
          _[T] && _[T].length % 2 === 0 ? x[T] = _[T].concat(L[T]) : x[T] = L[T];
        return x;
      }, pe = function(L) {
        for (var _ = {}, x = 0; x < L.length; x++)
          _[L[x].toUpperCase()] = L[x];
        return _;
      }, Y = function(L, _) {
        return typeof L === k ? h(_).indexOf(h(L)) !== -1 : false;
      }, h = function(L) {
        return L.toLowerCase();
      }, M = function(L) {
        return typeof L === k ? L.replace(/[^\d\.]/g, r).split(".")[0] : i;
      }, D = function(L, _) {
        if (typeof L === k)
          return L = L.replace(/^\s\s*/, r), typeof _ === p ? L : L.substring(0, Z);
      }, C = function(L, _) {
        for (var x = 0, T, de, re, E, w, ne; x < _.length && !w; ) {
          var zt = _[x], ys = _[x + 1];
          for (T = de = 0; T < zt.length && !w && zt[T]; )
            if (w = zt[T++].exec(L), w)
              for (re = 0; re < ys.length; re++)
                ne = w[++de], E = ys[re], typeof E === u && E.length > 0 ? E.length === 2 ? typeof E[1] == f ? this[E[0]] = E[1].call(this, ne) : this[E[0]] = E[1] : E.length === 3 ? typeof E[1] === f && !(E[1].exec && E[1].test) ? this[E[0]] = ne ? E[1].call(this, ne, E[2]) : i : this[E[0]] = ne ? ne.replace(E[1], E[2]) : i : E.length === 4 && (this[E[0]] = ne ? E[3].call(this, ne.replace(E[1], E[2])) : i) : this[E] = ne || i;
          x += 2;
        }
      }, O = function(L, _) {
        for (var x in _)
          if (typeof _[x] === u && _[x].length > 0) {
            for (var T = 0; T < _[x].length; T++)
              if (Y(_[x][T], L))
                return x === c ? i : x;
          } else if (Y(_[x], L))
            return x === c ? i : x;
        return _.hasOwnProperty("*") ? _["*"] : L;
      }, z = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, Qe = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        "8.1": "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      }, hs = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [m, [d, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [m, [d, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [d, m],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [m, [d, _e2 + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [m, [d, _e2 + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [m, [d, _e2]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [m, [d, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [m, [d, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115)browser\/([\d\.]+)/i,
            // HeyTap/Ovi/115
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [d, m],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [m, [d, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [m, [d, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [m, [d, "UC" + Le]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [m, [d, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [m, [d, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [m, [d, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [m, [d, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [m, [d, "Smart Lenovo " + Le]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[d, /(.+)/, "$1 Secure " + Le], m],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [m, [d, Re + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [m, [d, _e2 + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [m, [d, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [m, [d, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [m, [d, _e2 + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [m, [d, "MIUI" + me]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [m, [d, Re]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [m, [d, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[d, /(.+)/, "$1Browser"], m],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[d, /(.+)/, "$1" + me], m],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [m, [d, Ee + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [m, [d, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[d, "Sogou Mobile"], m],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [d, m],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [d],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [m, d],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[d, Ze], m],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /(daum)apps[\/ ]([\w\.]+)/i,
            // Daum App
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [d, m],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [m, [d, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [m, [d, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [m, [d, Ce + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[d, Ce + " WebView"], m],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [m, [d, "Android " + Le]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [d, m],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [m, [d, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [m, d],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [d, [m, O, z]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [d, m],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[d, "Netscape"], m],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [d, m],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [m, [d, Re + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
            /\b(links) \(([\w\.]+)/i
            // Links
          ],
          [d, [m, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [d, [m, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i
            // AMD64 (x64)
          ],
          [[$, "amd64"]],
          [
            /(ia32(?=;))/i,
            // IA32 (quicktime)
            /\b((i[346]|x)86)(pc)?\b/i
            // IA32 (x86)
          ],
          [[$, "ia32"]],
          [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
            // ARM64
          ],
          [[$, "arm64"]],
          [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[$, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
          ],
          [[$, "arm"]],
          [
            /((ppc|powerpc)(64)?)( mac|;|\))/i
            // PowerPC
          ],
          [[$, /ower/, r, h]],
          [
            / sun4\w[;\)]/i
            // SPARC
          ],
          [[$, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[$, h]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [n, [l, Ee], [a, b]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [n, [l, Ee], [a, g]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [n, [l, oe], [a, g]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [n, [l, oe], [a, b]],
          [
            /(macintosh);/i
          ],
          [n, [l, oe]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [n, [l, ut], [a, g]],
          [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
          ],
          [n, [l, lt], [a, b]],
          [
            /honor([-\w ]+)[;\)]/i
          ],
          [n, [l, lt], [a, g]],
          [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
          ],
          [n, [l, J], [a, b]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [n, [l, J], [a, g]],
          [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[n, /_/g, " "], [l, Xe], [a, b]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
            // Xiaomi Mi
            / ([\w ]+) miui\/v?\d/i
          ],
          [[n, /_/g, " "], [l, Xe], [a, g]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [n, [l, Ye], [a, g]],
          [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
          ],
          [n, [l, O, { OnePlus: ["304", "403", "203"], "*": Ye }], [a, b]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [n, [l, "Vivo"], [a, g]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [n, [l, "Realme"], [a, g]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [n, [l, je], [a, g]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [n, [l, je], [a, b]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [n, [l, Ae], [a, b]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [n, [l, Ae], [a, g]],
          [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
          ],
          [n, [l, Bt], [a, b]],
          [
            // Nokia
            /(nokia) (t[12][01])/i
          ],
          [l, n, [a, b]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*))/i
          ],
          [[n, /_/g, " "], [a, g], [l, "Nokia"]],
          [
            // Google
            /(pixel (c|tablet))\b/i
            // Google Pixel C/Tablet
          ],
          [n, [l, Oe], [a, b]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [n, [l, Oe], [a, g]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [n, [l, Q], [a, g]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[n, "Xperia Tablet"], [l, Q], [a, b]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [n, [l, dt], [a, g]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [n, [l, ye], [a, b]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[n, /(.+)/g, "Fire Phone $1"], [l, ye], [a, g]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [n, l, [a, b]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [n, [l, ct], [a, g]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [n, [l, He], [a, b]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [n, [l, He], [a, g]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [n, [l, "HTC"], [a, b]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [l, [n, /_/g, " "], [a, g]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [n, [l, "TCL"], [a, b]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[l, h], n, [a, O, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [n, [l, "Acer"], [a, b]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [n, [l, "Meizu"], [a, g]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [n, [l, "Ulefone"], [a, g]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [n, [l, "Energizer"], [a, g]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [n, [l, "Cat"], [a, g]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [n, [l, "Smartfren"], [a, g]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [n, [l, "Nothing"], [a, g]],
          [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
          ],
          [n, [l, "Archos"], [a, b]],
          [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
          ],
          [n, [l, "Archos"], [a, g]],
          [
            // MIXED
            /(imo) (tab \w+)/i,
            // IMO
            /(infinix) (x1101b?)/i
            // Infinix XPad
          ],
          [l, n, [a, b]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
            /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
            // HMD/IMO
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
            // Lenovo
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [l, n, [a, g]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [l, n, [a, b]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [n, [l, Ve], [a, b]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [n, [l, "Fairphone"], [a, g]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [n, [l, "AT&T"], [a, g]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [n, [l, "Siemens"], [a, g]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [n, [l, "RCA"], [a, b]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [n, [l, "Dell"], [a, b]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [n, [l, "Verizon"], [a, b]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [n, [l, "Barnes & Noble"], [a, b]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [n, [l, "NuVision"], [a, b]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [n, [l, "ZTE"], [a, b]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [n, [l, "ZTE"], [a, g]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [n, [l, "Swiss"], [a, g]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [n, [l, "Swiss"], [a, b]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [n, [l, "Zeki"], [a, b]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[l, "Dragon Touch"], n, [a, b]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [n, [l, "Insignia"], [a, b]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [n, [l, "NextBook"], [a, b]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[l, "Voice"], n, [a, g]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[l, "LvTel"], n, [a, g]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [n, [l, "Essential"], [a, g]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [n, [l, "Envizen"], [a, b]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [n, [l, "MachSpeed"], [a, b]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [n, [l, "Rotor"], [a, b]],
          [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
            // Nvidia Tablets
          ],
          [n, [l, $e], [a, b]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [l, n, [a, g]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[n, /\./g, " "], [l, Ve], [a, g]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [n, [l, Fe], [a, b]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [n, [l, Fe], [a, g]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [l, [a, F]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[n, /^/, "SmartTV"], [l, Ee], [a, F]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[l, Ae], [a, F]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [l, [n, oe + " TV"], [a, F]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[n, Ce + "cast"], [l, Oe], [a, F]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [n, [l, ye], [a, F]],
          [
            /(shield \w+ tv)/i
            // Nvidia Shield TV
          ],
          [n, [l, $e], [a, F]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [n, [l, ut], [a, F]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [n, [l, Q], [a, F]],
          [
            /(mi(tv|box)-?\w+) bui/i
            // Xiaomi
          ],
          [n, [l, Xe], [a, F]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [l, n, [a, F]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[l, D], [n, D], [a, F]],
          [
            // SmartTV from Unidentified Vendors
            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
          ],
          [n, [a, F]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          ],
          [[a, F]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [l, n, [a, A]],
          [
            /droid.+; (shield)( bui|\))/i
            // Nvidia Portable
          ],
          [n, [l, $e], [a, A]],
          [
            /(playstation \w+)/i
            // Playstation
          ],
          [n, [l, Q], [a, A]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [n, [l, Ve], [a, A]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
            // Samsung Galaxy Watch
          ],
          [n, [l, Ee], [a, P]],
          [
            /((pebble))app/i,
            // Pebble
            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
            // Asus ZenWatch / LG Watch / Pixel Watch
          ],
          [l, n, [a, P]],
          [
            /(ow(?:19|20)?we?[1-3]{1,3})/i
            // Oppo Watch
          ],
          [n, [l, Ye], [a, P]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [n, [l, oe], [a, P]],
          [
            /(opwwe\d{3})/i
            // OnePlus Watch
          ],
          [n, [l, dt], [a, P]],
          [
            /(moto 360)/i
            // Motorola 360
          ],
          [n, [l, je], [a, P]],
          [
            /(smartwatch 3)/i
            // Sony SmartWatch
          ],
          [n, [l, Q], [a, P]],
          [
            /(g watch r)/i
            // LG G Watch R
          ],
          [n, [l, Ae], [a, P]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [n, [l, Fe], [a, P]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [n, [l, Oe], [a, P]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [l, n, [a, P]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [n, [l, Ze], [a, P]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [l, [a, ie]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [n, [l, ye], [a, ie]],
          [
            /(homepod).+mac os/i
            // Apple HomePod
          ],
          [n, [l, oe], [a, ie]],
          [
            /windows iot/i
          ],
          [[a, ie]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [n, [a, g]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [n, [a, b]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[a, b]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[a, g]],
          [
            /droid .+?; ([\w\. -]+)( bui|\))/i
            // Generic Android Device
          ],
          [n, [l, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [m, [d, Ut + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [d, m],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [m, [d, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
            // LibWeb
          ],
          [d, m],
          [
            /ladybird\//i
          ],
          [[d, "LibWeb"]],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [m, d]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [d, m],
          [
            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [d, [m, O, Qe]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[m, O, Qe], [d, "Windows"]],
          [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[m, /_/g, "."], [d, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[d, Se], [m, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [m, d],
          [
            /(ubuntu) ([\w\.]+) like android/i
            // Ubuntu Touch
          ],
          [[d, /(.+)/, "$1 Touch"], m],
          [
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
          ],
          [d, m],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [m, [d, ct]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [m, [d, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [m, [d, Re + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [m, [d, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [m, [d, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [m, [d, Ce + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[d, Je], m],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [d, m],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[d, "Solaris"], m],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [d, m]
        ]
      }, G = function(L, _) {
        if (typeof L === u && (_ = L, L = i), !(this instanceof G))
          return new G(L, _).getResult();
        var x = typeof s !== p && s.navigator ? s.navigator : i, T = L || (x && x.userAgent ? x.userAgent : r), de = x && x.userAgentData ? x.userAgentData : i, re = _ ? ft(hs, _) : hs, E = x && x.userAgent == T;
        return this.getBrowser = function() {
          var w = {};
          return w[d] = i, w[m] = i, C.call(w, T, re.browser), w[y] = M(w[m]), E && x && x.brave && typeof x.brave.isBrave == f && (w[d] = "Brave"), w;
        }, this.getCPU = function() {
          var w = {};
          return w[$] = i, C.call(w, T, re.cpu), w;
        }, this.getDevice = function() {
          var w = {};
          return w[l] = i, w[n] = i, w[a] = i, C.call(w, T, re.device), E && !w[a] && de && de.mobile && (w[a] = g), E && w[n] == "Macintosh" && x && typeof x.standalone !== p && x.maxTouchPoints && x.maxTouchPoints > 2 && (w[n] = "iPad", w[a] = b), w;
        }, this.getEngine = function() {
          var w = {};
          return w[d] = i, w[m] = i, C.call(w, T, re.engine), w;
        }, this.getOS = function() {
          var w = {};
          return w[d] = i, w[m] = i, C.call(w, T, re.os), E && !w[d] && de && de.platform && de.platform != "Unknown" && (w[d] = de.platform.replace(/chrome os/i, Je).replace(/macos/i, Se)), w;
        }, this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        }, this.getUA = function() {
          return T;
        }, this.setUA = function(w) {
          return T = typeof w === k && w.length > Z ? D(w, Z) : w, this;
        }, this.setUA(T), this;
      };
      G.VERSION = o, G.BROWSER = pe([d, m, y]), G.CPU = pe([$]), G.DEVICE = pe([n, l, a, A, g, F, b, P, ie]), G.ENGINE = G.OS = pe([d, m]), t.exports && (e = t.exports = G), e.UAParser = G;
      var Pe = typeof s !== p && (s.jQuery || s.Zepto);
      if (Pe && !Pe.ua) {
        var ht = new G();
        Pe.ua = ht.getResult(), Pe.ua.get = function() {
          return ht.getUA();
        }, Pe.ua.set = function(L) {
          ht.setUA(L);
          var _ = ht.getResult();
          for (var x in _)
            Pe.ua[x] = _[x];
        };
      }
    })(typeof window == "object" ? window : Ho);
  })(tt, tt.exports)), tt.exports;
}
var jo = Vo();
const Yo = /* @__PURE__ */ Wo(jo), Xo = new Yo(), wi = Xo.getResult(), Zo = (_a = wi.engine.name) == null ? void 0 : _a.toLowerCase(), _s = Number((_b = wi.engine.version) == null ? void 0 : _b.split(".")[0]), jt = {
  "0x0001": "Escape",
  "0x0002": "Digit1",
  "0x0003": "Digit2",
  "0x0004": "Digit3",
  "0x0005": "Digit4",
  "0x0006": "Digit5",
  "0x0007": "Digit6",
  "0x0008": "Digit7",
  "0x0009": "Digit8",
  "0x000A": "Digit9",
  "0x000B": "Digit0",
  "0x000C": "Minus",
  "0x000D": "Equal",
  "0x000E": "Backspace",
  "0x000F": "Tab",
  "0x0010": "KeyQ",
  "0x0011": "KeyW",
  "0x0012": "KeyE",
  "0x0013": "KeyR",
  "0x0014": "KeyT",
  "0x0015": "KeyY",
  "0x0016": "KeyU",
  "0x0017": "KeyI",
  "0x0018": "KeyO",
  "0x0019": "KeyP",
  "0x001A": "BracketLeft",
  "0x001B": "BracketRight",
  "0x001C": "Enter",
  "0x001D": "ControlLeft",
  "0x001E": "KeyA",
  "0x001F": "KeyS",
  "0x0020": "KeyD",
  "0x0021": "KeyF",
  "0x0022": "KeyG",
  "0x0023": "KeyH",
  "0x0024": "KeyJ",
  "0x0025": "KeyK",
  "0x0026": "KeyL",
  "0x0027": "Semicolon",
  "0x0028": "Quote",
  "0x0029": "Backquote",
  "0x002A": "ShiftLeft",
  "0x002B": "Backslash",
  "0x002C": "KeyZ",
  "0x002D": "KeyX",
  "0x002E": "KeyC",
  "0x002F": "KeyV",
  "0x0030": "KeyB",
  "0x0031": "KeyN",
  "0x0032": "KeyM",
  "0x0033": "Comma",
  "0x0034": "Period",
  "0x0035": "Slash",
  "0x0036": "ShiftRight",
  "0x0037": "NumpadMultiply",
  "0x0038": "AltLeft",
  "0x0039": "Space",
  "0x003A": "CapsLock",
  "0x003B": "F1",
  "0x003C": "F2",
  "0x003D": "F3",
  "0x003E": "F4",
  "0x003F": "F5",
  "0x0040": "F6",
  "0x0041": "F7",
  "0x0042": "F8",
  "0x0043": "F9",
  "0x0044": "F10",
  "0x0045": "Pause",
  "0x0046": "ScrollLock",
  "0x0047": "Numpad7",
  "0x0048": "Numpad8",
  "0x0049": "Numpad9",
  "0x004A": "NumpadSubtract",
  "0x004B": "Numpad4",
  "0x004C": "Numpad5",
  "0x004D": "Numpad6",
  "0x004E": "NumpadAdd",
  "0x004F": "Numpad1",
  "0x0050": "Numpad2",
  "0x0051": "Numpad3",
  "0x0052": "Numpad0",
  "0x0053": "NumpadDecimal",
  "0x0056": "IntlBackslash",
  "0x0057": "F11",
  "0x0058": "F12",
  "0x0059": "NumpadEqual",
  "0x0064": "F13",
  "0x0065": "F14",
  "0x0066": "F15",
  "0x0067": "F16",
  "0x0068": "F17",
  "0x0069": "F18",
  "0x006A": "F19",
  "0x006B": "F20",
  "0x006C": "F21",
  "0x006D": "F22",
  "0x006E": "F23",
  "0x0070": "KanaMode",
  "0x0071": "Lang2",
  "0x0072": "Lang1",
  "0x0073": "IntlRo",
  "0x0076": "F24",
  "0x0079": "Convert",
  "0x007B": "NonConvert",
  "0x007D": "IntlYen",
  "0x007E": "NumpadComma",
  "0xE010": "MediaTrackPrevious",
  "0xE019": "MediaTrackNext",
  "0xE01C": "NumpadEnter",
  "0xE01D": "ControlRight",
  "0xE021": "LaunchApp2",
  "0xE022": "MediaPlayPause",
  "0xE024": "MediaStop",
  "0xE032": "BrowserHome",
  "0xE035": "NumpadDivide",
  "0xE037": "PrintScreen",
  "0xE038": "AltRight",
  "0xE045": "NumLock",
  "0xE046": "Pause",
  "0xE047": "Home",
  "0xE048": "ArrowUp",
  "0xE049": "PageUp",
  "0xE04B": "ArrowLeft",
  "0xE04D": "ArrowRight",
  "0xE04F": "End",
  "0xE050": "ArrowDown",
  "0xE051": "PageDown",
  "0xE052": "Insert",
  "0xE053": "Delete",
  "0xE05D": "ContextMenu",
  "0xE05E": "Power",
  "0xE065": "BrowserSearch",
  "0xE066": "BrowserFavorites",
  "0xE067": "BrowserRefresh",
  "0xE068": "BrowserStop",
  "0xE069": "BrowserForward",
  "0xE06A": "BrowserBack",
  "0xE06B": "LaunchApp1",
  "0xE06C": "LaunchMail",
  "0xE06D": "MediaSelect"
}, Es = {
  "0x0077": "Lang4",
  "0x0078": "Lang3",
  "0xE008": "Undo",
  "0xE00A": "Paste",
  "0xE017": "Cut",
  "0xE018": "Copy",
  "0xE020": "AudioVolumeMute",
  "0xE02C": "Eject",
  "0xE02E": "AudioVolumeDown",
  "0xE030": "AudioVolumeUp",
  "0xE03B": "Help",
  "0xE05B": "MetaLeft",
  "0xE05C": "MetaRight",
  "0xE05F": "Sleep",
  "0xE063": "WakeUp"
}, Jo = {
  "0x0054": "PrintScreen",
  "0xE020": "VolumeMute",
  // The documentation says it's 'AudioVolumeMute', but the actual test shows that it's 'VolumeMute'.
  "0xE02E": "VolumeDown",
  "0xE030": "VolumeUp",
  "0xE05B": _s > 117 ? "MetaLeft" : "OSLeft",
  "0xE05C": _s > 117 ? "MetaRight" : "OSRight"
}, Qo = {
  blink: Yt({ ...jt, ...Es }),
  gecko: Yt({ ...jt, ...Jo }),
  webkit: Yt({ ...jt, ...Es })
};
function Yt(t) {
  const e = {};
  for (const [s, i] of Object.entries(t))
    e[i] = s;
  return e;
}
const Go = function(t) {
  const e = Qo[Zo];
  return parseInt(e[t], 16);
};
function gi() {
  return {
    shift: false,
    ctrl: false,
    alt: false,
    meta: false,
    hyper: false,
    capsLock: false,
    numLock: false,
    scrollLock: false
  };
}
function pt(t) {
  const e = gi();
  return e.shift = t.shiftKey, e.ctrl = t.ctrlKey, e.alt = t.altKey, e.meta = t.metaKey, typeof t.getModifierState == "function" && (e.hyper = t.getModifierState("OS") || t.getModifierState("Super") || t.getModifierState("Hyper") || t.getModifierState("Win"), e.capsLock = t.getModifierState("CapsLock"), e.numLock = t.getModifierState("NumLock"), e.scrollLock = t.getModifierState("ScrollLock")), e;
}
const _v = class _v {
  constructor() {
    __publicField(this, "onKeyDown", null);
    __publicField(this, "onKeyUp", null);
    // Guacamole.Keyboard.pressed: the state of every key, indexed by keysym.
    __publicField(this, "pressed", {});
    // Guacamole.Keyboard.modifiers: the modifier state as last reconciled.
    __publicField(this, "modifiers", gi());
    __publicField(this, "implicitlyPressed", {});
    __publicField(this, "lastKeydownResult", {});
    __publicField(this, "recentKeysym", {});
    __publicField(this, "lastToggleKeydownState", {});
    __publicField(this, "eventLog", []);
    __publicField(this, "keyRepeatTimeout", null);
    __publicField(this, "keyRepeatInterval", null);
    __publicField(this, "quirks", {
      keyupUnreliable: false,
      altIsTypableOnly: false,
      lockKeyIsModifierToggle: false
    });
    const e = typeof navigator < "u" && typeof navigator.platform == "string" ? navigator.platform : "";
    e !== "" && (e.match(/ipad|iphone|ipod/i) ? this.quirks.keyupUnreliable = true : e.match(/^mac/i) && (this.quirks.altIsTypableOnly = true, this.quirks.lockKeyIsModifierToggle = true));
  }
  static getKeysym(e, s) {
    return e ? e[s] ?? e[0] : null;
  }
  static isPrintable(e) {
    return e >= 0 && e <= 255 || (e & 4294901760) === 16777216;
  }
  static isControlCharacter(e) {
    return e <= 31 || e >= 127 && e <= 159;
  }
  static keysymFromCharcode(e) {
    return _v.isControlCharacter(e) ? 65280 | e : e >= 0 && e <= 255 ? e : e >= 256 && e <= 1114111 ? 16777216 | e : null;
  }
  static keysymFromKeycode(e, s) {
    return _v.getKeysym(_v.keycodeKeysyms[e], s);
  }
  static keysymFromKeyIdentifier(e, s, i) {
    if (e === void 0 || e === "")
      return null;
    let o;
    const r = e.indexOf("U+");
    if (r >= 0) {
      const f = e.substring(r + 2);
      o = String.fromCharCode(parseInt(f, 16));
    } else if (e.length === 1 && s !== 3)
      o = e;
    else
      return _v.getKeysym(_v.keyidentifierKeysym[e], s);
    i === true ? o = o.toUpperCase() : i === false && (o = o.toLowerCase());
    const c = o.charCodeAt(0);
    return _v.keysymFromCharcode(c);
  }
  static keyIdentifierSane(e, s) {
    if (s === void 0 || s === "")
      return false;
    const i = s.indexOf("U+");
    if (i === -1)
      return true;
    const o = parseInt(s.substring(i + 2), 16);
    return e !== o || e >= 65 && e <= 90 || e >= 48 && e <= 57;
  }
  static isCapsLockKey(e) {
    return _v.toggleModifierKeysymsByType.capsLock.indexOf(e) !== -1;
  }
  static isNumLockKey(e) {
    return _v.toggleModifierKeysymsByType.numLock.indexOf(e) !== -1;
  }
  static isScrollLockKey(e) {
    return _v.toggleModifierKeysymsByType.scrollLock.indexOf(e) !== -1;
  }
  static isLockKey(e) {
    return _v.isCapsLockKey(e) || _v.isNumLockKey(e) || _v.isScrollLockKey(e);
  }
  static isMetaKey(e) {
    return _v.modifierKeysymsByType.meta.indexOf(e) !== -1;
  }
  static isModifierKey(e) {
    return _v.modifierKeysyms[e] === true;
  }
  static getEventLocation(e) {
    return "location" in e ? e.location : 0;
  }
  // ---- Event construction (KeydownEvent / KeypressEvent / KeyupEvent) ------------------------
  makeKeydown(e) {
    const s = {
      type: "keydown",
      keyCode: e.which !== 0 ? e.which : e.keyCode,
      keyIdentifier: e.keyIdentifier,
      key: e.key,
      location: _v.getEventLocation(e),
      modifiers: pt(e),
      keysym: null,
      reliable: false,
      keyupReliable: !this.quirks.keyupUnreliable,
      defaultPrevented: false
    };
    s.keysym = _v.keysymFromKeyIdentifier(s.key, s.location) ?? _v.keysymFromKeycode(s.keyCode, s.location), s.keysym !== null && !_v.isPrintable(s.keysym) && (s.reliable = true), s.keysym === null && _v.keyIdentifierSane(s.keyCode, s.keyIdentifier) && (s.keysym = _v.keysymFromKeyIdentifier(s.keyIdentifier, s.location, s.modifiers.shift)), (s.modifiers.meta && s.keysym !== null && !_v.isModifierKey(s.keysym) || s.keysym !== null && _v.isLockKey(s.keysym) && this.quirks.lockKeyIsModifierToggle) && (s.keyupReliable = false);
    const i = !s.modifiers.ctrl && !this.quirks.altIsTypableOnly;
    return this.quirks.altIsTypableOnly && (s.keysym === 65513 || s.keysym === 65514) && (s.keysym = 65027), (!s.modifiers.alt && s.modifiers.ctrl || i && s.modifiers.alt || s.modifiers.meta || s.modifiers.hyper) && (s.reliable = true), this.recentKeysym[s.keyCode] = s.keysym, s;
  }
  makeKeypress(e) {
    const s = e.which !== 0 ? e.which : e.keyCode;
    return {
      type: "keypress",
      keyCode: s,
      keyIdentifier: e.keyIdentifier,
      key: e.key,
      location: _v.getEventLocation(e),
      modifiers: pt(e),
      keysym: _v.keysymFromCharcode(s),
      reliable: true,
      keyupReliable: !this.quirks.keyupUnreliable,
      defaultPrevented: false
    };
  }
  makeKeyup(e) {
    const s = {
      type: "keyup",
      keyCode: e.which !== 0 ? e.which : e.keyCode,
      keyIdentifier: e.keyIdentifier,
      key: e.key,
      location: _v.getEventLocation(e),
      modifiers: pt(e),
      keysym: null,
      reliable: true,
      keyupReliable: !this.quirks.keyupUnreliable,
      defaultPrevented: false
    };
    return s.keysym = _v.keysymFromKeycode(s.keyCode, s.location) ?? _v.keysymFromKeyIdentifier(s.key, s.location), (s.keysym === null || !this.pressed[s.keysym]) && (s.keysym = this.recentKeysym[s.keyCode] ?? s.keysym), s;
  }
  // ---- Press / release -----------------------------------------------------------------------
  press(e) {
    if (e === null)
      return false;
    if (!this.pressed[e] && (this.pressed[e] = true, this.onKeyDown)) {
      const s = this.onKeyDown(e);
      return _v.isCapsLockKey(e) ? this.modifiers.capsLock = !this.modifiers.capsLock : _v.isNumLockKey(e) ? this.modifiers.numLock = !this.modifiers.numLock : _v.isScrollLockKey(e) && (this.modifiers.scrollLock = !this.modifiers.scrollLock), this.lastKeydownResult[e] = s, this.keyRepeatTimeout !== null && clearTimeout(this.keyRepeatTimeout), this.keyRepeatInterval !== null && clearInterval(this.keyRepeatInterval), _v.noRepeat[e] || (this.keyRepeatTimeout = setTimeout(() => {
        this.keyRepeatInterval = setInterval(() => {
          this.onKeyUp && this.onKeyUp(e), this.onKeyDown && this.onKeyDown(e);
        }, 50);
      }, 500)), s;
    }
    return this.lastKeydownResult[e] || false;
  }
  release(e) {
    e !== null && this.pressed[e] && (delete this.pressed[e], delete this.implicitlyPressed[e], this.keyRepeatTimeout !== null && clearTimeout(this.keyRepeatTimeout), this.keyRepeatInterval !== null && clearInterval(this.keyRepeatInterval), this.onKeyUp && this.onKeyUp(e));
  }
  type(e) {
    for (let s = 0; s < e.length; s++) {
      const i = e.codePointAt(s) ?? e.charCodeAt(s);
      e.charCodeAt(s) !== i && s++;
      const o = _v.keysymFromCharcode(i);
      this.press(o), this.release(o);
    }
  }
  reset() {
    for (const e in this.pressed)
      this.release(parseInt(e));
    this.eventLog = [];
  }
  // ---- Modifier reconciliation ---------------------------------------------------------------
  updateModifierState(e, s, i) {
    const o = i.modifiers[e], r = this.modifiers[e];
    if (!(i.keysym !== null && s.indexOf(i.keysym) !== -1)) {
      if (r && o === false)
        for (const c of s)
          this.release(c);
      else if (!r && o) {
        for (const f of s)
          if (this.pressed[f])
            return;
        const c = s[0];
        i.keysym !== null && (this.implicitlyPressed[c] = true), this.press(c);
      }
    }
  }
  updateToggleModifierState(e, s, i) {
    const o = i.modifiers[e];
    if (o !== void 0) {
      if (i.keysym === s[0] && i.type === "keydown") {
        this.lastToggleKeydownState[e] = o;
        return;
      }
      if (!(i.keysym === s[0] && i.type === "keyup" && this.lastToggleKeydownState[e] === o) && o !== this.modifiers[e]) {
        const r = s[0];
        this.press(r), this.release(r);
      }
    }
  }
  syncToggleModifierStates(e) {
    for (const s of ["capsLock", "numLock", "scrollLock"])
      this.updateToggleModifierState(s, _v.toggleModifierKeysymsByType[s], {
        modifiers: e,
        keysym: null
      });
  }
  syncModifierStates(e) {
    this.updateModifierState("alt", _v.modifierKeysymsByType.alt, e), this.updateModifierState("shift", _v.modifierKeysymsByType.shift, e), this.updateModifierState("ctrl", _v.modifierKeysymsByType.ctrl, e), this.updateModifierState("meta", _v.modifierKeysymsByType.meta, e), this.updateModifierState("hyper", _v.modifierKeysymsByType.hyper, e), this.modifiers.shift = e.modifiers.shift, this.modifiers.ctrl = e.modifiers.ctrl, this.modifiers.alt = e.modifiers.alt, this.modifiers.meta = e.modifiers.meta, this.modifiers.hyper = e.modifiers.hyper, this.updateToggleModifierState("capsLock", _v.toggleModifierKeysymsByType.capsLock, e), this.updateToggleModifierState("numLock", _v.toggleModifierKeysymsByType.numLock, e), this.updateToggleModifierState("scrollLock", _v.toggleModifierKeysymsByType.scrollLock, e);
  }
  isStateImplicit() {
    for (const e in this.pressed)
      if (!this.implicitlyPressed[e])
        return false;
    return true;
  }
  releaseSimulatedAltgr(e) {
    !this.modifiers.ctrl || !this.modifiers.alt || e >= 65 && e <= 90 || e >= 97 && e <= 122 || (e <= 255 || (e & 4278190080) === 16777216) && (this.release(65507), this.release(65508), this.release(65513), this.release(65514));
  }
  // ---- Event log interpretation --------------------------------------------------------------
  interpretEvents() {
    let e = this.interpretEvent();
    if (!e)
      return false;
    let s;
    do
      s = e, e = this.interpretEvent();
    while (e !== null);
    return this.isStateImplicit() && this.reset(), s.defaultPrevented;
  }
  interpretEvent() {
    const e = this.eventLog[0];
    if (e === void 0)
      return null;
    if (e.type === "keydown") {
      let s = null, i = [];
      if (e.keysym !== null && _v.isMetaKey(e.keysym)) {
        if (this.eventLog.length === 1)
          return null;
        if (this.eventLog[1].keysym !== e.keysym) {
          if (!this.eventLog[1].modifiers.meta)
            return this.eventLog.shift() ?? null;
        } else if (this.eventLog[1].type === "keydown")
          return this.eventLog.shift() ?? null;
      }
      if (e.keysym === 65507 && !e.modifiers.ctrl)
        return this.eventLog.shift() ?? null;
      if (e.reliable ? (s = e.keysym, i = this.eventLog.splice(0, 1)) : this.eventLog.length > 1 && this.eventLog[1].type === "keypress" ? (s = this.eventLog[1].keysym, i = this.eventLog.splice(0, 2)) : this.eventLog.length > 1 && (s = e.keysym, i = this.eventLog.splice(0, 1)), i.length > 0) {
        if (this.syncModifierStates(e), s !== null) {
          this.releaseSimulatedAltgr(s);
          const o = !this.press(s);
          this.recentKeysym[e.keyCode] = s, e.keyupReliable || this.release(s);
          for (const r of i)
            r.defaultPrevented = o;
        }
        return e;
      }
    } else if (e.type === "keyup" && !this.quirks.keyupUnreliable) {
      const s = e.keysym;
      if (s !== null)
        this.release(s), delete this.recentKeysym[e.keyCode], e.defaultPrevented = true;
      else
        return this.reset(), e;
      return this.syncModifierStates(e), this.eventLog.shift() ?? null;
    } else
      return this.eventLog.shift() ?? null;
    return null;
  }
  // ---- Public entry points (replacing Keyboard.js listenTo) ----------------------------------
  // Returns true if the default action should be prevented.
  handleKeyDown(e) {
    const s = this.makeKeydown(e);
    return e.isComposing || s.keyCode === 229 ? false : (this.eventLog.push(s), this.interpretEvents());
  }
  handleKeyPress(e) {
    return this.eventLog.push(this.makeKeypress(e)), this.interpretEvents();
  }
  handleKeyUp(e) {
    return this.eventLog.push(this.makeKeyup(e)), this.interpretEvents();
  }
  updateModifiersFromMouse(e) {
    if (!this.onKeyDown && !this.onKeyUp)
      return;
    const s = pt(e);
    this.syncToggleModifierStates(s);
    const i = this.eventLog.length > 0 && this.eventLog[0].type === "keydown" && this.eventLog[0].keysym !== null && _v.isMetaKey(this.eventLog[0].keysym);
    s.meta && i && (this.eventLog.push({
      type: "mouse",
      keyCode: 0,
      keyIdentifier: void 0,
      key: void 0,
      location: 0,
      modifiers: s,
      keysym: null,
      reliable: false,
      keyupReliable: true,
      defaultPrevented: false
    }), this.interpretEvents());
  }
};
// ---- Keysym derivation (Keyboard.js free functions) ---------------------------------------
__publicField(_v, "keycodeKeysyms", {
  8: [65288],
  9: [65289],
  12: [65291, 65291, 65291, 65461],
  13: [65293],
  16: [65505, 65505, 65506],
  17: [65507, 65507, 65508],
  18: [65513, 65513, 65514],
  19: [65299],
  20: [65509],
  27: [65307],
  32: [32],
  33: [65365, 65365, 65365, 65465],
  34: [65366, 65366, 65366, 65459],
  35: [65367, 65367, 65367, 65457],
  36: [65360, 65360, 65360, 65463],
  37: [65361, 65361, 65361, 65460],
  38: [65362, 65362, 65362, 65464],
  39: [65363, 65363, 65363, 65462],
  40: [65364, 65364, 65364, 65458],
  45: [65379, 65379, 65379, 65456],
  46: [65535, 65535, 65535, 65454],
  91: [65511],
  92: [65512],
  93: [65383],
  96: [65456],
  97: [65457],
  98: [65458],
  99: [65459],
  100: [65460],
  101: [65461],
  102: [65462],
  103: [65463],
  104: [65464],
  105: [65465],
  106: [65450],
  107: [65451],
  109: [65453],
  110: [65454],
  111: [65455],
  112: [65470],
  113: [65471],
  114: [65472],
  115: [65473],
  116: [65474],
  117: [65475],
  118: [65476],
  119: [65477],
  120: [65478],
  121: [65479],
  122: [65480],
  123: [65481],
  144: [65407],
  145: [65300],
  225: [65027]
});
__publicField(_v, "keyidentifierKeysym", {
  Again: [65382],
  AllCandidates: [65341],
  Alphanumeric: [65328],
  Alt: [65513, 65513, 65514],
  Attn: [64782],
  AltGraph: [65027],
  ArrowDown: [65364],
  ArrowLeft: [65361],
  ArrowRight: [65363],
  ArrowUp: [65362],
  Backspace: [65288],
  CapsLock: [65509],
  Cancel: [65385],
  Clear: [65291],
  Convert: [65315],
  Copy: [64789],
  Crsel: [64796],
  CrSel: [64796],
  CodeInput: [65335],
  Compose: [65312],
  Control: [65507, 65507, 65508],
  ContextMenu: [65383],
  Delete: [65535],
  Down: [65364],
  End: [65367],
  Enter: [65293],
  EraseEof: [64774],
  Escape: [65307],
  Execute: [65378],
  Exsel: [64797],
  ExSel: [64797],
  F1: [65470],
  F2: [65471],
  F3: [65472],
  F4: [65473],
  F5: [65474],
  F6: [65475],
  F7: [65476],
  F8: [65477],
  F9: [65478],
  F10: [65479],
  F11: [65480],
  F12: [65481],
  F13: [65482],
  F14: [65483],
  F15: [65484],
  F16: [65485],
  F17: [65486],
  F18: [65487],
  F19: [65488],
  F20: [65489],
  F21: [65490],
  F22: [65491],
  F23: [65492],
  F24: [65493],
  Find: [65384],
  GroupFirst: [65036],
  GroupLast: [65038],
  GroupNext: [65032],
  GroupPrevious: [65034],
  FullWidth: [null],
  HalfWidth: [null],
  HangulMode: [65329],
  Hankaku: [65321],
  HanjaMode: [65332],
  Help: [65386],
  Hiragana: [65317],
  HiraganaKatakana: [65319],
  Home: [65360],
  Hyper: [65517, 65517, 65518],
  Insert: [65379],
  JapaneseHiragana: [65317],
  JapaneseKatakana: [65318],
  JapaneseRomaji: [65316],
  JunjaMode: [65336],
  KanaMode: [65325],
  KanjiMode: [65313],
  Katakana: [65318],
  Left: [65361],
  Meta: [65511, 65511, 65512],
  ModeChange: [65406],
  NonConvert: [65314],
  NumLock: [65407],
  PageDown: [65366],
  PageUp: [65365],
  Pause: [65299],
  Play: [64790],
  PreviousCandidate: [65342],
  PrintScreen: [65377],
  Redo: [65382],
  Right: [65363],
  Romaji: [65316],
  RomanCharacters: [null],
  Scroll: [65300],
  Select: [65376],
  Separator: [65452],
  Shift: [65505, 65505, 65506],
  SingleCandidate: [65340],
  Super: [65515, 65515, 65516],
  Tab: [65289],
  UIKeyInputDownArrow: [65364],
  UIKeyInputEscape: [65307],
  UIKeyInputLeftArrow: [65361],
  UIKeyInputRightArrow: [65363],
  UIKeyInputUpArrow: [65362],
  Up: [65362],
  Undo: [65381],
  Win: [65511, 65511, 65512],
  Zenkaku: [65320],
  ZenkakuHankaku: [65322]
});
__publicField(_v, "modifierKeysymsByType", {
  shift: [65505, 65506],
  ctrl: [65507, 65508],
  alt: [65513, 65514, 65027],
  meta: [65511, 65512],
  hyper: [65515, 65516]
});
__publicField(_v, "modifierKeysyms", (() => {
  const e = {};
  for (const s in _v.modifierKeysymsByType)
    for (const i of _v.modifierKeysymsByType[s])
      e[i] = true;
  return e;
})());
__publicField(_v, "toggleModifierKeysymsByType", {
  capsLock: [65509],
  numLock: [65407],
  scrollLock: [65300]
});
__publicField(_v, "noRepeat", {
  65027: true,
  65505: true,
  65506: true,
  65507: true,
  65508: true,
  65509: true,
  65511: true,
  65512: true,
  65513: true,
  65514: true,
  65515: true,
  65516: true
});
let v = _v;
const Xt = 1, kt = 2, er = 1, tr = 2, sr = 4, ir = 8, Zt = 65505, Ss = 65506, Ds = 65507, Ts = 65508, Rs = 65513, Os = 65514, Jt = 65027, Mi = 65509, xi = 65407, Li = 65300, or = 65325;
function rr(t) {
  return t.extended === true ? 57344 | t.scancode : t.scancode;
}
const nr = [
  { keysym: 32, scancode: 57 },
  { keysym: 65289, scancode: 15 },
  { keysym: 65288, scancode: 14 },
  { keysym: 65293, scancode: 28 },
  { keysym: 65307, scancode: 1 },
  { keysym: 65379, scancode: 82, extended: true },
  { keysym: 65535, scancode: 83, extended: true },
  { keysym: 65360, scancode: 71, extended: true },
  { keysym: 65367, scancode: 79, extended: true },
  { keysym: 65361, scancode: 75, extended: true },
  { keysym: 65362, scancode: 72, extended: true },
  { keysym: 65363, scancode: 77, extended: true },
  { keysym: 65364, scancode: 80, extended: true },
  { keysym: 65365, scancode: 73, extended: true },
  { keysym: 65366, scancode: 81, extended: true },
  { keysym: 65377, scancode: 55, extended: true },
  { keysym: 65407, scancode: 69 },
  { keysym: 65300, scancode: 70 },
  { keysym: 65509, scancode: 58 },
  { keysym: 65456, scancode: 82, clearMod: 1, setLocks: 2 },
  { keysym: 65457, scancode: 79, clearMod: 1, setLocks: 2 },
  { keysym: 65458, scancode: 80, clearMod: 1, setLocks: 2 },
  { keysym: 65459, scancode: 81, clearMod: 1, setLocks: 2 },
  { keysym: 65460, scancode: 75, clearMod: 1, setLocks: 2 },
  { keysym: 65461, scancode: 76, clearMod: 1, setLocks: 2 },
  { keysym: 65462, scancode: 77, clearMod: 1, setLocks: 2 },
  { keysym: 65463, scancode: 71, clearMod: 1, setLocks: 2 },
  { keysym: 65464, scancode: 72, clearMod: 1, setLocks: 2 },
  { keysym: 65465, scancode: 73, clearMod: 1, setLocks: 2 },
  { keysym: 65450, scancode: 55 },
  { keysym: 65451, scancode: 78 },
  { keysym: 65453, scancode: 74 },
  { keysym: 65454, scancode: 83 },
  { keysym: 65455, scancode: 53, extended: true },
  { keysym: 65470, scancode: 59 },
  { keysym: 65471, scancode: 60 },
  { keysym: 65472, scancode: 61 },
  { keysym: 65473, scancode: 62 },
  { keysym: 65474, scancode: 63 },
  { keysym: 65475, scancode: 64 },
  { keysym: 65476, scancode: 65 },
  { keysym: 65477, scancode: 66 },
  { keysym: 65478, scancode: 67 },
  { keysym: 65479, scancode: 68 },
  { keysym: 65480, scancode: 87 },
  { keysym: 65481, scancode: 88 },
  { keysym: 65505, scancode: 42 },
  { keysym: 65506, scancode: 54 },
  { keysym: 65507, scancode: 29 },
  { keysym: 65508, scancode: 29, extended: true },
  { keysym: 65513, scancode: 56 },
  { keysym: 65514, scancode: 56, extended: true },
  { keysym: 65511, scancode: 91, extended: true },
  { keysym: 65512, scancode: 92, extended: true },
  { keysym: 65515, scancode: 91, extended: true },
  { keysym: 65516, scancode: 92, extended: true },
  { keysym: 65383, scancode: 93, extended: true },
  { keysym: 65027, scancode: 56, extended: true },
  { keysym: 178, scancode: 41, clearMod: 3, clearLocks: 4 },
  { keysym: 38, scancode: 2, clearMod: 3, clearLocks: 4 },
  { keysym: 233, scancode: 3, clearMod: 3, clearLocks: 4 },
  { keysym: 34, scancode: 4, clearMod: 3, clearLocks: 4 },
  { keysym: 39, scancode: 5, clearMod: 3, clearLocks: 4 },
  { keysym: 40, scancode: 6, clearMod: 3, clearLocks: 4 },
  { keysym: 45, scancode: 7, clearMod: 3, clearLocks: 4 },
  { keysym: 232, scancode: 8, clearMod: 3, clearLocks: 4 },
  { keysym: 95, scancode: 9, clearMod: 3, clearLocks: 4 },
  { keysym: 231, scancode: 10, clearMod: 3, clearLocks: 4 },
  { keysym: 224, scancode: 11, clearMod: 3, clearLocks: 4 },
  { keysym: 41, scancode: 12, clearMod: 3, clearLocks: 4 },
  { keysym: 61, scancode: 13, clearMod: 3, clearLocks: 4 },
  { keysym: 97, scancode: 16, clearMod: 3, clearLocks: 4 },
  { keysym: 122, scancode: 17, clearMod: 3, clearLocks: 4 },
  { keysym: 101, scancode: 18, clearMod: 3, clearLocks: 4 },
  { keysym: 114, scancode: 19, clearMod: 3, clearLocks: 4 },
  { keysym: 116, scancode: 20, clearMod: 3, clearLocks: 4 },
  { keysym: 121, scancode: 21, clearMod: 3, clearLocks: 4 },
  { keysym: 117, scancode: 22, clearMod: 3, clearLocks: 4 },
  { keysym: 105, scancode: 23, clearMod: 3, clearLocks: 4 },
  { keysym: 111, scancode: 24, clearMod: 3, clearLocks: 4 },
  { keysym: 112, scancode: 25, clearMod: 3, clearLocks: 4 },
  { keysym: 36, scancode: 27, clearMod: 3, clearLocks: 4 },
  { keysym: 113, scancode: 30, clearMod: 3, clearLocks: 4 },
  { keysym: 115, scancode: 31, clearMod: 3, clearLocks: 4 },
  { keysym: 100, scancode: 32, clearMod: 3, clearLocks: 4 },
  { keysym: 102, scancode: 33, clearMod: 3, clearLocks: 4 },
  { keysym: 103, scancode: 34, clearMod: 3, clearLocks: 4 },
  { keysym: 104, scancode: 35, clearMod: 3, clearLocks: 4 },
  { keysym: 106, scancode: 36, clearMod: 3, clearLocks: 4 },
  { keysym: 107, scancode: 37, clearMod: 3, clearLocks: 4 },
  { keysym: 108, scancode: 38, clearMod: 3, clearLocks: 4 },
  { keysym: 109, scancode: 39, clearMod: 3, clearLocks: 4 },
  { keysym: 249, scancode: 40, clearMod: 3, clearLocks: 4 },
  { keysym: 42, scancode: 43, clearMod: 3, clearLocks: 4 },
  { keysym: 60, scancode: 86, clearMod: 3, clearLocks: 4 },
  { keysym: 119, scancode: 44, clearMod: 3, clearLocks: 4 },
  { keysym: 120, scancode: 45, clearMod: 3, clearLocks: 4 },
  { keysym: 99, scancode: 46, clearMod: 3, clearLocks: 4 },
  { keysym: 118, scancode: 47, clearMod: 3, clearLocks: 4 },
  { keysym: 98, scancode: 48, clearMod: 3, clearLocks: 4 },
  { keysym: 110, scancode: 49, clearMod: 3, clearLocks: 4 },
  { keysym: 44, scancode: 50, clearMod: 3, clearLocks: 4 },
  { keysym: 59, scancode: 51, clearMod: 3, clearLocks: 4 },
  { keysym: 58, scancode: 52, clearMod: 3, clearLocks: 4 },
  { keysym: 33, scancode: 53, clearMod: 3, clearLocks: 4 },
  { keysym: 49, scancode: 2, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 50, scancode: 3, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 51, scancode: 4, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 52, scancode: 5, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 53, scancode: 6, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 54, scancode: 7, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 55, scancode: 8, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 56, scancode: 9, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 57, scancode: 10, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 48, scancode: 11, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 176, scancode: 12, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 43, scancode: 13, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 65, scancode: 16, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 90, scancode: 17, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 69, scancode: 18, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 82, scancode: 19, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 84, scancode: 20, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 89, scancode: 21, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 85, scancode: 22, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 73, scancode: 23, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 79, scancode: 24, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 80, scancode: 25, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 163, scancode: 27, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 81, scancode: 30, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 83, scancode: 31, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 68, scancode: 32, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 70, scancode: 33, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 71, scancode: 34, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 72, scancode: 35, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 74, scancode: 36, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 75, scancode: 37, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 76, scancode: 38, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 77, scancode: 39, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 37, scancode: 40, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 181, scancode: 43, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 62, scancode: 86, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 87, scancode: 44, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 88, scancode: 45, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 67, scancode: 46, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 86, scancode: 47, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 66, scancode: 48, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 78, scancode: 49, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 63, scancode: 50, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 46, scancode: 51, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 47, scancode: 52, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 167, scancode: 53, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 178, scancode: 41, clearMod: 3, setLocks: 4 },
  { keysym: 49, scancode: 2, clearMod: 3, setLocks: 4 },
  { keysym: 50, scancode: 3, clearMod: 3, setLocks: 4 },
  { keysym: 51, scancode: 4, clearMod: 3, setLocks: 4 },
  { keysym: 52, scancode: 5, clearMod: 3, setLocks: 4 },
  { keysym: 53, scancode: 6, clearMod: 3, setLocks: 4 },
  { keysym: 54, scancode: 7, clearMod: 3, setLocks: 4 },
  { keysym: 55, scancode: 8, clearMod: 3, setLocks: 4 },
  { keysym: 56, scancode: 9, clearMod: 3, setLocks: 4 },
  { keysym: 57, scancode: 10, clearMod: 3, setLocks: 4 },
  { keysym: 48, scancode: 11, clearMod: 3, setLocks: 4 },
  { keysym: 176, scancode: 12, clearMod: 3, setLocks: 4 },
  { keysym: 43, scancode: 13, clearMod: 3, setLocks: 4 },
  { keysym: 65, scancode: 16, clearMod: 3, setLocks: 4 },
  { keysym: 90, scancode: 17, clearMod: 3, setLocks: 4 },
  { keysym: 69, scancode: 18, clearMod: 3, setLocks: 4 },
  { keysym: 82, scancode: 19, clearMod: 3, setLocks: 4 },
  { keysym: 84, scancode: 20, clearMod: 3, setLocks: 4 },
  { keysym: 89, scancode: 21, clearMod: 3, setLocks: 4 },
  { keysym: 85, scancode: 22, clearMod: 3, setLocks: 4 },
  { keysym: 73, scancode: 23, clearMod: 3, setLocks: 4 },
  { keysym: 79, scancode: 24, clearMod: 3, setLocks: 4 },
  { keysym: 80, scancode: 25, clearMod: 3, setLocks: 4 },
  { keysym: 163, scancode: 27, clearMod: 3, setLocks: 4 },
  { keysym: 81, scancode: 30, clearMod: 3, setLocks: 4 },
  { keysym: 83, scancode: 31, clearMod: 3, setLocks: 4 },
  { keysym: 68, scancode: 32, clearMod: 3, setLocks: 4 },
  { keysym: 70, scancode: 33, clearMod: 3, setLocks: 4 },
  { keysym: 71, scancode: 34, clearMod: 3, setLocks: 4 },
  { keysym: 72, scancode: 35, clearMod: 3, setLocks: 4 },
  { keysym: 74, scancode: 36, clearMod: 3, setLocks: 4 },
  { keysym: 75, scancode: 37, clearMod: 3, setLocks: 4 },
  { keysym: 76, scancode: 38, clearMod: 3, setLocks: 4 },
  { keysym: 77, scancode: 39, clearMod: 3, setLocks: 4 },
  { keysym: 37, scancode: 40, clearMod: 3, setLocks: 4 },
  { keysym: 181, scancode: 43, clearMod: 3, setLocks: 4 },
  { keysym: 60, scancode: 86, clearMod: 3, setLocks: 4 },
  { keysym: 87, scancode: 44, clearMod: 3, setLocks: 4 },
  { keysym: 88, scancode: 45, clearMod: 3, setLocks: 4 },
  { keysym: 67, scancode: 46, clearMod: 3, setLocks: 4 },
  { keysym: 86, scancode: 47, clearMod: 3, setLocks: 4 },
  { keysym: 66, scancode: 48, clearMod: 3, setLocks: 4 },
  { keysym: 78, scancode: 49, clearMod: 3, setLocks: 4 },
  { keysym: 63, scancode: 50, clearMod: 3, setLocks: 4 },
  { keysym: 46, scancode: 51, clearMod: 3, setLocks: 4 },
  { keysym: 47, scancode: 52, clearMod: 3, setLocks: 4 },
  { keysym: 167, scancode: 53, clearMod: 3, setLocks: 4 },
  { keysym: 38, scancode: 2, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 233, scancode: 3, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 34, scancode: 4, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 39, scancode: 5, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 40, scancode: 6, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 45, scancode: 7, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 232, scancode: 8, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 95, scancode: 9, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 231, scancode: 10, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 224, scancode: 11, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 41, scancode: 12, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 61, scancode: 13, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 97, scancode: 16, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 122, scancode: 17, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 101, scancode: 18, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 114, scancode: 19, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 116, scancode: 20, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 121, scancode: 21, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 117, scancode: 22, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 105, scancode: 23, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 111, scancode: 24, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 112, scancode: 25, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 36, scancode: 27, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 113, scancode: 30, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 115, scancode: 31, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 100, scancode: 32, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 102, scancode: 33, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 103, scancode: 34, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 104, scancode: 35, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 106, scancode: 36, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 107, scancode: 37, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 108, scancode: 38, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 109, scancode: 39, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 249, scancode: 40, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 42, scancode: 43, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 62, scancode: 86, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 119, scancode: 44, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 120, scancode: 45, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 99, scancode: 46, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 118, scancode: 47, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 98, scancode: 48, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 110, scancode: 49, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 44, scancode: 50, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 59, scancode: 51, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 58, scancode: 52, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 33, scancode: 53, setMod: 1, clearMod: 2, setLocks: 4 },
  { keysym: 126, scancode: 3, setMod: 2, clearMod: 1 },
  { keysym: 35, scancode: 4, setMod: 2, clearMod: 1 },
  { keysym: 123, scancode: 5, setMod: 2, clearMod: 1 },
  { keysym: 91, scancode: 6, setMod: 2, clearMod: 1 },
  { keysym: 124, scancode: 7, setMod: 2, clearMod: 1 },
  { keysym: 96, scancode: 8, setMod: 2, clearMod: 1 },
  { keysym: 92, scancode: 9, setMod: 2, clearMod: 1 },
  { keysym: 94, scancode: 10, setMod: 2, clearMod: 1 },
  { keysym: 64, scancode: 11, setMod: 2, clearMod: 1 },
  { keysym: 93, scancode: 12, setMod: 2, clearMod: 1 },
  { keysym: 125, scancode: 13, setMod: 2, clearMod: 1 },
  { keysym: 16785580, scancode: 18, setMod: 2, clearMod: 1 },
  { keysym: 164, scancode: 27, setMod: 2, clearMod: 1 },
  { keysym: 65106, scancode: 26, clearMod: 3, clearLocks: 4 },
  { keysym: 65111, scancode: 26, setMod: 1, clearMod: 2, clearLocks: 4 },
  { keysym: 65111, scancode: 26, clearMod: 3, setLocks: 4 },
  { keysym: 65106, scancode: 26, setMod: 1, clearMod: 2, setLocks: 4 }
];
var is = /* @__PURE__ */ ((t) => (t[t.Client = 0] = "Client", t[t.Synthetic = 1] = "Synthetic", t))(is || {});
function As(t) {
  let e = 0, s = t;
  for (; s !== 0; )
    e += s & 1, s >>>= 1;
  return e;
}
const _Be = class _Be {
  constructor(e) {
    __publicField(this, "sink");
    __publicField(this, "keysByKeysym", /* @__PURE__ */ new Map());
    // The guest's lock state, kept only for the cost model (see file header deviation 1).
    __publicField(this, "lockFlags", 0);
    // The number of keys the USER is currently holding on the client side (guac_rdp_keyboard's
    // user_pressed_keys). Synthetic modifier events do not count. When it reaches zero, the server
    // releases everything it still holds.
    __publicField(this, "userPressedKeys", 0);
    this.sink = e;
    for (const s of nr)
      this.addMapping(s);
  }
  // guac_rdp_keyboard_map_key: keysyms 0x0000..0xFFFF map to themselves; Unicode-derived keysyms
  // 0x1000000..0x100FFFF map to 0x10000 + low 16 bits; everything else is unmappable.
  static mapIndex(e) {
    return e >= 0 && e <= 65535 ? e : e >= 16777216 && e <= 16842751 ? 65536 + (e & 65535) : null;
  }
  addMapping(e) {
    const s = _Be.mapIndex(e.keysym);
    if (s === null)
      return;
    let i = this.keysByKeysym.get(s);
    i === void 0 && (i = { definitions: [], pressed: null, userPressed: false }, this.keysByKeysym.set(s, i)), i.definitions.push(e);
  }
  getKey(e) {
    const s = _Be.mapIndex(e);
    return s === null ? null : this.keysByKeysym.get(s) ?? null;
  }
  isPressed(e) {
    const s = this.getKey(e);
    return s !== null && s.pressed !== null;
  }
  // guac_rdp_keyboard_get_modifier_flags: derive the guest's modifier state from the scancodes it
  // ACTUALLY holds -- including AltGr simulated by holding Ctrl+Alt. This is the crux of the lazy
  // reconciliation: it reflects the guest, never the client's physical modifiers.
  getModifierFlags() {
    let e = 0;
    return (this.isPressed(Zt) || this.isPressed(Ss)) && (e |= Xt), (this.isPressed(Os) || this.isPressed(Jt)) && (e |= kt), this.isPressed(Rs) && (this.isPressed(Ts) || this.isPressed(Ds)) && (e |= kt), e;
  }
  // guac_rdp_keyboard_get_cost: how many RDP events typing this definition would take given the
  // current lock/modifier state. Lower is better; used to choose between a key's definitions.
  getCost(e) {
    const s = this.getModifierFlags();
    let i = 1;
    const o = e.setLocks ?? 0, r = e.clearLocks ?? 0, c = o & ~this.lockFlags | r & this.lockFlags;
    i += As(c) * 2;
    const f = e.setMod ?? 0, u = (e.clearMod ?? 0) & s | f & ~s;
    return i += As(u), i;
  }
  // guac_rdp_keyboard_get_definition: keep the same definition for as long as the key is held;
  // otherwise pick the lowest-cost definition for the current state.
  getDefinition(e) {
    if (e.pressed !== null)
      return e.pressed;
    let s = e.definitions[0], i = this.getCost(s);
    for (let o = 1; o < e.definitions.length; o++) {
      const r = e.definitions[o], c = this.getCost(r);
      c < i && (s = r, i = c);
    }
    return s;
  }
  // guac_rdp_keyboard_send_defined_key: reconcile locks/modifiers (only on press), then fire the key.
  sendDefinedKey(e, s) {
    const i = this.getDefinition(e);
    return i.scancode === 0 ? null : (s && (this.updateLocks(i.setLocks ?? 0, i.clearLocks ?? 0), this.updateModifiers(i.setMod ?? 0, i.clearMod ?? 0)), this.sink.sendScancode(rr(i), s), i);
  }
  // guac_rdp_keyboard_send_missing_key: first try to type the character as a dead key + base key using
  // REAL scancodes (guac_rdp_decompose_keysym) -- on the French guest, e-circumflex etc. compose via
  // the dead circumflex/dieresis keys and land in xkb terminals like Alacritty. Only if decomposition
  // is not possible does it fall back to a single RDP Unicode event (which this guest's xrdp surfaces
  // only to IM-aware apps, not xkb terminals). Like keyboard.c, the Unicode fallback fires exactly ONE
  // event on the press; sending a matching Unicode RELEASE makes xrdp un-map the temporary keycode
  // before an xkb terminal resolves it, so no release is sent.
  sendMissingKey(e) {
    if (this.decompose(e))
      return;
    let s;
    if (e <= 255)
      s = e;
    else if (e >= 16777216)
      s = e & 16777215;
    else
      return;
    this.sink.sendUnicode(s);
  }
  // guac_rdp_decompose_keysym + guac_rdp_decomposed_keys (decompose.c). Types an accented Latin-1
  // character as a dead key followed by its base key, both as real scancodes, when both keysyms are
  // defined in the current keymap. Returns true if the keysym was handled this way.
  decompose(e) {
    if (e < 0 || e > 255)
      return false;
    const s = _Be.decomposedKeys.get(e);
    if (s === void 0)
      return false;
    const [i, o] = s;
    return this.getKey(i) === null || this.getKey(o) === null ? false : (this.updateKeysym(
      i,
      true,
      1
      /* Synthetic */
    ), this.updateKeysym(
      i,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      o,
      true,
      1
      /* Synthetic */
    ), this.updateKeysym(
      o,
      false,
      1
      /* Synthetic */
    ), true);
  }
  // guac_rdp_keyboard_update_locks: kept faithful for the cost model; the guest is NOT synchronized
  // from here (see header deviation 1).
  updateLocks(e, s) {
    this.lockFlags = (this.lockFlags | e) & ~s;
  }
  // guac_rdp_keyboard_update_modifiers: press/release only the Shift/AltGr delta between what the
  // guest holds now and what is wanted. Releasing AltGr also releases the Ctrl+Alt that may be
  // simulating it. All issued as SYNTHETIC events so they do not disturb the user-held-key count.
  updateModifiers(e, s) {
    const i = this.getModifierFlags(), o = s & i, r = e & ~i;
    (r & Xt) !== 0 ? this.updateKeysym(
      Zt,
      true,
      1
      /* Synthetic */
    ) : (o & Xt) !== 0 && (this.updateKeysym(
      Zt,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      Ss,
      false,
      1
      /* Synthetic */
    )), (r & kt) !== 0 ? this.updateKeysym(
      Jt,
      true,
      1
      /* Synthetic */
    ) : (o & kt) !== 0 && (this.updateKeysym(
      Jt,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      Rs,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      Os,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      Ds,
      false,
      1
      /* Synthetic */
    ), this.updateKeysym(
      Ts,
      false,
      1
      /* Synthetic */
    ));
  }
  // guac_rdp_keyboard_update_keysym: the entry point. Tracks the user-held-key count for client
  // events, sends the key only when the guest's state for it actually changes, and once the user is
  // holding nothing, releases everything the server still holds.
  updateKeysym(e, s, i) {
    const o = this.getKey(e);
    if (i === 0 && o !== null && (s && !o.userPressed ? (this.userPressedKeys++, o.userPressed = true) : !s && o.userPressed && (this.userPressedKeys--, o.userPressed = false)), o === null || s && o.pressed === null || !s && o.pressed !== null) {
      s && (this.lockFlags ^= _Be.lockFlag(e));
      let r = null;
      o !== null && (r = this.sendDefinedKey(o, s), o.pressed = s ? r : null), r === null && s && this.sendMissingKey(e);
    }
    i === 0 && this.userPressedKeys === 0 && this.reset();
  }
  // guac_rdp_keyboard_reset: release every key the server still holds (via synthetic releases).
  reset() {
    for (const e of this.keysByKeysym.values())
      e.pressed !== null && this.updateKeysym(
        e.pressed.keysym,
        false,
        1
        /* Synthetic */
      );
  }
  // Full teardown for blur/focus-loss: release every key the server still holds. Unicode-typed
  // characters have no held state, so there is nothing to release for them.
  releaseAll() {
    this.reset();
    for (const e of this.keysByKeysym.values())
      e.userPressed = false;
    this.userPressedKeys = 0;
  }
  static lockFlag(e) {
    switch (e) {
      case Li:
        return er;
      case or:
        return ir;
      case xi:
        return tr;
      case Mi:
        return sr;
      default:
        return 0;
    }
  }
};
// guac_rdp_decomposed_keys (decompose.c): accented Latin-1 char keysym -> [dead-key keysym, base-key
// keysym]. Dead keysyms: grave 0xfe50, acute 0xfe51, circumflex 0xfe52, tilde 0xfe53, dieresis
// 0xfe57, abovering 0xfe58. Base keysyms are the plain characters (' ', A-Z, a-z).
__publicField(_Be, "decomposedKeys", /* @__PURE__ */ new Map([
  [94, [65106, 32]],
  [96, [65104, 32]],
  [126, [65107, 32]],
  [168, [65111, 32]],
  [180, [65105, 32]],
  [192, [65104, 65]],
  [193, [65105, 65]],
  [194, [65106, 65]],
  [195, [65107, 65]],
  [196, [65111, 65]],
  [197, [65112, 65]],
  [200, [65104, 69]],
  [201, [65105, 69]],
  [202, [65106, 69]],
  [203, [65111, 69]],
  [204, [65104, 73]],
  [205, [65105, 73]],
  [206, [65106, 73]],
  [207, [65111, 73]],
  [209, [65107, 78]],
  [210, [65104, 79]],
  [211, [65105, 79]],
  [212, [65106, 79]],
  [213, [65107, 79]],
  [214, [65111, 79]],
  [217, [65104, 85]],
  [218, [65105, 85]],
  [219, [65106, 85]],
  [220, [65111, 85]],
  [221, [65105, 89]],
  [224, [65104, 97]],
  [225, [65105, 97]],
  [226, [65106, 97]],
  [227, [65107, 97]],
  [228, [65111, 97]],
  [229, [65112, 97]],
  [232, [65104, 101]],
  [233, [65105, 101]],
  [234, [65106, 101]],
  [235, [65111, 101]],
  [236, [65104, 105]],
  [237, [65105, 105]],
  [238, [65106, 105]],
  [239, [65111, 105]],
  [241, [65107, 110]],
  [242, [65104, 111]],
  [243, [65105, 111]],
  [244, [65106, 111]],
  [245, [65107, 111]],
  [246, [65111, 111]],
  [249, [65104, 117]],
  [250, [65105, 117]],
  [251, [65106, 117]],
  [252, [65111, 117]],
  [253, [65105, 121]],
  [255, [65111, 121]]
]));
let Be = _Be;
var st = /* @__PURE__ */ ((t) => (t.CAPS_LOCK = "CapsLock", t.NUM_LOCK = "NumLock", t.SCROLL_LOCK = "ScrollLock", t.KANA_MODE = "KanaMode", t.CapsLock = "CapsLock", t.ScrollLock = "ScrollLock", t.NumLock = "NumLock", t.KanaMode = "KanaMode", t))(st || {}), fe = /* @__PURE__ */ ((t) => (t[t.CTRL_ALT_DEL = 0] = "CTRL_ALT_DEL", t[t.META = 1] = "META", t[t.CTRL_C = 2] = "CTRL_C", t[t.CTRL_V = 3] = "CTRL_V", t))(fe || {}), ke = /* @__PURE__ */ ((t) => (t[t.Fit = 1] = "Fit", t[t.Full = 2] = "Full", t[t.Real = 3] = "Real", t))(ke || {}), it = /* @__PURE__ */ ((t) => (t[t.Pixel = 0] = "Pixel", t[t.Line = 1] = "Line", t[t.Page = 2] = "Page", t))(it || {});
class ar {
  constructor(e, s, i) {
    __publicField(this, "username");
    __publicField(this, "password");
    __publicField(this, "destination");
    __publicField(this, "proxyAddress");
    __publicField(this, "serverDomain");
    __publicField(this, "authToken");
    __publicField(this, "desktopSize");
    __publicField(this, "extensions");
    this.username = e.username, this.password = e.password, this.proxyAddress = s.address, this.authToken = s.authToken, this.destination = i.destination, this.serverDomain = i.serverDomain, this.extensions = i.extensions, this.desktopSize = i.desktopSize;
  }
}
class cr {
  /**
   * Creates a new ConfigBuilder instance.
   */
  constructor() {
    __publicField(this, "username", "");
    __publicField(this, "password", "");
    __publicField(this, "destination", "");
    __publicField(this, "proxyAddress", "");
    __publicField(this, "serverDomain", "");
    __publicField(this, "authToken", "");
    __publicField(this, "desktopSize");
    __publicField(this, "extensions", []);
  }
  /**
   * Optional parameter
   *
   * @param username - The username to use for authentication
   * @returns The builder instance for method chaining
   */
  withUsername(e) {
    return this.username = e, this;
  }
  /**
   * Optional parameter
   *
   * @param password - The password for authentication
   * @returns The builder instance for method chaining
   */
  withPassword(e) {
    return this.password = e, this;
  }
  /**
   * Required parameter
   *
   * @param destination - The destination address to connect to
   * @returns The builder instance for method chaining
   */
  withDestination(e) {
    return this.destination = e, this;
  }
  /**
   * Required parameter
   *
   * @param proxyAddress - The address of the proxy server
   * @returns The builder instance for method chaining
   */
  withProxyAddress(e) {
    return this.proxyAddress = e, this;
  }
  /**
   * Optional parameter
   *
   * @param serverDomain - The server domain to connect to
   * @returns The builder instance for method chaining
   */
  withServerDomain(e) {
    return this.serverDomain = e, this;
  }
  /**
   * Required parameter
   *
   * @param authToken - JWT token to connect to the proxy
   * @returns The builder instance for method chaining
   */
  withAuthToken(e) {
    return this.authToken = e, this;
  }
  /**
   * Optional parameter
   *
   * @param ext - The extension
   * @returns The builder instance for method chaining
   */
  withExtension(e) {
    return this.extensions.push(e), this;
  }
  /**
   * Optional
   *
   * @param desktopSize - The desktop size configuration object
   * @returns The builder instance for method chaining
   */
  withDesktopSize(e) {
    return this.desktopSize = e, this;
  }
  /**
   * Builds a new Config instance.
   *
   * @throws {Error} If required parameters (destination, proxyAddress, authToken) are not set
   * @returns A new Config instance with the configured values
   */
  build() {
    if (this.destination === "")
      throw new Error("destination has to be specified");
    if (this.proxyAddress === "")
      throw new Error("proxy address has to be specified");
    if (this.authToken === "")
      throw new Error("authentication token has to be specified");
    const e = { username: this.username, password: this.password }, s = { address: this.proxyAddress, authToken: this.authToken }, i = {
      destination: this.destination,
      serverDomain: this.serverDomain,
      extensions: this.extensions,
      desktopSize: this.desktopSize
    };
    return new ar(e, s, i);
  }
}
class Ie {
  constructor() {
    __publicField(this, "subscribers");
    this.subscribers = [];
  }
  subscribe(e) {
    this.subscribers.push(e);
  }
  publish(e) {
    for (const s of this.subscribers)
      s(e);
  }
}
class $t {
  constructor(e) {
    __publicField(this, "module");
    __publicField(this, "canvas");
    __publicField(this, "keyboardUnicodeMode", false);
    __publicField(this, "onRemoteClipboardChanged");
    __publicField(this, "onForceClipboardUpdate");
    __publicField(this, "onCanvasResized");
    __publicField(this, "onWarningCallback");
    __publicField(this, "onClipboardRemoteUpdate");
    __publicField(this, "fileTransferProvider");
    __publicField(this, "cursorHasOverride", false);
    __publicField(this, "lastCursorStyle", "default");
    __publicField(this, "enableClipboard", true);
    __publicField(this, "_autoClipboard", true);
    __publicField(this, "sessionStartedObservable", new Ie());
    __publicField(this, "resizeObservable", new Ie());
    __publicField(this, "session");
    // The two halves of the ported Guacamole keyboard. guacKeyboard is the Keyboard.js client half
    // (browser event -> X11 keysym); guacRdp is the keyboard.c server half (keysym -> scancode +
    // lazy Shift/AltGr reconciliation). They are wired below so that the keysym stream the client half
    // emits drives the server half, whose scancode/Unicode output is batched into RDP transactions.
    __publicField(this, "guacKeyboard", new v());
    __publicField(this, "guacRdp");
    // Scancode/Unicode DeviceEvents accumulated while the server half handles a single keysym, flushed
    // as one InputTransaction per keysym (a keysym may expand to several events: reconcile Shift, tap
    // the key, ...). The RDP server processes transactions in order, so per-keysym batching is exact.
    __publicField(this, "pendingKeyEvents", []);
    __publicField(this, "mousePositionObservable", new Ie());
    __publicField(this, "changeVisibilityObservable", new Ie());
    __publicField(this, "scaleObservable", new Ie());
    __publicField(this, "dynamicResizeObservable", new Ie());
    this.module = e;
    const s = {
      sendScancode: (i, o) => {
        const r = this.module.DeviceEvent;
        this.pendingKeyEvents.push(o ? r.keyPressed(i) : r.keyReleased(i));
      },
      sendUnicode: (i) => {
        this.pendingKeyEvents.push(this.module.DeviceEvent.unicodePressed(String.fromCodePoint(i)));
      }
    };
    this.guacRdp = new Be(s), this.guacKeyboard.onKeyDown = (i) => ($t.isForwardedLockKeysym(i) || (this.pendingKeyEvents = [], this.guacRdp.updateKeysym(i, true, is.Client), this.flushPendingKeyEvents()), false), this.guacKeyboard.onKeyUp = (i) => {
      $t.isForwardedLockKeysym(i) || (this.pendingKeyEvents = [], this.guacRdp.updateKeysym(i, false, is.Client), this.flushPendingKeyEvents());
    }, N.info("Web bridge initialized.");
  }
  static isForwardedLockKeysym(e) {
    return e === Mi || e === xi || e === Li;
  }
  flushPendingKeyEvents() {
    if (this.pendingKeyEvents.length > 0) {
      const e = this.pendingKeyEvents;
      this.pendingKeyEvents = [], this.doTransactionFromDeviceEvents(e);
    }
  }
  get autoClipboard() {
    return this._autoClipboard;
  }
  // If set to false, the clipboard will not be enabled and the callbacks will not be registered to the Rust side
  setEnableClipboard(e) {
    this.enableClipboard = e;
  }
  // If set to true, automatic clipboard synchronization with the server is enabled.
  //
  // If set to false, then the client must invoke `PublicAPI.saveRemoteClipboardData` and
  // `PublicAPI.sendClipboardData` to write to clipboard and to send clipboard data to the server.
  setEnableAutoClipboard(e) {
    this._autoClipboard = e;
  }
  /// Callback to set the local clipboard content to data received from the remote.
  setOnRemoteClipboardChanged(e) {
    this.onRemoteClipboardChanged = e;
  }
  /// Callback which is called when the remote requests a forced clipboard update (e.g. on
  /// clipboard initialization sequence)
  setOnForceClipboardUpdate(e) {
    this.onForceClipboardUpdate = e;
  }
  /// Callback which is called when the canvas is resized.
  setOnCanvasResized(e) {
    this.onCanvasResized = e;
  }
  /// Callback which is called when the warning event is emitted.
  setOnWarningCallback(e) {
    this.onWarningCallback = e;
  }
  /// Callback which is called when the clipboard remote update event is emitted.
  setOnClipboardRemoteUpdate(e) {
    this.onClipboardRemoteUpdate = e;
  }
  /**
   * Enable file transfer support. Must be called before connect().
   * Implicitly enables clipboard (required for file transfer protocol).
   *
   * @param provider - Protocol-specific file transfer provider (e.g., RdpFileTransferProvider)
   * @returns The same provider, for chaining
   */
  enableFileTransfer(e) {
    var _a2;
    return (_a2 = this.fileTransferProvider) == null ? void 0 : _a2.dispose(), this.fileTransferProvider = e, this.enableClipboard = true, e;
  }
  mouseIn(e) {
    if (!this.session) return;
    this.syncModifier(e);
    const i = [
      [1, 0],
      // left button
      [2, 2],
      // right button
      [4, 1]
      // middle button
    ].filter(([o]) => (e.buttons & o) === 0).map(([, o]) => this.module.DeviceEvent.mouseButtonReleased(o));
    i.length > 0 && this.doTransactionFromDeviceEvents(i);
  }
  mouseOut(e) {
    this.releaseAllInputs();
  }
  focusLost() {
    this.releaseAllInputs();
  }
  sendKeyboardEvent(e) {
    this.sendKeyboard(e);
  }
  shutdown() {
    var _a2, _b2;
    (_a2 = this.fileTransferProvider) == null ? void 0 : _a2.dispose(), (_b2 = this.session) == null ? void 0 : _b2.shutdown();
  }
  mouseButtonState(e, s, i) {
    i && e.preventDefault();
    const o = s ? this.module.DeviceEvent.mouseButtonPressed : this.module.DeviceEvent.mouseButtonReleased;
    this.doTransactionFromDeviceEvents([o(e.button)]);
  }
  updateMousePosition(e) {
    this.doTransactionFromDeviceEvents([this.module.DeviceEvent.mouseMove(e.x, e.y)]), this.mousePositionObservable.publish(e);
  }
  configBuilder() {
    return new cr();
  }
  async connect(e) {
    var _a2;
    const s = new this.module.SessionBuilder();
    if (s.proxyAddress(e.proxyAddress), s.destination(e.destination), s.serverDomain(e.serverDomain), s.password(e.password), s.authToken(e.authToken), s.username(e.username), s.renderCanvas(this.canvas), s.setCursorStyleCallbackContext(this), s.setCursorStyleCallback(this.setCursorStyleCallback), e.extensions.forEach((r) => {
      s.extension(r);
    }), this.onRemoteClipboardChanged != null && this.enableClipboard && s.remoteClipboardChangedCallback(this.onRemoteClipboardChanged), this.onForceClipboardUpdate != null && this.enableClipboard && s.forceClipboardUpdateCallback(this.onForceClipboardUpdate), this.fileTransferProvider != null && this.enableClipboard)
      for (const r of this.fileTransferProvider.getBuilderExtensions())
        s.extension(r);
    this.onCanvasResized != null && s.canvasResizedCallback(this.onCanvasResized), e.desktopSize != null && s.desktopSize(
      new this.module.DesktopSize(e.desktopSize.width, e.desktopSize.height)
    );
    const i = await s.connect();
    this.session = i, (_a2 = this.fileTransferProvider) == null ? void 0 : _a2.setSession(i), this.resizeObservable.publish({
      desktopSize: i.desktopSize(),
      sessionId: 0
    }), this.sessionStartedObservable.publish(null);
    const o = async () => {
      try {
        return N.info("Starting the session."), await i.run();
      } finally {
        this.setVisibility(false);
      }
    };
    return {
      sessionId: 0,
      initialDesktopSize: i.desktopSize(),
      websocketPort: 0,
      run: o
    };
  }
  sendSpecialCombination(e) {
    switch (e) {
      case fe.CTRL_ALT_DEL:
        this.ctrlAltDel();
        break;
      case fe.META:
        this.sendMeta();
        break;
      case fe.CTRL_C:
        this.sendCtrlC();
        break;
      case fe.CTRL_V:
        this.sendCtrlV();
        break;
    }
  }
  rotation_unit_from_wheel_event(e) {
    switch (e.deltaMode) {
      case e.DOM_DELTA_PIXEL:
        return it.Pixel;
      case e.DOM_DELTA_LINE:
        return it.Line;
      case e.DOM_DELTA_PAGE:
        return it.Page;
      default:
        return it.Pixel;
    }
  }
  mouseWheel(e) {
    const s = e.deltaY !== 0, i = s ? e.deltaY : e.deltaX, o = this.rotation_unit_from_wheel_event(e);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.wheelRotations(s, -i, o)
    ]);
  }
  emitWarningEvent(e) {
    var _a2;
    (_a2 = this.onWarningCallback) == null ? void 0 : _a2.call(this, e);
  }
  emitClipboardRemoteUpdateEvent() {
    var _a2;
    (_a2 = this.onClipboardRemoteUpdate) == null ? void 0 : _a2.call(this);
  }
  setVisibility(e) {
    this.changeVisibilityObservable.publish(e);
  }
  setScale(e) {
    this.scaleObservable.publish(e);
  }
  setCanvas(e) {
    this.canvas = e;
  }
  resizeDynamic(e, s, i) {
    var _a2;
    this.dynamicResizeObservable.publish({ width: e, height: s }), (_a2 = this.session) == null ? void 0 : _a2.resize(e, s, i);
  }
  /// Triggered by the browser when local clipboard is updated. Clipboard backend should
  /// cache the content and send it to the server when it is requested.
  onClipboardChanged(e) {
    return (async () => {
      var _a2;
      await ((_a2 = this.session) == null ? void 0 : _a2.onClipboardPaste(e));
    })();
  }
  onClipboardChangedEmpty() {
    return (async () => {
      var _a2;
      await ((_a2 = this.session) == null ? void 0 : _a2.onClipboardPaste(new this.module.ClipboardData()));
    })();
  }
  setKeyboardUnicodeMode(e) {
    this.keyboardUnicodeMode = e;
  }
  setCursorStyleOverride(e) {
    e == null ? (this.canvas.style.cursor = this.lastCursorStyle, this.cursorHasOverride = false) : (this.canvas.style.cursor = e, this.cursorHasOverride = true);
  }
  invokeExtension(e) {
    var _a2;
    (_a2 = this.session) == null ? void 0 : _a2.invokeExtension(e);
  }
  releaseAllInputs() {
    var _a2;
    this.guacKeyboard.reset(), this.guacRdp.releaseAll(), (_a2 = this.session) == null ? void 0 : _a2.releaseAllInputs();
  }
  // Feed a browser key event into the ported Guacamole pipeline (when unicode mode is on) or the base
  // package's plain physical-scancode path (when off). preventDefault is applied the way Guacamole's
  // listenTo does: NOT blanket on keydown/keypress (that would suppress the keypress event the client
  // half relies on to disambiguate a printable keydown), only when the pipeline actually handled the
  // event; keyup is always prevented.
  sendKeyboard(e) {
    if (this.keyboardUnicodeMode) {
      e.code in st && this.syncModifier(e), e.type === "keydown" ? this.guacKeyboard.handleKeyDown(e) && e.preventDefault() : e.type === "keypress" ? this.guacKeyboard.handleKeyPress(e) && e.preventDefault() : e.type === "keyup" && (e.preventDefault(), this.guacKeyboard.handleKeyUp(e));
      return;
    }
    e.preventDefault();
    let s;
    if (e.type === "keydown")
      s = this.module.DeviceEvent.keyPressed;
    else if (e.type === "keyup")
      s = this.module.DeviceEvent.keyReleased;
    else
      return;
    const i = Go(e.code);
    Number.isNaN(i) || this.doTransactionFromDeviceEvents([s(i)]);
  }
  setCursorStyleCallback(e, s, i, o) {
    let r;
    switch (e) {
      case "hidden": {
        r = "none";
        break;
      }
      case "default": {
        r = "default";
        break;
      }
      case "url": {
        if (s == null || i == null || o == null) {
          console.error("Invalid custom cursor parameters.");
          return;
        }
        const c = new Image();
        c.src = s;
        const f = Math.round(i), p = Math.round(o);
        r = `url(${s}) ${f} ${p}, default`;
        break;
      }
      default: {
        console.error(`Unsupported cursor style: ${e}.`);
        return;
      }
    }
    this.lastCursorStyle = r, this.cursorHasOverride || (this.canvas.style.cursor = r);
  }
  syncModifier(e) {
    var _a2;
    const s = e.getModifierState(st.NUM_LOCK), i = e.getModifierState(st.SCROLL_LOCK), o = e.getModifierState(st.KANA_MODE);
    (_a2 = this.session) == null ? void 0 : _a2.synchronizeLockKeys(i, s, false, o);
  }
  doTransactionFromDeviceEvents(e) {
    var _a2;
    const s = new this.module.InputTransaction();
    e.forEach((i) => s.addEvent(i)), (_a2 = this.session) == null ? void 0 : _a2.applyInputs(s);
  }
  ctrlAltDel() {
    const e = parseInt("0x001D", 16), s = parseInt("0x0038", 16), i = parseInt("0xE053", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(s),
      this.module.DeviceEvent.keyPressed(i),
      this.module.DeviceEvent.keyReleased(e),
      this.module.DeviceEvent.keyReleased(s),
      this.module.DeviceEvent.keyReleased(i)
    ]);
  }
  sendMeta() {
    const e = parseInt("0xE05B", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyReleased(e)
    ]);
  }
  sendCtrlC() {
    const e = parseInt("0x001D", 16), s = parseInt("0x002E", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(s),
      this.module.DeviceEvent.keyReleased(s),
      this.module.DeviceEvent.keyReleased(e)
    ]);
  }
  sendCtrlV() {
    const e = parseInt("0x001D", 16), s = parseInt("0x002F", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(s),
      this.module.DeviceEvent.keyReleased(s),
      this.module.DeviceEvent.keyReleased(e)
    ]);
  }
}
class lr {
  constructor(e, s) {
    __publicField(this, "remoteDesktopService");
    __publicField(this, "clipboardService");
    this.remoteDesktopService = e, this.clipboardService = s;
  }
  configBuilder() {
    return this.remoteDesktopService.configBuilder();
  }
  connect(e) {
    return N.info("Initializing connection."), this.remoteDesktopService.connect(e);
  }
  ctrlAltDel() {
    this.remoteDesktopService.sendSpecialCombination(fe.CTRL_ALT_DEL);
  }
  metaKey() {
    this.remoteDesktopService.sendSpecialCombination(fe.META);
  }
  ctrlC() {
    this.remoteDesktopService.sendSpecialCombination(fe.CTRL_C);
  }
  ctrlV() {
    this.remoteDesktopService.sendSpecialCombination(fe.CTRL_V);
  }
  setVisibility(e) {
    N.info(`Change component visibility to: ${e}`), this.remoteDesktopService.setVisibility(e);
  }
  setScale(e) {
    this.remoteDesktopService.setScale(e);
  }
  shutdown() {
    this.remoteDesktopService.shutdown();
  }
  setKeyboardUnicodeMode(e) {
    this.remoteDesktopService.setKeyboardUnicodeMode(e);
  }
  setCursorStyleOverride(e) {
    this.remoteDesktopService.setCursorStyleOverride(e);
  }
  resize(e, s, i) {
    this.remoteDesktopService.resizeDynamic(e, s, i);
  }
  setEnableClipboard(e) {
    this.remoteDesktopService.setEnableClipboard(e);
  }
  setEnableAutoClipboard(e) {
    this.remoteDesktopService.setEnableAutoClipboard(e);
  }
  setOnWarningCallback(e) {
    this.remoteDesktopService.setOnWarningCallback(e);
  }
  setOnClipboardRemoteUpdateCallback(e) {
    this.remoteDesktopService.setOnClipboardRemoteUpdate(e);
  }
  async saveRemoteClipboardData() {
    return await this.clipboardService.saveRemoteClipboardData();
  }
  async sendClipboardData() {
    return await this.clipboardService.sendClipboardData();
  }
  async pasteClipboardText(e) {
    return await this.clipboardService.pasteText(e);
  }
  invokeExtension(e) {
    this.remoteDesktopService.invokeExtension(e);
  }
  enableFileTransfer(e) {
    const s = e.onUploadStarted, i = e.onUploadFinished;
    return e.onUploadStarted = () => {
      s == null ? void 0 : s(), this.clipboardService.suppressMonitoring();
    }, e.onUploadFinished = () => {
      this.clipboardService.resumeMonitoring(), i == null ? void 0 : i();
    }, this.remoteDesktopService.enableFileTransfer(e);
  }
  getExposedFunctions() {
    return {
      setVisibility: this.setVisibility.bind(this),
      configBuilder: this.configBuilder.bind(this),
      connect: this.connect.bind(this),
      onWarningCallback: this.setOnWarningCallback.bind(this),
      onClipboardRemoteUpdateCallback: this.setOnClipboardRemoteUpdateCallback.bind(this),
      setScale: this.setScale.bind(this),
      ctrlAltDel: this.ctrlAltDel.bind(this),
      metaKey: this.metaKey.bind(this),
      ctrlC: this.ctrlC.bind(this),
      ctrlV: this.ctrlV.bind(this),
      shutdown: this.shutdown.bind(this),
      setKeyboardUnicodeMode: this.setKeyboardUnicodeMode.bind(this),
      setCursorStyleOverride: this.setCursorStyleOverride.bind(this),
      resize: this.resize.bind(this),
      setEnableClipboard: this.setEnableClipboard.bind(this),
      setEnableAutoClipboard: this.setEnableAutoClipboard.bind(this),
      saveRemoteClipboardData: this.saveRemoteClipboardData.bind(this),
      sendClipboardData: this.sendClipboardData.bind(this),
      pasteClipboardText: this.pasteClipboardText.bind(this),
      invokeExtension: this.invokeExtension.bind(this),
      enableFileTransfer: this.enableFileTransfer.bind(this)
    };
  }
}
const os = ki(false);
function dr() {
  const t = ki([]);
  return {
    subscribe: t.subscribe,
    enqueue(e) {
      t.update((s) => [...s, e]);
    },
    shift() {
      let e;
      return t.update((s) => s.length == 0 ? s : (e = s[0], s.slice(1))), e;
    },
    length() {
      return vi(t).length;
    }
  };
}
const rs = dr();
var W = /* @__PURE__ */ ((t) => (t[t.Full = 0] = "Full", t[t.TextOnly = 1] = "TextOnly", t[t.TextOnlyServerOnly = 2] = "TextOnlyServerOnly", t[t.None = 3] = "None", t))(W || {}), Ci = /* @__PURE__ */ ((t) => (t[t.General = 0] = "General", t[t.WrongPassword = 1] = "WrongPassword", t[t.LogonFailure = 2] = "LogonFailure", t[t.AccessDenied = 3] = "AccessDenied", t[t.RDCleanPath = 4] = "RDCleanPath", t[t.ProxyConnect = 5] = "ProxyConnect", t[t.NegotiationFailure = 6] = "NegotiationFailure", t))(Ci || {});
const ur = 100;
function ae(t) {
  throw {
    kind: () => Ci.General,
    backtrace: () => t
  };
}
class fr {
  constructor(e, s) {
    __publicField(this, "remoteDesktopService");
    __publicField(this, "module");
    __publicField(this, "ClipboardApiSupported", W.None);
    __publicField(this, "lastClientClipboardItems", {});
    __publicField(this, "lastReceivedClipboardData", {});
    __publicField(this, "lastSentClipboardData", null);
    __publicField(this, "clipboardDataToSave", null);
    __publicField(this, "lastClipboardMonitorLoopError", null);
    // When true, the clipboard monitoring loop skips reading/sending clipboard updates.
    // Used to prevent the monitoring loop from clobbering an active file upload's
    // FormatList with a text/image clipboard update.
    __publicField(this, "monitoringSuppressed", false);
    // Firefox v126 and below does not support `navigator.clipboard.read` and `navigator.clipboard.write`.
    // So, we need to define specific methods to handle text-only clipboard.
    //
    // Also, Firefox v124 and below does not support `navigator.clipboard.readText`.
    // Because of this, we cannot read the data from the clipboard at all.
    __publicField(this, "ffClipboardDataToSave", null);
    this.remoteDesktopService = e, this.module = s;
  }
  /**
   * Suppress clipboard monitoring. While suppressed, the 100ms monitoring
   * loop will skip reading the local clipboard and sending updates to the
   * remote. This prevents the monitor from clobbering a file upload's
   * FormatList announcement with a text/image clipboard update.
   */
  suppressMonitoring() {
    this.monitoringSuppressed = true;
  }
  /**
   * Resume clipboard monitoring after a previous {@link suppressMonitoring} call.
   */
  resumeMonitoring() {
    this.monitoringSuppressed = false;
  }
  async initClipboard() {
    if (!window.isSecureContext) {
      this.remoteDesktopService.emitWarningEvent("Clipboard is available only in secure contexts (HTTPS).");
      return;
    }
    if (navigator.clipboard != null && (navigator.clipboard.read != null && navigator.clipboard.write != null ? this.ClipboardApiSupported = W.Full : navigator.clipboard.readText != null ? (this.ClipboardApiSupported = W.TextOnly, this.remoteDesktopService.emitWarningEvent(
      "Clipboard is limited to text-only data types due to an outdated browser version!"
    )) : navigator.clipboard.writeText != null && (this.ClipboardApiSupported = W.TextOnlyServerOnly, this.remoteDesktopService.emitWarningEvent(
      "Clipboard reading is not supported and writing is limited to text-only data types due to an outdated browser version!"
    ))), this.ClipboardApiSupported === W.Full)
      try {
        (await navigator.permissions.query({
          name: "clipboard-read"
        })).state === "denied" && (this.ClipboardApiSupported = W.TextOnly);
      } catch {
        this.ClipboardApiSupported = W.TextOnly;
      }
    if (this.ClipboardApiSupported === W.None) {
      this.remoteDesktopService.emitWarningEvent(
        "Clipboard is not supported due to an outdated browser version!"
      );
      return;
    }
    this.remoteDesktopService.setOnForceClipboardUpdate(this.onForceClipboardUpdate.bind(this)), this.ClipboardApiSupported === W.Full ? this.remoteDesktopService.autoClipboard ? (this.remoteDesktopService.setOnRemoteClipboardChanged(this.onRemoteClipboardChangedAutoMode.bind(this)), this.remoteDesktopService.sessionStartedObservable.subscribe((e) => {
      this.scheduleOnMonitorClipboardUpdate();
    })) : this.remoteDesktopService.setOnRemoteClipboardChanged(
      this.onRemoteClipboardChangedManualMode.bind(this)
    ) : this.remoteDesktopService.setOnRemoteClipboardChanged(this.ffOnRemoteClipboardChanged.bind(this));
  }
  // Copies clipboard content received from the server to the local clipboard.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async saveRemoteClipboardData() {
    if (this.ClipboardApiSupported !== W.Full)
      return await this.ffSaveRemoteClipboardData();
    this.clipboardDataToSave == null && ae("The server did not send the clipboard data.");
    try {
      const e = this.clipboardDataToRecord(this.clipboardDataToSave), s = new ClipboardItem(e);
      await navigator.clipboard.write([s]), this.clipboardDataToSave = null;
    } catch (e) {
      ae("Failed to write to the clipboard: " + e);
    }
  }
  // Sends local clipboard's content to the server.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async sendClipboardData() {
    if (this.ClipboardApiSupported !== W.Full)
      return await this.ffSendClipboardData();
    const e = await navigator.clipboard.read().catch((o) => {
      ae("Failed to read from the clipboard: " + o);
    });
    e.length == 0 && ae("The clipboard has no data.");
    const s = e[0];
    s.types.some((o) => o.startsWith("text/") || o.startsWith("image/png")) || ae("The clipboard has no data of supported type (text or image).");
    const i = new this.module.ClipboardData();
    for (const o of s.types) {
      const r = o.startsWith("text/"), c = await s.getType(o);
      r ? i.addText(o, await c.text()) : i.addBinary(o, new Uint8Array(await c.arrayBuffer()));
    }
    i.isEmpty() || (this.lastSentClipboardData = i, await this.remoteDesktopService.onClipboardChanged(i));
  }
  async pasteText(e) {
    if (!e)
      return;
    const s = new this.module.ClipboardData();
    s.addText("text/plain", e), s.isEmpty() || (this.lastSentClipboardData = s, await this.remoteDesktopService.onClipboardChanged(s));
  }
  scheduleOnMonitorClipboardUpdate() {
    setTimeout(this.onMonitorClipboard.bind(this), ur);
  }
  runWhenWindowFocused(e) {
    document.hasFocus() ? e() : rs.enqueue(e);
  }
  // This function is required to convert `ClipboardData` to an object that can be used
  // with `ClipboardItem` API.
  clipboardDataToRecord(e) {
    const s = {};
    for (const i of e.items()) {
      const o = i.mimeType();
      s[o] = new Blob([i.value()], { type: o });
    }
    return s;
  }
  clipboardDataToClipboardItemsRecord(e) {
    const s = {};
    for (const i of e.items()) {
      const o = i.mimeType();
      s[o] = i.value();
    }
    return s;
  }
  // This callback is required to send initial clipboard state if available.
  onForceClipboardUpdate() {
    try {
      this.lastSentClipboardData ? this.remoteDesktopService.onClipboardChanged(this.lastSentClipboardData) : this.remoteDesktopService.onClipboardChangedEmpty();
    } catch (e) {
      console.error("Failed to send initial clipboard state: " + e);
    }
  }
  // This callback is required to update client clipboard state when remote side has changed.
  onRemoteClipboardChangedManualMode(e) {
    this.clipboardDataToSave = e, this.remoteDesktopService.emitClipboardRemoteUpdateEvent();
  }
  // This callback is required to update client clipboard state when remote side has changed.
  onRemoteClipboardChangedAutoMode(e) {
    try {
      const s = this.clipboardDataToRecord(e), i = new ClipboardItem(s);
      this.runWhenWindowFocused(() => {
        this.lastReceivedClipboardData = this.clipboardDataToClipboardItemsRecord(e), navigator.clipboard.write([i]);
      });
    } catch (s) {
      console.error("Failed to set client clipboard: " + s);
    }
  }
  // Called periodically to monitor clipboard changes
  async onMonitorClipboard() {
    let e = false;
    try {
      if (this.monitoringSuppressed || !document.hasFocus())
        return;
      const s = await navigator.clipboard.read();
      if (s.length == 0)
        return;
      const i = s[0];
      if (!i.types.some((c) => c.startsWith("text/") || c.startsWith("image/png")))
        return;
      const o = {};
      let r = true;
      for (const c of i.types) {
        const f = c.startsWith("text/"), p = await i.getType(c), u = f ? await p.text() : new Uint8Array(await p.arrayBuffer()), k = f ? function(n, d) {
          return n === d;
        } : function(n, d) {
          return !(n instanceof Uint8Array) || !(d instanceof Uint8Array) ? false : n.length === d.length && n.every((a, l) => a === d[l]);
        }, y = this.lastClientClipboardItems[c];
        k(y, u) || (k(this.lastReceivedClipboardData[c], u) ? this.lastClientClipboardItems[c] = this.lastReceivedClipboardData[c] : r = false), o[c] = u;
      }
      if (!r) {
        this.lastClientClipboardItems = o;
        const c = new this.module.ClipboardData();
        Object.entries(o).forEach(([f, p]) => {
          p != null && (f.startsWith("text/") && typeof p == "string" ? c.addText(f, p) : f.startsWith("image/") && p instanceof Uint8Array && c.addBinary(f, p));
        }), c.isEmpty() || (this.lastSentClipboardData = c, await this.remoteDesktopService.onClipboardChanged(c));
      }
    } catch (s) {
      if (s instanceof DOMException && s.name === "NotAllowedError") {
        console.warn("Clipboard monitoring disabled: browser requires user activation for clipboard read."), this.remoteDesktopService.setOnRemoteClipboardChanged(
          this.onRemoteClipboardChangedManualMode.bind(this)
        ), e = true;
        return;
      }
      s instanceof Error && ((this.lastClipboardMonitorLoopError === null || this.lastClipboardMonitorLoopError.toString() !== s.toString()) && console.error("Clipboard monitoring error: " + s), this.lastClipboardMonitorLoopError = s);
    } finally {
      !e && !vi(os) && this.scheduleOnMonitorClipboardUpdate();
    }
  }
  // This function is required to retrieve the text data from the `ClipboardData`.
  ffRetrieveTextData(e) {
    for (const s of e.items())
      if (s.mimeType().startsWith("text/")) {
        const i = s.value();
        if (typeof i == "string") return i;
      }
    return "";
  }
  // Firefox specific function.
  // This callback is required to update client clipboard state when remote side has changed.
  ffOnRemoteClipboardChanged(e) {
    const s = this.ffRetrieveTextData(e);
    s !== "" && (this.ffClipboardDataToSave = s, this.remoteDesktopService.emitClipboardRemoteUpdateEvent());
  }
  // Firefox specific function. We are using text-only clipboard API here.
  //
  // Copies clipboard content received from the server to the local clipboard.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async ffSaveRemoteClipboardData() {
    this.ffClipboardDataToSave == null && ae("The server did not send the clipboard data.");
    try {
      await navigator.clipboard.writeText(this.ffClipboardDataToSave), this.ffClipboardDataToSave = null;
    } catch (e) {
      ae("Failed to write to the clipboard: " + e);
    }
  }
  // Firefox specific function. We are using text-only clipboard API here.
  //
  // Sends local clipboard's content to the server.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async ffSendClipboardData() {
    this.ClipboardApiSupported !== W.TextOnly && ae("The browser does not support clipboard read.");
    const e = await navigator.clipboard.readText().catch((i) => {
      ae("Failed to read from the clipboard: " + i);
    });
    e.length == 0 && ae("The clipboard has no data.");
    const s = new this.module.ClipboardData();
    s.addText("text/plain", e), s.isEmpty() || (this.lastSentClipboardData = s, await this.remoteDesktopService.onClipboardChanged(s));
  }
}
var hr = (t, e) => e(t, true), yr = (t, e) => e(t, false), mr = (t) => t.preventDefault(), pr = /* @__PURE__ */ To('<div class="svelte-1103xra"><div><div class="screen-viewer svelte-1103xra"><canvas id="renderer" tabindex="0" class="svelte-1103xra"></canvas></div></div></div>');
const kr = {
  hash: "svelte-1103xra",
  code: ".screen-wrapper.svelte-1103xra {position:relative;}.capturing-inputs.svelte-1103xra {outline:1px solid rgba(0, 97, 166, 0.7);outline-offset:-1px;}canvas.svelte-1103xra {width:100%;height:100%;}.svelte-1103xra::selection {background-color:transparent;}.screen-wrapper.hidden.svelte-1103xra {pointer-events:none !important;position:absolute !important;visibility:hidden;height:100%;width:100%;transform:translate(-100%, -100%);}"
};
function _i(t, e) {
  li(e, true), Ao(t, kr);
  let s = Ge(e, "scale"), i = Ge(e, "verbose"), o = Ge(e, "flexcenter"), r = Ge(e, "module"), c = Ge(e, "dynamicresize"), f = qt(false), p = () => {
    var _a2, _b2;
    return N.info(`
            capturingInputs: ${document.activeElement === y}
            current active element: ${document.activeElement}
        `), ((_b2 = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b2.firstElementChild) === u;
  }, u, k, y, n = qt(""), d = qt(""), a = new $t(r()), l = new fr(a, r()), m = new lr(a, l), $ = ke.Fit;
  function A(h) {
    p() && Ee(h);
  }
  function g() {
    Re(), Oe(), window.addEventListener("keydown", A, false), window.addEventListener("keypress", A, false), window.addEventListener("keyup", A, false), window.addEventListener("focus", Fe), window.addEventListener("blur", Ze), document.addEventListener("visibilitychange", Je), document.addEventListener("fullscreenchange", b);
  }
  function b() {
    K(f) && (Z("100%", "100%", "hidden"), setTimeout(() => J(s()), 150));
  }
  function F() {
    o() === "true" && (u.style.flexGrow = "", u.style.display = "", u.style.justifyContent = "", u.style.alignItems = "");
  }
  function P(h) {
    o() === "true" && (u.style.flexGrow = "1", u.style.display = "flex", u.style.justifyContent = "center", u.style.alignItems = "center");
  }
  function ie(h, M, D) {
    let C = `height: ${h}; width: ${M}`;
    C = `${C}; max-height: ${h}; max-width: ${M}; min-height: ${h}; min-width: ${M}`, V(n, De(C));
  }
  function Z(h, M, D) {
    V(d, `height: ${h}; width: ${M}; overflow: ${D}`);
  }
  let ye, oe;
  function He(h, M, D) {
    const C = Math.max(M, Math.min(D, Math.floor(h)));
    return C % 2 === 0 ? C : C - 1;
  }
  function ct() {
    const { x: h, y: M } = Q(), D = He(h, 200, 8192), C = He(M, 200, 8192);
    D > 0 && C > 0 && (D !== y.width || C !== y.height) && a.resizeDynamic(D, C);
  }
  function Le() {
    c() !== "true" || !K(f) || (clearTimeout(oe), oe = setTimeout(ct, 150));
  }
  const Ce = (h) => {
    J(s()), Le();
  };
  function Ut() {
    var _a2;
    const h = (_a2 = k == null ? void 0 : k.getRootNode) == null ? void 0 : _a2.call(k), M = h && "host" in h ? h.host : void 0;
    !M || typeof ResizeObserver > "u" || (ye = new ResizeObserver(() => {
      J(s()), Le();
    }), ye.observe(M));
  }
  function Re() {
    a.resizeObservable.subscribe((h) => {
      N.info(`Resize canvas to: ${h.desktopSize.width}x${h.desktopSize.height}`), y.width = h.desktopSize.width, y.height = h.desktopSize.height, J(s());
    });
  }
  function Oe() {
    window.addEventListener("resize", Ce), Ut(), a.scaleObservable.subscribe((h) => {
      N.info("Change scale!"), J(h);
    }), a.dynamicResizeObservable.subscribe((h) => {
      N.info(`Dynamic resize requested: ${h.width}x${h.height}`), J(s());
    }), a.changeVisibilityObservable.subscribe((h) => {
      V(f, De(h)), h && (Z("100%", "100%", "hidden"), setTimeout(() => J(s()), 150));
    });
  }
  function lt() {
    J($);
  }
  function J(h) {
    if (F(), K(f)) {
      if (c() === "true") {
        const M = Q();
        Z("initial", "initial", "hidden"), ie(`${M.y}px`, `${M.x}px`), P();
        return;
      }
      switch (h) {
        case "fit":
        case ke.Fit:
          N.info("Size to fit"), $ = ke.Fit, s("fit"), Ae();
          break;
        case "full":
        case ke.Full:
          N.info("Size to full"), $ = ke.Full, Bt(), s("full");
          break;
        case "real":
        case ke.Real:
          N.info("Size to real"), $ = ke.Real, Ve(), s("real");
          break;
      }
    }
  }
  function Bt() {
    const h = Q(), M = h.x, D = h.y;
    let C = y.width, O = y.height;
    const z = Math.min(M / y.width, D / y.height);
    C = C * z, O = O * z, Z(`${D}px`, `${M}px`, "hidden"), C = C > 0 ? C : 0, O = O > 0 ? O : 0, ie(`${O}px`, `${C}px`);
  }
  function Ae(h = false) {
    const M = Q(), D = M.x, C = M.y;
    let O = y.width, z = y.height;
    if (!h || D < y.width || C < y.height) {
      const Qe = Math.min(D / y.width, C / y.height);
      O = O * Qe, z = z * Qe;
    }
    O = O > 0 ? O : 0, z = z > 0 ? z : 0, Z("initial", "initial", "hidden"), ie(`${z}px`, `${O}px`), P();
  }
  function Ve() {
    const h = Q(), M = h.x, D = h.y;
    M < y.width || D < y.height ? Z(`${Math.min(D, y.height)}px`, `${Math.min(M, y.width)}px`, "auto") : Z("initial", "initial", "initial"), ie(`${y.height}px`, `${y.width}px`), P();
  }
  function je(h) {
    const M = y == null ? void 0 : y.getBoundingClientRect(), D = (y == null ? void 0 : y.width) / M.width, C = (y == null ? void 0 : y.height) / M.height, O = {
      x: Math.round((h.clientX - M.left) * D),
      y: Math.round((h.clientY - M.top) * C)
    };
    a.updateMousePosition(O);
  }
  function $e(h, M) {
    a.mouseButtonState(h, M, true);
  }
  function dt(h) {
    a.mouseWheel(h);
  }
  function _e2(h) {
    y.focus({ preventScroll: true }), a.mouseIn(h);
  }
  function Ye(h) {
    a.mouseOut(h);
  }
  function Ee(h) {
    return a.sendKeyboardEvent(h), true;
  }
  function ut() {
    const h = window, M = document, D = M.documentElement, C = M.getElementsByTagName("body")[0], O = h.innerWidth ?? D.clientWidth ?? C.clientWidth, z = h.innerHeight ?? D.clientHeight ?? C.clientHeight;
    return { x: O, y: z };
  }
  function Q() {
    var _a2;
    const h = (_a2 = k == null ? void 0 : k.getRootNode) == null ? void 0 : _a2.call(k), M = h && "host" in h ? h.host : void 0;
    return M && M.clientWidth > 0 && M.clientHeight > 0 ? { x: M.clientWidth, y: M.clientHeight } : ut();
  }
  async function Xe() {
    N.info("Start canvas initialization..."), y.width = 800, y.height = 600, a.setCanvas(y), a.setOnCanvasResized(lt), g();
    let h = {
      irgUserInteraction: m.getExposedFunctions()
    };
    N.info("Component ready"), N.info("Dispatching ready event"), u.dispatchEvent(new CustomEvent("ready", {
      detail: h,
      bubbles: true,
      composed: true
    }));
  }
  function Fe() {
    var _a2;
    try {
      for (; rs.length() > 0; )
        (_a2 = rs.shift()) == null ? void 0 : _a2();
    } catch (h) {
      console.error("Failed to run the function queued for execution when the window received focus: " + h);
    }
  }
  function Ze() {
    a.focusLost();
  }
  function Je() {
    document.visibilityState === "hidden" && a.focusLost();
  }
  pi(async () => {
    os.set(false), N.verbose = i() === "true", N.info("Dom ready"), await Xe(), await l.initClipboard();
  }), Ko(() => {
    window.removeEventListener("resize", Ce), window.removeEventListener("keydown", A, false), window.removeEventListener("keypress", A, false), window.removeEventListener("keyup", A, false), window.removeEventListener("focus", Fe), window.removeEventListener("blur", Ze), document.removeEventListener("visibilitychange", Je), document.removeEventListener("fullscreenchange", b), ye == null ? void 0 : ye.disconnect(), clearTimeout(oe), os.set(true);
  });
  var Se = pr(), me = Ht(Se);
  let ft;
  var pe = Ht(me), Y = Ht(pe);
  return Y.__mousemove = je, Y.__mousedown = [hr, $e], Y.__mouseup = [yr, $e], Y.__contextmenu = [mr], Vt(Y, (h) => y = h, () => y), Wt(pe), Wt(me), Vt(me, (h) => k = h, () => k), Wt(Se), Vt(Se, (h) => u = h, () => u), vo(() => {
    ft = Fo(me, 1, `screen-wrapper scale-${s() ?? ""}`, "svelte-1103xra", ft, {
      hidden: !K(f),
      "capturing-inputs": p
    }), Ms(me, "style", K(d)), Ms(pe, "style", K(n));
  }), mt("mouseleave", Y, (h) => {
    Ye(h);
  }), mt("mouseenter", Y, (h) => {
    _e2(h);
  }), mt("wheel", Y, dt), mt("selectstart", Y, (h) => {
    h.preventDefault();
  }), hi(t, Se), di({
    get scale() {
      return s();
    },
    set scale(h) {
      s(h), Ue();
    },
    get verbose() {
      return i();
    },
    set verbose(h) {
      i(h), Ue();
    },
    get flexcenter() {
      return o();
    },
    set flexcenter(h) {
      o(h), Ue();
    },
    get module() {
      return r();
    },
    set module(h) {
      r(h), Ue();
    },
    get dynamicresize() {
      return c();
    },
    set dynamicresize(h) {
      c(h), Ue();
    }
  });
}
So([
  "mousemove",
  "mousedown",
  "mouseup",
  "contextmenu"
]);
customElements.define("iron-remote-desktop", zo(
  _i,
  {
    scale: {},
    verbose: {},
    flexcenter: {},
    module: {},
    dynamicresize: {}
  },
  [],
  [],
  false,
  (t) => class extends t {
    constructor() {
      super(), this.attachShadow({ mode: "open", delegatesFocus: true });
    }
  }
));
const vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _i
}, Symbol.toStringTag, { value: "Module" }));
export {
  ar as Config,
  cr as ConfigBuilder,
  vr as default
};
