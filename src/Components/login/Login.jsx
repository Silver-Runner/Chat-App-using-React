import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [signupload, setSignupload] = useState(false);
  const [signinload ,setSigninload] =useState(false);

  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = async(e) => {
    e.preventDefault();
    setSigninLoad(true);
    const formData = new FormData(e.target);
    const {email, password } = Object.fromEntries(formData);
    try{
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("You Are Logged  In....");
    }catch (err){
      console.log(err);
      toast.error(err.message);
    }finally{
      setSigninload(false);
    }

  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setSignupload(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const imgUrl = await upload(avatar.file);

       await setDoc(doc(db, "users", res.user.uid), {
          avatar: imgUrl,
          username,
          email,
          id: res.user.uid,
          blocked: [],
        });
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });
        toast.success("Account created ! You can login now...");
      }catch (err) {
        console.log(err);
        toast.error(err.message);
      }finally {
        setSignupLoad(false);
      }
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <img src="./avatar.png" alt="" />
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit" disabled={signinload}>
            {signinload ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create An Account?</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handelAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button type="submit" disabled={signupload}>
            {signupload ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
