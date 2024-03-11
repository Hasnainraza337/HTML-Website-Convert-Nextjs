
export default function CourseCard({ title, description, className }) {
    return (
        <>
            <div className={`course-col ${className}`}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
