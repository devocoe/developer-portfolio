import Head from "next/head";
import Button from "../components/Button";

const contact = () => {
  return (
    <main>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Let's connect, share ideas and work together."
        />
      </Head>
      <div className="py-16 lg:py-20">
        <div>
          <img
            src="/img/icon-contact.png"
            width={48}
            height={36}
            alt="icon envelope"
          />
        </div>
        <h1 className="pt-5 mb-4 text-4xl font-semibold   md:text-5xl lg:text-6xl">
          Contact
        </h1>
        <div className="pr-2 pt-3 sm:pt-0">
          <p className=" text-xl   ">
            Let's connect, share ideas and work together.
          </p>
        </div>
        <form
          className="pt-16"
          action="https://formspree.io/f/mgerowbw"
          method="POST"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:mr-3 sm:w-1/2">
              <label className="block pb-3  font-medium  ">Your Name</label>
              <input
                required
                min={3}
                name="name"
                type="text"
                id="name"
                style={{ width: "100%" }}
                placeholder="What should I call you?"
                className="w-full border-2 px-5 py-4 rounded mr-2  dark:bg-secondary transition-colors focus:border-primary outline-none sm:w-1/2"
              />
            </div>
            <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
              <label className="block pb-3  font-medium  ">Email Address</label>
              <input
                name="email"
                required
                type="email"
                id="email"
                style={{ width: "100%" }}
                placeholder="Drop that email here…"
                className="w-full border-2 px-5 py-4 rounded mr-2  transition-colors dark:bg-secondary focus:border-primary outline-none sm:w-1/2"
              />
            </div>
          </div>
          <div className="w-full py-6 sm:pt-10">
            <label className="block pb-3  font-medium">Message</label>
            <textarea
              id="message"
              required
              name="message"
              rows="9"
              placeholder="Tell me all the things that you think I need to hear…"
              style={{ width: "100%" }}
              className=" border-2 px-5 dark:bg-secondary py-4 rounded mr-2  transition-colors focus:border-primary outline-none sm:w-1/2 resize-y"
            ></textarea>
          </div>
          <Button text={"Send"} />
        </form>
      </div>
    </main>
  );
};

export default contact;
