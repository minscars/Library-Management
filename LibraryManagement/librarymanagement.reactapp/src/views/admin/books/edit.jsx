import Card from "components/card";
import { useEffect, useState } from "react";
import cateApi from "../../../api/categoryAPI";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import bookApi from "../../../api/bookAPI";

import Alert from "components/alert";
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
  const [catesList, setCates] = useState([]);
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getall = async () => {
      const data = await cateApi.GetAll();
      setCates(data);
    };
    const getbyid = async () => {
      const data = await bookApi.GetById(id);
      setBook(data);
    };
    getbyid();
    getall();
  }, []);

  const { register, handleSubmit } = useForm();

  const [fileURL, setFileURL] = useState(null);
  const [imageUploadFile, setImageUploadFile] = useState(null);
  const onFileChange = (event) => {
    setImageUploadFile(event.target.files[0]);
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    }
  };

  const editBook = async (content) => {
    content.Id = id;
    const formData = new FormData();
    formData.append("Id", content.Id);
    formData.append("Name", content.name);
    formData.append("CategoryId", content.categoryid);
    formData.append("Image", imageUploadFile);
    await bookApi.Edit(formData).then((response) => {
      if (response.statusCode === 200) {
        Alert.showSuccessAlert(response.message, navigate("/admin/books"));
      } else {
        Alert.showErrorAlert(response.message);
      }
    });

    // Alert.showSuccessAlert('Edit your book sucessfully!')
    //navigate('/admin/books');
  };

  return (
    <div className="mt-5 gap-5 xl:grid-cols-2">
      <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Update your{" "}
            <span>
              {'"'}
              {book.name}
              {'"'}
            </span>{" "}
            Book
          </div>
        </div>
        <div className="mt-8 flex h-full w-full justify-center overflow-x-scroll xl:overflow-hidden">
          <form
            onSubmit={handleSubmit(editBook)}
            enctype="multipart/form-data"
            className="mb-2 w-80 max-w-screen-lg sm:w-96"
            method="post"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <label for="name" class="text-m text-navy-700 dark:text-white">
                  Name
                </label>
                <input
                  className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                  {...register("name")}
                  autoFocus
                  defaultValue={book.name}
                  extra=""
                  label="Book name"
                  placeholder=""
                  id="name"
                  type="text"
                />
              </div>

              <div>
                <label for="image" class="text-m text-navy-700 dark:text-white">
                  Image
                </label>
                <input
                  className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`}
                  {...register("image")}
                  onChange={onFileChange}
                  extra=""
                  label="Image"
                  id="image"
                  placeholder=""
                  type="file"
                />
                <div className="flex justify-center">
                  <img
                    src={book.image}
                    alt=""
                    className="mb-3 mr-6 mt-5 h-[120px] w-auto rounded-xl border-2 3xl:h-full 3xl:w-full"
                  />
                  {fileURL && (
                    <img
                      src={fileURL}
                      alt="Preview Image"
                      className="mb-3 mr-6 mt-5 h-[120px] w-auto rounded-xl border-2 3xl:h-full 3xl:w-full"
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  for="categories"
                  class="text-m mb-5 text-navy-700 dark:text-white"
                >
                  Category
                </label>
                <select
                  required
                  {...register("categoryid")}
                  id="categories"
                  class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none"
                >
                  <option>Choose a category</option>
                  {catesList.map((row, key) => {
                    return <option value={row.id}>{row.name}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className=" linear float-right mt-4 flex items-center ">
              <Link to="/admin/books">
                <button className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                className="linear ml-2 mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Update;
