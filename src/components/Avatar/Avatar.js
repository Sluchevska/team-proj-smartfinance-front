import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { uploadAvatar, getUserName } from '../../redux/auth';
// import useOnClickOutside from 'hooks/useOnClickOutside';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const modalRoot = document.querySelector('#modal-root');

const AvatarModal = ({ closeAvatarModal }) => {
  const dispatch = useDispatch();
  const userName = useSelector(state => getUserName(state));
  const [file, setFile] = useState(null);
  const [userNewName, setUserNewName] = useState(userName);
  const [dragged, setDragged] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, closeAvatarModal);
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    return () => {
      window.document.body.style.overflowY = 'visible';
    };
  });
  const handleDropAvatar = e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (
      (files[0].type.includes('image/png') ||
        files[0].type.includes('image/jpeg')) &&
      files[0].size <= 2000000
    ) {
      setFile(files[0]);
    } else {
        toast.warn('Avatar format can be .png or .jpg and no more than 2 МВ!');
     
    }
  };
  const handleDragOver = e => {
    e.preventDefault();
    setDragged(true);
  };
  const handleDelFile = () => {
    setFile(null);
  };

  const handleChangeAvatar = e => {
    if (
      (e.target.files[0].type.includes('image/png') ||
        e.target.files[0].type.includes('image/jpeg')) &&
      e.target.files[0].size <= 2000000
    ) {
      setFile(e.target.files[0]);
    } else {
        toast.warn('Avatar format can be .png or .jpg and no more than 2 МВ!');
     
    }
  };
  const onHandleChangeName = e => {
    setUserNewName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', userNewName);
    formData.append('avatar', file);
    dispatch(uploadAvatar(formData));
    setFile(null);
    closeAvatarModal();
  };

  return createPortal(
    <div >
      <form onSubmit={handleSubmit} ref={ref}>
        <span  onClick={closeAvatarModal}>
          &#10006;
        </span>
        <p >Редактировать профиль </p>
        <div
    
          onDrop={handleDropAvatar}
          onDragOver={handleDragOver}
        >
          Перетяните сюда свой аватар
          {file ? (
            <>
              <p>{file.name}</p>
              <button
                type="button"
               
                onClick={handleDelFile}
              >
                &#10006;
              </button>
            </>
          ) : (
            <p >
              &#11147;
            </p>
          )}
        </div>
        <span> или </span>
        <label>
          Выберите файл
          <input
            type="file"
            name="avatar"
           
            onChange={handleChangeAvatar}
            accept="image/png, image/jpeg"
          />
        </label>
        <label>
          &#128396; Имя:
          <input
            type="text"
           
            placeholder={userNewName}
            value={userNewName}
            name="name"
            onChange={onHandleChangeName}
            pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
            title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
            required
          />
        </label>
        <div>
          <button type="submit">
            ОК
          </button>
          <button
            type="button"
          
            onClick={closeAvatarModal}
          >
            НАЗАД
          </button>
        </div>
      </form>
    </div>,
    modalRoot,
  );
};

export default AvatarModal;