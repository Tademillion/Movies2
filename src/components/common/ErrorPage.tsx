import { Link } from "react-router-dom";

interface ErrorPageProps {
  errorType?: "404" | "500" | "network" | "generic";
  message?: string;
}

const ErrorPage = ({ errorType, message }: ErrorPageProps) => {
  const actualErrorType = errorType || "generic";
  const errorMessages = {
    404: {
      title: "Page Not Found",
      description:
        "The page you are looking for doesn't exist or has been moved.",
      icon: "🔍",
    },
    500: {
      title: "Server Error",
      description: "Something went wrong on our end. Please try again later.",
      icon: "⚙️",
    },
    network: {
      title: "Network Error",
      description:
        "Unable to connect to the server. Please check your internet connection.",
      icon: "🌐",
    },
    generic: {
      title: "Oops! Something went wrong",
      description:
        message || "An unexpected error occurred. Please try again later.",
      icon: "⚠️",
    },
  };

  const currentError = errorMessages[actualErrorType];
  // const currentError = errorMessages[errorType];  we cannot because the errorType is optional and may be undefined

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 max-w-2xl w-full border border-white/10">
        <div className="text-6xl mb-6">{currentError.icon}</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          {currentError.title}
        </h1>
        <p className="text-white/70 text-lg mb-8">{currentError.description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
          >
            Go to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
