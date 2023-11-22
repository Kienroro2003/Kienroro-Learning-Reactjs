import HeaderMain from "./components/HeaderMain";
import { AuthProvider } from "./components/context/auth-context";
import {
  useGallery,
  GalleryProvider,
} from "./components/context/gallery-context";
import CartList from "./components/gallery/CartList";
import PhotoList from "./components/gallery/PhotoList";

function App() {
  return (
    <AuthProvider>
      <GalleryProvider>
        <HeaderMain></HeaderMain>
        <PhotoList></PhotoList>
        <CartList></CartList>
      </GalleryProvider>
    </AuthProvider>
  );
}

export default App;
