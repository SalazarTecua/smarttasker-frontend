import { ContentFilterProvider } from "../Components/Content/ContentFilter/ContentFilterContext";
import MainLayout from "../Layout/MainLayout"
import { Outlet } from "react-router-dom";

export default function Home({ }) {

    return (
        <>
            <ContentFilterProvider>
                <MainLayout>
                    <Outlet />
                </MainLayout>
            </ContentFilterProvider>
        </>
    )
}