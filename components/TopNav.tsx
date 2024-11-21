import ProfileIcon from "./Icons/ProfileIcon";
import SearchIcon from "./Icons/SearchIcon";

const TopNav = () => {
    return (
        <div className="font-inter w-full flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 justify-center lg:justify-between items-end lg:items-center px-4 lg:px-0">
            <h1 className="text-2xl font-poppins font-semibold w-full text-center lg:text-left lg:max-w-96">Dua Page</h1>
            <div className="w-full lg:w-[620px]">
                <div className="flex justify-end w-full">
                    <div className="relative w-[371px] border rounded-[10px]  overflow-hidden border-[#E2E2E2]">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 text-sm "
                            placeholder="Search by Dua Name"
                        />
                        <button
                            type="submit"
                            className="text-white absolute top-1/2 -translate-y-1/2 right-2 bg-[#F3F4F6] py-2 px-4 rounded-md"
                        >
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <ProfileIcon />
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686" />
                </svg>
                <div className="2xl:hidden cursor-pointer">
                    <img src="settings.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopNav;