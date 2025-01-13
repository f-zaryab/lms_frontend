/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import axios from "axios";

const apiUrlAuth =
  "https://t21znd3wk4.execute-api.us-east-1.amazonaws.com/userapi";

const apiUrlVid =
  "https://j1nldfvzy8.execute-api.us-east-1.amazonaws.com/vidapi";

const apiUrlRecommender =
  "https://kbc3ojencc.execute-api.us-east-1.amazonaws.com/recom";

interface StoreState {
  videos: any;
  fetchVideoAll: () => void;
  recommendedVid: any;
  fetchRecomVid: () => void;
  user: any;
  usersArr: any;
  fetchAllUsers: () => void;
  signupUser: (data: any) => void;
  loginUser: (data: any) => void;
  updateUser: (data: any) => void;
  deleteUser: () => void;
  updateLikes: (data: any) => void;
}

const useStore = create<StoreState>((set, get) => ({
  videos: [],

  fetchVideoAll: async () => {
    const url = `${apiUrlVid}/api/v1/videos`;

    try {
      const response = await axios.get(url);
      set({ videos: response?.data || [] });
    } catch (error) {
      console.error("Failed to fetch menu items:", error);
    }
  },

  recommendedVid: [],

  fetchRecomVid: async () => {
    const url = `${apiUrlRecommender}/api/v1/recom`;

    try {
      const response = await axios.get(url);
      set({ recommendedVid: response?.data || [] });
    } catch (error) {
      console.error("Failed to fetch menu items:", error);
    }
  },

  user: {
    username: "",
    email: "",
    token: "",
  },

  usersArr: [],

  fetchAllUsers: async () => {
    const url = `${apiUrlAuth}/api/v1/allusers`;

    try {
      const response = await axios.get(url);
      set({ recommendedVid: response?.data || [] });
    } catch (error) {
      console.error("Failed to fetch menu items:", error);
    }
  },

  signupUser: async (data: any) => {
    const url = `${apiUrlAuth}/api/v1/users`;
    const body = {
      username: data.username,
      password: data.password,
      email: data.email,
    };

    try {
      const response = await axios.post(url, body);
      set((state) => ({
        user: {
          ...state.user,
          username: data.username,
          email: data.email,
          ...response?.data,
        },
      }));
    } catch (error) {
      console.error("Error from API: ", error);
    }
  },

  loginUser: async (data: any) => {
    const url = `${apiUrlAuth}/api/v1/login`;
    const body = {
      password: data.password,
      email: data.email,
    };

    try {
      const response = await axios.post(url, body);
      set((state) => ({
        user: {
          ...state.user,
          username: data.username,
          email: data.email,
          ...response?.data,
        },
      }));
    } catch (error) {
      console.error("Error from API: ", error);
    }
  },

  updateUser: async (data: any) => {
    const url = `${apiUrlAuth}/api/v1/users/${get().user.email}`;
    const headers = {
      Authorization: `Bearer ${get().user.token}`,
    };
    const body = {
      username: data.username,
      password: data.password,
    };

    try {
      const response = await axios.put(url, body, { headers });
      console.log(response);
      set((state) => ({
        user: {
          ...state.user,
          username: data.username,
          ...response?.data,
        },
      }));
    } catch (error) {
      console.error("Error from API: ", error);
    }
  },

  deleteUser: async () => {
    const url = `${apiUrlAuth}/api/v1/users/${get().user.email}`;
    const headers = {
      Authorization: `Bearer ${get().user.token}`,
    };

    try {
      const response = await axios.delete(url, { headers });
      console.log(response);
      set(() => ({
        user: {
          username: "",
          email: "",
          token: "",
        },
      }));
    } catch (error) {
      console.error("Error from API: ", error);
    }
  },

  updateLikes: async (data: any) => {
    const url = `${apiUrlVid}/api/v1/videos/${data.id}`;
    const body = {
      incrementBy: data.incrementBy,
    };

    try {
      const response = await axios.put(url, body);
      console.log("API-Response: ", response);
    } catch (error) {
      console.error("Error from API: ", error);
    }
  },
}));

export default useStore;
