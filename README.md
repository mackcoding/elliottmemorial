# Elliott Memorial Website

This is a GitHub-hosted memorial website for the bestest boy, Elliott.

## 🐕 About Elliott

Elliott was more than just a pet - he was a faithful companion, a bossy dog who often became the alpha in every situation. He was always gentle, kind, and loving, with a passion for toy ducks, chasing cats, swimming, camping, ice cream, car rides, and watching TV.

Elliott passed away peacefully on October 8, 2025, at around 12 years old, and this website serves as a digital memorial to celebrate his life and preserve precious memories.

## 🏗️ How It Works

This memorial website is built as a static site hosted on GitHub Pages with an automated photo gallery system:

### Architecture

- **Frontend**: Simple HTML/CSS/JavaScript static site using Bootstrap for responsive design
- **Photo Gallery**: Dynamic JSON-based gallery system that automatically indexes photos
- **Backend**: Go-based photo indexer that processes images and generates gallery data
- **Deployment**: GitHub Actions workflow for automated building and deployment

### Photo Gallery System

The heart of this site is the automated photo gallery powered by a Go script (`scripts/indexer.go`):

1. **Photo Scanning**: Scans the `web/photos/` directory for image files
2. **Description Loading**: Reads descriptions from `web/photos/description.json`
3. **Pagination**: Automatically creates paginated gallery data (15 photos per page)
4. **JSON Generation**: Creates `index.json` and `pageN.json` files in `web/index/`
5. **Frontend Integration**: JavaScript loads and displays the gallery dynamically

### Automated Workflow

The GitHub Actions workflow (`deploy.yml`) handles everything automatically:

1. **Triggers**: Runs on any push to the main branch
2. **Gallery Generation**: Executes the Go indexer to process photos
3. **Commit Changes**: Auto-commits generated gallery files
4. **Deploy**: Publishes the complete site to GitHub Pages

### File Structure

```
├── .github/workflows/
│   └── deploy.yml    # CI/CD workflow
├── web/                       # Website root
│   ├── photos/                 # Gallery photos
│   │   └── description.json    # Photo descriptions
│   ├── no-index-photos/        # Non-gallery photos
│   ├── index/                  # Generated gallery JSON files
│   ├── css/                    # Stylesheets
│   ├── js/                     # JavaScript
│   └── index.html             # Main page
├── scripts/                    # Build tools
│   ├── indexer.go             # Photo gallery generator
│   └── go.mod                 # Go module file
├── generate_description_gemini.ps1 # AI description generator
└── README.md                  # This file
```

## 🚀 Getting Started

To create your own memorial website:

1. **Fork this repository** to your GitHub account
2. **Edit the content** in `web/index.html` to reflect your loved one
3. **Add photos** to the `web/photos/` directory
4. **Update descriptions** in `web/photos/description.json` manually, or use the AI script (see below).
5. **Push to main branch** - GitHub Actions will automatically build and deploy

### Adding Photos

1. Place image files in `web/photos/`
2. Add descriptions to `web/photos/description.json`:
```json
{
    "photo1.jpg": "Description of photo 1",
    "photo2.jpg": "Description of photo 2"
}
```
3. Push changes - the gallery will automatically update

## 🖼️ Generating Descriptions with AI

This project includes a PowerShell script, `generate_description_gemini.ps1`, to automatically generate photo descriptions using AI.

### Requirements

-   The [Google Gemini CLI](https://github.com/google/gemini-cli). Make sure it's installed and authenticated.

### How to Use

1.  Place your new photos in the `web/photos/` directory.
2.  Open a PowerShell terminal at the root of the project.
3.  Run the script:
    ```powershell
    .\generate_description_gemini.ps1
    ```
4.  The script will find photos without descriptions, call the Gemini API to generate them, and save them to `web/photos/description.json`.

You can customize the prompt inside the script by editing the `$PromptTemplate` variable.

## 📝 License & Reuse

**Anyone is free to reuse this code for their own memorial websites.**

This project is shared with love in hopes that it can help others create beautiful tributes for their beloved companions. Whether it's for a pet, family member, or friend, feel free to adapt this codebase for your own memorial needs.

## 🤝 Contributing & Feedback

This project, including this README, was created with the assistance of AI. We welcome contributions and feedback!

-   **Showcase Your Memorial**: If you use this template, we would be delighted to see it. Please [create a GitHub issue](https://github.com/mackcoding/elliottmemorial/issues/new) to share a link to your project!
-   **Contribute Changes**: Fixes and improvements are always welcome! Please feel free to submit a Pull Request with a detailed description of your changes.

## 🛠️ Technical Requirements

- **Go** (for running the photo indexer)
- **GitHub Pages** enabled on your repository
- **GitHub Actions** enabled for automated builds

## 💝 In Memory

Elliott - Forever in our hearts and memories. A life well-lived, a love well-shared.

---

*"Until one has loved an animal, a part of one's soul remains unawakened." - Anatole France*