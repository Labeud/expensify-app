import { 
  startLogin, login, 
  startLogout, logout
} from "../../actions/auth";

test("should setup the login action", () => {
  const uid = "123abc";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("should setup the logout action", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});