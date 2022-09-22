import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { X } from "react-feather";
import imageToBase64 from "image-to-base64/browser";
import { socket } from "../utils/socket";

export default function EmailLogin({
  onClose,
  data,
  isEdit,
  dataFromApi,
  avatar,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setName(dataFromApi?.dashboard?.name);
    setEmail(dataFromApi?.dashboard?.email);
  }, [dataFromApi]);

  return (
    <div className="popup__reverse">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClose(false);
          if (isEdit) {
            socket.send("10" + "\n" + data?.address + "\n" + image);
            socket.send("11" + " " + data?.address);
          } else {
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
          }
          socket.send("8" + " " + data?.address);
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
            value={name}
            disabled={isEdit}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="popup__reverse__form__content__input"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            disabled={isEdit}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="popup__reverse__form__content__input"
          />
          <FileUpload
            avatar={avatar}
            onChange={(e) => {
              setImage(e);
            }}
          />
          <button
            className="popup__reverse__form__content__button"
            type="submit"
          >
            {isEdit ? "Update Photo" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

function FileUpload({ onChange, avatar }) {
  const [uploadedFile, setUploadedFile] = useState("");

  return (
    <div
      className="popup__reverse__form__content__upload"
      style={uploadedFile === "" ? null : { width: "100px" }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setUploadedFile(URL.createObjectURL(e.target.files[0]));
          imageToBase64(URL.createObjectURL(e.target.files[0]))
            .then((response) => {
              onChange(response);
            })
            .catch((error) => {
              console.log("image", error);
            });
        }}
        multiple={false}
        onAbort={() => {
          setUploadedFile("");
        }}
        required
        className="popup__reverse__form__content__upload__input"
      />

      {avatar !== null && uploadedFile === "" ? (
        <div
          className="popup__reverse__form__content__upload__content__filled"
          style={{ margin: "0em auto" }}
        >
          <img
            src={avatar}
            alt="uploaded file"
            className="popup__reverse__form__content__upload__content__filled__img"
          />
        </div>
      ) : (
        <>
          {uploadedFile === "" ? (
            <div className="popup__reverse__form__content__upload__content">
              Upload Photo
            </div>
          ) : (
            <div className="popup__reverse__form__content__upload__content__filled">
              <img
                src={uploadedFile}
                alt="uploaded file"
                className="popup__reverse__form__content__upload__content__filled__img"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
