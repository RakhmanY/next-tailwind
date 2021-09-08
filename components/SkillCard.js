import classnames from "classnames";

export default function SkillCards({ name, level, image, imageClassName }) {
    const addimageClassName = imageClassName ? ` ${imageClassName}` : "";

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 flex items-center">
            <img src={image} className={classnames("mr-6", addimageClassName)} />
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
            </div>
        </div>
    );
}