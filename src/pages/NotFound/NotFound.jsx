import { Link } from 'react-router-dom';
import './NotFound.scss'

const NotFound = () => (
    <div className="not-found">
        <img
            src="assets/404.png"
            alt="not-found"
        />
        <Link to="/" className="link-home">
            Quay lại trang chủ
        </Link>
    </div>
);

export default NotFound