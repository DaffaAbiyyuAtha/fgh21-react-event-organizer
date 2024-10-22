import React from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Popup() {
  const dataToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [preview, setPreview] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const [show, setShow] = React.useState(true);
  const [price, setPrice] = React.useState(true);
  const [price4, setPrice4] = React.useState(true);
  function popUps() {
    navigate(0)
  }
  const [message, setMessage] = React.useState(true);
  
  // async function CreateEvent(e) {
  //   e.preventDefault();
  //   const title = e.target.name.value;
  //   const date = e.target.date.value;
  //   const description = e.target.des.value;
  //   const form = new URLSearchParams();
  //   form.append("title", title);
  //   form.append("date", date);
  //   form.append("description", description);

  //   const dataEvents = await fetch("http://103.93.58.89:21211/events/update", {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + dataToken,
  //     },
  //     body: form,
  //   });
  //   const listData = await dataEvents.json();
  //   if (listData.success) {
  //     // setIdEvents(listData.result.eventId);
  //     const eventId = listData.result.eventId
  //     async function uploadImage() {
  //       const body = new FormData()
  //       body.append( 'image', file)
  //       const response = await fetch('http://103.93.58.89:21211/events/image/' + eventId, {
  //         method: 'PATCH',
  //         body,
  //       });
  //       const json = await response.json()
  //       if (json.success) {
  //         navigate(0)
  //       }
  //     }
  //     await uploadImage();
  //   }
    
  //   // if (json.success) {
  //   //   const form2 = new URLSearchParams();
  //   //   const fields = [
  //   //     { name: e.target.namePrice.value, price: e.target.price.value, quantity: e.target.quantity.value },
  //   //     { name: e.target.namePrice2.value, price: e.target.price2.value, quantity: e.target.quantity2.value },
  //   //     { name: e.target.namePrice3.value, price: e.target.price3.value, quantity: e.target.quantity3.value },
  //   //   ];

  //   //   fields.forEach((field, index) => {
  //   //     if (field.name && field.price && field.quantity) {
  //   //       form2.append(`name${index + 1}`, field.name);
  //   //       form2.append(`price${index + 1}`, field.price);
  //   //       form2.append(`quantity${index + 1}`, field.quantity);
  //   //     }
  //   //   });
  //   //   form2.append("eventId", eventId);
  //   //   const dataPrice = await fetch("http://103.93.58.89:21211/saction", {
  //   //     method: "POST",
  //   //     body: form2,
  //   //   });

  //   //   const listDatas = await dataPrice.json();
  //   //   console.log(listDatas)
  //   //   setMessage(listDatas.message)
  //   //   window.alert(listDatas.message)
  //   // }

  // }

  async function CreateEvent(e) {
    e.preventDefault();
    const title = e.target.name.value;
    const date = e.target.date.value;
    const description = e.target.des.value;
    
    const form = new URLSearchParams();
    form.append("title", title);
    form.append("date", date);
    form.append("description", description);
  
    const dataEvents = await fetch("http://103.93.58.89:21211/events/update", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + dataToken,
      },
      body: form,
    });
    const listData = await dataEvents.json();
  
    if (listData.success) {
      const eventId = listData.result.eventId;
  
      async function uploadImage() {
        const body = new FormData();
        body.append('image', file);
        const response = await fetch('http://103.93.58.89:21211/events/image/' + eventId, {
          method: 'PATCH',
          body,
        });
        const json = await response.json();
  
        if (json.success) {
          const form2 = new URLSearchParams();
          const sections = [
            { name: e.target.namePrice.value, price: e.target.price.value, quantity: e.target.quantity.value },
            { name: e.target.namePrice2.value, price: e.target.price2.value, quantity: e.target.quantity2.value },
            { name: e.target.namePrice3.value, price: e.target.price3.value, quantity: e.target.quantity3.value },
          ];
  
          sections.forEach((section, index) => {
            if (section.name && section.price && section.quantity) {
              form2.append(`sectionId[${index}]`, section.name);
              form2.append(`ticketQuantity[${index}]`, section.quantity);
              form2.append(`price[${index}]`, section.price);
            }
          });
  
          form2.append("eventId", eventId);
  
          const dataPrice = await fetch("http://103.93.58.89:21211/saction", {
            method: "POST",
            body: form2,
          });
  
          const listDatas = await dataPrice.json();
          console.log(listDatas)
          console.log(listDatas);
          setMessage(listDatas.message);
          window.alert(listDatas.message);
  
          if (listDatas.success) {
            navigate(0);
          }
        }
      }
  
      await uploadImage();
    }
  }

  function price2() {
    if (price === true) {
      setPrice(false);
    } else {
      setPrice(true);
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  function price3() {
    if (price4 === true) {
      setPrice4(false);
    } else {
      setPrice4(true);
    }
  }

  function close() {
    setPrice(true);
  }

  function close2() {
    setPrice4(true);
  }


  return (
    <div className={show ? "" : "hidden"}>
      <div className="flex items-center justify-center bg-black/25 w-full h-full absolute top-0 left-0">
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
            <div className="w-full flex">
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
                <div className="flex gap-2">
                  <div className="w-3/6">
                    <label htmlFor="namePrice" className="text-[#468585]">
                      Price
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="namePrice"
                        id="namePrice"
                        placeholder="Input Name Ticket ..."
                        className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="w-2/6">
                    <label htmlFor="price" className="text-[#468585]">
                      Rp
                    </label>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        id="price"
                        placeholder="Input Price Event ..."
                        className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="w-1/6">
                    <label htmlFor="quantity" className="text-[#468585]">
                      Quantity
                    </label>
                    <div className="">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Input Quantity Event ..."
                        className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px]"
                      />
                    </div>
                  </div>
                </div>
                {price ? (
                  <button onClick={price2} className="flex items-center justify-center mb-[30px] mt-[10px] border-2 w-8 h-8 text-[#468585] border-[#468585] rounded-md">
                    <FaPlus className=""/>
                  </button>
                ) : (
                  <div className="">
                    <div className="flex gap-2">
                      <div className="w-3/6">
                        <div className="">
                          <input
                            type="text"
                            name="namePrice2"
                            id="namePrice2"
                            placeholder="Input Name Ticket ..."
                            className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                          />
                        </div>
                      </div>
                      <div className="w-2/6">
                        <div className="">
                          <input
                            type="number"
                            name="price2"
                            id="price2"
                            placeholder="Input Price Event ..."
                            className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                          />
                        </div>
                      </div>
                      <div className="w-1/6">
                        <div className="">
                          <input
                            type="number"
                            name="quantity2"
                            id="quantity2"
                            placeholder="Input Quantity Event ..."
                            className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                          />
                        </div>
                      </div>
                    </div>
                    {price4 ? (
                      <div className="flex gap-4">
                        <button onClick={price3} className="flex items-center justify-center mb-[30px] mt-[10px] border-2 w-8 h-8 text-[#468585] border-[#468585] rounded-md">
                          <FaPlus className=""/>
                        </button>
                        <button onClick={close} className="flex items-center justify-center mb-[30px] mt-[10px] border-2 w-8 h-8 text-[#468585] border-[#468585] rounded-md">
                          <FaXmark className=""/>
                        </button>
                      </div>
                    ) : (
                      <div className="">
                        <div className="flex gap-2">
                          <div className="w-3/6">
                            <div className="">
                              <input
                                type="text"
                                name="namePrice3"
                                id="namePrice3"
                                placeholder="Input Name Ticket ..."
                                className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                              />
                            </div>
                          </div>
                          <div className="w-2/6">
                            <div className="">
                              <input
                                type="number"
                                name="price3"
                                id="price3"
                                placeholder="Input Price Event ..."
                                className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                              />
                            </div>
                          </div>
                          <div className="w-1/6">
                            <div className="">
                              <input
                                type="number"
                                name="quantity3"
                                id="quantity3"
                                placeholder="Input Quantity Event ..."
                                className="h-[55px] outline-none border-2 bg-transparent border-[#468585] text-[#468585] w-full pl-[20px] pr-[20px] rounded-[15px] mt-2"
                              />
                            </div>
                          </div>
                        </div>
                        <button onClick={close2} className="flex items-center justify-center mb-[30px] mt-[10px] border-2 w-8 h-8 text-[#468585] border-[#468585] rounded-md">
                          <FaXmark className=""/>
                        </button>
                      </div>
                    )}
                  </div>
                )}
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
              <div className="w-full mt-[30px]">
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
                <label htmlFor="file" className="mb-[10px] text-[#468585]">
                  Image
                </label>
                <div className="">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    placeholder="Chose File ..."
                    onChange={handleFileChange}
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
