const Logo = () => {
return(
    <div>
        <img src="data:image/jpeg;base64,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"/> 
    </div>
)
};

export default Logo