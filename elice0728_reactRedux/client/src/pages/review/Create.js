import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import $ from "jquery";
import axios from "axios";
import port from "./../../data/port.json";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const [createReview, setCreateReview] = useState({
    img: "",
    title: "",
    content: "",
    email: cookies.userData.email,
  });

  const onChangeCreateReview = (e) => {
    setCreateReview({
      ...createReview,
      [e.target.name]: e.target.value,
    });
  };

  const onClickCreateReviewButton = () => {
    if (createReview.img === "") {
      alert("이미지 경로를 입력해주세요");
      $("#img").focus();
      return;
    }

    if (createReview.title === "") {
      alert("제목을 입력해주세요");
      $("#title").focus();
      return;
    }

    if (createReview.content === "") {
      alert("내용을 입력해주세요");
      $("#content").focus();
      return;
    }

    sendCreateReview()
      .then((res) => {
        console.log(res);
        alert(res.data.result);
        navigate("/review/list");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const sendCreateReview = async () => {
    return await axios.post(port.url + "/posts", createReview, {
      headers: {
        accessToken: cookies.userData.accessToken,
      },
    });
  };

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top bg-dark" style={{ textAlign: "center" }}>
            {createReview.img !== "" ? (
              <img className="mt-3" src={createReview.img} alt="movie img" />
            ) : (
              <></>
            )}
            <img className="mt-3" src={createReview.img} alt="..." />
          </div>

          <div className="card-body bg-dark text-light">
            <h5 className="card-title">Movie Image</h5>
            <p className="card-text">Img Example</p>
            <input
              type="text"
              className="form-control"
              id="img"
              name="img"
              placeholder="사진 URL을 입력해주세요 "
              onChange={onChangeCreateReview}
            />
            <p className="card-text">
              <small className="text-muted">url...</small>
            </p>
          </div>
        </div>
        <div className="bd-example">
          <div className="mb-3">
            <label htmlFor="title" className="text-light form-label">
              제목
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="제목을 입력해주세요. "
              onChange={onChangeCreateReview}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="text-light form-label">
              내용
            </label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              rows="3"
              placeholder="내용을 입력해주세요."
              onChange={onChangeCreateReview}
            ></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "2%" }}
              onClick={onClickCreateReviewButton}
            >
              등록
            </button>
            <button type="button" className="btn btn-danger">
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
