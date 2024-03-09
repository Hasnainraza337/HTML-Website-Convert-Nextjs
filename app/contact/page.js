import Button from "../(components)/Button/Button";
import Header from "../(components)/Header/Header";
import Input from "../(components)/Input/Input";

export default function contact() {
    return (
        <>
            <Header title={"CONTACT US"} />

            <section className="loacation">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2244120419873!2d72.73114439549693!3d31.32517495825086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392252ea35e9f185%3A0xec12eaf8079d5cf3!2sNew%20Lahore%20City%2C%20Naya%20Lahore%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709877124657!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </section>

            <section className="contact-us">
                <div className="row">
                    <div className="content-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>Software Engineering Department</h5>
                                <p>Govt University, Fsd</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>+92 123456789</h5>
                                <p>Monday To Friday, 8AM To 5PM</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>xyz@muet.edu.pk</h5>
                                <p>Email Us Yor Query</p>
                            </span>
                        </div>
                    </div>
                    <div className="content-col">
                        <form>
                            <Input type={"text"} placeholder={"Enter Name"} />
                            <Input type={"email"} placeholder={"Enter Email"} />
                            <Input type={"text"} placeholder={"Enter Subject"} />
                            <textarea rows="8" placeholder="Message" required></textarea>
                            <Button type="submit" content="Send Message" />
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}
