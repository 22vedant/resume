import React from "react";

const RightSidebar = () => {
  return (
    <div className="flex flex-1 flex-col bg-white dark:text-black">
      <ul className="relative p-3">
        <div>
          <span className="flex items-center justify-center">
            <h1 className="">
              <b>Vedant Chinta</b>
            </h1>
          </span>
          <h4 className="flex justify-center">
            <span className="mx-2">Pune, MH</span> |
            <span className="mx-2">+91 8484836085</span> |
            <span className="mx-2">vedantchinta7@gmail.com</span> |
            <span className="mx-2">LinkedIn</span>
          </h4>
        </div>
        <div>
          <div className="section box-border outline-offset-2 outline-blue-400 duration-100 ease-in-out hover:outline-dashed">
            <h2>SKILLS</h2>
            <p>
              <span className="">
                <span className="font-bold">Languages:</span> C/C++, SQL,
                TypeScript, JavaScript, HTML/CSS
              </span>
            </p>
            <p className="text">
              <span className="">
                <span className="font-bold">Frameworks:</span> React.js,
                Tailwind, Next.js, Node.js, Hono, Express
              </span>
            </p>
            <p className="text">
              <span className="">
                <span className="font-bold">Developer Tools:</span> Git, GitHub,
                Docker, VS Code, Prisma ORM, Cloudflare Workers, Cloduflare
                Pages, UploadThing, Vercel
              </span>
            </p>
            <p className="text">
              <span className="">
                <span className="font-bold">Databases:</span> MongoDB, Postgres
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="section relative box-border outline-offset-2 outline-blue-400 duration-100 ease-in-out hover:outline-dashed">
            <h2 className="view">PROJECTS</h2>
            <div className="subsection relative">
              <div className="flex">
                <h3 className="subtitle">
                  <span className="">Blogging Website</span>
                </h3>
                <div className="flex items-center">
                  <h4 className="location mr-1">
                    <span className="">
                      https://medium-alpha-blond.vercel.app/
                    </span>
                  </h4>
                  <span className="mx-[.15rem] text-sm font-semibold">|</span>
                  <h3 className="location ml-1">
                    <span className="">https://github.com/22vedant/medium</span>
                  </h3>
                </div>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Developed a full-stack web application using Hono serving a
                    REST API with React as the frontend.
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Utilized Prisma ORM to communicate with the hosted database.
                  </span>
                </p>
              </div>
            </div>
            <div className="subsection relative">
              <div className="flex flex-row">
                <h3 className="subtitle">
                  <span className="">Image Gallery</span>
                </h3>
                <div className="flex items-center">
                  <h4 className="location mr-1">
                    <span className="">
                      https://t3-app-phi-amber.vercel.app/
                    </span>
                  </h4>
                  <span className="mx-[.15rem] text-sm font-semibold">|</span>
                  <h3 className="location ml-1">
                    <span className="">https://github.com/22vedant/t3-app</span>
                  </h3>
                </div>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    A user friendly gallery web application that is implemented
                    in Next.js.
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Implemented Authentication using Clerk Auth service - Google
                    and Github OAuth. This helped reduce user onboarding time
                    and improved user experience.
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Utilized a S3 store (UploadThing) to store assets
                  </span>
                </p>
              </div>
            </div>
            <div className="subsection relative">
              <div className="flex">
                <h3 className="subtitle">
                  <span className="">Expense Tracker</span>
                </h3>
                <div className="flex items-center">
                  <span className="mx-[.15rem] text-sm font-semibold">|</span>
                </div>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    A expense tracking website that allows users to track their
                    expenses according to the date of the month.
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Implemented Authentication using NextAuth OAuth which
                    reduces the user onboarding time and improves the UX.
                  </span>
                </p>
              </div>
              <div className="flex">
                <p className="ml-1 font-black">•</p>
                <p className="bullets">
                  <span className="">
                    Created REST API to fulfill the CRUD requirements of the
                    product.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section relative box-border outline-offset-2 outline-blue-400 duration-100 ease-in-out hover:outline-dashed">
          <h2 className="view">EDUCATION</h2>
          <div className="">
            <div className="flex">
              <h3 className="subtitle">
                <span className="">
                  Anantrao Pawar College of Engineering and Research
                </span>
              </h3>
              <h3 className="location">
                <span className="">Pune, MH</span>
              </h3>
            </div>
            <div className="flex">
              <h3 className="jobTitle">
                <span className="">BE Computer Engineering</span>
                <span className="mx-1 text-sm font-semibold not-italic">|</span>
                <span className="">
                  <span className="font-bold">GPA:</span> 8.7 / 10.0
                </span>
              </h3>
              <h3 className="dates">
                <span className="">Dec 2021 - Dec 2025</span>
              </h3>
            </div>
            <p className="text">
              <span className="">
                <span className="font-bold">Relevant Coursework:</span> Design
                &amp; Analysis of Algorithms, Data Structures and Algorithms,
                Object Oriented Paradigm, Database Management Systems,
                Programming Languages, Information Security, Computer
                Networks,Blockchain, Operating Systems, Theory of Computation
              </span>
            </p>
          </div>
        </div>
        <div className="section relative box-border outline-offset-2 outline-blue-400 duration-100 ease-in-out hover:outline-dashed">
          <h2 className="view">PUBLICATIONS</h2>
          <div className="flex">
            <p className="bullets">
              <span className="">
                Deshmane, Vaishnavi and Musale, Prof. Jitendra and Joshi, Prof.
                Shweta and Chinta, Vedant and Gokak, Kaif and Dalbhanjan, Isha,
                Web Scraping for E-Commerce Website (April 15, 2024).
                International Journal for Innovative Engineering &amp;
                Management Research, Vol. 13, No. 4, 2024, Available at SSRN:
                https://ssrn.com/abstract=4794897
              </span>
            </p>
          </div>
        </div>
        <div className="section relative box-border outline-offset-2 outline-blue-400 duration-100 ease-in-out hover:outline-dashed">
          <h2 className="view">ACHIEVEMENTS</h2>
          <div className="flex">
            <p className="ml-1 font-black">•</p>
            <p className="bullets">
              <span className="">Passed JLPT N5 level.</span>
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default RightSidebar;
