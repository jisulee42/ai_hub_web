
const Update = () => {
  return (
    <div className="">
      <div className="container">
        <div className="card mb-3">
          <div className="card-img-top" style={{ textAlign: "center" }}>
            <img src="https://search.pstatic.net/common?type=o&size=174x246&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20220720_283%2F1658284839003UzxoT_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2"
              alt="..." />
          </div>

          <div className="card-body">
            <h5 className="card-title">Movie Image</h5>
            <p className="card-text">
              Img Example
            </p>
            <input type="text" className="form-control" id="img" name="img" placeholder="사진 URL을 입력해주세요 " />
            <p className="card-text"><small className="text-muted">url...</small></p>
          </div>
        </div>
        <div className="bd-example">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">제목</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="제목을 입력해주세요. " />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">내용</label>
            <textarea className="form-control" id="content" name="content" rows="3" placeholder="내용을 입력해주세요." ></textarea>
          </div>
          <div style={{ textAlign: "right" }}>
            <button type="button" className="btn btn-primary" style={{marginRight:  "2%"}}>수정</button>
            <button type="button" className="btn btn-danger">뒤로가기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update;