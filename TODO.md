## GitHub Pages Deployment Fix TODO

### Pending:
- [ ] Step 3: Commit changes `git add . && git commit -m "fix: relative src in index.html for gh-pages" && git push`
- [ ] Step 4: Deploy `npm run deploy`
- [ ] Step 5: Verify https://copyninja05.github.io/whatsapp-copy/ (wait 2min, Network tab shows /whatsapp-copy/assets/... no 404s)

### Done:
✅ Step 1: index.html fixed (src="./src/main.jsx")
✅ Step 2: Local build verified - dist/index.html has `/whatsapp-copy/assets/index-[hash].js` (bundled, correct paths)


