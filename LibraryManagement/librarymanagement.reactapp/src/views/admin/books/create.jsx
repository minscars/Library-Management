import Card from "components/card";
import { useEffect, useState } from "react";
import cateApi from "../../../api/categoryAPI"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import bookApi from "../../../api/bookAPI"
import Alert from "components/alert";
import {useNavigate} from "react-router-dom";

export function Create() {
  
  const [catesList, setCates] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const getall = async ()=>{
      const data = await cateApi.GetAll();
      setCates(data);
  }
    getall();
  },[])

  const { register, handleSubmit } = useForm();

  const [imageUploadFile, setImageUploadFile] = useState(null);
  const onFileChange = (event) => {
      setImageUploadFile(event.target.files[0]);
  };

  const addBook = async (content) => {
    const formData = new FormData();
    //content.image = imageUploadFile
    formData.append("Name", content.name);
    formData.append("CategoryId", content.categoryid);
    formData.append("Image", imageUploadFile);
    console.log(formData)
    await bookApi.Create(formData);
    Alert.showSuccessAlert('Add your book sucessfully!')
    navigate('/admin/books');
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
            <form onSubmit={handleSubmit(addBook)} enctype="multipart/form-data" className="mb-2 w-80 max-w-screen-lg sm:w-96" method="post">
              <div className="mb-4 flex flex-col gap-6">

                <div>
                  <label for="name" class="text-m text-navy-700 dark:text-white">Name</label>
                  <input
                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                  {...register("name")} extra=""  label="Book name" placeholder=""  id="name" type="text"/>
                </div>

                <div>
                  <label for="image" class="text-m text-navy-700 dark:text-white">Image</label>
                  <input
                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                  {...register("image")} onChange = {onFileChange} extra="" label="Image" id="image" placeholder="" type="file"/>
                </div>

                <div>
                  <label for="categories" class="mb-5 text-m text-navy-700 dark:text-white">Category</label>
                  <select {...register("categoryid")}  id="categories" class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none">
                    <option selected>Choose a category</option>
                    {catesList.map((row, key) => {
                      return(
                        <option value={row.id}>{row.name}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
              
              <div className=" float-right linear mt-4 flex items-center ">
                <Link to="/admin/books">
                  <button
                    className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >Cancel</button>
                </Link>

                <button
                  type="submit"
                  className="ml-2 linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                >Add book</button>
              </div>        
            </form>
          </div>
        </Card>
      </div>
  );
}

export default Create;
