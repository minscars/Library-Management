import bookApi from "../../../api/bookAPI"
import Swal from 'sweetalert2';
import {useNavigate, useParams} from "react-router-dom";
import Index from './index';
import Alert from "components/alert";

export function Delete(){
    const {id} = useParams();
    const navigate = useNavigate();
    const deleteBook = async () => {
        await bookApi.Delete(id);
        //navigate('/admin/books');
    }
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete this book?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteBook();
          Alert.showSuccessAlert('Your book has been deleted sucessfully!')
        }
        navigate('/admin/books');
    })
    return <Index/>
}

export default Delete;