# Engineering Portfolio — Glass UI (flat version for GitHub Pages)

This is a flat-folder version of the site — every file sits at the top
level (no subfolders), because GitHub's drag-and-drop uploader doesn't
preserve folder structure. This version is built to match that.

## Deploying on GitHub Pages

1. In your repo, delete the existing files (select all → delete, or just
   overwrite each one).
2. Upload every file in this folder directly into the repo root — same
   level as `README.md`, not inside a subfolder.
3. Go to **Settings → Pages** in the repo, confirm Source is "Deploy from
   a branch," branch `main`, folder `/ (root)`.
4. Visit `https://yourusername.github.io/your-repo-name/` (give it a
   minute after pushing/uploading — Pages takes a moment to rebuild).

## Editing content

Open **`data.js`** — your name, bio, experience, projects, and contact
info all live in the `CONTENT` object there. See the comments inside for
details on each field.

To add your own photos, add an image file (e.g. `me.jpg`) into the repo
root alongside `index.html`, then point to it from `data.js`, e.g.:

```js
avatar: "me.jpg",
```

## Editing style

Open **`style.css`** — colors, fonts, and spacing are defined as CSS
variables at the top of the file, in the `:root` block.

## A note for next time

If you'd rather keep the folder structure (`css/`, `js/`, `assets/`) for
organization, the cleanest way to upload it intact is:
- Use GitHub Desktop or the `git` command line and push the folder as-is, or
- On github.com, use "Add file → Upload files" and drag the **parent
  folder itself** (not its contents) — most browsers preserve structure
  that way, though results can vary by browser.

Git-based pushes always preserve structure reliably; the web upload UI is
the part that's inconsistent.
