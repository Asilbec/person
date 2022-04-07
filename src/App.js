import './App.css';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from 'react';


function Item(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 25 }}>
      <motion.div layout className='gameCardAnimationLineContainer'>
        <motion.div className="avatar" layout ></motion.div>
        <motion.h1 style={{ fontSize: '20px' }} layout>{props.given.messageTitle}</motion.h1>
      </motion.div>
      <AnimatePresence>{isOpen && <Content obj={props.given} />}</AnimatePresence>
    </motion.li>
  );
}

const bekmap = {
  descriptions: [
    {
      messageTitle: 'first',
      messageDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      messageTitle: 'second',
      messageDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      messageTitle: 'third',
      messageDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      messageTitle: 'four',
      messageDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },

  ]
}



function Content(props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>{props.obj.messageDesc}</p>
    </motion.div>
  );
}

function App() {


  return (
    <div className="App">
      <div className='navbarContainer'>
        <div className='navbarLayout'>
          <button><h3>Home</h3></button>
          <button><h3>Games</h3></button>
          <button><h3>News</h3></button>
          <button><h3>Experience</h3></button>
          <button><h3>About</h3></button>
        </div>
      </div>
      <div className='homePageContainer'>
        <h1>
          Everything I’m not made me everything I am
        </h1>
      </div>
      <div className='GamesPage'>
        <div className='GamesPageCont'>
          <h1 id='gamesPageTitleH1'>Enjoy the best geography games</h1>
          <h3 id='gamesPageSmalltext'>(For Free)</h3>
          <button id='gamespageSmallButton'>
            Get Started
          </button>
          <div className='gamesContainer'>
            <div className='gameContainer'>
              <AnimateSharedLayout >
                <motion.div layout className='gameCardContainer'>
                  <motion.div layout className='gameCardContainerForImage'>
                    <motion.img alt='nice' id='gameCardImageId' src='https://wallpaperaccess.com/full/19602.jpg'></motion.img>
                  </motion.div >
                  <motion.ul id='moreinfo' layout initial={{ borderRadius: 25, display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                    {bekmap.descriptions.map((item, index) => (
                      <Item given={item} key={index} />
                    ))}
                  </motion.ul>
                </motion.div >
                <motion.div className='gameCardContainer'>
                  <motion.div className='gameCardContainerForImage'>
                    <motion.img alt='nice' layout id='gameCardImageId' src='https://www.sciencefriday.com/wp-content/uploads/2022/02/Mars_Scifri.jpg?w=1024'></motion.img>
                  </motion.div >
                  <motion.ul id='moreinfo' layout initial={{ borderRadius: 25, display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                    {bekmap.descriptions.map((item, index) => (
                      <Item given={item} key={index} />
                    ))}
                  </motion.ul>
                </motion.div >
              </AnimateSharedLayout>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
