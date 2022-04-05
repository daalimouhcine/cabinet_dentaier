import LogIn from './components/login/LogIn';
// import Form from './components/register/Form';
import './components/register/SASS/Form.css';

const App = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            {/* <Form /> */}
            <LogIn />
        </div>
    )
}

export default App;