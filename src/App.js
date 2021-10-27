import { useState, useEffect } from 'react';
import * as api from "./services/api";
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import GalleryLoader from './components/Loader/Loader';
import styles from './App.module.css';

export default function App() {

  const [hits, setHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchHits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [hits]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setHits([]);
    setCurrentPage(1);
    setError(null)
  };

  const fetchHits = () => {
    const option = { searchQuery, currentPage };
    setIsLoading(true);
    api
      .fetchHits(option)
      .then(
        (prevHits) => setHits([...hits, ...prevHits]),
        setCurrentPage(currentPage + 1)
      )
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

  return (
    <div className={styles.Container}>
          
      <Searchbar onSubmit={onChangeQuery} />

      {error && <p>Sorry! Something went wrong. Try again, please!</p>}
    
      <ImageGallery>
        {hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            srcWebformat={webformatURL}
            pictureId={id}
            onClick={() => handleImageClick(largeImageURL)}
          />
        ))}
      </ImageGallery>

      {isLoading && <GalleryLoader />}

      {shouldRenderLoadMoreButton && <Button onClick={fetchHits} length={hits.length} />}

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </div>
  );
}