(() => {
  const C = window.CONTENT, d = document, K = 'np-lang';
  const $ = s => d.querySelectorAll(s);
  const short = v => v.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const href = {
    email: v => 'mailto:' + v,
    phone: v => 'tel:' + v.replace(/[^\d+]/g, ''),
    linkedin: v => v, github: v => v, instagram: v => v, site: v => v
  };
  const label = { linkedin: 'LinkedIn', github: 'GitHub', instagram: 'Instagram' };

  const link = (k, a, text) => {
    a.href = href[k](C[k]);
    if (!a.dataset.keep) a.textContent = text ?? label[k] ?? (k === 'site' ? short(C[k]) : C[k]);
    if (a.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
  };

  $('[data-c]').forEach(a => C[a.dataset.c] ? link(a.dataset.c, a) : (a.hidden = true));

  const line = d.getElementById('contactLine');
  if (line) ['email', 'phone', 'city', 'linkedin', 'instagram', 'github'].filter(k => C[k]).forEach((k, i) => {
    if (k === 'city') return line.append(C.city);
    const a = d.createElement('a');
    link(k, a, href[k](C[k]).startsWith('http') ? short(C[k]) : C[k]);
    line.append(a);
  });

  $('img[data-photo]').forEach(img => {
    const box = img.parentElement;
    const fail = () => box.hasAttribute('data-hide') ? box.remove() : img.remove();
    if (!C.photo) return fail();
    img.onerror = fail;
    img.alt = C.name;
    img.src = C.photo;
  });

  const pick = () => {
    let s; try { s = localStorage.getItem(K); } catch (e) {}
    return [new URLSearchParams(location.search).get('lang'), s].find(l => l === 'fi' || l === 'en') || 'fi';
  };

  const set = l => {
    const t = C[l];
    d.documentElement.lang = l;
    $('[data-i]').forEach(e => e.textContent = t[e.dataset.i] ?? '');
    $('[data-ia]').forEach(e => e.setAttribute('aria-label', t[e.dataset.ia] ?? ''));
    $('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    $('[data-cv]').forEach(a => a.href = 'cv.html?lang=' + l);
    $('[data-home]').forEach(a => a.href = './?lang=' + l);
    d.title = t[d.body.dataset.title] || d.title;
    try { localStorage.setItem(K, l); } catch (e) {}
  };

  $('[data-lang]').forEach(b => b.onclick = () => set(b.dataset.lang));
  $('[data-print]').forEach(b => b.onclick = () => print());
  $('[data-year]').forEach(e => e.textContent = new Date().getFullYear());
  set(pick());
})();
