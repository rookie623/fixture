const Score = ({countryOne, countryTwo, scoreOne, scoreTwo}) => {
    return (
        <>
            <div className="score">
                <h4>{countryOne}</h4>
                <p>{scoreOne}</p>
                <p>{scoreTwo}</p>
                <h4>{countryTwo}</h4>
            </div>
        </>
    )
}

export default Score