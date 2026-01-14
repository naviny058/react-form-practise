import { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "India"
  })
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }
  // practicising form with CONTROLLED FORM 
  return (
    <>
      <form onSubmit={handleSubmit} action="" className="mx-auto w-2xl text-center">
        <div>
          <p>Enter your name:</p>
          <input name="name" onChange={handleChange} value={formData.name} type="text" />
        </div>
        <div>
          <p>Enter your email:</p>
          <input onChange={handleChange} value={formData.email} type="email" name="email" />
        </div>
        <div>
          <p>Enter your password:</p>
          <input onChange={handleChange} value={formData.password} type="password" name="password" />
        </div>
        <div>
          <p>Select your gender:</p>
          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" onChange={handleChange} value="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" onChange={handleChange} id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
        </div>
        <div onChange={handleChange} className="country">
          <select name="country" id="country">
            <option value="India">India</option>
            <option value="Usa">Usa</option>
            <option value="China">China</option>
          </select>
        </div>
        <div>
          <button type="submit" name="submit">Submit</button>
          <button type="reset" name="reset">Reset</button>
        </div>
      </form>
    </>
  )
}