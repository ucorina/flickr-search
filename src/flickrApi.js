const FLICKR_ENDPOINT = "https://api.flickr.com/services/rest";

export async function searchImages(text) {
  try {
    const url = new URL(`${FLICKR_ENDPOINT}`);
    const params = {
      method: "flickr.photos.search",
      text,
      format: "json",
      nojsoncallback: "1",
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      extras: "url_m"
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
