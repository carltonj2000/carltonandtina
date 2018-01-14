import Layout from "../components/Layout.js";
import Location from "../components/Location.js";
import Quotes from "../components/Quotes.js";
import Photos from "../components/Photos.js";
import PhotoModal from "../components/PhotoModal.js";

const images = [
  { name: "HDR9680.png", description: "Valley Of Fire LV" },
  { name: "HDR9704.png", description: "Valley Of Fire LV" },
  { name: "IMG_5376.JPG", description: "Tina's Cousin's Wedding LA" },
  { name: "IMG_5748.JPG", description: "Griffith Observatory LA" },
  { name: "IMG_8558.JPG", description: "Key West Florida" },
  { name: "IMG_8998.JPG", description: "Jean Dry Lake  LV" },
  { name: "IMG_9027.JPG", description: "Tina's Cousin's Wedding LA" },
  { name: "IMG_9219.JPG", description: "Laguna Beach California" }
];

export default class App extends React.Component {
  state = { isOpen: false, img: "", imgIdx: -1 };
  openModal = img => {
    window.scrollTo(0, 0);
    const imgIdx = images.findIndex(element => element.name === img);
    return this.setState({ isOpen: true, img: images[imgIdx], imgIdx: imgIdx });
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = by =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % images.length;
      if (imgIdx < 0) imgIdx = images.length - 1;
      return { img: images[imgIdx], imgIdx: imgIdx };
    });
  render = () => (
    <div>
      <PhotoModal
        show={this.state.isOpen}
        onClose={this.closeModal}
        img={this.state.img}
        nextImg={this.nextImg}
      />
      <Layout active="home">
        <Location />
        <Quotes />
        <Photos images={images} photoModalOpen={this.openModal} />
      </Layout>
    </div>
  );
}
