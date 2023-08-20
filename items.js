const posts = [];
const images = [
  'https://cdn.statically.io/img/akidoo.top/f=auto,q=100/images/covers/imaizumin-chi-wa-douyara-gal-no-tamariba-ni-natteru-rashii-4-cv1.png',
  'https://akidoo.top/images/covers/imaizumin-chi-wa-douyara-gal-no-tamariba-ni-natteru-rashii-3-cv1.png',
  'https://akidoo.top/images/covers/imaizumin-chi-wa-douyara-gal-no-tamariba-ni-natteru-rashii-2-cv1.png',
  'https://akidoo.top/images/covers/imaizumin-chi-wa-douyara-gal-no-tamariba-ni-natteru-rashii-1-cv1.png',
  'https://img3.gelbooru.com/images/f8/ad/f8adddbaad8678a48753390f0261713f.jpeg',
  'https://img3.gelbooru.com/images/f1/74/f17494c670d2f6c52c8d4ca2160c150c.png',
  'https://img3.gelbooru.com//images/fc/98/fc98ad9e867fd94b80fa1939c2859cff.jpg',
  'https://img3.gelbooru.com/images/b9/f9/b9f90eafb88e0a498b1d2bb110003c2f.png',
  'https://i.pinimg.com/474x/db/73/29/db73295453e74be00132c983ca0a710f.jpg',
  'https://i.pinimg.com/474x/1b/39/da/1b39dafada167437638ac028d8ee94b7.jpg',
  'https://i.pinimg.com/474x/6d/93/b3/6d93b32c8fe8ba58b56cd5207f35bea4.jpg',
  'https://i.pinimg.com/474x/89/8a/36/898a360b7630c094420115da1f1547fb.jpg',
  'https://i.pinimg.com/474x/e8/3b/fa/e83bfa23df348d9cb78bfb0f788b480e.jpg',
  'https://i.pinimg.com/474x/5b/02/3b/5b023b9bec0909d96e33773bb6f82cf4.jpg',
];

let imageIndex = 0;

for (let i = 1; i <= 14; i++) {
  let item = {
    id: i,
    title: `Genre ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
