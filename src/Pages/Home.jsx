import MainLayout from "../Layout/MainLayout"
import { Outlet } from "react-router-dom";
export default function Home({ }) {

    return (
        <>
            <MainLayout>
                <Outlet/>   
            </MainLayout>
        </>
    )
}