import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
    const addClassName = className ? ` ${className}` : ''

    const variants = {
        "outline-yellow": `border border-yellow-300 text-yellow-300 hover:text-black hover:bg-yellow-300`,
        "yellow": `bg-yellow-300 text-black hover:bg-yellow-400`,
        "black": `bg-black text-white hover:bg-opacity-90`
    }

    const pickedVariant = variants[variant];

    return (
        <a
            href={href}
            className={classnames(
                "transition py-2 px-8 font-semibold text-lg inline-block",
                pill && "rounded-full",
                pickedVariant,
                addClassName
            )}
        >
            {children}
        </a >
    );
}