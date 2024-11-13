export default function AppHeader(){

    //logica

    const blogTitle = "My Books Blog"
    const blogSubTitle = "Reading makes a straOrdinary life "

    return(
        <header>

            <div className="header_container">
                <h1>{blogTitle}</h1>
                <h3>{blogSubTitle}</h3>

            </div>

        </header>


    )
}