import Header from "../(components)/Header/Header";
import CourseCard from "./(components)/CourseCard/CourseCard";
import FeaturedCard from "./(components)/FeaturedCard/FeaturedCard";

export default function Courses() {
    return (
        <>
            <Header title={"OUR COURSES"} />

            <section className="course">
                <h1 className="wow animate__animated animate__fadeInUp">Courses We Offer</h1>
                <p className="wow animate__animated animate__fadeInUp">Explore our wide range of courses designed to meet diverse educational needs and career aspirations.</p>

                <div className="row">
                    <CourseCard className="wow animate__animated animate__fadeInLeft" title="Undergraduate Programs" description="Embark on your academic journey with our comprehensive undergraduate programs, tailored to provide a solid foundation for your future endeavors." />

                    <CourseCard className="wow animate__animated animate__fadeInUp" title="Graduate Programs" description="Take the next step in your career with our advanced graduate programs, designed to deepen your expertise and propel you towards success in your chosen field." />

                    <CourseCard className="wow animate__animated animate__fadeInRight" title="Adult Learning & Degree Completion" description="Flexible options are available for adult learners seeking to complete their degrees or pursue further education while balancing work and other responsibilities." />

                </div>

            </section>


            <section className="facilities">
                <h1 className="wow animate__animated animate__fadeInUp">Featured Courses</h1>
                <p className="wow animate__animated animate__fadeInUp">Discover our curated selection of cutting-edge courses designed to empower you with in-demand skills for today's dynamic job market.</p>

                <div className="row">

                    <FeaturedCard className="wow animate__animated animate__fadeInLeft" title="Web Development" description="Master the art of web development and unlock endless opportunities in the digital realm with our comprehensive course." ImageUrl="/images/course1.png" alt="Web Development" />

                    <FeaturedCard className="wow animate__animated animate__fadeInUp" title="Artificial Intelligence" description="Dive into the fascinating world of artificial intelligence and harness the power of cutting-edge technologies to drive innovation." ImageUrl="/images/course2.png" alt="Artificial Intelligence" />

                    <FeaturedCard className="wow animate__animated animate__fadeInRight" title="Data Science" description="Explore the limitless possibilities of data science and become proficient in analyzing complex datasets to extract valuable insights." ImageUrl="/images/course3.png" alt="Data Science" />

                </div>
            </section>

        </>
    )
}
