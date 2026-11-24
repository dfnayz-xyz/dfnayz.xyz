# dfnayz.xyz

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser to view it.

- `works.js`: all the content (works, updates, awards). Edit this to add, remove or reorder projects.
- `style.css`: the look.
- `app.js`: index/images toggle, sorting, category filters, hover previews, open rows, clock, routing.
- `CNAME`: tells GitHub Pages to serve the site at dfnayz.xyz.

## Your images and videos
Double-click `get-media.command` (first time: right-click → Open). It downloads all 112 images
and videos from the Cargo site into:
- `img/`: web-sized copies the site uses
- `originals/`: full-resolution originals (your archive)
and then switches the site from Cargo to the local `img/` folder. Until you run it, images load from Cargo.

## Publish on GitHub Pages
1. Create a repo (e.g. `dfnayz`) and upload these files.
2. Settings → Pages → Deploy from branch → `main` / root.
3. At your domain registrar, point dfnayz.xyz to GitHub Pages: A records 185.199.108.153,
   185.199.109.153, 185.199.110.153, 185.199.111.153, and a CNAME for `www` → `<username>.github.io`.
4. Back in Settings → Pages, tick "Enforce HTTPS" once the certificate is issued.
