# GitHub Pages (`github.io`) Canlıya Alma Rehberi

Bu rehber, portfolyo web sitenizi GitHub Personal Access Token (PAT) kullanarak `https://<kullanici_adiniz>.github.io` adresinde ücretsiz ve hızlıca yayına almanızı sağlar.

---

## Adım 1: GitHub'da Yeni Bir Repository (Depo) Oluşturun

1. [github.com](https://github.com/) adresine gidin ve giriş yapın.
2. Sağ üstteki **`+`** simgesine tıklayıp **"New repository"** seçin.
3. **Repository name** kısmına:
   - Eğer ana portfolyonuz olmasını istiyorsanız: `<kullanici_adiniz>.github.io` yazın (Örn: `didenurszn.github.io`).
   - Ya da herhangi bir proje adı verebilirsiniz: `portfolio` (bu durumda siteniz `https://didenurszn.github.io/portfolio/` olur).
4. Deponun **"Public"** (Herkese açık) olduğundan emin olun.
5. "Add a README file" veya .gitignore seçeneklerini **işaretlemeyin** (boş bir repo oluşturun).
6. **"Create repository"** butonuna tıklayın.

---

## Adım 2: GitHub Personal Access Token (PAT) Alma (Yoksa)

GitHub, terminalden parola yerine Personal Access Token kullanmanızı ister:

1. GitHub'da sağ üstteki profil resminize tıklayın -> **Settings** -> sol en alttan **Developer Settings**.
2. **Personal access tokens** -> **Tokens (classic)** seçin.
3. **"Generate new token"** (Generate new token (classic)) butonuna tıklayın.
4. Note kısmına `Portfolio Deploy` yazın.
5. Yetkilerden (Scopes) en üstteki **`repo`** kutucuğunu işaretleyin.
6. En alttaki **"Generate token"** butonuna basın.
7. Çıkan `ghp_...` ile başlayan token'ı kopyalayın ve güvenli bir yere kaydedin (sayfayı yenileyince tekrar gösterilmez).

---

## Adım 3: Terminalden Projeyi GitHub'a Yükleme

Bilgisayarınızda PowerShell veya Komut İstemi'ni açıp aşağıdaki komutları sırasıyla çalıştırın:

```powershell
# 1. Proje klasörüne geçiş yapın:
cd "C:\Users\diden\.gemini\antigravity-ide\scratch\didenur-portfolio"

# 2. Git deposunu başlatın (zaten başlatılmışsa bu adımı atlayabilirsiniz):
git init
git branch -M main

# 3. Dosyaları ekleyin ve commit yapın:
git add .
git commit -m "Initial release: Didenur Sezen interactive portfolio & CV"

# 4. GitHub reponuzu uzak sunucu (remote) olarak bağlayın:
# (Buradaki 'didenurszn' ve 'didenurszn.github.io' kısımlarını kendi kullanıcı adınızla değiştirin)
git remote add origin https://github.com/didenurszn/didenurszn.github.io.git

# 5. Token ile Push yapın:
git push -u origin main
```

> **İpucu (Token Girişi):** Git sizden kullanıcı adı ve parola istediğinde:
> - **Username:** GitHub kullanıcı adınız (Örn: `didenurszn`)
> - **Password:** Az önce kopyaladığınız `ghp_...` ile başlayan **Token**'dır.

Alternatif olarak, doğrudan URL içinde token kullanarak tek komutla da push edebilirsiniz:
```powershell
git remote set-url origin https://<TOKENINIZ>@github.com/didenurszn/didenurszn.github.io.git
git push -u origin main
```

---

## Adım 4: GitHub Pages'ı Etkinleştirme

1. GitHub'da projenizin sayfasına gidin.
2. Üst menüden **Settings** sekmesine tıklayın.
3. Sol menüden **Pages** seçeneğine gelin.
4. **Build and deployment** altında:
   - **Source:** `Deploy from a branch` seçili olsun.
   - **Branch:** `main` dalını ve klasör olarak `/ (root)` seçin.
5. **Save** butonuna tıklayın.

1-2 dakika içinde GitHub sitenizi yayınlayacak ve sayfanın en üstünde canlı linkinizi göreceksiniz:
👉 `https://<kullanici_adiniz>.github.io`

Tebrikler! Portfolyonuz tüm dünyadan erişilebilir halde canlıda! 🎉
