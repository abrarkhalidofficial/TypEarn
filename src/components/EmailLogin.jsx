import React from "react";
import logo from "../assets/logo.png";
import { X } from "react-feather";
import { useEffect } from "react";
import imageToBase64 from "image-to-base64/browser";
import { socket } from "../utils/socket";

export default function EmailLogin({ onClose, data, setUser }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [image, setImage] = React.useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="popup__reverse">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClose(false);
          socket.send(
            "9" +
              "\n" +
              data?.address +
              "\n" +
              name +
              "\n" +
              email +
              "\n" +
              image
          );
          socket.send("8" + " " + data?.address).data;
        }}
        className="popup__reverse__form"
      >
        <button
          className="popup__reverse__form__close"
          onClick={() => {
            onClose(false);
          }}
        >
          <X size={20} color="currentColor" />
        </button>
        <div className="popup__reverse__form__content">
          <img
            src={logo}
            alt="logo"
            className="popup__reverse__form__content__img"
          />
          <div className="popup__reverse__form__content__heading">
            Welcome to <span>Typearn!</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="popup__reverse__form__content__input"
          />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="popup__reverse__form__content__input"
          />
          <FileUpload
            onChange={(e) => {
              setImage(e);
            }}
          />
          <button
            className="popup__reverse__form__content__button"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

function FileUpload({ onChange }) {
  const [uploadedFile, setUploadedFile] = React.useState("");
  return (
    <div
      className="popup__reverse__form__content__upload"
      style={uploadedFile === "" ? null : { width: "100px" }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.files[0].size > 256 * 1024) {
            alert("File is too big!");
            setUploadedFile("");
          } else {
            setUploadedFile(URL.createObjectURL(e.target.files[0]));
            imageToBase64(URL.createObjectURL(e.target.files[0]))
              .then((response) => {
                onChange(response);
              })
              .catch((error) => {
                console.log("image", error);
              });
          }
        }}
        multiple={false}
        onAbort={() => {
          setUploadedFile("");
        }}
        required
        className="popup__reverse__form__content__upload__input"
      />
      {uploadedFile === "" ? (
        <div className="popup__reverse__form__content__upload__content">
          Upload Photo
        </div>
      ) : (
        <div className="popup__reverse__form__content__upload__content__filled">
          <img
            multiple={false}
            src={uploadedFile}
            alt="uploaded file"
            className="popup__reverse__form__content__upload__content__filled__img"
          />
        </div>
      )}
    </div>
  );
}
