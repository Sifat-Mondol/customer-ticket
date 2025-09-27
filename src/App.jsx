import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Main/Hero';
import Footer from './components/Footer/Footer';
import { Suspense } from 'react';
import Loading from './components/Others/Loading';
import { ToastContainer } from 'react-toastify';

const fetchIssues = async () => {
  const result = await fetch('/data.json');
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loading></Loading>}>
        <Hero fetchPromise={fetchPromise}></Hero>
      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
