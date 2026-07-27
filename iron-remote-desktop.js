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
var _t2, _e2, _a, _b;
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("5");
const cr = 2, dr = "[", fr = "]", nt = {}, K = Symbol(), li = false, ee = 2, _i = 4, At = 8, Jt = 16, _e = 32, Ke = 64, _t = 128, G = 256, xt = 512, H = 1024, xe = 2048, We = 4096, Ct = 8192, Lt = 16384, hr = 32768, br = 65536, pr = 1 << 19, xi = 1 << 20, vt = Symbol("$state"), vr = Symbol("legacy props");
var Ci = Array.isArray, mr = Array.prototype.indexOf, wr = Array.from, Et = Object.keys, kt = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, gr = Object.getOwnPropertyDescriptors, yr = Object.prototype, _r = Array.prototype, Ei = Object.getPrototypeOf;
const mt = () => {
};
function ki(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let ot = [], Ht = [];
function Si() {
  var t = ot;
  ot = [], ki(t);
}
function xr() {
  var t = Ht;
  Ht = [], ki(t);
}
function ei(t) {
  ot.length === 0 && queueMicrotask(Si), ot.push(t);
}
function ui() {
  ot.length > 0 && Si(), Ht.length > 0 && xr();
}
function Di(t) {
  return t === this.v;
}
function Ti(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Cr(t) {
  return !Ti(t, this.v);
}
function Er(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Rr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $r() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Or() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ar() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Lr = false;
function ae(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Di,
    rv: 0,
    wv: 0
  };
  return i;
}
function It(t) {
  return /* @__PURE__ */ Mr(ae(t));
}
// @__NO_SIDE_EFFECTS__
function Ri(t, e = false) {
  const i = ae(t);
  return e || (i.equals = Cr), i;
}
// @__NO_SIDE_EFFECTS__
function Mr(t) {
  return R !== null && !J && (R.f & ee) !== 0 && (le === null ? Ur([t]) : le.push(t)), t;
}
function V(t, e) {
  return R !== null && !J && Qi() && (R.f & (ee | Jt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (le === null || !le.includes(t)) && Ar(), Nr(t, e);
}
function Nr(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = Ii(), $i(t, xe), A !== null && (A.f & H) !== 0 && (A.f & (_e | Ke)) === 0 && (ce === null ? Ir([t]) : ce.push(t))), e;
}
function $i(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var r = i.length, n = 0; n < r; n++) {
      var o = i[n], c = o.f;
      (c & xe) === 0 && (fe(o, e), (c & (H | G)) !== 0 && ((c & ee) !== 0 ? $i(
        /** @type {Derived} */
        o,
        We
      ) : ni(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Oi(t) {
  var e = ee | xe, i = R !== null && (R.f & ee) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return A === null || i !== null && (i.f & G) !== 0 ? e |= G : A.f |= xi, {
    ctx: U,
    deps: null,
    effects: null,
    equals: Di,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: i ?? A
  };
}
function Ai(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      ye(
        /** @type {Effect} */
        e[i]
      );
  }
}
function Fr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & ee) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Pr(t) {
  var e, i = A;
  ge(Fr(t));
  try {
    Ai(t), e = Ki(t);
  } finally {
    ge(i);
  }
  return e;
}
function Li(t) {
  var e = Pr(t), i = (me || (t.f & G) !== 0) && t.deps !== null ? We : H;
  fe(t, i), t.equals(e) || (t.v = e, t.wv = Ii());
}
function ti(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let te = false;
function bt(t) {
  te = t;
}
let I;
function St(t) {
  if (t === null)
    throw ti(), nt;
  return I = t;
}
function Mi() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Mt(I)
  );
}
function Bt(t) {
  if (te) {
    if (/* @__PURE__ */ Mt(I) !== null)
      throw ti(), nt;
    I = t;
  }
}
function Te(t, e = null, i) {
  if (typeof t != "object" || t === null || vt in t)
    return t;
  const r = Ei(t);
  if (r !== yr && r !== _r)
    return t;
  var n = /* @__PURE__ */ new Map(), o = Ci(t), c = ae(0);
  o && n.set("length", ae(
    /** @type {any[]} */
    t.length
  ));
  var h;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(v, d, m) {
        (!("value" in m) || m.configurable === false || m.enumerable === false || m.writable === false) && Rr();
        var p = n.get(d);
        return p === void 0 ? (p = ae(m.value), n.set(d, p)) : V(p, Te(m.value, h)), true;
      },
      deleteProperty(v, d) {
        var m = n.get(d);
        if (m === void 0)
          d in v && n.set(d, ae(K));
        else {
          if (o && typeof d == "string") {
            var p = (
              /** @type {Source<number>} */
              n.get("length")
            ), s = Number(d);
            Number.isInteger(s) && s < p.v && V(p, s);
          }
          V(m, K), ci(c);
        }
        return true;
      },
      get(v, d, m) {
        var _a2;
        if (d === vt)
          return t;
        var p = n.get(d), s = d in v;
        if (p === void 0 && (!s || ((_a2 = Be(v, d)) == null ? void 0 : _a2.writable)) && (p = ae(Te(s ? v[d] : K, h)), n.set(d, p)), p !== void 0) {
          var u = F(p);
          return u === K ? void 0 : u;
        }
        return Reflect.get(v, d, m);
      },
      getOwnPropertyDescriptor(v, d) {
        var m = Reflect.getOwnPropertyDescriptor(v, d);
        if (m && "value" in m) {
          var p = n.get(d);
          p && (m.value = F(p));
        } else if (m === void 0) {
          var s = n.get(d), u = s == null ? void 0 : s.v;
          if (s !== void 0 && u !== K)
            return {
              enumerable: true,
              configurable: true,
              value: u,
              writable: true
            };
        }
        return m;
      },
      has(v, d) {
        var _a2;
        if (d === vt)
          return true;
        var m = n.get(d), p = m !== void 0 && m.v !== K || Reflect.has(v, d);
        if (m !== void 0 || A !== null && (!p || ((_a2 = Be(v, d)) == null ? void 0 : _a2.writable))) {
          m === void 0 && (m = ae(p ? Te(v[d], h) : K), n.set(d, m));
          var s = F(m);
          if (s === K)
            return false;
        }
        return p;
      },
      set(v, d, m, p) {
        var _a2;
        var s = n.get(d), u = d in v;
        if (o && d === "length")
          for (var a = m; a < /** @type {Source<number>} */
          s.v; a += 1) {
            var l = n.get(a + "");
            l !== void 0 ? V(l, K) : a in v && (l = ae(K), n.set(a + "", l));
          }
        s === void 0 ? (!u || ((_a2 = Be(v, d)) == null ? void 0 : _a2.writable)) && (s = ae(void 0), V(s, Te(m, h)), n.set(d, s)) : (u = s.v !== K, V(s, Te(m, h)));
        var f = Reflect.getOwnPropertyDescriptor(v, d);
        if ((f == null ? void 0 : f.set) && f.set.call(p, m), !u) {
          if (o && typeof d == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), D = Number(d);
            Number.isInteger(D) && D >= E.v && V(E, D + 1);
          }
          ci(c);
        }
        return true;
      },
      ownKeys(v) {
        F(c);
        var d = Reflect.ownKeys(v).filter((s) => {
          var u = n.get(s);
          return u === void 0 || u.v !== K;
        });
        for (var [m, p] of n)
          p.v !== K && !(m in v) && d.push(m);
        return d;
      },
      setPrototypeOf() {
        $r();
      }
    }
  );
}
function ci(t, e = 1) {
  V(t, t.v + e);
}
var di, Ni, Fi, Pi;
function jt() {
  if (di === void 0) {
    di = window, Ni = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Fi = Be(e, "firstChild").get, Pi = Be(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function zi(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  return Fi.call(t);
}
// @__NO_SIDE_EFFECTS__
function Mt(t) {
  return Pi.call(t);
}
function Kt(t, e) {
  if (!te)
    return /* @__PURE__ */ Dt(t);
  var i = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(I)
  );
  return i === null && (i = I.appendChild(zi())), St(i), i;
}
function zr(t) {
  t.textContent = "";
}
let wt = false, Tt = false, Rt = null, gt = false, ii = false;
function fi(t) {
  ii = t;
}
let st = [];
let R = null, J = false;
function we(t) {
  R = t;
}
let A = null;
function ge(t) {
  A = t;
}
let le = null;
function Ur(t) {
  le = t;
}
let z = null, q = 0, ce = null;
function Ir(t) {
  ce = t;
}
let Ui = 1, $t = 0, me = false;
function Ii() {
  return ++Ui;
}
function Nt(t) {
  var _a2;
  var e = t.f;
  if ((e & xe) !== 0)
    return true;
  if ((e & We) !== 0) {
    var i = t.deps, r = (e & G) !== 0;
    if (i !== null) {
      var n, o, c = (e & xt) !== 0, h = r && A !== null && !me, v = i.length;
      if (c || h) {
        var d = (
          /** @type {Derived} */
          t
        ), m = d.parent;
        for (n = 0; n < v; n++)
          o = i[n], (c || !((_a2 = o == null ? void 0 : o.reactions) == null ? void 0 : _a2.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        c && (d.f ^= xt), h && m !== null && (m.f & G) === 0 && (d.f ^= G);
      }
      for (n = 0; n < v; n++)
        if (o = i[n], Nt(
          /** @type {Derived} */
          o
        ) && Li(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return true;
    }
    (!r || A !== null && !me) && fe(t, H);
  }
  return false;
}
function Br(t, e) {
  for (var i = e; i !== null; ) {
    if ((i.f & _t) !== 0)
      try {
        i.fn(t);
        return;
      } catch {
        i.f ^= _t;
      }
    i = i.parent;
  }
  throw wt = false, t;
}
function Kr(t) {
  return (t.f & Lt) === 0 && (t.parent === null || (t.parent.f & _t) === 0);
}
function Ft(t, e, i, r) {
  if (wt) {
    if (i === null && (wt = false), Kr(e))
      throw t;
    return;
  }
  i !== null && (wt = true);
  {
    Br(t, e);
    return;
  }
}
function Bi(t, e, i = true) {
  var r = t.reactions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      (o.f & ee) !== 0 ? Bi(
        /** @type {Derived} */
        o,
        e,
        false
      ) : e === o && (i ? fe(o, xe) : (o.f & H) !== 0 && fe(o, We), ni(
        /** @type {Effect} */
        o
      ));
    }
}
function Ki(t) {
  var _a2;
  var e = z, i = q, r = ce, n = R, o = me, c = le, h = U, v = J, d = t.f;
  z = /** @type {null | Value[]} */
  null, q = 0, ce = null, me = (d & G) !== 0 && (J || !gt || R === null), R = (d & (_e | Ke)) === 0 ? t : null, le = null, hi(t.ctx), J = false, $t++;
  try {
    var m = (
      /** @type {Function} */
      (0, t.fn)()
    ), p = t.deps;
    if (z !== null) {
      var s;
      if (Ot(t, q), p !== null && q > 0)
        for (p.length = q + z.length, s = 0; s < z.length; s++)
          p[q + s] = z[s];
      else
        t.deps = p = z;
      if (!me)
        for (s = q; s < p.length; s++)
          ((_a2 = p[s]).reactions ?? (_a2.reactions = [])).push(t);
    } else p !== null && q < p.length && (Ot(t, q), p.length = q);
    if (Qi() && ce !== null && !J && p !== null && (t.f & (ee | We | xe)) === 0)
      for (s = 0; s < /** @type {Source[]} */
      ce.length; s++)
        Bi(
          ce[s],
          /** @type {Effect} */
          t
        );
    return n !== null && $t++, m;
  } finally {
    z = e, q = i, ce = r, R = n, me = o, le = c, hi(h), J = v;
  }
}
function Wr(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var r = mr.call(i, t);
    if (r !== -1) {
      var n = i.length - 1;
      n === 0 ? i = e.reactions = null : (i[r] = i[n], i.pop());
    }
  }
  i === null && (e.f & ee) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !z.includes(e)) && (fe(e, We), (e.f & (G | xt)) === 0 && (e.f ^= xt), Ai(
    /** @type {Derived} **/
    e
  ), Ot(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ot(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var r = e; r < i.length; r++)
      Wr(t, i[r]);
}
function ri(t) {
  var e = t.f;
  if ((e & Lt) === 0) {
    fe(t, H);
    var i = A, r = U, n = gt;
    A = t, gt = true;
    try {
      (e & Jt) !== 0 ? nn(t) : Hi(t), Vi(t);
      var o = Ki(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Ui;
      var c = t.deps, h;
      li && Lr && t.f & xe;
    } catch (v) {
      Ft(v, t, i, r || t.ctx);
    } finally {
      gt = n, A = i;
    }
  }
}
function qr() {
  try {
    Dr();
  } catch (t) {
    if (Rt !== null)
      Ft(t, Rt, null);
    else
      throw t;
  }
}
function Wi() {
  try {
    for (var t = 0; st.length > 0; ) {
      t++ > 1e3 && qr();
      var e = st, i = e.length;
      st = [];
      for (var r = 0; r < i; r++) {
        var n = e[r];
        (n.f & H) === 0 && (n.f ^= H);
        var o = Hr(n);
        Vr(o);
      }
    }
  } finally {
    Tt = false, Rt = null;
  }
}
function Vr(t) {
  var e = t.length;
  if (e !== 0)
    for (var i = 0; i < e; i++) {
      var r = t[i];
      if ((r.f & (Lt | Ct)) === 0)
        try {
          Nt(r) && (ri(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? ji(r) : r.fn = null));
        } catch (n) {
          Ft(n, r, null, r.ctx);
        }
    }
}
function ni(t) {
  Tt || (Tt = true, queueMicrotask(Wi));
  for (var e = Rt = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if ((i & (Ke | _e)) !== 0) {
      if ((i & H) === 0) return;
      e.f ^= H;
    }
  }
  st.push(e);
}
function Hr(t) {
  for (var e = [], i = t.first; i !== null; ) {
    var r = i.f, n = (r & _e) !== 0, o = n && (r & H) !== 0;
    if (!o && (r & Ct) === 0) {
      if ((r & _i) !== 0)
        e.push(i);
      else if (n)
        i.f ^= H;
      else {
        var c = R;
        try {
          R = i, Nt(i) && ri(i);
        } catch (d) {
          Ft(d, i, null, i.ctx);
        } finally {
          R = c;
        }
      }
      var h = i.first;
      if (h !== null) {
        i = h;
        continue;
      }
    }
    var v = i.parent;
    for (i = i.next; i === null && v !== null; )
      i = v.next, v = v.parent;
  }
  return e;
}
function Ue(t) {
  var e;
  for (ui(); st.length > 0; )
    Tt = true, Wi(), ui();
  return (
    /** @type {T} */
    e
  );
}
function F(t) {
  var e = t.f, i = (e & ee) !== 0;
  if (R !== null && !J) {
    le !== null && le.includes(t) && Or();
    var r = R.deps;
    t.rv < $t && (t.rv = $t, z === null && r !== null && r[q] === t ? q++ : z === null ? z = [t] : (!me || !z.includes(t)) && z.push(t));
  } else if (i && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var n = (
      /** @type {Derived} */
      t
    ), o = n.parent;
    o !== null && (o.f & G) === 0 && (n.f ^= G);
  }
  return i && (n = /** @type {Derived} */
  t, Nt(n) && Li(n)), t.v;
}
function at(t) {
  var e = J;
  try {
    return J = true, t();
  } finally {
    J = e;
  }
}
const jr = -7169;
function fe(t, e) {
  t.f = t.f & jr | e;
}
function Gr(t) {
  A === null && R === null && Sr(), R !== null && (R.f & G) !== 0 && A === null && kr(), ii && Er();
}
function Yr(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function Re(t, e, i, r = true) {
  var n = (t & Ke) !== 0, o = A, c = {
    ctx: U,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | xe,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (i)
    try {
      ri(c), c.f |= hr;
    } catch (d) {
      throw ye(c), d;
    }
  else e !== null && ni(c);
  var h = i && c.deps === null && c.first === null && c.nodes_start === null && c.teardown === null && (c.f & (xi | _t)) === 0;
  if (!h && !n && r && (o !== null && Yr(c, o), R !== null && (R.f & ee) !== 0)) {
    var v = (
      /** @type {Derived} */
      R
    );
    (v.effects ?? (v.effects = [])).push(c);
  }
  return c;
}
function Xr(t) {
  const e = Re(At, null, false);
  return fe(e, H), e.teardown = t, e;
}
function Zr(t) {
  Gr();
  var e = A !== null && (A.f & _e) !== 0 && U !== null && !U.m;
  if (e) {
    var i = (
      /** @type {ComponentContext} */
      U
    );
    (i.e ?? (i.e = [])).push({
      fn: t,
      effect: A,
      reaction: R
    });
  } else {
    var r = si(t);
    return r;
  }
}
function Qr(t) {
  const e = Re(Ke, t, true);
  return () => {
    ye(e);
  };
}
function Jr(t) {
  const e = Re(Ke, t, true);
  return (i = {}) => new Promise((r) => {
    i.outro ? sn(e, () => {
      ye(e), r(void 0);
    }) : (ye(e), r(void 0));
  });
}
function si(t) {
  return Re(_i, t, false);
}
function qi(t) {
  return Re(At, t, true);
}
function en(t, e = [], i = Oi) {
  const r = e.map(i);
  return tn(() => t(...r.map(F)));
}
function tn(t, e = 0) {
  return Re(At | Jt | e, t, true);
}
function rn(t, e = true) {
  return Re(At | _e, t, true, e);
}
function Vi(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = ii, r = R;
    fi(true), we(null);
    try {
      e.call(null);
    } finally {
      fi(i), we(r);
    }
  }
}
function Hi(t, e = false) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    var r = i.next;
    ye(i, e), i = r;
  }
}
function nn(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    (e.f & _e) === 0 && ye(e), e = i;
  }
}
function ye(t, e = true) {
  var i = false;
  if ((e || (t.f & pr) !== 0) && t.nodes_start !== null) {
    for (var r = t.nodes_start, n = t.nodes_end; r !== null; ) {
      var o = r === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(r)
      );
      r.remove(), r = o;
    }
    i = true;
  }
  Hi(t, e && !i), Ot(t, 0), fe(t, Lt);
  var c = t.transitions;
  if (c !== null)
    for (const v of c)
      v.stop();
  Vi(t);
  var h = t.parent;
  h !== null && h.first !== null && ji(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function ji(t) {
  var e = t.parent, i = t.prev, r = t.next;
  i !== null && (i.next = r), r !== null && (r.prev = i), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = i));
}
function sn(t, e) {
  var i = [];
  Gi(t, i, true), on(i, () => {
    ye(t), e && e();
  });
}
function on(t, e) {
  var i = t.length;
  if (i > 0) {
    var r = () => --i || e();
    for (var n of t)
      n.out(r);
  } else
    e();
}
function Gi(t, e, i) {
  if ((t.f & Ct) === 0) {
    if (t.f ^= Ct, t.transitions !== null)
      for (const c of t.transitions)
        (c.is_global || i) && e.push(c);
    for (var r = t.first; r !== null; ) {
      var n = r.next, o = (r.f & br) !== 0 || (r.f & _e) !== 0;
      Gi(r, e, o ? i : false), r = n;
    }
  }
}
function Yi(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let U = null;
function hi(t) {
  U = t;
}
function Xi(t, e = false, i) {
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
function Zi(t) {
  const e = U;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const c = e.e;
    if (c !== null) {
      var i = A, r = R;
      e.e = null;
      try {
        for (var n = 0; n < c.length; n++) {
          var o = c[n];
          ge(o.effect), we(o.reaction), si(o.fn);
        }
      } finally {
        ge(i), we(r);
      }
    }
    U = e.p, e.m = true;
  }
  return t || /** @type {T} */
  {};
}
function Qi() {
  return true;
}
const an = ["touchstart", "touchmove"];
function ln(t) {
  return an.includes(t);
}
function un(t) {
  var e = R, i = A;
  we(null), ge(null);
  try {
    return t();
  } finally {
    we(e), ge(i);
  }
}
const Ji = /* @__PURE__ */ new Set(), Gt = /* @__PURE__ */ new Set();
function cn(t, e, i, r = {}) {
  function n(o) {
    if (r.capture || et.call(e, o), !o.cancelBubble)
      return un(() => i == null ? void 0 : i.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ei(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function pt(t, e, i, r, n) {
  var o = { capture: r, passive: n }, c = cn(t, e, i, o);
  (e === document.body || e === window || e === document) && Xr(() => {
    e.removeEventListener(t, c, o);
  });
}
function dn(t) {
  for (var e = 0; e < t.length; e++)
    Ji.add(t[e]);
  for (var i of Gt)
    i(t);
}
function et(t) {
  var _a2;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((_a2 = t.composedPath) == null ? void 0 : _a2.call(t)) || [], o = (
    /** @type {null | Element} */
    n[0] || t.target
  ), c = 0, h = t.__root;
  if (h) {
    var v = n.indexOf(h);
    if (v !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = n.indexOf(e);
    if (d === -1)
      return;
    v <= d && (c = v);
  }
  if (o = /** @type {Element} */
  n[c] || t.target, o !== e) {
    kt(t, "currentTarget", {
      configurable: true,
      get() {
        return o || i;
      }
    });
    var m = R, p = A;
    we(null), ge(null);
    try {
      for (var s, u = []; o !== null; ) {
        var a = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var l = o["__" + r];
          if (l !== void 0 && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (Ci(l)) {
              var [f, ...E] = l;
              f.apply(o, [t, ...E]);
            } else
              l.call(o, t);
        } catch (D) {
          s ? u.push(D) : s = D;
        }
        if (t.cancelBubble || a === e || a === null)
          break;
        o = a;
      }
      if (s) {
        for (let D of u)
          queueMicrotask(() => {
            throw D;
          });
        throw s;
      }
    } finally {
      t.__root = e, delete t.currentTarget, we(m), ge(p);
    }
  }
}
function fn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Yt(t, e) {
  var i = (
    /** @type {Effect} */
    A
  );
  i.nodes_start === null && (i.nodes_start = t, i.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function hn(t, e) {
  var i = (e & cr) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (te)
      return Yt(I, null), I;
    r === void 0 && (r = fn(n ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ Dt(r));
    var o = (
      /** @type {TemplateNode} */
      i || Ni ? document.importNode(r, true) : r.cloneNode(true)
    );
    return Yt(o, o), o;
  };
}
function er(t, e) {
  if (te) {
    A.nodes_end = I, Mi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function tr(t, e) {
  return ir(t, e);
}
function bn(t, e) {
  jt(), e.intro = e.intro ?? false;
  const i = e.target, r = te, n = I;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Dt(i)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== dr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Mt(o);
    if (!o)
      throw nt;
    bt(true), St(
      /** @type {Comment} */
      o
    ), Mi();
    const c = ir(t, { ...e, anchor: o });
    if (I === null || I.nodeType !== 8 || /** @type {Comment} */
    I.data !== fr)
      throw ti(), nt;
    return bt(false), /**  @type {Exports} */
    c;
  } catch (c) {
    if (c === nt)
      return e.recover === false && Tr(), jt(), zr(i), bt(false), tr(t, e);
    throw c;
  } finally {
    bt(r), St(n);
  }
}
const Fe = /* @__PURE__ */ new Map();
function ir(t, { target: e, anchor: i, props: r = {}, events: n, context: o, intro: c = true }) {
  jt();
  var h = /* @__PURE__ */ new Set(), v = (p) => {
    for (var s = 0; s < p.length; s++) {
      var u = p[s];
      if (!h.has(u)) {
        h.add(u);
        var a = ln(u);
        e.addEventListener(u, et, { passive: a });
        var l = Fe.get(u);
        l === void 0 ? (document.addEventListener(u, et, { passive: a }), Fe.set(u, 1)) : Fe.set(u, l + 1);
      }
    }
  };
  v(wr(Ji)), Gt.add(v);
  var d = void 0, m = Jr(() => {
    var p = i ?? e.appendChild(zi());
    return rn(() => {
      if (o) {
        Xi({});
        var s = (
          /** @type {ComponentContext} */
          U
        );
        s.c = o;
      }
      n && (r.$$events = n), te && Yt(
        /** @type {TemplateNode} */
        p,
        null
      ), d = t(p, r) || {}, te && (A.nodes_end = I), o && Zi();
    }), () => {
      var _a2;
      for (var s of h) {
        e.removeEventListener(s, et);
        var u = (
          /** @type {number} */
          Fe.get(s)
        );
        --u === 0 ? (document.removeEventListener(s, et), Fe.delete(s)) : Fe.set(s, u);
      }
      Gt.delete(v), p !== i && ((_a2 = p.parentNode) == null ? void 0 : _a2.removeChild(p));
    };
  });
  return Xt.set(d, m), d;
}
let Xt = /* @__PURE__ */ new WeakMap();
function pn(t, e) {
  const i = Xt.get(t);
  return i ? (Xt.delete(t), i(e)) : Promise.resolve();
}
function vn(t, e) {
  ei(() => {
    var i = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      i.host ? (
        /** @type {ShadowRoot} */
        i
      ) : (
        /** @type {Document} */
        i.head ?? /** @type {Document} */
        i.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, r.appendChild(n);
    }
  });
}
const bi = [...` 	
\r\f\xA0\v\uFEFF`];
function mn(t, e, i) {
  var r = t == null ? "" : "" + t;
  if (r = r ? r + " " + e : e, i) {
    for (var n in i)
      if (i[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var o = n.length, c = 0; (c = r.indexOf(n, c)) >= 0; ) {
          var h = c + o;
          (c === 0 || bi.includes(r[c - 1])) && (h === r.length || bi.includes(r[h])) ? r = (c === 0 ? "" : r.substring(0, c)) + r.substring(h + 1) : c = h;
        }
  }
  return r === "" ? null : r;
}
function wn(t, e, i, r, n, o) {
  var c = t.__className;
  if (te || c !== i) {
    var h = mn(i, r, o);
    (!te || h !== t.getAttribute("class")) && (h == null ? t.removeAttribute("class") : t.className = h), t.__className = i;
  } else if (o)
    for (var v in o) {
      var d = !!o[v];
      (n == null || d !== !!n[v]) && t.classList.toggle(v, d);
    }
  return o;
}
function pi(t, e, i, r) {
  var n = t.__attributes ?? (t.__attributes = {});
  te && (n[e] = t.getAttribute(e)), n[e] !== (n[e] = i) && ("__styles" in t && (t.__styles = {}), i == null ? t.removeAttribute(e) : typeof i != "string" && gn(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
var vi = /* @__PURE__ */ new Map();
function gn(t) {
  var e = vi.get(t.nodeName);
  if (e) return e;
  vi.set(t.nodeName, e = []);
  for (var i, r = t, n = Element.prototype; n !== r; ) {
    i = gr(r);
    for (var o in i)
      i[o].set && e.push(o);
    r = Ei(r);
  }
  return e;
}
function mi(t, e) {
  return t === e || (t == null ? void 0 : t[vt]) === e;
}
function Wt(t = {}, e, i, r) {
  return si(() => {
    var n, o;
    return qi(() => {
      n = o, o = [], at(() => {
        t !== i(...o) && (e(t, ...o), n && mi(i(...n), t) && e(null, ...n));
      });
    }), () => {
      ei(() => {
        o && mi(i(...o), t) && e(null, ...o);
      });
    };
  }), t;
}
function rr(t) {
  U === null && Yi(), Zr(() => {
    const e = at(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function yn(t) {
  U === null && Yi(), rr(() => () => at(t));
}
function _n(t, e, i) {
  if (t == null)
    return e(void 0), mt;
  const r = at(
    () => t.subscribe(
      e,
      // @ts-expect-error
      i
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Pe = [];
function nr(t, e = mt) {
  let i = null;
  const r = /* @__PURE__ */ new Set();
  function n(h) {
    if (Ti(t, h) && (t = h, i)) {
      const v = !Pe.length;
      for (const d of r)
        d[1](), Pe.push(d, t);
      if (v) {
        for (let d = 0; d < Pe.length; d += 2)
          Pe[d][0](Pe[d + 1]);
        Pe.length = 0;
      }
    }
  }
  function o(h) {
    n(h(
      /** @type {T} */
      t
    ));
  }
  function c(h, v = mt) {
    const d = [h, v];
    return r.add(d), r.size === 1 && (i = e(n, o) || mt), h(
      /** @type {T} */
      t
    ), () => {
      r.delete(d), r.size === 0 && i && (i(), i = null);
    };
  }
  return { set: n, update: o, subscribe: c };
}
function sr(t) {
  let e;
  return _n(t, (i) => e = i)(), e;
}
function Qe(t, e, i, r) {
  var n;
  n = /** @type {V} */
  t[e];
  var o = (
    /** @type {V} */
    r
  ), c = true, h = false, v = () => (h = true, c && (c = false, o = /** @type {V} */
  r), o), d;
  d = () => {
    var u = (
      /** @type {V} */
      t[e]
    );
    return u === void 0 ? v() : (c = true, h = false, u);
  };
  var m = false, p = /* @__PURE__ */ Ri(n), s = /* @__PURE__ */ Oi(() => {
    var u = d(), a = F(p);
    return m ? (m = false, a) : p.v = u;
  });
  return function(u, a) {
    if (arguments.length > 0) {
      const l = a ? F(s) : u;
      return s.equals(l) || (m = true, V(p, l), h && o !== void 0 && (o = l), at(() => F(s))), u;
    }
    return F(s);
  };
}
function xn(t) {
  return new Cn(t);
}
class Cn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    __privateAdd(this, _t2);
    /** @type {Record<string, any>} */
    __privateAdd(this, _e2);
    var _a2;
    var i = /* @__PURE__ */ new Map(), r = (o, c) => {
      var h = /* @__PURE__ */ Ri(c);
      return i.set(o, h), h;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(o, c) {
          return F(i.get(c) ?? r(c, Reflect.get(o, c)));
        },
        has(o, c) {
          return c === vr ? true : (F(i.get(c) ?? r(c, Reflect.get(o, c))), Reflect.has(o, c));
        },
        set(o, c, h) {
          return V(i.get(c) ?? r(c, h), h), Reflect.set(o, c, h);
        }
      }
    );
    __privateSet(this, _e2, (e.hydrate ? bn : tr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? false,
      recover: e.recover
    })), (!((_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.$$host) || e.sync === false) && Ue(), __privateSet(this, _t2, n.$$events);
    for (const o of Object.keys(__privateGet(this, _e2)))
      o === "$set" || o === "$destroy" || o === "$on" || kt(this, o, {
        get() {
          return __privateGet(this, _e2)[o];
        },
        /** @param {any} value */
        set(c) {
          __privateGet(this, _e2)[o] = c;
        },
        enumerable: true
      });
    __privateGet(this, _e2).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(n, o);
    }, __privateGet(this, _e2).$destroy = () => {
      pn(__privateGet(this, _e2));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    __privateGet(this, _e2).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, i) {
    __privateGet(this, _t2)[e] = __privateGet(this, _t2)[e] || [];
    const r = (...n) => i.call(this, ...n);
    return __privateGet(this, _t2)[e].push(r), () => {
      __privateGet(this, _t2)[e] = __privateGet(this, _t2)[e].filter(
        /** @param {any} fn */
        (n) => n !== r
      );
    };
  }
  $destroy() {
    __privateGet(this, _e2).$destroy();
  }
}
_t2 = new WeakMap();
_e2 = new WeakMap();
let or;
typeof HTMLElement == "function" && (or = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, i) {
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
    this.$$ctor = t, this.$$s = e, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, i) {
    if (super.removeEventListener(t, e, i), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = true, !this.$$c) {
      let t = function(r) {
        return (n) => {
          const o = document.createElement("slot");
          r !== "default" && (o.name = r), er(n, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, i = En(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = true) : e[r] = t(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = yt(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = xn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Qr(() => {
        qi(() => {
          var _a2;
          this.$$r = true;
          for (const r of Et(this.$$c)) {
            if (!((_a2 = this.$$p_d[r]) == null ? void 0 : _a2.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const n = yt(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            n == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, n);
          }
          this.$$r = false;
        });
      });
      for (const r in this.$$l)
        for (const n of this.$$l[r]) {
          const o = this.$$c.$on(r, n);
          this.$$l_u.set(n, o);
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
  attributeChangedCallback(t, e, i) {
    var _a2;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = yt(t, i, this.$$p_d, "toProp"), (_a2 = this.$$c) == null ? void 0 : _a2.$set({ [t]: this.$$d[t] }));
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
    return Et(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function yt(t, e, i, r) {
  var _a2;
  const n = (_a2 = i[t]) == null ? void 0 : _a2.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !i[t])
    return e;
  if (r === "toAttribute")
    switch (n) {
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
    switch (n) {
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
function En(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = true;
  }), e;
}
function kn(t, e, i, r, n, o) {
  let c = class extends or {
    constructor() {
      super(t, i, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Et(e).map(
        (h) => (e[h].attribute || h).toLowerCase()
      );
    }
  };
  return Et(e).forEach((h) => {
    kt(c.prototype, h, {
      get() {
        return this.$$c && h in this.$$c ? this.$$c[h] : this.$$d[h];
      },
      set(v) {
        var _a2;
        v = yt(h, v, e), this.$$d[h] = v;
        var d = this.$$c;
        if (d) {
          var m = (_a2 = Be(d, h)) == null ? void 0 : _a2.get;
          m ? d[h] = v : d.$set({ [h]: v });
        }
      }
    });
  }), r.forEach((h) => {
    kt(c.prototype, h, {
      get() {
        var _a2;
        return (_a2 = this.$$c) == null ? void 0 : _a2[h];
      }
    });
  }), o && (c = o(c)), t.element = /** @type {any} */
  c, c;
}
class Sn {
  constructor() {
    __publicField(this, "verbose", false);
  }
  info(e) {
    this.verbose && console.log(e);
  }
  error(e, i) {
    this.verbose && console.error(e, i);
  }
}
const P = new Sn();
function Dn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var tt = { exports: {} }, Tn = tt.exports, wi;
function Rn() {
  return wi || (wi = 1, (function(t, e) {
    (function(i, r) {
      var n = "1.0.41", o = "", c = "?", h = "function", v = "undefined", d = "object", m = "string", p = "major", s = "model", u = "name", a = "type", l = "vendor", f = "version", E = "architecture", D = "console", y = "mobile", w = "tablet", M = "smarttv", N = "wearable", ie = "embedded", Y = 500, he = "Amazon", re = "Apple", qe = "ASUS", lt = "BlackBerry", Ce = "Browser", Ee = "Chrome", Pt = "Edge", $e = "Firefox", Oe = "Google", ut = "Honor", X = "Huawei", zt = "Lenovo", Ae = "LG", Ve = "Microsoft", He = "Motorola", Le = "Nvidia", ct = "OnePlus", ke = "Opera", je = "OPPO", Se = "Samsung", dt = "Sharp", Z = "Sony", Ge = "Xiaomi", Me = "Zebra", Ye = "Facebook", Xe = "Chromium OS", De = "Mac OS", be = " Browser", ft = function(C, S) {
        var x = {};
        for (var O in C)
          S[O] && S[O].length % 2 === 0 ? x[O] = S[O].concat(C[O]) : x[O] = C[O];
        return x;
      }, pe = function(C) {
        for (var S = {}, x = 0; x < C.length; x++)
          S[C[x].toUpperCase()] = C[x];
        return S;
      }, j = function(C, S) {
        return typeof C === m ? b(S).indexOf(b(C)) !== -1 : false;
      }, b = function(C) {
        return C.toLowerCase();
      }, _ = function(C) {
        return typeof C === m ? C.replace(/[^\d\.]/g, o).split(".")[0] : r;
      }, $ = function(C, S) {
        if (typeof C === m)
          return C = C.replace(/^\s\s*/, o), typeof S === v ? C : C.substring(0, Y);
      }, k = function(C, S) {
        for (var x = 0, O, ue, ne, T, g, se; x < S.length && !g; ) {
          var Ut = S[x], ai = S[x + 1];
          for (O = ue = 0; O < Ut.length && !g && Ut[O]; )
            if (g = Ut[O++].exec(C), g)
              for (ne = 0; ne < ai.length; ne++)
                se = g[++ue], T = ai[ne], typeof T === d && T.length > 0 ? T.length === 2 ? typeof T[1] == h ? this[T[0]] = T[1].call(this, se) : this[T[0]] = T[1] : T.length === 3 ? typeof T[1] === h && !(T[1].exec && T[1].test) ? this[T[0]] = se ? T[1].call(this, se, T[2]) : r : this[T[0]] = se ? se.replace(T[1], T[2]) : r : T.length === 4 && (this[T[0]] = se ? T[3].call(this, se.replace(T[1], T[2])) : r) : this[T] = se || r;
          x += 2;
        }
      }, L = function(C, S) {
        for (var x in S)
          if (typeof S[x] === d && S[x].length > 0) {
            for (var O = 0; O < S[x].length; O++)
              if (j(S[x][O], C))
                return x === c ? r : x;
          } else if (j(S[x], C))
            return x === c ? r : x;
        return S.hasOwnProperty("*") ? S["*"] : C;
      }, B = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, Ze = {
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
      }, oi = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [f, [u, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [f, [u, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [u, f],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [f, [u, ke + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [f, [u, ke + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [f, [u, ke]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [f, [u, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [f, [u, "Maxthon"]],
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
          [u, f],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [f, [u, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [f, [u, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [f, [u, "UC" + Ce]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [f, [u, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [f, [u, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [f, [u, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [f, [u, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [f, [u, "Smart Lenovo " + Ce]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[u, /(.+)/, "$1 Secure " + Ce], f],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [f, [u, $e + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [f, [u, ke + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [f, [u, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [f, [u, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [f, [u, ke + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [f, [u, "MIUI" + be]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [f, [u, $e]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [f, [u, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[u, /(.+)/, "$1Browser"], f],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[u, /(.+)/, "$1" + be], f],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [f, [u, Se + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [f, [u, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[u, "Sogou Mobile"], f],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [u, f],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [u],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [f, u],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[u, Ye], f],
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
          [u, f],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [f, [u, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [f, [u, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [f, [u, Ee + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[u, Ee + " WebView"], f],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [f, [u, "Android " + Ce]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [u, f],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [f, [u, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [f, u],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [u, [f, L, B]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [u, f],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[u, "Netscape"], f],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [u, f],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [f, [u, $e + " Reality"]],
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
          [u, [f, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [u, [f, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i
            // AMD64 (x64)
          ],
          [[E, "amd64"]],
          [
            /(ia32(?=;))/i,
            // IA32 (quicktime)
            /\b((i[346]|x)86)(pc)?\b/i
            // IA32 (x86)
          ],
          [[E, "ia32"]],
          [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
            // ARM64
          ],
          [[E, "arm64"]],
          [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[E, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
          ],
          [[E, "arm"]],
          [
            /((ppc|powerpc)(64)?)( mac|;|\))/i
            // PowerPC
          ],
          [[E, /ower/, o, b]],
          [
            / sun4\w[;\)]/i
            // SPARC
          ],
          [[E, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[E, b]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [s, [l, Se], [a, w]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [s, [l, Se], [a, y]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [s, [l, re], [a, y]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [s, [l, re], [a, w]],
          [
            /(macintosh);/i
          ],
          [s, [l, re]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [s, [l, dt], [a, y]],
          [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
          ],
          [s, [l, ut], [a, w]],
          [
            /honor([-\w ]+)[;\)]/i
          ],
          [s, [l, ut], [a, y]],
          [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
          ],
          [s, [l, X], [a, w]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [s, [l, X], [a, y]],
          [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[s, /_/g, " "], [l, Ge], [a, w]],
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
          [[s, /_/g, " "], [l, Ge], [a, y]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [s, [l, je], [a, y]],
          [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
          ],
          [s, [l, L, { OnePlus: ["304", "403", "203"], "*": je }], [a, w]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [s, [l, "Vivo"], [a, y]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [s, [l, "Realme"], [a, y]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [s, [l, He], [a, y]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [s, [l, He], [a, w]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [s, [l, Ae], [a, w]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [s, [l, Ae], [a, y]],
          [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
          ],
          [s, [l, zt], [a, w]],
          [
            // Nokia
            /(nokia) (t[12][01])/i
          ],
          [l, s, [a, w]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*))/i
          ],
          [[s, /_/g, " "], [a, y], [l, "Nokia"]],
          [
            // Google
            /(pixel (c|tablet))\b/i
            // Google Pixel C/Tablet
          ],
          [s, [l, Oe], [a, w]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [s, [l, Oe], [a, y]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [s, [l, Z], [a, y]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[s, "Xperia Tablet"], [l, Z], [a, w]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [s, [l, ct], [a, y]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [s, [l, he], [a, w]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[s, /(.+)/g, "Fire Phone $1"], [l, he], [a, y]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [s, l, [a, w]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [s, [l, lt], [a, y]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [s, [l, qe], [a, w]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [s, [l, qe], [a, y]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [s, [l, "HTC"], [a, w]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [l, [s, /_/g, " "], [a, y]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [s, [l, "TCL"], [a, w]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[l, b], s, [a, L, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [s, [l, "Acer"], [a, w]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [s, [l, "Meizu"], [a, y]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [s, [l, "Ulefone"], [a, y]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [s, [l, "Energizer"], [a, y]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [s, [l, "Cat"], [a, y]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [s, [l, "Smartfren"], [a, y]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [s, [l, "Nothing"], [a, y]],
          [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
          ],
          [s, [l, "Archos"], [a, w]],
          [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
          ],
          [s, [l, "Archos"], [a, y]],
          [
            // MIXED
            /(imo) (tab \w+)/i,
            // IMO
            /(infinix) (x1101b?)/i
            // Infinix XPad
          ],
          [l, s, [a, w]],
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
          [l, s, [a, y]],
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
          [l, s, [a, w]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [s, [l, Ve], [a, w]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [s, [l, "Fairphone"], [a, y]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [s, [l, "AT&T"], [a, y]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [s, [l, "Siemens"], [a, y]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [s, [l, "RCA"], [a, w]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [s, [l, "Dell"], [a, w]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [s, [l, "Verizon"], [a, w]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [s, [l, "Barnes & Noble"], [a, w]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [s, [l, "NuVision"], [a, w]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [s, [l, "ZTE"], [a, w]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [s, [l, "ZTE"], [a, y]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [s, [l, "Swiss"], [a, y]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [s, [l, "Swiss"], [a, w]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [s, [l, "Zeki"], [a, w]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[l, "Dragon Touch"], s, [a, w]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [s, [l, "Insignia"], [a, w]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [s, [l, "NextBook"], [a, w]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[l, "Voice"], s, [a, y]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[l, "LvTel"], s, [a, y]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [s, [l, "Essential"], [a, y]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [s, [l, "Envizen"], [a, w]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [s, [l, "MachSpeed"], [a, w]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [s, [l, "Rotor"], [a, w]],
          [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
            // Nvidia Tablets
          ],
          [s, [l, Le], [a, w]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [l, s, [a, y]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[s, /\./g, " "], [l, Ve], [a, y]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [s, [l, Me], [a, w]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [s, [l, Me], [a, y]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [l, [a, M]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[s, /^/, "SmartTV"], [l, Se], [a, M]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[l, Ae], [a, M]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [l, [s, re + " TV"], [a, M]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[s, Ee + "cast"], [l, Oe], [a, M]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [s, [l, he], [a, M]],
          [
            /(shield \w+ tv)/i
            // Nvidia Shield TV
          ],
          [s, [l, Le], [a, M]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [s, [l, dt], [a, M]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [s, [l, Z], [a, M]],
          [
            /(mi(tv|box)-?\w+) bui/i
            // Xiaomi
          ],
          [s, [l, Ge], [a, M]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [l, s, [a, M]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[l, $], [s, $], [a, M]],
          [
            // SmartTV from Unidentified Vendors
            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
          ],
          [s, [a, M]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          ],
          [[a, M]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [l, s, [a, D]],
          [
            /droid.+; (shield)( bui|\))/i
            // Nvidia Portable
          ],
          [s, [l, Le], [a, D]],
          [
            /(playstation \w+)/i
            // Playstation
          ],
          [s, [l, Z], [a, D]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [s, [l, Ve], [a, D]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
            // Samsung Galaxy Watch
          ],
          [s, [l, Se], [a, N]],
          [
            /((pebble))app/i,
            // Pebble
            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
            // Asus ZenWatch / LG Watch / Pixel Watch
          ],
          [l, s, [a, N]],
          [
            /(ow(?:19|20)?we?[1-3]{1,3})/i
            // Oppo Watch
          ],
          [s, [l, je], [a, N]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [s, [l, re], [a, N]],
          [
            /(opwwe\d{3})/i
            // OnePlus Watch
          ],
          [s, [l, ct], [a, N]],
          [
            /(moto 360)/i
            // Motorola 360
          ],
          [s, [l, He], [a, N]],
          [
            /(smartwatch 3)/i
            // Sony SmartWatch
          ],
          [s, [l, Z], [a, N]],
          [
            /(g watch r)/i
            // LG G Watch R
          ],
          [s, [l, Ae], [a, N]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [s, [l, Me], [a, N]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [s, [l, Oe], [a, N]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [l, s, [a, N]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [s, [l, Ye], [a, N]],
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
          [s, [l, he], [a, ie]],
          [
            /(homepod).+mac os/i
            // Apple HomePod
          ],
          [s, [l, re], [a, ie]],
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
          [s, [a, y]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [s, [a, w]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[a, w]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[a, y]],
          [
            /droid .+?; ([\w\. -]+)( bui|\))/i
            // Generic Android Device
          ],
          [s, [l, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [f, [u, Pt + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [u, f],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [f, [u, "Blink"]],
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
          [u, f],
          [
            /ladybird\//i
          ],
          [[u, "LibWeb"]],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [f, u]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [u, f],
          [
            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [u, [f, L, Ze]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[f, L, Ze], [u, "Windows"]],
          [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[f, /_/g, "."], [u, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[u, De], [f, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [f, u],
          [
            /(ubuntu) ([\w\.]+) like android/i
            // Ubuntu Touch
          ],
          [[u, /(.+)/, "$1 Touch"], f],
          [
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
          ],
          [u, f],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [f, [u, lt]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [f, [u, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [f, [u, $e + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [f, [u, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [f, [u, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [f, [u, Ee + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[u, Xe], f],
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
          [u, f],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[u, "Solaris"], f],
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
          [u, f]
        ]
      }, Q = function(C, S) {
        if (typeof C === d && (S = C, C = r), !(this instanceof Q))
          return new Q(C, S).getResult();
        var x = typeof i !== v && i.navigator ? i.navigator : r, O = C || (x && x.userAgent ? x.userAgent : o), ue = x && x.userAgentData ? x.userAgentData : r, ne = S ? ft(oi, S) : oi, T = x && x.userAgent == O;
        return this.getBrowser = function() {
          var g = {};
          return g[u] = r, g[f] = r, k.call(g, O, ne.browser), g[p] = _(g[f]), T && x && x.brave && typeof x.brave.isBrave == h && (g[u] = "Brave"), g;
        }, this.getCPU = function() {
          var g = {};
          return g[E] = r, k.call(g, O, ne.cpu), g;
        }, this.getDevice = function() {
          var g = {};
          return g[l] = r, g[s] = r, g[a] = r, k.call(g, O, ne.device), T && !g[a] && ue && ue.mobile && (g[a] = y), T && g[s] == "Macintosh" && x && typeof x.standalone !== v && x.maxTouchPoints && x.maxTouchPoints > 2 && (g[s] = "iPad", g[a] = w), g;
        }, this.getEngine = function() {
          var g = {};
          return g[u] = r, g[f] = r, k.call(g, O, ne.engine), g;
        }, this.getOS = function() {
          var g = {};
          return g[u] = r, g[f] = r, k.call(g, O, ne.os), T && !g[u] && ue && ue.platform && ue.platform != "Unknown" && (g[u] = ue.platform.replace(/chrome os/i, Xe).replace(/macos/i, De)), g;
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
          return O;
        }, this.setUA = function(g) {
          return O = typeof g === m && g.length > Y ? $(g, Y) : g, this;
        }, this.setUA(O), this;
      };
      Q.VERSION = n, Q.BROWSER = pe([u, f, p]), Q.CPU = pe([E]), Q.DEVICE = pe([s, l, a, D, y, M, w, N, ie]), Q.ENGINE = Q.OS = pe([u, f]), t.exports && (e = t.exports = Q), e.UAParser = Q;
      var Ne = typeof i !== v && (i.jQuery || i.Zepto);
      if (Ne && !Ne.ua) {
        var ht = new Q();
        Ne.ua = ht.getResult(), Ne.ua.get = function() {
          return ht.getUA();
        }, Ne.ua.set = function(C) {
          ht.setUA(C);
          var S = ht.getResult();
          for (var x in S)
            Ne.ua[x] = S[x];
        };
      }
    })(typeof window == "object" ? window : Tn);
  })(tt, tt.exports)), tt.exports;
}
var $n = Rn();
const On = /* @__PURE__ */ Dn($n), An = new On(), ar = An.getResult(), Ln = (_a = ar.engine.name) == null ? void 0 : _a.toLowerCase(), gi = Number((_b = ar.engine.version) == null ? void 0 : _b.split(".")[0]), qt = {
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
}, yi = {
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
}, Mn = {
  "0x0054": "PrintScreen",
  "0xE020": "VolumeMute",
  // The documentation says it's 'AudioVolumeMute', but the actual test shows that it's 'VolumeMute'.
  "0xE02E": "VolumeDown",
  "0xE030": "VolumeUp",
  "0xE05B": gi > 117 ? "MetaLeft" : "OSLeft",
  "0xE05C": gi > 117 ? "MetaRight" : "OSRight"
}, Nn = {
  blink: Vt({ ...qt, ...yi }),
  gecko: Vt({ ...qt, ...Mn }),
  webkit: Vt({ ...qt, ...yi })
};
function Vt(t) {
  const e = {};
  for (const [i, r] of Object.entries(t))
    e[r] = i;
  return e;
}
const Je = function(t) {
  const e = Nn[Ln];
  return parseInt(e[t], 16);
};
var it = /* @__PURE__ */ ((t) => (t.CTRL_LEFT = "ControlLeft", t.SHIFT_LEFT = "ShiftLeft", t.SHIFT_RIGHT = "ShiftRight", t.ALT_LEFT = "AltLeft", t.CTRL_RIGHT = "ControlRight", t.ALT_RIGHT = "AltRight", t.ControlLeft = "ControlLeft", t.ShiftLeft = "ShiftLeft", t.ShiftRight = "ShiftRight", t.AltLeft = "AltLeft", t.ControlRight = "ControlRight", t.AltRight = "AltRight", t))(it || {}), Ie = /* @__PURE__ */ ((t) => (t.CAPS_LOCK = "CapsLock", t.NUM_LOCK = "NumLock", t.SCROLL_LOCK = "ScrollLock", t.KANA_MODE = "KanaMode", t.CapsLock = "CapsLock", t.ScrollLock = "ScrollLock", t.NumLock = "NumLock", t.KanaMode = "KanaMode", t))(Ie || {}), de = /* @__PURE__ */ ((t) => (t[t.CTRL_ALT_DEL = 0] = "CTRL_ALT_DEL", t[t.META = 1] = "META", t[t.CTRL_C = 2] = "CTRL_C", t[t.CTRL_V = 3] = "CTRL_V", t))(de || {}), ve = /* @__PURE__ */ ((t) => (t[t.Fit = 1] = "Fit", t[t.Full = 2] = "Full", t[t.Real = 3] = "Real", t))(ve || {}), rt = /* @__PURE__ */ ((t) => (t[t.Pixel = 0] = "Pixel", t[t.Line = 1] = "Line", t[t.Page = 2] = "Page", t))(rt || {});
class Fn {
  constructor(e, i, r) {
    __publicField(this, "username");
    __publicField(this, "password");
    __publicField(this, "destination");
    __publicField(this, "proxyAddress");
    __publicField(this, "serverDomain");
    __publicField(this, "authToken");
    __publicField(this, "desktopSize");
    __publicField(this, "extensions");
    this.username = e.username, this.password = e.password, this.proxyAddress = i.address, this.authToken = i.authToken, this.destination = r.destination, this.serverDomain = r.serverDomain, this.extensions = r.extensions, this.desktopSize = r.desktopSize;
  }
}
class Pn {
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
    const e = { username: this.username, password: this.password }, i = { address: this.proxyAddress, authToken: this.authToken }, r = {
      destination: this.destination,
      serverDomain: this.serverDomain,
      extensions: this.extensions,
      desktopSize: this.desktopSize
    };
    return new Fn(e, i, r);
  }
}
class ze {
  constructor() {
    __publicField(this, "subscribers");
    this.subscribers = [];
  }
  subscribe(e) {
    this.subscribers.push(e);
  }
  publish(e) {
    for (const i of this.subscribers)
      i(e);
  }
}
class zn {
  constructor(e) {
    __publicField(this, "module");
    __publicField(this, "canvas");
    __publicField(this, "keyboardUnicodeMode", false);
    __publicField(this, "backendSupportsUnicodeKeyboardShortcuts");
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
    __publicField(this, "sessionStartedObservable", new ze());
    __publicField(this, "resizeObservable", new ze());
    __publicField(this, "session");
    __publicField(this, "modifierKeyPressed", []);
    __publicField(this, "mousePositionObservable", new ze());
    __publicField(this, "changeVisibilityObservable", new ze());
    __publicField(this, "scaleObservable", new ze());
    __publicField(this, "dynamicResizeObservable", new ze());
    this.module = e, P.info("Web bridge initialized.");
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
    const r = [
      [1, 0],
      // left button
      [2, 2],
      // right button
      [4, 1]
      // middle button
    ].filter(([n]) => (e.buttons & n) === 0).map(([, n]) => this.module.DeviceEvent.mouseButtonReleased(n));
    r.length > 0 && this.doTransactionFromDeviceEvents(r);
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
  mouseButtonState(e, i, r) {
    r && e.preventDefault();
    const n = i ? this.module.DeviceEvent.mouseButtonPressed : this.module.DeviceEvent.mouseButtonReleased;
    this.doTransactionFromDeviceEvents([n(e.button)]);
  }
  updateMousePosition(e) {
    this.doTransactionFromDeviceEvents([this.module.DeviceEvent.mouseMove(e.x, e.y)]), this.mousePositionObservable.publish(e);
  }
  configBuilder() {
    return new Pn();
  }
  async connect(e) {
    var _a2;
    const i = new this.module.SessionBuilder();
    if (i.proxyAddress(e.proxyAddress), i.destination(e.destination), i.serverDomain(e.serverDomain), i.password(e.password), i.authToken(e.authToken), i.username(e.username), i.renderCanvas(this.canvas), i.setCursorStyleCallbackContext(this), i.setCursorStyleCallback(this.setCursorStyleCallback), e.extensions.forEach((o) => {
      i.extension(o);
    }), this.onRemoteClipboardChanged != null && this.enableClipboard && i.remoteClipboardChangedCallback(this.onRemoteClipboardChanged), this.onForceClipboardUpdate != null && this.enableClipboard && i.forceClipboardUpdateCallback(this.onForceClipboardUpdate), this.fileTransferProvider != null && this.enableClipboard)
      for (const o of this.fileTransferProvider.getBuilderExtensions())
        i.extension(o);
    this.onCanvasResized != null && i.canvasResizedCallback(this.onCanvasResized), e.desktopSize != null && i.desktopSize(
      new this.module.DesktopSize(e.desktopSize.width, e.desktopSize.height)
    );
    const r = await i.connect();
    this.session = r, (_a2 = this.fileTransferProvider) == null ? void 0 : _a2.setSession(r), this.resizeObservable.publish({
      desktopSize: r.desktopSize(),
      sessionId: 0
    }), this.sessionStartedObservable.publish(null);
    const n = async () => {
      try {
        return P.info("Starting the session."), await r.run();
      } finally {
        this.setVisibility(false);
      }
    };
    return {
      sessionId: 0,
      initialDesktopSize: r.desktopSize(),
      websocketPort: 0,
      run: n
    };
  }
  sendSpecialCombination(e) {
    switch (e) {
      case de.CTRL_ALT_DEL:
        this.ctrlAltDel();
        break;
      case de.META:
        this.sendMeta();
        break;
      case de.CTRL_C:
        this.sendCtrlC();
        break;
      case de.CTRL_V:
        this.sendCtrlV();
        break;
    }
  }
  rotation_unit_from_wheel_event(e) {
    switch (e.deltaMode) {
      case e.DOM_DELTA_PIXEL:
        return rt.Pixel;
      case e.DOM_DELTA_LINE:
        return rt.Line;
      case e.DOM_DELTA_PAGE:
        return rt.Page;
      default:
        return rt.Pixel;
    }
  }
  mouseWheel(e) {
    const i = e.deltaY !== 0, r = i ? e.deltaY : e.deltaX, n = this.rotation_unit_from_wheel_event(e);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.wheelRotations(i, -r, n)
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
  resizeDynamic(e, i, r) {
    var _a2;
    this.dynamicResizeObservable.publish({ width: e, height: i }), (_a2 = this.session) == null ? void 0 : _a2.resize(e, i, r);
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
    this.modifierKeyPressed = [], (_a2 = this.session) == null ? void 0 : _a2.releaseAllInputs();
  }
  supportsUnicodeKeyboardShortcuts() {
    var _a2, _b2;
    return this.backendSupportsUnicodeKeyboardShortcuts !== void 0 ? this.backendSupportsUnicodeKeyboardShortcuts : ((_a2 = this.session) == null ? void 0 : _a2.supportsUnicodeKeyboardShortcuts) ? (this.backendSupportsUnicodeKeyboardShortcuts = (_b2 = this.session) == null ? void 0 : _b2.supportsUnicodeKeyboardShortcuts(), this.backendSupportsUnicodeKeyboardShortcuts) : true;
  }
  sendKeyboard(e) {
    e.preventDefault();
    let i, r;
    e.type === "keydown" ? (i = this.module.DeviceEvent.keyPressed, r = this.module.DeviceEvent.unicodePressed) : e.type === "keyup" && (i = this.module.DeviceEvent.keyReleased, r = this.module.DeviceEvent.unicodeReleased);
    let n = true;
    if (!this.supportsUnicodeKeyboardShortcuts()) {
      for (const d of ["Alt", "Control", "Meta", "AltGraph", "OS"])
        if (e.getModifierState(d)) {
          n = false;
          break;
        }
    }
    const o = e.code in it, c = e.code in Ie, h = e.key.length === 1 ? e.key.codePointAt(0) ?? 0 : 0, v = this.keyboardUnicodeMode && h >= 32 && h !== 127 && !o && !/^[a-z]$/i.test(e.key) && (e.altKey || e.getModifierState("AltGraph")) && !e.metaKey && !(e.ctrlKey && !e.altKey);
    if (o && this.updateModifierKeyState(e), c && this.syncModifier(e), !e.repeat || !o && !c) {
      let d = e.code;
      !n && /^[a-z]$/i.test(e.key) && (d = "Key" + e.key.toUpperCase());
      const m = Je(d), p = Number.isNaN(m);
      if (!this.keyboardUnicodeMode && i && !p) {
        this.doTransactionFromDeviceEvents([i(m)]);
        return;
      }
      if (this.keyboardUnicodeMode && r && i) {
        if (["Dead", "Unidentified"].indexOf(e.key) != -1)
          return;
        if (v) {
          const f = [];
          if (e.type === "keydown")
            for (const E of ["ControlLeft", "ControlRight", "AltLeft", "AltRight"]) {
              const D = Je(E);
              Number.isNaN(D) || f.push(this.module.DeviceEvent.keyReleased(D));
            }
          f.push(r(e.key)), this.doTransactionFromDeviceEvents(f);
          return;
        }
        const s = Je(e.key), u = Number.isNaN(s) && e.key.length === 1 && !o, a = /^[0-9]$/.test(e.key) && /^Digit[0-9]$/.test(e.code), l = a ? Je(e.code) : NaN;
        if (a && !Number.isNaN(l) && i) {
          const f = e.type === "keydown" && e.shiftKey ? this.heldShiftScanCodes() : [], E = [];
          for (const D of f)
            E.push(this.module.DeviceEvent.keyReleased(D));
          E.push(i(l));
          for (const D of f)
            E.push(this.module.DeviceEvent.keyPressed(D));
          this.doTransactionFromDeviceEvents(E);
          return;
        }
        if (u && n) {
          const f = e.type === "keydown" && e.shiftKey ? this.heldShiftScanCodes() : [];
          if (f.length > 0) {
            const E = [];
            for (const D of f)
              E.push(this.module.DeviceEvent.keyReleased(D));
            E.push(r(e.key));
            for (const D of f)
              E.push(this.module.DeviceEvent.keyPressed(D));
            this.doTransactionFromDeviceEvents(E);
          } else
            this.doTransactionFromDeviceEvents([r(e.key)]);
        } else p || this.doTransactionFromDeviceEvents([i(m)]);
        return;
      }
    }
  }
  setCursorStyleCallback(e, i, r, n) {
    let o;
    switch (e) {
      case "hidden": {
        o = "none";
        break;
      }
      case "default": {
        o = "default";
        break;
      }
      case "url": {
        if (i == null || r == null || n == null) {
          console.error("Invalid custom cursor parameters.");
          return;
        }
        const c = new Image();
        c.src = i;
        const h = Math.round(r), v = Math.round(n);
        o = `url(${i}) ${h} ${v}, default`;
        break;
      }
      default: {
        console.error(`Unsupported cursor style: ${e}.`);
        return;
      }
    }
    this.lastCursorStyle = o, this.cursorHasOverride || (this.canvas.style.cursor = o);
  }
  syncModifier(e) {
    var _a2;
    const i = e.getModifierState(Ie.CAPS_LOCK), r = e.getModifierState(Ie.NUM_LOCK), n = e.getModifierState(Ie.SCROLL_LOCK), o = e.getModifierState(Ie.KANA_MODE);
    (_a2 = this.session) == null ? void 0 : _a2.synchronizeLockKeys(
      n,
      r,
      i,
      o
    );
  }
  /// Windows scancodes for the Shift key(s) currently held down, as tracked in
  /// modifierKeyPressed (i.e. the ones we actually pressed on the guest). Used to
  /// neutralize Shift around a Unicode character injection without stranding a Shift
  /// that was never pressed.
  heldShiftScanCodes() {
    const e = [];
    for (const [i, r] of [
      [it.SHIFT_LEFT, "ShiftLeft"],
      [it.SHIFT_RIGHT, "ShiftRight"]
    ])
      if (this.modifierKeyPressed.indexOf(i) !== -1) {
        const n = Je(r);
        Number.isNaN(n) || e.push(n);
      }
    return e;
  }
  updateModifierKeyState(e) {
    const i = it[e.code];
    this.modifierKeyPressed.indexOf(i) === -1 ? this.modifierKeyPressed.push(i) : e.type === "keyup" && this.modifierKeyPressed.splice(this.modifierKeyPressed.indexOf(i), 1);
  }
  doTransactionFromDeviceEvents(e) {
    var _a2;
    const i = new this.module.InputTransaction();
    e.forEach((r) => i.addEvent(r)), (_a2 = this.session) == null ? void 0 : _a2.applyInputs(i);
  }
  ctrlAltDel() {
    const e = parseInt("0x001D", 16), i = parseInt("0x0038", 16), r = parseInt("0xE053", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(i),
      this.module.DeviceEvent.keyPressed(r),
      this.module.DeviceEvent.keyReleased(e),
      this.module.DeviceEvent.keyReleased(i),
      this.module.DeviceEvent.keyReleased(r)
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
    const e = parseInt("0x001D", 16), i = parseInt("0x002E", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(i),
      this.module.DeviceEvent.keyReleased(i),
      this.module.DeviceEvent.keyReleased(e)
    ]);
  }
  sendCtrlV() {
    const e = parseInt("0x001D", 16), i = parseInt("0x002F", 16);
    this.doTransactionFromDeviceEvents([
      this.module.DeviceEvent.keyPressed(e),
      this.module.DeviceEvent.keyPressed(i),
      this.module.DeviceEvent.keyReleased(i),
      this.module.DeviceEvent.keyReleased(e)
    ]);
  }
}
class Un {
  constructor(e, i) {
    __publicField(this, "remoteDesktopService");
    __publicField(this, "clipboardService");
    this.remoteDesktopService = e, this.clipboardService = i;
  }
  configBuilder() {
    return this.remoteDesktopService.configBuilder();
  }
  connect(e) {
    return P.info("Initializing connection."), this.remoteDesktopService.connect(e);
  }
  ctrlAltDel() {
    this.remoteDesktopService.sendSpecialCombination(de.CTRL_ALT_DEL);
  }
  metaKey() {
    this.remoteDesktopService.sendSpecialCombination(de.META);
  }
  ctrlC() {
    this.remoteDesktopService.sendSpecialCombination(de.CTRL_C);
  }
  ctrlV() {
    this.remoteDesktopService.sendSpecialCombination(de.CTRL_V);
  }
  setVisibility(e) {
    P.info(`Change component visibility to: ${e}`), this.remoteDesktopService.setVisibility(e);
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
  resize(e, i, r) {
    this.remoteDesktopService.resizeDynamic(e, i, r);
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
    const i = e.onUploadStarted, r = e.onUploadFinished;
    return e.onUploadStarted = () => {
      i == null ? void 0 : i(), this.clipboardService.suppressMonitoring();
    }, e.onUploadFinished = () => {
      this.clipboardService.resumeMonitoring(), r == null ? void 0 : r();
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
const Zt = nr(false);
function In() {
  const t = nr([]);
  return {
    subscribe: t.subscribe,
    enqueue(e) {
      t.update((i) => [...i, e]);
    },
    shift() {
      let e;
      return t.update((i) => i.length == 0 ? i : (e = i[0], i.slice(1))), e;
    },
    length() {
      return sr(t).length;
    }
  };
}
const Qt = In();
var W = /* @__PURE__ */ ((t) => (t[t.Full = 0] = "Full", t[t.TextOnly = 1] = "TextOnly", t[t.TextOnlyServerOnly = 2] = "TextOnlyServerOnly", t[t.None = 3] = "None", t))(W || {}), lr = /* @__PURE__ */ ((t) => (t[t.General = 0] = "General", t[t.WrongPassword = 1] = "WrongPassword", t[t.LogonFailure = 2] = "LogonFailure", t[t.AccessDenied = 3] = "AccessDenied", t[t.RDCleanPath = 4] = "RDCleanPath", t[t.ProxyConnect = 5] = "ProxyConnect", t[t.NegotiationFailure = 6] = "NegotiationFailure", t))(lr || {});
const Bn = 100;
function oe(t) {
  throw {
    kind: () => lr.General,
    backtrace: () => t
  };
}
class Kn {
  constructor(e, i) {
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
    this.remoteDesktopService = e, this.module = i;
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
        try {
          await navigator.clipboard.read();
        } catch {
          this.ClipboardApiSupported = W.TextOnly;
        }
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
    this.clipboardDataToSave == null && oe("The server did not send the clipboard data.");
    try {
      const e = this.clipboardDataToRecord(this.clipboardDataToSave), i = new ClipboardItem(e);
      await navigator.clipboard.write([i]), this.clipboardDataToSave = null;
    } catch (e) {
      oe("Failed to write to the clipboard: " + e);
    }
  }
  // Sends local clipboard's content to the server.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async sendClipboardData() {
    if (this.ClipboardApiSupported !== W.Full)
      return await this.ffSendClipboardData();
    const e = await navigator.clipboard.read().catch((n) => {
      oe("Failed to read from the clipboard: " + n);
    });
    e.length == 0 && oe("The clipboard has no data.");
    const i = e[0];
    i.types.some((n) => n.startsWith("text/") || n.startsWith("image/png")) || oe("The clipboard has no data of supported type (text or image).");
    const r = new this.module.ClipboardData();
    for (const n of i.types) {
      const o = n.startsWith("text/"), c = await i.getType(n);
      o ? r.addText(n, await c.text()) : r.addBinary(n, new Uint8Array(await c.arrayBuffer()));
    }
    r.isEmpty() || (this.lastSentClipboardData = r, await this.remoteDesktopService.onClipboardChanged(r));
  }
  async pasteText(e) {
    if (!e)
      return;
    const i = new this.module.ClipboardData();
    i.addText("text/plain", e), i.isEmpty() || (this.lastSentClipboardData = i, await this.remoteDesktopService.onClipboardChanged(i));
  }
  scheduleOnMonitorClipboardUpdate() {
    setTimeout(this.onMonitorClipboard.bind(this), Bn);
  }
  runWhenWindowFocused(e) {
    document.hasFocus() ? e() : Qt.enqueue(e);
  }
  // This function is required to convert `ClipboardData` to an object that can be used
  // with `ClipboardItem` API.
  clipboardDataToRecord(e) {
    const i = {};
    for (const r of e.items()) {
      const n = r.mimeType();
      i[n] = new Blob([r.value()], { type: n });
    }
    return i;
  }
  clipboardDataToClipboardItemsRecord(e) {
    const i = {};
    for (const r of e.items()) {
      const n = r.mimeType();
      i[n] = r.value();
    }
    return i;
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
      const i = this.clipboardDataToRecord(e), r = new ClipboardItem(i);
      this.runWhenWindowFocused(() => {
        this.lastReceivedClipboardData = this.clipboardDataToClipboardItemsRecord(e), navigator.clipboard.write([r]);
      });
    } catch (i) {
      console.error("Failed to set client clipboard: " + i);
    }
  }
  // Called periodically to monitor clipboard changes
  async onMonitorClipboard() {
    let e = false;
    try {
      if (this.monitoringSuppressed || !document.hasFocus())
        return;
      const i = await navigator.clipboard.read();
      if (i.length == 0)
        return;
      const r = i[0];
      if (!r.types.some((c) => c.startsWith("text/") || c.startsWith("image/png")))
        return;
      const n = {};
      let o = true;
      for (const c of r.types) {
        const h = c.startsWith("text/"), v = await r.getType(c), d = h ? await v.text() : new Uint8Array(await v.arrayBuffer()), m = h ? function(s, u) {
          return s === u;
        } : function(s, u) {
          return !(s instanceof Uint8Array) || !(u instanceof Uint8Array) ? false : s.length === u.length && s.every((a, l) => a === u[l]);
        }, p = this.lastClientClipboardItems[c];
        m(p, d) || (m(this.lastReceivedClipboardData[c], d) ? this.lastClientClipboardItems[c] = this.lastReceivedClipboardData[c] : o = false), n[c] = d;
      }
      if (!o) {
        this.lastClientClipboardItems = n;
        const c = new this.module.ClipboardData();
        Object.entries(n).forEach(([h, v]) => {
          v != null && (h.startsWith("text/") && typeof v == "string" ? c.addText(h, v) : h.startsWith("image/") && v instanceof Uint8Array && c.addBinary(h, v));
        }), c.isEmpty() || (this.lastSentClipboardData = c, await this.remoteDesktopService.onClipboardChanged(c));
      }
    } catch (i) {
      if (i instanceof DOMException && i.name === "NotAllowedError") {
        console.warn("Clipboard monitoring disabled: browser requires user activation for clipboard read."), this.remoteDesktopService.setOnRemoteClipboardChanged(
          this.onRemoteClipboardChangedManualMode.bind(this)
        ), e = true;
        return;
      }
      i instanceof Error && ((this.lastClipboardMonitorLoopError === null || this.lastClipboardMonitorLoopError.toString() !== i.toString()) && console.error("Clipboard monitoring error: " + i), this.lastClipboardMonitorLoopError = i);
    } finally {
      !e && !sr(Zt) && this.scheduleOnMonitorClipboardUpdate();
    }
  }
  // This function is required to retrieve the text data from the `ClipboardData`.
  ffRetrieveTextData(e) {
    for (const i of e.items())
      if (i.mimeType().startsWith("text/")) {
        const r = i.value();
        if (typeof r == "string") return r;
      }
    return "";
  }
  // Firefox specific function.
  // This callback is required to update client clipboard state when remote side has changed.
  ffOnRemoteClipboardChanged(e) {
    const i = this.ffRetrieveTextData(e);
    i !== "" && (this.ffClipboardDataToSave = i, this.remoteDesktopService.emitClipboardRemoteUpdateEvent());
  }
  // Firefox specific function. We are using text-only clipboard API here.
  //
  // Copies clipboard content received from the server to the local clipboard.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async ffSaveRemoteClipboardData() {
    this.ffClipboardDataToSave == null && oe("The server did not send the clipboard data.");
    try {
      await navigator.clipboard.writeText(this.ffClipboardDataToSave), this.ffClipboardDataToSave = null;
    } catch (e) {
      oe("Failed to write to the clipboard: " + e);
    }
  }
  // Firefox specific function. We are using text-only clipboard API here.
  //
  // Sends local clipboard's content to the server.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async ffSendClipboardData() {
    this.ClipboardApiSupported !== W.TextOnly && oe("The browser does not support clipboard read.");
    const e = await navigator.clipboard.readText().catch((r) => {
      oe("Failed to read from the clipboard: " + r);
    });
    e.length == 0 && oe("The clipboard has no data.");
    const i = new this.module.ClipboardData();
    i.addText("text/plain", e), i.isEmpty() || (this.lastSentClipboardData = i, await this.remoteDesktopService.onClipboardChanged(i));
  }
}
var Wn = (t, e) => e(t, true), qn = (t, e) => e(t, false), Vn = (t) => t.preventDefault(), Hn = /* @__PURE__ */ hn('<div class="svelte-1103xra"><div><div class="screen-viewer svelte-1103xra"><canvas id="renderer" tabindex="0" class="svelte-1103xra"></canvas></div></div></div>');
const jn = {
  hash: "svelte-1103xra",
  code: ".screen-wrapper.svelte-1103xra {position:relative;}.capturing-inputs.svelte-1103xra {outline:1px solid rgba(0, 97, 166, 0.7);outline-offset:-1px;}canvas.svelte-1103xra {width:100%;height:100%;}.svelte-1103xra::selection {background-color:transparent;}.screen-wrapper.hidden.svelte-1103xra {pointer-events:none !important;position:absolute !important;visibility:hidden;height:100%;width:100%;transform:translate(-100%, -100%);}"
};
function ur(t, e) {
  Xi(e, true), vn(t, jn);
  let i = Qe(e, "scale"), r = Qe(e, "verbose"), n = Qe(e, "flexcenter"), o = Qe(e, "module"), c = Qe(e, "dynamicresize"), h = It(false), v = () => {
    var _a2, _b2;
    return P.info(`
            capturingInputs: ${document.activeElement === p}
            current active element: ${document.activeElement}
        `), ((_b2 = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b2.firstElementChild) === d;
  }, d, m, p, s = It(""), u = It(""), a = new zn(o()), l = new Kn(a, o()), f = new Un(a, l), E = ve.Fit;
  function D(b) {
    v() && Se(b);
  }
  function y() {
    $e(), Oe(), window.addEventListener("keydown", D, false), window.addEventListener("keyup", D, false), window.addEventListener("focus", Me), window.addEventListener("blur", Ye), document.addEventListener("visibilitychange", Xe), document.addEventListener("fullscreenchange", w);
  }
  function w() {
    F(h) && (Y("100%", "100%", "hidden"), setTimeout(() => X(i()), 150));
  }
  function M() {
    n() === "true" && (d.style.flexGrow = "", d.style.display = "", d.style.justifyContent = "", d.style.alignItems = "");
  }
  function N(b) {
    n() === "true" && (d.style.flexGrow = "1", d.style.display = "flex", d.style.justifyContent = "center", d.style.alignItems = "center");
  }
  function ie(b, _, $) {
    let k = `height: ${b}; width: ${_}`;
    k = `${k}; max-height: ${b}; max-width: ${_}; min-height: ${b}; min-width: ${_}`, V(s, Te(k));
  }
  function Y(b, _, $) {
    V(u, `height: ${b}; width: ${_}; overflow: ${$}`);
  }
  let he, re;
  function qe(b, _, $) {
    const k = Math.max(_, Math.min($, Math.floor(b)));
    return k % 2 === 0 ? k : k - 1;
  }
  function lt() {
    const { x: b, y: _ } = Z(), $ = qe(b, 200, 8192), k = qe(_, 200, 8192);
    $ > 0 && k > 0 && ($ !== p.width || k !== p.height) && a.resizeDynamic($, k);
  }
  function Ce() {
    c() !== "true" || !F(h) || (clearTimeout(re), re = setTimeout(lt, 150));
  }
  const Ee = (b) => {
    X(i()), Ce();
  };
  function Pt() {
    var _a2;
    const b = (_a2 = m == null ? void 0 : m.getRootNode) == null ? void 0 : _a2.call(m), _ = b && "host" in b ? b.host : void 0;
    !_ || typeof ResizeObserver > "u" || (he = new ResizeObserver(() => {
      X(i()), Ce();
    }), he.observe(_));
  }
  function $e() {
    a.resizeObservable.subscribe((b) => {
      P.info(`Resize canvas to: ${b.desktopSize.width}x${b.desktopSize.height}`), p.width = b.desktopSize.width, p.height = b.desktopSize.height, X(i());
    });
  }
  function Oe() {
    window.addEventListener("resize", Ee), Pt(), a.scaleObservable.subscribe((b) => {
      P.info("Change scale!"), X(b);
    }), a.dynamicResizeObservable.subscribe((b) => {
      P.info(`Dynamic resize requested: ${b.width}x${b.height}`), X(i());
    }), a.changeVisibilityObservable.subscribe((b) => {
      V(h, Te(b)), b && (Y("100%", "100%", "hidden"), setTimeout(() => X(i()), 150));
    });
  }
  function ut() {
    X(E);
  }
  function X(b) {
    if (M(), F(h)) {
      if (c() === "true") {
        const _ = Z();
        Y("initial", "initial", "hidden"), ie(`${_.y}px`, `${_.x}px`), N();
        return;
      }
      switch (b) {
        case "fit":
        case ve.Fit:
          P.info("Size to fit"), E = ve.Fit, i("fit"), Ae();
          break;
        case "full":
        case ve.Full:
          P.info("Size to full"), E = ve.Full, zt(), i("full");
          break;
        case "real":
        case ve.Real:
          P.info("Size to real"), E = ve.Real, Ve(), i("real");
          break;
      }
    }
  }
  function zt() {
    const b = Z(), _ = b.x, $ = b.y;
    let k = p.width, L = p.height;
    const B = Math.min(_ / p.width, $ / p.height);
    k = k * B, L = L * B, Y(`${$}px`, `${_}px`, "hidden"), k = k > 0 ? k : 0, L = L > 0 ? L : 0, ie(`${L}px`, `${k}px`);
  }
  function Ae(b = false) {
    const _ = Z(), $ = _.x, k = _.y;
    let L = p.width, B = p.height;
    if (!b || $ < p.width || k < p.height) {
      const Ze = Math.min($ / p.width, k / p.height);
      L = L * Ze, B = B * Ze;
    }
    L = L > 0 ? L : 0, B = B > 0 ? B : 0, Y("initial", "initial", "hidden"), ie(`${B}px`, `${L}px`), N();
  }
  function Ve() {
    const b = Z(), _ = b.x, $ = b.y;
    _ < p.width || $ < p.height ? Y(`${Math.min($, p.height)}px`, `${Math.min(_, p.width)}px`, "auto") : Y("initial", "initial", "initial"), ie(`${p.height}px`, `${p.width}px`), N();
  }
  function He(b) {
    const _ = p == null ? void 0 : p.getBoundingClientRect(), $ = (p == null ? void 0 : p.width) / _.width, k = (p == null ? void 0 : p.height) / _.height, L = {
      x: Math.round((b.clientX - _.left) * $),
      y: Math.round((b.clientY - _.top) * k)
    };
    a.updateMousePosition(L);
  }
  function Le(b, _) {
    a.mouseButtonState(b, _, true);
  }
  function ct(b) {
    a.mouseWheel(b);
  }
  function ke(b) {
    p.focus({ preventScroll: true }), a.mouseIn(b);
  }
  function je(b) {
    a.mouseOut(b);
  }
  function Se(b) {
    return a.sendKeyboardEvent(b), true;
  }
  function dt() {
    const b = window, _ = document, $ = _.documentElement, k = _.getElementsByTagName("body")[0], L = b.innerWidth ?? $.clientWidth ?? k.clientWidth, B = b.innerHeight ?? $.clientHeight ?? k.clientHeight;
    return { x: L, y: B };
  }
  function Z() {
    var _a2;
    const b = (_a2 = m == null ? void 0 : m.getRootNode) == null ? void 0 : _a2.call(m), _ = b && "host" in b ? b.host : void 0;
    return _ && _.clientWidth > 0 && _.clientHeight > 0 ? { x: _.clientWidth, y: _.clientHeight } : dt();
  }
  async function Ge() {
    P.info("Start canvas initialization..."), p.width = 800, p.height = 600, a.setCanvas(p), a.setOnCanvasResized(ut), y();
    let b = {
      irgUserInteraction: f.getExposedFunctions()
    };
    P.info("Component ready"), P.info("Dispatching ready event"), d.dispatchEvent(new CustomEvent("ready", {
      detail: b,
      bubbles: true,
      composed: true
    }));
  }
  function Me() {
    var _a2;
    try {
      for (; Qt.length() > 0; )
        (_a2 = Qt.shift()) == null ? void 0 : _a2();
    } catch (b) {
      console.error("Failed to run the function queued for execution when the window received focus: " + b);
    }
  }
  function Ye() {
    a.focusLost();
  }
  function Xe() {
    document.visibilityState === "hidden" && a.focusLost();
  }
  rr(async () => {
    Zt.set(false), P.verbose = r() === "true", P.info("Dom ready"), await Ge(), await l.initClipboard();
  }), yn(() => {
    window.removeEventListener("resize", Ee), window.removeEventListener("keydown", D, false), window.removeEventListener("keyup", D, false), window.removeEventListener("focus", Me), window.removeEventListener("blur", Ye), document.removeEventListener("visibilitychange", Xe), document.removeEventListener("fullscreenchange", w), he == null ? void 0 : he.disconnect(), clearTimeout(re), Zt.set(true);
  });
  var De = Hn(), be = Kt(De);
  let ft;
  var pe = Kt(be), j = Kt(pe);
  return j.__mousemove = He, j.__mousedown = [Wn, Le], j.__mouseup = [qn, Le], j.__contextmenu = [Vn], Wt(j, (b) => p = b, () => p), Bt(pe), Bt(be), Wt(be, (b) => m = b, () => m), Bt(De), Wt(De, (b) => d = b, () => d), en(() => {
    ft = wn(be, 1, `screen-wrapper scale-${i() ?? ""}`, "svelte-1103xra", ft, {
      hidden: !F(h),
      "capturing-inputs": v
    }), pi(be, "style", F(u)), pi(pe, "style", F(s));
  }), pt("mouseleave", j, (b) => {
    je(b);
  }), pt("mouseenter", j, (b) => {
    ke(b);
  }), pt("wheel", j, ct), pt("selectstart", j, (b) => {
    b.preventDefault();
  }), er(t, De), Zi({
    get scale() {
      return i();
    },
    set scale(b) {
      i(b), Ue();
    },
    get verbose() {
      return r();
    },
    set verbose(b) {
      r(b), Ue();
    },
    get flexcenter() {
      return n();
    },
    set flexcenter(b) {
      n(b), Ue();
    },
    get module() {
      return o();
    },
    set module(b) {
      o(b), Ue();
    },
    get dynamicresize() {
      return c();
    },
    set dynamicresize(b) {
      c(b), Ue();
    }
  });
}
dn([
  "mousemove",
  "mousedown",
  "mouseup",
  "contextmenu"
]);
customElements.define("iron-remote-desktop", kn(
  ur,
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
const Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ur
}, Symbol.toStringTag, { value: "Module" }));
export {
  Fn as Config,
  Pn as ConfigBuilder,
  Gn as default
};
