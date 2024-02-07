// Form - handleSubmit formClass formButtonDiv buttonClass buttonText
const Form = props => {
    return (
        <>
            <form
                onSubmit={props.handleSubmit}
                className={props.formClass}>
                {
                    props.children
                }
                <br />
                <div className={props.formButtonDiv}>
                    <button
                        type="submit"
                        className={props.buttonClass}>
                        {props.buttonText}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form