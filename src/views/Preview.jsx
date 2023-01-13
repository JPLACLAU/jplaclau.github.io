import React from "react";
import PreviewDemoGallery from "../components/PreviewDemoGallery";
import useDocumentTitle from "../components/useDocumentTitle";

const FeaturesContent = [];

const Preview = () => {
  useDocumentTitle("JPL - Preview || Site in construction...");
  return (
    <>
      <section
        className="section demo-section preview-section theme-light dark-bg"
        id="demo"
      >
        <div className="container">
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>
      </section>
      {/* End Preview section */}

      <section className="section feature-section " id="features">
        <div className="container-fluid">
          <div className="title-wrapper text-center">
            <h2 className="text-black title"></h2>
          </div>

          <div className="row">
            {FeaturesContent.map((val, i) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 my-3"
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
