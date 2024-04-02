// Components
import Footer from './components/Footer';
import Layout from './components/Layout';
import JarInfo from './components/JarInfo';

// Utils
import './App.css';

function App() {
  return (
    <Layout>
      <>
        <JarInfo />
        <Footer />
      </>
    </Layout>
  );
}

export default App;
