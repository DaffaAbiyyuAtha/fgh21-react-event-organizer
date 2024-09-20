import React, { useEffect } from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Wishlist() { 
  const dataToken = useSelector((state) => state.auth.token);
  const [wishlist, setWishlist] = React.useState([])
  let {id} = useParams()

  const navigate = useNavigate();
  useEffect(() => {
    if (!dataToken) {
      navigate("/login");
      return;
    }
  }, [dataToken, navigate]);

  async function wish(){
    const datawish = await fetch('http://103.93.58.89:21211/wishlist/'+ id,{
      headers: {
        Authorization: "Bearer " + dataToken,
      }
    })
    const listwish = await datawish.json()
    setWishlist(listwish.result)
  }
  
  // async function removeData(id) {
  //   const dataRemove = fetch('http://103.93.58.89:21211/wishlist/' + id, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: "Bearer " + dataToken,
  //     },
  //   })
  //   const listwish = await dataRemove.json()
  // }

  useEffect(() =>{
    wish()
    // removeData()
  }, [])
  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16">
        <Sidebar />
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="flex justify-between items-center">
            <div className="text-xl text-[#468585] font-semibold tracking-[1px]">
              My Wishlist
            </div>
          </div>
          <div className="h-full w-full hidden">
            <div className="flex flex-col items-center justify-center h-full gap-[16px]">
              <div className="font-semibold tracking-[1px] text-2xl text-[#468585]">
                No tickets bought
              </div>
              <div className="font-medium tracking-[0.5px] text-center text-sm text-[#50B498]">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          </div>
          {wishlist === undefined ? (
            <div className="h-full w-full">
              <div className="flex flex-col items-center justify-center h-full gap-[16px] ">
                <div className="font-semibold tracking-[1px] text-2xl text-[#468585]">
                  No Wishlist Event
                </div>
                <div className="font-medium tracking-[0.5px] text-center text-sm text-[#50B498]">
                  You don't have a wishlist, please make a wishlist on the event page.
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-y-scroll md:shrink-0 h-96">
              {wishlist.map((data) =>{
                return(
                  <div className="flex justify-between">
                    <div className="flex flex-row gap-6 mt-14 shrink-0">
                      <div className="text-center w-16 h-24 rounded-2xl border-2 border-[#468585] pt-6">
                        <div className="text-[#50B498]">15</div>
                        <div className="text-[#468585]">Wed</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[#468585] text-3xl mb-4">
                          {data.event.title}
                        </div>
                        <div className="text-[#50B498] text-sm">
                          <div>Jakarta, Indonesia</div>
                          <div>{data.event.date}</div>
                        </div>
                        <div className="text-sm text-[#468585] underline mt-3">
                          Detail
                        </div>
                      </div>
                    </div>
                    <button className="content-center">
                      <FaHeart className="text-[#468585] w-10 h-10" />
                    </button>
                  </div> 
                )
              })}
              
            </div>
          )}
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Wishlist;
