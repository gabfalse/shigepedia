import { PRICE } from "../../Config/Price";

import {
  getStarBreakdown
}
from "./RankEngine";


import {
  getProductPromo,
  getManualDiscount,
}
from "./PromoEngine";



/*
=========================
Harga Normal
=========================
*/

export function getNormalPrice(
  breakdown
){

  return breakdown.reduce(
    (total,item)=>{

      const price =
        PRICE[item.rank] ?? 0;


      return total +
        (
          price *
          item.stars
        );

    },
    0
  );

}




/*
=========================
Calculate Price
=========================
*/

export function calculatePrice({

  type,

  currentTier,
  currentStars,

  targetTier,
  targetStars,

  promoCode="",

}){


  const breakdown =
    getStarBreakdown(
      currentTier,
      currentStars,
      targetTier,
      targetStars
    );



  const normalPrice =
    getNormalPrice(
      breakdown
    );



  /*
  Promo produk
  */

  const productPromo =
    getProductPromo(type);



  const productDiscountAmount =
    productPromo.enabled

    ?

      Math.floor(
        normalPrice *
        productPromo.discount /
        100
      )

    :

      0;



  const afterProductPromo =
    normalPrice -
    productDiscountAmount;




  /*
  Promo manual
  */

  const manual =
    getManualDiscount(
      afterProductPromo,
      promoCode
    );



  const finalPrice =
    Math.max(
      0,
      afterProductPromo -
      manual.discount
    );



  return {

    breakdown,


    normalPrice,


    productPromo,


    productDiscountAmount,


    afterProductPromo,


    manualPromo:
      manual.promo,


    manualDiscountAmount:
      manual.discount,


    finalPrice,

  };

}