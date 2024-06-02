import { MdDeleteOutline } from "react-icons/md";

function CheckedoutPage({ data, clickHandler }) {
  const { images, title, quantity } = data;

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex shadow-md w-full max-w-[72%] rounded-[10px] h-[105px] justify-between bg-fuchsia-800 ">
        <div className="flex items-center space-x-4 ml-4">
          <img src={images.url} alt={title} className="w-24 h-24 rounded-[50px]" />
          <p className=" md:text-lg lg:text-lg text-gray-300 font-semibold">{title}</p>
        </div>
      
        <div className="flex  mt-14 sm:mt-0 md:mt-0 lg:mt-0 items-center space-x-2 sm:space-x md:space-x-4 lg:space-x-4 mr-5">
          {quantity === 1 && (
            <button className="text-red-600 text-xl" onClick={() => clickHandler("REMOVE_ITEM", data)}>
              <MdDeleteOutline/>
            </button>
          )}

          {quantity > 1 && (
            <button className="text-red-600 text-4xl" onClick={() => clickHandler("DECREMENT", data)}>-</button>
          )}

          <span className="mx-4 text-xl text-gray-100 font-semibold">{quantity}</span>

          <button className="text-emerald-600 text-xl" onClick={() => clickHandler("INCREMENT", data)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CheckedoutPage;