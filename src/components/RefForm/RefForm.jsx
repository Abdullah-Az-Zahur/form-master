import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)

    useEffect(() => { 
        nameRef.current.focus();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.phone.value);
        // console.log("form submitted");
        console.log(nameRef?.current?.value);
        console.log(emailRef?.current?.value);
        console.log(phoneRef?.current?.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="text" name="email" />
                <br />
                <input ref={phoneRef} type="text" name="phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;