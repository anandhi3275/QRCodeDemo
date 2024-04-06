
import './App.css';
import './styles.css';
import image from './components/images/qr-code.png';

function App() {
  return (
    <div className="middle">
      <div class="innerdiv">
      <img src={image}/>
      <h2 className="bottom">Improve your front-end skills by building projects</h2>
      <p className="para">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
