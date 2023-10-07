import ScrollToTop from "react-scroll-to-top";
import { HiArrowNarrowUp } from "react-icons/hi";

const BackToTopButton = (props) => {
  return (
    <div className={props.mode ? "" : "dark"}>
      <div className="text-black dark:text-white">
        <ScrollToTop
          smooth
          component={<HiArrowNarrowUp size={30} />}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // color={props.mode ? "#000" : "#fff"}
          className="bg-gradient-to-tr from-teal-600 to-cyan-600 "
        />
      </div>
    </div>
  );
};

export default BackToTopButton;
