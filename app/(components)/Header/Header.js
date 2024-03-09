import Navbar from "../Navbar/Navbar";

export default function Header({ title }) {
    return (
        <>
            <section className="Sub-header">
                <Navbar />
                <h1>{title}</h1>
            </section>
        </>
    )
}
