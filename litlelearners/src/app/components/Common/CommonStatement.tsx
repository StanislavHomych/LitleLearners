// Components
import { CommonStatementProps } from "@/app/types/Components/Common";


const CommonStatement: React.FC<CommonStatementProps> = ({ title }) => {
    return <div className="w-fit border border-gray-950 rounded-lg p-3 bg-white font-semibold">{title}</div>
}

export default CommonStatement;