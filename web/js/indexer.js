let index;
let totalPages;
let currentPage = 1;
let isLoading = false;

async function init() {
  index = await getIndex("index");
  totalPages = index.total_pages;
  await generatePage();
  setupLazyLoad();
}

function setupLazyLoad() {
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(async () => {
        if (
          window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 1000 &&
          !isLoading &&
          currentPage < totalPages
        ) {
          isLoading = true;
          currentPage++;
          await generatePage();
          isLoading = false;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

async function generatePage() {
  try {
    var page = await getIndex("page" + currentPage);
    if (!page || !Array.isArray(page)) return;

    const container = document.getElementById("photos");
    let cards = "";

    page.forEach((photo) => {
      cards += createMemorialCard(photo);
    });

    container.innerHTML += cards;
  } catch (error) {
    console.error(`Error generating page ${currentPage}:`, error);
    isLoading = false;
  }
}

function createMemorialCard(photo) {
  return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="memorial-card">
                <img
                    src="photos/${photo.filename}"
                    alt="${photo.description}"
                />
                <div class="card-body">
                    <p class="mb-0">
                        ${photo.description}
                    </p>
                </div>
            </div>
        </div>
    `;
}

async function getIndex(url) {
  url = "index/" + url + ".json";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Message: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching '${url}', message: ${error}`);
  }
}

init();
