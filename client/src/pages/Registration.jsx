import { Box, Typography, TextField, Button, Divider } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import { useEffect } from "react";
import Cookies from 'js-cookie'
import useThinkify from "../hooks/useThinkify";
import AlertBox from "../../components/common/AlertBox";

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

const Registration = () => {
  const navigate = useNavigate();
  const { alertMessage, alertBoxOpenStatus, setAlertBoxOpenStatus, setAlertMessage, setAlertSeverity } = useThinkify();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    try {
      const response = await axios({
        baseURL: import.meta.env.VITE_SERVER_ENDPOINT,
        url: "/users/registration",
        withCredentials: true,
        method: "POST",
        data
      });
      if (response.data.status) {
        navigate("/profile")
        console.log(response.data.message);
      } else {
        setAlertBoxOpenStatus(true);
        setAlertSeverity("error");
        setAlertMessage(response.data.message)
        console.log(alertBoxOpenStatus, alertMessage)
      }
    } catch (error) {
      console.log(error);
      setAlertMessage(error.message);
      console.log(alertMessage)
      setAlertBoxOpenStatus(true);
      console.log(alertBoxOpenStatus)
    }
  };
  useEffect(() => {
    const cookie = Cookies.get(import.meta.env.VITE_COOKIE_KEY)
    if (cookie) {
      navigate("/profile")
    }
  }, [navigate])
  return (
    <>
      <Box height="100vh" sx={{ display: "flex" }}>
        <Box sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box>
            <img src="/images/auth.jpg" alt="" />
          </Box>
        </Box>
        <Box sx={{ flex: 1, backgroundColor: "#1b2e35", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <AlertBox />
          <Box width={1 / 2} mx="auto" my="auto" >
            <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: "2.25rem", fontWeight: "bold" }}>Join Now</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
              <TextField
                fullWidth
                placeholder="Enter Full Name"
                sx={{
                  mb: 1,
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    "&::placeholder": {
                      color: "white",
                    },
                  },
                }}
                {...register("fullName", { required: true })}
              />
              {errors.fullName && <Typography variant="p" component="p" sx={{ color: "red", mb: 2 }}>{errors.fullName.message}</Typography>}
              <TextField
                fullWidth
                placeholder="Enter Email"
                sx={{
                  mb: 1,
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    "&::placeholder": {
                      color: "white",
                    },
                  },
                }}
                {...register("email", { required: true })}
              />
              {errors.email && <Typography variant="p" component="p" sx={{ color: "red", mb: 2 }}>{errors.email.message}</Typography>}
              <TextField
                fullWidth
                placeholder="Enter Password"
                type="password"
                sx={{
                  mb: 1,
                  color: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    "&::placeholder": {
                      color: "white",
                    },
                  },
                }}
                {...register("password", { required: true })}
              />
              {errors.password && <Typography variant="p" component="p" sx={{ color: "red" }}>{errors.password.message}</Typography>}
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>Join</Button>
            </Box>
            <Divider sx={{ my: 1, color: "white" }}>OR</Divider>
            <Box>
              <Button type="submit" variant="contained" fullWidth startIcon={<GoogleIcon />} >Continue With Google</Button>
            </Box>
            <Box>
              <Typography variant="body2" color="white" sx={{ mt: 4 }}>Already Have an Account?<Link to="/login" style={{ color: "white", marginLeft: "5px" }}>Log In</Link></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Registration