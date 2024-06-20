import { useState } from "react";
import OptionElementSelect from "../../components/OptionElement/OptionElementSelect";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ProgressLine from "../../components/ProgressLine/ProgressLine";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./Address.scss";

export default function Address() {
  const [isValueEntered, setIsValueEntered] = useState(false);
  return (
    <PageWrapper>
      <div className="address__content">
        <Subtitle>
          What is the address of the property you want to sell, please.
        </Subtitle>
        <OptionElementSelect
          setIsValueEntered={setIsValueEntered}
        ></OptionElementSelect>
      </div>

      <ProgressLine
        pageNumber={2}
        btnDisabled={isValueEntered}
        nextPage="/price"
      ></ProgressLine>
    </PageWrapper>
  );
}
