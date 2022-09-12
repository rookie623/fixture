import Score from "./Score"
import DateMatch from "./DateMatch"
import codigos from '../codes.json'

const Match = ({group}) => {
    return (
        <>
            <div className="match">
                <DateMatch/>
                <Score countryOne={codigos[group.countries[0]]} scoreOne="0" countryTwo={codigos[group.countries[1]]} scoreTwo="0"/>
            </div>
        </>
    )
}

export default Match