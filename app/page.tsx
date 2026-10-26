"use client";

type Camp = {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  statusType: "active" | "completed" | "soon";
  stats: string[];
  href: string;
  external: boolean;
  theme: "emerald" | "gold";
};

const camps: Camp[] = [
  {
    title: "Siyerden Ahlâka",
    subtitle: "Hayata Yansımalar",
    description:
      "Hz. Peygamber’in (sas) güzel ahlâkını 29 başlık altında ele alan; ders notları ve değerlendirme sınavlarıyla desteklenen kapsamlı bir gelişim kampı.",
    status: "Tamamlandı",
    statusType: "completed",
    stats: ["29 Ders", "14 Deneme", "Toplu PDF"],
    href: "https://siyerdenahlaka.vercel.app/",
    external: true,
    theme: "emerald",
  },
  {
    title: "İmâm Nevevî Kampı",
    subtitle: "Büyüklerin Ayak İzleri",
    description:
      "İmâm Nevevî’nin ilim, ihlâs ve takva mirasını tanıtan; kamp dersleri, değerlendirme sınavları ve Riyâzü’s-Sâlihîn okuma takvimiyle desteklenen çalışma.",
    status: "Kamp Arşivi",
    statusType: "active",
    stats: ["Kamp Dersleri", "Sınavlar", "Okuma Takvimi"],
    href: "https://imamnevevikampi.vercel.app/",
    external: true,
    theme: "gold",
  },
];

const features = [
  {
    icon: "📚",
    title: "Düzenli Dersler",
    description:
      "Ders özetleri, önemli kavramlar ve akılda kalıcı altın bilgiler.",
  },
  {
    icon: "📝",
    title: "Test ve Denemeler",
    description:
      "Her dersin ardından pekiştirme testleri ve genel değerlendirme sınavları.",
  },
  {
    icon: "📈",
    title: "İlerleme Takibi",
    description:
      "Tamamlanan dersleri, testleri ve kamp ilerlemesini düzenli takip etme.",
  },
  {
    icon: "📱",
    title: "Her Cihazda",
    description:
      "Telefon, tablet ve bilgisayarlarda hızlı ve kullanışlı bir deneyim.",
  },
];

