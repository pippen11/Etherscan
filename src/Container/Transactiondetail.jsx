import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import BlockdetailComponent from "../Components/Blockdetail";
import TransactionDetailComponent from "../Components/Transactiondetail";
const TransactionDetailContainer = () => {
  const params = useParams();
  console.log(params);
  const [TransactionDetailInfo, setTransactionDetailInfo] = useState([]);

  const TransactionDetail = async () => {
    try {
      const data = await axios.post(
        "http://etherscan.ssm.block7.errorcode.help/api/transaction/transactiondetail",
        {
          id: params.id,
        }
      );

      setTransactionDetailInfo(data.data);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    TransactionDetail();
  }, [params.id]);

  return (
    <TransactionDetailComponent
      TransactionDetailInfo={TransactionDetailInfo}
      TransactionDetail={TransactionDetail}
    />
  );
};

export default TransactionDetailContainer;
