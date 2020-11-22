import React from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const Refetch: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  return (
    <div className="text-center">
      <p className="text-gray-600">
        接続が失われました。確認してからやりなおしてください。
      </p>
      <Button className="btn btn-green rounded-full mt-5" onClick={refetch}>
        <FontAwesomeIcon icon={faSyncAlt} className="h-5 mr-3" />
        やりなおす
      </Button>
    </div>
  );
};

export default Refetch;
