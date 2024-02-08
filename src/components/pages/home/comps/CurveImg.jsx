const CurveImg = (props) => {
  const { tr, bl, curveColor } = props;
  return (
    <>
      {tr && (
        <img
          className="absolute top-0 left-full pointer-events-none"
          width={50}
          src={curveColor === "black" ? "curve-black.webp" : "curve-lime.webp"}
          alt="corner image0"
        />
      )}
      {bl && (
        <img
          className="absolute left-0 top-full pointer-events-none"
          width={50}
          src={curveColor === "black" ? "curve-black.webp" : "curve-lime.webp"}
          alt="corner image"
        />
      )}
    </>
  );
};
export default CurveImg;
