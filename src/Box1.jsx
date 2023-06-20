import { Details } from "./Details";
const Box1 = () => {
    return (
        <>
            {
                Details.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <h1>{item.heading}</h1>
                            <p>{item.boxpara}</p>
                        </div>
                    )
                })
            }

        </>

    )
}
export { Box1 };