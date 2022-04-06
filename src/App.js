import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import styles from "./app.module.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Navbar />
      <div className={styles.navbar}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {/* <h1>Upload any video</h1> */}
          <input
            {...register("video", {
              required: "Required",
            })}
            type="file"
          />
          {/* search button */}
          <button className={styles.btn}>
            Upload
            <MdUpload color="red" />
          </button>
        </form>
      </div>

      <Main />
    </div>
  );
}

export default App;
