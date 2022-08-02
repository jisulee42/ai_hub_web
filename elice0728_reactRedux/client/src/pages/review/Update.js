import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import port from "./../../data/port.json";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [shortId, setShortId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    findGetReviewData(params.id).then((res) => {
      setUpdateData(res.data);
    });
  }, []);

  const findGetReviewData = async () => {
    return await axios.get(port.url + `/posts/${params.id}/find`, {
      headers: {
        accessToken: cookies.userData.accessToken,
      },
    });
  };

  const onChangeUpdateData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const onClickChangeUpdateData = () => {
    if (updateData.img === "") {
      alert("이미지 경로를 입력해주세요");
      $("#img").focus();
      return;
    }

    if (updateData.title === "") {
      alert("제목을 입력해주세요");
      $("#title").focus();
      return;
    }

    if (updateData.content === "") {
      alert("내용을 입력해주세요");
      $("#content").focus();
      return;
    }

    sendUpdateData().then((res) => {
      console.log(res);
      alert(res.data.result);
      navigate("/review/list");
    });
  };

  const sendUpdateData = async () => {
    return await axios.post(
      port.url + `/posts/${params.id}/update`,
      updateData,
      {
        headers: {
          accessToken: cookies.userData.accessToken,
        },
      }
    );
  };

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top bg-dark" style={{ textAlign: "center" }}>
            <img className="mt-3" src={updateData.img} alt="..." />
          </div>

          <div className="card-body bg-dark text-light">
            {/* <h5 className="card-title">Movie Image</h5> */}
            <p className="card-text">Image Path</p>
            <input
              type="text"
              className="form-control"
              id="img"
              name="img"
              placeholder="사진 URL을 입력해주세요 "
              defaultValue={updateData.img}
              onChange={onChangeUpdateData}
              disabled
            />
            <p className="card-text">
              <small className="text-muted ">url...</small>
            </p>
          </div>
        </div>
        <div className="bd-example">
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-light">
              제목
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="제목을 입력해주세요. "
              defaultValue={updateData.title}
              onChange={onChangeUpdateData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label text-light">
              내용
            </label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="10"
              placeholder="내용을 입력해주세요."
              defaultValue={updateData.content}
              onChange={onChangeUpdateData}
            ></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "2%" }}
              onClick={onClickChangeUpdateData}
            >
              수정
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                window.history.back();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
