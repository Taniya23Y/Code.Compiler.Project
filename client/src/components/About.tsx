const AboutUs = () => {
  return (
    <div className="bg-[#030712] text-white py-16 px-16 mx-auto">
      <div className="container mx-auto px-4 text-left">
        <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Code.Compiler
        </h2>
        <p className="text-[1rem] mb-8">
          Code.Compiler is an online platform designed to simplify the coding
          experience. With an intuitive interface and a set of powerful
          features, Code.Compiler allows developers to write, save, edit, and
          share their code seamlessly. Our goal is to help programmers of all
          levels boost productivity and streamline their workflow.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Mission</h3>
        <p className="text-[1rem] mb-8">
          Mission is to provide an all-in-one coding environment that eliminates
          the need for complex IDE setups. Code.Compiler allows developers to
          focus on writing great code without worrying about the setup or
          infrastructure.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-blue-300">
          Why Choose Code.Compiler?
        </h3>
        <ul className="list-disc list-inside text-[1rem] mb-8 ">
          <li>Seamless code editing with auto-saving functionality</li>
          <li>Share your code with others easily</li>
          <li>Store, load, edit, and delete your code anytime</li>
          <li>Fast, intuitive, and user-friendly interface</li>
          <li>Collaborative features for team projects (coming soon)</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Vision</h3>
        <p className="text-1rem[] mb-8">
          Code.Compiler aims to be the go-to platform for developers,
          simplifying the process of coding and collaboration. Whether you're a
          beginner or an experienced developer, we want to provide the tools you
          need to succeed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
