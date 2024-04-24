const data = {
  imgClass: "img-fluid",
  data: [
    {
      name: "Naruto",
      price: 10000,
      image:
        "https://sahabatnesia.com/wp-content/uploads/2019/01/Gambar-Naruto-Keren.jpg",
    },
    {
      name: "bleach",
      price: 10000,
      image: "https://images2.alphacoders.com/964/964310.png",
    },
  ],
};

const app = new Vue({
  el: "#app",
  data: data,
});
