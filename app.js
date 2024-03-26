import React from "react"
import ReactDOM from "react-dom/client"



// const header =React.createElement("div",{className:"title"},[React.createElement("h1",{},"iam h1 tag😎"),React.createElement("h2",{},"iam h2 tag😊"),React.createElement("h3",{},"iam h3 tag😂")])

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(header)

// ○ Create the same element using JSX
// ○ Create a functional component of the same with JSX
// ○ Pass attributes into the tag in JSX
// ○ Composition of Component(Add a component inside another)
// ○ {TitleComponent} vs {<TitleComponent/>} vs
// {<TitleComponent></TitleComponent>} in JSX

// const header = (<div className="title">
//     <h1>iam h1 tag😂</h1>
//     <h2>iam h2 tag😊</h2>
//     <h3>iam h3 tag😎</h3>
// </div>)

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(header)

// const Header=()=>(
//     <div className="title">
//         <h1>Namasthe india😒</h1>
//         <h2>Namasthe covid😁</h2>
//         <h3>Namasthe IPL😍</h3>
//     </div>
// )
// const amount=6000
// const elem=(
//     <div id="container">
//          <h2>{amount}</h2>
//         <h1>Namasthe React</h1>
//     </div>
// )

// const Header=()=>(
//     <div className="title">
//         {elem}
//          <h1>Namasthe india😒</h1>
//          <h2>Namasthe covid😁</h2>
//           <p>{56+58}</p>
//          <h3>Namasthe IPL😍</h3>
//          {<Footer></Footer>}
//          {Footer()}
//    </div>
// )

// const Footer= ()=>(
//     <div className="title">
//      <h1>Namasthe india😒</h1>
//      <h2>Namasthe covid😁</h2>
//      <h3>Namasthe IPL😍</h3>
//     </div>
// )

// const root=ReactDOM.createRoot(document.getElementById("root"))
//  root.render(<Header></Header>)

// ● Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice


const Header=()=>(
    <header className="header">
        <div className="logo">
            <img src="https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/02-audience.jpg"></img>
        </div>
        <div className="search">
            <input type="text" placeholder="Search.."/>
        </div>
        <div className="user">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s"></img>
        </div>
    </header>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)