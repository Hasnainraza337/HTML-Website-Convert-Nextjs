import Image from "next/image";
import Link from "next/link";
import VerticalLine from "../VerticalLine/VerticalLine";
import FeaturedCard from "@/app/courses/(components)/FeaturedCard/FeaturedCard";
import CourseCard from "@/app/courses/(components)/CourseCard/CourseCard";
import Button from "../Button/Button";

export default function HeroSection() {
    return (
        <>
            <section className="course">
                <VerticalLine />
                <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
                <p>We have more than 50, courses in various niches.</p>

                <div className="row">

                    <CourseCard title="Undergraduate Programs" description="Embark on your academic journey with our comprehensive undergraduate programs, tailored to provide a solid foundation for your future endeavors." />

                    <CourseCard title="Graduate Programs" description="Take the next step in your career with our advanced graduate programs, designed to deepen your expertise and propel you towards success in your chosen field." />

                    <CourseCard title="Adult Learning & Degree Completion" description="Flexible options are available for adult learners seeking to complete their degrees or pursue further education while balancing work and other responsibilities." />
                </div>
            </section>

            <section className="campus">
                <VerticalLine />
                <h1>TAKE OUR VIRTUAL TOUR</h1>
                <p>Take a virtual tour to our campus, and see what we have to offer you.</p>

                <div className="row">
                    <div className="campus-col">
                        <Image src="/images/Campus1.png" alt="campus tour" width={150} height={250} />
                        <div className="layer">
                            <h3>Hyderabad</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <Image src="/images/Campus2.png" alt="campus tour" width={150} height={250} />
                        <div className="layer">
                            <h3>Jamshoro</h3>
                        </div>
                    </div>
                    <div className="campus-col">
                        <Image src="/images/Campus3.png" alt="campus tour" width={150} height={250} />
                        <div className="layer">
                            <h3>Mirpurkhas</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facilities">
                <VerticalLine />
                <h1>Our Facilities</h1>
                <p>We are providing best and high quality facilites to you!</p>

                <div className="row">
                    <FeaturedCard title="Best Library" description="Explore our state-of-the-art library equipped with a vast collection of resources to support your academic journey." alt="Best Library" ImageUrl="/images/libary.png" />

                    <FeaturedCard title="Athletics" description="Stay active and healthy with our top-notch athletic facilities, designed to cater to all fitness levels and interests." alt="Athletics" ImageUrl="/images/playground.png" />

                    <FeaturedCard title="Tasty & Healthy Food" description="Indulge in delicious and nutritious meals prepared by our culinary experts, ensuring a satisfying dining experience for all." alt="Tasty and Healthy Food" ImageUrl="/images/food.png" />

                </div>
            </section>

            <section className="testimonials">
                <VerticalLine />
                <h1>What Our Student Says</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <div className="testimonials-col">
                        <Image src="/images/user.png" alt="user Image" width={50} height={50} />
                        <div>
                            <p>"I've been impressed by the supportive environment and resources available here. It's truly a conducive place for learning and growth."</p>
                            <h3>John Smith</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                    <div className="testimonials-col">
                        <Image src="/images/user.png" alt="user Image" width={50} height={50} />
                        <div>
                            <p>"This institution exceeded my expectations. The faculty is dedicated, the facilities are top-notch, and the overall experience has been enriching."</p>
                            <h3>Jane Doe</h3>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>

            </section>

            <section className="cta">
                <h1>GET READY FOR A BRIGHT FUTURE</h1>
                <Link href="/contact"><Button content="CONTACT US" /></Link>
            </section>
        </>
    )
}
