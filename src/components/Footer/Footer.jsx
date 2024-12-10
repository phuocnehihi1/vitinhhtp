import './Footer.css'

const Footer = () => {
  return (
    // <div>Footer</div>
    <footer>
      <div className="footer-newsletter">
        <p className="footer-newsletter-tittle">
          ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
        </p>
        <div className="footer-newsletter-form">
          <input
            type="text"
            placeholder="Nhập email hoặc số điện thoại của bạn"
            className="email-newsletter"
          />
          <a href="" className="footer-subscribe-button">
            Gửi
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="container-2019">
          <div className="khaipv-footer-policies">
            <div className="policy-container">
              <div className="policy-icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="policy-info">
                <div className="policy-info-title">CHÍNH SÁCH BẢO HÀNH</div>
                <div className="policy-info-content">
                  Nhận hàng và thanh toán tại nhà
                </div>
              </div>
            </div>
            <div className="policy-container">
              <div className="policy-icon">
                <i className="fa-solid fa-rotate"></i>
              </div>
              <div className="policy-info">
                <div className="policy-info-title">ĐỔI TRẢ DỄ DÀNG</div>
                <div className="policy-info-content">1 đổi 1 trong 15 ngày</div>
              </div>
            </div>
            <div className="policy-container">
              <div className="policy-icon">
                <i className="fa-solid fa-credit-card"></i>
              </div>
              <div className="policy-info">
                <div className="policy-info-title">THANH TOÁN TIỆN LỢI</div>
                <div className="policy-info-content">
                  Trả tiền mặt, CK, trả góp 0%
                </div>
              </div>
            </div>
            <div className="policy-container">
              <div className="policy-icon">
                <i className="fa-solid fa-comments"></i>
              </div>
              <div className="policy-info">
                <div className="policy-info-title">HỖ TRỢ NHIỆT TÌNH</div>
                <div className="policy-info-content">
                  Tư vấn, giải đáp mọi thắc mắc
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="container-2019">
            <div className="khaipv-footer-links">
              <div className="links-group-container">
                <p>
                  <a href="">
                    <img
                      src="/logo/trans_bg.png"
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </a>
                </p>
                <span className="links-group-title">Tổng đài</span>
                <p className="hotline">
                  <span>
                    Mua hàng:
                    <b>19001903</b>
                  </span>
                  <span>
                    Khiếu nại:
                    <b>19001903</b>
                  </span>
                </p>
                <span className="links-group-title">
                  Phương thức thanh toán
                </span>
                <img src="/image/pttt.png" alt="" />
              </div>
              <div className="links-group-container">
                <span className="links-group-title">Giới thiệu HTP PC</span>
                <p>
                  <a href="">Giới thiệu công ty</a>
                </p>
                <p>
                  <a href="">Liên hệ hợp tác kinh doanh</a>
                </p>
                <p>
                  <a href="">Thông tin tuyển dụng</a>
                </p>
                <p>
                  <a href="">Tin công nghệ</a>
                </p>
                <p>
                  <a href="">Tin tức</a>
                </p>
              </div>
              <div className="links-group-container">
                <span className="links-group-title">Hỗ trợ khách hàng</span>
                <p>
                  <a href="">Tra cứu đơn hàng</a>
                </p>
                <p>
                  <a href="">Hướng dẫn mua hàng trực tuyến</a>
                </p>
                <p>
                  <a href="">Hướng dẫn thanh toán</a>
                </p>
                <p>
                  <a href="">Hướng dẫn mua hàng trả góp</a>
                </p>
                <p>
                  <a href="">Bảng giá vật tư và dịch vụ sửa chữa lắp đặt</a>
                </p>
                <p>
                  <a href="">In hóa đơn điện tử</a>
                </p>
                <p>
                  <a href="">Góp ý, Khiếu Nại</a>
                </p>
              </div>
              <div className="links-group-container">
                <span className="links-group-title">Chính sách chung</span>
                <p>
                  <a href="">Chính sách, quy định chung</a>
                </p>
                <p>
                  <a href="">Chính sách bảo hành</a>
                </p>
                <p>
                  <a href="">Chính sách cho doanh nghiệp</a>
                </p>
                <p>
                  <a href="">Chính sách hàng chính hãng</a>
                </p>
                <p>
                  <a href="">Bảo mật thông tin khách hàng</a>
                </p>
                <p>
                  <a href="">Chính sách nhập lại tính phí</a>
                </p>
                <p>
                  <a href="">Chính sách giao hàng</a>
                </p>
              </div>
              <div className="links-group-container">
                <span className="links-group-title">Thông tin khuyến mãi</span>
                <p>
                  <a href="">Thông tin khuyến mãi</a>
                </p>
                <p>
                  <a href="">Sản phẩm khuyến mãi</a>
                </p>
                <p>
                  <a href="">Sản phẩm mới</a>
                </p>
                <span className="links-group-title">Kết nối với HTP PC</span>
                <div className="box-social">
                  <span className="footer-social-icons">
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </span>
                </div>
                <span
                  className="links-group-title"
                  style={{ "margin-top": "15px" }}
                >
                  Website thành viên
                </span>
                <p>
                  <a href="">Dịch vụ sửa chữa điện thoại - máy tính</a>
                </p>
                <p>
                  <a href="">
                    <img
                      src="/image/logo-dvt.png"
                      alt=""
                      style={{ width: "180px" }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="container-2019">
            <div className="footer-copyright">
              <div className="khaipv-copyright">
                <p>© 2024 2024 Công ty Cổ phần đầu tư công nghệ HTP PC</p>
                <p>
                  Trụ sở chính: Số 129+131 Lê Thanh Nghị, Phường Đồng Tâm, Quận
                  Hai Bà Trưng, Thành phố Hà Nội
                </p>
                <p>
                  VPGD: Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh
                  Khai, Quận Hai Bà Trưng, Thành phố Hà Nội
                </p>
                <p>
                  GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001
                </p>
                <p>Email: info@htppc.vn. Điện thoại: 1900 1903</p>
              </div>
              <div className="certificate">
                <a href="">
                  <img
                    src="/image/certificate1.png"
                    alt=""
                    style={{ width: "120px", height: "50px" }}
                  />
                </a>
                <a href="">
                  <img
                    src="/image/certificate2.png"
                    alt=""
                    style={{ width: "100px", height: "42px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
