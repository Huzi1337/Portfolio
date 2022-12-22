import { ReactNode, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Wrapper: React.FC<{
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}> = (props) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <div className={"" + props.className} {...events} ref={ref}>
      {props.children}
    </div>
  );
};

export default Wrapper;
