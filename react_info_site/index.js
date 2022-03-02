const PageHTML = function () {
    return (
        <div className="container-fluid col-8">
            <header>
                <nav>
                    <img src="react-logo.png" className="reactLogo" alt="" />
                </nav>
            </header>
            <section>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </section>
            <footer>
                <span>© 2022 React development. All rights reserved.</span>
            </footer>
        </div>
    )
}

ReactDOM.render(<PageHTML />, document.getElementById('root'));