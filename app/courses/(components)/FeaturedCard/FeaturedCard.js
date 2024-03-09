import Image from "next/image";

export default function FeaturedCard({ title, description, ImageUrl, alt }) {
    return (
        <>
            <div className="facilities-col">
                <Image src={ImageUrl} alt={alt} width={150} height={230} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}
