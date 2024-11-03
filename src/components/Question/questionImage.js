const questionImage = ({imageUrl}) => {
    if(!imageUrl){
        return <div className="error"></div>;
    }
    return(
        <div className="question-image">
            <img src={imageUrl}></img> 
        </div>
    )
} //pass in the imageUrl HTML

export default questionImage;

