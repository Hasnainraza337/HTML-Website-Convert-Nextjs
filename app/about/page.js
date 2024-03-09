import Image from "next/image";
import Button from "../(components)/Button/Button";
import Header from "../(components)/Header/Header";

export default function About() {
    return (
        <>
            <Header title="ABOUT US" />
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the world's largest University</h1>
                        <p>With a rich history spanning decades, we take pride in being the global leader in higher education. Our commitment to excellence in teaching, research, and innovation sets us apart. Explore our website to discover the myriad opportunities we offer for academic growth, personal development, and career advancement. Join our diverse community of students, faculty, and alumni who are making a difference in the world. Unlock your potential with us today!</p>
                        <Button content="Explore Now" />
                    </div>
                    <div className="about-col">
                        <Image src="/images/about.png" alt="about picture" width={300} height={350} />
                    </div>
                </div>
            </section>
        </>
    )
}
