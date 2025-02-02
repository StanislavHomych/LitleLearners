import { BenefitsInfoProps } from "@/app/types/Components/Benfits"

const BenefitsInfo: React.FC<BenefitsInfoProps> = ({ Icon, text, heading }) => {
    return <div className="bg-slate-50 shadow-blackFull rounded-lg py-4 px-4 border-2 border-gray-950 relative " >
        <div className="absolute p-2 bg-orange-75 rounded-lg border-2 border-gray-950 top-[-30px]"><Icon /></div>
        <h4 className="pt-4 font-semibold mb-2">
            {heading}
        </h4>
        <p>
            {text}
        </p>
    </div>
}

export default BenefitsInfo