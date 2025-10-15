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
  url = "index/" + url;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Message: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching '${url}', message: {error}`);
  }
}
