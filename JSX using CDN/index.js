// Another JSX example
// JSX
const navbar = (
    <nav>
        <h1>Something</h1>
        <ul>
            <li>Nav one</li>
            <li>Nav two</li>
            <li>Nav three</li>
            <li>Nav four</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)

/////////////////////////////////////////////////////////////////////////

// // Using react
// ReactDOM.render(
//     <h1 className='header'>This is me using React!</h1>,
//     document.getElementById("root")
// )

// // Using plain JS
// let rootDiv = document.getElementById("root");
// const newh1 = document.createElement("h1");
// newh1.textContent= "This is me using plain JS!";
// newh1.className = 'header'
// rootDiv.append(newh1)

