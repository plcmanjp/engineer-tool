/* Decimal input and arithmetic contract shared by the calculator mockups. */
(function (global) {
  'use strict';
  var D = Decimal.clone({ precision: 50, rounding: Decimal.ROUND_HALF_UP });
  var PI = new D('3.14159265358979323846264338327950288419716939937510582097494459230781');
  function digits(text) {
    return text.replace(/\p{Nd}/gu, function (ch) {
      var cp = ch.codePointAt(0), first = cp;
      while (first > 0 && /\p{Nd}/u.test(String.fromCodePoint(first - 1))) first--;
      return String((cp - first) % 10);
    });
  }
  function parts(text) {
    var t = digits(String(text == null ? '' : text).trim());
    var m = /^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))(?:[eE]([+-]?\d+))?$/.exec(t);
    if (!m) return null;
    var fraction = m[3] == null ? (m[4] || '') : m[3];
    var coefficient = ((m[2] || '') + fraction).replace(/^0+/, '') || '0';
    var exponent;
    try { exponent = BigInt(m[5] || '0'); } catch (_) { return null; }
    var scale = BigInt(fraction.length) - exponent;
    if (scale < -1000n || scale > 1000n || coefficient.length > 400) return null;
    return { text: t, coefficient: coefficient, negative: m[1] === '-', scale: scale };
  }
  function parse(text) {
    var p = parts(text);
    return p ? new D(p.text) : null;
  }
  function fraction(text) {
    var p = parts(text);
    if (!p) return null;
    var n = BigInt(p.coefficient) * (p.negative ? -1n : 1n);
    return p.scale >= 0n ? [n, 10n ** p.scale] : [n * 10n ** (-p.scale), 1n];
  }
  function long(text) {
    var t = String(text == null ? '' : text).trim();
    if (!/^[+-]?\d+$/.test(t)) return null;
    var v = BigInt(t);
    return v >= -9223372036854775808n && v <= 9223372036854775807n ? v : null;
  }
  function fixed(value, places) {
    var rounded = value.toDecimalPlaces(places, Decimal.ROUND_HALF_UP);
    return rounded.isZero() ? new D(0).toFixed(places) : rounded.toFixed(places);
  }
  function plain(value, places) {
    var s = fixed(value, places);
    return s.indexOf('.') < 0 ? s : s.replace(/0+$/, '').replace(/\.$/, '');
  }
  function exactProduct(a, b) {
    var Exact = Decimal.clone({ precision: a.sd(true) + b.sd(true) + 1, rounding: Decimal.ROUND_HALF_UP });
    return new D(new Exact(a.toString()).times(b.toString()).toString());
  }
  // Use a converged MC50 root; the app's fixed 100-step root fails at extreme scales.
  function circleSqrt(value) { return value.sqrt(); }
  global.CalcDecimal = { D: D, PI: PI, parse: parse, fraction: fraction, long: long,
    fixed: fixed, plain: plain, exactProduct: exactProduct, circleSqrt: circleSqrt };
})(globalThis);
