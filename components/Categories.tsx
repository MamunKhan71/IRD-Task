"use client"
import { useEffect, useState } from "react";
import { TransitionEffects } from "./TransitionEffects";
import SearchIcon from "./Icons/SearchIcon";

// Define types for category and subcategory
interface Category {
    cat_id: number;
    cat_name_en: string;
    no_of_subcat: number;
    no_of_dua: number;
}

interface SubCategory {
    subcat_id: number;
    subcat_name_en: string;
    cat_id: number;
}

interface CategoriesProps {
    catShow: (catId: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ catShow }) => {
    const [category, setCategory] = useState<Category[]>([]);
    const [subCategory, setSubCategory] = useState<SubCategory[]>([]);
    const [visibleCat, setVisibleCat] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedSubCat, setSelectedSubCat] = useState<number | null>(null);
    useEffect(() => {
        fetch('category.json')
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);

    useEffect(() => {
        fetch('sub_category.json')
            .then((res) => res.json())
            .then((data) => setSubCategory(data));
    }, []);

    const toggleCategory = (catId: number) => {
        if (visibleCat === catId) {
            setVisibleCat(null);
        } else {
            catShow(catId);
            setVisibleCat(catId);
        }
    };

    const selectSubCategory = (subcatId: number) => {
        setSelectedSubCat(selectedSubCat === subcatId ? null : subcatId);
    };

    return (
        <div className="space-y-3 bg-white font-inter rounded-[10px] h-full">
            <div className="bg-[#1FA45B] rounded-t-xl py-[18px] text-center">
                <p className="text-white font-semibold">Categories</p>
            </div>
            <div className="p-[15px] space-y-[15px]">
                <div className="flex justify-end w-full">
                    <div className="relative w-full border rounded-[10px]  overflow-hidden border-[#E2E2E2]">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 text-base ps-12 "
                            placeholder="Search by Categories"
                        />
                        <div
                            className="text-white absolute top-1/2 -translate-y-1/2 py-2 px-4 rounded-md"
                        >
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="font-inter h-[calc(100vh-32vh)] pr-2 lg:h-[calc(100vh_-_45.5vh)] 3xl:h-[68vh] overflow-y-scroll">
                    <div className="bg-white rounded-xl flex flex-col font-inter">
                        <div className="space-y-4">
                            {category.map((cat) => (
                                <div key={cat.cat_id}>
                                    <div onClick={() => toggleCategory(cat.cat_id)} className={`w-full flex justify-between items-center cursor-pointer ${visibleCat === cat.cat_id ? 'bg-[#E2E2E2]' : 'bg-white'} p-2 rounded-md `}>
                                        <div className="flex gap-4 items-center justify-start ">
                                            <div className="bg-gray-200 p-[10px] rounded-[10px]">
                                                <img className="w-10 h-10 rounded-md " src="https://res.cloudinary.com/dfwmhlhyo/image/upload/v1732175975/4b123749b99b0322305c72c5d565ddf3_ifkg6g.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#1FA45B]">{cat.cat_name_en}</p>
                                                <p className="text-[#7E7E7E] font-poppins text-sm">Subcategory: {cat.no_of_subcat}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="border-l border-[#E2E2E2] h-[60px]">
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[#393939] font-inter text-base font-semibold">{cat.no_of_dua}</p>
                                                <p className="text-[#7E7E7E] font-poppins text-sm">Duas</p>
                                            </div>
                                        </div>
                                    </div>

                                    <TransitionEffects visible={visibleCat === cat.cat_id}>
                                        <div className="pl-6 mb-4">
                                            <div className="relative">
                                                <div
                                                    className="absolute left-0 top-0 bottom-0 w-0 border-l-[1.5px] border-dashed border-[#1FA45B]"
                                                    style={{ transform: 'translateX(-50%)' }}
                                                ></div>
                                                <ul className="p-3 space-y-4 text-base">
                                                    {subCategory
                                                        .filter((SubCat) => SubCat.cat_id === visibleCat)
                                                        .map((gCat, index) => (
                                                            <li
                                                                onClick={() => selectSubCategory(gCat.subcat_id)}
                                                                key={gCat.subcat_id}
                                                                className="flex items-center hover:cursor-pointer"
                                                            >
                                                                <div
                                                                    className="absolute left-0 w-2 h-2 rounded-full bg-[#1FA45B]"
                                                                    style={{ transform: 'translateX(-50%)' }}
                                                                ></div>
                                                                <span className={`ml-4 font-inter font-medium ${selectedSubCat === gCat.subcat_id || index === 0 ? 'text-[#1FA45B]' : 'text-[#373737]'}`}>
                                                                    {gCat.subcat_name_en}
                                                                </span>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </TransitionEffects>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
