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

1. **Photo Scanning**: Scans the `docs/photos/` directory for image files
2. **Description Loading**: Reads descriptions from `docs/photos/description.json`
3. **Pagination**: Automatically creates paginated gallery data (15 photos per page)
4. **JSON Generation**: Creates `index.json` and `pageN.json` files in `docs/index/`
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
├── docs/                       # Website root
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
└── README.md                  # This file
```

## 🚀 Getting Started

To create your own memorial website:

1. **Fork this repository** to your GitHub account
2. **Edit the content** in `docs/index.html` to reflect your loved one
3. **Add photos** to the `docs/photos/` directory
4. **Update descriptions** in `docs/photos/description.json`
5. **Push to main branch** - GitHub Actions will automatically build and deploy

### Adding Photos

1. Place image files in `docs/photos/`
2. Add descriptions to `docs/photos/description.json`:
```json
{
    "photo1.jpg": "Description of photo 1",
    "photo2.jpg": "Description of photo 2"
}
```
3. Push changes - the gallery will automatically update

## 📝 License & Reuse

**Anyone is free to reuse this code for their own memorial websites.**

This project is shared with love in hopes that it can help others create beautiful tributes for their beloved companions. Whether it's for a pet, family member, or friend, feel free to adapt this codebase for your own memorial needs.

No attribution required, though it would be appreciated. The most important thing is that this helps preserve precious memories.

## 🛠️ Technical Requirements

- **Go** (for running the photo indexer)
- **GitHub Pages** enabled on your repository
- **GitHub Actions** enabled for automated builds

## 💝 In Memory

Elliott - Forever in our hearts and memories. A life well-lived, a love well-shared.

---

*"Until one has loved an animal, a part of one's soul remains unawakened." - Anatole France*
