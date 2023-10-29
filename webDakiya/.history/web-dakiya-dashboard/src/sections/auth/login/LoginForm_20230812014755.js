import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Typography,
  CircularProgress,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import validateEmail from '../../../utils/validate-email';
import Iconify from '../../../components/iconify';
import { loginUserReq } from './login-services';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = () => {
    // check for valid email
    if (!validateEmail(email)) {
      setErrMsg('Invalid Email ID');
    } else {
      setLoading(true);
      setErrMsg('');
      loginUserReq(email, password)
        .then((res) => {
          const {
            data: { token },
          } = res;
          localStorage.setItem('authToken', token);
          setLoading(false);
          navigate('/dashboard/projects', { replace: true });
        })
        .catch(({ response }) => {
          setLoading(false);
          const {
            data: { message },
          } = response;
          const err = message || 'Something went wrong!';
          setErrMsg(err);
        });
    }
  };
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email address" />

        <TextField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <Typography variant="body2" color={'red'} sx={{ mb: 5 }}>
        {errMsg}
      </Typography>
      <LoadingButton
        startIcon={loading && <CircularProgress size={20} />}
        disabled={loading}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={loginHandler}
      >
        Login
      </LoadingButton>
    </>
  );
}
