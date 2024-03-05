import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { allManga } from "../apiList";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


const Manga = () => {
    
  const [allSearchData, setAllSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const nav=useNavigate();

  const mangaGet = async (page) => {
    const result = await allManga(page);
    setAllSearchData(result);
  };

  useEffect(() => {
    mangaGet(currentPage);
  },[ ,currentPage]);

  return (
    <div>
      <div className="bg-[#040f13] h-[75px]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='hover:cursor-pointer' onClick={()=>nav("/")}>
              <img className="h-[75px] w-[75px] " src="src/assets/a1.png" />
            </NavigationMenuItem>
            <NavigationMenuItem className='pr-[20px] font-["Times"] hover:text-white hover:cursor-pointer text-gray-400 text-[16px]'>
              Top Anime
            </NavigationMenuItem>
            <NavigationMenuItem className='pr-[15px] font-["Times"] hover:text-white hover:cursor-pointer text-gray-400 text-[16px]'>
              Manga
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="bg-hero-pattern bg-center bg-cover bg-fixed flex justify-center items-center	pt-[20px]">
        <div className="h-[75%] w-[75%] backdrop-blur-sm">
          <div className="flex flex-wrap justify-content justify-center pt-[25px] ">
            {allSearchData.data?.map((item, index) => {
              return (
                <Card className="w-[220px] h-[333px] mx-4 mb-10 bg-transparent border-none opacity-85 hover:opacity-100 hover:cursor-pointer">
                  <CardDescription key={index} className="p-0 rounded-md">
                    {" "}
                    <img
                      src={item.images?.jpg?.image_url}
                      className="w-[220px] h-[267px] rounded-t-md"
                    />
                  </CardDescription>
                  <CardContent className="text-left truncate pl-2 mb-[-25px] text-lg text-white ">
                    {item.title}
                  </CardContent>
                  <CardContent className="text-left truncate pl-2 text-sm text-white">
                    {item?.genres?.map((item, index) => {
                      return <span key={index}>{item?.name}-</span>;
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-content justify-center mt-[50px] ">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="text-white hover:cursor-pointer"
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="text-white" href="#">
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="text-white hover:cursor-pointer"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manga;
