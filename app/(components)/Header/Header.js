import Navbar from "../Navbar/Navbar";

export default function Header({ title }) {
    return (
        <>
            <section className="Sub-header">
                <Navbar />
                <h1 className="wow animate__animated animate__bounce">{title}</h1>
            </section>
        </>
    )
}
