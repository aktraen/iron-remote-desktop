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
const dr = 2, fr = "[", hr = "]", nt = {}, U = Symbol(), ui = false, te = 2, xi = 4, Ot = 8, Jt = 16, xe = 32, We = 64, _t = 128, Y = 256, xt = 512, j = 1024, Ce = 2048, qe = 4096, Ct = 8192, Lt = 16384, br = 32768, pr = 65536, vr = 1 << 19, Ci = 1 << 20, vt = Symbol("$state"), mr = Symbol("legacy props");
var Ei = Array.isArray, wr = Array.prototype.indexOf, gr = Array.from, Et = Object.keys, St = Object.defineProperty, He = Object.getOwnPropertyDescriptor, yr = Object.getOwnPropertyDescriptors, _r = Object.prototype, xr = Array.prototype, Si = Object.getPrototypeOf;
const mt = () => {
};
function ki(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let ot = [], Vt = [];
function Di() {
  var t = ot;
  ot = [], ki(t);
}
function Cr() {
  var t = Vt;
  Vt = [], ki(t);
}
function ei(t) {
  ot.length === 0 && queueMicrotask(Di), ot.push(t);
}
function ci() {
  ot.length > 0 && Di(), Vt.length > 0 && Cr();
}
function Ti(t) {
  return t === this.v;
}
function Ri(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Er(t) {
  return !Ri(t, this.v);
}
function Sr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function kr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $r() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ar() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Or() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Lr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Fr = false;
function le(t, e) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ti,
    rv: 0,
    wv: 0
  };
  return i;
}
function It(t) {
  return /* @__PURE__ */ Pr(le(t));
}
// @__NO_SIDE_EFFECTS__
function $i(t, e = false) {
  const i = le(t);
  return e || (i.equals = Er), i;
}
// @__NO_SIDE_EFFECTS__
function Pr(t) {
  return D !== null && !ee && (D.f & te) !== 0 && (ue === null ? Ir([t]) : ue.push(t)), t;
}
function V(t, e) {
  return D !== null && !ee && Ji() && (D.f & (te | Jt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(t)) && Lr(), Nr(t, e);
}
function Nr(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = Bi(), Ai(t, Ce), $ !== null && ($.f & j) !== 0 && ($.f & (xe | We)) === 0 && (de === null ? Br([t]) : de.push(t))), e;
}
function Ai(t, e) {
  var i = t.reactions;
  if (i !== null)
    for (var r = i.length, n = 0; n < r; n++) {
      var s = i[n], l = s.f;
      (l & Ce) === 0 && (he(s, e), (l & (j | Y)) !== 0 && ((l & te) !== 0 ? Ai(
        /** @type {Derived} */
        s,
        qe
      ) : ni(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Oi(t) {
  var e = te | Ce, i = D !== null && (D.f & te) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return $ === null || i !== null && (i.f & Y) !== 0 ? e |= Y : $.f |= Ci, {
    ctx: z,
    deps: null,
    effects: null,
    equals: Ti,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: i ?? $
  };
}
function Li(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var i = 0; i < e.length; i += 1)
      _e(
        /** @type {Effect} */
        e[i]
      );
  }
}
function Mr(t) {
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
function Kr(t) {
  var e, i = $;
  ye(Mr(t));
  try {
    Li(t), e = Hi(t);
  } finally {
    ye(i);
  }
  return e;
}
function Fi(t) {
  var e = Kr(t), i = (we || (t.f & Y) !== 0) && t.deps !== null ? qe : j;
  he(t, i), t.equals(e) || (t.v = e, t.wv = Bi());
}
function ti(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ie = false;
function bt(t) {
  ie = t;
}
let I;
function kt(t) {
  if (t === null)
    throw ti(), nt;
  return I = t;
}
function Pi() {
  return kt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ft(I)
  );
}
function Bt(t) {
  if (ie) {
    if (/* @__PURE__ */ Ft(I) !== null)
      throw ti(), nt;
    I = t;
  }
}
function Re(t, e = null, i) {
  if (typeof t != "object" || t === null || vt in t)
    return t;
  const r = Si(t);
  if (r !== _r && r !== xr)
    return t;
  var n = /* @__PURE__ */ new Map(), s = Ei(t), l = le(0);
  s && n.set("length", le(
    /** @type {any[]} */
    t.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(b, d, m) {
        (!("value" in m) || m.configurable === false || m.enumerable === false || m.writable === false) && $r();
        var p = n.get(d);
        return p === void 0 ? (p = le(m.value), n.set(d, p)) : V(p, Re(m.value, f)), true;
      },
      deleteProperty(b, d) {
        var m = n.get(d);
        if (m === void 0)
          d in b && n.set(d, le(U));
        else {
          if (s && typeof d == "string") {
            var p = (
              /** @type {Source<number>} */
              n.get("length")
            ), o = Number(d);
            Number.isInteger(o) && o < p.v && V(p, o);
          }
          V(m, U), di(l);
        }
        return true;
      },
      get(b, d, m) {
        var _a2;
        if (d === vt)
          return t;
        var p = n.get(d), o = d in b;
        if (p === void 0 && (!o || ((_a2 = He(b, d)) == null ? void 0 : _a2.writable)) && (p = le(Re(o ? b[d] : U, f)), n.set(d, p)), p !== void 0) {
          var c = N(p);
          return c === U ? void 0 : c;
        }
        return Reflect.get(b, d, m);
      },
      getOwnPropertyDescriptor(b, d) {
        var m = Reflect.getOwnPropertyDescriptor(b, d);
        if (m && "value" in m) {
          var p = n.get(d);
          p && (m.value = N(p));
        } else if (m === void 0) {
          var o = n.get(d), c = o == null ? void 0 : o.v;
          if (o !== void 0 && c !== U)
            return {
              enumerable: true,
              configurable: true,
              value: c,
              writable: true
            };
        }
        return m;
      },
      has(b, d) {
        var _a2;
        if (d === vt)
          return true;
        var m = n.get(d), p = m !== void 0 && m.v !== U || Reflect.has(b, d);
        if (m !== void 0 || $ !== null && (!p || ((_a2 = He(b, d)) == null ? void 0 : _a2.writable))) {
          m === void 0 && (m = le(p ? Re(b[d], f) : U), n.set(d, m));
          var o = N(m);
          if (o === U)
            return false;
        }
        return p;
      },
      set(b, d, m, p) {
        var _a2;
        var o = n.get(d), c = d in b;
        if (s && d === "length")
          for (var a = m; a < /** @type {Source<number>} */
          o.v; a += 1) {
            var u = n.get(a + "");
            u !== void 0 ? V(u, U) : a in b && (u = le(U), n.set(a + "", u));
          }
        o === void 0 ? (!c || ((_a2 = He(b, d)) == null ? void 0 : _a2.writable)) && (o = le(void 0), V(o, Re(m, f)), n.set(d, o)) : (c = o.v !== U, V(o, Re(m, f)));
        var v = Reflect.getOwnPropertyDescriptor(b, d);
        if ((v == null ? void 0 : v.set) && v.set.call(p, m), !c) {
          if (s && typeof d == "string") {
            var O = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(d);
            Number.isInteger(L) && L >= O.v && V(O, L + 1);
          }
          di(l);
        }
        return true;
      },
      ownKeys(b) {
        N(l);
        var d = Reflect.ownKeys(b).filter((o) => {
          var c = n.get(o);
          return c === void 0 || c.v !== U;
        });
        for (var [m, p] of n)
          p.v !== U && !(m in b) && d.push(m);
        return d;
      },
      setPrototypeOf() {
        Ar();
      }
    }
  );
}
function di(t, e = 1) {
  V(t, t.v + e);
}
var fi, Ni, Mi, Ki;
function jt() {
  if (fi === void 0) {
    fi = window, Ni = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    Mi = He(e, "firstChild").get, Ki = He(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function zi(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Dt(t) {
  return Mi.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ft(t) {
  return Ki.call(t);
}
function Ut(t, e) {
  if (!ie)
    return /* @__PURE__ */ Dt(t);
  var i = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Dt(I)
  );
  return i === null && (i = I.appendChild(zi())), kt(i), i;
}
function zr(t) {
  t.textContent = "";
}
let wt = false, Tt = false, Rt = null, gt = false, ii = false;
function hi(t) {
  ii = t;
}
let st = [];
let D = null, ee = false;
function ge(t) {
  D = t;
}
let $ = null;
function ye(t) {
  $ = t;
}
let ue = null;
function Ir(t) {
  ue = t;
}
let K = null, q = 0, de = null;
function Br(t) {
  de = t;
}
let Ii = 1, $t = 0, we = false;
function Bi() {
  return ++Ii;
}
function Pt(t) {
  var _a2;
  var e = t.f;
  if ((e & Ce) !== 0)
    return true;
  if ((e & qe) !== 0) {
    var i = t.deps, r = (e & Y) !== 0;
    if (i !== null) {
      var n, s, l = (e & xt) !== 0, f = r && $ !== null && !we, b = i.length;
      if (l || f) {
        var d = (
          /** @type {Derived} */
          t
        ), m = d.parent;
        for (n = 0; n < b; n++)
          s = i[n], (l || !((_a2 = s == null ? void 0 : s.reactions) == null ? void 0 : _a2.includes(d))) && (s.reactions ?? (s.reactions = [])).push(d);
        l && (d.f ^= xt), f && m !== null && (m.f & Y) === 0 && (d.f ^= Y);
      }
      for (n = 0; n < b; n++)
        if (s = i[n], Pt(
          /** @type {Derived} */
          s
        ) && Fi(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return true;
    }
    (!r || $ !== null && !we) && he(t, j);
  }
  return false;
}
function Ur(t, e) {
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
function Hr(t) {
  return (t.f & Lt) === 0 && (t.parent === null || (t.parent.f & _t) === 0);
}
function Nt(t, e, i, r) {
  if (wt) {
    if (i === null && (wt = false), Hr(e))
      throw t;
    return;
  }
  i !== null && (wt = true);
  {
    Ur(t, e);
    return;
  }
}
function Ui(t, e, i = true) {
  var r = t.reactions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      (s.f & te) !== 0 ? Ui(
        /** @type {Derived} */
        s,
        e,
        false
      ) : e === s && (i ? he(s, Ce) : (s.f & j) !== 0 && he(s, qe), ni(
        /** @type {Effect} */
        s
      ));
    }
}
function Hi(t) {
  var _a2;
  var e = K, i = q, r = de, n = D, s = we, l = ue, f = z, b = ee, d = t.f;
  K = /** @type {null | Value[]} */
  null, q = 0, de = null, we = (d & Y) !== 0 && (ee || !gt || D === null), D = (d & (xe | We)) === 0 ? t : null, ue = null, bi(t.ctx), ee = false, $t++;
  try {
    var m = (
      /** @type {Function} */
      (0, t.fn)()
    ), p = t.deps;
    if (K !== null) {
      var o;
      if (At(t, q), p !== null && q > 0)
        for (p.length = q + K.length, o = 0; o < K.length; o++)
          p[q + o] = K[o];
      else
        t.deps = p = K;
      if (!we)
        for (o = q; o < p.length; o++)
          ((_a2 = p[o]).reactions ?? (_a2.reactions = [])).push(t);
    } else p !== null && q < p.length && (At(t, q), p.length = q);
    if (Ji() && de !== null && !ee && p !== null && (t.f & (te | qe | Ce)) === 0)
      for (o = 0; o < /** @type {Source[]} */
      de.length; o++)
        Ui(
          de[o],
          /** @type {Effect} */
          t
        );
    return n !== null && $t++, m;
  } finally {
    K = e, q = i, de = r, D = n, we = s, ue = l, bi(f), ee = b;
  }
}
function Wr(t, e) {
  let i = e.reactions;
  if (i !== null) {
    var r = wr.call(i, t);
    if (r !== -1) {
      var n = i.length - 1;
      n === 0 ? i = e.reactions = null : (i[r] = i[n], i.pop());
    }
  }
  i === null && (e.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !K.includes(e)) && (he(e, qe), (e.f & (Y | xt)) === 0 && (e.f ^= xt), Li(
    /** @type {Derived} **/
    e
  ), At(
    /** @type {Derived} **/
    e,
    0
  ));
}
function At(t, e) {
  var i = t.deps;
  if (i !== null)
    for (var r = e; r < i.length; r++)
      Wr(t, i[r]);
}
function ri(t) {
  var e = t.f;
  if ((e & Lt) === 0) {
    he(t, j);
    var i = $, r = z, n = gt;
    $ = t, gt = true;
    try {
      (e & Jt) !== 0 ? sn(t) : ji(t), Vi(t);
      var s = Hi(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Ii;
      var l = t.deps, f;
      ui && Fr && t.f & Ce;
    } catch (b) {
      Nt(b, t, i, r || t.ctx);
    } finally {
      gt = n, $ = i;
    }
  }
}
function qr() {
  try {
    Tr();
  } catch (t) {
    if (Rt !== null)
      Nt(t, Rt, null);
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
        (n.f & j) === 0 && (n.f ^= j);
        var s = jr(n);
        Vr(s);
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
          Pt(r) && (ri(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Gi(r) : r.fn = null));
        } catch (n) {
          Nt(n, r, null, r.ctx);
        }
    }
}
function ni(t) {
  Tt || (Tt = true, queueMicrotask(Wi));
  for (var e = Rt = t; e.parent !== null; ) {
    e = e.parent;
    var i = e.f;
    if ((i & (We | xe)) !== 0) {
      if ((i & j) === 0) return;
      e.f ^= j;
    }
  }
  st.push(e);
}
function jr(t) {
  for (var e = [], i = t.first; i !== null; ) {
    var r = i.f, n = (r & xe) !== 0, s = n && (r & j) !== 0;
    if (!s && (r & Ct) === 0) {
      if ((r & xi) !== 0)
        e.push(i);
      else if (n)
        i.f ^= j;
      else {
        var l = D;
        try {
          D = i, Pt(i) && ri(i);
        } catch (d) {
          Nt(d, i, null, i.ctx);
        } finally {
          D = l;
        }
      }
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    var b = i.parent;
    for (i = i.next; i === null && b !== null; )
      i = b.next, b = b.parent;
  }
  return e;
}
function Be(t) {
  var e;
  for (ci(); st.length > 0; )
    Tt = true, Wi(), ci();
  return (
    /** @type {T} */
    e
  );
}
function N(t) {
  var e = t.f, i = (e & te) !== 0;
  if (D !== null && !ee) {
    ue !== null && ue.includes(t) && Or();
    var r = D.deps;
    t.rv < $t && (t.rv = $t, K === null && r !== null && r[q] === t ? q++ : K === null ? K = [t] : (!we || !K.includes(t)) && K.push(t));
  } else if (i && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var n = (
      /** @type {Derived} */
      t
    ), s = n.parent;
    s !== null && (s.f & Y) === 0 && (n.f ^= Y);
  }
  return i && (n = /** @type {Derived} */
  t, Pt(n) && Fi(n)), t.v;
}
function at(t) {
  var e = ee;
  try {
    return ee = true, t();
  } finally {
    ee = e;
  }
}
const Gr = -7169;
function he(t, e) {
  t.f = t.f & Gr | e;
}
function Yr(t) {
  $ === null && D === null && Dr(), D !== null && (D.f & Y) !== 0 && $ === null && kr(), ii && Sr();
}
function Xr(t, e) {
  var i = e.last;
  i === null ? e.last = e.first = t : (i.next = t, t.prev = i, e.last = t);
}
function $e(t, e, i, r = true) {
  var n = (t & We) !== 0, s = $, l = {
    ctx: z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ce,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (i)
    try {
      ri(l), l.f |= br;
    } catch (d) {
      throw _e(l), d;
    }
  else e !== null && ni(l);
  var f = i && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (Ci | _t)) === 0;
  if (!f && !n && r && (s !== null && Xr(l, s), D !== null && (D.f & te) !== 0)) {
    var b = (
      /** @type {Derived} */
      D
    );
    (b.effects ?? (b.effects = [])).push(l);
  }
  return l;
}
function Zr(t) {
  const e = $e(Ot, null, false);
  return he(e, j), e.teardown = t, e;
}
function Qr(t) {
  Yr();
  var e = $ !== null && ($.f & xe) !== 0 && z !== null && !z.m;
  if (e) {
    var i = (
      /** @type {ComponentContext} */
      z
    );
    (i.e ?? (i.e = [])).push({
      fn: t,
      effect: $,
      reaction: D
    });
  } else {
    var r = si(t);
    return r;
  }
}
function Jr(t) {
  const e = $e(We, t, true);
  return () => {
    _e(e);
  };
}
function en(t) {
  const e = $e(We, t, true);
  return (i = {}) => new Promise((r) => {
    i.outro ? on(e, () => {
      _e(e), r(void 0);
    }) : (_e(e), r(void 0));
  });
}
function si(t) {
  return $e(xi, t, false);
}
function qi(t) {
  return $e(Ot, t, true);
}
function tn(t, e = [], i = Oi) {
  const r = e.map(i);
  return rn(() => t(...r.map(N)));
}
function rn(t, e = 0) {
  return $e(Ot | Jt | e, t, true);
}
function nn(t, e = true) {
  return $e(Ot | xe, t, true, e);
}
function Vi(t) {
  var e = t.teardown;
  if (e !== null) {
    const i = ii, r = D;
    hi(true), ge(null);
    try {
      e.call(null);
    } finally {
      hi(i), ge(r);
    }
  }
}
function ji(t, e = false) {
  var i = t.first;
  for (t.first = t.last = null; i !== null; ) {
    var r = i.next;
    _e(i, e), i = r;
  }
}
function sn(t) {
  for (var e = t.first; e !== null; ) {
    var i = e.next;
    (e.f & xe) === 0 && _e(e), e = i;
  }
}
function _e(t, e = true) {
  var i = false;
  if ((e || (t.f & vr) !== 0) && t.nodes_start !== null) {
    for (var r = t.nodes_start, n = t.nodes_end; r !== null; ) {
      var s = r === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ft(r)
      );
      r.remove(), r = s;
    }
    i = true;
  }
  ji(t, e && !i), At(t, 0), he(t, Lt);
  var l = t.transitions;
  if (l !== null)
    for (const b of l)
      b.stop();
  Vi(t);
  var f = t.parent;
  f !== null && f.first !== null && Gi(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Gi(t) {
  var e = t.parent, i = t.prev, r = t.next;
  i !== null && (i.next = r), r !== null && (r.prev = i), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = i));
}
function on(t, e) {
  var i = [];
  Yi(t, i, true), an(i, () => {
    _e(t), e && e();
  });
}
function an(t, e) {
  var i = t.length;
  if (i > 0) {
    var r = () => --i || e();
    for (var n of t)
      n.out(r);
  } else
    e();
}
function Yi(t, e, i) {
  if ((t.f & Ct) === 0) {
    if (t.f ^= Ct, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || i) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var n = r.next, s = (r.f & pr) !== 0 || (r.f & xe) !== 0;
      Yi(r, e, s ? i : false), r = n;
    }
  }
}
function Xi(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let z = null;
function bi(t) {
  z = t;
}
function Zi(t, e = false, i) {
  z = {
    p: z,
    c: null,
    e: null,
    m: false,
    s: t,
    x: null,
    l: null
  };
}
function Qi(t) {
  const e = z;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const l = e.e;
    if (l !== null) {
      var i = $, r = D;
      e.e = null;
      try {
        for (var n = 0; n < l.length; n++) {
          var s = l[n];
          ye(s.effect), ge(s.reaction), si(s.fn);
        }
      } finally {
        ye(i), ge(r);
      }
    }
    z = e.p, e.m = true;
  }
  return t || /** @type {T} */
  {};
}
function Ji() {
  return true;
}
const ln = ["touchstart", "touchmove"];
function un(t) {
  return ln.includes(t);
}
function cn(t) {
  var e = D, i = $;
  ge(null), ye(null);
  try {
    return t();
  } finally {
    ge(e), ye(i);
  }
}
const er = /* @__PURE__ */ new Set(), Gt = /* @__PURE__ */ new Set();
function dn(t, e, i, r = {}) {
  function n(s) {
    if (r.capture || tt.call(e, s), !s.cancelBubble)
      return cn(() => i == null ? void 0 : i.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ei(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function pt(t, e, i, r, n) {
  var s = { capture: r, passive: n }, l = dn(t, e, i, s);
  (e === document.body || e === window || e === document) && Zr(() => {
    e.removeEventListener(t, l, s);
  });
}
function fn(t) {
  for (var e = 0; e < t.length; e++)
    er.add(t[e]);
  for (var i of Gt)
    i(t);
}
function tt(t) {
  var _a2;
  var e = this, i = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((_a2 = t.composedPath) == null ? void 0 : _a2.call(t)) || [], s = (
    /** @type {null | Element} */
    n[0] || t.target
  ), l = 0, f = t.__root;
  if (f) {
    var b = n.indexOf(f);
    if (b !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var d = n.indexOf(e);
    if (d === -1)
      return;
    b <= d && (l = b);
  }
  if (s = /** @type {Element} */
  n[l] || t.target, s !== e) {
    St(t, "currentTarget", {
      configurable: true,
      get() {
        return s || i;
      }
    });
    var m = D, p = $;
    ge(null), ye(null);
    try {
      for (var o, c = []; s !== null; ) {
        var a = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var u = s["__" + r];
          if (u !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (Ei(u)) {
              var [v, ...O] = u;
              v.apply(s, [t, ...O]);
            } else
              u.call(s, t);
        } catch (L) {
          o ? c.push(L) : o = L;
        }
        if (t.cancelBubble || a === e || a === null)
          break;
        s = a;
      }
      if (o) {
        for (let L of c)
          queueMicrotask(() => {
            throw L;
          });
        throw o;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ge(m), ye(p);
    }
  }
}
function hn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Yt(t, e) {
  var i = (
    /** @type {Effect} */
    $
  );
  i.nodes_start === null && (i.nodes_start = t, i.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function bn(t, e) {
  var i = (e & dr) !== 0, r, n = !t.startsWith("<!>");
  return () => {
    if (ie)
      return Yt(I, null), I;
    r === void 0 && (r = hn(n ? t : "<!>" + t), r = /** @type {Node} */
    /* @__PURE__ */ Dt(r));
    var s = (
      /** @type {TemplateNode} */
      i || Ni ? document.importNode(r, true) : r.cloneNode(true)
    );
    return Yt(s, s), s;
  };
}
function tr(t, e) {
  if (ie) {
    $.nodes_end = I, Pi();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function ir(t, e) {
  return rr(t, e);
}
function pn(t, e) {
  jt(), e.intro = e.intro ?? false;
  const i = e.target, r = ie, n = I;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Dt(i)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== fr); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Ft(s);
    if (!s)
      throw nt;
    bt(true), kt(
      /** @type {Comment} */
      s
    ), Pi();
    const l = rr(t, { ...e, anchor: s });
    if (I === null || I.nodeType !== 8 || /** @type {Comment} */
    I.data !== hr)
      throw ti(), nt;
    return bt(false), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === nt)
      return e.recover === false && Rr(), jt(), zr(i), bt(false), ir(t, e);
    throw l;
  } finally {
    bt(r), kt(n);
  }
}
const Me = /* @__PURE__ */ new Map();
function rr(t, { target: e, anchor: i, props: r = {}, events: n, context: s, intro: l = true }) {
  jt();
  var f = /* @__PURE__ */ new Set(), b = (p) => {
    for (var o = 0; o < p.length; o++) {
      var c = p[o];
      if (!f.has(c)) {
        f.add(c);
        var a = un(c);
        e.addEventListener(c, tt, { passive: a });
        var u = Me.get(c);
        u === void 0 ? (document.addEventListener(c, tt, { passive: a }), Me.set(c, 1)) : Me.set(c, u + 1);
      }
    }
  };
  b(gr(er)), Gt.add(b);
  var d = void 0, m = en(() => {
    var p = i ?? e.appendChild(zi());
    return nn(() => {
      if (s) {
        Zi({});
        var o = (
          /** @type {ComponentContext} */
          z
        );
        o.c = s;
      }
      n && (r.$$events = n), ie && Yt(
        /** @type {TemplateNode} */
        p,
        null
      ), d = t(p, r) || {}, ie && ($.nodes_end = I), s && Qi();
    }), () => {
      var _a2;
      for (var o of f) {
        e.removeEventListener(o, tt);
        var c = (
          /** @type {number} */
          Me.get(o)
        );
        --c === 0 ? (document.removeEventListener(o, tt), Me.delete(o)) : Me.set(o, c);
      }
      Gt.delete(b), p !== i && ((_a2 = p.parentNode) == null ? void 0 : _a2.removeChild(p));
    };
  });
  return Xt.set(d, m), d;
}
let Xt = /* @__PURE__ */ new WeakMap();
function vn(t, e) {
  const i = Xt.get(t);
  return i ? (Xt.delete(t), i(e)) : Promise.resolve();
}
function mn(t, e) {
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
const pi = [...` 	
\r\f\xA0\v\uFEFF`];
function wn(t, e, i) {
  var r = t == null ? "" : "" + t;
  if (r = r ? r + " " + e : e, i) {
    for (var n in i)
      if (i[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var s = n.length, l = 0; (l = r.indexOf(n, l)) >= 0; ) {
          var f = l + s;
          (l === 0 || pi.includes(r[l - 1])) && (f === r.length || pi.includes(r[f])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(f + 1) : l = f;
        }
  }
  return r === "" ? null : r;
}
function gn(t, e, i, r, n, s) {
  var l = t.__className;
  if (ie || l !== i) {
    var f = wn(i, r, s);
    (!ie || f !== t.getAttribute("class")) && (f == null ? t.removeAttribute("class") : t.className = f), t.__className = i;
  } else if (s)
    for (var b in s) {
      var d = !!s[b];
      (n == null || d !== !!n[b]) && t.classList.toggle(b, d);
    }
  return s;
}
function vi(t, e, i, r) {
  var n = t.__attributes ?? (t.__attributes = {});
  ie && (n[e] = t.getAttribute(e)), n[e] !== (n[e] = i) && ("__styles" in t && (t.__styles = {}), i == null ? t.removeAttribute(e) : typeof i != "string" && yn(t).includes(e) ? t[e] = i : t.setAttribute(e, i));
}
var mi = /* @__PURE__ */ new Map();
function yn(t) {
  var e = mi.get(t.nodeName);
  if (e) return e;
  mi.set(t.nodeName, e = []);
  for (var i, r = t, n = Element.prototype; n !== r; ) {
    i = yr(r);
    for (var s in i)
      i[s].set && e.push(s);
    r = Si(r);
  }
  return e;
}
function wi(t, e) {
  return t === e || (t == null ? void 0 : t[vt]) === e;
}
function Ht(t = {}, e, i, r) {
  return si(() => {
    var n, s;
    return qi(() => {
      n = s, s = [], at(() => {
        t !== i(...s) && (e(t, ...s), n && wi(i(...n), t) && e(null, ...n));
      });
    }), () => {
      ei(() => {
        s && wi(i(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function nr(t) {
  z === null && Xi(), Qr(() => {
    const e = at(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  z === null && Xi(), nr(() => () => at(t));
}
function xn(t, e, i) {
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
const Ke = [];
function sr(t, e = mt) {
  let i = null;
  const r = /* @__PURE__ */ new Set();
  function n(f) {
    if (Ri(t, f) && (t = f, i)) {
      const b = !Ke.length;
      for (const d of r)
        d[1](), Ke.push(d, t);
      if (b) {
        for (let d = 0; d < Ke.length; d += 2)
          Ke[d][0](Ke[d + 1]);
        Ke.length = 0;
      }
    }
  }
  function s(f) {
    n(f(
      /** @type {T} */
      t
    ));
  }
  function l(f, b = mt) {
    const d = [f, b];
    return r.add(d), r.size === 1 && (i = e(n, s) || mt), f(
      /** @type {T} */
      t
    ), () => {
      r.delete(d), r.size === 0 && i && (i(), i = null);
    };
  }
  return { set: n, update: s, subscribe: l };
}
function or(t) {
  let e;
  return xn(t, (i) => e = i)(), e;
}
function et(t, e, i, r) {
  var n;
  n = /** @type {V} */
  t[e];
  var s = (
    /** @type {V} */
    r
  ), l = true, f = false, b = () => (f = true, l && (l = false, s = /** @type {V} */
  r), s), d;
  d = () => {
    var c = (
      /** @type {V} */
      t[e]
    );
    return c === void 0 ? b() : (l = true, f = false, c);
  };
  var m = false, p = /* @__PURE__ */ $i(n), o = /* @__PURE__ */ Oi(() => {
    var c = d(), a = N(p);
    return m ? (m = false, a) : p.v = c;
  });
  return function(c, a) {
    if (arguments.length > 0) {
      const u = a ? N(o) : c;
      return o.equals(u) || (m = true, V(p, u), f && s !== void 0 && (s = u), at(() => N(o))), c;
    }
    return N(o);
  };
}
function Cn(t) {
  return new En(t);
}
class En {
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
    var i = /* @__PURE__ */ new Map(), r = (s, l) => {
      var f = /* @__PURE__ */ $i(l);
      return i.set(s, f), f;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, l) {
          return N(i.get(l) ?? r(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === mr ? true : (N(i.get(l) ?? r(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, f) {
          return V(i.get(l) ?? r(l, f), f), Reflect.set(s, l, f);
        }
      }
    );
    __privateSet(this, _e2, (e.hydrate ? pn : ir)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? false,
      recover: e.recover
    })), (!((_a2 = e == null ? void 0 : e.props) == null ? void 0 : _a2.$$host) || e.sync === false) && Be(), __privateSet(this, _t2, n.$$events);
    for (const s of Object.keys(__privateGet(this, _e2)))
      s === "$set" || s === "$destroy" || s === "$on" || St(this, s, {
        get() {
          return __privateGet(this, _e2)[s];
        },
        /** @param {any} value */
        set(l) {
          __privateGet(this, _e2)[s] = l;
        },
        enumerable: true
      });
    __privateGet(this, _e2).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, __privateGet(this, _e2).$destroy = () => {
      vn(__privateGet(this, _e2));
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
let ar;
typeof HTMLElement == "function" && (ar = class extends HTMLElement {
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
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), tr(n, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, i = Sn(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = true) : e[r] = t(r));
      for (const r of this.attributes) {
        const n = this.$$g_p(r.name);
        n in this.$$d || (this.$$d[n] = yt(n, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Cn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Jr(() => {
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
          const s = this.$$c.$on(r, n);
          this.$$l_u.set(n, s);
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
function Sn(t) {
  const e = {};
  return t.childNodes.forEach((i) => {
    e[
      /** @type {Element} node */
      i.slot || "default"
    ] = true;
  }), e;
}
function kn(t, e, i, r, n, s) {
  let l = class extends ar {
    constructor() {
      super(t, i, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Et(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Et(e).forEach((f) => {
    St(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(b) {
        var _a2;
        b = yt(f, b, e), this.$$d[f] = b;
        var d = this.$$c;
        if (d) {
          var m = (_a2 = He(d, f)) == null ? void 0 : _a2.get;
          m ? d[f] = b : d.$set({ [f]: b });
        }
      }
    });
  }), r.forEach((f) => {
    St(l.prototype, f, {
      get() {
        var _a2;
        return (_a2 = this.$$c) == null ? void 0 : _a2[f];
      }
    });
  }), s && (l = s(l)), t.element = /** @type {any} */
  l, l;
}
class Dn {
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
const M = new Dn();
function Tn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var it = { exports: {} }, Rn = it.exports, gi;
function $n() {
  return gi || (gi = 1, (function(t, e) {
    (function(i, r) {
      var n = "1.0.41", s = "", l = "?", f = "function", b = "undefined", d = "object", m = "string", p = "major", o = "model", c = "name", a = "type", u = "vendor", v = "version", O = "architecture", L = "console", y = "mobile", w = "tablet", F = "smarttv", P = "wearable", re = "embedded", X = 500, be = "Amazon", ne = "Apple", Ve = "ASUS", lt = "BlackBerry", Ee = "Browser", Se = "Chrome", Mt = "Edge", Ae = "Firefox", Oe = "Google", ut = "Honor", Z = "Huawei", Kt = "Lenovo", Le = "LG", je = "Microsoft", Ge = "Motorola", Fe = "Nvidia", ct = "OnePlus", ke = "Opera", Ye = "OPPO", De = "Samsung", dt = "Sharp", Q = "Sony", Xe = "Xiaomi", Pe = "Zebra", Ze = "Facebook", Qe = "Chromium OS", Te = "Mac OS", pe = " Browser", ft = function(C, S) {
        var x = {};
        for (var R in C)
          S[R] && S[R].length % 2 === 0 ? x[R] = S[R].concat(C[R]) : x[R] = C[R];
        return x;
      }, ve = function(C) {
        for (var S = {}, x = 0; x < C.length; x++)
          S[C[x].toUpperCase()] = C[x];
        return S;
      }, G = function(C, S) {
        return typeof C === m ? h(S).indexOf(h(C)) !== -1 : false;
      }, h = function(C) {
        return C.toLowerCase();
      }, _ = function(C) {
        return typeof C === m ? C.replace(/[^\d\.]/g, s).split(".")[0] : r;
      }, T = function(C, S) {
        if (typeof C === m)
          return C = C.replace(/^\s\s*/, s), typeof S === b ? C : C.substring(0, X);
      }, E = function(C, S) {
        for (var x = 0, R, ce, se, k, g, oe; x < S.length && !g; ) {
          var zt = S[x], li = S[x + 1];
          for (R = ce = 0; R < zt.length && !g && zt[R]; )
            if (g = zt[R++].exec(C), g)
              for (se = 0; se < li.length; se++)
                oe = g[++ce], k = li[se], typeof k === d && k.length > 0 ? k.length === 2 ? typeof k[1] == f ? this[k[0]] = k[1].call(this, oe) : this[k[0]] = k[1] : k.length === 3 ? typeof k[1] === f && !(k[1].exec && k[1].test) ? this[k[0]] = oe ? k[1].call(this, oe, k[2]) : r : this[k[0]] = oe ? oe.replace(k[1], k[2]) : r : k.length === 4 && (this[k[0]] = oe ? k[3].call(this, oe.replace(k[1], k[2])) : r) : this[k] = oe || r;
          x += 2;
        }
      }, A = function(C, S) {
        for (var x in S)
          if (typeof S[x] === d && S[x].length > 0) {
            for (var R = 0; R < S[x].length; R++)
              if (G(S[x][R], C))
                return x === l ? r : x;
          } else if (G(S[x], C))
            return x === l ? r : x;
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
      }, Je = {
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
      }, ai = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [v, [c, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [v, [c, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [c, v],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [v, [c, ke + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [v, [c, ke + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [v, [c, ke]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [v, [c, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [v, [c, "Maxthon"]],
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
          [c, v],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [v, [c, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [v, [c, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [v, [c, "UC" + Ee]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [v, [c, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [v, [c, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [v, [c, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [v, [c, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [v, [c, "Smart Lenovo " + Ee]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[c, /(.+)/, "$1 Secure " + Ee], v],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [v, [c, Ae + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [v, [c, ke + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [v, [c, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [v, [c, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [v, [c, ke + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [v, [c, "MIUI" + pe]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [v, [c, Ae]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [v, [c, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[c, /(.+)/, "$1Browser"], v],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[c, /(.+)/, "$1" + pe], v],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [v, [c, De + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [v, [c, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[c, "Sogou Mobile"], v],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [c, v],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [c],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [v, c],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[c, Ze], v],
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
          [c, v],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [v, [c, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [v, [c, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [v, [c, Se + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[c, Se + " WebView"], v],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [v, [c, "Android " + Ee]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [c, v],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [v, [c, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [v, c],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [c, [v, A, B]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [c, v],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[c, "Netscape"], v],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [c, v],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [v, [c, Ae + " Reality"]],
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
          [c, [v, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [c, [v, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /\b((amd|x|x86[-_]?|wow|win)64)\b/i
            // AMD64 (x64)
          ],
          [[O, "amd64"]],
          [
            /(ia32(?=;))/i,
            // IA32 (quicktime)
            /\b((i[346]|x)86)(pc)?\b/i
            // IA32 (x86)
          ],
          [[O, "ia32"]],
          [
            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
            // ARM64
          ],
          [[O, "arm64"]],
          [
            /\b(arm(v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[O, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
          ],
          [[O, "arm"]],
          [
            /((ppc|powerpc)(64)?)( mac|;|\))/i
            // PowerPC
          ],
          [[O, /ower/, s, h]],
          [
            / sun4\w[;\)]/i
            // SPARC
          ],
          [[O, "sparc"]],
          [
            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[O, h]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [o, [u, De], [a, w]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [o, [u, De], [a, y]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [o, [u, ne], [a, y]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [o, [u, ne], [a, w]],
          [
            /(macintosh);/i
          ],
          [o, [u, ne]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [o, [u, dt], [a, y]],
          [
            // Honor
            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
          ],
          [o, [u, ut], [a, w]],
          [
            /honor([-\w ]+)[;\)]/i
          ],
          [o, [u, ut], [a, y]],
          [
            // Huawei
            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
          ],
          [o, [u, Z], [a, w]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [o, [u, Z], [a, y]],
          [
            // Xiaomi
            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[o, /_/g, " "], [u, Xe], [a, w]],
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
          [[o, /_/g, " "], [u, Xe], [a, y]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [o, [u, Ye], [a, y]],
          [
            /\b(opd2(\d{3}a?))(?: bui|\))/i
          ],
          [o, [u, A, { OnePlus: ["304", "403", "203"], "*": Ye }], [a, w]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [o, [u, "Vivo"], [a, y]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [o, [u, "Realme"], [a, y]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [o, [u, Ge], [a, y]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [o, [u, Ge], [a, w]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [o, [u, Le], [a, w]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [o, [u, Le], [a, y]],
          [
            // Lenovo
            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
          ],
          [o, [u, Kt], [a, w]],
          [
            // Nokia
            /(nokia) (t[12][01])/i
          ],
          [u, o, [a, w]],
          [
            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
            /nokia[-_ ]?(([-\w\. ]*))/i
          ],
          [[o, /_/g, " "], [a, y], [u, "Nokia"]],
          [
            // Google
            /(pixel (c|tablet))\b/i
            // Google Pixel C/Tablet
          ],
          [o, [u, Oe], [a, w]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [o, [u, Oe], [a, y]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [o, [u, Q], [a, y]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[o, "Xperia Tablet"], [u, Q], [a, w]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [o, [u, ct], [a, y]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [o, [u, be], [a, w]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[o, /(.+)/g, "Fire Phone $1"], [u, be], [a, y]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [o, u, [a, w]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [o, [u, lt], [a, y]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [o, [u, Ve], [a, w]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [o, [u, Ve], [a, y]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [o, [u, "HTC"], [a, w]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [u, [o, /_/g, " "], [a, y]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [o, [u, "TCL"], [a, w]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[u, h], o, [a, A, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [o, [u, "Acer"], [a, w]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [o, [u, "Meizu"], [a, y]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [o, [u, "Ulefone"], [a, y]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [o, [u, "Energizer"], [a, y]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [o, [u, "Cat"], [a, y]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [o, [u, "Smartfren"], [a, y]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [o, [u, "Nothing"], [a, y]],
          [
            // Archos
            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
          ],
          [o, [u, "Archos"], [a, w]],
          [
            /archos ([\w ]+)( b|\))/i,
            /; (ac[3-6]\d\w{2,8})( b|\))/i
          ],
          [o, [u, "Archos"], [a, y]],
          [
            // MIXED
            /(imo) (tab \w+)/i,
            // IMO
            /(infinix) (x1101b?)/i
            // Infinix XPad
          ],
          [u, o, [a, w]],
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
          [u, o, [a, y]],
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
          [u, o, [a, w]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [o, [u, je], [a, w]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [o, [u, "Fairphone"], [a, y]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [o, [u, "AT&T"], [a, y]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [o, [u, "Siemens"], [a, y]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [o, [u, "RCA"], [a, w]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [o, [u, "Dell"], [a, w]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [o, [u, "Verizon"], [a, w]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [o, [u, "Barnes & Noble"], [a, w]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [o, [u, "NuVision"], [a, w]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [o, [u, "ZTE"], [a, w]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [o, [u, "ZTE"], [a, y]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [o, [u, "Swiss"], [a, y]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [o, [u, "Swiss"], [a, w]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [o, [u, "Zeki"], [a, w]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[u, "Dragon Touch"], o, [a, w]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [o, [u, "Insignia"], [a, w]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [o, [u, "NextBook"], [a, w]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[u, "Voice"], o, [a, y]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[u, "LvTel"], o, [a, y]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [o, [u, "Essential"], [a, y]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [o, [u, "Envizen"], [a, w]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [o, [u, "MachSpeed"], [a, w]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [o, [u, "Rotor"], [a, w]],
          [
            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
            // Nvidia Tablets
          ],
          [o, [u, Fe], [a, w]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [u, o, [a, y]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[o, /\./g, " "], [u, je], [a, y]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [o, [u, Pe], [a, w]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [o, [u, Pe], [a, y]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [u, [a, F]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[o, /^/, "SmartTV"], [u, De], [a, F]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[u, Le], [a, F]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [u, [o, ne + " TV"], [a, F]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[o, Se + "cast"], [u, Oe], [a, F]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [o, [u, be], [a, F]],
          [
            /(shield \w+ tv)/i
            // Nvidia Shield TV
          ],
          [o, [u, Fe], [a, F]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [o, [u, dt], [a, F]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [o, [u, Q], [a, F]],
          [
            /(mi(tv|box)-?\w+) bui/i
            // Xiaomi
          ],
          [o, [u, Xe], [a, F]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [u, o, [a, F]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[u, T], [o, T], [a, F]],
          [
            // SmartTV from Unidentified Vendors
            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
          ],
          [o, [a, F]],
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
          [u, o, [a, L]],
          [
            /droid.+; (shield)( bui|\))/i
            // Nvidia Portable
          ],
          [o, [u, Fe], [a, L]],
          [
            /(playstation \w+)/i
            // Playstation
          ],
          [o, [u, Q], [a, L]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [o, [u, je], [a, L]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
            // Samsung Galaxy Watch
          ],
          [o, [u, De], [a, P]],
          [
            /((pebble))app/i,
            // Pebble
            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
            // Asus ZenWatch / LG Watch / Pixel Watch
          ],
          [u, o, [a, P]],
          [
            /(ow(?:19|20)?we?[1-3]{1,3})/i
            // Oppo Watch
          ],
          [o, [u, Ye], [a, P]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [o, [u, ne], [a, P]],
          [
            /(opwwe\d{3})/i
            // OnePlus Watch
          ],
          [o, [u, ct], [a, P]],
          [
            /(moto 360)/i
            // Motorola 360
          ],
          [o, [u, Ge], [a, P]],
          [
            /(smartwatch 3)/i
            // Sony SmartWatch
          ],
          [o, [u, Q], [a, P]],
          [
            /(g watch r)/i
            // LG G Watch R
          ],
          [o, [u, Le], [a, P]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [o, [u, Pe], [a, P]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [o, [u, Oe], [a, P]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [u, o, [a, P]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [o, [u, Ze], [a, P]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [u, [a, re]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [o, [u, be], [a, re]],
          [
            /(homepod).+mac os/i
            // Apple HomePod
          ],
          [o, [u, ne], [a, re]],
          [
            /windows iot/i
          ],
          [[a, re]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [o, [a, y]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [o, [a, w]],
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
          [o, [u, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [v, [c, Mt + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [c, v],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [v, [c, "Blink"]],
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
          [c, v],
          [
            /ladybird\//i
          ],
          [[c, "LibWeb"]],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [v, c]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [c, v],
          [
            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [c, [v, A, Je]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[v, A, Je], [c, "Windows"]],
          [
            // iOS/macOS
            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[v, /_/g, "."], [c, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[c, Te], [v, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [v, c],
          [
            /(ubuntu) ([\w\.]+) like android/i
            // Ubuntu Touch
          ],
          [[c, /(.+)/, "$1 Touch"], v],
          [
            // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i
          ],
          [c, v],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [v, [c, lt]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [v, [c, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [v, [c, Ae + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [v, [c, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [v, [c, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [v, [c, Se + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[c, Qe], v],
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
          [c, v],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[c, "Solaris"], v],
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
          [c, v]
        ]
      }, J = function(C, S) {
        if (typeof C === d && (S = C, C = r), !(this instanceof J))
          return new J(C, S).getResult();
        var x = typeof i !== b && i.navigator ? i.navigator : r, R = C || (x && x.userAgent ? x.userAgent : s), ce = x && x.userAgentData ? x.userAgentData : r, se = S ? ft(ai, S) : ai, k = x && x.userAgent == R;
        return this.getBrowser = function() {
          var g = {};
          return g[c] = r, g[v] = r, E.call(g, R, se.browser), g[p] = _(g[v]), k && x && x.brave && typeof x.brave.isBrave == f && (g[c] = "Brave"), g;
        }, this.getCPU = function() {
          var g = {};
          return g[O] = r, E.call(g, R, se.cpu), g;
        }, this.getDevice = function() {
          var g = {};
          return g[u] = r, g[o] = r, g[a] = r, E.call(g, R, se.device), k && !g[a] && ce && ce.mobile && (g[a] = y), k && g[o] == "Macintosh" && x && typeof x.standalone !== b && x.maxTouchPoints && x.maxTouchPoints > 2 && (g[o] = "iPad", g[a] = w), g;
        }, this.getEngine = function() {
          var g = {};
          return g[c] = r, g[v] = r, E.call(g, R, se.engine), g;
        }, this.getOS = function() {
          var g = {};
          return g[c] = r, g[v] = r, E.call(g, R, se.os), k && !g[c] && ce && ce.platform && ce.platform != "Unknown" && (g[c] = ce.platform.replace(/chrome os/i, Qe).replace(/macos/i, Te)), g;
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
          return R;
        }, this.setUA = function(g) {
          return R = typeof g === m && g.length > X ? T(g, X) : g, this;
        }, this.setUA(R), this;
      };
      J.VERSION = n, J.BROWSER = ve([c, v, p]), J.CPU = ve([O]), J.DEVICE = ve([o, u, a, L, y, F, w, P, re]), J.ENGINE = J.OS = ve([c, v]), t.exports && (e = t.exports = J), e.UAParser = J;
      var Ne = typeof i !== b && (i.jQuery || i.Zepto);
      if (Ne && !Ne.ua) {
        var ht = new J();
        Ne.ua = ht.getResult(), Ne.ua.get = function() {
          return ht.getUA();
        }, Ne.ua.set = function(C) {
          ht.setUA(C);
          var S = ht.getResult();
          for (var x in S)
            Ne.ua[x] = S[x];
        };
      }
    })(typeof window == "object" ? window : Rn);
  })(it, it.exports)), it.exports;
}
var An = $n();
const On = /* @__PURE__ */ Tn(An), Ln = new On(), lr = Ln.getResult(), Fn = (_a = lr.engine.name) == null ? void 0 : _a.toLowerCase(), yi = Number((_b = lr.engine.version) == null ? void 0 : _b.split(".")[0]), Wt = {
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
}, _i = {
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
}, Pn = {
  "0x0054": "PrintScreen",
  "0xE020": "VolumeMute",
  // The documentation says it's 'AudioVolumeMute', but the actual test shows that it's 'VolumeMute'.
  "0xE02E": "VolumeDown",
  "0xE030": "VolumeUp",
  "0xE05B": yi > 117 ? "MetaLeft" : "OSLeft",
  "0xE05C": yi > 117 ? "MetaRight" : "OSRight"
}, Nn = {
  blink: qt({ ...Wt, ..._i }),
  gecko: qt({ ...Wt, ...Pn }),
  webkit: qt({ ...Wt, ..._i })
};
function qt(t) {
  const e = {};
  for (const [i, r] of Object.entries(t))
    e[r] = i;
  return e;
}
const ze = function(t) {
  const e = Nn[Fn];
  return parseInt(e[t], 16);
}, Mn = {
  "`": "Backquote",
  1: "Digit1",
  2: "Digit2",
  3: "Digit3",
  4: "Digit4",
  5: "Digit5",
  6: "Digit6",
  7: "Digit7",
  8: "Digit8",
  9: "Digit9",
  0: "Digit0",
  "-": "Minus",
  "=": "Equal",
  q: "KeyQ",
  w: "KeyW",
  e: "KeyE",
  r: "KeyR",
  t: "KeyT",
  y: "KeyY",
  u: "KeyU",
  i: "KeyI",
  o: "KeyO",
  p: "KeyP",
  "[": "BracketLeft",
  "]": "BracketRight",
  "\\": "Backslash",
  a: "KeyA",
  s: "KeyS",
  d: "KeyD",
  f: "KeyF",
  g: "KeyG",
  h: "KeyH",
  j: "KeyJ",
  k: "KeyK",
  l: "KeyL",
  ";": "Semicolon",
  "'": "Quote",
  z: "KeyZ",
  x: "KeyX",
  c: "KeyC",
  v: "KeyV",
  b: "KeyB",
  n: "KeyN",
  m: "KeyM",
  ",": "Comma",
  ".": "Period",
  "/": "Slash",
  " ": "Space"
}, Kn = {
  "~": "Backquote",
  "!": "Digit1",
  "@": "Digit2",
  "#": "Digit3",
  $: "Digit4",
  "%": "Digit5",
  "^": "Digit6",
  "&": "Digit7",
  "*": "Digit8",
  "(": "Digit9",
  ")": "Digit0",
  _: "Minus",
  "+": "Equal",
  Q: "KeyQ",
  W: "KeyW",
  E: "KeyE",
  R: "KeyR",
  T: "KeyT",
  Y: "KeyY",
  U: "KeyU",
  I: "KeyI",
  O: "KeyO",
  P: "KeyP",
  "{": "BracketLeft",
  "}": "BracketRight",
  "|": "Backslash",
  A: "KeyA",
  S: "KeyS",
  D: "KeyD",
  F: "KeyF",
  G: "KeyG",
  H: "KeyH",
  J: "KeyJ",
  K: "KeyK",
  L: "KeyL",
  ":": "Semicolon",
  '"': "Quote",
  Z: "KeyZ",
  X: "KeyX",
  C: "KeyC",
  V: "KeyV",
  B: "KeyB",
  N: "KeyN",
  M: "KeyM",
  "<": "Comma",
  ">": "Period",
  "?": "Slash"
}, oi = {};
for (const [t, e] of Object.entries(Mn))
  oi[t] = { code: e, shift: false };
for (const [t, e] of Object.entries(Kn))
  oi[t] = { code: e, shift: true };
function zn(t) {
  return oi[t];
}
var H = /* @__PURE__ */ ((t) => (t.CTRL_LEFT = "ControlLeft", t.SHIFT_LEFT = "ShiftLeft", t.SHIFT_RIGHT = "ShiftRight", t.ALT_LEFT = "AltLeft", t.CTRL_RIGHT = "ControlRight", t.ALT_RIGHT = "AltRight", t.ControlLeft = "ControlLeft", t.ShiftLeft = "ShiftLeft", t.ShiftRight = "ShiftRight", t.AltLeft = "AltLeft", t.ControlRight = "ControlRight", t.AltRight = "AltRight", t))(H || {}), Ue = /* @__PURE__ */ ((t) => (t.CAPS_LOCK = "CapsLock", t.NUM_LOCK = "NumLock", t.SCROLL_LOCK = "ScrollLock", t.KANA_MODE = "KanaMode", t.CapsLock = "CapsLock", t.ScrollLock = "ScrollLock", t.NumLock = "NumLock", t.KanaMode = "KanaMode", t))(Ue || {}), fe = /* @__PURE__ */ ((t) => (t[t.CTRL_ALT_DEL = 0] = "CTRL_ALT_DEL", t[t.META = 1] = "META", t[t.CTRL_C = 2] = "CTRL_C", t[t.CTRL_V = 3] = "CTRL_V", t))(fe || {}), me = /* @__PURE__ */ ((t) => (t[t.Fit = 1] = "Fit", t[t.Full = 2] = "Full", t[t.Real = 3] = "Real", t))(me || {}), rt = /* @__PURE__ */ ((t) => (t[t.Pixel = 0] = "Pixel", t[t.Line = 1] = "Line", t[t.Page = 2] = "Page", t))(rt || {});
class In {
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
class Bn {
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
    return new In(e, i, r);
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
    for (const i of this.subscribers)
      i(e);
  }
}
class Un {
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
    __publicField(this, "modifierKeyPressed", []);
    // The scancode of the Shift key currently held on the GUEST, or null. The guest's Shift is a lazy
    // state tracked separately from the physical mirror (modifierKeyPressed): a layout-shifted digit
    // releases it and LEAVES it released (terminal-safe -- no per-digit re-press churn), and it is
    // reconciled to what the NEXT event needs (the character's Shift requirement, or the physical Shift
    // for a navigation key) instead of being restored eagerly. This is Guacamole's guest-side modifier
    // model (guac_rdp keyboard.c update_modifiers): only the delta from the current guest state is sent.
    __publicField(this, "guestShiftScanCode", null);
    __publicField(this, "mousePositionObservable", new Ie());
    __publicField(this, "changeVisibilityObservable", new Ie());
    __publicField(this, "scaleObservable", new Ie());
    __publicField(this, "dynamicResizeObservable", new Ie());
    this.module = e, M.info("Web bridge initialized.");
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
    return new Bn();
  }
  async connect(e) {
    var _a2;
    const i = new this.module.SessionBuilder();
    if (i.proxyAddress(e.proxyAddress), i.destination(e.destination), i.serverDomain(e.serverDomain), i.password(e.password), i.authToken(e.authToken), i.username(e.username), i.renderCanvas(this.canvas), i.setCursorStyleCallbackContext(this), i.setCursorStyleCallback(this.setCursorStyleCallback), e.extensions.forEach((s) => {
      i.extension(s);
    }), this.onRemoteClipboardChanged != null && this.enableClipboard && i.remoteClipboardChangedCallback(this.onRemoteClipboardChanged), this.onForceClipboardUpdate != null && this.enableClipboard && i.forceClipboardUpdateCallback(this.onForceClipboardUpdate), this.fileTransferProvider != null && this.enableClipboard)
      for (const s of this.fileTransferProvider.getBuilderExtensions())
        i.extension(s);
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
        return M.info("Starting the session."), await r.run();
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
    this.modifierKeyPressed = [], this.guestShiftScanCode = null, (_a2 = this.session) == null ? void 0 : _a2.releaseAllInputs();
  }
  sendKeyboard(e) {
    e.preventDefault();
    let i, r;
    e.type === "keydown" ? (i = this.module.DeviceEvent.keyPressed, r = this.module.DeviceEvent.unicodePressed) : e.type === "keyup" && (i = this.module.DeviceEvent.keyReleased, r = this.module.DeviceEvent.unicodeReleased);
    const n = e.code in H, s = e.code in Ue, l = e.key.length === 1 ? e.key.codePointAt(0) ?? 0 : 0, f = l >= 32 && l !== 127 && !n && !/^[a-z]$/i.test(e.key) && (e.altKey || e.getModifierState("AltGraph")) && !e.metaKey && !(e.ctrlKey && !e.altKey);
    if (n && this.updateModifierKeyState(e), s && this.syncModifier(e), e.repeat && (n || s))
      return;
    if (n || s) {
      if (e.code === Ue.CAPS_LOCK)
        return;
      if (e.code === H.SHIFT_LEFT || e.code === H.SHIFT_RIGHT) {
        const m = this.syncGuestShift(this.isPhysicalShiftHeld());
        m.length > 0 && this.doTransactionFromDeviceEvents(m);
        return;
      }
      const d = ze(e.code);
      i && !Number.isNaN(d) && this.doTransactionFromDeviceEvents([i(d)]);
      return;
    }
    if (e.key === "Dead" || e.key === "Unidentified")
      return;
    if (this.keyboardUnicodeMode && e.key.length === 1) {
      const d = zn(e.key);
      if (d) {
        this.sendUsCharacter(e, d, f);
        return;
      }
      i && r && this.sendUnicodeCharacter(e, f);
      return;
    }
    const b = ze(e.code);
    if (i && !Number.isNaN(b)) {
      const d = [...this.syncGuestShift(e.shiftKey), i(b)];
      this.doTransactionFromDeviceEvents(d);
    }
  }
  /// Reproduce a printable US-QWERTY character on the en-US-pinned guest (Guacamole's keysym->scancode
  /// model). Emitted as ONE atomic transaction on keydown: strip any AltGr the client used, reconcile
  /// the guest Shift to exactly what the US layout needs for this character (lazy -- only the delta
  /// from the current guest Shift is sent), tap the scancode, then re-press the stripped AltGr. The
  /// guest Shift is NOT restored to the physical state here: under a continuous Shift-hold that restore
  /// re-pressed Shift after every layout-shifted digit, and a terminal that honours the live modifier
  /// stream then read the next digit as its shifted symbol (12345 -> !@#$%). Instead the guest Shift is
  /// left where the character needed it and reconciled by the NEXT event; the only exception is a
  /// character that needed Shift while none is physically held ("@"), where the tapped Shift is
  /// released now so it does not linger. keyup carries nothing (auto-repeat re-fires keydown). Command
  /// chords (Ctrl+C) keep their modifiers: Ctrl is forwarded by its own key event and never stripped.
  sendUsCharacter(e, i, r) {
    if (e.type !== "keydown")
      return;
    const n = ze(i.code);
    if (Number.isNaN(n))
      return;
    const s = this.module.DeviceEvent, l = [], f = r ? this.heldCtrlAltScanCodes() : [];
    for (const b of f)
      l.push(s.keyReleased(b));
    l.push(...this.syncGuestShift(i.shift)), l.push(s.keyPressed(n)), l.push(s.keyReleased(n)), e.shiftKey || l.push(...this.syncGuestShift(false));
    for (const b of f)
      l.push(s.keyPressed(b));
    this.doTransactionFromDeviceEvents(l);
  }
  /// Fallback for a non-ASCII printable character (accent, currency) that the en-US layout cannot
  /// produce with a scancode: inject the Unicode codepoint. A Shift held on the guest would be
  /// re-applied to the injected keysym and corrupt it, so reconcile the guest Shift to released for the
  /// injection and leave it released (lazy) -- the next key reconciles it back if Shift is still held.
  /// Any AltGr the client used is stripped around the injection and restored (Ctrl/Alt are not lazy).
  sendUnicodeCharacter(e, i) {
    const r = this.module.DeviceEvent, n = e.type === "keydown" ? r.unicodePressed : r.unicodeReleased, s = [], l = i && e.type === "keydown" ? this.heldCtrlAltScanCodes() : [];
    for (const f of l)
      s.push(r.keyReleased(f));
    e.type === "keydown" && s.push(...this.syncGuestShift(false)), s.push(n(e.key));
    for (const f of l)
      s.push(r.keyPressed(f));
    this.doTransactionFromDeviceEvents(s);
  }
  setCursorStyleCallback(e, i, r, n) {
    let s;
    switch (e) {
      case "hidden": {
        s = "none";
        break;
      }
      case "default": {
        s = "default";
        break;
      }
      case "url": {
        if (i == null || r == null || n == null) {
          console.error("Invalid custom cursor parameters.");
          return;
        }
        const l = new Image();
        l.src = i;
        const f = Math.round(r), b = Math.round(n);
        s = `url(${i}) ${f} ${b}, default`;
        break;
      }
      default: {
        console.error(`Unsupported cursor style: ${e}.`);
        return;
      }
    }
    this.lastCursorStyle = s, this.cursorHasOverride || (this.canvas.style.cursor = s);
  }
  syncModifier(e) {
    var _a2;
    const i = e.getModifierState(Ue.NUM_LOCK), r = e.getModifierState(Ue.SCROLL_LOCK), n = e.getModifierState(Ue.KANA_MODE);
    (_a2 = this.session) == null ? void 0 : _a2.synchronizeLockKeys(r, i, false, n);
  }
  /// Reconcile the GUEST's Shift to `desired`, returning only the delta and updating guestShiftScanCode.
  /// Pressing uses the physically-held Shift side (so a later physical keyup releases the SAME scancode,
  /// never stranding a side), or ShiftLeft when none is held (e.g. tapping Shift for "@"). Releasing
  /// drops whatever the guest currently holds. Never restores eagerly: the caller leaves the guest
  /// Shift in the reconciled state, so a continuous number-row hold releases Shift once instead of
  /// churning it per digit -- the terminal digit fix. Guacamole's guest-side modifier reconciliation.
  syncGuestShift(e) {
    const i = this.module.DeviceEvent, r = [];
    if (e && this.guestShiftScanCode === null) {
      const n = this.heldShiftScanCodes(), s = n.length > 0 ? n[0] : ze("ShiftLeft");
      Number.isNaN(s) || (r.push(i.keyPressed(s)), this.guestShiftScanCode = s);
    } else !e && this.guestShiftScanCode !== null && (r.push(i.keyReleased(this.guestShiftScanCode)), this.guestShiftScanCode = null);
    return r;
  }
  /// Whether the client physically holds a Shift (either side), from the tracked mirror.
  isPhysicalShiftHeld() {
    return this.modifierKeyPressed.indexOf(H.SHIFT_LEFT) !== -1 || this.modifierKeyPressed.indexOf(H.SHIFT_RIGHT) !== -1;
  }
  /// Windows scancodes for the Shift key(s) currently held down, as tracked in
  /// modifierKeyPressed (i.e. the ones the client physically holds). Used to pick which Shift side to
  /// press when reconciling the guest Shift so the eventual physical keyup releases the same scancode.
  heldShiftScanCodes() {
    const e = [];
    for (const [i, r] of [
      [H.SHIFT_LEFT, "ShiftLeft"],
      [H.SHIFT_RIGHT, "ShiftRight"]
    ])
      if (this.modifierKeyPressed.indexOf(i) !== -1) {
        const n = ze(r);
        Number.isNaN(n) || e.push(n);
      }
    return e;
  }
  /// Windows scancodes for the Ctrl/Alt key(s) currently held down, tracked in modifierKeyPressed --
  /// the ones we actually pressed on the guest. Strip AltGr around a character using ONLY these, so a
  /// Ctrl/Alt side the user never held is never re-pressed and stranded.
  heldCtrlAltScanCodes() {
    const e = [];
    for (const [i, r] of [
      [H.CTRL_LEFT, "ControlLeft"],
      [H.CTRL_RIGHT, "ControlRight"],
      [H.ALT_LEFT, "AltLeft"],
      [H.ALT_RIGHT, "AltRight"]
    ])
      if (this.modifierKeyPressed.indexOf(i) !== -1) {
        const n = ze(r);
        Number.isNaN(n) || e.push(n);
      }
    return e;
  }
  updateModifierKeyState(e) {
    const i = H[e.code], r = this.modifierKeyPressed.indexOf(i);
    e.type === "keydown" ? r === -1 && this.modifierKeyPressed.push(i) : e.type === "keyup" && r !== -1 && this.modifierKeyPressed.splice(r, 1);
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
class Hn {
  constructor(e, i) {
    __publicField(this, "remoteDesktopService");
    __publicField(this, "clipboardService");
    this.remoteDesktopService = e, this.clipboardService = i;
  }
  configBuilder() {
    return this.remoteDesktopService.configBuilder();
  }
  connect(e) {
    return M.info("Initializing connection."), this.remoteDesktopService.connect(e);
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
    M.info(`Change component visibility to: ${e}`), this.remoteDesktopService.setVisibility(e);
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
const Zt = sr(false);
function Wn() {
  const t = sr([]);
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
      return or(t).length;
    }
  };
}
const Qt = Wn();
var W = /* @__PURE__ */ ((t) => (t[t.Full = 0] = "Full", t[t.TextOnly = 1] = "TextOnly", t[t.TextOnlyServerOnly = 2] = "TextOnlyServerOnly", t[t.None = 3] = "None", t))(W || {}), ur = /* @__PURE__ */ ((t) => (t[t.General = 0] = "General", t[t.WrongPassword = 1] = "WrongPassword", t[t.LogonFailure = 2] = "LogonFailure", t[t.AccessDenied = 3] = "AccessDenied", t[t.RDCleanPath = 4] = "RDCleanPath", t[t.ProxyConnect = 5] = "ProxyConnect", t[t.NegotiationFailure = 6] = "NegotiationFailure", t))(ur || {});
const qn = 100;
function ae(t) {
  throw {
    kind: () => ur.General,
    backtrace: () => t
  };
}
class Vn {
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
      const e = this.clipboardDataToRecord(this.clipboardDataToSave), i = new ClipboardItem(e);
      await navigator.clipboard.write([i]), this.clipboardDataToSave = null;
    } catch (e) {
      ae("Failed to write to the clipboard: " + e);
    }
  }
  // Sends local clipboard's content to the server.
  // Returns the result of the operation. On failure, it additionally raises an error session event.
  async sendClipboardData() {
    if (this.ClipboardApiSupported !== W.Full)
      return await this.ffSendClipboardData();
    const e = await navigator.clipboard.read().catch((n) => {
      ae("Failed to read from the clipboard: " + n);
    });
    e.length == 0 && ae("The clipboard has no data.");
    const i = e[0];
    i.types.some((n) => n.startsWith("text/") || n.startsWith("image/png")) || ae("The clipboard has no data of supported type (text or image).");
    const r = new this.module.ClipboardData();
    for (const n of i.types) {
      const s = n.startsWith("text/"), l = await i.getType(n);
      s ? r.addText(n, await l.text()) : r.addBinary(n, new Uint8Array(await l.arrayBuffer()));
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
    setTimeout(this.onMonitorClipboard.bind(this), qn);
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
      if (!r.types.some((l) => l.startsWith("text/") || l.startsWith("image/png")))
        return;
      const n = {};
      let s = true;
      for (const l of r.types) {
        const f = l.startsWith("text/"), b = await r.getType(l), d = f ? await b.text() : new Uint8Array(await b.arrayBuffer()), m = f ? function(o, c) {
          return o === c;
        } : function(o, c) {
          return !(o instanceof Uint8Array) || !(c instanceof Uint8Array) ? false : o.length === c.length && o.every((a, u) => a === c[u]);
        }, p = this.lastClientClipboardItems[l];
        m(p, d) || (m(this.lastReceivedClipboardData[l], d) ? this.lastClientClipboardItems[l] = this.lastReceivedClipboardData[l] : s = false), n[l] = d;
      }
      if (!s) {
        this.lastClientClipboardItems = n;
        const l = new this.module.ClipboardData();
        Object.entries(n).forEach(([f, b]) => {
          b != null && (f.startsWith("text/") && typeof b == "string" ? l.addText(f, b) : f.startsWith("image/") && b instanceof Uint8Array && l.addBinary(f, b));
        }), l.isEmpty() || (this.lastSentClipboardData = l, await this.remoteDesktopService.onClipboardChanged(l));
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
      !e && !or(Zt) && this.scheduleOnMonitorClipboardUpdate();
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
    const e = await navigator.clipboard.readText().catch((r) => {
      ae("Failed to read from the clipboard: " + r);
    });
    e.length == 0 && ae("The clipboard has no data.");
    const i = new this.module.ClipboardData();
    i.addText("text/plain", e), i.isEmpty() || (this.lastSentClipboardData = i, await this.remoteDesktopService.onClipboardChanged(i));
  }
}
var jn = (t, e) => e(t, true), Gn = (t, e) => e(t, false), Yn = (t) => t.preventDefault(), Xn = /* @__PURE__ */ bn('<div class="svelte-1103xra"><div><div class="screen-viewer svelte-1103xra"><canvas id="renderer" tabindex="0" class="svelte-1103xra"></canvas></div></div></div>');
const Zn = {
  hash: "svelte-1103xra",
  code: ".screen-wrapper.svelte-1103xra {position:relative;}.capturing-inputs.svelte-1103xra {outline:1px solid rgba(0, 97, 166, 0.7);outline-offset:-1px;}canvas.svelte-1103xra {width:100%;height:100%;}.svelte-1103xra::selection {background-color:transparent;}.screen-wrapper.hidden.svelte-1103xra {pointer-events:none !important;position:absolute !important;visibility:hidden;height:100%;width:100%;transform:translate(-100%, -100%);}"
};
function cr(t, e) {
  Zi(e, true), mn(t, Zn);
  let i = et(e, "scale"), r = et(e, "verbose"), n = et(e, "flexcenter"), s = et(e, "module"), l = et(e, "dynamicresize"), f = It(false), b = () => {
    var _a2, _b2;
    return M.info(`
            capturingInputs: ${document.activeElement === p}
            current active element: ${document.activeElement}
        `), ((_b2 = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b2.firstElementChild) === d;
  }, d, m, p, o = It(""), c = It(""), a = new Un(s()), u = new Vn(a, s()), v = new Hn(a, u), O = me.Fit;
  function L(h) {
    b() && De(h);
  }
  function y() {
    Ae(), Oe(), window.addEventListener("keydown", L, false), window.addEventListener("keyup", L, false), window.addEventListener("focus", Pe), window.addEventListener("blur", Ze), document.addEventListener("visibilitychange", Qe), document.addEventListener("fullscreenchange", w);
  }
  function w() {
    N(f) && (X("100%", "100%", "hidden"), setTimeout(() => Z(i()), 150));
  }
  function F() {
    n() === "true" && (d.style.flexGrow = "", d.style.display = "", d.style.justifyContent = "", d.style.alignItems = "");
  }
  function P(h) {
    n() === "true" && (d.style.flexGrow = "1", d.style.display = "flex", d.style.justifyContent = "center", d.style.alignItems = "center");
  }
  function re(h, _, T) {
    let E = `height: ${h}; width: ${_}`;
    E = `${E}; max-height: ${h}; max-width: ${_}; min-height: ${h}; min-width: ${_}`, V(o, Re(E));
  }
  function X(h, _, T) {
    V(c, `height: ${h}; width: ${_}; overflow: ${T}`);
  }
  let be, ne;
  function Ve(h, _, T) {
    const E = Math.max(_, Math.min(T, Math.floor(h)));
    return E % 2 === 0 ? E : E - 1;
  }
  function lt() {
    const { x: h, y: _ } = Q(), T = Ve(h, 200, 8192), E = Ve(_, 200, 8192);
    T > 0 && E > 0 && (T !== p.width || E !== p.height) && a.resizeDynamic(T, E);
  }
  function Ee() {
    l() !== "true" || !N(f) || (clearTimeout(ne), ne = setTimeout(lt, 150));
  }
  const Se = (h) => {
    Z(i()), Ee();
  };
  function Mt() {
    var _a2;
    const h = (_a2 = m == null ? void 0 : m.getRootNode) == null ? void 0 : _a2.call(m), _ = h && "host" in h ? h.host : void 0;
    !_ || typeof ResizeObserver > "u" || (be = new ResizeObserver(() => {
      Z(i()), Ee();
    }), be.observe(_));
  }
  function Ae() {
    a.resizeObservable.subscribe((h) => {
      M.info(`Resize canvas to: ${h.desktopSize.width}x${h.desktopSize.height}`), p.width = h.desktopSize.width, p.height = h.desktopSize.height, Z(i());
    });
  }
  function Oe() {
    window.addEventListener("resize", Se), Mt(), a.scaleObservable.subscribe((h) => {
      M.info("Change scale!"), Z(h);
    }), a.dynamicResizeObservable.subscribe((h) => {
      M.info(`Dynamic resize requested: ${h.width}x${h.height}`), Z(i());
    }), a.changeVisibilityObservable.subscribe((h) => {
      V(f, Re(h)), h && (X("100%", "100%", "hidden"), setTimeout(() => Z(i()), 150));
    });
  }
  function ut() {
    Z(O);
  }
  function Z(h) {
    if (F(), N(f)) {
      if (l() === "true") {
        const _ = Q();
        X("initial", "initial", "hidden"), re(`${_.y}px`, `${_.x}px`), P();
        return;
      }
      switch (h) {
        case "fit":
        case me.Fit:
          M.info("Size to fit"), O = me.Fit, i("fit"), Le();
          break;
        case "full":
        case me.Full:
          M.info("Size to full"), O = me.Full, Kt(), i("full");
          break;
        case "real":
        case me.Real:
          M.info("Size to real"), O = me.Real, je(), i("real");
          break;
      }
    }
  }
  function Kt() {
    const h = Q(), _ = h.x, T = h.y;
    let E = p.width, A = p.height;
    const B = Math.min(_ / p.width, T / p.height);
    E = E * B, A = A * B, X(`${T}px`, `${_}px`, "hidden"), E = E > 0 ? E : 0, A = A > 0 ? A : 0, re(`${A}px`, `${E}px`);
  }
  function Le(h = false) {
    const _ = Q(), T = _.x, E = _.y;
    let A = p.width, B = p.height;
    if (!h || T < p.width || E < p.height) {
      const Je = Math.min(T / p.width, E / p.height);
      A = A * Je, B = B * Je;
    }
    A = A > 0 ? A : 0, B = B > 0 ? B : 0, X("initial", "initial", "hidden"), re(`${B}px`, `${A}px`), P();
  }
  function je() {
    const h = Q(), _ = h.x, T = h.y;
    _ < p.width || T < p.height ? X(`${Math.min(T, p.height)}px`, `${Math.min(_, p.width)}px`, "auto") : X("initial", "initial", "initial"), re(`${p.height}px`, `${p.width}px`), P();
  }
  function Ge(h) {
    const _ = p == null ? void 0 : p.getBoundingClientRect(), T = (p == null ? void 0 : p.width) / _.width, E = (p == null ? void 0 : p.height) / _.height, A = {
      x: Math.round((h.clientX - _.left) * T),
      y: Math.round((h.clientY - _.top) * E)
    };
    a.updateMousePosition(A);
  }
  function Fe(h, _) {
    a.mouseButtonState(h, _, true);
  }
  function ct(h) {
    a.mouseWheel(h);
  }
  function ke(h) {
    p.focus({ preventScroll: true }), a.mouseIn(h);
  }
  function Ye(h) {
    a.mouseOut(h);
  }
  function De(h) {
    return a.sendKeyboardEvent(h), true;
  }
  function dt() {
    const h = window, _ = document, T = _.documentElement, E = _.getElementsByTagName("body")[0], A = h.innerWidth ?? T.clientWidth ?? E.clientWidth, B = h.innerHeight ?? T.clientHeight ?? E.clientHeight;
    return { x: A, y: B };
  }
  function Q() {
    var _a2;
    const h = (_a2 = m == null ? void 0 : m.getRootNode) == null ? void 0 : _a2.call(m), _ = h && "host" in h ? h.host : void 0;
    return _ && _.clientWidth > 0 && _.clientHeight > 0 ? { x: _.clientWidth, y: _.clientHeight } : dt();
  }
  async function Xe() {
    M.info("Start canvas initialization..."), p.width = 800, p.height = 600, a.setCanvas(p), a.setOnCanvasResized(ut), y();
    let h = {
      irgUserInteraction: v.getExposedFunctions()
    };
    M.info("Component ready"), M.info("Dispatching ready event"), d.dispatchEvent(new CustomEvent("ready", {
      detail: h,
      bubbles: true,
      composed: true
    }));
  }
  function Pe() {
    var _a2;
    try {
      for (; Qt.length() > 0; )
        (_a2 = Qt.shift()) == null ? void 0 : _a2();
    } catch (h) {
      console.error("Failed to run the function queued for execution when the window received focus: " + h);
    }
  }
  function Ze() {
    a.focusLost();
  }
  function Qe() {
    document.visibilityState === "hidden" && a.focusLost();
  }
  nr(async () => {
    Zt.set(false), M.verbose = r() === "true", M.info("Dom ready"), await Xe(), await u.initClipboard();
  }), _n(() => {
    window.removeEventListener("resize", Se), window.removeEventListener("keydown", L, false), window.removeEventListener("keyup", L, false), window.removeEventListener("focus", Pe), window.removeEventListener("blur", Ze), document.removeEventListener("visibilitychange", Qe), document.removeEventListener("fullscreenchange", w), be == null ? void 0 : be.disconnect(), clearTimeout(ne), Zt.set(true);
  });
  var Te = Xn(), pe = Ut(Te);
  let ft;
  var ve = Ut(pe), G = Ut(ve);
  return G.__mousemove = Ge, G.__mousedown = [jn, Fe], G.__mouseup = [Gn, Fe], G.__contextmenu = [Yn], Ht(G, (h) => p = h, () => p), Bt(ve), Bt(pe), Ht(pe, (h) => m = h, () => m), Bt(Te), Ht(Te, (h) => d = h, () => d), tn(() => {
    ft = gn(pe, 1, `screen-wrapper scale-${i() ?? ""}`, "svelte-1103xra", ft, {
      hidden: !N(f),
      "capturing-inputs": b
    }), vi(pe, "style", N(c)), vi(ve, "style", N(o));
  }), pt("mouseleave", G, (h) => {
    Ye(h);
  }), pt("mouseenter", G, (h) => {
    ke(h);
  }), pt("wheel", G, ct), pt("selectstart", G, (h) => {
    h.preventDefault();
  }), tr(t, Te), Qi({
    get scale() {
      return i();
    },
    set scale(h) {
      i(h), Be();
    },
    get verbose() {
      return r();
    },
    set verbose(h) {
      r(h), Be();
    },
    get flexcenter() {
      return n();
    },
    set flexcenter(h) {
      n(h), Be();
    },
    get module() {
      return s();
    },
    set module(h) {
      s(h), Be();
    },
    get dynamicresize() {
      return l();
    },
    set dynamicresize(h) {
      l(h), Be();
    }
  });
}
fn([
  "mousemove",
  "mousedown",
  "mouseup",
  "contextmenu"
]);
customElements.define("iron-remote-desktop", kn(
  cr,
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
const Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" }));
export {
  In as Config,
  Bn as ConfigBuilder,
  Qn as default
};
