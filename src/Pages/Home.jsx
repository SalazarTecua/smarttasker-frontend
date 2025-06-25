import MainLayout from "../Layout/MainLayout"
import Menu from "../Components/Menu/Menu"
import Content from "../Components/Content/Content"
// import Header from "../Components/Header"
import { Outlet } from "react-router-dom";
export default function Home({ }) {

    return (
        <>
            <MainLayout>
                <Content />  
                {/* <Outlet/>    */}
            </MainLayout>
        </>
    )
}