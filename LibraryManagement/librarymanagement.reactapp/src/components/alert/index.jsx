import Swal from 'sweetalert2';

const Alert = {
  showSuccessAlert: (message, action) => {
    Swal.fire({
        title: 'Successfully!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(action)
  },
  showErrorAlert: (message, action) => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK'
    }).then(action)
  },
  showConformAlerrt: () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}

export default Alert;