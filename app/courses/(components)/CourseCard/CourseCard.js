
export default function CourseCard({ title, description }) {
    return (
        <>
            <div className="course-col">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
