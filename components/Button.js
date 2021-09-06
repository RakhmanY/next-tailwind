export default function Button({ className , variant , children }) {
    const addClassName = className ? ` ${className}` : ''
    
    const variants = {
        "outline-yellow": `border border-yellow-300 text-yellow-300`,
        "yellow": `bg-yellow-300 text-black`
    }

    const pickedVariant = variants[variant];

    return (
        <a className={`py-2 px-8 font-semibold text-lg rounded-full inline-block ${pickedVariant}${addClassName} `}>
            {children}
        </a>
    );
}