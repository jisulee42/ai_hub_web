import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";
import port from "./../../data/port.json";

const Detail = () => {
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    console.log(params.id);
    findDatailData().then((res) => {
      setDetailData(res.data);
    });
  }, []);

  const findDatailData = async () => {
    return await axios.get(port.url + `/posts/${params.id}/find`, {
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
            <img className="mt-3" src={detailData.img} alt="..." />
          </div>

          <div className="card-body bg-dark text-light">
            {/* <h5 className="card-title">Movie Image</h5>
            <p className="card-text">Img Example</p> */}
            <p className="card-text">
              <small className="text-muted">{detailData.img}</small>
            </p>
          </div>
        </div>
        <div className="bd-example">
          <div className="mb-3 ">
            <label htmlFor="title" className="form-label text-light">
              제목
            </label>
            <div className="card">
              <p className="card-body">{detailData.title}</p>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label text-light">
              내용
            </label>
            <div className="card">
              <p className="card-body ">{detailData.content}</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
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

export default Detail;
