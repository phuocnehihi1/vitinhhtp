import '@/index.css';
<<<<<<< HEAD
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode, Suspense } from 'react';
=======
import Home from '@/pages/Home/Home';
import ProductDetail from '@/pages/ProductDetail/ProductDetail.jsx';
import SearchPage from '@/pages/Search/SearchPage.jsx';
import { StrictMode } from 'react';
>>>>>>> 9694c7472e516bdf82d48f45690bc01c17a25b93
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import Loader from './components/Loader/Loader';
import { Cart, Home, ProductDetail, SearchPage } from './pages/render';
import NotFound from './pages/NotFound/NotFound';

function lazyComponent(element) {
  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: lazyComponent(<App />),
    children: [
      {
        path: "/home",
        element: lazyComponent(<Home />),
      },
      {
        path: "/product-detail",
<<<<<<< HEAD
        element: lazyComponent(<ProductDetail />)
      },
      {
        path: "/search-page",
        element: lazyComponent(<SearchPage />)
      },
      {
        path: "/cart",
        element: lazyComponent(<Cart />)
      },
      {
        path: "*",
        element: <NotFound />
=======
        element: <ProductDetail />
      },
      {
        path: "/search-page",
        element: <SearchPage/>
>>>>>>> 9694c7472e516bdf82d48f45690bc01c17a25b93
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
