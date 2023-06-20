import { BoxContent } from "./BoxContent";
const Box = () => {
    return (
        <>
            <div className="box">
                <BoxContent heading="Brand Identity Design" boxpara="Invest in Bitcoin on the regular or save with one of the highest
                interest rates on the market." />
            </div>
            <div className="box">
                <BoxContent heading="Digital Marketing" boxpara="Invest in Bitcoin on the regular or save with one of the highest
                            interest rates on the market." />
            </div>
            <div className="box">
                <BoxContent heading="Development" boxpara="Invest in Bitcoin on the regular or save with one of the highest
                            interest rates on the market ." />
            </div>

        </>
    )
}
export { Box };