import MyNav from "@/components/MyNav";
import Footer from "@/components/Footer";

export default function Layout({children}){
    return (
        <>
            <MyNav />
            <main className={"pt-4"}>
                {children}
            </main>
            <Footer />
        </>
    )
}