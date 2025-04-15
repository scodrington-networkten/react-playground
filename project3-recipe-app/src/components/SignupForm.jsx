const SignupForm = () => {


    function signup(formData) {
        console.log(formData);
    }

    return (
        <>
            <div className="signup-form">
                <form action={signup}>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input id="email" defaultValue="joe@schmoe.com" type="text" name="email"
                               placeholder="joe@schmoe.com"/>
                    </p>
                    <p>
                        <label htmlFor="password">Password:</label>
                        <input id="password" defaultValue="password123" type="password" name="password"/>
                    </p>
                    <p>
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </>
    )
}
export default SignupForm
