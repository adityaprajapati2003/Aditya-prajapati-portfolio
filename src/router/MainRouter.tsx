import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home";
// import About from "../app/About";
// import Contact from "../app/Contact";
import AnimationWrapper from "../animation/AnimationWrapper";
// import Project from "../components/Project";
// import Layout from "../app/Layout";
// import Skill from "../components/Skill";
import NotFoundPage from "../components/NotFoundPage";

const MainRouter = createBrowserRouter([{
    path:"/",
    element:<AnimationWrapper>
                <Home/>
            </AnimationWrapper>,
    errorElement:<NotFoundPage/>
}]);

export default MainRouter;


    //     path:'project',
    //     element:
           
    //             <Project/>
            
    // },
    // {
    //     path:'skill',
    //     element:
           
    //             <div style={{marginTop:'10rem'}}>
    //                 <Skill/>
    //             </div>
            
    // },
    // {
    //     path:'contact',
    //     element:
            
    //             <Contact/>
            
    // }