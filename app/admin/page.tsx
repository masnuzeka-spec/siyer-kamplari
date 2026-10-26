"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("masnuzeka@gmail.com");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Giriş yapılıyor...");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage("Giriş başarısız: " + error.message);
      return;
    }

    setMessage("Giriş başarılı.");
  }

  async function logout() {
    await supabase.auth.signOut();
    setMessage("");
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
          style={{ maxWidth: 480, margin: "80px auto" }}
        >
          <div className="brand">
            <span className="mark">س</span>
            Siyer Kampları
          </div>

          <h1 className="pageTitle" style={{ marginTop: 24 }}>
            Yönetici Girişi
          </h1>

          <p className="muted">
            Kamp, ders ve içerik yönetimi
          </p>

          <form className="form" onSubmit={login}>
            <div className="field">
              <label>E-posta adresi</label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Şifre</label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <button className="btn full" type="submit">
              Yönetim paneline gir
            </button>
          </form>

          {message && (
            <p style={{ marginTop: 16 }}>{message}</p>
          )}

          /
            ← Ana sayfaya dön
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="admin">
      <header className="adminTop">
        <div>
          <div className="brand">
            <span className="mark">س</span>
            Siyer Kampları
          </div>

          <h1 className="pageTitle" style={{ marginTop: 20 }}>
            Yönetim Paneli
          </h1>

          <p className="muted">{session.user.email}</p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          /
            Siteyi görüntüle
          </a>

          <button
            className="tab"
            type="button"
            onClick={logout}
          >
            Çıkış yap
          </button>
        </div>
      </header>

      <section className="panel">
        <h2>Bağlantı Başarılı</h2>

        <p>
          Yönetici hesabıyla giriş yapıldı. Supabase bağlantısı ve
          yönetici oturumu doğru çalışıyor.
        </p>

        <div className="notice">
          Kamp, ders, test ve deneme yönetimi bu ekranın devamına
          eklenecek.
        </div>
      </section>
    </main>
  );
}
