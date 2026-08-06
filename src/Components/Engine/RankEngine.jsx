import { RANKS } from "../../Config/Rank";


export const TIERS =
RANKS.flatMap((rank)=>{


  if(rank.divisions){

    return rank.divisions.map(
      (division)=>({

        rank:rank.id,

        name:
          `${rank.name} ${division}`,

        division,

      })
    );

  }


  return [
    {
      rank:rank.id,

      name:rank.name,

      division:null,
    }
  ];

});



export function getTier(name){

  return (
    TIERS.find(
      (tier)=>
        tier.name === name
    )
    ??
    null
  );

}



export function getTierIndex(name){

  return TIERS.findIndex(
    tier =>
      tier.name === name
  );

}



export function nextTier(name){

  const index =
    getTierIndex(name);


  if(index === -1)
    return null;


  return (
    TIERS[index+1]
    ??
    null
  );

}




export function isMythicTier(name){

  return [

    "Mythic",
    "Honor",
    "Glory",
    "Immortal",

  ].includes(name);

}




export function normalizeTier(
  tierName,
  stars
){


  if(isMythicTier(tierName)){


    if(stars <= 24){

      return {
        tier:"Mythic",
        stars
      };

    }


    if(stars <=49){

      return {
        tier:"Honor",
        stars
      };

    }


    if(stars <=99){

      return {
        tier:"Glory",
        stars
      };

    }


    return {

      tier:"Immortal",

      stars,

    };


  }



  let tier =
    tierName;


  let star =
    stars;



  while(star > 5){


    star -= 5;


    const next =
      nextTier(tier);



    if(!next)
      break;



    tier =
      next.name;



    if(tier==="Mythic"){

      return normalizeTier(
        "Mythic",
        star
      );

    }


  }



  return {

    tier,

    stars:
      Math.max(
        1,
        star
      )

  };


}




export function moveOneStar(
  tier,
  stars
){

  return normalizeTier(
    tier,
    stars + 1
  );

}




export function getStarBreakdown(
  currentTier,
  currentStars,
  targetTier,
  targetStars
){


  const result=[];


  let tier=currentTier;

  let stars=currentStars;



  while(
    !(
      tier===targetTier &&
      stars===targetStars
    )
  ){


    const rank =
      getTier(tier).rank;



    const exist =
      result.find(
        item =>
          item.rank===rank
      );



    if(exist){

      exist.stars++;

    }else{

      result.push({

        rank,

        stars:1,

      });

    }



    const next =
      moveOneStar(
        tier,
        stars
      );



    tier =
      next.tier;


    stars =
      next.stars;


  }



  return result;


}