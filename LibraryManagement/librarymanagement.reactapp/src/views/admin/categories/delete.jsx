import cateApi from "../../../api/categoryAPI"
import Swal from 'sweetalert2';
import {useNavigate, useParams} from "react-router-dom";
import Index from './index';
import Alert from "components/alert";

export function Delete(){
    const {id} = useParams();
    const navigate = useNavigate();
    const deleteCate = async () => {
        await cateApi.Delete(id);
        navigate('/admin/categories');
    }
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to delete this category book?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteCate();
          Alert.showSuccessAlert('Your the category book has been deleted sucessfully!')
        }
        // navigate('/admin/categories');
    })
    return <Index/>
}

export default Delete;