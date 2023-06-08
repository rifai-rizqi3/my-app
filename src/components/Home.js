import { Container } from "react-bootstrap";
import vector from "../assets/img/vektor.png";

export const Home = () => {
    return (
        <section className="home">
            <Container>
                <div className="d-flex">
                    <div className="wrap-text">
                        <span className="tagline">Hello World! </span>
                        <h1>Hallo, I’m Rizqi.</h1>
                        <p> I am passionate about becoming a Fullstack Developer and DevOps Engineer professional who can build user-friendly websites and add value to others by sharing knowledge and insights. By combining my expertise in frontend development and DevOps, I am dedicated to creating exceptional user experiences and ensuring smooth-running systems.
                        </p>
                        <p>
                        Furthermore, I strongly believe in empowering others through the sharing of knowledge and perspectives. I take pleasure in making positive contributions to the developer community by organizing events, teaching, or contributing to open-source projects. I believe that the more we share, the more we grow together.
                        </p>
                        <p>Welcome to my personal space, where I merge my skills in Frontend Development, Backend Development and DevOps to create outstanding solutions and share knowledge with others. Together, we can build great websites, reliable systems, and a strong community.
                        </p>
                    </div>
                    <div className="image">
                        <img src={vector} />
                    </div>
                </div>
            </Container>
        </section>
    )
}