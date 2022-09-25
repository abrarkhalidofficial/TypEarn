import React, { useState } from "react";
import imageToBase64 from "image-to-base64/browser";

export function FileUpload({ onChange, avatar }) {
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
