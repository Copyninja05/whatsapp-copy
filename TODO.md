# Fix GitHub Pages Deployment (White Page / 404)

**Repo:** https://copyninja05.github.io/whatsapp-copy/  
**Base:** /whatsapp-copy/

## Steps:
- [✅] 1. Update `vite.config.js`: Add `base: '/whatsapp-copy/'`
- [✅] 2. Update `package.json`: Add `homepage`, gh-pages dep, deploy scripts
- [✅] 3. Update `src/app.jsx`: Add `basename=\"/whatsapp-copy/\"` to BrowserRouter
- [✅] 4. Update `index.html`: Fix script src to `%PUBLIC_URL%/src/main.jsx`
- [✅] 5. `npm install`
- [✅] 6. Test: `npm run build` + check dist/
- [ ] 7. Deploy: `npm run deploy` + push gh-pages branch (retry after fixing index.html script src)
- [ ] 8. Verify live site
