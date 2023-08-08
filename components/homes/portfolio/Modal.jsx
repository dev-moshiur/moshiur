import Image from "next/image";
import React from "react";

export default function Modal({ modalContent, setModalContent }) {
  return (
    <div
      className={`modal portfolio-modal-box fade ${
        modalContent ? "show" : ""
      } `}
      id="portfolio-1"
      tabindex="-1"
      role="dialog"
      style={{
        transition: "0.4s",
        display: `${modalContent ? "block" : "block"}`,
        visibility: `${modalContent ? "visible" : "hidden"}`,
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
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
                <div className="col-md-6">
                  <h3 className="portfolio-modal-table-text">
                    <i className="fa-regular fa-user "></i>
                    Client : <span>{modalContent?.client}</span>
                  </h3>
                </div>
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
                    <a href={modalContent?.previewLink}>
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
              <Image
                width={800}
                height={800}
               
                src={modalContent?.imgSrc}
                alt="portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
