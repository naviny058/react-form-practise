In this repo i am practising form in react

first created form using react viea controlled form 

second i use third party library called react-hook-form
```js 
import { useForm } from 'react-hook-form'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

      <input name="name" type="text" {...register("name", { required: "Name is required" })} 
      />  
        {errors.name && <span>{errors.name.message}</span>}
```

that's it 