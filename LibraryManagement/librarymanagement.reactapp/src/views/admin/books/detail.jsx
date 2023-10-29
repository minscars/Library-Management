import Card from "components/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import bookApi from "../../../api/bookAPI"
import {useParams} from "react-router-dom";
export function Detail() {
  
  const [book, setBook] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    const getbyid = async ()=>{
      const data = await bookApi.GetById(id);
      setBook(data);
    }
    getbyid();
  },[])

  return (
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              <span>Your book detail</span> 
            </div>
          </div>
          <div className="flex justify-center w-full h-full mt-8 overflow-x-scroll xl:overflow-hidden">
            <form  enctype="multipart/form-data" className="mb-2 w-80 max-w-screen-lg sm:w-96" method="post">
              <div className="mb-4 flex flex-col gap-6">
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">ID</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.id} disabled placeholder="" type="text"/>
                </div>
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Name</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.name} disabled  label="Book name" id="name" type="text"/>
                </div>
                <div>
                  <label for="image" class="text-m text-navy-700 dark:text-white">Image</label>
                  <img src={book.image} className="mt-5 mr-6 flex h-20 w-20 items-center justify-center rounded-xl"/>
                </div>
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Import</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.quantity_Import} disabled placeholder="" type="text"/>
                </div>
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Export</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.quantity_Export} disabled placeholder="" type="text"/>
                </div>
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">On Hand</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.quantity_On_Hand} disabled placeholder="" type="text"/>
                </div>
                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Borrowed</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.quantity_Borrowed} disabled placeholder="" type="text"/>
                </div>
                <div>
                  <label for="categories" class="mb-5 text-m text-navy-700 dark:text-white">Category</label>
                  <input className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                   value={book.categoryName} disabled label="Book name" id="categories" type="text"/>
                </div>
              </div>    
              <div className=" float-right linear mt-4 flex items-center ">
                <Link to="/admin/books">
                  <button
                    className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >Back</button>
                </Link>
                <Link to={`/admin/books/edit/${book.id}`}>
                  <button
                    className="ml-2 linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >Update</button>
                </Link>
              </div>        
            </form>
          </div>
        </Card>
      </div>
  );
}

export default Detail;
