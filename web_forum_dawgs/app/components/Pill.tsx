
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
        <div className={`rounded-[20px] flex items-center justify-center ${width} ${height} ${pillColor}`}>
            <p className={`${textSize} font-bold ${textColor}`}>{title}</p>
        </div>
    )
}