// pages/blog.tsx
export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
          Introduction to Web Development: Building the Digital World
        </h1>
        <p className="text-gray-500 text-sm text-center mb-10">
          October 7, 2024 | By Sana Abid
        </p>
        <article className="text-gray-700 leading-relaxed space-y-6">
          <p>
            In today’s digital age, web development is at the heart of everything we see online. From simple blogs to complex e-commerce platforms, web development powers the internet. But what exactly is web development, and why is it so crucial in our tech-driven world?
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">What is Web Development?</h2>
          <p>
            Web development is the process of creating, building, and maintaining websites. It involves a variety of tasks, from coding and designing layouts to implementing user-friendly features and ensuring that a website functions smoothly. There are two main parts to web development:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Frontend Development:</strong> The visible parts of the website that users interact with.</li>
            <li><strong>Backend Development:</strong> The server side, handling all behind-the-scenes processes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Why is Web Development Important?</h2>
          <p>
            - <strong>Business Growth:</strong> Websites reach millions of users, helping businesses connect with audiences.
            - <strong>User Engagement:</strong> Smooth, enjoyable user experience.
            - <strong>Brand Identity:</strong> A well-designed site builds credibility.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Essential Skills in Web Development</h2>
          <p>
            Aspiring web developers should focus on:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Version Control (Git)</li>
            <li>Responsive Design</li>
            <li>Backend Development</li>
            <li>Problem-Solving and Debugging</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800">Current Trends in Web Development</h2>
          <p>
            Web development is always evolving. Key trends include:
            - <strong>PWAs:</strong> Blending the best of web and mobile applications.
            - <strong>AI and Machine Learning:</strong> Bringing personalized experiences to websites.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Getting Started with Web Development</h2>
          <p>
            Start with small projects, build your skills, and grow your portfolio over time.
          </p>

          <p className="text-gray-800 font-bold text-xl mt-8">
            Conclusion
          </p>
          <p>
            Web development is a rewarding and dynamic field. With the right skills and dedication, you can build websites and applications that shape the digital experiences of millions. Start learning today and become a part of the web’s future!
          </p>
        </article>
      </div>
    </div>
  );
}
