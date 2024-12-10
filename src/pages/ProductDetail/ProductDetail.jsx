import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { Box, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import './ProductDetail.scss'

const ProductDetail = () => {
  return (
    <>
      <Breadcrumb>
        <Link to="/home">
          Trang chủ
        </Link>
        <Link to="#">
          Màn Hình Máy Tính, Tay Treo
        </Link>
        <p>
          Màn hình LG 24MR400-B (23.8 ...
        </p>
      </Breadcrumb>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <div className="container-detail">
            <Grid size={7}>
              <div className="container-left">
                <div className="img">
                  <img src="https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_3.jpg" alt="LG" />
                </div>
              </div>
            </Grid>
            <Grid size={5}>
              <div className="container-right">
                <h1>Màn hình LG 24MR400-B (23.8 inch/FHD/IPS/100Hz/5ms)</h1>
                <p>Mã SP: MOLG253 | Đánh giá: rate 0 | Bình luận: 2 </p>
                <p>Lượt xem: 27.322</p>
                <div className="summary">
                  <h4>Thông số sản phẩm</h4>
                  <p>Kích thước: 23.8 inch</p>
                  <p>Độ phân giải: FHD 1920 x 1080</p>
                </div>
                <div className="price">
                  <span className="price_sale">2.179.000₫</span>
                  <span className="price_origin">2.689.000₫</span>
                  <span className="price_saving">Tiết kiệm: 590.000₫</span>
                </div>
              </div>
            </Grid>
          </div>
          <Grid size={7}>
            <div className="group-container">
              <h2 className="group-title">Video</h2>
              <iframe width="698" height="420" src="https://www.youtube.com/embed/PUVuHX-fyRc"
                title="LG IPS Monitor 24MR400 Full HD 1080p AMD Free Sync - 100Hz | ASMR Unboxing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </Grid>
          <Grid size={5}>
            Thông số kỹ thuật
          </Grid>
          <Grid size={7}>
            <div className="group-container">
              <h2 className="group-title">Nhận xét và Đánh giá</h2>

              <div className="review">

              </div>
              <div className="comment-box">
                <textarea id="comment" placeholder="Mời bạn để lại bình luận..." />
                <div className="comment-action">
                  <button>Gửi bình luận</button>
                </div>
              </div>
              <div className="comment-list">
                <div className="comment-item">
                  <div className="comment-item__user">
                    <div className="avatar">A</div>
                    <h4 className="username">Anh Nguyễn Đình Dũng</h4>
                    <p className="date">23/8/2024 14:43</p>
                  </div>
                  <div className="comment-item__info">
                    <p className="comment">màn này lắp được arm đúng ko bạn</p>
                    <p className="action">Trả lời</p>
                  </div>
                </div>
                <div className="comment-item">
                  <div className="comment-item__user">
                    <div className="avatar">A</div>
                    <h4 className="username">User test</h4>
                    <p className="date">23/8/2024 14:43</p>
                  </div>
                  <div className="comment-item__info">
                    <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="action">Trả lời</p>
                  </div>
                </div>
              </div>

            </div>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default ProductDetail;