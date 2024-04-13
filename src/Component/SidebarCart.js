import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

function SidebarCart({ state, clickHandler }) {
    const { total, itemsCounter, checkOut } = state;

    return (
        <div className="flex mt-10 justify-center">
            <div className="flex flex-col sm:flex-col font-semibold flex-row md:flex-row max-w-[450px] md:max-w rounded-[10px] h-[175px]
               justify-between  md:gap-x-6 items-center shadow-lg bg-fuchsia-800 p-4">

                <div className="flex items-center mb-4 sm:mb-0 md:mb-[100px]">
                    <TbChecklist className="text-blue-700"/>
                    <p className="text-blue-300">Total:</p>
                    <span className="ml-1 text-gray-200">{total}$</span>
                </div>

                <div className="flex items-center mb-4 sm:mb-0 md:mb-[100px]">
                    <FaHashtag className="text-blue-700"/>
                    <p className="text-blue-300">Quantity:</p>
                    <span className="ml-1 text-gray-200">{itemsCounter}</span>
                </div>

                <div className="flex items-center mb-4 sm:mb-0 md:mb-[100px]">
                    <BsPatchCheck className="text-blue-700"/>
                    <p className="ml-2 text-blue-300">Status:</p>
                    <span className="ml-1 text-gray-200">{!checkOut ? "Pending..." : null}</span>
                </div>

                <div className="flex relative md:top-[50px] bottom-[8px] sm:bottom  md:right-[250px] justify-center">
                    <button className="shadow-lg p-2 rounded-[10px] font-bold text-white hover:bg-blue-700 bg-blue-500"
                        onClick={() => clickHandler("CHECKOUT")}
                    >
                    CheckOut
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SidebarCart;