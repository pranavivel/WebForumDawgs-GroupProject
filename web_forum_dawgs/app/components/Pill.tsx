
type PillProps = {
    title: string;
    textColor: string;
    pillColor: string;
    width: string;
    height: string;
    textSize?: string
}

// Card component. This actually has course discussions and is the entire purpose of this website.
export default function Pill({ title, textColor, pillColor, width, height, textSize = "text-[12px]" }: PillProps) {
    return (
        <div className={`flex items-center justify-center rounded-[20px] ${width} ${height} ${pillColor} max-sm:max-w-full max-sm:h-auto max-sm:min-h-[30px] max-sm:px-3 max-sm:py-1`}>
            <p className={`${textSize} font-bold ${textColor} max-sm:whitespace-normal max-sm:break-words max-sm:text-center max-sm:leading-tight`}>{title}</p>
        </div>
    )
}