import { Navbar } from "./Navbar";
import { HeaderCarousel } from "./HeaderCarousel";
import { Features } from "./FeatureCards";
import { About } from "./About";
import { Products } from "./Products";
import { Design } from "./Design";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";

export const Main = () => {
    return (
        <div>
            <Navbar />
            <HeaderCarousel />
            <Features />
            <About />
            <Products />
            <Design />
            <Reviews />
            <Footer />
        </div>
    )
}