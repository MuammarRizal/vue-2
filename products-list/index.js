const app = new Vue({
  el: "#app",
  data: {
    products: null,
    maximum: 10,
    cart: [],
    style: {
      navbar: ["nav-cart position-sticky top-0 z-1"],
      displayState: true,
    },
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((responseJson) => responseJson.json())
      .then((data) => (this.products = data))
      .catch((error) => console.log(error));
  },

  computed: {
    sliderStatus: function () {
      return this.style.displayState ? "d-flex" : "d-none";
    },
    cartTotal: function () {
      let sum = 0;
      for (key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let sum = 0;
      for (key in this.cart) {
        // sum = sum + this.cart[key].product.price * this.cart[key].qty;
        sum = sum + this.cart[key].qty;
      }

      return sum;
    },
    toggleStatus: function () {
      return this.style.displayState
        ? `<i class="fa-solid fa-toggle-on fs-2 toggle-cursor"></i>`
        : `<i class="fa-solid fa-toggle-off fs-2 toggle-cursor"></i>`;
    },
  },
  filters: {
    currencyFormat: (value) => {
      return `Rp${Number.parseFloat(value).toFixed(2)}`;
    },
  },
  methods: {
    addToCart: function (product) {
      const existingProductIndex = this.cart.findIndex(
        (item) => item.product.id == Number(product.id)
      );

      if (existingProductIndex !== -1) {
        this.cart[existingProductIndex].qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    toggleClick: function () {
      this.style.displayState = !this.style.displayState;
    },

    before: function (el) {
      el.className = "d-flex m-1";
    },
    enter: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "d-flex m-1 fade-enter-active";
      }, delay);
    },
    leave: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "d-none m-1 animate__animated animate__fadeOutDown";
      }, delay);
    },

    removeItem: function (index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
});
