import React, { useEffect, useState } from "react";
import { searchTitle, allAnime, animeDetail } from "../apiList";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useNavigate, Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Home = () => {
  const [allSearchData, setAllSearchData] = useState([]);
  const [allAnimeData, setAllAnimeData] = useState([]);
  const [anime, setAnime] = useState('');
  const nav = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const fetchSearchAll = async (page) => {
    const data = await searchTitle(page);
    setAllSearchData(data);
  };

  const fetchAllAnime = async () => {
    const data = await allAnime();
    setAllAnimeData(data);
  }

  const animeDet = async (id) => {
    try {
      const result = await animeDetail(id);
      setAnime(result)
      nav("/detail", { state: { data: result } })
    } catch (error) {
      console.error("error while fetching detail", error)
    }
  }

  useEffect(() => {
    fetchSearchAll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchAllAnime();
  }, [])



  return (
    <div>
      <div className='bg-[#040f13] h-[50px]'>
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
              <img className=' mr-[10px] h-[50px] w-[25px]' src="src/assets/logo-transparent.png" />
            </NavigationMenuItem>
            <NavigationMenuItem className='p-[12px] font-["Times"] hover:text-white hover:cursor-pointer text-gray-400 text-[16px]'>Top Anime</NavigationMenuItem>
            <NavigationMenuItem className='text-white'>Ocean</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="bg-hero-pattern bg-center bg-cover bg-fixed flex justify-center items-center	pt-[20px]">
        <div className="h-[75%] w-[75%] backdrop-blur-sm">
          <div className="flex flex-wrap justify-content justify-center pt-[25px] ">
            {allSearchData.data?.map((item, index) => {
              return (
                
                
                <Card onClick={() => animeDet(item?.mal_id)} className="w-[220px] h-[333px] mx-4 mb-10 bg-transparent border-none opacity-85 hover:opacity-100 hover:cursor-pointer">
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
                    className="text-white"
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
                    className="text-white"
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

export default Home;
