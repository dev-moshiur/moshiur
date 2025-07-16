"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Modal({ modalContent, setModalContent }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        parentRef.current &&
        parentRef.current.contains(event.target) && // clicked inside parent
        childRef.current &&
        !childRef.current.contains(event.target) // but NOT inside child
      ) {
        setModalContent();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      className={`modal portfolio-modal-box fade ${
        modalContent ? "show" : ""
      } `}
      ref={parentRef}
      id="portfolio-1"
      tabindex="-1"
      role="dialog"
      style={{
        transition: "0.4s",
        display: `${modalContent ? "block" : "block"}`,
        visibility: `${modalContent ? "visible" : "hidden"}`,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        ref={childRef}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              onClick={() => setModalContent()}
            >
              <i className="far fa-times"></i>
            </button>
          </div>

          <div className="modal-body">
            <h6 className="blog-title">{modalContent?.title}</h6>

            <div className="portfolio-modal-table">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="portfolio-modal-table-text">
                    <i className="fa-regular fa-file-lines"></i>
                    Project : <span>{modalContent?.project}</span>
                  </h3>
                </div>
                {modalContent?.client && (
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-user "></i>
                      Client : <span>{modalContent?.client}</span>
                    </h3>
                  </div>
                )}
                {modalContent?.github1 && (
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-brands fa-github"></i>
                      Client side code :{" "}
                      <a
                        style={{ textTransform: "lowercase", fontSize: "13px" }}
                        target="_blank"
                        href={modalContent?.github1}
                      >
                        {modalContent?.github1}
                      </a>
                    </h3>
                  </div>
                )}
                {modalContent?.github2 && (
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-brands fa-github"></i>
                      Server side code :{" "}
                      <a
                        style={{ textTransform: "lowercase", fontSize: "13px" }}
                        target="_blank"
                        href={modalContent?.github2}
                      >
                        {modalContent?.github2}
                      </a>
                    </h3>
                  </div>
                )}
                <div className="col-md-6">
                  <h3 className="portfolio-modal-table-text">
                    <i className="fa-solid fa-code"></i>
                    Langages : <span>{modalContent?.languages.join(", ")}</span>
                  </h3>
                </div>
                <div className="col-md-6">
                  <h3 className="portfolio-modal-table-text">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Preview :{" "}
                    <a
                      style={{ textTransform: "lowercase" }}
                      target="_blank"
                      href={modalContent?.previewLink}
                    >
                      {modalContent?.previewName}
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="h1-modal-paragraph">
              {modalContent?.desc.map((elm, i) => (
                <p key={i}>{elm}</p>
              ))}
            </div>
            <div className="h1-modal-img">
              {modalContent?.imgSrc && (
                <Image
                  width={800}
                  height={10000}
                  style={{ height: "fit-content" }}
                  src={modalContent?.imgSrc}
                  alt="portfolio"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
