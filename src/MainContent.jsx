const MainContent = (props) => {
    return (
        <>
            <h2 className="min-heading">{props.minheading}</h2>
            <h1 className="main-heading">{props.mainheading}{props.mainheading1}<br />{props.mainheading2}</h1>
            <p className="paragrah">{props.para}</p>
        </>
    )
}
export { MainContent };