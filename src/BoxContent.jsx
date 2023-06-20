const BoxContent = (props) => {
    return (
        <>
            <h1>{props.heading}</h1>
            <p>
                {props.boxpara}
            </p>
        </>
    )
}
export { BoxContent };