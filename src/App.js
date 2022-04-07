import "./App.css";
import { react, useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { MdUpload } from "react-icons/md";
import styles from "./app.module.css";
import axios from "axios";
import SkillBar from "react-skillbars";
import r1 from "./testing/r1.json";
import r2 from "./testing/r2.json";
function App() {
  const cloudName = "dxcn5lhmr";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const [selectedFile, setSelectedFile] = useState([]);
  const [flag, setFlag] = useState(0);
  // const [loading, setLoading] = useState(false);

  const uploadVideo = () => {
    setFlag(1);

    if (flag == 1) {
      setSelectedFile(r1);
    } else {
      setSelectedFile(r2);
    }
  };

  const DisplayData = selectedFile.map((info) => {
    console.log(info)
    return (
      <tr>
        <td>{info.no}</td>
        <td>{info.Start}</td>
        <td>{info.End}</td>
        <td>{info.Type}</td>
        <td>{info.Score}</td>
      </tr>
    );
  });
  // const uploadVideo = () => {
  //   console.log(selectedFile)
  //   const formData = new FormData();
  //   formData.append("file",selectedFile)
  //   formData.append("upload_preset","videosmoothness")

  //   axios.post("https://api.cloudinary.com/v1_1/dxcn5lhmr/video/upload",formData)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch
  // }

  // const uploadVideo = async e => {
  //   const files = e.target.files
  //   const data = new FormData();
  //   data.append('file',files[0])
  //   data.append('upload_preset','videosmoothness')
  //   setLoading(true)
  //   const res = await fetch("https://api.cloudinary.com/v1_1/dxcn5lhmr/video/upload",
  //   {
  //     method:'POST',
  //     body:data
  //   })

  //   const receivedVideo = await res.json()

  //   console.log(receivedVideo)
  // }
  // const changeHandler = (event) => {
  // 	setSelectedFile(event.target.files[0]);
  // 	setIsSelected(true);
  // };

  // const handleSubmission = () => {
  // 	const formData = new FormData();

  // 	formData.append('File', selectedFile);

  // 	fetch(
  // 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
  // 		{
  // 			method: 'POST',
  // 			body: formData,
  // 		}
  // 	)
  // 		.then((response) => response.json())
  // 		.then((result) => {
  // 			console.log('Success:', result);
  // 		})
  // 		.catch((error) => {
  // 			console.error('Error:', error);
  // 		});
  // };
  // };
  console.log(selectedFile)
  return (
    <div className="App">
      <Navbar />
      <div className={styles.navbar}>
        <form className={styles.form}>
          <h3>Upload any video ▶</h3>
          <input
            {...register("video", {
              required: "Required",
            })}
            type="file"
            // onChange={(event)=>{setSelectedFile(event.target.files[0])}}
            onChange={uploadVideo}
          />
          {/* search button */}
          <button className={styles.btn} onClick={uploadVideo}>
            Upload
            <MdUpload color="red" />
          </button>
        </form>
      </div>
      {/* <SkillBar skills={selectedFile}/> */}
      <div className={styles.tableDiv}>
        <table className={styles.wayTable} >
          <thead className={styles.header}>
            <tr>
              <th>Sr.NO</th> 
              <th>Start Time</th>
              <th>End Time</th>
              <th>Type</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>{DisplayData}</tbody>
        </table>
      </div>
      {/* <Main dataSent={selectedFile}/> */}
    </div>
  );
}

export default App;
