import { useMemo, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { useMutation, QueryClient, useQuery } from "@tanstack/react-query";

import { addSingleBlog, editSingleBlog, getSingleBlog } from "../apis";
import { avatar } from "../utils";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const params = useParams();
  const id = params?.id || "";
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    content: "",
    author: {
      name: "Admin",
      bio: "Admin",
      avatar: avatar,
    },
    publishedDate: new Date(),
  });

  const { data: singleArticleData } = useQuery({
    queryKey: ["single-blog"],
    queryFn: () => getSingleBlog(id),
    enabled: !!id,
  });

  // Mutations
  const { mutate: addBlogMutation } = useMutation({
    mutationFn: addSingleBlog,
    onSuccess: () => {
      // alert("Blog added successfully!");
      setFormData({
        title: "",
        description: "",
        image: "",
        content: "",
        author: { name: "", bio: "", avatar: "" },
        publishedDate: "",
      });
      queryClient.invalidateQueries(["blogs"]);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const { mutate: editBlogMutation } = useMutation({
    mutationFn: editSingleBlog,
    onSuccess: () => {
      setFormData({
        title: "",
        description: "",
        image: "",
        content: "",
        author: { name: "", bio: "", avatar: "" },
        publishedDate: "",
      });
      queryClient.invalidateQueries(["blogs"]);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      const field = name.split(".")[1]; // Extract author field (name, bio, avatar)
      setFormData((prev) => ({
        ...prev,
        author: { ...prev.author, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) return editBlogMutation({ id, payload: formData });
      addBlogMutation(formData);
      return;
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Error submitting blog.");
    }
  };

  useMemo(() => {
    if (!singleArticleData) return;
    setFormData({
      title: singleArticleData?.title || "",
      description: singleArticleData?.description || "",
      image: singleArticleData?.image || "",
      content: singleArticleData?.content || "",
    });
    return;
  }, [singleArticleData]);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {id ? "Edit" : "Add a New"} Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Blog Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="url"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Blog Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>

            <Grid item xs={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit Blog
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default BlogForm;
