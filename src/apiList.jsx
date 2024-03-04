import React from "react";

export const searchTitle = async (page) => {

  const url = `https://api.jikan.moe/v4/top/anime?page=${page}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("result at api list", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}


export const allAnime=async()=>{

  const url="https://api.jikan.moe/v4/anime";
  const options={
    method:'GET'
  }

  try{
    const response=await  fetch(url,options);
    const result=response.json();
    return result;
  }catch(error){
    console.error("Error while fetching anime data");
  }
}

export const animeDetail=async(id)=>{
  const url=`https://api.jikan.moe/v4/anime/${id}/full`
  const options={
    method:"GET"
  }

  try{
    const response=await fetch(url,options)
    const result=response.json()
    return result
    }catch(error){
      console.error("Cannot fetch details", error)
    }
}



