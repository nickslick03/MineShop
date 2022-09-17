import { Header } from "../ui/Header";

export const Home = () => {
    return <>
        <Header />
        <main className="my-52 p-4 box-border flex gap-32 flex-col items-center justify-center">
            <div className="text-5xl text-center">
                All your Minecraft needs in one website
            </div>
            <div className="text-xl text-center">
                We are the first website to accept emarlds as currency. Our prices will match or best any villager. Buy from us or you're a cube
            </div>
            <div>
                <a href="#" className="text-lg hover:text-xl transition-all">
                    Browse Products -{">"}
                </a>
            </div>
        </main>
    </>;
};
