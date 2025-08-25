# Resume Setup Instructions

## How to add your resume to the portfolio

To make the Resume link in the navbar work correctly, you need to place your resume file in this `public/` directory.

### Steps:

1. **Prepare your resume**: Make sure your resume is in PDF format for best compatibility across browsers.

2. **Name the file**: Rename your resume file to `resume.pdf` (exactly this name, all lowercase).

3. **Place the file**: Copy `resume.pdf` into the `public/` directory of this project.

4. **File structure should look like**:
   ```
   public/
   ├── favicon.ico
   ├── icon.png
   ├── img/
   ├── index.html
   ├── logo.png
   ├── logosvg.svg
   ├── README_RESUME.md (this file)
   ├── resume.pdf          ← Your resume file here
   └── robots.txt
   ```

### How it works:

- The navbar Resume link points to `${process.env.PUBLIC_URL}/resume.pdf`
- In development: `http://localhost:3000/resume.pdf`
- In production: `https://rajatdua.dev/resume.pdf` (or your custom domain)
- Clicking the link opens the PDF in a new browser tab for viewing

### Notes:

- If you prefer download behavior instead of viewing, you can add `download="Your-Name-Resume.pdf"` attribute back to the link in `src/Pages/Home/Navbar.jsx`
- The file must be named exactly `resume.pdf` (case-sensitive on some systems)
- PDF format is recommended for cross-browser compatibility
- Make sure the file size is reasonable (< 5MB) for good loading performance

### Testing:

1. Start the development server: `npm start`
2. Click the "Resume" button in the navbar
3. Your resume should open in a new browser tab
4. For production testing: `npm run build` and deploy to verify the link works on your live site