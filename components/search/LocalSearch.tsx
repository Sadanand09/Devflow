"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props{
    route: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const [searchQuery, setSearchQuery] = useState(query);
    
  return (
      <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-10px px-4 ${otherClasses}`}>
          <Image src={imgSrc} width={24} height={24} alt="Search" className="cursor-pointer" />
      <Input
        type="text"
        placeholder={placeholder}
              value={ searchQuery }
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder:text-dark400_light700 shadow-none border-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
