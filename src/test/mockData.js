export const MOCK_PHOTOS_LIST = [
  {
    id: "48018476987",
    owner: "139190233@N03",
    secret: "fa58325dba",
    server: "65535",
    farm: 66,
    title: "LOOK-542",
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    url_s: "https://live.staticflickr.com/65535/48018476987_fa58325dba_m.jpg",
    height_s: "159",
    width_s: "240"
  },
  {
    id: "48018375958",
    owner: "69300290@N04",
    secret: "2990bfa058",
    server: "65535",
    farm: 66,
    title: "Copenhagen Bikehaven by Mellbin - Bike Cycle Bicycle - 2019 - 0060",
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    url_s: "https://live.staticflickr.com/65535/48018375958_2990bfa058_m.jpg",
    height_s: "110",
    width_s: "240"
  },
  {
    id: "48018303156",
    owner: "149133045@N04",
    secret: "d5fbfa96ff",
    server: "65535",
    farm: 66,
    title: "new bike notturna cà del vento © 2019 silvia casali-28",
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    url_s: "https://live.staticflickr.com/65535/48018303156_d5fbfa96ff_m.jpg",
    height_s: "160",
    width_s: "240"
  }
];

export const MOCK_PHOTOS_LIST_PAGE_2 = MOCK_PHOTOS_LIST.map(photo => ({
  ...photo,
  id: (parseInt(photo.id) * 2).toString()
}));

export const MOCK_PHOTOS_RESULT = {
  photos: {
    page: 1,
    pages: 126648,
    perpage: 3,
    total: "633239",
    photo: MOCK_PHOTOS_LIST
  },
  stat: "ok"
};

export const MOCK_PHOTOS_RESULT_PAGE_2 = {
  photos: {
    ...MOCK_PHOTOS_RESULT.photos,
    page: 2,
    photo: MOCK_PHOTOS_LIST_PAGE_2
  },
  stat: "ok"
};
