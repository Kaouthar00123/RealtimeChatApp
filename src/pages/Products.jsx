import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Modal,
  Rating,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useRef, useState, useEffect } from "react";
import FilterInputs from "../components/sharedcmp/FilterInputs";
import { useDownloadExcel } from "react-export-table-to-excel";

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

const header = [
  "Product",
  "Catagory",
  "Stock",
  "Sales/Day",
  "Sales/Month",
  "Rating",
  "Sales",
  "Revenue",
  "Last Update",
];

const products = [
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },

  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Finale promotion",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },

  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Start new promotion",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },

  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Watch iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Apple iMac 27",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
  {
    product: {
      img: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
      title: "Finale du finale",
    },
    category: "Desktop PC",
    stock: 7,
    sales: 10,
    rating: 4,
    revenue: 5.78,
  },
];

const other = { sales: 10776.78, "pagination-range": 10 };

export default function Products() {
  const [indexPagination, setindexPagination] = useState(1);
  const [openModalAddProduct, setopenModalAddProduct] = useState(false);

  const tableRef = useRef(null);

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  //create reference
  const fileInputRef = useRef();

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  let ranges = 1;
  products.length % other["pagination-range"] == 0
    ? (ranges = products.length / other["pagination-range"])
    : (ranges = products.length / other["pagination-range"] + 1);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      //reader.readAsArrayBuffer <-  arraybuffer
      reader.readAsDataURL(image); //represented as a base64string
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <h2 className="py-3 px-1">Products</h2>
      <div className="mx-auto max-w-screen-2xl lg:px-2">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          {/* Search and filter */}
          <div className="w-full flex items-center justify-between py-3">
            <form id="table-search" className="max-w-md mx-3">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
            <div id="tablefilter" className="flex gap-2 mx-3">
              {/* Filter button */}
              <button className="flex flex-row justify-center items-center gap-2">
                <div className="inline">
                  <div className="inline dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="1em"
                      height="1em"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5.5H.5l5 7v6l3-2v-4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="dark:text-white">Filter</span>
              </button>
              <FilterInputs
                title="Last insert"
                options={["Last 1 day", "Last week", "Last month", "..."]}
              />
              <FilterInputs
                title="Category"
                options={["Laptops", "Phones", "Watches", "..."]}
              />
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">All Products:</span>
                <span className="dark:text-white">{products.length} </span>
              </h5>
              <h5>
                <span className="text-gray-500">Total sales:</span>
                <span className="dark:text-white">{other.sales}</span>
              </h5>
            </div>
            <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                onClick={() => setopenModalAddProduct(!openModalAddProduct)}
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add new product
              </button>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Update stocks 1/250
              </button>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={onDownload}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Export
              </button>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              ref={tableRef}
              class="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead className="sticky text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  {header.map((head) => (
                    <th scope="col" class="px-6 py-3" key={head}>
                      <div class="flex items-center">
                        {head}
                        <button>
                          <svg
                            class="w-3 h-3 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products
                  .slice(
                    indexPagination - 1,
                    indexPagination + other["pagination-range"] - 1
                  )
                  .map((product) => (
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="w-4 px-4 py-3">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            onclick="event.stopPropagation()"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={product.product.img}
                          alt="iMac Front Image"
                          className="w-auto h-8 mr-3"
                        />
                        <span>{product.product.title}</span>
                      </th>
                      <td className="px-4 py-2">
                        <span className="text-left items-start  text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                          {product.sales}
                        </div>
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {product.sales}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {product.sales}
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          <Rating>
                            {Array.from({ length: product.rating }).map(
                              (_, index) => (
                                <Rating.Star />
                              )
                            )}
                            {Array.from({ length: 5 - product.rating }).map(
                              (_, index) => (
                                <Rating.Star filled={false} />
                              )
                            )}
                          </Rating>
                          <span className="ml-1 text-gray-500 dark:text-gray-400">
                            {product.rating}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewbox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 mr-2 text-gray-400"
                            aria-hidden="true"
                          >
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                          </svg>
                          {product.sales}
                        </div>
                      </td>
                      <td className="px-4 py-2"> {product.revenue}</td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Just now
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {"Showing "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {indexPagination.toString() +
                  " - " +
                  (indexPagination + other["pagination-range"] - 1 <=
                  products.length
                    ? (
                        indexPagination +
                        other["pagination-range"] -
                        1
                      ).toString()
                    : products.length.toString())}
              </span>
              {" of "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {products.length}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              {/* Previous */}
              <li>
                <button
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => {
                    let val = indexPagination - other["pagination-range"];
                    if (val > 0) setindexPagination(val);
                  }}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              {/* Ranges */}
              {Array.from({ length: ranges }).map((_, index) => (
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {/* Next */}
              <li>
                <button
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => {
                    let val = indexPagination + other["pagination-range"];
                    if (val <= products.length) setindexPagination(val);
                  }}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Add new element */}
      <Modal
        show={openModalAddProduct}
        size="md"
        onClose={() => setopenModalAddProduct(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Add New Product
            </h3>
            <form method="post" onSubmit={handleSubmit}>
              <div id="data" className="flex flex-col gap-3">
                <div>
                  <Label className="mb-2 block" htmlFor="email" value="Name" />
                  <TextInput
                    id="product-name"
                    name="product-name"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="Product photo" />
                  </div>
                  <FileInput
                    id="imagefileUpload"
                    name="imagefileUpload"
                    helperText="A profile picture is useful to confirm your are logged into your account"
                    ref={fileInputRef}
                    accept="image/*"
                    multiple
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substring(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage(null);
                      }
                    }}
                  />

                  <img src={preview} />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Description" />
                  </div>
                  <Textarea
                    id="product-description"
                    name="product-description"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Other details" />
                  </div>
                  <Textarea
                    id="product-details"
                    name="product-details"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Quantity stock" />
                  </div>
                  <TextInput
                    id="quantity"
                    name="quantity"
                    type="number"
                    placeholder="Leave a comment..."
                    required
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Sizes" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="check-op1"
                          name="check-op1"
                          value={"32GB"}
                          defaultChecked={true}
                        />
                        <Label htmlFor="remember">{"32GB"}</Label>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="check-op2"
                          name="check-op2"
                          value={"16GB"}
                        />
                        <Label htmlFor="remember">{"16GB"}</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="actions"
                className="my-5 flex justify-between items-center"
              >
                <Button
                  className="bg-green-300"
                  type="submit"
                  // onClick={() => setopenModalAddProduct(false)}
                >
                  Add this product
                </Button>
                <Button
                  className="bg-red-300"
                  onClick={() => setopenModalAddProduct(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
