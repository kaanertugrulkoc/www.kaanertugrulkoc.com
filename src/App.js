import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Videos from './components/Videos';
import Documents from './components/Documents';
import Tools from './components/Tools';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <section id="blog">
                    <Blog />
                </section>
                <section id="video">
                    <Videos />
                </section>
                <section id="Belgeler">
                    <Documents />
                </section>
                <section id="Araçlar">
                    <Tools />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
