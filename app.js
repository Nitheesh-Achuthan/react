
const heading = React.createElement("div", {id:"child1"}, 
    React.createElement("h1",{id:"heading"},"i am h1 from child 1")
)
console.log(heading,'ppppppppppppppppp')

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)