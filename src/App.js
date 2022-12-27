import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className="max-w-[1440px]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
