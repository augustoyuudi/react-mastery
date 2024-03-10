import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
  age: number
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor='email'>Email</label>
            <input id='email' {...register('email')} />
          </fieldset>
          <fieldset>
            <label htmlFor='password'>Password</label>
            <input id='password' {...register('password', { required: true })} />
            { errors.password && <span>password is required</span> }
          </fieldset>
          <fieldset>
            <label htmlFor="age">Age</label>
            <input id='age' type='number' {...register('age', { min: 18 })} />
            { errors.age && <span>user must be 18 years or older</span> }
          </fieldset>
          <input type="submit" />
        </form>
      </main>
    </>
  )
}

export default App
