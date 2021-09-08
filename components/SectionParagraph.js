export default function SectionParagraph({ left, children }) {
    return (
        <p className={`text-lg text-gray-600 ${!left ? " text-center" : ""}`}>{children}</p>
    );
}