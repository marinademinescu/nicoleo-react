import { useNavigate } from "react-router-dom"

const About = () => {

    const navigate = useNavigate()

    const handleBacktoHome = () => {

        navigate("/")
    }
    return (
        <div>
            <h1>ABOUT</h1>
            <h2>Informazioni sull'applicazione</h2>
            <p>Questa applicazione ti permette di gestire una lista di todo</p>
            <button onClick={handleBacktoHome}>back to homepage</button>
        </div>
    )
}

export default About 