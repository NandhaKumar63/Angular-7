import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return { products };
  }
}


const products: any[] = [
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1091,
    "name": "ALOE HEAT LOTION",
    "displayName": "Aloe Heat Lotion",
    "slug": "ALOE-HEAT-LOTION",
    "productUrl": null,
    "shortDescription": "<p>Let your muscles experience the relaxing sensation of Aloe Heat Lotion after a tough workout or long day at work. Aloe-powered, ultra-rich and non-greasy, this creamy lotion is perfect for a deep, relaxing massage to set your mind and muscles at ease. Aloe Heat Lotion provides heating and cooling effects to help soothe your skin and muscles thanks to menthol, eucalyptus and three types of oil.</p>",
    "longDescription": "<p>This rich emollient lotion contains deep heating agents to make it the ideal massage companion for tired muscles and dry skin. Aloe Heat Lotion is a pH-balanced, lubricating lotion designed for a soothing, relaxing massage. The deep penetrating power of Aloe Vera will help soothe your muscles after sports or hard workouts!</p>\n<p>Soothing relief after sports or working out</p>\n<p>Rich, emollient formula</p>\n<p>An ideal massage lotion</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 12.66,
    "applicablePrice": 6.57,
    "wholesalePrice": 8.85,
    "commissionableVolume": 0.059,
    "itemNumber": "064",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": true,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/image-gallery/usa/skincare/Aloe%20Heat%20Lotion%201000x1000.png",
        "altText": "aloe heat lotion",
        "sortOrder": 1,
        "videoSource": null,
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/ALOE_HEAT_LOTION_pd_main_512_X_512_1536733731145.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/ALOE_HEAT_LOTION_pd_category_256_X_256_1536733731145.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/ALOE_HEAT_LOTION_pd_thumbnail_128_X_128_1536733731145.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/ALOE_HEAT_LOTION_pd_shopping_bag_107_X_107_1536733731145.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/ALOE_HEAT_LOTION_pd_mini_cart_57_X_57_1536733731145.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1091,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1091,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1091,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [
      {
        "id": 110,
        "productId": 1091,
        "productAttributeId": 120,
        "attributeName": "Leaping bunny",
        "attributeDescription": "Leaping Bunny",
        "content": "Leaping Bunny",
        "sortOrder": "1",
        "attributeType": "CERTIFICATE",
        "keyIngredient": null,
        "orderBy": 1
      }
    ],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 0.361,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": true,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1864,
    "name": "SONYA DAILY SKINCARE SYSTEM",
    "displayName": "Sonya™ Daily Skincare System",
    "slug": "SONYA-DAILY-SKINCARE-SYSTEM",
    "productUrl": null,
    "shortDescription": "<p>The Sonya&trade; daily skincare system delivers aloe, moisture and botanicals deep into your skin thanks to Forever&rsquo;s advanced gel-based technology. Formulated specifically for combination skin, the entire line provides the best of science and nature for every aspect of your daily skincare routine. Cleanse, illuminate, refine and moisturize for skin that feels refreshed, rejuvenated and looks its absolute best.</p>",
    "longDescription": "<p>- Scientifically advanced gel delivery system</p>\n<p>- Features a high concentration of aloe vera and other botanicals</p>\n<p>- For combination skin</p>\n<p>- Gentle enough for all ages</p>\n<p>The Sonya&trade; daily skincare system includes:</p>\n<p>- refreshing gel cleanser</p>\n<p>- illuminating gel</p>\n<p>- refining gel mask</p>\n<p>- soothing gel moisturizer</p>\n<p>Here are a few of the amazing benefits in each skin-enhancing product (to learn more about each powerful ingredient profile, please see the individual product page):</p>\n<p>- refreshing gel cleanser has apple amino acids for a soft lather that doesn&rsquo;t strip your skin. - illuminating gel brightens the appearance of skin giving it a more radiant appearance.</p>\n<p>- refining gel mask is a PM mask that works while you sleep to control oil, improve skin tone and moisturize the skin.</p>\n<p>- soothing gel moisturizer boasts over 10 plants and extracts as well as collagen and leaves your skin dewy. Use as a complete regimen to get all the incredible benefits of the Sonya&trade; daily skincare system. Made specifically for combination skin which can fluctuate and vary greatly, this multi-tasker can not only control oil, but deliver moisture where it&rsquo;s needed most.&nbsp;</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 72.99,
    "applicablePrice": 37.95,
    "wholesalePrice": 51.09,
    "commissionableVolume": 0.341,
    "itemNumber": "609",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": false,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/image-gallery/usa/skincare/Sonya%20daily%20skincare%20group%201000x1000.png",
        "altText": "DAILY SKINCARE SYSTEM",
        "sortOrder": 1,
        "videoSource": null,
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/SONYA_DAILY_SKINCARE_SYSTEM_pd_main_512_X_512_1536735055442.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/SONYA_DAILY_SKINCARE_SYSTEM_pd_category_256_X_256_1536735055442.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/SONYA_DAILY_SKINCARE_SYSTEM_pd_thumbnail_128_X_128_1536735055442.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/SONYA_DAILY_SKINCARE_SYSTEM_pd_shopping_bag_107_X_107_1536735055442.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/SONYA_DAILY_SKINCARE_SYSTEM_pd_mini_cart_57_X_57_1536735055442.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1864,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1864,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1864,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [
      {
        "id": 132,
        "productId": 1864,
        "productAttributeId": 120,
        "attributeName": "Leaping bunny",
        "attributeDescription": "Leaping Bunny",
        "content": "Leaping Bunny",
        "sortOrder": "1",
        "attributeType": "CERTIFICATE",
        "keyIngredient": null,
        "orderBy": 1
      }
    ],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 3.5,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": true,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1056,
    "name": "FOREVER BRIGHT TOOTH GEL",
    "displayName": "Forever Bright® Toothgel",
    "slug": "FOREVER-BRIGHT-TOOTH-GEL",
    "productUrl": null,
    "shortDescription": "<p>Forever Bright&reg; Toothgel is gentle and effective because we include natural ingredients no fluoride for teeth that shine. Kids and adults alike will love the combination of natural peppermint and spearmint flavoring and frothy texture that will leave your mouth feeling fresh and clean.</p>",
    "longDescription": "<p>Aloe vera has long been treasured for its quality and versatility - including dental care. Your teeth will gleam with Forever Bright&reg;, one of the best toothgels on the market. Formulated for the entire family to use, Forever Bright&reg; contains only the highest quality ingredients. It is also suitable for vegetarians since it contains no animal by-products. Natural peppermint and spearmint flavorings leave your mouth feeling fresh and clean.</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 7.28,
    "applicablePrice": 3.79,
    "wholesalePrice": 5.1,
    "commissionableVolume": 0.034,
    "itemNumber": "028",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": false,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/image-gallery/usa/personal%20care/Forever%20Bright%20Toothgel%201000x1000.png",
        "altText": "bright tooth gel",
        "sortOrder": 1,
        "videoSource": null,
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_BRIGHT_TOOTH_GEL_pd_main_512_X_512_1536731462933.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_BRIGHT_TOOTH_GEL_pd_category_256_X_256_1536731462933.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_BRIGHT_TOOTH_GEL_pd_thumbnail_128_X_128_1536731462933.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_BRIGHT_TOOTH_GEL_pd_shopping_bag_107_X_107_1536731462933.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_BRIGHT_TOOTH_GEL_pd_mini_cart_57_X_57_1536731462933.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1056,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1056,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1056,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [
      {
        "id": 88,
        "productId": 1056,
        "productAttributeId": 120,
        "attributeName": "Leaping bunny",
        "attributeDescription": "Leaping Bunny",
        "content": "Leaping Bunny",
        "sortOrder": "1",
        "attributeType": "CERTIFICATE",
        "keyIngredient": null,
        "orderBy": 1
      }
    ],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 0.354,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1676,
    "name": "FOREVER ARCTIC SEA",
    "displayName": "Forever Arctic Sea®",
    "slug": "FOREVER-ARCTIC-SEA",
    "productUrl": null,
    "shortDescription": "<p>Advanced nutrition that puts the power of the sea in the palm of your hand. Forever Arctic Sea&reg; features our exclusive blend of oils to provide you with a perfectly balanced omega-3 supplement. Fish, calamari and high oleic olive oil make for a well-rounded supplement that supports key areas your body, including cardiovascular, digestive, immune, brain and eye health.</p>",
    "longDescription": "<p><strong>The Critical Omega-3:Omega-6 Balance </strong></p>\n<p>There is an important balance that most people do not fully understand when it comes to Omegas. Historically, nutritionally balanced diets contained a healthy ratio of Omegas as 1:1 up to 1:4 DHA:EPA. Unfortunately, many diets include unhealthy levels of Omega-6&rsquo;s which are traditionally derived from fried foods, vegetable oils, fake butter products, grain-fed animal fat and other modern convenience and processed foods. In addition, many diets are low in fish and Omega-3 consumption, which creates an unhealthy ratio of Omega-6: Omega-3 as high as 30:1! The key to getting back to a healthy ratio of DHA:EPA is increasing Omega-3 consumption and reducing Omega-6 intake.</p>\n<p>Forever Arctic Sea&reg; has been improved to not only increase the total amount of Omega-3&rsquo;s you get per serving, but also has significantly increased the amount of DHA per dose. DHA Omega-3 is naturally found throughout the body and is most abundant in the brain, eyes and heart. Just as calcium is essential for building strong bones, DHA ensures that the cells in the brain, retina, heart and other parts of the nervous system develop and function properly through all stages of life. Additionally, DHA intake has been associated with a decreased risk of mental decline associated with aging. No other fatty acid demonstrates this relationship.</p>\n<p>Custom Omega-3 ratio to mimic a diet rich in seafood</p>\n<p>All-natural citrus flavor for a pleasant aroma and minimal fishy flavor</p>\n<p>Ocean friendly and responsibly sourced &bull; Pure source of EPA and DHA</p>\n<p><em>* The statements contained herein have not been evaluated by the FDA. The products discussed are not intended to diagnose, treat, cure or prevent a specific disease or class of diseases. You should consult your family physician if you are experiencing a medical problem. </em></p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 27.24,
    "applicablePrice": 14.15,
    "wholesalePrice": 19.05,
    "commissionableVolume": 0.127,
    "itemNumber": "376",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": true,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/image-gallery/usa/nutrition/Forever%20Arctic%20Sea%201000x1000.png",
        "altText": "FOREVER ARCTIC SEA®",
        "sortOrder": 1,
        "videoSource": null,
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_ARCTIC_SEA_pd_main_512_X_512_1536747390226.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_ARCTIC_SEA_pd_category_256_X_256_1536747390226.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_ARCTIC_SEA_pd_thumbnail_128_X_128_1536747390226.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_ARCTIC_SEA_pd_shopping_bag_107_X_107_1536747390226.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/FOREVER_ARCTIC_SEA_pd_mini_cart_57_X_57_1536747390226.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1676,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1676,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1676,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 0.27,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1849,
    "name": "INFINITE SKIN CARE KIT",
    "displayName": "Infinite By Forever™ Advanced Skincare System",
    "slug": "INFINITE-SKIN-CARE-KIT",
    "productUrl": null,
    "shortDescription": "<p>You&rsquo;ve never seen aloe work like this. Our infinite by Forever&trade; advanced skincare system combines pure aloe vera with natural and scientifically advanced ingredients to bring you the next generation of anti-aging skincare. Target aging from the outside in with formulas to hydrate, reduce the appearance of fine lines and wrinkles and promote healthy collagen levels to help you look better and feel better.</p>",
    "longDescription": "<p>You&rsquo;ve never seen aloe work like this. Our infinite by Forever&trade; advanced skincare system combines pure aloe vera with natural and scientifically advanced ingredients to bring you the next generation of anti-aging skincare. Target aging from the outside in with formulas to hydrate, reduce the appearance of fine lines and wrinkles and promote healthy collagen levels to help you look better and feel better.</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 160.37,
    "applicablePrice": 83.4,
    "wholesalePrice": 112.27,
    "commissionableVolume": 0.749,
    "itemNumber": "553",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": true,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_zoomedimage_1000_X_1000_1552928694126.png",
        "altText": "INFINITE SKIN CARE KIT",
        "sortOrder": 1,
        "videoSource": "MediaCloud",
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_main_512_X_512_1552928694126.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_category_256_X_256_1552928694126.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_thumbnail_128_X_128_1552928694126.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_shopping_bag_107_X_107_1552928694126.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/infinite_skin_care_kit_pd_mini_cart_57_X_57_1552928694126.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1849,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1849,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1849,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 0.11,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1889,
    "name": "ALOE VERA GEL TETRA PACK",
    "displayName": "FOREVER ALOE VERA GEL®",
    "slug": "ALOE-VERA-GEL-TETRA-PACK",
    "productUrl": null,
    "shortDescription": "<p>Drink in the benefits of Forever Aloe Vera Gel&reg;. Our aloe vera drinking gel is made of 99.7% pure inner leaf aloe with no preservatives for an experience as close to nature as you can get! Support healthy digestion, promote optimal nutrient absorption and give yourself an immune boost with Forever Aloe Vera Gel&reg;.</p>",
    "longDescription": "<p>Imagine slicing open an Aloe leaf and consuming the gel directly from the plant.</p>\n<p>Our Forever Aloe Vera Gel is as close to the real thing as you can get. A product of our patented aloe stabilization process, our gel is favored by those looking to maintain a healthy digestive system and a natural energy level.</p>\n<p>The power of aloe from the inside out. The first of its kind to be certified by the International Aloe Science Council Beneficial for maintaining a healthy digestive system.</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 19.31,
    "applicablePrice": 10.03,
    "wholesalePrice": 13.51,
    "commissionableVolume": 0.09,
    "itemNumber": "715",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": true,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_zoomedimage_1000_X_1000_1552473445874.png",
        "altText": "ALOE VERA GEL TETRAPACK",
        "sortOrder": 1,
        "videoSource": "MediaCloud",
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_main_512_X_512_1552473445874.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_category_256_X_256_1552473445874.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_thumbnail_128_X_128_1552473445874.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_shopping_bag_107_X_107_1552473445874.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/aloe_vera_gel_tetrapack_pd_mini_cart_57_X_57_1552473445874.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1889,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1889,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1889,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 2.667,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1892,
    "name": "ALOE BERRY NECTAR TETRA PACK",
    "displayName": "FOREVER ALOE BERRY NECTAR®",
    "slug": "ALOE-BERRY-NECTAR-TETRA-PACK",
    "productUrl": null,
    "shortDescription": "<p>All the benefits of our beloved aloe&nbsp;vera&nbsp;gel with a delicious,&nbsp;tangy berry kick. Forever Aloe Berry Nectar&reg; will awaken your senses with the uplifting natural flavor of cranberries and sweet apples.&nbsp;This nutritious gel drink is also&nbsp;loaded with&nbsp;vitamins,&nbsp;antioxidants and the 90.7% pure aloe&nbsp;vera&nbsp;gel content means you&rsquo;re getting optimal nutrient absorption, natural energy and digestive support.&nbsp;&nbsp;</p>",
    "longDescription": "<p>- 90.7% pure inner leaf aloe vera gel</p>\n<p>- No added preservatives</p>\n<p>- Supports healthy digestion</p>\n<p>- Promotes a healthy immune system</p>\n<p>- Cranberries support urinary health</p>\n<p>- Contains healthful phytonutrients</p>\n<p>- Natural source of Vitamin C</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 19.31,
    "applicablePrice": 10.03,
    "wholesalePrice": 13.51,
    "commissionableVolume": 0.09,
    "itemNumber": "734",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": false,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_zoomedimage_1000_X_1000_1552420439276.png",
        "altText": "Forever Aloe Berry Nectar",
        "sortOrder": 1,
        "videoSource": "MediaCloud",
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_main_512_X_512_1552420439276.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_category_256_X_256_1552420439276.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_thumbnail_128_X_128_1552420439276.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_shopping_bag_107_X_107_1552420439276.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_berry_nectar_pd_mini_cart_57_X_57_1552420439276.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1892,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1892,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1892,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [
      {
        "id": 253,
        "productId": 1892,
        "productAttributeId": 118,
        "attributeName": "IASC",
        "attributeDescription": "IASC",
        "content": "IASC",
        "sortOrder": null,
        "attributeType": "CERTIFICATE",
        "keyIngredient": null,
        "orderBy": 1
      }
    ],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 2.667,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  },
  {
    "productPurchaseFlowModelList": null,
    "autoshipEnabled": true,
    "id": 1893,
    "name": "ALOE PEACHES TETRA PACK",
    "displayName": "FOREVER ALOE PEACHES™",
    "slug": "ALOE-PEACHES-TETRA-PACK",
    "productUrl": null,
    "shortDescription": "<p>Forever Aloe Peaches&reg; is like sweet sunshine in a glass. We&rsquo;ve taken our&nbsp;aloe&nbsp;vera&nbsp;gel and infused it with the sweet bold flavor of sun ripened peaches. But it&rsquo;s not just about the wonderful fresh flavors. Peaches are a powerful source of antioxidant compounds to support your health. The 84.5% pure aloe&nbsp;vera&nbsp;content ensures you're absorbing important nutrients, promoting healthy digestion and giving yourself a nice boost of natural energy.&nbsp;&nbsp;</p>",
    "longDescription": "<p>- 84.5% pure aloe vera gel</p>\n<p>- No added preservatives</p>\n<p>- Supports healthy digestion</p>\n<p>- Promotes a healthy immune system</p>\n<p>- Sun ripened peaches for added flavor and nutrition</p>\n<p>- Helps maintain natural energy levels</p>\n<p>Improve your digestion and delight your taste buds with the succulent taste of peaches and the power of aloe combined.</p>\n<p>Aloe vera has natural cleansing abilities that help the digestive tract absorb nutrients from the foods we eat into the blood stream, while promoting friendly bacteria growth. The unique polysaccharide, acemannan, and other nutrients in aloe help to modulate and support the immune system.</p>\n<p>84.5% stabilized inner-leaf aloe vera gel is paired with juicy peach puree with calcium for a robust drink with a sweet taste and all of the power of pure aloe vera.</p>\n<p>Forever Aloe Peaches&reg; is aseptically processed allowing the formula to remain free of added preservatives and packaged in Tetra Pak packaging made with 100% recyclable materials to ensure that you are able to enjoy the fresh taste of undiluted aloe vera gel with all of the potent properties of aloe just as nature intended.</p>",
    "noOfReviews": 0,
    "overAllRating": 0,
    "retailPrice": 19.31,
    "applicablePrice": 10.03,
    "wholesalePrice": 13.51,
    "commissionableVolume": 0.09,
    "itemNumber": "777",
    "discountPercentage": null,
    "discountPercentageAmount": null,
    "totalSavings": null,
    "sku": " ",
    "uniqueProductId": null,
    "ratingDisplayed": true,
    "virtualProduct": false,
    "downloadableProduct": false,
    "stockAvailable": false,
    "literature": false,
    "imageUrl": null,
    "storeName": null,
    "productType": null,
    "rowState": null,
    "importedMeasurementUnit": "EACH",
    "revisionNumber": "2019-05-14-20.45",
    "priceTierName": "WHLD18",
    "storePriceTierPercentage": 18,
    "customCatalogId": 5,
    "customCatalogName": "Best Sellers",
    "stockQuantity": 0,
    "manageStock": false,
    "backOrderAllowed": true,
    "categories": [
      {
        "id": 0,
        "locale": "Hyderabad",
        "success": false
      }
    ],
    "options": [],
    "kitDetails": [],
    "tags": [],
    "productDownload": null,
    "images": [],
    "imageModelList": [
      {
        "id": 1,
        "type": "ZoomedImage",
        "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_zoomedimage_1000_X_1000_1552420541037.png",
        "altText": "Forever Aloe Peaches",
        "sortOrder": 1,
        "videoSource": "MediaCloud",
        "display": true,
        "isDefault": true,
        "details": [
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_main_512_X_512_1552420541037.png",
            "parentId": 1,
            "type": "main"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_category_256_X_256_1552420541037.png",
            "parentId": 1,
            "type": "category"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_thumbnail_128_X_128_1552420541037.png",
            "parentId": 1,
            "type": "thumbnail"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_shopping_bag_107_X_107_1552420541037.png",
            "parentId": 1,
            "type": "shopping bag"
          },
          {
            "url": "https://cdn.flptitanqa.com/content/products/images/forever_aloe_peaches_pd_mini_cart_57_X_57_1552420541037.png",
            "parentId": 1,
            "type": "mini cart"
          }
        ]
      }
    ],
    "meta": {
      "keywords": [],
      "description": "",
      "title": ""
    },
    "productTypeMasterId": 1,
    "productMetaData": [
      {
        "productID": 1893,
        "metaTitle": "AUTOSHIP",
        "metaKeyWords": "1"
      },
      {
        "productID": 1893,
        "metaTitle": "FREE_PRODUCT_ELIGIBLE",
        "metaKeyWords": "0"
      },
      {
        "productID": 1893,
        "metaTitle": "DISTRIBUTORELIGIBLE",
        "metaKeyWords": "0"
      }
    ],
    "optionCombinationValues": null,
    "attributes": [
      {
        "id": 255,
        "productId": 1893,
        "productAttributeId": 120,
        "attributeName": "Leaping bunny",
        "attributeDescription": "Leaping Bunny",
        "content": "Leaping Bunny",
        "sortOrder": null,
        "attributeType": "CERTIFICATE",
        "keyIngredient": null,
        "orderBy": 1
      }
    ],
    "promotions": null,
    "shipping": {
      "shippingRequired": true,
      "weight": 2.667,
      "measurementUnitLength": 10,
      "measurementUnitMass": 9,
      "virtual": false,
      "downloadable": false,
      "literature": false,
      "measurementUnitLengthValue": "EACH",
      "measurementUnitMassValue": "Pounds",
      "importedMeasurementUnit": "EACH"
    },
    "display": {
      "searchable": true,
      "displayable": true,
      "featuredProduct": false,
      "ratingDisplayed": true,
      "fboEligible": false
    }
  }
];