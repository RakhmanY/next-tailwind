import classnames from "classnames";

export default function SectionParagraph({ left, children }) {
    return (
        <p className={classnames(
            "text-lg text-gray-600", !left && "text-center")}>{children}</p>
    );
}