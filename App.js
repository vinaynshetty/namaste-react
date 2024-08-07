// // const heading = React.createElement(
// //     "h1",{id:"heading"},
// //     "Hello world from React!"
// // );

// console.log(heading);  // it gives a object

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"iam h1 tag"),
        React.createElement("h2",{},"iam h2 tag"),
    ]),
    // React.createElement("div",{id:"child2"},[
    //     React.createElement("h1",{},"iam h1 tag"),
    //     React.createElement("h2",{},"iam h2 tag"),
    // ]),
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);