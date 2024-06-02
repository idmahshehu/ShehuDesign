import React from 'react';

const ClientHeadingMask = ({ name, desc }) => {
  return (
    <div className="heading-mask js-heading-mask">
      <div className="heading-mask_el heading-mask_el__deep">
        <div className="row align-items-center">
          <div className="col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12">
            <div className="simple-masking overflow-hidden">
              <div className="simple-masking_el js-simple-masking_el js-cursor-contract">
                <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break is-masking">{name}</h2>
                <h2 className="h1 mb-0 js-heading-mask_heading container_content none-break is-deep">{name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-mask_el heading-mask_el__masking container_content">
        <div className="row align-items-center">
          <div className="col-sm-6 offset-lg-2 offset-sm-1 col-12">
            <div className="simple-masking overflow-hidden">
              <div className="simple-masking_el">
                <h2 className="h1 mb-0 text-dark none-break">{name}</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-4 text-dark d-sm-block d-none">
            <p className="mb-0 desc">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHeadingMask;
