import './custom.css';
import HomePage from './Pages/HomePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <div>
        <HomePage />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
