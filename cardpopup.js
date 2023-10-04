Vue.component('products', {
  
    ready: function () {
      var self = this;
      document.addEventListener("keydown", function(e) {
        if (self.showModal && e.keyCode == 37) {
          self.changeProductInModal("prev");
        } else if (self.showModal && e.keyCode == 39) {
          self.changeProductInModal("next");
        } else if (self.showModal && e.keyCode == 27) {
          self.hideModal();
        }
      });
    },
  
    template: "<h1>Products</h1>" + 
    "<div class='products'>" +
    "<div v-for='product in productsData' track-by='$index' class='product {{ product.product | lowercase }}'>" + 
    "<div class='image' @click='viewProduct(product)' v-bind:style='{ backgroundImage: \"url(\" + product.image + \")\" }' style='background-size: cover; background-position: center;'></div>" +
    "<div class='name'>{{ product.product }}</div>" +
    "<div class='description'>{{ product.description }}</div>" +
    "<div class='price'>{{ product.price | currency }}</div>" +
    "</div>" +
    "</div>" +
    "<div class='modalWrapper' v-show='showModal'>" +
    "<div class='prevProduct' @click='changeProductInModal(\"prev\")'><i class='fa fa-angle-left'></i></div>" +
    "<div class='nextProduct' @click='changeProductInModal(\"next\")'><i class='fa fa-angle-right'></i></div>" +
    "<div class='overlay' @click='hideModal()'></div>" + 
    "<div class='modal'>" + 
    "<i class='close fa fa-times' @click='hideModal()'></i>" + 
    "<div class='imageWrapper'><div class='image' v-bind:style='{ backgroundImage: \"url(\" + modalData.image + \")\" }' style='background-size: cover; background-position: center;'></div></div>" +
    "<div class='additionalImages' v-if='modalData.images'>" + 
    "<div v-for='image in modalData.images' class='additionalImage' v-bind:style='{ backgroundImage: \"url(\" + image.image + \")\" }' style='background-size: cover; background-position: center;' @click='changeImage(image.image)'></div>" +
    "</div>" +
    "<div class='name'>{{ modalData.product }}</div>" +
    "<div class='description'>{{ modalData.description }}</div>" +
    "<div class='details'>{{ modalData.details }}</div>" +
    "</div></div>",
  
    props: ['productsData'],
  
    data: function() {
      return {
        showModal: false,
        modalData: {},
        modalAmount: 1,
        timeout: "",
        mousestop: ""
      }
    },
  
    methods: {
  
      viewProduct: function(product) {      
        var self = this;
        //self.modalData = product;
        self.modalData = (JSON.parse(JSON.stringify(product)));
        self.showModal = true;
      },
  
      changeProductInModal: function(direction) {
        var self = this,
            productsLength = vue.productsData.length,
            currentProduct = self.modalData.sku,
            newProductId,
            newProduct;
  
        if(direction === "next") {
          newProductId = currentProduct + 1;
  
          if(currentProduct >= productsLength) {
            newProductId = 1;
          }
  
        } else if(direction === "prev") {
          newProductId = currentProduct - 1;
  
          if(newProductId === 0) {
            newProductId = productsLength;
          }
        }
  
        //console.log(direction, newProductId);
  
        for (var i = 0; i < productsLength; i++) {
          if (vue.productsData[i].sku === newProductId) {
            self.viewProduct(vue.productsData[i]);
          }
        }
      },
  
      hideModal: function() {
        //hide modal and empty modal data
        var self = this;
        self.modalData = {};
        self.showModal = false;
      },
  
      changeImage: function(image) {
        var self = this;
        self.modalData.image = image;
      },
    }
  });
  
  
  //---------
  // Vue init
  //---------
  Vue.config.debug = false;
  var vue = new Vue({
    el: "#vue",
  
    data: {
      productsData: [
        {
          sku: 1,
          product: "Monkey",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/red-monkey.jpg",
          images: [
            { image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/chimpanzee.jpg" },
            { image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/gorilla.jpg" },
            { image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/red-monkey.jpg" },
            { image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/mandrill-monkey.jpg" }
          ],
          description: "This is a monkey",
          details: "This is where some detailes on monkies would go. This monkey done seent some shit.",
        },
  
        {
          sku: 2,
          product: "Kitten",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/kittens.jpg",
          description: "This is a kitten",
          details: "This is where some detailes on kittens would go. Shout out kittens for being adorable.",
        },
  
        {
          sku: 3,
          product: "Shark",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/shark.jpg",
          description: "This is a shark",
          details: "This is where some detailes on sharks would go. Damn nature, you scary.",        
        },
  
        {
          sku: 4,
          product: "Puppy",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/dog.jpg",
          description: "This is a puppy",
          details: "This is where some detailes on puppies would go. Shout out puppies for being adorable.",
        },
  
        {
          sku: 5,
          product: "Apple",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/apple.jpg",
          description: "This is an apple",
          details: "This is where some detailes on apples would go. Shout out apples for being delicious.",
        },
  
        {
          sku: 6,
          product: "Orange",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/orange.jpg",
          description: "This is an orange",
          details: "This is where some detailes on oranges would go. Shout out oranges for being delicious.",
        },
  
        {
          sku: 7,
          product: "Peach",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/peach.jpg",
          description: "This is a peach",
          details: "This is where some detailes on peaches would go. Shout out peaches for being delicious.",
        },
  
        {
          sku: 8,
          product: "Mango",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/mango.png",
          description: "This is a mango",
          details: "This is where some detailes on mangos would go. Shout out mangos for being delicious.",
        },
  
        {
          sku: 9,
          product: "Cognac",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/cognac.jpg",
          description: "This is a glass of cognac",
          details: "This is where some detailes on cognac would go. I'm like hey whats up, hello.",
        },
  
        {
          sku: 10,
          product: "Chain",
          image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/chain.jpg",
          description: "This is a chain",
          details: "This is where some details on chains would go. 2Chainz but I got me a few on.",
        }
      ],    
    },
    });