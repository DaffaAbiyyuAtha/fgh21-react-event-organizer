import React, { useEffect } from "react";
import Navbar from "../assets/component/content/Navbar";
import Footer from "../assets/component/content/Footer";
import Sidebar from "../assets/component/content/Sidebar";
import SidebarUser from "../assets/component/content/SidebarUser";
import { FaHeart, FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Account() { 
  const dataToken = useSelector((state) => state.auth.token);
  const dataProfile = useSelector((state) => state.profile.data);
  const [datas, setDatas] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [open, setOpen] = React.useState(true);
  const [totalUser, setTotalUser] = React.useState([]);
  const [search, setSearch] = React.useState("")

  function toggles() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!dataToken) {
      navigate("/login");
      return;
    }
    account()
    accountFilter()
    accountAllFilter()
  }, [dataToken, navigate]);

  async function account() {
    const dataAccount = await fetch("http://103.93.58.89:21211/users/list-all?search=", {
      headers: {
        Authorization: "Bearer " + dataToken,
      }
    });
    const listDataAccount = await dataAccount.json();
    setDatas(listDataAccount.result);
  }

  async function accountFilter(data) {
    data.preventDefault();
    const dataAccountFilter = await fetch(`http://103.93.58.89:21211/users/list-all?search=${search}&page=${page}`, {
      headers: {
        Authorization: "Bearer " + dataToken,
      }
    });
    const listDataAccountFilter = await dataAccountFilter.json();
    setDatas(listDataAccountFilter.result);
  }

  async function accountAllFilter() {
    const dataAccountFilter = await fetch(`http://103.93.58.89:21211/users/list-all?search=${search}&limit=1000&page=${page}`, {
      headers: {
        Authorization: "Bearer " + dataToken,
      }
    });
    const listDataAccountFilter = await dataAccountFilter.json();
    setTotalUser(listDataAccountFilter.result.length);
  }

  async function deleteAccount(id) {
    const dataDelete = await fetch(`http://103.93.58.89:21211/profile/${id}`, {
      method: 'DELETE',
    });
    const listDataDelete = await dataDelete.json();
    if (listDataDelete.success) {
        const dataDelete = await fetch(`http://103.93.58.89:21211/users/${id}`, {
          method: 'DELETE',
        });
        const listDataDelete = await dataDelete.json();
        if (listDataDelete.success) {
          account()
        }
    }
  }

  const itemPerPage = 5; 
  const startIndex = (page - 1) * itemPerPage + 1; 
  const endIndex = Math.min(page * itemPerPage, totalUser); 

  return (
    <div className="md:bg-[#9CDBA6]">
      <div className="">
        <Navbar />
      </div>
      <div className="md:flex m-10 md:m-16">
        <button type="button" onClick={toggles} className="md:hidden mb-[28px] flex items-center gap-2 border-2 p-1 rounded-lg border-[#468585] text-[#468585]">
          <div className="">menu</div>
        </button>
        <div
          className={
            open
              ? "md:flex gap-6 hidden"
              : ""
          }
        >
          <div className="">
            {dataProfile?.user && (
              <div className="">
                {dataProfile.user.userRole === 1 ? (
                  <Sidebar />
                ) : (
                  <SidebarUser />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 bg-[#DEF9C4] rounded-[30px] md:p-10">
          <div className="flex justify-between items-center mb-5">
            <div className="text-xl text-[#468585] font-semibold tracking-[1px]">
              Account Settings
            </div>
          </div>
          <form onSubmit={accountFilter}>
            <div className="flex w-full items-center border-[#468585] bg-transparent border-2 h-8 px-6 rounded-2xl text-[#468585] overflow-hidden ">
              <input
                name="search"
                id="search"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent text-[#468585]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="">
                <FaMagnifyingGlass />
              </button>
            </div>
          </form> 
          <table className="text-center text-[#468585] border-collapse w-full mb-2">
            <thead>
              <tr className="">
                <th>
                  ID
                </th>
                <th>
                  Full Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Role
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item) => {
                return (
                  <tr className="">
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.fullName}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      {item.userRole === 1 ? 'Admin' : 'User'}
                    </td>
                    <td className="flex justify-center items-center">
                      <button onClick={() => deleteAccount(item.id)}>
                        <FaTrash className="hover:text-red-600"/>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <form onSubmit={accountFilter}>
            <div className="flex justify-between items-center">
              <div className="text-[#468585]">
              <p>Show {totalUser > 0 ? startIndex : 0} - {endIndex} of {totalUser} users</p>
              </div>
              <div className="flex gap-2 text-[#DEF9C4]">
                <button 
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className="p-2 bg-[#468585] rounded-lg">
                  <FaArrowLeft />
                </button>
                <button 
                  onClick={() => setPage(Math.min(page + 1, Math.ceil(totalUser / itemPerPage)))}
                  className="p-2 bg-[#468585] rounded-lg"
                  >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Account;
