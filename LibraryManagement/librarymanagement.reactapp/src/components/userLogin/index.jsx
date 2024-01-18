import userAPI from "api/userApi";
import jwt from "jwt-decode";
export default async function useUserLogin() {
  const userLogin = jwt(window.localStorage.getItem("token"));
  const user = await userAPI.GetUserById(userLogin.id);
  if (!!user) {
    // const userDetails = {
    //   userName: user.name,
    //   userAvatar: user.avatar,
    //   // Add more properties as needed
    // };
    return await user;
  }
  return null;
}
