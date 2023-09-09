import Card from "components/card";
import InputForm from "components/fields/InputForm";
import { useEffect, useState } from "react";
import cateApi from "../../../api/categoryAPI"
export function Create() {
  
  const [catesList, setCates] = useState([]);
  
  useEffect(()=>{
    const getall = async ()=>{
      const data = await cateApi.GetAll();
      setCates(data);
  }
    getall();
  },[])
  return (
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Add new book
            </div>
          </div>
          <div class="w-full h-full mt-8 overflow-x-scroll xl:overflow-hidden">
            <form className="ml-20 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <InputForm extra="" label="Book name" placeholder="" id="name" type="text"/>
                <InputForm extra="" label="Image" placeholder="" id="image" type="file"/>
                <div>
                  <label for="countries" class="mb-3 block text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a category</option>
                  {catesList.map((row, key) => {
                    return(
                      <option value={row.id}>{row.name}</option>
                    );
                  })}
                  </select>
                </div>

              </div>
              
              <div className="flex linear mt-4 flex items-center justify-center">
                <button
                  href=" "
                  className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >Cancel</button>

                <button
                  href=" "
                  type="submit"
                  className="ml-10 linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >Add book</button>
              </div>        
            </form>
          </div>
        </Card>
      </div>
  );
}

export default Create;
