import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';

export const Brands = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(title: { eq: "Driver Recruitment Landing Page" }) {
        recruitment {
          brands {
            title
            description
            ctaButton
            images {
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const { title, description, ctaButton } = data?.wpPage?.recruitment?.brands;

  return (
    <>
      <section className="bg-white section-spacing">
        <div className="px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                {description}
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <LinkScroll
                    to="Application"
                    spy
                    smooth
                    offset={-95}
                    duration={1000}
                    className="cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent uppercase text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:text-sm lg:text-lg"
                  >
                    {ctaButton}
                  </LinkScroll>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* UPS */}
                <svg
                  className="h-24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 39.4 48.3"
                >
                  <path
                    d="M19.7 46.5c.4-.2 10.8-4.7 14.1-7.4 3.4-2.8 5.2-6.8 5.2-11.6V5l-.3-.1C30.4.4 20.1.7 19.6.7 19.2.7 8.9.4.6 4.9L.4 5v22.6c0 4.8 1.8 8.8 5.2 11.6 3.3 2.7 13.7 7.2 14.1 7.3"
                    fill="#341b14"
                  />
                  <path
                    fill="#ffb406"
                    d="M19.7 47s-11-4.8-14.4-7.5C1.7 36.5 0 32.4 0 27.7V4.3C8.7-.4 19.7 0 19.7 0s11-.4 19.7 4.3v23.3c0 4.7-1.7 8.8-5.3 11.8-3.4 2.8-14.4 7.6-14.4 7.6M1.6 27.7c0 4.4 1.6 8 4.7 10.5 2.8 2.3 11.1 6 13.4 7 2.3-1 10.7-4.8 13.4-7 3.1-2.5 4.7-6.2 4.7-10.5v-23c-11.6-1.1-25.4-.5-36.2 9.5v13.5z"
                  />
                  <path
                    fill="#ffb406"
                    d="M30.8 24.4c1.5.9 2.1 1.5 2.2 2.6 0 1.2-.8 1.9-2.1 1.9-1.1 0-2.4-.6-3.3-1.4v3.2c1.1.6 2.4 1.1 3.8 1.1 3.4 0 5-2.4 5-4.6.1-2-.5-3.6-3.4-5.3-1.3-.8-2.3-1.3-2.3-2.5s1.1-1.7 2-1.7c1.2 0 2.4.7 3.1 1.4v-3c-.6-.5-1.9-1.2-3.8-1.1-2.3.1-4.7 1.7-4.7 4.5.1 1.9.7 3.3 3.5 4.9M19 31.6c.3.1.8.2 1.6.2 3.9 0 6.1-3.5 6.1-8.5 0-5.1-2.3-8.2-6.4-8.2-1.9 0-3.4.4-4.7 1.2v22.6H19v-7.3zM19 18c.3-.1.8-.3 1.2-.3 2 0 2.8 1.6 2.8 5.5 0 3.8-1 5.6-3 5.6-.5 0-.9-.1-1.1-.2V18zM8.5 31.8c2.1 0 3.9-.5 5.2-1.4V15.3h-3.5v13.1c-.4.3-.9.4-1.6.4-1.6 0-1.8-1.5-1.8-2.4V15.3H3.3v10.9c0 3.7 1.8 5.6 5.2 5.6m23.3 13.5v2.3h.4v-.9h.1l.6.9h.5s-.6-.9-.7-1c.3-.1.5-.3.5-.6s-.2-.7-.8-.7h-.6zm.6.3c.3 0 .4.2.4.3 0 .2-.1.4-.5.4h-.1v-.7h.2z"
                  />
                  <path
                    fill="#ffb406"
                    d="M34 46.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5c.9 0 1.5.7 1.5 1.5m-1.5-1.9c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9 1 0 1.9-.8 1.9-1.9 0-1-.9-1.9-1.9-1.9"
                  />
                </svg>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* Amazon */}
                <svg
                  viewBox="163.5 263.1 285 85.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path
                      d="M340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z"
                      fill="#f90"
                    />
                    <path
                      d="M347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z"
                      fill="#f90"
                    />
                    <path d="M328.2 272.5V266c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6H261c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4H438c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z" />
                  </g>
                </svg>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* Fedex */}
                <svg
                  className="h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="10 45.67 160.003 44.33"
                >
                  <path
                    d="M169.018 84.244c0-2.465-1.748-4.27-4.156-4.27-2.404 0-4.154 1.805-4.154 4.27 0 2.461 1.75 4.263 4.154 4.263 2.408 0 4.156-1.805 4.156-4.263zm-5.248.219v2.789h-.901v-6.15h2.239c1.312 0 1.914.573 1.914 1.69 0 .688-.465 1.233-1.064 1.312v.026c.52.083.711.547.818 1.396.082.55.191 1.504.387 1.728h-1.066c-.248-.578-.223-1.396-.414-2.081-.158-.521-.436-.711-1.033-.711h-.875v.003l-.005-.002zm1.117-.795c.875 0 1.125-.466 1.125-.877 0-.486-.25-.87-1.125-.87h-1.117v1.749h1.117v-.002zm-5.17.576c0-3.037 2.411-5.09 5.141-5.09 2.738 0 5.146 2.053 5.146 5.09 0 3.031-2.407 5.086-5.146 5.086-2.73 0-5.141-2.055-5.141-5.086zM141.9 88.443l-5.927-6.647-5.875 6.647h-12.362l12.082-13.574-12.082-13.578h12.748l5.987 6.596 5.761-6.596h12.302l-12.022 13.521 12.189 13.631zm-47.902 0V45.67h23.738v9.534h-13.683v6.087h13.683v9.174h-13.683v8.42h13.683v9.558z"
                    fill="#ff5a00"
                  />
                  <path
                    d="M83.98 45.67v17.505h-.111c-2.217-2.548-4.988-3.436-8.201-3.436-6.584 0-11.544 4.479-13.285 10.396-1.986-6.521-7.107-10.518-14.699-10.518-6.167 0-11.035 2.767-13.578 7.277V61.29H21.361v-6.085h13.91v-9.533H10v42.771h11.361V70.465h11.324a17.082 17.082 0 00-.519 4.229c0 8.918 6.815 15.185 15.516 15.185 7.314 0 12.138-3.437 14.687-9.694h-9.737c-1.316 1.883-2.316 2.439-4.949 2.439-3.052 0-5.686-2.664-5.686-5.818h19.826C62.683 83.891 68.203 90 75.779 90c3.268 0 6.26-1.607 8.089-4.322h.11v2.771h10.017V45.672H83.98v-.002zM42.313 70.593c.633-2.718 2.74-4.494 5.37-4.494 2.896 0 4.896 1.721 5.421 4.494H42.313zm35.588 11.341c-3.691 0-5.985-3.439-5.985-7.031 0-3.84 1.996-7.529 5.985-7.529 4.139 0 5.788 3.691 5.788 7.529 0 3.638-1.746 7.031-5.788 7.031z"
                    fill="#29007c"
                  />
                </svg>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* USPS */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 183.125 35.022"
                >
                  <path
                    d="M45.685 33.475L52.49 1.453H7.922L1.116 33.475h44.569z"
                    fill="#fff"
                  />
                  <path
                    d="M51.023 2.632L8.87 2.634l-.025.14S33.626 7.864 34.117 7.95c5.694 1.005 5.517 2.104 5.517 2.104 3.99-.02 4.48.141 5.178.723 2.098 1.752-1.312 6.916-1.312 6.916-.488.36-37.352 14.596-37.352 14.596h38.568l6.306-29.656zm8.082 0l-1.601 7.537c-.574 2.604 1.182 3.783 4.107 3.783 2.936 0 5.168-1.18 5.727-3.783 1.628-7.537-.018 0 1.628-7.537h-2.455s-1.24 5.798-1.455 6.791c-.37 1.739-1.287 2.777-3.086 2.777-1.878-.015-2.264-1.055-1.879-2.777-.043.174 1.461-6.791 1.461-6.791h-2.447zm12.213 0l-2.36 11.119h2.175l1.716-8.252h.05l2.745 8.252h3.086l2.356-11.119h-2.17l-1.752 8.344h-.03l-2.638-8.344h-3.178zm12.121 0l-2.353 11.119h2.449l2.357-11.119H83.44zm4.096 0l-.389 1.77h3.46l-1.987 9.35h2.451l1.985-9.35h3.457l.373-1.77h-9.35zm10.996 0l-2.373 11.119h8.058l.375-1.77h-5.595l.636-3.039h4.883l.354-1.642h-4.881l.617-2.899h5.602l.369-1.77H98.53zm9.832 0l-2.354 11.119h5.022c3.102 0 6.08-2.046 6.748-6.047.477-2.837-.655-5.072-4.02-5.072h-5.396zm18.432 0c-2.881 0-4.314 1.023-4.527 2.623-.357 2.664 4.357 4.247 4.002 5.842-.22.932-1.365.885-2.295.885h-3.022l-.375 1.769h3.754c3.071 0 4.404-1.102 4.65-2.623.448-2.729-4.34-4.138-3.966-5.904.122-.544.725-.823 2.058-.823h2.621l.385-1.769h-3.285zm4.545 0l-.385 1.77h3.457l-1.984 9.35h2.449l1.984-9.35h3.46l.372-1.77h-9.353zm11.949 0l-6.371 11.119h2.45l4.884-8.914.978 7.144h-3.508l-.959 1.77h7.192L146.22 2.63h-2.931zm5.636 0l-.386 1.77h3.457l-1.985 9.35h2.45l1.984-9.35h3.455l.375-1.77h-9.35zm10.984 0l-2.375 11.119h8.063l.375-1.77h-5.602l.637-3.039h4.885l.355-1.642h-4.882l.62-2.899h5.596l.373-1.77h-8.045zm13.436 0c-2.885 0-4.311 1.023-4.529 2.623-.356 2.664 4.357 4.247 4.002 5.842-.219.932-1.367.885-2.297.885h-3.023l-.371 1.769h3.75c3.071 0 4.406-1.102 4.656-2.623.446-2.729-4.343-4.138-3.973-5.904.125-.544.731-.823 2.065-.823h2.615l.393-1.769h-3.288zm-62.889 1.77h2.5c2.03 0 2.755 1.505 2.446 3.271-.433 2.497-2.03 4.309-4.803 4.309h-1.752l1.61-7.58zM29.118 9.488c-1.117-.008-1.904.008-1.994.002H7.417L2.575 32.296s14.831-7.278 16.645-8.21c3.717-1.91 8.856-4.432 13.605-6.05.905-.306 4.782-1.501 7.04-1.904.875-.156 1.247-.305 1.236-.468-.034-.468-.914-.499-2.404-.426-4.547.214-13.258 3.683-15.766 5.006L20.1 11.47h18.087c.61-1.706-5.717-1.954-9.07-1.98zm9.59 2.114c-.131 0-.244.088-.396.295-.139.178-.252.299-.612.48-.558.275-2.019.429-2.703.486-.656.055-.834.122-.845.375-.007.227.097.356 1.039.356 2.166 0 6.065-.817 7.24-.443.62.198.122 1.303-.387 2.756-.197.56.19.521.414.275.225-.248 1.236-2.099 1.346-3.041.156-1.339-.992-1.54-2.576-1.54h-2.52zm32.047 9.365c-3.44 0-6.308 1.798-7.148 5.752-.664 3.162 1.26 5.766 4.685 5.766 3.474 0 6.264-1.719 7.133-5.766.711-3.301-1.259-5.752-4.67-5.752zm98.146 0c-3.412 0-6.696 1.766-7.535 5.752-.851 3.984 1.674 5.766 5.088 5.766.944 0 1.849-.107 2.746-.245l.604-1.912c-.883.22-1.817.391-2.98.391-2.218 0-3.47-1.488-2.944-4 .527-2.513 2.417-3.986 4.632-3.986 1.135 0 1.908.155 2.606.357l.219-1.875c-.789-.139-1.61-.248-2.436-.248zm-87.484.2c-2.886 0-4.315 1.023-4.53 2.622-.357 2.668 4.355 4.248 4.003 5.846-.218.93-1.367.883-2.297.883H75.57l-.375 1.767h3.756c3.07 0 4.402-1.1 4.65-2.62.45-2.728-4.34-4.14-3.969-5.907.124-.544.73-.822 2.067-.822h2.615l.39-1.77h-3.287zm4.543 0l-.386 1.769h3.457l-1.985 9.35h2.45l1.988-9.35h3.455l.369-1.77H85.96zm35.79 0c-2.887 0-4.315 1.023-4.53 2.622-.359 2.668 4.354 4.248 4.002 5.846-.218.93-1.367.883-2.297.883h-3.023l-.373 1.767h3.754c3.068 0 4.402-1.1 4.65-2.62.45-2.728-4.339-4.14-3.973-5.907.125-.544.733-.822 2.067-.822h2.619l.386-1.77h-3.283zm5.405 0l-2.373 11.118h8.065l.371-1.767h-5.598l.637-3.041h4.885l.355-1.645h-4.882l.617-2.896h5.6l.368-1.77h-8.044zm9.827 0l-2.358 11.118h2.45l1.984-9.365h2.201c1.364 0 1.486.758 1.348 1.457-.262 1.317-1.41 1.844-2.666 1.844-.233 0-.623.016-.932-.031l2.018 6.095h2.681l-1.83-4.793c1.629-.231 3.027-1.393 3.178-3.488.142-1.861-.726-2.838-2.895-2.838h-5.18zm36.334 0l-2.368 11.118h8.063l.371-1.767h-5.596l.635-3.041h4.885l.355-1.645h-4.882l.62-2.896h5.596l.371-1.77h-8.05zm-118.14.001l-2.358 11.117h2.451l1.985-9.35h1.998c.902 0 1.519.449 1.258 1.659-.138.666-.745 1.814-2.42 1.814-.371 0-.774-.047-1.082-.078l.123 1.615c.355.032.775.09 1.164.09 2.201 0 4.139-1.27 4.59-3.38.293-1.394.014-3.487-2.389-3.487h-5.32zm42.75 0l-6.368 11.117h2.446l4.888-8.916.973 7.149h-3.502l-.96 1.767h7.19l-1.732-11.117h-2.935zm8.302 0l-2.355 11.117h7.521l.387-1.767h-5.07l1.984-9.35h-2.467zm40.13 0l1.673 11.117h2.897l6.33-11.117h-2.42l-4.883 8.918-1.148-8.918h-2.45zm12.376 0l-2.355 11.117h2.45l2.356-11.117h-2.45zm-88.366 1.565c2.264 0 3.025 1.735 2.545 3.986-.531 2.513-2.018 4-4.234 4-2.296 0-3.056-1.845-2.576-4 .573-2.512 2.05-3.986 4.265-3.986z"
                    fill="#15569c"
                  />
                  <path
                    d="M56.047 17.05l-.173.825h126.2l.17-.825H56.056z"
                    fill="#ed192d"
                  />
                </svg>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* XPO Logistics */}
                <svg
                  className="h-16"
                  viewBox="-517 383.6 188.5 27.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="250px"
                >
                  <path d="M-445.2 384.2h-6.9v21.6h16.2v-5.7h-9.3z" />
                  <path d="M-419 397.6c-.2-4.7-3.6-7.9-8.5-7.9-5.1 0-8.7 3.4-8.7 8.3s3.5 8.3 8.6 8.3c5 0 8.6-3.4 8.6-8.2.1-.2 0-.3 0-.5zm-8.6 4.4c-1.7 0-2.5-1.4-2.5-4s.8-4 2.5-4c1.8 0 2.8 1.4 2.8 4 0 2.7-1 4-2.8 4z" />
                  <path d="M-408 392c-1.1-1.7-2.2-2.3-4.3-2.3-4 0-6.6 3.4-6.7 7.9v.4c.1 4.4 2.6 7 6.7 7 1.9 0 3.1-.6 4.3-1.9v1.7c0 2.2-.6 3-2.4 3s-2.1-.6-2.4-2h-5.6c.5 3.9 2.1 5.3 8 5.3 3.7 0 5.9-.9 7.2-3 .7-1.1 1-2.2 1-4.2v-13.6h-5.9zm-2.4 8.9c-1.8 0-2.6-1.2-2.6-3.3 0-1.9.9-3.5 2.6-3.5s2.6 1.7 2.6 3.8c0 1.9-.9 3-2.6 3z" />
                  <path d="M-419 397.6v.4-.1c.1-.1.1-.2 0-.3zm24.3 2.5v-10h-6.1v15.6h6.1zm21.9-15.9l-6.2 5.9v10.5c0 1.8.1 2.4.6 3.2.8 1.6 2.5 2.2 5.6 2.2 1 0 2.8-.1 4.3-.2v-4.2h-2c-2 0-2.2-.3-2.3-2.1v-4.8h4.3v-4.5h-4.3zm5.7 5.9h6.1v15.6h-6.1zm14.7 11.8c-1.7 0-2.6-1.4-2.6-3.7 0-2.7.9-4.2 2.6-4.2 1.2 0 2 .9 2.2 2.1h5.8c-.3-3.8-3.5-6.3-8-6.3-5.2 0-8.6 3.3-8.6 8.3 0 4.8 3.5 8.1 8.6 8.1 4.6 0 7.6-1.9 8.2-6.1h-5.8c-.3 1.5-1.5 1.8-2.4 1.8z" />
                  <path d="M-334.6 395.7c-3.1-.5-3.4-.7-3.4-1.5 0-.6.5-1 1.6-1 1.4 0 1.8.3 2 1.4h5.5c-.3-3.5-2.7-5-7.7-5-4.8 0-7.4 1.8-7.4 5 0 1.6.7 2.9 2 3.6 1 .6 1.8.8 4.6 1.4 2.9.6 3 .9 3 1.6 0 .8-.8 1.3-1.9 1.3-2.1 0-2.2-1.1-2.3-2.4h-5.7c.3 3.8 2.1 6.1 7.9 6.1 5 0 7.9-2 7.9-5.5 0-.7-.2-1.5-.5-2.1-.6-1.5-2.2-2.3-5.6-2.9zm-52.2 10.4c5 0 7.9-2 7.9-5.5 0-.7-.2-1.5-.5-2.1-.7-1.4-2.3-2.3-5.7-2.9-3.1-.6-3.4-.7-3.4-1.5 0-.6.5-1 1.6-1 1.4 0 1.8.4 2 1.4h5.5c-.3-3.4-2.7-5-7.7-5-4.8 0-7.4 1.8-7.4 5 0 1.6.7 2.9 2 3.6 1 .6 1.8.8 4.6 1.4 2.9.6 3 .9 3 1.6 0 .8-.8 1.3-1.9 1.3-2.1 0-2.1-1.1-2.3-2.4h-5.7v.1c.4 3.7 2.2 6 8 6z" />
                  <g fill="#c00">
                    <path d="M-493.8 384.2h-7.9s-3.2 5.2-3.6 6c-.5-1.1-4-6-4-6h-7.7l7.8 10.1-7.8 11.4h7.9l1.8-3.4c.7-1.1 1.3-2.3 1.7-3.2.5 1.2.8 1.9 1.6 3.1l2.1 3.5h8l-7.8-11.4z" />
                    <path d="M-478.1 385.5c-1.5-1-3.1-1.3-6.6-1.3h-9.1v21.6h6.8v-6.6h3.9c2.9 0 4.6-.6 6-2s2.1-3.2 2.1-5.3c0-2.8-1.1-5.1-3.1-6.4zm-6.3 8.5h-2.6v-4.5h2.5c1.9 0 2.9.7 2.9 2.3 0 1.5-.9 2.3-2.8 2.2z" />
                    <path d="M-464.1 383.6c-6.7 0-11.1 4.5-11.1 11.3s4.4 11.3 11 11.3c6.5 0 10.9-4.5 10.9-11.3 0-6.7-4.3-11.3-10.8-11.3zm-.1 17.4c-2.8 0-4.1-2.2-4.1-6.1 0-3.7 1.5-5.9 4.1-5.9s4 2.1 4 5.8c0 4-1.3 6.2-4 6.2z" />
                  </g>
                </svg>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                {/* JB hunt */}

                <svg
                  className="h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-22.991 -9.763 199.255 58.579"
                >
                  <path d="M0 0h145.15v39.053H0z" />
                  <path d="M3.466 3.466h138.192V35.56H3.466z" fill="#ffdb00" />
                  <path d="M152.268 32.888c.423.45.635.979.635 1.614 0 .635-.212 1.164-.635 1.64-.424.45-.926.661-1.535.661a2.005 2.005 0 01-1.535-.66c-.423-.45-.635-1.006-.635-1.641s.212-1.191.635-1.614c.424-.45.926-.662 1.535-.662.609 0 1.138.212 1.535.662zm.264-.265c-.502-.529-1.085-.767-1.799-.767-.688 0-1.296.264-1.773.767-.502.53-.74 1.138-.74 1.879 0 .74.238 1.375.74 1.878.477.53 1.085.794 1.773.794s1.297-.265 1.8-.794c.502-.529.74-1.138.74-1.878 0-.715-.238-1.35-.74-1.879zm-1.402 1.773c-.106.053-.265.053-.45.053h-.45V33.39h.424c.264 0 .476.027.582.106.132.08.185.212.185.424-.026.238-.106.397-.291.476zm-1.402 1.56h.476v-1.163h.397c.264 0 .45.026.556.106.185.105.264.317.264.661v.238l.027.08v.052h.45v-.026c0-.027-.027-.08-.027-.159v-.423c0-.159-.053-.291-.159-.45a.649.649 0 00-.476-.29c.159-.027.29-.08.397-.133.185-.132.264-.318.264-.582 0-.37-.132-.609-.423-.741a2.515 2.515 0 00-.767-.106h-.98zm-13.865-9.048c-.158-1.032-.74-2.302-1.72-3.545-1.455-1.852-3.174-2.884-4.391-2.725v-.027h-8.943c-4.048-4.366-8.229-8.89-9.102-9.922-1.587-1.878-2.593-1.905-2.963-1.825H13.547c-2.17-.053-3.202.555-3.678 1.164-.662.873-.635 2.143.106 3.783H10c.476 1.085 1.376 2.25 2.54 3.334 2.196 1.958 4.577 2.831 5.874 2.223h5.927c4.127 4.445 8.44 9.128 9.34 10.186 1.587 1.879 2.725 1.693 2.857 1.693h93.795c.45.08 3.572.635 5.027-1.005.635-.82.82-1.932.502-3.334zm-2.513-3.043l.053.053c.291.37.529.741.714 1.085h-3.81a9.662 9.662 0 01-.608-1.138zm-5.847 3.943a9.53 9.53 0 01-.477-.53h3.916c.185.186.37.371.556.53zm4.55.45c.133.105.265.185.397.264h-4.26c-.079-.08-.158-.185-.238-.264zm-5.476-1.456a9.278 9.278 0 00-.503-.529h3.995c.053.053.08.106.133.159.105.132.211.238.317.37zm-.926-1.005c-.186-.185-.37-.397-.556-.609h4.26c.106.212.238.397.37.609zm3.942-4.18c.476-.371 1.905.185 3.387 1.799h-3.414c-.185-.53-.238-.98-.211-1.297.026-.238.106-.397.238-.503zm-.503 3.121h-4.445c-.212-.211-.423-.45-.635-.66h4.763c.105.21.211.449.317.66zm-5.477-1.11c-.132-.16-.29-.318-.423-.477h5.318c.027.159.08.318.132.476zm4.948-2.117c-.053.158-.106.317-.132.502 0 .106-.027.212-.027.318 0 .106 0 .238.027.344h-5.689c-.344-.397-.714-.768-1.085-1.164zm-17.595-10.24c.106.132.265.318.476.53H18.574a113.058 113.058 0 01-1.111-1.191h92.895c.185.158.397.37.608.661zm-93.239.98c.265.29.582.634.926 1.005h-1.852c-.132-.133-.265-.265-.397-.37a14.87 14.87 0 00-.74-.61h2.063zm-2.699-.45a6.555 6.555 0 00-1.005-.583h2.699c.158.16.344.37.555.582zm93.795-2.038l.08-.026s.317-.027.9.396h-92.79c-.106-.105-.159-.185-.186-.211l-.079-.08c-.026-.026-.053-.053-.08-.053zm-92.525.98h-3.333a3.183 3.183 0 00-.477-.133h3.678c.026 0 .08.053.132.132zm-1.349-.848c.317.053.53.133.714.238h-4.445c.609-.317 1.72-.502 3.731-.238zm-4.34.715h.08c-.026 0-.08 0-.08.026zm-.079 1.72c-.026-.291.053-.53.186-.688.132-.16.37-.238.688-.265 1.031-.053 2.592.688 4.021 1.852h-4.683a2.95 2.95 0 01-.212-.9zm.424 1.375h5c.582.556 1.085 1.112 1.456 1.667h-5.292c-.476-.555-.873-1.111-1.164-1.667zm2.222 2.752c-.211-.185-.423-.397-.635-.609h5.186a4.77 4.77 0 01.635 1.456h-4.1c-.371-.265-.742-.53-1.086-.847zm5.265 1.323c0 .238-.053.45-.185.582-.45.503-1.746.265-3.254-.609zm-1.164-4.075h1.8c.476.53 1.005 1.085 1.534 1.667h-2.064a8.706 8.706 0 00-1.27-1.667zm3.784 2.143c.45.477.9.953 1.35 1.456h-3.096c-.053-.45-.239-.953-.503-1.456zm1.799 1.905c.053.08.132.133.185.212h-3.704c0-.08.026-.132.026-.212zm-3.863 1.138c.106-.132.212-.29.265-.45h4.206c.133.16.291.318.424.45zm14.367 8.917c-.291-.318-.635-.715-1.032-1.138h1.138v-.476h-1.561c-.291-.318-.582-.635-.9-1.006h2.46v-.45h-2.883c-.476-.502-.953-1.031-1.482-1.587h4.366v-.45h-4.79c-.37-.423-.767-.846-1.163-1.27h5.953v-.476h-6.377l-.926-1.005h7.303v-.45h-7.726c-.212-.212-.423-.45-.635-.662h8.36v-.476h-8.783c-.186-.212-.37-.397-.556-.609h9.34v-.45h-9.763c-.133-.132-.238-.264-.37-.396H33.47v-.476H22.887c-.186-.212-.371-.397-.556-.609h11.112v-.476H21.908c-.186-.212-.37-.397-.556-.609H33.47v-.476H20.929c-.186-.212-.37-.397-.556-.608H33.47v-.45H19.923c-.318-.344-.635-.688-.926-1.006h92.842c.265.291.556.635.9 1.006h-1.085v.45h1.535c.185.185.37.396.555.608h-2.09v.476h2.514c.185.186.37.397.555.609h-3.069v.476h3.493c.185.185.37.397.555.609h-4.048v.476h4.471c.133.132.239.265.37.397h-4.84v.45h5.264c.185.211.37.396.556.608h-5.82v.476h6.243c.212.212.397.45.609.662h-6.853v.45h7.303c.29.344.608.661.926 1.005h-8.202v.476h8.651c.397.424.794.847 1.165 1.27h-9.843v.45h10.266c.132.159.291.317.423.476h-10.689v.45h11.113c.211.212.423.45.608.661h-11.72v.45h12.17c.185.212.37.397.556.609h-12.727v.846h.027v-.396h13.123c.159.185.344.37.503.529h-13.653v.476h14.076c.185.185.344.37.503.53H33.364zm.423.45h92.895c.186.211.397.423.556.608H34.316c-.132-.159-.317-.344-.529-.609zm2.646 2.063c-.08 0-.688.053-1.693-.979h92.921c.556.582.9.953.9.953zm94.033-.026c-.397-.106-.635-.185-.82-.318h4.498c-1.138.662-3.017.476-3.678.318zm4.207-.768h-5.556c-.106-.105-.265-.29-.503-.529h4.736a2.757 2.757 0 00.74.185c.292.027.556 0 .821-.079a1.344 1.344 0 01-.238.423zm.08-1.349c-.133.106-.318.132-.556.106-.768-.08-2.064-.873-3.281-2.408-.106-.132-.185-.264-.291-.397h3.783c.053.106.106.212.16.344.184.503.343.98.422 1.403.027.45-.053.793-.238.952z" />
                  <path d="M50.112 26.088V13.97h4.551c2.143 0 3.836.635 3.836 3.043a3.42 3.42 0 01-1.243 2.646c1.032.344 1.587 1.455 1.587 2.778 0 2.725-1.614 3.65-4.1 3.65zm3.122-5.054v2.25h1.376c.767 0 1.35-.212 1.35-1.112 0-1.058-.741-1.138-1.72-1.138zm0-4.233v2.01h1.297c.635 0 1.084-.343 1.084-1.057 0-.953-.608-.953-1.27-.953zm14.605 9.287V13.97h3.122v4.101h2.964V13.97h3.122v12.118h-3.122v-4.683H70.96v4.71H67.84zM79.27 13.97h3.122v7.25c0 1.19.186 2.222 1.482 2.222 1.111 0 1.455-.9 1.455-2.222v-7.25h3.122v6.853c0 3.89-1.402 5.582-4.577 5.582-2.963 0-4.604-1.428-4.604-5.609zm17.33 6.615l-.105-2.752V13.97h2.99v12.118h-2.937L93.16 19.5l.106 2.752v3.836h-2.99V13.97h2.937zm4.207-6.615h8.732v3.175h-2.805v8.943h-3.122v-8.943h-2.805zm-55.483 9.128c-.9 0-1.64.741-1.64 1.64 0 .9.74 1.641 1.64 1.641.9 0 1.64-.74 1.64-1.64 0-.926-.714-1.64-1.64-1.64zm15.981 0c-.9 0-1.64.741-1.64 1.64 0 .9.74 1.641 1.64 1.641.9 0 1.64-.74 1.64-1.64 0-.926-.74-1.64-1.64-1.64zm-24.236-.503c.953 1.165 1.879 1.165 2.408 1.006.608-.185.794-.662.794-1.64V13.97h3.122v7.435c0 3.201-1.191 4.842-3.704 5-2.435.133-3.096-.317-4.472-1.825z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
