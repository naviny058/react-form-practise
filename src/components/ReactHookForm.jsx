import { useForm } from 'react-hook-form'
export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log('formdata', data)
  return (
    <div className="max-w-4xl mx-auto text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-2xl text-center">
        <div>
          <p>Enter your name:</p>
          <input name="name" type="text" {...register("name", { required: "Name is required" })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <p>Enter your email:</p>
          <input type="email" name="email" {...register("email")} />
        </div>
        <div>
          <p>Enter your password:</p>
          <input {...register('password')} type="password" name="password" />
        </div>
        <div>
          <p>Select your gender:</p>
          <input type="radio" id="male" {...register("gender")} name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" {...register("gender")} value="female" />
          <label htmlFor="female">Female</label>
          <input {...register("gender")} type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
        </div>
        <div className="country">
          <select name="country" {...register('country')} id="country">
            <option value="India">India</option>
            <option value="Usa">Usa</option>
            <option value="China">China</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => reset()}>Reset</button>
        </div>
      </form>
    </div>
  )
}