export default function HomePage() {
  function scrollToCamps() {
    document
      .getElementById("kamplar")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="siteHeader">
        <div className="container headerInner">
          <button
            className="logoButton"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="logoMark">س</span>

            <span className="logoText">
              <strong>Siyer Kampları</strong>
              <small>Gönüllü Eğitim Platformu</small>
            </span>
          </button>

          <nav className="desktopMenu" aria-label="Ana menü">
            #kamplarKamplar</a>
            #neler-sunuyoruzNeler Sunuyoruz?</a>
            #hakkimizdaHakkımızda</a>
          </nav>

          <button
            className="headerButton"
            type="button"
            onClick={scrollToCamps}
          >
            Kampları Keşfet
          </button>
        </div>
      </header>

      <main>
        <section className="heroSection">
          <div className="heroGlow heroGlowOne" />
          <div className="heroGlow heroGlowTwo" />
          <div className="pattern" />

          <div className="container heroGrid">
            <div className="heroContent">
              <span className="heroBadge">
                <span className="badgeDot" />
                İlimden hayata uzanan yolculuk
              </span>

              <h1>
                Öğren,
                <span> hayatına taşı.</span>
              </h1>

              <p className="heroDescription">
                Siyer, hadis ve ahlâk eksenli eğitim kamplarını; ders
                notları, altın bilgiler, testler ve değerlendirme
                sınavlarıyla tek çatı altında buluşturuyoruz.
              </p>

              <div className="heroButtons">
                <button
                  className="primaryButton"
                  type="button"
                  onClick={scrollToCamps}
                >
                  Kampları incele
                  <span aria-hidden="true">→</span>
                </button>

                #hakkimizda
                  Platformu tanı
                </a>
              </div>

              <div className="heroHighlights">
                <span>✓ Tamamen ücretsiz</span>
                <span>✓ Mobil uyumlu</span>
                <span>✓ Düzenli içerik</span>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <div className="visualCircle visualCircleLarge" />
              <div className="visualCircle visualCircleSmall" />

              <div className="bookCard">
                <div className="bookTop">
                  <span className="bookLogo">س</span>
                  <span className="bookLabel">Siyer Kampları</span>
                </div>

                <div className="bookOrnament">✦</div>

                <h2>İlimden Ahlâka</h2>

                <p>
                  Okumak, anlamak ve öğrendiğini hayata taşımak için...
                </p>

                <div className="bookLine" />

                <span className="bookFooter">Gönüllü Platformu</span>
              </div>

              <div className="floatingCard floatingCardOne">
                <span>📖</span>
                <div>
                  <strong>Ders Notları</strong>
                  <small>Özet ve altın bilgiler</small>
                </div>
              </div>

              <div className="floatingCard floatingCardTwo">
                <span>✓</span>
                <div>
                  <strong>İlerleme Takibi</strong>
                  <small>Kaldığın yerden devam et</small>
                </div>
              </div>
            </div>
          </div>

          <div className="heroWave" />
        </section>

        <section className="statisticsSection">
          <div className="container statisticsGrid">
            <div className="statistic">
              <strong>2</strong>
              <span>Hazır Kamp</span>
            </div>

            <div className="statistic">
              <strong>29+</strong>
              <span>Ders İçeriği</span>
            </div>

            <div className="statistic">
              <strong>14+</strong>
              <span>Değerlendirme Sınavı</span>
            </div>

            <div className="statistic">
              <strong>Ücretsiz</strong>
              <span>Kesintisiz Erişim</span>
            </div>
          </div>
        </section>

        <section className="campsSection" id="kamplar">
          <div className="container">
            <div className="sectionHeading">
              <span className="sectionLabel">EĞİTİM KAMPLARI</span>

              <h2>İlim yolculuğuna başla</h2>

              <p>
                Tamamlanan ve devam eden çalışmalarımıza tek bir
                merkezden ulaş.
              </p>
            </div>

            <div className="campGrid">
              {camps.map((camp) => (
                <article className="campCard" key={camp.title}>
                  <div className={`campCover ${camp.theme}`}>
                    <div className="campPattern" />

                    <span
                      className={`statusBadge ${camp.statusType}`}
                    >
                      {camp.status}
                    </span>

                    <div className="campCoverContent">
                      <span className="campSubtitle">
                        {camp.subtitle}
                      </span>

                      <h3>{camp.title}</h3>

                      <span className="volunteerText">
                        Gönüllü Platformu
                      </span>
                    </div>
                  </div>

                  <div className="campBody">
                    <p>{camp.description}</p>

                    <div className="campStats">
                      {camp.stats.map((stat) => (
                        <span key={stat}>{stat}</span>
                      ))}
                    </div>

                    {camp.href}
                      Kampı incele
                      <span aria-hidden="true">
                        {camp.external ? "↗" : "→"}
                      </span>
                    </a>
                  </div>
                </article>
              ))}

              <article className="newCampCard">
                <div className="newCampIcon">＋</div>

                <span className="newCampLabel">YENİ ÇALIŞMALAR</span>

                <h3>Yeni kamplar yakında</h3>

                <p>
                  Bundan sonra hazırlanan kamplar; dersleri, altın
                  bilgileri, testleri ve denemeleriyle doğrudan bu
                  platformda yer alacak.
                </p>

                <span className="comingSoonButton">
                  Hazırlanıyor
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="featuresSection" id="neler-sunuyoruz">
          <div className="container">
            <div className="sectionHeading lightHeading">
              <span className="sectionLabel">PLATFORM ÖZELLİKLERİ</span>

              <h2>Kalıcı öğrenme için tasarlandı</h2>

              <p>
                Yalnızca içerik sunan değil, öğrenme sürecini
                destekleyen düzenli bir eğitim ortamı.
              </p>
            </div>

            <div className="featuresGrid">
              {features.map((feature) => (
                <article
                  className="featureCard"
                  key={feature.title}
                >
                  <div className="featureIcon">{feature.icon}</div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="aboutSection" id="hakkimizda">
          <div className="container aboutGrid">
            <div className="aboutVisual">
              <div className="aboutMainCard">
                <span className="aboutArabic">اِقْرَأْ</span>
                <strong>Oku, anla ve yaşa</strong>
                <p>
                  Bilginin davranışa, öğrenmenin güzel ahlâka
                  dönüşmesi için.
                </p>
              </div>

              <div className="aboutSmallCard">
                <span>✦</span>
                <strong>Faydalı ilim</strong>
              </div>
            </div>

            <div className="aboutContent">
              <span className="sectionLabel">HAKKIMIZDA</span>

              <h2>Bir gönüllülük ve öğrenme yolculuğu</h2>

              <p>
                Siyer Kampları; siyer, hadis, ahlâk ve İslami ilimler
                alanındaki eğitim çalışmalarını düzenli, anlaşılır ve
                erişilebilir hâle getirmek amacıyla hazırlanmıştır.
              </p>

              <p>
                Her kampın kendi dersleri, özetleri, önemli
                bilgileri, testleri ve değerlendirme sınavları
                bulunur. Kullanıcılar çalışmalarını takip ederek
                kaldıkları yerden devam edebilir.
              </p>

              <div className="aboutPoints">
                <span>✓ Güvenilir ve düzenli içerik yapısı</span>
                <span>✓ Sade ve dikkat dağıtmayan tasarım</span>
                <span>✓ Telefon ve bilgisayarda kolay kullanım</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSection">
          <div className="container ctaCard">
            <div>
              <span className="ctaLabel">YOLCULUĞA HAZIR MISIN?</span>

              <h2>İlk kampını bugün keşfet</h2>

              <p>
                Öğrenmeye başla, ilerlemeni takip et ve öğrendiklerini
                hayatına taşı.
              </p>
            </div>

            <button
              className="ctaButton"
              type="button"
              onClick={scrollToCamps}
            >
              Kamplara göz at
              <span>→</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="footerBrand">
              <span className="logoMark">س</span>

              <div>
                <strong>Siyer Kampları</strong>
                <small>Gönüllü Eğitim Platformu</small>
              </div>
            </div>

            <p>
              Faydalı olma niyetiyle hazırlanmış gönüllü eğitim
              platformu.
            </p>
          </div>

          <div className="footerLinks">
            <strong>Hızlı Bağlantılar</strong>
            #kamplarKamplar</a>
            #neler-sunuyoruzPlatform</a>
            #hakkimizdaHakkımızda</a>
          </div>

          <div className="footerLinks">
            <strong>Platform</strong>
            <span>Ders Notları</span>
            <span>Test ve Denemeler</span>
            <span>İlerleme Takibi</span>
          </div>
        </div>

        <div className="container footerBottom">
          <span>© 2026 Siyer Kampları</span>
          <span>İlimden hayata uzanan yolculuk</span>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --green-950: #092f28;
          --green-900: #0e4338;
          --green-800: #115747;
          --green-700: #146b56;
          --green-600: #198167;
          --cream: #f8f4e9;
          --cream-dark: #eee5d1;
          --gold: #d6b65f;
          --gold-light: #f5e7b8;
          --text: #173d34;
          --muted: #68756f;
          --white: #ffffff;
          --border: #ded5c0;
          --shadow: 0 24px 70px rgba(9, 47, 40, 0.1);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--text);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          border: 0;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(222, 213, 192, 0.84);
          background: rgba(248, 244, 233, 0.92);
          backdrop-filter: blur(18px);
        }

        .headerInner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .logoButton {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0;
          color: var(--text);
          background: transparent;
          cursor: pointer;
          text-align: left;
        }

        .logoMark {
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: white;
          background:
            linear-gradient(145deg, var(--green-700), var(--green-900));
          box-shadow: 0 10px 24px rgba(14, 67, 56, 0.22);
          font-family: Georgia, serif;
          font-size: 23px;
        }

        .logoText {
          display: grid;
          gap: 1px;
        }

        .logoText strong {
          font-size: 18px;
        }

        .logoText small {
          color: var(--muted);
          font-size: 11px;
        }

        .desktopMenu {
          display: flex;
          align-items: center;
          gap: 31px;
          margin-left: auto;
        }

        .desktopMenu a {
          position: relative;
          padding: 28px 0;
          color: #3c554e;
          font-size: 14px;
          font-weight: 700;
        }

        .desktopMenu a::after {
          position: absolute;
          right: 0;
          bottom: 19px;
          left: 0;
          height: 2px;
          content: "";
          background: var(--green-700);
          transform: scaleX(0);
          transition: transform 180ms ease;
        }

        .desktopMenu a:hover::after {
          transform: scaleX(1);
        }

        .headerButton {
          padding: 12px 17px;
          border-radius: 12px;
          color: white;
          background: var(--green-800);
          cursor: pointer;
          font-size: 13px;
          font-weight: 800;
        }

        .heroSection {
          position: relative;
          min-height: 660px;
          overflow: hidden;
          color: white;
          background:
            linear-gradient(135deg, #0b3c32 0%, #0e5a48 58%, #176b55 100%);
        }

        .heroGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(10px);
          pointer-events: none;
        }

        .heroGlowOne {
          top: -180px;
          right: -80px;
          width: 530px;
          height: 530px;
          background: rgba(214, 182, 95, 0.14);
        }

        .heroGlowTwo {
          bottom: -260px;
          left: -130px;
          width: 560px;
          height: 560px;
          background: rgba(255, 255, 255, 0.06);
        }

        .pattern,
        .campPattern {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image:
            linear-gradient(30deg, white 1px, transparent 1px),
            linear-gradient(150deg, white 1px, transparent 1px);
          background-size: 38px 38px;
        }

        .heroGrid {
          position: relative;
          z-index: 2;
          min-height: 660px;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          align-items: center;
          gap: 70px;
          padding-top: 60px;
          padding-bottom: 90px;
        }

        .heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          color: #f0e7c7;
          background: rgba(255, 255, 255, 0.07);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
        }

        .badgeDot {
          width: 7px;
          height: 7px;
          border-radius: 99px;
          background: var(--gold);
          box-shadow: 0 0 0 5px rgba(214, 182, 95, 0.12);
        }

        .heroContent h1 {
          max-width: 660px;
          margin: 25px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(50px, 6.2vw, 84px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .heroContent h1 span {
          display: block;
          color: var(--gold-light);
          font-style: italic;
        }

        .heroDescription {
          max-width: 650px;
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          line-height: 1.75;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .primaryButton,
        .secondaryButton {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 0 21px;
          border-radius: 13px;
          cursor: pointer;
          font-weight: 850;
        }

        .primaryButton {
          color: var(--green-950);
          background: var(--gold);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.16);
        }

        .secondaryButton {
          border: 1px solid rgba(255, 255, 255, 0.32);
          color: white;
          background: rgba(255, 255, 255, 0.06);
        }

        .heroHighlights {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          font-weight: 700;
        }

        .heroVisual {
          position: relative;
          min-height: 480px;
          display: grid;
          place-items: center;
        }

        .visualCircle {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
        }

        .visualCircleLarge {
          width: 455px;
          height: 455px;
        }

        .visualCircleSmall {
          width: 365px;
          height: 365px;
        }

        .bookCard {
          position: relative;
          z-index: 2;
          width: 310px;
          min-height: 400px;
          padding: 34px 31px;
          border: 1px solid rgba(255, 255, 255, 0.26);
          border-radius: 12px 35px 35px 12px;
          color: var(--green-950);
          background:
            radial-gradient(circle at 75% 10%, #fff7d9, transparent 32%),
            linear-gradient(145deg, #efe2bd, #ccb26c);
          box-shadow:
            -18px 28px 70px rgba(0, 0, 0, 0.28),
            inset -12px 0 20px rgba(92, 69, 18, 0.09);
          transform: rotate(3deg);
        }

        .bookCard::before {
          position: absolute;
          top: 12px;
          bottom: 12px;
          left: 12px;
          width: 4px;
          border-radius: 99px;
          content: "";
          background: rgba(15, 75, 61, 0.34);
        }

        .bookTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .bookLogo {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: white;
          background: var(--green-800);
        }

        .bookLabel {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .bookOrnament {
          margin: 55px 0 15px;
          color: var(--green-700);
          font-size: 27px;
        }

        .bookCard h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 38px;
          line-height: 1.04;
        }

        .bookCard p {
          margin: 20px 0;
          color: #4e5c47;
          font-family: Georgia, serif;
          font-size: 15px;
          line-height: 1.65;
        }

        .bookLine {
          width: 54px;
          height: 2px;
          margin: 35px 0 13px;
          background: var(--green-700);
        }

        .bookFooter {
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .floatingCard {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          background: rgba(8, 46, 39, 0.84);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(12px);
        }

        .floatingCard > span {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(214, 182, 95, 0.17);
        }

        .floatingCard div {
          display: grid;
          gap: 3px;
        }

        .floatingCard strong {
          font-size: 12px;
        }

        .floatingCard small {
          color: rgba(255, 255, 255, 0.65);
          font-size: 10px;
        }

        .floatingCardOne {
          top: 72px;
          left: -15px;
        }

        .floatingCardTwo {
          right: -14px;
          bottom: 80px;
        }

        .heroWave {
          position: absolute;
          right: -5%;
          bottom: -56px;
          left: -5%;
          height: 105px;
          border-radius: 50% 50% 0 0;
          background: var(--cream);
        }

        .statisticsSection {
          position: relative;
          z-index: 4;
          padding: 26px 0 32px;
        }

        .statisticsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .statistic {
          display: grid;
          gap: 4px;
          padding: 20px;
          border-right: 1px solid var(--border);
          text-align: center;
        }

        .statistic:last-child {
          border-right: 0;
        }

        .statistic strong {
          color: var(--green-800);
          font-family: Georgia, serif;
          font-size: 29px;
        }

        .statistic span {
          color: var(--muted);
          font-size: 12px;
          font-weight: 750;
        }

        .campsSection,
        .aboutSection {
          padding: 90px 0;
        }

        .sectionHeading {
          max-width: 720px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .sectionLabel,
        .ctaLabel,
        .newCampLabel {
          color: var(--green-700);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .sectionHeading h2,
        .aboutContent h2,
        .ctaCard h2 {
          margin: 10px 0 12px;
          font-family: Georgia, serif;
          font-size: clamp(35px, 4vw, 50px);
          line-height: 1.06;
          letter-spacing: -0.025em;
        }

        .sectionHeading p,
        .aboutContent p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .campGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .campCard,
        .newCampCard {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: white;
          box-shadow: var(--shadow);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .campCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(9, 47, 40, 0.16);
        }

        .campCover {
          position: relative;
          min-height: 255px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 27px;
          overflow: hidden;
          color: white;
        }

        .campCover.emerald {
          background:
            radial-gradient(circle at 85% 0%, #2a8a6d, transparent 42%),
            linear-gradient(135deg, #0b4639, #12644f);
        }

        .campCover.gold {
          background:
            radial-gradient(circle at 85% 0%, #c9a952, transparent 40%),
            linear-gradient(135deg, #493a19, #947127);
        }

        .statusBadge {
          position: relative;
          z-index: 2;
          align-self: flex-start;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          color: white;
          background: rgba(255, 255, 255, 0.11);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .statusBadge.active::before,
        .statusBadge.completed::before {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-right: 7px;
          border-radius: 99px;
          content: "";
          background: #79e1b5;
        }

        .campCoverContent {
          position: relative;
          z-index: 2;
        }

        .campSubtitle {
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .campCover h3 {
          max-width: 450px;
          margin: 8px 0 9px;
          font-family: Georgia, serif;
          font-size: clamp(31px, 4vw, 45px);
          line-height: 1;
        }

        .volunteerText {
          color: rgba(255, 255, 255, 0.7);
          font-size: 11px;
        }

        .campBody {
          padding: 26px;
        }

        .campBody p {
          min-height: 82px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .campStats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 19px 0;
        }

        .campStats span {
          padding: 7px 10px;
          border-radius: 9px;
          color: #486058;
          background: #f2eee4;
          font-size: 10px;
          font-weight: 850;
        }

        .campButton {
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 17px;
          border-radius: 12px;
          color: white;
          background: var(--green-800);
          font-size: 13px;
          font-weight: 850;
        }

        .newCampCard {
          grid-column: 1 / -1;
          min-height: 285px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 45px 25px;
          border-style: dashed;
          box-shadow: none;
          text-align: center;
          background:
            radial-gradient(circle at center, white, #f4edde);
        }

        .newCampIcon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin-bottom: 19px;
          border-radius: 17px;
          color: white;
          background: var(--green-800);
          font-size: 25px;
        }

        .newCampCard h3 {
          margin: 9px 0;
          font-family: Georgia, serif;
          font-size: 29px;
        }

        .newCampCard p {
          max-width: 650px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .comingSoonButton {
          margin-top: 20px;
          padding: 9px 14px;
          border-radius: 10px;
          color: var(--green-800);
          background: #e5efe8;
          font-size: 11px;
          font-weight: 850;
        }

        .featuresSection {
          padding: 90px 0;
          color: white;
          background: var(--green-950);
        }

        .lightHeading .sectionLabel {
          color: var(--gold);
        }

        .lightHeading p {
          color: rgba(255, 255, 255, 0.65);
        }

        .featuresGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .featureCard {
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.045);
        }

        .featureIcon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
          border-radius: 15px;
          background: rgba(214, 182, 95, 0.14);
          font-size: 22px;
        }

        .featureCard h3 {
          margin: 0 0 9px;
          font-size: 16px;
        }

        .featureCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          line-height: 1.65;
        }

        .aboutSection {
          background: white;
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 90px;
        }

        .aboutVisual {
          position: relative;
          min-height: 440px;
          display: grid;
          place-items: center;
          border-radius: 35px;
          background:
            radial-gradient(circle at 100% 0%, #e9d28e, transparent 36%),
            linear-gradient(145deg, #0c493c, #176d57);
        }

        .aboutMainCard {
          width: min(330px, calc(100% - 45px));
          padding: 44px 35px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 22px;
          color: white;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(8px);
        }

        .aboutArabic {
          display: block;
          margin-bottom: 30px;
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 45px;
        }

        .aboutMainCard strong {
          display: block;
          font-family: Georgia, serif;
          font-size: 27px;
        }

        .aboutMainCard p {
          margin: 15px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          line-height: 1.7;
        }

        .aboutSmallCard {
          position: absolute;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 14px;
          border-radius: 13px;
          color: var(--green-950);
          background: var(--gold-light);
          font-size: 12px;
        }

        .aboutContent h2 {
          margin-top: 12px;
        }

        .aboutContent p + p {
          margin-top: 16px;
        }

        .aboutPoints {
          display: grid;
          gap: 12px;
          margin-top: 28px;
          color: #405b53;
          font-size: 13px;
          font-weight: 750;
        }

        .aboutPoints span::first-letter {
          color: var(--green-700);
        }

        .ctaSection {
          padding: 65px 0;
          background: var(--cream);
        }

        .ctaCard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 48px 52px;
          border-radius: 27px;
          color: white;
          background:
            radial-gradient(circle at 90% 0%, #987c32, transparent 34%),
            linear-gradient(135deg, var(--green-950), var(--green-700));
          box-shadow: var(--shadow);
        }

        .ctaLabel {
          color: var(--gold);
        }

        .ctaCard h2 {
          margin-bottom: 8px;
          font-size: clamp(32px, 4vw, 46px);
        }

        .ctaCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
        }

        .ctaButton {
          min-width: 190px;
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 0 20px;
          border-radius: 13px;
          color: var(--green-950);
          background: var(--gold);
          cursor: pointer;
          font-weight: 850;
        }

        .footer {
          padding: 62px 0 25px;
          color: white;
          background: #072820;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr;
          gap: 60px;
        }

        .footerBrand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .footerBrand div {
          display: grid;
          gap: 3px;
        }

        .footerBrand small {
          color: rgba(255, 255, 255, 0.5);
          font-size: 10px;
        }

        .footerGrid p {
          max-width: 400px;
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
          line-height: 1.7;
        }

        .footerLinks {
          display: grid;
          align-content: start;
          gap: 11px;
          color: rgba(255, 255, 255, 0.56);
          font-size: 12px;
        }

        .footerLinks strong {
          margin-bottom: 5px;
          color: white;
          font-size: 13px;
        }

        .footerBottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 50px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
        }

        @media (max-width: 980px) {
          .desktopMenu {
            display: none;
          }

          .heroGrid {
            grid-template-columns: 1fr;
            gap: 10px;
            padding-top: 80px;
          }

          .heroContent {
            text-align: center;
          }

          .heroContent h1,
          .heroDescription {
            margin-right: auto;
            margin-left: auto;
          }

          .heroBadge,
          .heroButtons,
          .heroHighlights {
            justify-content: center;
          }

          .heroVisual {
            min-height: 470px;
          }

          .statisticsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .statistic:nth-child(2) {
            border-right: 0;
          }

          .featuresGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .aboutGrid {
            grid-template-columns: 1fr;
            gap: 55px;
          }
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .siteHeader {
            position: relative;
          }

          .headerInner {
            min-height: 68px;
          }

          .logoMark {
            width: 39px;
            height: 39px;
            flex-basis: 39px;
          }

          .logoText strong {
            font-size: 16px;
          }

          .logoText small {
            display: none;
          }

          .headerButton {
            padding: 10px 12px;
            font-size: 11px;
          }

          .heroSection,
          .heroGrid {
            min-height: auto;
          }

          .heroGrid {
            padding-top: 60px;
            padding-bottom: 110px;
          }

          .heroContent h1 {
            font-size: clamp(47px, 15vw, 67px);
          }

          .heroDescription {
            font-size: 15px;
            line-height: 1.7;
          }

          .heroButtons {
            display: grid;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .heroHighlights {
            gap: 9px 14px;
          }

          .heroVisual {
            min-height: 420px;
            margin-top: 20px;
          }

          .bookCard {
            width: 255px;
            min-height: 340px;
            padding: 26px;
          }

          .bookOrnament {
            margin-top: 38px;
          }

          .bookCard h2 {
            font-size: 31px;
          }

          .visualCircleLarge {
            width: 345px;
            height: 345px;
          }

          .visualCircleSmall {
            width: 285px;
            height: 285px;
          }

          .floatingCard {
            transform: scale(0.88);
          }

          .floatingCardOne {
            top: 25px;
            left: -18px;
          }

          .floatingCardTwo {
            right: -18px;
            bottom: 42px;
          }

          .statisticsGrid {
            gap: 0;
          }

          .statistic {
            padding: 18px 8px;
            border-right: 0;
            border-bottom: 1px solid var(--border);
          }

          .statistic strong {
            font-size: 24px;
          }

          .campsSection,
          .featuresSection,
          .aboutSection {
            padding: 68px 0;
          }

          .sectionHeading {
            margin-bottom: 30px;
          }

          .sectionHeading h2,
          .aboutContent h2 {
            font-size: 37px;
          }

          .campGrid,
          .featuresGrid {
            grid-template-columns: 1fr;
          }

          .campCover {
            min-height: 220px;
          }

          .campBody p {
            min-height: auto;
          }

          .newCampCard {
            grid-column: auto;
          }

          .aboutVisual {
            min-height: 390px;
          }

          .ctaCard {
            align-items: stretch;
            flex-direction: column;
            padding: 35px 25px;
            text-align: center;
          }

          .ctaButton {
            width: 100%;
          }

          .footerGrid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footerBottom {
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 390px) {
          .headerButton {
            display: none;
          }

          .floatingCardOne {
            left: -32px;
          }

          .floatingCardTwo {
            right: -32px;
          }
        }
      `}</style>
    </>
  );
}
