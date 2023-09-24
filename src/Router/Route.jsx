
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Route = () => {
    return (
        <div>
           <div className='max-w-7xl mx-auto'>
           <Header></Header>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Route;