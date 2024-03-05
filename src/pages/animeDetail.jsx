import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const AnimeDetail = () => {
  const location = useLocation();
  const nav = useNavigate();
  const result = location.state.data.data;
  console.log("result", result);

  return (
    <div>
      <div className='bg-[#040f13] h-[75px]'>
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem className='hover:cursor-pointer' onClick={()=>nav("/")}>
              <img className='h-[75px] w-[75px]' src="src/assets/a1.png" />
            </NavigationMenuItem>
            <NavigationMenuItem className='pr-[20px] font-["Times"] hover:text-white hover:cursor-pointer text-gray-400 text-[16px]'>Top Anime</NavigationMenuItem>
            <NavigationMenuItem onClick={()=>(nav('/manga'))} className='pr-[15px] font-["Times"] hover:text-white hover:cursor-pointer text-gray-400 text-[16px]'>Manga</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="bg-hero-pattern bg-center bg-cover bg-fixed flex justify-center items-center pt-[20px]">
        <div className="h-[75%] w-[75%] backdrop-blur-sm flex flex-wrap justify-center">
          <Card className="w-[220px] h-[333px] mx-4 mb-10 bg-transparent border-none opacity-85 hover:opacity-100">
            <CardDescription className="p-0 rounded-md">
              <img
                src={result?.images?.jpg?.image_url}
                className="w-[220px] h-[267px] rounded-t-md"
              />
            </CardDescription>
            <CardContent className="text-left truncate pl-2 mb-[-25px] text-lg text-white ">
              {result?.title}
            </CardContent>
            <CardContent className="text-left truncate pl-2 text-sm text-white">
              {result?.genres?.map((item, index) => {
                return <span key={index}>{item?.name}-</span>;
              })}
            </CardContent>
          </Card>
          <div className='w-4/5'>
            <h1 className="text-white text-[40px] pl-[20px]">
              {result?.title}
            </h1>
            <p className="text-white text-[20px] pl-[20px]">
              {result?.genres?.map((item, index) => {
                return <span key={index}>{item?.name} </span>;
              })}
            </p>
            <p className="text-white pl-[20px] text-justify pr-[20px]">
              {result?.synopsis}
            </p>
          </div>
          <div className='pb-20'>
            <iframe className='rounded-xl'
              width="960"
              height="472"
              src={result?.trailer?.embed_url}
              title="VIDEO_TITLE"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
