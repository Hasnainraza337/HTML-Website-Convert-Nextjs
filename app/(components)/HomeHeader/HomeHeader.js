import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

export default function HomeHeader() {
    return (
        <>
            <section className="header">
                <Navbar />
                <div className="text_box">
                    <h2>GET READY</h2>
                    <p id="headtext">TO DISCOVER CAMPUS</p>
                    <p>Join us to explore the exciting world of skill development! At "Xplore Skills", we offer a dynamic learning environment where you can unlock your potential and enhance your abilities. Whether you're looking to develop new talents or refine existing skills, our campus is the perfect place for growth and discovery.</p>
                    <Link href="/" ><Button content="Visit Us To Know More" /></Link>
                </div>
            </section>
        </>
    )
}
