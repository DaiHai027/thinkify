import { Box, TextField, Button, InputBase, Chip } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const AddPost = () => {
  const { handleSubmit, register } = useForm();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && tag.trim() !== "") {
      event.preventDefault();
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };
  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
  };
  const onSubmit = (data) => {
    console.log(data, tags, description);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box sx={{ flex: "1" }}>
              <Box
                sx={{
                  border: "1px solid lightgray",
                  padding: "7px",
                  borderRadius: "5px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {tags.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "#1b2e35",
                      color: "white",
                      borderRadius: "25px",
                      fontSize: "13px",
                      padding: "5px",
                      "& .MuiChip-deleteIcon": {
                        color: "white",
                        marginLeft: "px",
                      },
                      "& .MuiChip-deleteIcon:hover": {
                        color: "white",
                        marginLeft: "px",
                      },
                    }}
                    onDelete={() => handleRemoveTag(index)}
                  />
                ))}

                <InputBase
                  sx={{
                    outline: "none",
                    borderBottom: " 1px solid #1b2e35",
                    padding: "1px 10px 0 10px",
                    "& input::placeholder": {
                      color: "#1b2e35",
                      opacity: "0.8",
                    },
                  }}
                  placeholder="Enter Your Tag"
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </Box>
            </Box>
            <Box sx={{ flex: "1" }}>
              <Box>
                <label
                  htmlFor=""
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  Title
                </label>
                <SimpleMdeReact
                  id="description"
                  value={description}
                  onChange={setDescription}
                />
              </Box>
            </Box>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              color: "white",
              backgroundColor: "#1b2e35",
              "&:hover": { backgroundColor: "#1b2e35" },
            }}
          >
            Post
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddPost;
