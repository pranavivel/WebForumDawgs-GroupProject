
type PillProps = {
    title: string;
    textColor: string;
    pillColor: string;
    width: string;
    height: string;
}

// Card component. This actually has course discussions and is the entire purpose of this website.
export default function Pill({ title, textColor, pillColor, width, height }: PillProps) {
    return (
        <div className={`rounded-[20px] flex items-center justify-center ${width} ${height} ${pillColor}`}>
            <p className={`text-[12px] font-bold ${textColor}`}>{title}</p>
        </div>
    )
}