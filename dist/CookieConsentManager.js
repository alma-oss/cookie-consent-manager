/*!
* CookieConsent 3.1.0
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const Oa = "opt-in", Se = "opt-out", Qe = "show--consent", ea = "show--preferences", We = "disable--interaction", He = "data-category", P = "div", ae = "button", te = "aria-hidden", Be = "btn-group", K = "click", Ce = "data-role", aa = "consentModal", ta = "preferencesModal";
class _a {
  constructor() {
    this.t = { mode: Oa, revision: 0, autoShow: !0, lazyHtmlGeneration: !0, autoClearCookies: !0, manageScriptTags: !0, hideFromBots: !0, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", secure: !0, sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: !1, h: null, C: null, S: null, M: "", D: !0, T: !1, k: !1, A: !1, N: !1, H: [], V: !1, I: !0, L: [], j: !1, F: "", P: !1, O: [], R: [], B: [], $: [], G: !1, J: !1, U: !1, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
  }
}
const i = new _a(), La = (t, n) => t.indexOf(n), T = (t, n) => La(t, n) !== -1, Ne = (t) => Array.isArray(t), pe = (t) => typeof t == "string", Fe = (t) => !!t && typeof t == "object" && !Ne(t), ne = (t) => typeof t == "function", ie = (t) => Object.keys(t), na = (t) => Array.from(new Set(t)), qe = () => document.activeElement, we = (t) => t.preventDefault(), ia = (t, n) => t.querySelectorAll(n), De = (t) => t.dispatchEvent(new Event("change")), v = (t) => {
  const n = document.createElement(t);
  return t === ae && (n.type = t), n;
}, N = (t, n, e) => t.setAttribute(n, e), Re = (t, n, e) => {
  t.removeAttribute(e ? "data-" + n : n);
}, Oe = (t, n, e) => t.getAttribute(e ? "data-" + n : n), h = (t, n) => t.appendChild(n), B = (t, n) => t.classList.add(n), V = (t, n) => B(t, "cm__" + n), M = (t, n) => B(t, "pm__" + n), fe = (t, n) => t.classList.remove(n), le = (t) => {
  if (typeof t != "object") return t;
  if (t instanceof Date) return new Date(t.getTime());
  let n = Array.isArray(t) ? [] : {};
  for (let e in t) {
    let a = t[e];
    n[e] = le(a);
  }
  return n;
}, ut = () => {
  const t = {}, { O: n, X: e, Y: a } = i.o;
  for (const r of n) t[r] = _e(a[r], ie(e[r]));
  return t;
}, va = (t, n) => dispatchEvent(new CustomEvent(t, { detail: n })), x = (t, n, e, a) => {
  t.addEventListener(n, e), a && i.o.m.push({ pe: t, ge: n, me: e });
}, ya = () => {
  const t = i.t.cookie.expiresAfterDays;
  return ne(t) ? t(i.o.F) : t;
}, _e = (t, n) => {
  const e = t || [], a = n || [];
  return e.filter((r) => !T(a, r)).concat(a.filter((r) => !T(e, r)));
}, Ea = (t) => {
  i.o.R = na(t), i.o.F = (() => {
    let n = "custom";
    const { R: e, O: a, B: r } = i.o, s = e.length;
    return s === a.length ? n = "all" : s === r.length && (n = "necessary"), n;
  })();
}, Ha = (t, n, e, a) => {
  const r = "accept-", { show: s, showPreferences: k, hide: o, hidePreferences: c, acceptCategory: d } = n, g = t || document, p = (f) => ia(g, `[data-cc="${f}"]`), m = (f, z) => {
    we(f), d(z), c(), o();
  }, j = p("show-preferencesModal"), l = p("show-consentModal"), u = p(r + "all"), b = p(r + "necessary"), w = p(r + "custom"), C = i.t.lazyHtmlGeneration;
  for (const f of j) N(f, "aria-haspopup", "dialog"), x(f, K, (z) => {
    we(z), k();
  }), C && (x(f, "mouseenter", (z) => {
    we(z), i.o.N || e(n, a);
  }, !0), x(f, "focus", () => {
    i.o.N || e(n, a);
  }));
  for (let f of l) N(f, "aria-haspopup", "dialog"), x(f, K, (z) => {
    we(z), s(!0);
  }, !0);
  for (let f of u) x(f, K, (z) => {
    m(z, "all");
  }, !0);
  for (let f of w) x(f, K, (z) => {
    m(z);
  }, !0);
  for (let f of b) x(f, K, (z) => {
    m(z, []);
  }, !0);
}, oe = (t, n) => {
  t && (n && (t.tabIndex = -1), t.focus(), n && t.removeAttribute("tabindex"));
}, Fa = (t, n) => {
  const e = (a) => {
    a.target.removeEventListener("transitionend", e), a.propertyName === "opacity" && getComputedStyle(t).opacity === "1" && oe(((r) => r === 1 ? i.ne.be : i.ne.ve)(n));
  };
  x(t, "transitionend", e);
};
let ja;
const qa = (t) => {
  clearTimeout(ja), t ? B(i.ne.ye, We) : ja = setTimeout(() => {
    fe(i.ne.ye, We);
  }, 500);
}, dt = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "], $e = (t = 0, n = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${n}"><path d="${dt[t]}"/></svg>`, Ka = (t) => {
  const n = i.ne, e = i.o;
  ((a) => {
    const r = a === n.he, s = e.i.disablePageInteraction ? n.ye : r ? n.Ce : n.ye;
    x(s, "keydown", (k) => {
      if (k.key !== "Tab" || !(r ? e.k && !e.A : e.A)) return;
      const o = qe(), c = r ? e.q : e.K;
      c.length !== 0 && (k.shiftKey ? o !== c[0] && a.contains(o) || (we(k), oe(c[1])) : o !== c[1] && a.contains(o) || (we(k), oe(c[0])));
    }, !0);
  })(t);
}, mt = ["[href]", ae, "input", "details", "[tabindex]"].map((t) => t + ':not([tabindex="-1"])').join(","), Ra = (t) => {
  const { o: n, ne: e } = i, a = (r, s) => {
    const k = ia(r, mt);
    s[0] = k[0], s[1] = k[k.length - 1];
  };
  t === 1 && n.T && a(e.he, n.q), t === 2 && n.N && a(e.we, n.K);
}, se = (t, n, e) => {
  const { de: a, le: r, ie: s, _e: k, ue: o, fe: c } = i.ce, d = i.re;
  if (n) {
    const p = { modalName: n };
    return t === d.fe ? ne(c) && c(p) : t === d._e ? ne(k) && k(p) : (p.modal = e, ne(o) && o(p)), va(t, p);
  }
  const g = { cookie: i.o.p };
  t === d.ie ? ne(s) && s(le(g)) : t === d.le ? ne(r) && r(le(g)) : (g.changedCategories = i.o.L, g.changedServices = i.o.ee, ne(a) && a(le(g))), va(t, le(g));
}, Ie = (t, n) => {
  try {
    return t();
  } catch (e) {
    return !n && console.warn("CookieConsent:", e), !1;
  }
}, Ge = (t) => {
  const { Y: n, ee: e, O: a, X: r, oe: s, p: k, L: o } = i.o;
  for (const p of a) {
    const m = e[p] || n[p] || [];
    for (const j of m) {
      const l = r[p][j];
      if (!l) continue;
      const { onAccept: u, onReject: b } = l;
      !l.Se && T(n[p], j) ? (l.Se = !0, ne(u) && u()) : l.Se && !T(n[p], j) && (l.Se = !1, ne(b) && b());
    }
  }
  if (!i.t.manageScriptTags) return;
  const c = s, d = t || k.categories || [], g = (p, m) => {
    if (m >= p.length) return;
    const j = s[m];
    if (j.xe) return g(p, m + 1);
    const l = j.Me, u = j.De, b = j.Te, w = T(d, u), C = !!b && T(n[u], b);
    if (!b && !j.ke && w || !b && j.ke && !w && T(o, u) || b && !j.ke && C || b && j.ke && !C && T(e[u] || [], b)) {
      j.xe = !0;
      const f = Oe(l, "type", !0);
      Re(l, "type", !!f), Re(l, He);
      let z = Oe(l, "src", !0);
      z && Re(l, "src", !0);
      const A = v("script");
      A.textContent = l.innerHTML;
      for (const { nodeName: y } of l.attributes) N(A, y, l[y] || Oe(l, y));
      f && (A.type = f), z ? A.src = z : z = l.src;
      const I = !!z && (!f || ["text/javascript", "module"].includes(f));
      if (I && (A.onload = A.onerror = () => {
        g(p, ++m);
      }), l.replaceWith(A), I) return;
    }
    g(p, ++m);
  };
  g(c, 0);
}, Le = "bottom", Ze = "left", Va = "center", oa = "right", Ve = "inline", Ua = "wide", Ya = "pm--", Ue = ["middle", "top", Le], ba = [Ze, Va, oa], kt = { box: { Ee: [Ua, Ve], Ae: Ue, Ne: ba, He: Le, Ve: oa }, cloud: { Ee: [Ve], Ae: Ue, Ne: ba, He: Le, Ve: Va }, bar: { Ee: [Ve], Ae: Ue.slice(1), Ne: [], He: Le, Ve: "" } }, ft = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [Ua], Ae: [], Ne: [Ze, oa], He: "", Ve: Ze } }, Wa = (t) => {
  const n = i.o.i.guiOptions, e = n && n.consentModal, a = n && n.preferencesModal;
  t === 0 && za(i.ne.he, kt, e, "cm--", "box", "cm"), t === 1 && za(i.ne.we, ft, a, Ya, "box", "pm");
}, za = (t, n, e, a, r, s) => {
  t.className = s;
  const k = e && e.layout, o = e && e.position, c = e && e.flipButtons, d = !e || e.equalWeightButtons !== !1, g = k && k.split(" ") || [], p = g[0], m = g[1], j = p in n ? p : r, l = n[j], u = T(l.Ee, m) && m, b = o && o.split(" ") || [], w = b[0], C = a === Ya ? b[0] : b[1], f = T(l.Ae, w) ? w : l.He, z = T(l.Ne, C) ? C : l.Ve, A = (y) => {
    y && B(t, a + y);
  };
  A(j), A(u), A(f), A(z), c && A("flip");
  const I = s + "__btn--secondary";
  if (s === "cm") {
    const { Ie: y, Le: $ } = i.ne;
    y && (d ? fe(y, I) : B(y, I)), $ && (d ? fe($, I) : B($, I));
  } else {
    const { je: y } = i.ne;
    y && (d ? fe(y, I) : B(y, I));
  }
}, Ae = (t, n) => {
  const e = i.o, a = i.ne, { hide: r, hidePreferences: s, acceptCategory: k } = t, o = (z) => {
    k(z), s(), r();
  }, c = e.u && e.u.preferencesModal;
  if (!c) return;
  const d = c.title, g = c.closeIconLabel, p = c.acceptAllBtn, m = c.acceptNecessaryBtn, j = c.savePreferencesBtn, l = c.sections || [], u = p || m || j;
  if (a.Fe) a.Pe = v(P), M(a.Pe, "body");
  else {
    a.Fe = v(P), B(a.Fe, "pm-wrapper");
    const z = v("div");
    B(z, "pm-overlay"), h(a.Fe, z), x(z, K, s), a.we = v(P), B(a.we, "pm"), N(a.we, "role", "dialog"), N(a.we, te, !0), N(a.we, "aria-modal", !0), N(a.we, "aria-labelledby", "pm__title"), x(a.ye, "keydown", (A) => {
      A.keyCode === 27 && s();
    }, !0), a.Oe = v(P), M(a.Oe, "header"), a.Re = v("h2"), M(a.Re, "title"), a.Re.id = "pm__title", a.Be = v(ae), M(a.Be, "close-btn"), N(a.Be, "aria-label", c.closeIconLabel || ""), x(a.Be, K, s), a.$e = v("span"), a.$e.innerHTML = $e(), h(a.Be, a.$e), a.Ge = v(P), M(a.Ge, "body"), a.Je = v(P), M(a.Je, "footer");
    var b = v(P);
    B(b, "btns");
    var w = v(P), C = v(P);
    M(w, Be), M(C, Be), h(a.Je, w), h(a.Je, C), h(a.Oe, a.Re), h(a.Oe, a.Be), a.ve = v(P), N(a.ve, "tabIndex", -1), h(a.we, a.ve), h(a.we, a.Oe), h(a.we, a.Ge), u && h(a.we, a.Je), h(a.Fe, a.we);
  }
  let f;
  d && (a.Re.innerHTML = d, g && N(a.Be, "aria-label", g)), l.forEach((z, A) => {
    const I = z.title, y = z.description, $ = z.linkedCategory, ge = $ && e.P[$], S = z.cookieTable, Y = S && S.body, Q = S && S.caption, R = Y && Y.length > 0, H = !!ge, W = H && e.X[$], ue = Fe(W) && ie(W) || [], F = H && (!!y || !!R || ie(W).length > 0);
    var ee = v(P);
    if (M(ee, "section"), F || y) {
      var X = v(P);
      M(X, "section-desc-wrapper");
    }
    let de = ue.length;
    if (F && de > 0) {
      const q = v(P);
      M(q, "section-services");
      for (const J of ue) {
        const D = W[J], G = D && D.label || J, he = v(P), ve = v(P), Me = v(P), je = v(P);
        M(he, "service"), M(je, "service-title"), M(ve, "service-header"), M(Me, "service-icon");
        const ce = wa(G, J, ge, !0, $);
        je.innerHTML = G, h(ve, Me), h(ve, je), h(he, ve), h(he, ce), h(q, he);
      }
      h(X, q);
    }
    if (I) {
      var me = v(P), Z = v(H ? ae : P);
      if (M(me, "section-title-wrapper"), M(Z, "section-title"), Z.innerHTML = I, h(me, Z), H) {
        const q = v("span");
        q.innerHTML = $e(2, 3.5), M(q, "section-arrow"), h(me, q), ee.className += "--toggle";
        const J = wa(I, $, ge);
        let D = c.serviceCounterLabel;
        if (de > 0 && pe(D)) {
          let G = v("span");
          M(G, "badge"), M(G, "service-counter"), N(G, te, !0), N(G, "data-servicecounter", de), D && (D = D.split("|"), D = D.length > 1 && de > 1 ? D[1] : D[0], N(G, "data-counterlabel", D)), G.innerHTML = de + (D ? " " + D : ""), h(Z, G);
        }
        if (F) {
          M(ee, "section--expandable");
          var fa = $ + "-desc";
          N(Z, "aria-expanded", !1), N(Z, "aria-controls", fa);
        }
        h(me, J);
      } else N(Z, "role", "heading"), N(Z, "aria-level", "3");
      h(ee, me);
    }
    if (y) {
      var Ke = v("p");
      M(Ke, "section-desc"), Ke.innerHTML = y, h(X, Ke);
    }
    if (F && (N(X, te, "true"), X.id = fa, ((q, J, D) => {
      x(Z, K, () => {
        J.classList.contains("is-expanded") ? (fe(J, "is-expanded"), N(D, "aria-expanded", "false"), N(q, te, "true")) : (B(J, "is-expanded"), N(D, "aria-expanded", "true"), N(q, te, "false"));
      });
    })(X, ee, Z), R)) {
      const q = v("table"), J = v("thead"), D = v("tbody");
      if (Q) {
        const ce = v("caption");
        M(ce, "table-caption"), ce.innerHTML = Q, q.appendChild(ce);
      }
      M(q, "section-table"), M(J, "table-head"), M(D, "table-body");
      const G = S.headers, he = ie(G), ve = a.Ue.createDocumentFragment(), Me = v("tr");
      for (const ce of he) {
        const be = G[ce], ke = v("th");
        ke.id = "cc__row-" + be + A, N(ke, "scope", "col"), M(ke, "table-th"), ke.innerHTML = be, h(ve, ke);
      }
      h(Me, ve), h(J, Me);
      const je = a.Ue.createDocumentFragment();
      for (const ce of Y) {
        const be = v("tr");
        M(be, "table-tr");
        for (const ke of he) {
          const ga = G[ke], pt = ce[ke], Pe = v("td"), ha = v(P);
          M(Pe, "table-td"), N(Pe, "data-column", ga), N(Pe, "headers", "cc__row-" + ga + A), ha.insertAdjacentHTML("beforeend", pt), h(Pe, ha), h(be, Pe);
        }
        h(je, be);
      }
      h(D, je), h(q, J), h(q, D), h(X, q);
    }
    (F || y) && h(ee, X);
    const lt = a.Pe || a.Ge;
    H ? (f || (f = v(P), M(f, "section-toggles")), f.appendChild(ee)) : f = null, h(lt, f || ee);
  }), p && (a.ze || (a.ze = v(ae), M(a.ze, "btn"), N(a.ze, Ce, "all"), h(w, a.ze), x(a.ze, K, () => o("all"))), a.ze.innerHTML = p), m && (a.je || (a.je = v(ae), M(a.je, "btn"), N(a.je, Ce, "necessary"), h(w, a.je), x(a.je, K, () => o([]))), a.je.innerHTML = m), j && (a.qe || (a.qe = v(ae), M(a.qe, "btn"), M(a.qe, "btn--secondary"), N(a.qe, Ce, "save"), h(C, a.qe), x(a.qe, K, () => o())), a.qe.innerHTML = j), a.Pe && (a.we.replaceChild(a.Pe, a.Ge), a.Ge = a.Pe), Wa(1), e.N || (e.N = !0, se(i.re.ue, ta, a.we), n(t), h(a.Ce, a.Fe), Ka(a.we), setTimeout(() => B(a.Fe, "cc--anim"), 100)), Ra(2);
};
function wa(t, n, e, a, r) {
  const s = i.o, k = i.ne, o = v("label"), c = v("input"), d = v("span"), g = v("span"), p = v("span"), m = v("span"), j = v("span");
  if (m.innerHTML = $e(1, 3), j.innerHTML = $e(0, 3), c.type = "checkbox", B(o, "section__toggle-wrapper"), B(c, "section__toggle"), B(m, "toggle__icon-on"), B(j, "toggle__icon-off"), B(d, "toggle__icon"), B(g, "toggle__icon-circle"), B(p, "toggle__label"), N(d, te, "true"), a ? (B(o, "toggle-service"), N(c, He, r), k.se[r][n] = c) : k.ae[n] = c, a ? ((l) => {
    x(c, "change", () => {
      const u = k.se[l], b = k.ae[l];
      s.Z[l] = [];
      for (let w in u) {
        const C = u[w];
        C.checked && s.Z[l].push(C.value);
      }
      b.checked = s.Z[l].length > 0;
    });
  })(r) : ((l) => {
    x(c, K, () => {
      const u = k.se[l], b = c.checked;
      s.Z[l] = [];
      for (let w in u) u[w].checked = b, b && s.Z[l].push(w);
    });
  })(n), c.value = n, p.textContent = t.replace(/<.*>.*<\/.*>/gm, ""), h(g, j), h(g, m), h(d, g), s.D) (e.readOnly || e.enabled) && (c.checked = !0);
  else if (a) {
    const l = s.Y[r];
    c.checked = e.readOnly || T(l, n);
  } else T(s.R, n) && (c.checked = !0);
  return e.readOnly && (c.disabled = !0), h(o, c), h(o, d), h(o, p), o;
}
const Ye = () => {
  const t = v("span");
  return i.ne.Ke || (i.ne.Ke = t), t;
}, sa = (t, n) => {
  const e = i.o, a = i.ne, { hide: r, showPreferences: s, acceptCategory: k } = t, o = e.u && e.u.consentModal;
  if (!o) return;
  const c = o.acceptAllBtn, d = o.acceptNecessaryBtn, g = o.showPreferencesBtn, p = o.closeIconLabel, m = o.footer, j = o.label, l = o.title, u = (w) => {
    r(), k(w);
  };
  if (!a.Qe) {
    a.Qe = v(P), a.he = v(P), a.We = v(P), a.Xe = v(P), a.Ye = v(P), B(a.Qe, "cm-wrapper"), B(a.he, "cm"), V(a.We, "body"), V(a.Xe, "texts"), V(a.Ye, "btns"), N(a.he, "role", "dialog"), N(a.he, "aria-modal", "true"), N(a.he, te, "false"), N(a.he, "aria-describedby", "cm__desc"), j ? N(a.he, "aria-label", j) : l && N(a.he, "aria-labelledby", "cm__title");
    const w = "box", C = e.i.guiOptions, f = C && C.consentModal, z = (f && f.layout || w).split(" ")[0] === w;
    l && p && z && (a.Le || (a.Le = v(ae), a.Le.innerHTML = $e(), V(a.Le, "btn"), V(a.Le, "btn--close"), x(a.Le, K, () => {
      u([]);
    }), h(a.We, a.Le)), N(a.Le, "aria-label", p)), h(a.We, a.Xe), (c || d || g) && h(a.We, a.Ye), a.be = v(P), N(a.be, "tabIndex", -1), h(a.he, a.be), h(a.he, a.We), h(a.Qe, a.he);
  }
  l && (a.Ze || (a.Ze = v("h2"), a.Ze.className = a.Ze.id = "cm__title", h(a.Xe, a.Ze)), a.Ze.innerHTML = l);
  let b = o.description;
  if (b && (e.V && (b = b.replace("{{revisionMessage}}", e.I ? "" : o.revisionMessage || "")), a.et || (a.et = v("p"), a.et.className = a.et.id = "cm__desc", h(a.Xe, a.et)), a.et.innerHTML = b), c && (a.tt || (a.tt = v(ae), h(a.tt, Ye()), V(a.tt, "btn"), N(a.tt, Ce, "all"), x(a.tt, K, () => {
    u("all");
  })), a.tt.firstElementChild.innerHTML = c), d && (a.Ie || (a.Ie = v(ae), h(a.Ie, Ye()), V(a.Ie, "btn"), N(a.Ie, Ce, "necessary"), x(a.Ie, K, () => {
    u([]);
  })), a.Ie.firstElementChild.innerHTML = d), g && (a.ot || (a.ot = v(ae), h(a.ot, Ye()), V(a.ot, "btn"), V(a.ot, "btn--secondary"), N(a.ot, Ce, "show"), x(a.ot, "mouseenter", () => {
    e.N || Ae(t, n);
  }), x(a.ot, K, s)), a.ot.firstElementChild.innerHTML = g), a.nt || (a.nt = v(P), V(a.nt, Be), c && h(a.nt, a.tt), d && h(a.nt, a.Ie), (c || d) && h(a.We, a.nt), h(a.Ye, a.nt)), a.ot && !a.st && (a.st = v(P), a.Ie && a.tt ? (V(a.st, Be), h(a.st, a.ot), h(a.Ye, a.st)) : (h(a.nt, a.ot), V(a.nt, Be + "--uneven"))), m) {
    if (!a.ct) {
      let w = v(P), C = v(P);
      a.ct = v(P), V(w, "footer"), V(C, "links"), V(a.ct, "link-group"), h(C, a.ct), h(w, C), h(a.he, w);
    }
    a.ct.innerHTML = m;
  }
  Wa(0), e.T || (e.T = !0, se(i.re.ue, aa, a.he), n(t), h(a.Ce, a.Qe), Ka(a.he), setTimeout(() => B(a.Qe, "cc--anim"), 100)), Ra(1), Ha(a.We, t, Ae, n);
}, ra = (t) => {
  if (!pe(t)) return null;
  if (t in i.o._) return t;
  let n = t.slice(0, 2);
  return n in i.o._ ? n : null;
}, ca = () => i.o.l || i.o.i.language.default, la = (t) => {
  t && (i.o.l = t);
}, Ga = async (t) => {
  const n = i.o;
  let e = ra(t) ? t : ca(), a = n._[e];
  if (pe(a) ? a = await (async (r) => {
    try {
      return await (await fetch(r)).json();
    } catch (s) {
      return console.error(s), !1;
    }
  })(a) : ne(a) && (a = await a()), !a) throw `Could not load translation for the '${e}' language`;
  return n.u = a, la(e), !0;
}, Za = () => {
  let t = i.o.i.language.rtl, n = i.ne.Ce;
  t && n && (Ne(t) || (t = [t]), T(t, i.o.l) ? B(n, "cc--rtl") : fe(n, "cc--rtl"));
}, ye = () => {
  const t = i.ne;
  if (t.Ce) return;
  t.Ce = v(P), t.Ce.id = "cc-main", t.Ce.setAttribute("data-nosnippet", ""), Za();
  let n = i.o.i.root;
  n && pe(n) && (n = document.querySelector(n)), (n || t.Ue.body).appendChild(t.Ce);
}, Ja = (t) => Ie(() => localStorage.removeItem(t)), Ca = (t, n) => {
  if (n instanceof RegExp) return t.filter((e) => n.test(e));
  {
    const e = La(t, n);
    return e > -1 ? [t[e]] : [];
  }
}, Xa = (t) => {
  const { hostname: n, protocol: e } = location, { name: a, path: r, domain: s, sameSite: k, useLocalStorage: o, secure: c } = i.t.cookie, d = t ? (() => {
    const j = i.o.S, l = j ? /* @__PURE__ */ new Date() - j : 0;
    return 864e5 * ya() - l;
  })() : 864e5 * ya(), g = /* @__PURE__ */ new Date();
  g.setTime(g.getTime() + d), i.o.p.expirationTime = g.getTime();
  const p = JSON.stringify(i.o.p);
  let m = a + "=" + encodeURIComponent(p) + (d !== 0 ? "; expires=" + g.toUTCString() : "") + "; Path=" + r + "; SameSite=" + k;
  T(n, ".") && (m += "; Domain=" + s), c && e === "https:" && (m += "; Secure"), o ? ((j, l) => {
    Ie(() => localStorage.setItem(j, l));
  })(a, p) : document.cookie = m, i.o.p;
}, Je = (t, n, e) => {
  if (t.length === 0) return;
  const a = e || i.t.cookie.domain, r = n || i.t.cookie.path, s = a.slice(0, 4) === "www.", k = s && a.substring(4), o = (c, d) => {
    d && d.slice(0, 1) !== "." && (d = "." + d), document.cookie = c + "=; path=" + r + (d ? "; domain=" + d : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
  for (const c of t) o(c, e), e || o(c, a), s && o(c, k);
}, Qa = (t) => {
  const n = t || i.t.cookie.name, e = i.t.cookie.useLocalStorage;
  return ((r, s) => {
    let k;
    return k = Ie(() => JSON.parse(s ? r : decodeURIComponent(r)), !0) || {}, k;
  })(e ? (a = n, Ie(() => localStorage.getItem(a)) || "") : pa(n, !0), e);
  var a;
}, pa = (t, n) => {
  const e = document.cookie.match("(^|;)\\s*" + t + "\\s*=\\s*([^;]+)");
  return e ? n ? e.pop() : t : "";
}, et = (t) => {
  const n = document.cookie.split(/;\s*/), e = [];
  for (const a of n) {
    let r = a.split("=")[0];
    t ? Ie(() => {
      t.test(r) && e.push(r);
    }) : e.push(r);
  }
  return e;
}, ua = (t, n = []) => {
  ((e, a) => {
    const { O: r, R: s, B: k, N: o, Z: c, $: d, X: g } = i.o;
    let p = [];
    if (e) {
      Ne(e) ? p.push(...e) : pe(e) && (p = e === "all" ? r : [e]);
      for (const m of r) c[m] = T(p, m) ? ie(g[m]) : [];
    } else p = [...s, ...d], o && (p = (() => {
      const m = i.ne.ae;
      if (!m) return [];
      let j = [];
      for (let l in m) m[l].checked && j.push(l);
      return j;
    })());
    p = p.filter((m) => !T(r, m) || !T(a, m)), p.push(...k), Ea(p);
  })(t, n), (() => {
    const e = i.o, { Z: a, B: r, Y: s, X: k, O: o } = e, c = o;
    e.te = le(s);
    for (const d of c) {
      const g = k[d], p = ie(g), m = a[d] && a[d].length > 0, j = T(r, d);
      if (p.length !== 0) {
        if (s[d] = [], j) s[d].push(...p);
        else if (m) {
          const l = a[d];
          s[d].push(...l);
        } else s[d] = e.Z[d];
        s[d] = na(s[d]);
      }
    }
  })(), (() => {
    const e = i.o;
    e.L = i.t.mode === Se && e.D ? _e(e.$, e.R) : _e(e.R, e.p.categories);
    let a = e.L.length > 0, r = !1;
    for (const c of e.O) e.ee[c] = _e(e.Y[c], e.te[c]), e.ee[c].length > 0 && (r = !0);
    const s = i.ne.ae;
    for (const c in s) s[c].checked = T(e.R, c);
    for (const c of e.O) {
      const d = i.ne.se[c], g = e.Y[c];
      for (const p in d) d[p].checked = T(g, p);
    }
    e.C || (e.C = /* @__PURE__ */ new Date()), e.M || (e.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))), e.p = { categories: le(e.R), revision: i.t.revision, data: e.h, consentTimestamp: e.C.toISOString(), consentId: e.M, services: le(e.Y), languageCode: i.o.l }, e.S && (e.p.lastConsentTimestamp = e.S.toISOString());
    let k = !1;
    const o = a || r;
    (e.D || o) && (e.D && (e.D = !1, k = !0), e.S = e.S ? /* @__PURE__ */ new Date() : e.C, e.p.lastConsentTimestamp = e.S.toISOString(), Xa(), i.t.autoClearCookies && (k || o) && ((c) => {
      const d = i.o, g = et(), p = ((m) => {
        const j = i.o;
        return (m ? j.O : j.L).filter((l) => {
          const u = j.P[l];
          return !!u && !u.readOnly && !!u.autoClear;
        });
      })(c);
      for (const m in d.ee) for (const j of d.ee[m]) {
        const l = d.X[m][j].cookies;
        if (!T(d.Y[m], j) && l) for (const u of l) {
          const b = Ca(g, u.name);
          Je(b, u.path, u.domain);
        }
      }
      for (const m of p) {
        const j = d.P[m].autoClear, l = j && j.cookies || [], u = T(d.L, m), b = !T(d.R, m), w = u && b;
        if (c ? b : w) {
          j.reloadPage && w && (d.j = !0);
          for (const C of l) {
            const f = Ca(g, C.name);
            Je(f, C.path, C.domain);
          }
        }
      }
    })(k), Ge()), k && (se(i.re.ie), se(i.re.le), i.t.mode === Oa) || (o && se(i.re.de), e.j && (e.j = !1, location.reload()));
  })();
}, at = (t) => {
  const n = i.o.D ? [] : i.o.R;
  return T(n, t);
}, gt = (t, n) => {
  const { O: e, X: a } = i.o;
  if (!(t && n && pe(n) && T(e, n) && ie(a[n]).length !== 0)) return !1;
  ((r, s) => {
    const k = i.o, { X: o, Z: c, N: d } = k, g = i.ne.se[s] || {}, p = i.ne.ae[s] || {}, m = ie(o[s]);
    if (c[s] = [], pe(r)) {
      if (r === "all") {
        if (c[s].push(...m), d) for (let l in g) g[l].checked = !0, De(g[l]);
      } else if (T(m, r) && c[s].push(r), d) for (let l in g) g[l].checked = r === l, De(g[l]);
    } else if (Ne(r)) for (let l of m) {
      const u = T(r, l);
      u && c[s].push(l), d && (g[l].checked = u, De(g[l]));
    }
    const j = c[s].length === 0;
    k.R = j ? k.R.filter((l) => l !== s) : na([...k.R, s]), d && (p.checked = !j, De(p));
  })(t, n), ua();
}, tt = (t, n) => {
  const e = i.o.D ? [] : i.o.Y[n] || [];
  return T(e, t);
}, ht = (t) => pa(t, !0) !== "", nt = (t, n, e) => {
  let a = [];
  const r = (s) => {
    if (pe(s)) {
      let k = pa(s);
      k !== "" && a.push(k);
    } else a.push(...et(s));
  };
  if (Ne(t)) for (let s of t) r(s);
  else r(t);
  Je(a, n, e);
}, da = (t) => {
  const { ne: n, o: e } = i;
  if (!e.k) {
    if (!e.T) {
      if (!t) return;
      sa(xe, ye);
    }
    e.k = !0, e.J = qe(), e.v && qa(!0), Fa(n.he, 1), B(n.ye, Qe), N(n.he, te, "false"), setTimeout(() => {
      oe(i.ne.be);
    }, 100), se(i.re.fe, aa);
  }
}, it = () => {
  const { ne: t, o: n, re: e } = i;
  n.k && (n.k = !1, n.v && qa(), oe(t.Ke, !0), fe(t.ye, Qe), N(t.he, te, "true"), oe(n.J), n.J = null, se(e._e, aa));
}, ot = () => {
  const t = i.o;
  t.A || (t.N || Ae(xe, ye), t.A = !0, t.k ? t.U = qe() : t.J = qe(), Fa(i.ne.we, 2), B(i.ne.ye, ea), N(i.ne.we, te, "false"), setTimeout(() => {
    oe(i.ne.ve);
  }, 100), se(i.re.fe, ta));
}, st = () => {
  const t = i.o;
  t.A && (t.A = !1, (() => {
    const n = ma(), e = i.o.P, a = i.ne.ae, r = i.ne.se, s = (k) => T(i.o.$, k);
    for (const k in a) {
      const o = !!e[k].readOnly;
      a[k].checked = o || (n ? at(k) : s(k));
      for (const c in r[k]) r[k][c].checked = o || (n ? tt(c, k) : s(k));
    }
  })(), oe(i.ne.$e, !0), fe(i.ne.ye, ea), N(i.ne.we, te, "true"), t.k ? (oe(t.U), t.U = null) : (oe(t.J), t.J = null), se(i.re._e, ta));
};
var xe = { show: da, hide: it, showPreferences: ot, hidePreferences: st, acceptCategory: ua };
const vt = async (t, n) => {
  if (!ra(t)) return !1;
  const e = i.o;
  return !(t === ca() && n !== !0 || !await Ga(t) || (la(t), e.T && sa(xe, ye), e.N && Ae(xe, ye), Za(), 0));
}, yt = () => {
  const { F: t, Y: n } = i.o, { accepted: e, rejected: a } = (() => {
    const { D: r, R: s, O: k } = i.o;
    return { accepted: s, rejected: r ? [] : k.filter((o) => !T(s, o)) };
  })();
  return le({ acceptType: t, acceptedCategories: e, rejectedCategories: a, acceptedServices: n, rejectedServices: ut() });
}, jt = (t, n) => {
  let e = document.querySelector('script[src="' + t + '"]');
  return new Promise((a) => {
    if (e) return a(!0);
    if (e = v("script"), Fe(n)) for (const r in n) N(e, r, n[r]);
    e.onload = () => a(!0), e.onerror = () => {
      e.remove(), a(!1);
    }, e.src = t, h(document.head, e);
  });
}, bt = (t) => {
  let n, e = t.value, a = t.mode, r = !1;
  const s = i.o;
  if (a === "update") {
    s.h = n = rt("data");
    const k = typeof n == typeof e;
    if (k && typeof n == "object") {
      !n && (n = {});
      for (let o in e) n[o] !== e[o] && (n[o] = e[o], r = !0);
    } else !k && n || n === e || (n = e, r = !0);
  } else n = e, r = !0;
  return r && (s.h = n, s.p.data = n, Xa(!0)), r;
}, rt = (t, n) => {
  const e = Qa(n);
  return t ? e[t] : e;
}, zt = (t) => {
  const n = i.t, e = i.o.i;
  return t ? n[t] || e[t] : { ...n, ...e, cookie: { ...n.cookie } };
}, ma = () => !i.o.D, wt = async (t) => {
  const { o: n, t: e, re: a } = i, r = window;
  if (!r._ccRun) {
    if (r._ccRun = !0, ((o) => {
      const { ne: c, t: d, o: g } = i, p = d, m = g, { cookie: j } = p, l = i.ce, u = o.cookie, b = o.categories, w = ie(b) || [], C = navigator, f = document;
      c.Ue = f, c.ye = f.documentElement, j.domain = location.hostname, m.i = o, m.P = b, m.O = w, m._ = o.language.translations, m.v = !!o.disablePageInteraction, l.ie = o.onFirstConsent, l.le = o.onConsent, l.de = o.onChange, l._e = o.onModalHide, l.fe = o.onModalShow, l.ue = o.onModalReady;
      const { mode: z, autoShow: A, lazyHtmlGeneration: I, autoClearCookies: y, revision: $, manageScriptTags: ge, hideFromBots: S } = o;
      z === Se && (p.mode = z), typeof y == "boolean" && (p.autoClearCookies = y), typeof ge == "boolean" && (p.manageScriptTags = ge), typeof $ == "number" && $ >= 0 && (p.revision = $, m.V = !0), typeof A == "boolean" && (p.autoShow = A), typeof I == "boolean" && (p.lazyHtmlGeneration = I), S === !1 && (p.hideFromBots = !1), p.hideFromBots === !0 && C && (m.G = C.userAgent && /bot|crawl|spider|slurp|teoma/i.test(C.userAgent) || C.webdriver), Fe(u) && (p.cookie = { ...j, ...u }), p.autoClearCookies, m.V, p.manageScriptTags, ((Y) => {
        const { P: Q, X: R, Y: H, Z: W, B: ue } = i.o;
        for (let F of Y) {
          const ee = Q[F], X = ee.services || {}, de = Fe(X) && ie(X) || [];
          R[F] = {}, H[F] = [], W[F] = [], ee.readOnly && (ue.push(F), H[F] = de), i.ne.se[F] = {};
          for (let me of de) {
            const Z = X[me];
            Z.Se = !1, R[F][me] = Z;
          }
        }
      })(w), (() => {
        if (!i.t.manageScriptTags) return;
        const Y = i.o, Q = ia(document, "script[" + He + "]");
        for (const R of Q) {
          let H = Oe(R, He), W = R.dataset.service || "", ue = !1;
          if (H && H.charAt(0) === "!" && (H = H.slice(1), ue = !0), W.charAt(0) === "!" && (W = W.slice(1), ue = !0), T(Y.O, H) && (Y.oe.push({ Me: R, xe: !1, ke: ue, De: H, Te: W }), W)) {
            const F = Y.X[H];
            F[W] || (F[W] = { Se: !1 });
          }
        }
      })(), la((() => {
        const Y = i.o.i.language.autoDetect;
        if (Y) {
          const Q = { browser: navigator.language, document: document.documentElement.lang }, R = ra(Q[Y]);
          if (R) return R;
        }
        return ca();
      })());
    })(t), n.G) return;
    (() => {
      const o = i.o, c = i.t, d = Qa(), { categories: g, services: p, consentId: m, consentTimestamp: j, lastConsentTimestamp: l, data: u, revision: b } = d, w = Ne(g);
      o.p = d, o.M = m;
      const C = !!m && pe(m);
      o.C = j, o.C && (o.C = new Date(j)), o.S = l, o.S && (o.S = new Date(l)), o.h = u !== void 0 ? u : null, o.V && C && b !== c.revision && (o.I = !1), o.D = !(C && o.I && o.C && o.S && w), c.cookie.useLocalStorage && !o.D && (o.D = (/* @__PURE__ */ new Date()).getTime() > (d.expirationTime || 0), o.D && Ja(c.cookie.name)), o.D, (() => {
        const f = i.o;
        for (const z of f.O) {
          const A = f.P[z];
          if (A.readOnly || A.enabled) {
            f.$.push(z);
            const I = f.X[z] || {};
            for (let y in I) f.Z[z].push(y), f.i.mode === Se && f.Y[z].push(y);
          }
        }
      })(), o.D ? c.mode === Se && (o.R = [...o.$]) : (o.Y = { ...o.Y, ...p }, o.Z = { ...o.Y }, Ea([...o.B, ...g]));
    })();
    const k = ma();
    if (!await Ga()) return !1;
    if (Ha(null, s = xe, Ae, ye), i.o.D && sa(s, ye), i.t.lazyHtmlGeneration || Ae(s, ye), e.autoShow && !k && da(!0), k) return Ge(), se(a.le);
    e.mode === Se && Ge(n.$);
  }
  var s;
}, Ct = (t) => {
  const { Ce: n, ye: e } = i.ne, { name: a, path: r, domain: s, useLocalStorage: k } = i.t.cookie;
  t && (k ? Ja(a) : nt(a, r, s));
  for (const { pe: c, ge: d, me: g } of i.o.m) c.removeEventListener(d, g);
  n && n.remove(), e && e.classList.remove(We, ea, Qe);
  const o = new _a();
  for (const c in i) i[c] = o[c];
  window._ccRun = !1;
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  acceptCategory: ua,
  acceptService: gt,
  acceptedCategory: at,
  acceptedService: tt,
  eraseCookies: nt,
  getConfig: zt,
  getCookie: rt,
  getUserPreferences: yt,
  hide: it,
  hidePreferences: st,
  loadScript: jt,
  reset: Ct,
  run: wt,
  setCookieData: bt,
  setLanguage: vt,
  show: da,
  showPreferences: ot,
  validConsent: ma,
  validCookie: ht
}, Symbol.toStringTag, { value: "Module" })), Nt = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Mt = (t = 21) => {
  let n = "", e = crypto.getRandomValues(new Uint8Array(t |= 0));
  for (; t--; )
    n += Nt[e[t] & 63];
  return n;
};
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function ka(...t) {
  const n = {};
  return t.forEach((e) => {
    e.forEach((a) => {
      n[a] = a in n ? ++n[a] : 1;
    });
  }), n;
}
function Pt(...t) {
  return t.reduce(
    (n, e) => n.filter(Set.prototype.has, new Set(e))
  );
}
function Tt(...t) {
  const n = ka(...t);
  return Object.keys(n).filter((e) => n[e] > 1);
}
function St(...t) {
  const n = ka(...t);
  return Object.keys(n).filter((e) => n[e] < t.length);
}
function Bt(...t) {
  const n = ka(...t);
  return Object.keys(n).filter((e) => n[e] === 1);
}
function $t(t, n = !1) {
  const e = Object.getOwnPropertyNames(t);
  if (n)
    for (const a in t)
      !e.includes(a) && e.push(a);
  return e;
}
function Xe(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function Aa(t) {
  if (!Xe(t))
    return !1;
  const n = ["writable", "enumerable", "configurable"].some(
    (s) => s in t
  ), e = ["get", "set"].some((s) => typeof t[s] == "function"), a = ["get", "set"].every((s) => s in t);
  let r = "value" in t && n || e && (a || n);
  if (r) {
    const s = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    r = Object.keys(t).some((k) => !(k in s));
  }
  return r;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var ze = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: !1,
  onlyUniversalKeys: !1,
  skipCommonKeys: !1,
  skipUniversalKeys: !1,
  // Values
  invokeGetters: !1,
  skipSetters: !1,
  // Arrays
  appendArrays: !1,
  prependArrays: !1,
  dedupArrays: !1,
  sortArrays: !1,
  // Prototype
  hoistEnumerable: !1,
  hoistProto: !1,
  skipProto: !1,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function ct(t, ...n) {
  const e = arguments.length === 1 ? arguments[0] : {}, a = { ...ze, ...e }, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), k = typeof a.sortArrays == "function" ? a.sortArrays : void 0, o = /* @__PURE__ */ new WeakMap();
  let c = 0;
  function d(p) {
    return $t(p, a.hoistEnumerable);
  }
  function g(...p) {
    let m;
    p.length > 1 && (a.onlyCommonKeys ? m = Tt(
      ...p.map((u) => d(u))
    ) : a.onlyUniversalKeys ? m = Pt(...p.map((u) => d(u))) : a.skipCommonKeys ? m = Bt(
      ...p.map((u) => d(u))
    ) : a.skipUniversalKeys && (m = St(...p.map((u) => d(u))))), !m && a.onlyKeys.length && (m = a.onlyKeys), m && m !== a.onlyKeys && a.onlyKeys.length && (m = m.filter(
      (u) => a.onlyKeys.includes(u)
    ));
    const j = p.reduce((u, b) => {
      o.set(b, u);
      let w = m || d(b);
      a.skipKeys.length && (w = w.filter((C) => a.skipKeys.indexOf(C) === -1));
      for (let C = 0; C < w.length; C++) {
        const f = w[C], z = u[f], A = {
          configurable: !0,
          enumerable: !0
        };
        if (!(f in b))
          continue;
        let I = !1, y = b[f];
        const $ = Object.getOwnPropertyDescriptor(b, f);
        if ($ && typeof $.set == "function" && typeof $.get != "function") {
          a.skipSetters || Object.defineProperty(u, f, $);
          continue;
        }
        if (a.filter !== ze.filter) {
          const S = a.filter({
            depth: c,
            key: f,
            srcObj: b,
            srcVal: y,
            targetObj: u,
            targetVal: z
          });
          if (S !== void 0 && !S)
            continue;
        }
        if (a.beforeEach !== ze.beforeEach) {
          const S = a.beforeEach({
            depth: c,
            key: f,
            srcObj: b,
            srcVal: y,
            targetObj: u,
            targetVal: z
          });
          S !== void 0 && (I = !0, y = S);
        }
        if (typeof y == "object" && y !== null && o.has(b[f])) {
          const S = a.onCircular({
            depth: c,
            key: f,
            srcObj: b,
            srcVal: b[f],
            targetObj: u,
            targetVal: z
          });
          if (S === void 0) {
            y = o.get(b[f]), u[f] = y;
            continue;
          }
          I = !0, y = S;
        }
        if (Array.isArray(y)) {
          if (y = [...y], Array.isArray(z) && (a.appendArrays ? y = [...z, ...y] : a.prependArrays && (y = [...y, ...z])), a.dedupArrays)
            if (a.afterEach !== ze.afterEach)
              y = [...new Set(y)];
            else {
              const S = r.get(u);
              S && !S.includes(f) ? S.push(f) : r.set(u, [f]);
            }
          if (a.sortArrays)
            if (a.afterEach !== ze.afterEach)
              y = y.sort(k);
            else {
              const S = s.get(u);
              S && !S.includes(f) ? S.push(f) : s.set(u, [f]);
            }
        } else y instanceof Date ? y = new Date(y) : Xe(y) && (!I || !Aa(y)) && (c++, Xe(z) ? y = g(z, y) : y = g(y), c--);
        if (a.afterEach !== ze.afterEach) {
          const S = a.afterEach({
            depth: c,
            key: f,
            mergeVal: y,
            srcObj: b,
            targetObj: u
          });
          S !== void 0 && (I = !0, y = S);
        }
        if (I) {
          const S = Aa(y) ? y : {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperty(u, f, S);
          continue;
        }
        if ($) {
          const { configurable: S, enumerable: Y, get: Q, set: R, writable: H } = $;
          Object.assign(A, {
            configurable: S,
            enumerable: Y
          }), typeof Q == "function" && (a.invokeGetters ? A.value = y : A.get = Q), !a.skipSetters && typeof R == "function" && !Object.hasOwnProperty.call(A, "value") && (A.set = R), !A.get && !A.set && (A.writable = !!H);
        }
        !A.get && !A.set && !("value" in A) && (A.value = y, A.writable = $ && "writable" in $ ? $.writable : !0), Object.defineProperty(u, f, A);
      }
      return u;
    }, {});
    for (const [u, b] of r.entries())
      for (const w of b) {
        const C = Object.getOwnPropertyDescriptor(u, w), { configurable: f, enumerable: z, writable: A } = C;
        Object.defineProperty(u, w, {
          configurable: f,
          enumerable: z,
          value: [...new Set(u[w])],
          writable: A !== void 0 ? A : !0
        });
      }
    for (const [u, b] of s.entries())
      for (const w of b)
        u[w].sort(k);
    let l = j;
    if (!a.skipProto) {
      const u = p.reduce((b, w) => {
        const C = Object.getPrototypeOf(w);
        return C && C !== Object.prototype && b.push(C), b;
      }, []);
      if (u.length) {
        const b = g(...u);
        a.hoistProto ? l = g(b, j) : l = Object.create(
          b,
          Object.getOwnPropertyDescriptors(j)
        );
      }
    }
    return l;
  }
  return arguments.length === 1 ? function(...p) {
    return arguments.length === 1 ? ct({ ...a, ...p[0] }) : g(...p);
  } : g(...arguments);
}
function Na(t, n, e) {
  const a = It(e, n);
  Dt(t, a);
}
function It(t, n) {
  const e = n.data;
  return {
    data: {
      type: "localDataAcceptationDataEntries",
      attributes: {
        acceptation_id: e.uid,
        accept_type: `accept_${t.acceptType}`,
        accepted_categories: t.acceptedCategories,
        rejected_categories: t.rejectedCategories,
        revision: n.revision,
        source: e.serviceName,
        language: n.languageCode,
        days_of_acceptation: xt(n)
      }
    }
  };
}
function xt(t) {
  return Math.ceil((t.expirationTime - Date.now()) / 1e3 / 60 / 60 / 24);
}
async function Dt(t, n) {
  return (await fetch(t, {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json"
    },
    body: JSON.stringify(n)
  })).json();
}
const U = {
  NECESSARY: "necessary",
  AD: "ad",
  ANALYTICS: "analytics",
  FUNCTIONALITY: "functionality",
  PERSONALIZATION: "personalization"
}, Ee = {
  FORCE: "force",
  SOFT: "soft"
}, O = (t, n = "") => t.reduce((e, a, r) => r === 0 ? `${e}${a}` : r === t.length - 1 ? `${e} ${n} ${a}` : `${e}, ${a}`), re = (t, n, e) => t === 1 ? n : e, _ = (t, n) => t.map((e) => e === "Alma Career" ? n : e), L = (t, n) => {
  const e = n ?? t;
  return e !== "" ? `<p>${e}</p>` : "";
}, E = (t, n, e) => [
  Te(
    t,
    U.NECESSARY,
    n.necessary.title,
    n.necessary.description,
    e[U.NECESSARY]
  ),
  Te(
    t,
    U.AD,
    n.ad.title,
    n.ad.description,
    e[U.AD]
  ),
  Te(
    t,
    U.ANALYTICS,
    n.analytics.title,
    n.analytics.description,
    e[U.ANALYTICS]
  ),
  Te(
    t,
    U.FUNCTIONALITY,
    n.functionality.title,
    n.functionality.description,
    e[U.FUNCTIONALITY]
  ),
  Te(
    t,
    U.PERSONALIZATION,
    n.personalization.title,
    n.personalization.description,
    e[U.PERSONALIZATION]
  )
], Te = (t, n, e, a, r) => ({
  title: e,
  description: a,
  linkedCategory: n,
  ...typeof r < "u" && {
    cookieTable: {
      headers: t,
      body: r
    }
  }
}), Ot = {
  and: "i",
  company: "kompaniji",
  companies: "kompanijama",
  legalName: "Alma Career i drugim kompanijama iz njene poslovne grupe"
}, _t = (t, n) => {
  const e = { ...Ot, ...t }, a = { name: "Naziv", description: "Opis", expiration: "Isticanje" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Kolačići čine našu stranicu još boljom",
      description: `
      ${L(
        "Bolje razumijevanje onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.",
        e.descriptionIntro
      )}
      <p>
        Klikom na dugme „Prihvati sve“, dajete
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        svoju saglasnost za korištenje kolačića za personalizaciju, analitiku i ciljani marketing.
        Možete prilagoditi upotrebu kolačića u svojim <strong><a href="" data-cc="show-preferencesModal">prilagođenim postavkama</a></strong>.
      </p>`,
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvatiti neophodno"
    },
    preferencesModal: {
      title: "Prilagođenim postavkama kolačića",
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvatiti neophodno",
      savePreferencesBtn: "Sačuvaj postavke",
      sections: [
        {
          description: `Ako želite da izvučete maksimum iz naše web stranice, najbolje je dozvoliti sve vrste kolačića.
            ${e.preferencesModalMoreInfo ?? 'Više informacija o tome šta su kolačići i kako radimo s njima možete pronaći na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Politika privatnosti</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Tehnički potrebni kolačići",
              description: "Ovi kolačići su neophodni za pravilno funkcioniranje naše web stranice i stoga se ne mogu onemogućiti. Bez njih ne bi bilo moguće npr. za prikaz bilo kojeg sadržaja ili za prijavu na našu web stranicu."
            },
            analytics: {
              title: "Analitički kolačići",
              description: "To nam pomaže da pratimo koliko ljudi posjeti našu web stranicu i kako je koriste. Ove informacije nam zatim omogućavaju da kontinuirano poboljšavamo web stranicu i druge usluge."
            },
            functionality: {
              title: "Funkcionalni kolačići",
              description: "Naša web stranica je još efikasnija i radi bolje zahvaljujući ovim kolačićima. Na primjer, omogućavaju nam korištenje usluge chata i brzo i jednostavno odgovaranje na vaša pitanja."
            },
            ad: {
              title: "Marketinški kolačići",
              description: "Ovi kolačići nam pomažu da izmjerimo učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketinški kolačići nam omogućavaju da vam donesemo vijesti koje bi vas mogle zanimati na Internetu."
            },
            personalization: {
              title: "Kolačići za personalizaciju",
              description: "Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem kolačića za personalizaciju povećavate svoje šanse da pronađete sadržaj koji želite."
            }
          },
          n
        )
      ]
    }
  };
}, Lt = {
  and: "a",
  company: "společnosti",
  companies: "společnostem",
  legalName: "Alma Career a společnostem z její obchodní skupiny"
}, Et = (t, n) => {
  const e = { ...Lt, ...t }, a = { name: "Název", description: "Popis", expiration: "Platnost" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Díky Cookies budou naše stránky ještě lepší",
      description: `
      ${L(
        "Když lépe pochopíme, co vás zajímá, budeme vám zobrazovat přesnější obsah na míru.",
        e.descriptionIntro
      )}
      <p>
        Kliknutím na tlačítko „Přijmout všechny“ dáte
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        souhlas s využíváním souborů Cookies na účely personalizace, analýzy a cíleného marketingu.
        Další informace o Cookies a úpravu jejich používání naleznete ve <strong><a href="" data-cc="show-preferencesModal">vlastním nastavení</a></strong>.
      </p>`,
      acceptAllBtn: "Přijmout všechny",
      acceptNecessaryBtn: "Přijmout nezbytné"
    },
    preferencesModal: {
      title: "Přizpůsobit nastavení Cookies",
      acceptAllBtn: "Přijmout všechny",
      acceptNecessaryBtn: "Přijmout nezbytné",
      savePreferencesBtn: "Uložit nastavení",
      sections: [
        {
          description: `Abyste z našich stránek získali maximum, je nejlepší povolit všechny typy cookies.
            ${e.preferencesModalMoreInfo ?? 'Další informace o tom, co jsou cookies a jak s nimi pracujeme, najdete v <a href="https://www.almacareer.com/gdpr" target="_blank">Zásadách cookies</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technicky nezbytné Cookies",
              description: "Tyto Cookies jsou pro správné fungování našeho webu nezbytné, proto není možné je vypnout. Bez nich by na našich stránkách např. nešel zobrazit žádný obsah nebo by nefungovalo přihlášení."
            },
            analytics: {
              title: "Analytické Cookies",
              description: "Pomocí nich sledujeme, kolik lidí náš web navštěvuje a jak ho používají. Díky tomu můžeme stránky a další služby neustále vylepšovat."
            },
            functionality: {
              title: "Funkční Cookies",
              description: "Díky těmto Cookies jsou naše stránky ještě výkonnější a fungují lépe. Například nám umožňují používat chat, abychom na vaše otázky mohli odpovídat rychle a jednoduše."
            },
            ad: {
              title: "Marketingové Cookies",
              description: "S těmito Cookies můžeme měřit, jak efektivní je naše reklama a cílené nabídky našich služeb. Marketingové Cookies nám umožní vás na Internetu upozornit na novinky, které vás můžou zajímat."
            },
            personalization: {
              title: "Personalizační Cookies",
              description: "Naše služby fungují lépe, když je můžeme přizpůsobit na míru konkrétnímu uživateli. Povolením Personalizačních cookies zvýšíte šanci, že najdete právě takový obsah, jaký hledáte."
            }
          },
          n
        )
      ]
    }
  };
}, Ma = {
  and: "und",
  legalName: "Alma Career und seine Gruppenunternehmen"
}, Ht = (t, n) => {
  const e = { ...Ma, ...t }, a = {
    name: "Unternehmensbezeichnung",
    description: "Beschreibung",
    expiration: "Verfallsdatum"
  };
  return {
    consentModal: {
      title: e.consentTitle ?? "Diese Website verwendet Cookies",
      description: `
      ${L(
        "Wenn wir genau wissen, wofür Sie sich interessieren, können wir Ihnen maßgeschneiderte Inhalte anbieten.",
        e.descriptionIntro
      )}
      <p>
        Indem Sie auf „Alles akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Gerät durch
        ${O(_(e.companyNames, e.legalName), Ma.and)}
        zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
        Sie können die Verwendung von Cookies in Ihren <strong><a href="" data-cc="show-preferencesModal">eigenen Einstellungen</a></strong> anpassen.
      </p>`,
      acceptAllBtn: "Alles akzeptieren",
      acceptNecessaryBtn: "Das Notwendigste akzeptieren"
    },
    preferencesModal: {
      title: "Benutzerdefinierte Cookie-Einstellungen",
      acceptAllBtn: "Alles akzeptieren",
      acceptNecessaryBtn: "Das Notwendigste akzeptieren",
      savePreferencesBtn: "Einstellungen speichern",
      sections: [
        {
          description: `Um unsere Website optimal nutzen zu können, sollten Sie alle Arten von Cookies aktivieren.
            ${e.preferencesModalMoreInfo ?? 'Weitere Informationen darüber, was Cookies sind und wie wir mit ihnen arbeiten, finden Sie in unsere <a href="https://www.almacareer.com/gdpr" target="_blank">Datenschutzrichtlinien</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technisch notwendige Cookies",
              description: "Diese Cookies sind für das reibungslose Funktionieren unserer Website unerlässlich und können daher nicht deaktiviert werden. Ohne sie könnten z. B. keine Inhalte auf unserer Seite angezeigt werden oder das Login würde nicht funktionieren."
            },
            analytics: {
              title: "Analytische Cookies",
              description: "Wir verwenden diese Cookies, um zu verfolgen, wie viele Personen unsere Website besuchen und wie sie sie nutzen. Auf diese Weise können wir die Website und andere Dienste kontinuierlich verbessern."
            },
            functionality: {
              title: "Funktionale Cookies",
              description: "Diese Cookies machen unsere Website leistungsfähiger und funktionieren besser. Sie ermöglichen uns zum Beispiel die Nutzung des Chats, damit wir Ihre Fragen schnell und einfach beantworten können."
            },
            ad: {
              title: "Marketing Cookies",
              description: "Mit diesen Cookies können wir messen, wie effektiv unsere Werbung und gezielte Angebote unserer Dienste sind. Marketing Cookies ermöglichen es uns, Sie online auf Nachrichten hinzuweisen, die für Sie von Interesse sein könnten."
            },
            personalization: {
              title: "Personalisierung Cookies",
              description: "Unsere Dienste funktionieren besser, wenn wir sie auf den einzelnen Nutzer zuschneiden können. Durch die Aktivierung von Personalisierungs-Cookies erhöhen Sie die Wahrscheinlichkeit, dass Sie genau die Inhalte finden, nach denen Sie suchen."
            }
          },
          n
        )
      ]
    }
  };
}, Pa = {
  and: "and",
  legalName: "Alma Career and other companies from its business group"
}, Ft = (t, n) => {
  const e = { ...Pa, ...t }, a = { name: "Name", description: "Description", expiration: "Expiration" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Cookies make our site even better",
      description: `
      ${L(
        "By better understanding what you're interested in, we'll show you more relevant content.",
        e.descriptionIntro
      )}
      <p>
        By clicking the "Accept all" button, you give
        ${O(_(e.companyNames, e.legalName), Pa.and)}
        your consent to use cookies for personalisation, analytics and targeted marketing.
        You can customize use of cookies in your <strong><a href="" data-cc="show-preferencesModal">custom settings</a></strong>.
      </p>`,
      acceptAllBtn: "Accept all",
      acceptNecessaryBtn: "Accept necessary"
    },
    preferencesModal: {
      title: "Custom Cookie settings",
      acceptAllBtn: "Accept all",
      acceptNecessaryBtn: "Accept necessary",
      savePreferencesBtn: "Save settings",
      sections: [
        {
          description: `If you want to get the most out of our website it is best to allow all types of cookies.
            ${e.preferencesModalMoreInfo ?? 'For more information about what cookies are and how we work with them, see our <a href="https://www.almacareer.com/gdpr" target="_blank">Cookie Policy</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technically necessary cookies",
              description: "These cookies are essential for the proper functioning of our website, and so they cannot be disabled. Without them, it would not be possible e.g. to display any content or to log in on our website."
            },
            analytics: {
              title: "Analytical cookies",
              description: "These help us monitor how many people visit our website and how they use it. This information then enables us to continuously improve the website and other services."
            },
            functionality: {
              title: "Functional cookies",
              description: "Our website is even more efficient and works better thanks to these cookies. For example, they enable us to use the chat service and answer your questions quickly and easily."
            },
            ad: {
              title: "Marketing cookies",
              description: "These cookies help us to measure the effectiveness of our advertising and targeted service offers. Marketing cookies enable us to bring you news that may be of interest to you on the Internet."
            },
            personalization: {
              title: "Personalisation cookies",
              description: "Our services work better if we can tailor them to specific users. By allowing personalisation cookies you increase your chances of finding the content you want."
            }
          },
          n
        )
      ]
    }
  };
}, Ta = {
  and: "y",
  legalName: "Alma Career y las empresas del grupo empresarial"
}, qt = (t, n) => {
  const e = { ...Ta, ...t }, a = { name: "Título", description: "Descripción", expiration: "Validez" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Las cookies mejorarán nuestras páginas web aún más",
      description: `
      ${L(
        "Si entendemos mejor lo que le interesa, le ofreceremos contenidos más personalizados.",
        e.descriptionIntro
      )}
      <p>
        Al pulsar el botón «Aceptar todo», usted presta su consentimiento a
        ${O(_(e.companyNames, e.legalName), Ta.and)}
        para el uso de las cookies con fines de personalización, análisis y publicidad comportamental.
        Más información sobre las cookies y cómo configurarlas se puede encontrar en la <strong><a href="" data-cc="show-preferencesModal">configuración de cookies</a></strong>.
      </p>`,
      acceptAllBtn: "Aceptar todo",
      acceptNecessaryBtn: "Aceptar las necesarias"
    },
    preferencesModal: {
      title: "Personalizar la configuración de cookies",
      acceptAllBtn: "Aceptar todo",
      acceptNecessaryBtn: "Aceptar las necesarias",
      savePreferencesBtn: "Guardar configuración",
      sections: [
        {
          description: `Para aprovechar nuestras páginas al máximo, es recomendable permitir todos los tipos de cookies.
            ${e.preferencesModalMoreInfo ?? 'Más información sobre qué son las cookies y cómo trabajamos con ellas se puede encontrar en la <a href="https://www.almacareer.com/gdpr" target="_blank">Política de cookies</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Cookies técnicas",
              description: "Son aquellas que son necesarias para el funcionamiento correcto de nuestras páginas web, por lo que no es posible desactivarlas. Sin ellas no se podrá mostrar ningún contenido en nuestras páginas o no funcionará el inicio de sesión, entre otras cosas."
            },
            analytics: {
              title: "Cookies de análisis",
              description: "Son aquellas que usamos para seguir cuántas personas visitan nuestras páginas web y cómo las utilizan. Lo que nos permite ir mejorando las páginas así como otros servicios."
            },
            functionality: {
              title: "Cookies de funcionalidad",
              description: "Son aquellas que hacen nuestras páginas aún más eficientes y mejoran su funcionalidad. Por ejemplo, nos permiten usar el chat para que podamos responder a sus preguntas de manera rápida y sencilla."
            },
            ad: {
              title: "Cookies de publicidad comportamental",
              description: "Son aquellas que nos permiten medir lo efectivo que es nuestra publicidad y las ofertas comportamentales de nuestros servicios. Las cookies de publicidad comportamental nos permiten informarle en la Red sobre las novedades que puedan ser de su interés."
            },
            personalization: {
              title: "Cookies de personalización",
              description: "Nuestros servicios funcionan mejor cuando podemos adaptarlos a las necesidades de cada usuario. Al permitir las cookies de personalización, aumentará la posibilidad de encontrar exactamente el contenido que está buscando."
            }
          },
          n
        )
      ]
    }
  };
}, Kt = {
  and: "ning",
  company: "ettevõttele",
  companies: "ettevõtetele",
  legalName: "Alma Career ja teistele selle ärigrupi ettevõtetele"
}, Rt = (t, n) => {
  const e = { ...Kt, ...t }, a = { name: "Nimetus", description: "Kirjeldus", expiration: "Aegumine" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Küpsised muudavad meie veebilehe kasutamise veelgi paremaks",
      description: `
      ${L(
        "Kui mõistame paremini, mis sind huvitab, näitame sulle asjakohasemat sisu.",
        e.descriptionIntro
      )}
      <p>
        Klõpsates nuppu „Nõustun kõigiga“, annate
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        nõusoleku kasutada küpsiseid isikupärastamiseks, analüüsiks ja sihitud turunduseks.
        Küpsiste kasutamist saad kohandada oma <strong><a href="" data-cc="show-preferencesModal">kohandatud seadetes</a></strong>.
      </p>`,
      acceptAllBtn: "Nõustun kõigiga",
      acceptNecessaryBtn: "Nõustun tarvilikega"
    },
    preferencesModal: {
      title: "Kohandatud küpsiste seaded",
      acceptAllBtn: "Nõustun kõigiga",
      acceptNecessaryBtn: "Nõustun tarvilikega",
      savePreferencesBtn: "Salvesta sätted",
      sections: [
        {
          description: `Kui soovid meie veebilehest maksimumi võtta, on kõige parem nõustuda kõigi küpsistega.
            ${e.preferencesModalMoreInfo ?? 'Lisateavet selle kohta, mis on küpsised ja kuidas me nendega töötame, leiate lehelt <a href="https://www.almacareer.com/gdpr" target="_blank">Privaatsuspoliitika</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Tehniliselt vajalikud küpsised",
              description: "Need küpsised on meie veebilehe nõuetekohaseks toimimiseks hädavajalikud ja seetõttu ei saa neid keelata. Ilma nendeta poleks võimalik näiteks teatud sisu kuvamine või meie veebilehele sisse logimine."
            },
            analytics: {
              title: "Analüütilised küpsised",
              description: "Need aitavad meil jälgida kui palju inimesi meie veebilehte külastab ja kuidas nad seda kasutavad. See teave võimaldab meil veebilehte ja muid teenuseid pidevalt täiustada."
            },
            functionality: {
              title: "Funktsionaalsed küpsised",
              description: "Meie veebileht on veelgi tõhusam ja töötab paremini tänu nendele küpsistele."
            },
            ad: {
              title: "Turundusküpsised",
              description: "Need küpsised aitavad meil mõõta meie reklaamide ja suunatud teenusepakkumiste tõhusust. Turundusküpsised võimaldavad ka meil sulle internetist informatsiooni leida, mis võib sinu jaoks asjakohane ja huvipakkuv olla."
            },
            personalization: {
              title: "Isikupärastamise küpsised",
              description: "Meie teenused toimivad paremini, kui suudame neid konkreetsetele kasutajatele kohandada. Isikupärastamise küpsiste lubamisega suurendad oma võimalusi soovitud sisu leida."
            }
          },
          n
        )
      ]
    }
  };
}, Vt = {
  and: "et",
  legalName: "Alma Career et les sociétés de son groupe d'entreprises"
}, Ut = (t, n) => {
  const e = { ...Vt, ...t }, a = { name: "Titre", description: "Description", expiration: "Validité" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Les cookies permettent d'améliorer notre site encore davantage",
      description: `
      ${L(
        "Si nous comprenons mieux ce qui vous intéresse, nous vous proposerons un contenu plus personnalisé.",
        e.descriptionIntro
      )}
      <p>
        En cliquant sur le bouton « Tout accepter », vous consentez à ce
        qu'${O(_(e.companyNames, e.legalName), e.and)}
        utilisent des cookies à des fins de personnalisation, d'analyse et de marketing ciblé.
        Pour plus d'informations sur les cookies et pour modifier leur utilisation, veuillez vous référer <strong><a href="" data-cc="show-preferencesModal">aux paramètres</a></strong>.
      </p>`,
      acceptAllBtn: "Tout accepter",
      acceptNecessaryBtn: "Accepter le nécessaire"
    },
    preferencesModal: {
      title: "Personnaliser les paramètres des cookies",
      acceptAllBtn: "Tout accepter",
      acceptNecessaryBtn: "Accepter le nécessaire",
      savePreferencesBtn: "Sauvegarder les paramètres",
      sections: [
        {
          description: `Pour tirer le meilleur parti de notre site, il est préférable d'autoriser tous les types de cookies.
            ${e.preferencesModalMoreInfo ?? `Pour plus d'informations sur ce que sont les cookies et comment nous les utilisons, veuillez consulter notre <a href="https://www.almacareer.com/gdpr" target="_blank">Politique d'utilisation de cookies</a>.`}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Cookies techniquement nécessaires",
              description: "Ces cookies sont essentiels au bon fonctionnement de notre site, il n'est donc pas possible de les désactiver. Sans ces cookies, par exemple, aucun contenu ne serait affiché sur notre site web et l'ouverture de session ne fonctionnerait pas."
            },
            analytics: {
              title: "Cookies analytiques",
              description: "Nous les utilisons pour savoir combien de personnes visitent notre site web et comment elles l'utilisent. Ainsi, nous pouvons continuellement améliorer le site et les autres services."
            },
            functionality: {
              title: "Cookies fonctionnels",
              description: "Ces cookies permettent à notre site d'être plus efficace et de mieux fonctionner. Par exemple, ils nous permettent d'utiliser le chat pour répondre rapidement et facilement à vos questions."
            },
            ad: {
              title: "Cookies marketing",
              description: "Ces cookies nous permettent de mesurer l'efficacité de notre publicité et des offres ciblées de nos services. Les cookies marketing nous permettent de vous avertir en ligne des nouveautés qui pourraient vous intéresser."
            },
            personalization: {
              title: "Cookies de personnalisation",
              description: "Nos services fonctionnent mieux lorsque nous pouvons les adapter aux besoins spécifiques de chaque utilisateur. En autorisant les cookies de personnalisation, vous augmentez vos chances de trouver le contenu que vous recherchez."
            }
          },
          n
        )
      ]
    }
  };
}, Yt = {
  and: "i",
  legalName: "tvrtkama iz poslovne grupacije Alma Career"
}, Wt = (t, n) => {
  const e = { ...Yt, ...t }, a = { name: "Naziv", description: "Opis", expiration: "Valjanost" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Kolačići čine našu stranicu još boljom",
      description: `
      ${L(
        "Boljim razumijevanjem onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.",
        e.descriptionIntro
      )}
      <p>
        Klikom na gumb „Prihvati sve“, dajete
        ${O(_(e.companyNames, e.legalName), e.and)}
        privolu za upotrebu kolačića za personalizaciju, analitiku i ciljani marketing.
        Možete prilagoditi upotrebu kolačića u svojim <strong><a href="" data-cc="show-preferencesModal">prilagođenim postavkama</a></strong>.
      </p>`,
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvati nužno"
    },
    preferencesModal: {
      title: "Prilagođene postavke kolačića",
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvati nužno",
      savePreferencesBtn: "Spremi postavke",
      sections: [
        {
          description: `Ako želite maksimalno iskoristiti našu web stranicu, najbolje je dopustiti sve vrste kolačića.
            ${e.preferencesModalMoreInfo ?? 'Više informacija o tome što su kolačići i kako s njima radimo možete pronaći na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Pravila privatnosti</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Tehnički nužni kolačići",
              description: "Ovi kolačići su ključni za pravilno funkcioniranje naše web stranice i stoga ih nije moguće onemogućiti. Bez njih nije moguće prikazati sadržaj ili se prijaviti na našu web stranicu."
            },
            analytics: {
              title: "Analitički kolačići",
              description: "Ovi nam pomažu pratiti koliko ljudi posjećuje našu web stranicu i kako je koriste. Te informacije nam omogućuju kontinuirano poboljšavanje web stranice i drugih usluga."
            },
            functionality: {
              title: "Funkcionalni kolačići",
              description: "Naša web stranica djeluje još učinkovitije i bolje zahvaljujući ovim kolačićima. Na primjer, omogućuju nam korištenje usluge razgovora i brzo i jednostavno odgovaranje na vaša pitanja."
            },
            ad: {
              title: "Marketing kolačići",
              description: "Ovi kolačići nam pomažu mjeriti učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketing kolačići omogućuju nam donošenje vijesti koje bi vas mogle zanimati na internetu."
            },
            personalization: {
              title: "Personalizacijski kolačići",
              description: "Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem personalizacijskih kolačića povećavate šanse da pronađete sadržaj koji želite."
            }
          },
          n
        )
      ]
    }
  };
}, Sa = {
  and: "és",
  legalName: "Alma Career csoport és a hozzá tartozó vállalatok"
}, Gt = (t, n) => {
  const e = { ...Sa, ...t }, a = { name: "Név", description: "Leírás", expiration: "Érvényesség" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Az oldalak süti fájlokat használnak",
      description: `
      ${L(
        "Ha jobban megértjük, mi érdekli Önt, akkor pontosabban személyre szabott tartalmat tudunk Önnek megjeleníteni.",
        e.descriptionIntro
      )}
      <p>
        A „Mindent elfogadok” gombra kattintva a hozzájárulását adja ahhoz, hogy az
        ${O(_(e.companyNames, e.legalName), Sa.and)}
        süti fájlokat és egyéb azonosítókat használjon az Ön eszközén. E süti fájlok és egyéb azonosítók használata megkönnyíti a weboldalon belüli navigációt, a személyre szabott tartalom megjelenítését, a célzott marketinget, valamint termékeink és szolgáltatásaink használatának elemzését.
        A cookie-k használatát testre szabhatja <strong><a href="" data-cc="show-preferencesModal">saját beállításaiban</a></strong>.
      </p>`,
      acceptAllBtn: "Minden elfogadása",
      acceptNecessaryBtn: "A legszükségesebbek elfogadása"
    },
    preferencesModal: {
      title: "Egyedi cookie-fájl beállítások",
      acceptAllBtn: "Minden elfogadása",
      acceptNecessaryBtn: "A legszükségesebbek elfogadása",
      savePreferencesBtn: "Beállítások mentése",
      sections: [
        {
          description: `Ahhoz, hogy a maximumot hozhassa ki webhelyünkből, a legjobb, ha engedélyezi az összes cookie típust.
            ${e.preferencesModalMoreInfo ?? 'További információkat arról, hogy mik azok a cookie-k és hogyan dolgozunk velük az <a href="https://www.almacareer.com/gdpr" target="_blank">Adatvédelmi szabályzat</a> oldalán találsz.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technikailag szükséges cookie-k",
              description: "Ezek a cookie-k weboldalunk megfelelő működéséhez szükségesek, ezért kikapcsolásuk nem lehetséges. Nélkülük például semmilyen tartalom nem jelenhetne meg weboldalunkon, vagy nem működne a bejelentkezés."
            },
            analytics: {
              title: "Analitikai cookie-k",
              description: "Segítségükkel nyomon követjük, hogy hányan látogatják oldalunkat, és hogyan használják. Ennek köszönhetően tehetjük meg webhelyünk és egyéb szolgáltatásaink folyamatos fejlesztését."
            },
            functionality: {
              title: "Funkcionális cookie-k",
              description: "Ezeknek a cookie-knak köszönhetően weboldalunk még hatékonyabban és jobban működik. Például lehetővé teszik számunkra a chat használatát, hogy gyorsan és egyszerűen válaszolhassunk kérdéseire."
            },
            ad: {
              title: "Marketing cookie-k",
              description: "Ezekkel a cookie-kkel mérhetjük le, mennyire hatékonyak a hirdetéseink és szolgáltatásaink célzott ajánlatai. A marketing cookie-k lehetővé teszik, hogy figyelmeztessük az interneten megjelenő olyan hírekre, amelyek érdekesek lehetnek az Ön számára.m"
            },
            personalization: {
              title: "Személyre szabott cookie-k",
              description: "Szolgáltatásaink jobban működnek, ha egy adott felhasználóra tudjuk szabni őket. A személyre szabott cookie-k engedélyezésével növeli annak esélyét, hogy éppen a keresett tartalmat találja meg."
            }
          },
          n
        )
      ]
    }
  };
}, Zt = {
  and: "bei",
  legalName: "Alma Career ir kitoms jos verslo grupės įmonėms"
}, Jt = (t, n) => {
  const e = { ...Zt, ...t }, a = { name: "Pavadinimas", description: "Aprašymas", expiration: "Galiojimo pabaiga" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Slapukai mūsų svetainę daro dar geresnę",
      description: `
      ${L(
        "Geriau suprasdami, kas jus domina, mes rodysime jums aktualų turinį.",
        e.descriptionIntro
      )}
      <p>
        Spustelėję mygtuką „Priimti viską“, duodate
        ${O(_(e.companyNames, e.legalName), e.and)}
        sutikimą naudoti slapukus personalizavimui, analizei ir tikslinei rinkodarai.
        Slapukų naudojimą galite pritaikyti <strong><a href="" data-cc="show-preferencesModal">pasirinktinuose nustatymuose</a></strong>.
      </p>`,
      acceptAllBtn: "Priimti viską",
      acceptNecessaryBtn: "Priimti būtinus"
    },
    preferencesModal: {
      title: "Individualūs slapukų nustatymai",
      acceptAllBtn: "Priimti viską",
      acceptNecessaryBtn: "Priimti būtinus",
      savePreferencesBtn: "Išsaugoti nustatymus",
      sections: [
        {
          description: `Jei norite kuo geriau išnaudoti mūsų svetainę, geriausia leisti visų tipų slapukus.
            ${e.preferencesModalMoreInfo ?? 'Daugiau informacijos apie tai, kas yra slapukai ir kaip su jais dirbame, galite rasti puslapyje <a href="https://www.almacareer.com/gdpr" target="_blank">Privatumo politika</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Techniškai būtini slapukai",
              description: "Šie slapukai yra būtini tinkamam mūsų svetainės veikimui, todėl jų negalima išjungti. Be jų nebūtų įmanoma pvz. rodyti bet kokį turinį ar prisijungti mūsų svetainėje."
            },
            analytics: {
              title: "Analitiniai slapukai",
              description: "Tai padeda mums stebėti, kiek žmonių lankosi mūsų svetainėje ir kaip jie ja naudojasi. Ši informacija leidžia mums nuolat tobulinti svetainę ir kitas paslaugas."
            },
            functionality: {
              title: "Funkciniai slapukai",
              description: "Mūsų svetainė yra dar efektyvesnė ir veikia geriau dėl šių slapukų."
            },
            ad: {
              title: "Rinkodaros slapukai",
              description: "Šie slapukai padeda mums įvertinti reklamos ir tikslinių paslaugų pasiūlymų efektyvumą. Rinkodaros slapukai leidžia mums pateikti jums naujienas, kurios gali jus sudominti."
            },
            personalization: {
              title: "Personalizavimo slapukai",
              description: "Mūsų paslaugos veikia geriau, jei galime jas pritaikyti konkretiems vartotojams. Leidžiant personalizuoti slapukus, padidinsite savo galimybes rasti norimą turinį."
            }
          },
          n
        )
      ]
    }
  };
}, Xt = {
  and: "un",
  legalName: "Alma Career un citiem tā biznesa grupas uzņēmumiem"
}, Qt = (t, n) => {
  const e = { ...Xt, ...t }, a = { name: "Nosaukums", description: "Apraksts", expiration: "Galiojimo laikas" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Sīkdatnes padara mūsu vietnes lietošanu vēl labāku",
      description: `
      ${L(
        "Labāk saprastu, kas jums interesē, mēs parādīsim atbilstošāko saturu.",
        e.descriptionIntro
      )}
      <p>
        Noklikšķinot uz pogas „Pieņemt visas“, jūs dodat
        ${O(_(e.companyNames, e.legalName), e.and)}
        piekrišanu izmantot sīkdatnes personalizācijai, analītikai un mērķētam mārketingam.
        Jūs varat pielāgot sīkdatņu izmantošanu <strong><a href="" data-cc="show-preferencesModal">savos iestatījumos</a></strong>.
      </p>`,
      acceptAllBtn: "Pieņemt visas",
      acceptNecessaryBtn: "Pieņemt nepieciešamās"
    },
    preferencesModal: {
      title: "Pielāgoti sīkdatņu iestatījumi",
      acceptAllBtn: "Pieņemt visas",
      acceptNecessaryBtn: "Pieņemt nepieciešamās",
      savePreferencesBtn: "Saglabāt iestatījumus",
      sections: [
        {
          description: `Ja vēlaties izmantot mūsu vietni maksimāli efektīvi, ieteicams atļaut visu veidu sīkdatnes.
            ${e.preferencesModalMoreInfo ?? 'Vairāk informācijas par to, kas ir sīkdatnes un kā mēs ar tām strādājam, Jūs varat atrast sadaļā <a href="https://www.almacareer.com/gdpr" target="_blank">Privātuma politika</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Nepieciešamās tehniskās sīkdatnes",
              description: "Šīs sīkdatnes ir būtiskas pilnvērtīgai mūsu vietnes darbībai, tāpēc tās nevar atspējot. Bez tām nebūtu iespējams, piemēram, rādīt jebkuru saturu vai pierakstīties mūsu vietnē."
            },
            analytics: {
              title: "Analītiskās sīkdatnes",
              description: "Šīs sīkdatnes palīdz mums uzraudzīt, cik daudz cilvēku apmeklē mūsu vietni un kā viņi to izmanto. Šī informācija ļauj mums nepārtraukti uzlabot vietni un pakalpojumus."
            },
            functionality: {
              title: "Funkcionālās sīkdatnes",
              description: "Mūsu vietne ir vēl efektīvāka un labāk darbojas, pateicoties šīm sīkdatnēm."
            },
            ad: {
              title: "Mārketinga sīkdatnes",
              description: "Šīs sīkdatnes palīdz mums mērīt mūsu reklāmas un mērķēto pakalpojumu piedāvājumu efektivitāti. Mārketinga sīkdatnes ļauj mums internetā jums piedāvāt jaunumus, kas varētu jūs interesēt."
            },
            personalization: {
              title: "Personalizācijas sīkdatnes",
              description: "Mūsu pakalpojumi darbojas labāk, ja mēs varam tos pielāgot konkrētiem lietotājiem. Atļaujot personalizācijas sīkdatnes, jūs palielināt iespējas atrast jums interesējošu saturu."
            }
          },
          n
        )
      ]
    }
  };
}, en = {
  and: "и",
  company: "компаниите",
  companies: "компании",
  legalName: "Alma Career и на другите компании кои се дел од Alma Career групацијата"
}, an = (t, n) => {
  const e = { ...en, ...t }, a = { name: "Назив", description: "Опис", expiration: "Истекување" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Колачињата служат за подобро корисничко искуство.",
      description: `
      ${L(
        "Доколку подобро разбереме што она што ве интересира, ќе ви покажеме порелевантна содржина.",
        e.descriptionIntro
      )}
      <p>
        Со кликнување на копчето „Прифати ги сите“, им давате согласност на
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        да користат колачиња за персонализација, аналитика и таргетиран маркетинг.
        Можете да ја прилагодите употребата на колачиња во вашите <strong><a href="" data-cc="show-preferencesModal">сопствени поставки</a></strong>.
      </p>`,
      acceptAllBtn: "Прифатете ги сите",
      acceptNecessaryBtn: "Прифатете ги неопходните"
    },
    preferencesModal: {
      title: "сопствени поставки Колачињата",
      acceptAllBtn: "Прифатете ги сите",
      acceptNecessaryBtn: "Прифатете ги неопходните",
      savePreferencesBtn: "Зачувајте ги поставките",
      sections: [
        {
          description: `Ако сакате да го извлечете максимумот од нашата веб-страна, најдобро е да ги прифатите сите колачиња.
            ${e.preferencesModalMoreInfo ?? 'Можете да најдете повеќе информации за тоа што се колачиња и како работиме со нив во делот <a href="https://www.almacareer.com/gdpr" target="_blank">Политика за приватност</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Технички неопходни колачи7ња",
              description: "Овие колачи7ња се од суштинско значење за правилното функционирање на нашата веб-страна и затоа не можат да се оневозможат. Без нив не би било можно прикажување на која било содржина или најавување на нашата веб-страна."
            },
            analytics: {
              title: "Аналитичк7и колачиња",
              description: "Овие колачињ7а ни помагаат да следиме колку луѓе ја посетуваат нашата веб-страна и како ја користат. Овие информации потоа ни овозможуваат постојано да ја подобруваме веб-страницата и другите услуги."
            },
            functionality: {
              title: "Функционал7ни колачиња",
              description: "Нашата веб7-страна е уште поефикасна и работи подобро благодарение на овие колачиња. На пример, тие ни овозможуваат да ја користиме опцијата за чет и да одговориме на вашите прашања брзо и лесно."
            },
            ad: {
              title: "Маркетинг колачиња",
              description: "Овие колачиња ни помагаат да ја измериме ефективноста на нашите маркетинг активности. Маркетинг колачињата ни овозможуваат да ви пласираме новости што може да ве интересираат."
            },
            personalization: {
              title: "Колачиња за персонализација",
              description: "Ги унапредуваме нашите услуги доколку можеме да ги прилагодиме на одредени корисници. Дозволувајќи колачиња за персонализација, ги зголемувате вашите шанси да ја пронајдете содржината што ја сакате."
            }
          },
          n
        )
      ]
    }
  };
}, Ba = {
  and: "i",
  company: "firmę",
  companies: "firmy",
  legalName: "Alma Career i firmy z jej grupy biznesowej"
}, tn = (t, n) => {
  const e = { ...Ba, ...t }, a = { name: "Nazwa", description: "Opis", expiration: "Ważność (Do)" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Dzięki plikom Cookies nasza strona będzie jeszcze lepsza",
      description: `
      ${L(
        "Gdy lepiej zrozumiemy, co Cię interesuje, pokażemy dokładniejsze treści dopasowane do Twoich preferencji.",
        e.descriptionIntro
      )}
      <p>
        Kliknij w przycisk „Akceptuj wszystkie”, aby wyrazić zgodę na wykorzystanie plików cookie przez
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), Ba.and)}
        do personalizacji, analizy i ukierunkowanego marketingu.
        Korzystanie z plików cookies możesz dostosować we <strong><a href="" data-cc="show-preferencesModal">własnych ustawieniach</a></strong>.
      </p>`,
      acceptAllBtn: "Akceptuj wszystkie",
      acceptNecessaryBtn: "Akceptuj niezbędne"
    },
    preferencesModal: {
      title: "Własne ustawienia plików cookies",
      acceptAllBtn: "Akceptuj wszystkie",
      acceptNecessaryBtn: "Akceptuj niezbędne",
      savePreferencesBtn: "Zapisz ustawienia",
      sections: [
        {
          description: `Aby w pełni wykorzystać możliwości naszej strony, najlepiej jest zezwolić na wszystkie rodzaje plików cookies.
            ${e.preferencesModalMoreInfo ?? 'Więcej informacji na temat tego, czym są pliki cookies i jak z nimi pracujemy, znajdziesz w naszej <a href="https://www.almacareer.com/gdpr" target="_blank">Polityce plików cookie</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technicznie niezbędne pliki cookies",
              description: "Te pliki cookies są niezbędne do prawidłowego funkcjonowania naszej strony internetowej, dlatego nie ma możliwości ich wyłączenia. Bez nich na naszej stronie na przykład nie można byłoby wyświetlić żadnej treści lub nie działałoby logowanie."
            },
            analytics: {
              title: "Analityczne pliki cookies",
              description: "Używamy ich do śledzenia, ile osób odwiedza naszą stronę internetową i jak z niej korzysta. Dzięki temu możemy stale ulepszać stronę i inne usługi."
            },
            functionality: {
              title: "Funkcjonalne pliki cookies",
              description: "Te pliki cookies sprawiają, że nasza strona internetowa jest jeszcze bardziej wydajna i działa lepiej. Pozwalają nam na przykład korzystać z czatu, dzięki temu możemy szybko i łatwo odpowiadać na Twoje pytania."
            },
            ad: {
              title: "Marketingowe pliki cookies",
              description: "Za pomocą tych plików cookies możemy mierzyć, jak skuteczne są nasze reklamy i ukierunkowane oferty naszych usług. Marketingowe pliki cookies pozwalają nam powiadamiać Cię w Internecie o nowościach, które mogą Cię zainteresować."
            },
            personalization: {
              title: "Personalizacyjne pliki cookies",
              description: "Nasze usługi działają lepiej, gdy możemy je dostosować do konkretnego użytkownika. Włączeniem personalizacyjnych plików cookies zwiększasz szansę na znalezienie właśnie tych treści, których poszukujesz."
            }
          },
          n
        )
      ]
    }
  };
}, $a = {
  and: "e",
  company: "à empresa",
  companies: "às empresas",
  legalName: "Alma Career e às empresas pertencentes ao seu grupo comercial"
}, nn = (t, n) => {
  const e = { ...$a, ...t }, a = { name: "Nome", description: "Assinatura", expiration: "Validade" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Graças aos cookies as nossas páginas serão ainda melhores",
      description: `
      ${L(
        "Se soubermos claramente o que lhe interessa, exibir-lhe-emos apenas conteúdos à medida.",
        e.descriptionIntro
      )}
      <p>
        Clicando em «Aceitar todos» dá
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), $a.and)}
        consentimento para usarem cookies com o intuito de personalizarem, analisarem e criarem campanhas de marketing mais direcionadas.
        Há mais informações sobre cookies e como ajustá-los nas <strong><a href="" data-cc="show-preferencesModal">configurações dedicadas a isso</a></strong>.
      </p>`,
      acceptAllBtn: "Aceitar todos",
      acceptNecessaryBtn: "Aceitar os necessários"
    },
    preferencesModal: {
      title: "Editar as configurações de cookies",
      acceptAllBtn: "Aceitar todos",
      acceptNecessaryBtn: "Aceitar os necessários",
      savePreferencesBtn: "Guardar configurações",
      sections: [
        {
          description: `Para aproveitar ao máximo das nossas páginas, aconselhamos ativar todos os tipos de cookies.
            ${e.preferencesModalMoreInfo ?? 'Há mais informações sobre o significado dos cookies e como os processamos nas <a href="https://www.almacareer.com/gdpr" target="_blank">Políticas sobre Cookies</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Cookies tecnicamente necessários",
              description: "Tais cookies são essenciais para o funcionamento correto das nossas páginas, por conseguinte não é possível desativá-los. Sem eles não seria possível, por exemplo, exibir nenhum conteúdo nas nossas páginas ou não funcionaria o login."
            },
            analytics: {
              title: "Cookies analíticos",
              description: "Com a sua ajuda acompanhamos quantas pessoas visitam as nossas páginas e como as utilizam. Graças a isso podemos aperfeiçoar cada vez mais as nossas páginas e os serviços que oferecemos."
            },
            functionality: {
              title: "Cookies funcionais",
              description: "Graças a tais cookies as nossas páginas são ainda mais eficientes e funcionam melhor. Por exemplo, possibilitam que utilizemos o chat para podermos responder rápida e comodamente às perguntas dos utilizadores."
            },
            ad: {
              title: "Cookies de marketing",
              description: "Com tais cookies podemos mensurar qual o grau de eficácia das nossas publicidades e da amplitude desejada dos nossos serviços. Cookies de marketing permitem-nos informar os utilizadores de novidades que lhes possam interessar."
            },
            personalization: {
              title: "Cookies personalizados",
              description: "Os nossos serviços funcionam melhor se os podemos adaptar à medida a um utilizador concreto. Habilitando os cookies personalizados, aumenta as chances de encontrar os conteúdos dos quais está à procura."
            }
          },
          n
        )
      ]
    }
  };
}, Ia = {
  and: "și",
  legalName: "Alma Career și companiile din grupul său"
}, on = (t, n) => {
  const e = { ...Ia, ...t }, a = { name: "Denumire", description: "Descriere", expiration: "Valabilitate" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Datorită cookie-urilor, site-ul nostru va deveni și mai bun",
      description: `
      ${L(
        "În cazul în care vom înțelege mai bine ce vă interesează, vă vom putea afișa conținut adaptat intereselor dumneavoastră.",
        e.descriptionIntro
      )}
      <p>
        Făcând clic pe butonul „Permite toate”, sunteți de acord ca
        ${O(_(e.companyNames, e.legalName), Ia.and)}
        să utilizeze fișierele cookies în scop de personalizare, analiză și marketing orientat.
        Mai multe informații despre cookies și despre modificarea setărilor acestora puteți găsi în <strong><a href="" data-cc="show-preferencesModal">setările proprii</a></strong>.
      </p>`,
      acceptAllBtn: "Permite toate",
      acceptNecessaryBtn: "Permite doar esențiale"
    },
    preferencesModal: {
      title: "Personalizează setările cookies",
      acceptAllBtn: "Permite toate",
      acceptNecessaryBtn: "Permite doar esențiale",
      savePreferencesBtn: "Salvează setările",
      sections: [
        {
          description: `Pentru a profita la maxim de site-ul nostru, este recomandat să permiteți toate tipurile de cookies.
            ${e.preferencesModalMoreInfo ?? 'Mai multe informații despre ce sunt cookie-urile și despre cum le utilizăm puteți găsi în <a href="https://www.almacareer.com/gdpr" target="_blank">Politica de cookies</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Cookie-uri tehnice",
              description: "Aceste cookies sunt esențiale pentru funcționarea site-ului nostru, de aceea nu există posibilitatea de a le opri. Fără acestea, nu ar fi, de exemplu, posibil să afișăm conținut pe site și nu ar fi posibilă autentificarea."
            },
            analytics: {
              title: "Cookie-uri analitice",
              description: "Cookie-urile analitice ne ajută să urmărim numărul de vizitatori ai site-ului nostru și modul în care aceștia utilizează site-ul. Datorită acestor cookies, putem să îmbunătățim constant site-ul nostru și serviciile oferite."
            },
            functionality: {
              title: "Cookie-uri de funcționalitate",
              description: "Datorită acestor cookies, site-ul nostru este și mai eficient și funcționează mai bine. Ne permit, de exemplu, să folosim chat-ul, pentru a vă putea răspunde rapid și ușor la toate întrebările."
            },
            ad: {
              title: "Cookie-uri publicitare",
              description: "Aceste cookies ne permit să analizăm eficiența publicității noastre și a ofertei de servicii personalizate. Cu ajutorul cookie-urilor publicitare, putem să vă anunțăm online cu privire la noutăți care v-ar putea fi de interes pentru dumneavoastră."
            },
            personalization: {
              title: "Cookie-uri pentru personalizare",
              description: "Serviciile noastre funcționează mai bine atunci când le putem personaliza pentru fiecare utilizator. Prin acceptarea Cookie-urilor pentru personalizare, creșteți șansele de a primi exact conținutul dorit."
            }
          },
          n
        )
      ]
    }
  };
}, sn = {
  and: "и",
  company: "компаниям",
  companies: "компаниям",
  legalName: "Alma Career и компании ее группы"
}, rn = (t, n) => {
  const e = { ...sn, ...t }, a = { name: "Название", description: "Описание", expiration: "Срок Действия" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Этот сайт использует файлы cookie",
      description: `
      ${L(
        "Когда мы лучше поймем, что вас интересует, мы покажем вам лучший контент.",
        e.descriptionIntro
      )}
      <p>
        Нажав «Принять все», Вы даете свое согласие
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
        Вы можете настроить использование файлов cookie в <strong><a href="" data-cc="show-preferencesModal">собственных настройках</a></strong>.
      </p>`,
      acceptAllBtn: "Принять все",
      acceptNecessaryBtn: "Принятие необходимо"
    },
    preferencesModal: {
      title: "Индивидуальные настройки файлов cookies",
      acceptAllBtn: "Принять все",
      acceptNecessaryBtn: "Принятие необходимо",
      savePreferencesBtn: "Сохранить настройки",
      sections: [
        {
          description: `Чтобы Вы могли в максимальной мере и без проблем пользоваться нашим сайтом, мы рекомендуем
            разрешить просматривать и сохранять все типы файлов cookie.
            ${e.preferencesModalMoreInfo ?? 'Вы можете найти дополнительную информацию о том, что такое файлы cookies, и как мы с ними работаем, на странице <a href="https://www.almacareer.com/gdpr" target="_blank">Политика конфиденциальности персональных данных</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Технически необходимые файлы cookie",
              description: "Эти файлы cookie необходимы для правильной работы нашего веб-сайта, поэтому их невозможно отключить. Без них, например, на нашем веб-сайте невозможно было бы изобразить какое-либо содержание или было бы невозможно войти в систему."
            },
            analytics: {
              title: "Аналитические файлы cookie",
              description: "Мы используем их, чтобы отслеживать, сколько людей посещают наш веб-сайт и как они его используют. Это позволяет нам постоянно улучшать наш веб-сайт и другие услуги."
            },
            functionality: {
              title: "Функциональные файлы cookie",
              description: "Благодаря этим файлам cookie наш веб-сайт стал еще продуктивнее и улучшил работу. Например, они позволяют нам использовать чат, чтобы мы могли быстро и просто ответить на вопросы."
            },
            ad: {
              title: "Маркетинговые файлы cookie",
              description: "С помощью этих файлов cookie мы можем измерить, насколько эффективны наша реклама и целевые предложения наших услуг. Маркетинговые файлы cookie позволяют нам по Интернету информировать Вас о новостях, которые могут вас заинтересовать."
            },
            personalization: {
              title: "Файлы cookie для персонализации",
              description: "Наши услуги работают лучше, когда мы можем приспособить их к конкретному пользователю. Включив файлы cookie для персонализации, вы повысите вероятность того, что найдете именно то содержание, которое ищете."
            }
          },
          n
        )
      ]
    }
  };
}, cn = {
  and: "a",
  company: "spoločnosti",
  companies: "spoločnostiam",
  legalName: "Alma Career a spoločnostiam z jej obchodné skupiny"
}, ln = (t, n) => {
  const e = { ...cn, ...t }, a = { name: "Názov", description: "Popis", expiration: "Platnosť" };
  return {
    consentModal: {
      title: e.consentTitle ?? "S cookies vám vieme lepšie prispôsobiť stránku",
      description: `
      ${L(
        "Presnejší obsah na mieru vám budeme zobrazovať, keď lepšie pochopíme, čo vás zaujíma.",
        e.descriptionIntro
      )}
      <p>
        Kliknutím na tlačidlo „Prijať všetky“ dáte
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        súhlas s využívaním súborov Cookies za účelom personalizácie, analýzy a cieleného marketingu.
        Viac informácií o Cookies a úpravu ich používania nájdete vo <strong><a href="" data-cc="show-preferencesModal">vlastnom nastavení</a></strong>.
      </p>`,
      acceptAllBtn: "Prijať všetky",
      acceptNecessaryBtn: "Prijať nevyhnutné"
    },
    preferencesModal: {
      title: "Prispôsobiť nastavenia cookies",
      acceptAllBtn: "Prijať všetky",
      acceptNecessaryBtn: "Prijať nevyhnutné",
      savePreferencesBtn: "Uložiť nastavenia",
      sections: [
        {
          description: `Aby ste z našich stránok získali maximum, je najlepšie povoliť všetky typy cookies.
            ${e.preferencesModalMoreInfo ?? 'Ďalšie informácie o tom, čo sú cookies a ako s nimi pracujeme, nájdete v <a href="https://www.almacareer.com/gdpr" target="_blank">Zásadách cookies</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Technicky nevyhnutné cookies",
              description: "Tieto cookies sú pre správne fungovanie nášho webu nevyhnutné, preto nie je možné ich vypnúť. Bez nich by sa na našich stránkach napr. nedal zobraziť žiadny obsah alebo by nefungovalo prihlásenie."
            },
            analytics: {
              title: "Analytické cookies",
              description: "Pomocou nich sledujeme, koľko ľudí náš web navštevuje a ako ho používajú. Vďaka tomu môžeme stránky a ďalšie služby neustále vylepšovať."
            },
            functionality: {
              title: "Funkčné cookies",
              description: "Vďaka týmto cookies sú naše stránky ešte výkonnejšie a fungujú lepšie. Napríklad nám umožňujú používať chat, aby sme na vaše otázky mohli odpovedať rýchlo a jednoducho."
            },
            ad: {
              title: "Marketingové cookies",
              description: "S týmito cookies môžeme merať, aká efektívna je naša reklama a cielené ponuky našich služieb. Marketingové cookies nám umožnia vás na internete upozorniť na novinky, ktoré vás môžu zaujímať."
            },
            personalization: {
              title: "Personalizačné cookies",
              description: "Naše služby fungujú lepšie, keď ich môžeme prispôsobiť na mieru konkrétnemu používateľovi. Povolením personalizačných cookies zvýšite šancu, že nájdete práve taký obsah, aký hľadáte."
            }
          },
          n
        )
      ]
    }
  };
}, pn = {
  and: "in",
  legalName: "iz poslovne skupine Alma Career"
}, un = (t, n) => {
  const e = { ...pn, ...t }, a = { name: "Naziv", description: "Opis", expiration: "Potek" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Piškotki izboljšujejo našo spletno stran",
      description: `
      ${L(
        "Z boljšim razumevanjem, kaj vas zanima, vam bomo prikazali bolj relevantno vsebino.",
        e.descriptionIntro
      )}
      <p>
        S klikom na gumb „Sprejmi vse“ dajete soglasje podjetjem
        ${O(_(e.companyNames, e.legalName), e.and)}
        za uporabo piškotkov za personalizacijo, analitiko in ciljno oglaševanje.
        Uporabo piškotkov lahko prilagodite v <strong><a href="" data-cc="show-preferencesModal">svojih nastavitvah</a></strong>.
      </p>`,
      acceptAllBtn: "Sprejmi vse",
      acceptNecessaryBtn: "Sprejmi samo nujne"
    },
    preferencesModal: {
      title: "Prilagojene nastavitve piškotkov",
      acceptAllBtn: "Sprejmi vse",
      acceptNecessaryBtn: "Sprejmi samo nujne",
      savePreferencesBtn: "Shrani nastavitve",
      sections: [
        {
          description: `Če želite najbolje izkoristiti našo spletno stran, je najbolje, da dovolite vse vrste piškotkov.
            ${e.preferencesModalMoreInfo ?? 'Več informacij o tem, kaj so piškotki in kako z njimi upravljamo, najdete na strani <a href="https://www.almacareer.com/gdpr" target="_blank">Pravilnik o zasebnosti</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Tehnično nujni piškotki",
              description: "Ti piškotki so bistveni za pravilno delovanje naše spletne strani in jih ni mogoče izklopiti. Brez njih ne bi bilo mogoče prikazati vsebine ali se prijaviti na našo spletno stran."
            },
            analytics: {
              title: "Analitični piškotki",
              description: "Ti nam pomagajo spremljati, koliko ljudi obišče našo spletno stran in kako jo uporabljajo. Te informacije nam omogočajo nenehno izboljševanje spletne strani in drugih storitev."
            },
            functionality: {
              title: "Funkcionalni piškotki",
              description: "Naša spletna stran je še učinkovitejša in bolje deluje zaradi teh piškotkov. Na primer, omogočajo nam uporabo klepetalne storitve in hitro ter enostavno odgovarjanje na vaša vprašanja."
            },
            ad: {
              title: "Trženjski piškotki",
              description: "Ti piškotki nam pomagajo meriti učinkovitost našega oglaševanja in ciljnih ponudb storitev. Trženjski piškotki nam omogočajo, da vam na internetu prinašamo novice, ki vas morda zanimajo."
            },
            personalization: {
              title: "Piškotki za prilagajanje",
              description: "Naše storitve bolje delujejo, če jih lahko prilagodimo določenim uporabnikom. Z dovoljenjem piškotkov za prilagajanje povečate možnosti, da najdete vsebino, ki jo želite."
            }
          },
          n
        )
      ]
    }
  };
}, dn = {
  and: "i",
  company: "kompaniji",
  companies: "kompanijama",
  legalName: "Alma Career i ostale kompanije iz njene poslovne grupe"
}, mn = (t, n) => {
  const e = { ...dn, ...t }, a = { name: "Ime", description: "Opis", expiration: "Vreme isteka" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Kolačići dodatno unapređuju naš sajt",
      description: `
      ${L(
        "Ako budemo bolje razumeli ono što vas zanima, prikazivaćemo relevantniji sadržaj.",
        e.descriptionIntro
      )}
      <p>
        Klikom na dugme „Prihvati sve” dajete
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        svoju saglasnost za korišćenje kolačića za personalizaciju, analitiku i ciljani marketing.
         U prilagođenim podešavanjima možete da <strong><a href="" data-cc="show-preferencesModal">prilagodite korišćenje kolačića</a></strong>.
      </p>`,
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvati neophodne"
    },
    preferencesModal: {
      title: "Prilagođena podešavanja kolačića",
      acceptAllBtn: "Prihvati sve",
      acceptNecessaryBtn: "Prihvati neophodne",
      savePreferencesBtn: "Sačuvaj podešavanja",
      sections: [
        {
          description: `Ako želite da maksimalno iskoristite naš veb-sajt, najbolje bi bilo da dozvolite sve vrste kolačića.
            ${e.preferencesModalMoreInfo ?? 'Više informacija o tome šta su kolačići i kako ih obrađujemo možete da pronađete u našoj <a href="https://www.almacareer.com/gdpr" target="_blank">politici kolačića</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Tehnički neophodni kolačići",
              description: "Ovi kolačići su neophodni za pravilno funkcionisanje našeg veb-sajta i zato se ne mogu onemogućiti. Bez njih ne bi bilo moguće npr. prikazati bilo kakav sadržaj ili se prijaviti na naš veb-sajt."
            },
            analytics: {
              title: "Analitički kolačići",
              description: "Oni nam pomažu da pratimo koliko ljudi posećuje naš veb-sajt i kako ga koriste. Ove informacije nam omogućavaju da kontinuirano poboljšavamo veb-sajt i druge usluge."
            },
            functionality: {
              title: "Funkcionalni kolačići",
              description: "Naš veb-sajt je još efikasniji i bolje funkcioniše zahvaljujući ovim kolačićima. Na primer, omogućavaju nam da koristimo uslugu četa i brzo i lako odgovorimo na vaša pitanja."
            },
            ad: {
              title: "Marketing kolačići",
              description: "Ovi kolačići nam pomažu da izmerimo efikasnost oglašavanja i ciljanih ponuda usluga. Marketing kolačići nam omogućavaju da vam pružimo vesti koje bi vas mogle zanimati na internetu."
            },
            personalization: {
              title: "Kolačići za personalizaciju",
              description: "Naše usluge rade bolje ako ih možemo prilagoditi konkretnim korisnicima. Ako omogućite kolačiće za personalizaciju, povećavate šanse da pronađete sadržaj koji želite."
            }
          },
          n
        )
      ]
    }
  };
}, kn = {
  and: "i",
  company: "компаніям",
  companies: "компаніям",
  legalName: "Alma Career та компаніям з її групи"
}, fn = (t, n) => {
  const e = { ...kn, ...t }, a = { name: "Назва", description: "Опис", expiration: "Термін Дії" };
  return {
    consentModal: {
      title: e.consentTitle ?? "Цей сайт використовує файли cookie",
      description: `
      ${L(
        "Якщо ми краще зрозуміємо, що вас цікавить, ми покажемо вам точніший контент.",
        e.descriptionIntro
      )}
      <p>
        Натиснувши «Прийняти все», Ви даєте свою згоду
        ${re(e.companyNames.length, e.company, e.companies)}
        ${O(_(e.companyNames, e.legalName), e.and)}
        на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
        Використання файлів Cookies Ви можете змінити в своїх <strong><a href="" data-cc="show-preferencesModal">власних Налаштуваннях</a></strong>.
      </p>`,
      acceptAllBtn: "Прийняти все",
      acceptNecessaryBtn: "Прийняття необхідно"
    },
    preferencesModal: {
      title: "Користувацькі налаштування файлів Cookies",
      acceptAllBtn: "Прийняти все",
      acceptNecessaryBtn: "Прийняття необхідно",
      savePreferencesBtn: "Зберегти налаштування",
      sections: [
        {
          description: `Щоб отримати максимальну віддачу від нашого сайту, найкраще дозволити всі типи файлів Cookies.
            ${e.preferencesModalMoreInfo ?? 'Додаткову інформацію про те, що таке файли Cookies, і як ми з ними працюємо, можна отримати на сторінках <a href="https://www.almacareer.com/gdpr" target="_blank">Політика конфіденційності</a>.'}`
        },
        ...E(
          a,
          {
            necessary: {
              title: "Технічно необхідні файли Cookies",
              description: "Ці файли Cookies необхідні для правильного функціонування нашого сайту, тому вимкнути їх неможливо. Без них було б неможливо відображати на нашому сайті його контент, або не працював би вхід на сайт."
            },
            analytics: {
              title: "Аналітичні файли Cookies",
              description: "Ми використовуємо їх для відстеження того, скільки людей відвідують наш веб-сайт і як вони ним користуються. Завдяки цьому ми можемо постійно покращувати сайт та інші сервіси."
            },
            functionality: {
              title: "Функціональні файли Cookies",
              description: "Ці файли Cookies роблять наш сайт ще більш ефективним і покращують його роботу. Наприклад, вони дозволяють нам використовувати чат, щоб швидко і легко відповідати на ваші запитання."
            },
            ad: {
              title: "Маркетингові файли Cookies",
              description: "За допомогою цих файлів Cookies ми можемо оцінити, наскільки ефективна наша реклама і цільові пропозиції наших послуг. Маркетингові файли Cookies дозволяють нам інформувати Вас в Інтернеті про новини, які можуть вас зацікавити."
            },
            personalization: {
              title: "Персоналізовані файли Cookies",
              description: "Наші сервіси працюють краще, коли ми можемо адаптувати їх до конкретного користувача. Дозволивши персоналізовані файли Cookies, ви збільшуєте ймовірність того, що знайдете потрібний контент."
            }
          },
          n
        )
      ]
    }
  };
}, gn = {
  bs: _t,
  cs: Et,
  de: Ht,
  en: Ft,
  es: qt,
  et: Rt,
  fr: Ut,
  hr: Wt,
  hu: Gt,
  lt: Jt,
  lv: Qt,
  mk: an,
  pl: tn,
  pt: nn,
  ro: on,
  ru: rn,
  sk: ln,
  sl: un,
  sr: mn,
  uk: fn
}, hn = (t, n, e) => Object.entries(gn).reduce(
  (a, [r, s]) => (a[r] = s({ companyNames: t, ...n[r] }, e[r] || {}), a),
  {}
), xa = (t) => {
  window.dataLayer = window.dataLayer || [], window.dataLayer.push({
    event: "CookieConsent-update",
    "CookieConsent.necessary": t.categories.includes(U.NECESSARY),
    "CookieConsent.analytics": t.categories.includes(U.ANALYTICS),
    "CookieConsent.ad": t.categories.includes(U.AD),
    "CookieConsent.functionality": t.categories.includes(U.FUNCTIONALITY),
    "CookieConsent.personalization": t.categories.includes(U.PERSONALIZATION),
    "CookieConsent.revision": t.revision
  });
}, Da = () => {
}, vn = () => {
}, yn = {
  defaultLang: "cs",
  autodetectLang: !0,
  consentCollectorApiUrl: "https://consents.almacareer.tech/acl-lda/local-data-acceptation-data-entries",
  onFirstConsent: Da,
  onConsent: Da,
  onChange: vn,
  companyNames: ["Alma Career"],
  displayMode: Ee.FORCE,
  translationOverrides: {},
  cookieTable: {},
  config: {}
}, jn = (t, n) => {
  if (!t || t === "" || typeof t != "string")
    throw new Error("serviceName is a required parameter and must be a string");
  const e = { ...yn, ...n }, {
    defaultLang: a,
    autodetectLang: r,
    consentCollectorApiUrl: s,
    onFirstConsent: k,
    onConsent: o,
    onChange: c,
    companyNames: d,
    displayMode: g,
    translationOverrides: p,
    cookieTable: m,
    config: j
  } = e, l = "almacareer_ccm", u = At, b = ({ cookie: z }) => {
    const A = u.getCookie("data");
    (A == null || !("uid" in A)) && u.setCookieData({
      value: { serviceName: t, uid: Mt() },
      mode: "update"
    }), xa(u.getCookie()), s !== null && Na(s, u.getCookie(), u.getUserPreferences()), k({ cookieConsent: u, cookie: u.getCookie() });
  }, w = ({ cookie: z }) => {
    o({ cookieConsent: u, cookie: z });
  }, C = ({
    cookie: z,
    changedCategories: A,
    changedServices: I
  }) => {
    const y = u.getUserPreferences(), $ = {
      accepted: y.acceptedCategories,
      rejected: y.rejectedCategories,
      changed: A
    };
    xa(z), s !== null && Na(s, z, y), c({ cookieConsent: u, cookie: z, categories: $ });
  }, f = ct({})(
    {
      autoShow: !0,
      // Show the cookie consent banner as soon as possible
      cookie: {
        name: l,
        // Predefined cookie name. Do not override.
        expiresAfterDays: (z) => z === "necessary" ? 60 : 365
      },
      language: {
        default: a,
        // Default language used when auto_language is null (or when autodetect failed)
        autoDetect: r ? "document" : void 0,
        // Autodetect language based on `<html lang="...">` value (with "document" value)
        translations: hn(d, p, m)
      },
      disablePageInteraction: g === Ee.FORCE,
      hideFromBots: !0,
      // To be hidden also from Selenium
      manageScriptTags: !0,
      // Manage third-party scripts loaded using <script>
      guiOptions: {
        consentModal: {
          layout: g === Ee.FORCE ? "box" : "bar",
          position: g === Ee.FORCE ? "middle center" : "bottom",
          flipButtons: !0,
          equalWeightButtons: !1
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: !1
        }
      },
      onConsent: w,
      onFirstConsent: b,
      onChange: C,
      categories: {
        necessary: {
          enabled: !0,
          readOnly: !0
        },
        ad: {},
        analytics: {},
        functionality: {},
        personalization: {}
      }
    },
    j
  );
  return u.run(f), u;
};
export {
  At as CookieConsent,
  U as CookieConsentCategory,
  jn as CookieConsentManager,
  Ee as DisplayMode
};
//# sourceMappingURL=CookieConsentManager.js.map
