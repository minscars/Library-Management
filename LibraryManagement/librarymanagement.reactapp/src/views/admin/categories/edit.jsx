import Card from "components/card";
import cateApi from "../../../api/categoryAPI"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";

import Alert from "components/alert";
import {useNavigate, useParams} from "react-router-dom";

export function Create() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const {id} = useParams();
  const [cate, setCate] = useState([]);
  useEffect(()=>{
    const getbyid = async ()=>{
      const data = await cateApi.GetById(id);
      setCate(data);
    }
    getbyid();
  },[])

  const editCategory = async (content) => {
    const formData = new FormData();
    content.Id = id;
    formData.append("Id", content.Id);
    formData.append("Name", content.name);
    await cateApi.Edit(formData).then((response) => {
      if(response.statusCode === 200){
        Alert.showSuccessAlert(response.message, navigate('/admin/categories'))
      }
      else{
        Alert.showErrorAlert(response.message);
      }
    })

  }

  return (
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Add new book
            </div>
          </div>
          <div className="flex justify-center w-full h-full mt-8 overflow-x-scroll xl:overflow-hidden">
            <form onSubmit={handleSubmit(editCategory)} enctype="multipart/form-data" className="mb-2 w-80 max-w-screen-lg sm:w-96" method="post">
              <div className="mb-4 flex flex-col gap-6">

                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Name</label>
                  <input
                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                  {...register("name")} extra=""  defaultValue={cate.name} label="Category name" placeholder=""  id="name" type="text"/>
                </div>
              </div>
              
              <div className=" float-right linear mt-4 flex items-center ">
                <Link to="/admin/categories">
                  <button
                    className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >Cancel</button>
                </Link>

                <button
                  type="submit"
                  className="ml-2 linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >Update</button>
              </div>        
            </form>
          </div>
        </Card>
      </div>
  );
}

export default Create;
