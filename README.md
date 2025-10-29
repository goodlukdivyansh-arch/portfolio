# Portfolio Website

This repository contains the source for a single-page personal portfolio for Divyansh Kamboj. The site is built with plain HTML, CSS, and JavaScript so it can be hosted on any static web platform, including GitHub Pages.

## Project structure

```
├── index.html      # Main portfolio page
├── styles.css      # Layout and visual styles
├── script.js       # Navigation toggle logic
├── Divyansh's.jpeg # Hero image referenced by index.html
└── Divyansh's Resume .docx
```

## Preview locally

1. Clone the repository and move into it:

   ```bash
   git clone <your-fork-url>
   cd portfolio
   ```

2. Serve the files from a local HTTP server (for example, with Python):

   ```bash
   python3 -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser to view the site.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (or fork this one) and push the code:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In your GitHub repository, navigate to **Settings → Pages**.

3. Under **Source**, select **Deploy from a branch** and choose the `main` branch with the `/ (root)` folder, then click **Save**.

4. GitHub will build and host the site at `https://<your-username>.github.io/<repo-name>/` once the deployment completes. Check the **Environments** panel on the repository home page if you need to monitor the deployment status.

5. If you customize the domain, add a `CNAME` file at the repository root with your domain name and update the DNS records accordingly.

## Updating the site

Whenever you push new commits to the `main` branch, GitHub Pages automatically rebuilds and redeploys the site. You can create feature branches for updates, open pull requests, and merge into `main` when you are ready to publish changes.
