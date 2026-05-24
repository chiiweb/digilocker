# DigiLocker — Windows File Explorer Edition

A clean, single-file DigiLocker clone styled like the Windows 11 File Explorer. Uses Firebase Auth + Storage. Fully static — perfect for GitHub Pages.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Pick the branch (e.g. `main`) and folder **`/docs`**.
5. Save. Your site will be live at `https://<user>.github.io/<repo>/`.

The only file you need to deploy is [`docs/index.html`](./docs/index.html).

## Firebase setup

The config is embedded inside `docs/index.html`. Make sure in the Firebase console:

- **Authentication** → enable Email/Password and Google providers.
- **Authentication → Settings → Authorized domains** → add your `<user>.github.io` domain.
- **Storage** → publish rules that scope uploads per-user, e.g.:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{uid}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## Features

- Windows 11 File Explorer aesthetic — title bar, command bar, breadcrumb address bar, sidebar, status bar
- Grid (large icons) and Details views
- Drag & drop multi-file upload
- Search, selection, double-click to open, download selected
- Light/dark theme follows OS
- Single self-contained HTML file — no build step
