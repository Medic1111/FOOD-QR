import { QRCodeCanvas } from "qrcode.react";
import { useNavigate, useLocation } from "react-router-dom";

const QRCode = ({ url }) => {
  const location = useLocation();
  console.log(location);
  console.log(`/restaurants/${url}`);

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={300}
      bgColor={"#6db8c7"}
      level={"H"}
      value={`${location.pathname}restaurants/${url}`}
    />
  );

  return <div>{codeTag}</div>;
};

export default QRCode;
