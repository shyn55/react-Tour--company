import PrivateRoute from "./components/PrivateRoute"
import About from "./pages/about/About"
import Article from "./pages/article/Article"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Panel from "./pages/panel/Panel"
import Setting from "./pages/Setting"
import Tour from "./pages/tours/Tour"


const routes=[
       { path: "/", element: <Home /> },
    {
      path: "/article/*",
      element: <Article />,
      children: [
        { path: "kish", element: <h2 style={{textAlign:'center'}}>کیش</h2> },
        { path: "mashhad", element: <h2 style={{textAlign:'center'}}>مشهد</h2> },
        { path: "masole", element: <h2 style={{textAlign:'center'}}>ماسوله</h2> },
        { path: "esfahan", element: <h2 style={{textAlign:'center'}}>اصفهان</h2> },
      ],
    },
    { path: "/about", element: <About /> },
    { path: "/tour/:tourId", element: <Tour /> },
    { path: "/panel", element: <PrivateRoute><Panel /></PrivateRoute> },
    { path: "/setting", element: <PrivateRoute><Setting /></PrivateRoute> },

    { path: "/login", element: <Login /> },
]
export default routes