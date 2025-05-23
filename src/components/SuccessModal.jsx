import Swal from "sweetalert2";

const successAlert = () => {
  Swal.fire({
    title: "Message Sent Successfully!",
    text: "I'll get back to you as soon as possible.",
    icon: "success",
    confirmButtonText: "Great!",
    confirmButtonColor: "#0284c7",
    background: "#ffffff",
    color: "#1e293b",
    customClass: {
      popup: "animated fadeInDown",
      title: "text-xl font-semibold",
      content: "text-gray-600",
      confirmButton:
        "px-6 py-2 rounded-lg hover:bg-[#0369a1] transition-colors duration-300",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown animate__faster",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp animate__faster",
    },
    iconHtml: `
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
    `,
    didOpen: (popup) => {
      // Add custom styles for the checkmark animation
      const style = document.createElement("style");
      style.textContent = `
        .success-checkmark {
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }
        .check-icon {
          width: 80px;
          height: 80px;
          position: relative;
          border-radius: 50%;
          box-sizing: content-box;
          border: 4px solid #0284c7;
        }
        .check-icon::before {
          top: 3px;
          left: -2px;
          width: 30px;
          transform-origin: 100% 50%;
          border-radius: 100px 0 0 100px;
        }
        .check-icon::after {
          top: 0;
          left: 30px;
          width: 60px;
          transform-origin: 0 50%;
          border-radius: 0 100px 100px 0;
          animation: rotate-circle 4.25s ease-in;
        }
        .check-icon::before, .check-icon::after {
          content: '';
          height: 100px;
          position: absolute;
          background: #FFFFFF;
          transform: rotate(-45deg);
        }
        .check-icon .icon-line {
          height: 5px;
          background-color: #0284c7;
          display: block;
          border-radius: 2px;
          position: absolute;
          z-index: 10;
        }
        .check-icon .icon-line.line-tip {
          top: 46px;
          left: 14px;
          width: 25px;
          transform: rotate(45deg);
          animation: icon-line-tip 0.75s;
        }
        .check-icon .icon-line.line-long {
          top: 38px;
          right: 8px;
          width: 47px;
          transform: rotate(-45deg);
          animation: icon-line-long 0.75s;
        }
        .check-icon .icon-circle {
          top: -4px;
          left: -4px;
          z-index: 10;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: absolute;
          box-sizing: content-box;
          border: 4px solid rgba(2, 132, 199, 0.5);
        }
        .check-icon .icon-fix {
          top: 8px;
          width: 5px;
          left: 26px;
          z-index: 1;
          height: 85px;
          position: absolute;
          transform: rotate(-45deg);
          background-color: #FFFFFF;
        }
        @keyframes rotate-circle {
          0% { transform: rotate(-45deg); }
          5% { transform: rotate(-45deg); }
          12% { transform: rotate(-405deg); }
          100% { transform: rotate(-405deg); }
        }
        @keyframes icon-line-tip {
          0% { width: 0; left: 1px; top: 19px; }
          54% { width: 0; left: 1px; top: 19px; }
          70% { width: 50px; left: -8px; top: 37px; }
          84% { width: 17px; left: 21px; top: 48px; }
          100% { width: 25px; left: 14px; top: 46px; }
        }
        @keyframes icon-line-long {
          0% { width: 0; right: 46px; top: 54px; }
          65% { width: 0; right: 46px; top: 54px; }
          84% { width: 55px; right: 0px; top: 35px; }
          100% { width: 47px; right: 8px; top: 38px; }
        }
      `;
      popup.appendChild(style);
    },
  });
};

export default successAlert;
