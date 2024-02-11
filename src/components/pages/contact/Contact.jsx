import LayoutSection from "../../shared/LayoutSection";
import tw from "tailwind-styled-components";
import PageWrapper from "../../PageWrapper";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import SlideUpElement from "../../shared/SlideUpElement";

export default function Contact() {
  return (
    <PageWrapper
      bg="bg-gray-200"
      title="Constructs - Contact Us"
      description="coontact us and shit, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat ipsa amet fuga ullam saepe?"
      href="https://osama263.github.io/constructs/#/contact"
    >
      <div className="bg-gray-200">
        <LayoutSection
          id="form"
          styles="xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[60%]"
        >
          <ContactForm title="Contact Us" />
          <FAQ />
        </LayoutSection>
      </div>
    </PageWrapper>
  );
}

export const ContactForm = ({ title }) => {
  return (
    <SlideUpElement offsetY="35%">
      <div className="flex flex-col items-center py-4 text-center gap-y-6">
        <h6 className="font-medium tracking-widest uppercase sm:text-base text-sm text-darkGray">
          get in touch
        </h6>
        <h1 className="md:text-5xl text-3xl font-bold">{title}</h1>
      </div>
      {/* FORM INPUST */}
      <Form>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" placeholder="User Name" />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input
            id="phone"
            name="phone"
            placeholder="0123456789"
            type="number"
          />
        </label>
        <label htmlFor="message">
          Name
          <textarea
            placeholder="Write Your Message Here"
            id="message"
            name="message"
            rows="6"
          ></textarea>
        </label>
        <button
          type="submit"
          className="px-10 py-2 text-sm w-fit bg-lime rounded-2xl hover:bg-gray-400"
        >
          Submit
        </button>
      </Form>
    </SlideUpElement>
  );
};

const Form = tw.form`
[&_input]:p-3
[&_input]:rounded-2xl
[&_textarea]:rounded-2xl
[&_textarea]:p-3
[&_label]:text-sm
[&_label]:capitalize
[&_label]:flex 
[&_label]:flex-col
[&_label]:gap-y-2
flex
flex-col
gap-y-4
`;

const FAQ = () => {
  return (
    <section id="FAQ">
      <SlideUpElement offsetY="69%">
        <div className="flex flex-col items-center pb-10 font-medium text-center gap-y-8 pt-28">
          <h6 className="tracking-widest uppercase text-darkGray">
            ask the construct team
          </h6>
          <h1 className="lg-mobile:text-5xl text-3xl  font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="sm:max-w-[480px] text-center text-darkGray text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure
            consectetur nesciunt.
          </p>
        </div>
      </SlideUpElement>
      {/* ACCORDIONS------ */}
      <Accordion allowMultiple>
        {FAQ_DATA.map(({ Q }, i) => (
          <SlideUpElement offsetY="20%" key={i} ind={i}>
            <AccordionItem className="!overflow-hidden !rounded-3xl mb-8">
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    bg="white"
                    _expanded={{ bg: "#3b3e43", color: "white" }}
                    _hover={{ bg: "#54575b", color: "white" }}
                    className="[&_#plus>span]:hover:!bg-white !flex !flex-col !items-start [&_.chakra-collapse]:!w-full"
                  >
                    <div className="w-full sm:p-10 p-4 flex-between gap-x-4 text-start">
                      <h1 className="sm:text-2xl text-lg font-medium">{Q}</h1>
                      {/* PLUS SIGN */}
                      <div id="plus" className="relative w-4">
                        <PlusSpan
                          className={isExpanded ? "!bg-white" : ""}
                        ></PlusSpan>
                        <PlusSpan
                          className={
                            isExpanded ? "!bg-white rotate-0" : "rotate-90"
                          }
                        ></PlusSpan>
                      </div>
                    </div>
                    <AccordionPanel className="sm:p-10 p-4 sm:text-lg text-sm !text-start !bg-darkGray !text-lightGray">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati reprehenderit eligendi repellat iure, asperiores
                      deserunt blanditiis ut explicabo non odit, quisquam ipsum
                      eaque.
                    </AccordionPanel>
                  </AccordionButton>
                </>
              )}
            </AccordionItem>
          </SlideUpElement>
        ))}
      </Accordion>
    </section>
  );
};

const PlusSpan = tw.span`
bg-darkGray 
transition-all 
absolute 
h-[2px] 
w-full
duration-700
`;

const FAQ_DATA = [
  { Q: "What is the scope of the construction project?", A: "" },
  { Q: "How is security managed on the construction site?", A: "" },
  { Q: "What is the purpose of the construction project?", A: "" },
  { Q: "Who are the concepts involved in the project?", A: "" },
  { Q: "How can I contact the Constructs team?", A: "" },
];
