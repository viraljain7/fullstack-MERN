import './common.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our Application</h1>
            </header>
            <section className="home-content">
                <p>This is the home page of our application. Here you can find some basic information and navigate to other sections.</p>
                <div className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Feature 1: Description of feature 1.</li>
                        <li>Feature 2: Description of feature 2.</li>
                        <li>Feature 3: Description of feature 3.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
