import { useState } from "react";

//Component's
import Card from "./shared/Card";

//Image's
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

function Cards() {
  const [data, setData] = useState([
    {
      id: 0,
      image: pic1,
      name: "rezinha",
      description:
        "In industries such as pharmaceuticals, chemicals, etc there is frequent exposure to active pharmaceutical ingredients such as acids, oils and other chemicals. Care should be taken to safely store and handle these caustic and corrosive chemicals to avoid unfortunate and dangerous accidents. At Charmi Engineering, we are a leading manufacturer of stainless steel storage tanks, oil storage tanks, chemical mixing tanks, pharmaceutical storage tanks, HCL storage tanks, Ms storage tanks, agitator mixing vessels, sugar mixing tanks, wax melting tanks, chemical reactors, jacketed reactors etc. Since inception, we have been offering a wide range of storage tanks such as square steel tanks, stainless steel rectangular tanks, vertical storage tanks etc and integrated liquid holding and liquid mixing tanks to fulfill the specific needs of the customer.",
    },
    {
      id: 1,
      image: pic2,
      name: "rezinha",
      description:
        "In industries such as pharmaceuticals, chemicals, etc there is frequent exposure to active pharmaceutical ingredients such as acids, oils and other chemicals. Care should be taken to safely store and handle these caustic and corrosive chemicals to avoid unfortunate and dangerous accidents. At Charmi Engineering, we are a leading manufacturer of stainless steel storage tanks, oil storage tanks, chemical mixing tanks, pharmaceutical storage tanks, HCL storage tanks, Ms storage tanks, agitator mixing vessels, sugar mixing tanks, wax melting tanks, chemical reactors, jacketed reactors etc. Since inception, we have been offering a wide range of storage tanks such as square steel tanks, stainless steel rectangular tanks, vertical storage tanks etc and integrated liquid holding and liquid mixing tanks to fulfill the specific needs of the customer.",
    },
    {
      id: 2,
      image: pic3,
      name: "rezinha",
      description:
        "In industries such as pharmaceuticals, chemicals, etc there is frequent exposure to active pharmaceutical ingredients such as acids, oils and other chemicals. Care should be taken to safely store and handle these caustic and corrosive chemicals to avoid unfortunate and dangerous accidents. At Charmi Engineering, we are a leading manufacturer of stainless steel storage tanks, oil storage tanks, chemical mixing tanks, pharmaceutical storage tanks, HCL storage tanks, Ms storage tanks, agitator mixing vessels, sugar mixing tanks, wax melting tanks, chemical reactors, jacketed reactors etc. Since inception, we have been offering a wide range of storage tanks such as square steel tanks, stainless steel rectangular tanks, vertical storage tanks etc and integrated liquid holding and liquid mixing tanks to fulfill the specific needs of the customer.",
    },
    {
      id: 3,
      image: pic4,
      name: "rezinha",
      description:
        "In industries such as pharmaceuticals, chemicals, etc there is frequent exposure to active pharmaceutical ingredients such as acids, oils and other chemicals. Care should be taken to safely store and handle these caustic and corrosive chemicals to avoid unfortunate and dangerous accidents. At Charmi Engineering, we are a leading manufacturer of stainless steel storage tanks, oil storage tanks, chemical mixing tanks, pharmaceutical storage tanks, HCL storage tanks, Ms storage tanks, agitator mixing vessels, sugar mixing tanks, wax melting tanks, chemical reactors, jacketed reactors etc. Since inception, we have been offering a wide range of storage tanks such as square steel tanks, stainless steel rectangular tanks, vertical storage tanks etc and integrated liquid holding and liquid mixing tanks to fulfill the specific needs of the customer.",
    },
  ]);
  const productData = data;

  return (
    <div className="flex justify-between">
      {productData?.map((productData) => (
        <Card
          key={productData.id}
          image={productData.image}
          name={productData.name}
          description={productData.description}
        />
      ))}
      ;
    </div>
  );
}

export default Cards;
