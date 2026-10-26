"use client";

const camps = [
  {
    title: "Siyerden Ahlâka",
    subtitle: "Hayata Yansımalar",
    description: "Hz. Peygamber’in (sas) güzel ahlâkını 29 başlık altında ele alan; ders notları ve değerlendirme sınavlarıyla desteklenen kapsamlı kamp.",
    status: "Tamamlandı",
    details: ["29 Ders", "14 Deneme", "Toplu PDF"],
    url: "https://siyerdenahlaka.vercel.app/",
    theme: "emerald",
  },
  {
    title: "İmâm Nevevî Kampı",
    subtitle: "Büyüklerin Ayak İzleri",
    description: "İmâm Nevevî’nin ilim, ihlâs ve takva mirasını tanıtan; kamp dersleri, sınavlar ve Riyâzü’s-Sâlihîn okuma takvimi içeren çalışma.",
    status: "Kamp Arşivi",
    details: ["Kamp Dersleri", "Sınavlar", "Okuma Takvimi"],
    url: "https://imamnevevikampi.vercel.app/",
    theme: "gold",
  },
];

const features = [
  ["📚", "Düzenli Dersler", "Ders özetleri, önemli kavramlar ve altın bilgiler."],
  ["📝", "Test ve Denemeler", "Pekiştirme testleri ve genel değerlendirmeler."],
  ["📈", "İlerleme Takibi", "Çalışmalarını düzenli biçimde takip et."],
  ["📱", "Her Cihazda", "Telefon, tablet ve bilgisayarda rahat kullanım."],
];

