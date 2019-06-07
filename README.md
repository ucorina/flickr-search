# Flickr Search

App for searching images using the Flickr API.

Notes:
* the user can search images by keyword
* search results are paginated - the user can load more by clicking the "Load more" button
* images are now loaded 5 per page, in order to make it easier to test
* the UI is made to just be functional

Stack used:

* react
* redux
* redux-thunk

There are also a couple of unit tests available, check them out with `yarn test`.

## Getting started

Create a `.env` file by copying the `.env.sample` file and replace the Flickr API key with your own.
Then, run `yarn start`.
