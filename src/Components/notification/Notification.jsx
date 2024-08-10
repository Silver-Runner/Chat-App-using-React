import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Notification = () => {
  return (
    <div>
      <ToastContainer position='bottom-right'autoClose={2500} />
    </div>
  )
}

export default Notification;
