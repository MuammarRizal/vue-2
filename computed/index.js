const app = new Vue({
  el: "#app",
  data: {
    slugText: "The quick #{}2*12&(&#@($()#@$& jange 2011",
  },
  computed: {
    slugetize: function () {
      return this.slugText
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    },
  },
});
