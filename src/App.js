import "./App.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import {
  PiArrowCircleRightThin,
  PiArrowDownThin,
  PiArrowUpThin,
  PiCode,
  PiFileCodeThin,
} from "react-icons/pi";
import { useState, useEffect } from "react";

const Line = () => {
  return <div className="w-full h-0.5 bg-line mt-3 mb-3"></div>;
};

const Container = (props) => {
  return (
    <div className="w-full h-1 border-myyellow border-solid border-x border-y my-2 p-0">
      {props.children}
    </div>
  );
};

const Bar = (props) => {
  return <div className={`${props.width} h-1 bg-myyellow m-0`}> </div>;
};

const Modal = (props) => {
  return (
    <div className={props.display}>
      <div className="section">
        <div className="flex flex-row justify-between w-full text-sm mt-1.5 mb-1.5">
          <p className="bg-myyellow p-1 pr-2">Age: </p>{" "}
          <p className="text-text p-1">24</p>{" "}
        </div>
        <div className="flex flex-row justify-between w-full text-sm mt-1.5 mb-1.5">
          <p className="bg-myyellow p-1 pr-2">Residence: </p>{" "}
          <p className="text-text p-1">Nigeria</p>{" "}
        </div>
        <div className="flex flex-row justify-between w-full text-sm mt-1.5 mb-1.5">
          <p className="bg-myyellow p-1 pr-2">Address: </p>{" "}
          <p className="text-text p-1">Onike-Yaba, Lagos</p>{" "}
        </div>
        <Line />
      </div>

      <div className="section">
        <div className="w-full">
          <h6 className="text-left leading-10">Languages</h6>
          <div className="flex flex-row justify-between">
            <p>English</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>Yoruba</p> <p>100%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-full"} />{" "}
          </Container>
        </div>
      </div>

      <div className="section">
        <div className="w-full">
          <h6 className="text-left leading-10">Skills</h6>
          <div className="flex flex-row justify-between">
            <p>HTML</p> <p>85%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>CSS</p> <p>85%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>JavaScript</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>Typescript</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          {/*  <div className="flex flex-row justify-between">
            <p>PHP</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container> */}
          <div className="flex flex-row justify-between">
            <p>MySql</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-4/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>MongoDB</p> <p>70%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-4/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>NodeJS</p> <p>70%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-4/6"} />{" "}
          </Container>
        </div>
      </div>

      <div className="section">
        <div className="w-full">
          <h6 className="text-left leading-10">Frameworks</h6>
          <div className="flex flex-row justify-between">
            <p>ReactJS</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>React-Native</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>ExpressJS</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>NextJS</p> <p>80%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-5/6"} />{" "}
          </Container>
          <div className="flex flex-row justify-between">
            <p>Tailwind CSS</p> <p>70%</p>
          </div>
          <Container>
            {" "}
            <Bar width={"w-4/6"} />{" "}
          </Container>
        </div>
      </div>
    </div>
  );
};

