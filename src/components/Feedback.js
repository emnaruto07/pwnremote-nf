import React from 'react'

export default function Feedback() {
    // const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className="bg-white text-black uppercase text-sm px-6 py-3 t-rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        //   onClick={() => setShowModal(true)}
        >
          [+] Feedback?
        </button>
       
      </>
    );
  }