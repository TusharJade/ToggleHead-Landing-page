import Options from "./Options";

const FaqSection = () => {
  return (
    <section className="mx-8 md:mx-20 mb-10">
      <div className="text-center text-[24px] text-[#12406F] font-bold mt-7 mb-12">
        FAQ
      </div>
      {[
        "How does an investor gain access to MF Utility?",
        "Will investors be able to have multiple Common Account Numbers?",
        "How does an investor gain access to MF Utility?",
      ].map((item, id) => (
        <Options item={item} id={id} key={id} />
      ))}
    </section>
  );
};

export default FaqSection;
