import { useState } from "react"
import { useLocation } from "react-router"

export default function Login(){

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const linkState = useLocation()
    const messagePrompt = linkState.state?.message  || ""

    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
    }

    function handleChange(e){
        const {name, value} = e.target
        setForm(prev=>(
            {
                ...prev,
                [name]: value
            }
        ))
    }
    return(
        <section className="login">
            {messagePrompt && <span className="message-prompt">{messagePrompt}</span>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    className="form-email"
                    />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="form-password"
                />
                <button>Log in</button>
            </form>

            <p>Don't have an account? <span>Create one now</span></p>
        </section>
    )
}