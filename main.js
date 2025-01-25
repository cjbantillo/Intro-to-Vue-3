const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      inStock: false,
      onsale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "Green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "Blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    // solution
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    // solution
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity;
    },
    sale() {
        if (this.variants[this.selectedVariant].quantity > 0) {
            return this.variants[this.selectedVariant].color + " " + this.product + " are on sale!";
        }
        return this.variants[this.selectedVariant].color + " " + this.product + " are not on sale!";
    },
  },
});
