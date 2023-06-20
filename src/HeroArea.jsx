import { MainContent } from "./MainContent";
import { BoxContent } from "./BoxContent";
// import { Box } from "./Box";
import { Box1 } from "./Box1";
const HeroArea = () => {
    return (
        <div>
            <div className="three-section fix-width">
                <MainContent minheading="What We Offer" mainheading="Our Services" para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />

                <div className="flex">
                    {/* <Box ><BoxContent /></Box> */}
                    <Box1 />
                </div>
            </div>
        </div>


    )
}
export { HeroArea };