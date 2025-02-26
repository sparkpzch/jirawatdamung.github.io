import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          src="/pictures/profile.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold">
          Jirawat Damung {/* Replace with your name */}
        </h1>
        <p className="text-gray-600">
          Fullstack - Developer {/* Replace with your title/description */}
        </p>
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/jirawat-damung-023791343/" // Replace with your LinkedIn profile
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sparkpzch" // Replace with your GitHub profile
            className="ml-4 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>

      <footer className="w-full flex items-center justify-center border-t">
        <p>
          © 2025 Jirawat Damung. All rights reserved.{" "}
          {/* Replace with your info */}
        </p>
      </footer>
    </div>
  );
}
