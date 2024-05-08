import { Box, Typography, TextField, Button, Divider } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate("/profile")
  }
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
        <Box sx={{ flex: 1, backgroundColor: "#1b2e35", display: "flex", alignItems: "center" }}>
          <Box width={1 / 2} mx="auto" my="auto" >
            <Typography variant="h2" component="h2" sx={{ color: "white", fontSize: "2.25rem", fontWeight: "bold" }}>Join Now</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <TextField
                fullWidth
                placeholder="Enter Full Name"
                sx={{
                  mb: 2,
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
              />
              <TextField
                fullWidth
                placeholder="Enter Email"
                sx={{
                  mb: 2,
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
              />
              <TextField
                fullWidth
                placeholder="Enter Password"
                sx={{
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
              />
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