const downloadCV = () => {
  fetch("CV.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "CV.pdf";
      alink.click();
    });
  });
};

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = "Samuel Adejinmi";
  }, []);
  const yearsOfExperience = new Date().getFullYear() - 2020;

  return (
    <>
      <div
        className={`fixed w-full h-full bg-black bg-opacity-50 m-0  flex-row justify-center ${
          showModal ? "flex lg:hidden xl:hidden" : "hidden"
        }`}
      >
        <div className="bg-white md:w-4/6 sm:w-4/6 p-4 overflow-y-auto">
          <Modal display={"block"} />

          <button
            className="p-2 text-xs flex flex-row items-center px-3 my-2 border-myyellow border-solid border rounded-md hover:bg-myyellow cursor-pointer w-auto"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <p className="pr-2 font-bold">Less</p>{" "}
            <PiArrowUpThin strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 bg-mygray h-full">
        <div className="col-start-2 col-span-2 bg-white p-6 items-center shadow h-min">
          <div className="section">
            <div className="bg-profile h-40 w-40 rounded-full mb-2 bg-cover"></div>
            <h6 className="leading-8">Samuel Adejinmi</h6>
            <p className="leading-8">Full-Stack Developer</p>

            <div className="flex flex-row justify-evenly w-full mt-3">
              <div className="w-5 h-5 bg-myyellow rounded-full flex items-center justify-center">
                <a
                  href="https://www.facebook.com/samuel.adejinmi.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="w-3 h-3" />
                </a>
              </div>
              <div className="w-5 h-5 bg-myyellow rounded-full flex items-center justify-center">
                <a
                  href="http://www.instagram.com/samuel_adejinmi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="w-3 h-3" />
                </a>
              </div>
              <div className="w-5 h-5 bg-myyellow rounded-full flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/samuel-adejinmi-3702541b5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="w-3 h-3" />
                </a>
              </div>
              <div className="w-5 h-5 bg-myyellow rounded-full flex items-center justify-center">
                <a
                  href="https://www.github.com/Adejinmi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div
              className="p-2 text-xs flex flex-row items-center px-3 my-2 border-myyellow border-solid border rounded-md hover:bg-myyellow cursor-pointer lg:hidden "
              onClick={() => {
                setShowModal(true);
              }}
            >
              <p className="pr-2 font-bold">More</p>{" "}
              <PiArrowDownThin strokeWidth={2} />
            </div>

            <Line />
          </div>

          <Modal display={"lg:block hidden"} />
        </div>

        <div className="col-span-7 flex flex-col px-14 items-center sm:my-10 lg:my-0 ">
          <div className="w-full rounded-sm bg-white h-2/6 p-4 flex flex-row justify-around bg-art bg-cover bg-no-repeat items-center ">
            <div className="w-4/6">
              <h1 className="text-4xl font-extrabold my-4">
                I am Samuel Adejinmi <br /> A{" "}
                <span className="text-myyellow">Full-Stack</span> Developer{" "}
              </h1>

              <p className="my-4">
                Full-Stack developer with {yearsOfExperience}+ years expereince,
                developing scalable web applications, mobile applications and
                websites by writing and testing codes, building servers and
                database, thereby improving client/company's productivity
              </p>

              <button
                onClick={downloadCV}
                className="bg-myyellow p-2 text-xs flex flex-row items-center px-4"
              >
                <span className="pr-2">Download CV</span>{" "}
                <MdOutlineFileDownload size={"1.3em"} />
              </button>
            </div>
          </div>

          <div className="my-5 flex flex-col items-center w-full py-5">
            <h6 className="font-bolder text-2xl text-text py-4">Services</h6>
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between sm:justify-center gap-4 items-center w-full h-full">
              <div className="expertise ">
                <PiCode size={"5rem"} color="#FFB400" className="mb-3" />
                <h6 className="py-px text-lg">Website</h6>
                <p className="py-px">Static, Dynamic</p>
              </div>

              <div className="expertise">
                <PiFileCodeThin
                  size={"5rem"}
                  color="#FFB400"
                  className="mb-3"
                  strokeWidth={1}
                />
                <h6 className="py-px text-lg">Web Application</h6>
                <p className="py-px">
                  Static, Progressive, SPA, CMS, MPA, etc..
                </p>
              </div>

              <div className="expertise">
                <CiMobile3 size={"5rem"} color="#FFB400" className="mb-3" />
                <h6 className="py-px text-lg">Mobile Application</h6>
                <p className="py-px">Android, iOS</p>
              </div>
            </div>
          </div>

          <div className="my-5 flex flex-col items-center w-full py-5">
            <h6 className="font-bolder text-2xl text-text py-4">Portfolio</h6>
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between sm:justify-center gap-4 items-center w-full h-full">
              <div
                className="portfolio "
                onClick={() => window.open("https://www.ringconnect.io")}
              >
                <h6 className="py-px text-lg">Ringconnect</h6>
                <p className="py-px">Call automation platform</p>

                <p className="pt-4 font-bold">NextJS, ReactJS</p>
                <PiArrowCircleRightThin
                  size={"3rem"}
                  color="#FFB400"
                  className="my-1"
                />
              </div>

              <div
                className="portfolio "
                onClick={() => window.open("https://www.kilogh.com")}
              >
                <h6 className="py-px text-lg">KiloGH</h6>
                <p className="py-px">Peer-to-peer marketplace</p>

                <p className="pt-4 font-bold">NextJS, MongoDB</p>
                <PiArrowCircleRightThin
                  size={"3rem"}
                  color="#FFB400"
                  className="my-1"
                />
              </div>
              <div
                className="portfolio"
                onClick={() => window.open("https://www.cravinkminds.com")}
              >
                <h6 className="py-px text-lg">CravinkMinds</h6>
                <p className="py-px">An online art community</p>
                <p className="pt-4 font-bold">
                  HTML, CSS, PHP, JavaScript, MySQL
                </p>
                <PiArrowCircleRightThin
                  size={"3rem"}
                  color="#FFB400"
                  className="my-1"
                />
              </div>

              <div
                className="portfolio "
                onClick={() =>
                  window.open("https://web.samovichomesandproperties.com")
                }
              >
                <h6 className="py-px text-lg">Samovic Web App</h6>
                <p className="py-px">A real estate web application</p>
                <p className="pt-4 font-bold">ReactJS, SQL</p>
                <PiArrowCircleRightThin
                  size={"3rem"}
                  color="#FFB400"
                  className="my-1"
                />
              </div>

              <div
                className="portfolio "
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/120bSlOLHDQobkcwUaASmx05sRiH4wucP"
                  )
                }
              >
                <h6 className="py-px text-lg">RezUp</h6>
                <p className="py-px">A class management mobile application</p>
                <p className="pt-4 font-bold">
                  React Native, SQLite, MongoDB, ExpressJS
                </p>
                <PiArrowCircleRightThin
                  size={"3rem"}
                  color="#FFB400"
                  className="my-1"
                />
              </div>
            </div>
          </div>

          <div className="my-5 flex flex-col items-center w-full py-5">
            <h6 className="font-bolder text-2xl text-text py-4">Education</h6>
            <div className="bg-white p-4 w-full h-full">
              <div className="school">
                <div className="my-4">
                  <h6>Higher National Diploma</h6>
                  <p>Electrical Engineering</p>
                  <p>Distinction</p>
                </div>

                <div className="my-4">
                  <h6>Yaba College of Technology</h6>
                  <p>Yaba, Lagos, Nigeria</p>
                  <p>2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-art bg-cover bg-no-repeat h-full fixed right-0 w-24 hidden sm:hidden md:hidden lg:block"></div>
      </div>
    </>
  );
}

export default App;
