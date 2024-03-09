import Image from "next/image";
import Header from "../(components)/Header/Header";
import Input from "../(components)/Input/Input";
import Button from "../(components)/Button/Button";

export default function Blog() {
    return (
        <>
            <Header title={" OUR POST"} />

            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <h2>Exploring New Education Trends: The Rise of Certificate & Online Programs</h2>
                        <h5>Mar 9, 2024</h5>
                        <Image src="/images/post.png" alt="post" width={500} height={500} />
                        {/* <img src="img/post.png" alt="" /> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                        <br />
                        <p>In today's fast-paced world, traditional education models are evolving rapidly to meet the needs of learners everywhere. One of the most significant trends shaping the educational landscape is the surge in popularity of certificate and online programs. These innovative learning pathways offer flexibility, accessibility, and practical skills tailored to the demands of modern life.</p>

                        <p>With the advent of technology, obtaining a certificate or pursuing an online program has never been easier. Learners can now access a plethora of courses from the comfort of their own homes, eliminating geographical barriers and time constraints. Whether you're a working professional looking to upskill, a student seeking to supplement your education, or someone simply passionate about continuous learning, there's a program out there for you.</p>

                        <p>But what sets certificate and online programs apart? It's the adaptability and relevance they bring to the table. Unlike traditional degrees, which often require years of commitment, these programs offer a quicker route to acquiring specialized knowledge and skills. From digital marketing and data analysis to coding and project management, the range of subjects covered is vast and varied, catering to diverse interests and career aspirations.</p>

                        <p>Moreover, certificate and online programs are designed with real-world applications in mind. They bridge the gap between theory and practice, equipping learners with the tools they need to succeed in today's competitive job market. Many programs are developed in collaboration with industry experts, ensuring that the content remains current and aligned with industry standards.</p>

                        <p>But perhaps the most appealing aspect of certificate and online programs is their affordability. Compared to traditional degrees, which often come with hefty tuition fees and additional expenses, these programs offer a cost-effective alternative without compromising on quality. With flexible payment options and financial aid opportunities available, learners can pursue their educational goals without breaking the bank.</p>

                        <p>In conclusion, certificate and online programs represent a significant shift in the way we approach education. They offer a convenient, affordable, and practical alternative to traditional learning models, empowering individuals to take control of their education and future career prospects. As the demand for lifelong learning continues to grow, these programs are poised to play a pivotal role in shaping the future of education.</p>


                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className="comment-form">
                                <Input type="text" placeholder="Enter Name" />
                                <Input type="email" placeholder="Enter Email" />
                                <textarea rows="5" placeholder="Your Comment"></textarea>
                                <Button type="submit" content="POST COMMENT" />
                            </form>
                        </div>
                    </div>

                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>12</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>29</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Analytics</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Full Stack</span>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
