import React from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Popup() {
  const [show, setShow] = React.useState(true);
  function popUps() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  const [message, setMessage] = React.useState(true);
  
  const dataToken = useSelector((state) => state.auth.token);
  async function CreateEvent(e) {
    e.preventDefault();
    const title = e.target.name.value;
    const date = e.target.date.value;
    const description = e.target.des.value;
    const image = e.target.image.value;
    const form = new URLSearchParams();
    form.append("title", title);
    form.append("date", date);
    form.append("description", description);
    form.append("image", image);

    const dataProfile = await fetch("http://localhost:8080/events/update", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataProfile.json();
    setMessage(listData.message);
  }


  return (
    <div className={show ? "" : "hidden"}>
      <div className="flex items-center justify-center bg-black/25 w-full h-screen absolute top-0 left-0">
        <div className="bg-[#DEF9C4] pr-[52px] border-2 w-4/5 rounded-[30px] pl-[52px] absolute border-[#468585]">
          <div className="flex items-center justify-between pt-[32px] font-semibold tracking-[1px] text-[#468585] mb-[44px]">
            <div className="">
              Create Event
            </div>
            <div className="">
              <button type="button" onClick={popUps}>
                <FaXmark />
              </button>
            </div>
          </div>
          <form onSubmit={CreateEvent}>
          <div className="text-red-600 mb-5">{message}</div>
            <div className="w-full flex gap-[60px]">
              <div className="w-full">
                <label htmlFor="name" className="mb-[10px] text-[#468585]">
                  Name
                </label>
                <div className="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Input Name Event ..."
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div>
              {/* <div className="w-1/2">
                <label htmlFor="category" className="mb-[10px] text-[#468585]">
                  Category
                </label>
                <div className="">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Select Category"
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div> */}
            </div>
            <div className="w-full flex gap-[60px]">
              {/* <div className="w-1/2">
                <label htmlFor="location" className="mb-[10px] text-[#468585]">
                  Location
                </label>
                <div className="">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Select Location"
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div> */}
              <div className="w-full">
                <label htmlFor="date" className="mb-[10px] text-[#468585]">
                  Date Time Show
                </label>
                <div className="">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="01/01/2022"
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-[60px]">
              {/* <div className="w-1/2">
                <label htmlFor="price" className="mb-[10px] text-[#468585]">
                  Price
                </label>
                <div className="">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Input Price ..."
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div> */}
              <div className="w-full">
                <label htmlFor="image" className="mb-[10px] text-[#468585]">
                  Image
                </label>
                <div className="">
                  <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Chose File ..."
                    className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="des" className="mb-[10px] text-[#468585]">Detail</label>
              <input
                type="text"
                name="des"
                id="des"
                placeholder="Input Detail ..."
                className="h-[95px] border-2 outline-none bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mb-[46px] "
              />
            </div>
            <div className="w-full text-right mb-[42px]">
              <button
                type="submit"
                className="h-[60px] w-full text-[#DEF9C4] bg-[#468585] max-w-[310px] rounded-[15px] "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
