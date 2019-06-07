const FLICKR_ENDPOINT = "https://api.flickr.com/services/rest";

const PHOTOS_PER_PAGE = 5;

export async function searchImages(text, page) {
  try {
    const url = new URL(`${FLICKR_ENDPOINT}`);
    const params = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      method: "flickr.photos.search",
      format: "json",
      nojsoncallback: "1",
      extras: "url_s",
      per_page: PHOTOS_PER_PAGE,
      page,
      text
    };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url);
    const body = await response.json();
    if (body.stat === "ok") {
      return body;
    } else {
      throw new Error(`${body.code} - ${body.message}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}
