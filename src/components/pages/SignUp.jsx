import {
  Box,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
} from '@mui/material'
import { Button, Grid, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Copyright from '../UI/Copyright'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onFormSubmit = (data) => {
    // console.log(data)
    // createUserWithEmailAndPassword(auth, data.email, data.password)
    //   .then((userCredential) => {
    //     console.log(userCredential)
    //     // create a user in your firebase realtime database too and store the user's data in it
    //     const user = userCredential.user
    //     db.collection('users').doc(user.uid).set({
    //       username: data.username,
    //       phone_number: data.phone_number,
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    signUpWithEmailAndPassword(
      data.email,
      data.password,
      data.username,
      data.phone_number
    )
  }

  async function signUpWithEmailAndPassword(
    email,
    password,
    username,
    phoneNumber
  ) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const db = getFirestore()
      const usersCollection = collection(db, 'users')

      await addDoc(usersCollection, {
        userId: user.uid,
        email,
        username,
        phoneNumber,
      })

      console.log('User has been signed up!')
    } catch (error) {
      console.log('Error signing up user: ', error)
    }
  }
  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>
          <Box
            component='form'
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              {...register('username', {
                required: 'Username is required',
              })}
            />
            {errors.username && (
              <div className='text-red-500 text-xs italic'>
                {errors.username.message}
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              type='email'
              autoComplete='email'
              autoFocus
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
            {errors.email && (
              <div className='text-red-500 text-xs italic'>
                {errors.email.message}
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='phone_number'
              label='Phone Number'
              type='text'
              id='phone-number'
              autoComplete='phone-number'
              {...register('phone_number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]\d{12}$/,
                  message: 'Entered value does not match phone number format',
                },
              })}
            />
            {errors.phone_number && (
              <div className='text-red-500 text-xs italic'>
                {errors.phone_number.message}
              </div>
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <div className='text-red-500 text-xs italic'>
                {errors.password.message}
              </div>
            )}

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href='/login' variant='body2'>
                  {'Have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

export default SignUp
