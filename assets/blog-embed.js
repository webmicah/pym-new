(function () {

var shopifyOptions = {
"product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "title": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "34px",
        "color": "#2d2b26"
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#505c1e"
        },
        "background-color": "#596621",
        ":focus": {
          "background-color": "#505c1e"
        },
        "border-radius": "12px",
        "padding-left": "69px",
        "padding-right": "69px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#2d2b26"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "22.099999999999998px",
        "color": "#2d2b26"
      },
      "unitPrice": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "22.099999999999998px",
        "color": "#2d2b26"
      },
      "description": {
        "font-size": "17px",
        "color": "#2d2b26"
      }
    },
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "description": true
    },
    "width": "100%",
    "text": {
      "button": "Buy now"
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#505c1e"
        },
        "background-color": "#596621",
        ":focus": {
          "background-color": "#505c1e"
        },
        "border-radius": "12px",
        "padding-left": "69px",
        "padding-right": "69px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#4c4c4c"
      }
    },
    "googleFonts": [
      "Montserrat"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#505c1e"
        },
        "background-color": "#596621",
        ":focus": {
          "background-color": "#505c1e"
        },
        "border-radius": "12px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "background-color": "#596621",
        ":hover": {
          "background-color": "#505c1e"
        },
        ":focus": {
          "background-color": "#505c1e"
        }
      },
      "count": {
        "font-size": "18px"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  }
};
  
  var scriptURL = 'https://cdn.shopify.com/s/files/1/0331/2094/4263/files/buy-button-modified.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'you-can-pym.myshopify.com',
      storefrontAccessToken: '4ba496c4043e06b004ec37b691e8766d',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '5321354608789',
        node: document.getElementById('product-component-1666994632213'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
}); 
      ui.createComponent('product', {
        id: '7885356171517',
        node: document.getElementById('product-component-1666995192647'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7885352435965',
        node: document.getElementById('product-component-1667000491008'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7885353287933',
        node: document.getElementById('product-component-1667000537001'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7885352927485',
        node: document.getElementById('product-component-1667000590437'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7901734600957',
        node: document.getElementById('product-component-1670612137842'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7984227909885',
        node: document.getElementById('product-component-1675801027276'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7942830948605',
        node: document.getElementById('product-component-1676680359128'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7942829179133',
        node: document.getElementById('product-component-1676680552057'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '8024992547069',
        node: document.getElementById('product-component-1676680615870'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7995908227325',
        node: document.getElementById('product-component-1676680679796'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
      ui.createComponent('product', {
        id: '7990566125821',
        node: document.getElementById('product-component-1676680733563'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
});
});
}
})();
/*]]>*/