export default function HomePage() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <>
      <header className="header">
        <div className="container headerIn">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="logo">س</span>
            <span><b>Siyer Kampları</b><small>Gönüllü Eğitim Platformu</small></span>
          </button>
          <nav className="nav">
            <button onClick={() => go("kamplar")}>Kamplar</button>
            <button onClick={() => go("ozellikler")}>Platform</button>
            <button onClick={() => go("hakkimizda")}>Hakkımızda</button>
          </nav>
          <button className="topCta" onClick={() => go("kamplar")}>Kampları Keşfet</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="pattern" />
          <div className="container heroGrid">
            <div className="heroText">
              <span className="badge">● İlimden hayata uzanan yolculuk</span>
              <h1>Öğren,<em>hayatına taşı.</em></h1>
              <p>Siyer, hadis ve ahlâk eksenli eğitim kamplarını; ders notları, altın bilgiler, testler ve değerlendirme sınavlarıyla tek çatı altında buluşturuyoruz.</p>
              <div className="heroActions">
                <button className="primary" onClick={() => go("kamplar")}>Kampları incele →</button>
                <button className="secondary" onClick={() => go("hakkimizda")}>Platformu tanı</button>
              </div>
              <div className="ticks"><span>✓ Tamamen ücretsiz</span><span>✓ Mobil uyumlu</span><span>✓ Düzenli içerik</span></div>
            </div>
            <div className="visual">
              <div className="orbit one" /><div className="orbit two" />
              <div className="book">
                <div className="bookHead"><span>س</span><b>SİYER KAMPLARI</b></div>
                <div className="star">✦</div>
                <h2>İlimden<br/>Ahlâka</h2>
                <p>Okumak, anlamak ve öğrendiğini hayata taşımak için...</p>
                <small>GÖNÜLLÜ PLATFORMU</small>
              </div>
              <div className="float f1">📖 <span><b>Ders Notları</b><small>Özet ve altın bilgiler</small></span></div>
              <div className="float f2">✓ <span><b>İlerleme Takibi</b><small>Kaldığın yerden devam</small></span></div>
            </div>
          </div>
        </section>

        <section className="stats"><div className="container statsGrid">
          <div><b>2</b><span>Hazır Kamp</span></div><div><b>29+</b><span>Ders İçeriği</span></div><div><b>14+</b><span>Değerlendirme</span></div><div><b>Ücretsiz</b><span>Kesintisiz Erişim</span></div>
        </div></section>

        <section className="section" id="kamplar">
          <div className="container">
            <div className="heading"><span>EĞİTİM KAMPLARI</span><h2>İlim yolculuğuna başla</h2><p>Tamamlanan ve devam eden çalışmalarımıza tek bir merkezden ulaş.</p></div>
            <div className="campGrid">
              {camps.map((camp) => (
                <article className="camp" key={camp.title}>
                  <div className={`cover ${camp.theme}`}><span className="status">{camp.status}</span><div><small>{camp.subtitle}</small><h3>{camp.title}</h3><i>Gönüllü Platformu</i></div></div>
                  <div className="campBody"><p>{camp.description}</p><div className="chips">{camp.details.map(x => <span key={x}>{x}</span>)}</div><button className="campBtn" onClick={() => open(camp.url)}>Kampı incele <span>↗</span></button></div>
                </article>
              ))}
              <article className="soon"><div>＋</div><span>YENİ ÇALIŞMALAR</span><h3>Yeni kamplar yakında</h3><p>Yeni kamplar; dersleri, altın bilgileri, testleri ve denemeleriyle doğrudan bu platformda yer alacak.</p><b>Hazırlanıyor</b></article>
            </div>
          </div>
        </section>

        <section className="features" id="ozellikler"><div className="container">
          <div className="heading light"><span>PLATFORM ÖZELLİKLERİ</span><h2>Kalıcı öğrenme için tasarlandı</h2><p>Yalnızca içerik sunan değil, öğrenme sürecini destekleyen düzenli bir ortam.</p></div>
          <div className="featureGrid">{features.map(([icon,title,text]) => <article key={title}><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="section about" id="hakkimizda"><div className="container aboutGrid">
          <div className="aboutVisual"><div><span>اِقْرَأْ</span><h3>Oku, anla ve yaşa</h3><p>Bilginin davranışa, öğrenmenin güzel ahlâka dönüşmesi için.</p></div></div>
          <div className="aboutText"><span>HAKKIMIZDA</span><h2>Bir gönüllülük ve öğrenme yolculuğu</h2><p>Siyer Kampları; siyer, hadis, ahlâk ve İslami ilimler alanındaki eğitim çalışmalarını düzenli, anlaşılır ve erişilebilir hâle getirmek amacıyla hazırlanmıştır.</p><p>Her kampın kendine ait dersleri, özetleri, önemli bilgileri, testleri ve değerlendirme sınavları bulunur.</p><ul><li>Güvenilir ve düzenli içerik yapısı</li><li>Sade ve dikkat dağıtmayan tasarım</li><li>Telefon ve bilgisayarda kolay kullanım</li></ul></div>
        </div></section>

        <section className="cta"><div className="container ctaBox"><div><span>YOLCULUĞA HAZIR MISIN?</span><h2>İlk kampını bugün keşfet</h2><p>Öğrenmeye başla ve öğrendiklerini hayatına taşı.</p></div><button onClick={() => go("kamplar")}>Kamplara göz at →</button></div></section>
      </main>

      <footer><div className="container footerGrid"><div><div className="brand foot"><span className="logo">س</span><span><b>Siyer Kampları</b><small>Gönüllü Eğitim Platformu</small></span></div><p>Faydalı olma niyetiyle hazırlanmış gönüllü eğitim platformu.</p></div><div><b>Hızlı Bağlantılar</b><button onClick={() => go("kamplar")}>Kamplar</button><button onClick={() => go("ozellikler")}>Platform</button><button onClick={() => go("hakkimizda")}>Hakkımızda</button></div><div><b>İçerikler</b><span>Ders Notları</span><span>Test ve Denemeler</span><span>İlerleme Takibi</span></div></div><div className="container copyright"><span>© 2026 Siyer Kampları</span><span>İlimden hayata uzanan yolculuk</span></div></footer>

      <style jsx global>{`
        :root{--green:#105746;--dark:#082f27;--cream:#f8f4e9;--gold:#d7b75f;--text:#173d34;--muted:#69766f;--border:#e0d6c0}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif}button{font:inherit;border:0;cursor:pointer}.container{width:min(1180px,calc(100% - 40px));margin:auto}.header{position:sticky;top:0;z-index:20;background:#f8f4e9ee;backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}.headerIn{min-height:74px;display:flex;align-items:center;gap:28px}.brand{display:flex;align-items:center;gap:11px;background:transparent;color:var(--text);text-align:left}.brand>span:last-child{display:grid}.brand small{font-size:10px;color:var(--muted)}.logo{width:42px;height:42px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(145deg,#176b55,#0b3b31);color:#fff;font:23px Georgia;box-shadow:0 9px 20px #0b3b3130}.nav{display:flex;gap:25px;margin-left:auto}.nav button{background:transparent;color:#405c54;font-weight:750;font-size:13px}.topCta,.primary,.ctaBox button{background:var(--gold);color:var(--dark);font-weight:850;border-radius:12px;padding:13px 17px}.hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#0a382f,#0e5b48 65%,#176b55);color:#fff}.pattern{position:absolute;inset:0;opacity:.05;background-image:linear-gradient(30deg,#fff 1px,transparent 1px),linear-gradient(150deg,#fff 1px,transparent 1px);background-size:40px 40px}.heroGrid{position:relative;min-height:640px;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:60px;padding:60px 0}.badge{display:inline-flex;padding:8px 12px;border-radius:99px;border:1px solid #ffffff30;background:#ffffff0d;color:#f2e4b8;font-size:12px;font-weight:800}.hero h1{margin:24px 0 18px;font:600 clamp(52px,6vw,82px)/.98 Georgia;letter-spacing:-.045em}.hero h1 em{display:block;color:#f4e4ad}.heroText>p{max-width:650px;color:#ffffffcc;font-size:17px;line-height:1.75}.heroActions{display:flex;gap:11px;margin-top:28px}.primary,.secondary{min-height:49px;padding:0 20px}.secondary{border:1px solid #ffffff50;border-radius:12px;background:#ffffff0d;color:white;font-weight:800}.ticks{display:flex;gap:17px;flex-wrap:wrap;margin-top:23px;color:#ffffffa8;font-size:12px}.visual{min-height:470px;position:relative;display:grid;place-items:center}.orbit{position:absolute;border:1px solid #ffffff18;border-radius:50%}.orbit.one{width:440px;height:440px}.orbit.two{width:350px;height:350px}.book{position:relative;z-index:2;width:300px;min-height:390px;padding:32px;border-radius:12px 34px 34px 12px;background:linear-gradient(145deg,#f4e7c1,#cdb36c);color:var(--dark);box-shadow:-20px 28px 65px #0005;transform:rotate(3deg)}.bookHead{display:flex;justify-content:space-between;align-items:center;font-size:10px}.bookHead span{width:35px;height:35px;display:grid;place-items:center;background:var(--green);color:white;border-radius:11px}.star{margin:48px 0 12px;font-size:26px}.book h2{margin:0;font:39px/1 Georgia}.book p{font:15px/1.6 Georgia;color:#4e5c47}.book>small{display:block;margin-top:35px;font-weight:900;letter-spacing:.1em}.float{position:absolute;z-index:3;display:flex;gap:10px;align-items:center;background:#082f27e8;border:1px solid #ffffff20;border-radius:14px;padding:13px 15px;box-shadow:0 18px 40px #0004}.float span{display:grid}.float small{font-size:9px;color:#ffffff9c}.float b{font-size:11px}.f1{top:65px;left:-5px}.f2{right:-10px;bottom:72px}.stats{padding:24px 0}.statsGrid{display:grid;grid-template-columns:repeat(4,1fr)}.statsGrid div{text-align:center;padding:18px;border-right:1px solid var(--border)}.statsGrid div:last-child{border:0}.stats b{display:block;font:29px Georgia;color:var(--green)}.stats span{font-size:11px;color:var(--muted);font-weight:750}.section{padding:85px 0}.heading{max-width:700px;text-align:center;margin:0 auto 38px}.heading>span,.aboutText>span,.ctaBox span,.soon>span{font-size:10px;font-weight:900;letter-spacing:.13em;color:#176b55}.heading h2,.aboutText h2,.ctaBox h2{font:clamp(36px,4vw,50px)/1.05 Georgia;margin:10px 0}.heading p,.aboutText p{color:var(--muted);line-height:1.7}.campGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:23px}.camp{overflow:hidden;border:1px solid var(--border);border-radius:23px;background:white;box-shadow:0 20px 60px #092f2814}.cover{min-height:245px;padding:25px;color:#fff;display:flex;flex-direction:column;justify-content:space-between}.emerald{background:radial-gradient(circle at 90% 0,#2e8c70,transparent 40%),linear-gradient(135deg,#0b4639,#12644f)}.gold{background:radial-gradient(circle at 90% 0,#c6a64e,transparent 40%),linear-gradient(135deg,#493a19,#967328)}.status{align-self:flex-start;padding:7px 10px;border:1px solid #ffffff40;border-radius:99px;background:#ffffff18;font-size:10px;font-weight:850}.cover small{font-weight:800;letter-spacing:.08em;color:#ffffffb5}.cover h3{font:clamp(32px,4vw,45px)/1 Georgia;margin:8px 0}.cover i{font-size:11px;color:#ffffffad}.campBody{padding:25px}.campBody>p{min-height:76px;color:var(--muted);line-height:1.7;font-size:13px}.chips{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.chips span{padding:7px 9px;border-radius:8px;background:#f2eee5;font-size:10px;font-weight:850}.campBtn{width:100%;display:flex;justify-content:space-between;padding:14px 16px;border-radius:11px;background:var(--green);color:white;font-weight:850}.soon{grid-column:1/-1;min-height:270px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:35px;border:1px dashed #cbbf9f;border-radius:23px;background:radial-gradient(circle,#fff,#f3ebdb)}.soon>div{width:53px;height:53px;display:grid;place-items:center;border-radius:16px;background:var(--green);color:white;font-size:26px;margin-bottom:17px}.soon h3{font:29px Georgia;margin:8px}.soon p{max-width:620px;color:var(--muted);line-height:1.7}.soon b{padding:8px 12px;border-radius:9px;background:#e5efe8;color:var(--green);font-size:11px}.features{padding:85px 0;background:var(--dark);color:white}.light>span{color:var(--gold)}.light p{color:#ffffff9d}.featureGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.featureGrid article{padding:24px;border:1px solid #ffffff16;border-radius:18px;background:#ffffff0a}.featureGrid article>div{font-size:23px}.featureGrid h3{font-size:16px}.featureGrid p{color:#ffffff9d;font-size:12px;line-height:1.7}.about{background:white}.aboutGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:75px;align-items:center}.aboutVisual{min-height:420px;display:grid;place-items:center;border-radius:30px;background:radial-gradient(circle at 100% 0,#e3ca7e,transparent 35%),linear-gradient(145deg,#0c493c,#176d57)}.aboutVisual>div{width:min(330px,calc(100% - 40px));padding:40px 32px;border:1px solid #ffffff32;border-radius:21px;background:#ffffff12;color:white}.aboutVisual span{font:43px Georgia;color:#f3e4ad}.aboutVisual h3{font:28px Georgia;margin:25px 0 8px}.aboutVisual p{color:#ffffffad;line-height:1.7}.aboutText ul{padding:0;list-style:none}.aboutText li{margin:12px 0;font-weight:700;color:#405c54}.aboutText li:before{content:"✓ ";color:#176b55}.cta{padding:60px 0}.ctaBox{display:flex;justify-content:space-between;align-items:center;gap:30px;padding:44px 48px;border-radius:26px;background:radial-gradient(circle at 90% 0,#9b7d34,transparent 35%),linear-gradient(135deg,var(--dark),#176b55);color:white}.ctaBox>div>span{color:var(--gold)}.ctaBox p{color:#ffffffaa}.ctaBox button{min-width:180px}footer{padding:55px 0 22px;background:#06271f;color:white}.footerGrid{display:grid;grid-template-columns:1.7fr 1fr 1fr;gap:50px}.foot{color:white}.footerGrid>div{display:grid;align-content:start;gap:10px}.footerGrid p,.footerGrid span,.footerGrid button{color:#ffffff82;font-size:12px}.footerGrid button{text-align:left;background:transparent;padding:0}.copyright{display:flex;justify-content:space-between;margin-top:42px;padding-top:20px;border-top:1px solid #ffffff15;color:#ffffff60;font-size:10px}@media(max-width:900px){.nav{display:none}.heroGrid{grid-template-columns:1fr;text-align:center}.heroText>p{margin:auto}.heroActions,.ticks{justify-content:center}.campGrid{grid-template-columns:1fr}.featureGrid{grid-template-columns:repeat(2,1fr)}.aboutGrid{grid-template-columns:1fr}.footerGrid{grid-template-columns:1.5fr 1fr 1fr}}@media(max-width:650px){.container{width:min(100% - 28px,1180px)}.header{position:relative}.headerIn{min-height:67px}.brand small{display:none}.topCta{font-size:11px;padding:10px}.heroGrid{padding:55px 0 80px}.hero h1{font-size:49px}.heroText>p{font-size:15px}.heroActions{display:grid}.primary,.secondary{width:100%}.visual{min-height:400px}.book{width:245px;min-height:330px;padding:25px}.book h2{font-size:31px}.orbit.one{width:330px;height:330px}.orbit.two{width:275px;height:275px}.float{transform:scale(.82)}.f1{left:-28px}.f2{right:-28px}.statsGrid{grid-template-columns:repeat(2,1fr)}.statsGrid div{border:0;border-bottom:1px solid var(--border)}.section,.features{padding:65px 0}.featureGrid{grid-template-columns:1fr}.soon{grid-column:auto}.aboutVisual{min-height:370px}.ctaBox{flex-direction:column;text-align:center;padding:34px 24px}.ctaBox button{width:100%}.footerGrid{grid-template-columns:1fr;gap:30px}.copyright{flex-direction:column;align-items:center;gap:8px}.campBody>p{min-height:auto}}
      `}</style>
    </>
  );
}
