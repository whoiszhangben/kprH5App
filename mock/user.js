export const userApi = [
  {
    url: "/user/info",
    type: "get",
    response: () => {
      return {
        code: 200,
        status: true,
        message: "success",
        data: {
          name: "kpr-h5-app",
        },
      };
    },
  },
];

export default userApi;
