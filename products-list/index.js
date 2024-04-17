const app = new Vue({
  el: "#app",
  data: {
    products: null,
    maximum: 10,
    cart: [],
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((responseJson) => responseJson.json())
      .then((data) => (this.products = data))
      .catch((error) => console.log(error));
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
    },
  },
});
