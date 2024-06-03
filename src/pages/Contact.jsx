import { useState } from "react"
import axios from 'axios'


function Contact() {
    const baseState = {
        name: '',
        email: '',
        message: ''
    }
    
    const [formData, setFormData] = useState(baseState)
    console.log(formData)
    
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.name
        })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        //   const url =  'https://api.web3forms.com/submit'
        //   const res = await axios.post(url,formData)
        //   console.log(res.data)
        setFormData({ ...baseState })
    }
    
    return (
        <div className=" row my-2 gap-3">
            <div className="col-10 " >
                <h3>Contact</h3>
                <p>I would love to hear from you regarding any coding opportunities or if you have any questions about my work. Send me a quick message and I will get back to you.</p>
            </div>

            <form className="container d-flex flex-column gap-3 col-10 " onSubmit={handleSubmit}>
                <input onChange={handleInputChange} name="name" type="text" value={formData.name} placeholder="Name" required />
                <input onChange={handleInputChange} name="email" type="email" value={formData.email} placeholder="Email" required />
                <textarea onChange={handleInputChange} name="message"rows="10" value={formData.message} placeholder="Enter Your Message Here" required />
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}

export default Contact

