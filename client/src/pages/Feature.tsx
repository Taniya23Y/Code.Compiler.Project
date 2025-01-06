import { Button } from "../components/ui/button";

const FeaturePage = () => {
  return (
    <div className="font-sans bg-[#030712]">
      {/* Features Section */}
      <section className="py-12 bg-[#030712]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Key Features of Code.Compiler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Save Code */}
            <div className="group bg-[#030712] p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Save Code
              </h3>
              <p className="text-white">
                Store your code securely on the cloud, and access it from
                anywhere at any time.
              </p>
              <Button variant="blue" className="mt-4">
                Try Saving Code
              </Button>
              {/* Gradient Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>

            {/* Feature 2: Load Code */}
            <div className="group bg-[#030712] p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Load Code
              </h3>
              <p className="text-white">
                Easily load previously saved code using a unique code ID or URL
                link.
              </p>
              <Button variant="blue" className="mt-4">
                Load Your Code
              </Button>
              {/* Gradient Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>

            {/* Feature 3: Edit Code */}
            <div className="group bg-[#030712] p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Edit Code
              </h3>
              <p className="text-white">
                Update or modify your saved code as per your requirements.
              </p>
              <Button variant="blue" className="mt-4">
                Edit Code
              </Button>
              {/* Gradient Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>

            {/* Feature 4: Delete Code */}
            <div className="group bg-[#030712] p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-30 border border-white border-opacity-20 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Delete Code
              </h3>
              <p className="text-white">
                Remove any unwanted or outdated code from your saved list with
                ease.
              </p>
              <Button variant="destructive" className="mt-4">
                Delete Code
              </Button>
              {/* Gradient Highlight on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;
