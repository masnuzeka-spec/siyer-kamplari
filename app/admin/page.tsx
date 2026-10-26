"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type CampType = "internal" | "external";
type CampStatus = "draft" | "published" | "upcoming" | "completed";

type Camp = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  type: CampType;
  external_url: string | null;
  status: CampStatus;
  created_at?: string;
};

type Lesson = {
  id: string;
  camp_id: string;
  title: string;
  slug: string;
  summary: string | null;
  golden_notes: string[];
  position: number;
  published: boolean;
};

const ADMIN_EMAIL = "masnuzeka@gmail.com";

function createSlug(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getStatusName(status: CampStatus) {
  const names: Record<CampStatus, string> = {
    draft: "Taslak",
    published: "Yayında",
    upcoming: "Yakında",
    completed: "Tamamlandı",
  };

  return names[status];
}

function getTypeName(type: CampType) {
  if (type === "internal") {
    return "Platform içi kamp";
  }

  return "Mevcut siteye yönlendirme";
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [camps, setCamps] = useState<Camp[]>([]);
  const [selectedCampId, setSelectedCampId] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [campForm, setCampForm] = useState({
    title: "",
    slug: "",
    description: "",
    type: "internal" as CampType,
    external_url: "",
    status: "draft" as CampStatus,
  });

  const [lessonForm, setLessonForm] = useState({
    title: "",
    slug: "",
    summary: "",
    golden_notes: "",
    position: 1,
    published: false,
  });

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      setSession(currentSession);
      setLoading(false);
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      loadCamps();
    } else {
      setCamps([]);
      setLessons([]);
      setSelectedCampId("");
    }
  }, [session]);

  useEffect(() => {
    if (selectedCampId) {
      loadLessons(selectedCampId);
    } else {
      setLessons([]);
    }
  }, [selectedCampId]);

  function showMessage(text: string, error = false) {
    setMessage(text);
    setIsError(error);

    window.setTimeout(() => {
      setMessage("");
    }, 6000);
  }

  function goHome() {
    window.location.href = "/";
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("Giriş yapılıyor...");
    setIsError(false);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      showMessage(`Giriş başarısız: ${error.message}`, true);
      return;
    }

    if (data.user?.email !== ADMIN_EMAIL) {
      await supabase.auth.signOut();

      showMessage(
        "Bu hesabın yönetici yetkisi bulunmuyor.",
        true
      );

      return;
    }

    setPassword("");
    showMessage("Giriş başarılı.");
  }

  async function logout() {
    await supabase.auth.signOut();

    setCamps([]);
    setLessons([]);
    setSelectedCampId("");
    setMessage("");
  }

  async function loadCamps() {
    const { data, error } = await supabase
      .from("camps")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      showMessage(
        `Kamplar yüklenemedi: ${error.message}`,
        true
      );

      return;
    }

    setCamps((data || []) as Camp[]);
  }

  async function loadLessons(campId: string) {
    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("camp_id", campId)
      .order("position", { ascending: true });

    if (error) {
      showMessage(
        `Dersler yüklenemedi: ${error.message}`,
        true
      );

      return;
    }

    setLessons((data || []) as Lesson[]);
  }

  async function addCamp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = campForm.title.trim();
    const slug =
      campForm.slug.trim() || createSlug(campForm.title);

    if (!title) {
      showMessage("Kamp adını yazmalısın.", true);
      return;
    }

    if (!slug) {
      showMessage(
        "Geçerli bir kamp adresi oluşturulamadı.",
        true
      );

      return;
    }

    if (
      campForm.type === "external" &&
      !campForm.external_url.trim()
    ) {
      showMessage(
        "Yönlendirilecek site adresini yazmalısın.",
        true
      );

      return;
    }

    const payload = {
      title,
      slug,
      description: campForm.description.trim(),
      type: campForm.type,
      external_url:
        campForm.type === "external"
          ? campForm.external_url.trim()
          : null,
      status: campForm.status,
    };

    const { error } = await supabase
      .from("camps")
      .insert(payload);

    if (error) {
      if (error.message.toLowerCase().includes("duplicate")) {
        showMessage(
          "Bu adres kısa adı daha önce kullanılmış.",
          true
        );
      } else {
        showMessage(
          `Kamp eklenemedi: ${error.message}`,
          true
        );
      }

      return;
    }

    setCampForm({
      title: "",
      slug: "",
      description: "",
      type: "internal",
      external_url: "",
      status: "draft",
    });

    showMessage("Kamp başarıyla eklendi.");
    await loadCamps();
  }

  async function changeCampStatus(
    campId: string,
    newStatus: CampStatus
  ) {
    const { error } = await supabase
      .from("camps")
      .update({
        status: newStatus,
      })
      .eq("id", campId);

    if (error) {
      showMessage(
        `Kamp durumu değiştirilemedi: ${error.message}`,
        true
      );

      return;
    }

    showMessage("Kamp durumu güncellendi.");
    await loadCamps();
  }

  async function deleteCamp(
    campId: string,
    campTitle: string
  ) {
    const approved = window.confirm(
      `"${campTitle}" kampını silmek istediğine emin misin?`
    );

    if (!approved) {
      return;
    }

    const { error } = await supabase
      .from("camps")
      .delete()
      .eq("id", campId);

    if (error) {
      showMessage(
        `Kamp silinemedi: ${error.message}`,
        true
      );

      return;
    }

    if (selectedCampId === campId) {
      setSelectedCampId("");
      setLessons([]);
    }

    showMessage("Kamp silindi.");
    await loadCamps();
  }

  async function addLesson(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!selectedCampId) {
      showMessage(
        "Önce bir platform içi kamp seçmelisin.",
        true
      );

      return;
    }

    const title = lessonForm.title.trim();
    const slug =
      lessonForm.slug.trim() ||
      createSlug(lessonForm.title);

    if (!title) {
      showMessage("Ders başlığını yazmalısın.", true);
      return;
    }

    if (!slug) {
      showMessage(
        "Geçerli bir ders adresi oluşturulamadı.",
        true
      );

      return;
    }

    const goldenNotes = lessonForm.golden_notes
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      camp_id: selectedCampId,
      title,
      slug,
      summary: lessonForm.summary.trim(),
      golden_notes: goldenNotes,
      position: Number(lessonForm.position) || 1,
      published: lessonForm.published,
    };

    const { error } = await supabase
      .from("lessons")
      .insert(payload);

    if (error) {
      if (error.message.toLowerCase().includes("duplicate")) {
        showMessage(
          "Bu ders adresi daha önce kullanılmış.",
          true
        );
      } else {
        showMessage(
          `Ders eklenemedi: ${error.message}`,
          true
        );
      }

      return;
    }

    setLessonForm({
      title: "",
      slug: "",
      summary: "",
      golden_notes: "",
      position: lessons.length + 2,
      published: false,
    });

    showMessage("Ders başarıyla eklendi.");
    await loadLessons(selectedCampId);
  }

  async function changeLessonStatus(
    lessonId: string,
    currentlyPublished: boolean
  ) {
    const { error } = await supabase
      .from("lessons")
      .update({
        published: !currentlyPublished,
      })
      .eq("id", lessonId);

    if (error) {
      showMessage(
        `Ders güncellenemedi: ${error.message}`,
        true
      );

      return;
    }

    if (currentlyPublished) {
      showMessage("Ders taslağa alındı.");
    } else {
      showMessage("Ders yayımlandı.");
    }

    await loadLessons(selectedCampId);
  }

  async function deleteLesson(
    lessonId: string,
    lessonTitle: string
  ) {
    const approved = window.confirm(
      `"${lessonTitle}" dersini silmek istediğine emin misin?`
    );

    if (!approved) {
      return;
    }

    const { error } = await supabase
      .from("lessons")
      .delete()
      .eq("id", lessonId);

    if (error) {
      showMessage(
        `Ders silinemedi: ${error.message}`,
        true
      );

      return;
    }

    showMessage("Ders silindi.");
    await loadLessons(selectedCampId);
  }

  if (loading) {
    return (
      <main className="admin">
        <section className="panel">
          <h1>Yükleniyor...</h1>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="admin">
        <section
          className="panel"
          style={{
            maxWidth: 480,
            margin: "80px auto",
          }}
        >
          <div
            className="brand"
            style={{
              marginBottom: 24,
            }}
          >
            <span className="mark">س</span>
            Siyer Kampları
          </div>

          <h1 className="pageTitle">
            Yönetici Girişi
          </h1>

          <p className="muted">
            Kamp, ders ve içerik yönetimi
          </p>

          {message && (
            <div
              className={isError ? "error" : "success"}
              style={{
                marginBottom: 16,
              }}
            >
              {message}
            </div>
          )}

          <form className="form" onSubmit={login}>
            <div className="field">
              <label>E-posta adresi</label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                autoComplete="email"
                required
              />
            </div>

            <div className="field">
              <label>Şifre</label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                autoComplete="current-password"
                required
              />
            </div>

            <button
              className="btn full"
              type="submit"
            >
              Yönetim paneline gir
            </button>
          </form>

          <button
            className="tab"
            type="button"
            onClick={goHome}
            style={{
              marginTop: 18,
            }}
          >
            ← Ana sayfaya dön
          </button>
        </section>
      </main>
    );
  }

  const selectedCamp = camps.find(
    (item) => item.id === selectedCampId
  );

  return (
    <main className="admin">
      <header className="adminTop">
        <div>
          <div className="brand">
            <span className="mark">س</span>
            Siyer Kampları
          </div>

          <h1
            className="pageTitle"
            style={{
              marginTop: 18,
            }}
          >
            Yönetim Paneli
          </h1>

          <div className="muted">
            {session.user.email}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn"
            type="button"
            onClick={goHome}
          >
            Siteyi görüntüle
          </button>

          <button
            className="tab"
            type="button"
            onClick={logout}
          >
            Çıkış yap
          </button>
        </div>
      </header>

      {message && (
        <div
          className={isError ? "error" : "success"}
          style={{
            padding: 14,
            marginBottom: 18,
            background: "#ffffff",
            borderRadius: 12,
            border: "1px solid #e1d9c3",
          }}
        >
          {message}
        </div>
      )}

      <section className="panel">
        <h2>Yeni Kamp Ekle</h2>

        <p className="muted">
          Kampı platform içinde oluşturabilir veya hazır
          bir siteye yönlendirebilirsin.
        </p>

        <form
          className="form"
          onSubmit={addCamp}
        >
          <div className="two">
            <div className="field">
              <label>Kamp adı</label>

              <input
                value={campForm.title}
                onChange={(event) =>
                  setCampForm({
                    ...campForm,
                    title: event.target.value,
                  })
                }
                placeholder="Örneğin: Hadis Kampı"
                required
              />
            </div>

            <div className="field">
              <label>Adres kısa adı</label>

              <input
                value={campForm.slug}
                onChange={(event) =>
                  setCampForm({
                    ...campForm,
                    slug: event.target.value,
                  })
                }
                placeholder="Boş bırakırsan otomatik oluşur"
              />
            </div>
          </div>

          <div className="field">
            <label>Kamp açıklaması</label>

            <textarea
              value={campForm.description}
              onChange={(event) =>
                setCampForm({
                  ...campForm,
                  description: event.target.value,
                })
              }
              placeholder="Kampın amacını ve içeriğini yaz..."
              required
            />
          </div>

          <div className="two">
            <div className="field">
              <label>Kamp türü</label>

              <select
                value={campForm.type}
                onChange={(event) =>
                  setCampForm({
                    ...campForm,
                    type: event.target.value as CampType,
                  })
                }
              >
                <option value="internal">
                  Platform içi kamp
                </option>

                <option value="external">
                  Mevcut siteye yönlendir
                </option>
              </select>
            </div>

            <div className="field">
              <label>Kamp durumu</label>

              <select
                value={campForm.status}
                onChange={(event) =>
                  setCampForm({
                    ...campForm,
                    status:
                      event.target.value as CampStatus,
                  })
                }
              >
                <option value="draft">
                  Taslak
                </option>

                <option value="published">
                  Yayında
                </option>

                <option value="upcoming">
                  Yakında
                </option>

                <option value="completed">
                  Tamamlandı
                </option>
              </select>
            </div>
          </div>

          {campForm.type === "external" && (
            <div className="field">
              <label>
                Yönlendirilecek site adresi
              </label>

              <input
                type="url"
                value={campForm.external_url}
                onChange={(event) =>
                  setCampForm({
                    ...campForm,
                    external_url: event.target.value,
                  })
                }
                placeholder="https://ornek-site.vercel.app"
                required
              />
            </div>
          )}

          <button
            className="btn"
            type="submit"
          >
            Kampı kaydet
          </button>
        </form>
      </section>

      <section
        className="panel"
        style={{
          marginTop: 20,
        }}
      >
        <h2>Kayıtlı Kamplar</h2>

        {camps.length === 0 && (
          <div className="notice">
            Henüz yönetim panelinden eklenmiş kamp
            bulunmuyor.
          </div>
        )}

        <div className="list">
          {camps.map((camp) => (
            <article
              className="row"
              key={camp.id}
            >
              <div>
                <b>{camp.title}</b>

                <div
                  className="muted"
                  style={{
                    marginTop: 5,
                  }}
                >
                  {getTypeName(camp.type)} •{" "}
                  {getStatusName(camp.status)}
                </div>

                <div className="muted">
                  /kamplar/{camp.slug}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {camp.type === "internal" && (
                  <button
                    className="tab"
                    type="button"
                    onClick={() =>
                      setSelectedCampId(camp.id)
                    }
                  >
                    Dersleri yönet
                  </button>
                )}

                <select
                  className="tab"
                  value={camp.status}
                  onChange={(event) =>
                    changeCampStatus(
                      camp.id,
                      event.target
                        .value as CampStatus
                    )
                  }
                  aria-label="Kamp durumunu değiştir"
                >
                  <option value="draft">
                    Taslak
                  </option>

                  <option value="published">
                    Yayında
                  </option>

                  <option value="upcoming">
                    Yakında
                  </option>

                  <option value="completed">
                    Tamamlandı
                  </option>
                </select>

                <button
                  className="btn danger"
                  type="button"
                  onClick={() =>
                    deleteCamp(
                      camp.id,
                      camp.title
                    )
                  }
                >
                  Sil
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedCampId && selectedCamp && (
        <section
          className="panel"
          style={{
            marginTop: 20,
          }}
        >
          <div className="adminTop">
            <div>
              <h2>Ders Yönetimi</h2>

              <p className="muted">
                Seçilen kamp:{" "}
                <b>{selectedCamp.title}</b>
              </p>
            </div>

            <button
              className="tab"
              type="button"
              onClick={() =>
                setSelectedCampId("")
              }
            >
              Kapat
            </button>
          </div>

          <form
            className="form"
            onSubmit={addLesson}
          >
            <div className="two">
              <div className="field">
                <label>Ders başlığı</label>

                <input
                  value={lessonForm.title}
                  onChange={(event) =>
                    setLessonForm({
                      ...lessonForm,
                      title: event.target.value,
                    })
                  }
                  placeholder="Örneğin: Hadis ve Sünnet"
                  required
                />
              </div>

              <div className="field">
                <label>Ders sırası</label>

                <input
                  type="number"
                  min="1"
                  value={lessonForm.position}
                  onChange={(event) =>
                    setLessonForm({
                      ...lessonForm,
                      position: Number(
                        event.target.value
                      ),
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Adres kısa adı</label>

              <input
                value={lessonForm.slug}
                onChange={(event) =>
                  setLessonForm({
                    ...lessonForm,
                    slug: event.target.value,
                  })
                }
                placeholder="Boş bırakırsan otomatik oluşur"
              />
            </div>

            <div className="field">
              <label>Ders özeti</label>

              <textarea
                value={lessonForm.summary}
                onChange={(event) =>
                  setLessonForm({
                    ...lessonForm,
                    summary: event.target.value,
                  })
                }
                placeholder="Dersin özetini buraya yaz..."
              />
            </div>

            <div className="field">
              <label>Altın bilgiler</label>

              <textarea
                value={lessonForm.golden_notes}
                onChange={(event) =>
                  setLessonForm({
                    ...lessonForm,
                    golden_notes:
                      event.target.value,
                  })
                }
                placeholder={
                  "Her satıra ayrı bir bilgi yaz.\nBirinci altın bilgi\nİkinci altın bilgi"
                }
              />
            </div>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <input
                type="checkbox"
                checked={lessonForm.published}
                onChange={(event) =>
                  setLessonForm({
                    ...lessonForm,
                    published:
                      event.target.checked,
                  })
                }
              />

              Dersi hemen yayımla
            </label>

            <button
              className="btn"
              type="submit"
            >
              Dersi kaydet
            </button>
          </form>

          <div className="list">
            {lessons.length === 0 && (
              <div className="notice">
                Bu kampa henüz ders eklenmemiş.
              </div>
            )}

            {lessons.map((lesson) => (
              <article
                className="row"
                key={lesson.id}
              >
                <div>
                  <b>
                    {lesson.position}.{" "}
                    {lesson.title}
                  </b>

                  <div
                    className="muted"
                    style={{
                      marginTop: 5,
                    }}
                  >
                    {lesson.published
                      ? "Yayında"
                      : "Taslak"}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="tab"
                    type="button"
                    onClick={() =>
                      changeLessonStatus(
                        lesson.id,
                        lesson.published
                      )
                    }
                  >
                    {lesson.published
                      ? "Taslağa al"
                      : "Yayımla"}
                  </button>

                  <button
                    className="btn danger"
                    type="button"
                    onClick={() =>
                      deleteLesson(
                        lesson.id,
                        lesson.title
                      )
                    }
                  >
                    Sil
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
