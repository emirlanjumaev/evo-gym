import MyMotion from "../mymotion/MyMotion";
import STitle from "../STitle/STitle";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import ActionButton from "../buttons/ActionButton";
import { LinksEnum } from "@/shared";
import { useLinkContext } from "@/context/LinkContext";
import GraphicBenefits from "@/assets/BenefitsPageGraphic.png";

export default function Benefits() {
  const { setSelectedPage } = useLinkContext();
  return (
    <section id="benefits" className="mt-16 bg-white min-h-[100vh] pb-16">
      <div className="container">
        <div className="inline-block mt-6">
          <STitle>MORE THAN JUST A GYM</STitle>
          <p className="text-sm mt-2 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            aliquam optio, laudantium explicabo itaque inventore?
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <MyMotion
              initial={{ opacity: 0, x: -50 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <div className="border border-black/30 rounded-md p-4">
                <div className="flex items-center justify-center flex-col">
                  <div className="benefits-icon rounded-full w-12 h-12 bg-primary-300 flex items-center justify-center p-2 shadow shadow-black/50">
                    <AcademicCapIcon width={"100%"} className="text-gray-500" />
                  </div>
                  <h4 className="font-bold text-md mt-2">
                    State of the Art Facilities
                  </h4>
                  <p className="text-sm my-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    expedita quaerat non? Iure, praesentium iusto.
                  </p>
                  <ActionButton
                    href={LinksEnum.Home}
                    setSelectedPage={setSelectedPage}
                    className="!text-gray-500 underline bg-secondary-500 text-sm"
                  >
                    Learn More
                  </ActionButton>
                </div>
              </div>
            </MyMotion>
            <MyMotion
              initial={{ opacity: 0, y: 50 }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="border border-black/30 rounded-md p-4 ">
                <div className="flex items-center justify-center flex-col">
                  <div className="benefits-icon rounded-full w-12 h-12 bg-primary-300 flex items-center justify-center p-2 shadow shadow-black/50">
                    <AcademicCapIcon width={"100%"} className="text-gray-500" />
                  </div>
                  <h4 className="font-bold text-md mt-2">
                    State of the Art Facilities
                  </h4>
                  <p className="text-sm my-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    expedita quaerat non? Iure, praesentium iusto.
                  </p>
                  <ActionButton
                    href={LinksEnum.Home}
                    setSelectedPage={setSelectedPage}
                    className="!text-gray-500 underline bg-secondary-500 text-sm"
                  >
                    Learn More
                  </ActionButton>
                </div>
              </div>
            </MyMotion>
            <MyMotion
              initial={{ opacity: 0, x: 50 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <div className="border border-black/30 rounded-md p-4 ">
                <div className="flex items-center justify-center flex-col">
                  <div className="benefits-icon rounded-full w-12 h-12 bg-primary-300 flex items-center justify-center p-2 shadow shadow-black/50">
                    <AcademicCapIcon width={"100%"} className="text-gray-500" />
                  </div>
                  <h4 className="font-bold text-md mt-2">
                    State of the Art Facilities
                  </h4>
                  <p className="text-sm my-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    expedita quaerat non? Iure, praesentium iusto.
                  </p>
                  <ActionButton
                    href={LinksEnum.Home}
                    setSelectedPage={setSelectedPage}
                    className="!text-gray-500 underline bg-secondary-500 text-sm"
                  >
                    Learn More
                  </ActionButton>
                </div>
              </div>
            </MyMotion>
          </div>
        </div>
        {/* GRAPHIC AND DESIGN */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="graphic md:flex-1">
              <MyMotion
                initial={{ opacity: 0, x: -20 }}
                visible={{ opacity: 1, x: 0 }}
              >
                <img
                  src={GraphicBenefits}
                  alt="Graphic Benefits"
                  className="z-[1] relative"
                />
              </MyMotion>
            </div>
            <div className="description mt-4 md:flex-1">
              <MyMotion
                initial={{ opacity: 0, x: 20 }}
                visible={{ opacity: 1, x: 0 }}
              >
                <div className="graphic-title relative">
                  <div className="fn before:absolute before:content-abstractwaves before:-top-20 before:-left-20" />
                  <STitle>
                    MILLION OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-300">FIT</span>
                  </STitle>
                </div>
                <p className="my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate rerum excepturi ea sit molestiae quia magnam nulla
                  perferendis aliquam, nobis nostrum. Ducimus iusto repudiandae
                  consequuntur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate rerum excepturi ea sit molestiae quia magnam nulla
                  perferendis aliquam, nobis nostrum. Ducimus iusto repudiandae
                  consequuntur.
                </p>

                <div className="action mt-8 relative z-10">
                  <ActionButton
                    href={LinksEnum.OurContact}
                    setSelectedPage={setSelectedPage}
                    className="bg-secondary-500  before:absolute before:-bottom-20 before:content-sparkles before:right-40 before:z-[-1]"
                  >
                    Join Now
                  </ActionButton>
                </div>
              </MyMotion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
