/**
 * 
 * <div id="parent">
 * 
 * <div id="child">
 * <h1> I am h1 </h1>
 * <h2> I am h2 </h2>
 * 
 * </div>
 * 
 * <div id="child2">
 * <h1> I am h1 </h1>
 * <h2> I am h2 </h2>
 * 
 * </div>
 * </div>
 */



const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" },

    [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")],

    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")],

    )


)])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);




// const heading = React.createElement("h1", { id: "heading", xyg: "abc" }, "Hello World React");

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);