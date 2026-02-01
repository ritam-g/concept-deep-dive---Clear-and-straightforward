import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return res.data;
  }
);
