import React from "react";

export default function Footer() {
  return (
    <footer className="mt-[2%] bg-bg-black-light p-5 text-[#e0e5eb] text-base flex flex-col gap-10">
      <div id="info" className="flex gap-[10%]">
        <div id="generalquestion" className="flex flex-col gap-2">
          <h2 className="text-white font-semibold text-xl mb-3">CompanyLogo</h2>
          <p className="text-[#cad0d9]">Got questions? Contact us 24/7</p>
          <button className="px-3 py-2 bg-gray-400/50 rounded-md hover:bg-gray-400/100 hover:text-gray-100">
            Help and consultation
          </button>
        </div>
        <div className="flex gap-[7%] items-start align-top justify-around">
          <div id="company">
            <h3 className="text-base font-medium text-white my-3">Company</h3>
            <ul className="flex flex-col gap-2 text-base font-normal text-[#e0e5eb]">
              <li>
                {" "}
                <a href="">About company</a>
              </li>
              <li>
                {" "}
                <a href="">Our team</a>
              </li>
              <li>
                {" "}
                <a href="">Careers</a>
              </li>
              <li>
                {" "}
                <a href="">Contact us</a>
              </li>
              <li>
                {" "}
                <a href="">News</a>
              </li>
            </ul>
          </div>
          <div id="account">
            <h3 className="text-base font-medium text-white my-3">Company</h3>
            <ul className="flex flex-col gap-2 text-base font-normal text-[#e0e5eb]">
              <li>
                {" "}
                <a href="">Your account</a>
              </li>
              <li>
                {" "}
                <a href="">Shipping rates & policies</a>
              </li>
              <li>
                {" "}
                <a href="">Refunds & replacements</a>
              </li>
              <li>
                {" "}
                <a href="">Delivery info</a>
              </li>
              <li>
                {" "}
                <a href="">Order tracking</a>
              </li>
              <li>
                {" "}
                <a href="">Taxes & fees</a>
              </li>
            </ul>
          </div>
          <div id="customerdevice">
            <h3 className="text-base font-medium text-white my-3">Company</h3>
            <ul className="flex flex-col gap-2 text-base font-normal text-[#e0e5eb]">
              <li>
                {" "}
                <a href="">Payment methods</a>
              </li>
              <li>
                {" "}
                <a href="">Money back guarantee</a>
              </li>
              <li>
                {" "}
                <a href="">Product returns</a>
              </li>
              <li>
                {" "}
                <a href="">Support center</a>
              </li>
              <li>
                {" "}
                <a href="">Shipping</a>
              </li>
              <li>
                {" "}
                <a href="">Terms & conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        <p className="items-start text-sm font-medium text-gray-300">
          © All rights reserved. Made by{" "}
          <span className="font-semibold text-gray-100">Kaouthar ESSAHELI</span>
        </p>
      </div>
    </footer>
  );
}
