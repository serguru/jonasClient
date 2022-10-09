export const environment = {
  production: true,
  sizes: [
    {
      name: "Small",
      price: 5,
      toppings: [],
      offers: [],
    }, {
      name: "Medium",
      price: 7,
      toppings: [],
      offers: [
        {
          name: "Offer 2",
          toppingsCount: 4,
          value: 9,
          percent: false,
        },{
          name: "Offer 1",
          toppingsCount: 2,
          value: 5,
          percent: false,
        }
      ],
    }, {
      name: "Large",
      price: 8,
      toppings: [],
      offers: [
        {
          name: "Offer 3",
          toppingsCount: 4,
          value: 50,
          percent: true,
        }
      ]
    }, {
      name: "Extra Large",
      price: 9,
      toppings: [],
      offers: [],
    },
  ],

  toppings: [
    {
      name: "Tomatoes",
      price: 1,
      vegan: true,
      rate: 1,
    }, {
      name: "Onions",
      price: 0.5,
      vegan: true,
      rate: 1,
    }, {
      name: "Bell pepper",
      price: 1,
      vegan: true,
      rate: 1,
    }, {
      name: "Mushrooms",
      price: 1.2,
      vegan: true,
      rate: 1,
    }, {
      name: "Pineapple",
      price: 0.75,
      vegan: true,
      rate: 1,
    }, {
      name: "Sausage",
      price: 1,
      vegan: false,
      rate: 1,
    }, {
      name: "Pepperoni",
      price: 2,
      vegan: false,
      rate: 2,
    }, {
      name: "Barbecue",
      price: 3,
      vegan: false,
      rate: 2,
    },
  ],

  

};
