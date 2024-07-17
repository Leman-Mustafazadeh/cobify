import Home from "../components/Home";
import Login from "../components/Login";
import AddDemo from "../page/AddDemo";
import DemoDetail from "../page/DemoDetail";
import UserRouter from "../page/UserRouter";

export const ROUTES= [{
    
        path:'/',
        element:<UserRouter/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"adddemo",
            element:<AddDemo/>
        },
        {
            path:"demodetail/:id",
            element:<DemoDetail/>
        },
    ]
    
}]